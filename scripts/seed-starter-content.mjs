import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function loadEnv() {
  for (const filename of ['.env.local', '.env']) {
    const filePath = path.join(rootDir, filename);
    if (!fs.existsSync(filePath)) continue;
    for (const line of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
      if (m && !process.env[m[1]]) {
        process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
      }
    }
  }
}

loadEnv();

const connectionString = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;
const STARTER_LESSONS = [
  // ==================== KELAS 1 SD ====================
  {
    topicCode: 'MAT-SD1-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu membilang benda konkret dari 1 sampai 10 secara urut.',
      'Siswa mampu membaca dan menuliskan lambang bilangan 1 sampai 10 dengan benar.',
    ],
    materialTitle: 'Mengenal dan Menghitung Angka 1 sampai 10',
    blocks: [
      { type: 'heading', text: 'Ayo Mengenal Angka 1 sampai 10!' },
      { type: 'paragraph', text: 'Angka digunakan untuk menghitung banyak benda di sekitar kita, seperti pensil di kotak pensil, buku di tas, atau jari di kedua tangan kita.' },
      { type: 'list', title: 'Urutan Bilangan 1–10', items: ['1 = satu', '2 = dua', '3 = tiga', '4 = empat', '5 = lima', '6 = enam', '7 = tujuh', '8 = delapan', '9 = sembilan', '10 = sepuluh'] },
      { type: 'example', title: 'Contoh Menghitung Benda', text: 'Budi mempunyai 3 pensil merah dan 2 pensil biru. Jika dihitung semuanya satu per satu: 1, 2, 3, 4, 5. Jadi jumlah pensil Budi ada 5 buah.' },
      { type: 'tip', text: 'Gunakan jari tangan atau kelereng saat belajar menghitung agar lebih mudah dan tidak ada benda yang terlewat!' },
    ],
    activityTitle: 'Latihan: Mengenal Angka 1–10',
    questions: [
      { text: 'Nama bilangan untuk lambang angka 7 adalah...', opts: ['Enam', 'Tujuh', 'Delapan', 'Sembilan'], ans: 1, exp: 'Angka 7 dibaca "tujuh".' },
      { text: 'Bilangan yang tepat sesudah angka 5 adalah...', opts: ['4', '6', '7', '8'], ans: 1, exp: 'Urutan membilang adalah 1, 2, 3, 4, 5, 6. Jadi sesudah 5 adalah 6.' },
      { text: 'Di meja ada 4 apel dan 3 jeruk. Banyak seluruh buah di meja ada...', opts: ['6', '7', '8', '9'], ans: 1, exp: 'Jika dihitung bersama: 4 buah apel + 3 buah jeruk = 7 buah.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu menyebutkan 5 huruf vokal (a, i, u, e, o).',
      'Siswa mampu menemukan huruf vokal pada kata sederhana di sekitar.',
    ],
    materialTitle: 'Mengenal 5 Huruf Vokal (A, I, U, E, O)',
    blocks: [
      { type: 'heading', text: 'Apa itu Huruf Vokal?' },
      { type: 'paragraph', text: 'Huruf vokal adalah huruf hidup yang bunyinya keluar lancar tanpa hambatan. Dalam bahasa Indonesia ada 5 huruf vokal yang sangat penting untuk membaca kata.' },
      { type: 'list', title: 'Lima Huruf Vokal', items: ['A / a — seperti pada kata "apel" dan "ayam"', 'I / i — seperti pada kata "ikan" dan "ibu"', 'U / u — seperti pada kata "ular" dan "uang"', 'E / e — seperti pada kata "ember" dan "elang"', 'O / o — seperti pada kata "obat" dan "orang"'] },
      { type: 'example', title: 'Mencari Huruf Vokal dalam Kata', text: 'Pada kata "BUKU", huruf vokalnya adalah U dan U. Pada kata "MEJA", huruf vokalnya adalah E dan A.' },
      { type: 'tip', text: 'Nyanyikan urutan A - I - U - E - O berulang-ulang supaya cepat hafal!' },
    ],
    activityTitle: 'Latihan: Mengenal Huruf Vokal',
    questions: [
      { text: 'Manakah yang merupakan kelima huruf vokal?', opts: ['a, b, c, d, e', 'a, i, u, e, o', 'b, c, d, f, g', 'a, i, k, m, o'], ans: 1, exp: 'Lima huruf vokal dalam bahasa Indonesia adalah a, i, u, e, dan o.' },
      { text: 'Huruf vokal yang ada pada kata "BOLA" adalah...', opts: ['B dan L', 'O dan A', 'B dan O', 'L dan A'], ans: 1, exp: 'Pada kata B-O-L-A, huruf B dan L adalah konsonan, sedangkan O dan A adalah huruf vokal.' },
      { text: 'Kata yang diawali huruf vokal "I" adalah...', opts: ['Ikan', 'Meja', 'Buku', 'Topi'], ans: 0, exp: 'Kata "Ikan" diawali dengan huruf vokal I.' },
    ],
  },
  {
    topicCode: 'BIG-SD1-01',
    subSeq: 1,
    objectives: [
      'Siswa mengenal kosakata bahasa Inggris sederhana di sekitar kelas dan rumah.',
      'Siswa berani mengucapkan salam sederhana dalam bahasa Inggris.',
    ],
    materialTitle: 'My First English Words (Pengayaan Dasar)',
    blocks: [
      { type: 'heading', text: 'Welcome to English!' },
      { type: 'paragraph', text: 'Bahasa Inggris dipakai di banyak negara. Kita bisa mulai dari kata-kata yang sangat dekat dengan kehidupan kita sehari-hari.' },
      { type: 'list', title: 'Kosakata Pertama Kita', items: ['Book = Buku', 'Pencil = Pensil', 'Apple = Apel', 'Cat = Kucing', 'Ball = Bola', 'Hello / Hi = Halo'] },
      { type: 'example', title: 'Ayo Ucapkan Bersama!', text: 'Saat bertemu teman, ucapkan: "Hello!" lalu tunjuk benda di dekatmu: "This is a book" (Ini sebuah buku).' },
      { type: 'tip', text: 'Catatan: Materi Bahasa Inggris kelas 1 SD ini adalah pengayaan ringan agar siswa percaya diri mendengar dan mengucapkan kata bahasa Inggris.' },
    ],
    activityTitle: 'Practice: My First English Words',
    questions: [
      { text: 'Apa arti kata bahasa Inggris "Book"?', opts: ['Pensil', 'Buku', 'Bola', 'Tas'], ans: 1, exp: '"Book" dalam bahasa Indonesia berarti buku.' },
      { text: 'Bahasa Inggris untuk hewan "Kucing" adalah...', opts: ['Dog', 'Bird', 'Cat', 'Fish'], ans: 2, exp: 'Cat = kucing, Dog = anjing, Bird = burung, Fish = ikan.' },
      { text: 'Ungkapan sederhana untuk menyapa teman adalah...', opts: ['Hello!', 'Pencil!', 'Table!', 'Apple!'], ans: 0, exp: '"Hello!" digunakan untuk menyapa teman.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-01',
    subSeq: 1,
    objectives: [
      'Siswa mengenal kosakata dasar Bahasa Jawa dalam lingkungan keluarga.',
      'Siswa dapat menirukan sapaan sederhana Bahasa Jawa dengan santun.',
    ],
    materialTitle: 'Sinau Basa Jawa: Sapaan lan Tembung Padinan',
    blocks: [
      { type: 'heading', text: 'Sugeng Rawuh ing Pelajaran Basa Jawa' },
      { type: 'paragraph', text: 'Basa Jawa digunakake ing saben dina kanggo omong-omongan karo kulawarga, kanca, lan guru ing Gresik lan Jawa Timur.' },
      { type: 'list', title: 'Tembung lan Sapaan Dasar', items: ['Sugeng enjang = Selamat pagi', 'Sugeng siang = Selamat siang', 'Matur nuwun = Terima kasih', 'Nyuwun pangapunten = Mohon maaf', 'Ibu / Bapak = Ibu / Ayah', 'Omah = Rumah'] },
      { type: 'example', title: 'Tuladha ing Omah', text: 'Nalika diparingi jajan dening ibu, kita ngucapake: "Matur nuwun, Bu!"' },
      { type: 'tip', text: 'Biasakake ngucapake "matur nuwun" saben ditulungi wong liya supaya dadi bocah sing sopan.' },
    ],
    activityTitle: 'Gladhen: Sinau Basa Jawa',
    questions: [
      { text: 'Arti ungkapan "Matur nuwun" dalam bahasa Indonesia adalah...', opts: ['Selamat pagi', 'Terima kasih', 'Sampai jumpa', 'Permisi'], ans: 1, exp: '"Matur nuwun" artinya terima kasih.' },
      { text: 'Sapaan Bahasa Jawa untuk "Selamat pagi" adalah...', opts: ['Sugeng enjang', 'Sugeng dalu', 'Sugeng tindak', 'Matur nuwun'], ans: 0, exp: '"Sugeng enjang" digunakan untuk menyapa di pagi hari.' },
      { text: 'Kata "Omah" dalam Bahasa Jawa berarti...', opts: ['Sekolah', 'Pasar', 'Rumah', 'Jalan'], ans: 2, exp: '"Omah" (ngoko) berarti rumah.' },
    ],
  },

  // ==================== KELAS 2 SD ====================
  {
    topicCode: 'MAT-SD2-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu membaca dan menuliskan lambang bilangan dua angka sampai 100.',
      'Siswa memahami nilai tempat puluhan dan satuan.',
    ],
    materialTitle: 'Membaca dan Menulis Bilangan sampai 100',
    blocks: [
      { type: 'heading', text: 'Puluhan dan Satuan' },
      { type: 'paragraph', text: 'Bilangan dua angka terdiri atas angka di sebelah kiri sebagai puluhan dan angka di sebelah kanan sebagai satuan.' },
      { type: 'example', title: 'Contoh Nilai Tempat', text: 'Bilangan 47 terdiri dari 4 puluhan (40) dan 7 satuan (7). Cara membacanya adalah "empat puluh tujuh".' },
      { type: 'list', title: 'Contoh Lainnya', items: ['25 dibaca dua puluh lima', '60 dibaca enam puluh', '89 dibaca delapan puluh sembilan', '100 dibaca seratus'] },
      { type: 'tip', text: 'Hati-hati dengan angka 11–19: 11 dibaca "sebelas", 12 "dua belas", sampai 19 "sembilan belas" (bukan satu puluh dua).' },
    ],
    activityTitle: 'Latihan: Bilangan sampai 100',
    questions: [
      { text: 'Lambang bilangan dari "enam puluh empat" adalah...', opts: ['46', '64', '604', '406'], ans: 1, exp: 'Enam puluh = 60, empat = 4, sehingga ditulis 64.' },
      { text: 'Pada bilangan 73, angka 7 menempati nilai tempat...', opts: ['Satuan', 'Puluhan', 'Ratusan', 'Ribuan'], ans: 1, exp: 'Pada 73, angka 7 di kiri bernilai 70 (puluhan) dan angka 3 di kanan bernilai satuan.' },
      { text: 'Bilangan 8 puluhan dan 5 satuan sama dengan...', opts: ['58', '80', '85', '88'], ans: 2, exp: '8 puluhan = 80, ditambah 5 satuan = 85.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu membaca kata baru dengan penggalan suku kata yang tepat.',
      'Siswa mampu memahami arti kata baru melalui konteks kalimat sederhana.',
    ],
    materialTitle: 'Cara Mudah Membaca dan Memahami Kata Baru',
    blocks: [
      { type: 'heading', text: 'Memenggal Suku Kata' },
      { type: 'paragraph', text: 'Saat bertemu kata baru yang agak panjang, kita bisa memecahnya menjadi suku kata terlebih dahulu agar mudah dibaca dengan lancar.' },
      { type: 'example', title: 'Contoh Penggalan Suku Kata', text: 'se-ko-lah → sekolah\nper-pus-ta-ka-an → perpustakaan\nke-ber-sih-an → kebersihan' },
      { type: 'tip', text: 'Jika belum tahu arti kata baru, baca seluruh kalimatnya! Kalimat di sekitarnya sering memberi petunjuk arti kata tersebut.' },
    ],
    activityTitle: 'Latihan: Membaca Kata Baru',
    questions: [
      { text: 'Penggalan suku kata yang tepat untuk kata "sekolah" adalah...', opts: ['sek-ol-ah', 'se-ko-lah', 'se-kol-ah', 's-eko-lah'], ans: 1, exp: 'Kata "sekolah" memiliki 3 suku kata: se-ko-lah.' },
      { text: '"Rina meminjam buku cerita di perpustakaan." Arti perpustakaan adalah tempat untuk...', opts: ['Bermain bola', 'Membeli makanan', 'Membaca dan meminjam buku', 'Menanam bunga'], ans: 2, exp: 'Perpustakaan adalah tempat menyimpan, membaca, dan meminjam buku.' },
      { text: 'Kata "menanam" terdiri dari berapa suku kata?', opts: ['2 suku kata', '3 suku kata', '4 suku kata', '5 suku kata'], ans: 1, exp: 'me-na-nam terdiri dari 3 suku kata.' },
    ],
  },
  {
    topicCode: 'BIG-SD2-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu menyebutkan nama benda-benda di dalam ruang kelas dalam bahasa Inggris.',
      'Siswa mampu memahami instruksi sederhana yang berkaitan dengan benda di kelas.',
    ],
    materialTitle: 'My School: Classroom Objects',
    blocks: [
      { type: 'heading', text: 'Things in My Classroom' },
      { type: 'paragraph', text: 'Di dalam kelas ada banyak benda yang kita pakai belajar setiap hari. Ayo kenali namanya dalam bahasa Inggris!' },
      { type: 'list', title: 'Classroom Vocabulary', items: ['Chair = Kursi', 'Table / Desk = Meja', 'Whiteboard = Papan tulis putih', 'Bag = Tas', 'Eraser = Penghapus', 'Ruler = Penggaris'] },
      { type: 'example', title: 'Kalimat Sederhana', text: '"Open your book!" (Buka bukumu!)\n"Put your pencil in the bag." (Masukkan pensilmu ke dalam tas.)' },
      { type: 'tip', text: 'Coba tempel label nama bahasa Inggris kecil pada benda di meja belajarmu di rumah!' },
    ],
    activityTitle: 'Practice: Classroom Objects',
    questions: [
      { text: 'Bahasa Inggris dari "Penghapus" adalah...', opts: ['Ruler', 'Eraser', 'Chair', 'Bag'], ans: 1, exp: 'Eraser berarti penghapus, sedangkan Ruler adalah penggaris.' },
      { text: 'Apa arti kata "Chair"?', opts: ['Meja', 'Pintu', 'Kursi', 'Buku'], ans: 2, exp: 'Chair dalam bahasa Indonesia berarti kursi.' },
      { text: 'Benda yang digunakan untuk menggaris lurus disebut...', opts: ['Ruler', 'Bag', 'Desk', 'Eraser'], ans: 0, exp: 'Ruler berarti penggaris.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu menyebutkan kosakata kegiatan sehari-hari dalam Bahasa Jawa.',
      'Siswa mampu menceritakan urutan kegiatan dari pagi sampai malam secara sederhana.',
    ],
    materialTitle: 'Kegiyatanku Saben Dina',
    blocks: [
      { type: 'heading', text: 'Kegiyatan Wiwit Esuk nganti Bengi' },
      { type: 'paragraph', text: 'Saben dina kita nindakake maneka warna kegiyatan wiwit tangi turu nganti turu maneh ing wayah bengi.' },
      { type: 'list', title: 'Tembung Kegiyatan Padinan', items: ['Tangi turu = Bangun tidur', 'Adus = Mandi', 'Sarapan / Mangan = Sarapan / Makan', 'Budhal sekolah = Berangkat sekolah', 'Sinau = Belajar', 'Turu = Tidur'] },
      { type: 'example', title: 'Tuladha Ukara', text: '"Jam lima esuk aku tangi turu. Banjur aku adus lan sarapan sadurunge budhal sekolah."' },
      { type: 'tip', text: 'Urutake crita kegiyatanmu nganggo tembung "banjur" (lalu/kemudian) supaya gampang dimangerteni.' },
    ],
    activityTitle: 'Gladhen: Kegiyatanku Saben Dina',
    questions: [
      { text: 'Tembung "Sinau" ing Basa Indonesia tegese...', opts: ['Makan', 'Tidur', 'Belajar', 'Bermain'], ans: 2, exp: '"Sinau" berarti belajar.' },
      { text: 'Kegiyatan reresik awak nganggo banyu lan sabun diarani...', opts: ['Adus', 'Turu', 'Mangan', 'Maca'], ans: 0, exp: '"Adus" berarti mandi.' },
      { text: 'Urutan kegiyatan esuk sing bener yaiku...', opts: ['Turu - Adus - Tangi', 'Tangi turu - Adus - Budhal sekolah', 'Budhal sekolah - Tangi turu - Adus', 'Mangan bengi - Tangi turu'], ans: 1, exp: 'Pagi hari dimulai dari bangun tidur (tangi turu), mandi (adus), lalu berangkat sekolah.' },
    ],
  },

  // ==================== KELAS 5 SD ====================
  {
    topicCode: 'MAT-SD5-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu membaca dan menulis bilangan cacah sampai 1.000.000 dengan tepat.',
      'Siswa mampu menentukan nilai tempat hingga ratus ribuan.',
    ],
    materialTitle: 'Membaca, Menulis, dan Nilai Tempat Bilangan hingga 1.000.000',
    blocks: [
      { type: 'heading', text: 'Mengenal Bilangan Ratus Ribuan' },
      { type: 'paragraph', text: 'Bilangan besar seperti harga barang, jarak antarkota, atau jumlah penduduk sering mencapai ratusan ribu hingga satu juta. Tanda titik (.) dipakai setiap 3 angka dari belakang untuk memudahkan membaca.' },
      { type: 'list', title: 'Urutan Nilai Tempat (dari kiri ke kanan)', items: ['Ratus ribuan (100.000)', 'Puluh ribuan (10.000)', 'Ribuan (1.000)', 'Ratusan (100)', 'Puluhan (10)', 'Satuan (1)'] },
      { type: 'example', title: 'Contoh Membaca Bilangan', text: '345.620 dibaca: "tiga ratus empat puluh lima ribu enam ratus dua puluh".\nAngka 3 bernilai 300.000 (ratus ribuan), angka 4 bernilai 40.000 (puluh ribuan).' },
      { type: 'tip', text: 'Pisahkan bilangan di tanda titik ribuan! Baca bagian kiri dulu lalu sebut "ribu", baru baca 3 angka di kanannya.' },
    ],
    activityTitle: 'Latihan: Bilangan sampai 1.000.000',
    questions: [
      { text: 'Lambang bilangan dari "empat ratus dua puluh lima ribu tiga ratus" adalah...', opts: ['425.030', '425.300', '402.530', '452.300'], ans: 1, exp: '425 ribu = 425.000, ditambah tiga ratus (300) = 425.300.' },
      { text: 'Pada bilangan 682.419, nilai angka 8 adalah...', opts: ['800', '8.000', '80.000', '800.000'], ans: 2, exp: 'Angka 8 berada di posisi puluh ribuan sehingga nilainya 80.000.' },
      { text: 'Bilangan manakah yang paling besar?', opts: ['509.800', '590.100', '589.999', '519.900'], ans: 1, exp: 'Bandingkan dari nilai tempat terbesar: semua ratus ribuannya 5; puluh ribuan terbesar adalah 9 pada 590.100.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu membaca teks panjang secara cermat untuk menangkap gagasan pokok setiap paragraf.',
      'Siswa mampu menemukan informasi penting menggunakan pertanyaan ADIKSIMBA (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana).',
    ],
    materialTitle: 'Strategi Membaca Teks Panjang & Menemukan Ide Pokok',
    blocks: [
      { type: 'heading', text: 'Mengapa Perlu Strategi Saat Membaca Teks Panjang?' },
      { type: 'paragraph', text: 'Teks panjang terdiri dari beberapa paragraf yang saling berhubungan. Supaya tidak bingung atau lupa isi bacaan, kita perlu membaca secara aktif dengan mencari ide pokok di setiap paragraf.' },
      { type: 'list', title: 'Langkah Efektif Membaca Teks Panjang', items: ['Baca judul teks untuk menebak topik utama bacaan.', 'Tandai kalimat utama di awal atau akhir setiap paragraf.', 'Catat kata kunci penting (nama tokoh, tempat, waktu, dan peristiwa).', 'Gunakan pertanyaan ADIKSIMBA (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana) untuk menguji pemahamanmu.'] },
      { type: 'example', title: 'Contoh Paragraf (Konteks Gresik)', text: '"Pelabuhan Gresik sejak lama menjadi jalur perdagangan penting di pesisir utara Jawa Timur. Banyak kapal dagang singgah membawa hasil bumi dan rempah. Aktivitas ini mendorong tumbuhnya permukiman dan pasar tradisional di sekitar kawasan pelabuhan."\n→ Ide pokok paragraf: Peran Pelabuhan Gresik sebagai jalur perdagangan penting di pesisir utara Jawa Timur.' },
      { type: 'tip', text: 'Jangan langsung panik melihat bacaan panjang! Pecah per paragraf dan simpulkan tiap paragraf cukup dalam 1 kalimat singkat.' },
    ],
    activityTitle: 'Latihan: Membaca Teks Panjang',
    questions: [
      { text: 'Langkah pertama yang paling tepat sebelum membaca isi teks panjang adalah...', opts: ['Langsung menghafal kalimat terakhir', 'Membaca judul untuk mengenali topik bacaan', 'Melewati paragraf pertama', 'Menghitung jumlah huruf'], ans: 1, exp: 'Membaca judul membantu otak langsung memahami gambaran besar topik teks.' },
      { text: 'Kalimat yang memuat gagasan utama dalam sebuah paragraf disebut...', opts: ['Kalimat penjelas', 'Kalimat tanya', 'Kalimat utama', 'Kalimat perintah'], ans: 2, exp: 'Gagasan pokok atau ide pokok terletak pada kalimat utama.' },
      { text: 'Unsur pertanyaan ADIKSIMBA yang digunakan untuk menanyakan alasan terjadinya suatu peristiwa adalah...', opts: ['Siapa', 'Kapan', 'Di mana', 'Mengapa'], ans: 3, exp: '"Mengapa" digunakan untuk menanyakan sebab atau alasan.' },
    ],
  },
  {
    topicCode: 'BIG-SD5-01',
    subSeq: 1,
    objectives: [
      'Students can describe objects using adjectives of color, size, shape, and material.',
      'Students can form simple descriptive sentences using "It is..." and "It has...".',
    ],
    materialTitle: 'Describing Things: Color, Size, Shape & Material',
    blocks: [
      { type: 'heading', text: 'How to Describe an Object in English' },
      { type: 'paragraph', text: 'Untuk mendeskripsikan benda dalam bahasa Inggris, kita menggunakan kata sifat (adjectives) seperti ukuran (size), warna (color), bentuk (shape), dan bahan (material).' },
      { type: 'list', title: 'Useful Adjectives', items: ['Size: big (besar), small (kecil), long (panjang), short (pendek)', 'Color: red, blue, green, yellow, black, white', 'Shape: round (bulat), square (persegi), rectangular (persegi panjang)', 'Material: wooden (kayu), plastic (plastik), metal (logam), paper (kertas)'] },
      { type: 'example', title: 'Example Description', text: '"This is my pencil case. It is blue and rectangular. It is made of plastic. I use it to keep my pencils and eraser."' },
      { type: 'tip', text: 'Urutan kata sifat yang natural dalam bahasa Inggris: Ukuran dulu baru Warna (contoh: "a big red ball", bukan "a red big ball").' },
    ],
    activityTitle: 'Practice: Describing Things',
    questions: [
      { text: 'Susunan frasa bahasa Inggris yang benar untuk "sebuah bola merah yang besar" adalah...', opts: ['a red big ball', 'a big red ball', 'a ball big red', 'a red ball big'], ans: 1, exp: 'Urutan adjective bahasa Inggris mendahulukan ukuran (big) sebelum warna (red): "a big red ball".' },
      { text: 'Kata sifat yang tepat untuk bentuk jam dinding yang bulat adalah...', opts: ['Square', 'Long', 'Round', 'Heavy'], ans: 2, exp: '"Round" berarti bulat.' },
      { text: '"My ruler is made of plastic." Kalimat tersebut menjelaskan tentang...', opts: ['Warna penggaris', 'Bahan penggaris', 'Harga penggaris', 'Pemilik penggaris'], ans: 1, exp: '"Made of plastic" berarti terbuat dari plastik (menjelaskan bahan/material).' },
    ],
  },
  {
    topicCode: 'BJ-SD5-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu menjelaskan tujuan dan ciri-ciri teks deskripsi dalam Bahasa Jawa.',
      'Siswa mampu menyusun paragraf deskripsi sederhana tentang benda atau tempat di sekitar.',
    ],
    materialTitle: 'Teks Deskripsi Basa Jawa: Tujuan lan Struktur',
    blocks: [
      { type: 'heading', text: 'Apa iku Teks Deskripsi?' },
      { type: 'paragraph', text: 'Teks deskripsi yaiku teks sing nggambarake sawijining obyek (panggonan, barang, kewan, utawa wong) kanthi cetha nganti sing maca kaya-kaya bisa ndeleng utawa ngrasakake dhewe.' },
      { type: 'list', title: 'Struktur Teks Deskripsi', items: ['Identifikasi: ngenalake jeneng lan gambaran umum obyek.', 'Deskripsi Bagean: njlentrehake ciri-ciri rinci (werna, wujud, ukuran, fungsi, utawa swasana).', 'Panutup / Dudutan: kesan umum tumrap obyek kasebut.'] },
      { type: 'example', title: 'Tuladha Deskripsi (Konteks Gresik)', text: '"Alun-alun Gresik mapan ing tengah kutha lan rame saben sore. Ing sakupenge ana wit-witan sing ijo royo-royo lan papan lungguh kang resik. Bocah-bocah lan kulawarga padha dolan kanthi seneng."' },
      { type: 'tip', text: 'Gunakake tembung sifat (resik, gedhe, ijo, endah, rame) supaya gambaran teks deskripsimu luwih urip!' },
    ],
    activityTitle: 'Gladhen: Teks Deskripsi Basa Jawa',
    questions: [
      { text: 'Tujuan utama teks deskripsi yaiku...', opts: ['Ngajak tuku barang', 'Nggambarake obyek kanthi cetha', 'Menehi langkah-langkah masak', 'Nyritakake dongeng kewan'], ans: 1, exp: 'Teks deskripsi bertujuan menggambarkan objek secara jelas dan rinci.' },
      { text: 'Bagean teks deskripsi sing njlentrehake ciri-ciri rinci obyek diarani...', opts: ['Identifikasi', 'Deskripsi bagean', 'Orientasi', 'Komplikasi'], ans: 1, exp: 'Rincian ciri objek berada pada bagian deskripsi bagean.' },
      { text: 'Tembung "ijo royo-royo" lan "resik" kalebu jinising tembung...', opts: ['Tembung kriya (kata kerja)', 'Tembung sifat (kata sifat)', 'Tembung wilangan (bilangan)', 'Tembung pitakon'], ans: 1, exp: 'Ijo royo-royo dan resik adalah kata sifat untuk menggambarkan keadaan objek.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu menyebutkan organ utama sistem pernapasan dan pencernaan manusia.',
      'Siswa mampu menjelaskan hubungan fungsi organ tubuh dengan cara menjaga kesehatannya.',
    ],
    materialTitle: 'Mengenal Sistem Organ Tubuh Manusia dan Fungsinya',
    blocks: [
      { type: 'heading', text: 'Bagaimana Organ Tubuh Kita Bekerja Sama?' },
      { type: 'paragraph', text: 'Tubuh manusia tersusun dari berbagai organ yang bekerja sama membentuk sistem organ, seperti sistem pernapasan, sistem pencernaan, dan sistem peredaran darah.' },
      { type: 'list', title: 'Tiga Sistem Organ Penting', items: ['Sistem Pernapasan: Hidung → Tenggorokan → Paru-paru (menyerap oksigen dan mengeluarkan karbon dioksida).', 'Sistem Pencernaan: Mulut → Kerongkongan → Lambung → Usus halus → Usus besar (mengolah makanan menjadi energi dan nutrisi).', 'Sistem Peredaran Darah: Jantung dan pembuluh darah (memompa dan mengalirkan darah berisi oksigen & sari makanan ke seluruh tubuh).'] },
      { type: 'example', title: 'Cara Menjaga Kesehatan Organ', text: 'Makan makanan bergizi seimbang menjaga lambung & usus; olahraga teratur dan menjauhi asap rokok menjaga paru-paru dan jantung tetap sehat.' },
      { type: 'tip', text: 'Ingat bedanya: Tenggorokan untuk jalur napas (udara), Kerongkongan untuk jalur makanan!' },
    ],
    activityTitle: 'Latihan: Sistem Organ Tubuh Manusia',
    questions: [
      { text: 'Organ utama tempat terjadinya pertukaran oksigen dan karbon dioksida adalah...', opts: ['Lambung', 'Jantung', 'Paru-paru', 'Usus besar'], ans: 2, exp: 'Pertukaran gas O2 dan CO2 terjadi di paru-paru (tepatnya di alveolus).' },
      { text: 'Saluran pencernaan yang menghubungkan mulut dengan lambung disebut...', opts: ['Tenggorokan', 'Kerongkongan', 'Pembuluh darah', 'Bronkus'], ans: 1, exp: 'Kerongkongan (esofagus) menyalurkan makanan dari mulut menuju lambung.' },
      { text: 'Fungsi utama jantung dalam tubuh manusia adalah...', opts: ['Mencerna lemak', 'Memompa darah ke seluruh tubuh', 'Menyaring udara', 'Menyerap air'], ans: 1, exp: 'Jantung berperan memompa darah agar mengalir ke seluruh tubuh.' },
    ],
  },

  // ==================== KELAS 7 SMP ====================
  {
    topicCode: 'MAT-SMP7-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu menjelaskan pengertian bilangan bulat positif, nol, dan bilangan bulat negatif.',
      'Siswa mampu membandingkan dan mengurutkan bilangan bulat menggunakan garis bilangan.',
    ],
    materialTitle: 'Mengenal Bilangan Bulat dan Garis Bilangan',
    blocks: [
      { type: 'heading', text: 'Apa itu Bilangan Bulat?' },
      { type: 'paragraph', text: 'Bilangan bulat terdiri atas tiga bagian: bilangan bulat negatif (..., -3, -2, -1), bilangan nol (0), dan bilangan bulat positif (1, 2, 3, ...).' },
      { type: 'example', title: 'Penerapan dalam Kehidupan Sehari-hari', text: '• Suhu di dalam freezer = -5°C (5 derajat di bawah nol).\n• Suhu siang hari di Gresik = +33°C (33 derajat di atas nol).\n• Kedalaman penyelam 12 meter di bawah permukaan laut ditulis -12 m.' },
      { type: 'list', title: 'Aturan Garis Bilangan', items: ['Semakin ke KANAN letak bilangan, nilainya semakin BESAR.', 'Semakin ke KIRI letak bilangan, nilainya semakin KECIL.', 'Bilangan positif selalu lebih besar daripada 0 dan bilangan negatif.'] },
      { type: 'tip', text: 'Hati-hati! Pada bilangan negatif, -2 LEBIH BESAR daripada -10 karena posisi -2 lebih dekat ke kanan (mendekati 0).' },
    ],
    activityTitle: 'Latihan: Pengertian Bilangan Bulat',
    questions: [
      { text: 'Pernyataan perbandingan bilangan bulat berikut yang BENAR adalah...', opts: ['-8 > -3', '-2 > -7', '0 < -4', '-10 > 2'], ans: 1, exp: 'Pada garis bilangan, -2 berada di sebelah kanan -7, sehingga -2 > -7.' },
      { text: 'Urutan bilangan bulat berikut dari yang terkecil ke terbesar adalah: 3, -5, 0, -1, 4', opts: ['-1, -5, 0, 3, 4', '-5, -1, 0, 3, 4', '4, 3, 0, -1, -5', '0, -1, -5, 3, 4'], ans: 1, exp: 'Bilangan paling kiri (terkecil) adalah -5, diikuti -1, 0, 3, lalu 4.' },
      { text: 'Suhu ruangan awal 24°C, lalu diturunkan 6°C oleh AC. Suhu ruangan sekarang adalah...', opts: ['30°C', '18°C', '16°C', '-18°C'], ans: 1, exp: '24 - 6 = 18°C.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu mengidentifikasi tujuan, ciri umum, dan struktur teks deskripsi.',
      'Siswa mampu mengenali penggunaan kalimat perincian dan majas personifikasi dalam teks deskripsi.',
    ],
    materialTitle: 'Memahami Pengertian, Tujuan, dan Struktur Teks Deskripsi',
    blocks: [
      { type: 'heading', text: 'Hakikat Teks Deskripsi' },
      { type: 'paragraph', text: 'Teks deskripsi adalah teks yang melukiskan suatu objek (tempat wisata, tokoh, benda, atau peristiwa budaya) secara rinci dengan melibatkan pancaindra sehingga pembaca seolah-olah melihat, mendengar, dan merasakan langsung objek tersebut.' },
      { type: 'list', title: 'Struktur Teks Deskripsi', items: ['Identifikasi: pengenalan objek, nama, lokasi, dan gambaran umum.', 'Deskripsi Bagian: rincian bagian-bagian objek berdasarkan pengamatan pancaindra.', 'Simpulan / Kesan: penutup berisi kesan pribadi penulis terhadap objek.'] },
      { type: 'example', title: 'Contoh Kalimat Perincian', text: 'Kalimat umum: "Pantai itu sangat indah."\nKalimat perincian: "Air lautnya biru jernih memantulkan cahaya matahari pagi, sementara angin pesisir berembus lembut menyapa pepohonan bakau."' },
      { type: 'tip', text: 'Ciri khas teks deskripsi SMP kelas 7 adalah pemakaian kata konkret, kalimat perincian, dan kata depan "di" (dipisah untuk tempat, mis. "di Gresik").' },
    ],
    activityTitle: 'Latihan: Teks Deskripsi SMP 7',
    questions: [
      { text: 'Tujuan utama penulisan teks deskripsi adalah...', opts: ['Meyakinkan pembaca agar setuju', 'Menggambarkan objek secara rinci melibatkan pancaindra', 'Menjelaskan urutan cara membuat sesuatu', 'Melaporkan hasil percobaan ilmiah'], ans: 1, exp: 'Teks deskripsi bertujuan melukiskan objek secara detail agar pembaca seolah mengalaminya sendiri.' },
      { text: 'Penulisan kata depan "di" yang tepat sesuai kaidah kebahasaan adalah...', opts: ['dimana dan disekolah', 'di pantai dan di Gresik', 'diambil dan di tulis', 'dirumah dan di pasar'], ans: 1, exp: '"di" sebagai kata depan penunjuk tempat ditulis terpisah: "di pantai", "di Gresik".' },
      { text: '"Ombak kecil berlarian mengejar tepi pasir." Kalimat tersebut menggunakan majas...', opts: ['Hiperbola', 'Personifikasi', 'Metafora', 'Ironi'], ans: 1, exp: 'Personifikasi memberi sifat manusia ("berlarian mengejar") kepada benda mati (ombak).' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-01',
    subSeq: 1,
    objectives: [
      'Students can introduce themselves politely including name, age, origin, school, and hobby.',
      'Students can ask for and give basic personal information in everyday conversations.',
    ],
    materialTitle: 'Getting to Know Each Other: Self-Introduction',
    blocks: [
      { type: 'heading', text: 'How to Introduce Yourself in English' },
      { type: 'paragraph', text: 'Perkenalan diri (self-introduction) sangat penting saat bertemu teman baru di kelas SMP. Kita menggunakan Simple Present Tense (am/is/are, live, like).' },
      { type: 'list', title: 'Key Expressions', items: ['Greeting: "Hello everyone!" / "Good morning!"', 'Name: "My name is Bima." / "You can call me Bima."', 'Origin: "I am from Gresik." / "I live in Kebomas."', 'School & Grade: "I am a seventh-grade student."', 'Hobby: "My hobby is playing football." / "I like reading."'] },
      { type: 'example', title: 'Complete Sample', text: '"Hello! My name is Nadia. I am 12 years old. I live in Gresik, East Java. I am a 7th-grade student. In my free time, I like drawing and cycling. Nice to meet you!"' },
      { type: 'tip', text: 'Perhatikan penggunaan "to be": I am, You/We/They are, He/She/It is.' },
    ],
    activityTitle: 'Practice: Self-Introduction',
    questions: [
      { text: 'Lengkapi kalimat: "Hello, my name ___ Raka and I ___ twelve years old."', opts: ['are / is', 'is / am', 'am / is', 'is / are'], ans: 1, exp: 'Subjek "my name" (tunggal/it) memakai "is", sedangkan subjek "I" memakai "am".' },
      { text: 'Pertanyaan yang tepat untuk menanyakan tempat tinggal teman baru adalah...', opts: ['What is your hobby?', 'How old are you?', 'Where do you live?', 'What is your name?'], ans: 2, exp: '"Where do you live?" berarti "Di mana kamu tinggal?".' },
      { text: 'Respons yang sopan untuk ucapan "Nice to meet you!" adalah...', opts: ['See you tomorrow', 'Nice to meet you, too!', 'I am twelve years old', 'Good night'], ans: 1, exp: 'Balasan standar dan sopan adalah "Nice to meet you, too!".' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu membedakan penerapan ragam Ngoko Lugu, Ngoko Alus, Krama Lugu, dan Krama Alus sesuai lawan bicara.',
      'Siswa mampu memilih ragam bahasa yang santun dalam percakapan sehari-hari.',
    ],
    materialTitle: 'Unggah-Ungguh Basa Jawa ing Maneka Kahanan',
    blocks: [
      { type: 'heading', text: 'Milih Ragam Basa Miturut Kahanan' },
      { type: 'paragraph', text: 'Unggah-ungguh basa dudu mung apalan kosakata, nanging kaprigelan milih ragam basa sing trep miturut sapa sing diajak guneman (lawan bicara), umur, lan swasana.' },
      { type: 'list', title: 'Papat Ragam Utama Unggah-Ungguh', items: ['Ngoko Lugu: kanggo kanca akrab utawa wong sing luwih enom (contoh: "Kowe wis mangan?").', 'Ngoko Alus: ngoko kacampuran krama inggil kanggo wong sing akrab nanging tetep diajeni (contoh: "Sampeyan wis dhahar?").', 'Krama Lugu: basa krama madya kanggo wong sing durung pati akrab.', 'Krama Alus (Inggil): kanggo wong tuwa, guru, utawa wong sing luwih sepuh (contoh: "Panjenengan sampun dhahar?").'] },
      { type: 'example', title: 'Tuladha Dialog karo Guru', text: 'Siswa: "Sugeng enjang, Bu. Kula badhe nyuwun pirsa babagan tugas punika."\nGuru: "Sugeng enjang. Iya, bagean endi sing durung paham?"' },
      { type: 'tip', text: 'Aturan penting: Tembung krama inggil (kaya "dhahar", "sare", "tindak") mung dienggo kanggo wong liya sing diajeni, AJA dienggo kanggo awake dhewe! Kanggo awak dhewe cukup "nedha", "tilem", "kesah".' },
    ],
    activityTitle: 'Gladhen: Unggah-Ungguh Basa Jawa',
    questions: [
      { text: 'Ragam basa sing paling trep digunakake siswa nalika matur marang guru yaiku...', opts: ['Ngoko lugu', 'Krama alus', 'Ngoko kasar', 'Basa gaul'], ans: 1, exp: 'Berbicara kepada guru atau orang yang lebih tua menggunakan Krama Alus sebagai wujud kesopanan.' },
      { text: 'Ukara sing bener nalika ngomongake awake dhewe lagi mangan nganggo basa krama yaiku...', opts: ['Kula sampun dhahar', 'Kula sampun nedha', 'Sampeyan sampun nedha', 'Bapak sampun nedha'], ans: 1, exp: 'Untuk diri sendiri ("kula") digunakan "nedha", bukan krama inggil "dhahar".' },
      { text: 'Tembung "turu" yen diowahi dadi krama alus kanggo wong tuwa yaiku...', opts: ['Tilem', 'Sare', 'Mlampah', 'Lenggah'], ans: 1, exp: 'Krama inggil untuk tidur (digunakan bagi orang tua/yang dihormati) adalah "sare".' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu menyebutkan ciri-ciri utama makhluk hidup.',
      'Siswa mampu membedakan makhluk hidup dan benda tak hidup berdasarkan hasil pengamatan.',
    ],
    materialTitle: 'Ciri-Ciri Makhluk Hidup dan Cara Mengidentifikasinya',
    blocks: [
      { type: 'heading', text: 'Apa yang Membedakan Makhluk Hidup dan Benda Tak Hidup?' },
      { type: 'paragraph', text: 'Mobil bisa bergerak dan mengeluarkan asap, tetapi mobil bukanlah makhluk hidup. Suatu objek disebut makhluk hidup apabila menunjukkan keseluruhan ciri kehidupan.' },
      { type: 'list', title: '8 Ciri Utama Makhluk Hidup', items: ['Bernapas (respirasi)', 'Memerlukan nutrisi/makanan', 'Bergerak (aktif pada hewan, pasif pada tumbuhan)', 'Tumbuh dan berkembang', 'Berkembang biak (reproduksi)', 'Peka terhadap rangsang (iritabilitas)', 'Mengeluarkan zat sisa (ekskresi)', 'Beradaptasi terhadap lingkungan'] },
      { type: 'example', title: 'Contoh Iritabilitas pada Tumbuhan', text: 'Daun putri malu (Mimosa pudica) langsung mengatup ketika disentuh. Ini membuktikan tumbuhan peka terhadap rangsang.' },
      { type: 'tip', text: 'Bedakan "tumbuh" (bertambah tinggi/besar, bisa diukur, tidak kembali ke ukuran semula) dengan "berkembang" (menuju kedewasaan, misalnya tumbuhan mulai berbunga).' },
    ],
    activityTitle: 'Latihan: Ciri-Ciri Makhluk Hidup',
    questions: [
      { text: 'Menutupnya daun putri malu saat disentuh menunjukkan ciri makhluk hidup yaitu...', opts: ['Berkembang biak', 'Peka terhadap rangsang (iritabilitas)', 'Ekskresi', 'Bernapas'], ans: 1, exp: 'Respons terhadap rangsangan dari luar disebut iritabilitas.' },
      { text: 'Pengeluaran keringat dan karbon dioksida dari tubuh merupakan contoh ciri...', opts: ['Adaptasi', 'Nutrisi', 'Ekskresi', 'Reproduksi'], ans: 2, exp: 'Ekskresi adalah proses pengeluaran zat sisa metabolisme dari tubuh.' },
      { text: 'Perbedaan antara pertumbuhan dan perkembangan adalah...', opts: ['Pertumbuhan bersifat kuantitatif (dapat diukur), perkembangan menuju kedewasaan', 'Pertumbuhan hanya terjadi pada hewan', 'Perkembangan selalu mengurangi berat badan', 'Keduanya memiliki arti yang persis sama'], ans: 0, exp: 'Pertumbuhan berkaitan dengan pertambahan ukuran/volume yang dapat diukur, sedangkan perkembangan adalah proses menuju kedewasaan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-01',
    subSeq: 1,
    objectives: [
      'Siswa mampu membedakan pengertian letak geografis dan letak astronomis Indonesia.',
      'Siswa mampu menjelaskan pengaruh letak Indonesia terhadap iklim dan pembagian zona waktu.',
    ],
    materialTitle: 'Letak Geografis dan Letak Astronomis Indonesia',
    blocks: [
      { type: 'heading', text: 'Memahami Posisi Indonesia di Peta Dunia' },
      { type: 'paragraph', text: 'Posisi suatu wilayah di permukaan bumi dapat dilihat dari letak geografis (kenyataan di permukaan bumi) dan letak astronomis (berdasarkan garis lintang dan garis bujur).' },
      { type: 'list', title: 'Letak Indonesia', items: ['Letak Geografis: Di antara dua benua (Benua Asia dan Benua Australia) serta dua samudra (Samudra Hindia dan Samudra Pasifik).', 'Letak Astronomis: 6° LU – 11° LS dan 95° BT – 141° BT.', 'Dampak Letak Geografis: Posisi silang strategis jalur perdagangan dunia dan keragaman budaya.', 'Dampak Letak Astronomis: Beriklim tropis (2 musim: hujan & kemarau) serta terbagi menjadi 3 zona waktu (WIB, WITA, WIT).'] },
      { type: 'example', title: 'Konteks Gresik Daratan', text: 'Kabupaten Gresik di Jawa Timur termasuk zona Waktu Indonesia Barat (WIB) dan berada dekat Selat Madura yang sejak dulu menjadi jalur pelayaran dan perdagangan.' },
      { type: 'tip', text: 'Ingat mudah: Garis LINTANG menentukan IKLIM (tropis), sedangkan Garis BUJUR menentukan ZONA WAKTU (WIB, WITA, WIT).' },
    ],
    activityTitle: 'Latihan: Letak Geografis & Astronomis Indonesia',
    questions: [
      { text: 'Secara astronomis, wilayah Indonesia terletak pada...', opts: ['6° LU – 11° LS dan 95° BT – 141° BT', '6° LS – 11° LU dan 95° BB – 141° BB', '11° LU – 6° LS dan 90° BT – 140° BT', '0° – 23,5° LU dan 95° BT – 141° BT'], ans: 0, exp: 'Letak astronomis Indonesia adalah 6° LU – 11° LS dan 95° BT – 141° BT.' },
      { text: 'Pembagian tiga zona waktu di Indonesia (WIB, WITA, WIT) merupakan dampak dari...', opts: ['Letak geografis di antara dua benua', 'Rentang garis bujur (95° BT – 141° BT)', 'Banyaknya gunung api', 'Luas hutan hujan tropis'], ans: 1, exp: 'Setiap selisih 15° garis bujur setara dengan perbedaan waktu 1 jam, menghasilkan WIB, WITA, dan WIT.' },
      { text: 'Secara geografis, Indonesia diapit oleh dua samudra, yaitu...', opts: ['Atlantik dan Arktik', 'Hindia dan Pasifik', 'Pasifik dan Atlantik', 'Hindia dan Atlantik'], ans: 1, exp: 'Indonesia diapit oleh Samudra Hindia dan Samudra Pasifik.' },
    ],
  },
];

async function main() {
  const client = new pg.Client({ connectionString, ssl: { rejectUnauthorized: false } });
  await client.connect();

  const teacherRes = await client.query(`SELECT id FROM profiles WHERE role = 'teacher' ORDER BY created_at ASC LIMIT 1`);
  const teacherId = teacherRes.rows[0]?.id || null;

  let matAdded = 0;
  let actAdded = 0;
  let qAdded = 0;

  await client.query('BEGIN');
  try {
    for (const item of STARTER_LESSONS) {
      const stRes = await client.query(
        `SELECT st.id AS subtopic_id, t.id AS topic_id, t.subject_grade_mapping_id AS sgm_id
         FROM subtopics st
         JOIN topics t ON t.id = st.topic_id
         WHERE t.code = $1 AND st.sequence_number = $2
         LIMIT 1`,
        [item.topicCode, item.subSeq]
      );
      if (!stRes.rows[0]) {
        console.warn(`SKIP: ${item.topicCode} sub #${item.subSeq} tidak ditemukan`);
        continue;
      }
      const { subtopic_id, topic_id, sgm_id } = stRes.rows[0];

      // Objectives
      for (let i = 0; i < item.objectives.length; i++) {
        await client.query(
          `INSERT INTO learning_objectives (subtopic_id, objective_code, description, sequence_number)
           VALUES ($1, $2, $3, $4)
           ON CONFLICT (subtopic_id, sequence_number) DO NOTHING`,
          [subtopic_id, `${item.topicCode}-S${item.subSeq}-TP0${i + 1}`, item.objectives[i], i + 1]
        );
      }

      // Material (skip if already exists for this subtopic)
      const existingMat = await client.query(`SELECT id FROM materials WHERE subtopic_id = $1 LIMIT 1`, [subtopic_id]);
      if (!existingMat.rows[0]) {
        await client.query(
          `INSERT INTO materials (subtopic_id, title, content, sequence_number, status, created_by)
           VALUES ($1, $2, $3::jsonb, 1, 'published', $4)`,
          [subtopic_id, item.materialTitle, JSON.stringify(item.blocks), teacherId]
        );
        matAdded++;
      }

      // Activity + Questions (skip if already exists for this subtopic)
      const existingAct = await client.query(`SELECT id FROM activities WHERE subtopic_id = $1 LIMIT 1`, [subtopic_id]);
      if (!existingAct.rows[0]) {
        const actIns = await client.query(
          `INSERT INTO activities (
             subject_grade_mapping_id, topic_id, subtopic_id,
             title, description, activity_type, instructions,
             time_limit_minutes, passing_score, max_attempts, status, created_by
           )
           VALUES ($1, $2, $3, $4, $5, 'practice', 'Pilih satu jawaban yang paling tepat, lalu pelajari pembahasannya.', 15, 75, 5, 'published', $6)
           RETURNING id`,
          [sgm_id, topic_id, subtopic_id, item.activityTitle, `Latihan pilihan ganda untuk ${item.materialTitle}`, teacherId]
        );
        const activityId = actIns.rows[0].id;
        actAdded++;

        const labels = ['A', 'B', 'C', 'D'];
        const weight = Math.round((100 / item.questions.length) * 100) / 100;

        for (let qi = 0; qi < item.questions.length; qi++) {
          const q = item.questions[qi];
          const qCode = `Q-${item.topicCode}-S${item.subSeq}-0${qi + 1}`;
          const qIns = await client.query(
            `INSERT INTO questions (question_code, question_type, question_text, explanation, difficulty, default_score, created_by)
             VALUES ($1, 'multiple_choice', $2, $3, 'basic', $4, $5)
             ON CONFLICT (question_code) DO UPDATE SET question_text = EXCLUDED.question_text
             RETURNING id`,
            [qCode, q.text, q.exp, weight, teacherId]
          );
          const qId = qIns.rows[0].id;
          qAdded++;

          for (let oi = 0; oi < q.opts.length; oi++) {
            await client.query(
              `INSERT INTO question_options (question_id, option_label, option_text, is_correct, sequence_number)
               VALUES ($1, $2, $3, $4, $5)
               ON CONFLICT (question_id, sequence_number) DO NOTHING`,
              [qId, labels[oi], q.opts[oi], oi === q.ans, oi + 1]
            );
          }

          await client.query(
            `INSERT INTO activity_questions (activity_id, question_id, sequence_number, score_weight)
             VALUES ($1, $2, $3, $4)
             ON CONFLICT DO NOTHING`,
            [activityId, qId, qi + 1, weight]
          );
        }
      }
    }

    await client.query('COMMIT');
    const totals = await client.query(`
      SELECT
        (SELECT COUNT(*)::int FROM materials WHERE status != 'archived') AS total_materi,
        (SELECT COUNT(*)::int FROM activities WHERE status != 'archived') AS total_latihan,
        (SELECT COUNT(*)::int FROM questions) AS total_soal
    `);
    console.log(`SELESAI! Ditambahkan: ${matAdded} materi, ${actAdded} paket latihan, ${qAdded} soal.`);
    console.log('Total live di Neon sekarang:', totals.rows[0]);
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error('GAGAL:', err.message);
  process.exit(1);
});

