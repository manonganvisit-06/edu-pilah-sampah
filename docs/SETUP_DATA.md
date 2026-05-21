# Dokumentasi Folder `src/data`

Folder `src/data` digunakan untuk menyimpan data statis yang digunakan oleh website.  
Data pada folder ini dipisahkan berdasarkan fungsi agar lebih mudah dikelola dan diperbarui.

---

# Struktur Folder

Contoh struktur folder:

```txt
src
└── data
    ├── info.js
    ├── location.js
    ├── price.js
    ├── videos.js
    └── web_name.js
```

---

# Penjelasan File

## 1. `info.js`

File ini digunakan untuk menyimpan informasi utama website yang ditampilkan pada bagian **Tentang**.

Data yang disimpan meliputi:

- Nama pemilik
- Nomor telepon
- Alamat

Contoh:

```js
{
    "alamat": "Sidoharjo, Kendal, Bangun Kerto, Turi, Sleman",
    "telp" : "+62 856-4192-9820",
    "nama" : "Nuril"
}
```

Contoh penggunaan:

```js
import info from "@/data/info";

<p>{info.alamat}</p>
<p>{info.telp}</p>
<p>{info.nama}</p>
```

---

## 2. `location.js`

File ini digunakan untuk menyimpan data lokasi berupa:

- Latitude
- Longitude
- Link embed Google Maps

Data ini digunakan untuk fitur peta lokasi pada website.

Contoh:

```js
{
    "lat": -7.653412,
    "long": 110.35202
}
```

Contoh penggunaan:

```js
import location from "@/data/location";

<iframe
    className="w-full h-full rounded-xl shadow-md"
    src={`https://www.google.com/maps?q=${location.lat},${location.long}&output=embed`}
    loading="lazy"
></iframe>
```

---

## 3. `price.js`

File ini digunakan untuk menyimpan daftar harga sampah yang digunakan pada fitur kalkulator.

Contoh:

```js
[
  {
    "id": 1,
    "name": "Besi Super",
    "price": 4600
  },
  {
    "id": 2,
    "name": "Besi Stal",
    "price": 3000
  }
]
```

Contoh penggunaan:

```js
import price from "@/data/price";
```

Data ini biasanya digunakan untuk:

- Kalkulator sampah
- Daftar harga
- Perhitungan total

---

## 4. `videos.js`

File ini digunakan untuk menyimpan daftar video dari youtube yang ditampilkan pada website. Hal ini mengharuskan adanya **Video ID** dari link YouTube.

Contoh link video:

```txt
https://www.youtube.com/watch?v=nrANKUUHBf0
```

Bagian yang digunakan adalah:

```txt
nrANKUUHBf0
```

Bagian tersebut disebut sebagai **Video ID**.

Contoh:

```js
[
  {
    "title": "Edukasi Pemilahan Sampah Organik dan AnOrganik by RSA UGM",
    "videoId": "nrANKUUHBf0"
  },
  {
    "title": "Sosialisasi Pengelolaan Sampah di FK-KMK UGM",
    "videoId": "CucL5NjXE2A"
  },
  {
    "title": "Pemilahan Sampah Anorganik",
    "videoId": "hUnGg7juRC4"
  }
]
```

Contoh penggunaan:

```js
import videos from "@/data/videos";
```

---

## 5. `web_name.js`

File ini digunakan untuk menyimpan nama website atau logo text yang digunakan pada navbar.

Contoh:

```js
{
    "nama_web" : "Pilah Sampah"
}
```

Contoh penggunaan:

```js
import webName from "@/data/web_name";

<h1>{webName}</h1>
```

# Catatan

- Gunakan nama file yang jelas sesuai fungsi data.
- Simpan hanya data statis pada folder ini.
- Gunakan format data yang konsisten agar mudah digunakan pada komponen React atau Next.js.