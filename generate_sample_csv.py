import csv
import random

# Seed for reproducible realistic data
random.seed(42)

headers = [
    "BIL", "NO_MURID", "NAMA_MURID", "KELAS", "SESI",
    "BM_M", "BM_G", "BI_M", "BI_G", "MT_M", "MT_G", "SN_M", "SN_G", "SEJ_M", "SEJ_G", "PI_M", "PI_G",
    "TOTAL", "PURATA", "POSISI", "HADIR",
    "ULASAN", "EMAIL_PENJAGA",
    "STATUS_JANA", "TARIKH_JANA", "CATATAN_JANA"
]

names = [
    "Aizat Sofian bin Zulkifli", "Nurul Aina binti Roslan", "Muhammad Danial bin Razak",
    "Siti Nurhaliza binti Ahmad", "Mohamad Hafiz bin Mansor", "Nur Fatihah binti Ismail",
    "Amirul Mukminin bin Zakaria", "Ainul Mardhiah binti Yusof", "Muhammad Adam bin Harun",
    "Nur Syuhada binti Kamaruddin", "Farish Haikal bin Azman", "Nur Qistina binti Shahrul",
    "Muhammad Alif bin Borhan", "Puteri Damia binti Hisham", "Khairul Anuar bin Basir",
    "Nur Safiyyah binti Jamal", "Harith Iskandar bin Mahadhir", "Nur Batrisyia binti Affendi",
    "Muhammad Zafuan bin Osman", "Wan Nur Ain binti Wan Rosli", "Danish Irfan bin Mazlan",
    "Nur Irdina binti Khairuddin", "Muhammad Nabil bin Salleh", "Siti Aisyah binti Mustafa",
    "Ahmad Firdaus bin Johari", "Nurul Hidayah binti Sani", "Muhammad Haziq bin Shukri",
    "Nur Adriana binti Ramli", "Syamil Fahmi bin Badrol", "Nur Farah binti Zaidi",
    "Izzat Danish bin Lokman", "Nur Imanina binti Bakri", "Muhammad Syafiq bin Jalil",
    "Siti Sarah binti Ridzuan", "Luqman Hakim bin Othman", "Nurul Husna binti Jalani",
    "Zulhelmi bin Kassim", "Nur Aleeya binti Mazuki", "Muhammad Rayyan bin Latif",
    "Nur Amni binti Subari", "Imran Hazim bin Rosdi", "Siti Khadijah binti Hamdan",
    "Muhammad Fauzan bin Nazri", "Nur Sabrina binti Tahir", "Muhammad Zafran bin Hilmi",
    "Dayang Nurul binti Awang", "Awang Muhammad bin Awang Ali", "Nur Syahirah binti Jalal",
    "Faris Aiman bin Zaki", "Nurul Izzah binti Annuar"
]

classes = ["6 Intelek", "6 Kreatif", "5 Dinamik", "5 Efektif"]

def get_grade(mark):
    if mark >= 80: return "A"
    if mark >= 65: return "B"
    if mark >= 50: return "C"
    if mark >= 40: return "D"
    return "E"

comments = [
    "Tahniah, teruskan kecemerlangan akademik anda!",
    "Pencapaian sangat baik. Berpotensi mencapai keputusan lebih cemerlang.",
    "Usaha tangga kejayaan. Tingkatkan fokus dalam subjek Matematik dan Sains.",
    "Bagus. Rajin bertanya dan teruskan momentum dalam pembelajaran harian.",
    "Perlu bimbingan tambahan dan lebih banyak latihan kendiri di rumah.",
    "Tunjukkan peningkatan yang amat membanggakan dalam peperiksaan ini.",
    "Kekalkan disiplin belajar yang konsisten demi mencapai kejayaan cemerlang."
]

rows = []
for idx, name in enumerate(names, 1):
    no_murid = f"SKRG-2026-{idx:03d}"
    kelas = classes[(idx - 1) // 13]
    sesi = "Pentaksiran Akhir Sesi Akademik (PASA) 2026"
    
    # Marks (Realistic spread)
    base = random.randint(45, 88)
    bm_m = min(100, max(30, base + random.randint(-8, 10)))
    bi_m = min(100, max(30, base + random.randint(-12, 10)))
    mt_m = min(100, max(28, base + random.randint(-15, 12)))
    sn_m = min(100, max(32, base + random.randint(-10, 8)))
    sej_m = min(100, max(35, base + random.randint(-6, 10)))
    pi_m = min(100, max(40, base + random.randint(-5, 12)))
    
    total = bm_m + bi_m + mt_m + sn_m + sej_m + pi_m
    purata = round(total / 6.0, 1)
    
    hadir_hari = random.randint(182, 198)
    hadir = f"{hadir_hari} / 200 Hari"
    
    ulasan = random.choice(comments)
    email_clean = name.split()[0].lower() + f"{idx}@gmail.com"
    
    rows.append({
        "BIL": idx,
        "NO_MURID": no_murid,
        "NAMA_MURID": name,
        "KELAS": kelas,
        "SESI": sesi,
        "BM_M": bm_m, "BM_G": get_grade(bm_m),
        "BI_M": bi_m, "BI_G": get_grade(bi_m),
        "MT_M": mt_m, "MT_G": get_grade(mt_m),
        "SN_M": sn_m, "SN_G": get_grade(sn_m),
        "SEJ_M": sej_m, "SEJ_G": get_grade(sej_m),
        "PI_M": pi_m, "PI_G": get_grade(pi_m),
        "TOTAL": f"{total} / 600",
        "PURATA": f"{purata}%",
        "POSISI": "",  # will rank by class
        "HADIR": hadir,
        "ULASAN": ulasan,
        "EMAIL_PENJAGA": email_clean if idx % 4 != 0 else "",  # some without email like in video
        "STATUS_JANA": "BELUM DIPROSES",
        "TARIKH_JANA": "-",
        "CATATAN_JANA": "Menunggu arahan penjanaan."
    })

# Compute class rank
for c in classes:
    class_students = [r for r in rows if r["KELAS"] == c]
    class_students.sort(key=lambda r: float(r["PURATA"].replace("%", "")), reverse=True)
    total_in_class = len(class_students)
    for rank, st in enumerate(class_students, 1):
        st["POSISI"] = f"{rank} / {total_in_class}"

out_csv = "/Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/Data_Murid_SK_Ranggu_Peperiksaan.csv"
with open(out_csv, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=headers)
    writer.writeheader()
    writer.writerows(rows)

print(f"Sample CSV created with {len(rows)} rows: {out_csv}")
