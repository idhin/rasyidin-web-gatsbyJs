---
date: 2022-03-11
title: 'Melacak lokasi handphone seseorang'
template: post
thumbnail: '../thumbnails/lacak.png'
slug: melacak-keberadaan-orang
categories:
  - Sharing
  - Forensic
  - Mobile Phone
tags:
  - Sharing
  - Forensic
  - Mobile Phone
---

Pernah gak kalian nonton film dimanan ada polisi dengan satu tokoh penjahat. Ada scene dimana polisi tersebut bisa menemukan lokasi si penjahat dengan melacak lokasi handphonenya walaupun si penjahat ini berganti-ganti nomor dan sama sekali tidak menggunakan GPS. Mungkin gakk sih?

Seperti yang kita tau, telfon dan handphone(mobile phone), memerlukan nomor yang kita beli dari perusahaan provider seperti Telkom, Three, Indosat dan yang lain.

Setiap nomor yang kita peroleh diawali angka “0”. <b>0</b> ini mewakili <b>“+62”</b> yang merupakan kode lokasi untuk Indonesia. Pada telfon rumah, kode lokasi lokal dalam negeri dituliskan dengan 3 hingga 4 digit diawalan nomornya, dimana 0 adalah +62. Contohnya <b>021</b> untuk <b>region DKI Jakarta, 022 region Bandung, 0262 region Garut</b> dsb. Kode tersebut dilanjutkan dengan kode sub-region contoh;

>022–203–xxxx -> 022 region Bandung, 203 sub-region wilayah Sukajadi.

>022–780-xxxx -> 022 region Bandung, 780 sub-region wilayah Cijambe.

