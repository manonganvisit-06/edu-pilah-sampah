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

![Source control](https://i.imgur.com/VbeTWWV.png)

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

![](https://i.imgur.com/qP1CGwJ.png)

---

## 4. Menambahkan File ke Staging

Klik tombol:

```txt
+
```

di samping nama file.

![](https://i.imgur.com/DCA8XKa.png)

Atau blok semua file, klik kanan dan klik:

```txt
Stage Changes
```
![](https://i.imgur.com/YMursN6.png)

untuk menambahkan semua file sekaligus.



Jika berhasil, file akan pindah ke bagian:

```txt
Staged Changes
```

---

## 5. Menulis Commit Message

Pada kolom pesan bagian atas, tuliskan deskripsi perubahan.

![](https://i.imgur.com/6V1GT3U.png)

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

![](https://i.imgur.com/TK0LX51.png)

Jika berhasil, perubahan akan tersimpan ke Git lokal.

---

# Cara Git Push ke GitHub

Setelah commit selesai:

## 1. Klik Tombol Sync / Push

Biasanya tombol commit berubah menjadi tombol:

```txt
Sync Changes
```

atau:

```txt
Publish Branch
```
![](https://i.imgur.com/WuZuSbT.png)

Klik tombol tersebut.

VS Code akan otomatis melakukan:

```txt
git push
```

ke GitHub.

---

## 2. Pemberitahuan

Jika ada pemberitahuan di bawah, klik "OK" atau "OK, Don't Show Again"

![](https://i.imgur.com/87ZBChw.png)

Opsi kedua "OK, Don't Show Again", digunakan ketika ingin agar pesan itu tidak muncul setelah "Sync Changes" atau "Publish Branch".

---
## 3. Tunggu Proses Selesai

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