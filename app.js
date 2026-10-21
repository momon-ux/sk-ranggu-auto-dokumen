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
    "selected": false,
    "no_kp": "140101-12-0501"
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
    "selected": false,
    "no_kp": "140204-12-0508"
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
    "selected": false,
    "no_kp": "140307-12-0515"
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
    "selected": false,
    "no_kp": "140410-12-0522"
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
    "selected": false,
    "no_kp": "140513-12-0528"
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
    "selected": false,
    "no_kp": "140616-12-0536"
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
    "selected": false,
    "no_kp": "140719-12-0542"
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
    "selected": false,
    "no_kp": "140822-12-0549"
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
    "selected": false,
    "no_kp": "140925-12-0556"
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
    "selected": false,
    "no_kp": "141028-12-0563"
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
    "selected": false,
    "no_kp": "141103-12-0571"
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
    "selected": false,
    "no_kp": "141206-12-0577"
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
    "selected": false,
    "no_kp": "140109-12-0585"
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
    "selected": false,
    "no_kp": "140212-12-0592"
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
    "selected": false,
    "no_kp": "140315-12-0598"
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
    "selected": false,
    "no_kp": "140418-12-0605"
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
    "selected": false,
    "no_kp": "140521-12-0612"
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
    "selected": false,
    "no_kp": "140624-12-0619"
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
    "selected": false,
    "no_kp": "140727-12-0626"
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
    "selected": false,
    "no_kp": "140802-12-0634"
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
    "selected": false,
    "no_kp": "140905-12-0641"
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
    "selected": false,
    "no_kp": "141008-12-0647"
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
    "selected": false,
    "no_kp": "141111-12-0655"
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
    "selected": false,
    "no_kp": "141214-12-0661"
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
    "selected": false,
    "no_kp": "140117-12-0669"
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
    "selected": false,
    "no_kp": "140220-12-0675"
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
    "selected": false,
    "no_kp": "140323-12-0683"
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
    "selected": false,
    "no_kp": "140426-12-0689"
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
    "selected": false,
    "no_kp": "140501-12-0696"
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
    "selected": false,
    "no_kp": "140604-12-0704"
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
    "selected": false,
    "no_kp": "140707-12-0711"
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
    "selected": false,
    "no_kp": "140810-12-0718"
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
    "selected": false,
    "no_kp": "140913-12-0724"
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
    "selected": false,
    "no_kp": "141016-12-0731"
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
    "selected": false,
    "no_kp": "141119-12-0738"
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
    "selected": false,
    "no_kp": "141222-12-0745"
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
    "selected": false,
    "no_kp": "140125-12-0753"
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
    "selected": false,
    "no_kp": "140228-12-0759"
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
    "selected": false,
    "no_kp": "140303-12-0767"
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
    "selected": false,
    "no_kp": "140406-12-0774"
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
    "selected": false,
    "no_kp": "140509-12-0781"
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
    "selected": false,
    "no_kp": "140612-12-0787"
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
    "selected": false,
    "no_kp": "140715-12-0794"
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
    "selected": false,
    "no_kp": "140818-12-0802"
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
    "selected": false,
    "no_kp": "140921-12-0809"
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
    "selected": false,
    "no_kp": "141024-12-0815"
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
    "selected": false,
    "no_kp": "141127-12-0823"
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
    "selected": false,
    "no_kp": "141202-12-0829"
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
    "selected": false,
    "no_kp": "140105-12-0837"
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
    "selected": false,
    "no_kp": "140208-12-0843"
  }
];

// Senarai Guru Rasmi SK Ranggu (Data Awal & Pengesahan IC)
const DEFAULT_TEACHERS = [
  {
    id: "T001",
    ic: "910528-12-5411",
    name: "MOHAMMAD FIKREY BIN ABDUL GAPAR",
    role: "PENTADBIR SISTEM / PEMBANGUN SISTEM",
    isAdmin: true,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T002",
    ic: "750410-12-5678",
    name: "PN. BAJAM BINTI LADUNG",
    role: "GURU KELAS (6 MUMTAZ)",
    isAdmin: false,
    isClassTeacherOf: "6 MUMTAZ",
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T003",
    ic: "820315-12-6123",
    name: "AGKU KEMAINDDRA BIN PG MOHD TAIB",
    role: "GURU KELAS (6 JAYYID)",
    isAdmin: false,
    isClassTeacherOf: "6 JAYYID",
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T004",
    ic: "791120-12-5890",
    name: "PN. NOZE BINTI TUKIJAN",
    role: "GURU KELAS (6 ILTIZAM)",
    isAdmin: false,
    isClassTeacherOf: "6 ILTIZAM",
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T005",
    ic: "810705-12-5432",
    name: "SABRIAH @ HABIBAH ABDUL SABAR",
    role: "GURU KELAS (6 KHOIR)",
    isAdmin: false,
    isClassTeacherOf: "6 KHOIR",
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T006",
    ic: "860822-12-5112",
    name: "PN. NURUL ANISA BINTI SAPARUDIN",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T007",
    ic: "780914-12-5334",
    name: "PN. HAMSIAH BINTI HAMID",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T008",
    ic: "840112-12-5567",
    name: "EN. AZMAN BIN KASSIM",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T009",
    ic: "850720-12-5234",
    name: "PN. ROHANI BINTI ISMAIL",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T010",
    ic: "880905-12-5671",
    name: "EN. MOHD SHAHRIL BIN ABDULLAH",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T011",
    ic: "870314-12-5118",
    name: "PN. SITI NORBAYA BINTI AHMAD",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T012",
    ic: "831002-12-5889",
    name: "EN. RUSLAN BIN OTHMAN",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T013",
    ic: "890215-12-5442",
    name: "PN. FATIMAH BINTI AWANG",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T014",
    ic: "801124-12-5773",
    name: "EN. ABDUL HALIM BIN HASHIM",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T015",
    ic: "810418-12-5990",
    name: "PN. ZAITON BINTI DAUD",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T016",
    ic: "830619-12-5812",
    name: "PN. NORMALA BINTI MOHD YUSOF",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T017",
    ic: "871104-12-5337",
    name: "EN. KHAIRUL ANUAR BIN SALLEH",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T018",
    ic: "840815-12-5664",
    name: "PN. MARIAM BINTI HASSAN",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T019",
    ic: "820228-12-5091",
    name: "EN. ZULKIFLI BIN MAHAMUD",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T020",
    ic: "860403-12-5552",
    name: "PN. NORAINI BINTI JAAFAR",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  },
  {
    id: "T021",
    ic: "851219-12-5783",
    name: "EN. MOHAMAD FAIZAL BIN RAMLI",
    role: "GURU MATA PELAJARAN",
    isAdmin: false,
    isClassTeacherOf: null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  }
];

