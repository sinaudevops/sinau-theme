---
title: "Konfigurasi Nginx Reverse Proxy untuk Pemula"
date: 2026-04-09T10:00:00+07:00
draft: false
author: "sinau-theme"
description: "Langkah demi langkah menyiapkan Nginx sebagai reverse proxy untuk mengarahkan traffic ke berbagai aplikasi di satu server."
categories: ["Linux"]
tags: ["nginx", "reverse-proxy", "server", "docker"]
series: []
featured: false
editorspick: false
image: "featured.jpg"
quote: ""
---

Nginx adalah web server yang sangat powerful dan bisa berfungsi sebagai reverse proxy. Dengan reverse proxy, satu IP/domain bisa mengarahkan traffic ke berbagai aplikasi yang berjalan di port berbeda.

## Konsep Dasar Reverse Proxy

Tanpa reverse proxy, setiap aplikasi harus diakses dengan port yang berbeda:

```
http://server-ip:3000  → App A
http://server-ip:8080  → App B  
http://server-ip:5000  → App C
```

Dengan Nginx reverse proxy:

```
https://app-a.domain.com  → App A (port 3000)
https://app-b.domain.com  → App B (port 8080)
https://app-c.domain.com  → App C (port 5000)
```

## Konfigurasi Dasar

```nginx
# /etc/nginx/sites-available/app-a
server {
    listen 80;
    server_name app-a.domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## SSL dengan Certbot

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Generate SSL certificate
sudo certbot --nginx -d app-a.domain.com

# Auto-renewal sudah dikonfigurasi otomatis oleh Certbot
```

## Uji Coba Optimasi Gambar (Image Hooks)

Bagian ini ditujukan untuk memverifikasi fitur Lazy Loading dan Image Processing otomatis (WebP).

**1. Gambar Lokal (Leaf Bundle) - Otomatis WebP & Resize:**
![Preview Gambar Lokal Terkompresi](featured.jpg)

**2. Gambar Eksternal (Remote) - Lazy Loading Only:**
![Remote Test](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600)

