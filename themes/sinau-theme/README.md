# Sinau Theme

Tema Hugo modern dan elegan dengan fitur slider dinamis dan sistem konten yang terkurasi.

## Features
- **Popular Posts Slider**: Menggunakan Splide.js untuk tampilan slider yang smooth dan responsif.
- **Editor's Choice**: Section khusus untuk menonjolkan artikel pilihan penulis.
- **Smart Pagination Logic**: Halaman depan yang bersih, slider dan pilihan penulis hanya muncul di halaman pertama.
- **Responsive Design**: Optimal di perangkat mobile, tablet, dan desktop.

## Configuration (Front Matter)
Gunakan parameter berikut pada file `.md` Anda untuk mengatur tampilan di Beranda:

- `featured: true` -> Memasukkan artikel ke dalam Slider Populer.
- `editorspick: true` -> Memasukkan artikel ke dalam grid Pilihan Penulis.
- `image: "url"` -> Mengatur gambar utama artikel.

## Installation
Salin folder tema ini ke direktori `themes/` proyek Hugo Anda, lalu update `hugo.toml`:
```toml
theme = "sinau-theme"
```

