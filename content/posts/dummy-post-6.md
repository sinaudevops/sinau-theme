---
title: "CI/CD Pipeline Sederhana dengan GitHub Actions"
date: 2026-04-10T09:00:00+07:00
draft: false
author: "sinau-theme"
description: "Otomatisasi proses build, test, dan deploy blog Hugo setiap kali ada push ke repository utama."
categories: ["DevOps"]
tags: ["github-actions", "cicd", "automation", "hugo"]
series: []
featured: true
editorspick: false
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80&fit=crop"
quote: ""
---

CI/CD (Continuous Integration/Continuous Deployment) adalah praktik standar dalam pengembangan software modern. Dengan GitHub Actions, kita bisa mengotomatisasi seluruh pipeline dari push kode hingga deployment.

## Workflow untuk Hugo Blog

Berikut contoh workflow GitHub Actions untuk otomatis build dan deploy blog Hugo ke GitHub Pages:

```yaml
# .github/workflows/deploy.yml
name: Deploy Hugo Site

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

## Penjelasan Setiap Step

1. **Checkout** — Mengambil source code dari repository, termasuk submodules (tema Hugo biasanya sebagai submodule)
2. **Setup Hugo** — Menginstall Hugo versi terbaru
3. **Build** — Menjalankan `hugo --minify` untuk build site dengan optimasi
4. **Deploy** — Upload hasil build ke branch `gh-pages`
