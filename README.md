# Reiin — Personal portfolio

Website profil Reihan Nor Aditya SP. HTML, CSS, dan JavaScript murni, tanpa dependensi, tanpa proses build, dan bisa dipakai offline.

## Buka langsung
Buka `dist/index.html` di Chrome, Edge, atau Firefox. Semua tampilan dan interaksi bekerja tanpa internet.

## Jalankan di localhost
1. Pasang Node.js jika belum ada.
2. Buka terminal di folder ini.
3. Jalankan `npm run dev`.
4. Buka http://localhost:3000.
5. Tekan Ctrl+C untuk menghentikan server.

Tidak perlu `npm install`. Server ini untuk pengembangan lokal.

## Struktur
- `dist/index.html`: konten dan struktur halaman.
- `dist/styles.css`: desain responsif, termasuk preferensi reduced motion.
- `dist/app.js`: menu mobile dan pemilih warna ilustrasi.
- `dist/profil-reiin.txt`: profil ringkas yang dapat diunduh.
- `dist/favicon.svg`: ikon situs.
- `server.js`: server lokal tanpa dependensi.

## Konten dan personalisasi
Teks mengikuti biodata yang diberikan. Pengalaman lomba ditulis sebagai partisipasi. Tidak ada klaim juara, klien, atau proyek profesional. Monogram digunakan sebagai identitas visual tanpa mengarang foto profil. Email dan akun sosial belum dicantumkan karena belum diberikan.

Ubah biodata di `dist/index.html` dan `dist/profil-reiin.txt`. Warna utama berada pada bagian `:root` di `dist/styles.css`. Untuk menambahkan kontak asli, ganti atau lengkapi bagian `#kenalan`.

## Interaksi
- Navigasi antarbagian dan tombol kembali ke atas.
- Menu layar kecil, dengan dukungan Escape.
- Pilihan warna interaktif di bagian eksplorasi.
- Detail pengalaman lomba yang dapat dibuka/tutup.
- Unduhan profil ringkas.

Website tidak mengirim data, tidak menggunakan pelacak, dan tidak memerlukan akun.

## Pembaruan UI/UX — 4 November 2026

Palet mengikuti referensi pengguna: navy #1B365D, biru #005A9C, cyan #60C1E5, dan biru muda #A0E0EF. Putih digunakan untuk ruang baca; biru pucat #E9F7FC merupakan warna permukaan pendukung.

Komposisi editorial dengan nama Reiin besar, hierarki teks yang lebih terbaca, pendidikan dan lomba yang lebih menonjol, menu HP, pilihan warna dengan status aksesibel, serta animasi singkat yang mengikuti reduced motion. Tidak ada foto, prestasi, atau kontak baru yang direkayasa.

Empat panduan yang diterapkan: design-taste-frontend (arah tipografi, seed 13108829), no-ai-design-slop (mengurangi dekorasi generik), web-design-guidelines (semantik, fokus, navigasi, gerak), dan ui-ux-pro-max (keterbacaan, kontras, target sentuh).

Validasi: pemeriksaan sintaks JavaScript dan lint desain lolos. Tampilan desktop serta frame responsif 390/768 px diperiksa melalui browser; menu HP, detail lomba, dan pemilih warna diuji. Inspector Chrome lokal tidak tersedia, jadi tidak ada klaim lulus audit otomatis seluruh viewport. Foto karya asli masih dapat ditambahkan saat tersedia.
