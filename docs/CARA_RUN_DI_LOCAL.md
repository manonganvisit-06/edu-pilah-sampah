# Panduan Menjalankan Website Secara Local

---

# Apa yang Perlu Disiapkan?

Sebelum menjalankan website, install beberapa aplikasi berikut terlebih dahulu.

---

## 1. Install Visual Studio Code (VS Code)

VS Code digunakan untuk membuka dan mengedit source code website.

Download VS Code melalui link berikut:

https://code.visualstudio.com/download

Setelah selesai download:

1. Jalankan file installer
2. Tekan **Next** sampai selesai
3. Saat muncul pilihan:
   - **Add "Open with Code"**
   - **Add to PATH**
   
   centang kedua opsi tersebut agar lebih mudah digunakan.

---

## 2. Install Node.js

Node.js digunakan untuk menjalankan website.

Download Node.js melalui link berikut:

https://nodejs.org/en/download

Disarankan menggunakan versi **LTS**.

Setelah selesai diinstall, npm akan otomatis ikut terinstall.

---

## 3. Install Git

Git digunakan untuk mengambil source code website dari GitHub.

Download Git melalui link berikut:

https://git-scm.com/downloads

Saat proses install, cukup tekan **Next** sampai selesai.

---

# Mengecek Apakah Instalasi Berhasil

Setelah VS Code, Node.js, dan Git selesai diinstall:

1. Buka **Command Prompt** atau **PowerShell**
2. Ketik perintah berikut satu per satu:

```bash
node -v
```

```bash
npm -v
```

```bash
git --version
```

Jika muncul angka versi seperti berikut:

```txt
v18.x.x
9.x.x
git version 2.x.x
```

berarti instalasi berhasil.

---

# Cara Menjalankan Website

## 1. Clone / Download Project

Buka terminal lalu jalankan perintah berikut:

```bash
git clone https://github.com/manonganvisit-06/edu-pilah-sampah.git
```

Perintah tersebut akan mendownload project website ke komputer.

---

## 2. Masuk ke Folder Project

Setelah selesai download, masuk ke folder project dengan perintah:

```bash
cd edu-pilah-sampah
```

---

## 3. Membuka Project di VS Code

Jalankan perintah berikut:

```bash
code .
```

VS Code akan otomatis membuka folder project.

---

# Cara Membuka Terminal di VS Code

Setelah project terbuka di VS Code:

## Cara 1 (Paling Mudah)

Tekan tombol:

```txt
CTRL + `
```

(tombol backtick berada di bawah tombol ESC)

---

## Cara 2

1. Klik menu **Terminal**
2. Pilih **New Terminal**

Terminal akan muncul di bagian bawah VS Code.

---

## 4. Install Semua Kebutuhan Project

Di terminal VS Code, jalankan perintah berikut:

```bash
npm install
```

Tunggu hingga proses selesai.

Proses ini digunakan untuk menginstall semua library yang dibutuhkan website.

---

## 5. Menjalankan Website

Setelah proses install selesai, jalankan website dengan perintah:

```bash
npm run dev
```

Jika berhasil, terminal akan menampilkan tulisan seperti:

```txt
Local: http://localhost:3000
```

---

## 6. Membuka Website di Browser

Buka browser seperti:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

Lalu buka alamat berikut:

```txt
http://localhost:3000
```

Website akan tampil dan dapat digunakan secara local di komputer.

---

# Ringkasan Perintah

```bash
git clone https://github.com/manonganvisit-06/edu-pilah-sampah.git

cd edu-pilah-sampah

code .

npm install

npm run dev
```

---

# Jika Terjadi Error

Jika muncul error saat menjalankan website:

## Windows PowerShell

Jalankan perintah berikut:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

Lalu jalankan kembali:

```bash
npm run dev
```

---

# Cara Menghentikan Website

Untuk menghentikan website yang sedang berjalan:

1. Klik terminal VS Code
2. Tekan:

```txt
CTRL + C
```

# Catatan

- Jangan menutup terminal saat website sedang berjalan.
- Selama terminal masih aktif, website akan tetap berjalan.
- Jika terminal ditutup, website akan otomatis berhenti.