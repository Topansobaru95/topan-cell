# 📚 Panduan Upload ke GitHub & Deployment

Ikuti langkah-langkah di bawah ini untuk upload website TOPAN CELL ke GitHub dan mendapatkan domain gratis!

## 🔧 Persiapan Awal

### 1. Install Git
- Windows: Download dari https://git-scm.com/download/win
- Mac: `brew install git`
- Linux: `sudo apt-get install git`

### 2. Buat Akun GitHub
- Kunjungi https://github.com
- Sign up dengan email Anda
- Verifikasi email

---

## 📤 Upload ke GitHub (Windows)

### Langkah 1: Buka Command Prompt/PowerShell
```
1. Tekan Win + R
2. Ketik: cmd atau powershell
3. Tekan Enter
```

### Langkah 2: Navigasi ke Folder Project
```powershell
cd "e:\web portofolio\topan-cell"
```

### Langkah 3: Inisialisasi Git Repository
```powershell
git init
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

### Langkah 4: Tambahkan Semua File
```powershell
git add .
```

### Langkah 5: Commit Pertama
```powershell
git commit -m "Initial commit: Website TOPAN CELL PPOB Fastpay"
```

### Langkah 6: Buat Repository di GitHub
1. Login ke GitHub
2. Klik **New** (atau + di kanan atas)
3. Nama repository: `topan-cell` (atau nama lain)
4. Pilih **Public** (agar bisa di-deploy ke GitHub Pages)
5. Jangan checklist README, .gitignore (sudah ada)
6. Klik **Create repository**

### Langkah 7: Push ke GitHub
Setelah membuat repository, GitHub akan memberikan instruksi. Jalankan di terminal:

```powershell
git remote add origin https://github.com/USERNAME/topan-cell.git
git branch -M main
git push -u origin main
```

**Ganti `USERNAME` dengan username GitHub Anda!**

---

## 🚀 Deploy dengan GitHub Pages (Gratis!)

### Konfigurasi GitHub Pages

#### Opsi A: Automatic Deployment (Recommended)
1. Buka repository di GitHub
2. Pergi ke **Settings** → **Pages**
3. Di bagian "Source", pilih:
   - Branch: `main`
   - Folder: `/ (root)`
4. Klik **Save**
5. Tunggu 1-2 menit, website akan live!

**Website akan accessible di:** `https://USERNAME.github.io/topan-cell`

#### Opsi B: Setup Custom Domain (Opsional)
Jika Anda punya domain sendiri:
1. Di GitHub Settings → Pages
2. Scroll ke "Custom domain"
3. Masukkan domain Anda
4. Klik Save
5. Update DNS setting di registrar domain Anda

---

## 🔄 Update Website (Setelah Upload)

Setiap kali Anda edit file:

```powershell
# 1. Masuk ke folder
cd "e:\web portofolio\topan-cell"

# 2. Check status perubahan
git status

# 3. Tambahkan perubahan
git add .

# 4. Commit
git commit -m "Deskripsi perubahan yang Anda buat"

# 5. Push ke GitHub
git push origin main
```

GitHub Pages akan otomatis update dalam beberapa menit!

---

## 🎯 Checklist Sebelum Upload

- [ ] Semua file sudah benar (index.html, styles.css, script.js)
- [ ] Nomor WhatsApp sudah benar: 085216774166
- [ ] Lokasi sudah update: Neglasari kp. Nenggeng...
- [ ] Tidak ada file error saat dibuka di browser
- [ ] Git sudah terinstall
- [ ] GitHub akun sudah dibuat

---

## ❓ Troubleshooting

### Error: "fatal: not a git repository"
**Solusi:** Pastikan Anda di folder yang benar
```powershell
cd "e:\web portofolio\topan-cell"
git init
```

### Error: "fatal: could not read Username"
**Solusi:** Configure git user dulu
```powershell
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

### Commit tetapi tidak push?
**Solusi:** Jalankan push command
```powershell
git push origin main
```

### Perubahan tidak muncul di website?
**Solusi:** 
- Tunggu 2-5 menit (GitHub Pages needs time)
- Hard refresh browser (Ctrl + Shift + R)
- Check build status di GitHub (Settings → Pages)

---

## 📊 File Structure yang Valid untuk GitHub Pages

```
topan-cell/
├── index.html        ✅ (Main file)
├── styles.css        ✅ (Styling)
├── script.js         ✅ (JavaScript)
├── README.md         ✅ (Documentation)
├── .gitignore        ✅ (Git config)
└── GITHUB_SETUP.md   ✅ (This file)
```

---

## 💡 Tips Tambahan

### 1. Bagikan Link Website
Setelah live, Anda bisa bagikan:
```
https://USERNAME.github.io/topan-cell
```

### 2. Custom Domain
Jika punya domain (misal: topancell.com):
1. Beli domain di Niagahoster/Hostinger
2. Update DNS settings
3. Setup di GitHub Pages settings
4. Website accessible di: topancell.com

### 3. SEO untuk Google
Agar website mudah ditemukan Google:
```html
<!-- Tambahkan di <head> tag dalam index.html -->
<meta name="description" content="TOPAN CELL - Agen PPOB Fastpay Terpercaya di Kab. Purwakarta">
<meta name="keywords" content="PPOB, Fastpay, pembayaran digital, listrik, pulsa">
<link rel="canonical" href="https://username.github.io/topan-cell">
```

Akses Google Search Console dari: https://search.google.com/search-console

### 4. Monitoring Website
- **Uptime Monitor:** https://uptimerobot.com (free)
- **Analytics:** https://analytics.google.com

---

## 📧 Butuh Bantuan?

- Stack Overflow: https://stackoverflow.com
- GitHub Documentation: https://docs.github.com
- Tutorial YouTube: "GitHub Pages Tutorial"

---

**Selamat! Website TOPAN CELL Anda sudah siap di internet! 🎉**

Last Updated: Februari 2026
