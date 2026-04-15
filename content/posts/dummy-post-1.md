---
title: "Setup Server Ubuntu dari Nol Sampai Production"
date: 2026-04-15T11:00:00+07:00
draft: false
author: "sinau-theme"
description: "Catatan pribadi menyiapkan VPS baru berbasis Ubuntu Server 22.04 LTS dari kondisi blank hingga siap hosting berbagai aplikasi web."
categories: ["Linux"]
tags: ["ubuntu", "vps", "server", "ssh"]
series: []
featured: true
editorspick: false
image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=500&q=80&fit=crop"
quote: "Sysadmin yang baik adalah sysadmin yang malas — karena ia mengotomatisasi segalanya."
---

Tulisan ini adalah catatan pribadi ketika menyiapkan sebuah VPS baru berbasis Ubuntu Server 22.04 LTS dari kondisi blank hingga siap digunakan untuk hosting berbagai aplikasi web. Semua langkah di sini sudah dipraktikkan berulang kali di beberapa provider berbeda (Hetzner, DigitalOcean, dan Contabo).

## Langkah 1: Akses SSH dan User Management

Hal pertama yang harus dilakukan setelah VPS aktif adalah login via SSH. Biasanya provider memberikan akses **root** langsung, tapi kita tidak boleh terus menggunakan root untuk operasional sehari-hari — ini berbahaya dari sisi keamanan.

> "Jangan pernah menjalankan aplikasi sebagai root. Buat user terpisah, berikan akses sudo, lalu nonaktifkan login root."

Berikut langkah membuat user baru dan memberikan akses sudo:

- **Buat user baru:** `adduser namauser`
- **Tambahkan ke grup sudo:** `usermod -aG sudo namauser`
- **Pindah ke user baru:** `su - namauser`
- **Copy SSH key:** Salin public key ke `~/.ssh/authorized_keys`

### Mematikan Login Root via SSH

Setelah memastikan user baru bisa login via SSH key, langkah selanjutnya adalah menonaktifkan akses root dan password authentication di file konfigurasi SSH (`/etc/ssh/sshd_config`). Ini adalah langkah hardening paling dasar yang wajib dilakukan.

## Langkah 2: Firewall dan Keamanan Dasar

Ubuntu sudah menyediakan **UFW (Uncomplicated Firewall)** yang sangat mudah digunakan. Prinsipnya sederhana: blokir semua port secara default, lalu buka hanya port yang dibutuhkan.

Port yang umumnya perlu dibuka untuk web server:

1. **Port 22** — SSH (wajib, pastikan ini dibuka SEBELUM mengaktifkan firewall!)
2. **Port 80** — HTTP
3. **Port 443** — HTTPS

## Langkah 3: Install Docker dan Docker Compose

Untuk mengelola aplikasi, hampir selalu menggunakan Docker. Alasannya simpel: setiap aplikasi terisolasi dalam container-nya masing-masing, tidak saling mengganggu, dan mudah di-backup maupun di-migrate ke server lain.

### Struktur Folder yang Digunakan

Setiap project ditempatkan di folder terpisah dengan file `docker-compose.yml`-nya masing-masing:

- `/opt/apps/nginx-proxy/` — Reverse proxy (Nginx Proxy Manager)
- `/opt/apps/plausible/` — Analytics
- `/opt/apps/gitea/` — Git server pribadi
- `/opt/apps/uptime-kuma/` — Monitoring uptime

## Penutup

Setup server memang terasa menakutkan di awal, tapi setelah beberapa kali melakukannya, prosesnya akan terasa natural. Kunci utamanya adalah: **dokumentasikan setiap langkah**.
