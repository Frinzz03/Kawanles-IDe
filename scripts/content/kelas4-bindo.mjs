import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: MEMBACA KRITIS DASAR
  {
    topicCode: 'BIND-SD4-01', subSeq: 1,
    objectives: ['Siswa mampu membedakan ciri membaca teks cetak (buku/koran) dan teks digital (web/e-book) secara aman dan teliti.'],
    materialTitle: 'Membaca Teks Cetak dan Digital',
    blocks: [
      { type: 'table', title: 'Perbandingan Teks Cetak vs Teks Digital', headers: ['Aspek', 'Teks Cetak', 'Teks Digital'], rows: [
        ['Media', 'Buku, majalah, koran, poster kertas', 'Layar HP, tablet, laptop (e-book, artikel web)'],
        ['Fitur Khas', 'Bisa diberi penanda buku & stabilo langsung', 'Ada tautan (link), pencarian kata, audio/video'],
        ['Tips Membaca Sehat', 'Cahaya cukup, jarak mata ±30 cm', 'Atur kecerahan layar, istirahatkan mata tiap 20 menit, cek sumber tepercaya!'],
      ]},
    ],
    activityTitle: 'Latihan: Teks Cetak & Digital',
    questions: [
      { text: 'Contoh teks DIGITAL yang dapat kita baca adalah...', opts: ['Buku cetak di perpustakaan', 'Artikel edukasi di situs web dan buku elektronik (e-book)', 'Koran kertas', 'Spanduk kain'], ans: 1, exp: 'Teks digital disajikan melalui perangkat elektronik.' },
      { text: 'Saat membaca informasi berita di internet, sikap pembaca kritis adalah...', opts: ['Langsung percaya semua judul heboh', 'Memeriksa kebenaran isi dan sumber situsnya dulu sebelum membagikan', 'Membagikan tanpa membaca isi', 'Menghapus semua teks'], ans: 1, exp: 'Membaca kritis mencegah penyebaran berita bohong (hoaks).' },
      { text: 'Fitur pada teks digital yang memungkinkan kita melompat ke halaman informasi terkait disebut...', opts: ['Tautan (hyperlink)', 'Sampul kertas', 'Pembatas pita', 'Steples'], ans: 0, exp: 'Hyperlink menghubungkan satu halaman digital ke halaman lain.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-01', subSeq: 2,
    objectives: ['Siswa mampu menemukan ide pokok pada paragraf deduktif (awal) maupun induktif (akhir).'],
    materialTitle: 'Menemukan Ide Pokok Paragraf',
    blocks: [
      { type: 'visual_cards', title: '2 Letak Kalimat Utama Populer', cards: [
        { emoji: '⬆️', label: 'Paragraf Deduktif', sub: 'Kalimat utama di AWAL paragraf (Umum → Khusus)' },
        { emoji: '⬇️', label: 'Paragraf Induktif', sub: 'Kalimat utama di AKHIR paragraf (Khusus → Simpulan)' },
      ]},
      { type: 'worked_example', level: 'Analisis Paragraf', question: '"Pohon bakau menahan ombak agar pantai tidak tergerus. Akar bakau juga menjadi tempat tinggal kepiting dan ikan kecil. Jadi, hutan bakau memiliki peran sangat penting bagi ekosistem pesisir." Di mana kalimat utamanya?', steps: ['Kalimat 1 & 2 memberi contoh manfaat khusus.', 'Kalimat 3 menyimpulkan dengan kata "Jadi...".'], answer: 'Di akhir paragraf (induktif); ide pokok: Pentingnya peran hutan bakau bagi ekosistem pesisir.' },
    ],
    activityTitle: 'Latihan: Menemukan Ide Pokok',
    questions: [
      { text: 'Paragraf yang kalimat utamanya terletak di AWAL paragraf disebut paragraf...', opts: ['Deduktif', 'Induktif', 'Naratif', 'Dialog'], ans: 0, exp: 'Deduktif = di depan/awal; Induktif = di akhir.' },
      { text: '"Membaca buku setiap hari melatih daya ingat. Selain itu, membaca menambah kosakata dan pengetahuan baru. Oleh karena itu, mari kita biasakan membaca 15 menit setiap hari." Ide pokok paragraf itu adalah...', opts: ['Ajakan membiasakan membaca setiap hari', 'Harga buku cerita', 'Cara membeli buku', 'Daftar perpustakaan'], ans: 0, exp: 'Simpulan di kalimat akhir memuat gagasan utamanya.' },
      { text: 'Langkah tercepat menemukan ide pokok adalah mencari...', opts: ['Kata yang paling panjang', 'Kalimat utama lalu merangkum intinya', 'Tanda koma terbanyak', 'Nama penulis'], ans: 1, exp: 'Ide pokok tersimpan di dalam kalimat utama.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-01', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi informasi pendukung (fakta, contoh, rincian) yang menguatkan gagasan utama.'],
    materialTitle: 'Mengidentifikasi Informasi Pendukung',
    blocks: [
      { type: 'text', text: 'Informasi pendukung (gagasan pendukung) bertugas menjelaskan, memberi contoh, data, atau alasan agar ide pokok menjadi lebih jelas dan meyakinkan.' },
      { type: 'list', title: 'Bentuk Informasi Pendukung', items: ['Contoh nyata (misalnya, seperti, antara lain).', 'Alasan sebab-akibat (karena, sehingga).', 'Data atau rincian (angka, tempat, waktu).'] },
    ],
    activityTitle: 'Latihan: Informasi Pendukung',
    questions: [
      { text: 'Ide pokok: "Gresik memiliki beragam kuliner khas." Informasi pendukung yang PALING tepat adalah...', opts: ['Contohnya pudak, otak-otak bandeng, dan nasi krawu.', 'Gunung Bromo sangat dingin.', 'Sepeda memiliki dua roda.', 'Bulan mengelilingi bumi.'], ans: 0, exp: 'Menyebutkan contoh konkret kuliner khas Gresik.' },
      { text: 'Fungsi kalimat penjelas (informasi pendukung) adalah...', opts: ['Membantah ide pokok', 'Merinci dan menguatkan ide pokok', 'Mengganti judul teks', 'Membuat paragraf baru'], ans: 1, exp: 'Kalimat penjelas mendukung dan menguraikan ide pokok.' },
      { text: 'Kata penanda rincian contoh dalam informasi pendukung adalah...', opts: ['Misalnya / Contohnya', 'Apakah', 'Jangan', 'Aduhai'], ans: 0, exp: '"Misalnya" mengawali contoh pendukung.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-01', subSeq: 4,
    objectives: ['Siswa mampu menyimpulkan pesan utama dan maksud penulis setelah membaca teks secara kritis.'],
    materialTitle: 'Memahami Pesan Teks',
    blocks: [
      { type: 'story_panel', title: 'Membaca yang Tersurat & Tersirat!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Pesan TERSURAT tertulis jelas langsung di teks. Pesan TERSIRAT harus kita simpulkan sendiri dari keseluruhan isi bacaan!' },
        { speaker: 'Alya', avatar: '👧', text: 'Jadi kalau teks bercerita tentang bahaya sampah plastik di laut, pesan tersiratnya kita diajak mengurangi sampah plastik ya Bu!' },
      ]},
    ],
    activityTitle: 'Latihan: Memahami Pesan Teks',
    questions: [
      { text: 'Pesan bacaan yang tertulis secara langsung di dalam kalimat teks disebut pesan...', opts: ['Tersurat', 'Tersirat', 'Rahasia', 'Acak'], ans: 0, exp: 'Tersurat = tertulis nyata; Tersirat = tersembunyi/harus disimpulkan.' },
      { text: 'Sebuah artikel menjelaskan bahwa tidur larut malam membuat siswa mengantuk dan sulit fokus di kelas. Pesan utama teks tersebut adalah...', opts: ['Kita sebaiknya tidur cukup dan tidak begadang di hari sekolah', 'Siswa tidak perlu tidur', 'Pelajaran sekolah terlalu banyak', 'Tidur siang dilarang'], ans: 0, exp: 'Teks mengingatkan pentingnya tidur cukup bagi konsentrasi belajar.' },
      { text: 'Agar mampu menangkap pesan teks dengan tepat, kita perlu...', opts: ['Hanya membaca kalimat pertama', 'Membaca utuh dan menghubungkan semua informasi di dalam teks', 'Melihat gambarnya saja', 'Menebak judulnya saja'], ans: 1, exp: 'Pemahaman utuh menghasilkan simpulan yang akurat.' },
    ],
  },

  // BAB 2: TEKS EKSPOSISI SEDERHANA
  {
    topicCode: 'BIND-SD4-02', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian dan ciri khas teks eksposisi sederhana.'],
    materialTitle: 'Pengertian Teks Eksposisi',
    blocks: [
      { type: 'text', text: 'Teks eksposisi adalah karangan nonfiksi yang memaparkan informasi, pengetahuan, atau penjelasan suatu topik secara jelas, ringkas, dan didukung fakta agar wawasan pembaca bertambah.' },
      { type: 'visual_cards', title: 'Ciri Teks Eksposisi', cards: [
        { emoji: '📰', label: 'Bersifat Informatif', sub: 'Menjelaskan "apa", "mengapa", atau "bagaimana" suatu hal' },
        { emoji: '📊', label: 'Didukung Fakta', sub: 'Bukan dongeng/khayalan, melainkan data & kenyataan' },
        { emoji: '✍️', label: 'Bahasa Baku & Jelas', sub: 'Tidak berbelit-belit agar cepat dipahami' },
      ]},
    ],
    activityTitle: 'Latihan: Pengertian Teks Eksposisi',
    questions: [
      { text: 'Teks yang memaparkan informasi dan pengetahuan berdasarkan fakta secara singkat dan jelas disebut teks...', opts: ['Eksposisi', 'Dongeng', 'Puisi', 'Pantun'], ans: 0, exp: 'Eksposisi adalah teks informatif nonfiksi.' },
      { text: 'Manakah judul yang paling sesuai untuk teks EKSPOSISI?', opts: ['Manfaat Minum Air Putih bagi Kesehatan Tubuh', 'Kisah Kancil dan Buaya', 'Puisi untuk Ibu', 'Petualangan di Negeri Awan'], ans: 0, exp: 'Membahas pengetahuan/fakta kesehatan bersifat ekspositoris.' },
      { text: 'Sifat informasi dalam teks eksposisi adalah...', opts: ['Fiksi/khayalan', 'Faktual dan objektif', 'Hanya lelucon', 'Rahasia'], ans: 1, exp: 'Teks eksposisi bertumpu pada fakta dan pengetahuan nyata.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-02', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi tujuan penulis dalam teks eksposisi (menginformasikan, menjelaskan proses, atau mengajak secara logis).'],
    materialTitle: 'Tujuan Teks Eksposisi',
    blocks: [
      { type: 'list', title: '3 Tujuan Utama Teks Eksposisi', items: ['Menambah pengetahuan/wawasan pembaca tentang suatu topik.', 'Menjelaskan manfaat, sebab-akibat, atau perbandingan suatu hal secara logis.', 'Mengajak pembaca melakukan kebiasaan positif berdasarkan fakta (misal: hemat air, rajin mencuci tangan).'] },
    ],
    activityTitle: 'Latihan: Tujuan Teks Eksposisi',
    questions: [
      { text: 'Tujuan utama penulis membuat teks eksposisi berjudul "Pentingnya Sarapan Pagi bagi Pelajar" adalah...', opts: ['Menghibur pembaca dengan kisah lucu', 'Memberi informasi dan meyakinkan pembaca akan manfaat sarapan', 'Menceritakan liburan penulis', 'Menjual alat tulis'], ans: 1, exp: 'Eksposisi menjelaskan alasan ilmiah/logis mengapa sarapan penting.' },
      { text: 'Perbedaan tujuan teks eksposisi dengan teks narasi (dongeng) adalah...', opts: ['Eksposisi menambah pengetahuan faktual, sedangkan dongeng menghibur lewat cerita rekaan', 'Keduanya sama persis', 'Eksposisi tidak punya fakta', 'Dongeng selalu memakai grafik'], ans: 0, exp: 'Eksposisi = informasi faktual; dongeng = hiburan imajinatif.' },
      { text: 'Setelah membaca teks eksposisi yang baik, pembaca diharapkan menjadi...', opts: ['Lebih paham tentang topik yang dibahas', 'Semakin bingung', 'Lupa semua isi teks', 'Marah'], ans: 0, exp: 'Eksposisi bertujuan memperjelas informasi bagi pembaca.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-02', subSeq: 3,
    objectives: ['Siswa mampu mengenali pernyataan pendapat (tesis/gagasan utama) pada struktur teks eksposisi.'],
    materialTitle: 'Gagasan Utama (Tesis) Teks Eksposisi',
    blocks: [
      { type: 'table', title: '3 Bagian Struktur Teks Eksposisi', headers: ['Bagian', 'Isinya'], rows: [
        ['1. Pernyataan Pendapat (Tesis)', 'Memperkenalkan topik dan gagasan utama penulis di awal teks'],
        ['2. Argumentasi / Penjelasan', 'Menyajikan fakta, alasan, dan contoh pendukung'],
        ['3. Penegasan Ulang', 'Menyimpulkan kembali inti teks di paragraf penutup'],
      ]},
    ],
    activityTitle: 'Latihan: Gagasan Utama Eksposisi',
    questions: [
      { text: 'Bagian awal teks eksposisi yang memperkenalkan topik dan gagasan utama disebut...', opts: ['Pernyataan pendapat (tesis)', 'Konflik cerita', 'Orientasi dongeng', 'Daftar pustaka'], ans: 0, exp: 'Tesis memperkenalkan topik dan gagasan pokok eksposisi.' },
      { text: 'Bagian penutup teks eksposisi yang merangkum kembali inti bahasan disebut...', opts: ['Penegasan ulang', 'Judul', 'Tokoh', 'Latar'], ans: 0, exp: 'Penegasan ulang memperkuat simpulan di akhir teks.' },
      { text: 'Contoh kalimat tesis (gagasan utama) yang tepat adalah...', opts: ['Menanam pohon di sekitar rumah memberikan banyak manfaat bagi kesehatan dan kenyamanan lingkungan.', 'Suatu hari hiduplah seekor rusa.', 'Kapan kamu menanam pohon?', 'Ambillah cangkul sekarang!'], ans: 0, exp: 'Menyatakan gagasan utama topik secara jelas.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-02', subSeq: 4,
    objectives: ['Siswa mampu memilih informasi pendukung berupa fakta dan contoh yang relevan untuk teks eksposisi.'],
    materialTitle: 'Informasi Pendukung dalam Eksposisi',
    blocks: [
      { type: 'worked_example', level: 'Memilih Bukti', question: 'Topik: "Manfaat Bersepeda ke Sekolah". Informasi pendukung apa yang paling kuat?', steps: ['Fakta kesehatan: Bersepeda melatih kekuatan otot kaki dan jantung.', 'Fakta lingkungan: Sepeda tidak mengeluarkan asap knalpot sehingga udara tetap bersih.', 'Fakta ekonomi: Lebih hemat karena tidak membutuhkan bensin.'], answer: 'Tiga argumen faktual (kesehatan, lingkungan, hemat biaya) menguatkan gagasan utama.' },
    ],
    activityTitle: 'Latihan: Informasi Pendukung Eksposisi',
    questions: [
      { text: 'Untuk gagasan utama "Buah-buahan sangat baik bagi daya tahan tubuh", informasi pendukung yang PALING relevan adalah...', opts: ['Jeruk dan jambu biji kaya vitamin C yang membantu melawan penyakit.', 'Harga sepeda di toko cukup mahal.', 'Kemarin aku pergi ke taman.', 'Kucing suka minum susu.'], ans: 0, exp: 'Kandungan vitamin C pada buah mendukung klaim daya tahan tubuh.' },
      { text: 'Mengapa teks eksposisi memerlukan fakta dan contoh pendukung?', opts: ['Agar penjelasan masuk akal dan dipercaya pembaca', 'Agar teks sangat pendek', 'Agar seperti puisi', 'Supaya tidak perlu judul'], ans: 0, exp: 'Fakta membuat argumen eksposisi objektif dan meyakinkan.' },
      { text: 'Kata hubung sebab-akibat yang sering muncul dalam bagian penjelasan eksposisi adalah...', opts: ['Karena, sehingga, akibatnya', 'Wahai, aduhai', 'Kapan, siapa', 'Jangan, ayo'], ans: 0, exp: 'Hubungan sebab-akibat memperjelas argumen eksposisi.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-02', subSeq: 5,
    objectives: ['Siswa mampu menyusun kerangka dan menulis teks eksposisi sederhana 2–3 paragraf.'],
    materialTitle: 'Menyusun Teks Eksposisi Sederhana',
    blocks: [
      { type: 'list', title: '4 Langkah Menulis Teks Eksposisi', items: ['1. Tentukan topik bermanfaat (mis. Manfaat Menabung, Cara Menghemat Air).', '2. Tulis paragraf 1 (Tesis): perkenalkan topik dan gagasan utamanya.', '3. Tulis paragraf 2 (Penjelasan): berikan 2–3 fakta/alasan pendukung.', '4. Tulis paragraf 3 (Penegasan Ulang): simpulkan kembali dengan ajakan positif.'] },
    ],
    activityTitle: 'Latihan: Menyusun Teks Eksposisi',
    questions: [
      { text: 'Langkah PERTAMA sebelum mulai menulis teks eksposisi adalah...', opts: ['Menentukan topik dan tujuan penulisan', 'Menulis kesimpulan dulu', 'Mewarnai halaman', 'Menutup buku'], ans: 0, exp: 'Menentukan topik dan tujuan membuat arah tulisan jelas.' },
      { text: 'Urutan struktur penyusunan teks eksposisi yang benar adalah...', opts: ['Penegasan ulang → Tesis → Argumentasi', 'Tesis → Argumentasi/Penjelasan → Penegasan ulang', 'Argumentasi saja tanpa penutup', 'Konflik → Klimaks → Resolusi'], ans: 1, exp: 'Struktur baku: Tesis → Argumentasi → Penegasan ulang.' },
      { text: 'Manakah kalimat penegasan ulang yang cocok untuk teks tentang "Pentingnya Cuci Tangan"?', opts: ['Oleh karena itu, biasakan mencuci tangan pakai sabun agar tubuh terhindar dari kuman penyakit.', 'Sabun memiliki banyak warna menarik.', 'Air mengalir dari hulu ke hilir.', 'Ayo bermain bola di lapangan!'], ans: 0, exp: 'Merangkum dan menegaskan ulang inti pesan di bagian penutup.' },
    ],
  },

  // BAB 3: TEKS ARGUMENTASI SEDERHANA
  {
    topicCode: 'BIND-SD4-03', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian pendapat dan teks argumentasi sederhana.'],
    materialTitle: 'Pengertian Pendapat dan Argumentasi',
    blocks: [
      { type: 'text', text: 'Teks argumentasi adalah teks yang berisi PENDAPAT (sikap setuju/tidak setuju) penulis tentang suatu persoalan, disertai ALASAN dan BUKTI untuk meyakinkan pembaca.' },
      { type: 'tip', text: 'Beda singkat: Eksposisi fokus menjelaskan informasi; Argumentasi fokus meyakinkan pembaca agar sependapat dengan sikap penulis!' },
    ],
    activityTitle: 'Latihan: Pengertian Pendapat',
    questions: [
      { text: 'Teks yang berisi pendapat disertai alasan dan bukti kuat untuk meyakinkan pembaca disebut teks...', opts: ['Argumentasi', 'Dongeng', 'Puisi', 'Resep'], ans: 0, exp: 'Argumentasi bertujuan meyakinkan pembaca dengan argumen logis.' },
      { text: 'Contoh kalimat yang menyatakan sikap/pendapat adalah...', opts: ['Saya setuju sekolah menerapkan program membawa botol minum sendiri.', 'Botol minumku berwarna biru.', 'Jam dinding menunjukkan pukul sembilan.', 'Ada 28 siswa di kelas 4.'], ans: 0, exp: 'Kata "Saya setuju..." menyatakan pendapat pribadi.' },
      { text: 'Pendapat tanpa alasan sama sekali cenderung...', opts: ['Sulit meyakinkan orang lain', 'Pasti benar 100%', 'Lebih ilmiah', 'Menjadi fakta'], ans: 0, exp: 'Alasan logis adalah kekuatan utama sebuah argumen.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-03', subSeq: 2,
    objectives: ['Siswa mampu menyusun alasan pendukung yang logis dan relevan bagi suatu pendapat.'],
    materialTitle: 'Menyusun Alasan Pendukung',
    blocks: [
      { type: 'worked_example', level: 'Kuat vs Lemah', question: 'Pendapat: "Siswa sebaiknya membatasi waktu bermain gawai (HP) di rumah." Mana alasan yang KUAT dan mana yang LEMAH?', steps: ['Alasan LEMAH: "Karena pokoknya dilarang saja." (tidak menjelaskan sebab).', 'Alasan KUAT: "Karena terlalu lama menatap layar membuat mata cepat lelah dan mengurangi waktu belajar serta istirahat."'], answer: 'Alasan kuat menjelaskan dampak nyata secara masuk akal!' },
    ],
    activityTitle: 'Latihan: Alasan Pendukung',
    questions: [
      { text: 'Pendapat: "Piket kelas sebaiknya dikerjakan bersama seluruh anggota regu." Alasan pendukung paling logis adalah...', opts: ['Karena pekerjaan lebih ringan, cepat selesai, dan melatih kerja sama.', 'Karena sapunya berwarna kuning.', 'Karena aku tidak mau menyapu.', 'Karena kelasnya di lantai satu.'], ans: 0, exp: 'Menjelaskan manfaat langsung secara logis.' },
      { text: 'Konjungsi (kata hubung) yang biasa menghubungkan pendapat dengan alasannya adalah...', opts: ['Karena / Sebab', 'Atau', 'Sedangkan', 'Kecuali'], ans: 0, exp: '"Karena" dan "sebab" memperkenalkan alasan.' },
      { text: 'Alasan yang baik dalam argumentasi harus...', opts: ['Relevan (nyambung) dengan topik dan masuk akal', 'Menghina pihak lain', 'Panjang tapi tidak nyambung', 'Mengada-ada'], ans: 0, exp: 'Relevansi dan kelogisan adalah kunci argumen sehat.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-03', subSeq: 3,
    objectives: ['Siswa mampu membedakan kalimat fakta dan opini dalam teks argumentasi secara teliti.'],
    materialTitle: 'Fakta dan Opini dalam Argumentasi',
    blocks: [
      { type: 'table', title: 'Cek Cepat Fakta vs Opini', headers: ['Kalimat', 'Fakta / Opini?', 'Alasannya'], rows: [
        ['Satu tahun terdiri atas 12 bulan.', 'FAKTA', 'Kebenaran pasti, berlaku untuk semua orang'],
        ['Sebaiknya siswa kelas 4 membaca 1 buku setiap minggu.', 'OPINI', 'Saran/pendapat pribadi ("sebaiknya")'],
        ['Plastik butuh ratusan tahun untuk terurai di tanah.', 'FAKTA', 'Bukti ilmiah yang dapat diverifikasi'],
        ['Menurutku, buku sains lebih menarik daripada komik.', 'OPINI', 'Selera pribadi ("menurutku", "lebih menarik")'],
      ]},
    ],
    activityTitle: 'Latihan: Fakta dan Opini',
    questions: [
      { text: 'Kalimat yang merupakan FAKTA adalah...', opts: ['Pelajaran olahraga adalah pelajaran paling menyenangkan.', 'Air mendidih pada suhu 100°C pada tekanan normal.', 'Sebaiknya kita liburan ke pegunungan.', 'Nasi krawu adalah makanan terenak di dunia.'], ans: 1, exp: 'Titik didih air 100°C adalah fakta ilmiah.' },
      { text: 'Kata penanda yang sering muncul pada kalimat OPINI adalah...', opts: ['Menurut saya, sebaiknya, paling indah, seharusnya', 'Pada tahun 1945, sebanyak 25 siswa', 'Berjarak 5 kilometer', 'Terdiri atas 3 bagian'], ans: 0, exp: 'Kata subjektif menandakan penilaian/pendapat pribadi.' },
      { text: 'Dalam teks argumentasi, fakta berguna untuk...', opts: ['Memperkuat opini penulis agar makin meyakinkan', 'Menggantikan judul', 'Menghapus pendapat', 'Membuat cerita fiksi'], ans: 0, exp: 'Opini yang ditopang fakta menjadi argumen yang solid.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-03', subSeq: 4,
    objectives: ['Siswa mampu menyampaikan argumen sederhana secara runtut (Pendapat → Alasan → Contoh/Fakta).'],
    materialTitle: 'Menyampaikan Argumen Sederhana',
    blocks: [
      { type: 'formula', name: 'Pola PAC untuk Berargumen Keren', expression: 'P (Pendapat)  +  A (Alasan)  +  C (Contoh/Bukti)', note: 'Contoh: Saya setuju ada pojok baca di kelas (P) karena memudahkan siswa membaca saat istirahat (A), misalnya ketika menunggu bel pulang (C).' },
    ],
    activityTitle: 'Latihan: Menyampaikan Argumen',
    questions: [
      { text: 'Susunan argumen yang paling meyakinkan dan runtut adalah...', opts: ['Pendapat → Alasan logis → Contoh/fakta pendukung', 'Contoh saja tanpa pendapat', 'Marah-marah lalu diam', 'Mengulang satu kata terus'], ans: 0, exp: 'Pola PAC membuat argumen jelas, logis, dan konkret.' },
      { text: 'Lengkapi argumen: "Menurut saya, membawa bekal ke sekolah sangat baik karena lebih higienis, ... kita tahu sendiri bahan makanan yang dimasak ibu."', opts: ['misalnya / sebab', 'tetapi', 'walaupun', 'ataupun'], ans: 0, exp: 'Menghubungkan alasan dengan bukti nyata.' },
      { text: 'Saat menyampaikan argumen di kelas, intonasi suara sebaiknya...', opts: ['Tenang, jelas, dan sopan', 'Membentak teman', 'Sangat pelan tak terdengar', 'Mengejek'], ans: 0, exp: 'Argumen hebat disampaikan dengan sikap tenang dan santun.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-03', subSeq: 5,
    objectives: ['Siswa mampu menanggapi pendapat orang lain (setuju atau tidak setuju) secara santun dan konstruktif.'],
    materialTitle: 'Menanggapi Pendapat Secara Santun',
    blocks: [
      { type: 'table', title: 'Kalimat Santun Menanggapi Teman', headers: ['Situasi', 'Contoh Kalimat Santun'], rows: [
        ['Setuju', '"Saya sependapat dengan Alya, karena usulnya membuat piket lebih adil."'],
        ['Menambahkan', '"Ide Bima bagus, saya ingin menambahkan agar jadwalnya ditempel di dinding."'],
        ['Berbeda Pendapat', '"Maaf Raka, saya punya pandangan lain. Bagaimana jika kita pilih hari Jumat karena jam pulang lebih awal?"'],
      ]},
    ],
    activityTitle: 'Latihan: Menanggapi Pendapat',
    questions: [
      { text: 'Saat berbeda pendapat dengan teman, hal yang HARUS kita kritik adalah...', opts: ['Ide atau alasannya secara sopan, BUKAN mengejek orangnya', 'Wajah dan pakaiannya', 'Kelompok keluarganya', 'Suaranya'], ans: 0, exp: 'Diskusi sehat membahas gagasan, bukan menyerang pribadi.' },
      { text: 'Ungkapan santun untuk menambahkan gagasan teman adalah...', opts: ['"Idemu kurang lengkap semua!"', '"Usul Salsa sudah bagus, saya ingin menambahkan sedikit..."', '"Salah besar!"', '"Ganti saja dengan ideku!"'], ans: 1, exp: 'Menghargai ide teman terlebih dahulu menjaga suasana diskusi hangat.' },
      { text: 'Tujuan saling menanggapi pendapat dalam musyawarah kelas adalah...', opts: ['Mencari siapa yang paling menang sendiri', 'Menemukan keputusan terbaik bagi kepentingan bersama', 'Membuat keributan', 'Menghabiskan jam pelajaran'], ans: 1, exp: 'Musyawarah mencari mufakat terbaik bersama.' },
    ],
  },

  // BAB 4: TEKS LAPORAN PERJALANAN
  {
    topicCode: 'BIND-SD4-04', subSeq: 1,
    objectives: ['Siswa mampu mengidentifikasi struktur teks laporan perjalanan (judul, pembuka, isi kegiatan, penutup).'],
    materialTitle: 'Struktur Teks Laporan Perjalanan',
    blocks: [
      { type: 'table', title: '4 Bagian Laporan Perjalanan', headers: ['Bagian', 'Informasi yang Ditulis'], rows: [
        ['1. Judul', 'Nama tempat kunjungan/perjalanan secara singkat'],
        ['2. Pembuka', 'Hari/tanggal, tujuan tempat, peserta, waktu berangkat'],
        ['3. Isi (Urutan Kegiatan)', 'Apa yang dilihat, dipelajari, dan dialami secara kronologis'],
        ['4. Penutup', 'Waktu pulang, kesan, serta manfaat perjalanan'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Laporan Perjalanan',
    questions: [
      { text: 'Teks yang menceritakan pengalaman kunjungan ke suatu tempat secara faktual dan berurutan disebut...', opts: ['Laporan perjalanan', 'Dongeng fabel', 'Pantun jenaka', 'Surat undangan'], ans: 0, exp: 'Laporan perjalanan mencatat fakta kunjungan secara runtut.' },
      { text: 'Informasi tentang tanggal keberangkatan, peserta, dan tempat tujuan biasanya ditulis di bagian...', opts: ['Pembuka', 'Penutup', 'Daftar harga', 'Tanda tangan'], ans: 0, exp: 'Pembuka mengenalkan identitas perjalanan (siapa, kapan, ke mana).' },
      { text: 'Kesan dan manfaat yang diperoleh setelah kunjungan ditulis pada bagian...', opts: ['Judul', 'Penutup', 'Awal kalimat', 'Sampul'], ans: 1, exp: 'Penutup merangkum kepulangan dan kesan perjalanan.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-04', subSeq: 2,
    objectives: ['Siswa mampu mencatat informasi tempat, waktu, objek pengamatan, dan kegiatan penting saat kunjungan.'],
    materialTitle: 'Informasi Tempat dan Kegiatan',
    blocks: [
      { type: 'visual_cards', title: 'Checklist Catatan Saat Kunjungan (ADIKSIMBA)', cards: [
        { emoji: '📍', label: 'Di Mana?', sub: 'Nama lokasi lengkap (mis. Taman Wisata Edukasi / Perpustakaan Daerah)' },
        { emoji: '📅', label: 'Kapan?', sub: 'Hari, tanggal, jam berangkat dan jam pulang' },
        { emoji: '👥', label: 'Siapa?', sub: 'Peserta rombongan dan pemandu/narasumber' },
        { emoji: '🔍', label: 'Apa Saja?', sub: 'Hal menarik yang diamati dan dipelajari di lokasi' },
      ]},
    ],
    activityTitle: 'Latihan: Informasi Tempat & Kegiatan',
    questions: [
      { text: 'Dalam laporan perjalanan, informasi yang ditulis harus berdasarkan...', opts: ['Pengamatan nyata saat di lokasi', 'Karangan khayalan', 'Film kartun', 'Tebakan teman'], ans: 0, exp: 'Laporan bersifat faktual sesuai pengalaman langsung.' },
      { text: 'Penulisan nama tempat dan hari yang benar sesuai ejaan adalah...', opts: ['hari sabtu di perpustakaan daerah gresik', 'hari Sabtu di Perpustakaan Daerah Gresik', 'Hari sabtu di perpustakaan Daerah gresik', 'HARI SABTU DI GRESIK'], ans: 1, exp: 'Nama hari dan nama instansi/daerah diawali huruf kapital.' },
      { text: 'Membawa buku catatan kecil saat karya wisata bermanfaat agar...', opts: ['Data penting dan jam kegiatan tidak terlupa saat menulis laporan', 'Tas terasa penuh', 'Tidak usah melihat objek', 'Bisa menggambar komik saja'], ans: 0, exp: 'Catatan lapangan menjaga akurasi fakta laporan.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-04', subSeq: 3,
    objectives: ['Siswa mampu mengurutkan peristiwa dalam laporan perjalanan secara kronologis menggunakan penanda waktu.'],
    materialTitle: 'Urutan Peristiwa (Kronologis)',
    blocks: [
      { type: 'worked_example', level: 'Urutan Waktu', question: 'Susun catatan kunjungan ke Museum/Perpustakaan agar kronologis!', steps: ['07.30: Berkumpul dan berangkat dari sekolah.', '08.15: Tiba di lokasi, mendengarkan pengarahan petugas.', '09.00: Berkeliling mengamati koleksi dan mencatat informasi.', '11.30: Berfoto bersama lalu kembali ke sekolah dengan selamat.'], answer: 'Urut dari berangkat → kegiatan di lokasi → pulang.' },
    ],
    activityTitle: 'Latihan: Urutan Peristiwa',
    questions: [
      { text: 'Penyusunan cerita laporan perjalanan mengikuti urutan waktu kejadian dari awal hingga akhir disebut urutan...', opts: ['Kronologis', 'Acak', 'Mundur total', 'Abjad'], ans: 0, exp: 'Kronologis berarti berurutan sesuai jalannya waktu.' },
      { text: 'Kata penanda urutan waktu yang tepat dalam laporan perjalanan adalah...', opts: ['Pertama, setelah itu, kemudian, akhirnya', 'Tetapi, melainkan, namun', 'Apakah, mengapa', 'Atau, maupun'], ans: 0, exp: 'Konjungsi temporal merangkai alur kegiatan.' },
      { text: 'Urutan yang benar: (1) Tiba kembali di sekolah, (2) Berangkat naik bus, (3) Mengamati koleksi di lokasi. Urutannya adalah...', opts: ['1-2-3', '2-3-1', '3-2-1', '2-1-3'], ans: 1, exp: 'Berangkat (2) → berkegiatan di lokasi (3) → tiba kembali (1).' },
    ],
  },
  {
    topicCode: 'BIND-SD4-04', subSeq: 4,
    objectives: ['Siswa mampu menulis teks laporan perjalanan sederhana dengan bahasa baku dan ejaan tepat.'],
    materialTitle: 'Menulis Laporan Perjalanan',
    blocks: [
      { type: 'list', title: 'Tips Menulis Laporan Perjalanan yang Enak Dibaca', items: ['Gunakan bahasa Indonesia yang baku, jelas, dan sopan.', 'Tulis setiap tahapan dalam paragraf terpisah (Pembuka, Isi, Penutup).', 'Periksa penulisan kata depan "di" (dipisah untuk tempat: "di pasar", "di taman")!', 'Sertakan pelajaran baru yang kamu peroleh dari perjalanan tersebut.'] },
      { type: 'misconception', wrong: 'Menulis "dipasar" atau "disekolah" digabung.', right: 'Jika menunjukkan TEMPAT, kata depan "di" SELALU DIPISAH: "di pasar", "di sekolah", "di Gresik"!' },
    ],
    activityTitle: 'Latihan: Menulis Laporan Perjalanan',
    questions: [
      { text: 'Penulisan kata depan "di" yang BENAR adalah...', opts: ['disekolah dan ditaman', 'di sekolah dan di taman', 'dimakan dan di tulis', 'diambil dan di bawa'], ans: 1, exp: '"di" sebagai kata depan tempat ditulis terpisah ("di sekolah"); sebagai awalan kata kerja ditulis serangkai ("dimakan", "ditulis").' },
      { text: 'Kalimat penutup yang tepat untuk laporan perjalanan adalah...', opts: ['Pukul 12.00 kami tiba kembali di sekolah dengan hati gembira dan pengetahuan baru.', 'Pukul 07.00 kami baru bangun tidur.', 'Tiket masuknya berwarna hijau.', 'Siapa yang mau ikut lagi?'], ans: 0, exp: 'Menyebutkan waktu pulang dan kesan positif.' },
      { text: 'Hal yang sebaiknya dicek kembali sebelum mengumpulkan laporan perjalanan adalah...', opts: ['Ejaan huruf kapital, tanda baca, dan kelengkapan urutan kegiatan', 'Apakah kertasnya sudah dilipat kecil', 'Menghapus tanggal kegiatan', 'Mengganti semua fakta jadi dongeng'], ans: 0, exp: 'Penyuntingan memastikan laporan rapi dan akurat.' },
    ],
  },

  // BAB 5: TEKS PETUNJUK ARAH
  {
    topicCode: 'BIND-SD4-05', subSeq: 1,
    objectives: ['Siswa mampu memahami isi teks petunjuk arah (rute menuju suatu lokasi) dengan cermat.'],
    materialTitle: 'Memahami Petunjuk Arah',
    blocks: [
      { type: 'story_panel', title: 'Jangan Sampai Tersesat!', lines: [
        { speaker: 'Raka', avatar: '👦', text: 'Permisi Pak, di mana letak perpustakaan daerah dari gerbang sekolah ini?' },
        { speaker: 'Pak Satpam', avatar: '👮', text: 'Dari gerbang, jalan lurus ke timur sampai perempatan, lalu belok kiri. Perpustakaan ada di sebelah kanan jalan, di seberang taman!' },
      ]},
      { type: 'tip', text: 'Petunjuk arah yang jelas selalu menyebutkan TITIK AWAL, ARAH GERAK, PATOKAN (pertigaan/perempatan/bangunan), dan POSISI AKHIR!' },
    ],
    activityTitle: 'Latihan: Memahami Petunjuk Arah',
    questions: [
      { text: 'Tujuan utama teks petunjuk arah adalah...', opts: ['Memandu seseorang mencapai lokasi tujuan dengan tepat tanpa tersesat', 'Menceritakan sejarah kota', 'Menghitung luas bangunan', 'Menjual tiket'], ans: 0, exp: 'Petunjuk arah memandu rute dari titik awal ke tujuan.' },
      { text: 'Unsur penting yang memudahkan orang mengikuti petunjuk arah adalah adanya...', opts: ['Patokan (tugu, masjid, perempatan, taman) dan arah belok yang jelas', 'Puisi panjang', 'Daftar nilai', 'Cerita dongeng'], ans: 0, exp: 'Patokan nyata membantu pencari alamat memastikan posisinya.' },
      { text: 'Jika seseorang bertanya arah jalan kepada kita, bahasa yang kita gunakan harus...', opts: ['Singkat, jelas, runtut, dan sopan', 'Berbelit-belit', 'Sangat cepat', 'Memakai teka-teki'], ans: 0, exp: 'Petunjuk yang jelas dan sopan sangat membantu penanya.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-05', subSeq: 2,
    objectives: ['Siswa mampu membaca denah sederhana dan mengidentifikasi posisi bangunan di kanan, kiri, seberang, atau antara dua tempat.'],
    materialTitle: 'Membaca Informasi Lokasi pada Denah',
    blocks: [
      { type: 'visual_cards', title: 'Istilah Posisi pada Denah', cards: [
        { emoji: '↔️', label: 'Di Seberang / Di Depan', sub: 'Terpisah oleh jalan raya di hadapannya' },
        { emoji: '🏘️', label: 'Di Antara', sub: 'Berada di tengah-tengah dua bangunan (mis. Apotek di antara Bank dan Toko Buku)' },
        { emoji: '🚦', label: 'Pertigaan & Perempatan', sub: 'Persimpangan 3 jalan (pertigaan) atau 4 jalan (perempatan)' },
      ]},
    ],
    activityTitle: 'Latihan: Membaca Denah Lokasi',
    questions: [
      { text: 'Gambar sederhana yang menunjukkan letak jalan, rumah, atau ruangan disebut...', opts: ['Denah', 'Puisi', 'Tabel frekuensi', 'Resep'], ans: 0, exp: 'Denah menggambarkan tata letak lokasi secara sederhana.' },
      { text: 'Jika Toko Roti berada tepat di tengah-tengah antara Sekolah dan Puskesmas, maka letak Toko Roti adalah ... Sekolah dan Puskesmas.', opts: ['Di seberang', 'Di antara', 'Di belakang', 'Di atas'], ans: 1, exp: '"Di antara" menyatakan posisi di tengah dua objek.' },
      { text: 'Persimpangan tempat bertemunya empat ruas jalan disebut...', opts: ['Pertigaan', 'Perempatan', 'Jalan buntu', 'Bundaran'], ans: 1, exp: 'Empat jalan bertemu membentuk perempatan.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-05', subSeq: 3,
    objectives: ['Siswa mampu menggunakan kosakata arah relatif (kanan, kiri, lurus) dan arah mata angin (utara, selatan, timur, barat).'],
    materialTitle: 'Menggunakan Kata Arah yang Tepat',
    blocks: [
      { type: 'table', title: '2 Jenis Kata Arah', headers: ['Jenis', 'Kosakata', 'Contoh Pemakaian'], rows: [
        ['Arah Relatif (sudut pandang pejalan)', 'Lurus terus, belok kanan, belok kiri, putar balik', 'Jalan lurus 200 m, lalu belok kanan di pertigaan.'],
        ['Arah Mata Angin (tetap pada denah)', 'Utara, timur, selatan, barat', 'Pasar terletak di sebelah utara alun-alun.'],
      ]},
      { type: 'misconception', wrong: 'Bingung menentukan kiri/kanan pada denah tanpa membayangkan arah hadap pejalan.', right: 'Bayangkan kamu sedang berjalan menghadap arah gerak di denah! Kalau berjalan ke arah selatan (bawah denah), tangan kananmu ada di sebelah BARAT (kiri kertas).' },
    ],
    activityTitle: 'Latihan: Kata Arah',
    questions: [
      { text: 'Kamu berjalan lurus ke arah UTARA, lalu belok ke KANAN. Sekarang kamu menghadap ke arah...', opts: ['Barat', 'Timur', 'Selatan', 'Utara'], ans: 1, exp: 'Menghadap Utara → kanan adalah Timur.' },
      { text: 'Kamu berjalan ke arah SELATAN (bawah peta), lalu belok ke KIRI. Sekarang kamu menghadap ke arah...', opts: ['Timur', 'Barat', 'Utara', 'Selatan'], ans: 0, exp: 'Menghadap Selatan: kiri = Timur, kanan = Barat.' },
      { text: 'Kata kerja perintah yang tepat dalam petunjuk arah adalah...', opts: ['Luruslah, beloklah, seberangilah', 'Berjalan-jalanlah santai saja', 'Tidurlah', 'Bacalah puisi'], ans: 0, exp: 'Kata kerja imperatif arah membuat instruksi tegas dan jelas.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-05', subSeq: 4,
    objectives: ['Siswa mampu menulis petunjuk rute singkat dari sekolah ke rumah atau fasilitas umum di sekitarnya.'],
    materialTitle: 'Membuat Petunjuk Menuju Suatu Tempat',
    blocks: [
      { type: 'worked_example', level: 'Menulis Rute', question: 'Buat petunjuk arah dari Rumah ke Sekolah yang berjarak 500 meter!', steps: ['1. Keluar dari gerbang rumah, belok kanan ke Jalan Melati.', '2. Jalan lurus sekitar 300 meter hingga menemui pertigaan Masjid Al-Ikhlas.', '3. Belok kiri masuk Jalan Pendidikan, lurus 200 meter.', '4. SD Negeri berada di sebelah kiri jalan, tepat di seberang lapangan.'], answer: 'Rute 4 langkah lengkap dengan nama jalan, jarak kira-kira, dan patokan.' },
    ],
    activityTitle: 'Latihan: Membuat Petunjuk Arah',
    questions: [
      { text: 'Urutan informasi yang baik saat menuliskan petunjuk arah adalah...', opts: ['Dari titik awal → langkah belok & patokan berurutan → posisi tujuan akhir', 'Dari tujuan mundur acak', 'Hanya menyebut nama kota', 'Menyebutkan harga tiket saja'], ans: 0, exp: 'Rute ditulis runtut dari titik berangkat sampai tujuan.' },
      { text: 'Menyebutkan nama jalan (mis. Jalan Kartini) dan patokan bangunan dalam petunjuk arah berguna untuk...', opts: ['Memudahkan pembaca mencocokkan posisi di lapangan', 'Membuat kalimat jadi panjang tanpa guna', 'Menyamarkan lokasi', 'Mengganti arah mata angin'], ans: 0, exp: 'Nama jalan dan patokan mencegah salah belok.' },
      { text: 'Penulisan "Jalan Pemuda" dalam teks petunjuk arah harus menggunakan huruf...', opts: ['Kecil semua', 'Kapital di awal setiap kata nama jalan', 'Miring semua', 'Tanda seru semua'], ans: 1, exp: 'Nama jalan (unsur geografis/nama tempat) diawali huruf kapital.' },
    ],
  },

  // BAB 6: CERITA INSPIRATIF DAN DONGENG
  {
    topicCode: 'BIND-SD4-06', subSeq: 1,
    objectives: ['Siswa mampu menganalisis unsur intrinsik lengkap dalam cerita inspiratif dan dongeng (tema, tokoh, latar, alur, sudut pandang, amanat).'],
    materialTitle: 'Unsur Intrinsik Cerita',
    blocks: [
      { type: 'table', title: '6 Unsur Intrinsik (Pembangun dari Dalam Cerita)', headers: ['Unsur', 'Penjelasan'], rows: [
        ['Tema', 'Ide dasar cerita (kejujuran, persahabatan, kegigihan)'],
        ['Tokoh & Penokohan', 'Pelaku cerita beserta sifatnya'],
        ['Latar', 'Tempat, waktu, dan suasana'],
        ['Alur', 'Urutan peristiwa (pengenalan → konflik → klimaks → penyelesaian)'],
        ['Sudut Pandang', 'Posisi pencerita: orang pertama ("Aku") atau orang ketiga ("Ia/Nama tokoh")'],
        ['Amanat', 'Pesan moral yang ingin disampaikan penulis'],
      ]},
    ],
    activityTitle: 'Latihan: Unsur Intrinsik',
    questions: [
      { text: 'Jika sebuah cerita menggunakan kata ganti "Aku" sebagai pelaku utamanya, sudut pandang cerita itu adalah...', opts: ['Orang pertama', 'Orang ketiga', 'Tanpa tokoh', 'Sudut siku-siku'], ans: 0, exp: '"Aku/Saya" = sudut pandang orang pertama; "Ia/Dia/Nama" = orang ketiga.' },
      { text: 'Unsur yang membangun cerita dari DALAM teks itu sendiri disebut unsur...', opts: ['Intrinsik', 'Ekstrinsik', 'Fisik', 'Geografis'], ans: 0, exp: 'Intrinsik berasal dari dalam karya sastra.' },
      { text: 'Gagasan pokok yang melandasi keseluruhan cerita disebut...', opts: ['Tema', 'Latar', 'Sampul', 'Halaman'], ans: 0, exp: 'Tema adalah pokok pikiran utama cerita.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-06', subSeq: 2,
    objectives: ['Siswa mampu menganalisis karakter tokoh utama dan tokoh pendukung melalui dialog dan tindakan.'],
    materialTitle: 'Menganalisis Karakter Tokoh',
    blocks: [
      { type: 'visual_cards', title: 'Cara Mengenali Watak Tokoh dalam Cerita', cards: [
        { emoji: '💬', label: 'Dari Ucapan / Dialognya', sub: 'Kata-kata yang santun atau kasar mencerminkan sifat tokoh' },
        { emoji: '🏃', label: 'Dari Tindakannya', sub: 'Mau menolong teman jatuh → berwatak peduli & penolong' },
        { emoji: '🗣️', label: 'Dari Keterangan Penulis', sub: 'Penulis menyebut langsung: "Bima dikenal anak yang jujur."' },
      ]},
    ],
    activityTitle: 'Latihan: Karakter Tokoh',
    questions: [
      { text: '"Meskipun tasnya basah kuyup kehujanan, Dito tetap menuntun nenek itu menyeberang jalan." Watak Dito adalah...', opts: ['Egois', 'Peduli dan suka menolong', 'Penakut', 'Pemarah'], ans: 1, exp: 'Rela membantu orang lain walau sedang kesulitan menunjukkan kepedulian tinggi.' },
      { text: 'Tokoh yang memiliki peran utama dan paling banyak diceritakan dari awal sampai akhir disebut...', opts: ['Tokoh utama', 'Tokoh figuran', 'Penonton', 'Penulis'], ans: 0, exp: 'Tokoh utama menjadi pusat jalan cerita.' },
      { text: 'Tokoh yang menentang tokoh utama dan sering memunculkan konflik disebut tokoh...', opts: ['Protagonis', 'Antagonis', 'Narator', 'Pemandu'], ans: 1, exp: 'Antagonis adalah tokoh penentang yang memicu konflik.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-06', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi konflik (masalah), puncak masalah (klimaks), dan penyelesaian (resolusi) dalam cerita.'],
    materialTitle: 'Konflik dan Penyelesaian Cerita',
    blocks: [
      { type: 'story_panel', title: 'Jantungnya Cerita Seru: Konflik & Resolusi!', lines: [
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Cerita jadi seru karena ada KONFLIK (masalah yang dihadapi tokoh). Puncak tegangnya disebut KLIMAKS, lalu diakhiri RESOLUSI (penyelesaian masalah)!' },
        { speaker: 'Salsa', avatar: '👧', text: 'Misalnya sepatu lari tokoh rusak pas mau lomba (konflik), lalu ia meminjam sepatu dan berjuang hingga finis (resolusi)!' },
      ]},
    ],
    activityTitle: 'Latihan: Konflik & Penyelesaian',
    questions: [
      { text: 'Masalah atau pertentangan yang dialami tokoh dalam sebuah cerita disebut...', opts: ['Konflik', 'Judul', 'Latar waktu', 'Sampul'], ans: 0, exp: 'Konflik adalah persoalan yang menggerakkan alur cerita.' },
      { text: 'Bagian akhir cerita ketika masalah yang dialami tokoh sudah menemukan jalan keluar disebut...', opts: ['Pengenalan', 'Penyelesaian (resolusi)', 'Puncak masalah', 'Daftar isi'], ans: 1, exp: 'Resolusi menyelesaikan konflik cerita.' },
      { text: 'Dalam cerita "Alya lupa membawa uang saku lalu teman-temannya berbagi bekal bersama", konflik ceritanya adalah...', opts: ['Alya lupa membawa uang saku', 'Teman-teman berbagi bekal', 'Bel sekolah berbunyi', 'Kelas sangat bersih'], ans: 0, exp: 'Masalah awalnya adalah Alya lupa membawa uang saku.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-06', subSeq: 4,
    objectives: ['Siswa mampu menggali pesan moral (amanat) dari cerita inspiratif dan mengaitkannya dengan kehidupan nyata.'],
    materialTitle: 'Menemukan Pesan Moral Cerita',
    blocks: [
      { type: 'worked_example', level: 'Refleksi Moral', question: 'Dalam sebuah cerita, seorang anak mengembalikan dompet yang ditemukannya di pasar meski ia sendiri sedang membutuhkan uang untuk membeli buku. Apa pesan moralnya?', steps: ['Amati pilihan sulit tokoh: tetap jujur meski sedang butuh.', 'Tarik nilai kebaikannya: kejujuran lebih berharga daripada harta.'], answer: 'Kita harus menjunjung tinggi kejujuran dalam keadaan apa pun.' },
    ],
    activityTitle: 'Latihan: Pesan Moral',
    questions: [
      { text: 'Cerita tentang atlet muda yang sempat gagal berkali-kali namun terus berlatih hingga akhirnya juara mengandung pesan moral...', opts: ['Pantang menyerah dan kerja keras membuahkan hasil', 'Jika gagal sekali langsung berhenti', 'Menang karena curang', 'Latihan tidak penting'], ans: 0, exp: 'Kegigihan dan disiplin membawa keberhasilan.' },
      { text: 'Pesan moral yang baik setelah kita baca seharusnya...', opts: ['Diterapkan dalam sikap sehari-hari', 'Langsung dilupakan', 'Ditertawakan', 'Disembunyikan'], ans: 0, exp: 'Nilai moral cerita bermanfaat bila dipraktikkan.' },
      { text: 'Cerita rakyat dan dongeng Nusantara umumnya diwariskan turun-temurun untuk...', opts: ['Menanamkan nilai budi pekerti dan kearifan lokal', 'Mengajarkan sifat sombong', 'Menakut-nakuti anak', 'Menghapus sejarah'], ans: 0, exp: 'Dongeng adalah media pendidikan karakter.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-06', subSeq: 5,
    objectives: ['Siswa mampu menceritakan kembali isi dongeng/cerita inspiratif secara lisan dan tertulis dengan runtut.'],
    materialTitle: 'Menceritakan Kembali Cerita',
    blocks: [
      { type: 'list', title: 'Panduan Menceritakan Kembali Seperti Pendongeng Hebat', items: ['1. Catat peta cerita: Tokoh – Latar – Masalah – Penyelesaian – Amanat.', '2. Rangkai ulang dengan kata-katamu sendiri tanpa mengubah inti cerita.', '3. Gunakan variasi suara dan mimik wajah saat bercerita secara lisan!'] },
    ],
    activityTitle: 'Latihan: Menceritakan Kembali',
    questions: [
      { text: 'Hal yang TIDAK boleh diubah saat menceritakan kembali isi cerita orang lain adalah...', opts: ['Gaya kalimat sendiri', 'Alur pokok, tokoh utama, dan pesan asli cerita', 'Intonasi suara', 'Gerakan tangan'], ans: 1, exp: 'Inti cerita dan amanat harus tetap setia pada karya aslinya.' },
      { text: 'Membuat peta pikiran (tokoh, masalah, solusi) sebelum menceritakan kembali berguna untuk...', opts: ['Menjaga cerita tetap runtut dan tidak ada bagian penting yang terlewat', 'Menghafal huruf satu per satu', 'Menghapus akhir cerita', 'Mengganti tokoh'], ans: 0, exp: 'Peta cerita menjadi panduan alur saat bercerita.' },
      { text: 'Agar pendengar tidak bosan saat kita mendongeng di depan kelas, kita dapat...', opts: ['Membedakan intonasi suara tiap tokoh dan berekspresi', 'Membaca datar sambil menunduk', 'Berbisik pelan', 'Sangat tergesa-gesa'], ans: 0, exp: 'Ekspresi dan intonasi menghidupkan suasana cerita.' },
    ],
  },

  // BAB 7: PUISI ANAK
  {
    topicCode: 'BIND-SD4-07', subSeq: 1,
    objectives: ['Siswa mampu menafsirkan makna keseluruhan bait puisi anak secara tepat.'],
    materialTitle: 'Memahami Makna Puisi Anak',
    blocks: [
      { type: 'story_panel', title: 'Puisi: Guru Pahlawanku', lines: [
        { speaker: 'Puisi', avatar: '📝', text: 'Setiap pagi kau sambut kami dengan senyum / Tanganmu sabar menuntun aksara demi aksara / Kau bukakan jendela dunia yang luas / Jasamu abadi di lubuk hati kami.' },
      ]},
      { type: 'worked_example', level: 'Memaknai Puisi', question: 'Apa makna utama bait puisi di atas?', steps: ['"Menuntun aksara" = mengajar membaca & menulis.', '"Membuka jendela dunia" = memberi ilmu pengetahuan yang luas.', 'Kesimpulan: Ungkapan rasa terima kasih dan hormat atas kesabaran dan jasa guru.'], answer: 'Rasa terima kasih atas jasa guru yang sabar mendidik dan memberi ilmu.' },
    ],
    activityTitle: 'Latihan: Makna Puisi',
    questions: [
      { text: 'Ungkapan "jendela dunia" pada puisi "Guru Pahlawanku" bermakna...', opts: ['Kaca jendela kelas', 'Ilmu pengetahuan dan wawasan luas', 'Pintu gerbang', 'Papan tulis'], ans: 1, exp: 'Ilmu pengetahuan dan buku sering dikiaskan sebagai jendela dunia.' },
      { text: 'Cara terbaik memahami makna sebuah puisi adalah...', opts: ['Membaca berulang kali dengan penuh penghayatan dan memaknai kata kiasnya', 'Menghitung jumlah hurufnya saja', 'Membaca judulnya saja', 'Melewati bait tengah'], ans: 0, exp: 'Puisi padat makna sehingga perlu dibaca saksama.' },
      { text: 'Suasana perasaan yang tergambar pada puisi "Guru Pahlawanku" adalah...', opts: ['Marah dan kesal', 'Haru, hormat, dan penuh rasa terima kasih', 'Takut', 'Bingung'], ans: 1, exp: 'Pilihan katanya memancarkan rasa syukur dan hormat.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-07', subSeq: 2,
    objectives: ['Siswa mampu memilih diksi (pilihan kata) yang tepat, indah, dan berima dalam puisi anak.'],
    materialTitle: 'Pilihan Kata (Diksi) dalam Puisi',
    blocks: [
      { type: 'flashcards', title: 'Ganti Kata Biasa Jadi Lebih Puitis! (Klik!)', cards: [
        { emoji: '🌧️', front: 'Hujan turun pelan →', back: 'Rintik gerimis menyapa bumi' },
        { emoji: '🌅', front: 'Pagi hari tiba →', back: 'Fajar menyingsing di ufuk timur' },
        { emoji: '🌊', front: 'Ombak bergerak →', back: 'Ombak menari di bibir pantai' },
      ]},
    ],
    activityTitle: 'Latihan: Pilihan Kata Puisi',
    questions: [
      { text: 'Pemilihan kata-kata yang tepat dan indah oleh penyair dalam puisi disebut...', opts: ['Diksi', 'Alur', 'Denah', 'Fakta'], ans: 0, exp: 'Diksi = pilihan kata.' },
      { text: 'Lengkapi baris puisi agar berima serasi: "Angin berembus di tepi pantai / Nyiur melambai tampak..."', opts: ['damai / permai', 'keras', 'panas', 'ribut'], ans: 0, exp: '"Pantai" berima akhiran -ai dengan "damai" atau "permai".' },
      { text: 'Kata "fajar" dalam puisi bermakna...', opts: ['Cahaya kemerahan menjelang matahari terbit (pagi)', 'Tengah malam', 'Hujan badai', 'Awan hitam'], ans: 0, exp: 'Fajar menandai datangnya pagi.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-07', subSeq: 3,
    objectives: ['Siswa mampu mengenal penggunaan bahasa kias sederhana (personifikasi & perbandingan/simile) dalam puisi.'],
    materialTitle: 'Bahasa Kias Sederhana dalam Puisi',
    blocks: [
      { type: 'visual_cards', title: '2 Gaya Bahasa Kias Populer di Puisi Anak', cards: [
        { emoji: '🌿', label: 'Personifikasi (Seolah Manusia)', sub: 'Benda mati/alam diberi sifat manusia: "Daun kelapa melambai", "Angin berbisik lembut"' },
        { emoji: '✨', label: 'Perbandingan / Simile', sub: 'Membandingkan pakai kata "seperti/bagai": "Senyummu secerah mentari pagi"' },
      ]},
    ],
    activityTitle: 'Latihan: Bahasa Kias Sederhana',
    questions: [
      { text: '"Ombak berlari mengejar tepian pantai." Kalimat puisi itu menggunakan bahasa kias seolah benda alam bertingkah seperti manusia yang disebut...', opts: ['Personifikasi', 'Fakta', 'Laporan', 'Tabel'], ans: 0, exp: 'Personifikasi mengumpamakan benda mati/alam hidup seperti manusia.' },
      { text: 'Makna kalimat kias "Ayah membanting tulang demi keluarga" adalah...', opts: ['Ayah menjatuhkan tulang', 'Ayah bekerja sangat keras', 'Ayah sedang berolahraga', 'Ayah sedang memasak sup'], ans: 1, exp: 'Membanting tulang adalah ungkapan (idiom) yang berarti bekerja keras.' },
      { text: 'Manakah kalimat yang mengandung bahasa kias perbandingan (simile)?', opts: ['Hatinya lembut bagaikan kapas.', 'Kapas berwarna putih.', 'Rumahku ada di pinggir jalan.', 'Alya kelas 4 SD.'], ans: 0, exp: 'Kata "bagaikan" membandingkan kelembutan hati dengan kapas.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-07', subSeq: 4,
    objectives: ['Siswa mampu mendeklamasikan/membaca puisi dengan lafal, intonasi, jeda, dan ekspresi yang tepat.'],
    materialTitle: 'Membaca Puisi dengan Intonasi & Ekspresi',
    blocks: [
      { type: 'table', title: 'Panduan Tanda Jeda & Penekanan Membaca Puisi', headers: ['Tanda', 'Artinya Saat Membaca'], rows: [
        ['/', 'Berhenti sebentar (1 ketukan)'],
        ['//', 'Berhenti agak lama (akhir baris/ganti makna)'],
        ['///', 'Berhenti total (akhir bait/akhir puisi)'],
        ['Ekspresi & Gestur', 'Wajah dan gerakan tangan alami mengikuti isi puisi (ceria, haru, atau semangat)'],
      ]},
    ],
    activityTitle: 'Latihan: Membaca Puisi',
    questions: [
      { text: 'Membacakan puisi tanpa membawa teks (hafal) disertai gerak tubuh dan ekspresi yang kuat disebut...', opts: ['Deklamasi', 'Wawancara', 'Diskusi', 'Dikte'], ans: 0, exp: 'Deklamasi adalah seni membawakan puisi dengan penghayatan dan ekspresi.' },
      { text: 'Tanda jeda (//) pada teks latihan puisi artinya pembaca harus...', opts: ['Berhenti agak lama', 'Membaca sangat cepat', 'Berteriak', 'Mengulang dari awal'], ans: 0, exp: '/ = jeda singkat, // = jeda agak lama, /// = berhenti selesai.' },
      { text: 'Penghayatan saat membaca puisi bertema "Kasih Sayang Ibu" paling tepat dibawakan dengan nada...', opts: ['Lembut, syahdu, dan tulus', 'Teriak marah', 'Tertawa keras', 'Datar seperti robot'], ans: 0, exp: 'Nada harus selaras dengan suasana puisi.' },
    ],
  },

  // BAB 8: MENULIS DAN PRESENTASI
  {
    topicCode: 'BIND-SD4-08', subSeq: 1,
    objectives: ['Siswa mampu merancang kerangka karangan dari satu gagasan utama menjadi beberapa subgagasan.'],
    materialTitle: 'Menulis Teks Berdasarkan Gagasan',
    blocks: [
      { type: 'worked_example', level: 'Kerangka Karangan', question: 'Buat kerangka tulisan 3 paragraf bertema "Menjaga Kebersihan Sungai"!', steps: ['Paragraf 1: Manfaat sungai bagi masyarakat.', 'Paragraf 2: Bahaya membuang sampah ke sungai.', 'Paragraf 3: Ajakan dan cara menjaga kebersihan sungai.'], answer: 'Kerangka terstruktur membuat tulisan mengalir rapi tanpa bingung menulis apa berikutnya!' },
    ],
    activityTitle: 'Latihan: Menulis dari Gagasan',
    questions: [
      { text: 'Manfaat membuat kerangka karangan sebelum mulai menulis teks panjang adalah...', opts: ['Tulisan lebih terarah, runtut, dan tidak melenceng dari topik', 'Membuat tulisan jadi pendek', 'Supaya tidak perlu judul', 'Agar lebih lama selesai'], ans: 0, exp: 'Kerangka karangan menjaga struktur gagasan tetap rapi.' },
      { text: 'Jika ingin menulis tentang "Manfaat Menanam Sayur di Pekarangan", gagasan yang TIDAK cocok dimasukkan adalah...', opts: ['Cara menanam kangkung di pot', 'Manfaat sayur segar bagi kesehatan', 'Jadwal pertandingan sepak bola dunia', 'Penghematan biaya belanja dapur'], ans: 2, exp: 'Jadwal sepak bola tidak relevan dengan topik menanam sayur.' },
      { text: 'Ide atau gagasan menulis dapat diperoleh dari...', opts: ['Pengalaman sendiri, pengamatan lingkungan, dan membaca buku', 'Menyalin tulisan orang lain persis lalu mengakuinya sendiri', 'Tidur saja', 'Menebak tanpa tahu topiknya'], ans: 0, exp: 'Pengamatan, pengalaman, dan literasi adalah sumber gagasan asli.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-08', subSeq: 2,
    objectives: ['Siswa mampu mengembangkan satu kalimat utama menjadi paragraf utuh yang efektif dan padu.'],
    materialTitle: 'Mengembangkan Paragraf',
    blocks: [
      { type: 'worked_example', level: 'Kembangkan Kalimat!', question: 'Kembangkan kalimat utama: "Perpustakaan sekolahku adalah tempat yang nyaman untuk belajar."', steps: ['Tambahkan detail ruangan: Ruangannya bersih, sejuk, dan rak bukunya tertata rapi.', 'Tambahkan manfaat: Banyak buku cerita, ensiklopedia, dan komik edukasi yang bisa kami pinjam.', 'Tambahkan kebiasaan: Setiap jam istirahat, aku dan teman-teman senang membaca di sana.'], answer: 'Paragraf 4 kalimat yang padu dan kaya informasi.' },
    ],
    activityTitle: 'Latihan: Mengembangkan Paragraf',
    questions: [
      { text: 'Syarat utama agar paragraf yang kita kembangkan disebut PADU adalah...', opts: ['Semua kalimat penjelas berhubungan erat mendukung kalimat utamanya', 'Minimal terdiri dari 20 kalimat', 'Menggunakan banyak tanda seru', 'Membahas banyak topik berbeda sekaligus'], ans: 0, exp: 'Kepaduan (kohesi & koherensi) berarti semua kalimat saling bertautan pada satu topik.' },
      { text: 'Kalimat yang efektif artinya kalimat tersebut...', opts: ['Singkat, jelas, hemat kata, dan tidak berulang-ulang maknanya', 'Sangat panjang dan membingungkan', 'Mengulang kata yang sama 5 kali', 'Tidak punya subjek'], ans: 0, exp: 'Kalimat efektif langsung dipahami tanpa kata mubazir.' },
      { text: 'Perbaikan kalimat tidak efektif "Para siswa-siswa sedang belajar di kelas" yang BENAR adalah...', opts: ['Para siswa sedang belajar di kelas.', 'Semua para siswa-siswa belajar.', 'Siswa-siswa para sedang belajar.', 'Para belajar siswa-siswa.'], ans: 0, exp: '"Para" sudah bermakna jamak sehingga tidak perlu mengulang "siswa-siswa".' },
    ],
  },
  {
    topicCode: 'BIND-SD4-08', subSeq: 3,
    objectives: ['Siswa mampu menerapkan kaidah ejaan EYD V dasar (huruf kapital, tanda koma perincian, tanda petik dialog, kata depan di/ke).'],
    materialTitle: 'Penggunaan Ejaan yang Tepat (EYD)',
    blocks: [
      { type: 'table', title: '4 Aturan Ejaan Paling Sering Dipakai di Kelas 4', headers: ['Aturan', 'Contoh SALAH', 'Contoh BENAR'], rows: [
        ['Huruf kapital nama hari, bulan, geografi', 'hari senin di jawa timur', 'hari Senin di Jawa Timur'],
        ['Tanda koma sebelum "dan" pada perincian ≥ 3', 'Ibu membeli apel jeruk dan mangga.', 'Ibu membeli apel, jeruk, dan mangga.'],
        ['Tanda petik ("...") pada kalimat langsung', 'Bima berkata, Ayo kita belajar!', 'Bima berkata, "Ayo kita belajar!"'],
        ['Kata depan di/ke (tempat dipisah)', 'pergi kepasar dan dirumah', 'pergi ke pasar dan di rumah'],
      ]},
    ],
    activityTitle: 'Latihan: Ejaan (EYD)',
    questions: [
      { text: 'Penulisan kalimat perincian yang BENAR adalah...', opts: ['Raka membawa pensil penghapus dan penggaris.', 'Raka membawa pensil, penghapus, dan penggaris.', 'Raka membawa, pensil, penghapus dan penggaris.', 'Raka membawa pensil, penghapus dan, penggaris.'], ans: 1, exp: 'Dalam EYD, perincian 3 benda atau lebih memakai koma termasuk sebelum kata "dan".' },
      { text: 'Penulisan kalimat langsung yang TEPAT adalah...', opts: ['Ibu bertanya, "Apakah kamu sudah sarapan?"', 'Ibu bertanya "apakah kamu sudah sarapan"?', 'Ibu bertanya, apakah kamu sudah sarapan?', '"Ibu bertanya", apakah kamu sudah sarapan?'], ans: 0, exp: 'Ucapan langsung diapit tanda petik ("...") dan diawali huruf kapital.' },
      { text: 'Penulisan kata depan "ke" yang BENAR adalah...', opts: ['kesekolah', 'ke sekolah', 'keluar rumah (sebagai lawan masuk)', 'keatas'], ans: 1, exp: '"ke" penunjuk arah/tempat ditulis terpisah: ke sekolah, ke atas.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-08', subSeq: 4,
    objectives: ['Siswa mampu menyunting dan membacakan hasil tulisannya sendiri di depan teman dengan percaya diri.'],
    materialTitle: 'Menyunting & Menyampaikan Hasil Tulisan',
    blocks: [
      { type: 'list', title: 'Daftar Cek Sebelum Menyampaikan Tulisanmu', items: ['✅ Apakah judulnya sudah menarik dan sesuai isi?', '✅ Apakah huruf kapital, tanda titik, dan koma sudah tepat?', '✅ Latih membaca 1–2 kali dulu agar pelafalan lancar saat dibacakan di kelas!'] },
    ],
    activityTitle: 'Latihan: Menyampaikan Hasil Tulisan',
    questions: [
      { text: 'Kegiatan membaca ulang tulisan sendiri untuk memperbaiki kesalahan ejaan dan kalimat disebut...', opts: ['Menyunting (editing)', 'Menyalin', 'Menghapus total', 'Mewarnai'], ans: 0, exp: 'Menyunting menyempurnakan tulisan sebelum dipublikasikan/dibacakan.' },
      { text: 'Saat membacakan karangan di depan kelas, kita sebaiknya sesekali...', opts: ['Menatap teman-teman pendengar agar terjadi kontak mata', 'Menempelkan kertas menutupi seluruh wajah', 'Membaca sambil membelakangi kelas', 'Berbisik'], ans: 0, exp: 'Kontak mata membuat pendengar lebih antusias menyimak.' },
      { text: 'Jika teman memberikan masukan sopan tentang tulisan kita, sikap yang baik adalah...', opts: ['Marah dan tidak mau berteman', 'Mengucapkan terima kasih dan mempertimbangkannya untuk perbaikan', 'Merobek tulisan', 'Mengejek balik'], ans: 1, exp: 'Masukan membangun membantu kita menulis lebih baik lagi.' },
    ],
  },
  {
    topicCode: 'BIND-SD4-08', subSeq: 5,
    objectives: ['Siswa mampu berpartisipasi aktif dalam diskusi kelompok dan melakukan presentasi singkat yang terstruktur.'],
    materialTitle: 'Diskusi Kelompok dan Presentasi',
    blocks: [
      { type: 'visual_cards', title: 'Peran Penting dalam Diskusi & Presentasi', cards: [
        { emoji: '🎙️', label: 'Moderator / Ketua', sub: 'Membuka, mengatur giliran bicara, dan menutup diskusi' },
        { emoji: '📝', label: 'Notulis / Pencatat', sub: 'Mencatat hasil kesepakatan kelompok dengan rapi' },
        { emoji: '🗣️', label: 'Penyaji (Presenter)', sub: 'Menyampaikan hasil diskusi di depan kelas dengan suara lantang & sopan' },
      ]},
    ],
    activityTitle: 'Latihan: Diskusi & Presentasi',
    questions: [
      { text: 'Anggota kelompok diskusi yang bertugas mencatat ide dan kesimpulan diskusi disebut...', opts: ['Notulis', 'Wasit', 'Penonton', 'Kiper'], ans: 0, exp: 'Notulis mencatat pokok-pokok hasil diskusi.' },
      { text: 'Susunan presentasi kelompok yang baik adalah...', opts: ['Salam & perkenalan → Menyampaikan isi pokok → Sesi tanya jawab → Salam penutup', 'Langsung menjawab pertanyaan tanpa menjelaskan materi', 'Menutup presentasi dulu', 'Diam saja di depan kelas'], ans: 0, exp: 'Alur pembuka–isi–tanya jawab–penutup membuat presentasi rapi.' },
      { text: 'Media bantu sederhana yang membuat presentasi kelas 4 makin menarik adalah...', opts: ['Poster/karton ringkasan poin penting dan gambar besar', 'Tulisan sangat kecil sepanjang 10 halaman', 'Kertas kosong', 'Mematikan lampu kelas'], ans: 0, exp: 'Poster dengan poin singkat dan gambar mudah dilihat teman dari jauh.' },
    ],
  },
];

upsertLessonsBatch('Kelas 4 SD — Bahasa Indonesia (8 Bab, 36 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

