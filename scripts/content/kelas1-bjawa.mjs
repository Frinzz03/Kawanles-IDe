import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: SINAU BASA JAWA (Gresik Daratan)
  {
    topicCode: 'BJ-SD1-01', subSeq: 1,
    objectives: ['Siswa mengenal Bahasa Jawa sebagai bahasa daerah yang digunakan sehari-hari di Gresik daratan.'],
    materialTitle: 'Sugeng Rawuh: Pengenalan Basa Jawa',
    blocks: [
      { type: 'story_panel', title: 'Ayo Sinau Basa Jawa!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Sugeng enjang, bocah-bocah! Basa Jawa iku basa daerah kita ing Gresik sing apik lan sopan.' },
        { speaker: 'Alya', avatar: '👧', text: 'Sugeng enjang, Bu! Aku seneng sinau Basa Jawa!' },
      ]},
      { type: 'visual_cards', title: 'Klik Tembung Dasar Basa Jawa!', items: [
        { visual: '🏠', label: 'Omah', caption: 'Rumah', speech: 'Omah. Artinya rumah.' },
        { visual: '📘', label: 'Buku', caption: 'Buku', speech: 'Buku.' },
        { visual: '👦', label: 'Bocah', caption: 'Anak', speech: 'Bocah. Artinya anak.' },
        { visual: '🏫', label: 'Sekolah', caption: 'Sekolah', speech: 'Sekolah.' },
      ]},
      { type: 'teacher_note', text: 'Catatan muatan lokal: Materi ini menggunakan Bahasa Jawa konteks Gresik daratan (bukan Bahasa Madura/Bawean). Validasi pelafalan lokal tetap dilakukan guru.' },
    ],
    activityTitle: 'Gladhen: Pengenalan Basa Jawa',
    questions: [
      { text: 'Tembung "Omah" ing Basa Indonesia tegese...', opts: ['Sekolah', 'Rumah', 'Pasar', 'Dalan'], ans: 1, exp: '"Omah" berarti rumah.' },
      { text: 'Tembung "Bocah" tegese...', opts: ['Anak', 'Guru', 'Buku', 'Meja'], ans: 0, exp: '"Bocah" berarti anak.' },
      { text: 'Basa daerah sing dienggo sinau ing wilayah Gresik daratan yaiku...', opts: ['Basa Jawa', 'Basa Inggris', 'Basa Jepang', 'Basa Jerman'], ans: 0, exp: 'Cakupan muatan lokal proyek untuk Gresik daratan adalah Bahasa Jawa.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-01', subSeq: 2,
    objectives: ['Siswa mengenal perbedaan bunyi vokal jejeg (a seperti "o" pada sapa) dan miring pada kosakata sederhana.'],
    materialTitle: 'Bunyi lan Pelafalan Kosakata Basa Jawa',
    blocks: [
      { type: 'paragraph', text: 'Ing Basa Jawa, huruf "a" ing tembung kaya "sapa" utawa "mata" diwaca rada mirip "o" (sopo, moto). Ayo rungokake lan tirukake bebarengan karo guru!' },
      { type: 'flashcards', title: 'Klik Kartu Tembung Basa Jawa!', cards: [
        { emoji: '👀', front: 'Mata', back: 'Diwaca: mɔtɔ (mata)' },
        { emoji: '❓', front: 'Sapa', back: 'Diwaca: sɔpɔ (siapa)' },
        { emoji: '🖐️', front: 'Lima', back: 'Diwaca: limɔ (lima)' },
        { emoji: '🌶️', front: 'Lombok', back: 'Tegese: cabai' },
      ]},
      { type: 'teacher_note', text: 'Bantu siswa menirukan langsung pelafalan alami guru (suara TTS Indonesia kadang membaca "a" tetap "a", jadi contoh langsung guru sangat penting).' },
    ],
    activityTitle: 'Gladhen: Pelafalan Basa Jawa',
    questions: [
      { text: 'Tembung "Sapa" ing Basa Jawa tegese...', opts: ['Apa', 'Siapa', 'Di mana', 'Kapan'], ans: 1, exp: '"Sapa" artinya siapa.' },
      { text: 'Tembung "Lombok" ing Basa Jawa tegese...', opts: ['Gula', 'Cabai', 'Garam', 'Beras'], ans: 1, exp: '"Lombok" artinya cabai.' },
      { text: 'Tembung "Lima" tegese angka...', opts: ['3', '4', '5', '6'], ans: 2, exp: '"Lima" berarti 5.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-01', subSeq: 3,
    objectives: ['Siswa mampu menggunakan sapaan sederhana dalam Bahasa Jawa.'],
    materialTitle: 'Sapaan Sederhana ing Basa Jawa',
    blocks: [
      { type: 'visual_cards', title: 'Klik Sapaan Sopan!', items: [
        { visual: '🙏', label: 'Matur nuwun', caption: 'Terima kasih', speech: 'Matur nuwun. Artinya terima kasih.' },
        { visual: '😔', label: 'Nyuwun pangapunten', caption: 'Mohon maaf', speech: 'Nyuwun pangapunten. Artinya mohon maaf.' },
        { visual: '🚶', label: 'Nuwun sewu', caption: 'Permisi', speech: 'Nuwun sewu. Artinya permisi.' },
      ]},
    ],
    activityTitle: 'Gladhen: Sapaan Sederhana',
    questions: [
      { text: 'Yen ditulungi kanca, kita ngucapake...', opts: ['Matur nuwun', 'Sugeng dalu', 'Mangga', 'Sapa'], ans: 0, exp: '"Matur nuwun" artinya terima kasih.' },
      { text: 'Ungkapan "Permisi" ing Basa Jawa yaiku...', opts: ['Nuwun sewu', 'Matur nuwun', 'Sugeng enjang', 'Sampun'], ans: 0, exp: '"Nuwun sewu" dipakai saat permisi lewat di depan orang.' },
      { text: 'Yen nggawe salah, kita ngucapake...', opts: ['Nyuwun pangapunten', 'Matur nuwun', 'Sugeng siang', 'Halo'], ans: 0, exp: '"Nyuwun pangapunten" artinya mohon maaf.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-01', subSeq: 4,
    objectives: ['Siswa membiasakan tutur kata santun kepada orang tua, guru, dan teman.'],
    materialTitle: 'Kebiasaan Berbahasa Sopan ing Omah lan Sekolah',
    blocks: [
      { type: 'story_panel', title: 'Bocah Sopan ing Omah', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Nuwun sewu, Bu. Kula badhe liwat.' },
        { speaker: 'Ibu', avatar: '👩', text: 'Iya, mangga, Le. Ati-ati ya!' },
      ]},
      { type: 'tip', text: 'Nalika mlaku ing ngarepe wong tuwa utawa guru, rada mbungkuk sithik lan ngucap "Nuwun sewu"!' },
    ],
    activityTitle: 'Gladhen: Kebiasaan Sopan',
    questions: [
      { text: 'Nalika mlaku ing ngarepe wong tuwa, kita ngucapake...', opts: ['Nuwun sewu', 'Awas!', 'Minggir!', 'Diam!'], ans: 0, exp: '"Nuwun sewu" (permisi) adalah sopan santun khas Jawa.' },
      { text: 'Ngomong marang Bapak lan Ibu kudu nganggo swara sing...', opts: ['Kasar lan banter', 'Alus lan sopan', 'Mbengok', 'Nesu'], ans: 1, exp: 'Berbicara kepada orang tua harus lembut dan sopan.' },
      { text: 'Tembung "Mangga" tegese...', opts: ['Silakan', 'Jangan', 'Pulang', 'Tidur'], ans: 0, exp: '"Mangga" berarti silakan.' },
    ],
  },

  // BAB 2: SALAM LAN PAMIT
  {
    topicCode: 'BJ-SD1-02', subSeq: 1,
    objectives: ['Siswa mampu mengucapkan salam dan berpamitan dengan santun dalam Bahasa Jawa.'],
    materialTitle: 'Salam lan Pamit',
    blocks: [
      { type: 'story_panel', title: 'Pamit Budhal Sekolah', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Bu, kula pamit budhal sekolah rumiyin. Assalamualaikum!' },
        { speaker: 'Ibu', avatar: '👩', text: 'Waalaikumsalam. Sing sregep sinau ya, Nduk!' },
      ]},
    ],
    activityTitle: 'Gladhen: Salam lan Pamit',
    questions: [
      { text: 'Sadurunge budhal sekolah, kita kudu ... marang Bapak lan Ibu.', opts: ['Pamit lan salim', 'Langsung mlayu', 'Meneng wae', 'Turu maneh'], ans: 0, exp: 'Berpamitan dan mencium tangan orang tua adalah kebiasaan baik.' },
      { text: 'Tembung "Budhal" tegese...', opts: ['Pulang', 'Berangkat', 'Tidur', 'Makan'], ans: 1, exp: '"Budhal" artinya berangkat.' },
      { text: 'Tembung "Sinau" tegese...', opts: ['Bermain', 'Belajar', 'Mandi', 'Makan'], ans: 1, exp: '"Sinau" artinya belajar.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-02', subSeq: 2,
    objectives: ['Siswa mengenal sapaan waktu: Sugeng enjang, Sugeng siang, Sugeng sonten, Sugeng dalu.'],
    materialTitle: 'Sapaan Miturut Wektu (Enjang, Siang, Sonten, Dalu)',
    blocks: [
      { type: 'visual_cards', title: 'Klik Sapaan Basa Jawa!', items: [
        { visual: '🌅', label: 'Sugeng Enjang', caption: 'Selamat pagi', speech: 'Sugeng enjang. Artinya selamat pagi.' },
        { visual: '☀️', label: 'Sugeng Siang', caption: 'Selamat siang', speech: 'Sugeng siang. Artinya selamat siang.' },
        { visual: '🌇', label: 'Sugeng Sonten', caption: 'Selamat sore', speech: 'Sugeng sonten. Artinya selamat sore.' },
        { visual: '🌙', label: 'Sugeng Dalu', caption: 'Selamat malam', speech: 'Sugeng dalu. Artinya selamat malam.' },
      ]},
    ],
    activityTitle: 'Gladhen: Sapaan Waktu',
    questions: [
      { text: 'Basa Jawane "Selamat pagi" yaiku...', opts: ['Sugeng dalu', 'Sugeng enjang', 'Sugeng sonten', 'Sugeng siang'], ans: 1, exp: 'Enjang = pagi.' },
      { text: '"Sugeng dalu" diucapake ing wayah...', opts: ['Esuk (pagi)', 'Awan (siang)', 'Sore', 'Bengi (malam)'], ans: 3, exp: 'Dalu = malam.' },
      { text: '"Sugeng sonten" tegese...', opts: ['Selamat pagi', 'Selamat siang', 'Selamat sore', 'Selamat malam'], ans: 2, exp: 'Sonten = sore.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-02', subSeq: 3,
    objectives: ['Siswa mampu menjawab sapaan sederhana dengan tepat.'],
    materialTitle: 'Wangsulan (Respons) Sapaan Sederhana',
    blocks: [
      { type: 'flashcards', title: 'Klik untuk Lihat Jawabannya!', cards: [
        { emoji: '🌅', front: 'Sugeng enjang!', back: 'Sugeng enjang!' },
        { emoji: '🙏', front: 'Matur nuwun!', back: 'Sami-sami!' },
        { emoji: '😊', front: 'Piye kabare?', back: 'Sae / Apik!' },
      ]},
    ],
    activityTitle: 'Gladhen: Respons Sapaan',
    questions: [
      { text: 'Yen kanca ngucap "Matur nuwun", kita wangsuli...', opts: ['Sami-sami', 'Sugeng dalu', 'Nuwun sewu', 'Pamit'], ans: 0, exp: '"Sami-sami" artinya sama-sama.' },
      { text: 'Pitakon "Piye kabare?" tegese...', opts: ['Siapa namamu?', 'Bagaimana kabarmu?', 'Di mana rumahmu?', 'Mau ke mana?'], ans: 1, exp: '"Piye kabare?" artinya bagaimana kabarmu?' },
      { text: 'Tembung "Sae" tegese...', opts: ['Baik', 'Sakit', 'Sedih', 'Lapar'], ans: 0, exp: '"Sae" (krama) artinya baik.' },
    ],
  },

  // BAB 3: KULAWARGAKU
  {
    topicCode: 'BJ-SD1-03', subSeq: 1,
    objectives: ['Siswa mengenal sebutan anggota keluarga dalam Bahasa Jawa.'],
    materialTitle: 'Sebutan Anggota Kulawarga',
    blocks: [
      { type: 'visual_cards', title: 'Klik Anggota Kulawarga!', items: [
        { visual: '👨', label: 'Bapak', caption: 'Ayah', speech: 'Bapak.' },
        { visual: '👩', label: 'Ibu', caption: 'Ibu', speech: 'Ibu.' },
        { visual: '👦', label: 'Mas / Kakang', caption: 'Kakak laki-laki', speech: 'Mas utawa kakang.' },
        { visual: '👧', label: 'Mbak', caption: 'Kakak perempuan', speech: 'Mbak.' },
        { visual: '👶', label: 'Adhik', caption: 'Adik', speech: 'Adhik.' },
      ]},
    ],
    activityTitle: 'Gladhen: Sebutan Kulawarga',
    questions: [
      { text: 'Sebutan kanggo kakak perempuan ing Basa Jawa yaiku...', opts: ['Mas', 'Mbak', 'Adhik', 'Pakdhe'], ans: 1, exp: 'Kakak perempuan biasa dipanggil Mbak.' },
      { text: 'Sebutan kanggo kakak laki-laki ing Basa Jawa yaiku...', opts: ['Mbak', 'Mas', 'Budhe', 'Simbah'], ans: 1, exp: 'Kakak laki-laki biasa dipanggil Mas.' },
      { text: 'Kakek lan Nenek ing Basa Jawa uga diarani...', opts: ['Simbah / Eyang', 'Adhik', 'Mas', 'Mbak'], ans: 0, exp: 'Kakek dan nenek disebut Simbah atau Eyang.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-03', subSeq: 2,
    objectives: ['Siswa mengenal hubungan keluarga besar (Simbah, Pakdhe, Budhe, Paklik, Bulik).'],
    materialTitle: 'Hubungan Kulawarga Besar',
    blocks: [
      { type: 'flashcards', title: 'Kenali Sebutan Keluarga Besar!', cards: [
        { emoji: '👴👵', front: 'Simbah / Eyang', back: 'Kakek / Nenek' },
        { emoji: '👨', front: 'Pakdhe', back: 'Kakak laki-laki Bapak/Ibu' },
        { emoji: '👩', front: 'Budhe', back: 'Kakak perempuan Bapak/Ibu' },
        { emoji: '🧑', front: 'Paklik / Bulik', back: 'Adik Bapak/Ibu (Paman/Bibi)' },
      ]},
    ],
    activityTitle: 'Gladhen: Hubungan Kulawarga',
    questions: [
      { text: 'Adik perempuan dari Bapak atau Ibu dipanggil...', opts: ['Budhe', 'Bulik', 'Simbah', 'Mbak'], ans: 1, exp: 'Adik perempuan ayah/ibu dipanggil Bulik (bibi).' },
      { text: 'Kakak laki-laki dari Bapak atau Ibu dipanggil...', opts: ['Pakdhe', 'Paklik', 'Adhik', 'Mas'], ans: 0, exp: 'Kakak laki-laki ayah/ibu dipanggil Pakdhe.' },
      { text: 'Wong tuwane Bapak lan Ibu diarani...', opts: ['Paklik', 'Simbah', 'Adhik', 'Kanca'], ans: 1, exp: 'Orang tua ayah dan ibu disebut Simbah.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-03', subSeq: 3,
    objectives: ['Siswa mampu memperkenalkan anggota keluarga dengan kalimat Jawa sederhana.'],
    materialTitle: 'Ngenalake Kulawargaku',
    blocks: [
      { type: 'story_panel', title: 'Tuladha Ngenalake Kulawarga', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Jenengku Alya. Bapakku asmane Pak Hadi, ibuku asmane Bu Siti. Aku duwe adhik siji.' },
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Pinter banget, Alya! Kulawargamu rukun ya.' },
      ]},
    ],
    activityTitle: 'Gladhen: Ngenalake Kulawarga',
    questions: [
      { text: 'Tembung "Jenengku" tegese...', opts: ['Rumahku', 'Namaku', 'Kelasku', 'Bukuku'], ans: 1, exp: '"Jenengku" artinya namaku.' },
      { text: 'Kanggo nyebut jenenge wong tuwa luwih sopan nganggo tembung...', opts: ['Asmane', 'Omahe', 'Sepatune', 'Bukune'], ans: 0, exp: '"Asmane" adalah krama inggil untuk "namanya".' },
      { text: '"Aku duwe adhik siji" tegese...', opts: ['Aku punya satu adik', 'Aku punya dua adik', 'Aku tidak punya adik', 'Aku punya satu kakak'], ans: 0, exp: 'Siji = satu.' },
    ],
  },

  // BAB 4: ANGGOTA BADAN
  {
    topicCode: 'BJ-SD1-04', subSeq: 1,
    objectives: ['Siswa mengenal nama bagian tubuh dalam Bahasa Jawa (ngoko dasar).'],
    materialTitle: 'Perangan Awak (Bagian Tubuh)',
    blocks: [
      { type: 'visual_cards', title: 'Klik Nama Bagian Tubuh ing Basa Jawa!', items: [
        { visual: '🙂', label: 'Sirah', caption: 'Kepala', speech: 'Sirah. Artinya kepala.' },
        { visual: '👀', label: 'Mripat', caption: 'Mata', speech: 'Mripat. Artinya mata.' },
        { visual: '👂', label: 'Kuping', caption: 'Telinga', speech: 'Kuping. Artinya telinga.' },
        { visual: '👃', label: 'Irung', caption: 'Hidung', speech: 'Irung. Artinya hidung.' },
        { visual: '🙌', label: 'Tangan', caption: 'Tangan', speech: 'Tangan.' },
        { visual: '🦶', label: 'Sikil', caption: 'Kaki', speech: 'Sikil. Artinya kaki.' },
      ]},
    ],
    activityTitle: 'Gladhen: Bagian Tubuh',
    questions: [
      { text: 'Basa Jawane "Kepala" yaiku...', opts: ['Sikil', 'Sirah', 'Kuping', 'Irung'], ans: 1, exp: 'Sirah = kepala.' },
      { text: 'Tembung "Sikil" tegese...', opts: ['Tangan', 'Mata', 'Kaki', 'Hidung'], ans: 2, exp: 'Sikil = kaki.' },
      { text: 'Tembung "Kuping" tegese...', opts: ['Hidung', 'Mulut', 'Telinga', 'Rambut'], ans: 2, exp: 'Kuping = telinga.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-04', subSeq: 2,
    objectives: ['Siswa mampu menyebutkan kegunaan sederhana bagian tubuh dalam Bahasa Jawa.'],
    materialTitle: 'Gunane Perangan Awak',
    blocks: [
      { type: 'flashcards', title: 'Apa Gunane? Klik Kartunya!', cards: [
        { emoji: '👀', front: 'Mripat', back: 'Kanggo ndeleng (melihat)' },
        { emoji: '👂', front: 'Kuping', back: 'Kanggo ngrungokake (mendengar)' },
        { emoji: '🦶', front: 'Sikil', back: 'Kanggo mlaku (berjalan)' },
        { emoji: '🙌', front: 'Tangan', back: 'Kanggo nyekel / nulis (memegang/menulis)' },
      ]},
    ],
    activityTitle: 'Gladhen: Gunane Perangan Awak',
    questions: [
      { text: 'Mripat digunakake kanggo...', opts: ['Ndeleng (melihat)', 'Mlaku (berjalan)', 'Ngrungokake (mendengar)', 'Mangan'], ans: 0, exp: 'Mripat (mata) untuk melihat (ndeleng).' },
      { text: 'Perangan awak sing digunakake kanggo mlaku yaiku...', opts: ['Kuping', 'Irung', 'Sikil', 'Sirah'], ans: 2, exp: 'Sikil (kaki) untuk berjalan (mlaku).' },
      { text: 'Kuping digunakake kanggo...', opts: ['Nulis', 'Ngrungokake swara', 'Mlaku', 'Mangan'], ans: 1, exp: 'Kuping (telinga) untuk mendengar suara.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-04', subSeq: 3,
    objectives: ['Siswa memahami instruksi sederhana terkait anggota badan dan kebersihan diri.'],
    materialTitle: 'Dhawuh Sederhana lan Njaga Resike Awak',
    blocks: [
      { type: 'visual_cards', title: 'Ayo Tindakake!', items: [
        { visual: '🧼', label: 'Wisuh tangan', caption: 'Cuci tangan', speech: 'Wisuh tangan sadurunge mangan.' },
        { visual: '🪥', label: 'Sikatan untu', caption: 'Gosok gigi', speech: 'Sikatan untu sadurunge turu.' },
        { visual: '🙌', label: 'Angkat tangan', caption: 'Angkat tanganmu', speech: 'Angkat tangan yen arep takon.' },
      ]},
    ],
    activityTitle: 'Gladhen: Instruksi Anggota Badan',
    questions: [
      { text: 'Sadurunge mangan, kita kudu...', opts: ['Wisuh tangan (cuci tangan)', 'Turu', 'Main lemah', 'Lari'], ans: 0, exp: 'Wisuh tangan menjaga tangan tetap bersih dari kuman.' },
      { text: 'Tembung "Untu" tegese...', opts: ['Rambut', 'Gigi', 'Kuku', 'Jari'], ans: 1, exp: 'Untu = gigi.' },
      { text: 'Yen arep takon marang guru ing kelas, kita kudu...', opts: ['Ngangkat tangan kanthi sopan', 'Mbengok banter', 'Mlayu metu', 'Turu'], ans: 0, exp: 'Mengangkat tangan menunjukkan kesopanan di kelas.' },
    ],
  },

  // BAB 5: WERNA LAN BARANG
  {
    topicCode: 'BJ-SD1-05', subSeq: 1,
    objectives: ['Siswa mengenal nama warna dasar dalam Bahasa Jawa (abang, putih, biru, ijo, kuning, ireng).'],
    materialTitle: 'Jeneng Werna ing Basa Jawa',
    blocks: [
      { type: 'visual_cards', title: 'Klik Werna-Werna Basa Jawa!', items: [
        { visual: '🔴', label: 'Abang', caption: 'Merah', speech: 'Abang. Artinya merah.' },
        { visual: '⚪', label: 'Putih', caption: 'Putih', speech: 'Putih.' },
        { visual: '🔵', label: 'Biru', caption: 'Biru', speech: 'Biru.' },
        { visual: '🟢', label: 'Ijo', caption: 'Hijau', speech: 'Ijo. Artinya hijau.' },
        { visual: '🟡', label: 'Kuning', caption: 'Kuning', speech: 'Kuning.' },
        { visual: '⚫', label: 'Ireng', caption: 'Hitam', speech: 'Ireng. Artinya hitam.' },
      ]},
    ],
    activityTitle: 'Gladhen: Nama Warna Basa Jawa',
    questions: [
      { text: 'Basa Jawane warna "Merah" yaiku...', opts: ['Ireng', 'Abang', 'Ijo', 'Putih'], ans: 1, exp: 'Abang = merah.' },
      { text: 'Tembung "Ireng" tegese warna...', opts: ['Putih', 'Hitam', 'Biru', 'Kuning'], ans: 1, exp: 'Ireng = hitam.' },
      { text: 'Gendera Indonesia wernane...', opts: ['Abang lan putih', 'Ijo lan kuning', 'Biru lan ireng', 'Kuning lan putih'], ans: 0, exp: 'Bendera Indonesia berwarna merah (abang) dan putih.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-05', subSeq: 2,
    objectives: ['Siswa mengenal nama benda di rumah dan kelas dalam Bahasa Jawa.'],
    materialTitle: 'Barang ing Omah lan Kelas',
    blocks: [
      { type: 'flashcards', title: 'Klik Barang kanggo Ngerti Tegese!', cards: [
        { emoji: '🚪', front: 'Lawang', back: 'Pintu' },
        { emoji: '🪟', front: 'Cendhela', back: 'Jendela' },
        { emoji: '🪑', front: 'Kursi / Meja', back: 'Kursi / Meja' },
        { emoji: '🧹', front: 'Sapu', back: 'Sapu' },
      ]},
    ],
    activityTitle: 'Gladhen: Barang ing Omah lan Kelas',
    questions: [
      { text: 'Tembung "Lawang" tegese...', opts: ['Jendela', 'Pintu', 'Meja', 'Atap'], ans: 1, exp: 'Lawang = pintu.' },
      { text: 'Tembung "Cendhela" tegese...', opts: ['Pintu', 'Lantai', 'Jendela', 'Dinding'], ans: 2, exp: 'Cendhela = jendela.' },
      { text: 'Barang kanggo ngresiki jogan (lantai) yaiku...', opts: ['Sapu', 'Buku', 'Pensil', 'Topi'], ans: 0, exp: 'Sapu digunakan untuk membersihkan lantai.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-05', subSeq: 3,
    objectives: ['Siswa mampu menyebutkan benda beserta warnanya dalam kalimat Jawa sederhana.'],
    materialTitle: 'Nyebut Werna lan Jeneng Barang',
    blocks: [
      { type: 'story_panel', title: 'Apa Werna Barangmu?', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Tasku wernane biru. Sepatuku wernane ireng.' },
        { speaker: 'Alya', avatar: '👧', text: 'Bukuku wernane ijo, topiku wernane abang!' },
      ]},
    ],
    activityTitle: 'Gladhen: Werna lan Barang',
    questions: [
      { text: '"Sepatuku wernane ireng" tegese sepatu kuwi wernane...', opts: ['Putih', 'Hitam', 'Merah', 'Hijau'], ans: 1, exp: 'Ireng = hitam.' },
      { text: 'Godhong (daun) wit-witan umume wernane...', opts: ['Ijo', 'Abang', 'Ireng', 'Biru'], ans: 0, exp: 'Daun umumnya berwarna hijau (ijo).' },
      { text: '"Topiku wernane abang" tegese topi berwarna...', opts: ['Merah', 'Kuning', 'Putih', 'Biru'], ans: 0, exp: 'Abang = merah.' },
    ],
  },

  // BAB 6: ANGKA LAN DOLANAN
  {
    topicCode: 'BJ-SD1-06', subSeq: 1,
    objectives: ['Siswa mengenal bilangan 1 sampai 10 dalam Bahasa Jawa (siji nganti sepuluh).'],
    materialTitle: 'Wilangan Dasar (Siji nganti Sepuluh)',
    blocks: [
      { type: 'visual_cards', title: 'Klik Angka ing Basa Jawa!', items: [
        { visual: '1️⃣', label: 'Siji', caption: '1', speech: 'Siji' },
        { visual: '2️⃣', label: 'Loro', caption: '2', speech: 'Loro' },
        { visual: '3️⃣', label: 'Telu', caption: '3', speech: 'Telu' },
        { visual: '4️⃣', label: 'Papat', caption: '4', speech: 'Papat' },
        { visual: '5️⃣', label: 'Lima', caption: '5', speech: 'Lima' },
        { visual: '6️⃣', label: 'Enem', caption: '6', speech: 'Enem' },
        { visual: '7️⃣', label: 'Pitu', caption: '7', speech: 'Pitu' },
        { visual: '8️⃣', label: 'Wolu', caption: '8', speech: 'Wolu' },
        { visual: '9️⃣', label: 'Sanga', caption: '9', speech: 'Sanga' },
        { visual: '🔟', label: 'Sepuluh', caption: '10', speech: 'Sepuluh' },
      ]},
    ],
    activityTitle: 'Gladhen: Angka Basa Jawa',
    questions: [
      { text: 'Angka 7 ing Basa Jawa diarani...', opts: ['Enem', 'Pitu', 'Wolu', 'Sanga'], ans: 1, exp: '7 = Pitu.' },
      { text: 'Tembung "Papat" tegese angka...', opts: ['2', '3', '4', '5'], ans: 2, exp: 'Papat = 4.' },
      { text: 'Siji, loro, ..., papat. Tembung sing ilang yaiku...', opts: ['Telu', 'Lima', 'Pitu', 'Wolu'], ans: 0, exp: 'Urutannya: siji (1), loro (2), telu (3), papat (4).' },
    ],
  },
  {
    topicCode: 'BJ-SD1-06', subSeq: 2,
    objectives: ['Siswa mampu menghitung benda menggunakan bilangan Bahasa Jawa.'],
    materialTitle: 'Ngetung Barang nganggo Basa Jawa',
    blocks: [
      { type: 'interactive_counter', mode: 'count', emoji: '🍊', initialA: 5, max: 10, title: 'Etung Jeruke: Siji, Loro, Telu...' },
      { type: 'worked_example', level: 'Dasar', question: 'Ana apel 🍎 🍎 🍎. Pira cacahe apel?', steps: ['Etung siji-siji: siji, loro, telu.'], answer: 'Telu (3) apel.' },
    ],
    activityTitle: 'Gladhen: Ngetung Barang',
    questions: [
      { text: 'Cacahe buku 📘 📘 📘 📘 ana...', opts: ['Telu', 'Papat', 'Lima', 'Enem'], ans: 1, exp: 'Ada 4 buku, dalam Bahasa Jawa disebut papat.' },
      { text: 'Loro ditambah telu dadi...', opts: ['Papat', 'Lima', 'Enem', 'Pitu'], ans: 1, exp: '2 + 3 = 5 (lima).' },
      { text: 'Wolu tegese angka...', opts: ['6', '7', '8', '9'], ans: 2, exp: 'Wolu = 8.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-06', subSeq: 3,
    objectives: ['Siswa mengenal nama permainan tradisional anak-anak di Jawa.'],
    materialTitle: 'Jeneng Dolanan Tradhisional',
    blocks: [
      { type: 'visual_cards', title: 'Kenali Dolanan Anak Tradhisional!', items: [
        { visual: '🪁', label: 'Layangan', caption: 'Layang-layang', speech: 'Layangan.' },
        { visual: '🪨', label: 'Dakon / Congklak', caption: 'Main biji di lubang', speech: 'Dakon.' },
        { visual: '🏃', label: 'Gobag Sodor', caption: 'Main lari berkelompok', speech: 'Gobag sodor.' },
        { visual: '🙈', label: 'Dhelikan', caption: 'Petak umpet', speech: 'Dhelikan utawa petak umpet.' },
      ]},
    ],
    activityTitle: 'Gladhen: Dolanan Tradhisional',
    questions: [
      { text: 'Dolanan petak umpet ing Basa Jawa uga diarani...', opts: ['Dhelikan', 'Layangan', 'Dakon', 'Bal-balan'], ans: 0, exp: 'Dhelikan (bersembunyi) adalah permainan petak umpet.' },
      { text: 'Dolanan sing dimainake nganggo angin ing lapangan yaiku...', opts: ['Dakon', 'Layangan', 'Dhelikan', 'Catur'], ans: 1, exp: 'Layangan dimainkan dengan bantuan angin.' },
      { text: 'Nalika dolanan karo kanca-kanca, kita kudu...', opts: ['Rukun lan jujur', 'Curang', 'Nesu-nesu', 'Nangis terus'], ans: 0, exp: 'Bermain bersama harus rukun, sportif, dan jujur.' },
    ],
  },
  {
    topicCode: 'BJ-SD1-06', subSeq: 4,
    objectives: ['Siswa memahami aturan dan instruksi sederhana saat bermain bersama.'],
    materialTitle: 'Aturan lan Instruksi Dolanan',
    blocks: [
      { type: 'story_panel', title: 'Dolanan sing Rukun', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Ayo main dhelikan! Siji, loro, telu... sing jaga merem ya!' },
        { speaker: 'Alya', avatar: '👧', text: 'Siap! Kita kudu jujur lan gantian jaga supaya kabeh seneng.' },
      ]},
      { type: 'list', title: 'Aturan Dolanan Bareng', items: ['Gantian (antre) kanthi sabar.', 'Jujur lan ora curang.', 'Yen rampung dolanan, barang dirapekake maneh.'] },
    ],
    activityTitle: 'Gladhen: Instruksi Dolanan',
    questions: [
      { text: 'Yen dolanan wis rampung, dolanane kudu...', opts: ['Ditinggal sembarangan', 'Dirapekake ing panggonane', 'Dibuang', 'Dipecah'], ans: 1, exp: 'Merapikan mainan kembali melatih tanggung jawab.' },
      { text: 'Tembung "Gantian" tegese...', opts: ['Berebut', 'Bergiliran', 'Sendirian', 'Berhenti'], ans: 1, exp: 'Gantian berarti bergiliran dengan sabar.' },
      { text: 'Sikap nalika kalah dolanan sing bener yaiku...', opts: ['Nangis lan nesu', 'Tetep seneng lan ngucap selamat marang sing menang', 'Ngganggu kanca', 'Mlayu'], ans: 1, exp: 'Sportif saat menang maupun kalah membuat permainan tetap seru.' },
    ],
  },
];

upsertLessonsBatch('Kelas 1 SD — Bahasa Jawa (6 Bab, 20 Submateri)', LESSONS).catch((err) => {
  console.error(err);
  process.exit(1);
});

