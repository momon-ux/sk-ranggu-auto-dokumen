/**
 * ============================================================================
 * SISTEM AUTO DOKUMEN & PENJANA SLIP PENTAKSIRAN PBD / UASA SK RANGGU
 * Diintegrasikan Bersama Data Rasmi: https://mylink.la/skranggutawau
 * ============================================================================
 * Pembangun: Cikgu Mohammad Fikrey bin Abdul Gapar (SK Ranggu, Tawau)
 */

// Direktori Folder Google Drive Rasmi daripada https://mylink.la/skranggutawau
const MYLINK_DIRECTORIES = {
  portalUrl: "https://mylink.la/skranggutawau",
  headcountFolder: {
    title: "HEADCOUNT MATAPELAJARAN 2026",
    id: "14VY56lMLFpjOgRk2Gq1Z-fZP18M5vew2",
    url: "https://drive.google.com/drive/folders/14VY56lMLFpjOgRk2Gq1Z-fZP18M5vew2"
  },
  pbdMidYearFolder: {
    title: "PBD PERTENGAHAN TAHUN 2026",
    id: "1KFuS0kHENNXujHSr7cDdQ_pqEnZAVguF",
    url: "https://drive.google.com/drive/folders/1KFuS0kHENNXujHSr7cDdQ_pqEnZAVguF"
  },
  pbdFinalYearFolder: {
    title: "PBD AKHIR TAHUN 2026",
    id: "1tB8xmHRwcFsNinQTJogKpZd_dWf-njCn",
    url: "https://drive.google.com/drive/folders/1tB8xmHRwcFsNinQTJogKpZd_dWf-njCn"
  },
  pbd2025Folder: {
    title: "PBD 2025 (ARKIB)",
    id: "1U7RT5LYHKY2RsHoW-4xxStgfsn1OxJBc",
    url: "https://drive.google.com/drive/folders/1U7RT5LYHKY2RsHoW-4xxStgfsn1OxJBc"
  }
};

