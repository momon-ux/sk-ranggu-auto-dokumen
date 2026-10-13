/**
 * ============================================================================
 * SISTEM AUTO DOKUMEN & PENJANA SLIP PENTAKSIRAN PBD / UASA SK RANGGU
 * Diintegrasikan Bersama Mod Pengisian Markah Guru & Pilihan Multi-Tahun
 * ============================================================================
 * Pembangun: Cikgu Mohammad Fikrey bin Abdul Gapar (SK Ranggu, Tawau)
 */

// Senarai Roster Asal Murid Tahun 6 SK Ranggu (Markah Kosong/Belum Diisi)
const INITIAL_STUDENTS_ROSTER = [
  {
    "id": "SKRG-2026-Y6-001",
    "name": "ALFIN ZIKRI BIN MUHAMMAD ZULKIFLI",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "alfin1@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-002",
    "name": "AMIRAH AQILAH BINTI MARZHUKHI",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "amirah2@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-003",
    "name": "ANIQ IZZ ZARIF BIN MOHD NOR AZMAN",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "aniq3@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-004",
    "name": "AUDHIA MULIANIE BINTI ADY KURNIAWAN",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-005",
    "name": "DAYANG NUR ATHIRAH BINTI DATU MOHD NOOR",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "dayang5@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-006",
    "name": "FARHANA ALISYA BINTI A.RAHMAN",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "farhana6@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-007",
    "name": "HUMAIRA QAIRINA BINTI HASSAN",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "humaira7@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-008",
    "name": "MARZUQI WAHIDUZ ZAMAN BIN HERMANSHAH",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-009",
    "name": "MAS SYUHADAH BINTI MASLI",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "mas9@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-010",
    "name": "MOHAMMAD IQQAL RUZAYLEY BIN MOHD RUSDI",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "mohammad10@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-011",
    "name": "MOHAMMAD IRFAN BIN JASMYN",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "mohammad11@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-012",
    "name": "MUHAMAD AIDIL AZHARI BIN MOHAMAD ALI",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-013",
    "name": "MUHAMMAD ALIF BIN RAMIL",
    "kelas": "6 ILTIZAM",
    "guru": "Pn. Noze binti Tukijan (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "muhammad13@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-014",
    "name": "ADNI DAFINAH BINTI MURSALIN",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "adni14@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-015",
    "name": "AIRIS NUR RAYSHA AMANDA BINTI RIDUAN",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "airis15@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-016",
    "name": "ARIZ FAIQH BIN MOHD ROZAIDY",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-017",
    "name": "AUFA HANIFAH BINTI JUARI",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "aufa17@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-018",
    "name": "IZZAT NAZHAN BIN SUMARDI",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "izzat18@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-019",
    "name": "LINDA QAISARAH BINTI RAJLAN",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "linda19@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-020",
    "name": "MAHIRAH ATHILAH BINTI M SABRAN",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-021",
    "name": "MUHAMMAD AFIF ARSYAD BIN HASRIN",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "muhammad21@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-022",
    "name": "MUHAMMAD AIMAN BIN AMBO MASSE",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "muhammad22@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-023",
    "name": "MUHAMMAD AMMAR SYAWAL BIN SUDEYANSAH",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "muhammad23@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-024",
    "name": "MUHAMMAD ARIQ ADAM BIN SANUDIN",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-025",
    "name": "MUHAMMAD DANISH ZAFWAN BIN PAISAL",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "muhammad25@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-026",
    "name": "MUHAMMAD DZAR DZIKRI BIN MARINDO @ ABD KARIM",
    "kelas": "6 JAYYID",
    "guru": "AgKu Kemainddra bin Pg Mohd Taib (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "muhammad26@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-027",
    "name": "AADHAN MUHRIZ BIN MUHAMAD HARIS",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "aadhan27@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-028",
    "name": "AHMAD RIFQI BIN TOTONG",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-029",
    "name": "AISHA DAMIA BINTI JAMALUDDIN",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "aisha29@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-030",
    "name": "AISYAH SARAH BINTI MUHAMAD SHAHRUDDIN",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "aisyah30@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-031",
    "name": "CASEY MARCELINA ANAK JEROME",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "casey31@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-032",
    "name": "DAANIYATUL FATHIYYAH BINTI SUHAIMI",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-033",
    "name": "HANA HUMAIRA BINTI ABD RIZAM",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "hana33@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-034",
    "name": "HARITH HAKIM BIN IBNU SUHUD",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "harith34@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-035",
    "name": "KHAIREEN SAFIYYAH BINTI MARSAN",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "khaireen35@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-036",
    "name": "MOHAMAD NAZRI BIN LASEAL",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-037",
    "name": "MOHAMAD REDZWAN BIN SUPA",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "mohamad37@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-038",
    "name": "MOHAMMAD QAIZAR AMAR MICKHAIL BIN HAERUDDIN",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "mohammad38@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-039",
    "name": "MOHAMMAD TRIZUANSHAH BIN MOHAMMAD HANAPIAH",
    "kelas": "6 KHOIR",
    "guru": "Sabriah @ Habibah Abdul Sabar (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "mohammad39@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-040",
    "name": "AFIFAH AUNI AQILAH BINTI JAMIDI",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-041",
    "name": "AHMAD IZZAT BIN SUHARDI",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "ahmad41@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-042",
    "name": "AHMED ESHAN BIN ABDULLAH",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "ahmed42@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-043",
    "name": "AMMAARA LUTHFEA BINTI LUKMAN RIZAL",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "ammaara43@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-044",
    "name": "DAMIA ADRIANA BINTI JHON PINERO @ MOHAMMAD ARIF",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-045",
    "name": "MAAL HIZRAYYAN BIN ABDULLAH",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "maal45@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-046",
    "name": "MOHAMAD ARIZ ZAHRAN BIN JASNI",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "mohamad46@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-047",
    "name": "MUHAMAD ALIFHAMDAN BIN WAHID",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "muhamad47@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-048",
    "name": "MUHAMMAD ADLI ADAM BIN ADIL",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-049",
    "name": "MUHAMMAD ALIF FIRDAUS BIN MOHD GHAZALI",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "muhammad49@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  },
  {
    "id": "SKRG-2026-Y6-050",
    "name": "MUHAMMAD ALIF SYAZWAN BIN USMAN",
    "kelas": "6 MUMTAZ",
    "guru": "Pn. Bajam binti Ladung (Guru Kelas)",
    "bm_m": "",
    "bm_g": "-",
    "bm_tp": "Belum Diisi",
    "bi_m": "",
    "bi_g": "-",
    "bi_tp": "Belum Diisi",
    "mt_m": "",
    "mt_g": "-",
    "mt_tp": "Belum Diisi",
    "sn_m": "",
    "sn_g": "-",
    "sn_tp": "Belum Diisi",
    "sej_m": "",
    "sej_g": "-",
    "sej_tp": "Belum Diisi",
    "pi_m": "",
    "pi_g": "-",
    "pi_tp": "Belum Diisi",
    "total": "0 / 600",
    "purata": "0.0%",
    "posisi": "-",
    "hadir": "0 / 200 Hari",
    "ulasan": "",
    "email": "muhammad50@gmail.com",
    "status": "BELUM DIISI",
    "tarikh": "-",
    "catatan": "Menunggu pengisian markah oleh guru.",
    "selected": false
  }
];

// Keadaan Semasa Sistem (State)
let currentYear = "2026";
let currentAssessment = "Pentaksiran Akhir Sesi Akademik (PASA)";
let studentsData = [];

// Inisialisasi Apabila Laman Dimuatkan
document.addEventListener("DOMContentLoaded", () => {
  loadYearData();
  setupYearAndSessionControls();
  setupTabs();
  renderEntryTable();
  renderDatabaseTable();
  updateStats();
  populatePreviewSelector();
  if (studentsData.length > 0) {
    renderSlipPreview(studentsData[0]);
  }
  setupConsoleEvents();
});

// 1. Muat Data daripada LocalStorage mengikut Tahun & Sesi
function loadYearData() {
  const storageKey = `skrg_pbd_marks_${currentYear}_${currentAssessment.replace(/\s+/g, '_')}`;
  const saved = localStorage.getItem(storageKey);
  
  if (saved) {
    try {
      studentsData = JSON.parse(saved);
    } catch (e) {
      studentsData = JSON.parse(JSON.stringify(INITIAL_STUDENTS_ROSTER));
    }
  } else {
    // Gunakan senarai kosong jika tiada data disimpan lagi
    studentsData = JSON.parse(JSON.stringify(INITIAL_STUDENTS_ROSTER));
  }
  
  recalculateAllClassRanks();
}

// 2. Simpan Data ke LocalStorage
function saveCurrentMarks(showToast = true) {
  recalculateAllClassRanks();
  const storageKey = `skrg_pbd_marks_${currentYear}_${currentAssessment.replace(/\s+/g, '_')}`;
  localStorage.setItem(storageKey, JSON.stringify(studentsData));
  
  renderEntryTable();
  renderDatabaseTable();
  updateStats();
  
  const currentPreviewId = document.getElementById("preview-student-select")?.value;
  if (currentPreviewId) {
    const st = studentsData.find(s => s.id === currentPreviewId);
    if (st) renderSlipPreview(st);
  }
  
  if (showToast) {
    showToastNotification(`✅ Markah Tahun ${currentYear} berjaya disimpan ke pelayar!`);
  }
}

// 3. Kawalan Tahun & Sesi Persekolahan (2026, 2027, 2028...)
function setupYearAndSessionControls() {
  const yearSelect = document.getElementById("global-year-select");
  const sessionSelect = document.getElementById("global-session-select");
  
  yearSelect?.addEventListener("change", (e) => {
    currentYear = e.target.value;
    updateYearUI();
    loadYearData();
    renderEntryTable();
    renderDatabaseTable();
    updateStats();
    populatePreviewSelector();
    if (studentsData.length > 0) renderSlipPreview(studentsData[0]);
    showToastNotification(`📅 Sesi ditukar ke Tahun ${currentYear}`);
  });
  
  sessionSelect?.addEventListener("change", (e) => {
    currentAssessment = e.target.value;
    updateYearUI();
    loadYearData();
    renderEntryTable();
    renderDatabaseTable();
    updateStats();
    populatePreviewSelector();
    if (studentsData.length > 0) renderSlipPreview(studentsData[0]);
    showToastNotification(`📝 Pentaksiran: ${currentAssessment}`);
  });
}

function updateYearUI() {
  const fullSessionTitle = `${currentAssessment} Tahun ${currentYear}`;
  
  // Kemas kini input nama dokumen
  const docNameInput = document.getElementById("setup-doc-name");
  if (docNameInput) {
    docNameInput.value = `Slip_PBD_UASA_SK_Ranggu_${currentYear}`;
  }
  
  // Kemas kini tajuk sesi pada pratonton slip
  const slipSession = document.getElementById("slip-session");
  if (slipSession) {
    slipSession.innerText = `${fullSessionTitle} • SK Ranggu Tawau`;
  }
  
  // Kemas kini label sesi semasa pada borang pengisian
  const entrySessionLabel = document.getElementById("entry-session-label");
  if (entrySessionLabel) {
    entrySessionLabel.innerText = `${currentAssessment} (Tahun ${currentYear})`;
  }
}

// 4. Pengurusan Tab
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

// 5. Logik Pengiraan Gred & TP Automatik
function getGradeFromMark(markVal) {
  if (markVal === "" || markVal === null || markVal === undefined) return "-";
  const m = parseFloat(markVal);
  if (isNaN(m)) return "-";
  if (m >= 80) return "A";
  if (m >= 65) return "B";
  if (m >= 50) return "C";
  if (m >= 40) return "D";
  return "E";
}

function getTPFromMark(markVal) {
  if (markVal === "" || markVal === null || markVal === undefined) return "-";
  const m = parseFloat(markVal);
  if (isNaN(m)) return "-";
  if (m >= 85) return "TP 6 (Cemerlang)";
  if (m >= 75) return "TP 5 (Sangat Baik)";
  if (m >= 65) return "TP 4 (Baik)";
  if (m >= 50) return "TP 3 (Memuaskan)";
  if (m >= 40) return "TP 2 (Tahap Minimum)";
  return "TP 1 (Sangat Terhad)";
}

// 6. Kemas Kini Markah Murid Secara Masa Nyata (Live Input)
function updateStudentMark(studentId, subject, val) {
  const st = studentsData.find(s => s.id === studentId);
  if (!st) return;
  
  const cleanVal = val.trim();
  if (cleanVal !== "") {
    const num = parseFloat(cleanVal);
    if (num < 0 || num > 100) {
      alert("Markah mestilah antara 0 hingga 100!");
      return;
    }
  }
  
  st[`${subject}_m`] = cleanVal;
  st[`${subject}_g`] = getGradeFromMark(cleanVal);
  st[`${subject}_tp`] = getTPFromMark(cleanVal);
  
  // Kira Jumlah & Purata Murid
  const subjects = ["bm", "bi", "mt", "sn", "sej", "pi"];
  let total = 0;
  let filledCount = 0;
  
  subjects.forEach(sub => {
    const mStr = st[`${sub}_m`];
    if (mStr !== "" && mStr !== null && !isNaN(parseFloat(mStr))) {
      total += parseFloat(mStr);
      filledCount++;
    }
  });
  
  if (filledCount > 0) {
    const avg = (total / 6.0).toFixed(1);
    st.total = `${Math.round(total)} / 600`;
    st.purata = `${avg}%`;
    st.purata_num = parseFloat(avg);
    st.status = (filledCount === 6) ? "SEDIA DIJANA" : "PENGISIAN SEPARA";
  } else {
    st.total = "0 / 600";
    st.purata = "0.0%";
    st.purata_num = 0;
    st.status = "BELUM DIISI";
  }
  
  recalculateAllClassRanks();
  
  // Kemas kini paparan ringkasan baris tersebut
  const totalCell = document.getElementById(`row-total-${st.id}`);
  const purataCell = document.getElementById(`row-purata-${st.id}`);
  const tpCell = document.getElementById(`badge-tp-${subject}-${st.id}`);
  const gredCell = document.getElementById(`badge-gred-${subject}-${st.id}`);
  
  if (totalCell) totalCell.innerText = st.total;
  if (purataCell) purataCell.innerText = st.purata;
  if (tpCell) tpCell.innerText = st[`${subject}_tp`].split(' ')[0] || "-";
  if (gredCell) gredCell.innerText = st[`${subject}_g`];
  
  updateStats();
}

// 7. Kira Kedudukan Kelas
function recalculateAllClassRanks() {
  const classes = ["6 MUMTAZ", "6 JAYYID", "6 ILTIZAM", "6 KHOIR"];
  classes.forEach(c => {
    const classStudents = studentsData.filter(s => s.kelas === c);
    // Susun mengikut purata tertinggi
    classStudents.sort((a, b) => (b.purata_num || 0) - (a.purata_num || 0));
    const totalCount = classStudents.length;
    classStudents.forEach((st, rank) => {
      st.posisi = (st.purata_num > 0) ? `${rank + 1} / ${totalCount}` : "-";
    });
  });
}

// 8. Render Jadual Pengisian Markah Guru (Tab 1)
function renderEntryTable() {
  const tbody = document.getElementById("entry-tbody");
  if (!tbody) return;
  
  const classFilter = document.getElementById("entry-filter-class")?.value || "ALL";
  const searchTxt = document.getElementById("entry-search")?.value.toLowerCase().trim() || "";
  
  const filtered = studentsData.filter(st => {
    const matchClass = classFilter === "ALL" || st.kelas === classFilter;
    const matchSearch = st.name.toLowerCase().includes(searchTxt) || st.id.toLowerCase().includes(searchTxt);
    return matchClass && matchSearch;
  });
  
  tbody.innerHTML = "";
  
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="12" style="text-align:center; padding: 2rem; color: #94a3b8;">Tiada rekod murid dijumpai.</td></tr>`;
    return;
  }
  
  filtered.forEach((st, idx) => {
    const tr = document.createElement("tr");
    
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td style="font-weight:700; color:#38bdf8;">${st.id}</td>
      <td>
        <strong>${st.name}</strong><br>
        <span class="school-tag">${st.kelas}</span>
      </td>
      <td>
        <div class="mark-cell-group">
          <input type="number" min="0" max="100" class="mark-input" value="${st.bm_m}" placeholder="-" 
                 onchange="updateStudentMark('${st.id}', 'bm', this.value)">
          <div>
            <span class="gred-text-mini" id="badge-gred-bm-${st.id}">${st.bm_g}</span>
            <span class="tp-badge-mini" id="badge-tp-bm-${st.id}">${st.bm_tp.split(' ')[0]}</span>
          </div>
        </div>
      </td>
      <td>
        <div class="mark-cell-group">
          <input type="number" min="0" max="100" class="mark-input" value="${st.bi_m}" placeholder="-" 
                 onchange="updateStudentMark('${st.id}', 'bi', this.value)">
          <div>
            <span class="gred-text-mini" id="badge-gred-bi-${st.id}">${st.bi_g}</span>
            <span class="tp-badge-mini" id="badge-tp-bi-${st.id}">${st.bi_tp.split(' ')[0]}</span>
          </div>
        </div>
      </td>
      <td>
        <div class="mark-cell-group">
          <input type="number" min="0" max="100" class="mark-input" value="${st.mt_m}" placeholder="-" 
                 onchange="updateStudentMark('${st.id}', 'mt', this.value)">
          <div>
            <span class="gred-text-mini" id="badge-gred-mt-${st.id}">${st.mt_g}</span>
            <span class="tp-badge-mini" id="badge-tp-mt-${st.id}">${st.mt_tp.split(' ')[0]}</span>
          </div>
        </div>
      </td>
      <td>
        <div class="mark-cell-group">
          <input type="number" min="0" max="100" class="mark-input" value="${st.sn_m}" placeholder="-" 
                 onchange="updateStudentMark('${st.id}', 'sn', this.value)">
          <div>
            <span class="gred-text-mini" id="badge-gred-sn-${st.id}">${st.sn_g}</span>
            <span class="tp-badge-mini" id="badge-tp-sn-${st.id}">${st.sn_tp.split(' ')[0]}</span>
          </div>
        </div>
      </td>
      <td>
        <div class="mark-cell-group">
          <input type="number" min="0" max="100" class="mark-input" value="${st.sej_m}" placeholder="-" 
                 onchange="updateStudentMark('${st.id}', 'sej', this.value)">
          <div>
            <span class="gred-text-mini" id="badge-gred-sej-${st.id}">${st.sej_g}</span>
            <span class="tp-badge-mini" id="badge-tp-sej-${st.id}">${st.sej_tp.split(' ')[0]}</span>
          </div>
        </div>
      </td>
      <td>
        <div class="mark-cell-group">
          <input type="number" min="0" max="100" class="mark-input" value="${st.pi_m}" placeholder="-" 
                 onchange="updateStudentMark('${st.id}', 'pi', this.value)">
          <div>
            <span class="gred-text-mini" id="badge-gred-pi-${st.id}">${st.pi_g}</span>
            <span class="tp-badge-mini" id="badge-tp-pi-${st.id}">${st.pi_tp.split(' ')[0]}</span>
          </div>
        </div>
      </td>
      <td><strong id="row-total-${st.id}">${st.total}</strong></td>
      <td><strong style="color:#10b981;" id="row-purata-${st.id}">${st.purata}</strong></td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="viewStudentSlip('${st.id}')">👁️ Slip</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// 9. Render Jadual Pangkalan Data PBD (Tab 2)
function renderDatabaseTable() {
  const tbody = document.getElementById("database-tbody");
  if (!tbody) return;
  
  const classFilter = document.getElementById("db-filter-class")?.value || "ALL";
  const statusFilter = document.getElementById("db-filter-status")?.value || "ALL";
  const searchTxt = document.getElementById("db-search")?.value.toLowerCase().trim() || "";
  
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
    if (st.status === "BERJAYA" || st.status === "SEDIA DIJANA") statusClass = "badge-success";
    if (st.status === "BERJAYA - TIDAK DIEMEL" || st.status === "PENGISIAN SEPARA") statusClass = "badge-warning";
    if (st.status === "GAGAL") statusClass = "badge-danger";
    
    tr.innerHTML = `
      <td><input type="checkbox" class="row-select" data-id="${st.id}" ${st.selected ? "checked" : ""}></td>
      <td>${idx + 1}</td>
      <td style="font-weight:700; color:#38bdf8;">${st.id}</td>
      <td><strong>${st.name}</strong></td>
      <td><span class="school-tag">${st.kelas}</span></td>
      <td>${st.bm_m || "-"} (${st.bm_g})<br><small style="color:#94a3b8">${st.bm_tp.split(' ')[0]}</small></td>
      <td>${st.bi_m || "-"} (${st.bi_g})<br><small style="color:#94a3b8">${st.bi_tp.split(' ')[0]}</small></td>
      <td>${st.mt_m || "-"} (${st.mt_g})<br><small style="color:#94a3b8">${st.mt_tp.split(' ')[0]}</small></td>
      <td>${st.sn_m || "-"} (${st.sn_g})<br><small style="color:#94a3b8">${st.sn_tp.split(' ')[0]}</small></td>
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

// 10. Kemas Kini Statistik Kad Ringkasan
function updateStats() {
  const total = studentsData.length;
  const processed = studentsData.filter(s => s.status.includes("BERJAYA")).length;
  const filled = studentsData.filter(s => s.status === "SEDIA DIJANA" || s.status.includes("BERJAYA")).length;
  const pending = total - filled;
  const selected = studentsData.filter(s => s.selected).length;
  
  if (document.getElementById("stat-total")) document.getElementById("stat-total").innerText = total;
  if (document.getElementById("stat-processed")) document.getElementById("stat-processed").innerText = filled;
  if (document.getElementById("stat-pending")) document.getElementById("stat-pending").innerText = pending;
  if (document.getElementById("stat-selected")) document.getElementById("stat-selected").innerText = selected;
}

function toggleSelectAll(checked) {
  studentsData.forEach(s => s.selected = checked);
  renderDatabaseTable();
  updateStats();
}

// 11. Kawalan Konsol Penjanaan Berkelompok
function setupConsoleEvents() {
  document.getElementById("btn-select-all")?.addEventListener("click", () => {
    studentsData.forEach(s => s.selected = true);
    const thSelect = document.getElementById("th-select-all");
    if (thSelect) thSelect.checked = true;
    renderDatabaseTable();
    updateStats();
  });
  
  document.getElementById("btn-deselect-all")?.addEventListener("click", () => {
    studentsData.forEach(s => s.selected = false);
    renderDatabaseTable();
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
    const targets = studentsData.filter(s => !s.status.includes("BERJAYA"));
    if (targets.length === 0) {
      alert("Semua murid dalam pangkalan data sudah siap dijana!");
      return;
    }
    executeBatchProcess(targets);
  });
  
  // Filter events
  document.getElementById("entry-filter-class")?.addEventListener("change", renderEntryTable);
  document.getElementById("entry-search")?.addEventListener("input", renderEntryTable);
  document.getElementById("db-filter-class")?.addEventListener("change", renderDatabaseTable);
  document.getElementById("db-filter-status")?.addEventListener("change", renderDatabaseTable);
  document.getElementById("db-search")?.addEventListener("input", renderDatabaseTable);
}

// 12. Enjin Penjanaan Berkelompok
let isProcessing = false;
async function executeBatchProcess(items) {
  if (isProcessing) return;
  isProcessing = true;
  
  const progressBar = document.getElementById("batch-progress-bar");
  const progressText = document.getElementById("batch-progress-text");
  const mode = document.getElementById("setup-mode")?.value || "PDF_EMAIL";
  
  logMessage(`▶️ MEMULAKAN BATCH [Tahun ${currentYear}]: Memproses ${items.length} rekod PBD murid SK Ranggu...`, "normal");
  
  let completed = 0;
  for (const st of items) {
    await new Promise(r => setTimeout(r, 80));
    
    const now = new Date();
    const timeStr = now.toLocaleDateString("ms-MY") + " " + now.toLocaleTimeString("ms-MY", { hour: '2-digit', minute: '2-digit' });
    st.tarikh = timeStr;
    
    if (mode === "PDF_EMAIL") {
      if (st.email && st.email.includes("@")) {
        st.status = "BERJAYA";
        st.catatan = `[kod v1.0.1-skrg] Slip PDF Tahun ${currentYear} dijana & diemel ke: ${st.email}`;
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
      renderDatabaseTable();
      updateStats();
    }
  }
  
  logMessage(`🎉 SELESAI: ${items.length} slip pentaksiran murid SK Ranggu berjaya disempurnakan!`, "success");
  isProcessing = false;
  saveCurrentMarks(false);
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

// 13. Pratonton Slip Rasmi
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
  document.getElementById("slip-session").innerText = `${currentAssessment} Tahun ${currentYear} • SK Ranggu Tawau`;
  
  // Markah & Gred & TP (Tunjukkan "-" jika belum diisi)
  document.getElementById("slip-bm-m").innerText = st.bm_m || "-";
  document.getElementById("slip-bm-g").innerText = st.bm_g || "-";
  document.getElementById("slip-bm-tp").innerText = st.bm_tp || "-";
  
  document.getElementById("slip-bi-m").innerText = st.bi_m || "-";
  document.getElementById("slip-bi-g").innerText = st.bi_g || "-";
  document.getElementById("slip-bi-tp").innerText = st.bi_tp || "-";
  
  document.getElementById("slip-mt-m").innerText = st.mt_m || "-";
  document.getElementById("slip-mt-g").innerText = st.mt_g || "-";
  document.getElementById("slip-mt-tp").innerText = st.mt_tp || "-";
  
  document.getElementById("slip-sn-m").innerText = st.sn_m || "-";
  document.getElementById("slip-sn-g").innerText = st.sn_g || "-";
  document.getElementById("slip-sn-tp").innerText = st.sn_tp || "-";
  
  document.getElementById("slip-sej-m").innerText = st.sej_m || "-";
  document.getElementById("slip-sej-g").innerText = st.sej_g || "-";
  document.getElementById("slip-sej-tp").innerText = st.sej_tp || "-";
  
  document.getElementById("slip-pi-m").innerText = st.pi_m || "-";
  document.getElementById("slip-pi-g").innerText = st.pi_g || "-";
  document.getElementById("slip-pi-tp").innerText = st.pi_tp || "-";
  
  // Summary
  document.getElementById("slip-total").innerText = st.total || "-";
  document.getElementById("slip-purata").innerText = st.purata || "-";
  document.getElementById("slip-posisi").innerText = st.posisi || "-";
  document.getElementById("slip-hadir").innerText = st.hadir || "-";
  
  document.getElementById("slip-ulasan").innerText = st.ulasan ? `"${st.ulasan}"` : "(Ulasan guru belum diisi)";
}

// 14. Reset / Kosongkan Semua Markah
function resetAllMarks() {
  if (confirm(`Adakah anda pasti mahu mengosongkan semua markah bagi Sesi ${currentYear}? Tindakan ini akan menetapkan semula markah kepada kosong untuk pengisian baharu.`)) {
    studentsData = JSON.parse(JSON.stringify(INITIAL_STUDENTS_ROSTER));
    saveCurrentMarks(false);
    showToastNotification(`🧹 Semua markah Tahun ${currentYear} telah dikosongkan untuk pengisian baharu.`);
  }
}

// 15. Eksport CSV
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
  link.setAttribute("download", `Markah_PBD_UASA_SK_Ranggu_${currentYear}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 16. Salin Kod Google Apps Script
function copyGasCode() {
  const code = document.getElementById("gas-code-block")?.innerText;
  if (!code) return;
  navigator.clipboard.writeText(code).then(() => {
    alert("✅ Kod Google Apps Script (Code.gs) PBD SK Ranggu berjaya disalin!");
  });
}

// 17. Toast Notification Helper
function showToastNotification(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
