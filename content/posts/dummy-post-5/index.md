---
title: "Hardening VPS: Checklist Keamanan Dasar Server Linux"
date: 2026-04-11T10:00:00+07:00
draft: false
author: "sinau-theme"
description: "Panduan mengamankan server mulai dari SSH key, firewall UFW, fail2ban, hingga automatic security updates."
categories: ["Keamanan"]
tags: ["security", "vps", "linux", "ssh", "firewall"]
series: []
featured: true
editorspick: false
image: "featured.jpg"
quote: ""
---

Setiap VPS yang baru dibeli adalah target potensial untuk serangan. Dalam hitungan menit setelah VPS online, bot-bot otomatis sudah mulai mencoba login via SSH dengan berbagai kombinasi username dan password.

## Checklist Keamanan Dasar

### 1. SSH Hardening

```bash
# Edit konfigurasi SSH
sudo nano /etc/ssh/sshd_config

# Ubah atau tambahkan baris berikut:
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
Port 22   # Opsional: ganti ke port non-standar
```

### 2. Setup UFW Firewall

```bash
# Install UFW
sudo apt install ufw

# Set default policy
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH (WAJIB sebelum enable!)
sudo ufw allow 22/tcp

# Allow HTTP dan HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable
```

### 3. Install Fail2Ban

Fail2Ban memantau log sistem dan secara otomatis memblokir IP yang mencoba login berulang kali dengan password salah.

```bash
sudo apt install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### 4. Automatic Security Updates

```bash
sudo apt install unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades
```

## Monitoring

Pantau aktivitas server secara berkala:

- `last` — cek riwayat login
- `fail2ban-client status sshd` — cek IP yang di-ban
- `ufw status verbose` — cek status firewall

## Uji Coba Optimasi Gambar (Image Hooks)

Bagian ini ditujukan untuk memverifikasi fitur Lazy Loading dan Image Processing otomatis (WebP).

**1. Gambar Lokal (Leaf Bundle) - Otomatis WebP & Resize:**
![Preview Gambar Lokal Terkompresi](featured.jpg)

**2. Gambar Eksternal (Remote) - Lazy Loading Only:**
![Remote Test](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600)

