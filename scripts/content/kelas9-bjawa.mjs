import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: TEKS SESORAH (6 sub)
  {
    topicCode: 'BJ-SMP9-01', subSeq: 1,
    objectives: ['Siswa saged mangerteni pangerten lan ancas (tujuan) teks sesorah / pidhato basa Jawa ing maneka acara.'],
    materialTitle: 'Pangerten lan Ancas Teks Sesorah (Pidhato)',
    blocks: [
      { type: 'text', text: 'SESORAH (pidhato / tanggap wacana) yaiku medharake gagasan utawa panemu kanthi lisan ing sangarepe wong akeh nganggo basa Jawa kang trep. Ancas (tujuane) sesorah: (1) menehi kabar/kawruh (informatif), (2) ngajak/ngluluhake ati (persuasif), (3) nglipur (rekreatif), lan (4) atur pambagya/panuwun ing pahargyan utawa perpisahan sekolah!' },
    ],
    activityTitle: 'Gladhen: Tujuan Sesorah',
    questions: [
      { text: 'Tembung basa Jawa "sesorah" utawa "medhar sabda" tegese padha karo...', opts: ['Pidato di depan umum', 'Geguritan', 'Cangkriman', 'Layang pribadi'], ans: 0, exp: 'Sesorah / tanggap wacana = pidato.' },
      { text: 'Sesorah wakil siswa kelas 9 ing acara perpisahan SMP sing isine ngaturake panuwun marang bapak/ibu guru lan nyuwun pangestu nduweni ancas...', opts: ['Atur panuwun, nyuwun pangapura, lan nyuwun donga pangestu', 'Ngedol barang dagangan', 'Menehi resep masak', 'Ngelaporake cuaca'], ans: 0, exp: 'Sesorah perpisahan ngutamakake rasa syukur, panuwun, lan pangestu.' },
      { text: 'Cara sesorah kanthi mung nggawa cathetan cilik isi pokok-pokok gagasan banjur diandharake kanthi luwes diarani metode...', opts: ['Ekstemporan', 'Naskah (maca teks utuh)', 'Apalan', 'Impromptu (dadakan)'], ans: 0, exp: 'Ekstemporan luwih komunikatif lan ora kaku kaya maca naskah.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-01', subSeq: 2,
    objectives: ['Siswa saged nganalisis struktur teks sesorah: Purwaka (pambuka), Surasa Basa (isi), lan Wasana Basa (panutup).'],
    materialTitle: 'Struktur Sesorah: Purwaka, Surasa, lan Wasana Basa',
    blocks: [
      { type: 'table', title: '3 Perangan Utama Sesorah Basa Jawa', headers: ['Perangan', 'Isi Rinciane'], rows: [
        ['1. Purwaka Basa (Pambuka)', 'Salam pambuka, atur pakurmatan (saka sing paling sepuh/dhuwur kalungguhane), puji syukur marang Gusti'],
        ['2. Surasa Basa (Isi)', 'Wosing gati / inti gagasan sing diwedharake jumbuh karo acara'],
        ['3. Wasana Basa (Panutup)', 'Dudutan/pangajab, nyuwun pangapura yen ana kaluputan basa, atur panuwun, lan salam panutup'],
      ]},
    ],
    activityTitle: 'Gladhen: Struktur Sesorah',
    questions: [
      { text: 'Perangan pambuka ing teks sesorah sing isine salam pambuka, pakurmatan marang tamu, lan puji syukur diarani...', opts: ['Purwaka basa', 'Surasa basa', 'Wasana basa', 'Irah-irahan'], ans: 0, exp: 'Purwaka = pambuka; Surasa = isi; Wasana = panutup.' },
      { text: '"Cekap semanten atur kula, mbokbilih wonten kalepatan atur saha kiranging subasita, kula nyuwun agunging pangaksami." Ukara iki mapan ing perangan...', opts: ['Wasana basa (panutup)', 'Purwaka basa', 'Surasa basa', 'Salam pambuka'], ans: 0, exp: 'Nyuwun pangapura (pangaksami) ana ing panutup/wasana basa.' },
      { text: 'Urutan struktur sesorah basa Jawa sing baku yaiku...', opts: ['Purwaka basa → Surasa basa → Wasana basa', 'Wasana → Purwaka → Surasa', 'Surasa → Purwaka → Judul', 'Prolog → Epilog'], ans: 0, exp: 'Pambuka → Isi → Panutup.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-01', subSeq: 3,
    objectives: ['Siswa saged nyesuekake isi, gaya, lan sapaan sesorah miturut pamireng (pendengar) lan kahanan acara.'],
    materialTitle: 'Nggatekake Pamireng (Audiens) ing Sesorah',
    blocks: [
      { type: 'tip', text: 'Sadurunge nulis teks sesorah, kenali sapa PAMIRENG-e (bapak/ibu guru, wali murid, utawa kanca sebaya) lan apa swasana acarane (resmi, syukuran, utawa lelayu/duka) supaya pilihan tembung lan swasanane trep!' },
    ],
    activityTitle: 'Gladhen: Pamireng Sesorah',
    questions: [
      { text: 'Menawa pamireng sesorah dumadi saka Kepala Sekolah, Bapak/Ibu Guru, Wali Murid, lan Kanca Siswa, urutan atur pakurmatan sing paling trep yaiku...', opts: ['Ingkang kinurmatan Kepala Sekolah, Bapak/Ibu Guru saha Wali Murid, lan para kanca siswa ingkang kula tresnani', 'Kanca-kanca dhisik banjur Kepala Sekolah ing mburi', 'Mung nyapa kanca sakelas wae', 'Ora perlu atur pakurmatan'], ans: 0, exp: 'Tata krama Jawa ngurmati wong sepuh lan kalungguhan paling dhuwur dhisik.' },
      { text: 'Geneya isi lan gaya sesorah ing acara perpisahan sekolah kudu dibedakake karo sesorah ing acara kerja bakti karang taruna?', opts: ['Amarga saben acara duwe tujuan, swasana, lan pamireng sing beda saengga basa lan isine kudu jumbuh (empan papan)', 'Amarga ora ana bedane', 'Supaya luwih angel', 'Amarga ora perlu pamireng'], ans: 0, exp: 'Empan papan = pinter mapanake basa lan sikap manut kahanan.' },
      { text: 'Tembung "para rawuh" utawa "para lenggah" ing sesorah tegese...', opts: ['Para hadirin / tamu undangan yang hadir', 'Para panitia panggung', 'Kursi tamu', 'Kanca dolan'], ans: 0, exp: 'Rawuh = hadir (krama inggil); para rawuh = hadirin.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-01', subSeq: 4,
    objectives: ['Siswa saged ngetrapake unggah-ungguh basa Jawa (Krama Lugu lan Krama Inggil) kanthi bener tanpa kliru nginggilake awake dhewe!'],
    materialTitle: 'Unggah-Ungguh Basa ing Sesorah',
    blocks: [
      { type: 'misconception', wrong: 'Nulis "Kula badhe dhahar lan sare" utawa "Kula badhe kondur" nalika sesorah.', right: 'KLIRU! Krama Inggil (dhahar, sare, kondur, ngendika, rawuh) MUNG kanggo wong sing diajeni (guru/wong tuwa/tamu)! Kanggo awake dhewe gunakake Krama Andhap/Lugu: kula nedha, kula tilem, kula wangsul, kula matur, kula sowan!' },
    ],
    activityTitle: 'Gladhen: Unggah-Ungguh Sesorah',
    questions: [
      { text: 'Ukara sesorah sing BENER unggah-ungguhe (ora kliru nginggilake awake dhewe) yaiku...', opts: ['"Kula ngaturaken agunging panuwun dhumateng Bapak saha Ibu Guru ingkang sampun kersa rawuh."', '"Kula sampun rawuh lan badhe ngendika dhateng Bapak Guru."', '"Bapak Guru kula aturi mangan dhisik."', '"Kula nyuwun pamit badhe kondur."'], ans: 0, exp: '"Kersa rawuh" kanggo Bapak/Ibu Guru (Krama Inggil); "kula ngaturaken" kanggo awake dhewe (Krama Andhap).' },
      { text: 'Kanggo nyebut "aku berbicara" marang wong sing luwih sepuh ing sesorah, tembung sing trep yaiku...', opts: ['Kula matur (dudu "kula ngendika" — ngendika iku kanggo wong sepuh!)', 'Kula ngendika', 'Kula dhawuh', 'Aku ngomong'], ans: 0, exp: 'Matur = berbicara kepada yang lebih tua; ngendika/dhawuh = untuk yang lebih tua.' },
      { text: 'Tembung "pangaksami / pangapunten" ing panutup sesorah tegese...', opts: ['Maaf / pengampunan', 'Hadiah', 'Perintah', 'Undangan'], ans: 0, exp: 'Nyuwun agunging pangaksami = mohon maaf sebesar-besarnya.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-01', subSeq: 5,
    objectives: ['Siswa saged ngatur wirama (intonasi), jeda, volume, lan pelafalan basa Jawa (a/o, d/dh, t/th) nalika sesorah.'],
    materialTitle: 'Intonasi, Jeda, lan Pelafalan ing Sesorah',
    blocks: [
      { type: 'text', text: 'Sesorah sing kepenak dirungokake ora kesusu lan ora monoton! Atur volume swara cetha nganti mburi, lafalna vokal miring/jejeg (contone "kula" diwaca "kulo", "saha" diwaca "soho") sarta konsonan dh/th kanthi bener, lan wenehana jeda napas ing tandha koma lan titik!' },
    ],
    activityTitle: 'Gladhen: Intonasi Sesorah',
    questions: [
      { text: 'Menawa sesorah diwaca cepet banget tanpa jeda lan nadane rata wae (monoton), akibate tumrap pamireng yaiku...', opts: ['Pamireng cepet bosen lan angel nangkep inti pesen sesorah', 'Pamireng dadi tambah semangat', 'Swarane tambah merdu', 'Teks dadi luwih cetha'], ans: 0, exp: 'Intonasi dinamis lan jeda teratur njaga kawigaten pamireng.' },
      { text: 'Pocapan (pelafalan) sing bener ing basa Jawa standar kanggo tembung "kula" lan "bapa" nalika sesorah yaiku vokal "a" jejeg (mirip swara "o" terbuka), dene "bapak" diwaca "a" miring biasa. Conto vokal "a" jejeg liyane yaiku...', opts: ['saha, putra, basa, wacana', 'bapak, anak, mangan, dalan', 'kertas, gelas', 'meja (e)'], ans: 0, exp: 'Ing aksara/basa Jawa, vokal "a" ing wanda terbuka pungkasan lumrahe diwaca "å" (jejeg).' },
      { text: 'Wenehi tandha jeda cendhak (/) lan dawa (//) ing naskah sesorah sadurunge tampil migunani kanggo...', opts: ['Ngatur ambegan lan negesake ukara-ukara wigati supaya ora kesrimpet ilat', 'Ngilangi tandha titik', 'Ngganti isi sesorah', 'Maca mundur'], ans: 0, exp: 'Tandha jeda ngewangi kelancaran sesorah.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-01', subSeq: 6,
    objectives: ['Siswa saged mraktikake penyampaian sesorah kanthi sikap sopan (subasita: patrap, busana, polatan/mimik, lan kontak mata).'],
    materialTitle: 'Teknik Penyampaian Sesorah (Subasita / Sikap)',
    blocks: [
      { type: 'visual_cards', title: '4 Sikap Mulya Nalika Sesorah', cards: [
        { emoji: '🧍', label: 'Magatra (Sikap & Busana)', sub: 'Ngadeg jejeg mantep, busana rapi sopan (ngapurancang yen adat resmi)' },
        { emoji: '😊', label: 'Malaksana & Polatan', sub: 'Rai sumeh/serius jumbuh acara, ora nyengir utawa mrengut' },
        { emoji: '👀', label: 'Pandeleng Merata', sub: 'Nyawang para rawuh kiwa–tengah–tengen, aja mung ndhingkluk maca kertas!' },
        { emoji: '🎤', label: 'Mawastha & Tenang', sub: 'Atur napas tenang, swara mantep, lan ngrampungake kanthi santun' },
      ]},
    ],
    activityTitle: 'Gladhen: Penyampaian Sesorah',
    questions: [
      { text: 'Sikap tangan nyekel ngapurancang (tangan kanan nyekel ugel-ugel tangan kiwa ing ngarep weteng kanthi sopan) nalika sesorah adat Jawa nggambarake...', opts: ['Sikap andhap asor (rendah hati), tenang, lan ngurmati para rawuh', 'Sikap nesu', 'Sikap males', 'Sikap sombong'], ans: 0, exp: 'Ngapurancang mujudake subasita khas Jawa nalika ngadeg ing ngarep tamu.' },
      { text: 'Bab sing kudu DISINGKIRI nalika ngadeg sesorah ing ngarep panggung yaiku...', opts: ['Nggoyang-goyangake awak terus-terusan, ndhingkluk maca teks tanpa nyawang tamu, utawa nglebokake tangan menyang sak clana', 'Ngadeg jejeg tenang', 'Menehi salam kanthi sumeh', 'Ngatur volume swara cetha'], ans: 0, exp: 'Sikap fisik sing tenang lan sopan nguwatake wibawa pembicara.' },
      { text: 'Cara paling ampuh ngatasi rasa grogi (ndhredheg) sadurunge maju sesorah yaiku...', opts: ['Latihan maca banter bola-bali sadurunge, nguwasani inti materi, lan narik napas jero kanthi donga sadurunge miwiti', 'Ora usah latihan babar pisan', 'Mlayu metu saka ruangan', 'Maca cepet banget supaya ndang rampung'], ans: 0, exp: 'Persiapan mateng minangka obat grogi paling manjur.' },
    ],
  },

  // BAB 2: TEKS PRANATACARA (5 sub)
  {
    topicCode: 'BJ-SMP9-02', subSeq: 1,
    objectives: ['Siswa saged mangerteni peran lan tugase Pranatacara (MC / pambiwara basa Jawa) sarta bedane karo pamedhar sesorah.'],
    materialTitle: 'Peran Pranatacara (MC Basa Jawa)',
    blocks: [
      { type: 'table', title: 'Beda Pranatacara vs Pamedhar Sesorah', headers: ['Aspek', 'Pranatacara (MC / Pambiwara)', 'Pamedhar Sesorah (Pembicara)'], rows: [
        ['Tugas Utama', 'Nata lan mandhu mlakune acara saka pambuka nganti paripurna', 'Ngandharake isi gagasan/sambutan ing salah siji mata acara'],
        ['Peran', 'Dadi pangubung antaracara lan njaga swasana sarta wektu', 'Dadi narasumber/wakil sing diaturi wektu dening pranatacara'],
      ]},
    ],
    activityTitle: 'Gladhen: Peran Pranatacara',
    questions: [
      { text: 'Tembung "pranatacara" (asale saka pranata = pengatur, acara = kegiatan) tegese...', opts: ['Pembawa acara / MC yang mengatur dan memandu jalannya acara', 'Tukang foto acara', 'Tamu undangan', 'Juru masak'], ans: 0, exp: 'Pranatacara uga asring diarani pambiwara utawa panatacara.' },
      { text: 'Beda pokok tugase pranatacara dibandhingake pamedhar sesorah yaiku...', opts: ['Pranatacara mandhu lan ngatur urut-urutaning kabeh acara; pamedhar sesorah ngaturake sambutan/isi pidhato ing salah siji bagean acara', 'Pranatacara ora entuk ngomong', 'Loro-lorone persis padha', 'Pranatacara mung ngatur kursi'], ans: 0, exp: 'Pranatacara ngawal kelancaran acara wiwit wiwitan nganti pungkasan.' },
      { text: 'Sifat penting sing kudu diduweni pranatacara nalika acara dumadakan ana owah-owahan jadwal (contone pembicara telat 5 menit) yaiku...', opts: ['Tanggap, tenang, luwes ngisi utawa nata urutan kanthi koordinasi panitia tanpa nggawe tamu bingung', 'Panik lan langsung nutup acara', 'Nesu-nesu ing mikrofon', 'Meneng wae 10 menit'], ans: 0, exp: 'Pranatacara kudu sigap lan koordinasi karo panitia.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-02', subSeq: 2,
    objectives: ['Siswa saged nyusun urut-urutan acara (rantaman adicara) sing logis kanggo acara sekolah (perpisahan, pentas seni, rapat).'],
    materialTitle: 'Susunan Acara (Rantaman Adicara)',
    blocks: [
      { type: 'list', title: 'Conto Rantaman Adicara Perpisahan Kelas 9 SMP', items: ['1. Pambuka (salam & basmalah/donga pambuka).', '2. Nembangake Lagu Kebangsaan Indonesia Raya.', '3. Atur Pambagya / Sambutan (Ketua Panitia, Wakil Kelas 9, Kepala Sekolah).', '4. Adicara Inti (prosesi pelepasan / pentas seni budaya).', '5. Donga Panutup & Ramah Tamah.', '6. Panutup (paripurna).'] },
    ],
    activityTitle: 'Gladhen: Susunan Acara',
    questions: [
      { text: 'Ing teks pranatacara basa Jawa, susunan acara diarani...', opts: ['Rantaman adicara / urut-urutan adicara', 'Purwaka', 'Gancaran', 'Cangkriman'], ans: 0, exp: 'Rantaman = susunan; adicara = mata acara.' },
      { text: 'Urutan rantaman adicara sekolah sing logis yaiku: (1) Panutup, (2) Atur sambutan Kepala Sekolah, (3) Pambuka, (4) Adicara inti pentas seni.', opts: ['3 – 2 – 4 – 1', '1 – 2 – 3 – 4', '2 – 3 – 4 – 1', '3 – 4 – 1 – 2'], ans: 0, exp: 'Pambuka (3) → Sambutan (2) → Acara Inti (4) → Panutup (1).' },
      { text: 'Geneya pranatacara maca dhisik urut-urutan acara (rantaman adicara) ing wiwitan acara?', opts: ['Supaya para rawuh mangerteni gambaran lakune acara kanthi tertib wiwit awal nganti rampung', 'Supaya acara cepet bubar', 'Amarga ora ana isi', 'Kanggo ngganti sambutan'], ans: 0, exp: 'Informasi rundown nggawe tamu nyaman lan tertib.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-02', subSeq: 3,
    objectives: ['Siswa saged nggunakake ungkapan baku pambuka, transisi antaracara, lan panutup pranatacara kanthi luwes.'],
    materialTitle: 'Ungkapan Pambuka, Transisi, lan Panutup Pranatacara',
    blocks: [
      { type: 'table', title: 'Ungkapan Kunci Pranatacara Basa Jawa', headers: ['Bagian', 'Conto Ukara Baku'], rows: [
        ['Pambuka', '"Para rawuh ingkang kinurmatan, sumangga kita miwiti adicara kanthi raos syukur..."'],
        ['Ngaturi Pembicara', '"Adicara salajengipun inggih punika atur pangandikan saking Kepala Sekolah. Wekdal saha papan kula sumanggakaken."'],
        ['Maturnuwun Transisi', '"Mekaten kalawau pangandikan saking Bapak Kepala Sekolah, kula ngaturaken agunging panuwun."'],
        ['Panutup', '"Adicara sampun paripurna. Mugi-mugi acara punika migunani. Cekap semanten, matur nuwun."'],
      ]},
    ],
    activityTitle: 'Gladhen: Ungkapan Pranatacara',
    questions: [
      { text: 'Ukara pranatacara "Wekdal saha papan kula sumanggakaken" digunakake nalika...', opts: ['Ngaturi (mempersilakan) pembicara utawa pengisi acara maju menyang panggung', 'Nutup kabeh acara', 'Miwiti salam pambuka', 'Njaluk dhuwit'], ans: 0, exp: 'Tegese: "Waktu dan tempat kami persilakan."' },
      { text: 'Tembung "adicara salajengipun" ing ukara transisi pranatacara tegese...', opts: ['Acara selanjutnya', 'Acara sebelumnya', 'Acara dibatalkan', 'Acara kemarin'], ans: 0, exp: 'Salajengipun (krama) = sabanjure (ngoko) = selanjutnya.' },
      { text: 'Tembung "paripurna" ing panutup pranatacara ("Adicara sampun paripurna") tegese...', opts: ['Selesai dengan lengkap/sempurna', 'Belum dimulai', 'Ditunda besok', 'Sedang istirahat'], ans: 0, exp: 'Paripurna = tuntas/selesai sepenuhnya.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-02', subSeq: 4,
    objectives: ['Siswa saged milih ragam basa formal krama kang komunikatif (ora terlalu kaku/kawi kakehan nganti pamireng ora paham).'],
    materialTitle: 'Ragam Formal Komunikatif ing Pranatacara',
    blocks: [
      { type: 'tip', text: 'Kanggo acara SMP lan masyarakat saiki (kalebu ing Gresik daratan), gunakake Krama Formal sing ALUS LAN GAMPANG DIMANGERTENI (komunikatif)! Tembung rinengga/kawi kena dianggo sacukupe wae supaya pamireng rumangsa akrab lan tetep paham isine.' },
    ],
    activityTitle: 'Gladhen: Ragam Formal Pranatacara',
    questions: [
      { text: 'Pilihan ragam basa pranatacara paling trep kanggo acara resmi perpisahan siswa SMP sing dirawuhi guru lan wong tuwa yaiku...', opts: ['Basa Krama formal sing alus, bener unggah-ungguhe, lan cetha gampang dimangerteni', 'Basa ngoko kasar', 'Basa kawi angel kabeh nganti tamu bingung', 'Basa singkatan'], ans: 0, exp: 'Santun sekaligus komunikatif iku kunci pranatacara modern.' },
      { text: 'Krama Inggile tembung "sambutan / pidato" saka Bapak Kepala Sekolah ing teks pranatacara yaiku...', opts: ['Atur pangandikan / sabdatama', 'Omongan', 'Guyonan', 'Crita'], ans: 0, exp: 'Pangandikan = ucapan/sambutan (krama inggil).' },
      { text: 'Nyebutake jeneng lan jabatan narasumber utawa tamu kanthi BENER tanpa salah eja nuduhake...', opts: ['Kesiapan, ketelitian, lan rasa ngurmati pranatacara marang para tamu', 'Ora penting', 'Mung tambahan', 'Nggawe suwe'], ans: 0, exp: 'Ngecek ejaan jeneng & gelar tamu sadurunge acara iku wajib kanggo MC!' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-02', subSeq: 5,
    objectives: ['Siswa saged nyiapake kartu pandhu (cue card) lan mraktikake dadi pranatacara kanthi percaya diri.'],
    materialTitle: 'Praktik Pranatacara nganggo Cue Card',
    blocks: [
      { type: 'list', title: 'Checklist Praktik Pranatacara SMP', items: ['1. Siapake cue card ukuran cilik rapi isi urutan acara & jeneng lengkap pembicara.', '2. Cek mikrofon & koordinasi karo panitia/operator audio sadurunge acara diwiwiti.', '3. Jaga ekspresi ramah, swara cetha, jeda mantep, lan aja ngomong terlalu dawa ngalahake pengisi acara!'] },
    ],
    activityTitle: 'Gladhen: Praktik Pranatacara',
    questions: [
      { text: 'Kertu cilik sing dicekel pranatacara isi urutan acara lan cathetan jeneng pembicara supaya luwih rapi tinimbang nggawa kertas folio gedhe diarani...', opts: ['Cue card (kartu pandhu)', 'Kamus', 'Ijazah', 'Poster'], ans: 0, exp: 'Cue card gampang dicekel lan rapi dipandang ing panggung.' },
      { text: 'Sadurunge acara diwiwiti, pranatacara wajib nindakake koordinasi karo...', opts: ['Ketua panitia, pengisi acara/pembicara, lan operator sound system', 'Wong liwat ing dalan', 'Ora perlu koordinasi karo sapa-sapa', 'Mung karo awake dhewe'], ans: 0, exp: 'Koordinasi nyegah kesalahan urutan lan kendala teknis.' },
      { text: 'Sikap profesional pranatacara nalika pembicara lagi sesorah ing panggung yaiku...', opts: ['Melu ngrungokake kanthi tenang saka pinggir panggung lan nyiapake transisi acara sabanjure', 'Ngobrol banter ing mburi panggung', 'Dolanan HP karo ngguyu', 'Meninggalake ruangan'], ans: 0, exp: 'Ngrungokake pembicara ngewangi pranatacara nggawe ukara transisi sing nyambung.' },
    ],
  },

  // BAB 3: TEKS BIOGRAFI LAN SEJARAH (7 sub)
  {
    topicCode: 'BJ-SMP9-03', subSeq: 1,
    objectives: ['Siswa saged mangerteni pentinge urutan kronologi (urutan wektu) ing teks biografi lan teks sejarah basa Jawa.'],
    materialTitle: 'Kronologi ing Teks Biografi lan Sejarah',
    blocks: [
      { type: 'text', text: 'Teks BIOGRAFI nyritakake riwayat urip nyata sawijining tokoh kang duwe lelabuhan/keteladanan, dene teks SEJARAH nyritakake kedadeyan nyata ing jaman biyen. Loro-lorone disusun kanthi KRONOLOGIS (urut wektu: wiwit lair, pendidikan, perjuangan, nganti pengabdian/pungkasane) supaya pamaca gampang nangkep alur sebab-akibate!' },
    ],
    activityTitle: 'Gladhen: Kronologi Biografi & Sejarah',
    questions: [
      { text: 'Beda antarane BIOGRAFI lan AUTOBIOGRAFI yaiku...', opts: ['Biografi ditulis dening wong liya; autobiografi ditulis langsung dening tokoh iku dhewe', 'Biografi iku dongeng', 'Autobiografi ora nyata', 'Loro-lorone padha persis'], ans: 0, exp: 'Auto = dhewe → autobiografi = riwayat urip sing ditulis tokoh dhewe.' },
      { text: 'Urutan struktur kronologis teks biografi tokoh sing baku yaiku...', opts: ['Orientasi (lair & kulawarga) → Prastawa lan masalah/perjuangan urip → Reorientasi (keteladanan/panutup)', 'Panutup → Lair → Perjuangan', 'Alat → Bahan → Langkah', 'Prolog → Epilog'], ans: 0, exp: 'Orientasi – Prastawa/Perjuangan – Reorientasi.' },
      { text: 'Tembung panggandheng wektu (konjungsi temporal) basa Jawa sing asring muncul ing teks biografi/sejarah yaiku...', opts: ['nalika, wiwit, sabanjure, sawise iku, ing taun...', 'amarga, mula', 'sanajan, nanging', 'utawa'], ans: 0, exp: 'Nuduhake urutan kronologis wektu kedadeyan.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-03', subSeq: 2,
    objectives: ['Siswa saged ngidentifikasi fakta objektif (tanggal, papan, karya, perjuangan) ing teks biografi tokoh lan sejarah.'],
    materialTitle: 'Fakta Objektif ing Biografi lan Sejarah',
    blocks: [
      { type: 'text', text: 'Biografi lan sejarah kalebu teks NONFIKSI — tegese kudu adhedhasar FAKTA NYATA (taun lair, papan, lelakon perjuangan, karya/jasa) sing bisa dibuktekake! Aja nambah-nambahi crita khayalan kang ora ana buktine.' },
    ],
    activityTitle: 'Gladhen: Fakta Biografi & Sejarah',
    questions: [
      { text: 'Ukara ing teks biografi Ki Hajar Dewantara ngisor iki sing mujudake FAKTA sejarah yaiku...', opts: ['Ki Hajar Dewantara ngedegake perguruan Taman Siswa tanggal 3 Juli 1922 ing Yogyakarta lan misuwur kanthi sesanti "Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani".', 'Ki Hajar Dewantara mesthi tau ketemu superhero.', 'Taman Siswa diadegake taun 2020.', 'Ora ana cathetan babagan Taman Siswa.'], ans: 0, exp: 'Tanggal, papan, lan sesanti pendidikan Taman Siswa minangka fakta sejarah resmi.' },
      { text: 'Geneya panulis biografi ora kena ngarang prestasi palsu kanggo tokoh sing ditulis?', opts: ['Amarga biografi mujudake karya nonfiksi sing kudu jujur manut kasunyatan sejarah', 'Supaya critane luwih lucu', 'Amarga ora ana sing maca', 'Ora masalah yen ngarang'], ans: 0, exp: 'Kejujuran faktual dadi ruh teks biografi lan sejarah.' },
      { text: 'Conto tokoh nasional saka Jawa sing biografine akeh ngemot semangat emansipasi pendidikan wanita yaiku...', opts: ['R.A. Kartini (kanthi kumpulan serate *Habis Gelap Terbitlah Terang*)', 'Si Kancil', 'Malin Kundang', 'Timun Mas'], ans: 0, exp: 'R.A. Kartini tokoh sejarah nyata pejuang pendidikan.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-03', subSeq: 3,
    objectives: ['Siswa saged mbedakake sumber informasi kredibel (arsip, buku sejarah, museum, wawancara saksi) kanggo nulis biografi/sejarah.'],
    materialTitle: 'Sumber Informasi Biografi lan Sejarah',
    blocks: [
      { type: 'tip', text: 'Yen arep nulis biografi tokoh lokal (contone guru senior teladan, pengrajin, utawa tokoh masyarakat), sumber paling kuwat yaiku WAWANCARA LANGSUNG marang tokoh/kulawargane, foto dokumentasi asli, lan arsip resmi!' },
    ],
    activityTitle: 'Gladhen: Sumber Biografi & Sejarah',
    questions: [
      { text: 'Sumber paling utama (primer) kanggo nulis biografi tokoh masyarakat utawa pengrajin senior sing isih sugeng ing desamu yaiku...', opts: ['Wawancara langsung marang tokoh kasebut, kulawarga, sarta dokumen/foto karya asline', 'Tebakan tanpa ketemu', 'Gosip tanpa bukti', 'Crita dongeng'], ans: 0, exp: 'Wawancara langsung lan dokumen asli njamin akurasi biografi.' },
      { text: 'Kanggo nyinaoni sejarah tokoh pahlawan utawa situs cagar budaya Jawa Timur, sumber sing bisa dipercaya yaiku...', opts: ['Buku sejarah resmi, arsip museum, ensiklopedia, lan terbitan instansi cagar budaya', 'Unggahan anonim tanpa sumber', 'Komentar acak', 'Khayalan pribadi'], ans: 0, exp: 'Sumber ilmiah lan institusi resmi bisa dipertanggungjawabake.' },
      { text: 'Mriksa luwih saka siji sumber (cross-check) nalika nulis teks sejarah migunani kanggo...', opts: ['Masthekake ketepatan taun, jeneng, lan urutan prastawa supaya ora kliru', 'Nggawe bingung panulis', 'Nambah crita fiksi', 'Ngilangi fakta'], ans: 0, exp: 'Perbandingan sumber nambah akurasi tulisan sejarah.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-03', subSeq: 4,
    objectives: ['Siswa saged nemokake keteladanan (patuladhan) lan nilai budi pekerti saka tokoh ing teks biografi basa Jawa.'],
    materialTitle: 'Nggali Keteladanan ing Teks Biografi',
    blocks: [
      { type: 'text', text: 'Tujuan maca biografi dudu mung apal taun laire tokoh, nanging njupuk PATULADHAN (keteladanan): kepriye sang tokoh ngadhepi pacoban/alangan, njaga kajujuran, tekun sinau, lan aweh manfaat gedhe marang wong akeh!' },
    ],
    activityTitle: 'Gladhen: Keteladanan Biografi',
    questions: [
      { text: 'Tembung basa Jawa "patuladhan" ing pasinaon teks biografi tegese...', opts: ['Keteladanan / contoh perilaku baik yang patut ditiru', 'Kesalahan gedhe', 'Hukuman', 'Lomba'], ans: 0, exp: 'Tuladha / patuladhan = teladan.' },
      { text: 'Sesanti pendidikan Ki Hajar Dewantara "Ing Ngarsa Sung Tuladha" nduweni teges...', opts: ['Ing ngarep menehi tuladha (di depan memberi teladan)', 'Ing mburi menehi dorongan', 'Ing tengah mbangun semangat', 'Mlaku dhewekan'], ans: 0, exp: 'Ing Ngarsa Sung Tuladha (di depan beri teladan), Ing Madya Mangun Karsa (di tengah bangun semangat), Tut Wuri Handayani (di belakang beri dorongan).' },
      { text: 'Sifat keteladanan sing paling penting ditiru siswa kelas 9 saka biografi tokoh-tokoh pejuang lan ilmuwan yaiku...', opts: ['Semangat sinau tanpa kesel, jujur, pantang nyerah ngadhepi alangan, lan peduli marang bangsa', 'Gampang nyerah nalika gagal sapisan', 'Mung golek gampange wae', 'Sombong nalika kasil'], ans: 0, exp: 'Ketekunan lan integritas dadi kunci sukses tokoh besar.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-03', subSeq: 5,
    objectives: ['Siswa saged nganalisis prastawa wigati (peristiwa penting) lan sebab-akibate ing teks sejarah basa Jawa.'],
    materialTitle: 'Nganalisis Prastawa Sejarah lan Sebab-Akibate',
    blocks: [
      { type: 'text', text: 'Saben prastawa sejarah (contone Sumpah Pemuda 1928, Proklamasi 1945, utawa Pertempuran 10 November 1945 ing Surabaya) mesthi duwe sebab pamicu, proses kedadeyan, tokoh pelaku, lan dampak gedhe tumrap bangsa.' },
    ],
    activityTitle: 'Gladhen: Prastawa Sejarah',
    questions: [
      { text: 'Prastawa sejarah 10 November 1945 ing Surabaya sing melu didukung rakyat sakiwa-tengene Jawa Timur nuduhake nilai...', opts: ['Keberanian, persatuan, lan rela berkorban mempertahankan kemerdekaan RI', 'Menyerah tanpa perlawanan', 'Perpecahan antarwarga', 'Acuh tak acuh'], ans: 0, exp: 'Semangat arek-arek Suroboyo lan rakyat Jawa Timur dadi teladan kepahlawanan nasional.' },
      { text: 'Kanggo nganalisis sawijining prastawa sejarah kanthi utuh, pitakon kunci sing kudu dijawab yaiku...', opts: ['Apa kedadeyane, kapan lan ing ngendi, sapa pelakune, geneya kedadeyan, lan apa dampake?', 'Mung sapa sing menang wae', 'Mung taune wae', 'Ora perlu sebab-akibat'], ans: 0, exp: 'Unsur 5W+1H uga dadi alat analisis sejarah.' },
      { text: 'Tembung "prastawa" ing basa Jawa tegese...', opts: ['Peristiwa / kejadian', 'Pakaian', 'Makanan', 'Lagu'], ans: 0, exp: 'Prastawa sejarah = peristiwa sejarah.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-03', subSeq: 6,
    objectives: ['Siswa saged gawe ringkesan (ikhtisar) teks biografi lan sejarah kanthi runtut tanpa ngowahi fakta.'],
    materialTitle: 'Nggawe Ringkesan Teks Biografi lan Sejarah',
    blocks: [
      { type: 'tip', text: 'Cara ringkes ngringkes biografi: (1) Waca utuh kabeh paragraf, (2) Cathet gagasan pokok saben tahapan (identitas, perjuangan, prestasi, keteladanan), (3) Rangkai dadi 1–2 paragraf padhet nganggo ukaramu dhewe kanthi urutan wektu tetep runtut!' },
    ],
    activityTitle: 'Gladhen: Ringkesan Biografi & Sejarah',
    questions: [
      { text: 'Syarat utama ringkesan teks biografi sing becik yaiku...', opts: ['Cekak padhet, njaga urutan kronologi asli, lan ora ngowahi fakta taun utawa jasa tokoh', 'Ngowahi urutan wektu dadi acak', 'Nambah tokoh fiksi', 'Nyalin kabeh 10 halaman'], ans: 0, exp: 'Ringkesan setia marang urutan lan inti fakta teks asli.' },
      { text: 'Bagean sing PALING PENTING tetep dipertahanake nalika ngringkes biografi yaiku...', opts: ['Identitas pokok tokoh, lelakon perjuangan/prestasi utama, lan keteladanane', 'Detail warna klambi saben dina', 'Katrangan sing ora nyambung', 'Mung judule wae'], ans: 0, exp: 'Inti jasa lan keteladanan mujudake ruh biografi.' },
      { text: 'Sadurunge nggawe ringkesan, maca teks asli kanthi tuntas perlu ditindakake supaya...', opts: ['Mangerteni gagasan utama saben paragraf lan ora salah nangkep fakta', 'Langsung bisa nyalin tanpa paham', 'Ngilangi bagean tengah', 'Mung maca ukara pungkasan'], ans: 0, exp: 'Pemahaman utuh njamin ringkesan akurat.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-03', subSeq: 7,
    objectives: ['Siswa saged mbedakake fakta sejarah/biografi karo interpretasi (tafsiran/panemu panulis) kanthi kritis.'],
    materialTitle: 'Mbedakake Fakta lan Interpretasi ing Biografi/Sejarah',
    blocks: [
      { type: 'table', title: 'Fakta vs Interpretasi ing Teks Biografi', headers: ['Fakta (Data Nyata)', 'Interpretasi (Penilaian/Tafsiran Panulis)'], rows: [
        ['"Bung Tomo lair ing Surabaya tanggal 3 Oktober 1920."', '"Semangat pidhatone dadi geni pengobar tekad arek-arek Suroboyo."'],
        ['"Dheweke nulis buku luwih saka 15 judhul."', '"Karya-karyane pantes dadi inspirasi tumrap generasi muda saiki."'],
      ]},
    ],
    activityTitle: 'Gladhen: Fakta & Interpretasi',
    questions: [
      { text: 'Ing teks biografi, perangan REORIENTASI (penilaian lan refleksi panulis babagan keteladanan tokoh) lumrahe ngemot...', opts: ['Interpretasi / pandangan reflektif panulis adhedhasar fakta urip tokoh kasebut', 'Mung angka tanggal wae', 'Daftar belanja', 'Resep masakan'], ans: 0, exp: 'Reorientasi merangkum makna keteladanan tokoh secara reflektif.' },
      { text: 'Manakah ukara sing kalebu INTERPRETASI (tafsiran), dudu fakta tanggal mentah?', opts: ['"Ketekunan sang tokoh ngadhepi keterbatasan menehi bukti yen tekad kuwat bisa ngalahake alangan."', '"Beliau lulus sekolah taun 1938."', '"Sekolah kasebut mapan ing kutha Gresik."', '"Acara diwiwiti jam 08.00 esuk."'], ans: 0, exp: 'Mengandung pemaknaan/penilaian atas ketekunan tokoh.' },
      { text: 'Interpretasi sejarah utawa biografi sing apik kudu tetep...', opts: ['Adhedhasar bukti fakta sing bener lan logis (ora ngarang sembarangan)', 'Nentang kabeh fakta', 'Ngece tokoh liya', 'Tanpa alasan'], ans: 0, exp: 'Tafsiran kritis selalu berpijak pada bukti faktual.' },
    ],
  },

  // BAB 4: AKSARA JAWA LANJUTAN: MURDA, REKAN, LAN ANGKA (3 sub)
  {
    topicCode: 'BJ-SMP9-04', subSeq: 1,
    objectives: ['Siswa saged mangerteni fungsi lan wujud Aksara Murda (8), Aksara Rekan (5), lan Angka Jawa (0–9).'],
    materialTitle: 'Fungsi lan Wujud Aksara Murda, Rekan, lan Angka Jawa',
    blocks: [
      { type: 'table', title: 'Ringkasan 3 Aksara Jawa Lanjutan SMP Kelas 9', headers: ['Jenis', 'Wujud & Cacah', 'Fungsi Utamane'], rows: [
        ['Aksara Murda (8)', 'ꦟ(Na), ꦑ(Ka), ꦡ(Ta), ꦯ(Sa), ꦦ(Pa), ꦘ(Nya), ꦓ(Ga), ꦨ(Ba)', 'Huruf pakurmatan kanggo jeneng tokoh, gelar, papan/kutha, lembaga'],
        ['Aksara Rekan (5)', 'ꦏ꦳(Kha), ꦢ꦳(Dza), ꦥ꦳(Fa/Va), ꦗ꦳(Za), ꦒ꦳(Gha) — nganggo cecak telu (꦳)', 'Nulis tembung serapan manca (Arab/Eropa/modern) sing konsonane ora ana ing Carakan'],
        ['Angka Jawa (10)', '꧐(0) ꧑(1) ꧒(2) ꧓(3) ꧔(4) ꧕(5) ꧖(6) ꧗(7) ꧘(8) ꧙(9)', 'Nulis angka (tanggal, taun, cacah) — WAJIB diapit pada pangkat (꧇ ... ꧇)!'],
      ]},
    ],
    activityTitle: 'Gladhen: Murda, Rekan, & Angka Jawa',
    questions: [
      { text: 'Tandha titik telu ing dhuwur aksara (꦳ / cecak telu) minangka tetenger khas saka...', opts: ['Aksara Rekan (Kha, Dza, Fa/Va, Za, Gha)', 'Aksara Murda', 'Angka Jawa', 'Sandhangan wulu'], ans: 0, exp: 'Aksara Rekan dibentuk saka aksara carakan + cecak telu (꦳).' },
      { text: 'Tandha khusus sing WAJIB ngapit ing ngarep lan mburi ANGKA JAWA ing sajroning ukara supaya ora kliru karo aksara biasa yaiku...', opts: ['Pada pangkat (꧇ ... ꧇)', 'Pangkon', 'Wignyan', 'Cakra'], ans: 0, exp: 'Contone taun 2026 ditulis: ꧇꧒꧐꧒꧖꧇.' },
      { text: 'Cacahe Aksara Murda baku ing Aksara Jawa (Na, Ka, Ta, Sa, Pa, Nya, Ga, Ba) ana...', opts: ['8 aksara', '20 aksara', '5 aksara', '10 aksara'], ans: 0, exp: 'Ora kabeh 20 aksara carakan duwe Aksara Murda — mung 8 aksara!' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-04', subSeq: 2,
    objectives: ['Siswa saged mangerteni watesan/paugeran panganggone Aksara Murda, Rekan, lan Angka (supaya ora kliru kaya huruf kapital Latin).'],
    materialTitle: 'Batesan lan Paugeran Murda, Rekan, lan Angka',
    blocks: [
      { type: 'misconception', wrong: 'Aksara Murda persis kaya huruf kapital Latin, dadi saben wiwitan ukara kudu nganggo Aksara Murda!', right: 'KLIRU! Aksara Murda MUNG kanggo pakurmatan jeneng tokoh/gelar/papan/lembaga (dudu saben awal ukara!). Ing siji tembung cukup nganggo 1 Aksara Murda ing aksara paling ngarep sing duwe wujud Murda — yen aksara kapisan ora duwe Murda (kaya Ha/Ra/Wa), pindah menyang aksara sabanjure!' },
    ],
    activityTitle: 'Gladhen: Paugeran Aksara Lanjutan',
    questions: [
      { text: 'Paugeran panganggone Aksara Murda ing siji tembung jeneng papan utawa tokoh (contone "Surabaya" utawa "Gresik") sing BENER yaiku...', opts: ['Cukup nganggo 1 Aksara Murda ing wanda paling ngarep sing duwe wujud Murda (contone ꦯ ing Surabaya, ꦓ ing Gresik)', 'Kabeh aksara ing tembung iku wajib Murda', 'Saben awal ukara wajib Murda sanajan dudu jeneng', 'Ora kena diwenehi sandhangan'], ans: 0, exp: 'Cukup siji Aksara Murda ing saben tembung pakurmatan (utawa paling ngarep sing ana murdane).' },
      { text: 'Tembung serapan kaya "zakat", "faham/foto", lan "khatib" mbutuhake Aksara Rekan amarga...', opts: ['Swara konsonan z, f, lan kh ora ana ing 20 aksara carakan asli (ha–nga)', 'Aksara carakan wis ilang', 'Kanggo nulis angka', 'Kanggo nulis vokal'], ans: 0, exp: 'Aksara Rekan ngakomodasi fonem serapan Arab lan basa manca.' },
      { text: 'Yen ing pungkasan ukara ana angka Jawa sing wis diapit pada pangkat (꧇ ... ꧇), apa isih kudu ditambah pada lungsi (titik ꧉)?', opts: ['Cukup siji pada pangkat pungkasan (ora perlu pada lungsi dobel maneh ing mburine yen wis akhir ukara, manut pedoman baku)', 'Kudu ditambah 3 pangkon', 'Kudu dihapus angkane', 'Kudu nganggo aksara murda'], ans: 0, exp: 'Pada pangkat pungkasan wis nyukupi batas angka; yen tengah ukara terusake aksara sabanjure.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-04', subSeq: 3,
    objectives: ['Siswa saged maca lan nulis conto tembung/ukara cekak sing ngemot Aksara Murda, Aksara Rekan, lan Angka Jawa.'],
    materialTitle: 'Maca lan Nulis Conto Murda, Rekan, lan Angka',
    blocks: [
      { type: 'worked_example', level: 'Latihan Wacan Aksara Lanjutan', question: 'Wacanen: ꦓꦿꦼꦱꦶꦏ꧀  |  ꦥ꦳ꦺꦴꦠꦺꦴ  |  ꧇꧑꧙꧔꧕꧇', steps: ['ꦓ (Ga Murda) + ꦿꦼ (cakra keret = rê) + ꦱꦶ (si) + ꦏ꧀ (k) = "Gresik"!', 'ꦥ꦳ꦺꦴ (Fa rekan + taling tarung = fo) + ꦠꦺꦴ (to) = "foto"!', '꧇꧑꧙꧔꧕꧇ = 1-9-4-5 = "1945"!'], answer: 'Gresik | foto | 1945' },
    ],
    activityTitle: 'Gladhen: Maca & Nulis Aksara Lanjutan',
    questions: [
      { text: 'Angka Jawa ꧇꧒꧐꧒꧖꧇ yen ditulis nganggo angka Latin yaiku...', opts: ['2026', '1926', '2025', '2016'], ans: 0, exp: '꧒=2, ꧐=0, ꧒=2, ꧖=6 → 2026.' },
      { text: 'Tembung "ꦗ꦳ꦏꦠ꧀" (nganggo Aksara Rekan ꦗ꦳ = Za) diwaca...', opts: ['Zakat', 'Jakat', 'Fakat', 'Khatib'], ans: 0, exp: 'ꦗ꦳ (za) + ꦏ (ka) + ꦠ꧀ (t) = zakat.' },
      { text: 'Tembung "ꦯꦸꦫꦧꦪ" (nganggo Aksara Murda ꦯ = Sa Murda) diwaca...', opts: ['Surabaya', 'Semarang', 'Sidoarjo', 'Solo'], ans: 0, exp: 'ꦯꦸ (Su) + ꦫ (ra) + ꦧ (ba) + ꦪ (ya) = Surabaya.' },
    ],
  },

  // BAB 5: SASTRA JAWA: CRITA CEKAK (7 sub)
  {
    topicCode: 'BJ-SMP9-05', subSeq: 1,
    objectives: ['Siswa saged mangerteni crita cekak (cerkak) basa Jawa lan unsur intrinsike (tema, paraga, latar, alur, sudut pandang, amanat).'],
    materialTitle: 'Unsur Intrinsik Crita Cekak (Cerkak)',
    blocks: [
      { type: 'text', text: 'CERKAK (Crita Cekak) yaiku karya sastra prosa fiksi Jawa modern sing cekak (rampung diwaca sak lungguhan) lan fokus ing siji konflik utama. Unsur intrinsike: Tema, Paraga lan Watak, Latar (papan, wektu, swasana), Alur (plot), Sudut Pandang (pamawas), Gaya Basa, lan Amanat (piwulang).' },
    ],
    activityTitle: 'Gladhen: Unsur Intrinsik Cerkak',
    questions: [
      { text: 'Tembung "cerkak" ing sastra Jawa modern minangka cekakan (singkatan) saka...', opts: ['Crita cekak (cerita pendek berbahasa Jawa)', 'Crita kancil', 'Cangkriman cekak', 'Ceramah cekak'], ans: 0, exp: 'Cerkak = cerpen berbahasa Jawa.' },
      { text: 'Ing basa Jawa, unsur intrinsik tokoh/pelaku cerita diarani...', opts: ['Paraga', 'Latar', 'Gatra', 'Pada'], ans: 0, exp: 'Paraga = tokoh; watak paraga = penokohan.' },
      { text: 'Kahanan papan, wektu, lan swasana dumadine crita ing cerkak diarani...', opts: ['Latar (setting)', 'Alur', 'Amanat', 'Sudut pandang'], ans: 0, exp: 'Latar nggambarake ing ngendi, kapan, lan kepriye swasanane crita.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-05', subSeq: 2,
    objectives: ['Siswa saged nganalisis paraga (protagonis, antagonis, tritagonis) lan teknik panggambaran watak ing cerkak.'],
    materialTitle: 'Paraga lan Watak Paraga (Penokohan)',
    blocks: [
      { type: 'table', title: '3 Peran Paraga ing Cerkak', headers: ['Paraga', 'Perane'], rows: [
        ['Protagonis', 'Paraga utama sing dadi pusat crita lan lumrahe nduweni watak becik/ngadhepi masalah'],
        ['Antagonis', 'Paraga sing dadi lawan / pemicu konflik marang protagonis'],
        ['Tritagonis', 'Paraga penengah / pambiyantu sing asring menehi pitutur wicaksana'],
      ]},
    ],
    activityTitle: 'Gladhen: Paraga & Watak Cerkak',
    questions: [
      { text: '"Sanajan udan deres, Dimas tetep ngeterake payung menyang simbahe ing pasar supaya simbahe ora kodanan." Watak Dimas sing kagambar saka tumindake (dramatik) yaiku...', opts: ['Bekti, tresna, lan peduli banget marang simbahe', 'Kesed lan egois', 'Jirih', 'Sombong'], ans: 0, exp: 'Tumindak nyata paraga nuduhake watak bekti.' },
      { text: 'Paraga penengah sing lumrahe wicaksana lan nulungi ngudhari masalah antarane protagonis lan antagonis diarani...', opts: ['Tritagonis', 'Antagonis', 'Narator', 'Latar'], ans: 0, exp: 'Tritagonis = penengah/pendamping.' },
      { text: 'Cara pengarang cerkak nggambarake watak paraga kanthi ora langsung liwat pacelathon (dialog) lan tumindak paraga diarani teknik...', opts: ['Dramatik', 'Analitik', 'Statis', 'Kronologis'], ans: 0, exp: 'Analitik disebut langsung; dramatik disimpulake saka tumindak & dialog.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-05', subSeq: 3,
    objectives: ['Siswa saged nganalisis konflik batin (internal) lan konflik eksternal ing cerkak Jawa.'],
    materialTitle: 'Konflik ing Cerkak',
    blocks: [
      { type: 'text', text: 'Konflik yaiku prakara utawa pasulayan sing nggerakake crita nganti klimaks. Konflik bisa INTERNAL (perang batin ing atine paraga dhewe, contone bingung milih jujur utawa nutupi salahe kanca) utawa EKSTERNAL (pasulayan karo paraga liya, kahanan ekonomi, utawa alam).' },
    ],
    activityTitle: 'Gladhen: Konflik Cerkak',
    questions: [
      { text: 'Sari atine gelisah banget mikir apa kudu matur jujur marang ibune yen dheweke mecahake piring kesayangan utawa meneng wae. Iki conto konflik...', opts: ['Internal (konflik batin)', 'Eksternal karo alam', 'Eksternal karo warga desa', 'Tanpa konflik'], ans: 0, exp: 'Pertentangan dumadi ing sajroning batin Sari dhewe.' },
      { text: 'Pucuking konflik utawa ketegangan paling dhuwur ing sajroning cerkak diarani...', opts: ['Klimaks', 'Orientasi', 'Koda', 'Irah-irahan'], ans: 0, exp: 'Klimaks dadi titik paling tegang sadurunge penyelesaian.' },
      { text: 'Geneya cerkak sing apik kudu nduweni konflik sing cetha?', opts: ['Amarga konflik sing ndadekake crita urip, menarik, lan nuduhake owah-owahan watak paraga', 'Supaya kabeh paraga padha tukaran fisik', 'Supaya crita dadi 100 halaman', 'Amarga ora ana latar'], ans: 0, exp: 'Konflik dadi motor penggerak alur cerkak.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-05', subSeq: 4,
    objectives: ['Siswa saged mbedakake alur maju, alur mundur (flashback), lan alur campuran ing cerkak.'],
    materialTitle: 'Alur (Plot) ing Cerkak',
    blocks: [
      { type: 'tip', text: 'Alur Maju (progresif): wiwitan → tengah → pungkasan runtut. Alur Mundur (flashback): wiwit saka saiki banjur kelingan kedadeyan biyen. Alur Campuran: saiki → kelingan biyen → bali maneh ngrampungake crita saiki!' },
    ],
    activityTitle: 'Gladhen: Alur Cerkak',
    questions: [
      { text: 'Cerkak diwiwiti nalika Raka nyekel piala juara, banjur pikirane kelingan limang sasi kepungkur nalika dheweke gagal latihan, banjur bali menyang panggung juara karo mesem. Alur cerkak iki yaiku...', opts: ['Alur campuran', 'Alur maju murni', 'Tanpa alur', 'Alur acak'], ans: 0, exp: 'Saiki → kilas balik (flashback) → bali saiki = alur campuran.' },
      { text: 'Urutan tahapan alur cerkak saka wiwitan nganti pungkasan yaiku...', opts: ['Pangenalan (orientasi) → Wiwit konflik → Klimaks → Peleraian → Penyelesaian (resolusi)', 'Klimaks → Pangenalan → Resolusi', 'Resolusi → Konflik', 'Judul → Panutup'], ans: 0, exp: 'Struktur alur klasik nuntun pamaca saka pengenalan nganti rampung.' },
      { text: 'Tembung "rong taun kepungkur" utawa "dumadakan atine kelingan jaman cilikane" lumrahe dadi tandha peralihan menyang...', opts: ['Kilas balik (alur mundur)', 'Masa depan', 'Penutup', 'Judul'], ans: 0, exp: 'Narik crita bali menyang prastawa lawas.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-05', subSeq: 5,
    objectives: ['Siswa saged nemtokake sudut pandang (pamawas) wong kapisan ("aku") lan wong katelu ("dheweke/jeneng paraga") ing cerkak.'],
    materialTitle: 'Sudut Pandang (Pamawas) ing Cerkak',
    blocks: [
      { type: 'text', text: 'Sudut pandang (pamawas) wong kapisan nganggo tembung sesulih "aku / kula" (pengarang melu dadi paraga ing crita). Sudut pandang wong katelu nganggo "dheweke / piyambake / jeneng paraga" (pengarang ing njaba crita, bisa sarwa weruh utawa mung pengamat).' },
    ],
    activityTitle: 'Gladhen: Sudut Pandang Cerkak',
    questions: [
      { text: '"Esuk iku aku mlaku alon nyusuri dalan menyang sekolah karo nyangking tas abot." Pethikan cerkak iki nganggo sudut pandang...', opts: ['Wong kapisan ("aku")', 'Wong katelu sarwa weruh', 'Wong kapindho', 'Pengamat njaba'], ans: 0, exp: 'Tembung sesulih "aku" nuduhake sudut pandang wong kapisan.' },
      { text: '"Bima lungguh dhewekan ing bangku taman. Ing njero atine dheweke ngrasa getun banget, dene adhine uga meneng-meneng ngrasa salah." Sudut pandang pethikan iki yaiku...', opts: ['Wong katelu sarwa weruh (ngerti isi atine kabeh paraga)', 'Wong kapisan', 'Wong katelu pengamat', 'Dialog drama'], ans: 0, exp: 'Nganggo jeneng Bima/dheweke lan weruh rasa batine paraga loro pisan.' },
      { text: 'Kaluwihan sudut pandang wong kapisan ("aku") ing cerkak yaiku...', opts: ['Pamaca luwih cepet ngrasakake kedekatan emosi lan curahan batin paraga utama', 'Ora perlu konflik', 'Ora perlu latar', 'Kabeh paraga ilang'], ans: 0, exp: 'Gaya "aku" krasa intim lan pribadi.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-05', subSeq: 6,
    objectives: ['Siswa saged ngenali gaya basa Jawa ing cerkak (tembung entar/kiasan, paribasan/bebasan, lan lelewaning basa/majas).'],
    materialTitle: 'Gaya Basa ing Cerkak (Tembung Entar & Paribasan)',
    blocks: [
      { type: 'table', title: 'Tembung Entar (Kiasan) & Paribasan Jawa Populer', headers: ['Ungkapan Jawa', 'Tegese'], rows: [
        ['Dawa tangane', 'Seneng nyolong (panjang tangan)'],
        ['Entheng tangane / Jembar segarane', 'Sregep nulungi / Sabar lan gampang ngapura'],
        ['Adus kringet', 'Nyambut gawe mempeng banget'],
        ['Becik ketitik ala ketara', 'Tumindak becik utawa ala suwe-suwe mesthi bakal kaweruhan'],
        ['Rukun agawe santosa, crah agawe bubrah', 'Kerukunan ndadekake kuwat, pasulayan ndadekake rusak'],
      ]},
    ],
    activityTitle: 'Gladhen: Gaya Basa Cerkak',
    questions: [
      { text: 'Ing cerkak ana ukara: "Bapake saben dina adus kringet ing tambak supaya anak-anake bisa sekolah dhuwur." Tembung entar "adus kringet" tegese...', opts: ['Kerja keras membanting tulang', 'Mandi di sungai', 'Olahraga lari', 'Tidur siang'], ans: 0, exp: 'Adus kringet = nyambut gawe kanthi mempeng lan kerja keras.' },
      { text: 'Paribasan Jawa "Becik ketitik, ala ketara" ngemu pitutur yen...', opts: ['Kabeh tumindak becik lan ala ing tembe mburi mesthi bakal ketok/kaweruhan kasunyatane', 'Tumindak ala bisa didhelikake salawase', 'Wong becik mesthi kalah', 'Ora perlu jujur'], ans: 0, exp: 'Kejujuran lan kebaikan pada akhirnya selalu terbukti.' },
      { text: 'Tembung entar "jembar segarane" kanggo nggambarake watak paraga wong tuwa tegese...', opts: ['Sabar banget lan gampang menehi pangapura (berlapang dada)', 'Omahe cedhak segara', 'Seneng mancing', 'Gampang nesu'], ans: 0, exp: 'Jembar segarane = lapang dada / pemaaf.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-05', subSeq: 7,
    objectives: ['Siswa saged nyipta/nulis cerkak basa Jawa asli adhedhasar pengalaman utawa kahanan nyata sekitar Gresik daratan.'],
    materialTitle: 'Nulis Crita Cekak (Cerkak) Basa Jawa',
    blocks: [
      { type: 'list', title: 'Langkah Nulis Cerkak Basa Jawa Asli', items: ['1. Goleka ide cedhak uripmu (kekancan ing sekolah, pasar esuk, gotong royong kampung, utawa perjuangan wong tuwa).', '2. Tentukan 2–3 paraga utama lan siji konflik cetha.', '3. Gunakake ragam basa alami (narasi ngoko lugu, dialog nyesuekake unggah-ungguh antarparaga: anak marang wong tuwa nganggo krama!).', '4. Priksa ejaan basa Jawa (d/dh, t/th, tandha petik dialog) sadurunge dikumpulake!'] },
    ],
    activityTitle: 'Gladhen: Nulis Cerkak',
    questions: [
      { text: 'Nalika nulis dialog cerkak basa Jawa antarane bocah SMP (Dimas) sing matur marang ibune, ragam basa sing trep dianggo Dimas yaiku...', opts: ['Basa Krama (krama lugu/alus) supaya unggah-ungguhe urip lan nyata', 'Basa kasar', 'Basa asing kabeh', 'Tanpa tandha petik'], ans: 0, exp: 'Unggah-ungguh dialog ing cerkak nambah keaslian budaya Jawa.' },
      { text: 'Panulisan dialog cerkak sing bener tandha wacane yaiku...', opts: ['"Bu, kula badhe bidhal sekolah rumiyin," ature Dimas karo salim.', '"Bu kula badhe bidhal sekolah rumiyin." Ature Dimas.', 'Bu, kula badhe bidhal, "ature Dimas."', '"Bu, kula badhe bidhal sekolah rumiyin", ature Dimas.'], ans: 0, exp: 'Tandha koma ing njero tandha petik sadurunge tembung pangiring huruf cilik.' },
      { text: 'Perkara paling penting supaya cerkak gaweyan siswa krasa urip lan ora mboseni yaiku...', opts: ['Fokus siji konflik kuat, detail latar nyata, dialog alami, lan amanat sing nyentuh tanpa ngguroni', 'Nulis 20 konflik tanpa rampung', 'Nyalin crita kanca', 'Mung nulis dhaptar jeneng'], ans: 0, exp: 'Kejujuran gagasan lan fokus konflik dadi kekuwatan cerkak.' },
    ],
  },

  // BAB 6: APRESIASI BUDAYA LAN KARYA JAWA (5 sub)
  {
    topicCode: 'BJ-SMP9-06', subSeq: 1,
    objectives: ['Siswa saged ngapresiasi maneka karya sastra Jawa (macapat, geguritan, cerkak, paribasan, crita wayang) lan nilai luhure.'],
    materialTitle: 'Apresiasi Karya Sastra Jawa',
    blocks: [
      { type: 'text', text: 'Karya sastra Jawa (Macapat, Geguritan, Cerkak, Paribasan, lan Wayang) nyimpen filosofi urip adiluhung: tepa slira (empati), andhap asor (rendah hati), gotong royong, lan ngayomi sesama. Apresiasi sastra ditindakake kanthi maca, mangerteni maknane, ngrasakake kaendahane, lan nguri-uri ing jaman modern!' },
    ],
    activityTitle: 'Gladhen: Apresiasi Karya Sastra Jawa',
    questions: [
      { text: 'Ungkapan basa Jawa "nguri-uri budaya Jawa" nduweni teges...', opts: ['Melestarikan dan merawat warisan budaya Jawa agar tetap hidup dan berkembang', 'Ninggalake budaya Jawa', 'Ngganti budaya lokal', 'Ngedol barang antik'], ans: 0, exp: 'Nguri-uri = melestarikan/merawat secara aktif.' },
      { text: 'Nilai budaya Jawa "tepa slira" (ngrasakake apa sing dirasakake wong liya) tegese padha karo...', opts: ['Empati dan tenggang rasa', 'Sombong', 'Egois', 'Minder'], ans: 0, exp: 'Tepa slira nuntun manungsa supaya ora nglarani atine wong liya.' },
      { text: 'Wujud apresiasi aktif pelajar SMP marang karya sastra Jawa antarane...', opts: ['Melu lomba maca geguritan/macapat, nulis cerkak ing mading basa Jawa, lan mbahas nilai luhure ing kelas', 'Ngece kanca sing sinau basa Jawa', 'Ora gelem maca teks Jawa', 'Nganggep budaya Jawa kuno lan ora guna'], ans: 0, exp: 'Keterlibatan aktif generasi muda njamin kelestarian sastra daerah.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-06', subSeq: 2,
    objectives: ['Siswa saged ngenali seni lan tradisi budaya Jawa Timur sing bersumber jelas (gamelan, wayang, batik, ludruk/ketoprak, kerajinan lokal).'],
    materialTitle: 'Seni lan Tradisi Jawa sing Bersumber Jelas',
    blocks: [
      { type: 'visual_cards', title: 'Ragam Seni & Tradisi Jawa Timur (Sumber Jelas)', cards: [
        { emoji: '🥁', label: 'Gamelan & Wayang', sub: 'Diakui UNESCO sebagai Warisan Budaya Takbenda Dunia — sarat harmoni & filosofi!' },
        { emoji: '👘', label: 'Batik & Kriya Tradisional', sub: 'Motif khas tiap daerah (termasuk sentra kriya/kerajinan di Jawa Timur)' },
        { emoji: '🎭', label: 'Seni Pertunjukan Rakyat', sub: 'Ludruk (khas Jawa Timur) & ketoprak — panggung hiburan sekaligus kritik sosial santun!' },
        { emoji: '🍲', label: 'Kuliner Tradisional', sub: 'Jajanan & masakan khas daerah sing diwarisake turun-temurun' },
      ]},
    ],
    activityTitle: 'Gladhen: Seni & Tradisi Jawa',
    questions: [
      { text: 'Seni teater rakyat tradisional khas Jawa Timur sing misuwur kanthi pambuka Tari Remo, kidungan/parikan jenaka, lan crita rakyat padinan yaiku...', opts: ['Ludruk', 'Opera Italia', 'Kabuki', 'Balet'], ans: 0, exp: 'Ludruk minangka kesenian teater rakyat khas Jawa Timur sing komunikatif.' },
      { text: 'Kesenian gamelan, wayang kulit, lan batik Indonesia wis diakui dunia dening lembaga PBB bidang pendidikan lan kabudayaan, yaiku...', opts: ['UNESCO', 'FIFA', 'WHO', 'IMF'], ans: 0, exp: 'Pengakuan UNESCO dadi kebanggaan sekaligus tanggung jawab pelestarian kita.' },
      { text: 'Geneya nalika nyinaoni utawa nulis babagan tradisi lokal, kita kudu nganggo SUMBER SING JELAS (narasumber pelaku seni, dinas kebudayaan, buku rujukan)?', opts: ['Supaya informasi budaya akurat, ngajeni pelaku asli, lan ora nyebarake crita rekaan sing kliru', 'Supaya bisa ngarang mitos dhewe', 'Ora perlu sumber', 'Supaya luwih cepet nyalin'], ans: 0, exp: 'Akurasi sumber njaga martabat lan kasunyatan warisan budaya.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-06', subSeq: 3,
    objectives: ['Siswa saged ngapresiasi konteks budaya lokal Gresik daratan (basa Jawa pesisir utara, kearifan sosial, kuliner/kriya UMKM) kanthi objektif.'],
    materialTitle: 'Apresiasi Budaya ing Konteks Lokal Gresik Daratan',
    blocks: [
      { type: 'text', text: 'Ing konteks lokal Gresik daratan (Jawa Timur), basa Jawa padinan lan unggah-ungguh tetep urip ing kulawarga, pasar, lan masyarakat. Wilayah iki uga misuwur kanthi warisan situs sejarah Islam pesisir, sentra kriya lokal (kayata songkok lan kerajinan), sarta kuliner tradisional (kayata pudak, otak-otak bandeng, lan nasi krawu) sing dadi kebanggaan lan penggerak ekonomi warga!' },
    ],
    activityTitle: 'Gladhen: Konteks Lokal Gresik Daratan',
    questions: [
      { text: 'Kuliner tradisional khas Gresik daratan sing dadi bagéan warisan budaya lan daya tarik ekonomi UMKM lokal antarane...', opts: ['Pudak, otak-otak bandeng, lan nasi krawu', 'Pempek lan papeda', 'Gudeg lan bakpia', 'Rendang lan sate padang'], ans: 0, exp: 'Kuliner khas daerah minangka identitas budaya sekaligus potensi ekonomi kreatif.' },
      { text: 'Sikap paling becik siswa SMP Gresik marang basa Jawa padinan lokal (dialek Jawa Timuran) lan basa Jawa baku/krama yaiku...', opts: ['Nganggo dialek lokal kanthi akrab marang kanca sebaya, nanging tetep nguwasani basa krama/unggah-ungguh nalika matur marang wong tuwa, guru, lan acara resmi', 'Isin nganggo basa Jawa', 'Nganggo basa kasar marang guru', 'Nglalekake basa Indonesia'], ans: 0, exp: 'Bisa mapanake ragam basa (empan papan) nuduhake kecerdasan budaya.' },
      { text: 'Nalika ngangkat topik budaya lokal ing proyek kelas, prinsip sing wajib dijaga yaiku...', opts: ['Ngajeni keragaman lokal, nggunakake data nyata saka pelaku/sumber resmi, lan ora ngremehake budaya daerah liya', 'Ngaku budaya daerah liya ora penting', 'Ngarang asal-usul tanpa sumber', 'Mung nyalin saka internet tanpa dicek'], ans: 0, exp: 'Cinta budaya lokal mlaku bareng karo sikap ilmiah lan toleran.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-06', subSeq: 4,
    objectives: ['Siswa saged nindakake dokumentasi budaya lokal (cathetan wawancara, foto/video etis, arsip digital) minangka upaya pelestarian.'],
    materialTitle: 'Dokumentasi Budaya lan Karya Lokal',
    blocks: [
      { type: 'list', title: '4 Langkah Dokumentasi Budaya sing Etis', items: ['1. Njaluk izin dhisik marang pelaku budaya/pengrajin sadurunge motret utawa ngrekam video.', '2. Cathet informasi akurat: jeneng karya/tradisi, papan, pelaku/narasumber, proses, lan tanggal dokumentasi.', '3. Olah dadi tulisan profil, poster infografis, utawa video pendek edukatif.', '4. Cantumake kredit/jeneng narasumber lan enggon dokumentasi kanthi jujur!'] },
    ],
    activityTitle: 'Gladhen: Dokumentasi Budaya',
    questions: [
      { text: 'Geneya dokumentasi budaya lokal awujud tulisan, foto, lan video pendek dening pelajar penting banget ing jaman digital saiki?', opts: ['Supaya kawruh babagan seni, kriya, lan kuliner tradisional kacathet rapi, ora ilang kapangan jaman, lan dikenal generasi muda liwat media digital', 'Mung kanggo pamer HP anyar', 'Supaya tradisi cepet punah', 'Ora ana mupangate'], ans: 0, exp: 'Dokumentasi digital dadi arsip urip pelestarian budaya.' },
      { text: 'Etika utama nalika ngrekam proses gawe kerajinan utawa panganan tradisional kanggo tugas dokumentasi sekolah yaiku...', opts: ['Njaluk izin resmi marang pengrajin/pemilik usaha lan nyantumake jeneng sarta apresiasi kanthi jujur', 'Ngrekam ndhelik-ndhelik tanpa izin', 'Ngece cara kerjane', 'Nyebarake resep rahasia tanpa persetujuan'], ans: 0, exp: 'Menghormati hak lan privasi narasumber wajib ing dokumentasi budaya.' },
      { text: 'Data wajib sing kudu ana ing cathetan dokumentasi budaya (metadata sederhana) yaiku...', opts: ['Jeneng objek/karya, lokasi, tanggal pengambilan, jeneng narasumber, lan katrangan ringkes', 'Mung tanggal lair kameramen', 'Mung ukuran file MB', 'Tanpa katrangan apa-apa'], ans: 0, exp: 'Metadata njaga nilai sejarah lan keabsahan arsip dokumentasi.' },
    ],
  },
  {
    topicCode: 'BJ-SMP9-06', subSeq: 5,
    objectives: ['Siswa saged ngrancang lan nglaksanakake proyek apresiasi budaya Jawa kreatif (pentas sesorah/geguritan, pameran dokumentasi, utawa konten digital basa Jawa).'],
    materialTitle: 'Proyek Apresiasi Budaya lan Karya Jawa',
    blocks: [
      { type: 'text', text: 'Minangka puncak pasinaon Basa Jawa kelas 9 SMP, siswa bisa ngwujudake PROYEK APRESIASI nyata: pameran poster dokumentasi kuliner/kriya lokal, pagelaran mini sesorah–pranatacara–geguritan, buku antologi cerkak kelas, utawa video pendek edukatif basa Jawa santun ing media sekolah!' },
    ],
    activityTitle: 'Gladhen: Proyek Apresiasi Budaya',
    questions: [
      { text: 'Conto proyek apresiasi budaya Jawa berbasis kolaborasi digital sing kreatif lan cocog kanggo siswa kelas 9 SMP yaiku...', opts: ['Nggawe video pendek dokumenter utawa podcast basa Jawa santun babagan pengrajin/kuliner lokal dilengkapi takarir (subtitle) basa Indonesia', 'Nyalin tugas lawas tanpa karya', 'Nggawe konten ngece basa daerah', 'Ora nindakake proyek'], ans: 0, exp: 'Memadukan teknologi digital + takarir ndadekake budaya Jawa gampang dinikmati khalayak luwih jembar!' },
      { text: 'Tahapan ngrancang proyek apresiasi budaya kelompok sing runtut yaiku...', opts: ['Perencanaan topik & pembagian peran → Riset/latihan & produksi → Penyajian/pameran → Evaluasi & refleksi', 'Langsung pameran tanpa persiapan', 'Evaluasi dhisik sadurunge gawe karya', 'Mung ketua kelompok sing kerja'], ans: 0, exp: 'Manajemen proyek njamin hasil karya rapi lan bermakna.' },
      { text: 'Refleksi paling berharga sawise ngrampungake pasinaon Basa Jawa SD nganti kelas 9 SMP yaiku...', opts: ['Nduweni rasa bangga, tresna, lan tanggung jawab njaga basa, unggah-ungguh, sarta warisan budaya Jawa ing sajroning kabinekaan Indonesia', 'Lali kabeh materi sawise lulus', 'Rumangsa budaya daerah ora penting', 'Mung ngoyak biji tanpa makna'], ans: 0, exp: 'Utamakake Basa Indonesia, Lestarike Basa Daerah, Kuwasani Basa Asing!' },
    ],
  },
];

upsertLessonsBatch('Kelas 9 SMP — Bahasa Jawa Gresik Daratan (6 Bab, 33 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

