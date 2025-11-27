# PANDUAN TEKNIS & OPERASIONAL WEBSITE BENGAWAN UV

**Dokumen ini ditujukan untuk:** Tim Pengembang & Tim Media Bengawan UV.  
**Paket Serah Terima:** File ZIP berisi _Source Code_ (Mentah) dan folder `.output` (Siap Upload).

---

## BAB 1: SKENARIO "LANGSUNG TAYANG" (Tanpa Coding)

Jika tujuan Anda hanya ingin segera meng-online-kan website tanpa mengubah isi konten terlebih dahulu, Anda tidak perlu menginstal apapun.

1.  Buka folder hasil ekstrak ZIP.
2.  Cari folder bernama **`.output`**, lalu buka folder **`public`** di dalamnya.
3.  **Seluruh isi folder `public` inilah website Anda.**
4.  Login ke **Hostinger/cPanel** -\> **File Manager**.
5.  Buka folder `public_html`.
6.  Upload isi dari folder `public` lokal Anda ke sana.
7.  Selesai. Website live.

---

## BAB 2: SETUP LINGKUNGAN PENGEMBANGAN (Untuk Tim IT)

Jika Anda ingin mengedit konten, menambah fitur, atau mengubah desain, Anda wajib melakukan setup di laptop.

### 1\. Persyaratan Sistem (Wajib)

Jangan asal install. Pastikan versi software sesuai agar tidak terjadi error kompatibilitas seperti yang sering terjadi pada Nuxt 3.

- **Node.js:** Wajib versi **LTS (v18 atau v20)**. _Jangan pakai versi ganjil atau terlalu lama._
  - Cek versi: `node -v` di terminal.
- **Text Editor:** VS Code (Sangat disarankan install extension: _Vue - Official_ dan _Tailwind CSS IntelliSense_).
- **Terminal:** PowerShell (Windows) atau Terminal (Mac/Linux).

### 2\. Langkah Instalasi Proyek

Karena ini dari file ZIP (bukan clone Git), langkahnya sedikit berbeda:

1.  **Ekstrak ZIP** ke folder kerja Anda (misal: `D:\Proyek\BengawanWebsite`).

2.  Buka **VS Code**, lalu menu **File \> Open Folder**, pilih folder tersebut.

3.  Buka Terminal di VS Code (`Ctrl + ~`).

4.  **PENTING:** Jalankan perintah ini untuk menginstal semua "otak" website (Nuxt, Tailwind, Content, Icons) yang sudah terdaftar di `package.json`:

    ```bash
    npm install
    ```

    _(Tunggu proses ini. Bisa memakan waktu 2-10 menit tergantung internet. Pastikan tidak ada error merah fatal)._

5.  **Jalankan Server Lokal:**

    ```bash
    npm run dev
    ```

6.  Buka browser di `http://localhost:3000`.

---

## BAB 3: MANAJEMEN KONTEN (Tim Media & IT)

Website ini menggunakan sistem **"Data Driven"**. Artinya, Anda tidak perlu mengedit kode HTML/Vue untuk mengganti teks atau gambar. Cukup edit file data.

**Cara Termudah:**

> **"Ikuti format yang sudah ada."**
> Jika Anda ingin menambah data baru, cukup _copy-paste_ satu blok data sebelumnya (dari kurung kurawal buka `{` sampai tutup `},`), lalu edit isinya. Hati-hati dengan tanda koma `,` di akhir baris.

### A. Data JSON (Data Terstruktur)

Lokasi: `assets/data/`

File-file ini mengontrol konten di halaman-halaman statis:

1.  **`team.json`** (Halaman Profile)
    - Struktur terbagi menjadi: `supervisors`, `team_leader`, `technical_team`, `non_technical_team`, dan `past_team`.
    - Pastikan link sosmed diawali `https://`.

2.  **`achievements.json`** (Halaman Home & Profile)
    - Mengatur daftar juara.
    - `highlight`: Juara Utama (Font Besar).
    - `sub_highlight`: Juara Kedua (Font Sedang).
    - `details`: Array list untuk juara-juara subkategori lainnya.

