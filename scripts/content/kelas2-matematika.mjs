import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: BILANGAN SAMPAI 100
  {
    topicCode: 'MAT-SD2-01', subSeq: 1,
    objectives: ['Siswa mampu membaca dan menuliskan bilangan cacah sampai 100 dengan benar.'],
    materialTitle: 'Membaca dan Menulis Bilangan sampai 100',
    blocks: [
      { type: 'story_panel', title: 'Bilangan Dua Angka!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Angka di kiri dibaca "puluh", angka di kanan dibaca biasa. Misalnya 47 dibaca empat puluh tujuh!' },
        { speaker: 'Bima', avatar: '👦', text: 'Berarti kalau 85 dibaca delapan puluh lima ya Bu!' },
      ]},
      { type: 'flashcards', title: 'Baca Dulu, Lalu Klik untuk Cek!', cards: [
        { emoji: '🔢', front: '34', back: 'Tiga puluh empat' },
        { emoji: '🔢', front: '58', back: 'Lima puluh delapan' },
        { emoji: '🔢', front: '70', back: 'Tujuh puluh' },
        { emoji: '🔢', front: '92', back: 'Sembilan puluh dua' },
        { emoji: '💯', front: '100', back: 'Seratus' },
      ]},
      { type: 'tip', text: 'Hati-hati: 40 dibaca "empat puluh", bukan "empat nol".' },
    ],
    activityTitle: 'Latihan: Membaca & Menulis Bilangan 1–100',
    questions: [
      { text: 'Lambang bilangan dari "enam puluh empat" adalah...', opts: ['46', '64', '604', '406'], ans: 1, exp: 'Enam puluh (60) + empat (4) = 64.' },
      { text: 'Bilangan 89 dibaca...', opts: ['Sembilan puluh delapan', 'Delapan puluh sembilan', 'Delapan sembilan', 'Delapan puluh'], ans: 1, exp: '8 di puluhan dan 9 di satuan dibaca delapan puluh sembilan.' },
      { text: 'Bilangan tepat sesudah 79 adalah...', opts: ['78', '80', '81', '90'], ans: 1, exp: 'Sesudah 79 adalah 80 (delapan puluh).' },
      { text: 'Seratus ditulis dengan lambang bilangan...', opts: ['10', '100', '1000', '101'], ans: 1, exp: 'Seratus ditulis 100.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-01', subSeq: 2,
    objectives: ['Siswa mampu menentukan nilai tempat puluhan dan satuan pada bilangan dua angka.'],
    materialTitle: 'Nilai Tempat Puluhan dan Satuan',
    blocks: [
      { type: 'table', title: 'Tabel Nilai Tempat', headers: ['Bilangan', 'Puluhan (Kiri)', 'Satuan (Kanan)', 'Bentuk Panjang'], rows: [
        ['35', '3 puluhan (30)', '5 satuan (5)', '30 + 5'],
        ['62', '6 puluhan (60)', '2 satuan (2)', '60 + 2'],
        ['90', '9 puluhan (90)', '0 satuan (0)', '90 + 0'],
      ]},
      { type: 'worked_example', level: 'Dasar', question: 'Pada bilangan 74, berapa nilai angka 7 dan angka 4?', steps: ['Angka 7 di kiri = puluhan → nilainya 70.', 'Angka 4 di kanan = satuan → nilainya 4.'], answer: '7 = 70 (puluhan), 4 = 4 (satuan).' },
    ],
    activityTitle: 'Latihan: Puluhan & Satuan',
    questions: [
      { text: 'Pada bilangan 73, angka 7 menempati nilai tempat...', opts: ['Satuan', 'Puluhan', 'Ratusan', 'Ribuan'], ans: 1, exp: 'Angka di sebelah kiri (7) menempati nilai tempat puluhan.' },
      { text: '5 puluhan + 8 satuan sama dengan...', opts: ['85', '58', '508', '13'], ans: 1, exp: '50 + 8 = 58.' },
      { text: 'Nilai angka 6 pada bilangan 64 adalah...', opts: ['6', '60', '600', '4'], ans: 1, exp: 'Karena di tempat puluhan, nilainya 60.' },
      { text: 'Angka satuan pada bilangan 92 adalah...', opts: ['9', '2', '90', '20'], ans: 1, exp: 'Angka di sebelah kanan (2) adalah satuan.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-01', subSeq: 3,
    objectives: ['Siswa mampu membandingkan dan mengurutkan bilangan sampai 100.'],
    materialTitle: 'Membandingkan dan Mengurutkan Bilangan sampai 100',
    blocks: [
      { type: 'list', title: 'Cara Cepat Membandingkan Dua Bilangan', items: ['Bandingkan angka PULUHAN (kiri) dulu!', 'Jika puluhannya lebih besar, bilangan itu pasti lebih besar (mis. 61 > 59).', 'Jika puluhannya SAMA, baru bandingkan angka SATUAN (kanan) (mis. 48 > 43).'] },
      { type: 'worked_example', level: 'Dasar', question: 'Urutkan dari yang TERKECIL: 54, 38, 62, 51', steps: ['Lihat puluhannya: 38 paling kecil (puluhan 3).', 'Antara 54 dan 51, puluhannya sama-sama 5 → 51 < 54.', 'Terbesar adalah 62 (puluhan 6).'], answer: '38, 51, 54, 62' },
    ],
    activityTitle: 'Latihan: Bandingkan & Urutkan',
    questions: [
      { text: 'Manakah perbandingan yang BENAR?', opts: ['45 lebih besar dari 54', '67 lebih besar dari 62', '39 lebih besar dari 41', '80 lebih kecil dari 78'], ans: 1, exp: '67 dan 62 sama-sama puluhan 6, dan 7 > 2, sehingga 67 > 62.' },
      { text: 'Urutan dari TERKECIL untuk 42, 29, 55, 48 adalah...', opts: ['29, 42, 48, 55', '55, 48, 42, 29', '29, 48, 42, 55', '42, 29, 48, 55'], ans: 0, exp: 'Puluhan terurut: 29, 42, 48, 55.' },
      { text: 'Bilangan yang PALING BESAR adalah...', opts: ['79', '81', '69', '75'], ans: 1, exp: '81 memiliki puluhan 8 (terbesar).' },
      { text: 'Bilangan yang berada di antara 58 dan 60 adalah...', opts: ['57', '59', '61', '56'], ans: 1, exp: '58, 59, 60.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-01', subSeq: 4,
    objectives: ['Siswa mampu menyusun dan mengurai bilangan dua angka menjadi bentuk panjang.'],
    materialTitle: 'Menyusun dan Mengurai Bilangan',
    blocks: [
      { type: 'flashcards', title: 'Latihan Bentuk Panjang (Klik Kartunya!)', cards: [
        { emoji: '🧩', front: '46 = ... + ...', back: '40 + 6' },
        { emoji: '🧩', front: '83 = ... + ...', back: '80 + 3' },
        { emoji: '🧩', front: '70 + 9 = ...', back: '79' },
        { emoji: '🧩', front: '35 bisa juga diurai 20 + ...', back: '15' },
      ]},
    ],
    activityTitle: 'Latihan: Menyusun & Mengurai Bilangan',
    questions: [
      { text: 'Bentuk panjang dari bilangan 57 adalah...', opts: ['5 + 7', '50 + 7', '70 + 5', '500 + 7'], ans: 1, exp: '57 = 50 + 7.' },
      { text: '60 + 8 jika disusun menjadi bilangan...', opts: ['86', '68', '608', '14'], ans: 1, exp: '60 + 8 = 68.' },
      { text: 'Bilangan 42 dapat diurai menjadi 30 + ...', opts: ['2', '12', '22', '10'], ans: 1, exp: '30 + 12 = 42.' },
    ],
  },

  // BAB 2: OPERASI PENJUMLAHAN DAN PENGURANGAN
  {
    topicCode: 'MAT-SD2-02', subSeq: 1,
    objectives: ['Siswa mampu melakukan penjumlahan dan pengurangan dua angka tanpa dan dengan menyimpan/meminjam sederhana.'],
    materialTitle: 'Penjumlahan dan Pengurangan Bersusun',
    blocks: [
      { type: 'interactive_counter', mode: 'add', emoji: '🟦', emoji2: '🟩', initialA: 8, initialB: 6, max: 15, title: 'Coba Penjumlahan Konkret Dulu!' },
      { type: 'worked_example', level: 'Bersusun Pendek', question: 'Hitung hasil dari 34 + 25!', steps: ['Jumlahkan satuan (kanan): 4 + 5 = 9.', 'Jumlahkan puluhan (kiri): 3 + 2 = 5 (artinya 50).', 'Gabungkan: 59.'], answer: '34 + 25 = 59' },
      { type: 'worked_example', level: 'Pengurangan', question: 'Hitung hasil dari 68 − 23!', steps: ['Kurangkan satuan: 8 − 3 = 5.', 'Kurangkan puluhan: 6 − 2 = 4.', 'Gabungkan: 45.'], answer: '68 − 23 = 45' },
    ],
    activityTitle: 'Latihan: Penjumlahan & Pengurangan Bersusun',
    questions: [
      { text: '23 + 15 = ...', opts: ['37', '38', '39', '48'], ans: 1, exp: 'Satuan 3+5=8, puluhan 2+1=3 → 38.' },
      { text: '57 − 24 = ...', opts: ['33', '34', '43', '23'], ans: 0, exp: 'Satuan 7−4=3, puluhan 5−2=3 → 33.' },
      { text: '28 + 16 = ...', opts: ['34', '44', '42', '36'], ans: 1, exp: '8+6=14 (tulis 4 simpan 1), 2+1+1=4 → 44.' },
      { text: '42 − 15 = ...', opts: ['27', '37', '23', '33'], ans: 0, exp: 'Pinjam 1 puluhan: 12−5=7, 3−1=2 → 27.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-02', subSeq: 2,
    objectives: ['Siswa memahami bahwa penjumlahan dan pengurangan saling berkebalikan (keluarga bilangan).'],
    materialTitle: 'Hubungan Penjumlahan dan Pengurangan',
    blocks: [
      { type: 'story_panel', title: 'Keluarga Bilangan (Fact Family)', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Kalau kita tahu 7 + 5 = 12, kita langsung tahu 12 − 5 = 7 dan 12 − 7 = 5!' },
        { speaker: 'Alya', avatar: '👧', text: 'Wah keren! Penjumlahan dan pengurangan saling berkebalikan ya Bu!' },
      ]},
      { type: 'flashcards', title: 'Cek Pasangan Kebalikannya!', cards: [
        { emoji: '🔄', front: '8 + 4 = 12 → maka 12 − 4 = ...', back: '8' },
        { emoji: '🔄', front: '10 + 6 = 16 → maka 16 − 10 = ...', back: '6' },
        { emoji: '🔄', front: '15 − 9 = 6 → maka 6 + 9 = ...', back: '15' },
      ]},
    ],
    activityTitle: 'Latihan: Hubungan Tambah & Kurang',
    questions: [
      { text: 'Karena 9 + 6 = 15, maka 15 − 6 = ...', opts: ['6', '9', '15', '21'], ans: 1, exp: 'Kebalikan dari 9 + 6 = 15 adalah 15 − 6 = 9.' },
      { text: 'Jika 20 − 8 = 12, maka 12 + 8 = ...', opts: ['12', '8', '20', '28'], ans: 2, exp: '12 + 8 = 20.' },
      { text: 'Untuk memeriksa apakah 35 − 12 = 23 sudah benar, kita bisa mengecek...', opts: ['23 + 12 = 35', '35 + 12 = 23', '23 − 12 = 35', '12 − 23 = 35'], ans: 0, exp: 'Hasil pengurangan + pengurang harus sama dengan bilangan awal.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-02', subSeq: 3,
    objectives: ['Siswa mampu mengubah cerita singkat menjadi kalimat matematika (+ atau −).'],
    materialTitle: 'Menulis Kalimat Matematika',
    blocks: [
      { type: 'worked_example', level: 'Dasar', question: 'Ubah ke kalimat matematika: "Di kelas ada 18 kursi. Ditambah lagi 7 kursi baru."', steps: ['Banyak awal = 18.', 'Ditambah (+) = 7.', 'Tulis lengkap dengan hasil: 18 + 7 = 25.'], answer: '18 + 7 = 25' },
    ],
    activityTitle: 'Latihan: Kalimat Matematika',
    questions: [
      { text: '"Alya punya 24 stiker, diberikan 9 stiker ke adiknya." Kalimat matematikanya adalah...', opts: ['24 + 9 = 33', '24 − 9 = 15', '9 − 24 = 15', '24 + 9 = 15'], ans: 1, exp: 'Diberikan artinya berkurang: 24 − 9 = 15.' },
      { text: '"Di rak ada 14 buku cerita dan 12 buku gambar." Jumlah seluruh buku ditulis...', opts: ['14 − 12 = 2', '14 + 12 = 26', '14 + 12 = 24', '12 − 14 = 2'], ans: 1, exp: 'Digabungkan menjadi 14 + 12 = 26.' },
      { text: 'Kalimat matematika 30 − 10 = 20 cocok untuk cerita...', opts: ['Membeli 30 permen lalu membeli lagi 10', 'Memiliki 30 permen lalu dibagikan 10 permen', 'Memiliki 10 permen lalu membeli 20', 'Memiliki 20 permen lalu hilang 10'], ans: 1, exp: '30 berkurang 10 tersisa 20.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-02', subSeq: 4,
    objectives: ['Siswa mampu menyelesaikan soal cerita penjumlahan dan pengurangan dua angka.'],
    materialTitle: 'Soal Cerita Penjumlahan & Pengurangan',
    blocks: [
      { type: 'worked_example', level: 'Soal Cerita', question: 'Pak Budi memanen 36 buah mangga di kebun. Sebanyak 14 buah diberikan kepada tetangga. Berapa sisa mangga Pak Budi?', steps: ['Kata kunci: "diberikan" dan "sisa" → Pengurangan (−).', 'Hitung: 36 − 14 = 22.'], answer: 'Sisa mangga Pak Budi ada 22 buah.' },
    ],
    activityTitle: 'Latihan: Soal Cerita Kelas 2',
    questions: [
      { text: 'Di perpustakaan ada 25 siswa perempuan dan 17 siswa laki-laki. Jumlah seluruh siswa ada...', opts: ['32', '42', '41', '8'], ans: 1, exp: '25 + 17 = 42 siswa.' },
      { text: 'Ibu membuat 45 kue lumpur. Sudah terjual 20 kue. Sisa kue Ibu ada...', opts: ['15', '25', '35', '65'], ans: 1, exp: '45 − 20 = 25 kue.' },
      { text: 'Bima menabung 15 koin di hari Senin dan 18 koin di hari Selasa. Total koin Bima adalah...', opts: ['23', '33', '32', '34'], ans: 1, exp: '15 + 18 = 33 koin.' },
    ],
  },

  // BAB 3: PECAHAN SEDERHANA (Pakai Alat Peraga Pecahan SVG!)
  {
    topicCode: 'MAT-SD2-03', subSeq: 1,
    objectives: ['Siswa memahami pecahan setengah (1/2) sebagai 1 dari 2 bagian yang sama besar.'],
    materialTitle: 'Mengenal Pecahan Setengah (1/2)',
    blocks: [
      { type: 'story_panel', title: 'Berbagi Kue Sama Besar!', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Aku punya 1 pizza bulat! Aku potong jadi 2 bagian SAMA BESAR untuk aku dan Bima.' },
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Masing-masing mendapat 1 dari 2 bagian, ditulis 1/2 (dibaca setengah atau satu per dua)!' },
      ]},
      { type: 'interactive_fraction', numerator: 1, denominator: 2, title: 'Lihat Potongan 1/2! Coba Geser Pembilang & Penyebutnya' },
      { type: 'misconception', title: 'Penting Diingat!', text: 'Jika kue dipotong jadi 2 tapi satu besar dan satu kecil, itu BUKAN setengah (1/2)! Potongan pecahan HARUS sama besar.' },
    ],
    activityTitle: 'Latihan: Pecahan Setengah (1/2)',
    questions: [
      { text: 'Satu kue dipotong menjadi 2 bagian sama besar. Satu potongnya bernilai...', opts: ['1/4', '1/2', '1/3', '2/1'], ans: 1, exp: '1 dari 2 bagian sama besar ditulis 1/2 (setengah).' },
      { text: 'Pecahan 1/2 dibaca...', opts: ['Seperempat', 'Setengah / satu per dua', 'Sepertiga', 'Dua per satu'], ans: 1, exp: '1/2 dibaca setengah atau satu per dua.' },
      { text: 'Syarat agar potongan kue dapat disebut pecahan 1/2 adalah...', opts: ['Dipakai 2 warna', 'Kedua potongannya sama besar', 'Satu besar satu kecil', 'Dipotong jadi 4'], ans: 1, exp: 'Pecahan mensyaratkan bagian-bagian yang sama besar.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-03', subSeq: 2,
    objectives: ['Siswa memahami pecahan seperempat (1/4) sebagai 1 dari 4 bagian sama besar.'],
    materialTitle: 'Mengenal Pecahan Seperempat (1/4)',
    blocks: [
      { type: 'paragraph', text: 'Jika 1 kue utuh dipotong menjadi 4 bagian sama besar, maka 1 bagiannya disebut seperempat dan ditulis 1/4!' },
      { type: 'interactive_fraction', numerator: 1, denominator: 4, title: 'Eksplorasi Potongan Seperempat (1/4)!' },
      { type: 'tip', text: 'Bandingkan potongan 1/2 dan 1/4: potongan 1/2 lebih BESAR daripada 1/4 karena kue dibagi lebih sedikit orang!' },
    ],
    activityTitle: 'Latihan: Pecahan Seperempat (1/4)',
    questions: [
      { text: 'Sebuah martabak dipotong menjadi 4 bagian sama besar. Setiap potongan bernilai...', opts: ['1/2', '1/3', '1/4', '4/1'], ans: 2, exp: '1 dari 4 bagian sama besar adalah 1/4.' },
      { text: 'Pecahan 1/4 dibaca...', opts: ['Setengah', 'Seperempat / satu per empat', 'Sepertiga', 'Empat'], ans: 1, exp: '1/4 dibaca seperempat atau satu per empat.' },
      { text: 'Potongan 1/2 kue ... daripada potongan 1/4 kue yang ukurannya sama.', opts: ['lebih besar', 'lebih kecil', 'sama besar', 'lebih sedikit'], ans: 0, exp: 'Dibagi 2 orang potongannya lebih besar daripada dibagi 4 orang.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-03', subSeq: 3,
    objectives: ['Siswa mampu menentukan setengah atau seperempat dari kumpulan benda.'],
    materialTitle: 'Membagi Kumpulan Benda Sama Banyak',
    blocks: [
      { type: 'worked_example', level: 'Dasar', question: 'Di piring ada 8 apel. Setengah (1/2) dari 8 apel adalah berapa buah?', steps: ['Bagi 8 apel menjadi 2 kelompok sama banyak.', 'Kelompok kiri: 4 apel, kelompok kanan: 4 apel.'], answer: 'Setengah dari 8 apel adalah 4 apel.' },
      { type: 'worked_example', level: 'Seperempat', question: 'Ada 8 permen dibagikan ke 4 anak sama banyak. Berapa permen yang didapat setiap anak (1/4)?', steps: ['Bagi 8 permen ke 4 kelompok sama banyak.', 'Setiap kelompok berisi 2 permen (2 + 2 + 2 + 2 = 8).'], answer: 'Seperempat dari 8 permen adalah 2 permen.' },
    ],
    activityTitle: 'Latihan: Pecahan Kumpulan Benda',
    questions: [
      { text: 'Setengah (1/2) dari 10 jeruk adalah...', opts: ['2 jeruk', '4 jeruk', '5 jeruk', '8 jeruk'], ans: 2, exp: '10 dibagi 2 sama banyak = 5 jeruk.' },
      { text: 'Setengah (1/2) dari 6 donat adalah...', opts: ['2 donat', '3 donat', '4 donat', '6 donat'], ans: 1, exp: '6 dibagi 2 sama banyak = 3 donat.' },
      { text: 'Seperempat (1/4) dari 12 kelereng adalah...', opts: ['2 kelereng', '3 kelereng', '4 kelereng', '6 kelereng'], ans: 1, exp: '12 dibagi 4 kelompok sama banyak = 3 kelereng.' },
    ],
  },

  // BAB 4: POLA DAN KALIMAT MATEMATIKA
  {
    topicCode: 'MAT-SD2-04', subSeq: 1,
    objectives: ['Siswa memahami tanda sama dengan (=) berarti nilai ruas kiri dan ruas kanan seimbang.'],
    materialTitle: 'Memahami Tanda Sama Dengan (=)',
    blocks: [
      { type: 'story_panel', title: 'Timbangan yang Seimbang!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Tanda "=" artinya KIRI dan KANAN beratnya SAMA! Misalnya 4 + 3 = 5 + 2 karena keduanya sama-sama 7!' },
        { speaker: 'Bima', avatar: '👦', text: 'Oh, jadi 6 + 4 = 8 + 2 juga benar ya Bu karena sama-sama 10!' },
      ]},
    ],
    activityTitle: 'Latihan: Tanda Sama Dengan (=)',
    questions: [
      { text: 'Manakah kalimat matematika yang SEIMBANG (benar)?', opts: ['5 + 3 = 4 + 2', '6 + 2 = 5 + 3', '7 + 1 = 4 + 5', '9 − 2 = 3 + 3'], ans: 1, exp: '6 + 2 = 8 dan 5 + 3 = 8, keduanya sama!' },
      { text: '4 + 6 = 7 + ... Bilangan yang tepat agar seimbang adalah...', opts: ['2', '3', '4', '5'], ans: 1, exp: 'Ruas kiri 4 + 6 = 10, maka 7 + 3 = 10.' },
      { text: 'Arti tanda "=" dalam matematika adalah...', opts: ['Harus ditambah', 'Nilai kiri sama dengan nilai kanan', 'Lebih besar', 'Lebih kecil'], ans: 1, exp: 'Tanda = menyatakan kesetaraan nilai ruas kiri dan kanan.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-04', subSeq: 2,
    objectives: ['Siswa mampu menemukan bilangan yang belum diketahui (kotak kosong) pada penjumlahan & pengurangan.'],
    materialTitle: 'Menemukan Bilangan yang Belum Diketahui',
    blocks: [
      { type: 'worked_example', level: 'Dasar', question: 'Temukan angka di dalam kotak: 8 + [ ? ] = 15', steps: ['Kita punya 8, ingin sampai 15.', 'Hitung selisihnya: 15 − 8 = 7.', 'Cek: 8 + 7 = 15 (Benar!).'], answer: '7' },
      { type: 'flashcards', title: 'Tebak Angka di Kotak! (Klik)', cards: [
        { emoji: '❓', front: '6 + [ ? ] = 13', back: '7' },
        { emoji: '❓', front: '[ ? ] + 5 = 14', back: '9' },
        { emoji: '❓', front: '12 − [ ? ] = 8', back: '4' },
      ]},
    ],
    activityTitle: 'Latihan: Bilangan Belum Diketahui',
    questions: [
      { text: '9 + [ ? ] = 16. Bilangan pengganti kotak adalah...', opts: ['5', '6', '7', '8'], ans: 2, exp: '16 − 9 = 7, karena 9 + 7 = 16.' },
      { text: '[ ? ] + 8 = 18. Bilangan pengganti kotak adalah...', opts: ['8', '9', '10', '11'], ans: 2, exp: '10 + 8 = 18.' },
      { text: '15 − [ ? ] = 9. Bilangan pengganti kotak adalah...', opts: ['5', '6', '7', '8'], ans: 1, exp: '15 − 6 = 9.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-04', subSeq: 3,
    objectives: ['Siswa mampu menemukan aturan pola bilangan loncat (loncat 2, loncat 5, loncat 10).'],
    materialTitle: 'Pola Gambar dan Pola Bilangan Loncat',
    blocks: [
      { type: 'visual_cards', title: 'Klik Pola Loncat yang Sering Muncul!', items: [
        { visual: '🐸', label: 'Loncat 2', caption: '2, 4, 6, 8, 10', speech: 'Pola loncat dua: dua, empat, enam, delapan, sepuluh.' },
        { visual: '🖐️', label: 'Loncat 5', caption: '5, 10, 15, 20, 25', speech: 'Pola loncat lima: lima, sepuluh, lima belas, dua puluh.' },
        { visual: '🔟', label: 'Loncat 10', caption: '10, 20, 30, 40', speech: 'Pola loncat sepuluh: sepuluh, dua puluh, tiga puluh, empat puluh.' },
      ]},
    ],
    activityTitle: 'Latihan: Pola Bilangan',
    questions: [
      { text: 'Lanjutkan pola loncat 2: 2, 4, 6, 8, ...', opts: ['9', '10', '11', '12'], ans: 1, exp: 'Setiap langkah ditambah 2: 8 + 2 = 10.' },
      { text: 'Lanjutkan pola loncat 5: 5, 10, 15, ..., 25', opts: ['18', '20', '22', '24'], ans: 1, exp: '15 + 5 = 20.' },
      { text: 'Pola 30, 40, 50, 60 adalah pola loncat...', opts: ['2', '5', '10', '3'], ans: 2, exp: 'Selisih setiap bilangan adalah 10.' },
    ],
  },

  // BAB 5: PENGUKURAN DAN PERBANDINGAN
  {
    topicCode: 'MAT-SD2-05', subSeq: 1,
    objectives: ['Siswa mampu membandingkan dan mengurutkan panjang serta berat lebih dari 2 benda.'],
    materialTitle: 'Membandingkan dan Mengurutkan Panjang & Berat',
    blocks: [
      { type: 'worked_example', level: 'Dasar', question: 'Panjang pita Merah = 5 jengkal, Biru = 8 jengkal, Kuning = 3 jengkal. Urutkan dari yang TERPENDEK!', steps: ['Bandingkan angkanya: 3 < 5 < 8.', 'Urutkan namanya sesuai angka.'], answer: 'Kuning (3) → Merah (5) → Biru (8).' },
    ],
    activityTitle: 'Latihan: Bandingkan Panjang & Berat',
    questions: [
      { text: 'Berat melon = 9 kelereng, apel = 3 kelereng, mangga = 5 kelereng. Buah PALING BERAT adalah...', opts: ['Apel', 'Mangga', 'Melon', 'Sama semua'], ans: 2, exp: '9 adalah angka terbesar, yaitu melon.' },
      { text: 'Urutan buah dari PALING RINGAN pada soal di atas adalah...', opts: ['Melon, Mangga, Apel', 'Apel, Mangga, Melon', 'Mangga, Apel, Melon', 'Apel, Melon, Mangga'], ans: 1, exp: '3 (Apel) < 5 (Mangga) < 9 (Melon).' },
      { text: 'Jika tongkat A lebih panjang dari B, dan B lebih panjang dari C, maka yang PALING PANJANG adalah...', opts: ['Tongkat A', 'Tongkat B', 'Tongkat C', 'Sama semua'], ans: 0, exp: 'A > B > C, jadi A paling panjang.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-05', subSeq: 2,
    objectives: ['Siswa mampu memperkirakan (mengestimasi) ukuran panjang atau berat benda secara masuk akal.'],
    materialTitle: 'Mengestimasi (Memperkirakan) Ukuran Benda',
    blocks: [
      { type: 'paragraph', text: 'Estimasi artinya memperkirakan ukuran sebelum diukur langsung. Caranya, bandingkan dengan benda yang sudah kita kenal ukurannya!' },
      { type: 'flashcards', title: 'Perkiraan Mana yang Masuk Akal?', cards: [
        { emoji: '✏️', front: 'Panjang 1 pensil baru kira-kira...', back: 'Sekitar 1 jengkal tangan anak' },
        { emoji: '🚪', front: 'Tinggi pintu kelas kira-kira...', back: 'Lebih tinggi dari tubuh kita' },
      ]},
    ],
    activityTitle: 'Latihan: Mengestimasi Ukuran',
    questions: [
      { text: 'Perkiraan panjang 1 penghapus papan tulis yang paling masuk akal adalah sekitar...', opts: ['1 jengkal', '20 langkah', '10 depa', '100 jengkal'], ans: 0, exp: 'Penghapus papan tulis panjangnya kira-kira 1 jengkal.' },
      { text: 'Apa arti "mengestimasi" ukuran?', opts: ['Membuang alat ukur', 'Memperkirakan ukuran secara masuk akal', 'Menyembunyikan benda', 'Memotong benda'], ans: 1, exp: 'Estimasi berarti memperkirakan.' },
      { text: 'Benda yang beratnya kira-kira sama dengan 1 kotak pensil kosong adalah...', opts: ['1 buah buku tulis tipis', '1 mobil', '1 lemari besi', '1 helai rambut'], ans: 0, exp: 'Kotak pensil kosong beratnya sebanding dengan 1 buku tulis tipis.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-05', subSeq: 3,
    objectives: ['Siswa mampu membaca jam tepat (pukul 07.00) dan membandingkan lama waktu kegiatan.'],
    materialTitle: 'Membaca Jam & Membandingkan Durasi Waktu',
    blocks: [
      { type: 'visual_cards', title: 'Ingat Dua Jarum Jam!', items: [
        { visual: '🕖', label: 'Jarum Pendek', caption: 'Menunjuk JAM', speech: 'Jarum pendek menunjukkan jam.' },
        { visual: '🕛', label: 'Jarum Panjang di 12', caption: 'Artinya TEPAT (.00)', speech: 'Jika jarum panjang menunjuk angka dua belas, artinya jam tepat.' },
        { visual: '⏰', label: '1 Jam = 60 Menit', caption: 'Satuan waktu', speech: 'Satu jam sama dengan enam puluh menit.' },
      ]},
    ],
    activityTitle: 'Latihan: Jam & Durasi Waktu',
    questions: [
      { text: 'Jarum pendek menunjuk angka 7, jarum panjang menunjuk angka 12. Jam menunjukkan pukul...', opts: ['07.00', '12.07', '07.12', '06.00'], ans: 0, exp: 'Jarum pendek di 7 dan panjang di 12 berarti pukul 07.00 tepat.' },
      { text: 'Alya belajar mulai pukul 07.00 sampai 09.00. Berapa lama Alya belajar?', opts: ['1 jam', '2 jam', '3 jam', '4 jam'], ans: 1, exp: 'Dari pukul 7 ke pukul 9 selisihnya 2 jam.' },
      { text: '1 jam sama dengan ... menit.', opts: ['30', '60', '100', '12'], ans: 1, exp: '1 jam = 60 menit.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-05', subSeq: 4,
    objectives: ['Siswa mampu mengukur dan mencatat panjang/berat dengan satuan tidak baku secara konsisten.'],
    materialTitle: 'Mengukur dengan Satuan Tidak Baku',
    blocks: [
      { type: 'list', title: 'Aturan Mengukur Tidak Baku yang Benar', items: ['Gunakan satuan yang SAMA ukurannya (mis. semua pakai klip kertas yang sama).', 'Susun rapat dari ujung ke ujung tanpa celah dan tidak tumpang tindih.', 'Hitung total satuannya dengan teliti.'] },
    ],
    activityTitle: 'Latihan: Pengukuran Tidak Baku',
    questions: [
      { text: 'Agar pengukuran dengan klip kertas akurat, klip harus disusun...', opts: ['Renggang berjauhan', 'Rapat ujung ke ujung tanpa celah', 'Menumpuk jadi satu', 'Hanya di tengah'], ans: 1, exp: 'Menyusun rapat tanpa celah atau tumpang tindih menghasilkan pengukuran tepat.' },
      { text: 'Berat 1 botol minum seimbang dengan 10 kelereng. Berat 1 tempat makan seimbang dengan 14 kelereng. Selisih beratnya adalah...', opts: ['2 kelereng', '4 kelereng', '24 kelereng', '10 kelereng'], ans: 1, exp: '14 − 10 = 4 kelereng.' },
      { text: 'Panjang meja 6 jengkal, lebar meja 4 jengkal. Meja lebih panjang daripada lebarnya sebanyak...', opts: ['2 jengkal', '10 jengkal', '4 jengkal', '6 jengkal'], ans: 0, exp: '6 − 4 = 2 jengkal.' },
    ],
  },

  // BAB 6: GEOMETRI DAN DATA
  {
    topicCode: 'MAT-SD2-06', subSeq: 1,
    objectives: ['Siswa mampu membedakan dan mengelompokkan bangun datar vs bangun ruang.'],
    materialTitle: 'Mengelompokkan Bangun Datar dan Bangun Ruang',
    blocks: [
      { type: 'shape_gallery', title: 'Klik untuk Bedakan Bangun Datar & Ruang!', shapes: [
        { shape: 'triangle', name: 'Segitiga (Datar)', desc: 'Bangun datar 2 dimensi, punya 3 sisi & 3 sudut.', example: 'Potongan kertas segitiga' },
        { shape: 'square', name: 'Persegi (Datar)', desc: 'Bangun datar 2 dimensi, 4 sisi sama panjang.', example: 'Kertas origami' },
        { shape: 'cube', name: 'Kubus (Ruang)', desc: 'Bangun ruang 3 dimensi, punya isi, 6 sisi persegi.', example: 'Dadu, rubik' },
        { shape: 'sphere', name: 'Bola (Ruang)', desc: 'Bangun ruang 3 dimensi berbentuk bulat penuh.', example: 'Bola sepak, kelereng' },
      ]},
    ],
    activityTitle: 'Latihan: Bangun Datar vs Ruang',
    questions: [
      { text: 'Manakah yang termasuk BANGUN RUANG?', opts: ['Segitiga', 'Persegi', 'Kubus', 'Lingkaran'], ans: 2, exp: 'Kubus adalah bangun ruang 3D yang memiliki isi.' },
      { text: 'Manakah yang termasuk BANGUN DATAR?', opts: ['Bola', 'Kerucut', 'Segitiga', 'Balok'], ans: 2, exp: 'Segitiga adalah bangun datar 2D.' },
      { text: 'Bangun persegi panjang memiliki ... sisi dan ... sudut.', opts: ['3 sisi dan 3 sudut', '4 sisi dan 4 sudut', '5 sisi dan 5 sudut', '0 sudut'], ans: 1, exp: 'Persegi panjang mempunyai 4 sisi dan 4 sudut.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-06', subSeq: 2,
    objectives: ['Siswa memahami cara menyusun (komposisi) dan mengurai (dekomposisi) bangun datar sederhana.'],
    materialTitle: 'Menyusun dan Mengurai Bangun Datar',
    blocks: [
      { type: 'story_panel', title: 'Sulap Kertas Origami!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Ambil 1 kertas origami persegi, lalu lipat miring dari pojok ke pojok!' },
        { speaker: 'Alya', avatar: '👧', text: 'Wah! Satu persegi terurai menjadi DUA segitiga sama besar!' },
      ]},
      { type: 'flashcards', title: 'Ayo Tebak Hasil Gabungannya!', cards: [
        { emoji: '🔺🔺', front: '2 segitiga siku-siku sama besar digabung', back: 'Bisa membentuk 1 Persegi / Persegi Panjang!' },
        { emoji: '🟩🟩', front: '2 persegi sama besar dijajarkan rapat', back: 'Membentuk 1 Persegi Panjang!' },
      ]},
    ],
    activityTitle: 'Latihan: Menyusun & Mengurai Bangun',
    questions: [
      { text: 'Jika 2 persegi sama besar digabung berdampingan, terbentuk bangun...', opts: ['Lingkaran', 'Persegi panjang', 'Segitiga', 'Bola'], ans: 1, exp: 'Dua persegi berdampingan membentuk persegi panjang.' },
      { text: 'Satu kertas persegi yang digunting miring (diagonal) menghasilkan 2 bangun...', opts: ['Lingkaran', 'Segitiga', 'Kubus', 'Kerucut'], ans: 1, exp: 'Potongan diagonal persegi menghasilkan 2 segitiga.' },
      { text: 'Menggabungkan beberapa bangun datar menjadi bentuk baru (seperti gambar rumah) disebut...', opts: ['Komposisi (menyusun) bangun', 'Pengurangan', 'Pengukuran', 'Piktogram'], ans: 0, exp: 'Menyusun beberapa bangun disebut komposisi bangun.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-06', subSeq: 3,
    objectives: ['Siswa mampu menggunakan turus (ikatan 5) dan piktogram untuk mencatat data.'],
    materialTitle: 'Mengenal Turus (Ikatan 5) dan Piktogram',
    blocks: [
      { type: 'paragraph', text: 'Saat menghitung banyak data, setiap hitungan ke-5 kita beri garis miring agar jadi 1 ikatan berisi 5! Jadi gampang dihitung loncat 5.' },
      { type: 'table', title: 'Contoh Data Hobi Siswa Kelas 2', headers: ['Hobi', 'Turus', 'Jumlah'], rows: [
        ['Menggambar', '||||| ||', '7 siswa'],
        ['Sepak Bola', '||||| ||||', '9 siswa'],
        ['Membaca', '||||', '4 siswa'],
      ]},
    ],
    activityTitle: 'Latihan: Turus & Piktogram',
    questions: [
      { text: 'Satu ikatan penuh turus yang dicoret miring bernilai...', opts: ['4', '5', '6', '10'], ans: 1, exp: 'Setiap 4 garis tegak + 1 garis miring bernilai 5.' },
      { text: 'Dari tabel Hobi di atas, hobi yang PALING BANYAK diminati adalah...', opts: ['Menggambar', 'Sepak Bola', 'Membaca', 'Menyanyi'], ans: 1, exp: 'Sepak Bola disukai 9 siswa (terbanyak).' },
      { text: 'Jumlah seluruh siswa pada tabel Hobi (7 + 9 + 4) adalah...', opts: ['18', '19', '20', '21'], ans: 2, exp: '7 + 9 + 4 = 20 siswa.' },
    ],
  },
  {
    topicCode: 'MAT-SD2-06', subSeq: 4,
    objectives: ['Siswa mampu membaca dan menjawab pertanyaan selisih serta jumlah dari data sederhana.'],
    materialTitle: 'Membaca & Membandingkan Data Sederhana',
    blocks: [
      { type: 'worked_example', level: 'Dasar', question: 'Data buku pinjaman: Cerita = 12, Sains = 7, Komik = 10. Berapa selisih buku Cerita dan Sains?', steps: ['Buku Cerita = 12, Sains = 7.', 'Selisih berarti dikurangkan: 12 − 7 = 5.'], answer: 'Selisihnya 5 buku.' },
    ],
    activityTitle: 'Latihan: Membaca Data Sederhana',
    questions: [
      { text: 'Data warna favorit: Biru = 8, Merah = 5, Hijau = 6. Warna yang PALING SEDIKIT disukai adalah...', opts: ['Biru', 'Merah', 'Hijau', 'Kuning'], ans: 1, exp: 'Merah hanya 5 anak (paling sedikit).' },
      { text: 'Berapa selisih pemilih Biru (8) dan Merah (5)?', opts: ['2', '3', '4', '13'], ans: 1, exp: '8 − 5 = 3 anak.' },
      { text: 'Jumlah pemilih Biru (8) dan Hijau (6) adalah...', opts: ['12', '13', '14', '15'], ans: 2, exp: '8 + 6 = 14 anak.' },
    ],
  },
];

upsertLessonsBatch('Kelas 2 SD — Matematika (6 Bab, 22 Submateri)', LESSONS).catch((err) => {
  console.error(err);
  process.exit(1);
});

