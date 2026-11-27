import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: BILANGAN BERPANGKAT DAN BENTUK AKAR (6 sub)
  {
    topicCode: 'MAT-SMP9-01', subSeq: 1,
    objectives: ['Siswa mampu memahami definisi perpangkatan bilangan bulat positif dan menentukan tanda hasil pangkat bilangan negatif.'],
    materialTitle: 'Pangkat Bilangan Bulat',
    blocks: [
      { type: 'formula', name: 'Definisi Perpangkatan', expression: 'a^n = a × a × a × ... × a   (sebanyak n faktor)', note: 'Hati-hati tanda negatif! (−2)⁴ = (−2)(−2)(−2)(−2) = +16, sedangkan −2⁴ = −(2×2×2×2) = −16! Bilangan negatif berpangkat GENAP → positif; berpangkat GANJIL → negatif.' },
    ],
    activityTitle: 'Latihan: Pangkat Bilangan Bulat',
    questions: [
      { text: 'Nilai dari (−3)³ + (−2)⁴ adalah...', opts: ['-11', '43', '11', '-43'], ans: 0, exp: '(−3)³ = −27; (−2)⁴ = +16 → −27 + 16 = −11.' },
      { text: 'Perbedaan nilai antara (−5)² dan −5² adalah...', opts: ['(−5)² = 25, sedangkan −5² = −25', 'Keduanya sama-sama 25', 'Keduanya sama-sama −25', '(−5)² = −25, sedangkan −5² = 25'], ans: 0, exp: 'Tanda kurung ikut mengkuadratkan tanda negatif; tanpa kurung tanda negatif di luar.' },
      { text: 'Bentuk pangkat paling sederhana dari 64 dengan basis 2 adalah...', opts: ['2⁶', '2⁵', '2⁸', '2⁴'], ans: 0, exp: '2×2×2×2×2×2 = 64 = 2⁶.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-01', subSeq: 2,
    objectives: ['Siswa mampu menerapkan sifat-sifat perpangkatan (perkalian, pembagian, pangkat dipangkatkan, pangkat hasil kali/bagi).'],
    materialTitle: 'Sifat-Sifat Perpangkatan',
    blocks: [
      { type: 'table', title: '5 Sifat Wajib Perpangkatan', headers: ['Sifat', 'Rumus', 'Contoh'], rows: [
        ['Perkalian basis sama', 'a^m × a^n = a^(m+n)', '2³ × 2⁴ = 2⁷'],
        ['Pembagian basis sama', 'a^m ÷ a^n = a^(m−n)', '5⁶ ÷ 5² = 5⁴'],
        ['Pangkat dipangkatkan', '(a^m)^n = a^(m×n)', '(3²)⁴ = 3⁸'],
        ['Pangkat perkalian', '(a·b)^n = a^n · b^n', '(2x)³ = 8x³'],
        ['Pangkat pecahan', '(a/b)^n = a^n / b^n', '(2/3)² = 4/9'],
      ]},
    ],
    activityTitle: 'Latihan: Sifat Perpangkatan',
    questions: [
      { text: 'Bentuk paling sederhana dari (2³ × 2⁵) ÷ 2⁴ adalah...', opts: ['2⁴ = 16', '2⁶ = 64', '2² = 4', '2¹²'], ans: 0, exp: '2^(3+5−4) = 2⁴ = 16.' },
      { text: 'Hasil dari (3²)³ ÷ 3⁴ adalah...', opts: ['9', '27', '3', '81'], ans: 0, exp: '3^(2×3) ÷ 3⁴ = 3⁶ ÷ 3⁴ = 3² = 9.' },
      { text: 'Hasil dari (2a²b)³ adalah...', opts: ['8a⁶b³', '6a⁶b³', '2a⁶b³', '8a⁵b³'], ans: 0, exp: '2³ · (a²)³ · b³ = 8a⁶b³.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-01', subSeq: 3,
    objectives: ['Siswa mampu memahami dan menghitung bilangan berpangkat nol (a⁰ = 1) serta pangkat bulat negatif (a⁻ⁿ = 1/aⁿ).'],
    materialTitle: 'Pangkat Nol dan Pangkat Negatif',
    blocks: [
      { type: 'formula', name: 'Pangkat Nol & Pangkat Negatif (a ≠ 0)', expression: 'a⁰ = 1    |    a^(−n) = 1 / a^n    |    (a/b)^(−n) = (b/a)^n', note: 'Pangkat negatif BUKAN berarti hasilnya bilangan negatif, melainkan KEBALIKAN (pecahan)!' },
    ],
    activityTitle: 'Latihan: Pangkat Nol & Negatif',
    questions: [
      { text: 'Nilai dari 5⁰ + 2⁻² + 4⁻¹ adalah...', opts: ['1,5 (atau 3/2)', '0,5', '2', '-1'], ans: 0, exp: '5⁰ = 1, 2⁻² = ¼, 4⁻¹ = ¼ → 1 + ¼ + ¼ = 1½ = 1,5.' },
      { text: 'Nilai dari 3⁻³ adalah...', opts: ['1/27', '-27', '-9', '1/9'], ans: 0, exp: '3⁻³ = 1 / 3³ = 1/27.' },
      { text: 'Hasil dari (2/3)⁻² adalah...', opts: ['9/4', '4/9', '-4/9', '6/4'], ans: 0, exp: 'Balik pecahannya: (3/2)² = 9/4.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-01', subSeq: 4,
    objectives: ['Siswa mampu menyederhanakan bentuk akar dan menghubungkan bentuk akar dengan pangkat pecahan.'],
    materialTitle: 'Bentuk Akar dan Penyederhanaannya',
    blocks: [
      { type: 'formula', name: 'Hubungan Akar & Pangkat Pecahan', expression: '√(a × b) = √a × √b    |    a^(m/n) = ⁿ√(a^m)', note: 'Cara menyederhanakan √n: cari faktor KUADRAT SEMPURNA terbesar (4, 9, 16, 25, 36, 49, 64, 81, 100)! Contoh: √75 = √(25×3) = 5√3.' },
    ],
    activityTitle: 'Latihan: Bentuk Akar',
    questions: [
      { text: 'Bentuk paling sederhana dari √98 adalah...', opts: ['7√2', '49√2', '14√2', '2√7'], ans: 0, exp: '√98 = √(49 × 2) = 7√2.' },
      { text: 'Nilai dari 27^(2/3) adalah...', opts: ['9', '18', '3', '27'], ans: 0, exp: '(3³)^(2/3) = 3² = 9.' },
      { text: 'Bentuk paling sederhana dari √108 adalah...', opts: ['6√3', '9√3', '4√3', '3√12'], ans: 0, exp: '√108 = √(36 × 3) = 6√3.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-01', subSeq: 5,
    objectives: ['Siswa mampu melakukan penjumlahan, pengurangan, perkalian, dan pembagian bentuk akar sederhana.'],
    materialTitle: 'Operasi Bentuk Akar Sederhana',
    blocks: [
      { type: 'tip', text: 'Penjumlahan & pengurangan bentuk akar HANYA bisa dilakukan jika akarnya SEJENIS (sama di dalam akar)! Jika belum sama, sederhanakan dulu masing-masing akar. Perkalian: a√b × c√d = (ac)√(bd).' },
    ],
    activityTitle: 'Latihan: Operasi Bentuk Akar',
    questions: [
      { text: 'Hasil dari √32 + √18 − √50 adalah...', opts: ['2√2', '3√2', '0', '4√2'], ans: 0, exp: '4√2 + 3√2 − 5√2 = (4 + 3 − 5)√2 = 2√2.' },
      { text: 'Hasil dari 2√3 × 4√6 dalam bentuk paling sederhana adalah...', opts: ['24√2', '8√18', '16√2', '12√3'], ans: 0, exp: '8√18 = 8 × 3√2 = 24√2.' },
      { text: 'Hasil dari √48 ÷ √3 adalah...', opts: ['4', '16', '4√3', '2'], ans: 0, exp: '√(48 ÷ 3) = √16 = 4.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-01', subSeq: 6,
    objectives: ['Siswa mampu merasionalkan penyebut pecahan berbentuk a/√b dan c/(a ± √b).'],
    materialTitle: 'Rasionalisasi Penyebut Bentuk Akar',
    blocks: [
      { type: 'formula', name: '2 Rumus Merasionalkan Penyebut', expression: '1) a/√b × (√b/√b) = (a√b)/b    |    2) c/(a+√b) × (a−√b)/(a−√b) = c(a−√b)/(a²−b)', note: 'Sekawan dari (a + √b) adalah (a − √b), memakai sifat selisih kuadrat (p+q)(p−q) = p² − q²!' },
    ],
    activityTitle: 'Latihan: Rasionalisasi Penyebut',
    questions: [
      { text: 'Bentuk rasional paling sederhana dari 10 / √5 adalah...', opts: ['2√5', '5√5', '10√5', '√5'], ans: 0, exp: '(10√5)/5 = 2√5.' },
      { text: 'Bentuk rasional dari 6 / (3 − √3) adalah...', opts: ['3 + √3', '3 − √3', '6 + 2√3', '2 + √3'], ans: 0, exp: '6(3+√3) / (9 − 3) = 6(3+√3) / 6 = 3 + √3.' },
      { text: 'Bentuk rasional dari 8 / (√5 + √3) adalah...', opts: ['4(√5 − √3)', '4(√5 + √3)', '8(√5 − √3)', '2(√5 − √3)'], ans: 0, exp: '8(√5−√3) / (5 − 3) = 8(√5−√3)/2 = 4(√5 − √3).' },
    ],
  },

  // BAB 2: NOTASI ILMIAH DAN BILANGAN REAL (5 sub)
  {
    topicCode: 'MAT-SMP9-02', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian dan syarat bentuk baku notasi ilmiah a × 10^n (1 ≤ a < 10).'],
    materialTitle: 'Pengertian Notasi Ilmiah (Bentuk Baku)',
    blocks: [
      { type: 'formula', name: 'Bentuk Baku Notasi Ilmiah', expression: 'a × 10^n   dengan   1 ≤ a < 10   dan   n bilangan bulat', note: 'Dipakai ilmuwan untuk menuliskan angka raksasa (jarak bintang, kecepatan cahaya 3×10⁸ m/s) dan angka super kecil (ukuran virus 1,2×10⁻⁷ m) secara ringkas!' },
    ],
    activityTitle: 'Latihan: Pengertian Notasi Ilmiah',
    questions: [
      { text: 'Manakah penulisan yang SUDAH memenuhi syarat notasi ilmiah baku (1 ≤ a < 10)?', opts: ['4,25 × 10⁶', '42,5 × 10⁵', '0,425 × 10⁷', '425 × 10⁴'], ans: 0, exp: 'Hanya 4,25 yang berada di antara 1 dan 10.' },
      { text: 'Bilangan yang sangat kecil antara 0 dan 1 (seperti 0,000056) jika ditulis dalam notasi ilmiah selalu memiliki pangkat 10 bernilai...', opts: ['Negatif', 'Positif', 'Nol', 'Pecahan'], ans: 0, exp: '0,000056 = 5,6 × 10⁻⁵ (koma bergeser ke kanan 5 langkah).' },
      { text: 'Bentuk biasa dari 3,08 × 10⁵ adalah...', opts: ['308.000', '30.800', '3.080.000', '0,0000308'], ans: 0, exp: 'Geser koma 5 langkah ke kanan → 308.000.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-02', subSeq: 2,
    objectives: ['Siswa mampu mengubah bilangan sangat besar maupun sangat kecil ke notasi ilmiah dan sebaliknya.'],
    materialTitle: 'Mengubah Bilangan ke Notasi Ilmiah',
    blocks: [
      { type: 'tip', text: 'Trik Geser Koma: Koma geser ke KIRI n langkah → pangkat POSITIF (+n). Koma geser ke KANAN n langkah → pangkat NEGATIF (−n)!' },
    ],
    activityTitle: 'Latihan: Konversi Notasi Ilmiah',
    questions: [
      { text: 'Jarak rata-rata Bumi ke Matahari sekitar 150.000.000 km. Penulisannya dalam notasi ilmiah adalah...', opts: ['1,5 × 10⁸ km', '15 × 10⁷ km', '1,5 × 10⁷ km', '0,15 × 10⁹ km'], ans: 0, exp: 'Koma bergeser 8 langkah ke kiri → 1,5 × 10⁸.' },
      { text: 'Diameter rata-rata suatu bakteri adalah 0,0000024 m. Dalam notasi ilmiah ditulis...', opts: ['2,4 × 10⁻⁶ m', '2,4 × 10⁻⁵ m', '24 × 10⁻⁷ m', '2,4 × 10⁶ m'], ans: 0, exp: 'Koma bergeser 6 langkah ke kanan → 2,4 × 10⁻⁶.' },
      { text: 'Bentuk desimal biasa dari 7,5 × 10⁻⁴ adalah...', opts: ['0,00075', '0,0075', '0,000075', '75.000'], ans: 0, exp: 'Geser koma 4 langkah ke kiri → 0,00075.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-02', subSeq: 3,
    objectives: ['Siswa mampu melakukan perkalian, pembagian, dan penjumlahan sederhana dalam notasi ilmiah.'],
    materialTitle: 'Operasi Sederhana dalam Notasi Ilmiah',
    blocks: [
      { type: 'worked_example', level: 'Perkalian Notasi Ilmiah', question: 'Hitung (4 × 10⁵) × (3 × 10⁴) dalam notasi ilmiah baku!', steps: ['Kalikan angka depan dan jumlahkan pangkat 10: (4×3) × 10^(5+4) = 12 × 10⁹.', 'Sesuaikan agar 1 ≤ a < 10: 12 = 1,2 × 10¹ → 1,2 × 10¹⁰!'], answer: '1,2 × 10¹⁰' },
    ],
    activityTitle: 'Latihan: Operasi Notasi Ilmiah',
    questions: [
      { text: 'Hasil dari (2,5 × 10⁴) × (4 × 10³) dalam notasi ilmiah baku adalah...', opts: ['1 × 10⁸', '10 × 10⁷', '1 × 10⁷', '6,5 × 10⁷'], ans: 0, exp: '2,5 × 4 = 10; 10 × 10⁷ = 1 × 10⁸.' },
      { text: 'Hasil dari (9 × 10⁸) ÷ (3 × 10³) adalah...', opts: ['3 × 10⁵', '3 × 10¹¹', '6 × 10⁵', '3 × 10⁴'], ans: 0, exp: '(9÷3) × 10^(8−3) = 3 × 10⁵.' },
      { text: 'Hasil dari (5,2 × 10⁶) + (2,8 × 10⁶) adalah...', opts: ['8 × 10⁶', '8 × 10¹²', '7 × 10⁶', '8 × 10⁷'], ans: 0, exp: 'Karena pangkat 10 sudah sama (10⁶), cukup jumlahkan 5,2 + 2,8 = 8 → 8 × 10⁶.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-02', subSeq: 4,
    objectives: ['Siswa mampu melakukan estimasi (taksiran) dan pembulatan bilangan desimal/notasi ilmiah hingga angka signifikan tertentu.'],
    materialTitle: 'Estimasi dan Pembulatan',
    blocks: [
      { type: 'text', text: 'Estimasi membantu mengecek kewajaran hasil hitung tanpa kalkulator! Pembulatan: jika angka di kanan posisi yang dibulatkan ≥ 5, bulatkan ke atas (+1); jika < 5, tetap. Contoh: 3,478 dibulatkan 2 tempat desimal menjadi 3,48.' },
    ],
    activityTitle: 'Latihan: Estimasi & Pembulatan',
    questions: [
      { text: 'Bilangan 0,04867 jika dibulatkan hingga 2 tempat desimal menjadi...', opts: ['0,05', '0,04', '0,048', '0,10'], ans: 0, exp: 'Digit ketiga adalah 8 (≥5) → digit kedua 4 naik jadi 5 → 0,05.' },
      { text: 'Taksiran paling wajar untuk hasil 198 × 49 adalah sekitar...', opts: ['10.000 (karena ≈ 200 × 50)', '1.000', '100.000', '2.500'], ans: 0, exp: '200 × 50 = 10.000 (hasil eksak 9.702, sangat dekat!).' },
      { text: 'Populasi suatu kota adalah 1.348.290 jiwa. Jika ditulis dalam notasi ilmiah dibulatkan 2 tempat desimal, hasilnya adalah...', opts: ['1,35 × 10⁶ jiwa', '1,34 × 10⁶ jiwa', '13,5 × 10⁵ jiwa', '1,35 × 10⁵ jiwa'], ans: 0, exp: '1,34829 × 10⁶ dibulatkan 2 desimal → 1,35 × 10⁶.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-02', subSeq: 5,
    objectives: ['Siswa mampu membedakan bilangan rasional dan irasional dalam sistem bilangan real serta menerapkannya dalam sains dan keuangan.'],
    materialTitle: 'Sistem Bilangan Real dan Penerapannya',
    blocks: [
      { type: 'table', title: 'Bilangan Real = Rasional ∪ Irasional', headers: ['Kelompok', 'Ciri', 'Contoh'], rows: [
        ['Bilangan Rasional', 'Bisa ditulis pecahan a/b (desimal berhenti atau berulang teratur)', '−5, 0, ¾, 0,25, 0,333..., √9 = 3'],
        ['Bilangan Irasional', 'TIDAK bisa ditulis a/b (desimal tak berhenti & tak berulang)', '√2, √3, √5, π (3,14159265...)'],
      ]},
    ],
    activityTitle: 'Latihan: Bilangan Real',
    questions: [
      { text: 'Manakah bilangan berikut yang termasuk bilangan IRASIONAL?', opts: ['√7', '√16', '0,75', '−12/5'], ans: 0, exp: '7 bukan bilangan kuadrat sempurna sehingga √7 desimalnya tak berhenti dan tak berulang.' },
      { text: 'Cahaya merambat dengan kecepatan 3 × 10⁸ m/s. Dalam waktu 500 detik (5 × 10² s), jarak tempuh cahaya dari Matahari ke Bumi adalah...', opts: ['1,5 × 10¹¹ m', '1,5 × 10¹⁰ m', '8 × 10¹⁰ m', '15 × 10¹¹ m'], ans: 0, exp: '(3×5) × 10^(8+2) = 15 × 10¹⁰ = 1,5 × 10¹¹ m (= 150 juta km!).' },
      { text: 'Pecahan desimal berulang 0,6666... termasuk bilangan...', opts: ['Rasional (karena sama dengan 2/3)', 'Irasional', 'Imajiner', 'Bukan bilangan real'], ans: 0, exp: 'Desimal berulang teratur selalu dapat dinyatakan sebagai pecahan a/b.' },
    ],
  },

  // BAB 3: RASIO, SKALA, DAN LAJU PERUBAHAN (5 sub)
  {
    topicCode: 'MAT-SMP9-03', subSeq: 1,
    objectives: ['Siswa mampu menghitung jarak peta, jarak sebenarnya, skala, dan luas sebenarnya dari denah/peta berskala.'],
    materialTitle: 'Skala pada Peta, Denah, dan Luas',
    blocks: [
      { type: 'formula', name: 'Skala Panjang & Skala Luas', expression: 'Skala = Jarak Peta / Jarak Sebenarnya   |   Luas Sebenarnya = Luas Peta × (k)²', note: 'Hati-hati konversi satuan: 1 km = 100.000 cm; 1 m = 100 cm! Jika skala 1 : k, perbandingan LUAS = 1 : k²!' },
    ],
    activityTitle: 'Latihan: Skala Peta & Denah',
    questions: [
      { text: 'Pada peta berskala 1 : 250.000, jarak kota Gresik ke kota lain adalah 6 cm. Jarak sebenarnya adalah...', opts: ['15 km', '150 km', '1,5 km', '25 km'], ans: 0, exp: '6 × 250.000 = 1.500.000 cm = 15 km.' },
      { text: 'Denah sebuah aula berskala 1 : 200 digambar berukuran 5 cm × 4 cm. Luas aula sebenarnya adalah...', opts: ['80 m²', '40 m²', '800 m²', '20 m²'], ans: 0, exp: 'p = 5×200 cm = 10 m; l = 4×200 cm = 8 m → Luas = 10 × 8 = 80 m².' },
      { text: 'Jarak dua pelabuhan 48 km digambar pada peta sepanjang 4 cm. Skala peta tersebut adalah...', opts: ['1 : 1.200.000', '1 : 120.000', '1 : 12.000', '1 : 192.000'], ans: 0, exp: '48 km = 4.800.000 cm → 4 : 4.800.000 = 1 : 1.200.000.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-03', subSeq: 2,
    objectives: ['Siswa mampu membedakan serta menyelesaikan masalah perbandingan senilai dan perbandingan berbalik nilai (pekerja-waktu, kecepatan-waktu).'],
    materialTitle: 'Perbandingan Senilai dan Berbalik Nilai',
    blocks: [
      { type: 'table', title: 'Senilai vs Berbalik Nilai', headers: ['Jenis', 'Ciri', 'Rumus Cepat'], rows: [
        ['Senilai (a1/b1 = a2/b2)', 'X naik → Y ikut NAIK (harga vs jumlah barang, bensin vs jarak)', 'Kali silang lurus: a1 · b2 = a2 · b1'],
        ['Berbalik Nilai (a1·b1 = a2·b2)', 'X naik → Y TURUN (pekerja vs hari selesai, kecepatan vs waktu tempuh)', 'Kali mendatar sejajar: a1 · b1 = a2 · b2'],
      ]},
    ],
    activityTitle: 'Latihan: Senilai & Berbalik Nilai',
    questions: [
      { text: 'Pekerjaan membangun pos ronda selesai dalam 18 hari oleh 6 pekerja. Jika ingin selesai dalam 12 hari, banyak pekerja yang dibutuhkan adalah...', opts: ['9 pekerja', '4 pekerja', '12 pekerja', '8 pekerja'], ans: 0, exp: 'Berbalik nilai: 18 × 6 = 12 × p → 108 = 12p → p = 9 pekerja.' },
      { text: 'Sebuah sepeda motor membutuhkan 3 liter bensin untuk menempuh 135 km. Untuk menempuh 225 km dibutuhkan bensin sebanyak...', opts: ['5 liter', '4 liter', '6 liter', '4,5 liter'], ans: 0, exp: 'Senilai: 135/3 = 45 km/L → 225 ÷ 45 = 5 liter.' },
      { text: 'Dengan kecepatan 60 km/jam, perjalanan memakan waktu 2,5 jam. Jika kecepatan dinaikkan menjadi 75 km/jam, waktu tempuhnya menjadi...', opts: ['2 jam', '3 jam', '1,5 jam', '2,25 jam'], ans: 0, exp: 'Berbalik nilai: 60 × 2,5 = 75 × t → 150 = 75t → t = 2 jam.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-03', subSeq: 3,
    objectives: ['Siswa mampu menyelesaikan proporsi rasio majemuk (3 bagian a : b : c) dan pembagian jumlah/selisih berdasar perbandingan.'],
    materialTitle: 'Proporsi dan Rasio Bertingkat',
    blocks: [
      { type: 'worked_example', level: 'Rasio 3 Bagian', question: 'Perbandingan uang A : B = 2 : 3 dan B : C = 4 : 5. Tentukan rasio A : B : C!', steps: ['Samakan angka perantara B (KPK dari 3 dan 4 adalah 12):', 'A : B = (2×4) : (3×4) = 8 : 12.', 'B : C = (4×3) : (5×3) = 12 : 15.', 'Gabungkan → A : B : C = 8 : 12 : 15!'], answer: '8 : 12 : 15' },
    ],
    activityTitle: 'Latihan: Proporsi',
    questions: [
      { text: 'Perbandingan kelereng Andi dan Budi adalah 3 : 5. Jika selisih kelereng mereka 16 butir, jumlah kelereng keduanya adalah...', opts: ['64 butir', '40 butir', '48 butir', '32 butir'], ans: 0, exp: 'Jumlah = (3+5)/(5−3) × 16 = 8/2 × 16 = 64 butir.' },
      { text: 'Rasio panjang : lebar : tinggi sebuah balok adalah 4 : 3 : 2. Jika panjangnya 20 cm, maka tingginya adalah...', opts: ['10 cm', '15 cm', '8 cm', '12 cm'], ans: 0, exp: '1 bagian = 20 ÷ 4 = 5 cm → tinggi = 2 × 5 = 10 cm.' },
      { text: 'Jika A : B = 1 : 2 dan B : C = 3 : 4, maka perbandingan A : B : C adalah...', opts: ['3 : 6 : 8', '1 : 6 : 4', '3 : 2 : 8', '2 : 6 : 8'], ans: 0, exp: 'Samakan B jadi 6: (1×3):(2×3) = 3:6 dan (3×2):(4×2) = 6:8 → 3 : 6 : 8.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-03', subSeq: 4,
    objectives: ['Siswa mampu memahami dan menghitung laju perubahan (kecepatan, debit, kepadatan penduduk, dan tarif per satuan).'],
    materialTitle: 'Laju Perubahan (Kecepatan, Debit, & Tarif)',
    blocks: [
      { type: 'formula', name: 'Konsep Umum Laju Perubahan', expression: 'Laju = Perubahan Besaran / Perubahan Waktu   (v = s/t,  Debit Q = V/t)', note: 'Laju perubahan membandingkan dua besaran berbeda satuan, misalnya km/jam, liter/menit, atau rupiah/kWh.' },
    ],
    activityTitle: 'Latihan: Laju Perubahan',
    questions: [
      { text: 'Sebuah pompa air mengisi tangki 600 liter dalam waktu 15 menit. Debit aliran pompa tersebut adalah...', opts: ['40 liter/menit', '4 liter/menit', '90 liter/menit', '25 liter/menit'], ans: 0, exp: 'Q = V / t = 600 / 15 = 40 liter/menit.' },
      { text: 'Suhu ruang naik secara tetap dari 24°C pukul 07.00 menjadi 33°C pukul 10.00. Laju kenaikan suhu rata-ratanya adalah...', opts: ['3°C per jam', '9°C per jam', '2°C per jam', '4,5°C per jam'], ans: 0, exp: '(33 − 24) / (10 − 7) = 9 / 3 = 3°C/jam.' },
      { text: 'Kereta melaju sejauh 210 km dalam 2 jam 30 menit (2,5 jam). Kecepatan rata-rata kereta adalah...', opts: ['84 km/jam', '70 km/jam', '90 km/jam', '105 km/jam'], ans: 0, exp: 'v = 210 / 2,5 = 84 km/jam.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-03', subSeq: 5,
    objectives: ['Siswa mampu menerapkan rasio, persentase, dan perbandingan untuk menentukan nilai terbaik (best buy) dan campuran bahan.'],
    materialTitle: 'Penerapan Rasio dalam Masalah Kontekstual',
    blocks: [
      { type: 'worked_example', level: 'Memilih Kemasan Paling Hemat (Best Buy)', question: 'Minyak goreng A (500 mL = Rp9.500) vs Minyak B (2 liter = Rp36.000). Mana yang lebih hemat per liter?', steps: ['A: 500 mL = 0,5 L → harga per liter = 2 × Rp9.500 = Rp19.000/L.', 'B: harga per liter = Rp36.000 ÷ 2 = Rp18.000/L.', 'Jadi kemasan B lebih hemat Rp1.000 per liter!'], answer: 'Kemasan B lebih hemat' },
    ],
    activityTitle: 'Latihan: Penerapan Rasio',
    questions: [
      { text: 'Toko X menjual 4 buku Rp18.000, sedangkan Toko Y menjual 6 buku yang sama Rp25.200. Mana yang lebih murah per buku?', opts: ['Toko Y (Rp4.200/buku dibanding Rp4.500/buku di Toko X)', 'Toko X (Rp4.000/buku)', 'Keduanya sama persis', 'Toko Y (Rp4.600/buku)'], ans: 0, exp: 'X = 18.000/4 = Rp4.500; Y = 25.200/6 = Rp4.200 → Toko Y lebih hemat.' },
      { text: 'Untuk membuat sirup, rasio sirup kental : air = 1 : 4. Jika ibu ingin membuat 1.500 mL minuman siap saji, banyak sirup kental yang dibutuhkan adalah...', opts: ['300 mL', '375 mL', '500 mL', '250 mL'], ans: 0, exp: '1 / (1+4) × 1.500 = 1/5 × 1.500 = 300 mL.' },
      { text: 'Pada sebuah proyek, 10 pekerja awalnya dijadwalkan selesai 24 hari. Setelah bekerja 6 hari, pekerjaan dihentikan 3 hari. Agar selesai TEPAT WAKTU (sisa 15 hari), banyak TAMBAHAN pekerja yang diperlukan adalah...', opts: ['2 pekerja', '12 pekerja', '4 pekerja', '3 pekerja'], ans: 0, exp: 'Sisa beban = 10 × (24−6) = 180 orang-hari. Sisa waktu = 18 − 3 = 15 hari → butuh 180/15 = 12 pekerja → tambahan = 12 − 10 = 2 pekerja!' },
    ],
  },

  // BAB 4: LINGKARAN (7 sub)
  {
    topicCode: 'MAT-SMP9-04', subSeq: 1,
    objectives: ['Siswa mampu mengidentifikasi 8 unsur lingkaran (pusat, jari-jari, diameter, busur, tali busur, apotema, juring, tembereng).'],
    materialTitle: 'Unsur-Unsur Lingkaran',
    blocks: [
      { type: 'table', title: '8 Unsur Penting Lingkaran', headers: ['Unsur', 'Penjelasan Singkat'], rows: [
        ['Jari-jari (r) & Diameter (d)', 'd = 2r (diameter = tali busur TERPANJANG yang melalui pusat!)'],
        ['Busur & Tali Busur', 'Busur = garis lengkung tepi; Tali busur = ruas garis lurus menghubungkan 2 titik di keliling'],
        ['Apotema', 'Garis TEGAK LURUS dari titik pusat ke tali busur'],
        ['Juring vs Tembereng', 'Juring = potongan "pizza" (dibatasi 2 jari-jari & busur); Tembereng = daerah antara tali busur & busur'],
      ]},
    ],
    activityTitle: 'Latihan: Unsur-Unsur Lingkaran',
    questions: [
      { text: 'Daerah di dalam lingkaran yang dibatasi oleh dua buah jari-jari dan satu busur lingkaran (menyerupai potongan pizza) disebut...', opts: ['Juring', 'Tembereng', 'Apotema', 'Diameter'], ans: 0, exp: 'Juring dibatasi 2 jari-jari + busur; tembereng dibatasi tali busur + busur.' },
      { text: 'Ruas garis terpendek dari titik pusat lingkaran yang tegak lurus terhadap tali busur disebut...', opts: ['Apotema', 'Busur', 'Juring', 'Diameter'], ans: 0, exp: 'Apotema tegak lurus membagi tali busur menjadi 2 sama panjang (sering dipakai dengan Pythagoras!).' },
      { text: 'Tali busur terpanjang pada setiap lingkaran selalu sama dengan...', opts: ['Diameter lingkaran', 'Jari-jari', 'Apotema', 'Keliling'], ans: 0, exp: 'Diameter melintasi pusat sehingga menjadi tali busur terpanjang.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-04', subSeq: 2,
    objectives: ['Siswa mampu menghitung keliling lingkaran dan jarak tempuh roda berputar menggunakan K = 2πr = πd.'],
    materialTitle: 'Keliling Lingkaran dan Putaran Roda',
    blocks: [
      { type: 'formula', name: 'Keliling Lingkaran & Jarak Roda', expression: 'K = 2πr = πd    |    Jarak Tempuh = Keliling × Banyak Putaran', note: 'Gunakan π = 22/7 jika r atau d kelipatan 7; gunakan π = 3,14 jika bukan kelipatan 7!' },
    ],
    activityTitle: 'Latihan: Keliling Lingkaran',
    questions: [
      { text: 'Sebuah roda sepeda berjari-jari 35 cm (π = 22/7) berputar sebanyak 100 kali. Jarak yang ditempuh sepeda adalah...', opts: ['220 meter', '110 meter', '22 meter', '440 meter'], ans: 0, exp: 'K = 2 × (22/7) × 35 = 220 cm = 2,2 m → 100 × 2,2 m = 220 meter.' },
      { text: 'Keliling sebuah taman berbentuk setengah lingkaran tertutup (termasuk sisi lurus diameternya) berdiameter 14 m (π = 22/7) adalah...', opts: ['36 m', '22 m', '44 m', '29 m'], ans: 0, exp: 'Lengkung ½K = ½ × (22/7) × 14 = 22 m; tambah garis lurus diameter 14 m → 22 + 14 = 36 m!' },
      { text: 'Jika keliling sebuah lingkaran 62,8 cm (π = 3,14), maka panjang jari-jarinya adalah...', opts: ['10 cm', '20 cm', '5 cm', '15 cm'], ans: 0, exp: '2 × 3,14 × r = 62,8 → 6,28r = 62,8 → r = 10 cm.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-04', subSeq: 3,
    objectives: ['Siswa mampu menghitung luas lingkaran dan luas daerah cincin/gabungan menggunakan L = πr².'],
    materialTitle: 'Luas Lingkaran',
    blocks: [
      { type: 'formula', name: 'Luas Lingkaran', expression: 'L = π r² = ¼ π d²', note: 'Luas cincin (jalan melingkar di sekeliling taman) = π(R² − r²)!' },
    ],
    activityTitle: 'Latihan: Luas Lingkaran',
    questions: [
      { text: 'Luas sebuah lingkaran dengan diameter 28 cm (π = 22/7) adalah...', opts: ['616 cm²', '2.464 cm²', '154 cm²', '308 cm²'], ans: 0, exp: 'r = 28 ÷ 2 = 14 cm → L = (22/7) × 14 × 14 = 616 cm².' },
      { text: 'Sebuah taman lingkaran berjari-jari 10 m (π = 3,14) dikelilingi jalan setapak selebar 2 m (sehingga R = 12 m). Luas jalan setapak tersebut adalah...', opts: ['138,16 m²', '314 m²', '452,16 m²', '12,56 m²'], ans: 0, exp: 'L_jalan = 3,14 × (12² − 10²) = 3,14 × (144 − 100) = 3,14 × 44 = 138,16 m².' },
      { text: 'Jika jari-jari lingkaran diperbesar menjadi 3 kali semula, maka luasnya menjadi...', opts: ['9 kali semula', '3 kali semula', '6 kali semula', '27 kali semula'], ans: 0, exp: 'Luas sebanding r² → 3² = 9 kali semula.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-04', subSeq: 4,
    objectives: ['Siswa mampu menghitung panjang busur lingkaran berdasarkan perbandingan sudut pusat terhadap 360°.'],
    materialTitle: 'Panjang Busur Lingkaran',
    blocks: [
      { type: 'formula', name: 'Rumus Panjang Busur', expression: 'Panjang Busur AB = (∠AOB / 360°) × 2πr', note: 'Berbanding lurus dengan sudut pusat: jika ∠COD = 2 × ∠AOB, maka busur CD = 2 × busur AB!' },
    ],
    activityTitle: 'Latihan: Panjang Busur',
    questions: [
      { text: 'Lingkaran berjari-jari 21 cm (π = 22/7) memiliki sudut pusat ∠AOB = 60°. Panjang busur AB adalah...', opts: ['22 cm', '44 cm', '11 cm', '33 cm'], ans: 0, exp: '(60/360) × 2 × (22/7) × 21 = (1/6) × 132 = 22 cm.' },
      { text: 'Pada lingkaran yang sama, sudut pusat ∠AOB = 40° menghasilkan panjang busur AB = 12 cm. Jika ∠COD = 100°, panjang busur CD adalah...', opts: ['30 cm', '24 cm', '20 cm', '36 cm'], ans: 0, exp: '(100/40) × 12 = 2,5 × 12 = 30 cm.' },
      { text: 'Jika panjang busur seperempat lingkaran (90°) adalah 11 cm (π = 22/7), maka jari-jari lingkaran itu adalah...', opts: ['7 cm', '14 cm', '21 cm', '3,5 cm'], ans: 0, exp: '¼ × 2 × (22/7) × r = 11 → (11/7)r = 11 → r = 7 cm.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-04', subSeq: 5,
    objectives: ['Siswa mampu menerapkan hubungan sudut pusat dan sudut keliling yang menghadap busur sama, termasuk sudut keliling menghadap diameter (90°).'],
    materialTitle: 'Sudut Pusat dan Sudut Keliling',
    blocks: [
      { type: 'formula', name: '3 Teorema Emas Sudut Lingkaran', expression: '1) Sudut Pusat = 2 × Sudut Keliling (busur sama)   |   2) Menghadap DIAMETER = 90°   |   3) Segiempat tali busur: sudut berhadapan = 180°', note: 'Semua sudut keliling yang menghadap busur sama memiliki besar SAMA PERSIS!' },
    ],
    activityTitle: 'Latihan: Sudut Pusat & Keliling',
    questions: [
      { text: 'Sudut pusat ∠AOB dan sudut keliling ∠ACB menghadap busur AB yang sama. Jika ∠AOB = 116°, besar ∠ACB adalah...', opts: ['58°', '232°', '116°', '64°'], ans: 0, exp: 'Sudut keliling = ½ × sudut pusat = ½ × 116° = 58°.' },
      { text: 'Jika AB adalah diameter lingkaran dan C adalah sembarang titik pada keliling lingkaran, maka besar sudut keliling ∠ACB selalu...', opts: ['90° (siku-siku)', '180°', '60°', '45°'], ans: 0, exp: 'Diameter membentuk sudut pusat 180° → sudut kelilingnya ½ × 180° = 90°.' },
      { text: 'Pada segiempat tali busur PQRS (keempat titik sudut di keliling lingkaran), jika ∠P = 75°, maka besar sudut di hadapannya ∠R adalah...', opts: ['105°', '75°', '150°', '90°'], ans: 0, exp: 'Sudut berhadapan pada segiempat tali busur selalu berjumlah 180° → 180° − 75° = 105°.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-04', subSeq: 6,
    objectives: ['Siswa mampu menghitung luas juring dan luas tembereng siku-siku (90°).'],
    materialTitle: 'Luas Juring dan Tembereng',
    blocks: [
      { type: 'formula', name: 'Rumus Luas Juring & Tembereng', expression: 'Luas Juring = (α / 360°) × πr²    |    Luas Tembereng = Luas Juring − Luas ΔAOB', note: 'Khusus sudut pusat 90°: Luas ΔAOB = ½ × r × r = ½ r²!' },
    ],
    activityTitle: 'Latihan: Luas Juring & Tembereng',
    questions: [
      { text: 'Luas juring dengan jari-jari 14 cm dan sudut pusat 90° (π = 22/7) adalah...', opts: ['154 cm²', '616 cm²', '308 cm²', '77 cm²'], ans: 0, exp: '(90/360) × (22/7) × 14 × 14 = ¼ × 616 = 154 cm².' },
      { text: 'Dari soal di atas (r = 14 cm, ∠AOB = 90°, Luas juring = 154 cm²), luas TEMBERENG AB adalah...', opts: ['56 cm²', '98 cm²', '154 cm²', '44 cm²'], ans: 0, exp: 'Luas ΔAOB = ½ × 14 × 14 = 98 cm² → Luas tembereng = 154 − 98 = 56 cm²!' },
      { text: 'Pada lingkaran yang sama, luas juring bersudut 45° adalah 30 cm². Luas juring bersudut 135° adalah...', opts: ['90 cm²', '60 cm²', '120 cm²', '45 cm²'], ans: 0, exp: '135° = 3 × 45° → Luas = 3 × 30 = 90 cm².' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-04', subSeq: 7,
    objectives: ['Siswa mampu menyelesaikan soal kontekstual lingkaran (biaya pemagaran, penanaman rumput, dan panjang sabuk lilitan/kincir).'],
    materialTitle: 'Soal Kontekstual Lingkaran',
    blocks: [
      { type: 'worked_example', level: 'Biaya Taman Bundar', question: 'Alun-alun punya kolam air mancur bundar berjari-jari 7 m (π = 22/7). Jika sekeliling kolam dipasang lampu tiap jarak 2 m, berapa banyak lampu dibutuhkan?', steps: ['K = 2 × (22/7) × 7 = 44 m.', 'Banyak lampu di lintasan tertutup (lingkaran) = K ÷ jarak = 44 ÷ 2 = 22 lampu!'], answer: '22 lampu' },
    ],
    activityTitle: 'Latihan: Soal Kontekstual Lingkaran',
    questions: [
      { text: 'Sebuah pizza berdiameter 28 cm (π = 22/7) dipotong menjadi 8 juring sama besar. Luas 1 potong pizza tersebut adalah...', opts: ['77 cm²', '154 cm²', '616 cm²', '38,5 cm²'], ans: 0, exp: 'r = 14 cm; L total = 616 cm² → 1 potong = 616 ÷ 8 = 77 cm².' },
      { text: 'Sebuah taman bundar berjari-jari 14 m akan ditanami rumput dengan biaya Rp20.000/m² (π = 22/7). Total biaya rumput adalah...', opts: ['Rp12.320.000', 'Rp6.160.000', 'Rp1.760.000', 'Rp24.640.000'], ans: 0, exp: 'L = (22/7)×14×14 = 616 m² → 616 × 20.000 = Rp12.320.000.' },
      { text: 'Jarum panjang sebuah jam dinding panjangnya 14 cm (π = 22/7). Jarak lintasan ujung jarum panjang selama 15 menit (¼ putaran) adalah...', opts: ['22 cm', '44 cm', '88 cm', '11 cm'], ans: 0, exp: '¼ × 2 × (22/7) × 14 = 22 cm.' },
    ],
  },

  // BAB 5: BANGUN RUANG (9 sub)
  {
    topicCode: 'MAT-SMP9-05', subSeq: 1,
    objectives: ['Siswa mampu mengidentifikasi unsur, sifat, luas permukaan, dan volume prisma tegak (segitiga, segiempat, segi-n).'],
    materialTitle: 'Prisma (Sisi Datar)',
    blocks: [
      { type: 'formula', name: 'Rumus Umum Prisma Segi-n', expression: 'Volume = Luas Alas × t    |    LP = (2 × Luas Alas) + (Keliling Alas × t)', note: 'Unsur prisma segi-n: Sisi = n + 2, Rusuk = 3n, Titik sudut = 2n!' },
    ],
    activityTitle: 'Latihan: Prisma',
    questions: [
      { text: 'Banyak sisi, rusuk, dan titik sudut pada prisma segi lima (n = 5) berturut-turut adalah...', opts: ['7, 15, dan 10', '6, 10, dan 6', '5, 15, dan 10', '7, 12, dan 8'], ans: 0, exp: 'Sisi = 5+2 = 7; Rusuk = 3×5 = 15; Titik sudut = 2×5 = 10.' },
      { text: 'Prisma segitiga siku-siku memiliki alas dengan sisi siku-siku 6 cm dan 8 cm serta tinggi prisma 15 cm. Volume prisma tersebut adalah...', opts: ['360 cm³', '720 cm³', '240 cm³', '180 cm³'], ans: 0, exp: 'L_alas = ½ × 6 × 8 = 24 cm² → V = 24 × 15 = 360 cm³.' },
      { text: 'Pada prisma segitiga di atas (alas 6 cm, 8 cm, sisi miring 10 cm, tinggi prisma 15 cm), luas permukaannya adalah...', opts: ['408 cm²', '360 cm²', '384 cm²', '432 cm²'], ans: 0, exp: 'LP = 2(24) + (6+8+10)×15 = 48 + 360 = 408 cm².' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-05', subSeq: 2,
    objectives: ['Siswa mampu menghitung luas selimut, luas permukaan, dan volume tabung (bangun ruang sisi lengkung).'],
    materialTitle: 'Tabung (Silinder)',
    blocks: [
      { type: 'formula', name: 'Rumus Tabung', expression: 'L_selimut = 2πrt   |   LP_tertutup = 2πr(r + t)   |   Volume = πr²t', note: 'Hati-hati tabung TANPA TUTUP (misal gelas/drum terbuka): LP = πr² + 2πrt = πr(r + 2t)!' },
    ],
    activityTitle: 'Latihan: Tabung',
    questions: [
      { text: 'Sebuah tabung berjari-jari 7 cm dan tinggi 20 cm (π = 22/7). Volume tabung tersebut adalah...', opts: ['3.080 cm³', '1.540 cm³', '880 cm³', '6.160 cm³'], ans: 0, exp: 'V = (22/7) × 7 × 7 × 20 = 154 × 20 = 3.080 cm³.' },
      { text: 'Luas selimut tabung pada soal di atas (r = 7 cm, t = 20 cm) adalah...', opts: ['880 cm²', '1.188 cm²', '440 cm²', '308 cm²'], ans: 0, exp: 'L_selimut = 2 × (22/7) × 7 × 20 = 880 cm².' },
      { text: 'Luas permukaan kaleng susu TERTUTUP berjari-jari 7 cm dan tinggi 10 cm (π = 22/7) adalah...', opts: ['748 cm²', '440 cm²', '594 cm²', '1.540 cm²'], ans: 0, exp: 'LP = 2 × (22/7) × 7 × (7 + 10) = 44 × 17 = 748 cm².' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-05', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi unsur, luas permukaan (dengan Pythagoras tinggi sisi tegak), dan volume limas.'],
    materialTitle: 'Limas',
    blocks: [
      { type: 'formula', name: 'Rumus Umum Limas Segi-n', expression: 'Volume = ⅓ × Luas Alas × t    |    LP = Luas Alas + Jumlah Luas Sisi Tegak', note: 'Unsur limas segi-n: Sisi = n + 1, Rusuk = 2n, Titik sudut = n + 1. Jangan tertukar antara tinggi limas (t) dan tinggi segitiga sisi tegak!' },
    ],
    activityTitle: 'Latihan: Limas',
    questions: [
      { text: 'Sebuah limas alas persegi dengan panjang sisi 12 cm dan tinggi limas 8 cm. Volume limas tersebut adalah...', opts: ['384 cm³', '1.152 cm³', '576 cm³', '192 cm³'], ans: 0, exp: 'V = ⅓ × (12×12) × 8 = ⅓ × 144 × 8 = 384 cm³.' },
      { text: 'Pada limas persegi di atas (sisi alas 12 cm → setengah sisi 6 cm, tinggi limas 8 cm), tinggi segitiga sisi tegaknya adalah...', opts: ['10 cm (Pythagoras 6-8-10!)', '8 cm', '12 cm', '14 cm'], ans: 0, exp: 't_segitiga = √(6² + 8²) = √100 = 10 cm.' },
      { text: 'Luas permukaan limas persegi di atas (alas 12×12 cm, tinggi sisi tegak 10 cm) adalah...', opts: ['384 cm²', '240 cm²', '144 cm²', '480 cm²'], ans: 0, exp: 'LP = 144 + 4 × (½ × 12 × 10) = 144 + 240 = 384 cm².' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-05', subSeq: 4,
    objectives: ['Siswa mampu menghitung garis pelukis (s = √(r²+t²)), luas selimut, luas permukaan, dan volume kerucut.'],
    materialTitle: 'Kerucut',
    blocks: [
      { type: 'formula', name: 'Rumus Kerucut', expression: 's² = r² + t²   |   L_selimut = πrs   |   LP = πr(r + s)   |   V = ⅓ πr²t', note: 's = panjang garis pelukis (sisi miring). Topi ulang tahun/tumpeng tanpa alas hanya menghitung L_selimut = πrs!' },
    ],
    activityTitle: 'Latihan: Kerucut',
    questions: [
      { text: 'Sebuah kerucut memiliki jari-jari 6 cm dan tinggi 8 cm. Panjang garis pelukis (s) kerucut tersebut adalah...', opts: ['10 cm', '14 cm', '12 cm', '7 cm'], ans: 0, exp: 's = √(6² + 8²) = √100 = 10 cm.' },
      { text: 'Luas karton minimal untuk membuat 1 topi kerucut (tanpa alas) berjari-jari 7 cm dan garis pelukis 25 cm (π = 22/7) adalah...', opts: ['550 cm²', '704 cm²', '1.100 cm²', '175 cm²'], ans: 0, exp: 'L_selimut = πrs = (22/7) × 7 × 25 = 550 cm².' },
      { text: 'Volume kerucut berjari-jari 7 cm dan tinggi 12 cm (π = 22/7) adalah...', opts: ['616 cm³', '1.848 cm³', '308 cm³', '154 cm³'], ans: 0, exp: 'V = ⅓ × (22/7) × 7 × 7 × 12 = 154 × 4 = 616 cm³.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-05', subSeq: 5,
    objectives: ['Siswa mampu menghitung luas permukaan dan volume bola penuh maupun belahan bola padat (setengah bola pejal).'],
    materialTitle: 'Bola',
    blocks: [
      { type: 'formula', name: 'Rumus Bola & Setengah Bola Pejal', expression: 'LP_bola = 4πr²   |   V_bola = (4/3)πr³   |   LP_½bola_pejal = 3πr²', note: 'Ingat! Luas permukaan belahan bola PEJAL (padat seperti belahan semangka) = 2πr² (lengkung) + πr² (tutup datar) = 3πr²!' },
    ],
    activityTitle: 'Latihan: Bola',
    questions: [
      { text: 'Luas permukaan bola berjari-jari 7 cm (π = 22/7) adalah...', opts: ['616 cm²', '154 cm²', '308 cm²', '1.232 cm²'], ans: 0, exp: 'LP = 4 × (22/7) × 7 × 7 = 616 cm².' },
      { text: 'Volume bola berjari-jari 3 cm (dinyatakan dalam π) adalah...', opts: ['36π cm³', '12π cm³', '27π cm³', '108π cm³'], ans: 0, exp: 'V = (4/3) × π × 3³ = (4/3) × 27π = 36π cm³.' },
      { text: 'Luas permukaan setengah bola PADAT (pejal) berjari-jari 10 cm (π = 3,14) adalah...', opts: ['942 cm²', '628 cm²', '1.256 cm²', '314 cm²'], ans: 0, exp: 'LP_½pejal = 3πr² = 3 × 3,14 × 100 = 942 cm².' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-05', subSeq: 6,
    objectives: ['Siswa mampu mengenali bentuk jaring-jaring tabung, kerucut, prisma, dan limas untuk memahami asal rumus luas permukaan.'],
    materialTitle: 'Jaring-Jaring Bangun Ruang',
    blocks: [
      { type: 'table', title: 'Bentuk Jaring-Jaring Sisi Lengkung', headers: ['Bangun', 'Komponen Jaring-Jaring'], rows: [
        ['Tabung', '2 lingkaran identik (alas & tutup) + 1 PERSEGI PANJANG (panjang = 2πr, lebar = t)'],
        ['Kerucut', '1 lingkaran (alas) + 1 JURING LINGKARAN (jari-jari = s, panjang busur = 2πr)'],
        ['Limas Segi-4', '1 segiempat alas + 4 segitiga sisi tegak'],
      ]},
    ],
    activityTitle: 'Latihan: Jaring-Jaring Bangun Ruang',
    questions: [
      { text: 'Jika selimut tabung dibuka rata pada bidang datar, bentuk bangun datarnya adalah...', opts: ['Persegi panjang dengan panjang = keliling alas (2πr) dan lebar = tinggi tabung (t)', 'Juring lingkaran', 'Segitiga sama kaki', 'Trapesium'], ans: 0, exp: 'Itulah mengapa luas selimut tabung = 2πr × t.' },
      { text: 'Selimut kerucut apabila dibentangkan pada bidang datar membentuk bangun datar berupa...', opts: ['Juring lingkaran', 'Persegi panjang', 'Belah ketupat', 'Segi enam'], ans: 0, exp: 'Jari-jari juring selimut sama dengan garis pelukis s.' },
      { text: 'Manakah bangun ruang yang TIDAK dapat dibuka menjadi jaring-jaring bidang datar mulus tanpa dipotong menjadi potongan-potongan kecil?', opts: ['Bola', 'Kubus', 'Tabung', 'Prisma segitiga'], ans: 0, exp: 'Permukaan bola melengkung ganda di semua arah (itulah sebabnya peta bumi selalu ada distorsi!).' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-05', subSeq: 7,
    objectives: ['Siswa mampu menghitung luas permukaan bangun ruang gabungan (tabung + kerucut, tabung + setengah bola) tanpa menghitung bidang berimpit!'],
    materialTitle: 'Luas Permukaan Bangun Ruang Gabungan',
    blocks: [
      { type: 'misconception', wrong: 'Luas permukaan bangun gabungan (misal kapsul/kubah: tabung + setengah bola) = LP tabung utuh + LP setengah bola.', right: 'SALAH! Sisi yang BERIMPIT (menempel di dalam) TIDAK boleh ikut dihitung! Hanya hitung permukaan LUAR yang bisa dicat: L_alas tabung + L_selimut tabung + L_lengkung ½ bola!' },
    ],
    activityTitle: 'Latihan: Luas Permukaan Gabungan',
    questions: [
      { text: 'Sebuah bandul terdiri atas kerucut (s = 10 cm) yang alasnya menempel pas pada belahan bola (r = 6 cm). Rumus luas permukaan luar bandul tersebut adalah...', opts: ['L_selimut kerucut + L_lengkung ½ bola = πrs + 2πr²', 'LP kerucut utuh + LP bola utuh', 'πr² + 2πr²', '4πr²'], ans: 0, exp: 'Bidang lingkaran tempat menempel berada di dalam sehingga tidak dihitung.' },
      { text: 'Hitung luas permukaan bandul di atas (r = 6 cm, s = 10 cm) dinyatakan dalam π:', opts: ['132π cm²', '168π cm²', '96π cm²', '60π cm²'], ans: 0, exp: 'π(6)(10) + 2π(6²) = 60π + 72π = 132π cm².' },
      { text: 'Bila sebuah kubah bangunan berbentuk tabung tanpa tutup (r=7 m, t=10 m) ditutup atap setengah bola (r=7 m), bagian luar yang dicat seluas (π=22/7)...', opts: ['748 m² (selimut tabung + lengkung ½ bola)', '902 m²', '440 m²', '308 m²'], ans: 0, exp: 'Jika hanya dinding selimut + kubah atap: 2πrt + 2πr² = 440 + 308 = 748 m².' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-05', subSeq: 8,
    objectives: ['Siswa mampu menghitung volume bangun ruang gabungan dan perbandingan volume kerucut : bola : tabung (1 : 2 : 3).'],
    materialTitle: 'Volume Bangun Ruang Gabungan & Rasio 1:2:3',
    blocks: [
      { type: 'formula', name: 'Rasio Istimewa Archimedes (r sama, t = 2r)', expression: 'V_kerucut : V_bola : V_tabung  =  1 : 2 : 3', note: 'Untuk VOLUME bangun gabungan, langsung JUMLAHKAN volume masing-masing bagian (tidak perlu kurangi sisi berimpit)!' },
    ],
    activityTitle: 'Latihan: Volume Gabungan',
    questions: [
      { text: 'Sebuah bola tepat masuk menyinggung seluruh sisi dalam tabung (r bola = r tabung, t tabung = 2r). Jika volume tabung 180 cm³, maka volume bola tersebut adalah...', opts: ['120 cm³', '60 cm³', '90 cm³', '150 cm³'], ans: 0, exp: 'V_bola = (2/3) × V_tabung = (2/3) × 180 = 120 cm³!' },
      { text: 'Sebuah kapsul obat terdiri atas tabung (r = 3 mm, t = 10 mm) dengan dua belahan bola di kedua ujungnya (total 1 bola utuh, r = 3 mm). Volume kapsul dalam π adalah...', opts: ['126π mm³', '90π mm³', '36π mm³', '108π mm³'], ans: 0, exp: 'V_tabung = π(3²)(10) = 90π; V_bola = (4/3)π(3³) = 36π → Total = 126π mm³.' },
      { text: 'Kerucut dan tabung memiliki jari-jari dan tinggi yang SAMA. Jika volume kerucut 50 cm³, volume tabung adalah...', opts: ['150 cm³', '100 cm³', '25 cm³', '200 cm³'], ans: 0, exp: 'V_tabung = 3 × V_kerucut = 150 cm³.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-05', subSeq: 9,
    objectives: ['Siswa mampu menyelesaikan soal penerapan bangun ruang (tandon air, kenaikan tinggi air saat bola dimasukkan, kebutuhan bahan cat/karton).'],
    materialTitle: 'Soal Penerapan Bangun Ruang',
    blocks: [
      { type: 'worked_example', level: 'Kenaikan Air di Tabung', question: 'Tabung berjari-jari 10 cm berisi air. Dimasukkan 3 kelereng bola besi berjari-jari 3 cm hingga tenggelam penuh. Berapa cm kenaikan permukaan air?', steps: ['Volume 3 bola = 3 × (4/3)π(3³) = 4π × 27 = 108π cm³.', 'Volume kenaikan air = πR²·Δt = π(10²)·Δt = 100π·Δt.', '100π·Δt = 108π → Δt = 1,08 cm!'], answer: '1,08 cm' },
    ],
    activityTitle: 'Latihan: Penerapan Bangun Ruang',
    questions: [
      { text: 'Sebuah tandon air berbentuk tabung berdiameter 140 cm (r = 70 cm = 7 dm) dan tinggi 10 dm (π = 22/7). Kapasitas penuh tandon dalam liter (1 liter = 1 dm³) adalah...', opts: ['1.540 liter', '154 liter', '3.080 liter', '770 liter'], ans: 0, exp: 'V = (22/7) × 7 × 7 × 10 = 1.540 dm³ = 1.540 liter.' },
      { text: 'Ibu membuat tumpeng kerucut berdiameter 28 cm (r=14 cm) dan tinggi 30 cm (π=22/7). Volume nasi tumpeng adalah...', opts: ['6.160 cm³', '18.480 cm³', '3.080 cm³', '1.540 cm³'], ans: 0, exp: 'V = ⅓ × (22/7) × 14 × 14 × 30 = 616 × 10 = 6.160 cm³.' },
      { text: 'Tabung berjari-jari 6 cm berisi air, lalu dimasukkan 1 bola pejal berjari-jari 3 cm hingga tenggelam. Tinggi permukaan air naik sebesar...', opts: ['1 cm', '2 cm', '3 cm', '0,5 cm'], ans: 0, exp: 'V_bola = (4/3)π(27) = 36π. π(6²)·Δt = 36π → 36π·Δt = 36π → Δt = 1 cm!' },
    ],
  },

  // BAB 6: HUBUNGAN ANTARSUDUT DAN GEOMETRI (5 sub)
  {
    topicCode: 'MAT-SMP9-06', subSeq: 1,
    objectives: ['Siswa mampu mengenali 8 sudut yang terbentuk saat dua garis sejajar dipotong garis transversal.'],
    materialTitle: 'Garis Sejajar dan Garis Transversal',
    blocks: [
      { type: 'text', text: 'Ketika dua garis sejajar (k // l) dipotong satu garis melintang (garis transversal m), terbentuk 8 sudut yang hanya memiliki DUA nilai besar sudut saja (lancip semua sama besar, tumpul semua sama besar, dan lancip + tumpul = 180°)!' },
    ],
    activityTitle: 'Latihan: Garis Sejajar & Transversal',
    questions: [
      { text: 'Jika dua garis sejajar dipotong garis transversal dan salah satu sudut yang terbentuk adalah 65°, maka besar sudut lain yang TIDAK sama dengan 65° pasti...', opts: ['115° (pelurusnya: 180° − 65°)', '25°', '125°', '90°'], ans: 0, exp: 'Setiap sudut tumpul adalah pelurus dari sudut lancipnya (180° − 65° = 115°).' },
      { text: 'Dua garis pada satu bidang datar yang tidak pernah berpotongan walau diperpanjang tak terhingga disebut garis...', opts: ['Sejajar (//)', 'Berpotongan tegak lurus', 'Bersilangan', 'Berimpit'], ans: 0, exp: 'Garis sejajar memiliki jarak konstan dan kemiringan sama.' },
      { text: 'Garis yang memotong dua atau lebih garis lain di titik-titik berbeda disebut garis...', opts: ['Transversal', 'Sumbu simetri', 'Apotema', 'Diameter'], ans: 0, exp: 'Garis pemotong sejajar disebut garis transversal.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-06', subSeq: 2,
    objectives: ['Siswa mampu membedakan pasangan sudut sehadap, dalam berseberangan, luar berseberangan, dalam sepihak, luar sepihak, dan bertolak belakang.'],
    materialTitle: 'Hubungan Antarsudut',
    blocks: [
      { type: 'table', title: 'Rangkuman Pasangan Sudut Garis Sejajar', headers: ['Hubungan Sudut', 'Sifat Besar Sudutnya'], rows: [
        ['Sehadap, Dalam Berseberangan, Luar Berseberangan, Bertolak Belakang', 'SAMA BESAR (∠A = ∠B)'],
        ['Dalam Sepihak, Luar Sepihak, Berpelurus (Linear)', 'BERJUMLAH 180° (∠A + ∠B = 180°)'],
        ['Berpenyiku (Komplemen)', 'BERJUMLAH 90° (∠A + ∠B = 90°)'],
      ]},
    ],
    activityTitle: 'Latihan: Hubungan Antarsudut',
    questions: [
      { text: 'Sudut A = (3x + 15)° dan sudut B = (5x − 25)° adalah pasangan sudut DALAM BERSEBERANGAN pada garis sejajar. Nilai x adalah...', opts: ['20°', '25°', '15°', '10°'], ans: 0, exp: 'Dalam berseberangan SAMA BESAR: 3x + 15 = 5x − 25 → 40 = 2x → x = 20.' },
      { text: 'Sudut P = (2x + 10)° dan sudut Q = (3x + 20)° adalah pasangan sudut DALAM SEPIHAK. Nilai x adalah...', opts: ['30°', '20°', '10°', '36°'], ans: 0, exp: 'Dalam sepihak = 180°: (2x+10) + (3x+20) = 180 → 5x + 30 = 180 → 5x = 150 → x = 30.' },
      { text: 'Besar penyiku dari sudut 38° adalah...', opts: ['52°', '142°', '62°', '42°'], ans: 0, exp: 'Berpenyiku = 90° → 90° − 38° = 52°.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-06', subSeq: 3,
    objectives: ['Siswa mampu menggunakan teorema jumlah sudut dalam segitiga (180°) dan teorema sudut luar segitiga.'],
    materialTitle: 'Jumlah Sudut Dalam dan Sudut Luar Segitiga',
    blocks: [
      { type: 'formula', name: 'Teorema Sudut Luar Segitiga', expression: '∠Sudut Luar = Jumlah 2 Sudut Dalam yang TIDAK Berpelurus dengannya', note: 'Sangat cepat! Tidak perlu mencari sudut ketiganya dulu lalu kurangi 180°!' },
    ],
    activityTitle: 'Latihan: Sudut Segitiga',
    questions: [
      { text: 'Pada ΔABC, ∠A = 45° dan ∠B = 65°. Besar sudut luar di titik C adalah...', opts: ['110°', '70°', '120°', '100°'], ans: 0, exp: 'Sudut luar C = ∠A + ∠B = 45° + 65° = 110°!' },
      { text: 'Besar ketiga sudut sebuah segitiga berbanding 2 : 3 : 4. Besar sudut TERBESAR segitiga itu adalah...', opts: ['80°', '60°', '40°', '90°'], ans: 0, exp: '4/(2+3+4) × 180° = (4/9) × 180° = 80°.' },
      { text: 'Pada segitiga siku-siku, jumlah kedua sudut lancipnya selalu sama dengan...', opts: ['90° (saling berpenyiku)', '180°', '60°', '120°'], ans: 0, exp: '180° − 90° = 90°.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-06', subSeq: 4,
    objectives: ['Siswa mampu menentukan sudut yang belum diketahui pada konfigurasi garis patah (zigzag di antara garis sejajar) dengan garis bantu.'],
    materialTitle: 'Menentukan Sudut Tak Diketahui dengan Garis Bantu',
    blocks: [
      { type: 'tip', text: 'Trik soal sudut zigzag di antara dua garis sejajar: TARIK GARIS BANTU sejajar melewati titik sudut patah di tengah! Maka sudut tengah otomatis terbagi menjadi jumlah 2 sudut dalam berseberangan!' },
    ],
    activityTitle: 'Latihan: Sudut Tak Diketahui',
    questions: [
      { text: 'Di antara dua garis sejajar atas-bawah terbentuk garis patah ke kanan (membentuk huruf M/V tidur) dengan sudut lancip atas 35° dan sudut lancip bawah 42°. Besar sudut lancip di titik patah tengah adalah...', opts: ['77°', '103°', '7°', '84°'], ans: 0, exp: 'Tarik garis bantu sejajar: 35° + 42° = 77°!' },
      { text: 'Pada sudut berpelurus terbagi tiga: 2x°, 3x°, dan 4x°. Besar sudut terbesarnya adalah...', opts: ['80°', '60°', '40°', '100°'], ans: 0, exp: '9x = 180 → x = 20° → sudut terbesar = 4(20°) = 80°.' },
      { text: 'Jumlah sudut dalam segi-n beraturan adalah (n − 2) × 180°. Maka jumlah sudut dalam segi enam (heksagon) adalah...', opts: ['720°', '540°', '360°', '900°'], ans: 0, exp: '(6 − 2) × 180° = 4 × 180° = 720° (tiap sudut beraturannya 120°).' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-06', subSeq: 5,
    objectives: ['Siswa mampu menerapkan hubungan sudut dalam navigasi arah mata angin, sudut jarum jam, dan rangka bangunan.'],
    materialTitle: 'Penerapan Geometri Sudut',
    blocks: [
      { type: 'formula', name: 'Sudut Terkecil Dua Jarum Jam (pukul H : M)', expression: 'θ = | 30·H − 5,5·M |', note: 'Setiap 1 angka di jam = 30° (360°÷12). Jika θ > 180°, sudut terkecilnya = 360° − θ!' },
    ],
    activityTitle: 'Latihan: Penerapan Geometri Sudut',
    questions: [
      { text: 'Besar sudut terkecil yang dibentuk jarum pendek dan jarum panjang jam tepat pukul 04.00 adalah...', opts: ['120°', '90°', '150°', '60°'], ans: 0, exp: '4 × 30° = 120°.' },
      { text: 'Besar sudut terkecil antara jarum jam pada pukul 03.30 adalah...', opts: ['75°', '90°', '105°', '60°'], ans: 0, exp: '|30(3) − 5,5(30)| = |90 − 165| = 75° (jarum pendek sudah bergeser setengah jalan antara 3 dan 4!).' },
      { text: 'Mengapa konstruksi jembatan rangka baja dan kuda-kuda atap rumah banyak membentuk pola SEGITIGA?', opts: ['Karena segitiga adalah bangun paling kaku/stabil yang tidak berubah bentuk bila sisinya tetap', 'Karena jumlah sudutnya 360°', 'Supaya tidak butuh besi', 'Hanya hiasan'], ans: 0, exp: 'Kekakuan struktural segitiga (rigidity) menopang beban sangat kuat.' },
    ],
  },

  // BAB 7: TRANSFORMASI GEOMETRI (6 sub)
  {
    topicCode: 'MAT-SMP9-07', subSeq: 1,
    objectives: ['Siswa mampu mereviu koordinat Kartesius dan memahami 4 jenis transformasi geometri (translasi, refleksi, rotasi, dilatasi).'],
    materialTitle: 'Koordinat Kartesius & Pengantar Transformasi',
    blocks: [
      { type: 'table', title: '4 Jenis Transformasi Geometri SMP', headers: ['Transformasi', 'Arti Singkat', 'Ukuran Berubah?'], rows: [
        ['Translasi', 'Pergeseran lurus', 'TIDAK (kongruen)'],
        ['Refleksi', 'Pencerminan', 'TIDAK (kongruen)'],
        ['Rotasi', 'Perputaran', 'TIDAK (kongruen)'],
        ['Dilatasi', 'Perbesaran / perkecilan skala k', 'YA (sebangun!)'],
      ]},
    ],
    activityTitle: 'Latihan: Pengantar Transformasi',
    questions: [
      { text: 'Manakah transformasi geometri yang MENGUBAH UKURAN bangun datar (menghasilkan bangun sebangun, bukan kongruen bila k ≠ ±1)?', opts: ['Dilatasi', 'Translasi', 'Refleksi', 'Rotasi'], ans: 0, exp: 'Dilatasi memperbesar atau memperkecil bangun dengan faktor skala k.' },
      { text: 'Gerakan pintu putar hotel atau kincir angin pada porosnya merupakan contoh transformasi...', opts: ['Rotasi (perputaran)', 'Translasi', 'Refleksi', 'Dilatasi'], ans: 0, exp: 'Berputar mengelilingi titik pusat dengan sudut tertentu.' },
      { text: 'Bayangan titik A setelah mengalami satu kali transformasi lazim ditulis dengan notasi...', opts: ['A\' (dibaca A aksen)', 'A²', '1/A', '−A'], ans: 0, exp: 'Notasi aksen (A\') menandakan titik bayangan hasil transformasi.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-07', subSeq: 2,
    objectives: ['Siswa mampu menentukan bayangan titik dan bangun hasil translasi T(a, b).'],
    materialTitle: 'Translasi (Pergeseran)',
    blocks: [
      { type: 'formula', name: 'Rumus Translasi T(a, b)', expression: 'P(x, y)  —T(a, b)→  P\'(x + a,  y + b)', note: 'a > 0 geser kanan, a < 0 geser kiri; b > 0 geser atas, b < 0 geser bawah!' },
    ],
    activityTitle: 'Latihan: Translasi',
    questions: [
      { text: 'Bayangan titik A(3, −5) oleh translasi T(−2, 7) adalah...', opts: ['A\'(1, 2)', 'A\'(5, −12)', 'A\'(−6, −35)', 'A\'(1, −12)'], ans: 0, exp: '(3 + (−2), −5 + 7) = (1, 2).' },
      { text: 'Jika titik P(−4, 2) digeser 6 satuan ke kanan dan 5 satuan ke bawah, koordinat bayangannya adalah...', opts: ['(2, −3)', '(−10, 7)', '(2, 7)', '(−10, −3)'], ans: 0, exp: 'T(6, −5) → (−4+6, 2−5) = (2, −3).' },
      { text: 'Titik K(2, 5) ditranslasikan oleh T(a, b) menghasilkan K\'(−1, 9). Komponen translasi T(a, b) adalah...', opts: ['T(−3, 4)', 'T(3, −4)', 'T(1, 14)', 'T(−3, −4)'], ans: 0, exp: 'a = −1 − 2 = −3; b = 9 − 5 = 4.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-07', subSeq: 3,
    objectives: ['Siswa mampu menentukan bayangan titik hasil refleksi terhadap sumbu-X, sumbu-Y, titik asal O(0,0), garis y=x, y=−x, x=h, dan y=k.'],
    materialTitle: 'Refleksi (Pencerminan)',
    blocks: [
      { type: 'table', title: 'Rumus Cepat Refleksi P(x, y)', headers: ['Cermin', 'Bayangan P\''], rows: [
        ['Sumbu-X', '(x, −y)   — y ganti tanda!'],
        ['Sumbu-Y', '(−x, y)   — x ganti tanda!'],
        ['Titik Asal O(0, 0)', '(−x, −y)'],
        ['Garis y = x', '(y, x)   — tukar posisi!'],
        ['Garis x = h  |  Garis y = k', '(2h − x, y)   |   (x, 2k − y)'],
      ]},
    ],
    activityTitle: 'Latihan: Refleksi',
    questions: [
      { text: 'Bayangan titik B(4, −3) jika dicerminkan terhadap SUMBU-X adalah...', opts: ['B\'(4, 3)', 'B\'(−4, −3)', 'B\'(−4, 3)', 'B\'(−3, 4)'], ans: 0, exp: 'Refleksi sumbu-X: (x, −y) → (4, 3).' },
      { text: 'Bayangan titik C(−2, 5) jika dicerminkan terhadap garis y = x adalah...', opts: ['C\'(5, −2)', 'C\'(2, 5)', 'C\'(−2, −5)', 'C\'(−5, 2)'], ans: 0, exp: 'Refleksi y = x menukar posisi: (y, x) = (5, −2).' },
      { text: 'Bayangan titik D(1, 4) dicerminkan terhadap garis x = 5 adalah...', opts: ['D\'(9, 4)', 'D\'(−1, 4)', 'D\'(6, 4)', 'D\'(1, 6)'], ans: 0, exp: '(2h − x, y) = (2(5) − 1, 4) = (9, 4).' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-07', subSeq: 4,
    objectives: ['Siswa mampu menentukan bayangan titik hasil rotasi pusat O(0,0) sebesar +90° (CCW), −90° (CW), dan 180°.'],
    materialTitle: 'Rotasi (Perputaran)',
    blocks: [
      { type: 'table', title: 'Rumus Rotasi Pusat O(0, 0) pada P(x, y)', headers: ['Sudut Rotasi', 'Arah', 'Bayangan P\''], rows: [
        ['+90° atau −270°', 'Berlawanan jarum jam (CCW)', '(−y, x)'],
        ['−90° atau +270°', 'Searah jarum jam (CW)', '(y, −x)'],
        ['±180°', 'Setengah putaran', '(−x, −y)'],
      ]},
    ],
    activityTitle: 'Latihan: Rotasi',
    questions: [
      { text: 'Bayangan titik A(3, 5) setelah dirotasi +90° (berlawanan jarum jam) dengan pusat O(0, 0) adalah...', opts: ['A\'(−5, 3)', 'A\'(5, −3)', 'A\'(−3, −5)', 'A\'(3, −5)'], ans: 0, exp: 'Rotasi +90° pusat O: (x, y) → (−y, x) = (−5, 3).' },
      { text: 'Bayangan titik B(−4, 2) setelah dirotasi 180° pusat O(0, 0) adalah...', opts: ['B\'(4, −2)', 'B\'(2, −4)', 'B\'(−2, 4)', 'B\'(4, 2)'], ans: 0, exp: 'Rotasi 180°: (−x, −y) = (4, −2).' },
      { text: 'Bayangan titik C(2, −6) dirotasi −90° (searah jarum jam) pusat O(0, 0) adalah...', opts: ['C\'(−6, −2)', 'C\'(6, 2)', 'C\'(−2, 6)', 'C\'(6, −2)'], ans: 0, exp: 'Rotasi −90°: (y, −x) = (−6, −2).' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-07', subSeq: 5,
    objectives: ['Siswa mampu menentukan bayangan titik dan luas bangun hasil dilatasi [O, k].'],
    materialTitle: 'Dilatasi (Perkalian Skala)',
    blocks: [
      { type: 'formula', name: 'Rumus Dilatasi Pusat O(0, 0) dengan Skala k', expression: 'P(x, y)  —[O, k]→  P\'(k·x,  k·y)    |    Luas\' = k² × Luas Awal', note: '|k| > 1 diperbesar; 0 < |k| < 1 diperkecil; k < 0 arah bayangan berlawanan melewati titik pusat!' },
    ],
    activityTitle: 'Latihan: Dilatasi',
    questions: [
      { text: 'Bayangan titik P(−3, 4) hasil dilatasi pusat O(0, 0) dengan faktor skala k = 3 adalah...', opts: ['P\'(−9, 12)', 'P\'(0, 7)', 'P\'(−1, 1)', 'P\'(9, −12)'], ans: 0, exp: '(3×(−3), 3×4) = (−9, 12).' },
      { text: 'Sebuah segitiga memiliki luas 12 cm². Setelah didilatasi dengan faktor skala k = 2, luas bayangan segitiga tersebut menjadi...', opts: ['48 cm²', '24 cm²', '14 cm²', '6 cm²'], ans: 0, exp: 'Luas\' = k² × Luas = 2² × 12 = 4 × 12 = 48 cm².' },
      { text: 'Jika titik A(8, −12) didilatasi [O, k] menghasilkan A\'(2, −3), maka faktor skala k adalah...', opts: ['¼', '4', '-¼', '½'], ans: 0, exp: 'k = 2 / 8 = ¼.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-07', subSeq: 6,
    objectives: ['Siswa mampu melakukan komposisi (gabungan berurutan) 2 transformasi pada titik atau titik sudut bangun datar.'],
    materialTitle: 'Komposisi Transformasi Titik dan Bangun Datar',
    blocks: [
      { type: 'worked_example', level: 'Transformasi Berurutan', question: 'Titik A(2, 3) dicerminkan terhadap sumbu-Y, lalu ditranslasikan T(4, −1). Tentukan A\'\'!', steps: ['Tahap 1 (Refleksi sumbu-Y): A(2, 3) → A\'(−2, 3).', 'Tahap 2 (Translasi T(4, −1)): A\'(−2, 3) → A\'\'(−2+4, 3−1) = (2, 2)!'], answer: 'A\'\'(2, 2)' },
    ],
    activityTitle: 'Latihan: Komposisi Transformasi',
    questions: [
      { text: 'Titik P(1, −2) ditranslasikan T(3, 5) lalu dicerminkan terhadap sumbu-X. Koordinat bayangan akhir P\'\' adalah...', opts: ['(4, −3)', '(4, 3)', '(−4, 3)', '(−4, −3)'], ans: 0, exp: 'Translasi → (4, 3); refleksi sumbu-X → (4, −3).' },
      { text: 'Persegi panjang dengan titik sudut (0,0), (3,0), (3,2), (0,2) didilatasi [O, 3]. Keliling bayangannya adalah...', opts: ['30 satuan', '10 satuan', '90 satuan', '18 satuan'], ans: 0, exp: 'Keliling awal = 2(3+2) = 10 → Keliling\' = |k| × 10 = 3 × 10 = 30 satuan!' },
      { text: 'Titik Q(2, 4) didilatasi [O, ½] kemudian dirotasi 180° pusat O. Bayangan akhirnya adalah...', opts: ['(−1, −2)', '(1, 2)', '(−2, −1)', '(−4, −8)'], ans: 0, exp: 'Dilatasi ½ → (1, 2); rotasi 180° → (−1, −2).' },
    ],
  },

  // BAB 8: STATISTIKA LANJUTAN (6 sub)
  {
    topicCode: 'MAT-SMP9-08', subSeq: 1,
    objectives: ['Siswa mampu menganalisis hubungan populasi, sampel, dan mengidentifikasi potensi bias dalam survei data.'],
    materialTitle: 'Populasi, Sampel, dan Menghindari Bias',
    blocks: [
      { type: 'text', text: 'Kesimpulan statistika dari sampel HANYA valid mewakili populasi apabila sampel diambil secara OBJEKTIF tanpa bias (misalnya tidak hanya menanyai orang yang kebetulan berada di satu tempat khusus saja).' },
    ],
    activityTitle: 'Latihan: Populasi & Bias Sampel',
    questions: [
      { text: 'Untuk mengetahui rata-rata uang saku seluruh 900 siswa SMP di sebuah kecamatan, pengambilan sampel yang PALING tidak bias adalah...', opts: ['Memilih secara acak proporsional dari tiap kelas di beberapa sekolah berbeda di kecamatan tersebut', 'Hanya menanyai 5 teman dekat sendiri', 'Hanya menanyai siswa yang membeli barang termahal di kantin', 'Menebak dari data 10 tahun lalu'], ans: 0, exp: 'Sampel acak proporsional mewakili keragaman populasi.' },
      { text: 'Survei kepuasan fasilitas perpustakaan dilakukan dengan mewawancarai 50 pengunjung perpustakaan saja. Kelemahan sampel ini untuk menyimpulkan pendapat SELURUH siswa sekolah adalah...', opts: ['Siswa yang jarang/tidak pernah ke perpustakaan (beserta alasannya) tidak terwakili', 'Jumlahnya terlalu banyak', 'Perpustakaan terlalu ramai', 'Tidak ada kelemahan'], ans: 0, exp: 'Selection bias mengabaikan kelompok non-pengunjung.' },
      { text: 'Jika sebuah pabrik mengecek mutu 100% seluruh produknya tanpa terkecuali, kegiatan itu disebut...', opts: ['Sensus (pemeriksaan seluruh populasi)', 'Sampling acak', 'Estimasi kasar', 'Modus'], ans: 0, exp: 'Sensus meneliti setiap anggota populasi.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-08', subSeq: 2,
    objectives: ['Siswa mampu mengenal 3 teknik pengambilan sampel sederhana (acak sederhana, sistematis, dan berstrata/berlapis).'],
    materialTitle: 'Teknik Pengambilan Sampel Sederhana',
    blocks: [
      { type: 'table', title: '3 Teknik Sampling Dasar SMP', headers: ['Teknik Sampling', 'Cara Kerja Singkat'], rows: [
        ['Acak Sederhana (Simple Random)', 'Diundi secara acak setara (seperti arisan/nomor acak komputer)'],
        ['Sistematis (Systematic)', 'Memilih tiap kelipatan ke-k dari daftar urut (misal absen no. 3, 8, 13, 18, ...)'],
        ['Berstrata (Stratified)', 'Membagi populasi jadi lapisan/strata dulu (misal kelas 7, 8, 9), lalu ambil acak proporsional tiap kelas'],
      ]},
    ],
    activityTitle: 'Latihan: Teknik Pengambilan Sampel',
    questions: [
      { text: 'Panitia OSIS ingin menyurvei 60 siswa dari 300 siswa dengan mengambil 20 siswa acak dari kelas 7, 20 dari kelas 8, dan 20 dari kelas 9. Teknik ini disebut...', opts: ['Stratified random sampling (sampel acak berstrata)', 'Sampling sistematis', 'Sensus', 'Convenience sampling'], ans: 0, exp: 'Populasi dibagi menurut tingkatan kelas (strata) dulu sebelum diacak.' },
      { text: 'Dari daftar 100 siswa bernomor urut 1–100, guru memilih nomor 5, 15, 25, 35, ..., 95 (tiap kelipatan 10). Teknik ini disebut...', opts: ['Sampling sistematis', 'Sampling berstrata', 'Sensus penuh', 'Acak murni'], ans: 0, exp: 'Memilih dengan interval tetap k = 10 dari daftar berurut.' },
      { text: 'Mengundi 10 nama dari kotak berisi seluruh nama 32 siswa kelas 9A secara adil merupakan contoh...', opts: ['Simple random sampling (sampel acak sederhana)', 'Sensus', 'Sampel bias', 'Stratified'], ans: 0, exp: 'Setiap siswa punya peluang terpilih yang sama persis.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-08', subSeq: 3,
    objectives: ['Siswa mampu memilih penyajian data tepat (tabel, diagram batang, garis, lingkaran, histogram/line plot) dan mendeteksi grafik menyesatkan.'],
    materialTitle: 'Penyajian Data & Mendeteksi Grafik Menyesatkan',
    blocks: [
      { type: 'misconception', wrong: 'Semua diagram batang yang batangnya tampak 2 kali lebih tinggi pasti nilainya 2 kali lebih besar.', right: 'CEK SUMBU VERTIKAL (Y)! Jika sumbu Y dipotong mulai dari angka 90 (bukan dari 0), selisih kecil 92 vs 94 bisa tampak seolah-olah 2 kali lipat! Selalu periksa skala sumbu!' },
    ],
    activityTitle: 'Latihan: Penyajian Data',
    questions: [
      { text: 'Mengapa memotong sumbu vertikal (tidak dimulai dari 0) pada diagram batang dapat menyesatkan pembaca?', opts: ['Membuat perbedaan kecil antarbatang terlihat secara visual jauh lebih ekstrem daripada angka sebenarnya', 'Membuat angka jadi hilang', 'Mengubah modus', 'Menghapus kategori'], ans: 0, exp: 'Sumbu terpotong mendistorsi perbandingan proporsi tinggi batang.' },
      { text: 'Untuk membandingkan penjualan 2 toko (Toko A dan Toko B) secara berdampingan pada bulan Jan–Jun, diagram paling informatif adalah...', opts: ['Diagram batang ganda atau diagram garis ganda', 'Satu diagram lingkaran saja', 'Diagram panah', 'Tabel tanpa angka'], ans: 0, exp: 'Diagram ganda memudahkan perbandingan langsung dua seri data.' },
      { text: 'Pada diagram lingkaran, total persentase seluruh sektor harus 100% dan total sudut pusatnya harus...', opts: ['360°', '180°', '100°', '90°'], ans: 0, exp: 'Satu lingkaran penuh = 360°.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-08', subSeq: 4,
    objectives: ['Siswa mampu menganalisis efek pencilan (outlier) terhadap mean, median, modus, kuartil, dan jangkauan.'],
    materialTitle: 'Mean, Median, Modus, Kuartil, & Efek Pencilan (Outlier)',
    blocks: [
      { type: 'tip', text: 'OUTLIER (pencilan) adalah 1 data ekstrem yang jauh berbeda dari data lainnya (misal 6, 7, 7, 8, 8, 9, 100). Pencilan SANGAT MENARIK MEAN menjadi tidak wajar, sedangkan MEDIAN tetap stabil mewakili pusat data!' },
    ],
    activityTitle: 'Latihan: Pemusatan & Pencilan',
    questions: [
      { text: 'Data gaji 5 pegawai di kantor kecil (juta Rp): 4, 4, 5, 5, 32. Ukuran pemusatan yang PALING JUJUR mewakili gaji mayoritas pegawai adalah...', opts: ['Median (5 juta), karena mean (10 juta) tertarik tajam oleh outlier 32 juta', 'Mean (10 juta)', 'Jangkauan (28 juta)', 'Nilai maksimum (32 juta)'], ans: 0, exp: 'Median tahan terhadap nilai ekstrem (outlier).' },
      { text: 'Data terurut: 10, 12, 14, 15, 18, 20, 22, 25. Jangkauan interkuartil (IQR = Q3 − Q1) data tersebut adalah...', opts: ['8', '15', '12', '6'], ans: 0, exp: 'Kiri {10,12,14,15} → Q1 = 13; Kanan {18,20,22,25} → Q3 = 21 → IQR = 21 − 13 = 8.' },
      { text: 'Jika setiap nilai ulangan di kelas ditambah 5 poin bonus oleh guru, maka perubahan pada MEAN dan JANGKAUAN adalah...', opts: ['Mean bertambah 5, sedangkan jangkauan TETAP tidak berubah', 'Keduanya bertambah 5', 'Mean tetap, jangkauan bertambah 5', 'Keduanya dikali 5'], ans: 0, exp: 'Menambah konstanta menggeser pusat (mean +5), namun selisih max−min (jangkauan) tetap!' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-08', subSeq: 5,
    objectives: ['Siswa mampu membandingkan dua kelompok data menggunakan mean/median (pemusatan) dan jangkauan/IQR (konsistensi).'],
    materialTitle: 'Membandingkan Dua Kelompok Data',
    blocks: [
      { type: 'worked_example', level: 'Memilih Atlet Panahan', question: 'Skor 5 panahan Atlet A: 7, 8, 8, 8, 9 (Mean=8, R=2). Atlet B: 4, 6, 10, 10, 10 (Mean=8, R=6). Siapa lebih konsisten?', steps: ['Keduanya punya Mean sama (8).', 'Jangkauan A (2) jauh lebih kecil dari B (6) → Atlet A jauh lebih konsisten dan stabil!'], answer: 'Atlet A lebih konsisten' },
    ],
    activityTitle: 'Latihan: Membandingkan Dua Data',
    questions: [
      { text: 'Kelas 9A memiliki rata-rata nilai IPA 82 (jangkauan 12); Kelas 9B rata-rata 82 (jangkauan 38). Kesimpulan yang paling tepat adalah...', opts: ['Kemampuan rata-rata kedua kelas setara, tetapi penguasaan siswa Kelas 9A jauh lebih merata', 'Kelas 9B pasti lebih pintar semua', 'Nilai tertinggi pasti di 9A', 'Tidak bisa dibandingkan'], ans: 0, exp: 'Jangkauan kecil menunjukkan penyebaran nilai lebih rapat/homogen.' },
      { text: 'Rata-rata nilai 12 siswa putri adalah 85, sedangkan 8 siswa putra adalah 80. Rata-rata gabungan seluruh 20 siswa adalah...', opts: ['83', '82,5', '84', '81'], ans: 0, exp: '(12×85 + 8×80) / 20 = (1020 + 640) / 20 = 1660 / 20 = 83.' },
      { text: 'Saat membandingkan kinerja dua kelompok data, melihat MEAN saja sering kurang cukup sehingga kita perlu juga memeriksa...', opts: ['Ukuran penyebaran (jangkauan/IQR) serta median untuk melihat kestabilan dan sebaran data', 'Hanya nilai terkecil', 'Warna tabel', 'Urutan abjad nama'], ans: 0, exp: 'Pemusatan + penyebaran memberi gambaran utuh.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-08', subSeq: 6,
    objectives: ['Siswa mampu menginterpretasikan hasil analisis data statistika untuk mengambil keputusan logis berbasis bukti.'],
    materialTitle: 'Interpretasi Hasil Statistika untuk Keputusan',
    blocks: [
      { type: 'text', text: 'Tujuan akhir statistika bukan sekadar menghitung rumus, melainkan MENAFSIRKAN DATA untuk pengambilan keputusan cerdas — misalnya menentukan stok dagangan (modus), mengevaluasi keberhasilan program belajar (kenaikan mean & median), atau mengidentifikasi kelompok siswa yang perlu bimbingan tambahan!' },
    ],
    activityTitle: 'Latihan: Interpretasi Data',
    questions: [
      { text: 'Setelah program belajar kelompok diterapkan 2 bulan, median nilai kelas naik dari 72 menjadi 84 dan jangkauan menyusut dari 40 menjadi 18. Interpretasi paling tepat adalah...', opts: ['Program sangat efektif: capaian siswa meningkat sekaligus ketimpangan antarsiswa berkurang', 'Program gagal total', 'Nilai siswa turun', 'Siswa makin tidak merata'], ans: 0, exp: 'Median naik = pencapaian membaik; jangkauan mengecil = siswa lemah ikut terangkat.' },
      { text: 'Data pengunjung perpustakaan selama seminggu: Sen(25), Sel(28), Rab(30), Kam(22), Jum(15), Sab(45). Untuk menambah petugas piket tambahan 1 hari saja, hari paling tepat adalah...', opts: ['Sabtu (karena pengunjung memuncak paling tinggi yaitu 45 orang)', 'Jumat', 'Kamis', 'Senin'], ans: 0, exp: 'Keputusan berbasis data menempatkan sumber daya di hari puncak beban.' },
      { text: 'Pernyataan statistika yang BENAR dan hati-hati adalah...', opts: ['"Berdasarkan sampel acak 100 siswa, 68% menyukai pembelajaran visual interaktif."', '"100% seluruh anak di dunia pasti suka."', '"Semua data pasti sama selamanya."', '"Angka tidak perlu dicek sumbernya."'], ans: 0, exp: 'Interpretasi ilmiah selalu jujur menyebut lingkup sampel dan datanya.' },
    ],
  },

  // BAB 9: PELUANG (7 sub)
  {
    topicCode: 'MAT-SMP9-09', subSeq: 1,
    objectives: ['Siswa mampu menentukan ruang sampel (S) dan banyak anggota ruang sampel n(S) pada koin, dadu, dan gabungannya.'],
    materialTitle: 'Ruang Sampel (S)',
    blocks: [
      { type: 'table', title: 'Banyak Ruang Sampel n(S) Langganan Ujian', headers: ['Percobaan', 'Banyak Ruang Sampel n(S)'], rows: [
        ['1 koin (A, G)', '2'],
        ['2 koin (AA, AG, GA, GG)', '2² = 4'],
        ['3 koin', '2³ = 8'],
        ['1 dadu bersisi 6', '6'],
        ['2 dadu serentak', '6 × 6 = 36'],
        ['1 koin + 1 dadu', '2 × 6 = 12'],
      ]},
    ],
    activityTitle: 'Latihan: Ruang Sampel',
    questions: [
      { text: 'Banyak anggota ruang sampel n(S) pada pelemparan 2 koin dan 1 dadu secara bersamaan adalah...', opts: ['24', '12', '10', '36'], ans: 0, exp: 'n(S) = 2 × 2 × 6 = 24.' },
      { text: 'Banyak anggota ruang sampel pada pelemparan 2 buah dadu bermata 6 secara bersamaan adalah...', opts: ['36', '12', '18', '64'], ans: 0, exp: '6 × 6 = 36 pasangan mata dadu.' },
      { text: 'Himpunan semua hasil yang mungkin terjadi dari suatu percobaan acak disebut...', opts: ['Ruang sampel (S)', 'Kejadian pasti', 'Frekuensi harapan', 'Modus'], ans: 0, exp: 'Ruang sampel memuat seluruh kemungkinan hasil percobaan.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-09', subSeq: 2,
    objectives: ['Siswa mampu mendaftar seluruh titik sampel menggunakan diagram pohon dan tabel silang.'],
    materialTitle: 'Titik Sampel, Diagram Pohon, dan Tabel',
    blocks: [
      { type: 'text', text: 'TITIK SAMPEL adalah setiap anggota tunggal di dalam ruang sampel. Contoh pada 2 koin: S = {AA, AG, GA, GG} → titik sampelnya ada 4 buah: AA, AG, GA, dan GG. Gunakan DIAGRAM POHON atau TABEL SILANG agar tidak ada titik sampel yang terlewat!' },
    ],
    activityTitle: 'Latihan: Titik Sampel',
    questions: [
      { text: 'Pada pelemparan 3 koin sekaligus, titik sampel yang memuat TEPAT 2 Angka (A) dan 1 Gambar (G) adalah...', opts: ['{AAG, AGA, GAA} (ada 3 titik sampel)', '{AAG, GAA} (2 titik sampel)', '{AAA, GGG}', '{AGG, GAG, GGA}'], ans: 0, exp: 'Posisi 1 huruf G bisa di belakang, tengah, atau depan → 3 titik sampel.' },
      { text: 'Pada pelemparan 2 dadu, pasangan titik sampel yang berjumlah 7 ada sebanyak...', opts: ['6 titik sampel: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1)', '3 titik sampel', '5 titik sampel', '7 titik sampel'], ans: 0, exp: 'Jumlah 7 merupakan jumlah paling banyak kemungkinannya pada 2 dadu (6 pasang).' },
      { text: 'Pada kantong berisi 3 bola merah dan 2 bola biru, jika diambil 1 bola secara acak, banyak seluruh titik sampelnya adalah...', opts: ['5', '2', '6', '3'], ans: 0, exp: 'Total ada 5 bola yang mungkin terambil.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-09', subSeq: 3,
    objectives: ['Siswa mampu memahami konsep kejadian (himpunan bagian S), kejadian mustahil, kejadian pasti, dan kejadian komplemen.'],
    materialTitle: 'Kejadian dan Komplemen Kejadian',
    blocks: [
      { type: 'formula', name: 'Rentang Nilai Peluang & Komplemen', expression: '0 ≤ P(A) ≤ 1    |    P(Aᶜ) = 1 − P(A)', note: 'P(A) = 0 → kejadian MUSTAHIL (muncul mata dadu 8). P(A) = 1 → kejadian PASTI (mata dadu ≤ 6).' },
    ],
    activityTitle: 'Latihan: Kejadian & Komplemen',
    questions: [
      { text: 'Peluang turun hujan hari ini menurut prakiraan cuaca adalah 0,35. Peluang TIDAK turun hujan (komplemennya) adalah...', opts: ['0,65', '0,35', '1,35', '0,75'], ans: 0, exp: '1 − 0,35 = 0,65.' },
      { text: 'Pada pelemparan 1 dadu bermata 1–6, kejadian muncul mata dadu 7 memiliki peluang sebesar...', opts: ['0 (kejadian mustahil)', '1/6', '1', '7/6'], ans: 0, exp: 'Tidak ada sisi bernomor 7 pada dadu standar.' },
      { text: 'Manakah nilai berikut yang TIDAK MUNGKIN menjadi peluang suatu kejadian?', opts: ['1,25 (lebih dari 1)', '0', '0,01', '7/8'], ans: 0, exp: 'Nilai peluang selalu berada pada selang 0 sampai 1 (0% sampai 100%).' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-09', subSeq: 4,
    objectives: ['Siswa mampu menghitung peluang teoretis suatu kejadian P(A) = n(A) / n(S).'],
    materialTitle: 'Peluang Teoretis Suatu Kejadian',
    blocks: [
      { type: 'formula', name: 'Rumus Peluang Teoretis', expression: 'P(A) = n(A) / n(S)', note: 'Selalu sederhanakan pecahan ke bentuk paling sederhana!' },
    ],
    activityTitle: 'Latihan: Peluang Suatu Kejadian',
    questions: [
      { text: 'Sebuah dadu dilempar sekali. Peluang munculnya mata dadu bilangan PRIMA {2, 3, 5} adalah...', opts: ['½', '⅓', '⅔', '⅙'], ans: 0, exp: 'n(A) = 3, n(S) = 6 → 3/6 = ½.' },
      { text: 'Dua dadu dilempar bersamaan. Peluang muncul mata dadu berjumlah 9 — yaitu {(3,6),(4,5),(5,4),(6,3)} — adalah...', opts: ['1/9', '1/6', '1/12', '4/9'], ans: 0, exp: '4 / 36 = 1/9.' },
      { text: 'Di dalam kotak ada 4 kelereng merah, 5 putih, dan 3 biru. Jika diambil 1 kelereng secara acak, peluang terambil BUKAN kelereng merah adalah...', opts: ['2/3', '1/3', '5/12', '1/4'], ans: 0, exp: 'Bukan merah = 5 + 3 = 8 dari 12 kelereng → 8/12 = 2/3.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-09', subSeq: 5,
    objectives: ['Siswa mampu menghitung peluang empiris (frekuensi relatif) dari hasil percobaan nyata dan membandingkannya dengan peluang teoretis.'],
    materialTitle: 'Frekuensi Relatif (Peluang Empiris)',
    blocks: [
      { type: 'formula', name: 'Rumus Frekuensi Relatif (Peluang Empiris)', expression: 'P_empiris(A) = Banyak Muncul A / Total Percobaan (N)', note: 'Hukum Bilangan Besar: semakin BANYAK percobaan diulang, frekuensi relatif akan makin mendekati peluang teoretisnya!' },
    ],
    activityTitle: 'Latihan: Frekuensi Relatif',
    questions: [
      { text: 'Sebuah koin dilempar 50 kali dan muncul sisi Gambar sebanyak 27 kali. Frekuensi relatif (peluang empiris) munculnya Gambar adalah...', opts: ['27/50 (atau 0,54)', '1/2', '23/50', '27/100'], ans: 0, exp: 'P_empiris = 27 / 50 = 0,54.' },
      { text: 'Dari 40 lemparan dadu, mata dadu 6 muncul 8 kali. Peluang empiris muncul mata dadu 6 adalah...', opts: ['1/5 (0,2)', '1/6', '1/8', '8/6'], ans: 0, exp: '8 / 40 = 1/5 = 0,2.' },
      { text: 'Jika sebuah koin adil dilempar 10.000 kali (bukan cuma 4 kali), maka peluang empiris muncul Angka akan cenderung...', opts: ['Sangat mendekati peluang teoretisnya yaitu 0,5 (50%)', 'Menjadi 0', 'Menjadi 1', 'Selalu 0,9'], ans: 0, exp: 'Makin besar N percobaan, peluang empiris konvergen mendekati peluang teoretis.' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-09', subSeq: 6,
    objectives: ['Siswa mampu menghitung frekuensi harapan Fh = P(A) × N dalam berbagai masalah praktis.'],
    materialTitle: 'Frekuensi Harapan (Fh)',
    blocks: [
      { type: 'formula', name: 'Rumus Frekuensi Harapan', expression: 'Fh(A) = P(A) × N   (N = banyak percobaan)', note: 'Frekuensi harapan memperkirakan berapa KALI suatu kejadian diharapkan muncul bila percobaan dilakukan N kali.' },
    ],
    activityTitle: 'Latihan: Frekuensi Harapan',
    questions: [
      { text: 'Sebuah dadu dilempar sebanyak 120 kali. Frekuensi harapan munculnya mata dadu kelipatan 3 {3, 6} adalah...', opts: ['40 kali', '20 kali', '60 kali', '30 kali'], ans: 0, exp: 'P = 2/6 = ⅓ → Fh = ⅓ × 120 = 40 kali.' },
      { text: 'Dua koin dilempar bersamaan 200 kali. Frekuensi harapan muncul keduanya sisi Angka (AA) adalah...', opts: ['50 kali', '100 kali', '25 kali', '150 kali'], ans: 0, exp: 'P(AA) = ¼ → Fh = ¼ × 200 = 50 kali.' },
      { text: 'Dari data pabrik, peluang sebuah lampu LED cacat produksi adalah 0,02. Dari 5.000 lampu yang diproduksi, perkiraan banyak lampu yang BAIK adalah...', opts: ['4.900 lampu', '100 lampu', '4.800 lampu', '4.990 lampu'], ans: 0, exp: 'P(baik) = 1 − 0,02 = 0,98 → 0,98 × 5.000 = 4.900 lampu (cacat 100).' },
    ],
  },
  {
    topicCode: 'MAT-SMP9-09', subSeq: 7,
    objectives: ['Siswa mampu merancang percobaan acak sederhana (undian adil, permainan spinner/kartu) dan mengevaluasi keadilan peluang.'],
    materialTitle: 'Percobaan Acak Sederhana & Keadilan Permainan',
    blocks: [
      { type: 'text', text: 'Suatu permainan atau undian dikatakan ADIL (fair) apabila setiap pemain memiliki PELUANG MENANG YANG SAMA BESAR! Pengetahuan peluang juga membantu kita menyadari secara matematis bahwa judi/slot dirancang secara matematis agar bandar selalu untung dan pemain pasti rugi dalam jangka panjang!' },
    ],
    activityTitle: 'Latihan: Percobaan Acak & Keadilan',
    questions: [
      { text: 'Dalam permainan melempar 1 dadu: A menang jika keluar angka genap {2,4,6}, B menang jika keluar angka > 4 {5,6}. Apakah permainan ini ADIL?', opts: ['Tidak adil, karena P(A) = 3/6 = ½ lebih besar daripada P(B) = 2/6 = ⅓', 'Adil karena keduanya bisa menang', 'Adil karena dadu punya 6 sisi', 'B pasti selalu menang'], ans: 0, exp: 'Permainan adil mensyaratkan P(A) = P(B).' },
      { text: 'Dari seperangkat kartu bernomor 1 sampai 20, diambil 1 kartu acak. Peluang terambil kartu bernomor faktor dari 12 {1, 2, 3, 4, 6, 12} adalah...', opts: ['3/10', '6/12', '1/4', '2/5'], ans: 0, exp: 'Ada 6 faktor dari 20 kartu → 6/20 = 3/10.' },
      { text: 'Jika sebuah roda putar (spinner) dibagi 8 juring sama besar (3 merah, 3 biru, 2 kuning), warna yang paling kecil peluangnya berhenti di jarum adalah...', opts: ['Kuning (2/8 = ¼)', 'Merah (3/8)', 'Biru (3/8)', 'Semua sama besar'], ans: 0, exp: '2/8 lebih kecil daripada 3/8.' },
    ],
  },
];

upsertLessonsBatch('Kelas 9 SMP — Matematika (9 Bab, 56 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