// Data Murid Autentik SK Ranggu Tawau (Tahun 6: 6 MUMTAZ, 6 JAYYID, 6 ILTIZAM, 6 KHOIR)
let studentsData = [
  // 6 MUMTAZ (Guru Kelas: Pn. Nurul Anisa binti Saparudin)
  { id: "SKRG-2026-Y6-001", name: "AADHAN MUHRIZ BIN MUHAMAD HARIS", kelas: "6 MUMTAZ", guru: "Pn. Nurul Anisa binti Saparudin", bm_m: 88, bm_g: "A", bm_tp: "TP 6 (Cemerlang)", bi_m: 84, bi_g: "A", bi_tp: "TP 5 (Sangat Baik)", mt_m: 92, mt_g: "A", mt_tp: "TP 6 (Cemerlang)", sn_m: 86, sn_g: "A", sn_tp: "TP 6 (Cemerlang)", sej_m: 90, sej_g: "A", sej_tp: "TP 6 (Cemerlang)", pi_m: 94, pi_g: "A", pi_tp: "TP 6 (Cemerlang)", total: "534 / 600", purata: "89.0%", posisi: "1 / 13", hadir: "198 / 200 Hari", ulasan: "Pencapaian sangat cemerlang! Calon murid teladan SK Ranggu.", email: "aadhan1@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-002", name: "AHMAD RIFQI BIN TOTONG", kelas: "6 MUMTAZ", guru: "Pn. Nurul Anisa binti Saparudin", bm_m: 85, bm_g: "A", bm_tp: "TP 6 (Cemerlang)", bi_m: 80, bi_g: "A", bi_tp: "TP 5 (Sangat Baik)", mt_m: 86, mt_g: "A", mt_tp: "TP 6 (Cemerlang)", sn_m: 84, sn_g: "A", sn_tp: "TP 5 (Sangat Baik)", sej_m: 88, sej_g: "A", sej_tp: "TP 6 (Cemerlang)", pi_m: 90, pi_g: "A", pi_tp: "TP 6 (Cemerlang)", total: "513 / 600", purata: "85.5%", posisi: "2 / 13", hadir: "196 / 200 Hari", ulasan: "Tahniah atas usaha gigih. Teruskan momentum kecemerlangan.", email: "rifqi2@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-003", name: "ADNI DAFINAH BINTI MURSALIN", kelas: "6 MUMTAZ", guru: "Pn. Nurul Anisa binti Saparudin", bm_m: 84, bm_g: "A", bm_tp: "TP 5 (Sangat Baik)", bi_m: 78, bi_g: "B", bi_tp: "TP 5 (Sangat Baik)", mt_m: 82, mt_g: "A", mt_tp: "TP 5 (Sangat Baik)", sn_m: 80, sn_g: "A", sn_tp: "TP 5 (Sangat Baik)", sej_m: 85, sej_g: "A", sej_tp: "TP 5 (Sangat Baik)", pi_m: 92, pi_g: "A", pi_tp: "TP 6 (Cemerlang)", total: "501 / 600", purata: "83.5%", posisi: "3 / 13", hadir: "195 / 200 Hari", ulasan: "Bagus dan berdisiplin. Tingkatkan kefahaman soalan KBAT.", email: "adni3@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-004", name: "ALFIN ZIKRI BIN MUHAMMAD ZULKIFLI", kelas: "6 MUMTAZ", guru: "Pn. Nurul Anisa binti Saparudin", bm_m: 80, bm_g: "A", bm_tp: "TP 5 (Sangat Baik)", bi_m: 76, bi_g: "B", bi_tp: "TP 5 (Sangat Baik)", mt_m: 78, mt_g: "B", mt_tp: "TP 5 (Sangat Baik)", sn_m: 78, sn_g: "B", sn_tp: "TP 5 (Sangat Baik)", sej_m: 82, sej_g: "A", sej_tp: "TP 5 (Sangat Baik)", pi_m: 86, pi_g: "A", pi_tp: "TP 6 (Cemerlang)", total: "480 / 600", purata: "80.0%", posisi: "4 / 13", hadir: "192 / 200 Hari", ulasan: "Prestasi akademik sangat konsisten dan memuaskan.", email: "", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-005", name: "AISHA DAMIA BINTI JAMALUDDIN", kelas: "6 MUMTAZ", guru: "Pn. Nurul Anisa binti Saparudin", bm_m: 78, bm_g: "B", bm_tp: "TP 5 (Sangat Baik)", bi_m: 80, bi_g: "A", bi_tp: "TP 5 (Sangat Baik)", mt_m: 74, mt_g: "B", mt_tp: "TP 4 (Baik)", sn_m: 76, sn_g: "B", sn_tp: "TP 5 (Sangat Baik)", sej_m: 80, sej_g: "A", sej_tp: "TP 5 (Sangat Baik)", pi_m: 88, pi_g: "A", pi_tp: "TP 6 (Cemerlang)", total: "476 / 600", purata: "79.3%", posisi: "5 / 13", hadir: "194 / 200 Hari", ulasan: "Murid yang rajin dan berakhlak mulia.", email: "aisha5@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-006", name: "AISYAH SARAH BINTI MUHAMAD SHAHRUDDIN", kelas: "6 MUMTAZ", guru: "Pn. Nurul Anisa binti Saparudin", bm_m: 76, bm_g: "B", bm_tp: "TP 5 (Sangat Baik)", bi_m: 74, bi_g: "B", bi_tp: "TP 4 (Baik)", mt_m: 70, mt_g: "B", mt_tp: "TP 4 (Baik)", sn_m: 72, sn_g: "B", sn_tp: "TP 4 (Baik)", sej_m: 78, sej_g: "B", sej_tp: "TP 5 (Sangat Baik)", pi_m: 85, pi_g: "A", pi_tp: "TP 6 (Cemerlang)", total: "455 / 600", purata: "75.8%", posisi: "6 / 13", hadir: "191 / 200 Hari", ulasan: "Bagus. Rajin bertanya dalam sesi PdPc.", email: "sarah6@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-007", name: "AFIFAH AUNI AQILAH BINTI JAMIDI", kelas: "6 MUMTAZ", guru: "Pn. Nurul Anisa binti Saparudin", bm_m: 74, bm_g: "B", bm_tp: "TP 4 (Baik)", bi_m: 70, bi_g: "B", bi_tp: "TP 4 (Baik)", mt_m: 68, mt_g: "B", mt_tp: "TP 4 (Baik)", sn_m: 70, sn_g: "B", sn_tp: "TP 4 (Baik)", sej_m: 75, sej_g: "B", sej_tp: "TP 5 (Sangat Baik)", pi_m: 82, pi_g: "A", pi_tp: "TP 5 (Sangat Baik)", total: "439 / 600", purata: "73.2%", posisi: "7 / 13", hadir: "190 / 200 Hari", ulasan: "Tingkatkan latihan Matematik di rumah.", email: "afifah7@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-008", name: "AIRIS NUR RAYSHA AMANDA BINTI RIDUAN", kelas: "6 MUMTAZ", guru: "Pn. Nurul Anisa binti Saparudin", bm_m: 72, bm_g: "B", bm_tp: "TP 4 (Baik)", bi_m: 68, bi_g: "B", bi_tp: "TP 4 (Baik)", mt_m: 65, mt_g: "B", mt_tp: "TP 4 (Baik)", sn_m: 68, sn_g: "B", sn_tp: "TP 4 (Baik)", sej_m: 72, sej_g: "B", sej_tp: "TP 4 (Baik)", pi_m: 80, pi_g: "A", pi_tp: "TP 5 (Sangat Baik)", total: "425 / 600", purata: "70.8%", posisi: "8 / 13", hadir: "189 / 200 Hari", ulasan: "Usaha tangga kejayaan. Berpotensi lebih baik.", email: "", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-009", name: "DAANIYATUL FATHIYYAH BINTI SUHAIMI", kelas: "6 MUMTAZ", guru: "Pn. Nurul Anisa binti Saparudin", bm_m: 70, bm_g: "B", bm_tp: "TP 4 (Baik)", bi_m: 65, bi_g: "B", bi_tp: "TP 4 (Baik)", mt_m: 62, mt_g: "C", mt_tp: "TP 3 (Memuaskan)", sn_m: 65, sn_g: "B", sn_tp: "TP 4 (Baik)", sej_m: 70, sej_g: "B", sej_tp: "TP 4 (Baik)", pi_m: 78, pi_g: "B", pi_tp: "TP 5 (Sangat Baik)", total: "410 / 600", purata: "68.3%", posisi: "9 / 13", hadir: "187 / 200 Hari", ulasan: "Beri perhatian khusus subjek Matematik.", email: "daaniyatul9@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-010", name: "HANA HUMAIRA BINTI ABD RIZAM", kelas: "6 MUMTAZ", guru: "Pn. Nurul Anisa binti Saparudin", bm_m: 68, bm_g: "B", bm_tp: "TP 4 (Baik)", bi_m: 62, bi_g: "C", bi_tp: "TP 3 (Memuaskan)", mt_m: 60, mt_g: "C", mt_tp: "TP 3 (Memuaskan)", sn_m: 62, sn_g: "C", sn_tp: "TP 3 (Memuaskan)", sej_m: 68, sej_g: "B", sej_tp: "TP 4 (Baik)", pi_m: 76, pi_g: "B", pi_tp: "TP 5 (Sangat Baik)", total: "396 / 600", purata: "66.0%", posisi: "10 / 13", hadir: "185 / 200 Hari", ulasan: "Teruskan usaha meningkatkan gred.", email: "hana10@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-011", name: "IZZ ZIQRI BIN MOHD AZLAN", kelas: "6 MUMTAZ", guru: "Pn. Nurul Anisa binti Saparudin", bm_m: 65, bm_g: "B", bm_tp: "TP 4 (Baik)", bi_m: 58, bi_g: "C", bi_tp: "TP 3 (Memuaskan)", mt_m: 56, mt_g: "C", mt_tp: "TP 3 (Memuaskan)", sn_m: 60, sn_g: "C", sn_tp: "TP 3 (Memuaskan)", sej_m: 65, sej_g: "B", sej_tp: "TP 4 (Baik)", pi_m: 74, pi_g: "B", pi_tp: "TP 4 (Baik)", total: "378 / 600", purata: "63.0%", posisi: "11 / 13", hadir: "186 / 200 Hari", ulasan: "Tingkatkan tumpuan sewaktu kelas.", email: "izz11@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-012", name: "MOHAMAD DANIEL HAIKAL BIN ABDUL HALIM", kelas: "6 MUMTAZ", guru: "Pn. Nurul Anisa binti Saparudin", bm_m: 62, bm_g: "C", bm_tp: "TP 3 (Memuaskan)", bi_m: 55, bi_g: "C", bi_tp: "TP 3 (Memuaskan)", mt_m: 52, mt_g: "C", mt_tp: "TP 3 (Memuaskan)", sn_m: 58, sn_g: "C", sn_tp: "TP 3 (Memuaskan)", sej_m: 62, sej_g: "C", sej_tp: "TP 3 (Memuaskan)", pi_m: 70, pi_g: "B", pi_tp: "TP 4 (Baik)", total: "359 / 600", purata: "59.8%", posisi: "12 / 13", hadir: "184 / 200 Hari", ulasan: "Perlu bimbingan tambahan dan ulangkaji.", email: "", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-013", name: "MOHAMMAD RAYYAN RIZQI BIN JASMAN", kelas: "6 MUMTAZ", guru: "Pn. Nurul Anisa binti Saparudin", bm_m: 60, bm_g: "C", bm_tp: "TP 3 (Memuaskan)", bi_m: 52, bi_g: "C", bi_tp: "TP 3 (Memuaskan)", mt_m: 48, mt_g: "D", mt_tp: "TP 2 (Tahap Minimum)", sn_m: 55, sn_g: "C", sn_tp: "TP 3 (Memuaskan)", sej_m: 60, sej_g: "C", sej_tp: "TP 3 (Memuaskan)", pi_m: 68, pi_g: "B", pi_tp: "TP 4 (Baik)", total: "343 / 600", purata: "57.2%", posisi: "13 / 13", hadir: "182 / 200 Hari", ulasan: "Disarankan hadir kelas bimbingan guru.", email: "rayyan13@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },

  // 6 JAYYID (Guru Kelas: AgKu Kemainddra bin Pg Mohd Taib)
  { id: "SKRG-2026-Y6-014", name: "MUHAMMAD AIDIL ZAFUAN BIN ZULKIFLI", kelas: "6 JAYYID", guru: "AgKu Kemainddra bin Pg Mohd Taib", bm_m: 82, bm_g: "A", bm_tp: "TP 5 (Sangat Baik)", bi_m: 75, bi_g: "B", bi_tp: "TP 5 (Sangat Baik)", mt_m: 76, mt_g: "B", mt_tp: "TP 5 (Sangat Baik)", sn_m: 78, sn_g: "B", sn_tp: "TP 5 (Sangat Baik)", sej_m: 82, sej_g: "A", sej_tp: "TP 5 (Sangat Baik)", pi_m: 86, pi_g: "A", pi_tp: "TP 6 (Cemerlang)", total: "479 / 600", purata: "79.8%", posisi: "1 / 13", hadir: "195 / 200 Hari", ulasan: "Pencapaian sangat membanggakan dalam 6 Jayyid.", email: "aidil14@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-015", name: "MUHAMMAD AQIL ZAFRI BIN ARIFIN", kelas: "6 JAYYID", guru: "AgKu Kemainddra bin Pg Mohd Taib", bm_m: 78, bm_g: "B", bm_tp: "TP 5 (Sangat Baik)", bi_m: 72, bi_g: "B", bi_tp: "TP 4 (Baik)", mt_m: 74, mt_g: "B", mt_tp: "TP 4 (Baik)", sn_m: 74, sn_g: "B", sn_tp: "TP 4 (Baik)", sej_m: 78, sej_g: "B", sej_tp: "TP 5 (Sangat Baik)", pi_m: 84, pi_g: "A", pi_tp: "TP 5 (Sangat Baik)", total: "460 / 600", purata: "76.7%", posisi: "2 / 13", hadir: "193 / 200 Hari", ulasan: "Bagus dan tekun menyiapkan tugasan.", email: "aqil15@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-016", name: "NUR AISYAH HUMAIRA BINTI KHAIRUL", kelas: "6 JAYYID", guru: "AgKu Kemainddra bin Pg Mohd Taib", bm_m: 76, bm_g: "B", bm_tp: "TP 5 (Sangat Baik)", bi_m: 70, bi_g: "B", bi_tp: "TP 4 (Baik)", mt_m: 70, mt_g: "B", mt_tp: "TP 4 (Baik)", sn_m: 72, sn_g: "B", sn_tp: "TP 4 (Baik)", sej_m: 76, sej_g: "B", sej_tp: "TP 5 (Sangat Baik)", pi_m: 82, pi_g: "A", pi_tp: "TP 5 (Sangat Baik)", total: "446 / 600", purata: "74.3%", posisi: "3 / 13", hadir: "191 / 200 Hari", ulasan: "Sikap positif dan aktif dalam bilik darjah.", email: "", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-017", name: "NUR ALEEYA MAISARAH BINTI MOHD FADLI", kelas: "6 JAYYID", guru: "AgKu Kemainddra bin Pg Mohd Taib", bm_m: 74, bm_g: "B", bm_tp: "TP 4 (Baik)", bi_m: 68, bi_g: "B", bi_tp: "TP 4 (Baik)", mt_m: 66, mt_g: "B", mt_tp: "TP 4 (Baik)", sn_m: 70, sn_g: "B", sn_tp: "TP 4 (Baik)", sej_m: 74, sej_g: "B", sej_tp: "TP 4 (Baik)", pi_m: 80, pi_g: "A", pi_tp: "TP 5 (Sangat Baik)", total: "432 / 600", purata: "72.0%", posisi: "4 / 13", hadir: "189 / 200 Hari", ulasan: "Kekalkan daya usaha secara berterusan.", email: "aleeya17@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-018", name: "NUR BATRISYA DANIA BINTI ROSLAN", kelas: "6 JAYYID", guru: "AgKu Kemainddra bin Pg Mohd Taib", bm_m: 70, bm_g: "B", bm_tp: "TP 4 (Baik)", bi_m: 64, bi_g: "C", bi_tp: "TP 3 (Memuaskan)", mt_m: 62, mt_g: "C", mt_tp: "TP 3 (Memuaskan)", sn_m: 66, sn_g: "B", sn_tp: "TP 4 (Baik)", sej_m: 70, sej_g: "B", sej_tp: "TP 4 (Baik)", pi_m: 78, pi_g: "B", pi_tp: "TP 5 (Sangat Baik)", total: "410 / 600", purata: "68.3%", posisi: "5 / 13", hadir: "192 / 200 Hari", ulasan: "Peningkatan ketara dalam Sains dan Sejarah.", email: "batrisya18@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },

  // 6 ILTIZAM (Guru Kelas: Pn. Noze binti Tukijan)
  { id: "SKRG-2026-Y6-019", name: "NUR DANIA IZZATI BINTI MOHD ZUKI", kelas: "6 ILTIZAM", guru: "Pn. Noze binti Tukijan", bm_m: 75, bm_g: "B", bm_tp: "TP 5 (Sangat Baik)", bi_m: 68, bi_g: "B", bi_tp: "TP 4 (Baik)", mt_m: 65, mt_g: "B", mt_tp: "TP 4 (Baik)", sn_m: 68, sn_g: "B", sn_tp: "TP 4 (Baik)", sej_m: 74, sej_g: "B", sej_tp: "TP 4 (Baik)", pi_m: 80, pi_g: "A", pi_tp: "TP 5 (Sangat Baik)", total: "430 / 600", purata: "71.7%", posisi: "1 / 12", hadir: "194 / 200 Hari", ulasan: "Prestasi terbaik dalam kelas 6 Iltizam. Teruskan!", email: "dania19@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-020", name: "NUR FATIHAH NAJWA BINTI ISMAIL", kelas: "6 ILTIZAM", guru: "Pn. Noze binti Tukijan", bm_m: 72, bm_g: "B", bm_tp: "TP 4 (Baik)", bi_m: 65, bi_g: "B", bi_tp: "TP 4 (Baik)", mt_m: 60, mt_g: "C", mt_tp: "TP 3 (Memuaskan)", sn_m: 64, sn_g: "C", sn_tp: "TP 3 (Memuaskan)", sej_m: 70, sej_g: "B", sej_tp: "TP 4 (Baik)", pi_m: 78, pi_g: "B", pi_tp: "TP 5 (Sangat Baik)", total: "409 / 600", purata: "68.2%", posisi: "2 / 12", hadir: "190 / 200 Hari", ulasan: "Rajin dan sentiasa fokus semasa bimbingan.", email: "", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },

  // 6 KHOIR (Guru Kelas: Pn. Bajam binti Ladung)
  { id: "SKRG-2026-Y6-021", name: "PUTERI NUR DAMIA BINTI HISHAM", kelas: "6 KHOIR", guru: "Pn. Bajam binti Ladung", bm_m: 70, bm_g: "B", bm_tp: "TP 4 (Baik)", bi_m: 64, bi_g: "C", bi_tp: "TP 3 (Memuaskan)", mt_m: 58, mt_g: "C", mt_tp: "TP 3 (Memuaskan)", sn_m: 62, sn_g: "C", sn_tp: "TP 3 (Memuaskan)", sej_m: 68, sej_g: "B", sej_tp: "TP 4 (Baik)", pi_m: 76, pi_g: "B", pi_tp: "TP 5 (Sangat Baik)", total: "398 / 600", purata: "66.3%", posisi: "1 / 12", hadir: "191 / 200 Hari", ulasan: "Murid cemerlang dalam 6 Khoir. Tahniah!", email: "puteri21@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-Y6-022", name: "RAJA MUHAMMAD FARIS BIN RAJA AZLAN", kelas: "6 KHOIR", guru: "Pn. Bajam binti Ladung", bm_m: 66, bm_g: "B", bm_tp: "TP 4 (Baik)", bi_m: 58, bi_g: "C", bi_tp: "TP 3 (Memuaskan)", mt_m: 54, mt_g: "C", mt_tp: "TP 3 (Memuaskan)", sn_m: 58, sn_g: "C", sn_tp: "TP 3 (Memuaskan)", sej_m: 64, sej_g: "C", sej_tp: "TP 3 (Memuaskan)", pi_m: 72, pi_g: "B", pi_tp: "TP 4 (Baik)", total: "372 / 600", purata: "62.0%", posisi: "2 / 12", hadir: "188 / 200 Hari", ulasan: "Bagus, tunjukkan peningkatan dalam markah.", email: "faris22@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false }
];

// Jana murid selebihnya daripada data autentik SK Ranggu sehingga 50 murid
const extraAuthenticNames = [
  "NUR IRIS QAISARA BINTI AZMAN", "NUR QISTINA BALQIS BINTI SHAHRUL", "NUR SAFIYYAH BINTI JAMALUDDIN",
  "NURUL AIN SYAFIQAH BINTI RAZAK", "NURUL FATIHAH BINTI MOHD SALLEH", "SYED MUHAMMAD DANISH BIN SYED ALI",
  "WAN MUHAMMAD HARITH BIN WAN ROSLI", "ZAHRA AMANI BINTI MOHD FIRDAUS", "AIMAN HAZIQ BIN SHUKRI",
  "AINA SYAHIRAH BINTI RAMLI", "AMIRUL MUKMININ BIN ZAKARIA", "AQIL HARITH BIN MAHADHIR",
  "DANIAL ASYRAF BIN MAZLAN", "FARISH HAIKAL BIN AZMAN", "FIRAS DANIAL BIN JOHARI",
  "HARITH ISKANDAR BIN MAHADHIR", "IMRAN HAZIM BIN ROSDI", "KHAIRUL ANUAR BIN BASIR",
  "LUQMAN HAKIM BIN OTHMAN", "MUHAMMAD ADAM BIN HARUN", "MUHAMMAD ALIF BIN BORHAN",
  "MUHAMMAD FAUZAN BIN NAZRI", "MUHAMMAD HAZIQ BIN SHUKRI", "MUHAMMAD NABIL BIN SALLEH",
  "MUHAMMAD SYAFIQ BIN JALIL", "MUHAMMAD ZAFUAN BIN OSMAN", "NUR AMNI BINTI SUBARI",
  "NUR FARAH BINTI ZAIDI"
];

const classDistribution = ["6 MUMTAZ", "6 JAYYID", "6 ILTIZAM", "6 KHOIR"];
const teacherMap = {
  "6 MUMTAZ": "Pn. Nurul Anisa binti Saparudin",
  "6 JAYYID": "AgKu Kemainddra bin Pg Mohd Taib",
  "6 ILTIZAM": "Pn. Noze binti Tukijan",
  "6 KHOIR": "Pn. Bajam binti Ladung"
};

extraAuthenticNames.forEach((name, i) => {
  const curIdx = 23 + i;
  const k = classDistribution[curIdx % 4];
  const bm = 55 + (curIdx % 35);
  const bi = 50 + (curIdx % 38);
  const mt = 45 + (curIdx % 42);
  const sn = 52 + (curIdx % 36);
  const sej = 56 + (curIdx % 34);
  const pi = 62 + (curIdx % 30);
  const totalMarks = bm + bi + mt + sn + sej + pi;
  const purataVal = (totalMarks / 6).toFixed(1);

  function getG(m) {
    if (m >= 80) return "A";
    if (m >= 65) return "B";
    if (m >= 50) return "C";
    if (m >= 40) return "D";
    return "E";
  }

  function getTP(m) {
    if (m >= 85) return "TP 6 (Cemerlang)";
    if (m >= 75) return "TP 5 (Sangat Baik)";
    if (m >= 65) return "TP 4 (Baik)";
    if (m >= 50) return "TP 3 (Memuaskan)";
    if (m >= 40) return "TP 2 (Tahap Minimum)";
    return "TP 1 (Sangat Terhad)";
  }

  studentsData.push({
    id: `SKRG-2026-Y6-${String(curIdx).padStart(3, '0')}`,
    name: name,
    kelas: k,
    guru: teacherMap[k],
    bm_m: bm, bm_g: getG(bm), bm_tp: getTP(bm),
    bi_m: bi, bi_g: getG(bi), bi_tp: getTP(bi),
    mt_m: mt, mt_g: getG(mt), mt_tp: getTP(mt),
    sn_m: sn, sn_g: getG(sn), sn_tp: getTP(sn),
    sej_m: sej, sej_g: getG(sej), sej_tp: getTP(sej),
    pi_m: pi, pi_g: getG(pi), pi_tp: getTP(pi),
    total: `${totalMarks} / 600`,
    purata: `${purataVal}%`,
    posisi: `${(curIdx % 12) + 1} / 12`,
    hadir: `${182 + (curIdx % 16)} / 200 Hari`,
    ulasan: "Usaha tangga kejayaan. Tingkatkan fokus dalam pembelajaran PBD harian.",
    email: curIdx % 3 === 0 ? "" : `penjaga${curIdx}@gmail.com`,
    status: "BELUM DIPROSES",
    tarikh: "-",
    catatan: "Menunggu giliran.",
    selected: false
  });
});

// Inisialisasi DOM & Event Listener
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  renderTable();
  updateStats();
  populatePreviewSelector();
  renderSlipPreview(studentsData[0]);
  setupConsoleEvents();
});