Nomor handphone pun sama saja. Setiap nomor yang kita gunakan mempunyai awalan sebanyak 6 digit sebagai identitas pembagian wilayahnya, atau juga disebut HLR (Home Location Register). Daftar lengkap HLR di Indonesia bisa dilihat [disini](https://innetzone.id/bisnis/kode-area-hlr-nomor-handphone-indonesia-terlengkap-innet-marketing/).


<b>Namun bagaimana jika kita membeli nomor itu di Garut kemudian menggunakannya di Jakarta ?</b>

Karena nomor HP itu dibawa pergi alias tidak diam di satu tempat, pelacakan dengan hanya menggunakan HLR tidak akan pernah akurat. Pelacakan menggunakan HLR hanya akan menunjukan lokasi kota dimana nomor itu diterbitkan atau diregistrasi, bukan lokasi dimana kita berada sekarang.
Setiap perangkat handphone, tablet dan sejenisnya memiliki seri IMEI, atau kependekan dari International Mobile Equipment Identity. IMEI ini ibarat nomor KTP. Setiap perangkat yang diterbitkan vendor memiliki IMEI yang unik atau tidak sama. IMEI bisa kita lihat pada barcode yang ditempel di kardus handphone atau dibagian dalam handphone dibelakang battery, itulah IMEI milik anda.
Jadi, bagaimana seorang pelaku kejahatan bisa di ketahui lokasinya walaupun ia berganti-ganti nomor dan tidak menggunakan GPS?

<b>MCC, MNC, LAC, CID, BTS.</b>

* MCC (Mobile Country Code). Kode ini mengidentifikasi suatu negara. Contoh, China mempunyai kode MCC=460, Amerika Serikat=310, Indonesia=510. Daftar lengkap MCC seluruh dunia bisa dilihat [disini](http://www.mcc-mnc.com/) .   
* MNC (Mobile Network Code). Ini adalah identitas operator seluler dari nomor HP yang anda gunakan. Contoh, 10 adalah Telkomsel.
* LAC (Location Area Code). Adalah nomor unik dari area lokasi saat ini dan sifatnya berganti-ganti dengan sendirinya. Area lokasi didapat dengan minimal 3 stasiun menara seluler (BTS).
* CID (Cell ID). Adalah nomor unik yang digunakan untuk mengidentifikasi setiap menara Base Transceiver Station (BTS) atau sektor BTS dalam kode area lokasi. Ini juga berganti-ganti.
* BTS (Base Transceiver Station). Pernah melihat tower yang di cat warna merah putih dekat rumah? Itulah BTS.
<p align="center">
  <img src="https://miro.medium.com/max/830/1*BvMmIPsH_vDQ0jcn-m-qaA.jpeg">
</p>

Setiap komunikasi yang kita lakukan menggunakan Handphone seperti SMS panggilan telfon, chatting WA, buka facebook, nonton Youtube dsb, memerlukan BTS. Itulah sebab dimana semakin jarang tower BTS(biasanya di daerah rular/tidak padat penduduk), sinyal menjadi semakin lemah.

Yang perlu digaris-bawahi adalah setiap komunikasi yang kita lakukan, dengan atau tanpa kita sadari handphone kita telah mengirimkan data-data ke BTS seperti nomor HP, IMEI, MCC. Jadi walaupun kita mengganti-ganti nomor, lokasi kita tetap bisa diketahui berangkat dari seri IMEI handphone dan data lainnya yang tidak akan berubah. Jika ingin tidak terlacak, satu-satunya cara adalah setiap selesai menggunakan HP kita harus membuang handphone tersebut.

<b>Bagaimana pelacakan dilakukan?</b>

Metode ini disebut <b>Triangulation</b> atau triangulasi atau pe-nyetiga-an. Tidak sembarang orang bisa melakukannya karena membutuhkan data-data sensitif seperti IMEI, LAC, CID, dll yang hanya diterima-diketahui oleh provider/penyedia jaringan. Namun tetap dapat digunakan oleh kepolisian karena mereka adalah pihak berwenang.

Disebut triangulasi karena terlihat seperti segitiga dengan menggunakan 3 tower BTS yang secara bersamaan terhubung dengan hp kita.

<b>Setiap satu tower BTS memiliki 3 sektor</b>, bisa disebut sektor Alpha, Beta, dan Gamma (a, ß, Y). Setiap sektornya bisa digunakan untuk mengukur berapa jauh lokasi user ke tower BTS.

Berikut adalah contoh kasusnya;
<p align="center">
  <img src="https://miro.medium.com/max/1000/1*QyZH258ETo7P1UHuRcDnWw.png">
</p>

Pada contoh kasus ini, lokasi kita terdeteksi berada di dalam jangkauan “tower oranye” <b>pada sektor Y-nya</b>, dengan jarak posisi kita ke tower adalah sejauh 4mil atau setara dengan <b>6,4 Km</b>.

Karena pada dasarnya kita terhubung dengan 3 BTS, otomatis dalam waktu yang bersamaan kita juga sedang terhubung dengan tower kedua(tower biru).
<p align="center">
  <img src="https://miro.medium.com/max/1000/1*6dGEej5PQhz2F_jsRuWqBw.jpeg">
</p>

Sekarang, lokasi kita sudah semakin diketahui. Kita berada di;

* 4mil/6,4 Km ke tower oranye pada sektor Y-nya, dan
* 5mil/8 Km ke tower biru pada sektor a-nya.

Namun tetap saja lokasi kita berada sekarang masih belum cukup akurat. Disinilah peran tower ke 3 yang akan melengkapi formasi triangulasi.
<p align="center">
  <img src="https://miro.medium.com/max/1000/1*fKc8qKw66KVMUKC0rc40eg.jpeg">
</p>

Posisi kita telah didapatkan (dalam lingkaran merah).

Dengan melihat jarak hp ke tiap-tiap tower(minimal 3 tower), maka akan ditemukan titik dimana handphone kita berada. Jadi walaupun tanpa GPS, lokasi kita tetap bisa ditemukan. Atau sekalipun berganti-ganti nomor, namun data lain (selain nomor hp) tetaplah sama dan selalu tercatatkan.

Begitulah pelacakan dengan metode triangulasi dilakukan. Semoga kita bisa lebih bijak dalam menggunakan perangkat komunikasi yang kita genggam saat ini.

Cheers! 🖐

>Jika ada ide untuk hal-hal yang perlu saya tulis disini, saya sangat terbuka untuk itu. Boleh email saya di [khulafaur@rasyid.in](mailto:khulafaur@rasyid.in). Terimakasih ya 🖐