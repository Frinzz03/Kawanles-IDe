import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: TATA SURYA
  {
    topicCode: 'IPAS-SD6-01', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian Tata Surya dan galaksi Bima Sakti tempat Bumi berada.'],
    materialTitle: 'Pengertian Tata Surya',
    blocks: [
      { type: 'text', text: 'Tata Surya adalah susunan benda-benda langit yang terdiri atas MATAHARI sebagai pusatnya, beserta 8 planet, satelit alami (bulan), asteroid, komet, dan meteoroid yang beredar mengelilingi Matahari dalam lintasan berbentuk elips (ORBIT) akibat gaya gravitasi Matahari.' },
      { type: 'tip', text: 'Tata Surya kita hanyalah sebagian kecil dari galaksi raksasa bernama GALAKSI BIMA SAKTI (Milky Way)!' },
    ],
    activityTitle: 'Latihan: Pengertian Tata Surya',
    questions: [
      { text: 'Lintasan berbentuk elips yang dilalui planet saat mengelilingi Matahari disebut...', opts: ['Orbit', 'Galaksi', 'Komet', 'Rotasi'], ans: 0, exp: 'Orbit adalah jalur edar benda langit mengelilingi pusatnya.' },
      { text: 'Gaya yang menjaga planet-planet tetap berada pada orbitnya mengelilingi Matahari adalah...', opts: ['Gaya magnet', 'Gaya gravitasi Matahari', 'Gaya gesek udara', 'Gaya otot'], ans: 1, exp: 'Gravitasi Matahari yang sangat besar menarik seluruh anggota tata surya.' },
      { text: 'Nama galaksi tempat Tata Surya dan Bumi kita berada adalah...', opts: ['Andromeda', 'Bima Sakti (Milky Way)', 'Orion', 'Pegasus'], ans: 1, exp: 'Tata Surya berada di Galaksi Bima Sakti.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-01', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan peran Matahari sebagai bintang sekaligus pusat dan sumber energi Tata Surya.'],
    materialTitle: 'Matahari sebagai Pusat Tata Surya',
    blocks: [
      { type: 'visual_cards', title: 'Fakta Hebat tentang Matahari', cards: [
        { emoji: '⭐', label: 'Matahari Adalah BINTANG', sub: 'Bola gas raksasa (hidrogen & helium) yang memancarkan cahaya & panas sendiri!' },
        { emoji: '🎯', label: 'Pusat Tata Surya', sub: 'Massanya lebih dari 99% total massa seluruh Tata Surya' },
        { emoji: '🌱', label: 'Penopang Kehidupan Bumi', sub: 'Sumber energi fotosintesis, penggerak siklus hujan, dan penghangat Bumi' },
      ]},
    ],
    activityTitle: 'Latihan: Matahari Pusat Tata Surya',
    questions: [
      { text: 'Mengapa Matahari digolongkan sebagai BINTANG (bukan planet)?', opts: ['Karena ukurannya kecil', 'Karena dapat memancarkan cahaya dan panas sendiri', 'Karena mengelilingi Bumi', 'Karena tersusun dari batu padat'], ans: 1, exp: 'Bintang menghasilkan cahaya sendiri melalui reaksi fusi nuklir.' },
      { text: 'Gas penyusun utama Matahari adalah...', opts: ['Oksigen dan nitrogen', 'Hidrogen dan helium', 'Karbon dioksida', 'Uap air'], ans: 1, exp: 'Reaksi fusi hidrogen menjadi helium menghasilkan energi panas dan cahaya luar biasa.' },
      { text: 'Bagian terluar atmosfer Matahari yang tampak seperti mahkota cahaya putih saat gerhana matahari total disebut...', opts: ['Korona', 'Inti', 'Kawah', 'Cincin'], ans: 0, exp: 'Korona adalah lapisan atmosfer terluar Matahari.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-01', subSeq: 3,
    objectives: ['Siswa mampu membedakan kelompok planet dalam (terestrial/berbatu) dan planet luar (raksasa gas/es).'],
    materialTitle: 'Mengenal 8 Planet Tata Surya',
    blocks: [
      { type: 'table', title: 'Planet Dalam vs Planet Luar (Dipisahkan Sabuk Asteroid!)', headers: ['Kelompok', 'Anggota Planet', 'Ciri Umum'], rows: [
        ['Planet Dalam (Terestrial)', 'Merkurius, Venus, Bumi, Mars', 'Ukuran relatif kecil, permukaan PADAT berbatu, dekat Matahari, satelit sedikit/nol'],
        ['Planet Luar (Jovian)', 'Jupiter, Saturnus, Uranus, Neptunus', 'Ukuran RAKSASA, tersusun dari gas & es, dingin, banyak satelit, memiliki cincin'],
      ]},
    ],
    activityTitle: 'Latihan: Planet Dalam & Luar',
    questions: [
      { text: 'Pembatas antara kelompok planet dalam dan planet luar adalah...', opts: ['Sabuk Asteroid (di antara Mars dan Jupiter)', 'Bulan', 'Komet Halley', 'Garis Khatulistiwa'], ans: 0, exp: 'Sabuk Asteroid berada di antara orbit Mars dan Jupiter.' },
      { text: 'Empat planet yang termasuk PLANET DALAM (berbatu) adalah...', opts: ['Jupiter, Saturnus, Uranus, Neptunus', 'Merkurius, Venus, Bumi, Mars', 'Bumi, Mars, Jupiter, Saturnus', 'Merkurius, Venus, Uranus, Neptunus'], ans: 1, exp: 'Keempat planet terdekat Matahari bersifat padat berbatu.' },
      { text: 'Mengapa Pluto sejak tahun 2006 tidak lagi masuk daftar 8 planet utama?', opts: ['Karena meledak', 'Karena diklasifikasikan sebagai planet kerdil (dwarf planet)', 'Karena terlalu panas', 'Karena menjadi satelit Bumi'], ans: 1, exp: 'IAU menggolongkan Pluto sebagai planet kerdil.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-01', subSeq: 4,
    objectives: ['Siswa mampu menyebutkan julukan dan karakteristik unik masing-masing dari 8 planet Tata Surya.'],
    materialTitle: 'Karakteristik Unik 8 Planet',
    blocks: [
      { type: 'flashcards', title: 'Julukan Keren 8 Planet! (Klik untuk Cek)', cards: [
        { emoji: '🪨', front: 'Merkurius', back: 'Planet TERKECIL dan TERDEKAT dengan Matahari (tanpa satelit)' },
        { emoji: '🔥', front: 'Venus', back: 'Planet TERPANAS (efek rumah kaca tebal), Bintang Fajar/Senja, rotasi searah jarum jam' },
        { emoji: '🌍', front: 'Bumi', back: 'Planet Biru, satu-satunya yang diketahui memiliki kehidupan & air cair, 1 satelit (Bulan)' },
        { emoji: '🔴', front: 'Mars', back: 'Planet Merah (debu besi oksida), punya 2 satelit (Phobos & Deimos)' },
        { emoji: '🟠', front: 'Jupiter', back: 'Planet TERBESAR di Tata Surya, punya Bintik Merah Besar' },
        { emoji: '🪐', front: 'Saturnus', back: 'Planet bercincin paling indah dan terang (tersusun dari es & batu)' },
        { emoji: '🩵', front: 'Uranus & Neptunus', back: 'Uranus: berotasi miring hampir rebah; Neptunus: planet TERJAUH & berangin kencang' },
      ]},
    ],
    activityTitle: 'Latihan: Karakteristik Planet',
    questions: [
      { text: 'Planet TERPANAS di Tata Surya meskipun bukan yang paling dekat Matahari (karena atmosfer CO₂ super tebal) adalah...', opts: ['Merkurius', 'Venus', 'Mars', 'Jupiter'], ans: 1, exp: 'Atmosfer tebal Venus memerangkap panas ekstrem (~460°C).' },
      { text: 'Planet TERBESAR di Tata Surya adalah...', opts: ['Saturnus', 'Jupiter', 'Neptunus', 'Bumi'], ans: 1, exp: 'Jupiter adalah raksasa gas terbesar di Tata Surya.' },
      { text: 'Planet yang dijuluki "Planet Merah" karena permukaannya kaya debu besi oksida adalah...', opts: ['Venus', 'Mars', 'Uranus', 'Merkurius'], ans: 1, exp: 'Mars tampak kemerahan dari Bumi.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-01', subSeq: 5,
    objectives: ['Siswa mampu membedakan benda langit lain: satelit, asteroid, komet, meteoroid, meteor, dan meteorit.'],
    materialTitle: 'Benda Langit Lainnya di Tata Surya',
    blocks: [
      { type: 'table', title: 'Jangan Sampai Tertukar: Asteroid, Komet, Meteor!', headers: ['Benda Langit', 'Penjelasan Singkat'], rows: [
        ['Satelit Alami & Buatan', 'Benda yang mengorbit planet (alami: Bulan; buatan: satelit komunikasi/cuaca)'],
        ['Asteroid', 'Batuan logam kecil pengorbit Matahari (banyak di antara Mars & Jupiter)'],
        ['Komet ("Bintang Berekor")', 'Bola es & debu; ekornya selalu MENJAUHI Matahari saat mendekat!'],
        ['Meteoroid → Meteor → Meteorit', 'Meteoroid (di angkasa) → Meteor (terbakar di atmosfer = "bintang jatuh") → Meteorit (batuan yang jatuh sampai tanah)'],
      ]},
    ],
    activityTitle: 'Latihan: Benda Langit Lainnya',
    questions: [
      { text: 'Fenomena "bintang jatuh" yang tampak berpijar di langit malam sebenarnya adalah ... yang terbakar bergesekan dengan atmosfer Bumi.', opts: ['Bintang meledak', 'Meteor', 'Planet', 'Satelit'], ans: 1, exp: 'Meteor adalah meteoroid yang berpijar saat memasuki atmosfer Bumi.' },
      { text: 'Arah ekor Komet ketika mendekati Matahari selalu...', opts: ['Menuju Matahari', 'Menjauhi Matahari (terdorong angin surya)', 'Mengarah ke Bumi saja', 'Melingkar'], ans: 1, exp: 'Radiasi dan angin matahari mendorong gas/debu komet menjauhi Matahari.' },
      { text: 'Sisa batuan meteor yang tidak habis terbakar dan berhasil jatuh sampai ke permukaan Bumi disebut...', opts: ['Meteoroid', 'Meteorit', 'Komet', 'Asteroid'], ans: 1, exp: 'Ingat: di angkasa = Meteoroid, berpijar = Meteor, sampai tanah = Meteorit.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-01', subSeq: 6,
    objectives: ['Siswa mampu menghafalkan urutan 8 planet dari yang terdekat hingga terjauh dari Matahari.'],
    materialTitle: 'Urutan Planet dari Matahari',
    blocks: [
      { type: 'formula', name: 'Jembatan Keledai Hafal 8 Planet!', expression: 'Me – Ve – Bu – Ma – Ju – Sa – U – Nep', note: 'Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus! ("MeVeBuMa JuSaUNep")' },
      { type: 'tip', text: 'Makin JAUH planet dari Matahari, makin PANJANG lintasan orbitnya sehingga makin LAMA waktu revolusinya!' },
    ],
    activityTitle: 'Latihan: Urutan Planet',
    questions: [
      { text: 'Urutan planet ke-3, ke-4, dan ke-5 dari Matahari adalah...', opts: ['Bumi, Mars, Jupiter', 'Venus, Bumi, Mars', 'Mars, Jupiter, Saturnus', 'Merkurius, Venus, Bumi'], ans: 0, exp: '1 Merkurius, 2 Venus, 3 Bumi, 4 Mars, 5 Jupiter.' },
      { text: 'Planet yang memiliki kala revolusi (waktu 1 kali mengelilingi Matahari) PALING LAMA adalah...', opts: ['Merkurius', 'Bumi', 'Saturnus', 'Neptunus'], ans: 3, exp: 'Neptunus paling jauh dari Matahari sehingga orbitnya terpanjang (~165 tahun Bumi).' },
      { text: 'Planet yang berada tepat di antara Saturnus dan Neptunus adalah...', opts: ['Jupiter', 'Uranus', 'Mars', 'Venus'], ans: 1, exp: 'Urutan planet luar: Jupiter – Saturnus – Uranus – Neptunus.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-01', subSeq: 7,
    objectives: ['Siswa mampu mensintesis keteraturan sistem Tata Surya dan mengenal peran astronomi serta satelit bagi manusia.'],
    materialTitle: 'Keteraturan Sistem Tata Surya & Manfaat Satelit',
    blocks: [
      { type: 'visual_cards', title: 'Manfaat Satelit Buatan yang Mengorbit Bumi', cards: [
        { emoji: '📡', label: 'Satelit Komunikasi', sub: 'Menghubungkan internet, telepon, dan siaran TV ke seluruh pulau di Indonesia' },
        { emoji: '🛰️', label: 'Satelit Navigasi (GPS)', sub: 'Membantu peta digital menunjukkan rute perjalanan akurat' },
        { emoji: '🌦️', label: 'Satelit Cuaca', sub: 'Memantau awan hujan, badai, dan prakiraan cuaca untuk nelayan & petani' },
      ]},
    ],
    activityTitle: 'Latihan: Sistem Tata Surya',
    questions: [
      { text: 'Mengapa 8 planet tidak saling bertabrakan saat mengelilingi Matahari?', opts: ['Karena masing-masing bergerak teratur pada orbitnya sendiri akibat keseimbangan gravitasi dan gerak', 'Karena planet tidak bergerak', 'Karena ada tembok kaca di angkasa', 'Karena planet sangat kecil'], ans: 0, exp: 'Keteraturan orbit menjaga tiap planet pada lintasannya.' },
      { text: 'Teknologi satelit buatan yang membantu aplikasi peta digital menentukan lokasi kita secara akurat adalah...', opts: ['GPS (satelit navigasi)', 'Kompor', 'Mikroskop', 'Dinamometer'], ans: 0, exp: 'Satelit GPS mengirim sinyal koordinat posisi ke ponsel.' },
      { text: 'Satu-satunya planet di Tata Surya yang memiliki atmosfer kaya oksigen, suhu moderat, dan air cair melimpah untuk kehidupan adalah...', opts: ['Mars', 'Bumi', 'Venus', 'Jupiter'], ans: 1, exp: 'Bumi berada di zona layak huni (habitable zone) sehingga kita wajib menjaganya!' },
    ],
  },

  // BAB 2: ROTASI DAN REVOLUSI BUMI
  {
    topicCode: 'IPAS-SD6-02', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian rotasi Bumi, arah rotasi (Barat → Timur), dan kala rotasi (±24 jam).'],
    materialTitle: 'Pengertian Rotasi Bumi',
    blocks: [
      { type: 'formula', name: 'Rotasi Bumi (Berputar pada Porosnya)', expression: 'Arah: Barat → Timur  |  Kala Rotasi: 23 jam 56 menit (≈ 24 jam = 1 hari)', note: 'Bumi berputar seperti gasing pada sumbu miring 23,5°!' },
    ],
    activityTitle: 'Latihan: Pengertian Rotasi Bumi',
    questions: [
      { text: 'Perputaran Bumi pada porosnya (sumbunya) sendiri disebut...', opts: ['Revolusi Bumi', 'Rotasi Bumi', 'Gerhana', 'Orbit'], ans: 1, exp: 'Rotasi = berputar pada poros sendiri.' },
      { text: 'Arah rotasi Bumi adalah dari ... menuju ... sehingga Matahari tampak terbit dari timur.', opts: ['Timur ke Barat', 'Barat ke Timur', 'Utara ke Selatan', 'Selatan ke Utara'], ans: 1, exp: 'Rotasi Barat → Timur menyebabkan gerak semu harian Matahari dari Timur ke Barat.' },
      { text: 'Waktu yang dibutuhkan Bumi untuk 1 kali berotasi penuh (kala rotasi) dibulatkan menjadi...', opts: ['12 jam', '24 jam (1 hari)', '30 hari', '365 hari'], ans: 1, exp: 'Kala rotasi Bumi ≈ 24 jam.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-02', subSeq: 2,
    objectives: ['Siswa mampu menyebutkan 4 akibat utama rotasi Bumi (siang-malam, perbedaan waktu, gerak semu harian Matahari, pembelokan angin).'],
    materialTitle: 'Akibat Rotasi Bumi',
    blocks: [
      { type: 'visual_cards', title: '4 Akibat Utama Rotasi Bumi', cards: [
        { emoji: '🌗', label: '1. Terjadinya Siang dan Malam', sub: 'Bagian menghadap Matahari = siang; membelakangi = malam' },
        { emoji: '🌅', label: '2. Gerak Semu Harian Matahari', sub: 'Matahari seolah terbit di timur dan tenggelam di barat (padahal Bumi yang berputar!)' },
        { emoji: '🕒', label: '3. Perbedaan Waktu di Bumi', sub: 'Setiap 15° bujur berbeda 1 jam → Indonesia punya WIB, WITA, WIT!' },
        { emoji: '💨', label: '4. Pembelokan Arah Angin & Arus Laut', sub: 'Efek Coriolis memengaruhi pola angin di belahan Bumi utara & selatan' },
      ]},
    ],
    activityTitle: 'Latihan: Akibat Rotasi Bumi',
    questions: [
      { text: 'Perbedaan waktu antara Gresik (WIB), Makassar (WITA), dan Papua (WIT) merupakan akibat dari...', opts: ['Rotasi Bumi', 'Revolusi Bumi', 'Revolusi Bulan', 'Gerhana Bulan'], ans: 0, exp: 'Rotasi Bumi menyebabkan wilayah timur menerima sinar Matahari lebih dulu.' },
      { text: 'Matahari tampak bergerak dari timur ke barat setiap hari disebut...', opts: ['Gerak semu harian Matahari', 'Revolusi Matahari', 'Gerhana', 'Pasang surut'], ans: 0, exp: 'Disebut "semu" karena sebenarnya Bumi yang berotasi dari barat ke timur.' },
      { text: 'Setiap perbedaan garis bujur sebesar 15° menghasilkan perbedaan waktu sebesar...', opts: ['15 menit', '30 menit', '1 jam', '2 jam'], ans: 2, exp: '360° ÷ 24 jam = 15° per jam.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-02', subSeq: 3,
    objectives: ['Siswa mampu memodelkan terjadinya siang dan malam dengan senter (Matahari) dan globe (Bumi).'],
    materialTitle: 'Proses Terjadinya Siang dan Malam',
    blocks: [
      { type: 'story_panel', title: 'Simulasi Globe dan Senter!', lines: [
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Sorotkan senter ke bola globe lalu putar pelan! Separuh bola terang (SIANG) dan separuh belakang gelap (MALAM).' },
        { speaker: 'Alya', avatar: '👧', text: 'Jadi saat kita di Indonesia sedang siang hari sekolah, di sisi seberang Bumi seperti Amerika sedang malam hari tidur ya Pak!' },
      ]},
    ],
    activityTitle: 'Latihan: Siang dan Malam',
    questions: [
      { text: 'Saat Indonesia mengalami siang hari, wilayah di belahan Bumi yang berlawanan (membelakangi Matahari) sedang mengalami...', opts: ['Siang hari juga', 'Malam hari', 'Musim gugur', 'Gerhana matahari'], ans: 1, exp: 'Hanya separuh permukaan Bumi yang terkena sinar Matahari dalam satu waktu.' },
      { text: 'Jika Bumi berhenti berotasi sama sekali, apa yang terjadi pada siang dan malam?', opts: ['Siang dan malam berganti tiap 1 jam', 'Satu sisi Bumi akan mengalami siang sangat panjang (panas ekstrem) dan sisi lain malam sangat panjang (beku)', 'Tidak ada pengaruhnya', 'Bulan menghilang'], ans: 1, exp: 'Rotasi menjaga suhu Bumi merata dan siklus hidup teratur.' },
      { text: 'Dalam percobaan model siang-malam di kelas, lampu senter berperan sebagai ... dan bola globe sebagai ...', opts: ['Matahari dan Bumi', 'Bulan dan bintang', 'Bumi dan Matahari', 'Awan dan hujan'], ans: 0, exp: 'Senter = sumber cahaya (Matahari), globe = Bumi.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-02', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan pengertian revolusi Bumi, kala revolusi (365¼ hari), dan tahun kabisat.'],
    materialTitle: 'Pengertian Revolusi Bumi dan Tahun Kabisat',
    blocks: [
      { type: 'formula', name: 'Revolusi Bumi (Mengelilingi Matahari)', expression: 'Kala Revolusi = 365 hari 6 jam (365¼ hari) = 1 Tahun Masehi', note: 'Sisa ¼ hari dikumpulkan tiap 4 tahun (4 × ¼ = 1 hari) → ditambahkan di tanggal 29 Februari (TAHUN KABISAT = 366 hari)!' },
    ],
    activityTitle: 'Latihan: Pengertian Revolusi Bumi',
    questions: [
      { text: 'Peredaran Bumi mengelilingi Matahari pada orbitnya disebut...', opts: ['Rotasi Bumi', 'Revolusi Bumi', 'Gerhana', 'Abrasi'], ans: 1, exp: 'Revolusi = gerakan mengorbit mengelilingi Matahari.' },
      { text: 'Waktu yang dibutuhkan Bumi untuk 1 kali revolusi penuh mengelilingi Matahari adalah...', opts: ['24 jam', '29,5 hari', '365¼ hari (1 tahun)', '10 tahun'], ans: 2, exp: 'Kala revolusi Bumi = 365 hari 6 jam.' },
      { text: 'Tahun kabisat (366 hari, bulan Februari 29 hari) terjadi setiap 4 tahun sekali. Manakah yang merupakan tahun kabisat?', opts: ['2023', '2024 dan 2028', '2025', '2027'], ans: 1, exp: 'Tahun yang habis dibagi 4 (2024, 2028) adalah tahun kabisat.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-02', subSeq: 5,
    objectives: ['Siswa mampu menjelaskan akibat revolusi Bumi dan kemiringan sumbu 23,5° (pergantian 4 musim, perbedaan lama siang-malam, gerak semu tahunan Matahari).'],
    materialTitle: 'Akibat Revolusi Bumi Mengelilingi Matahari',
    blocks: [
      { type: 'visual_cards', title: '4 Akibat Revolusi Bumi (+ Kemiringan Poros 23,5°)', cards: [
        { emoji: '🍂❄️🌸☀️', label: '1. Pergantian 4 Musim', sub: 'Di belahan utara & selatan (semi, panas, gugur, dingin) saling berkebalikan!' },
        { emoji: '📅', label: '2. Kalender Masehi (Syamsiah)', sub: 'Dasar penanggalan 12 bulan (365/366 hari)' },
        { emoji: '☀️', label: '3. Gerak Semu Tahunan Matahari', sub: 'Posisi terbit Matahari bergeser antara utara dan selatan sepanjang tahun' },
        { emoji: '✨', label: '4. Perubahan Rasi Bintang & Lama Siang–Malam', sub: 'Rasi bintang yang terlihat malam hari berganti tiap musim' },
      ]},
    ],
    activityTitle: 'Latihan: Akibat Revolusi Bumi',
    questions: [
      { text: 'Pergantian 4 musim (semi, panas, gugur, dingin) di negara-negara subtropis disebabkan oleh...', opts: ['Rotasi Bumi saja', 'Revolusi Bumi dan kemiringan sumbu Bumi 23,5°', 'Gerhana Bulan', 'Pasang surut laut'], ans: 1, exp: 'Kemiringan poros saat mengelilingi Matahari membuat penyinaran belahan utara & selatan bergantian.' },
      { text: 'Ketika belahan Bumi UTARA mengalami musim PANAS (Juni), belahan Bumi SELATAN (seperti Australia) mengalami musim...', opts: ['Panas juga', 'Dingin', 'Semi', 'Gugur'], ans: 1, exp: 'Musim belahan utara dan selatan selalu berlawanan.' },
      { text: 'Manakah yang merupakan akibat REVOLUSI Bumi (bukan rotasi)?', opts: ['Terjadinya siang dan malam', 'Perbedaan waktu WIB–WITA–WIT', 'Pergantian musim dan perubahan rasi bintang', 'Gerak semu harian Matahari'], ans: 2, exp: 'Pergantian musim dan rasi bintang adalah akibat revolusi Bumi.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-02', subSeq: 6,
    objectives: ['Siswa mampu membedakan dasar perhitungan Kalender Masehi (revolusi Bumi) dan Kalender Hijriah (revolusi Bulan).'],
    materialTitle: 'Pergantian Tahun: Kalender Masehi vs Hijriah',
    blocks: [
      { type: 'table', title: 'Perbandingan Kalender Masehi & Hijriah', headers: ['Aspek', 'Kalender Masehi (Syamsiah)', 'Kalender Hijriah (Komariah)'], rows: [
        ['Dasar Perhitungan', 'Revolusi BUMI mengelilingi Matahari', 'Revolusi BULAN mengelilingi Bumi'],
        ['Jumlah Hari/Tahun', '365 hari (kabisat: 366 hari)', '354 hari (kabisat: 355 hari)'],
        ['Selisih per Tahun', 'Lebih panjang ~11 hari dari Hijriah', 'Tanggal Ramadan & Idulfitri maju ±11 hari setiap tahun Masehi!'],
      ]},
    ],
    activityTitle: 'Latihan: Kalender Masehi & Hijriah',
    questions: [
      { text: 'Kalender Hijriah (Komariah) dihitung berdasarkan peredaran...', opts: ['Bumi mengelilingi Matahari', 'Bulan mengelilingi Bumi', 'Bumi berputar pada porosnya', 'Mars mengelilingi Matahari'], ans: 1, exp: 'Komariah berasal dari Qamar (Bulan) — 12 kali fase bulan = 354/355 hari.' },
      { text: 'Mengapa awal bulan Ramadan selalu maju sekitar 11 hari setiap tahun pada kalender Masehi?', opts: ['Karena 1 tahun Hijriah (354 hari) lebih pendek ±11 hari daripada 1 tahun Masehi (365 hari)', 'Karena rotasi Bumi melambat', 'Karena kalender salah cetak', 'Karena musim hujan'], ans: 0, exp: '365 − 354 = 11 hari selisih tiap tahun.' },
      { text: 'Kalender Masehi disebut juga kalender Syamsiah karena berpatokan pada peredaran Bumi terhadap...', opts: ['Matahari (Syams)', 'Bulan', 'Jupiter', 'Bintang utara'], ans: 0, exp: 'Syams = Matahari.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-02', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan fenomena Gerhana Matahari, Gerhana Bulan, dan pasang surut air laut akibat gerak Bumi–Bulan.'],
    materialTitle: 'Gerhana Matahari, Gerhana Bulan, & Pasang Surut',
    blocks: [
      { type: 'table', title: 'Posisi Lurus Gerhana (Ingat Posisi Tengahnya!)', headers: ['Jenis Gerhana', 'Urutan Posisi Lurus', 'Kapan Terjadi?'], rows: [
        ['Gerhana MATAHARI', 'Matahari — BULAN — Bumi', 'Siang hari saat fase Bulan Baru (bayangan Bulan jatuh ke Bumi)'],
        ['Gerhana BULAN', 'Matahari — BUMI — Bulan', 'Malam hari saat fase Bulan Purnama (Bulan masuk bayangan Bumi)'],
      ]},
      { type: 'tip', text: 'Gaya gravitasi Bulan (dan Matahari) menarik air laut di Bumi sehingga terjadi PASANG SURUT air laut — sangat penting diketahui nelayan dan petambak di pesisir Gresik!' },
    ],
    activityTitle: 'Latihan: Gerhana & Pasang Surut',
    questions: [
      { text: 'Susunan posisi Matahari – Bulan – Bumi pada satu garis lurus menyebabkan terjadinya...', opts: ['Gerhana Matahari', 'Gerhana Bulan', 'Musim gugur', 'Tahun kabisat'], ans: 0, exp: 'Bulan di tengah menghalangi cahaya Matahari menuju sebagian Bumi → Gerhana Matahari.' },
      { text: 'Gerhana Bulan hanya dapat terjadi pada malam hari ketika fase...', opts: ['Bulan Sabit', 'Bulan Baru', 'Bulan Purnama', 'Siang bolong'], ans: 2, exp: 'Posisi Matahari–Bumi–Bulan lurus terjadi pada fase Bulan Purnama.' },
      { text: 'Peristiwa naik dan turunnya permukaan air laut secara periodik (pasang surut) terutama dipengaruhi oleh...', opts: ['Gaya gravitasi Bulan terhadap Bumi', 'Angin dari gunung', 'Rotasi Jupiter', 'Hujan lokal'], ans: 0, exp: 'Tarikan gravitasi Bulan menyebabkan air laut pasang dan surut.' },
    ],
  },

  // BAB 3: ENERGI DAN PERUBAHAN IKLIM
  {
    topicCode: 'IPAS-SD6-03', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan tingginya ketergantungan kehidupan modern terhadap energi listrik dan bahan bakar.'],
    materialTitle: 'Kebutuhan Energi dalam Kehidupan Modern',
    blocks: [
      { type: 'visual_cards', title: 'Semua Aktivitas Modern Butuh Energi!', cards: [
        { emoji: '🏠', label: 'Rumah Tangga', sub: 'Lampu, kulkas, kipas, pompa air, memasak' },
        { emoji: '🚗', label: 'Transportasi', sub: 'Motor, mobil, bus, kapal, kereta, pesawat' },
        { emoji: '🏭', label: 'Industri & Komunikasi', sub: 'Pabrik, komputer, internet, menara seluler' },
      ]},
    ],
    activityTitle: 'Latihan: Kebutuhan Energi',
    questions: [
      { text: 'Mengapa kebutuhan energi listrik manusia terus meningkat dari tahun ke tahun?', opts: ['Karena jumlah penduduk dan penggunaan peralatan elektronik serta industri makin bertambah', 'Karena matahari makin redup', 'Karena manusia tidak lagi makan', 'Karena air laut habis'], ans: 0, exp: 'Pertumbuhan penduduk dan teknologi meningkatkan konsumsi energi.' },
      { text: 'Peralatan rumah tangga yang umumnya menyedot daya listrik PALING BESAR adalah...', opts: ['Lampu LED 5 watt', 'Pendingin ruangan (AC), setrika, dan pemanas air', 'Jam dinding baterai', 'Kalkulator'], ans: 1, exp: 'Alat penghasil panas/dingin (AC, setrika, dispenser panas) membutuhkan watt besar.' },
      { text: 'Jika terjadi pemadaman listrik total dalam waktu lama, dampak langsung di masyarakat adalah...', opts: ['Aktivitas penerangan, komunikasi, pompa air, dan industri terganggu', 'Udara langsung jadi dingin', 'Semua kendaraan berhenti', 'Tidak terasa apa-apa'], ans: 0, exp: 'Banyak fasilitas vital bergantung pada listrik.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-03', subSeq: 2,
    objectives: ['Siswa mampu membedakan sumber energi fosil (konvensional) dan sumber energi alternatif (bersih).'],
    materialTitle: 'Sumber Energi Fosil dan Alternatif',
    blocks: [
      { type: 'table', title: 'Energi Fosil vs Energi Alternatif', headers: ['Jenis', 'Contoh', 'Dampak Lingkungan'], rows: [
        ['Energi Fosil (Konvensional)', 'Batu bara (PLTU), minyak bumi (bensin/solar), gas alam', 'Bisa habis & pembakarannya melepas banyak CO₂ (gas rumah kaca)'],
        ['Energi Alternatif (Bersih)', 'Surya (PLTS), Angin (PLTB), Air (PLTA), Panas Bumi (PLTP), Biogas', 'Terbarukan, ramah lingkungan, emisi polusi sangat rendah!'],
      ]},
    ],
    activityTitle: 'Latihan: Sumber Energi',
    questions: [
      { text: 'Bahan bakar fosil yang paling banyak digunakan pada pembangkit listrik konvensional (PLTU) adalah...', opts: ['Batu bara', 'Air terjun', 'Angin', 'Panel surya'], ans: 0, exp: 'PLTU umumnya membakar batu bara untuk mendidihkan uap pemutar turbin.' },
      { text: 'Mengapa dunia sekarang berlomba beralih dari energi fosil ke energi alternatif?', opts: ['Karena energi fosil makin menipis dan pembakarannya memicu polusi serta pemanasan global', 'Karena matahari lebih mahal', 'Karena batu bara tidak bisa terbakar', 'Agar tidak ada listrik'], ans: 0, exp: 'Transisi energi menjaga ketersediaan energi dan menekan perubahan iklim.' },
      { text: 'Pembangkit Listrik Tenaga Panas Bumi (geotermal) disingkat...', opts: ['PLTA', 'PLTS', 'PLTP', 'PLTB'], ans: 2, exp: 'PLTA=Air, PLTS=Surya, PLTB=Bayu/Angin, PLTP=Panas Bumi.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-03', subSeq: 3,
    objectives: ['Siswa mampu membandingkan kelebihan dan tantangan energi terbarukan serta tidak terbarukan.'],
    materialTitle: 'Energi Terbarukan dan Tidak Terbarukan',
    blocks: [
      { type: 'tip', text: 'Energi terbarukan (matahari, angin, air, biomassa) tidak akan habis oleh pemakaian manusia, tetapi sebagian bergantung pada cuaca (misal panel surya optimal saat cerah) sehingga butuh baterai penyimpan.' },
    ],
    activityTitle: 'Latihan: Energi Terbarukan vs Tak Terbarukan',
    questions: [
      { text: 'Kelompok sumber energi yang SEMUANYA termasuk energi TERBARUKAN adalah...', opts: ['Surya, angin, air, panas bumi, biomassa', 'Batu bara, minyak bumi, angin', 'Gas alam, solar, bensin', 'Batu bara, avtur, gas alam'], ans: 0, exp: 'Kelimanya pulih secara alami terus-menerus.' },
      { text: 'Bahan bakar kendaraan yang berasal dari tumbuhan (seperti minyak sawit/jarak) sebagai pengganti solar fosil disebut...', opts: ['Biodiesel (bioenergi)', 'Batu bara', 'Uranium', 'Aspal'], ans: 0, exp: 'Biodiesel dibuat dari minyak nabati terbarukan.' },
      { text: 'Tantangan utama pemanfaatan panel surya di malam hari diatasi dengan menggunakan...', opts: ['Baterai penyimpan energi listrik', 'Kipas angin', 'Kaca gelap', 'Kapur barus'], ans: 0, exp: 'Energi listrik siang hari disimpan di baterai agar bisa dipakai malam hari.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-03', subSeq: 4,
    objectives: ['Siswa mampu merancang tindakan hemat energi listrik dan bahan bakar di rumah serta sekolah.'],
    materialTitle: 'Gerakan Penghematan Energi',
    blocks: [
      { type: 'visual_cards', title: 'Cara Efektif Hemat Listrik & BBM', cards: [
        { emoji: '💡', label: 'Pakai Lampu LED', sub: 'Lebih terang dan hemat listrik hingga 80% dibanding lampu pijar lama!' },
        { emoji: '❄️', label: 'Atur Suhu AC 25–26°C', sub: 'Tutup pintu/jendela rapat agar mesin AC tidak bekerja ekstra berat' },
        { emoji: '🔌', label: 'Cabut Steker / Charger', sub: 'Alat dalam mode standby tetap menyedot listrik diam-diam' },
        { emoji: '🚌', label: 'Transportasi Umum / Sepeda', sub: 'Mengurangi pemakaian bensin dan kemacetan' },
      ]},
    ],
    activityTitle: 'Latihan: Penghematan Energi',
    questions: [
      { text: 'Jenis lampu yang paling hemat energi listrik dan tahan lama untuk penerangan rumah adalah...', opts: ['Lampu pijar kuning lama', 'Lampu LED', 'Lilin', 'Obor'], ans: 1, exp: 'Lampu LED mengubah hampir seluruh listrik menjadi cahaya (sedikit panas terbuang).' },
      { text: 'Kebiasaan membiarkan pengisi daya (charger) HP tetap menancap di stopkontak meski tidak dipakai sebaiknya dihindari karena...', opts: ['Tetap mengonsumsi listrik (beban standby) dan berisiko panas', 'Membuat baterai penuh otomatis', 'Membuat rumah sejuk', 'Menghemat biaya'], ans: 0, exp: 'Mencabut steker menghemat listrik dan meningkatkan keamanan.' },
      { text: 'Jika jarak sekolah hanya 500 meter, pilihan paling hemat energi dan sehat adalah...', opts: ['Berjalan kaki atau bersepeda', 'Diantar mobil sendirian setiap hari', 'Naik helikopter', 'Tidak sekolah'], ans: 0, exp: 'Jalan kaki/bersepeda bebas emisi dan menyehatkan.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-03', subSeq: 5,
    objectives: ['Siswa mampu menjelaskan prinsip kerja Pembangkit Listrik Tenaga Surya (PLTS) menggunakan panel surya.'],
    materialTitle: 'Energi Matahari (Panel Surya / PLTS)',
    blocks: [
      { type: 'formula', name: 'Cara Kerja Panel Surya (Sel Fotovoltaik)', expression: 'Energi Cahaya Matahari  →  Panel Surya  →  Energi Listrik', note: 'Indonesia beriklim tropis dengan sinar matahari melimpah sepanjang tahun — potensi PLTS kita luar biasa besar!' },
    ],
    activityTitle: 'Latihan: Energi Matahari',
    questions: [
      { text: 'Alat yang berfungsi mengubah energi cahaya matahari langsung menjadi energi listrik adalah...', opts: ['Turbin air', 'Panel surya (sel fotovoltaik)', 'Kompor gas', 'Dinamo sepeda'], ans: 1, exp: 'Panel surya menghasilkan listrik dari sinar matahari.' },
      { text: 'Mengapa Indonesia memiliki potensi sangat besar untuk mengembangkan PLTS?', opts: ['Karena terletak di wilayah khatulistiwa/tropis yang menerima sinar matahari melimpah sepanjang tahun', 'Karena selalu hujan salju', 'Karena tidak punya pantai', 'Karena malamnya 20 jam'], ans: 0, exp: 'Penyinaran matahari tropis stabil sepanjang tahun.' },
      { text: 'Contoh pemanfaatan panel surya di lingkungan kita adalah...', opts: ['Lampu penerangan jalan tenaga surya dan kalkulator surya', 'Setrika arang', 'Kompor kayu', 'Layang-layang'], ans: 0, exp: 'PJU tenaga surya dan atap panel surya makin banyak dipasang di Indonesia.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-03', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan pemanfaatan energi angin (bayu) melalui turbin angin/PLTB.'],
    materialTitle: 'Energi Angin (PLTB)',
    blocks: [
      { type: 'formula', name: 'Cara Kerja PLTB (Tenaga Bayu)', expression: 'Energi Gerak Angin  →  Memutar Baling-Baling Turbin  →  Generator  →  Energi Listrik', note: 'Contoh nyata di Indonesia: PLTB Sidrap dan PLTB Jeneponto di Sulawesi Selatan!' },
    ],
    activityTitle: 'Latihan: Energi Angin',
    questions: [
      { text: 'Pembangkit Listrik Tenaga Bayu (PLTB) memanfaatkan energi gerak dari...', opts: ['Angin', 'Batu bara', 'Minyak bumi', 'Panas bumi'], ans: 0, exp: 'Bayu = angin.' },
      { text: 'Komponen di dalam kincir angin pembangkit listrik yang mengubah energi gerak putaran menjadi energi listrik adalah...', opts: ['Generator', 'Layar kain', 'Baterai kering', 'Kaca'], ans: 0, exp: 'Generator menghasilkan arus listrik saat diputar oleh turbin.' },
      { text: 'Lokasi yang paling cocok untuk membangun kincir angin pembangkit listrik adalah...', opts: ['Ruang tertutup tanpa udara', 'Daerah pesisir pantai atau perbukitan terbuka dengan angin kencang dan stabil', 'Dalam gua', 'Bawah tanah'], ans: 1, exp: 'PLTB membutuhkan kecepatan angin yang kuat dan konsisten.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-03', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan cara kerja Pembangkit Listrik Tenaga Air (PLTA) dari waduk/bendungan.'],
    materialTitle: 'Energi Air (PLTA)',
    blocks: [
      { type: 'formula', name: 'Cara Kerja PLTA', expression: 'Air Bendungan/Waduk Mengalir Deras  →  Memutar Turbin  →  Generator  →  Listrik', note: 'Makin tinggi jatuhan air (energi potensial), makin kuat putaran turbinnya!' },
    ],
    activityTitle: 'Latihan: Energi Air',
    questions: [
      { text: 'Urutan perubahan energi yang terjadi pada PLTA adalah...', opts: ['Gerak air → Gerak turbin → Energi listrik', 'Panas api → Listrik', 'Cahaya → Listrik', 'Bunyi → Listrik'], ans: 0, exp: 'Aliran air memutar turbin yang tersambung ke generator listrik.' },
      { text: 'Bangunan besar penampung air sungai untuk menggerakkan turbin PLTA sekaligus irigasi sawah disebut...', opts: ['Waduk / Bendungan', 'Menara radio', 'Pelabuhan', 'Stasiun'], ans: 0, exp: 'Bendungan menampung air di ketinggian untuk memutar turbin.' },
      { text: 'Menjaga kelestarian hutan di daerah hulu sungai sangat penting bagi keberlangsungan PLTA karena...', opts: ['Menjaga ketersediaan debit air sungai agar tidak kering di musim kemarau', 'Membuat air berhenti mengalir', 'Menambah batu bara', 'Menghalangi angin'], ans: 0, exp: 'Hutan hulu menyimpan cadangan air tanah yang mengisi sungai.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-03', subSeq: 8,
    objectives: ['Siswa mampu mengenal pemanfaatan biogas, biomassa, panas bumi, dan kendaraan listrik sebagai energi alternatif.'],
    materialTitle: 'Pemanfaatan Energi Alternatif Lainnya',
    blocks: [
      { type: 'visual_cards', title: 'Energi Alternatif Masa Depan', cards: [
        { emoji: '🐄', label: 'Biogas', sub: 'Gas metana dari fermentasi kotoran ternak/sampah organik → pengganti elpiji memasak!' },
        { emoji: '🌋', label: 'Panas Bumi (Geotermal)', sub: 'Uap panas dari perut bumi di daerah gunung berapi Indonesia → PLTP' },
        { emoji: '🛵', label: 'Kendaraan Listrik', sub: 'Motor & bus listrik bebas asap knalpot di jalan kota!' },
      ]},
    ],
    activityTitle: 'Latihan: Energi Alternatif',
    questions: [
      { text: 'Energi alternatif berbentuk gas yang dihasilkan dari fermentasi kotoran hewan ternak dan limbah organik untuk memasak disebut...', opts: ['Biogas', 'Bensin', 'Solar', 'Batu bara'], ans: 0, exp: 'Biogas ramah lingkungan sekaligus mengolah limbah peternakan.' },
      { text: 'Keunggulan utama sepeda motor atau bus listrik dibanding kendaraan bensin di perkotaan adalah...', opts: ['Tidak menghasilkan asap polusi knalpot dan lebih senyap', 'Harus diisi batu bara', 'Mengeluarkan asap hitam', 'Tidak memakai roda'], ans: 0, exp: 'Kendaraan listrik menekan emisi polusi udara kota.' },
      { text: 'Indonesia kaya potensi energi Panas Bumi (geotermal) karena...', opts: ['Memiliki banyak gunung berapi aktif di jalur Cincin Api', 'Berada di kutub utara', 'Tidak punya sungai', 'Terdiri dari gurun pasir'], ans: 0, exp: 'Aktivitas vulkanik menghasilkan sumber panas bumi melimpah.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-03', subSeq: 9,
    objectives: ['Siswa mampu menjelaskan efek rumah kaca, pemanasan global, serta langkah mitigasi dan adaptasi perubahan iklim.'],
    materialTitle: 'Mitigasi Perubahan Iklim',
    blocks: [
      { type: 'text', text: 'MITIGASI perubahan iklim adalah upaya MENCEGAH atau MENGURANGI emisi gas rumah kaca (seperti CO₂) agar pemanasan global tidak makin parah!' },
      { type: 'list', title: '5 Aksi Mitigasi Nyata', items: ['1. Beralih ke energi bersih/terbarukan dan hemat listrik.', '2. Menanam pohon (penghijauan & mangrove) untuk menyerap CO₂.', '3. Mengurangi kendaraan pribadi berbahan bakar fosil (naik transportasi umum/sepeda).', '4. Menerapkan 3R dan mengolah sampah organik jadi kompos agar tidak menghasilkan gas metana di TPA.', '5. Tidak membakar hutan maupun sampah plastik!'] },
    ],
    activityTitle: 'Latihan: Mitigasi Perubahan Iklim',
    questions: [
      { text: 'Upaya mengurangi emisi gas rumah kaca untuk memperlambat pemanasan global disebut...', opts: ['Mitigasi perubahan iklim', 'Polusi', 'Abrasi', 'Erosi'], ans: 0, exp: 'Mitigasi berfokus menekan penyebab perubahan iklim.' },
      { text: 'Gas rumah kaca utama yang dihasilkan dari pembakaran bensin, batu bara, dan penebangan hutan adalah...', opts: ['Oksigen (O₂)', 'Karbon dioksida (CO₂)', 'Helium', 'Uap dingin'], ans: 1, exp: 'Peningkatan CO₂ memerangkap panas di atmosfer bumi.' },
      { text: 'Dampak nyata perubahan iklim global bagi wilayah pesisir (seperti pantai utara Jawa) adalah...', opts: ['Kenaikan permukaan air laut (banjir rob) dan cuaca ekstrem', 'Turunnya salju tebal', 'Laut mengering seluruhnya', 'Gravitasi hilang'], ans: 0, exp: 'Mencairnya es kutub menaikkan permukaan laut dan memicu rob di pesisir.' },
    ],
  },

  // BAB 4: KERAGAMAN BUDAYA INDONESIA
  {
    topicCode: 'IPAS-SD6-04', subSeq: 1,
    objectives: ['Siswa mampu mengenal keragaman suku bangsa di berbagai pulau Indonesia dan sikap menghargainya.'],
    materialTitle: 'Keragaman Suku Bangsa Indonesia',
    blocks: [
      { type: 'table', title: 'Contoh Suku Bangsa di Nusantara', headers: ['Pulau / Wilayah', 'Contoh Suku Bangsa'], rows: [
        ['Sumatra', 'Aceh, Batak, Minangkabau, Melayu, Lampung'],
        ['Jawa', 'Jawa, Sunda, Betawi, Madura, Tengger, Osing'],
        ['Kalimantan', 'Dayak, Banjar, Kutai'],
        ['Sulawesi', 'Bugis, Makassar, Toraja, Minahasa'],
        ['Bali, Nusa Tenggara, Maluku, Papua', 'Bali, Sasak, Flores, Ambon, Asmat, Dani'],
      ]},
    ],
    activityTitle: 'Latihan: Keragaman Suku Bangsa',
    questions: [
      { text: 'Suku Minangkabau dan Batak berasal dari Pulau...', opts: ['Sumatra', 'Kalimantan', 'Sulawesi', 'Papua'], ans: 0, exp: 'Minangkabau (Sumbar) dan Batak (Sumut) berada di Pulau Sumatra.' },
      { text: 'Suku Dayak dan Banjar banyak mendiami Pulau...', opts: ['Jawa', 'Kalimantan', 'Bali', 'Maluku'], ans: 1, exp: 'Dayak dan Banjar berasal dari Kalimantan.' },
      { text: 'Semboyan negara Indonesia yang mengajarkan persatuan di tengah keberagaman suku adalah...', opts: ['Bhinneka Tunggal Ika', 'Tut Wuri Handayani', 'Becik Ketitik', 'Gotong Royong saja'], ans: 0, exp: 'Bhinneka Tunggal Ika = berbeda-beda tetapi tetap satu jua.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-04', subSeq: 2,
    objectives: ['Siswa mampu memahami peran ratusan bahasa daerah sebagai kekayaan budaya dan Bahasa Indonesia sebagai bahasa pemersatu.'],
    materialTitle: 'Keragaman Bahasa Daerah & Bahasa Persatuan',
    blocks: [
      { type: 'visual_cards', title: 'Trigatra Bangun Bahasa Indonesia', cards: [
        { emoji: '🇮🇩', label: 'Utamakan Bahasa Indonesia', sub: 'Bahasa persatuan pemersatu seluruh suku dari Sabang sampai Merauke' },
        { emoji: '🏛️', label: 'Lestarikan Bahasa Daerah', sub: 'Indonesia punya >700 bahasa daerah (Jawa, Sunda, Batak, Bugis, Bali, dll.)' },
        { emoji: '🌍', label: 'Kuasai Bahasa Asing', sub: 'Menambah daya saing global tanpa melupakan jati diri bangsa!' },
      ]},
    ],
    activityTitle: 'Latihan: Bahasa Daerah',
    questions: [
      { text: 'Jika siswa asal Jawa Timur bertemu siswa asal Papua atau Sumatra, bahasa yang digunakan agar saling memahami adalah...', opts: ['Bahasa Indonesia', 'Bahasa isyarat saja', 'Masing-masing bahasa daerah tanpa mengerti', 'Tidak usah bicara'], ans: 0, exp: 'Bahasa Indonesia adalah bahasa pemersatu nasional (Sumpah Pemuda 1928).' },
      { text: 'Cara generasi muda ikut melestarikan bahasa daerah agar tidak punah adalah...', opts: ['Menggunakannya dengan sopan di keluarga/lingkungan daerah dan mempelajarinya di sekolah', 'Malu berbicara bahasa daerah sendiri', 'Mengejek logat daerah lain', 'Melarang bahasa daerah'], ans: 0, exp: 'Bahasa daerah tetap hidup jika dituturkan lintas generasi.' },
      { text: 'Semboyan pelestarian bahasa di Indonesia (Trigatra Bangun Bahasa) berbunyi: Utamakan Bahasa Indonesia, Lestarikan Bahasa Daerah, dan...', opts: ['Kuasai Bahasa Asing', 'Lupakan Bahasa Daerah', 'Hapus Semua Logat', 'Gunakan Bahasa Gaul saja'], ans: 0, exp: 'Ketiganya saling melengkapi secara proporsional.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-04', subSeq: 3,
    objectives: ['Siswa mampu mengenali contoh pakaian adat daerah Nusantara beserta makna budayanya.'],
    materialTitle: 'Keragaman Pakaian Adat Indonesia',
    blocks: [
      { type: 'flashcards', title: 'Kenali Pakaian Adat Nusantara! (Klik)', cards: [
        { emoji: '👘', front: 'Kebaya & Beskap / Pesa\'an', back: 'Jawa & Jawa Timur' },
        { emoji: '🧣', front: 'Ulos', back: 'Kain tenun tradisional suku Batak (Sumatra Utara)' },
        { emoji: '👑', front: 'Bundo Kanduang', back: 'Pakaian adat Minangkabau (Sumatra Barat)' },
        { emoji: '🌺', front: 'Payas Agung', back: 'Pakaian adat kebesaran Bali' },
        { emoji: '👗', front: 'Baju Bodo', back: 'Pakaian adat tradisional Bugis–Makassar (Sulawesi Selatan)' },
      ]},
    ],
    activityTitle: 'Latihan: Pakaian Adat',
    questions: [
      { text: 'Kain tenun tradisional "Ulos" berasal dari daerah...', opts: ['Sumatra Utara (Batak)', 'Bali', 'Papua', 'Jawa Barat'], ans: 0, exp: 'Ulos adalah kain adat khas masyarakat Batak.' },
      { text: 'Baju Bodo adalah pakaian adat tradisional dari...', opts: ['Aceh', 'Sulawesi Selatan (Bugis-Makassar)', 'Kalimantan Timur', 'Banten'], ans: 1, exp: 'Baju Bodo berasal dari Sulawesi Selatan.' },
      { text: 'Kain tradisional Indonesia yang telah diakui UNESCO sebagai Warisan Budaya Takbenda Dunia (2 Oktober 2009) adalah...', opts: ['Batik', 'Kain kasa', 'Plastik', 'Kain pel'], ans: 0, exp: 'Setiap 2 Oktober diperingati sebagai Hari Batik Nasional.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-04', subSeq: 4,
    objectives: ['Siswa mampu mengenal contoh rumah adat Nusantara dan kearifan arsitekturnya yang selaras alam.'],
    materialTitle: 'Keragaman Rumah Adat Indonesia',
    blocks: [
      { type: 'table', title: 'Rumah Adat Nusantara yang Terkenal', headers: ['Rumah Adat', 'Asal Daerah', 'Ciri Khasnya'], rows: [
        ['Joglo', 'Jawa (Jateng, DIY, Jatim)', 'Atap limasan menjulang dengan 4 tiang utama (soko guru)'],
        ['Rumah Gadang', 'Sumatra Barat (Minangkabau)', 'Atap melengkung runcing menyerupai tanduk kerbau (gonjong)'],
        ['Tongkonan', 'Sulawesi Selatan (Toraja)', 'Atap melengkung tinggi seperti perahu, banyak ukiran'],
        ['Honai', 'Papua (Pegunungan)', 'Berbentuk bundar beratap jerami agar hangat di suhu pegunungan'],
        ['Rumah Betang / Lamin', 'Kalimantan', 'Rumah panggung panjang tempat tinggal bersama banyak keluarga'],
      ]},
    ],
    activityTitle: 'Latihan: Rumah Adat',
    questions: [
      { text: 'Rumah adat "Joglo" dengan empat tiang penyangga utama (soko guru) berasal dari...', opts: ['Pulau Jawa (Jateng, DIY, Jatim)', 'Papua', 'Sumatra Barat', 'Maluku'], ans: 0, exp: 'Rumah Joglo merupakan arsitektur tradisional Jawa.' },
      { text: 'Rumah adat "Rumah Gadang" beratap runcing seperti tanduk kerbau berasal dari...', opts: ['Sumatra Barat', 'Sulawesi Selatan', 'Bali', 'Kalimantan Barat'], ans: 0, exp: 'Rumah Gadang adalah rumah adat Minangkabau, Sumatra Barat.' },
      { text: 'Rumah adat "Honai" di pegunungan Papua dibuat berbentuk bundar tanpa jendela besar bertujuan untuk...', opts: ['Menjaga kehangatan di dalam rumah dari hawa dingin pegunungan', 'Membuat rumah panas terik', 'Hiasan saja', 'Menangkap hujan'], ans: 0, exp: 'Arsitektur rumah adat selalu beradaptasi cerdas dengan iklim setempat.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-04', subSeq: 5,
    objectives: ['Siswa mampu mengenal contoh tarian tradisional dari berbagai provinsi Indonesia.'],
    materialTitle: 'Keragaman Tarian Tradisional',
    blocks: [
      { type: 'flashcards', title: 'Tarian Tradisional Nusantara (Klik!)', cards: [
        { emoji: '💃', front: 'Tari Remo & Reog', back: 'Jawa Timur' },
        { emoji: '🙌', front: 'Tari Saman', back: 'Aceh (kompak duduk berbaris, diakui UNESCO)' },
        { emoji: '🍽️', front: 'Tari Piring', back: 'Sumatra Barat' },
        { emoji: '🔥', front: 'Tari Kecak & Pendet', back: 'Bali' },
        { emoji: '🎭', front: 'Tari Jaipong', back: 'Jawa Barat' },
      ]},
    ],
    activityTitle: 'Latihan: Tarian Tradisional',
    questions: [
      { text: 'Tari Remo yang gagah dan dinamis sebagai tari penyambutan berasal dari Provinsi...', opts: ['Jawa Timur', 'Aceh', 'Bali', 'Papua'], ans: 0, exp: 'Tari Remo adalah tarian tradisional khas Jawa Timur.' },
      { text: 'Tari Saman yang menampilkan kekompakan gerakan tangan dan tepukan dada berasal dari...', opts: ['Aceh', 'Jawa Barat', 'Sulawesi Utara', 'NTT'], ans: 0, exp: 'Tari Saman berasal dari suku Gayo, Aceh.' },
      { text: 'Tari Kecak dan Tari Pendet berasal dari Provinsi...', opts: ['Bali', 'Lampung', 'Maluku', 'Kalimantan Selatan'], ans: 0, exp: 'Kecak dan Pendet adalah tarian ikonik Bali.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-04', subSeq: 6,
    objectives: ['Siswa mampu mengenal keragaman kuliner/makanan khas daerah Nusantara termasuk kuliner khas Gresik daratan.'],
    materialTitle: 'Keragaman Makanan Khas Daerah',
    blocks: [
      { type: 'table', title: 'Jelajah Kuliner Nusantara!', headers: ['Makanan Khas', 'Asal Daerah'], rows: [
        ['Pudak, Nasi Krawu, Otak-Otak Bandeng', 'Kabupaten Gresik (Jawa Timur)'],
        ['Rawon, Rujak Cingur, Soto Lamongan', 'Jawa Timur'],
        ['Rendang', 'Sumatra Barat (Minangkabau)'],
        ['Gudeg', 'DI Yogyakarta'],
        ['Pempek', 'Sumatra Selatan (Palembang)'],
        ['Papeda', 'Papua & Maluku'],
      ]},
    ],
    activityTitle: 'Latihan: Makanan Khas',
    questions: [
      { text: 'Kuliner khas Kabupaten Gresik yang terbuat dari tepung beras, gula, dan santan serta dibungkus pelepah pinang adalah...', opts: ['Pempek', 'Pudak', 'Gudeg', 'Papeda'], ans: 1, exp: 'Pudak adalah jajanan tradisional ikonik Gresik.' },
      { text: 'Makanan pokok khas Papua dan Maluku yang terbuat dari tepung sagu dan disantap dengan ikan kuah kuning adalah...', opts: ['Papeda', 'Rendang', 'Rawon', 'Sate lilit'], ans: 0, exp: 'Papeda adalah bubur sagu khas Indonesia Timur.' },
      { text: 'Rendang yang terkenal hingga mancanegara berasal dari Provinsi...', opts: ['Sumatra Barat', 'Jawa Tengah', 'Kalimantan Barat', 'Bali'], ans: 0, exp: 'Rendang berasal dari Minangkabau, Sumatra Barat.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-04', subSeq: 7,
    objectives: ['Siswa mampu mengenal tradisi gotong royong dan upacara adat di berbagai daerah Indonesia secara faktual.'],
    materialTitle: 'Tradisi Masyarakat Nusantara',
    blocks: [
      { type: 'visual_cards', title: 'Tradisi Luhur Penjaga Kerukunan', cards: [
        { emoji: '🌾', label: 'Subak (Bali)', sub: 'Sistem pengairan sawah bersama berbasis gotong royong (diakui UNESCO)' },
        { emoji: '🏠', label: 'Sambatan / Gugur Gunung (Jawa)', sub: 'Warga bergotong royong membantu tetangga membangun rumah atau kerja bakti' },
        { emoji: '🚣', label: 'Pacu Jalur (Riau) & Karapan Sapi (Madura)', sub: 'Tradisi pesta rakyat yang mempererat kebersamaan warga' },
      ]},
    ],
    activityTitle: 'Latihan: Tradisi Masyarakat',
    questions: [
      { text: 'Sistem pengairan sawah tradisional secara adil dan gotong royong di Bali yang diakui UNESCO disebut...', opts: ['Subak', 'Soko guru', 'Ulos', 'Honai'], ans: 0, exp: 'Subak adalah organisasi pengairan tradisional masyarakat Bali.' },
      { text: 'Tradisi warga Jawa saling membantu secara sukarela saat tetangga memperbaiki rumah atau menggelar hajatan disebut...', opts: ['Sambatan / gotong royong', 'Barter', 'Monopoli', 'Kompetisi'], ans: 0, exp: 'Sambatan mencerminkan solidaritas dan kepedulian warga.' },
      { text: 'Sikap yang tepat saat menyaksikan tradisi daerah lain yang berbeda dengan kebiasaan kita adalah...', opts: ['Menghormati dan mempelajarinya dengan pikiran terbuka', 'Mengejek karena berbeda', 'Melarang pelaksanaannya', 'Membandingkan mana yang lebih hebat'], ans: 0, exp: 'Toleransi budaya menjaga persatuan Indonesia.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-04', subSeq: 8,
    objectives: ['Siswa mampu menggali nilai kearifan lokal Nusantara dalam menjaga harmoni dengan alam dan sesama.'],
    materialTitle: 'Nilai Kearifan Lokal Nusantara',
    blocks: [
      { type: 'text', text: 'Kearifan lokal adalah pandangan hidup, kebiasaan bijak, dan pengetahuan turun-temurun masyarakat setempat untuk hidup rukun bersama sesama dan menjaga kelestarian alam — misalnya tradisi Sasi di Maluku/Papua (larangan mengambil hasil laut di waktu tertentu agar ikan sempat berkembang biak!).' },
    ],
    activityTitle: 'Latihan: Kearifan Lokal',
    questions: [
      { text: 'Tradisi "Sasi" di Maluku dan Papua yang melarang penangkapan hasil laut pada musim tertentu bertujuan untuk...', opts: ['Memberi waktu ikan dan biota laut berkembang biak agar tetap lestari', 'Melarang makan ikan selamanya', 'Menghabiskan ikan secepatnya', 'Membuat laut kotor'], ans: 0, exp: 'Sasi adalah contoh nyata kearifan lokal pelestarian ekosistem.' },
      { text: 'Nilai luhur yang terkandung dalam semboyan Jawa "Rukun agawe santosa, crah agawe bubrah" adalah...', opts: ['Kerukunan membuat kuat/tenteram, sedangkan pertengkaran menyebabkan kehancuran', 'Pertengkaran membuat maju', 'Bekerja sendirian lebih kuat', 'Sombong membawa berkah'], ans: 0, exp: 'Menekankan pentingnya persatuan dan kerukunan.' },
      { text: 'Kearifan lokal masyarakat Indonesia umumnya mengajarkan hubungan yang harmonis antara manusia dengan...', opts: ['Tuhan, sesama manusia, dan alam sekitar', 'Uang semata', 'Persaingan kasar', 'Kerusakan hutan'], ans: 0, exp: 'Keseimbangan spiritual, sosial, dan ekologis.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-04', subSeq: 9,
    objectives: ['Siswa mampu mempraktikkan sikap toleransi kebinekaan dan aksi pelestarian budaya di era modern.'],
    materialTitle: 'Kebinekaan dan Pelestarian Budaya',
    blocks: [
      { type: 'list', title: '4 Cara Pelajar Melestarikan Budaya Indonesia', items: ['1. Bangga mengenakan batik atau tenun dan mencintai produk serta kuliner lokal.', '2. Mempelajari bahasa daerah, tarian, alat musik tradisional, atau permainan tradisional.', '3. Menyaring budaya asing: ambil yang positif (ilmu & teknologi), tolak yang tidak sesuai nilai Pancasila!', '4. Memperkenalkan budaya daerah secara kreatif lewat poster, video, atau pentas seni sekolah.'] },
    ],
    activityTitle: 'Latihan: Kebinekaan & Pelestarian Budaya',
    questions: [
      { text: 'Sikap bijak pelajar Indonesia menghadapi masuknya budaya asing di era internet adalah...', opts: ['Meniru semua budaya asing tanpa batas', 'Menyaringnya: mengambil yang positif sambil tetap bangga menjaga budaya bangsa sendiri', 'Menolak semua teknologi modern', 'Melupakan bahasa daerah'], ans: 1, exp: 'Sikap selektif menjaga jati diri bangsa di tengah globalisasi.' },
      { text: 'Jika tidak ada generasi muda yang mau mempelajari tarian, bahasa, dan kerajinan daerah, akibatnya adalah...', opts: ['Warisan budaya bangsa terancam punah atau diklaim pihak lain', 'Budaya makin berkembang sendiri', 'Semua orang senang', 'Tidak ada dampaknya'], ans: 0, exp: 'Pewarisan lintas generasi adalah kunci kelestarian budaya.' },
      { text: 'Mengikuti pentas seni daerah di sekolah dengan gembira merupakan bentuk nyata...', opts: ['Pelestarian budaya Nusantara', 'Sikap fanatik sempit', 'Pemborosan waktu', 'Meniru budaya asing'], ans: 0, exp: 'Pentas seni menghidupkan kecintaan terhadap budaya lokal.' },
    ],
  },

  // BAB 5: KEGIATAN EKONOMI MASYARAKAT DAN LINGKUNGAN BERKELANJUTAN
  {
    topicCode: 'IPAS-SD6-05', subSeq: 1,
    objectives: ['Siswa mampu menyusun skala prioritas antara kebutuhan dan keinginan secara rasional.'],
    materialTitle: 'Skala Prioritas: Kebutuhan vs Keinginan',
    blocks: [
      { type: 'table', title: 'Matriks Skala Prioritas Cerdas', headers: ['Prioritas', 'Kategori', 'Contoh'], rows: [
        ['1 (Dahulukan!)', 'Penting & Mendesak', 'Makan bergizi, obat saat sakit, alat tulis untuk ujian besok'],
        ['2 (Rencanakan)', 'Penting & Tidak Mendesak', 'Menabung untuk beli kamus/sepatu sekolah semester depan'],
        ['3 (Tunda/Batasi)', 'Keinginan Sesaat', 'Jajan berlebihan, mainan tren yang cepat bosan'],
      ]},
    ],
    activityTitle: 'Latihan: Skala Prioritas',
    questions: [
      { text: 'Daftar urutan pemenuhan kebutuhan mulai dari yang paling penting dan mendesak disebut...', opts: ['Skala prioritas', 'Skala peta', 'Diagram batang', 'Faktur'], ans: 0, exp: 'Skala prioritas membantu mengalokasikan uang yang terbatas secara bijak.' },
      { text: 'Uangmu terbatas, padahal sepatu sekolahmu robek dan di toko ada komik edisi baru. Berdasarkan skala prioritas, kamu sebaiknya...', opts: ['Mendahulukan memperbaiki/membeli sepatu sekolah', 'Membeli komik dulu', 'Menghabiskan uang untuk es krim', 'Meminjam uang banyak'], ans: 0, exp: 'Sepatu sekolah adalah kebutuhan penting dan mendesak.' },
      { text: 'Mengapa manusia harus membuat skala prioritas dalam memenuhi kebutuhan?', opts: ['Karena kebutuhan manusia tidak terbatas, sedangkan sumber daya dan uang terbatas', 'Karena toko selalu tutup', 'Karena uang tidak ada gunanya', 'Karena semua barang gratis'], ans: 0, exp: 'Kelangkaan sumber daya menuntut pilihan bijak.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-05', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan kegiatan produksi (menghasilkan/menambah nilai guna barang atau jasa) dan pelaku produsen.'],
    materialTitle: 'Kegiatan Produksi',
    blocks: [
      { type: 'text', text: 'Produksi adalah kegiatan MENGHASILKAN barang/jasa atau MENAMBAH NILAI GUNA suatu barang. Pelakunya disebut PRODUSEN! Contoh: petambak membudidayakan bandeng, lalu perajin mengolah bandeng segar menjadi otak-otak bandeng siap santap.' },
    ],
    activityTitle: 'Latihan: Kegiatan Produksi',
    questions: [
      { text: 'Orang atau perusahaan yang melakukan kegiatan menghasilkan barang atau jasa disebut...', opts: ['Produsen', 'Distributor', 'Konsumen', 'Pembeli'], ans: 0, exp: 'Produsen = pelaku produksi.' },
      { text: 'Pengrajin mengolah tepung beras, gula, dan santan menjadi kue pudak khas Gresik. Kegiatan ini termasuk...', opts: ['Produksi (menambah nilai guna bahan)', 'Konsumsi', 'Distribusi saja', 'Barter'], ans: 0, exp: 'Mengubah bahan mentah menjadi produk siap jual adalah produksi.' },
      { text: 'Contoh kegiatan produksi JASA adalah...', opts: ['Pabrik sepatu membuat sepatu', 'Guru mengajar siswa dan dokter memeriksa pasien', 'Siswa makan nasi krawu', 'Kurir mengantar paket'], ans: 1, exp: 'Guru dan dokter menghasilkan layanan jasa.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-05', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan kegiatan distribusi (menyalurkan barang dari produsen ke konsumen) dan pelaku distributor.'],
    materialTitle: 'Kegiatan Distribusi',
    blocks: [
      { type: 'visual_cards', title: 'Peran Penting Distribusi', cards: [
        { emoji: '🚚', label: 'Distributor / Kurir', sub: 'Mengangkut barang dari pabrik/tambak ke pasar, toko, hingga rumah pembeli' },
        { emoji: '🏪', label: 'Pedagang Grosir & Eceran', sub: 'Agen, supermarket, warung kelontong yang mendekatkan barang ke warga' },
        { emoji: '⚖️', label: 'Manfaat Distribusi', sub: 'Hasil bumi dan produk pabrik tersebar merata ke berbagai daerah!' },
      ]},
    ],
    activityTitle: 'Latihan: Kegiatan Distribusi',
    questions: [
      { text: 'Kegiatan menyalurkan barang dan jasa dari produsen hingga sampai ke tangan konsumen disebut...', opts: ['Produksi', 'Distribusi', 'Konsumsi', 'Reboisasi'], ans: 1, exp: 'Distribusi menjembatani produsen dan konsumen.' },
      { text: 'Contoh pelaku kegiatan DISTRIBUSI adalah...', opts: ['Pedagang pasar, agen grosir, dan jasa ekspedisi pengiriman paket', 'Petani menanam padi', 'Anak memakan roti', 'Penjahit membuat baju'], ans: 0, exp: 'Pedagang dan ekspedisi menyalurkan produk ke konsumen.' },
      { text: 'Jika jalur distribusi bahan pangan terputus karena jalan rusak atau banjir, akibatnya di kota adalah...', opts: ['Pasokan barang langka dan harga cenderung naik', 'Barang gratis semua', 'Tidak berpengaruh', 'Panen bertambah'], ans: 0, exp: 'Kelancaran distribusi menjaga kestabilan pasokan dan harga.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-05', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan kegiatan konsumsi (menggunakan/menghabiskan nilai guna barang/jasa) dan sikap konsumen cerdas.'],
    materialTitle: 'Kegiatan Konsumsi & Konsumen Cerdas',
    blocks: [
      { type: 'list', title: '4 Ciri Konsumen Cerdas', items: ['1. Membeli sesuai kebutuhan, bukan tergoda iklan semata.', '2. Selalu cek tanggal KEDALUWARSA, izin BPOM/halal, dan kondisi kemasan makanan!', '3. Membandingkan kualitas dan harga sebelum membeli.', '4. Mengutamakan produk lokal ramah lingkungan!'] },
    ],
    activityTitle: 'Latihan: Kegiatan Konsumsi',
    questions: [
      { text: 'Saat kamu memakai seragam sekolah, menulis dengan pensil, dan makan siang, kamu berperan sebagai...', opts: ['Produsen', 'Distributor', 'Konsumen', 'Eksportir'], ans: 2, exp: 'Konsumen menggunakan/menghabiskan nilai guna barang dan jasa.' },
      { text: 'Hal wajib yang harus diperiksa konsumen cerdas sebelum membeli susu kotak atau roti kemasan adalah...', opts: ['Tanggal kedaluwarsa (expired date) dan keutuhan kemasan', 'Hanya warna bungkus yang cerah', 'Tebal iklannya', 'Bentuk kotaknya saja'], ans: 0, exp: 'Mengecek kedaluwarsa melindungi kesehatan.' },
      { text: 'Urutan rantai kegiatan ekonomi yang benar dari hulu ke hilir adalah...', opts: ['Konsumsi → Distribusi → Produksi', 'Produksi → Distribusi → Konsumsi', 'Distribusi → Konsumsi → Produksi', 'Konsumsi → Produksi → Distribusi'], ans: 1, exp: 'Barang diproduksi dulu, disalurkan (distribusi), lalu dipakai (konsumsi).' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-05', subSeq: 5,
    objectives: ['Siswa mampu mengelompokkan jenis pekerjaan di sektor agraris, maritim, industri, perdagangan, dan jasa.'],
    materialTitle: 'Jenis Pekerjaan Masyarakat',
    blocks: [
      { type: 'table', title: 'Ragam Sektor Pekerjaan di Indonesia', headers: ['Sektor', 'Contoh Pekerjaan'], rows: [
        ['Agraris (Pertanian/Peternakan)', 'Petani padi, pekebun buah, peternak ayam/sapi'],
        ['Maritim / Perikanan', 'Nelayan, petambak ikan bandeng & udang, petani garam'],
        ['Industri / Manufaktur', 'Karyawan pabrik semen/pupuk/makanan, perajin songkok & batik'],
        ['Perdagangan & Jasa', 'Pedagang pasar, UMKM kuliner, guru, dokter, sopir, programmer'],
      ]},
    ],
    activityTitle: 'Latihan: Jenis Pekerjaan',
    questions: [
      { text: 'Pekerjaan yang menghasilkan JASA (tidak berbentuk barang fisik) adalah...', opts: ['Guru, dokter, pengacara, dan sopir', 'Petani padi dan petambak ikan', 'Pembuat roti dan perajin kayu', 'Penambang pasir'], ans: 0, exp: 'Guru, dokter, dan sopir memberikan layanan keahlian.' },
      { text: 'Setiap profesi yang halal di masyarakat saling membutuhkan (petani butuh dokter saat sakit, dokter butuh beras dari petani). Sikap kita terhadap semua pekerjaan halal adalah...', opts: ['Saling menghargai dan tidak merendahkan profesi apa pun', 'Hanya menghargai yang bergaji besar', 'Meremehkan petugas kebersihan', 'Tidak peduli'], ans: 0, exp: 'Semua pekerjaan halal berkontribusi bagi masyarakat.' },
      { text: 'Usaha pengolahan produk makanan khas atau kerajinan skala keluarga/kecil dikenal dengan istilah...', opts: ['UMKM (Usaha Mikro, Kecil, dan Menengah)', 'PLTA', 'GPS', 'Barter'], ans: 0, exp: 'UMKM adalah tulang punggung ekonomi masyarakat.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-05', subSeq: 6,
    objectives: ['Siswa mampu mengenali 4 faktor/sumber daya ekonomi: alam, tenaga kerja (SDM), modal, dan kewirausahaan.'],
    materialTitle: 'Sumber Daya Ekonomi (Faktor Produksi)',
    blocks: [
      { type: 'visual_cards', title: '4 Modal Dasar Kegiatan Ekonomi', cards: [
        { emoji: '🌾', label: '1. Sumber Daya Alam (SDA)', sub: 'Tanah, air, ikan, bahan baku dari alam' },
        { emoji: '👷', label: '2. Sumber Daya Manusia (SDM)', sub: 'Tenaga kerja terampil, berpendidikan, dan jujur' },
        { emoji: '⚙️', label: '3. Modal (Uang & Alat)', sub: 'Mesin, oven, perahu, gedung, dana usaha' },
        { emoji: '💡', label: '4. Kewirausahaan', sub: 'Kreativitas & keberanian mengelola usaha dengan baik' },
      ]},
    ],
    activityTitle: 'Latihan: Sumber Daya Ekonomi',
    questions: [
      { text: 'Oven pemanggang, wajan, perahu nelayan, dan komputer toko termasuk faktor produksi berupa...', opts: ['Modal (peralatan usaha)', 'Sumber daya alam', 'Konsumsi', 'Limbah'], ans: 0, exp: 'Peralatan dan dana penunjang produksi disebut modal.' },
      { text: 'Faktor produksi yang paling menentukan kualitas pengelolaan usaha melalui pendidikan, keterampilan, dan kejujuran adalah...', opts: ['Sumber Daya Manusia (SDM)', 'Batu kerikil', 'Plastik', 'Cuaca saja'], ans: 0, exp: 'SDM unggul mampu mengolah SDA dan modal secara berkelanjutan.' },
      { text: 'Kemampuan kreatif menciptakan produk baru yang dibutuhkan pasar serta mengelola usaha disebut jiwa...', opts: ['Kewirausahaan (entrepreneurship)', 'Konsumtif', 'Boros', 'Malas'], ans: 0, exp: 'Wirausahawan menggabungkan SDA, SDM, dan modal menjadi produk bernilai.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-05', subSeq: 7,
    objectives: ['Siswa mampu mengidentifikasi kegiatan ekonomi utama di lingkungan Kabupaten Gresik daratan (perikanan tambak, industri, perdagangan, UMKM, pertanian).'],
    materialTitle: 'Kegiatan Ekonomi di Lingkungan Sekitar (Gresik Daratan)',
    blocks: [
      { type: 'visual_cards', title: 'Potensi Ekonomi Wilayah Gresik Daratan', cards: [
        { emoji: '🐟', label: 'Perikanan Tambak', sub: 'Budidaya bandeng dan udang serta olahan otak-otak bandeng' },
        { emoji: '🏭', label: 'Industri & Pelabuhan', sub: 'Kawasan industri strategis (pupuk, semen, manufaktur) dan pelabuhan niaga' },
        { emoji: '🧢', label: 'UMKM Kerajinan & Kuliner', sub: 'Kerajinan songkok/kopiah, kuliner pudak & nasi krawu, pasar rakyat' },
        { emoji: '🌾', label: 'Pertanian Daratan', sub: 'Sawah padi, palawija, dan kebun buah di kecamatan pedalaman Gresik' },
      ]},
    ],
    activityTitle: 'Latihan: Ekonomi Lingkungan Sekitar',
    questions: [
      { text: 'Contoh produk UMKM kerajinan dan kuliner terkenal dari wilayah Gresik daratan adalah...', opts: ['Songkok/kopiah, pudak, dan otak-otak bandeng', 'Kain ulos dan bika ambon', 'Gudeg dan perak Kotagede', 'Papeda dan mutiara'], ans: 0, exp: 'Gresik dikenal dengan sentra kopiah/songkok, pudak, nasi krawu, dan olahan bandeng.' },
      { text: 'Keberadaan kawasan industri dan pelabuhan di Gresik berdampak pada terbukanya banyak...', opts: ['Lapangan kerja dan aktivitas perdagangan', 'Hutan salju', 'Gunung berapi baru', 'Gurun'], ans: 0, exp: 'Industri dan pelabuhan menyerap tenaga kerja serta menggerakkan ekonomi lokal.' },
      { text: 'Cara sederhana siswa ikut mendukung ekonomi UMKM di lingkungan sekitar adalah...', opts: ['Membanggakan dan membeli produk lokal/jajanan sehat tetangga sesuai kebutuhan', 'Mengejek produk dalam negeri', 'Hanya mau produk impor mahal', 'Tidak pernah membayar'], ans: 0, exp: 'Mencintai produk lokal membantu kesejahteraan warga sekitar.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-05', subSeq: 8,
    objectives: ['Siswa mampu menganalisis hubungan timbal balik antara aktivitas ekonomi dan kondisi lingkungan alam.'],
    materialTitle: 'Hubungan Kegiatan Ekonomi dengan Lingkungan',
    blocks: [
      { type: 'text', text: 'Ekonomi dan lingkungan saling bergantung erat! Jika lingkungan rusak (sungai tercemar limbah, udara penuh asap, hutan gundul), maka tambak ikan mati, sawah gagal panen, warga sakit — akhirnya EKONOMI ikut rugi besar!' },
    ],
    activityTitle: 'Latihan: Ekonomi & Lingkungan',
    questions: [
      { text: 'Jika pabrik membuang limbah cair beracun langsung ke sungai tanpa diolah, dampak ekonomi bagi warga sekitar adalah...', opts: ['Petambak dan nelayan merugi karena ikan mati serta biaya kesehatan meningkat', 'Hasil tangkapan ikan meningkat', 'Air makin manis', 'Tidak ada dampaknya'], ans: 0, exp: 'Kerusakan lingkungan secara langsung merugikan mata pencaharian masyarakat.' },
      { text: 'Syarat agar pabrik/industri dapat beroperasi berdampingan sehat dengan masyarakat adalah...', opts: ['Memiliki Instalasi Pengolahan Air Limbah (IPAL) dan penyaring asap sesuai aturan', 'Membuang limbah di malam hari', 'Menebang semua pohon sekitar', 'Menutup sungai'], ans: 0, exp: 'IPAL memastikan limbah aman sebelum dilepas ke lingkungan.' },
      { text: 'Kegiatan ekonomi yang merusak alam hanya memberi keuntungan jangka pendek, namun menimbulkan kerugian ... di masa depan.', opts: ['Jangka panjang (bencana & krisis SDA)', 'Sangat kecil', 'Tidak ada', 'Gratis'], ans: 0, exp: 'Pembangunan harus berkelanjutan bagi generasi mendatang.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-05', subSeq: 9,
    objectives: ['Siswa mampu memberi contoh pemanfaatan sumber daya alam secara bijak dan berkelanjutan (tebang pilih, budidaya, kuota tangkap).'],
    materialTitle: 'Pemanfaatan Sumber Daya Secara Bijak',
    blocks: [
      { type: 'table', title: 'Eksploitasi Berlebihan vs Pemanfaatan Bijak', headers: ['Bidang', 'Cara Merusak (Hindari!)', 'Cara Bijak (Berkelanjutan)'], rows: [
        ['Kehutanan', 'Tebang habis tanpa tanam ulang', 'Sistem TEBANG PILIH (hanya pohon tua) + tanam kembali (reboisasi)'],
        ['Perikanan', 'Pukat harimau / bom ikan', 'Jaring bermata lebar (ikan kecil lolos tumbuh) & budidaya tambak sehat'],
        ['Pertanian', 'Pestisida kimia berlebihan', 'Pupuk organik/kompos & pengendalian hama alami'],
      ]},
    ],
    activityTitle: 'Latihan: Pemanfaatan SDA Bijak',
    questions: [
      { text: 'Sistem penebangan hutan yang hanya menebang pohon cukup umur disertai penanaman bibit pengganti disebut...', opts: ['Tebang pilih tanam Indonesia (TPTI)', 'Tebang habis', 'Pembakaran lahan', 'Abrasi'], ans: 0, exp: 'Tebang pilih menjaga hutan tetap lestari sekaligus memenuhi kebutuhan kayu.' },
      { text: 'Mengapa nelayan ramah lingkungan memakai jaring bermata cukup lebar?', opts: ['Agar ikan-ikan kecil bisa lolos tumbuh dewasa dan berkembang biak', 'Agar tidak dapat ikan sama sekali', 'Supaya jaring berat', 'Karena murah'], ans: 0, exp: 'Membiarkan ikan kecil tumbuh menjaga keberlanjutan stok ikan laut.' },
      { text: 'Penggunaan pupuk kompos organik pada pertanian bermanfaat untuk...', opts: ['Menjaga kesuburan tanah jangka panjang tanpa mencemari air tanah', 'Meracuni cacing tanah', 'Membuat tanah keras seperti semen', 'Menambah sampah plastik'], ans: 0, exp: 'Pupuk organik menyuburkan tanah secara alami.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-05', subSeq: 10,
    objectives: ['Siswa mampu mengenal contoh kegiatan ekonomi ramah lingkungan (ekonomi hijau: bank sampah, ekowisata, kerajinan daur ulang).'],
    materialTitle: 'Kegiatan Ekonomi Ramah Lingkungan (Ekonomi Hijau)',
    blocks: [
      { type: 'visual_cards', title: 'Contoh Usaha Ramah Lingkungan (Green Economy)', cards: [
        { emoji: '🏦♻️', label: 'Bank Sampah', sub: 'Warga menabung sampah terpilah (botol, kardus, kaleng) lalu ditukar nilai rupiah!' },
        { emoji: '🌿', label: 'Ekowisata Mangrove', sub: 'Wisata alam pesisir yang menjaga kelestarian bakau sekaligus memberi penghasilan warga' },
        { emoji: '👜', label: 'Kerajinan Upcycle', sub: 'Mengolah kain perca, enceng gondok, atau kemasan bekas jadi tas & suvenir bernilai jual' },
      ]},
    ],
    activityTitle: 'Latihan: Ekonomi Ramah Lingkungan',
    questions: [
      { text: 'Program masyarakat menabung sampah plastik/kertas terpilah untuk didaur ulang sekaligus menambah penghasilan disebut...', opts: ['Bank sampah', 'TPA liar', 'Pembakaran sampah', 'Barter'], ans: 0, exp: 'Bank sampah mengubah sampah terpilah menjadi nilai ekonomi dan lingkungan bersih.' },
      { text: 'Ekowisata hutan mangrove di wilayah pesisir memberikan manfaat ganda yaitu...', opts: ['Melindungi pantai dari abrasi sekaligus membuka lapangan usaha wisata dan edukasi', 'Merusak pohon bakau', 'Menambah sampah laut', 'Mengusir burung'], ans: 0, exp: 'Ekowisata memadukan konservasi alam dan kesejahteraan warga.' },
      { text: 'Tujuan utama "ekonomi hijau" adalah...', opts: ['Meningkatkan kesejahteraan ekonomi sambil tetap menjaga kelestarian alam', 'Mewarnai semua uang jadi hijau', 'Menghentikan semua pekerjaan', 'Menebang hutan'], ans: 0, exp: 'Ekonomi hijau menyeimbangkan kemakmuran dan kelestarian.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-05', subSeq: 11,
    objectives: ['Siswa mampu membedakan 3 jenis sampah (organik, anorganik, B3) dan cara pengelolaannya secara aman.'],
    materialTitle: 'Pengelolaan Sampah Terpilah (Organik, Anorganik, B3)',
    blocks: [
      { type: 'table', title: '3 Warna Wadah Sampah Terpilah', headers: ['Jenis Sampah', 'Contoh', 'Cara Pengelolaan'], rows: [
        ['Organik (Hijau)', 'Sisa makanan, kulit buah, daun kering', 'Diolah jadi pupuk kompos / lubang biopori / maggot'],
        ['Anorganik (Kuning)', 'Botol plastik, kertas, kardus, kaleng, kaca', 'Dibersihkan lalu disetor ke Bank Sampah / daur ulang (3R)'],
        ['B3 — Bahan Berbahaya & Beracun (Merah)', 'Baterai bekas, lampu neon pecah, obat kedaluwarsa, kaleng semprot', 'Dipisahkan khusus! JANGAN dibakar atau dibuang ke tanah/sungai!'],
      ]},
    ],
    activityTitle: 'Latihan: Pengelolaan Sampah',
    questions: [
      { text: 'Baterai bekas, pecahan lampu neon, dan kemasan obat nyamuk semprot termasuk jenis sampah...', opts: ['Organik', 'Anorganik biasa', 'B3 (Bahan Berbahaya dan Beracun)', 'Kompos'], ans: 2, exp: 'Baterai dan lampu mengandung logam berat beracun (B3) yang harus dipisah khusus.' },
      { text: 'Sampah kulit buah, sisa sayuran, dan dedaunan kering paling bermanfaat jika diolah menjadi...', opts: ['Pupuk kompos alami', 'Asap pembakaran', 'Sampah laut', 'Plastik'], ans: 0, exp: 'Sampah organik cepat terurai menjadi kompos penyubur tanaman.' },
      { text: 'Mengapa membakar sampah plastik di pekarangan rumah SANGAT berbahaya?', opts: ['Menghasilkan asap beracun (dioksin) yang merusak paru-paru dan mencemari udara', 'Membuat udara wangi', 'Menjadi pupuk', 'Menghemat listrik'], ans: 0, exp: 'Pembakaran plastik melepas zat karsinogenik berbahaya bagi kesehatan.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-05', subSeq: 12,
    objectives: ['Siswa mampu menghubungkan efisiensi energi di sektor rumah tangga dan industri dengan biaya dan lingkungan.'],
    materialTitle: 'Penggunaan Energi Secara Bijak dalam Ekonomi',
    blocks: [
      { type: 'tip', text: 'Efisiensi energi (memakai energi seperlunya dengan alat hemat daya) memberi 2 untung sekaligus: tagihan listrik/BBM lebih HEMAT dan emisi polusi ke bumi lebih RENDAH!' },
    ],
    activityTitle: 'Latihan: Energi Bijak',
    questions: [
      { text: 'Keuntungan ganda jika rumah tangga dan UMKM menerapkan penggunaan energi secara hemat (efisien) adalah...', opts: ['Biaya operasional/tagihan listrik turun dan lingkungan lebih terjaga', 'Produksi berhenti', 'Lampu cepat mati', 'Polusi naik'], ans: 0, exp: 'Efisiensi menghemat biaya sekaligus mengurangi emisi.' },
      { text: 'Memilih peralatan listrik bertanda bintang hemat energi (label hemat energi) artinya alat tersebut...', opts: ['Menghasilkan kinerja sama dengan konsumsi listrik lebih sedikit', 'Lebih boros listrik', 'Tidak bisa dinyalakan', 'Tanpa kabel'], ans: 0, exp: 'Semakin banyak bintang label efisiensi, semakin hemat listriknya.' },
      { text: 'Di ruang kelas saat istirahat atau pulang sekolah, tindakan bijak siswa terhadap energi adalah...', opts: ['Memastikan lampu, kipas, dan proyektor sudah dimatikan sebelum keluar', 'Membiarkan menyala sampai besok', 'Merusak sakelar', 'Menutup jendela di pagi hari'], ans: 0, exp: 'Disiplin mematikan listrik menghemat energi sekolah.' },
    ],
  },
  {
    topicCode: 'IPAS-SD6-05', subSeq: 13,
    objectives: ['Siswa mampu merumuskan prinsip pembangunan berkelanjutan: keseimbangan ekonomi, kesejahteraan sosial, dan kelestarian lingkungan.'],
    materialTitle: 'Keseimbangan Ekonomi dan Kelestarian Lingkungan',
    blocks: [
      { type: 'visual_cards', title: '3 Pilar Pembangunan Berkelanjutan', cards: [
        { emoji: '💰', label: '1. Ekonomi Tumbuh', sub: 'Masyarakat sejahtera, cukup sandang pangan, usaha UMKM dan industri maju' },
        { emoji: '🤝', label: '2. Sosial Adil & Rukun', sub: 'Pendidikan merata, sehat, budaya lestari, saling tolong-menolong' },
        { emoji: '🌍', label: '3. Lingkungan Lestari', sub: 'Alam tetap bersih, hijau, dan sumber dayanya cukup untuk anak cucu kelak!' },
      ]},
      { type: 'tip', text: 'Bumi bukan sekadar warisan dari nenek moyang kita, melainkan titipan yang harus kita jaga untuk generasi masa depan!' },
    ],
    activityTitle: 'Latihan: Ekonomi & Lingkungan Berkelanjutan',
    questions: [
      { text: 'Pembangunan berkelanjutan berarti memenuhi kebutuhan masyarakat masa kini tanpa...', opts: ['Mengorbankan kemampuan generasi masa depan memenuhi kebutuhannya', 'Menggunakan teknologi', 'Membangun sekolah', 'Bekerja sama'], ans: 0, exp: 'Definisi pembangunan berkelanjutan (sustainable development).' },
      { text: 'Tiga pilar utama yang harus berjalan seimbang dalam pembangunan berkelanjutan adalah...', opts: ['Ekonomi, Sosial, dan Lingkungan', 'Hanya uang saja', 'Polusi, sampah, dan asap', 'Persaingan saja'], ans: 0, exp: 'Keseimbangan Ekonomi–Sosial–Lingkungan (People, Planet, Prosperity).' },
      { text: 'Sebagai siswa kelas 6 yang akan lulus ke SMP, peran nyatamu menjaga keseimbangan ekonomi dan lingkungan adalah...', opts: ['Hidup hemat, memilah sampah 3R, hemat energi, dan mencintai produk lokal ramah lingkungan', 'Jajan boros plastik setiap hari', 'Menunggu dewasa dulu baru peduli', 'Membuang makanan'], ans: 0, exp: 'Kebiasaan kecil setiap hari membawa dampak besar bagi bumi!' },
    ],
  },
];

upsertLessonsBatch('Kelas 6 SD — IPAS (5 Bab, 45 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

