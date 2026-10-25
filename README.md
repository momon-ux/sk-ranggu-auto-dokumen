# 🏫 SISTEM AUTO DOKUMEN & PENJANA SLIP PEPERIKSAAN SK RANGGU
### Sekolah Kebangsaan Ranggu, Tawau, Sabah (Kod Sekolah: XBA3037)

🌐 **Pautan Laman Langsung (GitHub Pages):**  
👉 **[https://momon-ux.github.io/sk-ranggu-auto-dokumen/](https://momon-ux.github.io/sk-ranggu-auto-dokumen/)**

---

## 🎯 Pengenalan
Sistem ini diinspirasikan daripada video tutorial *@drexcelonly* (*Cara Bina Sistem Auto Result Exam / Sistem Auto Dokumen*) untuk menyelesaikan masalah beban kerja manual para guru kelas di SK Ranggu:
1. **Pengisian Manual Berjam-Jam:** Menggantikan proses menaip satu persatu nama, markah, jumlah, purata, dan ulasan murid.
2. **Penjanaan PDF Automatik:** Menjana fail PDF individu dalam Google Drive dengan satu klik.
3. **Pengedaran E-mel Kepada Penjaga:** Menghantar e-mel automatik berserta lampiran slip PDF kepada ibu bapa murid.
4. **100% Sifar Kos (RM0):** Menggunakan ekosistem Google Workspace (Google Sheets, Docs, Drive & Apps Script) tanpa sebarang kos perisian luar.
5. **Salin Terus ke MOEIS SPPB (moeissppb.moe.gov.my/page/dashboard):** Guru mata pelajaran boleh menyalin skor PBD (lajur nombor TP, markah, ulasan atau skrip auto-isi konsol) untuk dipindahkan terus ke portal rasmi Dashboard SPPB KPM dengan mudah dan pantas.

---

## 📦 Bahan & Komponen Sistem

| Fail | Penerangan |
|---|---|
| [`index.html`](index.html) | Antaramuka Web App interaktif (Setup Dokumen, Pangkalan Data, Hab Penjanaan & Pratonton Slip A4). |
| [`app.js`](app.js) | Logik enjin batch, pengiraan markah/gred automatik, dan log masa nyata. |
| [`style.css`](style.css) | Gaya moden mesra semua peranti + format cetakan A4 rasmi KPM. |
| [`Code.gs`](Code.gs) | Skrip Google Apps Script untuk operasi langsung di Google Sheets & Drive. |
| [`Template_Slip_Keputusan_SK_Ranggu.docx`](Template_Slip_Keputusan_SK_Ranggu.docx) | Templat rasmi lengkap dengan Logo KPM dan Logo SK Ranggu telus (*cutout*). |
| [`Data_Murid_SK_Ranggu_Peperiksaan.csv`](Data_Murid_SK_Ranggu_Peperiksaan.csv) | Data contoh 50 orang murid SK Ranggu merentasi kelas Tahun 5 dan Tahun 6. |
| [`PANDUAN_SETUP_SISTEM_AUTO_DOKUMEN_SK_RANGGU.md`](PANDUAN_SETUP_SISTEM_AUTO_DOKUMEN_SK_RANGGU.md) | Panduan langkah demi langkah persediaan sistem. |

---

## 🚀 Cara Pemasangan & Penggunaan
1. Import fail [`Data_Murid_SK_Ranggu_Peperiksaan.csv`](Data_Murid_SK_Ranggu_Peperiksaan.csv) ke Google Sheets.
2. Muat naik fail [`Template_Slip_Keputusan_SK_Ranggu.docx`](Template_Slip_Keputusan_SK_Ranggu.docx) ke Google Drive dan simpan sebagai Google Docs.
3. Salin kod [`Code.gs`](Code.gs) ke **Extensions > Apps Script** dalam Google Sheet anda.
4. Tekan fungsi `setupSheetStructure` dan mulakan penjanaan dokumen secara berkelompok!

---
**Pembangun Sistem:** Cikgu Mohammad Fikrey bin Abdul Gapar (SK Ranggu, Tawau)  
**Hak Cipta Terpelihara © 2026 SK Ranggu, Tawau**
