import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
import os

doc = docx.Document()

# Set Margins (Narrow 0.5 inch / 1.27 cm)
sections = doc.sections
for section in sections:
    section.top_margin = Inches(0.5)
    section.bottom_margin = Inches(0.5)
    section.left_margin = Inches(0.6)
    section.right_margin = Inches(0.6)

# Helper for cell shading
def set_cell_shading(cell, color_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), color_hex)
    tcPr.append(shd)

# Helper for cell borders
def set_cell_border(cell, **kwargs):
    tcPr = cell._tc.get_or_add_tcPr()
    tcBorders = OxmlElement('w:tcBorders')
    for border_name, border_props in kwargs.items():
        border = OxmlElement(f'w:{border_name}')
        border.set(qn('w:val'), border_props.get('val', 'single'))
        border.set(qn('w:sz'), str(border_props.get('sz', 4)))
        border.set(qn('w:space'), '0')
        border.set(qn('w:color'), border_props.get('color', '0F172A'))
        tcBorders.append(border)
    tcPr.append(tcBorders)

# 1. Header Table (Logo KPM | Info Sekolah | Logo SKRG)
header_table = doc.add_table(rows=1, cols=3)
header_table.alignment = WD_TABLE_ALIGNMENT.CENTER
header_table.autofit = False

col_widths = [Inches(1.2), Inches(4.8), Inches(1.2)]
for i, col in enumerate(header_table.columns):
    for cell in col.cells:
        cell.width = col_widths[i]

row_cells = header_table.rows[0].cells

# Left Logo (KPM)
p_kpm = row_cells[0].paragraphs[0]
p_kpm.alignment = WD_ALIGN_PARAGRAPH.CENTER
logo_kpm_path = "/Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/assets/logo_kpm.png"
if os.path.exists(logo_kpm_path):
    p_kpm.add_run().add_picture(logo_kpm_path, width=Inches(0.95))

# Center School Info
p_school = row_cells[1].paragraphs[0]
p_school.alignment = WD_ALIGN_PARAGRAPH.CENTER
r1 = p_school.add_run("KEMENTERIAN PENDIDIKAN MALAYSIA\n")
r1.font.size = Pt(11)
r1.font.bold = True
r1.font.color.rgb = RGBColor(15, 23, 42)

r2 = p_school.add_run("SEKOLAH KEBANGSAAN RANGGU, TAWAU\n")
r2.font.size = Pt(13)
r2.font.bold = True
r2.font.color.rgb = RGBColor(30, 58, 138)

r3 = p_school.add_run("PETI SURAT 842, 91008 TAWAU, SABAH • KOD SEKOLAH: XBA3037")
r3.font.size = Pt(8.5)
r3.font.color.rgb = RGBColor(71, 85, 105)

# Right Logo (SK Ranggu)
p_skrg = row_cells[2].paragraphs[0]
p_skrg.alignment = WD_ALIGN_PARAGRAPH.CENTER
logo_skrg_path = "/Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/assets/logo_skrg.png"
if os.path.exists(logo_skrg_path):
    p_skrg.add_run().add_picture(logo_skrg_path, width=Inches(0.95))

# Spacer
p_div = doc.add_paragraph()
p_div.paragraph_format.space_before = Pt(4)
p_div.paragraph_format.space_after = Pt(4)

# 2. Title Box
title_table = doc.add_table(rows=1, cols=1)
title_table.alignment = WD_TABLE_ALIGNMENT.CENTER
t_cell = title_table.rows[0].cells[0]
t_cell.width = Inches(7.2)
set_cell_shading(t_cell, "F1F5F9")
set_cell_border(t_cell, top={'color': 'CBD5E1'}, bottom={'color': 'CBD5E1'}, left={'color': 'CBD5E1'}, right={'color': 'CBD5E1'})

p_title = t_cell.paragraphs[0]
p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
rt1 = p_title.add_run("SLIP KEPUTUSAN PENTAKSIRAN AKHIR SESI AKADEMIK (PASA)\n")
rt1.font.bold = True
rt1.font.size = Pt(11)
rt1.font.color.rgb = RGBColor(15, 23, 42)
rt2 = p_title.add_run("SESI AKADEMIK: <<SESI>>")
rt2.font.size = Pt(9.5)
rt2.font.color.rgb = RGBColor(71, 85, 105)

