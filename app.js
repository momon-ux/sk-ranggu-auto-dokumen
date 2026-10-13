/**
 * ============================================================================
 * SISTEM AUTO DOKUMEN & PENJANA SLIP PEPERIKSAAN SK RANGGU
 * Logik Interaktif PWA & Penjanaan Dokumen Masa Nyata
 * ============================================================================
 */

// Pangkalan Data Awal (50 Murid SK Ranggu)
let studentsData = [
  { id: "SKRG-2026-001", name: "Aizat Sofian bin Zulkifli", kelas: "6 Intelek", bm_m: 84, bm_g: "A", bi_m: 78, bi_g: "B", mt_m: 72, mt_g: "B", sn_m: 76, sn_g: "B", sej_m: 85, sej_g: "A", pi_m: 90, pi_g: "A", total: "485 / 600", purata: "80.8%", posisi: "1 / 13", hadir: "196 / 200 Hari", ulasan: "Tahniah! Teruskan kecemerlangan akademik anda.", email: "aizatsofian@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-002", name: "Nurul Aina binti Roslan", kelas: "6 Intelek", bm_m: 80, bm_g: "A", bi_m: 75, bi_g: "B", mt_m: 68, mt_g: "B", sn_m: 70, sn_g: "B", sej_m: 82, sej_g: "A", pi_m: 88, pi_g: "A", total: "463 / 600", purata: "77.2%", posisi: "2 / 13", hadir: "194 / 200 Hari", ulasan: "Pencapaian sangat baik. Berpotensi cemerlang.", email: "nurulaina2@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-003", name: "Muhammad Danial bin Razak", kelas: "6 Intelek", bm_m: 74, bm_g: "B", bi_m: 70, bi_g: "B", mt_m: 65, mt_g: "B", sn_m: 68, sn_g: "B", sej_m: 75, sej_g: "B", pi_m: 82, pi_g: "A", total: "434 / 600", purata: "72.3%", posisi: "3 / 13", hadir: "190 / 200 Hari", ulasan: "Bagus. Rajin bertanya dan teruskan usaha.", email: "danial3@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-004", name: "Siti Nurhaliza binti Ahmad", kelas: "6 Intelek", bm_m: 72, bm_g: "B", bi_m: 66, bi_g: "B", mt_m: 60, mt_g: "C", sn_m: 65, sn_g: "B", sej_m: 70, sej_g: "B", pi_m: 80, pi_g: "A", total: "413 / 600", purata: "68.8%", posisi: "4 / 13", hadir: "188 / 200 Hari", ulasan: "Kekalkan momentum belajar harian.", email: "", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-005", name: "Mohamad Hafiz bin Mansor", kelas: "6 Intelek", bm_m: 68, bm_g: "B", bi_m: 62, bi_g: "C", mt_m: 58, mt_g: "C", sn_m: 64, sn_g: "C", sej_m: 66, sej_g: "B", pi_m: 76, pi_g: "B", total: "394 / 600", purata: "65.7%", posisi: "5 / 13", hadir: "185 / 200 Hari", ulasan: "Tingkatkan latihan Matematik.", email: "hafiz5@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-006", name: "Nur Fatihah binti Ismail", kelas: "6 Intelek", bm_m: 65, bm_g: "B", bi_m: 60, bi_g: "C", mt_m: 55, mt_g: "C", sn_m: 60, sn_g: "C", sej_m: 65, sej_g: "B", pi_m: 78, pi_g: "B", total: "383 / 600", purata: "63.8%", posisi: "6 / 13", hadir: "192 / 200 Hari", ulasan: "Beri lebih tumpuan sewaktu PdPc.", email: "fatihah6@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-007", name: "Amirul Mukminin bin Zakaria", kelas: "6 Intelek", bm_m: 64, bm_g: "C", bi_m: 58, bi_g: "C", mt_m: 52, mt_g: "C", sn_m: 59, sn_g: "C", sej_m: 62, sej_g: "C", pi_m: 72, pi_g: "B", total: "367 / 600", purata: "61.2%", posisi: "7 / 13", hadir: "186 / 200 Hari", ulasan: "Boleh dipertingkatkan lagi.", email: "amirul7@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-008", name: "Ainul Mardhiah binti Yusof", kelas: "6 Intelek", bm_m: 60, bm_g: "C", bi_m: 55, bi_g: "C", mt_m: 48, mt_g: "D", sn_m: 55, sn_g: "C", sej_m: 60, sej_g: "C", pi_m: 74, pi_g: "B", total: "352 / 600", purata: "58.7%", posisi: "8 / 13", hadir: "189 / 200 Hari", ulasan: "Perlu lebih banyak ulangkaji.", email: "", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-009", name: "Muhammad Adam bin Harun", kelas: "6 Intelek", bm_m: 58, bm_g: "C", bi_m: 52, bi_g: "C", mt_m: 46, mt_g: "D", sn_m: 54, sn_g: "C", sej_m: 58, sej_g: "C", pi_m: 70, pi_g: "B", total: "338 / 600", purata: "56.3%", posisi: "9 / 13", hadir: "184 / 200 Hari", ulasan: "Fokus semasa bimbingan guru.", email: "adam9@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-010", name: "Nur Syuhada binti Kamaruddin", kelas: "6 Intelek", bm_m: 55, bm_g: "C", bi_m: 50, bi_g: "C", mt_m: 44, mt_g: "D", sn_m: 50, sn_g: "C", sej_m: 55, sej_g: "C", pi_m: 68, pi_g: "B", total: "322 / 600", purata: "53.7%", posisi: "10 / 13", hadir: "187 / 200 Hari", ulasan: "Tingkatkan usaha untuk lulus selesa.", email: "syuhada10@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-011", name: "Farish Haikal bin Azman", kelas: "6 Intelek", bm_m: 52, bm_g: "C", bi_m: 48, bi_g: "D", mt_m: 42, mt_g: "D", sn_m: 48, sn_g: "D", sej_m: 52, sej_g: "C", pi_m: 65, pi_g: "B", total: "307 / 600", purata: "51.2%", posisi: "11 / 13", hadir: "182 / 200 Hari", ulasan: "Jangan putus asa, buat latihan tambahan.", email: "farish11@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-012", name: "Nur Qistina binti Shahrul", kelas: "6 Intelek", bm_m: 48, bm_g: "D", bi_m: 45, bi_g: "D", mt_m: 40, mt_g: "D", sn_m: 45, sn_g: "D", sej_m: 50, sej_g: "C", pi_m: 60, pi_g: "C", total: "288 / 600", purata: "48.0%", posisi: "12 / 13", hadir: "183 / 200 Hari", ulasan: "Perlukan dorongan berterusan di rumah.", email: "", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-013", name: "Muhammad Alif bin Borhan", kelas: "6 Intelek", bm_m: 45, bm_g: "D", bi_m: 42, bi_g: "D", mt_m: 38, mt_g: "E", sn_m: 42, sn_g: "D", sej_m: 46, sej_g: "D", pi_m: 55, pi_g: "C", total: "268 / 600", purata: "44.7%", posisi: "13 / 13", hadir: "180 / 200 Hari", ulasan: "Kelas intervensi diwajibkan.", email: "alif13@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  
  // 6 Kreatif
  { id: "SKRG-2026-014", name: "Puteri Damia binti Hisham", kelas: "6 Kreatif", bm_m: 86, bm_g: "A", bi_m: 82, bi_g: "A", mt_m: 78, mt_g: "B", sn_m: 80, sn_g: "A", sej_m: 88, sej_g: "A", pi_m: 92, pi_g: "A", total: "506 / 600", purata: "84.3%", posisi: "1 / 13", hadir: "198 / 200 Hari", ulasan: "Cemerlang! Calon murid harapan sekolah.", email: "damia14@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-015", name: "Khairul Anuar bin Basir", kelas: "6 Kreatif", bm_m: 82, bm_g: "A", bi_m: 76, bi_g: "B", mt_m: 74, mt_g: "B", sn_m: 78, sn_g: "B", sej_m: 80, sej_g: "A", pi_m: 85, pi_g: "A", total: "475 / 600", purata: "79.2%", posisi: "2 / 13", hadir: "195 / 200 Hari", ulasan: "Amat memuaskan. Kekalkan momentum.", email: "khairul15@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-016", name: "Nur Safiyyah binti Jamal", kelas: "6 Kreatif", bm_m: 78, bm_g: "B", bi_m: 72, bi_g: "B", mt_m: 70, mt_g: "B", sn_m: 72, sn_g: "B", sej_m: 78, sej_g: "B", pi_m: 82, pi_g: "A", total: "452 / 600", purata: "75.3%", posisi: "3 / 13", hadir: "191 / 200 Hari", ulasan: "Bagus. Rajin bertanya dalam kelas.", email: "", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-017", name: "Harith Iskandar bin Mahadhir", kelas: "6 Kreatif", bm_m: 75, bm_g: "B", bi_m: 68, bi_g: "B", mt_m: 66, mt_g: "B", sn_m: 70, sn_g: "B", sej_m: 74, sej_g: "B", pi_m: 80, pi_g: "A", total: "433 / 600", purata: "72.2%", posisi: "4 / 13", hadir: "189 / 200 Hari", ulasan: "Prestasi konsisten dan positif.", email: "harith17@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-018", name: "Nur Batrisyia binti Affendi", kelas: "6 Kreatif", bm_m: 70, bm_g: "B", bi_m: 65, bi_g: "B", mt_m: 62, mt_g: "C", sn_m: 66, sn_g: "B", sej_m: 72, sej_g: "B", pi_m: 78, pi_g: "B", total: "413 / 600", purata: "68.8%", posisi: "5 / 13", hadir: "193 / 200 Hari", ulasan: "Peningkatan ketara dalam Sains.", email: "batrisyia18@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-019", name: "Muhammad Zafuan bin Osman", kelas: "6 Kreatif", bm_m: 67, bm_g: "B", bi_m: 62, bi_g: "C", mt_m: 58, mt_g: "C", sn_m: 63, sn_g: "C", sej_m: 68, sej_g: "B", pi_m: 74, pi_g: "B", total: "392 / 600", purata: "65.3%", posisi: "6 / 13", hadir: "188 / 200 Hari", ulasan: "Perlu tingkatkan kefahaman Sains.", email: "zafuan19@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-020", name: "Wan Nur Ain binti Wan Rosli", kelas: "6 Kreatif", bm_m: 64, bm_g: "C", bi_m: 60, bi_g: "C", mt_m: 54, mt_g: "C", sn_m: 60, sn_g: "C", sej_m: 65, sej_g: "B", pi_m: 72, pi_g: "B", total: "375 / 600", purata: "62.5%", posisi: "7 / 13", hadir: "186 / 200 Hari", ulasan: "Rajin dan bersungguh-sungguh.", email: "", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-021", name: "Danish Irfan bin Mazlan", kelas: "6 Kreatif", bm_m: 60, bm_g: "C", bi_m: 55, bi_g: "C", mt_m: 50, mt_g: "C", sn_m: 56, sn_g: "C", sej_m: 62, sej_g: "C", pi_m: 70, pi_g: "B", total: "353 / 600", purata: "58.8%", posisi: "8 / 13", hadir: "187 / 200 Hari", ulasan: "Elakkan kecuaian semasa peperiksaan.", email: "danish21@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-022", name: "Nur Irdina binti Khairuddin", kelas: "6 Kreatif", bm_m: 58, bm_g: "C", bi_m: 52, bi_g: "C", mt_m: 46, mt_g: "D", sn_m: 52, sn_g: "C", sej_m: 58, sej_g: "C", pi_m: 66, pi_g: "B", total: "332 / 600", purata: "55.3%", posisi: "9 / 13", hadir: "185 / 200 Hari", ulasan: "Banyakkan latihan pengukuhan di rumah.", email: "irdina22@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-023", name: "Muhammad Nabil bin Salleh", kelas: "6 Kreatif", bm_m: 54, bm_g: "C", bi_m: 48, bi_g: "D", mt_m: 42, mt_g: "D", sn_m: 48, sn_g: "D", sej_m: 55, sej_g: "C", pi_m: 64, pi_g: "C", total: "311 / 600", purata: "51.8%", posisi: "10 / 13", hadir: "182 / 200 Hari", ulasan: "Tingkatkan disiplin waktu belajar.", email: "nabil23@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-024", name: "Siti Aisyah binti Mustafa", kelas: "6 Kreatif", bm_m: 50, bm_g: "C", bi_m: 45, bi_g: "D", mt_m: 40, mt_g: "D", sn_m: 45, sn_g: "D", sej_m: 50, sej_g: "C", pi_m: 60, pi_g: "C", total: "290 / 600", purata: "48.3%", posisi: "11 / 13", hadir: "184 / 200 Hari", ulasan: "Usaha lebih gigih diperlukan.", email: "", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-025", name: "Ahmad Firdaus bin Johari", kelas: "6 Kreatif", bm_m: 46, bm_g: "D", bi_m: 42, bi_g: "D", mt_m: 36, mt_g: "E", sn_m: 40, sn_g: "D", sej_m: 45, sej_g: "D", pi_m: 56, pi_g: "C", total: "265 / 600", purata: "44.2%", posisi: "12 / 13", hadir: "181 / 200 Hari", ulasan: "Perlukan bimbingan rapi subjek Matematik.", email: "firdaus25@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-026", name: "Nurul Hidayah binti Sani", kelas: "6 Kreatif", bm_m: 44, bm_g: "D", bi_m: 40, bi_g: "D", mt_m: 35, mt_g: "E", sn_m: 38, sn_g: "E", sej_m: 42, sej_g: "D", pi_m: 52, pi_g: "C", total: "251 / 600", purata: "41.8%", posisi: "13 / 13", hadir: "179 / 200 Hari", ulasan: "Hadir kelas intervensi petang.", email: "hidayah26@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },

  // 5 Dinamik & 5 Efektif (Murid 27 - 50)
  { id: "SKRG-2026-027", name: "Muhammad Haziq bin Shukri", kelas: "5 Dinamik", bm_m: 85, bm_g: "A", bi_m: 80, bi_g: "A", mt_m: 75, mt_g: "B", sn_m: 78, sn_g: "B", sej_m: 82, sej_g: "A", pi_m: 88, pi_g: "A", total: "488 / 600", purata: "81.3%", posisi: "1 / 12", hadir: "196 / 200 Hari", ulasan: "Cemerlang! Kekalkan daya usaha.", email: "haziq27@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-028", name: "Nur Adriana binti Ramli", kelas: "5 Dinamik", bm_m: 80, bm_g: "A", bi_m: 76, bi_g: "B", mt_m: 72, mt_g: "B", sn_m: 74, sn_g: "B", sej_m: 78, sej_g: "B", pi_m: 85, pi_g: "A", total: "465 / 600", purata: "77.5%", posisi: "2 / 12", hadir: "194 / 200 Hari", ulasan: "Bagus, sentiasa aktif dalam kelas.", email: "", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-029", name: "Syamil Fahmi bin Badrol", kelas: "5 Dinamik", bm_m: 76, bm_g: "B", bi_m: 70, bi_g: "B", mt_m: 68, mt_g: "B", sn_m: 70, sn_g: "B", sej_m: 75, sej_g: "B", pi_m: 80, pi_g: "A", total: "439 / 600", purata: "73.2%", posisi: "3 / 12", hadir: "191 / 200 Hari", ulasan: "Potensi tinggi untuk lebih cemerlang.", email: "syamil29@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false },
  { id: "SKRG-2026-030", name: "Nur Farah binti Zaidi", kelas: "5 Dinamik", bm_m: 72, bm_g: "B", bi_m: 65, bi_g: "B", mt_m: 62, mt_g: "C", sn_m: 66, sn_g: "B", sej_m: 70, sej_g: "B", pi_m: 76, pi_g: "B", total: "411 / 600", purata: "68.5%", posisi: "4 / 12", hadir: "189 / 200 Hari", ulasan: "Kemahiran membaca sangat memuaskan.", email: "farah30@gmail.com", status: "BELUM DIPROSES", tarikh: "-", catatan: "Menunggu giliran.", selected: false }
];

// Jana Baki Murid sehingga 50 secara dinamik jika perlu
for (let i = 31; i <= 50; i++) {
  const kelas = i <= 38 ? "5 Dinamik" : "5 Efektif";
  const bm = 50 + (i % 35);
  const bi = 45 + (i % 38);
  const mt = 40 + (i % 40);
  const sn = 48 + (i % 36);
  const sej = 52 + (i % 34);
  const pi = 60 + (i % 30);
  const totalMarks = bm + bi + mt + sn + sej + pi;
  const purataVal = (totalMarks / 6).toFixed(1);
  
  function getG(m) {
    if (m >= 80) return "A";
    if (m >= 65) return "B";
    if (m >= 50) return "C";
    if (m >= 40) return "D";
    return "E";
  }

  studentsData.push({
    id: `SKRG-2026-${String(i).padStart(3, '0')}`,
    name: [
      "Izzat Danish bin Lokman", "Nur Imanina binti Bakri", "Muhammad Syafiq bin Jalil",
      "Siti Sarah binti Ridzuan", "Luqman Hakim bin Othman", "Nurul Husna binti Jalani",
      "Zulhelmi bin Kassim", "Nur Aleeya binti Mazuki", "Muhammad Rayyan bin Latif",
      "Nur Amni binti Subari", "Imran Hazim bin Rosdi", "Siti Khadijah binti Hamdan",
      "Muhammad Fauzan bin Nazri", "Nur Sabrina binti Tahir", "Muhammad Zafran bin Hilmi",
      "Dayang Nurul binti Awang", "Awang Muhammad bin Awang Ali", "Nur Syahirah binti Jalal",
      "Faris Aiman bin Zaki", "Nurul Izzah binti Annuar"
    ][i - 31],
    kelas: kelas,
    bm_m: bm, bm_g: getG(bm),
    bi_m: bi, bi_g: getG(bi),
    mt_m: mt, mt_g: getG(mt),
    sn_m: sn, sn_g: getG(sn),
    sej_m: sej, sej_g: getG(sej),
    pi_m: pi, pi_g: getG(pi),
    total: `${totalMarks} / 600`,
    purata: `${purataVal}%`,
    posisi: `${(i % 12) + 1} / 12`,
    hadir: `${180 + (i % 18)} / 200 Hari`,
    ulasan: "Usaha tangga kejayaan. Tingkatkan fokus belajar.",
    email: i % 3 === 0 ? "" : `murid${i}@gmail.com`,
    status: "BELUM DIPROSES",
    tarikh: "-",
    catatan: "Menunggu giliran.",
    selected: false
  });
}

// Inisialisasi DOM & Event
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
      document.getElementById(targetId).classList.add("active");
    });
  });
}

