import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: TEKS DISKUSI (6 sub)
  {
    topicCode: 'BIND-SMP9-01', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian, tujuan, dan karakteristik teks diskusi (menyajikan dua sudut pandang pro dan kontra secara berimbang).'],
    materialTitle: 'Pengertian dan Tujuan Teks Diskusi',
    blocks: [
      { type: 'text', text: 'Teks diskusi adalah teks argumentatif yang mengupas suatu isu kontroversial dari DUA sudut pandang berbeda — pendapat mendukung (PRO) dan pendapat menentang (KONTRA) — secara objektif sebelum menarik simpulan/rekomendasi jalan tengah yang bijak.' },
    ],
    activityTitle: 'Latihan: Pengertian Teks Diskusi',
    questions: [
      { text: 'Ciri pembeda utama TEKS DISKUSI dibandingkan teks eksposisi biasa adalah teks diskusi...', opts: ['Menyajikan secara berimbang dua sudut pandang berlawanan (argumen pro dan argumen kontra) atas satu isu sebelum menyimpulkan', 'Hanya memuat satu sisi pendapat saja', 'Berisi cerita imajinatif', 'Berisi urutan langkah memasak'], ans: 0, exp: 'Teks diskusi menimbang sisi pro dan kontra secara adil.' },
      { text: 'Tujuan utama penulisan teks diskusi adalah...', opts: ['Mengajak pembaca menelaah suatu persoalan secara utuh dari berbagai sudut pandang guna menemukan jalan tengah terbaik', 'Memaksa pembaca marah pada satu kelompok', 'Menghibur dengan kisah lucu', 'Mempromosikan barang dagangan'], ans: 0, exp: 'Diskusi melatih nalar kritis, objektif, dan demokratis.' },
      { text: 'Manakah topik yang PALING COCOK diangkat menjadi teks diskusi siswa SMP?', opts: ['"Bolehkah Siswa SMP Membawa Ponsel Pintar ke Sekolah?"', '"Matahari Terbit dari Timur"', '"Rumus Luas Lingkaran"', '"Daftar Nama Hari"'], ans: 0, exp: 'Isu yang memunculkan beragam sudut pandang pro dan kontra sangat cocok untuk teks diskusi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-01', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi dan merumuskan bagian ISU (masalah aktual/kontroversial) sebagai pembuka teks diskusi.'],
    materialTitle: 'Merumuskan Isu dalam Teks Diskusi',
    blocks: [
      { type: 'tip', text: 'Paragraf ISU (bagian 1 teks diskusi) harus netral dan informatif: memperkenalkan persoalan yang sedang hangat dibicarakan serta menjelaskan mengapa masyarakat terbelah pendapatnya mengenai isu tersebut!' },
    ],
    activityTitle: 'Latihan: Isu Teks Diskusi',
    questions: [
      { text: 'Bagian pembuka teks diskusi yang memperkenalkan topik permasalahan sekaligus latar munculnya perbedaan pendapat disebut...', opts: ['Isu (pengenalan masalah)', 'Argumen kontra', 'Simpulan', 'Koda'], ans: 0, exp: 'Struktur teks diskusi: Isu → Argumen Mendukung (Pro) → Argumen Menentang (Kontra) → Simpulan/Saran.' },
      { text: 'Nada penulisan paragraf ISU yang baik pada teks diskusi bersifat...', opts: ['Netral dan informatif tanpa langsung menghakimi salah satu pihak di awal', 'Sangat memihak dan menghina pihak lawan', 'Emosional dan kasar', 'Berupa pantun'], ans: 0, exp: 'Netralitas paragraf isu menjaga objektivitas pembaca.' },
      { text: 'Suatu topik layak dijadikan isu teks diskusi apabila bersifat...', opts: ['Aktual, relevan dengan kehidupan masyarakat/pelajar, dan memiliki sisi manfaat sekaligus risiko yang diperdebatkan', 'Sudah disepakati mutlak 100% tanpa perbedaan pendapat', 'Rahasia pribadi seseorang', 'Fiksi semata'], ans: 0, exp: 'Adanya dua perspektif rasional menjadi syarat isu diskusi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-01', subSeq: 3,
    objectives: ['Siswa mampu menganalisis argumen pendukung (pro) dan argumen penentang (kontra) beserta konjungsi perlawanan/kohesinya.'],
    materialTitle: 'Argumen Pro dan Kontra dalam Teks Diskusi',
    blocks: [
      { type: 'table', title: 'Penanda Kebahasaan Transisi Pro → Kontra', headers: ['Bagian', 'Ungkapan & Konjungsi Khas'], rows: [
        ['Argumen Pro (Mendukung)', 'Sebagian pihak berpendapat..., Di satu sisi..., Pendukung kebijakan ini beralasan bahwa...'],
        ['Peralihan ke Kontra (Perlawanan)', 'Namun, Di sisi lain, Sebaliknya, Meskipun demikian, Akan tetapi, Berbeda dengan pendapat tersebut...'],
        ['Modalitas', 'sebaiknya, seharusnya, dapat, mungkin, perlu'],
      ]},
    ],
    activityTitle: 'Latihan: Argumen Pro & Kontra',
    questions: [
      { text: 'Isu: "Penggunaan AI (kecerdasan buatan) dalam mengerjakan tugas sekolah." Manakah yang merupakan argumen KONTRA (menentang penggunaan tanpa batas)?', opts: ['"Di sisi lain, ketergantungan pada AI membuat siswa malas berpikir kritis dan rawan menyalin jawaban tanpa memahami konsep."', '"Di satu sisi, AI membantu siswa mencari referensi dan penjelasan tambahan dengan cepat."', '"AI adalah teknologi komputer modern."', '"Sebaiknya sekolah menyusun pedoman etis penggunaan AI."'], ans: 0, exp: 'Menyoroti sisi risiko/kelemahan penggunaan AI bagi kemandirian belajar siswa.' },
      { text: 'Konjungsi perlawanan antarkalimat yang paling tepat menjembatani paragraf argumen pro menuju paragraf argumen kontra adalah...', opts: ['Di sisi lain, / Namun, / Sebaliknya,', 'Selain itu,', 'Oleh karena itu,', 'Pertama-tama,'], ans: 0, exp: 'Menandai perubahan sudut pandang ke argumen yang berseberangan.' },
      { text: 'Kata "seharusnya, sebaiknya, dapat, mungkin" yang sering dipakai dalam teks diskusi untuk menyatakan tingkat kepastian atau saran disebut kata...', opts: ['Modalitas', 'Kata bilangan', 'Kata sandang', 'Interjeksi'], ans: 0, exp: 'Modalitas mengatur kadar ketegasan, kemungkinan, atau keharusan pendapat.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-01', subSeq: 4,
    objectives: ['Siswa mampu menyusun simpulan/saran jalan tengah (rekomendasi) yang adil dan merangkum inti pro-kontra.'],
    materialTitle: 'Simpulan dan Rekomendasi Teks Diskusi',
    blocks: [
      { type: 'text', text: 'Simpulan teks diskusi TIDAK hanya memihak buta satu sisi, melainkan merangkum poin terbaik dari sisi pro dan kekhawatiran sisi kontra lalu menawarkan REKOMENDASI JALAN TENGAH yang bijak (misal: "Ponsel boleh dibawa untuk keselamatan pulang sekolah, namun wajib dititipkan di loker selama jam pelajaran kecuali atas izin guru untuk riset!").' },
    ],
    activityTitle: 'Latihan: Simpulan Teks Diskusi',
    questions: [
      { text: 'Ciri bagian SIMPULAN/SARAN yang paling kuat dalam teks diskusi adalah...', opts: ['Merangkum kedua sudut pandang secara proporsional lalu menawarkan jalan tengah atau solusi realistis', 'Menambahkan argumen baru yang tak terkait isu', 'Mengulang persis paragraf 1', 'Memaki pihak kontra'], ans: 0, exp: 'Jalan tengah memadukan manfaat sisi pro sekaligus memitigasi risiko sisi kontra.' },
      { text: 'Isu: "Penggunaan gawai di kalangan pelajar SMP." Simpulan jalan tengah terbaik adalah...', opts: ['"Gawai tetap bermanfaat menunjang pembelajaran asalkan disertai batasan waktu layar yang disiplin dan pengawasan orang tua."', '"Gawai harus dimusnahkan dari bumi."', '"Pelajar bebas bermain gawai 20 jam sehari."', '"Gawai adalah benda elektronik."'], ans: 0, exp: 'Mengambil sisi manfaat sambil mengendalikan dampak negatifnya.' },
      { text: 'Urutan struktur lengkap teks diskusi yang baku adalah...', opts: ['Isu → Argumen pendukung (pro) → Argumen penentang (kontra) → Simpulan/saran', 'Simpulan → Isu → Pro → Kontra', 'Orientasi → Komplikasi → Resolusi', 'Tujuan → Alat → Langkah'], ans: 0, exp: 'Isu – Argumen Pro – Argumen Kontra – Simpulan.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-01', subSeq: 5,
    objectives: ['Siswa mampu menilai kekuatan dan kelogisan suatu argumen berdasarkan relevansi bukti, sumber data, dan keabsahan penalaran.'],
    materialTitle: 'Menilai Kekuatan Argumen',
    blocks: [
      { type: 'table', title: 'Argumen Kuat vs Argumen Lemah', headers: ['Argumen Kuat (Valid)', 'Argumen Lemah (Rancu)'], rows: [
        ['Didukung data survei, riset ilmiah, atau contoh faktual terukur', 'Hanya bersandar pada perasaan ("pokoknya aku nggak suka")'],
        ['Hubungan sebab-akibat masuk akal dan relevan dengan isu', 'Generalisasi terburu-buru ("1 orang salah = semua orang salah!")'],
      ]},
    ],
    activityTitle: 'Latihan: Menilai Kekuatan Argumen',
    questions: [
      { text: 'Kesalahan penalaran berupa mengambil kesimpulan menyeluruh hanya dari 1 kasus kecil ("Satu siswa kelas 9A terlambat, berarti semua siswa kelas 9A pemalas") disebut...', opts: ['Generalisasi terburu-buru (hasty generalization)', 'Argumen ilmiah', 'Deduksi valid', 'Simpulan objektif'], ans: 0, exp: 'Satu sampel kecil tidak sah digeneralisasikan ke seluruh kelompok.' },
      { text: 'Manakah argumen berikut yang PALING KUAT secara logis?', opts: ['"Penambahan jam olahraga 30 menit terbukti dalam studi kesehatan sekolah mampu menurunkan tingkat stres dan memperbaiki kualitas tidur remaja."', '"Olahraga bagus karena kata kakakku keren."', '"Semua orang harus lari 10 km tiap pagi tanpa kecuali."', '"Orang yang tidak setuju berarti lemah."'], ans: 0, exp: 'Berbasis bukti studi kesehatan dan hubungan sebab-akibat rasional.' },
      { text: 'Untuk menguji kekuatan sebuah argumen dalam teks diskusi, tiga pertanyaan kritis yang perlu diajukan pembaca adalah...', opts: ['Apakah buktinya valid? Apakah logikanya nyambung dengan isu? Apakah sumber datanya tepercaya?', 'Apakah hurufnya bagus? Berapa jumlah katanya? Siapa temannya?', 'Apakah memakai tanda seru? Apakah singkat?', 'Tidak perlu diuji'], ans: 0, exp: 'Bukti, logika, dan kredibilitas sumber menentukan mutu argumen.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-01', subSeq: 6,
    objectives: ['Siswa mampu merancang dan menulis teks diskusi 4 paragraf utuh dengan kohesi, koherensi, dan EYD V yang rapi.'],
    materialTitle: 'Menulis Teks Diskusi Utuh',
    blocks: [
      { type: 'list', title: 'Kerangka 4 Paragraf Teks Diskusi SMP', items: ['Paragraf 1 (Isu): Kenalkan isu aktual secara netral.', 'Paragraf 2 (Argumen Pro): Sajikan 2 alasan kuat pendukung + bukti/contoh.', 'Paragraf 3 (Argumen Kontra): Awali "Di sisi lain,..." + 2 alasan penentang + bukti.', 'Paragraf 4 (Simpulan/Saran): Tawarkan rekomendasi jalan tengah yang bijak!'] },
    ],
    activityTitle: 'Latihan: Menulis Teks Diskusi',
    questions: [
      { text: 'Ketika menyusun teks diskusi tentang "Pemberian PR (Pekerjaan Rumah) Setiap Hari bagi Siswa SMP", ide pokok yang paling seimbang untuk Paragraf 2 (Pro) dan Paragraf 3 (Kontra) adalah...', opts: ['Pro: melatih disiplin & penguatan materi di rumah; Kontra: PR berlebihan mengurangi waktu istirahat, hobi, dan kebersamaan keluarga', 'Pro: PR bagus; Kontra: PR bagus juga', 'Pro: semua guru galak; Kontra: siswa malas', 'Hanya menulis sisi pro saja'], ans: 0, exp: 'Kedua sisi sama-sama logis dan konkret untuk ditimbang.' },
      { text: 'Penanda kohesi leksikal/gramatikal yang memperhalus perpindahan gagasan dalam teks diskusi meliputi...', opts: ['Konjungsi pertentangan, kata rujukan ("hal tersebut", "kebijakan itu"), dan sinonim/repetisi terukur', 'Menghapus semua titik', 'Mengganti topik di tiap kalimat', 'Memakai huruf kapital semua'], ans: 0, exp: 'Kohesi mengikat paragraf pro-kontra menjadi kesatuan utuh.' },
      { text: 'Sebelum memublikasikan teks diskusi di mading sekolah, penyuntingan wajib memastikan bahwa...', opts: ['Kedua sisi pro-kontra disajikan adil, tidak menyerang pribadi, dan sesuai ejaan EYD V', 'Hanya opini penulis yang boleh tampak', 'Semua argumen kontra dihapus', 'Memakai bahasa sindiran kasar'], ans: 0, exp: 'Keseimbangan dan kesantunan menjaga kualitas diskusi publik.' },
    ],
  },

  // BAB 2: ARTIKEL ILMIAH POPULER (5 sub)
  {
    topicCode: 'BIND-SMP9-02', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian dan ciri artikel ilmiah populer (berdasar fakta/riset ilmiah namun ditulis komunikatif mudah dipahami publik).'],
    materialTitle: 'Ciri Artikel Ilmiah Populer',
    blocks: [
      { type: 'table', title: 'Artikel Ilmiah Murni vs Artikel Ilmiah Populer', headers: ['Aspek', 'Artikel Ilmiah Murni (Jurnal)', 'Artikel Ilmiah Populer (Majalah/Web/Koran)'], rows: [
        ['Sasaran Pembaca', 'Peneliti / akademisi spesialis', 'Masyarakat umum & pelajar'],
        ['Gaya Bahasa', 'Sangat kaku, penuh istilah teknis berat', 'Ringan, mengalir, komunikatif, istilah sulit langsung dijelaskan!'],
        ['Dasar Isi', 'SAMA-SAMA WAJIB berbasis fakta, logika, & data ilmiah valid!', 'Tetap objektif & ilmiah, bukan karangan fiksi/hoaks!'],
      ]},
    ],
    activityTitle: 'Latihan: Ciri Artikel Ilmiah Populer',
    questions: [
      { text: 'Ciri utama ARTIKEL ILMIAH POPULER adalah...', opts: ['Menyajikan pengetahuan berbasis fakta/riset ilmiah dengan bahasa populer yang santai, mengalir, dan mudah dipahami pembaca umum', 'Berisi dongeng hiburan tanpa data', 'Memakai istilah rumit tanpa penjelasan agar hanya profesor yang paham', 'Berbentuk puisi bersajak'], ans: 0, exp: 'Ilmiah (isinya valid) + Populer (penyajiannya akrab dan mudah dicerna).' },
      { text: 'Manakah judul yang paling khas untuk sebuah ARTIKEL ILMIAH POPULER?', opts: ['"Mengapa Tidur Cukup Membuat Otak Remaja Lebih Tajam Saat Ujian?"', '"Analisis Regresi Multivariat Korelasi Melatonin Kortikal"', '"Kisah Petualangan di Negeri Awan"', '"Ayo Beli Kasur Diskon 50%!"'], ans: 0, exp: 'Menarik rasa ingin tahu publik sekaligus membahas fenomena ilmiah nyata.' },
      { text: 'Meskipun bahasanya lebih akrab dan menarik dibanding jurnal akademik, artikel ilmiah populer tetap TIDAK BOLEH...', opts: ['Memalsukan data atau menyebarkan mitos kesehatan/sains tanpa dasar ilmiah', 'Menjelaskan istilah sulit dengan analogi sederhana', 'Memakai judul menarik', 'Menyertakan contoh sehari-hari'], ans: 0, exp: 'Kebenaran ilmiah tetap tidak boleh dikorbankan demi popularitas.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-02', subSeq: 2,
    objectives: ['Siswa mampu mengumpulkan dan menyajikan fakta, data statistik, hasil pengamatan, serta contoh konkret dalam artikel ilmiah populer.'],
    materialTitle: 'Fakta, Data, dan Pengumpulan Informasi Artikel',
    blocks: [
      { type: 'text', text: 'Artikel ilmiah populer yang kuat memadukan 4 cara pengumpulan data: (1) Wawancara narasumber kompeten, (2) Kuesioner/survei kecil (misal survei kebiasaan sarapan 40 siswa kelas 9), (3) Observasi langsung, dan (4) Membaca buku/jurnal/situs kredibel (studi pustaka).' },
    ],
    activityTitle: 'Latihan: Fakta & Data Artikel',
    questions: [
      { text: 'Cara terbaik menyajikan data angka hasil survei 50 siswa SMP di dalam artikel ilmiah populer agar pembaca cepat menangkap maknanya adalah...', opts: ['Menyajikan persentase ringkas disertai penjelasan maknanya atau infografis sederhana', 'Menuliskan 50 nama siswa satu per satu dalam 3 halaman', 'Menyembunyikan angkanya', 'Mengarang angka acak'], ans: 0, exp: 'Data ringkas bermakna dan visualisasi membuat artikel populer enak dibaca.' },
      { text: 'Kalimat "Berdasarkan survei terhadap 60 siswa kelas 9, 70% mengaku lebih mudah memahami materi IPA ketika disertai praktikum langsung" merupakan...', opts: ['Fakta hasil survei kuantitatif', 'Opini tanpa dasar', 'Majas hiperbola', 'Slogan iklan'], ans: 0, exp: 'Menyebut jumlah responden dan hasil persentase terukur.' },
      { text: 'Menggunakan ANALOGI sederhana (misalnya menyamakan mitokondria dengan "pembangkit listrik sel") dalam artikel ilmiah populer bermanfaat untuk...', opts: ['Membantu pembaca awam membayangkan konsep sains abstrak dengan mudah', 'Menghilangkan unsur ilmiah', 'Membuat artikel jadi fiksi', 'Membingungkan pembaca'], ans: 0, exp: 'Analogi menjembatani konsep teknis ke pemahaman umum.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-02', subSeq: 3,
    objectives: ['Siswa mampu memilih sumber informasi tepercaya dan mencantumkan atribusi sumber (kutipan/daftar rujukan) untuk mencegah plagiarisme.'],
    materialTitle: 'Sumber Informasi Kredibel dan Anti-Plagiarisme',
    blocks: [
      { type: 'misconception', wrong: 'Menyalin paragraf dari internet lalu menempelkannya ke artikel kita tanpa menyebut sumbernya itu hal biasa.', right: 'ITU PLAGIARISME! Selalu tulis ulang dengan bahasa sendiri (PARAFRASE) dan cantumkan atribusi sumber secara jujur (misal: "Menurut data Kementerian Kesehatan RI tahun 2025...")!' },
    ],
    activityTitle: 'Latihan: Sumber Informasi & Anti-Plagiarisme',
    questions: [
      { text: 'Mengambil tulisan, data, atau gagasan orang lain lalu mengakuinya sebagai karya sendiri tanpa menyebut sumbernya disebut...', opts: ['Plagiarisme (pelanggaran etika akademik)', 'Parafrasa', 'Observasi', 'Sintesis'], ans: 0, exp: 'Kejujuran intelektual mewajibkan penyebutan sumber rujukan.' },
      { text: 'Sumber informasi PALING KREDIBEL untuk menulis artikel ilmiah populer bertema "Bahaya Mikroplastik di Laut" adalah...', opts: ['Publikasi lembaga riset resmi (BRIN, universitas, jurnal lingkungan, WHO/UNEP) dan wawancara pakar biologi laut', 'Komentar anonim tanpa nama di media sosial', 'Pesan berantai tanpa penulis', 'Tebakan pribadi'], ans: 0, exp: 'Otoritas keilmuan sumber menjamin akurasi isi artikel.' },
      { text: 'Cara etis menggunakan gagasan dari sebuah buku sains dalam artikel ilmiah populer buatan kita sendiri adalah...', opts: ['Memahami isinya, menuliskan kembali dengan kalimat sendiri (parafrasa), dan mencantumkan nama penulis/sumbernya', 'Menyalin mentah 100% tanpa sumber', 'Mengubah 1 kata saja tanpa sumber', 'Mengaku sebagai hasil riset sendiri'], ans: 0, exp: 'Parafrasa + atribusi sumber menunjukkan integritas penulis.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-02', subSeq: 4,
    objectives: ['Siswa mampu menggunakan kalimat perbandingan, analogi, sinonim-antonim, dan hubungan sebab-akibat (kausalitas) dalam artikel ilmiah populer.'],
    materialTitle: 'Hubungan Sebab-Akibat, Perbandingan, & Analogi',
    blocks: [
      { type: 'table', title: 'Ciri Kebahasaan Artikel Ilmiah Populer', headers: ['Unsur Bahasa', 'Penanda / Contoh'], rows: [
        ['Hubungan Sebab-Akibat', 'karena, sebab, akibatnya, sehingga, memicu, berdampak pada'],
        ['Perbandingan & Analogi', 'berbeda dengan, dibandingkan, bagaikan, ibarat, seperti'],
        ['Antonim & Sinonim', 'menjelaskan kontras (alami vs sintetis; hemat vs boros) agar tajam'],
      ]},
    ],
    activityTitle: 'Latihan: Sebab-Akibat & Perbandingan',
    questions: [
      { text: '"Paparan cahaya biru layar ponsel menjelang tidur menghambat produksi hormon melatonin, sehingga remaja sering kesulitan tidur nyenyak." Kalimat ini memakai pola hubungan...', opts: ['Sebab-akibat (kausalitas)', 'Pertentangan', 'Pilihan', 'Urutan langkah resep'], ans: 0, exp: 'Konjungsi "sehingga" menghubungkan sebab (cahaya biru hambat melatonin) dengan akibatnya (sulit tidur).' },
      { text: 'Kalimat "Berbeda dengan plastik sekali pakai yang butuh ratusan tahun terurai, kemasan daun pisang dapat terurai alami dalam hitungan minggu" menggunakan teknik...', opts: ['Perbandingan kontras (antitesis/antonim)', 'Kalimat perintah', 'Kutipan dialog', 'Kramagung'], ans: 0, exp: 'Membandingkan dua hal secara kontras memperjelas argumen ilmiah.' },
      { text: 'Kata "berdampak pada, mengakibatkan, memicu" merupakan kata kerja penanda hubungan...', opts: ['Kausalitas (sebab-akibat)', 'Waktu lampau', 'Kepemilikan', 'Kesamaan'], ans: 0, exp: 'Menjelaskan mekanisme sebab dan dampak fenomena.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-02', subSeq: 5,
    objectives: ['Siswa mampu menyusun artikel ilmiah populer secara utuh (Judul memikat, Pembuka/Lead, Isi ber-subjudul, dan Penutup refleksi/saran).'],
    materialTitle: 'Menyusun Artikel Ilmiah Populer',
    blocks: [
      { type: 'list', title: 'Struktur Praktis Artikel Ilmiah Populer', items: ['1. Judul Memikat & Jelas (singkat, memancing ingin tahu tanpa clickbait palsu).', '2. Pembuka / Pendahuluan: kisah kecil, fakta mengejutkan, atau pertanyaan pemantik.', '3. Isi / Pembahasan: bagi menjadi 2–3 subjudul singkat agar mata pembaca tidak lelah!', '4. Penutup: simpulan ringkas + pesan praktis yang bisa langsung diterapkan pembaca!'] },
    ],
    activityTitle: 'Latihan: Menyusun Artikel Ilmiah Populer',
    questions: [
      { text: 'Mengapa artikel ilmiah populer di media cetak/daring sering dibagi ke dalam beberapa SUBJUDUL singkat dan paragraf yang tidak terlalu panjang?', opts: ['Agar pembaca mudah memindai gagasan utama, tidak cepat lelah membaca, dan alur penjelasan terasa ringan', 'Supaya tidak ada isinya', 'Karena penulis lupa sambungannya', 'Agar terlihat seperti puisi'], ans: 0, exp: 'Keterbacaan (readability) adalah keunggulan artikel ilmiah populer.' },
      { text: 'Kalimat pembuka paling efektif untuk artikel ilmiah populer bertema "Manfaat Membaca Buku Cetak bagi Fokus Otak" adalah...', opts: ['"Pernahkah kamu merasa sulit fokus membaca satu halaman penuh tanpa tergoda mengecek notifikasi ponsel? Ternyata ada penjelasan ilmiahnya!"', '"Bab I Pendahuluan. Latar belakang masalah penelitian ini adalah..."', '"Buku adalah benda kertas."', '"Demikian artikel ini saya tutup."'], ans: 0, exp: 'Hook interaktif langsung menyapa pengalaman nyata pembaca.' },
      { text: 'Tahap akhir sebelum mengirimkan artikel ilmiah populer ke majalah sekolah atau situs literasi pelajar adalah...', opts: ['Memverifikasi ulang akurasi data/sumber serta menyunting kalimat efektif dan ejaan EYD V', 'Menghapus semua sumber data', 'Menambah rumor tak terbukti', 'Mengganti judul jadi tidak nyambung'], ans: 0, exp: 'Akurasi fakta + kerapian bahasa adalah standar publikasi bermutu.' },
    ],
  },

  // BAB 3: TEKS PIDATO (5 sub)
  {
    topicCode: 'BIND-SMP9-03', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian dan tujuan pidato (informatif, persuasif, rekreatif/apresiatif) sesuai konteks acara.'],
    materialTitle: 'Pengertian dan Tujuan Pidato',
    blocks: [
      { type: 'text', text: 'Pidato adalah pengungkapan gagasan secara lisan di depan khalayak umum. Berdasarkan tujuannya, pidato dibedakan menjadi: INFORMATIF (memberi informasi), PERSUASIF (meyakinkan & mengajak pendengar bertindak positif — paling sering di sekolah/masyarakat!), dan REKREATIF/APRESIATIF (menghibur/menyambut hangat di acara perayaan).' },
    ],
    activityTitle: 'Latihan: Tujuan Pidato',
    questions: [
      { text: 'Pidato ketua OSIS saat upacara Senin yang mengajak seluruh siswa menjaga kebersihan kelas dan menjauhi perundungan (bullying) bertujuan...', opts: ['Persuasif (mengajak dan menggugah kesadaran bertindak positif)', 'Sekadar menghibur lelucon', 'Menjual produk', 'Menguji rumus'], ans: 0, exp: 'Pidato persuasif bertujuan menggerakkan sikap dan tindakan pendengar.' },
      { text: 'Metode berpidato dengan hanya membawa CATATAN KECIL berisi poin-poin inti lalu mengembangkannya secara luwes di atas panggung disebut metode...', opts: ['Ekstemporan (paling ideal dan komunikatif!)', 'Naskah (manuskrip)', 'Hafalan (memoriter)', 'Impromptu (mendadak tanpa persiapan)'], ans: 0, exp: 'Ekstemporan menjaga alur tetap terstruktur sekaligus kontak mata alami dengan audiens.' },
      { text: 'Berpidato secara mendadak tanpa persiapan teks sebelumnya karena diminta tiba-tiba di suatu acara disebut metode...', opts: ['Impromptu (serta-merta)', 'Manuskrip', 'Ekstemporan', 'Memoriter'], ans: 0, exp: 'Impromptu mengandalkan wawasan dan ketenangan spontan pembicara.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-03', subSeq: 2,
    objectives: ['Siswa mampu menganalisis struktur lengkap teks pidato persuasif (Pembukaan, Isi: Pernyataan Posisi–Tahap Argumen–Penguatan Pernyataan, dan Penutup).'],
    materialTitle: 'Struktur Teks Pidato (Pembukaan, Isi, Penutup)',
    blocks: [
      { type: 'table', title: 'Struktur Baku Teks Pidato SMP', headers: ['Bagian', 'Komponen Utama'], rows: [
        ['1. Pembukaan', 'Salam pembuka, sapaan penghormatan (urut dari jabatan tertinggi!), puji syukur, dan pengantar topik'],
        ['2. Isi (Inti Pidato)', 'Pernyataan posisi + rangkaian argumen/fakta + ajakan/penguatan pernyataan posisi'],
        ['3. Penutup', 'Simpulan singkat, harapan/ajakan akhir, permohonan maaf, terima kasih, dan salam penutup'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Teks Pidato',
    questions: [
      { text: 'Urutan sapaan penghormatan pada bagian PEMBUKAAN pidato di sekolah yang paling santun dan sesuai tata krama adalah...', opts: ['Yang terhormat Bapak Kepala Sekolah, Bapak/Ibu Guru, serta teman-teman yang saya banggakan', 'Teman-teman dulu, baru Kepala Sekolah di akhir', 'Hanya menyapa teman sebangku', 'Langsung masuk penutup'], ans: 0, exp: 'Sapaan diurutkan dari kedudukan tertinggi ke audiens umum/rekan sejawat.' },
      { text: 'Tiga bagian utama di dalam ISI pidato persuasif adalah...', opts: ['Pernyataan posisi → Tahap argumen → Penguatan pernyataan posisi', 'Salam pembuka → Doa → Salam penutup', 'Identitas buku → Sinopsis → Rekomendasi', 'Alat → Bahan → Langkah'], ans: 0, exp: 'Struktur argumentasi persuasif menuntun pendengar setuju secara logis.' },
      { text: 'Kalimat "Demikian yang dapat saya sampaikan. Mohon maaf atas segala kekurangan, terima kasih atas perhatian hadirin, wassalamualaikum..." merupakan bagian...', opts: ['Penutup pidato', 'Pembukaan', 'Tahap argumen', 'Sapaan awal'], ans: 0, exp: 'Menutup pidato dengan rendah hati dan santun.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-03', subSeq: 3,
    objectives: ['Siswa mampu mengembangkan gagasan pidato menggunakan 3 pilar persuasi Aristoteles: Etos (etika/kredibilitas), Patos (emosi), dan Logos (logika/fakta).'],
    materialTitle: 'Pengembangan Gagasan: Etos, Patos, dan Logos',
    blocks: [
      { type: 'visual_cards', title: '3 Kunci Pidato Menggetarkan (Aristoteles)', cards: [
        { emoji: '⚖️', label: 'ETOS (Etika & Moral)', sub: 'Menyentuh nilai tanggung jawab, kejujuran, & teladan baik' },
        { emoji: '❤️', label: 'PATOS (Emosi / Rasa)', sub: 'Menggugah empati, kebanggaan, atau haru lewat kisah nyata' },
        { emoji: '🧠', label: 'LOGOS (Logika & Data)', sub: 'Meyakinkan akal sehat dengan data konkret dan alasan masuk akal' },
      ]},
    ],
    activityTitle: 'Latihan: Etos, Patos, & Logos Pidato',
    questions: [
      { text: '"Bayangkan jika adik-adik kita suatu hari tidak lagi bisa menikmati udara bersih dan pantai indah karena kita hari ini abai pada sampah plastik." Pendekatan persuasi pidato ini kuat memakai...', opts: ['Patos (menggugah emosi dan empati pendengar)', 'Logos angka statistik', 'Sinopsis buku', 'Daftar pustaka'], ans: 0, exp: 'Mengajak audiens membayangkan dampak emosional bagi generasi adik-adik.' },
      { text: '"Berdasarkan data nasional, pengurangan 1 botol plastik per siswa per hari di sekolah kita akan menyelamatkan lebih dari 100.000 botol plastik dalam setahun." Pendekatan ini adalah...', opts: ['Logos (logika dan bukti data terukur)', 'Patos semata', 'Candaan', 'Sindiran'], ans: 0, exp: 'Meyakinkan pikiran pendengar melalui perhitungan dan data logis.' },
      { text: '"Sebagai pelajar berkarakter dan warga negara yang bertanggung jawab, sudah sepatutnya kita menjaga kejujuran dalam setiap ujian." Pendekatan nilai moral ini adalah...', opts: ['Etos (pendekatan etika/moral)', 'Hiperbola', 'Ironi', 'Aliterasi'], ans: 0, exp: 'Mengajak berdasar integritas dan nilai moral luhur.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-03', subSeq: 4,
    objectives: ['Siswa mampu menggunakan bahasa persuasif pidato (nominalisasi, kalimat aktif, repetisi/anafora, pertanyaan retoris, kata emotif).'],
    materialTitle: 'Bahasa Persuasif dan Retorika Pidato',
    blocks: [
      { type: 'tip', text: 'Gunakan ANAFORA (pengulangan kata di awal kalimat berurutan) untuk memompa semangat di puncak pidato! Contoh: "Kita bisa mulai hari ini! Kita bisa mulai dari kelas ini! Kita bisa mulai dari diri kita sendiri!"' },
    ],
    activityTitle: 'Latihan: Bahasa Persuasif Pidato',
    questions: [
      { text: '"Mari kita belajar dengan jujur! Mari kita berkarya dengan tulus! Mari kita harumkan nama bangsa!" Gaya bahasa pengulangan kata "Mari kita..." di awal kalimat berurutan ini disebut...', opts: ['Repetisi anafora (memperkuat daya gugah retorika pidato)', 'Ironi', 'Eufemisme', 'Litotes'], ans: 0, exp: 'Anafora menciptakan ritme pidato yang menggetarkan dan mudah diingat.' },
      { text: 'Bentuk NOMINALISASI (pembendaan kata kerja/sifat dengan imbuhan peN-an/ke-an) yang sering mempertegas ragam pidato resmi contohnya...', opts: ['"Pemberantasan perundungan" dan "Pelestarian lingkungan" (dari berantas, lestari)', '"Lari cepat"', '"Makan siang"', '"Baju baru"'], ans: 0, exp: 'Nominalisasi membuat gagasan pidato terdengar ringkas, padat, dan berwibawa.' },
      { text: 'Pemakaian kata ganti "kita" dalam pidato persuasif lebih efektif daripada "kalian" karena...', opts: ['Menempatkan pembicara setara berjuang bersama audiens, bukan menggurui dari atas', 'Lebih pendek hurufnya', 'Tidak baku', 'Hanya untuk 2 orang'], ans: 0, exp: 'Kata "kita" membangun ikatan kebersamaan.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-03', subSeq: 5,
    objectives: ['Siswa mampu menyusun naskah pidato persuasif lengkap dan mempraktikkan teknik penyampaian vokal, jeda, dan bahasa tubuh.'],
    materialTitle: 'Menyusun Naskah dan Membawakan Pidato',
    blocks: [
      { type: 'list', title: '4 Kunci Tampil Berpidato Percaya Diri', items: ['1. Pahami profil pendengar (teman sebaya vs orang tua/guru) untuk menyesuaikan sapaan & contoh.', '2. Latih variasi intonasi (tidak datar seperti robot!) dan berhenti sejenak (jeda dramatis) setelah kalimat penting.', '3. Berdiri tegak santai, tatap seluruh audiens (kiri–tengah–kanan), gunakan gerak tangan wajar.', '4. Tutup dengan kalimat pamungkas (closing statement) yang membekas di hati!'] },
    ],
    activityTitle: 'Latihan: Menyusun & Membawakan Pidato',
    questions: [
      { text: 'Mengapa pembicara pidato perlu memberi JEDA HENING 1–2 detik setelah mengucapkan kalimat retoris atau fakta penting?', opts: ['Memberi ruang bagi pendengar untuk meresapi pesan sekaligus menambah wibawa penyampaian', 'Karena lupa teks', 'Agar acara cepat bubar', 'Supaya tidak terdengar'], ans: 0, exp: 'Jeda terencana adalah teknik retorika pembicara ulung.' },
      { text: 'Hal yang harus dihindari saat membawakan pidato di depan siswa satu sekolah adalah...', opts: ['Menunduk terus-menerus menatap kertas dengan suara datar tanpa ekspresi', 'Berlatih intonasi sebelumnya', 'Menyapukan kontak mata ke seluruh audiens', 'Membuka dengan salam santun'], ans: 0, exp: 'Kontak mata dan intonasi dinamis menjaga perhatian pendengar.' },
      { text: 'Manakah kalimat penutup (closing statement) yang paling kuat untuk pidato perpisahan kelas 9 SMP?', opts: ['"Mari kita bawa ilmu, persahabatan, dan doa guru-guru kita sebagai bekal melangkah lebih tinggi. Terima kasih SMP tercinta!"', '"Ya sudah segitu saja ya, capek."', '"Saya tidak tahu mau bilang apa lagi."', '"Semoga cepat pulang."'], ans: 0, exp: 'Hangat, berkesan, dan selaras dengan momen perpisahan.' },
    ],
  },

  // BAB 4: TEKS TANGGAPAN KRITIS (5 sub)
  {
    topicCode: 'BIND-SMP9-04', subSeq: 1,
    objectives: ['Siswa mampu mengidentifikasi isu sosial, budaya, atau karya seni yang layak ditanggapi secara kritis dan mendalam.'],
    materialTitle: 'Mengidentifikasi Isu Tanggapan Kritis',
    blocks: [
      { type: 'text', text: 'Di kelas 9, teks tanggapan berkembang menjadi TANGGAPAN KRITIS: bukan sekadar suka/tidak suka pada permukaan karya, melainkan menggali isu mendalam di balik sebuah kebijakan, fenomena media sosial, film, atau karya sastra secara analitis!' },
    ],
    activityTitle: 'Latihan: Identifikasi Isu Tanggapan Kritis',
    questions: [
      { text: 'Langkah pertama menyusun tanggapan kritis terhadap sebuah fenomena (misal maraknya tren tantangan berbahaya di media sosial remaja) adalah...', opts: ['Mengidentifikasi inti persoalan, fakta kejadiannya, dan pihak-pihak yang terdampak secara jelas (bagian Konteks)', 'Langsung menghujat pelaku di kolom komentar', 'Menebak-nebak tanpa fakta', 'Menutup mata'], ans: 0, exp: 'Pemahaman isu yang akurat menjadi fondasi penilaian kritis.' },
      { text: 'Perbedaan tanggapan KRITIS dengan sekadar komentar spontan media sosial adalah tanggapan kritis...', opts: ['Berbasis pengamatan mendalam, analisis objektif, alasan logis, dan solusi santun', 'Singkat penuh emosi tanpa alasan', 'Menyerang fisik seseorang', 'Ikut-ikutan komentar paling atas'], ans: 0, exp: 'Berpikir kritis menuntut analisis jernih, bukan reaksi impulsif.' },
      { text: 'Bagian awal teks tanggapan kritis yang memetakan isu, waktu, dan latar belakang objek yang ditanggapi adalah...', opts: ['Evaluasi / Konteks', 'Resolusi', 'Daftar pustaka', 'Kramagung'], ans: 0, exp: 'Konteks/evaluasi awal menempatkan pembaca dalam gambaran persoalan.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-04', subSeq: 2,
    objectives: ['Siswa mampu merumuskan penilaian objektif (apresiasi keunggulan sekaligus catatan kritis kelemahan) dengan bahasa evaluatif santun.'],
    materialTitle: 'Memberikan Penilaian Objektif dan Santun',
    blocks: [
      { type: 'tip', text: 'Bahasa evaluatif santun dalam tanggapan kritis menggunakan pilihan kata terukur ("sangat efektif", "cukup relevan", "perlu penyempurnaan di bagian...") — jauhkan kata-kata ekstrem menghina ("bodoh", "sampah", "gagal total")!' },
    ],
    activityTitle: 'Latihan: Penilaian Tanggapan Kritis',
    questions: [
      { text: 'Manakah kalimat penilaian kritis yang PALING OBJEKTIF dan SANTUN terhadap kebijakan pembatasan plastik di kantin sekolah?', opts: ['"Kebijakan ini patut diapresiasi karena berhasil menekan sampah plastik secara nyata, namun perlu didukung penyediaan tempat cuci wadah makan yang memadai agar siswa lebih nyaman."', '"Kebijakan ini menyusahkan semua orang dan sama sekali tidak berguna!"', '"Pokoknya saya tidak suka titik."', '"Kantin harus ditutup saja."'], ans: 0, exp: 'Mengakui manfaat nyata sekaligus menunjuk kebutuhan perbaikan teknis secara konstruktif.' },
      { text: 'Pernyataan pujian kritis yang bermutu selalu menyebut...', opts: ['Aspek spesifik yang unggul beserta dampaknya', 'Hanya kata "mantap"', 'Pujian palsu yang tidak sesuai kenyataan', 'Sindiran tersembunyi'], ans: 0, exp: 'Spesifisitas menunjukkan kedalaman pengamatan.' },
      { text: 'Saat menanggapi karya seni atau film, hal yang harus menjadi fokus penilaian adalah...', opts: ['Kualitas estetika, pesan moral, akting/teknis karya — bukan kehidupan pribadi penciptanya', 'Gosip pribadi sutradara', 'Rumah tinggal pemeran', 'Jumlah pengikut media sosial saja'], ans: 0, exp: 'Kritik profesional selalu tertuju pada karya.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-04', subSeq: 3,
    objectives: ['Siswa mampu menyusun alasan logis dan bukti konkret (data, kutipan, hasil observasi) penguat tanggapan kritis.'],
    materialTitle: 'Menyusun Alasan dan Bukti Penguat Tanggapan',
    blocks: [
      { type: 'text', text: 'Setiap kalimat penilaian ("Film ini berhasil mengangkat nilai persahabatan" atau "Tata suara di adegan ke-3 kurang jernih") harus segera diikuti BUKTI konkret dari karya/lapangan ("terbukti pada adegan saat..." atau "berdasarkan catatan pengamatan...")!' },
    ],
    activityTitle: 'Latihan: Alasan & Bukti Tanggapan',
    questions: [
      { text: 'Mengapa tanggapan kritis terhadap sebuah novel wajib menyertakan bukti kutipan adegan atau penggambaran tokoh?', opts: ['Membuktikan bahwa penilaian penanggap bukan tuduhan kosong melainkan berdasar fakta isi buku', 'Hanya menambah jumlah halaman', 'Agar pembaca tidak perlu membaca novel', 'Untuk menyalin seluruh bab'], ans: 0, exp: 'Bukti tekstual memperkuat objektivitas kritik sastra.' },
      { text: 'Kalimat tanggapan yang PALING KUAT buktinya mengenai kemacetan depan gerbang sekolah saat jam pulang adalah...', opts: ['"Pengamatan selama 5 hari menunjukkan antrean kendaraan memanjang hingga 100 meter karena banyak penjemput parkir dua baris tepat di depan gerbang."', '"Depan sekolah selalu macet gara-gara semua orang tidak sabar."', '"Jalanan jelek sekali."', '"Menurutku sekolah pindah saja."'], ans: 0, exp: 'Berbasis data pengamatan 5 hari dan mengidentifikasi penyebab spesifik.' },
      { text: 'Konjungsi penyerta bukti yang efektif dipakai dalam paragraf tanggapan adalah...', opts: ['"hal ini terlihat dari...", "dibuktikan dengan...", "sebagai contoh..."', '"padahal..."', '"atau..."', '"melainkan..."'], ans: 0, exp: 'Menghubungkan klaim penilaian dengan fakta pendukung.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-04', subSeq: 4,
    objectives: ['Siswa mampu merumuskan solusi dan rekomendasi perbaikan yang realistis dan aplikatif di bagian penutup tanggapan kritis.'],
    materialTitle: 'Memberikan Solusi Konstruktif',
    blocks: [
      { type: 'worked_example', level: 'Dari Kritik → Solusi Nyata', question: 'Masalah: Kemacetan di depan gerbang sekolah saat jam pulang karena penjemput berhenti di bahu jalan. Rumuskan solusi realistis!', steps: ['Usulkan sistem zona drop-off/pick-up teratur + jadwal kepulangan bertahap selisih 5 menit antartingkat kelas + petugas OSIS/satpam pengatur alur!'], answer: 'Kritik kritis selalu ditutup solusi yang bisa dikerjakan!' },
    ],
    activityTitle: 'Latihan: Memberikan Solusi',
    questions: [
      { text: 'Tanggapan kritis yang TIDAK disertai saran/solusi sering terasa kurang lengkap karena...', opts: ['Hanya menunjuk masalah tanpa membantu mencarikan jalan keluar perbaikan ke depan', 'Sudah terlalu sempurna', 'Solusi tidak boleh ditulis', 'Akan jadi berita'], ans: 0, exp: 'Rekomendasi konstruktif menjadikan kritik bernilai tambah nyata.' },
      { text: 'Manakah solusi yang paling REALISTIS untuk mengatasi rendahnya minat kunjungan siswa ke perpustakaan sekolah?', opts: ['Menambah koleksi novel remaja & komik sains populer, menata pojok baca nyaman, serta menggelar tantangan resensi berhadiah sertifikat', 'Mewajibkan siswa tidur di perpustakaan', 'Menutup kantin selamanya', 'Menghapus jam istirahat'], ans: 0, exp: 'Solusi kreatif menyasar akar penyebab (koleksi + suasana + motivasi).' },
      { text: 'Kalimat rekomendasi yang santun biasanya diawali ungkapan...', opts: ['"Sebagai langkah perbaikan, sebaiknya...", "Akan lebih optimal apabila..."', '"Harus dituruti sekarang juga!"', '"Kalau tidak mau, terserah!"', '"Semua salah!"'], ans: 0, exp: 'Ungkapan rekomendasi santun mendorong kolaborasi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-04', subSeq: 5,
    objectives: ['Siswa mampu menulis teks tanggapan kritis utuh (Konteks → Deskripsi → Penilaian & Solusi) dengan bahasa baku efektif.'],
    materialTitle: 'Menulis Teks Tanggapan Kritis',
    blocks: [
      { type: 'list', title: 'Checklist Teks Tanggapan Kritis Kelas 9', items: ['Struktur lengkap: Konteks/Evaluasi → Deskripsi Teks/Fenomena → Penegasan Ulang (Penilaian + Solusi).', 'Ada keseimbangan pujian objektif dan kritik membangun.', 'Setiap penilaian ditopang alasan & bukti konkret, bukan serangan pribadi!'] },
    ],
    activityTitle: 'Latihan: Menulis Tanggapan Kritis',
    questions: [
      { text: 'Urutan langkah menulis teks tanggapan kritis yang sistematis adalah...', opts: ['Amati objek/isu secara utuh → catat fakta kelebihan & kekurangan → susun kerangka Konteks–Deskripsi–Penilaian & Solusi → tulis dan sunting', 'Langsung menulis solusi tanpa tahu masalahnya', 'Menyalin komentar warganet', 'Menulis kritik dulu baru menonton filmnya'], ans: 0, exp: 'Observasi tuntas menjamin kualitas analisis.' },
      { text: 'Kata rujukan, konjungsi antarkalimat, dan istilah evaluatif dalam teks tanggapan kritis berfungsi menjaga...', opts: ['Kepaduan alur logika dan ketajaman penilaian tulisan', 'Jumlah kata minimal 1000', 'Rima akhir bait', 'Efek humor saja'], ans: 0, exp: 'Kepaduan bahasa membuat pembaca mudah mengikuti argumen kritis.' },
      { text: 'Jika sebuah karya/program dinilai memiliki banyak kelebihan dan hanya sedikit kekurangan teknis kecil, simpulan penutup tanggapan sebaiknya...', opts: ['Tetap mengapresiasi keberhasilannya secara keseluruhan sambil menitipkan catatan penyempurnaan kecil tersebut', 'Menyatakan karya itu gagal total', 'Menghapus semua pujian', 'Tidak memberi kesimpulan'], ans: 0, exp: 'Penilaian proporsional mencerminkan kedewasaan berpikir kritis.' },
    ],
  },

  // BAB 5: TEKS RESENSI FIKSI DAN NONFIKSI (5 sub)
  {
    topicCode: 'BIND-SMP9-05', subSeq: 1,
    objectives: ['Siswa mampu menuliskan identitas lengkap karya buku fiksi, nonfiksi, maupun film/pementasan secara akurat.'],
    materialTitle: 'Identitas Karya Fiksi dan Nonfiksi',
    blocks: [
      { type: 'table', title: 'Perbedaan Unsur Identitas Buku vs Film', headers: ['Karya', 'Unsur Identitas Utama'], rows: [
        ['Buku (Fiksi/Nonfiksi)', 'Judul, Pengarang, Penerbit, Kota & Tahun Terbit, Tebal Halaman, ISBN'],
        ['Film / Pementasan', 'Judul, Sutradara, Penulis Skenario, Rumah Produksi, Tahun Rilis, Durasi, Pemeran Utama'],
      ]},
    ],
    activityTitle: 'Latihan: Identitas Karya',
    questions: [
      { text: 'Perbedaan utama antara buku FIKSI dan buku NONFIKSI adalah...', opts: ['Fiksi bersumber dari imajinasi/rekaan (novel, cerpen, dongeng), sedangkan nonfiksi berbasis fakta, ilmu pengetahuan, atau kisah nyata (biografi, ensiklopedia, buku pelajaran)', 'Fiksi selalu tebal, nonfiksi selalu tipis', 'Nonfiksi tidak punya penulis', 'Keduanya sama persis'], ans: 0, exp: 'Sifat imajinatif vs faktual membedakan kriteria penilaiannya.' },
      { text: 'Pada identitas resensi buku terjemahan, selain nama pengarang asli, data penting lain yang patut dicantumkan adalah...', opts: ['Nama penerjemah (karena mutu terjemahan sangat memengaruhi kenyamanan membaca!)', 'Nama pembaca sebelumnya', 'Warna rak toko buku', 'Cuaca saat membeli'], ans: 0, exp: 'Kualitas penerjemahan menjadi bagian penilaian penting buku terjemahan.' },
      { text: 'Penulisan judul buku di dalam kalimat resensi yang sesuai EYD V adalah...', opts: ['Dicetak miring (italic) dengan huruf kapital pada awal kata utama', 'Digarisbawahi huruf kecil semua', 'Ditulis dalam tanda kurung siku', 'Kapital semua hurufnya'], ans: 0, exp: 'Judul buku/film dalam kalimat ditulis miring sesuai EYD V.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-05', subSeq: 2,
    objectives: ['Siswa mampu menyusun ringkasan/sinopsis berbeda pendekatan untuk karya fiksi (alur tanpa spoiler) dan nonfiksi (peta gagasan utama).'],
    materialTitle: 'Ringkasan Karya Fiksi vs Nonfiksi',
    blocks: [
      { type: 'tip', text: 'Ringkasan FIKSI: kenalkan tokoh utama, latar, dan pemantik konflik tanpa membocorkan akhir cerita! Ringkasan NONFIKSI: petakan masalah utama yang dibahas buku, garis besar bab-babnya, dan metode/solusi yang ditawarkan penulis!' },
    ],
    activityTitle: 'Latihan: Ringkasan Resensi',
    questions: [
      { text: 'Saat meringkas buku biografi tokoh (nonfiksi), fokus utama yang paling tepat diceritakan adalah...', opts: ['Latar belakang kehidupan, tantangan perjuangan, kontribusi penting, dan keteladanan sang tokoh', 'Mengarang akhir fiktif', 'Hanya mencantumkan daftar isi mentah tanpa penjelasan', 'Membahas sampulnya saja'], ans: 0, exp: 'Biografi dinilai dari keteladanan dan alur perjuangan nyatanya.' },
      { text: 'Proporsi panjang bagian sinopsis/ringkasan dalam sebuah teks resensi sebaiknya...', opts: ['Ringkas dan proporsional (~25–30% teks) agar porsi utama tetap pada analisis kelebihan, kekurangan, dan penilaian', '95% isi resensi hanya sinopsis panjang tanpa penilaian', 'Hanya 1 kata', 'Menyalin penuh bab 1'], ans: 0, exp: 'Inti resensi adalah ULASAN/EVALUASI, bukan sekadar rangkuman panjang.' },
      { text: 'Mengapa membocorkan twist/akhir misteri dalam sinopsis resensi novel detektif dianggap keliru?', opts: ['Menghilangkan kejutan dan daya tarik utama bagi calon pembaca novel tersebut', 'Karena pembaca sudah hafal', 'Karena dilarang hukum pidana', 'Supaya buku makin mahal'], ans: 0, exp: 'Bebas spoiler adalah etika dasar peresensi fiksi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-05', subSeq: 3,
    objectives: ['Siswa mampu menelaah unsur pembangun dan kualitas karya sesuai jenisnya (unsur intrinsik fiksi vs akurasi data & sistematika nonfiksi).'],
    materialTitle: 'Menelaah Unsur dan Kualitas Karya',
    blocks: [
      { type: 'table', title: 'Kriteria Kualitas Fiksi vs Nonfiksi', headers: ['Karya Fiksi (Novel/Cerpen/Film)', 'Karya Nonfiksi (Sains/Biografi/Panduan)'], rows: [
        ['Keutuhan alur, kedalaman penokohan, & kekuatan konflik', 'Akurasi fakta, kelengkapan data/sumber, & kemutakhiran isi'],
        ['Keindahan gaya bahasa, suasana, & orisinalitas tema', 'Kejelasan sistematika bab, kemudahan bahasa, & kebermanfaatan praktis'],
      ]},
    ],
    activityTitle: 'Latihan: Unsur & Kualitas Karya',
    questions: [
      { text: 'Aspek paling krusial yang WAJIB dinilai saat meresensi buku NONFIKSI ilmiah atau buku kesehatan adalah...', opts: ['Kebenaran fakta, kejelasan rujukan ilmiah, dan keteraturan sistematika penjelasannya', 'Apakah ada tokoh naga atau sihir', 'Keindahan rima puisi', 'Panjang dialog dramanya'], ans: 0, exp: 'Buku nonfiksi bertumpu pada akurasi ilmiah dan manfaat praktis.' },
      { text: 'Sebaliknya, saat meresensi NOVEL FIKSI, kualitas karya terutama ditelaah dari...', opts: ['Kekuatan penokohan, kepaduan alur-konflik, kekayaan latar, gaya bahasa, dan kedalaman amanat', 'Ada tidaknya daftar tabel BPS', 'Jumlah rumus fisika', 'Nomor surat resmi'], ans: 0, exp: 'Unsur intrinsik dan kepiawaian bercerita menjadi tolok ukur mutu fiksi.' },
      { text: 'Membandingkan buku yang diresensi dengan buku lain bertema sejenis dari pengarang sama/berbeda berguna untuk...', opts: ['Menunjukkan posisi keunggulan atau kebaruan buku tersebut di mata pembaca', 'Menjelekkan buku lain', 'Menyalin resensi buku lama', 'Mengubah judul'], ans: 0, exp: 'Perbandingan memberi konteks nilai lebih bagi calon pembaca.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-05', subSeq: 4,
    objectives: ['Siswa mampu melakukan penilaian objektif berbasis standar karya (bebas bias pribadi) dan merumuskan rekomendasi pembaca.'],
    materialTitle: 'Penilaian Objektif dalam Resensi',
    blocks: [
      { type: 'text', text: 'Peresensi profesional bersifat OBJEKTIF: meski kita berteman dengan penulisnya atau menyukai genrenya, kekurangan tetap disampaikan santun dengan bukti; dan meski bukan genre favorit kita, keunggulan kualitas karyanya tetap diakui jujur!' },
    ],
    activityTitle: 'Latihan: Penilaian Objektif Resensi',
    questions: [
      { text: 'Manakah contoh penilaian resensi yang OBJEKTIF (bukan sekadar selera pribadi tanpa dasar)?', opts: ['"Penjelasan teori ekonomi pada bab 2 sangat mudah dicerna karena dilengkapi studi kasus UMKM nyata dan infografis warna."', '"Buku ini jelek karena aku memang tidak suka warna sampul hijau."', '"Buku ini wajib dapat nilai 100 karena penulisnya saudara sepupuku."', '"Aku malas membaca buku tebal jadi pasti membosankan."'], ans: 0, exp: 'Menilai fitur konkret buku dan manfaatnya bagi pemahaman pembaca.' },
      { text: 'Dalam bagian rekomendasi resensi, menyebutkan "cocok untuk siapa" (misalnya pelajar SMP, pemula pemrograman, atau pecinta sastra sejarah) membantu...', opts: ['Pembaca tepat sasaran memilih buku sesuai tingkat usia dan kebutuhannya', 'Membatasi orang membeli', 'Menghapus identitas buku', 'Mengganti pengarang'], ans: 0, exp: 'Rekomendasi audiens sasaran meningkatkan kegunaan resensi.' },
      { text: 'Istilah untuk kalimat penutup resensi yang menegaskan layak tidaknya sebuah buku dimiliki dan dibaca adalah...', opts: ['Rekomendasi / simpulan kelayakan', 'Identitas buku', 'Orientasi', 'Abstrak'], ans: 0, exp: 'Rekomendasi menjadi panduan keputusan akhir pembaca.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-05', subSeq: 5,
    objectives: ['Siswa mampu menyusun teks resensi fiksi atau nonfiksi lengkap dan siap publikasi di blog literasi/mading sekolah.'],
    materialTitle: 'Menyusun Resensi Lengkap Siap Publikasi',
    blocks: [
      { type: 'tip', text: 'Tips judul resensi menarik: pakai kalimat padat yang menyiratkan isi ulasan, contoh: "Menjelajah Sains Sehari-Hari Tanpa Pusing: Ulasan Buku Sains di Dapur Kita".' },
    ],
    activityTitle: 'Latihan: Menyusun Resensi Lengkap',
    questions: [
      { text: 'Urutan struktur lengkap teks resensi buku yang siap dipublikasikan adalah...', opts: ['Judul resensi → Identitas buku → Pendahuluan/orientasi → Sinopsis/ringkasan → Analisis kelebihan & kekurangan → Simpulan & rekomendasi', 'Sinopsis → Judul → Identitas', 'Kelebihan saja tanpa identitas', 'Daftar harga → Sampul'], ans: 0, exp: 'Struktur utuh memudahkan pembaca mengikuti informasi hingga rekomendasi.' },
      { text: 'Menyertakan 1 kutipan kalimat paling berkesan dari buku yang diulas (dengan tanda petik dan nomor halaman) di dalam resensi berguna untuk...', opts: ['Memberi pembaca "cicipan langsung" gaya bahasa dan kedalaman pesan buku tersebut', 'Menyalin seluruh buku', 'Membuat resensi jadi plagiat', 'Mengganti sinopsis'], ans: 0, exp: 'Kutipan singkat bermutu menghidupkan resensi.' },
      { text: 'Kegiatan rutin menulis resensi buku setiap bulan di kelas 9 SMP melatih keterampilan...', opts: ['Membaca kritis, meringkas esensi bacaan, menimbang argumen, dan menulis evaluasi santun', 'Hanya menghafal nomor ISBN', 'Menghindari membaca', 'Menyalin cepat'], ans: 0, exp: 'Resensi memadukan literasi baca tingkat tinggi dan kecakapan menulis kritis.' },
    ],
  },

  // BAB 6: BERITA DAN LITERASI MEDIA (5 sub)
  {
    topicCode: 'BIND-SMP9-06', subSeq: 1,
    objectives: ['Siswa mampu menganalisis kelengkapan isi berita lintas platform (cetak, televisi, portal daring, dan media sosial).'],
    materialTitle: 'Menganalisis Isi Berita Lintas Media',
    blocks: [
      { type: 'text', text: 'Di era digital, berita hadir dalam beragam format: koran cetak (mendalam), TV/video (audiovisual), portal berita daring (cepat & bertautan), dan ringkasan media sosial (sangat singkat — rawan kehilangan konteks!). Pembaca kritis selalu membaca berita UTUH di sumber aslinya, bukan hanya potongan judul atau tangkapan layar!' },
    ],
    activityTitle: 'Latihan: Analisis Isi Berita',
    questions: [
      { text: 'Mengapa membaca HANYA judul berita (headline) atau potongan tangkapan layar (screenshot) di media sosial sangat berisiko menimbulkan salah paham?', opts: ['Karena detail konteks, syarat, data, dan penjelasan narasumber lengkap berada di tubuh berita (dan screenshot mudah diedit!)', 'Karena judul selalu lebih panjang dari isi', 'Karena isi berita tidak penting', 'Karena tidak ada foto'], ans: 0, exp: 'Kebiasaan baca tuntas mencegah salah tafsir dan termakan clickbait.' },
      { text: 'Dalam jurnalisme profesional, prinsip 5W+1H harus dipenuhi secara akurat agar...', opts: ['Tidak terjadi kekosongan informasi penting yang memicu spekulasi liar pembaca', 'Berita terasa seperti puisi', 'Judul bisa dibuat heboh', 'Wartawan tidak perlu wawancara'], ans: 0, exp: 'Kelengkapan unsur berita menjamin kejelasan fakta.' },
      { text: 'Bentuk penyajian berita digital yang memadukan teks singkat, grafik data, ikon, dan alur visual agar mudah dipahami cepat disebut...', opts: ['Infografis berita', 'Prolog drama', 'Cerpen', 'Pantun'], ans: 0, exp: 'Infografis membantu literasi data dalam berita modern.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-06', subSeq: 2,
    objectives: ['Siswa mampu membedakan fakta verifikatif, opini editorial/kolom, dan konten bersponsor (advertorial) pada media massa.'],
    materialTitle: 'Membedakan Fakta, Opini, dan Konten Bersponsor',
    blocks: [
      { type: 'table', title: '3 Jenis Konten di Portal Berita (Jangan Tertukar!)', headers: ['Jenis Konten', 'Ciri Utama'], rows: [
        ['Berita (Hard/Soft News)', 'Laporan peristiwa faktual objektif 5W+1H, berimbang'],
        ['Tajuk Rencana / Kolom Opini', 'Sudut pandang/sikap redaksi atau penulis tamu atas isu hangat (tertera label "Opini/Editorial")'],
        ['Advertorial / Konten Bersponsor', 'Iklan berbayar yang dikemas menyerupai artikel berita (wajib berlabel "Sponsored / Advertorial / Info Produk")'],
      ]},
    ],
    activityTitle: 'Latihan: Fakta, Opini, & Advertorial',
    questions: [
      { text: 'Artikel di portal berita online yang memuji-muji keunggulan satu merek produk tertentu dan di sudut atasnya tertulis label "Advertorial / Sponsored" sebenarnya adalah...', opts: ['Konten iklan berbayar yang dikemas bergaya artikel (bukan berita independen murni)', 'Berita investigasi netral', 'Laporan BPS', 'Putusan pengadilan'], ans: 0, exp: 'Literasi media melatih kita mengenali iklan terselubung/advertorial.' },
      { text: 'Rubrik "Tajuk Rencana" atau "Editorial" di surat kabar berisi...', opts: ['Sikap dan pandangan resmi redaksi media terhadap suatu peristiwa aktual penting (opini redaksi berbasis fakta)', 'Iklan baris rumah', 'Jadwal shalat', 'Kunci jawaban ujian'], ans: 0, exp: 'Editorial memisahkan dengan tegas opini redaksi dari halaman berita faktual.' },
      { text: 'Manakah kalimat berikut yang murni FAKTA objektif dalam sebuah berita?', opts: ['"Badan Pusat Statistik mencatat tingkat pengangguran terbuka turun 0,4 persen dibanding tahun sebelumnya."', '"Kebijakan itu jelas merupakan terobosan paling brilian sepanjang sejarah."', '"Masyarakat seharusnya tidak perlu khawatir berlebihan."', '"Diperkirakan tahun depan semua masalah selesai."'], ans: 0, exp: 'Merujuk data resmi BPS yang dapat diverifikasi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-06', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi bias media (pemilihan diksi memihak, hanya 1 sisi narasumber, framing emosional, dan echo chamber algoritma).'],
    materialTitle: 'Mengidentifikasi Bias Berita dan Algoritma Media',
    blocks: [
      { type: 'text', text: 'BIAS MEDIA terjadi ketika pemberitaan condong memihak satu sisi lewat pilihan kata emosional ("diamuk", "dizalimi", "sukses besar"), memotong kutipan di luar konteks, atau hanya mewawancarai 1 pihak! Selain itu, algoritma media sosial sering menjebak kita di RUANG GEMA (echo chamber) — hanya menampilkan konten yang sesuai selera/keyakinan kita saja!' },
    ],
    activityTitle: 'Latihan: Mengidentifikasi Bias Media',
    questions: [
      { text: 'Sebuah berita tentang sengketa lahan hanya mewawancarai pihak A sepanjang 6 paragraf tanpa pernah meminta konfirmasi atau hak jawab pihak B. Berita ini terindikasi...', opts: ['Bias dan tidak berimbang (melanggar prinsip cover both sides)', 'Sangat objektif dan netral', 'Lengkap sempurna', 'Berbasis ilmiah murni'], ans: 0, exp: 'Ketiadaan narasumber penyeimbang menciptakan bias satu arah.' },
      { text: 'Fenomena algoritma media sosial yang terus-menerus menyodorkan unggahan yang sejalan dengan pandangan kita saja sehingga membuat kita sulit melihat sudut pandang berbeda disebut...', opts: ['Echo chamber (ruang gema) / filter bubble', 'Piramida terbalik', 'Cover both sides', 'Reverse search'], ans: 0, exp: 'Cara keluar dari echo chamber: sengaja membaca beberapa media kredibel yang beragam!' },
      { text: 'Bandingkan dua judul untuk kejadian sama: (1) "Warga Menyampaikan Aspirasi Terkait Proyek Jalan di Kantor Pemda" vs (2) "Warga Murka Kepung Kantor Pemda!". Judul yang lebih NETRAL dan minim bias emosional adalah...', opts: ['Judul (1)', 'Judul (2)', 'Keduanya sensasional', 'Tidak keduanya'], ans: 0, exp: 'Diksi "menyampaikan aspirasi" faktual netral dibanding "murka kepung" yang memancing emosi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-06', subSeq: 4,
    objectives: ['Siswa mampu menerapkan uji kredibilitas sumber informasi (metode SIFT: Stop, Investigate source, Find better coverage, Trace claims).'],
    materialTitle: 'Memeriksa Kredibilitas Sumber (Metode SIFT)',
    blocks: [
      { type: 'visual_cards', title: '4 Langkah Cek Fakta SIFT (Standar Literasi Digital)', cards: [
        { emoji: '✋', label: 'S — Stop', sub: 'Berhenti dulu sebelum klik share atau emosi saat baca kabar heboh!' },
        { emoji: '🔎', label: 'I — Investigate the Source', sub: 'Siapa penerbitnya? Apakah media pers terverifikasi Dewan Pers atau blog anonim?' },
        { emoji: '📰', label: 'F — Find Better Coverage', sub: 'Cari apakah 2–3 media nasional/resmi kredibel juga memberitakannya!' },
        { emoji: '🔗', label: 'T — Trace Claims to Original', sub: 'Lacak kutipan, data, foto, atau video sampai ke sumber aslinya (cek manipulasi AI/deepfake)!' },
      ]},
    ],
    activityTitle: 'Latihan: Kredibilitas Sumber (SIFT)',
    questions: [
      { text: 'Langkah PERTAMA metode cek fakta SIFT ketika melihat berita mengejutkan yang memancing amarah di media sosial adalah...', opts: ['STOP — berhenti sejenak mengendalikan emosi dan tidak buru-buru membagikan', 'Langsung share ke semua grup keluarga', 'Langsung komentar kasar', 'Menyimpan tanpa cek'], ans: 0, exp: 'Jeda sejenak memutus reaksi impulsif penyebaran hoaks.' },
      { text: 'Di era kecerdasan buatan (AI), beredar video tokoh publik berbicara aneh menawarkan hadiah uang tunai padahal gerak bibirnya agak kaku tak wajar. Ini patut dicurigai sebagai...', opts: ['Manipulasi video AI / deepfake untuk penipuan', 'Rekaman sejarah asli', 'Berita Dewan Pers', 'Dokumentasi resmi'], ans: 0, exp: 'Selalu verifikasi klaim hadiah/pernyataan sensasional ke akun terverifikasi dan media resmi.' },
      { text: 'Ciri situs berita pers resmi yang kredibel di Indonesia antara lain...', opts: ['Memiliki susunan redaksi jelas, alamat kantor nyata, terverifikasi Dewan Pers, dan mencantumkan pedoman media siber', 'Tanpa nama penulis/redaksi dan alamat domain aneh penuh iklan penipuan', 'Selalu memakai huruf kapital di seluruh judul', 'Tidak pernah meralat kesalahan'], ans: 0, exp: 'Transparansi redaksi menandakan akuntabilitas pers.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-06', subSeq: 5,
    objectives: ['Siswa mampu membandingkan informasi dari berbagai sumber (lateral reading) untuk merumuskan kesimpulan paling akurat.'],
    materialTitle: 'Membandingkan Informasi (Lateral Reading)',
    blocks: [
      { type: 'tip', text: 'Gunakan teknik LATERAL READING (membaca menyamping): buka tab baru untuk mencari tahu reputasi situs tersebut dan membandingkan beritanya dengan 2–3 sumber resmi lain — jangan hanya percaya tampilan situs yang rapi!' },
    ],
    activityTitle: 'Latihan: Membandingkan Informasi',
    questions: [
      { text: 'Teknik "Lateral Reading" (membaca menyamping) saat mengecek kebenaran artikel di sebuah situs asing berarti...', opts: ['Membuka tab pencarian baru untuk mengecek reputasi situs itu dan membandingkan beritanya di sumber tepercaya lain', 'Memiringkan layar HP ke samping', 'Hanya membaca tampilan warna situs tersebut', 'Membaca dari kanan ke kiri'], ans: 0, exp: 'Pemeriksa fakta profesional mengecek reputasi sumber dari luar situs itu sendiri.' },
      { text: 'Tiga media resmi melaporkan jumlah peserta lomba 250 orang sesuai rilis panitia, sedangkan 1 unggahan akun anonim menyebut 2.500 orang tanpa bukti. Kesimpulan paling akurat adalah...', opts: ['Merujuk angka 250 orang karena konsisten dari rilis resmi panitia dan terkonfirmasi beberapa media kredibel', 'Memilih 2.500 karena lebih seru', 'Merata-ratakan keduanya jadi 1.375', 'Tidak percaya panitia'], ans: 0, exp: 'Konvergensi sumber primer & media kredibel menentukan akurasi fakta.' },
      { text: 'Manfaat utama memiliki kecakapan literasi media bagi pelajar kelas 9 SMP adalah...', opts: ['Menjadi konsumen sekaligus produsen informasi digital yang cerdas, kritis, tahan hoaks, dan beretika', 'Bisa membuat berita palsu', 'Takut memakai internet', 'Berhenti membaca berita'], ans: 0, exp: 'Literasi media adalah benteng kecerdasan warga digital.' },
    ],
  },

  // BAB 7: CERPEN, DRAMA, DAN LEGENDA (6 sub)
  {
    topicCode: 'BIND-SMP9-07', subSeq: 1,
    objectives: ['Siswa mampu membandingkan unsur intrinsik dan struktur cerpen, drama, serta cerita rakyat/legenda Nusantara.'],
    materialTitle: 'Unsur Intrinsik Cerpen, Drama, dan Legenda',
    blocks: [
      { type: 'table', title: 'Perbandingan Cerpen, Drama, dan Legenda', headers: ['Genre', 'Ciri Khas Utama'], rows: [
        ['Cerpen', 'Prosa modern singkat, 1 konflik utama fokus, pengarang dikenal jelas'],
        ['Drama', 'Berbentuk dialog (wawancang) & kramagung untuk pementasan panggung'],
        ['Legenda (Cerita Rakyat)', 'Warisan tradisi lisan anonim (tanpa pengarang tunggal), mengisahkan asal-usul tempat/fenomena lokal & sarat nilai moral — BUKAN fakta sejarah ilmiah!'],
      ]},
    ],
    activityTitle: 'Latihan: Cerpen, Drama, & Legenda',
    questions: [
      { text: 'Perbedaan mendasar antara LEGENDA (cerita rakyat) dan CERPEN modern antara lain...', opts: ['Legenda berkembang secara lisan turun-temurun, bersifat anonim (pengarang tak diketahui), dan sering berkisah asal-usul suatu tempat; cerpen ditulis modern oleh pengarang tertentu', 'Legenda selalu dicetak majalah baru', 'Cerpen tidak punya tokoh', 'Legenda adalah laporan sejarah ilmiah'], ans: 0, exp: 'Legenda adalah folklor (karya budaya lisan), berbeda dari historiografi ilmiah.' },
      { text: 'Unsur intrinsik yang hadir di ketiga karya sastra (cerpen, drama, maupun legenda) adalah...', opts: ['Tema, tokoh & penokohan, latar, alur, konflik, dan amanat', 'Tesis dan daftar pustaka', 'Kramagung panggung', 'Alat dan bahan'], ans: 0, exp: 'Ketiganya merupakan sastra naratif/imajinatif.' },
      { text: 'Dalam teks cerpen modern, bagian akhir cerita di mana pengarang membiarkan pembaca ikut merenungkan sendiri kelanjutan nasib tokoh disebut akhir...', opts: ['Terbuka (open ending)', 'Tertutup', 'Prolog', 'Abstrak'], ans: 0, exp: 'Open ending mengajak pembaca aktif menafsirkan makna cerita.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-07', subSeq: 2,
    objectives: ['Siswa mampu menginterpretasikan makna simbolik, ironi cerita, dan pesan tersirat di balik peristiwa cerpen, drama, dan legenda.'],
    materialTitle: 'Interpretasi Makna Simbolik dan Tersirat',
    blocks: [
      { type: 'text', text: 'Pada jenjang kelas 9, membaca sastra melampaui sekadar tahu "apa yang terjadi" — kita menafsirkan MAKNA SIMBOLIK! Misalnya benda sederhana dalam cerpen (jam tua rusak, payung sobek, pohon beringin tumbang) sering menjadi simbol kenangan, perlindungan orang tua, atau perubahan zaman.' },
    ],
    activityTitle: 'Latihan: Interpretasi Makna Sastra',
    questions: [
      { text: 'Dalam sebuah cerpen, tokoh utama menyimpan rapi sepasang sepatu lusuh pemberian almarhum ayahnya meski ia sudah mampu membeli sepatu baru. Sepatu lusuh tersebut menyimbolkan...', opts: ['Kenangan kasih sayang, ketulusan perjuangan ayah, dan pengingat agar tetap rendah hati', 'Bahwa ia tidak punya uang lagi', 'Bahwa sepatu itu mahal harganya', 'Sekadar barang rongsokan'], ans: 0, exp: 'Simbolisme sastra memberi lapisan makna emosional mendalam.' },
      { text: 'Mengapa legenda rakyat (seperti Malin Kundang atau Sangkuriang) tetap diceritakan turun-temurun meski memuat unsur keajaiban di luar nalar?', opts: ['Karena di balik kisahnya tersimpan pesan moral dan pendidikan karakter (bakti pada orang tua, jujur, rendah hati)', 'Untuk menggantikan pelajaran IPA', 'Agar dipercaya sebagai laporan berita', 'Karena tidak ada cerita lain'], ans: 0, exp: 'Nilai simbolik dan moral adalah inti kekuatan folklor.' },
      { text: 'Interpretasi sastra yang baik harus selalu...', opts: ['Didukung petunjuk/bukti teks cerita (bukan mengarang bebas tanpa kaitan teks)', 'Sama persis 1 kata di seluruh dunia', 'Mengabaikan isi cerita', 'Hanya menebak dari sampul'], ans: 0, exp: 'Tafsiran dapat beragam namun selalu berakar pada bukti teks.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-07', subSeq: 3,
    objectives: ['Siswa mampu menganalisis nilai sosial, budaya, moral, dan kearifan lokal dalam karya sastra Nusantara.'],
    materialTitle: 'Nilai Sosial dan Budaya dalam Karya Sastra',
    blocks: [
      { type: 'tip', text: 'Karya sastra adalah cermin masyarakat zamannya! Membaca cerpen, drama, dan cerita rakyat Nusantara membantu kita memahami adat istiadat, tata krama, gotong royong, dan pergulatan sosial budaya berbagai daerah Indonesia.' },
    ],
    activityTitle: 'Latihan: Nilai Sosial & Budaya Sastra',
    questions: [
      { text: 'Kutipan cerpen yang menggambarkan tradisi warga kampung membawa makanan sendiri-sendiri untuk makan bersama (kenduri/slametan) merayakan panen menonjolkan nilai...', opts: ['Budaya dan sosial (kebersamaan serta rasa syukur)', 'Politik internasional', 'Teknologi nuklir', 'Kompetisi individual'], ans: 0, exp: 'Tradisi lokal mencerminkan nilai budaya dan kohesi sosial.' },
      { text: 'Keterkaitan antara latar belakang pengarang, kondisi zaman, serta norma masyarakat dengan isi sebuah cerpen disebut unsur...', opts: ['Ekstrinsik', 'Intrinsik', 'Kramagung', 'Tipografi'], ans: 0, exp: 'Unsur ekstrinsik berada di luar teks namun memengaruhi terciptanya karya.' },
      { text: 'Apabila dalam sebuah cerita rakyat lama ada nilai yang sudah tidak relevan lagi dengan kesetaraan zaman modern, sikap pembaca kritis kelas 9 adalah...', opts: ['Memahaminya sesuai konteks zaman dulu, mengambil nilai luhurnya (kejujuran, keberanian, empati), dan menyaringnya secara bijak', 'Meniru mentah-mentah tanpa berpikir', 'Membenci semua cerita daerah', 'Menghapus sejarah sastra'], ans: 0, exp: 'Pembaca kritis mengapresiasi tradisi secara kontekstual dan reflektif.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-07', subSeq: 4,
    objectives: ['Siswa mampu mengevaluasi dampak pemilihan sudut pandang (orang pertama vs ketiga) terhadap kedalaman emosi dan efek cerita.'],
    materialTitle: 'Efek Sudut Pandang dalam Narasi',
    blocks: [
      { type: 'text', text: 'Sudut pandang mengubah total rasa sebuah cerita! Sudut pandang "Aku" (orang pertama) membuat pembaca merasa SANGAT DEKAT dan intim dengan perasaan tokoh, tetapi terbatas hanya tahu apa yang dialami "Aku". Sudut pandang "Ia/Dia serbatahu" (orang ketiga) memberi pengarang kebebasan menampilkan rahasia batin semua tokoh sekaligus!' },
    ],
    activityTitle: 'Latihan: Sudut Pandang Sastra',
    questions: [
      { text: 'Jika seorang penulis cerpen ingin pembaca merasakan langsung ketegangan, rahasia batin, dan penyesalan mendalam dari satu tokoh utama secara intim, sudut pandang paling kuat adalah...', opts: ['Orang pertama pelaku utama ("Aku")', 'Orang ketiga pengamat jarak jauh', 'Tanpa tokoh', 'Bentuk tabel data'], ans: 0, exp: 'Sudut pandang "Aku" menciptakan kedekatan emosional langsung.' },
      { text: 'Sebaliknya, jika penulis ingin menceritakan konflik sebuah keluarga di mana pembaca bisa melihat isi pikiran ayah, ibu, dan anak sekaligus secara berimbang, sudut pandang paling tepat adalah...', opts: ['Orang ketiga serbatahu (omniscient)', 'Orang pertama pelaku sampingan', 'Orang kedua', 'Monolog tunggal'], ans: 0, exp: 'Narator serbatahu leluasa berpindah memasuki batin setiap tokoh.' },
      { text: 'Kesalahan sudut pandang yang sering terjadi pada penulis pemula dan perlu disunting adalah...', opts: ['Tiba-tiba melompat tidak konsisten dari "aku" menjadi "ia" untuk tokoh yang sama tanpa alasan di tengah paragraf', 'Konsisten memakai "aku" dari awal sampai akhir', 'Menggunakan dialog antar tokoh', 'Memakai latar tempat jelas'], ans: 0, exp: 'Konsistensi sudut pandang menjaga kenyamanan pembaca.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-07', subSeq: 5,
    objectives: ['Siswa mampu mengapresiasi karya sastra melalui pembacaan ekspresif, alih wahana (cerpen → drama/komik), dan diskusi apresiasi.'],
    materialTitle: 'Apresiasi dan Alih Wahana Karya Sastra',
    blocks: [
      { type: 'text', text: 'APRESIASI sastra adalah penghargaan mendalam melalui kegiatan menikmati, memahami, menanggapi, hingga MENGALIHWAHANAKAN karya — misalnya mengubah cerpen menjadi naskah drama pementasan, podcast audio drama, komik strip, atau film pendek!' },
    ],
    activityTitle: 'Latihan: Apresiasi Sastra',
    questions: [
      { text: 'Mengubah sebuah cerpen menjadi naskah pementasan drama kelas atau film pendek disebut kegiatan...', opts: ['Alih wahana (adaptasi media karya sastra)', 'Plagiarisme', 'Parafrasa berita', 'Sensus'], ans: 0, exp: 'Alih wahana memindahkan karya dari satu wahana/media seni ke media lain secara kreatif.' },
      { text: 'Tingkat apresiasi sastra paling mendalam (kreatif-produktif) ditunjukkan oleh siswa yang...', opts: ['Tidak hanya membaca, tetapi juga menghayati makna, berdiskusi kritis, dan terinspirasi melahirkan karya kreatifnya sendiri', 'Hanya membaca judul lalu menutup buku', 'Menghafal halaman tanpa paham cerita', 'Merobek buku cerita'], ans: 0, exp: 'Apresiasi aktif melahirkan empati sekaligus kreativitas.' },
      { text: 'Saat mementaskan drama adaptasi cerita rakyat/cerpen di sekolah, unsur artistik pendukung di luar naskah dialog meliputi...', opts: ['Tata panggung, kostum/rias, tata lampu, dan iringan musik/efek suara', 'Hanya daftar absen', 'Rumus matematika', 'Nilai ulangan'], ans: 0, exp: 'Unsur artistik menghidupkan latar dan suasana pementasan.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-07', subSeq: 6,
    objectives: ['Siswa mampu menulis karya sastra (cerpen atau naskah drama pendek) orisinal yang utuh, berkarakter kuat, dan tersunting rapi.'],
    materialTitle: 'Menulis Karya Sastra Orisinal',
    blocks: [
      { type: 'list', title: '5 Kunci Cerpen/Drama Kelas 9 Berkelas', items: ['1. Buka dengan "hook" adegan langsung di tengah peristiwa (in medias res), jangan selalu "Pada suatu hari...".', '2. Bangun karakter unik (punya keinginan kuat + rintangan nyata).', '3. Hidupkan dialog & teknik "show, don\'t tell".', '4. Hadirkan titik balik klimaks yang bermakna.', '5. Tutup dengan resolusi yang membekas (bukan ceramah menggurui)!'] },
    ],
    activityTitle: 'Latihan: Menulis Karya Sastra',
    questions: [
      { text: 'Teknik membuka cerpen langsung di tengah ketegangan adegan ("Bel ujian berbunyi tepat saat sepatuku putus di depan gerbang...") disebut teknik...', opts: ['In medias res (langsung menarik perhatian pembaca sejak kalimat pertama!)', 'Epilog', 'Daftar isi', 'Koda'], ans: 0, exp: 'Pembukaan langsung ke aksi membuat pembaca seketika penasaran.' },
      { text: 'Agar akhir cerpen terasa menyentuh dan tidak terkesan menggurui, penulis sebaiknya...', opts: ['Membiarkan pesan moral terpancar alami dari keputusan dan perubahan sikap tokoh', 'Menulis "Jadi kesimpulannya kita harus baik ya teman-teman!"', 'Memotong cerita sebelum konflik selesai tanpa makna', 'Mengubah tema tiba-tiba'], ans: 0, exp: 'Amanat tersirat lewat aksi tokoh jauh lebih membekas.' },
      { text: 'Penulisan kalimat langsung dalam dialog cerpen yang BENAR sesuai EYD V adalah...', opts: ['"Kita masih punya waktu sepuluh menit," kata Alya sambil merapikan catatan.', '"Kita masih punya waktu sepuluh menit." Kata Alya.', 'Kita masih punya waktu sepuluh menit, "kata Alya."', '"Kita masih punya waktu sepuluh menit", kata Alya.'], ans: 0, exp: 'Koma berada DI DALAM tanda petik penutup sebelum kata pengiring huruf kecil.' },
    ],
  },

  // BAB 8: PUISI DAN PUISI RAKYAT (5 sub)
  {
    topicCode: 'BIND-SMP9-08', subSeq: 1,
    objectives: ['Siswa mampu menganalisis diksi, majas, dan struktur perbandingan antara puisi modern dan puisi rakyat (pantun, gurindam, syair).'],
    materialTitle: 'Analisis Diksi & Majas pada Puisi dan Puisi Rakyat',
    blocks: [
      { type: 'table', title: 'Perbandingan Puisi Rakyat vs Puisi Modern', headers: ['Jenis', 'Aturan Bentuk & Ciri Khas'], rows: [
        ['Pantun', '4 baris/bait, rima a-b-a-b, baris 1–2 sampiran, baris 3–4 isi'],
        ['Gurindam', '2 baris/bait, rima a-a, hubungan SEBAB (baris 1) → AKIBAT/nasihat (baris 2)'],
        ['Syair', '4 baris/bait, rima a-a-a-a, SEMUA baris adalah isi (tanpa sampiran, bercerita/nasihat)'],
        ['Puisi Modern', 'Bebas aturan baris/rima, kaya majas (metafora, personifikasi, ironi, simbol) & citraan'],
      ]},
    ],
    activityTitle: 'Latihan: Diksi & Majas Puisi',
    questions: [
      { text: '"Apabila terpelihara lidah / niscaya dapat daripadanya faedah." Bait puisi rakyat 2 larik bersajak a-a berpola sebab-akibat ini adalah...', opts: ['Gurindam', 'Pantun', 'Syair', 'Puisi bebas'], ans: 0, exp: 'Gurindam (seperti Gurindam Dua Belas Raja Ali Haji) terdiri 2 larik a-a sebab-akibat.' },
      { text: 'Majas yang menyindir secara halus dengan merendahkan diri sendiri ("Silakan mampir ke gubuk sederhana kami" padahal rumahnya besar) disebut...', opts: ['Litotes', 'Hiperbola', 'Personifikasi', 'Simile'], ans: 0, exp: 'Litotes = merendah demi kesantunan (lawan dari hiperbola).' },
      { text: 'Perbedaan utama SYAIR dibandingkan PANTUN yang sama-sama terdiri dari 4 baris tiap bait adalah...', opts: ['Syair bersajak a-a-a-a dan keempat barisnya semua adalah isi; pantun bersajak a-b-a-b dengan baris 1–2 sampiran', 'Syair hanya 2 baris', 'Pantun tidak punya sampiran', 'Syair tidak boleh berima'], ans: 0, exp: 'Syair melanjutkan isi/cerita dari baris 1 sampai 4 tanpa sampiran.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-08', subSeq: 2,
    objectives: ['Siswa mampu membedakan makna tersurat (eksplisit) dan makna tersirat (implisit/simbolik) dalam bait puisi.'],
    materialTitle: 'Makna Tersurat dan Tersirat dalam Puisi',
    blocks: [
      { type: 'text', text: 'MAKNA TERSURAT adalah arti langsung yang tertulis jelas oleh kata-katanya, sedangkan MAKNA TERSIRAT adalah makna tersembunyi/mendalam di balik metafora dan simbol penyair. Contoh: "Di ujung jalan sunyi, langkah tua itu tak pernah berhenti menabur benih" → tersirat: perjuangan guru/orang tua yang tanpa lelah menanamkan ilmu & kebaikan!' },
    ],
    activityTitle: 'Latihan: Makna Tersurat & Tersirat',
    questions: [
      { text: 'Larik puisi: "Meski hujan keraguan jatuh deras, perahu tekadku tetap membelah ombak menuju dermaga cita." Makna TERSIRAT "perahu tekad" dan "dermaga cita" adalah...', opts: ['Keteguhan usaha diri dan tujuan impian masa depan yang ingin dicapai', 'Perahu kayu sungguhan di pelabuhan ikan', 'Cuaca hujan saat berlayar', 'Harga tiket kapal'], ans: 0, exp: 'Metafora pelayaran melambangkan perjuangan meraih cita-cita.' },
      { text: 'Untuk menemukan makna TERSIRAT sebuah puisi, pembaca perlu memperhatikan...', opts: ['Konteks keseluruhan bait, kata lambang/konotasi, majas, dan judul puisi', 'Hanya 1 kata di tengah saja', 'Jenis font cetakan', 'Jumlah spasi'], ans: 0, exp: 'Judul dan seluruh rangkaian diksi saling mengunci makna batin puisi.' },
      { text: 'Pantun: "Berakit-rakit ke hulu, berenang-renang ke tepian / Bersakit-sakit dahulu, bersenang-senang kemudian." Makna pesan yang terungkap jelas pada larik 3–4 adalah...', opts: ['Bersedia bekerja keras dan berjuang di awal untuk memetik keberhasilan di masa depan', 'Ajakan berenang di sungai setiap hari', 'Membuat rakit bambu', 'Bermain air'], ans: 0, exp: 'Isi pantun menekankan ketekunan dan kerja keras.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-08', subSeq: 3,
    objectives: ['Siswa mampu menginterpretasikan pesan, sikap penyair (nada), dan relevansi puisi terhadap kehidupan sosial masa kini.'],
    materialTitle: 'Interpretasi Pesan dan Relevansi Puisi',
    blocks: [
      { type: 'tip', text: 'Puisi-puisi terkenal Indonesia (seperti karya Chairil Anwar, Sapardi Djoko Damono, W.S. Rendra, atau Taufiq Ismail) sering memuat pesan sosial, cinta tanah air, kemanusiaan, dan perenungan hidup yang terus relevan lintas zaman!' },
    ],
    activityTitle: 'Latihan: Interpretasi Pesan Puisi',
    questions: [
      { text: 'Puisi yang menggambarkan gedung-gedung pencakar langit makin tinggi sementara pohon-pohon hijau makin menghilang dan burung kehilangan sarang menyiratkan kritik sosial bernada...', opts: ['Prihatin / menyindir pembangunan yang mengabaikan kelestarian alam', 'Gembira dan merayakan polusi', 'Lucu menghibur', 'Acuh tak acuh'], ans: 0, exp: 'Kontras gedung beton vs hilangnya pohon menyiratkan keprihatinan ekologis.' },
      { text: 'Sikap penyair terhadap pembacanya (misalnya menggugah semangat, menasihati lembut, menyindir tajam, atau merenung syahdu) disebut...', opts: ['Nada (tone)', 'Rima', 'Tipografi', 'Sampiran'], ans: 0, exp: 'Nada adalah sikap penyair kepada pembaca; suasana adalah efek rasa di hati pembaca.' },
      { text: 'Apabila dua siswa berbeda sedikit dalam menafsirkan detail simbol sebuah puisi modern, bagaimana guru/pembaca menyikapinya?', opts: ['Menghargai kedua tafsiran selama keduanya masuk akal dan didukung bukti larik dalam teks puisi', 'Menyalahkan semuanya', 'Menganggap puisi tidak bermakna', 'Hanya membenarkan tebakan tanpa bukti'], ans: 0, exp: 'Puisi bersifat polisemi (kaya tafsir) namun tetap terikat bukti teks.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-08', subSeq: 4,
    objectives: ['Siswa mampu menulis puisi modern maupun puisi rakyat (pantun/gurindam) yang orisinal, kuat diksinya, dan tepat maknanya.'],
    materialTitle: 'Menulis Puisi Modern dan Puisi Rakyat',
    blocks: [
      { type: 'worked_example', level: 'Tips Cepat Menulis Pantun Bermutu', question: 'Bagaimana urutan menulis pantun yang cepat dan tidak terkesan dipaksakan?', steps: ['Tulis ISI dulu (baris 3 dan 4) agar pesan & rima akhirnya kuat!', 'Baru buat SAMPIRAN (baris 1 dan 2) yang bunyi akhirnya selaras a-b dengan baris 3–4 dan memakai gambaran alam/budaya sekitar!'], answer: 'Tulis Isi (baris 3–4) dulu, lalu rangkai Sampiran (baris 1–2)!' },
    ],
    activityTitle: 'Latihan: Menulis Puisi & Puisi Rakyat',
    questions: [
      { text: 'Trik paling praktis saat menciptakan PANTUN agar pesan tidak melenceng demi mengejar rima adalah...', opts: ['Merumuskan larik isi (baris 3 dan 4) terlebih dahulu, baru menyusun larik sampiran (baris 1 dan 2) yang selaras rimanya', 'Menulis sampiran acak lalu bingung mencari isi', 'Menghapus rima a-b-a-b', 'Membuat 2 baris saja'], ans: 0, exp: 'Mengunci isi terlebih dahulu menjamin kekuatan pesan pantun.' },
      { text: 'Lengkapilah gurindam berikut agar rima a-a dan hubungan sebab-akibatnya tepat: "Jika hendak mengenal orang berilmu / ..."', opts: ['"Bertanya dan belajar tiadalah jemu."', '"Pergilah jalan-jalan ke pasar baru."', '"Minumlah air putih setiap waktu."', '"Beli sepatu warna biru."'], ans: 0, exp: 'Berima "-u" dan secara logis menjelaskan ciri orang berilmu (tekun belajar).' },
      { text: 'Dalam menulis puisi modern, mengganti kalimat biasa "Aku sangat merindukan kampung halamanku" menjadi "Aroma hujan di tanah desa terus memanggil langkahku pulang" meningkatkan kekuatan puisi lewat...', opts: ['Citraan penciuman, personifikasi, dan diksi konkret yang menggugah imajinasi', 'Menghilangkan makna', 'Memakai bahasa gaul', 'Menambah angka'], ans: 0, exp: 'Detail indrawi dan majas menghidupkan emosi puisi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-08', subSeq: 5,
    objectives: ['Siswa mampu membacakan puisi (pembacaan panggung / musikalisasi puisi) dengan penghayatan, jeda, modulasi suara, dan ekspresi tepat.'],
    materialTitle: 'Membacakan Puisi & Musikalisasi Puisi',
    blocks: [
      { type: 'text', text: 'Selain baca puisi tunggal & deklamasi, siswa kelas 9 juga mengenal MUSIKALISASI PUISI: menyajikan puisi dengan iringan instrumen musik atau menjadikannya lagu TANPA mengubah teks asli puisi — musik berfungsi memperkuat suasana batin (syahdu, semangat, haru), bukan menenggelamkan suara puisi!' },
    ],
    activityTitle: 'Latihan: Membacakan Puisi',
    questions: [
      { text: 'Prinsip utama dalam MUSIKALISASI PUISI yang benar adalah...', opts: ['Musik hadir selaras memperkuat suasana batin puisi dan teks asli puisi TIDAK diubah sembarangan', 'Volume musik jauh lebih keras sampai lirik puisi tidak terdengar', 'Mengganti seluruh kata puisi', 'Semua puisi sedih diiringi musik disko cepat'], ans: 0, exp: 'Keselarasan irama musik dengan suasana puisi adalah ruh musikalisasi.' },
      { text: 'Perubahan naik-turun nada, keras-lembut volume, serta cepat-lambat tempo suara saat membacakan puisi sesuai perubahan emosi antar-bait disebut...', opts: ['Modulasi dan dinamika vokal (intonasi ekspresif)', 'Monoton', 'Kramagung', 'Tipografi'], ans: 0, exp: 'Dinamika vokal mencegah pembacaan terasa datar/membosankan.' },
      { text: 'Sebelum membacakan puisi karya penyair lain di atas panggung, hal penting yang wajib dilakukan pembaca adalah...', opts: ['Memahami makna utuh dan suasana puisi, memberi tanda jeda (/ dan //), serta menyebut judul dan nama penyairnya', 'Langsung membaca cepat tanpa tahu artinya', 'Mengaku sebagai pengarangnya', 'Berbisik pelan'], ans: 0, exp: 'Menyebut nama penyair adalah etika penghargaan hak cipta karya.' },
    ],
  },

  // BAB 9: ARGUMENTASI DAN PRESENTASI (5 sub)
  {
    topicCode: 'BIND-SMP9-09', subSeq: 1,
    objectives: ['Siswa mampu menyusun argumen logis menggunakan pola penalaran deduktif, induktif, dan analogi serta bebas sesat pikir.'],
    materialTitle: 'Menyusun Argumen Logis (Deduksi, Induksi, Analogi)',
    blocks: [
      { type: 'table', title: '3 Pola Penalaran Argumen SMP Kelas 9', headers: ['Pola Penalaran', 'Alur Logika & Contoh'], rows: [
        ['Deduktif (Umum → Khusus)', 'Aturan umum dulu → diterapkan ke kasus khusus ("Semua plastik non-organik sulit terurai. Botol ini plastik. Jadi botol ini sulit terurai.")'],
        ['Induktif (Khusus → Umum)', 'Kumpulkan beberapa fakta khusus → tarik simpulan umum'],
        ['Sebab-Akibat (Kausal)', 'Menjelaskan rantai penyebab yang memicu dampak tertentu secara logis'],
      ]},
    ],
    activityTitle: 'Latihan: Menyusun Argumen Logis',
    questions: [
      { text: 'Paragraf argumen yang memaparkan fakta pengurangan sampah di Sekolah A, Sekolah B, dan Sekolah C setelah program bawa tumbler, lalu menyimpulkan di kalimat terakhir bahwa program bawa tumbler efektif diterapkan di sekolah lain menggunakan pola penalaran...', opts: ['Induktif (khusus → umum)', 'Deduktif', 'Ad hominem', 'Sirkular'], ans: 0, exp: 'Beberapa contoh khusus ditarik menjadi generalisasi simpulan di akhir.' },
      { text: 'Sebaliknya, memulai dengan prinsip umum di awal paragraf lalu menjabarkannya ke bukti-bukti spesifik adalah pola...', opts: ['Deduktif (umum → khusus)', 'Induktif', 'Acak', 'Kronologis'], ans: 0, exp: 'Deduktif menaruh gagasan/premis umum di awal.' },
      { text: 'Sesat pikir "Bandwagon" (ikut-ikutan mayoritas: "Semua teman beli sepatu ini, berarti pasti yang terbaik!") lemah secara logis karena...', opts: ['Popularitas/banyaknya pengikut tidak otomatis membuktikan kebenaran atau kualitas terbaik', 'Mayoritas selalu benar 100%', 'Harga sepatu pasti murah', 'Itu adalah bukti ilmiah'], ans: 0, exp: 'Kebenaran argumen ditentukan bukti dan nalar, bukan sekadar tren ramai.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-09', subSeq: 2,
    objectives: ['Siswa mampu memperkuat presentasi argumen dengan 4 jenis bukti pendukung (data statistik, pendapat ahli, hasil riset/pengamatan, dan studi kasus nyata).'],
    materialTitle: 'Bukti Pendukung Argumen',
    blocks: [
      { type: 'visual_cards', title: '4 Jenis Bukti Pembuat Argumen Tak Terbantahkan', cards: [
        { emoji: '📊', label: 'Data & Statistik Resmi', sub: 'Angka dari BPS, Kemenkes, BMKG, atau survei kelas' },
        { emoji: '👩‍🔬', label: 'Pendapat Pakar / Ahli', sub: 'Kutipan ilmuwan, dokter, guru, atau praktisi bidang terkait' },
        { emoji: '🔬', label: 'Hasil Observasi / Eksperimen', sub: 'Temuan langsung dari proyek atau pengamatan kelompokmu' },
        { emoji: '🌍', label: 'Studi Kasus Nyata', sub: 'Contoh sekolah/kota lain yang sudah berhasil menerapkannya!' },
      ]},
    ],
    activityTitle: 'Latihan: Bukti Pendukung',
    questions: [
      { text: 'Untuk meyakinkan kepala sekolah agar mendukung usulan "Taman Vertikal (Vertical Garden) di Dinding Koridor", bukti pendukung PALING KUAT adalah...', opts: ['Contoh keberhasilan sekolah lain, rincian anggaran hemat dari botol daur ulang, serta data penurunan suhu ruang oleh tanaman', 'Hanya bilang "Pasti keren banget, Pak!"', 'Mengancam tidak ikut belajar', 'Tanpa persiapan data'], ans: 0, exp: 'Studi kasus + rincian biaya + manfaat terukur meyakinkan pengambil keputusan.' },
      { text: 'Pendapat seorang tokoh populer/artis tentang masalah medis berat BUKAN merupakan bukti ahli yang kuat karena...', opts: ['Popularitas tidak menggantikan keahlian ilmiah resmi di bidang kedokteran/kesehatan', 'Artis tidak boleh bicara', 'Dokter tidak terkenal', 'Semua pendapat sama validnya'], ans: 0, exp: 'Otoritas ahli harus sesuai bidang ilmunya.' },
      { text: 'Mencantumkan tahun dan nama lembaga sumber data di bagian bawah grafik slide presentasi berguna untuk...', opts: ['Menunjukkan transparansi, kemutakhiran, dan kredibilitas bukti', 'Membuat slide penuh teks', 'Menyembunyikan angka', 'Sekadar hiasan'], ans: 0, exp: 'Atribusi data menaikkan kepercayaan audiens.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-09', subSeq: 3,
    objectives: ['Siswa mampu menyampaikan usulan program atau gagasan secara persuasif, terstruktur, dan menghargai forum.'],
    materialTitle: 'Menyampaikan Usul secara Persuasif dan Santun',
    blocks: [
      { type: 'formula', name: 'Pola Menyampaikan Usul Kelas 9 (M-U-M)', expression: '1. Masalah yang Diamati  →  2. Usulan Konkret  →  3. Manfaat bagi Bersama', note: 'Contoh: "Melihat banyak buku pelajaran lama menumpuk setelah lulus (Masalah), saya mengusulkan program Hibah Buku Kakak Kelas ke adik kelas (Usulan) agar hemat biaya orang tua sekaligus ramah lingkungan (Manfaat)!"' },
    ],
    activityTitle: 'Latihan: Menyampaikan Usul',
    questions: [
      { text: 'Mengapa menyoroti MANFAAT BAGI BERSAMA saat mengajukan usul dalam rapat OSIS jauh lebih mudah diterima daripada hanya menonjolkan keinginan pribadi?', opts: ['Karena peserta forum terdorong mendukung gagasan yang menguntungkan seluruh komunitas sekolah', 'Karena manfaat bersama tidak perlu biaya', 'Karena pendapat pribadi dilarang', 'Agar rapat cepat bubar'], ans: 0, exp: 'Usulan berorientasi kepentingan umum membangun dukungan luas.' },
      { text: 'Kalimat pembuka pengajuan usul yang paling santun setelah dipersilakan moderator adalah...', opts: ['"Terima kasih atas kesempatan yang diberikan, Moderator. Saya ingin mengajukan usulan terkait..."', '"Dengarkan saya saja, yang lain diam!"', '"Usul tadi jelek, mending punyaku!"', '"Langsung saja setujui ideku!"'], ans: 0, exp: 'Menghormati moderator dan forum menciptakan suasana produktif.' },
      { text: 'Jika usulan kita belum terpilih dalam musyawarah rapat kelas, sikap demokratis dan berjiwa besar adalah...', opts: ['Menerima keputusan bersama dengan lapang dada dan tetap ikut menyukseskan program yang disepakati', 'Memboikot kegiatan kelas', 'Marah pada ketua kelas', 'Keluar dari kelompok'], ans: 0, exp: 'Sportivitas bermusyawarah adalah ciri warga negara demokratis.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-09', subSeq: 4,
    objectives: ['Siswa mampu mengevaluasi beberapa alternatif solusi (analisis untung-rugi) untuk memilih solusi terbaik.'],
    materialTitle: 'Memberikan Solusi Berbasis Analisis Alternatif',
    blocks: [
      { type: 'text', text: 'Pemecah masalah yang hebat tidak langsung berhenti pada 1 ide pertama! Bandingkan 2–3 alternatif solusi dari sisi: (1) Biaya/sumber daya, (2) Waktu pengerjaan, (3) Dampak jangka panjang, dan (4) Kemudahan dijalankan — lalu pilih yang paling efektif!' },
    ],
    activityTitle: 'Latihan: Memberikan Solusi',
    questions: [
      { text: 'Untuk mengurangi sampah kertas fotokopi pengumuman sekolah, dua alternatif solusi diusulkan: (A) Membangun layar LED raksasa seharga Rp200 juta vs (B) Memaksimalkan papan pengumuman kelas + kanal pesan resmi sekolah. Solusi paling efisien adalah...', opts: ['Alternatif (B) karena berbiaya sangat hemat, cepat diterapkan, dan langsung menjangkau seluruh siswa/orang tua', 'Alternatif (A) agar paling mahal', 'Tetap mencetak ribuan kertas tiap hari', 'Tidak memberi pengumuman sama sekali'], ans: 0, exp: 'Analisis biaya-manfaat (cost-benefit) memilih solusi paling realistis dan efektif.' },
      { text: 'Setiap rencana solusi kelompok sebaiknya dilengkapi pembagian tugas dan jadwal (rencana aksi) agar...', opts: ['Solusi benar-benar terlaksana nyata, bukan sekadar wacana di atas kertas', 'Terlihat rumit saja', 'Hanya 1 orang yang bekerja', 'Bisa ditunda terus'], ans: 0, exp: 'Kejelasan pelaksana dan tenggat waktu memastikan eksekusi.' },
      { text: 'Evaluasi setelah solusi dijalankan beberapa minggu bermanfaat untuk...', opts: ['Mengukur apakah masalah benar-benar berkurang dan menyempurnakan kendala yang muncul', 'Mencari siapa yang bisa disalahkan', 'Menghentikan program yang berhasil', 'Tidak ada gunanya'], ans: 0, exp: 'Siklus evaluasi mendorong perbaikan berkelanjutan.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-09', subSeq: 5,
    objectives: ['Siswa mampu merancang dan mempraktikkan gelar wicara (talkshow) serta diskusi panel pelajar secara komunikatif.'],
    materialTitle: 'Diskusi Panel dan Gelar Wicara (Talkshow)',
    blocks: [
      { type: 'table', title: 'Peran Utama dalam Gelar Wicara (Talkshow) Sekolah', headers: ['Peran', 'Tugas Utama'], rows: [
        ['Pemandu Acara (Host / Moderator)', 'Membuka hangat, mengenalkan narasumber, melempar pertanyaan tajam, menjaga suasana hidup & waktu, lalu menyimpulkan'],
        ['Narasumber / Panelis', 'Menjawab pertanyaan dengan data, pengalaman nyata, dan gagasan solutif'],
        ['Audiens / Penanya', 'Menyimak aktif dan mengajukan pertanyaan relevan di sesi interaktif'],
      ]},
    ],
    activityTitle: 'Latihan: Diskusi & Gelar Wicara',
    questions: [
      { text: 'Perbedaan suasana GELAR WICARA (talkshow) dibandingkan seminar formal kaku adalah gelar wicara...', opts: ['Lebih interaktif, hangat, mengalir seperti perbincangan terarah antara pemandu acara (host), narasumber, dan audiens', 'Tidak memiliki topik sama sekali', 'Narasumber hanya membaca makalah 1 jam tanpa tanya jawab', 'Tidak memakai pemandu acara'], ans: 0, exp: 'Talkshow menggabungkan bobot isi yang mendalam dengan gaya komunikasi yang akrab.' },
      { text: 'Jika saat gelar wicara kelas seorang narasumber berbicara terlalu panjang hingga melewati batas waktu, tindakan elegan pemandu acara (host) adalah...', opts: ['Memotong dengan halus saat jeda napas: "Terima kasih atas pemaparan yang sangat menarik; mengingat keterbatasan waktu, mari kita dengar pandangan narasumber berikutnya."', 'Mematikan mikrofon tiba-tiba tanpa berkata apa-apa', 'Membiarkannya berbicara sampai jam pelajaran habis', 'Membentak narasumber'], ans: 0, exp: 'Ketegasan yang santun menjaga ketertiban durasi dan keadilan giliran.' },
      { text: 'Persiapan kunci host/moderator sebelum memandu gelar wicara adalah...', opts: ['Mempelajari profil narasumber, memahami topik secara garis besar, dan menyiapkan daftar pertanyaan pemantik serta susunan waktu (rundown)', 'Datang tanpa tahu nama narasumber', 'Tidak menyiapkan pertanyaan', 'Berbicara lebih banyak daripada narasumber'], ans: 0, exp: 'Host yang siap membuat narasumber bersinar dan diskusi mengalir bermakna.' },
    ],
  },

  // BAB 10: PENULISAN DAN PENYUNTINGAN LANJUTAN (5 sub)
  {
    topicCode: 'BIND-SMP9-10', subSeq: 1,
    objectives: ['Siswa mampu merencanakan dan menyusun kerangka karangan sistematis untuk berbagai genre teks SMP.'],
    materialTitle: 'Menyusun Tulisan secara Sistematis',
    blocks: [
      { type: 'list', title: '5 Tahap Proses Menulis Profesional', items: ['1. Pramenulis (brainstorming, riset ide, tentukan tujuan & pembaca).', '2. Menyusun Kerangka Karangan (outline) agar ide tidak melompat-lompat.', '3. Menulis Draf Pertama (tuangkan ide mengalir dulu tanpa takut sempurna!).', '4. Revisi Isi & Alur (perkuat argumen, pangkas bagian berulang).', '5. Penyuntingan Akhir (EYD V, tanda baca, diksi) → Siap Publikasi!'] },
    ],
    activityTitle: 'Latihan: Menyusun Tulisan Sistematis',
    questions: [
      { text: 'Manfaat utama membuat KERANGKA KARANGAN (outline) sebelum mulai menulis artikel atau esai panjang adalah...', opts: ['Menjaga alur gagasan tetap runtut, fokus pada topik, tidak berulang-ulang, dan mencegah kebuntuan di tengah jalan', 'Memperlambat penulisan tanpa manfaat', 'Mengganti isi tulisan', 'Menghapus paragraf'], ans: 0, exp: 'Kerangka adalah peta jalan bagi penulis.' },
      { text: 'Perbedaan antara tahap REVISI dan tahap PENYUNTINGAN (editing) dalam proses menulis adalah...', opts: ['Revisi memperbaiki struktur besar, kelengkapan isi, dan kejelasan alur argumen; penyuntingan memoles kalimat efektif, pilihan kata, ejaan, dan tanda baca', 'Keduanya tidak perlu dilakukan', 'Revisi hanya mengganti warna kertas', 'Penyuntingan berarti menghapus seluruh isi'], ans: 0, exp: 'Perbaiki isi & struktur dulu (revisi), baru poles detail bahasa (sunting).' },
      { text: 'Mengapa pada tahap MENULIS DRAF PERTAMA penulis disarankan mengalir dulu menuliskan ide tanpa terlalu sering berhenti mengedit tiap kata?', opts: ['Agar alur pemikiran dan kreativitas tidak terputus di tengah jalan (poles ejaan dilakukan setelah draf jadi)', 'Karena ejaan tidak penting sama sekali', 'Supaya banyak salah ketik', 'Agar tidak perlu revisi'], ans: 0, exp: 'Memisahkan fase mencipta ide dan fase menyunting meningkatkan kelancaran menulis.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-10', subSeq: 2,
    objectives: ['Siswa mampu mengembangkan paragraf variatif (contoh, perbandingan, sebab-akibat, definisi, klasifikasi) yang padat dan logis.'],
    materialTitle: 'Mengembangkan Paragraf secara Variatif',
    blocks: [
      { type: 'table', title: '4 Teknik Pengembangan Paragraf Kuat', headers: ['Teknik', 'Kapan Dipakai?'], rows: [
        ['Pola Contoh / Ilustrasi', 'Membuat gagasan abstrak langsung terbayang konkret'],
        ['Pola Sebab-Akibat', 'Menjelaskan mengapa suatu masalah terjadi dan dampaknya'],
        ['Pola Perbandingan / Kontras', 'Membandingkan dua hal untuk menonjolkan keunggulan/perbedaan'],
        ['Pola Definisi & Klasifikasi', 'Menguraikan konsep ilmiah dan pembagian jenisnya secara rapi'],
      ]},
    ],
    activityTitle: 'Latihan: Mengembangkan Paragraf',
    questions: [
      { text: 'Sebuah paragraf yang diawali kalimat utama "Pengelolaan sampah di sekolah dapat dikelompokkan menjadi tiga kategori utama" paling tepat dikembangkan dengan pola...', opts: ['Klasifikasi (menguraikan sampah organik, anorganik daur ulang, dan residu/B3)', 'Alur mundur cerpen', 'Dialog drama', 'Rima pantun'], ans: 0, exp: 'Kalimat utama tentang pengelompokan menuntut pengembangan klasifikasi.' },
      { text: 'Ciri paragraf yang baik dan mudah dibaca meliputi tiga syarat utama, yaitu...', opts: ['Kesatuan (1 ide pokok), kepaduan (kohesi-koherensi antarkalimat), dan kelengkapan kalimat penjelas', 'Minimal 30 kalimat dalam 1 paragraf', 'Memuat 5 topik berbeda', 'Tanpa kalimat utama'], ans: 0, exp: 'Kesatuan, kepaduan, dan kelengkapan menjamin mutu paragraf.' },
      { text: 'Variasi panjang kalimat (memadukan kalimat tunggal ringkas dan kalimat majemuk terukur) dalam paragraf berguna untuk...', opts: ['Menciptakan ritme baca yang enak dan mencegah kebosanan pembaca', 'Membuat kalimat tak berujung', 'Menghilangkan subjek', 'Mengaburkan makna'], ans: 0, exp: 'Ritme kalimat yang dinamis membuat tulisan hidup.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-10', subSeq: 3,
    objectives: ['Siswa mampu menjaga konsistensi gagasan, sudut pandang, ragam bahasa, dan istilah di seluruh bagian tulisan.'],
    materialTitle: 'Menjaga Konsistensi Gagasan dan Gaya Bahasa',
    blocks: [
      { type: 'tip', text: 'Cek 4 Konsistensi Tulisan: (1) Konsistensi TOPIK (jangan melenceng keluar judul), (2) Konsistensi RAGAM BAHASA (jangan paragraf 1 baku resmi lalu paragraf 2 tiba-tiba "gue-lo/banget"), (3) Konsistensi KATA GANTI ("saya" atau "penulis" secara tetap), dan (4) Konsistensi ISTILAH/EJAAN!' },
    ],
    activityTitle: 'Latihan: Konsistensi Gagasan',
    questions: [
      { text: 'Pada paragraf 1 esai sekolah, penulis memakai ragam baku dan kata ganti "penulis", tetapi di paragraf 3 tiba-tiba menulis "Nah, kalo menurut aku sih itu keren banget, guys!". Kesalahan yang terjadi adalah...', opts: ['Inkonsistensi ragam bahasa dan sudut pandang kata ganti', 'Terlalu konsisten', 'Kelebihan data', 'Kesalahan daftar isi'], ans: 0, exp: 'Ragam bahasa dan sapaan harus seragam sesuai jenis teks dan audiensnya.' },
      { text: 'Jika judul esai adalah "Strategi Mengurangi Sampah Plastik di Kantin Sekolah", tetapi paragraf 2 dan 3 justru membahas panjang lebar tentang sejarah berdirinya sekolah, tulisan itu melanggar prinsip...', opts: ['Konsistensi dan relevansi gagasan terhadap topik', 'Rima akhir', 'Hukum Newton', 'Identitas buku'], ans: 0, exp: 'Setiap paragraf harus melayani dan mendukung gagasan judul.' },
      { text: 'Membuat transisi mulus antarparagraf (misalnya "Selain faktor kebiasaan, ketersediaan fasilitas juga berperan...") berfungsi untuk...', opts: ['Menjaga benang merah konsistensi alur dari satu paragraf ke paragraf berikutnya', 'Memutus hubungan paragraf', 'Mengganti tema', 'Membuat judul baru'], ans: 0, exp: 'Jembatan transisi menjaga kesinambungan bacaan.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-10', subSeq: 4,
    objectives: ['Siswa mampu memanfaatkan secara tepat kosakata denotatif (teks ilmiah/berita) serta konotatif dan ungkapan kiasan (teks sastra/persuasif).'],
    materialTitle: 'Kosakata Denotatif, Konotatif, dan Kiasan',
    blocks: [
      { type: 'table', title: 'Memilih Diksi Tepat Sesuai Jenis Teks', headers: ['Jenis Teks', 'Pilihan Makna Utama', 'Contoh'], rows: [
        ['Laporan, Berita, LHO, Prosedur', 'Dominan DENOTATIF (lugas, tunggal makna, anti-ambigu!)', '"Air dipanaskan hingga suhu 100°C."'],
        ['Cerpen, Puisi, Pidato Persuasif', 'Memadukan KONOTATIF, ungkapan/idiom, & majas untuk daya rasa', '"Ia membanting tulang demi masa depan anak-anaknya."'],
      ]},
    ],
    activityTitle: 'Latihan: Denotatif, Konotatif, & Kiasan',
    questions: [
      { text: 'Ungkapan kiasan (idiom) "besar kepala", "ringan tangan", dan "buah bibir" berturut-turut bermakna...', opts: ['Sombong, suka menolong, dan bahan perbincangan orang banyak', 'Pintar, suka memukul, dan bibir merah', 'Kepala besar, tangan kecil, dan buah-buahan', 'Rendah hati, malas, dan diam'], ans: 0, exp: 'Idiom memiliki makna kiasan gabungan yang tak bisa diartikan kata per kata.' },
      { text: 'Mengapa teks prosedur keselamatan laboratorium IPA atau laporan berita wajib menggunakan bahasa DENOTATIF lugas, bukan bahasa kiasan puisi?', opts: ['Agar tidak menimbulkan salah tafsir (multitafsir) dan langsung dipahami secara tepat oleh semua pembaca', 'Karena majas dilarang dalam bahasa Indonesia', 'Karena lebih panjang', 'Supaya tidak menarik'], ans: 0, exp: 'Ketepatan makna tunggal mutlak dibutuhkan pada teks informatif & instruksional.' },
      { text: 'Kalimat yang menggunakan kata "tangan kanan" dalam makna KONOTATIF (kiasan) adalah...', opts: ['Pak Budi dipercaya menjadi tangan kanan (orang kepercayaan utama) ketua koperasi desa.', 'Tangan kanan Raka terkilir saat bermain bola voli.', 'Ia menulis menggunakan tangan kanan.', 'Cuci tangan kanan dan kiri dengan sabun.'], ans: 0, exp: 'Tangan kanan = asisten/orang kepercayaan utama.' },
    ],
  },
  {
    topicCode: 'BIND-SMP9-10', subSeq: 5,
    objectives: ['Siswa mampu menyunting menyeluruh naskah karya dan memublikasikannya secara etis (mading, antologi kelas, blog/media sekolah).'],
    materialTitle: 'Menyunting dan Memublikasikan Karya secara Etis',
    blocks: [
      { type: 'visual_cards', title: 'Checklist Final Sebelum Publikasi Karya!', cards: [
        { emoji: '✅', label: 'Cek Fakta & Sumber', sub: 'Data akurat, bebas plagiarisme, semua sumber rujukan dicantumkan!' },
        { emoji: '✍️', label: 'Cek EYD V & Kalimat Efektif', sub: 'Kata baku KBBI, tanda baca, kapital, miring, & bebas salah ketik (typo)!' },
        { emoji: '🤝', label: 'Cek Etika & Hak Cipta', sub: 'Cantumkan kredit foto/ilustrasi (atau pakai karya sendiri/lisensi bebas) & jaga kesantunan!' },
        { emoji: '📢', label: 'Publikasi & Portofolio', sub: 'Terbitkan di mading, buletin sekolah, antologi kelas, atau blog edukasi sebagai jejak karyamu!' },
      ]},
    ],
    activityTitle: 'Latihan: Menyunting & Publikasi Karya',
    questions: [
      { text: 'Manakah penulisan kalimat publikasi berikut yang 100% BEBAS KESALAHAN sesuai EYD V dan KBBI?', opts: ['Pada hari Selasa, para siswa kelas IX memublikasikan hasil analisis penelitian mereka di majalah dinding sekolah.', 'Pada hari selasa, para siswa-siswa kelas IX mempublikasikan hasil analisa penelitian mereka dimajalah dinding sekolah.', 'Pada hari Selasa, para siswa kelas IX mempublikasikan hasil analisis penelitian mereka di majalah dinding sekolah.', 'pada hari Selasa, siswa kelas IX memublikasikan hasil analisa mereka.'], ans: 0, exp: 'Aturan KPTS luluh: meN- + publikasi → memublikasikan! Kata baku: analisis; kata depan: di majalah.' },
      { text: 'Etika hak cipta yang wajib dipatuhi saat menambahkan foto/ilustrasi ke artikel yang akan dipublikasikan di blog sekolah adalah...', opts: ['Menggunakan foto hasil jepretan sendiri atau gambar berlisensi bebas (Creative Commons) dengan mencantumkan sumber/kredit pembuatnya', 'Mengambil sembarang foto berhak cipta lalu menghapus watermark-nya', 'Mengaku foto orang lain sebagai karya sendiri', 'Tidak perlu izin atau kredit'], ans: 0, exp: 'Menghargai hak kekayaan intelektual (HAKI) adalah etika dasar penulis digital.' },
      { text: 'Manfaat membukukan kumpulan karya (antologi cerpen, puisi, atau artikel populer) kelas 9 sebelum lulus SMP adalah...', opts: ['Mengabadikan rekam jejak prestasi literasi, melatih kepercayaan diri berkarya, dan memberi inspirasi bagi adik kelas', 'Hanya membuang kertas', 'Tidak ada manfaatnya', 'Agar bisa menyalin karya teman'], ans: 0, exp: 'Publikasi karya merayakan puncak perjalanan literasi siswa SMP.' },
    ],
  },
];

upsertLessonsBatch('Kelas 9 SMP — Bahasa Indonesia (10 Bab, 52 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