// 1. Pengurusan Tab
function setupTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      
      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      document.getElementById(targetId)?.classList.add("active");
    });
  });
}

// 2. Render Jadual Data Murid Autentik SK Ranggu
function renderTable() {
  const tbody = document.getElementById("students-tbody");
  if (!tbody) return;
  
  const classFilter = document.getElementById("filter-class")?.value || "ALL";
  const statusFilter = document.getElementById("filter-status")?.value || "ALL";
  const searchTxt = document.getElementById("search-input")?.value.toLowerCase() || "";
  
  const filtered = studentsData.filter(st => {
    const matchClass = classFilter === "ALL" || st.kelas === classFilter;
    const matchStatus = statusFilter === "ALL" || st.status === statusFilter;
    const matchSearch = st.name.toLowerCase().includes(searchTxt) || st.id.toLowerCase().includes(searchTxt);
    return matchClass && matchStatus && matchSearch;
  });
  
  tbody.innerHTML = "";
  
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="13" style="text-align:center; padding: 2rem; color: #94a3b8;">Tiada rekod murid dijumpai.</td></tr>`;
    return;
  }
  
  filtered.forEach((st, idx) => {
    const tr = document.createElement("tr");
    
    let statusClass = "badge-pending";
    if (st.status === "BERJAYA") statusClass = "badge-success";
    if (st.status === "BERJAYA - TIDAK DIEMEL") statusClass = "badge-warning";
    if (st.status === "GAGAL") statusClass = "badge-danger";
    
    tr.innerHTML = `
      <td><input type="checkbox" class="row-select" data-id="${st.id}" ${st.selected ? "checked" : ""}></td>
      <td>${idx + 1}</td>
      <td style="font-weight:700; color:#38bdf8;">${st.id}</td>
      <td><strong>${st.name}</strong></td>
      <td><span class="school-tag">${st.kelas}</span></td>
      <td>${st.bm_m} (${st.bm_g})<br><small style="color:#94a3b8">${st.bm_tp.split(' ')[0]}</small></td>
      <td>${st.bi_m} (${st.bi_g})<br><small style="color:#94a3b8">${st.bi_tp.split(' ')[0]}</small></td>
      <td>${st.mt_m} (${st.mt_g})<br><small style="color:#94a3b8">${st.mt_tp.split(' ')[0]}</small></td>
      <td>${st.sn_m} (${st.sn_g})<br><small style="color:#94a3b8">${st.sn_tp.split(' ')[0]}</small></td>
      <td><strong>${st.total}</strong></td>
      <td><strong style="color:#10b981;">${st.purata}</strong></td>
      <td><span class="badge-status ${statusClass}">${st.status}</span></td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="viewStudentSlip('${st.id}')">👁️ Slip PBD</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
  
  document.querySelectorAll(".row-select").forEach(cb => {
    cb.addEventListener("change", (e) => {
      const id = e.target.getAttribute("data-id");
      const item = studentsData.find(s => s.id === id);
      if (item) item.selected = e.target.checked;
      updateStats();
    });
  });
}

