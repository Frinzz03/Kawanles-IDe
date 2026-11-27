import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: UNGGAH-UNGGUH BASA JAWA ING MANEKA KAHANAN (Gresik Daratan)
  {
    topicCode: 'BJ-SMP7-01', subSeq: 1,
    objectives: ['Siswa mampu membedakan 4 ragam unggah-ungguh basa Jawa: Ngoko Lugu, Ngoko Alus, Krama Lugu, dan Krama Alus.'],
    materialTitle: 'Papat Ragam Unggah-Ungguh Basa Jawa',
    blocks: [
      { type: 'table', title: '4 Ragam Unggah-Ungguh Basa Jawa (Tingkat SMP)', headers: ['Ragam Basa', 'Ciri Tembunge', 'Conto Ukara'], rows: [
        ['1. Ngoko Lugu', 'Kabeh tembung ngoko tanpa campuran krama', 'Kowe arep mangan sega krawu ing ngendi?'],
        ['2. Ngoko Alus', 'Ngoko dicampur KRAMA INGGIL kanggo ngajeni wong sing diajak omong/dirembug', 'Panjenengan arep dhahar sega krawu ing ngendi?'],
        ['3. Krama Lugu', 'Krama madya/lugu (sampeyan, nedha, kesah) tanpa krama inggil', 'Sampeyan badhe nedha sekul krawu wonten pundi?'],
        ['4. Krama Alus (Inggil)', 'Krama dicampur KRAMA INGGIL (paling alus lan ngurmati!)', 'Panjenengan badhe dhahar sekul krawu wonten pundi?'],
      ]},
    ],
    activityTitle: 'Latihan: 4 Ragam Unggah-Ungguh',
    questions: [
      { text: 'Ukara "Bapak arep tindak menyang kantor numpak sepedha motor" kalebu ragam basa...', opts: ['Ngoko Lugu', 'Ngoko Alus (ngoko + krama inggil "tindak")', 'Krama Lugu', 'Krama Alus'], ans: 1, exp: 'Ngoko ("arep, menyang, numpak") dicampur krama inggil ("tindak") = Ngoko Alus.' },
      { text: 'Ukara "Ibu sampun kondur saking peken" (Ibu sudah pulang dari pasar) kalebu ragam basa...', opts: ['Ngoko Lugu', 'Ngoko Alus', 'Krama Lugu', 'Krama Alus'], ans: 3, exp: 'Sampun, saking, peken (krama) + kondur (krama inggil) = Krama Alus.' },
      { text: 'Basa krama inggil kanggo tembung "mulih" (pulang) yaiku...', opts: ['Mantuk (krama lugu/awake dhewe)', 'Kondur (krama inggil kanggo wong tuwa)', 'Lunga', 'Tindak'], ans: 1, exp: 'Mulih (ngoko) → mantuk (krama lugu) → kondur (krama inggil).' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-01', subSeq: 2,
    objectives: ['Siswa mampu menyesuaikan pilihan ragam basa berdasarkan usia, status sosial, dan keakraban lawan bicara.'],
    materialTitle: 'Milih Basa Miturut Lawan Bicara',
    blocks: [
      { type: 'table', title: 'Panduan Milih Ragam Basa Miturut Lawan Bicara', headers: ['Lawan Bicara', 'Ragam Basa Sing Trep'], rows: [
        ['Kanca sebaya sing wis raket / marang adhik', 'Ngoko Lugu'],
        ['Kanca akrab sing luwih tuwa utawa wong tuwa akrab banget', 'Ngoko Alus'],
        ['Wong anyar sing sepantaran utawa durung akrab', 'Krama Lugu'],
        ['Wong tuwa, simbah, Bapak/Ibu Guru, tokoh masyarakat', 'Krama Alus'],
      ]},
    ],
    activityTitle: 'Latihan: Lawan Bicara',
    questions: [
      { text: 'Nalika siswa SMP kelas 7 matur marang Kepala Sekolah, ragam basa sing PALING trep yaiku...', opts: ['Krama Alus', 'Ngoko Lugu', 'Ngoko kasar', 'Campur acak'], ans: 0, exp: 'Krama Alus nuduhake tata krama paling dhuwur marang guru/pimpinan sekolah.' },
      { text: 'Antarane wong tuwa (Bapak/Ibu) sing wis akrab banget karo kanca kerjane sing sepantaran kerep nganggo...', opts: ['Ngoko Alus (akrab nanging tetep saling ngajeni)', 'Krama kaku', 'Basa kasar', 'Ora omong'], ans: 0, exp: 'Ngoko Alus nyambungake rasa akrab sekaligus rasa hormat.' },
      { text: 'Sapaan krama alus kanggo "kamu/Anda" marang guru utawa simbah yaiku...', opts: ['Kowe', 'Sampeyan', 'Panjenengan', 'Dheweke'], ans: 2, exp: 'Kowe (ngoko) → sampeyan (krama lugu) → panjenengan (krama alus).' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-01', subSeq: 3,
    objectives: ['Siswa mampu menyesuaikan unggah-ungguh dengan tujuan tuturan (meminta maaf, memohon izin, mengundang, menolak halus).'],
    materialTitle: 'Unggah-Ungguh Miturut Tujuan Tuturan',
    blocks: [
      { type: 'flashcards', title: 'Ukara Krama Alus Miturut Tujuan (Klik!)', cards: [
        { emoji: '🙏', front: 'Nyuwun Pangapunten (Minta Maaf)', back: 'Nuwun sewu Pak, kula nyuwun pangapunten amargi telat mlebet kelas.' },
        { emoji: '💌', front: 'Ngaturi Rawuh (Mengundang)', back: 'Bapak/Ibu, kula ngaturi rawuh wonten acara syukuran benjang Minggu.' },
        { emoji: '🙅', front: 'Nulak kanthi Alus', back: 'Matur nuwun sanget, nanging nyuwun pangapunten kula dereng saged ndherek.' },
      ]},
    ],
    activityTitle: 'Latihan: Tujuan Tuturan',
    questions: [
      { text: 'Ukara paling alus kanggo ngundang Pak RT rawuh ing acara kampung yaiku...', opts: ['Pak RT, tekaa menyang omahku sesuk!', 'Nuwun sewu Pak RT, kula ngaturi rawuh wonten griya benjang Minggu.', 'Pak RT kudu teka sesuk!', 'Sesuk menyang omahku ya, Pak!'], ans: 1, exp: '"Ngaturi rawuh" minangka ungkapan krama alus kanggo ngundang.' },
      { text: 'Tembung "dereng saged ndherek" ing ukara nulak alus tegese...', opts: ['Sudah bisa ikut', 'Belum bisa ikut', 'Tidak mau bicara', 'Akan segera datang'], ans: 1, exp: 'Dereng = belum, saged = bisa, ndherek = ikut.' },
      { text: 'Kanggo njaga rasa tepa slira nalika nulak tawaran wong liya, wiwitana nganggo...', opts: ['Matur nuwun lan nyuwun pangapunten kanthi alus', 'Suara nesu', 'Langsung mlaku lunga', 'Meneng tanpa jawab'], ans: 0, exp: 'Apresiasi lan nyuwun pangapunten njaga perasaan sing nawani.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-01', subSeq: 4,
    objectives: ['Siswa mampu menerapkan unggah-ungguh pada berbagai situasi resmi (upacara/rapat/kelas) dan tidak resmi (pasar/rumah/bermain).'],
    materialTitle: 'Unggah-Ungguh ing Situasi Resmi & Padinan',
    blocks: [
      { type: 'visual_cards', title: 'Peta Situasi Bahasa ing Gresik Daratan', cards: [
        { emoji: '🏫', label: 'Situasi Resmi (Rapat, Pidato, Kelas)', sub: 'Nganggo Krama Alus sing tertata lan baku' },
        { emoji: '🏡', label: 'Situasi Kulawarga', sub: 'Anak marang wong tuwa: Krama Alus; wong tuwa marang anak: Ngoko Lugu' },
        { emoji: '⚽', label: 'Situasi Santai (Karo Kanca)', sub: 'Ngoko Lugu sing tetep sopan tanpa tembung kasar' },
      ]},
    ],
    activityTitle: 'Latihan: Situasi Unggah-Ungguh',
    questions: [
      { text: 'Ing acara resmi pambuka pentas seni sekolah, pranatacara (MC) basa Jawa nggunakake ragam basa...', opts: ['Krama Alus', 'Ngoko Lugu', 'Basa gaul', 'Ngoko kasar'], ans: 0, exp: 'Acara resmi sekolah nganggo Krama Alus kanggo ngurmati kabeh tamu.' },
      { text: 'Kenangapa Bapak utawa Ibu biasane ngomong marang anake nganggo basa Ngoko?', opts: ['Amarga wong tuwa luwih sepuh lan basa ngoko nuduhake rasa tresna/akrab marang anak', 'Amarga ora bisa basa krama', 'Amarga lagi nesu', 'Amarga ora ngajeni'], ans: 0, exp: 'Ing unggah-ungguh Jawa, wong tuwa marang anak nganggo ngoko, anak marang wong tuwa nganggo krama.' },
      { text: 'Basa krama saka tembung "ngomong/berkata" kanggo Bapak/Ibu utawa Guru yaiku...', opts: ['Ngendika', 'Matur', 'Omong', 'Bengok'], ans: 0, exp: 'Wong tuwa/guru = ngendika; awake dhewe marang wong tuwa = matur!' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-01', subSeq: 5,
    objectives: ['Siswa mampu menganalisis dan memperbaiki kesalahan penerapan unggah-ungguh dalam teks dialog.'],
    materialTitle: 'Analisis lan Mbenerake Dialog Unggah-Ungguh',
    blocks: [
      { type: 'worked_example', level: 'Temokna Salahe!', question: 'Benerna ukara siswa marang Bu Guru iki: "Bu, kula badhe dhahar rumiyin lan kula badhe kondur."', steps: ['"Dhahar" lan "kondur" iku KRAMA INGGIL — ora kena dienggo awake dhewe ("kula")!', 'Ganti nganggo krama lugu/andhap: "dhahar" → "nedha", "kondur" → "mantuk".'], answer: '"Bu, kula badhe nedha rumiyin lan badhe mantuk."' },
    ],
    activityTitle: 'Latihan: Analisis Dialog',
    questions: [
      { text: 'Kesalahan unggah-ungguh ing ukara "Kula sampun sare jam sanga dalu" dumunung ing tembung...', opts: ['Kula', 'Sampun', 'Sare (krama inggil, kanggo awake dhewe kudune "tilem")', 'Dalu'], ans: 2, exp: 'Sare = tidur kanggo wong tuwa; tilem = tidur kanggo awake dhewe.' },
      { text: 'Perbaikan sing BENER kanggo ukara "Ibu nembe mangan, dene aku lagi dhahar" yaiku...', opts: ['Ibu nembe dhahar, dene aku lagi mangan (utawa kula nembe nedha).', 'Ibu nembe nedha, aku lagi dhahar.', 'Ibu lan aku padha dhahar.', 'Ibu mangan, aku sare.'], ans: 0, exp: 'Ibu nganggo krama inggil "dhahar"; awake dhewe "mangan/nedha".' },
      { text: 'Tembung "matur" digunakake nalika...', opts: ['Wong enom ngomong marang wong tuwa/guru ("Kula badhe matur, Pak")', 'Guru ngomong marang murid', 'Kanca ngomong kasar', 'Kewan muni'], ans: 0, exp: 'Krama andhap "matur" kanggo ngasorake awake dhewe marang sing luwih sepuh.' },
    ],
  },

  // BAB 2: PACELATHON LAN KOMUNIKASI
  {
    topicCode: 'BJ-SMP7-02', subSeq: 1,
    objectives: ['Siswa mampu mengidentifikasi beragam tujuan pacelathon (informasi, musyawarah, kerja sama, silaturahmi).'],
    materialTitle: 'Tujuan Pacelathon ing Urip Masyarakat',
    blocks: [
      { type: 'text', text: 'Pacelathon (dialog) ing basa Jawa nduweni maneka tujuan: nyambung silaturahmi, takon informasi, rembugan/musyawarah kampung, kerja sama kelompok sekolah, lan transaksi jual beli ing pasar.' },
    ],
    activityTitle: 'Latihan: Tujuan Pacelathon',
    questions: [
      { text: 'Pacelathon warga kampung kanggo nemtokake jadwal kerja bakti resik-resik selokan nduweni tujuan...', opts: ['Rembugan / musyawarah nggolek mufakat', 'Tukar padu', 'Jual beli', 'Lomba nyanyi'], ans: 0, exp: 'Rembugan warga ngasilake keputusan bebarengan.' },
      { text: 'Tembung "rembugan" ing basa Indonesia tegese...', opts: ['Berdiskusi / bermusyawarah', 'Berlari', 'Tidur', 'Makan'], ans: 0, exp: 'Rembugan = diskusi/musyawarah.' },
      { text: 'Ciri utama teks pacelathon tinulis yaiku...', opts: ['Nganggo jeneng paraga, titik dua (:), lan tanda petik ("...") kanggo ukara langsung', 'Kabeh arupa paragraf tanpa dialog', 'Nganggo guru gatra', 'Nganggo sampiran'], ans: 0, exp: 'Format naskah dialog nampilake giliran omong paraga.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-02', subSeq: 2,
    objectives: ['Siswa mampu menyusun struktur pacelathon yang utuh: pambuka (salam), isi (pokok rembugan), lan panutup (pamit/matur nuwun).'],
    materialTitle: 'Struktur Pacelathon sing Runtut',
    blocks: [
      { type: 'table', title: '3 Bagean Struktur Pacelathon', headers: ['Bagean', 'Isine'], rows: [
        ['1. Pambuka', 'Uluk salam ("Sugeng enjang", "Assalamualaikum"), takon kabar ("Kados pundi kabaripun?")'],
        ['2. Isi', 'Njlentrehake maksud, takon-wangsulan, utawa rembugan inti'],
        ['3. Panutup', 'Simpulan kesepakatan, matur nuwun, nyuwun pamit, salam panutup'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Pacelathon',
    questions: [
      { text: 'Ukara "Sugeng sonten, Pak. Kados pundi kabaripun?" manggon ing bagean ... pacelathon.', opts: ['Pambuka', 'Isi', 'Panutup', 'Catatan kaki'], ans: 0, exp: 'Salam lan takon kabar mbukak pacelathon kanthi akrab.' },
      { text: 'Ukara "Matur nuwun sanget, Bu. Kula nyuwun pamit wangsul rumiyin" manggon ing bagean...', opts: ['Pambuka', 'Isi', 'Panutup', 'Judul'], ans: 2, exp: 'Matur nuwun lan pamit nutup dialog.' },
      { text: 'Menawa langsung takon utawa nyuwun tulung tanpa uluk salam dhisik, kesane dadi...', opts: ['Kurang sopan lan kesusu', 'Luwih akrab', 'Luwih resmi', 'Paling bener'], ans: 0, exp: 'Uluk salam minangka adab pambuka komunikasi.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-02', subSeq: 3,
    objectives: ['Siswa mampu menyusun kalimat tanya (ukara pitakon) Bahasa Jawa ngoko dan krama secara tepat.'],
    materialTitle: 'Ukara Pitakon (Bertanya) ing Pacelathon',
    blocks: [
      { type: 'table', title: 'Tembung Pitakon Ngoko ↔ Krama', headers: ['Basa Indonesia', 'Ngoko', 'Krama'], rows: [
        ['Apa / Siapa', 'Apa / Sapa', 'Punapa / Sinten'],
        ['Di mana / Berapa', 'Ing ngendi / Pira', 'Wonten pundi / Pinten'],
        ['Mengapa / Bagaimana', 'Geneya / Kepriye', 'Kenging punapa / Kados pundi'],
      ]},
    ],
    activityTitle: 'Latihan: Bertanya Basa Jawa',
    questions: [
      { text: 'Ukara pitakon krama alus kanggo takon "Kapan Bapak pulang dari Surabaya?" yaiku...', opts: ['Kapan Bapak mulih saka Surabaya?', 'Benjang punapa Bapak kondur saking Surabaya?', 'Bapak kondur Surabaya kapan?', 'Sampeyan mulih kapan?'], ans: 1, exp: 'Benjang punapa (kapan) + kondur (krama inggil pulang) + saking (dari).' },
      { text: 'Ukara "Reginipun iwak bandeng sakilo pinten, Bu?" takon babagan...', opts: ['Harga per kilogram', 'Warna ikan', 'Alamat pasar', 'Jam buka'], ans: 0, exp: 'Regi (krama saka rega) = harga; pinten = berapa.' },
      { text: 'Tembung pitakon "Kados pundi caranipun damel pudak?" tegese...', opts: ['Bagaimana cara membuat pudak?', 'Di mana membeli pudak?', 'Berapa harga pudak?', 'Siapa yang makan pudak?'], ans: 0, exp: 'Kados pundi = bagaimana; damel = membuat.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-02', subSeq: 4,
    objectives: ['Siswa mampu menggunakan kalimat permohonan/permintaan bantuan dan izin (ukara panyuwun) secara santun.'],
    materialTitle: 'Ukara Panyuwun (Meminta Bantuan & Izin)',
    blocks: [
      { type: 'flashcards', title: 'Ungkapan Memohon Sopan (Klik!)', cards: [
        { emoji: '🤝', front: 'Nyuwun tulung marang guru/ortu', back: 'Nuwun sewu Bu, kepareng kula nyuwun pirsa / nyuwun tulung...' },
        { emoji: '🚪', front: 'Nyuwun pamit / izin', back: 'Kepareng kula nyuwun izin dhateng perpustakaan, Pak.' },
        { emoji: '📖', front: 'Nyilih barang kanca', back: 'Rak, tulung aku nyilih penggarismu sedhela ya!' },
      ]},
    ],
    activityTitle: 'Latihan: Meminta Bantuan & Izin',
    questions: [
      { text: 'Tembung "kepareng" ing ukara "Kepareng kula nyuwun izin, Bu" tegese...', opts: ['Mohon berkenan / bolehkah (sopan)', 'Harus sekarang', 'Tidak boleh', 'Cepatlah'], ans: 0, exp: 'Kepareng = berkenan/diperkenankan.' },
      { text: 'Tembung krama kanggo "minta" marang wong tuwa utawa guru yaiku...', opts: ['Njaluk', 'Nyuwun', 'Jupuk', 'Tuku'], ans: 1, exp: 'Njaluk (ngoko) → nyuwun (krama).' },
      { text: 'Yen arep nyilih buku marang Pak Guru, basa krama saka "nyilih" (pinjam) yaiku...', opts: ['Nyambut ("Kula nyuwun ngampil/nyambut buku punika, Pak")', 'Njaluk', 'Maringi', 'Tumbas'], ans: 0, exp: 'Nyilih (ngoko) = nyambut / ngampil (krama).' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-02', subSeq: 5,
    objectives: ['Siswa mampu menyampaikan pendapat (panemu) dan menanggapi usulan secara santun dalam diskusi berbahasa Jawa.'],
    materialTitle: 'Ngaturake Panemu (Berpendapat) ing Basa Jawa',
    blocks: [
      { type: 'visual_cards', title: 'Ukara Santun Ngaturake Panemu', cards: [
        { emoji: '💡', label: 'Ngajokake Usul', sub: '"Miturut pamanggih kula, langkung sae menawi..." (Menurut pendapat saya, lebih baik jika...)' },
        { emoji: '👍', label: 'Sarujuk (Setuju)', sub: '"Kula sarujuk kaliyan usulipun Alya amargi..."' },
        { emoji: '🤝', label: 'Beda Panemu', sub: '"Nyuwun pangapunten, kula gadhah pamanggih sanes..."' },
      ]},
    ],
    activityTitle: 'Latihan: Berpendapat Basa Jawa',
    questions: [
      { text: 'Tembung "sarujuk" ing diskusi basa Jawa tegese...', opts: ['Setuju / sependapat', 'Menolak keras', 'Bingung', 'Marah'], ans: 0, exp: 'Sarujuk = setuju.' },
      { text: 'Tembung "pamanggih" ing ukara "Miturut pamanggih kula..." tegese...', opts: ['Pendapat / pandangan', 'Makanan', 'Rumah', 'Jalan'], ans: 0, exp: 'Pamanggih (krama) = panemu (ngoko) = pendapat.' },
      { text: 'Ukara "Langkung sae menawi kerja bakti dipunwiwiti jam pitu enjang" nduweni teges...', opts: ['Lebih baik apabila kerja bakti dimulai pukul tujuh pagi', 'Kerja bakti dibatalkan', 'Tidak usah kerja bakti', 'Kerja bakti malam hari'], ans: 0, exp: 'Langkung sae = lebih baik; dipunwiwiti = dimulai.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-02', subSeq: 6,
    objectives: ['Siswa mampu menerapkan etika komunikasi Jawa (subasita, intonasi lembut, nyemak, ora nyela) saat tatap muka maupun pesan digital.'],
    materialTitle: 'Etika Komunikasi lan Subasita Jawa',
    blocks: [
      { type: 'list', title: '4 Prinsip Etika Komunikasi Jawa (Subasita)', items: ['1. Ajining dhiri saka lathi: jaga ucapan, hindari misuh/nyelekit.', '2. Polatan sumeh & grapyak: wajah ramah dan tenang.', '3. Tepa slira: dengarkan penuh perhatian, jangan memotong ucapan orang lain.', '4. Ing pesan WA marang guru: salam → jeneng & kelas → maksud nganggo krama sopan → matur nuwun!'] },
    ],
    activityTitle: 'Latihan: Etika Komunikasi Jawa',
    questions: [
      { text: 'Tatakrama tindak-tanduk lan solah bawa awak nalika omong-omongan ing budaya Jawa diarani...', opts: ['Subasita', 'Parikan', 'Aksara', 'Alur'], ans: 0, exp: 'Subasita = tata krama perilaku/sopan santun.' },
      { text: 'Pesan WA siswa SMP marang wali kelas sing paling trep etika Jawa yaiku...', opts: ['"Sugeng sonten Bu, kula Bima kelas 7B. Nuwun sewu badhe nyuwun pirsa babagan tugas basa Jawa. Matur nuwun, Bu."', '"Bu tugase opo??"', '"P, bu cepet balas!"', '"Aku Bima, sesuk libur ta?"'], ans: 0, exp: 'Ngemot salam, identitas cetha, basa krama alus, lan matur nuwun.' },
      { text: 'Nalika matur marang wong sing luwih sepuh, swara lan nada kita kudune...', opts: ['Alus, cetha, lan ora mbentak', 'Banter kaya nesu', 'Bisik-bisik ora krungu', 'Ngguyu terus'], ans: 0, exp: 'Intonasi lembut lan cetha wujud rasa ngurmati.' },
    ],
  },

  // BAB 3: TEKS DESKRIPSI BASA JAWA
  {
    topicCode: 'BJ-SMP7-03', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan tujuan teks deskripsi Bahasa Jawa untuk mengenalkan kekayaan budaya, kuliner, dan tempat di lingkungan Gresik daratan.'],
    materialTitle: 'Tujuan Teks Deskripsi Basa Jawa',
    blocks: [
      { type: 'text', text: 'Teks deskripsi basa Jawa nduweni tujuan nggambarake kahanan sawijining objek (kayata panganan tradisional, kerajinan songkok, taman kota, utawa lingkungan sekolah) kanthi rinci supaya pamaca melu ngrasakake kaendahan lan keunikane.' },
    ],
    activityTitle: 'Latihan: Tujuan Deskripsi Jawa',
    questions: [
      { text: 'Tujuan utama teks deskripsi babagan "Sega Krawu Gresik" yaiku...', opts: ['Nggambarake rupa, werna serundeng, ambu sedhep, lan rasa sega krawu nganti pamaca kaya melu ngrasakake', 'Ngitung untung rugi warung', 'Ngumumake lomba', 'Nyritakake dongeng kewan'], ans: 0, exp: 'Deskripsi nguripake kesan pancaindra pamaca.' },
      { text: 'Teks deskripsi basa Jawa beda karo teks narasi amarga teks deskripsi luwih fokus marang...', opts: ['Ciri-ciri lan kahanan sawijining objek, dudu urutan konflik crita', 'Alur konflik lan klimaks', 'Sampiran 2 larik', 'Daftar tanggal'], ans: 0, exp: 'Deskripsi nglukis objek; narasi nyritakake rangkaian prastawa.' },
      { text: 'Nulis teks deskripsi budaya lokal Gresik uga nduweni manfaat kanggo...', opts: ['Ngenalake lan nglestarekake potensi lokal daerah marang generasi enom', 'Nglalekake budaya dhewe', 'Niru negara liya', 'Mbuwang wektu'], ans: 0, exp: 'Dokumentasi deskriptif melestarikan kearifan lokal.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-03', subSeq: 2,
    objectives: ['Siswa mampu menganalisis 3 struktur teks deskripsi Bahasa Jawa: Identifikasi, Klasifikasi/Deskripsi Bagean, lan Panutup/Kesan.'],
    materialTitle: 'Struktur Teks Deskripsi Basa Jawa',
    blocks: [
      { type: 'table', title: '3 Struktur Teks Deskripsi SMP', headers: ['Bagean', 'Katrangane'], rows: [
        ['1. Identifikasi', 'Ngenalake jeneng objek, panggonan, lan gambaran umum'],
        ['2. Deskripsi Bagean', 'Njlentrehake perangan-perangan objek kanthi rinci (rupa, werna, bahan, fungsi, swasana)'],
        ['3. Panutup / Kesan', 'Dudutan (kesimpulan) lan kesan pribadine penulis'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Deskripsi Jawa',
    questions: [
      { text: 'Tembung "dudutan" ing struktur panutup karangan basa Jawa tegese...', opts: ['Kesimpulan / simpulan', 'Judul', 'Paraga', 'Konflik'], ans: 0, exp: 'Dudutan = kesimpulan.' },
      { text: 'Bagian teks deskripsi "Songkok Gresik" sing njlentrehake kain bludru ireng alus, jahitan rapi, lan motif bordir manggon ing...', opts: ['Deskripsi bagean', 'Identifikasi', 'Panutup', 'Daftar pustaka'], ans: 0, exp: 'Merinci bahan, warna, dan motif adalah deskripsi bagian.' },
      { text: 'Urutan struktur teks deskripsi basa Jawa sing bener yaiku...', opts: ['Identifikasi → Deskripsi Bagean → Panutup/Kesan', 'Panutup → Identifikasi → Bagean', 'Purwaka → Isi', 'Wiwitan → Klimaks'], ans: 0, exp: 'Identifikasi → Deskripsi Bagean → Panutup.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-03', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi ciri kebahasaan teks deskripsi Jawa (tembung kahanan, tembung kriya, ukara panyandra/kiasan sederhana).'],
    materialTitle: 'Ciri Kebahasaan Teks Deskripsi Jawa',
    blocks: [
      { type: 'list', title: 'Ciri Kebahasaan Teks Deskripsi Basa Jawa', items: ['Akeh nganggo tembung kahanan (kata sifat: resik, endah, gurih, alus, jembar).', 'Nganggo tembung katrangan panggonan (ing sisih lor, ing pinggir, cedhak).', 'Nganggo tembung khusus/konkret lan ukara panyandra kanggo nguripake gambarane.'] },
    ],
    activityTitle: 'Latihan: Ciri Kebahasaan Deskripsi',
    questions: [
      { text: 'Tembung "kahanan" ing tata basa Jawa padha karo...', opts: ['Kata sifat (adjektiva)', 'Kata benda', 'Kata bilangan', 'Kata tanya'], ans: 0, exp: 'Tembung kahanan = kata sifat; tembung aran = kata benda; tembung kriya = kata kerja.' },
      { text: '"Pantai iku ombake alus lan angine sumilir ngademake raga." Tembung "raga" tegese...', opts: ['Tubuh / badan', 'Rumah', 'Sepatu', 'Air'], ans: 0, exp: 'Raga = awak / tubuh.' },
      { text: 'Tembung "kriya" ing ukara "Para perajin njait kain bludru kanthi tliti" yaiku...', opts: ['njait (menjahit)', 'perajin', 'bludru', 'tliti'], ans: 0, exp: 'Tembung kriya = kata kerja (njait).' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-03', subSeq: 4,
    objectives: ['Siswa mampu merinci objek pengamatan dari berbagai sudut indrawi secara faktual dan menarik.'],
    materialTitle: 'Njlentrehake Rincian Objek',
    blocks: [
      { type: 'story_panel', title: 'Conto Rincian: Sega Krawu Khas Gresik', lines: [
        { speaker: 'Wacan', avatar: '🍛', text: 'Sega krawu disuguhake ing dhuwur pincuk godhong gedhang sing ambune khas. Segane pulen anget, lawuhe suwiran daging sapi empuk manis gurih, ditaburi serundeng klapa werna kuning lan abang, sarta sambel petis pedes sing nggugah selera.' },
      ]},
    ],
    activityTitle: 'Latihan: Rincian Objek Jawa',
    questions: [
      { text: 'Wadah khas sega krawu ing wacan dhuwur yaiku "pincuk godhong gedhang". Tegese "pincuk" yaiku...', opts: ['Wadah makanan dari lipatan daun pisang yang disemat lidi', 'Piring kaca', 'Mangkuk besi', 'Kantong plastik'], ans: 0, exp: 'Pincuk godhong gedhang memberi aroma sedap alami.' },
      { text: 'Indra sing digugah dening rincian "empuk, manis gurih, pedes" yaiku indra...', opts: ['Perabaan (tekstur) lan pengecapan (rasa)', 'Pendengaran', 'Penglihatan wae', 'Keseimbangan'], ans: 0, exp: 'Empuk (tekstur lidah/peraba), manis-gurih-pedas (pengecapan).' },
      { text: 'Tembung "suwiran daging" tegese daging sing...', opts: ['Disuwir-suwir alus (disobek kecil-kecil)', 'Dibiarkan utuh besar', 'Dibekukan', 'Direbus tanpa bumbu'], ans: 0, exp: 'Daging suwir empuk adalah ciri khas sega krawu Gresik.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-03', subSeq: 5,
    objectives: ['Siswa mampu memperkaya kosakata deskripsi Bahasa Jawa (sinonim/dasar tembung padha tegese lan antonim/kosok balen).'],
    materialTitle: 'Kosakata Sinonim & Kosok Balen Deskripsi',
    blocks: [
      { type: 'table', title: 'Tembung Padha Tegese (Sinonim) & Kosok Balen (Antonim)', headers: ['Tembung', 'Padha Tegese (Sinonim)', 'Kosok Balen (Antonim)'], rows: [
        ['Endah', 'Apik, edi, peni', 'Ala / elek'],
        ['Jembar', 'Amba, wiyar', 'Ciyut / sempit'],
        ['Misuwur', 'Kondhang, kawentar', 'Ora dikenal'],
        ['Adhem', 'Asrep, seger', 'Panas / benter'],
      ]},
    ],
    activityTitle: 'Latihan: Kosakata Deskripsi Jawa',
    questions: [
      { text: 'Kosok baline (antonim) tembung "jembar / amba" (luas) yaiku...', opts: ['Ciyut (sempit)', 'Dhuwur', 'Dawa', 'Gedhe'], ans: 0, exp: 'Jembar/amba ↔ ciyut.' },
      { text: 'Tembung sing PADHA TEGESE (sinonim) karo "kondhang" yaiku...', opts: ['Misuwur lan kawentar', 'Sepi lan ciyut', 'Panas lan garing', 'Reged lan ala'], ans: 0, exp: 'Kondhang = misuwur = kawentar (terkenal).' },
      { text: 'Basa krama saka tembung "panas" yaiku...', opts: ['Benter', 'Asrep', 'Wiyar', 'Alit'], ans: 0, exp: 'Panas = benter; adhem = asrep; amba = wiyar; cilik = alit.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-03', subSeq: 6,
    objectives: ['Siswa mampu menyunting karangan teks deskripsi Bahasa Jawa (ejaan a/o, d/dh, t/th, konsistensi ragam basa, tanda baca).'],
    materialTitle: 'Nyunting Teks Deskripsi Basa Jawa',
    blocks: [
      { type: 'list', title: 'Checklist Suntingan Teks Basa Jawa SMP', items: ['1. Cek vokal "a" jejeg (tulis: sega, maca, dawa, amba — DUDU sego, moco, dowo!).', '2. Cek konsonan dh/th (gedhang, godhong, dhahar, bathik, pethak).', '3. Cek konsistensi ragam basa (Ngoko utawa Krama) sarta tanda baca!'] },
    ],
    activityTitle: 'Latihan: Penyuntingan Teks Jawa',
    questions: [
      { text: 'Suntingan ejaan baku basa Jawa sing BENER kanggo ukara "Latar sekolahan iku ombo lan akeh godong gedang" yaiku...', opts: ['Latar sekolahan iku amba lan akeh godhong gedhang.', 'Latar sekolahan iku ombo lan akeh godhong gedang.', 'Latar sekolahan iku amba lan akeh godong gedhang.', 'Latar sekolahan iku omba lan akeh godhong gedhang.'], ans: 0, exp: 'Amba (vokal a jejeg), godhong, gedhang (konsonan dh).' },
      { text: 'Penulisan "ing" minangka tembung ancer-ancer panggonan (kata depan tempat) sing bener yaiku...', opts: ['ing pasar, ing alun-alun (dipisah)', 'ingpasar, ingalun-alun (digabung)', 'ing-pasar', 'ING pasar'], ans: 0, exp: '"ing" (di) penunjuk tempat selalu ditulis terpisah.' },
      { text: 'Kegiatan nyunting sadurunge karangan dikumpulake tujuane supaya...', opts: ['Tulisan resik saka salah ejaan, runtut, lan gampang dipahami', 'Tulisane dadi cendhak banget', 'Mbusak judule', 'Ngganti topik'], ans: 0, exp: 'Penyuntingan njamin mutu kebahasaan teks.' },
    ],
  },

  // BAB 4: TEKS NARASI LAN CRITA RAKYAT
  {
    topicCode: 'BJ-SMP7-04', subSeq: 1,
    objectives: ['Siswa mampu menganalisis unsur intrinsik lengkap teks narasi dan cerita rakyat Jawa (tema, paraga, latar, alur, sudut pandang, amanat).'],
    materialTitle: 'Unsur Intrinsik Narasi & Crita Rakyat Jawa',
    blocks: [
      { type: 'text', text: 'Crita rakyat ing budaya Jawa minangka warisan sastra lisan sing ngemot piwulang luhur. Jinis crita rakyat antara liya: fabel (crita kewan), legenda (asal-usul panggonan), mite (kepercayaan kuna), lan sage (crita kepahlawanan).' },
    ],
    activityTitle: 'Latihan: Unsur Crita Rakyat',
    questions: [
      { text: 'Crita rakyat sing nyritakake asal-usul sawijining panggonan (kayata Rawa Pening utawa Tangkuban Perahu) diarani...', opts: ['Legenda', 'Fabel', 'Parikan', 'Geguritan'], ans: 0, exp: 'Legenda = cerita rakyat tentang asal-usul tempat/benda alam.' },
      { text: 'Crita rakyat sing paragane kewan bisa omong-omongan lan ngemot pitutur (kayata Kancil) diarani...', opts: ['Fabel', 'Legenda', 'Sage', 'Berita'], ans: 0, exp: 'Fabel = cerita bertokoh binatang.' },
      { text: 'Unsur intrinsik sing dadi pokok pikiran utama saindenging crita diarani...', opts: ['Tema (underaning crita)', 'Latar', 'Paraga', 'Judul'], ans: 0, exp: 'Tema adalah gagasan dasar cerita.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-04', subSeq: 2,
    objectives: ['Siswa mampu menelaah jenis alur (maju, mundur, campuran) dan tahapan alur dalam cerita rakyat Jawa.'],
    materialTitle: 'Alur Crita Rakyat Jawa',
    blocks: [
      { type: 'tip', text: 'Mayoritas crita rakyat tradisional Jawa (kayata Andhe-Andhe Lumut, Keong Mas, Timun Mas) nganggo ALUR MAJU supaya gampang disemak dening bocah lan wong akeh nalika didongengake kanthi lisan!' },
    ],
    activityTitle: 'Latihan: Alur Crita Rakyat',
    questions: [
      { text: 'Kenangapa umume crita rakyat lisan tradisional nggunakake ALUR MAJU?', opts: ['Supaya gampang diikuti lan dieling-eling dening pamireng nalika dicritakake kanthi lisan', 'Amarga ora duwe paraga', 'Amarga mung 2 baris', 'Ora ana alasane'], ans: 0, exp: 'Alur kronologis maju memudahkan tradisi penceritaan lisan.' },
      { text: 'Tahap alur nalika tokoh ngadhepi puncak ujian paling abot diarani...', opts: ['Klimaks (pucuking pasulayan)', 'Wiwitan', 'Panutup', 'Identifikasi'], ans: 0, exp: 'Klimaks adalah puncak ketegangan cerita.' },
      { text: 'Sawise klimaks, crita mlebu tahap peleraian lan pangudhare prakara (resolusi) sing isine...', opts: ['Dalan metu lan rampunge masalah sing dialami tokoh', 'Muncul tokoh anyar sing ora nyambung', 'Ngulang wiwitan', 'Daftar isi'], ans: 0, exp: 'Resolusi menuntaskan konflik.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-04', subSeq: 3,
    objectives: ['Siswa mampu membedakan paraga protagonis, antagonis, dan tritagonis beserta bukti wataknya dalam cerita rakyat Jawa.'],
    materialTitle: 'Tokoh lan Watak Crita Rakyat',
    blocks: [
      { type: 'table', title: 'Conto Paraga ing Crita Rakyat Jawa "Keong Mas"', headers: ['Peran', 'Paraga', 'Watake'], rows: [
        ['Protagonis', 'Dewi Sekartaji (Candra Kirana) & Raden Inu Kertapati', 'Sabar, setya, tabah ngadhepi pacoban'],
        ['Antagonis', 'Dewi Galuh', 'Drengki (iri hati) lan seneng gawe cilaka'],
        ['Tritagonis (Penolong)', 'Mbok Randa Dadapan', 'Loma (dermawan), welas asih, seneng tetulung'],
      ]},
    ],
    activityTitle: 'Latihan: Tokoh Crita Rakyat',
    questions: [
      { text: 'Tembung "loma" lan "welas asih" kanggo watake Mbok Randa Dadapan tegese...', opts: ['Dermawan dan penuh kasih sayang', 'Kikir dan pemarah', 'Sombong', 'Penakut'], ans: 0, exp: 'Loma = dermawan/murah hati; welas asih = penyayang.' },
      { text: 'Kosok baline sifat "loma" (dermawan) ing basa Jawa yaiku "medhit" utawa "cethil" sing tegese...', opts: ['Pelit / kikir', 'Sabar', 'Jujur', 'Rajin'], ans: 0, exp: 'Medhit/cethil = pelit.' },
      { text: 'Sifat "drengki" tokoh antagonis ing crita rakyat dadi pangeling supaya kita...', opts: ['Ngedohi rasa iri marang kabegjane wong liya', 'Melu iri marang kanca', 'Mbalas dendam', 'Umuk'], ans: 0, exp: 'Iri hati merusak persaudaraan dan merugikan diri sendiri.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-04', subSeq: 4,
    objectives: ['Siswa mampu menganalisis fungsi latar tempat, waktu, dan latar sosial-budaya kerajaan/pedesaan Jawa dalam cerita rakyat.'],
    materialTitle: 'Latar ing Crita Rakyat Jawa',
    blocks: [
      { type: 'text', text: 'Crita rakyat Jawa kerep nganggo latar pedesaan (sawah, alas, kali, desa cilik) utawa latar kraton/kerajaan kuna. Latar iki nggambarake kahanan sosial-budaya masyarakat Jawa jaman biyen (gotong royong, ngajeni wong tuwa, urip selaras karo alam).' },
    ],
    activityTitle: 'Latihan: Latar Crita Rakyat',
    questions: [
      { text: 'Latar "gubug cilik ing pinggir desa Dadapan" ing crita Keong Mas nggambarake latar...', opts: ['Tempat lan sosial (kesederhanaan urip wong desa)', 'Kota modern', 'Pabrik besar', 'Luar angkasa'], ans: 0, exp: 'Gubug desa menggambarkan kesederhanaan sekaligus ketulusan hati tokoh.' },
      { text: 'Tembung "kraton" ing crita rakyat Jawa tegese...', opts: ['Istana kerajaan', 'Pasar ikan', 'Sekolah', 'Pelabuhan'], ans: 0, exp: 'Kraton = istana tempat tinggal raja.' },
      { text: 'Tembung "padesan" tegese wilayah...', opts: ['Pedesaan', 'Perkotaan', 'Lautan', 'Pegunungan es'], ans: 0, exp: 'Desa → padesan (pedesaan).' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-04', subSeq: 5,
    objectives: ['Siswa mampu mengidentifikasi konflik batin dan konflik antar-tokoh dalam cerita rakyat Jawa.'],
    materialTitle: 'Konflik (Pasulayan) ing Crita Rakyat',
    blocks: [
      { type: 'worked_example', level: 'Bedah Konflik', question: 'Ing crita "Andhe-Andhe Lumut", apa pasulayan (konflik) utama sing dialami Kleting Kuning?', steps: ['Konflik eksternal: Kleting Kuning diperlakokake ora adil dening ibu tiri lan sedulur-sedulure (Kleting Abang, Ijo, Biru).', 'Penyelesaian: Kesabaran lan kejujuran Kleting Kuning ndadekake dheweke sing dipilih dening Andhe-Andhe Lumut!'], answer: 'Keadilan lan kesabaran ngalahake kelicikan.' },
    ],
    activityTitle: 'Latihan: Konflik Crita Rakyat',
    questions: [
      { text: 'Konflik ing crita rakyat umume muncul amarga pertentangan antarane...', opts: ['Watak becik (jujur, sabar) nglawan watak ala (srakah, drengki, curang)', 'Angka genap lan ganjil', 'Dua warna cat', 'Nama hari'], ans: 0, exp: 'Pertentangan moral menjadi inti didaktis cerita rakyat.' },
      { text: 'Tembung "pacoban" ing ukara "Sabar ngadhepi pacoban" tegese...', opts: ['Cobaan / ujian hidup', 'Hadiah', 'Makanan', 'Pakaian'], ans: 0, exp: 'Pacoban = cobaan/ujian.' },
      { text: 'Ing pungkasane crita rakyat Jawa, tokoh sing sabar lan jujur lumrahe oleh...', opts: ['Kabegjan lan kamulyan (kebahagiaan/kemenangan moral)', 'Hukuman', 'Kesusahan terus', 'Dilupakan'], ans: 0, exp: 'Sesuai prinsip "Becik ketitik, ala ketara".' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-04', subSeq: 6,
    objectives: ['Siswa mampu mengaitkan amanat cerita rakyat Jawa dengan tantangan pergaulan remaja SMP saat ini.'],
    materialTitle: 'Amanat Crita Rakyat kanggo Remaja SMP',
    blocks: [
      { type: 'tip', text: 'Nilai crita rakyat tetep cocok kanggo pelajar SMP jaman digital: aja gampang iri ndeleng medsos wong liya (bebas drengki), tetep jujur nggarap tugas tanpa nyontek, lan tetep sopan marang wong tuwa!' },
    ],
    activityTitle: 'Latihan: Amanat Crita Rakyat',
    questions: [
      { text: 'Relevansi amanat crita "Bawang Putih" (sabar, jujur, ora serakah) kanggo pelajar SMP saiki yaiku...', opts: ['Nggarap ujian kanthi jujur, ora iri marang prestasine kanca, lan seneng mbantu', 'Mung cocok kanggo jaman kraton', 'Aja gelem sinau', 'Ngece kanca'], ans: 0, exp: 'Nilai kejujuran dan anti-keserakahan berlaku sepanjang zaman.' },
      { text: 'Amanat sing ora ditulis langsung nanging kudu disimpulake dhewe saka lakune crita diarani amanat...', opts: ['Tersirat (implisit)', 'Tersurat', 'Formal', 'Judul'], ans: 0, exp: 'Tersirat = perlu disimpulkan dari keseluruhan peristiwa.' },
      { text: 'Sikap "nrima ing pandum" sing asring dadi piwulang Jawa tegese...', opts: ['Bersyukur dan ikhlas menerima hasil terbaik setelah berusaha sungguh-sungguh', 'Malas bekerja', 'Tidak punya cita-cita', 'Pasrah tanpa usaha'], ans: 0, exp: 'Nrima ing pandum selalu didahului ikhtiar sungguh-sungguh.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-04', subSeq: 7,
    objectives: ['Siswa mampu membedakan cerita rakyat (folklor) dari sumber sejarah resmi serta menggunakan sumber cerita rakyat terverifikasi.'],
    materialTitle: 'Sumber Crita Rakyat Terverifikasi',
    blocks: [
      { type: 'list', title: 'Rujukan Sumber Crita Rakyat sing Bisa Dipercaya', items: ['1. Buku pelajaran resmi Basa Jawa lan antologi cerita rakyat Kemendikbud / Balai Bahasa Jawa Timur.', '2. Koleksi perpustakaan daerah utawa museum resmi.', '3. Bedakna kanthi cetha antarane CRITA RAKYAT (folklor budaya) lan FAKTA SEJARAH ARSIP!'] },
      { type: 'teacher_note', text: 'Pastikan setiap contoh cerita rakyat Jawa yang dibahas berasal dari terbitan resmi Balai Bahasa / Kemendikbud dan tidak mengarang legenda lokal Gresik yang tidak terverifikasi.' },
    ],
    activityTitle: 'Latihan: Sumber Crita Rakyat',
    questions: [
      { text: 'Lembaga resmi pemerintah sing kerep nerbitake buku antologi crita rakyat Jawa Timur sing terverifikasi yaiku...', opts: ['Balai Bahasa Provinsi Jawa Timur / Kemendikbudristek', 'Akun anonim tanpa sumber', 'Tebakan pribadi', 'Iklan produk'], ans: 0, exp: 'Balai Bahasa dan Kemendikbud mendokumentasikan sastra daerah secara ilmiah.' },
      { text: 'Kenangapa kita kudu mbedakake antarane crita rakyat (legenda) karo sejarah resmi?', opts: ['Amarga legenda ngemot unsur imajinasi/simbol budaya, dene sejarah resmi adhedhasar bukti arsip faktual', 'Amarga legenda ora ana gunane', 'Amarga sejarah iku dongeng', 'Padha wae kabeh'], ans: 0, exp: 'Keduanya sama-sama berharga namun memiliki sifat kebenaran yang berbeda.' },
      { text: 'Crita rakyat sing asline diwarisake saka cangkem menyang cangkem (lisan) lumrahe nduweni sifat...', opts: ['Anonim lan bisa duwe pirang-pirang versi daerah', 'Mung ditulis taun 2025', 'Berisi tabel angka', 'Ora duwe amanat'], ans: 0, exp: 'Tradisi lisan melahirkan variasi versi antarwilayah.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-04', subSeq: 8,
    objectives: ['Siswa mampu menceritakan kembali (nyritakake maneh) isi cerita rakyat Jawa secara lisan dan ringkas dengan percaya diri.'],
    materialTitle: 'Nyritakake Maneh Crita Rakyat',
    blocks: [
      { type: 'list', title: 'Tips Nyritakake Maneh (Storytelling) Basa Jawa', items: ['1. Gawe ringkesan alur: Wiwitan – Masalah – Klimaks – Rampunge – Piwulang.', '2. Gunakna basa Jawa sing runtut (bisa ngoko alus utawa krama) lan aja gugup.', '3. Bedakna swara nalika nirokake dialog paraga lan tutup nganggo amanat!'] },
    ],
    activityTitle: 'Latihan: Menceritakan Kembali',
    questions: [
      { text: 'Nalika nyritakake maneh crita rakyat ing ngarep kelas, sing PALING penting dijaga yaiku...', opts: ['Alur pokok, paraga utama, lan amanat crita tetep utuh senajan nganggo ukara dhewe', 'Ngowahi akhir crita dadi bertentangan', 'Maca cepet tanpa intonasi', 'Ndelok tembok mburi'], ans: 0, exp: 'Bahasa boleh sendiri, tetapi inti cerita dan amanat harus setia.' },
      { text: 'Nirokake swara paraga (umpamane swara alus Mbok Randa lan swara tegas raja) nalika ndongeng tujuane...', opts: ['Nguripake swasana supaya pamireng antusias nyemak', 'Ngguyu dhewe', 'Mbingungake kelas', 'Nglalekake alur'], ans: 0, exp: 'Variasi vokal membuat storytelling menarik.' },
      { text: 'Sawise rampung nyritakake crita rakyat, pungkasi kanthi...', opts: ['Nyampake amanat/piwulang luhur lan matur nuwun', 'Langsung mlayu menyang bangku', 'Takon rega buku', 'Meneng wae'], ans: 0, exp: 'Menyampaikan amanat memperkuat pesan edukatif cerita.' },
    ],
  },

  // BAB 5: AKSARA JAWA: PENGUATAN LEGENA LAN PASANGAN
  {
    topicCode: 'BJ-SMP7-05', subSeq: 1,
    objectives: ['Siswa mampu menguji penguasaan awal (diagnostik) 20 Aksara Legena, bunyi d/dh & t/th, dan sandhangan dasar.'],
    materialTitle: 'Diagnostik Awal Aksara Jawa',
    blocks: [
      { type: 'table', title: 'Cek Ulang 20 Aksara Legena (4 Larik)', headers: ['Larik', 'Aksara', 'Latin'], rows: [
        ['1', 'ꦲ ꦤ ꦕ ꦫ ꦏ', 'ha na ca ra ka'],
        ['2', 'ꦢ ꦠ ꦱ ꦮ ꦭ', 'da ta sa wa la'],
        ['3', 'ꦥ ꦝ ꦗ ꦪ ꦚ', 'pa dha ja ya nya'],
        ['4', 'ꦩ ꦒ ꦧ ꦛ ꦔ', 'ma ga ba tha nga'],
      ]},
      { type: 'misconception', wrong: 'Kliru nganggo ꦢ (da) kanggo "dhahar" utawa ꦠ (ta) kanggo "bathik".', right: 'Ing Aksara Jawa, "da" (ꦢ) beda karo "dha" (ꦝ), lan "ta" (ꦠ) beda karo "tha" (ꦛ)! "Dhahar" nganggo ꦝ; "bathik" nganggo ꦛ!' },
    ],
    activityTitle: 'Latihan: Diagnostik Aksara Jawa',
    questions: [
      { text: 'Aksara legena kanggo nulis suku kata "dha" (kayata ing tembung "gedhang") yaiku...', opts: ['ꦢ', 'ꦝ', 'ꦠ', 'ꦛ'], ans: 1, exp: 'ꦢ = da; ꦝ = dha; ꦠ = ta; ꦛ = tha.' },
      { text: 'Aksara legena kanggo "nya" lan "nga" berturut-turut yaiku...', opts: ['ꦚ lan ꦔ', 'ꦤ lan ꦒ', 'ꦪ lan ꦩ', 'ꦕ lan ꦏ'], ans: 0, exp: 'ꦚ = nya (ujung larik 3), ꦔ = nga (ujung larik 4).' },
      { text: 'Aksara legena "ꦛ" diwaca...', opts: ['ta', 'tha', 'da', 'dha'], ans: 1, exp: 'ꦛ (larik 4 huruf ke-4) adalah tha.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-05', subSeq: 2,
    objectives: ['Siswa mampu membedakan bentuk aksara yang mirip serta menerapkan sandhangan swara dan panyigeg wanda secara tepat.'],
    materialTitle: 'Bentuk, Bunyi, & Sandhangan Aksara Jawa',
    blocks: [
      { type: 'flashcards', title: 'Beda Aksara Mirip & Sandhangan Kunci (Klik!)', cards: [
        { emoji: '🔤', front: 'ꦲ (ha) vs ꦭ (la)', back: 'Lengkungan "la" ing mburi, "ha" ing ngarep!' },
        { emoji: '🔤', front: 'ꦥ (pa) vs ꦪ (ya)', back: 'ꦥ sikil loro; ꦪ sikil telu!' },
        { emoji: '🔤', front: 'ꦕ (ca) vs ꦫ (ra) vs ꦒ (ga)', back: 'ꦫ mung 1 lengkung; ꦒ 2 lengkung; ꦕ ana buntut/punjul ngisor' },
        { emoji: '✨', front: 'Sandhangan Swara', back: 'wulu (i), suku (u), taling (é), pepet (ê), taling tarung (o)' },
      ]},
    ],
    activityTitle: 'Latihan: Bentuk & Bunyi Aksara',
    questions: [
      { text: 'Tembung Aksara Jawa "ꦱꦼꦒ" (sa+pepet, ga) diwaca...', opts: ['saga', 'sega (nasi)', 'siga', 'suga'], ans: 1, exp: 'Pepet ( ꦼ ) memberi bunyi "ê" → sega.' },
      { text: 'Tembung Aksara Jawa "ꦏꦕꦁ" (ka, ca+cecak) diwaca...', opts: ['kaca', 'kacang', 'kacar', 'kacah'], ans: 1, exp: 'Cecak ( ꦁ ) adalah akhiran "-ng" → kacang.' },
      { text: 'Kanggo nulis tembung "lele" (swara é), sandhangan swara sing dienggo yaiku...', opts: ['Taling ( ꦺ ) → ꦭꦺꦭꦺ', 'Pepet ( ꦼ )', 'Wulu ( ꦶ )', 'Suku ( ꦸ )'], ans: 0, exp: 'Taling (ditulis ing ngarep aksara) kanggo vokal é/è.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-05', subSeq: 3,
    objectives: ['Siswa mampu menguasai fungsi, posisi, dan bentuk 20 Pasangan Aksara Jawa terutama pasangan khusus yang berubah bentuk.'],
    materialTitle: 'Penguatan 20 Pasangan Aksara Jawa',
    blocks: [
      { type: 'table', title: 'Kelompok Posisi & Bentuk Pasangan Aksara Jawa', headers: ['Kelompok', 'Aksara', 'Cathetan Penting'], rows: [
        ['1. Ditulis di SAMPING KANAN', 'ha (꧀ꦲ), sa (꧀ꦱ), pa (꧀ꦥ)', 'Cuma 3 ini (HSP) yang sejajar kanan!'],
        ['2. Di BAWAH (bentuk utuh/mirip)', 'ra, ya, ga, nga', 'Paling mudah dikenali karena bentuknya sama/utuh di bawah!'],
        ['3. Di BAWAH (bentuk berubah khas)', 'na, ca, ka, da, ta, wa, la, dha, ja, nya, ma, ba, tha', 'Perhatikan pasangan ka/ta/la jika dapat suku (u) kembali ke bentuk penuh!'],
      ]},
    ],
    activityTitle: 'Latihan: Penguatan Pasangan',
    questions: [
      { text: 'Pasangan sing ditulis ing SAMPING KANAN aksara sigeg (mati) mung ana 3, yaiku...', opts: ['ha, sa, pa', 'ra, ya, ga', 'ma, ba, tha', 'na, ca, ka'], ans: 0, exp: 'Hanya pasangan ha, sa, pa (HSP) yang diletakkan di kanan.' },
      { text: 'Ing frasa "mangan pudak", huruf mati "n" ing pungkasane "mangan" dipateni nganggo...', opts: ['Pasangan pa (ditulis ing sisih tengen aksara na)', 'Pangkon', 'Layar', 'Wignyan'], ans: 0, exp: 'Huruf berikutnya "p" (pudak) → pasangan pa di sebelah kanan ꦤ.' },
      { text: 'Kapan kita nganggo PANGKON (꧀) lan dudu pasangan?', opts: ['Ing pungkasane ukara (akhir kalimat) yen ditutup konsonan saliyane -h, -r, -ng', 'Ing wiwitan kalimat', 'Ing tengah saben tembung', 'Kanggo mateni huruf -r lan -ng'], ans: 0, exp: 'Akhir -h pakai wignyan, -r pakai layar, -ng pakai cecak, konsonan lain di akhir kalimat pakai pangkon!' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-05', subSeq: 4,
    objectives: ['Siswa mampu membaca dan menuliskan kata serta kalimat pendek (ukara) dalam Aksara Jawa secara cermat.'],
    materialTitle: 'Maca lan Nulis Tembung/Ukara Aksara Jawa',
    blocks: [
      { type: 'worked_example', level: 'Nulis Ukara Aksara Jawa', question: 'Uraikan cara nulis ukara "꧋ꦲꦝꦶꦏ꧀ꦠꦸꦏꦸꦥꦸꦢꦏ꧀꧉" (Adhik tuku pudak.)!', steps: ['꧋ (adeg-adeg awal ukara).', 'ꦲ (a) + ꦝꦶ (dhi) + ꦏ꧀ꦠꦸ (k mati oleh pasangan ta + suku "tu") + ꦏꦸ (ku).', 'ꦥꦸ (pu) + ꦢ (da) + ꦏ꧀ (k mati akhir nganggo pangkon) + ꧉ (pada lungsi / titik).'], answer: '꧋ꦲꦝꦶꦏ꧀ꦠꦸꦏꦸꦥꦸꦢꦏ꧀꧉ = Adhik tuku pudak.' },
    ],
    activityTitle: 'Latihan: Maca & Nulis Ukara Jawa',
    questions: [
      { text: 'Ukara Aksara Jawa "꧋ꦧꦶꦩꦩꦕꦧꦸꦏꦸ꧉" diwaca...', opts: ['Bima maca buku.', 'Bima tuku buku.', 'Siti maca buku.', 'Bapak maca buku.'], ans: 0, exp: 'ꦧꦶ(bi) ꦩ(ma) ꦩ(ma) ꦕ(ca) ꦧꦸ(bu) ꦏꦸ(ku).' },
      { text: 'Ing ukara "Adhik tuku pudak", huruf "k" ing "Adhik" dipateni nganggo pasangan..., dene huruf "k" ing pungkasane "pudak" dipateni nganggo...', opts: ['Pasangan ta; pangkon', 'Pangkon; pasangan ta', 'Layar; cecak', 'Wignyan; pangkon'], ans: 0, exp: 'Di tengah kalimat pakai pasangan ta; di akhir kalimat pakai pangkon.' },
      { text: 'Tanda "꧋" ing wiwitan ukara Aksara Jawa diarani...', opts: ['Adeg-adeg', 'Pada lingsa', 'Pada lungsi', 'Pangkon'], ans: 0, exp: 'Adeg-adeg (꧋) menandai awal kalimat/paragraf Aksara Jawa.' },
    ],
  },

  // BAB 6: TEMBANG DOLANAN, PARIKAN, LAN PENGENALAN WANGSALAN
  {
    topicCode: 'BJ-SMP7-06', subSeq: 1,
    objectives: ['Siswa mampu mengapresiasi makna filosofis dan nilai budaya dalam tembang dolanan Jawa (Lir-Ilir, Sluku-Sluku Bathok, Cublak-Cublak Suweng).'],
    materialTitle: 'Makna Filosofis Tembang Dolanan',
    blocks: [
      { type: 'table', title: 'Makna Jero Tembang Dolanan Jawa', headers: ['Tembang Dolanan', 'Makna & Piwulang Luhur'], rows: [
        ['Sluku-Sluku Bathok', 'Ngelengake supaya aja ngoyo terus — perlu ngaso, resik ati, lan tansah eling marang Gusti'],
        ['Lir-Ilir', 'Ngajak tangi saka kesed, ngopeni iman lan budi pekerti mumpung isih enom lan sehat'],
        ['Cublak-Cublak Suweng', 'Kabegjan sejati ora bisa digayuh nganggo hawa nafsu/srakah, nanging nganggo ati bening'],
      ]},
    ],
    activityTitle: 'Latihan: Makna Tembang Dolanan',
    questions: [
      { text: 'Piwulang luhur sing kinandhut ing tembang "Lir-Ilir" yaiku...', opts: ['Tangi semangat mbangun kabecikan lan ngopeni iman selagi isih ana wektu lan tenaga', 'Turu awan terus', 'Aja gelem nyambut gawe', 'Lomba balapan'], ans: 0, exp: 'Lir-Ilir berisi ajakan kebangkitan spiritual dan kebaikan.' },
      { text: 'Tembang dolanan sing ngelingake keseimbangan antara makarya, ngaso, lan eling marang Gusti yaiku...', opts: ['Sluku-Sluku Bathok', 'Menthog-Menthog', 'Gundhul Pacul', 'Kodhok Ngorek'], ans: 0, exp: 'Bathok (sirah/pikiran) perlu di-"ela-elo" (diistirahatkan & dizikirkan).' },
      { text: 'Nilai budaya sing katon nalika bocah-bocah nembang lan dolanan bebarengan ing plataran yaiku...', opts: ['Kerukunan, kebersamaan, lan gotong royong tanpa gawai', 'Individualis', 'Egois', 'Meneng dhewe-dhewe'], ans: 0, exp: 'Dolanan tradisional nguatake interaksi sosial langsung.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-06', subSeq: 2,
    objectives: ['Siswa mampu menganalisis struktur wanda (4+4, 4+8, 8+8) dan guru swara pada parikan Jawa.'],
    materialTitle: 'Struktur Parikan Tingkat SMP',
    blocks: [
      { type: 'table', title: 'Pola Cacahing Wanda (Suku Kata) Parikan', headers: ['Pola Parikan', 'Contoh'], rows: [
        ['(4 wanda + 4 wanda) × 2', 'Kembang mlathi (4), ganda wangi (4) / Sregep ngaji (4), mukti mburi (4)'],
        ['(4 wanda + 8 wanda) × 2', 'Kembang kencur (4), tinandur ing pinggir sumur (8) / Sapa jujur (4), uripe bakal mujur (8)'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Parikan SMP',
    questions: [
      { text: 'Ing parikan "Kembang kencur, tinandur ing pinggir sumur / Sapa jujur, uripe bakal mujur", cacahing wanda (suku kata) polane yaiku...', opts: ['(4 + 8) × 2', '(2 + 2) × 2', '(12 + 6)', '(5 + 5)'], ans: 0, exp: 'Kem-bang ken-cur (4), ti-nan-dur ing ping-gir su-mur (8).' },
      { text: 'Pitutur utama parikan ing dhuwur yaiku...', opts: ['Wong sing jujur uripe bakal mujur/beruntung', 'Kembang kencur apik', 'Sumur iku jero', 'Aja nandur kembang'], ans: 0, exp: 'Isi manggon ing larik pungkasan: sapa jujur uripe bakal mujur.' },
      { text: 'Persamaan bunyi pungkasan "kencur–sumur–jujur–mujur" (-ur) diarani...', opts: ['Guru swara / rima', 'Guru gatra', 'Pasangan', 'Sandhangan'], ans: 0, exp: 'Keselarasan bunyi akhir membuat parikan enak dirungokake.' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-06', subSeq: 3,
    objectives: ['Siswa mengenal WANGSALAN (teka-teki bersayap yang jawabannya disamarkan di kalimat berikutnya) dan CANGKRIMAN (tebakan Jawa) dari contoh.'],
    materialTitle: 'Pengenalan Wangsalan lan Cangkriman',
    blocks: [
      { type: 'table', title: 'Beda Cangkriman vs Wangsalan (Sastra Jawa Asik!)', headers: ['Jenis', 'Penjelasan', 'Contoh & Batangane (Jawabannya)'], rows: [
        ['Cangkriman', 'Tebak-tebakan Jawa (wancahan/singkatan, pepindhan/kiasan, utawa blenderan/plesetan)', 'Pitik walik saba kebon → NANAS! | Burnaskopen → bubur panas kokopen!'],
        ['Wangsalan', 'Tebakan yang batangane (jawabannya) TIDAK disebut langsung, tapi disamarkan lewat bunyi kata di kalimat berikutnya!', '"Njanur gunung, kadingaren dolan mrene!" (Janur gunung = AREN → nyambung bunyi karo kading-AREN!)'],
      ]},
    ],
    activityTitle: 'Latihan: Wangsalan & Cangkriman',
    questions: [
      { text: 'Batangane (jawaban) cangkriman pepindhan terkenal "Pitik walik saba kebon" (ayam berbulu terbalik main di kebun) yaiku...', opts: ['Buah Nanas', 'Pisang', 'Kelapa', 'Jagung'], ans: 0, exp: 'Kulit nanas bersisik mencuat terbalik seperti bulu ayam dan tumbuh di kebun.' },
      { text: 'Cangkriman wancahan (singkatan) "Pak bo letus" batangane yaiku...', opts: ['Tapak kebo lelene satus', 'Bapak tuku tahu', 'Kebo mangan suket', 'Lelene mlaku'], ans: 0, exp: 'Ta-pak ke-bo le-le-ne sa-tus (disingkat pak-bo-le-tus).' },
      { text: 'Ing wangsalan "Njanur gunung, kadingaren sliramu rawuh!", batangane "janur gunung" yaiku wit ... sing swarane nyambung karo tembung "kadingaren".', opts: ['Aren', 'Klapa', 'Jati', 'Pring'], ans: 0, exp: 'Janur gunung = pohon aren → suku kata "-aren" muncul pada "kadingaren"!' },
    ],
  },
  {
    topicCode: 'BJ-SMP7-06', subSeq: 4,
    objectives: ['Siswa mampu mengapresiasi dan menciptakan contoh sederhana parikan atau cangkriman sebagai wujud pelestarian sastra Jawa.'],
    materialTitle: 'Apresiasi Sastra Lisan Jawa',
    blocks: [
      { type: 'tip', text: 'Tembang dolanan, parikan, cangkriman, lan wangsalan mbuktekake yen leluhur Jawa nduweni rasa humor cerdas sekaligus alus budine! Ayo lestarekake lewat mading, pentas seni, utawa konten edukasi kreatif!' },
    ],
    activityTitle: 'Latihan: Apresiasi Sastra Jawa',
    questions: [
      { text: 'Ing wangsalan "Mbalung janur, paringana usada (obat)!", batangane "balung janur" (tulang daun kelapa) yaiku...', opts: ['Sada (lidi) — nyambung swara karo "u-SADA"!', 'Pelepah', 'Akar', 'Buah'], ans: 0, exp: 'Balung janur = sada (lidi) → nyambung swara karo "usada" (obat).' },
      { text: 'Wujud apresiasi nyata pelajar SMP marang parikan lan tembang Jawa ing era digital yaiku...', opts: ['Nggawe karya parikan edukatif kanggo poster sekolah utawa pentas seni kelas', 'Ngece sastra daerah minangka kuno', 'Mbusak pelajaran basa Jawa', 'Ora tau gelem maca'], ans: 0, exp: 'Kreativitas generasi muda menjaga sastra daerah tetap hidup.' },
      { text: 'Cangkriman pepindhan "Dikethok malah dhuwur" (dipotong malah tambah tinggi) batangane yaiku...', opts: ['Celana panjang (yen dikethok dadi celana cekak/dhuwur saka lemah!)', 'Wit gedhang', 'Tali tambang', 'Kertas'], ans: 0, exp: 'Celana dipotong bagian bawahnya jadi makin tinggi posisinya dari tanah!' },
    ],
  },
];

upsertLessonsBatch('Kelas 7 SMP — Bahasa Jawa Gresik Daratan (6 Bab, 33 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

