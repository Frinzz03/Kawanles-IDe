import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: BILANGAN BULAT
  {
    topicCode: 'MAT-SMP7-01', subSeq: 1,
    objectives: ['Siswa memahami pengertian bilangan bulat (negatif, nol, dan positif) beserta penggunaannya dalam kehidupan sehari-hari.'],
    materialTitle: 'Pengertian Bilangan Bulat',
    blocks: [
      { type: 'text', text: 'Bilangan bulat (ℤ) adalah himpunan bilangan yang terdiri atas bilangan bulat NEGATIF (..., −3, −2, −1), NOL (0), dan bilangan bulat POSITIF (1, 2, 3, ...). Bilangan bulat tidak memiliki bagian pecahan atau desimal.' },
      { type: 'visual_cards', title: 'Penerapan Bilangan Bulat di Dunia Nyata', cards: [
        { emoji: '🌡️', label: 'Suhu Udara', sub: '5°C di bawah nol ditulis −5°C; 30°C di atas nol ditulis +30°C' },
        { emoji: '🌊', label: 'Ketinggian & Kedalaman', sub: '20 m di atas permukaan laut (+20 m); 15 m di bawah laut (−15 m)' },
        { emoji: '💰', label: 'Keuangan', sub: 'Untung/setor (+Rp50.000); rugi/utang (−Rp20.000)' },
      ]},
    ],
    activityTitle: 'Latihan: Pengertian Bilangan Bulat',
    questions: [
      { text: 'Manakah kelompok bilangan yang SEMUANYA merupakan bilangan bulat?', opts: ['−5, 0, 7, −12', '−2, 0.5, 3, 4', '1/2, −3, 0, 8', '0, 2.5, −4, 9'], ans: 0, exp: 'Bilangan bulat tidak mengandung pecahan atau desimal non-bulat.' },
      { text: 'Sebuah kapal selam berada pada kedalaman 120 meter di bawah permukaan laut. Posisi tersebut dinyatakan dengan bilangan bulat...', opts: ['+120', '−120', '0', '1/120'], ans: 1, exp: 'Di bawah permukaan laut (acuan 0) dinyatakan negatif: −120.' },
      { text: 'Bilangan nol (0) pada himpunan bilangan bulat bersifat...', opts: ['Positif', 'Negatif', 'Netral (bukan positif dan bukan negatif)', 'Pecahan'], ans: 2, exp: 'Nol menjadi pemisah antara bilangan negatif dan positif.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-01', subSeq: 2,
    objectives: ['Siswa mampu membedakan bilangan bulat positif, negatif, dan menentukan lawan (invers aditif) suatu bilangan bulat.'],
    materialTitle: 'Bilangan Positif, Negatif, dan Lawan Bilangan',
    blocks: [
      { type: 'formula', name: 'Lawan Bilangan (Invers Penjumlahan)', expression: 'Lawan dari a adalah −a  |  a + (−a) = 0', note: 'Contoh: lawan dari 14 adalah −14; lawan dari −9 adalah 9.' },
      { type: 'misconception', wrong: 'Mengira −20 lebih besar daripada −5 karena angka 20 > 5.', right: 'Pada bilangan negatif, makin besar angkanya makin KECIL nilainya! Suhu −20°C jauh lebih dingin (lebih kecil) daripada −5°C!' },
    ],
    activityTitle: 'Latihan: Bilangan Positif & Negatif',
    questions: [
      { text: 'Lawan dari bilangan bulat −37 adalah...', opts: ['−37', '37', '0', '1/37'], ans: 1, exp: '−37 + 37 = 0, jadi lawannya adalah 37.' },
      { text: 'Suhu ruang pendingin ikan bandeng −12°C, sedangkan ruang freezer es krim −18°C. Ruang manakah yang lebih DINGIN (suhunya lebih rendah)?', opts: ['Ruang bandeng (−12°C)', 'Ruang freezer (−18°C)', 'Sama dingin', 'Tidak bisa dibandingkan'], ans: 1, exp: '−18 < −12, sehingga −18°C lebih dingin.' },
      { text: 'Jika maju 8 langkah dinyatakan +8, maka mundur 13 langkah dinyatakan...', opts: ['+13', '−13', '−5', '+5'], ans: 1, exp: 'Arah berlawanan dari positif adalah negatif: −13.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-01', subSeq: 3,
    objectives: ['Siswa mampu merepresentasikan posisi dan perpindahan bilangan bulat pada garis bilangan.'],
    materialTitle: 'Garis Bilangan Bulat',
    blocks: [
      { type: 'text', text: 'Pada garis bilangan mendatar: makin ke KANAN nilai bilangan makin BESAR, makin ke KIRI nilai bilangan makin KECIL. Menambah bilangan positif berarti melangkah ke KANAN; mengurangi bilangan positif berarti melangkah ke KIRI.' },
      { type: 'worked_example', level: 'Perpindahan Garis Bilangan', question: 'Dari titik −3, melangkah 7 satuan ke kanan. Di titik manakah posisi akhir?', steps: ['Mulai di −3, ke kanan 3 langkah mencapai 0.', 'Masih tersisa 4 langkah ke kanan → berakhir di +4.', 'Secara matematika: −3 + 7 = 4.'], answer: 'Titik 4.' },
    ],
    activityTitle: 'Latihan: Garis Bilangan',
    questions: [
      { text: 'Bilangan bulat yang terletak 6 satuan di sebelah KIRI angka 2 pada garis bilangan adalah...', opts: ['8', '−4', '−6', '−8'], ans: 1, exp: '2 − 6 = −4.' },
      { text: 'Jarak (selisih) antara titik −5 dan titik 4 pada garis bilangan adalah ... satuan.', opts: ['1', '8', '9', '−9'], ans: 2, exp: '4 − (−5) = 9 satuan.' },
      { text: 'Bilangan bulat yang terletak di antara −3 dan 2 adalah...', opts: ['−2, −1, 0, 1', '−3, −2, −1, 0, 1, 2', '−4, −3, 1', '0, 1, 2'], ans: 0, exp: '"Di antara" tidak mengikutsertakan batas −3 dan 2.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-01', subSeq: 4,
    objectives: ['Siswa mampu membandingkan dan mengurutkan bilangan bulat positif maupun negatif secara akurat.'],
    materialTitle: 'Membandingkan dan Mengurutkan Bilangan Bulat',
    blocks: [
      { type: 'list', title: 'Kunci Membandingkan Bilangan Bulat', items: ['Bilangan positif SELALU lebih besar daripada 0 dan semua bilangan negatif.', 'Nol (0) SELALU lebih besar daripada semua bilangan negatif.', 'Antara dua bilangan negatif, angka yang lebih kecil nilainya lebih BESAR (mis. −4 > −15).'] },
    ],
    activityTitle: 'Latihan: Bandingkan & Urutkan Bilangan Bulat',
    questions: [
      { text: 'Tanda perbandingan yang tepat untuk −14 ... −9 adalah...', opts: ['>', '<', '=', '≥'], ans: 1, exp: '−14 berada di kiri −9 pada garis bilangan → −14 < −9.' },
      { text: 'Urutan dari TERKECIL untuk 4, −7, 0, −2, 9, −11 adalah...', opts: ['−11, −7, −2, 0, 4, 9', '−2, −7, −11, 0, 4, 9', '9, 4, 0, −2, −7, −11', '0, −2, 4, −7, 9, −11'], ans: 0, exp: 'Dari paling kiri ke paling kanan pada garis bilangan: −11, −7, −2, 0, 4, 9.' },
      { text: 'Manakah pernyataan yang BENAR?', opts: ['−100 > −1', '0 < −5', '−8 > −12', '−3 > 2'], ans: 2, exp: '−8 terletak di kanan −12 sehingga −8 > −12.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-01', subSeq: 5,
    objectives: ['Siswa mampu menghitung penjumlahan dan pengurangan bilangan bulat dengan kaidah tanda yang tepat.'],
    materialTitle: 'Penjumlahan dan Pengurangan Bilangan Bulat',
    blocks: [
      { type: 'formula', name: 'Aturan Tanda Penting', expression: 'a + (−b) = a − b   |   a − (−b) = a + b', note: 'Dua tanda minus berdekatan "− (−)" berubah menjadi PLUS (+)!' },
      { type: 'worked_example', level: '4 Kasus Wajib Kuasai', question: 'Hitung: (1) −8 + 5, (2) −6 − 9, (3) 4 − (−7), (4) −10 − (−15)', steps: ['−8 + 5 = −3 (utang 8 bayar 5, sisa utang 3).', '−6 − 9 = −15 (negatif tambah negatif makin negatif).', '4 − (−7) = 4 + 7 = 11.', '−10 − (−15) = −10 + 15 = 5.'], answer: '−3, −15, 11, dan 5.' },
    ],
    activityTitle: 'Latihan: Penjumlahan & Pengurangan Bilangan Bulat',
    questions: [
      { text: '−12 + 7 = ...', opts: ['−19', '−5', '5', '19'], ans: 1, exp: '−12 + 7 = −5.' },
      { text: '8 − (−13) = ...', opts: ['−5', '5', '21', '−21'], ans: 2, exp: '8 + 13 = 21.' },
      { text: 'Suhu daging beku −6°C. Setelah dikeluarkan dari kulkas, suhunya naik 14°C. Suhu daging sekarang adalah...', opts: ['−20°C', '8°C', '−8°C', '20°C'], ans: 1, exp: '−6 + 14 = 8°C.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-01', subSeq: 6,
    objectives: ['Siswa mampu menghitung perkalian dan pembagian bilangan bulat berdasarkan aturan tanda.'],
    materialTitle: 'Perkalian dan Pembagian Bilangan Bulat',
    blocks: [
      { type: 'table', title: 'Aturan Tanda Perkalian & Pembagian (Sama = +, Beda = −)', headers: ['Operasi Tanda', 'Hasil Tanda', 'Contoh'], rows: [
        ['(+) × (+) atau (+) ÷ (+)', 'POSITIF (+)', '6 × 4 = 24'],
        ['(−) × (−) atau (−) ÷ (−)', 'POSITIF (+)', '(−6) × (−4) = 24 ; (−24) ÷ (−6) = 4'],
        ['(+) × (−) atau (−) × (+)', 'NEGATIF (−)', '6 × (−4) = −24 ; (−24) ÷ 6 = −4'],
      ]},
    ],
    activityTitle: 'Latihan: Perkalian & Pembagian Bilangan Bulat',
    questions: [
      { text: '(−8) × (−7) = ...', opts: ['−56', '56', '−15', '15'], ans: 1, exp: 'Negatif × negatif = positif → 56.' },
      { text: '(−72) ÷ 9 = ...', opts: ['8', '−8', '−9', '9'], ans: 1, exp: 'Negatif ÷ positif = negatif → −8.' },
      { text: '(−3) × 4 × (−5) = ...', opts: ['−60', '60', '−12', '12'], ans: 1, exp: '(−3×4) = −12; (−12)×(−5) = 60.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-01', subSeq: 7,
    objectives: ['Siswa mampu menyelesaikan operasi hitung campuran bilangan bulat termasuk soal skor tes/olimpiade.'],
    materialTitle: 'Operasi Campuran Bilangan Bulat',
    blocks: [
      { type: 'worked_example', level: 'Soal Skor Ujian', question: 'Dalam lomba IPA: benar = +4, salah = −2, tidak dijawab = −1. Dari 25 soal, Alya menjawab benar 18 soal, salah 5 soal, dan sisanya kosong. Berapa skornya?', steps: ['Kosong = 25 − 18 − 5 = 2 soal.', 'Skor = (18 × 4) + (5 × (−2)) + (2 × (−1)) = 72 − 10 − 2 = 60.'], answer: 'Skor Alya = 60.' },
    ],
    activityTitle: 'Latihan: Operasi Campuran Bilangan Bulat',
    questions: [
      { text: '−15 + 24 ÷ (−6) × 2 = ...', opts: ['−23', '−7', '−3', '−17'], ans: 0, exp: '24 ÷ (−6) = −4; −4 × 2 = −8; −15 + (−8) = −23.' },
      { text: '30 − (−12) ÷ 4 + (−5) = ...', opts: ['28', '22', '38', '18'], ans: 0, exp: '(−12)÷4 = −3; 30 − (−3) + (−5) = 30 + 3 − 5 = 28.' },
      { text: 'Aturan tes: benar +4, salah −1, kosong 0. Dari 20 soal, Raka benar 15 dan salah 3 (sisanya kosong). Skor Raka adalah...', opts: ['57', '60', '55', '63'], ans: 0, exp: '(15×4) + (3×−1) + (2×0) = 60 − 3 = 57.' },
    ],
  },

  // BAB 2: BILANGAN PECAHAN DAN DESIMAL
  {
    topicCode: 'MAT-SMP7-02', subSeq: 1,
    objectives: ['Siswa memahami bilangan rasional dalam bentuk pecahan biasa, campuran, serta pecahan negatif.'],
    materialTitle: 'Pecahan Biasa, Campuran, dan Negatif',
    blocks: [
      { type: 'text', text: 'Bilangan rasional mencakup pecahan positif maupun negatif yang dapat dinyatakan dalam bentuk a/b dengan a, b bilangan bulat dan b ≠ 0.' },
      { type: 'tip', text: 'Bentuk pecahan negatif: −(3/4) = (−3)/4 = 3/(−4). Untuk mengubah −2 1/3 ke pecahan biasa, ubah positifnya dulu (7/3) lalu pasang tanda minus di depan: −7/3!' },
    ],
    activityTitle: 'Latihan: Pecahan Biasa & Campuran',
    questions: [
      { text: 'Bentuk pecahan biasa dari −3 2/5 adalah...', opts: ['−17/5', '−13/5', '17/5', '−11/5'], ans: 0, exp: '3 2/5 = 17/5, jadi −3 2/5 = −17/5.' },
      { text: 'Syarat mutlak penyebut (b) pada bilangan pecahan a/b adalah...', opts: ['b ≠ 0', 'b = 0', 'b harus negatif', 'b selalu 10'], ans: 0, exp: 'Pembagian dengan 0 tidak terdefinisi dalam matematika.' },
      { text: 'Bentuk pecahan campuran dari 29/6 adalah...', opts: ['4 5/6', '4 1/6', '5 1/6', '3 5/6'], ans: 0, exp: '29 ÷ 6 = 4 sisa 5 → 4 5/6.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-02', subSeq: 2,
    objectives: ['Siswa mampu menyederhanakan dan menentukan pecahan senilai dengan cepat menggunakan FPB.'],
    materialTitle: 'Pecahan Senilai dan Bentuk Paling Sederhana',
    blocks: [
      { type: 'worked_example', level: 'Menyederhanakan Pecahan Besar', question: 'Sederhanakan 42/56 ke bentuk paling sederhana!', steps: ['FPB(42, 56) = 14.', '(42 ÷ 14) / (56 ÷ 14) = 3/4.'], answer: '3/4' },
    ],
    activityTitle: 'Latihan: Pecahan Senilai',
    questions: [
      { text: 'Bentuk paling sederhana dari 36/48 adalah...', opts: ['6/8', '3/4', '9/12', '2/3'], ans: 1, exp: 'Bagi atas-bawah dengan FPB(36,48)=12 → 3/4.' },
      { text: 'Jika −3/5 = x/25, maka nilai x adalah...', opts: ['15', '−15', '−5', '−20'], ans: 1, exp: '5×5=25, maka −3×5 = −15.' },
      { text: 'Pasangan pecahan yang SENILAI adalah...', opts: ['4/6 dan 10/15', '3/5 dan 9/10', '2/7 dan 6/14', '5/8 dan 15/16'], ans: 0, exp: '4/6 = 2/3 dan 10/15 = 2/3.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-02', subSeq: 3,
    objectives: ['Siswa mampu membandingkan dan mengurutkan pecahan positif dan negatif.'],
    materialTitle: 'Membandingkan Pecahan Positif & Negatif',
    blocks: [
      { type: 'worked_example', level: 'Pecahan Negatif', question: 'Bandingkan −2/3 dan −3/4!', steps: ['Samakan penyebut (12): −2/3 = −8/12 dan −3/4 = −9/12.', 'Ingat aturan bilangan negatif: −8 > −9, sehingga −8/12 > −9/12!'], answer: '−2/3 > −3/4.' },
    ],
    activityTitle: 'Latihan: Membandingkan Pecahan',
    questions: [
      { text: 'Tanda yang tepat untuk −1/2 ... −1/4 adalah...', opts: ['>', '<', '=', '≥'], ans: 1, exp: '−2/4 < −1/4 (pada garis bilangan −1/2 di kiri −1/4).' },
      { text: 'Urutan dari TERKECIL untuk 5/6, 7/9, 3/4 adalah...', opts: ['3/4, 7/9, 5/6', '5/6, 7/9, 3/4', '7/9, 3/4, 5/6', '3/4, 5/6, 7/9'], ans: 0, exp: 'Ubah ke /36: 27/36 (3/4) < 28/36 (7/9) < 30/36 (5/6).' },
      { text: 'Pecahan yang terletak tepat di tengah antara 1/3 dan 1/2 adalah...', opts: ['5/12', '2/5', '1/4', '7/12'], ans: 0, exp: '1/3 = 4/12, 1/2 = 6/12 → tengahnya 5/12.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-02', subSeq: 4,
    objectives: ['Siswa mampu melakukan operasi +, −, ×, ÷ pada pecahan biasa, campuran, dan negatif.'],
    materialTitle: 'Operasi Hitung Pecahan Lengkap',
    blocks: [
      { type: 'formula', name: 'Ringkasan 4 Operasi Pecahan', expression: 'a/b × c/d = (ac)/(bd)  |  a/b ÷ c/d = a/b × d/c', note: 'Tambah/kurang WAJIB samakan penyebut; kali/bagi langsung kalikan (ubah pecahan campuran ke biasa dulu!).' },
      { type: 'worked_example', level: 'Campuran', question: 'Hitung 1 1/2 × 2/3 + 1/4!', steps: ['Perkalian dulu: 3/2 × 2/3 = 1.', 'Jumlahkan: 1 + 1/4 = 1 1/4 (atau 5/4).'], answer: '1 1/4.' },
    ],
    activityTitle: 'Latihan: Operasi Pecahan',
    questions: [
      { text: '3/4 × 8/9 = ...', opts: ['2/3', '11/13', '24/13', '1/3'], ans: 0, exp: 'Coret silang: (3÷3)/(4÷4) × (8÷4)/(9÷3) = 2/3.' },
      { text: '2 1/4 ÷ 3/2 = ...', opts: ['1 1/2', '3/4', '27/8', '2'], ans: 0, exp: '9/4 × 2/3 = 18/12 = 3/2 = 1 1/2.' },
      { text: '(−2/3) + 5/6 = ...', opts: ['1/6', '−1/6', '3/9', '7/6'], ans: 0, exp: '−4/6 + 5/6 = 1/6.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-02', subSeq: 5,
    objectives: ['Siswa mampu melakukan operasi hitung penjumlahan, pengurangan, perkalian, dan pembagian bilangan desimal.'],
    materialTitle: 'Operasi Bilangan Desimal',
    blocks: [
      { type: 'list', title: 'Kunci Operasi Desimal', items: ['Tambah & Kurang: LURUSKAN tanda komanya!', 'Perkalian: Kalikan seperti bilangan bulat biasa, lalu hitung TOTAL angka di belakang koma (mis. 0,4 × 0,25 → 4×25=100, ada 1+2=3 angka belakang koma → 0,100 = 0,1).', 'Pembagian: Geser koma pembagi dan yang dibagi sama banyaknya hingga pembagi menjadi bulat (mis. 2,4 ÷ 0,6 = 24 ÷ 6 = 4)!'] },
    ],
    activityTitle: 'Latihan: Bilangan Desimal',
    questions: [
      { text: '1,25 × 0,4 = ...', opts: ['5', '0,5', '0,05', '50'], ans: 1, exp: '125 × 4 = 500; 3 angka belakang koma → 0,500 = 0,5.' },
      { text: '3,6 ÷ 0,12 = ...', opts: ['3', '30', '0,3', '300'], ans: 1, exp: 'Kalikan keduanya 100: 360 ÷ 12 = 30.' },
      { text: '5,2 − 1,85 + 0,45 = ...', opts: ['3,8', '3,9', '4,8', '3,7'], ans: 0, exp: '5,20 − 1,85 = 3,35; 3,35 + 0,45 = 3,80 = 3,8.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-02', subSeq: 6,
    objectives: ['Siswa mampu mengonversi pecahan, desimal, dan persen secara luwes serta menyelesaikan soal aplikasi diskon/bunga sederhana.'],
    materialTitle: 'Hubungan Pecahan, Desimal, dan Persen',
    blocks: [
      { type: 'table', title: 'Pecahan Istimewa SMP Wajib Hafal!', headers: ['Pecahan', 'Desimal', 'Persen'], rows: [
        ['1/8', '0,125', '12,5%'],
        ['1/5', '0,2', '20%'],
        ['1/4', '0,25', '25%'],
        ['1/3', '0,333...', '33,3%'],
        ['3/8', '0,375', '37,5%'],
        ['3/4', '0,75', '75%'],
      ]},
    ],
    activityTitle: 'Latihan: Pecahan, Desimal, Persen',
    questions: [
      { text: 'Bentuk desimal dan persen dari 3/8 berturut-turut adalah...', opts: ['0,38 dan 38%', '0,375 dan 37,5%', '0,35 dan 35%', '0,83 dan 83%'], ans: 1, exp: '3 ÷ 8 = 0,375 = 37,5%.' },
      { text: 'Urutan dari TERBESAR untuk 0,62; 5/8; 65% adalah...', opts: ['65%; 5/8; 0,62', '5/8; 65%; 0,62', '0,62; 5/8; 65%', '65%; 0,62; 5/8'], ans: 0, exp: '65%=0,65; 5/8=0,625; 0,62=0,620 → 65% > 5/8 > 0,62.' },
      { text: 'Bentuk pecahan paling sederhana dari 12,5% adalah...', opts: ['1/4', '1/8', '1/12', '5/8'], ans: 1, exp: '12,5/100 = 125/1000 = 1/8.' },
    ],
  },

  // BAB 3: RASIO DAN PERBANDINGAN
  {
    topicCode: 'MAT-SMP7-03', subSeq: 1,
    objectives: ['Siswa mampu menyederhanakan rasio dua besaran sejenis setelah menyamakan satuannya.'],
    materialTitle: 'Pengertian Rasio dan Penyederhanaan',
    blocks: [
      { type: 'misconception', wrong: 'Menulis rasio 50 cm : 2 m langsung sebagai 50 : 2 = 25 : 1.', right: 'Besaran sejenis WAJIB DISAMAKAN SATUANNYA dulu! 2 m = 200 cm → 50 cm : 200 cm = 1 : 4!' },
    ],
    activityTitle: 'Latihan: Pengertian Rasio',
    questions: [
      { text: 'Bentuk paling sederhana dari rasio 45 menit : 1,5 jam adalah...', opts: ['45 : 1,5', '1 : 2', '2 : 1', '3 : 4'], ans: 1, exp: '1,5 jam = 90 menit → 45 : 90 = 1 : 2.' },
      { text: 'Rasio 500 gram : 2 kg dalam bentuk paling sederhana adalah...', opts: ['1 : 4', '4 : 1', '250 : 1', '1 : 2'], ans: 0, exp: '2 kg = 2.000 g → 500 : 2.000 = 1 : 4.' },
      { text: 'Panjang pita A = 1,2 m dan pita B = 80 cm. Rasio A : B adalah...', opts: ['3 : 2', '2 : 3', '12 : 80', '1 : 4'], ans: 0, exp: '120 cm : 80 cm = 3 : 2.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-03', subSeq: 2,
    objectives: ['Siswa mampu memahami rasio dua besaran berbeda satuan (laju/rate seperti km/jam, Rp/kg, jiwa/km²).'],
    materialTitle: 'Rasio Dua Besaran Berbeda (Laju)',
    blocks: [
      { type: 'table', title: 'Contoh Laju (Rate) Dua Besaran Berbeda', headers: ['Besaran', 'Rumus / Satuan', 'Contoh'], rows: [
        ['Kecepatan', 'Jarak ÷ Waktu (km/jam)', '120 km ÷ 2 jam = 60 km/jam'],
        ['Kepadatan Penduduk', 'Jumlah Penduduk ÷ Luas (jiwa/km²)', '5.000 jiwa ÷ 2 km² = 2.500 jiwa/km²'],
        ['Debit Air', 'Volume ÷ Waktu (liter/menit)', '60 L ÷ 5 menit = 12 L/menit'],
      ]},
    ],
    activityTitle: 'Latihan: Rasio Dua Besaran',
    questions: [
      { text: 'Keran mengisi bak mandi 90 liter dalam waktu 6 menit. Debit aliran airnya adalah...', opts: ['12 L/menit', '15 L/menit', '18 L/menit', '540 L/menit'], ans: 1, exp: 'Debit = 90 ÷ 6 = 15 liter/menit.' },
      { text: 'Mobil A menempuh 180 km dalam 3 jam. Mobil B menempuh 260 km dalam 4 jam. Mobil yang melaju lebih cepat adalah...', opts: ['Mobil A (60 km/jam)', 'Mobil B (65 km/jam)', 'Sama cepat', 'Tidak dapat ditentukan'], ans: 1, exp: 'A = 60 km/jam, B = 65 km/jam → Mobil B lebih cepat.' },
      { text: 'Sebuah desa seluas 4 km² dihuni 4.800 jiwa. Kepadatan penduduk desa tersebut adalah...', opts: ['1.200 jiwa/km²', '1.000 jiwa/km²', '1.400 jiwa/km²', '19.200 jiwa/km²'], ans: 0, exp: '4.800 ÷ 4 = 1.200 jiwa/km².' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-03', subSeq: 3,
    objectives: ['Siswa mampu menggunakan rasio satuan untuk membandingkan efisiensi harga (best buy) dan produktivitas.'],
    materialTitle: 'Rasio Satuan (Best Buy & Efisiensi)',
    blocks: [
      { type: 'worked_example', level: 'Cerdas Belanja', question: 'Kemasan A: 250 gram abon seharga Rp20.000. Kemasan B: 400 gram abon merek sama seharga Rp30.000. Mana yang lebih hemat per 100 gram?', steps: ['A: Rp20.000 ÷ 2,5 = Rp8.000 per 100 g.', 'B: Rp30.000 ÷ 4 = Rp7.500 per 100 g.', 'Kemasan B lebih hemat Rp500 per 100 gram!'], answer: 'Kemasan B lebih hemat.' },
    ],
    activityTitle: 'Latihan: Rasio Satuan',
    questions: [
      { text: 'Paket X: 6 buku tulis Rp21.000. Paket Y: 10 buku tulis sama Rp33.000. Paket yang lebih murah per buku adalah...', opts: ['Paket X (Rp3.500/buku)', 'Paket Y (Rp3.300/buku)', 'Sama mahal', 'Paket X Rp3.000/buku'], ans: 1, exp: 'X = 3.500/buku, Y = 3.300/buku → Paket Y lebih hemat.' },
      { text: 'Motor P menempuh 135 km dengan 3 liter bensin. Motor Q menempuh 200 km dengan 4 liter bensin. Motor yang lebih irit adalah...', opts: ['Motor P (45 km/L)', 'Motor Q (50 km/L)', 'Sama irit', 'Motor P (40 km/L)'], ans: 1, exp: 'Q = 50 km/L > P = 45 km/L.' },
      { text: 'Jika 8 pekerja mengepak 240 kotak dalam 1 jam, produktivitas rata-rata per pekerja adalah...', opts: ['25 kotak/jam', '30 kotak/jam', '40 kotak/jam', '32 kotak/jam'], ans: 1, exp: '240 ÷ 8 = 30 kotak/pekerja per jam.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-03', subSeq: 4,
    objectives: ['Siswa mampu membedakan perbandingan senilai (a₁/b₁ = a₂/b₂) dan perbandingan berbalik nilai (a₁×b₁ = a₂×b₂).'],
    materialTitle: 'Perbandingan Senilai dan Pengenalan Berbalik Nilai',
    blocks: [
      { type: 'table', title: 'Perbandingan Senilai vs Berbalik Nilai', headers: ['Jenis', 'Ciri Logika', 'Rumus Cepat'], rows: [
        ['Perbandingan Senilai', 'Besaran 1 NAIK → Besaran 2 ikut NAIK (barang & harga, bensin & jarak)', 'a₁ / b₁ = a₂ / b₂  (kali silang)'],
        ['Berbalik Nilai (Pengayaan)', 'Besaran 1 NAIK → Besaran 2 TURUN (pekerja & waktu, kecepatan & waktu)', 'a₁ × b₁ = a₂ × b₂  (kali lurus)'],
      ]},
      { type: 'worked_example', level: 'Senilai vs Berbalik Nilai', question: '(1) 4 liter bensin menempuh 160 km, berapa km untuk 7 liter? (2) 6 pekerja selesai 10 hari, berapa hari jika 12 pekerja?', steps: ['(1) Senilai: 7/4 × 160 = 280 km.', '(2) Berbalik nilai (makin banyak pekerja makin cepat!): 6 × 10 = 12 × x → x = 60/12 = 5 hari.'], answer: '280 km dan 5 hari.' },
    ],
    activityTitle: 'Latihan: Perbandingan Senilai',
    questions: [
      { text: 'Untuk membuat 8 porsi nasi krawu diperlukan 1,2 kg beras. Beras untuk 20 porsi adalah...', opts: ['2,5 kg', '3 kg', '3,5 kg', '4 kg'], ans: 1, exp: 'Senilai: (20/8) × 1,2 = 2,5 × 1,2 = 3 kg.' },
      { text: 'Sebuah pekerjaan diselesaikan 8 orang dalam 15 hari. Jika dikerjakan 10 orang (kecepatan sama), pekerjaan selesai dalam...', opts: ['12 hari', '18,75 hari', '10 hari', '14 hari'], ans: 0, exp: 'Berbalik nilai: 8 × 15 = 10 × t → t = 120/10 = 12 hari.' },
      { text: 'Hubungan antara jumlah liter bensin yang dipakai dengan jarak tempuh (kecepatan tetap) adalah perbandingan...', opts: ['Senilai', 'Berbalik nilai', 'Acak', 'Tidak berhubungan'], ans: 0, exp: 'Makin banyak bensin, makin jauh jarak tempuh → senilai.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-03', subSeq: 5,
    objectives: ['Siswa mampu menerapkan perbandingan pada peta (skala), termometer, dan pembagian rasio bersusun.'],
    materialTitle: 'Penerapan Perbandingan: Skala & Masalah Nyata',
    blocks: [
      { type: 'formula', name: 'Segitiga Rumus Skala Peta', expression: 'Skala = JP / JS   |   JS = JP ÷ Skala   |   JP = Skala × JS', note: 'JP = Jarak Peta (cm), JS = Jarak Sebenarnya (ubah km → cm dengan × 100.000!).' },
    ],
    activityTitle: 'Latihan: Penerapan Perbandingan',
    questions: [
      { text: 'Jarak dua kota sebenarnya adalah 45 km. Jika skala peta 1 : 500.000, jarak kedua kota pada peta adalah...', opts: ['4,5 cm', '9 cm', '15 cm', '90 cm'], ans: 1, exp: '45 km = 4.500.000 cm; JP = 4.500.000 ÷ 500.000 = 9 cm.' },
      { text: 'Pada denah rumah berskala 1 : 200, sebuah kamar berukuran 3 cm × 2 cm. Luas kamar SEBENARNYA adalah...', opts: ['6 m²', '12 m²', '24 m²', '48 m²'], ans: 2, exp: 'p = 3×200 cm = 6 m, l = 2×200 cm = 4 m → Luas = 6 × 4 = 24 m².' },
      { text: 'Perbandingan uang Alya : Bima = 3 : 5. Jika selisih uang mereka Rp24.000, maka uang Alya adalah...', opts: ['Rp36.000', 'Rp60.000', 'Rp48.000', 'Rp24.000'], ans: 0, exp: 'Selisih rasio 5−3 = 2 bagian = Rp24.000 → 1 bagian = Rp12.000 → Alya 3×12.000 = Rp36.000.' },
    ],
  },

  // BAB 4: BENTUK ALJABAR
  {
    topicCode: 'MAT-SMP7-04', subSeq: 1,
    objectives: ['Siswa mampu mengidentifikasi variabel, koefisien, dan konstanta pada suatu bentuk aljabar.'],
    materialTitle: 'Variabel, Koefisien, dan Konstanta',
    blocks: [
      { type: 'table', title: 'Bedah Unsur Aljabar pada: 5x − 3y + 7', headers: ['Unsur', 'Penjelasan', 'Pada 5x − 3y + 7'], rows: [
        ['Variabel (Peubah)', 'Huruf lambang bilangan yang belum diketahui nilainya', 'x dan y'],
        ['Koefisien', 'Angka pengali di depan variabel (bawa tandanya!)', 'Koefisien x = 5; koefisien y = −3'],
        ['Konstanta', 'Bilangan tetap yang berdiri sendiri TANPA variabel', '+7'],
      ]},
      { type: 'tip', text: 'Ingat! Jika hanya tertulis "x", koefisiennya adalah 1. Jika tertulis "−x", koefisiennya adalah −1!' },
    ],
    activityTitle: 'Latihan: Variabel, Koefisien, Konstanta',
    questions: [
      { text: 'Pada bentuk aljabar 4a − 7b + 9, koefisien dari variabel b adalah...', opts: ['7', '−7', '4', '9'], ans: 1, exp: 'Tanda minus di depan 7 ikut menjadi koefisien: −7.' },
      { text: 'Konstanta pada bentuk aljabar 2x² + 5x − 11 adalah...', opts: ['2', '5', '11', '−11'], ans: 3, exp: 'Bilangan tanpa variabel lengkap dengan tandanya adalah −11.' },
      { text: 'Jika x menyatakan harga 1 kotak pudak, maka "harga 3 kotak pudak ditambah Rp5.000 ongkos kirim" ditulis...', opts: ['3x + 5.000', '5.000x + 3', '3 + x + 5.000', '3x − 5.000'], ans: 0, exp: '3 kali harga pudak + 5.000 = 3x + 5.000.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-04', subSeq: 2,
    objectives: ['Siswa mampu menentukan banyak suku serta mengelompokkan suku-suku sejenis.'],
    materialTitle: 'Suku dan Suku Sejenis',
    blocks: [
      { type: 'text', text: 'Suku adalah bagian bentuk aljabar yang dipisahkan tanda + atau −. Suku SEJENIS adalah suku yang memiliki VARIABEL dan PANGKAT VARIABEL yang SAMA PERSIS!' },
      { type: 'misconception', wrong: 'Mengira 3x dan 5x² adalah suku sejenis karena sama-sama punya huruf x.', right: 'TIDAK sejenis! Pangkatnya beda (x¹ dan x²). Suku sejenis harus sama huruf DAN sama pangkatnya!' },
    ],
    activityTitle: 'Latihan: Suku & Suku Sejenis',
    questions: [
      { text: 'Pasangan suku yang SEJENIS adalah...', opts: ['4x dan 4y', '3a² dan −7a²', '5p dan 5p²', '2xy dan 2x'], ans: 1, exp: '3a² dan −7a² memiliki variabel dan pangkat identik (a²).' },
      { text: 'Banyak suku pada bentuk aljabar 3x² − 2x + 5y − 8 adalah...', opts: ['2', '3', '4', '5'], ans: 2, exp: 'Keempat sukunya: 3x², −2x, 5y, dan −8.' },
      { text: 'Pada 6m + 4n − 2m + 7, pasangan suku yang sejenis adalah...', opts: ['6m dan −2m', '6m dan 4n', '4n dan 7', '−2m dan 7'], ans: 0, exp: 'Keduanya bervariabel m berpangkat 1.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-04', subSeq: 3,
    objectives: ['Siswa mampu melakukan penjumlahan dan pengurangan bentuk aljabar dengan menggabungkan suku sejenis.'],
    materialTitle: 'Penjumlahan dan Pengurangan Bentuk Aljabar',
    blocks: [
      { type: 'worked_example', level: 'Hati-Hati Tanda Kurang!', question: 'Hitung (5x − 3y + 4) − (2x − 7y + 1)!', steps: ['Buka kurung kedua dengan mengalikan minus ke setiap suku di dalamnya: 5x − 3y + 4 − 2x + 7y − 1.', 'Kelompokkan suku sejenis: (5x − 2x) + (−3y + 7y) + (4 − 1).', 'Hasil: 3x + 4y + 3.'], answer: '3x + 4y + 3.' },
    ],
    activityTitle: 'Latihan: Tambah & Kurang Aljabar',
    questions: [
      { text: 'Hasil dari (4x + 5y) + (3x − 2y) adalah...', opts: ['7x + 3y', '7x + 7y', '12x − 10y', 'x + 3y'], ans: 0, exp: '(4+3)x + (5−2)y = 7x + 3y.' },
      { text: 'Hasil dari (6a − 4b) − (2a − 9b) adalah...', opts: ['4a − 13b', '4a + 5b', '8a + 5b', '4a − 5b'], ans: 1, exp: '6a − 2a = 4a; −4b − (−9b) = −4b + 9b = +5b → 4a + 5b.' },
      { text: 'Kurangkan (2p − 3) DARI (7p + 5)! Artinya (7p + 5) − (2p − 3) = ...', opts: ['5p + 2', '5p + 8', '9p + 2', '−5p − 8'], ans: 1, exp: 'Kata "DARI" meletakkan (7p+5) di depan: 7p−2p + 5−(−3) = 5p + 8.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-04', subSeq: 4,
    objectives: ['Siswa mampu melakukan perkalian konstanta dengan bentuk aljabar serta perkalian suku satu dan suku dua (distributif).'],
    materialTitle: 'Perkalian Sederhana Bentuk Aljabar',
    blocks: [
      { type: 'formula', name: 'Sifat Distributif Aljabar', expression: 'a(b + c) = ab + ac   |   (x + a)(x + b) = x² + (a+b)x + ab', note: 'Ingat: x × x = x² (bukan 2x!). Sedangkan x + x = 2x!' },
      { type: 'worked_example', level: 'Distributif', question: 'Jabarkan 3(2x − 5) dan (x + 2)(x + 4)!', steps: ['3(2x − 5) = 6x − 15.', '(x + 2)(x + 4) = x² + 4x + 2x + 8 = x² + 6x + 8.'], answer: '6x − 15 dan x² + 6x + 8.' },
    ],
    activityTitle: 'Latihan: Perkalian Aljabar',
    questions: [
      { text: 'Hasil dari 4(3x − 2y) adalah...', opts: ['12x − 2y', '12x − 8y', '7x − 6y', '12x + 8y'], ans: 1, exp: '4×3x = 12x dan 4×(−2y) = −8y.' },
      { text: 'Hasil dari −2x(x − 5) adalah...', opts: ['−2x² − 10x', '−2x² + 10x', '2x² + 10x', '−2x + 10'], ans: 1, exp: '−2x·x = −2x² dan (−2x)·(−5) = +10x.' },
      { text: 'Hasil penjabaran (x + 3)(x − 2) adalah...', opts: ['x² + x − 6', 'x² − x − 6', 'x² + 5x − 6', 'x² − 6'], ans: 0, exp: 'x² − 2x + 3x − 6 = x² + x − 6.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-04', subSeq: 5,
    objectives: ['Siswa mampu mensubstitusikan (mengganti) nilai bilangan ke dalam variabel bentuk aljabar dengan akurat.'],
    materialTitle: 'Substitusi Nilai Variabel',
    blocks: [
      { type: 'worked_example', level: 'Substitusi Bilangan Negatif', question: 'Jika x = 3 dan y = −2, tentukan nilai dari 4x − 5y + 1!', steps: ['Ganti huruf pakai tanda kurung agar aman dari salah tanda:', '4(3) − 5(−2) + 1 = 12 − (−10) + 1 = 12 + 10 + 1 = 23.'], answer: '23.' },
    ],
    activityTitle: 'Latihan: Substitusi Aljabar',
    questions: [
      { text: 'Jika a = 4 dan b = −3, maka nilai dari 2a + 3b adalah...', opts: ['17', '−1', '1', '−17'], ans: 1, exp: '2(4) + 3(−3) = 8 − 9 = −1.' },
      { text: 'Jika x = −2, maka nilai dari x² − 3x + 4 adalah...', opts: ['2', '14', '6', '−6'], ans: 1, exp: '(−2)² − 3(−2) + 4 = 4 + 6 + 4 = 14.' },
      { text: 'Rumus keliling persegi panjang adalah K = 2(p + l). Jika p = 15 dan l = 9, nilai K adalah...', opts: ['24', '48', '135', '39'], ans: 1, exp: '2(15 + 9) = 2(24) = 48.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-04', subSeq: 6,
    objectives: ['Siswa mampu menyederhanakan bentuk aljabar kompleks (buka kurung, gabungkan suku sejenis, dan pecahan aljabar sederhana).'],
    materialTitle: 'Penyederhanaan Bentuk Aljabar',
    blocks: [
      { type: 'worked_example', level: 'Buka Kurung & Gabung', question: 'Sederhanakan 3(2x + 1) − 2(x − 4)!', steps: ['Buka kedua kurung: 6x + 3 − 2x + 8.', 'Gabungkan sejenis: (6x − 2x) + (3 + 8) = 4x + 11.'], answer: '4x + 11.' },
    ],
    activityTitle: 'Latihan: Penyederhanaan Aljabar',
    questions: [
      { text: 'Bentuk paling sederhana dari 2(3x + 4) + 3(x − 2) adalah...', opts: ['9x + 2', '9x + 14', '6x + 2', '9x − 2'], ans: 0, exp: '6x + 8 + 3x − 6 = 9x + 2.' },
      { text: 'Bentuk sederhana dari 5(a − 2) − 3(a − 4) adalah...', opts: ['2a − 22', '2a + 2', '2a − 2', '8a + 2'], ans: 1, exp: '5a − 10 − 3a + 12 = 2a + 2.' },
      { text: 'Bentuk sederhana dari (12x²y) ÷ (4xy) adalah...', opts: ['3x', '3xy', '8x', '3y'], ans: 0, exp: '12÷4 = 3, x²÷x = x, y÷y = 1 → 3x.' },
    ],
  },

  // BAB 5: PERSAMAAN & PERTIDAKSAMAAN LINEAR SATU VARIABEL (PLSV & PtLSV)
  {
    topicCode: 'MAT-SMP7-05', subSeq: 1,
    objectives: ['Siswa mampu membedakan kalimat tertutup (pernyataan benar/salah) dan kalimat terbuka (memuat variabel).'],
    materialTitle: 'Kalimat Terbuka dan Kalimat Tertutup',
    blocks: [
      { type: 'table', title: 'Beda Kalimat Tertutup vs Terbuka', headers: ['Jenis', 'Ciri', 'Contoh'], rows: [
        ['Kalimat Tertutup (Pernyataan)', 'Sudah PASTI bernilai Benar atau Salah', '"7 + 5 = 12" (Benar); "Surabaya di Jawa Barat" (Salah)'],
        ['Kalimat Terbuka', 'Memuat VARIABEL sehingga belum tahu benar/salahnya', '"x + 5 = 12" (benar hanya jika x = 7!)'],
      ]},
    ],
    activityTitle: 'Latihan: Kalimat Matematika',
    questions: [
      { text: 'Manakah yang merupakan KALIMAT TERBUKA?', opts: ['3 × 4 = 12', '2x − 5 = 9', 'Ibu kota Jawa Timur adalah Surabaya.', '10 lebih kecil dari 5.'], ans: 1, exp: '2x − 5 = 9 memuat variabel x yang belum diketahui nilainya.' },
      { text: 'Agar kalimat terbuka "3y + 2 = 17" bernilai BENAR, nilai y haruslah...', opts: ['3', '5', '6', '15'], ans: 1, exp: '3(5) + 2 = 17.' },
      { text: 'Kalimat "Bilangan genap yang merupakan bilangan prima adalah 2" termasuk...', opts: ['Kalimat tertutup bernilai benar', 'Kalimat tertutup bernilai salah', 'Kalimat terbuka', 'Pertidaksamaan'], ans: 0, exp: '2 memang satu-satunya bilangan prima genap (pernyataan benar).' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-05', subSeq: 2,
    objectives: ['Siswa mampu mengenali ciri Persamaan Linear Satu Variabel (PLSV): tanda =, tepat 1 variabel, pangkat tertinggi 1.'],
    materialTitle: 'Konsep Persamaan Linear Satu Variabel (PLSV)',
    blocks: [
      { type: 'formula', name: 'Bentuk Umum PLSV', expression: 'ax + b = c   (dengan a ≠ 0, tepat 1 variabel berpangkat 1!)', note: 'Analogi: PLSV seperti TIMBANGAN SEIMBANG — apa yang ditambah/dikurang/dikali/dibagi di ruas kiri, HARUS dilakukan SAMA di ruas kanan!' },
    ],
    activityTitle: 'Latihan: Konsep PLSV',
    questions: [
      { text: 'Manakah yang merupakan Persamaan Linear Satu Variabel (PLSV)?', opts: ['2x + 3y = 10', 'x² − 4 = 0', '4x − 7 = 13', '3x + 1 > 7'], ans: 2, exp: '4x − 7 = 13 punya tanda =, tepat 1 variabel (x), dan pangkat 1.' },
      { text: 'Mengapa 2x + y = 8 BUKAN PLSV?', opts: ['Karena memiliki DUA variabel (x dan y)', 'Karena ada tanda =', 'Karena ada angka 8', 'Karena pangkatnya 1'], ans: 0, exp: 'PLSV hanya memiliki tepat satu jenis variabel.' },
      { text: 'Persamaan yang ekuivalen (memiliki penyelesaian sama) dengan x + 5 = 12 adalah...', opts: ['2x + 10 = 24', 'x + 5 = 10', 'x − 5 = 12', 'x = 17'], ans: 0, exp: 'Kedua ruas dikalikan 2 menghasilkan persamaan ekuivalen (sama-sama x = 7).' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-05', subSeq: 3,
    objectives: ['Siswa mampu menyelesaikan berbagai bentuk PLSV termasuk yang memuat tanda kurung dan pecahan sederhana.'],
    materialTitle: 'Penyelesaian PLSV',
    blocks: [
      { type: 'worked_example', level: 'PLSV Dua Ruas', question: 'Tentukan nilai x dari 5x − 7 = 2x + 11!', steps: ['Kumpulkan suku bervariabel ke kiri (kurangi 2x kedua ruas): 5x − 2x − 7 = 11 → 3x − 7 = 11.', 'Pindahkan konstanta ke kanan (tambah 7 kedua ruas): 3x = 11 + 7 = 18.', 'Bagi kedua ruas dengan 3: x = 18 ÷ 3 = 6.', 'Cek: 5(6)−7 = 23 dan 2(6)+11 = 23 (COCOK!).'], answer: 'x = 6.' },
    ],
    activityTitle: 'Latihan: Penyelesaian PLSV',
    questions: [
      { text: 'Penyelesaian dari 3x + 8 = 23 adalah...', opts: ['x = 3', 'x = 5', 'x = 7', 'x = 15'], ans: 1, exp: '3x = 23 − 8 = 15 → x = 5.' },
      { text: 'Penyelesaian dari 4x − 5 = 2x + 9 adalah...', opts: ['x = 2', 'x = 7', 'x = −7', 'x = 14'], ans: 1, exp: '4x − 2x = 9 + 5 → 2x = 14 → x = 7.' },
      { text: 'Penyelesaian dari 2(x − 3) = 10 adalah...', opts: ['x = 5', 'x = 8', 'x = 2', 'x = 6'], ans: 1, exp: '2x − 6 = 10 → 2x = 16 → x = 8.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-05', subSeq: 4,
    objectives: ['Siswa memahami tanda pertidaksamaan (<, >, ≤, ≥) dan mampu menerjemahkan kalimat batas ke PtLSV.'],
    materialTitle: 'Konsep Pertidaksamaan Linear Satu Variabel (PtLSV)',
    blocks: [
      { type: 'table', title: '4 Tanda Pertidaksamaan & Kata Kuncinya', headers: ['Tanda', 'Dibaca', 'Kata Kunci di Soal Cerita'], rows: [
        ['<', 'Kurang dari', 'Lebih kecil dari, di bawah'],
        ['>', 'Lebih dari', 'Lebih besar dari, di atas, melebihi'],
        ['≤', 'Kurang dari atau sama dengan', 'Maksimal, paling banyak, tidak lebih dari'],
        ['≥', 'Lebih dari atau sama dengan', 'Minimal, paling sedikit, sekurang-kurangnya'],
      ]},
    ],
    activityTitle: 'Latihan: Konsep PtLSV',
    questions: [
      { text: '"Berat muatan lift (w) tidak boleh lebih dari 600 kg." Model pertidaksamaannya adalah...', opts: ['w > 600', 'w ≥ 600', 'w ≤ 600', 'w < 600'], ans: 2, exp: '"Tidak lebih dari" artinya maksimal (boleh pas 600) → w ≤ 600.' },
      { text: '"Nilai minimal tuntas ujian (n) adalah 75." Penulisan matematisnya adalah...', opts: ['n ≥ 75', 'n > 75', 'n ≤ 75', 'n < 75'], ans: 0, exp: '"Minimal 75" berarti 75 atau lebih → n ≥ 75.' },
      { text: 'Manakah bilangan bulat yang memenuhi pertidaksamaan x < −2?', opts: ['−3 dan −4', '−2 dan −1', '0 dan 1', '−1 dan 2'], ans: 0, exp: 'Lebih kecil dari −2 berarti di sebelah kiri −2: −3, −4, −5, ...' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-05', subSeq: 5,
    objectives: ['Siswa mampu menyelesaikan PtLSV termasuk aturan kritis membalik tanda saat dikali/dibagi bilangan negatif!'],
    materialTitle: 'Penyelesaian PtLSV (Awas Tanda Negatif!)',
    blocks: [
      { type: 'misconception', wrong: 'Dari −2x < 10 langsung membagi −2 tanpa membalik tanda sehingga salah mendapat x < −5.', right: 'ATURAN WAJIB PtLSV: jika kedua ruas DIKALI atau DIBAGI BILANGAN NEGATIF, tanda pertidaksamaan WAJIB DIBALIK! Dari −2x < 10 bagi (−2) → x > −5!' },
      { type: 'worked_example', level: 'PtLSV', question: 'Selesaikan 3x − 4 ≤ 11 untuk x bilangan asli!', steps: ['Tambah 4 kedua ruas: 3x ≤ 15.', 'Bagi 3 (positif, tanda tetap): x ≤ 5.', 'Bilangan asli ≤ 5 adalah {1, 2, 3, 4, 5}.'], answer: 'x ≤ 5 → {1, 2, 3, 4, 5}.' },
    ],
    activityTitle: 'Latihan: Penyelesaian PtLSV',
    questions: [
      { text: 'Penyelesaian dari 2x + 5 > 13 adalah...', opts: ['x > 4', 'x < 4', 'x > 9', 'x ≥ 4'], ans: 0, exp: '2x > 8 → x > 4.' },
      { text: 'Penyelesaian dari −3x ≤ 12 adalah...', opts: ['x ≤ −4', 'x ≥ −4', 'x ≤ 4', 'x ≥ 4'], ans: 1, exp: 'Dibagi bilangan negatif (−3), tanda ≤ DIBALIK menjadi ≥ → x ≥ −4.' },
      { text: 'Himpunan penyelesaian dari 4x − 1 < 11 untuk x bilangan cacah adalah...', opts: ['{0, 1, 2}', '{1, 2, 3}', '{0, 1, 2, 3}', '{3, 4, 5}'], ans: 0, exp: '4x < 12 → x < 3; bilangan cacah < 3 adalah 0, 1, 2.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-05', subSeq: 6,
    objectives: ['Siswa mampu memodelkan dan memecahkan soal cerita umur, keliling bangun, dan batas anggaran dengan PLSV/PtLSV.'],
    materialTitle: 'Soal Cerita PLSV dan PtLSV',
    blocks: [
      { type: 'worked_example', level: 'Soal Keliling Aljabar', question: 'Panjang persegi panjang adalah (2x + 3) cm dan lebarnya (x − 1) cm. Jika kelilingnya 34 cm, tentukan nilai x dan panjangnya!', steps: ['K = 2(p + l) = 34 → p + l = 17.', '(2x + 3) + (x − 1) = 17 → 3x + 2 = 17.', '3x = 15 → x = 5.', 'Panjang = 2(5) + 3 = 13 cm.'], answer: 'x = 5; panjang = 13 cm (lebar = 4 cm).' },
    ],
    activityTitle: 'Latihan: Soal Cerita PLSV & PtLSV',
    questions: [
      { text: 'Jumlah tiga bilangan bulat berurutan adalah 48. Jika bilangan terkecil adalah n (maka ketiganya n, n+1, n+2), bilangan terkecil tersebut adalah...', opts: ['14', '15', '16', '17'], ans: 1, exp: '3n + 3 = 48 → 3n = 45 → n = 15 (bilangannya 15, 16, 17).' },
      { text: 'Umur kakak 4 tahun lebih tua dari adik. Jika jumlah umur mereka 28 tahun, umur adik adalah...', opts: ['10 tahun', '12 tahun', '14 tahun', '16 tahun'], ans: 1, exp: 'x + (x + 4) = 28 → 2x = 24 → x = 12 tahun.' },
      { text: 'Bima membawa Rp50.000 untuk membeli 1 buku Rp14.000 dan x pulpen @Rp6.000. Paling banyak berapa pulpen yang bisa dibeli Bima?', opts: ['5 pulpen', '6 pulpen', '7 pulpen', '8 pulpen'], ans: 1, exp: '14.000 + 6.000x ≤ 50.000 → 6.000x ≤ 36.000 → x ≤ 6.' },
    ],
  },

  // BAB 6: HIMPUNAN DAN RELASI DASAR
  {
    topicCode: 'MAT-SMP7-06', subSeq: 1,
    objectives: ['Siswa mampu membedakan kumpulan yang merupakan himpunan (terdefinisi jelas) dan bukan himpunan (relatif/subjektif).'],
    materialTitle: 'Pengertian Himpunan',
    blocks: [
      { type: 'text', text: 'Himpunan adalah kumpulan benda atau objek yang dapat DIDEFINISIKAN DENGAN JELAS (objektif, semua orang sepakat mana anggotanya). Kumpulan berdasarkan kata sifat relatif ("cantik", "pintar", "mahal", "enak") BUKAN himpunan!' },
    ],
    activityTitle: 'Latihan: Pengertian Himpunan',
    questions: [
      { text: 'Manakah kumpulan berikut yang merupakan HIMPUNAN?', opts: ['Kumpulan makanan lezat di Gresik', 'Kumpulan siswa tinggi di kelas 7', 'Kumpulan bilangan prima kurang dari 15', 'Kumpulan lukisan indah'], ans: 2, exp: 'Bilangan prima < 15 terdefinisi pasti: {2, 3, 5, 7, 11, 13}.' },
      { text: 'Mengapa "kumpulan siswa pintar di sekolah" BUKAN himpunan?', opts: ['Karena ukuran "pintar" bersifat subjektif/tidak jelas batasnya', 'Karena siswanya terlalu banyak', 'Karena tidak ada sekolah', 'Karena siswa adalah manusia'], ans: 0, exp: 'Tanpa batasan angka jelas (mis. nilai > 85), kata "pintar" relatif.' },
      { text: 'Himpunan yang tidak memiliki satu pun anggota (seperti himpunan bilangan prima genap lebih dari 2) disebut...', opts: ['Himpunan semesta', 'Himpunan kosong (∅ atau { })', 'Himpunan bagian', 'Irisan'], ans: 1, exp: 'Himpunan kosong dilambangkan ∅ atau { }.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-06', subSeq: 2,
    objectives: ['Siswa mampu menggunakan notasi anggota (∈), bukan anggota (∉), dan menentukan kardinalitas himpunan n(A).'],
    materialTitle: 'Anggota (∈), Bukan Anggota (∉), & Kardinalitas',
    blocks: [
      { type: 'formula', name: 'Notasi Keanggotaan & Kardinalitas', expression: '∈ (anggota)  |  ∉ (bukan anggota)  |  n(A) = banyak anggota himpunan A', note: 'Contoh: A = {2, 3, 5, 7} → 5 ∈ A, 4 ∉ A, dan n(A) = 4.' },
    ],
    activityTitle: 'Latihan: Anggota & Kardinalitas',
    questions: [
      { text: 'Diketahui P = {huruf vokal dalam abjad}. Pernyataan yang BENAR adalah...', opts: ['b ∈ P', 'e ∈ P dan n(P) = 5', 'u ∉ P', 'n(P) = 6'], ans: 1, exp: 'P = {a, i, u, e, o}, jadi e ∈ P dan n(P) = 5.' },
      { text: 'Banyak anggota (kardinalitas) himpunan huruf pembentuk kata "MATEMATIKA" (huruf sama ditulis sekali!) adalah...', opts: ['10', '6', '7', '8'], ans: 1, exp: 'Huruf unik: {M, A, T, E, I, K} → n = 6.' },
      { text: 'Jika B = {bilangan genap antara 1 dan 10}, maka pernyataan yang SALAH adalah...', opts: ['2 ∈ B', '8 ∈ B', '10 ∈ B', '5 ∉ B'], ans: 2, exp: '"Antara 1 dan 10" tidak menyertakan 10: B = {2, 4, 6, 8}.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-06', subSeq: 3,
    objectives: ['Siswa mampu menyajikan himpunan dengan 3 cara: kata-kata, mendaftar anggota (enumerasi), dan notasi pembentuk himpunan.'],
    materialTitle: '3 Cara Penyajian Himpunan',
    blocks: [
      { type: 'table', title: '3 Cara Menyajikan Himpunan yang Sama', headers: ['Cara Penyajian', 'Contoh'], rows: [
        ['1. Deskripsi (Kata-kata)', 'A = {bilangan asli kurang dari 6}'],
        ['2. Enumerasi (Mendaftar Anggota)', 'A = {1, 2, 3, 4, 5}'],
        ['3. Notasi Pembentuk Himpunan', 'A = {x | x < 6, x ∈ bilangan asli}'],
      ]},
    ],
    activityTitle: 'Latihan: Penyajian Himpunan',
    questions: [
      { text: 'Jika K = {x | 2 ≤ x < 8, x ∈ bilangan bulat}, maka daftar anggota K adalah...', opts: ['{2, 3, 4, 5, 6, 7}', '{3, 4, 5, 6, 7}', '{2, 3, 4, 5, 6, 7, 8}', '{3, 4, 5, 6, 7, 8}'], ans: 0, exp: '2 ikut (≤), 8 tidak ikut (<) → {2, 3, 4, 5, 6, 7}.' },
      { text: 'Notasi pembentuk himpunan untuk M = {2, 3, 5, 7, 11} adalah...', opts: ['{x | x < 12, x ∈ bilangan prima}', '{x | x < 12, x ∈ bilangan ganjil}', '{x | x ≤ 11, x ∈ bilangan asli}', '{x | 1 < x < 11, x ∈ genap}'], ans: 0, exp: 'Kelima bilangan tersebut adalah seluruh bilangan prima kurang dari 12.' },
      { text: 'Nama himpunan selalu ditulis dengan huruf...', opts: ['Kapital (A, B, P, S)', 'Kecil semua', 'Angka', 'Simbol persen'], ans: 0, exp: 'Nama himpunan memakai huruf kapital, anggotanya di dalam kurung kurawal { }.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-06', subSeq: 4,
    objectives: ['Siswa mampu memahami Diagram Venn, irisan (A ∩ B), dan gabungan (A ∪ B) dua himpunan sederhana.'],
    materialTitle: 'Diagram Venn, Irisan, dan Gabungan',
    blocks: [
      { type: 'formula', name: 'Irisan (∩) dan Gabungan (∪)', expression: 'A ∩ B = anggota yang ada di A DAN di B (tengah Venn)  |  A ∪ B = semua anggota A digabung B', note: 'Kotak luar Diagram Venn melambangkan Himpunan Semesta (S).' },
      { type: 'worked_example', level: 'Soal Diagram Venn', question: 'Dari 30 siswa: 18 suka Matematika, 15 suka IPA, dan 5 suka keduanya. Berapa siswa yang tidak suka keduanya?', steps: ['Hanya Mat = 18 − 5 = 13. Hanya IPA = 15 − 5 = 10.', 'Total yang suka minimal satu = 13 + 5 + 10 = 28 siswa.', 'Tidak suka keduanya = 30 − 28 = 2 siswa!'], answer: '2 siswa.' },
    ],
    activityTitle: 'Latihan: Diagram Venn',
    questions: [
      { text: 'Diketahui A = {1, 2, 3, 4, 5} dan B = {4, 5, 6, 7}. Maka irisan A ∩ B adalah...', opts: ['{4, 5}', '{1, 2, 3, 4, 5, 6, 7}', '{1, 2, 3}', '{6, 7}'], ans: 0, exp: 'Irisan memuat anggota yang sama di A dan B: {4, 5}.' },
      { text: 'Dari A dan B di atas, gabungan A ∪ B adalah...', opts: ['{4, 5}', '{1, 2, 3, 4, 5, 6, 7}', '{1, 2, 3, 6, 7}', '∅'], ans: 1, exp: 'Gabungan memuat semua anggota A dan B (yang sama ditulis sekali).' },
      { text: 'Dari 25 siswa: 14 ikut Pramuka, 12 ikut Futsal, 4 ikut keduanya. Banyak siswa yang HANYA ikut Pramuka adalah...', opts: ['14', '10', '8', '3'], ans: 1, exp: 'Hanya Pramuka = 14 − 4 = 10 siswa.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-06', subSeq: 5,
    objectives: ['Siswa mengenal pengertian relasi antar dua himpunan dan cara menyajikannya (diagram panah, pasangan berurutan).'],
    materialTitle: 'Pengenalan Relasi Antarhimpunan',
    blocks: [
      { type: 'text', text: 'Relasi dari himpunan A ke himpunan B adalah ATURAN yang memasangkan anggota himpunan A dengan anggota himpunan B (misalnya "hobi dari", "lebih besar dari", atau "setengah dari").' },
      { type: 'tip', text: 'Contoh pasangan berurutan relasi "setengah dari" dari A={1,2,3} ke B={2,4,6}: {(1, 2), (2, 4), (3, 6)}!' },
    ],
    activityTitle: 'Latihan: Pengenalan Relasi',
    questions: [
      { text: 'Himpunan pasangan berurutan {(2, 4), (3, 6), (4, 8)} menunjukkan relasi dari himpunan pertama ke kedua yaitu...', opts: ['"Dua kali dari"', '"Setengah dari"', '"Kurang dari satu"', '"Sama dengan"'], ans: 1, exp: '2 adalah setengah dari 4; 3 setengah dari 6; 4 setengah dari 8.' },
      { text: 'Tiga cara umum menyajikan relasi dua himpunan adalah diagram panah, himpunan pasangan berurutan, dan...', opts: ['Diagram Kartesius', 'Diagram lingkaran', 'Pantun', 'Garis singgung'], ans: 0, exp: 'Relasi disajikan via diagram panah, pasangan berurutan, dan koordinat Kartesius.' },
      { text: 'Jika A = {Surabaya, Bandung, Semarang} dan B = {Jawa Barat, Jawa Tengah, Jawa Timur}, relasi yang tepat menghubungkan A ke B adalah...', opts: ['"Ibu kota dari"', '"Lebih luas dari"', '"Bukan bagian dari"', '"Setengah dari"'], ans: 0, exp: 'Surabaya ibu kota Jawa Timur, Bandung Jawa Barat, Semarang Jawa Tengah.' },
    ],
  },

  // BAB 7: GARIS DAN SUDUT
  {
    topicCode: 'MAT-SMP7-07', subSeq: 1,
    objectives: ['Siswa mampu membedakan titik, garis (tak terbatas dua arah), sinar garis (1 ujung), dan ruas garis (2 ujung).'],
    materialTitle: 'Titik, Garis, Sinar Garis, dan Ruas Garis',
    blocks: [
      { type: 'table', title: 'Perbedaan Unsur Geometri Dasar', headers: ['Istilah', 'Ciri Ujungnya', 'Panjangnya'], rows: [
        ['Titik', 'Tidak berdimensi (ditandai huruf kapital A, B)', '0 (hanya penunjuk lokasi)'],
        ['Garis (↔)', 'Memanjang tak terbatas ke DUA arah', 'Tak terhingga'],
        ['Sinar Garis (→)', 'Punya 1 titik pangkal, memanjang ke 1 arah', 'Tak terhingga ke 1 arah'],
        ['Ruas Garis (—)', 'Dibatasi 2 titik ujung (A dan B)', 'TERUKUR (mis. 8 cm)'],
      ]},
    ],
    activityTitle: 'Latihan: Titik, Garis, Ruas Garis',
    questions: [
      { text: 'Bagian garis yang dibatasi oleh dua titik ujung sehingga panjangnya dapat diukur dengan penggaris disebut...', opts: ['Sinar garis', 'Ruas garis (segmen)', 'Garis lurus tak hingga', 'Bidang'], ans: 1, exp: 'Ruas garis memiliki dua ujung tetap dan panjang terukur.' },
      { text: 'Berkas sorot cahaya lampu senter yang bermula dari bohlam lalu melurus jauh ke satu arah memodelkan...', opts: ['Sinar garis', 'Ruas garis', 'Titik', 'Lingkaran'], ans: 0, exp: 'Sinar garis punya 1 titik pangkal dan memanjang ke satu arah.' },
      { text: 'Melalui DUA titik berbeda A dan B, paling banyak dapat dibuat ... garis lurus.', opts: ['0', '1', '2', 'Tak terhingga'], ans: 1, exp: 'Aksioma geometri: melalui 2 titik berbeda tepat dibuat 1 garis lurus.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-07', subSeq: 2,
    objectives: ['Siswa mampu membedakan kedudukan dua garis: sejajar, berpotongan, berimpit, dan bersilangan.'],
    materialTitle: 'Hubungan Antargaris',
    blocks: [
      { type: 'visual_cards', title: '4 Kedudukan Dua Garis', cards: [
        { emoji: '🟰', label: 'Sejajar ( // )', sub: 'Sebidang, jarak selalu sama, tak pernah bertemu (rel kereta api)' },
        { emoji: '✖️', label: 'Berpotongan', sub: 'Bertemu di tepat 1 titik potong (bisa tegak lurus 90°)' },
        { emoji: '➖', label: 'Berimpit', sub: 'Menempel tepat di jalur yang sama (pukul 12.00)' },
        { emoji: '🌉', label: 'Bersilangan', sub: 'TIDAK sebidang dan tidak pernah berpotongan (jalan layang & jalan bawah!)' },
      ]},
    ],
    activityTitle: 'Latihan: Hubungan Antargaris',
    questions: [
      { text: 'Dua garis pada satu bidang datar yang tidak akan pernah berpotongan walaupun diperpanjang terus disebut garis...', opts: ['Sejajar', 'Berpotongan', 'Bersilangan', 'Tegak lurus'], ans: 0, exp: 'Garis sejajar (//) selalu berjarak sama dan tak pernah bertemu.' },
      { text: 'Contoh nyata dua garis BERSILANGAN dalam kehidupan sehari-hari adalah...', opts: ['Jembatan jalan layang (flyover) dengan jalan raya di bawahnya', 'Dua rel kereta lurus', 'Perempatan lampu merah', 'Jarum jam pukul 12.00'], ans: 0, exp: 'Garis bersilangan berada di bidang berbeda dan tidak berpotongan.' },
      { text: 'Dua garis berpotongan yang membentuk sudut 90° disebut saling...', opts: ['Sejajar', 'Tegak lurus (⊥)', 'Berimpit', 'Bersilangan'], ans: 1, exp: 'Tegak lurus membentuk sudut siku-siku 90°.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-07', subSeq: 3,
    objectives: ['Siswa mampu mengelompokkan jenis sudut (lancip, siku-siku, tumpul, lurus, refleks) dan mengonversi derajat–menit.'],
    materialTitle: 'Sudut dan Jenis-Jenisnya',
    blocks: [
      { type: 'table', title: 'Klasifikasi Sudut Lengkap SMP', headers: ['Jenis Sudut', 'Rentang Besar Sudut'], rows: [
        ['Lancip', '0° < x < 90°'],
        ['Siku-Siku', 'x = 90°'],
        ['Tumpul', '90° < x < 180°'],
        ['Lurus', 'x = 180°'],
        ['Refleks', '180° < x < 360°'],
      ]},
    ],
    activityTitle: 'Latihan: Sudut & Jenisnya',
    questions: [
      { text: 'Sudut yang besarnya 215° termasuk jenis sudut...', opts: ['Lancip', 'Tumpul', 'Lurus', 'Refleks'], ans: 3, exp: '180° < 215° < 360° → sudut refleks.' },
      { text: 'Besar sudut 2/3 dari sudut lurus adalah...', opts: ['60°', '90°', '120°', '150°'], ans: 2, exp: '2/3 × 180° = 120° (sudut tumpul).' },
      { text: 'Jika 1° = 60 menit (60\'), maka 2,5° sama dengan...', opts: ['2° 5\'', '2° 30\'', '2° 50\'', '150°'], ans: 1, exp: '0,5° × 60\' = 30\' → 2° 30\'.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-07', subSeq: 4,
    objectives: ['Siswa mampu menghitung sudut saling berpenyiku (komplemen = 90°) dan saling berpelurus (suplemen = 180°) termasuk memakai aljabar.'],
    materialTitle: 'Sudut Berpenyiku dan Berpelurus',
    blocks: [
      { type: 'formula', name: 'Komplemen (90°) vs Suplemen (180°)', expression: 'Berpenyiku: ∠A + ∠B = 90°   |   Berpelurus: ∠A + ∠B = 180°', note: 'Ingat: Siku = 90°, Lurus = 180°!' },
      { type: 'worked_example', level: 'Aljabar Sudut', question: 'Dua sudut saling berpelurus memiliki besar (3x + 15)° dan (2x + 15)°. Tentukan nilai x!', steps: ['Jumlah sudut berpelurus = 180°.', '(3x + 15) + (2x + 15) = 180 → 5x + 30 = 180.', '5x = 150 → x = 30°.'], answer: 'x = 30°.' },
    ],
    activityTitle: 'Latihan: Berpelurus & Berpenyiku',
    questions: [
      { text: 'Penyiku (komplemen) dari sudut 38° adalah...', opts: ['52°', '62°', '142°', '42°'], ans: 0, exp: '90° − 38° = 52°.' },
      { text: 'Pelurus (suplemen) dari sudut 115° adalah...', opts: ['55°', '65°', '75°', '25°'], ans: 1, exp: '180° − 115° = 65°.' },
      { text: 'Dua sudut berpenyiku besarnya 2x° dan 3x°. Nilai x adalah...', opts: ['15°', '18°', '36°', '45°'], ans: 1, exp: '2x + 3x = 90 → 5x = 90 → x = 18°.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-07', subSeq: 5,
    objectives: ['Siswa mampu menentukan besar sudut bertolak belakang serta sudut pada dua garis sejajar dipotong garis transversal (sehadap, berseberangan, sepihak).'],
    materialTitle: 'Hubungan Sudut pada Garis Berpotongan & Sejajar',
    blocks: [
      { type: 'table', title: 'Sifat Sudut pada Garis Berpotongan & Sejajar', headers: ['Pasangan Sudut', 'Hubungan Besarnya'], rows: [
        ['Bertolak Belakang', 'SAMA BESAR'],
        ['Sehadap (garis // dipotong transversal)', 'SAMA BESAR'],
        ['Dalam/Luar Berseberangan', 'SAMA BESAR'],
        ['Dalam/Luar Sepihak', 'BERJUMLAH 180° (berpelurus!)'],
      ]},
    ],
    activityTitle: 'Latihan: Sudut Garis Berpotongan',
    questions: [
      { text: 'Dua garis berpotongan membentuk 4 sudut. Jika salah satu sudutnya 65°, maka sudut yang BERTOLAK BELAKANG dengannya besarnya...', opts: ['25°', '65°', '115°', '130°'], ans: 1, exp: 'Sudut bertolak belakang selalu sama besar (65°).' },
      { text: 'Pada dua garis sejajar dipotong garis ketiga, pasangan sudut DALAM SEPIHAK memiliki jumlah...', opts: ['90°', '180°', '360°', 'Sama besar selalu'], ans: 1, exp: 'Sudut dalam/luar sepihak berjumlah 180°.' },
      { text: 'Jika ∠A = 110° dan ∠B adalah sudut SEHADAP terhadap ∠A pada dua garis sejajar, maka ∠B = ...', opts: ['70°', '110°', '90°', '20°'], ans: 1, exp: 'Sudut sehadap pada garis sejajar selalu sama besar: 110°.' },
    ],
  },

  // BAB 8: DATA DAN PENYAJIANNYA
  {
    topicCode: 'MAT-SMP7-08', subSeq: 1,
    objectives: ['Siswa mampu membedakan data numerik vs kategorik serta populasi vs sampel dalam pengumpulan data.'],
    materialTitle: 'Pengumpulan Data: Populasi, Sampel, & Jenis Data',
    blocks: [
      { type: 'table', title: 'Konsep Dasar Statistika SMP', headers: ['Istilah', 'Pengertian', 'Contoh'], rows: [
        ['Data Numerik (Kuantitatif)', 'Berupa angka hasil ukur/hitung', 'Tinggi badan (cm), nilai ujian, suhu'],
        ['Data Kategorik (Kualitatif)', 'Berupa sifat/kategori/label', 'Hobi, warna kesukaan, golongan darah'],
        ['Populasi vs Sampel', 'Populasi = seluruh objek; Sampel = sebagian yang mewakili', 'Populasi: semua siswa SMP; Sampel: 50 siswa dipilih acak'],
      ]},
    ],
    activityTitle: 'Latihan: Pengumpulan Data',
    questions: [
      { text: 'Manakah yang merupakan contoh data KATEGORIK (kualitatif)?', opts: ['Berat badan siswa dalam kg', 'Jenis ekstrakurikuler favorit siswa', 'Jumlah buku di tas', 'Tinggi tanaman dalam cm'], ans: 1, exp: 'Jenis ekskul berupa kategori nama, bukan bilangan hasil ukur.' },
      { text: 'Sebagian kecil objek yang diambil secara adil untuk mewakili seluruh populasi dalam survei disebut...', opts: ['Sampel', 'Modus', 'Diagram', 'Skala'], ans: 0, exp: 'Sampel mewakili populasi agar survei hemat waktu & biaya.' },
      { text: 'Metode pengumpulan data dengan membagikan daftar pertanyaan tertulis/online kepada responden disebut...', opts: ['Angket / Kuesioner', 'Observasi tunggal', 'Pengukuran penggaris', 'Percobaan kimia'], ans: 0, exp: 'Kuesioner mengumpulkan jawaban banyak responden dengan cepat.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-08', subSeq: 2,
    objectives: ['Siswa mampu menyusun tabel frekuensi data tunggal dan tabel distribusi frekuensi berkelompok (interval) sederhana.'],
    materialTitle: 'Penyajian Data dalam Tabel Distribusi',
    blocks: [
      { type: 'table', title: 'Contoh Tabel Frekuensi Nilai Kelas 7A (n = 20)', headers: ['Rentang Nilai', 'Frekuensi', 'Persentase'], rows: [
        ['61 – 70', '3', '15%'],
        ['71 – 80', '8', '40%'],
        ['81 – 90', '6', '30%'],
        ['91 – 100', '3', '15%'],
      ]},
    ],
    activityTitle: 'Latihan: Tabel Distribusi',
    questions: [
      { text: 'Dari tabel di atas, banyak siswa yang memperoleh nilai di atas 80 (rentang 81–100) adalah...', opts: ['6 siswa', '9 siswa', '11 siswa', '3 siswa'], ans: 1, exp: '6 + 3 = 9 siswa.' },
      { text: 'Persentase siswa pada rentang 71–80 jika total 20 siswa dan frekuensinya 8 adalah...', opts: ['20%', '30%', '40%', '80%'], ans: 2, exp: '(8/20) × 100% = 40%.' },
      { text: 'Kelebihan tabel distribusi berkelompok (interval) saat mengolah 100 data nilai ujian adalah...', opts: ['Data lebih ringkas dan pola sebaran nilai cepat terlihat', 'Semua angka hilang', 'Tabel makin panjang 100 baris', 'Tidak ada bedanya'], ans: 0, exp: 'Pengelompokan interval merangkum data dalam jumlah besar.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-08', subSeq: 3,
    objectives: ['Siswa mampu memilih dan menafsirkan diagram batang serta diagram garis (perubahan data dari waktu ke waktu).'],
    materialTitle: 'Diagram Batang dan Diagram Garis',
    blocks: [
      { type: 'table', title: 'Kapan Pakai Diagram Batang vs Diagram Garis?', headers: ['Diagram', 'Paling Tepat Untuk...'], rows: [
        ['Diagram Batang', 'Membandingkan jumlah antar-kategori terpisah (ekskul, jenis buah, kota)'],
        ['Diagram Garis', 'Melihat tren naik/turun data berkala dari waktu ke waktu (suhu tiap jam, hasil panen per tahun)'],
      ]},
    ],
    activityTitle: 'Latihan: Diagram Batang & Garis',
    questions: [
      { text: 'Untuk menampilkan perkembangan suhu udara Kota Gresik dari pukul 06.00 hingga 18.00 setiap 2 jam, diagram yang PALING cocok adalah...', opts: ['Diagram garis', 'Diagram lingkaran', 'Diagram Venn', 'Piktogram'], ans: 0, exp: 'Data berkala (time series) paling jelas trennya memakai diagram garis.' },
      { text: 'Pada diagram batang, sumbu skala vertikal yang tidak dimulai dari angka 0 bisa menyebabkan...', opts: ['Kesan visual perbedaan tinggi batang tampak dilebih-lebihkan (menyesatkan)', 'Diagram lebih akurat', 'Tidak ada pengaruh visual', 'Nilai jadi negatif'], ans: 0, exp: 'Memotong sumbu Y dapat membuat selisih kecil tampak sangat besar.' },
      { text: 'Untuk membandingkan jumlah siswa yang memilih 5 cabang olahraga berbeda, diagram paling jelas adalah...', opts: ['Diagram batang', 'Garis bilangan', 'Kurva suhu', 'Koordinat'], ans: 0, exp: 'Kategori diskrit cocok dengan diagram batang.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-08', subSeq: 4,
    objectives: ['Siswa mampu menghitung sudut pusat (°) dan persentase (%) pada diagram lingkaran serta mencari banyak data tiap sektor.'],
    materialTitle: 'Diagram Lingkaran (Derajat & Persen)',
    blocks: [
      { type: 'formula', name: 'Rumus Diagram Lingkaran', expression: 'Sudut = (Frekuensi / Total) × 360°   |   Persen = (Frekuensi / Total) × 100%', note: '1 lingkaran penuh = 360° = 100%. Siku-siku (90°) = 25% = 1/4 lingkaran!' },
      { type: 'worked_example', level: 'Hitung Jumlah Data', question: 'Pada diagram lingkaran 40 siswa, juring ekskul Musik bersudut 90° dan Basket 108°. Berapa banyak siswa tiap ekskul?', steps: ['Musik = (90°/360°) × 40 = 1/4 × 40 = 10 siswa.', 'Basket = (108°/360°) × 40 = 108/9 = 12 siswa.'], answer: 'Musik 10 siswa, Basket 12 siswa.' },
    ],
    activityTitle: 'Latihan: Diagram Lingkaran',
    questions: [
      { text: 'Dari 60 siswa, sebanyak 15 siswa menyukai IPA. Besar sudut juring IPA pada diagram lingkaran adalah...', opts: ['60°', '90°', '120°', '45°'], ans: 1, exp: '(15/60) × 360° = 1/4 × 360° = 90°.' },
      { text: 'Pada diagram lingkaran persen dari 200 warga: Petani 35%, Pedagang 25%, Karyawan 30%, sisanya Nelayan. Banyak warga Nelayan adalah...', opts: ['10 orang', '20 orang', '30 orang', '40 orang'], ans: 1, exp: 'Nelayan = 100% − (35+25+30)% = 10%; 10% × 200 = 20 orang.' },
      { text: 'Sudut 72° pada diagram lingkaran setara dengan persentase sebesar...', opts: ['15%', '20%', '25%', '30%'], ans: 1, exp: '(72/360) × 100% = 1/5 × 100% = 20%.' },
    ],
  },
  {
    topicCode: 'MAT-SMP7-08', subSeq: 5,
    objectives: ['Siswa mampu membaca, mengkritisi, dan menginterpretasi berbagai diagram statistik untuk mengambil keputusan berbasis data.'],
    materialTitle: 'Membaca dan Menginterpretasi Data',
    blocks: [
      { type: 'worked_example', level: 'Analisis Kritis Data', question: 'Diagram lingkaran menunjukkan anggaran bulanan keluarga: Pangan 40%, Pendidikan 25%, Listrik/Air 15%, Tabungan 20%. Jika pendapatan Rp5.000.000, berapa dana Pendidikan dan Tabungan?', steps: ['Pendidikan = 25% × 5.000.000 = Rp1.250.000.', 'Tabungan = 20% × 5.000.000 = Rp1.000.000.'], answer: 'Pendidikan Rp1.250.000 dan Tabungan Rp1.000.000.' },
    ],
    activityTitle: 'Latihan: Interpretasi Data SMP',
    questions: [
      { text: 'Pada diagram lingkaran dengan total 80 siswa: Mat 25%, IPA 20%, IPS 15%, sisanya Bahasa. Banyak siswa peminat Bahasa adalah...', opts: ['24 siswa', '32 siswa', '40 siswa', '20 siswa'], ans: 1, exp: 'Bahasa = 100% − 60% = 40%; 40% × 80 = 32 siswa.' },
      { text: 'Jika sebuah grafik menunjukkan penjualan naik dari 50 (Jan) → 65 (Feb) → 80 (Mar), pola kenaikan rata-rata per bulan adalah...', opts: ['Naik 10 unit/bulan', 'Naik 15 unit/bulan', 'Turun 15 unit/bulan', 'Tetap'], ans: 1, exp: '65−50 = 15 dan 80−65 = 15 unit/bulan.' },
      { text: 'Langkah paling bijak sebelum percaya pada grafik statistik di media sosial adalah...', opts: ['Memeriksa sumber data, skala sumbu, dan total persentasenya (harus 100% pada pie chart)', 'Langsung membagikannya', 'Hanya melihat warnanya', 'Mengabaikan angkanya'], ans: 0, exp: 'Literasi data kritis mencegah misinformasi visual.' },
    ],
  },
];

upsertLessonsBatch('Kelas 7 SMP — Matematika (8 Bab, 45 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

