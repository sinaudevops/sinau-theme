---
title: "Membangun Blog dengan Hugo dan GitHub Pages"
date: 2026-04-13T09:00:00+07:00
draft: false
author: "sinau-theme"
description: "Tutorial lengkap membangun blog statis dengan Hugo dan deploy gratis ke GitHub Pages dengan GitHub Actions."
categories: ["Coding"]
tags: ["hugo", "github", "blog", "static-site"]
series: ["Hugo Series"]
featured: true
editorspick: false
image: "featured.jpg"
quote: ""
---

Hugo adalah salah satu static site generator tercepat yang ada. Dikombinasikan dengan GitHub Pages untuk hosting gratis, ini adalah setup ideal untuk blog teknis pribadi.

## Kenapa Hugo?

Hugo ditulis dalam Go, yang membuatnya sangat cepat dalam proses build. Blog dengan ratusan artikel bisa di-build dalam hitungan detik. Beberapa keunggulan Hugo:

- **Build speed** — ribuan halaman dalam < 1 detik
- **No dependencies** — satu binary, tidak perlu Node.js atau Python
- **Flexible templating** — sistem template yang powerful
- **Live reload** — preview perubahan secara real-time

## Instalasi Hugo

```bash
# Di Ubuntu/Debian
sudo apt install hugo

# Di macOS dengan Homebrew
brew install hugo

# Verifikasi instalasi
hugo version
```

## Membuat Site Baru

```bash
# Buat project baru
hugo new site myblog

# Masuk ke direktori
cd myblog

# Inisialisasi git
git init
```

## Deploy ke GitHub Pages

Dengan GitHub Actions, setiap push ke branch `main` akan otomatis men-trigger build dan deploy ke GitHub Pages.

## Uji Coba Optimasi Gambar (Image Hooks)

Bagian ini ditujukan untuk memverifikasi fitur Lazy Loading dan Image Processing otomatis (WebP).

**1. Gambar Lokal (Leaf Bundle) - Otomatis WebP & Resize:**
![Preview Gambar Lokal Terkompresi](featured.jpg)

**2. Gambar Eksternal (Remote) - Lazy Loading Only:**
![Remote Test](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600)