# Spacer
doc.add_paragraph().paragraph_format.space_after = Pt(2)

# 3. Biodata Table
bio_table = doc.add_table(rows=2, cols=4)
bio_table.alignment = WD_TABLE_ALIGNMENT.CENTER
bio_widths = [Inches(1.5), Inches(2.3), Inches(1.5), Inches(1.9)]
for row in bio_table.rows:
    for i, cell in enumerate(row.cells):
        cell.width = bio_widths[i]
        set_cell_border(cell, top={'color': 'E2E8F0'}, bottom={'color': 'E2E8F0'}, left={'color': 'E2E8F0'}, right={'color': 'E2E8F0'})

# Row 1
c = bio_table.cell(0, 0)
set_cell_shading(c, "F8FAFC")
c.paragraphs[0].add_run("NAMA MURID").font.bold = True
bio_table.cell(0, 1).paragraphs[0].add_run("<<NAMA_MURID>>")

c = bio_table.cell(0, 2)
set_cell_shading(c, "F8FAFC")
c.paragraphs[0].add_run("NO. MURID / ID").font.bold = True
bio_table.cell(0, 3).paragraphs[0].add_run("<<NO_MURID>>")

# Row 2
c = bio_table.cell(1, 0)
set_cell_shading(c, "F8FAFC")
c.paragraphs[0].add_run("TAHUN / KELAS").font.bold = True
bio_table.cell(1, 1).paragraphs[0].add_run("<<KELAS>>")

c = bio_table.cell(1, 2)
set_cell_shading(c, "F8FAFC")
c.paragraphs[0].add_run("KEHADIRAN").font.bold = True
bio_table.cell(1, 3).paragraphs[0].add_run("<<HADIR>>")

# Spacer
doc.add_paragraph().paragraph_format.space_after = Pt(2)

# 4. Academic Marks Table
subjects = [
    ("1", "Bahasa Melayu", "<<BM_M>>", "<<BM_G>>"),
    ("2", "Bahasa Inggeris", "<<BI_M>>", "<<BI_G>>"),
    ("3", "Matematik", "<<MT_M>>", "<<MT_G>>"),
    ("4", "Sains", "<<SN_M>>", "<<SN_G>>"),
    ("5", "Sejarah", "<<SEJ_M>>", "<<SEJ_G>>"),
    ("6", "Pendidikan Islam / Pendidikan Moral", "<<PI_M>>", "<<PI_G>>"),
]

mark_table = doc.add_table(rows=len(subjects) + 1, cols=4)
mark_table.alignment = WD_TABLE_ALIGNMENT.CENTER
mark_widths = [Inches(0.6), Inches(4.2), Inches(1.2), Inches(1.2)]

# Table Header
headers = ["BIL", "MATA PELAJARAN", "MARKAH", "GRED"]
for i, h in enumerate(headers):
    cell = mark_table.cell(0, i)
    cell.width = mark_widths[i]
    set_cell_shading(cell, "0F172A")
    p = cell.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p.add_run(h)
    r.font.bold = True
    r.font.size = Pt(9.5)
    r.font.color.rgb = RGBColor(255, 255, 255)

for r_idx, (b, sub, m_tag, g_tag) in enumerate(subjects, 1):
    c0 = mark_table.cell(r_idx, 0)
    c0.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
    c0.paragraphs[0].add_run(b)
    
    c1 = mark_table.cell(r_idx, 1)
    c1.paragraphs[0].add_run(sub).font.bold = True
    
    c2 = mark_table.cell(r_idx, 2)
    c2.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
    c2.paragraphs[0].add_run(m_tag)
    
    c3 = mark_table.cell(r_idx, 3)
    c3.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
    c3.paragraphs[0].add_run(g_tag).font.bold = True

    for c in [c0, c1, c2, c3]:
        set_cell_border(c, top={'color': '334155'}, bottom={'color': '334155'}, left={'color': '334155'}, right={'color': '334155'})

