#!/bin/bash
# ==============================================================================
# SKRIP PANTAS DEPLOY GITHUB PAGES - SK RANGGU AUTO DOKUMEN
# ==============================================================================

echo "🚀 Memulakan inisialisasi repositori Git..."

git init
git add .
git commit -m "Pelancaran Sistem Auto Dokumen & Penjana Slip Peperiksaan SK Ranggu (v1.0.1)"
git branch -M main

echo "------------------------------------------------------------------------"
echo "Untuk menghubungkan ke GitHub anda (fikreyxcode):"
echo "1. Cipta repositori baharu di GitHub: 'auto-dokumen-skrg'"
echo "2. Jalankan arahan berikut di terminal:"
echo "   git remote add origin https://github.com/fikreyxcode/auto-dokumen-skrg.git"
echo "   git push -u origin main"
echo "------------------------------------------------------------------------"
