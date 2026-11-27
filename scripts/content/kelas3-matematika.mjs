import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: BILANGAN SAMPAI 10.000
  {
    topicCode: 'MAT-SD3-01', subSeq: 1,
    objectives: ['Siswa mampu membaca dan menuliskan bilangan cacah sampai 10.000 dengan benar.'],
    materialTitle: 'Membaca dan Menulis Bilangan sampai 10.000',
    blocks: [
      { type: 'story_panel', title: 'Kenalan dengan Ribuan!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Di kelas 3 kita belajar bilangan sampai 10.000! Tanda titik (.) memisahkan ribuan dari ratusan.' },
        { speaker: 'Raka', avatar: '👦', text: 'Jadi 2.450 dibaca dua ribu empat ratus lima puluh ya Bu!' },
      ]},
      { type: 'flashcards', title: 'Coba Baca Dulu, Lalu Klik untuk Cek!', cards: [
        { emoji: '🔢', front: '1.250', back: 'Seribu dua ratus lima puluh' },
        { emoji: '🔢', front: '3.075', back: 'Tiga ribu tujuh puluh lima' },
        { emoji: '🔢', front: '5.408', back: 'Lima ribu empat ratus delapan' },
        { emoji: '🔢', front: '8.900', back: 'Delapan ribu sembilan ratus' },
        { emoji: '🎯', front: '10.000', back: 'Sepuluh ribu' },
      ]},
      { type: 'tip', text: 'Jika ada angka 0 di tengah (seperti 3.075), nolnya tidak perlu dibaca — langsung loncat ke puluhan/satuan!' },
    ],
    activityTitle: 'Latihan: Membaca & Menulis Bilangan sampai 10.000',
    questions: [
      { text: 'Lambang bilangan dari "empat ribu dua ratus enam puluh lima" adalah...', opts: ['4.256', '4.265', '4.625', '42.65'], ans: 1, exp: '4.000 + 200 + 60 + 5 = 4.265.' },
      { text: 'Bilangan 3.048 dibaca...', opts: ['Tiga ribu empat ratus delapan', 'Tiga ribu empat puluh delapan', 'Tiga puluh empat delapan', 'Tiga ribu delapan puluh empat'], ans: 1, exp: 'Ratusannya 0 sehingga tidak dibaca: tiga ribu empat puluh delapan.' },
      { text: 'Lambang bilangan dari "tujuh ribu lima puluh" adalah...', opts: ['7.500', '7.005', '7.050', '750'], ans: 2, exp: '7 ribuan, 0 ratusan, 5 puluhan, 0 satuan = 7.050.' },
      { text: 'Harga sebungkus pudak khas Gresik Rp6.500. Bilangan 6.500 dibaca...', opts: ['Enam ribu lima puluh', 'Enam ribu lima ratus', 'Enam ratus lima puluh', 'Lima ribu enam ratus'], ans: 1, exp: '6.500 dibaca enam ribu lima ratus.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-01', subSeq: 2,
    objectives: ['Siswa mampu menentukan nilai tempat ribuan, ratusan, puluhan, dan satuan.'],
    materialTitle: 'Nilai Tempat Ribuan, Ratusan, Puluhan, Satuan',
    blocks: [
      { type: 'table', title: 'Rumah Nilai Tempat', headers: ['Bilangan', 'Ribuan', 'Ratusan', 'Puluhan', 'Satuan'], rows: [
        ['2.475', '2 (2.000)', '4 (400)', '7 (70)', '5 (5)'],
        ['6.038', '6 (6.000)', '0 (0)', '3 (30)', '8 (8)'],
        ['9.510', '9 (9.000)', '5 (500)', '1 (10)', '0 (0)'],
      ]},
      { type: 'worked_example', level: 'Dasar', question: 'Berapa nilai angka 4 pada bilangan 5.482?', steps: ['Hitung posisi dari kanan: 2 (satuan), 8 (puluhan), 4 (ratusan), 5 (ribuan).', 'Karena 4 berada di tempat ratusan, nilainya adalah 400.'], answer: 'Nilai tempat = ratusan, nilai angka = 400.' },
    ],
    activityTitle: 'Latihan: Nilai Tempat sampai Ribuan',
    questions: [
      { text: 'Pada bilangan 7.362, angka 3 menempati nilai tempat...', opts: ['Ribuan', 'Ratusan', 'Puluhan', 'Satuan'], ans: 1, exp: 'Dari kiri: 7 ribuan, 3 ratusan, 6 puluhan, 2 satuan.' },
      { text: 'Nilai angka 8 pada bilangan 8.145 adalah...', opts: ['8', '80', '800', '8.000'], ans: 3, exp: 'Angka 8 di tempat ribuan bernilai 8.000.' },
      { text: '3 ribuan + 0 ratusan + 6 puluhan + 9 satuan adalah...', opts: ['3.690', '3.069', '3.609', '369'], ans: 1, exp: '3.000 + 0 + 60 + 9 = 3.069.' },
      { text: 'Selisih nilai angka 5 pada 5.200 dan 2.500 adalah...', opts: ['4.500', '3.500', '5.000', '500'], ans: 0, exp: '5.000 − 500 = 4.500.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-01', subSeq: 3,
    objectives: ['Siswa mampu membandingkan dua bilangan cacah sampai 10.000 menggunakan tanda >, <, atau =.'],
    materialTitle: 'Membandingkan Bilangan sampai 10.000',
    blocks: [
      { type: 'visual_cards', title: 'Tiga Tanda Perbandingan', cards: [
        { emoji: '🐊', label: '> Lebih Besar', sub: 'Mulut buaya makan angka besar: 4.500 > 3.900' },
        { emoji: '🐦', label: '< Lebih Kecil', sub: 'Paruh runcing menunjuk angka kecil: 2.150 < 2.510' },
        { emoji: '⚖️', label: '= Sama Dengan', sub: 'Nilainya sama persis: 3.400 = 3.400' },
      ]},
      { type: 'list', title: 'Langkah Membandingkan Cepat', items: ['Bandingkan dari KIRI (ribuan) terlebih dahulu.', 'Jika ribuan sama, lanjut bandingkan ratusan.', 'Jika ratusan sama, bandingkan puluhan, lalu satuan.'] },
    ],
    activityTitle: 'Latihan: Membandingkan Bilangan',
    questions: [
      { text: 'Tanda yang tepat untuk 4.620 ... 4.260 adalah...', opts: ['>', '<', '=', '+'], ans: 0, exp: 'Ribuan sama (4), tetapi ratusan 6 > 2, jadi 4.620 > 4.260.' },
      { text: 'Manakah perbandingan yang BENAR?', opts: ['3.890 > 4.100', '5.045 < 5.405', '7.200 < 7.020', '6.150 = 6.510'], ans: 1, exp: 'Pada 5.045 vs 5.405, ratusan 0 < 4 sehingga 5.045 < 5.405.' },
      { text: 'Bilangan yang lebih besar dari 6.785 adalah...', opts: ['6.758', '6.875', '6.780', '5.999'], ans: 1, exp: '6.875 memiliki ratusan 8 (lebih besar dari 7).' },
    ],
  },
  {
    topicCode: 'MAT-SD3-01', subSeq: 4,
    objectives: ['Siswa mampu mengurutkan sekumpulan bilangan cacah sampai 10.000 dari terkecil maupun terbesar.'],
    materialTitle: 'Mengurutkan Bilangan sampai 10.000',
    blocks: [
      { type: 'worked_example', level: 'Dasar', question: 'Urutkan dari TERKECIL: 3.450, 2.980, 3.120, 4.010', steps: ['Lihat ribuannya: 2.980 (ribuan 2) paling kecil.', 'Antara 3.450 dan 3.120, bandingkan ratusan: 1 < 4, jadi 3.120 lebih kecil.', 'Ribuan 4 (4.010) paling besar.'], answer: '2.980, 3.120, 3.450, 4.010' },
      { type: 'tip', text: 'Coret satu per satu angka yang sudah ditulis agar tidak ada yang terlewat atau tertulis dua kali.' },
    ],
    activityTitle: 'Latihan: Mengurutkan Bilangan',
    questions: [
      { text: 'Urutan dari TERKECIL: 2.500, 1.850, 2.150, 3.000 adalah...', opts: ['1.850, 2.150, 2.500, 3.000', '3.000, 2.500, 2.150, 1.850', '1.850, 2.500, 2.150, 3.000', '2.150, 1.850, 2.500, 3.000'], ans: 0, exp: 'Ribuan & ratusan naik berurutan: 1.850 < 2.150 < 2.500 < 3.000.' },
      { text: 'Urutan dari TERBESAR: 4.120, 4.510, 4.090, 4.210 adalah...', opts: ['4.090, 4.120, 4.210, 4.510', '4.510, 4.210, 4.120, 4.090', '4.510, 4.120, 4.210, 4.090', '4.210, 4.510, 4.120, 4.090'], ans: 1, exp: 'Ratusan turun: 5, 2, 1, 0.' },
      { text: 'Dalam urutan 1.200, 1.400, ..., 1.800, bilangan yang tepat mengisi titik-titik adalah...', opts: ['1.500', '1.600', '1.700', '1.450'], ans: 1, exp: 'Pola naik 200 setiap langkah: 1.400 + 200 = 1.600.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-01', subSeq: 5,
    objectives: ['Siswa mampu menyusun (komposisi) dan mengurai (dekomposisi) bilangan sampai 10.000.'],
    materialTitle: 'Komposisi dan Dekomposisi Bilangan',
    blocks: [
      { type: 'story_panel', title: 'Bongkar Pasang Bilangan!', lines: [
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Komposisi artinya menyusun potongan menjadi satu bilangan. Dekomposisi artinya membongkar bilangan sesuai nilai tempatnya!' },
        { speaker: 'Salsa', avatar: '👧', text: 'Seperti uang jajan ya Pak! Rp5.500 bisa dibongkar jadi Rp5.000 + Rp500!' },
      ]},
      { type: 'flashcards', title: 'Latihan Bongkar Pasang (Klik Kartunya!)', cards: [
        { emoji: '🧩', front: 'Dekomposisi 4.325', back: '4.000 + 300 + 20 + 5' },
        { emoji: '🧩', front: 'Dekomposisi 7.084', back: '7.000 + 0 + 80 + 4' },
        { emoji: '💵', front: 'Komposisi 5.000 + 200 + 90 + 1', back: '5.291' },
        { emoji: '💵', front: 'Komposisi 8.000 + 40 + 6', back: '8.046' },
      ]},
    ],
    activityTitle: 'Latihan: Komposisi & Dekomposisi',
    questions: [
      { text: 'Bentuk dekomposisi dari 6.452 adalah...', opts: ['6.000 + 400 + 50 + 2', '600 + 400 + 50 + 2', '6.000 + 45 + 2', '6.000 + 40 + 50 + 2'], ans: 0, exp: '6 ribuan (6.000) + 4 ratusan (400) + 5 puluhan (50) + 2 satuan (2).' },
      { text: 'Hasil komposisi dari 3.000 + 500 + 8 adalah...', opts: ['3.580', '3.508', '3.058', '358'], ans: 1, exp: 'Puluhannya 0 sehingga menjadi 3.508.' },
      { text: 'Uang Rp2.000 + Rp2.000 + Rp500 + Rp200 jika disusun berjumlah...', opts: ['Rp4.500', 'Rp4.700', 'Rp4.200', 'Rp2.700'], ans: 1, exp: '2.000 + 2.000 + 500 + 200 = 4.700.' },
    ],
  },

  // BAB 2: PENJUMLAHAN DAN PENGURANGAN
  {
    topicCode: 'MAT-SD3-02', subSeq: 1,
    objectives: ['Siswa mampu menghitung penjumlahan bilangan sampai 1.000 tanpa dan dengan teknik menyimpan.'],
    materialTitle: 'Penjumlahan sampai 1.000',
    blocks: [
      { type: 'worked_example', level: 'Tanpa Menyimpan', question: 'Hitung 324 + 253 dengan bersusun pendek!', steps: ['Luruskan satuan, puluhan, dan ratusan.', 'Satuan: 4 + 3 = 7.', 'Puluhan: 2 + 5 = 7.', 'Ratusan: 3 + 2 = 5.'], answer: '577' },
      { type: 'worked_example', level: 'Dengan Menyimpan', question: 'Hitung 468 + 275!', steps: ['Satuan: 8 + 5 = 13 → tulis 3, simpan 1 di puluhan.', 'Puluhan: 1 + 6 + 7 = 14 → tulis 4, simpan 1 di ratusan.', 'Ratusan: 1 + 4 + 2 = 7.'], answer: '743' },
      { type: 'misconception', wrong: 'Menulis 13 langsung di kolom satuan sehingga 468 + 275 = 6.1313.', right: 'Jika hasil kolom ≥ 10, tulis angka satuannya saja dan simpan puluhannya ke kolom sebelah kiri!' },
    ],
    activityTitle: 'Latihan: Penjumlahan sampai 1.000',
    questions: [
      { text: '234 + 145 = ...', opts: ['379', '389', '369', '479'], ans: 0, exp: '4+5=9, 3+4=7, 2+1=3 → 379.' },
      { text: '356 + 267 = ...', opts: ['513', '613', '623', '523'], ans: 2, exp: '6+7=13 (tulis 3 simpan 1), 1+5+6=12 (tulis 2 simpan 1), 1+3+2=6 → 623.' },
      { text: '485 + 315 = ...', opts: ['790', '800', '700', '810'], ans: 1, exp: '485 + 315 = 800.' },
      { text: '609 + 294 = ...', opts: ['893', '903', '803', '913'], ans: 1, exp: '9+4=13, 1+0+9=10, 1+6+2=9 → 903.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-02', subSeq: 2,
    objectives: ['Siswa mampu menghitung pengurangan bilangan sampai 1.000 tanpa dan dengan teknik meminjam.'],
    materialTitle: 'Pengurangan sampai 1.000',
    blocks: [
      { type: 'worked_example', level: 'Dengan Meminjam', question: 'Hitung 532 − 168!', steps: ['Satuan: 2 − 8 tidak cukup, pinjam 1 puluhan dari 3 (sisa 2) → 12 − 8 = 4.', 'Puluhan: 2 − 6 tidak cukup, pinjam 1 ratusan dari 5 (sisa 4) → 12 − 6 = 6.', 'Ratusan: 4 − 1 = 3.'], answer: '364' },
      { type: 'tip', text: 'Cek ulang jawaban pengurangan dengan menjumlahkan kembali: 364 + 168 = 532. Cocok!' },
    ],
    activityTitle: 'Latihan: Pengurangan sampai 1.000',
    questions: [
      { text: '678 − 245 = ...', opts: ['433', '423', '443', '333'], ans: 0, exp: '8−5=3, 7−4=3, 6−2=4 → 433.' },
      { text: '425 − 168 = ...', opts: ['267', '257', '357', '247'], ans: 1, exp: '15−8=7, 11−6=5, 3−1=2 → 257.' },
      { text: '500 − 175 = ...', opts: ['335', '325', '425', '225'], ans: 1, exp: '500 − 175 = 325 (cek: 325 + 175 = 500).' },
      { text: '812 − 456 = ...', opts: ['356', '366', '456', '346'], ans: 0, exp: '12−6=6, 10−5=5, 7−4=3 → 356.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-02', subSeq: 3,
    objectives: ['Siswa mampu menggunakan strategi hitung cepat (pembulatan dan pengelompokan ratusan/puluhan).'],
    materialTitle: 'Strategi Menghitung Cepat',
    blocks: [
      { type: 'visual_cards', title: '3 Jurus Hitung Cepat Tanpa Bingung', cards: [
        { emoji: '🧩', label: 'Pisah Nilai Tempat', sub: '240 + 135 = (200+100) + (40+30) + 5 = 375' },
        { emoji: '🎯', label: 'Genapkan ke Ratusan', sub: '198 + 45 = (200 + 45) − 2 = 243' },
        { emoji: '🤝', label: 'Pasangan 100', sub: '60 + 40 = 100, 75 + 25 = 100' },
      ]},
      { type: 'worked_example', level: 'Trik Pintar', question: 'Hitung cepat 299 + 154!', steps: ['299 sangat dekat dengan 300 (kurang 1).', 'Hitung 300 + 154 = 454.', 'Kurangi 1 karena tadi dilebihkan 1: 454 − 1 = 453.'], answer: '453' },
    ],
    activityTitle: 'Latihan: Strategi Menghitung',
    questions: [
      { text: 'Cara paling cepat menghitung 199 + 86 adalah...', opts: ['200 + 86 − 1 = 285', '200 + 86 + 1 = 287', '190 + 80 = 270', '100 + 86 = 186'], ans: 0, exp: '199 = 200 − 1, jadi 200 + 86 − 1 = 285.' },
      { text: 'Pasangan bilangan yang jumlahnya tepat 100 adalah...', opts: ['65 dan 45', '72 dan 28', '58 dan 32', '84 dan 26'], ans: 1, exp: '72 + 28 = 100.' },
      { text: '350 + 250 + 125 = ...', opts: ['625', '725', '775', '675'], ans: 1, exp: 'Kelompokkan dulu 350 + 250 = 600, lalu + 125 = 725.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-02', subSeq: 4,
    objectives: ['Siswa mampu menyelesaikan soal cerita sehari-hari tentang penjumlahan dan pengurangan sampai 1.000.'],
    materialTitle: 'Soal Cerita Penjumlahan dan Pengurangan',
    blocks: [
      { type: 'list', title: 'Kata Kunci Soal Cerita', items: ['Tambah (+): membeli lagi, datang lagi, diberi, jumlah seluruhnya.', 'Kurang (−): terjual, diberikan, dimakan, sisa, selisih.'] },
      { type: 'worked_example', level: 'Konteks Gresik', question: 'Toko oleh-oleh di Gresik punya 340 kotak pudak. Pagi ini terjual 125 kotak, lalu datang kiriman baru 150 kotak. Berapa stok pudak sekarang?', steps: ['Sisa setelah terjual: 340 − 125 = 215 kotak.', 'Tambah kiriman baru: 215 + 150 = 365 kotak.'], answer: '365 kotak pudak.' },
    ],
    activityTitle: 'Latihan: Soal Cerita Tambah & Kurang',
    questions: [
      { text: 'Di perpustakaan sekolah ada 425 buku cerita dan 268 buku pelajaran. Jumlah seluruh buku adalah...', opts: ['683', '693', '793', '593'], ans: 1, exp: '425 + 268 = 693 buku.' },
      { text: 'Pak Hasan memanen 520 ekor bandeng. Sebanyak 275 ekor dijual ke pasar. Sisa bandeng Pak Hasan adalah...', opts: ['245', '255', '345', '235'], ans: 0, exp: '520 − 275 = 245 ekor.' },
      { text: 'Dina menabung 250 butir kelereng. Ia memberi 75 butir kepada adiknya, lalu membeli lagi 40 butir. Kelereng Dina sekarang...', opts: ['205', '215', '225', '175'], ans: 1, exp: '250 − 75 = 175; 175 + 40 = 215.' },
    ],
  },

  // BAB 3: PERKALIAN DAN PEMBAGIAN
  {
    topicCode: 'MAT-SD3-03', subSeq: 1,
    objectives: ['Siswa memahami perkalian sebagai penjumlahan berulang dengan bilangan yang sama.'],
    materialTitle: 'Konsep Perkalian sebagai Penjumlahan Berulang',
    blocks: [
      { type: 'story_panel', title: 'Apa Itu Perkalian?', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Ada 4 piring. Tiap piring berisi 3 kue otak-otak. Jumlahnya 3 + 3 + 3 + 3 = 12!' },
        { speaker: 'Nadia', avatar: '👧', text: 'Bisa ditulis singkat 4 × 3 = 12 ya Bu! Empat kali angka tiganya!' },
      ]},
      { type: 'visual_cards', title: 'Contoh Penjumlahan Berulang', cards: [
        { emoji: '🍎', label: '3 × 4 = 12', sub: '4 + 4 + 4 (tiga kelompok isi 4)' },
        { emoji: '🐟', label: '5 × 2 = 10', sub: '2 + 2 + 2 + 2 + 2' },
        { emoji: '🍪', label: '2 × 6 = 12', sub: '6 + 6' },
      ]},
      { type: 'tip', text: 'Sifat pertukaran: 3 × 4 hasilnya sama dengan 4 × 3 = 12, tetapi artinya beda gambar (3 kelompok isi 4 vs 4 kelompok isi 3).' },
    ],
    activityTitle: 'Latihan: Konsep Perkalian',
    questions: [
      { text: 'Bentuk perkalian dari 6 + 6 + 6 + 6 adalah...', opts: ['6 × 4', '4 × 6', '4 + 6', '6 × 6'], ans: 1, exp: 'Angka 6 dijumlahkan sebanyak 4 kali → 4 × 6.' },
      { text: 'Bentuk penjumlahan berulang dari 3 × 7 adalah...', opts: ['3 + 3 + 3', '7 + 7 + 7', '3 + 7', '7 + 7 + 7 + 7'], ans: 1, exp: '3 × 7 artinya 7 + 7 + 7 = 21.' },
      { text: 'Semua bilangan jika dikalikan 0 hasilnya adalah...', opts: ['Bilangan itu sendiri', '1', '0', '10'], ans: 2, exp: 'Contoh: 5 × 0 = 0 + 0 + 0 + 0 + 0 = 0.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-03', subSeq: 2,
    objectives: ['Siswa memahami pembagian sebagai pengurangan berulang dan pembagian sama rata.'],
    materialTitle: 'Konsep Pembagian',
    blocks: [
      { type: 'story_panel', title: 'Bagi Sama Rata!', lines: [
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Ada 12 permen dibagikan sama rata ke 3 anak. Tiap anak dapat 4 permen: 12 ÷ 3 = 4!' },
        { speaker: 'Bima', avatar: '👦', text: 'Bisa juga dikurang berulang ya Pak: 12 − 3 − 3 − 3 − 3 = 0, ada 4 kali pengurangan!' },
      ]},
      { type: 'flashcards', title: 'Hubungan Pembagian & Perkalian', cards: [
        { emoji: '🔄', front: '15 ÷ 3 = ... (karena 3 × ... = 15)', back: '5' },
        { emoji: '🔄', front: '24 ÷ 4 = ... (karena 4 × ... = 24)', back: '6' },
        { emoji: '🔄', front: '28 ÷ 7 = ... (karena 7 × ... = 28)', back: '4' },
      ]},
    ],
    activityTitle: 'Latihan: Konsep Pembagian',
    questions: [
      { text: '18 − 6 − 6 − 6 = 0. Bentuk pembagiannya adalah...', opts: ['18 ÷ 3 = 6', '18 ÷ 6 = 3', '6 ÷ 3 = 2', '18 ÷ 2 = 9'], ans: 1, exp: '18 dikurangi 6 sebanyak 3 kali sampai habis → 18 ÷ 6 = 3.' },
      { text: 'Karena 5 × 7 = 35, maka 35 ÷ 5 = ...', opts: ['5', '6', '7', '8'], ans: 2, exp: 'Pembagian adalah kebalikan perkalian: 35 ÷ 5 = 7.' },
      { text: '20 kue dibagikan sama rata ke 4 piring. Setiap piring berisi ... kue.', opts: ['4', '5', '6', '8'], ans: 1, exp: '20 ÷ 4 = 5 kue.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-03', subSeq: 3,
    objectives: ['Siswa mampu menghitung perkalian dan pembagian bilangan sampai 100 dengan lancar.'],
    materialTitle: 'Perkalian dan Pembagian sampai 100',
    blocks: [
      { type: 'table', title: 'Trik Cepat Perkalian Dasar', headers: ['Perkalian', 'Trik Mudah', 'Contoh'], rows: [
        ['× 2', 'Gandakan bilangannya', '2 × 8 = 8 + 8 = 16'],
        ['× 5', 'Hasilnya selalu berakhiran 0 atau 5', '5 × 7 = 35'],
        ['× 9', 'Trik jari / (×10 lalu kurangi 1×)', '9 × 6 = 60 − 6 = 54'],
        ['× 10', 'Tambahkan satu angka 0 di belakang', '10 × 8 = 80'],
      ]},
      { type: 'worked_example', level: 'Bersusun & Porogapit', question: 'Hitung 14 × 6 dan 72 ÷ 3!', steps: ['14 × 6 = (10 × 6) + (4 × 6) = 60 + 24 = 84.', '72 ÷ 3: puluhan 7 ÷ 3 = 2 sisa 1 (jadi 12), lalu 12 ÷ 3 = 4 → hasil 24.'], answer: '14 × 6 = 84 dan 72 ÷ 3 = 24.' },
    ],
    activityTitle: 'Latihan: Perkalian & Pembagian sampai 100',
    questions: [
      { text: '7 × 8 = ...', opts: ['54', '56', '58', '64'], ans: 1, exp: '7 × 8 = 56.' },
      { text: '13 × 5 = ...', opts: ['55', '60', '65', '75'], ans: 2, exp: '(10 × 5) + (3 × 5) = 50 + 15 = 65.' },
      { text: '63 ÷ 9 = ...', opts: ['6', '7', '8', '9'], ans: 1, exp: '9 × 7 = 63, jadi 63 ÷ 9 = 7.' },
      { text: '84 ÷ 4 = ...', opts: ['20', '21', '22', '24'], ans: 1, exp: '80 ÷ 4 = 20, 4 ÷ 4 = 1 → 21.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-03', subSeq: 4,
    objectives: ['Siswa mampu memecahkan soal cerita perkalian dan pembagian dalam kehidupan sehari-hari.'],
    materialTitle: 'Soal Cerita Perkalian dan Pembagian',
    blocks: [
      { type: 'worked_example', level: 'Perkalian', question: 'Ibu membeli 6 bungkus otak-otak bandeng. Tiap bungkus berisi 8 potong. Berapa potong seluruhnya?', steps: ['Ada 6 kelompok, tiap kelompok isi 8.', 'Hitung: 6 × 8 = 48.'], answer: '48 potong.' },
      { type: 'worked_example', level: 'Pembagian', question: 'Bu Guru membawa 45 pensil untuk dibagikan sama rata ke 5 kelompok siswa. Tiap kelompok mendapat berapa pensil?', steps: ['Total 45 dibagi 5 kelompok sama rata.', '45 ÷ 5 = 9.'], answer: '9 pensil per kelompok.' },
    ],
    activityTitle: 'Latihan: Soal Cerita Kali & Bagi',
    questions: [
      { text: 'Sebuah rak memiliki 4 tingkat. Setiap tingkat berisi 9 buku. Jumlah seluruh buku di rak adalah...', opts: ['32', '36', '40', '13'], ans: 1, exp: '4 × 9 = 36 buku.' },
      { text: '56 jeruk dimasukkan sama banyak ke dalam 7 kantong. Setiap kantong berisi ... jeruk.', opts: ['6', '7', '8', '9'], ans: 2, exp: '56 ÷ 7 = 8 jeruk.' },
      { text: 'Rani membeli 3 kotak pensil warna. Tiap kotak berisi 12 batang. Jumlah pensil warna Rani adalah...', opts: ['24', '30', '36', '15'], ans: 2, exp: '3 × 12 = 36 batang.' },
    ],
  },

  // BAB 4: PECAHAN DAN DESIMAL DASAR
  {
    topicCode: 'MAT-SD3-04', subSeq: 1,
    objectives: ['Siswa mampu mengenal dan membandingkan pecahan dengan pembilang satu (1/2, 1/3, 1/4, 1/6, 1/8).'],
    materialTitle: 'Pecahan Pembilang Satu',
    blocks: [
      { type: 'interactive_fraction', title: 'Coba Geser Penyebutnya! Lihat Ukuran Potongannya!', initialNum: 1, initialDen: 4, maxDen: 8 },
      { type: 'story_panel', title: 'Rahasia Pecahan Pembilang 1', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Coba bandingkan 1/2 dan 1/4 di gambar kue atas! Mana potongannya yang lebih besar?' },
        { speaker: 'Alya', avatar: '👧', text: '1/2 lebih besar! Ternyata makin banyak potongannya (penyebut besar), tiap potongan makin KECIL!' },
      ]},
      { type: 'tip', text: 'Untuk pembilang 1: makin KECIL penyebutnya, makin BESAR nilainya! Jadi 1/2 > 1/3 > 1/4 > 1/6 > 1/8.' },
    ],
    activityTitle: 'Latihan: Pecahan Pembilang Satu',
    questions: [
      { text: 'Sebuah martabak dipotong menjadi 6 bagian sama besar. Satu potongnya bernilai...', opts: ['1/2', '1/4', '1/6', '6/1'], ans: 2, exp: '1 bagian dari 6 bagian sama besar adalah 1/6.' },
      { text: 'Manakah pecahan yang PALING BESAR?', opts: ['1/8', '1/6', '1/4', '1/2'], ans: 3, exp: 'Jika dibagi 2 saja, potongannya paling besar: 1/2.' },
      { text: 'Tanda perbandingan yang tepat untuk 1/3 ... 1/5 adalah...', opts: ['>', '<', '=', '+'], ans: 0, exp: 'Penyebut 3 lebih kecil dari 5, sehingga potongannya lebih besar: 1/3 > 1/5.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-04', subSeq: 2,
    objectives: ['Siswa mampu membandingkan, menjumlahkan, dan mengurangkan pecahan berpenyebut sama.'],
    materialTitle: 'Pecahan dengan Penyebut Sama',
    blocks: [
      { type: 'interactive_fraction', title: 'Ubah Pembilang (Bagian Atas) pada Penyebut 6!', initialNum: 2, initialDen: 6, maxDen: 8 },
      { type: 'formula', name: 'Aturan Penyebut Sama', expression: 'a/c + b/c = (a + b)/c', note: 'Pembilang dijumlahkan/dikurangkan, PENYEBUT TETAP SAMA!' },
      { type: 'worked_example', level: 'Dasar', question: 'Hitung 2/6 + 3/6 dan bandingkan 4/7 dengan 2/7!', steps: ['2/6 + 3/6 = (2+3)/6 = 5/6 (penyebut tetap 6, bukan 12!).', 'Karena penyebut sama-sama 7, langsung bandingkan pembilangnya: 4 > 2, jadi 4/7 > 2/7.'], answer: '5/6 dan 4/7 > 2/7.' },
    ],
    activityTitle: 'Latihan: Pecahan Penyebut Sama',
    questions: [
      { text: 'Tanda yang tepat untuk 3/8 ... 5/8 adalah...', opts: ['>', '<', '=', '×'], ans: 1, exp: 'Penyebut sama (8), bandingkan pembilang: 3 < 5.' },
      { text: '2/5 + 1/5 = ...', opts: ['3/10', '3/5', '2/5', '1/5'], ans: 1, exp: 'Pembilang dijumlahkan (2+1=3), penyebut tetap 5 → 3/5.' },
      { text: '7/9 − 4/9 = ...', opts: ['3/9', '3/0', '11/9', '4/9'], ans: 0, exp: '(7 − 4)/9 = 3/9.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-04', subSeq: 3,
    objectives: ['Siswa mampu mengenali pecahan senilai sederhana seperti 1/2 = 2/4 = 4/8.'],
    materialTitle: 'Pecahan Senilai Sederhana',
    blocks: [
      { type: 'interactive_fraction', title: 'Buktikan! Bandingkan 1/2, 2/4, dan 3/6!', initialNum: 2, initialDen: 4, maxDen: 8 },
      { type: 'flashcards', title: 'Pasangan Pecahan Senilai', cards: [
        { emoji: '🍕', front: '1/2 senilai dengan...', back: '2/4, 3/6, 4/8' },
        { emoji: '🍕', front: '1/3 senilai dengan...', back: '2/6, 3/9' },
        { emoji: '🍕', front: '1/4 senilai dengan...', back: '2/8' },
        { emoji: '🍕', front: '2/3 senilai dengan...', back: '4/6' },
      ]},
      { type: 'tip', text: 'Cara mencari pecahan senilai: kalikan pembilang dan penyebut dengan angka yang SAMA (misal ×2).' },
    ],
    activityTitle: 'Latihan: Pecahan Senilai',
    questions: [
      { text: 'Pecahan yang senilai dengan 1/2 adalah...', opts: ['1/4', '2/4', '2/3', '3/4'], ans: 1, exp: '1×2 / 2×2 = 2/4 (sama-sama setengah kue).' },
      { text: 'Pecahan yang senilai dengan 1/3 adalah...', opts: ['2/6', '2/4', '3/6', '1/6'], ans: 0, exp: '1×2 / 3×2 = 2/6.' },
      { text: 'Jika 2/4 = .../8, maka angka yang tepat untuk titik-titik adalah...', opts: ['2', '3', '4', '6'], ans: 2, exp: 'Penyebut dikali 2 (4×2=8), maka pembilang juga 2×2=4 → 4/8.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-04', subSeq: 4,
    objectives: ['Siswa mengenal bentuk pecahan desimal persepuluhan (0,1 sampai 0,9) dan perseratusan sederhana.'],
    materialTitle: 'Pengenalan Bilangan Desimal',
    blocks: [
      { type: 'story_panel', title: 'Kenalan dengan Tanda Koma!', lines: [
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Pecahan persepuluhan bisa ditulis memakai tanda koma! Contoh: 1/10 ditulis 0,1 (dibaca nol koma satu).' },
        { speaker: 'Raka', avatar: '👦', text: 'Berarti 3/10 = 0,3 dan 7/10 = 0,7 ya Pak!' },
      ]},
      { type: 'table', title: 'Pecahan Biasa ke Desimal', headers: ['Pecahan Biasa', 'Desimal', 'Cara Membaca'], rows: [
        ['1/10', '0,1', 'Nol koma satu'],
        ['5/10', '0,5', 'Nol koma lima (sama dengan setengah!)'],
        ['9/10', '0,9', 'Nol koma sembilan'],
        ['25/100', '0,25', 'Nol koma dua lima'],
      ]},
    ],
    activityTitle: 'Latihan: Pengenalan Desimal',
    questions: [
      { text: 'Bentuk desimal dari pecahan 4/10 adalah...', opts: ['4,0', '0,4', '0,04', '4,10'], ans: 1, exp: 'Persepuluhan memiliki 1 angka di belakang koma: 4/10 = 0,4.' },
      { text: 'Bentuk pecahan biasa dari 0,7 adalah...', opts: ['7/100', '7/10', '1/7', '70/10'], ans: 1, exp: '1 angka di belakang koma berarti persepuluhan: 7/10.' },
      { text: 'Desimal 0,5 sama nilainya dengan pecahan...', opts: ['1/4', '1/2', '1/5', '5/100'], ans: 1, exp: '0,5 = 5/10 = 1/2.' },
    ],
  },

  // BAB 5: PENGUKURAN
  {
    topicCode: 'MAT-SD3-05', subSeq: 1,
    objectives: ['Siswa mampu mengukur panjang dengan penggaris/meteran dan mengubah satuan m ke cm atau sebaliknya.'],
    materialTitle: 'Satuan Panjang cm dan m',
    blocks: [
      { type: 'formula', name: 'Hubungan Meter dan Sentimeter', expression: '1 m = 100 cm', note: 'Dari m ke cm dikali 100 (tambah 00). Dari cm ke m dibagi 100 (coret 00).' },
      { type: 'visual_cards', title: 'Alat Ukur Panjang', cards: [
        { emoji: '📏', label: 'Penggaris (cm)', sub: 'Untuk benda pendek: pensil, buku, penghapus' },
        { emoji: '📐', label: 'Meteran Pita (cm/m)', sub: 'Untuk tinggi badan, kain, lingkar pinggang' },
        { emoji: '🏗️', label: 'Meteran Rol (m)', sub: 'Untuk panjang kelas, meja panjang, lapangan' },
      ]},
      { type: 'worked_example', level: 'Konversi', question: 'Panjang pita Dita 2 m lebih 35 cm. Berapa cm seluruhnya?', steps: ['Ubah 2 m ke cm: 2 × 100 = 200 cm.', 'Tambahkan sisanya: 200 cm + 35 cm = 235 cm.'], answer: '235 cm.' },
    ],
    activityTitle: 'Latihan: Satuan Panjang cm & m',
    questions: [
      { text: '3 m sama dengan ... cm.', opts: ['30', '300', '3.000', '303'], ans: 1, exp: '3 × 100 cm = 300 cm.' },
      { text: '450 cm sama dengan...', opts: ['4 m 5 cm', '4 m 50 cm', '45 m', '40 m 5 cm'], ans: 1, exp: '400 cm = 4 m, sisanya 50 cm → 4 m 50 cm.' },
      { text: 'Alat yang paling tepat untuk mengukur panjang penghapus adalah...', opts: ['Timbangan', 'Penggaris', 'Jam dinding', 'Termometer'], ans: 1, exp: 'Penggaris digunakan mengukur panjang benda pendek dalam cm.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-05', subSeq: 2,
    objectives: ['Siswa mampu membaca timbangan dan mengubah satuan massa kg ke gram (g) atau sebaliknya.'],
    materialTitle: 'Satuan Berat (Massa) g dan kg',
    blocks: [
      { type: 'formula', name: 'Hubungan Kilogram dan Gram', expression: '1 kg = 1.000 g', note: 'Setengah kg (1/2 kg) = 500 g. Seperempat kg (1/4 kg) = 250 g.' },
      { type: 'flashcards', title: 'Latihan Ubah kg ↔ g', cards: [
        { emoji: '⚖️', front: '2 kg = ... g', back: '2.000 g' },
        { emoji: '⚖️', front: '3.000 g = ... kg', back: '3 kg' },
        { emoji: '🐟', front: '1 kg 500 g bandeng = ... g', back: '1.500 g' },
        { emoji: '🍚', front: '500 g + 500 g = ... kg', back: '1 kg' },
      ]},
    ],
    activityTitle: 'Latihan: Satuan Berat g & kg',
    questions: [
      { text: '4 kg sama dengan ... gram.', opts: ['40', '400', '4.000', '40.000'], ans: 2, exp: '4 × 1.000 g = 4.000 g.' },
      { text: 'Ibu membeli 1 kg 250 g tepung. Berat tepung dalam gram adalah...', opts: ['125 g', '1.250 g', '1.025 g', '350 g'], ans: 1, exp: '1.000 g + 250 g = 1.250 g.' },
      { text: 'Dua kantong gula masing-masing 500 g berat seluruhnya adalah...', opts: ['1 kg', '2 kg', '5 kg', '10 kg'], ans: 0, exp: '500 g + 500 g = 1.000 g = 1 kg.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-05', subSeq: 3,
    objectives: ['Siswa mampu menentukan luas bangun datar menggunakan satuan tidak baku (persegi satuan).'],
    materialTitle: 'Luas dengan Satuan Tidak Baku',
    blocks: [
      { type: 'story_panel', title: 'Menghitung Kotak Persegi Satuan', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Luas adalah banyaknya permukaan yang menutupi suatu bidang! Kita bisa menghitung berapa banyak persegi satuan yang pas menutupinya.' },
        { speaker: 'Salsa', avatar: '👧', text: 'Kalau ada 2 segitiga setengah kotak, digabung jadi 1 persegi satuan ya Bu!' },
      ]},
      { type: 'worked_example', level: 'Dasar', question: 'Sebuah permukaan meja ditutupi penuh oleh 4 baris kotak, tiap baris ada 5 kotak persegi satuan. Berapa luasnya?', steps: ['Hitung semua persegi satuan yang menutupi permukaan.', '4 baris × 5 kotak = 20 persegi satuan.'], answer: '20 persegi satuan.' },
    ],
    activityTitle: 'Latihan: Luas Satuan Tidak Baku',
    questions: [
      { text: 'Luas suatu bangun yang tersusun atas 12 persegi satuan utuh adalah...', opts: ['6 persegi satuan', '12 persegi satuan', '24 persegi satuan', '10 persegi satuan'], ans: 1, exp: 'Luas = jumlah total persegi satuan yang menutupi bidang = 12.' },
      { text: 'Dua buah segitiga (masing-masing setengah persegi satuan) sama luasnya dengan...', opts: ['1 persegi satuan', '2 persegi satuan', '3 persegi satuan', '4 persegi satuan'], ans: 0, exp: '1/2 + 1/2 = 1 persegi satuan.' },
      { text: 'Bidang A luasnya 14 persegi satuan dan bidang B luasnya 18 persegi satuan. Bidang yang lebih luas adalah...', opts: ['Bidang A', 'Bidang B', 'Sama luas', 'Tidak bisa dibandingkan'], ans: 1, exp: '18 > 14 sehingga bidang B lebih luas.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-05', subSeq: 4,
    objectives: ['Siswa mampu mengukur dan membandingkan volume benda cair dengan satuan tidak baku (gelas/botol).'],
    materialTitle: 'Volume dengan Satuan Tidak Baku',
    blocks: [
      { type: 'visual_cards', title: 'Mengukur Isi (Volume) Wadah', cards: [
        { emoji: '🥛', label: '1 Teko = 5 Gelas', sub: 'Artinya volume teko adalah 5 gelas satuan' },
        { emoji: '🪣', label: '1 Ember = 4 Gayung', sub: 'Volume ember lebih besar dari 1 gayung' },
        { emoji: '🧃', label: 'Syarat Adil', sub: 'Ukuran gelas yang dipakai mengukur harus SAMA!' },
      ]},
      { type: 'tip', text: 'Volume adalah besar ruang/isi yang dapat ditempati air di dalam wadah.' },
    ],
    activityTitle: 'Latihan: Volume Satuan Tidak Baku',
    questions: [
      { text: 'Botol A penuh diisi 3 gelas air. Botol B penuh diisi 5 gelas air yang sama. Botol yang volumenya lebih besar adalah...', opts: ['Botol A', 'Botol B', 'Sama besar', 'Gelas'], ans: 1, exp: 'Botol B menampung lebih banyak gelas air (5 > 3).' },
      { text: 'Jika 1 teko = 4 gelas, maka 2 teko penuh dapat mengisi ... gelas.', opts: ['6', '8', '4', '10'], ans: 1, exp: '2 × 4 gelas = 8 gelas.' },
      { text: 'Agar perbandingan volume dua wadah adil, satuan gelas yang dipakai harus...', opts: ['Berbeda warna', 'Berbeda ukuran', 'Sama ukuran', 'Sama mahalnya'], ans: 2, exp: 'Satuan ukur harus berukuran sama agar hasilnya akurat.' },
    ],
  },

  // BAB 6: GEOMETRI DAN POLA
  {
    topicCode: 'MAT-SD3-06', subSeq: 1,
    objectives: ['Siswa mampu mengidentifikasi ciri bangun datar (sisi, sudut, dan titik sudut).'],
    materialTitle: 'Ciri-Ciri Bangun Datar',
    blocks: [
      { type: 'shape_gallery', title: 'Klik Bangun Datar untuk Lihat Sisi & Sudutnya!', shapes: ['persegi', 'persegi_panjang', 'segitiga', 'lingkaran'] },
      { type: 'list', title: '3 Bagian Penting Bangun Datar', items: ['Sisi: garis tepi yang membatasi bangun datar.', 'Sudut: pojok yang terbentuk dari pertemuan dua sisi.', 'Titik sudut: ujung runcing tempat bertemunya dua sisi.'] },
    ],
    activityTitle: 'Latihan: Ciri Bangun Datar',
    questions: [
      { text: 'Garis lurus yang membatasi bagian luar bangun datar disebut...', opts: ['Titik', 'Sisi', 'Volume', 'Berat'], ans: 1, exp: 'Garis pembatas bangun datar disebut sisi.' },
      { text: 'Bangun datar yang tidak memiliki sudut sama sekali adalah...', opts: ['Segitiga', 'Persegi', 'Lingkaran', 'Trapesium'], ans: 2, exp: 'Lingkaran hanya memiliki 1 sisi lengkung dan 0 sudut.' },
      { text: 'Jumlah titik sudut pada persegi panjang adalah...', opts: ['2', '3', '4', '5'], ans: 2, exp: 'Persegi panjang memiliki 4 sisi, 4 sudut siku-siku, dan 4 titik sudut.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-06', subSeq: 2,
    objectives: ['Siswa mampu membedakan jenis segitiga dan segiempat berdasarkan panjang sisi dan sudutnya.'],
    materialTitle: 'Segitiga dan Segiempat',
    blocks: [
      { type: 'table', title: 'Perbedaan Segiempat Populer', headers: ['Bangun', 'Panjang Sisi', 'Sudut'], rows: [
        ['Persegi', 'Keempat sisinya SAMA panjang', '4 sudut siku-siku'],
        ['Persegi Panjang', '2 pasang sisi berhadapan sama panjang', '4 sudut siku-siku'],
        ['Jajar Genjang', '2 pasang sisi berhadapan sejajar & sama', '2 lancip, 2 tumpul'],
      ]},
      { type: 'visual_cards', title: 'Jenis Segitiga Berdasarkan Sisinya', cards: [
        { emoji: '🔺', label: 'Segitiga Sama Sisi', sub: 'Ketiga sisinya sama panjang' },
        { emoji: '📐', label: 'Segitiga Sama Kaki', sub: 'Dua sisinya sama panjang' },
        { emoji: '📏', label: 'Segitiga Sembarang', sub: 'Ketiga sisinya berbeda panjang' },
      ]},
    ],
    activityTitle: 'Latihan: Segitiga & Segiempat',
    questions: [
      { text: 'Segiempat yang keempat sisinya sama panjang dan semua sudutnya siku-siku adalah...', opts: ['Persegi panjang', 'Persegi', 'Segitiga', 'Jajar genjang'], ans: 1, exp: 'Persegi memiliki 4 sisi sama panjang dan 4 sudut siku-siku.' },
      { text: 'Segitiga yang ketiga sisinya sama panjang disebut...', opts: ['Segitiga sama kaki', 'Segitiga sama sisi', 'Segitiga sembarang', 'Segitiga tumpul'], ans: 1, exp: 'Sama sisi berarti ketiga sisinya sama panjang.' },
      { text: 'Semua bangun segiempat pasti memiliki ... sisi.', opts: ['3', '4', '5', '6'], ans: 1, exp: 'Segiempat artinya memiliki tepat 4 sisi.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-06', subSeq: 3,
    objectives: ['Siswa mampu menyusun (komposisi) dan mengurai (dekomposisi) bangun datar sederhana (seperti tangram).'],
    materialTitle: 'Menyusun dan Mengurai Bangun Datar',
    blocks: [
      { type: 'story_panel', title: 'Main Puzzle Bangun Datar!', lines: [
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Satu persegi kalau dipotong miring tepat dari pojok ke pojok (diagonal), jadi bangun apa ya?' },
        { speaker: 'Nadia', avatar: '👧', text: 'Jadi 2 segitiga siku-siku yang sama besar Pak!' },
      ]},
      { type: 'flashcards', title: 'Tebak Hasil Gabungan & Potongannya!', cards: [
        { emoji: '🧩', front: '2 persegi sama besar ditempel berdampingan →', back: '1 Persegi Panjang!' },
        { emoji: '🧩', front: '1 persegi dipotong diagonal →', back: '2 Segitiga siku-siku!' },
        { emoji: '🏠', front: '1 segitiga di atas 1 persegi →', back: 'Bentuk Rumah!' },
      ]},
    ],
    activityTitle: 'Latihan: Menyusun & Mengurai Bangun',
    questions: [
      { text: 'Jika 2 buah persegi yang sama besar disusun berdampingan rapat, akan terbentuk...', opts: ['Lingkaran', 'Segitiga', 'Persegi panjang', 'Belah ketupat'], ans: 2, exp: 'Dua persegi berdampingan membentuk 1 persegi panjang.' },
      { text: 'Sebuah persegi panjang yang dipotong menurut garis diagonalnya terurai menjadi...', opts: ['2 lingkaran', '2 segitiga siku-siku', '4 segitiga', '2 persegi'], ans: 1, exp: 'Satu diagonal membagi persegi panjang menjadi 2 segitiga siku-siku.' },
      { text: 'Gambar rumah sederhana biasanya disusun dari atap berbentuk ... dan dinding berbentuk ...', opts: ['Lingkaran dan segitiga', 'Segitiga dan persegi', 'Lingkaran dan persegi', 'Dua lingkaran'], ans: 1, exp: 'Atap segitiga + dinding persegi/persegi panjang.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-06', subSeq: 4,
    objectives: ['Siswa mampu menemukan aturan dan melanjutkan pola gambar serta pola bilangan membesar/mengecil.'],
    materialTitle: 'Pola Gambar dan Pola Bilangan',
    blocks: [
      { type: 'visual_cards', title: 'Contoh Pola Teratur', cards: [
        { emoji: '🔴', label: 'Pola Gambar', sub: '🔴 🔵 🟢 🔴 🔵 🟢 ... (berulang 3 warna)' },
        { emoji: '📈', label: 'Pola Membesar (+4)', sub: '4, 8, 12, 16, 20, ...' },
        { emoji: '📉', label: 'Pola Mengecil (−5)', sub: '50, 45, 40, 35, 30, ...' },
      ]},
      { type: 'worked_example', level: 'Dasar', question: 'Lanjutkan pola bilangan: 7, 10, 13, 16, ..., ...', steps: ['Cek selisih tiap langkah: 10 − 7 = +3, 13 − 10 = +3.', 'Aturannya selalu tambah 3.', '16 + 3 = 19, lalu 19 + 3 = 22.'], answer: '19 dan 22.' },
    ],
    activityTitle: 'Latihan: Pola Gambar & Bilangan',
    questions: [
      { text: 'Lanjutan pola bilangan 5, 10, 15, 20, ... adalah...', opts: ['22', '24', '25', '30'], ans: 2, exp: 'Aturannya selalu +5: 20 + 5 = 25.' },
      { text: 'Lanjutan pola mengecil 40, 36, 32, 28, ... adalah...', opts: ['26', '25', '24', '20'], ans: 2, exp: 'Aturannya selalu −4: 28 − 4 = 24.' },
      { text: 'Pola gambar: ⭐ 🌙 🌙 ⭐ 🌙 🌙 ⭐ ... Gambar berikutnya adalah...', opts: ['⭐', '🌙', '☀️', '☁️'], ans: 1, exp: 'Pola berulang setiap 3 simbol (⭐ 🌙 🌙), setelah ⭐ adalah 🌙.' },
    ],
  },

  // BAB 7: PENYAJIAN DATA
  {
    topicCode: 'MAT-SD3-07', subSeq: 1,
    objectives: ['Siswa mampu mengumpulkan data sederhana dengan wawancara atau pengamatan langsung menggunakan turus.'],
    materialTitle: 'Mengumpulkan Data dengan Turus',
    blocks: [
      { type: 'story_panel', title: 'Jadi Detektif Data!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Mau tahu jajanan favorit teman sekelas? Kita tanya satu per satu lalu catat pakai garis TURUS!' },
        { speaker: 'Bima', avatar: '👦', text: 'Setiap 4 garis tegak, garis ke-5 dicoret miring jadi 1 ikat berisi 5 ya Bu!' },
      ]},
      { type: 'visual_cards', title: 'Cara Membaca Turus', cards: [
        { emoji: '📝', label: '|||| = 4', sub: 'Empat garis berdiri' },
        { emoji: '✋', label: '||||/ = 5', sub: 'Satu ikat lengkap berisi 5' },
        { emoji: '📊', label: '||||/ || = 7', sub: '5 + 2 = 7 orang' },
      ]},
    ],
    activityTitle: 'Latihan: Mengumpulkan Data',
    questions: [
      { text: 'Satu ikat turus lengkap (4 garis tegak dan 1 garis miring) bernilai...', opts: ['4', '5', '6', '10'], ans: 1, exp: 'Satu ikat turus selalu bernilai 5 agar mudah dihitung.' },
      { text: 'Dua ikat turus lengkap ditambah 3 garis tegak mewakili jumlah...', opts: ['8', '13', '15', '12'], ans: 1, exp: '5 + 5 + 3 = 13.' },
      { text: 'Cara mengumpulkan data buah kesukaan teman sekelas yang paling tepat adalah...', opts: ['Menebak sendiri', 'Bertanya langsung kepada setiap teman', 'Menyalin dari buku lain', 'Mengarang angka'], ans: 1, exp: 'Data asli diperoleh dengan bertanya langsung (wawancara/angket).' },
    ],
  },
  {
    topicCode: 'MAT-SD3-07', subSeq: 2,
    objectives: ['Siswa mampu menyusun dan membaca informasi dari tabel sederhana.'],
    materialTitle: 'Menyajikan Data dalam Tabel Sederhana',
    blocks: [
      { type: 'table', title: 'Tabel Buah Kesukaan Siswa Kelas 3', headers: ['Nama Buah', 'Banyak Siswa'], rows: [
        ['Mangga', '8 siswa'],
        ['Jeruk', '5 siswa'],
        ['Pisang', '6 siswa'],
        ['Apel', '4 siswa'],
      ]},
      { type: 'worked_example', level: 'Membaca Tabel', question: 'Dari tabel di atas, buah apa yang paling banyak disukai dan berapa jumlah semua siswa?', steps: ['Angka terbesar adalah 8 → Mangga.', 'Jumlah semua siswa: 8 + 5 + 6 + 4 = 23 siswa.'], answer: 'Paling disukai Mangga, total 23 siswa.' },
    ],
    activityTitle: 'Latihan: Membaca Tabel Data',
    questions: [
      { text: 'Pada tabel: Mangga (8), Jeruk (5), Pisang (6), Apel (4). Buah yang PALING SEDIKIT disukai adalah...', opts: ['Mangga', 'Jeruk', 'Pisang', 'Apel'], ans: 3, exp: 'Apel hanya disukai 4 siswa (paling sedikit).' },
      { text: 'Selisih penyuka Mangga (8) dan Jeruk (5) adalah...', opts: ['2 siswa', '3 siswa', '4 siswa', '13 siswa'], ans: 1, exp: '8 − 5 = 3 siswa.' },
      { text: 'Manfaat menyajikan data dalam bentuk tabel adalah...', opts: ['Agar data sulit dibaca', 'Agar data rapi dan mudah dibandingkan', 'Agar angkanya hilang', 'Agar lebih panjang'], ans: 1, exp: 'Tabel membuat data tersusun rapi dan cepat dibaca.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-07', subSeq: 3,
    objectives: ['Siswa mampu membaca diagram gambar dengan skala 1 gambar mewakili 1 data.'],
    materialTitle: 'Diagram Gambar (Skala 1:1)',
    blocks: [
      { type: 'table', title: 'Diagram Gambar Buku yang Dibaca (📘 = 1 buku)', headers: ['Nama Siswa', 'Banyak Buku'], rows: [
        ['Alya', '📘 📘 📘 📘 (4)'],
        ['Bima', '📘 📘 📘 (3)'],
        ['Dina', '📘 📘 📘 📘 📘 (5)'],
      ]},
      { type: 'tip', text: 'Selalu cek KETERANGAN di bawah atau judul diagram dulu! Di sini 1 gambar buku = 1 buku.' },
    ],
    activityTitle: 'Latihan: Diagram Gambar',
    questions: [
      { text: 'Jika 1 gambar 📘 = 1 buku, maka 📘📘📘📘📘 menunjukkan ... buku.', opts: ['4', '5', '6', '10'], ans: 1, exp: 'Ada 5 gambar buku → 5 × 1 = 5 buku.' },
      { text: 'Siapa yang membaca paling banyak jika Alya = 4, Bima = 3, Dina = 5?', opts: ['Alya', 'Bima', 'Dina', 'Sama semua'], ans: 2, exp: 'Dina membaca 5 buku (paling banyak).' },
      { text: 'Jumlah buku yang dibaca Alya (4) dan Bima (3) adalah...', opts: ['6', '7', '8', '9'], ans: 1, exp: '4 + 3 = 7 buku.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-07', subSeq: 4,
    objectives: ['Siswa mampu membaca piktogram di mana 1 gambar mewakili lebih dari 1 data (misalnya 2 atau 5).'],
    materialTitle: 'Piktogram dengan Skala',
    blocks: [
      { type: 'table', title: 'Piktogram Panen Bandeng (🐟 = 2 ekor)', headers: ['Hari', 'Hasil Panen'], rows: [
        ['Senin', '🐟 🐟 🐟 (3 × 2 = 6 ekor)'],
        ['Selasa', '🐟 🐟 🐟 🐟 (4 × 2 = 8 ekor)'],
        ['Rabu', '🐟 🐟 (2 × 2 = 4 ekor)'],
      ]},
      { type: 'misconception', wrong: 'Mengira 🐟🐟🐟 berarti hanya 3 ekor padahal keterangannya 🐟 = 2 ekor.', right: 'Kalikan jumlah gambar dengan nilai skalanya: 3 × 2 = 6 ekor!' },
    ],
    activityTitle: 'Latihan: Piktogram Berskala',
    questions: [
      { text: 'Jika 1 gambar 🍎 mewakili 2 apel, maka 4 gambar 🍎🍎🍎🍎 mewakili ... apel.', opts: ['4', '6', '8', '10'], ans: 2, exp: '4 × 2 = 8 apel.' },
      { text: 'Jika 1 gambar ⭐ mewakili 5 siswa, berapa gambar ⭐ yang dibutuhkan untuk 15 siswa?', opts: ['2', '3', '4', '5'], ans: 1, exp: '15 ÷ 5 = 3 gambar bintang.' },
      { text: 'Pada piktogram (🐟 = 2 ekor): Senin 3 gambar, Selasa 4 gambar. Selisih panen Selasa dan Senin adalah...', opts: ['1 ekor', '2 ekor', '4 ekor', '7 ekor'], ans: 1, exp: 'Selasa 8 ekor − Senin 6 ekor = 2 ekor.' },
    ],
  },
  {
    topicCode: 'MAT-SD3-07', subSeq: 5,
    objectives: ['Siswa mampu membaca dan menafsirkan diagram batang vertikal/horizontal sederhana.'],
    materialTitle: 'Diagram Batang Sederhana',
    blocks: [
      { type: 'story_panel', title: 'Membaca Tiang Diagram Batang', lines: [
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Diagram batang memakai tiang-tiang warna! Makin TINGGI tiangnya, makin BANYAK jumlah datanya!' },
        { speaker: 'Raka', avatar: '👦', text: 'Untuk tahu angkanya, kita tarik garis lurus dari puncak tiang ke angka di sebelah kiri ya Pak!' },
      ]},
      { type: 'table', title: 'Data Tinggi Batang Ekstrakurikuler Kelas 3', headers: ['Ekskul', 'Tinggi Batang (Siswa)'], rows: [
        ['Pramuka', '12 siswa'],
        ['Menari', '8 siswa'],
        ['Futsal', '10 siswa'],
        ['Melukis', '6 siswa'],
      ]},
    ],
    activityTitle: 'Latihan: Diagram Batang Sederhana',
    questions: [
      { text: 'Pada diagram batang tegak, batang yang paling TINGGI menunjukkan data yang...', opts: ['Paling sedikit', 'Paling banyak', 'Nol', 'Sama rata'], ans: 1, exp: 'Tinggi batang sebanding dengan jumlah data.' },
      { text: 'Dari data: Pramuka (12), Menari (8), Futsal (10), Melukis (6). Ekskul yang paling sedikit peminatnya adalah...', opts: ['Pramuka', 'Menari', 'Futsal', 'Melukis'], ans: 3, exp: 'Melukis hanya 6 siswa.' },
      { text: 'Jumlah siswa yang ikut Menari (8) dan Futsal (10) adalah...', opts: ['16', '18', '20', '14'], ans: 1, exp: '8 + 10 = 18 siswa.' },
    ],
  },
];

upsertLessonsBatch('Kelas 3 SD — Matematika (7 Bab, 30 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

