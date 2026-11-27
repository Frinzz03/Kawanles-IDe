import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: TEKS DESKRIPSI BASA JAWA (Gresik Daratan)
  {
    topicCode: 'BJ-SD5-01', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan tujuan dan struktur teks deskripsi Bahasa Jawa (identifikasi, klasifikasi/rincian, panutup).'],
    materialTitle: 'Tujuan lan Struktur Teks Deskripsi Basa Jawa',
    blocks: [
      { type: 'text', text: 'Teks deskripsi ing basa Jawa yaiku wacan sing nggambarake sawijining objek (wong, kewan, barang, utawa panggonan) kanthi cetha lan rinci saengga sing maca kaya-kaya ndeleng utawa ngrasakake dhewe.' },
      { type: 'table', title: '3 Struktur Teks Deskripsi', headers: ['Bagian', 'Isine'], rows: [
        ['1. Identifikasi', 'Ngenalake jeneng lan gambaran umum objek'],
        ['2. Deskripsi Bagean (Rincian)', 'Njlentrehake ciri fisik, werna, rasa, ambu, utawa swasana kanthi rinci'],
        ['3. Panutup (Kesan)', 'Kesan umum utawa rasa seneng penulis marang objek kasebut'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Deskripsi Jawa',
    questions: [
      { text: 'Tujuane teks deskripsi basa Jawa yaiku...', opts: ['Nggambarake objek kanthi rinci supaya pamaca kaya-kaya ndeleng langsung', 'Nggawe aturan lomba', 'Ngumumake preian', 'Ngitung angka'], ans: 0, exp: 'Teks deskripsi nglukisake objek nganggo tembung-tembung rinci.' },
      { text: 'Bagian wiwitan teks deskripsi sing ngenalake jeneng objek diarani...', opts: ['Identifikasi', 'Panutup', 'Kramagung', 'Purwaka'], ans: 0, exp: 'Identifikasi ngenalake objek sing bakal digambarake.' },
      { text: 'Teks deskripsi akeh nglibatake...', opts: ['Pancaindra (ndeleng, ngrungokake, ngambu, ngrasakake, ndemek)', 'Rumus matematika', 'Daftar tanggal', 'Undangan'], ans: 0, exp: 'Rincian objek ditangkep liwat pancaindra.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-01', subSeq: 2,
    objectives: ['Siswa mampu memilih tembung kahanan (kata sifat) Bahasa Jawa yang tepat untuk memperkaya teks deskripsi.'],
    materialTitle: 'Tembung Kahanan (Kosakata Sifat)',
    blocks: [
      { type: 'flashcards', title: 'Tembung Kahanan Kanggo Deskripsi (Klik!)', cards: [
        { emoji: '🍬', front: 'Legi / Gurih / Pedes', back: 'Manis / Gurih / Pedas (kanggo panganan khas Gresik)' },
        { emoji: '🌸', front: 'Wangi / Arum', back: 'Harum semerbak' },
        { emoji: '✨', front: 'Alus ↔ Kasar', back: 'Halus ↔ Kasar' },
        { emoji: '🏡', front: 'Endah / Asri / Resik', back: 'Indah / Sejuk dipandang / Bersih' },
      ]},
    ],
    activityTitle: 'Latihan: Tembung Kahanan',
    questions: [
      { text: '"Pudak Gresik iku rasane LEGI lan ambune ARUM pandan." Tegese "legi" lan "arum" yaiku...', opts: ['Asin lan kecut', 'Manis lan harum', 'Pait lan panas', 'Tawar lan adhem'], ans: 1, exp: 'Legi = manis, arum = harum/wangi.' },
      { text: 'Tembung kahanan sing cocok kanggo nggambarake taman sing akeh kembang lan resik yaiku...', opts: ['Asri lan endah', 'Reged lan mambu', 'Gersang', 'Peteng'], ans: 0, exp: 'Asri lan endah tegese indah lan nyenengake mripat.' },
      { text: 'Kosok baline tembung "alus" yaiku...', opts: ['Lembut', 'Kasar', 'Cilik', 'Dawa'], ans: 1, exp: 'Alus ↔ kasar.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-01', subSeq: 3,
    objectives: ['Siswa mampu menyusun rincian pengamatan objek (bentuk, warna, bahan, kegunaan) dalam Bahasa Jawa.'],
    materialTitle: 'Njlentrehake Rincian Objek',
    blocks: [
      { type: 'story_panel', title: 'Conto Deskripsi: Otak-Otak Bandeng Gresik', lines: [
        { speaker: 'Wacan', avatar: '🐟', text: 'Otak-otak bandeng minangka salah sawijining panganan khas Gresik sing misuwur. Wujude isih wutuh kaya iwak bandeng, nanging eri-erine wis dibuwang. Daginge alus dicampur bumbu rempah sing gurih lan dibungkus godhong gedhang banjur dipanggang. Ambune sedhep banget nalika isih anget!' },
      ]},
    ],
    activityTitle: 'Latihan: Rincian Objek',
    questions: [
      { text: 'Tembung "misuwur" ing wacan otak-otak bandeng tegese...', opts: ['Terkenal', 'Mahal', 'Kecil', 'Hilang'], ans: 0, exp: 'Misuwur = kondhang / terkenal.' },
      { text: 'Tembung "godhong gedhang" ing basa Indonesia tegese...', opts: ['Daun mangga', 'Daun pisang', 'Daun kelapa', 'Daun jati'], ans: 1, exp: 'Godhong = daun, gedhang = pisang.' },
      { text: 'Adhedhasar wacan, kenangapa otak-otak bandeng gampang dipangan bocah-bocah?', opts: ['Amarga eri-erine (durinya) wis dibuwang lan daginge alus', 'Amarga atos banget', 'Amarga mentah', 'Amarga ora ana rasane'], ans: 0, exp: 'Eri (duri ikan) wis diresiki sadurunge diolah.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-01', subSeq: 4,
    objectives: ['Siswa mampu menulis teks deskripsi pendek tentang orang, hewan, benda, atau tempat di lingkungan Gresik daratan.'],
    materialTitle: 'Nulis Deskripsi Wong, Kewan, Barang, utawa Panggonan',
    blocks: [
      { type: 'list', title: 'Langkah Nulis Teks Deskripsi Basa Jawa', items: ['1. Temtokna objek (mis. Kucingku, Alun-Alun Gresik, Kelas 5, utawa Sega Krawu).', '2. Gatekna ciri-cirine nganggo pancaindra.', '3. Tulis miturut struktur: Identifikasi → Deskripsi Bagean → Panutup.', '4. Gunakna ejaan basa Jawa sing bener (bedakna d/dh, t/th, a/o)!'] },
    ],
    activityTitle: 'Latihan: Menulis Deskripsi Jawa',
    questions: [
      { text: 'Penulisan tembung basa Jawa sing bener miturut ejaan (d/dh lan t/th) yaiku...', opts: ['godong gedang', 'godhong gedhang', 'kodok', 'bapak tuku boto'], ans: 1, exp: 'Godhong (daun) lan gedhang (pisang) nganggo konsonan dh (retrofleks).' },
      { text: 'Ukara pambuka (identifikasi) sing trep kanggo deskripsi "Kucingku" yaiku...', opts: ['Aku duwe kucing ingon-ingon sing jenenge Belang.', 'Kucing iku seneng mlayu ing dalan.', 'Pungkasane aku seneng banget.', 'Tuku iwak ing pasar!'], ans: 0, exp: 'Ngenalake objek sing arep dideskripsikake.' },
      { text: 'Tembung "ingon-ingon" tegese...', opts: ['Hewan liar', 'Hewan peliharaan', 'Tumbuhan obat', 'Mainan'], ans: 1, exp: 'Kewan ingon-ingon = hewan peliharaan.' },
    ],
  },

  // BAB 2: TEKS NARASI LAN CRITA RAKYAT
  {
    topicCode: 'BJ-SD5-02', subSeq: 1,
    objectives: ['Siswa mampu mengidentifikasi unsur intrinsik teks narasi dan cerita rakyat Bahasa Jawa.'],
    materialTitle: 'Unsur Teks Narasi Basa Jawa',
    blocks: [
      { type: 'table', title: 'Unsur Intrinsik Crita ing Basa Jawa', headers: ['Istilah Basa Jawa', 'Padanan Indonesia'], rows: [
        ['Tema / Underaning Crita', 'Tema (pokok cerita)'],
        ['Paraga lan Watake', 'Tokoh dan penokohan'],
        ['Latar (Panggonan, Wektu, Swasana)', 'Latar tempat, waktu, suasana'],
        ['Alur / Plot', 'Urutan jalannya cerita'],
        ['Amanat / Piwulang Luhur', 'Pesan moral cerita'],
      ]},
    ],
    activityTitle: 'Latihan: Unsur Narasi Jawa',
    questions: [
      { text: 'Pelaku utawa tokoh ing sajrone crita basa Jawa diarani...', opts: ['Paraga', 'Latar', 'Alur', 'Gatra'], ans: 0, exp: 'Paraga = tokoh.' },
      { text: 'Pesan becik sing bisa dijupuk saka crita diarani...', opts: ['Amanat / Piwulang', 'Panggonan', 'Judul', 'Purwaka'], ans: 0, exp: 'Amanat/piwulang = pesan moral.' },
      { text: 'Teks sing nyritakake sawijining prastawa kanthi urutan wektu saka wiwitan nganti pungkasan diarani teks...', opts: ['Narasi', 'Pengumuman', 'Parikan', 'Tabel'], ans: 0, exp: 'Narasi yaiku wacan awujud crita.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-02', subSeq: 2,
    objectives: ['Siswa mampu menganalisis paraga utama, paraga panyengkuyung, lan watake ing crita.'],
    materialTitle: 'Paraga lan Watak ing Crita',
    blocks: [
      { type: 'visual_cards', title: 'Jenis Paraga ing Crita', cards: [
        { emoji: '🌟', label: 'Paraga Utama', sub: 'Tokoh sentral sing paling akeh dicritakake' },
        { emoji: '😇', label: 'Watak Protagonis', sub: 'Sifat becik: jujur, sabar, andhap asor (rendah hati), seneng tetulung' },
        { emoji: '😠', label: 'Watak Antagonis', sub: 'Sifat ala: srakah (serakah), umuk (sombong), drengki (iri hati)' },
      ]},
    ],
    activityTitle: 'Latihan: Paraga & Watak',
    questions: [
      { text: 'Tembung "andhap asor" kanggo nggambarake watak tokoh tegese...', opts: ['Sombong', 'Rendah hati dan sopan', 'Pemarah', 'Serakah'], ans: 1, exp: 'Andhap asor = rendah hati, tidak sombong.' },
      { text: 'Kosok baline sifat "andhap asor" yaiku "umuk" sing tegese...', opts: ['Sombong / suka pamer', 'Jujur', 'Sabar', 'Rajin'], ans: 0, exp: 'Umuk = sombong.' },
      { text: 'Paraga sing nduweni watak srakah lan drengki ing crita rakyat dadi tuladha supaya kita...', opts: ['Niru sifate', 'Ngedohi lan ora niru sifat ala kasebut', 'Menehi hadiah', 'Melu nesu'], ans: 1, exp: 'Watak antagonis dadi pangeling-eling supaya ora ditiru.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-02', subSeq: 3,
    objectives: ['Siswa mampu menentukan latar tempat, latar waktu, dan latar suasana dalam teks narasi Bahasa Jawa.'],
    materialTitle: 'Latar Crita ing Basa Jawa',
    blocks: [
      { type: 'worked_example', level: 'Goleki Latar', question: '"Ing wayah esuk sing adhem, Mbok Srini mlaku menyang alas kanthi ati bungah." Temtokna latar panggonan, wektu, lan swasanane!', steps: ['Latar panggonan: ing alas (hutan).', 'Latar wektu: wayah esuk (pagi hari).', 'Latar swasana: adhem lan bungah (sejuk dan gembira).'], answer: 'Panggonan: alas; Wektu: esuk; Swasana: bungah.' },
    ],
    activityTitle: 'Latihan: Latar Crita',
    questions: [
      { text: '"Nalika srengenge wis angslup, para tani padha mulih saka sawah kanthi rasa syukur." Latar PANGGONAN ukara iki yaiku...', opts: ['Srengenge angslup', 'Sawah', 'Rasa syukur', 'Para tani'], ans: 1, exp: 'Sawah minangka latar panggonan.' },
      { text: 'Tembung "alas" ing basa Indonesia tegese...', opts: ['Laut', 'Hutan', 'Pasar', 'Gunung'], ans: 1, exp: 'Alas = hutan.' },
      { text: 'Swasana "tintrim lan sepi" nggambarake kahanan sing...', opts: ['Rame banget', 'Sunyi lan hening', 'Panas', 'Meriah'], ans: 1, exp: 'Tintrim = sunyi/senyap.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-02', subSeq: 4,
    objectives: ['Siswa mampu mengidentifikasi urutan alur cerita rakyat (wiwitan, pasulayan/konflik, klimaks, pangudhare prakara).'],
    materialTitle: 'Alur Crita Rakyat',
    blocks: [
      { type: 'list', title: '4 Tahap Alur ing Basa Jawa', items: ['1. Wiwitan (Pengenalan paraga lan latar).', '2. Pasulayan (Muncul masalah/konflik).', '3. Pucuking prakara (Klimaks — bagian paling tegang).', '4. Pangudhare prakara (Resolusi — masalah rampung).'] },
    ],
    activityTitle: 'Latihan: Alur Crita',
    questions: [
      { text: 'Tahap alur nalika masalah utawa pertentangan wiwit muncul diarani...', opts: ['Wiwitan', 'Pasulayan (konflik)', 'Panutup', 'Judul'], ans: 1, exp: 'Pasulayan = perselisihan/konflik.' },
      { text: 'Bagian rampunge masalah ing pungkasan crita diarani...', opts: ['Pangudhare prakara (penyelesaian)', 'Pambuka', 'Purwaka', 'Latar'], ans: 0, exp: 'Ngudhari prakara = mengurai/menyelesaikan persoalan.' },
      { text: 'Alur sing nyritakake kedadeyan runtut saka jaman biyen nganti saiki diarani alur...', opts: ['Maju', 'Mundur', 'Acak', 'Buntu'], ans: 0, exp: 'Urutan kronologis ke depan disebut alur maju.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-02', subSeq: 5,
    objectives: ['Siswa mampu menyimpulkan piwulang luhur (amanat) dari cerita rakyat Jawa.'],
    materialTitle: 'Amanat lan Piwulang Luhur Crita',
    blocks: [
      { type: 'tip', text: 'Wong Jawa duwe unen-unen: "Becik ketitik, ala ketara" — tegese tumindak becik bakal katon lan oleh ganjaran, dene tumindak ala suwe-suwe bakal konangan!' },
    ],
    activityTitle: 'Latihan: Amanat Crita',
    questions: [
      { text: 'Tegese paribasan "Becik ketitik, ala ketara" yaiku...', opts: ['Perbuatan baik pasti tampak baiknya dan perbuatan buruk akhirnya ketahuan', 'Semua orang sama saja', 'Jangan suka bekerja', 'Cepat marah itu baik'], ans: 0, exp: 'Piwulang utama supaya tansah nindakake kabecikan.' },
      { text: 'Amanat sing asring ana ing crita rakyat Jawa yaiku...', opts: ['Jujur, bekti marang wong tuwa, aja srakah, lan seneng tetulung', 'Ngapusi kanca', 'Mbolos sekolah', 'Umuk marang tangga'], ans: 0, exp: 'Crita rakyat ngemot pitutur budi pekerti luhur.' },
      { text: 'Tembung "bekti marang wong tuwa" tegese...', opts: ['Berbakti dan hormat kepada orang tua', 'Pergi jauh dari rumah', 'Membantah orang tua', 'Tidak mau membantu'], ans: 0, exp: 'Bekti = berbakti.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-02', subSeq: 6,
    objectives: ['Siswa mampu menyimak dan memahami isi cerita rakyat Jawa dari sumber resmi/terverifikasi (seperti Timun Mas atau Keong Mas).'],
    materialTitle: 'Crita Rakyat Saka Sumber Terverifikasi',
    blocks: [
      { type: 'story_panel', title: 'Ringkesan Crita Rakyat Jawa: Timun Mas', lines: [
        { speaker: 'Crita', avatar: '🥒', text: 'Mbok Srini tansah ndedonga kepengin duwe anak. Saka wiji timun emas, lair bocah wadon ayu sing dijenengi Timun Mas. Nalika dewasa, Buta Ijo teka nagih janji. Kanthi donga lan sangu bungkusan wiji timun, dom, uyah, lan trasi, Timun Mas ngadhepi Buta Ijo kanthi tatag lan pinter nganti slamet mulih marang ibune.' },
      ]},
      { type: 'teacher_note', text: 'Gunakan cerita rakyat Jawa yang sudah terdokumentasi di buku pelajaran resmi Kemendikbud/Dinas Pendidikan Jatim. Jangan mengarang legenda lokal Gresik yang belum terverifikasi.' },
    ],
    activityTitle: 'Latihan: Crita Rakyat Terverifikasi',
    questions: [
      { text: 'Ing crita Timun Mas, watak Timun Mas sing patut dituladhani yaiku...', opts: ['Tatag (berani), pinter, lan ora gampang nyerah', 'Jirih (penakut) lan nyerah', 'Sombong', 'Drengki'], ans: 0, exp: 'Timun Mas ngadhepi bebaya kanthi kendel lan akal budi.' },
      { text: 'Tembung "uyah" ing crita Timun Mas tegese...', opts: ['Gula', 'Garam', 'Minyak', 'Beras'], ans: 1, exp: 'Uyah = garam.' },
      { text: 'Sumber crita rakyat sing becik kanggo sinau ing sekolah yaiku...', opts: ['Buku pelajaran resmi, perpustakaan daerah, utawa sumber budaya terverifikasi', 'Ngarang dhewe ngaku sejarah asli', 'Kabar palsu tanpa sumber', 'Tebakan'], ans: 0, exp: 'Sumber terverifikasi njaga keaslian warisan budaya.' },
    ],
  },

  // BAB 3: AKSARA JAWA: PASANGAN
  {
    topicCode: 'BJ-SD5-03', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan fungsi Pasangan Aksara Jawa untuk mematikan huruf vokal aksara sebelumnya.'],
    materialTitle: 'Fungsi Pasangan Aksara Jawa',
    blocks: [
      { type: 'text', text: 'Ing Aksara Jawa, saben aksara legena diwaca nganggo swara "a" (kaya ꦩ = ma). Kanggo MATENI vokal "a" ing tengah tembung (dadi huruf mati/sigeg), kita ora kena nganggo pangkon ing tengah ukara — nanging kudu nganggo PASANGAN!' },
      { type: 'formula', name: 'Cara Kerja Pasangan', expression: 'Aksara Legena + Pasangan Aksara Berikutnya = Vokal Aksara Pertama MATI!', note: 'Conto: "mangan" → ꦩ (ma) + ꦔ (nga) + ꦤ (na) ... yen disambung tembung maneh, huruf "n" dipateni pasangan tembung sabanjure!' },
    ],
    activityTitle: 'Latihan: Fungsi Pasangan',
    questions: [
      { text: 'Fungsi utama PASANGAN ing tata tulis Aksara Jawa yaiku...', opts: ['Mateni swara vokal (sigeg) aksara ing ngarepe ing tengah tembung/ukara', 'Ngganti swara a dadi i', 'Mungkasi ukara', 'Nulis angka'], ans: 0, exp: 'Pasangan mematikan vokal aksara sebelumnya tanpa memutus kalimat.' },
      { text: 'Cacahe (jumlah) Pasangan Aksara Jawa padha karo Aksara Legena, yaiku ana...', opts: ['10', '15', '20', '26'], ans: 2, exp: 'Saben 20 aksara legena duwe 1 pasangan dhewe-dhewe.' },
      { text: 'Tanda pangkon (꧀) lumrahe mung dienggo ing...', opts: ['Pungkasan ukara/tembung (akhir)', 'Wiwitan ukara', 'Tengah-tengah saben huruf', 'Dhuwur aksara'], ans: 0, exp: 'Ing tengah ukara kudu nganggo pasangan, dudu pangkon.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-03', subSeq: 2,
    objectives: ['Siswa mampu mengenal letak penulisan pasangan (di samping kanan untuk ha/sa/pa dan di bawah untuk 17 aksara lainnya).'],
    materialTitle: 'Letak Pasangan lan Hubungane karo Legena',
    blocks: [
      { type: 'table', title: 'Posisi Penulisan 20 Pasangan Aksara Jawa', headers: ['Letak Pasangan', 'Aksara yang Termasuk', 'Contoh Bentuk'], rows: [
        ['Di SAMPING KANAN (hanya 3 aksara!)', 'ha (꧀ꦲ), sa (꧀ꦱ), pa (꧀ꦥ)', 'Ingat singkatan: HA – SA – PA (HSP) di samping!'],
        ['Di BAWAH aksara sebelumnya (17 aksara)', 'na, ca, ra, ka, da, ta, wa, la, dha, ja, ya, nya, ma, ga, ba, tha, nga', 'Ditulis di bawah huruf yang dimatikan vokalnya'],
      ]},
      { type: 'tip', text: 'Trik hafal cepat: Cuma 3 pasangan yang ditulis di SAMPING kanan → HA, SA, PA! Sisanya 17 pasangan ditulis di BAWAH!' },
    ],
    activityTitle: 'Latihan: Letak Pasangan',
    questions: [
      { text: 'Tiga pasangan Aksara Jawa yang ditulis di SAMPING KANAN aksara sebelumnya adalah pasangan...', opts: ['ha, sa, pa', 'ma, ga, ba', 'da, ta, wa', 'ka, ca, ra'], ans: 0, exp: 'Hanya ha, sa, dan pa yang ditulis sejajar di kanan.' },
      { text: 'Pasangan "na", "ka", "da", "la", dan "ma" ditulis di posisi ... aksara yang dimatikan.', opts: ['Atas', 'Bawah', 'Samping kiri', 'Di belakang tanda titik'], ans: 1, exp: '17 pasangan selain ha-sa-pa ditulis di bawah.' },
      { text: 'Jika aksara ꦤ (na) diberi pasangan ꦏ (ka) di bawahnya, maka bunyinya menjadi...', opts: ['na-ka', 'n-ka (misal pada kata "mangka")', 'ka-na', 'na-na'], ans: 1, exp: 'Pasangan ka mematikan vokal "a" pada ꦤ menjadi konsonan "n" + "ka".' },
    ],
  },
  {
    topicCode: 'BJ-SD5-03', subSeq: 3,
    objectives: ['Siswa mampu membaca dan menyalin kata/frasa sederhana yang menggunakan pasangan Aksara Jawa.'],
    materialTitle: 'Maca lan Nulis Tembung nganggo Pasangan',
    blocks: [
      { type: 'table', title: 'Conto Tembung Sederhana Nganggo Pasangan', headers: ['Aksara Jawa', 'Uraian', 'Wacane'], rows: [
        ['ꦩꦏꦤ꧀ꦱꦼꦒ → ꦩꦔꦤ꧀ꦱꦼꦒ', 'ma + nga + n (mati oleh pasangan sa) + se + ga', 'mangan sega'],
        ['ꦧꦥꦏ꧀ꦏꦪ', 'ba + pa + k (mati oleh pasangan ka) + ka + ya', 'bapak kaya'],
        ['ꦗꦗꦤ꧀ꦥꦱꦂ', 'ja + ja + n (mati oleh pasangan pa) + pa + sar', 'jajan pasar'],
      ]},
    ],
    activityTitle: 'Latihan: Membaca Kata Berpasangan',
    questions: [
      { text: 'Pada kata "jajan pasar" dalam Aksara Jawa, huruf "n" pada "jajan" dimatikan menggunakan...', opts: ['Pasangan pa (ditulis di samping kanan)', 'Pasangan ja', 'Sandhangan wulu', 'Layar'], ans: 0, exp: 'Setelah "n" diikuti huruf "p" (pasar), sehingga memakai pasangan pa.' },
      { text: 'Pada frasa "anak raja", huruf "k" pada "anak" dimatikan oleh pasangan...', opts: ['ra', 'na', 'ka', 'ja'], ans: 0, exp: 'Huruf sesudah "k" adalah "r" (raja) → memakai pasangan ra.' },
      { text: 'Jika menuliskan kata "makan" sendirian di akhir kalimat (tanpa kata lanjutannya), huruf "n" di akhir dimatikan memakai...', opts: ['Pangkon (꧀)', 'Pasangan ha', 'Wulu', 'Suku'], ans: 0, exp: 'Di akhir kalimat tidak ada huruf berikutnya, sehingga dipakai pangkon.' },
    ],
  },

  // BAB 4: AKSARA JAWA: SANDHANGAN
  {
    topicCode: 'BJ-SD5-04', subSeq: 1,
    objectives: ['Siswa mampu mengenal 3 kelompok Sandhangan Aksara Jawa (Swara, Panyigeg Wanda, Wyanjana).'],
    materialTitle: 'Sandhangan Swara, Panyigeg Wanda, lan Wyanjana',
    blocks: [
      { type: 'table', title: 'Sandhangan Swara (Pengubah Vokal a → i, u, e, ê, o)', headers: ['Jeneng Sandhangan', 'Swara', 'Conto ing ꦏ (ka)'], rows: [
        ['Wulu ( ꦶ )', 'i', 'ꦏꦶ = ki'],
        ['Suku ( ꦸ )', 'u', 'ꦏꦸ = ku'],
        ['Taling ( ꦺ )', 'é / è (kaya "lele")', 'ꦏꦺ = ké'],
        ['Pepet ( ꦼ )', 'ê (kaya "sega")', 'ꦏꦼ = kê'],
        ['Taling Tarung ( ꦺꦴ )', 'o (kaya "soto")', 'ꦏꦺꦴ = ko'],
      ]},
      { type: 'table', title: 'Sandhangan Panyigeg Wanda (Penutup Suku Kata) & Wyanjana', headers: ['Jeneng', 'Swara / Fungsi', 'Conto'], rows: [
        ['Wignyan ( ꦃ )', '-h (mati h)', 'ꦱꦮꦃ = sawah'],
        ['Layar ( ꦂ )', '-r (mati r)', 'ꦥꦱꦂ = pasar'],
        ['Cecak ( ꦁ )', '-ng (mati ng)', 'ꦏꦕꦁ = kacang'],
        ['Pangkon ( ꧀ )', 'Mateni konsonan ing pungkasan', 'ꦧꦥꦏ꧀ = bapak'],
        ['Wyanjana (Cakra ꦿ, Keret ꦽ, Pengkal ꦾ)', 'Sisipan -ra-, -rê-, -ya-', 'ꦏꦿ = kra, ꦏꦾ = kya'],
      ]},
    ],
    activityTitle: 'Latihan: Jenis Sandhangan',
    questions: [
      { text: 'Sandhangan swara kanggo ngowahi swara "a" dadi "i" (contone ꦏ → ꦏꦶ "ki") diarani...', opts: ['Suku', 'Wulu', 'Pepet', 'Taling'], ans: 1, exp: 'Wulu = i, Suku = u, Taling = é, Pepet = ê, Taling tarung = o.' },
      { text: 'Sandhangan panyigeg wanda kanggo menehi akhiran "-ng" (contone "kacang") yaiku...', opts: ['Wignyan', 'Layar', 'Cecak', 'Cakra'], ans: 2, exp: 'Cecak = -ng; Layar = -r; Wignyan = -h.' },
      { text: 'Sandhangan swara kanggo ngowahi swara "a" dadi "u" (contone ꦧꦸ "bu") yaiku...', opts: ['Wulu', 'Suku', 'Pepet', 'Layar'], ans: 1, exp: 'Suku ( ꦸ ) ditulis ing ngisor sikil mburi aksara kanggo swara "u".' },
    ],
  },
  {
    topicCode: 'BJ-SD5-04', subSeq: 2,
    objectives: ['Siswa mampu membaca dan menuliskan kata sehari-hari menggunakan kombinasi Aksara Legena dan Sandhangan.'],
    materialTitle: 'Penerapan Sandhangan ing Tembung Padinan',
    blocks: [
      { type: 'flashcards', title: 'Waca Tembung Aksara Jawa Iki! (Klik kanggo Cek)', cards: [
        { emoji: '📘', front: 'ꦧꦸꦏꦸ', back: 'buku (ba+suku, ka+suku)' },
        { emoji: '🐟', front: 'ꦱꦶꦗꦶ', back: 'siji (sa+wulu, ja+wulu)' },
        { emoji: '🍲', front: 'ꦱꦺꦴꦠꦺꦴ', back: 'soto (sa+taling tarung, ta+taling tarung)' },
        { emoji: '🌾', front: 'ꦱꦮꦃ', back: 'sawah (sa, wa+wignyan)' },
        { emoji: '🏪', front: 'ꦥꦱꦂ', back: 'pasar (pa, sa+layar)' },
      ]},
    ],
    activityTitle: 'Latihan: Penerapan Sandhangan',
    questions: [
      { text: 'Tembung Aksara Jawa "ꦧꦸꦏꦸ" diwaca...', opts: ['baku', 'buku', 'biki', 'boko'], ans: 1, exp: 'ꦧꦸ (bu) + ꦏꦸ (ku) = buku.' },
      { text: 'Tembung Aksara Jawa "ꦥꦱꦂ" diwaca...', opts: ['pasah', 'pasar', 'pasang', 'pasa'], ans: 1, exp: 'ꦥ (pa) + ꦱꦂ (sa + layar -r) = pasar.' },
      { text: 'Kanggo nulis tembung "soto", sandhangan swara sing digunakake yaiku...', opts: ['Wulu', 'Suku', 'Taling tarung (o)', 'Pepet'], ans: 2, exp: 'Taling tarung ngowahi swara dadi "o" (ꦱꦺꦴꦠꦺꦴ).' },
    ],
  },

  // BAB 5: TEMBANG MACAPAT: PENGENALAN
  {
    topicCode: 'BJ-SD5-05', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian Tembang Macapat dan menyebutkan beberapa nama pupuh Macapat (Pocung, Gambuh, Kinanthi, Maskumambang).'],
    materialTitle: 'Pengenalan Tembang Macapat',
    blocks: [
      { type: 'text', text: 'Tembang Macapat yaiku puisi tradisional Jawa (tembang cilik) sing kaiket dening aturan guru gatra, guru wilangan, lan guru lagu. Cacahe Tembang Macapat ana 11 pupuh sing nggambarake lakune urip manungsa saka lair nganti seda!' },
      { type: 'visual_cards', title: '4 Tembang Macapat sing Paling Populer kanggo SD', cards: [
        { emoji: '🧩', label: 'Pocung (4 gatra)', sub: 'Watake lucu, santai, kerep kanggo cangkriman (tebak-tebakan) lan pitutur' },
        { emoji: '🤝', label: 'Gambuh (5 gatra)', sub: 'Watake grapyak lan semanak, cocok kanggo pitutur kulawarga' },
        { emoji: '❤️', label: 'Kinanthi (6 gatra)', sub: 'Watake seneng lan asih (katresnan), ngajak nggayuh ilmu' },
        { emoji: '🎭', label: 'Maskumambang (4 gatra)', sub: 'Watake sedhih/nelangsa, nggambarake bayi ing kandhutan utawa prihatin' },
      ]},
    ],
    activityTitle: 'Latihan: Pengenalan Macapat',
    questions: [
      { text: 'Cacahe (jumlah) jenis pupuh Tembang Macapat ing kasusastran Jawa ana...', opts: ['5', '9', '11', '20'], ans: 2, exp: 'Tembang Macapat cacahe ana 11 (Maskumambang, Mijil, Sinom, Kinanthi, Asmarandana, Gambuh, Dhandhanggula, Durma, Pangkur, Megatruh, Pocung).' },
      { text: 'Tembang Macapat sing watake santai, lucu, lan kerep dienggo cangkriman yaiku...', opts: ['Pocung', 'Durma', 'Megatruh', 'Maskumambang'], ans: 0, exp: 'Pocung sering berisi nasihat ringan maupun cangkriman.' },
      { text: 'Tembang Macapat diarani tembang sing "kaiket paugeran" amarga...', opts: ['Nduweni aturan baku guru gatra, guru wilangan, lan guru lagu', 'Bebas tanpa aturan', 'Kudu dinyanyekake cepet', 'Ora duwe makna'], ans: 0, exp: 'Paugeran = patokan/aturan baku macapat.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-05', subSeq: 2,
    objectives: ['Siswa mampu membedakan dan menghitung guru gatra, guru wilangan, dan guru lagu pada bait Tembang Macapat.'],
    materialTitle: 'Paugeran Macapat: Guru Gatra, Wilangan, lan Lagu',
    blocks: [
      { type: 'table', title: '3 Paugeran Wajib Tembang Macapat', headers: ['Istilah', 'Tegese (Artinya)', 'Conto ing Pocung'], rows: [
        ['Guru Gatra', 'Cacahe LARIK (baris) ing saben sak pada (bait)', 'Pocung = 4 gatra'],
        ['Guru Wilangan', 'Cacahe WANDA (suku kata) ing saben sak gatra', '12, 6, 8, 12'],
        ['Guru Lagu', 'Tibane SWARA VOKAL (a/i/u/e/o) ing pungkasane saben gatra', 'u, a, i, a'],
      ]},
      { type: 'worked_example', level: 'Ngitung Paugeran Pocung', question: 'Gatra 1: "Ngel-mu i-ku ka-la-ko-ne kan-thi la-ku" (12 wanda, pungkasan u → 12u)! Coba cek gatra 2: "Le-ka-se la-wan kas"!', steps: ['Hitung suku katanya: Le-ka-se la-wan kas = 6 wanda.', 'Lihat vokal terakhir suku kata "kas" → vokal "a".', 'Maka paugeran gatra 2 adalah 6a!'], answer: 'Paugeran Pocung lengkap: 12u, 6a, 8i, 12a.' },
    ],
    activityTitle: 'Latihan: Guru Gatra, Wilangan, Lagu',
    questions: [
      { text: 'Cacahe larik (baris) ing saben sak pada (bait) Tembang Macapat diarani...', opts: ['Guru gatra', 'Guru wilangan', 'Guru lagu', 'Purwaka'], ans: 0, exp: 'Gatra = baris/larik.' },
      { text: 'Cacahe wanda (suku kata) ing saben sak gatra diarani...', opts: ['Guru gatra', 'Guru wilangan', 'Guru lagu', 'Pada'], ans: 1, exp: 'Wilangan = hitungan jumlah suku kata.' },
      { text: 'Tibane swara vokal (a, i, u, e, o) ing pungkasane saben gatra diarani...', opts: ['Guru gatra', 'Guru wilangan', 'Guru lagu', 'Wanda'], ans: 2, exp: 'Guru lagu = bunyi vokal akhir baris.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-05', subSeq: 3,
    objectives: ['Siswa mampu menyimak dan memahami isi/piwulang contoh Tembang Pocung terkenal.'],
    materialTitle: 'Nyemak Conto Tembang Pocung',
    blocks: [
      { type: 'story_panel', title: 'Tembang Pocung (Cangkriman & Piwulang)', lines: [
        { speaker: 'Pocung Piwulang', avatar: '🎶', text: 'Ngelmu iku kalakone kanthi laku (12u) / Lekase lawan kas (6a) / Tegese kas nyantosani (8i) / Setya budya pangekese dur angkara (12a).' },
        { speaker: 'Tegese', avatar: '💡', text: 'Ilmu iku mung bisa digayuh kanthi usaha nyata lan niat sing kuat supaya urip tentrem lan adoh saka tumindak ala!' },
      ]},
    ],
    activityTitle: 'Latihan: Menyimak Tembang Pocung',
    questions: [
      { text: 'Paugeran (guru wilangan lan guru lagu) Tembang Pocung yaiku...', opts: ['12u, 6a, 8i, 12a', '7u, 10u, 12i, 8u, 8o', '8u, 8i, 8a, 8i, 8a, 8i', '12i, 6a, 8i, 8a'], ans: 0, exp: 'Pocung terdiri 4 gatra: 12u, 6a, 8i, 12a.' },
      { text: 'Piwulang utama saka tembang "Ngelmu iku kalakone kanthi laku" yaiku...', opts: ['Mencari ilmu harus dibarengi usaha nyata dan praktik, bukan hanya diam', 'Ilmu datang sendiri saat tidur', 'Tidak perlu belajar', 'Menjadi sombong'], ans: 0, exp: '"Kalakone kanthi laku" artinya terwujud melalui tindakan/usaha nyata.' },
      { text: 'Tembung "ngelmu" tegese...', opts: ['Harta', 'Ilmu pengetahuan', 'Makanan', 'Pakaian'], ans: 1, exp: 'Ngelmu = ilmu.' },
    ],
  },

  // BAB 6: PARIKAN LAN PANGENALAN GEGURITAN
  {
    topicCode: 'BJ-SD5-06', subSeq: 1,
    objectives: ['Siswa mampu memahami bentuk parikan 2 larik dan 4 larik beserta pesan budi pekertinya.'],
    materialTitle: 'Bentuk lan Pitutur Parikan',
    blocks: [
      { type: 'table', title: 'Parikan 2 Larik vs 4 Larik', headers: ['Jenis', 'Contoh'], rows: [
        ['Parikan 2 Larik (Tunggal)', 'Abang-abang ora legi, tiwas magang ora dadi. / Sega krawu lawuh empal, dadi murid aja nakal.'],
        ['Parikan 4 Larik (Rangkep)', 'Tuku pudak ing kota Gresik (a) / Mlaku-mlaku menyang alun-alun (b) / Dadi bocah tumindaka becik (a) / Karo kanca tansah rukun (b)'],
      ]},
    ],
    activityTitle: 'Latihan: Bentuk & Pesan Parikan',
    questions: [
      { text: 'Ing parikan 4 larik, larik 1 lan 2 diarani ... dene larik 3 lan 4 diarani ...', opts: ['Purwaka lan isi', 'Isi lan purwaka', 'Judul lan panutup', 'Guru lagu lan gatra'], ans: 0, exp: 'Sama seperti pantun: baris 1–2 purwaka (sampiran), baris 3–4 isi.' },
      { text: 'Pitutur ing parikan "Sega krawu lawuh empal, dadi murid aja nakal" yaiku...', opts: ['Siswa harus bersikap baik dan tidak nakal', 'Harus makan empal tiap jam', 'Ayo pergi ke pasar', 'Jangan makan nasi'], ans: 0, exp: 'Isi berada di larik 2: dadi murid aja nakal.' },
      { text: 'Tembung "rukun" ing parikan tegese...', opts: ['Bertengkar', 'Damai, kompak, dan saling menyayangi', 'Lari jauh', 'Malas'], ans: 1, exp: 'Rukun = hidup damai dan harmonis.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-06', subSeq: 2,
    objectives: ['Siswa mampu mengenal geguritan (puisi Jawa modern) dan perbedaannya dengan Tembang Macapat.'],
    materialTitle: 'Pangenalan Geguritan (Puisi Jawa Modern)',
    blocks: [
      { type: 'table', title: 'Beda Geguritan vs Tembang Macapat', headers: ['Aspek', 'Geguritan (Puisi Jawa Modern)', 'Tembang Macapat (Puisi Jawa Lama)'], rows: [
        ['Aturan', 'BEBAS (ora kaiket guru gatra, wilangan, lan lagu)', 'KAÏKET aturan ketat (guru gatra, wilangan, lagu)'],
        ['Cara Mbukak', 'Diwaca (deklamasi) nganggo intonasi & ekspresi', 'Ditembangake (dinyanyikan nganggo laras/nada)'],
        ['Keindahan', 'Ngutamakake pilihan tembung endah lan makna jero', 'Nggabungake irama lagu lan paugeran baku'],
      ]},
    ],
    activityTitle: 'Latihan: Pengenalan Geguritan',
    questions: [
      { text: 'Puisi basa Jawa gagrag anyar (modern) sing ora kaiket dening guru gatra, guru wilangan, lan guru lagu diarani...', opts: ['Geguritan', 'Tembang Macapat', 'Parikan', 'Aksara Legena'], ans: 0, exp: 'Geguritan adalah puisi bebas berbahasa Jawa.' },
      { text: 'Cara nampilake geguritan ing ngarep kelas yaiku kanthi...', opts: ['Diwaca kanthi intonasi, jeda, lan ekspresi (deklamasi)', 'Dihitung jumlah hurufe', 'Ditulisi angka', 'Dibisikake'], ans: 0, exp: 'Maca geguritan merlokake wicara, wirama, wirasa, lan wiraga.' },
      { text: 'Bedane geguritan karo Tembang Macapat yaiku geguritan...', opts: ['Bebas cacahe larik lan swara pungkasane', 'Wajib 4 larik', 'Kudu nganggo sampiran', 'Ora ana temane'], ans: 0, exp: 'Geguritan modern bebas bentuknya.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-06', subSeq: 3,
    objectives: ['Siswa mampu menentukan tema dan suasana dalam sebuah geguritan anak.'],
    materialTitle: 'Tema lan Swasana Geguritan',
    blocks: [
      { type: 'story_panel', title: 'Conto Geguritan: Desaku Sing Asri', lines: [
        { speaker: 'Geguritan', avatar: '🌾', text: 'Esuk iki srengenge mesem sumringah / Manuk-manuk ngoceh ing pang wit pelem / Angin pesisir sumilir ngademake ati / Dhuh desaku, mugi tansah lestari lan tentrem.' },
      ]},
      { type: 'tip', text: 'Tema geguritan ing dhuwur yaiku "Kaendahan lan katresnan marang desa/lingkungan", kanthi swasana tentrem lan syukur!' },
    ],
    activityTitle: 'Latihan: Tema Geguritan',
    questions: [
      { text: 'Tema geguritan "Desaku Sing Asri" ing dhuwur yaiku...', opts: ['Kaendahan alam desa lan rasa syukur', 'Peperangan', 'Kesedihan banget', 'Lomba bal-balan'], ans: 0, exp: 'Nggambarake swasana esuk desa sing endah lan tentrem.' },
      { text: 'Tembung "sumilir" kanggo angin tegese...', opts: ['Angin puting beliung', 'Angin bertiup sepoi-sepoi menyejukkan', 'Udara panas', 'Hujan badai'], ans: 1, exp: 'Angin sumilir = angin sepoi-sepoi.' },
      { text: 'Tembung "wit pelem" tegese...', opts: ['Pohon kelapa', 'Pohon mangga', 'Pohon pisang', 'Pohon bambu'], ans: 1, exp: 'Wit = pohon, pelem = mangga.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-06', subSeq: 4,
    objectives: ['Siswa mampu memilih tembung endah (pilihan kata / diksi) dan purwakanthi sederhana dalam geguritan.'],
    materialTitle: 'Pilihan Tembung Endah ing Geguritan',
    blocks: [
      { type: 'flashcards', title: 'Tembung Endah (Kawi/Sastra) kanggo Geguritan (Klik!)', cards: [
        { emoji: '☀️', front: 'Surya / Bagaskara', back: 'Srengenge (matahari)' },
        { emoji: '🌙', front: 'Candra / Rembulan', back: 'Bulan' },
        { emoji: '🌬️', front: 'Maruta / Bayu', back: 'Angin' },
        { emoji: '🌸', front: 'Kusuma / Sekar', back: 'Kembang (bunga)' },
        { emoji: '💧', front: 'Tirta', back: 'Banyu (air)' },
      ]},
    ],
    activityTitle: 'Latihan: Pilihan Kata Geguritan',
    questions: [
      { text: 'Tembung endah (sastra Jawa) kanggo "banyu" (air) yaiku...', opts: ['Tirta', 'Surya', 'Bayu', 'Kusuma'], ans: 0, exp: 'Tirta = air; Surya = matahari; Bayu = angin; Kusuma = bunga.' },
      { text: 'Tembung endah kanggo "srengenge" (matahari) ing geguritan yaiku...', opts: ['Surya / Bagaskara', 'Tirta', 'Candra', 'Bantala'], ans: 0, exp: 'Surya/Bagaskara = matahari.' },
      { text: 'Pamilihan tembung sing endah lan pas ing geguritan tujuane supaya...', opts: ['Geguritan krasa endah, urip, lan nabet ing ati sing maca', 'Angel banget dimangerteni', 'Dadi kaya daftar blanja', 'Ora ana artine'], ans: 0, exp: 'Diksi endah nguatake rasa lan kaendahan geguritan.' },
    ],
  },
  {
    topicCode: 'BJ-SD5-06', subSeq: 5,
    objectives: ['Siswa mampu menyusun dan membacakan karya parikan atau geguritan sederhana dengan 4W (Wicara, Wirama, Wirasa, Wiraga).'],
    materialTitle: 'Nggawe lan Maca Geguritan Sederhana (4W)',
    blocks: [
      { type: 'visual_cards', title: '4W Kunci Maca Geguritan Keren!', cards: [
        { emoji: '🗣️', label: 'Wicara (Lafal)', sub: 'Pangucapane tembung cetha (bedakna d/dh, t/th, a/o)' },
        { emoji: '🎶', label: 'Wirama (Irama)', sub: 'Cepat-lambat lan dhuwur-cendheke swara pas' },
        { emoji: '❤️', label: 'Wirasa (Penghayatan)', sub: 'Ngrasakake isi geguritan (seneng, haru, semangat)' },
        { emoji: '🙌', label: 'Wiraga (Ekspresi/Gerak)', sub: 'Polah awak lan ulat wajah alami ora kaku' },
      ]},
    ],
    activityTitle: 'Latihan: Karya & Maca Geguritan',
    questions: [
      { text: 'Ing teknik maca geguritan (4W), penghayatan perasaan (seneng, sedhih, semangat) diarani...', opts: ['Wicara', 'Wirama', 'Wirasa', 'Wiraga'], ans: 2, exp: 'Wicara=lafal, Wirama=irama, Wirasa=penghayatan rasa, Wiraga=gerak/ekspresi.' },
      { text: 'Gerak awak lan ekspresi rai sing selaras nalika maca geguritan diarani...', opts: ['Wiraga', 'Wicara', 'Wirama', 'Wirasa'], ans: 0, exp: 'Raga = tubuh/gerak.' },
      { text: 'Langkah pisanan nalika arep nulis geguritan sederhana yaiku...', opts: ['Nemtokake tema sing cedhak karo uripmu (ibu, sekolah, alam)', 'Ngitung guru wilangan 12u', 'Nggawe sampiran dhisik', 'Nyalin duweke kanca'], ans: 0, exp: 'Tema yang dekat dengan pengalaman sendiri memudahkan mengalirnya ide.' },
    ],
  },
];

upsertLessonsBatch('Kelas 5 SD — Bahasa Jawa Gresik Daratan (6 Bab, 23 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

