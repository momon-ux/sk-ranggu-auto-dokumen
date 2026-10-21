# SISTEM AUTO DOKUMEN & PENJANA SLIP KEPUTUSAN PEPERIKSAAN AUTOMATIK
## SEKOLAH KEBANGSAAN RANGGU, TAWAU, SABAH (KOD SEKOLAH: XBA3037)

> **Inspirasi & Rujukan:** Video Tutorial `@drexcelonly` (*Cara Bina Sistem Auto Result Exam / Sistem Auto Dokumen*) — Fail: `v29025g50000daoiucfog65t4d4me2kg.MP4`.  
> **Pembangun Sistem:** Cikgu Mohammad Fikrey bin Abdul Gapar.

---

## 📌 1. Masalah Sebenar Yang Diselesaikan

Dalam pengurusan peperiksaan dan pentaksiran murid di sekolah:
1. **Kerja Manual Mengambil Masa Berjam-Jam:** Guru kelas terpaksa menaip nama, kelas, markah, jumlah, purata, dan ulasan bagi setiap murid satu persatu ke dalam Microsoft Word atau Canva, kemudian mengeksport satu demi satu menjadi PDF.
2. **Isu E-mel & Edaran Kepada Ibu Bapa:** Menghantar slip peperiksaan kepada berpuluh-puluh ibu bapa melalui WhatsApp atau e-mel secara manual amat memenatkan dan berisiko berlaku keciciran.
3. **Risiko Ralat Data:** Pengiraan manual gred, purata dan kedudukan kelas kerap berlaku ralat.

---

## 🚀 2. Arkitektur & Komponen Lengkap Sistem

Sistem ini menggabungkan ekosistem **Google Workspace (RM0 Sifar Kos)** bersama **Aplikasi Web Interaktif Moden**:

```
┌─────────────────────────────────┐      ┌──────────────────────────────────┐
│   1. Pangkalan Data Markah      │ ───► │  2. Templat Rasmi Slip SK Ranggu │
│ (Google Sheets / Fail CSV 50 M) │      │ (Google Docs / Word dengan Logo) │
└─────────────────────────────────┘      └──────────────────────────────────┘
                 │                                        │
                 ▼                                        ▼
┌───────────────────────────────────────────────────────────────────────────┐
│              3. Enjin Automasi Google Apps Script (Code.gs)               │
│ • Menggantikan tag <<NAMA_MURID>>, <<BM_M>>, <<TOTAL>>, <<PURATA>>, dll.   │
│ • Menjana fail PDF individu dalam Google Drive (Subfolder PDF_[NamaDoc])   │
│ • Menghantar e-mel automatik berserta lampiran PDF kepada penjaga murid   │
│ • Mengemas kini status: BERJAYA / BERJAYA - TIDAK DIEMEL dalam masa nyata │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 3. Senarai Fail Dalam Pakej Ini

Semua bahan telah siap dibina dan disusun kemas di dalam direktori:
`/Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/`

| Nama Fail | Format | Kegunaan |
|---|---|---|
| [`index.html`](file:///Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/index.html) | HTML5 Web App | Antaramuka interaktif penuh (Setup, Pangkalan Data, Hab Penjanaan, & Pratonton Slip A4). |
| [`style.css`](file:///Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/style.css) | CSS3 Stylesheet | Gaya paparan korporat moden + format cetakan rasmi A4 standard Kementerian Pendidikan Malaysia. |
| [`app.js`](file:///Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/app.js) | JavaScript | Logik pemprosesan batch, pengiraan markah/gred automatik, simulasi log masa nyata, dan penapis kelas. |
| [`Code.gs`](file:///Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/Code.gs) | Google Apps Script | Kod skrip lengkap untuk ditampal ke dalam Google Sheets bagi penjanaan sebenar di Google Drive. |
| [`Template_Slip_Keputusan_SK_Ranggu.docx`](file:///Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/Template_Slip_Keputusan_SK_Ranggu.docx) | Word / Docs | Templat rasmi siap dengan Logo KPM & Logo SK Ranggu telus (*cutout*) serta ruang tandatangan. |
| [`Data_Murid_SK_Ranggu_Peperiksaan.csv`](file:///Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/Data_Murid_SK_Ranggu_Peperiksaan.csv) | Fail CSV | Data contoh 50 murid SK Ranggu merentasi 4 kelas (6 Intelek, 6 Kreatif, 5 Dinamik, 5 Efektif). |
| [`assets/logo_kpm.png`](file:///Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/assets/logo_kpm.png) | Imej Telus PNG | Logo Kementerian Pendidikan Malaysia (Jata Negara) tanpa latar putih. |
| [`assets/logo_skrg.png`](file:///Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/assets/logo_skrg.png) | Imej Telus PNG | Logo rasmi Sekolah Kebangsaan Ranggu, Tawau (1973) tanpa latar putih. |

---

## 🛠️ 4. Panduan Langkah Demi Langkah Persediaan (Setup)

### Langkah 1: Sediakan Google Sheet
1. Buka [Google Sheets](https://sheets.new).
2. Pergi ke menu **File ➔ Import ➔ Upload**, dan muat naik fail [`Data_Murid_SK_Ranggu_Peperiksaan.csv`](file:///Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/Data_Murid_SK_Ranggu_Peperiksaan.csv).
3. Pastikan baris pertama mengandungi tajuk lajur seperti `NAMA_MURID`, `NO_MURID`, `KELAS`, `BM_M`, `BM_G`, dsb.

### Langkah 2: Sediakan Templat Google Docs
1. Buka [Google Drive](https://drive.google.com).
2. Muat naik fail [`Template_Slip_Keputusan_SK_Ranggu.docx`](file:///Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/Template_Slip_Keputusan_SK_Ranggu.docx).
3. Buka fail tersebut dan pilih **Save as Google Docs**.
4. Salin **ID Fail** daripada URL Google Docs:
   `https://docs.google.com/document/d/`**`[ID_FAIL_DOCS_DISINI]`**`/edit`

