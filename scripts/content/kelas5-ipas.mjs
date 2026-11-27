import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: SISTEM ORGAN TUBUH MANUSIA DAN KESEHATAN
  {
    topicCode: 'IPAS-SD5-01', subSeq: 1,
    objectives: ['Siswa mampu mengenal organ-organ vital tubuh manusia dan pengelompokannya dalam sistem organ.'],
    materialTitle: 'Mengenal Organ Tubuh Manusia',
    blocks: [
      { type: 'visual_cards', title: 'Organ Penting di Dalam Tubuh Kita', cards: [
        { emoji: '🧠', label: 'Otak', sub: 'Pusat kendali berpikir, bergerak, dan ingatan' },
        { emoji: '🫁', label: 'Paru-Paru', sub: 'Organ utama pernapasan (pertukaran oksigen & CO₂)' },
        { emoji: '❤️', label: 'Jantung', sub: 'Memompa darah ke seluruh tubuh tanpa henti' },
        { emoji: '🍽️', label: 'Lambung & Usus', sub: 'Mencerna makanan dan menyerap sari makanan' },
      ]},
      { type: 'tip', text: 'Sekumpulan organ yang bekerja sama menjalankan satu tugas tertentu disebut SISTEM ORGAN!' },
    ],
    activityTitle: 'Latihan: Organ Tubuh Manusia',
    questions: [
      { text: 'Kumpulan beberapa organ yang saling bekerja sama melakukan fungsi tertentu disebut...', opts: ['Sel', 'Sistem organ', 'Tulang', 'Otot'], ans: 1, exp: 'Contohnya sistem pencernaan, pernapasan, peredaran darah, dan gerak.' },
      { text: 'Organ vital yang bertugas memompa darah ke seluruh tubuh adalah...', opts: ['Paru-paru', 'Jantung', 'Lambung', 'Ginjal'], ans: 1, exp: 'Jantung memompa darah melalui pembuluh darah.' },
      { text: 'Rongga dada dilindungi oleh tulang rusuk karena di dalamnya terdapat organ vital yaitu...', opts: ['Jantung dan paru-paru', 'Usus besar', 'Otak', 'Tulang betis'], ans: 0, exp: 'Tulang rusuk melindungi jantung dan paru-paru.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-01', subSeq: 2,
    objectives: ['Siswa mampu mengurutkan saluran sistem pencernaan manusia (mulut → kerongkongan → lambung → usus halus → usus besar → anus).'],
    materialTitle: 'Sistem Pencernaan Manusia',
    blocks: [
      { type: 'table', title: 'Perjalanan Makanan di Tubuh Kita', headers: ['Urutan Organ', 'Proses Utama yang Terjadi'], rows: [
        ['1. Mulut', 'Pencernaan mekanis (gigi) & kimiawi (enzim amilase pada air liur)'],
        ['2. Kerongkongan', 'Gerak peristaltik mendorong makanan menuju lambung'],
        ['3. Lambung', 'Asam lambung (HCl) membunuh kuman, enzim pepsin mencerna protein'],
        ['4. Usus Halus', 'PENYERAPAN sari-sari makanan ke dalam darah!'],
        ['5. Usus Besar', 'Penyerapan air & pembusukan sisa makanan dibantu bakteri baik'],
        ['6. Anus', 'Tempat keluarnya sisa pencernaan (feses)'],
      ]},
    ],
    activityTitle: 'Latihan: Sistem Pencernaan',
    questions: [
      { text: 'Penyerapan sari-sari makanan ke dalam pembuluh darah terutama terjadi di...', opts: ['Kerongkongan', 'Lambung', 'Usus halus', 'Usus besar'], ans: 2, exp: 'Dinding usus halus memiliki jonjot (vili) untuk menyerap nutrisi.' },
      { text: 'Gerakan meremas dan mendorong makanan di kerongkongan menuju lambung disebut gerak...', opts: ['Gravitasi', 'Peristaltik', 'Refleks', 'Rotasi'], ans: 1, exp: 'Gerak peristaltik mendorong bolus makanan masuk ke lambung.' },
      { text: 'Fungsi utama usus besar adalah...', opts: ['Mengunyah makanan', 'Menyerap kembali air dari sisa makanan', 'Memompa darah', 'Menghasilkan air liur'], ans: 1, exp: 'Usus besar mengatur kadar air pada sisa pencernaan.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-01', subSeq: 3,
    objectives: ['Siswa mampu mengurutkan organ pernapasan manusia dan menjelaskan proses pertukaran gas di alveolus.'],
    materialTitle: 'Sistem Pernapasan Manusia',
    blocks: [
      { type: 'list', title: 'Urutan Jalur Udara Saat Bernapas', items: ['1. Hidung: menyaring debu (bulu hidung), melembapkan, dan menghangatkan udara.', '2. Faring & Laring → 3. Trakea (tenggorokan): pipa udara yang punya rambut getar.', '4. Bronkus & Bronkiolus: cabang saluran menuju paru-paru kanan & kiri.', '5. Alveolus (gelembung paru-paru): tempat PERTUKARAN oksigen (O₂) masuk darah dan karbon dioksida (CO₂) keluar!'] },
      { type: 'tip', text: 'Pernapasan manusia dibantu otot DIAFRAGMA (sekat antara rongga dada dan perut) serta otot antartulang rusuk.' },
    ],
    activityTitle: 'Latihan: Sistem Pernapasan',
    questions: [
      { text: 'Tempat terjadinya pertukaran oksigen (O₂) dan karbon dioksida (CO₂) di dalam paru-paru adalah...', opts: ['Trakea', 'Bronkus', 'Alveolus', 'Hidung'], ans: 2, exp: 'Alveolus dikelilingi kapiler darah tempat pertukaran gas.' },
      { text: 'Gas yang kita hirup dan dibutuhkan sel tubuh untuk menghasilkan energi adalah...', opts: ['Oksigen (O₂)', 'Karbon dioksida (CO₂)', 'Asap', 'Helium'], ans: 0, exp: 'Pernapasan menghirup O₂ dan mengembuskan CO₂.' },
      { text: 'Urutan jalannya udara pernapasan yang BENAR adalah...', opts: ['Hidung → Kerongkongan → Lambung', 'Hidung → Trakea → Bronkus → Alveolus', 'Mulut → Usus → Paru-paru', 'Alveolus → Hidung → Trakea'], ans: 1, exp: 'Udara masuk hidung, turun ke trakea, bercabang di bronkus hingga alveolus.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-01', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan organ sistem peredaran darah (jantung, pembuluh darah arteri/vena/kapiler, darah) dan peredaran darah besar/kecil.'],
    materialTitle: 'Sistem Peredaran Darah Manusia',
    blocks: [
      { type: 'table', title: 'Organ Sistem Peredaran Darah', headers: ['Bagian', 'Tugas Utama'], rows: [
        ['Jantung (4 ruang)', 'Serambi kanan/kiri (menerima darah), Bilik kanan/kiri (memompa darah)'],
        ['Pembuluh Nadi (Arteri)', 'Mengalirkan darah KELUAR dari jantung (umumnya kaya O₂)'],
        ['Pembuluh Balik (Vena)', 'Mengalirkan darah KEMBALI ke jantung (umumnya kaya CO₂)'],
        ['Peredaran Kecil vs Besar', 'Kecil: Jantung → Paru-paru → Jantung | Besar: Jantung → Seluruh tubuh → Jantung'],
      ]},
    ],
    activityTitle: 'Latihan: Sistem Peredaran Darah',
    questions: [
      { text: 'Pembuluh darah yang mengalirkan darah KELUAR dari jantung menuju seluruh tubuh disebut...', opts: ['Vena (balik)', 'Arteri (nadi)', 'Trakea', 'Bronkus'], ans: 1, exp: 'Arteri (nadi) membawa darah keluar dari jantung.' },
      { text: 'Peredaran darah dari jantung → paru-paru → kembali ke jantung disebut peredaran darah...', opts: ['Besar', 'Kecil', 'Terbuka', 'Sementara'], ans: 1, exp: 'Peredaran darah kecil melewati paru-paru untuk mengambil oksigen.' },
      { text: 'Ruang jantung yang bertugas memompa darah kaya oksigen ke seluruh tubuh adalah...', opts: ['Serambi kanan', 'Bilik kiri', 'Alveolus', 'Lambung'], ans: 1, exp: 'Bilik kiri berdinding paling tebal untuk memompa darah ke seluruh tubuh.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-01', subSeq: 5,
    objectives: ['Siswa mampu menjelaskan kerja sama tulang (alat gerak pasif), otot (alat gerak aktif), dan sendi pada sistem gerak manusia.'],
    materialTitle: 'Sistem Gerak Manusia (Tulang, Sendi, Otot)',
    blocks: [
      { type: 'visual_cards', title: 'Tim Kompak Sistem Gerak', cards: [
        { emoji: '🦴', label: 'Rangka / Tulang (Alat Gerak Pasif)', sub: 'Menegakkan tubuh, melindungi organ dalam, tempat melekat otot' },
        { emoji: '💪', label: 'Otot (Alat Gerak Aktif)', sub: 'Bisa memendek (kontraksi) dan memanjang (relaksasi) sehingga menggerakkan tulang!' },
        { emoji: '⚙️', label: 'Sendi (Penghubung Antartulang)', sub: 'Sendi engsel (siku/lutut 1 arah), sendi peluru (bahu/pinggul segala arah), sendi putar (leher)' },
      ]},
    ],
    activityTitle: 'Latihan: Sistem Gerak',
    questions: [
      { text: 'Otot disebut alat gerak AKTIF karena otot mampu...', opts: ['Diam kaku saja', 'Berkontraksi dan berelaksasi untuk menggerakkan tulang', 'Mencerna makanan', 'Menghasilkan oksigen'], ans: 1, exp: 'Tulang tidak bisa bergerak sendiri tanpa tarikan otot.' },
      { text: 'Sendi pada siku dan lutut yang hanya dapat digerakkan ke SATU arah seperti pintu disebut...', opts: ['Sendi peluru', 'Sendi engsel', 'Sendi putar', 'Sendi geser'], ans: 1, exp: 'Siku dan lutut adalah contoh sendi engsel.' },
      { text: 'Sendi yang memungkinkan gerakan ke SEGALA arah seperti pada pangkal lengan (bahu) adalah...', opts: ['Sendi engsel', 'Sendi peluru', 'Sendi kaku', 'Sendi mati'], ans: 1, exp: 'Sendi peluru di bahu dan panggul bergerak ke segala arah.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-01', subSeq: 6,
    objectives: ['Siswa mampu mencocokkan fungsi spesifik organ utama pada keempat sistem organ manusia.'],
    materialTitle: 'Rangkuman Fungsi Organ Vital',
    blocks: [
      { type: 'flashcards', title: 'Cek Cepat Fungsi Organ! (Klik)', cards: [
        { emoji: '🍽️', front: 'Lambung', back: 'Menghaluskan makanan, membunuh kuman dengan HCl, mencerna protein' },
        { emoji: '🫁', front: 'Alveolus', back: 'Pertukaran O₂ dan CO₂ di paru-paru' },
        { emoji: '❤️', front: 'Jantung', back: 'Memompa darah ke paru-paru dan seluruh tubuh' },
        { emoji: '🦴', front: 'Tulang Tengkorak', back: 'Melindungi otak dari benturan' },
      ]},
    ],
    activityTitle: 'Latihan: Fungsi Organ Vital',
    questions: [
      { text: 'Organ pencernaan yang menghasilkan asam lambung (HCl) untuk membunuh kuman makanan adalah...', opts: ['Mulut', 'Lambung', 'Usus besar', 'Anus'], ans: 1, exp: 'HCl di lambung bersifat asam untuk membunuh kuman.' },
      { text: 'Bagian rangka yang melindungi organ otak adalah tulang...', opts: ['Tengkorak', 'Paha', 'Jari', 'Belikat'], ans: 0, exp: 'Tulang tengkorak keras melindungi otak.' },
      { text: 'Bagian darah yang berfungsi mengangkut oksigen ke seluruh tubuh adalah...', opts: ['Sel darah merah (eritrosit)', 'Air liur', 'Keringat', 'Sendi'], ans: 0, exp: 'Hemoglobin dalam sel darah merah mengikat oksigen.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-01', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan keterkaitan kerja antara sistem pencernaan, pernapasan, peredaran darah, dan gerak.'],
    materialTitle: 'Hubungan Antarsistem Organ Tubuh',
    blocks: [
      { type: 'story_panel', title: 'Semua Sistem Saling Bekerja Sama!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Saat kamu berlari, ototmu butuh energi! Dari mana energi itu datang?' },
        { speaker: 'Raka', avatar: '👦', text: 'Sari makanan dari PENCERNAAN dan oksigen dari PERNAPASAN diantar oleh PEREDARAN DARAH menuju otot di SISTEM GERAK!' },
      ]},
      { type: 'tip', text: 'Jika satu sistem terganggu (misal anemia/kurang darah atau asma), pasokan oksigen berkurang sehingga tubuh cepat lemas!' },
    ],
    activityTitle: 'Latihan: Hubungan Antarsistem Organ',
    questions: [
      { text: 'Saat kita berolahraga lari, napas terasa lebih cepat dan detak jantung makin kencang karena...', opts: ['Otot membutuhkan lebih banyak oksigen dan sari makanan yang diantar darah', 'Jantung sedang rusak', 'Kita lupa makan', 'Paru-paru berhenti bekerja'], ans: 0, exp: 'Kerja otot meningkat sehingga butuh pasokan O₂ dan energi lebih cepat.' },
      { text: 'Sistem organ yang bertugas mengedarkan sari makanan hasil pencernaan dan oksigen hasil pernapasan ke seluruh sel adalah...', opts: ['Sistem gerak', 'Sistem peredaran darah', 'Sistem rangka', 'Sistem kulit'], ans: 1, exp: 'Darah menjadi "kurir" utama pengangkut nutrisi dan oksigen.' },
      { text: 'Jika seseorang tidak sarapan pagi, ia mudah lemas saat olahraga karena kekurangan bahan energi dari sistem...', opts: ['Pencernaan', 'Pendengaran', 'Penglihatan', 'Kuku'], ans: 0, exp: 'Makanan yang dicerna menghasilkan glukosa sumber energi otot.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-01', subSeq: 8,
    objectives: ['Siswa mampu menerapkan pola makan gizi seimbang ("Isi Piringku") untuk kesehatan organ tubuh.'],
    materialTitle: 'Pola Makan Bergizi Seimbang',
    blocks: [
      { type: 'table', title: 'Zat Gizi Penting & Fungsinya', headers: ['Zat Gizi', 'Fungsi Utama', 'Contoh Makanan'], rows: [
        ['Karbohidrat', 'Sumber energi utama', 'Nasi, roti, jagung, kentang, ubi'],
        ['Protein', 'Zat pembangun & memperbaiki sel', 'Ikan bandeng, telur, tempe, tahu, daging, kacang'],
        ['Vitamin & Mineral', 'Zat pengatur & daya tahan tubuh', 'Sayur bayam, wortel, jeruk, pisang, susu (kalsium)'],
        ['Air Putih', 'Pelarut zat gizi & mencegah dehidrasi', 'Minum ±6–8 gelas air bersih per hari'],
      ]},
    ],
    activityTitle: 'Latihan: Pola Makan Bergizi',
    questions: [
      { text: 'Ikan bandeng, telur, tahu, dan tempe merupakan sumber utama zat gizi ... yang berguna membangun dan memperbaiki sel tubuh.', opts: ['Karbohidrat', 'Protein', 'Gula buatan', 'Pewarna'], ans: 1, exp: 'Protein adalah zat pembangun tubuh.' },
      { text: 'Mineral yang sangat penting untuk kekuatan tulang dan gigi (banyak pada susu dan ikan teri) adalah...', opts: ['Kalsium', 'Plastik', 'Bensin', 'Kapur tulis'], ans: 0, exp: 'Kalsium dan Vitamin D menjaga kepadatan tulang.' },
      { text: 'Kekurangan serat dari sayur dan buah dapat menyebabkan gangguan pencernaan berupa...', opts: ['Sembelit (susah buang air besar)', 'Flu', 'Batuk', 'Rabun jauh'], ans: 0, exp: 'Serat melancarkan gerak usus.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-01', subSeq: 9,
    objectives: ['Siswa mampu mempraktikkan kebiasaan kebersihan diri (PHBS) untuk mencegah penyakit organ.'],
    materialTitle: 'Menjaga Kebersihan Diri (PHBS)',
    blocks: [
      { type: 'visual_cards', title: 'Perilaku Hidup Bersih dan Sehat (PHBS)', cards: [
        { emoji: '🧼', label: 'Cuci Tangan Pakai Sabun', sub: 'Sebelum makan dan sesudah dari toilet → cegah diare & tifus' },
        { emoji: '🪥', label: 'Sikat Gigi 2× Sehari', sub: 'Sesudah sarapan dan sebelum tidur malam' },
        { emoji: '🚿', label: 'Mandi & Ganti Baju Bersih', sub: 'Menghilangkan keringat, debu, dan kuman kulit' },
        { emoji: '😷', label: 'Etika Batuk & Masker', sub: 'Tutup mulut dengan siku saat batuk/bersin agar tidak menular' },
      ]},
    ],
    activityTitle: 'Latihan: Kebersihan Diri',
    questions: [
      { text: 'Penyakit pencernaan seperti diare dapat dicegah terutama dengan kebiasaan...', opts: ['Mencuci tangan pakai sabun sebelum makan dan menjaga kebersihan jajanan', 'Tidak minum air', 'Tidur larut malam', 'Berteriak keras'], ans: 0, exp: 'Diare umumnya disebabkan kuman/bakteri yang masuk lewat tangan atau makanan kotor.' },
      { text: 'Saat bersin atau batuk di kelas dan tidak membawa tisu, cara menutup mulut yang benar agar tangan tetap bersih adalah dengan...', opts: ['Lengan atas / lipatan siku bagian dalam', 'Membiarkan terbuka ke arah teman', 'Mengusap ke meja', 'Tidak menutup sama sekali'], ans: 0, exp: 'Menutup dengan lipatan siku mencegah kuman menempel di telapak tangan.' },
      { text: 'Menggosok gigi paling penting dilakukan sebelum tidur malam karena...', opts: ['Sisa makanan yang menempel semalaman dapat merusak gigi menjadi berlubang', 'Agar tidak lapar', 'Agar cepat tinggi', 'Supaya tidak mimpi'], ans: 0, exp: 'Bakteri mulut mengubah sisa makanan menjadi asam perusak email gigi.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-01', subSeq: 10,
    objectives: ['Siswa mampu menjelaskan manfaat aktivitas fisik rutin dan sikap duduk/berdiri yang benar bagi sistem gerak dan jantung.'],
    materialTitle: 'Aktivitas Fisik dan Postur Tubuh Sehat',
    blocks: [
      { type: 'list', title: 'Manfaat Olahraga & Postur Benar', items: ['Olahraga rutin (bersepeda, lari, berenang, senam) menguatkan jantung, paru-paru, otot, dan tulang.', 'Duduk tegak saat belajar mencegah kelainan tulang belakang: Kifosis (bungkuk), Lordosis (terlalu melengkung ke depan), Skoliosis (bengkok ke samping S).', 'Lakukan pemanasan sebelum olahraga agar otot tidak kram atau terkilir!'] },
    ],
    activityTitle: 'Latihan: Aktivitas Fisik & Postur',
    questions: [
      { text: 'Kelainan tulang belakang yang membengkok ke samping menyerupai huruf S karena sering duduk miring disebut...', opts: ['Kifosis', 'Skoliosis', 'Anemia', 'Asma'], ans: 1, exp: 'Skoliosis = bengkok samping; Kifosis = membungkuk ke belakang; Lordosis = melengkung ke depan.' },
      { text: 'Tujuan melakukan pemanasan sebelum berolahraga adalah...', opts: ['Membuat cepat lelah', 'Melemaskan otot dan sendi untuk mencegah cedera/kram', 'Mengganti sarapan', 'Menghentikan keringat'], ans: 1, exp: 'Pemanasan mempersiapkan otot dan peredaran darah.' },
      { text: 'Olahraga aerobik seperti bersepeda dan berlari sangat baik untuk melatih kesehatan organ...', opts: ['Jantung dan paru-paru', 'Kuku', 'Rambut', 'Gigi'], ans: 0, exp: 'Olahraga kardio meningkatkan daya tahan jantung dan paru-paru.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-01', subSeq: 11,
    objectives: ['Siswa mampu menjelaskan pentingnya istirahat dan tidur cukup (9–11 jam untuk usia SD) bagi pertumbuhan dan otak.'],
    materialTitle: 'Pentingnya Istirahat yang Cukup',
    blocks: [
      { type: 'visual_cards', title: 'Apa yang Terjadi Saat Kita Tidur Cukup?', cards: [
        { emoji: '📈', label: 'Pertumbuhan Optimal', sub: 'Hormon pertumbuhan bekerja aktif saat tidur malam' },
        { emoji: '🧠', label: 'Otak Lebih Tajam', sub: 'Menguatkan ingatan pelajaran dan menjaga fokus di sekolah' },
        { emoji: '🛡️', label: 'Daya Tahan Tubuh Kuat', sub: 'Sel-sel tubuh memperbaiki diri sehingga tidak mudah sakit' },
      ]},
      { type: 'tip', text: 'Anak usia SD membutuhkan tidur malam sekitar 9–10 jam! Hindari bermain HP tepat sebelum tidur agar tidur nyenyak.' },
    ],
    activityTitle: 'Latihan: Istirahat yang Cukup',
    questions: [
      { text: 'Durasi tidur malam yang ideal bagi siswa SD agar tubuh bugar dan fokus belajar adalah sekitar...', opts: ['3–4 jam', '5 jam', '9–10 jam', '18 jam'], ans: 2, exp: 'Anak usia sekolah dasar butuh ±9–11 jam tidur setiap malam.' },
      { text: 'Akibat terlalu sering begadang bermain gawai bagi siswa adalah...', opts: ['Mengantuk di kelas, sulit konsentrasi, dan daya tahan tubuh menurun', 'Nilai otomatis naik', 'Tumbuh lebih cepat', 'Mata makin tajam'], ans: 0, exp: 'Kurang tidur mengganggu fungsi otak dan imun tubuh.' },
      { text: 'Kebiasaan baik menjelang tidur malam adalah...', opts: ['Menggosok gigi, berdoa, mematikan gawai, dan tidur tepat waktu', 'Makan makanan pedas berlebihan', 'Menyalakan TV keras', 'Minum kopi kental'], ans: 0, exp: 'Rutinitas tenang membantu tidur berkualitas.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-01', subSeq: 12,
    objectives: ['Siswa mampu merangkum gangguan umum organ tubuh (maag, asma, anemia, osteoporosis) dan cara pencegahannya.'],
    materialTitle: 'Kebiasaan Menjaga Kesehatan Organ Tubuh',
    blocks: [
      { type: 'table', title: 'Gangguan Organ & Cara Pencegahannya', headers: ['Sistem', 'Contoh Gangguan', 'Cara Pencegahan Utama'], rows: [
        ['Pencernaan', 'Maag (nyeri lambung), diare', 'Makan teratur tepat waktu, cuci tangan, kurangi jajanan pedas/kotor'],
        ['Pernapasan', 'ISPA, asma, flu', 'Hindari asap rokok & polusi, pakai masker saat berdebu, jaga kebersihan'],
        ['Peredaran Darah', 'Anemia (kurang sel darah merah)', 'Makan makanan kaya zat besi (bayam, ikan, daging, kacang-kacangan)'],
        ['Gerak', 'Osteoporosis (tulang keropos), kram', 'Cukup kalsium & vitamin D (sinar matahari pagi), olahraga teratur'],
      ]},
    ],
    activityTitle: 'Latihan: Menjaga Kesehatan Organ',
    questions: [
      { text: 'Gangguan nyeri lambung akibat sering terlambat makan disebut...', opts: ['Maag (gastritis)', 'Asma', 'Skoliosis', 'Anemia'], ans: 0, exp: 'Makan tidak teratur memicu iritasi asam lambung (maag).' },
      { text: 'Untuk mencegah anemia (kurang darah), kita dianjurkan mengonsumsi makanan kaya zat besi seperti...', opts: ['Sayur bayam, ikan, hati, dan kacang-kacangan', 'Permen dan kerupuk saja', 'Es batu', 'Garam dapur saja'], ans: 0, exp: 'Zat besi diperlukan untuk membentuk hemoglobin darah.' },
      { text: 'Menghindari asap rokok dan asap pembakaran sampah sangat penting untuk melindungi organ...', opts: ['Paru-paru (sistem pernapasan)', 'Gigi', 'Kuku', 'Rambut'], ans: 0, exp: 'Asap rokok dan polusi merusak jaringan paru-paru.' },
    ],
  },

  // BAB 2: EKOSISTEM DAN LINGKUNGAN
  {
    topicCode: 'IPAS-SD5-02', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian ekosistem serta tingkatan individu, populasi, dan komunitas.'],
    materialTitle: 'Pengertian Ekosistem',
    blocks: [
      { type: 'text', text: 'Ekosistem adalah hubungan timbal balik (interaksi) yang saling memengaruhi antara makhluk hidup (komponen biotik) dan lingkungan tak hidupnya (komponen abiotik).' },
      { type: 'visual_cards', title: 'Tingkatan dalam Ekosistem', cards: [
        { emoji: '🐟', label: 'Individu', sub: 'Satu makhluk hidup tunggal (1 ekor ikan bandeng)' },
        { emoji: '🐟🐟', label: 'Populasi', sub: 'Sekumpulan individu SEJENIS di satu tempat (sekawanan ikan bandeng di tambak)' },
        { emoji: '🌿🐟🦀', label: 'Komunitas', sub: 'Berbagai populasi berbeda yang hidup bersama (bandeng, udang, kepiting, bakau)' },
      ]},
    ],
    activityTitle: 'Latihan: Pengertian Ekosistem',
    questions: [
      { text: 'Hubungan timbal balik antara makhluk hidup dengan lingkungan alam tak hidupnya disebut...', opts: ['Individu', 'Ekosistem', 'Metamorfosis', 'Fotosintesis'], ans: 1, exp: 'Ekosistem mencakup interaksi komponen biotik dan abiotik.' },
      { text: 'Sekumpulan 20 ekor ikan bandeng yang hidup di satu tambak disebut...', opts: ['Individu', 'Populasi', 'Abiotik', 'Habitat'], ans: 1, exp: 'Populasi adalah kumpulan makhluk hidup sejenis di tempat dan waktu sama.' },
      { text: 'Contoh ekosistem BUATAN manusia yang banyak terdapat di wilayah Gresik adalah...', opts: ['Laut lepas', 'Tambak dan sawah', 'Hutan hujan alami', 'Gurun'], ans: 1, exp: 'Tambak, sawah, kebun, dan akuarium adalah ekosistem buatan manusia.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-02', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan peran komponen biotik (produsen, konsumen, pengurai/dekomposer).'],
    materialTitle: 'Komponen Biotik Ekosistem',
    blocks: [
      { type: 'table', title: '3 Peran Makhluk Hidup (Biotik)', headers: ['Peran', 'Tugasnya', 'Contoh'], rows: [
        ['Produsen', 'Membuat makanan sendiri lewat fotosintesis', 'Tumbuhan hijau (padi, rumput, pohon, fitoplankton)'],
        ['Konsumen', 'Memakan makhluk hidup lain (herbivora, karnivora, omnivora)', 'Belalang, tikus, katak, ular, burung elang, manusia'],
        ['Pengurai (Dekomposer)', 'Menguraikan sisa makhluk mati jadi unsur hara penyubur tanah', 'Jamur, bakteri pengurai'],
      ]},
    ],
    activityTitle: 'Latihan: Komponen Biotik',
    questions: [
      { text: 'Makhluk hidup yang berperan sebagai PRODUSEN dalam ekosistem darat adalah...', opts: ['Tumbuhan hijau', 'Belalang', 'Ular', 'Elang'], ans: 0, exp: 'Tumbuhan hijau menghasilkan makanannya sendiri melalui fotosintesis.' },
      { text: 'Jamur dan bakteri yang menguraikan daun kering dan bangkai hewan menjadi pupuk alami berperan sebagai...', opts: ['Produsen', 'Konsumen tingkat I', 'Pengurai (dekomposer)', 'Komponen abiotik'], ans: 2, exp: 'Dekomposer mengembalikan zat hara ke tanah.' },
      { text: 'Hewan pemakan tumbuhan seperti belalang, kelinci, dan sapi disebut...', opts: ['Karnivora', 'Herbivora', 'Omnivora', 'Pengurai'], ans: 1, exp: 'Herbivora pemakan tumbuhan; karnivora pemakan daging; omnivora pemakan segala.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-02', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi komponen abiotik dan pengaruhnya terhadap kehidupan makhluk hidup.'],
    materialTitle: 'Komponen Abiotik Ekosistem',
    blocks: [
      { type: 'visual_cards', title: 'Komponen Abiotik (Tak Hidup) Penopang Kehidupan', cards: [
        { emoji: '☀️', label: 'Cahaya Matahari', sub: 'Energi utama fotosintesis tumbuhan' },
        { emoji: '💧', label: 'Air & Kelembapan', sub: 'Kebutuhan minum dan habitat organisme air' },
        { emoji: '🪨', label: 'Tanah & Mineral', sub: 'Tempat tumbuh akar tumbuhan dan menyimpan zat hara' },
        { emoji: '🌬️', label: 'Udara & Suhu', sub: 'Menyediakan O₂ dan CO₂ serta mengatur kenyamanan hidup' },
      ]},
    ],
    activityTitle: 'Latihan: Komponen Abiotik',
    questions: [
      { text: 'Manakah kelompok yang SEMUANYA merupakan komponen ABIOTIK?', opts: ['Air, tanah, cahaya matahari, udara', 'Padi, air, belalang, tanah', 'Ikan, rumput, jamur, batu', 'Burung, pohon, suhu, angin'], ans: 0, exp: 'Abiotik berarti komponen tak hidup.' },
      { text: 'Jika suatu sawah mengalami kekeringan panjang (kekurangan air), pengaruhnya terhadap padi adalah...', opts: ['Padi tumbuh lebih cepat', 'Padi layu dan gagal panen', 'Padi berubah menjadi ikan', 'Tidak berpengaruh'], ans: 1, exp: 'Komponen abiotik air sangat menentukan kelangsungan komponen biotik.' },
      { text: 'Komponen abiotik yang sangat dibutuhkan tumbuhan untuk berfotosintesis selain air adalah...', opts: ['Cahaya matahari dan karbon dioksida', 'Batu kerikil', 'Plastik', 'Besi'], ans: 0, exp: 'Fotosintesis memerlukan cahaya matahari, air, dan CO₂.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-02', subSeq: 4,
    objectives: ['Siswa mampu membedakan 3 jenis simbiosis (mutualisme, komensalisme, parasitisme) dalam ekosistem.'],
    materialTitle: 'Hubungan Makhluk Hidup (Simbiosis)',
    blocks: [
      { type: 'table', title: '3 Jenis Simbiosis dalam Ekosistem', headers: ['Simbiosis', 'Hubungannya', 'Contoh Terkenal'], rows: [
        ['Mutualisme (+ / +)', 'Keduanya SALING MENGUNTUNGKAN', 'Lebah & bunga; kerbau & burung jalak'],
        ['Komensalisme (+ / 0)', 'Satu untung, satu TIDAK dirugikan/diuntungkan', 'Tanaman anggrek menempel di pohon besar; ikan remora & hiu'],
        ['Parasitisme (+ / −)', 'Satu untung, satu DIRUGIKAN', 'Benalu di pohon mangga; kutu di rambut; nyamuk mengisap darah'],
      ]},
    ],
    activityTitle: 'Latihan: Simbiosis',
    questions: [
      { text: 'Hubungan antara kupu-kupu yang mengisap nektar dan bunga yang dibantu penyerbukannya disebut simbiosis...', opts: ['Mutualisme', 'Komensalisme', 'Parasitisme', 'Kompetisi'], ans: 0, exp: 'Keduanya sama-sama mendapat keuntungan (+ / +).' },
      { text: 'Tanaman benalu yang mengambil sari makanan dari pohon mangga hingga pohon mangga merana adalah contoh simbiosis...', opts: ['Mutualisme', 'Komensalisme', 'Parasitisme', 'Netral'], ans: 2, exp: 'Benalu untung, pohon inang dirugikan (+ / −).' },
      { text: 'Tanaman anggrek menempel di batang pohon tinggi untuk mendapat cahaya tanpa mengambil makanan dari pohon tersebut. Ini adalah simbiosis...', opts: ['Mutualisme', 'Komensalisme', 'Parasitisme', 'Predasi'], ans: 1, exp: 'Anggrek untung, pohon tidak rugi (+ / 0).' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-02', subSeq: 5,
    objectives: ['Siswa mampu menyusun rantai makanan sederhana dan menentukan tingkat konsumen pada berbagai ekosistem.'],
    materialTitle: 'Rantai Makanan',
    blocks: [
      { type: 'formula', name: 'Contoh Rantai Makanan di Sawah', expression: 'Padi (Produsen) → Tikus (Konsumen I) → Ular (Konsumen II) → Elang (Konsumen III) → Pengurai', note: 'Tanda panah (→) dibaca "DIMAKAN OLEH" (aliran energi mengalir dari kiri ke kanan)!' },
      { type: 'tip', text: 'Setiap rantai makanan SELALU diawali oleh PRODUSEN (tumbuhan hijau / fitoplankton)!' },
    ],
    activityTitle: 'Latihan: Rantai Makanan',
    questions: [
      { text: 'Pada rantai makanan "Rumput → Belalang → Katak → Ular", hewan yang berperan sebagai KONSUMEN TINGKAT II adalah...', opts: ['Rumput', 'Belalang', 'Katak', 'Ular'], ans: 2, exp: 'Produsen=rumput, Konsumen I=belalang, Konsumen II=katak, Konsumen III=ular.' },
      { text: 'Tanda panah (→) dalam rantai makanan melambangkan...', opts: ['Aliran energi ("dimakan oleh")', 'Persahabatan', 'Arah angin', 'Arah utara'], ans: 0, exp: 'Padi → Tikus artinya padi dimakan tikus (energi berpindah ke tikus).' },
      { text: 'Rantai makanan di ekosistem laut diawali produsen berupa...', opts: ['Hiu', 'Fitoplankton (tumbuhan laut mikroskopis)', 'Ikan tuna', 'Burung camar'], ans: 1, exp: 'Fitoplankton melakukan fotosintesis di laut.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-02', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan jaring-jaring makanan sebagai gabungan beberapa rantai makanan yang saling berhubungan.'],
    materialTitle: 'Jaring-Jaring Makanan',
    blocks: [
      { type: 'text', text: 'Di alam nyata, satu makhluk hidup biasanya memakan lebih dari satu jenis makanan dan juga dimakan lebih dari satu pemangsa. Gabungan beberapa rantai makanan yang saling berkaitan disebut JARING-JARING MAKANAN.' },
      { type: 'tip', text: 'Contoh di sawah: Padi tidak hanya dimakan tikus, tetapi juga belalang dan burung pipit. Tikus dimakan ular DAN burung hantu!' },
    ],
    activityTitle: 'Latihan: Jaring-Jaring Makanan',
    questions: [
      { text: 'Kumpulan beberapa rantai makanan yang saling berhubungan dalam satu ekosistem disebut...', opts: ['Piramida batu', 'Jaring-jaring makanan', 'Simbiosis', 'Populasi'], ans: 1, exp: 'Jaring-jaring makanan adalah gabungan banyak rantai makanan.' },
      { text: 'Semakin kompleks (banyak cabang) jaring-jaring makanan dalam suatu ekosistem, maka ekosistem itu cenderung...', opts: ['Lebih stabil karena hewan punya alternatif makanan', 'Lebih cepat hancur', 'Tidak punya produsen', 'Tidak ada air'], ans: 0, exp: 'Alternatif sumber makanan membuat populasi tidak langsung punah saat 1 spesies berkurang.' },
      { text: 'Jika padi dimakan tikus & belalang, lalu tikus dimakan ular & elang, ada sedikitnya ... rantai makanan di sana.', opts: ['1', 'Lebih dari 1 (saling terhubung)', '0', 'Tidak ada'], ans: 1, exp: 'Ada Padi→Tikus→Ular, Padi→Tikus→Elang, Padi→Belalang→...' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-02', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan konsep keseimbangan ekosistem dan peran tiap makhluk hidup dalam menjaganya.'],
    materialTitle: 'Keseimbangan Ekosistem',
    blocks: [
      { type: 'visual_cards', title: 'Syarat Ekosistem Seimbang', cards: [
        { emoji: '⚖️', label: 'Jumlah Populasi Proporsional', sub: 'Produsen paling banyak → konsumen I → konsumen II → puncak paling sedikit' },
        { emoji: '🌿', label: 'Lingkungan Bersih & Lestari', sub: 'Air, tanah, dan udara tidak tercemar limbah berbahaya' },
        { emoji: '🦉', label: 'Pemangsa Alami Dijaga', sub: 'Burung hantu & ular sawah membantu petani mengendalikan hama tikus secara alami!' },
      ]},
    ],
    activityTitle: 'Latihan: Keseimbangan Ekosistem',
    questions: [
      { text: 'Dalam ekosistem yang seimbang (piramida makanan), kelompok makhluk hidup yang jumlahnya PALING BANYAK adalah...', opts: ['Produsen (tumbuhan)', 'Konsumen puncak (elang/harimau)', 'Konsumen tingkat III', 'Pemangsa besar'], ans: 0, exp: 'Produsen berada di dasar piramida untuk menyuplai energi seluruh ekosistem.' },
      { text: 'Burung hantu yang dibiarkan hidup di sekitar sawah membantu petani karena...', opts: ['Memakan padi', 'Memangsa hama tikus secara alami', 'Merusak tanah', 'Mengeringkan air'], ans: 1, exp: 'Pengendalian hama alami menjaga keseimbangan ekosistem sawah.' },
      { text: 'Kegiatan manusia yang MENJAGA keseimbangan ekosistem adalah...', opts: ['Menangkap ikan dengan racun', 'Menanam kembali pohon dan mengolah limbah sebelum dibuang', 'Memburu semua burung', 'Membakar hutan'], ans: 1, exp: 'Penghijauan dan pengolahan limbah melestarikan keseimbangan alam.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-02', subSeq: 8,
    objectives: ['Siswa mampu memprediksi dampak domino jika salah satu komponen ekosistem berkurang atau punah.'],
    materialTitle: 'Dampak Perubahan Komponen Ekosistem',
    blocks: [
      { type: 'worked_example', level: 'Analisis Efek Domino', question: 'Pada rantai makanan "Padi → Tikus → Ular → Elang", apa yang terjadi jika ular diburu habis oleh manusia?', steps: ['Pemangsa tikus (ular) hilang → populasi TIKUS meledak/meningkat tajam!', 'Karena tikus sangat banyak → tanaman PADI habis dimakan (gagal panen)!', 'Populasi ELANG juga menurun karena kehilangan sebagian mangsanya.'], answer: 'Tikus meningkat drastis, panen padi merugi, elang menurun!' },
    ],
    activityTitle: 'Latihan: Dampak Perubahan Ekosistem',
    questions: [
      { text: 'Pada rantai makanan "Padi → Belalang → Katak → Ular", jika katak banyak ditangkap hingga habis, populasi BELALANG akan...', opts: ['Menurun drastis', 'Meningkat pesat karena pemangsanya hilang', 'Punah langsung', 'Tetap nol'], ans: 1, exp: 'Tanpa katak pemangsa, jumlah belalang melonjak dan merusak padi.' },
      { text: 'Dari soal yang sama, jika katak habis, populasi ULAR pemakan katak akan...', opts: ['Menurun karena kekurangan makanan', 'Bertambah sangat banyak', 'Berubah jadi herbivora', 'Tumbuh jadi pohon'], ans: 0, exp: 'Pemangsa kekurangan makanan sehingga populasinya menurun.' },
      { text: 'Penggunaan pestisida kimia secara berlebihan di sawah dapat berdampak buruk yaitu...', opts: ['Membunuh serangga berguna (lebah/capung) dan mencemari air sungai', 'Menyuburkan ikan di sungai', 'Menambah oksigen', 'Membuat air jadi bersih'], ans: 0, exp: 'Pestisida berlebih meracuni organisme nontarget dan mencemari perairan.' },
    ],
  },

  // BAB 3: BUNYI DAN PERAMBATANNYA
  {
    topicCode: 'IPAS-SD5-03', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian bunyi sebagai gelombang energi yang dihasilkan oleh benda bergetar.'],
    materialTitle: 'Pengertian Bunyi',
    blocks: [
      { type: 'text', text: 'Bunyi adalah bentuk energi gelombang yang dihasilkan oleh benda yang BERGETAR. Coba tempelkan jarimu di tenggorokan saat bersuara "Aaaa..." — terasa getarannya, kan?' },
      { type: 'tip', text: 'Syarat kita bisa mendengar bunyi ada 3: (1) Ada sumber bunyi bergetar, (2) Ada medium/zat perantara, (3) Ada pendengar (telinga normal).' },
    ],
    activityTitle: 'Latihan: Pengertian Bunyi',
    questions: [
      { text: 'Bunyi dihasilkan oleh benda yang mengalami...', opts: ['Pembekuan', 'Getaran', 'Pencairan', 'Diam mutlak'], ans: 1, exp: 'Setiap sumber bunyi pasti bergetar.' },
      { text: 'Manakah yang BUKAN merupakan syarat agar bunyi dapat kita dengar?', opts: ['Ada sumber bunyi', 'Ada medium perantara', 'Ada alat pendengar', 'Harus berada di tempat gelap'], ans: 3, exp: 'Bunyi tidak membutuhkan gelap/terang, hanya sumber, medium, dan telinga.' },
      { text: 'Bagian di dalam tenggorokan manusia yang bergetar saat kita berbicara adalah...', opts: ['Pita suara', 'Lambung', 'Paru-paru', 'Gigi'], ans: 0, exp: 'Pita suara bergetar saat dilewati udara dari paru-paru.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-03', subSeq: 2,
    objectives: ['Siswa mampu mengelompokkan sumber bunyi berdasarkan cara membunyikannya (dipukul, dipetik, ditiup, digesek).'],
    materialTitle: 'Sumber-Sumber Bunyi',
    blocks: [
      { type: 'visual_cards', title: 'Cara Membunyikan Alat Musik', cards: [
        { emoji: '🥁', label: 'Dipukul', sub: 'Kendang, gamelan/gong, rebana, drum' },
        { emoji: '🎸', label: 'Dipetik', sub: 'Gitar, sasando, kecapi' },
        { emoji: '🎺', label: 'Ditiup', sub: 'Seruling/suling, pianika, terompet' },
        { emoji: '🎻', label: 'Digesek', sub: 'Biola, rebab' },
      ]},
    ],
    activityTitle: 'Latihan: Sumber Bunyi',
    questions: [
      { text: 'Alat musik tradisional gamelan dan kendang menghasilkan bunyi dengan cara...', opts: ['Ditiup', 'Dipukul', 'Digesek', 'Dipetik'], ans: 1, exp: 'Gamelan dan kendang dibunyikan dengan dipukul.' },
      { text: 'Bagian gitar yang bergetar sehingga menghasilkan bunyi merdu adalah...', opts: ['Senar/dawai gitar', 'Tali bahu', 'Warna cat', 'Plastik bungkus'], ans: 0, exp: 'Petikan membuat senar gitar bergetar.' },
      { text: 'Seruling bambu berbunyi ketika ditiup karena yang bergetar adalah...', opts: ['Kolom udara di dalam tabung seruling', 'Air di dalamnya', 'Batu', 'Kertas'], ans: 0, exp: 'Tiupan menggetarkan kolom udara di dalam seruling.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-03', subSeq: 3,
    objectives: ['Siswa mampu memahami hubungan frekuensi (tinggi-rendah nada) dan amplitudo (kuat-lemah bunyi) secara sederhana.'],
    materialTitle: 'Getaran, Frekuensi, dan Amplitudo',
    blocks: [
      { type: 'table', title: '2 Sifat Penting Getaran Bunyi', headers: ['Istilah', 'Artinya', 'Pengaruhnya pada Bunyi'], rows: [
        ['Frekuensi (banyak getaran per detik)', 'Cepat/lambatnya getaran (satuan Hertz / Hz)', 'Menentukan TINGGI–RENDAHNYA NADA (cepat = melengking, lambat = ngebass)'],
        ['Amplitudo (simpangan getaran)', 'Besar/kecilnya getaran', 'Menentukan KUAT–LEMAHNYA SUARA (keras vs pelan)'],
      ]},
      { type: 'tip', text: 'Telinga manusia normal mendengar bunyi audiosonik (20 Hz – 20.000 Hz). Kelelawar & lumba-lumba bisa mendengar bunyi ultrasonik (> 20.000 Hz)!' },
    ],
    activityTitle: 'Latihan: Getaran & Bunyi',
    questions: [
      { text: 'Tinggi rendahnya nada suatu bunyi ditentukan oleh ... getarannya.', opts: ['Frekuensi', 'Warna', 'Suhu', 'Berat'], ans: 0, exp: 'Frekuensi tinggi = nada tinggi; frekuensi rendah = nada rendah.' },
      { text: 'Kuat lemahnya (keras pelannya) bunyi ditentukan oleh...', opts: ['Amplitudo', 'Bentuk botol', 'Cahaya', 'Arah angin'], ans: 0, exp: 'Memukul gendang kuat menghasilkan amplitudo besar → suara keras.' },
      { text: 'Bunyi berfrekuensi sangat tinggi (> 20.000 Hz) yang dipakai kelelawar dan alat USG dokter disebut bunyi...', opts: ['Infrasonik', 'Audiosonik', 'Ultrasonik', 'Supersonik'], ans: 2, exp: 'Ultra = di atas batas dengar manusia (> 20.000 Hz).' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-03', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan bahwa bunyi merambat ke segala arah melalui zat perantara dan TIDAK bisa merambat di ruang hampa.'],
    materialTitle: 'Perambatan Bunyi',
    blocks: [
      { type: 'story_panel', title: 'Bisa Nggak Ngobrol di Luar Angkasa Tanpa Radio?', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Pak, kenapa astronot di luar angkasa berbicara pakai radio di helmnya, bukan teriak langsung?' },
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Karena luar angkasa itu RUANG HAMPA (tidak ada udara)! Gelombang bunyi TIDAK BISA merambat di ruang hampa!' },
      ]},
    ],
    activityTitle: 'Latihan: Perambatan Bunyi',
    questions: [
      { text: 'Mengapa bunyi ledakan di ruang angkasa hampa udara tidak dapat terdengar oleh telinga manusia?', opts: ['Karena bunyi terlalu kecil', 'Karena bunyi membutuhkan medium (zat perantara) dan tidak bisa merambat di ruang hampa', 'Karena terlalu gelap', 'Karena terlalu dingin'], ans: 1, exp: 'Bunyi adalah gelombang mekanik yang mutlak butuh zat perantara.' },
      { text: 'Saat bel sekolah berbunyi, siswa di semua arah lapangan bisa mendengarnya karena bunyi merambat...', opts: ['Hanya ke atas', 'Ke segala arah', 'Hanya ke selatan', 'Hanya lurus ke depan'], ans: 1, exp: 'Gelombang bunyi menyebar ke segala arah di udara.' },
      { text: 'Permainan telepon kaleng memakai benang yang ditarik tegang membuktikan bunyi dapat merambat melalui...', opts: ['Benda padat (benang)', 'Ruang hampa', 'Cahaya', 'Magnet'], ans: 0, exp: 'Getaran suara merambat melalui benang padat yang tegang.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-03', subSeq: 5,
    objectives: ['Siswa mampu membandingkan kecepatan rambat bunyi melalui medium padat, cair, dan gas.'],
    materialTitle: 'Medium Perambatan Bunyi (Padat, Cair, Gas)',
    blocks: [
      { type: 'formula', name: 'Urutan Kecepatan Rambat Bunyi', expression: 'Paling CEPAT: Zat Padat  >  Zat Cair  >  Zat Gas (Udara)', note: 'Partikel zat padat sangat rapat sehingga getaran berpindah paling cepat!' },
      { type: 'visual_cards', title: 'Bukti Perambatan di 3 Medium', cards: [
        { emoji: '🪵', label: 'Zat Padat (Tercepat)', sub: 'Tempelkan telinga di meja kayu lalu ketuk ujungnya → bunyi terdengar sangat jelas!' },
        { emoji: '🌊', label: 'Zat Cair', sub: 'Lumba-lumba berkomunikasi di dalam air; batu diadu di dalam ember air terdengar jelas' },
        { emoji: '💨', label: 'Zat Gas (Udara)', sub: 'Suara guru di kelas dan suara petir merambat lewat udara' },
      ]},
    ],
    activityTitle: 'Latihan: Medium Bunyi',
    questions: [
      { text: 'Urutan medium perambatan bunyi dari yang PALING CEPAT ke paling lambat adalah...', opts: ['Gas → Cair → Padat', 'Padat → Cair → Gas', 'Cair → Padat → Gas', 'Gas → Padat → Cair'], ans: 1, exp: 'Partikel padat paling rapat sehingga menghantarkan bunyi tercepat.' },
      { text: 'Saat berenang di kolam, kita masih bisa mendengar suara pukulan di dalam air. Ini membuktikan bunyi merambat melalui benda...', opts: ['Padat', 'Cair', 'Gas', 'Hampa'], ans: 1, exp: 'Air adalah medium cair perambat bunyi.' },
      { text: 'Suara guru yang kita dengar di kelas merambat menuju telinga melalui medium...', opts: ['Padat', 'Cair', 'Gas (udara)', 'Ruang hampa'], ans: 2, exp: 'Udara adalah campuran gas.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-03', subSeq: 6,
    objectives: ['Siswa mampu membedakan pemantulan bunyi (gaung/kerdam dan gema) serta peredaman bunyi.'],
    materialTitle: 'Pemantulan dan Penyerapan Bunyi',
    blocks: [
      { type: 'table', title: 'Beda Gaung vs Gema', headers: ['Jenis Bunyi Pantul', 'Jarak Dinding Pantul', 'Efeknya'], rows: [
        ['Gaung / Kerdam', 'DEKAT (mis. aula kosong)', 'Bunyi pantul datang BERSAMAAN dengan bunyi asli → suara terdengar tidak jelas/menggema tumpang tindih'],
        ['Gema', 'JAUH (mis. tebing/lembah)', 'Bunyi pantul terdengar lengkap SETELAH bunyi asli selesai ("Halo..." → "...halo!")'],
      ]},
      { type: 'tip', text: 'Benda keras (tembok, besi, kaca) MEMANTULKAN bunyi. Benda lunak/berpori (busa, karpet, gorden, wol) MENYERAP bunyi untuk mencegah gaung di bioskop & studio!' },
    ],
    activityTitle: 'Latihan: Pemantulan & Penyerapan Bunyi',
    questions: [
      { text: 'Bunyi pantul yang terdengar lengkap SESUDAH bunyi asli selesai diucapkan (misal saat berteriak di dekat tebing jauh) disebut...', opts: ['Gaung', 'Gema', 'Ultrasonik', 'Resonansi'], ans: 1, exp: 'Gema terjadi karena jarak dinding pantul jauh.' },
      { text: 'Dinding gedung bioskop dan studio rekaman dilapisi busa tebal atau karpet bertujuan untuk...', opts: ['Memperkeras gaung', 'Menyerap bunyi agar tidak terjadi gaung yang mengganggu kejelasan suara', 'Memantulkan cahaya', 'Membuat ruangan panas'], ans: 1, exp: 'Bahan lunak berpori adalah peredam bunyi.' },
      { text: 'Bahan berikut yang paling baik MEMANTULKAN bunyi adalah...', opts: ['Spons dan kapas', 'Tembok beton, kaca, dan pelat besi', 'Karpet tebal', 'Gorden kain'], ans: 1, exp: 'Permukaan keras dan rata memantulkan bunyi.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-03', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan pemanfaatan sifat bunyi dalam teknologi dan kehidupan sehari-hari (SONAR, USG, alat musik, komunikasi).'],
    materialTitle: 'Pemanfaatan Bunyi dalam Kehidupan',
    blocks: [
      { type: 'visual_cards', title: 'Teknologi Keren Berbasis Bunyi!', cards: [
        { emoji: '🚢', label: 'SONAR Kapal Laut', sub: 'Mengukur kedalaman laut dan mendeteksi gerombolan ikan pakai pantulan bunyi' },
        { emoji: '🏥', label: 'USG (Ultrasonografi)', sub: 'Memeriksa kondisi organ dalam dan janin ibu hamil dengan bunyi ultrasonik' },
        { emoji: '🦇', label: 'Ekolokasi Kelelawar', sub: 'Menemukan mangsa dan menghindari tabrakan saat terbang di malam gelap' },
      ]},
    ],
    activityTitle: 'Latihan: Pemanfaatan Bunyi',
    questions: [
      { text: 'Kapal laut memanfaatkan pemantulan gelombang bunyi (SONAR) untuk...', opts: ['Mengukur kedalaman laut dan mendeteksi kawanan ikan', 'Memasak air', 'Menerangi dek kapal', 'Menangkap angin'], ans: 0, exp: 'SONAR memancarkan gelombang bunyi lalu menghitung waktu pantulannya.' },
      { text: 'Alat medis USG (Ultrasonografi) memanfaatkan sifat bunyi...', opts: ['Infrasonik', 'Ultrasonik', 'Gaung aula', 'Ruang hampa'], ans: 1, exp: 'USG menggunakan gelombang ultrasonik yang aman bagi tubuh.' },
      { text: 'Kemampuan kelelawar dan lumba-lumba mengetahui letak benda dengan pantulan bunyi disebut...', opts: ['Fotosintesis', 'Ekolokasi', 'Metamorfosis', 'Reboisasi'], ans: 1, exp: 'Ekolokasi memanfaatkan pantulan (echo) bunyi ultrasonik.' },
    ],
  },

  // BAB 4: CAHAYA DAN SIFATNYA
  {
    topicCode: 'IPAS-SD5-04', subSeq: 1,
    objectives: ['Siswa mampu membedakan sumber cahaya alami dan buatan serta benda yang hanya memantulkan cahaya (seperti bulan).'],
    materialTitle: 'Sumber-Sumber Cahaya',
    blocks: [
      { type: 'visual_cards', title: 'Sumber Cahaya di Sekitar Kita', cards: [
        { emoji: '☀️', label: 'Sumber Cahaya Alami', sub: 'Matahari, bintang, petir, kunang-kunang' },
        { emoji: '💡', label: 'Sumber Cahaya Buatan', sub: 'Lampu listrik, senter, lilin, api unggun' },
        { emoji: '🌙', label: 'Hati-Hati: Bulan BUKAN Sumber Cahaya!', sub: 'Bulan tampak bercahaya hanya karena MEMANTULKAN cahaya matahari!' },
      ]},
    ],
    activityTitle: 'Latihan: Sumber Cahaya',
    questions: [
      { text: 'Manakah yang merupakan sumber cahaya ALAMI?', opts: ['Lampu neon', 'Senter LED', 'Matahari dan bintang', 'Bulan'], ans: 2, exp: 'Matahari dan bintang memancarkan cahaya sendiri secara alami.' },
      { text: 'Mengapa Bulan BUKAN termasuk sumber cahaya?', opts: ['Karena bulan hanya memantulkan cahaya dari Matahari', 'Karena bulan terlalu kecil', 'Karena bulan berwarna gelap selalu', 'Karena bulan terbuat dari air'], ans: 0, exp: 'Bulan tidak menghasilkan cahaya sendiri.' },
      { text: 'Hewan kecil yang dapat memancarkan cahaya alami dari tubuhnya di malam hari adalah...', opts: ['Kunang-kunang', 'Belalang', 'Kupu-kupu', 'Semut'], ans: 0, exp: 'Kunang-kunang menghasilkan cahaya bioluminesensi.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-04', subSeq: 2,
    objectives: ['Siswa mampu membuktikan sifat cahaya merambat lurus dan hubungannya dengan terbentuknya bayangan.'],
    materialTitle: 'Cahaya Merambat Lurus',
    blocks: [
      { type: 'visual_cards', title: 'Bukti Cahaya Merambat Lurus', cards: [
        { emoji: '🔦', label: 'Sorot Lampu Senter / Mobil', sub: 'Berkas sinarnya selalu lurus, tidak berbelok sendiri' },
        { emoji: '🌤️', label: 'Sinar Matahari Masuk Genteng / Celah Jendela', sub: 'Membentuk garis cahaya lurus di ruangan berdebu' },
        { emoji: '👤', label: 'Terbentuknya Bayangan', sub: 'Saat cahaya terhalang benda gelap, terbentuk bayangan di belakangnya!' },
      ]},
    ],
    activityTitle: 'Latihan: Cahaya Merambat Lurus',
    questions: [
      { text: 'Cahaya lilin hanya terlihat melalui lubang 3 karton jika ketiga lubang berada pada satu garis lurus. Percobaan ini membuktikan cahaya...', opts: ['Merambat lurus', 'Membelok sendiri', 'Dapat diuraikan', 'Membeku'], ans: 0, exp: 'Jika satu karton digeser, cahaya terhalang karena tidak bisa berbelok.' },
      { text: 'Terbentuknya bayangan tubuh kita saat berdiri di bawah terik matahari terjadi karena cahaya...', opts: ['Merambat lurus dan terhalang benda tidak tembus cahaya', 'Menembus seluruh tubuh', 'Berbelok memutari tubuh', 'Menghilang'], ans: 0, exp: 'Tubuh menghalangi berkas cahaya lurus sehingga bagian belakang gelap (bayangan).' },
      { text: 'Berbeda dengan bunyi, cahaya DAPAT merambat di ruang hampa sehingga sinar ... bisa sampai ke Bumi.', opts: ['Matahari', 'Petir', 'Klakson', 'Bel sekolah'], ans: 0, exp: 'Cahaya adalah gelombang elektromagnetik yang bisa melewati ruang hampa angkasa.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-04', subSeq: 3,
    objectives: ['Siswa mampu membedakan pemantulan teratur (cermin) dan pemantulan baur, serta mengenal cermin datar, cekung, dan cembung.'],
    materialTitle: 'Pemantulan Cahaya dan Jenis Cermin',
    blocks: [
      { type: 'table', title: '3 Jenis Cermin & Penggunaannya', headers: ['Jenis Cermin', 'Sifat Bayangan Umum', 'Contoh Penggunaan'], rows: [
        ['Cermin Datar', 'Tegak, sama besar, kiri-kanan tertukar (maya)', 'Cermin berhias di kamar / rumah'],
        ['Cermin Cembung (Menyebar)', 'Maya, tegak, DIPERKECIL (jangkauan luas!)', 'Kaca spion motor/mobil, cermin tikungan jalan'],
        ['Cermin Cekung (Mengumpulkan)', 'Bisa diperbesar (jika benda dekat)', 'Reflektor lampu senter, lampu mobil, kaca dokter gigi'],
      ]},
    ],
    activityTitle: 'Latihan: Pemantulan Cahaya & Cermin',
    questions: [
      { text: 'Kaca spion sepeda motor dan cermin pengawas di tikungan jalan menggunakan cermin ... agar area pandang luas.', opts: ['Datar', 'Cembung', 'Cekung', 'Kaca buram'], ans: 1, exp: 'Cermin cembung menghasilkan bayangan tegak dan diperkecil sehingga bidang pandangnya lebar.' },
      { text: 'Saat bercermin di cermin datar, bayangan yang terbentuk bersifat...', opts: ['Terbalik dan sangat besar', 'Tegak dan sama besar dengan bendanya', 'Diperkecil sangat kecil', 'Tidak tampak'], ans: 1, exp: 'Cermin datar membentuk bayangan maya, tegak, sama besar.' },
      { text: 'Pemantulan cahaya pada permukaan rata dan mengilap (seperti cermin dan air tenang) disebut pemantulan...', opts: ['Baur/difus', 'Teratur', 'Bias', 'Hampa'], ans: 1, exp: 'Permukaan licin menghasilkan pemantulan teratur; permukaan kasar menghasilkan pemantulan baur.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-04', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan pembiasan (pembelokan) cahaya saat melewati dua medium berbeda kerapatan serta penguraian cahaya (pelangi).'],
    materialTitle: 'Pembiasan dan Penguraian Cahaya',
    blocks: [
      { type: 'visual_cards', title: 'Fenomena Ajaib Pembiasan & Penguraian!', cards: [
        { emoji: '✏️', label: 'Pensil di Gelas Air Tampak Patah', sub: 'Cahaya membelok (dibiaskan) saat melewati batas udara dan air!' },
        { emoji: '🏊', label: 'Dasar Kolam Jernih Tampak Dangkal', sub: 'Akibat pembiasan cahaya dari air ke udara — hati-hati saat berenang!' },
        { emoji: '🌈', label: 'Pelangi (Penguraian / Dispersi)', sub: 'Cahaya putih matahari diuraikan tetes hujan menjadi Mejikuhibiniu!' },
      ]},
    ],
    activityTitle: 'Latihan: Pembiasan & Penguraian Cahaya',
    questions: [
      { text: 'Sedotan yang dimasukkan ke dalam gelas bening berisi air tampak bengkok atau patah. Hal ini membuktikan cahaya dapat...', opts: ['Dipantulkan', 'Dibiaskan (dibelokkan)', 'Diserap', 'Membeku'], ans: 1, exp: 'Pembiasan terjadi saat cahaya melewati 2 medium berbeda kerapatan (udara ↔ air).' },
      { text: 'Terbentuknya pelangi setelah hujan terkena sinar matahari menunjukkan sifat cahaya yaitu...', opts: ['Dapat diuraikan (dispersi) menjadi 7 spektrum warna', 'Tidak tembus air', 'Merambat zigzag', 'Menghasilkan bunyi'], ans: 0, exp: 'Cahaya putih polikromatik terurai menjadi merah, jingga, kuning, hijau, biru, nila, ungu.' },
      { text: 'Akibat pembiasan cahaya, dasar sungai atau kolam yang airnya jernih tampak lebih ... daripada kedalaman sebenarnya.', opts: ['Dalam', 'Dangkal', 'Gelap', 'Panas'], ans: 1, exp: 'Pembiasan membuat dasar kolam terlihat lebih dangkal dari aslinya.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-04', subSeq: 5,
    objectives: ['Siswa mampu mengelompokkan benda bening (transparan), benda tembus sebagian (translusen), dan benda gelap (opak).'],
    materialTitle: 'Benda Bening, Buram, dan Tidak Tembus Cahaya',
    blocks: [
      { type: 'table', title: '3 Kelompok Benda Terhadap Cahaya', headers: ['Jenis Benda', 'Sifat Terhadap Cahaya', 'Contoh'], rows: [
        ['Benda Bening (Transparan)', 'Meneruskan hampir seluruh cahaya', 'Kaca jendela bening, air jernih, plastik bening'],
        ['Benda Tembus Sebagian (Translusen)', 'Meneruskan sebagian cahaya (tampak samar)', 'Kaca buram, kertas minyak, kain tipis'],
        ['Benda Gelap (Opak)', 'TIDAK dapat ditembus cahaya (membentuk bayangan)', 'Kayu, tembok, batu, buku tebal, logam'],
      ]},
    ],
    activityTitle: 'Latihan: Benda Bening & Gelap',
    questions: [
      { text: 'Kaca jendela kelas dibuat dari bahan bening agar...', opts: ['Cahaya matahari dapat menembus masuk menerangi kelas', 'Kelas selalu gelap', 'Suara hilang', 'Hujan masuk'], ans: 0, exp: 'Kaca bening meneruskan cahaya.' },
      { text: 'Benda berikut yang TIDAK dapat ditembus cahaya (benda gelap/opak) adalah...', opts: ['Air jernih', 'Plastik bening', 'Papan kayu dan dinding batu bata', 'Kaca akuarium'], ans: 2, exp: 'Kayu dan batu bata menghalangi cahaya seluruhnya.' },
      { text: 'Kertas minyak dan kaca buram kamar mandi termasuk benda...', opts: ['Bening sempurna', 'Tembus cahaya sebagian (translusen)', 'Sumber cahaya', 'Cermin'], ans: 1, exp: 'Cahaya masuk samar tetapi bentuk di baliknya tidak tampak jelas.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-04', subSeq: 6,
    objectives: ['Siswa mampu menyebutkan berbagai alat optik dan pemanfaatan sifat cahaya dalam kehidupan sehari-hari.'],
    materialTitle: 'Pemanfaatan Cahaya dan Alat Optik',
    blocks: [
      { type: 'visual_cards', title: 'Alat Optik Sahabat Manusia', cards: [
        { emoji: '👓', label: 'Kacamata', sub: 'Membantu penderita rabun jauh (lensa cekung) & rabun dekat (lensa cembung)' },
        { emoji: '🔍', label: 'Lup (Kaca Pembesar)', sub: 'Memakai lensa cembung untuk melihat benda kecil tampak besar' },
        { emoji: '🔭', label: 'Periskop & Teleskop', sub: 'Periskop kapal selam memakai 2 cermin datar; teleskop mengamati benda langit' },
        { emoji: '🔬', label: 'Mikroskop', sub: 'Melihat makhluk sangat kecil (bakteri/sel) yang tak terlihat mata telanjang' },
      ]},
    ],
    activityTitle: 'Latihan: Pemanfaatan Cahaya',
    questions: [
      { text: 'Alat optik pada kapal selam yang memanfaatkan pemantulan dua cermin datar untuk mengintip permukaan laut adalah...', opts: ['Mikroskop', 'Periskop', 'Lup', 'Stetoskop'], ans: 1, exp: 'Periskop memantulkan cahaya memakai 2 cermin datar bersudut 45°.' },
      { text: 'Alat optik yang digunakan di laboratorium untuk mengamati bakteri atau sel mikroskopis adalah...', opts: ['Teleskop', 'Mikroskop', 'Spion', 'Kompas'], ans: 1, exp: 'Mikroskop memperbesar objek sangat renik.' },
      { text: 'Kaca pembesar (lup) menggunakan lensa berbentuk...', opts: ['Cembung', 'Datar', 'Gelap', 'Berlubang'], ans: 0, exp: 'Lensa cembung bersifat mengumpulkan cahaya dan memperbesar bayangan benda dekat.' },
    ],
  },

  // BAB 5: KONDISI GEOGRAFIS INDONESIA
  {
    topicCode: 'IPAS-SD5-05', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan letak geografis Indonesia di antara dua benua dan dua samudra beserta keuntungannya.'],
    materialTitle: 'Letak Geografis Indonesia',
    blocks: [
      { type: 'formula', name: 'Posisi Silang Geografis Indonesia', expression: 'Di antara 2 Benua (Asia & Australia)  dan  2 Samudra (Hindia & Pasifik)', note: 'Posisi silang ini menjadikan Indonesia jalur perdagangan dunia yang strategis sejak dahulu!' },
      { type: 'tip', text: 'Indonesia adalah negara KEPULAUAN (ribuan pulau) sekaligus negara MARITIM (wilayah lautnya lebih luas dari daratannya).' },
    ],
    activityTitle: 'Latihan: Letak Geografis Indonesia',
    questions: [
      { text: 'Secara geografis, Indonesia terletak di antara dua benua yaitu...', opts: ['Asia dan Eropa', 'Asia dan Australia', 'Amerika dan Afrika', 'Eropa dan Australia'], ans: 1, exp: 'Indonesia diapit Benua Asia (utara) dan Benua Australia (selatan).' },
      { text: 'Dua samudra yang mengapit wilayah Indonesia adalah...', opts: ['Samudra Atlantik dan Arktik', 'Samudra Hindia dan Samudra Pasifik', 'Samudra Pasifik dan Atlantik', 'Samudra Hindia dan Arktik'], ans: 1, exp: 'Samudra Hindia di barat/selatan dan Samudra Pasifik di timur/utara.' },
      { text: 'Salah satu keuntungan letak geografis Indonesia yang strategis adalah...', opts: ['Menjadi jalur persimpangan perdagangan dan pelayaran internasional', 'Memiliki musim salju', 'Tidak punya laut', 'Terisolasi dari negara lain'], ans: 0, exp: 'Posisi silang mendukung perdagangan internasional dan keragaman budaya.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-05', subSeq: 2,
    objectives: ['Siswa mengenal letak astronomis Indonesia (6°LU–11°LS dan 95°BT–141°BT) beserta dampaknya pada iklim tropis dan 3 zona waktu.'],
    materialTitle: 'Letak Astronomis Indonesia (Pengayaan)',
    blocks: [
      { type: 'formula', name: 'Koordinat Astronomis Indonesia', expression: '6° LU – 11° LS  (Garis Lintang)  dan  95° BT – 141° BT  (Garis Bujur)', note: 'Garis lintang dekat Khatulistiwa → iklim TROPIS! Rentang bujur 46° → 3 ZONA WAKTU (WIB, WITA, WIT)!' },
      { type: 'table', title: '3 Zona Waktu Indonesia', headers: ['Zona Waktu', 'Contoh Wilayah', 'Selisih dari WIB'], rows: [
        ['WIB (Waktu Indonesia Barat)', 'Sumatra, Jawa (termasuk Gresik), Kalbar, Kalteng', 'Patokan (mis. 07.00)'],
        ['WITA (Waktu Indonesia Tengah)', 'Bali, NTB, NTT, Sulawesi, Kaltim, Kalsel', '+1 jam (08.00)'],
        ['WIT (Waktu Indonesia Timur)', 'Maluku dan Papua', '+2 jam (09.00)'],
      ]},
    ],
    activityTitle: 'Latihan: Letak Astronomis Indonesia',
    questions: [
      { text: 'Letak astronomis Indonesia berada pada...', opts: ['6° LU – 11° LS dan 95° BT – 141° BT', '0° – 90° LU', '20° LS – 40° LS', '10° BB – 50° BB'], ans: 0, exp: '6° LU – 11° LS (lintang) dan 95° BT – 141° BT (bujur).' },
      { text: 'Jika di Gresik (WIB) menunjukkan pukul 08.00 pagi, maka di Bali (WITA) pukul...', opts: ['07.00', '08.00', '09.00', '10.00'], ans: 2, exp: 'WITA lebih cepat 1 jam dari WIB → 09.00.' },
      { text: 'Akibat letak lintang Indonesia yang dilalui garis Khatulistiwa (0°), Indonesia beriklim...', opts: ['Kutub', 'Tropis (2 musim: hujan & kemarau)', 'Subtropis bersalju', 'Gurun'], ans: 1, exp: 'Wilayah sekitar khatulistiwa beriklim tropis hangat sepanjang tahun.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-05', subSeq: 3,
    objectives: ['Siswa mampu mengenal 5 pulau besar Indonesia (Sumatra, Jawa, Kalimantan, Sulawesi, Papua) dan kepulauan lainnya.'],
    materialTitle: 'Pulau-Pulau Besar di Indonesia',
    blocks: [
      { type: 'visual_cards', title: '5 Pulau Besar Utama Indonesia', cards: [
        { emoji: '🏝️', label: 'Sumatra', sub: 'Pulau paling barat; ada Danau Toba & Pegunungan Bukit Barisan' },
        { emoji: '🏙️', label: 'Jawa', sub: 'Pulau terpadat penduduknya; tempat Provinsi Jawa Timur & Gresik' },
        { emoji: '🌳', label: 'Kalimantan', sub: 'Sungai-sungai panjang (Kapuas, Mahakam) & hutan hujan luas' },
        { emoji: '🌺', label: 'Sulawesi', sub: 'Bentuk unik menyerupai huruf K; kaya terumbu karang (Bunaken, Wakatobi)' },
        { emoji: '🏔️', label: 'Papua', sub: 'Pulau paling timur; memiliki puncak tertinggi Indonesia (Puncak Jaya)' },
      ]},
    ],
    activityTitle: 'Latihan: Pulau Besar Indonesia',
    questions: [
      { text: 'Lima pulau terbesar utama di Indonesia adalah...', opts: ['Sumatra, Jawa, Kalimantan, Sulawesi, Papua', 'Jawa, Bali, Lombok, Madura, Sumbawa', 'Sumatra, Singapura, Jawa, Bali, Timor', 'Kalimantan, Filipina, Sulawesi, Papua, Jawa'], ans: 0, exp: 'Lima pulau besar: Sumatra, Jawa, Kalimantan, Sulawesi, dan Papua.' },
      { text: 'Pulau yang bentuknya unik menyerupai huruf K di bagian tengah Indonesia adalah...', opts: ['Sumatra', 'Sulawesi', 'Jawa', 'Papua'], ans: 1, exp: 'Sulawesi memiliki empat semenanjung menyerupai huruf K.' },
      { text: 'Pulau dengan jumlah penduduk paling padat di Indonesia adalah...', opts: ['Papua', 'Kalimantan', 'Jawa', 'Sulawesi'], ans: 2, exp: 'Lebih dari separuh penduduk Indonesia tinggal di Pulau Jawa.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-05', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan karakteristik Indonesia sebagai negara maritim sekaligus negara agraris.'],
    materialTitle: 'Indonesia: Negara Maritim dan Agraris',
    blocks: [
      { type: 'table', title: 'Dua Kekuatan Besar Wilayah Indonesia', headers: ['Julukan', 'Artinya', 'Potensi Utamanya'], rows: [
        ['Negara Maritim', 'Sekitar 2/3 wilayah Indonesia berupa lautan luas', 'Perikanan laut, garam, rumput laut, pelabuhan, pelayaran, wisata bahari'],
        ['Negara Agraris', 'Tanah vulkanik subur & sebagian besar warga bertani/berkebun', 'Padi, jagung, kopi, teh, rempah-rempah, buah tropis'],
      ]},
    ],
    activityTitle: 'Latihan: Negara Maritim & Agraris',
    questions: [
      { text: 'Indonesia disebut negara MARITIM karena...', opts: ['Wilayah perairan/lautnya sangat luas dan berperan besar bagi kehidupan bangsa', 'Tidak memiliki pantai', 'Semua penduduknya petani gunung', 'Terletak di tengah benua tanpa laut'], ans: 0, exp: 'Sekitar dua pertiga wilayah Indonesia berupa laut.' },
      { text: 'Indonesia disebut negara AGRARIS karena...', opts: ['Memiliki lahan subur dan sektor pertanian yang kuat', 'Hanya memiliki gurun', 'Tidak bisa ditanami padi', 'Bersuhu di bawah 0°C'], ans: 0, exp: 'Agraris berkaitan dengan pertanian dan perkebunan.' },
      { text: 'Contoh pemanfaatan potensi maritim Indonesia adalah...', opts: ['Budi daya rumput laut, tambak, penangkapan ikan, dan jalur kapal laut', 'Menanam apel pegunungan', 'Membuat salju buatan', 'Menambang es'], ans: 0, exp: 'Potensi kelautan mencakup perikanan, rumput laut, dan transportasi laut.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-05', subSeq: 5,
    objectives: ['Siswa mampu membedakan kenampakan alam daratan (gunung, dataran, lembah) dan perairan (sungai, danau, selat, teluk).'],
    materialTitle: 'Kenampakan Alam Indonesia',
    blocks: [
      { type: 'flashcards', title: 'Kenali Istilah Kenampakan Alam! (Klik)', cards: [
        { emoji: '🌊', front: 'Selat', back: 'Laut sempit di antara 2 pulau (mis. Selat Madura, Selat Bali, Selat Sunda)' },
        { emoji: '🏖️', front: 'Teluk vs Tanjung', back: 'Teluk = laut menjorok ke darat; Tanjung = daratan menjorok ke laut' },
        { emoji: '🏞️', front: 'Danau & Waduk', back: 'Cekungan berisi air di daratan (danau alami, waduk buatan)' },
        { emoji: '🌋', label: 'Gunung Berapi', front: 'Gunung Berapi', back: 'Banyak di Indonesia (Cincin Api Pasifik) → menyuburkan tanah!' },
      ]},
    ],
    activityTitle: 'Latihan: Kenampakan Alam',
    questions: [
      { text: 'Laut sempit yang terletak di antara dua pulau (seperti di antara Pulau Jawa dan Pulau Madura) disebut...', opts: ['Teluk', 'Selat', 'Danau', 'Tanjung'], ans: 1, exp: 'Selat memisahkan dua pulau (contoh: Selat Madura, Selat Bali).' },
      { text: 'Bagian lautan yang menjorok masuk ke arah daratan disebut...', opts: ['Teluk', 'Tanjung', 'Gunung', 'Lembah'], ans: 0, exp: 'Teluk = laut masuk ke darat; Tanjung = darat menjorok ke laut.' },
      { text: 'Contoh kenampakan BUATAN (bukan alami) adalah...', opts: ['Sungai Bengawan Solo', 'Waduk, pelabuhan, dan jalan tol', 'Gunung Semeru', 'Laut Jawa'], ans: 1, exp: 'Waduk, pelabuhan, dan jalan tol dibangun manusia.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-05', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan ciri iklim tropis Indonesia serta pengaruh angin muson barat (hujan) dan muson timur (kemarau).'],
    materialTitle: 'Iklim Tropis dan Musim di Indonesia',
    blocks: [
      { type: 'table', title: '2 Musim di Indonesia Akibat Angin Muson', headers: ['Musim', 'Perkiraan Bulan', 'Angin Penyebab', 'Ciri Utama'], rows: [
        ['Musim Hujan', 'Sekitar Oktober – Maret', 'Angin Muson Barat (Asia → Australia)', 'Membawa banyak uap air dari lautan → curah hujan tinggi'],
        ['Musim Kemarau', 'Sekitar April – September', 'Angin Muson Timur (Australia → Asia)', 'Melewati gurun Australia yang kering → curah hujan sedikit'],
      ]},
    ],
    activityTitle: 'Latihan: Iklim & Musim Indonesia',
    questions: [
      { text: 'Karena beriklim tropis, Indonesia mengalami dua musim utama yaitu...', opts: ['Salju dan gugur', 'Hujan dan kemarau', 'Semi dan dingin', 'Panas dan es'], ans: 1, exp: 'Iklim tropis memiliki musim penghujan dan musim kemarau.' },
      { text: 'Angin yang bertiup dari Benua Asia ke Australia membawa banyak uap air sehingga menyebabkan musim HUJAN di Indonesia adalah...', opts: ['Angin Muson Barat', 'Angin Muson Timur', 'Angin topan kutub', 'Angin darat'], ans: 0, exp: 'Muson Barat (Okt–Mar) memicu musim hujan.' },
      { text: 'Ciri utama iklim tropis adalah...', opts: ['Sinar matahari bersinar sepanjang tahun dan suhu relatif hangat', 'Salju turun 6 bulan', 'Tidak pernah hujan sama sekali', 'Malam hari 20 jam'], ans: 0, exp: 'Wilayah tropis mendapat penyinaran matahari penuh sepanjang tahun.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-05', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan pengaruh kondisi geografis Indonesia terhadap keragaman ekonomi, budaya, dan transportasi.'],
    materialTitle: 'Pengaruh Geografis terhadap Kehidupan Bangsa',
    blocks: [
      { type: 'visual_cards', title: 'Dampak Kondisi Geografis Indonesia', cards: [
        { emoji: '🚢', label: 'Transportasi Antarpulau', sub: 'Kapal laut (pelabuhan) dan pesawat terbang (bandara) sangat vital menghubungkan pulau-pulau!' },
        { emoji: '🎭', label: 'Keragaman Suku & Budaya', sub: 'Ribuan pulau melahirkan ratusan bahasa daerah, tarian, rumah adat, dan kuliner khas' },
        { emoji: '🌾', label: 'Ekonomi Beragam', sub: 'Kombinasi hasil laut (maritim), hasil bumi (agraris), industri, dan pariwisata' },
      ]},
    ],
    activityTitle: 'Latihan: Pengaruh Kondisi Geografis',
    questions: [
      { text: 'Karena Indonesia berbentuk negara kepulauan, sarana transportasi utama penghubung antarpulau adalah...', opts: ['Kapal laut dan pesawat terbang', 'Sepeda dan becak saja', 'Becak dan delman', 'Kereta bawah tanah saja'], ans: 0, exp: 'Pelayaran laut dan penerbangan udara menghubungkan pulau-pulau Nusantara.' },
      { text: 'Kondisi geografis kepulauan menyebabkan Indonesia memiliki keragaman suku dan budaya. Sikap kita yang tepat adalah...', opts: ['Saling menghormati sesuai semboyan Bhinneka Tunggal Ika', 'Hanya menghargai daerah sendiri', 'Mengejek budaya pulau lain', 'Membuat perpecahan'], ans: 0, exp: 'Bhinneka Tunggal Ika: berbeda-beda tetapi tetap satu jua.' },
      { text: 'Pelabuhan besar di pesisir Jawa Timur (seperti Surabaya dan Gresik) berkembang pesat karena...', opts: ['Terletak di jalur laut strategis yang memudahkan bongkar muat barang antarpulau', 'Berada di puncak gunung', 'Jauh dari laut', 'Selalu bersalju'], ans: 0, exp: 'Akses langsung ke Selat Madura/Laut Jawa mendukung logistik maritim.' },
    ],
  },

  // BAB 6: SEJARAH PERJUANGAN PAHLAWAN
  {
    topicCode: 'IPAS-SD5-06', subSeq: 1,
    objectives: ['Siswa mampu mengenal peran tokoh pahlawan nasional dalam merebut dan mempertahankan kemerdekaan Indonesia.'],
    materialTitle: 'Mengenal Tokoh Pahlawan Nasional',
    blocks: [
      { type: 'table', title: 'Tokoh Pahlawan Nasional yang Wajib Dikenal', headers: ['Tokoh Pahlawan', 'Peran Penting'], rows: [
        ['Ir. Soekarno & Drs. Moh. Hatta', 'Proklamator Kemerdekaan RI (17 Agustus 1945), Presiden & Wapres pertama'],
        ['Ki Hajar Dewantara', 'Bapak Pendidikan Nasional, pendiri Taman Siswa ("Tut Wuri Handayani")'],
        ['R.A. Kartini', 'Pelopor kebangkitan dan kesetaraan pendidikan perempuan Indonesia'],
        ['Jenderal Soedirman', 'Panglima Besar TNI, memimpin perang gerilya mempertahankan kemerdekaan'],
        ['Bung Tomo & KH Hasyim Asy\'ari', 'Pengobar semangat perjuangan rakyat Jawa Timur (10 November 1945 & Resolusi Jihad)'],
      ]},
    ],
    activityTitle: 'Latihan: Tokoh Pahlawan Nasional',
    questions: [
      { text: 'Dua tokoh Proklamator yang menandatangani teks Proklamasi atas nama bangsa Indonesia adalah...', opts: ['Ir. Soekarno dan Drs. Moh. Hatta', 'Jenderal Soedirman dan Bung Tomo', 'Ki Hajar Dewantara dan R.A. Kartini', 'Pangeran Diponegoro dan Pattimura'], ans: 0, exp: 'Soekarno-Hatta membacakan dan menandatangani Proklamasi 17 Agustus 1945.' },
      { text: 'Bapak Pendidikan Nasional yang melahirkan semboyan "Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani" adalah...', opts: ['Ki Hajar Dewantara', 'Bung Tomo', 'Dr. Soetomo', 'Imam Bonjol'], ans: 0, exp: 'Hari lahir Ki Hajar Dewantara (2 Mei) diperingati sebagai Hari Pendidikan Nasional.' },
      { text: 'Tokoh pengobar semangat arek-arek Surabaya melalui siaran radio pada Pertempuran 10 November 1945 adalah...', opts: ['Bung Tomo (Sutomo)', 'Pattimura', 'Sultan Hasanuddin', 'Cut Nyak Dien'], ans: 0, exp: 'Bung Tomo membakar semangat rakyat mempertahankan kemerdekaan di Surabaya.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-06', subSeq: 2,
    objectives: ['Siswa mampu mengenal perjuangan pahlawan di berbagai daerah Nusantara melawan penjajahan.'],
    materialTitle: 'Perjuangan di Berbagai Daerah Nusantara',
    blocks: [
      { type: 'flashcards', title: 'Pahlawan Daerah Nusantara (Klik!)', cards: [
        { emoji: '⚔️', front: 'Pangeran Diponegoro', back: 'Memimpin Perang Jawa (1825–1830) di Jawa Tengah/Yogyakarta' },
        { emoji: '⚔️', front: 'Cut Nyak Dien & Teuku Umar', back: 'Pahlawan gigih dari Aceh melawan kolonial Belanda' },
        { emoji: '⚔️', front: 'Tuanku Imam Bonjol', back: 'Memimpin Perang Padri di Sumatra Barat' },
        { emoji: '⚔️', front: 'Kapitan Pattimura', back: 'Memimpin perjuangan rakyat Maluku melawan monopoli VOC/Belanda' },
        { emoji: '⚔️', front: 'Sultan Hasanuddin', back: 'Dijuluki "Ayam Jantan dari Timur" dari Kerajaan Gowa, Sulawesi Selatan' },
      ]},
      { type: 'tip', text: 'Pelajaran sejarah penting: sebelum 1908 perjuangan masih bersifat KEDAERAHAN sehingga mudah dipecah belah (devide et impera). Setelah 1908 (Budi Utomo) dan Sumpah Pemuda 1928, bangsa Indonesia BERSATU secara nasional!' },
    ],
    activityTitle: 'Latihan: Perjuangan Daerah',
    questions: [
      { text: 'Sultan Hasanuddin dari Sulawesi Selatan mendapat julukan...', opts: ['Bapak Koperasi', 'Ayam Jantan dari Timur', 'Proklamator', 'Bapak Pramuka'], ans: 1, exp: 'Keberanian Sultan Hasanuddin membuatnya dijuluki Ayam Jantan dari Timur.' },
      { text: 'Kapitan Pattimura adalah pahlawan perlawanan rakyat dari daerah...', opts: ['Aceh', 'Maluku', 'Bali', 'Kalimantan'], ans: 1, exp: 'Pattimura (Thomas Matulessy) memimpin perlawanan di Saparua, Maluku.' },
      { text: 'Mengapa perjuangan sebelum tahun 1908 sering mengalami kekalahan?', opts: ['Karena masih bersifat kedaerahan dan belum bersatu secara nasional', 'Karena tidak ada pahlawan', 'Karena tidak punya semangat', 'Karena terlalu banyak negara'], ans: 0, exp: 'Perjuangan terpisah-pisah mudah dipatahkan politik adu domba penjajah.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-06', subSeq: 3,
    objectives: ['Siswa mampu mengurutkan tonggak peristiwa penting menuju dan mempertahankan kemerdekaan Indonesia.'],
    materialTitle: 'Peristiwa Penting Perjuangan Kemerdekaan',
    blocks: [
      { type: 'table', title: 'Linimasa Tonggak Sejarah Indonesia', headers: ['Tanggal', 'Peristiwa Penting', 'Maknanya'], rows: [
        ['20 Mei 1908', 'Berdirinya Budi Utomo (Dr. Soetomo dkk.)', 'Hari Kebangkitan Nasional — perjuangan lewat organisasi & pendidikan'],
        ['28 Oktober 1928', 'Sumpah Pemuda', 'Ikrar satu tanah air, satu bangsa, dan menjunjung bahasa persatuan Indonesia'],
        ['17 Agustus 1945', 'Proklamasi Kemerdekaan RI', 'Lahirnya negara merdeka Republik Indonesia'],
        ['10 November 1945', 'Pertempuran Surabaya', 'Hari Pahlawan — tekad rakyat mempertahankan kemerdekaan RI'],
      ]},
    ],
    activityTitle: 'Latihan: Peristiwa Penting Kemerdekaan',
    questions: [
      { text: 'Setiap tanggal 28 Oktober bangsa Indonesia memperingati hari...', opts: ['Kebangkitan Nasional', 'Sumpah Pemuda', 'Pahlawan', 'Pendidikan Nasional'], ans: 1, exp: 'Sumpah Pemuda diikrarkan pada 28 Oktober 1928.' },
      { text: 'Hari Pahlawan yang diperingati setiap 10 November mengenang peristiwa heroik...', opts: ['Pertempuran Surabaya 1945', 'Berdirinya Budi Utomo', 'Sumpah Pemuda', 'Perang Padri'], ans: 0, exp: 'Pertempuran 10 November 1945 di Surabaya menjadi simbol keberanian bangsa.' },
      { text: 'Urutan peristiwa sejarah Indonesia yang BENAR dari paling awal adalah...', opts: ['Proklamasi → Sumpah Pemuda → Budi Utomo', 'Budi Utomo (1908) → Sumpah Pemuda (1928) → Proklamasi (1945) → Pertempuran Surabaya (Nov 1945)', 'Sumpah Pemuda → Budi Utomo → Proklamasi', 'Pertempuran Surabaya → Proklamasi → Budi Utomo'], ans: 1, exp: 'Urutan kronologis: 1908 → 1928 → Agustus 1945 → November 1945.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-06', subSeq: 4,
    objectives: ['Siswa mampu meneladani nilai-nilai kepahlawanan dalam kehidupan sebagai pelajar masa kini.'],
    materialTitle: 'Meneladani Nilai Kepahlawanan',
    blocks: [
      { type: 'visual_cards', title: 'Cara Siswa SD Menjadi "Pahlawan Masa Kini"', cards: [
        { emoji: '📚', label: 'Belajar Sungguh-Sungguh', sub: 'Mengisi kemerdekaan dengan ilmu dan prestasi' },
        { emoji: '🤝', label: 'Rela Berkorban & Gotong Royong', sub: 'Peduli teman yang kesulitan, aktif menjaga kerukunan' },
        { emoji: '🇮🇩', label: 'Cinta Tanah Air', sub: 'Bangga produk lokal, ikut upacara dengan khidmat, menjaga lingkungan' },
        { emoji: '💪', label: 'Pantang Menyerah & Jujur', sub: 'Berani mengakui kesalahan, tidak menyontek saat ujian' },
      ]},
    ],
    activityTitle: 'Latihan: Nilai Kepahlawanan',
    questions: [
      { text: 'Sikap siswa kelas 5 SD yang mencerminkan semangat kepahlawanan di sekolah adalah...', opts: ['Belajar tekun, jujur saat ulangan, dan menjaga persatuan dengan teman', 'Bertengkar dengan kelas lain', 'Malas mengikuti upacara bendera', 'Merusak fasilitas sekolah'], ans: 0, exp: 'Mengisi kemerdekaan bagi pelajar adalah belajar rajin, jujur, dan bersatu.' },
      { text: 'Sikap "rela berkorban" para pahlawan dapat kita teladani secara sederhana dengan cara...', opts: ['Menyisihkan sebagian uang saku untuk membantu korban bencana', 'Mengambil barang teman', 'Menolak kerja bakti', 'Egois ingin menang sendiri'], ans: 0, exp: 'Berbagi untuk sesama melatih keikhlasan dan kepedulian.' },
      { text: 'Menghormati bendera Merah Putih dan menyanyikan Indonesia Raya dengan sikap sempurna saat upacara menunjukkan rasa...', opts: ['Cinta tanah air (nasionalisme)', 'Takut', 'Malas', 'Sombong'], ans: 0, exp: 'Menghargai simbol negara wujud cinta tanah air.' },
    ],
  },
  {
    topicCode: 'IPAS-SD5-06', subSeq: 5,
    objectives: ['Siswa mampu menelusuri informasi sejarah perjuangan di Jawa Timur dan lingkungan sekitarnya melalui sumber sejarah terverifikasi.'],
    materialTitle: 'Menelusuri Sejarah Perjuangan Daerah Secara Faktual',
    blocks: [
      { type: 'text', text: 'Wilayah Jawa Timur — termasuk Surabaya, Gresik, dan daerah sekitarnya — merupakan saksi penting semangat perjuangan rakyat mempertahankan kemerdekaan RI pada tahun 1945 (seperti dukungan rakyat, laskar pejuang, dan jaringan logistik sekitar Pertempuran Surabaya).' },
      { type: 'list', title: 'Cara Mempelajari Sejarah Lokal yang Terverifikasi', items: ['1. Kunjungi situs atau museum resmi daerah (misalnya Museum Daerah / Tugu Pahlawan Surabaya).', '2. Gunakan buku pelajaran Kemendikbud, arsip resmi pemerintah daerah, atau keterangan sejarawan.', '3. Perhatikan nama jalan atau monumen pahlawan di sekitar Gresik dan cari tahu riwayat faktualnya.', '4. Hindari mencampuradukkan kisah sejarah nyata dengan cerita yang belum jelas kebenarannya!'] },
      { type: 'teacher_note', text: 'Guru dapat mengajak siswa mengamati nama-nama jalan pahlawan di kecamatan sekitar tempat tinggal siswa di Gresik daratan dan mencocokkannya dengan biografi pahlawan resmi.' },
    ],
    activityTitle: 'Latihan: Sejarah Perjuangan Daerah',
    questions: [
      { text: 'Sumber belajar yang PALING tepercaya untuk mempelajari sejarah perjuangan di daerah kita adalah...', opts: ['Museum resmi, arsip daerah, dan buku sejarah terverifikasi', 'Kabar bohong tanpa sumber', 'Karangan fiksi bebas', 'Tebakan sendiri'], ans: 0, exp: 'Sejarah harus bersumber dari arsip, museum, dan literatur yang dapat diverifikasi.' },
      { text: 'Banyak jalan raya di Gresik dan Jawa Timur diberi nama tokoh pahlawan (mis. Jl. Dr. Soetomo, Jl. Jenderal Sudirman, Jl. RA Kartini) bertujuan untuk...', opts: ['Mengenang dan menghormati jasa para pahlawan bangsa', 'Membuat alamat jadi sulit', 'Hiasan semata', 'Mengganti nama kota'], ans: 0, exp: 'Penamaan jalan pahlawan menjaga ingatan generasi muda atas jasa mereka.' },
      { text: 'Sikap yang tepat saat mengunjungi monumen atau museum sejarah perjuangan adalah...', opts: ['Menjaga kebersihan, tidak mencoret-coret, dan membaca informasi dengan tertib', 'Mencoret dinding monumen', 'Berlari sambil merusak koleksi', 'Membuang sampah sembarangan'], ans: 0, exp: 'Merawat situs sejarah adalah bentuk penghormatan kepada para pejuang.' },
    ],
  },
];

upsertLessonsBatch('Kelas 5 SD — IPAS (6 Bab, 45 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

