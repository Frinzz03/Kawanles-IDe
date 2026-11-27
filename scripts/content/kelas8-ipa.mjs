import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: BUMI, BULAN, DAN MATAHARI (7 sub)
  {
    topicCode: 'IPA-SMP8-01', subSeq: 1,
    objectives: ['Siswa mampu memahami struktur sistem tata surya (Matahari, 8 planet, satelit, asteroid, komet, meteoroid).'],
    materialTitle: 'Gambaran Sistem Tata Surya',
    blocks: [
      { type: 'text', text: 'Tata surya berpusat pada bintang Matahari yang mengikat 8 planet, satelit alami, planet kerdil (Pluto, Ceres), sabuk asteroid (antara Mars dan Jupiter), komet, serta meteoroid melalui gaya gravitasi. Orbit planet berbentuk elips (Hukum I Kepler).' },
      { type: 'visual_cards', title: 'Benda Langit Kecil Tata Surya', cards: [
        { emoji: '☄️', label: 'Komet', sub: 'Bola es & debu; ekornya SELALU menjauhi Matahari akibat angin surya!' },
        { emoji: '🪨', label: 'Asteroid', sub: 'Batuan luar angkasa, mayoritas di Sabuk Asteroid antara Mars & Jupiter' },
        { emoji: '🌠', label: 'Meteor vs Meteorit', sub: 'Meteor = habis terbakar di atmosfer; Meteorit = batuan yang sampai ke tanah' },
      ]},
    ],
    activityTitle: 'Latihan: Sistem Tata Surya',
    questions: [
      { text: 'Urutan 8 planet dari yang terdekat dengan Matahari adalah...', opts: ['Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus', 'Merkurius, Mars, Venus, Bumi, Jupiter, Saturnus, Uranus, Neptunus', 'Venus, Merkurius, Bumi, Mars, Saturnus, Jupiter, Neptunus, Uranus', 'Merkurius, Venus, Bumi, Jupiter, Mars, Saturnus, Uranus, Neptunus'], ans: 0, exp: 'Me-Ve-Bu-Ma-Ju-Sa-Ur-Ne.' },
      { text: 'Arah ekor komet saat melintas mendekati Matahari selalu...', opts: ['Menjauhi Matahari karena terdorong radiasi dan angin surya', 'Mengarah ke Matahari', 'Lurus ke utara Bumi', 'Berputar melingkar'], ans: 0, exp: 'Tekanan radiasi dan angin Matahari mendorong gas/debu komet menjauhi Matahari.' },
      { text: 'Sabuk asteroid utama di tata surya terletak di antara orbit planet...', opts: ['Mars dan Jupiter', 'Bumi dan Mars', 'Saturnus dan Uranus', 'Venus dan Bumi'], ans: 0, exp: 'Sabuk asteroid memisahkan kelompok planet dalam (terestrial) dan planet luar (Jovian).' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-01', subSeq: 2,
    objectives: ['Siswa mampu membandingkan karakteristik Matahari, planet dalam (terestrial), dan planet luar (raksasa gas/es).'],
    materialTitle: 'Karakteristik Matahari dan Planet',
    blocks: [
      { type: 'table', title: 'Planet Dalam vs Planet Luar', headers: ['Aspek', 'Planet Dalam (Merkurius–Mars)', 'Planet Luar (Jupiter–Neptunus)'], rows: [
        ['Komposisi', 'Batuan padat & logam (terestrial)', 'Gas hidrogen/helium & es (Jovian)'],
        ['Ukuran & Cincin', 'Relatif kecil, tidak bercincin', 'Raksasa, semua bercincin (Saturnus paling mencolok)'],
        ['Satelit Alami', 'Sedikit / tidak ada (Bumi 1, Mars 2)', 'Banyak sekali (puluhan hingga ratusan)'],
      ]},
      { type: 'tip', text: 'Fakta unik: VENUS adalah planet terpanas (bukan Merkurius!) karena atmosfer CO2 super tebal memicu efek rumah kaca ekstrem, dan rotasinya searah jarum jam (retrograde).' },
    ],
    activityTitle: 'Latihan: Matahari & Planet',
    questions: [
      { text: 'Mengapa suhu permukaan Venus jauh lebih panas daripada Merkurius padahal Merkurius lebih dekat ke Matahari?', opts: ['Atmosfer Venus sangat tebal kaya CO2 sehingga memerangkap panas (efek rumah kaca ekstrem)', 'Venus punya dua matahari', 'Merkurius seluruhnya es', 'Venus paling besar'], ans: 0, exp: 'Efek rumah kaca ekstrem membuat suhu Venus ~465°C.' },
      { text: 'Lapisan permukaan Matahari yang memancarkan cahaya tampak dan kita lihat sehari-hari disebut...', opts: ['Fotosfer', 'Inti', 'Korona', 'Kromosfer'], ans: 0, exp: 'Fotosfer adalah lapisan cahaya tampak; korona terlihat saat gerhana Matahari total.' },
      { text: 'Planet terbesar di tata surya kita sekaligus pemilik Bintik Merah Raksasa (badai raksasa) adalah...', opts: ['Jupiter', 'Saturnus', 'Neptunus', 'Mars'], ans: 0, exp: 'Jupiter merupakan planet terbesar di tata surya.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-01', subSeq: 3,
    objectives: ['Siswa mampu membedakan akibat rotasi Bumi (24 jam) dan akibat revolusi Bumi (365,25 hari + kemiringan sumbu 23,5°).'],
    materialTitle: 'Rotasi dan Revolusi Bumi',
    blocks: [
      { type: 'table', title: 'Akibat Rotasi vs Revolusi Bumi', headers: ['Rotasi Bumi (Berputar pada Poros, 24 jam)', 'Revolusi Bumi (Mengelilingi Matahari, 365¼ hari)'], rows: [
        ['Pergantian siang dan malam', 'Pergantian 4 musim (karena sumbu Bumi miring 23,5°!)'],
        ['Gerak semu harian Matahari (timur → barat)', 'Gerak semu tahunan Matahari (23,5° LU ↔ 23,5° LS)'],
        ['Perbedaan zona waktu (WIB, WITA, WIT — 15° = 1 jam)', 'Perubahan lamanya siang dan malam di lintang tinggi'],
        ['Pembelokan arah angin & arus laut (Efek Coriolis)', 'Perubahan rasi bintang yang tampak tiap bulan & tahun kabisat'],
      ]},
    ],
    activityTitle: 'Latihan: Rotasi & Revolusi Bumi',
    questions: [
      { text: 'Penyebab utama terjadinya pergantian 4 musim di belahan Bumi utara dan selatan adalah...', opts: ['Revolusi Bumi disertai kemiringan sumbu rotasi Bumi sebesar 23,5°', 'Rotasi Bumi 24 jam', 'Perubahan jarak Bumi ke Bulan', 'Gerhana'], ans: 0, exp: 'Kemiringan sumbu 23,5° membuat belahan utara dan selatan bergantian condong ke Matahari.' },
      { text: 'Jika di Gresik (WIB) pukul 07.00, maka di Jayapura (WIT, selisih +2 jam) menunjukkan pukul...', opts: ['09.00 WIT', '05.00 WIT', '08.00 WIT', '06.00 WIT'], ans: 0, exp: 'WIT lebih awal 2 jam dari WIB (karena Bumi berotasi dari barat ke timur).' },
      { text: 'Manakah fenomena yang merupakan akibat ROTASI Bumi?', opts: ['Pergantian siang-malam dan gerak semu harian Matahari', 'Pergantian musim semi ke musim panas', 'Tahun kabisat 29 Februari', 'Perubahan rasi bintang'], ans: 0, exp: 'Siang-malam dan gerak semu harian terjadi tiap 24 jam akibat rotasi.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-01', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan tiga gerakan Bulan sekaligus dan alasan wajah Bulan yang menghadap Bumi selalu sama.'],
    materialTitle: 'Gerak Bulan',
    blocks: [
      { type: 'text', text: 'Bulan melakukan 3 gerakan serentak: (1) rotasi pada porosnya, (2) revolusi mengelilingi Bumi, dan (3) bersama Bumi mengelilingi Matahari. Karena kala rotasi Bulan SAMA PERSIS dengan kala revolusinya terhadap Bumi (~27,3 hari sideris), permukaan Bulan yang tampak dari Bumi selalu sisi yang sama!' },
    ],
    activityTitle: 'Latihan: Gerak Bulan',
    questions: [
      { text: 'Mengapa wajah permukaan Bulan yang menghadap ke Bumi selalu tampak sama?', opts: ['Karena periode rotasi Bulan sama dengan periode revolusi Bulan mengelilingi Bumi', 'Karena Bulan tidak berotasi sama sekali', 'Karena Bulan diam tidak bergerak', 'Karena Bumi tidak berotasi'], ans: 0, exp: 'Penguncian pasang surut membuat kala rotasi = kala revolusi Bulan.' },
      { text: 'Satu bulan Hijriah (komariah) berumur 29 atau 30 hari didasarkan pada periode sinodis fase Bulan, yaitu sekitar...', opts: ['29,5 hari', '365,25 hari', '24 jam', '14 hari'], ans: 0, exp: 'Siklus bulan baru ke bulan baru berikutnya (sinodis) = 29,5 hari.' },
      { text: 'Gaya gravitasi Bulan dan Matahari terhadap lautan di Bumi menyebabkan fenomena pesisir yang sangat dikenal nelayan, yaitu...', opts: ['Pasang surut air laut', 'Gempa bumi tektonik', 'Hujan asam', 'Angin topan'], ans: 0, exp: 'Gravitasi Bulan merupakan pengendali utama pasang surut laut.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-01', subSeq: 5,
    objectives: ['Siswa mampu mengurutkan 8 fase Bulan dalam satu siklus sinodis dan mengaitkannya dengan posisi terhadap Matahari.'],
    materialTitle: 'Fase-Fase Bulan',
    blocks: [
      { type: 'list', title: 'Urutan Fase Bulan (29,5 Hari)', items: ['1. Bulan Baru (New Moon — gelap, di antara Matahari & Bumi)', '2. Sabit Awal → 3. Kuartir Pertama (separuh kanan terang) → 4. Cembung Awal', '5. Bulan Purnama (Full Moon — bulat terang, Bumi di tengah)', '6. Cembung Akhir → 7. Kuartir Ketiga (separuh kiri terang) → 8. Sabit Akhir → kembali Bulan Baru!'] },
    ],
    activityTitle: 'Latihan: Fase Bulan',
    questions: [
      { text: 'Bulan tidak memancarkan cahaya sendiri. Mengapa bentuk terang Bulan berubah-ubah (sabit, separuh, purnama) dari hari ke hari?', opts: ['Karena perubahan sudut pandang kita dari Bumi terhadap bagian Bulan yang terkena cahaya Matahari saat Bulan berevolusi', 'Karena bayangan Bumi menutupi Bulan setiap malam', 'Karena ukuran Bulan membesar dan mengecil', 'Karena awan menutupi Bulan'], ans: 0, exp: 'Fase Bulan terjadi akibat perubahan posisi relatif Bulan-Bumi-Matahari (BUKAN bayangan Bumi!).' },
      { text: 'Saat posisi Bulan berada di sisi berlawanan dengan Matahari (Matahari — Bumi — Bulan), fase yang terlihat adalah...', opts: ['Bulan purnama', 'Bulan baru', 'Kuartir pertama', 'Sabit awal'], ans: 0, exp: 'Seluruh sisi Bulan yang menghadap Bumi menerima penuh cahaya Matahari.' },
      { text: 'Selang waktu dari fase Bulan Baru hingga mencapai fase Bulan Purnama sekitar...', opts: ['14–15 hari (setengah siklus 29,5 hari)', '30 hari', '7 hari', '365 hari'], ans: 0, exp: 'Purnama terjadi di pertengahan bulan komariah (~hari ke-14/15).' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-01', subSeq: 6,
    objectives: ['Siswa mampu membedakan posisi, jenis bayangan (umbra/penumbra), dan jenis Gerhana Matahari serta Gerhana Bulan.'],
    materialTitle: 'Gerhana Matahari dan Gerhana Bulan',
    blocks: [
      { type: 'table', title: 'Perbandingan Gerhana Matahari vs Gerhana Bulan', headers: ['Aspek', 'Gerhana Matahari', 'Gerhana Bulan'], rows: [
        ['Susunan Lurus', 'Matahari — BULAN — Bumi (fase Bulan Baru)', 'Matahari — BUMI — Bulan (fase Purnama)'],
        ['Bayangan Jatuh', 'Bayangan Bulan jatuh ke permukaan Bumi', 'Bayangan Bumi menutupi Bulan'],
        ['Jenis', 'Total (umbra), Sebagian (penumbra), Cincin (Bulan di apogee)', 'Total (tampak merah tembaga!), Sebagian, Penumbra'],
        ['Keamanan Pengamatan', 'JANGAN tatap langsung tanpa kacamata gerhana khusus!', 'Aman dilihat langsung dengan mata telanjang'],
      ]},
    ],
    activityTitle: 'Latihan: Gerhana Matahari & Bulan',
    questions: [
      { text: 'Gerhana Matahari HANYA dapat terjadi ketika fase Bulan berada pada...', opts: ['Bulan baru (Matahari — Bulan — Bumi segaris)', 'Bulan purnama', 'Kuartir pertama', 'Kuartir ketiga'], ans: 0, exp: 'Bulan berada di antara Matahari dan Bumi sehingga menghalangi sinar Matahari.' },
      { text: 'Wilayah di Bumi yang terkena bayangan inti paling gelap (UMBRA) Bulan saat gerhana Matahari akan mengalami...', opts: ['Gerhana Matahari total', 'Gerhana Bulan total', 'Gerhana Matahari sebagian', 'Tidak ada gerhana'], ans: 0, exp: 'Umbra menutup seluruh piringan Matahari (gerhana total).' },
      { text: 'Gerhana Matahari Cincin terjadi apabila saat segaris, jarak Bulan ke Bumi sedang berada pada titik terjauh (apogee) sehingga...', opts: ['Piringan Bulan tampak sedikit lebih kecil dari Matahari dan menyisakan cincin cahaya di tepi', 'Bumi berada di antara Matahari dan Bulan', 'Bulan membesar dua kali lipat', 'Terjadi pada malam hari'], ans: 0, exp: 'Ujung kerucut umbra tidak menyentuh permukaan Bumi (antumbra).' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-01', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan hubungan posisi relatif Bumi–Bulan–Matahari dengan pasang purnama (spring tide), pasang perbani (neap tide), dan tidak terjadinya gerhana setiap bulan.'],
    materialTitle: 'Fenomena Posisi Relatif Bumi, Bulan, dan Matahari',
    blocks: [
      { type: 'table', title: 'Pasang Purnama vs Pasang Perbani', headers: ['Jenis Pasang', 'Posisi Bulan–Bumi–Matahari', 'Tinggi Air Laut'], rows: [
        ['Pasang Purnama (Spring Tide)', 'SEGARIS (Bulan Baru & Bulan Purnama)', 'Pasang TERTINGGI & surut terendah (gravitasi saling menguatkan)'],
        ['Pasang Perbani (Neap Tide)', 'TEGAK LURUS 90° (Kuartir 1 & 3)', 'Pasang lebih rendah (gravitasi Bulan & Matahari saling melemahkan)'],
      ]},
      { type: 'tip', text: 'Mengapa gerhana tidak terjadi setiap bulan? Karena bidang orbit Bulan miring sekitar 5° terhadap bidang orbit Bumi (ekliptika), sehingga bayangan biasanya meleset sedikit di atas atau bawah!' },
    ],
    activityTitle: 'Latihan: Posisi Relatif Bumi-Bulan-Matahari',
    questions: [
      { text: 'Di wilayah pesisir utara seperti Gresik, banjir rob sering meningkat saat fase Bulan Purnama dan Bulan Baru karena terjadi...', opts: ['Pasang purnama (spring tide) akibat tarikan gravitasi Bulan dan Matahari segaris', 'Pasang perbani', 'Hujan es', 'Angin darat'], ans: 0, exp: 'Gravitasi Bulan dan Matahari yang segaris menghasilkan pasang maksimum.' },
      { text: 'Mengapa Gerhana Bulan tidak terjadi setiap kali Bulan Purnama?', opts: ['Karena bidang orbit Bulan miring ~5° terhadap bidang orbit Bumi mengelilingi Matahari', 'Karena Matahari kadang padam', 'Karena Bumi berhenti berotasi', 'Karena Bulan tidak mengelilingi Bumi'], ans: 0, exp: 'Kemiringan 5° membuat gerhana hanya terjadi jika Bulan melintas dekat titik simpul (node).' },
      { text: 'Saat posisi Matahari, Bumi, dan Bulan membentuk sudut siku-siku 90° (kuartir 1 dan 3), air laut mengalami...', opts: ['Pasang perbani (neap tide)', 'Pasang purnama', 'Tsunami', 'Gerhana total'], ans: 0, exp: 'Gaya gravitasi Bulan dan Matahari saling memperlemah pada sudut 90°.' },
    ],
  },

  // BAB 2: SISTEM ORGANISASI KEHIDUPAN (7 sub)
  {
    topicCode: 'IPA-SMP8-02', subSeq: 1,
    objectives: ['Siswa mampu memahami konsep sel sebagai unit struktural dan fungsional terkecil makhluk hidup (uniseluler vs multiseluler).'],
    materialTitle: 'Sel sebagai Unit Dasar Kehidupan',
    blocks: [
      { type: 'text', text: 'Sel adalah unit struktural (penyusun tubuh) dan fungsional (menjalankan proses hidup) terkecil makhluk hidup. Makhluk hidup bersel satu disebut UNISELULER (bakteri, Amoeba, Paramecium), sedangkan bersel banyak disebut MULTISELULER (tumbuhan, hewan, manusia). Sel juga dibedakan atas PROKARIOTIK (tanpa membran inti, misal bakteri) dan EUKARIOTIK (punya membran inti).' },
    ],
    activityTitle: 'Latihan: Sel Unit Kehidupan',
    questions: [
      { text: 'Ilmuwan Inggris yang pertama kali mengamati ruang-ruang kosong pada sayatan gabus dengan mikroskop sederhana dan menamainya "cell" (sel) adalah...', opts: ['Robert Hooke', 'Isaac Newton', 'Charles Darwin', 'Gregor Mendel'], ans: 0, exp: 'Robert Hooke (1665) menamai ruang-ruang kecil gabus seperti kamar biksu sebagai "cell".' },
      { text: 'Perbedaan mendasar sel PROKARIOTIK (bakteri) dan EUKARIOTIK (hewan/tumbuhan) adalah...', opts: ['Sel prokariotik tidak memiliki membran inti sel, sedangkan sel eukariotik memiliki membran inti sejati', 'Prokariotik punya kloroplas besar', 'Eukariotik tidak punya DNA', 'Prokariotik hanya ada pada manusia'], ans: 0, exp: 'Inti sel eukariotik terbungkus membran nukleus.' },
      { text: 'Contoh organisme UNISELULER (bersel tunggal) adalah...', opts: ['Amoeba dan bakteri', 'Pohon mangga', 'Ikan bandeng', 'Kucing'], ans: 0, exp: 'Amoeba dan bakteri menjalankan seluruh fungsi hidup dalam 1 sel saja.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-02', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi organel sel utama beserta fungsinya.'],
    materialTitle: 'Bagian dan Fungsi Organel Sel',
    blocks: [
      { type: 'table', title: 'Organel Sel & Analogi Kota', headers: ['Organel', 'Fungsi Utama', 'Analogi Mudah'], rows: [
        ['Membran Sel', 'Mengatur keluar-masuknya zat (selektif permeabel)', 'Gerbang satpam'],
        ['Nukleus (Inti Sel)', 'Mengendalikan seluruh aktivitas sel & menyimpan DNA', 'Balai kota / otak'],
        ['Mitokondria', 'Respirasi sel menghasilkan energi (ATP)', 'Pembangkit listrik'],
        ['Ribosom', 'Sintesis (pembuatan) protein', 'Pabrik protein'],
        ['Badan Golgi', 'Memodifikasi, mengemas, & mengirim protein', 'Kantor pos / ekspedisi'],
        ['Lisosom', 'Pencernaan intrasel (enzim penghancur zat sisa)', 'Petugas daur ulang'],
        ['Vakuola', 'Menyimpan air, cadangan makanan, & pigmen', 'Gudang penyimpanan'],
      ]},
    ],
    activityTitle: 'Latihan: Organel Sel',
    questions: [
      { text: 'Organel sel yang dijuluki "pembangkit energi" karena berperan dalam respirasi sel menghasilkan ATP adalah...', opts: ['Mitokondria', 'Ribosom', 'Vakuola', 'Dinding sel'], ans: 0, exp: 'Mitokondria mengubah glukosa + oksigen menjadi energi ATP.' },
      { text: 'Organel kecil yang bertugas menyintesis (membuat) protein di dalam sel adalah...', opts: ['Ribosom', 'Kloroplas', 'Lisosom', 'Sentriol'], ans: 0, exp: 'Ribosom merangkai asam amino menjadi protein.' },
      { text: 'Bagian sel yang mengontrol masuknya nutrisi dan keluarnya zat sisa secara selektif adalah...', opts: ['Membran sel (membran plasma)', 'Nukleolus', 'Dinding sel kaku', 'Vakuola'], ans: 0, exp: 'Membran sel bersifat selektif permeabel.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-02', subSeq: 3,
    objectives: ['Siswa mampu membedakan struktur sel tumbuhan dan sel hewan secara tepat.'],
    materialTitle: 'Perbedaan Sel Tumbuhan dan Sel Hewan',
    blocks: [
      { type: 'table', title: 'Sel Tumbuhan vs Sel Hewan', headers: ['Komponen', 'Sel Tumbuhan', 'Sel Hewan'], rows: [
        ['Dinding Sel (selulosa)', 'ADA (bentuk kaku & tetap)', 'TIDAK ADA (bentuk lentur)'],
        ['Kloroplas (plastida)', 'ADA (untuk fotosintesis)', 'TIDAK ADA'],
        ['Vakuola', '1 buah sangat BESAR di tengah', 'Kecil / beberapa (bahkan tak ada)'],
        ['Sentriol & Lisosom', 'Umumnya tidak ada', 'ADA (berperan saat pembelahan & pencernaan sel)'],
      ]},
    ],
    activityTitle: 'Latihan: Sel Tumbuhan vs Hewan',
    questions: [
      { text: 'Tiga ciri khas yang HANYA dimiliki sel tumbuhan (tidak ada di sel hewan) adalah...', opts: ['Dinding sel selulosa, kloroplas, dan vakuola sentral berukuran besar', 'Nukleus, ribosom, dan mitokondria', 'Sentriol, lisosom, dan membran sel', 'Sitoplasma, DNA, dan badan Golgi'], ans: 0, exp: 'Dinding sel memberi kekakuan, kloroplas untuk fotosintesis, vakuola besar menjaga turgor.' },
      { text: 'Mengapa batang tumbuhan bisa berdiri tegak tanpa memiliki tulang seperti hewan?', opts: ['Karena sel tumbuhan memiliki dinding sel selulosa yang kaku dan tekanan turgor vakuola', 'Karena punya sentriol', 'Karena tidak punya sitoplasma', 'Karena tidak punya membran sel'], ans: 0, exp: 'Dinding sel dan tekanan air vakuola menopang struktur tumbuhan.' },
      { text: 'Organel yang sama-sama dimiliki baik oleh sel tumbuhan MAUPUN sel hewan adalah...', opts: ['Membran sel, nukleus, mitokondria, dan ribosom', 'Kloroplas dan dinding sel', 'Sentriol dan kloroplas', 'Hanya dinding sel'], ans: 0, exp: 'Keduanya sel eukariotik yang butuh kendali inti, energi mitokondria, dan sintesis protein ribosom.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-02', subSeq: 4,
    objectives: ['Siswa mampu mengenal jenis jaringan utama pada tumbuhan (epidermis, parenkim, xilem, floem, meristem) dan hewan (epitel, otot, saraf, ikat).'],
    materialTitle: 'Jaringan Tumbuhan dan Hewan',
    blocks: [
      { type: 'table', title: 'Jaringan Pengangkut Tumbuhan — Jangan Tertukar!', headers: ['Jaringan', 'Arah & Zat yang Diangkut'], rows: [
        ['Xilem (Pembuluh Kayu)', 'Dari AKAR → ke DAUN (mengangkut AIR dan mineral)'],
        ['Floem (Pembuluh Tapis)', 'Dari DAUN → ke SELURUH TUBUH (mengangkut HASIL FOTOSINTESIS / gula)'],
      ]},
      { type: 'text', text: 'Pada hewan/manusia terdapat 4 kelompok jaringan utama: Jaringan EPITEL (pelindung permukaan), OTOT (polos, lurik, jantung untuk gerak), SARAF (penghantar impuls), dan IKAT (darah, tulang, lemak, tendon).' },
    ],
    activityTitle: 'Latihan: Jaringan',
    questions: [
      { text: 'Jaringan tumbuhan yang bertugas mengangkut air dan garam mineral dari akar menuju daun adalah...', opts: ['Xilem', 'Floem', 'Epidermis', 'Meristem'], ans: 0, exp: 'Xilem mengangkut air-mineral ke atas; Floem mengedarkan hasil fotosintesis.' },
      { text: 'Jaringan pada manusia yang berfungsi menghantarkan rangsangan/impuls dari indra ke otak adalah jaringan...', opts: ['Saraf', 'Epitel', 'Lemak', 'Tulang rawan'], ans: 0, exp: 'Neuron menyusun jaringan saraf.' },
      { text: 'Jaringan tumbuhan di ujung akar dan ujung batang yang sel-selnya terus aktif membelah sehingga tumbuhan bertambah tinggi disebut jaringan...', opts: ['Meristem', 'Sklerenkim', 'Floem', 'Gabus'], ans: 0, exp: 'Meristem apikal menyebabkan pertumbuhan primer (memanjang).' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-02', subSeq: 5,
    objectives: ['Siswa mampu memahami pengertian organ sebagai kumpulan beberapa jaringan berbeda yang bekerja sama menjalankan fungsi tertentu.'],
    materialTitle: 'Organ Tumbuhan dan Manusia',
    blocks: [
      { type: 'text', text: 'ORGAN tersusun atas beberapa jenis jaringan berbeda yang bekerja sama. Contoh: DAUN tersusun atas epidermis (pelindung), palisade & spons (fotosintesis), serta xilem-floem (pengangkut). LAMBUNG tersusun atas epitel (sekresi enzim/mukus), otot polos (meremas makanan), ikat, dan saraf.' },
    ],
    activityTitle: 'Latihan: Organ',
    questions: [
      { text: 'Tiga organ vegetatif utama tumbuhan tingkat tinggi adalah...', opts: ['Akar, batang, dan daun', 'Bunga, buah, dan biji', 'Xilem, floem, dan stomata', 'Sel, nukleus, dan ribosom'], ans: 0, exp: 'Akar, batang, daun = organ vegetatif; bunga, buah, biji = organ generatif.' },
      { text: 'Mengapa jantung disebut ORGAN, bukan sekadar jaringan otot?', opts: ['Karena jantung tersusun dari gabungan beberapa jaringan berbeda (otot jantung, epitel, ikat, saraf) yang bekerja sama memompa darah', 'Karena ukurannya besar', 'Karena hanya ada 1 sel', 'Karena berwarna merah'], ans: 0, exp: 'Organ selalu gabungan beberapa jenis jaringan untuk satu fungsi khusus.' },
      { text: 'Jaringan mesofil palisade pada organ daun kaya akan kloroplas karena fungsi utamanya adalah...', opts: ['Tempat utama berlangsungnya fotosintesis', 'Menyerap air dari tanah', 'Menopang batang', 'Menghasilkan biji'], ans: 0, exp: 'Sel-sel palisade padat klorofil memaksimalkan penangkapan cahaya.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-02', subSeq: 6,
    objectives: ['Siswa mampu memahami konsep sistem organ sebagai kerja sama berbagai organ untuk fungsi fisiologis besar.'],
    materialTitle: 'Sistem Organ',
    blocks: [
      { type: 'list', title: 'Contoh Sistem Organ pada Manusia', items: ['Sistem Pencernaan: mulut, kerongkongan, lambung, usus halus, usus besar, hati, pankreas.', 'Sistem Pernapasan: hidung, trakea, bronkus, paru-paru (alveolus).', 'Sistem Peredaran Darah: jantung, pembuluh darah (arteri, vena, kapiler), darah.', 'Sistem Ekskresi: ginjal, kulit, paru-paru, hati.'] },
    ],
    activityTitle: 'Latihan: Sistem Organ',
    questions: [
      { text: 'Kumpulan organ mulut, kerongkongan, lambung, usus halus, dan usus besar membentuk...', opts: ['Sistem pencernaan', 'Sistem pernapasan', 'Sistem saraf', 'Sistem gerak'], ans: 0, exp: 'Organ-organ tersebut bekerja berurutan mencerna dan menyerap nutrisi.' },
      { text: 'Ginjal, ureter, kandung kemih, dan uretra bekerja sama membentuk sistem...', opts: ['Ekskresi (urinaria)', 'Pencernaan', 'Peredaran darah', 'Pernapasan'], ans: 0, exp: 'Menyaring sisa metabolisme nitrogen dari darah menjadi urine.' },
      { text: 'Jika satu organ dalam suatu sistem organ mengalami kerusakan parah (misal ginjal gagal menyaring darah), akibatnya bagi sistem organ tersebut adalah...', opts: ['Kinerja seluruh sistem terganggu dan berdampak ke sistem tubuh lain (penumpukan racun darah)', 'Organ lain tidak terpengaruh sama sekali', 'Tubuh langsung sehat', 'Hanya warna kulit berubah'], ans: 0, exp: 'Antarorgan dalam sistem saling bergantung erat.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-02', subSeq: 7,
    objectives: ['Siswa mampu mengurutkan hierarki organisasi kehidupan dari sel hingga organisme secara sistematis.'],
    materialTitle: 'Hubungan Antartingkat Organisasi Kehidupan',
    blocks: [
      { type: 'formula', name: 'Hierarki Organisasi Kehidupan Tubuh Makhluk Hidup', expression: 'SEL  →  JARINGAN  →  ORGAN  →  SISTEM ORGAN  →  ORGANISME (Individu)', note: 'Makin ke kanan, struktur makin kompleks dan pembagian kerjanya (spesialisasi) makin canggih!' },
    ],
    activityTitle: 'Latihan: Hierarki Organisasi Kehidupan',
    questions: [
      { text: 'Urutan tingkat organisasi kehidupan dari yang paling sederhana hingga paling kompleks adalah...', opts: ['Sel → Jaringan → Organ → Sistem organ → Organisme', 'Jaringan → Sel → Organ → Organisme → Sistem organ', 'Sel → Organ → Jaringan → Sistem organ → Organisme', 'Organisme → Sistem organ → Organ → Jaringan → Sel'], ans: 0, exp: 'Sel menyusun jaringan, jaringan menyusun organ, organ membentuk sistem organ, sistem organ membentuk organisme.' },
      { text: 'Contoh pasangan tingkat "Sel → Jaringan → Organ" yang BENAR adalah...', opts: ['Sel otot jantung → Jaringan otot jantung → Jantung', 'Jantung → Darah → Paru-paru', 'Daun → Kloroplas → Pohon', 'Tulang → Rangka → Sel tulang'], ans: 0, exp: 'Urut dari unit sel → jaringan → organ.' },
      { text: 'Mengapa organisme multiseluler memerlukan spesialisasi sel (sel saraf panjang, sel darah merah tanpa inti, sel otot elastis)?', opts: ['Agar setiap fungsi tubuh berjalan sangat efisien sesuai bentuk khususnya', 'Supaya semua sel berbentuk kotak', 'Agar tidak perlu makan', 'Karena sel tidak bisa membelah'], ans: 0, exp: 'Bentuk sel selalu beradaptasi dengan fungsi spesifiknya.' },
    ],
  },

  // BAB 3: SISTEM ORGAN MANUSIA (8 sub)
  {
    topicCode: 'IPA-SMP8-03', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pencernaan mekanis dan kimiawi beserta enzim utama di mulut, lambung, dan usus halus.'],
    materialTitle: 'Sistem Pencernaan Manusia',
    blocks: [
      { type: 'table', title: 'Enzim Pencernaan Wajib Hafal SMP', headers: ['Organ', 'Enzim / Zat', 'Fungsi Kimiawinya'], rows: [
        ['Mulut (kelenjar ludah)', 'Amilase (Ptialin)', 'Amilum (pati) → Maltosa (gula sederhana)'],
        ['Lambung', 'HCl, Pepsin, Renin', 'HCl bunuh kuman; Pepsin: Protein → Pepton'],
        ['Pankreas → Usus Halus', 'Amilase, Tripsin, Lipase', 'Amilase (pati→gula), Tripsin (pepton→asam amino), Lipase (lemak→asam lemak + gliserol)'],
        ['Hati → Usus Halus', 'Empedu (bukan enzim)', 'Mengemulsikan lemak menjadi butiran kecil'],
      ]},
    ],
    activityTitle: 'Latihan: Sistem Pencernaan',
    questions: [
      { text: 'Saat kita mengunyah nasi putih agak lama, nasi mulai terasa agak manis karena di mulut terdapat enzim...', opts: ['Amilase (ptialin) yang mengubah amilum menjadi maltosa', 'Pepsin yang memecah protein', 'Lipase yang memecah lemak', 'HCl asam lambung'], ans: 0, exp: 'Ptialin memulai pencernaan kimiawi karbohidrat di rongga mulut.' },
      { text: 'Penyerapan sari-sari makanan ke dalam pembuluh darah terutama berlangsung di usus halus bagian ileum karena permukaannya memiliki jutaan jonjot usus (vili) yang berfungsi...', opts: ['Memperluas bidang permukaan penyerapan nutrisi', 'Menghasilkan asam klorida', 'Menyerap air feses saja', 'Mengunyah makanan'], ans: 0, exp: 'Vili dan mikrovili melipatgandakan luas serapan usus halus.' },
      { text: 'Fungsi utama usus besar (kolon) pada tahap akhir pencernaan adalah...', opts: ['Menyerap kembali air dan garam mineral serta membusukkan sisa makanan dengan bantuan bakteri E. coli', 'Mencerna protein dengan pepsin', 'Mengemulsikan lemak', 'Memproduksi empedu'], ans: 0, exp: 'Usus besar mengatur kadar air feses dan sintesis vitamin K oleh bakteri baik.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-03', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan saluran pernapasan, mekanisme inspirasi-ekspirasi (dada & perut), dan pertukaran gas di alveolus.'],
    materialTitle: 'Sistem Pernapasan Manusia',
    blocks: [
      { type: 'text', text: 'Urutan jalur udara: Rongga hidung (disaring rambut & dihangatkan lendir) → Faring → Laring → Trakea → Bronkus → Bronkiolus → Alveolus. Di ALVEOLUS terjadi pertukaran O2 masuk ke darah dan CO2 keluar ke paru-paru secara DIFUSI.' },
      { type: 'table', title: 'Mekanisme Pernapasan Perut (Diafragma)', headers: ['Fase', 'Otot Diafragma', 'Volume Rongga Dada & Tekanan'], rows: [
        ['Inspirasi (Menarik napas)', 'Berkontraksi → MENDATAR', 'Volume membesar → tekanan mengecil → udara MASUK'],
        ['Ekspirasi (Mengembus napas)', 'Relaksasi → MELENGKUNG ke atas', 'Volume mengecil → tekanan membesar → udara KELUAR'],
      ]},
    ],
    activityTitle: 'Latihan: Sistem Pernapasan',
    questions: [
      { text: 'Pertukaran gas oksigen (O2) dan karbon dioksida (CO2) antara paru-paru dan kapiler darah berlangsung tepat di...', opts: ['Alveolus', 'Trakea', 'Laring', 'Hidung'], ans: 0, exp: 'Alveolus berdinding sangat tipis dan dikelilingi kapiler darah untuk difusi gas.' },
      { text: 'Pada pernapasan perut, proses INSPIRASI (udara masuk ke paru-paru) terjadi ketika otot diafragma...', opts: ['Berkontraksi menjadi mendatar sehingga volume rongga dada membesar dan tekanan udara turun', 'Relaksasi melengkung ke atas', 'Berhenti bergerak', 'Mengecilkan rongga dada'], ans: 0, exp: 'Tekanan udara dalam paru-paru lebih rendah dari udara luar sehingga udara mengalir masuk.' },
      { text: 'Katup pangkal tenggorokan yang menutup saluran napas saat menelan agar makanan tidak tersedak masuk trakea disebut...', opts: ['Epiglotis', 'Alveolus', 'Diafragma', 'Pleura'], ans: 0, exp: 'Epiglotis mencegah makanan masuk ke saluran pernapasan.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-03', subSeq: 3,
    objectives: ['Siswa mampu membedakan komponen darah, pembuluh arteri-vena-kapiler, serta jalur peredaran darah kecil dan besar.'],
    materialTitle: 'Sistem Peredaran Darah Manusia',
    blocks: [
      { type: 'table', title: 'Arteri (Nadi) vs Vena (Balik)', headers: ['Ciri', 'Arteri (Nadi)', 'Vena (Balik)'], rows: [
        ['Arah Aliran', 'KELUAR dari jantung', 'MENUJU ke jantung'],
        ['Dinding & Denyut', 'Tebal, elastis, denyut terasa', 'Lebih tipis, denyut tak terasa'],
        ['Katup', 'Hanya 1 dekat jantung', 'Banyak katup sepanjang pembuluh (cegah darah balik)'],
      ]},
      { type: 'formula', name: 'Peredaran Darah Kecil vs Besar', expression: 'Kecil: Bilik Kanan → Paru-Paru → Serambi Kiri   |   Besar: Bilik Kiri → Seluruh Tubuh → Serambi Kanan', note: 'Komponen darah: Eritrosit (angkut O2 oleh hemoglobin), Leukosit (lawan kuman), Trombosit (pembekuan darah), Plasma (angkut sari makanan & CO2).' },
    ],
    activityTitle: 'Latihan: Peredaran Darah',
    questions: [
      { text: 'Ruang jantung yang memiliki dinding otot PALING TEBAL karena harus memompa darah kaya oksigen ke seluruh tubuh adalah...', opts: ['Bilik kiri (ventrikel kiri)', 'Serambi kiri', 'Serambi kanan', 'Bilik kanan'], ans: 0, exp: 'Bilik kiri memompa darah bertekanan tinggi melewati aorta ke seluruh tubuh.' },
      { text: 'Urutan jalur peredaran darah KECIL (pulmonalis) yang tepat adalah...', opts: ['Bilik kanan → Arteri pulmonalis → Paru-paru → Vena pulmonalis → Serambi kiri', 'Bilik kiri → Aorta → Seluruh tubuh → Serambi kanan', 'Serambi kanan → Paru-paru → Bilik kiri', 'Bilik kiri → Paru-paru → Serambi kanan'], ans: 0, exp: 'Darah miskin O2 dari bilik kanan dipompa ke paru-paru lalu kembali kaya O2 ke serambi kiri.' },
      { text: 'Sel darah yang berperan utama dalam proses pembekuan darah saat kita terluka adalah...', opts: ['Trombosit (keping darah)', 'Eritrosit', 'Leukosit', 'Hemoglobin'], ans: 0, exp: 'Trombosit memicu terbentuknya benang fibrin penutup luka.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-03', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan 4 organ ekskresi manusia beserta zat sisanya dan 3 tahap pembentukan urine di ginjal.'],
    materialTitle: 'Sistem Ekskresi Manusia',
    blocks: [
      { type: 'table', title: '4 Organ Ekskresi & 3 Tahap Pembentukan Urine', headers: ['Organ Ekskresi', 'Zat Sisa yang Dikeluarkan'], rows: [
        ['Ginjal', 'Urine (air, urea, garam mineral berlebih)'],
        ['Kulit', 'Keringat (air, garam, sedikit urea — sekaligus atur suhu tubuh)'],
        ['Paru-Paru', 'Karbon dioksida (CO2) dan uap air (H2O)'],
        ['Hati', 'Empedu (hasil perombakan sel darah merah tua)'],
      ]},
      { type: 'formula', name: '3 Tahap Pembentukan Urine di Nefron Ginjal', expression: '1. Filtrasi (Glomerulus → urine primer)  →  2. Reabsorpsi (TKP → serap ulang glukosa/air, urine sekunder)  →  3. Augmentasi (TKD → tambah sisa, urine sesungguhnya)', note: 'Urine sehat TIDAK boleh mengandung glukosa (tanda diabetes) atau protein (tanda kerusakan glomerulus)!' },
    ],
    activityTitle: 'Latihan: Sistem Ekskresi',
    questions: [
      { text: 'Tahap penyaringan darah di glomerulus ginjal yang menghasilkan urine primer disebut...', opts: ['Filtrasi', 'Reabsorpsi', 'Augmentasi', 'Sekresi'], ans: 0, exp: 'Filtrasi menyaring darah di glomerulus; sel darah dan protein tidak lolos.' },
      { text: 'Jika hasil uji laboratorium menunjukkan urine seseorang mengandung glukosa (gula), bagian nefron yang diduga gagal melakukan penyerapan kembali (reabsorpsi) atau kadar gula darah terlalu tinggi berkaitan dengan tahap...', opts: ['Reabsorpsi di tubulus kontortus proksimal (TKP)', 'Filtrasi di paru-paru', 'Augmentasi di kulit', 'Difusi di alveolus'], ans: 0, exp: 'Di TKP seluruh glukosa seharusnya diserap ulang kembali ke darah.' },
      { text: 'Saat cuaca panas, tubuh berkeringat banyak sehingga volume urine cenderung lebih sedikit dan lebih pekat. Organ yang bekerja bersama ginjal menjaga keseimbangan air dan suhu tersebut adalah...', opts: ['Kulit', 'Lambung', 'Jantung', 'Usus besar'], ans: 0, exp: 'Kelenjar keringat kulit mengeluarkan air untuk mendinginkan tubuh.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-03', subSeq: 5,
    objectives: ['Siswa mampu mengenal organ utama sistem reproduksi manusia, proses fertilisasi, serta pentingnya menjaga kesehatan reproduksi remaja.'],
    materialTitle: 'Sistem Reproduksi dan Kesehatan Reproduksi',
    blocks: [
      { type: 'text', text: 'Sistem reproduksi berfungsi melestarikan keturunan. Organ utama pria: testis (menghasilkan sperma & hormon testosteron). Organ utama wanita: ovarium (menghasilkan sel telur/ovum & hormon estrogen/progesteron), tuba falopi/oviduk (tempat fertilisasi), dan uterus/rahim (tempat tumbuh janin).' },
      { type: 'tip', text: 'Menjaga kesehatan organ reproduksi sejak remaja: rutin menjaga kebersihan diri, memakai pakaian dalam katun yang menyerap keringat dan diganti rutin, gizi seimbang, serta menjauhi pergaulan berisiko!' },
    ],
    activityTitle: 'Latihan: Sistem Reproduksi',
    questions: [
      { text: 'Pertemuan antara sel sperma dan sel telur (proses fertilisasi / pembuahan) secara normal berlangsung di...', opts: ['Tuba falopi (oviduk)', 'Ovarium', 'Rahim (uterus)', 'Ginjal'], ans: 0, exp: 'Fertilisasi terjadi di tuba falopi, lalu zigot menuju rahim untuk implantasi.' },
      { text: 'Organ reproduksi wanita yang berfungsi menghasilkan sel telur (ovum) adalah...', opts: ['Ovarium', 'Uterus', 'Vagina', 'Plasenta'], ans: 0, exp: 'Ovarium (indung telur) mematangkan ovum setiap siklus menstruasi.' },
      { text: 'Kebiasaan harian sederhana yang paling dianjurkan untuk menjaga kesehatan organ reproduksi remaja adalah...', opts: ['Menjaga kebersihan area pribadi, mengganti pakaian dalam rutin, dan memakai bahan katun yang kering serta bersih', 'Memakai celana super ketat dan lembap seharian', 'Mengabaikan kebersihan saat menstruasi', 'Kurang minum air putih'], ans: 0, exp: 'Kondisi bersih dan tidak lembap mencegah infeksi jamur/bakteri.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-03', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan keterkaitan erat antara sistem pencernaan, pernapasan, peredaran darah, dan ekskresi dalam menghasilkan energi tubuh.'],
    materialTitle: 'Hubungan Antarsistem Organ Manusia',
    blocks: [
      { type: 'worked_example', level: 'Kerja Tim 4 Sistem Organ', question: 'Bagaimana tubuhmu menghasilkan energi saat berlari olahraga?', steps: ['1. Sistem PENCERNAAN menyediakan glukosa dari makanan.', '2. Sistem PERNAPASAN mengambil oksigen (O2) dari udara.', '3. Sistem PEREDARAN DARAH mengangkut glukosa + O2 ke sel otot untuk respirasi sel (menghasilkan energi + limbah CO2 & urea).', '4. Sistem EKSKRESI (paru-paru, ginjal, kulit) membuang CO2, urea, dan panas keringat!'], answer: 'Seluruh sistem organ bekerja terintegrasi seperti satu tim!' },
    ],
    activityTitle: 'Latihan: Hubungan Antarsistem Organ',
    questions: [
      { text: 'Ketika kamu berlari kencang, denyut jantung makin cepat sekaligus napas terengah-engah. Alasan ilmiah keterkaitan kedua sistem ini adalah...', opts: ['Otot butuh banyak O2 untuk energi sehingga paru-paru mengambil O2 lebih cepat dan jantung memompanya lebih cepat ke otot', 'Jantung ikut lelah tanpa kaitan dengan paru-paru', 'Lambung meminta udara', 'Ginjal berhenti bekerja'], ans: 0, exp: 'Sistem pernapasan dan peredaran darah berkoordinasi memasok O2 dan membuang CO2.' },
      { text: 'Zat sisa metabolisme sel berupa CO2 diangkut dari sel tubuh menuju paru-paru oleh sistem...', opts: ['Peredaran darah', 'Pencernaan', 'Rangka', 'Reproduksi'], ans: 0, exp: 'Darah menjadi sistem transportasi penghubung seluruh sistem organ.' },
      { text: 'Glukosa hasil pencernaan makanan diedarkan dari usus halus ke seluruh sel tubuh melalui...', opts: ['Plasma darah dalam pembuluh darah', 'Trakea', 'Ureter', 'Kelenjar keringat'], ans: 0, exp: 'Vili usus halus menyerap glukosa langsung ke pembuluh kapiler darah.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-03', subSeq: 7,
    objectives: ['Siswa mampu mengidentifikasi penyebab dan gejala gangguan umum pada sistem pencernaan, pernapasan, peredaran darah, dan ekskresi.'],
    materialTitle: 'Gangguan Umum pada Sistem Organ',
    blocks: [
      { type: 'table', title: 'Gangguan Sistem Organ yang Perlu Dikenali', headers: ['Sistem', 'Contoh Gangguan & Penyebab Utama'], rows: [
        ['Pencernaan', 'Maag/gastritis (asam lambung berlebih/pola makan tak teratur), diare (infeksi kuman), sembelit (kurang serat & air)'],
        ['Pernapasan', 'Asma (penyempitan saluran napas/alergi), TBC (bakteri Mycobacterium tuberculosis), bronkitis, pneumonia'],
        ['Peredaran Darah', 'Anemia (kurang hemoglobin/zat besi), hipertensi (tekanan darah tinggi), stroke, jantung koroner'],
        ['Ekskresi', 'Batu ginjal (endapan garam kalsium, kurang minum), gagal ginjal, diabetes melitus'],
      ]},
    ],
    activityTitle: 'Latihan: Gangguan Sistem Organ',
    questions: [
      { text: 'Penyakit kurang darah yang ditandai cepat lelah, pusing, dan pucat akibat rendahnya kadar hemoglobin atau sel darah merah disebut...', opts: ['Anemia', 'Hipertensi', 'Asma', 'Gastritis'], ans: 0, exp: 'Anemia sering disebabkan kekurangan zat besi pembentuk hemoglobin.' },
      { text: 'Kebiasaan jarang minum air putih dan sering menahan buang air kecil dapat memicu terbentuknya endapan mineral keras di ginjal yang disebut...', opts: ['Batu ginjal', 'TBC', 'Diare', 'Anemia'], ans: 0, exp: 'Kurang cairan membuat garam mineral mengkristal menjadi batu ginjal.' },
      { text: 'Penyakit infeksi paru-paru menular yang disebabkan bakteri Mycobacterium tuberculosis adalah...', opts: ['TBC (Tuberkulosis)', 'Maag', 'Hipertensi', 'Sembelit'], ans: 0, exp: 'TBC menyerang paru-paru dan menular lewat percikan dahak/droplet.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-03', subSeq: 8,
    objectives: ['Siswa mampu merancang pola hidup sehat untuk menjaga seluruh sistem organ (gizi seimbang, olahraga, hidrasi, bebas rokok).'],
    materialTitle: 'Upaya Menjaga Kesehatan Sistem Organ',
    blocks: [
      { type: 'visual_cards', title: '5 Pilar Menjaga Organ Tubuh', cards: [
        { emoji: '🥗', label: 'Isi Piringku & Serat', sub: 'Sayur, buah, protein, kurangi gula-garam-lemak berlebih' },
        { emoji: '💧', label: 'Minum 8 Gelas/Hari', sub: 'Menjaga ginjal bersih & pencernaan lancar' },
        { emoji: '🏃', label: 'Olahraga 30 Menit', sub: 'Menguatkan otot jantung & kapasitas paru-paru' },
        { emoji: '🚭', label: 'Bebas Asap Rokok', sub: 'Melindungi alveolus paru & pembuluh darah' },
      ]},
    ],
    activityTitle: 'Latihan: Menjaga Kesehatan Organ',
    questions: [
      { text: 'Mengonsumsi makanan kaya serat (sayur, buah, biji-bijian) dan cukup minum air terutama sangat efektif mencegah gangguan pencernaan berupa...', opts: ['Konstipasi (sembelit)', 'Asma', 'Anemia', 'TBC'], ans: 0, exp: 'Serat dan air melunakkan feses dan memperlancar gerak usus.' },
      { text: 'Mengurangi konsumsi makanan terlalu asin (natrium berlebih) dan gorengan berlemak jenuh merupakan pencegahan utama terhadap...', opts: ['Hipertensi dan penyakit jantung koroner', 'TBC', 'Diare', 'Patah tulang'], ans: 0, exp: 'Natrium berlebih menaikkan tekanan darah; lemak jenuh memicu plak pembuluh darah.' },
      { text: 'Tidur cukup 8 jam dan olahraga teratur bagi pelajar SMP berdampak positif karena...', opts: ['Membantu regenerasi sel, meningkatkan daya tahan tubuh, dan melancarkan peredaran darah', 'Membuat jantung berhenti bekerja', 'Mengurangi oksigen otak', 'Menghambat pertumbuhan'], ans: 0, exp: 'Istirahat dan aktivitas fisik menjaga kebugaran seluruh sistem organ.' },
    ],
  },

  // BAB 4: ZAT ADITIF DAN ZAT ADIKTIF (7 sub)
  {
    topicCode: 'IPA-SMP8-04', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian dan fungsi zat aditif dalam makanan dan minuman.'],
    materialTitle: 'Pengertian dan Fungsi Zat Aditif',
    blocks: [
      { type: 'text', text: 'Zat aditif adalah bahan yang sengaja ditambahkan ke dalam makanan atau minuman dalam jumlah kecil saat produksi/pengolahan untuk memperbaiki penampilan, rasa, aroma, tekstur, nilai gizi, atau memperpanjang daya simpan.' },
    ],
    activityTitle: 'Latihan: Pengertian Zat Aditif',
    questions: [
      { text: 'Tujuan penambahan zat pengawet yang aman (seperti garam, gula, atau natrium benzoat sesuai takaran BPOM) pada makanan adalah...', opts: ['Menghambat pertumbuhan mikroba pembusuk agar makanan lebih tahan lama', 'Mengubah warna jadi hitam', 'Membuat ketagihan', 'Menghilangkan semua gizi'], ans: 0, exp: 'Pengawet memperpanjang umur simpan makanan.' },
      { text: 'Manakah yang merupakan contoh penerapan zat aditif tradisional di rumah tangga?', opts: ['Menambahkan daun pandan agar kue harum dan hijau', 'Memasak dengan kompor gas', 'Menaruh makanan di piring', 'Mencuci piring dengan sabun'], ans: 0, exp: 'Daun pandan berfungsi sebagai pewarna dan pemberi aroma alami.' },
      { text: 'Penggunaan zat aditif sintetis dalam makanan kemasan di Indonesia diawasi batas aman konsumsinya oleh lembaga resmi...', opts: ['BPOM (Badan Pengawas Obat dan Makanan)', 'BMKG', 'BPS', 'BKN'], ans: 0, exp: 'BPOM menetapkan izin edar dan batas aman bahan tambahan pangan.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-04', subSeq: 2,
    objectives: ['Siswa mampu mengelompokkan 6 jenis utama zat aditif: pewarna, pemanis, pengawet, penyedap, pemberi aroma, pengental/pengemulsi.'],
    materialTitle: 'Jenis-Jenis Zat Aditif Makanan & Minuman',
    blocks: [
      { type: 'table', title: '6 Kelompok Zat Aditif Pangan', headers: ['Jenis', 'Contoh Alami', 'Contoh Buatan (Sintetis)'], rows: [
        ['Pewarna', 'Kunyit (kuning), daun suji/pandan (hijau), buah bit (merah)', 'Tartrazin (kuning), Brilliant Blue (biru)'],
        ['Pemanis', 'Gula tebu (sukrosa), gula aren, madu', 'Aspartam, sakarin, siklamat, sukralosa'],
        ['Pengawet', 'Garam dapur, gula pekat, cuka, bawang putih', 'Natrium benzoat, asam sorbat, kalsium propionat'],
        ['Penyedap', 'Bawang merah/putih, merica, kaldu jamur/tulang', 'MSG (mononatrium glutamat)'],
        ['Pemberi Aroma', 'Vanili alami, kayu manis, daun jeruk', 'Etil butirat (nanas), amil asetat (pisang)'],
        ['Pengental/Pengemulsi', 'Pati/maizena, agar-agar, lesitin kuning telur', 'Karboksimetil selulosa (CMC), lesitin kedelai'],
      ]},
    ],
    activityTitle: 'Latihan: Jenis Zat Aditif',
    questions: [
      { text: 'Natrium benzoat yang sering tertera pada komposisi saus atau minuman kemasan berfungsi sebagai...', opts: ['Pengawet buatan', 'Pewarna alami', 'Pemanis alami', 'Pengental'], ans: 0, exp: 'Natrium benzoat menghambat jamur dan bakteri pada minuman/saus.' },
      { text: 'Lesitin (dari kuning telur atau kedelai) pada pembuatan mayones dan es krim berfungsi sebagai PENGEMULSI, yaitu...', opts: ['Menyatukan campuran air dan minyak/lemak agar tidak memisah', 'Memberi warna biru', 'Membuat rasa pedas', 'Mengawetkan daging'], ans: 0, exp: 'Pengemulsi menstabilkan emulsi minyak dan air.' },
      { text: 'Tartrazin CI 19140 pada label minuman ringan merupakan contoh zat aditif jenis...', opts: ['Pewarna buatan (kuning)', 'Pengawet alami', 'Penyedap alami', 'Pemanis alami'], ans: 0, exp: 'Tartrazin adalah pewarna sintetis kuning yang diizinkan dalam batas tertentu.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-04', subSeq: 3,
    objectives: ['Siswa mampu membedakan zat aditif alami vs buatan serta mewaspadai bahan kimia terlarang bagi pangan (formalin, boraks, Rhodamin B, Methanil Yellow).'],
    materialTitle: 'Bahan Tambahan Alami, Buatan, & Bahan Terlarang',
    blocks: [
      { type: 'misconception', wrong: 'Formalin, boraks, dan Rhodamin B adalah zat aditif buatan yang boleh dipakai sedikit.', right: 'DILARANG KERAS! Formalin (pengawet mayat), boraks (bahan las/antiseptik), Rhodamin B & Methanil Yellow (pewarna tekstil) BUKAN bahan pangan dan bersifat karsinogenik/merusak ginjal & hati!' },
    ],
    activityTitle: 'Latihan: Aditif Alami, Buatan, & Terlarang',
    questions: [
      { text: 'Manakah zat berikut yang DILARANG KERAS digunakan dalam makanan karena merupakan pewarna tekstil berbahaya?', opts: ['Rhodamin B (merah mencolok) dan Methanil Yellow (kuning mencolok)', 'Kunyit dan daun suji', 'Garam dan cuka', 'Gula aren dan vanili'], ans: 0, exp: 'Rhodamin B dan Methanil Yellow berbahaya bagi hati dan ginjal.' },
      { text: 'Ciri jajanan yang patut dicurigai mengandung pewarna tekstil berbahaya (seperti Rhodamin B) adalah...', opts: ['Warna sangat mencolok/berpendar, tidak pudar saat dimasak, dan meninggalkan rasa pahit/getir di lidah', 'Warna lembut agak pucat seperti kunyit', 'Beraroma pandan segar', 'Memiliki nomor izin BPOM resmi'], ans: 0, exp: 'Pewarna tekstil warnanya menyala tak alami dan sering meninggalkan bekas di tangan/lidah.' },
      { text: 'Kelebihan utama zat aditif alami dibanding buatan umumnya adalah...', opts: ['Lebih aman bagi kesehatan dan ramah lingkungan meski warnanya kurang tahan lama/biayanya lebih mahal', 'Bisa tahan 10 tahun', 'Selalu lebih murah dan berwarna neon', 'Tidak pernah busuk'], ans: 0, exp: 'Aditif alami umumnya lebih aman namun intensitas warna/daya awetnya lebih terbatas.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-04', subSeq: 4,
    objectives: ['Siswa mampu membaca dan mengevaluasi informasi penting pada label kemasan makanan/minuman (komposisi, izin edar, gizi, kedaluwarsa).'],
    materialTitle: 'Membaca Informasi pada Label Kemasan',
    blocks: [
      { type: 'visual_cards', title: 'Cek KLIK BPOM Sebelum Membeli!', cards: [
        { emoji: '📦', label: 'K — Kemasan', sub: 'Utuh, tidak bocor, tidak menggembung, tidak berkarat' },
        { emoji: '🏷️', label: 'L — Label', sub: 'Baca daftar komposisi (urutan dari yang terbanyak!) & tabel gizi (gula/garam)' },
        { emoji: '✅', label: 'I — Izin Edar', sub: 'Ada nomor BPOM RI MD/ML atau P-IRT' },
        { emoji: '📅', label: 'K — Kedaluwarsa', sub: 'Pastikan belum melewati tanggal "Baik digunakan sebelum"' },
      ]},
    ],
    activityTitle: 'Latihan: Membaca Label Kemasan',
    questions: [
      { text: 'Pada daftar komposisi kemasan minuman tertulis: "Air, Gula, Perisa Jeruk, Asam Sitrat, Tartrazin". Bahan yang kandungannya PALING BANYAK kedua adalah...', opts: ['Gula', 'Perisa jeruk', 'Tartrazin', 'Asam sitrat'], ans: 0, exp: 'Komposisi pada label selalu diurutkan dari bahan dengan persentase terbesar ke terkecil.' },
      { text: 'Jika sebuah kaleng makanan terlihat menggembung dan penyok padahal tanggal kedaluwarsanya masih bulan depan, tindakan paling bijak adalah...', opts: ['Tidak membeli/mengonsumsinya karena kemasan rusak berisiko tercemar bakteri pembentuk gas', 'Tetap memakannya karena belum kedaluwarsa', 'Menusuk kalengnya agar kempes', 'Merebus kalengnya'], ans: 0, exp: 'Kaleng menggembung tanda pertumbuhan bakteri berbahaya (seperti Clostridium botulinum).' },
      { text: 'Akronim kampanye resmi BPOM "Cek KLIK" adalah singkatan dari...', opts: ['Kemasan, Label, Izin edar, Kedaluwarsa', 'Kualitas, Lemak, Isi, Kalori', 'Kandungan, Lezat, Indah, Kering', 'Kemas, Lihat, Ikat, Kirim'], ans: 0, exp: 'Cek KLIK: Kemasan, Label, Izin edar, Kedaluwarsa.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-04', subSeq: 5,
    objectives: ['Siswa mampu memahami pengertian zat adiktif serta mengelompokkannya menjadi narkotika, psikotropika, dan zat psikoaktif lainnya.'],
    materialTitle: 'Pengertian dan Pengelompokan Zat Adiktif',
    blocks: [
      { type: 'table', title: '3 Kelompok Zat Adiktif', headers: ['Kelompok', 'Penjelasan & Contoh'], rows: [
        ['1. Narkotika', 'Menurunkan kesadaran, hilangkan nyeri, memicu ketergantungan kuat (opium, morfin, heroin, ganja, kokain — dilarang keras kecuali medis ketat)'],
        ['2. Psikotropika', 'Memengaruhi susunan saraf pusat & perilaku (ekstasi, sabu/metamfetamin, pil penenang tanpa resep)'],
        ['3. Zat Psikoaktif Lainnya', 'Nikotin (rokok/vape), alkohol/etanol (miras), kafein (kopi/teh — adiksi ringan bila berlebih)'],
      ]},
    ],
    activityTitle: 'Latihan: Pengertian Zat Adiktif',
    questions: [
      { text: 'Zat yang bila dikonsumsi menimbulkan ketergantungan (kecanduan) fisik maupun psikologis sehingga pengguna ingin terus memakainya lagi disebut...', opts: ['Zat adiktif', 'Zat aditif', 'Vitamin', 'Mineral'], ans: 0, exp: 'Adiktif = menimbulkan adiksi/kecanduan (jangan tertukar dengan aditif = tambahan pangan!).' },
      { text: 'Nikotin yang terkandung dalam rokok konvensional maupun rokok elektrik (vape) tergolong zat...', opts: ['Psikoaktif/adiktif pemicu kecanduan', 'Vitamin paru-paru', 'Zat pewarna alami', 'Mineral tulang'], ans: 0, exp: 'Nikotin memicu kecanduan kuat dan merusak pembuluh darah serta otak remaja.' },
      { text: 'Berdasarkan efeknya pada sistem saraf pusat, zat yang MEMACU kerja saraf sehingga jantung berdebar cepat (misal sabu, kokain, kafein tinggi) disebut efek...', opts: ['Stimulan', 'Depresan', 'Halusinogen', 'Antibiotik'], ans: 0, exp: 'Stimulan = memacu saraf; Depresan = menekan/melambatkan saraf; Halusinogen = memicu halusinasi.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-04', subSeq: 6,
    objectives: ['Siswa mampu menganalisis dampak buruk zat adiktif (rokok, miras, narkoba) terhadap kesehatan tubuh, psikologis, dan masa depan sosial.'],
    materialTitle: 'Dampak Zat Adiktif terhadap Tubuh & Kehidupan',
    blocks: [
      { type: 'list', title: 'Bahaya Nyata Rokok & Narkoba', items: ['Asap rokok mengandung >4.000 bahan kimia termasuk TAR (pemicu kanker paru), NIKOTIN (kecanduan), dan GAS CO (mengikat hemoglobin jauh lebih kuat dari O2 sehingga sel kekurangan oksigen!).', 'Narkoba merusak sel saraf otak permanen, menghancurkan hati & ginjal, memicu depresi/halusinasi, merusak hubungan keluarga, serta berujung jerat hukum berat!'] },
    ],
    activityTitle: 'Latihan: Dampak Zat Adiktif',
    questions: [
      { text: 'Zat beracun dalam asap rokok yang mengendap lengket kecokelatan di paru-paru dan bersifat karsinogenik (pemicu kanker paru) adalah...', opts: ['Tar', 'Oksigen', 'Uap air', 'Nitrogen'], ans: 0, exp: 'Tar merusak silia saluran napas dan memicu kanker paru-paru.' },
      { text: 'Gas karbon monoksida (CO) dalam asap rokok berbahaya bagi peredaran darah karena...', opts: ['Mengikat hemoglobin jauh lebih kuat daripada O2 sehingga pasokan oksigen ke sel tubuh berkurang drastis', 'Menambah kadar oksigen otak', 'Membantu pembekuan darah', 'Menyehatkan jantung'], ans: 0, exp: 'Afinitas CO terhadap hemoglobin ~200 kali lebih kuat dibanding O2.' },
      { text: 'Selain dampak kesehatan fisik, penyalahgunaan narkoba pada remaja berdampak sosial berupa...', opts: ['Menurunnya prestasi belajar, rusaknya kepercayaan keluarga, dan sanksi hukum pidana', 'Meningkatnya fokus belajar', 'Makin disegani masyarakat', 'Tidak ada dampak sosial'], ans: 0, exp: 'Narkoba menghancurkan kesehatan, pendidikan, dan masa depan sosial.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-04', subSeq: 7,
    objectives: ['Siswa mampu merumuskan strategi nyata menolak ajakan dan mencegah penyalahgunaan zat adiktif/berbahaya.'],
    materialTitle: 'Pencegahan Penyalahgunaan Zat Berbahaya',
    blocks: [
      { type: 'visual_cards', title: 'Benteng Diri Remaja Anti-Rokok & Narkoba', cards: [
        { emoji: '🛑', label: 'Katakan TIDAK Tegas', sub: 'Latih menolak ajakan teman tanpa ragu ("Maaf, aku tidak merokok/tidak ikut")' },
        { emoji: '🤝', label: 'Pilih Lingkungan Positif', sub: 'Aktif di olahraga, seni, pramuka, sains, atau komunitas bermanfaat' },
        { emoji: '🗣️', label: 'Terbuka pada Orang Tua/Guru', sub: 'Segera bercerita bila menghadapi tekanan teman atau masalah berat' },
      ]},
    ],
    activityTitle: 'Latihan: Pencegahan Zat Berbahaya',
    questions: [
      { text: 'Jika seorang teman menawarkan rokok elektrik (vape) sambil berkata "Cuma sekali nggak bikin candu kok, biar kelihatan keren", sikap paling tepat adalah...', opts: ['Menolak dengan tegas dan sopan lalu mengalihkan topik atau menjauh', 'Mencoba sekali agar tidak diejek', 'Menyimpannya di tas', 'Menawarkannya ke adik'], ans: 0, exp: 'Sekali mencoba membuka pintu kecanduan nikotin; ketegasan menjaga masa depanmu.' },
      { text: 'Lembaga pemerintah Indonesia yang khusus bertugas menangani pencegahan, pemberantasan, dan rehabilitasi penyalahgunaan narkoba adalah...', opts: ['BNN (Badan Narkotika Nasional)', 'BMKG', 'BPJS', 'KPU'], ans: 0, exp: 'BNN menangani P4GN (Pencegahan dan Pemberantasan Penyalahgunaan dan Peredaran Gelap Narkotika).' },
      { text: 'Cara sehat mengelola stres belajar bagi siswa SMP sebagai alternatif positif jauh dari zat adiktif adalah...', opts: ['Berolahraga, beribadah, menyalurkan hobi kreatif, dan berdiskusi dengan orang tua/guru BK', 'Mencoba obat penenang tanpa resep', 'Merokok diam-diam', 'Begadang terus-menerus'], ans: 0, exp: 'Aktivitas sehat meredakan stres sekaligus menguatkan mental dan tubuh.' },
    ],
  },

  // BAB 5: USAHA DAN ENERGI (9 sub)
  {
    topicCode: 'IPA-SMP8-05', subSeq: 1,
    objectives: ['Siswa mampu memahami konsep usaha dalam fisika (syarat: ada gaya dan ada perpindahan searah gaya).'],
    materialTitle: 'Konsep Usaha dalam Fisika',
    blocks: [
      { type: 'formula', name: 'Rumus Usaha (Work)', expression: 'W = F × s   (satuan SI: Joule = N·m)', note: 'W = usaha (J), F = gaya searah perpindahan (N), s = perpindahan (m). Jika benda TIDAK berpindah (s = 0), maka usaha W = 0 walaupun kamu mendorong sekuat tenaga sampai berkeringat!' },
    ],
    activityTitle: 'Latihan: Konsep Usaha',
    questions: [
      { text: 'Dalam fisika, manakah kegiatan berikut yang menghasilkan USAHA (W ≠ 0)?', opts: ['Mendorong gerobak bakso hingga berpindah sejauh 10 meter', 'Mendorong tembok beton sekuat tenaga namun tembok tidak bergeser', 'Memegang buku diam di tangan selama 1 jam', 'Duduk diam membaca buku'], ans: 0, exp: 'Usaha fisika mensyaratkan adanya gaya DAN perpindahan.' },
      { text: 'Satuan Internasional (SI) untuk besaran usaha dan energi adalah...', opts: ['Joule (J)', 'Watt (W)', 'Newton (N)', 'Pascal (Pa)'], ans: 0, exp: '1 Joule = 1 Newton × 1 meter.' },
      { text: 'Bima mendorong meja dengan gaya 40 N sehingga meja berpindah 3 m searah gaya. Usaha yang dilakukan Bima adalah...', opts: ['120 J', '43 J', '37 J', '12 J'], ans: 0, exp: 'W = F × s = 40 × 3 = 120 Joule.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-05', subSeq: 2,
    objectives: ['Siswa mampu menghitung usaha dari resultan beberapa gaya (searah dan berlawanan arah) serta perpindahan.'],
    materialTitle: 'Hubungan Resultan Gaya dan Perpindahan',
    blocks: [
      { type: 'worked_example', level: 'Usaha Resultan Gaya', question: 'Raka mendorong peti ke kanan 60 N, Dito ikut mendorong ke kanan 30 N, sedangkan gaya gesek lantai ke kiri 20 N. Peti bergeser ke kanan 5 m. Hitung usaha total!', steps: ['Resultan gaya: ΣF = 60 + 30 − 20 = 70 N ke kanan.', 'W = ΣF × s = 70 × 5 = 350 Joule.'], answer: '350 Joule' },
    ],
    activityTitle: 'Latihan: Gaya & Perpindahan',
    questions: [
      { text: 'Dua siswa mendorong lemari ke arah sama masing-masing 50 N dan 70 N hingga bergeser 2 m. Besar usaha keduanya adalah...', opts: ['240 J', '120 J', '40 J', '140 J'], ans: 0, exp: 'ΣF = 50 + 70 = 120 N; W = 120 × 2 = 240 J.' },
      { text: 'Usaha sebesar 300 J digunakan untuk memindahkan kardus sejauh 6 m. Besar gaya yang bekerja searah perpindahan adalah...', opts: ['50 N', '1800 N', '306 N', '60 N'], ans: 0, exp: 'F = W / s = 300 / 6 = 50 N.' },
      { text: 'Gaya gesek yang arahnya selalu BERLAWANAN dengan arah perpindahan benda melakukan usaha bernilai...', opts: ['Negatif (mengurangi energi gerak benda)', 'Positif', 'Selalu nol', 'Tak hingga'], ans: 0, exp: 'Gaya berlawanan arah gerak melakukan usaha negatif (mengubah energi gerak menjadi panas).' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-05', subSeq: 3,
    objectives: ['Siswa mampu mengenali berbagai bentuk energi (kinetik, potensial, mekanik, kimia, listrik, kalor, cahaya, bunyi, nuklir).'],
    materialTitle: 'Bentuk-Bentuk Energi',
    blocks: [
      { type: 'visual_cards', title: 'Ragam Bentuk Energi di Sekitar Kita', cards: [
        { emoji: '⚡', label: 'Energi Listrik', sub: 'Arus muatan listrik penggerak lampu, kipas, laptop' },
        { emoji: '🔋', label: 'Energi Kimia', sub: 'Tersimpan di makanan, baterai, BBM, dan LPG' },
        { emoji: '🏃', label: 'Energi Kinetik', sub: 'Energi benda yang sedang bergerak' },
        { emoji: '⛰️', label: 'Energi Potensial', sub: 'Energi tersimpan akibat ketinggian (gravitasi) atau pegas (elastis)' },
      ]},
    ],
    activityTitle: 'Latihan: Bentuk Energi',
    questions: [
      { text: 'Baterai kering dan makanan yang kita konsumsi menyimpan energi dalam bentuk...', opts: ['Energi kimia', 'Energi cahaya', 'Energi bunyi', 'Energi nuklir'], ans: 0, exp: 'Ikatan kimia dalam makanan dan baterai menyimpan energi kimia.' },
      { text: 'Busur panah yang ditarik tegang sebelum dilepaskan menyimpan...', opts: ['Energi potensial pegas (elastis)', 'Energi listrik', 'Energi bunyi', 'Energi panas saja'], ans: 0, exp: 'Benda elastis yang diregangkan/ditekan menyimpan energi potensial elastis.' },
      { text: 'Gabungan antara energi kinetik dan energi potensial yang dimiliki suatu benda disebut...', opts: ['Energi mekanik (Em = Ek + Ep)', 'Energi kimia', 'Energi nuklir', 'Daya listrik'], ans: 0, exp: 'Energi mekanik = Ek + Ep.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-05', subSeq: 4,
    objectives: ['Siswa mampu menghitung energi kinetik benda bergerak menggunakan rumus Ek = ½ m v².'],
    materialTitle: 'Energi Kinetik (Ek)',
    blocks: [
      { type: 'formula', name: 'Rumus Energi Kinetik', expression: 'Ek = ½ · m · v²', note: 'm = massa (kg), v = kelajuan (m/s). Hati-hati: karena v dikuadratkan, jika kecepatan naik 2× lipat, energi kinetik naik 4× lipat!' },
    ],
    activityTitle: 'Latihan: Energi Kinetik',
    questions: [
      { text: 'Sebuah bola bermassa 2 kg melaju dengan kecepatan 5 m/s. Energi kinetik bola tersebut adalah...', opts: ['25 J', '50 J', '10 J', '20 J'], ans: 0, exp: 'Ek = ½ × 2 × 5² = 1 × 25 = 25 Joule.' },
      { text: 'Jika massa mobil tetap namun kecepatannya dinaikkan menjadi 2 kali semula, maka energi kinetiknya menjadi...', opts: ['4 kali semula', '2 kali semula', '½ kali semula', 'Tetap'], ans: 0, exp: 'Ek sebanding dengan v² → 2² = 4 kali lipat (itulah mengapa ngebut sangat berbahaya!).' },
      { text: 'Sebuah sepeda + pengendara bermassa total 50 kg bergerak dengan kecepatan 4 m/s. Energi kinetiknya adalah...', opts: ['400 J', '200 J', '800 J', '100 J'], ans: 0, exp: 'Ek = ½ × 50 × 4² = 25 × 16 = 400 J.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-05', subSeq: 5,
    objectives: ['Siswa mampu menghitung energi potensial gravitasi menggunakan rumus Ep = m · g · h.'],
    materialTitle: 'Energi Potensial Gravitasi (Ep)',
    blocks: [
      { type: 'formula', name: 'Rumus Energi Potensial Gravitasi', expression: 'Ep = m · g · h', note: 'm = massa (kg), g = percepatan gravitasi (umumnya 10 m/s² atau 9,8 m/s²), h = ketinggian dari tanah (m).' },
    ],
    activityTitle: 'Latihan: Energi Potensial',
    questions: [
      { text: 'Buah kelapa bermassa 2 kg tergantung pada ketinggian 8 m (g = 10 m/s²). Energi potensialnya adalah...', opts: ['160 J', '80 J', '20 J', '16 J'], ans: 0, exp: 'Ep = 2 × 10 × 8 = 160 Joule.' },
      { text: 'Dua buah batu A (1 kg) dan B (3 kg) diletakkan di ketinggian yang sama 5 m. Perbandingan energi potensial EpA : EpB adalah...', opts: ['1 : 3', '3 : 1', '1 : 9', '1 : 5'], ans: 0, exp: 'Pada g dan h sama, Ep berbanding lurus dengan massa → 1 : 3.' },
      { text: 'Sebuah pot bermassa 500 gram (= 0,5 kg) berada di balkon setinggi 4 m (g = 10 m/s²). Energi potensial pot tersebut adalah...', opts: ['20 J', '2000 J', '200 J', '2 J'], ans: 0, exp: 'Ubah gram → kg dulu! Ep = 0,5 × 10 × 4 = 20 J.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-05', subSeq: 6,
    objectives: ['Siswa mampu mengidentifikasi perubahan dan transformasi energi pada alat listrik, pembangkit, dan makhluk hidup.'],
    materialTitle: 'Perubahan dan Transformasi Energi',
    blocks: [
      { type: 'table', title: 'Contoh Transformasi Energi Sehari-Hari', headers: ['Alat / Proses', 'Perubahan Energi'], rows: [
        ['Setrika / Rice Cooker', 'Energi Listrik → Energi Kalor (Panas)'],
        ['Kipas Angin / Blender', 'Energi Listrik → Energi Kinetik (Gerak)'],
        ['Panel Surya (PLTS)', 'Energi Cahaya Matahari → Energi Listrik'],
        ['PLTA (Bendungan)', 'Energi Potensial Air → Kinetik Turbin → Energi Listrik'],
        ['Fotosintesis Tumbuhan', 'Energi Cahaya → Energi Kimia (glukosa)'],
      ]},
    ],
    activityTitle: 'Latihan: Transformasi Energi',
    questions: [
      { text: 'Perubahan energi utama yang terjadi pada lampu senter baterai saat dinyalakan adalah...', opts: ['Energi kimia → energi listrik → energi cahaya (+ sedikit panas)', 'Energi gerak → energi kimia', 'Energi bunyi → energi cahaya', 'Energi nuklir → energi gerak'], ans: 0, exp: 'Baterai menyimpan energi kimia → diubah jadi listrik → menyalakan bohlam/LED.' },
      { text: 'Pada Pembangkit Listrik Tenaga Bayu (PLTB / kincir angin), transformasi energi yang terjadi adalah...', opts: ['Energi kinetik angin → energi mekanik turbin → energi listrik', 'Energi kimia → energi panas', 'Energi cahaya → energi bunyi', 'Energi listrik → energi angin'], ans: 0, exp: 'Angin memutar baling-baling dan generator menghasilkan listrik.' },
      { text: 'Pada speaker/pengeras suara, terjadi perubahan energi...', opts: ['Energi listrik → energi bunyi', 'Energi bunyi → energi kimia', 'Energi panas → energi gerak', 'Energi cahaya → energi listrik'], ans: 0, exp: 'Speaker mengubah sinyal listrik menjadi getaran bunyi.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-05', subSeq: 7,
    objectives: ['Siswa mampu menerapkan Hukum Kekekalan Energi Mekanik (Ep1 + Ek1 = Ep2 + Ek2) pada benda jatuh bebas dan roller coaster.'],
    materialTitle: 'Hukum Kekekalan Energi',
    blocks: [
      { type: 'formula', name: 'Hukum Kekekalan Energi Mekanik (tanpa gesekan)', expression: 'Em1 = Em2    →    Ep1 + Ek1 = Ep2 + Ek2 = KONSTAN', note: 'Energi tidak dapat diciptakan atau dimusnahkan, hanya berubah bentuk! Saat benda jatuh, Ep berkurang dan seluruh pengurangannya berubah menjadi Ek!' },
      { type: 'worked_example', level: 'Bola Jatuh Bebas', question: 'Bola 1 kg dijatuhkan dari ketinggian 10 m (v=0, g=10). Berapa Ek bola saat berada di ketinggian 4 m?', steps: ['Di puncak (10 m): Ep1 = 1×10×10 = 100 J, Ek1 = 0 → Em = 100 J.', 'Di ketinggian 4 m: Ep2 = 1×10×4 = 40 J.', 'Ek2 = Em − Ep2 = 100 − 40 = 60 J!'], answer: '60 Joule' },
    ],
    activityTitle: 'Latihan: Kekekalan Energi',
    questions: [
      { text: 'Sebuah buah mangga 1 kg jatuh bebas dari dahan setinggi 6 m (g = 10 m/s²). Energi kinetik mangga tepat sebelum menyentuh tanah (h = 0) adalah...', opts: ['60 J', '0 J', '30 J', '120 J'], ans: 0, exp: 'Seluruh Ep puncak (1×10×6 = 60 J) berubah menjadi Ek di tanah.' },
      { text: 'Saat sebuah bola dilempar lurus ke atas, perubahan energi yang terjadi selama bola bergerak NAIK adalah...', opts: ['Energi kinetik berkurang, energi potensial bertambah (Em tetap)', 'Keduanya bertambah', 'Keduanya berkurang', 'Energi potensial jadi nol di puncak'], ans: 0, exp: 'Kecepatan makin lambat (Ek turun) sementara ketinggian naik (Ep naik).' },
      { text: 'Buah 2 kg jatuh dari tinggi 10 m (g = 10 m/s²). Saat berada di ketinggian 3 m, energi kinetiknya adalah...', opts: ['140 J', '60 J', '200 J', '100 J'], ans: 0, exp: 'Em = 2×10×10 = 200 J; Ep(3 m) = 2×10×3 = 60 J → Ek = 200 − 60 = 140 J.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-05', subSeq: 8,
    objectives: ['Siswa mampu menghitung daya (laju usaha per satuan waktu) menggunakan rumus P = W / t.'],
    materialTitle: 'Daya (Power)',
    blocks: [
      { type: 'formula', name: 'Rumus Daya (P)', expression: 'P = W / t   (satuan SI: Watt = Joule/detik)', note: '1 kilowatt (kW) = 1.000 Watt. Makin cepat waktu pengerjaan usaha yang sama, makin BESAR dayanya!' },
    ],
    activityTitle: 'Latihan: Daya',
    questions: [
      { text: 'Sebuah mesin melakukan usaha sebesar 2.400 J dalam waktu 12 detik. Daya mesin tersebut adalah...', opts: ['200 Watt', '2.880 Watt', '20 Watt', '120 Watt'], ans: 0, exp: 'P = W / t = 2.400 / 12 = 200 Watt.' },
      { text: 'Sebuah lampu LED berdaya 10 Watt menyala selama 5 menit (= 300 detik). Energi listrik yang digunakan adalah...', opts: ['3.000 J', '50 J', '300 J', '500 J'], ans: 0, exp: 'Ubah menit → detik! W = P × t = 10 × 300 = 3.000 Joule.' },
      { text: 'Andi dan Budi sama-sama mengangkat karung 20 kg ke lantai 2. Andi selesai 20 detik, Budi selesai 40 detik. Pernyataan yang BENAR adalah...', opts: ['Usaha keduanya SAMA, tetapi daya Andi 2 kali lebih besar dari daya Budi', 'Usaha Andi lebih besar', 'Daya Budi lebih besar', 'Keduanya berdaya nol'], ans: 0, exp: 'W sama (mgh sama); waktu Andi setengahnya → daya Andi 2× lebih besar.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-05', subSeq: 9,
    objectives: ['Siswa mampu menerapkan konsep usaha, energi, efisiensi, dan pesawat sederhana dalam kehidupan sehari-hari.'],
    materialTitle: 'Penerapan Usaha, Energi, dan Efisiensi',
    blocks: [
      { type: 'text', text: 'Pesawat sederhana (tuas/pengungkit, bidang miring, katrol) TIDAK mengurangi total usaha (W tetap sama!), melainkan MENGECILKAN GAYA yang diperlukan dengan cara memperpanjang jarak lintasan (keuntungan mekanis). Hemat energi di rumah dilakukan dengan memakai lampu LED berdaya rendah dan mematikan perangkat yang tak dipakai.' },
    ],
    activityTitle: 'Latihan: Penerapan Usaha & Energi',
    questions: [
      { text: 'Mengapa jalan menuju puncak pegunungan dibuat berkelok-kelok (seperti bidang miring panjang) bukannya lurus tegak ke atas?', opts: ['Untuk memperkecil gaya dorong mesin yang dibutuhkan dengan memperpanjang lintasan', 'Agar total usaha jadi nol', 'Supaya mobil lebih boros BBM', 'Agar jarak jadi lebih pendek'], ans: 0, exp: 'Bidang miring memperbesar keuntungan mekanis (KM = s/h) sehingga gaya lebih ringan.' },
      { text: 'Sebuah papan bidang miring panjang 4 m digunakan menaikkan drum ke truk setinggi 1 m. Keuntungan mekanis bidang miring tersebut adalah...', opts: ['4', '3', '5', '¼'], ans: 0, exp: 'KM = s / h = 4 / 1 = 4 (gaya dorong cukup ¼ dari berat drum!).' },
      { text: 'Mengganti lampu pijar 40 Watt dengan lampu LED 10 Watt yang sama terangnya menghemat energi listrik sebesar...', opts: ['75%', '25%', '50%', '10%'], ans: 0, exp: 'Penghematan = (40 − 10) / 40 × 100% = 30/40 = 75%.' },
    ],
  },

  // BAB 6: GELOMBANG DAN PENERAPANNYA (8 sub)
  {
    topicCode: 'IPA-SMP8-06', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian getaran (gerak bolak-balik di sekitar titik setimbang) dan menghitung 1 getaran penuh.'],
    materialTitle: 'Konsep Getaran',
    blocks: [
      { type: 'text', text: 'Getaran adalah gerak bolak-balik secara periodik melalui titik setimbang. Pada bandul A–B–C (B = titik setimbang): 1 getaran penuh adalah lintasan A → B → C → B → A (4 langkah seperempat getaran).' },
    ],
    activityTitle: 'Latihan: Getaran',
    questions: [
      { text: 'Pada bandul A–B–C dengan B titik setimbang, lintasan A → B → C bernilai...', opts: ['½ getaran', '1 getaran', '¼ getaran', '¾ getaran'], ans: 0, exp: 'A→B (¼) + B→C (¼) = ½ getaran.' },
      { text: 'Lintasan A → B → C → B pada bandul A–B–C bernilai...', opts: ['¾ getaran', '1 getaran', '½ getaran', '¼ getaran'], ans: 0, exp: '3 segmen × ¼ = ¾ getaran.' },
      { text: 'Contoh fenomena getaran dalam kehidupan sehari-hari adalah...', opts: ['Senar gitar yang dipetik dan ayunan bandul jam', 'Mobil melaju lurus di tol', 'Batu jatuh bebas ke sumur', 'Air mengalir tenang'], ans: 0, exp: 'Getaran selalu bergerak bolak-balik melewati titik setimbang.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-06', subSeq: 2,
    objectives: ['Siswa mampu menghitung amplitudo, periode (T), dan frekuensi (f) getaran beserta hubungannya T = 1/f.'],
    materialTitle: 'Amplitudo, Periode, dan Frekuensi',
    blocks: [
      { type: 'formula', name: 'Rumus Periode (T) & Frekuensi (f)', expression: 'T = t / n  (sekon)   |   f = n / t  (Hertz / Hz)   |   T = 1 / f', note: 'Amplitudo (A) = simpangan terjauh dari titik setimbang (B ke A atau B ke C). Periode bandul hanya dipengaruhi panjang tali & gravitasi (BUKAN massa beban!).' },
    ],
    activityTitle: 'Latihan: Amplitudo, Periode, & Frekuensi',
    questions: [
      { text: 'Sebuah bandul bergetar sebanyak 60 kali dalam waktu 15 detik. Frekuensi dan periode bandul berturut-turut adalah...', opts: ['4 Hz dan 0,25 s', '0,25 Hz dan 4 s', '45 Hz dan 15 s', '900 Hz dan 4 s'], ans: 0, exp: 'f = n/t = 60/15 = 4 Hz; T = t/n = 15/60 = 0,25 s.' },
      { text: 'Jika jarak terjauh dari ujung kiri A ke ujung kanan C pada bandul adalah 12 cm, maka AMPLITUDO getaran tersebut adalah...', opts: ['6 cm', '12 cm', '24 cm', '3 cm'], ans: 0, exp: 'Amplitudo diukur dari titik setimbang B ke ujung A/C = ½ × 12 = 6 cm!' },
      { text: 'Suatu garpu tala berfrekuensi 250 Hz. Artinya dalam 1 detik garpu tala bergetar sebanyak...', opts: ['250 kali getaran penuh', '1/250 kali', '500 kali', '125 kali'], ans: 0, exp: 'Definisi Hertz (Hz) = jumlah getaran per detik.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-06', subSeq: 3,
    objectives: ['Siswa mampu memahami pengertian gelombang sebagai getaran yang merambat memindahkan energi (bukan memindahkan zat medium secara permanen).'],
    materialTitle: 'Pengertian dan Klasifikasi Gelombang',
    blocks: [
      { type: 'table', title: 'Gelombang Mekanik vs Elektromagnetik (Berdasarkan Medium)', headers: ['Jenis', 'Butuh Medium?', 'Contoh'], rows: [
        ['Gelombang Mekanik', 'YA (harus ada zat padat/cair/gas)', 'Bunyi, gelombang air laut, gelombang tali, gempa'],
        ['Gelombang Elektromagnetik', 'TIDAK (bisa merambat di ruang hampa!)', 'Cahaya Matahari, gelombang radio, sinar-X, Wi-Fi'],
      ]},
    ],
    activityTitle: 'Latihan: Pengertian Gelombang',
    questions: [
      { text: 'Ketika gelombang air merambat menuju pantai, sepotong gabus yang mengapung hanya naik-turun di tempat. Hal ini membuktikan bahwa gelombang merambatkan...', opts: ['Energi, bukan memindahkan partikel mediumnya ikut berpindah jauh', 'Seluruh air laut ke darat', 'Hanya massa benda', 'Tidak memindahkan apa-apa'], ans: 0, exp: 'Gelombang membawa energi getaran; medium hanya bergetar di sekitar posisi setimbangnya.' },
      { text: 'Mengapa cahaya Matahari dapat sampai ke Bumi melewati ruang angkasa hampa udara, sedangkan bunyi ledakan di Matahari tidak terdengar di Bumi?', opts: ['Cahaya adalah gelombang elektromagnetik (tanpa medium), sedangkan bunyi gelombang mekanik (butuh medium)', 'Cahaya lebih lambat dari bunyi', 'Bunyi hanya merambat di ruang hampa', 'Bumi tidak punya atmosfer'], ans: 0, exp: 'Bunyi tidak dapat merambat di ruang hampa.' },
      { text: 'Contoh gelombang ELEKTROMAGNETIK adalah...', opts: ['Cahaya tampak, gelombang radio, dan sinar ultraviolet', 'Gelombang bunyi dan gelombang tali', 'Gelombang air dan bunyi', 'Gempa dan bunyi'], ans: 0, exp: 'Semua spektrum elektromagnetik merambat tanpa medium.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-06', subSeq: 4,
    objectives: ['Siswa mampu membedakan gelombang transversal dan gelombang longitudinal beserta penentuan 1 panjang gelombang (λ).'],
    materialTitle: 'Gelombang Transversal dan Longitudinal',
    blocks: [
      { type: 'table', title: 'Transversal vs Longitudinal', headers: ['Aspek', 'Gelombang Transversal', 'Gelombang Longitudinal'], rows: [
        ['Arah Getar vs Rambat', 'TEGAK LURUS (↕ getar, → rambat)', 'SEJAJAR / BERIMPIT (↔ getar, → rambat)'],
        ['Bentuk', 'Bukit dan Lembah', 'Rapatan dan Regangan'],
        ['1 Panjang Gelombang (λ)', '1 bukit + 1 lembah (atau puncak ke puncak berdekatan)', '1 rapatan + 1 regangan'],
        ['Contoh', 'Tali, permukaan air, cahaya', 'Bunyi, pegas slinki didorong maju-mundur'],
      ]},
    ],
    activityTitle: 'Latihan: Transversal & Longitudinal',
    questions: [
      { text: 'Gelombang bunyi di udara termasuk gelombang LONGITUDINAL karena...', opts: ['Arah getaran partikel udara sejajar dengan arah rambat gelombang (berupa rapatan dan regangan)', 'Arah getarnya tegak lurus arah rambat', 'Membentuk bukit dan lembah', 'Tidak membutuhkan udara'], ans: 0, exp: 'Bunyi merambat lewat rapatan dan regangan sejajar arah rambat.' },
      { text: 'Pada seutas tali terbentuk 2 bukit dan 2 lembah sepanjang 120 cm. Panjang 1 gelombang (λ) adalah...', opts: ['60 cm', '120 cm', '30 cm', '240 cm'], ans: 0, exp: '2 bukit + 2 lembah = 2 gelombang → λ = 120 ÷ 2 = 60 cm.' },
      { text: 'Jarak dari puncak ke puncak berdekatan pada gelombang transversal sama dengan...', opts: ['1 panjang gelombang (1 λ)', '½ λ', '2 λ', '¼ λ'], ans: 0, exp: 'Puncak ke puncak terdekat mencakup tepat 1 gelombang penuh.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-06', subSeq: 5,
    objectives: ['Siswa mampu menghitung cepat rambat gelombang menggunakan rumus v = λ · f dan v = λ / T.'],
    materialTitle: 'Panjang Gelombang dan Cepat Rambat (v = λ · f)',
    blocks: [
      { type: 'formula', name: 'Rumus Cepat Rambat Gelombang', expression: 'v = λ · f    atau    v = λ / T    (m/s)', note: 'v = cepat rambat (m/s), λ = panjang gelombang (m), f = frekuensi (Hz), T = periode (s).' },
    ],
    activityTitle: 'Latihan: Cepat Rambat Gelombang',
    questions: [
      { text: 'Suatu gelombang memiliki panjang gelombang λ = 2 m dan frekuensi f = 5 Hz. Cepat rambat gelombang tersebut adalah...', opts: ['10 m/s', '2,5 m/s', '7 m/s', '0,4 m/s'], ans: 0, exp: 'v = λ × f = 2 × 5 = 10 m/s.' },
      { text: 'Gelombang air memiliki cepat rambat 12 m/s dan periode T = 0,5 s. Panjang gelombangnya (λ) adalah...', opts: ['6 m', '24 m', '12 m', '3 m'], ans: 0, exp: 'λ = v × T = 12 × 0,5 = 6 m.' },
      { text: 'Dalam 2 detik terbentuk 4 gelombang penuh sepanjang 8 m. Cepat rambat gelombangnya adalah...', opts: ['4 m/s', '16 m/s', '2 m/s', '8 m/s'], ans: 0, exp: 'f = 4/2 = 2 Hz; λ = 8/4 = 2 m → v = 2 × 2 = 4 m/s (atau langsung v = s/t = 8/2 = 4 m/s!).' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-06', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan karakteristik bunyi (infrasonik, audiosonik, ultrasonik), resonansi, serta pemantulan bunyi (gaung vs gema).'],
    materialTitle: 'Bunyi dan Karakteristiknya',
    blocks: [
      { type: 'table', title: '3 Rentang Frekuensi Bunyi & Pemantulan', headers: ['Kategori', 'Rentang / Ciri'], rows: [
        ['Infrasonik (< 20 Hz)', 'Didengar gajah, jangkrik, dan gelombang seismik'],
        ['Audiosonik (20 – 20.000 Hz)', 'Rentang pendengaran normal manusia'],
        ['Ultrasonik (> 20.000 Hz)', 'Kelelawar, lumba-lumba, USG medis, & sonar kedalaman laut'],
        ['Gaung vs Gema', 'Gaung = pantul terlalu cepat mengganggu bunyi asli (dicegah peredam karpet/busa); Gema = pantul jelas setelah bunyi asli selesai'],
      ]},
    ],
    activityTitle: 'Latihan: Bunyi',
    questions: [
      { text: 'Tinggi-rendahnya nada bunyi ditentukan oleh FREKUENSI, sedangkan kuat-lemahnya bunyi ditentukan oleh...', opts: ['Amplitudo', 'Periode', 'Warna bunyi', 'Cepat rambat'], ans: 0, exp: 'Amplitudo besar → bunyi nyaring/kuat; frekuensi tinggi → nada tinggi.' },
      { text: 'Bunyi merambat PALING CEPAT melalui medium...', opts: ['Zat padat (seperti baja/rel kereta)', 'Zat cair', 'Gas/udara', 'Ruang hampa'], ans: 0, exp: 'Partikel zat padat paling rapat sehingga getaran diteruskan sangat cepat.' },
      { text: 'Untuk mencegah GAUNG di dalam studio musik atau bioskop, dinding ruangan dilapisi bahan lunak berpori seperti busa akustik dan karpet yang berfungsi...', opts: ['Menyerap gelombang bunyi agar tidak memantul mengganggu', 'Memperkuat pantulan', 'Meningkatkan suhu', 'Menghasilkan gema'], ans: 0, exp: 'Bahan peredam (absorber) menyerap energi bunyi.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-06', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan sifat-sifat cahaya (merambat lurus, pemantulan pada cermin datar/cekung/cembung, pembiasan lensa, dan dispersi).'],
    materialTitle: 'Cahaya dan Fenomena Optika',
    blocks: [
      { type: 'table', title: 'Pemanfaatan Cermin & Lensa Sehari-Hari', headers: ['Alat Optik', 'Jenis Cermin/Lensa & Sifat Bayangan'], rows: [
        ['Cermin Datar', 'Maya, tegak, sama besar, jarak bayangan = jarak benda, kiri-kanan tertukar'],
        ['Cermin Cembung (Spion kendaraan)', 'Maya, tegak, DIPERKECIL — area pandang sangat luas!'],
        ['Cermin Cekung (Reflektor senter/lampu mobil)', 'Mengumpulkan cahaya (konvergen); dekat cermin → maya, tegak, diperbesar'],
        ['Lensa Cembung / Cekung', 'Cembung (positif) bantu rabun dekat; Cekung (negatif) bantu rabun jauh (miopi)!'],
      ]},
    ],
    activityTitle: 'Latihan: Cahaya & Optika',
    questions: [
      { text: 'Mengapa kaca spion mobil dan cermin tikungan jalan selalu menggunakan CERMIN CEMBUNG?', opts: ['Karena menghasilkan bayangan maya, tegak, diperkecil sehingga jangkauan pandangnya luas', 'Karena memperbesar bayangan', 'Karena membalik gambar', 'Karena tidak memantulkan cahaya'], ans: 0, exp: 'Cermin cembung (divergen) memberi bidang pandang lebar.' },
      { text: 'Sedotan di dalam gelas berisi air terlihat seolah-olah bengkok atau patah. Fenomena cahaya ini adalah...', opts: ['Pembiasan (refraksi) cahaya karena cahaya melewati dua medium berbeda kerapatan optik', 'Pemantulan baur', 'Dispersi', 'Difraksi'], ans: 0, exp: 'Kecepatan cahaya berubah saat berpindah antara udara dan air sehingga arahnya dibelokkan.' },
      { text: 'Penderita rabun jauh (miopi — tidak jelas melihat papan tulis dari belakang) dibantu dengan kacamata berlensa...', opts: ['Cekung (negatif / divergen)', 'Cembung (positif)', 'Datar', 'Silinder warna'], ans: 0, exp: 'Lensa cekung menyebarkan cahaya agar bayangan jatuh tepat kembali di retina.' },
    ],
  },
  {
    topicCode: 'IPA-SMP8-06', subSeq: 8,
    objectives: ['Siswa mampu menjelaskan pemanfaatan gelombang bunyi dan elektromagnetik dalam teknologi modern (sonar, USG, radar, serat optik).'],
    materialTitle: 'Pemanfaatan Gelombang dalam Teknologi',
    blocks: [
      { type: 'formula', name: 'Rumus Mengukur Kedalaman Laut dengan SONAR', expression: 's = (v × t) / 2', note: 'Dibagi 2 karena gelombang ultrasonik menempuh perjalanan BOLAK-BALIK (kapal → dasar laut → kembali ke kapal)!' },
      { type: 'worked_example', level: 'Aplikasi Sonar Kapal', question: 'Kapal survei memancarkan bunyi ultrasonik ke dasar laut (v = 1.500 m/s) dan gema diterima 4 detik kemudian. Berapa kedalaman laut?', steps: ['s = (1.500 × 4) ÷ 2 = 6.000 ÷ 2 = 3.000 meter.'], answer: '3.000 meter' },
    ],
    activityTitle: 'Latihan: Teknologi Gelombang',
    questions: [
      { text: 'Kapal mengirim sinyal sonar ke dasar laut (v = 1.500 m/s) dan pantulannya diterima setelah 2 detik. Kedalaman dasar laut di tempat itu adalah...', opts: ['1.500 m', '3.000 m', '750 m', '6.000 m'], ans: 0, exp: 's = (1.500 × 2) / 2 = 1.500 meter.' },
      { text: 'Teknologi medis yang aman digunakan dokter untuk memantau perkembangan janin di dalam rahim menggunakan gelombang bunyi frekuensi >20.000 Hz adalah...', opts: ['USG (Ultrasonografi)', 'Sinar-X radiasi tinggi', 'Teleskop', 'Mikroskop'], ans: 0, exp: 'USG memanfaatkan pantulan gelombang ultrasonik yang aman bagi janin.' },
      { text: 'Kabel internet kecepatan tinggi fiber optik (serat optik) mengirimkan data super cepat menggunakan prinsip...', opts: ['Pemantulan sempurna cahaya di dalam serat kaca', 'Getaran bunyi infrasonik', 'Arus air', 'Gelombang gempa'], ans: 0, exp: 'Cahaya dipantulkan sempurna berulang kali sepanjang serat kaca dengan kecepatan sangat tinggi.' },
    ],
  },
];

upsertLessonsBatch('Kelas 8 SMP — IPA (6 Bab, 46 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