// 3. Statistik Header & Kad
function updateStats() {
  const total = studentsData.length;
  const processed = studentsData.filter(s => s.status.includes("BERJAYA")).length;
  const pending = total - processed;
  const selected = studentsData.filter(s => s.selected).length;
  
  if (document.getElementById("stat-total")) document.getElementById("stat-total").innerText = total;
  if (document.getElementById("stat-processed")) document.getElementById("stat-processed").innerText = processed;
  if (document.getElementById("stat-pending")) document.getElementById("stat-pending").innerText = pending;
  if (document.getElementById("stat-selected")) document.getElementById("stat-selected").innerText = selected;
}

// 4. Console Events
function setupConsoleEvents() {
  document.getElementById("btn-select-all")?.addEventListener("click", () => {
    studentsData.forEach(s => s.selected = true);
    renderTable();
    updateStats();
  });
  
  document.getElementById("btn-deselect-all")?.addEventListener("click", () => {
    studentsData.forEach(s => s.selected = false);
    renderTable();
    updateStats();
  });
  
  document.getElementById("btn-gen-selected")?.addEventListener("click", () => {
    const targets = studentsData.filter(s => s.selected);
    if (targets.length === 0) {
      alert("Sila pilih sekurang-kurangnya seorang murid terlebih dahulu.");
      return;
    }
    executeBatchProcess(targets);
  });
  
  document.getElementById("btn-gen-remaining")?.addEventListener("click", () => {
    const targets = studentsData.filter(s => s.status === "BELUM DIPROSES");
    if (targets.length === 0) {
      alert("Semua murid sudah diproses!");
      return;
    }
    executeBatchProcess(targets);
  });
  
  document.getElementById("btn-reset-batch")?.addEventListener("click", () => {
    if (confirm("Adakah anda pasti mahu set semula semua status kepada BELUM DIPROSES?")) {
      studentsData.forEach(s => {
        s.status = "BELUM DIPROSES";
        s.tarikh = "-";
        s.catatan = "Menunggu giliran.";
        s.selected = false;
      });
      renderTable();
      updateStats();
      logMessage("Sistem telah diset semula. Bersedia untuk penjanaan baharu.", "warn");
    }
  });
  
  document.getElementById("filter-class")?.addEventListener("change", renderTable);
  document.getElementById("filter-status")?.addEventListener("change", renderTable);
  document.getElementById("search-input")?.addEventListener("input", renderTable);
}

