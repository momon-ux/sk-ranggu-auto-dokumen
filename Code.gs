/**
 * ============================================================================
 * SISTEM AUTO DOKUMEN & PENJANA SLIP KEPUTUSAN PEPERIKSAAN AUTOMATIK
 * SEKOLAH KEBANGSAAN RANGGU, TAWAU, SABAH (KOD: XBA3037)
 * Diadaptasi & Ditambah Baik Berdasarkan Rujukan Video:
 * "Sistem Auto Dokumen / Auto Result Exam"
 * ============================================================================
 * Pembangun: Cikgu Mohammad Fikrey bin Abdul Gapar (SK Ranggu)
 * Dikuasakan oleh: Google Apps Script + Google Sheets + Docs + Google Drive
 */

// Konfigurasi Lalai
const DEFAULT_CONFIG = {
  documentName: "Slip Peperiksaan Akhir SK Ranggu 2026",
  senderName: "Unit Peperiksaan & Pentaksiran SK Ranggu, Tawau",
  replyTo: "skranggu.tawau@moe.gov.my",
  emailSubject: "Slip Keputusan Pentaksiran ((NAMA_MURID)) - SK Ranggu Tawau",
  emailBody: 
    "Assalamualaikum dan Salam Sejahtera Tuan/Puan Penjaga,\n\n" +
    "Berikut dilampirkan Slip Keputusan Pentaksiran Rasmi bagi anak tuan/puan:\n\n" +
    "Nama Murid: ((NAMA_MURID))\n" +
    "Kelas: ((KELAS))\n" +
    "Jumlah Markah: ((TOTAL))\n" +
    "Purata Keseluruhan: ((PURATA))\n" +
    "Kedudukan Dalam Kelas: ((POSISI))\n\n" +
    "Sila rujuk dokumen PDF yang dilampirkan untuk perincian markah, gred dan ulasan guru.\n\n" +
    "Sekian, terima kasih.\n\n" +
    "Yang menjalankan amanah,\n" +
    "Cikgu Mohammad Fikrey bin Abdul Gapar\n" +
    "Sekolah Kebangsaan Ranggu, Tawau, Sabah (XBA3037)",
  safeBatchLimit: 25 // Had selamat elak 6-minute Google Apps Script timeout
};

/**
 * Endpoint Utama Web App (GET)
 */
function doGet(e) {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle("Sistem Auto Dokumen SK Ranggu")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * 1. FUNGSI SETUP: Sediakan Struktur Google Sheet & Lajur Status
 */
function setupSheetStructure() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("Data_Peperiksaan");
  
  if (!sheet) {
    sheet = ss.getActiveSheet();
    sheet.setName("Data_Peperiksaan");
  }
  
  const headers = [
    "BIL", "NO_MURID", "NAMA_MURID", "KELAS", "SESI",
    "BM_M", "BM_G", "BI_M", "BI_G", "MT_M", "MT_G", "SN_M", "SN_G", "SEJ_M", "SEJ_G", "PI_M", "PI_G",
    "TOTAL", "PURATA", "POSISI", "HADIR",
    "ULASAN", "EMAIL_PENJAGA",
    "STATUS_JANA", "TARIKH_JANA", "CATATAN_JANA", "LINK_PDF"
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setBackground("#0F172A")
    .setFontColor("#FFFFFF")
    .setFontWeight("bold")
    .setHorizontalAlignment("center");
    
  sheet.setFrozenRows(1);
  return { success: true, message: "Struktur sheet berjaya disediakan!" };
}

/**
 * 2. BACA DATA MURID DARI SHEET
 */
function getSheetStudentsData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Data_Peperiksaan") || ss.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  if (data.length <= 1) {
    return { students: [], headers: [] };
  }
  
  const headers = data[0];
  const students = [];
  
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const student = { rowIndex: i + 1 };
    headers.forEach((header, colIndex) => {
      student[header] = row[colIndex];
    });
    students.push(student);
  }
  
  return { students: students, headers: headers };
}

