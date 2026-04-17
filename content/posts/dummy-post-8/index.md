---
title: "Mengelola 20+ Aplikasi dengan Docker Compose di VPS Murah"
date: 2026-04-08T09:00:00+07:00
draft: false
author: "sinau-theme"
description: "Cara menyusun stack Docker yang rapi, efisien, dan mudah dikelola untuk berbagai layanan di satu VPS."
categories: ["DevOps"]
tags: ["docker", "docker-compose", "vps", "self-hosting"]
series: []
featured: false
editorspick: true
image: "featured.jpg"
quote: "Container yang rapi adalah fondasi infrastruktur yang sehat."
---

Dengan Docker Compose, mengelola banyak aplikasi di satu VPS menjadi sangat terstruktur dan mudah. Berikut adalah strategi yang digunakan untuk mengelola 20+ aplikasi di VPS dengan RAM 8GB.

## Struktur Folder

```
/opt/apps/
├── traefik/          # Reverse proxy
│   └── docker-compose.yml
├── nextcloud/        # Cloud storage
│   └── docker-compose.yml
├── gitea/            # Git server
│   └── docker-compose.yml
├── plausible/        # Analytics
│   └── docker-compose.yml
└── uptime-kuma/      # Monitoring
    └── docker-compose.yml
```

## Contoh Docker Compose

```yaml
# /opt/apps/uptime-kuma/docker-compose.yml
version: '3.8'

services:
  uptime-kuma:
    image: louislam/uptime-kuma:1
    container_name: uptime-kuma
    restart: unless-stopped
    volumes:
      - ./data:/app/data
    ports:
      - "3001:3001"
    networks:
      - proxy

networks:
  proxy:
    external: true
```

## Tips Manajemen Resource

- Gunakan `docker stats` untuk monitoring resource
- Set memory limits di setiap container
- Gunakan Traefik sebagai reverse proxy terpusat
- Backup volume Docker secara rutin dengan rsync atau rclone

## Uji Coba Optimasi Gambar (Image Hooks)

Bagian ini ditujukan untuk memverifikasi fitur Lazy Loading dan Image Processing otomatis (WebP).

**1. Gambar Lokal (Leaf Bundle) - Otomatis WebP & Resize:**
![Preview Gambar Lokal Terkompresi](featured.jpg)

**2. Gambar Eksternal (Remote) - Lazy Loading Only:**
![Remote Test](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600)

