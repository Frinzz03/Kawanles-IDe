import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: BILANGAN SAMPAI 1.000.000
  {
    topicCode: 'MAT-SD5-01', subSeq: 1,
    objectives: ['Siswa mampu membaca dan menuliskan bilangan cacah sampai 1.000.000 dengan tanda pemisah ribuan yang tepat.'],
    materialTitle: 'Membaca dan Menulis Bilangan sampai 1.000.000',
    blocks: [
      { type: 'text', text: 'Bilangan sampai 1.000.000 terdiri dari 5 hingga 7 angka. Tanda titik (.) diletakkan setiap 3 angka dari KANAN untuk memisahkan kelas satuan, kelas ribuan, dan kelas jutaan.' },
      { type: 'flashcards', title: 'Uji Cepat Baca Bilangan Ratusan Ribu (Klik!)', cards: [
        { emoji: '🔢', front: '24.500', back: 'Dua puluh empat ribu lima ratus' },
        { emoji: '🔢', front: '105.040', back: 'Seratus lima ribu empat puluh' },
        { emoji: '🔢', front: '750.308', back: 'Tujuh ratus lima puluh ribu tiga ratus delapan' },
        { emoji: '💯', front: '1.000.000', back: 'Satu juta' },
      ]},
      { type: 'tip', text: 'Baca 3 angka di kiri titik seperti membaca ratusan biasa lalu tambahkan kata "ribu", baru baca 3 angka di kanannya!' },
    ],
    activityTitle: 'Latihan: Membaca & Menulis Bilangan 1.000.000',
    questions: [
      { text: 'Lambang bilangan dari "tiga ratus dua puluh ribu empat ratus lima" adalah...', opts: ['320.450', '320.405', '302.405', '32.405'], ans: 1, exp: '320 ribuan + 405 = 320.405.' },
      { text: 'Bilangan 408.070 dibaca...', opts: ['Empat ratus delapan ribu tujuh ratus', 'Empat ratus delapan ribu tujuh puluh', 'Empat puluh delapan ribu tujuh puluh', 'Empat ratus delapan puluh ribu tujuh puluh'], ans: 1, exp: '408 ribu + 70 = empat ratus delapan ribu tujuh puluh.' },
      { text: 'Harga sebuah tas ransel di toko Gresik adalah Rp145.500. Bilangan tersebut dibaca...', opts: ['Seratus empat puluh lima ribu lima ratus', 'Seratus lima puluh empat ribu lima ratus', 'Empat belas ribu lima ratus', 'Seratus empat puluh lima ribu lima puluh'], ans: 0, exp: '145.500 = seratus empat puluh lima ribu lima ratus.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-01', subSeq: 2,
    objectives: ['Siswa mampu menentukan nilai tempat hingga jutaan dan nilai angka tiap digitnya.'],
    materialTitle: 'Nilai Tempat sampai Jutaan',
    blocks: [
      { type: 'table', title: 'Tabel Nilai Tempat Bilangan 648.295', headers: ['Angka', 'Nilai Tempat', 'Nilai Angka'], rows: [
        ['6', 'Ratus ribuan', '600.000'],
        ['4', 'Puluh ribuan', '40.000'],
        ['8', 'Ribuan', '8.000'],
        ['2', 'Ratusan', '200'],
        ['9', 'Puluhan', '90'],
        ['5', 'Satuan', '5'],
      ]},
    ],
    activityTitle: 'Latihan: Nilai Tempat sampai Jutaan',
    questions: [
      { text: 'Pada bilangan 572.840, angka 7 menempati nilai tempat...', opts: ['Ratus ribuan', 'Puluh ribuan', 'Ribuan', 'Ratusan'], ans: 1, exp: '5 ratus ribuan, 7 puluh ribuan, 2 ribuan.' },
      { text: 'Nilai angka 4 pada bilangan 491.320 adalah...', opts: ['4.000', '40.000', '400.000', '400'], ans: 2, exp: 'Angka 4 berada di tempat ratus ribuan → 400.000.' },
      { text: 'Jumlah nilai angka 3 pada bilangan 350.300 adalah...', opts: ['300.300', '30.300', '303.000', '3.300'], ans: 0, exp: '300.000 + 300 = 300.300.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-01', subSeq: 3,
    objectives: ['Siswa mampu membandingkan dan mengurutkan bilangan cacah sampai 1.000.000.'],
    materialTitle: 'Membandingkan dan Mengurutkan Bilangan Besar',
    blocks: [
      { type: 'worked_example', level: 'Dasar', question: 'Urutkan dari TERKECIL: 245.100, 254.000, 98.900, 245.010', steps: ['Cek jumlah angka: 98.900 hanya 5 angka → paling kecil.', 'Tiga bilangan 6 angka dimulai angka 2: 245.010 < 245.100 < 254.000.'], answer: '98.900, 245.010, 245.100, 254.000' },
    ],
    activityTitle: 'Latihan: Bandingkan & Urutkan 1.000.000',
    questions: [
      { text: 'Tanda yang tepat untuk 450.090 ... 450.900 adalah...', opts: ['>', '<', '=', '÷'], ans: 1, exp: 'Ratusan 0 < 9 sehingga 450.090 < 450.900.' },
      { text: 'Bilangan yang PALING BESAR di bawah ini adalah...', opts: ['99.999', '100.001', '100.010', '98.999'], ans: 2, exp: '100.010 > 100.001 > 99.999.' },
      { text: 'Urutan dari TERBESAR untuk 312.000, 321.000, 231.000 adalah...', opts: ['321.000, 312.000, 231.000', '231.000, 312.000, 321.000', '312.000, 321.000, 231.000', '321.000, 231.000, 312.000'], ans: 0, exp: '321 ribu > 312 ribu > 231 ribu.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-01', subSeq: 4,
    objectives: ['Siswa mampu menyusun (komposisi) dan mengurai (dekomposisi) bilangan hingga 1.000.000 termasuk pecahan uang.'],
    materialTitle: 'Komposisi dan Dekomposisi Bilangan Besar',
    blocks: [
      { type: 'worked_example', level: 'Aplikasi Belanja', question: 'Komposisikan: 2 lembar Rp100.000 + 3 lembar Rp50.000 + 4 lembar Rp20.000 + 1 lembar Rp5.000!', steps: ['2 × 100.000 = 200.000.', '3 × 50.000 = 150.000.', '4 × 20.000 = 80.000, tambah 5.000.', 'Total: 200.000 + 150.000 + 80.000 + 5.000 = Rp435.000.'], answer: 'Rp435.000.' },
    ],
    activityTitle: 'Latihan: Komposisi & Dekomposisi',
    questions: [
      { text: '500.000 + 40.000 + 600 + 8 = ...', opts: ['546.008', '540.608', '504.608', '54.608'], ans: 1, exp: 'Ribuan 0 dan puluhan 0 → 540.608.' },
      { text: 'Bentuk dekomposisi dari 207.530 adalah...', opts: ['200.000 + 7.000 + 500 + 30', '200.000 + 70.000 + 500 + 30', '20.000 + 7.000 + 530', '200.000 + 7.000 + 53'], ans: 0, exp: '2 ratus ribuan + 7 ribuan + 5 ratusan + 3 puluhan.' },
      { text: '3 lembar Rp50.000 + 2 lembar Rp20.000 + 1 lembar Rp10.000 berjumlah...', opts: ['Rp180.000', 'Rp190.000', 'Rp200.000', 'Rp210.000'], ans: 2, exp: '150.000 + 40.000 + 10.000 = Rp200.000.' },
    ],
  },

  // BAB 2: OPERASI BILANGAN CACAH
  {
    topicCode: 'MAT-SD5-02', subSeq: 1,
    objectives: ['Siswa mampu menghitung penjumlahan bilangan cacah sampai 100.000 dengan cara bersusun.'],
    materialTitle: 'Penjumlahan Bilangan Cacah Besar',
    blocks: [
      { type: 'worked_example', level: 'Bersusun', question: 'Hitung 24.685 + 18.745!', steps: ['Luruskan posisi titik ribuan dan tiap nilai tempat.', 'Satuan: 5+5=10 (tulis 0, simpan 1). Puluhan: 1+8+4=13 (tulis 3, simpan 1).', 'Ratusan: 1+6+7=14 (tulis 4, simpan 1). Ribuan: 1+4+8=13 (tulis 3, simpan 1).', 'Puluh ribuan: 1+2+1=4 → 43.430.'], answer: '43.430' },
    ],
    activityTitle: 'Latihan: Penjumlahan Bilangan Cacah',
    questions: [
      { text: '15.450 + 23.850 = ...', opts: ['38.300', '39.300', '39.200', '40.300'], ans: 1, exp: '15.450 + 23.850 = 39.300.' },
      { text: '47.625 + 14.585 = ...', opts: ['61.210', '62.210', '62.110', '63.210'], ans: 1, exp: '47.625 + 14.585 = 62.210.' },
      { text: '8.750 + 12.250 + 5.000 = ...', opts: ['25.000', '26.000', '27.000', '24.000'], ans: 1, exp: '8.750 + 12.250 = 21.000; 21.000 + 5.000 = 26.000.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-02', subSeq: 2,
    objectives: ['Siswa mampu menghitung pengurangan bilangan cacah sampai 100.000 termasuk meminjam beruntun.'],
    materialTitle: 'Pengurangan Bilangan Cacah Besar',
    blocks: [
      { type: 'worked_example', level: 'Trik Anti-Salah', question: 'Hitung 50.000 − 17.465!', steps: ['Trik kurangi 1 pada kedua bilangan agar tidak meminjam dari nol:', '49.999 − 17.464 = 32.535.', 'Cek balik: 32.535 + 17.465 = 50.000. Tepat!'], answer: '32.535' },
    ],
    activityTitle: 'Latihan: Pengurangan Bilangan Cacah',
    questions: [
      { text: '45.600 − 18.250 = ...', opts: ['27.350', '27.450', '28.350', '26.350'], ans: 0, exp: '45.600 − 18.250 = 27.350.' },
      { text: '100.000 − 36.750 = ...', opts: ['63.250', '64.250', '63.350', '73.250'], ans: 0, exp: '63.250 + 36.750 = 100.000.' },
      { text: '72.410 − 25.890 = ...', opts: ['46.520', '47.520', '46.620', '45.520'], ans: 0, exp: '72.410 − 25.890 = 46.520.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-02', subSeq: 3,
    objectives: ['Siswa mampu menghitung perkalian bilangan 2–3 digit dengan cara bersusun panjang maupun pendek.'],
    materialTitle: 'Perkalian Bilangan Cacah',
    blocks: [
      { type: 'worked_example', level: 'Bersusun 2 Digit', question: 'Hitung 135 × 24!', steps: ['Baris 1 (135 × 4) = 540.', 'Baris 2 (135 × 20) = 2.700 (geser satu angka ke kiri).', 'Jumlahkan: 540 + 2.700 = 3.240.'], answer: '3.240' },
      { type: 'misconception', wrong: 'Menulis baris kedua sejajar di kanan (tidak digeser ke puluhan) saat perkalian 2 digit.', right: 'Baris kedua adalah perkalian dengan PULUHAN, jadi selalu beri angka 0 (atau kosongkan 1 kolom) di paling kanan!' },
    ],
    activityTitle: 'Latihan: Perkalian Bilangan Cacah',
    questions: [
      { text: '45 × 12 = ...', opts: ['440', '540', '550', '490'], ans: 1, exp: '(45×10) + (45×2) = 450 + 90 = 540.' },
      { text: '125 × 8 = ...', opts: ['900', '1.000', '1.200', '800'], ans: 1, exp: 'Pasangan istimewa: 125 × 8 = 1.000!' },
      { text: '230 × 15 = ...', opts: ['3.350', '3.450', '3.550', '2.450'], ans: 1, exp: '(230×10) + (230×5) = 2.300 + 1.150 = 3.450.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-02', subSeq: 4,
    objectives: ['Siswa mampu melakukan pembagian bilangan hingga ribuan dengan pembagi 1 atau 2 digit (porogapit).'],
    materialTitle: 'Pembagian Bilangan Cacah (Porogapit)',
    blocks: [
      { type: 'worked_example', level: 'Porogapit', question: 'Hitung 768 ÷ 12!', steps: ['Ambil 76 ÷ 12 = 6 (karena 6 × 12 = 72), sisa 4.', 'Turunkan 8 sehingga menjadi 48.', '48 ÷ 12 = 4, sisa 0.'], answer: '64' },
    ],
    activityTitle: 'Latihan: Pembagian Bilangan Cacah',
    questions: [
      { text: '648 ÷ 6 = ...', opts: ['18', '108', '118', '104'], ans: 1, exp: '6÷6=1, 4÷6=0 (jangan lupa tulis 0!), 48÷6=8 → 108.' },
      { text: '960 ÷ 15 = ...', opts: ['62', '64', '66', '54'], ans: 1, exp: '90÷15=6, sisa 6 → 60÷15=4 → 64.' },
      { text: '4.500 ÷ 90 = ...', opts: ['5', '50', '500', '45'], ans: 1, exp: 'Coret satu 0 di keduanya: 450 ÷ 9 = 50.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-02', subSeq: 5,
    objectives: ['Siswa mampu menyelesaikan operasi hitung campuran mengikuti urutan prioritas (Ku-KaBa-TaKu).'],
    materialTitle: 'Operasi Hitung Campuran',
    blocks: [
      { type: 'formula', name: 'Urutan Prioritas: Ku – KaBa – TaKu', expression: '1. Kurung ( )  →  2. Kali & Bagi (× ÷) dari kiri  →  3. Tambah & Kurang (+ −) dari kiri', note: 'Kali & bagi sama kuat (kerjakan dari kiri). Tambah & kurang juga sama kuat (dari kiri).' },
      { type: 'worked_example', level: 'Dasar', question: 'Hitung 25 + 15 × 4 − 10!', steps: ['Kerjakan perkalian dulu: 15 × 4 = 60.', 'Baru tambah & kurang dari kiri: 25 + 60 − 10 = 85 − 10 = 75.'], answer: '75 (bukan 150!)' },
    ],
    activityTitle: 'Latihan: Operasi Campuran',
    questions: [
      { text: '120 + 30 × 4 = ...', opts: ['600', '240', '154', '480'], ans: 1, exp: 'Perkalian dulu: 30×4 = 120, lalu 120 + 120 = 240.' },
      { text: '(45 + 15) ÷ 5 × 3 = ...', opts: ['4', '36', '18', '54'], ans: 1, exp: 'Kurung: 60. Dari kiri: 60 ÷ 5 = 12; 12 × 3 = 36.' },
      { text: '200 − 80 ÷ 4 + 15 = ...', opts: ['45', '195', '165', '235'], ans: 1, exp: '80÷4=20; 200−20+15 = 195.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-02', subSeq: 6,
    objectives: ['Siswa mampu memecahkan soal cerita multi-langkah bilangan cacah dalam konteks jual beli dan pembagian.'],
    materialTitle: 'Soal Cerita Operasi Bilangan Cacah',
    blocks: [
      { type: 'worked_example', level: 'Konteks Gresik', question: 'Bu Rina membeli 4 kardus pudak isi 15 bungkus per kardus. Ia membayar dengan Rp300.000. Jika harga per bungkus Rp4.500, berapa uang kembalian Bu Rina?', steps: ['Total bungkus = 4 × 15 = 60 bungkus.', 'Total harga = 60 × Rp4.500 = Rp270.000.', 'Kembalian = Rp300.000 − Rp270.000 = Rp30.000.'], answer: 'Rp30.000.' },
    ],
    activityTitle: 'Latihan: Soal Cerita Bilangan Cacah',
    questions: [
      { text: 'Seorang petambak panen 12 keranjang bandeng, tiap keranjang 25 kg. Jika 180 kg dijual ke pasar Gresik, sisanya adalah...', opts: ['110 kg', '120 kg', '130 kg', '140 kg'], ans: 1, exp: '12 × 25 = 300 kg; 300 − 180 = 120 kg.' },
      { text: 'Sekolah membeli 6 pak buku tulis (isi 10 buku/pak) dan 30 buku lagi. Seluruh buku dibagikan rata kepada 15 siswa berprestasi. Tiap siswa mendapat ... buku.', opts: ['5', '6', '7', '8'], ans: 1, exp: '(6×10 + 30) ÷ 15 = 90 ÷ 15 = 6 buku.' },
      { text: 'Harga 1 buku Rp6.500 dan 1 pulpen Rp3.500. Harga 5 buku dan 5 pulpen adalah...', opts: ['Rp45.000', 'Rp50.000', 'Rp55.000', 'Rp40.000'], ans: 1, exp: '5 × (6.500 + 3.500) = 5 × 10.000 = Rp50.000.' },
    ],
  },

  // BAB 3: FAKTOR, KELIPATAN, KPK, DAN FPB
  {
    topicCode: 'MAT-SD5-03', subSeq: 1,
    objectives: ['Siswa mampu menentukan faktor persekutuan dan kelipatan persekutuan dua bilangan.'],
    materialTitle: 'Faktor dan Kelipatan Persekutuan',
    blocks: [
      { type: 'table', title: 'Ingat Bedanya Faktor vs Kelipatan!', headers: ['Konsep', 'Cara Mencari', 'Contoh untuk 12'], rows: [
        ['Faktor', 'Bilangan yang MEMBAGI HABIS (hasilnya ≤ 12)', '1, 2, 3, 4, 6, 12'],
        ['Kelipatan', 'Hasil PERKALIAN dengan 1, 2, 3, ... (hasilnya ≥ 12)', '12, 24, 36, 48, 60, ...'],
      ]},
    ],
    activityTitle: 'Latihan: Faktor & Kelipatan',
    questions: [
      { text: 'Faktor persekutuan dari 16 dan 24 adalah...', opts: ['1, 2, 4, 8', '1, 2, 4, 6', '2, 4, 8, 16', '1, 3, 4, 8'], ans: 0, exp: 'Faktor 16={1,2,4,8,16}, faktor 24={1,2,3,4,6,8,12,24} → sama: 1, 2, 4, 8.' },
      { text: 'Dua kelipatan persekutuan pertama dari 6 dan 8 adalah...', opts: ['12 dan 24', '24 dan 48', '16 dan 32', '18 dan 36'], ans: 1, exp: 'Kelipatan 6: 6,12,18,24...; 8: 8,16,24... → 24 dan 48.' },
      { text: 'Semua bilangan genap pasti memiliki faktor...', opts: ['2', '3', '5', '7'], ans: 0, exp: 'Bilangan genap selalu habis dibagi 2.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-03', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi bilangan prima dan menyusun faktorisasi prima dengan pohon faktor.'],
    materialTitle: 'Bilangan Prima dan Faktorisasi Prima',
    blocks: [
      { type: 'text', text: 'Bilangan PRIMA adalah bilangan lebih dari 1 yang hanya punya TEPAT 2 faktor, yaitu 1 dan dirinya sendiri: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...' },
      { type: 'worked_example', level: 'Pohon Faktor', question: 'Tentukan faktorisasi prima dari 36!', steps: ['36 ÷ 2 = 18', '18 ÷ 2 = 9', '9 ÷ 3 = 3 (sudah prima!).', 'Gabungkan semua pembagi primanya: 2 × 2 × 3 × 3 = 2² × 3².'], answer: '2² × 3²' },
      { type: 'misconception', wrong: 'Mengira angka 1 adalah bilangan prima atau angka 9 adalah bilangan prima.', right: '1 BUKAN prima (faktornya cuma 1). 9 juga BUKAN prima karena bisa dibagi 3 (3×3=9). Satu-satunya bilangan prima GENAP adalah 2!' },
    ],
    activityTitle: 'Latihan: Bilangan Prima & Faktorisasi',
    questions: [
      { text: 'Manakah kelompok yang SEMUANYA adalah bilangan prima?', opts: ['2, 3, 5, 7, 11', '1, 2, 3, 5, 7', '2, 3, 5, 9, 11', '2, 4, 6, 8, 10'], ans: 0, exp: '1 dan 9 bukan bilangan prima; 2, 3, 5, 7, 11 semuanya prima.' },
      { text: 'Faktorisasi prima dari 24 adalah...', opts: ['2² × 3', '2³ × 3', '2 × 3²', '4 × 6'], ans: 1, exp: '24 = 2 × 2 × 2 × 3 = 2³ × 3.' },
      { text: 'Bilangan prima yang merupakan bilangan GENAP satu-satunya adalah...', opts: ['0', '2', '4', '6'], ans: 1, exp: 'Hanya 2 yang genap dan prima.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-03', subSeq: 3,
    objectives: ['Siswa mampu menentukan KPK (Kelipatan Persekutuan Terkecil) dua atau tiga bilangan dengan faktorisasi prima atau tabel sengkedan.'],
    materialTitle: 'Menentukan KPK',
    blocks: [
      { type: 'formula', name: 'Aturan Emas KPK dari Faktorisasi Prima', expression: 'KPK = Kalikan SEMUA faktor prima; jika ada yang sama pilih PANGKAT TERBESAR!', note: 'Ingat: K = Kalikan semua, Pangkat terbesar!' },
      { type: 'worked_example', level: 'Contoh KPK', question: 'Tentukan KPK dari 12 dan 18!', steps: ['12 = 2² × 3', '18 = 2 × 3²', 'Ambil semua prima dengan pangkat terbesar: 2² × 3² = 4 × 9 = 36.'], answer: 'KPK(12, 18) = 36.' },
    ],
    activityTitle: 'Latihan: Menentukan KPK',
    questions: [
      { text: 'KPK dari 8 dan 12 adalah...', opts: ['16', '24', '36', '48'], ans: 1, exp: '8 = 2³, 12 = 2²×3 → KPK = 2³×3 = 24.' },
      { text: 'KPK dari 15 dan 20 adalah...', opts: ['30', '45', '60', '120'], ans: 2, exp: '15 = 3×5, 20 = 2²×5 → KPK = 2²×3×5 = 60.' },
      { text: 'KPK dari 6, 9, dan 12 adalah...', opts: ['18', '24', '36', '72'], ans: 2, exp: '6=2×3, 9=3², 12=2²×3 → KPK = 2²×3² = 36.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-03', subSeq: 4,
    objectives: ['Siswa mampu menentukan FPB (Faktor Persekutuan Terbesar) dua atau tiga bilangan dengan tepat.'],
    materialTitle: 'Menentukan FPB',
    blocks: [
      { type: 'formula', name: 'Aturan Emas FPB dari Faktorisasi Prima', expression: 'FPB = Ambil HANYA faktor prima yang SAMA saja, pilih PANGKAT TERKECIL!', note: 'Ingat: FPB itu "pilih-pilih" — hanya yang sama & pangkat terkecil!' },
      { type: 'worked_example', level: 'Contoh FPB', question: 'Tentukan FPB dari 24 dan 36!', steps: ['24 = 2³ × 3', '36 = 2² × 3²', 'Prima yang sama adalah 2 dan 3. Pangkat terkecilnya: 2² × 3 = 4 × 3 = 12.'], answer: 'FPB(24, 36) = 12.' },
    ],
    activityTitle: 'Latihan: Menentukan FPB',
    questions: [
      { text: 'FPB dari 18 dan 24 adalah...', opts: ['3', '6', '9', '12'], ans: 1, exp: '18 = 2×3², 24 = 2³×3 → FPB = 2×3 = 6.' },
      { text: 'FPB dari 30 dan 45 adalah...', opts: ['5', '10', '15', '90'], ans: 2, exp: '30 = 2×3×5, 45 = 3²×5 → FPB = 3×5 = 15.' },
      { text: 'FPB dari 16, 24, dan 40 adalah...', opts: ['4', '8', '12', '16'], ans: 1, exp: '16=2⁴, 24=2³×3, 40=2³×5 → FPB = 2³ = 8.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-03', subSeq: 5,
    objectives: ['Siswa mampu membedakan dan menyelesaikan soal cerita KPK (jadwal bersamaan lagi) dan FPB (membagi bingkisan sama banyak).'],
    materialTitle: 'Penerapan KPK dan FPB dalam Soal Cerita',
    blocks: [
      { type: 'table', title: 'Kata Kunci Cepat Soal Cerita KPK vs FPB', headers: ['Gunakan KPK Jika Ada Kata...', 'Gunakan FPB Jika Ada Kata...'], rows: [
        ['Setiap ... hari/menit sekali', 'Dibagikan sama banyak / sama rata'],
        ['Kapan bertemu / menyala BERSAMAAN lagi?', 'Berapa paket / kantong / teman PALING BANYAK?'],
      ]},
      { type: 'worked_example', level: 'Soal FPB', question: 'Ibu punya 24 kue pudak dan 36 kue lemper untuk dibagikan sama banyak ke dalam beberapa kotak. Paling banyak berapa kotak yang bisa dibuat?', steps: ['Kata kunci: dibagikan sama banyak, paling banyak → FPB!', 'FPB(24, 36) = 12 kotak (isi tiap kotak: 2 pudak & 3 lemper).'], answer: '12 kotak.' },
    ],
    activityTitle: 'Latihan: Soal Cerita KPK & FPB',
    questions: [
      { text: 'Bus A berangkat setiap 15 menit dan Bus B setiap 20 menit. Jika pukul 07.00 berangkat bersama, mereka berangkat bersama lagi pukul...', opts: ['07.35', '08.00', '08.15', '08.30'], ans: 1, exp: 'KPK(15, 20) = 60 menit = 1 jam → pukul 08.00.' },
      { text: 'Bu Guru punya 30 pensil dan 45 penghapus yang akan dibuat bingkisan sama banyak untuk siswa. Jumlah bingkisan PALING BANYAK adalah...', opts: ['10', '15', '20', '90'], ans: 1, exp: 'FPB(30, 45) = 15 bingkisan.' },
      { text: 'Dari soal di atas (30 pensil dan 45 penghapus dibagi ke 15 bingkisan), tiap bingkisan berisi...', opts: ['2 pensil dan 3 penghapus', '3 pensil dan 2 penghapus', '5 pensil dan 5 penghapus', '1 pensil dan 3 penghapus'], ans: 0, exp: '30÷15 = 2 pensil, 45÷15 = 3 penghapus.' },
    ],
  },

  // BAB 4: PECAHAN
  {
    topicCode: 'MAT-SD5-04', subSeq: 1,
    objectives: ['Siswa mampu membedakan pecahan biasa murni (pembilang < penyebut) dan tidak murni (pembilang > penyebut).'],
    materialTitle: 'Pecahan Biasa (Murni & Tidak Murni)',
    blocks: [
      { type: 'interactive_fraction', title: 'Eksplorasi Pecahan Biasa!', initialNum: 3, initialDen: 6, maxDen: 10 },
      { type: 'table', title: '2 Jenis Pecahan Biasa', headers: ['Jenis', 'Ciri', 'Contoh'], rows: [
        ['Pecahan Murni', 'Pembilang < Penyebut (nilainya < 1)', '1/2, 3/4, 5/8'],
        ['Pecahan Tidak Murni', 'Pembilang ≥ Penyebut (nilainya ≥ 1, bisa jadi pecahan campuran!)', '5/4, 7/3, 9/2'],
      ]},
    ],
    activityTitle: 'Latihan: Pecahan Biasa',
    questions: [
      { text: 'Manakah yang merupakan pecahan TIDAK MURNI (nilainya lebih dari 1)?', opts: ['3/5', '7/4', '4/9', '1/8'], ans: 1, exp: 'Pada 7/4, pembilang (7) > penyebut (4).' },
      { text: 'Bentuk paling sederhana dari pecahan 12/18 adalah...', opts: ['6/9', '4/6', '2/3', '3/4'], ans: 2, exp: 'Bagi atas dan bawah dengan FPB(12,18)=6 → 2/3.' },
      { text: 'Pecahan 8/8 nilainya sama dengan...', opts: ['0', '1', '8', '16'], ans: 1, exp: 'Pembilang sama dengan penyebut selalu bernilai 1 utuh.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-04', subSeq: 2,
    objectives: ['Siswa mampu mengubah pecahan tidak murni menjadi pecahan campuran dan sebaliknya.'],
    materialTitle: 'Pecahan Campuran',
    blocks: [
      { type: 'formula', name: 'Ubah Pecahan Campuran ↔ Biasa', expression: 'a b/c = (a × c + b) / c', note: 'Dari biasa ke campuran: bagi pembilang dengan penyebut → hasil jadi bilangan bulat, sisa jadi pembilang baru!' },
      { type: 'worked_example', level: 'Bolak-Balik', question: 'Ubah 11/4 ke pecahan campuran, dan ubah 2 3/5 ke pecahan biasa!', steps: ['11 ÷ 4 = 2 sisa 3 → 2 3/4.', '2 3/5 = (2 × 5 + 3)/5 = 13/5.'], answer: '2 3/4 dan 13/5.' },
    ],
    activityTitle: 'Latihan: Pecahan Campuran',
    questions: [
      { text: 'Bentuk pecahan campuran dari 13/5 adalah...', opts: ['2 2/5', '2 3/5', '3 2/5', '1 8/5'], ans: 1, exp: '13 ÷ 5 = 2 sisa 3 → 2 3/5.' },
      { text: 'Bentuk pecahan biasa dari 3 2/7 adalah...', opts: ['21/7', '23/7', '17/7', '12/7'], ans: 1, exp: '(3 × 7 + 2)/7 = 23/7.' },
      { text: 'Bentuk paling sederhana dari 2 4/8 adalah...', opts: ['2 1/2', '2 2/4', '2 1/4', '3 1/2'], ans: 0, exp: '4/8 disederhanakan menjadi 1/2 → 2 1/2.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-04', subSeq: 3,
    objectives: ['Siswa mampu menentukan pecahan senilai dengan kelipatan maupun penyederhanaan memakai FPB.'],
    materialTitle: 'Pecahan Senilai',
    blocks: [
      { type: 'worked_example', level: 'Mencari Nilai yang Hilang', question: 'Isi titik-titik: 3/5 = .../20 = 18/...', steps: ['5 ke 20 dikali 4 → pembilang 3 × 4 = 12 → 12/20.', '3 ke 18 dikali 6 → penyebut 5 × 6 = 30 → 18/30.'], answer: '12 dan 30.' },
    ],
    activityTitle: 'Latihan: Pecahan Senilai',
    questions: [
      { text: 'Jika 4/7 = 20/..., maka penyebut yang tepat adalah...', opts: ['28', '35', '42', '27'], ans: 1, exp: '4×5=20, maka 7×5=35.' },
      { text: 'Bentuk paling sederhana dari 18/24 adalah...', opts: ['9/12', '6/8', '3/4', '2/3'], ans: 2, exp: 'FPB(18,24)=6 → 18÷6 / 24÷6 = 3/4.' },
      { text: 'Pecahan yang senilai dengan 2/3 adalah...', opts: ['4/9', '6/9', '8/9', '4/5'], ans: 1, exp: '(2×3)/(3×3) = 6/9.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-04', subSeq: 4,
    objectives: ['Siswa mampu membandingkan dan mengurutkan pecahan biasa dan pecahan campuran berpenyebut berbeda memakai KPK.'],
    materialTitle: 'Membandingkan dan Mengurutkan Pecahan',
    blocks: [
      { type: 'worked_example', level: 'Samakan Penyebut dengan KPK', question: 'Urutkan dari TERKECIL: 2/3, 3/4, 5/6', steps: ['KPK dari 3, 4, dan 6 adalah 12.', '2/3 = 8/12, 3/4 = 9/12, 5/6 = 10/12.', 'Urutkan pembilang: 8/12 < 9/12 < 10/12.'], answer: '2/3, 3/4, 5/6' },
    ],
    activityTitle: 'Latihan: Bandingkan & Urutkan Pecahan',
    questions: [
      { text: 'Tanda yang tepat untuk 4/5 ... 5/6 adalah...', opts: ['>', '<', '=', '×'], ans: 1, exp: '4/5 = 24/30 dan 5/6 = 25/30 → 4/5 < 5/6.' },
      { text: 'Urutan dari TERKECIL untuk 1/2, 2/3, 5/12 adalah...', opts: ['5/12, 1/2, 2/3', '1/2, 5/12, 2/3', '2/3, 1/2, 5/12', '5/12, 2/3, 1/2'], ans: 0, exp: 'Ubah ke /12: 5/12, 6/12 (1/2), 8/12 (2/3).' },
      { text: 'Antara 2 1/3 dan 2 1/2, pecahan yang lebih besar adalah...', opts: ['2 1/3', '2 1/2', 'Sama besar', 'Tidak bisa dibandingkan'], ans: 1, exp: 'Bilangan bulat sama (2), sedangkan 1/2 > 1/3.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-04', subSeq: 5,
    objectives: ['Siswa mampu menjumlahkan dan mengurangkan pecahan biasa serta pecahan campuran berpenyebut berbeda.'],
    materialTitle: 'Penjumlahan dan Pengurangan Pecahan',
    blocks: [
      { type: 'formula', name: 'Aturan Penjumlahan & Pengurangan Pecahan', expression: 'Samakan penyebut dengan KPK dulu → baru tambah/kurang pembilangnya → sederhanakan!', note: 'JANGAN pernah menjumlahkan penyebut secara langsung!' },
      { type: 'worked_example', level: 'Penyebut Berbeda', question: 'Hitung 2/3 + 1/4 dan 2 1/2 − 1 1/3!', steps: ['2/3 + 1/4 = 8/12 + 3/12 = 11/12.', '2 1/2 − 1 1/3 = (2−1) + (3/6 − 2/6) = 1 1/6.'], answer: '11/12 dan 1 1/6.' },
    ],
    activityTitle: 'Latihan: Penjumlahan & Pengurangan Pecahan',
    questions: [
      { text: '1/2 + 1/3 = ...', opts: ['2/5', '5/6', '3/6', '1/6'], ans: 1, exp: '3/6 + 2/6 = 5/6.' },
      { text: '3/4 − 1/6 = ...', opts: ['2/10', '7/12', '5/12', '1/2'], ans: 1, exp: 'KPK(4,6)=12 → 9/12 − 2/12 = 7/12.' },
      { text: '1 1/2 + 2 1/4 = ...', opts: ['3 2/6', '3 3/4', '3 1/4', '4 1/4'], ans: 1, exp: '(1+2) + (2/4 + 1/4) = 3 3/4.' },
    ],
  },

  // BAB 5: DESIMAL DAN PERSEN
  {
    topicCode: 'MAT-SD5-05', subSeq: 1,
    objectives: ['Siswa mampu mengubah berbagai pecahan biasa dan campuran ke bentuk desimal.'],
    materialTitle: 'Mengubah Pecahan ke Desimal',
    blocks: [
      { type: 'table', title: '2 Cara Ubah Pecahan → Desimal', headers: ['Cara', 'Kapan Dipakai?', 'Contoh'], rows: [
        ['1. Jadikan penyebut 10, 100, atau 1.000', 'Penyebut 2, 4, 5, 8, 20, 25, 50', '3/8 = (3×125)/(8×125) = 375/1.000 = 0,375'],
        ['2. Pembagian bersusun (porogapit)', 'Semua pecahan (misal /3, /6, /7)', '1/4 = 1 ÷ 4 = 0,25'],
      ]},
    ],
    activityTitle: 'Latihan: Pecahan ke Desimal',
    questions: [
      { text: 'Bentuk desimal dari 4/5 adalah...', opts: ['0,45', '0,8', '0,4', '0,25'], ans: 1, exp: '4/5 = 8/10 = 0,8.' },
      { text: 'Bentuk desimal dari 7/20 adalah...', opts: ['0,7', '0,35', '0,72', '3,5'], ans: 1, exp: '7×5 / 20×5 = 35/100 = 0,35.' },
      { text: 'Bentuk desimal dari 2 1/4 adalah...', opts: ['2,14', '2,25', '2,4', '2,5'], ans: 1, exp: '2 + 0,25 = 2,25.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-05', subSeq: 2,
    objectives: ['Siswa mampu mengubah pecahan biasa, campuran, dan desimal ke persen (%) serta menyelesaikan masalah diskon sederhana.'],
    materialTitle: 'Mengubah Pecahan ke Persen',
    blocks: [
      { type: 'formula', name: 'Cara Cepat ke Persen (%)', expression: 'Pecahan × 100%  (atau ubah penyebut jadi 100)', note: 'Contoh: 3/5 × 100% = 60%. Desimal 0,45 = 45%.' },
      { type: 'worked_example', level: 'Aplikasi Diskon', question: 'Harga sepatu Rp200.000 mendapat diskon 25%. Berapa rupiah potongannya?', steps: ['25% = 25/100 = 1/4.', 'Potongan = 1/4 × Rp200.000 = Rp50.000.'], answer: 'Diskon Rp50.000 (harga bayar Rp150.000).' },
    ],
    activityTitle: 'Latihan: Pecahan ke Persen',
    questions: [
      { text: 'Bentuk persen dari 3/5 adalah...', opts: ['35%', '60%', '30%', '75%'], ans: 1, exp: '3/5 × 100% = 60%.' },
      { text: 'Bentuk persen dari 7/25 adalah...', opts: ['7%', '14%', '28%', '35%'], ans: 2, exp: '(7×4)/(25×4) = 28/100 = 28%.' },
      { text: 'Diskon 20% dari harga baju Rp100.000 adalah...', opts: ['Rp10.000', 'Rp20.000', 'Rp25.000', 'Rp80.000'], ans: 1, exp: '20/100 × 100.000 = Rp20.000.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-05', subSeq: 3,
    objectives: ['Siswa mampu membandingkan dua bilangan desimal dengan menyamakan banyak angka di belakang koma.'],
    materialTitle: 'Membandingkan Bilangan Desimal',
    blocks: [
      { type: 'misconception', wrong: 'Mengira 0,25 lebih besar dari 0,5 karena 25 > 5.', right: 'Samakan jumlah angka di belakang koma! 0,5 = 0,50. Karena 50 > 25, maka 0,5 > 0,25!' },
      { type: 'worked_example', level: 'Cek Desimal', question: 'Bandingkan 1,4 dan 1,38!', steps: ['Tambahkan 0 di belakang 1,4 → 1,40.', 'Bandingkan 1,40 dan 1,38 → persepuluhan 4 > 3.'], answer: '1,4 > 1,38.' },
    ],
    activityTitle: 'Latihan: Membandingkan Desimal',
    questions: [
      { text: 'Tanda perbandingan yang tepat untuk 0,6 ... 0,58 adalah...', opts: ['>', '<', '=', '÷'], ans: 0, exp: '0,6 = 0,60 > 0,58.' },
      { text: 'Bilangan desimal yang PALING BESAR adalah...', opts: ['0,75', '0,8', '0,09', '0,79'], ans: 1, exp: '0,8 = 0,80 > 0,79 > 0,75 > 0,09.' },
      { text: 'Tanda yang tepat untuk 2,5 ... 2,50 adalah...', opts: ['>', '<', '=', '+'], ans: 2, exp: 'Menambah angka 0 di paling belakang desimal tidak mengubah nilainya.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-05', subSeq: 4,
    objectives: ['Siswa mampu mengurutkan sekumpulan bilangan desimal serta campuran bentuk pecahan-desimal-persen.'],
    materialTitle: 'Mengurutkan Bilangan Desimal',
    blocks: [
      { type: 'worked_example', level: 'Urutkan', question: 'Urutkan dari TERKECIL: 0,45; 0,5; 0,09; 0,405', steps: ['Samakan menjadi 3 angka di belakang koma: 0,450; 0,500; 0,090; 0,405.', 'Urutkan: 0,090 < 0,405 < 0,450 < 0,500.'], answer: '0,09; 0,405; 0,45; 0,5' },
    ],
    activityTitle: 'Latihan: Mengurutkan Desimal',
    questions: [
      { text: 'Urutan dari TERKECIL untuk 0,7; 0,65; 0,72; 0,08 adalah...', opts: ['0,08; 0,65; 0,7; 0,72', '0,7; 0,08; 0,65; 0,72', '0,72; 0,7; 0,65; 0,08', '0,65; 0,7; 0,72; 0,08'], ans: 0, exp: '0,08 < 0,65 < 0,70 < 0,72.' },
      { text: 'Urutan dari TERBESAR untuk 1,2; 1,09; 1,25; 1,18 adalah...', opts: ['1,25; 1,2; 1,18; 1,09', '1,25; 1,18; 1,09; 1,2', '1,09; 1,18; 1,2; 1,25', '1,2; 1,25; 1,18; 1,09'], ans: 0, exp: '1,25 > 1,20 > 1,18 > 1,09.' },
      { text: 'Urutan dari TERKECIL untuk 1/2, 40%, 0,6 adalah...', opts: ['40%, 1/2, 0,6', '1/2, 40%, 0,6', '0,6, 1/2, 40%', '40%, 0,6, 1/2'], ans: 0, exp: 'Ubah ke desimal: 40%=0,4; 1/2=0,5; 0,6.' },
    ],
  },

  // BAB 6: PENGUKURAN DAN BANGUN DATAR
  {
    topicCode: 'MAT-SD5-06', subSeq: 1,
    objectives: ['Siswa mampu menghitung keliling persegi, persegi panjang, segitiga, dan bangun gabungan.'],
    materialTitle: 'Keliling Bangun Datar',
    blocks: [
      { type: 'formula', name: 'Rumus Keliling (Jumlahkan Semua Sisi Luar!)', expression: 'Persegi: 4 × s  |  Persegi Panjang: 2 × (p + l)  |  Segitiga: a + b + c', note: 'Keliling seperti panjang pagar yang mengelilingi sebuah kebun!' },
      { type: 'worked_example', level: 'Aplikasi', question: 'Lapangan persegi panjang berukuran 25 m × 15 m. Jika Raka berlari mengelilinginya 2 putaran, berapa meter jaraknya?', steps: ['1 putaran = Keliling = 2 × (25 + 15) = 2 × 40 = 80 m.', '2 putaran = 2 × 80 m = 160 m.'], answer: '160 meter.' },
    ],
    activityTitle: 'Latihan: Keliling Bangun Datar',
    questions: [
      { text: 'Keliling persegi dengan panjang sisi 14 cm adalah...', opts: ['28 cm', '56 cm', '196 cm', '42 cm'], ans: 1, exp: 'K = 4 × 14 = 56 cm.' },
      { text: 'Keliling persegi panjang berukuran panjang 18 cm dan lebar 12 cm adalah...', opts: ['30 cm', '60 cm', '216 cm', '48 cm'], ans: 1, exp: 'K = 2 × (18 + 12) = 60 cm.' },
      { text: 'Keliling segitiga sama sisi adalah 45 cm. Panjang setiap sisinya adalah...', opts: ['9 cm', '15 cm', '20 cm', '135 cm'], ans: 1, exp: '45 ÷ 3 = 15 cm.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-06', subSeq: 2,
    objectives: ['Siswa mampu menghitung luas segitiga, jajar genjang, trapesium, belah ketupat, dan layang-layang.'],
    materialTitle: 'Luas Berbagai Bangun Datar',
    blocks: [
      { type: 'table', title: 'Rumus Luas Bangun Datar Wajib Hafal!', headers: ['Bangun Datar', 'Rumus Luas'], rows: [
        ['Segitiga', '1/2 × alas × tinggi (1/2 × a × t)'],
        ['Jajar Genjang', 'alas × tinggi (a × t)'],
        ['Trapesium', '1/2 × (a + b) × t'],
        ['Belah Ketupat & Layang-Layang', '1/2 × d₁ × d₂'],
      ]},
      { type: 'tip', text: 'Tinggi (t) selalu TEGAK LURUS (membentuk sudut 90°) terhadap alas, bukan sisi miringnya!' },
    ],
    activityTitle: 'Latihan: Luas Bangun Datar',
    questions: [
      { text: 'Luas segitiga dengan alas 12 cm dan tinggi 8 cm adalah...', opts: ['96 cm²', '48 cm²', '20 cm²', '40 cm²'], ans: 1, exp: 'L = 1/2 × 12 × 8 = 48 cm².' },
      { text: 'Luas jajar genjang dengan alas 15 cm dan tinggi 6 cm adalah...', opts: ['45 cm²', '90 cm²', '42 cm²', '21 cm²'], ans: 1, exp: 'L = a × t = 15 × 6 = 90 cm².' },
      { text: 'Luas layang-layang dengan panjang diagonal 10 cm dan 14 cm adalah...', opts: ['140 cm²', '70 cm²', '48 cm²', '24 cm²'], ans: 1, exp: 'L = 1/2 × 10 × 14 = 70 cm².' },
    ],
  },
  {
    topicCode: 'MAT-SD5-06', subSeq: 3,
    objectives: ['Siswa mampu mengonversi satuan waktu (jam, menit, detik) dan menghitung lama waktu kegiatan.'],
    materialTitle: 'Pengukuran dan Operasi Waktu',
    blocks: [
      { type: 'formula', name: 'Konversi Satuan Waktu', expression: '1 jam = 60 menit  |  1 menit = 60 detik  |  1 jam = 3.600 detik', note: 'Hati-hati saat bersusun: 1 jam bukan 100 menit, melainkan 60 menit!' },
      { type: 'worked_example', level: 'Lama Kegiatan', question: 'Les matematika dimulai pukul 15.40 dan berakhir pukul 17.15. Berapa lama les berlangsung?', steps: ['15.40 ke 16.00 = 20 menit.', '16.00 ke 17.00 = 1 jam.', '17.00 ke 17.15 = 15 menit.', 'Total = 1 jam 35 menit (95 menit).'], answer: '1 jam 35 menit.' },
    ],
    activityTitle: 'Latihan: Pengukuran Waktu',
    questions: [
      { text: '2 jam 25 menit sama dengan ... menit.', opts: ['125', '145', '225', '85'], ans: 1, exp: '(2 × 60) + 25 = 120 + 25 = 145 menit.' },
      { text: 'Alya belajar mulai pukul 19.15 dan selesai pukul 20.45. Lama Alya belajar adalah...', opts: ['1 jam 15 menit', '1 jam 30 menit', '1 jam 45 menit', '2 jam'], ans: 1, exp: '20.45 − 19.15 = 1 jam 30 menit.' },
      { text: '3 menit 20 detik sama dengan ... detik.', opts: ['180', '200', '320', '140'], ans: 1, exp: '(3 × 60) + 20 = 200 detik.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-06', subSeq: 4,
    objectives: ['Siswa mampu mengenal jenis sudut (lancip, siku-siku, tumpul, lurus) dan mengukur sudut dengan busur derajat.'],
    materialTitle: 'Pengenalan Sudut dan Busur Derajat',
    blocks: [
      { type: 'table', title: '4 Jenis Sudut Berdasarkan Besarnya', headers: ['Jenis Sudut', 'Besar Sudut', 'Contoh Nyata'], rows: [
        ['Sudut Lancip', 'Antara 0° dan 90° (< 90°)', 'Ujung potongan pizza kecil, pukul 02.00 (60°)'],
        ['Sudut Siku-Siku', 'Tepat 90°', 'Pojok buku, pojok ubin, pukul 03.00'],
        ['Sudut Tumpul', 'Antara 90° dan 180°', 'Pukul 04.00 (120°), atap rumah landai'],
        ['Sudut Lurus', 'Tepat 180°', 'Garis lurus, pukul 06.00'],
      ]},
      { type: 'tip', text: 'Alat pengukur sudut disebut BUSUR DERAJAT! Pada jam dinding, setiap loncatan 1 angka bernilai 360° ÷ 12 = 30°!' },
    ],
    activityTitle: 'Latihan: Pengenalan Sudut',
    questions: [
      { text: 'Sudut yang besarnya 125° termasuk jenis sudut...', opts: ['Lancip', 'Siku-siku', 'Tumpul', 'Lurus'], ans: 2, exp: '90° < 125° < 180° → sudut tumpul.' },
      { text: 'Besar sudut terkecil yang dibentuk jarum jam pada pukul 03.00 adalah...', opts: ['60°', '90°', '120°', '180°'], ans: 1, exp: '3 angka × 30° = 90° (siku-siku).' },
      { text: 'Alat ukur baku untuk mengukur besar sudut adalah...', opts: ['Penggaris', 'Busur derajat', 'Jangka', 'Dinamometer'], ans: 1, exp: 'Busur derajat mengukur sudut dalam satuan derajat (°).' },
    ],
  },

  // BAB 7: GEOMETRI RUANG
  {
    topicCode: 'MAT-SD5-07', subSeq: 1,
    objectives: ['Siswa mampu membedakan sifat kubus dan balok serta menghitung volumenya.'],
    materialTitle: 'Mengenal Kubus dan Balok',
    blocks: [
      { type: 'table', title: 'Perbandingan Kubus vs Balok', headers: ['Aspek', 'Kubus', 'Balok'], rows: [
        ['Bentuk Sisi', '6 sisi berbentuk PERSEGI sama besar', '6 sisi berbentuk persegi panjang (3 pasang sejajar sama besar)'],
        ['Panjang Rusuk', 'Semua 12 rusuk SAMA panjang (s)', 'Punya panjang (p), lebar (l), dan tinggi (t)'],
        ['Rumus Volume', 'V = s × s × s = s³', 'V = p × l × t'],
        ['Contoh Benda', 'Dadu, rubik, kotak kado kubus', 'Kotak pensil, batu bata, akuarium, kardus sepatu'],
      ]},
    ],
    activityTitle: 'Latihan: Kubus & Balok',
    questions: [
      { text: 'Volume kubus dengan panjang rusuk 5 cm adalah...', opts: ['25 cm³', '75 cm³', '125 cm³', '150 cm³'], ans: 2, exp: 'V = 5 × 5 × 5 = 125 cm³.' },
      { text: 'Volume balok dengan panjang 10 cm, lebar 6 cm, dan tinggi 4 cm adalah...', opts: ['20 cm³', '120 cm³', '240 cm³', '400 cm³'], ans: 2, exp: 'V = 10 × 6 × 4 = 240 cm³.' },
      { text: 'Perbedaan utama kubus dan balok terletak pada...', opts: ['Jumlah sisinya', 'Bentuk sisinya (kubus semua persegi sama besar; balok persegi panjang)', 'Jumlah titik sudutnya', 'Jumlah rusuknya'], ans: 1, exp: 'Keduanya punya 6 sisi, 12 rusuk, 8 titik sudut, tetapi bentuk sisi kubus semuanya persegi kongruen.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-07', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi unsur bangun ruang (sisi, rusuk, dan titik sudut) pada kubus dan balok.'],
    materialTitle: 'Unsur Bangun Ruang (Sisi, Rusuk, Titik Sudut)',
    blocks: [
      { type: 'visual_cards', title: '3 Unsur Utama Kubus & Balok', cards: [
        { emoji: '📦', label: '6 Sisi (Bidang)', sub: 'Alas, tutup, depan, belakang, kiri, kanan' },
        { emoji: '📏', label: '12 Rusuk (Kerangka)', sub: 'Garis pertemuan dua sisi' },
        { emoji: '📍', label: '8 Titik Sudut (Pojok)', sub: 'Titik pertemuan 3 rusuk' },
      ]},
      { type: 'worked_example', level: 'Kerangka Kawat', question: 'Raka ingin membuat kerangka kubus dari kawat dengan panjang rusuk 10 cm. Berapa cm kawat yang dibutuhkan?', steps: ['Kubus memiliki 12 rusuk sama panjang.', 'Total kawat = 12 × 10 cm = 120 cm.'], answer: '120 cm.' },
    ],
    activityTitle: 'Latihan: Unsur Bangun Ruang',
    questions: [
      { text: 'Banyak sisi, rusuk, dan titik sudut pada kubus dan balok berturut-turut adalah...', opts: ['6, 8, 12', '6, 12, 8', '8, 12, 6', '4, 12, 8'], ans: 1, exp: 'Sisi = 6, Rusuk = 12, Titik sudut = 8.' },
      { text: 'Garis pertemuan antara dua sisi pada bangun ruang disebut...', opts: ['Titik sudut', 'Rusuk', 'Diagonal', 'Volume'], ans: 1, exp: 'Rusuk adalah garis kerangka pembentuk bangun ruang.' },
      { text: 'Panjang total kerangka balok (p = 8 cm, l = 5 cm, t = 4 cm) adalah...', opts: ['17 cm', '34 cm', '68 cm', '160 cm'], ans: 2, exp: '4 × (p + l + t) = 4 × (8 + 5 + 4) = 4 × 17 = 68 cm.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-07', subSeq: 3,
    objectives: ['Siswa mampu mengenali jaring-jaring kubus/balok serta menyusun dan menghitung kubus satuan.'],
    materialTitle: 'Jaring-Jaring & Susunan Kubus Satuan',
    blocks: [
      { type: 'text', text: 'Jika kardus kubus atau balok dibuka pada beberapa rusuknya hingga rata di lantai, bentuk datar yang terbentuk disebut JARING-JARING! Ada 11 pola jaring-jaring kubus (yang paling terkenal pola salib/T: 1-4-1).' },
      { type: 'worked_example', level: 'Menyusun Kubus Satuan', question: 'Susunan balok dibuat dari 4 kubus satuan ke samping, 3 ke belakang, dan 2 tingkat ke atas. Berapa total kubus satuannya?', steps: ['Hitung 1 lapisan dasar = 4 × 3 = 12 kubus.', 'Kalikan 2 tingkat = 12 × 2 = 24 kubus satuan.'], answer: '24 kubus satuan.' },
    ],
    activityTitle: 'Latihan: Jaring-Jaring & Kubus Satuan',
    questions: [
      { text: 'Jaring-jaring kubus terdiri atas ... buah bangun persegi yang saling terhubung.', opts: ['4', '5', '6', '8'], ans: 2, exp: 'Kubus memiliki 6 sisi persegi.' },
      { text: 'Jika jaring-jaring kubus memiliki 6 persegi sejajar memanjang dalam 1 garis lurus, apakah bisa dilipat jadi kubus?', opts: ['Bisa', 'Tidak bisa (sisi-sisinya akan tumpang tindih dan tak ada tutup kiri-kanan)', 'Bisa jadi bola', 'Bisa jadi kerucut'], ans: 1, exp: 'Harus ada persegi di sisi kiri dan kanan barisan utama sebagai penutup samping.' },
      { text: 'Sebuah susunan kubus besar terdiri dari 3×3×3 kubus satuan kecil. Jumlah kubus satuannya adalah...', opts: ['9', '18', '27', '36'], ans: 2, exp: '3 × 3 × 3 = 27 kubus satuan.' },
    ],
  },

  // BAB 8: DATA DAN PELUANG
  {
    topicCode: 'MAT-SD5-08', subSeq: 1,
    objectives: ['Siswa mampu menyusun data mentah ke dalam tabel frekuensi dan menentukan nilai tertinggi, terendah, serta modus sederhana.'],
    materialTitle: 'Membaca dan Menyusun Tabel Frekuensi',
    blocks: [
      { type: 'worked_example', level: 'Data Mentah → Tabel', question: 'Data ukuran sepatu 10 siswa: 35, 36, 36, 37, 36, 35, 38, 36, 37, 37. Ukuran apa yang paling sering muncul?', steps: ['Hitung frekuensi tiap ukuran: 35 (2), 36 (4), 37 (3), 38 (1).', 'Cek jumlah: 2+4+3+1 = 10 (cocok!).', 'Frekuensi terbanyak adalah ukuran 36 (4 siswa).'], answer: 'Ukuran 36 (terbanyak), terkecil 35, terbesar 38.' },
    ],
    activityTitle: 'Latihan: Tabel Frekuensi',
    questions: [
      { text: 'Data nilai kuis: 80, 90, 80, 70, 90, 80, 100. Frekuensi nilai 80 adalah...', opts: ['2', '3', '4', '1'], ans: 1, exp: 'Nilai 80 muncul sebanyak 3 kali.' },
      { text: 'Selisih antara data tertinggi (100) dan data terendah (70) pada data di atas adalah...', opts: ['20', '30', '40', '10'], ans: 1, exp: 'Jangkauan = 100 − 70 = 30.' },
      { text: 'Data yang paling sering muncul (frekuensi tertinggi) dalam sekumpulan data disebut...', opts: ['Modus', 'Keliling', 'Volume', 'Skala'], ans: 0, exp: 'Modus adalah nilai dengan frekuensi terbanyak.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-08', subSeq: 2,
    objectives: ['Siswa mampu membaca diagram batang tunggal dan diagram batang ganda (perbandingan dua kelompok).'],
    materialTitle: 'Diagram Batang Tunggal dan Ganda',
    blocks: [
      { type: 'table', title: 'Contoh Data Diagram Batang Ganda (Siswa Laki-Laki vs Perempuan)', headers: ['Ekskul', 'Laki-Laki', 'Perempuan', 'Total'], rows: [
        ['Pramuka', '14', '16', '30'],
        ['Tari', '4', '18', '22'],
        ['Futsal', '20', '6', '26'],
      ]},
      { type: 'tip', text: 'Diagram batang ganda memakai 2 warna batang berdampingan (mis. biru & oranye) untuk membandingkan 2 kelompok pada kategori yang sama!' },
    ],
    activityTitle: 'Latihan: Diagram Batang',
    questions: [
      { text: 'Dari tabel diagram batang ganda di atas, ekskul dengan selisih peserta laki-laki dan perempuan PALING BESAR adalah...', opts: ['Pramuka (selisih 2)', 'Tari (selisih 14) dan Futsal (selisih 14)', 'Tidak ada selisih', 'Pramuka dan Tari'], ans: 1, exp: 'Tari |18−4|=14 dan Futsal |20−6|=14, jauh lebih besar dari Pramuka (2).' },
      { text: 'Total seluruh siswa laki-laki pada ketiga ekskul tersebut adalah...', opts: ['36', '38', '40', '42'], ans: 1, exp: '14 + 4 + 20 = 38 siswa.' },
      { text: 'Fungsi utama diagram batang ganda adalah...', opts: ['Membandingkan dua set data secara langsung pada setiap kategori', 'Menghitung sudut', 'Menggambar jaring-jaring', 'Menyimpan foto'], ans: 0, exp: 'Batang berdampingan memudahkan perbandingan dua kelompok.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-08', subSeq: 3,
    objectives: ['Siswa mampu menganalisis piktogram dengan simbol utuh dan setengah simbol secara teliti.'],
    materialTitle: 'Analisis Piktogram',
    blocks: [
      { type: 'worked_example', level: 'Skala Utuh & Setengah', question: 'Dalam piktogram panen mangga, 1 gambar 🥭 = 20 kg. Jika kebun Pak Hasan bergambar 3 gambar utuh dan 1 setengah gambar, berapa kg panennya?', steps: ['3 gambar utuh = 3 × 20 = 60 kg.', '1 setengah gambar = 1/2 × 20 = 10 kg.', 'Total = 60 + 10 = 70 kg.'], answer: '70 kg.' },
    ],
    activityTitle: 'Latihan: Piktogram Kelas 5',
    questions: [
      { text: 'Jika 1 gambar 🐟 mewakili 50 ekor bandeng, maka 4,5 gambar (4 utuh + 1 setengah) mewakili ... ekor.', opts: ['200', '225', '250', '450'], ans: 1, exp: '(4 × 50) + 25 = 225 ekor.' },
      { text: 'Untuk menyajikan data 120 buku dengan skala 1 simbol = 30 buku, diperlukan ... simbol.', opts: ['3', '4', '5', '6'], ans: 1, exp: '120 ÷ 30 = 4 simbol.' },
      { text: 'Jika 1 simbol = 10 orang dan data yang ingin digambar adalah 35 orang, maka digambar...', opts: ['3 simbol utuh dan 1 setengah simbol', '4 simbol utuh', '3 simbol utuh saja', '35 simbol'], ans: 0, exp: '30 + 5 = 3,5 simbol.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-08', subSeq: 4,
    objectives: ['Siswa mampu membandingkan dua himpunan data (kenaikan, penurunan, selisih, dan rata-rata sederhana).'],
    materialTitle: 'Membandingkan Data',
    blocks: [
      { type: 'table', title: 'Perbandingan Tabungan Alya & Bima (Jan–Mar)', headers: ['Bulan', 'Alya', 'Bima'], rows: [
        ['Januari', 'Rp40.000', 'Rp35.000'],
        ['Februari', 'Rp50.000', 'Rp45.000'],
        ['Maret', 'Rp45.000', 'Rp60.000'],
      ]},
      { type: 'worked_example', level: 'Bandingkan Total', question: 'Siapa yang total tabungannya lebih besar selama 3 bulan?', steps: ['Alya = 40.000 + 50.000 + 45.000 = Rp135.000.', 'Bima = 35.000 + 45.000 + 60.000 = Rp140.000.'], answer: 'Bima lebih besar Rp5.000 daripada Alya!' },
    ],
    activityTitle: 'Latihan: Membandingkan Data',
    questions: [
      { text: 'Dari tabel di atas, kenaikan tabungan Bima dari Februari ke Maret adalah...', opts: ['Rp10.000', 'Rp15.000', 'Rp20.000', 'Rp25.000'], ans: 1, exp: '60.000 − 45.000 = Rp15.000.' },
      { text: 'Pada bulan apa tabungan Alya mengalami penurunan dibanding bulan sebelumnya?', opts: ['Januari', 'Februari', 'Maret', 'Tidak pernah'], ans: 2, exp: 'Dari 50.000 (Februari) turun menjadi 45.000 (Maret).' },
      { text: 'Selisih tabungan Bima dan Alya di bulan Maret adalah...', opts: ['Rp5.000', 'Rp10.000', 'Rp15.000', 'Rp20.000'], ans: 2, exp: '60.000 − 45.000 = Rp15.000.' },
    ],
  },
  {
    topicCode: 'MAT-SD5-08', subSeq: 5,
    objectives: ['Siswa mengenal skala kemungkinan suatu kejadian (pasti, mungkin, sangat mungkin, kurang mungkin, mustahil).'],
    materialTitle: 'Pengenalan Kemungkinan (Peluang Dasar)',
    blocks: [
      { type: 'visual_cards', title: 'Skala Kemungkinan Kejadian', cards: [
        { emoji: '❌', label: 'Mustahil (0%)', sub: 'Tidak mungkin terjadi: "Besok matahari terbit dari barat"' },
        { emoji: '🤏', label: 'Kurang Mungkin', sub: 'Mengambil 1 bola merah dari kantong berisi 1 merah & 9 biru' },
        { emoji: '⚖️', label: 'Sama Mungkin (50:50)', sub: 'Melempar 1 koin: muncul gambar atau angka sama besar kemungkinannya' },
        { emoji: '✅', label: 'Pasti (100%)', sub: 'Pasti terjadi: "Mengambil bola biru dari kantong yang isinya biru semua"' },
      ]},
    ],
    activityTitle: 'Latihan: Kemungkinan Kejadian',
    questions: [
      { text: 'Di dalam kantong ada 8 kelereng merah dan 2 kelereng kuning. Jika diambil 1 kelereng tanpa melihat, warna yang LEBIH MUNGKIN terambil adalah...', opts: ['Kuning', 'Merah', 'Hijau', 'Biru'], ans: 1, exp: 'Jumlah kelereng merah lebih banyak (8 vs 2) sehingga peluangnya lebih besar.' },
      { text: 'Pada kantong berisi 8 merah dan 2 kuning tadi, kemungkinan terambil kelereng HIJAU adalah...', opts: ['Pasti', 'Sangat mungkin', 'Mustahil (tidak mungkin)', 'Sama mungkin'], ans: 2, exp: 'Tidak ada kelereng hijau sama sekali di kantong → mustahil.' },
      { text: 'Saat melempar satu dadu bersisi angka 1 sampai 6, kejadian "muncul angka kurang dari 7" bersifat...', opts: ['Mustahil', 'Kurang mungkin', 'Pasti terjadi', 'Sama mungkin'], ans: 2, exp: 'Semua angka dadu (1,2,3,4,5,6) memang kurang dari 7 → pasti!' },
    ],
  },
];

upsertLessonsBatch('Kelas 5 SD — Matematika (8 Bab, 36 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