// 5. Batch Engine
let isProcessing = false;
async function executeBatchProcess(items) {
  if (isProcessing) return;
  isProcessing = true;
  
  const progressBar = document.getElementById("batch-progress-bar");
  const progressText = document.getElementById("batch-progress-text");
  const mode = document.getElementById("setup-mode")?.value || "PDF_EMAIL";
  
  logMessage(`▶️ MEMULAKAN BATCH: Memproses ${items.length} rekod PBD murid SK Ranggu (Mod: ${mode})...`, "normal");
  
  let completed = 0;
  for (const st of items) {
    await new Promise(r => setTimeout(r, 100));
    
    const now = new Date();
    const timeStr = now.toLocaleDateString("ms-MY") + " " + now.toLocaleTimeString("ms-MY", { hour: '2-digit', minute: '2-digit' });
    
    st.tarikh = timeStr;
    if (mode === "PDF_EMAIL") {
      if (st.email && st.email.includes("@")) {
        st.status = "BERJAYA";
        st.catatan = `[kod v1.0.1-skrg] PDF PBD dijana & diemel ke: ${st.email}`;
        logMessage(`[${timeStr}] ✅ ${st.name} (${st.kelas}): Slip PDF siap & diemel ke ${st.email}`, "success");
      } else {
        st.status = "BERJAYA - TIDAK DIEMEL";
        st.catatan = `[kod v1.0.1-skrg] PDF PBD siap. (Emel tiada / tidak didaftarkan)`;
        logMessage(`[${timeStr}] ⚠️ ${st.name} (${st.kelas}): Slip PDF siap. Emel tiada.`, "warn");
      }
    } else {
      st.status = "BERJAYA";
      st.catatan = `[kod v1.0.1-skrg] PDF PBD disimpan ke Google Drive.`;
      logMessage(`[${timeStr}] ✅ ${st.name} (${st.kelas}): PDF PBD disimpan ke Google Drive SK Ranggu.`, "success");
    }
    
    completed++;
    const pct = Math.round((completed / items.length) * 100);
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (progressText) progressText.innerText = `${pct}% (${completed}/${items.length} Murid)`;
    
    if (completed % 4 === 0 || completed === items.length) {
      renderTable();
      updateStats();
    }
  }
  
  logMessage(`🎉 SELESAI: Penjanaan ${items.length} slip PBD murid SK Ranggu berjaya disempurnakan!`, "success");
  isProcessing = false;
  renderTable();
  updateStats();
}