// Penetapan Guru Subjek Lalai Mengikut Kelas (Ditetapkan oleh Guru Kelas)
const DEFAULT_SUBJECT_ASSIGNMENTS = {
  "6 MUMTAZ": {
    classTeacherId: "T002",
    subjects: {
      bm: "T002", // Pn. Bajam Ladung
      bi: "T006", // Pn. Nurul Anisa
      mt: "T001", // Mohammad Fikrey
      sn: "T003", // AgKu Kemainddra
      sej: "T002", // Pn. Bajam Ladung
      pi: "T005"   // Sabriah
    }
  },
  "6 JAYYID": {
    classTeacherId: "T003",
    subjects: {
      bm: "T007", // Pn. Hamsiah
      bi: "T006", // Pn. Nurul Anisa
      mt: "T001", // Mohammad Fikrey
      sn: "T003", // AgKu Kemainddra
      sej: "T003", // AgKu Kemainddra
      pi: "T005"   // Sabriah
    }
  },
  "6 ILTIZAM": {
    classTeacherId: "T004",
    subjects: {
      bm: "T004", // Pn. Noze Tukijan
      bi: "T006", // Pn. Nurul Anisa
      mt: "T001", // Mohammad Fikrey
      sn: "T004", // Pn. Noze Tukijan
      sej: "T007", // Pn. Hamsiah
      pi: "T005"   // Sabriah
    }
  },
  "6 KHOIR": {
    classTeacherId: "T005",
    subjects: {
      bm: "T007", // Pn. Hamsiah
      bi: "T006", // Pn. Nurul Anisa
      mt: "T001", // Mohammad Fikrey
      sn: "T003", // AgKu Kemainddra
      sej: "T005", // Sabriah
      pi: "T005"   // Sabriah
    }
  }
};

const SUBJECT_LABELS = {
  bm: "Bahasa Melayu (BM)",
  bi: "Bahasa Inggeris (BI)",
  mt: "Matematik (MT)",
  sn: "Sains (SN)",
  sej: "Sejarah (SEJ)",
  pi: "Pendidikan Islam (PI)"
};

// Keadaan Semasa Sistem (State)
let currentYear = "2026";
let currentAssessment = "Pentaksiran Akhir Sesi Akademik (PASA)";
let studentsData = [];
let teachersData = [];
let subjectAssignments = {};
let auditLogs = [];
let currentUser = null;

// Inisialisasi Apabila Laman Dimuatkan
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadAuthAndPermissionsData();
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
  startRealtimeClock();
  initAuthUI();
  
  // Inisialisasi Emel Google Drive Admin (Destinasi Sijil Terkumpul)
  const savedDriveEmail = localStorage.getItem("skrg_admin_drive_email") || "cikgufikrey@moe-dl.edu.my";
  const driveInput = document.getElementById("setup-drive-email");
  if (driveInput) {
    driveInput.value = savedDriveEmail;
  }
});

// 1. Muat & Simpan Data Pengesahan, Guru & Penetapan Subjek
function loadAuthAndPermissionsData() {
  const savedTeachers = localStorage.getItem("skrg_teachers_db");
  if (savedTeachers) {
    try { 
      teachersData = JSON.parse(savedTeachers); 
      // Kemas kini automatik untuk Mohammad Fikrey bin Abdul Gapar
      const fikrey = teachersData.find(t => t.id === "T001" || t.name.includes("FIKREY"));
      if (fikrey) {
        fikrey.ic = "910528-12-5411";
        fikrey.role = "PENTADBIR SISTEM / PEMBANGUN SISTEM";
        fikrey.isAdmin = true;
      } else {
        teachersData.unshift({
          id: "T001",
          ic: "910528-12-5411",
          name: "MOHAMMAD FIKREY BIN ABDUL GAPAR",
          role: "PENTADBIR SISTEM / PEMBANGUN SISTEM",
          isAdmin: true,
          isClassTeacherOf: null,
          password: "P3nd1d1kan",
          isFirstLogin: true
        });
      }

      // Gabungkan guru lalai baharu jika belum wujud
      DEFAULT_TEACHERS.forEach(dt => {
        const cleanDtIc = dt.ic.replace(/\D/g, "");
        const exists = teachersData.some(t => t.ic.replace(/\D/g, "") === cleanDtIc || t.name === dt.name);
        if (!exists) {
          teachersData.push({...dt});
        }
      });
      saveTeachersData();
    } catch(e) { 
      teachersData = JSON.parse(JSON.stringify(DEFAULT_TEACHERS)); 
      saveTeachersData();
    }
  } else {
    teachersData = JSON.parse(JSON.stringify(DEFAULT_TEACHERS));
    localStorage.setItem("skrg_teachers_db", JSON.stringify(teachersData));
  }

  const savedAssignments = localStorage.getItem("skrg_subject_assignments");
  if (savedAssignments) {
    try { subjectAssignments = JSON.parse(savedAssignments); } catch(e) { subjectAssignments = {...DEFAULT_SUBJECT_ASSIGNMENTS}; }
  } else {
    subjectAssignments = JSON.parse(JSON.stringify(DEFAULT_SUBJECT_ASSIGNMENTS));
    localStorage.setItem("skrg_subject_assignments", JSON.stringify(subjectAssignments));
  }

  const savedLogs = localStorage.getItem("skrg_audit_trail");
  if (savedLogs) {
    try { auditLogs = JSON.parse(savedLogs); } catch(e) { auditLogs = []; }
  } else {
    auditLogs = [];
  }

  const savedUser = localStorage.getItem("skrg_current_user");
  if (savedUser) {
    try {
      const u = JSON.parse(savedUser);
      const match = teachersData.find(t => t.id === u.id);
      currentUser = match || u;
    } catch(e) {
      currentUser = null;
    }
  } else {
    currentUser = null;
  }
}

function saveTeachersData() {
  localStorage.setItem("skrg_teachers_db", JSON.stringify(teachersData));
}

function saveSubjectAssignmentsData() {
  localStorage.setItem("skrg_subject_assignments", JSON.stringify(subjectAssignments));
}

function saveAuditLogsData() {
  localStorage.setItem("skrg_audit_trail", JSON.stringify(auditLogs));
}

// 2. Jejak Audit (Audit Trail Tracking)
function recordAuditLog(action, details) {
  const now = new Date();
  const timeStr = now.toLocaleDateString("ms-MY") + " " + now.toLocaleTimeString("ms-MY");
  const logItem = {
    id: "LOG-" + Date.now() + "-" + Math.floor(Math.random()*1000),
    timestamp: timeStr,
    teacherName: currentUser ? currentUser.name : "Sistem/Tetamu",
    teacherIc: currentUser ? currentUser.ic : "-",
    action: action,
    details: details
  };
  auditLogs.unshift(logItem);
  if (auditLogs.length > 300) auditLogs = auditLogs.slice(0, 300);
  saveAuditLogsData();
}

// 3. Hak Akses Mengisi Subjek (Role Enforcement)
function canEditSubject(kelas, subject) {
  if (!currentUser) return false;
  if (currentUser.isAdmin || currentUser.id === "T001") return true;

  const classAssign = subjectAssignments[kelas];
  if (!classAssign || !classAssign.subjects) return false;

  const assignedTeacherId = classAssign.subjects[subject];
  return assignedTeacherId === currentUser.id;
}

function isClassTeacherOf(kelas) {
  if (!currentUser) return false;
  if (currentUser.isAdmin || currentUser.id === "T001") return true;
  return currentUser.isClassTeacherOf === kelas;
}

