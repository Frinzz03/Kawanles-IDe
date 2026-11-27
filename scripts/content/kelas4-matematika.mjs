import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: PENDALAMAN BILANGAN
  {
    topicCode: 'MAT-SD4-01', subSeq: 1,
    objectives: ['Siswa mampu membaca dan menuliskan lambang bilangan cacah sampai 10.000 dengan tepat dalam berbagai konteks.'],
    materialTitle: 'Bilangan Cacah sampai 10.000',
    blocks: [
      { type: 'text', text: 'Di kelas 4, kita memperdalam pemahaman bilangan cacah sampai 10.000. Tanda titik (.) memisahkan angka ribuan dari ratusan agar mudah dibaca, seperti pada harga barang, jarak, atau jumlah penduduk.' },
      { type: 'flashcards', title: 'Uji Cepat Baca & Tulis Bilangan (Klik!)', cards: [
        { emoji: '🏷️', front: '4.075', back: 'Empat ribu tujuh puluh lima' },
        { emoji: '🏷️', front: '6.809', back: 'Enam ribu delapan ratus sembilan' },
        { emoji: '🏷️', front: '9.004', back: 'Sembilan ribu empat' },
        { emoji: '🎯', front: 'Sepuluh ribu', back: '10.000' },
      ]},
      { type: 'misconception', wrong: 'Menulis "tujuh ribu lima puluh" menjadi 7.500 atau 750.', right: 'Ratusannya nol sehingga harus ditulis 0 di tempat ratusan: 7.050!' },
    ],
    activityTitle: 'Latihan: Bilangan sampai 10.000',
    questions: [
      { text: 'Lambang bilangan dari "delapan ribu tiga puluh enam" adalah...', opts: ['8.360', '8.036', '8.306', '80.36'], ans: 1, exp: '8 ribuan, 0 ratusan, 3 puluhan, 6 satuan = 8.036.' },
      { text: 'Bilangan 5.902 dibaca...', opts: ['Lima ribu sembilan puluh dua', 'Lima ribu sembilan ratus dua', 'Lima puluh sembilan dua', 'Lima ribu dua ratus sembilan'], ans: 1, exp: '5.902 memiliki 9 ratusan dan 0 puluhan → lima ribu sembilan ratus dua.' },
      { text: 'Harga sekotak kue pudak Gresik adalah Rp9.500. Jika ditulis dalam huruf adalah...', opts: ['Sembilan ribu lima puluh rupiah', 'Sembilan ribu lima ratus rupiah', 'Sembilan ratus lima puluh rupiah', 'Lima ribu sembilan ratus rupiah'], ans: 1, exp: '9.500 = sembilan ribu lima ratus.' },
      { text: 'Bilangan tepat sebelum 4.000 adalah...', opts: ['3.900', '3.990', '3.999', '4.001'], ans: 2, exp: '4.000 − 1 = 3.999.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-01', subSeq: 2,
    objectives: ['Siswa mampu menentukan nilai tempat dan nilai angka pada bilangan 4 digit sampai 10.000.'],
    materialTitle: 'Nilai Tempat dan Nilai Angka',
    blocks: [
      { type: 'table', title: 'Pembedaan Nilai Tempat vs Nilai Angka', headers: ['Bilangan', 'Angka', 'Nilai Tempat', 'Nilai Angka'], rows: [
        ['7.428', '7', 'Ribuan', '7.000'],
        ['7.428', '4', 'Ratusan', '400'],
        ['7.428', '2', 'Puluhan', '20'],
        ['7.428', '8', 'Satuan', '8'],
      ]},
      { type: 'worked_example', level: 'Menengah', question: 'Berapa jumlah nilai angka 6 pada bilangan 6.265?', steps: ['Angka 6 pertama di ribuan = 6.000.', 'Angka 6 kedua di puluhan = 60.', 'Jumlahnya: 6.000 + 60 = 6.060.'], answer: '6.060' },
    ],
    activityTitle: 'Latihan: Nilai Tempat',
    questions: [
      { text: 'Pada bilangan 4.835, angka 8 menempati nilai tempat...', opts: ['Ribuan', 'Ratusan', 'Puluhan', 'Satuan'], ans: 1, exp: 'Posisi ketiga dari kanan adalah ratusan.' },
      { text: 'Selisih nilai angka 7 pada bilangan 7.270 adalah...', opts: ['6.930', '6.300', '7.070', '0'], ans: 0, exp: '7.000 − 70 = 6.930.' },
      { text: 'Bilangan yang tersusun atas 5 ribuan, 0 ratusan, 9 puluhan, dan 3 satuan adalah...', opts: ['5.930', '5.093', '5.903', '593'], ans: 1, exp: '5.000 + 0 + 90 + 3 = 5.093.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-01', subSeq: 3,
    objectives: ['Siswa mampu membandingkan dan mengurutkan bilangan cacah sampai 10.000 secara akurat.'],
    materialTitle: 'Perbandingan dan Pengurutan Bilangan',
    blocks: [
      { type: 'list', title: 'Aturan Emas Membandingkan Bilangan', items: ['1. Cek jumlah digitnya dulu: bilangan 4 digit selalu lebih besar dari 3 digit (mis. 1.000 > 999).', '2. Jika sama-sama 4 digit, bandingkan mulai dari KIRI (ribuan → ratusan → puluhan → satuan).', '3. Gunakan tanda > (lebih besar), < (lebih kecil), atau = (sama dengan).'] },
      { type: 'worked_example', level: 'Dasar', question: 'Urutkan dari TERBESAR: 6.420, 6.240, 6.402, 6.042', steps: ['Semua ribuan sama (6). Lihat ratusan: 6.420 dan 6.402 punya ratusan 4.', 'Antara 6.420 dan 6.402: puluhan 2 > 0 → 6.420 paling besar, lalu 6.402.', 'Berikutnya ratusan 2 (6.240), terakhir ratusan 0 (6.042).'], answer: '6.420, 6.402, 6.240, 6.042' },
    ],
    activityTitle: 'Latihan: Perbandingan & Pengurutan',
    questions: [
      { text: 'Tanda perbandingan yang tepat untuk 7.308 ... 7.380 adalah...', opts: ['>', '<', '=', '÷'], ans: 1, exp: 'Ribuan dan ratusan sama (73), tetapi puluhan 0 < 8 → 7.308 < 7.380.' },
      { text: 'Urutan dari TERKECIL untuk 3.510, 3.150, 3.501, 3.051 adalah...', opts: ['3.051, 3.150, 3.501, 3.510', '3.510, 3.501, 3.150, 3.051', '3.051, 3.501, 3.150, 3.510', '3.150, 3.051, 3.501, 3.510'], ans: 0, exp: 'Ratusan & puluhan naik urut: 051, 150, 501, 510.' },
      { text: 'Bilangan TERBESAR yang dapat dibentuk dari angka 2, 7, 0, 5 (masing-masing sekali) adalah...', opts: ['7.502', '7.520', '7.250', '5.720'], ans: 1, exp: 'Susun angka dari terbesar ke terkecil: 7.520.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-01', subSeq: 4,
    objectives: ['Siswa mampu melakukan komposisi dan dekomposisi bilangan cacah secara fleksibel (termasuk nilai uang).'],
    materialTitle: 'Komposisi dan Dekomposisi Bilangan',
    blocks: [
      { type: 'worked_example', level: 'Aplikasi Uang', question: 'Dekomposisikan Rp8.750 menjadi pecahan uang kertas dan koin!', steps: ['Bentuk standar: 8.000 + 700 + 50.', 'Dalam uang rupiah: Rp5.000 + Rp2.000 + Rp1.000 + Rp500 + Rp200 + Rp50 (atau Rp8.500 + Rp250).'], answer: 'Satu bilangan bisa didekomposisi dengan lebih dari satu cara yang nilainya tetap sama!' },
      { type: 'flashcards', title: 'Cek Komposisi & Dekomposisi (Klik!)', cards: [
        { emoji: '🧩', front: '4.000 + 600 + 70 + 2 = ...', back: '4.672' },
        { emoji: '🧩', front: '5.300 = 4.000 + ...', back: '1.300' },
        { emoji: '💵', front: '3 lembar Rp2.000 + 2 koin Rp500 = ...', back: 'Rp7.000' },
      ]},
    ],
    activityTitle: 'Latihan: Komposisi & Dekomposisi',
    questions: [
      { text: 'Hasil komposisi dari 7.000 + 400 + 9 adalah...', opts: ['7.490', '7.409', '7.049', '749'], ans: 1, exp: '7 ribuan, 4 ratusan, 0 puluhan, 9 satuan = 7.409.' },
      { text: 'Bilangan 6.250 dapat didekomposisi menjadi 5.000 + ...', opts: ['250', '1.250', '2.250', '1.050'], ans: 1, exp: '5.000 + 1.250 = 6.250.' },
      { text: 'Alya memiliki 1 lembar Rp5.000, 1 lembar Rp2.000, dan 3 koin Rp500. Total uang Alya adalah...', opts: ['Rp7.500', 'Rp8.500', 'Rp9.500', 'Rp8.000'], ans: 1, exp: '5.000 + 2.000 + 1.500 = Rp8.500.' },
    ],
  },

  // BAB 2: OPERASI HITUNG BILANGAN
  {
    topicCode: 'MAT-SD4-02', subSeq: 1,
    objectives: ['Siswa mampu menyelesaikan penjumlahan dan pengurangan bilangan sampai 1.000 dengan akurat termasuk meminjam beruntun.'],
    materialTitle: 'Penjumlahan dan Pengurangan sampai 1.000',
    blocks: [
      { type: 'worked_example', level: 'Meminjam dari Nol', question: 'Hitung 700 − 246 dengan mudah!', steps: ['Cara bersusun: pinjam dari 700 (jadi 6 ratusan, 9 puluhan, 10 satuan).', 'Satuan: 10 − 6 = 4. Puluhan: 9 − 4 = 5. Ratusan: 6 − 2 = 4.', 'Trik cepat: kurangi keduanya dengan 1 → 699 − 245 = 454 (tanpa meminjam!).'], answer: '454' },
      { type: 'tip', text: 'Trik anti-bingung pengurangan angka 00: kurangi kedua bilangan dengan 1 dulu! 500 − 168 sama hasilnya dengan 499 − 167 = 332!' },
    ],
    activityTitle: 'Latihan: Penjumlahan & Pengurangan 1.000',
    questions: [
      { text: '478 + 369 = ...', opts: ['837', '847', '747', '857'], ans: 1, exp: '8+9=17, 1+7+6=14, 1+4+3=8 → 847.' },
      { text: '600 − 238 = ...', opts: ['362', '372', '462', '352'], ans: 0, exp: 'Trik: 599 − 237 = 362.' },
      { text: '524 − 187 + 145 = ...', opts: ['472', '482', '492', '382'], ans: 1, exp: '524 − 187 = 337; 337 + 145 = 482.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-02', subSeq: 2,
    objectives: ['Siswa mampu menyelesaikan perkalian bersusun dan pembagian bersusun (porogapit) bilangan sampai 100 dengan sisa maupun habis dibagi.'],
    materialTitle: 'Perkalian dan Pembagian sampai 100',
    blocks: [
      { type: 'worked_example', level: 'Perkalian Bersusun', question: 'Hitung 26 × 3!', steps: ['Kalikan satuan: 6 × 3 = 18 (tulis 8, simpan 1 puluhan).', 'Kalikan puluhan: 2 × 3 = 6, tambah simpanan 1 = 7.', 'Hasil: 78.'], answer: '78' },
      { type: 'worked_example', level: 'Pembagian Bersusun', question: 'Hitung 96 ÷ 4!', steps: ['Bagi puluhan: 9 ÷ 4 = 2 (karena 2 × 4 = 8), sisa 1 puluhan.', 'Turunkan 6 satuan sehingga menjadi 16.', 'Bagi 16 ÷ 4 = 4, sisa 0.'], answer: '24' },
    ],
    activityTitle: 'Latihan: Perkalian & Pembagian 100',
    questions: [
      { text: '18 × 5 = ...', opts: ['80', '85', '90', '95'], ans: 2, exp: '(10 × 5) + (8 × 5) = 50 + 40 = 90.' },
      { text: '75 ÷ 3 = ...', opts: ['20', '25', '35', '15'], ans: 1, exp: '7 ÷ 3 = 2 sisa 1 → 15 ÷ 3 = 5 → hasil 25.' },
      { text: 'Hasil dari 29 ÷ 4 adalah...', opts: ['7 sisa 1', '6 sisa 5', '7 sisa 2', '8 sisa 1'], ans: 0, exp: '4 × 7 = 28, sisa 29 − 28 = 1.' },
      { text: '24 × 4 = ...', opts: ['86', '92', '96', '104'], ans: 2, exp: '20×4 = 80, 4×4 = 16 → 96.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-02', subSeq: 3,
    objectives: ['Siswa mampu menerapkan sifat komutatif, asosiatif, dan distributif untuk mempermudah perhitungan.'],
    materialTitle: 'Sifat Operasi Hitung Dasar',
    blocks: [
      { type: 'table', title: '3 Sifat Operasi Hitung', headers: ['Sifat', 'Artinya', 'Contoh', 'Berlaku Untuk'], rows: [
        ['Komutatif (Pertukaran)', 'Urutan boleh ditukar', '15 + 28 = 28 + 15; 6 × 9 = 9 × 6', 'Tambah (+) & Kali (×)'],
        ['Asosiatif (Pengelompokan)', 'Tanda kurung boleh dipindah', '(12 + 8) + 25 = 12 + (8 + 25)', 'Tambah (+) & Kali (×)'],
        ['Distributif (Penyebaran)', 'Perkalian disebar ke dalam kurung', '4 × (10 + 5) = (4×10) + (4×5) = 60', '× terhadap + dan −'],
      ]},
      { type: 'misconception', wrong: 'Mengira sifat komutatif berlaku pada pengurangan dan pembagian (mis. 8 − 3 = 3 − 8).', right: 'Komutatif dan asosiatif HANYA berlaku untuk penjumlahan (+) dan perkalian (×), TIDAK untuk − dan ÷!' },
    ],
    activityTitle: 'Latihan: Sifat Operasi Hitung',
    questions: [
      { text: '17 × 5 = 5 × 17 menunjukkan sifat operasi hitung...', opts: ['Asosiatif', 'Komutatif', 'Distributif', 'Pengurangan'], ans: 1, exp: 'Menukar posisi bilangan adalah sifat komutatif.' },
      { text: 'Menurut sifat distributif, 6 × (10 + 4) sama dengan...', opts: ['(6 × 10) + 4', '(6 × 10) + (6 × 4)', '(6 + 10) × (6 + 4)', '6 × 10 × 4'], ans: 1, exp: '6 dikalikan ke masing-masing suku dalam kurung: 60 + 24 = 84.' },
      { text: 'Operasi hitung yang TIDAK bersifat komutatif adalah...', opts: ['Penjumlahan', 'Perkalian', 'Pengurangan dan pembagian', 'Penjumlahan ratusan'], ans: 2, exp: 'Contoh: 10 − 4 ≠ 4 − 10 dan 12 ÷ 3 ≠ 3 ÷ 12.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-02', subSeq: 4,
    objectives: ['Siswa mampu menyelesaikan soal cerita 2 tahap menggunakan operasi hitung campuran sederhana.'],
    materialTitle: 'Soal Cerita Bertahap (2 Langkah)',
    blocks: [
      { type: 'worked_example', level: 'HOTS Ringan', question: 'Bu Sari membuat 8 loyang kue, tiap loyang dipotong menjadi 12 potong. Jika 35 potong sudah dibeli tetangga, berapa sisa kue Bu Sari?', steps: ['Tahap 1 (Total kue): 8 × 12 = 96 potong.', 'Tahap 2 (Sisa kue): 96 − 35 = 61 potong.'], answer: '61 potong kue.' },
      { type: 'tip', text: 'Aturan operasi campuran: kerjakan tanda kurung dulu, lalu Kali/Bagi (×/÷), terakhir Tambah/Kurang (+/−).' },
    ],
    activityTitle: 'Latihan: Soal Cerita Bertahap',
    questions: [
      { text: 'Pak Budi memanen 6 keranjang mangga. Tiap keranjang berisi 15 buah. Jika 20 mangga diberikan ke saudara, sisa mangga Pak Budi adalah...', opts: ['60', '70', '80', '90'], ans: 1, exp: '6 × 15 = 90; 90 − 20 = 70 buah.' },
      { text: 'Dina membawa uang Rp10.000. Ia membeli 3 buku tulis seharga Rp2.500 per buku. Uang kembalian Dina adalah...', opts: ['Rp2.000', 'Rp2.500', 'Rp3.000', 'Rp3.500'], ans: 1, exp: 'Total belanja 3 × 2.500 = 7.500; kembalian 10.000 − 7.500 = Rp2.500.' },
      { text: 'Ada 48 siswa kelas 4A dan 42 siswa kelas 4B. Seluruh siswa dibagi rata menjadi 9 kelompok. Tiap kelompok berisi ... siswa.', opts: ['8', '9', '10', '11'], ans: 2, exp: '(48 + 42) ÷ 9 = 90 ÷ 9 = 10 siswa.' },
    ],
  },

  // BAB 3: FAKTOR DAN KELIPATAN
  {
    topicCode: 'MAT-SD4-03', subSeq: 1,
    objectives: ['Siswa mampu menentukan semua faktor dari suatu bilangan cacah menggunakan pasangan perkalian.'],
    materialTitle: 'Faktor Bilangan',
    blocks: [
      { type: 'text', text: 'Faktor suatu bilangan adalah semua bilangan asli yang dapat MEMBAGI HABIS bilangan tersebut tanpa sisa.' },
      { type: 'worked_example', level: 'Cara Tabel Pasangan', question: 'Tentukan semua faktor dari 18!', steps: ['Cari pasangan perkalian yang hasilnya 18 mulai dari 1:', '1 × 18 = 18', '2 × 9 = 18', '3 × 6 = 18 (4 dan 5 tidak habis membagi 18).'], answer: 'Faktor dari 18 adalah 1, 2, 3, 6, 9, dan 18.' },
      { type: 'tip', text: 'Setiap bilangan selalu punya faktor 1 dan dirinya sendiri!' },
    ],
    activityTitle: 'Latihan: Faktor Bilangan',
    questions: [
      { text: 'Semua faktor dari bilangan 12 adalah...', opts: ['1, 2, 3, 4, 6, 12', '1, 2, 4, 6, 12', '2, 3, 4, 6', '1, 3, 4, 12'], ans: 0, exp: '1×12, 2×6, 3×4 → faktornya 1, 2, 3, 4, 6, 12.' },
      { text: 'Manakah yang BUKAN faktor dari 20?', opts: ['2', '4', '5', '6'], ans: 3, exp: '20 ÷ 6 = 3 sisa 2 (tidak habis dibagi).' },
      { text: 'Faktor persekutuan (faktor yang sama) dari 8 dan 12 adalah...', opts: ['1, 2, 4', '1, 2, 3, 4', '2, 4, 8', '1, 4, 6'], ans: 0, exp: 'Faktor 8 = {1,2,4,8}, faktor 12 = {1,2,3,4,6,12} → yang sama: 1, 2, 4.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-03', subSeq: 2,
    objectives: ['Siswa mampu menentukan kelipatan dan kelipatan persekutuan dari bilangan cacah sederhana.'],
    materialTitle: 'Kelipatan Bilangan',
    blocks: [
      { type: 'text', text: 'Kelipatan suatu bilangan diperoleh dengan mengalikan bilangan tersebut dengan 1, 2, 3, 4, ... (atau loncat menambahkan bilangan itu terus-menerus).' },
      { type: 'table', title: 'Contoh Kelipatan', headers: ['Bilangan', '5 Kelipatan Pertama'], rows: [
        ['3', '3, 6, 9, 12, 15'],
        ['4', '4, 8, 12, 16, 20'],
        ['6', '6, 12, 18, 24, 30'],
      ]},
      { type: 'tip', text: 'Lihat baris 3 dan 4 di atas! Angka 12 muncul di keduanya → 12 adalah KELIPATAN PERSEKUTUAN pertama dari 3 dan 4!' },
    ],
    activityTitle: 'Latihan: Kelipatan Bilangan',
    questions: [
      { text: 'Empat kelipatan pertama dari 7 adalah...', opts: ['7, 14, 21, 28', '7, 14, 20, 28', '1, 7, 14, 21', '7, 8, 9, 10'], ans: 0, exp: '7×1=7, 7×2=14, 7×3=21, 7×4=28.' },
      { text: 'Kelipatan dari 6 yang berada di antara 20 dan 35 adalah...', opts: ['24 dan 30', '22 dan 28', '24 dan 36', '18 dan 24'], ans: 0, exp: '6×4 = 24, 6×5 = 30 (keduanya antara 20 dan 35).' },
      { text: 'Kelipatan persekutuan terkecil pertama dari 4 dan 6 adalah...', opts: ['8', '10', '12', '24'], ans: 2, exp: 'Kelipatan 4: 4, 8, 12...; Kelipatan 6: 6, 12... → sama pertama di 12.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-03', subSeq: 3,
    objectives: ['Siswa mampu menerapkan konsep faktor (pembagian bingkisan) dan kelipatan (jadwal bertemu lagi) dalam soal cerita sederhana.'],
    materialTitle: 'Penerapan Faktor dan Kelipatan',
    blocks: [
      { type: 'worked_example', level: 'Penerapan Kelipatan', question: 'Alya les matematika setiap 3 hari sekali, sedangkan Bima setiap 4 hari sekali. Jika hari ini mereka les bersama, berapa hari lagi mereka bertemu lagi?', steps: ['Cari kelipatan 3: 3, 6, 9, 12, ...', 'Cari kelipatan 4: 4, 8, 12, ...', 'Angka sama pertama adalah 12.'], answer: '12 hari lagi.' },
      { type: 'worked_example', level: 'Penerapan Faktor', question: 'Ibu punya 16 kue pudak yang ingin dimasukkan sama banyak ke beberapa kotak tanpa sisa. Berapa saja pilihan jumlah kotak yang mungkin?', steps: ['Cari faktor dari 16: 1, 2, 4, 8, 16.'], answer: 'Bisa 1, 2, 4, 8, atau 16 kotak.' },
    ],
    activityTitle: 'Latihan: Masalah Faktor & Kelipatan',
    questions: [
      { text: 'Lampu A berkedip setiap 2 detik, lampu B setiap 5 detik. Jika sekarang berkedip bersamaan, mereka berkedip bersamaan lagi setelah ... detik.', opts: ['7', '10', '12', '15'], ans: 1, exp: 'Kelipatan sama pertama dari 2 dan 5 adalah 10.' },
      { text: 'Pak Guru memiliki 24 buku yang akan dibagikan sama rata ke beberapa kelompok tanpa sisa. Jumlah kelompok yang TIDAK mungkin adalah...', opts: ['4 kelompok', '6 kelompok', '5 kelompok', '8 kelompok'], ans: 2, exp: '5 bukan faktor dari 24 (24 ÷ 5 bersisa 4).' },
      { text: 'Soal cerita tentang "kapan dua orang bertemu bersama lagi" diselesaikan dengan mencari...', opts: ['Faktor bilangan', 'Kelipatan persekutuan', 'Pengurangan', 'Luas'], ans: 1, exp: 'Jadwal berulang menggunakan konsep kelipatan.' },
    ],
  },

  // BAB 4: PECAHAN DAN DESIMAL
  {
    topicCode: 'MAT-SD4-04', subSeq: 1,
    objectives: ['Siswa mampu membandingkan dua pecahan (penyebut sama, pembilang sama, dan penyebut berbeda dengan kali silang/samakan penyebut).'],
    materialTitle: 'Membandingkan Pecahan',
    blocks: [
      { type: 'interactive_fraction', title: 'Bandingkan Besar Bagian Pecahan Secara Visual!', initialNum: 3, initialDen: 5, maxDen: 10 },
      { type: 'worked_example', level: 'Penyebut Berbeda', question: 'Bandingkan 2/3 dan 3/5!', steps: ['Samakan penyebut ke 15 (atau kali silang):', '2/3 = 10/15 dan 3/5 = 9/15.', 'Karena 10/15 > 9/15, maka 2/3 > 3/5.'], answer: '2/3 > 3/5' },
    ],
    activityTitle: 'Latihan: Membandingkan Pecahan',
    questions: [
      { text: 'Tanda yang tepat untuk 3/4 ... 2/3 adalah...', opts: ['>', '<', '=', '+'], ans: 0, exp: 'Samakan penyebut 12: 3/4 = 9/12 dan 2/3 = 8/12 → 9/12 > 8/12.' },
      { text: 'Manakah pecahan yang lebih besar antara 1/4 dan 1/6?', opts: ['1/4', '1/6', 'Sama besar', 'Tidak bisa dibandingkan'], ans: 0, exp: 'Pembilang sama (1), penyebut lebih kecil nilainya lebih besar: 1/4 > 1/6.' },
      { text: 'Tanda yang tepat untuk 2/5 ... 4/10 adalah...', opts: ['>', '<', '=', '÷'], ans: 2, exp: '2/5 = 4/10 (pecahan senilai).' },
    ],
  },
  {
    topicCode: 'MAT-SD4-04', subSeq: 2,
    objectives: ['Siswa mampu mencari pecahan senilai dengan mengalikan atau membagi pembilang dan penyebut dengan bilangan sama, serta menyederhanakan pecahan.'],
    materialTitle: 'Pecahan Senilai dan Penyederhanaan',
    blocks: [
      { type: 'formula', name: 'Cara Mencari & Menyederhanakan Pecahan Senilai', expression: 'a/b = (a × n)/(b × n)  atau  (a ÷ n)/(b ÷ n)', note: 'Pembilang dan penyebut HARUS dikali atau dibagi dengan angka yang sama!' },
      { type: 'worked_example', level: 'Menyederhanakan', question: 'Sederhanakan pecahan 8/12 ke bentuk paling sederhana!', steps: ['Cari faktor pembagi terbesar 8 dan 12, yaitu 4.', 'Bagi atas dan bawah dengan 4: (8 ÷ 4) / (12 ÷ 4) = 2/3.'], answer: '2/3' },
    ],
    activityTitle: 'Latihan: Pecahan Senilai',
    questions: [
      { text: 'Bentuk paling sederhana dari 6/9 adalah...', opts: ['3/9', '2/3', '1/3', '3/2'], ans: 1, exp: 'Bagi pembilang dan penyebut dengan 3 → 2/3.' },
      { text: 'Jika 3/4 = .../16, maka pembilang yang tepat adalah...', opts: ['9', '12', '8', '15'], ans: 1, exp: '4 × 4 = 16, maka 3 × 4 = 12 → 12/16.' },
      { text: 'Pecahan yang TIDAK senilai dengan 1/2 adalah...', opts: ['3/6', '4/8', '5/10', '3/8'], ans: 3, exp: '3/8 bukan setengah (setengah dari 8 adalah 4/8).' },
    ],
  },
  {
    topicCode: 'MAT-SD4-04', subSeq: 3,
    objectives: ['Siswa mampu mengurutkan sekumpulan pecahan dari terkecil maupun terbesar.'],
    materialTitle: 'Mengurutkan Pecahan',
    blocks: [
      { type: 'worked_example', level: 'Samakan Penyebut', question: 'Urutkan dari TERKECIL: 1/2, 3/4, 3/8', steps: ['Samakan semua penyebut menjadi 8:', '1/2 = 4/8, 3/4 = 6/8, 3/8 = 3/8.', 'Urutkan pembilangnya: 3/8 < 4/8 < 6/8.'], answer: '3/8, 1/2, 3/4' },
    ],
    activityTitle: 'Latihan: Mengurutkan Pecahan',
    questions: [
      { text: 'Urutan dari TERKECIL untuk 5/7, 2/7, 6/7, 3/7 adalah...', opts: ['2/7, 3/7, 5/7, 6/7', '6/7, 5/7, 3/7, 2/7', '2/7, 5/7, 3/7, 6/7', '3/7, 2/7, 5/7, 6/7'], ans: 0, exp: 'Penyebut sama (7), langsung urutkan pembilang: 2, 3, 5, 6.' },
      { text: 'Urutan dari TERKECIL untuk 1/2, 1/4, 5/8 adalah...', opts: ['1/4, 1/2, 5/8', '1/2, 1/4, 5/8', '5/8, 1/2, 1/4', '1/4, 5/8, 1/2'], ans: 0, exp: 'Ubah ke /8: 2/8 (1/4), 4/8 (1/2), 5/8.' },
      { text: 'Urutan dari TERBESAR untuk 1/3, 1/2, 1/5 adalah...', opts: ['1/5, 1/3, 1/2', '1/2, 1/3, 1/5', '1/3, 1/2, 1/5', '1/2, 1/5, 1/3'], ans: 1, exp: 'Pembilang 1: makin kecil penyebut, makin besar nilainya.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-04', subSeq: 4,
    objectives: ['Siswa mampu mengubah pecahan biasa ke desimal (persepuluhan & perseratusan) dan sebaliknya.'],
    materialTitle: 'Hubungan Pecahan dan Desimal',
    blocks: [
      { type: 'table', title: 'Konversi Pecahan Istimewa ↔ Desimal', headers: ['Pecahan Biasa', 'Diubah ke /10 atau /100', 'Bentuk Desimal'], rows: [
        ['1/2', '5/10', '0,5'],
        ['1/4', '25/100', '0,25'],
        ['3/4', '75/100', '0,75'],
        ['1/5', '2/10', '0,2'],
        ['3/10', '3/10', '0,3'],
      ]},
      { type: 'tip', text: '1 angka di belakang koma = persepuluhan (/10). 2 angka di belakang koma = perseratusan (/100).' },
    ],
    activityTitle: 'Latihan: Pecahan & Desimal',
    questions: [
      { text: 'Bentuk desimal dari 3/4 adalah...', opts: ['0,34', '0,75', '0,25', '0,5'], ans: 1, exp: '3/4 = (3×25)/(4×25) = 75/100 = 0,75.' },
      { text: 'Bentuk pecahan biasa paling sederhana dari 0,6 adalah...', opts: ['6/100', '3/5', '6/5', '1/6'], ans: 1, exp: '0,6 = 6/10 = 3/5.' },
      { text: 'Bentuk desimal dari 2/5 adalah...', opts: ['0,2', '0,4', '0,25', '0,5'], ans: 1, exp: '2/5 = 4/10 = 0,4.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-04', subSeq: 5,
    objectives: ['Siswa mengenal arti persen (%) sebagai perseratus dan mampu mengubah pecahan/desimal sederhana ke persen (jembatan Fase C).'],
    materialTitle: 'Pengenalan Persen (%)',
    blocks: [
      { type: 'formula', name: 'Arti Persen (%)', expression: 'a% = a / 100', note: 'Persen artinya "perseratus". Sering kita lihat pada diskon belanja atau baterai HP!' },
      { type: 'flashcards', title: 'Ubah ke Persen! (Klik untuk Cek)', cards: [
        { emoji: '🔋', front: '1/2 = 50/100 = ...%', back: '50% (setengah)' },
        { emoji: '🏷️', front: '1/4 = 25/100 = ...%', back: '25% (seperempat)' },
        { emoji: '📊', front: '3/4 = 75/100 = ...%', back: '75%' },
        { emoji: '💯', front: '0,3 = 30/100 = ...%', back: '30%' },
      ]},
    ],
    activityTitle: 'Latihan: Pengenalan Persen',
    questions: [
      { text: 'Arti dari 40% adalah...', opts: ['40/10', '40/100', '4/100', '100/40'], ans: 1, exp: 'Persen berarti perseratus: 40% = 40/100.' },
      { text: 'Bentuk persen dari pecahan 1/4 adalah...', opts: ['14%', '25%', '40%', '50%'], ans: 1, exp: '1/4 = 25/100 = 25%.' },
      { text: 'Baterai tablet tinggal 0,5 bagian. Jika dinyatakan dalam persen adalah...', opts: ['5%', '50%', '0,5%', '100%'], ans: 1, exp: '0,5 = 50/100 = 50%.' },
    ],
  },

  // BAB 5: PENGUKURAN DAN LUAS
  {
    topicCode: 'MAT-SD4-05', subSeq: 1,
    objectives: ['Siswa mampu mengonversi dan menjumlahkan satuan panjang cm dan m dalam masalah pengukuran.'],
    materialTitle: 'Hubungan Satuan Panjang cm dan m',
    blocks: [
      { type: 'formula', name: 'Konversi m ↔ cm', expression: '1 m = 100 cm  |  100 cm = 1 m', note: 'Jika satuan berbeda, samakan satuannya dulu sebelum dijumlah atau dikurang!' },
      { type: 'worked_example', level: 'Menengah', question: 'Tali sepanjang 3 m dipotong 125 cm untuk mengikat kotak. Berapa cm sisa talinya?', steps: ['Ubah 3 m ke cm: 3 × 100 = 300 cm.', 'Kurangkan: 300 cm − 125 cm = 175 cm (atau 1 m 75 cm).'], answer: '175 cm.' },
    ],
    activityTitle: 'Latihan: Hubungan cm & m',
    questions: [
      { text: '2 m + 65 cm = ... cm.', opts: ['85', '265', '2.065', '67'], ans: 1, exp: '200 cm + 65 cm = 265 cm.' },
      { text: '5 m − 180 cm = ... cm.', opts: ['320', '420', '380', '175'], ans: 0, exp: '500 cm − 180 cm = 320 cm.' },
      { text: 'Tinggi pintu kelas 210 cm. Jika dinyatakan dalam m dan cm adalah...', opts: ['2 m 1 cm', '2 m 10 cm', '21 m', '20 m 10 cm'], ans: 1, exp: '200 cm = 2 m, sisanya 10 cm.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-05', subSeq: 2,
    objectives: ['Siswa mampu mengonversi dan menyelesaikan soal cerita satuan massa g dan kg.'],
    materialTitle: 'Hubungan Satuan Massa g dan kg',
    blocks: [
      { type: 'formula', name: 'Konversi kg ↔ g', expression: '1 kg = 1.000 g  |  1/2 kg = 500 g', note: 'Juga kenal: 1 ons (hg) = 100 g, 1 kg = 10 ons.' },
      { type: 'worked_example', level: 'Belanja di Pasar', question: 'Ibu membeli 2 kg beras dan 750 g gula. Berapa gram berat seluruh belanjaan Ibu?', steps: ['Ubah 2 kg = 2.000 g.', 'Jumlahkan: 2.000 g + 750 g = 2.750 g.'], answer: '2.750 gram.' },
    ],
    activityTitle: 'Latihan: Hubungan g & kg',
    questions: [
      { text: '3 kg 400 g sama dengan ... gram.', opts: ['340', '3.400', '3.040', '700'], ans: 1, exp: '3.000 g + 400 g = 3.400 g.' },
      { text: '2.500 gram sama dengan ... kg.', opts: ['25 kg', '2,5 kg', '0,25 kg', '250 kg'], ans: 1, exp: '2.500 ÷ 1.000 = 2,5 kg (2 kg 500 g).' },
      { text: 'Seorang penjual ikan menimbang 1 kg bandeng dan 500 g udang. Total beratnya adalah...', opts: ['1.500 g', '600 g', '1.050 g', '5.100 g'], ans: 0, exp: '1.000 g + 500 g = 1.500 g.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-05', subSeq: 3,
    objectives: ['Siswa mampu menghitung luas persegi dan persegi panjang menggunakan satuan baku (cm² dan m²).'],
    materialTitle: 'Pengukuran Luas (cm² dan m²)',
    blocks: [
      { type: 'formula', name: 'Rumus Luas Persegi & Persegi Panjang', expression: 'L persegi = s × s  |  L persegi panjang = p × l', note: 'Satuan luas selalu berpangkat dua (persegi), seperti cm² atau m².' },
      { type: 'worked_example', level: 'Dasar', question: 'Hitung luas papan tulis persegi panjang dengan panjang 8 m dan lebar 2 m, serta ubin persegi bersisi 6 cm!', steps: ['Luas papan tulis = p × l = 8 × 2 = 16 m².', 'Luas ubin = s × s = 6 × 6 = 36 cm².'], answer: '16 m² dan 36 cm².' },
    ],
    activityTitle: 'Latihan: Pengukuran Luas',
    questions: [
      { text: 'Luas persegi dengan panjang sisi 9 cm adalah...', opts: ['18 cm²', '36 cm²', '81 cm²', '27 cm²'], ans: 2, exp: 'L = s × s = 9 × 9 = 81 cm².' },
      { text: 'Sebuah taman berbentuk persegi panjang berukuran panjang 12 m dan lebar 5 m. Luasnya adalah...', opts: ['17 m²', '34 m²', '60 m²', '120 m²'], ans: 2, exp: 'L = p × l = 12 × 5 = 60 m².' },
      { text: 'Luas persegi panjang 48 cm² dan panjangnya 8 cm. Lebarnya adalah...', opts: ['4 cm', '6 cm', '8 cm', '40 cm'], ans: 1, exp: 'l = Luas ÷ p = 48 ÷ 8 = 6 cm.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-05', subSeq: 4,
    objectives: ['Siswa mampu mengukur volume menggunakan satuan tidak baku dan satuan baku liter (L) serta mililiter (mL).'],
    materialTitle: 'Pengukuran Volume (Baku & Tidak Baku)',
    blocks: [
      { type: 'formula', name: 'Hubungan Liter dan Mililiter', expression: '1 L = 1.000 mL', note: 'Botol minum sedang biasanya 500 mL (setengah liter) atau 600 mL.' },
      { type: 'visual_cards', title: 'Perbandingan Volume', cards: [
        { emoji: '🥛', label: 'Satuan Tidak Baku', sub: 'Gelas, gayung, cangkir (hasilnya beda jika ukuran gelas beda)' },
        { emoji: '🧪', label: 'Satuan Baku (mL & L)', sub: 'Gelas ukur berskala — hasilnya selalu sama di mana saja!' },
      ]},
    ],
    activityTitle: 'Latihan: Pengukuran Volume',
    questions: [
      { text: '2 liter (L) sama dengan ... mililiter (mL).', opts: ['20', '200', '2.000', '20.000'], ans: 2, exp: '1 L = 1.000 mL, maka 2 L = 2.000 mL.' },
      { text: 'Sebuah botol berisi 500 mL air. Dibutuhkan ... botol tersebut untuk mengisi penuh teko 2 liter.', opts: ['2 botol', '4 botol', '5 botol', '10 botol'], ans: 1, exp: '2 L = 2.000 mL; 2.000 ÷ 500 = 4 botol.' },
      { text: 'Manakah yang merupakan satuan volume BAKU?', opts: ['Gelas dan gayung', 'Liter dan mililiter', 'Jengkal dan depa', 'Kilogram dan gram'], ans: 1, exp: 'Liter (L) dan mililiter (mL) adalah satuan baku volume.' },
    ],
  },

  // BAB 6: BANGUN DATAR
  {
    topicCode: 'MAT-SD4-06', subSeq: 1,
    objectives: ['Siswa mampu mengidentifikasi sifat segitiga berdasarkan panjang sisi dan besar sudutnya.'],
    materialTitle: 'Sifat-Sifat Segitiga',
    blocks: [
      { type: 'shape_gallery', title: 'Amati Bangun Datar Ini!', shapes: ['segitiga', 'persegi', 'persegi_panjang'] },
      { type: 'table', title: 'Klasifikasi Segitiga', headers: ['Berdasarkan Sisi', 'Ciri', 'Berdasarkan Sudut', 'Ciri'], rows: [
        ['Sama Sisi', '3 sisi & 3 sudut sama (60°)', 'Lancip', 'Ketiga sudut < 90°'],
        ['Sama Kaki', '2 sisi & 2 sudut alas sama', 'Siku-Siku', 'Ada 1 sudut tepat 90°'],
        ['Sembarang', '3 sisi berbeda panjang', 'Tumpul', 'Ada 1 sudut > 90°'],
      ]},
      { type: 'tip', text: 'Jumlah ketiga sudut pada SEMUA segitiga selalu tepat 180°!' },
    ],
    activityTitle: 'Latihan: Sifat Segitiga',
    questions: [
      { text: 'Segitiga yang memiliki satu sudut sebesar 90° disebut segitiga...', opts: ['Lancip', 'Siku-siku', 'Tumpul', 'Sama sisi'], ans: 1, exp: 'Sudut 90° adalah sudut siku-siku.' },
      { text: 'Segitiga sama kaki memiliki ... sisi yang sama panjang.', opts: ['0', '2', '3', '4'], ans: 1, exp: 'Sama kaki memiliki sepasang (2) sisi sama panjang.' },
      { text: 'Jumlah seluruh sudut dalam pada segitiga adalah...', opts: ['90°', '180°', '270°', '360°'], ans: 1, exp: 'Ketiga sudut segitiga selalu berjumlah 180°.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-06', subSeq: 2,
    objectives: ['Siswa mampu membedakan sifat berbagai bangun segiempat (persegi, persegi panjang, jajar genjang, belah ketupat, layang-layang, trapesium).'],
    materialTitle: 'Sifat-Sifat Segiempat',
    blocks: [
      { type: 'table', title: 'Ciri Khas 6 Jenis Segiempat', headers: ['Bangun Segiempat', 'Ciri Sisi & Sudut'], rows: [
        ['Persegi', '4 sisi sama panjang, 4 sudut siku-siku (90°)'],
        ['Persegi Panjang', '2 pasang sisi berhadapan sama & sejajar, 4 sudut siku-siku'],
        ['Belah Ketupat', '4 sisi sama panjang, diagonal berpotongan tegak lurus'],
        ['Jajar Genjang', '2 pasang sisi berhadapan sejajar & sama panjang, sudut berhadapan sama'],
        ['Layang-Layang', '2 pasang sisi berdekatan sama panjang, diagonal tegak lurus'],
        ['Trapesium', 'Memiliki TEPAT sepasang sisi yang sejajar'],
      ]},
    ],
    activityTitle: 'Latihan: Sifat Segiempat',
    questions: [
      { text: 'Bangun segiempat yang memiliki TEPAT sepasang sisi sejajar adalah...', opts: ['Persegi', 'Trapesium', 'Jajar genjang', 'Belah ketupat'], ans: 1, exp: 'Ciri utama trapesium adalah memiliki tepat 1 pasang sisi sejajar.' },
      { text: 'Perbedaan utama belah ketupat dengan persegi adalah...', opts: ['Belah ketupat punya 3 sisi', 'Sudut belah ketupat tidak harus 90° (siku-siku)', 'Persegi tidak punya sisi sama panjang', 'Belah ketupat berbentuk bulat'], ans: 1, exp: 'Keduanya punya 4 sisi sama panjang, tetapi sudut belah ketupat belum tentu siku-siku.' },
      { text: 'Bangun datar yang memiliki 2 pasang sisi BERDEKATAN sama panjang adalah...', opts: ['Layang-layang', 'Trapesium', 'Segitiga', 'Lingkaran'], ans: 0, exp: 'Layang-layang punya 2 pasang sisi berdekatan yang sama panjang.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-06', subSeq: 3,
    objectives: ['Siswa mampu mengelompokkan bangun datar berdasarkan jumlah sisi, kesejajaran sisi, dan jenis sudutnya.'],
    materialTitle: 'Klasifikasi Bangun Datar',
    blocks: [
      { type: 'visual_cards', title: 'Cara Mengelompokkan Bangun Datar', cards: [
        { emoji: '📐', label: 'Segi Banyak Beraturan', sub: 'Semua sisi & sudut sama: segitiga sama sisi, persegi, segilima beraturan' },
        { emoji: '📏', label: 'Segi Banyak Tidak Beraturan', sub: 'Sisi atau sudut tidak sama semua: persegi panjang, trapesium, layang-layang' },
        { emoji: '⭕', label: 'Bukan Segi Banyak', sub: 'Memiliki sisi lengkung: lingkaran, oval' },
      ]},
    ],
    activityTitle: 'Latihan: Klasifikasi Bangun Datar',
    questions: [
      { text: 'Manakah yang termasuk SEGI BANYAK BERATURAN?', opts: ['Persegi panjang', 'Persegi dan segitiga sama sisi', 'Lingkaran', 'Trapesium'], ans: 1, exp: 'Segi banyak beraturan memiliki semua sisi sama panjang dan semua sudut sama besar.' },
      { text: 'Mengapa lingkaran BUKAN termasuk bangun segi banyak (poligon)?', opts: ['Karena ukurannya kecil', 'Karena dibatasi garis lengkung, bukan ruas garis lurus', 'Karena tidak punya warna', 'Karena punya 4 sudut'], ans: 1, exp: 'Segi banyak dibatasi seluruhnya oleh ruas garis lurus.' },
      { text: 'Bangun datar yang selalu memiliki 4 sudut siku-siku adalah...', opts: ['Persegi dan persegi panjang', 'Trapesium dan layang-layang', 'Belah ketupat dan jajar genjang', 'Segitiga dan lingkaran'], ans: 0, exp: 'Persegi dan persegi panjang sama-sama memiliki 4 sudut 90°.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-06', subSeq: 4,
    objectives: ['Siswa mampu menyusun (komposisi) bangun gabungan dan mengurai (dekomposisi) bangun untuk menghitung luas sederhana.'],
    materialTitle: 'Komposisi dan Dekomposisi Bangun Datar',
    blocks: [
      { type: 'worked_example', level: 'Luas Bangun Gabungan', question: 'Sebuah bangun huruf L dapat diurai menjadi persegi (sisi 4 cm) dan persegi panjang (6 cm × 3 cm). Berapa luas seluruhnya?', steps: ['Luas bagian 1 (persegi) = 4 × 4 = 16 cm².', 'Luas bagian 2 (persegi panjang) = 6 × 3 = 18 cm².', 'Jumlahkan: 16 + 18 = 34 cm².'], answer: '34 cm².' },
      { type: 'tip', text: 'Bangun datar yang rumit jadi sangat mudah dihitung jika kita potong (dekomposisi) menjadi beberapa persegi atau persegi panjang!' },
    ],
    activityTitle: 'Latihan: Komposisi & Dekomposisi Bangun',
    questions: [
      { text: 'Bangun gabungan terdiri atas persegi (sisi 5 cm) dan persegi panjang (8 cm × 4 cm). Total luasnya adalah...', opts: ['57 cm²', '52 cm²', '47 cm²', '62 cm²'], ans: 0, exp: '(5×5) + (8×4) = 25 + 32 = 57 cm².' },
      { text: 'Dua segitiga siku-siku identik (alas 6 cm, tinggi 4 cm) digabung membentuk persegi panjang 6 cm × 4 cm. Luas SATU segitiga tersebut adalah...', opts: ['24 cm²', '12 cm²', '10 cm²', '6 cm²'], ans: 1, exp: 'Setengah dari 6 × 4 = 24 ÷ 2 = 12 cm².' },
      { text: 'Memecah bangun datar besar menjadi bangun-bangun sederhana disebut...', opts: ['Komposisi', 'Dekomposisi', 'Pengukuran massa', 'Piktogram'], ans: 1, exp: 'Dekomposisi = mengurai; komposisi = menyusun.' },
    ],
  },

  // BAB 7: PENGOLAHAN DATA
  {
    topicCode: 'MAT-SD4-07', subSeq: 1,
    objectives: ['Siswa mampu membaca, melengkapi, dan menganalisis tabel frekuensi sederhana.'],
    materialTitle: 'Membaca dan Mengolah Tabel Data',
    blocks: [
      { type: 'table', title: 'Tabel Nilai Ulangan Matematika Kelas 4', headers: ['Nilai', 'Banyak Siswa (Frekuensi)'], rows: [
        ['70', '4 siswa'],
        ['80', '9 siswa'],
        ['90', '7 siswa'],
        ['100', '5 siswa'],
      ]},
      { type: 'worked_example', level: 'Analisis Tabel', question: 'Dari tabel di atas, berapa total siswa dan berapa siswa yang mendapat nilai di atas 80?', steps: ['Total siswa = 4 + 9 + 7 + 5 = 25 siswa.', 'Nilai di atas 80 berarti nilai 90 dan 100 = 7 + 5 = 12 siswa.'], answer: 'Total 25 siswa; nilai > 80 ada 12 siswa.' },
    ],
    activityTitle: 'Latihan: Membaca Tabel',
    questions: [
      { text: 'Dari tabel nilai: 70 (4), 80 (9), 90 (7), 100 (5). Nilai yang PALING BANYAK diperoleh siswa adalah...', opts: ['70', '80', '90', '100'], ans: 1, exp: 'Nilai 80 diperoleh oleh 9 siswa (frekuensi tertinggi).' },
      { text: 'Banyak siswa yang mendapat nilai minimal 90 (90 atau 100) adalah...', opts: ['7 siswa', '12 siswa', '16 siswa', '5 siswa'], ans: 1, exp: '7 + 5 = 12 siswa.' },
      { text: 'Selisih banyak siswa bernilai 80 dan 70 adalah...', opts: ['3 siswa', '4 siswa', '5 siswa', '13 siswa'], ans: 2, exp: '9 − 4 = 5 siswa.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-07', subSeq: 2,
    objectives: ['Siswa mampu menafsirkan piktogram dengan skala 1 simbol mewakili kelipatan tertentu (mis. 5 atau 10).'],
    materialTitle: 'Membaca Piktogram Berskala',
    blocks: [
      { type: 'table', title: 'Piktogram Pengunjung Perpustakaan (🧒 = 10 siswa)', headers: ['Hari', 'Pengunjung'], rows: [
        ['Senin', '🧒 🧒 🧒 (30 siswa)'],
        ['Selasa', '🧒 🧒 🧒 🧒 (40 siswa)'],
        ['Rabu', '🧒 🧒 (20 siswa)'],
      ]},
      { type: 'tip', text: 'Jika muncul setengah gambar simbol (skala 10), nilainya adalah setengah dari 10 = 5!' },
    ],
    activityTitle: 'Latihan: Membaca Piktogram',
    questions: [
      { text: 'Jika 1 simbol 🌳 mewakili 10 pohon, maka 4 simbol 🌳 mewakili ... pohon.', opts: ['4', '14', '40', '400'], ans: 2, exp: '4 × 10 = 40 pohon.' },
      { text: 'Jika 1 simbol 📘 mewakili 4 buku, berapa simbol 📘 yang digambar untuk 28 buku?', opts: ['6', '7', '8', '9'], ans: 1, exp: '28 ÷ 4 = 7 simbol.' },
      { text: 'Pada piktogram (🧒 = 10 siswa), Senin ada 3 gambar dan Rabu ada 2 gambar. Total pengunjung Senin & Rabu adalah...', opts: ['5 siswa', '50 siswa', '60 siswa', '20 siswa'], ans: 1, exp: '(3 + 2) × 10 = 50 siswa.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-07', subSeq: 3,
    objectives: ['Siswa mampu menyusun dan membandingkan data pada diagram gambar secara tepat.'],
    materialTitle: 'Menyajikan Diagram Gambar',
    blocks: [
      { type: 'list', title: 'Syarat Membuat Diagram Gambar yang Benar', items: ['1. Tulis judul diagram yang jelas.', '2. Pilih simbol yang sederhana dan sesuai topik (mis. 🐟 untuk ikan, 📘 untuk buku).', '3. Tentukan skala yang habis membagi semua data (mis. jika data 15, 20, 25 → pilih skala 5).', '4. Cantumkan keterangan skala dengan jelas!'] },
    ],
    activityTitle: 'Latihan: Diagram Gambar',
    questions: [
      { text: 'Data hasil panen ikan: 20 kg, 35 kg, 40 kg, 25 kg. Skala 1 gambar yang PALING cocok agar semua tergambar utuh adalah...', opts: ['1 gambar = 3 kg', '1 gambar = 5 kg', '1 gambar = 7 kg', '1 gambar = 12 kg'], ans: 1, exp: 'Semua angka (20, 35, 40, 25) habis dibagi 5.' },
      { text: 'Jika data 35 kg digambar dengan skala 1 simbol = 5 kg, maka jumlah simbolnya adalah...', opts: ['5', '6', '7', '8'], ans: 2, exp: '35 ÷ 5 = 7 simbol.' },
      { text: 'Bagian diagram gambar yang wajib ada agar pembaca tahu nilai tiap gambar adalah...', opts: ['Keterangan skala', 'Nama pengarang', 'Nomor halaman', 'Tanda tangan'], ans: 0, exp: 'Tanpa keterangan skala, nilai sebenarnya tidak bisa dibaca.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-07', subSeq: 4,
    objectives: ['Siswa mampu membaca dan menyusun diagram batang berskala (kelipatan 2, 5, atau 10).'],
    materialTitle: 'Diagram Batang Berskala',
    blocks: [
      { type: 'text', text: 'Diagram batang menggunakan batang-batang persegi panjang dengan lebar sama dan jarak antarbatang sama. Sumbu tegak memuat skala bilangan (misalnya 0, 5, 10, 15, 20).' },
      { type: 'table', title: 'Data Penjualan Jajanan Kantin (Minggu Ini)', headers: ['Jajanan', 'Terjual (bungkus)'], rows: [
        ['Roti', '35'],
        ['Lemper', '25'],
        ['Pudak', '45'],
        ['Pastel', '30'],
      ]},
    ],
    activityTitle: 'Latihan: Diagram Batang',
    questions: [
      { text: 'Pada diagram batang dengan skala 0, 5, 10, 15, 20, ..., batang setinggi tepat di tengah antara 20 dan 25 bernilai...', opts: ['21', '22,5', '24', '30'], ans: 1, exp: 'Tengah-tengah antara 20 dan 25 adalah 22,5.' },
      { text: 'Dari data kantin: Roti (35), Lemper (25), Pudak (45), Pastel (30). Batang yang PALING TINGGI adalah...', opts: ['Roti', 'Lemper', 'Pudak', 'Pastel'], ans: 2, exp: 'Pudak terjual paling banyak (45 bungkus).' },
      { text: 'Aturan menggambar diagram batang yang rapi adalah lebar setiap batang harus...', opts: ['Berbeda-beda', 'Sama lebar dan jarak antarbatangnya teratur', 'Saling menumpuk', 'Berbentuk segitiga'], ans: 1, exp: 'Lebar seragam memastikan perbandingan visual adil.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-07', subSeq: 5,
    objectives: ['Siswa mampu menarik kesimpulan dan mengambil keputusan sederhana dari interpretasi tabel/diagram.'],
    materialTitle: 'Menginterpretasi Informasi dari Data',
    blocks: [
      { type: 'worked_example', level: 'Penalaran Data', question: 'Di kantin sekolah, rata-rata harian terjual 45 bungkus pudak, 35 roti, dan 25 lemper. Saran apa yang tepat untuk ibu kantin besok?', steps: ['Bandingkan penjualan tertinggi dan terendah.', 'Pudak paling laris (45), lemper paling sedikit (25).', 'Kesimpulan: Ibu kantin sebaiknya menyiapkan stok pudak lebih banyak agar tidak cepat habis!'], answer: 'Menambah stok pudak lebih banyak dibanding lemper.' },
    ],
    activityTitle: 'Latihan: Interpretasi Data',
    questions: [
      { text: 'Data peminjaman buku: Cerita Hewan (40), Sains (35), Komik Sejarah (50), Puisi (15). Jika sekolah ingin menambah koleksi buku paling diminati, buku yang diprioritaskan adalah...', opts: ['Puisi', 'Komik Sejarah', 'Sains saja', 'Tidak usah beli'], ans: 1, exp: 'Komik Sejarah memiliki peminat tertinggi (50).' },
      { text: 'Total penjualan kantin: Roti (35) + Lemper (25) + Pudak (45) + Pastel (30) adalah...', opts: ['125', '135', '145', '130'], ans: 1, exp: '35 + 25 = 60; 45 + 30 = 75; 60 + 75 = 135.' },
      { text: 'Menginterpretasi data artinya...', opts: ['Menghapus angka dari tabel', 'Memahami makna data untuk menarik kesimpulan dan saran', 'Mewarnai kertas saja', 'Menyembunyikan grafik'], ans: 1, exp: 'Interpretasi data mengubah angka menjadi informasi berguna.' },
    ],
  },
];

upsertLessonsBatch('Kelas 4 SD — Matematika (7 Bab, 29 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

