import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: KATRANGAN BABAGAN AWAK LAN KULAWARGA (Gresik Daratan)
  {
    topicCode: 'BJ-SD4-01', subSeq: 1,
    objectives: ['Siswa mampu mendeskripsikan ciri diri sendiri (nama, umur, kelas, ciri fisik, hobi) dalam Bahasa Jawa.'],
    materialTitle: 'Katrangan Ciri Diri',
    blocks: [
      { type: 'story_panel', title: 'Ngenalake Awake Dhewe', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Jenengku Alya. Umurku sepuluh taun, saiki aku kelas papat SD. Rambutku ireng dawa lan aku seneng maca buku crita.' },
      ]},
      { type: 'visual_cards', title: 'Tembung Perangan Awak (Ngoko – Krama)', cards: [
        { emoji: '👀', label: 'Mripat / Soca', sub: 'Mata' },
        { emoji: '💇', label: 'Rambut / Rikma', sub: 'Rambut' },
        { emoji: '✋', label: 'Tangan / Asta', sub: 'Tangan' },
        { emoji: '🦶', label: 'Sikil / Ampeyan', sub: 'Kaki' },
      ]},
    ],
    activityTitle: 'Latihan: Ciri Diri',
    questions: [
      { text: 'Tembung "rambutku ireng dawa" tegese rambutku...', opts: ['Putih pendek', 'Hitam panjang', 'Merah keriting', 'Cokelat tipis'], ans: 1, exp: 'Ireng = hitam, dawa = panjang.' },
      { text: 'Basa krama inggil saka tembung "tangan" yaiku...', opts: ['Soca', 'Asta', 'Rikma', 'Grana'], ans: 1, exp: 'Tangan (ngoko) = asta (krama inggil).' },
      { text: 'Basa Jawa saka angka "sepuluh" yaiku...', opts: ['Sanga', 'Sepuluh / Sedasa', 'Wolu', 'Pitu'], ans: 1, exp: '10 = sepuluh (ngoko), sedasa (krama).' },
    ],
  },
  {
    topicCode: 'BJ-SD4-01', subSeq: 2,
    objectives: ['Siswa mampu menyebutkan anggota keluarga inti dan besar beserta perannya dalam Bahasa Jawa.'],
    materialTitle: 'Anggota Kulawarga',
    blocks: [
      { type: 'table', title: 'Sebutan Anggota Kulawarga ing Basa Jawa', headers: ['Basa Jawa', 'Basa Indonesia'], rows: [
        ['Bapak / Rama', 'Ayah'],
        ['Ibu', 'Ibu'],
        ['Kakang / Mas & Mbakyu / Mbak', 'Kakak laki-laki & Kakak perempuan'],
        ['Adhik (Dhe)', 'Adik'],
        ['Simbah Kakung & Simbah Putri', 'Kakek & Nenek'],
        ['Pakdhe / Paklik & Budhe / Bulik', 'Paman (kakak/adik ortu) & Bibi (kakak/adik ortu)'],
      ]},
    ],
    activityTitle: 'Latihan: Anggota Kulawarga',
    questions: [
      { text: 'Adhik lanange bapak utawa ibu ing basa Jawa diarani...', opts: ['Pakdhe', 'Paklik', 'Simbah kakung', 'Mas'], ans: 1, exp: 'Paklik = paman (adik bapak/ibu); Pakdhe = paman (kakak bapak/ibu).' },
      { text: 'Wong tuwane bapak utawa ibu sing kakung (laki-laki) diarani...', opts: ['Simbah putri', 'Simbah kakung', 'Paklik', 'Kakang'], ans: 1, exp: 'Simbah kakung = kakek.' },
      { text: 'Kakak perempuan ing basa Jawa biasane diceluk...', opts: ['Mas', 'Mbak / Mbakyu', 'Adhik', 'Bulik'], ans: 1, exp: 'Mbakyu/Mbak = kakak perempuan.' },
    ],
  },
  {
    topicCode: 'BJ-SD4-01', subSeq: 3,
    objectives: ['Siswa mampu menggunakan kosakata sifat (tembung kahanan) Bahasa Jawa untuk menggambarkan orang.'],
    materialTitle: 'Kosakata Sifat (Tembung Kahanan)',
    blocks: [
      { type: 'flashcards', title: 'Tembung Kahanan & Kosok Baline (Klik!)', cards: [
        { emoji: '📚', front: 'Sregep ↔ ...', back: 'Kesed (rajin ↔ malas)' },
        { emoji: '😊', front: 'Sabar ↔ ...', back: 'Nesunan (sabar ↔ pemarah)' },
        { emoji: '🧠', front: 'Pinter ↔ ...', back: 'Bodho (pintar ↔ kurang paham)' },
        { emoji: '📏', front: 'Dhuwur ↔ ...', back: 'Cendhek (tinggi ↔ pendek)' },
        { emoji: '🤝', front: 'Grapyak (ramah)', back: 'Suka menyapa dan mudah akrab' },
      ]},
    ],
    activityTitle: 'Latihan: Kosakata Sifat',
    questions: [
      { text: 'Kosok baline (lawan kata) saka tembung "sregep" (rajin) yaiku...', opts: ['Pinter', 'Kesed', 'Dhuwur', 'Becik'], ans: 1, exp: 'Sregep ↔ kesed (malas).' },
      { text: '"Bu Sari iku wong sing grapyak marang tangga." Tembung "grapyak" tegese...', opts: ['Ramah lan gampang srawung', 'Galak', 'Meneng wae', 'Sombong'], ans: 0, exp: 'Grapyak = ramah dan hangat kepada orang lain.' },
      { text: 'Tembung "dhuwur" kosok baline...', opts: ['Amba', 'Cendhek', 'Dawa', 'Gedhe'], ans: 1, exp: 'Dhuwur (tinggi) ↔ cendhek (pendek).' },
    ],
  },
  {
    topicCode: 'BJ-SD4-01', subSeq: 4,
    objectives: ['Siswa mampu menyusun paragraf deskriptif pendek tentang anggota keluarga dalam Bahasa Jawa.'],
    materialTitle: 'Nulis Paragraf Deskriptif Kulawarga',
    blocks: [
      { type: 'worked_example', level: 'Conto Paragraf', question: 'Gawea paragraf cendhak babagan "Ibuku"!', steps: ['Kalimat 1: Ibuku asmane Bu Rina.', 'Kalimat 2: Panjenengane pawongane sabar, grapyak, lan pinter masak.', 'Kalimat 3: Saben esuk Ibu nyepakake sarapan lan tansah ngelingake aku supaya sregep sinau.'], answer: 'Paragraf deskripsi kulawarga sing runtut lan sopan.' },
    ],
    activityTitle: 'Latihan: Paragraf Deskriptif',
    questions: [
      { text: 'Ukara "Bapakku sregep nyambut gawe saben dina." Tegese "nyambut gawe" yaiku...', opts: ['Tidur siang', 'Bekerja', 'Bermain', 'Berjalan-jalan'], ans: 1, exp: 'Nyambut gawe = bekerja.' },
      { text: 'Paragraf deskripsi babagan kulawarga isine nggambarake...', opts: ['Ciri-ciri, sifat, lan pakulinan anggota kulawarga', 'Rumus bangun datar', 'Daftar harga pasar', 'Aturan lalu lintas'], ans: 0, exp: 'Deskripsi kulawarga melukiskan sosok dan sifat anggota keluarga.' },
      { text: 'Tembung "asmane" kanggo nyebut jenenge wong tuwa luwih sopan tinimbang...', opts: ['Jenenge', 'Bapake', 'Omahe', 'Klambine'], ans: 0, exp: 'Jeneng (ngoko) = asma (krama inggil).' },
    ],
  },

  // BAB 2: KATRANGAN PANGGONAN LAN LINGKUNGAN
  {
    topicCode: 'BJ-SD4-02', subSeq: 1,
    objectives: ['Siswa mampu mendeskripsikan keadaan rumah, sekolah, dan lingkungan sekitar dalam Bahasa Jawa.'],
    materialTitle: 'Katrangan Omah, Sekolah, lan Lingkungan',
    blocks: [
      { type: 'story_panel', title: 'Sekolahanku Sing Resik', lines: [
        { speaker: 'Wacan', avatar: '🏫', text: 'Sekolahanku mapan ing pinggir dalan gedhe. Latar sekolahane jembar lan resik amarga saben esuk disapu dening murid-murid. Ing ngarep kelas akeh tanduran kembang sing nggawe hawa dadi adhem lan asri.' },
      ]},
    ],
    activityTitle: 'Latihan: Omah & Sekolah',
    questions: [
      { text: 'Tembung "jembar" ing ukara "Latar sekolahane jembar" tegese...', opts: ['Sempit', 'Luas', 'Kotor', 'Gelap'], ans: 1, exp: 'Jembar = luas / lebar.' },
      { text: 'Tembung "latar" tegese...', opts: ['Atap', 'Halaman', 'Dapur', 'Kamar tidur'], ans: 1, exp: 'Latar = halaman rumah/sekolah.' },
      { text: 'Adhedhasar wacan, kenangapa latar sekolahane resik?', opts: ['Amarga saben esuk disapu dening murid-murid', 'Amarga ora tau dienggo', 'Amarga kena udan', 'Amarga cilik'], ans: 0, exp: 'Tinulis cetha: disapu saben esuk dening murid-murid.' },
    ],
  },
  {
    topicCode: 'BJ-SD4-02', subSeq: 2,
    objectives: ['Siswa mampu menyatakan letak suatu tempat menggunakan arah mata angin Bahasa Jawa (lor, kidul, wetan, kulon).'],
    materialTitle: 'Arah Mata Angin Basa Jawa',
    blocks: [
      { type: 'visual_cards', title: '4 Keblat (Arah Mata Angin) Basa Jawa', cards: [
        { emoji: '⬆️', label: 'Lor', sub: 'Utara' },
        { emoji: '➡️', label: 'Wetan', sub: 'Timur (srengenge mlethek / terbit)' },
        { emoji: '⬇️', label: 'Kidul', sub: 'Selatan' },
        { emoji: '⬅️', label: 'Kulon', sub: 'Barat (srengenge angslup / terbenam)' },
      ]},
      { type: 'tip', text: 'Hafalkan urut searah jarum jam: Lor (Utara) – Wetan (Timur) – Kidul (Selatan) – Kulon (Barat)!' },
    ],
    activityTitle: 'Latihan: Arah Mata Angin Jawa',
    questions: [
      { text: 'Arah "Timur" ing basa Jawa diarani...', opts: ['Lor', 'Kidul', 'Wetan', 'Kulon'], ans: 2, exp: 'Wetan = timur; kulon = barat; lor = utara; kidul = selatan.' },
      { text: 'Srengenge angslup (terbenam) ing sisih...', opts: ['Wetan', 'Kulon', 'Lor', 'Kidul'], ans: 1, exp: 'Matahari terbenam di sebelah barat (kulon).' },
      { text: 'Kabupaten Gresik ing sisih LOR (utara) wewatesan karo...', opts: ['Segara Jawa (Laut Jawa)', 'Gunung Bromo', 'Kabupaten Malang', 'Samudra Hindia'], ans: 0, exp: 'Sisih lor Gresik iku Laut Jawa.' },
    ],
  },
  {
    topicCode: 'BJ-SD4-02', subSeq: 3,
    objectives: ['Siswa mampu menyebutkan ciri-ciri lingkungan alam dan sosial di sekitar tempat tinggal dalam Bahasa Jawa.'],
    materialTitle: 'Ciri Panggonan lan Lingkungan Sekitar',
    blocks: [
      { type: 'flashcards', title: 'Tembung Ciri Panggonan (Klik!)', cards: [
        { emoji: '🌿', front: 'Edhum / Ayom', back: 'Teduh dan sejuk karena banyak pepohonan' },
        { emoji: '✨', front: 'Resik lan Tumata', back: 'Bersih dan tertata rapi' },
        { emoji: '🏘️', front: 'Rame ↔ Sepi', back: 'Ramai ↔ Sunyi' },
        { emoji: '🌊', front: 'Pesisir / Tambak', back: 'Wilayah dekat laut dan budidaya ikan (khas Gresik daratan)' },
      ]},
    ],
    activityTitle: 'Latihan: Ciri Panggonan',
    questions: [
      { text: 'Taman sing akeh wit-witan gedhe krasa "edhum". Tembung "edhum" tegese...', opts: ['Panas banget', 'Teduh / sejuk', 'Reget', 'Banjir'], ans: 1, exp: 'Edhum = teduh/sejuk.' },
      { text: 'Kosok baline tembung "resik" (bersih) yaiku...', opts: ['Reged (kotor)', 'Jembar', 'Asri', 'Apik'], ans: 0, exp: 'Resik ↔ reged.' },
      { text: 'Supaya lingkungan omah tetep resik lan sehat, warga kampung biasane nganakake...', opts: ['Gugur gunung / kerja bakti', 'Mbuwang uwuh ing kali', 'Turu bareng', 'Ngrusak wit'], ans: 0, exp: 'Gugur gunung/kerja bakti njaga karesikan lingkungan.' },
    ],
  },
  {
    topicCode: 'BJ-SD4-02', subSeq: 4,
    objectives: ['Siswa mampu menggunakan kosakata posisi/lokasi (ngarep, mburi, tengen, kiwa, cedhak, adoh) dalam kalimat Bahasa Jawa.'],
    materialTitle: 'Kosakata Lokasi Basa Jawa',
    blocks: [
      { type: 'table', title: 'Kosakata Posisi & Arah', headers: ['Basa Jawa', 'Basa Indonesia', 'Conto Ukara'], rows: [
        ['Ngarep ↔ Mburi', 'Depan ↔ Belakang', 'Taman ana ing ngarep omah.'],
        ['Tengen ↔ Kiwa', 'Kanan ↔ Kiri', 'Sekolahan ana ing sisih tengen dalan.'],
        ['Cedhak ↔ Adoh', 'Dekat ↔ Jauh', 'Omahku cedhak karo masjid.'],
        ['Sebrang / Seberang', 'Seberang', 'Pasar ana ing sebrange alun-alun.'],
      ]},
    ],
    activityTitle: 'Latihan: Kosakata Lokasi',
    questions: [
      { text: 'Tembung "tengen" lan "kiwa" tegese...', opts: ['Depan dan belakang', 'Kanan dan kiri', 'Atas dan bawah', 'Dekat dan jauh'], ans: 1, exp: 'Tengen = kanan, kiwa = kiri.' },
      { text: '"Omahe Bima CEDHAK karo sekolah." Kosok baline "cedhak" yaiku...', opts: ['Adoh (jauh)', 'Jembar', 'Cilik', 'Mburi'], ans: 0, exp: 'Cedhak (dekat) ↔ adoh (jauh).' },
      { text: '"Ing MBURI omah ana kebon pelem." Tembung "mburi" tegese...', opts: ['Depan', 'Belakang', 'Samping', 'Atas'], ans: 1, exp: 'Mburi = belakang.' },
    ],
  },

  // BAB 3: CRITA PENGALAMAN
  {
    topicCode: 'BJ-SD4-03', subSeq: 1,
    objectives: ['Siswa mampu menentukan topik pengalaman pribadi yang berkesan (menyenangkan, mengharukan, atau lucu).'],
    materialTitle: 'Milih Topik Crita Pengalaman Pribadi',
    blocks: [
      { type: 'visual_cards', title: 'Jenis Pengalaman Pribadi', cards: [
        { emoji: '😄', label: 'Pengalaman Nyenengake', sub: 'Juara lomba, plesir bareng kulawarga, panen buah' },
        { emoji: '😂', label: 'Pengalaman Lucu', sub: 'Salah nggawa sepatu utawa salah ngira kanca' },
        { emoji: '💡', label: 'Pengalaman Sing Menehi Piwulang', sub: 'Sinau sepedaan nganti bisa, mbantu tangga' },
      ]},
    ],
    activityTitle: 'Latihan: Pengalaman Pribadi',
    questions: [
      { text: 'Crita pengalaman pribadi yaiku crita babagan kedadeyan sing...', opts: ['Tau dialami dhewe kanthi nyata', 'Mung ngarang dongeng raksasa', 'Dialami tokoh kartun', 'Ora tau kedadeyan'], ans: 0, exp: 'Pengalaman pribadi adhedhasar prastawa nyata sing dialami penulis.' },
      { text: 'Conto pengalaman nyenengake ing sekolah yaiku...', opts: ['Menang lomba maca puisi basa Jawa', 'Lali nggawa buku tugas', 'Tiba saka sepedha', 'Keri bis'], ans: 0, exp: 'Menang lomba dadi kenangan sing nyenengake.' },
      { text: 'Tembung "nyenengake" tegese...', opts: ['Menyedihkan', 'Menyenangkan', 'Menakutkan', 'Membosankan'], ans: 1, exp: 'Seneng → nyenengake (menyenangkan).' },
    ],
  },
  {
    topicCode: 'BJ-SD4-03', subSeq: 2,
    objectives: ['Siswa mampu merangkai urutan kejadian cerita pengalaman memakai kata penghubung waktu Bahasa Jawa.'],
    materialTitle: 'Urutan Kedadeyan ing Crita',
    blocks: [
      { type: 'flashcards', title: 'Tembung Panggandheng Wektu (Klik!)', cards: [
        { emoji: '1️⃣', front: 'Wiwitane / Kapisan', back: 'Awalnya / Pertama-tama' },
        { emoji: '2️⃣', front: 'Banjur / Nuli', back: 'Lalu / Kemudian' },
        { emoji: '3️⃣', front: 'Sawise iku', back: 'Setelah itu' },
        { emoji: '🏁', front: 'Pungkasane / Wusanane', back: 'Akhirnya' },
      ]},
    ],
    activityTitle: 'Latihan: Urutan Kedadeyan',
    questions: [
      { text: 'Tembung "pungkasane" ing crita pengalaman tegese...', opts: ['Awalnya', 'Akhirnya', 'Tiba-tiba', 'Kemarin'], ans: 1, exp: 'Pungkasane = akhirnya.' },
      { text: 'Urutna kedadeyan: (1) Banjur tuku pudak kanggo oleh-oleh, (2) Dina Minggu aku lan Ibu menyang pasar, (3) Pungkasane aku mulih kanthi seneng. Urutan sing bener:', opts: ['1-2-3', '2-1-3', '3-2-1', '2-3-1'], ans: 1, exp: 'Menyang pasar (2) → tuku pudak (1) → mulih (3).' },
      { text: 'Supaya crita pengalaman gampang dipahami, kedadeyane kudu disusun kanthi...', opts: ['Runtut miturut wektu', 'Acak-acakan', 'Mung pungkasane wae', 'Tanpa tokoh'], ans: 0, exp: 'Urutan kronologis nggawe alur cetha.' },
    ],
  },
  {
    topicCode: 'BJ-SD4-03', subSeq: 3,
    objectives: ['Siswa mampu menyusun struktur cerita pengalaman: wiwitan (awal), isi/tengah, lan pungkasan (akhir).'],
    materialTitle: 'Struktur Crita: Awal – Tengah – Akhir',
    blocks: [
      { type: 'table', title: '3 Perangan Crita Pengalaman', headers: ['Perangan', 'Isine'], rows: [
        ['Wiwitan (Awal)', 'Nyebutake kapan, ing ngendi, lan sapa wae sing melu'],
        ['Tengah (Isi)', 'Nyritakake kedadeyan utama sing paling seru/berkesan'],
        ['Pungkasan (Akhir)', 'Nyritakake kepriye rampunge lan rasa ati (kesan/piwulang)'],
      ]},
    ],
    activityTitle: 'Latihan: Awal–Tengah–Akhir',
    questions: [
      { text: 'Perangan crita sing nyebutake wektu, panggonan, lan paraga (tokoh) yaiku...', opts: ['Wiwitan (awal)', 'Pungkasan (akhir)', 'Judul wae', 'Catatan'], ans: 0, exp: 'Wiwitan ngenalake latar lan paraga.' },
      { text: 'Rasa seneng utawa pelajaran sing dijupuk saka pengalaman biasane ditulis ing bagian...', opts: ['Pungkasan (akhir)', 'Wiwitan', 'Tengah-tengah', 'Luar teks'], ans: 0, exp: 'Kesan lan piwulang nutup crita kanthi apik.' },
      { text: 'Tembung "paraga" ing crita basa Jawa tegese...', opts: ['Tempat', 'Tokoh / pelaku', 'Waktu', 'Judul'], ans: 1, exp: 'Paraga = tokoh.' },
    ],
  },
  {
    topicCode: 'BJ-SD4-03', subSeq: 4,
    objectives: ['Siswa mampu menyampaikan cerita pengalaman secara lisan dan tertulis dengan bahasa Jawa yang runtut.'],
    materialTitle: 'Nyritakake Pengalaman Lisan lan Tulis',
    blocks: [
      { type: 'story_panel', title: 'Conto Crita Pengalaman: Sinau Numpak Sepedha', lines: [
        { speaker: 'Raka', avatar: '👦', text: 'Preian wingi aku sinau numpak sepedha rodha loro karo Bapak ing lapangan. Wiwitane aku wedi lan tau tiba pisan. Nanging Bapak tansah nyemangati. Sawise latihan telung dina, pungkasane aku bisa numpak sepedha dhewe. Atiku bungah banget!' },
      ]},
    ],
    activityTitle: 'Latihan: Crita Lisan & Tulis',
    questions: [
      { text: 'Adhedhasar critane Raka, tembung "bungah" tegese...', opts: ['Sedih', 'Senang / gembira', 'Capek', 'Marah'], ans: 1, exp: 'Bungah = seneng/gembira.' },
      { text: 'Tembung "preian" tegese...', opts: ['Ulangan', 'Liburan', 'Piket', 'Upacara'], ans: 1, exp: 'Prei/preian = libur/liburan.' },
      { text: 'Nalika nyritakake pengalaman kanthi lisan ing ngarep kelas, sikap sing becik yaiku...', opts: ['Swara cetha, ekspresif, lan ora kesusu', 'Ndhingkluk lan meneng', 'Mungkur saka kanca', 'Maca cepet banget'], ans: 0, exp: 'Swara cetha lan ekspresif nggawe kanca seneng ngrungokake.' },
    ],
  },

  // BAB 4: UNGGAH-UNGGUH ING PADINAN
  {
    topicCode: 'BJ-SD4-04', subSeq: 1,
    objectives: ['Siswa mampu memilih ragam Ngoko Lugu, Krama Lugu, dan Krama Alus secara tepat dalam kehidupan sehari-hari.'],
    materialTitle: 'Milih Ngoko lan Krama ing Padinan',
    blocks: [
      { type: 'table', title: 'Tebak Ragam Basa sing Trep!', headers: ['Ukara', 'Ragam Basa', 'Kanggone Marang'], rows: [
        ['Kowe arep menyang ngendi?', 'Ngoko Lugu', 'Kanca sebaya / adhik'],
        ['Sampeyan badhe kesah dhateng pundi?', 'Krama Lugu', 'Wong anyar / rada sepuh'],
        ['Panjenengan badhe tindak dhateng pundi?', 'Krama Alus (Inggil)', 'Wong tuwa, guru, simbah'],
      ]},
    ],
    activityTitle: 'Latihan: Pemilihan Ngoko/Krama',
    questions: [
      { text: 'Ukara "Bapak nembe ... koran ing teras." Tembung krama inggil kanggo "maca" yaiku...', opts: ['Maca', 'Maos', 'Nulis', 'Ndeleng'], ans: 1, exp: 'Maca (ngoko) = maos (krama).' },
      { text: 'Ukara "Ibu mundhut gendhis ing warung." Tembung "mundhut" tegese...', opts: ['Menjual', 'Membeli (krama inggil)', 'Memasak', 'Membuang'], ans: 1, exp: 'Tuku (ngoko) = tumbas (krama lugu/awake dhewe) = mundhut (krama inggil kanggo wong tuwa).' },
      { text: 'Yen omong-omongan karo Bapak/Ibu, kanggo awake dhewe kita nganggo tembung...', opts: ['Kula (dudu aku)', 'Sampeyan', 'Panjenengan', 'Kowe'], ans: 0, exp: 'Kula = saya (krama).' },
    ],
  },
  {
    topicCode: 'BJ-SD4-04', subSeq: 2,
    objectives: ['Siswa mampu membedakan percakapan sopan bersama teman, guru, dan orang tua.'],
    materialTitle: 'Pacelathon karo Kanca, Guru, lan Wong Tuwa',
    blocks: [
      { type: 'story_panel', title: 'Beda Lawan Bicara, Beda Basane!', lines: [
        { speaker: 'Salsa (marang kanca)', avatar: '👧', text: 'Al, ayo sinau bareng ing omahku mengko sore!' },
        { speaker: 'Salsa (marang Ibu)', avatar: '👧', text: 'Bu, mangke sonten Alya badhe sinau sareng wonten griya. Kepareng nggih, Bu?' },
        { speaker: 'Salsa (marang Pak Guru)', avatar: '👧', text: 'Nuwun sewu, Pak. Kula nyuwun pirsa babagan tugas halaman kalih dasa.' },
      ]},
    ],
    activityTitle: 'Latihan: Pacelathon 3 Situasi',
    questions: [
      { text: 'Tembung "nyuwun pirsa" marang guru tegese...', opts: ['Minta izin pulang', 'Bertanya (sopan)', 'Minta maaf', 'Mengucapkan terima kasih'], ans: 1, exp: 'Nyuwun pirsa = mohon bertanya.' },
      { text: 'Tembung "kalih dasa" tegese wilangan...', opts: ['12', '20', '22', '30'], ans: 1, exp: 'Kalih = 2, dasa = puluh → 20.' },
      { text: 'Ukara sing paling trep kanggo pamit marang Ibu arep menyang omahe kanca yaiku...', opts: ['Bu, aku lunga dhisik!', 'Bu, kula nyuwun pamit badhe sinau dhateng griyanipun Alya.', 'Bu, sampeyan arep nang endi?', 'Ibu tindak sekolah.'], ans: 1, exp: 'Nganggo kula, nyuwun pamit, badhe, dhateng griyanipun.' },
    ],
  },
  {
    topicCode: 'BJ-SD4-04', subSeq: 3,
    objectives: ['Siswa mampu mempraktikkan dialog pendek dengan sikap tubuh (polah/subasita) dan unggah-ungguh yang santun.'],
    materialTitle: 'Praktik Dialog lan Subasita',
    blocks: [
      { type: 'visual_cards', title: 'Sikap Tubuh (Subasita) Saat Berbicara', cards: [
        { emoji: '🤝', label: 'Menehi nganggo Tangan Tengen', sub: 'Memberi atau menerima barang memakai tangan kanan' },
        { emoji: '🙇', label: 'Mbungkuk Alus Nalika Liwat', sub: 'Sambil mengucap "ndherek langkung" di depan orang tua' },
        { emoji: '😊', label: 'Ulat Sumeh (Wajah Ramah)', sub: 'Tersenyum sopan, tidak melotot atau memotong pembicaraan' },
      ]},
    ],
    activityTitle: 'Latihan: Praktik Dialog & Subasita',
    questions: [
      { text: 'Nalika nampa buku utawa jajan saka Bapak/Ibu Guru, becike nganggo...', opts: ['Tangan kiwa wae', 'Tangan tengen (luwih apik loro-lorone) sinambi matur nuwun', 'Dilempar', 'Mung nunjuk'], ans: 1, exp: 'Nganggo tangan tengen lan matur nuwun mujudake tatakrama luhur.' },
      { text: 'Tembung "sonten" ing basa Jawa krama tegese wayah...', opts: ['Pagi', 'Siang', 'Sore', 'Malam'], ans: 2, exp: 'Enjang = pagi, siyang = siang, sonten = sore, dalu = malam.' },
      { text: 'Sikap "ulat sumeh" nalika ngomong karo wong liya tegese...', opts: ['Wajah ramah lan senyum', 'Wajah mrengut', 'Nangis', 'Nesu'], ans: 0, exp: 'Sumeh = murah senyum dan ramah.' },
    ],
  },

  // BAB 5: AKSARA JAWA: PENGENALAN AKSARA LEGENA
  {
    topicCode: 'BJ-SD4-05', subSeq: 1,
    objectives: ['Siswa mampu mengenal 20 huruf dasar Aksara Jawa (Aksara Legena / Carakan) Ha Na Ca Ra Ka sampai Ma Ga Ba Tha Nga.'],
    materialTitle: 'Mengenal 20 Aksara Jawa Legena (Carakan)',
    blocks: [
      { type: 'text', text: 'Aksara Jawa Legena (Carakan) cacahé ana 20 aksara dhasar. Kabeh aksara legena isih wutuh lan diwaca nganggo swara vokal "a" (jejeg).' },
      { type: 'table', title: '20 Aksara Legena (4 Larik)', headers: ['Larik', 'Aksara Jawa', 'Wacane (Latin)'], rows: [
        ['Larik 1', 'ꦲ  ꦤ  ꦕ  ꦫ  ꦏ', 'ha  –  na  –  ca  –  ra  –  ka'],
        ['Larik 2', 'ꦢ  ꦠ  ꦱ  ꦮ  ꦭ', 'da  –  ta  –  sa  –  wa  –  la'],
        ['Larik 3', 'ꦥ  ꦝ  ꦗ  ꦪ  ꦚ', 'pa  –  dha  –  ja  –  ya  –  nya'],
        ['Larik 4', 'ꦩ  ꦒ  ꦧ  ꦛ  ꦔ', 'ma  –  ga  –  ba  –  tha  –  nga'],
      ]},
      { type: 'tip', text: 'Apalna nganggo irama lagu 4 larik: Ha-Na-Ca-Ra-Ka / Da-Ta-Sa-Wa-La / Pa-Dha-Ja-Ya-Nya / Ma-Ga-Ba-Tha-Nga!' },
    ],
    activityTitle: 'Latihan: 20 Aksara Legena',
    questions: [
      { text: 'Cacahe (jumlah) Aksara Jawa Legena ana...', opts: ['10 aksara', '15 aksara', '20 aksara', '26 aksara'], ans: 2, exp: 'Aksara Jawa Legena terdiri atas 4 baris × 5 huruf = 20 aksara.' },
      { text: 'Urutan larik KEPINDHO (baris ke-2) Aksara Jawa yaiku...', opts: ['ha na ca ra ka', 'da ta sa wa la', 'pa dha ja ya nya', 'ma ga ba tha nga'], ans: 1, exp: 'Larik 1: ha-na-ca-ra-ka; Larik 2: da-ta-sa-wa-la.' },
      { text: 'Larik kaping papat (terakhir) Aksara Jawa yaiku...', opts: ['pa dha ja ya nya', 'ma ga ba tha nga', 'ha na ca ra ka', 'da ta sa wa la'], ans: 1, exp: 'Larik ke-4: ma – ga – ba – tha – nga.' },
    ],
  },
  {
    topicCode: 'BJ-SD4-05', subSeq: 2,
    objectives: ['Siswa mampu mencocokkan bentuk Aksara Jawa Legena dengan bunyinya terutama yang bentuknya mirip (ha/la, na/ka, da/sa, pa/ya).'],
    materialTitle: 'Mencocokkan Bentuk & Bunyi Aksara Legena',
    blocks: [
      { type: 'flashcards', title: 'Latihan Tebak Aksara Jawa! (Klik untuk Cek)', cards: [
        { emoji: '📜', front: 'ꦲ   dan   ꦭ', back: 'ha (ꦲ) — la (ꦭ) (mirip, bedane panggonan sikil/lengkungan!)' },
        { emoji: '📜', front: 'ꦤ   dan   ꦏ', back: 'na (ꦤ) — ka (ꦏ) (ka duwe sikil telu ing mburi)' },
        { emoji: '📜', front: 'ꦢ   dan   ꦱ', back: 'da (ꦢ) — sa (ꦱ)' },
        { emoji: '📜', front: 'ꦥ   dan   ꦪ', back: 'pa (ꦥ) — ya (ꦪ)' },
        { emoji: '📜', front: 'ꦩ   dan   ꦒ   dan   ꦧ', back: 'ma (ꦩ) — ga (ꦒ) — ba (ꦧ)' },
      ]},
    ],
    activityTitle: 'Latihan: Cocokkan Aksara & Bunyi',
    questions: [
      { text: 'Aksara Jawa "ꦲ" diwaca...', opts: ['na', 'ha', 'ca', 'ra'], ans: 1, exp: 'ꦲ adalah aksara pertama: ha.' },
      { text: 'Aksara Jawa "ꦩ" diwaca...', opts: ['ga', 'ba', 'ma', 'pa'], ans: 2, exp: 'ꦩ = ma.' },
      { text: 'Aksara Jawa "ꦫ" lan "ꦏ" diwaca...', opts: ['ra lan ka', 'da lan ta', 'pa lan ja', 'ma lan ga'], ans: 0, exp: 'ꦫ = ra, ꦏ = ka.' },
    ],
  },
  {
    topicCode: 'BJ-SD4-05', subSeq: 3,
    objectives: ['Siswa mampu membaca dan menuliskan kata-kata sederhana bervokal "a" murni menggunakan Aksara Legena.'],
    materialTitle: 'Maca Tembung Sederhana Aksara Legena',
    blocks: [
      { type: 'table', title: 'Conto Maca Tembung Aksara Legena', headers: ['Aksara Jawa', 'Wacane (Latin)', 'Tegese (Indonesia)'], rows: [
        ['ꦩ ꦠ', 'ma – ta (mata)', 'Mata'],
        ['ꦏ ꦕ', 'ka – ca (kaca)', 'Kaca'],
        ['ꦢ ꦮ', 'da – wa (dawa)', 'Panjang'],
        ['ꦫ ꦗ', 'ra – ja (raja)', 'Raja'],
        ['ꦧ ꦠ', 'ba – ta (bata)', 'Batu bata'],
        ['ꦱ ꦥ', 'sa – pa (sapa)', 'Siapa'],
      ]},
      { type: 'tip', text: 'Di kelas 4 kita fokus membaca kata yang memakai aksara legena murni (semua suku kata bervokal a) dulu, sebelum belajar sandhangan di kelas 5!' },
    ],
    activityTitle: 'Latihan: Membaca Kata Aksara Legena',
    questions: [
      { text: 'Tembung Aksara Jawa "ꦩꦠ" diwaca...', opts: ['kaca', 'mata', 'bata', 'sapa'], ans: 1, exp: 'ꦩ (ma) + ꦠ (ta) = mata.' },
      { text: 'Tembung Aksara Jawa "ꦫꦗ" diwaca...', opts: ['raja', 'dawa', 'kana', 'lawa'], ans: 0, exp: 'ꦫ (ra) + ꦗ (ja) = raja.' },
      { text: 'Tembung "sapa" yen ditulis nganggo Aksara Legena yaiku...', opts: ['ꦱꦥ', 'ꦏꦕ', 'ꦧꦠ', 'ꦢꦮ'], ans: 0, exp: 'ꦱ (sa) + ꦥ (pa) = ꦱꦥ (sapa).' },
    ],
  },

  // BAB 6: PARIKAN LAN TEMBANG DOLANAN
  {
    topicCode: 'BJ-SD4-06', subSeq: 1,
    objectives: ['Siswa mampu mengenal pengertian dan ciri-ciri parikan (pantun Bahasa Jawa) sederhana.'],
    materialTitle: 'Mengenal Ciri Parikan Sederhana',
    blocks: [
      { type: 'story_panel', title: 'Parikan = Pantunnya Orang Jawa!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Rungokna parikan iki ya: "Wajik kletik gula jawa, luwih becik sing prasaja!"' },
        { speaker: 'Alya', avatar: '👧', text: 'Wah seru Bu! Swara pungkasane padha (-wa lan -ja? Oh, -tik/-cik lan -wa/-ja) kaya pantun!' },
      ]},
      { type: 'list', title: 'Ciri-Ciri Parikan Jawa', items: ['Bisa dumadi saka 2 larik (parikan tunggal) utawa 4 larik (parikan rangkep).', 'Larik kapisan diarani PURWAKA (sampiran).', 'Larik kapindho diarani ISI (pesan/maksud).', 'Nduweni guru swara (rima/persamaan bunyi) ing pungkasane gatra.'] },
    ],
    activityTitle: 'Latihan: Ciri Parikan',
    questions: [
      { text: 'Parikan ing basa Jawa padha karo karya sastra ... ing basa Indonesia.', opts: ['Pantun', 'Cerpen', 'Berita', 'Laporan'], ans: 0, exp: 'Parikan adalah pantun tradisional Jawa.' },
      { text: 'Bagian sampiran (pembuka) ing parikan diarani...', opts: ['Purwaka', 'Isi', 'Judul', 'Aksara'], ans: 0, exp: 'Purwaka = sampiran; Isi = pesan utama parikan.' },
      { text: 'Pesan utawa pitutur ing parikan 2 larik manggon ing larik...', opts: ['Kapisan (1)', 'Kapindho (2)', 'Luar bait', 'Ora ana isine'], ans: 1, exp: 'Larik 1 purwaka (sampiran), larik 2 isi.' },
    ],
  },
  {
    topicCode: 'BJ-SD4-06', subSeq: 2,
    objectives: ['Siswa mampu membedakan struktur purwaka dan isi pada contoh parikan 2 larik maupun 4 larik.'],
    materialTitle: 'Struktur Parikan Berdasarkan Contoh',
    blocks: [
      { type: 'table', title: 'Bedah Conto Parikan Populer', headers: ['Purwaka (Sampiran)', 'Isi (Pesan)', 'Tegese Isi'], rows: [
        ['Tawon madu ngisep sekar,', 'Calon guru kudu sabar.', 'Calon pendidik/guru harus sabar'],
        ['Manuk emprit nucuk pari,', 'Dadi murid sing taberi.', 'Jadi siswa harus rajin & tekun'],
        ['Wedang bubuk tanpa gula,', 'Ja sok ngantuk yen sinau maca.', 'Jangan mengantuk saat belajar membaca'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Parikan',
    questions: [
      { text: 'Ing parikan "Manuk emprit nucuk pari, dadi murid sing taberi", sing dadi ISI yaiku...', opts: ['Manuk emprit nucuk pari', 'Dadi murid sing taberi', 'Manuk emprit', 'Nucuk pari'], ans: 1, exp: 'Larik kedua berisi nasihat agar murid rajin (taberi).' },
      { text: 'Tembung "taberi" ing parikan dhuwur tegese...', opts: ['Malas', 'Rajin / tekun', 'Nakal', 'Cepat marah'], ans: 1, exp: 'Taberi = rajin/tekun belajar.' },
      { text: 'Tembung "sekar" ing parikan "Tawon madu ngisep sekar" tegese...', opts: ['Batu', 'Bunga', 'Daun kering', 'Air'], ans: 1, exp: 'Sekar = kembang / bunga.' },
    ],
  },
  {
    topicCode: 'BJ-SD4-06', subSeq: 3,
    objectives: ['Siswa mampu memahami makna dan nasihat moral dari tembang dolanan seperti Lir-Ilir dan Suwe Ora Jamu.'],
    materialTitle: 'Makna Tembang Dolanan',
    blocks: [
      { type: 'visual_cards', title: 'Makna Tembang Dolanan Jawa', cards: [
        { emoji: '🍵', label: 'Suwe Ora Jamu', sub: 'Nyritakake rasa kangen marang kanca lawas sing suwe ora ketemu' },
        { emoji: '🌾', label: 'Lir-Ilir', sub: 'Ngajak supaya tangi/semangat berbuat becik selagi isih ana wektu lan tenaga' },
        { emoji: '🎲', label: 'Cublak-Cublak Suweng', sub: 'Ngelingake yen kabegjan sejati dudu saka serakah, nanging saka ati sing resik' },
      ]},
    ],
    activityTitle: 'Latihan: Makna Tembang Dolanan',
    questions: [
      { text: 'Tembang "Suwe Ora Jamu, jamu godhong tela; Suwe ora ketemu, ketemu pisan gawe..." lanjutan lirike yaiku...', opts: ['Gela (kecewa)', 'Lunga', 'Turu', 'Mangan'], ans: 0, exp: 'Lirik asli: "ketemu pisan gawe gela" (saking kangen atau ada kekecewaan).' },
      { text: 'Tembung "godhong tela" ing tembang Suwe Ora Jamu tegese...', opts: ['Daun singkong/ketela', 'Bunga mawar', 'Buah mangga', 'Akar bambu'], ans: 0, exp: 'Godhong = daun, tela = ketela/singkong.' },
      { text: 'Piwulang luhur sing bisa dijupuk saka tembang dolanan Jawa yaiku...', opts: ['Rukun, jujur, semangat, lan eling marang Gusti', 'Serakah lan sombong', 'Kesed sinau', 'Ora ngajeni kanca'], ans: 0, exp: 'Tembang dolanan ngemot ajaran budi pekerti.' },
    ],
  },
  {
    topicCode: 'BJ-SD4-06', subSeq: 4,
    objectives: ['Siswa mampu melengkapi dan membuat parikan sederhana 2 larik secara terbimbing.'],
    materialTitle: 'Nggawe Parikan Terbimbing',
    blocks: [
      { type: 'worked_example', level: 'Nggawe Parikan', question: 'Lengkapi parikan iki: "Tuku pudak ing pasar Gresik, ..."', steps: ['Delengen swara pungkasan purwaka: "Gresik" (akhiran -ik).', 'Goleki isi pitutur sing akhiran -ik, umpamane "becik" utawa "resik".', 'Dadine: "Tuku pudak ing pasar Gresik, dadi bocah kudu tumindak becik!"'], answer: 'Tuku pudak ing pasar Gresik, dadi bocah kudu tumindak becik!' },
    ],
    activityTitle: 'Latihan: Membuat Parikan',
    questions: [
      { text: 'Lengkapi parikan: "Nyang pasar tuku klapa, ..." supaya rimane pas (-pa) lan isine becik:', opts: ['Aja lali sinau maca lan nulis basa Jawa', 'Aja lali ngabekti marang wong tuwa', 'Kucing ireng turu ing meja', 'Banyu kali mili terus'], ans: 1, exp: '"Klapa" (-a/-pa) selaras karo "wong tuwa" lan ngemot pitutur berbakti.' },
      { text: 'Lengkapi parikan: "Mlaku-mlaku tuku tahu, ..."', opts: ['Dadi murid aja lali sinau!', 'Langite mendhung arep udan!', 'Sepedhane werna biru tua!', 'Bapak tindak menyang kantor!'], ans: 0, exp: '"Tahu" berima -u dengan "sinau" (belajar).' },
      { text: 'Langkah pisan nalika nggawe parikan terbimbing yaiku nemtokake...', opts: ['Pesan/isi sing arep disampake lan swara rimane', 'Jumlah halaman buku', 'Warna tinta', 'Jeneng toko'], ans: 0, exp: 'Nemtokake isi lan rima nggawe purwaka gampang disusun.' },
    ],
  },
];

upsertLessonsBatch('Kelas 4 SD — Bahasa Jawa Gresik Daratan (6 Bab, 22 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

