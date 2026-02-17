# TOPAN CELL - Website Portfolio PPOB Fastpay

Website portfolio profesional dengan design futuristik untuk TOPAN CELL, Agen PPOB Fastpay.

## 📋 Fitur Utama

✅ **Design Futuristik Modern**
- Tema gelap dengan aksen neon (biru & pink)
- Animasi halus dan menarik
- Efek glow dan parallax

✅ **Responsif & Mobile-Friendly**
- Tampilan optimal di semua ukuran layar
- Menu hamburger untuk mobile
- Navigasi smooth

✅ **Lengkap dengan Semua Layanan PPOB**
- 16 kategori layanan utama
- Sub-kategori untuk setiap layanan
- Card interaktif dengan hover effects

✅ **Section Lengkap**
- Hero Section dengan CTA Button
- Layanan Kami (Service Grid)
- Kontak & Informasi
- Footer

## 📁 Struktur File

```
topan-cell/
├── index.html      # File HTML utama
├── styles.css      # Stylesheet CSS
├── script.js       # JavaScript interaktif
└── README.md       # File dokumentasi ini
```

## 🚀 Cara Menggunakan

### 1. **Buka File HTML**
   - Buka file `index.html` dengan browser (double-click)
   - Atau gunakan extension "Live Server" di VS Code

### 2. **Kustomisasi Data**
   Untuk mengedit informasi khusus:
   
   **Nomor Telepon/WhatsApp:**
   - Buka `index.html`
   - Cari section `#kontak`
   - Update nomor Anda di sana

   **Jam Operasional:**
   - Edit bagian jam operasional di section kontak
   
   **Lokasi:**
   - Update lokasi di bagian contact item

### 3. **Warna Tema (Opsional)**
   Jika ingin mengubah warna:
   - Buka `styles.css`
   - Cari bagian `:root {`
   - Ubah nilai warna:
     - `--primary-color: #00d4ff;` (Cyan/Biru)
     - `--secondary-color: #ff006e;` (Pink/Magenta)
     - `--accent-color: #8338ec;` (Purple)

## 🎨 Customisasi Lebih Lanjut

### Menambah Layanan Baru
1. Buka `index.html`
2. Cari bagian `<!-- Service 16: Cicilan -->`
3. Copy card tersebut dan paste setelah
4. Update icon, nama, dan deskripsi

**Contoh Template Card:**
```html
<div class="service-card">
    <div class="service-icon">🎯</div>
    <h3>Nama Layanan</h3>
    <p>Deskripsi layanan Anda</p>
</div>
```

### Mengubah Logo/Judul
- Buka `index.html`
- Cari `<span class="logo-text">TOPAN CELL</span>`
- Ganti dengan nama bisnis Anda

### Menambah Media Sosial
Tambahkan di footer atau navbar:
```html
<div class="social-links">
    <a href="https://Instagram.com/...">Instagram</a>
    <a href="https://facebook.com/...">Facebook</a>
    <a href="https://wa.me/...">WhatsApp</a>
</div>
```

## 💡 Tips & Tricks

### 1. **Menggunakan Live Server**
   - Install extension "Live Server" di VS Code
   - Right-click pada `index.html`
   - Pilih "Open with Live Server"
   - Website akan otomatis refresh saat Anda edit file

### 2. **Testing di Mobile**
   - Buka DevTools (F12)
   - Klik toggle device toolbar
   - Pilih berbagai ukuran perangkat

### 3. **Optimasi untuk Search Engine (SEO)**
   Edit tag di `<head>`:
   ```html
   <meta name="description" content="Deskripsi singkat bisnis Anda">
   <meta name="keywords" content="PPOB, Fastpay, pembayaran digital">
   ```

## 📞 Informasi Kontak
**TOPAN CELL - Agen PPOB Fastpay**
- Lokasi: Kab. Purwakarta, Jawa Barat
- Jam Operasional: 08:00 - 21:00 WIB
- Layanan: 24/7 siap membantu

## 🌐 Deployment (Upload ke Internet)

### Opsi 1: Hosting Gratis (Netlify)
1. Buka https://netlify.com
2. Sign up dengan email
3. Drag & drop folder `topan-cell` ke Netlify
4. Selesai! Website Anda live!

### Opsi 2: Hosting Gratis (GitHub Pages)
1. Buat akun GitHub
2. Buat repository baru
3. Upload file-file ke repository
4. Aktifkan GitHub Pages di settings
5. Website akan accessible di `username.github.io/topan-cell`

### Opsi 3: Hosting Berbayar
- Bluehost, Hostinger, atau penyedia hosting lokal
- Upload via FTP/cPanel
- Sesuaikan dengan petunjuk hosting

## 🔐 Keamanan Catatan

⚠️ **JANGAN:**
- Letakkan nomor telepon/data sensitif langsung di code jika website public
- Share password database
- Upload ke repo public jika ada data sensitif

✅ **LAKUKAN:**
- Gunakan form processing (PHP/Node.js) untuk data sensitif
- Enkripsi informasi penting
- Backup file secara berkala

## 📝 Catatan Pembaruan

**Versi 1.0 (Awal)**
- Struktur website lengkap
- 16 kategori layanan PPOB
- Design futuristik responsif
- Interactive features

## 💪 Support & Bantuan

Jika ada pertanyaan atau butuh customisasi lebih lanjut:
1. Periksa file HTML/CSS/JS dengan teliti
2. Gunakan DevTools (F12) untuk debug
3. Konsultasikan dengan developer lokal

---

**Dibuat dengan ❤️ untuk TOPAN CELL**
Selamat berbisnis! 🚀

Last Updated: Februari 2026