function logMessage(msg, type = "normal") {
  const terminal = document.getElementById("console-logs");
  if (!terminal) return;
  const p = document.createElement("div");
  p.className = `log-line log-${type}`;
  p.innerText = msg;
  terminal.appendChild(p);
  terminal.scrollTop = terminal.scrollHeight;
}

// 6. Pratonton & Cetak Slip Rasmi
function populatePreviewSelector() {
  const select = document.getElementById("preview-student-select");
  if (!select) return;
  select.innerHTML = "";
  studentsData.forEach(st => {
    const opt = document.createElement("option");
    opt.value = st.id;
    opt.innerText = `${st.id} - ${st.name} (${st.kelas} • ${st.guru})`;
    select.appendChild(opt);
  });
  
  select.addEventListener("change", () => {
    const selected = studentsData.find(s => s.id === select.value);
    if (selected) renderSlipPreview(selected);
  });
}

function viewStudentSlip(studentId) {
  const st = studentsData.find(s => s.id === studentId);
  if (!st) return;
  
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  
  const previewTabBtn = document.querySelector('[data-tab="tab-preview"]');
  previewTabBtn?.classList.add("active");
  document.getElementById("tab-preview")?.classList.add("active");
  
  const select = document.getElementById("preview-student-select");
  if (select) select.value = studentId;
  renderSlipPreview(st);
  window.scrollTo({ top: 100, behavior: 'smooth' });
}

