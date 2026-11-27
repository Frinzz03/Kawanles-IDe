import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: IDENTIFIKASI MAKHLUK HIDUP
  {
    topicCode: 'IPA-SMP7-01', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan 8 ciri utama makhluk hidup (bernapas, nutrisi, gerak, peka rangsang, tumbuh-kembang, reproduksi, ekskresi, adaptasi).'],
    materialTitle: 'Delapan Ciri Makhluk Hidup',
    blocks: [
      { type: 'table', title: '8 Ciri Kehidupan (Biologi SMP)', headers: ['Ciri', 'Penjelasan Ilmiah', 'Contoh'], rows: [
        ['1. Bernapas (Respirasi)', 'Mengambil O₂ untuk membakar sari makanan jadi energi + melepas CO₂', 'Paru-paru, insang, stomata'],
        ['2. Memerlukan Nutrisi', 'Autotrof (buat makanan sendiri) vs Heterotrof (makan organisme lain)', 'Tumbuhan (autotrof), hewan (heterotrof)'],
        ['3. Bergerak', 'Gerak aktif (hewan) dan gerak pasif/tumbuh (tumbuhan)', 'Berenang, fototropisme tunas'],
        ['4. Peka Rangsang (Iritabilitas)', 'Merespons rangsangan cahaya, sentuhan, suhu', 'Putri malu mengatup, pupil mengecil'],
        ['5. Tumbuh & Berkembang', 'Tumbuh = ukuran bertambah (kuantitatif); Kembang = menuju dewasa (kualitatif)', 'Tinggi badan naik; tanaman berbunga'],
        ['6. Berkembang Biak', 'Menghasilkan keturunan agar spesies tidak punah', 'Bertelur, melahirkan, biji, tunas'],
        ['7. Ekskresi', 'Mengeluarkan zat sisa metabolisme', 'Keringat, urine, uap air & CO₂'],
        ['8. Adaptasi', 'Menyesuaikan diri terhadap lingkungan', 'Akar napas pohon bakau di pesisir'],
      ]},
    ],
    activityTitle: 'Latihan: Ciri Makhluk Hidup',
    questions: [
      { text: 'Proses pengeluaran zat sisa metabolisme seperti keringat dan urine oleh tubuh disebut...', opts: ['Respirasi', 'Ekskresi', 'Iritabilitas', 'Adaptasi'], ans: 1, exp: 'Ekskresi membuang zat sisa metabolisme agar tidak meracuni tubuh.' },
      { text: 'Perbedaan antara PERTUMBUHAN dan PERKEMBANGAN pada makhluk hidup adalah...', opts: ['Pertumbuhan bersifat kuantitatif (dapat diukur, tidak balik), sedangkan perkembangan bersifat kualitatif (menuju kedewasaan)', 'Keduanya sama persis', 'Pertumbuhan hanya pada hewan', 'Perkembangan dapat diukur dengan penggaris'], ans: 0, exp: 'Tumbuh = bertambah ukuran/jumlah sel; berkembang = pematangan fungsi organ.' },
      { text: 'Pohon bakau di pesisir Gresik memiliki akar napas mencuat ke atas lumpur untuk memperoleh oksigen. Ini merupakan contoh ciri...', opts: ['Adaptasi', 'Ekskresi', 'Reproduksi', 'Respirasi pasif'], ans: 0, exp: 'Akar napas (pneumatofora) adalah adaptasi morfologi bakau di tanah berlumpur miskin oksigen.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-01', subSeq: 2,
    objectives: ['Siswa mampu menganalisis kebutuhan dasar organisme (autotrof vs heterotrof, oksigen, air, suhu, habitat).'],
    materialTitle: 'Kebutuhan Makhluk Hidup (Autotrof vs Heterotrof)',
    blocks: [
      { type: 'table', title: 'Organisme Autotrof vs Heterotrof', headers: ['Jenis', 'Cara Memperoleh Makanan', 'Contoh'], rows: [
        ['Autotrof', 'Membuat senyawa organik sendiri dari bahan anorganik (fotosintesis)', 'Tumbuhan hijau, alga, fitoplankton'],
        ['Heterotrof', 'Memperoleh makanan dengan memakan organisme lain atau sisanya', 'Manusia, hewan, jamur, sebagian besar bakteri'],
      ]},
    ],
    activityTitle: 'Latihan: Kebutuhan Makhluk Hidup',
    questions: [
      { text: 'Organisme yang mampu menghasilkan makanannya sendiri melalui fotosintesis karena memiliki klorofil disebut...', opts: ['Heterotrof', 'Autotrof', 'Dekomposer', 'Parasit'], ans: 1, exp: 'Auto = sendiri, trof = makan → autotrof.' },
      { text: 'Mengapa jamur (Fungi) TIDAK digolongkan sebagai tumbuhan autotrof?', opts: ['Karena jamur tidak memiliki klorofil sehingga tidak bisa berfotosintesis', 'Karena jamur hidup di air saja', 'Karena jamur bisa berlari', 'Karena jamur tidak punya sel'], ans: 0, exp: 'Jamur bersifat heterotrof (menyerap nutrisi dari bahan organik).' },
      { text: 'Fungsi utama air bagi metabolisme sel makhluk hidup adalah...', opts: ['Pelarut zat gizi, media reaksi kimia, dan pengatur suhu tubuh', 'Sumber bunyi', 'Penghasil logam', 'Pengganti oksigen'], ans: 0, exp: 'Lebih dari 60% massa sel tersusun atas air.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-01', subSeq: 3,
    objectives: ['Siswa mampu melakukan pengamatan ilmiah (kualitatif dan kuantitatif) terhadap karakteristik makhluk hidup.'],
    materialTitle: 'Pengamatan Karakteristik Makhluk Hidup',
    blocks: [
      { type: 'visual_cards', title: '2 Jenis Data Pengamatan Ilmiah IPA', cards: [
        { emoji: '👀', label: 'Pengamatan Kualitatif', sub: 'Memakai indra tanpa angka ukur (warna daun hijau, permukaan kasar, aroma wangi)' },
        { emoji: '📏', label: 'Pengamatan Kuantitatif', sub: 'Memakai alat ukur dengan ANGKA & SATUAN (panjang daun 12 cm, suhu 28°C, jumlah kelopak 5)' },
      ]},
    ],
    activityTitle: 'Latihan: Pengamatan Karakteristik',
    questions: [
      { text: 'Hasil pengamatan: "Panjang tubuh ikan bandeng 32 cm dengan massa 450 gram." Data ini termasuk pengamatan...', opts: ['Kuantitatif', 'Kualitatif', 'Opini', 'Hipotesis'], ans: 0, exp: 'Memuat hasil pengukuran berupa angka dan satuan.' },
      { text: 'Sedangkan pernyataan "Sisik ikan bandeng mengilap keperakan dan ekornya bercabang" termasuk data...', opts: ['Kuantitatif', 'Kualitatif', 'Perhitungan', 'Rumus'], ans: 1, exp: 'Mendeskripsikan sifat/ciri yang diamati indra tanpa angka ukur.' },
      { text: 'Dalam metode ilmiah IPA, dugaan sementara yang akan diuji melalui percobaan disebut...', opts: ['Hipotesis', 'Kesimpulan', 'Data akhir', 'Hukum'], ans: 0, exp: 'Hipotesis = jawaban sementara berbasis kajian awal.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-01', subSeq: 4,
    objectives: ['Siswa mampu membedakan makhluk hidup dan benda tak hidup (termasuk robot/api) menggunakan keseluruhan kriteria kehidupan.'],
    materialTitle: 'Membedakan Makhluk Hidup dan Benda Tak Hidup',
    blocks: [
      { type: 'misconception', wrong: 'Mengira robot atau mobil adalah makhluk hidup karena bisa bergerak dan butuh energi (baterai/bensin).', right: 'Sesuatu disebut makhluk hidup HANYA jika memenuhi SELURUH ciri kehidupan (tersusun dari sel, tumbuh alami, berkembang biak, beradaptasi). Robot & api tidak tersusun dari sel dan tidak bereproduksi biologis!' },
    ],
    activityTitle: 'Latihan: Makhluk Hidup vs Benda Tak Hidup',
    questions: [
      { text: 'Api dapat membesar ("tumbuh") dan bergerak tertiup angin, tetapi BUKAN makhluk hidup karena api...', opts: ['Tidak tersusun dari sel dan tidak memiliki materi genetik/reproduksi biologis', 'Berwarna merah', 'Terasa panas', 'Bisa padam'], ans: 0, exp: 'Unit struktural dasar semua makhluk hidup adalah SEL.' },
      { text: 'Biji kacang hijau kering yang disimpan di toples tampak diam, namun tetap tergolong makhluk hidup karena...', opts: ['Berada dalam keadaan istirahat (dormansi) dan akan berkecambah jika mendapat air serta udara', 'Terbuat dari plastik', 'Bisa memantul', 'Tidak punya sel'], ans: 0, exp: 'Biji menyimpan embrio hidup dalam fase dormansi.' },
      { text: 'Unit struktural dan fungsional terkecil penyusun seluruh makhluk hidup adalah...', opts: ['Atom batu', 'Sel', 'Tulang', 'Kulit'], ans: 1, exp: 'Semua organisme tersusun dari 1 sel (uniseluler) atau banyak sel (multiseluler).' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-01', subSeq: 5,
    objectives: ['Siswa mampu menggunakan ciri morfologi yang dapat diamati (tulang daun, jenis akar, jumlah kaki, penutup tubuh) untuk mengenali organisme.'],
    materialTitle: 'Mengenali Organisme dari Ciri Morfologi',
    blocks: [
      { type: 'table', title: 'Ciri Pengamatan Cepat Tumbuhan Monokotil vs Dikotil', headers: ['Bagian', 'Monokotil (Padi, Jagung, Kelapa)', 'Dikotil (Mangga, Kacang, Cabai)'], rows: [
        ['Akar', 'Serabut', 'Tunggang'],
        ['Tulang Daun', 'Sejajar / melengkung', 'Menyirip / menjari'],
        ['Biji (Keping)', '1 keping (berkeping satu)', '2 keping (berkeping dua)'],
        ['Kelopak Bunga', 'Kelipatan 3', 'Kelipatan 4 atau 5'],
      ]},
    ],
    activityTitle: 'Latihan: Ciri Morfologi Organisme',
    questions: [
      { text: 'Tanaman yang memiliki akar tunggang, tulang daun menyirip, dan biji berkeping dua (seperti pohon mangga) termasuk kelompok...', opts: ['Monokotil', 'Dikotil', 'Lumut', 'Paku'], ans: 1, exp: 'Dikotil = berkeping dua, akar tunggang, tulang daun menyirip/menjari.' },
      { text: 'Padi, jagung, dan kelapa memiliki akar serabut dan tulang daun sejajar sehingga tergolong...', opts: ['Monokotil', 'Dikotil', 'Gymnospermae', 'Jamur'], ans: 0, exp: 'Akar serabut + daun sejajar adalah ciri khas Monokotil.' },
      { text: 'Hewan bertulang belakang (vertebrata) yang tubuhnya berbulu, bernapas dengan paru-paru dibantu pundi-pundi udara, dan bertelur termasuk kelas...', opts: ['Aves (Burung)', 'Mamalia', 'Reptilia', 'Amfibi'], ans: 0, exp: 'Bulu (feathers) dan pundi udara adalah ciri khas kelas Aves.' },
    ],
  },

  // BAB 2: KLASIFIKASI MAKHLUK HIDUP
  {
    topicCode: 'IPA-SMP7-02', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan tujuan klasifikasi, ilmu taksonomi, dan urutan tingkatan takson dari Kingdom sampai Spesies.'],
    materialTitle: 'Tujuan Klasifikasi & Urutan Takson',
    blocks: [
      { type: 'formula', name: 'Urutan 7 Tingkatan Takson (Dari Umum → Khusus)', expression: 'Kingdom → Filum/Divisi → Kelas → Ordo → Famili → Genus → Spesies', note: 'Makin ke bawah (menuju Spesies): jumlah anggota makin SEDIKIT, tetapi persamaan ciri makin BANYAK!' },
      { type: 'tip', text: 'Bapak Taksonomi: Carolus Linnaeus — pencetus tata nama ganda (Binomial Nomenklatur), contoh: Oryza sativa (padi), huruf pertama Genus kapital, spesies kecil, ditulis miring/digarisbawahi!' },
    ],
    activityTitle: 'Latihan: Tujuan & Takson Klasifikasi',
    questions: [
      { text: 'Urutan tingkatan takson dari yang tertinggi (paling umum) ke terendah (paling spesifik) adalah...', opts: ['Kingdom → Filum → Kelas → Ordo → Famili → Genus → Spesies', 'Spesies → Genus → Famili → Ordo → Kelas → Filum → Kingdom', 'Kingdom → Kelas → Filum → Ordo → Genus → Famili → Spesies', 'Ordo → Kelas → Kingdom → Spesies'], ans: 0, exp: 'Ingat jembatan: Ki-Fi-Ke-Or-Fa-Ge-Spe.' },
      { text: 'Penulisan nama ilmiah padi yang BENAR menurut aturan Binomial Nomenklatur adalah...', opts: ['Oryza Sativa', 'Oryza sativa (miring / digarisbawahi terpisah)', 'oryza sativa', 'ORYZA SATIVA'], ans: 1, exp: 'Kata pertama (Genus) kapital, kata kedua (spesies) huruf kecil, miring/garis bawah terpisah.' },
      { text: 'Tujuan utama para ilmuwan mengklasifikasikan makhluk hidup adalah...', opts: ['Mempermudah pengenalan, perbandingan, dan mengetahui hubungan kekerabatan antarorganisme', 'Mengurangi jumlah spesies di bumi', 'Menghafal bahasa Latin saja', 'Menyamakan semua hewan'], ans: 0, exp: 'Klasifikasi menyederhanakan studi jutaan spesies.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-02', subSeq: 2,
    objectives: ['Siswa mampu mengelompokkan organisme berdasarkan persamaan dan perbedaan ciri fisik serta cara hidupnya.'],
    materialTitle: 'Persamaan dan Perbedaan Ciri dalam Klasifikasi',
    blocks: [
      { type: 'worked_example', level: 'Kekerabatan Dekat', question: 'Antara Kucing (Felis catus), Harimau (Panthera tigris), dan Ikan Bandeng (Chanos chanos), mana dua hewan yang kekerabatannya paling dekat?', steps: ['Kucing dan Harimau sama-sama Mamalia (menyusui, berambut) dan sama-sama Famili Felidae (karnivora bercakar).', 'Ikan Bandeng berbeda kelas (Pisces, insang, sisik).'], answer: 'Kucing dan Harimau jauh lebih dekat kekerabatannya!' },
    ],
    activityTitle: 'Latihan: Persamaan & Perbedaan Ciri',
    questions: [
      { text: 'Dua makhluk hidup yang berada dalam satu GENUS yang sama pasti memiliki lebih banyak persamaan ciri dibandingkan dua makhluk yang hanya sama...', opts: ['Kingdomnya saja', 'Spesiesnya', 'Individunya', 'Induknya'], ans: 0, exp: 'Genus jauh lebih rendah/spesifik dibanding Kingdom.' },
      { text: 'Paus dan lumba-lumba hidup di laut seperti ikan, tetapi dikelompokkan ke kelas MAMALIA (bukan Pisces) karena...', opts: ['Bernapas dengan paru-paru, berdarah panas, melahirkan, dan menyusui anaknya', 'Memiliki sirip saja', 'Hidup di air laut', 'Berukuran besar'], ans: 0, exp: 'Klasifikasi ilmiah melihat ciri anatomi & fisiologi utama, bukan sekadar habitat.' },
      { text: 'Semakin banyak persamaan ciri antara dua organisme, maka hubungan kekerabatannya semakin...', opts: ['Dekat', 'Jauh', 'Tidak ada', 'Berlawanan'], ans: 0, exp: 'Persamaan ciri mencerminkan kedekatan kekerabatan.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-02', subSeq: 3,
    objectives: ['Siswa mampu mengelompokkan hewan Vertebrata (5 kelas) dan Avertebrata (invertebrata) dasar.'],
    materialTitle: 'Pengelompokan Hewan (Vertebrata & Avertebrata)',
    blocks: [
      { type: 'table', title: '5 Kelas Hewan Bertulang Belakang (Vertebrata)', headers: ['Kelas', 'Alat Napas', 'Penutup Tubuh', 'Contoh'], rows: [
        ['Pisces (Ikan)', 'Insang', 'Sisik berlendir', 'Bandeng, lele, hiu'],
        ['Amfibi', 'Insang (berudu) → Paru-paru & kulit', 'Kulit basah tipis', 'Katak, salamander'],
        ['Reptilia', 'Paru-paru', 'Sisik kering/keras', 'Ular, cicak, buaya, kura-kura'],
        ['Aves (Burung)', 'Paru-paru + pundi udara', 'Bulu (feathers)', 'Elang, merpati, ayam'],
        ['Mamalia', 'Paru-paru', 'Rambut & kelenjar susu', 'Kucing, sapi, kelelawar, paus'],
      ]},
    ],
    activityTitle: 'Latihan: Vertebrata & Avertebrata',
    questions: [
      { text: 'Kelelawar dapat terbang seperti burung, tetapi termasuk kelas MAMALIA karena...', opts: ['Melahirkan, menyusui anak, dan tubuhnya berambut', 'Memiliki sayap', 'Keluar malam hari', 'Bertelur'], ans: 0, exp: 'Kelelawar adalah satu-satunya mamalia yang mampu terbang sejati.' },
      { text: 'Hewan yang TIDAK memiliki tulang belakang (Avertebrata), contohnya udang, kepiting, serangga, dan cacing. Udang dan kepiting termasuk filum berkaki beruas-ruas yaitu...', opts: ['Arthropoda', 'Mollusca', 'Porifera', 'Pisces'], ans: 0, exp: 'Arthropoda = hewan berkaki berbuku-buku (serangga, laba-laba, udang, kepiting).' },
      { text: 'Cumi-cumi, siput, dan kerang yang bertubuh lunak termasuk filum...', opts: ['Mollusca', 'Arthropoda', 'Reptilia', 'Amfibi'], ans: 0, exp: 'Mollusca = hewan bertubuh lunak (sering bercangkang).' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-02', subSeq: 4,
    objectives: ['Siswa mampu membedakan 5 Kingdom makhluk hidup (Monera, Protista, Fungi, Plantae, Animalia) menurut Whittaker.'],
    materialTitle: 'Pengenalan 5 Kingdom Makhluk Hidup',
    blocks: [
      { type: 'table', title: 'Sistem Klasifikasi 5 Kingdom (R.H. Whittaker)', headers: ['Kingdom', 'Ciri Utama Sel & Nutrisi', 'Contoh'], rows: [
        ['1. Monera', 'Prokariotik (belum punya membran inti sel), bersel satu', 'Bakteri (E. coli, Lactobacillus), alga biru-hijau'],
        ['2. Protista', 'Eukariotik (ada membran inti), umumnya bersel satu/sederhana', 'Amoeba, Paramecium, alga/ganggang (rumput laut)'],
        ['3. Fungi (Jamur)', 'Eukariotik, berdinding sel kitin, HETEROTROF (tanpa klorofil)', 'Jamur tiram, ragi (Saccharomyces), jamur tempe (Rhizopus)'],
        ['4. Plantae (Tumbuhan)', 'Eukariotik, multiseluler, berklorofil (AUTOTROF)', 'Lumut, paku, tumbuhan berbiji (mangga, padi)'],
        ['5. Animalia (Hewan)', 'Eukariotik, multiseluler, heterotrof, bergerak aktif', 'Ikan, burung, serangga, mamalia'],
      ]},
    ],
    activityTitle: 'Latihan: 5 Kingdom Makhluk Hidup',
    questions: [
      { text: 'Satu-satunya kingdom yang tersusun atas sel PROKARIOTIK (belum memiliki membran inti sel) adalah...', opts: ['Monera (Bakteri)', 'Protista', 'Fungi', 'Plantae'], ans: 0, exp: 'Monera prokariotik; Protista, Fungi, Plantae, Animalia eukariotik.' },
      { text: 'Jamur tempe (Rhizopus oryzae) dan ragi pembuat roti termasuk kingdom...', opts: ['Plantae', 'Fungi', 'Monera', 'Animalia'], ans: 1, exp: 'Jamur dan ragi termasuk Kingdom Fungi.' },
      { text: 'Amoeba dan Paramecium yang hidup di air tawar, bersel satu, dan sudah memiliki membran inti termasuk kingdom...', opts: ['Monera', 'Protista', 'Fungi', 'Plantae'], ans: 1, exp: 'Protista = eukariotik sederhana (mirip hewan/tumbuhan/jamur).' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-02', subSeq: 5,
    objectives: ['Siswa mampu menggunakan kunci determinasi (kunci dikotomi) sederhana untuk mengidentifikasi spesies hewan atau tumbuhan.'],
    materialTitle: 'Kunci Determinasi (Dikotomi) Sederhana',
    blocks: [
      { type: 'worked_example', level: 'Membaca Kunci Dikotomi', question: 'Kunci: 1a. Bertulang belakang → 2; 1b. Tak bertulang belakang → Serangga. | 2a. Hidup di air, bernapas insang → Ikan; 2b. Bernapas paru-paru → 3. | 3a. Berbulu → Burung; 3b. Berambut → Mamalia. Tentukan urutan kunci untuk KUCING!', steps: ['Mulai dari nomor 1: Kucing bertulang belakang → pilih 1a (lanjut ke 2).', 'Nomor 2: Kucing bernapas paru-paru → pilih 2b (lanjut ke 3).', 'Nomor 3: Kucing berambut → pilih 3b (Mamalia!).'], answer: 'Urutan kunci determinasi Kucing: 1a – 2b – 3b.' },
    ],
    activityTitle: 'Latihan: Kunci Determinasi',
    questions: [
      { text: 'Berdasarkan kunci determinasi di atas (1a→2, 2a→Ikan, 2b→3, 3a→Burung, 3b→Mamalia), urutan kunci untuk IKAN BANDENG adalah...', opts: ['1a – 2a', '1a – 2b – 3a', '1b', '1a – 2b – 3b'], ans: 0, exp: 'Bertulang belakang (1a) → bernapas insang di air (2a = Ikan).' },
      { text: 'Berdasarkan kunci yang sama, urutan kunci untuk BURUNG MERPATI adalah...', opts: ['1a – 2a', '1a – 2b – 3a', '1a – 2b – 3b', '1b – 2a'], ans: 1, exp: '1a (vertebrata) → 2b (paru-paru) → 3a (berbulu = Burung).' },
      { text: 'Setiap nomor pada kunci determinasi dikotomi selalu terdiri atas ... pernyataan ciri yang saling berlawanan.', opts: ['2 (a dan b)', '5', '10', '1 saja'], ans: 0, exp: 'Di = dua → dikotomi membagi pilihan menjadi 2 ciri kontras (a dan b).' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-02', subSeq: 6,
    objectives: ['Siswa memahami pentingnya keanekaragaman hayati Indonesia (tingkat gen, spesies, ekosistem) dan konservasi in-situ vs ex-situ.'],
    materialTitle: 'Keanekaragaman Hayati & Konservasi',
    blocks: [
      { type: 'table', title: 'Konservasi In-Situ vs Ex-Situ', headers: ['Jenis Pelestarian', 'Pengertian', 'Contoh di Indonesia'], rows: [
        ['In-Situ (Di habitat asli)', 'Melindungi satwa/tumbuhan di tempat tinggal alaminya', 'Taman Nasional (Baluran, Bromo Tengger Semeru, Ujung Kulon, Komodo), Cagar Alam'],
        ['Ex-Situ (Di luar habitat asli)', 'Memindahkan untuk penangkaran/perawatan khusus', 'Kebun Raya (Purwodadi/Bogor), Kebun Binatang, Bank Benih'],
      ]},
    ],
    activityTitle: 'Latihan: Keanekaragaman Hayati',
    questions: [
      { text: 'Pelestarian banteng di Taman Nasional Baluran (Jawa Timur) yang merupakan habitat aslinya termasuk konservasi...', opts: ['In-situ', 'Ex-situ', 'Sintetis', 'Buatan'], ans: 0, exp: 'In-situ = di dalam habitat asli; Ex-situ = di luar habitat asli.' },
      { text: 'Pelestarian beragam koleksi tumbuhan langka di Kebun Raya Purwodadi atau Kebun Raya Bogor termasuk konservasi...', opts: ['In-situ', 'Ex-situ', 'Abrasi', 'Erosi'], ans: 1, exp: 'Kebun raya dan kebun binatang adalah pelestarian ex-situ.' },
      { text: 'Variasi warna dan rasa buah mangga (manalagi, arumanis, gedong) dalam satu spesies yang sama menunjukkan keanekaragaman hayati tingkat...', opts: ['Gen', 'Ekosistem', 'Kingdom', 'Planet'], ans: 0, exp: 'Perbedaan varietas dalam 1 spesies adalah keanekaragaman tingkat gen.' },
    ],
  },

  // BAB 3: PENGUKURAN DALAM IPA
  {
    topicCode: 'IPA-SMP7-03', subSeq: 1,
    objectives: ['Siswa mampu membedakan besaran, nilai, dan satuan serta membedakan satuan baku dan tak baku.'],
    materialTitle: 'Besaran, Nilai, dan Satuan',
    blocks: [
      { type: 'formula', name: 'Komponen Hasil Pengukuran', expression: 'Panjang meja = 120 cm   →   Besaran: Panjang | Nilai: 120 | Satuan: cm', note: 'Besaran adalah segala sesuatu yang dapat DIUKUR dan dinyatakan dengan ANGKA + SATUAN.' },
    ],
    activityTitle: 'Latihan: Besaran & Satuan',
    questions: [
      { text: 'Pada pernyataan "Massa ikan bandeng adalah 2,5 kg", yang merupakan BESARAN adalah...', opts: ['Massa', '2,5', 'kg', 'Ikan bandeng'], ans: 0, exp: 'Massa = besaran; 2,5 = nilai; kg = satuan.' },
      { text: 'Manakah yang BUKAN merupakan besaran fisika (karena tidak dapat diukur objektif dengan alat ukur)?', opts: ['Panjang', 'Suhu', 'Keindahan lukisan', 'Waktu'], ans: 2, exp: 'Keindahan bersifat subjektif, bukan besaran fisika.' },
      { text: 'Syarat satuan internasional (baku) yang baik adalah...', opts: ['Bersifat tetap, mudah ditiru, dan diakui secara internasional', 'Berubah mengikuti ukuran tangan pengukur', 'Hanya dipakai di satu desa', 'Berbeda tiap negara'], ans: 0, exp: 'Satuan baku menghasilkan pengukuran seragam di seluruh dunia.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-03', subSeq: 2,
    objectives: ['Siswa mampu membedakan 7 Besaran Pokok dan contoh Besaran Turunan beserta satuannya.'],
    materialTitle: 'Besaran Pokok dan Besaran Turunan',
    blocks: [
      { type: 'table', title: '7 Besaran Pokok SI (Jembatan: JiWa SMP Pa-Ku!)', headers: ['Besaran Pokok', 'Satuan SI', 'Simbol'], rows: [
        ['1. Panjang', 'meter', 'm'],
        ['2. Massa', 'kilogram', 'kg'],
        ['3. Waktu', 'sekon (detik)', 's'],
        ['4. Suhu', 'kelvin', 'K'],
        ['5. Kuat Arus Listrik', 'ampere', 'A'],
        ['6. Intensitas Cahaya', 'kandela', 'cd'],
        ['7. Jumlah Zat', 'mol', 'mol'],
      ]},
      { type: 'tip', text: 'Besaran TURUNAN diturunkan dari besaran pokok — contoh: Luas (m²), Volume (m³), Kecepatan (m/s), Massa Jenis (kg/m³), Gaya (N)!' },
    ],
    activityTitle: 'Latihan: Besaran Pokok & Turunan',
    questions: [
      { text: 'Kelompok besaran yang SEMUANYA merupakan BESARAN POKOK adalah...', opts: ['Panjang, massa, waktu, suhu', 'Luas, volume, kecepatan', 'Massa, berat, gaya', 'Suhu, panjang, tekanan'], ans: 0, exp: 'Panjang, massa, waktu, suhu termasuk 7 besaran pokok.' },
      { text: 'Satuan SI untuk besaran pokok SUHU adalah...', opts: ['Celcius (°C)', 'Kelvin (K)', 'Fahrenheit (°F)', 'Reamur (°R)'], ans: 1, exp: 'Dalam SI, satuan resmi suhu adalah Kelvin (K), bukan Celcius!' },
      { text: 'Kecepatan (m/s) merupakan besaran turunan yang diturunkan dari besaran pokok...', opts: ['Panjang dan waktu', 'Massa dan waktu', 'Panjang dan suhu', 'Massa dan panjang'], ans: 0, exp: 'Kecepatan = Jarak (panjang, m) ÷ Waktu (s).' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-03', subSeq: 3,
    objectives: ['Siswa memahami sistem Satuan Internasional (SI) dan awalan metrik (kilo, hekto, senti, mili, mikro).'],
    materialTitle: 'Satuan SI dan Awalan Metrik',
    blocks: [
      { type: 'table', title: 'Awalan Satuan SI yang Sering Dipakai', headers: ['Awalan', 'Simbol', 'Faktor Pengali', 'Contoh'], rows: [
        ['kilo', 'k', '1.000 (10³)', '1 km = 1.000 m'],
        ['senti', 'c', '1/100 (10⁻²)', '100 cm = 1 m'],
        ['mili', 'm', '1/1.000 (10⁻³)', '1.000 mm = 1 m'],
        ['mikro', 'μ', '1/1.000.000 (10⁻⁶)', 'Ukuran sel/bakteri dalam μm'],
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
    topicCode: 'IPA-SMP7-03', subSeq: 4,
    objectives: ['Siswa mampu mengenal alat ukur panjang (mistar, jangka sorong, mikrometer sekrup), massa (neraca), waktu (stopwatch), suhu (termometer), dan volume (gelas ukur).'],
    materialTitle: 'Alat Ukur Panjang, Massa, Waktu, Suhu, & Volume',
    blocks: [
      { type: 'table', title: 'Alat Ukur & Tingkat Ketelitiannya', headers: ['Besaran', 'Alat Ukur', 'Ketelitian (NST)'], rows: [
        ['Panjang', 'Mistar (penggaris) | Jangka sorong | Mikrometer sekrup', '1 mm (0,1 cm) | 0,1 mm (0,01 cm) | 0,01 mm (0,001 cm)'],
        ['Massa', 'Neraca Ohaus (3 lengan), neraca digital', 'Hingga 0,1 g / 0,01 g'],
        ['Waktu', 'Stopwatch (analog/digital)', '0,1 s / 0,01 s'],
        ['Suhu', 'Termometer raksa/alkohol/digital', '0,5°C – 1°C'],
        ['Volume benda tak beraturan', 'Gelas ukur berisi air (metode celup: V = V₂ − V₁)', '1 mL'],
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
    topicCode: 'IPA-SMP7-03', subSeq: 5,
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
    topicCode: 'IPA-SMP7-03', subSeq: 6,
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
    topicCode: 'IPA-SMP7-03', subSeq: 7,
    objectives: ['Siswa mampu membaca skala alat ukur tanpa kesalahan paralaks serta membaca jangka sorong sederhana.'],
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

  // BAB 4: ZAT DAN PERUBAHANNYA
  {
    topicCode: 'IPA-SMP7-04', subSeq: 1,
    objectives: ['Siswa mampu membedakan sifat fisika (warna, titik leleh, massa jenis ρ = m/V) dan sifat kimia (mudah terbakar, berkarat).'],
    materialTitle: 'Sifat Zat dan Massa Jenis (ρ = m/V)',
    blocks: [
      { type: 'formula', name: 'Rumus Massa Jenis (Densitas)', expression: 'ρ = m / V   (satuan SI: kg/m³ atau g/cm³)', note: 'Air murni punya ρ = 1 g/cm³ (1.000 kg/m³). Benda dengan ρ < ρ air akan TERAPUNG; jika ρ > ρ air akan TENGGELAM!' },
      { type: 'worked_example', level: 'Hitung Massa Jenis', question: 'Sebuah balok logam bermassa 156 gram dan bervolume 20 cm³. Berapa massa jenisnya?', steps: ['ρ = m ÷ V = 156 ÷ 20 = 7,8 g/cm³ (ciri khas besi!).'], answer: '7,8 g/cm³.' },
    ],
    activityTitle: 'Latihan: Sifat Zat & Massa Jenis',
    questions: [
      { text: 'Sebuah benda bermassa 240 gram memiliki volume 80 cm³. Massa jenis benda tersebut adalah...', opts: ['2 g/cm³', '3 g/cm³', '4 g/cm³', '320 g/cm³'], ans: 1, exp: 'ρ = 240 ÷ 80 = 3 g/cm³.' },
      { text: 'Minyak goreng (ρ = 0,8 g/cm³) dicampur dengan air (ρ = 1 g/cm³). Posisi minyak berada di...', opts: ['Lapisan atas (terapung) karena massa jenisnya lebih kecil dari air', 'Dasar gelas', 'Menyatu sempurna', 'Menguap langsung'], ans: 0, exp: 'Zat bermassa jenis lebih kecil selalu berada di atas.' },
      { text: 'Sifat mudah berkarat pada besi dan mudah terbakar pada bensin termasuk sifat...', opts: ['Fisika', 'Kimia', 'Biologi', 'Geometri'], ans: 1, exp: 'Sifat kimia berkaitan dengan kemampuan membentuk zat baru lewat reaksi kimia.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-04', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan susunan dan gerak partikel pada zat padat, cair, dan gas (teori partikel materi).'],
    materialTitle: 'Model Partikel Zat Padat, Cair, dan Gas',
    blocks: [
      { type: 'table', title: 'Susunan Partikel 3 Wujud Zat', headers: ['Wujud', 'Jarak & Susunan Partikel', 'Gaya Tarik', 'Gerak Partikel'], rows: [
        ['Padat', 'Sangat rapat dan teratur', 'Sangat kuat', 'Hanya bergetar di tempat'],
        ['Cair', 'Agak renggang, kurang teratur', 'Sedang', 'Saling meluncur/mengalir'],
        ['Gas', 'Sangat berjauhan, acak', 'Sangat lemah', 'Bergerak sangat bebas ke segala arah'],
      ]},
    ],
    activityTitle: 'Latihan: Model Partikel Zat',
    questions: [
      { text: 'Mengapa zat GAS sangat mudah dimampatkan (dikompresi) dibandingkan zat padat?', opts: ['Karena jarak antarpartikel gas sangat renggang/berjauhan', 'Karena partikel gas tidak bergerak', 'Karena gaya tarik partikel gas sangat kuat', 'Karena gas tidak bermassa'], ans: 0, exp: 'Ruang kosong antarpartikel gas sangat besar sehingga mudah ditekan.' },
      { text: 'Ciri partikel zat PADAT yang menyebabkan bentuknya selalu tetap adalah...', opts: ['Susunan sangat rapat, teratur, gaya tarik kuat, hanya bergetar di tempat', 'Bergerak bebas sangat cepat', 'Tidak memiliki gaya tarik', 'Jaraknya sangat jauh'], ans: 0, exp: 'Ikatan kuat menjaga posisi partikel padat.' },
      { text: 'Aroma parfum yang disemprotkan di pojok kelas cepat tercium sampai belakang karena partikel gas mengalami...', opts: ['Difusi (menyebar bebas dari konsentrasi tinggi ke rendah)', 'Pembekuan', 'Pengendapan', 'Penyaringan'], ans: 0, exp: 'Gerak bebas partikel gas memicu difusi cepat.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-04', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan hubungan antara titik leleh/titik didih, perubahan energi partikel, dan 6 perubahan wujud zat.'],
    materialTitle: 'Perubahan Wujud & Energi Partikel',
    blocks: [
      { type: 'text', text: 'Saat zat DIPANASKAN (menyerap kalor), energi gerak partikel meningkat sehingga ikatannya melonggar (padat → cair → gas). Sebaliknya saat DIDINGINKAN (melepas kalor), gerak partikel melambat sehingga partikel merapat (gas → cair → padat).' },
      { type: 'tip', text: 'Pada tekanan 1 atm, air murni membeku/meleleh pada 0°C dan mendidih pada 100°C. Selama proses meleleh atau mendidih, SUHU ZAT TETAP karena seluruh kalor dipakai memutus ikatan partikel!' },
    ],
    activityTitle: 'Latihan: Perubahan Wujud SMP',
    questions: [
      { text: 'Saat es batu 0°C sedang mencair seluruhnya di dalam gelas, suhu campuran es dan air selama proses meleleh tersebut...', opts: ['Terus naik cepat', 'Tetap di 0°C sampai seluruh es mencair (kalor dipakai mengubah wujud)', 'Turun ke −10°C', 'Langsung 100°C'], ans: 1, exp: 'Kalor laten lebur digunakan mengubah wujud, bukan menaikkan suhu.' },
      { text: 'Perubahan wujud yang disertai PELEPASAN kalor oleh partikel zat adalah...', opts: ['Membeku, mengembun, mengkristal', 'Mencair, menguap, menyublim', 'Mencair dan membeku', 'Menguap dan mengembun'], ans: 0, exp: 'Ketiganya menurunkan energi partikel (melepas kalor).' },
      { text: 'Terbentuknya salju dari uap air di awan bersuhu di bawah 0°C merupakan perubahan wujud...', opts: ['Deposisi / mengkristal (gas → padat)', 'Menyublim', 'Mencair', 'Menguap'], ans: 0, exp: 'Uap air (gas) langsung berubah menjadi kristal es (padat).' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-04', subSeq: 4,
    objectives: ['Siswa mampu membedakan perubahan fisika (tidak membentuk zat baru) dan perubahan kimia (membentuk zat baru + 4 cirinya).'],
    materialTitle: 'Perubahan Fisika dan Perubahan Kimia',
    blocks: [
      { type: 'table', title: 'Perbandingan Perubahan Fisika vs Kimia', headers: ['Aspek', 'Perubahan Fisika', 'Perubahan Kimia (Reaksi Kimia)'], rows: [
        ['Zat Baru', 'TIDAK terbentuk zat baru (komposisi sama)', 'TERBENTUK ZAT BARU yang sifatnya beda dari asalnya'],
        ['Ciri Khas', 'Hanya berubah bentuk, ukuran, wujud, atau pelarutan', 'Perubahan warna, bau, muncul gas, endapan, atau panas/cahaya'],
        ['Contoh', 'Es mencair, gula larut di air, kayu dipotong jadi meja', 'Kertas dibakar jadi abu, besi berkarat, nasi basi, fotosintesis, fermentasi tempe'],
      ]},
    ],
    activityTitle: 'Latihan: Perubahan Fisika & Kimia',
    questions: [
      { text: 'Manakah peristiwa yang termasuk PERUBAHAN KIMIA?', opts: ['Gula dilarutkan dalam teh hangat', 'Besi pagar berkarat dan susu berubah menjadi yoghurt', 'Lilin meleleh terkena panas', 'Beras digiling menjadi tepung beras'], ans: 1, exp: 'Perkaratan dan fermentasi menghasilkan zat kimia baru.' },
      { text: 'Beras ditumbuk menjadi tepung beras termasuk perubahan FISIKA karena...', opts: ['Hanya berubah ukuran butirannya, zat penyusunnya tetap pati beras', 'Menghasilkan gas dan asap', 'Terbentuk zat beracun baru', 'Warnanya jadi hitam'], ans: 0, exp: 'Tidak ada zat baru yang terbentuk.' },
      { text: 'Empat tanda umum terjadinya reaksi (perubahan) kimia adalah terbentuknya gas, terbentuknya endapan, perubahan warna/bau, dan...', opts: ['Perubahan suhu/energi (panas/cahaya)', 'Perubahan tempat', 'Perubahan nama wadah', 'Perubahan panjang tali'], ans: 0, exp: 'Reaksi kimia sering disertai pelepasan/penyerapan panas atau cahaya.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-04', subSeq: 5,
    objectives: ['Siswa mampu membedakan zat tunggal (unsur dan senyawa) serta campuran (homogen dan heterogen).'],
    materialTitle: 'Unsur, Senyawa, dan Campuran',
    blocks: [
      { type: 'table', title: 'Klasifikasi Materi', headers: ['Kelompok', 'Penjelasan', 'Contoh'], rows: [
        ['Unsur', 'Zat tunggal paling sederhana (1 jenis atom)', 'Oksigen (O₂), Besi (Fe), Emas (Au), Karbon (C)'],
        ['Senyawa', 'Gabungan ≥2 unsur secara KIMIA (perbandingan tetap)', 'Air (H₂O), Garam dapur (NaCl), Gula, CO₂'],
        ['Campuran Homogen', 'Tercampur merata (1 fase, tak tampak batas)', 'Air gula, air garam, sirup, udara bersih, perunggu'],
        ['Campuran Heterogen', 'Tidak merata (tampak batas komponennya)', 'Air + pasir, air + minyak, kopi tubruk'],
      ]},
    ],
    activityTitle: 'Latihan: Unsur, Senyawa, Campuran',
    questions: [
      { text: 'Air murni (H₂O) dan garam dapur (NaCl) termasuk zat tunggal berjenis...', opts: ['Unsur', 'Senyawa', 'Campuran heterogen', 'Koloid'], ans: 1, exp: 'Tersusun dari 2 unsur berbeda yang terikat secara kimia.' },
      { text: 'Emas murni (Au), besi (Fe), dan gas oksigen (O₂) termasuk...', opts: ['Unsur', 'Senyawa', 'Larutan', 'Suspensi'], ans: 0, exp: 'Hanya tersusun oleh satu jenis atom unsur.' },
      { text: 'Larutan gula dalam air jernih dan udara bersih merupakan contoh campuran...', opts: ['Homogen', 'Heterogen', 'Unsur murni', 'Senyawa tunggal'], ans: 0, exp: 'Komponen tercampur serba sama tanpa batas terlihat.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-04', subSeq: 6,
    objectives: ['Siswa mampu membedakan larutan, koloid, dan suspensi secara pengenalan sifat fisik (ukuran partikel, penyaringan, kestabilan).'],
    materialTitle: 'Pengenalan Larutan, Koloid, dan Suspensi',
    blocks: [
      { type: 'table', title: 'Beda Larutan, Koloid, dan Suspensi', headers: ['Sifat', 'Larutan (Air Garam)', 'Koloid (Susu, Santan, Kabut)', 'Suspensi (Air Lumpur/Kopi)'], rows: [
        ['Penampakan', 'Jernih, 1 fase', 'Keruh tetapi tampak stabil', 'Keruh, tampak partikel kasar'],
        ['Jika Didiamkan', 'Tidak mengendap', 'Tidak mudah mengendap', 'MENGENDAP di dasar!'],
        ['Disaring Kertas Biasa', 'Lolos semua', 'Lolos kertas saring biasa', 'Tersaring / tertinggal ampas!'],
      ]},
    ],
    activityTitle: 'Latihan: Larutan, Koloid, Suspensi',
    questions: [
      { text: 'Susu cair, santan, agar-agar, dan kabut merupakan contoh sistem campuran berjenis...', opts: ['Larutan sejati', 'Koloid', 'Suspensi kasar', 'Unsur'], ans: 1, exp: 'Koloid berada di antara larutan dan suspensi (tampak keruh namun stabil tidak mengendap).' },
      { text: 'Air sungai yang keruh oleh lumpur jika didiamkan beberapa jam akan mengendap di dasar gelas. Campuran ini adalah...', opts: ['Larutan', 'Koloid', 'Suspensi', 'Senyawa'], ans: 2, exp: 'Suspensi memiliki partikel kasar yang mengendap saat didiamkan.' },
      { text: 'Campuran yang paling jernih, satu fase, tidak mengendap, dan tidak dapat disaring kertas biasa adalah...', opts: ['Larutan (mis. air gula)', 'Suspensi', 'Pasir dan kerikil', 'Air dan minyak'], ans: 0, exp: 'Partikel terlarut pada larutan berukuran sangat kecil (molekuler).' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-04', subSeq: 7,
    objectives: ['Siswa mampu memilih metode pemisahan campuran fisika yang tepat: filtrasi, kristalisasi/evaporasi, destilasi, kromatografi, sublimasi, dan sentrifugasi.'],
    materialTitle: 'Metode Pemisahan Campuran Sederhana',
    blocks: [
      { type: 'table', title: '5 Metode Pemisahan Campuran Wajib Hafal!', headers: ['Metode', 'Dasar Pemisahan', 'Contoh Penerapan'], rows: [
        ['Filtrasi (Penyaringan)', 'Perbedaan ukuran partikel', 'Menyaring ampas kopi, penjernihan air keruh'],
        ['Evaporasi / Kristalisasi', 'Penguapan pelarut air', 'Petani garam memisahkan garam dari air laut!'],
        ['Destilasi (Penyulingan)', 'Perbedaan TITIK DIDIH zat cair', 'Memisahkan alkohol-air, pengolahan minyak bumi, air suling'],
        ['Kromatografi', 'Perbedaan kecepatan rambat di kertas', 'Memisahkan zat warna pada tinta spidol/pewarna makanan'],
        ['Sublimasi', 'Zat yang mudah menyublim', 'Memisahkan kapur barus dari campuran pasir'],
      ]},
    ],
    activityTitle: 'Latihan: Pemisahan Campuran',
    questions: [
      { text: 'Petani tambak garam di pesisir memisahkan garam dari air laut dengan memanfaatkan metode...', opts: ['Evaporasi / kristalisasi', 'Kromatografi', 'Filtrasi', 'Sentrifugasi'], ans: 0, exp: 'Air laut diuapkan sinar matahari hingga terbentuk kristal garam.' },
      { text: 'Untuk memisahkan dua cairan berbeda titik didih (misal air dan alkohol atau fraksi minyak bumi), digunakan metode...', opts: ['Filtrasi', 'Destilasi (penyulingan)', 'Kromatografi', 'Sublimasi'], ans: 1, exp: 'Destilasi memisahkan campuran cair berdasarkan perbedaan titik didih.' },
      { text: 'Untuk mengetahui warna-warna penyusun tinta spidol hitam memakai kertas saring dan air, digunakan metode...', opts: ['Kromatografi', 'Kristalisasi', 'Destilasi', 'Dekantasi'], ans: 0, exp: 'Kromatografi kertas menguraikan pigmen warna berdasarkan laju rambatnya.' },
    ],
  },

  // BAB 5: GERAK DAN GAYA
  {
    topicCode: 'IPA-SMP7-05', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan sifat relatif gerak benda terhadap pengamat.'],
    materialTitle: 'Konsep Gerak Relatif',
    blocks: [
      { type: 'text', text: 'Suatu benda dikatakan BERGERAK apabila kedudukannya berubah terhadap titik acuan tertentu. Gerak bersifat RELATIF: penumpang yang duduk di dalam bus yang melaju dikatakan DIAM terhadap kursi bus, tetapi BERGERAK terhadap pohon di pinggir jalan!' },
    ],
    activityTitle: 'Latihan: Konsep Gerak',
    questions: [
      { text: 'Alya duduk di dalam kereta yang sedang melaju dari Gresik ke Surabaya. Terhadap MASINIS kereta, Alya dikatakan...', opts: ['Diam (kedudukannya tidak berubah terhadap masinis)', 'Bergerak sangat cepat', 'Bergerak mundur', 'Jatuh bebas'], ans: 0, exp: 'Jarak Alya terhadap masinis tetap → diam relatif terhadap masinis.' },
      { text: 'Pohon-pohon di tepi jalan raya tampak seolah berlari ke belakang saat kita naik mobil. Gerak pohon tersebut disebut gerak...', opts: ['Gerak semu', 'Gerak sejati', 'Gerak jatuh', 'Gerak melingkar'], ans: 0, exp: 'Gerak semu terjadi karena kita yang bergerak sementara objek diam.' },
      { text: 'Syarat utama suatu benda dikatakan bergerak adalah mengalami perubahan...', opts: ['Posisi/kedudukan terhadap titik acuan', 'Warna', 'Massa', 'Suhu'], ans: 0, exp: 'Gerak = perubahan posisi terhadap acuan.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-05', subSeq: 2,
    objectives: ['Siswa mampu menentukan titik acuan untuk mendeskripsikan posisi dan gerak benda secara konsisten.'],
    materialTitle: 'Titik Acuan dalam Gerak',
    blocks: [
      { type: 'tip', text: 'Titik acuan adalah titik awal atau benda patokan yang dianggap diam untuk mengamati perubahan posisi benda lain. Mengganti titik acuan dapat mengubah apakah benda dianggap diam atau bergerak!' },
    ],
    activityTitle: 'Latihan: Titik Acuan',
    questions: [
      { text: 'Benda atau titik patokan yang dijadikan dasar untuk menentukan apakah benda lain bergerak atau diam disebut...', opts: ['Titik acuan', 'Titik didih', 'Titik leleh', 'Titik puncak'], ans: 0, exp: 'Definisi titik acuan dalam kinematika.' },
      { text: 'Bima berlari meninggalkan gerbang sekolah menuju lapangan. Jika titik acuannya adalah GERBANG SEKOLAH, maka posisi Bima...', opts: ['Menjauh (berubah kedudukan) sehingga Bima bergerak', 'Tetap diam', 'Tidak bisa diamati', 'Mendekat'], ans: 0, exp: 'Jarak Bima dari gerbang terus bertambah.' },
      { text: 'Matahari tampak bergerak dari timur ke barat setiap hari jika kita menggunakan ... sebagai titik acuan.', opts: ['Permukaan Bumi', 'Pusat Tata Surya', 'Jupiter', 'Bulan'], ans: 0, exp: 'Dari acuan pengamat di Bumi, Matahari tampak bergerak semu.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-05', subSeq: 3,
    objectives: ['Siswa mampu membedakan JARAK (skalar, total lintasan) dan PERPINDAHAN (vektor, garis lurus posisi awal ke akhir).'],
    materialTitle: 'Jarak dan Perpindahan',
    blocks: [
      { type: 'table', title: 'Beda Jarak vs Perpindahan', headers: ['Besaran', 'Pengertian', 'Jenis Besaran'], rows: [
        ['Jarak (s)', 'Total seluruh panjang lintasan yang ditempuh', 'Skalar (nilai saja, selalu positif)'],
        ['Perpindahan (Δx)', 'Jarak lurus dari posisi AWAL langsung ke posisi AKHIR + arahnya', 'Vektor (nilai DAN arah; bisa 0 jika kembali ke titik awal!)'],
      ]},
      { type: 'worked_example', level: 'Bolak-Balik', question: 'Raka berjalan 100 m ke timur, lalu berbalik 40 m ke barat. Berapa jarak dan perpindahannya?', steps: ['Jarak = total lintasan = 100 + 40 = 140 m.', 'Perpindahan = 100 − 40 = 60 m ke arah TIMUR.'], answer: 'Jarak = 140 m; Perpindahan = 60 m ke timur.' },
    ],
    activityTitle: 'Latihan: Jarak & Perpindahan',
    questions: [
      { text: 'Alya berlari mengelilingi lapangan 1 putaran penuh sepanjang 400 m dan kembali tepat ke garis start. Jarak dan perpindahan Alya berturut-turut adalah...', opts: ['400 m dan 400 m', '400 m dan 0 m', '0 m dan 400 m', '200 m dan 200 m'], ans: 1, exp: 'Total lintasan = 400 m; kembali ke titik awal → perpindahan = 0 m!' },
      { text: 'Bima berjalan 80 m ke utara lalu berbalik 30 m ke selatan. Besar perpindahan Bima adalah...', opts: ['110 m', '50 m ke utara', '50 m ke selatan', '30 m'], ans: 1, exp: '80 − 30 = 50 m ke utara.' },
      { text: 'Benda bergerak 3 m ke timur lalu belok tegak lurus 4 m ke utara. Jarak dan perpindahannya (pakai Pythagoras √(3²+4²)) adalah...', opts: ['Jarak 7 m, perpindahan 5 m', 'Jarak 5 m, perpindahan 7 m', 'Jarak 7 m, perpindahan 7 m', 'Jarak 12 m, perpindahan 5 m'], ans: 0, exp: 'Jarak = 3+4 = 7 m; perpindahan = √(9+16) = √25 = 5 m.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-05', subSeq: 4,
    objectives: ['Siswa mampu menghitung kelajuan (v = s/t), kecepatan, dan mengenal percepatan (a = Δv/Δt) serta GLB vs GLBB.'],
    materialTitle: 'Kelajuan, Kecepatan, dan Percepatan (GLB & GLBB)',
    blocks: [
      { type: 'formula', name: 'Rumus Kelajuan & Percepatan', expression: 'v = s / t   |   s = v × t   |   t = s / v   |   a = (v₂ − v₁) / t', note: 'GLB (Gerak Lurus Beraturan) = kecepatan TETAP (a = 0). GLBB = kecepatan berubah teratur (dipercepat / diperlambat)!' },
      { type: 'worked_example', level: 'Hitung Kelajuan', question: 'Sepeda motor menempuh 600 meter dalam waktu 30 detik. Berapa kelajuannya?', steps: ['v = s ÷ t = 600 m ÷ 30 s = 20 m/s (atau 72 km/jam).'], answer: '20 m/s.' },
    ],
    activityTitle: 'Latihan: Kelajuan & Kecepatan',
    questions: [
      { text: 'Seorang pelari menempuh lintasan 200 meter dalam waktu 25 sekon. Kelajuan rata-rata pelari tersebut adalah...', opts: ['6 m/s', '8 m/s', '10 m/s', '5 m/s'], ans: 1, exp: 'v = 200 ÷ 25 = 8 m/s.' },
      { text: 'Mobil melaju dari diam (0 m/s) hingga mencapai 20 m/s dalam waktu 4 sekon. Percepatan mobil tersebut adalah...', opts: ['4 m/s²', '5 m/s²', '16 m/s²', '80 m/s²'], ans: 1, exp: 'a = (20 − 0) ÷ 4 = 5 m/s².' },
      { text: 'Contoh gerak lurus berubah beraturan DIPERCEPAT (GLBB dipercepat) alami adalah...', opts: ['Buah kelapa jatuh bebas dari pohonnya', 'Bola dilempar vertikal ke atas', 'Mobil direm mendekati lampu merah', 'Kereta melaju konstan'], ans: 0, exp: 'Benda jatuh bebas makin cepat oleh gravitasi bumi.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-05', subSeq: 5,
    objectives: ['Siswa mampu membedakan gaya sentuh (otot, gesek, pegas) dan gaya tak sentuh (gravitasi, magnet, listrik) serta beda massa dan berat (w = m·g).'],
    materialTitle: 'Gaya Sentuh, Tak Sentuh, dan Berat Benda',
    blocks: [
      { type: 'formula', name: 'Hubungan Massa dan Berat (Gaya Gravitasi)', expression: 'w = m × g   (g Bumi ≈ 10 m/s² atau 9,8 m/s²)', note: 'Massa (kg) selalu TETAP di mana saja (di Bumi maupun di Bulan). Berat (Newton) berubah mengikuti gravitasi!' },
    ],
    activityTitle: 'Latihan: Pengertian Gaya',
    questions: [
      { text: 'Kelompok yang SEMUANYA merupakan gaya TAK SENTUH adalah...', opts: ['Gaya gravitasi, gaya magnet, gaya listrik statis', 'Gaya otot, gaya gesek, gaya pegas', 'Gaya dorong, gaya tarik, gaya gesek', 'Gaya pegas, gaya magnet, gaya otot'], ans: 0, exp: 'Gravitasi, magnet, dan listrik bekerja tanpa harus bersentuhan langsung.' },
      { text: 'Sebuah benda bermassa 6 kg di Bumi (g = 10 m/s²). Besar gaya berat (w) benda tersebut adalah...', opts: ['6 N', '16 N', '60 N', '0,6 N'], ans: 2, exp: 'w = m × g = 6 × 10 = 60 Newton.' },
      { text: 'Jika astronot bermassa 60 kg pergi ke Bulan (gravitasi 1/6 Bumi), maka...', opts: ['Massanya tetap 60 kg, tetapi beratnya mengecil menjadi 1/6 kali berat di Bumi', 'Massanya menjadi 10 kg', 'Massa dan beratnya sama-sama hilang', 'Beratnya bertambah 6 kali'], ans: 0, exp: 'Massa adalah jumlah materi (tetap); berat bergantung pada g.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-05', subSeq: 6,
    objectives: ['Siswa mampu menghitung resultan gaya (ΣF) segaris yang searah maupun berlawanan arah beserta arah geraknya.'],
    materialTitle: 'Resultan Gaya Segaris',
    blocks: [
      { type: 'formula', name: 'Rumus Resultan Gaya (ΣF)', expression: 'Searah: R = F₁ + F₂   |   Berlawanan arah: R = F besar − F kecil (arah ikut yang besar!)', note: 'Jika ΣF = 0 (gaya setimbang), benda diam tetap diam atau bergerak lurus beraturan!' },
      { type: 'worked_example', level: 'Tarik Tambang', question: 'Tim A menarik ke kanan dengan gaya 45 N dan 35 N. Tim B menarik ke kiri dengan gaya 65 N. Berapa resultan gaya dan ke mana arahnya?', steps: ['Total kanan = 45 + 35 = 80 N. Total kiri = 65 N.', 'Resultan = 80 − 65 = 15 N ke arah KANAN (Tim A menang!).'], answer: '15 N ke kanan.' },
    ],
    activityTitle: 'Latihan: Resultan Gaya',
    questions: [
      { text: 'Alya dan Salsa mendorong meja searah ke kanan dengan gaya masing-masing 25 N dan 30 N. Resultan gayanya adalah...', opts: ['5 N ke kanan', '55 N ke kanan', '55 N ke kiri', '750 N'], ans: 1, exp: 'Searah dijumlahkan: 25 + 30 = 55 N ke kanan.' },
      { text: 'Benda ditarik 40 N ke kanan dan 55 N ke kiri. Resultan gaya yang bekerja adalah...', opts: ['95 N ke kiri', '15 N ke kiri', '15 N ke kanan', '0 N'], ans: 1, exp: '55 − 40 = 15 N mengikuti gaya terbesar (ke kiri).' },
      { text: 'Jika resultan gaya pada sebuah benda diam sama dengan NOL (ΣF = 0), maka benda tersebut akan...', opts: ['Tetap diam (setimbang)', 'Bergerak makin cepat', 'Melayang', 'Berubah bentuk'], ans: 0, exp: 'Gaya setimbang tidak mengubah keadaan gerak benda.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-05', subSeq: 7,
    objectives: ['Siswa mampu membedakan gaya gesek statis dan kinetis serta menganalisis manfaat dan cara mengendalikan gaya gesek.'],
    materialTitle: 'Gaya Gesek Statis dan Kinetis',
    blocks: [
      { type: 'table', title: 'Gaya Gesek Statis vs Kinetis', headers: ['Jenis', 'Kapan Bekerja?', 'Contoh'], rows: [
        ['Gaya Gesek Statis (fₛ)', 'Saat benda masih DIAM (menahan agar belum bergeser)', 'Lemari berat baru didorong pelan belum bergerak; sepatu menapak lantai'],
        ['Gaya Gesek Kinetis (fₖ)', 'Saat benda SUDAH BERGERAK meluncur', 'Kardus yang sedang digeser di lantai; kampas rem menggesek velg'],
      ]},
    ],
    activityTitle: 'Latihan: Gaya Gesek SMP',
    questions: [
      { text: 'Gaya gesek yang bekerja saat sebuah benda didorong tetapi belum bergerak (masih diam) disebut gaya gesek...', opts: ['Statis', 'Kinetis', 'Magnetis', 'Gravitasi'], ans: 0, exp: 'Statis = diam; kinetis = bergerak.' },
      { text: 'Untuk mendorong lemari berat, usaha awal saat mulai menggerakkan terasa lebih berat daripada setelah lemari mulai meluncur karena umumnya...', opts: ['Gaya gesek statis maksimum lebih besar dari gaya gesek kinetis', 'Gravitasi hilang saat bergerak', 'Massa lemari berkurang', 'Lantai jadi es'], ans: 0, exp: 'fₛ maks > fₖ.' },
      { text: 'Bentuk hidung pesawat terbang dan kereta cepat dibuat ramping aerodinamis bertujuan untuk...', opts: ['Memperkecil gaya gesek udara agar lebih cepat dan hemat bahan bakar', 'Memperbesar hambatan udara', 'Menambah berat', 'Hiasan semata'], ans: 0, exp: 'Desain streamline meminimalkan hambatan fluida/udara.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-05', subSeq: 8,
    objectives: ['Siswa mampu menganalisis pengaruh gaya resultan terhadap perubahan kecepatan, arah gerak, dan elastisitas bentuk benda.'],
    materialTitle: 'Pengaruh Gaya terhadap Gerak & Bentuk Benda',
    blocks: [
      { type: 'visual_cards', title: '4 Efek Utama Gaya pada Benda', cards: [
        { emoji: '🚀', label: 'Mengubah Kelajuan', sub: 'Gaya searah gerak → mempercepat; gaya berlawanan → memperlambat' },
        { emoji: '↪️', label: 'Mengubah Arah', sub: 'Tendangan miring membelokkan lintasan bola' },
        { emoji: '🛑', label: 'Memulai / Menghentikan', sub: 'Dari diam menjadi bergerak atau sebaliknya' },
        { emoji: '🪀', label: 'Mengubah Bentuk (Elastis / Plastis)', sub: 'Pegas kembali (elastis); tanah liat menetap (plastis)' },
      ]},
    ],
    activityTitle: 'Latihan: Pengaruh Gaya',
    questions: [
      { text: 'Benda yang kembali ke bentuk semula setelah gaya tariknya dilepaskan (seperti karet gelang dan per pegas) memiliki sifat...', opts: ['Elastis', 'Plastis', 'Rapuh', 'Cair'], ans: 0, exp: 'Elastis = lentur dan kembali ke bentuk awal.' },
      { text: 'Jika gaya dorong bekerja BERLAWANAN arah dengan gerak benda yang sedang melaju, maka kecepatan benda akan...', opts: ['Berkurang (diperlambat)', 'Bertambah cepat', 'Tetap tak berubah', 'Langsung berbalik tanpa berhenti'], ans: 0, exp: 'Gaya berlawanan arah menghasilkan perlambatan (seperti rem).' },
      { text: 'Saat mobil melaju di jalan berbelok licin berminyak, mobil mudah tergelincir lurus karena kekurangan gaya ... yang mengubah arah gerak.', opts: ['Gesek ban terhadap aspal', 'Magnet', 'Cahaya', 'Panas'], ans: 0, exp: 'Gaya gesek ban menyediakan gaya sentripetal untuk berbelok aman.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-05', subSeq: 9,
    objectives: ['Siswa mampu memahami dan menerapkan Hukum I, II (F = m·a), dan III Newton dalam fenomena sehari-hari.'],
    materialTitle: 'Hukum I, II, dan III Newton',
    blocks: [
      { type: 'table', title: '3 Hukum Gerak Newton Wajib Kuasai!', headers: ['Hukum Newton', 'Bunyi Singkat / Rumus', 'Contoh Nyata'], rows: [
        ['Hukum I (Kelembaman / Inersia)', 'ΣF = 0 → benda diam tetap diam, bergerak tetap GLB', 'Penumpang terdorong ke depan saat bus direm mendadak!'],
        ['Hukum II (Percepatan)', 'ΣF = m × a   atau   a = ΣF / m', 'Dorong troli kosong jauh lebih cepat daripada troli penuh!'],
        ['Hukum III (Aksi – Reaksi)', 'F aksi = −F reaksi (sama besar, berlawanan arah)', 'Roket sembur gas ke bawah → melesat ke atas; mendayung air ke belakang → perahu maju!'],
      ]},
      { type: 'worked_example', level: 'Hukum II Newton', question: 'Balok bermassa 4 kg didorong dengan gaya resultan 24 N. Berapa percepatannya?', steps: ['a = ΣF ÷ m = 24 N ÷ 4 kg = 6 m/s².'], answer: '6 m/s².' },
    ],
    activityTitle: 'Latihan: Hukum Newton',
    questions: [
      { text: 'Saat mobil yang melaju kencang direm mendadak, tubuh penumpang terdorong ke depan (sehingga sabuk pengaman sangat penting). Ini adalah contoh...', opts: ['Hukum I Newton (kelembaman/inersia)', 'Hukum II Newton', 'Hukum III Newton', 'Hukum Archimedes'], ans: 0, exp: 'Tubuh cenderung mempertahankan keadaan geraknya (inersia).' },
      { text: 'Sebuah benda bermassa 5 kg dikenai resultan gaya 35 N. Percepatan yang dialami benda adalah...', opts: ['5 m/s²', '7 m/s²', '30 m/s²', '175 m/s²'], ans: 1, exp: 'a = F / m = 35 / 5 = 7 m/s².' },
      { text: 'Ketika perenang mendorong dinding kolam ke belakang dengan kaki, tubuhnya meluncur maju ke depan. Peristiwa ini sesuai dengan...', opts: ['Hukum I Newton', 'Hukum II Newton', 'Hukum III Newton (Aksi–Reaksi)', 'Hukum Pascal'], ans: 2, exp: 'Aksi dorong dinding ke belakang dibalas reaksi dinding mendorong perenang ke depan.' },
    ],
  },

  // BAB 6: TEKANAN
  {
    topicCode: 'IPA-SMP7-06', subSeq: 1,
    objectives: ['Siswa memahami konsep tekanan sebagai gaya per satuan luas bidang tekan (P = F/A) beserta satuan Pascal (Pa).'],
    materialTitle: 'Konsep Tekanan (P = F / A)',
    blocks: [
      { type: 'formula', name: 'Rumus Dasar Tekanan', expression: 'P = F / A   (Satuan SI: N/m² = Pascal / Pa)', note: 'Makin KECIL luas bidang sentuh (A), makin BESAR tekanannya! Itulah kenapa pisau tajam dan paku runcing mudah menembus benda!' },
    ],
    activityTitle: 'Latihan: Konsep Tekanan',
    questions: [
      { text: 'Dua faktor yang memengaruhi besar tekanan pada zat padat adalah...', opts: ['Gaya tekan (F) dan luas bidang tekan (A)', 'Suhu dan warna', 'Kecepatan dan waktu', 'Volume dan bau'], ans: 0, exp: 'P = F / A.' },
      { text: 'Mengapa kaki bebek berselaput lebar dan sepatu salju dibuat lebar?', opts: ['Memperbesar luas bidang tekan sehingga tekanan ke lumpur/salju KECIL dan tidak mudah amblas', 'Memperbesar tekanan', 'Agar lebih berat', 'Agar makin runcing'], ans: 0, exp: 'Luas A besar → tekanan P mengecil.' },
      { text: 'Satuan Internasional (SI) untuk tekanan adalah...', opts: ['Newton (N)', 'Pascal (Pa = N/m²)', 'Joule (J)', 'Watt (W)'], ans: 1, exp: '1 Pascal = 1 N/m².' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-06', subSeq: 2,
    objectives: ['Siswa mampu menghitung tekanan pada zat padat menggunakan rumus P = F / A.'],
    materialTitle: 'Menghitung Tekanan Zat Padat',
    blocks: [
      { type: 'worked_example', level: 'Hitung P = F/A', question: 'Balok bermassa 10 kg (g = 10 m/s²) diletakkan di lantai dengan luas alas 0,5 m². Berapa tekanan balok terhadap lantai?', steps: ['Cari gaya berat: F = m × g = 10 × 10 = 100 N.', 'P = F ÷ A = 100 N ÷ 0,5 m² = 200 Pa.'], answer: '200 Pa.' },
    ],
    activityTitle: 'Latihan: Tekanan Zat Padat',
    questions: [
      { text: 'Gaya sebesar 120 N menekan permukaan seluas 3 m². Besar tekanannya adalah...', opts: ['40 Pa', '360 Pa', '123 Pa', '30 Pa'], ans: 0, exp: 'P = 120 ÷ 3 = 40 N/m² = 40 Pa.' },
      { text: 'Empat balok memiliki berat SAMA, namun luas alas berbeda: (A) 2 cm², (B) 5 cm², (C) 10 cm², (D) 20 cm². Balok yang memberi tekanan PALING BESAR adalah...', opts: ['Balok A (2 cm²)', 'Balok B', 'Balok C', 'Balok D (20 cm²)'], ans: 0, exp: 'Luas bidang paling kecil menghasilkan tekanan paling besar.' },
      { text: 'Pisau diasah hingga matanya sangat tipis bertujuan...', opts: ['Memperkecil luas bidang tekan sehingga tekanan memotong sangat besar', 'Memperbesar luas bidang', 'Mengurangi massa pisau', 'Memperbesar gaya gesek'], ans: 0, exp: 'A sangat kecil → P sangat besar walau gaya dorong tangan kecil.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-06', subSeq: 3,
    objectives: ['Siswa memahami tekanan zat cair (tekanan hidrostatis) yang menekan ke segala arah dan makin besar di tempat dalam.'],
    materialTitle: 'Tekanan Zat Cair (Hidrostatis)',
    blocks: [
      { type: 'text', text: 'Zat cair yang diam memberikan tekanan ke SEGALA ARAH disebut Tekanan Hidrostatis (Pₕ). Semakin DALAM suatu titik dari permukaan air, semakin BESAR tekanan hidrostatisnya — itulah kenapa dinding dasar bendungan selalu dibangun jauh lebih TEBAL daripada bagian atasnya!' },
    ],
    activityTitle: 'Latihan: Tekanan Zat Cair',
    questions: [
      { text: 'Jika botol air dilubangi di 3 ketinggian (atas, tengah, bawah), pancaran air yang memancar PALING JAUH berasal dari lubang...', opts: ['Paling atas', 'Tengah', 'Paling bawah (karena kedalaman terbesar → tekanan hidrostatis terbesar)', 'Sama semua'], ans: 2, exp: 'Makin dalam dari permukaan, makin besar tekanan hidrostatisnya.' },
      { text: 'Mengapa konstruksi dinding bendungan (waduk) dibuat semakin tebal ke arah dasar?', opts: ['Untuk menahan tekanan hidrostatis air yang makin besar di bagian dasar', 'Agar hemat beton', 'Supaya ikan tidak lewat', 'Untuk hiasan'], ans: 0, exp: 'Tekanan air di dasar jauh lebih besar daripada di permukaan.' },
      { text: 'Pada kedalaman yang sama di dalam satu jenis zat cair yang diam, tekanan hidrostatis ke segala arah besarnya...', opts: ['Sama besar', 'Lebih besar ke kanan', 'Nol', 'Selalu berbeda'], ans: 0, exp: 'Sifat utama tekanan hidrostatis: sama besar ke segala arah pada kedalaman sama.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-06', subSeq: 4,
    objectives: ['Siswa mampu menghitung tekanan hidrostatis menggunakan rumus Pₕ = ρ × g × h.'],
    materialTitle: 'Rumus & Faktor Tekanan Hidrostatis (Pₕ = ρ·g·h)',
    blocks: [
      { type: 'formula', name: 'Rumus Tekanan Hidrostatis', expression: 'Pₕ = ρ × g × h', note: 'ρ = massa jenis zat cair (air = 1.000 kg/m³), g = 10 m/s², h = KEDALAMAN diukur dari PERMUKAAN AIR (meter), BUKAN tinggi dari dasar!' },
      { type: 'worked_example', level: 'Hati-Hati Mengukur h!', question: 'Seekor ikan berada 20 cm di atas dasar akuarium yang kedalaman airnya 100 cm (ρ air = 1.000 kg/m³, g = 10 m/s²). Berapa Pₕ pada ikan?', steps: ['Kedalaman ikan dari PERMUKAAN: h = 100 cm − 20 cm = 80 cm = 0,8 m!', 'Pₕ = 1.000 × 10 × 0,8 = 8.000 Pa.'], answer: '8.000 Pa.' },
    ],
    activityTitle: 'Latihan: Faktor Tekanan Hidrostatis',
    questions: [
      { text: 'Tiga faktor yang menentukan besar tekanan hidrostatis (Pₕ = ρ·g·h) adalah...', opts: ['Massa jenis zat cair, percepatan gravitasi, dan kedalaman dari permukaan', 'Bentuk wadah, warna air, dan luas lantai', 'Massa ikan saja', 'Suhu udara saja'], ans: 0, exp: 'Pₕ hanya bergantung pada ρ, g, dan h (tidak bergantung bentuk wadah!).' },
      { text: 'Penyelam berada pada kedalaman 5 meter di dalam danau air tawar (ρ = 1.000 kg/m³, g = 10 m/s²). Tekanan hidrostatis yang dialaminya adalah...', opts: ['5.000 Pa', '50.000 Pa', '500 Pa', '500.000 Pa'], ans: 1, exp: 'Pₕ = 1.000 × 10 × 5 = 50.000 Pa.' },
      { text: 'Pada kedalaman yang sama (3 m), tekanan hidrostatis di air laut lebih BESAR daripada di air tawar karena...', opts: ['Massa jenis air laut lebih besar dari air tawar (mengandung garam)', 'Air laut lebih dingin', 'Air laut berwarna biru', 'Gravitasi di laut berbeda'], ans: 0, exp: 'ρ air laut (~1.025 kg/m³) > ρ air tawar (1.000 kg/m³).' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-06', subSeq: 5,
    objectives: ['Siswa mampu memahami dan menerapkan Prinsip Pascal (F₁/A₁ = F₂/A₂) pada dongkrak hidrolik dan rem mobil.'],
    materialTitle: 'Prinsip Pascal & Mesin Hidrolik',
    blocks: [
      { type: 'formula', name: 'Hukum Pascal', expression: 'F₁ / A₁ = F₂ / A₂', note: '"Tekanan yang diberikan pada zat cair di dalam ruang tertutup diteruskan ke segala arah dengan SAMA BESAR." Contoh: dongkrak hidrolik, mesin cuci mobil hidrolik, rem cakram!' },
      { type: 'worked_example', level: 'Dongkrak Hidrolik', question: 'Luas penampang kecil A₁ = 10 cm², penampang besar A₂ = 200 cm². Jika gaya F₁ = 50 N menekan piston kecil, berapa berat mobil F₂ yang bisa diangkat?', steps: ['50 / 10 = F₂ / 200 → 5 = F₂ / 200 → F₂ = 1.000 N!'], answer: '1.000 N (gaya berlipat 20 kali!).' },
    ],
    activityTitle: 'Latihan: Prinsip Pascal',
    questions: [
      { text: 'Alat teknik yang bekerja berdasarkan Hukum Pascal adalah...', opts: ['Dongkrak hidrolik dan rem hidrolik mobil', 'Kapal selam', 'Balon udara', 'Termometer'], ans: 0, exp: 'Mesin hidrolik melipatgandakan gaya lewat tekanan fluida dalam ruang tertutup.' },
      { text: 'Pada pompa hidrolik: A₁ = 5 cm², A₂ = 100 cm². Jika mobil beratnya F₂ = 8.000 N di piston besar, gaya tekan F₁ minimal di piston kecil adalah...', opts: ['400 N', '800 N', '40 N', '1.600 N'], ans: 0, exp: 'F₁/5 = 8.000/100 = 80 → F₁ = 80 × 5 = 400 N.' },
      { text: 'Bunyi Hukum Pascal berlaku khusus untuk zat cair di dalam...', opts: ['Ruang tertutup', 'Sungai terbuka', 'Ruang hampa', 'Padatan'], ans: 0, exp: 'Fluida harus berada dalam ruang tertutup agar tekanan diteruskan sempurna.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-06', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan Prinsip Archimedes (gaya apung Fₐ = ρ·g·V) dan syarat terapung, melayang, tenggelam.'],
    materialTitle: 'Prinsip Archimedes (Terapung, Melayang, Tenggelam)',
    blocks: [
      { type: 'formula', name: 'Gaya Apung (Hukum Archimedes)', expression: 'Fₐ = w udara − w air   |   Fₐ = ρ cair × g × V celup', note: 'Terapung: ρ benda < ρ cair | Melayang: ρ benda = ρ cair | Tenggelam: ρ benda > ρ cair!' },
      { type: 'tip', text: 'Kenapa kapal baja raksasa bisa TERAPUNG padahal besi tenggelam? Karena badan kapal dibuat BERONGGA berisi udara sehingga massa jenis RATA-RATA seluruh kapal lebih kecil dari massa jenis air laut!' },
    ],
    activityTitle: 'Latihan: Prinsip Archimedes',
    questions: [
      { text: 'Sebuah batu di udara beratnya 40 N, namun saat ditimbang di dalam air beratnya terasa 32 N. Besar gaya ke atas (gaya apung) air adalah...', opts: ['8 N', '72 N', '32 N', '40 N'], ans: 0, exp: 'Fₐ = w udara − w air = 40 − 32 = 8 N.' },
      { text: 'Kapal selam dapat menyelam dan muncul ke permukaan dengan cara mengatur volume air di dalam tangki pemberat (ballast). Cara kerja ini menerapkan...', opts: ['Hukum Archimedes', 'Hukum Pascal', 'Konduksi', 'Difusi'], ans: 0, exp: 'Mengisi air memperbesar massa jenis kapal selam (tenggelam); membuang air memperkecilnya (terapung).' },
      { text: 'Suatu benda akan MELAYANG di tengah zat cair apabila...', opts: ['Massa jenis benda SAMA dengan massa jenis zat cair (ρ benda = ρ cair)', 'ρ benda > ρ cair', 'ρ benda < ρ cair', 'Gaya apungnya nol'], ans: 0, exp: 'Syarat melayang: ρ benda = ρ cair (w = Fₐ).' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-06', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan tekanan udara (atmosfer), alat ukur barometer/manometer, dan pengaruh ketinggian terhadap tekanan udara.'],
    materialTitle: 'Tekanan Gas dan Atmosfer',
    blocks: [
      { type: 'text', text: 'Udara memiliki massa sehingga menekan permukaan bumi (Tekanan Atmosfer = 1 atm = 76 cmHg di permukaan laut). Semakin TINGGI suatu tempat (naik gunung), udara makin tipis sehingga tekanan udaranya makin RENDAH (turun 1 cmHg tiap naik 100 m)!' },
      { type: 'tip', text: 'Alat pengukur tekanan udara luar = BAROMETER. Alat pengukur tekanan gas dalam ruang tertutup (mis. ban/tabung gas) = MANOMETER.' },
    ],
    activityTitle: 'Latihan: Tekanan Gas',
    questions: [
      { text: 'Setiap naik ketinggian 100 meter dari permukaan laut, tekanan udara turun rata-rata 1 cmHg. Jika tekanan di pantai 76 cmHg, tekanan udara di puncak bukit setinggi 400 m adalah...', opts: ['72 cmHg', '80 cmHg', '74 cmHg', '70 cmHg'], ans: 0, exp: '76 − (400/100) = 76 − 4 = 72 cmHg.' },
      { text: 'Alat yang digunakan untuk mengukur tekanan udara atmosfer adalah...', opts: ['Barometer', 'Termometer', 'Amperemeter', 'Dinamometer'], ans: 0, exp: 'Barometer mengukur tekanan udara luar.' },
      { text: 'Minuman bisa naik ke mulut saat kita menyedot sedotan karena...', opts: ['Tekanan udara di dalam sedotan mengecil sehingga tekanan udara luar mendorong air naik ke atas', 'Air memiliki gaya magnet', 'Gravitasi berhenti', 'Sedotan berlubang besar'], ans: 0, exp: 'Fluida mengalir dari tekanan tinggi (udara luar) ke tekanan rendah (dalam sedotan).' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-06', subSeq: 8,
    objectives: ['Siswa mampu menjelaskan penerapan konsep tekanan pada sistem biologis (tekanan darah, kapilaritas xilem tumbuhan) dan teknologi.'],
    materialTitle: 'Penerapan Tekanan pada Makhluk Hidup & Teknologi',
    blocks: [
      { type: 'visual_cards', title: 'Tekanan dalam Tubuh & Tumbuhan!', cards: [
        { emoji: '❤️', label: 'Tekanan Darah (Hukum Pascal)', sub: 'Jantung memompa darah di pembuluh tertutup; diukur dengan tensimeter (sfigmomanometer)' },
        { emoji: '🌳', label: 'Naiknya Air di Xilem Pohon', sub: 'Dibantu daya tekan akar, kapilaritas pembuluh sempit, dan daya isap daun!' },
        { emoji: '🎈', label: 'Balon Udara Panas', sub: 'Udara dipanaskan → massa jenis mengecil → gaya apung udara mengangkat balon!' },
      ]},
    ],
    activityTitle: 'Latihan: Penerapan Tekanan',
    questions: [
      { text: 'Prinsip kerja alat pengukur tekanan darah (tensimeter/sfigmomanometer) dan aliran darah dalam pembuluh tertutup mengikuti hukum...', opts: ['Hukum Pascal', 'Hukum Ohm', 'Hukum Pemantulan', 'Hukum Kekekalan Massa'], ans: 0, exp: 'Pembuluh darah adalah sistem ruang tertutup sehingga berlaku Prinsip Pascal.' },
      { text: 'Air dari tanah dapat naik hingga ke pucuk pohon tinggi melalui pembuluh xilem dibantu oleh...', opts: ['Daya tekan akar, daya kapilaritas batang, dan daya isap daun', 'Gaya magnet batang', 'Tekanan gas di akar saja', 'Pompa besi'], ans: 0, exp: 'Tiga mekanisme fisiologis mendorong dan menarik air ke daun.' },
      { text: 'Mengapa balon udara panas bisa terbang melayang ke angkasa?', opts: ['Udara panas di dalam balon massa jenisnya lebih kecil daripada udara dingin di luar sehingga mendapat gaya apung ke atas', 'Balon tidak punya massa', 'Di atas tidak ada gravitasi', 'Terbuat dari besi'], ans: 0, exp: 'Prinsip Archimedes juga berlaku pada gas/udara!' },
    ],
  },

  // BAB 7: SUHU, KALOR, DAN PERPINDAHAN KALOR
  {
    topicCode: 'IPA-SMP7-07', subSeq: 1,
    objectives: ['Siswa mampu membedakan pengertian SUHU (derajat panas benda) dan KALOR (energi panas yang berpindah).'],
    materialTitle: 'Perbedaan Suhu dan Kalor',
    blocks: [
      { type: 'table', title: 'Suhu vs Kalor (Jangan Tertukar!)', headers: ['Aspek', 'Suhu (Temperatur)', 'Kalor (Q)'], rows: [
        ['Pengertian', 'Ukuran tingkat/derajat panas atau dingin suatu benda', 'Bentuk ENERGI panas yang berpindah dari benda bersuhu TINGGI ke RENDAH'],
        ['Satuan SI', 'Kelvin (K) — sehari-hari °C', 'Joule (J) — atau kalori (1 kal = 4,2 J)'],
        ['Alat Ukur', 'Termometer', 'Kalorimeter'],
      ]},
    ],
    activityTitle: 'Latihan: Suhu vs Kalor',
    questions: [
      { text: 'Secara alami, kalor (energi panas) selalu berpindah dari benda bersuhu ... menuju benda bersuhu ...', opts: ['Rendah ke tinggi', 'Tinggi ke rendah', 'Sama ke sama', 'Acak'], ans: 1, exp: 'Kalor mengalir spontan dari suhu tinggi ke suhu rendah hingga setimbang.' },
      { text: 'Satuan Internasional (SI) untuk kalor adalah...', opts: ['Kelvin', 'Joule (J)', 'Pascal', 'Newton'], ans: 1, exp: 'Kalor adalah bentuk energi → satuan SI = Joule.' },
      { text: 'Mengapa tangan tidak dapat dijadikan alat pengukur suhu yang akurat?', opts: ['Karena rasa panas/dingin pada kulit bersifat relatif (tidak punya skala angka pasti)', 'Karena tangan terlalu kecil', 'Karena tangan tidak peka', 'Karena tangan terbuat dari air'], ans: 0, exp: 'Indra peraba hanya merasa relatif, bukan nilai kuantitatif baku.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-07', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan prinsip kerja termometer (pemuaian zat cair) serta keunggulan raksa vs alkohol.'],
    materialTitle: 'Pengukuran Suhu & Jenis Termometer',
    blocks: [
      { type: 'table', title: 'Raksa vs Alkohol sebagai Pengisi Termometer', headers: ['Zat Pengisi', 'Kelebihan', 'Kekurangan'], rows: [
        ['Air Raksa (Hg)', 'Mengilap mudah dilihat, tidak membasahi kaca, jangkauan tinggi (−39°C s.d. 357°C)', 'Mahal, BERACUN jika pecah, tidak bisa ukur suhu sangat dingin < −39°C'],
        ['Alkohol (diberi warna)', 'Murah, dapat mengukur suhu sangat rendah hingga −114°C', 'Titik didih rendah (78°C — tak bisa ukur air mendidih!), membasahi kaca'],
      ]},
    ],
    activityTitle: 'Latihan: Pengukuran Suhu',
    questions: [
      { text: 'Prinsip kerja termometer cair (raksa/alkohol) didasarkan pada sifat zat cair yaitu...', opts: ['Memuai (volumenya naik) saat dipanaskan dan menyusut saat didinginkan', 'Berubah warna saat panas', 'Menghasilkan listrik', 'Membeku saat panas'], ans: 0, exp: 'Pemuaian volume zat cair di pipa kapiler menunjukkan angka suhu.' },
      { text: 'Mengapa air biasa TIDAK cocok digunakan sebagai cairan pengisi termometer?', opts: ['Air membasahi dinding kaca, tidak berwarna, dan rentang cairnya sempit (0°C–100°C) serta anomali air', 'Air terlalu mahal', 'Air beracun', 'Air tidak bisa memuai'], ans: 0, exp: 'Sifat fisik air tidak linier dan sulit dibaca di pipa kapiler.' },
      { text: 'Untuk mengukur suhu di wilayah kutub yang mencapai −60°C, termometer yang tepat adalah termometer...', opts: ['Alkohol (titik beku −114°C)', 'Air raksa (membeku di −39°C)', 'Air biasa', 'Minyak kelapa'], ans: 0, exp: 'Alkohol tetap cair jauh di bawah −39°C.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-07', subSeq: 3,
    objectives: ['Siswa mampu mengonversi 4 skala termometer: Celcius (C), Reamur (R), Fahrenheit (F), dan Kelvin (K).'],
    materialTitle: 'Konversi 4 Skala Termometer (C, R, F, K)',
    blocks: [
      { type: 'formula', name: 'Perbandingan Emas 4 Skala Termometer', expression: 'C : R : (F − 32) = 5 : 4 : 9   |   K = C + 273', note: 'Titik tetap bawah (es melebur) & atas (air mendidih): C(0–100), R(0–80), F(32–212), K(273–373)!' },
      { type: 'worked_example', level: 'Konversi 40°C', question: 'Ubah suhu 40°C ke dalam skala Reamur, Fahrenheit, dan Kelvin!', steps: ['R = (4/5) × 40 = 32°R.', 'F = (9/5 × 40) + 32 = 72 + 32 = 104°F.', 'K = 40 + 273 = 313 K.'], answer: '32°R, 104°F, dan 313 K.' },
    ],
    activityTitle: 'Latihan: Skala Termometer',
    questions: [
      { text: 'Suhu air hangat 50°C jika dinyatakan dalam skala Fahrenheit (°F) adalah...', opts: ['90°F', '122°F', '100°F', '82°F'], ans: 1, exp: 'F = (9/5 × 50) + 32 = 90 + 32 = 122°F.' },
      { text: 'Suhu ruang kelas di Gresik 30°C. Dalam satuan SI Kelvin (K), suhu tersebut adalah...', opts: ['303 K', '243 K', '330 K', '273 K'], ans: 0, exp: 'K = 30 + 273 = 303 K.' },
      { text: 'Suhu 36°R jika diubah ke skala Celcius (°C) adalah...', opts: ['40°C', '45°C', '28,8°C', '50°C'], ans: 1, exp: 'C = (5/4) × 36 = 45°C.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-07', subSeq: 4,
    objectives: ['Siswa mampu menghitung kalor yang diperlukan untuk mengubah suhu benda dengan rumus Q = m · c · ΔT.'],
    materialTitle: 'Kalor dan Perubahan Suhu (Q = m·c·ΔT)',
    blocks: [
      { type: 'formula', name: 'Rumus Kalor Pengubah Suhu ("Macet")', expression: 'Q = m × c × ΔT', note: 'm = massa (kg), c = kalor jenis zat (air = 4.200 J/kg°C), ΔT = perubahan suhu (T akhir − T awal)!' },
      { type: 'worked_example', level: 'Hitung Kalor Air', question: 'Berapa Joule kalor untuk memanaskan 2 kg air (c = 4.200 J/kg°C) dari 25°C menjadi 75°C?', steps: ['ΔT = 75 − 25 = 50°C.', 'Q = 2 × 4.200 × 50 = 420.000 J (420 kJ).'], answer: '420.000 Joule (420 kJ).' },
    ],
    activityTitle: 'Latihan: Kalor Perubahan Suhu',
    questions: [
      { text: 'Kalor yang diperlukan untuk memanaskan 1 kg air (c = 4.200 J/kg°C) dari 20°C menjadi 40°C adalah...', opts: ['42.000 J', '84.000 J', '168.000 J', '21.000 J'], ans: 1, exp: 'Q = 1 × 4.200 × (40−20) = 84.000 J.' },
      { text: 'Tiga faktor yang memengaruhi besar kalor untuk menaikkan suhu benda adalah...', opts: ['Massa, kalor jenis zat, dan kenaikan suhu', 'Luas, warna, dan bau', 'Tekanan dan gravitasi', 'Kecepatan saja'], ans: 0, exp: 'Sesuai rumus Q = m · c · ΔT.' },
      { text: 'Air (c = 4.200) jauh lebih lambat panas daripada pasir/logam (c kecil) saat terkena matahari karena...', opts: ['Kalor jenis air sangat besar sehingga butuh kalor banyak untuk naik 1°C', 'Air tidak bisa menyerap panas', 'Logam tidak punya kalor jenis', 'Matahari hanya menyinari pasir'], ans: 0, exp: 'Kalor jenis besar membuat suhu air lebih stabil (dasar angin darat & laut!).' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-07', subSeq: 5,
    objectives: ['Siswa mampu menghitung kalor laten untuk mengubah wujud zat (Q = m · L untuk melebur dan Q = m · U untuk menguap).'],
    materialTitle: 'Kalor dan Perubahan Wujud (Kalor Laten)',
    blocks: [
      { type: 'formula', name: 'Rumus Kalor Laten (Suhu Tetap, Wujud Berubah!)', expression: 'Melebur: Q = m × L   |   Menguap: Q = m × U', note: 'L = kalor lebur es (336.000 J/kg atau 80 kal/g); U = kalor uap air (2.260.000 J/kg).' },
    ],
    activityTitle: 'Latihan: Kalor Laten',
    questions: [
      { text: 'Kalor yang dibutuhkan untuk meleburkan 0,5 kg es bersuhu 0°C menjadi air 0°C (L es = 336.000 J/kg) adalah...', opts: ['168.000 J', '336.000 J', '672.000 J', '84.000 J'], ans: 0, exp: 'Q = m × L = 0,5 × 336.000 = 168.000 J.' },
      { text: 'Kalor yang digunakan untuk mengubah wujud zat TANPA menaikkan suhunya disebut...', opts: ['Kalor laten', 'Kalor jenis', 'Konduksi', 'Pemuaian'], ans: 0, exp: 'Kalor laten (lebur/uap) dipakai mengubah ikatan partikel.' },
      { text: 'Mengapa uap air mendidih 100°C menimbulkan luka bakar lebih parah daripada air panas 100°C?', opts: ['Karena uap air menyimpan tambahan kalor laten penguapan yang sangat besar dan dilepaskan saat mengembun di kulit', 'Karena uap berwarna putih', 'Karena air tidak panas', 'Karena uap adalah padatan'], ans: 0, exp: 'Saat mengembun di kulit, uap melepaskan kalor laten uap ekstra.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-07', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan perpindahan kalor secara KONDUKSI beserta perbedaan konduktor dan isolator panas.'],
    materialTitle: 'Perpindahan Kalor: Konduksi',
    blocks: [
      { type: 'text', text: 'KONDUKSI adalah perpindahan kalor melalui zat padat TANPA disertai perpindahan partikel zatnya (hanya getaran energi yang merambat estafet!). Logam (besi, aluminium, tembaga) adalah KONDUKTOR baik; kayu, plastik, kain, dan udara adalah ISOLATOR panas.' },
    ],
    activityTitle: 'Latihan: Konduksi',
    questions: [
      { text: 'Sendok logam yang dicelupkan ke gelas teh panas lama-lama ujung pegangannya ikut terasa panas. Ini adalah perpindahan kalor secara...', opts: ['Konduksi', 'Konveksi', 'Radiasi', 'Sublimasi'], ans: 0, exp: 'Panas merambat melalui logam padat tanpa partikel logam ikut berpindah.' },
      { text: 'Mengapa badan panci dibuat dari aluminium/stainless steel sedangkan gagangnya diberi lapisan plastik atau kayu?', opts: ['Logam konduktor cepat menghantarkan panas ke makanan; plastik/kayu isolator agar tangan tidak kepanasan', 'Plastik lebih cepat panas', 'Kayu lebih kuat dari baja', 'Hanya agar warna menarik'], ans: 0, exp: 'Kombinasi konduktor dan isolator mengoptimalkan fungsi dan keamanan.' },
      { text: 'Manakah bahan yang merupakan ISOLATOR panas yang baik?', opts: ['Tembaga dan aluminium', 'Kayu, karet, kain wol, dan plastik', 'Besi dan baja', 'Perak dan emas'], ans: 1, exp: 'Kayu, wol, dan plastik sangat lambat menghantarkan panas.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-07', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan perpindahan kalor secara KONVEKSI pada fluida (cair & gas) termasuk terjadinya angin darat dan angin laut.'],
    materialTitle: 'Perpindahan Kalor: Konveksi',
    blocks: [
      { type: 'text', text: 'KONVEKSI adalah perpindahan kalor melalui zat cair atau gas (fluida) DISERTAI perpindahan partikel zatnya karena perbedaan massa jenis! Fluida panas memuai (massa jenis kecil) lalu NAIK; fluida dingin (massa jenis besar) TURUN menggantikannya!' },
      { type: 'table', title: 'Angin Laut (Siang) vs Angin Darat (Malam) di Pesisir Gresik!', headers: ['Jenis Angin', 'Waktu', 'Arah & Manfaat bagi Nelayan'], rows: [
        ['Angin Laut', 'SIANG hari', 'Darat cepat panas → udara darat naik → angin bertiup dari LAUT ke DARAT (nelayan pulang melaut!)'],
        ['Angin Darat', 'MALAM hari', 'Darat cepat dingin, laut masih hangat → angin bertiup dari DARAT ke LAUT (nelayan berangkat melaut!)'],
      ]},
    ],
    activityTitle: 'Latihan: Konveksi',
    questions: [
      { text: 'Air di bagian bawah panci menjadi panas lalu bergerak naik ke permukaan, sedangkan air dingin di atas turun. Perpindahan kalor ini adalah...', opts: ['Konduksi', 'Konveksi', 'Radiasi', 'Pemuaian'], ans: 1, exp: 'Konveksi melibatkan aliran/perpindahan partikel fluida.' },
      { text: 'Pada MALAM hari, nelayan tradisional berangkat melaut memanfaatkan angin yang bertiup dari darat ke laut, yaitu...', opts: ['Angin darat (terjadi karena konveksi udara malam hari)', 'Angin laut', 'Angin muson', 'Konduksi'], ans: 0, exp: 'Malam hari laut lebih hangat dari darat sehingga udara bergerak dari darat ke laut.' },
      { text: 'Mengapa pemasangan AC pendingin ruangan selalu diletakkan di dinding bagian ATAS?', opts: ['Agar udara dingin (massa jenis lebih besar) turun menyebar ke seluruh ruangan secara konveksi', 'Agar susah dijangkau', 'Karena udara dingin naik ke atap', 'Agar dekat lampu'], ans: 0, exp: 'Udara dingin turun, udara hangat naik ke AC untuk didinginkan kembali.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-07', subSeq: 8,
    objectives: ['Siswa mampu menjelaskan perpindahan kalor secara RADIASI (tanpa zat perantara) serta pengaruh warna permukaan terhadap penyerapan radiasi.'],
    materialTitle: 'Perpindahan Kalor: Radiasi',
    blocks: [
      { type: 'text', text: 'RADIASI adalah perpindahan kalor melalui gelombang elektromagnetik TANPA memerlukan zat perantara (bisa melewati ruang hampa!). Warna HITAM/gelap mudah MENYERAP sekaligus MEMANCARKAN radiasi; warna PUTIH/mengilap MEMANTULKAN radiasi!' },
      { type: 'tip', text: 'Termos air panas mencegah ketiga perpindahan kalor sekaligus: ruang hampa (cegah konduksi & konveksi), dinding kaca mengilap perak (cegah radiasi), tutup gabus/plastik (isolator)!' },
    ],
    activityTitle: 'Latihan: Radiasi',
    questions: [
      { text: 'Panas Matahari dapat sampai ke Bumi menembus ruang angkasa hampa udara melalui peristiwa...', opts: ['Konduksi', 'Konveksi', 'Radiasi', 'Evaporasi'], ans: 2, exp: 'Hanya radiasi yang dapat merambat tanpa medium (di ruang hampa).' },
      { text: 'Pada siang hari yang terik di Gresik, mengenakan baju berwarna PUTIH terasa lebih adem daripada baju HITAM karena warna putih...', opts: ['Lebih banyak memantulkan radiasi panas Matahari', 'Menyerap seluruh panas', 'Menghasilkan angin', 'Menghilangkan keringat'], ans: 0, exp: 'Warna terang memantulkan kalor radiasi; warna gelap menyerapnya.' },
      { text: 'Lapisan kaca mengilap (perak) pada bagian dalam termos air panas berfungsi mencegah kehilangan panas secara...', opts: ['Radiasi', 'Konduksi saja', 'Konveksi saja', 'Pembekuan'], ans: 0, exp: 'Permukaan mengilap memantulkan kembali kalor radiasi ke dalam air panas.' },
    ],
  },
  {
    topicCode: 'IPA-SMP7-07', subSeq: 9,
    objectives: ['Siswa mampu menjelaskan pemuaian zat padat (panjang, luas, volume), zat cair, dan gas serta penerapannya (celah rel kereta, bimetal, kabel listrik).'],
    materialTitle: 'Pemuaian Zat dan Penerapannya',
    blocks: [
      { type: 'visual_cards', title: '4 Penerapan Pintar Pemuaian di Sekitar Kita', cards: [
        { emoji: '🚆', label: 'Celah Sambungan Rel Kereta', sub: 'Memberi ruang besi memuai saat terik siang agar rel tidak melengkung!' },
        { emoji: '⚡', label: 'Kabel Listrik Dipasang Agak Kendor', sub: 'Agar saat malam dingin kabel menyusut tidak sampai putus!' },
        { emoji: '🪟', label: 'Celah Bingkai Kaca Jendela', sub: 'Memberi ruang kaca memuai di siang panas supaya tidak retak' },
        { emoji: '🔌', label: 'Keping Bimetal di Setrika Otomatis', sub: 'Dua logam beda koefisien muai melengkung saat panas → memutus arus otomatis!' },
      ]},
    ],
    activityTitle: 'Latihan: Pemuaian Zat',
    questions: [
      { text: 'Mengapa pemasangan sambungan rel kereta api selalu diberi sedikit celah di antara ujung batangnya?', opts: ['Memberi ruang pemuaian logam besi di siang terik agar rel tidak melengkung', 'Menghemat besi', 'Menghasilkan bunyi irama', 'Agar air hujan lewat'], ans: 0, exp: 'Besi memuai panjang saat suhu meningkat.' },
      { text: 'Keping bimetal (dua pelat logam berbeda koefisien muai direkatkan) jika dipanaskan akan melengkung ke arah logam yang koefisien muainya...', opts: ['Lebih KECIL (karena logam koefisien besar memanjang lebih cepat di sisi luar lengkungan)', 'Lebih besar', 'Nol', 'Sama persis'], ans: 0, exp: 'Panas → melengkung ke logam koefisien muai lebih kecil; dingin → sebaliknya.' },
      { text: 'Kabel listrik tiang jalan dipasang agak kendur pada siang hari supaya...', opts: ['Tidak putus ketika menyusut di malam hari yang dingin', 'Terlihat panjang', 'Bisa dipakai jemuran', 'Menghantarkan suara'], ans: 0, exp: 'Penyusutan malam hari membuat kabel menegang.' },
    ],
  },
];

upsertLessonsBatch('Kelas 7 SMP — IPA (7 Bab, 51 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