// 2. Render Jadual Data Murid
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
      <td>${st.bm_m} (${st.bm_g})</td>
      <td>${st.bi_m} (${st.bi_g})</td>
      <td>${st.mt_m} (${st.mt_g})</td>
      <td>${st.sn_m} (${st.sn_g})</td>
      <td><strong>${st.total}</strong></td>
      <td><strong style="color:#10b981;">${st.purata}</strong></td>
      <td><span class="badge-status ${statusClass}">${st.status}</span></td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="viewStudentSlip('${st.id}')">👁️ Slip</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
  
  // Pasang listener checkbox
  document.querySelectorAll(".row-select").forEach(cb => {
    cb.addEventListener("change", (e) => {
      const id = e.target.getAttribute("data-id");
      const item = studentsData.find(s => s.id === id);
      if (item) item.selected = e.target.checked;
      updateStats();
    });
  });
}

// 3. Kemas Kini Statistik Header & Kad
function updateStats() {
  const totalEl = document.getElementById("stat-total");
  const processedEl = document.getElementById("stat-processed");
  const pendingEl = document.getElementById("stat-pending");
  const selectedEl = document.getElementById("stat-selected");
  
  const total = studentsData.length;
  const processed = studentsData.filter(s => s.status.includes("BERJAYA")).length;
  const pending = total - processed;
  const selected = studentsData.filter(s => s.selected).length;
  
  if (totalEl) totalEl.innerText = total;
  if (processedEl) processedEl.innerText = processed;
  if (pendingEl) pendingEl.innerText = pending;
  if (selectedEl) selectedEl.innerText = selected;
}

