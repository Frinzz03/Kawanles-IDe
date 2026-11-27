import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // MAT-SD4-04 (Align all 6 subtopics 1..6 to exact DB titles)
  {
    topicCode: 'MAT-SD4-04', subSeq: 1,
    objectives: ['Siswa mampu menentukan pecahan senilai dengan mengalikan atau membagi pembilang dan penyebut dengan bilangan yang sama.'],
    materialTitle: 'Pecahan Senilai dan Penyederhanaan',
    blocks: [
      { type: 'formula', name: 'Cara Mencari Pecahan Senilai', expression: 'a/b = (a × k) / (b × k)   atau   (a ÷ k) / (b ÷ k)', note: 'Pembilang dan penyebut harus dikali atau dibagi dengan bilangan yang SAMA (bukan 0)!' },
      { type: 'worked_example', level: 'Dasar', question: 'Carilah dua pecahan yang senilai dengan 2/3 dan sederhanakan 6/8!', steps: ['2/3 × 2/2 = 4/6; 2/3 × 3/3 = 6/9.', '6/8 ÷ 2/2 = 3/4 (bentuk paling sederhana!).'], answer: '4/6, 6/9, dan 3/4.' },
    ],
    activityTitle: 'Latihan: Pecahan Senilai',
    questions: [
      { text: 'Pecahan yang SENILAI dengan 3/5 adalah...', opts: ['6/10', '4/6', '6/8', '3/10'], ans: 0, exp: '(3×2)/(5×2) = 6/10.' },
      { text: 'Bentuk paling sederhana dari pecahan 8/12 adalah...', opts: ['2/3', '4/6', '1/2', '3/4'], ans: 0, exp: '8 ÷ 4 = 2 dan 12 ÷ 4 = 3 → 2/3.' },
      { text: 'Jika 1/4 = n/12, maka nilai n adalah...', opts: ['3', '4', '2', '6'], ans: 0, exp: 'Penyebut dikali 3 (4×3=12), maka pembilang 1×3 = 3.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-04', subSeq: 2,
    objectives: ['Siswa mampu membandingkan sekaligus mengurutkan beberapa pecahan dengan menyamakan penyebut atau perkalian silang.'],
    materialTitle: 'Membandingkan dan Mengurutkan Pecahan',
    blocks: [
      { type: 'tip', text: 'Langkah cepat membandingkan & mengurutkan pecahan berpenyebut beda: samakan penyebutnya ke KPK, lalu bandingkan angka pembilangnya dari kecil ke besar!' },
    ],
    activityTitle: 'Latihan: Bandingkan & Urutkan Pecahan',
    questions: [
      { text: 'Tanda perbandingan yang tepat untuk 2/3 ... 3/4 adalah...', opts: ['< (lebih kecil)', '>', '=', '≥'], ans: 0, exp: 'Samakan penyebut 12: 8/12 < 9/12, jadi 2/3 < 3/4.' },
      { text: 'Urutan pecahan 1/2, 1/4, 3/4 dari yang TERKECIL ke terbesar adalah...', opts: ['1/4, 1/2, 3/4', '1/2, 1/4, 3/4', '3/4, 1/2, 1/4', '1/4, 3/4, 1/2'], ans: 0, exp: '2/4, 1/4, 3/4 → urut dari kecil: 1/4, 1/2, 3/4.' },
      { text: 'Antara 3/5 dan 4/7, pecahan yang lebih BESAR adalah...', opts: ['3/5 (karena 21/35 > 20/35)', '4/7', 'Sama besar', 'Tidak bisa dibandingkan'], ans: 0, exp: 'Kali silang: 3×7 = 21 > 4×5 = 20 → 3/5 > 4/7.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-04', subSeq: 3,
    objectives: ['Siswa mampu membandingkan dua pecahan berpenyebut sama maupun berbeda dengan simbol <, >, atau =.'],
    materialTitle: 'Membandingkan Pecahan (<, >, =)',
    blocks: [
      { type: 'formula', name: 'Trik Perkalian Silang Membandingkan Pecahan', expression: 'Bandingkan a/b dan c/d → cek hasil (a × d) dibanding (c × b)!', note: 'Jika pembilang sama (misal 1/3 vs 1/5), makin KECIL penyebutnya justru makin BESAR nilainya (1/3 > 1/5)!' },
    ],
    activityTitle: 'Latihan: Membandingkan Pecahan',
    questions: [
      { text: 'Tanda yang tepat untuk mengisi 5/8 ... 3/8 adalah...', opts: ['>', '<', '=', '≤'], ans: 0, exp: 'Penyebut sudah sama (8), tinggal bandingkan 5 > 3.' },
      { text: 'Manakah pecahan yang LEBIH BESAR antara 1/3 dan 1/6?', opts: ['1/3', '1/6', 'Sama besar', 'Keduanya 0'], ans: 0, exp: '1 kue dibagi 3 potong tentu lebih besar dari dibagi 6 potong.' },
      { text: 'Tanda yang tepat untuk 2/5 ... 4/10 adalah...', opts: ['=', '>', '<', '≠'], ans: 0, exp: '2×10 = 20 dan 4×5 = 20 → keduanya senilai (=).' },
    ],
  },
  {
    topicCode: 'MAT-SD4-04', subSeq: 4,
    objectives: ['Siswa mampu mengurutkan 3 hingga 4 pecahan dari terkecil ke terbesar atau sebaliknya secara tepat.'],
    materialTitle: 'Mengurutkan Pecahan',
    blocks: [
      { type: 'worked_example', level: 'Urutkan 3 Pecahan', question: 'Urutkan 1/2, 2/3, 1/6 dari yang TERKECIL!', steps: ['KPK dari 2, 3, dan 6 adalah 6.', '1/2 = 3/6, 2/3 = 4/6, 1/6 = 1/6.', 'Urutan dari terkecil: 1/6, 1/2, 2/3!'], answer: '1/6, 1/2, 2/3' },
    ],
    activityTitle: 'Latihan: Mengurutkan Pecahan',
    questions: [
      { text: 'Urutan pecahan 2/3, 1/2, 5/6 dari yang TERKECIL ke terbesar adalah...', opts: ['1/2, 2/3, 5/6', '2/3, 1/2, 5/6', '5/6, 2/3, 1/2', '1/2, 5/6, 2/3'], ans: 0, exp: 'Ubah ke /6: 3/6, 4/6, 5/6 → 1/2, 2/3, 5/6.' },
      { text: 'Urutan pecahan 3/4, 1/2, 7/8 dari yang TERBESAR ke terkecil adalah...', opts: ['7/8, 3/4, 1/2', '1/2, 3/4, 7/8', '3/4, 7/8, 1/2', '7/8, 1/2, 3/4'], ans: 0, exp: 'Ubah ke /8: 6/8, 4/8, 7/8 → terbesar: 7/8, 3/4, 1/2.' },
      { text: 'Dari pecahan 2/5, 1/2, dan 3/10, pecahan yang paling KECIL adalah...', opts: ['3/10', '2/5', '1/2', 'Sama semua'], ans: 0, exp: 'Ubah ke /10: 4/10, 5/10, 3/10 → terkecil 3/10.' },
    ],
  },
  {
    topicCode: 'MAT-SD4-04', subSeq: 5,
    objectives: ['Siswa mampu mengubah pecahan biasa ke bentuk desimal (persepuluhan & perseratusan) dan sebaliknya.'],
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
    topicCode: 'MAT-SD4-04', subSeq: 6,
    objectives: ['Siswa mengenal arti persen (%) sebagai perseratus dan mampu mengubah pecahan/desimal sederhana ke persen (pengayaan menuju Fase C).'],
    materialTitle: 'Pengenalan Persen (%)',
    blocks: [
      { type: 'formula', name: 'Arti Persen (%)', expression: 'a% = a / 100', note: 'Persen artinya "perseratus". Sering kita lihat pada diskon belanja atau indikator baterai HP!' },
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

  // IPA-SMP7-03 (Align all 9 subtopics 1..9 to exact DB titles)
  {
    topicCode: 'IPA-SMP7-03', subSeq: 1,
    objectives: ['Siswa memahami gambaran terpadu besaran pokok (7 besaran), besaran turunan, dan sistem Satuan Internasional (SI).'],
    materialTitle: 'Ringkasan Besaran Pokok, Turunan, & Satuan SI',
    blocks: [
      { type: 'text', text: 'Dalam IPA, segala sesuatu yang dapat diukur dan dinyatakan dengan angka disebut BESARAN. Terdapat 7 BESARAN POKOK bersatuan SI (Panjang m, Massa kg, Waktu s, Suhu K, Kuat arus A, Intensitas cahaya cd, Jumlah zat mol), sedangkan BESARAN TURUNAN diturunkan dari besaran pokok (Luas m², Volume m³, Kecepatan m/s, Massa jenis kg/m³).' },
    ],
    activityTitle: 'Latihan: Besaran Pokok, Turunan, & SI',
    questions: [
      { text: 'Kelompok besaran yang SELURUHNYA merupakan besaran pokok beserta satuan SI-nya adalah...', opts: ['Panjang (m), massa (kg), waktu (s), suhu (K)', 'Luas (m²), volume (m³), kecepatan (m/s)', 'Panjang (cm), massa (gram), gaya (N)', 'Massa jenis, energi, daya'], ans: 0, exp: 'Meter, kilogram, sekon, dan kelvin adalah satuan SI besaran pokok.' },
      { text: 'Kecepatan (m/s) merupakan besaran turunan yang diturunkan dari dua besaran pokok, yaitu...', opts: ['Panjang dan waktu', 'Massa dan waktu', 'Panjang dan suhu', 'Massa dan panjang'], ans: 0, exp: 'Kecepatan = jarak (panjang) ÷ waktu.' },
      { text: 'Satuan SI resmi untuk suhu adalah...', opts: ['Kelvin (K)', 'Celsius (°C)', 'Fahrenheit (°F)', 'Reamur (°R)'], ans: 0, exp: 'Dalam sistem SI internasional, suhu menggunakan Kelvin (K).' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-03', subSeq: 2,
    objectives: ['Siswa memahami ragam alat ukur IPA beserta konsep nilai skala terkecil (NST / ketelitian) dalam pengukuran ilmiah.'],
    materialTitle: 'Pengantar Alat Ukur dan Ketelitian Pengukuran',
    blocks: [
      { type: 'table', title: 'Perbandingan Ketelitian 3 Alat Ukur Panjang', headers: ['Alat Ukur', 'Nilai Skala Terkecil (Ketelitian)', 'Cocok Untuk'], rows: [
        ['Mistar / Penggaris', '1 mm (0,1 cm)', 'Panjang buku, meja, garis'],
        ['Jangka Sorong', '0,1 mm (0,01 cm)', 'Diameter pipa, cincin, kedalaman tabung'],
        ['Mikrometer Sekrup', '0,01 mm (0,001 cm)', 'Tebal kertas, koin, diameter kawat tipis'],
      ]},
    ],
    activityTitle: 'Latihan: Alat Ukur & Ketelitian',
    questions: [
      { text: 'Urutan alat ukur panjang dari ketelitian RENDAH ke PALING TELITI adalah...', opts: ['Mistar (1 mm) → Jangka sorong (0,1 mm) → Mikrometer sekrup (0,01 mm)', 'Mikrometer → Jangka sorong → Mistar', 'Jangka sorong → Mistar → Mikrometer', 'Semua sama telitinya'], ans: 0, exp: 'Semakin kecil nilai skala terkecil (NST), semakin tinggi ketelitian alat ukur.' },
      { text: 'Untuk mengukur massa sebuah batu kecil hingga ketelitian 0,1 gram di laboratorium IPA, alat yang paling tepat adalah...', opts: ['Neraca Ohaus / neraca digital laboratorium', 'Penggaris', 'Stopwatch', 'Termometer'], ans: 0, exp: 'Neraca Ohaus dan neraca digital mengukur massa dengan presisi tinggi.' },
      { text: 'Mengapa pengukuran ilmiah sering diulang 3 kali lalu diambil rata-ratanya?', opts: ['Mengurangi pengaruh kesalahan acak sehingga hasil pengukuran lebih akurat', 'Agar menghabiskan waktu lab', 'Karena alat selalu rusak', 'Agar angkanya jadi besar'], ans: 0, exp: 'Pengukuran berulang meningkatkan akurasi data eksperimen.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-03', subSeq: 3,
    objectives: ['Siswa memahami hakikat pengukuran (membandingkan besaran dengan satuan) serta membedakan satuan baku dan tidak baku.'],
    materialTitle: 'Besaran, Nilai, dan Satuan',
    blocks: [
      { type: 'text', text: 'Mengukur adalah membandingkan suatu besaran yang diukur dengan besaran sejenis yang dipakai sebagai SATUAN. Contoh: "Panjang meja = 1,5 meter" → Panjang = BESARAN, 1,5 = NILAI, meter = SATUAN baku!' },
    ],
    activityTitle: 'Latihan: Besaran & Satuan',
    questions: [
      { text: 'Pada hasil pengukuran "Massa semangka adalah 3,2 kg", yang disebut BESARAN dan SATUAN berturut-turut adalah...', opts: ['Massa dan kg', '3,2 dan semangka', 'kg dan 3,2', 'Semangka dan massa'], ans: 0, exp: 'Massa = besaran yang diukur; 3,2 = nilai; kg = satuan.' },
      { text: 'Mengapa jengkal, hasta, dan depa TIDAK digunakan sebagai satuan ilmiah (baku)?', opts: ['Karena ukuran tubuh setiap orang berbeda sehingga hasilnya tidak seragam', 'Karena terlalu panjang', 'Karena tidak bisa dipakai di rumah', 'Karena berupa angka desimal'], ans: 0, exp: 'Satuan baku bersifat tetap, universal, dan mudah ditiru di seluruh dunia.' },
      { text: 'Manakah yang merupakan contoh BESARAN (dapat diukur dan dinyatakan dengan angka)?', opts: ['Suhu udara, luas tanah, dan volume air', 'Rasa sedih dan keindahan lukisan', 'Kejujuran dan kebaikan hati', 'Warna kesukaan'], ans: 0, exp: 'Besaran fisika selalu dapat diukur secara kuantitatif.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-03', subSeq: 4,
    objectives: ['Siswa mampu menghafal 7 besaran pokok (JIWA SMP) dan membedakannya dari besaran turunan.'],
    materialTitle: '7 Besaran Pokok dan Besaran Turunan',
    blocks: [
      { type: 'table', title: '7 Besaran Pokok (Jembatan Keledai: JIWA SMP)', headers: ['Huruf', 'Besaran Pokok', 'Satuan SI (Simbol)'], rows: [
        ['J', 'Jumlah zat', 'mol (mol)'],
        ['I', 'Intensitas cahaya', 'kandela (cd)'],
        ['W', 'Waktu', 'sekon (s)'],
        ['A', 'Arus listrik (Kuat arus)', 'ampere (A)'],
        ['S', 'Suhu', 'kelvin (K)'],
        ['M', 'Massa', 'kilogram (kg)'],
        ['P', 'Panjang', 'meter (m)'],
      ]},
    ],
    activityTitle: 'Latihan: Besaran Pokok & Turunan',
    questions: [
      { text: 'Jembatan keledai "JIWA SMP" membantu menghafal 7 besaran pokok. Huruf "A" dan "I" mewakili...', opts: ['Arus listrik (ampere) dan Intensitas cahaya (kandela)', 'Air dan Ikan', 'Area dan Isi', 'Angin dan Iklim'], ans: 0, exp: 'J-I-W-A-S-M-P = Jumlah zat, Intensitas cahaya, Waktu, Arus listrik, Suhu, Massa, Panjang.' },
      { text: 'Manakah kelompok yang SELURUHNYA merupakan BESARAN TURUNAN?', opts: ['Luas, volume, massa jenis, gaya, dan kecepatan', 'Panjang, massa, waktu', 'Suhu, kuat arus, jumlah zat', 'Panjang, luas, waktu'], ans: 0, exp: 'Semua selain 7 besaran pokok adalah besaran turunan.' },
      { text: 'Massa jenis (ρ = m / V) diturunkan dari besaran pokok...', opts: ['Massa dan panjang (volume = panjang³)', 'Massa dan waktu', 'Suhu dan waktu', 'Kuat arus dan panjang'], ans: 0, exp: 'Satuan kg/m³ berasal dari massa (kg) dan panjang pangkat tiga (m³).' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-03', subSeq: 5,
    objectives: ['Siswa memahami sistem Satuan Internasional (SI / MKS) beserta awalan metrik (kilo, senti, mili, mikro).'],
    materialTitle: 'Satuan Internasional (SI) dan Awalan Metrik',
    blocks: [
      { type: 'table', title: 'Awalan Metrik SI Wajib Tahu', headers: ['Awalan', 'Simbol', 'Faktor Pengali'], rows: [
        ['Mega / Kilo', 'M / k', '10⁶ (1.000.000)  |  10³ (1.000)'],
        ['Senti / Mili', 'c / m', '10⁻² (1/100)  |  10⁻³ (1/1.000)'],
        ['Mikro / Nano', 'μ / n', '10⁻⁶  |  10⁻⁹'],
      ]},
    ],
    activityTitle: 'Latihan: Satuan SI',
    questions: [
      { text: 'Satuan SI untuk panjang, massa, dan waktu berturut-turut (sistem MKS) adalah...', opts: ['cm, gram, menit', 'meter, kilogram, sekon', 'km, ton, jam', 'inci, pon, detik'], ans: 1, exp: 'MKS = Meter, Kilogram, Sekon.' },
      { text: 'Arti awalan "mili" (m) pada 1 milimeter (mm) terhadap meter adalah...', opts: ['1/10 m', '1/100 m', '1/1.000 m', '1.000 m'], ans: 2, exp: '1 m = 1.000 mm → 1 mm = 1/1.000 m.' },
      { text: 'Keunggulan utama sistem metrik SI adalah berbasis kelipatan...', opts: ['10 (desimal)', '12', '60', '24'], ans: 0, exp: 'Basis 10 memudahkan konversi cukup menggeser koma.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-03', subSeq: 6,
    objectives: ['Siswa mampu mengenal alat ukur panjang, massa, waktu, suhu, dan volume beserta cara kerjanya.'],
    materialTitle: 'Alat Ukur Panjang, Massa, Waktu, Suhu, & Volume',
    blocks: [
      { type: 'table', title: 'Alat Ukur & Tingkat Ketelitiannya', headers: ['Besaran', 'Alat Ukur', 'Ketelitian (NST)'], rows: [
        ['Panjang', 'Mistar | Jangka sorong | Mikrometer sekrup', '1 mm | 0,1 mm | 0,01 mm'],
        ['Massa', 'Neraca Ohaus (3 lengan), neraca digital', 'Hingga 0,1 g / 0,01 g'],
        ['Waktu', 'Stopwatch (analog/digital)', '0,1 s / 0,01 s'],
        ['Suhu', 'Termometer raksa/alkohol/digital', '0,5°C – 1°C'],
        ['Volume benda tak beraturan', 'Gelas ukur berisi air (V = V₂ − V₁)', '1 mL'],
      ]},
    ],
    activityTitle: 'Latihan: Alat Ukur IPA',
    questions: [
      { text: 'Alat ukur panjang yang PALING TELITI (ketelitian 0,01 mm) untuk mengukur tebal selembar kertas atau diameter kawat tipis adalah...', opts: ['Mistar', 'Meteran gulung', 'Jangka sorong', 'Mikrometer sekrup'], ans: 3, exp: 'Mikrometer sekrup memiliki ketelitian tertinggi (0,01 mm).' },
      { text: 'Sebuah batu tak beraturan dicelupkan ke gelas ukur berisi 50 mL air, sehingga permukaan air naik ke 72 mL. Volume batu tersebut adalah...', opts: ['50 mL', '72 mL', '22 mL (22 cm³)', '122 mL'], ans: 2, exp: 'V benda = V akhir − V awal = 72 − 50 = 22 mL = 22 cm³.' },
      { text: 'Alat laboratorium untuk mengukur massa benda secara presisi menggunakan tiga lengan geser adalah...', opts: ['Neraca Ohaus', 'Dinamometer', 'Barometer', 'Jangka sorong'], ans: 0, exp: 'Neraca Ohaus mengukur massa benda; dinamometer mengukur gaya/berat.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-03', subSeq: 7,
    objectives: ['Siswa mampu memilih alat ukur yang paling tepat berdasarkan ukuran objek dan ketelitian yang diperlukan.'],
    materialTitle: 'Pemilihan Alat Ukur yang Tepat',
    blocks: [
      { type: 'visual_cards', title: 'Cocokkan Objek dengan Alat Ukurnya!', cards: [
        { emoji: '🔩', label: 'Diameter Dalam/Luar Pipa & Cincin', sub: 'Gunakan JANGKA SORONG (ada rahang dalam & luar!)' },
        { emoji: '📄', label: 'Tebal Pelat Besi / Koin / Kawat', sub: 'Gunakan MIKROMETER SEKRUP (ketelitian 0,01 mm)' },
        { emoji: '🏃', label: 'Catatan Lari 100 Meter', sub: 'Gunakan STOPWATCH (ketelitian 0,01 detik)' },
      ]},
    ],
    activityTitle: 'Latihan: Pemilihan Alat Ukur',
    questions: [
      { text: 'Untuk mengukur diameter dalam sebuah tabung reaksi atau pipa paralon kecil, alat yang paling tepat adalah...', opts: ['Mistar kayu', 'Jangka sorong', 'Termometer', 'Neraca pegas'], ans: 1, exp: 'Jangka sorong dilengkapi rahang atas khusus pengukur diameter dalam.' },
      { text: 'Untuk mengukur panjang lapangan upacara sekolah (sekitar 40 meter), alat yang paling praktis adalah...', opts: ['Mikrometer sekrup', 'Meteran rol (pita ukur panjang)', 'Jangka sorong', 'Penggaris 15 cm'], ans: 1, exp: 'Meteran rol dirancang untuk jarak puluhan meter.' },
      { text: 'Alat yang tepat untuk mengukur suhu tubuh siswa saat demam adalah...', opts: ['Termometer klinis/badan (skala 35°C–42°C)', 'Termometer ruang', 'Barometer', 'Higrometer'], ans: 0, exp: 'Termometer klinis memiliki rentang suhu khusus tubuh manusia.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-03', subSeq: 8,
    objectives: ['Siswa mampu melakukan konversi satuan panjang, massa, waktu, dan kecepatan (km/jam ↔ m/s).'],
    materialTitle: 'Konversi Satuan dalam IPA',
    blocks: [
      { type: 'formula', name: 'Trik Cepat Konversi Kecepatan!', expression: 'km/jam → m/s : BAGI 3,6   |   m/s → km/jam : KALI 3,6', note: 'Contoh: 72 km/jam = 72 ÷ 3,6 = 20 m/s! (Karena 1.000 m / 3.600 s = 1 / 3,6).' },
    ],
    activityTitle: 'Latihan: Konversi Satuan',
    questions: [
      { text: '36 km/jam jika diubah ke satuan SI (m/s) adalah...', opts: ['10 m/s', '15 m/s', '20 m/s', '360 m/s'], ans: 0, exp: '36 ÷ 3,6 = 10 m/s.' },
      { text: '2,5 ton sama dengan ... kg.', opts: ['250', '2.500', '25.000', '25'], ans: 1, exp: '1 ton = 1.000 kg → 2,5 × 1.000 = 2.500 kg.' },
      { text: '15 m/s jika diubah ke km/jam adalah...', opts: ['45 km/jam', '54 km/jam', '60 km/jam', '72 km/jam'], ans: 1, exp: '15 × 3,6 = 54 km/jam.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-03', subSeq: 9,
    objectives: ['Siswa mampu membaca skala alat ukur tanpa kesalahan paralaks serta membaca jangka sorong dan mencatat hasil pengukuran dengan benar.'],
    materialTitle: 'Ketelitian, Kesalahan Paralaks, & Pencatatan Hasil Ukur',
    blocks: [
      { type: 'misconception', wrong: 'Membaca angka pada penggaris atau gelas ukur dari samping (miring).', right: 'Posisi mata HARUS TEGAK LURUS tepat di depan garis skala (dan baca dasar lengkungan/meniskus cekung untuk air di gelas ukur) agar terhindar dari KESALAHAN PARALAKS!' },
      { type: 'worked_example', level: 'Membaca Jangka Sorong', question: 'Skala utama sebelum angka 0 nonius menunjukkan 2,3 cm, dan garis skala nonius yang tepat berimpit adalah garis ke-6 (0,06 cm). Berapa hasil ukurnya?', steps: ['Hasil = Skala Utama + (Skala Nonius × 0,01 cm).', '2,3 cm + 0,06 cm = 2,36 cm.'], answer: '2,36 cm.' },
    ],
    activityTitle: 'Latihan: Ketelitian Pengukuran',
    questions: [
      { text: 'Kesalahan pembacaan alat ukur yang disebabkan oleh posisi sudut pandang mata yang tidak tegak lurus skala disebut kesalahan...', opts: ['Paralaks', 'Kalibrasi', 'Gravitasi', 'Pembiasan'], ans: 0, exp: 'Kesalahan paralaks dihindari dengan meletakkan mata sejajar tegak lurus skala.' },
      { text: 'Pada pengukuran jangka sorong: skala utama = 4,2 cm dan skala nonius berimpit di angka 5 (0,05 cm). Hasil pengukurannya adalah...', opts: ['4,7 cm', '4,25 cm', '4,52 cm', '9,2 cm'], ans: 1, exp: '4,2 + 0,05 = 4,25 cm.' },
      { text: 'Jika sebuah benda diletakkan dari tanda 2,5 cm sampai 8,2 cm pada penggaris yang ujung nolnya patah, panjang benda tersebut adalah...', opts: ['8,2 cm', '5,7 cm', '10,7 cm', '6,3 cm'], ans: 1, exp: '8,2 − 2,5 = 5,7 cm.' },
    ],
  },
];

upsertLessonsBatch('Patch 100% Alignment — MAT-SD4-04 (6 sub) & IPA-SMP7-03 (9 sub)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

