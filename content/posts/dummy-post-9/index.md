---
title: "Belajar Go (Golang) dari Nol: Catatan Hari Pertama"
date: 2026-04-07T10:00:00+07:00
draft: false
author: "sinau-theme"
description: "Catatan belajar bahasa pemrograman Go dari instalasi, syntax dasar, hingga membuat program CLI pertama."
categories: ["Coding"]
tags: ["golang", "programming", "tutorial", "cli"]
series: []
featured: false
editorspick: false
image: "featured.jpg"
quote: ""
---

Go (atau Golang) adalah bahasa pemrograman yang dikembangkan oleh Google. Bahasa ini dirancang untuk simplicity, performance, dan concurrency. Banyak tools DevOps modern ditulis dalam Go — termasuk Docker, Kubernetes, dan Hugo.

## Instalasi Go

```bash
# Download Go
wget https://go.dev/dl/go1.22.linux-amd64.tar.gz

# Extract ke /usr/local
sudo tar -C /usr/local -xzf go1.22.linux-amd64.tar.gz

# Tambahkan ke PATH (di ~/.bashrc atau ~/.zshrc)
export PATH=$PATH:/usr/local/go/bin

# Verifikasi
go version
```

## Hello World

```go
// main.go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

```bash
# Jalankan
go run main.go

# Build binary
go build -o hello main.go
./hello
```

## Konsep Dasar Go

### Variables

```go
// Explicit type
var name string = "sinau-theme"
var age int = 25

// Short declaration (type inference)
city := "Jakarta"
temp := 30.5
```

### Functions

```go
func add(a, b int) int {
    return a + b
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("cannot divide by zero")
    }
    return a / b, nil
}
```

## Uji Coba Optimasi Gambar (Image Hooks)

Bagian ini ditujukan untuk memverifikasi fitur Lazy Loading dan Image Processing otomatis (WebP).

**1. Gambar Lokal (Leaf Bundle) - Otomatis WebP & Resize:**
![Preview Gambar Lokal Terkompresi](featured.jpg)

**2. Gambar Eksternal (Remote) - Lazy Loading Only:**
![Remote Test](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600)

