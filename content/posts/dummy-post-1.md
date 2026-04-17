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

{{< custom-table style="modern" >}}
| Port | Protokol | Kegunaan | Dashboard |
| :--- | :--- | :--- | :--- |
| 22 | TCP | Akses SSH Aman | Terminal |
| 80 | TCP | Trafik HTTP Standar | Web |
| 443 | TCP | Trafik HTTPS Terenkripsi | Web |
| 81 | TCP | Nginx Proxy Manager | Admin |
{{< /custom-table >}}

## Langkah 3: Install Docker dan Docker Compose

Untuk mengelola aplikasi, hampir selalu menggunakan Docker. Alasannya simpel: setiap aplikasi terisolasi dalam container-nya masing-masing, tidak saling mengganggu, dan mudah di-backup maupun di-migrate ke server lain.

### Struktur Folder dan Stack Aplikasi
Setiap project ditempatkan di folder terpisah dengan file `docker-compose.yml`-nya masing-masing:

{{< custom-table style="badge" >}}
| Kategori | Stack Aplikasi | Lokasi Host |
| :--- | :--- | :--- |
| **Networking** | Nginx Proxy Manager, Cloudflare Tunnel | `/opt/apps/proxy/` |
| **Analytics** | Plausible, Umami, PostgreSQL | `/opt/apps/metrics/` |
| **DevOps** | Gitea, Woodpecker CI, Drone | `/opt/apps/git/` |
| **Monitoring** | Uptime Kuma, Netdata | `/opt/apps/monitor/` |
{{< /custom-table >}}

## Rangkuman Hardening Server
Gunakan daftar periksa berikut untuk memastikan server Anda tetap aman:

{{< custom-table style="card" >}}
| Keamanan | Checklist Wajib |
| :--- | :--- |
| **Akses Login** | SSH Key Only, Non-Root User, Custom SSH Port |
| **Firewall** | UFW Active, Only Required Ports, Fail2Ban |
| **Updates** | Unattended-Upgrades, Weekly Reboots |
| **Monitoring** | Email Alerter, Healthchecks, Remote Backup |
{{< /custom-table >}}

## Penutup

Setup server memang terasa menakutkan di awal, tapi setelah beberapa kali melakukannya, prosesnya akan terasa natural. Kunci utamanya adalah: **dokumentasikan setiap langkah**.

