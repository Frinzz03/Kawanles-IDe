import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: PACELATHON ING OMAH (Gresik Daratan)
  {
    topicCode: 'BJ-SD3-01', subSeq: 1,
    objectives: ['Siswa mampu memahami dan mempraktikkan percakapan (pacelathon) sopan bersama keluarga di rumah.'],
    materialTitle: 'Pacelathon Keluarga ing Omah',
    blocks: [
      { type: 'story_panel', title: 'Pacelathon Esuk ing Omah', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Sugeng enjang, Bu. Bima sampun rampung adus lan sarapan.' },
        { speaker: 'Ibu', avatar: '👩', text: 'Sugeng enjang, Le. Ayo diteliti dhisik buku lan potelote, aja nganti keri.' },
        { speaker: 'Bima', avatar: '👦', text: 'Inggih, Bu. Sampun kula lebetaken tas sedaya. Kula nyuwun pamit budhal sekolah.' },
      ]},
      { type: 'tip', text: 'Pacelathon artinya percakapan dua orang atau lebih. Kepada ayah, ibu, dan kakek-nenek, biasakan berbicara lembut dan sopan!' },
    ],
    activityTitle: 'Latihan: Pacelathon ing Omah',
    questions: [
      { text: 'Tembung "pacelathon" ing basa Indonesia tegese...', opts: ['Gambar', 'Percakapan / dialog', 'Tembang', 'Panganan'], ans: 1, exp: 'Pacelathon tegese omong-omongan utawa percakapan.' },
      { text: 'Sadurunge budhal sekolah marang wong tuwa, becike kita...', opts: ['Langsung mlayu', 'Nyuwun pamit lan salim kanthi sopan', 'Meneng wae', 'Turu maneh'], ans: 1, exp: 'Nyuwun pamit lan salim iku tatakrama ing kulawarga.' },
      { text: '"Sugeng enjang, Bu" diucapake ing wayah...', opts: ['Esuk (pagi)', 'Bengi (malam)', 'Sore', 'Tengah wengi'], ans: 0, exp: 'Enjang = esuk / pagi.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-01', subSeq: 2,
    objectives: ['Siswa mampu bertanya dan menjawab pertanyaan sederhana dalam Bahasa Jawa di lingkungan rumah.'],
    materialTitle: 'Takon lan Mangsuli ing Omah',
    blocks: [
      { type: 'flashcards', title: 'Tembung Pitakon Basa Jawa (Klik!)', cards: [
        { emoji: '❓', front: 'Apa / Punapa', back: 'Menanyakan benda/hal (Ibu masak punapa?)' },
        { emoji: '🧑', front: 'Sapa / Sinten', back: 'Menanyakan orang (Sinten ingkang rawuh?)' },
        { emoji: '📍', front: 'Ing ngendi / Wonten pundi', back: 'Menanyakan tempat (Bapak wonten pundi?)' },
        { emoji: '🕒', front: 'Kapan / Benjang punapa', back: 'Menanyakan waktu' },
      ]},
    ],
    activityTitle: 'Latihan: Takon & Mangsuli',
    questions: [
      { text: 'Tembung pitakon basa Jawa kanggo takon panggonan (tempat) yaiku...', opts: ['Sapa', 'Ing ngendi / Wonten pundi', 'Pira', 'Kepriye'], ans: 1, exp: '"Ing ngendi" (ngoko) / "Wonten pundi" (krama) kanggo takon panggonan.' },
      { text: 'Bapak: "Alya, kowe lagi ngapa, Nduk?" — Wangsulan sing sopan yaiku...', opts: ['Lagi sinau, Pak.', 'Kula nembe sinau matematika, Pak.', 'Aja ganggu!', 'Ora ngerti.'], ans: 1, exp: 'Nganggo basa krama alus marang bapak luwih sopan.' },
      { text: 'Tembung "sinten" ing basa Indonesia tegese...', opts: ['Di mana', 'Siapa', 'Kapan', 'Berapa'], ans: 1, exp: 'Sinten (krama) = sapa (ngoko) = siapa.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-01', subSeq: 3,
    objectives: ['Siswa mampu menerapkan etika bergiliran berbicara (nyemak lan ora nyela) saat berdialog.'],
    materialTitle: 'Giliran Micara lan Tatakrama Nyemak',
    blocks: [
      { type: 'visual_cards', title: 'Tatakrama Pacelathon', cards: [
        { emoji: '👂', label: 'Nyemak kanthi Tenanan', sub: 'Dengarkan sampai selesai sebelum menjawab' },
        { emoji: '🤐', label: 'Ora Nyela Omongan', sub: 'Jangan memotong pembicaraan orang tua atau kakak' },
        { emoji: '😊', label: 'Swara Alus lan Cetha', sub: 'Tidak membentak, menatap dengan hormat' },
      ]},
    ],
    activityTitle: 'Latihan: Giliran Micara',
    questions: [
      { text: 'Nalika ibu lagi ngendika (berbicara), sikap anak sing becik yaiku...', opts: ['Nyela omongane ibu', 'Ngrungokake kanthi tenang nganti rampung', 'Mlaku metu omah', 'Nyetel TV banter'], ans: 1, exp: 'Ngrungokake nganti rampung nuduhake rasa ngajeni.' },
      { text: 'Yen kepengin melu matur nalika wong tuwa lagi rembugan, luwih dhisik ngucap...', opts: ['Heh, menenga!', 'Nuwun sewu, kula badhe matur...', 'Awas!', 'Ora usah omong!'], ans: 1, exp: '"Nuwun sewu" tegese permisi.' },
      { text: 'Pacelathon bisa mlaku lancar lan rukun yen kabeh sing omong-omongan padha...', opts: ['Rebutan ngomong', 'Gantian micara lan saling ngajeni', 'Bengok-bengok', 'Meneng kabeh'], ans: 1, exp: 'Giliran berbicara nggawe komunikasi cetha lan rukun.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-01', subSeq: 4,
    objectives: ['Siswa mampu menggunakan ungkapan kesopanan sehari-hari Bahasa Jawa (matur nuwun, nyuwun pangapunten, nuwun sewu, nyuwun tulung).'],
    materialTitle: 'Ungkapan Saben Dina Basa Jawa',
    blocks: [
      { type: 'visual_cards', title: '4 Tembung Ajaib Basa Jawa (Klik!)', cards: [
        { emoji: '🙏', label: 'Matur nuwun', sub: 'Terima kasih' },
        { emoji: '🙇', label: 'Nyuwun pangapunten', sub: 'Minta maaf' },
        { emoji: '🚶', label: 'Nuwun sewu / Ndherek langkung', sub: 'Permisi / Numpang lewat' },
        { emoji: '🤝', label: 'Nyuwun tulung', sub: 'Minta tolong' },
      ]},
    ],
    activityTitle: 'Latihan: Ungkapan Saben Dina',
    questions: [
      { text: 'Nalika mlaku liwat ing ngarepe wong tuwa, kita ngucapake...', opts: ['Matur nuwun', 'Ndherek langkung / Nuwun sewu', 'Sugeng dalu', 'Ayo dolan'], ans: 1, exp: '"Ndherek langkung" tegese permisi numpang lewat.' },
      { text: 'Sawise diparingi jajan pudak dening simbah, kita ngucap...', opts: ['Nyuwun sewu', 'Matur nuwun, Mbah', 'Nyuwun pangapunten', 'Monggo'], ans: 1, exp: 'Matur nuwun = terima kasih.' },
      { text: 'Tegese "nyuwun pangapunten" yaiku...', opts: ['Minta tolong', 'Minta maaf', 'Permisi', 'Selamat tidur'], ans: 1, exp: 'Pangapunten = maaf.' },
    ],
  },

  // BAB 2: PACELATHON ING SEKOLAH
  {
    topicCode: 'BJ-SD3-02', subSeq: 1,
    objectives: ['Siswa mampu membedakan gaya pacelathon dengan teman sebaya (ngoko) dan dengan guru (krama) di sekolah.'],
    materialTitle: 'Pacelathon karo Kanca lan Guru',
    blocks: [
      { type: 'story_panel', title: 'Ing Kelas Sekolah', lines: [
        { speaker: 'Raka (marang Bima)', avatar: '👦', text: 'Bim, kowe wis nggarap tugas basa Jawa ta?' },
        { speaker: 'Bima (marang Raka)', avatar: '👦', text: 'Wis, Rak. Ayo dicek bareng sadurunge dikumpulake.' },
        { speaker: 'Raka (marang Bu Guru)', avatar: '👦', text: 'Bu Guru, buku tugasipun sampun kula kempalaken wonten meja.' },
      ]},
      { type: 'tip', text: 'Marang kanca raket nganggo basa NGOKO (kowe, wis, ayo). Marang Bapak/Ibu Guru nganggo basa KRAMA (sampun, kula, wonten).' },
    ],
    activityTitle: 'Latihan: Pacelathon karo Kanca & Guru',
    questions: [
      { text: 'Nalika matur marang Bapak utawa Ibu Guru, kita nggunakake basa...', opts: ['Ngoko kasar', 'Krama (sopan)', 'Basa teriak', 'Ora sopan'], ans: 1, exp: 'Marang guru nggunakake basa krama minangka tanda ngurmati.' },
      { text: 'Marang kanca sakelas sing wis akrab, umume kita ngomong nganggo basa...', opts: ['Ngoko lugu sing tetep sopan', 'Krama inggil kaku', 'Basa asing kabeh', 'Basa kasar'], ans: 0, exp: 'Ngoko lugu dipakai antar teman sebaya.' },
      { text: 'Sapaan sing trep nalika ketemu Bu Guru esuk ing sekolah yaiku...', opts: ['Heh, Bu!', 'Sugeng enjang, Bu Guru.', 'Sugeng dalu, Bu.', 'Kowe arep menyang ngendi, Bu?'], ans: 1, exp: 'Sugeng enjang = selamat pagi.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-02', subSeq: 2,
    objectives: ['Siswa mampu meminta izin dan meminta bantuan kepada guru atau teman dalam Bahasa Jawa.'],
    materialTitle: 'Nyuwun Izin lan Nyuwun Tulung ing Sekolah',
    blocks: [
      { type: 'flashcards', title: 'Ukara Minta Izin & Tulung (Klik!)', cards: [
        { emoji: '🚻', front: 'Izin menyang jedhing (toilet)', back: 'Nuwun sewu Bu, kula nyuwun izin badhe dhateng wingking.' },
        { emoji: '✏️', front: 'Nyilih potelot kanca', back: 'Rak, aku nyilih potelotmu sedhela ya!' },
        { emoji: '📖', front: 'Nyuwun tulung kanca', back: 'Sal, tulung jupukna buku ing rak iku ya!' },
      ]},
    ],
    activityTitle: 'Latihan: Nyuwun Izin & Tulung',
    questions: [
      { text: 'Ukara sopan kanggo nyuwun izin menyang kamar mandi marang Bu Guru yaiku...', opts: ['Bu, aku arep metu!', 'Nuwun sewu Bu, kula nyuwun izin badhe dhateng wingking.', 'Ayo menyang toilet, Bu!', 'Aku lunga dhisik ya!'], ans: 1, exp: '"Dhateng wingking" iku ungkapan alus kanggo menyang kamar mandi.' },
      { text: 'Tembung "nyilih" ing basa Indonesia tegese...', opts: ['Membeli', 'Meminjam', 'Membuang', 'Menjual'], ans: 1, exp: 'Nyilih = meminjam.' },
      { text: 'Sawise dibantu kanca njupukake buku, kita ngucap...', opts: ['Matur nuwun ya!', 'Awas!', 'Salahmu dhewe!', 'Menenga!'], ans: 0, exp: 'Ngucap matur nuwun nandhakake rasa syukur lan sopan.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-02', subSeq: 3,
    objectives: ['Siswa mampu menjawab pertanyaan guru di kelas dengan kalimat sopan dan jelas.'],
    materialTitle: 'Mangsuli Pitakonan ing Kelas',
    blocks: [
      { type: 'table', title: 'Conto Wangsulan Sopan marang Guru', headers: ['Pitakonan Guru', 'Wangsulan Sopan Siswa'], rows: [
        ['Sapa sing ora mlebu dina iki?', 'Kancanipun mlebet sedaya, Bu. / Bima boten mlebet amargi sakit, Bu.'],
        ['Apa wis rampung garapane?', 'Sampun rampung, Pak. / Dereng rampung, Pak.'],
        ['Wis paham kabeh, Cah?', 'Inggih, sampun paham, Bu!'],
      ]},
    ],
    activityTitle: 'Latihan: Mangsuli Pitakonan',
    questions: [
      { text: 'Basa krama saka tembung "durung" (belum) yaiku...', opts: ['Sampun', 'Dereng', 'Inggih', 'Boten'], ans: 1, exp: 'Durung (ngoko) = dereng (krama); wis = sampun.' },
      { text: 'Basa krama saka tembung "iya" yaiku...', opts: ['Boten', 'Inggih', 'Dereng', 'Sampun'], ans: 1, exp: 'Iya = inggih; ora = boten.' },
      { text: 'Nalika Bu Guru takon "Wis rampung, Le?" lan pancen wis rampung, kita mangsuli...', opts: ['Wis!', 'Sampun rampung, Bu.', 'Boten ngerti!', 'Dereng.'], ans: 1, exp: '"Sampun rampung, Bu" alus lan cetha.' },
    ],
  },

  // BAB 3: UNGGAH-UNGGUH BASA: NGOKO LAN KRAMA DASAR
  {
    topicCode: 'BJ-SD3-03', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan kapan bahasa Ngoko digunakan dalam kehidupan sehari-hari.'],
    materialTitle: 'Konteks Penggunaan Basa Ngoko',
    blocks: [
      { type: 'visual_cards', title: 'Kapan Kita Nganggo Basa Ngoko?', cards: [
        { emoji: '👧👦', label: 'Karo Kanca Sebaya', sub: 'Kanca sekolah, kanca dolan ing kampung' },
        { emoji: '👶', label: 'Marang Adhik / Sing Luwih Enom', sub: 'Kakak marang adhik kanthi sayang' },
        { emoji: '❤️', label: 'Tetep Sopan!', sub: 'Sanajan ngoko, tetep aja nganggo tembung kasar utawa misuh!' },
      ]},
    ],
    activityTitle: 'Latihan: Konteks Ngoko',
    questions: [
      { text: 'Basa ngoko paling trep digunakake nalika omong-omongan karo...', opts: ['Kepala sekolah', 'Kanca sakelas sing sebaya', 'Simbah kakung', 'Pak RT'], ans: 1, exp: 'Basa ngoko digunakake marang kanca sebaya utawa sing luwih enom.' },
      { text: 'Conto ukara basa ngoko yaiku...', opts: ['Kula badhe nedha sekul.', 'Aku arep mangan sega.', 'Ibu nembe dhahar.', 'Bapak tindak pasar.'], ans: 1, exp: 'Aku, arep, mangan, sega kabeh tembung ngoko.' },
      { text: 'Sanajan nganggo basa ngoko marang kanca, kita tetep kudu...', opts: ['Ngomong kasar', 'Nganggo tembung sing becik lan ora nglarani ati', 'Bengok-bengok', 'Ngece'], ans: 1, exp: 'Tatakrama tetep dijaga sanajan nganggo basa ngoko.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-03', subSeq: 2,
    objectives: ['Siswa mampu mengenal padanan kata Ngoko dan Krama dasar yang sering digunakan sehari-hari.'],
    materialTitle: 'Kosakata Ngoko lan Krama Dasar',
    blocks: [
      { type: 'table', title: 'Daftar Tembung Ngoko – Krama Dasar', headers: ['Basa Indonesia', 'Ngoko', 'Krama (Lugu/Alus)'], rows: [
        ['Saya', 'Aku', 'Kula'],
        ['Kamu / Anda', 'Kowe', 'Sampeyan / Panjenengan'],
        ['Makan', 'Mangan', 'Nedha (kula) / Dhahar (wong tuwa)'],
        ['Minum', 'Ngombe', 'Nginum / Ngunjuk (wong tuwa)'],
        ['Pergi', 'Lunga', 'Kesah (kula) / Tindak (wong tuwa)'],
        ['Tidur', 'Turu', 'Tilem (kula) / Sare (wong tuwa)'],
        ['Rumah', 'Omah', 'Griya / Dalem'],
      ]},
      { type: 'misconception', wrong: 'Bilang "Kula badhe dhahar" utawa "Kula badhe sare" kanggo awake dhewe.', right: 'Dhahar, tindak, lan sare iku Krama Inggil KHUSUS kanggo ngurmati wong tuwa/guru! Kanggo awake dhewe cukup: kula nedha, kula kesah, kula tilem.' },
    ],
    activityTitle: 'Latihan: Kosakata Ngoko & Krama',
    questions: [
      { text: 'Basa krama inggil saka "mangan" kanggo Bapak/Ibu yaiku...', opts: ['Mangan', 'Dhahar', 'Tilem', 'Tindak'], ans: 1, exp: 'Bapak dhahar (makan).' },
      { text: 'Ukara sing BENER kanggo awake dhewe yaiku...', opts: ['Kula badhe dhahar.', 'Kula badhe nedha.', 'Kula badhe sare.', 'Kula tindak sekolah.'], ans: 1, exp: 'Kanggo awake dhewe nganggo "nedha", dudu "dhahar".' },
      { text: 'Basa krama saka tembung "omah" yaiku...', opts: ['Griya / Dalem', 'Sekul', 'Toya', 'Mripat'], ans: 0, exp: 'Omah = griya/dalem.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-03', subSeq: 3,
    objectives: ['Siswa mampu memilih ragam bahasa yang sesuai berdasarkan lawan bicara.'],
    materialTitle: 'Milih Basa Miturut Lawan Bicara',
    blocks: [
      { type: 'flashcards', title: 'Cek Basa Sing Trep! (Klik!)', cards: [
        { emoji: '👵', front: 'Ngajak Simbah mangan:', back: 'Mbah, mangga dhahar rumiyin.' },
        { emoji: '👦', front: 'Ngajak kanca dolan:', back: 'Ayo dolan menyang lapangan!' },
        { emoji: '👨‍🏫', front: 'Takon marang Pak Guru:', back: 'Pak Guru, kula badhe nyuwun pirsa.' },
      ]},
    ],
    activityTitle: 'Latihan: Lawan Bicara',
    questions: [
      { text: 'Yen matur marang Simbah (kakek/nenek), kita kudu nganggo basa...', opts: ['Krama alus', 'Ngoko kasar', 'Basa gaul', 'Ora usah njawab'], ans: 0, exp: 'Simbah luwih sepuh, mula kudu diajeni nganggo basa krama.' },
      { text: 'Ukara "Bapak nembe ... menyang pasar Gresik." Tembung krama inggil sing trep yaiku...', opts: ['Lunga', 'Tindak', 'Mlayu', 'Turu'], ans: 1, exp: 'Tindak = pergi (krama inggil kanggo wong tuwa).' },
      { text: 'Unggah-ungguh basa Jawa tujuane supaya kita...', opts: ['Dadi sombong', 'Nduweni sopan santun lan ngajeni wong liya', 'Wedi ngomong', 'Lali basa Indonesia'], ans: 1, exp: 'Unggah-ungguh mujudake tatakrama lan rasa hormat.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-03', subSeq: 4,
    objectives: ['Siswa mampu menerapkan unggah-ungguh basa pada berbagai situasi nyata (di rumah, sekolah, pasar).'],
    materialTitle: 'Conto Situasi Unggah-Ungguh Basa',
    blocks: [
      { type: 'story_panel', title: 'Tuku Jajan ing Pasar Gresik', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Nuwun sewu, Bu. Pudakipun setunggal bungkus reginipun pinten?' },
        { speaker: 'Bu Bakul', avatar: '👩', text: 'Gangsal ewu rupiah, Nduk. Arep tuku pira?' },
        { speaker: 'Alya', avatar: '👧', text: 'Kula tumbas kalih bungkus, Bu. Punika armanipun, matur nuwun.' },
      ]},
      { type: 'tip', text: 'Pinten = berapa, tumbas = beli, kalih = dua, gangsal = lima.' },
    ],
    activityTitle: 'Latihan: Situasi Unggah-Ungguh',
    questions: [
      { text: 'Nalika tuku jajan marang ibu bakul sing luwih tuwa, tembung "tuku" luwih sopan diganti...', opts: ['Tumbas', 'Jupuk', 'Mangan', 'Mbuwang'], ans: 0, exp: 'Tuku (ngoko) = tumbas (krama).' },
      { text: 'Tembung "pinten" ing pacelathon pasar tegese...', opts: ['Siapa', 'Berapa', 'Di mana', 'Kapan'], ans: 1, exp: 'Pira (ngoko) = pinten (krama) = berapa.' },
      { text: 'Basa krama saka wilangan "loro" (2) yaiku...', opts: ['Setunggal', 'Kalih', 'Tiga', 'Sekawan'], ans: 1, exp: '1 = setunggal, 2 = kalih, 3 = tiga, 4 = sekawan, 5 = gangsal.' },
    ],
  },

  // BAB 4: MACA LAN NULIS UKARA BASA JAWA
  {
    topicCode: 'BJ-SD3-04', subSeq: 1,
    objectives: ['Siswa mampu mengenal kosakata benda, alam, dan kegiatan sehari-hari dalam Bahasa Jawa (Gresik daratan).'],
    materialTitle: 'Kosakata Saben Dina Basa Jawa',
    blocks: [
      { type: 'visual_cards', title: 'Kosakata Penting (Ngoko – Indonesia)', cards: [
        { emoji: '🍚', label: 'Sega / Sekul', sub: 'Nasi' },
        { emoji: '💧', label: 'Banyu / Toya', sub: 'Air' },
        { emoji: '🐟', label: 'Iwak / Ulam', sub: 'Ikan (kayata iwak bandeng)' },
        { emoji: '🛣️', label: 'Dalan / Margi', sub: 'Jalan' },
        { emoji: '📖', label: 'Sinau', sub: 'Belajar' },
        { emoji: '🧹', label: 'Nyapu', sub: 'Menyapu' },
      ]},
    ],
    activityTitle: 'Latihan: Kosakata Basa Jawa',
    questions: [
      { text: 'Tembung "toya" ing basa Indonesia tegese...', opts: ['Nasi', 'Air', 'Api', 'Angin'], ans: 1, exp: 'Banyu (ngoko) = toya (krama) = air.' },
      { text: 'Tembung "sinau" tegese...', opts: ['Tidur', 'Belajar', 'Bermain', 'Mandi'], ans: 1, exp: 'Sinau = belajar.' },
      { text: 'Basa krama saka "sega" (nasi) yaiku...', opts: ['Toya', 'Sekul', 'Griya', 'Margi'], ans: 1, exp: 'Sega = sekul.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-04', subSeq: 2,
    objectives: ['Siswa mampu memahami susunan kalimat Bahasa Jawa (Jejer, Wasesa, Lesan, Katrangan / JWLK).'],
    materialTitle: 'Susunan Ukara Basa Jawa (JWLK)',
    blocks: [
      { type: 'table', title: 'Pola Ukara J-W-L-K (Mirip SPOK!)', headers: ['Jejer (S)', 'Wasesa (P)', 'Lesan (O)', 'Katrangan (K)'], rows: [
        ['Alya', 'maca', 'buku crita', 'ing perpustakaan.'],
        ['Ibu', 'masak', 'iwak bandeng', 'ing pawon.'],
        ['Bima', 'nyapu', 'latar omah', 'saben esuk.'],
      ]},
      { type: 'tip', text: 'Jejer = Subjek, Wasesa = Predikat (tembung kriya), Lesan = Objek, Katrangan = Keterangan.' },
    ],
    activityTitle: 'Latihan: Susunan Ukara JWLK',
    questions: [
      { text: 'Ing ukara "Raka nulis layang ing kamar", tembung "Raka" dadi...', opts: ['Jejer (Subjek)', 'Wasesa (Predikat)', 'Lesan (Objek)', 'Katrangan'], ans: 0, exp: 'Raka minangka pelaku (Jejer).' },
      { text: 'Tembung "pawon" ing ukara "Ibu masak ing pawon" tegese...', opts: ['Halaman', 'Dapur', 'Kamar tidur', 'Pasar'], ans: 1, exp: 'Pawon = dapur.' },
      { text: 'Ing ukara "Salsa nyiram kembang ing taman", sing dadi Wasesa (kata kerja) yaiku...', opts: ['Salsa', 'nyiram', 'kembang', 'ing taman'], ans: 1, exp: '"Nyiram" iku tembung kriya (Wasesa).' },
    ],
  },
  {
    topicCode: 'BJ-SD3-04', subSeq: 3,
    objectives: ['Siswa mampu membaca, menyalin, dan menyusun kata acak menjadi kalimat Bahasa Jawa yang benar.'],
    materialTitle: 'Maca, Nyalin, lan Nata Ukara',
    blocks: [
      { type: 'worked_example', level: 'Nata Tembung Acak', question: 'Tata tembung acak iki: "ngombe – adhik – ing meja – susu"', steps: ['Goleki Jejer (pelaku): Adhik.', 'Goleki Wasesa (kegiatan): ngombe.', 'Goleki Lesan (objek): susu, banjur Katrangan: ing meja.'], answer: 'Adhik ngombe susu ing meja.' },
      { type: 'tip', text: 'Hati-hati beda bunyi "a" jejeg (dibaca o, misal: sega, maca, sapa) lan "a" miring (dibaca a, misal: bapak, pasar, omah)!' },
    ],
    activityTitle: 'Latihan: Nata Ukara Basa Jawa',
    questions: [
      { text: 'Tembung acak "maca – buku – Alya – ing kelas" yen ditata dadi ukara sing bener yaiku...', opts: ['Buku maca Alya ing kelas.', 'Alya maca buku ing kelas.', 'Ing kelas maca buku Alya.', 'Maca Alya ing kelas buku.'], ans: 1, exp: 'Alya (J) maca (W) buku (L) ing kelas (K).' },
      { text: 'Tembung "sapa" lan "maca" ing basa Jawa swarane diwaca miring apa jejeg (kaya "o")?', opts: ['Diwaca jejeg (sopo, moco)', 'Diwaca "i"', 'Diwaca "u"', 'Ora diwaca'], ans: 0, exp: 'Vokal "a" terbuka ing pungkasan kata basa Jawa diwaca jejeg (moco, sopo).' },
      { text: 'Wiwitan ukara lan jeneng wong nalika nyalin ukara basa Jawa kudu nganggo aksara...', opts: ['Cilik kabeh', 'Kapital (gedhe)', 'Angka', 'Tanda tanya'], ans: 1, exp: 'Aturan ejaan Latin basa Jawa nganggo aksara kapital ing wiwitan ukara lan jeneng.' },
    ],
  },

  // BAB 5: CRITA KEGIATAN SABEN DINA
  {
    topicCode: 'BJ-SD3-05', subSeq: 1,
    objectives: ['Siswa mampu mengurutkan kegiatan sehari-hari dari bangun tidur hingga malam dalam Bahasa Jawa.'],
    materialTitle: 'Urutan Kegiatan Saben Dina',
    blocks: [
      { type: 'visual_cards', title: 'Kegiatanku Saben Dina', cards: [
        { emoji: '🌅', label: 'Esuk (Pagi)', sub: 'Tangi turu, nata kasur, adus, sarapan, budhal sekolah' },
        { emoji: '☀️', label: 'Awan (Siang)', sub: 'Mulih sekolah, ganti klambi, mangan awan, ngaso' },
        { emoji: '🌇', label: 'Sore', sub: 'Ngaji / les, mbantu wong tuwa, dolan karo kanca' },
        { emoji: '🌙', label: 'Bengi (Malam)', sub: 'Sinau, nyiapake buku kanggo sesuk, turu' },
      ]},
    ],
    activityTitle: 'Latihan: Urutan Kegiatan',
    questions: [
      { text: 'Tembung "tangi turu" ing basa Indonesia tegese...', opts: ['Pergi tidur', 'Bangun tidur', 'Makan pagi', 'Pulang sekolah'], ans: 1, exp: 'Tangi = bangun, turu = tidur.' },
      { text: 'Sawise mulih sekolah ing wayah awan, kegiatan sing becik yaiku...', opts: ['Langsung turu nganggo seragam', 'Ganti klambi, wisuh tangan, lan mangan awan', 'Mbuwang tas', 'Dolanan nganti bengi'], ans: 1, exp: 'Ganti klambi lan cuci tangan njaga karesikan.' },
      { text: 'Tembung "mulih" ing basa Indonesia tegese...', opts: ['Berangkat', 'Pulang', 'Berlari', 'Duduk'], ans: 1, exp: 'Budhal = berangkat, mulih = pulang.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-05', subSeq: 2,
    objectives: ['Siswa mampu menggunakan penanda waktu dan urutan (esuk, awan, sore, bengi, banjur, sawise) dalam cerita.'],
    materialTitle: 'Penanda Wektu lan Urutan',
    blocks: [
      { type: 'flashcards', title: 'Tembung Penanda Wektu (Klik!)', cards: [
        { emoji: '⏰', front: 'Saben esuk', back: 'Setiap pagi' },
        { emoji: '➡️', front: 'Banjur / Nuli', back: 'Lalu / Kemudian' },
        { emoji: '✅', front: 'Sawise iku', back: 'Setelah itu' },
        { emoji: '🏁', front: 'Pungkasane', back: 'Akhirnya' },
      ]},
    ],
    activityTitle: 'Latihan: Penanda Wektu',
    questions: [
      { text: '"Esuk-esuk Bima adus, ... sarapan bareng kulawarga." Tembung penghubung urutan sing trep yaiku...', opts: ['Banjur', 'Amarga', 'Nanging', 'Utawa'], ans: 0, exp: '"Banjur" tegese lalu/kemudian.' },
      { text: 'Tembung "saben dina" ing basa Indonesia tegese...', opts: ['Kemarin', 'Setiap hari', 'Besok', 'Minggu depan'], ans: 1, exp: 'Saben = setiap, dina = hari.' },
      { text: 'Wayah srengenge angslup (matahari terbenam) diarani wayah...', opts: ['Esuk', 'Awan', 'Sore', 'Tengah wengi'], ans: 2, exp: 'Sore = menjelang petang saat matahari terbenam.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-05', subSeq: 3,
    objectives: ['Siswa mampu memahami isi teks pendek tentang kegiatan sehari-hari dalam Bahasa Jawa.'],
    materialTitle: 'Maca Teks Pendek Kegiatan Saben Dina',
    blocks: [
      { type: 'story_panel', title: 'Dina Minggu ing Omahe Salsa', lines: [
        { speaker: 'Wacan', avatar: '📄', text: 'Saben dina Minggu esuk, Salsa lan kulawargane resik-resik omah. Bapak ngresiki got ngarep omah. Ibu nyapu latar. Salsa mbantu nyiram tanduran kembang. Sawise rampung, kabeh padha sarapan sega krawu bareng kanthi seneng.' },
      ]},
    ],
    activityTitle: 'Latihan: Teks Kegiatan Saben Dina',
    questions: [
      { text: 'Adhedhasar wacan ing dhuwur, apa sing ditindakake Salsa dina Minggu esuk?', opts: ['Ngresiki got', 'Nyiram tanduran kembang', 'Turu nganti awan', 'Menyang sekolah'], ans: 1, exp: 'Ing teks tinulis: Salsa mbantu nyiram tanduran kembang.' },
      { text: 'Kapan kulawargane Salsa resik-resik omah?', opts: ['Dina Senin sore', 'Dina Minggu esuk', 'Dina Jumat bengi', 'Dina Rebo awan'], ans: 1, exp: 'Tinulis: Saben dina Minggu esuk.' },
      { text: 'Panganan khas Gresik sing didhahar kulawargane Salsa sawise kerja bakti yaiku...', opts: ['Sega krawu', 'Sate padang', 'Pempek', 'Papeda'], ans: 0, exp: 'Sega krawu iku panganan khas Gresik sing disebut ing wacan.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-05', subSeq: 4,
    objectives: ['Siswa mampu menceritakan kembali kegiatan sehari-harinya secara runtut dalam Bahasa Jawa.'],
    materialTitle: 'Nyritakake Maneh Kegiatan Saben Dina',
    blocks: [
      { type: 'list', title: 'Panduan Nyritakake Kegiatanmu', items: ['1. Sebutna jenengmu lan jam tangi turu.', '2. Critakna urutan kegiatan saka esuk nganti bengi nganggo tembung "banjur" lan "sawise iku".', '3. Sebutna kegiatan sing paling koksenengi ing omah utawa sekolah.'] },
    ],
    activityTitle: 'Latihan: Nyritakake Kegiatan',
    questions: [
      { text: 'Nalika nyritakake kegiatan saben dina marang kanca, urutane sing paling pas yaiku...', opts: ['Saka tangi esuk nganti turu bengi', 'Acak tanpa urutan', 'Turu bengi dhisik banjur esuk', 'Mung nyebut jeneng wae'], ans: 0, exp: 'Urutan kronologis gampang dingerteni sing ngrungokake.' },
      { text: 'Ukara "Aku tangi jam lima esuk, banjur nata paturon." Tembung "paturon" tegese...', opts: ['Meja makan', 'Tempat tidur', 'Sepatu', 'Pintu'], ans: 1, exp: 'Paturon = tempat tidur.' },
      { text: 'Swara nalika nyritakake pengalaman ing ngarep kelas kudune...', opts: ['Cetha lan mantep', 'Bisik-bisik', 'Kesusu banget', 'Isin ndhelik'], ans: 0, exp: 'Swara cetha nggawe kanca-kanca gampang nyemak.' },
    ],
  },

  // BAB 6: TEMBANG DOLANAN
  {
    topicCode: 'BJ-SD3-06', subSeq: 1,
    objectives: ['Siswa mampu mengenal dan menyimak contoh tembang dolanan populer Jawa (Gundhul Pacul, Cublak-Cublak Suweng, Padhang Bulan).'],
    materialTitle: 'Nyemak Tembang Dolanan',
    blocks: [
      { type: 'story_panel', title: 'Apa Iku Tembang Dolanan?', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Tembang dolanan yaiku lagu tradisional bocah Jawa sing ditembangake sinambi dolanan kanthi rasa seneng!' },
        { speaker: 'Alya', avatar: '👧', text: 'Kayata Gundhul-Gundhul Pacul, Cublak-Cublak Suweng, lan Padhang Bulan ya Bu!' },
      ]},
      { type: 'visual_cards', title: 'Conto Tembang Dolanan Populer', cards: [
        { emoji: '🌕', label: 'Padhang Bulan', sub: 'Ngajak dolanan bebarengan ing plataran nalika rembulan padhang' },
        { emoji: '🎶', label: 'Cublak-Cublak Suweng', sub: 'Ditembangake nalika dolanan tebak-tebakan kerikil/suweng' },
        { emoji: '🌾', label: 'Gundhul-Gundhul Pacul', sub: 'Piwulang supaya ora sombong lan tansah tanggung jawab' },
        { emoji: '🦆', label: 'Menthog-Menthog', sub: 'Piwulang supaya ora kesed (malas)' },
      ]},
    ],
    activityTitle: 'Latihan: Nyemak Tembang Dolanan',
    questions: [
      { text: 'Tembang dolanan biasane ditembangake dening bocah-bocah kanthi swasana...', opts: ['Sedih banget', 'Seneng lan gembira', 'Nesu', 'Wedi'], ans: 1, exp: 'Tembang dolanan nduweni watak ceria lan nyenengake.' },
      { text: 'Sing kalebu tembang dolanan Jawa yaiku...', opts: ['Padhang Bulan lan Menthog-Menthog', 'Indonesia Raya', 'Mengheningkan Cipta', 'Bagimu Negeri'], ans: 0, exp: 'Padhang Bulan lan Menthog-Menthog iku tembang dolanan tradisional.' },
      { text: 'Tembang dolanan sing ngelingake bocah supaya aja kesed (malas) yaiku...', opts: ['Menthog-Menthog', 'Padhang Bulan', 'Suwe Ora Jamu', 'Lir-Ilir'], ans: 0, exp: 'Menthog digambarake mung turu ing kandhang → piwulang aja kesed.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-06', subSeq: 2,
    objectives: ['Siswa mampu memahami kosakata khas yang terdapat dalam lirik tembang dolanan.'],
    materialTitle: 'Kosakata ing Tembang Dolanan',
    blocks: [
      { type: 'flashcards', title: 'Tegese Tembung ing Tembang Dolanan (Klik!)', cards: [
        { emoji: '🌕', front: 'Rembulan (Padhang Bulan)', back: 'Bulan purnama' },
        { emoji: '🏡', front: 'Njaba (Yo prakanca dolanan ing njaba)', back: 'Di luar (halaman)' },
        { emoji: '🌾', front: 'Wakule ngglimpang (Gundhul Pacul)', back: 'Bakul nasinya terguling/tumpah' },
        { emoji: '🦆', front: 'Megal-megol (Menthog-Menthog)', back: 'Berjalan bergoyang-goyang' },
      ]},
    ],
    activityTitle: 'Latihan: Kosakata Tembang Dolanan',
    questions: [
      { text: 'Ing tembang "Padhang Bulan", tembung "prakanca" tegese...', opts: ['Musuh', 'Para kanca (teman-teman)', 'Bapak ibu', 'Kewan'], ans: 1, exp: 'Prakanca = para kanca / teman-teman.' },
      { text: 'Tembung "wakul" ing tembang Gundhul-Gundhul Pacul tegese...', opts: ['Wadah nasi (bakul)', 'Topi', 'Sepatu', 'Piring kaca'], ans: 0, exp: 'Wakul = bakul wadah sega.' },
      { text: 'Tembung "padhang" tegese...', opts: ['Peteng (gelap)', 'Terang benderang', 'Adhem', 'Panas'], ans: 1, exp: 'Padhang = terang.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-06', subSeq: 3,
    objectives: ['Siswa mampu menemukan isi dan pesan moral (piwulang) dari tembang dolanan.'],
    materialTitle: 'Isi lan Piwulang Tembang Dolanan',
    blocks: [
      { type: 'table', title: 'Piwulang Luhur ing Tembang Dolanan', headers: ['Judul Tembang', 'Piwulang (Pesan Baik)'], rows: [
        ['Padhang Bulan', 'Syukur marang Gusti lan rukun dolanan karo kanca-kanca'],
        ['Menthog-Menthog', 'Aja dadi bocah kesed, kudu sregep nyambut gawe lan sinau'],
        ['Gundhul-Gundhul Pacul', 'Aja sombong (gembelengan) supaya tanggung jawab ora rusak'],
      ]},
    ],
    activityTitle: 'Latihan: Isi & Piwulang Tembang',
    questions: [
      { text: 'Piwulang (pesan moral) utama saka tembang "Menthog-Menthog" yaiku...', opts: ['Sregep lan aja kesed (malas)', 'Turu terus ing kandhang', 'Ngece kewan', 'Aja gelem mlaku'], ans: 0, exp: 'Tembang Menthog-Menthog ngelingake supaya ora kesed.' },
      { text: 'Tembang "Gundhul-Gundhul Pacul" ngajari kita supaya aja duwe sifat...', opts: ['Jujur', 'Sombong lan sembrono (gembelengan)', 'Sregep', 'Rukun'], ans: 1, exp: 'Sifat sembrono lan sombong njalari wakule ngglimpang.' },
      { text: 'Tembang dolanan ora mung kanggo dolanan, nanging uga ngemot...', opts: ['Piwulang budi pekerti sing becik', 'Angka perkalian', 'Resep masak', 'Peta dalan'], ans: 0, exp: 'Leluhur nglebokake piwulang luhur liwat tembang bocah.' },
    ],
  },
  {
    topicCode: 'BJ-SD3-06', subSeq: 4,
    objectives: ['Siswa mampu melafalkan dan menampilkan tembang dolanan sederhana dengan irama dan gerak ceria.'],
    materialTitle: 'Nembangake Tembang Dolanan',
    blocks: [
      { type: 'story_panel', title: 'Ayo Nembang Bareng: Padhang Bulan!', lines: [
        { speaker: 'Lirik', avatar: '🎵', text: 'Yo prakanca dolanan ing njaba / Padhang bulan padhange kaya rina / Rembulane kang ngawe-awe / Ngelingake aja padha turu sore.' },
      ]},
      { type: 'list', title: 'Tips Nampilake Tembang Dolanan', items: ['1. Lafalke saben tembung kanthi cetha (bedakna d/dh lan t/th).', '2. Tembangna kanthi irama kompak karo kanca-kanca.', '3. Tambahna tepuk tangan lan polah (gerak) sing ceria!'] },
    ],
    activityTitle: 'Latihan: Penampilan Tembang Dolanan',
    questions: [
      { text: 'Lanjutan lirik "Yo prakanca dolanan ing njaba, padhang bulan padhange kaya..." yaiku...', opts: ['Wengi', 'Rina (siang)', 'Udan', 'Banyu'], ans: 1, exp: 'Rina tegese awan/siang — bulane padhang banget kaya awan.' },
      { text: 'Supaya penampilan tembang dolanan ing kelas katon meriah, kita bisa nembang sinambi...', opts: ['Meneng kaku', 'Tepuk tangan lan obah kanthi kompak lan ceria', 'Mungkur saka penonton', 'Nangis'], ans: 1, exp: 'Gerak lan ekspresi ceria cocok karo watak tembang dolanan.' },
      { text: 'Melestarikan tembang dolanan penting supaya...', opts: ['Budaya daerah tetep lestari lan dikenal generasi enom', 'Lali karo lagu nasional', 'Ora usah sinau', 'Kelas dadi rame dhewe'], ans: 0, exp: 'Tembang dolanan minangka warisan budaya Jawa sing kudu dijaga.' },
    ],
  },
];

upsertLessonsBatch('Kelas 3 SD — Bahasa Jawa Gresik Daratan (6 Bab, 22 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

