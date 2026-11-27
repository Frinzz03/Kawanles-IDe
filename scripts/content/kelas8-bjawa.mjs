import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: TEKS PAWARTA (5 sub)
  {
    topicCode: 'BJ-SMP8-01', subSeq: 1,
    objectives: ['Siswa saged mangerteni teks pawarta (berita basa Jawa) lan nganalisis unsur 5W+1H (Apa, Sapa, Ing ngendi, Kapan, Geneya, Kepriye).'],
    materialTitle: 'Teks Pawarta lan Unsur 5W+1H',
    blocks: [
      { type: 'text', text: 'PAWARTA iku informasi utawa kabar anyar babagan kedadeyan nyata (faktual) sing diwartakake liwat media cetak, radhio, TV, utawa internet nganggo basa Jawa sing cetha lan komunikatif.' },
      { type: 'table', title: 'Unsur 5W+1H ing Teks Pawarta Basa Jawa', headers: ['5W+1H', 'Basa Jawa (Ngoko / Krama)', 'Isine'], rows: [
        ['What', 'Apa / Punapa', 'Kedadeyan utawa acara apa sing dumadi'],
        ['Who', 'Sapa / Sinten', 'Paraga utawa pihak sing melu / kajibah'],
        ['Where', 'Ing ngendi / Ing pundi', 'Papan panggonane kedadeyan'],
        ['When', 'Kapan / Kapan (wekdalipun)', 'Dina, tanggal, lan wektu kedadeyan'],
        ['Why', 'Geneya / Kenging punapa', 'Sebab utawa tujuan kedadeyan'],
        ['How', 'Kepriye / Kados pundi', 'Urutaning kedadeyan lan kahanane'],
      ]},
    ],
    activityTitle: 'Gladhen: Unsur 5W+1H Pawarta',
    questions: [
      { text: 'Tembung pitakon basa Jawa sing cocog kanggo nggoleki unsur WHY (alasan/sebab) ing teks pawarta yaiku...', opts: ['Geneya / Kenging punapa', 'Ing ngendi', 'Sapa', 'Kapan'], ans: 0, exp: 'Geneya (ngoko) / Kenging punapa (krama) tegese mengapa.' },
      { text: '"Para siswa SMP ing Gresik nganakake kerja bakti nandur wit mangrove ing pesisir nalika dina Minggu esuk kanggo nyegah abrasi." Unsur WHERE ing ukara kasebut yaiku...', opts: ['Ing pesisir (Gresik)', 'Dina Minggu esuk', 'Para siswa SMP', 'Kanggo nyegah abrasi'], ans: 0, exp: 'Where nuduhake papan panggonan kedadeyan.' },
      { text: 'Syarat utama sawijining kabar pantes diarani PAWARTA sing becik yaiku...', opts: ['Faktual (nyata), aktual (anyar), cekak aos, lan narik kawigaten masyarakat', 'Crita dongeng karangan wae', 'Kabar lawas tanpa bukti', 'Mung gosip ora jelas'], ans: 0, exp: 'Pawarta kudu adhedhasar kasunyatan sing anyar lan migunani.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-01', subSeq: 2,
    objectives: ['Siswa saged nganalisis struktur teks pawarta (Irah-irahan/Headline, Teras/Lead, Surasa/Tubuh, lan Panutup/Ekor).'],
    materialTitle: 'Struktur Teks Pawarta',
    blocks: [
      { type: 'table', title: '4 Struktur Teks Pawarta (Piramida Kuwalik)', headers: ['Perangan', 'Tegese'], rows: [
        ['1. Irah-irahan (Headline)', 'Judul pawarta sing cekak, padhet, lan narik kawigaten'],
        ['2. Teras Pawarta (Lead)', 'Paragraf pisanan isi sari pati 5W+1H paling wigati'],
        ['3. Surasa / Isi (Body)', 'Andharan jangkep kronologi lan kutipan narasumber'],
        ['4. Panutup / Ekor (Tail)', 'Katrangan tambahan pelengkap ing pungkasan'],
      ]},
    ],
    activityTitle: 'Gladhen: Struktur Pawarta',
    questions: [
      { text: 'Perangan paling dhuwur ing teks pawarta kang awujud judul cekak lan padhet diarani...', opts: ['Irah-irahan (headline)', 'Surasa', 'Ekor pawarta', 'Pambuka crita'], ans: 0, exp: 'Irah-irahan = judul.' },
      { text: 'Paragraf kapisan ing teks pawarta sing wis ngringkes inti kedadeyan (apa, sapa, ing ngendi, kapan) diarani...', opts: ['Teras pawarta (lead)', 'Ekor pawarta', 'Geguritan', 'Cangkriman'], ans: 0, exp: 'Teras pawarta nyedhiyakake inti warta ing wiwitan.' },
      { text: 'Sifat panyusunan teks pawarta kanthi ndeleh informasi paling penting ing dhuwur banjur saya ngisor saya kurang penting diarani pola...', opts: ['Piramida kuwalik', 'Piramida jejeg', 'Bunderan', 'Acak'], ans: 0, exp: 'Piramida kuwalik nggampangake pamaca langsung nangkep inti warta.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-01', subSeq: 3,
    objectives: ['Siswa saged mbedakake fakta lan opini ing teks pawarta basa Jawa sarta waspada marang kabar goroh (hoaks).'],
    materialTitle: 'Fakta lan Opini ing Pawarta',
    blocks: [
      { type: 'tip', text: 'Ing pawarta basa Jawa: FAKTA iku kedadeyan nyata sing bisa dibuktekake (contone: "Lomba diikuti 120 siswa ing dina Setu"), dene OPINI iku panemu utawa pangira-ira ("Miturutku lombane paling rame sak-Jawa Timur"). Aja gampang nyebar kabar sing durung jelas bener-orane (hoaks)!' },
    ],
    activityTitle: 'Gladhen: Fakta & Opini Pawarta',
    questions: [
      { text: 'Ukara ngisor iki sing kalebu FAKTA ing teks pawarta yaiku...', opts: ['Lomba maca geguritan tingkat kabupaten dianakake tanggal 10 November lan diikuti 45 peserta.', 'Lomba mau katone paling apik lan paling angel.', 'Kayane taun ngarep pesertane luwih sithik.', 'Miturutku juri kudune nambah wektu.'], ans: 0, exp: 'Tanggal lan cacahing peserta bisa dibuktekake kanthi objektif.' },
      { text: 'Tembung "miturutku, kayane, mbokmenawa, paling apik" lumrahe dadi tetenger ukara...', opts: ['Opini (panemu)', 'Fakta statistik', 'Prentah', 'Irah-irahan'], ans: 0, exp: 'Nuduhake panemu utawa pangira-ira subjektif.' },
      { text: 'Yen nampa kabar menghebohkan ing grup HP nganggo basa Jawa utawa Indonesia tanpa sumber resmi, tumindak sing wicaksana yaiku...', opts: ['Mriksa dhisik kabenerane (tabayyun/cek fakta) lan ora langsung nyebarake', 'Langsung diterusake menyang kabeh kanca', 'Langsung percaya 100%', 'Ditambahi crita dhewe'], ans: 0, exp: 'Saring sadurunge sharing nyegah panyebaran hoaks.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-01', subSeq: 4,
    objectives: ['Siswa saged ngevaluasi kredibilitas sumber informasi lan nggatekake unggah-ungguh basa ing pawarta.'],
    materialTitle: 'Sumber Informasi lan Basa Pawarta',
    blocks: [
      { type: 'text', text: 'Sumber pawarta sing bisa dipercaya yaiku saksi langsung, narasumber kompeten (guru, lurah, dinas resmi, pelaku acara), lan media pers resmi. Ing basa Jawa (kalebu wilayah Gresik daratan), pawarta formal asring nganggo basa Krama utawa Ngoko alus/lugas sing sopan, runtut, lan gampang dimangerteni pamaca.' },
    ],
    activityTitle: 'Gladhen: Sumber Pawarta',
    questions: [
      { text: 'Kanggo nulis pawarta babagan "Panen Bandeng ing Tambak", narasumber sing paling pas lan bisa dipercaya yaiku...', opts: ['Petambak langsung lan petugas dinas perikanan setempat', 'Wong sing ora tau weruh tambak', 'Komentar anonim ing media sosial', 'Pangira-ira pribadi'], ans: 0, exp: 'Narasumber utama (primer) nguwasani kasunyatan ing lapangan.' },
      { text: 'Nyebutake jeneng lan jabatan narasumber kanthi cetha ing sajroning pawarta iku penting supaya...', opts: ['Pawarta bisa dipertanggungjawabake lan dipercaya pamaca', 'Pawarta dadi dawa wae', 'Ngganti judul', 'Ora perlu tanggal'], ans: 0, exp: 'Kajelasan sumber njamin kredibilitas warta.' },
      { text: 'Menawa maca pawarta resmi ing sangarepe bapak/ibu guru utawa masyarakat umum, ragam basa Jawa sing luwih santun lan trep yaiku...', opts: ['Basa Krama (krama lugu/madya utawa krama inggil miturut unggah-ungguhe)', 'Basa kasar/pisuhan', 'Basa singkatan ora jelas', 'Campur aduk ora karuan'], ans: 0, exp: 'Ragam krama nuduhake trapsila lan rasa ngajeni marang pamireng.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-01', subSeq: 5,
    objectives: ['Siswa saged nulis teks pawarta cekak adhedhasar kedadeyan nyata ing sekolah utawa lingkungan Gresik daratan.'],
    materialTitle: 'Nulis lan Maca Teks Pawarta',
    blocks: [
      { type: 'list', title: 'Urutan Nulis Pawarta Basa Jawa', items: ['1. Temtokake kedadeyan nyata anyar ing sekolah/lingkungan.', '2. Kumpulna cathetan jangkep 5W+1H (Apa, Sapa, Ing ngendi, Kapan, Geneya, Kepriye).', '3. Gawe irah-irahan cekak, teras pawarta padhet, lan surasa jangkep.', '4. Priksa maneh ejaan basa Jawa (bedakna a/o, dh/d, th/t!) sadurunge diwaca!'] },
    ],
    activityTitle: 'Gladhen: Nulis Pawarta',
    questions: [
      { text: 'Panulisan ejaan basa Jawa sing BENER (nggatekake beda d/dh lan t/th) yaiku...', opts: ['dalan, dhuwit, tuku, bathik', 'dhalan, duwit, thuku, batik', 'dalan, duwit, thuku, batik', 'dhalan, dhuwit, tuku, batik'], ans: 0, exp: 'dalan (d tipis), dhuwit (dh kandel), tuku (t tipis), bathik (th kandel).' },
      { text: 'Nalika maca teks pawarta ing ngarep kelas (dadi penyiar warta), bab sing kudu digatekake yaiku...', opts: ['Lafal/pocapan cetha, intonasi trep, jeda pas, lan sikap tenang sarta pandeleng ora mung ndhingkluk', 'Maca banter banget tanpa titik-koma', 'Bisik-bisik', 'Ngguyu terus nalika maca warta sedhih'], ans: 0, exp: 'Vokal, intonasi, lan sikap profesional nggawe pawarta gampang dimirengake.' },
      { text: 'Sadurunge nulis pawarta, nyathet unsur 5W+1H dhisik migunani kanggo...', opts: ['Masthekake ora ana informasi wigati sing kelewatan', 'Ngilangi narasumber', 'Nggawe crita fiksi', 'Ngowahi kasunyatan'], ans: 0, exp: '5W+1H dadi kerangka utama pawarta jangkep.' },
    ],
  },

  // BAB 2: TEKS LAPORAN ASIL OBSERVASI (5 sub)
  {
    topicCode: 'BJ-SMP8-02', subSeq: 1,
    objectives: ['Siswa saged mangerteni tujuan lan titikan teks Laporan Asil Observasi (LAO) basa Jawa.'],
    materialTitle: 'Tujuan Teks Laporan Asil Observasi',
    blocks: [
      { type: 'text', text: 'Teks Laporan Asil Observasi (LAO) yaiku tulisan sing njlentrehake kasunyatan asil pengamatan langsung kanthi sistematis lan objektif (contone ngamati taman sekolah, wit mangrove pesisir, pasar tradisional, utawa kerajinan lokal).' },
    ],
    activityTitle: 'Gladhen: Tujuan Observasi',
    questions: [
      { text: 'Tujuan utama nulis teks Laporan Asil Observasi (LAO) yaiku...', opts: ['Njlentrehake informasi faktual lan objektif adhedhasar pengamatan langsung marang sawijining objek', 'Nglipur kanthi dongeng kewan', 'Ngajak tuku barang', 'Nulis geguritan'], ans: 0, exp: 'LAO fokus nyampekake kasunyatan ilmiah asil pengamatan.' },
      { text: 'Ciri utama teks LAO yaiku asipat OBJEKTIF, tegese...', opts: ['Ditulis manut kasunyatan sing diamati tanpa dicampuri pangira-ira utawa seneng-ora senenge panulis', 'Manut karepe panulis dhewe', 'Kebak crita khayalan', 'Ora perlu pengamatan'], ans: 0, exp: 'Objektif = adhedhasar bukti nyata ing lapangan.' },
      { text: 'Conto objek sing pas kanggo pengamatan teks LAO siswa SMP ing lingkungan sekitar yaiku...', opts: ['Perpustakaan sekolah, tanduran obat keluarga (TOGA), utawa ekosistem tambak', 'Kisah dongeng peri', 'Resep gawe kue', 'Layang ulem'], ans: 0, exp: 'Objek nyata alam utawa sosial sing bisa diamati langsung.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-02', subSeq: 2,
    objectives: ['Siswa saged nemtokake objek pengamatan lan ngumpulake data observasi kanthi teliti.'],
    materialTitle: 'Objek lan Pengumpulan Data Observasi',
    blocks: [
      { type: 'tip', text: 'Nalika observasi, cathet data konkret: wujud fisik, ukuran, warna, cacah/jumlah, fungsi/paedahe, lan tanggal pengamatan supaya laporanmu kuwat!' },
    ],
    activityTitle: 'Gladhen: Objek & Data Observasi',
    questions: [
      { text: 'Data asil pengamatan ing lapangan sing paling kuwat kanggo teks LAO yaiku...', opts: ['Cathetan ciri fisik, ukuran, cacah, papan, lan fungsi objek kanthi cetha', 'Mung tulisan "apik banget"', 'Crita saka kanca sing durung tau ndeleng', 'Tebakan tanpa teka ing lokasi'], ans: 0, exp: 'Data konkret lan terukur dadi pondasi laporan observasi.' },
      { text: 'Sadurunge nindakake observasi ing sawijining papan (contone kebon sekolah utawa sentra UMKM), persiapan penting yaiku...', opts: ['Nyiapake buku cathetan, dhaptar aspek sing arep diamati, lan njaluk izin pengelola', 'Langsung motret tanpa izin', 'Ora nggawa cathetan', 'Mung mlaku-mlaku wae'], ans: 0, exp: 'Pedoman pengamatan lan etika izin njamin pengamatan lancar.' },
      { text: 'Cathetan "Wit pelem ing taman sekolah dhuwure watara 5 meter, godhonge ijo rimbun, lan lagi ngembang" kalebu data...', opts: ['Fakta pengamatan langsung', 'Opini kosong', 'Iklan', 'Cangkriman'], ans: 0, exp: 'Nggambarake ciri nyata sing katon langsung.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-02', subSeq: 3,
    objectives: ['Siswa saged nganalisis 3 struktur teks LAO basa Jawa (Dhefinisi Umum, Dheskripsi Bagean, lan Dheskripsi Mupangat/Dudutan).'],
    materialTitle: 'Struktur Teks Laporan Asil Observasi',
    blocks: [
      { type: 'table', title: '3 Struktur Baku Teks LAO Basa Jawa', headers: ['Perangan', 'Isine'], rows: [
        ['1. Dhefinisi Umum (Pambuka)', 'Ngenalake pangerten umum lan klasifikasi objek ("... yaiku / punika ...")'],
        ['2. Dheskripsi Bagean (Isi)', 'Njabarake perangan-perangan, ciri, lan rincian objek'],
        ['3. Dheskripsi Mupangat / Dudutan', 'Njlentrehake guna/paedah objek lan ringkesan panutup'],
      ]},
    ],
    activityTitle: 'Gladhen: Struktur LAO',
    questions: [
      { text: '"Wit mangrove yaiku tetuwuhan pesisir sing urip ing banyu payau lan nduweni oyod napas sing kuwat." Ukara iki mapan ing perangan...', opts: ['Dhefinisi umum (pambuka)', 'Dheskripsi mupangat', 'Dudutan pungkasan', 'Irah-irahan'], ans: 0, exp: 'Ngenalake definisi lan klasifikasi umum objek nganggo tembung "yaiku".' },
      { text: 'Perangan teks LAO sing njlentrehake guna lan paedahe objek kanggo manungsa utawa lingkungan diarani...', opts: ['Dheskripsi mupangat', 'Dhefinisi umum', 'Orientasi', 'Komplikasi'], ans: 0, exp: 'Mupangat = manfaat/kegunaan.' },
      { text: 'Urutan struktur teks Laporan Asil Observasi sing trep yaiku...', opts: ['Dhefinisi umum → Dheskripsi bagean → Dheskripsi mupangat/dudutan', 'Dudutan → Dhefinisi umum', 'Alat → Bahan → Langkah', 'Prolog → Dialog → Epilog'], ans: 0, exp: 'Saka pangerten umum → rincian bagean → mupangat/simpulan.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-02', subSeq: 4,
    objectives: ['Siswa saged mbedakake ukara fakta objektif lan opini ing sajroning teks LAO basa Jawa.'],
    materialTitle: 'Fakta lan Opini ing Laporan Observasi',
    blocks: [
      { type: 'text', text: 'Ing teks LAO, kabeh katrangan utama kudu awujud FAKTA sing diamati. Hindari ukara opini subjektif kaya "menurutku tanduran iki ora keren" — gantinen nganggo data fakta ("godhonge rada alum amarga kurang banyu").' },
    ],
    activityTitle: 'Gladhen: Fakta & Opini LAO',
    questions: [
      { text: 'Ukara ing ngisor iki sing PALING COCOG mlebu ing teks Laporan Asil Observasi yaiku...', opts: ['Kolam iwak ing sekolah ukurane 3 × 2 meter lan isine ana 25 iwak nila.', 'Kolam iwak kuwi miturutku paling ayu sedonya.', 'Aku paling seneng lungguh ing pinggir kolam.', 'Kudune kolame dicat abang wae.'], ans: 0, exp: 'Nyebutake ukuran lan cacah nyata asil pengamatan.' },
      { text: 'Geneya ukara opini subjektif kudu dikurangi utawa disingkiri ing teks LAO?', opts: ['Amarga LAO mujudake laporan ilmiah sing ngutamakake kasunyatan objektif', 'Amarga ora entuk nganggo titik', 'Amarga LAO iku geguritan', 'Supaya ora ana datane'], ans: 0, exp: 'Objektivitas njaga bobot ilmiah laporan.' },
      { text: 'Tembung "yaiku, minangka, kalebu" ing teks LAO lumrahe digunakake kanggo...', opts: ['Ngawe ukara dhefinisi lan pengelompokan (klasifikasi)', 'Nyindir wong liya', 'Mrentah kanca', 'Takon jam'], ans: 0, exp: 'Nuduhake definisi lan klasifikasi ilmiah.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-02', subSeq: 5,
    objectives: ['Siswa saged nyusun lan nyajekake laporan asil observasi basa Jawa kanthi runtut lan komunikatif.'],
    materialTitle: 'Penyajian Asil Laporan Observasi',
    blocks: [
      { type: 'tip', text: 'Asil observasi bisa disajekake kanthi teks laporan rapi utawa infografis/presentasi kelompok dilengkapi foto pengamatan lan tabel data supaya kanca sakelas luwih gampang mangerteni!' },
    ],
    activityTitle: 'Gladhen: Penyajian Laporan Observasi',
    questions: [
      { text: 'Nambahake foto asli utawa tabel data ringkas nalika presentasi laporan observasi nduweni guna kanggo...', opts: ['Nguwatake bukti nyata pengamatan lan nggampangake pamireng mangerteni data', 'Ngganti kabeh isi laporan', 'Nggawe bingung kanca', 'Ngilangi judul'], ans: 0, exp: 'Visualisasi data ndadekake laporan luwih cetha lan meyakinkan.' },
      { text: 'Nalika nyajekake laporan observasi ing sangarepe guru lan kanca sakelas, basa sing becik digunakake yaiku...', opts: ['Basa Jawa baku sing runtut, santun, lan cetha pocapane', 'Basa sembrana', 'Mung maca cepet tanpa jeda', 'Nganggo ukara ora lengkap'], ans: 0, exp: 'Basa runtut lan santun nuduhake kesiapan penyaji.' },
      { text: 'Langkah pungkasan sadurunge nglumpukake teks laporan observasi menyang guru yaiku...', opts: ['Maca baleni lan mbenerake ejaan, struktur, sarta kajelasan data', 'Ngilangi perangan pambuka', 'Ngganti fakta dadi fiksi', 'Langsung nutup tanpa dipriksa'], ans: 0, exp: 'Panyuntingan njaga kwalitas tulisan.' },
    ],
  },

  // BAB 3: TEKS PITUDUH UTAWA PROSEDUR (5 sub)
  {
    topicCode: 'BJ-SMP8-03', subSeq: 1,
    objectives: ['Siswa saged mangerteni pangerten lan tujuan teks pituduh/prosedur basa Jawa.'],
    materialTitle: 'Tujuan Teks Pituduh (Prosedur)',
    blocks: [
      { type: 'text', text: 'Teks PITUDUH (prosedur) yaiku teks sing menehi tuntunan utawa langkah-langkah urut kanggo nggawe sawijining barang/panganan, nggunakake piranti, utawa nindakake kagiyatan supaya kasil kanthi bener lan aman.' },
    ],
    activityTitle: 'Gladhen: Tujuan Teks Pituduh',
    questions: [
      { text: 'Tembung basa Jawa "pituduh" ing materi teks prosedur tegese...', opts: ['Petunjuk / tuntunan langkah kerja', 'Dongeng lawas', 'Berita koran', 'Tembang sedhih'], ans: 0, exp: 'Pituduh = petunjuk/panduan.' },
      { text: 'Conto irah-irahan teks pituduh basa Jawa yaiku...', opts: ['Cara Nggawe Wedang Jahe Anget', 'Asal-Usul Kutha', 'Kucingku sing Lucu', 'Warta Lomba Pramuka'], ans: 0, exp: 'Nuntun langkah nggawe ombenan tradisional wedang jahe.' },
      { text: 'Perangan kapisan teks pituduh sing njlentrehake asil pungkasan apa sing arep digayuh diarani...', opts: ['Ancas / Tujuan', 'Panutup', 'Alat', 'Daftar pustaka'], ans: 0, exp: 'Ancas = tujuan.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-03', subSeq: 2,
    objectives: ['Siswa saged ngrinci piranti (alat) lan bahan kanthi takeran sing cetha ing teks pituduh basa Jawa.'],
    materialTitle: 'Piranti (Alat) lan Bahan Teks Pituduh',
    blocks: [
      { type: 'table', title: 'Kosakata Piranti & Bahan ing Pawon/Kriya', headers: ['Basa Jawa', 'Tegese Basa Indonesia'], rows: [
        ['Piranti / Ubarampe', 'Alat-alat / perlengkapan'],
        ['Bahan / Bakal', 'Bahan-bahan'],
        ['Gula jawa, uyah, banyu, jahe, pandhan', 'Gula merah, garam, air, jahe, pandan'],
        ['Panci, wajan, sendhok, peso, telenan', 'Panci, wajan, sendok, pisau, talenan'],
      ]},
    ],
    activityTitle: 'Gladhen: Piranti & Bahan',
    questions: [
      { text: 'Ing teks pituduh basa Jawa, tembung "piranti" tegese padha karo...', opts: ['Alat-alat sing digunakake', 'Bahan panganan', 'Langkah pungkasan', 'Judul'], ans: 0, exp: 'Piranti = alat.' },
      { text: 'Geneya ing teks pituduh nggawe panganan utawa ombenan kudu nyantumake takeran cetha (contone 500 ml banyu, 2 sendhok gula)?', opts: ['Supaya asile pas, enak, lan ora gagal nalika dipraktikake', 'Supaya angel ditiru', 'Kanggo nambah halaman wae', 'Ora ana gunane'], ans: 0, exp: 'Takeran akurat njamin keberhasilan resep.' },
      { text: 'Tembung "uyah" lan "banyu" ing daftar bahan masakan basa Jawa tegese...', opts: ['Garam dan air', 'Gula dan minyak', 'Tepung dan santan', 'Cabai dan bawang'], ans: 0, exp: 'Uyah = garam; banyu = air.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-03', subSeq: 3,
    objectives: ['Siswa saged nyusun urutan langkah kerja kanthi runtut nggunakake tembung panggandheng urutan (kapisan, sabanjure, sawise iku, pungkasan).'],
    materialTitle: 'Urutan Langkah Teks Pituduh',
    blocks: [
      { type: 'formula', name: 'Tembung Panggandheng Urutan Basa Jawa', expression: 'Sepisan / Kapisan → Kapindho / Sabanjure → Sawise iku → Pungkasane', note: 'Urutan langkah ora kena diwolak-walik yen mengaruhi asil (contone: aja nggoreng dhisik sadurunge kompor diuripake!).' },
    ],
    activityTitle: 'Gladhen: Urutan Langkah',
    questions: [
      { text: 'Urutan langkah nggawe wedang jahe sing BENER: (1) Saring banyu jahe menyang gelas banjur sajikake anget, (2) Kumbah resik jahe banjur geprek, (3) Godhog banyu bareng jahe lan gula jawa nganti umob.', opts: ['2 – 3 – 1', '1 – 2 – 3', '3 – 2 – 1', '2 – 1 – 3'], ans: 0, exp: 'Kumbah & geprek (2) → godhog nganti umob (3) → saring & sajikake (1).' },
      { text: 'Tembung "sabanjure" lan "sawise iku" ing teks pituduh nduweni fungsi kanggo...', opts: ['Nggandhengake urutan tahapan langkah kanthi runtut', 'Nuduhake pertentangan', 'Nggawe pitakon', 'Nutup crita'], ans: 0, exp: 'Konjungsi temporal njaga kronologi langkah.' },
      { text: 'Tembung "umob" ing pituduh masak banyu tegese...', opts: ['Mendidih', 'Beku', 'Asat/kering', 'Adhem'], ans: 0, exp: 'Umob = mendidih.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-03', subSeq: 4,
    objectives: ['Siswa saged nggunakake tembung kriya tanduk/pakon (kata kerja perintah, ater-ater lan panambang -a, -en, -na) ing teks pituduh.'],
    materialTitle: 'Tembung Kriya Pakon (Kata Kerja Perintah)',
    blocks: [
      { type: 'table', title: 'Conto Tembung Pakon (Imperatif) Basa Jawa', headers: ['Tembung Lingga', 'Tembung Pakon', 'Tegese'], rows: [
        ['kumbah', 'kumbaha / kumbahna / kumbahen', 'cucilah'],
        ['iris', 'irisen', 'irislah'],
        ['udheg', 'udhegen', 'aduklah'],
        ['lebokake', 'lebokna', 'masukkanlah'],
        ['pateni', 'patenana', 'matikanlah'],
      ]},
    ],
    activityTitle: 'Gladhen: Kata Kerja Perintah',
    questions: [
      { text: '"___ banyu resik ing panci nganti umob!" Tembung pakon sing trep yaiku...', opts: ['Godhogen (rebuslah)', 'Turuwa', 'Lungguh', 'Mlayu'], ans: 0, exp: 'Godhog + -en = godhogen (rebuslah).' },
      { text: 'Tembung "udhegen alon-alon nganti rata" ing pituduh nggawe adonan tegese...', opts: ['Aduklah pelan-pelan hingga merata', 'Gorenglah sampai kering', 'Buanglah ke tempat sampah', 'Diamkan semalaman'], ans: 0, exp: 'Udheg = aduk; udhegen = aduklah.' },
      { text: 'Ukara "Aja nyekel panci panas tanpa cempal!" ing teks pituduh kalebu ukara...', opts: ['Pepeling / larangan keselamatan', 'Ukara pitakon', 'Pujian', 'Judul'], ans: 0, exp: '"Aja..." = jangan (peringatan keamanan kerja).' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-03', subSeq: 5,
    objectives: ['Siswa saged ngevaluasi lan ndandani kajelasan instruksi teks pituduh supaya gampang dipraktikake.'],
    materialTitle: 'Kajelasan Instruksi Teks Pituduh',
    blocks: [
      { type: 'tip', text: 'Instruksi sing cetha kudu: (1) ukara cekak ora mbulet, (2) cetha ukuran lan wektune ("godhogen 10 menit nganggo geni cilik"), lan (3) aman dipraktikake dening pamaca!' },
    ],
    activityTitle: 'Gladhen: Kajelasan Instruksi',
    questions: [
      { text: 'Bandingake rong instruksi: (A) "Masaken nganti mateng." vs (B) "Kukusen adonan watara 20 menit nganggo geni sedheng nganti empuk." Instruksi sing luwih cetha lan gampang ditiru yaiku...', opts: ['Instruksi (B) amarga nyebutake cara (kukus), wektu (20 menit), geni, lan tandha mateng', 'Instruksi (A) amarga ora jelas wektune', 'Loro-lorone ora cetha', 'Ora perlu instruksi'], ans: 0, exp: 'Katrangan cara, wektu, lan indikator hasil njamin akurasi.' },
      { text: 'Menawa ana siji langkah wigati sing kelewatan ing teks pituduh (contone lali nyebutake nyopot bungkus plastik), akibate yaiku...', opts: ['Pamaca bisa kebingungan utawa gagal nalika nindakake pituduh kasebut', 'Asile malah luwih cepet dadi', 'Ora ana pengaruhe', 'Teks dadi luwih apik'], ans: 0, exp: 'Kelengkapan langkah dadi syarat utama prosedur.' },
      { text: 'Cara paling gampang nguji teks pituduh buatanmu wis cetha utawa durung yaiku...', opts: ['Njaluk kanca maca lan nyoba ngetutake langkah-langkahe langsung', 'Disimpen ing tas wae', 'Dibusek bagean bahane', 'Diganti dadi geguritan'], ans: 0, exp: 'Uji keterbacaan nemokake bagean sing isih kurang jelas.' },
    ],
  },

  // BAB 4: AKSARA JAWA: SANDHANGAN LAN AKSARA SWARA (4 sub)
  {
    topicCode: 'BJ-SMP8-04', subSeq: 1,
    objectives: ['Siswa saged nguwatake panganggone 3 klompok sandhangan Aksara Jawa (sandhangan swara, panyigeg wanda, lan wyanjana).'],
    materialTitle: 'Penguatan Sandhangan Aksara Jawa',
    blocks: [
      { type: 'table', title: 'Ringkasan 3 Klompok Sandhangan Aksara Jawa', headers: ['Klompok', 'Jeneng & Wujud', 'Fungsi / Swara'], rows: [
        ['Sandhangan Swara', 'wulu (ꦶ = i), suku (ꦸ = u), pepet (ꦼ = ê), taling (ꦺ = é/è), taling-tarung (ꦺꦴ = o)', 'Ngowahi swara vokal dhasar "a"'],
        ['Panyigeg Wanda', 'wignyan (ꦃ = -h), layar (ꦂ = -r), cecak (ꦁ = -ng), pangkon (꧀)', 'Nutup wanda nganggo konsonan mati'],
        ['Wyanjana', 'cakra (ꦿ = -ra-), cakra keret (ꦽ = -rê-), pengkal (ꦾ = -ya-)', 'Nulis gugus konsonan (kr, pr, ky, lsp.)'],
      ]},
    ],
    activityTitle: 'Gladhen: Penguatan Sandhangan',
    questions: [
      { text: 'Kanggo nulis swara "-r" mati ing mburi wanda (contone ing tembung "pasar" utawa "sabar"), sandhangan panyigeg wanda sing digunakake yaiku...', opts: ['Layar (ꦂ)', 'Cecak (ꦁ)', 'Wignyan (ꦃ)', 'Wulu (ꦶ)'], ans: 0, exp: 'Layar = -r, cecak = -ng, wignyan = -h.' },
      { text: 'Sandhangan wyanjana kanggo nulis gugus konsonan "-r-" kaya ing tembung "krama" utawa "prabu" yaiku...', opts: ['Cakra (ꦿ)', 'Pengkal (ꦾ)', 'Suku (ꦸ)', 'Taling (ꦺ)'], ans: 0, exp: 'Cakra nyisipake swara "r" (ka + cakra = kra).' },
      { text: 'Beda swara antarane pepet (ꦼ) lan taling (ꦺ) yaiku...', opts: ['Pepet kanggo swara "ê" (kaya ing "sega"), dene taling kanggo "é/è" (kaya ing "sate" utawa "lele")', 'Loro-lorone padha persis', 'Pepet kanggo swara "u"', 'Taling kanggo swara "i"'], ans: 0, exp: 'Pepet = ê (sega, tela); Taling = é/è (sate, lele).' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-04', subSeq: 2,
    objectives: ['Siswa saged ngenali 5 Aksara Swara ing Aksara Jawa (ꦄ A, ꦆ I, ꦈ U, ꦌ E, ꦎ O).'],
    materialTitle: 'Pengenalan 5 Aksara Swara (A, I, U, E, O)',
    blocks: [
      { type: 'table', title: '5 Aksara Swara ing Aksara Jawa', headers: ['Aksara Swara', 'Wacan', 'Conto Panganggone'], rows: [
        ['ꦄ', 'A', 'Agustus, Amerika, Arab, Ahmad'],
        ['ꦆ', 'I', 'Indonesia, Ibrahim, Islam, Inggris'],
        ['ꦈ', 'U', 'Umar, Usman, Ukraina'],
        ['ꦌ', 'E', 'Eropa, Eko (jeneng manca/khusus)'],
        ['ꦎ', 'O', 'Oktober, Olimpiade, Oman'],
      ]},
    ],
    activityTitle: 'Gladhen: Pengenalan Aksara Swara',
    questions: [
      { text: 'Cacahe Aksara Swara baku ing Aksara Jawa ana...', opts: ['5 (ꦄ A, ꦆ I, ꦈ U, ꦌ E, ꦎ O)', '20', '10', '3'], ans: 0, exp: 'Lima aksara swara ngewakili limang vokal utama: A, I, U, E, O.' },
      { text: 'Aksara Swara ꦄ lan ꦆ diwaca...', opts: ['A lan I', 'U lan O', 'E lan A', 'I lan U'], ans: 0, exp: 'ꦄ = A, ꦆ = I.' },
      { text: 'Aksara Swara ꦈ, ꦌ, lan ꦎ kanthi urut diwaca...', opts: ['U, E, lan O', 'A, I, lan U', 'O, E, lan U', 'I, O, lan A'], ans: 0, exp: 'ꦈ = U, ꦌ = E, ꦎ = O.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-04', subSeq: 3,
    objectives: ['Siswa saged mangerteni fungsi lan paugeran (aturan) panganggone Aksara Swara.'],
    materialTitle: 'Fungsi lan Paugeran Aksara Swara',
    blocks: [
      { type: 'list', title: '3 Paugeran Wajib Aksara Swara', items: ['1. Fungsi: kanggo nulis tembung manca (serapan asing), jeneng wong, jeneng negara/kutha, utawa sasi sing diwiwiti vokal supaya cetha (contone: Indonesia, Agustus, Oktober, Eropa).', '2. Aksara Swara ORA BISA dadi pasangan! Yen ana sigeg ing ngarepe, sigeg mau kudu dipangku dhisik!', '3. Aksara Swara ora kena diwenehi sandhangan swara (amarga wis duwe swara dhewe), nanging kena diwenehi panyigeg wanda (cecak, layar, wignyan)!'] },
    ],
    activityTitle: 'Gladhen: Fungsi Aksara Swara',
    questions: [
      { text: 'Fungsi utama Aksara Swara ing tata tulis Aksara Jawa yaiku...', opts: ['Nulis tembung manca/serapan, jeneng negara, sasi, utawa wong kang diwiwiti vokal supaya cetha swarane', 'Ngganti kabeh aksara carakan ha-na-ca-ra-ka', 'Dadi pasangan ing ngisor aksara', 'Kanggo tandha koma'], ans: 0, exp: 'Aksara Swara negesake wacan vokal ing tembung manca utawa jeneng khusus.' },
      { text: 'Manut paugeran Aksara Jawa, apa Aksara Swara bisa didadekake PASANGAN?', opts: ['Ora bisa — aksara sigeg ing ngarepe kudu dipangku', 'Bisa kabeh', 'Mung A wae sing bisa', 'Kudu diwenehi wulu'], ans: 0, exp: 'Aksara Swara ora nduweni wujud pasangan.' },
      { text: 'Apa Aksara Swara kena diwenehi sandhangan panyigeg wanda kaya layar (ꦂ), cecak (ꦁ), utawa wignyan (ꦃ)?', opts: ['Kena (contone: ꦄꦂ = Ar, ꦆꦁ = Ing, ꦄꦃ = Ah)', 'Ora kena babar pisan', 'Kena wulu lan suku wae', 'Kudu nganggo cakra'], ans: 0, exp: 'Aksara Swara ora kena sandhangan swara, nanging kena panyigeg wanda.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-04', subSeq: 4,
    objectives: ['Siswa saged maca lan nulis conto tembung sederhana nganggo Aksara Swara lan sandhangan kanthi trep.'],
    materialTitle: 'Maca lan Nulis Conto Aksara Swara',
    blocks: [
      { type: 'worked_example', level: 'Latihan Transliterasi Aksara Swara', question: 'Kepriye wacane ꦄꦒꦸꦱ꧀ꦠꦸꦱ꧀ lan ꦌꦫꦺꦴꦥ?', steps: ['ꦄ (A) + ꦒꦸ (gu) + ꦱ꧀ꦠꦸ (stu) + ꦱ꧀ (s) = "Agustus"!', 'ꦌ (E) + ꦫꦺꦴ (ro) + ꦥ (pa) = "Eropa"!'], answer: 'Agustus lan Eropa' },
    ],
    activityTitle: 'Gladhen: Maca & Nulis Aksara Swara',
    questions: [
      { text: 'Tembung "ꦎꦏ꧀ꦠꦺꦴꦧꦼꦂ" yen ditulis nganggo aksara Latin diwaca...', opts: ['Oktober', 'Agustus', 'April', 'Eropa'], ans: 0, exp: 'ꦎ (O) + ꦏ꧀ꦠꦺꦴ (kto) + ꦧꦼꦂ (ber) = Oktober.' },
      { text: 'Tembung "ꦄꦩꦺꦫꦶꦏ" diwaca...', opts: ['Amerika', 'Afrika', 'Asia', 'Arab'], ans: 0, exp: 'ꦄ (A) + ꦩꦺ (me) + ꦫꦶ (ri) + ꦏ (ka) = Amerika.' },
      { text: 'Manawa nulis jeneng sasi "Agustus" nganggo Aksara Jawa, aksara kapisan sing trep digunakake yaiku...', opts: ['ꦄ (Aksara Swara A)', 'ꦆ (I)', 'ꦈ (U)', 'ꦎ (O)'], ans: 0, exp: 'Agustus diwiwiti vokal A → nganggo Aksara Swara ꦄ.' },
    ],
  },

  // BAB 5: TEMBANG MACAPAT: PAUGERAN LAN MAKNA (5 sub)
  {
    topicCode: 'BJ-SMP8-05', subSeq: 1,
    objectives: ['Siswa saged nganalisis paugeran (guru gatra, guru wilangan, guru lagu) sawetara tembang Macapat (Pocung, Gambuh, Pangkur, Kinanthi).'],
    materialTitle: 'Paugeran Tembang Macapat',
    blocks: [
      { type: 'table', title: 'Paugeran 4 Tembang Macapat Utama SMP', headers: ['Tembang', 'Guru Gatra', 'Guru Wilangan lan Guru Lagu'], rows: [
        ['Pocung', '4 gatra', '12u, 6a, 8i, 12a'],
        ['Gambuh', '5 gatra', '7u, 10u, 12i, 8u, 8o'],
        ['Kinanthi', '6 gatra', '8u, 8i, 8a, 8i, 8a, 8i'],
        ['Pangkur', '7 gatra', '8a, 11i, 8u, 7a, 12u, 8a, 8i'],
      ]},
    ],
    activityTitle: 'Gladhen: Paugeran Macapat',
    questions: [
      { text: 'Cacahe larik (baris) ing saben sak pada (bait) tembang Macapat diarani...', opts: ['Guru gatra', 'Guru wilangan', 'Guru lagu', 'Pupuh'], ans: 0, exp: 'Guru gatra = cacahing gatra/larik; guru wilangan = cacahing wanda/suku kata; guru lagu = tibaning swara vokal pungkasan.' },
      { text: 'Tembang Macapat sing nduweni paugeran 5 gatra: 7u, 10u, 12i, 8u, 8o yaiku tembang...', opts: ['Gambuh', 'Pocung', 'Pangkur', 'Kinanthi'], ans: 0, exp: 'Gambuh duwe 5 gatra: 7u, 10u, 12i, 8u, 8o.' },
      { text: 'Gatekna gatra kapisan tembang Pangkur (Serat Wedhatama): "Ming-kar ming-kur ing ang-ka-ra". Cacahe guru wilangan lan guru lagune yaiku...', opts: ['8a', '11i', '12u', '7a'], ans: 0, exp: 'Ming(1)-kar(2)-ming(3)-kur(4)-ing(5)-ang(6)-ka(7)-ra(8), swara pungkasan "a" → 8a!' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-05', subSeq: 2,
    objectives: ['Siswa saged negesi tembung-tembung angel (kawi/sastra) ing sajroning tembang Macapat.'],
    materialTitle: 'Kosakata Sastra ing Tembang Macapat',
    blocks: [
      { type: 'table', title: 'Kosakata Langganan Tembang Macapat', headers: ['Tembung ing Tembang', 'Tegese (Basa Padinan / Indonesia)'], rows: [
        ['ngilmu / ngelmu', 'ilmu pengetahuan'],
        ['kalakon / kalakone', 'terwujud / terlaksana'],
        ['laku', 'tindakan / usaha nyata'],
        ['angkara / murka', 'hawa nafsu jahat / serakah'],
        ['tutur / pitutur', 'nasihat / ajaran baik'],
        ['budi', 'watak / akhlak / pekerti'],
      ]},
    ],
    activityTitle: 'Gladhen: Kosakata Macapat',
    questions: [
      { text: 'Ing tembang Pocung "Ngelmu iku kalakone kanthi laku", tegese tembung "kalakone" lan "laku" yaiku...', opts: ['Terwujud/tercapainya dan usaha/tindakan nyata', 'Hilang dan tidur', 'Mahal dan membeli', 'Cepat dan berlari'], ans: 0, exp: 'Ilmu iku mung bisa kagayuh kanthi tumindak/usaha nyata.' },
      { text: 'Ing tembang Gambuh "Sekar gambuh ping catur, kang cinatur polah kang kalantur", tembung "catur" tegese...', opts: ['Papat (4) / uga bisa ateges omongan ing "cinatur"', 'Siji', 'Sepuluh', 'Batu'], ans: 0, exp: 'Ping catur = kaping papat; cinatur = dirembug/diomongake.' },
      { text: 'Tembung "pitutur" ing tembang Macapat nduweni teges...', opts: ['Nasihat / wejangan becik', 'Lagu cepet', 'Hukuman', 'Kesenian'], ans: 0, exp: 'Pitutur luhur = nasihat kebaikan.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-05', subSeq: 3,
    objectives: ['Siswa saged nemokake isi pokok lan pitutur luhur ing pada tembang Macapat (Pocung, Gambuh, Pangkur).'],
    materialTitle: 'Nganalisis Isi Tembang Macapat',
    blocks: [
      { type: 'text', text: 'Tembang Macapat ngemu filsafat lan piwulang urip: POCUNG asring isi pitutur entheng utawa cangkriman (watake kendho/sembrana); GAMBUH isi pitutur akrab marang generasi muda babagan tata krama lan aja kebacut tumindak ala; PANGKUR isi tekad ngedohi hawa nafsu angkara lan ngudi budi luhur.' },
    ],
    activityTitle: 'Gladhen: Isi Tembang Macapat',
    questions: [
      { text: 'Wacanen pada Pocung (Wedhatama): "Ngelmu iku kalakone kanthi laku / lekase lawan kas / tegese kas nyantosani / setya budya pangekese dur angkara." Isi pokok pada iki yaiku...', opts: ['Nggolek ilmu kudu dibarengi usaha nyata, niat kuwat, lan budi luhur kanggo ngalahake sifat ala', 'Ilmu bisa teka dhewe tanpa sinau', 'Aja gelem sinau', 'Ngelmu mung kanggo wong tuwa'], ans: 0, exp: 'Ilmu sejati digayuh lewat usaha tenanan lan ngendhaleni angkara.' },
      { text: 'Watake tembang GAMBUH sing asring digunakake menehi pitutur marang anak utawa murid yaiku...', opts: ['Sumanak, rumaket (akrab), lan pantes kanggo pitutur', 'Sedhih banget', 'Perang gagah', 'Nglucu wae'], ans: 0, exp: 'Gambuh nduweni watak sumanak/akrab cocok kanggo pitutur.' },
      { text: 'Isi utama larik Gambuh "Tanpa tutur katula-tula katali, kadaluwarsa kapatuh, kapatuh pan dadi awon" yaiku ngelingake supaya...', opts: ['Aja nganti tumindak ala dibiasakake terus-terusan tanpa gelem ngrungokake pitutur amarga yen wis dadi pakulinan bakal angel didandani', 'Kudu sering nggawe salah', 'Ora perlu ngrungokake guru', 'Kabiasaan ala ora masalah'], ans: 0, exp: 'Kebiasaan buruk yang dibiarkan berlarut akan mengakar dan merugikan diri.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-05', subSeq: 4,
    objectives: ['Siswa saged nggawe parafrasa (ngowahi tembang dadi gancaran/prosa) supaya maknane luwih gampang dipahami.'],
    materialTitle: 'Parafrasa (Gancaran) Tembang Macapat',
    blocks: [
      { type: 'worked_example', level: 'Cara Nggawe Gancaran (Parafrasa)', question: 'Gancarake: "Aja nganti kabanjur / barang polah ingkang nora jujur" (Gambuh)', steps: ['1. Tegesi tembung angel: kabanjur = kebacut/keterlanjuran, polah = tingkah laku, nora = ora.', '2. Rakit dadi ukara padinan runtut: "Aja nganti kebacut nindakake tingkah laku sing ora jujur."'], answer: 'Aja nganti kebacut nindakake tingkah laku sing ora jujur!' },
    ],
    activityTitle: 'Gladhen: Parafrasa Macapat',
    questions: [
      { text: 'Ngowahi wujud tembang (puisi tembang) dadi wujud cerita biasa (prosa) kanthi ora ngowahi isi asline diarani...', opts: ['Parafrasa / nggancarake', 'Nembang', 'Nyurat aksara', 'Deklamasi'], ans: 0, exp: 'Gancaran = prosa.' },
      { text: 'Langkah kapisan sing paling penting sadurunge nggawe parafrasa (gancaran) tembang Macapat yaiku...', opts: ['Nggoleki tegese tembung-tembung angel (kawi/sastra) ing saben gatra', 'Ngganti guru lagune', 'Ngilangi separo larik', 'Nambah tokoh anyar'], ans: 0, exp: 'Mangerteni kosakata dadi kunci supaya parafrasa ora melenceng.' },
      { text: 'Gancaran sing paling trep kanggo larik "Yen kebanjur sayekti kojur tan becik" (kebanjur=kebacut, sayekti=satemene, kojur=cilaka, tan=ora) yaiku...', opts: ['Yen wis kebacut, satemene bakal cilaka lan ora becik', 'Yen cepet teka bakal menang', 'Yen sregep bakal sugih', 'Ora ana artine'], ans: 0, exp: 'Cocog karo tegese saben tembung kanthi runtut.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-05', subSeq: 5,
    objectives: ['Siswa saged nindakake interpretasi relevansi pitutur tembang Macapat ing uripe pelajar jaman saiki.'],
    materialTitle: 'Interpretasi Relevansi Pitutur Macapat',
    blocks: [
      { type: 'tip', text: 'Piwulang Macapat tetep urip ing era digital! Contone: piwulang "ngelmu kalakone kanthi laku" cocog kanggo pelajar saiki — duwe internet lan aplikasi belajar wae ora cukup tanpa disiplin sinau lan latihan nyata!' },
    ],
    activityTitle: 'Gladhen: Interpretasi Macapat',
    questions: [
      { text: 'Penerapan nyata pitutur "ngelmu iku kalakone kanthi laku" tumrap siswa SMP jaman saiki yaiku...', opts: ['Ora mung maca teori utawa nonton video, nanging tenanan latihan soal, disiplin sinau, lan ngamalake ilmu', 'Mung nyimpen buku ing lemari', 'Ngenteni pinter dhewe', 'Nyontek nalika ulangan'], ans: 0, exp: 'Ilmu kudu diwujudake kanthi usaha lan tumindak nyata.' },
      { text: 'Piwulang Gambuh supaya aja mblenjani tata krama lan aja nggedhekake tumindak ala yen diterapake ing media sosial tegese...', opts: ['Ngati-ati nalika komentar, ora nyebar hoaks, lan njaga unggah-ungguh digital', 'Bebas ngece wong liya', 'Ora perlu etika online', 'Niru kabeh tren ala'], ans: 0, exp: 'Tata krama Jawa uga relevan banget kanggo etika digital.' },
      { text: 'Geneya generasi muda Jawa Timur kalebu siswa Gresik tetep perlu sinau tembang Macapat?', opts: ['Amarga ngemu nilai budi pekerti luhur lan minangka warisan budaya bangsa sing adiluhung', 'Amarga ora ana lagu liya', 'Mung kanggo wong sepuh wae', 'Supaya lali basa Indonesia'], ans: 0, exp: 'Macapat nguwatake karakter lan jati diri budaya.' },
    ],
  },

  // BAB 6: GEGURITAN: ANALISIS LAN PENCIPTAAN (7 sub)
  {
    topicCode: 'BJ-SMP8-06', subSeq: 1,
    objectives: ['Siswa saged mangerteni geguritan (puisi Jawa modern) lan nemtokake tema pokok geguritan.'],
    materialTitle: 'Pengertian lan Tema Geguritan',
    blocks: [
      { type: 'text', text: 'GEGURITAN yaiku puisi Jawa gagrag anyar (modern) sing ora kaiket guru gatra, guru wilangan, lan guru lagu kaya Macapat, nanging tetep ngutamakake kaendahan diksi, purwakanthi (rima), citraan, lan jero maknane. TEMA yaiku gagasan pokok sing dadi landhesan geguritan (alam, ibu, guru, gotong royong, ketuhanan).' },
    ],
    activityTitle: 'Gladhen: Tema Geguritan',
    questions: [
      { text: 'Beda pokok antarane GEGURITAN lan tembang MACAPAT yaiku...', opts: ['Geguritan ora kaiket paugeran guru gatra, guru wilangan, lan guru lagu; dene Macapat kaiket ketat', 'Geguritan wajib 4 gatra', 'Macapat ora duwe paugeran', 'Loro-lorone padha persis'], ans: 0, exp: 'Geguritan = puisi Jawa bebas modern.' },
      { text: 'Geguritan kanthi irah-irahan "Kringete Bapak ing Tambak" sing nyritakake perjuangan bapa golek rejeki esuk nganti sore nduweni tema...', opts: ['Perjuangan lan katresnan wong tuwa marang kulawarga', 'Olahraga bal-balan', 'Lomba nggambar', 'Plesiran'], ans: 0, exp: 'Tema merangkum inti gagasan sakabehing geguritan.' },
      { text: 'Sing diarani TEMA ing sajroning geguritan yaiku...', opts: ['Gagasan pokok utawa dhasar crita sing dirembug penggurit', 'Cacahing tembung', 'Jeneng pengarang', 'Swara banter'], ans: 0, exp: 'Tema dadi ruh pokok karya sastra.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-06', subSeq: 2,
    objectives: ['Siswa saged nganalisis pilihan tembung (diksi) lan purwakanthi (rima/bunyi) sing nggawe geguritan endah.'],
    materialTitle: 'Diksi lan Purwakanthi ing Geguritan',
    blocks: [
      { type: 'table', title: '3 Jenis Purwakanthi ing Sastra Jawa', headers: ['Jenis Purwakanthi', 'Tegese', 'Conto'], rows: [
        ['Purwakanthi Guru Swara', 'Runtut swara VOKAL-e', 'Sapa jujur bakal luhur (u–u)'],
        ['Purwakanthi Guru Sastra', 'Runtut KONSONAN-e', 'Sluman slumun slamet (s-l-m)'],
        ['Purwakanthi Lumaksita (Basa)', 'Tembung pungkasan larik dibaleni ing wiwitan larik candhake', 'Raja putra, putra dalem...'],
      ]},
    ],
    activityTitle: 'Gladhen: Diksi & Purwakanthi',
    questions: [
      { text: 'Larik "Tata titi tentrem tumata" ngemot kaendahan bunyi konsonan "t" sing dibaleni, diarani...', opts: ['Purwakanthi guru sastra', 'Purwakanthi guru swara', 'Guru gatra', 'Kramagung'], ans: 0, exp: 'Runtut konsonan = guru sastra; runtut vokal = guru swara.' },
      { text: 'Ukara "Becik ketitik ala ketara" lan "Sapa salah seleh" nuduhake kaendahan...', opts: ['Purwakanthi (persamaan bunyi/rima basa Jawa)', 'Aksara swara', 'Prosedur', 'Laporan observasi'], ans: 0, exp: 'Purwakanthi nggawe larik geguritan kepenak dirungokake.' },
      { text: 'Pemilihan tembung "surya" (gantine srengenge) utawa "bantala" (bumi) ing geguritan nuduhake panggunaan...', opts: ['Diksi puitis / tembung rinengga', 'Basa kasar', 'Angka statistik', 'Tembung pakon'], ans: 0, exp: 'Tembung rinengga nambah bobot kaendahan geguritan.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-06', subSeq: 3,
    objectives: ['Siswa saged nemokake citraan (pandeleng, pangrungu, pangrasa/panggrayang, pangganda) ing larik geguritan.'],
    materialTitle: 'Citraan ing Geguritan',
    blocks: [
      { type: 'text', text: 'Citraan nggugah pancaindra pamaca: pandeleng (penglihatan: "langit abang wayah surup"), pangrungu (pendengaran: "swara ombak gemuruh"), panggrayang (perabaan: "angin esuk nggremet adhem"), lan pangganda (penciuman: "ganda arum kembang melathi").' },
    ],
    activityTitle: 'Gladhen: Citraan Geguritan',
    questions: [
      { text: 'Larik geguritan "Swara manuk ngoceh ing pang wit mangga wayah esuk" ngemot citraan...', opts: ['Pangrungu (pendengaran)', 'Pangganda', 'Pangecap', 'Panggrayang'], ans: 0, exp: '"Swara manuk ngoceh" ditangkep indra pangrungu.' },
      { text: 'Larik "Langit sore sumunar kuning emas ing sadhuwure segara" ngemot citraan...', opts: ['Pandeleng (penglihatan)', 'Pangrungu', 'Pangganda', 'Pangecap'], ans: 0, exp: 'Warna kuning emas lan sesawangan segara ditangkep mripat.' },
      { text: 'Guna utama citraan ing sajroning geguritan yaiku...', opts: ['Nggawe pamaca kaya-kaya melu ndeleng, krungu, lan ngrasakake langsung kahanan ing geguritan', 'Ngilangi tema', 'Nambah dawa tanpa isi', 'Ngganti irah-irahan'], ans: 0, exp: 'Citraan nguripake imajinasi pamaca.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-06', subSeq: 4,
    objectives: ['Siswa saged mangerteni susunan larik (gatra), pada (bait), lan tipografi geguritan.'],
    materialTitle: 'Larik, Pada, lan Tipografi Geguritan',
    blocks: [
      { type: 'tip', text: 'Ing geguritan, siji baris diarani LARIK/GATRA, lan sak klompok larik diarani PADA/BAIT. Penggurit bebas nata dawa-cendhake larik (tipografi) kanggo negesake rasa — larik cekak mung 1–2 tembung kerep dadi penekanan emosi sing kuwat!' },
    ],
    activityTitle: 'Gladhen: Larik & Pada Geguritan',
    questions: [
      { text: 'Sak klompok larik ing geguritan sing kapisah dening spasi kosong diarani...', opts: ['Pada (bait)', 'Judul', 'Paragraf berita', 'Tembung'], ans: 0, exp: 'Larik/gatra = baris; Pada = bait.' },
      { text: 'Tata wujud susunan larik lan bait ing kaca (contone rata kiwa, tengah, utawa ana larik cekak khusus) diarani...', opts: ['Tipografi', 'Aliterasi', 'Sinopsis', 'Kramagung'], ans: 0, exp: 'Tipografi mujudake wujud visual puisi/geguritan.' },
      { text: 'Pamedhotan larik (enjambemen) ing geguritan modern nduweni fungsi kanggo...', opts: ['Ngrengga irama wacan lan negesake tembung-tembung wigati', 'Ngrusak makna', 'Mbuwang tanda baca', 'Nggawe kaya tabel'], ans: 0, exp: 'Pamedhotan larik ngatur ritme lan penekanan makna.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-06', subSeq: 5,
    objectives: ['Siswa saged nganalisis swasana (sedhih, trenyuh, gumregah/semangat, tentrem) ing sajroning geguritan.'],
    materialTitle: 'Swasana ing Geguritan',
    blocks: [
      { type: 'text', text: 'SWASANA yaiku rasa batin sing thukul ing atine pamaca sawise maca utawa ngrungokake geguritan (contone: trenyuh/haru, gumregah/semangat, tentrem/ayem, utawa getun/sedhih). Swasana kasebut dibangun saka diksi lan citraan sing dipilih penggurit!' },
    ],
    activityTitle: 'Gladhen: Swasana Geguritan',
    questions: [
      { text: 'Geguritan kanthi larik "Ayo mudha-mudhi tangi! / Genggem tekadmu, madhep mantep mbangun negri!" nuwuhake swasana...', opts: ['Gumregah / semangat juang', 'Sedhih lan putus asa', 'Lucu banget', 'Wedi'], ans: 0, exp: 'Diksi "tangi", "genggem tekad", "madhep mantep" mbangun swasana semangat.' },
      { text: 'Swasana "trenyuh lan kebak rasa syukur" lumrahe katon ing geguritan sing ngrembug babagan...', opts: ['Pengorbanan ibu utawa jasa guru tanpa pamrih', 'Iklan sepatu', 'Jadwal sepur', 'Cara masak'], ans: 0, exp: 'Topik pengorbanan lan kasih sayang nuwuhake rasa haru/trenyuh.' },
      { text: 'Unsur geguritan sing paling gedhe pengaruhe mbangun swasana batin pamaca yaiku...', opts: ['Pilihan tembung (diksi), citraan, lan irama', 'Werna kertas', 'Nomor halaman', 'Jeneng sekolah'], ans: 0, exp: 'Diksi lan imaji langsung nyentuh emosi pamaca.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-06', subSeq: 6,
    objectives: ['Siswa saged nyimpulake amanat (piwulang/pesan moral) sing tersurat lan tersirat ing geguritan.'],
    materialTitle: 'Amanat ing Geguritan',
    blocks: [
      { type: 'text', text: 'AMANAT yaiku pesen kabecikan sing arep diwenehake penggurit marang pamaca. Kanggo nemokake amanat geguritan, wacanen kabeh bait kanthi teliti, tegesi tembung kiasane, banjur goleka piwulang apa sing bisa ditindakake ing urip saben dina!' },
    ],
    activityTitle: 'Gladhen: Amanat Geguritan',
    questions: [
      { text: 'Geguritan sing nggambarake kali sing biyen bening saiki kebak sampah plastik banjur diakhiri pitakon "Apa tega ninggalake warisan rusak kanggo anak putu?" nduweni amanat...', opts: ['Ayo padha njaga karesikan kali lan lingkungan kanggo masa depan generasi penerus', 'Ayo mbuwang sampah ing kali', 'Kali ora perlu dijaga', 'Plastik iku becik kanggo iwak'], ans: 0, exp: 'Larik panutup nggugah tanggung jawab njaga kelestarian alam.' },
      { text: 'Amanat geguritan sing ora ditulis terang-terangan nanging kudu disimpulake dhewe dening pamaca diarani amanat...', opts: ['Tersirat (implisit)', 'Tersurat', 'Fiktif', 'Kasar'], ans: 0, exp: 'Akeh geguritan nyimpen amanat kanthi alus (tersirat).' },
      { text: 'Supaya ora kliru nyimpulake amanat geguritan, pamaca kudu...', opts: ['Maca wutuh saka bait pisanan nganti pungkasan lan mangerteni makna konotatife', 'Mung maca judul wae', 'Mung maca tembung pungkasan', 'Ngarang dhewe tanpa maca'], ans: 0, exp: 'Pemahaman utuh kabeh bait njamin interpretasi amanat akurat.' },
    ],
  },
  {
    topicCode: 'BJ-SMP8-06', subSeq: 7,
    objectives: ['Siswa saged maca geguritan kanthi teknik 4W (Wicara, Wirama, Wirasa, Wiraga) lan nyipta geguritan asli basa Jawa.'],
    materialTitle: 'Maca lan Nyipta Geguritan (Teknik 4W)',
    blocks: [
      { type: 'visual_cards', title: '4W Kunci Maca Geguritan sing Apik!', cards: [
        { emoji: '🗣️', label: '1. Wicara', sub: 'Kajelasan lafal/pocapan (bedakna a/o, d/dh, t/th kanthi bener!)' },
        { emoji: '🎵', label: '2. Wirama', sub: 'Cepat-alon, dhuwur-cendheke intonasi, lan jeda sing pas' },
        { emoji: '❤️', label: '3. Wirasa', sub: 'Penghayatan rasa/emosi (sedhih, semangat, khidmat) cocog isi geguritan' },
        { emoji: '🙌', label: '4. Wiraga', sub: 'Solah bawa, mimik/ekspresi rai, lan obahe awak sing wajar ora berlebihan' },
      ]},
    ],
    activityTitle: 'Gladhen: Maca & Nyipta Geguritan',
    questions: [
      { text: 'Ing teknik maca geguritan 4W, penghayatan rasa lan penjiwaan emosi manut isine geguritan diarani...', opts: ['Wirasa', 'Wicara', 'Wiraga', 'Wirama'], ans: 0, exp: 'Wicara = lafal, Wirama = irama/intonasi, Wirasa = penghayatan rasa, Wiraga = ekspresi & gerak.' },
      { text: 'Kajelasan pocapan vokal lan konsonan basa Jawa (kaya beda "dalan" lan "dhuwit") nalika maca geguritan kalebu unsur...', opts: ['Wicara', 'Wiraga', 'Wirasa', 'Tipografi'], ans: 0, exp: 'Wicara nyakup kejelasan artikulasi/pelafalan.' },
      { text: 'Langkah awal paling becik kanggo siswa SMP nalika arep NYIPTA (nulis) geguritan dhewe yaiku...', opts: ['Nemtokake tema sing cedhak karo pengalaman nyata (kulawarga, sekolah, alam sekitar) banjur milih diksi lan citraan sing urip', 'Nyalin geguritan saka internet', 'Nulis ukara dawa tanpa jeda', 'Nganggo tembung sing dheweke ora ngerti tegese'], ans: 0, exp: 'Pengalaman jujur lan pengamatan sekitar ngasilake geguritan asli sing nyentuh.' },
    ],
  },
];

upsertLessonsBatch('Kelas 8 SMP — Bahasa Jawa Gresik Daratan (6 Bab, 31 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

