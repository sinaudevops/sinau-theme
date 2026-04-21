# Panduan Konfigurasi SEO & Analitik — Sinau-theme

Dokumen ini menjelaskan cara mengatur metadata SEO, Structured Data (Schema.org), dan integrasi analitik pada tema Anda.

## 1. Konfigurasi Analitik (Modular)

Tema ini mendukung tiga platform analitik populer secara out-of-the-box. Semua konfigurasi dilakukan melalui file `hugo.toml`.

### Cara Pengisian:
Buka `hugo.toml` dan cari bagian `[params.analytics]`. Isi ID atau Domain sesuai platform yang Anda gunakan:

```toml
[params.analytics]
  [params.analytics.umami]
    id     = "your-website-id" # Masukkan ID dari dashboard Umami
    server = "https://analytics.umami.is" # Opsional: ganti jika Anda self-host

  [params.analytics.plausible]
    domain = "domainanda.com" # Masukkan domain yang terdaftar di Plausible
    server = "https://plausible.io" # Opsional: ganti jika Anda self-host

  [params.analytics.google]
    id     = "G-XXXXXXXXXX" # Masukkan Gtag ID (Google Analytics 4)
```

> **INFO PENTING**: Script analitik **TIDAK AKAN MUNCUL** saat Anda menjalankan `hugo server` di lokal. Ini disengaja untuk mencegah data testing mengotori data asli Anda. Script hanya akan muncul pada hasil build final (`hugo`).

---

## 2. Optimasi SEO & Structured Data (JSON-LD)

Tema ini secara otomatis menyertakan Schema.org (Article & Breadcrumbs) untuk membantu Google memberikan Rich Snippets.

### Metadata Artikel:
Secara default, tema ini mengambil data dari **Front Matter** artikel Anda:
- `headline`: Diambil dari `title`.
- `description`: Diambil dari `description`, jika kosong menggunakan `summary` otomatis.
- `image`: Diambil dari parameter `image`.

**Contoh Front Matter Ideal:**
```markdown
---
title: "Cara Install Docker di Ubuntu"
date: 2024-04-21
description: "Tutorial lengkap instalasi Docker Engine di Ubuntu 22.04 LTS."
image: "images/cover-docker.png"
author: "alex"
---
```

---

## 3. Favicon & Branding Mobile

Untuk memastikan website Anda memiliki ikon yang cantik di tab browser dan layar HP (Apple Touch Icon), pastikan file berikut ada di folder `static/`:

1. `favicon.ico` (Standar browser)
2. `favicon-32x32.png` (Ikon resolusi tinggi)
3. `apple-touch-icon.png` (Untuk pengguna iPhone/iPad)

Semua meta tags sudah terpasang otomatis di `<head>`.

---

## 4. Deteksi Otomatis RSS

Tema ini menyertakan *RSS auto-discovery tags*. Hal ini memudahkan browser dan aplikasi pembaca RSS (seperti Feedly) untuk menemukan feed website Anda cukup dengan memasukkan URL utama.

---

## Verifikasi Teknis

Setelah melakukan konfigurasi, Anda bisa memverifikasi hasilnya menggunakan tools berikut:
1. **Schema Validation**: [Google Rich Results Test](https://search.google.com/test/rich-results)
2. **SEO Check**: [SEO Audit Tools](https://ahrefs.com/seo-checker)
