---
title: "Monitoring Server dengan Uptime Kuma"
date: 2026-04-04T10:00:00+07:00
draft: false
author: "sinau-theme"
description: "Setup Uptime Kuma sebagai monitoring dashboard untuk memantau uptime semua layanan self-hosted."
categories: ["DevOps"]
tags: ["monitoring", "uptime-kuma", "docker", "self-hosting"]
series: []
featured: false
editorspick: false
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80&fit=crop"
quote: ""
---

Uptime Kuma adalah monitoring tool yang cantik dan mudah digunakan. Dengan tampilan mirip "Better Uptime", tapi bisa di-host sendiri secara gratis.

## Fitur Utama Uptime Kuma

- Monitor HTTP, TCP, DNS, dan banyak protokol lainnya
- Alert via Telegram, Discord, Email, dan 90+ integrasi
- Status page publik yang bisa di-share
- Response time tracking dan history
- Certificate monitoring (SSL expiry)

## Instalasi dengan Docker

```bash
docker run -d \
  --name uptime-kuma \
  --restart unless-stopped \
  -p 3001:3001 \
  -v uptime-kuma:/app/data \
  louislam/uptime-kuma:1
```

Atau dengan Docker Compose:

```yaml
version: '3.8'
services:
  uptime-kuma:
    image: louislam/uptime-kuma:1
    container_name: uptime-kuma
    restart: unless-stopped
    ports:
      - "3001:3001"
    volumes:
      - ./data:/app/data
```

## Setup Notifikasi Telegram

1. Buat bot Telegram via @BotFather
2. Dapatkan `Bot Token` dan `Chat ID`
3. Di Uptime Kuma: Settings → Notifications → Add → Telegram
4. Masukkan token dan chat ID
5. Test notifikasi

Dengan setup ini, Anda akan mendapat notifikasi real-time setiap kali ada service yang down.
