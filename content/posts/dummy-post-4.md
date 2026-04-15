---
title: "Membangun Homelab dari Raspberry Pi Hingga Proxmox Cluster"
date: 2026-04-12T08:00:00+07:00
draft: false
author: "sinau-theme"
description: "Dokumentasi perjalanan membangun lab server pribadi di rumah untuk belajar dan eksperimen DevOps."
categories: ["Self-Hosting"]
tags: ["homelab", "proxmox", "raspberry-pi", "networking"]
series: []
featured: true
editorspick: true
image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&fit=crop"
quote: "Homelab adalah tempat terbaik untuk belajar, karena tidak ada yang rugi jika sesuatu rusak."
---

Homelab adalah setup server pribadi di rumah yang digunakan untuk belajar, eksperimen, dan menjalankan layanan untuk kebutuhan sendiri. Perjalanan ini dimulai dari sebuah Raspberry Pi 4, dan berkembang menjadi cluster Proxmox dengan beberapa node.

## Fase 1: Raspberry Pi sebagai Permulaan

Raspberry Pi 4 dengan RAM 8GB adalah titik awal yang sempurna. Dengan harga yang terjangkau, kita sudah bisa menjalankan berbagai service di rumah.

Service yang pertama kali dijalankan di Raspberry Pi:

- **Pi-hole** — DNS ad blocker untuk seluruh jaringan rumah
- **Uptime Kuma** — monitoring uptime service
- **Vaultwarden** — self-hosted password manager

## Fase 2: Migrasi ke Mini PC

Setelah beberapa bulan, kebutuhan resource mulai meningkat. Raspberry Pi sudah tidak cukup untuk menjalankan semua service yang diinginkan.

Pilihan jatuh pada **Beelink Mini S12 Pro** dengan spesifikasi:

- Intel N100 (4 core, 4 thread)
- RAM 16GB DDR4
- SSD 500GB NVMe

## Fase 3: Proxmox Virtualization

Proxmox VE adalah platform virtualisasi open-source yang memungkinkan kita menjalankan VM dan container (LXC) dalam satu sistem. Ini adalah game-changer untuk homelab.
