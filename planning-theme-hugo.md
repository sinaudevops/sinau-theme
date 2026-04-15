# Blueprint Pengembangan Custom Theme GoHugo
*Panduan untuk Senior, Junior, dan Agen AI*

Dokumen ini berisi arsitektur komponen dan langkah-langkah inisialisasi untuk membuat tema Hugo kustom dari nol dengan standar industri modern.

---

## 1. Anatomi Komponen Tema
Sebuah tema Hugo yang profesional dibangun di atas struktur folder berikut di dalam `themes/nama-tema/`:

| Folder | Fungsi |
| :--- | :--- |
| `layouts/` | **Jantung Tema**. Berisi file HTML (Go Templates) untuk struktur halaman. |
| `assets/` | Folder untuk aset yang perlu diproses (SCSS, JS modern, Images untuk diproses via Hugo Pipes). |
| `static/` | Folder untuk aset statis yang disalin langsung (Favicon, Font, File PDF). |
| `theme.toml` | Identitas tema (Author, Versi, Nama). |

### Komponen Layout Utama:
1.  **`_default/baseof.html`**: Wrapper utama (`<html>`, `<head>`, `<body>`). Tempat injeksi blok konten.
2.  **`index.html`**: Tampilan halaman depan (Homepage).
3.  **`_default/single.html`**: Template untuk halaman artikel tunggal.
4.  **`_default/list.html`**: Template untuk daftar artikel (Archive/Category).
5.  **`partials/`**: Komponen UI diskrit yang *reusable* (Navbar, Footer, Sidebar).
6.  **`shortcodes/`**: Komponen interaktif yang bisa dipanggil kontributor dari dalam file Markdown.

---

## 2. Tech Stack Rekomendasi (Plugin & Library)
Hugo bersifat statis, jadi "plugin" biasanya berupa integrasi eksternal atau Hugo Modules:

*   **Styling**: **Tailwind CSS + PostCSS** (via Hugo Pipes). Memberikan fleksibilitas desain tanpa menulis CSS manual yang panjang.
*   **Interaktivitas**: **Alpine.js**. Ringan (minimalis), sangat cocok untuk transisi UI reaktif tanpa beban berat React/Vue.
*   **Image Processing**: Manfaatkan fitur **Hugo Image Processing** bawaan untuk konversi otomatis ke format `.webp`.

---

## 3. Planning Inisiasi Project (Step-by-Step)

### Fase 1: Persiapan Environment
*   Pastikan menggunakan **Hugo Extended Version** (wajib untuk kompilasi SCSS).
*   Inisialisasi `npm` di root project jika menggunakan Tailwind/Alpine.

### Fase 2: Inisialisasi Project & Skeleton
1.  Buat site baru: `hugo new site my-cool-website`
2.  Buat folder tema: `hugo new theme my-custom-theme`
3.  Konfigurasi di `hugo.toml`: `theme = "my-custom-theme"`

### Fase 3: Merakit Kerangka UI (Scaffolding)
1.  **Setup Master Wrapper**: Isi `layouts/_default/baseof.html` dengan struktur HTML5 dan tambahkan tag `{{ block "main" . }}{{ end }}`.
2.  **Sambungkan Partial**: Buat `layouts/partials/header.html` dan `footer.html`.
3.  **Definisikan Template**: Isi `layouts/index.html` dan `layouts/_default/single.html` dengan blok `{{ define "main" }} ... {{ end }}`.

### Fase 4: Integrasi Aset (Hugo Pipes)
Hubungkan file CSS/JS di dalam `<head>` atau sebelum penutup `</body>` menggunakan *Hugo Pipes* untuk menangani minifikasi otomatis:
```go
{{ $style := resources.Get "scss/main.scss" | toCSS | minify | fingerprint }}
<link rel="stylesheet" href="{{ $style.Permalink }}">
```

### Fase 5: Testing & Live Development
1.  Buat konten contoh: `hugo new content content/posts/test.md`.
2.  Jalankan server: `hugo server -D`.
3.  Akses di `http://localhost:1313`.

---

> [!TIP]
> **Context "The Dot" (.)**: Selalu sertakan titik saat memanggil partial atau loop. Tanpa titik, komponen tidak akan bisa membaca data dari file Markdown.
