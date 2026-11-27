import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: MEMBACA PEMAHAMAN
  {
    topicCode: 'BIND-SD3-01', subSeq: 1,
    objectives: ['Siswa mampu membaca teks pendek dengan lancar, lafal jelas, dan intonasi sesuai tanda baca.'],
    materialTitle: 'Membaca Teks dengan Lancar',
    blocks: [
      { type: 'visual_cards', title: '3 Tanda Baca Pemandu Suara Saat Membaca', cards: [
        { emoji: '🛑', label: 'Tanda Titik (.)', sub: 'Berhenti penuh dan turunkan nada suara' },
        { emoji: '⏸️', label: 'Tanda Koma (,)', sub: 'Berhenti sebentar untuk mengambil napas' },
        { emoji: '❓', label: 'Tanda Tanya (?) & Seru (!)', sub: 'Nada naik saat bertanya, bersemangat saat seru!' },
      ]},
      { type: 'tip', text: 'Bacalah dengan suara nyaring dan tidak terlalu cepat agar pendengar mudah memahami isi bacaan.' },
    ],
    activityTitle: 'Latihan: Membaca Lancar',
    questions: [
      { text: 'Saat membaca dan bertemu tanda koma (,), kita harus...', opts: ['Berhenti lama lalu menutup buku', 'Berhenti sebentar lalu melanjutkan membaca', 'Berteriak keras', 'Melompati kalimat berikutnya'], ans: 1, exp: 'Tanda koma menandakan jeda singkat.' },
      { text: 'Tanda baca yang tepat untuk mengakhiri kalimat "Di mana rumah Raka..." adalah...', opts: ['.', ',', '?', '!'], ans: 2, exp: 'Kalimat tanya selalu diakhiri tanda tanya (?).' },
      { text: 'Membaca dengan lafal yang jelas artinya...', opts: ['Huruf dan kata diucapkan tepat sehingga tidak tertukar', 'Membaca secepat mungkin', 'Membaca sambil berbisik', 'Menghafal tanpa melihat teks'], ans: 0, exp: 'Lafal adalah ketepatan pengucapan bunyi bahasa.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-01', subSeq: 2,
    objectives: ['Siswa mampu menemukan informasi penting dalam teks bacaan menggunakan kata tanya ADIKSIMBA.'],
    materialTitle: 'Menemukan Informasi Penting',
    blocks: [
      { type: 'story_panel', title: 'Jurus Detektif Bacaan: ADIKSIMBA!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Supaya cepat menemukan informasi penting di bacaan, pakai 6 kata tanya: Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana!' },
        { speaker: 'Alya', avatar: '👧', text: 'Singkatannya ADIKSIMBA ya Bu! Gampang banget diingat!' },
      ]},
      { type: 'table', title: 'Kunci ADIKSIMBA', headers: ['Kata Tanya', 'Menanyakan'], rows: [
        ['Apa', 'Peristiwa, benda, atau hal yang dibahas'],
        ['Di mana', 'Tempat terjadinya peristiwa'],
        ['Kapan', 'Waktu kejadian'],
        ['Siapa', 'Orang atau tokoh yang terlibat'],
        ['Mengapa', 'Sebab atau alasan'],
        ['Bagaimana', 'Cara atau proses terjadinya peristiwa'],
      ]},
    ],
    activityTitle: 'Latihan: Informasi Penting Bacaan',
    questions: [
      { text: '"Pagi itu, Bima membantu ayah memberi makan bandeng di tambak." Kata tanya untuk jawaban "di tambak" adalah...', opts: ['Kapan', 'Siapa', 'Di mana', 'Mengapa'], ans: 2, exp: '"Di tambak" menunjukkan tempat → kata tanya Di mana.' },
      { text: 'Pada kalimat yang sama, informasi yang menjawab pertanyaan "Kapan?" adalah...', opts: ['Bima', 'Pagi itu', 'Tambak', 'Bandeng'], ans: 1, exp: '"Pagi itu" menunjukkan waktu.' },
      { text: 'Kata tanya untuk menanyakan ALASAN suatu kejadian adalah...', opts: ['Siapa', 'Di mana', 'Mengapa', 'Berapa'], ans: 2, exp: '"Mengapa" menanyakan sebab atau alasan.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-01', subSeq: 3,
    objectives: ['Siswa mampu menebak arti kata baru dari konteks kalimat dan mengeceknya di KBBI.'],
    materialTitle: 'Memahami Arti Kata Baru',
    blocks: [
      { type: 'flashcards', title: 'Tebak Arti Kata dari Kalimat! (Klik untuk Cek)', cards: [
        { emoji: '📖', front: 'Raka anak yang GEMAR membaca buku.', back: 'Gemar = sangat suka / hobi' },
        { emoji: '🌱', front: 'Tanaman di pot itu tumbuh SUBUR.', back: 'Subur = tumbuh baik dan sehat' },
        { emoji: '🤝', front: 'Warga desa sangat KOMPAK saat kerja bakti.', back: 'Kompak = bersatu padu / rukun bekerja sama' },
        { emoji: '🧭', front: 'Pustakawan membantu mencarikan buku.', back: 'Pustakawan = petugas pengelola perpustakaan' },
      ]},
      { type: 'tip', text: 'Jika bertemu kata sulit: baca kalimat sebelum dan sesudahnya, lalu pastikan artinya di KBBI (Kamus Besar Bahasa Indonesia).' },
    ],
    activityTitle: 'Latihan: Memahami Arti Kata',
    questions: [
      { text: '"Dina adalah siswa yang RINGAN TANGAN membantu temannya." Arti ungkapan "ringan tangan" adalah...', opts: ['Suka menolong', 'Tangannya kecil', 'Malas bekerja', 'Suka memukul'], ans: 0, exp: 'Ringan tangan berarti rajin dan suka menolong.' },
      { text: 'Buku atau situs resmi untuk mencari arti kata bahasa Indonesia yang baku adalah...', opts: ['Buku gambar', 'KBBI (Kamus Besar Bahasa Indonesia)', 'Katalog mainan', 'Komik'], ans: 1, exp: 'KBBI adalah rujukan resmi arti kata bahasa Indonesia.' },
      { text: '"Halaman sekolah sangat ASRI karena banyak pohon rindang." Arti kata "asri" adalah...', opts: ['Kotor dan bau', 'Indah, sejuk, dan sedap dipandang', 'Gersang dan panas', 'Sempit'], ans: 1, exp: 'Asri berarti indah dan sedap dipandang mata.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-01', subSeq: 4,
    objectives: ['Siswa mampu menjawab pertanyaan secara tepat dan lengkap berdasarkan isi bacaan.'],
    materialTitle: 'Menjawab Pertanyaan Berdasarkan Bacaan',
    blocks: [
      { type: 'story_panel', title: 'Bacaan Singkat: Kebun Sekolah', lines: [
        { speaker: 'Teks', avatar: '📄', text: 'Setiap hari Jumat pagi, siswa kelas 3 merawat kebun sekolah. Salsa menyiram bunga melati, sedangkan Bima mencabut rumput liar. Kebun sekolah pun tampak rapi dan wangi.' },
      ]},
      { type: 'worked_example', level: 'Cara Menjawab Lengkap', question: 'Apa tugas Bima di kebun sekolah?', steps: ['Cari nama "Bima" di dalam bacaan.', 'Tertulis: "Bima mencabut rumput liar."', 'Tulis jawaban utuh sesuai isi teks, bukan mengarang sendiri.'], answer: 'Tugas Bima di kebun sekolah adalah mencabut rumput liar.' },
    ],
    activityTitle: 'Latihan: Menjawab Pertanyaan Bacaan',
    questions: [
      { text: 'Berdasarkan bacaan: "Setiap Jumat pagi, siswa kelas 3 merawat kebun sekolah. Salsa menyiram melati." Kapan kegiatan itu dilakukan?', opts: ['Senin sore', 'Jumat pagi', 'Minggu siang', 'Sabtu malam'], ans: 1, exp: 'Tertulis jelas: setiap hari Jumat pagi.' },
      { text: 'Berdasarkan bacaan di atas, siapa yang menyiram bunga melati?', opts: ['Bima', 'Salsa', 'Raka', 'Pak Guru'], ans: 1, exp: 'Tertulis: Salsa menyiram bunga melati.' },
      { text: 'Aturan utama saat menjawab pertanyaan pemahaman bacaan adalah...', opts: ['Jawaban harus sesuai fakta di dalam bacaan', 'Menjawab bebas sesuai khayalan', 'Tidak usah membaca teks', 'Menyalin judul saja'], ans: 0, exp: 'Jawaban harus merujuk langsung pada informasi dalam teks.' },
    ],
  },

  // BAB 2: IDE POKOK DAN IDE PENDUKUNG
  {
    topicCode: 'BIND-SD3-02', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian ide pokok (gagasan utama) dalam sebuah paragraf.'],
    materialTitle: 'Mengenal Pengertian Ide Pokok',
    blocks: [
      { type: 'story_panel', title: 'Ide Pokok = Inti Pembicaraan!', lines: [
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Setiap paragraf punya satu pesan inti yang sedang dibahas. Pesan inti itulah yang disebut IDE POKOK!' },
        { speaker: 'Raka', avatar: '👦', text: 'Jadi kalau ada 4 kalimat tentang manfaat sarapan, ide pokoknya adalah "Manfaat sarapan pagi" ya Pak!' },
      ]},
      { type: 'tip', text: 'Setiap satu paragraf yang baik hanya memiliki SATU ide pokok.' },
    ],
    activityTitle: 'Latihan: Pengertian Ide Pokok',
    questions: [
      { text: 'Inti atau gagasan utama yang dibahas dalam sebuah paragraf disebut...', opts: ['Ide pokok', 'Tanda baca', 'Judul buku', 'Kata sambung'], ans: 0, exp: 'Ide pokok (gagasan utama) adalah inti bahasan paragraf.' },
      { text: 'Dalam satu paragraf yang baik, jumlah ide pokoknya ada...', opts: ['Satu', 'Lima', 'Sepuluh', 'Tidak ada'], ans: 0, exp: 'Satu paragraf berfokus pada satu ide pokok saja.' },
      { text: 'Nama lain dari ide pokok adalah...', opts: ['Gagasan utama', 'Kalimat tanya', 'Pantun', 'Sapaan'], ans: 0, exp: 'Ide pokok sering juga disebut gagasan utama atau pikiran utama.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-02', subSeq: 2,
    objectives: ['Siswa mampu mengenali kalimat utama di awal atau akhir paragraf.'],
    materialTitle: 'Mengenal Kalimat Utama',
    blocks: [
      { type: 'visual_cards', title: 'Di Mana Kalimat Utama Berada?', cards: [
        { emoji: '1️⃣', label: 'Di Awal Paragraf (Paling Sering)', sub: 'Kalimat pertama langsung menyatakan inti, kalimat berikutnya menjelaskan.' },
        { emoji: '🔚', label: 'Di Akhir Paragraf', sub: 'Berisi kesimpulan, sering diawali kata "Jadi, ..." atau "Oleh karena itu, ..."' },
      ]},
      { type: 'tip', text: 'Ide pokok selalu berada di dalam KALIMAT UTAMA!' },
    ],
    activityTitle: 'Latihan: Kalimat Utama',
    questions: [
      { text: 'Kalimat yang memuat ide pokok dalam sebuah paragraf disebut...', opts: ['Kalimat penjelas', 'Kalimat utama', 'Kalimat perintah', 'Kalimat seruan'], ans: 1, exp: 'Kalimat utama adalah wadah tempat ide pokok berada.' },
      { text: 'Di kelas 3 SD, kalimat utama paling sering terletak di...', opts: ['Tengah-tengah kata', 'Awal atau akhir paragraf', 'Luar buku', 'Catatan kaki'], ans: 1, exp: 'Kalimat utama umumnya berada di awal (deduktif) atau akhir (induktif) paragraf.' },
      { text: 'Ciri kalimat utama di akhir paragraf biasanya ditandai kata simpulan seperti...', opts: ['Tetapi', 'Jadi / Oleh karena itu', 'Atau', 'Sedangkan'], ans: 1, exp: 'Kata simpulan menandai kalimat utama yang merangkum kalimat sebelumnya.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-02', subSeq: 3,
    objectives: ['Siswa mampu membedakan kalimat penjelas (ide pendukung) dari kalimat utama.'],
    materialTitle: 'Ide Pendukung (Kalimat Penjelas)',
    blocks: [
      { type: 'worked_example', level: 'Bedah Paragraf', question: '"Pudak adalah jajanan khas Gresik yang lezat. Bentuknya unik karena dibungkus pelepah daun pinang. Rasanya manis dengan aroma pandan atau gula merah." Mana ide pokok dan mana ide pendukungnya?', steps: ['Kalimat 1 (Utama): Pudak adalah jajanan khas Gresik yang lezat.', 'Kalimat 2 & 3 (Pendukung): Menjelaskan bentuk bungkus dan rasa pudak.'], answer: 'Ide pokok: Pudak jajanan khas Gresik. Ide pendukung: bungkus pelepah pinang dan rasa manisnya.' },
    ],
    activityTitle: 'Latihan: Ide Pendukung',
    questions: [
      { text: 'Fungsi ide pendukung dalam sebuah paragraf adalah...', opts: ['Mengganti topik pembicaraan', 'Menjelaskan dan melengkapi ide pokok', 'Menghapus kalimat utama', 'Mengakhiri cerita mendadak'], ans: 1, exp: 'Ide pendukung memberikan rincian, contoh, atau penjelasan bagi ide pokok.' },
      { text: 'Jika ide pokoknya "Kucing adalah hewan peliharaan yang lucu", kalimat pendukung yang COCOK adalah...', opts: ['Bulunya halus dan ia suka bermain bola benang.', 'Gajah memiliki belalai panjang.', 'Harga beras naik di pasar.', 'Pesawat terbang sangat tinggi.'], ans: 0, exp: 'Kalimat tentang bulu dan kebiasaan kucing menjelaskan ide pokoknya.' },
      { text: 'Dalam satu paragraf, jumlah kalimat pendukung biasanya...', opts: ['Lebih dari satu', 'Selalu nol', 'Lebih sedikit dari judul', 'Tidak berhubungan'], ans: 0, exp: 'Satu kalimat utama biasanya dijelaskan oleh beberapa kalimat pendukung.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-02', subSeq: 4,
    objectives: ['Siswa mampu menentukan ide pokok dari berbagai contoh paragraf pendek.'],
    materialTitle: 'Menentukan Ide Pokok Paragraf',
    blocks: [
      { type: 'list', title: '3 Langkah Menentukan Ide Pokok', items: ['1. Baca seluruh paragraf dari awal sampai akhir.', '2. Cari kalimat yang paling umum (kalimat utama), biasanya di awal atau akhir.', '3. Ambil intinya dengan kalimat singkat dan jelas.'] },
      { type: 'worked_example', level: 'Latihan', question: '"Olahraga pagi sangat bermanfaat bagi tubuh. Jantung menjadi lebih sehat dan kuat. Pikiran pun terasa lebih segar untuk belajar." Apa ide pokoknya?', steps: ['Kalimat 1 menyatakan inti umum: manfaat olahraga pagi.', 'Kalimat 2 dan 3 merinci manfaatnya (jantung sehat, pikiran segar).'], answer: 'Manfaat olahraga pagi bagi tubuh.' },
    ],
    activityTitle: 'Latihan: Menentukan Ide Pokok',
    questions: [
      { text: '"Air sangat penting bagi kehidupan. Manusia butuh air untuk minum dan mandi. Tumbuhan juga perlu air agar tidak layu." Ide pokok paragraf tersebut adalah...', opts: ['Tumbuhan bisa layu', 'Pentingnya air bagi kehidupan', 'Cara mandi yang bersih', 'Jenis-jenis tumbuhan'], ans: 1, exp: 'Kalimat pertama menyatakan inti: air sangat penting bagi kehidupan.' },
      { text: '"Alya rajin menabung sisa uang jajannya. Setiap pekan tabungannya makin bertambah. Ia ingin membeli tas sekolah baru sendiri." Ide pokoknya adalah...', opts: ['Harga tas sekolah mahal', 'Kebiasaan Alya rajin menabung', 'Alya tidak pernah jajan', 'Warna tas Alya'], ans: 1, exp: 'Seluruh paragraf membahas kebiasaan Alya rajin menabung.' },
      { text: '"Sampah plastik menyumbat selokan. Sampah juga membuat lingkungan kotor dan bau. Oleh karena itu, buanglah sampah pada tempatnya." Kalimat utamanya terletak di...', opts: ['Awal paragraf', 'Tengah paragraf', 'Akhir paragraf', 'Judul'], ans: 2, exp: 'Kalimat terakhir berisi simpulan yang diawali "Oleh karena itu".' },
    ],
  },
  {
    topicCode: 'BIND-SD3-02', subSeq: 5,
    objectives: ['Siswa mampu membuat ringkasan sederhana dengan menggabungkan ide pokok tiap paragraf.'],
    materialTitle: 'Membuat Ringkasan Sederhana',
    blocks: [
      { type: 'visual_cards', title: 'Resep Membuat Ringkasan', cards: [
        { emoji: '👀', label: '1. Baca Utuh', sub: 'Pahami isi bacaan dari paragraf pertama hingga terakhir' },
        { emoji: '⭐', label: '2. Ambil Ide Pokok', sub: 'Catat ide pokok dari setiap paragraf' },
        { emoji: '✍️', label: '3. Rangkai Singkat', sub: 'Gabungkan menjadi kalimat pendek tanpa mengubah isi asli' },
      ]},
    ],
    activityTitle: 'Latihan: Membuat Ringkasan',
    questions: [
      { text: 'Ringkasan adalah penyajian bacaan panjang dalam bentuk yang lebih...', opts: ['Panjang dan bertele-tele', 'Singkat namun tetap memuat inti bacaan', 'Berbeda isi sama sekali', 'Kosong'], ans: 1, exp: 'Ringkasan memadatkan teks dengan mempertahankan gagasan utamanya.' },
      { text: 'Hal yang PALING penting dimasukkan ke dalam ringkasan adalah...', opts: ['Ide pokok setiap paragraf', 'Semua contoh yang berulang', 'Daftar halaman buku', 'Nama penerbit'], ans: 0, exp: 'Ringkasan disusun dari rangkaian ide pokok.' },
      { text: 'Saat meringkas bacaan, kita TIDAK boleh...', opts: ['Menggunakan kalimat sendiri yang efektif', 'Mengubah makna asli bacaan', 'Mengikuti urutan isi teks', 'Menulis dengan rapi'], ans: 1, exp: 'Ringkasan tidak boleh menyimpang dari isi teks asli.' },
    ],
  },

  // BAB 3: TEKS DESKRIPSI
  {
    topicCode: 'BIND-SD3-03', subSeq: 1,
    objectives: ['Siswa mampu mengenali pengertian dan ciri-ciri teks deskripsi.'],
    materialTitle: 'Ciri-Ciri Teks Deskripsi',
    blocks: [
      { type: 'story_panel', title: 'Melukis dengan Kata-Kata!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Teks deskripsi itu seperti MELUKIS benda, hewan, atau tempat memakai kata-kata sehingga pembaca seolah bisa melihat dan merasakannya langsung!' },
        { speaker: 'Nadia', avatar: '👧', text: 'Misalnya: Kucingku bernama Mochi, bulunya putih bersih dan sangat halus seperti kapas!' },
      ]},
      { type: 'list', title: 'Ciri Teks Deskripsi', items: ['Menggambarkan satu objek secara rinci (warna, bentuk, ukuran, rasa, bau, atau suasana).', 'Melibatkan pancaindra (dilihat, didengar, diraba, dicium, dikecap).', 'Banyak memakai kata sifat.'] },
    ],
    activityTitle: 'Latihan: Ciri Teks Deskripsi',
    questions: [
      { text: 'Tujuan utama teks deskripsi adalah...', opts: ['Memerintah orang melakukan sesuatu', 'Menggambarkan suatu objek secara rinci seolah pembaca melihatnya sendiri', 'Menyajikan angka matematika', 'Berdebat'], ans: 1, exp: 'Deskripsi melukiskan ciri-ciri objek secara konkret.' },
      { text: 'Kalimat manakah yang merupakan kalimat deskripsi?', opts: ['Potonglah kertas menjadi dua bagian!', 'Mangga itu berwarna kuning cerah, kulitnya mulus, dan rasanya manis segar.', 'Kapan kamu pulang sekolah?', 'Jangan membuang sampah di sini!'], ans: 1, exp: 'Menggambarkan warna, tekstur kulit, dan rasa mangga secara rinci.' },
      { text: 'Teks deskripsi banyak melibatkan...', opts: ['Pancaindra (penglihatan, perabaan, pengecapan, penciuman, pendengaran)', 'Rumus perkalian', 'Daftar harga', 'Pertanyaan ujian'], ans: 0, exp: 'Ciri objek ditangkap dan digambarkan melalui pancaindra.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-03', subSeq: 2,
    objectives: ['Siswa mampu mengamati dan mendeskripsikan benda, hewan, atau tempat secara terstruktur.'],
    materialTitle: 'Menggambarkan Objek dengan Rinci',
    blocks: [
      { type: 'visual_cards', title: '4 Hal yang Bisa Kamu Ceritakan dari Satu Objek', cards: [
        { emoji: '🎨', label: 'Bentuk & Warna', sub: 'Bulat, lonjong, hijau cerah, belang oranye' },
        { emoji: '📏', label: 'Ukuran', sub: 'Kecil mungil, tinggi besar, panjang' },
        { emoji: '🤚', label: 'Tekstur / Permukaan', sub: 'Halus, lembut, kasar, licin' },
        { emoji: '🌟', label: 'Ciri Khas / Kegunaan', sub: 'Rasanya manis legit, bunyinya merdu, enak dimakan hangat' },
      ]},
    ],
    activityTitle: 'Latihan: Menggambarkan Objek',
    questions: [
      { text: 'Jika ingin mendeskripsikan "sepeda kesayangan", hal yang tepat dijelaskan adalah...', opts: ['Warna rangka, ukuran roda, suara bel, dan kenyamanannya', 'Resep memasak nasi goreng', 'Nama-nama planet', 'Cara menanam padi'], ans: 0, exp: 'Deskripsi fokus pada ciri fisik dan keistimewaan objek yang diamati.' },
      { text: '"Otak-otak bandeng itu beraroma harum rempah dan teksturnya lembut gurih." Kalimat itu melibatkan indra...', opts: ['Penciuman dan pengecapan/perabaan', 'Penglihatan saja', 'Pendengaran saja', 'Keseimbangan'], ans: 0, exp: 'Harum (penciuman), lembut (perabaan), gurih (pengecapan).' },
      { text: 'Sebelum menulis deskripsi sebuah benda, langkah pertama yang paling baik adalah...', opts: ['Mengamati benda itu dengan saksama', 'Menutup mata', 'Langsung menulis tanpa melihat', 'Menyalin cerita orang'], ans: 0, exp: 'Pengamatan cermat menghasilkan rincian yang akurat.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-03', subSeq: 3,
    objectives: ['Siswa mampu memilih dan menggunakan kata sifat yang tepat dalam kalimat deskripsi.'],
    materialTitle: 'Penggunaan Kata Sifat',
    blocks: [
      { type: 'flashcards', title: 'Kenali Kata Sifat & Lawan Katanya!', cards: [
        { emoji: '✨', front: 'Rapi ↔ ...', back: 'Berantakan' },
        { emoji: '🌳', front: 'Rindang ↔ ...', back: 'Gersang' },
        { emoji: '🍬', front: 'Manis ↔ ...', back: 'Pahit / Hambar' },
        { emoji: '😊', front: 'Ramah ↔ ...', back: 'Galak / Judes' },
      ]},
      { type: 'tip', text: 'Ciri kata sifat: bisa diberi kata "sangat" atau "paling" di depannya! (misal: sangat halus, paling luas).' },
    ],
    activityTitle: 'Latihan: Kata Sifat',
    questions: [
      { text: 'Manakah yang termasuk KATA SIFAT?', opts: ['Meja', 'Berlari', 'Indah', 'Sekolah'], ans: 2, exp: '"Indah" dapat diberi kata "sangat indah" → kata sifat.' },
      { text: '"Taman di alun-alun terasa sangat ... karena banyak pohon besar." Kata sifat yang tepat adalah...', opts: ['Sejuk', 'Menulis', 'Sepeda', 'Berjalan'], ans: 0, exp: 'Pohon rindang membuat suasana sejuk.' },
      { text: 'Lawan kata sifat "halus" adalah...', opts: ['Lembut', 'Kasar', 'Licin', 'Wangi'], ans: 1, exp: 'Antonim (lawan kata) dari halus adalah kasar.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-03', subSeq: 4,
    objectives: ['Siswa mampu menyusun satu paragraf deskripsi yang padu dan berurutan.'],
    materialTitle: 'Menyusun Paragraf Deskripsi',
    blocks: [
      { type: 'worked_example', level: 'Contoh Paragraf Deskripsi', question: 'Susun paragraf deskripsi tentang "Tas Sekolahku"!', steps: ['Kalimat 1 (Identifikasi): Aku memiliki tas ransel kesayangan berwarna biru tua.', 'Kalimat 2 (Rincian fisik): Di bagian depannya ada gambar roket kecil dan dua kantong botol minum.', 'Kalimat 3 (Kesan): Bahannya kuat dan talinya empuk sehingga nyaman kupakai setiap hari ke sekolah.'], answer: 'Paragraf utuh 3 kalimat yang fokus pada satu objek (tas sekolah).' },
    ],
    activityTitle: 'Latihan: Menyusun Paragraf Deskripsi',
    questions: [
      { text: 'Kalimat pembuka yang paling tepat untuk paragraf deskripsi tentang "Kelinciku" adalah...', opts: ['Aku memelihara seekor kelinci putih bernama Salju.', 'Kemarin hujan turun deras sekali.', 'Ayo kita makan siang bersama!', 'Berapa harga wortel di pasar?'], ans: 0, exp: 'Kalimat pembuka memperkenalkan objek yang akan dideskripsikan.' },
      { text: 'Agar paragraf deskripsi padu, semua kalimat di dalamnya harus membahas...', opts: ['Satu objek yang sama', 'Lima objek berbeda sekaligus', 'Soal matematika', 'Jadwal pelajaran'], ans: 0, exp: 'Kepaduan paragraf terjaga jika semua kalimat menjelaskan objek yang sama.' },
      { text: 'Penulisan awal kalimat dan nama orang pada paragraf harus diawali huruf...', opts: ['Kecil semua', 'Kapital (besar)', 'Miring semua', 'Angka'], ans: 1, exp: 'Huruf kapital dipakai pada awal kalimat dan nama diri.' },
    ],
  },

  // BAB 4: TEKS NARASI DAN CERITA ANAK
  {
    topicCode: 'BIND-SD3-04', subSeq: 1,
    objectives: ['Siswa mampu menyebutkan unsur-unsur pembangun cerita (tokoh, latar, alur, tema, amanat).'],
    materialTitle: 'Mengenal Unsur-Unsur Cerita',
    blocks: [
      { type: 'visual_cards', title: '5 Unsur Penting Sebuah Cerita', cards: [
        { emoji: '🧑', label: 'Tokoh & Watak', sub: 'Pelaku cerita dan sifatnya' },
        { emoji: '🏞️', label: 'Latar', sub: 'Tempat, waktu, dan suasana kejadian' },
        { emoji: '🎢', label: 'Alur', sub: 'Urutan jalan cerita (awal → masalah → selesai)' },
        { emoji: '💡', label: 'Tema', sub: 'Topik besar cerita (persahabatan, kejujuran)' },
        { emoji: '❤️', label: 'Amanat', sub: 'Pesan baik yang bisa kita tiru' },
      ]},
    ],
    activityTitle: 'Latihan: Unsur Cerita',
    questions: [
      { text: 'Cerita yang mengisahkan rangkaian peristiwa secara berurutan disebut teks...', opts: ['Narasi', 'Tabel', 'Resep', 'Pengumuman'], ans: 0, exp: 'Teks narasi adalah karangan berbentuk cerita berurutan.' },
      { text: 'Pesan moral atau pelajaran baik yang disampaikan penulis cerita disebut...', opts: ['Latar', 'Amanat', 'Alur', 'Judul'], ans: 1, exp: 'Amanat adalah pesan kebaikan dalam cerita.' },
      { text: 'Yang BUKAN merupakan unsur cerita adalah...', opts: ['Tokoh', 'Latar', 'Amanat', 'Rumus luas'], ans: 3, exp: 'Unsur cerita meliputi tokoh, watak, latar, alur, tema, dan amanat.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-04', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi tokoh dan watak (penokohan) berdasarkan perkataan dan perbuatannya.'],
    materialTitle: 'Tokoh dan Penokohan',
    blocks: [
      { type: 'story_panel', title: 'Menebak Sifat Tokoh dari Perbuatannya', lines: [
        { speaker: 'Cerita', avatar: '📖', text: 'Melihat pensil Doni patah saat ulangan, Salsa langsung meminjamkan pensil cadangannya sambil tersenyum.' },
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Dari perbuatan itu, kita tahu tokoh Salsa berwatak BAIK HATI dan PEDULI!' },
      ]},
      { type: 'visual_cards', title: 'Jenis Watak Tokoh', cards: [
        { emoji: '😇', label: 'Protagonis (Baik)', sub: 'Jujur, penolong, sabar, pekerja keras' },
        { emoji: '😠', label: 'Antagonis (Kurang Baik)', sub: 'Sombong, curang, malas, pemarah (menjadi pelajaran agar tidak ditiru)' },
      ]},
    ],
    activityTitle: 'Latihan: Tokoh & Penokohan',
    questions: [
      { text: 'Pelaku yang mengalami peristiwa dalam cerita disebut...', opts: ['Latar', 'Tokoh', 'Alur', 'Sampul'], ans: 1, exp: 'Tokoh adalah pelaku cerita.' },
      { text: '"Meskipun kalah lomba, Raka tetap memberi selamat kepada pemenang dengan senyum." Watak Raka adalah...', opts: ['Iri hati', 'Sportif dan berjiwa besar', 'Pemarah', 'Sombong'], ans: 1, exp: 'Mengakui kemenangan teman dengan tulus menunjukkan sikap sportif.' },
      { text: 'Sifat atau karakter yang dimiliki tokoh dalam cerita disebut...', opts: ['Watak / Penokohan', 'Latar tempat', 'Judul', 'Paragraf'], ans: 0, exp: 'Penokohan menggambarkan watak/sifat tokoh.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-04', subSeq: 3,
    objectives: ['Siswa mampu menentukan latar tempat, latar waktu, dan latar suasana dalam cerita anak.'],
    materialTitle: 'Latar Tempat, Waktu, dan Suasana',
    blocks: [
      { type: 'table', title: '3 Jenis Latar dalam Cerita', headers: ['Jenis Latar', 'Pertanyaan Kunci', 'Contoh'], rows: [
        ['Latar Tempat', 'Di mana terjadi?', 'Di ruang kelas, di tepi pantai, di pasar'],
        ['Latar Waktu', 'Kapan terjadi?', 'Pagi hari, saat istirahat, malam Minggu'],
        ['Latar Suasana', 'Bagaimana rasanya?', 'Meriah, mengharukan, tegang, tenang'],
      ]},
    ],
    activityTitle: 'Latihan: Latar Cerita',
    questions: [
      { text: '"Pada Minggu pagi yang cerah, anak-anak bermain layang-layang dengan gembira di lapangan." Latar TEMPAT kalimat itu adalah...', opts: ['Minggu pagi', 'Gembira', 'Di lapangan', 'Layang-layang'], ans: 2, exp: '"Di lapangan" menunjukkan tempat kejadian.' },
      { text: 'Latar WAKTU pada kalimat di atas adalah...', opts: ['Di lapangan', 'Minggu pagi', 'Gembira', 'Anak-anak'], ans: 1, exp: '"Minggu pagi" menunjukkan waktu.' },
      { text: 'Latar SUASANA pada kalimat di atas adalah...', opts: ['Sedih', 'Menakutkan', 'Gembira dan cerah', 'Sepi'], ans: 2, exp: 'Suasana yang tergambar adalah gembira/riang.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-04', subSeq: 4,
    objectives: ['Siswa mampu mengurutkan alur cerita sederhana: awal (pengenalan), tengah (masalah), dan akhir (penyelesaian).'],
    materialTitle: 'Alur Cerita (Awal – Tengah – Akhir)',
    blocks: [
      { type: 'visual_cards', title: '3 Bagian Jalan Cerita (Alur)', cards: [
        { emoji: '🟢', label: '1. Awal (Pengenalan)', sub: 'Memperkenalkan tokoh dan latar cerita' },
        { emoji: '🟡', label: '2. Tengah (Masalah)', sub: 'Muncul kejadian seru atau masalah yang harus dipecahkan' },
        { emoji: '🏁', label: '3. Akhir (Penyelesaian)', sub: 'Masalah selesai dan tokoh mendapat pelajaran berharga' },
      ]},
    ],
    activityTitle: 'Latihan: Alur Cerita',
    questions: [
      { text: 'Urutan rangkaian peristiwa dari awal sampai akhir cerita disebut...', opts: ['Alur', 'Latar', 'Watak', 'Kamus'], ans: 0, exp: 'Alur adalah jalan cerita yang terurut.' },
      { text: 'Bagian cerita yang menceritakan munculnya kesulitan atau persoalan tokoh berada di bagian...', opts: ['Awal', 'Tengah (masalah/konflik)', 'Daftar isi', 'Sampul belakang'], ans: 1, exp: 'Masalah biasanya muncul di bagian tengah cerita.' },
      { text: 'Urutan kejadian paling logis adalah: (1) Bima terjatuh dari sepeda, (2) Bima mengayuh terlalu cepat, (3) Ayah mengobati lutut Bima. Urutan yang benar:', opts: ['1-2-3', '2-1-3', '3-2-1', '1-3-2'], ans: 1, exp: 'Sebab-akibat: mengayuh terlalu cepat (2) → terjatuh (1) → diobati ayah (3).' },
    ],
  },
  {
    topicCode: 'BIND-SD3-04', subSeq: 5,
    objectives: ['Siswa mampu menyimpulkan pesan moral (amanat) dari sebuah cerita anak.'],
    materialTitle: 'Menemukan Pesan Cerita (Amanat)',
    blocks: [
      { type: 'story_panel', title: 'Kisah Singkat: Kura-Kura yang Tekun', lines: [
        { speaker: 'Cerita', avatar: '🐢', text: 'Meski jalannya pelan, Kura-Kura terus melangkah tanpa menyerah saat lomba lari. Kelinci yang sombong malah tertidur di bawah pohon. Akhirnya Kura-Kura mencapai garis finis lebih dulu!' },
      ]},
      { type: 'tip', text: 'Tanya pada dirimu: "Pelajaran baik apa yang bisa aku terapkan setelah membaca cerita ini?" → Jangan sombong dan teruslah berusaha dengan tekun!' },
    ],
    activityTitle: 'Latihan: Pesan Cerita',
    questions: [
      { text: 'Amanat dari kisah Kelinci dan Kura-Kura adalah...', opts: ['Kita boleh tidur saat lomba', 'Jangan sombong dan tetaplah tekun berusaha', 'Kura-kura harus marah pada kelinci', 'Tidak perlu ikut lomba'], ans: 1, exp: 'Ketekunan mengalahkan kesombongan.' },
      { text: 'Jika sebuah cerita berakhir dengan tokoh yang menyesal karena berbohong, amanatnya adalah...', opts: ['Berbohong itu menyenangkan', 'Kita harus selalu berkata jujur', 'Semua orang suka bohong', 'Jangan berteman'], ans: 1, exp: 'Akibat buruk kebohongan mengajarkan pentingnya kejujuran.' },
      { text: 'Pesan cerita yang baik selalu mengajak pembaca untuk...', opts: ['Berbuat kebaikan', 'Melanggar aturan', 'Bermalas-malasan', 'Mengejek teman'], ans: 0, exp: 'Amanat berisi nilai moral positif.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-04', subSeq: 6,
    objectives: ['Siswa mampu menyusun cerita pendek berdasarkan pengalaman pribadi secara runtut.'],
    materialTitle: 'Menyusun Cerita Pengalaman Pribadi',
    blocks: [
      { type: 'list', title: 'Langkah Menulis Cerita Pengalaman', items: ['1. Pilih pengalaman paling berkesan (misal: belajar naik sepeda, berkunjung ke rumah nenek, panen buah).', '2. Tentukan judul yang menarik.', '3. Tulis secara urut: Kapan & di mana (Awal) → Apa yang terjadi (Tengah) → Bagaimana perasaanmu akhirnya (Akhir).', '4. Periksa huruf kapital dan tanda titik!'] },
    ],
    activityTitle: 'Latihan: Menulis Cerita Pengalaman',
    questions: [
      { text: 'Topik yang paling tepat untuk cerita pengalaman pribadi adalah...', opts: ['Pengalamanku pertama kali belajar bersepeda bersama ayah', 'Daftar rumus pecahan', 'Jadwal kereta api', 'Daftar belanja bulanan'], ans: 0, exp: 'Pengalaman pribadi adalah kejadian nyata yang pernah dialami sendiri.' },
      { text: 'Kata penghubung waktu yang membantu cerita terasa urut adalah...', opts: ['Pertama, lalu, kemudian, akhirnya', 'Tetapi, namun, melainkan', 'Apakah, siapakah', 'Jangan, dilarang'], ans: 0, exp: 'Konjungsi kronologis (lalu, kemudian, akhirnya) merangkai urutan kejadian.' },
      { text: 'Setelah selesai menulis cerita, langkah terakhir yang baik adalah...', opts: ['Langsung merobek kertas', 'Membaca ulang untuk mengecek ejaan dan tanda baca', 'Menghapus judulnya', 'Tidak dibaca lagi'], ans: 1, exp: 'Menyunting membuat tulisan rapi dan enak dibaca.' },
    ],
  },

  // BAB 5: TEKS PETUNJUK DAN ARAHAN
  {
    topicCode: 'BIND-SD3-05', subSeq: 1,
    objectives: ['Siswa mampu memahami isi teks petunjuk/instruksi dalam kehidupan sehari-hari.'],
    materialTitle: 'Memahami Teks Petunjuk (Instruksi)',
    blocks: [
      { type: 'visual_cards', title: 'Di Mana Kita Menemukan Teks Petunjuk?', cards: [
        { emoji: '🍜', label: 'Kemasan Makanan', sub: 'Cara menyeduh susu atau memasak mi' },
        { emoji: '💊', label: 'Aturan Obat', sub: 'Dosis minum obat sesuai anjuran dokter' },
        { emoji: '🪁', label: 'Cara Membuat Kerajinan', sub: 'Langkah membuat kipas kertas atau layang-layang' },
        { emoji: '🗺️', label: 'Petunjuk Arah', sub: 'Belok kanan di pertigaan menuju sekolah' },
      ]},
    ],
    activityTitle: 'Latihan: Memahami Instruksi',
    questions: [
      { text: 'Tujuan teks petunjuk adalah...', opts: ['Memberikan panduan langkah melakukan atau membuat sesuatu dengan benar', 'Menceritakan dongeng kerajaan', 'Membuat orang bingung', 'Menggambar pemandangan'], ans: 0, exp: 'Teks petunjuk memandu pembaca langkah demi langkah.' },
      { text: 'Bahasa dalam teks petunjuk harus...', opts: ['Panjang dan berbelit', 'Jelas, singkat, dan berurutan', 'Menggunakan bahasa rahasia', 'Penuh teka-teki'], ans: 1, exp: 'Petunjuk harus jelas agar mudah diikuti tanpa salah.' },
      { text: 'Jika kita tidak mengikuti petunjuk pemakaian alat listrik dengan benar, akibatnya bisa...', opts: ['Alat rusak atau membahayakan keselamatan', 'Alat makin awet', 'Tidak ada pengaruhnya', 'Listrik gratis'], ans: 0, exp: 'Petunjuk penggunaan dibuat demi keamanan dan hasil maksimal.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-05', subSeq: 2,
    objectives: ['Siswa mampu mengurutkan langkah-langkah petunjuk secara logis dan kronologis.'],
    materialTitle: 'Urutan Langkah Petunjuk',
    blocks: [
      { type: 'worked_example', level: 'Urutkan!', question: 'Urutkan cara mencuci tangan pakai sabun yang benar!', steps: ['1. Basahi tangan dengan air mengalir.', '2. Tuang sabun lalu gosok telapak, punggung tangan, dan sela jari.', '3. Bilas tangan hingga bersih dari busa.', '4. Keringkan tangan dengan handuk bersih atau tisu.'], answer: 'Basahi → Sabuni & gosok → Bilas → Keringkan.' },
    ],
    activityTitle: 'Latihan: Urutan Langkah',
    questions: [
      { text: 'Urutan cara membuat teh hangat: (1) Aduk hingga gula larut, (2) Masukkan teh dan gula ke gelas, (3) Tuangkan air hangat. Urutan yang BENAR adalah...', opts: ['1-2-3', '2-3-1', '3-1-2', '1-3-2'], ans: 1, exp: 'Masukkan bahan (2) → tuang air hangat (3) → aduk rata (1).' },
      { text: 'Mengapa langkah dalam teks petunjuk harus diberi nomor urut 1, 2, 3?', opts: ['Agar mudah diikuti sesuai urutan yang benar', 'Hanya untuk hiasan', 'Agar terlihat seperti soal hitung', 'Biar susah dibaca'], ans: 0, exp: 'Nomor urut memastikan tidak ada tahapan yang terbalik.' },
      { text: 'Pada petunjuk menggosok gigi, langkah TERAKHIR adalah...', opts: ['Mengoleskan pasta gigi ke sikat', 'Berkumur dengan air bersih dan membilas sikat', 'Mengambil sikat gigi', 'Membuka tutup pasta gigi'], ans: 1, exp: 'Berkumur dan membersihkan sikat dilakukan paling akhir.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-05', subSeq: 3,
    objectives: ['Siswa mampu menggunakan kata kerja perintah (imperatif) berakhiran -lah dan -kan dalam teks petunjuk.'],
    materialTitle: 'Kata Kerja Perintah dalam Petunjuk',
    blocks: [
      { type: 'flashcards', title: 'Contoh Kata Kerja Perintah (Imperatif)', cards: [
        { emoji: '✂️', front: 'Potong → ...', back: 'Potonglah kertas mengikuti garis!' },
        { emoji: '🥣', front: 'Aduk → ...', back: 'Aduklah adonan hingga rata!' },
        { emoji: '💧', front: 'Tuang → ...', back: 'Tuangkan air secukupnya!' },
        { emoji: '🔌', front: 'Tekan → ...', back: 'Tekanlah tombol daya (ON)!' },
      ]},
      { type: 'tip', text: 'Kalimat petunjuk sering memakai kata kerja perintah berakhiran "-lah" atau "-kan" agar terdengar sopan dan jelas.' },
    ],
    activityTitle: 'Latihan: Kata Kerja Perintah',
    questions: [
      { text: '"... tanganmu dengan sabun sebelum makan!" Kata kerja perintah yang tepat adalah...', opts: ['Cucilah', 'Mencuci', 'Dicuci', 'Tercuci'], ans: 0, exp: 'Kata perintah sopan menggunakan akhiran -lah: Cucilah.' },
      { text: 'Manakah kalimat yang merupakan kalimat petunjuk?', opts: ['Alya sedang melipat kertas origami.', 'Lipatlah kertas origami menjadi dua bagian sama besar!', 'Kertas origami berwarna merah.', 'Apakah kamu punya kertas origami?'], ans: 1, exp: 'Menggunakan kata perintah "Lipatlah" untuk memberi instruksi.' },
      { text: 'Kata kerja perintah pada kalimat "Masukkan biji kacang ke dalam pot!" adalah...', opts: ['Biji', 'Kacang', 'Masukkan', 'Pot'], ans: 2, exp: '"Masukkan" adalah kata kerja perintah berakhiran -kan.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-05', subSeq: 4,
    objectives: ['Siswa mampu menyusun teks petunjuk kegiatan sederhana lengkap dengan alat, bahan, dan langkah.'],
    materialTitle: 'Menyusun Petunjuk Kegiatan',
    blocks: [
      { type: 'table', title: 'Kerangka Teks Petunjuk Lengkap', headers: ['Bagian', 'Isinya (Contoh: Membuat Pembatas Buku)'], rows: [
        ['1. Judul', 'Cara Membuat Pembatas Buku Lucu'],
        ['2. Alat & Bahan', 'Kertas karton, gunting, spidol warna, pita'],
        ['3. Langkah-Langkah', '1. Gunting karton persegi panjang. 2. Hias dengan gambar. 3. Lubangi atasnya dan ikat pita.'],
      ]},
    ],
    activityTitle: 'Latihan: Menyusun Petunjuk',
    questions: [
      { text: 'Bagian yang menyebutkan benda-benda yang diperlukan sebelum memulai petunjuk adalah...', opts: ['Daftar pustaka', 'Alat dan bahan', 'Penutup', 'Amanat'], ans: 1, exp: 'Alat dan bahan disiapkan terlebih dahulu sebelum masuk ke langkah.' },
      { text: 'Judul yang tepat untuk teks petunjuk merawat tanaman pot adalah...', opts: ['Kisah Si Pot Ajaib', 'Cara Merawat Tanaman di Dalam Pot', 'Bunga Mawar Merah', 'Mengapa Daun Hijau?'], ans: 1, exp: 'Judul teks petunjuk biasanya diawali kata "Cara..." atau "Petunjuk...".' },
      { text: 'Kalimat petunjuk sebaiknya disusun secara...', opts: ['Acak', 'Runtut dari awal sampai selesai', 'Dari akhir ke awal', 'Tanpa kata kerja'], ans: 1, exp: 'Keruntutan menjamin keberhasilan mengikuti petunjuk.' },
    ],
  },

  // BAB 6: TEKS EKSPOSISI DAN ARGUMENTASI SEDERHANA
  {
    topicCode: 'BIND-SD3-06', subSeq: 1,
    objectives: ['Siswa mampu mengenal pendapat (opini) beserta alasan logis yang mendukungnya.'],
    materialTitle: 'Mengenal Pendapat dan Alasan',
    blocks: [
      { type: 'story_panel', title: 'Pendapat Harus Punya Alasan!', lines: [
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Kalau kamu berpendapat, jangan lupa tambahkan kata "KARENA" untuk menjelaskan alasannya!' },
        { speaker: 'Salsa', avatar: '👧', text: 'Menurutku kita perlu membawa botol minum sendiri ke sekolah, KARENA bisa mengurangi sampah plastik!' },
      ]},
      { type: 'tip', text: 'Rumus pendapat keren: Menurut saya ... KARENA ...' },
    ],
    activityTitle: 'Latihan: Pendapat & Alasan',
    questions: [
      { text: 'Kata penghubung yang paling sering dipakai untuk menyampaikan ALASAN pendapat adalah...', opts: ['Karena / Sebab', 'Atau', 'Dan', 'Sedangkan'], ans: 0, exp: '"Karena" menjelaskan alasan pendukung suatu pendapat.' },
      { text: 'Manakah kalimat pendapat yang disertai alasan logis?', opts: ['Pokoknya aku tidak suka!', 'Menurutku membaca buku itu penting karena menambah pengetahuan kita.', 'Buku itu ada di meja.', 'Siapa yang membaca buku?'], ans: 1, exp: 'Memuat pendapat ("membaca itu penting") + alasan ("menambah pengetahuan").' },
      { text: 'Pendapat yang kuat harus didukung oleh alasan yang...', opts: ['Masuk akal (logis)', 'Memaksa', 'Menyakitkan teman', 'Asal menebak'], ans: 0, exp: 'Alasan logis membuat pendapat mudah dipahami dan diterima.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-06', subSeq: 2,
    objectives: ['Siswa mampu membedakan kalimat fakta (kenyataan) dan pendapat/opini sederhana.'],
    materialTitle: 'Membedakan Fakta dan Pendapat',
    blocks: [
      { type: 'table', title: 'Fakta vs Pendapat', headers: ['Aspek', 'Fakta (Kenyataan)', 'Pendapat (Opini)'], rows: [
        ['Sifat', 'Benar-benar terjadi, bisa dibuktikan semua orang', 'Penilaian pribadi, bisa berbeda tiap orang'],
        ['Ciri Kata', 'Angka pasti, tanggal, bukti nyata', 'Menurutku, sebaiknya, paling enak, sangat indah'],
        ['Contoh', 'Satu minggu terdiri atas 7 hari.', 'Menurutku, hari Minggu adalah hari paling seru!'],
      ]},
    ],
    activityTitle: 'Latihan: Fakta vs Pendapat',
    questions: [
      { text: 'Manakah yang merupakan kalimat FAKTA?', opts: ['Menurutku rasa pudak pandan paling enak sedunia.', 'Matahari terbit dari sebelah timur.', 'Sebaiknya kita liburan ke pantai saja.', 'Kucing lebih lucu daripada kelinci.'], ans: 1, exp: 'Matahari terbit dari timur adalah kebenaran pasti yang dapat dibuktikan.' },
      { text: 'Manakah yang merupakan kalimat PENDAPAT (opini)?', opts: ['Indonesia merdeka pada 17 Agustus 1945.', 'Satu meter sama dengan 100 sentimeter.', 'Menurut saya, pelajaran menggambar adalah pelajaran paling seru.', 'Ikan bernapas dengan insang.'], ans: 2, exp: 'Kata "menurut saya" dan "paling seru" adalah penilaian pribadi (opini).' },
      { text: 'Ciri utama kalimat fakta adalah...', opts: ['Bisa berbeda-beda menurut selera', 'Dapat dibuktikan kebenarannya secara nyata', 'Selalu memakai kata "sebaiknya"', 'Berisi khayalan'], ans: 1, exp: 'Fakta bersifat objektif dan dapat dibuktikan.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-06', subSeq: 3,
    objectives: ['Siswa mampu memahami teks eksposisi pendek yang berisi informasi dan penjelasan manfaat sesuatu.'],
    materialTitle: 'Memahami Informasi dalam Teks Eksposisi',
    blocks: [
      { type: 'story_panel', title: 'Teks Eksposisi: Ayo Sarapan Pagi!', lines: [
        { speaker: 'Teks', avatar: '📄', text: 'Sarapan pagi sangat penting bagi anak sekolah. Tubuh yang mendapat asupan gizi di pagi hari memiliki tenaga untuk berpikir dan bermain. Anak yang terbiasa sarapan lebih mudah berkonsentrasi saat belajar di kelas.' },
      ]},
      { type: 'tip', text: 'Teks eksposisi bertujuan MEMAPARKAN informasi dan meyakinkan pembaca dengan alasan yang bermanfaat.' },
    ],
    activityTitle: 'Latihan: Memahami Teks Eksposisi',
    questions: [
      { text: 'Berdasarkan bacaan "Ayo Sarapan Pagi!", apa manfaat sarapan bagi siswa?', opts: ['Membuat cepat mengantuk', 'Memberi tenaga dan membantu konsentrasi belajar', 'Membuat terlambat', 'Tidak ada manfaatnya'], ans: 1, exp: 'Tertulis: memberi tenaga dan membantu berkonsentrasi di kelas.' },
      { text: 'Tujuan utama teks eksposisi adalah...', opts: ['Menyampaikan informasi/pengetahuan beserta alasan yang jelas', 'Menghibur dengan dongeng hewan', 'Membuat teka-teki', 'Menulis surat izin'], ans: 0, exp: 'Eksposisi memaparkan informasi dan argumen logis.' },
      { text: 'Topik yang cocok untuk teks eksposisi adalah...', opts: ['Manfaat menanam pohon di halaman sekolah', 'Petualangan kancil di hutan', 'Resep kue', 'Lirik lagu'], ans: 0, exp: 'Memaparkan manfaat menanam pohon bersifat informatif dan argumentatif.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-06', subSeq: 4,
    objectives: ['Siswa mampu menyampaikan pendapat dan tanggapan secara sopan tanpa menyinggung orang lain.'],
    materialTitle: 'Menyampaikan Pendapat dengan Sopan',
    blocks: [
      { type: 'visual_cards', title: 'Etika Berpendapat yang Baik', cards: [
        { emoji: '🙋', label: 'Angkat Tangan Dulu', sub: 'Tunggu dipersilakan, jangan memotong pembicaraan' },
        { emoji: '😊', label: 'Gunakan Bahasa Santun', sub: '"Menurut saya...", "Saya setuju karena...", "Maaf, saya punya usul lain..."' },
        { emoji: '👂', label: 'Hargai Pendapat Teman', sub: 'Tetap ramah meskipun pendapat berbeda!' },
      ]},
    ],
    activityTitle: 'Latihan: Menyampaikan Pendapat',
    questions: [
      { text: 'Kalimat yang paling SOPAN saat kamu tidak sependapat dengan usulan teman adalah...', opts: ['Usulmu jelek sekali!', 'Maaf, saya kurang setuju. Bagaimana kalau kita mencoba cara ini karena lebih cepat?', 'Kamu tidak tahu apa-apa!', 'Diam saja, ikuti aku!'], ans: 1, exp: 'Mengawali dengan kata "Maaf" dan menawarkan alternatif yang santun menjaga kerukunan.' },
      { text: 'Saat teman sedang menyampaikan pendapat di diskusi kelas, sikap kita adalah...', opts: ['Menertawakannya', 'Mendengarkan dengan tenang sampai selesai', 'Berbicara keras memotongnya', 'Berjalan-jalan keluar kelas'], ans: 1, exp: 'Mendengarkan sampai selesai adalah bentuk saling menghargai.' },
      { text: 'Sebelum berbicara dalam diskusi kelas, sebaiknya kita...', opts: ['Berteriak', 'Mengangkat tangan terlebih dahulu', 'Memukul meja', 'Langsung berdiri'], ans: 1, exp: 'Mengangkat tangan membuat diskusi tertib.' },
    ],
  },

  // BAB 7: PUISI DAN DONGENG
  {
    topicCode: 'BIND-SD3-07', subSeq: 1,
    objectives: ['Siswa mampu mengenal unsur puisi anak: judul, baris (larik), dan bait.'],
    materialTitle: 'Mengenal Unsur Puisi Anak',
    blocks: [
      { type: 'story_panel', title: 'Contoh Puisi: Pagi di Desaku', lines: [
        { speaker: 'Puisi', avatar: '📝', text: 'Mentari pagi mulai bersinar (baris 1) / Burung berkicau riang gembira (baris 2) / Embun berkilau di daun segar (baris 3) / Semangat belajar penuh ceria (baris 4) — 4 baris ini membentuk 1 BAIT!' },
      ]},
      { type: 'visual_cards', title: 'Unsur Puisi Anak', cards: [
        { emoji: '📏', label: 'Baris (Larik)', sub: 'Satu deret kata dalam puisi' },
        { emoji: '📦', label: 'Bait', sub: 'Kumpulan beberapa baris (biasanya 4 baris)' },
        { emoji: '🎵', label: 'Rima', sub: 'Persamaan bunyi di akhir baris (bersinar–segar, gembira–ceria)' },
      ]},
    ],
    activityTitle: 'Latihan: Unsur Puisi Anak',
    questions: [
      { text: 'Kumpulan beberapa baris dalam puisi disebut...', opts: ['Paragraf', 'Bait', 'Bab', 'Kalimat tanya'], ans: 1, exp: 'Puisi tersusun atas baris-baris yang dikelompokkan menjadi bait.' },
      { text: 'Persamaan bunyi di akhir baris puisi disebut...', opts: ['Latar', 'Rima', 'Alur', 'Judul'], ans: 1, exp: 'Rima membuat puisi terdengar merdu seperti lagu.' },
      { text: 'Puisi berbeda dengan cerita prosa karena puisi ditulis dalam bentuk...', opts: ['Baris dan bait yang singkat dan indah', 'Tabel angka', 'Daftar belanja', 'Resep masakan'], ans: 0, exp: 'Ciri khas puisi adalah bentuk bait/baris dengan pilihan kata indah.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-07', subSeq: 2,
    objectives: ['Siswa mampu memahami pilihan kata (diksi) indah dan bermakna kiasan sederhana dalam puisi.'],
    materialTitle: 'Pilihan Kata Indah dalam Puisi',
    blocks: [
      { type: 'flashcards', title: 'Makna Kata Indah dalam Puisi (Klik!)', cards: [
        { emoji: '☀️', front: 'Mentari', back: 'Matahari' },
        { emoji: '🌬️', front: 'Bayu', back: 'Angin sepoi-sepoi' },
        { emoji: '🌻', front: 'Kusuma / Puspa', back: 'Bunga' },
        { emoji: '🌊', front: 'Samudra', back: 'Lautan yang sangat luas' },
      ]},
    ],
    activityTitle: 'Latihan: Pilihan Kata Puisi',
    questions: [
      { text: 'Dalam puisi, kata indah untuk "matahari" adalah...', opts: ['Mentari', 'Samudra', 'Bayu', 'Embun'], ans: 0, exp: 'Mentari adalah padanan puitis dari matahari.' },
      { text: '"Ibu adalah pelita dalam hidupku." Kata "pelita" pada puisi tersebut bermakna...', opts: ['Benda berat', 'Penerang dan pembimbing hidup', 'Mainan', 'Hujan'], ans: 1, exp: 'Pelita (lampu penerang) melambangkan ibu yang membimbing dan menyinari hidup anaknya.' },
      { text: 'Tujuan penyair memilih kata-kata indah (diksi) dalam puisi adalah...', opts: ['Agar puisi menyentuh perasaan dan enak didengar', 'Agar pembaca bingung', 'Agar puisi sangat panjang', 'Agar tidak bermakna'], ans: 0, exp: 'Diksi yang tepat menciptakan keindahan dan kesan mendalam.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-07', subSeq: 3,
    objectives: ['Siswa mampu membaca puisi dengan irama, jeda, intonasi, dan ekspresi yang tepat.'],
    materialTitle: 'Irama dan Ekspresi Membaca Puisi',
    blocks: [
      { type: 'visual_cards', title: '4 Kunci Keren Membaca Puisi', cards: [
        { emoji: '🗣️', label: 'Lafal Jelas', sub: 'Setiap kata diucapkan terang' },
        { emoji: '🎶', label: 'Intonasi & Irama', sub: 'Tinggi-rendah suara dan cepat-lambat tempo sesuai isi' },
        { emoji: '⏸️', label: 'Jeda', sub: 'Berhenti sejenak di tanda / dan berhenti lebih lama di //' },
        { emoji: '😊', label: 'Ekspresi Wajah', sub: 'Tersenyum untuk puisi ceria, syahdu untuk puisi haru' },
      ]},
    ],
    activityTitle: 'Latihan: Irama Membaca Puisi',
    questions: [
      { text: 'Jika kita membacakan puisi bertema perjuangan pahlawan, ekspresi dan suara kita sebaiknya...', opts: ['Berbisik lemah', 'Tegas, lantang, dan penuh semangat', 'Tertawa terbahak-bahak', 'Sambil menguap'], ans: 1, exp: 'Puisi perjuangan dibacakan dengan intonasi tegas dan bersemangat.' },
      { text: 'Tinggi rendahnya nada suara saat membacakan puisi disebut...', opts: ['Intonasi', 'Judul', 'Bait', 'Tokoh'], ans: 0, exp: 'Intonasi adalah lagu kalimat atau tinggi rendahnya nada suara.' },
      { text: 'Tanda garis miring satu (/) saat latihan membaca puisi artinya...', opts: ['Berhenti sebentar', 'Selesai total', 'Membaca mundur', 'Berteriak'], ans: 0, exp: 'Tanda (/) menandakan jeda pendek, sedangkan (//) jeda panjang.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-07', subSeq: 4,
    objectives: ['Siswa mampu mengenali jenis dongeng anak (fabel, legenda, cerita rakyat) beserta nilai inspiratifnya.'],
    materialTitle: 'Dongeng dan Cerita Inspiratif',
    blocks: [
      { type: 'visual_cards', title: 'Jenis Dongeng yang Seru!', cards: [
        { emoji: '🦊', label: 'Fabel', sub: 'Dongeng dengan tokoh hewan yang bisa bicara (Kancil, Semut & Belalang)' },
        { emoji: '👑', label: 'Cerita Rakyat', sub: 'Kisah turun-temurun dari berbagai daerah di Nusantara' },
        { emoji: '🌟', label: 'Cerita Inspiratif', sub: 'Kisah yang memberi semangat agar kita pantang menyerah dan peduli sesama' },
      ]},
    ],
    activityTitle: 'Latihan: Dongeng & Cerita Inspiratif',
    questions: [
      { text: 'Dongeng yang tokoh-tokohnya adalah hewan yang bertingkah seperti manusia disebut...', opts: ['Fabel', 'Berita', 'Resep', 'Iklan'], ans: 0, exp: 'Fabel adalah dongeng bertokoh binatang.' },
      { text: 'Contoh fabel yang mengajarkan sifat rajin menabung makanan untuk musim sulit adalah...', opts: ['Semut dan Belalang', 'Daftar Menu', 'Jadwal Piket', 'Pengumuman Lomba'], ans: 0, exp: 'Semut rajin bekerja mempersiapkan musim dingin sementara Belalang bermalas-malasan.' },
      { text: 'Cerita inspiratif bertujuan membuat pembaca merasa...', opts: ['Putus asa', 'Termotivasi melakukan kebaikan dan pantang menyerah', 'Malas belajar', 'Marah'], ans: 1, exp: 'Inspiratif berarti menggerakkan semangat menuju hal positif.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-07', subSeq: 5,
    objectives: ['Siswa mampu menceritakan kembali isi puisi atau dongeng menggunakan bahasa sendiri secara runtut.'],
    materialTitle: 'Menceritakan Kembali Isi Karya Sastra',
    blocks: [
      { type: 'list', title: 'Tips Menceritakan Kembali Tanpa Menghafal Kata per Kata', items: ['1. Pahami siapa tokoh, di mana kejadiannya, dan apa inti ceritanya.', '2. Gunakan bahasamu sendiri yang santai dan mudah dipahami teman.', '3. Jangan lupa sebutkan pesan baik (amanat) di akhir ceritamu!', '4. Tatap pendengar dan berceritalah dengan percaya diri.'] },
    ],
    activityTitle: 'Latihan: Menceritakan Kembali',
    questions: [
      { text: 'Saat menceritakan kembali dongeng di depan kelas, kita sebaiknya menggunakan...', opts: ['Bahasa sendiri yang runtut dan tidak mengubah isi cerita', 'Hafalan kaku tanpa mengerti artinya', 'Cerita yang sama sekali beda dari aslinya', 'Suara sangat pelan'], ans: 0, exp: 'Memakai bahasa sendiri menunjukkan pemahaman isi cerita.' },
      { text: 'Urutan yang baik saat menceritakan kembali dongeng adalah...', opts: ['Akhir → Awal → Tengah', 'Awal → Tengah → Akhir + Pesan cerita', 'Langsung pesan saja tanpa cerita', 'Judul saja'], ans: 1, exp: 'Urutan runtut memudahkan pendengar mengikuti alur.' },
      { text: 'Sikap percaya diri saat bercerita di depan kelas ditunjukkan dengan...', opts: ['Menutup wajah dengan buku', 'Berdiri tegak, suara jelas, dan menatap teman-teman', 'Memunggungi kelas', 'Terburu-buru selesai'], ans: 1, exp: 'Kontak mata dan suara lantang membuat cerita lebih menarik.' },
    ],
  },

  // BAB 8: MENULIS DAN MENYAMPAIKAN PENDAPAT
  {
    topicCode: 'BIND-SD3-08', subSeq: 1,
    objectives: ['Siswa mampu menulis satu paragraf padu terdiri atas kalimat utama dan kalimat penjelas.'],
    materialTitle: 'Menulis Paragraf yang Padu',
    blocks: [
      { type: 'worked_example', level: 'Kerangka Paragraf', question: 'Buat 1 paragraf bertema "Menjaga Kebersihan Kelas"!', steps: ['Kalimat utama: Kelas yang bersih membuat kami nyaman belajar.', 'Penjelas 1: Setiap pagi regu piket menyapu lantai dan menghapus papan tulis.', 'Penjelas 2: Semua siswa juga membuang sampah di tempat sampah.'], answer: 'Tiga kalimat padu dalam satu paragraf, diawali sedikit menjorok ke dalam.' },
      { type: 'tip', text: 'Jangan lupa: baris pertama paragraf ditulis sedikit MENJOROK ke dalam!' },
    ],
    activityTitle: 'Latihan: Menulis Paragraf',
    questions: [
      { text: 'Ciri penulisan awal sebuah paragraf baru adalah baris pertamanya ditulis...', opts: ['Menjorok ke dalam', 'Rata kanan', 'Di luar kertas', 'Menggunakan angka semua'], ans: 0, exp: 'Inden (menjorok ke dalam) menandai dimulainya paragraf baru.' },
      { text: 'Paragraf yang padu artinya semua kalimatnya...', opts: ['Saling mendukung satu ide pokok', 'Membahas topik acak berbeda-beda', 'Tidak memiliki tanda titik', 'Sama persis diulang-ulang'], ans: 0, exp: 'Kepaduan berarti kesatuan topik antar kalimat.' },
      { text: 'Manakah kalimat yang TIDAK padu dalam paragraf tentang "Kegemaran Membaca"?', opts: ['Aku suka membaca buku cerita setiap sore.', 'Perpustakaan sekolah punya banyak buku bergambar.', 'Sepeda ayah bannya kemarin bocor di jalan.', 'Membaca membuat wawasanku makin luas.'], ans: 2, exp: 'Kalimat tentang ban sepeda bocor tidak nyambung dengan topik membaca.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-08', subSeq: 2,
    objectives: ['Siswa mampu menyusun kalimat berpola SPOK (Subjek, Predikat, Objek, Keterangan) secara beragam.'],
    materialTitle: 'Menyusun Kalimat Beragam (SPOK)',
    blocks: [
      { type: 'table', title: 'Pola Kalimat SPOK', headers: ['S (Subjek)', 'P (Predikat)', 'O (Objek)', 'K (Keterangan)'], rows: [
        ['Alya', 'membaca', 'buku cerita', 'di perpustakaan.'],
        ['Ibu', 'memasak', 'otak-otak bandeng', 'di dapur pagi ini.'],
        ['Siswa kelas 3', 'menanam', 'bunga melati', 'di halaman sekolah.'],
      ]},
      { type: 'tip', text: 'S = pelakunya, P = kegiatannya (kata kerja), O = yang dikenai pekerjaan, K = tempat/waktu/cara!' },
    ],
    activityTitle: 'Latihan: Menyusun Kalimat SPOK',
    questions: [
      { text: 'Pada kalimat "Bima menendang bola di lapangan", kata "menendang" menduduki unsur...', opts: ['Subjek (S)', 'Predikat (P)', 'Objek (O)', 'Keterangan (K)'], ans: 1, exp: 'Menendang adalah kegiatan/kata kerja → Predikat.' },
      { text: 'Pada kalimat "Salsa menulis puisi di kamar", unsur KETERANGAN (K) adalah...', opts: ['Salsa', 'menulis', 'puisi', 'di kamar'], ans: 3, exp: '"Di kamar" adalah keterangan tempat.' },
      { text: 'Susunan kalimat yang tepat dari kata acak "membeli – ibu – di pasar – pudak" adalah...', opts: ['Di pasar pudak membeli ibu.', 'Ibu membeli pudak di pasar.', 'Membeli ibu di pasar pudak.', 'Pudak ibu di pasar membeli.'], ans: 1, exp: 'Pola SPOK yang tepat: Ibu (S) membeli (P) pudak (O) di pasar (K).' },
    ],
  },
  {
    topicCode: 'BIND-SD3-08', subSeq: 3,
    objectives: ['Siswa mampu menggunakan kosakata baru dengan tepat dalam kalimat sendiri.'],
    materialTitle: 'Menggunakan Kosakata Baru',
    blocks: [
      { type: 'flashcards', title: 'Tambah Koleksi Kosakata Kerenmu! (Klik!)', cards: [
        { emoji: '📚', front: 'Wawasan', back: 'Pengetahuan yang luas (Membaca menambah wawasan.)' },
        { emoji: '♻️', front: 'Daur ulang', back: 'Mengolah barang bekas jadi berguna lagi' },
        { emoji: '🤝', front: 'Toleransi', back: 'Sikap saling menghormati perbedaan' },
        { emoji: '💡', front: 'Kreatif', back: 'Punya banyak ide baru dan unik' },
      ]},
    ],
    activityTitle: 'Latihan: Kosakata Baru',
    questions: [
      { text: '"Botol plastik bekas bisa di-... menjadi pot tanaman lucu." Kosakata yang tepat adalah...', opts: ['Daur ulang', 'Buang jauh', 'Bakar habis', 'Sembunyikan'], ans: 0, exp: 'Daur ulang adalah mengolah barang bekas menjadi benda bermanfaat.' },
      { text: 'Anak yang penuh ide baru saat membuat prakarya disebut anak yang...', opts: ['Malas', 'Kreatif', 'Gugup', 'Pelupa'], ans: 1, exp: 'Kreatif berarti memiliki daya cipta dan ide baru.' },
      { text: 'Agar cepat menguasai banyak kosakata baru, kebiasaan yang paling membantu adalah...', opts: ['Rajin membaca buku dan mencatat kata baru', 'Tidak pernah membaca', 'Menghindari kamus', 'Tidur sepanjang hari'], ans: 0, exp: 'Membaca memperkaya perbendaharaan kata.' },
    ],
  },
  {
    topicCode: 'BIND-SD3-08', subSeq: 4,
    objectives: ['Siswa mampu menyampaikan pendapat dan presentasi sederhana secara lisan dengan percaya diri.'],
    materialTitle: 'Menyampaikan Pendapat Secara Lisan',
    blocks: [
      { type: 'visual_cards', title: '4 Langkah Berbicara Hebat di Depan Kelas', cards: [
        { emoji: '👋', label: '1. Salam Pembuka', sub: '"Selamat pagi Bu Guru dan teman-teman."' },
        { emoji: '🗣️', label: '2. Sampaikan Isi Jelas', sub: 'Suara cukup keras, tidak terlalu cepat, sertai alasan' },
        { emoji: '👀', label: '3. Tatap Pendengar', sub: 'Tersenyum ramah dan berdiri tegak' },
        { emoji: '🙏', label: '4. Salam Penutup', sub: '"Terima kasih atas perhatian teman-teman."' },
      ]},
    ],
    activityTitle: 'Latihan: Berpendapat Secara Lisan',
    questions: [
      { text: 'Hal pertama yang diucapkan sebelum memulai presentasi atau menyampaikan pendapat di depan kelas adalah...', opts: ['Langsung duduk', 'Mengucapkan salam pembuka', 'Menutup telinga', 'Tertawa'], ans: 1, exp: 'Salam pembuka menunjukkan kesopanan dan menarik perhatian pendengar.' },
      { text: 'Jika teman merasa gugup saat berbicara di depan kelas, sikap kita sebagai pendengar adalah...', opts: ['Mengejeknya', 'Mendengarkan dengan tenang dan memberi tepuk tangan penyemangat', 'Berbicara sendiri dengan keras', 'Menyoraki'], ans: 1, exp: 'Dukungan teman membuat pembicara lebih percaya diri.' },
      { text: 'Agar pendapat lisan kita didengar sampai bangku belakang, volume suara harus...', opts: ['Berbisik pelan', 'Cukup lantang dan jelas, tidak berteriak marah', 'Diam saja', 'Sangat cepat'], ans: 1, exp: 'Volume cukup lantang dan tempo sedang memudahkan semua orang mendengar.' },
    ],
  },
];

upsertLessonsBatch('Kelas 3 SD — Bahasa Indonesia (8 Bab, 36 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

