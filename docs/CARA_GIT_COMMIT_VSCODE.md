# Panduan Git Commit dan Git Push Menggunakan VS Code

Panduan ini menjelaskan cara melakukan `git commit` dan `git push` menggunakan tampilan Visual Studio Code tanpa menggunakan terminal.

---

# Sebelum Memulai

Pastikan:

- Git sudah terinstall
- Project sudah berhasil di-clone
- Project sudah dibuka di VS Code
- Sudah login GitHub pada VS Code

---

# Cara Login GitHub di VS Code

Jika belum login GitHub:

1. Buka VS Code
2. Klik ikon **Account** di pojok kiri bawah
3. Pilih:

```txt
Sign in with GitHub
```

4. Browser akan terbuka
5. Login ke akun GitHub
6. Klik **Authorize Visual Studio Code**

Jika berhasil, akun GitHub akan tampil di VS Code.

---

# Cara Melakukan Git Commit

## 1. Lakukan Perubahan File

Edit atau tambahkan file pada project.

Contoh:

- Mengubah teks website
- Menambahkan gambar
- Mengubah data

---

## 2. Buka Menu Source Control

Di sidebar kiri VS Code, klik ikon:

```txt
Source Control
```

Ikonnya berbentuk:

```txt
Cabang Git
```

atau tekan shortcut:

```txt
CTRL + SHIFT + G
```

---

## 3. Melihat File yang Berubah

Pada bagian:

```txt
Changes
```

akan muncul daftar file yang berubah.

Contoh:

```txt
src/data/info.js
README.md
```

---

## 4. Menambahkan File ke Staging

Klik tombol:

```txt
+
```

di samping nama file.

Atau klik:

```txt
Stage All Changes
```

untuk menambahkan semua file sekaligus.

Jika berhasil, file akan pindah ke bagian:

```txt
Staged Changes
```

---

## 5. Menulis Commit Message

Pada kotak pesan bagian atas, tuliskan deskripsi perubahan.

Contoh:

```txt
Update data harga sampah
```

atau:

```txt
Menambahkan video edukasi
```

---

## 6. Melakukan Commit

Klik tombol:

```txt
Commit
```

atau ikon:

```txt
✔
```

Jika berhasil, perubahan akan tersimpan ke Git lokal.

---

# Cara Git Push ke GitHub

Setelah commit selesai:

## 1. Klik Tombol Sync / Push

Biasanya muncul tombol:

```txt
Sync Changes
```

atau:

```txt
Publish Branch
```

Klik tombol tersebut.

VS Code akan otomatis melakukan:

```txt
git push
```

ke GitHub.

---

## 2. Tunggu Proses Selesai

Jika berhasil:

- Tidak ada error
- File akan terupload ke GitHub
- Repository GitHub otomatis terupdate

---

# Cara Mengecek Apakah Push Berhasil

1. Buka repository GitHub
2. Refresh halaman
3. Pastikan file terbaru sudah muncul

---

# Ilustrasi Alur Kerja

```txt
Edit File
   ↓
Source Control
   ↓
Stage Changes
   ↓
Commit
   ↓
Sync Changes / Push
   ↓
GitHub Terupdate
```

---

# Catatan Penting

- Commit hanya menyimpan perubahan di komputer lokal.
- Push digunakan untuk mengupload perubahan ke GitHub.
- Jika lupa melakukan push, perubahan tidak akan muncul di GitHub.

---

# Tips

Gunakan commit message yang jelas.

Contoh yang baik:

```txt
Menambahkan fitur kalkulator
```

```txt
Memperbaiki tampilan navbar
```

```txt
Update data lokasi bank sampah
```

Hindari commit message seperti:

```txt
update
```

```txt
fix
```

karena kurang jelas.