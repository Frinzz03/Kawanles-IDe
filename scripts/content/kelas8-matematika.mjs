import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: POLA BILANGAN (5 sub)
  {
    topicCode: 'MAT-SMP8-01', subSeq: 1,
    objectives: ['Siswa mampu mengenali berbagai jenis pola bilangan (genap, ganjil, segitiga, persegi, Fibonacci, aritmetika, geometri).'],
    materialTitle: 'Mengenal Pola Bilangan',
    blocks: [
      { type: 'text', text: 'Pola bilangan adalah susunan bilangan yang mengikuti aturan atau keteraturan tertentu sehingga suku berikutnya dapat diprediksi secara logis.' },
      { type: 'table', title: 'Pola Bilangan Istimewa', headers: ['Nama Pola', 'Barisan Bilangan', 'Aturan Singkat'], rows: [
        ['Bilangan Genap', '2, 4, 6, 8, ...', 'Un = 2n'],
        ['Bilangan Ganjil', '1, 3, 5, 7, ...', 'Un = 2n − 1'],
        ['Bilangan Persegi', '1, 4, 9, 16, 25, ...', 'Un = n²'],
        ['Bilangan Segitiga', '1, 3, 6, 10, 15, ...', 'Un = ½ n(n + 1)'],
        ['Fibonacci', '1, 1, 2, 3, 5, 8, 13, ...', 'Suku baru = jumlah 2 suku sebelumnya'],
      ]},
    ],
    activityTitle: 'Latihan: Pola Bilangan',
    questions: [
      { text: 'Dua suku berikutnya dari barisan Fibonacci 2, 3, 5, 8, 13, ... adalah...', opts: ['21 dan 34', '20 dan 30', '18 dan 25', '21 dan 32'], ans: 0, exp: '8 + 13 = 21, lalu 13 + 21 = 34.' },
      { text: 'Suku ke-7 pada pola bilangan persegi (1, 4, 9, 16, ...) adalah...', opts: ['49', '36', '64', '42'], ans: 0, exp: 'U7 = 7² = 49.' },
      { text: 'Suku ke-6 pada pola bilangan segitiga (1, 3, 6, 10, ...) adalah...', opts: ['21', '15', '28', '18'], ans: 0, exp: 'U6 = ½ × 6 × (6 + 1) = 3 × 7 = 21.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-01', subSeq: 2,
    objectives: ['Siswa mampu mengubah konfigurasi objek/gambar (batang korek api, noktah, ubin) menjadi barisan bilangan.'],
    materialTitle: 'Pola Gambar dan Konfigurasi Objek',
    blocks: [
      { type: 'worked_example', level: 'Konfigurasi Batang Korek Api', question: 'Pola 1 butuh 4 korek api (1 persegi), pola 2 butuh 7 korek api (2 persegi berdempet), pola 3 butuh 10 korek api. Berapa korek api pada pola ke-10?', steps: ['Barisan: 4, 7, 10, ... (selalu bertambah +3 tiap menambah 1 persegi).', 'Rumus: Un = 3n + 1.', 'Untuk n = 10: U10 = 3(10) + 1 = 31 batang.'], answer: '31 batang korek api' },
    ],
    activityTitle: 'Latihan: Pola Gambar',
    questions: [
      { text: 'Susunan noktah membentuk persegi panjang: pola-1 = 1×2 = 2, pola-2 = 2×3 = 6, pola-3 = 3×4 = 12. Banyak noktah pola ke-8 adalah...', opts: ['72', '64', '56', '80'], ans: 0, exp: 'Un = n(n + 1) → U8 = 8 × 9 = 72.' },
      { text: 'Segitiga berderet dari korek api: pola-1 = 3 batang, pola-2 = 5 batang, pola-3 = 7 batang. Banyak batang pada pola ke-15 adalah...', opts: ['31', '30', '33', '29'], ans: 0, exp: 'Un = 2n + 1 → U15 = 2(15) + 1 = 31.' },
      { text: 'Tumpukan kaleng disusun 1 di baris atas, 2 di baris kedua, 3 di baris ketiga, dst. Total kaleng untuk 5 baris adalah...', opts: ['15', '10', '20', '25'], ans: 0, exp: '1 + 2 + 3 + 4 + 5 = 15 (pola bilangan segitiga ke-5).' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-01', subSeq: 3,
    objectives: ['Siswa mampu menganalisis pola bilangan membesar (tambah/kali) dan mengecil (kurang/bagi) termasuk pola bertingkat.'],
    materialTitle: 'Pola Bilangan Membesar dan Mengecil',
    blocks: [
      { type: 'table', title: 'Strategi Cek Aturan Pola', headers: ['Jenis Pola', 'Contoh', 'Ciri'], rows: [
        ['Membesar (beda tetap)', '5, 9, 13, 17, ...', 'Selalu +4 (aritmetika naik)'],
        ['Mengecil (beda tetap)', '50, 44, 38, 32, ...', 'Selalu −6 (aritmetika turun)'],
        ['Membesar (rasio tetap)', '3, 6, 12, 24, ...', 'Selalu ×2 (geometri naik)'],
        ['Mengecil (rasio tetap)', '160, 80, 40, 20, ...', 'Selalu ÷2 atau ×½ (geometri turun)'],
        ['Pola Bertingkat', '2, 5, 10, 17, 26, ...', 'Selisihnya +3, +5, +7, +9 (naik +2 tiap langkah)'],
      ]},
    ],
    activityTitle: 'Latihan: Pola Membesar & Mengecil',
    questions: [
      { text: 'Suku berikutnya dari pola mengecil 96, 48, 24, 12, ... adalah...', opts: ['6', '8', '4', '0'], ans: 0, exp: 'Rasio ×½ (dibagi 2) → 12 ÷ 2 = 6.' },
      { text: 'Suku ke-6 dari barisan bertingkat 3, 5, 9, 15, 23, ... adalah...', opts: ['33', '31', '35', '29'], ans: 0, exp: 'Selisih: +2, +4, +6, +8, berikutnya +10 → 23 + 10 = 33.' },
      { text: 'Barisan 100, 93, 86, 79, ... memiliki suku ke-6 bernilai...', opts: ['65', '72', '58', '64'], ans: 0, exp: 'Selalu −7: U5 = 72, U6 = 72 − 7 = 65.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-01', subSeq: 4,
    objectives: ['Siswa mampu merumuskan suku ke-n (generalisasi pola) dari barisan aritmetika dan geometri sederhana.'],
    materialTitle: 'Generalisasi Pola (Rumus Suku ke-n)',
    blocks: [
      { type: 'formula', name: 'Rumus Suku ke-n Aritmetika & Geometri', expression: 'Aritmetika: Un = a + (n − 1)b    |    Geometri: Un = a · r^(n−1)', note: 'a = suku pertama (U1), b = beda tetap (U2 − U1), r = rasio tetap (U2 ÷ U1).' },
      { type: 'worked_example', level: 'Generalisasi Aritmetika', question: 'Tentukan rumus suku ke-n dari barisan 7, 11, 15, 19, ...!', steps: ['a = 7 dan b = 11 − 7 = 4.', 'Un = 7 + (n − 1)4 = 7 + 4n − 4 = 4n + 3.', 'Cek n = 3: 4(3) + 3 = 15 (Cocok!).'], answer: 'Un = 4n + 3' },
    ],
    activityTitle: 'Latihan: Generalisasi Pola',
    questions: [
      { text: 'Rumus suku ke-n dari barisan 5, 8, 11, 14, ... adalah...', opts: ['Un = 3n + 2', 'Un = 3n + 5', 'Un = 5n + 3', 'Un = 2n + 3'], ans: 0, exp: 'a = 5, b = 3 → Un = 5 + (n − 1)3 = 3n + 2.' },
      { text: 'Rumus suku ke-n dari barisan 20, 17, 14, 11, ... adalah...', opts: ['Un = 23 − 3n', 'Un = 20 − 3n', 'Un = 3n − 23', 'Un = 17 − 3n'], ans: 0, exp: 'a = 20, b = −3 → Un = 20 + (n − 1)(−3) = 23 − 3n.' },
      { text: 'Barisan geometri 2, 6, 18, 54, ... memiliki rumus suku ke-n...', opts: ['Un = 2 · 3^(n−1)', 'Un = 3 · 2^(n−1)', 'Un = 2 · 3^n', 'Un = 6n'], ans: 0, exp: 'a = 2, r = 6 ÷ 2 = 3 → Un = 2 · 3^(n−1).' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-01', subSeq: 5,
    objectives: ['Siswa mampu menentukan suku ke-n dan menyelesaikan masalah kontekstual menggunakan pola bilangan.'],
    materialTitle: 'Menentukan Suku Berdasarkan Pola',
    blocks: [
      { type: 'worked_example', level: 'Aplikasi Kursi Gedung', question: 'Gedung pertunjukan punya 12 kursi di baris pertama, 15 di baris kedua, 18 di baris ketiga, dst. Berapa banyak kursi di baris ke-20?', steps: ['a = 12, b = 3.', 'U20 = a + 19b = 12 + 19(3) = 12 + 57 = 69 kursi.'], answer: '69 kursi' },
      { type: 'tip', text: 'Untuk soal angka satuan bilangan berpangkat besar (misal 2^50), cari pola angka satuannya (2, 4, 8, 6 berulang tiap 4), lalu bagi pangkatnya dengan 4 dan lihat sisanya!' },
    ],
    activityTitle: 'Latihan: Menentukan Suku ke-n',
    questions: [
      { text: 'Diketahui rumus suku ke-n suatu barisan adalah Un = 5n − 4. Nilai U12 adalah...', opts: ['56', '60', '52', '64'], ans: 0, exp: 'U12 = 5(12) − 4 = 60 − 4 = 56.' },
      { text: 'Seorang siswa menabung Rp10.000 di minggu ke-1, Rp15.000 di minggu ke-2, Rp20.000 di minggu ke-3, dst. Besar tabungannya pada minggu ke-10 adalah...', opts: ['Rp55.000', 'Rp50.000', 'Rp60.000', 'Rp45.000'], ans: 0, exp: 'a = 10.000, b = 5.000 → U10 = 10.000 + 9(5.000) = Rp55.000.' },
      { text: 'Angka satuan dari 3^25 adalah... (petunjuk: 3^1=3, 3^2=9, 3^3=27, 3^4=81, berulang tiap 4)', opts: ['3', '9', '7', '1'], ans: 0, exp: '25 ÷ 4 = 6 sisa 1 → angka satuan sama dengan 3^1 = 3.' },
    ],
  },

  // BAB 2: RELASI DAN FUNGSI (6 sub)
  {
    topicCode: 'MAT-SMP8-02', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian relasi dua himpunan dan menyatakan aturan relasinya.'],
    materialTitle: 'Pengertian Relasi Dua Himpunan',
    blocks: [
      { type: 'text', text: 'Relasi dari himpunan A ke himpunan B adalah aturan yang memasangkan anggota himpunan A dengan anggota himpunan B. Pada relasi bebas, satu anggota A boleh punya 0, 1, atau lebih dari satu pasangan di B.' },
      { type: 'tip', text: 'Contoh relasi: A = {2, 3, 4} ke B = {4, 6, 8, 9} dengan relasi "faktor dari" → 2 berpasangan dengan {4, 6, 8}, 3 dengan {6, 9}, dan 4 dengan {4, 8}.' },
    ],
    activityTitle: 'Latihan: Pengertian Relasi',
    questions: [
      { text: 'Diketahui A = {2, 4, 6} dan B = {1, 2, 3}. Relasi dari A ke B yang memasangkan {(2,1), (4,2), (6,3)} adalah...', opts: ['"dua kali dari"', '"setengah dari"', '"kurang dari"', '"kuadrat dari"'], ans: 0, exp: '2 adalah dua kali dari 1, 4 adalah dua kali dari 2, 6 adalah dua kali dari 3.' },
      { text: 'Pasangan himpunan A = {Surabaya, Semarang, Bandung} dan B = {Jawa Timur, Jawa Tengah, Jawa Barat} paling tepat dihubungkan oleh relasi...', opts: ['"ibu kota provinsi"', '"lebih besar dari"', '"kelipatan dari"', '"kuadrat dari"'], ans: 0, exp: 'Masing-masing kota merupakan ibu kota provinsi pasangannya.' },
      { text: 'Jika A = {1, 2, 3} dan B = {1, 4, 9} dihubungkan relasi "akar kuadrat dari", pasangan berurutannya adalah...', opts: ['{(1,1), (2,4), (3,9)}', '{(1,1), (4,2), (9,3)}', '{(1,4), (2,9)}', '{(3,1), (2,4)}'], ans: 0, exp: '1 akar kuadrat dari 1, 2 akar kuadrat dari 4, 3 akar kuadrat dari 9.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-02', subSeq: 2,
    objectives: ['Siswa mampu membedakan fungsi (pemetaan) dari relasi biasa dan menghitung banyaknya pemetaan.'],
    materialTitle: 'Pengertian Fungsi (Pemetaan)',
    blocks: [
      { type: 'formula', name: 'Syarat Mutlak Fungsi f: A → B', expression: 'SETIAP anggota A (domain) wajib punya TEPAT SATU pasangan di B!', note: 'Tidak boleh jomblo (tanpa pasangan) dan tidak boleh bercabang (punya ≥2 pasangan)! Anggota B boleh tidak dipilih atau dipilih berkali-kali. Banyak fungsi dari A ke B = n(B)^n(A).' },
      { type: 'misconception', wrong: 'Anggota B tidak boleh menerima lebih dari satu panah agar disebut fungsi.', right: 'Syarat fungsi HANYA memeriksa himpunan asal (A)! Dua anggota A boleh menunjuk ke anggota B yang sama. (Yang 1-ke-1 itu disebut korespondensi satu-satu).' },
    ],
    activityTitle: 'Latihan: Pengertian Fungsi',
    questions: [
      { text: 'Manakah himpunan pasangan berurutan berikut yang merupakan FUNGSI dari A = {1, 2, 3} ke B = {a, b}?', opts: ['{(1,a), (2,a), (3,b)}', '{(1,a), (1,b), (2,a), (3,b)}', '{(1,a), (2,b)}', '{(1,a), (2,a), (2,b)}'], ans: 0, exp: 'Setiap elemen A (1, 2, 3) muncul tepat satu kali di posisi pertama.' },
      { text: 'Jika n(A) = 3 dan n(B) = 2, maka banyaknya fungsi (pemetaan) yang mungkin dari A ke B adalah...', opts: ['8', '9', '6', '5'], ans: 0, exp: 'Banyak fungsi A → B = n(B)^n(A) = 2³ = 8.' },
      { text: 'Korespondensi satu-satu antara himpunan P dan Q dapat terjadi HANYA jika n(P) = n(Q). Jika n(P) = n(Q) = 4, banyak korespondensi satu-satu adalah...', opts: ['24', '16', '8', '12'], ans: 0, exp: 'n! = 4! = 4 × 3 × 2 × 1 = 24.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-02', subSeq: 3,
    objectives: ['Siswa mampu menentukan domain, kodomain, range, dan menghitung nilai fungsi f(x).'],
    materialTitle: 'Domain, Kodomain, Range, dan Nilai Fungsi',
    blocks: [
      { type: 'table', title: '3 Istilah Penting Fungsi f: A → B', headers: ['Istilah', 'Arti'], rows: [
        ['Domain (Daerah Asal)', 'Seluruh anggota himpunan A'],
        ['Kodomain (Daerah Kawan)', 'Seluruh anggota himpunan B'],
        ['Range (Daerah Hasil)', 'Hanya anggota B yang TERPILIH (mendapat panah dari A)'],
      ]},
      { type: 'worked_example', level: 'Menghitung Nilai Fungsi', question: 'Diketahui f(x) = 3x − 2 dengan domain {1, 2, 3, 4}. Tentukan range-nya!', steps: ['f(1) = 3(1)−2 = 1; f(2) = 3(2)−2 = 4; f(3) = 3(3)−2 = 7; f(4) = 3(4)−2 = 10.'], answer: 'Range = {1, 4, 7, 10}' },
    ],
    activityTitle: 'Latihan: Domain, Kodomain, & Range',
    questions: [
      { text: 'Diketahui fungsi f(x) = 2x + 5 dengan domain {-1, 0, 1, 2}. Daerah hasil (range) fungsi f adalah...', opts: ['{3, 5, 7, 9}', '{2, 5, 7, 9}', '{3, 5, 6, 9}', '{-1, 0, 1, 2}'], ans: 0, exp: 'f(-1)=3, f(0)=5, f(1)=7, f(2)=9.' },
      { text: 'Jika f(x) = 4x − 7 dan f(a) = 13, maka nilai a adalah...', opts: ['5', '6', '4', '3'], ans: 0, exp: '4a − 7 = 13 → 4a = 20 → a = 5.' },
      { text: 'Pada fungsi f: A → B dengan pasangan {(1,2), (2,4), (3,6)} dan B = {2, 4, 6, 8, 10}, himpunan {2, 4, 6} disebut...', opts: ['Range (daerah hasil)', 'Domain', 'Kodomain', 'Relasi'], ans: 0, exp: 'Range hanya memuat anggota kodomain yang memiliki pasangan dari domain.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-02', subSeq: 4,
    objectives: ['Siswa mampu menyajikan dan membaca relasi/fungsi menggunakan diagram panah.'],
    materialTitle: 'Menyajikan Relasi dan Fungsi dengan Diagram Panah',
    blocks: [
      { type: 'text', text: 'Diagram panah menggunakan dua kurva tertutup (himpunan A di kiri, B di kanan) dan anak panah dari anggota A ke pasangannya di B. Untuk mengecek apakah diagram panah adalah FUNGSI, cukup perhatikan sisi KIRI (himpunan A): setiap titik kiri harus melepaskan tepat 1 anak panah!' },
    ],
    activityTitle: 'Latihan: Diagram Panah',
    questions: [
      { text: 'Pada diagram panah dari A ke B, ternyata ada 1 anggota A yang melepaskan 2 anak panah sekaligus. Maka diagram panah tersebut merupakan...', opts: ['Relasi biasa, BUKAN fungsi', 'Fungsi', 'Korespondensi satu-satu', 'Range'], ans: 0, exp: 'Fungsi melarang anggota domain bercabang (punya lebih dari 1 pasangan).' },
      { text: 'Pada diagram panah fungsi f: A → B, panah berasal dari 1→3, 2→5, 3→7. Aturan rumus fungsi f(x) yang tepat adalah...', opts: ['f(x) = 2x + 1', 'f(x) = x + 2', 'f(x) = 3x', 'f(x) = 2x − 1'], ans: 0, exp: '2(1)+1=3, 2(2)+1=5, 2(3)+1=7.' },
      { text: 'Jika ada 1 anggota himpunan B (kanan) pada diagram panah yang TIDAK ditunjuk oleh panah mana pun, sementara semua anggota A masing-masing melepaskan tepat 1 panah, apakah itu fungsi?', opts: ['Ya, tetap merupakan fungsi', 'Bukan fungsi', 'Harus dihapus domainnya', 'Tidak punya kodomain'], ans: 0, exp: 'Anggota kodomain B boleh tidak mendapat panah.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-02', subSeq: 5,
    objectives: ['Siswa mampu menyajikan fungsi dalam tabel pasangan berurutan dan menemukan rumus fungsi linear f(x) = ax + b.'],
    materialTitle: 'Tabel dan Himpunan Pasangan Berurutan',
    blocks: [
      { type: 'worked_example', level: 'Menentukan Rumus f(x) = ax + b', question: 'Fungsi linear f(x) = ax + b memenuhi f(2) = 7 dan f(5) = 16. Tentukan nilai a, b, dan f(10)!', steps: ['Selisih output dibagi selisih input: a = (16 − 7) ÷ (5 − 2) = 9 ÷ 3 = 3.', 'Substitusi f(2) = 7: 3(2) + b = 7 → b = 1. Jadi f(x) = 3x + 1.', 'f(10) = 3(10) + 1 = 31.'], answer: 'f(x) = 3x + 1 dan f(10) = 31' },
    ],
    activityTitle: 'Latihan: Tabel Pasangan Berurutan',
    questions: [
      { text: 'Tabel fungsi menunjukkan x = 0→2, x = 1→5, x = 2→8, x = 3→11. Rumus fungsi f(x) adalah...', opts: ['f(x) = 3x + 2', 'f(x) = 2x + 3', 'f(x) = 3x − 2', 'f(x) = 5x'], ans: 0, exp: 'Saat x=0, f(0)=2 (b=2); setiap x naik 1, f(x) naik 3 (a=3) → 3x + 2.' },
      { text: 'Diketahui f(x) = ax + b dengan f(1) = 4 dan f(3) = 10. Nilai f(6) adalah...', opts: ['19', '18', '20', '16'], ans: 0, exp: 'a = (10−4)/(3−1) = 3; b = 4 − 3(1) = 1 → f(6) = 3(6) + 1 = 19.' },
      { text: 'Dari himpunan pasangan berurutan {(0,-1), (2,3), (4,7)}, nilai f(5) jika fungsinya linear adalah...', opts: ['9', '8', '10', '11'], ans: 0, exp: 'a = (3−(-1))/(2−0) = 2, b = -1 → f(x) = 2x − 1 → f(5) = 9.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-02', subSeq: 6,
    objectives: ['Siswa mampu menggambar dan membaca grafik fungsi sederhana pada bidang Kartesius (termasuk Uji Garis Vertikal).'],
    materialTitle: 'Grafik Fungsi Sederhana',
    blocks: [
      { type: 'tip', text: 'Uji Garis Vertikal: Suatu grafik pada koordinat Kartesius adalah FUNGSI jika setiap garis tegak (sejajar sumbu-Y) memotong grafik PALING BANYAK di satu titik!' },
    ],
    activityTitle: 'Latihan: Grafik Fungsi',
    questions: [
      { text: 'Grafik fungsi f(x) = 2x − 4 memotong sumbu-Y di titik...', opts: ['(0, -4)', '(-4, 0)', '(2, 0)', '(0, 2)'], ans: 0, exp: 'Potong sumbu-Y saat x = 0 → y = 2(0) − 4 = −4 → titik (0, −4).' },
      { text: 'Grafik fungsi f(x) = 2x − 4 memotong sumbu-X di titik...', opts: ['(2, 0)', '(0, 2)', '(-2, 0)', '(0, -4)'], ans: 0, exp: 'Potong sumbu-X saat y = 0 → 2x − 4 = 0 → x = 2 → titik (2, 0).' },
      { text: 'Grafik berbentuk lingkaran utuh BUKAN merupakan grafik fungsi y = f(x) karena...', opts: ['Ada garis vertikal yang memotong lingkaran di 2 titik sekaligus (1 nilai x punya 2 nilai y)', 'Lingkaran tidak punya titik', 'Lingkaran selalu negatif', 'Tidak melewati sumbu-X'], ans: 0, exp: 'Gagal uji garis vertikal karena satu nilai domain menghasilkan dua nilai y.' },
    ],
  },

  // BAB 3: PERSAMAAN GARIS DAN FUNGSI LINEAR (7 sub)
  {
    topicCode: 'MAT-SMP8-03', subSeq: 1,
    objectives: ['Siswa mampu memahami sumbu-X, sumbu-Y, titik asal O(0,0), dan 4 kuadran pada bidang Kartesius.'],
    materialTitle: 'Konsep Koordinat Kartesius',
    blocks: [
      { type: 'table', title: '4 Kuadran Bidang Kartesius', headers: ['Kuadran', 'Tanda (x, y)', 'Contoh Titik'], rows: [
        ['Kuadran I (kanan atas)', '(+, +)', '(4, 5)'],
        ['Kuadran II (kiri atas)', '(−, +)', '(−3, 6)'],
        ['Kuadran III (kiri bawah)', '(−, −)', '(−2, −5)'],
        ['Kuadran IV (kanan bawah)', '(+, −)', '(7, −1)'],
      ]},
    ],
    activityTitle: 'Latihan: Koordinat Kartesius',
    questions: [
      { text: 'Titik P(−5, 8) terletak di...', opts: ['Kuadran II', 'Kuadran I', 'Kuadran III', 'Kuadran IV'], ans: 0, exp: 'x negatif (−5) dan y positif (+8) berada di Kuadran II.' },
      { text: 'Jarak titik Q(4, −6) terhadap sumbu-X adalah...', opts: ['6 satuan', '4 satuan', '-6 satuan', '10 satuan'], ans: 0, exp: 'Jarak terhadap sumbu-X adalah nilai mutlak ordinat |y| = |−6| = 6 satuan.' },
      { text: 'Jarak titik R(−7, 3) terhadap sumbu-Y adalah...', opts: ['7 satuan', '3 satuan', '-7 satuan', '4 satuan'], ans: 0, exp: 'Jarak terhadap sumbu-Y adalah nilai mutlak absis |x| = |−7| = 7 satuan.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-03', subSeq: 2,
    objectives: ['Siswa mampu menentukan posisi relatif suatu titik terhadap titik acuan lain menggunakan pasangan berurutan (x, y).'],
    materialTitle: 'Pasangan Berurutan dan Posisi Relatif',
    blocks: [
      { type: 'formula', name: 'Posisi Relatif Titik A terhadap Titik Acuan B', expression: 'Posisi A terhadap B = (xA − xB,  yA − yB)', note: 'Positif x = ke kanan, negatif x = ke kiri; positif y = ke atas, negatif y = ke bawah.' },
    ],
    activityTitle: 'Latihan: Posisi Relatif Titik',
    questions: [
      { text: 'Posisi titik A(5, 7) terhadap titik acuan B(2, 3) adalah...', opts: ['(3, 4) — 3 satuan ke kanan, 4 satuan ke atas', '(7, 10)', '(-3, -4)', '(2, 4)'], ans: 0, exp: '(5−2, 7−3) = (3, 4).' },
      { text: 'Tiga titik sudut persegi panjang adalah A(1, 1), B(6, 1), dan C(6, 4). Koordinat titik sudut D agar membentuk persegi panjang ABCD adalah...', opts: ['(1, 4)', '(4, 1)', '(6, 6)', '(1, 6)'], ans: 0, exp: 'D sejajar vertikal dengan A (x=1) dan sejajar horizontal dengan C (y=4) → (1, 4).' },
      { text: 'Titik (−4, 0) terletak tepat pada...', opts: ['Sumbu-X negatif', 'Sumbu-Y negatif', 'Kuadran II', 'Kuadran III'], ans: 0, exp: 'Karena y = 0, titik berada tepat di sumbu-X (sebelah kiri titik asal).' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-03', subSeq: 3,
    objectives: ['Siswa mampu mengenali bentuk eksplisit (y = mx + c) dan implisit (ax + by + c = 0) persamaan garis lurus.'],
    materialTitle: 'Persamaan Garis Lurus',
    blocks: [
      { type: 'text', text: 'Persamaan garis lurus adalah persamaan linear dua variabel yang pangkat tertinggi x dan y adalah 1 (tidak ada x², y², atau xy). Bentuk eksplisitnya: y = mx + c; bentuk implisitnya: ax + by + c = 0.' },
    ],
    activityTitle: 'Latihan: Persamaan Garis Lurus',
    questions: [
      { text: 'Manakah persamaan berikut yang merupakan persamaan garis lurus?', opts: ['3x − 2y = 12', 'y = x² + 3', 'xy = 6', 'x² + y² = 9'], ans: 0, exp: 'Hanya 3x − 2y = 12 yang variabel x dan y-nya berpangkat 1 dan tidak saling dikali.' },
      { text: 'Apakah titik (3, 7) terletak pada garis y = 2x + 1?', opts: ['Ya, karena 2(3) + 1 = 7', 'Tidak, karena 2(3) + 1 = 6', 'Ya, karena 3 + 7 = 10', 'Tidak dapat ditentukan'], ans: 0, exp: 'Substitusi x=3 menghasilkan y=7 (sama dengan ordinat titik).' },
      { text: 'Jika titik (k, 11) terletak pada garis y = 3x − 1, nilai k adalah...', opts: ['4', '3', '5', '6'], ans: 0, exp: '11 = 3k − 1 → 3k = 12 → k = 4.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-03', subSeq: 4,
    objectives: ['Siswa mampu menghitung gradien (kemiringan garis) dari persamaan, dua titik, serta sifat sejajar dan tegak lurus.'],
    materialTitle: 'Gradien (Kemiringan Garis)',
    blocks: [
      { type: 'formula', name: '4 Rumus Gradien (m) Wajib Hafal', expression: '1) y = mx + c → m    |    2) ax + by + c = 0 → m = −a/b    |    3) 2 titik → m = (y2 − y1)/(x2 − x1)', note: 'Hubungan 2 garis: SEJAJAR → m1 = m2  |  TEGAK LURUS → m1 × m2 = −1 (kebalikan dan berlawanan tanda!).' },
    ],
    activityTitle: 'Latihan: Gradien Garis',
    questions: [
      { text: 'Gradien garis yang melalui titik (2, 3) dan (6, 11) adalah...', opts: ['2', '½', '-2', '4'], ans: 0, exp: 'm = (11 − 3) / (6 − 2) = 8 / 4 = 2.' },
      { text: 'Gradien garis dengan persamaan 4x + 2y − 10 = 0 adalah...', opts: ['-2', '2', '½', '-½'], ans: 0, exp: 'm = −a/b = −4/2 = −2 (atau ubah jadi y = −2x + 5).' },
      { text: 'Garis k tegak lurus dengan garis y = 3x − 5. Gradien garis k adalah...', opts: ['-⅓', '3', '-3', '⅓'], ans: 0, exp: 'm1 × m2 = −1 → 3 × m2 = −1 → m2 = −⅓.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-03', subSeq: 5,
    objectives: ['Siswa mampu menentukan persamaan garis lurus melalui 1 titik bergradien m atau melalui 2 titik.'],
    materialTitle: 'Menentukan Persamaan Garis Lurus',
    blocks: [
      { type: 'formula', name: 'Rumus Persamaan Garis melalui (x1, y1) dengan Gradien m', expression: 'y − y1 = m(x − x1)', note: 'Jika diketahui 2 titik (x1, y1) dan (x2, y2), cari dulu gradien m = (y2 − y1)/(x2 − x1), lalu masukkan ke y − y1 = m(x − x1)!' },
      { type: 'worked_example', level: 'Persamaan Garis Sejajar', question: 'Tentukan persamaan garis yang melalui (2, 5) dan sejajar garis y = 3x − 4!', steps: ['Karena sejajar, gradiennya sama: m = 3.', 'y − 5 = 3(x − 2) → y − 5 = 3x − 6 → y = 3x − 1.'], answer: 'y = 3x − 1' },
    ],
    activityTitle: 'Latihan: Menentukan Persamaan Garis',
    questions: [
      { text: 'Persamaan garis bergradien 2 yang melalui titik (1, 5) adalah...', opts: ['y = 2x + 3', 'y = 2x + 5', 'y = 2x − 3', 'y = x + 4'], ans: 0, exp: 'y − 5 = 2(x − 1) → y = 2x − 2 + 5 = 2x + 3.' },
      { text: 'Persamaan garis yang melalui titik (0, 4) dan (2, 10) adalah...', opts: ['y = 3x + 4', 'y = 3x − 4', 'y = 4x + 3', 'y = 2x + 4'], ans: 0, exp: 'm = (10−4)/(2−0) = 3 dan memotong sumbu-Y di (0,4) → y = 3x + 4.' },
      { text: 'Persamaan garis yang melalui (4, 1) dan tegak lurus garis y = −½x + 7 adalah...', opts: ['y = 2x − 7', 'y = −2x + 9', 'y = ½x − 1', 'y = 2x + 7'], ans: 0, exp: 'Tegak lurus m1 = −½ → m2 = 2. y − 1 = 2(x − 4) → y = 2x − 7.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-03', subSeq: 6,
    objectives: ['Siswa mampu menggambar grafik fungsi linear menggunakan dua titik potong sumbu dan menafsirkan arah kemiringannya.'],
    materialTitle: 'Grafik Fungsi Linear',
    blocks: [
      { type: 'tip', text: 'Cara tercepat menggambar garis ax + by = c: (1) Tutup x (x=0) dapat titik potong sumbu-Y; (2) Tutup y (y=0) dapat titik potong sumbu-X; (3) Hubungkan kedua titik dengan penggaris! Gradien positif (m > 0) miring naik ke kanan; gradien negatif (m < 0) miring turun ke kanan.' },
    ],
    activityTitle: 'Latihan: Grafik Fungsi Linear',
    questions: [
      { text: 'Garis 2x + 3y = 12 memotong sumbu-X dan sumbu-Y berturut-turut di titik...', opts: ['(6, 0) dan (0, 4)', '(4, 0) dan (0, 6)', '(0, 6) dan (4, 0)', '(12, 0) dan (0, 12)'], ans: 0, exp: 'y=0 → 2x=12 → x=6 (6,0); x=0 → 3y=12 → y=4 (0,4).' },
      { text: 'Jika sebuah garis condong TURUN dari kiri ke kanan, maka gradien (m) garis tersebut bernilai...', opts: ['Negatif (m < 0)', 'Positif (m > 0)', 'Nol (m = 0)', 'Tak terdefinisi'], ans: 0, exp: 'Saat x bertambah, y berkurang → m < 0.' },
      { text: 'Grafik persamaan y = 5 berupa garis...', opts: ['Mendatar (horizontal) sejajar sumbu-X dengan gradien 0', 'Tegak sejajar sumbu-Y', 'Miring naik 45°', 'Melewati (0, 0)'], ans: 0, exp: 'Semua titik punya ordinat y = 5 sehingga horizontal sejajar sumbu-X.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-03', subSeq: 7,
    objectives: ['Siswa mampu menerapkan persamaan garis dan fungsi linear untuk tarif ojek, tagihan listrik/air, dan pertumbuhan linear.'],
    materialTitle: 'Penerapan Fungsi Linear dalam Kehidupan',
    blocks: [
      { type: 'worked_example', level: 'Tarif Ojek Online', question: 'Tarif awal buka pintu taksi Rp8.000 ditambah Rp4.500 per km. Tuliskan fungsi tarif T(x) untuk jarak x km dan hitung tarif untuk 6 km!', steps: ['Biaya tetap (c) = 8.000, laju perubahan/gradien (m) = 4.500.', 'T(x) = 4.500x + 8.000.', 'Untuk x = 6: T(6) = 4.500(6) + 8.000 = 27.000 + 8.000 = Rp35.000.'], answer: 'Rp35.000' },
    ],
    activityTitle: 'Latihan: Penerapan Fungsi Linear',
    questions: [
      { text: 'Sebuah tandon berisi 200 liter air dan bocor dengan laju 5 liter/menit. Fungsi volume air V(t) setelah t menit adalah...', opts: ['V(t) = 200 − 5t', 'V(t) = 200 + 5t', 'V(t) = 5t − 200', 'V(t) = 200t − 5'], ans: 0, exp: 'Air berkurang (gradien negatif −5) dari volume awal 200 liter.' },
      { text: 'Pada soal tandon di atas (V(t) = 200 − 5t), tandon akan habis kosong setelah...', opts: ['40 menit', '20 menit', '50 menit', '25 menit'], ans: 0, exp: '200 − 5t = 0 → 5t = 200 → t = 40 menit.' },
      { text: 'Biaya parkir mobil Rp5.000 untuk jam pertama (tetap) + Rp3.000 tiap jam berikutnya. Jika B(x) = 3.000x + 2.000 (x ≥ 1 jam), biaya parkir 4 jam adalah...', opts: ['Rp14.000', 'Rp12.000', 'Rp17.000', 'Rp15.000'], ans: 0, exp: 'B(4) = 3.000(4) + 2.000 = 12.000 + 2.000 = Rp14.000.' },
    ],
  },

  // BAB 4: SPLDV (7 sub)
  {
    topicCode: 'MAT-SMP8-04', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian SPLDV (Sistem Persamaan Linear Dua Variabel) beserta syarat penyelesaiannya.'],
    materialTitle: 'Pengertian SPLDV',
    blocks: [
      { type: 'text', text: 'SPLDV terdiri atas DUA persamaan linear yang saling berkaitan dengan DUA variabel yang sama (misal x dan y). Penyelesaian SPLDV adalah pasangan (x, y) yang memenuhi KEDUA persamaan sekaligus!' },
    ],
    activityTitle: 'Latihan: Pengertian SPLDV',
    questions: [
      { text: 'Pasangan (x, y) manakah yang merupakan penyelesaian SPLDV: x + y = 7 dan x − y = 3?', opts: ['(5, 2)', '(4, 3)', '(6, 1)', '(2, 5)'], ans: 0, exp: 'Cek (5,2): 5 + 2 = 7 (benar) dan 5 − 2 = 3 (benar).' },
      { text: 'Manakah sistem persamaan berikut yang merupakan SPLDV?', opts: ['2x + y = 8 dan x − 3y = −3', 'x² + y = 5 dan x + y = 3', '2x + 3 = 9 dan 4x = 12', 'x + y + z = 6 dan x − y = 2'], ans: 0, exp: 'Terdiri dari 2 persamaan linear dengan 2 variabel berpangkat 1.' },
      { text: 'Jika (3, −1) adalah penyelesaian dari ax + y = 8, maka nilai a adalah...', opts: ['3', '2', '4', '-3'], ans: 0, exp: 'a(3) + (−1) = 8 → 3a = 9 → a = 3.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-04', subSeq: 2,
    objectives: ['Siswa mampu menerjemahkan kalimat masalah sehari-hari menjadi model matematika SPLDV yang tepat.'],
    materialTitle: 'Membuat Model Matematika SPLDV',
    blocks: [
      { type: 'tip', text: 'Langkah pemodelan: (1) Definisikan 2 variabel secara tegas, misal x = harga 1 buku, y = harga 1 pensil; (2) Ubah tiap kalimat informasi menjadi 1 persamaan linear!' },
    ],
    activityTitle: 'Latihan: Model Matematika SPLDV',
    questions: [
      { text: 'Harga 3 buku tulis (x) dan 2 pulpen (y) adalah Rp21.000, sedangkan harga 2 buku tulis dan 4 pulpen adalah Rp22.000. Model SPLDV-nya adalah...', opts: ['3x + 2y = 21.000 dan 2x + 4y = 22.000', '3x + 4y = 21.000 dan 2x + 2y = 22.000', '2x + 3y = 21.000 dan 4x + 2y = 22.000', '5x + 6y = 43.000'], ans: 0, exp: 'Kalimat 1 → 3x + 2y = 21.000; kalimat 2 → 2x + 4y = 22.000.' },
      { text: 'Jumlah dua bilangan (a dan b) adalah 30, dan selisihnya 6 (a > b). Model SPLDV yang benar adalah...', opts: ['a + b = 30 dan a − b = 6', 'a + b = 6 dan a − b = 30', '2a + b = 30 dan a − b = 6', 'ab = 30 dan a − b = 6'], ans: 0, exp: 'Jumlah = a + b = 30; selisih = a − b = 6.' },
      { text: 'Di parkiran terdapat x mobil (4 roda) dan y motor (2 roda). Total kendaraan 45 buah dan total roda 120 buah. Model SPLDV-nya adalah...', opts: ['x + y = 45 dan 4x + 2y = 120', 'x + y = 120 dan 4x + 2y = 45', '4x + y = 45 dan x + 2y = 120', '2x + 4y = 120 dan x + y = 45'], ans: 0, exp: 'Total kendaraan: x + y = 45; total roda: 4x + 2y = 120.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-04', subSeq: 3,
    objectives: ['Siswa mampu memahami makna geometris penyelesaian SPLDV sebagai titik potong dua garis (metode grafik).'],
    materialTitle: 'Menyelesaikan SPLDV dengan Metode Grafik',
    blocks: [
      { type: 'table', title: '3 Kemungkinan Grafik SPLDV', headers: ['Posisi Dua Garis', 'Banyak Penyelesaian'], rows: [
        ['Berpotongan di 1 titik (m1 ≠ m2)', 'TEPAT 1 penyelesaian (koordinat titik potong)'],
        ['Sejajar (m1 = m2, c1 ≠ c2)', 'TIDAK ADA penyelesaian (himpunan kosong)'],
        ['Berimpit (persamaan kelipatan sama)', 'TAK HINGGA banyak penyelesaian'],
      ]},
    ],
    activityTitle: 'Latihan: Metode Grafik SPLDV',
    questions: [
      { text: 'Penyelesaian SPLDV dengan metode grafik ditunjukkan oleh...', opts: ['Koordinat titik potong kedua garis lurus', 'Titik potong dengan sumbu-X', 'Gradien kedua garis', 'Luas segitiga'], ans: 0, exp: 'Titik potong memenuhi kedua persamaan garis sekaligus.' },
      { text: 'Sistem persamaan y = 2x + 3 dan y = 2x − 1 memiliki gradien sama (m = 2) tetapi konstanta berbeda. Banyak penyelesaiannya adalah...', opts: ['Tidak ada penyelesaian (garis sejajar)', 'Tepat 1 penyelesaian', 'Tak hingga penyelesaian', '2 penyelesaian'], ans: 0, exp: 'Dua garis sejajar yang tidak berimpit tidak pernah berpotongan.' },
      { text: 'Titik potong garis y = x + 1 dan y = 5 − x adalah...', opts: ['(2, 3)', '(3, 2)', '(1, 4)', '(4, 1)'], ans: 0, exp: 'x + 1 = 5 − x → 2x = 4 → x = 2, y = 2 + 1 = 3 → (2, 3).' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-04', subSeq: 4,
    objectives: ['Siswa mampu menyelesaikan SPLDV menggunakan metode substitusi (mengganti salah satu variabel).'],
    materialTitle: 'Menyelesaikan SPLDV dengan Metode Substitusi',
    blocks: [
      { type: 'worked_example', level: 'Metode Substitusi', question: 'Selesaikan: y = 2x − 1 dan 3x + y = 14!', steps: ['Substitusikan y = 2x − 1 ke persamaan kedua:', '3x + (2x − 1) = 14 → 5x − 1 = 14 → 5x = 15 → x = 3.', 'Masukkan x = 3 ke y = 2(3) − 1 = 5.'], answer: '(3, 5)' },
    ],
    activityTitle: 'Latihan: Metode Substitusi',
    questions: [
      { text: 'Himpunan penyelesaian dari y = 3x dan x + y = 16 adalah...', opts: ['{(4, 12)}', '{(12, 4)}', '{(3, 13)}', '{(5, 11)}'], ans: 0, exp: 'x + 3x = 16 → 4x = 16 → x = 4, y = 12.' },
      { text: 'Dengan metode substitusi, penyelesaian dari x = y + 2 dan 2x + y = 13 adalah...', opts: ['x = 5, y = 3', 'x = 3, y = 5', 'x = 6, y = 4', 'x = 4, y = 2'], ans: 0, exp: '2(y + 2) + y = 13 → 3y + 4 = 13 → 3y = 9 → y = 3, x = 5.' },
      { text: 'Metode substitusi PALING cepat dan praktis digunakan apabila...', opts: ['Salah satu variabel pada persamaan sudah berkoefisien 1 atau −1 (misal y = ... atau x = ...)', 'Semua koefisien berupa bilangan besar ganjil', 'Grafiknya tidak bisa digambar', 'Tidak ada variabel'], ans: 0, exp: 'Koefisien 1 memudahkan isolasi variabel tanpa pecahan.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-04', subSeq: 5,
    objectives: ['Siswa mampu menyelesaikan SPLDV menggunakan metode eliminasi (menghilangkan salah satu variabel).'],
    materialTitle: 'Menyelesaikan SPLDV dengan Metode Eliminasi',
    blocks: [
      { type: 'tip', text: 'Aturan tanda eliminasi: samakan dulu koefisien variabel yang ingin dihilangkan. Jika tandanya SAMA (+ dan + atau − dan −) → KURANGKAN! Jika tandanya BEDA (+ dan −) → JUMLAHKAN!' },
    ],
    activityTitle: 'Latihan: Metode Eliminasi',
    questions: [
      { text: 'Untuk mengeliminasi variabel y pada 2x + 3y = 13 dan 5x − 3y = 8, kedua persamaan harus...', opts: ['Dijumlahkan → 7x = 21 → x = 3', 'Dikurangkan → −3x = 5', 'Dikalikan', 'Dibagi 3'], ans: 0, exp: '+3y + (−3y) = 0; 2x + 5x = 7x; 13 + 8 = 21 → x = 3.' },
      { text: 'Penyelesaian dari 3x + 2y = 12 dan x + 2y = 8 adalah...', opts: ['x = 2, y = 3', 'x = 3, y = 2', 'x = 4, y = 0', 'x = 1, y = 4'], ans: 0, exp: 'Kurangkan: 2x = 4 → x = 2. Lalu 2 + 2y = 8 → y = 3.' },
      { text: 'Untuk mengeliminasi x pada 2x + y = 7 dan 3x + 2y = 12, pengali paling sederhana untuk persamaan (1) dan (2) adalah...', opts: ['Persamaan (1) × 3 dan persamaan (2) × 2', 'Persamaan (1) × 2 dan persamaan (2) × 3', 'Keduanya × 5', 'Langsung dikurangkan'], ans: 0, exp: 'KPK(2, 3) = 6, sehingga keduanya menjadi 6x.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-04', subSeq: 6,
    objectives: ['Siswa mampu menyelesaikan SPLDV dengan metode gabungan (eliminasi dulu lalu substitusi) secara cepat dan akurat.'],
    materialTitle: 'Metode Gabungan (Eliminasi + Substitusi)',
    blocks: [
      { type: 'worked_example', level: 'Cara Favorit Ujian!', question: 'Tentukan nilai 2x + y jika 3x + 2y = 16 dan 2x − y = 6!', steps: ['Kalikan persamaan (2) dengan 2: 4x − 2y = 12.', 'Jumlahkan dengan persamaan (1): (3x+4x) = 16+12 → 7x = 28 → x = 4.', 'Substitusi x = 4 ke 2x − y = 6: 8 − y = 6 → y = 2.', 'Hitung yang ditanya: 2x + y = 2(4) + 2 = 10.'], answer: '10' },
    ],
    activityTitle: 'Latihan: Metode Gabungan',
    questions: [
      { text: 'Jika 2x + y = 11 dan 3x − y = 9, maka nilai x + y adalah...', opts: ['7', '8', '6', '9'], ans: 0, exp: 'Jumlahkan: 5x = 20 → x = 4. Substitusi: 2(4)+y=11 → y = 3. Jadi x + y = 7.' },
      { text: 'Jika 4x + 3y = 17 dan 2x + y = 7, maka nilai x − y adalah...', opts: ['-1', '1', '3', '-3'], ans: 0, exp: 'Kalikan pers (2) ×2: 4x + 2y = 14. Kurangkan dari pers (1): y = 3. Lalu 2x+3=7 → x = 2. Jadi x − y = 2 − 3 = −1.' },
      { text: 'Keunggulan metode gabungan (eliminasi lalu substitusi) dibanding eliminasi murni adalah...', opts: ['Lebih cepat karena setelah 1 variabel ketemu langsung disubstitusi tanpa perlu eliminasi ulang', 'Tidak perlu menyamakan koefisien', 'Selalu tanpa perhitungan', 'Hanya untuk 1 variabel'], ans: 0, exp: 'Menghemat satu langkah penyamaan koefisien.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-04', subSeq: 7,
    objectives: ['Siswa mampu menyelesaikan masalah cerita nyata (harga barang, umur, tiket, keliling) menggunakan SPLDV.'],
    materialTitle: 'Penerapan Soal Cerita SPLDV',
    blocks: [
      { type: 'worked_example', level: 'Soal Parkir Klasik', question: 'Di area parkir alun-alun ada 30 kendaraan terdiri dari mobil (x) dan motor (y). Jumlah seluruh roda 84 buah. Berapa banyak mobil?', steps: ['x + y = 30 → kali 2: 2x + 2y = 60.', '4x + 2y = 84.', 'Kurangkan: 2x = 24 → x = 12 mobil (dan y = 18 motor). Cek roda: 12(4)+18(2)=48+36=84!'], answer: '12 mobil' },
    ],
    activityTitle: 'Latihan: Soal Cerita SPLDV',
    questions: [
      { text: 'Di kantin sekolah, 2 bakso dan 1 es teh harganya Rp23.000; sedangkan 1 bakso dan 2 es teh Rp16.000. Harga 1 bakso dan 1 es teh adalah...', opts: ['Rp13.000', 'Rp14.000', 'Rp15.000', 'Rp12.000'], ans: 0, exp: 'Jumlahkan kedua persamaan: 3b + 3t = 39.000 → bagi 3: b + t = Rp13.000!' },
      { text: 'Keliling persegi panjang 44 cm. Jika panjangnya 6 cm lebih dari lebarnya (p − l = 6), luas persegi panjang tersebut adalah...', opts: ['112 cm²', '120 cm²', '96 cm²', '108 cm²'], ans: 0, exp: 'p + l = 22 dan p − l = 6 → 2p = 28 → p = 14, l = 8 → Luas = 14 × 8 = 112 cm².' },
      { text: 'Jumlah dua bilangan adalah 40 dan selisihnya 12. Hasil kali kedua bilangan tersebut adalah...', opts: ['364', '384', '340', '400'], ans: 0, exp: 'a+b=40, a−b=12 → 2a=52 → a=26, b=14 → 26 × 14 = 364.' },
    ],
  },

  // BAB 5: TEOREMA PYTHAGORAS (4 sub)
  {
    topicCode: 'MAT-SMP8-05', subSeq: 1,
    objectives: ['Siswa mampu menghitung kuadrat dan menyederhanakan akar kuadrat bilangan bulat sebagai prasyarat Pythagoras.'],
    materialTitle: 'Kuadrat dan Akar Kuadrat',
    blocks: [
      { type: 'table', title: 'Kuadrat Wajib Hafal (11² s.d. 25²)', headers: ['Bilangan', 'Kuadrat', 'Bilangan', 'Kuadrat'], rows: [
        ['11²', '121', '16²', '256'],
        ['12²', '144', '17²', '289'],
        ['13²', '169', '20²', '400'],
        ['14²', '196', '24²', '576'],
        ['15²', '225', '25²', '625'],
      ]},
    ],
    activityTitle: 'Latihan: Kuadrat & Akar Kuadrat',
    questions: [
      { text: 'Nilai dari √(12² + 5²) adalah...', opts: ['13', '17', '14', '15'], ans: 0, exp: '√(144 + 25) = √169 = 13.' },
      { text: 'Bentuk paling sederhana dari √72 adalah...', opts: ['6√2', '8√2', '4√3', '3√8'], ans: 0, exp: '√72 = √(36 × 2) = 6√2.' },
      { text: 'Nilai dari √(25² − 24²) adalah...', opts: ['7', '1', '5', '9'], ans: 0, exp: '√(625 − 576) = √49 = 7.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-05', subSeq: 2,
    objectives: ['Siswa mampu memahami pembuktian sederhana Teorema Pythagoras (luas persegi) dan menguji jenis segitiga.'],
    materialTitle: 'Konsep & Pembuktian Teorema Pythagoras',
    blocks: [
      { type: 'formula', name: 'Teorema Pythagoras pada Segitiga Siku-Siku', expression: 'c² = a² + b²   (c = sisi miring / hipotenusa — selalu di depan sudut 90°!)', note: 'Uji jenis segitiga (c = sisi terpanjang): c² = a² + b² → SIKU-SIKU | c² < a² + b² → LANCIP | c² > a² + b² → TUMPUL.' },
    ],
    activityTitle: 'Latihan: Konsep Teorema Pythagoras',
    questions: [
      { text: 'Tiga bilangan manakah yang membentuk Tripel Pythagoras (segitiga siku-siku)?', opts: ['8, 15, 17', '6, 8, 12', '5, 10, 12', '7, 9, 12'], ans: 0, exp: '8² + 15² = 64 + 225 = 289 = 17².' },
      { text: 'Segitiga dengan panjang sisi 5 cm, 6 cm, dan 9 cm termasuk jenis segitiga...', opts: ['Tumpul (karena 9² > 5² + 6²)', 'Siku-siku', 'Lancip', 'Sama sisi'], ans: 0, exp: '81 > 25 + 36 (61) → segitiga tumpul.' },
      { text: 'Jika sebuah segitiga siku-siku memiliki siku-siku di titik B, maka sisi miring (hipotenusa)-nya adalah sisi...', opts: ['AC (di depan sudut B)', 'AB', 'BC', 'Tidak ada'], ans: 0, exp: 'Hipotenusa selalu berada tepat di hadapan sudut siku-siku 90°.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-05', subSeq: 3,
    objectives: ['Siswa mampu menentukan panjang sisi miring maupun sisi siku-siku termasuk memakai Tripel Pythagoras dan sudut istimewa (30°-60°-90°, 45°-45°-90°).'],
    materialTitle: 'Menentukan Panjang Sisi Segitiga Siku-Siku',
    blocks: [
      { type: 'table', title: '4 Tripel Pythagoras Dasar & Sudut Istimewa', headers: ['Tripel Dasar (dan kelipatannya!)', 'Perbandingan Sudut Istimewa'], rows: [
        ['3 – 4 – 5  (6–8–10, 9–12–15, ...)', '45° – 45° – 90°  →  1 : 1 : √2'],
        ['5 – 12 – 13  (10–24–26, ...)', '30° – 60° – 90°  →  1 : √3 : 2'],
        ['7 – 24 – 25  dan  8 – 15 – 17', 'Cari sisi miring (+); cari sisi tegak (−)!'],
      ]},
    ],
    activityTitle: 'Latihan: Panjang Sisi Segitiga Siku-Siku',
    questions: [
      { text: 'Sebuah tangga sepanjang 10 m bersandar pada dinding. Jarak kaki tangga ke dinding 6 m. Tinggi ujung tangga dari tanah adalah...', opts: ['8 m', '7 m', '9 m', '12 m'], ans: 0, exp: 't = √(10² − 6²) = √(100 − 36) = √64 = 8 m (kelipatan 3-4-5!).' },
      { text: 'Panjang diagonal persegi dengan panjang sisi 10 cm adalah...', opts: ['10√2 cm', '10√3 cm', '20 cm', '5√2 cm'], ans: 0, exp: 'Segitiga siku-siku sama kaki (45°-45°-90°): d = s√2 = 10√2 cm.' },
      { text: 'Sebuah belah ketupat memiliki diagonal 16 cm dan 12 cm. Panjang sisi belah ketupat itu adalah...', opts: ['10 cm', '14 cm', '20 cm', '8 cm'], ans: 0, exp: 'Setengah diagonal: 8 cm dan 6 cm → sisi = √(8² + 6²) = √100 = 10 cm.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-05', subSeq: 4,
    objectives: ['Siswa mampu menghitung jarak dua titik pada bidang Kartesius dan jalur tempuh 2 arah menggunakan Pythagoras.'],
    materialTitle: 'Penerapan Jarak Dua Titik',
    blocks: [
      { type: 'formula', name: 'Rumus Jarak Dua Titik A(x1, y1) dan B(x2, y2)', expression: 'd = √[(x2 − x1)² + (y2 − y1)²]', note: 'Sama persis dengan Pythagoras: Δx = sisi mendatar, Δy = sisi tegak!' },
    ],
    activityTitle: 'Latihan: Jarak Dua Titik',
    questions: [
      { text: 'Jarak antara titik A(1, 2) dan B(4, 6) pada bidang Kartesius adalah...', opts: ['5 satuan', '7 satuan', '4 satuan', '6 satuan'], ans: 0, exp: 'Δx = 4−1 = 3, Δy = 6−2 = 4 → d = √(3² + 4²) = 5.' },
      { text: 'Sebuah kapal nelayan dari pelabuhan Gresik berlayar ke timur 12 km lalu berbelok ke utara 5 km. Jarak terpendek kapal dari pelabuhan adalah...', opts: ['13 km', '17 km', '15 km', '11 km'], ans: 0, exp: '√(12² + 5²) = √169 = 13 km.' },
      { text: 'Jarak antara titik P(−2, 3) dan Q(6, −3) adalah...', opts: ['10 satuan', '8 satuan', '14 satuan', '12 satuan'], ans: 0, exp: 'Δx = 6 − (−2) = 8; Δy = −3 − 3 = −6 → d = √(8² + (−6)²) = √100 = 10.' },
    ],
  },

  // BAB 6: BANGUN DATAR DAN KEKONGRUENAN (5 sub)
  {
    topicCode: 'MAT-SMP8-06', subSeq: 1,
    objectives: ['Siswa mampu mengklasifikasikan jenis segitiga dan keluarga segiempat (persegi, persegi panjang, jajar genjang, belah ketupat, layang-layang, trapesium).'],
    materialTitle: 'Segitiga dan Keluarga Segiempat',
    blocks: [
      { type: 'text', text: 'Jumlah sudut dalam segitiga selalu 180°, sedangkan jumlah sudut dalam segiempat selalu 360°. Persegi adalah bangun istimewa yang mewarisi semua sifat persegi panjang, belah ketupat, dan jajar genjang sekaligus!' },
    ],
    activityTitle: 'Latihan: Segitiga & Segiempat',
    questions: [
      { text: 'Sebuah segitiga memiliki sudut 48° dan 72°. Besar sudut ketiganya adalah...', opts: ['60°', '50°', '70°', '80°'], ans: 0, exp: '180° − (48° + 72°) = 180° − 120° = 60°.' },
      { text: 'Bangun segiempat yang memiliki tepat SATU pasang sisi sejajar adalah...', opts: ['Trapesium', 'Jajar genjang', 'Belah ketupat', 'Layang-layang'], ans: 0, exp: 'Trapesium dicirikan tepat sepasang sisi berhadapan sejajar.' },
      { text: 'Jumlah besar keempat sudut dalam bangun trapesium sembarang selalu...', opts: ['360°', '180°', '270°', '540°'], ans: 0, exp: 'Setiap segiempat dapat dibagi menjadi 2 segitiga: 2 × 180° = 360°.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-06', subSeq: 2,
    objectives: ['Siswa mampu menganalisis sifat diagonal, sisi, dan simetri bangun datar untuk menyelesaikan perhitungan sudut/panjang.'],
    materialTitle: 'Sifat-Sifat Diagonal dan Sudut Bangun Datar',
    blocks: [
      { type: 'table', title: 'Perbandingan Sifat Diagonal Segiempat', headers: ['Bangun', 'Diagonal Sama Panjang?', 'Diagonal Berpotongan Tegak Lurus (90°)?'], rows: [
        ['Persegi Panjang', 'Ya', 'Tidak'],
        ['Belah Ketupat', 'Tidak (umumnya)', 'Ya (saling membagi 2 sama panjang)'],
        ['Persegi', 'Ya', 'Ya (keduanya!)'],
        ['Layang-Layang', 'Tidak', 'Ya (hanya 1 diagonal terbagi 2 sama panjang)'],
      ]},
    ],
    activityTitle: 'Latihan: Sifat Bangun Datar',
    questions: [
      { text: 'Pada jajar genjang ABCD, sudut A = 65°. Besar sudut B (berdekatan) dan sudut C (berhadapan) berturut-turut adalah...', opts: ['115° dan 65°', '65° dan 115°', '125° dan 65°', '115° dan 115°'], ans: 0, exp: 'Sudut berdekatan berjumlah 180° (180−65=115°); sudut berhadapan sama besar (65°).' },
      { text: 'Segiempat yang kedua diagonalnya SAMA PANJANG sekaligus SALING TEGAK LURUS adalah...', opts: ['Persegi', 'Persegi panjang', 'Jajar genjang', 'Trapesium sama kaki'], ans: 0, exp: 'Persegi memenuhi kedua sifat diagonal tersebut.' },
      { text: 'Pada segitiga sama kaki ABC dengan AB = AC dan sudut puncak A = 40°, besar sudut alas B adalah...', opts: ['70°', '40°', '80°', '50°'], ans: 0, exp: '(180° − 40°) ÷ 2 = 70°.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-06', subSeq: 3,
    objectives: ['Siswa mampu memahami konsep kekongruenan (bentuk dan ukuran sama persis, notasi ≅).'],
    materialTitle: 'Konsep Kekongruenan Bangun Datar',
    blocks: [
      { type: 'text', text: 'Dua bangun datar dikatakan KONGRUEN (dilambangkan ≅) jika memiliki BENTUK DAN UKURAN YANG SAMA PERSIS. Bila salah satu bangun digeser, diputar, atau dicerminkan, ia dapat menumpuk tepat menutupi bangun lainnya!' },
    ],
    activityTitle: 'Latihan: Konsep Kekongruenan',
    questions: [
      { text: 'Dua ubin keramik berbentuk persegi masing-masing berukuran 40 cm × 40 cm. Kedua ubin tersebut pasti...', opts: ['Kongruen (bentuk dan ukuran identik)', 'Hanya sebangun', 'Tidak berhubungan', 'Berbeda luas'], ans: 0, exp: 'Sama bentuk (persegi) dan sama ukuran (40 cm) → kongruen.' },
      { text: 'Jika segiempat ABCD ≅ PQRS dengan AB = 8 cm dan ∠C = 110°, maka panjang PQ dan besar ∠R berturut-turut adalah...', opts: ['8 cm dan 110°', '110 cm dan 8°', '4 cm dan 55°', '16 cm dan 110°'], ans: 0, exp: 'Sisi dan sudut bersesuaian pada bangun kongruen sama persis.' },
      { text: 'Apakah dua persegi panjang dengan luas sama (misal 6×4 dan 8×3) pasti kongruen?', opts: ['Tidak, karena ukuran panjang dan lebarnya berbeda', 'Ya, pasti kongruen', 'Ya, karena kelilingnya sama', 'Selalu sama'], ans: 0, exp: 'Luas sama tidak menjamin sisi-sisi bersesuaian sama panjang.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-06', subSeq: 4,
    objectives: ['Siswa mampu membuktikan dua segitiga kongruen menggunakan syarat SSS, S-Sd-S, Sd-S-Sd, dan Sd-Sd-S.'],
    materialTitle: 'Syarat Dua Segitiga Kongruen',
    blocks: [
      { type: 'table', title: '4 Kriteria Pembuktian Segitiga Kongruen', headers: ['Kriteria', 'Artinya'], rows: [
        ['S - S - S (SSS)', 'Ketiga pasang sisi bersesuaian sama panjang'],
        ['S - Sd - S (SAS)', 'Dua sisi sama panjang + 1 sudut APIT di antaranya sama besar'],
        ['Sd - S - Sd (ASA)', 'Dua sudut sama besar + 1 sisi di antara kedua sudut sama panjang'],
        ['Sd - Sd - S (AAS)', 'Dua sudut sama besar + 1 sisi di luar keduanya sama panjang'],
      ]},
      { type: 'misconception', wrong: 'Jika ketiga sudut dua segitiga sama besar (Sd-Sd-Sd), kedua segitiga pasti kongruen.', right: 'SALAH! Sd-Sd-Sd hanya membuktikan SEBANGUN (ukurannya bisa besar dan kecil), BUKAN kongruen!' },
    ],
    activityTitle: 'Latihan: Syarat Segitiga Kongruen',
    questions: [
      { text: 'Manakah syarat yang TIDAK cukup untuk membuktikan dua segitiga kongruen?', opts: ['Sudut – Sudut – Sudut (AAA)', 'Sisi – Sisi – Sisi (SSS)', 'Sisi – Sudut – Sisi (SAS)', 'Sudut – Sisi – Sudut (ASA)'], ans: 0, exp: 'AAA hanya menjamin kesebangunan, bukan ukuran sama.' },
      { text: 'Diketahui ΔABC dan ΔDEF memiliki AB = DE = 6 cm, BC = EF = 8 cm, dan sudut apit ∠B = ∠E = 50°. Keduanya kongruen berdasarkan syarat...', opts: ['Sisi – Sudut – Sisi (S-Sd-S)', 'S-S-S', 'Sd-S-Sd', 'Sd-Sd-Sd'], ans: 0, exp: 'Dua sisi bersesuaian sama panjang dan sudut yang diapitnya sama besar.' },
      { text: 'Diagonal AC membagi persegi panjang ABCD menjadi ΔABC dan ΔCDA. Kedua segitiga itu kongruen karena AB=CD, BC=DA, dan AC=CA (sisi berimpit). Ini memenuhi syarat...', opts: ['Sisi – Sisi – Sisi (S-S-S)', 'Sd-Sd-Sd', 'Hanya sebangun', 'Tidak kongruen'], ans: 0, exp: 'Ketiga pasang sisi sama panjang.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-06', subSeq: 5,
    objectives: ['Siswa mampu menerapkan sifat kekongruenan segitiga untuk menentukan panjang sisi atau besar sudut tak diketahui.'],
    materialTitle: 'Penerapan Kekongruenan dalam Geometri',
    blocks: [
      { type: 'worked_example', level: 'Menentukan Sudut & Sisi Kongruen', question: 'ΔPQR ≅ ΔKLM. Jika ∠P = 55°, ∠Q = 70°, dan PR = 9 cm, tentukan ∠M dan panjang KM!', steps: ['Hitung dulu ∠R = 180° − (55° + 70°) = 55°.', 'Urutan huruf bersesuaian: P↔K, Q↔L, R↔M.', 'Jadi ∠M = ∠R = 55° dan KM = PR = 9 cm.'], answer: '∠M = 55° dan KM = 9 cm' },
    ],
    activityTitle: 'Latihan: Penerapan Kekongruenan',
    questions: [
      { text: 'ΔABC ≅ ΔDEF dengan ∠A = 40°, ∠B = 85°, dan AC = 12 cm. Besar ∠F dan panjang DF berturut-turut adalah...', opts: ['55° dan 12 cm', '40° dan 12 cm', '85° dan 12 cm', '55° dan 6 cm'], ans: 0, exp: '∠C = 180−(40+85) = 55° → ∠F = ∠C = 55°; DF = AC = 12 cm.' },
      { text: 'Pada layang-layang ABCD (AB = AD dan CB = CD), diagonal AC membagi layang-layang menjadi dua segitiga kongruen, yaitu...', opts: ['ΔABC ≅ ΔADC', 'ΔABD ≅ ΔCBD', 'ΔABC ≅ ΔBCD', 'Tidak ada yang kongruen'], ans: 0, exp: 'AB=AD, CB=CD, dan AC berimpit (syarat S-S-S).' },
      { text: 'Jika trapesium ABCD ≅ EFGH dengan luas ABCD = 84 cm² dan sisi CD = 10 cm, maka luas EFGH dan panjang GH adalah...', opts: ['84 cm² dan 10 cm', '42 cm² dan 5 cm', '168 cm² dan 20 cm', '84 cm² dan 5 cm'], ans: 0, exp: 'Bangun kongruen memiliki luas dan panjang sisi bersesuaian yang sama persis.' },
    ],
  },

  // BAB 7: KESEBANGUNAN (5 sub)
  {
    topicCode: 'MAT-SMP8-07', subSeq: 1,
    objectives: ['Siswa mampu memahami konsep kesebangunan (notasi ~) serta dua syarat wajib bangun sebangun.'],
    materialTitle: 'Konsep Kesebangunan',
    blocks: [
      { type: 'formula', name: '2 Syarat Mutlak Bangun Datar Sebangun (~)', expression: '1) Sudut bersesuaian SAMA BESAR    DAN    2) Sisi bersesuaian SEBANDING (rasio sama)', note: 'Semua persegi pasti sebangun, semua lingkaran pasti sebangun, semua segitiga sama sisi pasti sebangun — tetapi TIDAK semua persegi panjang sebangun!' },
    ],
    activityTitle: 'Latihan: Konsep Kesebangunan',
    questions: [
      { text: 'Manakah pasangan bangun yang PASTI sebangun?', opts: ['Dua segitiga sama sisi berukuran sembarang', 'Dua persegi panjang sembarang', 'Dua belah ketupat sembarang', 'Dua segitiga siku-siku sembarang'], ans: 0, exp: 'Semua segitiga sama sisi bersudut 60°-60°-60° dan rasio sisinya selalu sama.' },
      { text: 'Foto berukuran 4 cm × 6 cm diperbesar sehingga sebangun. Ukuran manakah yang SEBANGUN dengan foto tersebut?', opts: ['8 cm × 12 cm', '6 cm × 8 cm', '8 cm × 10 cm', '10 cm × 12 cm'], ans: 0, exp: '4/8 = 6/12 = ½ (perbandingan panjang dan lebar tetap 2:3).' },
      { text: 'Hubungan antara kongruen dan sebangun yang BENAR adalah...', opts: ['Semua bangun kongruen pasti sebangun (faktor skala 1), tetapi bangun sebangun belum tentu kongruen', 'Semua bangun sebangun pasti kongruen', 'Keduanya tidak berkaitan', 'Sebangun berarti luasnya sama'], ans: 0, exp: 'Kongruen adalah kasus khusus kesebangunan dengan skala 1:1.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-07', subSeq: 2,
    objectives: ['Siswa mampu menghitung panjang sisi yang belum diketahui dari perbandingan sisi bersesuaian bangun sebangun.'],
    materialTitle: 'Perbandingan Sisi Bersesuaian',
    blocks: [
      { type: 'worked_example', level: 'Perbandingan Skala', question: 'Trapesium kecil (alas 6 cm, tinggi 4 cm) sebangun dengan trapesium besar (alas 15 cm). Berapa tinggi trapesium besar?', steps: ['Buat perbandingan: alas kecil / alas besar = tinggi kecil / tinggi besar.', '6 / 15 = 4 / t → 6t = 60 → t = 10 cm.'], answer: '10 cm' },
    ],
    activityTitle: 'Latihan: Perbandingan Sisi',
    questions: [
      { text: 'Dua segitiga sebangun memiliki perbandingan sisi 2 : 5. Jika salah satu sisi segitiga kecil 6 cm, panjang sisi bersesuaian di segitiga besar adalah...', opts: ['15 cm', '12 cm', '18 cm', '10 cm'], ans: 0, exp: '2/5 = 6/x → 2x = 30 → x = 15 cm.' },
      { text: 'Persegi panjang ABCD (p = 12 cm, l = 8 cm) sebangun dengan PQRS (l = 6 cm). Panjang PQRS adalah...', opts: ['9 cm', '10 cm', '8 cm', '16 cm'], ans: 0, exp: 'p/12 = 6/8 → p = 72/8 = 9 cm.' },
      { text: 'Jika perbandingan sisi dua persegi sebangun adalah 1 : 3, maka perbandingan LUAS keduanya adalah...', opts: ['1 : 9', '1 : 3', '1 : 6', '1 : 27'], ans: 0, exp: 'Perbandingan luas = kuadrat perbandingan sisi = 1² : 3² = 1 : 9.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-07', subSeq: 3,
    objectives: ['Siswa mampu menyelesaikan soal kesebangunan segitiga (termasuk garis sejajar di dalam segitiga dan segitiga siku-siku dengan garis tinggi).'],
    materialTitle: 'Kesebangunan Segitiga',
    blocks: [
      { type: 'formula', name: 'Kesebangunan Segitiga Berimpit (DE // BC)', expression: 'AD / AB = AE / AC = DE / BC', note: 'Hati-hati! Untuk sisi sejajar (DE/BC), WAJIB pakai perbandingan sisi KECIL ÷ sisi TOTAL (AD/AB), JANGAN AD/DB!' },
      { type: 'misconception', wrong: 'Menulis AD/DB = DE/BC untuk mencari panjang garis sejajar DE.', right: 'SALAH! Perbandingan untuk DE dan BC HARUS memakai sisi utuh segitiga kecil dibanding segitiga besar: AD/AB = DE/BC!' },
    ],
    activityTitle: 'Latihan: Kesebangunan Segitiga',
    questions: [
      { text: 'Pada ΔABC, titik D di AB dan E di AC dengan DE // BC. Jika AD = 4 cm, DB = 6 cm, dan BC = 15 cm, panjang DE adalah...', opts: ['6 cm', '10 cm', '9 cm', '5 cm'], ans: 0, exp: 'AB = AD + DB = 10 cm. DE/BC = AD/AB → DE/15 = 4/10 → DE = 6 cm!' },
      { text: 'Dua segitiga sudah cukup dibuktikan SEBANGUN hanya dengan menunjukkan...', opts: ['Dua pasang sudut bersesuaian sama besar (Sd-Sd)', 'Satu sisi sama panjang', 'Kelilingnya sama', 'Warnanya sama'], ans: 0, exp: 'Jika 2 sudut sama besar, sudut ketiga otomatis sama (180° − jumlah 2 sudut).' },
      { text: 'Pada ΔABC dengan DE // BC, diketahui AD = 6 cm, DB = 3 cm, dan AE = 8 cm. Panjang EC adalah...', opts: ['4 cm', '6 cm', '2 cm', '12 cm'], ans: 0, exp: 'Untuk ruas sisi samping: AD/DB = AE/EC → 6/3 = 8/EC → EC = 4 cm.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-07', subSeq: 4,
    objectives: ['Siswa mampu menyelesaikan soal kesebangunan segiempat, khususnya bingkai foto dan karton sebangun.'],
    materialTitle: 'Kesebangunan Segiempat (Foto & Karton)',
    blocks: [
      { type: 'worked_example', level: 'Soal Bingkai Foto Favorit Ujian', question: 'Foto ditempel pada karton berukuran lebar 30 cm dan tinggi 40 cm. Di kiri, kanan, dan atas tersisa karton selebar 3 cm. Jika foto dan karton sebangun, berapa lebar karton tersisa di bawah?', steps: ['Lebar foto = 30 − 3 − 3 = 24 cm.', 'Kesebangunan: tinggi foto / 40 = 24 / 30 → tinggi foto = (24×40)/30 = 32 cm.', 'Sisa bawah = 40 − 3 (atas) − 32 (foto) = 5 cm!'], answer: '5 cm' },
    ],
    activityTitle: 'Latihan: Kesebangunan Segiempat',
    questions: [
      { text: 'Foto ditempel pada karton 20 cm × 30 cm. Sisa kiri, kanan, dan atas masing-masing 2 cm. Jika foto sebangun dengan karton, tinggi foto adalah...', opts: ['24 cm', '26 cm', '22 cm', '20 cm'], ans: 0, exp: 'Lebar foto = 20 − 2 − 2 = 16 cm. t/30 = 16/20 → t = 24 cm.' },
      { text: 'Dari soal di atas (karton tinggi 30 cm, sisa atas 2 cm, tinggi foto 24 cm), lebar sisa karton di bagian BAWAH adalah...', opts: ['4 cm', '2 cm', '6 cm', '3 cm'], ans: 0, exp: '30 − 2 − 24 = 4 cm.' },
      { text: 'Sebuah lapangan mini berukuran 25 m × 15 m digambar sebangun di kertas dengan panjang 10 cm. Lebar gambar di kertas adalah...', opts: ['6 cm', '5 cm', '8 cm', '4 cm'], ans: 0, exp: 'l/15 = 10/25 → l = 150/25 = 6 cm.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-07', subSeq: 5,
    objectives: ['Siswa mampu menerapkan kesebangunan untuk mengukur tinggi benda tak terjangkau (pohon, tiang, gedung) melalui bayangan dan skala.'],
    materialTitle: 'Penerapan Skala dan Ukuran Kesebangunan',
    blocks: [
      { type: 'worked_example', level: 'Mengukur Tinggi Tiang Bendera', question: 'Pada saat yang sama, siswa setinggi 150 cm memiliki bayangan 2 m, sedangkan bayangan tiang bendera 8 m. Berapa tinggi tiang bendera?', steps: ['Tinggi tiang / 1,5 m = 8 m / 2 m.', 'Tinggi tiang = 4 × 1,5 m = 6 m.'], answer: '6 meter' },
    ],
    activityTitle: 'Latihan: Aplikasi Kesebangunan',
    questions: [
      { text: 'Sebuah tongkat setinggi 1,6 m menghasilkan bayangan 2 m. Pada saat sama bayangan menara 15 m. Tinggi menara adalah...', opts: ['12 m', '10 m', '18 m', '14 m'], ans: 0, exp: 't / 1,6 = 15 / 2 → t = 7,5 × 1,6 = 12 m.' },
      { text: 'Model sebuah kapal laut dibuat dengan skala 1 : 200. Jika panjang model 35 cm, panjang kapal sebenarnya adalah...', opts: ['70 m', '7 m', '700 m', '35 m'], ans: 0, exp: '35 × 200 = 7.000 cm = 70 m.' },
      { text: 'Seorang siswa mengukur lebar sungai dengan patok membentuk dua segitiga sebangun berskala 1 : 4. Jika sisi pendek di darat 6 m, lebar sungai adalah...', opts: ['24 m', '18 m', '10 m', '30 m'], ans: 0, exp: '6 × 4 = 24 m.' },
    ],
  },

  // BAB 8: STATISTIKA DASAR (8 sub)
  {
    topicCode: 'MAT-SMP8-08', subSeq: 1,
    objectives: ['Siswa mampu memilih metode pengumpulan data (wawancara, kuesioner, observasi, studi dokumen) dan membedakan data kualitatif vs kuantitatif.'],
    materialTitle: 'Pengumpulan dan Jenis Data',
    blocks: [
      { type: 'table', title: '2 Jenis Data Statistika', headers: ['Jenis Data', 'Ciri', 'Contoh'], rows: [
        ['Data Kuantitatif', 'Berupa ANGKA hasil ukur atau hitung', 'Tinggi badan (158 cm), nilai ulangan (85), jumlah siswa'],
        ['Data Kualitatif', 'Berupa KATEGORI / sifat non-angka', 'Hobi, warna favorit, moda transportasi ke sekolah'],
      ]},
    ],
    activityTitle: 'Latihan: Pengumpulan Data',
    questions: [
      { text: 'Manakah yang merupakan contoh data KUANTITATIF?', opts: ['Berat badan siswa kelas 8 dalam kilogram', 'Jenis ekstrakurikuler favorit siswa', 'Golongan darah siswa', 'Warna seragam olahraga'], ans: 0, exp: 'Berat badan berbentuk bilangan numerik hasil pengukuran.' },
      { text: 'Untuk mengumpulkan data hobi seluruh 300 siswa SMP dalam waktu singkat secara efisien, metode paling tepat adalah...', opts: ['Menyebarkan angket / kuesioner terstruktur', 'Mengukur dengan mistar', 'Menimbang satu per satu', 'Menebak sendiri'], ans: 0, exp: 'Kuesioner (cetak/Google Form) efektif menjangkau responden banyak secara serempak.' },
      { text: 'Data yang diperoleh langsung oleh peneliti dari sumber pertama (misal hasil survei langsung ke siswa) disebut data...', opts: ['Primer', 'Sekunder', 'Fiktif', 'Acak'], ans: 0, exp: 'Primer = dikumpulkan langsung; Sekunder = mengambil dari data pihak lain (misal laporan BPS).' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-08', subSeq: 2,
    objectives: ['Siswa mampu membedakan populasi dan sampel serta memahami syarat sampel representatif.'],
    materialTitle: 'Populasi dan Sampel',
    blocks: [
      { type: 'text', text: 'POPULASI adalah keseluruhan objek penelitian, sedangkan SAMPEL adalah sebagian kecil anggota populasi yang dipilih untuk diteliti guna mewakili populasi. Sampel yang baik harus REPRESENTATIF (dipilih acak/proporsional agar tidak bias).' },
    ],
    activityTitle: 'Latihan: Populasi & Sampel',
    questions: [
      { text: 'Seorang guru ingin mengetahui rata-rata jam belajar seluruh 600 siswa SMPN di kotanya, lalu mengambil data secara acak dari 60 siswa (20 siswa tiap tingkat kelas 7, 8, 9). Yang menjadi SAMPEL adalah...', opts: ['60 siswa yang terpilih secara acak', 'Seluruh 600 siswa SMPN', 'Jam belajar', 'Guru peneliti'], ans: 0, exp: 'Populasi = 600 siswa; Sampel = 60 siswa yang diteliti.' },
      { text: 'Mengapa survei hobi olahraga seluruh siswa SMP akan BIAS jika sampelnya hanya diambil dari anggota klub futsal saja?', opts: ['Karena tidak representatif — hampir semua responden pasti menjawab futsal', 'Karena jumlahnya ganjil', 'Karena terlalu acak', 'Karena memakai angket'], ans: 0, exp: 'Sampel harus mewakili seluruh kelompok siswa secara adil.' },
      { text: 'Petugas kualitas pabrik mencicipi 10 bungkus pudak secara acak dari 500 bungkus produksi harian. Populasinya adalah...', opts: ['Seluruh 500 bungkus pudak produksi hari itu', '10 bungkus yang dicicipi', 'Petugas pabrik', 'Kemasan daun pinang'], ans: 0, exp: 'Populasi adalah keseluruhan objek yang ingin dinilai mutunya.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-08', subSeq: 3,
    objectives: ['Siswa mampu menyusun dan membaca tabel frekuensi data tunggal (termasuk menghitung jumlah frekuensi dan nilai memenuhi syarat).'],
    materialTitle: 'Tabel Distribusi Frekuensi',
    blocks: [
      { type: 'tip', text: 'Frekuensi (f) = banyaknya kemunculan suatu nilai. Jumlah seluruh frekuensi (Σf) harus sama persis dengan total banyak data (n)!' },
    ],
    activityTitle: 'Latihan: Tabel Frekuensi',
    questions: [
      { text: 'Tabel nilai ulangan Matematika: Nilai 60 (f=4), 70 (f=6), 80 (f=10), 90 (f=7), 100 (f=3). Jika KKM adalah 75, banyak siswa yang TUNTAS (nilai ≥ 75) adalah...', opts: ['20 siswa', '10 siswa', '17 siswa', '30 siswa'], ans: 0, exp: 'Nilai ≥ 75 adalah 80, 90, 100 → 10 + 7 + 3 = 20 siswa.' },
      { text: 'Dari tabel di atas (total 30 siswa), persentase siswa yang mendapat nilai 70 (f=6) adalah...', opts: ['20%', '6%', '15%', '25%'], ans: 0, exp: '(6 / 30) × 100% = 20%.' },
      { text: 'Tanda garis miring berkelompok lima (|||| dengan garis coret) yang dipakai saat mencacah data mentah disebut...', opts: ['Turus (tally)', 'Modus', 'Median', 'Range'], ans: 0, exp: 'Turus meminimalkan kesalahan hitung saat mengelompokkan data mentah.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-08', subSeq: 4,
    objectives: ['Siswa mampu membaca dan menghitung data dari diagram batang, diagram garis, dan diagram lingkaran (persen & derajat).'],
    materialTitle: 'Diagram Batang dan Diagram Lingkaran',
    blocks: [
      { type: 'formula', name: 'Rumus Diagram Lingkaran', expression: 'Besar Sudut = (f / Total) × 360°    |    Persentase = (f / Total) × 100%', note: 'Jika diketahui sudut θ° dan total N → nilai bagian = (θ° / 360°) × N.' },
    ],
    activityTitle: 'Latihan: Diagram Batang & Lingkaran',
    questions: [
      { text: 'Pada diagram lingkaran ekskul 180 siswa, sudut juring Pramuka adalah 120°. Banyak siswa peserta Pramuka adalah...', opts: ['60 siswa', '90 siswa', '45 siswa', '120 siswa'], ans: 0, exp: '(120° / 360°) × 180 = ⅓ × 180 = 60 siswa.' },
      { text: 'Diagram lingkaran hobi 200 siswa: Membaca 25%, Olahraga 40%, Musik 20%, sisanya Melukis. Banyak siswa yang hobi Melukis adalah...', opts: ['30 siswa', '15 siswa', '40 siswa', '25 siswa'], ans: 0, exp: 'Melukis = 100% − (25+40+20)% = 15% → 15% × 200 = 30 siswa.' },
      { text: 'Diagram yang PALING tepat untuk menampilkan perkembangan suhu harian atau jumlah pengunjung dari bulan Januari hingga Desember adalah...', opts: ['Diagram garis', 'Diagram lingkaran', 'Diagram panah', 'Piktogram'], ans: 0, exp: 'Diagram garis menonjolkan tren naik-turun data berkala dari waktu ke waktu.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-08', subSeq: 5,
    objectives: ['Siswa mampu menghitung mean (rata-rata) data tunggal, data berbobot tabel frekuensi, serta mean gabungan.'],
    materialTitle: 'Mean (Rata-Rata Hitung) & Mean Gabungan',
    blocks: [
      { type: 'formula', name: 'Rumus Mean & Mean Gabungan', expression: 'x̄ = (Σ f·x) / (Σ f)    |    x̄_gab = (n1·x̄1 + n2·x̄2) / (n1 + n2)', note: 'Trik cepat: Total nilai = banyak data × rata-rata!' },
      { type: 'worked_example', level: 'Siswa Susulan', question: 'Rata-rata 4 kali ulangan Bima adalah 80. Agar rata-rata 5 kali ulangan menjadi 82, berapa nilai ulangan ke-5 yang harus ia raih?', steps: ['Total 4 ulangan = 4 × 80 = 320.', 'Target total 5 ulangan = 5 × 82 = 410.', 'Nilai ke-5 = 410 − 320 = 90!'], answer: '90' },
    ],
    activityTitle: 'Latihan: Mean (Rata-Rata)',
    questions: [
      { text: 'Rata-rata dari data 6, 8, 7, 9, 10, 8 adalah...', opts: ['8', '7,5', '8,5', '9'], ans: 0, exp: '(6+8+7+9+10+8) / 6 = 48 / 6 = 8.' },
      { text: 'Rata-rata nilai 18 siswa adalah 75. Setelah 2 siswa susulan masuk dengan nilai rata-rata 85, rata-rata seluruh 20 siswa menjadi...', opts: ['76', '80', '77', '78'], ans: 0, exp: '(18×75 + 2×85) / 20 = (1350 + 170) / 20 = 1520 / 20 = 76.' },
      { text: 'Tabel nilai: 70 (f=2), 80 (f=5), 90 (f=3). Mean data tersebut adalah...', opts: ['81', '80', '82', '83'], ans: 0, exp: '(140 + 400 + 270) / (2+5+3) = 810 / 10 = 81.' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-08', subSeq: 6,
    objectives: ['Siswa mampu menentukan median (nilai tengah) untuk jumlah data ganjil dan genap termasuk dari tabel frekuensi.'],
    materialTitle: 'Median (Nilai Tengah)',
    blocks: [
      { type: 'formula', name: 'Aturan Median — WAJIB URUTKAN DATA DULU!', expression: 'n ganjil → data ke-(n+1)/2    |    n genap → rata-rata data ke-(n/2) dan ke-(n/2 + 1)', note: 'Kesalahan tersering: langsung ambil angka tengah TANPA mengurutkan data dari kecil ke besar!' },
    ],
    activityTitle: 'Latihan: Median',
    questions: [
      { text: 'Median dari data 9, 5, 7, 8, 6, 10, 7 adalah...', opts: ['7', '8', '6', '7,5'], ans: 0, exp: 'Urutkan: 5, 6, 7, [7], 8, 9, 10 → data ke-4 adalah 7.' },
      { text: 'Median dari data 4, 8, 6, 10, 5, 9 adalah...', opts: ['7', '6', '8', '7,5'], ans: 0, exp: 'Urutkan: 4, 5, [6, 8], 9, 10 → (6 + 8) ÷ 2 = 7.' },
      { text: 'Dari tabel frekuensi: nilai 6 (f=3), 7 (f=4), 8 (f=5), 9 (f=2) → total 14 data. Mediannya terletak di antara data ke-7 dan ke-8, yaitu...', opts: ['7,5', '7', '8', '8,5'], ans: 0, exp: 'Frek kumulatif: nilai 6 (1–3), nilai 7 (4–7), nilai 8 (8–12). Data ke-7 = 7, data ke-8 = 8 → (7+8)/2 = 7,5!' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-08', subSeq: 7,
    objectives: ['Siswa mampu menentukan modus dan membandingkan ketepatan penggunaan mean, median, dan modus.'],
    materialTitle: 'Modus (Nilai Paling Sering Muncul)',
    blocks: [
      { type: 'text', text: 'MODUS adalah data dengan frekuensi terbesar. Satu kumpulan data bisa memiliki 1 modus, 2 modus (bimodal), atau tanpa modus jika semua muncul sama banyak. Modus adalah satu-satunya ukuran pemusatan yang bisa dipakai untuk data kualitatif (seperti ukuran sepatu atau menu favorit).' },
    ],
    activityTitle: 'Latihan: Modus',
    questions: [
      { text: 'Ukuran sepatu 9 siswa: 37, 38, 39, 38, 40, 38, 39, 41, 37. Modus ukuran sepatu tersebut adalah...', opts: ['38', '39', '37', '38,5'], ans: 0, exp: '38 muncul 3 kali (paling banyak).' },
      { text: 'Jika seorang pemilik toko sepatu ingin menentukan ukuran sepatu mana yang harus distok paling banyak, ukuran statistika paling relevan adalah...', opts: ['Modus', 'Jangkauan', 'Rata-rata desimal', 'Median'], ans: 0, exp: 'Modus menunjukkan ukuran paling laris dibeli pelanggan.' },
      { text: 'Data 5, 6, 6, 7, 8, 8, 9 memiliki...', opts: ['Dua modus (bimodal), yaitu 6 dan 8', 'Satu modus yaitu 7', 'Tidak punya modus', 'Modus 9'], ans: 0, exp: 'Baik 6 maupun 8 sama-sama muncul paling sering (2 kali).' },
    ],
  },
  {
    topicCode: 'MAT-SMP8-08', subSeq: 8,
    objectives: ['Siswa mampu menghitung jangkauan (range), kuartil (Q1, Q2, Q3), dan jangkauan interkuartil sebagai ukuran penyebaran data.'],
    materialTitle: 'Jangkauan dan Penyebaran Data',
    blocks: [
      { type: 'formula', name: 'Rumus Jangkauan (Range) & Kuartil', expression: 'Jangkauan (R) = X_maks − X_min    |    Jangkauan Interkuartil (IQR) = Q3 − Q1', note: 'Jangkauan besar berarti data menyebar luas (beragam); jangkauan kecil berarti data seragam/merata.' },
    ],
    activityTitle: 'Latihan: Jangkauan & Penyebaran Data',
    questions: [
      { text: 'Nilai ulangan 8 siswa: 72, 85, 64, 90, 78, 88, 60, 95. Jangkauan (range) data tersebut adalah...', opts: ['35', '30', '23', '95'], ans: 0, exp: 'R = 95 − 60 = 35.' },
      { text: 'Dari data terurut 2, 4, 6, 8, 10, 12, 14, nilai kuartil bawah (Q1) dan kuartil atas (Q3) berturut-turut adalah...', opts: ['4 dan 12', '6 dan 10', '2 dan 14', '5 dan 11'], ans: 0, exp: 'Q2 = 8; bagian kiri {2,4,6} → Q1 = 4; bagian kanan {10,12,14} → Q3 = 12.' },
      { text: 'Dua kelas punya rata-rata sama (80). Kelas A berjangkauan 10, Kelas B berjangkauan 45. Artinya nilai siswa Kelas A...', opts: ['Lebih merata / homogen dibanding Kelas B', 'Lebih rendah semua', 'Pasti ada nilai 0', 'Lebih beragam ekstrem'], ans: 0, exp: 'Jangkauan kecil menandakan sebaran nilai lebih rapat dan merata.' },
    ],
  },
];

upsertLessonsBatch('Kelas 8 SMP — Matematika (8 Bab, 47 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