# Spacer
doc.add_paragraph().paragraph_format.space_after = Pt(2)

# 5. Summary Stats Box
sum_table = doc.add_table(rows=1, cols=3)
sum_table.alignment = WD_TABLE_ALIGNMENT.CENTER
sum_widths = [Inches(2.4), Inches(2.4), Inches(2.4)]
for i, cell in enumerate(sum_table.rows[0].cells):
    cell.width = sum_widths[i]
    set_cell_shading(cell, "F8FAFC")
    set_cell_border(cell, top={'color': 'CBD5E1'}, bottom={'color': 'CBD5E1'}, left={'color': 'CBD5E1'}, right={'color': 'CBD5E1'})

p = sum_table.cell(0, 0).paragraphs[0]
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
p.add_run("JUMLAH MARKAH\n").font.bold = True
p.add_run("<<TOTAL>>").font.size = Pt(11)

p = sum_table.cell(0, 1).paragraphs[0]
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
p.add_run("PURATA KESELURUHAN\n").font.bold = True
p.add_run("<<PURATA>>").font.size = Pt(11)

p = sum_table.cell(0, 2).paragraphs[0]
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
p.add_run("KEDUDUKAN DALAM KELAS\n").font.bold = True
p.add_run("<<POSISI>>").font.size = Pt(11)

# Spacer
doc.add_paragraph().paragraph_format.space_after = Pt(2)

# 6. Grade Scale Legend
p_scale = doc.add_paragraph()
p_scale.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = p_scale.add_run("Skala Gred SK Ranggu: A: 80-100 (Cemerlang) • B: 65-79 (Baik) • C: 50-64 (Memuaskan) • D: 40-49 (Tahap Minimum) • E: 0-39 (Belum Capai)")
r.font.size = Pt(7.5)
r.font.italic = True
r.font.color.rgb = RGBColor(100, 116, 139)

# 7. Teacher Comment Box
ulasan_table = doc.add_table(rows=1, cols=1)
ulasan_table.alignment = WD_TABLE_ALIGNMENT.CENTER
u_cell = ulasan_table.rows[0].cells[0]
u_cell.width = Inches(7.2)
set_cell_shading(u_cell, "FAFAFA")
set_cell_border(u_cell, top={'color': 'CBD5E1'}, bottom={'color': 'CBD5E1'}, left={'color': 'CBD5E1'}, right={'color': 'CBD5E1'})
p = u_cell.paragraphs[0]
p.add_run("ULASAN GURU KELAS:\n").font.bold = True
p.add_run("<<ULASAN>>").font.italic = True

# Spacer
doc.add_paragraph().paragraph_format.space_after = Pt(10)

# 8. Signatures
sig_table = doc.add_table(rows=2, cols=3)
sig_table.alignment = WD_TABLE_ALIGNMENT.CENTER
sig_widths = [Inches(2.4), Inches(2.4), Inches(2.4)]
for i in range(3):
    sig_table.cell(0, i).width = sig_widths[i]
    sig_table.cell(1, i).width = sig_widths[i]

# Blank line for signature
sig_table.cell(0, 0).paragraphs[0].add_run("........................................................")
sig_table.cell(0, 1).paragraphs[0].add_run("........................................................")
sig_table.cell(0, 2).paragraphs[0].add_run("........................................................")

p1 = sig_table.cell(1, 0).paragraphs[0]
p1.add_run("GURU KELAS\n").font.bold = True
p1.add_run("SK Ranggu, Tawau")

p2 = sig_table.cell(1, 1).paragraphs[0]
p2.add_run("IBU BAPA / PENJAGA\n").font.bold = True
p2.add_run("Nama: \nTarikh: ")

p3 = sig_table.cell(1, 2).paragraphs[0]
p3.add_run("GURU BESAR\n").font.bold = True
p3.add_run("SK Ranggu, Tawau")

out_path = "/Users/momon/.gemini/antigravity/scratch/sk_ranggu_auto_dokumen/Template_Slip_Keputusan_SK_Ranggu.docx"
doc.save(out_path)
print("Template docx successfully created at:", out_path)
