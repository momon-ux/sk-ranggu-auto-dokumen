/**
 * ============================================================================
 * SISTEM AUTO DOKUMEN & PENJANA SLIP PENTAKSIRAN PBD / UASA SK RANGGU
 * Diadaptasi & Disesuaikan Khusus untuk SK Ranggu, Tawau (Kod: XBA3037)
 * ============================================================================
 * Pembangun: Cikgu Mohammad Fikrey bin Abdul Gapar (SK Ranggu, Tawau)
 */

// Pangkalan Data Murid Autentik SK Ranggu (50 Murid Tahun 6)
let studentsData = [
  {
    "id": "SKRG-2026-Y6-001",
    "name": "ALFIN ZIKRI BIN MUHAMMAD ZULKIFLI",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": 95,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 83,
    "bi_g": "B",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 76,
    "mt_g": "A",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 71,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 68,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 77,
    "pi_g": "B",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "470 / 600",
    "purata": "78.3%",
    "posisi": "12 / 13",
    "hadir": "197 / 200 Hari",
    "ulasan": "Tahniah atas usaha gigih. Teruskan momentum kecemerlangan dalam PBD.",
    "email": "alfin1@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-002",
    "name": "AMIRAH AQILAH BINTI MARZHUKHI",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": 88,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 96,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 74,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 82,
    "sn_g": "A",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 78,
    "sej_g": "A",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 91,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "509 / 600",
    "purata": "84.8%",
    "posisi": "1 / 13",
    "hadir": "195 / 200 Hari",
    "ulasan": "Kekalkan sahsiah terpuji dan dorong diri untuk sentiasa mencapai Tahap Penguasaan tertinggi.",
    "email": "amirah2@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-003",
    "name": "ANIQ IZZ ZARIF BIN MOHD NOR AZMAN",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": 88,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 92,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 61,
    "mt_g": "C",
    "mt_tp": "TP 3 (Memuaskan)",
    "sn_m": 77,
    "sn_g": "B",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 71,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 95,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "484 / 600",
    "purata": "80.7%",
    "posisi": "7 / 13",
    "hadir": "190 / 200 Hari",
    "ulasan": "Tahniah atas usaha gigih. Teruskan momentum kecemerlangan dalam PBD.",
    "email": "aniq3@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-004",
    "name": "AUDHIA MULIANIE BINTI ADY KURNIAWAN",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": 94,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 83,
    "bi_g": "B",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 72,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 77,
    "sn_g": "A",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 80,
    "sej_g": "B",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 95,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "501 / 600",
    "purata": "83.5%",
    "posisi": "4 / 13",
    "hadir": "193 / 200 Hari",
    "ulasan": "Perlu lebih fokus semasa sesi pengukuhan dan rajin membuat ulangkaji kendiri.",
    "email": "",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-005",
    "name": "DAYANG NUR ATHIRAH BINTI DATU MOHD NOOR",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": 93,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 93,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 70,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 71,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 68,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 82,
    "pi_g": "A",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "477 / 600",
    "purata": "79.5%",
    "posisi": "10 / 13",
    "hadir": "194 / 200 Hari",
    "ulasan": "Pencapaian sangat cemerlang. Berpotensi tinggi menjadi murid teladan sekolah.",
    "email": "dayang5@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-006",
    "name": "FARHANA ALISYA BINTI A.RAHMAN",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": 94,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 90,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 78,
    "mt_g": "B",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 83,
    "sn_g": "B",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 81,
    "sej_g": "A",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 80,
    "pi_g": "A",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "506 / 600",
    "purata": "84.3%",
    "posisi": "2 / 13",
    "hadir": "192 / 200 Hari",
    "ulasan": "Pencapaian sangat cemerlang. Berpotensi tinggi menjadi murid teladan sekolah.",
    "email": "farhana6@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-007",
    "name": "HUMAIRA QAIRINA BINTI HASSAN",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": 91,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 94,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 80,
    "mt_g": "A",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 76,
    "sn_g": "A",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 73,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 90,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "504 / 600",
    "purata": "84.0%",
    "posisi": "3 / 13",
    "hadir": "196 / 200 Hari",
    "ulasan": "Perlu lebih fokus semasa sesi pengukuhan dan rajin membuat ulangkaji kendiri.",
    "email": "humaira7@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-008",
    "name": "MARZUQI WAHIDUZ ZAMAN BIN HERMANSHAH",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": 94,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 83,
    "bi_g": "A",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 57,
    "mt_g": "C",
    "mt_tp": "TP 3 (Memuaskan)",
    "sn_m": 68,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 76,
    "sej_g": "B",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 79,
    "pi_g": "A",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "457 / 600",
    "purata": "76.2%",
    "posisi": "13 / 13",
    "hadir": "197 / 200 Hari",
    "ulasan": "Perlu lebih fokus semasa sesi pengukuhan dan rajin membuat ulangkaji kendiri.",
    "email": "",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-009",
    "name": "MAS SYUHADAH BINTI MASLI",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": 77,
    "bm_g": "B",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 83,
    "bi_g": "B",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 78,
    "mt_g": "B",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 78,
    "sn_g": "A",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 79,
    "sej_g": "B",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 96,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "491 / 600",
    "purata": "81.8%",
    "posisi": "6 / 13",
    "hadir": "196 / 200 Hari",
    "ulasan": "Tahniah atas usaha gigih. Teruskan momentum kecemerlangan dalam PBD.",
    "email": "mas9@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-010",
    "name": "MOHAMMAD IQQAL RUZAYLEY BIN MOHD RUSDI",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": 91,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 91,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 83,
    "mt_g": "A",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 69,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 71,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 94,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "499 / 600",
    "purata": "83.2%",
    "posisi": "5 / 13",
    "hadir": "189 / 200 Hari",
    "ulasan": "Bagus dan berdisiplin. Tingkatkan kefahaman dalam soalan aras tinggi (KBAT).",
    "email": "mohammad10@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-011",
    "name": "MOHAMMAD IRFAN BIN JASMYN",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": 71,
    "bm_g": "B",
    "bm_tp": "TP 4 (Baik)",
    "bi_m": 80,
    "bi_g": "A",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 77,
    "mt_g": "A",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 82,
    "sn_g": "A",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 72,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 92,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "474 / 600",
    "purata": "79.0%",
    "posisi": "11 / 13",
    "hadir": "191 / 200 Hari",
    "ulasan": "Menunjukkan peningkatan prestasi yang amat membanggakan. Teruskan usaha.",
    "email": "mohammad11@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-012",
    "name": "MUHAMAD AIDIL AZHARI BIN MOHAMAD ALI",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": 89,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 96,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 68,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 74,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 67,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 89,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "483 / 600",
    "purata": "80.5%",
    "posisi": "8 / 13",
    "hadir": "186 / 200 Hari",
    "ulasan": "Bagus dan berdisiplin. Tingkatkan kefahaman dalam soalan aras tinggi (KBAT).",
    "email": "",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-013",
    "name": "MUHAMMAD ALIF BIN RAMIL",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": 89,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 89,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 81,
    "mt_g": "A",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 67,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 70,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 82,
    "pi_g": "A",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "478 / 600",
    "purata": "79.7%",
    "posisi": "9 / 13",
    "hadir": "186 / 200 Hari",
    "ulasan": "Tahniah atas usaha gigih. Teruskan momentum kecemerlangan dalam PBD.",
    "email": "muhammad13@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-014",
    "name": "ADNI DAFINAH BINTI MURSALIN",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": 91,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 91,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 80,
    "mt_g": "A",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 81,
    "sn_g": "B",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 96,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 86,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "525 / 600",
    "purata": "87.5%",
    "posisi": "1 / 13",
    "hadir": "191 / 200 Hari",
    "ulasan": "Kekalkan sahsiah terpuji dan dorong diri untuk sentiasa mencapai Tahap Penguasaan tertinggi.",
    "email": "adni14@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-015",
    "name": "AIRIS NUR RAYSHA AMANDA BINTI RIDUAN",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": 65,
    "bm_g": "B",
    "bm_tp": "TP 4 (Baik)",
    "bi_m": 77,
    "bi_g": "A",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 67,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 77,
    "sn_g": "B",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 92,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 82,
    "pi_g": "B",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "460 / 600",
    "purata": "76.7%",
    "posisi": "13 / 13",
    "hadir": "196 / 200 Hari",
    "ulasan": "Kekalkan sahsiah terpuji dan dorong diri untuk sentiasa mencapai Tahap Penguasaan tertinggi.",
    "email": "airis15@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-016",
    "name": "ARIZ FAIQH BIN MOHD ROZAIDY",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": 79,
    "bm_g": "B",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 82,
    "bi_g": "A",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 69,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 84,
    "sn_g": "B",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 80,
    "sej_g": "B",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 93,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "487 / 600",
    "purata": "81.2%",
    "posisi": "9 / 13",
    "hadir": "189 / 200 Hari",
    "ulasan": "Kekalkan sahsiah terpuji dan dorong diri untuk sentiasa mencapai Tahap Penguasaan tertinggi.",
    "email": "",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-017",
    "name": "AUFA HANIFAH BINTI JUARI",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": 65,
    "bm_g": "B",
    "bm_tp": "TP 4 (Baik)",
    "bi_m": 96,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 81,
    "mt_g": "A",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 70,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 95,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 94,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "501 / 600",
    "purata": "83.5%",
    "posisi": "5 / 13",
    "hadir": "192 / 200 Hari",
    "ulasan": "Pencapaian sangat cemerlang. Berpotensi tinggi menjadi murid teladan sekolah.",
    "email": "aufa17@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-018",
    "name": "IZZAT NAZHAN BIN SUMARDI",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": 70,
    "bm_g": "B",
    "bm_tp": "TP 4 (Baik)",
    "bi_m": 91,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 81,
    "mt_g": "B",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 83,
    "sn_g": "B",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 91,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 79,
    "pi_g": "A",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "495 / 600",
    "purata": "82.5%",
    "posisi": "7 / 13",
    "hadir": "186 / 200 Hari",
    "ulasan": "Tahniah atas usaha gigih. Teruskan momentum kecemerlangan dalam PBD.",
    "email": "izzat18@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-019",
    "name": "LINDA QAISARAH BINTI RAJLAN",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": 69,
    "bm_g": "B",
    "bm_tp": "TP 4 (Baik)",
    "bi_m": 76,
    "bi_g": "B",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 73,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 79,
    "sn_g": "A",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 89,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 91,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "477 / 600",
    "purata": "79.5%",
    "posisi": "10 / 13",
    "hadir": "198 / 200 Hari",
    "ulasan": "Pencapaian sangat cemerlang. Berpotensi tinggi menjadi murid teladan sekolah.",
    "email": "linda19@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-020",
    "name": "MAHIRAH ATHILAH BINTI M SABRAN",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": 82,
    "bm_g": "B",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 76,
    "bi_g": "B",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 70,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 72,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 81,
    "sej_g": "B",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 96,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "477 / 600",
    "purata": "79.5%",
    "posisi": "11 / 13",
    "hadir": "194 / 200 Hari",
    "ulasan": "Pencapaian sangat cemerlang. Berpotensi tinggi menjadi murid teladan sekolah.",
    "email": "",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-021",
    "name": "MUHAMMAD AFIF ARSYAD BIN HASRIN",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": 82,
    "bm_g": "B",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 78,
    "bi_g": "B",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 94,
    "mt_g": "A",
    "mt_tp": "TP 6 (Cemerlang)",
    "sn_m": 82,
    "sn_g": "B",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 80,
    "sej_g": "B",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 80,
    "pi_g": "B",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "496 / 600",
    "purata": "82.7%",
    "posisi": "6 / 13",
    "hadir": "186 / 200 Hari",
    "ulasan": "Kekalkan sahsiah terpuji dan dorong diri untuk sentiasa mencapai Tahap Penguasaan tertinggi.",
    "email": "muhammad21@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-022",
    "name": "MUHAMMAD AIMAN BIN AMBO MASSE",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": 69,
    "bm_g": "B",
    "bm_tp": "TP 4 (Baik)",
    "bi_m": 72,
    "bi_g": "B",
    "bi_tp": "TP 4 (Baik)",
    "mt_m": 81,
    "mt_g": "A",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 84,
    "sn_g": "B",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 76,
    "sej_g": "A",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 94,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "476 / 600",
    "purata": "79.3%",
    "posisi": "12 / 13",
    "hadir": "195 / 200 Hari",
    "ulasan": "Bagus dan berdisiplin. Tingkatkan kefahaman dalam soalan aras tinggi (KBAT).",
    "email": "muhammad22@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-023",
    "name": "MUHAMMAD AMMAR SYAWAL BIN SUDEYANSAH",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": 95,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 92,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 69,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 71,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 82,
    "sej_g": "A",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 93,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "502 / 600",
    "purata": "83.7%",
    "posisi": "4 / 13",
    "hadir": "189 / 200 Hari",
    "ulasan": "Tahniah atas usaha gigih. Teruskan momentum kecemerlangan dalam PBD.",
    "email": "muhammad23@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-024",
    "name": "MUHAMMAD ARIQ ADAM BIN SANUDIN",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": 88,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 91,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 86,
    "mt_g": "A",
    "mt_tp": "TP 6 (Cemerlang)",
    "sn_m": 67,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 90,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 90,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "512 / 600",
    "purata": "85.3%",
    "posisi": "3 / 13",
    "hadir": "199 / 200 Hari",
    "ulasan": "Bagus dan berdisiplin. Tingkatkan kefahaman dalam soalan aras tinggi (KBAT).",
    "email": "",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-025",
    "name": "MUHAMMAD DANISH ZAFWAN BIN PAISAL",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": 87,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 93,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 76,
    "mt_g": "B",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 81,
    "sn_g": "A",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 94,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 82,
    "pi_g": "B",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "513 / 600",
    "purata": "85.5%",
    "posisi": "2 / 13",
    "hadir": "193 / 200 Hari",
    "ulasan": "Kekalkan sahsiah terpuji dan dorong diri untuk sentiasa mencapai Tahap Penguasaan tertinggi.",
    "email": "muhammad25@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-026",
    "name": "MUHAMMAD DZAR DZIKRI BIN MARINDO @ ABD KARIM",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": 83,
    "bm_g": "B",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 77,
    "bi_g": "A",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 92,
    "mt_g": "A",
    "mt_tp": "TP 6 (Cemerlang)",
    "sn_m": 70,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 78,
    "sej_g": "A",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 91,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "491 / 600",
    "purata": "81.8%",
    "posisi": "8 / 13",
    "hadir": "190 / 200 Hari",
    "ulasan": "Perlu lebih fokus semasa sesi pengukuhan dan rajin membuat ulangkaji kendiri.",
    "email": "muhammad26@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-027",
    "name": "AADHAN MUHRIZ BIN MUHAMAD HARIS",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": 76,
    "bm_g": "B",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 91,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 64,
    "mt_g": "C",
    "mt_tp": "TP 3 (Memuaskan)",
    "sn_m": 79,
    "sn_g": "B",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 66,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 82,
    "pi_g": "B",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "458 / 600",
    "purata": "76.3%",
    "posisi": "9 / 13",
    "hadir": "193 / 200 Hari",
    "ulasan": "Kekalkan sahsiah terpuji dan dorong diri untuk sentiasa mencapai Tahap Penguasaan tertinggi.",
    "email": "aadhan27@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-028",
    "name": "AHMAD RIFQI BIN TOTONG",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": 79,
    "bm_g": "B",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 76,
    "bi_g": "A",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 62,
    "mt_g": "C",
    "mt_tp": "TP 3 (Memuaskan)",
    "sn_m": 80,
    "sn_g": "A",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 69,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 86,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "452 / 600",
    "purata": "75.3%",
    "posisi": "10 / 13",
    "hadir": "198 / 200 Hari",
    "ulasan": "Menunjukkan peningkatan prestasi yang amat membanggakan. Teruskan usaha.",
    "email": "",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-029",
    "name": "AISHA DAMIA BINTI JAMALUDDIN",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": 92,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 94,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 68,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 81,
    "sn_g": "A",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 70,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 81,
    "pi_g": "B",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "486 / 600",
    "purata": "81.0%",
    "posisi": "3 / 13",
    "hadir": "191 / 200 Hari",
    "ulasan": "Menunjukkan peningkatan prestasi yang amat membanggakan. Teruskan usaha.",
    "email": "aisha29@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-030",
    "name": "AISYAH SARAH BINTI MUHAMAD SHAHRUDDIN",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": 90,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 95,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 63,
    "mt_g": "C",
    "mt_tp": "TP 3 (Memuaskan)",
    "sn_m": 71,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 76,
    "sej_g": "A",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 88,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "483 / 600",
    "purata": "80.5%",
    "posisi": "4 / 13",
    "hadir": "195 / 200 Hari",
    "ulasan": "Menunjukkan peningkatan prestasi yang amat membanggakan. Teruskan usaha.",
    "email": "aisyah30@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-031",
    "name": "CASEY MARCELINA ANAK JEROME",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": 81,
    "bm_g": "A",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 84,
    "bi_g": "B",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 78,
    "mt_g": "A",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 80,
    "sn_g": "A",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 66,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 78,
    "pi_g": "A",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "467 / 600",
    "purata": "77.8%",
    "posisi": "7 / 13",
    "hadir": "195 / 200 Hari",
    "ulasan": "Kekalkan sahsiah terpuji dan dorong diri untuk sentiasa mencapai Tahap Penguasaan tertinggi.",
    "email": "casey31@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-032",
    "name": "DAANIYATUL FATHIYYAH BINTI SUHAIMI",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": 84,
    "bm_g": "B",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 78,
    "bi_g": "B",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 82,
    "mt_g": "B",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 67,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 70,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 89,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "470 / 600",
    "purata": "78.3%",
    "posisi": "5 / 13",
    "hadir": "191 / 200 Hari",
    "ulasan": "Perlu lebih fokus semasa sesi pengukuhan dan rajin membuat ulangkaji kendiri.",
    "email": "",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-033",
    "name": "HANA HUMAIRA BINTI ABD RIZAM",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": 91,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 88,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 55,
    "mt_g": "C",
    "mt_tp": "TP 3 (Memuaskan)",
    "sn_m": 82,
    "sn_g": "B",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 70,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 79,
    "pi_g": "B",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "465 / 600",
    "purata": "77.5%",
    "posisi": "8 / 13",
    "hadir": "196 / 200 Hari",
    "ulasan": "Menunjukkan peningkatan prestasi yang amat membanggakan. Teruskan usaha.",
    "email": "hana33@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-034",
    "name": "HARITH HAKIM BIN IBNU SUHUD",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": 72,
    "bm_g": "B",
    "bm_tp": "TP 4 (Baik)",
    "bi_m": 69,
    "bi_g": "B",
    "bi_tp": "TP 4 (Baik)",
    "mt_m": 67,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 70,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 72,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 88,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "438 / 600",
    "purata": "73.0%",
    "posisi": "12 / 13",
    "hadir": "194 / 200 Hari",
    "ulasan": "Pencapaian sangat cemerlang. Berpotensi tinggi menjadi murid teladan sekolah.",
    "email": "harith34@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-035",
    "name": "KHAIREEN SAFIYYAH BINTI MARSAN",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": 90,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 90,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 58,
    "mt_g": "C",
    "mt_tp": "TP 3 (Memuaskan)",
    "sn_m": 68,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 69,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 77,
    "pi_g": "B",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "452 / 600",
    "purata": "75.3%",
    "posisi": "11 / 13",
    "hadir": "189 / 200 Hari",
    "ulasan": "Kekalkan sahsiah terpuji dan dorong diri untuk sentiasa mencapai Tahap Penguasaan tertinggi.",
    "email": "khaireen35@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-036",
    "name": "MOHAMAD NAZRI BIN LASEAL",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": 76,
    "bm_g": "B",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 70,
    "bi_g": "B",
    "bi_tp": "TP 4 (Baik)",
    "mt_m": 62,
    "mt_g": "C",
    "mt_tp": "TP 3 (Memuaskan)",
    "sn_m": 80,
    "sn_g": "B",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 65,
    "sej_g": "B",
    "sej_tp": "TP 4 (Baik)",
    "pi_m": 77,
    "pi_g": "A",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "430 / 600",
    "purata": "71.7%",
    "posisi": "13 / 13",
    "hadir": "199 / 200 Hari",
    "ulasan": "Tahniah atas usaha gigih. Teruskan momentum kecemerlangan dalam PBD.",
    "email": "",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-037",
    "name": "MOHAMAD REDZWAN BIN SUPA",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": 92,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 92,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 68,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 83,
    "sn_g": "A",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 82,
    "sej_g": "B",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 82,
    "pi_g": "B",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "499 / 600",
    "purata": "83.2%",
    "posisi": "1 / 13",
    "hadir": "188 / 200 Hari",
    "ulasan": "Kekalkan sahsiah terpuji dan dorong diri untuk sentiasa mencapai Tahap Penguasaan tertinggi.",
    "email": "mohamad37@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-038",
    "name": "MOHAMMAD QAIZAR AMAR MICKHAIL BIN HAERUDDIN",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": 95,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 89,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 54,
    "mt_g": "C",
    "mt_tp": "TP 3 (Memuaskan)",
    "sn_m": 73,
    "sn_g": "B",
    "sn_tp": "TP 4 (Baik)",
    "sej_m": 76,
    "sej_g": "B",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 81,
    "pi_g": "A",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "468 / 600",
    "purata": "78.0%",
    "posisi": "6 / 13",
    "hadir": "186 / 200 Hari",
    "ulasan": "Perlu lebih fokus semasa sesi pengukuhan dan rajin membuat ulangkaji kendiri.",
    "email": "mohammad38@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-039",
    "name": "MOHAMMAD TRIZUANSHAH BIN MOHAMMAD HANAPIAH",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": 95,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 93,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 57,
    "mt_g": "C",
    "mt_tp": "TP 3 (Memuaskan)",
    "sn_m": 81,
    "sn_g": "A",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 77,
    "sej_g": "B",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 95,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "498 / 600",
    "purata": "83.0%",
    "posisi": "2 / 13",
    "hadir": "189 / 200 Hari",
    "ulasan": "Tahniah atas usaha gigih. Teruskan momentum kecemerlangan dalam PBD.",
    "email": "mohammad39@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-040",
    "name": "AFIFAH AUNI AQILAH BINTI JAMIDI",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": 88,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 91,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 67,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 86,
    "sn_g": "A",
    "sn_tp": "TP 6 (Cemerlang)",
    "sej_m": 94,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 78,
    "pi_g": "A",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "504 / 600",
    "purata": "84.0%",
    "posisi": "6 / 11",
    "hadir": "191 / 200 Hari",
    "ulasan": "Pencapaian sangat cemerlang. Berpotensi tinggi menjadi murid teladan sekolah.",
    "email": "",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-041",
    "name": "AHMAD IZZAT BIN SUHARDI",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": 89,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 93,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 84,
    "mt_g": "B",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 89,
    "sn_g": "A",
    "sn_tp": "TP 6 (Cemerlang)",
    "sej_m": 78,
    "sej_g": "A",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 86,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "519 / 600",
    "purata": "86.5%",
    "posisi": "2 / 11",
    "hadir": "196 / 200 Hari",
    "ulasan": "Menunjukkan peningkatan prestasi yang amat membanggakan. Teruskan usaha.",
    "email": "ahmad41@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-042",
    "name": "AHMED ESHAN BIN ABDULLAH",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": 79,
    "bm_g": "A",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 80,
    "bi_g": "A",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 67,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 86,
    "sn_g": "A",
    "sn_tp": "TP 6 (Cemerlang)",
    "sej_m": 93,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 82,
    "pi_g": "B",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "487 / 600",
    "purata": "81.2%",
    "posisi": "10 / 11",
    "hadir": "192 / 200 Hari",
    "ulasan": "Bagus dan berdisiplin. Tingkatkan kefahaman dalam soalan aras tinggi (KBAT).",
    "email": "ahmed42@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-043",
    "name": "AMMAARA LUTHFEA BINTI LUKMAN RIZAL",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": 90,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 77,
    "bi_g": "A",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 84,
    "mt_g": "A",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 89,
    "sn_g": "A",
    "sn_tp": "TP 6 (Cemerlang)",
    "sej_m": 89,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 89,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "518 / 600",
    "purata": "86.3%",
    "posisi": "3 / 11",
    "hadir": "197 / 200 Hari",
    "ulasan": "Pencapaian sangat cemerlang. Berpotensi tinggi menjadi murid teladan sekolah.",
    "email": "ammaara43@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-044",
    "name": "DAMIA ADRIANA BINTI JHON PINERO @ MOHAMMAD ARIF",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": 80,
    "bm_g": "B",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 77,
    "bi_g": "B",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 66,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 84,
    "sn_g": "A",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 81,
    "sej_g": "A",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 86,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "474 / 600",
    "purata": "79.0%",
    "posisi": "11 / 11",
    "hadir": "198 / 200 Hari",
    "ulasan": "Menunjukkan peningkatan prestasi yang amat membanggakan. Teruskan usaha.",
    "email": "",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-045",
    "name": "MAAL HIZRAYYAN BIN ABDULLAH",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": 81,
    "bm_g": "A",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 66,
    "bi_g": "B",
    "bi_tp": "TP 4 (Baik)",
    "mt_m": 92,
    "mt_g": "A",
    "mt_tp": "TP 6 (Cemerlang)",
    "sn_m": 90,
    "sn_g": "A",
    "sn_tp": "TP 6 (Cemerlang)",
    "sej_m": 81,
    "sej_g": "B",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 83,
    "pi_g": "A",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "493 / 600",
    "purata": "82.2%",
    "posisi": "7 / 11",
    "hadir": "192 / 200 Hari",
    "ulasan": "Menunjukkan peningkatan prestasi yang amat membanggakan. Teruskan usaha.",
    "email": "maal45@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-046",
    "name": "MOHAMAD ARIZ ZAHRAN BIN JASNI",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": 88,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 94,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 77,
    "mt_g": "A",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 89,
    "sn_g": "A",
    "sn_tp": "TP 6 (Cemerlang)",
    "sej_m": 94,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 80,
    "pi_g": "B",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "522 / 600",
    "purata": "87.0%",
    "posisi": "1 / 11",
    "hadir": "196 / 200 Hari",
    "ulasan": "Bagus dan berdisiplin. Tingkatkan kefahaman dalam soalan aras tinggi (KBAT).",
    "email": "mohamad46@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-047",
    "name": "MUHAMAD ALIFHAMDAN BIN WAHID",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": 78,
    "bm_g": "A",
    "bm_tp": "TP 5 (Sangat Baik)",
    "bi_m": 71,
    "bi_g": "B",
    "bi_tp": "TP 4 (Baik)",
    "mt_m": 81,
    "mt_g": "A",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 92,
    "sn_g": "A",
    "sn_tp": "TP 6 (Cemerlang)",
    "sej_m": 94,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 95,
    "pi_g": "A",
    "pi_tp": "TP 6 (Cemerlang)",
    "total": "511 / 600",
    "purata": "85.2%",
    "posisi": "5 / 11",
    "hadir": "190 / 200 Hari",
    "ulasan": "Perlu lebih fokus semasa sesi pengukuhan dan rajin membuat ulangkaji kendiri.",
    "email": "muhamad47@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-048",
    "name": "MUHAMMAD ADLI ADAM BIN ADIL",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": 92,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 84,
    "bi_g": "B",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 65,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 84,
    "sn_g": "B",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 82,
    "sej_g": "B",
    "sej_tp": "TP 5 (Sangat Baik)",
    "pi_m": 81,
    "pi_g": "B",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "488 / 600",
    "purata": "81.3%",
    "posisi": "9 / 11",
    "hadir": "196 / 200 Hari",
    "ulasan": "Menunjukkan peningkatan prestasi yang amat membanggakan. Teruskan usaha.",
    "email": "",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-049",
    "name": "MUHAMMAD ALIF FIRDAUS BIN MOHD GHAZALI",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": 95,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 78,
    "bi_g": "A",
    "bi_tp": "TP 5 (Sangat Baik)",
    "mt_m": 65,
    "mt_g": "B",
    "mt_tp": "TP 4 (Baik)",
    "sn_m": 80,
    "sn_g": "B",
    "sn_tp": "TP 5 (Sangat Baik)",
    "sej_m": 90,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 84,
    "pi_g": "A",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "492 / 600",
    "purata": "82.0%",
    "posisi": "8 / 11",
    "hadir": "198 / 200 Hari",
    "ulasan": "Tahniah atas usaha gigih. Teruskan momentum kecemerlangan dalam PBD.",
    "email": "muhammad49@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-050",
    "name": "MUHAMMAD ALIF SYAZWAN BIN USMAN",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": 87,
    "bm_g": "A",
    "bm_tp": "TP 6 (Cemerlang)",
    "bi_m": 91,
    "bi_g": "A",
    "bi_tp": "TP 6 (Cemerlang)",
    "mt_m": 82,
    "mt_g": "A",
    "mt_tp": "TP 5 (Sangat Baik)",
    "sn_m": 88,
    "sn_g": "A",
    "sn_tp": "TP 6 (Cemerlang)",
    "sej_m": 88,
    "sej_g": "A",
    "sej_tp": "TP 6 (Cemerlang)",
    "pi_m": 80,
    "pi_g": "A",
    "pi_tp": "TP 5 (Sangat Baik)",
    "total": "516 / 600",
    "purata": "86.0%",
    "posisi": "4 / 11",
    "hadir": "188 / 200 Hari",
    "ulasan": "Menunjukkan peningkatan prestasi yang amat membanggakan. Teruskan usaha.",
    "email": "muhammad50@gmail.com",
    "status": "BELUM DIPROSES",
    "tarikh": "-",
    "catatan": "Menunggu giliran.",
    "selected": false
  }
];