/**
 * 3. JANA BATCH SLIP PDF & HANTAR EMEL (FUNGSI UTAMA)
 * @param {Object} options - { mode: 'PDF_ONLY'|'PDF_EMAIL', templateDocId, targetFolderId, onlyUnprocessed: boolean, selectedRowIndices: number[] }
 */
function janaSlipsBatch(options) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Data_Peperiksaan") || ss.getActiveSheet();
    const allData = sheet.getDataRange().getValues();
    const headers = allData[0];
    
    // Peta indeks lajur
    const colMap = {};
    headers.forEach((h, idx) => colMap[h] = idx + 1);
    
    // Semak folder Google Drive
    let targetFolder;
    if (options.targetFolderId) {
      targetFolder = DriveApp.getFolderById(options.targetFolderId);
    } else {
      const parent = DriveApp.getRootFolder();
      const folderName = "PDF_Slip_Peperiksaan_SK_Ranggu";
      const folders = parent.getFoldersByName(folderName);
      targetFolder = folders.hasNext() ? folders.next() : parent.createFolder(folderName);
    }
    
    // Subfolder khusus batch
    const subfolderName = "PDF_" + (options.documentName || DEFAULT_CONFIG.documentName).replace(/[^a-zA-Z0-9_-]/g, "_");
    const subfolders = targetFolder.getFoldersByName(subfolderName);
    const outputFolder = subfolders.hasNext() ? subfolders.next() : targetFolder.createFolder(subfolderName);
    
    // Template File
    if (!options.templateDocId) {
      throw new Error("ID Template Google Docs / Slides diperlukan!");
    }
    const templateFile = DriveApp.getFileById(options.templateDocId);
    
    // Tapis baris yang hendak diproses
    const rowsToProcess = [];
    for (let r = 1; r < allData.length; r++) {
      const rowIndex = r + 1;
      const rowData = allData[r];
      const status = rowData[colMap["STATUS_JANA"] - 1] || "";
      
      if (options.selectedRowIndices && options.selectedRowIndices.length > 0) {
        if (options.selectedRowIndices.includes(rowIndex)) {
          rowsToProcess.push({ rowIndex: rowIndex, data: rowData });
        }
      } else if (options.onlyUnprocessed) {
        if (!status || status === "BELUM DIPROSES" || status.includes("GAGAL")) {
          rowsToProcess.push({ rowIndex: rowIndex, data: rowData });
        }
      } else {
        rowsToProcess.push({ rowIndex: rowIndex, data: rowData });
      }
    }
    
    // Had selamat maksimum batch untuk kelancaran (elak timeout)
    const limit = Math.min(rowsToProcess.length, options.batchLimit || DEFAULT_CONFIG.safeBatchLimit);
    const currentBatch = rowsToProcess.slice(0, limit);
    
    let countSuccess = 0;
    let countEmailed = 0;
    let countFailed = 0;
    const logs = [];
    
    currentBatch.forEach(item => {
      const rowIndex = item.rowIndex;
      const row = item.data;
      
      const studentObj = {};
      headers.forEach((h, idx) => studentObj[h] = row[idx]);
      
      const nama = studentObj["NAMA_MURID"] || "Murid";
      const noMurid = studentObj["NO_MURID"] || `ID_${rowIndex}`;
      const email = (studentObj["EMAIL_PENJAGA"] || "").toString().trim();
      
      try {
        // 1. Salin fail template
        const tempDocFile = templateFile.makeCopy(`TEMP_${nama}_${noMurid}`, outputFolder);
        const tempDoc = DocumentApp.openById(tempDocFile.getId());
        const body = tempDoc.getBody();
        
        // 2. Gantikan semua tag placeholder: <<TAG>> dan ((TAG)) dan {{TAG}}
        headers.forEach(h => {
          const val = (studentObj[h] !== undefined && studentObj[h] !== null) ? String(studentObj[h]) : "";
          body.replaceText(`<<${h}>>`, val);
          body.replaceText(`\\(\\(${h}\\)\\)`, val);
          body.replaceText(`\\{\\{${h}\\}\\}`, val);
          body.replaceText(`<${h}>`, val);
        });
        
        tempDoc.saveAndClose();
        
        // 3. Eksport salinan ke format PDF
        const pdfBlob = tempDocFile.getAs(MimeType.PDF);
        const pdfFileName = `Slip_PASA_${nama.replace(/\s+/g, '_')}_${noMurid}.pdf`;
        pdfBlob.setName(pdfFileName);
        
        const pdfFile = outputFolder.createFile(pdfBlob);
        pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        const pdfUrl = pdfFile.getUrl();
        
        // 4. Padam fail Docs sementara
        tempDocFile.setTrashed(true);
        
        // 5. Urus Penghantaran Emel (jika dipilih)
        let emailSent = false;
        let emailNote = "";
        
        if (options.mode === "PDF_EMAIL" || options.sendEmail) {
          if (email && email.includes("@")) {
            // Sedia subject & body mengikut placeholder
            let subject = options.emailSubject || DEFAULT_CONFIG.emailSubject;
            let emailText = options.emailBody || DEFAULT_CONFIG.emailBody;
            
            headers.forEach(h => {
              const val = String(studentObj[h] || "");
              subject = subject.split(`((${h}))`).join(val);
              emailText = emailText.split(`((${h}))`).join(val);
            });
            
            MailApp.sendEmail({
              to: email,
              replyTo: options.replyTo || DEFAULT_CONFIG.replyTo,
              name: options.senderName || DEFAULT_CONFIG.senderName,
              subject: subject,
              body: emailText,
              attachments: [pdfFile.getAs(MimeType.PDF)]
            });
            
            emailSent = true;
            countEmailed++;
            emailNote = ` Slip dihantar ke emel: ${email}`;
          } else {
            emailNote = " Email tiada / tidak sah.";
          }
        }
        
        // 6. Kemas kini status dalam Google Sheet
        const nowStr = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm");
        const finalStatus = (options.mode === "PDF_EMAIL" && !emailSent) ? "BERJAYA - TIDAK DIEMEL" : "BERJAYA";
        const catatan = `[kod v1.0.1-skrg] Fail PDF siap dijana.${emailNote}`;
        
        sheet.getRange(rowIndex, colMap["STATUS_JANA"]).setValue(finalStatus);
        sheet.getRange(rowIndex, colMap["TARIKH_JANA"]).setValue(nowStr);
        sheet.getRange(rowIndex, colMap["CATATAN_JANA"]).setValue(catatan);
        sheet.getRange(rowIndex, colMap["LINK_PDF"]).setValue(pdfUrl);
        
        countSuccess++;
        logs.push({ rowIndex: rowIndex, nama: nama, status: finalStatus, pdfUrl: pdfUrl });
        
      } catch (err) {
        countFailed++;
        const nowStr = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm");
        sheet.getRange(rowIndex, colMap["STATUS_JANA"]).setValue("GAGAL");
        sheet.getRange(rowIndex, colMap["TARIKH_JANA"]).setValue(nowStr);
        sheet.getRange(rowIndex, colMap["CATATAN_JANA"]).setValue(`RALAT: ${err.message}`);
        logs.push({ rowIndex: rowIndex, nama: nama, status: "GAGAL", error: err.message });
      }
    });
    
    return {
      success: true,
      processed: currentBatch.length,
      successCount: countSuccess,
      emailedCount: countEmailed,
      failedCount: countFailed,
      remainingCount: rowsToProcess.length - currentBatch.length,
      folderUrl: outputFolder.getUrl(),
      logs: logs
    };
    
  } catch (globalErr) {
    return { success: false, error: globalErr.message };
  }
}

/**
 * 4. PENGIRAAN AUTOMATIK GRED & PURATA (FUNGSI PEMBANTU)
 */
function kiraMarkahDanGred(markah) {
  const m = Number(markah) || 0;
  if (m >= 80) return "A";
  if (m >= 65) return "B";
  if (m >= 50) return "C";
  if (m >= 40) return "D";
  return "E";
}