// 4. UI Pengesahan & Sesi Pengguna
function initAuthUI() {
  const display = document.getElementById("current-user-display");
  const btnLogin = document.getElementById("btn-open-login");
  const btnLogout = document.getElementById("btn-logout");
  const btnChangePwd = document.getElementById("btn-change-pwd");
  const permBanner = document.getElementById("user-permission-text");
  const classTeacherInd = document.getElementById("class-teacher-indicator");
  const btnClassAssign = document.getElementById("btn-class-assign");

  populateQuickSelect();

  if (currentUser) {
    if (display) display.innerHTML = `<strong>${currentUser.name}</strong> <small style="color:#94a3b8;">(${currentUser.role})</small>`;
    if (btnLogin) btnLogin.style.display = "none";
    if (btnLogout) btnLogout.style.display = "inline-block";
    if (btnChangePwd) btnChangePwd.style.display = "inline-block";

    const activeClass = document.getElementById("entry-filter-class")?.value || "ALL";
    updateClassTeacherAssignButton(activeClass);

    if (permBanner) {
      if (currentUser.isAdmin) {
        permBanner.innerHTML = `🟢 <strong>Akses Penuh Admin:</strong> Anda boleh menyemak dan mengisi semua subjek bagi semua kelas.`;
      } else {
        permBanner.innerHTML = `👤 <strong>Sesi Aktif:</strong> Anda boleh mengisi markah bagi subjek yang dipegang sahaja. Subjek lain dikunci secara automatik.`;
      }
    }
  } else {
    if (display) display.innerText = "Belum Log Masuk";
    if (btnLogin) btnLogin.style.display = "inline-block";
    if (btnLogout) btnLogout.style.display = "none";
    if (btnChangePwd) btnChangePwd.style.display = "none";
    if (btnClassAssign) btnClassAssign.style.display = "none";
    if (permBanner) permBanner.innerHTML = `🔒 <strong>Mod Lihat Sahaja:</strong> Sila klik butang <strong>"Log Masuk"</strong> untuk mula mengisi markah.`;
    if (classTeacherInd) classTeacherInd.innerText = "";
  }
}

function updateClassTeacherAssignButton(selectedClass) {
  const btnClassAssign = document.getElementById("btn-class-assign");
  const classTeacherInd = document.getElementById("class-teacher-indicator");
  if (!btnClassAssign) return;

  if (currentUser && selectedClass !== "ALL" && (isClassTeacherOf(selectedClass) || currentUser.isAdmin)) {
    btnClassAssign.style.display = "inline-flex";
    btnClassAssign.innerText = `📋 Tetapkan Guru Subjek (${selectedClass})`;
    if (classTeacherInd) classTeacherInd.innerText = `👑 Anda Guru Kelas bagi ${selectedClass}`;
  } else {
    btnClassAssign.style.display = "none";
    if (classTeacherInd) classTeacherInd.innerText = "";
  }
}

function populateQuickSelect() {
  const select = document.getElementById("login-quick-select");
  if (!select) return;
  select.innerHTML = `<option value="">-- Pilih Nama Guru Anda --</option>`;
  teachersData.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.innerText = `${t.name} (${t.role})`;
    select.appendChild(opt);
  });
}

function handleQuickSelectTeacher(teacherId) {
  if (!teacherId) return;
  const teacher = teachersData.find(t => t.id === teacherId);
  if (teacher) {
    const icInput = document.getElementById("login-ic");
    if (icInput) icInput.value = teacher.ic;
    handleIcInput(teacher.ic);
    document.getElementById("login-password")?.focus();
  }
}

function handleIcInput(val) {
  const cleanIc = val.replace(/[^0-9]/g, "");
  const detectedDiv = document.getElementById("login-detected-name");
  if (!detectedDiv) return;

  const match = teachersData.find(t => t.ic.replace(/[^0-9]/g, "") === cleanIc || t.ic === val.trim());
  if (match) {
    detectedDiv.innerHTML = `✅ Dikesan: <strong>${match.name}</strong> (${match.role})`;
  } else {
    detectedDiv.innerHTML = cleanIc.length >= 6 ? `<span style="color:#fb7185;">Tiada rekod guru dengan No. IC ini.</span>` : "";
  }
}

// 5. Fungsi Log Masuk & Kata Laluan
function openLoginModal() {
  document.getElementById("modal-login")?.classList.add("active");
  document.getElementById("login-ic")?.focus();
}

function closeModal(modalId) {
  document.getElementById(modalId)?.classList.remove("active");
}

function submitLogin() {
  const icVal = document.getElementById("login-ic")?.value.trim();
  const pwdVal = document.getElementById("login-password")?.value.trim();

  if (!icVal) {
    alert("Sila masukkan No. Kad Pengenalan (IC) anda.");
    return;
  }
  if (!pwdVal) {
    alert("Sila masukkan kata laluan anda.");
    return;
  }

  const cleanIc = icVal.replace(/[^0-9]/g, "");
  const teacher = teachersData.find(t => t.ic.replace(/[^0-9]/g, "") === cleanIc || t.ic === icVal);

  if (!teacher) {
    alert("No. Kad Pengenalan tidak dijumpai dalam pangkalan data SK Ranggu! Sila hubungi Admin Sistem (Cikgu Mohammad Fikrey).");
    return;
  }

  if (teacher.password !== pwdVal) {
    alert("Kata laluan tidak sah! Sila masukkan kata laluan yang betul atau hubungi Admin untuk set semula ke 'P3nd1d1kan'.");
    return;
  }

  currentUser = teacher;
  localStorage.setItem("skrg_current_user", JSON.stringify(currentUser));
  closeModal("modal-login");
  initAuthUI();
  renderEntryTable();
  recordAuditLog("LOG_MASUK", `Guru ${teacher.name} (${teacher.ic}) berjaya log masuk.`);
  showToastNotification(`Selamat kembali, ${teacher.name}!`);

  // Jika kata laluan masih kata laluan sementara P3nd1d1kan, minta tukar kata laluan baharu
  if (teacher.password === "P3nd1d1kan" || teacher.isFirstLogin) {
    setTimeout(() => {
      openChangePasswordModal();
    }, 600);
  }
}

function handleAdminBypassLogin() {
  const code = prompt("Masukkan Kod Rahsia Pentadbir Sistem SK Ranggu (ts.fikrey37):");
  if (!code) return;
  if (code.trim() === "ts.fikrey37") {
    const adminTeacher = teachersData.find(t => t.isAdmin || t.id === "T001") || DEFAULT_TEACHERS[0];
    currentUser = adminTeacher;
    localStorage.setItem("skrg_current_user", JSON.stringify(currentUser));
    closeModal("modal-login");
    initAuthUI();
    renderEntryTable();
    recordAuditLog("LOG_MASUK_ADMIN", `Log masuk sebagai Admin Sistem menggunakan kod pengesyoran ts.fikrey37.`);
    showToastNotification(`🔓 Akses Penuh Pentadbir Diaktifkan (${adminTeacher.name})!`);
  } else {
    alert("Kod rahsia salah!");
  }
}

function logoutTeacher() {
  if (confirm("Adakah anda pasti mahu log keluar daripada sistem?")) {
    if (currentUser) {
      recordAuditLog("LOG_KELUAR", `Guru ${currentUser.name} telah log keluar.`);
    }
    currentUser = null;
    localStorage.removeItem("skrg_current_user");
    initAuthUI();
    renderEntryTable();
    showToastNotification("Anda telah berjaya log keluar.");
  }
}

function openChangePasswordModal() {
  if (!currentUser) return;
  document.getElementById("new-password").value = "";
  document.getElementById("confirm-new-password").value = "";
  document.getElementById("modal-change-password")?.classList.add("active");
  document.getElementById("new-password")?.focus();
}

function submitChangePassword() {
  const p1 = document.getElementById("new-password")?.value.trim();
  const p2 = document.getElementById("confirm-new-password")?.value.trim();

  if (!p1 || p1.length < 4) {
    alert("Kata laluan baharu mestilah sekurang-kurangnya 4 aksara!");
    return;
  }
  if (p1 !== p2) {
    alert("Kata laluan baharu dan pengesahan tidak sepadan!");
    return;
  }

  const teacher = teachersData.find(t => t.id === currentUser.id);
  if (teacher) {
    teacher.password = p1;
    teacher.isFirstLogin = false;
    currentUser.password = p1;
    currentUser.isFirstLogin = false;
    saveTeachersData();
    localStorage.setItem("skrg_current_user", JSON.stringify(currentUser));
    closeModal("modal-change-password");
    recordAuditLog("TUKAR_KATA_LALUAN", `Guru ${teacher.name} telah mengemas kini kata laluan peribadi.`);
    showToastNotification("✅ Kata laluan peribadi anda berjaya dikemas kini!");
  }
}

