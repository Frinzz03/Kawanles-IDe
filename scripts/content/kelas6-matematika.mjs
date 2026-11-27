import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: PENDALAMAN BILANGAN
  {
    topicCode: 'MAT-SD6-01', subSeq: 1,
    objectives: ['Siswa mampu membaca, menulis, menaksir (pembulatan), dan membandingkan bilangan cacah sampai 1.000.000.'],
    materialTitle: 'Bilangan sampai 1.000.000 dan Pembulatan',
    blocks: [
      { type: 'text', text: 'Bilangan hingga 1.000.000 sering muncul dalam data penduduk, anggaran belanja, dan jarak. Untuk menaksir cepat, gunakan PEMBULATAN: angka 0–4 dibulatkan ke BAWAH, angka 5–9 dibulatkan ke ATAS!' },
      { type: 'worked_example', level: 'Pembulatan Ribuan', question: 'Bulatkan 48.620 dan 124.380 ke ribuan terdekat!', steps: ['48.620: angka ratusan adalah 6 (≥ 5) → naik menjadi 49.000.', '124.380: angka ratusan adalah 3 (< 5) → turun menjadi 124.000.'], answer: '49.000 dan 124.000.' },
    ],
    activityTitle: 'Latihan: Bilangan sampai 1.000.000',
    questions: [
      { text: 'Pembulatan bilangan 67.840 ke ribuan terdekat adalah...', opts: ['67.000', '68.000', '70.000', '67.800'], ans: 1, exp: 'Ratusan 8 ≥ 5 sehingga dibulatkan naik menjadi 68.000.' },
      { text: 'Lambang bilangan "delapan ratus lima ribu sembilan puluh" adalah...', opts: ['850.090', '805.090', '805.900', '85.090'], ans: 1, exp: '805 ribu + 90 = 805.090.' },
      { text: 'Selisih nilai angka 5 pada bilangan 540.500 adalah...', opts: ['499.500', '500.500', '495.000', '450.000'], ans: 0, exp: '500.000 − 500 = 499.500.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-01', subSeq: 2,
    objectives: ['Siswa mampu melakukan operasi hitung penjumlahan, pengurangan, perkalian, dan pembagian bilangan cacah besar secara akurat.'],
    materialTitle: 'Operasi Bilangan Cacah Besar',
    blocks: [
      { type: 'worked_example', level: 'Strategi Distributif', question: 'Hitung cepat 25 × 48 tanpa bersusun panjang!', steps: ['Urai 48 menjadi 4 × 12 (karena 25 × 4 = 100!).', '25 × 48 = (25 × 4) × 12 = 100 × 12 = 1.200.'], answer: '1.200' },
      { type: 'tip', text: 'Hafalkan pasangan "ramah 100/1000": 2×5=10, 4×25=100, 8×125=1.000 — sangat membantu berhitung cepat!' },
    ],
    activityTitle: 'Latihan: Operasi Bilangan Cacah',
    questions: [
      { text: '25 × 36 = ...', opts: ['800', '900', '950', '1.000'], ans: 1, exp: '25 × (4 × 9) = 100 × 9 = 900.' },
      { text: '12.480 ÷ 12 = ...', opts: ['140', '1.040', '1.400', '104'], ans: 1, exp: '12÷12=1, 4÷12=0, 48÷12=4, 0÷12=0 → 1.040.' },
      { text: '85.400 − 29.750 = ...', opts: ['55.650', '56.650', '55.750', '54.650'], ans: 0, exp: '85.400 − 29.750 = 55.650.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-01', subSeq: 3,
    objectives: ['Siswa mampu menyelesaikan operasi hitung campuran bertingkat dengan kaidah tanda kurung dan prioritas operasi.'],
    materialTitle: 'Operasi Hitung Campuran Bertingkat',
    blocks: [
      { type: 'formula', name: 'Aturan Prioritas', expression: '( ) Kurung dulu  →  × dan ÷ (dari kiri)  →  + dan − (dari kiri)', note: 'Tulis setiap langkah ke bawah agar tidak salah urutan!' },
      { type: 'worked_example', level: 'Menengah', question: 'Hitung 1.500 − 25 × (18 + 12) ÷ 5!', steps: ['1. Kurung: 18 + 12 = 30.', '2. Kali & bagi dari kiri: 25 × 30 = 750; 750 ÷ 5 = 150.', '3. Kurangkan: 1.500 − 150 = 1.350.'], answer: '1.350' },
    ],
    activityTitle: 'Latihan: Operasi Campuran',
    questions: [
      { text: '450 + 150 × 4 − 200 = ...', opts: ['2.200', '850', '1.050', '400'], ans: 1, exp: '150×4 = 600; 450 + 600 − 200 = 850.' },
      { text: '(720 − 120) ÷ 15 × 6 = ...', opts: ['240', '200', '180', '360'], ans: 0, exp: '600 ÷ 15 = 40; 40 × 6 = 240.' },
      { text: '3.000 − 400 ÷ 8 × 5 = ...', opts: ['2.750', '2.990', '2.500', '1.625'], ans: 0, exp: '400 ÷ 8 = 50; 50 × 5 = 250; 3.000 − 250 = 2.750.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-01', subSeq: 4,
    objectives: ['Siswa mampu memodelkan dan memecahkan masalah kontekstual multi-langkah bilangan cacah.'],
    materialTitle: 'Masalah Kontekstual Bilangan Cacah',
    blocks: [
      { type: 'worked_example', level: 'Soal Cerita Multi-Langkah', question: 'Koperasi sekolah di Gresik memiliki stok 240 buku tulis. Koperasi membeli lagi 18 pak buku (tiap pak isi 12 buku). Jika hari ini terjual 156 buku, berapa sisa stok buku sekarang?', steps: ['Tambahan stok = 18 × 12 = 216 buku.', 'Total sebelum terjual = 240 + 216 = 456 buku.', 'Sisa = 456 − 156 = 300 buku.'], answer: '300 buku tulis.' },
    ],
    activityTitle: 'Latihan: Masalah Kontekstual',
    questions: [
      { text: 'Sebuah toko kue memproduksi 45 kotak pudak per hari. Tiap kotak berisi 10 bungkus. Dalam 6 hari, banyak pudak yang diproduksi adalah...', opts: ['2.400', '2.700', '2.500', '456'], ans: 1, exp: '45 × 10 × 6 = 2.700 bungkus.' },
      { text: 'Panitia bakti sosial mengumpulkan 350 kg beras dari warga A dan 250 kg dari warga B. Seluruh beras dikemas dalam kantong 5 kg untuk warga. Banyak kantong yang diperoleh adalah...', opts: ['100', '110', '120', '150'], ans: 2, exp: '(350 + 250) ÷ 5 = 600 ÷ 5 = 120 kantong.' },
      { text: 'Pak Hadi memanen 480 ekor bandeng. Sebanyak 30 ekor dimasak sendiri, sisanya dibagi rata ke 15 pedagang. Tiap pedagang menerima ... ekor.', opts: ['28', '30', '32', '35'], ans: 1, exp: '(480 − 30) ÷ 15 = 450 ÷ 15 = 30 ekor.' },
    ],
  },

  // BAB 2: PECAHAN DAN OPERASINYA
  {
    topicCode: 'MAT-SD6-02', subSeq: 1,
    objectives: ['Siswa mampu menjumlahkan dan mengurangkan pecahan biasa, campuran, serta bentuk desimal secara lancar.'],
    materialTitle: 'Penjumlahan dan Pengurangan Pecahan',
    blocks: [
      { type: 'worked_example', level: 'Pecahan Campuran Meminjam', question: 'Hitung 3 1/4 − 1 2/3!', steps: ['Samakan penyebut (KPK 4 dan 3 = 12): 3 3/12 − 1 8/12.', 'Karena 3/12 < 8/12, pinjam 1 dari 3 (jadi 2 + 12/12 + 3/12 = 2 15/12).', 'Kurangkan: (2 − 1) + (15/12 − 8/12) = 1 7/12.'], answer: '1 7/12' },
    ],
    activityTitle: 'Latihan: Tambah & Kurang Pecahan',
    questions: [
      { text: '5/6 + 3/8 = ...', opts: ['8/14', '1 5/24', '29/24 = 1 5/24', '1 1/24'], ans: 2, exp: '20/24 + 9/24 = 29/24 = 1 5/24.' },
      { text: '4 1/3 − 2 1/2 = ...', opts: ['2 1/6', '1 5/6', '2 5/6', '1 1/6'], ans: 1, exp: '4 2/6 − 2 3/6 = 3 8/6 − 2 3/6 = 1 5/6.' },
      { text: 'Ibu punya 2,5 kg tepung, lalu digunakan 3/4 kg. Sisa tepung Ibu adalah...', opts: ['1,75 kg', '1,25 kg', '2,25 kg', '1,5 kg'], ans: 0, exp: '3/4 = 0,75; 2,50 − 0,75 = 1,75 kg.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-02', subSeq: 2,
    objectives: ['Siswa mampu mengalikan pecahan dengan bilangan asli (n × a/b dan a/b × n) serta menggunakannya dalam soal cerita.'],
    materialTitle: 'Perkalian Pecahan dengan Bilangan Asli',
    blocks: [
      { type: 'formula', name: 'Rumus Perkalian Pecahan × Bilangan Asli', expression: 'n × (a/b) = (n × a) / b  (sederhanakan/coret silang jika bisa!)', note: 'Perkalian pecahan TIDAK perlu menyamakan penyebut!' },
      { type: 'worked_example', level: 'Coret Silang', question: 'Hitung 3/4 × 20 kg beras!', steps: ['Bagi 20 dengan penyebut 4 → 20 ÷ 4 = 5.', 'Kalikan pembilang 3 × 5 = 15 kg.'], answer: '15 kg beras.' },
    ],
    activityTitle: 'Latihan: Perkalian Pecahan',
    questions: [
      { text: '2/5 × 35 = ...', opts: ['10', '14', '15', '17'], ans: 1, exp: '35 ÷ 5 = 7; 2 × 7 = 14.' },
      { text: '6 × 3/4 = ...', opts: ['4 1/2', '3 1/2', '9/4', '18/24'], ans: 0, exp: '18/4 = 9/2 = 4 1/2.' },
      { text: 'Dari 32 siswa kelas 6, sebanyak 3/8 bagian mengikuti ekskul Pramuka. Jumlah peserta Pramuka adalah...', opts: ['8 siswa', '12 siswa', '16 siswa', '24 siswa'], ans: 1, exp: '3/8 × 32 = 3 × 4 = 12 siswa.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-02', subSeq: 3,
    objectives: ['Siswa mampu melakukan pembagian pecahan dengan bilangan asli (a/b ÷ n) dan bilangan asli dengan pecahan (n ÷ a/b).'],
    materialTitle: 'Pembagian Pecahan dengan Bilangan Asli',
    blocks: [
      { type: 'formula', name: 'Rumus Pembagian Pecahan (Kali Kebalikan!)', expression: '(a/b) ÷ n = a / (b × n)   |   n ÷ (a/b) = n × (b/a)', note: 'Ubah tanda ÷ menjadi × lalu BALIK bilangan di belakangnya!' },
      { type: 'worked_example', level: '2 Kasus Pembagian', question: 'Hitung 3/4 ÷ 3 dan 6 ÷ 2/3!', steps: ['3/4 ÷ 3 = 3/4 × 1/3 = 3/12 = 1/4.', '6 ÷ 2/3 = 6 × 3/2 = 18/2 = 9.'], answer: '1/4 dan 9.' },
    ],
    activityTitle: 'Latihan: Pembagian Pecahan',
    questions: [
      { text: '4/5 ÷ 2 = ...', opts: ['8/5', '2/5', '4/10 saja tanpa sederhana', '2/10'], ans: 1, exp: '4/5 × 1/2 = 4/10 = 2/5.' },
      { text: '8 ÷ 1/4 = ...', opts: ['2', '16', '32', '12'], ans: 2, exp: '8 × 4/1 = 32 (ada 32 potongan seperempat di dalam 8 kue utuh!).' },
      { text: 'Pita sepanjang 3 meter dipotong menjadi bagian-bagian masing-masing 3/4 meter. Banyak potongan pita yang dihasilkan adalah...', opts: ['3', '4', '6', '9'], ans: 1, exp: '3 ÷ 3/4 = 3 × 4/3 = 4 potong.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-02', subSeq: 4,
    objectives: ['Siswa mampu menyelesaikan perkalian dan pembagian yang melibatkan pecahan campuran dalam masalah sehari-hari.'],
    materialTitle: 'Operasi Pecahan Campuran',
    blocks: [
      { type: 'tip', text: 'Kunci wajib perkalian/pembagian pecahan campuran: UBAH DULU ke PECAHAN BIASA sebelum dikali atau dibagi!' },
      { type: 'worked_example', level: 'Aplikasi', question: 'Ibu membeli 4 bungkus gula, masing-masing beratnya 1 1/2 kg. Berapa kg total gula Ibu?', steps: ['Ubah 1 1/2 = 3/2.', '4 × 3/2 = 12/2 = 6 kg.'], answer: '6 kg gula.' },
    ],
    activityTitle: 'Latihan: Operasi Pecahan Campuran',
    questions: [
      { text: '2 1/2 × 6 = ...', opts: ['12', '15', '18', '12 1/2'], ans: 1, exp: '5/2 × 6 = 30/2 = 15.' },
      { text: '3 1/2 ÷ 7 = ...', opts: ['1/2', '2', '7/2', '1/7'], ans: 0, exp: '7/2 × 1/7 = 1/2.' },
      { text: 'Sebuah botol berisi 1 1/4 liter jus. Jika ada 8 botol yang sama, seluruh jus berjumlah...', opts: ['8 liter', '10 liter', '12 liter', '9 liter'], ans: 1, exp: '5/4 × 8 = 10 liter.' },
    ],
  },

  // BAB 3: RASIO DAN PROPORSI
  {
    topicCode: 'MAT-SD6-03', subSeq: 1,
    objectives: ['Siswa mampu menentukan rasio (perbandingan) sederhana dan rasio satuan (harga per 1 item / jarak per 1 liter).'],
    materialTitle: 'Mengenal Rasio dan Rasio Satuan',
    blocks: [
      { type: 'text', text: 'Rasio adalah perbandingan dua besaran yang dinyatakan dengan a : b (dibaca "a berbanding b"). Rasio SATUAN membandingkan suatu besaran terhadap 1 satuan (contoh: harga per 1 buku, km per 1 jam).' },
      { type: 'worked_example', level: 'Rasio Satuan', question: 'Harga 4 buku tulis adalah Rp14.000. Berapa harga satuan (1 buku)?', steps: ['Bagi total harga dengan banyak buku: Rp14.000 ÷ 4 = Rp3.500/buku.'], answer: 'Rp3.500 per 1 buku.' },
    ],
    activityTitle: 'Latihan: Rasio Satuan',
    questions: [
      { text: 'Di kelas 6 ada 12 siswa laki-laki dan 18 siswa perempuan. Rasio paling sederhana laki-laki terhadap perempuan adalah...', opts: ['12 : 18', '2 : 3', '3 : 2', '4 : 6'], ans: 1, exp: 'Bagi keduanya dengan FPB(12,18)=6 → 2 : 3.' },
      { text: 'Toko A menjual 5 pensil Rp12.500. Toko B menjual 4 pensil Rp10.800. Mana harga per pensil yang lebih murah?', opts: ['Toko A (Rp2.500/pensil)', 'Toko B (Rp2.700/pensil)', 'Sama mahal', 'Tidak bisa dihitung'], ans: 0, exp: 'A = 12.500÷5 = Rp2.500; B = 10.800÷4 = Rp2.700 → Toko A lebih hemat.' },
      { text: 'Sepeda motor menempuh 90 km dengan 2 liter bensin. Rasio satuan jarak per 1 liter bensin adalah...', opts: ['40 km/L', '45 km/L', '50 km/L', '180 km/L'], ans: 1, exp: '90 ÷ 2 = 45 km per liter.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-03', subSeq: 2,
    objectives: ['Siswa mampu menyelesaikan perbandingan bagian terhadap bagian (a : b) dan bagian terhadap keseluruhan dalam kehidupan sehari-hari.'],
    materialTitle: 'Perbandingan dalam Kehidupan Sehari-Hari',
    blocks: [
      { type: 'worked_example', level: 'Resep Sirup', question: 'Untuk membuat es sirup manis pas, rasio sirup : air adalah 1 : 4. Jika Ibu memakai 3 gelas sirup, berapa gelas air yang dibutuhkan?', steps: ['1 bagian sirup butuh 4 bagian air.', '3 bagian sirup butuh 3 × 4 = 12 gelas air.'], answer: '12 gelas air.' },
    ],
    activityTitle: 'Latihan: Perbandingan Sehari-Hari',
    questions: [
      { text: 'Rasio tepung : gula untuk membuat kue adalah 3 : 2. Jika dipakai 15 sendok tepung, banyak gula yang dibutuhkan adalah...', opts: ['6 sendok', '10 sendok', '12 sendok', '8 sendok'], ans: 1, exp: '3→15 (×5), maka 2×5 = 10 sendok.' },
      { text: 'Rasio kelereng Bima : Raka adalah 3 : 5. Jika jumlah kelereng mereka berdua 40 butir, banyak kelereng Bima adalah...', opts: ['15 butir', '20 butir', '25 butir', '12 butir'], ans: 0, exp: 'Jumlah rasio 3+5=8; Bima = (3/8) × 40 = 15 butir.' },
      { text: 'Dari soal di atas (rasio 3 : 5, total 40), selisih kelereng Raka dan Bima adalah...', opts: ['5 butir', '10 butir', '15 butir', '25 butir'], ans: 1, exp: 'Raka = 25, Bima = 15 → selisih 25 − 15 = 10 butir.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-03', subSeq: 3,
    objectives: ['Siswa mampu memahami kesetaraan rasio (proporsi) serta mengenal skala denah/peta sebagai bentuk proporsi.'],
    materialTitle: 'Proporsi dan Pengenalan Skala',
    blocks: [
      { type: 'formula', name: 'Proporsi (Kesamaan Dua Rasio)', expression: 'a : b = c : d  (contoh: 2 : 5 = 6 : 15)', note: 'Skala 1 : 100.000 pada peta artinya 1 cm di peta = 100.000 cm (1 km) jarak sebenarnya!' },
    ],
    activityTitle: 'Latihan: Proporsi & Skala',
    questions: [
      { text: 'Agar proporsi 3 : 7 = 12 : n bernilai benar, maka nilai n adalah...', opts: ['21', '24', '28', '35'], ans: 2, exp: '3×4=12, maka 7×4=28.' },
      { text: 'Skala peta adalah 1 : 200.000. Jika jarak Gresik–Surabaya pada peta 9 cm, jarak sebenarnya adalah...', opts: ['18 km', '1,8 km', '180 km', '20 km'], ans: 0, exp: '9 × 200.000 cm = 1.800.000 cm = 18 km.' },
      { text: 'Rasio yang senilai (proporsional) dengan 4 : 6 adalah...', opts: ['6 : 8', '10 : 15', '8 : 10', '2 : 4'], ans: 1, exp: '4:6 = 2:3 dan 10:15 = 2:3.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-03', subSeq: 4,
    objectives: ['Siswa mampu menerapkan perkalian dan pembagian untuk memecahkan masalah proporsi (kecepatan, belanja grosir, konsumsi bahan).'],
    materialTitle: 'Penerapan Proporsi (Perkalian & Pembagian)',
    blocks: [
      { type: 'worked_example', level: 'Metode Satuan', question: 'Untuk membuat 6 loyang kue dibutuhkan 15 butir telur. Berapa butir telur untuk 10 loyang?', steps: ['Cari untuk 2 loyang (bagi 3): 6÷3 = 2 loyang butuh 15÷3 = 5 telur.', 'Kalikan 5 agar jadi 10 loyang: 5 × 5 = 25 butir telur!'], answer: '25 butir telur.' },
    ],
    activityTitle: 'Latihan: Penerapan Proporsi',
    questions: [
      { text: 'Harga 3 kg bandeng adalah Rp96.000. Harga 5 kg bandeng dengan kualitas sama adalah...', opts: ['Rp150.000', 'Rp160.000', 'Rp144.000', 'Rp180.000'], ans: 1, exp: '1 kg = 96.000÷3 = Rp32.000; 5 kg = 5 × 32.000 = Rp160.000.' },
      { text: 'Mesin cetak mencetak 120 lembar brosur dalam 4 menit. Dalam 10 menit, mesin tersebut mencetak ... lembar.', opts: ['240', '300', '360', '400'], ans: 1, exp: '1 menit = 30 lembar; 10 menit = 300 lembar.' },
      { text: 'Mobil melaju dengan kecepatan tetap 60 km/jam. Jarak yang ditempuh dalam 2,5 jam adalah...', opts: ['120 km', '150 km', '180 km', '135 km'], ans: 1, exp: '60 × 2,5 = 150 km.' },
    ],
  },

  // BAB 4: UANG DAN LITERASI FINANSIAL
  {
    topicCode: 'MAT-SD6-04', subSeq: 1,
    objectives: ['Siswa mampu melakukan kesetaraan nilai uang kertas/logam Rupiah dan menaksir total harga barang.'],
    materialTitle: 'Nilai Uang dan Penaksiran Harga',
    blocks: [
      { type: 'tip', text: 'Saat berbelanja, biasakan MENAKSIR total harga dengan pembulatan ke ribuan terdekat di kepala agar uangmu selalu cukup saat sampai kasir!' },
      { type: 'worked_example', level: 'Taksiran Belanja', question: 'Alya membeli 3 barang seharga Rp14.900, Rp19.800, dan Rp9.900. Apakah 1 lembar Rp50.000 cukup?', steps: ['Taksir ke atas: Rp15.000 + Rp20.000 + Rp10.000 = Rp45.000.', 'Rp45.000 < Rp50.000 → PASTI CUKUP (sisa sedikit di atas Rp5.000)!'], answer: 'Cukup (total asli Rp44.600, kembalian Rp5.400).' },
    ],
    activityTitle: 'Latihan: Nilai Uang',
    questions: [
      { text: '2 lembar Rp50.000 + 3 lembar Rp20.000 + 4 lembar Rp5.000 setara dengan...', opts: ['Rp160.000', 'Rp180.000', 'Rp175.000', 'Rp200.000'], ans: 1, exp: '100.000 + 60.000 + 20.000 = Rp180.000.' },
      { text: 'Penulisan nilai uang "tujuh puluh lima ribu lima ratus rupiah" yang benar sesuai EYD adalah...', opts: ['Rp. 75.500,-', 'Rp75.500,00', 'Rp 75,500', '75.500 Rp'], ans: 1, exp: 'Menurut EYD V: Rp tanpa titik dan tanpa spasi diikuti nominal: Rp75.500,00.' },
      { text: 'Jika 1 lembar Rp100.000 ditukar seluruhnya menjadi uang pecahan Rp20.000, akan diperoleh ... lembar.', opts: ['4', '5', '10', '20'], ans: 1, exp: '100.000 ÷ 20.000 = 5 lembar.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-04', subSeq: 2,
    objectives: ['Siswa mampu menghitung total belanja, diskon (persentase potongan), dan uang kembalian secara teliti.'],
    materialTitle: 'Perhitungan Transaksi & Diskon',
    blocks: [
      { type: 'formula', name: 'Rumus Diskon & Harga Bayar', expression: 'Diskon = %Diskon × Harga Awal  |  Harga Bayar = Harga Awal − Diskon', note: 'Contoh: Diskon 10% dari Rp80.000 = Rp8.000 → Bayar Rp72.000!' },
    ],
    activityTitle: 'Latihan: Transaksi & Diskon',
    questions: [
      { text: 'Tas sekolah berharga Rp150.000 mendapat diskon 20%. Harga yang harus dibayar adalah...', opts: ['Rp30.000', 'Rp120.000', 'Rp130.000', 'Rp125.000'], ans: 1, exp: 'Diskon 20%×150.000 = 30.000 → Bayar 150.000 − 30.000 = Rp120.000.' },
      { text: 'Bima membeli 4 buku @Rp6.500 dan 2 pulpen @Rp4.000. Jika ia membayar Rp50.000, uang kembaliannya adalah...', opts: ['Rp14.000', 'Rp16.000', 'Rp18.000', 'Rp24.000'], ans: 1, exp: 'Total = 26.000 + 8.000 = 34.000; kembalian = 50.000 − 34.000 = Rp16.000.' },
      { text: 'Toko A memberi diskon 10% untuk sepatu Rp200.000. Toko B menjual sepatu sama Rp185.000 tanpa diskon. Mana yang lebih murah?', opts: ['Toko A (Rp180.000)', 'Toko B (Rp185.000)', 'Sama saja', 'Tidak tahu'], ans: 0, exp: 'Toko A = 200.000 − 20.000 = Rp180.000 < Rp185.000.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-04', subSeq: 3,
    objectives: ['Siswa mampu mencatat pembukuan sederhana pemasukan, pengeluaran, dan saldo tabungan.'],
    materialTitle: 'Pemasukan, Pengeluaran, dan Saldo',
    blocks: [
      { type: 'table', title: 'Buku Kas Sederhana Kelas 6', headers: ['Hari', 'Keterangan', 'Masuk (+)', 'Keluar (−)', 'Saldo'], rows: [
        ['Senin', 'Saldo awal kas kelas', 'Rp50.000', '—', 'Rp50.000'],
        ['Selasa', 'Iuran kas mingguan', 'Rp30.000', '—', 'Rp80.000'],
        ['Rabu', 'Beli spidol & penghapus papan', '—', 'Rp18.000', 'Rp62.000'],
      ]},
    ],
    activityTitle: 'Latihan: Pemasukan & Pengeluaran',
    questions: [
      { text: 'Saldo akhir tabungan Salsa Rp75.000. Minggu ini ia menabung Rp25.000 dan membeli jangka Rp15.000. Saldo akhirnya sekarang adalah...', opts: ['Rp80.000', 'Rp85.000', 'Rp90.000', 'Rp65.000'], ans: 1, exp: '75.000 + 25.000 − 15.000 = Rp85.000.' },
      { text: 'Jika dalam 1 bulan pemasukan Rp120.000 dan pengeluaran Rp95.000, maka sisa uang (surplus/tabungan) adalah...', opts: ['Rp20.000', 'Rp25.000', 'Rp35.000', 'Rp15.000'], ans: 1, exp: '120.000 − 95.000 = Rp25.000.' },
      { text: 'Manfaat bendahara kelas mencatat pemasukan dan pengeluaran di buku kas adalah...', opts: ['Keuangan transparan, jujur, dan mudah dicek saldonya', 'Supaya uang cepat habis', 'Agar rahasia', 'Menambah pekerjaan saja'], ans: 0, exp: 'Pembukuan rapi menjamin kejujuran dan akuntabilitas.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-04', subSeq: 4,
    objectives: ['Siswa mampu memecahkan masalah perencanaan tabungan target dan perhitungan untung-rugi sederhana.'],
    materialTitle: 'Masalah Perencanaan Keuangan & Untung-Rugi',
    blocks: [
      { type: 'formula', name: 'Untung vs Rugi Sederhana', expression: 'Untung = Harga Jual − Harga Beli (jika Jual > Beli)', note: 'Lama menabung untuk target = Target Harga ÷ Tabungan per minggu/hari.' },
      { type: 'worked_example', level: 'Target Menabung', question: 'Raka ingin membeli kamus seharga Rp90.000. Ia sudah punya Rp30.000 dan bisa menabung Rp15.000/minggu. Berapa minggu lagi uangnya cukup?', steps: ['Kekurangan = 90.000 − 30.000 = Rp60.000.', 'Lama menabung = 60.000 ÷ 15.000 = 4 minggu.'], answer: '4 minggu lagi.' },
    ],
    activityTitle: 'Latihan: Masalah Uang & Finansial',
    questions: [
      { text: 'Pedagang membeli 20 kotak pudak total Rp200.000 lalu menjualnya Rp12.500 per kotak. Keuntungan pedagang adalah...', opts: ['Rp25.000', 'Rp50.000', 'Rp40.000', 'Rp75.000'], ans: 1, exp: 'Jual = 20×12.500 = 250.000; Untung = 250.000 − 200.000 = Rp50.000.' },
      { text: 'Salsa ingin membeli sepatu Rp180.000. Ia menabung Rp12.000 setiap minggu dari nol. Berapa minggu uangnya terkumpul?', opts: ['12 minggu', '15 minggu', '18 minggu', '10 minggu'], ans: 1, exp: '180.000 ÷ 12.000 = 15 minggu.' },
      { text: 'Jika harga beli suatu barang Rp40.000 dan terjual Rp35.000, pedagang mengalami...', opts: ['Untung Rp5.000', 'Rugi Rp5.000', 'Impas', 'Diskon'], ans: 1, exp: 'Harga jual < harga beli → rugi Rp5.000.' },
    ],
  },

  // BAB 5: KELILING, LUAS, DAN SUDUT
  {
    topicCode: 'MAT-SD6-05', subSeq: 1,
    objectives: ['Siswa mampu menghitung keliling bangun datar termasuk bangun gabungan dengan cermat menjumlahkan sisi luarnya.'],
    materialTitle: 'Keliling Bangun Datar & Gabungan',
    blocks: [
      { type: 'misconception', wrong: 'Ikut menjumlahkan garis pembatas di TENGAH bangun saat menghitung keliling bangun gabungan.', right: 'Keliling HANYA menjumlahkan panjang sisi-sisi di pinggir LUAR saja — garis yang menempel di dalam TIDAK ikut dihitung!' },
    ],
    activityTitle: 'Latihan: Keliling Bangun Datar',
    questions: [
      { text: 'Keliling sebuah persegi panjang adalah 50 cm. Jika panjangnya 16 cm, maka lebarnya adalah...', opts: ['9 cm', '17 cm', '34 cm', '8 cm'], ans: 0, exp: 'p + l = 50÷2 = 25; l = 25 − 16 = 9 cm.' },
      { text: 'Dua persegi masing-masing bersisi 6 cm ditempel rapat membentuk persegi panjang (12 cm × 6 cm). Keliling bangun gabungannya adalah...', opts: ['48 cm', '36 cm', '72 cm', '30 cm'], ans: 1, exp: 'K = 2 × (12 + 6) = 36 cm (bukan 2×24=48 karena 2 sisi dalam menempel!).' },
      { text: 'Sebuah kebun persegi bersisi 15 m akan dipagari kawat sekelilingnya 2 lapis. Panjang kawat minimal adalah...', opts: ['60 m', '120 m', '225 m', '90 m'], ans: 1, exp: '1 lapis = 4×15 = 60 m; 2 lapis = 120 m.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-05', subSeq: 2,
    objectives: ['Siswa mampu menghitung luas segitiga, trapesium, jajar genjang, belah ketupat, dan layang-layang beserta soal balikannya.'],
    materialTitle: 'Luas Segitiga dan Segiempat',
    blocks: [
      { type: 'worked_example', level: 'Trapesium', question: 'Hitung luas trapesium dengan sisi sejajar a = 10 cm, b = 16 cm, dan tinggi t = 8 cm!', steps: ['Rumus: L = 1/2 × (a + b) × t.', 'L = 1/2 × (10 + 16) × 8 = 1/2 × 26 × 8 = 13 × 8 = 104 cm².'], answer: '104 cm².' },
    ],
    activityTitle: 'Latihan: Luas Segitiga & Segiempat',
    questions: [
      { text: 'Luas trapesium dengan sisi sejajar 8 cm dan 14 cm serta tinggi 6 cm adalah...', opts: ['66 cm²', '132 cm²', '48 cm²', '84 cm²'], ans: 0, exp: '1/2 × (8+14) × 6 = 1/2 × 22 × 6 = 66 cm².' },
      { text: 'Luas sebuah segitiga adalah 54 cm². Jika panjang alasnya 12 cm, maka tingginya adalah...', opts: ['4,5 cm', '9 cm', '6 cm', '18 cm'], ans: 1, exp: 't = (2 × L) ÷ a = 108 ÷ 12 = 9 cm.' },
      { text: 'Luas belah ketupat dengan panjang diagonal 12 cm dan 16 cm adalah...', opts: ['192 cm²', '96 cm²', '56 cm²', '28 cm²'], ans: 1, exp: '1/2 × 12 × 16 = 96 cm².' },
    ],
  },
  {
    topicCode: 'MAT-SD6-05', subSeq: 3,
    objectives: ['Siswa mampu menghitung luas bangun gabungan dengan metode penjumlahan potongan maupun pengurangan bagian kosong.'],
    materialTitle: 'Luas Gabungan Bangun Datar',
    blocks: [
      { type: 'worked_example', level: 'Metode Penjumlahan & Pengurangan', question: 'Sebuah gambar rumah terdiri dari dinding persegi panjang (10 cm × 6 cm) dan atap segitiga (alas 10 cm, tinggi 4 cm). Berapa luas seluruhnya?', steps: ['Luas dinding = 10 × 6 = 60 cm².', 'Luas atap segitiga = 1/2 × 10 × 4 = 20 cm².', 'Total luas = 60 + 20 = 80 cm².'], answer: '80 cm².' },
    ],
    activityTitle: 'Latihan: Luas Gabungan',
    questions: [
      { text: 'Bangun gabungan terdiri dari persegi (sisi 8 cm) dan segitiga siku-siku (alas 6 cm, tinggi 8 cm). Total luasnya adalah...', opts: ['88 cm²', '112 cm²', '64 cm²', '96 cm²'], ans: 0, exp: '(8×8) + (1/2×6×8) = 64 + 24 = 88 cm².' },
      { text: 'Kertas persegi panjang (20 cm × 12 cm) dipotong tengahnya berbentuk persegi bersisi 5 cm. Luas sisa kertas adalah...', opts: ['240 cm²', '215 cm²', '265 cm²', '190 cm²'], ans: 1, exp: '240 − 25 = 215 cm².' },
      { text: 'Langkah terbaik menghitung luas bangun tidak beraturan berbentuk huruf L atau T adalah...', opts: ['Membaginya menjadi beberapa persegi/persegi panjang lalu menjumlahkan luasnya', 'Menghitung kelilingnya saja', 'Mengukur berat kertasnya', 'Menebak'], ans: 0, exp: 'Dekomposisi mempermudah perhitungan luas gabungan.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-05', subSeq: 4,
    objectives: ['Siswa mampu menghitung durasi waktu lintas jam, jadwal perjalanan, dan perbedaan zona waktu Indonesia (WIB–WITA–WIT).'],
    materialTitle: 'Durasi Waktu dan Perbedaan Zona Waktu',
    blocks: [
      { type: 'worked_example', level: 'Lintas Zona Waktu', question: 'Pesawat berangkat dari Surabaya (WIB) pukul 09.30 dengan lama terbang 1 jam 45 menit menuju Makassar (WITA). Pukul berapa tiba waktu setempat Makassar?', steps: ['Waktu tiba dalam WIB = 09.30 + 1 jam 45 menit = 11.15 WIB.', 'Karena WITA = WIB + 1 jam, maka 11.15 + 1 jam = 12.15 WITA.'], answer: 'Pukul 12.15 WITA.' },
    ],
    activityTitle: 'Latihan: Durasi Waktu',
    questions: [
      { text: 'Ujian dimulai pukul 07.45 dan berlangsung selama 1 jam 50 menit. Ujian selesai pukul...', opts: ['09.25', '09.35', '08.95', '09.45'], ans: 1, exp: '07.45 + 1 jam = 08.45; + 50 menit = 09.35.' },
      { text: 'Kereta berangkat pukul 22.30 malam dan tiba pukul 04.15 pagi keesokan harinya. Lama perjalanan adalah...', opts: ['5 jam 45 menit', '6 jam 15 menit', '5 jam 15 menit', '4 jam 45 menit'], ans: 0, exp: '22.30 → 24.00 (1 jam 30 mnt) + 4 jam 15 mnt = 5 jam 45 menit.' },
      { text: 'Jika di Gresik pukul 10.00 WIB, maka pada saat yang sama di Jayapura (WIT) pukul...', opts: ['08.00', '11.00', '12.00', '13.00'], ans: 2, exp: 'WIT lebih cepat 2 jam dari WIB → 12.00 WIT.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-05', subSeq: 5,
    objectives: ['Siswa mampu menghitung besar sudut pada bangun segitiga (180°), segiempat (360°), dan sudut berpelurus/berpenyiku dasar.'],
    materialTitle: 'Pengukuran dan Perhitungan Sudut',
    blocks: [
      { type: 'formula', name: 'Aturan Jumlah Sudut Penting', expression: 'Segitiga = 180°  |  Segiempat = 360°  |  Sudut Lurus = 180°  |  1 Putaran Penuh = 360°', note: 'Gunakan aturan ini untuk mencari sudut yang belum diketahui tanpa busur!' },
      { type: 'worked_example', level: 'Mencari Sudut Segitiga', question: 'Dua sudut pada segitiga besarnya 65° dan 45°. Berapa besar sudut ketiganya?', steps: ['Jumlah sudut segitiga = 180°.', 'Sudut ke-3 = 180° − (65° + 45°) = 180° − 110° = 70°.'], answer: '70°.' },
    ],
    activityTitle: 'Latihan: Pengukuran Sudut',
    questions: [
      { text: 'Pada segitiga siku-siku, salah satu sudut lancipnya 35°. Besar sudut lancip lainnya adalah...', opts: ['45°', '55°', '65°', '145°'], ans: 1, exp: '180° − 90° − 35° = 55°.' },
      { text: 'Jumlah keempat sudut dalam pada SEMUA bangun segiempat adalah...', opts: ['180°', '270°', '360°', '90°'], ans: 2, exp: 'Segiempat terbagi menjadi 2 segitiga → 2 × 180° = 360°.' },
      { text: 'Besar sudut terkecil yang dibentuk jarum jam pukul 04.00 adalah...', opts: ['90°', '100°', '120°', '150°'], ans: 2, exp: '4 angka × 30° = 120°.' },
    ],
  },

  // BAB 6: BANGUN RUANG DAN PETA
  {
    topicCode: 'MAT-SD6-06', subSeq: 1,
    objectives: ['Siswa mampu menghitung volume dan luas permukaan kubus serta balok secara tepat.'],
    materialTitle: 'Volume & Luas Permukaan Kubus dan Balok',
    blocks: [
      { type: 'table', title: 'Rumus Lengkap Kubus & Balok', headers: ['Bangun', 'Volume (Isi)', 'Luas Permukaan (Seluruh Sisi Luar)'], rows: [
        ['Kubus (rusuk s)', 'V = s × s × s = s³', 'LP = 6 × s × s'],
        ['Balok (p, l, t)', 'V = p × l × t', 'LP = 2 × (p×l + p×t + l×t)'],
      ]},
      { type: 'tip', text: 'Ingat konversi liter! 1 liter = 1 dm³ = 1.000 cm³!' },
    ],
    activityTitle: 'Latihan: Kubus & Balok',
    questions: [
      { text: 'Luas permukaan kubus dengan panjang rusuk 7 cm adalah...', opts: ['49 cm²', '294 cm²', '343 cm²', '84 cm²'], ans: 1, exp: 'LP = 6 × 7 × 7 = 6 × 49 = 294 cm².' },
      { text: 'Sebuah akuarium balok berukuran 50 cm × 30 cm × 40 cm. Volumenya dalam LITER adalah...', opts: ['6 liter', '60 liter', '600 liter', '120 liter'], ans: 1, exp: 'V = 50×30×40 = 60.000 cm³ = 60.000÷1.000 = 60 liter.' },
      { text: 'Volume sebuah kubus adalah 512 cm³. Panjang rusuk kubus tersebut adalah...', opts: ['6 cm', '7 cm', '8 cm', '9 cm'], ans: 2, exp: '8 × 8 × 8 = 512 → s = 8 cm.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-06', subSeq: 2,
    objectives: ['Siswa mampu menghitung volume bangun ruang gabungan (kubus + balok atau dua balok).'],
    materialTitle: 'Bangun Ruang Gabungan',
    blocks: [
      { type: 'worked_example', level: 'Volume Gabungan', question: 'Sebuah tugu mainan terdiri atas kubus (rusuk 6 cm) di atas balok (12 cm × 6 cm × 5 cm). Berapa volume totalnya?', steps: ['V kubus = 6 × 6 × 6 = 216 cm³.', 'V balok = 12 × 6 × 5 = 360 cm³.', 'V gabungan = 216 + 360 = 576 cm³.'], answer: '576 cm³.' },
    ],
    activityTitle: 'Latihan: Bangun Ruang Gabungan',
    questions: [
      { text: 'Bangun gabungan terdiri dari kubus (rusuk 5 cm) dan balok (10 cm × 5 cm × 4 cm). Total volumenya adalah...', opts: ['200 cm³', '325 cm³', '225 cm³', '425 cm³'], ans: 1, exp: '125 + 200 = 325 cm³.' },
      { text: 'Dua kubus identik masing-masing bervolume 64 cm³ ditumpuk. Volume totalnya adalah...', opts: ['64 cm³', '128 cm³', '256 cm³', '96 cm³'], ans: 1, exp: '64 + 64 = 128 cm³.' },
      { text: 'Untuk menghitung volume bangun ruang berbentuk tangga, cara paling mudah adalah...', opts: ['Memecahnya menjadi beberapa balok lalu menjumlahkan volumenya', 'Mengalikan semua angka sekaligus', 'Menghitung keliling alas saja', 'Menimbang'], ans: 0, exp: 'Dekomposisi menjadi balok-balok sederhana lalu dijumlahkan.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-06', subSeq: 3,
    objectives: ['Siswa mampu memvisualisasikan tampak depan, tampak atas, dan tampak samping suatu susunan kubus (proyeksi 3D ke 2D).'],
    materialTitle: 'Visualisasi Spasial: Tampak Depan, Atas, dan Samping',
    blocks: [
      { type: 'visual_cards', title: '3 Arah Pandang Susunan Kubus', cards: [
        { emoji: '👀', label: 'Tampak Depan', sub: 'Melihat lebar & ketinggian tiap kolom dari arah muka' },
        { emoji: '🦅', label: 'Tampak Atas (Denah)', sub: 'Melihat tapak/jejak susunan seperti dilihat burung dari atas' },
        { emoji: '👉', label: 'Tampak Samping (Kanan/Kiri)', sub: 'Melihat kedalaman dan ketinggian susunan dari samping' },
      ]},
    ],
    activityTitle: 'Latihan: Tampak Depan, Atas, Samping',
    questions: [
      { text: 'Sebuah menara lurus tersusun dari 4 kubus ditumpuk tegak ke atas. Jika dilihat dari ATAS, bentuk yang terlihat adalah...', opts: ['4 persegi berjajar', '1 persegi saja', '1 segitiga', '4 lingkaran'], ans: 1, exp: 'Dari atas hanya tampak atap kubus paling puncak (1 persegi).' },
      { text: 'Menara 4 kubus tegak tersebut jika dilihat dari DEPAN akan tampak sebagai...', opts: ['4 persegi tersusun vertikal ke atas', '1 persegi', '4 persegi mendatar', 'Lingkaran'], ans: 0, exp: 'Dari depan terlihat seluruh tinggi 4 susun ke atas.' },
      { text: 'Jika suatu tabung (kaleng susu) berdiri tegak dan dilihat dari ATAS, bentuk yang terlihat adalah...', opts: ['Persegi panjang', 'Lingkaran', 'Segitiga', 'Trapesium'], ans: 1, exp: 'Tutup tabung berbentuk lingkaran; dari depan/samping tampak persegi panjang.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-06', subSeq: 4,
    objectives: ['Siswa mampu membaca dan menentukan koordinat posisi serta lintasan pada peta berpetak (grid sistem huruf–angka).'],
    materialTitle: 'Posisi dan Lokasi pada Peta Berpetak',
    blocks: [
      { type: 'formula', name: 'Aturan Baca Koordinat Peta Berpetak', expression: 'Baca MENDATAR (Sumbu X / Kolom) DULU  →  baru TEGAK (Sumbu Y / Baris)!', note: 'Ingat: "Jalan dulu ke kanan (A, B, C...), baru naik lift ke atas (1, 2, 3...)!"' },
      { type: 'worked_example', level: 'Lintasan Grid', question: 'Sekolah di petak (B, 2) dan Perpustakaan di petak (E, 4). Bagaimana lintasan terpendeknya?', steps: ['Dari kolom B ke E = 3 petak ke kanan (timur).', 'Dari baris 2 ke 4 = 2 petak ke atas (utara).'], answer: '3 petak ke kanan (timur), lalu 2 petak ke atas (utara).' },
    ],
    activityTitle: 'Latihan: Peta Berpetak',
    questions: [
      { text: 'Pada sistem petak (Kolom, Baris), jika Rumah di (A, 1) dan Taman di (D, 3), perpindahan dari Rumah ke Taman adalah...', opts: ['3 petak ke kanan dan 2 petak ke atas', '2 petak ke kanan dan 3 petak ke atas', '4 petak ke kiri', '1 petak ke bawah'], ans: 0, exp: 'A→D = 3 langkah kanan; 1→3 = 2 langkah atas.' },
      { text: 'Urutan membaca koordinat titik (x, y) pada bidang berpetak yang benar adalah...', opts: ['Sumbu mendatar dulu, baru sumbu tegak', 'Sumbu tegak dulu, baru mendatar', 'Acak saja', 'Dari belakang'], ans: 0, exp: 'Selalu baca horizontal (x/kolom) dulu, lalu vertikal (y/baris).' },
      { text: 'Jika kamu berada di (C, 5) lalu bergerak 2 petak ke kiri (barat) dan 1 petak ke bawah (selatan), posisimu sekarang di...', opts: ['(A, 4)', '(E, 6)', '(B, 4)', '(A, 6)'], ans: 0, exp: 'C mundur 2 → A; 5 turun 1 → 4 → (A, 4).' },
    ],
  },

  // BAB 7: PENGOLAHAN DATA
  {
    topicCode: 'MAT-SD6-07', subSeq: 1,
    objectives: ['Siswa mampu menyajikan data dalam tabel frekuensi serta menghitung rata-rata (mean), median, dan modus sederhana.'],
    materialTitle: 'Tabel Frekuensi, Rata-Rata (Mean), Median, dan Modus',
    blocks: [
      { type: 'table', title: '3 Ukuran Pemusatan Data Wajib Paham!', headers: ['Ukuran', 'Artinya / Rumusnya', 'Contoh pada Data: 6, 7, 8, 8, 11'], rows: [
        ['Modus', 'Data yang PALING SERING muncul', '8 (muncul 2 kali)'],
        ['Median', 'Nilai TENGAH setelah data DIURUTKAN!', '8 (posisi ke-3 dari 5 data urut)'],
        ['Mean (Rata-Rata)', 'Jumlah seluruh data ÷ Banyak data', '(6+7+8+8+11) ÷ 5 = 40 ÷ 5 = 8'],
      ]},
      { type: 'misconception', wrong: 'Langsung mengambil angka di tengah untuk Median padahal datanya BELUM DIURUTKAN.', right: 'Untuk mencari Median, data HARUS DIURUTKAN dari terkecil ke terbesar terlebih dahulu!' },
    ],
    activityTitle: 'Latihan: Tabel Frekuensi & Mean/Median/Modus',
    questions: [
      { text: 'Rata-rata (mean) dari nilai ulangan: 70, 80, 90, 80, 80 adalah...', opts: ['78', '80', '82', '85'], ans: 1, exp: '(70+80+90+80+80) ÷ 5 = 400 ÷ 5 = 80.' },
      { text: 'Median (nilai tengah) dari data: 9, 5, 7, 6, 8 adalah...', opts: ['5', '6', '7', '8'], ans: 2, exp: 'Urutkan dulu: 5, 6, 7, 8, 9 → tengahnya adalah 7.' },
      { text: 'Modus dari data berat badan (kg): 34, 36, 35, 36, 38, 36, 35 adalah...', opts: ['34', '35', '36', '38'], ans: 2, exp: '36 muncul 3 kali (paling sering).' },
    ],
  },
  {
    topicCode: 'MAT-SD6-07', subSeq: 2,
    objectives: ['Siswa mampu membaca dan menganalisis informasi perbandingan serta rata-rata dari diagram batang.'],
    materialTitle: 'Analisis Diagram Batang',
    blocks: [
      { type: 'worked_example', level: 'Rata-Rata dari Diagram Batang', question: 'Diagram batang menunjukkan pengunjung perpustakaan: Senin 30, Selasa 45, Rabu 35, Kamis 50, Jumat 40. Berapa rata-rata pengunjung per hari?', steps: ['Jumlahkan semua tinggi batang: 30 + 45 + 35 + 50 + 40 = 200.', 'Bagi dengan 5 hari: 200 ÷ 5 = 40 pengunjung/hari.'], answer: '40 pengunjung per hari.' },
    ],
    activityTitle: 'Latihan: Analisis Diagram Batang',
    questions: [
      { text: 'Data pengunjung: Senin (30), Selasa (45), Rabu (35), Kamis (50), Jumat (40). Hari dengan pengunjung DI ATAS rata-rata (40) adalah...', opts: ['Senin dan Rabu', 'Selasa dan Kamis', 'Jumat saja', 'Semua hari'], ans: 1, exp: 'Yang lebih dari 40 adalah Selasa (45) dan Kamis (50).' },
      { text: 'Kenaikan tertinggi antardua hari berurutan pada data di atas terjadi pada...', opts: ['Senin ke Selasa (+15) dan Rabu ke Kamis (+15)', 'Selasa ke Rabu', 'Kamis ke Jumat', 'Tidak ada kenaikan'], ans: 0, exp: '30→45 (+15) dan 35→50 (+15).' },
      { text: 'Jangkauan (selisih nilai tertinggi dan terendah) pada data di atas adalah...', opts: ['10', '15', '20', '25'], ans: 2, exp: '50 − 30 = 20.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-07', subSeq: 3,
    objectives: ['Siswa mampu mengonversi piktogram berskala besar ke tabel frekuensi dan persentase sederhana.'],
    materialTitle: 'Analisis Piktogram Lanjutan',
    blocks: [
      { type: 'worked_example', level: 'Piktogram ke Persentase', question: 'Pada piktogram hobi 20 siswa (⭐ = 2 siswa): Membaca 5⭐, Olahraga 3⭐, Seni 2⭐. Berapa persen siswa yang hobi Membaca?', steps: ['Hobi Membaca = 5 × 2 = 10 siswa.', 'Total = (5+3+2) × 2 = 20 siswa.', 'Persentase = (10 / 20) × 100% = 50%.'], answer: '50%.' },
    ],
    activityTitle: 'Latihan: Piktogram Lanjutan',
    questions: [
      { text: 'Pada piktogram (⭐ = 4 siswa), Kelas 6A memiliki 7⭐ dan Kelas 6B memiliki 8⭐. Total siswa kelas 6 adalah...', opts: ['15 siswa', '56 siswa', '60 siswa', '64 siswa'], ans: 2, exp: '(7 + 8) × 4 = 60 siswa.' },
      { text: 'Jika 12 dari 40 siswa menyukai Matematika, persentasenya adalah...', opts: ['25%', '30%', '35%', '40%'], ans: 1, exp: '(12/40) × 100% = 30%.' },
      { text: 'Manfaat mengubah piktogram menjadi tabel angka adalah...', opts: ['Lebih cepat menghitung total, rata-rata, dan persentase', 'Menghilangkan data', 'Membuat gambar hilang maknanya', 'Lebih sulit dibaca'], ans: 0, exp: 'Tabel angka memudahkan komputasi statistik.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-07', subSeq: 4,
    objectives: ['Siswa mampu menganalisis data hasil pengukuran (tinggi badan, berat badan, suhu) dan menarik kesimpulan akurat.'],
    materialTitle: 'Membaca & Menganalisis Data Pengukuran',
    blocks: [
      { type: 'table', title: 'Data Tinggi Badan 6 Siswa Kelas 6 (cm)', headers: ['Nama', 'Alya', 'Bima', 'Dina', 'Raka', 'Salsa', 'Tio'], rows: [
        ['Tinggi (cm)', '145', '150', '142', '152', '148', '145'],
      ]},
      { type: 'worked_example', level: 'Median Data Genap', question: 'Hitung Median dari 6 data tinggi badan di atas!', steps: ['Urutkan dulu: 142, 145, 145, 148, 150, 152.', 'Karena banyak data GENAP (6), ambil rata-rata 2 data tengah (ke-3 dan ke-4): (145 + 148) ÷ 2 = 146,5 cm!'], answer: 'Median = 146,5 cm.' },
    ],
    activityTitle: 'Latihan: Analisis Data Pengukuran',
    questions: [
      { text: 'Dari data urut 140, 144, 146, 150 (4 data genap), mediannya adalah...', opts: ['144', '145', '146', '147'], ans: 1, exp: 'Rata-rata dua nilai tengah: (144 + 146) ÷ 2 = 145.' },
      { text: 'Rata-rata tinggi 6 siswa: 145, 150, 142, 152, 148, 145 adalah...', opts: ['146 cm', '147 cm', '148 cm', '145 cm'], ans: 1, exp: 'Jumlah = 882; 882 ÷ 6 = 147 cm.' },
      { text: 'Jika suatu kelas terdiri dari 4 siswa dengan nilai rata-rata 85, maka JUMLAH total nilai keempat siswa tersebut adalah...', opts: ['320', '340', '360', '255'], ans: 1, exp: 'Jumlah = Rata-rata × Banyak data = 85 × 4 = 340.' },
    ],
  },

  // BAB 8: PELUANG SEDERHANA
  {
    topicCode: 'MAT-SD6-08', subSeq: 1,
    objectives: ['Siswa mampu memahami percobaan acak sederhana (koin, dadu, spinner, pengambilan bola) dan mendaftar semua hasil yang mungkin (ruang sampel).'],
    materialTitle: 'Percobaan Acak Sederhana',
    blocks: [
      { type: 'visual_cards', title: 'Contoh Percobaan Acak & Semua Hasil Mungkinnya', cards: [
        { emoji: '🪙', label: 'Melempar 1 Koin', sub: '2 hasil mungkin: {Angka, Gambar}' },
        { emoji: '🎲', label: 'Melempar 1 Dadu', sub: '6 hasil mungkin: {1, 2, 3, 4, 5, 6}' },
        { emoji: '🎡', label: 'Memutar Roda Warna (Spinner)', sub: 'Tergantung luas & banyak juring warna pada roda!' },
      ]},
    ],
    activityTitle: 'Latihan: Percobaan Acak',
    questions: [
      { text: 'Semua hasil yang mungkin muncul saat melempar sebuah dadu bersisi enam adalah...', opts: ['{1, 2, 3}', '{1, 2, 3, 4, 5, 6}', '{2, 4, 6}', '{Angka, Gambar}'], ans: 1, exp: 'Dadu standar memiliki 6 mata: 1, 2, 3, 4, 5, 6.' },
      { text: 'Percobaan yang hasilnya tidak dapat dipastikan sebelumnya meskipun semua kemungkinannya diketahui disebut...', opts: ['Percobaan acak', 'Pengukuran panjang', 'Pembulatan', 'Simetri'], ans: 0, exp: 'Contoh percobaan acak: lempar dadu, lempar koin, undian.' },
      { text: 'Pada pelemparan 1 dadu, banyaknya mata dadu yang merupakan bilangan GENAP adalah...', opts: ['2 (yaitu 2, 4)', '3 (yaitu 2, 4, 6)', '4', '6'], ans: 1, exp: 'Bilangan genap pada dadu: 2, 4, 6 (ada 3 dari 6).' },
    ],
  },
  {
    topicCode: 'MAT-SD6-08', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi dan membandingkan kejadian dengan kemungkinan lebih besar dalam permainan atau undian.'],
    materialTitle: 'Kejadian dengan Kemungkinan Lebih Besar',
    blocks: [
      { type: 'worked_example', level: 'Permainan Adil vs Tidak Adil', question: 'Dalam kotak undian ada 7 kupon Merah, 2 kupon Biru, dan 1 kupon Kuning. Kupon warna apa yang peluang terambilnya paling besar?', steps: ['Total kupon = 7 + 2 + 1 = 10.', 'Merah punya 7 dari 10 kesempatan (7/10 = 70%), jauh lebih besar dari Biru (2/10) dan Kuning (1/10).'], answer: 'Kupon Merah memiliki kemungkinan terbesar!' },
    ],
    activityTitle: 'Latihan: Kemungkinan Lebih Besar',
    questions: [
      { text: 'Sebuah spinner dibagi 8 bagian sama besar: 5 bagian hijau, 2 kuning, 1 merah. Jika diputar, panah paling mungkin berhenti di warna...', opts: ['Merah', 'Kuning', 'Hijau', 'Biru'], ans: 2, exp: 'Hijau menempati 5 dari 8 bagian (paling luas).' },
      { text: 'Pada pelemparan 1 dadu, manakah kejadian yang kemungkinannya LEBIH BESAR?', opts: ['Muncul mata dadu 6 (1/6)', 'Muncul mata dadu lebih dari 2 (yaitu 3, 4, 5, 6 → 4/6)', 'Muncul mata dadu 1 (1/6)', 'Muncul mata dadu 7 (0/6)'], ans: 1, exp: '4 dari 6 jauh lebih besar daripada 1 dari 6.' },
      { text: 'Suatu permainan undian disebut ADIL bagi dua pemain A dan B jika...', opts: ['Keduanya memiliki besar kemungkinan menang yang SAMA (seimbang)', 'A selalu menang', 'B tidak punya kesempatan', 'Dadu diberi pemberat'], ans: 0, exp: 'Permainan adil memberi peluang menang setara bagi semua pemain.' },
    ],
  },
  {
    topicCode: 'MAT-SD6-08', subSeq: 3,
    objectives: ['Siswa mampu menentukan kejadian dengan kemungkinan lebih kecil, mustahil (0), dan pasti (1) serta menyatakan peluang pecahan sederhana.'],
    materialTitle: 'Kejadian Kemungkinan Lebih Kecil & Pecahan Peluang',
    blocks: [
      { type: 'formula', name: 'Peluang Sederhana (Pengantar ke SMP)', expression: 'Peluang = (Banyak hasil diinginkan) / (Total semua hasil mungkin)', note: 'Nilai peluang selalu di antara 0 (mustahil) sampai 1 (pasti)!' },
      { type: 'tip', text: 'Makin KECIL pecahan peluangnya (misal 1/10 dibanding 5/10), makin KECIL kemungkinan kejadian itu muncul!' },
    ],
    activityTitle: 'Latihan: Kemungkinan Lebih Kecil',
    questions: [
      { text: 'Dalam kantong ada 6 bola putih, 3 bola hitam, dan 1 bola emas. Bola yang kemungkinannya PALING KECIL terambil secara acak adalah...', opts: ['Putih', 'Hitam', 'Emas', 'Sama semua'], ans: 2, exp: 'Bola emas hanya 1 dari 10 (peluang 1/10).' },
      { text: 'Peluang munculnya mata dadu prima (2, 3, 5) pada pelemparan 1 dadu adalah...', opts: ['1/6', '2/6', '3/6 = 1/2', '5/6'], ans: 2, exp: 'Ada 3 bilangan prima dari 6 sisi dadu → 3/6 = 1/2.' },
      { text: 'Jika peluang suatu kejadian adalah 0, artinya kejadian tersebut...', opts: ['Pasti terjadi', 'Mustahil (tidak mungkin) terjadi', 'Sama mungkin', 'Sering terjadi'], ans: 1, exp: '0 = mustahil; 1 = pasti.' },
    ],
  },
];

upsertLessonsBatch('Kelas 6 SD — Matematika (8 Bab, 32 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