// 4. Batch Generator Console Events
function setupConsoleEvents() {
  const btnSelectAll = document.getElementById("btn-select-all");
  const btnDeselectAll = document.getElementById("btn-deselect-all");
  const btnGenerateSelected = document.getElementById("btn-gen-selected");
  const btnGenerateRemaining = document.getElementById("btn-gen-remaining");
  const btnReset = document.getElementById("btn-reset-batch");
  
  btnSelectAll?.addEventListener("click", () => {
    studentsData.forEach(s => s.selected = true);
    renderTable();
    updateStats();
  });
  
  btnDeselectAll?.addEventListener("click", () => {
    studentsData.forEach(s => s.selected = false);
    renderTable();
    updateStats();
  });
  
  btnGenerateSelected?.addEventListener("click", () => {
    const targets = studentsData.filter(s => s.selected);
    if (targets.length === 0) {
      alert("Sila pilih sekurang-kurangnya seorang murid terlebih dahulu.");
      return;
    }
    executeBatchProcess(targets);
  });
  
  btnGenerateRemaining?.addEventListener("click", () => {
    const targets = studentsData.filter(s => s.status === "BELUM DIPROSES");
    if (targets.length === 0) {
      alert("Semua murid sudah diproses!");
      return;
    }
    executeBatchProcess(targets);
  });
  
  btnReset?.addEventListener("click", () => {
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
  
  // Filter events
  document.getElementById("filter-class")?.addEventListener("change", renderTable);
  document.getElementById("filter-status")?.addEventListener("change", renderTable);
  document.getElementById("search-input")?.addEventListener("input", renderTable);
}

// 5. Enjin Pemprosesan Batch (Simulasi Real-time Google Apps Script Batch)
let isProcessing = false;
async function executeBatchProcess(items) {
  if (isProcessing) return;
  isProcessing = true;
  
  const progressBar = document.getElementById("batch-progress-bar");
  const progressText = document.getElementById("batch-progress-text");
  const mode = document.getElementById("setup-mode")?.value || "PDF_EMAIL";
  
  logMessage(`▶️ MEMULAKAN BATCH: Memproses ${items.length} rekod murid (Mod: ${mode})...`, "normal");
  
  let completed = 0;
  for (const st of items) {
    await new Promise(r => setTimeout(r, 120)); // delay realistik
    
    const now = new Date();
    const timeStr = now.toLocaleDateString("ms-MY") + " " + now.toLocaleTimeString("ms-MY", { hour: '2-digit', minute: '2-digit' });
    
    st.tarikh = timeStr;
    if (mode === "PDF_EMAIL") {
      if (st.email && st.email.includes("@")) {
        st.status = "BERJAYA";
        st.catatan = `[kod v1.0.1-skrg] PDF dijana & diemel ke: ${st.email}`;
        logMessage(`[${timeStr}] ✅ ${st.name} (${st.kelas}): PDF siap & diemel ke ${st.email}`, "success");
      } else {
        st.status = "BERJAYA - TIDAK DIEMEL";
        st.catatan = `[kod v1.0.1-skrg] PDF dijana. (Emel tiada / tidak didaftarkan)`;
        logMessage(`[${timeStr}] ⚠️ ${st.name} (${st.kelas}): PDF siap. Email tiada.`, "warn");
      }
    } else {
      st.status = "BERJAYA";
      st.catatan = `[kod v1.0.1-skrg] PDF disimpan ke Google Drive.`;
      logMessage(`[${timeStr}] ✅ ${st.name} (${st.kelas}): PDF disimpan ke Google Drive.`, "success");
    }
    
    completed++;
    const pct = Math.round((completed / items.length) * 100);
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (progressText) progressText.innerText = `${pct}% (${completed}/${items.length} Murid)`;
    
    // Refresh table & stats separa jalan
    if (completed % 5 === 0 || completed === items.length) {
      renderTable();
      updateStats();
    }
  }
  
  logMessage(`🎉 SELESAI: Penjanaan ${items.length} dokumen murid berjaya disempurnakan!`, "success");
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

// 6. Pratonton & Cetak Slip Peperiksaan Rasmi SK Ranggu
function populatePreviewSelector() {
  const select = document.getElementById("preview-student-select");
  if (!select) return;
  select.innerHTML = "";
  studentsData.forEach(st => {
    const opt = document.createElement("option");
    opt.value = st.id;
    opt.innerText = `${st.id} - ${st.name} (${st.kelas})`;
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
  
  // Tukar tab ke Pratonton
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  
  const previewTabBtn = document.querySelector('[data-tab="tab-preview"]');
  previewTabBtn?.classList.add("active");
  document.getElementById("tab-preview")?.classList.add("active");
  
  // Set dropdown & render
  const select = document.getElementById("preview-student-select");
  if (select) select.value = studentId;
  renderSlipPreview(st);
  window.scrollTo({ top: 100, behavior: 'smooth' });
}

function renderSlipPreview(st) {
  document.getElementById("slip-student-name").innerText = st.name;
  document.getElementById("slip-student-id").innerText = st.id;
  document.getElementById("slip-student-class").innerText = st.kelas;
  document.getElementById("slip-session").innerText = "Pentaksiran Akhir Sesi Akademik (PASA) 2026";
  
  // Markah & Gred
  document.getElementById("slip-bm-m").innerText = st.bm_m;
  document.getElementById("slip-bm-g").innerText = st.bm_g;
  
  document.getElementById("slip-bi-m").innerText = st.bi_m;
  document.getElementById("slip-bi-g").innerText = st.bi_g;
  
  document.getElementById("slip-mt-m").innerText = st.mt_m;
  document.getElementById("slip-mt-g").innerText = st.mt_g;
  
  document.getElementById("slip-sn-m").innerText = st.sn_m;
  document.getElementById("slip-sn-g").innerText = st.sn_g;
  
  document.getElementById("slip-sej-m").innerText = st.sej_m;
  document.getElementById("slip-sej-g").innerText = st.sej_g;
  
  document.getElementById("slip-pi-m").innerText = st.pi_m;
  document.getElementById("slip-pi-g").innerText = st.pi_g;
  
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
    alert("✅ Kod Google Apps Script (Code.gs) berjaya disalin ke papan klip!");
  });
}

// 8. Muat Turun Data CSV
function exportStudentsCSV() {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "BIL,NO_MURID,NAMA_MURID,KELAS,BM_M,BM_G,BI_M,BI_G,MT_M,MT_G,SN_M,SN_G,SEJ_M,SEJ_G,PI_M,PI_G,TOTAL,PURATA,POSISI,HADIR,ULASAN,EMAIL,STATUS,TARIKH,CATATAN\n";
  
  studentsData.forEach((s, idx) => {
    const row = [
      idx + 1, s.id, `"${s.name}"`, `"${s.kelas}"`,
      s.bm_m, s.bm_g, s.bi_m, s.bi_g, s.mt_m, s.mt_g, s.sn_m, s.sn_g, s.sej_m, s.sej_g, s.pi_m, s.pi_g,
      `"${s.total}"`, `"${s.purata}"`, `"${s.posisi}"`, `"${s.hadir}"`,
      `"${s.ulasan}"`, `"${s.email}"`, `"${s.status}"`, `"${s.tarikh}"`, `"${s.catatan}"`
    ].join(",");
    csvContent += row + "\n";
  });
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Data_Murid_SK_Ranggu_Peperiksaan_Terkini.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