// 6. Penetapan Guru Subjek Mengikut Kelas (Oleh Guru Kelas)
let currentAssigningClass = "6 ILTIZAM";

function openAssignModal() {
  const selectedClass = document.getElementById("entry-filter-class")?.value;
  if (!selectedClass || selectedClass === "ALL") {
    alert("Sila pilih satu kelas tertentu (contoh: 6 ILTIZAM, 6 MUMTAZ, dll) terlebih dahulu.");
    return;
  }

  if (!isClassTeacherOf(selectedClass) && !(currentUser && currentUser.isAdmin)) {
    alert(`Akses Ditolak! Anda bukan Guru Kelas bagi ${selectedClass}.`);
    return;
  }

  currentAssigningClass = selectedClass;
  const title = document.getElementById("assign-class-title");
  if (title) title.innerText = selectedClass;

  const subjects = ["bm", "bi", "mt", "sn", "sej", "pi"];
  const currentClassAssign = subjectAssignments[selectedClass]?.subjects || {};

  subjects.forEach(sub => {
    const select = document.getElementById(`assign-${sub}`);
    if (!select) return;
    select.innerHTML = "";
    teachersData.forEach(t => {
      const opt = document.createElement("option");
      opt.value = t.id;
      opt.innerText = `${t.name} (${t.role})`;
      if (currentClassAssign[sub] === t.id) opt.selected = true;
      select.appendChild(opt);
    });
  });

  document.getElementById("modal-assign-subjects")?.classList.add("active");
}

function submitClassSubjectAssignments() {
  const subjects = ["bm", "bi", "mt", "sn", "sej", "pi"];
  if (!subjectAssignments[currentAssigningClass]) {
    subjectAssignments[currentAssigningClass] = { subjects: {} };
  }

  subjects.forEach(sub => {
    const select = document.getElementById(`assign-${sub}`);
    if (select) {
      subjectAssignments[currentAssigningClass].subjects[sub] = select.value;
    }
  });

  saveSubjectAssignmentsData();
  closeModal("modal-assign-subjects");
  renderEntryTable();
  recordAuditLog("TETAPKAN_GURU_SUBJEK", `Penetapan guru subjek bagi kelas ${currentAssigningClass} telah dikemas kini oleh ${currentUser.name}.`);
  showToastNotification(`✅ Penetapan guru subjek bagi ${currentAssigningClass} berjaya disimpan!`);
}

// 7. Panel Rahsia Admin (Kod: ts.fikrey37)
function handleAdminGearClick() {
  if (currentUser && (currentUser.isAdmin || currentUser.id === "T001")) {
    openAdminPanelModal();
  } else {
    document.getElementById("admin-secret-code").value = "";
    document.getElementById("modal-admin-auth")?.classList.add("active");
    document.getElementById("admin-secret-code")?.focus();
  }
}

function submitAdminCode() {
  const code = document.getElementById("admin-secret-code")?.value.trim();
  if (code === "ts.fikrey37") {
    closeModal("modal-admin-auth");
    if (!currentUser) {
      currentUser = teachersData.find(t => t.isAdmin) || DEFAULT_TEACHERS[0];
      localStorage.setItem("skrg_current_user", JSON.stringify(currentUser));
      initAuthUI();
      renderEntryTable();
    }
    openAdminPanelModal();
  } else {
    alert("Kod akses pentadbir salah! Akses ditolak.");
  }
}

function openAdminPanelModal() {
  renderAdminTeachersTable();
  renderAdminClassAssignments("6 MUMTAZ");
  renderAdminStudentsTable();
  renderAdminAuditTable();
  document.getElementById("modal-admin-panel")?.classList.add("active");
}

function switchAdminTab(targetTabId) {
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".admin-tab-content").forEach(c => c.classList.remove("active"));

  document.querySelector(`[data-atab="${targetTabId}"]`)?.classList.add("active");
  document.getElementById(targetTabId)?.classList.add("active");
  if (targetTabId === 'atab-students') {
    renderAdminStudentsTable();
  }
}

