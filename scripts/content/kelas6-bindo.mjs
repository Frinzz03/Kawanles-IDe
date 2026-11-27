import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: ANALISIS TEKS INFORMASI
  {
    topicCode: 'BIND-SD6-01', subSeq: 1,
    objectives: ['Siswa mampu membedakan dan menemukan informasi tersurat (eksplisit) serta tersirat (implisit) dalam teks informasi.'],
    materialTitle: 'Informasi Tersurat dan Tersirat',
    blocks: [
      { type: 'table', title: 'Tersurat vs Tersirat', headers: ['Jenis Informasi', 'Pengertian', 'Cara Menemukan'], rows: [
        ['Tersurat (Eksplisit)', 'Tertulis langsung dan jelas di dalam kalimat bacaan', 'Baca cermat / scanning kata kunci pada teks'],
        ['Tersirat (Implisit)', 'Tidak tertulis langsung, harus disimpulkan dari petunjuk kalimat', 'Hubungkan fakta-fakta teks untuk menarik makna tersembunyi'],
      ]},
    ],
    activityTitle: 'Latihan: Informasi Tersurat & Tersirat',
    questions: [
      { text: '"Halaman rumah Pak Tono penuh genangan dan selokan depan rumah tersumbat botol plastik." Informasi TERSIRAT yang tepat dari kalimat tersebut adalah...', opts: ['Botol plastik berwarna bening', 'Kebersihan selokan di lingkungan tersebut kurang terjaga sehingga memicu genangan', 'Pak Tono punya rumah baru', 'Hujan tidak pernah turun'], ans: 1, exp: 'Tidak disebut langsung "kurang terjaga", tetapi disimpulkan dari kondisi selokan tersumbat sampah.' },
      { text: 'Informasi yang tertulis jelas secara harfiah di dalam teks disebut informasi...', opts: ['Tersurat', 'Tersirat', 'Khayalan', 'Opini'], ans: 0, exp: 'Tersurat = tertulis nyata.' },
      { text: 'Untuk menjawab pertanyaan "Mengapa penulis menganjurkan hal tersebut?" yang jawabannya tidak disebut langsung, kita mencari informasi...', opts: ['Tersirat (melalui penyimpulan konteks)', 'Judul saja', 'Nomor halaman', 'Tanda baca'], ans: 0, exp: 'Inferensi/penyimpulan menggali makna tersirat.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-01', subSeq: 2,
    objectives: ['Siswa mampu membandingkan persamaan dan perbedaan informasi dari dua teks bertema sejenis.'],
    materialTitle: 'Membandingkan Informasi Dua Teks',
    blocks: [
      { type: 'worked_example', level: 'Bandingkan 2 Teks', question: 'Teks A membahas manfaat energi surya untuk lampu jalan. Teks B membahas manfaat turbin angin di pesisir. Apa persamaan dan perbedaannya?', steps: ['Persamaan: Keduanya membahas pemanfaatan ENERGI TERBARUKAN yang ramah lingkungan.', 'Perbedaan: Teks A fokus pada cahaya matahari (PLTS), sedangkan Teks B fokus pada tenaga angin (PLTB).'], answer: 'Persamaan = tema energi terbarukan; Perbedaan = jenis sumber energinya.' },
    ],
    activityTitle: 'Latihan: Membandingkan Informasi',
    questions: [
      { text: 'Teks 1 menjelaskan pengolahan bandeng menjadi otak-otak khas Gresik. Teks 2 menjelaskan budidaya bandeng di tambak air payau. Persamaan kedua teks adalah...', opts: ['Sama-sama membahas ikan bandeng', 'Sama-sama berisi resep masakan', 'Sama-sama membahas ikan hiu', 'Tidak ada persamaan'], ans: 0, exp: 'Objek utama keduanya sama (ikan bandeng), fokus bahasannya berbeda.' },
      { text: 'Cara paling rapi untuk mencatat persamaan dan perbedaan informasi dari dua teks adalah menggunakan...', opts: ['Tabel perbandingan atau diagram Venn', 'Pantun', 'Puisi bebas', 'Daftar acak'], ans: 0, exp: 'Tabel perbandingan dan diagram Venn memudahkan visualisasi perbedaan.' },
      { text: 'Jika dua artikel di internet memberikan data angka berbeda tentang topik yang sama, langkah pembaca kritis adalah...', opts: ['Mengecek sumber resmi/kredibel (mis. BPS, kementerian, buku terverifikasi)', 'Memilih angka yang paling seru', 'Percaya keduanya tanpa cek', 'Menghapus keduanya'], ans: 0, exp: 'Verifikasi ke sumber resmi menentukan informasi yang akurat.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-01', subSeq: 3,
    objectives: ['Siswa mampu merumuskan simpulan yang logis, menyeluruh, dan tepat sasaran dari teks nonfiksi panjang.'],
    materialTitle: 'Membuat Simpulan Teks Informasi',
    blocks: [
      { type: 'list', title: '3 Syarat Simpulan Bermutu', items: ['1. Mewakili keseluruhan isi teks (bukan hanya 1 contoh kecil).', '2. Sesuai fakta dalam bacaan (tidak menyimpang atau menambah hal di luar teks).', '3. Ditulis singkat, jelas, dan menggunakan bahasa efektif.'] },
    ],
    activityTitle: 'Latihan: Membuat Simpulan',
    questions: [
      { text: '"Membaca 20 menit per hari melatih konsentrasi, memperkaya kosakata, serta meningkatkan kemampuan menulis siswa." Simpulan yang tepat adalah...', opts: ['Kebiasaan membaca rutin setiap hari memberikan berbagai manfaat penting bagi kemampuan literasi siswa.', 'Siswa hanya boleh membaca 20 menit.', 'Menulis lebih penting daripada membaca.', 'Buku cerita harganya murah.'], ans: 0, exp: 'Merangkum seluruh rincian manfaat secara utuh dan ringkas.' },
      { text: 'Kesalahan umum saat membuat simpulan yang harus dihindari adalah...', opts: ['Mengambil hanya satu kalimat rincian kecil sebagai simpulan keseluruhan', 'Menghubungkan ide pokok antarparagraf', 'Menggunakan bahasa baku', 'Membaca teks sampai selesai'], ans: 0, exp: 'Rincian kecil tidak mewakili keseluruhan isi bacaan.' },
      { text: 'Paragraf penutup teks informasi sering membantu kita merumuskan simpulan karena biasanya memuat...', opts: ['Rangkuman gagasan utama teks', 'Daftar kata sulit', 'Judul baru', 'Nama penerbit'], ans: 0, exp: 'Paragraf akhir umumnya merangkum pokok bahasan.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-01', subSeq: 4,
    objectives: ['Siswa mampu menganalisis kelengkapan, keakuratan, dan tujuan penulis dalam sebuah teks informasi.'],
    materialTitle: 'Menganalisis Isi Teks Secara Kritis',
    blocks: [
      { type: 'visual_cards', title: '4 Pertanyaan Pembaca Kritis', cards: [
        { emoji: '🎯', label: 'Apa Tujuan Penulis?', sub: 'Memberi info, menjelaskan proses, mengajak, atau menghibur?' },
        { emoji: '✅', label: 'Apakah Faktanya Jelas?', sub: 'Ada data, sumber, dan alasan logis atau sekadar opini?' },
        { emoji: '🔗', label: 'Apakah Gagasan Nyambung?', sub: 'Antarparagraf runtut mendukung judul teks' },
        { emoji: '💡', label: 'Apa Manfaatnya Bagiku?', sub: 'Pelajaran nyata yang bisa diterapkan sehari-hari' },
      ]},
    ],
    activityTitle: 'Latihan: Menganalisis Isi Teks',
    questions: [
      { text: 'Menganalisis isi teks informasi berarti...', opts: ['Menguraikan bagian-bagian teks (ide pokok, fakta, tujuan, pesan) untuk memahaminya secara mendalam', 'Membaca judulnya saja lalu menutup buku', 'Menghitung jumlah tanda titik', 'Menyalin ulang persis'], ans: 0, exp: 'Analisis membedah struktur, bukti, dan makna bacaan.' },
      { text: 'Sebuah artikel berjudul "Cara Hemat Listrik di Rumah" memuat 5 langkah nyata dan data penghematan. Tujuan penulisnya adalah...', opts: ['Memberi informasi praktis dan mengajak pembaca berhemat listrik', 'Menghibur dengan dongeng', 'Menjual AC baru', 'Menakut-nakuti pembaca'], ans: 0, exp: 'Teks bersifat informatif sekaligus edukatif.' },
      { text: 'Tanda sebuah artikel informasi layak dipercaya adalah...', opts: ['Mencantumkan data/fakta yang jelas, bahasa objektif, dan berasal dari sumber resmi/ahli', 'Judulnya penuh huruf kapital dan tanda seru berlebihan', 'Isinya tidak sesuai judul', 'Memaksa segera dibagikan tanpa sumber'], ans: 0, exp: 'Kredibilitas sumber dan objektivitas data menjadi penanda informasi tepercaya.' },
    ],
  },

  // BAB 2: TEKS LAPORAN HASIL OBSERVASI
  {
    topicCode: 'BIND-SD6-02', subSeq: 1,
    objectives: ['Siswa mampu menganalisis kelengkapan struktur teks Laporan Hasil Observasi (LHO) tingkat lanjut.'],
    materialTitle: 'Struktur Teks Laporan Hasil Observasi',
    blocks: [
      { type: 'table', title: 'Struktur Teks LHO Lengkap (Siap Menuju SMP!)', headers: ['Struktur', 'Fungsi & Ciri Kebahasaan'], rows: [
        ['1. Pernyataan Umum / Klasifikasi', 'Definisi objek & pengelompokan jenisnya (memakai "adalah", "terbagi atas")'],
        ['2. Deskripsi Bagian', 'Uraian detail setiap komponen, ciri fisik, habitat, atau cara kerja'],
        ['3. Deskripsi Manfaat / Simpulan', 'Peran dan kegunaan objek bagi manusia atau ekosistem'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur LHO Kelas 6',
    questions: [
      { text: '"Hutan mangrove terbagi atas beberapa jenis bakau seperti Rhizophora dan Avicennia." Kalimat klasifikasi ini terletak pada bagian...', opts: ['Pernyataan umum / klasifikasi', 'Deskripsi manfaat', 'Penutup', 'Daftar pustaka'], ans: 0, exp: 'Klasifikasi jenis objek termasuk bagian pernyataan umum.' },
      { text: 'Perbedaan utama antara teks Deskripsi biasa dan teks Laporan Hasil Observasi (LHO) adalah...', opts: ['LHO menggambarkan objek secara umum/ilmiah objektif (klasifikasi), sedangkan deskripsi biasa bisa fokus 1 objek pribadi dan subjektif', 'Keduanya fiksi', 'LHO tidak punya struktur', 'Deskripsi selalu ilmiah'], ans: 0, exp: 'LHO membahas "Kucing" secara umum ilmiah; deskripsi membahas "Kucingku Si Mochi".' },
      { text: 'Bagian LHO yang menguraikan kegunaan objek dalam kehidupan sehari-hari disebut...', opts: ['Deskripsi manfaat', 'Orientasi', 'Komplikasi', 'Kramagung'], ans: 0, exp: 'Deskripsi manfaat merinci nilai guna objek.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-02', subSeq: 2,
    objectives: ['Siswa mampu memverifikasi fakta hasil pengamatan dengan data terukur (angka, ukuran, klasifikasi).'],
    materialTitle: 'Fakta Terukur dalam Hasil Pengamatan',
    blocks: [
      { type: 'tip', text: 'Fakta terukur membuat laporan observasi makin kuat! Contoh: alih-alih menulis "Pohonnya tinggi sekali", tulis "Tinggi pohon mangga di halaman sekolah sekitar 6 meter dengan lebar tajuk 4 meter."' },
    ],
    activityTitle: 'Latihan: Fakta Hasil Pengamatan',
    questions: [
      { text: 'Manakah kalimat hasil pengamatan yang PALING objektif dan terukur?', opts: ['Ruang perpustakaan sangat keren sekali!', 'Ruang perpustakaan berukuran 8 × 6 meter dan memiliki 10 rak buku yang tertata menurut kategori.', 'Menurutku perpustakaan ini terbaik se-Indonesia.', 'Semua siswa pasti betah di sini.'], ans: 1, exp: 'Menyebutkan ukuran 8×6 m dan jumlah 10 rak secara faktual.' },
      { text: 'Saat menulis LHO, kata-kata penilaian subjektif seperti "sangat cantik", "membosankan", atau "paling enak" sebaiknya...', opts: ['Dihindari dan diganti uraian fakta objektif', 'Diperbanyak', 'Ditulis di judul', 'Diulang 3 kali'], ans: 0, exp: 'LHO mengutamakan objektivitas ilmiah.' },
      { text: 'Pengamatan berulang terhadap objek yang sama oleh siswa berbeda akan menghasilkan fakta yang...', opts: ['Konsisten (sesuai kenyataan objek)', 'Berbeda total seperti dongeng', 'Saling bertentangan', 'Khayalan'], ans: 0, exp: 'Fakta objektif dapat dibuktikan siapa saja.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-02', subSeq: 3,
    objectives: ['Siswa mampu menyusun dan memperbaiki kalimat tidak efektif menjadi kalimat efektif (hemat kata, logis, jelas SPOK).'],
    materialTitle: 'Penggunaan Kalimat Efektif',
    blocks: [
      { type: 'table', title: 'Perbaikan Kalimat Tidak Efektif → Efektif', headers: ['Tidak Efektif (Boros / Rancu)', 'Efektif (Hemat & Jelas)'], rows: [
        ['Banyak siswa-siswa mengamati tanaman.', 'Banyak siswa mengamati tanaman. (atau: Siswa-siswa mengamati tanaman.)'],
        ['Hutan bakau sangat bermanfaat sekali.', 'Hutan bakau sangat bermanfaat. (hapus kata dobel "sekali"!)'],
        ['Bagi semua peserta diharapkan hadir tepat waktu.', 'Semua peserta diharapkan hadir tepat waktu. (hapus "bagi" agar subjek jelas!)'],
      ]},
    ],
    activityTitle: 'Latihan: Kalimat Efektif',
    questions: [
      { text: 'Perbaikan kalimat efektif untuk "Para bapak-bapak sedang bekerja bakti membersihkan selokan" adalah...', opts: ['Para bapak sedang bekerja bakti membersihkan selokan.', 'Semua para bapak-bapak bekerja bakti.', 'Bapak-bapak para bekerja bakti.', 'Sedang bekerja bakti para bapak-bapak.'], ans: 0, exp: 'Hindari bentuk jamak ganda ("para" + "bapak-bapak").' },
      { text: 'Manakah kalimat yang paling EFEKTIF?', opts: ['Air sungai ini sangat jernih sekali.', 'Air sungai ini sangat jernih.', 'Sangat jernih sekali air sungai ini.', 'Air dari pada sungai ini sangat amat jernih.'], ans: 1, exp: 'Tidak pleonasme (mengulang makna sama seperti "sangat ... sekali").' },
      { text: 'Syarat kalimat efektif antara lain memiliki subjek dan predikat jelas, hemat kata, logis, serta sesuai...', opts: ['Ejaan bahasa Indonesia (EYD)', 'Bahasa rahasia', 'Panjang minimal 30 kata', 'Jumlah koma terbanyak'], ans: 0, exp: 'Kelogisan, kehematan, kepaduan, dan ketepatan ejaan ciri kalimat efektif.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-02', subSeq: 4,
    objectives: ['Siswa mampu menyusun teks LHO lengkap 3–4 paragraf dengan kalimat efektif dan data pengamatan lapangan.'],
    materialTitle: 'Menyusun Laporan Hasil Observasi Lengkap',
    blocks: [
      { type: 'list', title: 'Checklist Laporan LHO Siap Presentasi', items: ['1. Judul spesifik (mis. "Bank Sampah Sekolah" atau "Ekosistem Tambak Bandeng").', '2. Paragraf 1: Pernyataan umum/klasifikasi.', '3. Paragraf 2–3: Deskripsi bagian disertai fakta terukur.', '4. Paragraf 4: Deskripsi manfaat + simpulan, memakai kalimat efektif & EYD V!'] },
    ],
    activityTitle: 'Latihan: Menyusun LHO Lengkap',
    questions: [
      { text: 'Dalam LHO tentang "Pasar Tradisional", informasi tentang jenis kios (sayur, ikan, sembako), jam ramai, dan tata letak lapak dimasukkan pada bagian...', opts: ['Deskripsi bagian', 'Judul', 'Daftar pustaka', 'Salam penutup'], ans: 0, exp: 'Rincian komponen objek berada di deskripsi bagian.' },
      { text: 'Agar laporan observasi lengkap mudah dipahami pembaca, antarparagraf harus disusun secara...', opts: ['Sistematis (umum → rinci → manfaat)', 'Acak', 'Tanpa paragraf', 'Semua dalam satu kalimat'], ans: 0, exp: 'Sistematika memudahkan pembaca menelusuri informasi.' },
      { text: 'Menyertakan tabel data ringkas hasil pengamatan di dalam LHO bertujuan untuk...', opts: ['Memperjelas data fakta agar cepat dibaca', 'Membuat bingung', 'Mengganti semua teks', 'Hiasan tanpa makna'], ans: 0, exp: 'Tabel menyajikan data terukur secara rapi.' },
    ],
  },

  // BAB 3: TEKS EKSPLANASI
  {
    topicCode: 'BIND-SD6-03', subSeq: 1,
    objectives: ['Siswa mampu membedakan fenomena alam, sosial, dan budaya yang diangkat dalam teks eksplanasi.'],
    materialTitle: 'Fenomena Alam dan Sosial dalam Eksplanasi',
    blocks: [
      { type: 'visual_cards', title: 'Ragam Topik Teks Eksplanasi Kelas 6', cards: [
        { emoji: '🌒', label: 'Fenomena Alam', sub: 'Proses terjadinya gerhana matahari, pasang surut air laut, efek rumah kaca' },
        { emoji: '🏙️', label: 'Fenomena Sosial', sub: 'Penyebab urbanisasi, dampak penggunaan gawai berlebihan, munculnya bank sampah' },
        { emoji: '🎭', label: 'Fenomena Budaya', sub: 'Perkembangan batik Nusantara atau tradisi gotong royong di era modern' },
      ]},
    ],
    activityTitle: 'Latihan: Fenomena Alam & Sosial',
    questions: [
      { text: 'Manakah judul teks eksplanasi yang membahas FENOMENA SOSIAL?', opts: ['Proses Terjadinya Gerhana Bulan', 'Mengapa Kemacetan Lalu Lintas Terjadi di Kota Besar?', 'Terjadinya Angin Darat dan Angin Laut', 'Siklus Batuan Gunung Berapi'], ans: 1, exp: 'Kemacetan adalah fenomena kehidupan masyarakat (sosial).' },
      { text: 'Teks berjudul "Proses Terjadinya Efek Rumah Kaca" membahas fenomena...', opts: ['Alam / lingkungan', 'Dongeng', 'Olahraga', 'Resep'], ans: 0, exp: 'Efek rumah kaca adalah proses fisika atmosfer alam.' },
      { text: 'Persamaan teks eksplanasi fenomena alam dan fenomena sosial adalah keduanya sama-sama menjelaskan...', opts: ['Hubungan sebab-akibat dan urutan proses terjadinya peristiwa', 'Cara memasak makanan', 'Daftar tokoh fiksi', 'Lirik lagu'], ans: 0, exp: 'Inti eksplanasi adalah sebab-akibat dan proses.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-03', subSeq: 2,
    objectives: ['Siswa mampu menganalisis hubungan sebab dan akibat berantai (kausalitas) dalam teks eksplanasi.'],
    materialTitle: 'Analisis Sebab dan Akibat',
    blocks: [
      { type: 'worked_example', level: 'Rantai Sebab-Akibat', question: 'Uraikan rantai sebab-akibat pemanasan global: pembakaran bahan bakar fosil → gas CO₂ meningkat → panas terperangkap di atmosfer → es kutub mencair → permukaan laut naik!', steps: ['Setiap akibat dapat menjadi SEBAB bagi tahap berikutnya!', 'Gunakan konjungsi kausal: "akibatnya", "sehingga", "menyebabkan", "berdampak pada".'], answer: 'Rantai kausal menjelaskan fenomena kompleks secara runtut dan logis.' },
    ],
    activityTitle: 'Latihan: Sebab dan Akibat',
    questions: [
      { text: '"Posisi Bulan berada tepat di antara Matahari dan Bumi sehingga bayangan Bulan menutupi sebagian permukaan Bumi." Bagian AKIBAT kalimat ini adalah...', opts: ['Posisi Bulan di antara Matahari dan Bumi', 'Bayangan Bulan menutupi sebagian permukaan Bumi', 'Matahari bersinar terang', 'Bumi berotasi'], ans: 1, exp: 'Klausa setelah "sehingga" adalah akibatnya.' },
      { text: 'Konjungsi berikut yang menyatakan hubungan SEBAB-AKIBAT adalah...', opts: ['Karena, sebab, akibatnya, sehingga, mengakibatkan', 'Dan, lalu, kemudian', 'Atau, maupun', 'Tetapi, melainkan'], ans: 0, exp: 'Konjungsi kausalitas menautkan sebab dan akibat.' },
      { text: 'Mengapa rantai sebab-akibat dalam teks eksplanasi tidak boleh dikarang sembarangan?', opts: ['Karena harus dapat dipertanggungjawabkan secara ilmiah/faktual', 'Karena harus lucu', 'Agar panjang', 'Biar susah dibaca'], ans: 0, exp: 'Eksplanasi berlandaskan ilmu pengetahuan.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-03', subSeq: 3,
    objectives: ['Siswa mampu menata urutan proses kronologis (konjungsi temporal) dalam deretan penjelas teks eksplanasi.'],
    materialTitle: 'Urutan Proses Kronologis',
    blocks: [
      { type: 'tip', text: 'Selain konjungsi sebab-akibat (karena, sehingga), teks eksplanasi juga menggunakan konjungsi KRONOLOGIS (mula-mula, kemudian, selanjutnya, akhirnya) untuk mengurutkan tahapan proses!' },
    ],
    activityTitle: 'Latihan: Urutan Proses',
    questions: [
      { text: 'Urutan proses terjadinya listrik pada PLTA: (1) Generator menghasilkan listrik, (2) Air waduk mengalir deras memutar turbin, (3) Listrik disalurkan melalui jaringan kabel ke rumah warga. Urutan yang benar:', opts: ['2-1-3', '1-2-3', '3-2-1', '2-3-1'], ans: 0, exp: 'Air putar turbin (2) → generator hasilkan listrik (1) → disalurkan ke rumah (3).' },
      { text: 'Konjungsi kronologis (urutan waktu) yang biasa dipakai di deretan penjelas adalah...', opts: ['Mula-mula, kemudian, selanjutnya, setelah itu, akhirnya', 'Tetapi, namun', 'Padahal, walaupun', 'Kecuali'], ans: 0, exp: 'Konjungsi temporal menandai tahapan demi tahapan.' },
      { text: 'Jika urutan proses pada teks eksplanasi terbalik, dampaknya bagi pembaca adalah...', opts: ['Pembaca salah memahami proses ilmiah yang sebenarnya', 'Lebih menarik', 'Tidak ada bedanya', 'Menjadi pantun'], ans: 0, exp: 'Urutan proses ilmiah harus tepat sesuai alur nyatanya.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-03', subSeq: 4,
    objectives: ['Siswa mampu menelaah hubungan antargagasan antarparagraf (kohesi & koherensi) dalam teks eksplanasi.'],
    materialTitle: 'Hubungan Antargagasan dalam Teks',
    blocks: [
      { type: 'text', text: 'Teks eksplanasi yang baik memiliki KOHERENSI (kepaduan makna antarparagraf): Paragraf 1 mengenalkan fenomena → Paragraf 2–3 menguraikan proses sebab-akibat yang nyambung langsung → Paragraf 4 menyimpulkan dampaknya. Gunakan kata rujukan ("hal tersebut", "proses ini", "fenomena itu") agar kalimat mengalir halus!' },
    ],
    activityTitle: 'Latihan: Hubungan Antargagasan',
    questions: [
      { text: '"Panas matahari menguapkan air laut ke atmosfer. Proses tersebut dinamakan evaporasi." Frasa "Proses tersebut" merujuk pada...', opts: ['Penguapan air laut ke atmosfer oleh panas matahari', 'Turunnya hujan', 'Angin laut', 'Gelombang pasang'], ans: 0, exp: 'Kata rujukan menghubungkan gagasan kalimat kedua dengan kalimat pertama.' },
      { text: 'Kepaduan makna antarparagraf sehingga keseluruhan teks saling bertautan utuh disebut...', opts: ['Koherensi', 'Konflik', 'Diksi', 'Rima'], ans: 0, exp: 'Koherensi menjaga alur logika antargagasan.' },
      { text: 'Jika pada teks eksplanasi "Proses Terjadinya Gerhana Bulan" tiba-tiba ada paragraf tentang resep kue bolu, maka teks tersebut kehilangan...', opts: ['Kepaduan gagasan (koherensi)', 'Jumlah huruf', 'Tanda titik', 'Judul'], ans: 0, exp: 'Paragraf melenceng merusak kepaduan teks.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-03', subSeq: 5,
    objectives: ['Siswa mampu menulis teks eksplanasi ilmiah populer 3–4 paragraf dengan struktur lengkap dan kata baku.'],
    materialTitle: 'Menulis Teks Eksplanasi',
    blocks: [
      { type: 'worked_example', level: 'Kerangka Eksplanasi', question: 'Rancang kerangka teks eksplanasi "Terjadinya Pasang Surut Air Laut"!', steps: ['Paragraf 1 (Pernyataan Umum): Definisi pasang surut air laut yang rutin dialami wilayah pesisir.', 'Paragraf 2 (Deretan Penjelas): Pengaruh gaya gravitasi Bulan dan Matahari menarik massa air laut saat Bumi berotasi.', 'Paragraf 3 (Interpretasi): Manfaat pengetahuan pasang surut bagi nelayan, pelayaran, dan petambak pesisir.'], answer: 'Tersusun ilmiah, runtut, dan kontekstual!' },
    ],
    activityTitle: 'Latihan: Menulis Eksplanasi',
    questions: [
      { text: 'Dalam menulis teks eksplanasi, penggunaan istilah teknis ilmiah (seperti gravitasi, evaporasi, kondensasi) harus...', opts: ['Tepat ejaan dan maknanya sesuai kamus/buku sains', 'Dikarang sendiri', 'Disingkat asal', 'Dihapus semua'], ans: 0, exp: 'Ketepatan istilah menjaga mutu ilmiah teks.' },
      { text: 'Urutan tiga struktur wajib saat menulis teks eksplanasi adalah...', opts: ['Pernyataan umum → Deretan penjelas → Interpretasi', 'Alat & bahan → Langkah → Penutup', 'Orientasi → Komplikasi → Resolusi', 'Sampiran → Isi'], ans: 0, exp: 'Struktur baku eksplanasi.' },
      { text: 'Kalimat pasif sering dipakai di teks eksplanasi ilmiah, contohnya...', opts: ['"Listrik dihasilkan oleh generator yang diputar turbin."', '"Ayo putar turbin sekarang!"', '"Apakah turbin itu berat?"', '"Wah, turbinnya keren!"'], ans: 0, exp: 'Kata kerja pasif (dihasilkan, diputar) memfokuskan perhatian pada proses.' },
    ],
  },

  // BAB 4: TEKS PERSUASI DAN PENDAPAT
  {
    topicCode: 'BIND-SD6-04', subSeq: 1,
    objectives: ['Siswa mampu mengenal pengertian, tujuan, dan ciri kata ajakan dalam teks persuasi (poster, iklan layanan masyarakat, pidato).'],
    materialTitle: 'Mengenal Teks Persuasi (Ajakan & Imbauan)',
    blocks: [
      { type: 'text', text: 'Teks persuasi adalah teks yang bertujuan MEMBUJUK atau MENGAJAK pembaca/pendengar agar mau melakukan sesuatu yang baik sesuai harapan penulis — didukung alasan dan fakta!' },
      { type: 'visual_cards', title: 'Kata Kunci Ajakan Persuasi', cards: [
        { emoji: '📣', label: 'Ayo / Mari / Marilah', sub: '"Mari kita pilah sampah mulai dari rumah!"' },
        { emoji: '💡', label: 'Hendaknya / Sebaiknya', sub: '"Sebaiknya kita membawa tumbler sendiri ke sekolah."' },
        { emoji: '🚫', label: 'Hindarilah / Janganlah', sub: '"Janganlah membuang sampah ke selokan!"' },
      ]},
    ],
    activityTitle: 'Latihan: Mengenal Persuasi',
    questions: [
      { text: 'Teks yang berisi alasan dan ajakan untuk memengaruhi pembaca agar melakukan suatu tindakan disebut teks...', opts: ['Persuasi', 'Observasi', 'Laporan perjalanan', 'Dongeng'], ans: 0, exp: 'Persuasi bersifat membujuk/mengajak secara halus dan logis.' },
      { text: 'Manakah yang merupakan kalimat PERSUASIF (ajakan)?', opts: ['Marilah kita hemat energi listrik demi masa depan bumi kita!', 'Listrik ditemukan oleh para ilmuwan.', 'Berapa watt lampu di kamarmu?', 'Lampu itu berwarna putih.'], ans: 0, exp: 'Menggunakan kata ajakan "Marilah kita..." untuk menggugah tindakan.' },
      { text: 'Contoh penerapan teks persuasi yang sering kita temui di sekolah adalah...', opts: ['Poster hemat air, slogan kebersihan, dan pidato ajakan rajin membaca', 'Daftar hadir', 'Kamus bahasa', 'Peta dunia'], ans: 0, exp: 'Poster layanan masyarakat dan pidato banyak menggunakan persuasi.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-04', subSeq: 2,
    objectives: ['Siswa mampu mendukung ajakan persuasi dengan fakta dan alasan logis agar pembaca tergerak sukarela.'],
    materialTitle: 'Alasan Pendukung dalam Teks Persuasi',
    blocks: [
      { type: 'worked_example', level: 'Struktur Persuasi Kuat', question: 'Mengapa ajakan "Ayo kurangi plastik sekali pakai!" jauh lebih kuat jika didahului fakta?', steps: ['Fakta dulu: "Sampah plastik membutuhkan ratusan tahun untuk terurai dan banyak mencemari laut tempat hidup ikan."', 'Baru ajakan: "Oleh karena itu, mari kita biasakan membawa tas belanja kain dan botol minum sendiri!"'], answer: 'Pembaca tergerak dari kesadaran sendiri karena melihat fakta nyata!' },
    ],
    activityTitle: 'Latihan: Alasan Pendukung Persuasi',
    questions: [
      { text: 'Struktur teks persuasi yang lengkap dan meyakinkan meliputi...', opts: ['Pengenalan isu → Rangkaian argumen & fakta → Pernyataan ajakan → Penegasan kembali', 'Judul saja lalu ajakan singkat', 'Alat & bahan → Langkah', 'Sampiran → Isi'], ans: 0, exp: 'Argumen dan fakta sebelum ajakan membuat bujukan masuk akal.' },
      { text: 'Ajakan "Ayo rajin mencuci tangan pakai sabun!" paling kuat didukung oleh fakta...', opts: ['Mencuci tangan pakai sabun terbukti efektif membunuh kuman penyebab diare dan flu.', 'Sabun memiliki banyak warna.', 'Air terasa dingin.', 'Wastafel ada di depan kelas.'], ans: 0, exp: 'Fakta manfaat kesehatan langsung meyakinkan pembaca.' },
      { text: 'Persuasi yang baik mengajak pembaca dengan cara...', opts: ['Sopan, logis, dan berbasis fakta bermanfaat — BUKAN memaksa atau menipu', 'Mengancam', 'Berbohong', 'Mengejek'], ans: 0, exp: 'Persuasi etis menghormati akal sehat pembaca.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-04', subSeq: 3,
    objectives: ['Siswa mampu menyampaikan pendapat persuasif secara lisan (pidato singkat) dengan santun dan meyakinkan.'],
    materialTitle: 'Menyampaikan Pendapat Persuasif (Pidato Singkat)',
    blocks: [
      { type: 'table', title: 'Kerangka Pidato Persuasif Siswa Kelas 6', headers: ['Bagian Pidato', 'Contoh Singkat'], rows: [
        ['1. Pembuka', 'Salam, sapaan hormat (Kepala Sekolah, Guru, Teman-teman), puji syukur'],
        ['2. Isi (Fakta + Ajakan)', 'Paparkan masalah (mis. kebersihan sekolah), alasannya, lalu seruan ajakan!'],
        ['3. Penutup', 'Simpulan singkat, permohonan maaf, terima kasih, salam penutup'],
      ]},
    ],
    activityTitle: 'Latihan: Menyampaikan Pendapat Persuasif',
    questions: [
      { text: 'Bagian pidato yang memuat ucapan salam, sapaan hormat kepada hadirin, dan rasa syukur adalah...', opts: ['Pembuka', 'Isi', 'Penutup', 'Daftar pustaka'], ans: 0, exp: 'Pembuka membangun hubungan baik dengan pendengar.' },
      { text: '"Demikian yang dapat saya sampaikan. Mohon maaf apabila ada tutur kata yang kurang berkenan. Terima kasih." Kutipan ini adalah bagian...', opts: ['Pembuka', 'Isi', 'Penutup pidato', 'Judul'], ans: 2, exp: 'Ucapan maaf dan terima kasih menutup pidato dengan santun.' },
      { text: 'Saat menyampaikan bagian ajakan dalam pidato, nada suara pembicara sebaiknya...', opts: ['Tegas, bersemangat, dan tulus', 'Sangat lesu dan mengantuk', 'Berbisik tak terdengar', 'Marah membentak'], ans: 0, exp: 'Semangat pembicara menular kepada pendengar.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-04', subSeq: 4,
    objectives: ['Siswa mampu menulis teks ajakan/poster/slogan sederhana yang ringkas, komunikatif, dan mudah diingat.'],
    materialTitle: 'Menulis Teks Ajakan, Slogan, dan Poster',
    blocks: [
      { type: 'visual_cards', title: 'Beda Poster vs Slogan', cards: [
        { emoji: '📝', label: 'Slogan', sub: 'Kalimat pendek menarik yang mudah diingat ("Bersih Pangkal Sehat!", "Hemat Energi, Selamatkan Bumi!")' },
        { emoji: '🖼️', label: 'Poster', sub: 'Perpaduan GAMBAR menarik + kalimat ajakan singkat yang dipasang di tempat umum' },
      ]},
    ],
    activityTitle: 'Latihan: Menulis Teks Ajakan',
    questions: [
      { text: 'Manakah kalimat SLOGAN yang paling singkat, kuat, dan cocok untuk poster kebersihan sekolah?', opts: ['"Sekolah Bersih, Belajar Nyaman, Prestasi Gemilang!"', '"Diharapkan agar seluruh siswa kelas satu sampai enam tidak membuang kertas di lantai halaman belakang."', '"Sapu itu ada di pojok kelas."', '"Hari ini hari Senin."'], ans: 0, exp: 'Slogan efektif harus singkat, ritmis, dan mudah diingat.' },
      { text: 'Unsur utama yang membedakan POSTER dengan teks biasa adalah poster memadukan...', opts: ['Tulisan singkat persuasif dan ilustrasi gambar yang menarik perhatian', 'Tulisan 5 halaman penuh tanpa gambar', 'Hanya angka tabel', 'Surat resmi'], ans: 0, exp: 'Visual gambar memperkuat pesan poster.' },
      { text: 'Kalimat ajakan yang cocok untuk poster "Gemar Membaca" adalah...', opts: ['"Ayo Membaca 15 Menit Setiap Hari, Buka Jendela Duniamu!"', '"Jangan masuk perpustakaan!"', '"Buku sangat berat dibawa."', '"Tutup bukumu sekarang!"'], ans: 0, exp: 'Mengajak positif sekaligus menjelaskan manfaatnya.' },
    ],
  },

  // BAB 5: TEKS WAWANCARA DAN PENYAJIAN INFORMASI
  {
    topicCode: 'BIND-SD6-05', subSeq: 1,
    objectives: ['Siswa mampu menerapkan teknik wawancara yang terstruktur, luwes, dan mampu mengajukan pertanyaan lanjutan (probing).'],
    materialTitle: 'Teknik Wawancara yang Efektif',
    blocks: [
      { type: 'list', title: '4 Teknik Wawancara Tingkat Lanjut (Kelas 6)', items: ['1. Riset ringan dulu tentang profesi/bidang narasumber agar pertanyaan bermutu.', '2. Mulai dari pertanyaan mudah/hangat, baru masuk ke inti topik.', '3. Ajukan PERTANYAAN LANJUTAN (tindak lanjut) dari jawaban menarik narasumber!', '4. Hindari pertanyaan yang menyinggung privasi atau menyudutkan narasumber.'] },
    ],
    activityTitle: 'Latihan: Teknik Wawancara',
    questions: [
      { text: 'Jika narasumber perajin pudak menjawab "Kesulitan kami saat musim hujan adalah mencari pelepah pinang kering", pertanyaan LANJUTAN paling cerdas adalah...', opts: ['"Bagaimana cara Ibu menyiasati ketersediaan pelepah pinang saat musim hujan?"', '"Siapa nama anak Ibu?"', '"Apa warna kesukaan Ibu?"', '"Kapan hujan berhenti?"'], ans: 0, exp: 'Pertanyaan lanjutan menggali solusi dari informasi menarik yang baru muncul.' },
      { text: 'Manfaat mencari tahu latar belakang narasumber sebelum wawancara adalah...', opts: ['Pertanyaan yang diajukan lebih tepat sasaran dan berbobot', 'Tidak perlu datang wawancara', 'Bisa berdebat', 'Mengganti narasumber'], ans: 0, exp: 'Persiapan matang mencerminkan rasa hormat dan profesionalisme.' },
      { text: 'Pertanyaan yang sebaiknya DIHINDARI saat mewawancarai tokoh masyarakat adalah...', opts: ['Pertanyaan sopan seputar kiprah dan tips suksesnya', 'Pertanyaan pribadi yang sensitif dan tidak berhubungan dengan topik', 'Pertanyaan "Bagaimana prosesnya?"', 'Pertanyaan "Apa pesan bagi pelajar?"'], ans: 1, exp: 'Jaga etika dan fokus pada topik wawancara.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-05', subSeq: 2,
    objectives: ['Siswa mampu mengolah transkrip tanya-jawab wawancara menjadi narasi informasi dan kutipan langsung/tidak langsung.'],
    materialTitle: 'Mengolah Hasil Wawancara (Kalimat Langsung & Tidak Langsung)',
    blocks: [
      { type: 'table', title: 'Mengubah Jawaban Jadi Kalimat Langsung vs Tidak Langsung', headers: ['Bentuk', 'Contoh Pengolahan'], rows: [
        ['Kalimat Langsung (pakai tanda petik)', 'Pak Hasan mengatakan, "Kualitas air tambak harus dicek setiap pagi."'],
        ['Kalimat Tidak Langsung (tanpa petik)', 'Pak Hasan mengatakan bahwa kualitas air tambak harus dicek setiap pagi.'],
      ]},
    ],
    activityTitle: 'Latihan: Mengolah Hasil Wawancara',
    questions: [
      { text: 'Pengubahan kalimat langsung `Ibu Sari berkata, "Saya mulai usaha pudak sejak 2010."` menjadi kalimat TIDAK LANGSUNG yang tepat adalah...', opts: ['Ibu Sari berkata bahwa ia memulai usaha pudak sejak 2010.', 'Ibu Sari berkata, "bahwa saya mulai 2010."', 'Saya mulai usaha pudak sejak 2010 kata Ibu Sari.', 'Ibu Sari berkata saya 2010.'], ans: 0, exp: 'Tanda petik hilang, ditambah "bahwa", dan kata ganti "saya" berubah menjadi "ia/beliau".' },
      { text: 'Saat mengolah rekaman wawancara menjadi artikel laporan, jawaban yang berulang-ulang atau keluar dari topik sebaiknya...', opts: ['Dirangkum dan dipilih bagian pentingnya tanpa mengubah maksud narasumber', 'Dimasukkan semua termasuk batuk dan jeda', 'Diubah jadi fakta bohong', 'Dihapus semua'], ans: 0, exp: 'Penyuntingan menjaga fokus laporan sekaligus setia pada isi asli.' },
      { text: 'Tanda baca wajib yang mengapit ucapan asli narasumber dalam kalimat langsung adalah...', opts: ['Tanda petik dua ("...")', 'Tanda kurung (...)', 'Tanda seru (!)', 'Garis miring (/)'], ans: 0, exp: 'Kutipan langsung selalu diapit tanda petik ganda.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-05', subSeq: 3,
    objectives: ['Siswa mampu menyusun laporan hasil wawancara secara utuh, sistematis, dan siap dibaca orang lain.'],
    materialTitle: 'Menyusun Laporan Wawancara Lengkap',
    blocks: [
      { type: 'tip', text: 'Susunan rapi laporan wawancara kelas 6: Judul → Latar Belakang & Tujuan → Identitas (Topik, Narasumber, Pewawancara, Waktu, Tempat) → Ringkasan Hasil Wawancara (narasi + kutipan penting) → Kesimpulan & Saran.' },
    ],
    activityTitle: 'Latihan: Menyusun Laporan Wawancara',
    questions: [
      { text: 'Bagian laporan wawancara yang menjelaskan ALASAN mengapa kelompokmu memilih topik dan narasumber tersebut adalah...', opts: ['Latar belakang dan tujuan', 'Daftar pertanyaan', 'Tanda tangan', 'Sampul'], ans: 0, exp: 'Latar belakang menguraikan alasan dan tujuan kegiatan.' },
      { text: 'Mencantumkan kutipan langsung pesan dari narasumber di dalam laporan membuat laporan terasa...', opts: ['Lebih hidup, otentik, dan tepercaya', 'Seperti dongeng', 'Tidak baku', 'Salah format'], ans: 0, exp: 'Kutipan langsung menghadirkan suara asli narasumber.' },
      { text: 'Penulisan identitas "Hari/Tanggal", "Tempat", dan "Narasumber" dalam laporan wawancara sebaiknya memakai...', opts: ['Huruf kapital yang tepat dan tata letak sejajar rapi', 'Huruf kecil semua tanpa titik dua', 'Tulisan miring semua', 'Warna mencolok sulit dibaca'], ans: 0, exp: 'Kerapian tata letak dan ejaan memudahkan pembacaan.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-05', subSeq: 4,
    objectives: ['Siswa mampu menyajikan/mempresentasikan hasil wawancara ke dalam format infografis, berita singkat, atau laporan lisan.'],
    materialTitle: 'Menyajikan Informasi Hasil Wawancara',
    blocks: [
      { type: 'visual_cards', title: '3 Cara Kreatif Menyajikan Hasil Wawancara', cards: [
        { emoji: '📰', label: 'Artikel Mading / Berita Mini', sub: 'Judul menarik + foto narasumber + ringkasan kisah inspiratif' },
        { emoji: '📊', label: 'Infografis / Poster', sub: 'Poin-poin tips narasumber dengan ikon dan angka kunci' },
        { emoji: '🎤', label: 'Laporan Lisan di Kelas', sub: 'Ceritakan profil narasumber, temuan menarik, dan pesan inspiratifnya!' },
      ]},
    ],
    activityTitle: 'Latihan: Menyajikan Hasil Wawancara',
    questions: [
      { text: 'Menyajikan hasil wawancara dalam bentuk perpaduan teks ringkas, angka kunci, dan ilustrasi visual disebut...', opts: ['Infografis', 'Naskah drama', 'Pantun', 'Puisi'], ans: 0, exp: 'Infografis meringkas informasi secara visual agar cepat dipahami.' },
      { text: 'Jika ingin menempelkan foto narasumber di mading hasil wawancara sekolah, etika terbaik adalah...', opts: ['Meminta izin narasumber terlebih dahulu dan menuliskan nama/keterangannya dengan benar', 'Mengambil foto sembunyi-sembunyi', 'Mengubah wajahnya', 'Tidak menuliskan namanya'], ans: 0, exp: 'Izin dan pencantuman nama menghargai narasumber.' },
      { text: 'Saat menyampaikan hasil wawancara secara lisan di kelas, hal terpenting yang dibagikan di akhir adalah...', opts: ['Pelajaran berharga atau inspirasi dari narasumber', 'Daftar alat tulis yang dibawa', 'Warna kursi ruang tamu narasumber', 'Keluhan lelah'], ans: 0, exp: 'Kesimpulan inspiratif memberi nilai bagi pendengar.' },
    ],
  },

  // BAB 6: SASTRA: PANTUN, PUISI, DAN CERITA RAKYAT
  {
    topicCode: 'BIND-SD6-06', subSeq: 1,
    objectives: ['Siswa mampu menganalisis makna tersurat, makna kias, dan amanat dalam pantun, puisi, dan cerita rakyat.'],
    materialTitle: 'Analisis Makna Karya Sastra',
    blocks: [
      { type: 'worked_example', level: 'Analisis Puisi', question: '"Di tanganmu tergenggam lentera masa depan / Jangan biarkan padam diterpa rasa malas." Apa makna "lentera masa depan"?', steps: ['Lentera = penerang jalan.', 'Makna kiasnya: ilmu pengetahuan dan cita-cita yang menuntun kehidupan kelak agar sukses — jangan sampai gagal karena malas!'], answer: 'Ilmu & cita-cita yang harus dijaga dengan ketekunan.' },
    ],
    activityTitle: 'Latihan: Analisis Makna Sastra',
    questions: [
      { text: 'Makna isi pantun "Berakit-rakit ke hulu, berenang-renang ke tepian / Bersakit-sakit dahulu, bersenang-senang kemudian" adalah...', opts: ['Bekerja keras dan bersusah payah dulu saat belajar akan membuahkan kesuksesan di kemudian hari', 'Kita harus berenang di sungai', 'Jangan pernah bekerja keras', 'Bermain dulu baru belajar'], ans: 0, exp: 'Pantun legendaris ini mengajarkan ketekunan demi buah manis masa depan.' },
      { text: 'Makna ungkapan "ringan sama dijinjing, berat sama dipikul" adalah...', opts: ['Suka dan duka maupun pekerjaan berat akan terasa ringan jika dikerjakan bergotong royong', 'Barang berat jangan diangkat', 'Bekerja sendiri lebih baik', 'Lomba angkat beban'], ans: 0, exp: 'Peribahasa Nusantara tentang kekuatan gotong royong.' },
      { text: 'Saat menganalisis makna puisi, kita perlu memperhatikan pilihan kata (diksi), bahasa kias, dan...', opts: ['Suasana perasaan (nada) penyair', 'Berat kertasnya', 'Jenis pulpen', 'Jumlah spasi'], ans: 0, exp: 'Diksi, kiasan, dan suasana menyatu membentuk makna puisi.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-06', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi nilai-nilai kehidupan (moral, sosial, budaya, religius) dalam cerita rakyat Nusantara.'],
    materialTitle: 'Nilai-Nilai dalam Cerita Rakyat',
    blocks: [
      { type: 'table', title: '4 Nilai Luhur dalam Cerita Rakyat', headers: ['Jenis Nilai', 'Maknanya', 'Contoh dalam Cerita'], rows: [
        ['Nilai Moral', 'Ajaran baik-buruk perilaku pribadi', 'Jujur, rendah hati, menepati janji, tidak serakah'],
        ['Nilai Sosial', 'Hubungan baik dengan sesama warga', 'Tolong-menolong, peduli orang miskin, musyawarah'],
        ['Nilai Budaya', 'Adat istiadat dan kearifan lokal daerah', 'Penghormatan pada orang tua, tradisi gotong royong'],
        ['Nilai Religius', 'Keimanan dan rasa syukur kepada Tuhan', 'Berdoa sebelum berusaha, bersyukur atas rezeki'],
      ]},
    ],
    activityTitle: 'Latihan: Nilai Cerita Rakyat',
    questions: [
      { text: 'Dalam cerita rakyat, seorang tokoh selalu berdoa dan bersyukur kepada Tuhan saat mendapat pertolongan. Nilai yang terkandung adalah nilai...', opts: ['Religius', 'Ekonomi', 'Olahraga', 'Geografis'], ans: 0, exp: 'Hubungan syukur dan doa kepada Tuhan adalah nilai religius.' },
      { text: 'Tokoh Nenek Dadapan yang merawat Keong Mas dan suka berbagi makanan dengan tetangga mencerminkan nilai...', opts: ['Sosial (kepedulian terhadap sesama)', 'Kesombongan', 'Kompetisi', 'Keegoisan'], ans: 0, exp: 'Berbagi dan peduli pada sesama adalah nilai sosial.' },
      { text: 'Berbakti kepada ibu sebagaimana pesan kisah Malin Kundang adalah wujud nilai...', opts: ['Moral dan budaya', 'Matematika', 'Teknologi', 'Komersial'], ans: 0, exp: 'Menghormati orang tua adalah nilai moral sekaligus budaya luhur Nusantara.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-06', subSeq: 3,
    objectives: ['Siswa mampu membedakan unsur pembangun puisi (rima, diksi, majas, bait) dan prosa cerita rakyat (tokoh, latar, alur, sudut pandang).'],
    materialTitle: 'Membandingkan Unsur Karya Sastra',
    blocks: [
      { type: 'table', title: 'Perbandingan 3 Jenis Karya Sastra', headers: ['Karya Sastra', 'Bentuk', 'Unsur Khas'], rows: [
        ['Pantun', 'Puisi lama terikat', '4 baris, 8–12 suku kata, rima a-b-a-b, sampiran & isi'],
        ['Puisi Bebas', 'Puisi modern', 'Bait & baris bebas, diksi padat, majas (personifikasi, metafora, simile)'],
        ['Cerita Rakyat', 'Prosa narasi', 'Paragraf, tokoh & watak, latar, alur (konflik–klimaks–resolusi), amanat'],
      ]},
    ],
    activityTitle: 'Latihan: Unsur Sastra',
    questions: [
      { text: 'Gaya bahasa yang membandingkan sesuatu secara langsung TANPA kata "seperti/bagai" (mis. "Anak itu adalah bintang kelas") disebut majas...', opts: ['Metafora', 'Personifikasi', 'Simile', 'Hiperbola'], ans: 0, exp: 'Metafora = perbandingan langsung (bintang kelas = paling berprestasi).' },
      { text: 'Gaya bahasa yang melebih-lebihkan kenyataan untuk memberi kesan kuat (mis. "Tangisannya membanjiri seluruh ruangan") disebut...', opts: ['Hiperbola', 'Simile', 'Fakta', 'Definisi'], ans: 0, exp: 'Hiperbola melebih-lebihkan secara kias.' },
      { text: 'Unsur yang SELALU dimiliki baik oleh pantun, puisi, maupun cerita rakyat adalah...', opts: ['Tema dan amanat (pesan)', 'Sampiran', 'Kramagung', 'Daftar pustaka'], ans: 0, exp: 'Semua karya sastra memiliki tema dan pesan/amanat.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-06', subSeq: 4,
    objectives: ['Siswa mampu menulis pantun dan puisi orisinal dengan pilihan kata indah dan rima serasi.'],
    materialTitle: 'Menulis Puisi dan Pantun Orisinal',
    blocks: [
      { type: 'tip', text: 'Menulis puisi untuk kelas 6 (misal bertema perpisahan SD, guru, atau sahabat): pilih 1 kenangan nyata, tuliskan 3–4 kata kunci emosional, lalu ubah menjadi baris-baris padat memakai 1–2 bahasa kias!' },
    ],
    activityTitle: 'Latihan: Menulis Puisi & Pantun',
    questions: [
      { text: 'Lengkapi pantun perpisahan kelas 6: "Burung merpati terbang melayang / Hinggap sebentar di pohon jati / ... / ..."', opts: ['Enam tahun berlalu penuh kenang / Jasa guruku abadi di hati', 'Pohon jati sangat tinggi / Aku mau tidur siang lagi', 'Burung merpati makan padi / Mari kita ke pasar pagi', 'Terbang tinggi di angkasa / Semua teman sangat biasa'], ans: 0, exp: 'Rima a-b-a-b pas: melayang–kenang (-ang) dan jati–hati (-ti)!' },
      { text: 'Dalam menulis puisi bebas, kata-kata yang tidak perlu (seperti "yang", "adalah", "tersebut") biasanya...', opts: ['Dipadatkan agar setiap kata terasa kuat dan bermakna', 'Diperbanyak terus', 'Diganti angka', 'Diulang 10 kali'], ans: 0, exp: 'Ciri bahasa puisi adalah pemadatan kata.' },
      { text: 'Mengubah cerita pengalaman menjadi puisi memerlukan kemampuan memilih...', opts: ['Diksi (kata indah) dan bahasa kias yang mewakili perasaan', 'Tabel harga', 'Denah rumah', 'Rumus luas'], ans: 0, exp: 'Diksi dan imaji membangkitkan emosi pembaca.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-06', subSeq: 5,
    objectives: ['Siswa mampu menceritakan kembali atau memparafrasekan isi pantun, puisi, dan cerita rakyat secara runtut dan ekspresif.'],
    materialTitle: 'Menceritakan Kembali Karya Sastra',
    blocks: [
      { type: 'list', title: 'Tips Parafrase & Bercerita Kembali', items: ['Pahami inti konflik dan pesan moral sebelum tampil.', 'Jangan mengubah pesan utama atau nama tokoh pokok.', 'Gunakan variasi tempo suara (pelan saat tegang, ceria saat gembira) agar pendengar terpukau!'] },
    ],
    activityTitle: 'Latihan: Menceritakan Kembali Sastra',
    questions: [
      { text: 'Mengubah bentuk puisi menjadi paragraf cerita (prosa) tanpa mengubah makna aslinya disebut...', opts: ['Parafrase', 'Plagiarisme', 'Deklamasi', 'Observasi'], ans: 0, exp: 'Parafrase menguraikan makna puisi ke bahasa prosa.' },
      { text: 'Hal yang wajib disampaikan pada bagian akhir saat menceritakan kembali cerita rakyat di kelas adalah...', opts: ['Pesan moral (amanat) cerita', 'Nomor halaman buku', 'Nama penerbit', 'Harga buku'], ans: 0, exp: 'Amanat menjadi inti pembelajaran dari cerita rakyat.' },
      { text: 'Agar penceritaan ulang tidak monoton, pembicara perlu mengatur...', opts: ['Intonasi, ekspresi wajah, dan jeda kalimat', 'Membaca super cepat tanpa berhenti', 'Menunduk menatap sepatu', 'Suara datar terus'], ans: 0, exp: 'Intonasi dan ekspresi menghidupkan cerita.' },
    ],
  },

  // BAB 7: DRAMA DAN EKSPRESI LISAN
  {
    topicCode: 'BIND-SD6-07', subSeq: 1,
    objectives: ['Siswa mampu mengidentifikasi unsur pementasan drama lengkap (naskah, sutradara, pemeran, properti, tata panggung, penonton).'],
    materialTitle: 'Unsur Pementasan Drama',
    blocks: [
      { type: 'visual_cards', title: 'Tim Sukses Pementasan Drama Sekolah', cards: [
        { emoji: '📜', label: 'Naskah & Penulis', sub: 'Teks berisi prolog, dialog, kramagung, epilog' },
        { emoji: '🎬', label: 'Sutradara', sub: 'Pemimpin latihan yang mengarahkan akting dan alur pementasan' },
        { emoji: '🎭', label: 'Pemeran (Aktor/Aktris)', sub: 'Siswa yang menghidupkan tokoh lewat dialog & gerak' },
        { emoji: '🪑', label: 'Properti & Kostum', sub: 'Benda pendukung (tas, buku, sapu) dan pakaian sesuai peran' },
      ]},
    ],
    activityTitle: 'Latihan: Unsur Pementasan Drama',
    questions: [
      { text: 'Orang yang bertugas memimpin, mengatur, dan mengarahkan jalannya latihan serta pementasan drama disebut...', opts: ['Sutradara', 'Penonton', 'Pustakawan', 'Notulis'], ans: 0, exp: 'Sutradara adalah pengarah utama pementasan.' },
      { text: 'Benda-benda pendukung yang dipakai pemain di atas panggung (seperti buku, keranjang, topi) disebut...', opts: ['Properti', 'Prolog', 'Epilog', 'Rima'], ans: 0, exp: 'Properti mendukung realitas adegan drama.' },
      { text: 'Percakapan tokoh dengan dirinya sendiri (bicara sendiri di panggung) disebut...', opts: ['Dialog', 'Monolog', 'Prolog', 'Epilog'], ans: 1, exp: 'Mono = satu → monolog adalah ujaran satu tokoh sendiri.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-07', subSeq: 2,
    objectives: ['Siswa mampu menulis dan melafalkan dialog drama yang alami sesuai situasi dan watak tokoh.'],
    materialTitle: 'Menyusun Dialog Drama',
    blocks: [
      { type: 'tip', text: 'Dialog drama yang bagus terasa alami seperti percakapan sehari-hari — singkat, jelas emosinya, dan menggerakkan cerita! Jangan lupa tambahkan kramagung di dalam kurung seperti `(tersenyum lega)`.' },
    ],
    activityTitle: 'Latihan: Dialog Drama',
    questions: [
      { text: 'Penulisan cuplikan naskah drama yang paling TEPAT adalah...', opts: ['Salsa : (tersenyum ramah) "Mari kita kerjakan tugas kelompok ini bersama-sama!"', 'Salsa tersenyum ramah mari kita kerjakan.', '"Salsa" : tersenyum ramah mari kerjakan!', 'Salsa = Mari kerjakan.'], ans: 0, exp: 'Nama tokoh : (kramagung) "Dialog dalam tanda petik."' },
      { text: 'Mengapa dialog drama sebaiknya tidak terlalu panjang dalam satu giliran bicara?', opts: ['Agar percakapan terasa hidup, dinamis, dan mudah dihafal/disimak', 'Agar cepat pulang', 'Supaya tidak ada konflik', 'Agar penonton mengantuk'], ans: 0, exp: 'Dialog singkat-padu membuat interaksi antar-tokoh hidup.' },
      { text: 'Kramagung `(berjalan mondar-mandir dengan wajah cemas)` memandu pemeran menunjukkan emosi...', opts: ['Gelisah / khawatir', 'Sangat mengantuk', 'Tertawa gembira', 'Marah besar'], ans: 0, exp: 'Mondar-mandir dan wajah cemas mengekspresikan kegelisahan.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-07', subSeq: 3,
    objectives: ['Siswa mampu mendalami karakter tokoh (protagonis, antagonis, tritagonis/penengah) dalam naskah drama.'],
    materialTitle: 'Mendalami Karakter Tokoh Drama',
    blocks: [
      { type: 'table', title: '3 Peran Karakter dalam Drama', headers: ['Jenis Tokoh', 'Perannya dalam Konflik'], rows: [
        ['Protagonis', 'Tokoh utama pembawa kebaikan/tujuan utama cerita'],
        ['Antagonis', 'Tokoh penentang yang memicu konflik/ujian'],
        ['Tritagonis', 'Tokoh PENENGAH / pelerai yang bijaksana dan membantu mencari solusi'],
      ]},
    ],
    activityTitle: 'Latihan: Karakter Tokoh Drama',
    questions: [
      { text: 'Tokoh penengah atau pelerai yang bijaksana saat terjadi perselisihan antara protagonis dan antagonis disebut...', opts: ['Tritagonis', 'Sutradara', 'Prolog', 'Monolog'], ans: 0, exp: 'Tritagonis berperan sebagai penengah/pembantu penyelesaian konflik.' },
      { text: 'Jika kamu mendapat peran tokoh antagonis (misal tokoh pemarah) dalam drama sekolah, sikap yang profesional adalah...', opts: ['Memerankannya sungguh-sungguh di panggung saja agar pesan drama tersampaikan, namun di dunia nyata tetap ramah', 'Menolak keras tampil', 'Benar-benar memusuhi teman setelah pentas', 'Tertawa saat adegan marah'], ans: 0, exp: 'Akting adalah seni peran untuk menyampaikan pelajaran moral drama.' },
      { text: 'Cara terbaik mendalami watak tokoh sebelum pentas adalah...', opts: ['Membaca keseluruhan naskah dan memahami alasan tindakan tokoh tersebut', 'Hanya membaca 1 baris dialog sendiri', 'Tidak ikut latihan', 'Mengubah wataknya seenaknya'], ans: 0, exp: 'Memahami naskah utuh membuat penghayatan alami.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-07', subSeq: 4,
    objectives: ['Siswa mampu melakukan latihan membaca naskah (reading) dengan lafal, artikulasi, dan tempo yang tepat.'],
    materialTitle: 'Teknik Membaca Naskah Drama',
    blocks: [
      { type: 'visual_cards', title: '3 Latihan Dasar Vokal Pemeran', cards: [
        { emoji: '🗣️', label: 'Artikulasi', sub: 'Kejelasan pengucapan huruf vokal (a-i-u-e-o) dan konsonan' },
        { emoji: '🔊', label: 'Volume / Proyeksi Suara', sub: 'Suara terdengar jelas sampai penonton barisan belakang tanpa berteriak' },
        { emoji: '⏱️', label: 'Tempo & Jeda', sub: 'Memberi jeda alami agar lawan main dan penonton menangkap maknanya' },
      ]},
    ],
    activityTitle: 'Latihan: Membaca Naskah Drama',
    questions: [
      { text: 'Kejelasan pengucapan setiap huruf dan kata saat membacakan dialog drama disebut...', opts: ['Artikulasi', 'Properti', 'Kostum', 'Latar'], ans: 0, exp: 'Artikulasi yang jelas mencegah dialog terdengar bergumam.' },
      { text: 'Saat sesi latihan membaca naskah (reading), kalimat yang berada di dalam tanda kurung (kramagung) harus...', opts: ['Dibaca keras ikut dialog', 'Dipahami dan dipraktikkan gerakannya, BUKAN diucapkan keras sebagai dialog', 'Dihapus', 'Dinyanyikan'], ans: 1, exp: 'Kramagung adalah arahan akting, bukan ucapan tokoh.' },
      { text: 'Menandai bagian dialog sendiri di naskah dengan stabilo saat latihan berguna untuk...', opts: ['Memudahkan melihat giliran bicara agar tidak terlambat merespons lawan main', 'Membuat naskah rusak', 'Menghapus dialog teman', 'Hiasan saja'], ans: 0, exp: 'Penandaan dialog menjaga kelancaran alur latihan.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-07', subSeq: 5,
    objectives: ['Siswa mampu bekerja sama dalam bermain peran (blocking panggung, merespons lawan main, improvisasi ringan).'],
    materialTitle: 'Bermain Peran dan Kerja Sama Panggung',
    blocks: [
      { type: 'list', title: 'Aturan Emas Saat Tampil di Panggung', items: ['1. Jangan membelakangi penonton saat berdialog (atur posisi tubuh/blocking menyerong terbuka!).', '2. Fokus dengarkan dialog lawan main, bukan melamun menunggu giliran.', '3. Jika lupa satu kata, tetap tenang dan lanjutkan maksud kalimat dengan kata sendiri (improvisasi ringan)!'] },
    ],
    activityTitle: 'Latihan: Bermain Peran',
    questions: [
      { text: 'Pengaturan posisi berdiri dan perpindahan gerak pemain di atas panggung agar terlihat baik oleh penonton disebut...', opts: ['Blocking', 'Skimming', 'Scanning', 'Parafrase'], ans: 0, exp: 'Blocking mencegah pemain saling menutupi atau membelakangi penonton.' },
      { text: 'Jika lawan mainmu di panggung mendadak lupa satu baris dialog, sikap kerja sama tim yang tepat adalah...', opts: ['Tertawa di panggung', 'Membantu memancingnya secara alami lewat dialog (improvisasi) agar cerita tetap jalan', 'Berhenti total dan turun panggung', 'Memarahinya di depan penonton'], ans: 1, exp: 'Improvisasi menyelamatkan kelancaran pementasan secara profesional.' },
      { text: 'Posisi tubuh pemain drama saat berdialog di panggung sebaiknya...', opts: ['Terbuka/menyerong ke arah penonton agar wajah dan suara jelas', 'Membelakangi penonton sepenuhnya', 'Sembunyi di belakang meja', 'Berdiri rapat saling menutupi'], ans: 0, exp: 'Ekspresi wajah dan suara perlu menjangkau penonton.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-07', subSeq: 6,
    objectives: ['Siswa mampu menyelaraskan mimik wajah, bahasa tubuh (gestur), dan intonasi untuk menyampaikan emosi secara efektif.'],
    materialTitle: 'Menyampaikan Ekspresi Lisan dan Mimik',
    blocks: [
      { type: 'visual_cards', title: '3 Unsur Ekspresi Akting', cards: [
        { emoji: '😊😮😢😠', label: 'Mimik (Ekspresi Wajah)', sub: 'Mata, alis, dan senyum menampilkan perasaan tokoh' },
        { emoji: '🙌', label: 'Gestur (Bahasa Tubuh)', sub: 'Gerak tangan, bahu, dan cara berjalan yang sesuai karakter' },
        { emoji: '🎵', label: 'Intonasi (Lagu Kalimat)', sub: 'Penekanan kata kunci yang mempertegas maksud dialog' },
      ]},
    ],
    activityTitle: 'Latihan: Menyampaikan Ekspresi',
    questions: [
      { text: 'Perubahan raut wajah (mata, alis, mulut) untuk menggambarkan perasaan tokoh disebut...', opts: ['Mimik', 'Blocking', 'Properti', 'Prolog'], ans: 0, exp: 'Mimik adalah ekspresi wajah; gestur adalah gerak tubuh.' },
      { text: 'Kalimat "Kamu HEBAT sekali!" jika diucapkan dengan wajah tersenyum tulus dan intonasi ceria bermakna...', opts: ['Pujian yang tulus', 'Marah', 'Sedih', 'Ketakutan'], ans: 0, exp: 'Kesesuaian intonasi dan mimik menegaskan makna positif ucapan.' },
      { text: 'Keterampilan berekspresi lisan dari latihan drama juga bermanfaat dalam kehidupan sehari-hari, misalnya saat...', opts: ['Berpidato, presentasi kelas, dan berkomunikasi percaya diri', 'Tidur', 'Mengerjakan soal hitungan diam', 'Menyendiri'], ans: 0, exp: 'Latihan drama melatih public speaking dan empati.' },
    ],
  },

  // BAB 8: MENULIS KREATIF
  {
    topicCode: 'BIND-SD6-08', subSeq: 1,
    objectives: ['Siswa mampu mengembangkan gagasan kreatif dari pengamatan atau pengalaman menjadi kerangka cerita/artikel utuh.'],
    materialTitle: 'Mengembangkan Gagasan Tulisan Kreatif',
    blocks: [
      { type: 'tip', text: 'Teknik "Bagaimana Jika...?" (What If) sangat ampuh untuk menulis kreatif! Contoh: "Bagaimana jika tempat sampah di sekolah bisa berbicara?" → langsung lahir ide cerita fiksi seru bertema kebersihan!' },
    ],
    activityTitle: 'Latihan: Mengembangkan Gagasan',
    questions: [
      { text: 'Teknik memancing ide cerita kreatif dengan mengajukan pertanyaan imajinatif "Bagaimana jika...?" berguna untuk...', opts: ['Melahirkan sudut pandang cerita yang unik dan segar', 'Menghapus topik', 'Menyalin buku lain', 'Menyusun tabel matematika'], ans: 0, exp: 'Pertanyaan "Bagaimana jika" membuka ruang kreativitas penulis.' },
      { text: 'Setelah menemukan 1 gagasan utama tulisan, langkah berikutnya agar gagasan berkembang runtut adalah...', opts: ['Membuat peta pikiran atau kerangka paragraf (awal–tengah–akhir)', 'Langsung berhenti menulis', 'Menulis judul tanpa isi', 'Menghapus ide'], ans: 0, exp: 'Kerangka menjabarkan gagasan utama menjadi beberapa paragraf.' },
      { text: 'Ciri tulisan kreatif yang menarik pembaca sejak paragraf pertama adalah memiliki kalimat pembuka yang...', opts: ['Menggugah rasa ingin tahu (hook)', 'Sangat membosankan', 'Berisi daftar angka acak', 'Tidak nyambung dengan judul'], ans: 0, exp: 'Pembuka menarik membuat pembaca ingin terus membaca.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-08', subSeq: 2,
    objectives: ['Siswa mampu menyusun paragraf yang lebih kompleks memakai kalimat majemuk setara dan bertingkat sederhana.'],
    materialTitle: 'Menyusun Paragraf dengan Kalimat Majemuk',
    blocks: [
      { type: 'table', title: '2 Jenis Kalimat Majemuk untuk Tulisan Lebih Mengalir', headers: ['Jenis', 'Kata Penghubung (Konjungsi)', 'Contoh'], rows: [
        ['Majemuk Setara', 'dan, atau, tetapi, sedangkan, melainkan', 'Alya menyapu kelas, sedangkan Bima merapikan rak buku.'],
        ['Majemuk Bertingkat', 'karena, sehingga, ketika, walaupun, agar', 'Kami tetap semangat berlatih walaupun hujan turun deras.'],
      ]},
    ],
    activityTitle: 'Latihan: Paragraf & Kalimat Majemuk',
    questions: [
      { text: 'Gabungan dua kalimat "Raka ingin ikut lomba lari. Kakinya sedang terkilir." yang paling tepat adalah...', opts: ['Raka ingin ikut lomba lari, tetapi kakinya sedang terkilir.', 'Raka ingin ikut lomba lari dan kakinya terkilir.', 'Raka ingin ikut lomba lari agar kakinya terkilir.', 'Raka ingin ikut lomba lari atau kakinya terkilir.'], ans: 0, exp: 'Hubungan pertentangan menggunakan konjungsi "tetapi".' },
      { text: '"Salsa rajin berlatih matematika ... nilainya meningkat pesat." Konjungsi yang tepat adalah...', opts: ['sehingga', 'tetapi', 'atau', 'walaupun'], ans: 0, exp: 'Hubungan akibat memakai "sehingga".' },
      { text: 'Menggunakan variasi kalimat tunggal dan kalimat majemuk di dalam paragraf membuat tulisan terasa...', opts: ['Lebih mengalir, kaya, dan tidak kaku terputus-putus', 'Membingungkan', 'Tidak baku', 'Tanpa makna'], ans: 0, exp: 'Variasi struktur kalimat memperindah gaya penulisan.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-08', subSeq: 3,
    objectives: ['Siswa mampu membedakan makna denotatif (makna sebenarnya) dan makna konotatif (makna kias) dalam kalimat.'],
    materialTitle: 'Kosakata Denotatif dan Konotatif',
    blocks: [
      { type: 'table', title: 'Beda Makna Denotatif vs Konotatif', headers: ['Kata / Frasa', 'Makna Denotatif (Sebenarnya)', 'Makna Konotatif (Kiasan)'], rows: [
        ['Tangan kanan', 'Tangan sebelah kanan', 'Orang kepercayaan ("Bima tangan kanan ketua kelas.")'],
        ['Bunga desa', 'Bunga yang tumbuh di desa', 'Gadis yang paling cantik/ramah di desa'],
        ['Buah tangan', 'Buah di tangan', 'Oleh-oleh ("Ayah membawa buah tangan pudak Gresik.")'],
        ['Besar kepala', 'Ukuran kepala besar', 'Sombong'],
      ]},
    ],
    activityTitle: 'Latihan: Denotatif vs Konotatif',
    questions: [
      { text: 'Kalimat "Paman pulang dari Gresik membawa BUAH TANGAN untuk kami" menggunakan makna...', opts: ['Konotatif (kiasan = oleh-oleh)', 'Denotatif (buah di telapak tangan)', 'Salah ejaan', 'Kalimat tanya'], ans: 0, exp: 'Buah tangan adalah ungkapan konotatif yang berarti oleh-oleh.' },
      { text: 'Manakah kalimat yang bermakna DENOTATIF (makna sebenarnya)?', opts: ['Walaupun juara kelas, Alya tidak pernah besar kepala.', 'Raka menulis menggunakan tangan kanannya.', 'Pak Rudi menjadi kambing hitam dalam masalah itu.', 'Ia dikenal sebagai kutu buku di kelas 6.'], ans: 1, exp: '"Tangan kanan" di kalimat B benar-benar merujuk pada anggota tubuh tangan sebelah kanan.' },
      { text: 'Makna konotatif dari ungkapan "kutu buku" adalah...', opts: ['Serangga di buku', 'Orang yang sangat gemar membaca buku', 'Buku yang kotor', 'Penjual buku'], ans: 1, exp: 'Kutu buku = sangat suka membaca.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-08', subSeq: 4,
    objectives: ['Siswa mampu menyunting tulisan sendiri dan tulisan teman (ejaan, tanda baca, keefektifan kalimat, kepaduan paragraf).'],
    materialTitle: 'Menyunting Tulisan (Editing)',
    blocks: [
      { type: 'list', title: '4 Fokus Checklist Penyuntingan (EYD V)', items: ['1. Ejaan & Kata Baku: cek kata depan di/ke, kata baku (apotek, aktivitas, izin, praktik).', '2. Huruf Kapital & Tanda Baca: awal kalimat, nama diri/geografi, koma perincian, tanda petik.', '3. Keefektifan Kalimat: buang kata berulang/boros.', '4. Kepaduan: pastikan setiap paragraf fokus satu gagasan pokok!'] },
    ],
    activityTitle: 'Latihan: Menyunting Tulisan',
    questions: [
      { text: 'Perbaikan ejaan yang BENAR untuk kalimat "pada hari minggu, alya membeli obat di apotik dekat jalan pahlawan." adalah...', opts: ['Pada hari Minggu, Alya membeli obat di apotek dekat Jalan Pahlawan.', 'Pada Hari Minggu, alya membeli obat di apotik dekat jalan Pahlawan.', 'Pada hari minggu, Alya membeli obat diapotek dekat Jalan Pahlawan.', 'pada hari Minggu, Alya membeli obat di Apotek dekat jalan pahlawan.'], ans: 0, exp: 'Kapital awal kalimat, Minggu, Alya, Jalan Pahlawan; kata baku "apotek"; "di apotek" dipisah.' },
      { text: 'Kesalahan penulisan kata depan pada kalimat "Buku itu diletakkan dimeja lalu dibaca oleh Dina" terletak pada kata...', opts: ['diletakkan', 'dimeja (seharusnya dipisah: di meja)', 'dibaca', 'Dina'], ans: 1, exp: '"meja" adalah tempat → "di meja" harus dipisah; "diletakkan" dan "dibaca" adalah kata kerja pasif → digabung.' },
      { text: 'Tujuan akhir kegiatan menyunting naskah sebelum dikumpulkan atau diterbitkan adalah...', opts: ['Menghasilkan tulisan yang bersih dari salah ketik, efektif, dan nyaman dibaca', 'Memendekkan teks jadi 1 kalimat', 'Menghapus ide penulis', 'Mengganti nama pengarang'], ans: 0, exp: 'Penyuntingan meningkatkan kualitas bahasa dan keterbacaan.' },
    ],
  },

  // BAB 9: PRESENTASI DAN KOMUNIKASI
  {
    topicCode: 'BIND-SD6-09', subSeq: 1,
    objectives: ['Siswa mampu menyusun dan menyampaikan gagasan secara logis, sistematis, dan meyakinkan di depan forum.'],
    materialTitle: 'Menyampaikan Gagasan Secara Sistematis',
    blocks: [
      { type: 'formula', name: 'Struktur Gagasan 3 Bagian', expression: '1. Pembukaan (Topik & Tujuan)  →  2. Isi (2–3 Poin Kunci + Contoh)  →  3. Penutup (Simpulan & Ajakan)', note: 'Batasi 3 poin utama agar audiens mudah mengingat seluruh gagasanmu!' },
    ],
    activityTitle: 'Latihan: Menyampaikan Gagasan',
    questions: [
      { text: 'Agar pendengar mudah memahami gagasan yang kita sampaikan dalam presentasi, ide sebaiknya disusun...', opts: ['Sistematis dalam poin-poin utama yang berurutan (pembuka–isi–penutup)', 'Melompat-lompat acak', 'Langsung pada kesimpulan tanpa penjelasan', 'Sangat cepat tanpa jeda'], ans: 0, exp: 'Struktur sistematis memudahkan pendengar mengikuti alur pikiran.' },
      { text: 'Memberikan contoh konkret saat menjelaskan suatu gagasan bermanfaat untuk...', opts: ['Membuat pendengar lebih cepat membayangkan dan memahami maksud kita', 'Membuat bingung', 'Menghabiskan waktu saja', 'Mengganti topik'], ans: 0, exp: 'Contoh nyata menjembatani konsep abstrak ke dunia nyata.' },
      { text: 'Sikap tubuh yang memancarkan rasa percaya diri saat berbicara di depan kelas adalah...', opts: ['Berdiri tegak tenang, tersenyum, dan menyapu pandangan ke seluruh pendengar', 'Bersedekap cemberut menatap lantai', 'Bergoyang-goyang gelisah sambil menutupi mulut', 'Membelakangi audiens'], ans: 0, exp: 'Bahasa tubuh terbuka meningkatkan keyakinan audiens.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-09', subSeq: 2,
    objectives: ['Siswa mampu merancang bahan presentasi (slide/poster) yang ringkas, terbaca jelas, dan dilengkapi visual.'],
    materialTitle: 'Menyusun Bahan Presentasi Efektif',
    blocks: [
      { type: 'visual_cards', title: 'Aturan Desain Slide / Poster Presentasi Keren', cards: [
        { emoji: '🔤', label: 'Poin Singkat, Bukan Paragraf Penuh!', sub: 'Tulis kata kunci besar agar mudah dibaca dari bangku belakang' },
        { emoji: '🎨', label: 'Kontras Warna Jelas', sub: 'Teks gelap di latar terang (atau sebaliknya) — hindari kuning terang di putih!' },
        { emoji: '📊', label: 'Gunakan Gambar / Bagan', sub: 'Satu diagram atau foto relevan lebih kuat dari 100 kata!' },
      ]},
    ],
    activityTitle: 'Latihan: Bahan Presentasi',
    questions: [
      { text: 'Kesalahan umum saat membuat slide atau poster presentasi yang HARUS dihindari adalah...', opts: ['Menyalin seluruh paragraf panjang dengan huruf sangat kecil sehingga sulit dibaca', 'Menulis poin-poin kata kunci', 'Memakai huruf besar jelas', 'Menambahkan diagram relevan'], ans: 0, exp: 'Slide adalah alat bantu visual (poin kunci), bukan naskah bacaan penuh.' },
      { text: 'Kombinasi warna tulisan dan latar belakang yang PALING mudah dibaca pada poster presentasi adalah...', opts: ['Teks biru tua/hitam di atas latar putih/krem terang', 'Teks kuning muda di atas latar putih', 'Teks merah tua di atas latar hitam', 'Teks hijau muda di atas latar hijau cerah'], ans: 0, exp: 'Kontras tinggi memastikan keterbacaan dari jarak jauh.' },
      { text: 'Fungsi utama bahan tayang (slide/poster) dalam presentasi adalah...', opts: ['Membantu memperjelas penjelasan lisan penyaji', 'Menggantikan penyaji sehingga penyaji diam saja', 'Membuat audiens bingung', 'Menyembunyikan wajah penyaji'], ans: 0, exp: 'Penyaji tetap pusat komunikasi; slide hanya media pendukung.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-09', subSeq: 3,
    objectives: ['Siswa mampu mengatur intonasi, jeda, penekanan kata, dan volume suara saat presentasi.'],
    materialTitle: 'Penggunaan Intonasi dalam Presentasi',
    blocks: [
      { type: 'tip', text: 'Beri PENEKANAN (tekanan suara lebih kuat dan jeda 1 detik) tepat sebelum menyebutkan fakta paling penting atau simpulan agar perhatian seluruh kelas langsung tertuju padamu!' },
    ],
    activityTitle: 'Latihan: Intonasi Presentasi',
    questions: [
      { text: 'Berbicara dengan nada datar dari awal hingga akhir presentasi dapat menyebabkan pendengar merasa...', opts: ['Cepat bosan dan kurang fokus', 'Sangat bersemangat', 'Langsung hafal semuanya', 'Terkejut'], ans: 0, exp: 'Variasi intonasi dan jeda menjaga ketertarikan audiens.' },
      { text: 'Mengambil jeda sejenak (1–2 detik) setelah menyampaikan poin penting berguna untuk...', opts: ['Memberi waktu pendengar mencerna informasi sekaligus mengatur napas penyaji', 'Menunjukkan kita lupa materi', 'Membuat suasana canggung', 'Mengakhiri acara mendadak'], ans: 0, exp: 'Jeda terencana adalah ciri pembicara terampil.' },
      { text: 'Tempo bicara yang ideal saat presentasi di depan kelas adalah...', opts: ['Sedang dan teratur (tidak terlalu cepat seperti dikejar dan tidak terlalu lambat)', 'Secepat kilat', 'Sangat lambat terputus-putus', 'Berteriak terus'], ans: 0, exp: 'Tempo sedang memastikan setiap kalimat terdengar jelas.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-09', subSeq: 4,
    objectives: ['Siswa mampu menerapkan kesantunan berbahasa dalam berkomunikasi lisan maupun tulisan/digital.'],
    materialTitle: 'Kesantunan Berbahasa (Lisan & Digital)',
    blocks: [
      { type: 'visual_cards', title: 'Santun Berbahasa di Dunia Nyata & Digital', cards: [
        { emoji: '🙏', label: 'Gunakan Sapaan Hormat', sub: 'Bapak/Ibu saat menyapa guru, tidak memakai singkatan kasar saat chat guru!' },
        { emoji: '💬', label: 'Etika Pesan (Chat) Sopan', sub: 'Salam → Perkenalkan nama & kelas → Maksud singkat sopan → Terima kasih!' },
        { emoji: '🛡️', label: 'Anti-Perundungan (No Bullying)', sub: 'Pikirkan dampak kata sebelum berbicara atau berkomentar di media sosial!' },
      ]},
    ],
    activityTitle: 'Latihan: Kesantunan Berbahasa',
    questions: [
      { text: 'Contoh pesan (chat) yang PALING SANTUN kepada wali kelas untuk menanyakan jadwal pengumpulan tugas adalah...', opts: ['"P, bu tugasnya kapan dikumpulin??"', '"Assalamualaikum/Selamat sore Bu, saya Alya kelas 6A. Mohon izin bertanya, apakah tugas IPA dikumpulkan besok pagi? Terima kasih, Bu."', '"Bu cepet jawab dong!"', '"Tugasnya besok ya?"'], ans: 1, exp: 'Salam, identitas jelas, bahasa baku santun, dan ucapan terima kasih.' },
      { text: 'Kesantunan berbahasa di ruang digital (grup kelas/komentar) penting untuk...', opts: ['Menjaga perasaan sesama, mencegah kesalahpahaman, dan menghindari perundungan siber', 'Supaya tidak pernah mengirim pesan', 'Agar tampak kaku', 'Tidak ada manfaatnya'], ans: 0, exp: 'Jejak digital dan etika komunikasi mencerminkan karakter kita.' },
      { text: 'Menulis pesan seluruhnya dengan HURUF KAPITAL (mis. "SEGERA KIRIM SEKARANG!!!") dalam komunikasi digital umumnya terkesan...', opts: ['Berteriak / marah / kurang sopan', 'Sangat lembut', 'Lucu', 'Formal ramah'], ans: 0, exp: 'All-caps di pesan teks bermakna nada tinggi/marah.' },
    ],
  },
  {
    topicCode: 'BIND-SD6-09', subSeq: 5,
    objectives: ['Siswa mampu menyimak pertanyaan audiens dengan baik dan menanggapi pertanyaan secara tenang, jelas, dan santun.'],
    materialTitle: 'Menanggapi Pertanyaan dengan Bijak',
    blocks: [
      { type: 'list', title: '4 Langkah Menanggapi Pertanyaan Saat Presentasi', items: ['1. Dengarkan pertanyaan penanya sampai tuntas sambil mencatat poinnya.', '2. Apresiasi penanya: "Terima kasih atas pertanyaan bagus dari Bima!"', '3. Jawab langsung ke inti pertanyaan dengan alasan/data jelas.', '4. Konfirmasi singkat: "Apakah jawaban tersebut sudah cukup jelas?"'] },
    ],
    activityTitle: 'Latihan: Menanggapi Pertanyaan',
    questions: [
      { text: 'Langkah PERTAMA saat seorang teman mengangkat tangan dan bertanya setelah presentasimu adalah...', opts: ['Mendengarkan pertanyaannya dengan saksama hingga selesai', 'Langsung memotong kalimatnya', 'Menertawakan pertanyaannya', 'Meninggalkan podium'], ans: 0, exp: 'Menyimak utuh memastikan jawaban kita tepat sasaran.' },
      { text: 'Kalimat tanggapan paling santun jika kita butuh waktu atau belum tahu pasti jawaban suatu pertanyaan sulit adalah...', opts: ['"Pertanyaanmu terlalu susah, jangan tanya itu!"', '"Terima kasih atas pertanyaan kritisnya. Saat ini kami belum memiliki data pastinya, namun kami akan mencarinya dan menyampaikannya kembali."', '"Terserah kamu saja."', '"Saya tidak peduli."'], ans: 1, exp: 'Sikap rendah hati dan jujur menunjukkan kedewasaan akademis.' },
      { text: 'Tujuan utama sesi tanya jawab pada akhir presentasi adalah...', opts: ['Memperjelas informasi dan memperkaya pemahaman seluruh peserta diskusi', 'Mencari kesalahan penyaji', 'Membuat penyaji malu', 'Menghabiskan jam istirahat'], ans: 0, exp: 'Tanya jawab bersifat kolaboratif untuk belajar bersama.' },
    ],
  },
];

upsertLessonsBatch('Kelas 6 SD — Bahasa Indonesia (9 Bab, 41 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

