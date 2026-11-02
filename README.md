# Reiin / Personal portfolio — redesign 2026

Website portofolio **Reihan Nor Aditya SP (Reiin)**. Desain baru mengangkat tema **digital design notebook**: fondasi TKJ dan robotika, eksplorasi produk digital, serta perjalanan menuju UI/UX.

## Isi

- `index.html` — halaman utama: pengenalan, About Me, RecycleChain, timeline, foto pengalaman, hobi dan kontak.
- `experience.html` — arsip pengalaman FOTEC 2024, FOTEC 2.0 2025, Kejurnas IRTC LFA 2026, dan panitia NFRC 2024.
- `styles.css` — sistem visual, layout responsif, motion, dan dark mode.
- `script.js` — menu mobile, dark mode persisten, dan progress scroll.
- `assets/irtc-2026.jpg` dan `assets/fotec-2025.jpg` — foto dokumentasi pengguna.

## Cara preview lokal

Buka `index.html` dengan browser, atau jalankan server sederhana:

```bash
python -m http.server 8000
```

Lalu buka http://localhost:8000 . Tidak butuh npm, Node, atau proses build.

## Upload ke GitHub/Vercel

1. **Backup/cek perubahan terakhir di GitHub** sebelum upload supaya edit Claude/versi online tidak tertimpa.
2. Upload atau ganti **`index.html`, `experience.html`, `styles.css`, dan `script.js`** pada root repository yang terhubung ke Vercel.
3. Upload folder **`assets/`** beserta kedua foto (hindari upload ZIP utuh sebagai file web).
4. Commit ke branch production, biasanya `main`. Pastikan Vercel berhasil deploy dan cek homepage serta `/experience.html`.
5. Simpan file lain dari repo lama yang mungkin diperlukan layanan Anda; jangan hapus isi repository secara massal.

## Catatan akurasi

- Foto Kejurnas IRTC LFA 2026: juara 1 adalah **rekan komunitas**, bukan Reihan.
- Foto FOTEC 2.0 2025: juara 2 adalah **rekan komunitas**, bukan Reihan.
- FOTEC 2024 serta NFRC 2024 belum memiliki foto; digunakan placeholder.
- RecycleChain disebut sebagai **prototipe**, bukan produk komersial aktif.
- About Me menggunakan detail pendidikan dan karier yang diberikan oleh Reihan.
- Pertimbangkan izin rekan-rekan sebelum foto kelompok dipublikasikan ke website publik.

## Design intent

Palet: paper `#f3f6f8`, ink `#1a2940`, cobalt `#334bd5`, lime `#d5ec8f`, lavender `#d9d8ff`, warm accent `#ffc4a6`. Tidak ada font atau aset JS pihak ketiga.

Motion singkat dan responsif; semua konten tetap terlihat ketika JS mati. Animasi menghormati `prefers-reduced-motion`.
