import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: KEGIYATANKU SABEN DINA
  {
    topicCode: 'BJ-SD2-01', subSeq: 1,
    objectives: ['Siswa mengenal kosakata kegiatan sehari-hari dalam Bahasa Jawa.'],
    materialTitle: 'Kegiyatanku Saben Dina',
    blocks: [
      { type: 'visual_cards', title: 'Klik Kegiyatan Saben Dina!', items: [
        { visual: '⏰', label: 'Tangi turu', caption: 'Bangun tidur', speech: 'Tangi turu.' },
        { visual: '🚿', label: 'Adus', caption: 'Mandi', speech: 'Adus.' },
        { visual: '🍚', label: 'Sarapan / Mangan', caption: 'Sarapan / Makan', speech: 'Sarapan utawa mangan.' },
        { visual: '🏫', label: 'Budhal sekolah', caption: 'Berangkat sekolah', speech: 'Budhal sekolah.' },
        { visual: '📚', label: 'Sinau', caption: 'Belajar', speech: 'Sinau.' },
        { visual: '😴', label: 'Turu', caption: 'Tidur', speech: 'Turu.' },
      ]},
    ],
    activityTitle: 'Gladhen: Kegiatan Harian',
    questions: [
      { text: 'Tembung "Sinau" tegese...', opts: ['Makan', 'Tidur', 'Belajar', 'Mandi'], ans: 2, exp: 'Sinau = belajar.' },
      { text: 'Reresik awak nganggo banyu lan sabun diarani...', opts: ['Adus', 'Turu', 'Maca', 'Nulis'], ans: 0, exp: 'Adus = mandi.' },
      { text: 'Tembung "Tangi turu" tegese...', opts: ['Tidur malam', 'Bangun tidur', 'Berangkat sekolah', 'Bermain'], ans: 1, exp: 'Tangi turu = bangun tidur.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-01', subSeq: 2,
    objectives: ['Siswa mengenal kata kerja umum (maca, nulis, mlaku, mlayu, ngombe, nyapu).'],
    materialTitle: 'Tembung Kriya (Kata Kerja) Umum',
    blocks: [
      { type: 'flashcards', title: 'Tebak Artine Tembung Kriya!', cards: [
        { emoji: '📖', front: 'Maca', back: 'Membaca' },
        { emoji: '✏️', front: 'Nulis', back: 'Menulis' },
        { emoji: '🚶', front: 'Mlaku', back: 'Berjalan' },
        { emoji: '🥤', front: 'Ngombe', back: 'Minum' },
        { emoji: '🧹', front: 'Nyapu', back: 'Menyapu' },
      ]},
    ],
    activityTitle: 'Gladhen: Kata Kerja Umum',
    questions: [
      { text: 'Tembung "Ngombe" tegese...', opts: ['Makan', 'Minum', 'Berjalan', 'Menulis'], ans: 1, exp: 'Ngombe = minum.' },
      { text: 'Basa Jawane "Membaca" yaiku...', opts: ['Nulis', 'Maca', 'Mlaku', 'Turu'], ans: 1, exp: 'Maca = membaca.' },
      { text: 'Alya lagi ... jogan nganggo sapu.', opts: ['nyapu', 'ngombe', 'turu', 'mlayu'], ans: 0, exp: 'Nyapu = menyapu.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-01', subSeq: 3,
    objectives: ['Siswa mampu menyusun urutan kegiatan sehari-hari dalam kalimat Jawa sederhana.'],
    materialTitle: 'Urutan Kegiyatan Saben Dina',
    blocks: [
      { type: 'story_panel', title: 'Critane Bima', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Esuk aku tangi turu, banjur adus lan sarapan. Sawise iku aku budhal sekolah.' },
        { speaker: 'Alya', avatar: '👧', text: 'Sore aku dolanan lan sinau. Bengi aku turu.' },
      ]},
    ],
    activityTitle: 'Gladhen: Urutan Kegiatan',
    questions: [
      { text: 'Tembung "banjur" tegese...', opts: ['Lalu / kemudian', 'Berhenti', 'Tidak', 'Kemarin'], ans: 0, exp: 'Banjur = lalu/kemudian.' },
      { text: 'Urutan kegiyatan esuk sing bener yaiku...', opts: ['Tangi turu → Adus → Sarapan', 'Sarapan → Turu → Adus', 'Budhal sekolah → Tangi turu', 'Turu → Budhal sekolah'], ans: 0, exp: 'Bangun tidur, mandi, lalu sarapan.' },
      { text: 'Tembung "Sawise iku" tegese...', opts: ['Setelah itu', 'Sebelum itu', 'Jangan', 'Besok'], ans: 0, exp: 'Sawise iku = setelah itu.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-01', subSeq: 4,
    objectives: ['Siswa mengenal penanda waktu sederhana (esuk, awan, sore, bengi).'],
    materialTitle: 'Penanda Wektu: Esuk, Awan, Sore, Bengi',
    blocks: [
      { type: 'visual_cards', title: 'Klik Penanda Wektu Basa Jawa!', items: [
        { visual: '🌅', label: 'Esuk', caption: 'Pagi', speech: 'Esuk, artinya pagi.' },
        { visual: '☀️', label: 'Awan', caption: 'Siang', speech: 'Awan, artinya siang.' },
        { visual: '🌇', label: 'Sore', caption: 'Sore', speech: 'Sore.' },
        { visual: '🌙', label: 'Bengi', caption: 'Malam', speech: 'Bengi, artinya malam.' },
      ]},
    ],
    activityTitle: 'Gladhen: Penanda Waktu',
    questions: [
      { text: 'Basa Jawane "Siang" (ngoko) yaiku...', opts: ['Esuk', 'Awan', 'Sore', 'Bengi'], ans: 1, exp: 'Awan = siang.' },
      { text: 'Basa Jawane "Malam" (ngoko) yaiku...', opts: ['Esuk', 'Awan', 'Sore', 'Bengi'], ans: 3, exp: 'Bengi = malam.' },
      { text: 'Srengenge (matahari) mlethèk ing wayah...', opts: ['Esuk', 'Bengi', 'Tengah wengi', 'Sore'], ans: 0, exp: 'Matahari terbit di pagi hari (esuk).' },
    ],
  },

  // BAB 2: PANGGONAN ING OMAH
  {
    topicCode: 'BJ-SD2-02', subSeq: 1,
    objectives: ['Siswa mengenal nama ruangan di dalam rumah dalam Bahasa Jawa.'],
    materialTitle: 'Ruangan ing Omah',
    blocks: [
      { type: 'visual_cards', title: 'Klik Ruangan ing Omah!', items: [
        { visual: '🛋️', label: 'Ruang Tamu', caption: 'Nampa tamu', speech: 'Ruang tamu kanggo nampa tamu.' },
        { visual: '🛏️', label: 'Kamar Turu', caption: 'Panggonan turu', speech: 'Kamar turu.' },
        { visual: '🍳', label: 'Pawon', caption: 'Dapur', speech: 'Pawon, artinya dapur.' },
        { visual: '🚿', label: 'Jedhing / Kamar Adus', caption: 'Kamar mandi', speech: 'Jedhing utawa kamar adus.' },
      ]},
    ],
    activityTitle: 'Gladhen: Ruangan di Rumah',
    questions: [
      { text: 'Tembung "Pawon" tegese...', opts: ['Kamar tidur', 'Dapur', 'Teras', 'Halaman'], ans: 1, exp: 'Pawon = dapur.' },
      { text: 'Ibu masak sega lan sayur ing...', opts: ['Pawon', 'Kamar turu', 'Ruang tamu', 'Pekarangan'], ans: 0, exp: 'Memasak dilakukan di pawon (dapur).' },
      { text: 'Panggonan kanggo turu diarani...', opts: ['Pawon', 'Kamar turu', 'Jedhing', 'Teras'], ans: 1, exp: 'Kamar turu = kamar tidur.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-02', subSeq: 2,
    objectives: ['Siswa mengenal nama benda di dalam rumah dalam Bahasa Jawa.'],
    materialTitle: 'Barang-Barang ing Omah',
    blocks: [
      { type: 'flashcards', title: 'Klik Kanggo Ngerti Tegese!', cards: [
        { emoji: '🛏️', front: 'Kasur lan Bantal', back: 'Kasur dan bantal (ing kamar turu)' },
        { emoji: '🍽️', front: 'Piring lan Sendhok', back: 'Piring dan sendok (ing pawon)' },
        { emoji: '🪞', front: 'Pengilon', back: 'Cermin / kaca' },
        { emoji: '🪑', front: 'Meja lan Kursi', back: 'Meja dan kursi' },
      ]},
    ],
    activityTitle: 'Gladhen: Benda di Rumah',
    questions: [
      { text: 'Piring, gelas, lan wajan biasane ana ing...', opts: ['Pawon', 'Kamar turu', 'Teras', 'Genteng'], ans: 0, exp: 'Alat makan dan masak ada di pawon (dapur).' },
      { text: 'Tembung "Pengilon" tegese...', opts: ['Pintu', 'Cermin', 'Bantal', 'Lemari'], ans: 1, exp: 'Pengilon = cermin.' },
      { text: 'Kasur lan kemul (selimut) ana ing...', opts: ['Kamar turu', 'Pawon', 'Jedhing', 'Dalan'], ans: 0, exp: 'Kasur dan selimut ada di kamar tidur.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-02', subSeq: 3,
    objectives: ['Siswa mengenal kata letak benda dalam Bahasa Jawa (ndhuwur, ngisor, njero, njaba, sandhing).'],
    materialTitle: 'Panggonan / Letak Barang',
    blocks: [
      { type: 'visual_cards', title: 'Klik Tembung Letak Barang!', items: [
        { visual: '⬆️', label: 'Ing ndhuwur', caption: 'Di atas', speech: 'Ing ndhuwur, artinya di atas.' },
        { visual: '⬇️', label: 'Ing ngisor', caption: 'Di bawah', speech: 'Ing ngisor, artinya di bawah.' },
        { visual: '📦', label: 'Ing njero', caption: 'Di dalam', speech: 'Ing njero, artinya di dalam.' },
        { visual: '🌳', label: 'Ing njaba', caption: 'Di luar', speech: 'Ing njaba, artinya di luar.' },
      ]},
    ],
    activityTitle: 'Gladhen: Letak Benda',
    questions: [
      { text: 'Tembung "Ing ndhuwur" tegese...', opts: ['Di bawah', 'Di atas', 'Di dalam', 'Di luar'], ans: 1, exp: 'Ndhuwur = atas.' },
      { text: 'Tembung "Ing ngisor" tegese...', opts: ['Di atas', 'Di bawah', 'Di samping', 'Di depan'], ans: 1, exp: 'Ngisor = bawah.' },
      { text: 'Buku dilebokake ing ... tas.', opts: ['njero', 'njaba', 'ndhuwur gendheng', 'dalan'], ans: 0, exp: 'Njero = dalam.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-02', subSeq: 4,
    objectives: ['Siswa mampu membuat kalimat lokasi benda sederhana dalam Bahasa Jawa.'],
    materialTitle: 'Ukara Lokasi Barang ing Omah',
    blocks: [
      { type: 'story_panel', title: 'Ing Endi Bukuku?', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Bu, ing endi potlot (pensil) kula?' },
        { speaker: 'Ibu', avatar: '👩', text: 'Ana ing ndhuwur meja sinau, Le!' },
      ]},
    ],
    activityTitle: 'Gladhen: Ungkapan Lokasi',
    questions: [
      { text: 'Pitakon "Ing endi?" tegese...', opts: ['Siapa?', 'Di mana?', 'Kapan?', 'Berapa?'], ans: 1, exp: 'Ing endi = di mana.' },
      { text: '"Sepatuku ana ing ngisor rak." Tegese sepatu ana ing...', opts: ['Atas rak', 'Bawah rak', 'Dalam tas', 'Atas meja'], ans: 1, exp: 'Ngisor = bawah.' },
      { text: '"Kucing turu ing njaba omah." Tegese kucing turu ing...', opts: ['Dalam rumah', 'Luar rumah', 'Atas atap', 'Dapur'], ans: 1, exp: 'Njaba = luar.' },
    ],
  },

  // BAB 3: PANGGONAN ING SEKOLAH
  {
    topicCode: 'BJ-SD2-03', subSeq: 1,
    objectives: ['Siswa mengenal nama tempat di sekolah dalam Bahasa Jawa.'],
    materialTitle: 'Panggonan ing Sekolah',
    blocks: [
      { type: 'visual_cards', title: 'Klik Panggonan ing Sekolah!', items: [
        { visual: '🏫', label: 'Ruang Kelas', caption: 'Panggonan sinau', speech: 'Ruang kelas.' },
        { visual: '📚', label: 'Perpustakaan', caption: 'Maca lan nyilih buku', speech: 'Perpustakaan.' },
        { visual: '🌿', label: 'Latar / Lapangan', caption: 'Upacara lan olahraga', speech: 'Latar utawa lapangan.' },
        { visual: '🍱', label: 'Kantin', caption: 'Tuku panganan', speech: 'Kantin.' },
      ]},
    ],
    activityTitle: 'Gladhen: Tempat di Sekolah',
    questions: [
      { text: 'Panggonan kanggo maca lan nyilih buku ing sekolah yaiku...', opts: ['Kantin', 'Perpustakaan', 'Lapangan', 'Jedhing'], ans: 1, exp: 'Perpustakaan tempat membaca dan meminjam buku.' },
      { text: 'Upacara bendera ditindakake ing...', opts: ['Latar / lapangan sekolah', 'Pawon', 'Kamar turu', 'Kantin'], ans: 0, exp: 'Latar/lapangan dipakai untuk upacara.' },
      { text: 'Tembung "Latar" tegese...', opts: ['Halaman', 'Atap', 'Pintu', 'Meja'], ans: 0, exp: 'Latar = halaman.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-03', subSeq: 2,
    objectives: ['Siswa mengenal warga sekolah (Kepala Sekolah, Guru, Murid, Penjaga Sekolah).'],
    materialTitle: 'Warga Sekolah',
    blocks: [
      { type: 'flashcards', title: 'Kenali Warga Sekolah!', cards: [
        { emoji: '👩‍🏫', front: 'Pak Guru / Bu Guru', back: 'Sing mulang murid ing kelas' },
        { emoji: '🧒', front: 'Murid / Siswa', back: 'Bocah sing sinau ing sekolah' },
        { emoji: '🧹', front: 'Penjaga Sekolah', back: 'Sing njaga keamanan lan karesikan sekolah' },
      ]},
    ],
    activityTitle: 'Gladhen: Warga Sekolah',
    questions: [
      { text: 'Tembung "Mulang" tegese...', opts: ['Belajar', 'Mengajar', 'Bermain', 'Pulang'], ans: 1, exp: 'Mulang = mengajar.' },
      { text: 'Sing mulang pelajaran ing kelas yaiku...', opts: ['Guru', 'Sopir', 'Nelayan', 'Koki'], ans: 0, exp: 'Guru bertugas mengajar di kelas.' },
      { text: 'Marang kabeh warga sekolah kita kudu...', opts: ['Ngajeni lan sopan', 'Ngece', 'Ora peduli', 'Nesu'], ans: 0, exp: 'Ngajeni = menghormati.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-03', subSeq: 3,
    objectives: ['Siswa mengenal perlengkapan belajar dalam Bahasa Jawa.'],
    materialTitle: 'Piranti / Perlengkapan Sinau',
    blocks: [
      { type: 'visual_cards', title: 'Piranti Sinau ing Kelas!', items: [
        { visual: '📘', label: 'Buku', caption: 'Kanggo maca lan nulis', speech: 'Buku.' },
        { visual: '✏️', label: 'Potlot / Pensil', caption: 'Kanggo nulis', speech: 'Potlot utawa pensil.' },
        { visual: '📏', label: 'Garisan', caption: 'Kanggo nggaris', speech: 'Garisan.' },
        { visual: '🎒', label: 'Tas', caption: 'Wadhah buku', speech: 'Tas.' },
      ]},
    ],
    activityTitle: 'Gladhen: Perlengkapan Sekolah',
    questions: [
      { text: 'Piranti kanggo nggaris lurus diarani...', opts: ['Garisan', 'Sapu', 'Piring', 'Topi'], ans: 0, exp: 'Garisan = penggaris.' },
      { text: 'Tembung "Wadhah" tegese...', opts: ['Tempat / wadah', 'Berat', 'Panjang', 'Warna'], ans: 0, exp: 'Wadhah = wadah/tempat.' },
      { text: 'Piranti kanggo nulis ing buku yaiku...', opts: ['Potlot / pensil', 'Sendhok', 'Gelas', 'Bantal'], ans: 0, exp: 'Potlot = pensil.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-03', subSeq: 4,
    objectives: ['Siswa memahami instruksi kelas sederhana dalam Bahasa Jawa.'],
    materialTitle: 'Dhawuh / Instruksi Guru ing Kelas',
    blocks: [
      { type: 'flashcards', title: 'Pahami Dhawuh Guru!', cards: [
        { emoji: '🪑', front: 'Lungguha sing rapi!', back: 'Duduklah yang rapi!' },
        { emoji: '📖', front: 'Bukaken bukumu!', back: 'Bukalah bukumu!' },
        { emoji: '👂', front: 'Rungokna kanthi tenanan!', back: 'Dengarkan dengan sungguh-sungguh!' },
      ]},
    ],
    activityTitle: 'Gladhen: Instruksi Kelas',
    questions: [
      { text: 'Dhawuh "Lungguha sing rapi!" tegese...', opts: ['Berdirilah!', 'Duduklah yang rapi!', 'Pulanglah!', 'Tidurlah!'], ans: 1, exp: 'Lungguha = duduklah.' },
      { text: 'Tembung "Rungokna" tegese...', opts: ['Dengarkanlah', 'Tulislah', 'Bacalah', 'Lihatlah'], ans: 0, exp: 'Rungokna = dengarkanlah.' },
      { text: 'Yen guru ngendika "Bukaken bukumu!", murid kudu...', opts: ['Mbukak bukune', 'Nutup bukune', 'Mbuwang bukune', 'Mlaku metu'], ans: 0, exp: 'Bukaken = bukalah.' },
    ],
  },

  // BAB 4: PANGANAN LAN OMBENAN
  {
    topicCode: 'BJ-SD2-04', subSeq: 1,
    objectives: ['Siswa mengenal nama makanan dan minuman dalam Bahasa Jawa.'],
    materialTitle: 'Jeneng Panganan lan Ombenan',
    blocks: [
      { type: 'visual_cards', title: 'Klik Panganan lan Ombenan!', items: [
        { visual: '🍚', label: 'Sega', caption: 'Nasi', speech: 'Sega, artinya nasi.' },
        { visual: '🍗', label: 'Lawuh', caption: 'Lauk pauk', speech: 'Lawuh, artinya lauk.' },
        { visual: '🥬', label: 'Jangan / Sayur', caption: 'Sayur', speech: 'Jangan utawa sayur.' },
        { visual: '💧', label: 'Banyu Putih', caption: 'Air putih', speech: 'Banyu putih.' },
        { visual: '🍌', label: 'Gedhang', caption: 'Pisang', speech: 'Gedhang, artinya pisang.' },
      ]},
    ],
    activityTitle: 'Gladhen: Panganan & Ombenan',
    questions: [
      { text: 'Tembung "Sega" tegese...', opts: ['Roti', 'Nasi', 'Air', 'Gula'], ans: 1, exp: 'Sega = nasi.' },
      { text: 'Tembung "Gedhang" ing Basa Jawa tegese buah...', opts: ['Apel', 'Jeruk', 'Pisang', 'Mangga'], ans: 2, exp: 'Gedhang = pisang.' },
      { text: 'Tembung "Banyu" tegese...', opts: ['Api', 'Air', 'Tanah', 'Angin'], ans: 1, exp: 'Banyu = air.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-04', subSeq: 2,
    objectives: ['Siswa mengenal kosakata rasa dalam Bahasa Jawa (legi, asin, pedhes, kecut, pait).'],
    materialTitle: 'Werna-Werna Rasa (Legi, Asin, Pedhes, Kecut, Pait)',
    blocks: [
      { type: 'visual_cards', title: 'Klik Jeneng Rasa!', items: [
        { visual: '🍯', label: 'Legi', caption: 'Manis (gula, madu)', speech: 'Legi, artinya manis.' },
        { visual: '🧂', label: 'Asin', caption: 'Asin (uyah/garam)', speech: 'Asin.' },
        { visual: '🌶️', label: 'Pedhes', caption: 'Pedas (lombok/cabai)', speech: 'Pedhes, artinya pedas.' },
        { visual: '🍋', label: 'Kecut', caption: 'Asam (jeruk nipis)', speech: 'Kecut, artinya asam.' },
        { visual: '🌿', label: 'Pait', caption: 'Pahit (jamu pare)', speech: 'Pait, artinya pahit.' },
      ]},
    ],
    activityTitle: 'Gladhen: Rasa Panganan',
    questions: [
      { text: 'Gula lan madu rasane...', opts: ['Pait', 'Legi', 'Pedhes', 'Kecut'], ans: 1, exp: 'Legi = manis.' },
      { text: 'Lombok (cabai) rasane...', opts: ['Legi', 'Pedhes', 'Asin', 'Tawar'], ans: 1, exp: 'Pedhes = pedas.' },
      { text: 'Uyah (garam) rasane...', opts: ['Asin', 'Legi', 'Pait', 'Kecut'], ans: 0, exp: 'Uyah = garam, rasanya asin.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-04', subSeq: 3,
    objectives: ['Siswa mampu menyampaikan makanan/minuman kesukaan dalam Bahasa Jawa.'],
    materialTitle: 'Panganan Kesenenanku',
    blocks: [
      { type: 'story_panel', title: 'Kowe Seneng Panganan Apa?', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Aku seneng sega goreng lan jus jeruk. Rasane enak lan seger!' },
        { speaker: 'Bima', avatar: '👦', text: 'Kalau aku seneng soto ayam lan banyu putih.' },
      ]},
    ],
    activityTitle: 'Gladhen: Kesukaan Panganan',
    questions: [
      { text: 'Tembung "Seneng" ing ukara "Aku seneng soto" tegese...', opts: ['Tidak suka', 'Suka', 'Takut', 'Kenyang'], ans: 1, exp: 'Seneng = suka.' },
      { text: 'Minuman sehat sing apik diombe saben dina yaiku...', opts: ['Banyu putih', 'Ombenan kakehan gula', 'Banyu kotor', 'Minyak'], ans: 0, exp: 'Banyu putih (air putih) paling sehat.' },
      { text: 'Sadurunge mangan, kita kudu...', opts: ['Wisuh tangan lan ndonga', 'Langsung mangan ora wisuh', 'Mlaku-mlaku', 'Turu'], ans: 0, exp: 'Cuci tangan dan berdoa sebelum makan.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-04', subSeq: 4,
    objectives: ['Siswa mampu meminta dan menawarkan makanan dengan ungkapan sopan Bahasa Jawa.'],
    materialTitle: 'Nyuwun lan Nawani kanthi Sopan',
    blocks: [
      { type: 'flashcards', title: 'Ungkapan Sopan Nalika Mangan!', cards: [
        { emoji: '🙏', front: 'Nyuwun banyu putih, Bu.', back: 'Minta air putih, Bu.' },
        { emoji: '🍪', front: 'Mangga dipundhahar / dicicipi!', back: 'Silakan dimakan / dicicipi!' },
        { emoji: '😊', front: 'Matur nuwun, rasane enak banget.', back: 'Terima kasih, rasanya enak sekali.' },
      ]},
    ],
    activityTitle: 'Gladhen: Meminta & Menawarkan Sopan',
    questions: [
      { text: 'Yen arep njaluk banyu marang Ibu kanthi sopan, kita ngucapake...', opts: ['Bu, nyuwun banyu putih.', 'Jupukna banyu!', 'Endi banyune?!', 'Aku ngelak!'], ans: 0, exp: 'Memakai kata "nyuwun" lebih sopan kepada orang tua.' },
      { text: 'Nalika nawani tamu mangan jajan, kita ngucapake...', opts: ['Mangga dipuncicipi.', 'Aja dipangan!', 'Ndang mulih!', 'Entek!'], ans: 0, exp: '"Mangga" berarti silakan.' },
      { text: 'Tembung "Ngelak" tegese...', opts: ['Lapar', 'Haus', 'Kenyang', 'Mengantuk'], ans: 1, exp: 'Ngelak = haus, luwe = lapar.' },
    ],
  },

  // BAB 5: KEWAN ING SAKUPENGE
  {
    topicCode: 'BJ-SD2-05', subSeq: 1,
    objectives: ['Siswa mengenal nama hewan di lingkungan sekitar dalam Bahasa Jawa.'],
    materialTitle: 'Kewan ing Sakupenge Omah',
    blocks: [
      { type: 'visual_cards', title: 'Klik Jeneng Kewan ing Basa Jawa!', items: [
        { visual: '🐱', label: 'Kucing', caption: 'Kucing', speech: 'Kucing.' },
        { visual: '🐔', label: 'Pitik', caption: 'Ayam', speech: 'Pitik, artinya ayam.' },
        { visual: '🦆', label: 'Bebek', caption: 'Bebek', speech: 'Bebek.' },
        { visual: '🐐', label: 'Wedhus', caption: 'Kambing', speech: 'Wedhus, artinya kambing.' },
        { visual: '🐟', label: 'Iwak', caption: 'Ikan', speech: 'Iwak, artinya ikan.' },
        { visual: '🐦', label: 'Manuk', caption: 'Burung', speech: 'Manuk, artinya burung.' },
      ]},
    ],
    activityTitle: 'Gladhen: Nama Hewan Basa Jawa',
    questions: [
      { text: 'Basa Jawane "Ayam" yaiku...', opts: ['Wedhus', 'Pitik', 'Manuk', 'Iwak'], ans: 1, exp: 'Pitik = ayam.' },
      { text: 'Tembung "Manuk" tegese...', opts: ['Ikan', 'Burung', 'Kambing', 'Kucing'], ans: 1, exp: 'Manuk = burung.' },
      { text: 'Tembung "Wedhus" tegese...', opts: ['Sapi', 'Kambing', 'Bebek', 'Ayam'], ans: 1, exp: 'Wedhus = kambing.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-05', subSeq: 2,
    objectives: ['Siswa mampu menyebutkan ciri sederhana hewan dalam Bahasa Jawa.'],
    materialTitle: 'Ciri-Cirine Kewan',
    blocks: [
      { type: 'flashcards', title: 'Tebak Kewane Saka Cirine!', cards: [
        { emoji: '🐟', front: 'Urip ing banyu, duwe sirip, bisa nglangi', back: 'Iwak (Ikan)' },
        { emoji: '🐦', front: 'Duwe swiwi (sayap), bisa mabur ing langit', back: 'Manuk (Burung)' },
        { emoji: '🐐', front: 'Sikile papat, mangane suket (rumput)', back: 'Wedhus (Kambing)' },
      ]},
    ],
    activityTitle: 'Gladhen: Ciri Hewan',
    questions: [
      { text: 'Tembung "Swiwi" tegese...', opts: ['Kaki', 'Sayap', 'Ekor', 'Tanduk'], ans: 1, exp: 'Swiwi = sayap.' },
      { text: 'Manuk bisa ... ing awang-awang (langit).', opts: ['mabur (terbang)', 'nglangi (berenang)', 'mlaku', 'nyapu'], ans: 0, exp: 'Mabur = terbang.' },
      { text: 'Panganane wedhus yaiku...', opts: ['Suket (rumput)', 'Watu', 'Kertas', 'Wesi'], ans: 0, exp: 'Suket = rumput.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-05', subSeq: 3,
    objectives: ['Siswa mengenal suara hewan dalam Bahasa Jawa.'],
    materialTitle: 'Swarane Kewan',
    blocks: [
      { type: 'visual_cards', title: 'Rungokake Swarane Kewan!', items: [
        { visual: '🐓', label: 'Pitik Jago', caption: 'Kukuruyuk!', speech: 'Pitik jago kluruk: kukuruyuk!' },
        { visual: '🐱', label: 'Kucing', caption: 'Meong!', speech: 'Kucing swarane meong!' },
        { visual: '🐐', label: 'Wedhus', caption: 'Mbek!', speech: 'Wedhus swarane mbek!' },
        { visual: '🦆', label: 'Bebek', caption: 'Kwek-kwek!', speech: 'Bebek swarane kwek-kwek!' },
      ]},
    ],
    activityTitle: 'Gladhen: Suara Hewan',
    questions: [
      { text: 'Kewan sing swarane "Kukuruyuk" ing wayah esuk yaiku...', opts: ['Kucing', 'Pitik jago', 'Iwak', 'Wedhus'], ans: 1, exp: 'Pitik jago (ayam jantan) berkokok kukuruyuk.' },
      { text: 'Swarane wedhus (kambing) yaiku...', opts: ['Meong', 'Mbek', 'Kwek-kwek', 'Kukuruyuk'], ans: 1, exp: 'Wedhus bersuara mbek.' },
      { text: 'Kewan sing swarane "Meong" yaiku...', opts: ['Kucing', 'Bebek', 'Sapi', 'Manuk'], ans: 0, exp: 'Kucing bersuara meong.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-05', subSeq: 4,
    objectives: ['Siswa memahami cara sederhana merawat hewan peliharaan.'],
    materialTitle: 'Cara Ngrumat Kewan Peliharaan',
    blocks: [
      { type: 'list', title: 'Cara Ngrumat Kewan sing Bener', items: ['Dipakani lan diombeni kanthi ajeg (teratur).', 'Kandhange diresiki supaya ora mambu lan sehat.', 'Disayang lan ora disakiti.'] },
    ],
    activityTitle: 'Gladhen: Merawat Hewan',
    questions: [
      { text: 'Tembung "Ngrumat" tegese...', opts: ['Merawat', 'Mengusir', 'Menjual', 'Membuang'], ans: 0, exp: 'Ngrumat = merawat.' },
      { text: 'Kandhange kewan peliharaan kudu...', opts: ['Diresiki kanthi rutin', 'Ditinggal kotor', 'Ora tau dicek', 'Ditutup rapet tanpa hawa'], ans: 0, exp: 'Kandang bersih membuat hewan sehat.' },
      { text: 'Marang kewan peliharaan kita kudu...', opts: ['Nyakiti', 'Nyayangi lan menehi pakan', 'Ngejar-ngejar', 'Ora menehi ngombe'], ans: 1, exp: 'Hewan adalah makhluk hidup yang perlu disayangi dan diberi makan.' },
    ],
  },

  // BAB 6: UNGKAPAN SOPAN ING PADINAN
  {
    topicCode: 'BJ-SD2-06', subSeq: 1,
    objectives: ['Siswa membiasakan mengucapkan "Matur nuwun" saat dibantu atau diberi sesuatu.'],
    materialTitle: 'Ngucapake "Matur Nuwun"',
    blocks: [
      { type: 'story_panel', title: 'Matur Nuwun!', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Matur nuwun ya, Alya, wis nyilihi potlot!' },
        { speaker: 'Alya', avatar: '👧', text: 'Iya, padha-padha, Bima!' },
      ]},
    ],
    activityTitle: 'Gladhen: Matur Nuwun',
    questions: [
      { text: 'Kapan kita ngucapake "Matur nuwun"?', opts: ['Nalika ditulungi utawa diparingi barang', 'Nalika nesu', 'Nalika turu', 'Nalika nggawe salah'], ans: 0, exp: 'Matur nuwun = terima kasih.' },
      { text: 'Wangsulan kanggo "Matur nuwun" marang kanca yaiku...', opts: ['Padha-padha / sami-sami', 'Nyuwun pangapunten', 'Nuwun sewu', 'Sugeng dalu'], ans: 0, exp: 'Padha-padha / sami-sami = sama-sama.' },
      { text: 'Yen diparingi jajan dening Simbah, kita ngucapake...', opts: ['Matur nuwun, Mbah.', 'Sapa iki?', 'Aja!', 'Endi maneh?'], ans: 0, exp: 'Selalu ucapkan terima kasih kepada orang tua/simbah.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-06', subSeq: 2,
    objectives: ['Siswa mampu meminta bantuan dengan "Nyuwun tulung".'],
    materialTitle: 'Ngucapake "Nyuwun Tulung"',
    blocks: [
      { type: 'visual_cards', title: 'Tuladha Nyuwun Tulung!', items: [
        { visual: '🙏', label: 'Nyuwun tulung', caption: 'Minta tolong (sopan)', speech: 'Bu, kula nyuwun tulung.' },
        { visual: '🤝', label: 'Tulung ya', caption: 'Tolong ya (ke teman)', speech: 'Tulung ya, jupukna buku kuwi.' },
      ]},
    ],
    activityTitle: 'Gladhen: Nyuwun Tulung',
    questions: [
      { text: 'Yen butuh pitulungan marang guru utawa wong tuwa, kita ngucapake...', opts: ['Nyuwun tulung', 'Cepetan!', 'Jupukna!', 'Menenga!'], ans: 0, exp: 'Nyuwun tulung lebih halus dan sopan.' },
      { text: 'Sakwise ditulungi, aja lali ngucapake...', opts: ['Matur nuwun', 'Sugeng dalu', 'Pamit', 'Ora gelem'], ans: 0, exp: 'Selalu akhiri bantuan dengan matur nuwun.' },
      { text: 'Tembung "Pitulungan" tegese...', opts: ['Bantuan / pertolongan', 'Permainan', 'Makanan', 'Pelajaran'], ans: 0, exp: 'Pitulungan = pertolongan.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-06', subSeq: 3,
    objectives: ['Siswa mampu meminta maaf dengan "Nyuwun pangapunten" saat berbuat salah.'],
    materialTitle: 'Ngucapake "Nyuwun Pangapunten"',
    blocks: [
      { type: 'story_panel', title: 'Berani Minta Maaf', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Bu, kula nyuwun pangapunten, boten sengaja nyenggol gelas.' },
        { speaker: 'Ibu', avatar: '👩', text: 'Iya, ora apa-apa, Le. Lain wektu luwih ati-ati ya.' },
      ]},
    ],
    activityTitle: 'Gladhen: Nyuwun Pangapunten',
    questions: [
      { text: 'Ungkapan njaluk ngapura kanthi sopan ing Basa Jawa yaiku...', opts: ['Nyuwun pangapunten', 'Matur nuwun', 'Sugeng enjang', 'Mangga'], ans: 0, exp: 'Nyuwun pangapunten = mohon maaf.' },
      { text: 'Yen ora sengaja ngrusakake dolanane kanca, kita kudu...', opts: ['Mlayu ndhelik', 'Langsung nyuwun pangapunten kanthi jujur', 'Nuduh wong liya', 'Ngguyu'], ans: 1, exp: 'Jujur dan segera meminta maaf adalah sikap terpuji.' },
      { text: 'Tembung "Ati-ati" tegese...', opts: ['Berhati-hati', 'Tergesa-gesa', 'Berlari', 'Tidur'], ans: 0, exp: 'Ati-ati = berhati-hati.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-06', subSeq: 4,
    objectives: ['Siswa mampu meminta izin dengan sopan (misal izin ke kamar mandi atau meminjam barang).'],
    materialTitle: 'Nyuwun Izin kanthi Sopan',
    blocks: [
      { type: 'flashcards', title: 'Tuladha Nyuwun Izin!', cards: [
        { emoji: '🙋', front: 'Izin ke kamar mandi di kelas', back: '"Bu, kula nyuwun izin badhe dhateng jedhing."' },
        { emoji: '✏️', front: 'Izin meminjam barang teman', back: '"Aku oleh nyilih garisanmu sedhela?"' },
      ]},
    ],
    activityTitle: 'Gladhen: Meminta Izin',
    questions: [
      { text: 'Sadurunge nyilih barang duweke kanca, kita kudu...', opts: ['Langsung njupuk', 'Nyuwun izin dhisik', 'Ndhelikake', 'Meneng wae'], ans: 1, exp: 'Meminta izin dulu menghormati hak milik teman.' },
      { text: 'Tembung "Nyilih" tegese...', opts: ['Meminjam', 'Membeli', 'Membuang', 'Menjual'], ans: 0, exp: 'Nyilih = meminjam.' },
      { text: 'Yen arep metu kelas dhateng jedhing, kita nyuwun izin marang...', opts: ['Pak Guru / Bu Guru', 'Papan tulis', 'Meja', 'Tas'], ans: 0, exp: 'Meminta izin kepada guru yang mengajar di kelas.' },
    ],
  },
  {
    topicCode: 'BJ-SD2-06', subSeq: 5,
    objectives: ['Siswa mampu memberikan respons sopan dalam percakapan sehari-hari.'],
    materialTitle: 'Respons / Wangsulan Sopan',
    blocks: [
      { type: 'visual_cards', title: 'Klik Respons Sopan Basa Jawa!', items: [
        { visual: '🙏', label: 'Inggih, Bu', caption: 'Iya, Bu (sopan)', speech: 'Inggih, Bu.' },
        { visual: '😊', label: 'Sami-sami', caption: 'Sama-sama', speech: 'Sami-sami.' },
        { visual: '🤝', label: 'Mangga', caption: 'Silakan', speech: 'Mangga.' },
      ]},
    ],
    activityTitle: 'Gladhen: Respons Sopan',
    questions: [
      { text: 'Yen ditimbali (dipanggil) Bapak utawa Ibu, wangsulan sing paling sopan yaiku...', opts: ['Inggih, Pak / Dalem, Bu!', 'Apa sih?!', 'Opo!', 'Meneng wae'], ans: 0, exp: '"Inggih" atau "Dalem" adalah jawaban paling santun kepada orang tua.' },
      { text: 'Tembung "Inggih" tegese...', opts: ['Tidak', 'Iya (halus/krama)', 'Jangan', 'Belum'], ans: 1, exp: 'Inggih = iya (ragam krama).' },
      { text: 'Yen kanca nyuwun pangapunten, kita wangsuli kanthi becik...', opts: ['Iya, ora apa-apa.', 'Awas kowe!', 'Ora tak sepura!', 'Lunga kono!'], ans: 0, exp: 'Saling memaafkan menjaga persahabatan tetap rukun.' },
    ],
  },
];

upsertLessonsBatch('Kelas 2 SD — Bahasa Jawa (6 Bab, 25 Submateri)', LESSONS).catch((err) => {
  console.error(err);
  process.exit(1);
});