// Inisialisasi DOM & Event
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  renderTable();
  updateStats();
  populatePreviewSelector();
  if (studentsData.length > 0) {
    renderSlipPreview(studentsData[0]);
  }
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

// 2. Render Jadual Pangkalan Data Murid
function renderTable() {
  const tbody = document.getElementById("students-tbody");
  if (!tbody) return;
  
  const classFilter = document.getElementById("filter-class")?.value || "ALL";
  const statusFilter = document.getElementById("filter-status")?.value || "ALL";
  const searchTxt = document.getElementById("search-input")?.value.toLowerCase().trim() || "";
  
  const filtered = studentsData.filter(st => {
    const matchClass = classFilter === "ALL" || st.kelas === classFilter;
    const matchStatus = statusFilter === "ALL" || st.status === statusFilter;
    const matchSearch = st.name.toLowerCase().includes(searchTxt) || st.id.toLowerCase().includes(searchTxt);
    return matchClass && matchStatus && matchSearch;
  });
  
  tbody.innerHTML = "";
  
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="13" style="text-align:center; padding: 2rem; color: #94a3b8;">Tiada rekod murid dijumpai bagi carian tersebut.</td></tr>`;
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
        <button class="btn btn-outline btn-sm" onclick="viewStudentSlip('${st.id}')">👁️ Slip</button>
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

// 3. Kemas Kini Statistik Kad & Header
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

// 4. Kawalan Konsol Penjanaan Berkelompok (Batch Processing)
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
      alert("Sila tandakan sekurang-kurangnya seorang murid terlebih dahulu.");
      return;
    }
    executeBatchProcess(targets);
  });
  
  document.getElementById("btn-gen-remaining")?.addEventListener("click", () => {
    const targets = studentsData.filter(s => s.status === "BELUM DIPROSES");
    if (targets.length === 0) {
      alert("Semua murid dalam pangkalan data sudah siap dijana!");
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
      logMessage("Sistem telah diset semula. Sedia untuk penjanaan baharu.", "warn");
    }
  });
  
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
  
  logMessage(`▶️ MEMULAKAN BATCH: Memproses ${items.length} rekod PBD murid SK Ranggu (Mod: ${mode})...`, "normal");
  
  let completed = 0;
  for (const st of items) {
    await new Promise(r => setTimeout(r, 90));
    
    const now = new Date();
    const timeStr = now.toLocaleDateString("ms-MY") + " " + now.toLocaleTimeString("ms-MY", { hour: '2-digit', minute: '2-digit' });
    
    st.tarikh = timeStr;
    if (mode === "PDF_EMAIL") {
      if (st.email && st.email.includes("@")) {
        st.status = "BERJAYA";
        st.catatan = `[kod v1.0.1-skrg] Slip PDF dijana & diemel ke: ${st.email}`;
        logMessage(`[${timeStr}] ✅ ${st.name} (${st.kelas}): Slip PDF dijana & diemel ke ${st.email}`, "success");
      } else {
        st.status = "BERJAYA - TIDAK DIEMEL";
        st.catatan = `[kod v1.0.1-skrg] Slip PDF disimpan ke Drive. (Emel tiada/tidak didaftarkan)`;
        logMessage(`[${timeStr}] ⚠️ ${st.name} (${st.kelas}): Slip PDF disimpan. Emel tiada.`, "warn");
      }
    } else {
      st.status = "BERJAYA";
      st.catatan = `[kod v1.0.1-skrg] Slip PDF disimpan ke Google Drive.`;
      logMessage(`[${timeStr}] ✅ ${st.name} (${st.kelas}): Slip PDF disimpan ke Google Drive SK Ranggu.`, "success");
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
  
  logMessage(`🎉 SELESAI: ${items.length} slip pentaksiran murid SK Ranggu berjaya disempurnakan!`, "success");
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
  window.scrollTo({ top: 80, behavior: 'smooth' });
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