### Langkah 3: Sediakan Folder Google Drive untuk Menyimpan PDF
1. Cipta folder baharu di Google Drive bernama `PDF_Slip_Peperiksaan_SK_Ranggu`.
2. Salin **ID Folder** daripada URL:
   `https://drive.google.com/drive/folders/`**`[ID_FOLDER_DRIVE_DISINI]`**

### Langkah 4: Pasang Skrip Automasi (`Code.gs`)
1. Di Google Sheet anda, klik menu **Extensions ➔ Apps Script**.
2. Padam sebarang kod sedia ada, kemudian buka dan salin keseluruhan kod daripada fail [`Code.gs`](file:///Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/Code.gs).
3. Tampal ke dalam editor Apps Script dan klik **Save (💾)**.
4. Pilih fungsi `setupSheetStructure` di bahagian atas dan klik **Run** untuk mengesahkan sambungan dan kebenaran keselamatan Google.

### Langkah 5: Mulakan Penjanaan Kelompok (Batch Run)
1. Panggil fungsi `janaSlipsBatch` atau gunakan antaramuka Web App [`index.html`](file:///Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/index.html).
2. Sistem akan memproses mengikut **Had Selamat 25 baris setiap pusingan** bagi mengelakkan masalah *execution timeout*.
3. Setiap murid yang siap diproses akan menerima:
   - Satu fail PDF rasmi di dalam Google Drive.
   - Pautan langsung (*View Link*) yang dikemas kini pada lajur `LINK_PDF` dalam Google Sheet.
   - Status automatik `BERJAYA` atau `BERJAYA - TIDAK DIEMEL`.
   - E-mel rasmi berserta lampiran PDF dihantar ke e-mel ibu bapa (jika diaktifkan).

---

## 🌟 5. Kelebihan Khusus Untuk SK Ranggu
* **100% Sifar Kos Lesen (RM0):** Tidak memerlukan langganan Canva Pro atau perisian berbayar pihak ketiga.
* **Format Rasmi & Kemas:** Menepati standard format Kementerian Pendidikan Malaysia dengan dwi-logo rasmi KPM dan SK Ranggu.
* **Mesra Guru:** Boleh dicetak serta-merta dalam format A4 standard atau dihantar terus ke telefon bimbit penjaga.