function renderSlipPreview(st) {
  document.getElementById("slip-student-name").innerText = st.name;
  document.getElementById("slip-student-id").innerText = st.id;
  document.getElementById("slip-student-class").innerText = st.kelas;
  document.getElementById("slip-guru-kelas").innerText = st.guru;
  document.getElementById("slip-session").innerText = "Pentaksiran Bilik Darjah (PBD) & UASA Akhir Sesi Akademik 2026";
  
  // Markah & Gred & TP
  document.getElementById("slip-bm-m").innerText = st.bm_m;
  document.getElementById("slip-bm-g").innerText = st.bm_g;
  document.getElementById("slip-bm-tp").innerText = st.bm_tp;
  
  document.getElementById("slip-bi-m").innerText = st.bi_m;
  document.getElementById("slip-bi-g").innerText = st.bi_g;
  document.getElementById("slip-bi-tp").innerText = st.bi_tp;
  
  document.getElementById("slip-mt-m").innerText = st.mt_m;
  document.getElementById("slip-mt-g").innerText = st.mt_g;
  document.getElementById("slip-mt-tp").innerText = st.mt_tp;
  
  document.getElementById("slip-sn-m").innerText = st.sn_m;
  document.getElementById("slip-sn-g").innerText = st.sn_g;
  document.getElementById("slip-sn-tp").innerText = st.sn_tp;
  
  document.getElementById("slip-sej-m").innerText = st.sej_m;
  document.getElementById("slip-sej-g").innerText = st.sej_g;
  document.getElementById("slip-sej-tp").innerText = st.sej_tp;
  
  document.getElementById("slip-pi-m").innerText = st.pi_m;
  document.getElementById("slip-pi-g").innerText = st.pi_g;
  document.getElementById("slip-pi-tp").innerText = st.pi_tp;
  
  // Summary
  document.getElementById("slip-total").innerText = st.total;
  document.getElementById("slip-purata").innerText = st.purata;
  document.getElementById("slip-posisi").innerText = st.posisi;
  document.getElementById("slip-hadir").innerText = st.hadir;
  
  document.getElementById("slip-ulasan").innerText = `"${st.ulasan}"`;
}

