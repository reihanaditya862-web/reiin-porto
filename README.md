# Reiin — Personal portfolio

Website profil Reihan Nor Aditya SP. HTML, CSS, dan JavaScript murni, tanpa dependensi, tanpa proses build, dan bisa dipakai offline.

## Buka langsung
Buka `index.html` di Chrome, Edge, atau Firefox. Semua tampilan dan interaksi bekerja tanpa internet.

## Jalankan di localhost
1. Pasang Node.js jika belum ada.
2. Buka terminal di folder ini.
3. Jalankan `npm run dev`.
4. Buka http://localhost:3000.
5. Tekan Ctrl+C untuk menghentikan server.

Tidak perlu `npm install`. Server ini untuk pengembangan lokal.

## Struktur
- `index.html`: konten dan struktur halaman.
- `styles.css`: desain responsif, termasuk preferensi reduced motion.
- `depth.css`: lapisan desain dimensional terbaru, monogram 3D CSS, panel bertumpuk, warna dan bayangan.
- `app.js`: menu mobile dan pemilih warna ilustrasi.
- `profil-reiin.txt`: profil ringkas yang dapat diunduh.
- `favicon.svg`: ikon situs.
- `additions.css`: tambahan dari Claude (section Karya, foto lomba, kontak, highlight hero). Dimuat paling akhir.
- `assets/`: foto dokumentasi FOTEC 2.0 dan Kejurnas IRTC.
- `server.js`: server lokal tanpa dependensi.

## Konten dan personalisasi
Teks mengikuti biodata yang diberikan. Pengalaman lomba ditulis sebagai partisipasi. Tidak ada klaim juara, klien, atau proyek profesional. Monogram digunakan sebagai identitas visual tanpa mengarang foto profil. Akun sosial (GitHub, Instagram, TikTok) ada di bagian `#kenalan`.

Ubah biodata di `index.html` dan `profil-reiin.txt`. Warna utama berada pada bagian `:root` di `styles.css`. Untuk menambahkan kontak asli, ganti atau lengkapi bagian `#kenalan`.

## Interaksi
- Navigasi antarbagian dan tombol kembali ke atas.
- Menu layar kecil, dengan dukungan Escape.
- Pilihan warna interaktif di bagian eksplorasi.
- Detail pengalaman lomba yang dapat dibuka/tutup.
- Unduhan profil ringkas.

Website tidak mengirim data, tidak menggunakan pelacak, dan tidak memerlukan akun.

## Pembaruan UI/UX — 4 November 2026

Revisi terbaru: tampilan lebih dimensional sesuai permintaan pengguna. Hero menggunakan monogram r. dengan perspektif CSS, pencahayaan, dan lapisan bayangan. Profil tampil sebagai panel bertumpuk, bagian pengalaman memakai navy, serta kartu pendidikan dan eksplorasi memiliki kedalaman. Tidak ada nomor bagian, nomor halaman, atau pagination. Tahun pendidikan dan lomba tetap merupakan informasi faktual. Buka `index.html` untuk melihat hasil.

Revisi dimensional diuji di browser desktop dan frame 360/768 px. Tidak ada overflow horizontal pada kedua frame. Menu HP, detail Kejurnas IRTC, dan pilihan warna Cyan bekerja. Preferensi reduced motion tetap tersedia. Gradien dan bayangan sengaja digunakan untuk memenuhi permintaan terbaru agar desain tidak flat; laporan lint dari versi editorial di bawah bukan audit versi dimensional ini.

Palet mengikuti referensi pengguna: navy #1B365D, biru #005A9C, cyan #60C1E5, dan biru muda #A0E0EF. Putih digunakan untuk ruang baca; biru pucat #E9F7FC merupakan warna permukaan pendukung.

Komposisi editorial dengan nama Reiin besar, hierarki teks yang lebih terbaca, pendidikan dan lomba yang lebih menonjol, menu HP, pilihan warna dengan status aksesibel, serta animasi singkat yang mengikuti reduced motion. Tidak ada foto, prestasi, atau kontak baru yang direkayasa.

Empat panduan yang diterapkan: design-taste-frontend (arah tipografi, seed 13108829), no-ai-design-slop (mengurangi dekorasi generik), web-design-guidelines (semantik, fokus, navigasi, gerak), dan ui-ux-pro-max (keterbacaan, kontras, target sentuh).

Validasi: pemeriksaan sintaks JavaScript dan lint desain lolos. Tampilan desktop serta frame responsif 390/768 px diperiksa melalui browser; menu HP, detail lomba, dan pemilih warna diuji. Inspector Chrome lokal tidak tersedia, jadi tidak ada klaim lulus audit otomatis seluruh viewport. Foto karya asli masih dapat ditambahkan saat tersedia.

## Kolaborasi Claude — 4 November 2026

Di atas desain dimensional dari GPT: copy direvisi agar lebih personal dan tidak generik, section Karya (RecycleChain + cara kerja) dan akun sosial dikembalikan dari versi sebelumnya, foto FOTEC 2.0 dan IRTC dimasukkan ke detail lomba beserta catatan bahwa juara diraih rekan komunitas, kepanitiaan NFRC 2024 ditambahkan, serta meta Open Graph untuk preview saat link dibagikan. `server.js` kini membaca dari root repo, sama seperti Vercel.