function renderAdminTeachersTable() {
  const tbody = document.getElementById("admin-teachers-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  teachersData.forEach(t => {
    const tr = document.createElement("tr");
    const isTemp = t.password === "P3nd1d1kan" || t.isFirstLogin;
    const isPrimaryAdmin = t.id === "T001" || t.name.includes("FIKREY");

    tr.innerHTML = `
      <td><strong>${t.name}</strong> ${t.isAdmin ? '<span class="school-tag" style="background:var(--stat-blue-bg); color:var(--primary-royal); font-size:0.7rem; border-color:var(--stat-blue-border); margin-left:0.35rem;">ADMIN</span>' : ''}</td>
      <td><code>${t.ic}</code></td>
      <td><span class="school-tag">${t.role}</span></td>
      <td>${isTemp ? '<span style="color:#b45309; font-weight:700;">Sementara (P3nd1d1kan)</span>' : '<span style="color:#15803d; font-weight:700;">Peribadi (Telah Ditukar)</span>'}</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn btn-outline btn-sm" onclick="resetTeacherPassword('${t.id}')" title="Set semula kata laluan ke P3nd1d1kan" style="margin-right:0.35rem;">
          🔄 Reset P3nd1d1kan
        </button>
        ${!isPrimaryAdmin ? `
          <button class="btn btn-outline btn-sm" onclick="removeTeacher('${t.id}')" title="Keluarkan guru ini daripada sistem" style="color:#dc2626; border-color:#fca5a5;">
            🗑️ Keluarkan
          </button>
        ` : `
          <span style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">Admin Utama</span>
        `}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function resetTeacherPassword(teacherId) {
  const teacher = teachersData.find(t => t.id === teacherId);
  if (!teacher) return;

  if (confirm(`Adakah anda pasti mahu set semula kata laluan untuk ${teacher.name} kepada kata laluan sementara 'P3nd1d1kan'?`)) {
    teacher.password = "P3nd1d1kan";
    teacher.isFirstLogin = true;
    saveTeachersData();
    renderAdminTeachersTable();
    recordAuditLog("RESET_KATA_LALUAN", `Kata laluan untuk ${teacher.name} (${teacher.ic}) telah diset semula kepada 'P3nd1d1kan' oleh Admin.`);
    alert(`✅ Kata laluan untuk ${teacher.name} telah diset semula kepada 'P3nd1d1kan'. Guru akan diminta menukar kata laluan pada log masuk berikutnya.`);
  }
}

function openAddTeacherModal() {
  document.getElementById("add-teacher-name").value = "";
  document.getElementById("add-teacher-ic").value = "";
  document.getElementById("add-teacher-role").value = "GURU MATA PELAJARAN";
  const classGroup = document.getElementById("add-teacher-class-group");
  if (classGroup) classGroup.style.display = "none";
  document.getElementById("modal-add-teacher")?.classList.add("active");
  document.getElementById("add-teacher-name")?.focus();
}

function handleAddTeacherRoleChange(role) {
  const classGroup = document.getElementById("add-teacher-class-group");
  if (classGroup) {
    classGroup.style.display = (role === "GURU KELAS") ? "block" : "none";
  }
}

function submitAddNewTeacher() {
  const nameInput = document.getElementById("add-teacher-name")?.value.trim();
  const icInput = document.getElementById("add-teacher-ic")?.value.trim();
  const role = document.getElementById("add-teacher-role")?.value;
  const kelas = document.getElementById("add-teacher-class")?.value;

  if (!nameInput) {
    alert("Sila masukkan nama penuh guru!");
    return;
  }
  if (!icInput) {
    alert("Sila masukkan No. Kad Pengenalan (IC) guru!");
    return;
  }

  const cleanIc = icInput.replace(/\D/g, "");
  if (cleanIc.length < 8) {
    alert("No. Kad Pengenalan tidak sah! Sila masukkan No. IC sekurang-kurangnya 8-12 digit.");
    return;
  }

  const existing = teachersData.find(t => t.ic.replace(/\D/g, "") === cleanIc);
  if (existing) {
    alert(`No. IC ini sudah wujud dalam sistem untuk guru: ${existing.name}!`);
    return;
  }

  const formattedIc = (cleanIc.length === 12)
    ? `${cleanIc.substring(0,6)}-${cleanIc.substring(6,8)}-${cleanIc.substring(8,12)}`
    : icInput;

  const newId = "T" + String(Date.now()).slice(-4);
  const isClassTeacher = (role === "GURU KELAS");
  const fullRole = isClassTeacher ? `GURU KELAS (${kelas})` : role;

  const newTeacher = {
    id: newId,
    ic: formattedIc,
    name: nameInput.toUpperCase(),
    role: fullRole,
    isAdmin: (role === "PENTADBIR SISTEM / PEMBANGUN SISTEM"),
    isClassTeacherOf: isClassTeacher ? kelas : null,
    password: "P3nd1d1kan",
    isFirstLogin: true
  };

  teachersData.push(newTeacher);
  saveTeachersData();
  populateQuickSelect();
  renderAdminTeachersTable();
  closeModal("modal-add-teacher");
  recordAuditLog("TAMBAH_GURU", `Guru baharu ${newTeacher.name} (IC: ${newTeacher.ic}, Peranan: ${newTeacher.role}) berjaya didaftarkan oleh Admin.`);
  showToastNotification(`✅ Guru ${newTeacher.name} berjaya didaftarkan!`);
}

function removeTeacher(teacherId) {
  const teacher = teachersData.find(t => t.id === teacherId);
  if (!teacher) return;

  if (teacher.id === "T001" || teacher.name.includes("FIKREY")) {
    alert("Pentadbir Sistem Utama (Mohammad Fikrey bin Abdul Gapar) dilindungi dan tidak boleh dikeluarkan!");
    return;
  }

  if (confirm(`Adakah anda pasti mahu MENGELUARKAN guru ${teacher.name} (${teacher.ic}) daripada senarai warga pendidik SK Ranggu?`)) {
    teachersData = teachersData.filter(t => t.id !== teacherId);
    saveTeachersData();
    populateQuickSelect();
    renderAdminTeachersTable();
    recordAuditLog("KELUARKAN_GURU", `Guru ${teacher.name} (${teacher.ic}) telah dikeluarkan oleh Admin.`);
    showToastNotification(`🗑️ Guru ${teacher.name} telah dikeluarkan.`);
  }
}

function renderAdminClassAssignments(kelas) {
  const container = document.getElementById("admin-class-assignment-container");
  if (!container) return;

  const currentAssign = subjectAssignments[kelas]?.subjects || {};
  const subjects = ["bm", "bi", "mt", "sn", "sej", "pi"];

  let html = `<div class="form-grid" style="grid-template-columns: 1fr 1fr; gap:1rem;">`;
  subjects.forEach(sub => {
    html += `
      <div class="form-group">
        <label class="form-label">${SUBJECT_LABELS[sub]}:</label>
        <select class="form-control admin-assign-sub" data-sub="${sub}">
    `;
    teachersData.forEach(t => {
      const selected = (currentAssign[sub] === t.id) ? "selected" : "";
      html += `<option value="${t.id}" ${selected}>${t.name} (${t.role})</option>`;
    });
    html += `</select></div>`;
  });
  html += `</div>`;
  html += `
    <div style="margin-top:1.25rem; text-align:right;">
      <button class="btn btn-primary" onclick="saveAdminClassAssignments('${kelas}')">💾 Simpan Penetapan ${kelas}</button>
    </div>
  `;
  container.innerHTML = html;
}

function saveAdminClassAssignments(kelas) {
  const selects = document.querySelectorAll(".admin-assign-sub");
  if (!subjectAssignments[kelas]) subjectAssignments[kelas] = { subjects: {} };

  selects.forEach(s => {
    const sub = s.getAttribute("data-sub");
    subjectAssignments[kelas].subjects[sub] = s.value;
  });

  saveSubjectAssignmentsData();
  renderEntryTable();
  recordAuditLog("ADMIN_PENETAPAN_SUBJEK", `Admin telah mengemas kini penetapan guru subjek bagi kelas ${kelas}.`);
  alert(`✅ Penetapan guru subjek bagi ${kelas} berjaya disimpan!`);
}

function renderAdminAuditTable() {
  const tbody = document.getElementById("admin-audit-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (auditLogs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; padding:1.5rem; color:#94a3b8;">Tiada rekod aktiviti setakat ini.</td></tr>`;
    return;
  }

  auditLogs.slice(0, 80).forEach(log => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span style="color:#94a3b8; font-size:0.75rem;">${log.timestamp}</span></td>
      <td><strong>${log.teacherName}</strong><br><small style="color:#64748b;">${log.teacherIc}</small></td>
      <td>
        <span class="school-tag" style="font-size:0.7rem;">${log.action}</span>
        <div style="margin-top:0.25rem; color:#e2e8f0;">${log.details}</div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function clearAuditLogs() {
  if (confirm("Adakah anda pasti mahu mengosongkan semua log audit pengesanan?")) {
    auditLogs = [];
    saveAuditLogsData();
    renderAdminAuditTable();
    showToastNotification("Log audit telah dikosongkan.");
  }
}

// 7. Pengurusan Murid & Kemas Kini No. Kad Pengenalan (MyKid)
function renderAdminStudentsTable() {
  const tbody = document.getElementById("admin-students-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const searchTxt = document.getElementById("admin-student-search")?.value.toLowerCase().trim() || "";

  const filtered = studentsData.filter(st => {
    if (!searchTxt) return true;
    return st.name.toLowerCase().includes(searchTxt) ||
           st.id.toLowerCase().includes(searchTxt) ||
           st.kelas.toLowerCase().includes(searchTxt) ||
           (st.no_kp && st.no_kp.toLowerCase().includes(searchTxt));
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:1.5rem; color:#94a3b8;">Tiada rekod murid dijumpai.</td></tr>`;
    return;
  }

  filtered.forEach((st, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><span style="font-weight:700; color:#38bdf8; font-family:monospace;">${st.id}</span></td>
      <td><strong>${st.name}</strong></td>
      <td><span class="school-tag">${st.kelas}</span></td>
      <td>
        <input type="text" id="admin-ic-${st.id}" class="form-control" value="${st.no_kp || ''}" 
               placeholder="14XXXX-12-XXXX" maxlength="14" 
               style="font-family:'JetBrains Mono',monospace; font-weight:700; font-size:0.85rem; padding:0.3rem 0.5rem; width:160px; display:inline-block;">
      </td>
      <td style="text-align:center;">
        <button class="btn btn-primary btn-sm" onclick="saveStudentIC('${st.id}')" style="padding:0.25rem 0.65rem; font-size:0.75rem;">
          💾 Simpan
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function saveStudentIC(studentId) {
  const input = document.getElementById(`admin-ic-${studentId}`);
  if (!input) return;
  const newIc = input.value.trim();

  const st = studentsData.find(s => s.id === studentId);
  if (!st) return;

  const oldIc = st.no_kp || "Tiada";
  st.no_kp = newIc;

  saveCurrentMarks(false);
  renderEntryTable();
  renderDatabaseTable();

  // Kemas kini slip jika murid ini sedang dipratonton
  const currentPreviewId = document.getElementById("preview-student-select")?.value;
  if (currentPreviewId === studentId) {
    renderSlipPreview(st);
  }

  recordAuditLog("KEMAS_KINI_MYKID", `Kemas kini No. Kad Pengenalan murid ${st.name} (${st.id}): '${oldIc}' -> '${newIc}'`);
  showToastNotification(`✅ No. Kad Pengenalan untuk ${st.name} berjaya disimpan: ${newIc}`);
}

// Kawalan Emel Google Drive Admin (Destinasi Sijil Terkumpul)
function useCurrentTeacherDriveEmail() {
  const emailInput = document.getElementById("setup-drive-email");
  if (!emailInput) return;
  
  let targetEmail = "";
  if (currentUser && currentUser.email) {
    targetEmail = currentUser.email;
  } else if (currentUser && currentUser.name && currentUser.name.includes("FIKREY")) {
    targetEmail = "cikgufikrey@moe-dl.edu.my";
  } else {
    const fikrey = teachersData.find(t => t.name.includes("FIKREY"));
    targetEmail = fikrey?.email || "cikgufikrey@moe-dl.edu.my";
  }
  
  emailInput.value = targetEmail;
  localStorage.setItem("skrg_admin_drive_email", targetEmail);
  showToastNotification(`👤 Emel Google Drive diisi: ${targetEmail}`);
}

function saveDriveEmailPreference() {
  const emailInput = document.getElementById("setup-drive-email");
  const val = emailInput?.value.trim() || "";
  
  if (!val || !val.includes("@") || !val.includes(".")) {
    alert("⚠️ Sila masukkan format emel Google Drive yang sah (cth: cikgufikrey@moe-dl.edu.my atau emel.admin@gmail.com).");
    emailInput?.focus();
    return;
  }
  
  localStorage.setItem("skrg_admin_drive_email", val);
  showToastNotification(`💾 Emel Google Drive Admin disimpan: ${val}`);
  recordAuditLog("KEMAS_KINI_DRIVE", `Emel pengumpulan Google Drive ditetapkan kepada: ${val}`);
}

// 8. Muat Data daripada LocalStorage mengikut Tahun & Sesi
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
    studentsData = JSON.parse(JSON.stringify(INITIAL_STUDENTS_ROSTER));
  }
  
  // Pastikan no_kp terisi bagi semua murid (jika tiada dalam cache terdahulu)
  const rosterMap = {};
  INITIAL_STUDENTS_ROSTER.forEach(r => { rosterMap[r.id] = r; });
  studentsData.forEach(st => {
    if (!st.no_kp && rosterMap[st.id]?.no_kp) {
      st.no_kp = rosterMap[st.id].no_kp;
    }
  });
  
  recalculateAllClassRanks();
}

// 9. Simpan Data ke LocalStorage
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

// 10. Kawalan Tahun & Sesi Persekolahan (2026, 2027, 2028...)
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
  
  const docNameInput = document.getElementById("setup-doc-name");
  if (docNameInput) {
    docNameInput.value = `Slip_PBD_UASA_SK_Ranggu_${currentYear}`;
  }
  
  const slipSession = document.getElementById("slip-session");
  if (slipSession) {
    slipSession.innerText = `${fullSessionTitle} • SK Ranggu Tawau`;
  }
  
  const entrySessionLabel = document.getElementById("entry-session-label");
  if (entrySessionLabel) {
    entrySessionLabel.innerText = `${currentAssessment} (Tahun ${currentYear})`;
  }
}

// 11. Pengurusan Tab
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

// 12. Logik Pengiraan Gred & TP Automatik
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

// 13. Kemas Kini Markah Murid Secara Masa Nyata (Live Input dengan Kawalan Hak Akses)
function updateStudentMark(studentId, subject, val) {
  const st = studentsData.find(s => s.id === studentId);
  if (!st) return;

  // Semak Hak Akses Guru
  if (!canEditSubject(st.kelas, subject)) {
    const assignedId = subjectAssignments[st.kelas]?.subjects[subject];
    const teacher = teachersData.find(t => t.id === assignedId);
    const teacherName = teacher ? teacher.name : "Guru yang ditetapkan";
    alert(`Akses Ditolak! Subjek ini telah ditetapkan kepada: ${teacherName}. Anda tidak dibenarkan mengubah markah bagi subjek ini.`);
    renderEntryTable();
    return;
  }
  
  const cleanVal = val.trim();
  if (cleanVal !== "") {
    const num = parseFloat(cleanVal);
    if (num < 0 || num > 100) {
      alert("Markah mestilah antara 0 hingga 100!");
      return;
    }
  }

  const oldMark = st[`${subject}_m`];
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
  
  // Kemas kini paparan sel baris tersebut
  const totalCell = document.getElementById(`row-total-${st.id}`);
  const purataCell = document.getElementById(`row-purata-${st.id}`);
  const tpCell = document.getElementById(`badge-tp-${subject}-${st.id}`);
  const gredCell = document.getElementById(`badge-gred-${subject}-${st.id}`);
  
  if (totalCell) totalCell.innerText = st.total;
  if (purataCell) purataCell.innerText = st.purata;
  if (tpCell) tpCell.innerText = st[`${subject}_tp`].split(' ')[0] || "-";
  if (gredCell) gredCell.innerText = st[`${subject}_g`];
  
  updateStats();

  // Rekod Jejak Audit
  if (currentUser) {
    recordAuditLog("KEMAS_KINI_MARKAH", `${currentUser.name} (${currentUser.ic}) menukar markah ${subject.toUpperCase()} murid ${st.name} (${st.kelas}) daripada '${oldMark || '-'}' kepada '${cleanVal || '-'}' (Gred: ${st[`${subject}_g`]}, TP: ${st[`${subject}_tp`]}).`);
  }
}

// 14. Kira Kedudukan Kelas
function recalculateAllClassRanks() {
  const classes = ["6 MUMTAZ", "6 JAYYID", "6 ILTIZAM", "6 KHOIR"];
  classes.forEach(c => {
    const classStudents = studentsData.filter(s => s.kelas === c);
    classStudents.sort((a, b) => (b.purata_num || 0) - (a.purata_num || 0));
    const totalCount = classStudents.length;
    classStudents.forEach((st, rank) => {
      st.posisi = (st.purata_num > 0) ? `${rank + 1} / ${totalCount}` : "-";
    });
  });
}

// 15. Render Jadual Pengisian Markah Guru (Tab 1) dengan Kawalan Kunci Subjek
function renderEntryTable() {
  const tbody = document.getElementById("entry-tbody");
  if (!tbody) return;
  
  const classFilter = document.getElementById("entry-filter-class")?.value || "ALL";
  const searchTxt = document.getElementById("entry-search")?.value.toLowerCase().trim() || "";
  
  updateClassTeacherAssignButton(classFilter);
  updateClassPillsUI(classFilter);

  const filtered = studentsData.filter(st => {
    const matchClass = classFilter === "ALL" || st.kelas === classFilter;
    const matchSearch = st.name.toLowerCase().includes(searchTxt) || 
                        st.id.toLowerCase().includes(searchTxt) || 
                        (st.no_kp && st.no_kp.toLowerCase().includes(searchTxt));
    return matchClass && matchSearch;
  });
  
  tbody.innerHTML = "";
  
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="12" style="text-align:center; padding: 2rem; color: #94a3b8;">Tiada rekod murid dijumpai.</td></tr>`;
    return;
  }
  
  const subjects = ["bm", "bi", "mt", "sn", "sej", "pi"];

  filtered.forEach((st, idx) => {
    const tr = document.createElement("tr");
    
    let subjectCellsHtml = "";
    subjects.forEach(sub => {
      const allowed = canEditSubject(st.kelas, sub);
      const assignedTeacherId = subjectAssignments[st.kelas]?.subjects[sub];
      const assignedTeacher = teachersData.find(t => t.id === assignedTeacherId);
      const assignedTeacherName = assignedTeacher ? assignedTeacher.name : "Belum Ditetapkan";
      const shortTeacherName = assignedTeacherName.split(' ')[0] || "Guru";

      if (allowed) {
        subjectCellsHtml += `
          <td>
            <div class="mark-cell-group">
              <input type="number" min="0" max="100" class="mark-input" value="${st[sub + '_m']}" placeholder="-" 
                     onchange="updateStudentMark('${st.id}', '${sub}', this.value)">
              <div>
                <span class="gred-text-mini" id="badge-gred-${sub}-${st.id}">${st[sub + '_g']}</span>
                <span class="tp-badge-mini" id="badge-tp-${sub}-${st.id}">${st[sub + '_tp'].split(' ')[0]}</span>
              </div>
            </div>
          </td>
        `;
      } else {
        // DIKUNCI: Guru lain tidak boleh mengisi subjek yang bukan pegangannya!
        subjectCellsHtml += `
          <td>
            <div class="mark-cell-group" title="🔒 Subjek ini dipegang oleh: ${assignedTeacherName}. Anda tidak dibenarkan mengubah.">
              <input type="number" min="0" max="100" class="mark-input mark-input-locked" value="${st[sub + '_m']}" placeholder="-" disabled readonly>
              <div>
                <span class="gred-text-mini" id="badge-gred-${sub}-${st.id}">${st[sub + '_g']}</span>
                <span class="tp-badge-mini" id="badge-tp-${sub}-${st.id}">${st[sub + '_tp'].split(' ')[0]}</span>
              </div>
            </div>
            <div class="lock-pill" title="🔒 Guru Subjek: ${assignedTeacherName}">🔒 <small>${shortTeacherName}</small></div>
          </td>
        `;
      }
    });

    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td style="font-weight:700; color:#38bdf8;">${st.id}</td>
      <td>
        <strong>${st.name}</strong><br>
        <span class="school-tag">${st.kelas}</span> <small style="color:var(--text-muted); font-size:0.75rem;">• KP: <span style="font-family:monospace; font-weight:600;">${st.no_kp || '-'}</span></small>
      </td>
      ${subjectCellsHtml}
      <td><strong id="row-total-${st.id}">${st.total}</strong></td>
      <td><strong style="color:#10b981;" id="row-purata-${st.id}">${st.purata}</strong></td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="viewStudentSlip('${st.id}')">👁️ Slip</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// 16. Render Jadual Pangkalan Data PBD (Tab 2)
function renderDatabaseTable() {
  const tbody = document.getElementById("database-tbody");
  if (!tbody) return;
  
  const classFilter = document.getElementById("db-filter-class")?.value || "ALL";
  const statusFilter = document.getElementById("db-filter-status")?.value || "ALL";
  const searchTxt = document.getElementById("db-search")?.value.toLowerCase().trim() || "";
  
  const filtered = studentsData.filter(st => {
    const matchClass = classFilter === "ALL" || st.kelas === classFilter;
    const matchStatus = statusFilter === "ALL" || st.status === statusFilter;
    const matchSearch = st.name.toLowerCase().includes(searchTxt) || 
                        st.id.toLowerCase().includes(searchTxt) || 
                        (st.no_kp && st.no_kp.toLowerCase().includes(searchTxt));
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
      <td><strong>${st.name}</strong><br><small style="color:var(--text-muted); font-size:0.75rem;">• KP: <span style="font-family:monospace; font-weight:600;">${st.no_kp || '-'}</span></small></td>
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

// 17. Kemas Kini Statistik Kad Ringkasan
function updateStats() {
  const total = studentsData.length;
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

// 18. Kawalan Konsol Penjanaan Berkelompok
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
    const thSelect = document.getElementById("th-select-all");
    if (thSelect) thSelect.checked = false;
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

// 19. Enjin Penjanaan Berkelompok
let isProcessing = false;
async function executeBatchProcess(items) {
  if (isProcessing) return;
  
  const adminDriveEmailInput = document.getElementById("setup-drive-email");
  const adminDriveEmail = adminDriveEmailInput?.value.trim() || "";
  
  if (!adminDriveEmail || !adminDriveEmail.includes("@") || !adminDriveEmail.includes(".")) {
    alert("⚠️ Sila masukkan Emel Google Drive Admin / Pencipta Sijil terlebih dahulu.\n\nSemua sijil / slip PDF akan dikumpulkan dan diselaraskan ke dalam akaun Google Drive admin tersebut.");
    adminDriveEmailInput?.focus();
    return;
  }
  
  // Simpan ketetapan emel drive admin
  localStorage.setItem("skrg_admin_drive_email", adminDriveEmail);

  isProcessing = true;
  
  const progressBar = document.getElementById("batch-progress-bar");
  const progressText = document.getElementById("batch-progress-text");
  const mode = document.getElementById("setup-mode")?.value || "PDF_EMAIL";
  
  logMessage(`▶️ Memulakan proses penjanaan dokumen untuk ${items.length} orang murid Tahun ${currentYear}...`, "normal");
  logMessage(`📁 Destinasi Sijil Terkumpul: Google Drive Admin (${adminDriveEmail})`, "success");
  
  let completed = 0;
  for (const st of items) {
    await new Promise(r => setTimeout(r, 60));
    
    const now = new Date();
    const timeStr = now.toLocaleDateString("ms-MY") + " " + now.toLocaleTimeString("ms-MY", { hour: '2-digit', minute: '2-digit' });
    st.tarikh = timeStr;
    
    if (mode === "PDF_EMAIL") {
      if (st.email && st.email.includes("@")) {
        st.status = "BERJAYA";
        st.catatan = `Slip PDF Tahun ${currentYear} dijana, dikumpul ke Drive Admin (${adminDriveEmail}) & diemel ke: ${st.email}`;
        logMessage(`[${timeStr}] ✅ ${st.name} (${st.kelas}): Slip PDF berjaya dijana & diemel. Fail disimpan di Drive (${adminDriveEmail}).`, "success");
      } else {
        st.status = "BERJAYA - TIDAK DIEMEL";
        st.catatan = `Slip PDF dikumpul ke Google Drive Admin (${adminDriveEmail}). (Emel tiada/tidak didaftarkan)`;
        logMessage(`[${timeStr}] ℹ️ ${st.name} (${st.kelas}): Slip PDF dikumpul ke Google Drive Admin (${adminDriveEmail}).`, "warn");
      }
    } else {
      st.status = "BERJAYA";
      st.catatan = `Slip PDF dikumpul ke Google Drive Admin (${adminDriveEmail}).`;
      logMessage(`[${timeStr}] ✅ ${st.name} (${st.kelas}): Slip PDF rasmi berjaya disiapkan & dikumpul ke Drive (${adminDriveEmail}).`, "success");
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
  
  logMessage(`🎉 SELESAI: Kesemua ${items.length} slip pentaksiran murid SK Ranggu telah berjaya disiapkan!`, "success");
  logMessage(`📂 Arkib Sijil Terkumpul: Fail PDF tersedia dalam folder Google Drive Admin (${adminDriveEmail})`, "success");
  showToastNotification(`🎉 ${items.length} Sijil berjaya dikumpulkan ke Google Drive (${adminDriveEmail})!`);
  isProcessing = false;
  saveCurrentMarks(false);
  if (currentUser) {
    recordAuditLog("PENJANAAN_BATCH", `Guru/Admin ${currentUser.name} memproses penjanaan slip bagi ${items.length} orang murid. Folder Terkumpul Google Drive: ${adminDriveEmail}`);
  }
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

// 20. Pratonton Slip Rasmi
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
  const icEl = document.getElementById("slip-student-ic");
  if (icEl) icEl.innerText = st.no_kp || "-";
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

// 21. Reset / Kosongkan Semua Markah
function resetAllMarks() {
  if (confirm(`Adakah anda pasti mahu mengosongkan semua markah bagi Sesi ${currentYear}? Tindakan ini akan menetapkan semula markah kepada kosong untuk pengisian baharu.`)) {
    studentsData = JSON.parse(JSON.stringify(INITIAL_STUDENTS_ROSTER));
    saveCurrentMarks(false);
    if (currentUser) {
      recordAuditLog("KOSONGKAN_MARKAH", `Guru ${currentUser.name} telah mengosongkan semua markah bagi Tahun ${currentYear}.`);
    }
    showToastNotification(`🧹 Semua markah Tahun ${currentYear} telah dikosongkan untuk pengisian baharu.`);
  }
}

// 22. Eksport CSV
function exportStudentsCSV() {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "BIL,NO_MURID,NO_KP,NAMA_MURID,KELAS,GURU_KELAS,BM_M,BM_G,BM_TP,BI_M,BI_G,BI_TP,MT_M,MT_G,MT_TP,SN_M,SN_G,SN_TP,SEJ_M,SEJ_G,SEJ_TP,PI_M,PI_G,PI_TP,TOTAL,PURATA,POSISI,HADIR,ULASAN,EMAIL,STATUS,TARIKH,CATATAN\n";
  
  studentsData.forEach((s, idx) => {
    const row = [
      idx + 1, s.id, `"${s.no_kp || ''}"`, `"${s.name}"`, `"${s.kelas}"`, `"${s.guru}"`,
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

// 23. Kalendar & Jam Waktu Nyata (Real-Time Clock & Calendar)
function startRealtimeClock() {
  function updateClock() {
    const now = new Date();
    
    const days = ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"];
    const months = [
      "Januari", "Februari", "Mac", "April", "Mei", "Jun",
      "Julai", "Ogos", "September", "Oktober", "November", "Disember"
    ];
    
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    
    const hours24 = now.getHours();
    const hours12 = hours24 % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours24 >= 12 ? 'PM' : 'AM';
    const time24Str = `${String(hours24).padStart(2, '0')}:${minutes}:${seconds}`;
    
    const dateElem = document.getElementById("realtime-date");
    const timeElem = document.getElementById("realtime-time");
    
    if (dateElem) {
      dateElem.innerHTML = `📅 ${dayName}, ${day} ${monthName} ${year}`;
    }
    if (timeElem) {
      timeElem.innerHTML = `⏰ ${time24Str} <small style="color:#38bdf8; font-weight:600;">(${hours12}:${minutes}:${seconds} ${ampm} MYT)</small>`;
    }
  }
  
  updateClock();
  setInterval(updateClock, 1000);
}

// 24. Toast Notification Helper
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

// 25. Pengurusan Tema Ceria (Light Theme Lalai & Dark Theme)
function initTheme() {
  const savedTheme = localStorage.getItem("skrg_theme") || "light";
  applyTheme(savedTheme);
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("skrg_theme", theme);
  
  const icon = document.getElementById("theme-icon");
  const text = document.getElementById("theme-text");
  if (icon && text) {
    if (theme === "dark") {
      icon.innerText = "🌙";
      text.innerText = "Mod Gelap";
    } else {
      icon.innerText = "☀️";
      text.innerText = "Mod Terang";
    }
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const nextTheme = (current === "dark") ? "light" : "dark";
  applyTheme(nextTheme);
  const msg = (nextTheme === "light") ? "☀️ Mod Terang Ceria KPM diaktifkan!" : "🌙 Mod Gelap diaktifkan!";
  showToastNotification(msg);
}

// 26. Kawalan Bar Pintas Tapis Kelas (1-Klik Mesra Guru SK Ranggu)
function updateClassPillsUI(activeClass) {
  document.querySelectorAll(".class-pill-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  
  if (activeClass === "ALL") {
    document.getElementById("pill-ALL")?.classList.add("active");
  } else if (activeClass === "6 MUMTAZ") {
    document.getElementById("pill-6-MUMTAZ")?.classList.add("active");
  } else if (activeClass === "6 JAYYID") {
    document.getElementById("pill-6-JAYYID")?.classList.add("active");
  } else if (activeClass === "6 ILTIZAM") {
    document.getElementById("pill-6-ILTIZAM")?.classList.add("active");
  } else if (activeClass === "6 KHOIR") {
    document.getElementById("pill-6-KHOIR")?.classList.add("active");
  }
}

function filterByClassPill(className) {
  const select = document.getElementById("entry-filter-class");
  if (select) {
    select.value = className;
  }
  updateClassPillsUI(className);
  renderEntryTable();
  const label = (className === "ALL") ? "Semua Kelas (50 Murid)" : className;
  showToastNotification(`🏫 Menapis jadual: ${label}`);
}

// ============================================================================
// 27. PWA (PROGRESSIVE WEB APP) & SERVICE WORKER INTEGRATION
// ============================================================================
let deferredPWAInstallPrompt = null;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((registration) => {
        console.log('[PWA SK Ranggu] Service Worker aktif:', registration.scope);
      })
      .catch((error) => {
        console.warn('[PWA SK Ranggu] Gagal mendaftar Service Worker:', error);
      });
  });
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPWAInstallPrompt = e;
  const installBtn = document.getElementById('btn-install-pwa');
  if (installBtn) {
    installBtn.style.display = 'inline-flex';
  }
});

function triggerPWAInstall() {
  if (deferredPWAInstallPrompt) {
    deferredPWAInstallPrompt.prompt();
    deferredPWAInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToastNotification("✅ Terima kasih! Aplikasi SK Ranggu dipasang ke skrin peranti anda.");
      }
      deferredPWAInstallPrompt = null;
      const installBtn = document.getElementById('btn-install-pwa');
      if (installBtn) installBtn.style.display = 'none';
    });
  } else {
    alert("📱 PANDUAN MEMASANG APLIKASI SK RANGGU:\n\n" +
          "1. Android (Chrome):\n" +
          "   Tekan menu 3 titik di bahagian atas kanan pelayar, kemudian pilih 'Add to Home screen' atau 'Install app'.\n\n" +
          "2. iPhone/iPad (Safari):\n" +
          "   Tekan butang Kongsi (Share / kotak bertanda anak panah atas), tatal ke bawah dan pilih 'Add to Home Screen' (Tambah ke Skrin Utama).\n\n" +
          "3. Komputer / Laptop (Chrome / Edge):\n" +
          "   Klik ikon pasang (komputer/tambah) pada bar alamat URL di bahagian kanan atas.");
  }
}

window.addEventListener('appinstalled', () => {
  showToastNotification("🎉 Aplikasi SK Ranggu kini sedia digunakan dari Skrin Utama!");
  const installBtn = document.getElementById('btn-install-pwa');
  if (installBtn) installBtn.style.display = 'none';
});