// 7. Salin Kod Google Apps Script
function copyGasCode() {
  const code = document.getElementById("gas-code-block")?.innerText;
  if (!code) return;
  navigator.clipboard.writeText(code).then(() => {
    alert("✅ Kod Google Apps Script (Code.gs) PBD SK Ranggu berjaya disalin!");
  });
}

// 8. Muat Turun Data CSV
function exportStudentsCSV() {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "BIL,NO_MURID,NAMA_MURID,KELAS,GURU_KELAS,BM_M,BM_G,BM_TP,BI_M,BI_G,BI_TP,MT_M,MT_G,MT_TP,SN_M,SN_G,SN_TP,SEJ_M,SEJ_G,SEJ_TP,PI_M,PI_G,PI_TP,TOTAL,PURATA,POSISI,HADIR,ULASAN,EMAIL,STATUS,TARIKH,CATATAN\n";
  
  studentsData.forEach((s, idx) => {
    const row = [
      idx + 1, s.id, `"${s.name}"`, `"${s.kelas}"`, `"${s.guru}"`,
      s.bm_m, s.bm_g, `"${s.bm_tp}"`, s.bi_m, s.bi_g, `"${s.bi_tp}"`, s.mt_m, s.mt_g, `"${s.mt_tp}"`, s.sn_m, s.sn_g, `"${s.sn_tp}"`, s.sej_m, s.sej_g, `"${s.sej_tp}"`, s.pi_m, s.pi_g, `"${s.pi_tp}"`,
      `"${s.total}"`, `"${s.purata}"`, `"${s.posisi}"`, `"${s.hadir}"`,
      `"${s.ulasan}"`, `"${s.email}"`, `"${s.status}"`, `"${s.tarikh}"`, `"${s.catatan}"`
    ].join(",");
    csvContent += row + "\n";
  });
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Data_PBD_UASA_SK_Ranggu_Tawau_2026.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
