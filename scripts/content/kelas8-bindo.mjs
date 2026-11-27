import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: TEKS BERITA DAN INFORMASI DIGITAL (5 sub)
  {
    topicCode: 'BIND-SMP8-01', subSeq: 1,
    objectives: ['Siswa mampu menelaah struktur piramida terbalik teks berita cetak dan digital (judul, teras/lead, tubuh, ekor, serta tautan/multimedia).'],
    materialTitle: 'Struktur Teks Berita Cetak dan Digital',
    blocks: [
      { type: 'table', title: 'Struktur Berita Cetak vs Berita Digital', headers: ['Bagian', 'Fungsi Utama'], rows: [
        ['Judul (Headline)', 'Ringkasan padat pemikat pembaca; pada berita digital wajib akurat (anti-clickbait)'],
        ['Teras Berita (Lead)', 'Paragraf 1 memuat inti 5W+1H terpenting (piramida terbalik)'],
        ['Tubuh Berita (Body)', 'Rincian kronologi, data, kutipan narasumber, dan tautan berita terkait/infografis (digital)'],
        ['Ekor Berita (Tail)', 'Latar tambahan / info pelengkap yang tidak mengubah inti bila dipotong'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Berita',
    questions: [
      { text: 'Keunggulan khusus teks berita DIGITAL dibanding berita cetak antara lain...', opts: ['Dapat diperbarui cepat (real-time) dan dilengkapi elemen multimedia seperti foto, video, infografis, serta tautan referensi', 'Tidak memerlukan fakta', 'Tidak memiliki teras berita', 'Bebas menyebarkan rumor'], ans: 0, exp: 'Berita daring bersifat multimodal dan interaktif namun tetap terikat etika jurnalistik.' },
      { text: 'Dalam struktur piramida terbalik, informasi yang paling krusial ditempatkan di bagian...', opts: ['Teras berita (paragraf pertama)', 'Ekor berita paling akhir', 'Kolom komentar', 'Catatan kaki'], ans: 0, exp: 'Lead berada di bagian paling atas agar inti peristiwa langsung terbaca.' },
      { text: 'Mengapa judul clickbait yang berlebihan ("Geger! Kamu Tidak Akan Percaya...") melanggar prinsip jurnalistik yang sehat?', opts: ['Karena memanipulasi emosi pembaca dan sering tidak sesuai dengan fakta isi berita', 'Karena terlalu informatif', 'Karena terlalu jelas', 'Karena memakai bahasa baku'], ans: 0, exp: 'Judul berita harus jujur, akurat, dan mewakili isi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-01', subSeq: 2,
    objectives: ['Siswa mampu menganalisis kelengkapan unsur 5W+1H (ADIKSIMBA) serta kebahasaan berita (verba pewarta, kalimat langsung/tak langsung).'],
    materialTitle: 'Unsur 5W+1H dan Kebahasaan Berita',
    blocks: [
      { type: 'text', text: 'Berita lengkap menjawab 6 unsur ADIKSIMBA (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana). Ciri kebahasaan berita SMP: bahasa baku, kata kerja pewarta (mengatakan, menjelaskan, mengungkapkan), konjungsi temporal (kemudian, sejak), serta perpaduan kalimat langsung ("...") dan kalimat tidak langsung ("... bahwa ...").' },
    ],
    activityTitle: 'Latihan: Unsur & Kebahasaan Berita',
    questions: [
      { text: 'Manakah penulisan KALIMAT LANGSUNG kutipan narasumber yang BENAR sesuai EYD V?', opts: ['"Kami menyiapkan 500 bibit mangrove untuk ditanam pelajar," ujar Kepala Dinas Lingkungan Hidup.', '"Kami menyiapkan 500 bibit mangrove untuk ditanam pelajar." ujar Kepala Dinas.', 'Kami menyiapkan 500 bibit mangrove, ujar Kepala Dinas.', '"Kami menyiapkan 500 bibit mangrove", Ujar Kepala Dinas.'], ans: 0, exp: 'Tanda koma berada di dalam tanda petik sebelum pengiring "ujar..." (huruf kecil).' },
      { text: 'Konjungsi "bahwa" dalam teks berita berfungsi mengubah kutipan langsung menjadi...', opts: ['Kalimat tidak langsung', 'Kalimat perintah', 'Pantun', 'Slogan iklan'], ans: 0, exp: 'Contoh: Kepala sekolah menjelaskan bahwa lomba dimulai pukul 08.00.' },
      { text: 'Jika sebuah berita hanya menyebut peristiwa, tempat, dan waktu tanpa menjelaskan alasan penyebab terjadinya, maka unsur 5W+1H yang belum terjawab adalah...', opts: ['Why (Mengapa)', 'Where', 'When', 'What'], ans: 0, exp: 'Why menjelaskan penyebab/latar belakang peristiwa.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-01', subSeq: 3,
    objectives: ['Siswa mampu membedakan secara kritis fakta objektif dan opini/asumsi dalam berita dan unggahan media sosial.'],
    materialTitle: 'Membedakan Fakta dan Opini dalam Berita',
    blocks: [
      { type: 'table', title: 'Ciri Fakta vs Opini di Ruang Digital', headers: ['Fakta', 'Opini'], rows: [
        ['Dapat dibuktikan & diverifikasi dengan data/tanggal/angka', 'Penilaian, dugaan, saran, atau sikap subjektif'],
        ['Jawabannya seragam bagi semua orang', 'Dapat berbeda-beda antarindividu'],
        ['Contoh: "Suhu udara siang ini tercatat 34°C menurut BMKG."', 'Contoh: "Cuaca hari ini terasa paling menyiksa sepanjang tahun."'],
      ]},
    ],
    activityTitle: 'Latihan: Fakta & Opini',
    questions: [
      { text: 'Manakah kalimat berikut yang merupakan FAKTA murni?', opts: ['Tim futsal SMPN tersebut menang 3–1 pada final kejuaraan antarsekolah hari Minggu, 14 September.', 'Tim futsal itu bermain sangat spektakuler dan tak terkalahkan.', 'Menurut penonton, wasit seharusnya memberi penalti tambahan.', 'Lapangan sekolah itu tampak paling indah di kota ini.'], ans: 0, exp: 'Skor 3–1 dan hari/tanggal pertandingan dapat diverifikasi secara objektif.' },
      { text: 'Kata penanda yang sering menandai kalimat OPINI adalah...', opts: ['seharusnya, mungkin, sangat baik, menurut saya, diperkirakan', 'pada tanggal 10 Mei, berjumlah 42 orang, sepanjang 5 km', 'tercatat di BPS, resmi dilantik', 'berlokasi di Jalan Pahlawan'], ans: 0, exp: 'Kata bernuansa penilaian/dugaan menandai opini.' },
      { text: 'Mengapa wartawan tetap mencantumkan opini narasumber ahli di dalam berita?', opts: ['Sebagai perspektif analisis resmi dengan menyertakan nama & jabatan narasumber secara jelas (bukan opini pribadi wartawan)', 'Agar berita jadi karangan bebas', 'Untuk mengganti fakta', 'Supaya tidak perlu data'], ans: 0, exp: 'Kutipan pakar memberi konteks tanpa mengaburkan fakta objektif.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-01', subSeq: 4,
    objectives: ['Siswa mampu membandingkan dua teks berita bertopik sama dari sudut penyajian (angle), kelengkapan data, dan netralitas bahasa.'],
    materialTitle: 'Membandingkan Penyajian Dua Berita',
    blocks: [
      { type: 'tip', text: 'Satu peristiwa yang sama bisa diberitakan dengan SUDUT PANDANG (angle) berbeda oleh dua media! Bandingkan: (1) Judul & nadanya (netral vs bombastis), (2) Kelengkapan 5W+1H, (3) Apakah kedua media menghadirkan narasumber berimbang?' },
    ],
    activityTitle: 'Latihan: Membandingkan Berita',
    questions: [
      { text: 'Berita A menyoroti kemacetan akibat perbaikan jalan; Berita B menyoroti manfaat jangka panjang pelebaran jalan tersebut. Perbedaan fokus antara Berita A dan B disebut perbedaan...', opts: ['Sudut pandang penyajian (angle berita)', 'Jenis huruf', 'Bahasa negara', 'Ejaan'], ans: 0, exp: 'Angle adalah sudut pandang utama yang dipilih redaksi dalam mengangkat satu peristiwa.' },
      { text: 'Mengapa membaca perbandingan berita dari 2–3 media kredibel sangat dianjurkan sebelum mengambil kesimpulan?', opts: ['Agar memperoleh gambaran utuh, objektif, dan terhindar dari bias satu sisi', 'Agar bingung dan tidak percaya apa pun', 'Supaya kuota habis', 'Hanya untuk membaca judul'], ans: 0, exp: 'Cross-checking melatih literasi informasi kritis.' },
      { text: 'Jika Berita 1 menyertakan data resmi BMKG dan wawancara 2 pihak, sementara Berita 2 hanya mengutip komentar anonim di media sosial, berita yang lebih kredibel adalah...', opts: ['Berita 1 karena berbasis data resmi dan narasumber berimbang', 'Berita 2 karena lebih cepat viral', 'Keduanya sama saja', 'Tidak keduanya'], ans: 0, exp: 'Kredibilitas sumber adalah tolok ukur kualitas berita.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-01', subSeq: 5,
    objectives: ['Siswa mampu memverifikasi sumber informasi digital (cek domain, verifikasi Dewan Pers, reverse image search, dan situs cek fakta).'],
    materialTitle: 'Memeriksa Kredibilitas Sumber Informasi Digital',
    blocks: [
      { type: 'list', title: '4 Teknik Verifikasi Sumber Digital', items: ['1. Cek domain resmi (.go.id untuk instansi pemerintah, .ac.id untuk kampus, media terverifikasi Dewan Pers).', '2. Cek penulis, tanggal terbit, dan rujukan data aslinya.', '3. Lakukan pencarian gambar terbalik (reverse image search) untuk mengecek foto lama yang didaur ulang!', '4. Gunakan kanal cek fakta (cekfakta.com, turnbackhoax.id, atau kanal resmi Komdigi/instansi terkait).'] },
    ],
    activityTitle: 'Latihan: Verifikasi Sumber Digital',
    questions: [
      { text: 'Seseorang membagikan foto banjir besar dengan keterangan "Banjir hari ini di kota X!", padahal foto itu sebenarnya kejadian 6 tahun lalu di negara lain. Cara teknis mengecek keaslian foto tersebut adalah...', opts: ['Melakukan pencarian gambar terbalik (reverse image search)', 'Langsung membagikannya lagi', 'Memperbesar kecerahan layar', 'Mengganti nama file'], ans: 0, exp: 'Reverse image search melacak kapan dan di mana foto pertama kali dipublikasikan.' },
      { text: 'Domain situs resmi instansi pemerintah Republik Indonesia diakhiri ekstensi...', opts: ['.go.id', '.blogspot.com', '.xyz', '.shop'], ans: 0, exp: '.go.id adalah domain resmi pemerintahan Indonesia.' },
      { text: 'Berita bohong yang sengaja dibuat dan disebarkan untuk menipu atau memicu kepanikan publik disebut...', opts: ['Disinformasi / hoaks', 'Berita berimbang', 'Resensi', 'Eksposisi ilmiah'], ans: 0, exp: 'Disinformasi adalah informasi palsu yang sengaja dibuat untuk menyesatkan.' },
    ],
  },

  // BAB 2: TEKS EKSPOSISI (5 sub)
  {
    topicCode: 'BIND-SMP8-02', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian, tujuan, dan karakteristik teks eksposisi (informatif, objektif, logis, persuasif halus berbasis argumen).'],
    materialTitle: 'Pengertian dan Ciri Teks Eksposisi',
    blocks: [
      { type: 'text', text: 'Teks eksposisi adalah teks nonfiksi yang memaparkan gagasan, pendapat (tesis), dan informasi penting secara ringkas, padat, dan objektif disertai alasan logis serta bukti fakta/data agar pembaca bertambah wawasannya atau memahami sudut pandang penulis.' },
    ],
    activityTitle: 'Latihan: Pengertian Teks Eksposisi',
    questions: [
      { text: 'Tujuan utama penulisan teks eksposisi adalah...', opts: ['Memaparkan gagasan/informasi secara logis disertai bukti fakta untuk memperluas wawasan pembaca', 'Menghibur pembaca lewat tokoh imajinatif', 'Memberi instruksi langkah memasak', 'Menyindir lewat puisi'], ans: 0, exp: 'Eksposisi memaparkan gagasan + argumen faktual secara jernih.' },
      { text: 'Manakah judul yang paling mencerminkan TEKS EKSPOSISI?', opts: ['Pentingnya Pengurangan Sampah Plastik Sekali Pakai di Lingkungan Sekolah', 'Legenda Batu Menangis', 'Cara Membuat Layang-Layang Kertas', 'Keindahan Pantai di Sore Hari'], ans: 0, exp: 'Mengangkat isu/gagasan yang dijelaskan dengan argumen dan bukti.' },
      { text: 'Gaya penyampaian informasi dalam teks eksposisi bersifat...', opts: ['Lugas, logis, objektif, dan tidak bertele-tele', 'Penuh khayalan magis', 'Menggunakan bahasa gaul', 'Berbentuk dialog drama'], ans: 0, exp: 'Kejelasan logika dan bahasa baku menjadi ciri eksposisi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-02', subSeq: 2,
    objectives: ['Siswa mampu menganalisis 3 struktur baku teks eksposisi: Tesis, Rangkaian Argumentasi, dan Penegasan Ulang.'],
    materialTitle: 'Struktur Teks Eksposisi',
    blocks: [
      { type: 'table', title: '3 Struktur Wajib Teks Eksposisi', headers: ['Struktur', 'Isinya'], rows: [
        ['1. Tesis (Pernyataan Pendapat)', 'Pengenalan isu utama dan posisi/pandangan awal penulis'],
        ['2. Rangkaian Argumentasi', 'Alasan logis, fakta, data statistik, hasil riset, dan pendapat ahli penguat tesis'],
        ['3. Penegasan Ulang (Reiterasi)', 'Simpulan penguat tesis awal (bukan sekadar salin-tempel!) + rekomendasi singkat'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Teks Eksposisi',
    questions: [
      { text: 'Bagian teks eksposisi yang memuat data penelitian, angka statistik, contoh konkret, dan alasan logis untuk membuktikan pendapat penulis disebut...', opts: ['Rangkaian argumentasi', 'Tesis', 'Orientasi', 'Resolusi'], ans: 0, exp: 'Argumentasi menjadi tulang punggung pembuktian tesis.' },
      { text: 'Paragraf pembuka teks eksposisi yang memperkenalkan topik permasalahan sekaligus pandangan awal penulis disebut...', opts: ['Tesis', 'Penegasan ulang', 'Koda', 'Evaluasi'], ans: 0, exp: 'Tesis menyatakan posisi utama penulis sejak awal.' },
      { text: 'Urutan struktur teks eksposisi yang tepat adalah...', opts: ['Tesis → Rangkaian argumentasi → Penegasan ulang', 'Argumentasi → Tesis → Judul', 'Identifikasi → Deskripsi bagian → Kesan', 'Orientasi → Komplikasi → Resolusi'], ans: 0, exp: 'Tesis, Argumentasi, Penegasan Ulang.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-02', subSeq: 3,
    objectives: ['Siswa mampu memadukan fakta objektif sebagai penguat opini/tesis dalam paragraf eksposisi.'],
    materialTitle: 'Peran Fakta dan Opini dalam Eksposisi',
    blocks: [
      { type: 'tip', text: 'Dalam teks eksposisi, OPINI penulis (tesis) boleh dan memang ada — tetapi opini yang lemah tanpa FAKTA hanya jadi omong kosong! Fakta dan data hadir di bagian argumentasi untuk membuktikan bahwa opini penulis masuk akal!' },
    ],
    activityTitle: 'Latihan: Fakta & Opini Eksposisi',
    questions: [
      { text: 'Mengapa teks eksposisi memadukan opini (gagasan) sekaligus fakta?', opts: ['Opini menjadi gagasan pokok (tesis) yang kemudian dibuktikan kekuatannya oleh fakta dan data di bagian argumentasi', 'Agar fakta kalah oleh opini', 'Karena eksposisi adalah cerita fiksi', 'Supaya pembaca bingung'], ans: 0, exp: 'Opini yang ditopang fakta menjadi argumen yang meyakinkan.' },
      { text: 'Kalimat fakta terbaik untuk menguatkan tesis "Sarapan bergizi meningkatkan konsentrasi belajar siswa" adalah...', opts: ['"Hasil penelitian gizi menunjukkan siswa yang rutin sarapan memiliki daya ingat jangka pendek lebih baik di jam pelajaran pagi."', '"Menurutku sarapan itu enak sekali."', '"Semua anak pasti suka nasi goreng."', '"Jangan lupa makan ya!"'], ans: 0, exp: 'Bukti hasil penelitian memperkuat klaim tesis secara ilmiah.' },
      { text: 'Kalimat "Oleh karena itu, pembiasaan membaca 15 menit sebelum pelajaran layak diterapkan di seluruh sekolah" dalam teks eksposisi merupakan...', opts: ['Opini / rekomendasi pada bagian penegasan ulang', 'Data angka sensus', 'Judul teks', 'Kalimat tanya'], ans: 0, exp: 'Berisi rekomendasi/simpulan pendapat penulis.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-02', subSeq: 4,
    objectives: ['Siswa mampu menggunakan konjungsi argumentatif/kausalitas (karena, sebab, sehingga, oleh karena itu, jika, selain itu) dan istilah teknis.'],
    materialTitle: 'Konjungsi Argumentatif dan Kata Teknis',
    blocks: [
      { type: 'table', title: 'Konjungsi Kunci Teks Eksposisi', headers: ['Fungsi', 'Contoh Konjungsi'], rows: [
        ['Sebab-Akibat (Kausalitas)', 'karena, sebab, akibatnya, sehingga, oleh karena itu, dengan demikian'],
        ['Penambahan Argumen', 'selain itu, di samping itu, lebih lanjut, pertama, kedua'],
        ['Pertentangan / Perbandingan', 'namun, akan tetapi, sebaliknya, sementara itu, berbeda halnya'],
      ]},
    ],
    activityTitle: 'Latihan: Konjungsi Argumentatif',
    questions: [
      { text: '"Pohon mangrove mampu memecah gelombang laut dan menahan abrasi. ..., penanaman mangrove di pesisir sangat mendesak dilakukan." Konjungsi kausalitas antarkalimat yang tepat adalah...', opts: ['Oleh karena itu', 'Tetapi', 'Sedangkan', 'Atau'], ans: 0, exp: 'Menyatakan simpulan akibat logis dari kalimat sebelumnya.' },
      { text: 'Dalam teks eksposisi bertema lingkungan, kata seperti "ekosistem, emisi karbon, abrasi, biodiversitas" disebut...', opts: ['Kata teknis (istilah bidang ilmu)', 'Kata sapaan', 'Kata seru', 'Kata tidak baku'], ans: 0, exp: 'Kata teknis sesuai bidang keilmuan meningkatkan ketajaman eksposisi.' },
      { text: 'Kata kerja mental yang sering muncul dalam eksposisi untuk menyatakan gagasan/penilaian adalah...', opts: ['berpendapat, memprediksi, menyimpulkan, berasumsi, memperkirakan', 'melompat, berlari, memotong', 'memasak, menyapu', 'tidur, makan'], ans: 0, exp: 'Verba mental berkaitan dengan aktivitas berpikir dan berpendapat.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-02', subSeq: 5,
    objectives: ['Siswa mampu menyusun kerangka dan menulis teks eksposisi 3–4 paragraf secara runtut dan efektif.'],
    materialTitle: 'Menulis Teks Eksposisi',
    blocks: [
      { type: 'list', title: '4 Langkah Praktis Menulis Eksposisi', items: ['1. Pilih topik aktual dekat dengan pelajar (literasi, sampah sekolah, manajemen waktu gawai).', '2. Rumuskan 1 kalimat TESIS yang jelas.', '3. Kumpulkan minimal 2–3 argumen + bukti fakta/data.', '4. Tulis paragraf Tesis → 2 paragraf Argumentasi → 1 paragraf Penegasan Ulang, lalu sunting EYD V!'] },
    ],
    activityTitle: 'Latihan: Menulis Eksposisi',
    questions: [
      { text: 'Urutan pengembangan gagasan: (1) Tesis: Pembatasan waktu gawai malam hari menyehatkan pelajar; (2) Argumen 1: Cahaya biru layar mengganggu hormon tidur; (3) Argumen 2: Kurang tidur menurunkan fokus kelas; (4) Penegasan ulang. Pola paragraf ini disebut...', opts: ['Runtut sesuai struktur lengkap teks eksposisi', 'Acak tanpa struktur', 'Struktur cerpen', 'Struktur surat pribadi'], ans: 0, exp: 'Memenuhi Tesis → Argumentasi berlapis → Penegasan ulang.' },
      { text: 'Kesalahan umum saat menulis bagian PENEGASAN ULANG yang perlu dihindari adalah...', opts: ['Menyalin mentah-mentah kalimat tesis kata demi kata tanpa memparafrasekan atau menambahkan simpulan/saran', 'Menegaskan kembali inti gagasan dengan kalimat baru', 'Memberi saran praktis', 'Memakai konjungsi "Dengan demikian,"'], ans: 0, exp: 'Penegasan ulang sebaiknya memparafrasekan tesis secara lebih mantap.' },
      { text: 'Agar paragraf argumentasi teks eksposisi makin kuat dan dipercaya pembaca, penulis sebaiknya...', opts: ['Menyertakan contoh konkret, hasil pengamatan, atau data dari sumber kredibel', 'Mengulang kata "sangat penting" 10 kali', 'Menambah tanda seru berlebihan', 'Memasukkan gosip'], ans: 0, exp: 'Bukti objektif adalah kekuatan utama argumen.' },
    ],
  },

  // BAB 3: TEKS TANGGAPAN (6 sub)
  {
    topicCode: 'BIND-SMP8-03', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian teks tanggapan kritis terhadap karya, peristiwa, atau kebijakan secara objektif dan santun.'],
    materialTitle: 'Pengertian Teks Tanggapan',
    blocks: [
      { type: 'text', text: 'Teks tanggapan adalah teks yang berisi penilaian berupa pujian (apresiasi), sanggahan, atau kritik membangun terhadap suatu karya (lukisan, film, buku, pentas), fenomena, atau kebijakan berdasarkan pengamatan objektif dan alasan logis.' },
    ],
    activityTitle: 'Latihan: Pengertian Teks Tanggapan',
    questions: [
      { text: 'Objek yang dapat dibahas dalam teks tanggapan kritis antara lain...', opts: ['Karya seni, film, buku, fenomena sosial, atau kebijakan sekolah/publik', 'Hanya rumus matematika', 'Hanya daftar belanja', 'Hanya biodata diri'], ans: 0, exp: 'Teks tanggapan menilai karya, peristiwa, maupun fenomena secara objektif.' },
      { text: 'Dua syarat utama agar teks tanggapan bermutu adalah bersifat...', opts: ['Objektif (berdasar fakta/pengamatan) dan santun (menghargai, tidak menghina)', 'Kasar dan emosional', 'Asal memuji tanpa melihat karya', 'Subjektif tanpa alasan'], ans: 0, exp: 'Objektivitas dan kesantunan menjadi ruh teks tanggapan.' },
      { text: 'Tanggapan yang baik terhadap sebuah karya lukisan siswa sebaiknya...', opts: ['Menilai kekuatan komposisi/warna sekaligus memberi saran perbaikan teknik dengan bahasa santun', 'Langsung bilang "jelek banget"', 'Mengomentari penampilan fisik pelukisnya', 'Tidak melihat lukisannya'], ans: 0, exp: 'Fokus pada kualitas karya, bukan menyerang pribadi pembuatnya.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-03', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan tujuan teks tanggapan (memberi apresiasi, masukan perbaikan, dan sudut pandang seimbang).'],
    materialTitle: 'Tujuan Teks Tanggapan',
    blocks: [
      { type: 'tip', text: 'Teks tanggapan BUKAN bertujuan menjatuhkan pembuat karya, melainkan memberi apresiasi atas hal yang sudah baik sekaligus saran konstruktif agar karya atau kebijakan selanjutnya jauh lebih baik!' },
    ],
    activityTitle: 'Latihan: Tujuan Teks Tanggapan',
    questions: [
      { text: 'Tujuan utama menyampaikan kritik dalam teks tanggapan adalah...', opts: ['Membantu pembuat karya/kebijakan mengenali kekurangan dan memperbaikinya menjadi lebih baik', 'Mempermalukan orang lain di depan umum', 'Menunjukkan kita paling pintar', 'Memicu pertengkaran'], ans: 0, exp: 'Kritik konstruktif berorientasi pada perbaikan mutu.' },
      { text: 'Memberikan pujian yang tulus disertai alasan spesifik (misalnya "Pemilihan pencahayaan dalam film pendek ini sangat mendukung suasana haru") bertujuan...', opts: ['Mengapresiasi keunggulan nyata agar pencipta termotivasi mempertahankan kualitasnya', 'Sekadar basa-basi kosong', 'Menutupi seluruh kekurangan', 'Menghindari diskusi'], ans: 0, exp: 'Apresiasi berbasis bukti terasa tulus dan mendidik.' },
      { text: 'Bagi pembaca umum, membaca teks tanggapan yang seimbang tentang sebuah kebijakan baru bermanfaat untuk...', opts: ['Memahami sisi kelebihan sekaligus catatan perbaikannya secara jernih', 'Langsung marah tanpa baca', 'Tidak peduli lingkungan', 'Meniru komentar negatif'], ans: 0, exp: 'Tanggapan kritis membantu publik berpikir seimbang.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-03', subSeq: 3,
    objectives: ['Siswa mampu menganalisis 3 struktur teks tanggapan: Konteks, Deskripsi, dan Penilaian.'],
    materialTitle: 'Struktur Teks Tanggapan',
    blocks: [
      { type: 'table', title: '3 Struktur Baku Teks Tanggapan', headers: ['Bagian', 'Pertanyaan Penuntun'], rows: [
        ['1. Konteks', 'Apa yang ditanggapi? Di mana, kapan, siapa pencipta/pelakunya?'],
        ['2. Deskripsi', 'Bagaimana wujud, bagian, alur, atau proses kerja karya/peristiwa tersebut secara objektif?'],
        ['3. Penilaian', 'Apa kelebihan (pujian), kekurangan (kritik), serta saran perbaikan menurut penanggap?'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Teks Tanggapan',
    questions: [
      { text: 'Urutan struktur teks tanggapan yang benar adalah...', opts: ['Konteks → Deskripsi → Penilaian', 'Penilaian → Konteks → Judul', 'Tesis → Argumen → Penegasan', 'Orientasi → Resolusi'], ans: 0, exp: 'Konteks mengenalkan objek, Deskripsi memaparkan detailnya, Penilaian memberi pujian/kritik/saran.' },
      { text: '"Pameran karya daur ulang siswa SMP Harapan digelar di aula sekolah pada 12 Oktober 2026 dan menampilkan 40 karya miniatur." Paragraf ini adalah bagian...', opts: ['Konteks', 'Penilaian', 'Saran', 'Penutup'], ans: 0, exp: 'Memperkenalkan apa, siapa, di mana, dan kapan objek yang ditanggapi.' },
      { text: 'Pujian, kritik membangun, dan rekomendasi perbaikan ditempatkan pada bagian...', opts: ['Penilaian', 'Konteks', 'Identitas', 'Judul'], ans: 0, exp: 'Bagian penilaian memuat evaluasi positif-negatif dan solusi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-03', subSeq: 4,
    objectives: ['Siswa mampu menyusun kalimat pujian tulus dan kritik santun tanpa merendahkan pihak lain.'],
    materialTitle: 'Menyampaikan Pujian dan Kritik secara Santun',
    blocks: [
      { type: 'worked_example', level: 'Mengubah Kritik Kasar → Kritik Santun', question: 'Ubah kalimat "Postermu berantakan sekali, tulisannya nggak kebaca!" menjadi kritik santun membangun!', steps: ['Mulai dari apresiasi: "Ide dan ilustrasi postermu sudah sangat kreatif!"', 'Sampaikan saran spesifik tanpa menyerang: "Akan lebih mudah dibaca jika ukuran huruf diperbesar dan kontras warnanya diperkuat."'], answer: 'Kritik santun selalu menyertakan apresiasi + saran konkret!' },
    ],
    activityTitle: 'Latihan: Kritik & Pujian Santun',
    questions: [
      { text: 'Manakah kalimat kritik yang PALING SANTUN dan konstruktif terhadap penampilan baca puisi teman?', opts: ['"Penghayatan ekspresimu sudah sangat menyentuh; jika volume suara di bait terakhir sedikit diperkuat, seluruh ruangan pasti dapat menikmatinya lebih jelas."', '"Suaramu terlalu pelan, percuma maju ke depan!"', '"Puisi apa itu, bikin mengantuk saja."', '"Kamu sama sekali tidak berbakat."'], ans: 0, exp: 'Memuji kelebihan terlebih dahulu lalu memberi saran perbaikan konkret.' },
      { text: 'Penanda bahasa kesantunan dalam menyampaikan kritik antara lain penggunaan ungkapan...', opts: ['"Alangkah baiknya jika...", "Akan lebih maksimal apabila...", "Menurut hemat saya..."', '"Pokoknya salah total!"', '"Kamu tidak becus!"', '"Hancur sekali!"'], ans: 0, exp: 'Diksi halus membuat penerima kritik lebih lapang dada menerima masukan.' },
      { text: 'Pujian yang PALING berkualitas adalah pujian yang...', opts: ['Spesifik menunjuk bagian yang unggul disertai alasan nyata', 'Berlebihan dan tidak jujur', 'Hanya bilang "bagus" tanpa melihat karya', 'Bernada menyindir'], ans: 0, exp: 'Pujian spesifik membuktikan kita benar-benar mengamati karya.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-03', subSeq: 5,
    objectives: ['Siswa mampu memperkuat setiap penilaian (pujian maupun kritik) dengan alasan logis dan bukti pengamatan.'],
    materialTitle: 'Memberikan Alasan Logis dalam Tanggapan',
    blocks: [
      { type: 'formula', name: 'Pola Kalimat Tanggapan Kuat', expression: 'Penilaian (Pujian / Kritik)  +  Konjungsi Sebab ("karena / sebab")  +  Bukti Konkret / Solusi', note: 'Contoh: "Alur film pendek ini terasa agak terburu-buru di akhir KARENA konflik besar diselesaikan hanya dalam 10 detik tanpa penjelasan motivasi tokoh."' },
    ],
    activityTitle: 'Latihan: Alasan dalam Tanggapan',
    questions: [
      { text: 'Mengapa setiap kritik atau pujian dalam teks tanggapan wajib disertai ALASAN dan BUKTI?', opts: ['Agar tanggapan bersifat objektif, masuk akal, dan meyakinkan (bukan sekadar suka atau tidak suka)', 'Agar paragrafnya panjang saja', 'Supaya terlihat marah', 'Tidak perlu alasan'], ans: 0, exp: 'Alasan logis membedakan kritik ilmiah dari sekadar komentar emosional.' },
      { text: 'Manakah pernyataan tanggapan yang sudah dilengkapi alasan logis?', opts: ['"Program bawa tumbler ke sekolah sangat patut didukung karena terbukti mampu menekan ratusan botol plastik per minggu."', '"Program itu bagus banget."', '"Saya tidak setuju titik."', '"Terserah sekolah saja."'], ans: 0, exp: 'Menyebutkan alasan terukur berupa pengurangan botol plastik.' },
      { text: 'Konjungsi yang tepat untuk menghubungkan kritik dengan saran perbaikan adalah...', opts: ['sebaiknya / agar / sehingga', 'padahal', 'melainkan', 'atau'], ans: 0, exp: 'Menghubungkan identifikasi masalah dengan solusi konstruktif.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-03', subSeq: 6,
    objectives: ['Siswa mampu menulis teks tanggapan utuh (Konteks–Deskripsi–Penilaian) terhadap sebuah karya atau fenomena pelajar.'],
    materialTitle: 'Menulis Teks Tanggapan Utuh',
    blocks: [
      { type: 'list', title: 'Checklist Menulis Teks Tanggapan', items: ['Paragraf 1 (Konteks): Perkenalkan karya/fenomena secara jelas.', 'Paragraf 2 (Deskripsi): Jelaskan detail objektif tanpa langsung menghakimi.', 'Paragraf 3 (Penilaian): Seimbangkan apresiasi kelebihan + kritik membangun + saran praktis!'] },
    ],
    activityTitle: 'Latihan: Menulis Teks Tanggapan',
    questions: [
      { text: 'Sebelum menulis teks tanggapan terhadap sebuah film pendek atau buku cerita, langkah pertama yang wajib dilakukan penulis adalah...', opts: ['Menonton/membaca karya tersebut secara saksama sambil mencatat detail keunggulan dan kekurangannya', 'Langsung menulis kritik hanya dari melihat posternya', 'Menyalin ulasan orang lain', 'Menebak isinya'], ans: 0, exp: 'Pemahaman utuh atas objek menjamin objektivitas tanggapan.' },
      { text: 'Jika sebuah teks tanggapan HANYA berisi cacian kekurangan dari awal sampai akhir tanpa menghargai sisi baik atau memberi solusi, teks tersebut kurang baik karena...', opts: ['Tidak seimbang, kurang objektif, dan tidak konstruktif', 'Terlalu santun', 'Strukturnya terlalu rapi', 'Terlalu singkat'], ans: 0, exp: 'Tanggapan kritis yang dewasa selalu berimbang dan solutif.' },
      { text: 'Kalimat rujukan ("karya tersebut", "hal ini", "kelebihan itu") dalam teks tanggapan berfungsi untuk...', opts: ['Menjaga kepaduan antarkalimat agar tidak mengulang nama objek terus-menerus', 'Mengganti topik', 'Menghilangkan bukti', 'Membuat puisi'], ans: 0, exp: 'Kata rujukan memperkuat kohesi teks.' },
    ],
  },

  // BAB 4: TEKS PERSUASI DAN IKLAN (5 sub)
  {
    topicCode: 'BIND-SMP8-04', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian dan tujuan teks persuasi (memengaruhi pembaca melakukan sesuatu secara sadar) serta strukturnya.'],
    materialTitle: 'Tujuan dan Struktur Teks Persuasi',
    blocks: [
      { type: 'table', title: '4 Struktur Teks Persuasi', headers: ['Bagian', 'Fungsinya'], rows: [
        ['1. Pengenalan Isu', 'Mengantarkan topik/masalah yang menjadi dasar ajakan'],
        ['2. Rangkaian Argumen', 'Pendapat + fakta/data agar pembaca yakin bahwa isu itu penting'],
        ['3. Pernyataan Ajakan', 'INTI persuasi! Mengajak pembaca bertindak (ayo, mari, hendaklah, sebaiknya)'],
        ['4. Penegasan Kembali', 'Menekankan ulang manfaat ajakan secara ringkas'],
      ]},
    ],
    activityTitle: 'Latihan: Tujuan Persuasi',
    questions: [
      { text: 'Perbedaan paling mencolok antara TEKS PERSUASI dan teks eksposisi adalah teks persuasi...', opts: ['Secara tegas mendorong/mengajak pembaca melakukan tindakan nyata (ada bagian pernyataan ajakan)', 'Tidak menggunakan fakta', 'Berisi cerita fiksi', 'Hanya berisi daftar bahan'], ans: 0, exp: 'Eksposisi berfokus memaparkan/meyakinkan gagasan; persuasi berujung ajakan bertindak.' },
      { text: 'Bagian yang menjadi inti pembeda struktur teks persuasi adalah...', opts: ['Pernyataan ajakan', 'Orientasi', 'Identifikasi', 'Abstrak'], ans: 0, exp: 'Pernyataan ajakan mengarahkan pembaca mengambil sikap/aksi.' },
      { text: 'Contoh teks persuasi yang dekat dengan kehidupan masyarakat adalah...', opts: ['Kampanye hemat air, ajakan donor darah, dan imbauan tertib berlalu lintas', 'Dongeng kancil', 'Resep nasi goreng', 'Tabel perkalian'], ans: 0, exp: 'Semua kampanye sosial yang mengajak perubahan perilaku tergolong persuasi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-04', subSeq: 2,
    objectives: ['Siswa mampu menyusun kalimat ajakan persuasif yang menarik, positif, dan efektif (tersurat maupun tersirat).'],
    materialTitle: 'Kalimat Ajakan Persuasif',
    blocks: [
      { type: 'tip', text: 'Kata kunci ajakan TERSURAT: ayo, mari, marilah, hendaklah, sebaiknya, janganlah, mulailah! Ajakan juga bisa TERSIRAT lewat kalimat retoris yang menggugah kesadaran ("Jika bukan kita yang menjaga bumi ini, lalu siapa lagi?").' },
    ],
    activityTitle: 'Latihan: Kalimat Ajakan',
    questions: [
      { text: 'Manakah yang merupakan kalimat ajakan persuasif yang paling efektif untuk poster sekolah?', opts: ['"Mari biasakan pilah sampah mulai hari ini demi sekolah bersih dan sehat!"', '"Sampah organik bisa menjadi kompos."', '"Di sekolah ada tiga warna tempat sampah."', '"Kemarin petugas kebersihan menyapu halaman."'], ans: 0, exp: 'Mengandung kata ajakan "Mari" + tindakan konkret + manfaatnya.' },
      { text: 'Kalimat "Bukankah masa depan sehat dimulai dari kebiasaan olahraga hari ini?" adalah ajakan secara tersirat berbentuk...', opts: ['Kalimat tanya retoris (tidak butuh jawaban, tapi menggugah kesadaran)', 'Kalimat berita pasif', 'Kalimat definisi', 'Kalimat perincian'], ans: 0, exp: 'Pertanyaan retoris mendorong pembaca setuju dalam hati.' },
      { text: 'Kata "janganlah" dan "hindarilah" dalam teks persuasi berfungsi sebagai...', opts: ['Ajakan larangan (mengajak menjauhi perilaku merugikan)', 'Kata benda', 'Konjungsi waktu', 'Kata sapaan'], ans: 0, exp: 'Persuasi dapat mengajak melakukan hal baik maupun menjauhi hal buruk.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-04', subSeq: 3,
    objectives: ['Siswa mampu menggunakan fakta, data, dan alasan logis untuk meyakinkan audiens dalam teks persuasi.'],
    materialTitle: 'Penggunaan Fakta dan Alasan dalam Persuasi',
    blocks: [
      { type: 'text', text: 'Ajakan tanpa bukti mudah diabaikan! Misal: alih-alih cuma bilang "Ayo kurangi plastik!", tambah FAKTA dulu: "Satu botol plastik butuh ratusan tahun untuk terurai di alam, dan jutaan ton plastik mencemari laut setiap tahun. Oleh sebab itu, mari beralih memakai botol minum isi ulang!"' },
    ],
    activityTitle: 'Latihan: Fakta & Alasan Persuasi',
    questions: [
      { text: 'Fungsi utama penyajian fakta dan data statistik sebelum pernyataan ajakan dalam teks persuasi adalah...', opts: ['Membangun kepercayaan dan keyakinan pembaca sehingga mereka tergerak mengikuti ajakan secara sadar', 'Menakut-nakuti tanpa dasar', 'Memperpanjang iklan saja', 'Mengganti kalimat ajakan'], ans: 0, exp: 'Data logis memperkuat daya bujuk (persuasivitas) teks.' },
      { text: 'Kalimat persuasi yang memadukan FAKTA + AJAKAN secara tepat adalah...', opts: ['"Tidur kurang dari 7 jam menurunkan konsentrasi belajar hingga 30%; karena itu, yuk atur jadwal istirahat lebih awal!"', '"Ayo tidur cepat pokoknya!"', '"Semua orang suka tidur siang."', '"Kasur di toko itu empuk."'], ans: 0, exp: 'Menghubungkan data dampak kurang tidur dengan ajakan konkret.' },
      { text: 'Kata ganti "kita" sering dipilih penulis teks persuasi dibanding "kalian" karena kata "kita"...', opts: ['Menciptakan kedekatan emosional dan rasa kebersamaan antara penulis dan pembaca', 'Terasa menyuruh dari atas', 'Tidak baku', 'Hanya untuk 1 orang'], ans: 0, exp: 'Pronomina inklusif "kita" membuat pembaca merasa diajak bersama-sama, bukan digurui.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-04', subSeq: 4,
    objectives: ['Siswa mampu mengidentifikasi ciri bahasa persuasif pada iklan, slogan, dan poster (singkat, padat, memikat, berima/berirama).'],
    materialTitle: 'Bahasa Persuasif pada Iklan, Slogan, dan Poster',
    blocks: [
      { type: 'table', title: 'Perbedaan Iklan, Slogan, dan Poster', headers: ['Bentuk', 'Unsur Utama', 'Ciri Khas'], rows: [
        ['Iklan', 'Teks + gambar + (audio/gerak di video)', 'Menawarkan produk/jasa/layanan masyarakat secara komunikatif'],
        ['Slogan', 'KATA-KATA singkat super kuat (motto)', 'Mengutamakan kekuatan kalimat pendek & mudah diingat ("Sekali Membaca, Membuka Dunia!")'],
        ['Poster', 'Teks singkat + GAMBAR/VISUAL mencolok', 'Dipasang di tempat umum atau media sosial agar langsung menarik perhatian mata'],
      ]},
    ],
    activityTitle: 'Latihan: Bahasa Persuasif Iklan & Slogan',
    questions: [
      { text: '"Hemat Energi, Selamatkan Bumi!" Ungkapan super singkat, padat, dan berima ini paling tepat disebut...', opts: ['Slogan', 'Cerpen', 'Laporan observasi', 'Biografi'], ans: 0, exp: 'Slogan mengandalkan kekuatan kata-kata pendek yang menancap di ingatan.' },
      { text: 'Unsur yang PALING membedakan POSTER dengan slogan murni adalah poster...', opts: ['Memadukan pesan singkat dengan kekuatan desain grafis/gambar mencolok untuk dipajang', 'Hanya berupa audio radio', 'Berisi 5 halaman teks', 'Tidak punya gambar'], ans: 0, exp: 'Poster mengandalkan daya tarik visual + teks ringkas.' },
      { text: 'Ciri bahasa iklan yang baik dan etis adalah...', opts: ['Komunikatif, singkat, persuasif, mudah dipahami, dan JUJUR tidak menipu konsumen', 'Menjanjikan khasiat palsu', 'Menjelekkan produk pesaing secara langsung', 'Panjang dan berbelit'], ans: 0, exp: 'Etika periklanan mewajibkan kejujuran informasi dan tidak merendahkan pihak lain.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-04', subSeq: 5,
    objectives: ['Siswa mampu menganalisis iklan komersial dan iklan layanan masyarakat (target audiens, pesan utama, keunggulan, dan kecermatan klaim).'],
    materialTitle: 'Menganalisis Iklan Komersial & Layanan Masyarakat',
    blocks: [
      { type: 'visual_cards', title: '3 Jenis Iklan Berdasarkan Isinya', cards: [
        { emoji: '🛍️', label: 'Iklan Penawaran (Niaga)', sub: 'Mempromosikan barang/jasa untuk dibeli konsumen' },
        { emoji: '💚', label: 'Iklan Layanan Masyarakat (ILM)', sub: 'Nonkomersial — edukasi kesehatan, anti-narkoba, taat pajak, hemat air' },
        { emoji: '📢', label: 'Iklan Pemberitahuan', sub: 'Pengumuman lomba, lowongan, jadwal acara, atau layanan publik' },
      ]},
    ],
    activityTitle: 'Latihan: Analisis Iklan & Kampanye',
    questions: [
      { text: 'Iklan poster dari Kementerian Kesehatan bertuliskan "Cegah DBD dengan 3M Plus: Menguras, Menutup, Mendaur Ulang!" tergolong jenis...', opts: ['Iklan Layanan Masyarakat (ILM)', 'Iklan niaga/komersial', 'Iklan lowongan kerja', 'Iklan baris jual motor'], ans: 0, exp: 'ILM bertujuan mengedukasi dan mengubah perilaku positif masyarakat tanpa motif jualan produk.' },
      { text: 'Sebagai konsumen kritis, saat melihat iklan minuman dengan klaim "100% langsung bikin pintar seketika!", sikap tepat kita adalah...', opts: ['Berpikir kritis dan mengecek komposisi/fakta ilmiahnya karena klaim tersebut berlebihan (overclaim)', 'Langsung membeli satu dus', 'Percaya tanpa berpikir', 'Berhenti belajar'], ans: 0, exp: 'Literasi iklan melatih kita membedakan fakta produk dari rayuan hiperbolis.' },
      { text: 'Menentukan SASARAN/TARGET AUDIENS (misalnya pelajar SMP vs orang tua) sangat penting dalam merancang kampanye poster karena menentukan...', opts: ['Pilihan gaya bahasa, ilustrasi warna, dan media pemasangan yang paling kena di hati sasaran', 'Harga kertas saja', 'Jumlah tanda titik', 'Tidak berpengaruh'], ans: 0, exp: 'Pesan efektif selalu disesuaikan dengan karakter pembacanya.' },
    ],
  },

  // BAB 5: TEKS RESENSI BUKU (6 sub)
  {
    topicCode: 'BIND-SMP8-05', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian, tujuan, dan manfaat teks resensi buku (fiksi dan nonfiksi).'],
    materialTitle: 'Pengertian dan Manfaat Resensi Buku',
    blocks: [
      { type: 'text', text: 'Resensi (ulasan) buku adalah tulisan yang membahas, meringkas, serta menilai kelebihan dan kekurangan sebuah buku (fiksi maupun nonfiksi) secara objektif guna memberi pertimbangan bagi calon pembaca apakah buku tersebut layak dibaca.' },
    ],
    activityTitle: 'Latihan: Pengertian Resensi',
    questions: [
      { text: 'Manfaat utama membaca teks RESENSI sebelum membeli atau meminjam sebuah buku adalah...', opts: ['Memperoleh gambaran isi, keunggulan, kekurangan, dan kesesuaian buku dengan minat kita', 'Menghafal seluruh halaman buku', 'Menggantikan membaca buku sepenuhnya', 'Mengetahui harga kertas pabrik'], ans: 0, exp: 'Resensi membantu calon pembaca memilih buku secara cerdas.' },
      { text: 'Orang yang menulis resensi buku disebut...', opts: ['Peresensi (resensator)', 'Penerbit', 'Ilustrator', 'Pencetak'], ans: 0, exp: 'Peresensi bertugas mengulas buku secara objektif.' },
      { text: 'Buku yang dapat diresensi meliputi...', opts: ['Buku fiksi (novel, kumpulan cerpen) maupun buku nonfiksi (biografi, sains populer, buku keterampilan)', 'Hanya kamus saja', 'Hanya novel fantasi saja', 'Hanya buku gambar'], ans: 0, exp: 'Baik fiksi maupun nonfiksi dapat diulas dengan fokus kriteria sesuai jenisnya.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-05', subSeq: 2,
    objectives: ['Siswa mampu menuliskan identitas buku (judul, pengarang, penerbit, tahun terbit, tebal halaman, ISBN) secara lengkap dan rapi.'],
    materialTitle: 'Identitas Buku dalam Resensi',
    blocks: [
      { type: 'table', title: 'Komponen Wajib Identitas Buku', headers: ['Komponen', 'Keterangan'], rows: [
        ['Judul Buku', 'Ditulis persis sesuai sampul (cetak miring bila di dalam paragraf)'],
        ['Penulis / Pengarang', 'Nama lengkap penulis (serta penerjemah bila buku terjemahan)'],
        ['Penerbit & Tahun Terbit', 'Nama penerbit, kota, cetakan, dan tahun terbit'],
        ['Tebal Halaman & ISBN', 'Jumlah halaman (mis. xiv + 210 hlm.) dan kode ISBN unik buku'],
      ]},
    ],
    activityTitle: 'Latihan: Identitas Buku',
    questions: [
      { text: 'Nomor identitas unik standar internasional berjumlah 13 digit yang dimiliki buku terbitan resmi disebut...', opts: ['ISBN (International Standard Book Number)', 'NIK', 'NISN', 'NPWP'], ans: 0, exp: 'ISBN adalah nomor katalog unik setiap edisi buku.' },
      { text: 'Penulisan judul buku di dalam kalimat paragraf resensi yang BENAR sesuai EYD V adalah...', opts: ['Novel *Laskar Pelangi* karya Andrea Hirata menginspirasi jutaan pelajar Indonesia. (dicetak miring)', 'Novel "laskar pelangi" karya Andrea Hirata...', 'Novel Laskar pelangi karya andrea hirata...', 'Novel LASKAR PELANGI...'], ans: 0, exp: 'Judul buku di dalam teks paragraf ditulis huruf miring (italic) dengan huruf kapital awal kata utama.' },
      { text: 'Informasi tentang nama penerbit, tahun cetak, dan ISBN sebuah buku cetak biasanya ditemukan di halaman...', opts: ['Halaman hak cipta (katalog dalam terbitan / balik halaman judul) dan sampul belakang', 'Halaman paling tengah', 'Daftar pustaka', 'Catatan kaki'], ans: 0, exp: 'Halaman KDT (Katalog Dalam Terbitan) di awal buku mencantumkan data lengkap publikasi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-05', subSeq: 3,
    objectives: ['Siswa mampu menulis sinopsis/ringkasan isi buku secara padat, menarik, dan bebas spoiler akhir cerita (untuk fiksi).'],
    materialTitle: 'Menyusun Ringkasan Isi / Sinopsis Buku',
    blocks: [
      { type: 'tip', text: 'Etika sinopsis buku FIKSI: ceritakan tokoh utama, latar, dan konflik pemantik secara memikat — TAPI JANGAN bocorkan kejutan akhir (spoiler ending) agar pembaca tetap penasaran membacanya sendiri! Untuk NONFIKSI: rangkum garis besar bab dan topik kuncinya.' },
    ],
    activityTitle: 'Latihan: Ringkasan Isi Resensi',
    questions: [
      { text: 'Hal yang sebaiknya DIHINDARI saat menulis sinopsis novel fiksi di dalam resensi buku adalah...', opts: ['Membocorkan kejutan akhir cerita (spoiler) secara gamblang', 'Memperkenalkan tokoh utama dan konflik awal', 'Menuliskan alur secara ringkas dengan bahasa sendiri', 'Menjelaskan tema utama novel'], ans: 0, exp: 'Spoiler mengurangi kenikmatan calon pembaca.' },
      { text: 'Pada resensi buku NONFIKSI (misalnya buku tips belajar efektif), bagian ringkasan isi terutama memuat...', opts: ['Garis besar pokok bahasan, konsep utama, dan struktur bab buku tersebut', 'Watak tokoh antagonis', 'Dialog imajinatif', 'Akhir misteri pembunuhan'], ans: 0, exp: 'Buku nonfiksi diringkas berdasarkan gagasan dan materi utamanya.' },
      { text: 'Sinopsis dalam resensi sebaiknya ditulis dengan...', opts: ['Bahasa sendiri yang padat, mengalir, dan setia pada isi asli buku', 'Menyalin penuh bab 1 sampai bab 5', 'Mengarang tokoh baru yang tidak ada di buku', 'Hanya 1 kata'], ans: 0, exp: 'Parafrase akurat menunjukkan pemahaman peresensi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-05', subSeq: 4,
    objectives: ['Siswa mampu menganalisis kelebihan dan kekurangan buku dari aspek isi, bahasa, alur/sistematika, dan tampilan fisik.'],
    materialTitle: 'Menilai Kelebihan dan Kekurangan Buku',
    blocks: [
      { type: 'table', title: '4 Aspek Evaluasi Buku', headers: ['Aspek', 'Hal yang Dinilai'], rows: [
        ['Isi / Materi', 'Kedalaman cerita/data, orisinalitas gagasan, kebermanfaatan pesan'],
        ['Kebahasaan', 'Kemudahan dipahami, keindahan diksi, ada tidaknya salah ketik (typo)'],
        ['Sistematika / Alur', 'Keruntutan bab (nonfiksi) atau kelancaran alur & logika konflik (fiksi)'],
        ['Tampilan Fisik', 'Desain sampul, tata letak (layout), kualitas kertas, ilustrasi/diagram'],
      ]},
    ],
    activityTitle: 'Latihan: Kelebihan & Kekurangan Buku',
    questions: [
      { text: '"Bahasa buku ini sangat mengalir dan dilengkapi ilustrasi menarik sehingga mudah dipahami remaja; sayangnya, masih ditemukan beberapa salah ketik pada bab 3." Kutipan resensi ini adalah bagian...', opts: ['Analisis kelebihan dan kekurangan buku', 'Identitas buku', 'Sinopsis cerita', 'Judul resensi'], ans: 0, exp: 'Menimbang sisi unggul sekaligus catatan perbaikan buku secara objektif.' },
      { text: 'Penilaian kekurangan buku yang profesional dan objektif dicontohkan oleh kalimat...', opts: ['"Beberapa istilah ilmiah di bab 4 belum disertai glosarium sehingga pembaca pemula perlu mencarinya di kamus."', '"Buku ini sangat membosankan dan jelek."', '"Sampulnya tidak sesuai warna favoritku."', '"Penulisnya pasti malas."'], ans: 0, exp: 'Menyebutkan kekurangan spesifik beserta alasannya secara sopan.' },
      { text: 'Mengapa resensi buku sebaiknya tetap objektif menyebutkan kelebihan maupun kekurangan secara proporsional?', opts: ['Agar penilaian jujur, kredibel, dan memberi masukan bermanfaat bagi pembaca serta penerbit', 'Agar buku tidak laku', 'Agar terlihat sombong', 'Karena wajib mencari-cari kesalahan'], ans: 0, exp: 'Kejujuran dan keseimbangan membangun kepercayaan pembaca resensi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-05', subSeq: 5,
    objectives: ['Siswa mampu merumuskan kesimpulan penilaian akhir dan rekomendasi sasaran pembaca buku.'],
    materialTitle: 'Penilaian Akhir dan Rekomendasi Pembaca',
    blocks: [
      { type: 'text', text: 'Bagian penutup resensi merangkum penilaian keseluruhan (apakah buku ini layak dibaca/dikoleksi?) dan menyebutkan SIAPA sasaran pembaca paling cocok (misalnya pelajar SMP, pecinta sains, atau orang tua).' },
    ],
    activityTitle: 'Latihan: Penilaian & Rekomendasi',
    questions: [
      { text: '"Terlepas dari beberapa catatan kecil pada tata letak, buku ini sangat direkomendasikan bagi pelajar SMP yang ingin melatih keterampilan menulis kreatif." Kutipan ini tepat diletakkan pada bagian...', opts: ['Simpulan dan rekomendasi penutup resensi', 'Identitas buku', 'Daftar isi', 'Judul'], ans: 0, exp: 'Menyimpulkan kelayakan buku dan target pembacanya.' },
      { text: 'Konjungsi penerang yang sering dipakai dalam teks resensi untuk memperjelas isi buku adalah...', opts: ['bahwa, yakni, yaitu', 'melainkan', 'sedangkan', 'kecuali'], ans: 0, exp: 'Konjungsi penerang memperjelas gagasan atau isi buku yang diulas.' },
      { text: 'Konjungsi temporal/urutan yang sering muncul saat meringkas cerita fiksi dalam resensi adalah...', opts: ['sejak, semenjak, kemudian, akhirnya', 'karena', 'sehingga', 'padahal'], ans: 0, exp: 'Mengikuti kronologi peristiwa dalam buku.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-05', subSeq: 6,
    objectives: ['Siswa mampu menyusun teks resensi buku sederhana lengkap dari judul resensi hingga rekomendasi.'],
    materialTitle: 'Menulis Resensi Buku Sederhana',
    blocks: [
      { type: 'list', title: '6 Bagian Resensi Buku Lengkap', items: ['1. Judul Resensi (buat unik & memikat, BUKAN sekadar menyalin judul buku!).', '2. Identitas Buku.', '3. Pembuka / Orientasi singkat (latar pengarang atau daya tarik buku).', '4. Sinopsis / Ringkasan Isi.', '5. Analisis Kelebihan & Kekurangan.', '6. Simpulan & Rekomendasi pembaca!'] },
    ],
    activityTitle: 'Latihan: Menulis Resensi',
    questions: [
      { text: 'Manakah judul RESENSI yang paling menarik untuk mengulas buku motivasi belajar berjudul *Cerdas Mengatur Waktu*?', opts: ['Strategi Jitu Anti-Menunda bagi Pelajar Sibuk', 'Cerdas Mengatur Waktu', 'Tugas Bahasa Indonesia Kelas 8', 'Buku Bagus'], ans: 0, exp: 'Judul resensi kreatif menggambarkan inti ulasan dan memancing minat baca.' },
      { text: 'Syarat mutlak sebelum seseorang mulai menulis resensi sebuah buku adalah...', opts: ['Membaca buku tersebut secara tuntas dan mencatat poin penting setiap bab', 'Hanya membaca halaman sampul belakang', 'Menanyakan ke teman tanpa membaca', 'Melihat jumlah halamannya saja'], ans: 0, exp: 'Membaca tuntas menjamin ulasan akurat dan adil.' },
      { text: 'Struktur lengkap teks resensi secara berurutan adalah...', opts: ['Judul resensi → Identitas buku → Orientasi/pembuka → Sinopsis → Analisis kelebihan & kekurangan → Rekomendasi', 'Rekomendasi → Judul → Identitas', 'Sinopsis saja', 'Daftar harga saja'], ans: 0, exp: 'Urutan sistematis memudahkan pembaca mengikuti alur ulasan.' },
    ],
  },

  // BAB 6: TEKS LAPORAN DAN HASIL WAWANCARA (5 sub)
  {
    topicCode: 'BIND-SMP8-06', subSeq: 1,
    objectives: ['Siswa mampu menentukan topik wawancara yang fokus, bermanfaat, dan memilih narasumber yang tepat/kompeten.'],
    materialTitle: 'Menentukan Topik dan Narasumber Wawancara',
    blocks: [
      { type: 'text', text: 'Wawancara adalah tanya jawab terencana antara pewawancara dan narasumber untuk menggali informasi, pengalaman, atau pandangan langsung. Kuncinya: pilih topik yang SPESIFIK dan pilih narasumber yang KOMPETEN (ahli atau pelaku langsung di bidang topik tersebut!).' },
    ],
    activityTitle: 'Latihan: Topik & Narasumber',
    questions: [
      { text: 'Jika kelompokmu ingin menggali informasi tentang cara menjaga kelestarian jajanan tradisional pudak atau otak-otak bandeng di Gresik, narasumber yang PALING tepat adalah...', opts: ['Pengrajin/pelaku usaha kuliner tradisional berpengalaman dan/atau pengurus koperasi UMKM setempat', 'Siswa kelas 1 SD yang belum tahu prosesnya', 'Turis yang baru pertama kali datang 5 menit lalu', 'Siapa saja secara acak'], ans: 0, exp: 'Narasumber harus menguasai langsung bidang yang ditanyakan.' },
      { text: 'Manakah rumusan topik wawancara yang paling FOKUS dan mudah digali untuk siswa SMP?', opts: ['"Strategi Pengelolaan Bank Sampah Sekolah untuk Mengurangi Sampah Plastik"', '"Segala Hal Tentang Bumi"', '"Kehidupan"', '"Semua Masalah Dunia"'], ans: 0, exp: 'Topik spesifik menghasilkan pertanyaan tajam dan laporan terarah.' },
      { text: 'Hal penting yang harus dilakukan sebelum hari wawancara setelah menentukan narasumber adalah...', opts: ['Meminta izin/kesediaan narasumber terlebih dahulu dan menyepakati jadwal serta tempat', 'Langsung datang mendadak tanpa janji saat narasumber sibuk', 'Merekam diam-diam tanpa izin', 'Tidak menyiapkan catatan'], ans: 0, exp: 'Etika wawancara dimulai dari permohonan izin dan kesepakatan jadwal.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-06', subSeq: 2,
    objectives: ['Siswa mampu menyusun daftar pertanyaan wawancara terbuka berbasis 5W+1H (ADIKSIMBA) secara runtut.'],
    materialTitle: 'Menyusun Daftar Pertanyaan Wawancara',
    blocks: [
      { type: 'tip', text: 'Gunakan PERTANYAAN TERBUKA ("Bagaimana proses...", "Mengapa Ibu memilih...", "Apa tantangan terbesar...") agar narasumber bercerita panjang dan kaya data! Hindari terlalu banyak pertanyaan tertutup ("Apakah senang?") yang hanya dijawab "Ya/Tidak"!' },
    ],
    activityTitle: 'Latihan: Menyusun Pertanyaan Wawancara',
    questions: [
      { text: 'Manakah pertanyaan wawancara TERBUKA yang paling efektif menggali informasi mendalam dari seorang petani tambak?', opts: ['"Bagaimana cara Bapak menjaga kualitas air tambak saat pergantian musim hujan dan kemarau?"', '"Apakah Bapak punya tambak?"', '"Ikan di sini hidup di air ya?"', '"Bapak suka ikan?"'], ans: 0, exp: 'Pertanyaan "Bagaimana" mendorong penjelasan teknis yang kaya.' },
      { text: 'Daftar pertanyaan wawancara sebaiknya disusun dari...', opts: ['Pertanyaan pembuka yang ringan/umum menuju pertanyaan inti yang lebih mendalam', 'Pertanyaan pribadi yang menyinggung di awal', 'Acak tanpa urutan', 'Hanya satu pertanyaan panjang berbelit'], ans: 0, exp: 'Urutan bertahap (corong) membuat narasumber nyaman dan alur logis.' },
      { text: 'Menyiapkan daftar pertanyaan tertulis sebelum wawancara bertujuan agar...', opts: ['Wawancara terarah, semua unsur 5W+1H tergali, dan tidak banyak waktu terbuang', 'Narasumber tidak boleh bicara bebas', 'Pewawancara hanya membaca tanpa mendengarkan jawaban', 'Pertanyaan tidak boleh berkembang'], ans: 0, exp: 'Pedoman wawancara menjaga fokus namun tetap fleksibel mengikuti jawaban.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-06', subSeq: 3,
    objectives: ['Siswa mampu mempraktikkan etika dan teknik wawancara (salam, izin rekam, menyimak aktif, pertanyaan lanjutan, dan penutup santun).'],
    materialTitle: 'Etika dan Teknik Pelaksanaan Wawancara',
    blocks: [
      { type: 'list', title: '5 Etika Emas Saat Wawancara', items: ['1. Datang tepat waktu, berpakaian rapi, ucapkan salam, perkenalkan diri & tujuan wawancara.', '2. Minta izin terlebih dahulu jika hendak merekam suara atau memotret.', '3. Dengarkan penuh perhatian, JANGAN memotong pembicaraan narasumber.', '4. Ajukan pertanyaan lanjutan (follow-up) yang relevan jika ada detail menarik.', '5. Ucapkan terima kasih dan pamit dengan santun!'] },
    ],
    activityTitle: 'Latihan: Teknik Wawancara',
    questions: [
      { text: 'Ketika narasumber sedang antusias menjelaskan pengalamannya, sikap pewawancara yang profesional adalah...', opts: ['Menyimak penuh perhatian, menjaga kontak mata, mencatat poin kunci, dan tidak memotong pembicaraan', 'Sibuk membalas chat di ponsel', 'Langsung memotong dan mengganti topik', 'Menertawakan jawaban narasumber'], ans: 0, exp: 'Menyimak aktif menghargai narasumber sekaligus menangkap informasi penting.' },
      { text: 'Sebelum menekan tombol rekam suara di ponsel saat wawancara, pewawancara wajib...', opts: ['Meminta izin secara sopan kepada narasumber terlebih dahulu', 'Merekam sembunyi-sembunyi di dalam saku', 'Tidak perlu izin', 'Langsung menyiarkan live tanpa memberi tahu'], ans: 0, exp: 'Izin rekam adalah etika privasi dan jurnalistik dasar.' },
      { text: 'Jika ada jawaban narasumber yang masih kurang jelas istilahnya, tindakan tepat pewawancara adalah...', opts: ['Meminta klarifikasi dengan sopan ("Mohon maaf Pak, boleh dijelaskan sedikit maksud istilah ... tadi?")', 'Diam saja lalu mengarang sendiri artinya nanti', 'Menyalahkan narasumber', 'Menghentikan wawancara'], ans: 0, exp: 'Klarifikasi langsung mencegah kesalahan tafsir dalam laporan.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-06', subSeq: 4,
    objectives: ['Siswa mampu mengolah catatan/rekaman wawancara menjadi transkrip ringkas, memilih informasi kunci, dan memisahkan kutipan langsung/tak langsung.'],
    materialTitle: 'Mengolah Data Hasil Wawancara',
    blocks: [
      { type: 'text', text: 'Data mentah wawancara (rekaman/catatan) tidak langsung ditempel mentah semua! Olah dengan: (1) menulis ulang poin penting, (2) mengelompokkan jawaban sesuai subtopik, (3) merapikan bahasa lisan tanpa mengubah makna asli narasumber, dan (4) memilih 1–2 kutipan langsung paling kuat!' },
    ],
    activityTitle: 'Latihan: Mengolah Data Wawancara',
    questions: [
      { text: 'Prinsip kejujuran yang WAJIB dijaga saat mengolah catatan hasil wawancara menjadi laporan adalah...', opts: ['Tidak mengubah maksud, fakta, atau menambah pernyataan yang tidak pernah diucapkan narasumber', 'Mengubah jawaban narasumber agar sesuai keinginan kita', 'Menghapus semua fakta penting', 'Menambah angka karangan sendiri'], ans: 0, exp: 'Akurasi dan kejujuran terhadap pernyataan narasumber adalah kode etik laporan.' },
      { text: 'Mengelompokkan jawaban-jawaban narasumber berdasarkan tema (misal: Latar Belakang Usaha, Proses Produksi, Tantangan, dan Harapan) bertujuan agar...', opts: ['Laporan hasil wawancara mudah dibaca, sistematis, dan tidak melompat-lompat', 'Semua jawaban hilang', 'Laporan jadi seperti puisi', 'Lebih sulit dipahami'], ans: 0, exp: 'Kategorisasi tematik membuat laporan informatif dan terstruktur.' },
      { text: 'Bentuk penulisan hasil wawancara yang mengubah dialog tanya-jawab menjadi paragraf narasi/deskripsi utuh disebut bentuk...', opts: ['Narasi / deskripsi laporan (bukan format tanya-jawab mentah)', 'Naskah drama', 'Pantun', 'Iklan'], ans: 0, exp: 'Laporan wawancara profesional umumnya disajikan dalam paragraf narasi informatif dilengkapi kutipan.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-06', subSeq: 5,
    objectives: ['Siswa mampu menyusun laporan hasil wawancara lengkap sesuai sistematika baku (Latar Belakang, Tujuan, Topik, Waktu/Tempat, Narasumber, Hasil, Simpulan).'],
    materialTitle: 'Menyusun Laporan Hasil Wawancara',
    blocks: [
      { type: 'table', title: 'Sistematika Laporan Hasil Wawancara SMP', headers: ['Bagian', 'Isinya'], rows: [
        ['1. Latar Belakang & Tujuan', 'Alasan memilih topik dan hal yang ingin diketahui'],
        ['2. Topik, Waktu, & Tempat', 'Fokus wawancara, hari/tanggal, jam, dan lokasi pelaksanaan'],
        ['3. Identitas Narasumber & Pewawancara', 'Nama lengkap, profesi/jabatan narasumber, serta nama tim pewawancara'],
        ['4. Hasil Wawancara', 'Uraian tematik informasi yang diperoleh + kutipan penting narasumber'],
        ['5. Simpulan & Saran', 'Inti sari temuan dan saran/refleksi singkat'],
      ]},
    ],
    activityTitle: 'Latihan: Menyusun Laporan Wawancara',
    questions: [
      { text: 'Bagian laporan hasil wawancara yang mencantumkan hari, tanggal, jam, lokasi, serta nama dan profesi narasumber berfungsi untuk...', opts: ['Memberikan kejelasan konteks dan pertanggungjawaban keabsahan data wawancara', 'Sekadar hiasan halaman', 'Mengganti isi wawancara', 'Menutup laporan'], ans: 0, exp: 'Kelengkapan data teknis membuktikan wawancara benar-benar dilaksanakan.' },
      { text: 'Bahasa yang digunakan dalam penulisan laporan hasil wawancara resmi di sekolah adalah...', opts: ['Bahasa Indonesia baku, lugas, dan sesuai EYD V', 'Bahasa singkatan chat', 'Bahasa gaul', 'Campuran tidak teratur'], ans: 0, exp: 'Laporan ilmiah/sekolah menggunakan ragam bahasa formal baku.' },
      { text: 'Bagian terakhir laporan hasil wawancara yang merangkum inti seluruh temuan dari narasumber disebut...', opts: ['Simpulan', 'Latar belakang', 'Daftar pertanyaan', 'Lampiran foto saja'], ans: 0, exp: 'Simpulan memadatkan jawaban atas tujuan wawancara.' },
    ],
  },

  // BAB 7: CERPEN DAN DRAMA (7 sub)
  {
    topicCode: 'BIND-SMP8-07', subSeq: 1,
    objectives: ['Siswa mampu membandingkan unsur intrinsik cerpen dan teks drama (prolog, dialog, epilog, tokoh, latar, alur, amanat).'],
    materialTitle: 'Unsur Intrinsik Cerpen dan Teks Drama',
    blocks: [
      { type: 'table', title: 'Cerpen vs Teks Drama', headers: ['Aspek', 'Cerpen (Prosa)', 'Drama (Lakon)'], rows: [
        ['Bentuk Utama', 'Paragraf narasi + sedikit dialog', 'Dominan DIALOG (wawancang) + petunjuk lakuan (kramagung)'],
        ['Struktur Khas', 'Orientasi → Komplikasi → Resolusi', 'Prolog → Dialog (Orientasi–Komplikasi–Resolusi) → Epilog'],
        ['Penyajian', 'Dibaca langsung sebagai teks', 'Dirancang untuk DIPENTASKAN di atas panggung'],
      ]},
    ],
    activityTitle: 'Latihan: Unsur Intrinsik Cerpen & Drama',
    questions: [
      { text: 'Petunjuk perilaku, ekspresi, gerak tubuh, atau suasana panggung di dalam naskah drama yang biasanya ditulis di dalam tanda kurung (...) dan cetak miring disebut...', opts: ['Kramagung', 'Wawancang', 'Prolog', 'Epilog'], ans: 0, exp: 'Kramagung = petunjuk lakuan (tidak diucapkan aktor); Wawancang = dialog yang diucapkan.' },
      { text: 'Bagian kata pengantar di awal pementasan drama yang memperkenalkan latar, tokoh, atau gambaran umum konflik disebut...', opts: ['Prolog', 'Epilog', 'Monolog', 'Kramagung'], ans: 0, exp: 'Prolog di awal; Epilog adalah penutup/simpulan pesan di akhir pementasan.' },
      { text: 'Persamaan mendasar antara cerpen dan drama adalah keduanya sama-sama memiliki unsur intrinsik berupa...', opts: ['Tema, tokoh dan penokohan, latar, alur, konflik, dan amanat', 'Hanya rima a-b-a-b', 'Tesis dan argumentasi', 'Alat dan bahan memasak'], ans: 0, exp: 'Cerpen dan drama sama-sama karya sastra naratif yang membangun konflik dan karakter.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-07', subSeq: 2,
    objectives: ['Siswa mampu menganalisis perkembangan konflik (awal masalah, ketegangan meningkat, klimaks, antiklimaks) pada cerpen dan drama.'],
    materialTitle: 'Analisis Konflik Cerpen dan Drama',
    blocks: [
      { type: 'text', text: 'Konflik adalah benturan kepentingan, nilai, atau batin yang menjadi nyawa cerpen dan drama. Dalam drama, konflik terasa hidup langsung lewat adu dialog antartokoh di atas panggung hingga mencapai KLIMAKS (puncak ketegangan)!' },
    ],
    activityTitle: 'Latihan: Konflik Cerpen & Drama',
    questions: [
      { text: 'Puncak ketegangan tertinggi dalam cerpen atau drama ketika masalah tidak bisa lagi ditunda dan menuntut keputusan besar tokoh disebut...', opts: ['Klimaks', 'Prolog', 'Eksposisi', 'Epilog'], ans: 0, exp: 'Klimaks adalah titik balik dan puncak konflik.' },
      { text: 'Percakapan seorang tokoh dengan dirinya sendiri di atas panggung yang mengungkapkan kegalauan batinnya disebut...', opts: ['Monolog', 'Prolog', 'Kramagung', 'Sinopsis'], ans: 0, exp: 'Monolog sangat efektif menampilkan konflik internal tokoh di panggung drama.' },
      { text: 'Tahap setelah klimaks ketika ketegangan mulai mereda menuju penyelesaian konflik disebut...', opts: ['Antiklimaks / peleraian (falling action)', 'Orientasi awal', 'Prolog', 'Daftar tokoh'], ans: 0, exp: 'Peleraian menjembatani puncak konflik menuju resolusi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-07', subSeq: 3,
    objectives: ['Siswa mampu menganalisis karakterisasi tokoh melalui dialog, kramagung, tindakan, dan reaksi tokoh lain.'],
    materialTitle: 'Penokohan dalam Cerpen dan Drama',
    blocks: [
      { type: 'tip', text: 'Di dalam naskah drama TIDAK ada narator panjang — watak tokoh hampir 100% terungkap secara DRAMATIK lewat pilihan kata dalam dialognya (wawancang), intonasi, dan gerak-gerik di dalam kramagung!' },
    ],
    activityTitle: 'Latihan: Penokohan',
    questions: [
      { text: 'Raka: (menepuk bahu Dito sambil tersenyum hangat) "Tenang saja, Dit, besok kita latihan bareng lagi sampai kamu lancar." Dari kramagung dan dialog tersebut, watak Raka adalah...', opts: ['Suportif, ramah, dan setia kawan', 'Egois dan pemarah', 'Sombong', 'Acuh tak acuh'], ans: 0, exp: 'Gerak menepuk bahu ramah dan tawaran membantu mencerminkan sikap suportif.' },
      { text: 'Tokoh penengah atau pendamping yang sering memberi nasihat bijak untuk meredakan konflik antara protagonis dan antagonis disebut tokoh...', opts: ['Tritagonis', 'Antagonis', 'Narator', 'Figuran diam'], ans: 0, exp: 'Protagonis (utama), Antagonis (penentang), Tritagonis (penengah/pembantu).' },
      { text: 'Perbedaan cara menggambarkan watak tokoh dalam drama dibanding cerpen adalah...', opts: ['Drama mengandalkan dialog dan kramagung (dramatik), sedangkan cerpen dapat menggabungkan deskripsi langsung (analitik) dan dramatik', 'Drama tidak punya tokoh', 'Cerpen tidak boleh ada dialog', 'Drama hanya berisi puisi'], ans: 0, exp: 'Drama dihidupkan lewat akting dan percakapan langsung.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-07', subSeq: 4,
    objectives: ['Siswa mampu menganalisis alur cerpen dan pembagian babak/adegan dalam drama.'],
    materialTitle: 'Alur Cerpen dan Pembagian Babak/Adegan Drama',
    blocks: [
      { type: 'text', text: 'Dalam naskah drama, alur dipecah menjadi BABAK (perubahan besar latar tempat/waktu) dan ADEGAN (bagian di dalam babak yang ditandai keluar-masuknya tokoh di panggung).' },
    ],
    activityTitle: 'Latihan: Alur & Babak Drama',
    questions: [
      { text: 'Bagian dalam satu babak drama yang berubah setiap kali ada tokoh baru masuk atau keluar dari panggung disebut...', opts: ['Adegan', 'Epilog', 'Tema', 'Amanat'], ans: 0, exp: 'Satu babak terdiri dari beberapa adegan.' },
      { text: 'Pergantian latar panggung dari "Ruang Kelas Pagi Hari" menjadi "Teras Rumah Malam Hari" dalam pementasan drama biasanya menandai pergantian...', opts: ['Babak baru', 'Judul drama', 'Sutradara', 'Penonton'], ans: 0, exp: 'Babak membagi satuan waktu dan tempat besar dalam drama.' },
      { text: 'Urutan 5 tahap alur klasik (Piramida Freytag) yang sering digunakan baik di cerpen maupun drama adalah...', opts: ['Pengenalan → Pemunculan konflik → Klimaks → Peleraian → Penyelesaian', 'Penyelesaian → Klimaks → Pengenalan', 'Klimaks → Prolog → Judul', 'Epilog → Konflik'], ans: 0, exp: 'Struktur dramatik bergerak naik menuju klimaks lalu turun ke penyelesaian.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-07', subSeq: 5,
    objectives: ['Siswa mampu menulis dialog (wawancang) dan petunjuk lakuan (kramagung) yang alami, ekspresif, dan sesuai kaidah penulisan naskah drama.'],
    materialTitle: 'Menulis Dialog (Wawancang) dan Kramagung',
    blocks: [
      { type: 'worked_example', level: 'Format Baku Naskah Drama', question: 'Bagaimana format penulisan 2 baris dialog drama yang benar?', steps: ['Nama tokoh (kapital) diikuti titik dua (:), kramagung di dalam kurung, lalu ucapan langsung (boleh tanpa tanda petik ganda pada naskah drama standar, atau konsisten).', 'SARI: (mengernyit heran) "Lho, bukankah jadwal piket hari ini giliran regu kita?"', 'BIMA: (bergegas mengambil sapu) "Benar, Sar! Ayo kita bersihkan sekarang!"'], answer: 'Dialog alami, ringkas, dan mencerminkan emosi tokoh!' },
    ],
    activityTitle: 'Latihan: Dialog & Kramagung',
    questions: [
      { text: 'Ciri dialog (wawancang) naskah drama yang baik untuk dipentaskan adalah...', opts: ['Alami seperti tuturan hidup, tidak bertele-tele, memajukan konflik, dan menggambarkan karakter tokoh', 'Berupa paragraf ilmiah panjang 20 baris', 'Semua tokoh berbicara dengan gaya bahasa kaku persis sama', 'Tanpa emosi apa pun'], ans: 0, exp: 'Dialog drama harus enak diucapkan dan langsung menghidupkan konflik.' },
      { text: 'Fungsi penulisan kramagung seperti "(suara bergetar menahan tangis)" bagi aktor pementasan drama adalah...', opts: ['Memandu ekspresi wajah, intonasi suara, dan gerak tubuh saat mengucapkan dialog', 'Untuk dibaca keras-keras ke penonton', 'Mengganti nama tokoh', 'Menjadi judul drama'], ans: 0, exp: 'Kramagung adalah panduan akting bagi pemeran dan sutradara.' },
      { text: 'Saat mengubah sebuah cerpen menjadi naskah drama (alih wahana), bagian narasi deskriptif cerpen umumnya diubah menjadi...', opts: ['Dialog antartokoh, kramagung, serta prolog singkat bila perlu', 'Daftar pustaka', 'Tabel angka', 'Dihapus semua tanpa sisa cerita'], ans: 0, exp: 'Alih wahana menerjemahkan narasi tertulis menjadi aksi dan dialog panggung.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-07', subSeq: 6,
    objectives: ['Siswa mampu menginterpretasikan nilai kehidupan (moral, sosial, budaya, religius) dan amanat dalam cerpen serta drama.'],
    materialTitle: 'Interpretasi Nilai Kehidupan dan Pesan Sastra',
    blocks: [
      { type: 'table', title: '4 Nilai Kehidupan dalam Cerpen & Drama', headers: ['Jenis Nilai', 'Contohnya dalam Cerita'], rows: [
        ['Nilai Moral', 'Kejujuran, tanggung jawab, keberanian mengakui kesalahan'],
        ['Nilai Sosial', 'Gotong royong, empati menolong teman kesusahan, persahabatan'],
        ['Nilai Budaya', 'Menghormati adat, unggah-ungguh kepada orang tua, melestarikan tradisi'],
        ['Nilai Religius', 'Bersyukur, sabar, berdoa, dan tawakal menghadapi ujian'],
      ]},
    ],
    activityTitle: 'Latihan: Interpretasi Pesan Sastra',
    questions: [
      { text: 'Dalam sebuah drama, warga kampung bergotong royong memperbaiki rumah nenek yang atapnya bocor diterjang hujan angin. Nilai kehidupan yang paling menonjol adalah...', opts: ['Nilai sosial', 'Nilai ekonomi semata', 'Nilai politik', 'Nilai komersial'], ans: 0, exp: 'Kepedulian dan tolong-menolong antarsesama mencerminkan nilai sosial.' },
      { text: 'Menginterpretasikan amanat sebuah cerpen berarti...', opts: ['Menafsirkan pesan kebaikan yang tersirat maupun tersurat lalu mengaitkannya dengan kehidupan nyata pembaca', 'Menghitung jumlah huruf', 'Menghafal nama penerbit', 'Mengubah akhir cerita secara acak'], ans: 0, exp: 'Interpretasi menangkap makna mendalam di balik peristiwa cerita.' },
      { text: 'Epilog yang dibacakan di akhir pementasan drama sering berfungsi untuk...', opts: ['Menyimpulkan kisah dan menegaskan pesan/renungan bagi penonton', 'Memulai konflik baru', 'Memperkenalkan kru panggung di awal', 'Mengganti kostum'], ans: 0, exp: 'Epilog menutup lakon dengan refleksi bermakna.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-07', subSeq: 7,
    objectives: ['Siswa mampu merancang dan menulis cerita pendek utuh (1–2 halaman) dengan teknik "show, don\'t tell" dan penyuntingan rapi.'],
    materialTitle: 'Menulis Cerita Pendek',
    blocks: [
      { type: 'tip', text: 'Rahasia penulis cerpen hebat — teknik "SHOW, DON\'T TELL" (Tunjukkan, jangan cuma sebutkan!): Daripada menulis "Raka sangat gugup", tunjukkan lewat detail konkret: "Telapak tangan Raka berkeringat dingin; berkali-kali ia meremas kertas pidatonya sambil menelan ludah."' },
    ],
    activityTitle: 'Latihan: Menulis Cerpen',
    questions: [
      { text: 'Manakah kalimat cerpen yang menerapkan teknik "Show, Don\'t Tell" (menunjukkan emosi lewat detail tindakan) untuk menggambarkan rasa marah?', opts: ['"Rahangnya mengeras, alisnya bertaut tajam, dan ia menutup buku itu dengan bunyi debam yang membuat seisi ruang hening."', '"Ia sangat marah sekali hari itu."', '"Rasa marahnya sebesar gunung."', '"Dia lagi emosi."'], ans: 0, exp: 'Pembaca langsung merasakan kemarahan tokoh lewat gerak dan suasana tanpa harus diberitahu kata "marah".' },
      { text: 'Karena cerpen berfokus pada satu kisah singkat (habis dibaca sekali duduk), jumlah konflik utama yang ideal dalam satu cerpen adalah...', opts: ['Satu konflik utama yang fokus, mendalam, dan tuntas diselesaikan', 'Sepuluh konflik besar sekaligus yang tak selesai', 'Tanpa konflik sama sekali', 'Hanya daftar nama tokoh'], ans: 0, exp: 'Kepadatan dan fokus pada satu konflik utama adalah ciri khas cerpen.' },
      { text: 'Tahap penting setelah draf pertama cerpen selesai ditulis adalah...', opts: ['Membaca ulang dan menyunting alur, keefektifan kalimat, tanda baca dialog, serta ejaan EYD V', 'Langsung mengumpulkan tanpa dibaca ulang', 'Menghapus bagian klimaks', 'Mengganti judul jadi kosong'], ans: 0, exp: 'Revisi dan penyuntingan menaikkan mutu cerita secara drastis.' },
    ],
  },

  // BAB 8: PUISI DAN BAHASA FIGURATIF (7 sub)
  {
    topicCode: 'BIND-SMP8-08', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian puisi modern (puisi bebas) dan peran diksi (pilihan kata) yang padat makna.'],
    materialTitle: 'Diksi dalam Puisi Modern',
    blocks: [
      { type: 'text', text: 'Puisi mengungkapkan pikiran dan perasaan penyair melalui bahasa yang padat, indah, dan penuh daya sugesti. DIKSI (pilihan kata) adalah kunci puisi: penyair memilih kata paling tepat rasa dan bunyinya (misalnya "senja menyala" alih-alih sekadar "sore hari").' },
    ],
    activityTitle: 'Latihan: Diksi Puisi',
    questions: [
      { text: 'Yang dimaksud dengan DIKSI dalam puisi adalah...', opts: ['Pilihan kata yang cermat, padat makna, dan selaras rasa oleh penyair', 'Jumlah bait puisi', 'Nama pengarang', 'Tinggi suara pembaca'], ans: 0, exp: 'Diksi menyangkut ketepatan dan keindahan pilihan kata.' },
      { text: 'Perbedaan utama PUISI MODERN (puisi bebas) dibanding puisi lama (pantun/syair) adalah puisi modern...', opts: ['Tidak terikat ketat pada jumlah baris per bait, jumlah suku kata, atau pola rima tetap', 'Wajib bersajak a-b-a-b', 'Wajib punya sampiran', 'Tidak boleh memakai majas'], ans: 0, exp: 'Puisi modern lebih bebas bentuknya namun tetap kaya diksi, rima batin, dan imaji.' },
      { text: 'Kata "gugur" yang dipilih penyair untuk pahlawan (alih-alih kata "mati") menunjukkan pertimbangan diksi dari aspek...', opts: ['Nilai rasa / penghormatan (nuansa makna)', 'Jumlah huruf', 'Abjad', 'Harga buku'], ans: 0, exp: '"Gugur" membawa nilai rasa hormat dan kepahlawanan.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-08', subSeq: 2,
    objectives: ['Siswa mampu menganalisis majas utama dalam puisi (metafora, simile/asosiasi, personifikasi, hiperbola, repetisi, paralelisme).'],
    materialTitle: 'Majas (Gaya Bahasa) dalam Puisi',
    blocks: [
      { type: 'table', title: '6 Majas Langganan Ujian Puisi SMP', headers: ['Majas', 'Ciri & Contoh'], rows: [
        ['Simile (Asosiasi)', 'Perbandingan eksplisit pakai "bagai, seperti, laksana, bak" ("Wajahnya teduh bagai embun pagi")'],
        ['Metafora', 'Perbandingan LANGSUNG tanpa kata "seperti" ("Buku adalah jendela dunia", "Raja siang")'],
        ['Personifikasi', 'Benda mati/alam bertingkah seperti manusia ("Ombak berlari memeluk pantai")'],
        ['Hiperbola', 'Melebih-lebihkan secara dramatis ("Suaranya menggelegar membelah langit")'],
        ['Repetisi', 'Pengulangan kata/frasa untuk penegasan emosi ("Terus melangkah, terus menyala!")'],
        ['Ironi', 'Sindiran halus menyatakan kebalikan ("Rapi sekali kamarmu sampai lantai tak tampak")'],
      ]},
    ],
    activityTitle: 'Latihan: Majas Puisi',
    questions: [
      { text: '"Pena adalah pedang yang menembus kegelapan zaman." Larik puisi ini menggunakan majas...', opts: ['Metafora (perbandingan langsung tanpa kata "seperti")', 'Simile', 'Ironi', 'Litotes'], ans: 0, exp: 'Pena dibandingkan langsung sebagai pedang.' },
      { text: '"Hujan sore menari-nari riang di atas genting rumah tua." Larik ini menggunakan majas...', opts: ['Personifikasi', 'Hiperbola', 'Simile', 'Repetisi'], ans: 0, exp: 'Hujan diberi perilaku manusia ("menari-nari riang").' },
      { text: '"Semangatnya menyala laksana api unggun di tengah malam." Karena menggunakan kata pembanding "laksana", majas ini adalah...', opts: ['Simile (asosiasi)', 'Metafora', 'Ironi', 'Eufemisme'], ans: 0, exp: 'Kata seperti/bagai/bak/laksana menandai majas simile.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-08', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi citraan (imaji) penglihatan, pendengaran, penciuman, pengecapan, perabaan, dan gerak dalam puisi.'],
    materialTitle: 'Citraan (Pengimajian) dalam Puisi',
    blocks: [
      { type: 'visual_cards', title: '5+1 Jenis Citraan Puisi', cards: [
        { emoji: '👁️', label: 'Visual (Penglihatan)', sub: '"Langit jingga memeluk puncak gunung"' },
        { emoji: '👂', label: 'Auditif (Pendengaran)', sub: '"Gemericik air sungai dan kokok ayam fajar"' },
        { emoji: '🖐️', label: 'Taktil (Perabaan)', sub: '"Angin malam menusuk dingin hingga tulang"' },
        { emoji: '👃', label: 'Olfaktoris & Kinestetik', sub: 'Penciuman ("aroma tanah basah") & Gerak ("daun melayang berputar")' },
      ]},
    ],
    activityTitle: 'Latihan: Citraan Puisi',
    questions: [
      { text: 'Larik puisi "Deru ombak bersahut-sahutan memecah sunyi malam" kuat menghadirkan citraan...', opts: ['Pendengaran (auditif)', 'Pengecapan', 'Penciuman', 'Penglihatan warna'], ans: 0, exp: '"Deru", "bersahut-sahutan", dan "sunyi" membangkitkan indra pendengaran.' },
      { text: 'Larik "Aroma harum melati dan tanah basah sehabis hujan menyapa beranda" menghadirkan citraan...', opts: ['Penciuman (olfaktoris)', 'Pendengaran', 'Pengecapan', 'Gerak'], ans: 0, exp: '"Aroma harum melati dan tanah basah" merangsang indra penciuman.' },
      { text: 'Larik "Tangan kasar ayah menggenggam hangat jemariku" menghadirkan citraan...', opts: ['Perabaan (taktil)', 'Pendengaran', 'Penciuman', 'Pengecapan'], ans: 0, exp: '"Kasar" dan "hangat" dirasakan oleh indra peraba kulit.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-08', subSeq: 4,
    objectives: ['Siswa mampu mengenali rima (persamaan bunyi akhir, asonansi, aliterasi) dan irama (ritme) yang menciptakan musikalitas puisi.'],
    materialTitle: 'Rima dan Irama (Musikalitas Puisi)',
    blocks: [
      { type: 'text', text: 'RIMA adalah pengulangan bunyi yang indah dalam puisi (bisa di akhir larik: a-b-a-b / a-a-a-a, maupun di dalam larik berupa ASONANSI = ulang bunyi vokal dan ALITERASI = ulang bunyi konsonan, mis. "desir daun di danau damai" mengulang konsonan d!).' },
    ],
    activityTitle: 'Latihan: Rima & Irama Puisi',
    questions: [
      { text: 'Pengulangan bunyi konsonan awal yang sama pada satu larik puisi ("Sinar surya sentuh samudra") disebut...', opts: ['Aliterasi', 'Asonansi', 'Hiperbola', 'Ironi'], ans: 0, exp: 'Aliterasi = perulangan bunyi konsonan (s-s-s-s); Asonansi = perulangan bunyi vokal.' },
      { text: 'Fungsi utama rima dan irama dalam puisi adalah...', opts: ['Menciptakan kemerduan bunyi (musikalitas), memperkuat suasana emosi, dan memperindah pembacaan', 'Membuat puisi jadi laporan berita', 'Menghilangkan makna', 'Mengganti judul'], ans: 0, exp: 'Rima dan irama memberi efek musikal saat puisi dibacakan.' },
      { text: 'Bait puisi dengan bunyi akhir larik: "...pagi / ...hati / ...berlari / ...negeri" memiliki pola rima akhir...', opts: ['Sama / terus (a-a-a-a)', 'Silang (a-b-a-b)', 'Peluk (a-b-b-a)', 'Bebas tanpa bunyi sama'], ans: 0, exp: 'Keempat larik berakhir bunyi vokal "-i".' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-08', subSeq: 5,
    objectives: ['Siswa mampu membedakan makna denotatif (lugas) dan makna konotatif (kiasan/simbolik) dalam puisi.'],
    materialTitle: 'Makna Denotatif, Konotatif, dan Kata Lambang',
    blocks: [
      { type: 'table', title: 'Denotasi vs Konotasi dalam Puisi', headers: ['Kata', 'Makna Denotatif (Kamus)', 'Makna Konotatif / Lambang di Puisi'], rows: [
        ['Pelita / Lentera', 'Lampu penerang minyak', 'Ilmu pengetahuan, guru, atau harapan penuntun hidup'],
        ['Badai / Ombak', 'Cuaca laut ekstrem', 'Cobaan, rintangan, atau ujian berat kehidupan'],
        ['Senja', 'Waktu menjelang malam', 'Usia tua atau akhir suatu masa'],
      ]},
    ],
    activityTitle: 'Latihan: Makna Konotatif',
    questions: [
      { text: 'Dalam larik puisi "Walau badai menghadang langkahmu, jangan padamkan pelita di dadamu", kata "badai" dan "pelita" bermakna konotatif...', opts: ['Cobaan/rintangan hidup dan semangat/harapan', 'Hujan sungguhan dan kompor', 'Angin utara dan listrik', 'Lautan dan lilin'], ans: 0, exp: 'Penyair menggunakan kata lambang untuk menyampaikan pesan secara puitis.' },
      { text: 'Kata "meja hijau" bermakna konotatif "pengadilan", sedangkan dalam kalimat "Ayah mengecat meja hijau di teras" bermakna...', opts: ['Denotatif (makna sebenarnya: meja berwarna hijau)', 'Konotatif', 'Ironi', 'Hiperbola'], ans: 0, exp: 'Makna sesuai arti harfiah/kamus adalah makna denotatif.' },
      { text: 'Dalam puisi tentang jasa guru, kata "tunas muda" melambangkan...', opts: ['Generasi muda / para pelajar yang sedang tumbuh', 'Pohon pisang', 'Daun kering', 'Akar tua'], ans: 0, exp: 'Tunas muda menjadi simbol generasi penerus bangsa.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-08', subSeq: 6,
    objectives: ['Siswa mampu menafsirkan tema, nada, suasana, dan amanat puisi melalui teknik parafrasa puisi.'],
    materialTitle: 'Menafsirkan Puisi (Unsur Batin & Parafrasa)',
    blocks: [
      { type: 'table', title: '4 Unsur Batin Puisi (Richards)', headers: ['Unsur Batin', 'Artinya'], rows: [
        ['1. Tema (Sense)', 'Gagasan pokok yang diangkat penyair (perjuangan, ibu, alam, ketuhanan)'],
        ['2. Rasa (Feeling)', 'Sikap emosional penyair terhadap pokok bahasan (haru, bangga, gelisah)'],
        ['3. Nada (Tone)', 'Sikap penyair terhadap pembaca (mengajak, menasihati, merenung, menyindir)'],
        ['4. Amanat (Intention)', 'Pesan/tujuan yang ingin disampaikan kepada pembaca'],
      ]},
    ],
    activityTitle: 'Latihan: Menafsirkan Puisi',
    questions: [
      { text: 'Mengubah bait-bait puisi menjadi bentuk prosa (paragraf biasa) dengan menambahkan kata penghubung tanpa mengubah maksud asli penyair untuk memudahkan pemahaman disebut...', opts: ['Parafrasa puisi', 'Deklamasi', 'Aliterasi', 'Kramagung'], ans: 0, exp: 'Parafrasa membuka makna tersirat dari bahasa puisi yang padat.' },
      { text: 'Perasaan yang timbul di hati PEMBACA setelah membaca puisi (misalnya khidmat, sedih, haru, atau bersemangat) disebut...', opts: ['Suasana puisi', 'Rima akhir', 'Tipografi', 'Jumlah bait'], ans: 0, exp: 'Suasana adalah efek batin yang dirasakan pembaca.' },
      { text: 'Puisi yang berbicara tentang ketulusan peluh seorang ibu menunggu anaknya pulang sekolah dengan syukur memiliki tema dan suasana...', opts: ['Tema kasih sayang ibu; suasana haru dan penuh syukur', 'Tema perang; suasana marah', 'Tema olahraga; suasana lucu', 'Tema perdagangan; suasana kaku'], ans: 0, exp: 'Makna larik menuntun kita menentukan tema dan suasana.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-08', subSeq: 7,
    objectives: ['Siswa mampu menulis puisi bebas orisinal dengan diksi puitis, citraan, majas, serta membacakannya penuh penghayatan.'],
    materialTitle: 'Menulis dan Membacakan Puisi',
    blocks: [
      { type: 'list', title: '4 Langkah Menulis Puisi Orisinal', items: ['1. Tangkap 1 momen nyata penuh rasa (hujan di jendela kelas, dermaga pagi, tawa nenek).', '2. Daftar kata konkret & citraan (warna, suara, aroma, sentuhan).', '3. Rangkai jadi larik padat menggunakan minimal 1–2 majas alami.', '4. Bacakan keras-keras untuk mengecek irama, jeda (/ dan //), dan penghayatan (4V: Vokal, Visual/ekspresi, Vitalitas, dan Penghayatan)!'] },
    ],
    activityTitle: 'Latihan: Menulis & Membaca Puisi',
    questions: [
      { text: 'Saat menandai naskah puisi sebelum dibacakan, tanda jeda miring satu (/) berarti berhenti sebentar, sedangkan tanda miring dua (//) berarti...', opts: ['Berhenti agak lama (akhir kalimat atau akhir bait)', 'Membaca super cepat', 'Berbisik', 'Melompati baris'], ans: 0, exp: 'Tanda jeda membantu pengaturan napas dan penekanan makna saat membaca puisi.' },
      { text: 'Membacakan puisi di depan audiens secara HAFAL tanpa membawa teks dengan penghayatan gerak dan vokal penuh disebut...', opts: ['Deklamasi', 'Parafrasa', 'Wawancara', 'Resensi'], ans: 0, exp: 'Deklamasi = penyajian puisi secara hafalan dan ekspresif.' },
      { text: 'Kunci agar puisi karya siswa SMP terasa segar dan tidak klise adalah...', opts: ['Berangkat dari pengamatan detail konkret nyata dengan diksi jujur dan citraan hidup', 'Menyalin puisi orang lain dari internet', 'Mengulang kata "indah" di setiap baris', 'Memaksakan kata sulit yang tidak dipahami sendiri'], ans: 0, exp: 'Kejujuran observasi dan detail konkret melahirkan puisi yang menyentuh.' },
    ],
  },

  // BAB 9: DISKUSI DAN PRESENTASI (5 sub)
  {
    topicCode: 'BIND-SMP8-09', subSeq: 1,
    objectives: ['Siswa mampu menyampaikan pendapat secara runtut, objektif, dan terstruktur dalam forum diskusi kelas.'],
    materialTitle: 'Menyampaikan Pendapat dalam Diskusi',
    blocks: [
      { type: 'formula', name: 'Rumus Menyampaikan Pendapat Runtut (P-A-C)', expression: '1. Poin Pendapat  →  2. Alasan Logis  →  3. Contoh / Bukti Nyata', note: 'Contoh: "Saya setuju kelas kita membuat pojok baca (Poin) karena akses buku di kelas menumbuhkan minat baca di jam istirahat (Alasan); misalnya tiap siswa bisa menyumbang pinjam 1 buku favoritnya (Contoh)."' },
    ],
    activityTitle: 'Latihan: Menyampaikan Pendapat',
    questions: [
      { text: 'Agar pendapat kita mudah dipahami dan dihargai dalam forum diskusi, urutan penyampaian terbaik adalah...', opts: ['Menyatakan poin pendapat dengan jelas, diikuti alasan logis dan contoh/bukti konkret', 'Langsung berteriak agar paling keras', 'Berbicara berputar-putar tanpa inti', 'Menyalahkan peserta lain dulu'], ans: 0, exp: 'Struktur Poin–Alasan–Contoh membuat gagasan terang dan meyakinkan.' },
      { text: 'Peran MODERATOR dalam sebuah diskusi kelompok atau panel adalah...', opts: ['Memandu jalannya diskusi, mengatur giliran bicara secara adil, menjaga waktu, dan merangkum kesimpulan', 'Memihak satu pendapat saja', 'Menjawab semua pertanyaan sendiri', 'Menghentikan peserta yang berbeda pendapat'], ans: 0, exp: 'Moderator bersifat netral dan menjaga diskusi tetap tertib serta produktif.' },
      { text: 'Peran NOTULIS (sekretaris) selama diskusi berlangsung adalah...', opts: ['Mencatat pokok pendapat, usulan, pertanyaan, serta keputusan akhir diskusi secara akurat', 'Mengatur pengeras suara', 'Membacakan puisi', 'Menentukan pemenang'], ans: 0, exp: 'Notula menjadi rekaman resmi hasil diskusi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-09', subSeq: 2,
    objectives: ['Siswa mampu menyusun argumen yang logis dan menghindari sesat pikir (logical fallacy) sederhana seperti menyerang pribadi.'],
    materialTitle: 'Menyusun Argumen Kuat dan Bebas Sesat Pikir',
    blocks: [
      { type: 'misconception', wrong: 'Menyerang pribadi lawan bicara ("Kamu kan sering terlambat, jadi usulmu soal disiplin pasti salah!") adalah argumen yang kuat.', right: 'SALAH! Itu disebut sesat pikir AD HOMINEM! Argumen yang kuat SELALU menilai isi gagasannya berdasarkan logika dan bukti, bukan menyerang kepribadian orangnya!' },
    ],
    activityTitle: 'Latihan: Menyusun Argumen',
    questions: [
      { text: 'Kesalahan logika berupa menyerang pribadi lawan diskusi alih-alih menanggapi isi argumennya disebut...', opts: ['Ad hominem', 'Deduksi', 'Analogi', 'Sintesis'], ans: 0, exp: 'Argumen sehat menyerang gagasan/data, bukan personal orangnya.' },
      { text: 'Manakah argumen yang paling kuat untuk mendukung usulan "Hari Bebas Plastik di Kantin Sekolah"?', opts: ['"Data kebersihan OSIS mencatat 60% sampah harian sekolah berasal dari plastik sekali pakai; membawa wadah makan sendiri terbukti memangkas sampah secara drastis."', '"Pokoknya semua harus setuju karena aku ketua kelas."', '"Plastik itu jelek warnanya."', '"Temanku bilang begitu."'], ans: 0, exp: 'Didukung data nyata dan hubungan sebab-akibat logis.' },
      { text: 'Menyusun argumen pro dan kontra (perspektif dua sisi) sebelum berdiskusi membantu kita...', opts: ['Memahami persoalan secara utuh dan siap menjawab sanggahan secara rasional', 'Bingung memilih pihak', 'Menolak semua ide', 'Memicu debat kusir'], ans: 0, exp: 'Memahami argumen pihak lain memperkaya analisis.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-09', subSeq: 3,
    objectives: ['Siswa mampu menyanggah pendapat berbeda secara santun, terukur, dan berbasis data.'],
    materialTitle: 'Menyanggah Pendapat secara Santun',
    blocks: [
      { type: 'worked_example', level: 'Formula Sanggahan Elegan', question: 'Bagaimana cara menyanggah usulan teman yang ingin mengadakan studi wisata ke tempat yang biayanya terlalu mahal bagi sebagian siswa?', steps: ['1. Akui niat baiknya: "Saya mengapresiasi usulan Rina karena tempat itu memang edukatif."', '2. Ajukan keberatan berbasis fakta: "Namun, biaya transportasinya cukup berat bagi sebagian teman kita."', '3. Tawarkan alternatif: "Bagaimana jika kita memilih lokasi edukatif di sekitar kabupaten yang sama serunya namun jauh lebih terjangkau?"'], answer: 'Apresiasi → Sanggahan berdasar alasan → Alternatif solusi!' },
    ],
    activityTitle: 'Latihan: Menyanggah Santun',
    questions: [
      { text: 'Kalimat sanggahan yang PALING SANTUN dalam rapat OSIS SMP adalah...', opts: ['"Terima kasih atas gagasannya, Bima. Saya sedikit berbeda pandangan karena waktu persiapan kita hanya 5 hari; mungkin skalanya bisa kita sederhanakan."', '"Idemu tidak masuk akal sama sekali!"', '"Kamu tidak pernah berpikir panjang."', '"Saya menolak mentah-mentah tanpa alasan."'], ans: 0, exp: 'Menghargai pengusul + memberi alasan objektif + mengusulkan jalan tengah.' },
      { text: 'Jika pendapat kita disanggah secara logis oleh teman dengan data lebih akurat, sikap dewasa dalam diskusi adalah...', opts: ['Menerima masukan dengan lapang dada demi mencapai keputusan terbaik bersama', 'Marah dan keluar dari ruangan', 'Memotong pembicaraannya', 'Membalas dengan ejekan'], ans: 0, exp: 'Tujuan diskusi adalah mencari kebenaran/solusi terbaik, bukan menang ego.' },
      { text: 'Konjungsi yang tepat digunakan saat menyanggah halus tanpa menyinggung adalah...', opts: ['"Namun, menurut data...", "Di sisi lain, perlu kita pertimbangkan..."', '"Jelas salah!"', '"Mustahil!"', '"Omong kosong!"'], ans: 0, exp: 'Diksi netral menjaga suasana diskusi tetap kondusif.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-09', subSeq: 4,
    objectives: ['Siswa mampu merumuskan solusi kompromi/jalan tengah yang realistis (musyawarah mufakat) dari berbagai usulan diskusi.'],
    materialTitle: 'Menyampaikan Solusi dan Musyawarah Mufakat',
    blocks: [
      { type: 'text', text: 'Diskusi yang baik berakhir dengan SOLUSI KONKRET, bukan sekadar keluhan! Ketika muncul dua usulan berbeda, carilah titik temu (kompromi / win-win solution) yang dapat dijalankan, jelas penanggung jawabnya, dan disepakati bersama melalui musyawarah mufakat.' },
    ],
    activityTitle: 'Latihan: Menyampaikan Solusi',
    questions: [
      { text: 'Kelompok A ingin pentas musik modern, Kelompok B ingin tari tradisional pada acara perpisahan. Contoh solusi kompromi (win-win solution) yang kreatif adalah...', opts: ['Menampilkan kolaborasi musik modern-tradisional atau memberi slot panggung berimbang bagi keduanya', 'Membatalkan seluruh acara', 'Hanya menuruti satu kelompok dan melarang kelompok lain ikut', 'Bertengkar sampai acara selesai'], ans: 0, exp: 'Kompromi kreatif merangkul kepentingan kedua pihak.' },
      { text: 'Solusi diskusi dikatakan REALISTIS dan OPERASIONAL apabila...', opts: ['Dapat dilaksanakan sesuai waktu, biaya, dan kemampuan tim, serta jelas siapa melakukan apa', 'Berupa angan-angan mustahil tanpa rencana kerja', 'Hanya menyalahkan pihak luar', 'Tidak jelas langkahnya'], ans: 0, exp: 'Solusi nyata mencakup langkah, sumber daya, dan jadwal.' },
      { text: 'Dalam budaya demokrasi Indonesia (Sila ke-4 Pancasila), cara utama pengambilan keputusan dalam diskusi kelas adalah...', opts: ['Musyawarah untuk mencapai mufakat (dan voting hanya bila mufakat belum tercapai)', 'Keputusan sepihak satu orang', 'Siapa paling keras suaranya', 'Diundi tanpa diskusi'], ans: 0, exp: 'Musyawarah mufakat mengutamakan kebijaksanaan dan kebersamaan.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-09', subSeq: 5,
    objectives: ['Siswa mampu merancang dan membawakan presentasi kelompok terstruktur menggunakan bahan tayang visual efektif.'],
    materialTitle: 'Presentasi Kelompok yang Efektif',
    blocks: [
      { type: 'visual_cards', title: 'Aturan Desain Slide & Presentasi Kelompok', cards: [
        { emoji: '🎯', label: 'Aturan 6×6 Slide', sub: 'Maksimal ~6 poin singkat per slide (jangan salin-tempel 1 paragraf penuh!)' },
        { emoji: '🤝', label: 'Transisi Antarpembicara', sub: 'Serahkan giliran mulus: "Selanjutnya, bagian analisis data akan disampaikan oleh Alya."' },
        { emoji: '👁️', label: 'Kontras & Visual', sub: 'Huruf besar terbaca dari bangku belakang + grafik/diagram pendukung' },
      ]},
    ],
    activityTitle: 'Latihan: Presentasi Kelompok',
    questions: [
      { text: 'Kesalahan desain salindia (slide) presentasi yang paling sering membuat audiens cepat bosan adalah...', opts: ['Memenuhi slide dengan teks paragraf panjang berhuruf kecil lalu penyaji hanya membacanya sambil membelakangi audiens', 'Memakai poin singkat, huruf besar, dan grafik relevan', 'Menjaga kontak mata dengan audiens', 'Berlatih transisi antaranggotanya'], ans: 0, exp: 'Slide adalah alat bantu visual, bukan skrip penuh untuk dibaca.' },
      { text: 'Kalimat transisi antarpembicara yang baik dalam presentasi kelompok adalah...', opts: ['"Demikian pemaparan latar belakang dari saya. Berikutnya, hasil survei lapangan akan dijelaskan oleh rekan saya, Raka."', '"Udah, lanjut kamu sana."', 'Langsung diam duduk tanpa memberi tanda', '"Saya lupa bagian ini, ganti orang saja."'], ans: 0, exp: 'Transisi rapi menunjukkan kesiapan dan kekompakan tim.' },
      { text: 'Sebelum tampil presentasi kelompok, simulasi latihan bersama (gladi bersih) berguna untuk...', opts: ['Mengecek durasi waktu, kelancaran perpindahan pembicara, dan mengantisipasi pertanyaan audiens', 'Menghafal teks teman agar bisa memotong', 'Membuat semua orang gugup', 'Tidak berguna'], ans: 0, exp: 'Latihan bersama membangun koordinasi dan kepercayaan diri tim.' },
    ],
  },

  // BAB 10: PENYUNTINGAN TEKS (6 sub)
  {
    topicCode: 'BIND-SMP8-10', subSeq: 1,
    objectives: ['Siswa mampu menyunting kesalahan ejaan (kata baku KBBI, huruf kapital, huruf miring, dan penulisan kata depan vs imbuhan) sesuai EYD V.'],
    materialTitle: 'Menyunting Ejaan sesuai EYD V & KBBI',
    blocks: [
      { type: 'table', title: 'Kata Tidak Baku vs Kata Baku KBBI Langganan Ujian!', headers: ['Tidak Baku (Salah)', 'Baku KBBI (Benar!)'], rows: [
        ['apotik, praktek, ijasah', 'apotek, praktik, ijazah'],
        ['aktifitas, kwalitas, sistim', 'aktivitas, kualitas, sistem'],
        ['resiko, tekhnik, jadual', 'risiko, teknik, jadwal'],
        ['nasehat, sekedar, analisa', 'nasihat, sekadar, analisis'],
        ['atlit, antri, rubah (mengubah)', 'atlet, antre, ubah (mengubah)'],
      ]},
    ],
    activityTitle: 'Latihan: Menyunting Ejaan',
    questions: [
      { text: 'Deretan kata berikut yang SELURUHNYA merupakan kata BAKU sesuai KBBI adalah...', opts: ['apotek, praktik, aktivitas, analisis, nasihat', 'apotik, praktek, aktifitas, analisa, nasehat', 'apotek, praktek, aktivitas, analisis, nasehat', 'apotik, praktik, aktivitas, analisa, nasihat'], ans: 0, exp: 'Apotek, praktik, aktivitas, analisis, nasihat adalah bentuk baku KBBI.' },
      { text: 'Penulisan huruf miring sesuai EYD V yang BENAR adalah...', opts: ['Istilah *download* dalam bahasa Indonesia dipadankan dengan kata *unduh*. (kata asing dicetak miring)', 'Saya membeli *apel* di pasar.', 'Ibu pergi ke *Surabaya* besok.', 'Kita wajib *belajar* rajin.'], ans: 0, exp: 'Kata asing/daerah yang belum diserap penuh dan kata yang ditegaskan sebagai kata ditulis miring.' },
      { text: 'Penulisan kata "di" dan "pun" yang BENAR sesuai EYD V adalah...', opts: ['Di mana pun ia berada, ia selalu menjaga nama baik sekolah.', 'Dimanapun ia berada, ia selalu menjaga nama baik sekolah.', 'Di manapun ia berada...', 'Dimana pun ia berada...'], ans: 0, exp: '"di mana" (tempat → pisah) dan partikel "pun" ditulis terpisah kecuali 12 kata penghubung tetap (walaupun, meskipun, adapun, dll.).' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-10', subSeq: 2,
    objectives: ['Siswa mampu menyunting kesalahan tanda baca (koma, titik koma, titik dua, tanda petik, tanda hubung, dan tanda pisah).'],
    materialTitle: 'Menyunting Tanda Baca (EYD V)',
    blocks: [
      { type: 'tip', text: 'Aturan Koma Penting EYD V: (1) Pakai koma SEBELUM "dan" pada perincian ≥3 unsur ("apel, jeruk, dan mangga"); (2) Pakai koma sebelum "tetapi, melainkan, sedangkan"; (3) JANGAN pakai koma sebelum "karena" jika induk kalimat di depan! (4) Pakai koma jika anak kalimat mendahului induk kalimat ("Karena hujan deras, lomba ditunda.").' },
    ],
    activityTitle: 'Latihan: Menyunting Tanda Baca',
    questions: [
      { text: 'Penggunaan tanda koma (,) yang BENAR sesuai EYD V adalah...', opts: ['Karena jalan sedang diperbaiki, arus lalu lintas dialihkan.', 'Arus lalu lintas dialihkan, karena jalan sedang diperbaiki.', 'Bima membeli pensil, penghapus dan penggaris.', 'Dia bukan pemalas melainkan sedang sakit.'], ans: 0, exp: 'Anak kalimat di awal wajib diikuti koma; sebelum "melainkan" dan "dan" (perincian 3 unsur) juga perlu koma.' },
      { text: 'Penulisan tempat dan tanggal surat yang BENAR sesuai EYD V adalah...', opts: ['Gresik, 17 Agustus 2026', 'Gresik: 17 Agustus 2026.', 'Gresik 17 Agustus 2026,', 'Gresik, 17-Agustus-2026.'], ans: 0, exp: 'Nama kota diikuti koma, tanpa tanda titik di akhir tanggal.' },
      { text: 'Penulisan angka rupiah yang BENAR sesuai EYD V adalah...', opts: ['Rp25.000,00', 'Rp. 25.000,-', 'Rp 25,000.00', 'rp.25.000'], ans: 0, exp: 'Tanpa titik setelah "Rp", tanpa spasi sebelum angka, titik pemisah ribuan, koma desimal.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-10', subSeq: 3,
    objectives: ['Siswa mampu menyunting kalimat tidak efektif (pleonasme/boros kata, tidak bersubjek, rancu, tak sejajar) menjadi kalimat efektif.'],
    materialTitle: 'Menyunting Kalimat Efektif',
    blocks: [
      { type: 'table', title: '4 Penyakit Kalimat Tidak Efektif & Obatnya', headers: ['Kesalahan', 'Contoh Salah', 'Perbaikan Efektif'], rows: [
        ['Pleonasme (Boros Kata)', 'Para siswa-siswa berkumpul bersama-sama.', 'Para siswa berkumpul. (atau: Siswa-siswa berkumpul.)'],
        ['Subjek Hilang (Preposisi di awal)', 'Bagi semua peserta diharapkan hadir.', 'Semua peserta diharapkan hadir.'],
        ['Tidak Sejajar (Paralel)', 'Tugas panitia adalah mencatat, mengatur, dan publikasi.', 'Tugas panitia adalah mencatat, mengatur, dan memublikasikan.'],
        ['Kontaminasi (Rancu)', 'Mengesampingkan / diperlebarkan', 'Mengesampingkan (benar) / diperlebar (jangan double imbuhan!)'],
      ]},
    ],
    activityTitle: 'Latihan: Kalimat Efektif',
    questions: [
      { text: 'Perbaikan kalimat tidak efektif "Bagi para hadirin sekalian dimohon agar supaya berdiri" menjadi kalimat PALING EFEKTIF adalah...', opts: ['Hadirin dimohon berdiri.', 'Bagi hadirin dimohon agar berdiri.', 'Para hadirin sekalian dimohon berdiri.', 'Hadirin sekalian dimohon supaya berdiri.'], ans: 0, exp: 'Menghilangkan preposisi subjek "Bagi" dan kata mubazir "para", "sekalian", "agar supaya".' },
      { text: 'Kalimat "Di dalam rapat itu membahas program kerja OSIS" tidak efektif karena...', opts: ['Tidak memiliki subjek jelas akibat preposisi "Di dalam" di depan kata benda', 'Terlalu pendek', 'Tidak punya objek', 'Memakai kata baku'], ans: 0, exp: 'Perbaikan: "Rapat itu membahas program kerja OSIS" atau "Di dalam rapat itu dibahas program kerja OSIS."' },
      { text: 'Manakah kalimat yang memenuhi syarat KESEJAJARAN (paralelisme) bentuk kata?', opts: ['Kegiatan bank sampah meliputi pengumpulan, pemilahan, dan penimbangan sampah.', 'Kegiatan bank sampah meliputi mengumpulkan, pemilahan, dan ditimbang.', 'Kegiatan itu kumpul, memilah, dan penimbangan.', 'Kegiatan meliputi pengumpulan, pilah, dan menimbang.'], ans: 0, exp: 'Ketiganya sejajar memakai imbuhan peN-an (pengumpulan, pemilahan, penimbangan).' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-10', subSeq: 4,
    objectives: ['Siswa mampu menyunting kepaduan paragraf (menghapus kalimat sumbang dan memperbaiki kohesi/koherensi).'],
    materialTitle: 'Menyunting Kepaduan Paragraf (Kohesi & Koherensi)',
    blocks: [
      { type: 'text', text: 'Paragraf yang padu memenuhi 2 syarat: KESATUAN (hanya 1 gagasan utama — buang KALIMAT SUMBANG yang melenceng topik!) dan KEPADUAN (kohesi & koherensi: antarkalimat terikat mulus dengan kata rujukan dan konjungsi tepat).' },
    ],
    activityTitle: 'Latihan: Kepaduan Paragraf',
    questions: [
      { text: 'Bacalah paragraf: (1) Hutan mangrove sangat penting bagi pesisir. (2) Akarnya menahan ombak agar pantai tidak abrasi. (3) Kemarin aku membeli sepatu olahraga baru berwarna biru. (4) Selain itu, mangrove menjadi habitat kepiting dan ikan kecil. Kalimat SUMBANG yang harus dihapus adalah...', opts: ['Kalimat (3)', 'Kalimat (1)', 'Kalimat (2)', 'Kalimat (4)'], ans: 0, exp: 'Kalimat (3) sama sekali tidak berhubungan dengan topik manfaat hutan mangrove.' },
      { text: 'Kesatuan paragraf yang baik mensyaratkan bahwa di dalam satu paragraf hanya terdapat...', opts: ['Satu gagasan utama yang didukung kalimat-kalimat penjelas yang relevan', 'Lima topik berbeda sekaligus', 'Satu kata saja', 'Tidak ada kalimat utama'], ans: 0, exp: 'Satu paragraf = satu ide pokok.' },
      { text: 'Hubungan keselarasan makna yang logis antarkalimat dalam sebuah paragraf disebut...', opts: ['Koherensi', 'Rima', 'Majas', 'Kramagung'], ans: 0, exp: 'Kohesi = keterkaitan bentuk/penanda; Koherensi = keterkaitan logika makna.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-10', subSeq: 5,
    objectives: ['Siswa mampu menyunting pilihan kata (diksi) agar tepat makna, sesuai konteks resmi, dan bebas kerancuan kata mirip.'],
    materialTitle: 'Menyunting Pilihan Kata (Diksi)',
    blocks: [
      { type: 'table', title: 'Pasangan Kata Mirip yang Sering Salah Pakai!', headers: ['Pasangan Kata', 'Perbedaan Makna yang Tepat'], rows: [
        ['Acuh vs Tidak Acuh', '"Acuh" = PEDULI! Jadi "tak acuh" = masa bodoh (jangan bilang "dia acuh padaku" kalau maksudmu cuek!)'],
        ['Jam vs Pukul', '"Jam" = durasi/benda ("selama 2 jam"); "Pukul" = waktu tertentu ("pukul 07.00")'],
        ['Masing-masing vs Tiap-tiap', '"Tiap-tiap" diikuti kata benda ("tiap-tiap siswa"); "masing-masing" tanpa kata benda di belakangnya ("siswa mengerjakan tugasnya masing-masing")'],
      ]},
    ],
    activityTitle: 'Latihan: Menyunting Pilihan Kata',
    questions: [
      { text: 'Perbaikan kalimat "Rapat orang tua akan dimulai pada jam 08.00 WIB selama 2 pukul" yang TEPAT adalah...', opts: ['Rapat orang tua akan dimulai pada pukul 08.00 WIB selama 2 jam.', 'Rapat dimulai jam 08.00 selama 2 jam.', 'Rapat dimulai pukul 08.00 selama 2 pukul.', 'Tidak ada yang salah.'], ans: 0, exp: '"Pukul" untuk titik waktu; "jam" untuk jangka waktu/durasi.' },
      { text: 'Dalam KBBI, kata "acuh" sebenarnya bermakna "peduli/mengindahkan". Oleh karena itu, kalimat yang tepat untuk menggambarkan sikap masa bodoh adalah...', opts: ['Ia bersikap acuh tak acuh terhadap imbauan kebersihan itu.', 'Ia sangat acuh sehingga membuang sampah sembarangan.', 'Ia acuh sekali makanya tidak peduli.', 'Ia terlalu acuh dan cuek.'], ans: 0, exp: '"Acuh tak acuh" atau "tak acuh" berarti tidak peduli.' },
      { text: 'Kata paling tepat menggantikan kata tidak resmi "bikin" dalam teks laporan ilmiah SMP ("Sampah plastik bikin saluran mampet") adalah...', opts: ['menyebabkan / mengakibatkan ("menyebabkan saluran tersumbat")', 'ngebikin', 'ngasih', 'biarin'], ans: 0, exp: 'Diksi formal meningkatkan kualitas tulisan akademik/resmi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP8-10', subSeq: 6,
    objectives: ['Siswa mampu melakukan penyuntingan terpadu (ejaan, tanda baca, diksi, kalimat efektif, dan struktur paragraf) pada sebuah naskah teks.'],
    materialTitle: 'Praktik Terpadu Memperbaiki Kesalahan Tulisan',
    blocks: [
      { type: 'worked_example', level: 'Bedah Sunting 1 Kalimat Penuh Kesalahan', question: 'Suntinglah: "pada hari senin, para siswa-siswa di wajibkan mengikuti aktifitas upacara di lapangan."', steps: ['1. Kapital awal kalimat & nama hari: "Pada hari Senin,"', '2. Hapus pleonasme: "para siswa" (bukan "para siswa-siswa")', '3. Awalan pasif di- digabung: "diwajibkan"', '4. Kata baku KBBI: "aktivitas"'], answer: 'Pada hari Senin, para siswa diwajibkan mengikuti aktivitas upacara di lapangan.' },
    ],
    activityTitle: 'Latihan: Penyuntingan Terpadu',
    questions: [
      { text: 'Manakah hasil penyuntingan PALING TEPAT dari kalimat: "ibu membeli obat di apotik, namun ternyata apotiknya sudah di tutup."?', opts: ['Ibu membeli obat di apotek, tetapi ternyata apoteknya sudah ditutup.', 'Ibu membeli obat diapotek, namun ternyata apoteknya sudah di tutup.', 'Ibu membeli obat di apotik, tetapi ternyata apotiknya sudah ditutup.', 'ibu membeli obat di apotek, tetapi apoteknya ditutup.'], ans: 0, exp: 'Kapital awal (Ibu), kata baku (apotek), konjungsi intrakalimat (tetapi), awalan pasif gabung (ditutup).' },
      { text: 'Suntinglah: "Walaupun hujan deras, tetapi Bima tetap berangkat les." Kesalahan utamanya adalah penggunaan konjungsi ganda ("walaupun... tetapi..."). Perbaikan yang tepat adalah...', opts: ['Walaupun hujan deras, Bima tetap berangkat les.', 'Walaupun, hujan deras tetapi Bima berangkat.', 'Hujan deras walaupun tetapi Bima berangkat.', 'Tetapi walaupun hujan deras, Bima berangkat.'], ans: 0, exp: 'Pilih salah satu konjungsi pertentangan saja (jangan gabungkan "walaupun" dan "tetapi" sekaligus!).' },
      { text: 'Urutan kerja penyuntingan naskah yang sistematis adalah mengecek mulai dari...', opts: ['Kepaduan isi/paragraf → keefektifan kalimat & pilihan kata → ketepatan ejaan dan tanda baca (EYD V)', 'Hanya mengganti warna tinta', 'Menghapus judul', 'Langsung mencetak tanpa membaca'], ans: 0, exp: 'Menyunting dari tataran makro (isi & paragraf) ke mikro (kalimat, diksi, ejaan).' },
    ],
  },
];

upsertLessonsBatch('Kelas 8 SMP — Bahasa Indonesia (10 Bab, 57 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

