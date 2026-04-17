---
title: "Memasang Plausible Analytics di VPS Sendiri"
date: 2026-04-06T09:00:00+07:00
draft: false
author: "sinau-theme"
description: "Alternatif Google Analytics yang ringan, privacy-friendly, dan bisa di-host sendiri menggunakan Docker."
categories: ["Self-Hosting"]
tags: ["plausible", "analytics", "privacy", "docker"]
series: []
featured: false
editorspick: false
image: "featured.jpg"
quote: ""
---

Plausible Analytics adalah alternatif Google Analytics yang privacy-friendly. Tidak ada cookie, tidak ada data yang dijual ke pihak ketiga, dan ukurannya hanya 1KB script — jauh lebih ringan dari Google Analytics.

## Kenapa Plausible?

- **Privacy-first** — tidak mengumpulkan data personal
- **GDPR compliant** — tidak perlu cookie banner
- **Lightweight** — script 1KB vs Google Analytics 45KB+
- **Open source** — bisa di-host sendiri secara gratis

## Setup dengan Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  plausible:
    image: plausible/analytics:v2
    restart: unless-stopped
    command: sh -c "sleep 10 && /entrypoint.sh db createdb && /entrypoint.sh db migrate && /entrypoint.sh run"
    depends_on:
      - plausible_db
      - plausible_events_db
    ports:
      - "8000:8000"
    env_file:
      - plausible-conf.env

  plausible_db:
    image: postgres:16-alpine
    restart: unless-stopped
    volumes:
      - db-data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_DB=plausible

  plausible_events_db:
    image: clickhouse/clickhouse-server:23.3.7.5-alpine
    restart: unless-stopped
    volumes:
      - event-data:/var/lib/clickhouse
      - ./clickhouse/clickhouse-config.xml:/etc/clickhouse-server/config.d/logging.xml:ro

volumes:
  db-data:
  event-data:
```

## Integrasi dengan Hugo

Tambahkan script Plausible ke template Hugo:

```html
<!-- Di layouts/partials/head.html -->
<script defer data-domain="domain.com" src="https://analytics.domain.com/js/script.js"></script>
```

## Uji Coba Optimasi Gambar (Image Hooks)

Bagian ini ditujukan untuk memverifikasi fitur Lazy Loading dan Image Processing otomatis (WebP).

**1. Gambar Lokal (Leaf Bundle) - Otomatis WebP & Resize:**
![Preview Gambar Lokal Terkompresi](featured.jpg)

**2. Gambar Eksternal (Remote) - Lazy Loading Only:**
![Remote Test](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600)