3.  **`papers.json`** (Halaman Papers)
    - Berisi daftar _Technical Design Report_.
    - Wajib ada link PDF (bisa link Google Drive public atau file yang diupload ke hosting).

4.  **`gallery.json`** (Halaman Gallery)
    - Berisi daftar foto.
    - Website akan **otomatis** membuat tombol filter tahun berdasarkan data `year` yang Anda tulis di sini.

5.  **`history.json`** (Timeline Sejarah)
    - Mengatur timeline vertikal di halaman Profile (Sejarah pembentukan tim).

6.  **`sponsorships.json`** (Halaman Sponsorship)
    - Mengatur paket harga dan benefit.
    - Hati-hati mengubah struktur `features` karena akan mempengaruhi tampilan checklist.

### B. Artikel & Log Kegiatan (Markdown)

Lokasi: `content/`

Website ini punya 3 jenis konten tulisan:

1.  **`content/blog/`**: Untuk Berita & Rilis Pers.
2.  **`content/research/[kategori]/`**: Untuk Dokumentasi Teknis (Programming, Electrical, Body).
3.  **`content/activities/`**: Untuk Log Harian/Mingguan (Captain's Log).

**Cara Membuat Artikel Baru:**

1.  Copy salah satu file `.md` yang sudah ada.
2.  Rename filenya (Gunakan huruf kecil dan strip, misal: `uji-coba-danau.md`).
3.  Edit bagian paling atas (**Frontmatter**) di antara garis `---`:
    - `title`, `date`, `image`, `description`, `location` (khusus activities).
4.  Tulis isi artikel di bawahnya. Bisa pakai Bold, Italic, List, dll.

---

## BAB 4: MEDIA & GAMBAR (SOP PENTING)

Agar website tidak berat saat dibuka juri:

1.  **Harus .webp:** Jangan upload `.jpg` atau `.png` mentah dari kamera/HP. Convert dulu ke `.webp`. Ukuran file target: **di bawah 500KB**.
2.  **Lokasi Penyimpanan:**
    - Taruh file gambar di folder: **`public/images/`**.
    - Disarankan buat folder lagi di dalamnya biar rapi, misal `public/images/activities/`.
3.  **Cara Memanggil:**
    Di JSON atau Markdown, panggil dengan awalan `/`.
    Contoh: `/images/activities/foto-lomba.webp`.

---

## BAB 5: DEPLOYMENT (Update Website)

Setelah Anda selesai mengedit konten di komputer lokal:

1.  **Matikan Server Lokal:** Tekan `Ctrl + C` di terminal.
2.  **Build Ulang (Wajib):**
    Setiap kali ada perubahan konten, Anda harus me-render ulang website menjadi statis.
    Jalankan perintah:
    ```bash
    npm run generate
    ```
3.  **Tunggu Proses:**
    Sistem akan membaca semua JSON dan Markdown baru Anda, lalu membuat file HTML-nya. Pastikan muncul tulisan hijau **"Build Succeeded"**.
4.  **Upload:**
    - Masuk ke folder `.output/public`.
    - Zip isinya -\> Upload ke Hostinger -\> Extract di `public_html`.

---

## FAQ (Masalah Umum)

**Q: Saya sudah edit JSON, tapi kok di browser tidak berubah?**
A: Jika di localhost, coba refresh browser. Jika masih tidak berubah, matikan server (`Ctrl+C`) lalu `npm run dev` lagi. Jika di hosting, pastikan Anda sudah melakukan `npm run generate` dan mengupload file hasil build yang _baru_.

**Q: Gambarnya tidak muncul (Broken Icon).**
A: Cek nama filenya. Besar kecil huruf (Case Sensitive) sangat berpengaruh. `Foto.jpg` beda dengan `foto.jpg`. Pastikan path diawali garis miring `/`.

**Q: Halaman Research/Blog kosong/putih.**
A: Cek terminal VS Code. Biasanya ada error format di file Markdown (misal kurang tanda petik di judul). Pastikan format Frontmatter (header) sesuai contoh.

**Q: Fitur Search tidak menemukan artikel baru saya.**
A: Fitur Search mengindeks data saat website _pertama kali dibuka_. Coba refresh halaman agar index diperbarui.
