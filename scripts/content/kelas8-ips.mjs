import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: POTENSI BENCANA ALAM (7 sub)
  {
    topicCode: 'IPS-SMP8-01', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian bencana alam serta membedakan istilah bahaya (hazard), kerentanan, dan risiko bencana.'],
    materialTitle: 'Pengertian Bencana Alam dan Risiko Bencana',
    blocks: [
      { type: 'text', text: 'Menurut UU No. 24 Tahun 2007, bencana adalah peristiwa yang mengancam dan mengganggu kehidupan masyarakat akibat faktor alam, nonalam, maupun manusia sehingga menimbulkan korban jiwa, kerusakan lingkungan, dan kerugian harta benda.' },
      { type: 'formula', name: 'Konsep Risiko Bencana', expression: 'Risiko Bencana = (Ancaman Bahaya × Kerentanan) ÷ Kapasitas / Kesiapsiagaan', note: 'Kita tidak bisa menghentikan gempa bumi, tetapi kita BISA menurunkan risiko bencana dengan meningkatkan KAPASITAS kesiapsiagaan!' },
    ],
    activityTitle: 'Latihan: Pengertian Bencana Alam',
    questions: [
      { text: 'Gempa bumi di tengah pulau kosong tak berpenghuni disebut fenomena alam (hazard), tetapi berubah menjadi BENCANA ketika...', opts: ['Mengenai permukiman rentan sehingga menimbulkan korban, kerusakan bangunan, dan gangguan kehidupan masyarakat', 'Tercatat di seismograf saja', 'Terjadi pada siang hari', 'Dilaporkan di berita'], ans: 0, exp: 'Bencana terjadi saat bahaya bertemu kerentanan masyarakat.' },
      { text: 'Cara paling realistis bagi manusia untuk memperkecil RISIKO bencana alam adalah...', opts: ['Meningkatkan kapasitas kesiapsiagaan dan mengurangi kerentanan bangunan/lingkungan', 'Menghentikan pergerakan lempeng bumi', 'Menutup semua pantai', 'Mengabaikan peringatan dini'], ans: 0, exp: 'Meningkatkan kapasitas dan mengurangi kerentanan menurunkan risiko secara signifikan.' },
      { text: 'Lembaga pemerintah Indonesia yang bertugas mengoordinasikan penanggulangan bencana tingkat nasional adalah...', opts: ['BNPB (Badan Nasional Penanggulangan Bencana)', 'BPS', 'BNN', 'BPOM'], ans: 0, exp: 'BNPB (nasional) dan BPBD (daerah) mengoordinasikan penanggulangan bencana.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-01', subSeq: 2,
    objectives: ['Siswa mampu mengklasifikasikan jenis bencana geologis (gempa, tsunami, letusan gunungapi, longsor) dan hidrometeorologis (banjir, rob, kekeringan, puting beliung).'],
    materialTitle: 'Jenis-Jenis Bencana Alam di Indonesia',
    blocks: [
      { type: 'table', title: '2 Kelompok Utama Bencana Alam Indonesia', headers: ['Bencana Geologis (Dari Dalam Bumi)', 'Bencana Hidrometeorologis (Iklim & Air)'], rows: [
        ['Gempa bumi tektonik & vulkanik', 'Banjir sungai dan banjir rob pesisir'],
        ['Tsunami (gempa dangkal bawah laut)', 'Kekeringan di musim kemarau panjang'],
        ['Erupsi / letusan gunung berapi', 'Angin puting beliung & gelombang ekstrem'],
        ['Tanah longsor (dipicu juga oleh hujan deras)', 'Kebakaran hutan dan lahan (karhutla)'],
      ]},
    ],
    activityTitle: 'Latihan: Jenis Bencana Alam',
    questions: [
      { text: 'Manakah yang termasuk kelompok bencana HIDROMETEOROLOGIS?', opts: ['Banjir, banjir rob, kekeringan, dan angin puting beliung', 'Gempa tektonik dan letusan gunungapi', 'Tsunami bawah laut saja', 'Pergeseran lempeng'], ans: 0, exp: 'Hidrometeorologis berkaitan dengan atmosfer, cuaca, dan siklus air.' },
      { text: 'Di wilayah pesisir utara Jawa (termasuk pesisir Gresik), genangan air laut yang naik ke daratan saat pasang purnama disebut...', opts: ['Banjir rob', 'Erupsi vulkanik', 'Likuifaksi', 'Badai salju'], ans: 0, exp: 'Banjir rob adalah genangan akibat naiknya permukaan air laut pasang.' },
      { text: 'Syarat utama gempa bumi berpotensi memicu TSUNAMI adalah...', opts: ['Gempa tektonik berkekuatan besar, pusat dangkal di dasar laut, dengan patahan naik-turun (vertikal)', 'Gempa kecil di pegunungan daratan', 'Hujan deras 1 jam', 'Angin darat'], ans: 0, exp: 'Pergerakan vertikal dasar laut memindahkan massa air laut secara masif.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-01', subSeq: 3,
    objectives: ['Siswa mampu menganalisis faktor penyebab bencana alam baik dari dinamika litosfer, atmosfer, maupun kesalahan tata kelola lingkungan.'],
    materialTitle: 'Faktor Penyebab Bencana Alam',
    blocks: [
      { type: 'text', text: 'Bencana geologis dipicu tumbukan lempeng tektonik dan aktivitas magma. Sementara itu, bencana hidrometeorologis seperti banjir dan longsor sangat dipengaruhi curah hujan ekstrem YANG DIPERPARAH oleh kerusakan daerah tangkapan air, penggundulan hutan, dan penyumbatan saluran drainase.' },
    ],
    activityTitle: 'Latihan: Faktor Penyebab Bencana',
    questions: [
      { text: 'Tanah longsor di lereng perbukitan umumnya terjadi karena kombinasi...', opts: ['Lereng curam, tanah gembur jenuh air hujan deras, serta hilangnya vegetasi berakar kuat', 'Tanah datar berbatu keras', 'Cuaca cerah berangin sepoi', 'Banyaknya pohon besar berakar tunggang'], ans: 0, exp: 'Tanpa akar pohon penahan, tanah jenuh air mudah meluncur menuruni lereng.' },
      { text: 'Fenomena iklim El Niño yang melanda kawasan Pasifik berdampak pada Indonesia berupa...', opts: ['Kemarau lebih kering dan panjang sehingga meningkatkan risiko kekeringan serta kebakaran lahan', 'Hujan es sepanjang tahun', 'Gempa bumi serentak', 'Salju turun di dataran rendah'], ans: 0, exp: 'El Niño mengurangi curah hujan di sebagian besar wilayah Indonesia.' },
      { text: 'Penyebab utama banjir luapan sungai (seperti di hilir DAS besar) selain hujan lebat di hulu adalah...', opts: ['Pendangkalan sungai (sedimentasi), penyempitan bantaran, dan berkurangnya daerah resapan air', 'Banyaknya taman kota', 'Pengerukan sungai rutin', 'Pembuatan biopori'], ans: 0, exp: 'Kapasitas tampung sungai mengecil sementara limpasan air permukaan meningkat.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-01', subSeq: 4,
    objectives: ['Siswa mampu menghubungkan posisi geologis Indonesia di pertemuan 3 lempeng dan Cincin Api Pasifik dengan potensi bencana alamnya.'],
    materialTitle: 'Kondisi Geografis Indonesia & Potensi Bencana',
    blocks: [
      { type: 'visual_cards', title: 'Posisi Geologis Unik Indonesia', cards: [
        { emoji: '🌍', label: 'Pertemuan 3 Lempeng', sub: 'Lempeng Indo-Australia, Eurasia, dan Pasifik bertemu di Indonesia!' },
        { emoji: '🌋', label: 'Ring of Fire', sub: 'Dilalui jalur Cincin Api Pasifik & Sirkum Mediterania (>120 gunung api aktif)' },
        { emoji: '🌧️', label: 'Iklim Tropis Monsun', sub: 'Curah hujan tinggi memicu risiko banjir & longsor, tetapi juga menyuburkan tanah!' },
      ]},
    ],
    activityTitle: 'Latihan: Geografis & Potensi Bencana',
    questions: [
      { text: 'Tiga lempeng tektonik besar dunia yang bertemu dan menyebabkan tingginya aktivitas gempa di Indonesia adalah...', opts: ['Indo-Australia, Eurasia, dan Pasifik', 'Afrika, Antartika, dan Amerika', 'Eurasia, Atlantik, dan Arktik', 'Pasifik, Nazca, dan Karibia'], ans: 0, exp: 'Tumbukan (subduksi) ketiga lempeng ini membentuk palung laut dan jajaran gunung api Indonesia.' },
      { text: 'Selain membawa potensi erupsi, keberadaan gunung berapi aktif di Pulau Jawa juga membawa berkah geografis berupa...', opts: ['Tanah vulkanik sangat subur bagi pertanian, sumber air pegunungan, dan potensi energi panas bumi', 'Tidak pernah turun hujan', 'Tidak ada sungai', 'Suhu selalu 50°C'], ans: 0, exp: 'Abu vulkanik kaya mineral menyuburkan lahan pertanian dalam jangka panjang.' },
      { text: 'Jalur rangkaian gunung berapi dan zona gempa yang melingkari Samudra Pasifik serta melintasi Indonesia disebut...', opts: ['Ring of Fire (Cincin Api Pasifik)', 'Garis Khatulistiwa', 'Sabuk Gurun', 'Lingkar Kutub'], ans: 0, exp: 'Indonesia berada di zona Ring of Fire.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-01', subSeq: 5,
    objectives: ['Siswa mampu mengevaluasi pengaruh aktivitas manusia yang memperbesar atau memperkecil risiko bencana di lingkungannya.'],
    materialTitle: 'Pengaruh Aktivitas Manusia terhadap Risiko Bencana',
    blocks: [
      { type: 'table', title: 'Aktivitas Memperparah vs Mengurangi Risiko Bencana', headers: ['Memperbesar Risiko (Hindari!)', 'Mengurangi Risiko (Lakukan!)'], rows: [
        ['Membuang sampah ke selokan & sungai', 'Memilah sampah & menjaga kebersihan drainase'],
        ['Menebang hutan lindung / mangrove pesisir', 'Reboisasi hulu & menanam mangrove pelindung abrasi'],
        ['Membangun rumah di bantaran sungai / lereng rawan', 'Mematuhi tata ruang & membangun rumah tahan gempa'],
      ]},
    ],
    activityTitle: 'Latihan: Aktivitas Manusia & Risiko Bencana',
    questions: [
      { text: 'Penebangan hutan mangrove secara liar di kawasan pesisir memperbesar risiko bencana berupa...', opts: ['Abrasi pantai, intrusi air laut, dan kerentanan terhadap gelombang tinggi/rob', 'Letusan gunungapi', 'Gempa tektonik', 'Hujan salju'], ans: 0, exp: 'Akar mangrove memecah energi ombak dan menahan sedimen pantai.' },
      { text: 'Pengambilan air tanah secara berlebihan di kota pesisir dapat memicu penurunan muka tanah (land subsidence) yang mengakibatkan...', opts: ['Banjir dan genangan rob makin luas dan lama surut', 'Tanah makin tinggi', 'Gunung meletus', 'Kemarau hilang'], ans: 0, exp: 'Penurunan muka tanah membuat daratan lebih rendah dari pasang air laut.' },
      { text: 'Tindakan sederhana siswa SMP di rumah dan sekolah yang langsung membantu mengurangi risiko banjir lokal adalah...', opts: ['Tidak membuang sampah ke selokan, menanam pohon, dan membuat lubang resapan biopori', 'Menutup seluruh halaman dengan beton tanpa resapan', 'Membakar sampah di parit', 'Membiarkan saluran tersumbat'], ans: 0, exp: 'Saluran lancar dan bidang resapan mengurangi genangan saat hujan deras.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-01', subSeq: 6,
    objectives: ['Siswa mampu menganalisis dampak multidimensional bencana (fisik, ekonomi, sosial, dan psikologis) terhadap masyarakat.'],
    materialTitle: 'Dampak Bencana terhadap Masyarakat',
    blocks: [
      { type: 'list', title: '4 Dimensi Dampak Bencana', items: ['Fisik: rusaknya rumah, sekolah, jalan, jembatan, listrik, dan air bersih.', 'Ekonomi: terhentinya kegiatan pasar/pertanian/tambak, hilangnya mata pencaharian, kenaikan harga pangan.', 'Sosial: pengungsian, terganggunya sekolah, dan meningkatnya risiko penyakit menular.', 'Psikologis: trauma (stres pascabencana), terutama pada anak-anak dan lansia — sehingga dibutuhkan dukungan psikososial!'] },
    ],
    activityTitle: 'Latihan: Dampak Bencana',
    questions: [
      { text: 'Terputusnya jembatan dan jalan utama akibat banjir bandang berdampak langsung pada aspek ekonomi berupa...', opts: ['Terhambatnya distribusi barang kebutuhan pokok sehingga harga lokal bisa melonjak', 'Harga barang otomatis gratis', 'Produksi naik dua kali lipat', 'Tidak ada pengaruh pada pasar'], ans: 0, exp: 'Hambatan distribusi mengurangi pasokan barang di wilayah terdampak.' },
      { text: 'Program "trauma healing" (permainan ceria dan pendampingan bagi anak di posko pengungsian) bertujuan memulihkan dampak...', opts: ['Psikologis', 'Geologis', 'Tektonik', 'Astronomis'], ans: 0, exp: 'Pendampingan psikososial memulihkan rasa aman anak pascabencana.' },
      { text: 'Mengapa penyediaan air bersih dan sanitasi (MCK) menjadi prioritas mendesak di posko pengungsian bencana?', opts: ['Mencegah wabah penyakit menular seperti diare dan penyakit kulit di pengungsian', 'Sekadar hiasan posko', 'Agar pengungsi tidak pulang', 'Tidak terlalu penting'], ans: 0, exp: 'Sanitasi buruk di tempat padat sangat cepat menyebarkan penyakit.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-01', subSeq: 7,
    objectives: ['Siswa mampu menerapkan langkah kesiapsiagaan pra-bencana, saat bencana (gempa/banjir/tsunami), dan pascabencana.'],
    materialTitle: 'Kesiapsiagaan Menghadapi Bencana',
    blocks: [
      { type: 'table', title: 'Protokol Keselamatan Saat Gempa & Tsunami', headers: ['Situasi', 'Tindakan Penyelamatan Tepat'], rows: [
        ['Saat gempa di dalam kelas', 'DROP – COVER – HOLD ON: runduk, berlindung di bawah meja kuat, lindungi kepala! JANGAN pakai lift!'],
        ['Setelah guncangan berhenti', 'Keluar tertib mengikuti jalur evakuasi ke titik kumpul terbuka jauh dari tiang listrik/gedung'],
        ['Di pantai pascagempa kuat (>20 detik) / air laut surut tiba-tiba', 'JANGAN menunggu pengumuman — SEGERA lari ke tempat tinggi/gedung evakuasi (20-20-20)!'],
        ['Tas Siaga Bencana (Pra-bencana)', 'Dokumen penting dalam plastik kedap air, air minum, makanan tahan lama, P3K, senter, peluit, obat rutin'],
      ]},
    ],
    activityTitle: 'Latihan: Kesiapsiagaan Bencana',
    questions: [
      { text: 'Saat sedang belajar di kelas lantai 1 tiba-tiba terjadi gempa bumi kuat. Tindakan refleks paling aman saat guncangan masih berlangsung adalah...', opts: ['Berlindung di bawah meja kokoh sambil melindungi kepala/leher hingga guncangan reda, lalu keluar tertib ke titik kumpul', 'Berlari berebut pintu sambil melompat dari jendela', 'Berdiri di bawah lemari kaca tinggi', 'Tetap santai melihat lampu gantung'], ans: 0, exp: 'Drop-Cover-Hold On melindungi tubuh dari benda jatuh saat guncangan kuat.' },
      { text: 'Tanda alam bahaya tsunami setelah gempa kuat di pesisir pantai adalah...', opts: ['Air laut tiba-tiba surut jauh secara tidak wajar disertai gemuruh dari laut', 'Angin berhenti 1 detik', 'Langit berwarna biru cerah', 'Burung berkicau tenang'], ans: 0, exp: 'Surutnya air laut mendadak pascagempa kuat adalah sinyal darurat segera menuju dataran tinggi.' },
      { text: 'Manakah isi wajib Tas Siaga Bencana untuk keluarga?', opts: ['Salinan dokumen penting tahan air, air minum, P3K, senter, peluit, dan makanan siap santap', 'Televisi dan lemari pakaian', 'Mainan berat dan buku tebal', 'Benda pecah belah'], ans: 0, exp: 'Tas siaga berisi kebutuhan darurat bertahan hidup 72 jam pertama.' },
    ],
  },

  // BAB 2: DAMPAK PERUBAHAN IKLIM DAN ADAPTASI (7 sub)
  {
    topicCode: 'IPS-SMP8-02', subSeq: 1,
    objectives: ['Siswa mampu menganalisis dampak perubahan iklim terhadap sektor ekonomi (pertanian, perikanan/tambak, dan harga pangan).'],
    materialTitle: 'Dampak Perubahan Iklim terhadap Kehidupan Ekonomi',
    blocks: [
      { type: 'text', text: 'Perubahan iklim (pemanasan global akibat akumulasi gas rumah kaca seperti CO2 dan metana) mengubah pola hujan, menaikkan suhu udara/laut, dan memicu kenaikan muka air laut. Dampaknya: petani menghadapi gagal panen akibat musim tak menentu, dan petambak/nelayan pesisir terancam gelombang ekstrem serta salinitas air yang berubah.' },
    ],
    activityTitle: 'Latihan: Dampak Ekonomi Perubahan Iklim',
    questions: [
      { text: 'Dampak langsung perubahan pola musim hujan-kemarau yang tidak menentu terhadap sektor pertanian adalah...', opts: ['Jadwal tanam terganggu, risiko gagal panen meningkat, dan pendapatan petani menurun', 'Panen otomatis naik setiap bulan', 'Harga pupuk jadi gratis', 'Hama hilang total'], ans: 0, exp: 'Ketidakpastian musim mengganggu siklus tanam dan produktivitas pangan.' },
      { text: 'Ketika gagal panen meluas akibat kekeringan ekstrem atau banjir, dampak lanjutannya terhadap konsumen di pasar adalah...', opts: ['Pasokan pangan berkurang sehingga harga bahan pokok naik (inflasi pangan)', 'Harga beras turun drastis', 'Semua toko tutup selamanya', 'Tidak ada perubahan harga'], ans: 0, exp: 'Penurunan penawaran pangan mendorong kenaikan harga.' },
      { text: 'Bagi wilayah pesisir yang banyak memiliki usaha tambak ikan/bandeng seperti di Gresik, kenaikan muka air laut dan banjir rob berisiko menyebabkan...', opts: ['Tanggul tambak jebol dan ikan terlepas sehingga petambak merugi', 'Air tambak menjadi beku', 'Tambak berubah jadi gunung', 'Produksi panen langsung 10 kali lipat'], ans: 0, exp: 'Rob dan gelombang tinggi mengancam keamanan infrastruktur tambak pesisir.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-02', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi dampak perubahan iklim terhadap kehidupan sosial, kesehatan masyarakat, dan tradisi lokal.'],
    materialTitle: 'Dampak Perubahan Iklim terhadap Sosial dan Budaya',
    blocks: [
      { type: 'list', title: 'Dampak Sosial & Budaya Perubahan Iklim', items: ['Kesehatan: suhu panas & genangan air mempercepat perkembangbiakan nyamuk pembawa DBD dan malaria.', 'Permukiman: abrasi/rob memaksa sebagian warga pesisir meninggikan rumah atau pindah tempat tinggal.', 'Budaya agraris: kalender musim tradisional (pranata mangsa) makin sulit diprediksi tanpa dipadukan data cuaca modern BMKG.'] },
    ],
    activityTitle: 'Latihan: Dampak Sosial-Budaya Perubahan Iklim',
    questions: [
      { text: 'Mengapa perubahan iklim ikut meningkatkan risiko penyebaran penyakit seperti Demam Berdarah Dengue (DBD)?', opts: ['Suhu lebih hangat dan hujan tak menentu menciptakan lebih banyak genangan air tempat nyamuk Aedes berkembang biak cepat', 'Nyamuk hanya hidup di salju', 'Udara dingin membuat nyamuk mati', 'Tidak ada kaitan iklim dengan nyamuk'], ans: 0, exp: 'Suhu hangat mempercepat siklus hidup vektor nyamuk.' },
      { text: 'Petani tradisional dahulu mengandalkan tanda musim turun-temurun, namun akibat perubahan iklim kini semakin perlu memadukannya dengan...', opts: ['Prakiraan cuaca dan iklim ilmiah resmi dari BMKG', 'Tebakan acak', 'Berhenti bertani', 'Mengabaikan musim'], ans: 0, exp: 'Data meteorologi BMKG membantu petani menyesuaikan jadwal tanam.' },
      { text: 'Dampak sosial yang muncul bila suatu desa pesisir terus-menerus terendam rob parah adalah...', opts: ['Meningkatnya biaya perbaikan rumah, terganggunya akses sekolah/kerja, hingga potensi relokasi warga', 'Warga tidak perlu air tawar', 'Jalanan makin mulus', 'Semua warga jadi turis'], ans: 0, exp: 'Rob berkepanjangan menggerus kualitas hidup dan infrastruktur sosial.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-02', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan perubahan pola mata pencaharian masyarakat pesisir dan agraris akibat dinamika iklim.'],
    materialTitle: 'Perubahan Pola Mata Pencaharian',
    blocks: [
      { type: 'text', text: 'Ketika cuaca laut sering bergelombang tinggi atau lahan pertanian tergenang air asin (intrusi), sebagian nelayan dan petani melakukan DIVERSIFIKASI mata pencaharian — misalnya mengolah hasil perikanan (bandeng asap/otak-otak), mengembangkan ekowisata mangrove, budidaya tahan garam, atau bekerja di sektor jasa/industri lokal.' },
    ],
    activityTitle: 'Latihan: Perubahan Mata Pencaharian',
    questions: [
      { text: 'Strategi DIVERSIFIKASI mata pencaharian bagi keluarga nelayan saat musim gelombang tinggi adalah...', opts: ['Mengembangkan usaha olahan hasil laut atau kerajinan/ekowisata sehingga tidak bergantung 100% pada melaut harian', 'Tetap memaksa melaut saat badai ekstrem', 'Menjual seluruh perahu lalu menganggur', 'Menunggu bantuan saja'], ans: 0, exp: 'Diversifikasi sumber penghasilan meningkatkan ketahanan ekonomi keluarga.' },
      { text: 'Di wilayah pertanian tadah hujan yang makin sering mengalami kemarau panjang, petani dapat menyesuaikan pola tanam dengan...', opts: ['Memilih varietas tanaman berumur pendek dan lebih tahan kekeringan (palawija/hortikultura hemat air)', 'Menanam tanaman yang butuh banjir terus', 'Membakar lahan', 'Membiarkan lahan terlantar'], ans: 0, exp: 'Pemilihan komoditas adaptif menjaga produktivitas lahan.' },
      { text: 'Pelatihan keterampilan digital dan pengolahan produk UMKM lokal membantu masyarakat menghadapi perubahan iklim karena...', opts: ['Menciptakan nilai tambah produk dan memperluas pasar di luar ketergantungan cuaca semata', 'Menghentikan hujan', 'Menghapus kebutuhan pangan', 'Mengganti semua profesi jadi IT'], ans: 0, exp: 'Keterampilan tambahan memperkuat daya lenting ekonomi masyarakat.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-02', subSeq: 4,
    objectives: ['Siswa mampu membedakan strategi ADAPTASI iklim dengan MITIGASI serta menyebutkan contoh adaptasi lokal nyata.'],
    materialTitle: 'Adaptasi Masyarakat terhadap Perubahan Iklim',
    blocks: [
      { type: 'table', title: 'Jangan Tertukar: ADAPTASI vs MITIGASI Iklim!', headers: ['Strategi', 'Fokus Utama', 'Contoh Nyata'], rows: [
        ['ADAPTASI', 'Menyesuaikan diri hidup dengan dampak iklim yang sudah/sedang terjadi', 'Meninggikan tanggul tambak, rumah panggung, benih tahan kering/garam, sumur panen air hujan'],
        ['MITIGASI', 'Mengurangi SUMBER penyebabnya (menekan emisi gas rumah kaca)', 'Hemat listrik, pakai transportasi umum/sepeda, energi surya, tanam pohon penyerap CO2'],
      ]},
    ],
    activityTitle: 'Latihan: Adaptasi Perubahan Iklim',
    questions: [
      { text: 'Manakah contoh tindakan ADAPTASI masyarakat pesisir terhadap kenaikan muka air laut?', opts: ['Meninggikan tanggul pelindung, menanam sabuk hijau mangrove, dan menyesuaikan konstruksi rumah', 'Membakar plastik', 'Menambah pabrik batu bara', 'Membuang sampah ke laut'], ans: 0, exp: 'Adaptasi menyiapkan lingkungan dan masyarakat agar tahan terhadap dampak iklim.' },
      { text: 'Menampung air hujan di tandon/embung saat musim hujan untuk persiapan pengairan di musim kemarau merupakan bentuk...', opts: ['Adaptasi pengelolaan sumber daya air', 'Penyebab pemanasan global', 'Deforestasi', 'Emisi karbon'], ans: 0, exp: 'Pemanenan air hujan (rainwater harvesting) mengurangi dampak kekeringan.' },
      { text: 'Perbedaan inti antara ADAPTASI dan MITIGASI perubahan iklim adalah...', opts: ['Adaptasi menyesuaikan diri terhadap dampak; mitigasi mencegah/mengurangi emisi penyebab pemanasan global', 'Keduanya persis sama', 'Adaptasi hanya untuk negara dingin', 'Mitigasi hanya dilakukan setelah banjir'], ans: 0, exp: 'Keduanya harus dijalankan beriringan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-02', subSeq: 5,
    objectives: ['Siswa mampu menjelaskan kaitan peningkatan suhu global dengan frekuensi dan intensitas bencana hidrometeorologis ekstrem.'],
    materialTitle: 'Hubungan Perubahan Iklim dan Risiko Bencana',
    blocks: [
      { type: 'text', text: 'Suhu udara dan permukaan laut yang lebih hangat mempercepat penguapan air sehingga atmosfer menyimpan uap air dan energi panas lebih besar. Akibatnya: hujan ekstrem & badai makin intensif di satu tempat, sementara gelombang panas & kekeringan makin parah di tempat lain!' },
    ],
    activityTitle: 'Latihan: Perubahan Iklim & Bencana',
    questions: [
      { text: 'Kelompok bencana yang frekuensi dan intensitasnya PALING meningkat akibat perubahan iklim global adalah...', opts: ['Bencana hidrometeorologis (banjir ekstrem, kekeringan, gelombang panas, badai)', 'Gempa bumi tektonik dalam', 'Pergerakan benua', 'Jatuhnya meteor'], ans: 0, exp: 'Atmosfer yang lebih hangat memicu anomali cuaca dan siklus hidrologi ekstrem.' },
      { text: 'Mencairnya es kutub dan pemuaian air laut akibat pemanasan global secara langsung menaikkan risiko bencana pesisir berupa...', opts: ['Kenaikan muka air laut, abrasi, dan banjir rob yang makin sering', 'Letusan gunungapi bawah tanah', 'Hujan abu', 'Longsor gurun'], ans: 0, exp: 'Kenaikan permukaan laut mengancam kota-kota pantai dataran rendah.' },
      { text: 'Penggunaan sistem peringatan dini cuaca ekstrem (early warning) dari BMKG sangat penting karena...', opts: ['Memberi waktu masyarakat dan nelayan mengamankan diri serta aset sebelum badai/banjir tiba', 'Menghentikan awan hujan', 'Menghilangkan musim', 'Mengganti peta dunia'], ans: 0, exp: 'Peringatan dini menyelamatkan nyawa dan menekan kerugian.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-02', subSeq: 6,
    objectives: ['Siswa mampu merancang aksi mitigasi pengurangan jejak karbon di tingkat sekolah, rumah, dan masyarakat.'],
    materialTitle: 'Upaya Mitigasi dan Pengurangan Jejak Karbon',
    blocks: [
      { type: 'visual_cards', title: 'Aksi Mitigasi Pelajar SMP (Kurangi Jejak Karbon!)', cards: [
        { emoji: '💡', label: 'Hemat Listrik', sub: 'Matikan lampu/AC tak terpakai — sebagian besar listrik masih dari bahan bakar fosil!' },
        { emoji: '🚲', label: 'Transportasi Rendah Emisi', sub: 'Jalan kaki, bersepeda, atau angkutan umum untuk jarak dekat' },
        { emoji: '♻️', label: '3R & Kurangi Food Waste', sub: 'Habiskan makanan! Sampah organik membusuk di TPA menghasilkan gas metana!' },
        { emoji: '🌳', label: 'Tanam Pohon / Mangrove', sub: 'Pohon menyerap CO2 atmosfer lewat fotosintesis' },
      ]},
    ],
    activityTitle: 'Latihan: Upaya Mitigasi Iklim',
    questions: [
      { text: 'Mengapa menghabiskan makanan (mengurangi sisa makanan / food waste) termasuk aksi MITIGASI perubahan iklim?', opts: ['Karena sampah makanan yang menumpuk membusuk di TPA melepaskan gas metana (gas rumah kaca kuat)', 'Karena makanan menghasilkan oksigen', 'Karena piring jadi lebih berat', 'Tidak ada kaitannya'], ans: 0, exp: 'Gas metana (CH4) memiliki daya perangkap panas puluhan kali lebih kuat dari CO2.' },
      { text: 'Beralih dari PLTU batu bara menuju PLTS (tenaga surya) dan PLTB (tenaga angin) adalah strategi mitigasi di sektor...', opts: ['Energi (transisi energi terbarukan rendah karbon)', 'Pertambangan fosil', 'Deforestasi', 'Pengemasan plastik'], ans: 0, exp: 'Energi terbarukan menekan emisi CO2 sektor kelistrikan.' },
      { text: 'Manakah tindakan harian siswa yang termasuk MITIGASI perubahan iklim?', opts: ['Mematikan lampu/kipas saat keluar kelas dan bersepeda ke sekolah yang dekat', 'Menyalakan AC dengan jendela terbuka', 'Membakar sampah plastik setiap sore', 'Membuang makanan setengah porsi'], ans: 0, exp: 'Menghemat listrik dan bahan bakar fosil langsung menurunkan emisi karbon.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-02', subSeq: 7,
    objectives: ['Siswa mampu memahami konsep Pembangunan Berkelanjutan (3 pilar: ekonomi, sosial, lingkungan) dan mengenal SDGs 2030.'],
    materialTitle: 'Pembangunan Berkelanjutan & Pengenalan SDGs',
    blocks: [
      { type: 'text', text: 'Pembangunan Berkelanjutan adalah pembangunan yang memenuhi kebutuhan generasi masa kini TANPA mengorbankan kemampuan generasi masa depan memenuhi kebutuhannya. Ia menyeimbangkan 3 pilar: EKONOMI, SOSIAL, dan LINGKUNGAN. PBB merumuskannya dalam 17 Tujuan Pembangunan Berkelanjutan (SDGs / TPB) target 2030 — misalnya SDG 4 (Pendidikan Berkualitas), SDG 13 (Penanganan Perubahan Iklim), dan SDG 14/15 (Ekosistem Laut & Darat).' },
    ],
    activityTitle: 'Latihan: Pembangunan Berkelanjutan & SDGs',
    questions: [
      { text: 'Prinsip utama Pembangunan Berkelanjutan (Sustainable Development) adalah...', opts: ['Memenuhi kebutuhan generasi sekarang tanpa merusak hak dan daya dukung bagi generasi mendatang', 'Mengeksploitasi seluruh sumber daya alam secepat mungkin hari ini', 'Menghentikan seluruh kegiatan ekonomi manusia', 'Hanya memikirkan keuntungan jangka pendek'], ans: 0, exp: 'Keseimbangan ekonomi, sosial, dan kelestarian lingkungan antargenerasi.' },
      { text: 'Tiga pilar utama yang harus berjalan seimbang dalam pembangunan berkelanjutan adalah...', opts: ['Ekonomi, sosial, dan lingkungan', 'Politik, hiburan, dan olahraga', 'Industri, iklan, dan ekspor saja', 'Cuaca, tanah, dan laut'], ans: 0, exp: 'Triple bottom line: Profit (ekonomi), People (sosial), Planet (lingkungan).' },
      { text: 'SDGs (Sustainable Development Goals) yang disepakati negara-negara anggota PBB terdiri atas berapa tujuan global hingga tahun 2030?', opts: ['17 tujuan (termasuk penanganan perubahan iklim, pendidikan berkualitas, dan tanpa kemiskinan)', '5 tujuan', '50 tujuan', '3 tujuan'], ans: 0, exp: 'Agenda 2030 PBB memuat 17 tujuan SDGs.' },
    ],
  },

  // BAB 3: PASAR, HARGA, DAN KEGIATAN EKONOMI (7 sub)
  {
    topicCode: 'IPS-SMP8-03', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian pasar secara luas serta 3 fungsi utama pasar (distribusi, pembentuk harga, promosi).'],
    materialTitle: 'Pengertian dan Fungsi Pasar',
    blocks: [
      { type: 'table', title: '3 Fungsi Utama Pasar dalam Perekonomian', headers: ['Fungsi', 'Penjelasan'], rows: [
        ['1. Fungsi Distribusi', 'Memperlancar penyaluran barang/jasa dari produsen sampai ke tangan konsumen'],
        ['2. Fungsi Pembentuk Harga', 'Tempat bertemunya permintaan & penawaran sehingga terbentuk harga kesepakatan'],
        ['3. Fungsi Promosi', 'Sarana produsen memperkenalkan keunggulan produk baru kepada pembeli'],
      ]},
    ],
    activityTitle: 'Latihan: Pengertian & Fungsi Pasar',
    questions: [
      { text: 'Dalam ilmu ekonomi modern, syarat terjadinya PASAR tidak selalu berupa bangunan fisik, melainkan cukup adanya...', opts: ['Pertemuan penjual dan pembeli (langsung atau daring), barang/jasa, serta kesepakatan harga', 'Bangunan beton luas saja', 'Parkiran besar', 'Lampu neon'], ans: 0, exp: 'Pasar mencakup pasar fisik (tradisional/swalayan) maupun pasar abstrak (marketplace online).' },
      { text: 'Ketika sebuah merek makanan ringan membuka stan tester gratis di pusat perbelanjaan agar pembeli mengenal produk barunya, pasar sedang menjalankan fungsi...', opts: ['Promosi', 'Pajak', 'Monopoli', 'Subsidi'], ans: 0, exp: 'Memperkenalkan keunggulan produk kepada calon konsumen = fungsi promosi.' },
      { text: 'Petani tambak menjual ikan bandeng hasil panen ke pasar tradisional hingga dibeli ibu rumah tangga. Pasar menjalankan fungsi...', opts: ['Distribusi', 'Produksi', 'Konsumsi', 'Inflasi'], ans: 0, exp: 'Pasar menghubungkan produsen dengan konsumen.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-03', subSeq: 2,
    objectives: ['Siswa mampu mengklasifikasikan jenis pasar berdasarkan wujud (konkret/abstrak), luas jangkauan, waktu, dan struktur persaingan.'],
    materialTitle: 'Jenis-Jenis Pasar',
    blocks: [
      { type: 'table', title: 'Klasifikasi Jenis Pasar', headers: ['Dasar Pembagian', 'Jenis & Contoh'], rows: [
        ['Wujud', 'Pasar Konkret (Pasar Baru Gresik, minimarket) vs Pasar Abstrak (toko online/marketplace, bursa saham)'],
        ['Luas Jangkauan', 'Lokal → Daerah → Nasional → Internasional (ekspor-impor)'],
        ['Struktur Persaingan', 'Persaingan Sempurna (banyak penjual-pembeli, barang seragam) vs Tidak Sempurna (monopoli, oligopoli, monopolistik)'],
      ]},
    ],
    activityTitle: 'Latihan: Jenis Pasar',
    questions: [
      { text: 'Transaksi jual beli melalui aplikasi marketplace daring di mana barang baru dikirim lewat kurir tergolong...', opts: ['Pasar abstrak', 'Pasar konkret', 'Pasar harian fisik', 'Pasar monopoli murni'], ans: 0, exp: 'Penjual dan pembeli tidak bertemu langsung secara fisik bersama barang saat transaksi.' },
      { text: 'Pasar yang hanya dikuasai oleh SATU penjual/penyedia tunggal untuk barang tertentu tanpa pengganti dekat (seperti layanan listrik negara PLN untuk distribusi publik) disebut pasar...', opts: ['Monopoli', 'Persaingan sempurna', 'Oligopoli', 'Pasar lokal'], ans: 0, exp: 'Mono = satu, poli = penjual.' },
      { text: 'Pasar yang dikuasai oleh beberapa perusahaan besar saja (misalnya industri operator seluler atau semen nasional) disebut...', opts: ['Oligopoli', 'Monopoli', 'Pasar kaget', 'Pasar barter'], ans: 0, exp: 'Oligopoli = sedikit produsen besar menguasai pangsa pasar.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-03', subSeq: 3,
    objectives: ['Siswa mampu memahami pengertian permintaan, Hukum Permintaan, dan faktor-faktor yang memengaruhi permintaan.'],
    materialTitle: 'Permintaan (Demand)',
    blocks: [
      { type: 'formula', name: 'Hukum Permintaan (Ceteris Paribus)', expression: 'Harga NAIK (↑) → Jumlah diminta TURUN (↓)   |   Harga TURUN (↓) → Jumlah diminta NAIK (↑)', note: 'Berbanding TERBALIK! Permintaan efektif adalah keinginan membeli yang DIDUKUNG daya beli (uang). Faktor lain: pendapatan, selera, harga barang pengganti, jumlah penduduk, dan perkiraan harga.' },
    ],
    activityTitle: 'Latihan: Permintaan',
    questions: [
      { text: 'Sesuai Hukum Permintaan (ceteris paribus), jika harga daging ayam di pasar turun drastis saat promo, maka jumlah daging ayam yang diminta pembeli cenderung...', opts: ['Meningkat (naik)', 'Menurun', 'Menjadi nol', 'Tidak dapat dibeli'], ans: 0, exp: 'Harga dan jumlah yang diminta berbanding terbalik.' },
      { text: 'Keinginan membeli sepatu baru yang SUDAH disertai uang cukup dan langsung dibelikan disebut permintaan...', opts: ['Efektif', 'Absolut', 'Potensial', 'Fiktif'], ans: 0, exp: 'Efektif = ingin + mampu + jadi membeli; Absolut = ingin tapi tidak punya uang.' },
      { text: 'Manakah faktor yang dapat MENAIKKAN permintaan terhadap jas hujan meski harganya tetap?', opts: ['Memasuki musim hujan deras (perubahan selera/kebutuhan musiman)', 'Musim kemarau panjang', 'Pendapatan masyarakat turun drastis', 'Jumlah penduduk berkurang'], ans: 0, exp: 'Kebutuhan musiman menggeser kurva permintaan ke kanan (meningkat).' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-03', subSeq: 4,
    objectives: ['Siswa mampu memahami pengertian penawaran, Hukum Penawaran, dan faktor yang memengaruhi penawaran produsen.'],
    materialTitle: 'Penawaran (Supply)',
    blocks: [
      { type: 'formula', name: 'Hukum Penawaran (Ceteris Paribus)', expression: 'Harga NAIK (↑) → Jumlah ditawarkan NAIK (↑)   |   Harga TURUN (↓) → Jumlah ditawarkan TURUN (↓)', note: 'Berbanding LURUS! Produsen terdorong memproduksi dan menawarkan lebih banyak saat harga jual menguntungkan. Faktor lain: biaya produksi, kemajuan teknologi, jumlah produsen, dan pajak/subsidi.' },
    ],
    activityTitle: 'Latihan: Penawaran',
    questions: [
      { text: 'Sesuai Hukum Penawaran (ceteris paribus), ketika harga jual cabai naik tinggi, penjual/produsen terdorong untuk...', opts: ['Menawarkan jumlah barang lebih banyak demi keuntungan lebih besar', 'Menurunkan jumlah yang ditawarkan jadi nol', 'Menghancurkan barang', 'Berhenti berjualan'], ans: 0, exp: 'Harga dan jumlah ditawarkan berbanding lurus.' },
      { text: 'Jika suatu pabrik kerupuk menerapkan mesin modern sehingga biaya produksi turun dan output berlipat ganda, pengaruhnya pada penawaran adalah...', opts: ['Penawaran meningkat', 'Penawaran menurun drastis', 'Permintaan hilang', 'Harga bahan baku pasti naik'], ans: 0, exp: 'Kemajuan teknologi dan turunnya biaya produksi meningkatkan penawaran.' },
      { text: 'Sebaliknya, apabila harga bahan baku (misal tepung/minyak) naik tajam sehingga biaya produksi mahal, penawaran produsen cenderung...', opts: ['Menurun', 'Meningkat pesat', 'Menjadi gratis', 'Tak terpengaruh'], ans: 0, exp: 'Biaya produksi tinggi menekan kemampuan produksi penjual.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-03', subSeq: 5,
    objectives: ['Siswa mampu menjelaskan proses terbentuknya harga pasar (harga keseimbangan / equilibrium) dari pertemuan permintaan dan penawaran.'],
    materialTitle: 'Pembentukan Harga Keseimbangan (Equilibrium)',
    blocks: [
      { type: 'worked_example', level: 'Membaca Tabel Harga Keseimbangan', question: 'Tabel pasar jeruk: Harga Rp12.000 (Qd=50 kg, Qs=20 kg); Harga Rp15.000 (Qd=35 kg, Qs=35 kg); Harga Rp18.000 (Qd=20 kg, Qs=50 kg). Berapa harga keseimbangannya?', steps: ['Cari harga saat jumlah diminta (Qd) SAMA PERSIS dengan jumlah ditawarkan (Qs):', 'Pada Rp15.000: Qd = Qs = 35 kg!'], answer: 'Harga keseimbangan = Rp15.000/kg (jumlah 35 kg)' },
    ],
    activityTitle: 'Latihan: Harga Keseimbangan',
    questions: [
      { text: 'Harga keseimbangan pasar (equilibrium price) terbentuk tepat ketika...', opts: ['Jumlah barang yang diminta pembeli sama dengan jumlah barang yang ditawarkan penjual (Qd = Qs)', 'Harga ditetapkan setinggi mungkin', 'Penjual tidak mau menjual', 'Pembeli tidak punya uang'], ans: 0, exp: 'Titik perpotongan kurva permintaan dan penawaran adalah titik keseimbangan.' },
      { text: 'Jika harga pasar berada DI ATAS harga keseimbangan sehingga barang yang ditawarkan jauh lebih banyak daripada yang diminta (kelebihan pasokan / surplus), maka harga cenderung...', opts: ['Turun menuju titik keseimbangan agar barang laku', 'Terus naik melambung', 'Tetap selamanya', 'Menjadi negatif'], ans: 0, exp: 'Penjual menurunkan harga untuk menghabiskan stok berlebih.' },
      { text: 'Sebaliknya, jika harga terlalu rendah sehingga pembeli berebut stok terbatas (kelangkaan / shortage), tekanan pasar akan mendorong harga...', opts: ['Naik menuju harga keseimbangan', 'Turun sampai Rp0', 'Tidak berubah', 'Menghapus penjual'], ans: 0, exp: 'Kelebihan permintaan mendorong harga naik.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-03', subSeq: 6,
    objectives: ['Siswa mampu menganalisis faktor penyebab perubahan harga kebutuhan pokok di pasar sehari-hari (musim, hari raya, distribusi, bahan bakar).'],
    materialTitle: 'Faktor Penyebab Perubahan Harga Pasar',
    blocks: [
      { type: 'tip', text: 'Mengapa harga daging dan telur sering naik menjelang Lebaran? Karena PERMINTAAN melonjak serentak sementara pasokan terbatas! Mengapa harga cabai turun saat panen raya? Karena PENAWARAN melimpah!' },
    ],
    activityTitle: 'Latihan: Faktor Perubahan Harga',
    questions: [
      { text: 'Kenaikan harga cabai dan sayuran secara mendadak setelah musim hujan panjang merusak ladang disebabkan oleh...', opts: ['Penurunan penawaran (pasokan langka akibat gagal panen)', 'Semua orang berhenti makan sambal', 'Penawaran melimpah ruah', 'Biaya angkut gratis'], ans: 0, exp: 'Pasokan berkurang saat permintaan tetap → harga naik.' },
      { text: 'Kenaikan harga BBM sering ikut mendorong kenaikan harga berbagai barang kebutuhan pokok karena...', opts: ['Biaya transportasi dan distribusi barang dari produsen ke pasar ikut meningkat', 'BBM dimakan langsung', 'Jumlah pasar berkurang', 'Permintaan BBM turun'], ans: 0, exp: 'Biaya logistik adalah komponen penting biaya produksi/distribusi.' },
      { text: 'Operasi pasar murah yang dilakukan pemerintah saat harga beras melonjak bertujuan...', opts: ['Menambah pasokan beras terjangkau untuk menstabilkan harga pasar', 'Menghapus petani', 'Menaikkan harga', 'Menutup pasar tradisional'], ans: 0, exp: 'Penambahan pasokan (supply) meredam lonjakan harga.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-03', subSeq: 7,
    objectives: ['Siswa mampu memahami hubungan saling ketergantungan produsen, distributor, dan konsumen serta hak-kewajiban konsumen.'],
    materialTitle: 'Hubungan Produsen dan Konsumen',
    blocks: [
      { type: 'text', text: 'Produsen dan konsumen saling bergantung: produsen butuh konsumen agar produk terjual dan roda usaha berputar, sedangkan konsumen butuh produsen untuk memenuhi kebutuhan hidup. Etika sehat: produsen jujur soal mutu/takaran (tidak curang timbangan), dan konsumen membayar wajar serta bijak memberi ulasan!' },
    ],
    activityTitle: 'Latihan: Produsen & Konsumen',
    questions: [
      { text: 'Hubungan antara produsen dan konsumen dalam kegiatan ekonomi bersifat...', opts: ['Saling membutuhkan dan menguntungkan (simbiosis ekonomi)', 'Saling memusuhi', 'Produsen tidak butuh pembeli', 'Konsumen tidak butuh barang'], ans: 0, exp: 'Keduanya menjadi dua sisi utama perputaran ekonomi pasar.' },
      { text: 'Hak dasar konsumen yang dilindungi UU Perlindungan Konsumen antara lain...', opts: ['Hak atas kenyamanan, keamanan produk, dan informasi yang benar serta jujur', 'Hak mengambil barang tanpa membayar', 'Hak memalsukan merek', 'Hak memaksa harga Rp0'], ans: 0, exp: 'Konsumen berhak atas informasi jujur dan barang aman.' },
      { text: 'Peran penting DISTRIBUTOR (pedagang grosir, agen, kurir logistik) di antara produsen dan konsumen adalah...', opts: ['Menjembatani jarak tempat dan waktu agar barang produsen mudah dijangkau konsumen', 'Menghambat penjualan', 'Menghancurkan barang', 'Menggantikan fungsi pabrik'], ans: 0, exp: 'Distribusi menciptakan kegunaan tempat dan waktu.' },
    ],
  },

  // BAB 4: LEMBAGA KEUANGAN (7 sub)
  {
    topicCode: 'IPS-SMP8-04', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian dan fungsi lembaga keuangan sebagai perantara (intermediary) pihak surplus dan defisit dana.'],
    materialTitle: 'Pengertian dan Fungsi Lembaga Keuangan',
    blocks: [
      { type: 'text', text: 'Lembaga keuangan adalah badan usaha yang menghimpun dana dari masyarakat yang memiliki kelebihan dana (penabung/investor) dan menyalurkannya kembali kepada masyarakat/pelaku usaha yang membutuhkan dana (peminjam/kredit) secara aman dan diawasi negara (OJK & Bank Indonesia).' },
    ],
    activityTitle: 'Latihan: Lembaga Keuangan',
    questions: [
      { text: 'Fungsi utama lembaga keuangan sebagai "perantara keuangan" (financial intermediary) adalah...', opts: ['Menghimpun dana dari masyarakat berlebih dana dan menyalurkannya untuk kegiatan produktif/kredit', 'Mencetak koran harian', 'Menjual bahan bangunan', 'Mengatur jadwal sekolah'], ans: 0, exp: 'Intermediasi keuangan menggerakkan dana tabungan menjadi modal usaha.' },
      { text: 'Lembaga independen di Indonesia yang bertugas mengatur dan mengawasi seluruh jasa keuangan (bank, asuransi, pasar modal, fintech legal) adalah...', opts: ['OJK (Otoritas Jasa Keuangan)', 'BPOM', 'BMKG', 'BNPB'], ans: 0, exp: 'OJK mengawasi sektor perbankan dan lembaga keuangan nonbank.' },
      { text: 'Bank Sentral Republik Indonesia yang bertugas menjaga kestabilan nilai rupiah dan sistem pembayaran nasional adalah...', opts: ['Bank Indonesia (BI)', 'Koperasi sekolah', 'Pegadaian', 'Asuransi swasta'], ans: 0, exp: 'BI adalah bank sentral pengatur kebijakan moneter dan penerbit rupiah.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-04', subSeq: 2,
    objectives: ['Siswa mampu membedakan Bank (Bank Sentral, Bank Umum, BPR) dan Lembaga Keuangan Nonbank / IKNB (asuransi, pegadaian, koperasi, pasar modal, dana pensiun).'],
    materialTitle: 'Bank dan Lembaga Keuangan Nonbank (IKNB)',
    blocks: [
      { type: 'table', title: 'Bank vs Lembaga Keuangan Nonbank', headers: ['Kelompok', 'Contoh Lembaga', 'Layanan Utama'], rows: [
        ['Bank', 'BI, Bank Umum (BRI, Mandiri, BNI, BCA, Bank Jatim, BSI), BPR', 'Simpanan (tabungan, giro, deposito), kredit/pembiayaan, transfer & QRIS'],
        ['Asuransi', 'BPJS Kesehatan, asuransi jiwa/kendaraan', 'Perlindungan risiko finansial dengan membayar premi rutin'],
        ['Pegadaian', 'PT Pegadaian', 'Pinjaman cepat dengan jaminan barang bergerak (emas, elektronik)'],
        ['Koperasi Simpan Pinjam', 'Koperasi warga / koperasi guru', 'Simpan pinjam berasaskan kekeluargaan untuk kesejahteraan anggota'],
        ['Pasar Modal', 'Bursa Efek Indonesia (BEI)', 'Jual beli saham & obligasi untuk investasi jangka panjang'],
      ]},
    ],
    activityTitle: 'Latihan: Bank & Nonbank',
    questions: [
      { text: 'Lembaga keuangan nonbank yang memberikan pinjaman uang dengan menyerahkan barang berharga (seperti perhiasan emas) sebagai jaminan disebut...', opts: ['Pegadaian', 'Asuransi', 'Dana pensiun', 'Bank Sentral'], ans: 0, exp: 'Pegadaian menyalurkan kredit berbasis hukum gadai.' },
      { text: 'Prinsip kerja lembaga ASURANSI adalah peserta membayar iuran rutin (premi) untuk mendapatkan...', opts: ['Perlindungan / tanggungan finansial apabila terjadi risiko tak terduga (sakit, kecelakaan, kebakaran)', 'Bunga tabungan harian', 'Barang jaminan gadai', 'Hadiah undian pasti'], ans: 0, exp: 'Asuransi mengalihkan risiko kerugian finansial besar.' },
      { text: 'Perbedaan prinsip utama Bank Syariah dibanding Bank Konvensional adalah Bank Syariah menerapkan sistem...', opts: ['Bagi hasil (mudharabah/musyarakah) dan jual beli margin tanpa bunga/riba', 'Bunga majemuk tinggi', 'Tanpa aturan OJK', 'Hanya melayani luar negeri'], ans: 0, exp: 'Perbankan syariah berpedoman pada prinsip syariah dan diawasi OJK + DSN.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-04', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan produk tabungan (termasuk SimPel bagi pelajar), manfaat menabung, dan jaminan LPS.'],
    materialTitle: 'Tabungan dan Manfaat Menabung',
    blocks: [
      { type: 'tip', text: 'Pelajar SMP bisa memiliki rekening resmi Tabungan Simpanan Pelajar (SimPel) di bank dengan setoran awal ringan dan bebas biaya admin bulanan! Dana tabungan di bank resmi dijamin oleh LPS (Lembaga Penjamin Simpanan) sesuai syarat yang berlaku.' },
    ],
    activityTitle: 'Latihan: Tabungan',
    questions: [
      { text: 'Manfaat utama menabung di bank resmi dibandingkan menyimpan seluruh uang tunai di bawah kasur adalah...', opts: ['Lebih aman dari pencurian/kebakaran, tercatat rapi, melatih disiplin, dan dijamin LPS sesuai ketentuan', 'Uang langsung hilang', 'Tidak bisa diambil selamanya', 'Bebas belanja tanpa batas'], ans: 0, exp: 'Keamanan, transparansi, dan edukasi finansial.' },
      { text: 'Simpanan di bank yang penarikannya hanya dapat dilakukan setelah jangka waktu tertentu (misal 3, 6, atau 12 bulan) dengan imbal hasil lebih tinggi dari tabungan biasa disebut...', opts: ['Deposito berjangka', 'Uang jajan', 'Kredit', 'Premi'], ans: 0, exp: 'Deposito berjangka dikunci sesuai tenor yang disepakati.' },
      { text: 'Produk tabungan khusus siswa PAUD hingga SMA yang digagas OJK bersama perbankan untuk menumbuhkan budaya menabung sejak dini bernama...', opts: ['SimPel (Simpanan Pelajar)', 'KPR', 'Kredit Modal Kerja', 'Saham'], ans: 0, exp: 'SimPel didesain ringan dan bebas biaya administrasi bagi pelajar.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-04', subSeq: 4,
    objectives: ['Siswa mampu memahami konsep pinjaman/kredit (pokok, bunga/margin, tenor), kredit produktif vs konsumtif, serta kewajiban pengembalian.'],
    materialTitle: 'Pinjaman dan Kewajiban Pengembalian',
    blocks: [
      { type: 'table', title: 'Pinjaman Produktif vs Konsumtif', headers: ['Jenis Pinjaman', 'Tujuan & Dampak'], rows: [
        ['Pinjaman Produktif', 'Untuk modal usaha (misal KUR beli alat produksi UMKM) → menghasilkan pendapatan baru untuk membayar cicilan!'],
        ['Pinjaman Konsumtif', 'Untuk membeli barang gaya hidup/konsumsi → nilai barang turun sementara cicilan + bunga tetap harus dibayar!'],
      ]},
    ],
    activityTitle: 'Latihan: Pinjaman & Kewajiban',
    questions: [
      { text: 'Ibu Siti meminjam modal KUR di bank untuk membeli mesin pengemas kerupuk guna memperbesar penjualan usahanya. Ini tergolong pinjaman...', opts: ['Produktif', 'Konsumtif', 'Ilegal', 'Hadiah'], ans: 0, exp: 'Pinjaman produktif digunakan menambah kapasitas usaha dan pemasukan.' },
      { text: 'Setiap peminjam uang di lembaga keuangan resmi memiliki kewajiban hukum dan moral untuk...', opts: ['Mengembalikan pokok pinjaman beserta bunga/margin tepat waktu sesuai perjanjian', 'Menghapus aplikasi setelah uang cair', 'Membayar hanya jika ingat', 'Mengganti nama'], ans: 0, exp: 'Kepatuhan membayar menjaga rekam jejak kredit (SLIK OJK).' },
      { text: 'Mengapa sebelum meminjam uang, seseorang wajib menghitung kemampuan cicilan per bulan (ideal < 30% penghasilan)?', opts: ['Agar cicilan tidak mengganggu biaya kebutuhan pokok harian dan terhindar dari gagal bayar', 'Agar bisa meminjam di 10 tempat sekaligus', 'Supaya bunga makin tinggi', 'Tidak perlu dihitung'], ans: 0, exp: 'Rasio utang sehat menjaga kestabilan keuangan keluarga.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-04', subSeq: 5,
    objectives: ['Siswa mampu mengenal layanan keuangan digital modern (ATM, mobile banking, e-wallet, QRIS) beserta keamanan bertransaksi.'],
    materialTitle: 'Layanan Keuangan dan Pembayaran Digital',
    blocks: [
      { type: 'visual_cards', title: 'Keamanan Transaksi Digital Wajib Tahu!', cards: [
        { emoji: '📱', label: 'QRIS (Bank Indonesia)', sub: 'Satu kode QR standar nasional untuk semua bank & e-wallet — cepat & tercatat!' },
        { emoji: '🔐', label: 'Jaga PIN & Kode OTP', sub: 'JANGAN PERNAH berikan PIN, password, atau kode OTP ke siapa pun — termasuk yang mengaku petugas bank!' },
        { emoji: '🚫', label: 'Waspada Phishing / APK Palsu', sub: 'Jangan klik tautan mencurigakan atau unduh file .apk undangan palsu dari nomor asing!' },
      ]},
    ],
    activityTitle: 'Latihan: Layanan Keuangan Digital',
    questions: [
      { text: 'Standar kode QR pembayaran nasional yang diluncurkan Bank Indonesia sehingga semua aplikasi bank dan dompet digital bisa memindai satu kode yang sama adalah...', opts: ['QRIS (Quick Response Code Indonesian Standard)', 'SIM', 'KTP', 'NPWP'], ans: 0, exp: 'QRIS menyatukan berbagai kanal pembayaran nontunai.' },
      { text: 'Jika seseorang menelepon mengaku petugas bank lalu meminta kode OTP 6 digit yang baru masuk ke SMS ponselmu, tindakan paling aman adalah...', opts: ['Menolak keras, langsung menutup telepon, dan tidak pernah membagikan kode OTP', 'Langsung membacakan kode OTP', 'Mengirim foto KTP & PIN', 'Menginstal aplikasi dari link-nya'], ans: 0, exp: 'Kode OTP bersifat super rahasia — bank resmi TIDAK PERNAH meminta OTP nasabah!' },
      { text: 'Keunggulan transaksi nontunai (QRIS/transfer) bagi pelaku UMKM antara lain...', opts: ['Transaksi cepat, mengurangi risiko uang palsu, tidak repot kembalian, dan pembukuan otomatis tercatat', 'Tidak butuh internet sama sekali', 'Bebas dari harga', 'Membuat barang gratis'], ans: 0, exp: 'Pembayaran digital meningkatkan efisiensi dan pencatatan usaha.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-04', subSeq: 6,
    objectives: ['Siswa mampu menyusun anggaran pengelolaan keuangan pribadi sederhana (membedakan kebutuhan vs keinginan, menabung di awal).'],
    materialTitle: 'Pengelolaan Keuangan Sederhana',
    blocks: [
      { type: 'formula', name: 'Aturan Emas Mengelola Uang Saku Pelajar', expression: 'Pemasukan  −  Tabungan/Sedekah (SISIHKAN DI AWAL!)  =  Belanja Kebutuhan', note: 'Jangan menabung dari "sisa belanja" — biasanya habis duluan! Sisihkan 10–20% uang saku di awal, bedakan KEBUTUHAN (alat tulis, bekal) dari KEINGINAN (jajan impulsif/skin game).' },
    ],
    activityTitle: 'Latihan: Pengelolaan Keuangan',
    questions: [
      { text: 'Raka mendapat uang saku Rp100.000/minggu. Cara paling efektif agar tabungannya pasti terkumpul Rp20.000 tiap minggu adalah...', opts: ['Langsung menyisihkan Rp20.000 ke tabungan begitu menerima uang saku, lalu mengatur Rp80.000 sisanya', 'Menunggu hari Minggu siapa tahu masih ada sisa', 'Membeli semua keinginan di hari Senin', 'Meminjam uang teman dulu'], ans: 0, exp: 'Menabung di awal (pay yourself first) menjamin target tabungan tercapai.' },
      { text: 'Mencatat pemasukan dan pengeluaran harian selama sebulan membantu pelajar untuk...', opts: ['Mengetahui ke mana uang pergi dan memangkas pengeluaran impulsif yang tidak perlu', 'Menghabiskan uang lebih cepat', 'Melupakan utang', 'Menambah biaya'], ans: 0, exp: 'Pencatatan anggaran melatih pengendalian diri finansial.' },
      { text: 'Dana yang disisihkan khusus untuk keperluan tak terduga (misal ban sepeda bocor, buku hilang, atau sakit ringan) disebut...', opts: ['Dana darurat', 'Dana konsumtif', 'Utang jangka panjang', 'Biaya iklan'], ans: 0, exp: 'Dana darurat melindungi keuangan saat kejadian mendadak.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-04', subSeq: 7,
    objectives: ['Siswa mampu mewaspadai risiko jeratan utang, pinjaman online (pinjol) ilegal, paylater berlebihan, dan judi online.'],
    materialTitle: 'Risiko Utang & Perilaku Bijak Keuangan',
    blocks: [
      { type: 'misconception', wrong: 'Pinjaman online ilegal dan fitur paylater membuat kita bebas membeli apa saja tanpa konsekuensi.', right: 'SANGAT BERBAHAYA! Pinjol ilegal memasang bunga mencekik, menyedot data kontak ponsel, dan meneror peminjam! Pastikan selalu cek legalitas OJK (2L: Legal & Logis) serta jauhi utang konsumtif & judi online!' },
    ],
    activityTitle: 'Latihan: Risiko Utang & Bijak Keuangan',
    questions: [
      { text: 'Ciri utama pinjaman online (pinjol) ILEGAL yang wajib dihindari adalah...', opts: ['Tidak terdaftar/berizin OJK, menawarkan lewat SMS/WA pribadi, bunga sangat tinggi tak transparan, dan meminta akses seluruh kontak/galeri ponsel', 'Terdaftar resmi di OJK', 'Bunga transparan dan wajar', 'Tidak meneror kontak'], ans: 0, exp: 'Pinjol ilegal melanggar privasi dan menjerat korban dalam lingkaran utang.' },
      { text: 'Prinsip "2L" dari OJK sebelum menggunakan layanan keuangan atau tawaran investasi adalah memastikan keduanya...', opts: ['Legal (berizin resmi) dan Logis (imbal hasil masuk akal, bukan janji kaya instan)', 'Lama dan Lambat', 'Lucu dan Laris', 'Luas dan Lengkap'], ans: 0, exp: 'Jika tawaran untung terlalu fantastis tanpa risiko, patut diduga investasi bodong.' },
      { text: 'Kebiasaan "gali lubang tutup lubang" (berutang baru untuk membayar utang lama) sangat berbahaya karena...', opts: ['Total utang beserta bunganya terus membengkak hingga sulit dilunasi', 'Utang otomatis lunas sendiri', 'Bunga menjadi nol', 'Menambah tabungan'], ans: 0, exp: 'Menutup utang dengan utang baru memperparah beban finansial.' },
    ],
  },

  // BAB 5: PERDAGANGAN INTERNASIONAL (7 sub)
  {
    topicCode: 'IPS-SMP8-05', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian perdagangan internasional dan perbedaannya dengan perdagangan dalam negeri.'],
    materialTitle: 'Pengertian Perdagangan Internasional',
    blocks: [
      { type: 'text', text: 'Perdagangan internasional adalah kegiatan jual beli barang dan jasa antarnegara (melewati batas wilayah pabean negara) atas dasar kesepakatan bersama. Berbeda dengan dagang dalam negeri, perdagangan internasional melibatkan MATA UANG ASING (kurs/valuta asing), aturan bea cukai, dan jarak distribusi lintas benua/laut.' },
    ],
    activityTitle: 'Latihan: Perdagangan Internasional',
    questions: [
      { text: 'Perbedaan utama perdagangan internasional dibandingkan perdagangan dalam negeri adalah...', opts: ['Menggunakan mata uang asing (devisa/kurs), tunduk pada aturan bea cukai, dan melibatkan antarnegara berbeda', 'Hanya memakai uang logam', 'Tidak ada perjanjian tertulis', 'Selalu gratis tanpa ongkos kirim'], ans: 0, exp: 'Lintas batas negara menghadirkan aspek kurs mata uang dan kepabeanan.' },
      { text: 'Alat pembayaran luar negeri yang diterima secara internasional (seperti Dolar AS, Euro, Yen) serta cadangan mata uang asing milik negara disebut...', opts: ['Devisa', 'Pajak bumi', 'Subsidi', 'Inflasi'], ans: 0, exp: 'Ekspor menghasilkan pemasukan devisa bagi negara.' },
      { text: 'Pelabuhan laut (seperti kawasan pelabuhan di Gresik dan Tanjung Perak Surabaya) berperan vital dalam perdagangan internasional karena...', opts: ['Menjadi gerbang bongkar muat kontainer ekspor dan impor antarnegara via jalur laut', 'Hanya tempat memancing', 'Menggantikan fungsi bank sentral', 'Menghambat pengiriman barang'], ans: 0, exp: 'Lebih dari 80% volume perdagangan dunia diangkut lewat jalur laut.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-05', subSeq: 2,
    objectives: ['Siswa mampu menganalisis faktor pendorong terjadinya perdagangan antarnegara (perbedaan SDA, teknologi, biaya produksi, dan selera).'],
    materialTitle: 'Faktor Pendorong Perdagangan Antarnegara',
    blocks: [
      { type: 'list', title: 'Mengapa Negara Saling Berdagang?', items: ['1. Perbedaan Sumber Daya Alam (SDA): Indonesia kaya kopi, nikel, kelapa sawit, rempah; negara lain kaya gandum atau kurma.', '2. Perbedaan penguasaan teknologi & SDM: negara maju unggul di mesin canggih/semikonduktor.', '3. Penghematan biaya produksi (efisiensi & keunggulan komparatif).', '4. Perbedaan selera konsumen dan perluasan pasar produk dalam negeri.'] },
    ],
    activityTitle: 'Latihan: Faktor Pendorong Dagang Antarnegara',
    questions: [
      { text: 'Indonesia mengekspor kopi dan karet alam ke Jepang, sementara Jepang mengekspor mesin industri presisi tinggi ke Indonesia. Faktor pendorong utamanya adalah...', opts: ['Perbedaan sumber daya alam dan penguasaan teknologi produksi', 'Persamaan bahasa', 'Kedekatan gunung', 'Larangan berdagang'], ans: 0, exp: 'Masing-masing negara menjual barang yang menjadi keunggulannya dan membeli yang dibutuhkan.' },
      { text: 'Tidak ada satu pun negara di dunia yang mampu memproduksi sendiri seluruh kebutuhannya secara efisien (autarki). Fakta ini mendorong terjadinya...', opts: ['Saling ketergantungan dan perdagangan internasional', 'Isolasi total', 'Penutupan pelabuhan', 'Penghapusan mata uang'], ans: 0, exp: 'Perdagangan antarnegara saling melengkapi kebutuhan setiap bangsa.' },
      { text: 'Mengapa produk UMKM kreatif Indonesia (seperti batik, furnitur rotan, olahan pangan) bisa menembus pasar Eropa dan Amerika?', opts: ['Karena keunikan budaya, kualitas khas, dan selera konsumen global terhadap produk autentik', 'Karena semua negara Eropa tidak punya kain', 'Karena dijual tanpa izin', 'Karena dikirim tanpa kemasan'], ans: 0, exp: 'Keunikan produk dan perbedaan selera membuka peluang ekspor UMKM.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-05', subSeq: 3,
    objectives: ['Siswa mampu membedakan ekspor dan impor, pelaku (eksportir-importir), serta neraca perdagangan (surplus vs defisit).'],
    materialTitle: 'Ekspor, Impor, dan Neraca Perdagangan',
    blocks: [
      { type: 'formula', name: 'Neraca Perdagangan (Ekspor vs Impor)', expression: 'Ekspor > Impor → SURPLUS (devisa masuk > keluar)   |   Ekspor < Impor → DEFISIT', note: 'EKSPOR = menjual barang/jasa ke luar negeri (mendatangkan DEVISA!). IMPOR = membeli barang/jasa dari luar negeri.' },
    ],
    activityTitle: 'Latihan: Ekspor & Impor',
    questions: [
      { text: 'Kegiatan perusahaan Indonesia menjual hasil olahan perikanan, tekstil, atau pupuk ke negara lain disebut...', opts: ['Ekspor', 'Impor', 'Barter', 'Embargo'], ans: 0, exp: 'Ex = keluar → menjual barang ke luar negeri.' },
      { text: 'Jika dalam satu tahun nilai ekspor suatu negara sebesar US$ 250 miliar dan nilai impornya US$ 210 miliar, maka neraca perdagangan negara tersebut mengalami...', opts: ['Surplus sebesar US$ 40 miliar', 'Defisit sebesar US$ 40 miliar', 'Seimbang nol', 'Kerugian total'], ans: 0, exp: 'Ekspor (250) > Impor (210) → Surplus 40 miliar dolar AS.' },
      { text: 'Mengapa Indonesia tetap mengimpor gandum (bahan tepung terigu) dari negara lain?', opts: ['Karena iklim tropis Indonesia tidak cocok untuk budidaya gandum skala besar secara efisien', 'Karena Indonesia tidak punya tanah', 'Karena dilarang menanam padi', 'Karena gandum gratis'], ans: 0, exp: 'Impor memenuhi bahan baku yang tidak dapat diproduksi secara optimal di dalam negeri.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-05', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan manfaat perdagangan internasional (devisa, lapangan kerja, alih teknologi, pemenuhan kebutuhan, persahabatan bangsa).'],
    materialTitle: 'Manfaat Perdagangan Internasional',
    blocks: [
      { type: 'visual_cards', title: '4 Manfaat Utama Perdagangan Internasional', cards: [
        { emoji: '💵', label: 'Menambah Devisa Negara', sub: 'Membiayai pembangunan & memperkuat cadangan devisa' },
        { emoji: '🏭', label: 'Membuka Lapangan Kerja', sub: 'Industri berorientasi ekspor menyerap jutaan tenaga kerja lokal' },
        { emoji: '⚙️', label: 'Alih Teknologi', sub: 'Masuknya mesin & pengetahuan modern meningkatkan produktivitas' },
        { emoji: '🌍', label: 'Mempererat Kerja Sama', sub: 'Membangun hubungan diplomatik & ekonomi yang saling menguntungkan' },
      ]},
    ],
    activityTitle: 'Latihan: Manfaat Perdagangan Internasional',
    questions: [
      { text: 'Manfaat langsung meningkatnya ekspor produk industri dan UMKM Indonesia bagi masyarakat sekitar pabrik/sentra produksi adalah...', opts: ['Terbukanya lapangan kerja baru dan meningkatnya pendapatan warga', 'Hilangnya pekerjaan', 'Menurunnya keahlian', 'Tutupnya pelabuhan'], ans: 0, exp: 'Permintaan ekspor mendorong ekspansi produksi dan penyerapan tenaga kerja.' },
      { text: 'Proses ketika tenaga kerja Indonesia belajar mengoperasikan dan mengembangkan mesin modern yang didatangkan lewat kerja sama industri global disebut...', opts: ['Transfer / alih teknologi', 'Embargo', 'Inflasi', 'Kuota'], ans: 0, exp: 'Alih teknologi meningkatkan kualitas SDM dan daya saing bangsa.' },
      { text: 'Manfaat perdagangan internasional bagi konsumen dalam negeri antara lain...', opts: ['Tersedianya ragam pilihan barang dan akses terhadap teknologi/obat yang belum diproduksi lokal', 'Harga selalu naik 10 kali lipat', 'Pilihan barang makin sedikit', 'Tidak boleh memakai produk lokal'], ans: 0, exp: 'Konsumen mendapat akses produk berkualitas yang melengkapi produksi lokal.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-05', subSeq: 5,
    objectives: ['Siswa mampu mengidentifikasi hambatan perdagangan internasional (tarif/bea masuk, kuota, embargo, politik dumping, perbedaan mata uang).'],
    materialTitle: 'Hambatan dan Kebijakan Perdagangan Internasional',
    blocks: [
      { type: 'table', title: 'Istilah Kebijakan & Hambatan Dagang Wajib Tahu', headers: ['Istilah', 'Pengertian Singkat'], rows: [
        ['Tarif / Bea Masuk', 'Pajak atas barang impor agar harga impor tak mematikan produk lokal'],
        ['Kuota Impor', 'Pembatasan JUMLAH maksimal barang impor yang boleh masuk'],
        ['Embargo', 'Larangan penuh berdagang dengan negara tertentu (alasan politik/keamanan)'],
        ['Dumping', 'Menjual barang di luar negeri LEBIH MURAH dari harga di negara asal untuk merebut pasar'],
        ['Proteksi', 'Kebijakan melindungi industri dalam negeri yang baru tumbuh'],
      ]},
    ],
    activityTitle: 'Latihan: Hambatan Perdagangan Internasional',
    questions: [
      { text: 'Kebijakan pemerintah membatasi JUMLAH maksimal tonase barang impor tertentu demi melindungi petani lokal disebut...', opts: ['Kuota impor', 'Tarif bea keluar', 'Dumping', 'Subsidi ekspor'], ans: 0, exp: 'Kuota membatasi volume/kuantitas fisik barang impor.' },
      { text: 'Praktik menjual produk di pasar luar negeri dengan harga LEBIH MURAH daripada harga jual di dalam negeri sendiri untuk menyingkirkan pesaing disebut...', opts: ['Politik dumping', 'Tarif', 'Kuota', 'Embargo'], ans: 0, exp: 'Dumping dianggap praktik dagang tidak sehat sehingga sering dikenai bea masuk antidumping.' },
      { text: 'Mengapa suatu negara menerapkan kebijakan PROTEKSI (seperti tarif bea masuk tinggi pada produk tertentu)?', opts: ['Melindungi industri dan UMKM dalam negeri dari serbuan barang impor murah', 'Menghapus produk lokal', 'Menaikkan pengangguran', 'Menghentikan seluruh ekspor'], ans: 0, exp: 'Proteksi memberi ruang bagi industri lokal untuk tumbuh dan bersaing.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-05', subSeq: 6,
    objectives: ['Siswa mampu membedakan bentuk kerja sama ekonomi bilateral, regional (ASEAN/AFTA, APEC, Uni Eropa), dan multilateral (WTO, IMF, Bank Dunia).'],
    materialTitle: 'Kerja Sama Ekonomi Antarnegara',
    blocks: [
      { type: 'table', title: '3 Lingkup Kerja Sama Ekonomi Internasional', headers: ['Bentuk', 'Jumlah Negara', 'Contoh Nyata'], rows: [
        ['Bilateral', '2 negara saja', 'Kerja sama dagang Indonesia–Jepang (IJEPA), Indonesia–Australia'],
        ['Regional', 'Negara-negara dalam 1 kawasan', 'ASEAN / AFTA (Asia Tenggara), APEC (Asia-Pasifik), Uni Eropa (EU)'],
        ['Multilateral', 'Banyak negara lintas kawasan dunia', 'WTO (Organisasi Perdagangan Dunia), Bank Dunia, IMF, PBB'],
      ]},
    ],
    activityTitle: 'Latihan: Kerja Sama Ekonomi Antarnegara',
    questions: [
      { text: 'Perjanjian kawasan perdagangan bebas antarnegara Asia Tenggara yang bertujuan menurunkan tarif bea masuk di kawasan ASEAN bernama...', opts: ['AFTA (ASEAN Free Trade Area)', 'Uni Eropa', 'NATO', 'OPEC'], ans: 0, exp: 'AFTA mendorong kelancaran arus barang dan daya saing kawasan ASEAN.' },
      { text: 'Kerja sama ekonomi yang hanya melibatkan DUA negara, misalnya Indonesia dan Korea Selatan, disebut kerja sama...', opts: ['Bilateral', 'Multilateral', 'Regional', 'Unilateral'], ans: 0, exp: 'Bi = dua → kerja sama antara dua negara.' },
      { text: 'Organisasi internasional tingkat dunia yang mengatur aturan main perdagangan bebas antarnegara serta menyelesaikan sengketa dagang global adalah...', opts: ['WTO (World Trade Organization)', 'WHO', 'UNESCO', 'FIFA'], ans: 0, exp: 'WTO mengawasi kesepakatan perdagangan multilateral dunia.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-05', subSeq: 7,
    objectives: ['Siswa mampu mengevaluasi pengaruh positif dan tantangan perdagangan internasional bagi perekonomian Indonesia (hilirisasi & cinta produk lokal).'],
    materialTitle: 'Pengaruh Perdagangan Internasional bagi Indonesia',
    blocks: [
      { type: 'text', text: 'Perdagangan internasional mendorong pertumbuhan ekonomi Indonesia, tetapi juga membawa tantangan: jika Indonesia hanya mengekspor bahan mentah, nilai tambahnya kecil! Oleh karena itu, Indonesia mendorong HILIRISASI (mengolah nikel, sawit, perikanan, dll. menjadi produk jadi/setengah jadi bernilai tinggi sebelum diekspor) serta gerakan Bangga Buatan Indonesia!' },
    ],
    activityTitle: 'Latihan: Dampak bagi Ekonomi Indonesia',
    questions: [
      { text: 'Mengapa kebijakan HILIRISASI (mengolah bahan tambang/pertanian menjadi produk olahan sebelum diekspor) sangat menguntungkan ekonomi Indonesia?', opts: ['Nilai jual ekspor melonjak berkali-kali lipat dan membuka banyak lapangan kerja industri dalam negeri', 'Membuat bahan mentah habis tanpa nilai tambah', 'Mengurangi devisa', 'Menghapus pabrik'], ans: 0, exp: 'Ekspor produk olahan menghasilkan nilai tambah jauh lebih besar daripada ekspor bahan mentah.' },
      { text: 'Tantangan utama yang dihadapi UMKM lokal Indonesia di era perdagangan bebas adalah...', opts: ['Persaingan ketat dengan produk impor murah sehingga UMKM harus terus meningkatkan mutu, kemasan, dan inovasi', 'Tidak ada pembeli di dunia', 'Pelabuhan ditutup', 'Tidak boleh berjualan online'], ans: 0, exp: 'Daya saing mutu, efisiensi, dan pemasaran digital menjadi kunci UMKM bertahan.' },
      { text: 'Peran nyata pelajar SMP dalam mendukung ketahanan ekonomi nasional di tengah arus barang impor adalah...', opts: ['Bangga memilih dan mempromosikan produk lokal Indonesia yang berkualitas', 'Meremehkan semua produk dalam negeri', 'Selalu membeli barang selundupan', 'Boros membeli barang mewah impor'], ans: 0, exp: 'Cinta produk lokal memperkuat UMKM dan lapangan kerja bangsa sendiri.' },
    ],
  },

  // BAB 6: PERUBAHAN SOSIAL DAN BUDAYA MASYARAKAT (8 sub)
  {
    topicCode: 'IPS-SMP8-06', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian perubahan sosial budaya serta bentuk-bentuknya (evolusi vs revolusi, direncanakan vs tidak direncanakan).'],
    materialTitle: 'Pengertian & Bentuk Perubahan Sosial Budaya',
    blocks: [
      { type: 'table', title: 'Bentuk-Bentuk Perubahan Sosial Budaya', headers: ['Dasar', 'Bentuk & Contoh'], rows: [
        ['Kecepatan', 'EVOLUSI (lambat bertahap, mis. peralihan berburu → bertani) vs REVOLUSI (cepat mendasar, mis. Revolusi Industri / Proklamasi 1945)'],
        ['Perencanaan', 'DIRENCANAKAN (pembangunan jalan tol, kurikulum pendidikan) vs TIDAK DIRENCANAKAN (dampak bencana alam / pandemi)'],
        ['Pengaruh', 'KECIL (tren gaya rambut/mode baju) vs BESAR (industrialisasi & digitalisasi internet)'],
      ]},
    ],
    activityTitle: 'Latihan: Bentuk Perubahan Sosial Budaya',
    questions: [
      { text: 'Perubahan sosial yang berlangsung sangat cepat dan menyangkut sendi-sendi pokok kehidupan masyarakat (seperti Revolusi Industri di Inggris) disebut...', opts: ['Revolusi', 'Evolusi', 'Perubahan kecil', 'Stagnasi'], ans: 0, exp: 'Revolusi terjadi cepat dan mengubah struktur sosial secara mendasar.' },
      { text: 'Perubahan tren model potongan rambut atau gaya berpakaian remaja dari tahun ke tahun termasuk perubahan sosial...', opts: ['Berdampak kecil (tidak mengubah lembaga pokok masyarakat)', 'Revolusi besar', 'Bencana sosial', 'Regresif total'], ans: 0, exp: 'Tren mode hanya diikuti sebagian kelompok dan tidak merombak struktur sosial dasar.' },
      { text: 'Pembangunan kawasan industri, jaringan internet desa, dan program wajib belajar oleh pemerintah merupakan contoh perubahan sosial yang...', opts: ['Direncanakan (planned change)', 'Tidak direncanakan', 'Terjadi tanpa tujuan', 'Kecil saja'], ans: 0, exp: 'Dirancang secara sadar oleh agen perubahan untuk kemajuan masyarakat.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-06', subSeq: 2,
    objectives: ['Siswa mampu membedakan faktor penyebab perubahan sosial dari DALAM masyarakat (internal) dan dari LUAR masyarakat (eksternal).'],
    materialTitle: 'Faktor Penyebab Perubahan Sosial (Internal & Eksternal)',
    blocks: [
      { type: 'table', title: 'Faktor Internal vs Eksternal Perubahan Sosial', headers: ['Faktor INTERNAL (Dari Dalam Masyarakat)', 'Faktor EKSTERNAL (Dari Luar Masyarakat)'], rows: [
        ['Bertambah / berkurangnya jumlah penduduk (demografi)', 'Perubahan lingkungan alam (bencana, perubahan iklim)'],
        ['Penemuan baru (discovery & invention, mis. internet/AI)', 'Peperangan dengan negara lain'],
        ['Konflik sosial atau pemberontakan/revolusi internal', 'Pengaruh kebudayaan masyarakat lain (akulturasi, asimilasi, difusi)'],
      ]},
    ],
    activityTitle: 'Latihan: Faktor Penyebab Perubahan Sosial',
    questions: [
      { text: 'Manakah yang merupakan faktor INTERNAL penyebab perubahan sosial budaya?', opts: ['Pertumbuhan jumlah penduduk dan munculnya penemuan teknologi baru di dalam masyarakat', 'Gempa bumi dan tsunami', 'Peperangan dengan negara tetangga', 'Masuknya film asing'], ans: 0, exp: 'Demografi, penemuan baru, dan konflik internal bersumber dari dalam masyarakat sendiri.' },
      { text: 'Bercampurnya dua kebudayaan berbeda tanpa menghilangkan ciri khas budaya asli masing-masing (misalnya arsitektur masjid kuno di Jawa yang memadukan atap tumpang lokal dan nilai Islam) disebut...', opts: ['Akulturasi', 'Konflik', 'Isolasi', 'Disintegrasi'], ans: 0, exp: 'Akulturasi = A + B → AB (unsur asli tetap tampak harmonis).' },
      { text: 'Bencana banjir besar atau perubahan iklim yang memaksa masyarakat mengubah pola permukiman termasuk faktor penyebab perubahan sosial bersifat...', opts: ['Eksternal (perubahan lingkungan alam)', 'Internal penemuan baru', 'Mode fesyen', 'Pertentangan kelas'], ans: 0, exp: 'Perubahan alam berasal dari luar sistem sosial.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-06', subSeq: 3,
    objectives: ['Siswa mampu menganalisis faktor pendorong dan faktor penghambat terjadinya perubahan sosial budaya.'],
    materialTitle: 'Faktor Pendorong dan Penghambat Perubahan Sosial',
    blocks: [
      { type: 'table', title: 'Pendorong vs Penghambat Perubahan', headers: ['Faktor Pendorong', 'Faktor Penghambat'], rows: [
        ['Sistem pendidikan formal yang maju', 'Kurangnya hubungan dengan masyarakat lain (terisolasi)'],
        ['Sikap terbuka, toleran, dan menghargai karya orang lain', 'Perkembangan ilmu pengetahuan yang terlambat'],
        ['Kontak dengan kebudayaan lain & sistem pelapisan terbuka', 'Sikap masyarakat sangat tradisional/tertutup & prasangka terhadap hal baru'],
      ]},
    ],
    activityTitle: 'Latihan: Pendorong & Penghambat Perubahan',
    questions: [
      { text: 'Faktor utama yang MENDORONG percepatan kemajuan dan perubahan sosial positif suatu bangsa adalah...', opts: ['Pendidikan berkualitas, keterbukaan terhadap ilmu pengetahuan, dan penghargaan atas inovasi', 'Sikap menutup diri dari dunia luar', 'Prasangka buruk pada teknologi baru', 'Ketakutan belajar hal baru'], ans: 0, exp: 'Pendidikan dan keterbukaan pikiran mempercepat inovasi.' },
      { text: 'Sikap "vested interest" (kepentingan tertanam kuat dari kelompok tertentu yang takut kehilangan keuntungan bila terjadi pembaruan) termasuk faktor...', opts: ['Penghambat perubahan sosial', 'Pendorong perubahan sosial', 'Akulturasi', 'Globalisasi'], ans: 0, exp: 'Kelompok yang nyaman dengan status quo sering menghambat reformasi.' },
      { text: 'Wilayah yang memiliki akses transportasi dan komunikasi lancar cenderung mengalami perubahan sosial lebih cepat dibanding wilayah terisolasi karena...', opts: ['Lebih mudah berinteraksi, bertukar ilmu, dan menyerap inovasi dari masyarakat lain', 'Jumlah penduduknya nol', 'Tidak punya budaya lokal', 'Selalu terjadi perang'], ans: 0, exp: 'Kontak antarbudaya mempercepat pertukaran gagasan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-06', subSeq: 4,
    objectives: ['Siswa mampu mengevaluasi pengaruh teknologi digital dan globalisasi di bidang komunikasi, ekonomi, pendidikan, dan transportasi.'],
    materialTitle: 'Pengaruh Teknologi dan Globalisasi',
    blocks: [
      { type: 'text', text: 'Globalisasi adalah proses mendunianya integrasi informasi, perdagangan, teknologi, dan budaya sehingga batas ruang-waktu antarnegara terasa makin tipis. Kemajuan smartphone, internet, transportasi cepat, dan e-commerce memudahkan belajar, bekerja jarak jauh, dan memasarkan produk UMKM lokal hingga ke mancanegara!' },
    ],
    activityTitle: 'Latihan: Teknologi & Globalisasi',
    questions: [
      { text: 'Dampak positif globalisasi di bidang pendidikan bagi siswa SMP saat ini adalah...', opts: ['Akses mudah ke perpustakaan digital, video pembelajaran, dan kolaborasi ilmu dari seluruh dunia', 'Siswa tidak perlu lagi berpikir', 'Semua buku cetak langsung musnah', 'Sekolah tidak lagi diperlukan'], ans: 0, exp: 'Teknologi informasi memperluas sumber belajar tanpa batas geografis.' },
      { text: 'Pengrajin songkok atau makanan khas daerah Gresik kini dapat menjual karyanya ke luar pulau bahkan luar negeri melalui toko daring. Hal ini menunjukkan dampak positif globalisasi di bidang...', opts: ['Ekonomi dan pemasaran digital UMKM', 'Kerusakan lingkungan', 'Hilangnya tradisi', 'Isolasi daerah'], ans: 0, exp: 'Digitalisasi membuka akses pasar global bagi pelaku usaha daerah.' },
      { text: 'Faktor pendorong paling kuat yang mempercepat arus globalisasi abad ke-21 adalah...', opts: ['Kemajuan pesat teknologi informasi, internet, dan transportasi modern', 'Penutupan bandara', 'Penghapusan satelit', 'Berkurangnya penduduk dunia'], ans: 0, exp: 'Internet dan transportasi cepat menghubungkan seluruh belahan dunia secara instan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-06', subSeq: 5,
    objectives: ['Siswa mampu menganalisis perubahan pola interaksi sosial (tatap muka vs daring) dan gaya hidup masyarakat modern.'],
    materialTitle: 'Perubahan Pola Interaksi dan Kehidupan Masyarakat',
    blocks: [
      { type: 'tip', text: 'Fenomena "phubbing" (sibuk menatap layar ponsel dan mengabaikan keluarga/teman yang duduk tepat di depan kita) adalah contoh perubahan pola interaksi sosial yang perlu kita kendalikan agar kehangatan silaturahmi langsung tetap terjaga!' },
    ],
    activityTitle: 'Latihan: Pola Interaksi Masyarakat',
    questions: [
      { text: 'Dahulu warga berkumpul mengobrol di teras rumah atau bertransaksi tunai langsung di pasar; kini banyak komunikasi berpindah ke grup pesan instan dan belanja lewat aplikasi. Fenomena ini menunjukkan...', opts: ['Perubahan pola interaksi sosial dari dominan tatap muka menjadi campuran tatap muka dan digital', 'Manusia berhenti berkomunikasi', 'Pasar tradisional dilarang', 'Tidak ada perubahan apa pun'], ans: 0, exp: 'Teknologi memperluas interaksi jarak jauh namun menuntut keseimbangan dengan interaksi langsung.' },
      { text: 'Jika anggota keluarga berkumpul di ruang tamu namun semuanya diam sibuk bermain ponsel masing-masing, dampak sosial yang patut diwaspadai adalah...', opts: ['Melemahnya keakraban emosional dan komunikasi hangat tatap muka di keluarga', 'Keluarga otomatis makin akrab', 'Tagihan listrik turun', 'Mata jadi lebih sehat'], ans: 0, exp: 'Interaksi tatap muka tetap krusial bagi ikatan emosional.' },
      { text: 'Cara bijak menyikapi perubahan pola interaksi di era media sosial adalah...', opts: ['Memanfaatkan media sosial untuk hal produktif sambil tetap menjaga etika digital dan meluangkan waktu bebas gawai bersama keluarga/teman', 'Menghapus semua teman dunia nyata', 'Main ponsel saat makan bersama orang tua', 'Menyebar komentar kasar online'], ans: 0, exp: 'Keseimbangan digital (digital wellbeing) menjaga kesehatan sosial.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-06', subSeq: 6,
    objectives: ['Siswa mampu menghargai keberagaman budaya Indonesia dan merawat kearifan lokal di tengah arus perubahan zaman.'],
    materialTitle: 'Keberagaman Budaya dan Pelestarian Kearifan Lokal',
    blocks: [
      { type: 'text', text: 'Indonesia memiliki ratusan suku, bahasa daerah, kesenian, kuliner, dan adat istiadat. Di era globalisasi, keberagaman budaya justru menjadi IDENTITAS dan MODAL KREATIF bangsa (ekonomi kreatif: batik, musik tradisional-modern, kuliner daerah, bahasa Jawa/daerah) yang harus kita rawat dengan penuh kebanggaan dan saling menghormati!' },
    ],
    activityTitle: 'Latihan: Keberagaman Budaya',
    questions: [
      { text: 'Sikap paling tepat pelajar SMP menghadapi keragaman suku, bahasa daerah, dan adat istiadat teman-teman di Indonesia adalah...', opts: ['Saling menghormati, bertoleransi, dan memandang keberagaman sebagai kekayaan bangsa (Bhinneka Tunggal Ika)', 'Menganggap budaya sendiri paling unggul dan merendahkan budaya lain', 'Melarang penggunaan bahasa daerah', 'Menghindari teman berbeda daerah'], ans: 0, exp: 'Toleransi dan saling menghargai memperkuat persatuan nasional.' },
      { text: 'Mengemas kesenian daerah, batik, atau kuliner tradisional dengan desain modern dan mempromosikannya lewat video pendek kreatif adalah cara...', opts: ['Melestarikan sekaligus mengembangkan budaya lokal agar dicintai generasi muda', 'Menghapus budaya tradisional', 'Meniru budaya luar 100%', 'Melupakan identitas bangsa'], ans: 0, exp: 'Inovasi media kreatif membuat budaya lokal tetap hidup dan relevan.' },
      { text: 'Bahasa daerah (seperti Bahasa Jawa di Jawa Timur) tetap penting dipelajari di sekolah karena...', opts: ['Mengandung nilai sopan santun (unggah-ungguh), sejarah, dan kearifan lokal yang memperkaya identitas bangsa', 'Menggantikan Bahasa Indonesia sebagai bahasa negara', 'Wajib dipakai di seluruh dunia', 'Tidak boleh dipelajari di era internet'], ans: 0, exp: 'Prinsip Trigatra Bangun Bahasa: Utamakan Bahasa Indonesia, Lestarikan Bahasa Daerah, Kuasai Bahasa Asing.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-06', subSeq: 7,
    objectives: ['Siswa mampu menganalisis dampak positif (efisiensi, keterbukaan, kemajuan IPTEK) dan negatif (konsumerisme, westernisasi, kesenjangan, hoaks, cultural lag) perubahan sosial.'],
    materialTitle: 'Dampak Positif dan Negatif Perubahan Sosial',
    blocks: [
      { type: 'table', title: 'Istilah Dampak Negatif Perubahan Sosial Wajib Hafal', headers: ['Istilah', 'Pengertian Singkat'], rows: [
        ['Konsumerisme', 'Gaya hidup boros membeli barang demi gengsi, bukan kebutuhan'],
        ['Westernisasi', 'Meniru mentah-mentah gaya hidup Barat tanpa menyaring kesesuaiannya dengan nilai bangsa'],
        ['Cultural Lag (Kesenjangan Budaya)', 'Teknologi berkembang cepat, tetapi sikap/etika penggunanya tertinggal (mis. punya HP canggih tapi menyebar hoaks!)'],
        ['Cultural Shock (Gegar Budaya)', 'Rasa bingung/kaget menghadapi perubahan nilai atau budaya baru yang terlalu cepat'],
      ]},
    ],
    activityTitle: 'Latihan: Dampak Positif & Negatif',
    questions: [
      { text: 'Banyak orang sudah memiliki smartphone canggih, tetapi sebagian masih menggunakannya untuk menyebar hoaks, ujaran kebencian, atau membuang sampah sembarangan. Fenomena tertinggalnya mental/etika dari kemajuan teknologi ini disebut...', opts: ['Cultural lag (kesenjangan budaya)', 'Akulturasi', 'Evolusi', 'Asimilasi'], ans: 0, exp: 'Cultural lag = budaya material (teknologi) melesat jauh mendahului budaya nonmaterial (sikap/aturan).' },
      { text: 'Perilaku terus-menerus membeli barang tren mahal hanya demi pamer di media sosial meski sebenarnya tidak dibutuhkan disebut...', opts: ['Konsumerisme / gaya hidup konsumtif', 'Efisiensi', 'Inovasi produktif', 'Gotong royong'], ans: 0, exp: 'Konsumerisme menggerus kesehatan finansial dan mental.' },
      { text: 'Perbedaan antara MODERNISASI dan WESTERNISASI adalah...', opts: ['Modernisasi menyerap ilmu pengetahuan, teknologi, dan efisiensi tanpa meninggalkan jati diri bangsa; westernisasi meniru mentah-mentah gaya hidup Barat', 'Keduanya persis sama', 'Modernisasi melarang tradisi lokal', 'Westernisasi berarti memakai batik'], ans: 0, exp: 'Kita perlu modern (melek IPTEK & disiplin), BUKAN westernisasi tanpa filter.' },
    ],
  },
  {
    topicCode: 'IPS-SMP8-06', subSeq: 8,
    objectives: ['Siswa mampu merumuskan sikap selektif, kritis, dan berkarakter Pancasila dalam menghadapi perubahan sosial budaya dan globalisasi.'],
    materialTitle: 'Sikap Bijak Masyarakat Menghadapi Perubahan',
    blocks: [
      { type: 'visual_cards', title: '4 Sikap Tangguh Pelajar di Era Globalisasi', cards: [
        { emoji: '🧠', label: 'Selektif & Kritis', sub: 'Saring budaya/tren luar dengan nilai agama, moral, dan Pancasila!' },
        { emoji: '🇮🇩', label: 'Cinta Budaya & Produk Lokal', sub: 'Akar budaya lokal kuat membuat kita percaya diri di pergaulan dunia' },
        { emoji: '💻', label: 'Cakap Digital & Kreatif', sub: 'Jadilah PENCIPTA konten/karya positif, bukan sekadar konsumen pasif!' },
        { emoji: '🤝', label: 'Rawat Gotong Royong', sub: 'Pertahankan kepedulian sosial di lingkungan nyata sekitar rumah & sekolah' },
      ]},
    ],
    activityTitle: 'Latihan: Sikap Menghadapi Perubahan',
    questions: [
      { text: 'Sikap paling tepat dalam menghadapi derasnya arus budaya global melalui internet dan media sosial adalah...', opts: ['Bersikap terbuka namun SELEKTIF: menyerap hal positif (ilmu, kedisiplinan, kreativitas) dan menolak hal bertentangan dengan nilai Pancasila/agama', 'Menolak total internet dan teknologi modern', 'Meniru semua tren viral tanpa berpikir dampak baik-buruknya', 'Melupakan bahasa dan budaya sendiri'], ans: 0, exp: 'Filter nilai moral dan Pancasila menjaga jati diri di tengah kemajuan global.' },
      { text: 'Semboyan "Berpikir global, bertindak lokal" (Think globally, act locally) bagi generasi muda Indonesia bermakna...', opts: ['Berwawasan luas mengikuti perkembangan dunia sekaligus berkarya nyata memecahkan masalah dan memajukan daerah sendiri', 'Pindah ke luar negeri semua', 'Mengabaikan perkembangan dunia', 'Menolak kearifan lokal'], ans: 0, exp: 'Menggabungkan wawasan global dengan kontribusi lokal.' },
      { text: 'Ketika menemukan tantangan/tren berisiko di media sosial yang membahayakan keselamatan diri demi popularitas, pelajar kritis akan...', opts: ['Menolak mengikutinya, memikirkan risiko keselamatan, dan memilih membuat konten kreatif yang aman serta mendidik', 'Langsung meniru agar cepat viral', 'Mengajak teman-teman melakukannya', 'Mengabaikan keselamatan'], ans: 0, exp: 'Literasi digital dan berpikir kritis melindungi diri dari tren negatif.' },
    ],
  },
];

upsertLessonsBatch('Kelas 8 SMP — IPS (6 Bab, 43 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

