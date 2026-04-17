# Panduan Penulisan Konten (Sinau Theme)

Selamat menggunakan **Sinau Theme**! Panduan ini dibuat untuk membantu Anda mengelola tampilan halaman depan blog Anda dengan mudah melalui artikel yang Anda tulis.

## 1. Cara Menampilkan Artikel di Slider "POPULER"
Section Slider di halaman utama akan menampilkan maksimal **6 artikel**. Untuk memasukkan artikel ke dalam slider ini:

1. Buka file artikel Anda (file `.md`).
2. Cari bagian atas artikel (antara garis `---`).
3. Tambahkan atau ubah baris berikut:
   ```yaml
   featured: true
   ```
4. Slider akan otomatis mengambil gambar dari parameter `image:`.

## 2. Cara Menampilkan Artikel di "PILIHAN PENULIS"
Section ini menampilkan **2 artikel** besar di bawah slider. Untuk memilih artikel yang muncul di sini:

1. Buka file artikel Anda.
2. Tambahkan atau ubah baris berikut di bagian atas (front matter):
   ```yaml
   editorspick: true
   ```

## 3. Menambahkan Gambar Artikel
Agar tampilan slider dan kartu artikel cantik, pastikan Anda menambahkan link gambar:
```yaml
image: "https://images.unsplash.com/photo-123456"
```
*Tips: Jika tidak ada gambar, tema akan menampilkan gambar default secara otomatis.*

## 4. Ringkasan Front Matter (Copy-Paste)
Gunakan format ini di awal artikel Anda untuk hasil maksimal:

```yaml
---
title: "Judul Keren Artikel Anda"
date: 2026-04-17T14:00:00+07:00
image: "link-gambar-anda.jpg"
featured: true        # Ubah true jika ingin masuk Slider
editorspick: false    # Ubah true jika ingin masuk Editor's Pick
description: "Ringkasan pendek artikel yang akan muncul di halaman depan."
---
```

## Catatan Penting
*   **Halaman Beranda:** Section "Populer" dan "Pilihan Penulis" hanya muncul di **halaman 1**. Kalau Anda membuka halaman 2 (klik tombol 'Next' di bawah), section ini akan hilang agar pembaca bisa fokus melihat daftar artikel lainnya.
*   **Ukuran Gambar:** Gunakan gambar dengan rasio landscape (seperti 16:9) agar tidak terpotong dengan aneh di slider.

---
*Happy Blogging!*

## 5. Cara Menggunakan Tabel Kustom
Anda bisa menyulap tabel Markdown biasa menjadi tampilan yang lebih menarik menggunakan shortcode `{{< custom-table >}}`.

Ada 3 pilihan gaya yang bisa Anda gunakan:

### A. Gaya Modern (`style="modern"`)
Tabel bersih dengan bayangan lembut dan header berwarna biru.
```markdown
{{< custom-table style="modern" >}}
| Kategori | Nama Aplikasi |
| :--- | :--- |
| Cloud Storage | Nextcloud, Seafile |
{{< /custom-table >}}
```

### B. Gaya Lencana/Badge (`style="badge"`)
Cocok untuk daftar aplikasi. Nama aplikasi otomatis berubah menjadi kotak biru cantik.
```markdown
{{< custom-table style="badge" >}}
| Kategori | Daftar Aplikasi |
| :--- | :--- |
| Database | PostgreSQL, MariaDB, Redis |
{{< /custom-table >}}
```

### C. Gaya Kartu/Card (`style="card"`)
Tabel akan berubah menjadi kotak-kotak kartu yang sangat bagus di HP.
```markdown
{{< custom-table style="card" >}}
| Service | Fitur Utama |
| :--- | :--- |
| Nginx | Reverse Proxy, SSL, Load Balancer |
{{< /custom-table >}}
```

### Pengaturan Global (Front Matter)
Jika Anda ingin semua tabel di dalam satu artikel menggunakan gaya yang sama tanpa mengetik `style=` berulang kali, tambahkan ini di bagian atas artikel:
```yaml
tableStyle: "badge" # Pilihan: modern, badge, atau card
```

