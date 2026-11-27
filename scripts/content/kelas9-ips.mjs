import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: MITIGASI BENCANA DAN PEMBANGUNAN BERKELANJUTAN (6 sub)
  {
    topicCode: 'IPS-SMP9-01', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian mitigasi bencana serta membedakan mitigasi struktural (fisik) dan nonstruktural (aturan/edukasi).'],
    materialTitle: 'Pengertian Mitigasi Bencana (Struktural & Nonstruktural)',
    blocks: [
      { type: 'table', title: '2 Bentuk Mitigasi Bencana', headers: ['Jenis Mitigasi', 'Fokus & Contoh Nyata'], rows: [
        ['Mitigasi Struktural (Fisik)', 'Pembangunan fisik pengurang dampak: tanggul penahan rob/banjir, bangunan tahan gempa, sabuk hijau mangrove, kanal banjir, alat peringatan dini (EWS)'],
        ['Mitigasi Nonstruktural', 'Aturan, kebijakan, tata ruang, peta rawan bencana, pelatihan/simulasi evakuasi sekolah, dan edukasi masyarakat'],
      ]},
    ],
    activityTitle: 'Latihan: Mitigasi Bencana',
    questions: [
      { text: 'Pembangunan tanggul laut pemecah gelombang, normalisasi sungai, dan konstruksi gedung tahan gempa termasuk upaya mitigasi...', opts: ['Struktural (fisik)', 'Nonstruktural', 'Konsumtif', 'Darurat pascabencana saja'], ans: 0, exp: 'Mitigasi struktural berupa rekayasa fisik infrastruktur.' },
      { text: 'Penyusunan peraturan tata ruang larangan membangun rumah di bantaran sungai serta simulasi evakuasi gempa rutin di sekolah merupakan mitigasi...', opts: ['Nonstruktural', 'Struktural', 'Geologis', 'Komersial'], ans: 0, exp: 'Nonstruktural berfokus pada regulasi, penataan ruang, dan kesiapan pengetahuan manusia.' },
      { text: 'Tujuan utama seluruh rangkaian mitigasi bencana sebelum bencana terjadi adalah...', opts: ['Memperkecil risiko jatuhnya korban jiwa, kerusakan infrastruktur, dan kerugian ekonomi masyarakat', 'Menghentikan pergeseran lempeng bumi', 'Menunda pembangunan selamanya', 'Menghapus hujan'], ans: 0, exp: 'Mitigasi meminimalkan dampak negatif saat ancaman benar-benar datang.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-01', subSeq: 2,
    objectives: ['Siswa mampu merancang upaya pengurangan risiko bencana (PRB) sesuai karakteristik wilayah tempat tinggal (pesisir, kota, perbukitan).'],
    materialTitle: 'Upaya Mengurangi Risiko Bencana Sesuai Karakter Wilayah',
    blocks: [
      { type: 'text', text: 'Setiap wilayah punya ancaman khas: wilayah PESISIR (seperti pantai utara Jawa) memprioritaskan penanaman mangrove, pemeliharaan tanggul, dan sistem peringatan rob/gelombang; wilayah PERBUKITAN memprioritaskan terasering dan larangan gunduli lereng; wilayah PERKOTAAN memprioritaskan drainase bersih, ruang terbuka hijau, dan standar bangunan aman!' },
    ],
    activityTitle: 'Latihan: Mengurangi Risiko Bencana',
    questions: [
      { text: 'Upaya pengurangan risiko bencana PALING RELEVAN untuk wilayah pesisir dataran rendah yang rentan abrasi dan banjir rob adalah...', opts: ['Rehabilitasi hutan mangrove, pemeliharaan tanggul/drainase pesisir, serta pemantauan info pasang laut BMKG', 'Membuat terasering gunung salju', 'Menebang pohon pantai untuk beton', 'Membuang sampah ke muara'], ans: 0, exp: 'Pengurangan risiko selalu disesuaikan dengan peta bahaya lokal.' },
      { text: 'Fungsi PETA RAWAN BENCANA dalam perencanaan pembangunan kota/kabupaten adalah...', opts: ['Menjadi dasar penentuan zona aman permukiman, sekolah, rumah sakit, serta jalur evakuasi', 'Sekadar hiasan dinding kantor', 'Menentukan harga tiket wisata', 'Mengganti kurikulum'], ans: 0, exp: 'Tata ruang berbasis risiko mencegah korban jiwa di zona merah.' },
      { text: 'Mengapa siklus penanggulangan bencana mencakup 3 fase (Pra-bencana, Tanggap Darurat, dan Rehabilitasi-Rekonstruksi)?', opts: ['Karena kesiapan sebelum bencana, penyelamatan cepat saat kejadian, dan pemulihan lebih baik setelahnya saling melengkapi', 'Agar cukup bekerja setelah bencana saja', 'Karena fase pra-bencana tidak penting', 'Supaya bantuan terlambat'], ans: 0, exp: 'Prinsip "Build Back Better" membangun kembali lebih aman pascabencana.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-01', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan konsep Desa Tangguh Bencana (Destana) dan Satuan Pendidikan Aman Bencana (SPAB).'],
    materialTitle: 'Kesiapsiagaan Masyarakat dan Sekolah Aman Bencana',
    blocks: [
      { type: 'list', title: 'Pilar Satuan Pendidikan Aman Bencana (SPAB)', items: ['1. Fasilitas sekolah aman (bangunan kokoh, pintu mudah dibuka, rambu jalur evakuasi & titik kumpul jelas).', '2. Manajemen bencana di sekolah (tim siaga, kotak P3K, latihan simulasi rutin).', '3. Pendidikan pengurangan risiko (siswa tahu persis apa yang dilakukan saat gempa, banjir, atau kebakaran!).'] },
    ],
    activityTitle: 'Latihan: Kesiapsiagaan Masyarakat',
    questions: [
      { text: 'Program pemerintah yang melatih warga desa secara mandiri mengenali ancaman lokal, memetakan jalur evakuasi, dan membentuk tim siaga warga bernama...', opts: ['Destana (Desa Tangguh Bencana)', 'Pasar bebas', 'Sensus ekonomi', 'Olimpiade'], ans: 0, exp: 'Masyarakat adalah penolong pertama (first responder) paling cepat saat bencana.' },
      { text: 'Manfaat utama melakukan SIMULASI EVAKUASI gempa atau kebakaran secara berkala di SMP adalah...', opts: ['Melatih refleks tenang, tertib, dan tahu rute aman titik kumpul sehingga mencegah kepanikan massal saat kejadian nyata', 'Membuat siswa takut ke sekolah', 'Menghabiskan jam pelajaran', 'Sekadar foto dokumentasi'], ans: 0, exp: 'Latihan rutin mengganti kepanikan dengan tindakan terarah.' },
      { text: 'Dalam kesiapsiagaan keluarga, kelompok rentan yang wajib diprioritaskan bantuannya saat evakuasi bencana adalah...', opts: ['Anak kecil/balita, lansia, ibu hamil, dan penyandang disabilitas', 'Orang dewasa paling kuat', 'Barang elektronik mewah', 'Perabotan berat'], ans: 0, exp: 'Inklusivitas evakuasi melindungi kelompok paling rentan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-01', subSeq: 4,
    objectives: ['Siswa mampu memahami sinergi Pentahelix (pemerintah, masyarakat, akademisi, dunia usaha, dan media) dalam penanggulangan bencana.'],
    materialTitle: 'Peran Pemerintah dan Masyarakat (Sinergi Pentahelix)',
    blocks: [
      { type: 'visual_cards', title: 'Kolaborasi 5 Unsur (Pentahelix) Kebencanaan', cards: [
        { emoji: '🏛️', label: 'Pemerintah (BNPB/BPBD/BMKG)', sub: 'Regulasi, peringatan dini, anggaran, & komando tanggap darurat' },
        { emoji: '🤝', label: 'Masyarakat & Relawan', sub: 'Kesiapsiagaan lokal, gotong royong, dan pertolongan pertama' },
        { emoji: '🎓', label: 'Akademisi & Dunia Usaha', sub: 'Riset teknologi mitigasi serta dukungan logistik CSR' },
        { emoji: '📰', label: 'Media Massa', sub: 'Menyebarkan informasi resmi cepat dan menangkal hoaks bencana!' },
      ]},
    ],
    activityTitle: 'Latihan: Peran Pemerintah & Masyarakat',
    questions: [
      { text: 'Mengapa penanggulangan bencana membutuhkan kerja sama PENTAHELIX (pemerintah, masyarakat, akademisi, dunia usaha, dan media), bukan hanya pemerintah saja?', opts: ['Karena bencana berdampak luas dan kompleks sehingga butuh kecepatan, sumber daya, pengetahuan, dan solidaritas seluruh komponen bangsa', 'Karena pemerintah tidak mau bekerja', 'Karena masyarakat tidak perlu dilibatkan', 'Agar media bisa membuat rumor'], ans: 0, exp: 'Sinergi lima unsur mempercepat mitigasi dan pemulihan.' },
      { text: 'Peran krusial MEDIA MASSA yang bertanggung jawab saat terjadi bencana gempa atau banjir adalah...', opts: ['Menyebarkan informasi peringatan dini resmi, lokasi posko/bantuan secara akurat, serta meluruskan hoaks', 'Menyebar video lama agar warga panik', 'Mengarang jumlah korban', 'Menutup akses informasi'], ans: 0, exp: 'Informasi akurat menyelamatkan nyawa dan mengarahkan bantuan tepat sasaran.' },
      { text: 'Instansi pemerintah yang menyediakan data resmi peringatan dini cuaca ekstrem, gempa bumi, dan potensi tsunami adalah...', opts: ['BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)', 'OJK', 'BPS', 'BPOM'], ans: 0, exp: 'BMKG memantau atmosfer, iklim, dan kegempaan secara real-time.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-01', subSeq: 5,
    objectives: ['Siswa mampu menjelaskan keterkaitan erat antara mitigasi bencana dengan keberhasilan pembangunan berkelanjutan.'],
    materialTitle: 'Hubungan Mitigasi Bencana & Pembangunan Berkelanjutan',
    blocks: [
      { type: 'text', text: 'Satu bencana besar tanpa mitigasi bisa menghancurkan hasil pembangunan jalan, sekolah, dan ekonomi puluhan tahun dalam hitungan menit! Oleh karena itu, investasi mitigasi (Rp1 untuk pencegahan menghemat berlipat-lipat biaya pemulihan!) adalah syarat mutlak agar pembangunan berkelanjutan tidak mundur ke belakang.' },
    ],
    activityTitle: 'Latihan: Mitigasi & Pembangunan Berkelanjutan',
    questions: [
      { text: 'Mengapa pembangunan jembatan, sekolah, atau kawasan industri yang mengabaikan analisis risiko bencana (AMDAL & peta rawan) bertentangan dengan pembangunan berkelanjutan?', opts: ['Karena rentan hancur saat bencana dan berpotensi memperparah kerusakan lingkungan bagi generasi mendatang', 'Karena biayanya lebih mahal di awal', 'Karena terlihat terlalu modern', 'Tidak ada hubungannya'], ans: 0, exp: 'Pembangunan berkelanjutan wajib tangguh bencana dan ramah lingkungan.' },
      { text: 'Prinsip "mencegah lebih baik dan jauh lebih hemat daripada memperbaiki pascabencana" menegaskan pentingnya...', opts: ['Mengintegrasikan mitigasi bencana sejak tahap perencanaan tata ruang dan pembangunan', 'Menunggu gedung roboh baru dibangun lagi', 'Mengabaikan standar bangunan', 'Menutup daerah wisata'], ans: 0, exp: 'Perencanaan tangguh melindungi aset pembangunan jangka panjang.' },
      { text: 'Pengelolaan daerah aliran sungai (DAS) terpadu dari hulu ke hilir sekaligus mendukung dua tujuan sekaligus, yaitu...', opts: ['Pengurangan risiko banjir dan ketersediaan air bersih berkelanjutan', 'Penggundulan hutan dan polusi', 'Hanya perikanan laut dalam', 'Penutupan seluruh sawah'], ans: 0, exp: 'Ekosistem sehat memberi perlindungan alami sekaligus manfaat ekonomi.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-01', subSeq: 6,
    objectives: ['Siswa mampu mengenal penerapan nyata SDGs (Tujuan Pembangunan Berkelanjutan) di lingkungan sekolah dan kehidupan remaja.'],
    materialTitle: 'Penerapan SDGs dalam Kehidupan Sehari-Hari',
    blocks: [
      { type: 'table', title: 'Contoh SDGs yang Langsung Bisa Didukung Pelajar SMP', headers: ['SDG', 'Aksi Nyata Pelajar'], rows: [
        ['SDG 4 — Pendidikan Berkualitas', 'Belajar sungguh-sungguh, aktif literasi, berbagi ilmu lewat belajar kelompok'],
        ['SDG 6 — Air Bersih & Sanitasi', 'Hemat air keran, jaga kebersihan toilet & saluran air sekolah'],
        ['SDG 11 — Kota & Permukiman Berkelanjutan', 'Tertib lingkungan, tangguh bencana, jaga fasilitas umum'],
        ['SDG 12 & 13 — Konsumsi Bertanggung Jawab & Aksi Iklim', 'Bawa tumbler/kotak bekal, habiskan makanan, pilah sampah, hemat listrik'],
      ]},
    ],
    activityTitle: 'Latihan: Penerapan SDGs',
    questions: [
      { text: 'Program sekolah membawa botol minum isi ulang (tumbler), memilah sampah organik-anorganik, dan menghemat listrik berkontribusi langsung pada SDGs nomor...', opts: ['SDG 12 (Konsumsi & Produksi Bertanggung Jawab) dan SDG 13 (Penanganan Perubahan Iklim)', 'Hanya bidang luar angkasa', 'Tidak terkait SDGs', 'SDG perdagangan senjata'], ans: 0, exp: 'Aksi hijau sekolah sejalan dengan agenda global SDGs 2030.' },
      { text: 'Semangat utama SDGs "Leave No One Behind" (Tidak Meninggalkan Satu Orang Pun) bermakna pembangunan harus...', opts: ['Inklusif dan adil bagi semua kalangan, termasuk masyarakat desa, perempuan, anak-anak, dan penyandang disabilitas', 'Hanya untuk kota besar', 'Hanya menguntungkan segelintir orang kaya', 'Mengabaikan pendidikan'], ans: 0, exp: 'Keadilan sosial dan inklusivitas adalah jantung SDGs.' },
      { text: 'Menjaga kelestarian hutan mangrove dan tidak membuang sampah plastik ke sungai yang bermuara ke laut mendukung...', opts: ['SDG 14 (Ekosistem Lautan) dan SDG 15 (Ekosistem Daratan)', 'Pencemaran air', 'Deforestasi', 'Konsumerisme'], ans: 0, exp: 'Sampah sungai bermuara ke laut sehingga pengelolaan sampah darat menyelamatkan laut.' },
    ],
  },

  // BAB 2: EKONOMI DIGITAL DAN PERTUMBUHAN EKONOMI (7 sub)
  {
    topicCode: 'IPS-SMP9-02', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian ekonomi digital dan perannya sebagai motor baru pertumbuhan ekonomi Indonesia.'],
    materialTitle: 'Pengertian Ekonomi Digital',
    blocks: [
      { type: 'text', text: 'Ekonomi digital adalah seluruh aktivitas ekonomi (produksi, distribusi, pemasaran, transaksi, dan layanan keuangan) yang bertumpu pada teknologi komputasi digital, internet, data, dan platform daring. Indonesia menjadi pasar ekonomi digital terbesar di Asia Tenggara berkat tingginya pengguna internet dan pertumbuhan UMKM go-digital!' },
    ],
    activityTitle: 'Latihan: Pengertian Ekonomi Digital',
    questions: [
      { text: 'Ciri utama kegiatan EKONOMI DIGITAL dibandingkan ekonomi konvensional semata adalah...', opts: ['Memanfaatkan jaringan internet, platform daring, data digital, dan sistem pembayaran elektronik untuk menjangkau pasar luas secara cepat', 'Hanya memakai sistem barter', 'Transaksi wajib tatap muka di 1 desa saja', 'Tidak melibatkan uang'], ans: 0, exp: 'Konektivitas digital memangkas jarak, waktu, dan biaya transaksi.' },
      { text: 'Contoh nyata sektor ekonomi digital yang sangat akrab di kehidupan harian masyarakat Indonesia adalah...', opts: ['Transportasi online, marketplace e-commerce, layanan pesan-antar makanan, dan pembayaran QRIS', 'Menukar garam dengan beras tanpa uang', 'Menulis surat pos manual', 'Menjual di pasar tanpa pencatatan'], ans: 0, exp: 'Platform digital menghubungkan penyedia jasa/produk langsung dengan konsumen.' },
      { text: 'Mengapa pertumbuhan ekonomi digital mampu mendorong pertumbuhan ekonomi nasional (PDB)?', opts: ['Meningkatkan efisiensi bisnis, membuka lapangan kerja baru (kurir, kreator, programmer), dan memperluas omzet UMKM ke seluruh Nusantara', 'Menutup seluruh toko UMKM', 'Mengurangi produksi', 'Menghambat distribusi'], ans: 0, exp: 'Digitalisasi mempercepat perputaran transaksi ekonomi.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-02', subSeq: 2,
    objectives: ['Siswa mampu menganalisis peran perkembangan teknologi (internet cepat, smartphone, cloud, AI, logistik) dalam transformasi kegiatan ekonomi.'],
    materialTitle: 'Perkembangan Teknologi dalam Kegiatan Ekonomi',
    blocks: [
      { type: 'text', text: 'Teknologi mengubah ketiga kegiatan ekonomi sekaligus: PRODUKSI (mesin otomasi, desain digital, konten kreatif), DISTRIBUSI (pelacakan resi kurir real-time, gudang pintar), dan KONSUMSI (perbandingan harga instan, ulasan pembeli, belanja dari rumah).' },
    ],
    activityTitle: 'Latihan: Teknologi dalam Ekonomi',
    questions: [
      { text: 'Kemampuan pembeli melacak posisi paket pengiriman secara real-time melalui nomor resi di aplikasi ponsel menunjukkan dampak teknologi pada kegiatan...', opts: ['Distribusi / logistik', 'Konsumsi makanan', 'Pertambangan', 'Perkebunan'], ans: 0, exp: 'Sistem pelacakan digital meningkatkan transparansi dan kecepatan distribusi.' },
      { text: 'Pemanfaatan media sosial (video pendek, live streaming) oleh penjual kuliner atau kerajinan lokal berfungsi menggantikan sebagian besar biaya...', opts: ['Promosi dan sewa toko fisik di lokasi mahal', 'Bahan baku utama', 'Kualitas produk', 'Kejujuran penjual'], ans: 0, exp: 'Pemasaran digital jauh lebih hemat biaya dan terukur target audiensnya.' },
      { text: 'Kesenjangan akses internet dan literasi teknologi antara kota besar dan daerah terpencil disebut...', opts: ['Kesenjangan digital (digital divide)', 'Inflasi', 'Surplus dagang', 'Monopoli'], ans: 0, exp: 'Pemerataan infrastruktur internet penting agar seluruh daerah menikmati manfaat ekonomi digital.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-02', subSeq: 3,
    objectives: ['Siswa mampu memahami konsep perdagangan elektronik (e-commerce), model transaksi (B2C, C2C, B2B), serta etika jual beli daring.'],
    materialTitle: 'Perdagangan Elektronik (E-Commerce)',
    blocks: [
      { type: 'table', title: 'Model Utama E-Commerce', headers: ['Model', 'Pelaku', 'Contoh'], rows: [
        ['B2C (Business to Consumer)', 'Perusahaan/toko resmi → Konsumen akhir', 'Official store merek sepatu menjual langsung ke pembeli'],
        ['C2C (Consumer to Consumer)', 'Individu → Individu lewat platform perantara', 'Warga menjual sepeda bekas atau karya tangan di marketplace'],
        ['B2B (Business to Business)', 'Perusahaan → Perusahaan lain', 'Pemasok kemasan memasok ribuan kardus ke pabrik makanan'],
      ]},
    ],
    activityTitle: 'Latihan: E-Commerce',
    questions: [
      { text: 'Seorang siswa menjual kembali buku komik koleksi pribadinya kepada pembeli lain melalui platform marketplace daring. Model transaksi ini adalah...', opts: ['C2C (Consumer to Consumer)', 'B2B', 'G2G', 'Monopoli'], ans: 0, exp: 'Transaksi antarkonsumen/individu difasilitasi platform.' },
      { text: 'Fungsi sistem REKENING BERSAMA (escrow) pada marketplace resmi saat kita berbelanja online adalah...', opts: ['Menahan dana pembeli secara aman dan baru meneruskannya ke penjual setelah barang diterima sesuai pesanan', 'Mengambil uang tanpa kirim barang', 'Menghapus ulasan pembeli', 'Menaikkan ongkos kirim'], ans: 0, exp: 'Escrow melindungi pembeli dari penipuan transfer langsung ke rekening tak dikenal.' },
      { text: 'Tips paling bijak bagi pembeli sebelum menekan tombol "Bayar" di e-commerce adalah...', opts: ['Mengecek reputasi/rating toko, membaca ulasan + foto asli pembeli sebelumnya, serta memeriksa spesifikasi & ukuran barang', 'Langsung membeli produk termurah tanpa baca deskripsi', 'Mengirim kode OTP ke penjual', 'Mengabaikan ulasan bintang 1'], ans: 0, exp: 'Cermat membaca ulasan dan deskripsi mencegah kekecewaan dan penipuan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-02', subSeq: 4,
    objectives: ['Siswa mampu memahami peran pembayaran digital (QRIS, e-wallet, mobile banking, BI-FAST) dan prinsip keamanan bertransaksi.'],
    materialTitle: 'Pembayaran Digital dan Keamanannya',
    blocks: [
      { type: 'text', text: 'Pembayaran digital (cashless) lewat QRIS, dompet digital, dan transfer BI-FAST mempercepat transaksi, mendukung inklusi keuangan UMKM, dan mengurangi biaya cetak uang tunai. Namun kewaspadaan siber tetap wajib: cek nama penerima sebelum bayar QRIS, aktifkan verifikasi 2 langkah, dan jaga kerahasiaan PIN/OTP!' },
    ],
    activityTitle: 'Latihan: Pembayaran Digital',
    questions: [
      { text: 'Saat hendak membayar belanjaan dengan memindai kode QRIS di meja kasir, langkah verifikasi sederhana agar terhindar dari modus tempel QRIS palsu adalah...', opts: ['Memastikan NAMA TOKO/MERCHANT yang muncul di layar HP cocok dengan toko tempat kita berbelanja sebelum memasukkan PIN', 'Langsung tekan bayar tanpa melihat nama penerima', 'Memberikan HP ke orang asing', 'Menulis PIN di kertas kasir'], ans: 0, exp: 'Mengecek nama merchant mencegah penipuan stiker QRIS palsu.' },
      { text: 'Layanan infrastruktur transfer antarbank real-time 24 jam berbiaya sangat murah yang dikembangkan Bank Indonesia bernama...', opts: ['BI-FAST', 'Barter', 'Cek pos', 'Wesel kertas'], ans: 0, exp: 'BI-FAST memperlancar arus pembayaran ritel nasional.' },
      { text: 'Manfaat gerakan masyarakat nontunai (cashless society) bagi pencatatan keuangan UMKM adalah...', opts: ['Riwayat pemasukan tercatat otomatis sehingga memudahkan evaluasi usaha dan pengajuan kredit perbankan', 'Tidak ada catatan penjualan', 'Pelanggan sulit membayar', 'Uang langsung hilang'], ans: 0, exp: 'Riwayat transaksi digital meningkatkan kredibilitas keuangan UMKM.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-02', subSeq: 5,
    objectives: ['Siswa mampu mengenali ragam peluang usaha dan profesi masa depan di ekonomi digital (UMKM online, ekonomi kreatif, konten edukatif, desain, coding).'],
    materialTitle: 'Peluang Usaha dan Profesi Era Digital',
    blocks: [
      { type: 'visual_cards', title: 'Peluang Kreatif Generasi Muda di Ekonomi Digital', cards: [
        { emoji: '🎨', label: 'Desain Grafis & UI/UX', sub: 'Membuat kemasan UMKM, logo, poster, dan tampilan aplikasi' },
        { emoji: '💻', label: 'Pemrograman & Web/App', sub: 'Membangun aplikasi, toko online, dan solusi otomatisasi bisnis' },
        { emoji: '🎬', label: 'Kreator Konten Edukatif', sub: 'Promosi produk lokal, video belajar, & fotografi produk UMKM' },
        { emoji: '📦', label: 'Digitalisasi Produk Lokal', sub: 'Memasarkan kuliner/kerajinan daerah (seperti UMKM Gresik) ke pasar nasional!' },
      ]},
    ],
    activityTitle: 'Latihan: Peluang Usaha Digital',
    questions: [
      { text: 'Bentuk kolaborasi positif siswa/pemuda daerah membantu orang tua atau tetangga pelaku UMKM tradisional memasuki ekonomi digital adalah...', opts: ['Membantu memotret produk dengan rapi, membuat katalog/toko online, dan mendaftarkan pembayaran QRIS', 'Menyuruh menutup warungnya', 'Menjual produk tiruan', 'Memakai akun tanpa izin'], ans: 0, exp: 'Keterampilan digital generasi muda dapat langsung mengungkit omzet UMKM keluarga.' },
      { text: 'Faktor terpenting yang menentukan sebuah toko online bisa bertahan jangka panjang (bukan sekadar viral sesaat) adalah...', opts: ['Kualitas produk yang jujur sesuai foto, pelayanan ramah, kemasan aman, dan kepercayaan pelanggan', 'Foto palsu yang jauh berbeda dari barang asli', 'Mengirim barang rusak', 'Menghapus keluhan pembeli'], ans: 0, exp: 'Kepercayaan (trust) dan mutu produk adalah modal utama bisnis daring.' },
      { text: 'Sektor ekonomi yang mengandalkan ide, kreativitas, desain, musik, aplikasi, dan karya intelektual manusia disebut...', opts: ['Ekonomi kreatif', 'Ekonomi barter', 'Ekonomi ekstraktif', 'Ekonomi tertutup'], ans: 0, exp: 'Ekonomi kreatif bernilai tambah tinggi dan sangat erat dengan platform digital.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-02', subSeq: 6,
    objectives: ['Siswa mampu memahami peran pemerintah (infrastruktur internet, regulasi perlindungan data & UMKM, literasi digital) dan masyarakat dalam ekosistem digital.'],
    materialTitle: 'Peran Masyarakat dan Pemerintah dalam Ekonomi Digital',
    blocks: [
      { type: 'text', text: 'Pemerintah berperan membangun tulang punggung internet hingga daerah 3T (misal jaringan serat optik & satelit), melindungi data pribadi (UU PDP), mengatur persaingan usaha sehat agar UMKM lokal tidak tergilas barang impor dumping, serta memberi pelatihan digital. Masyarakat berperan sebagai pengguna cakap, jujur, dan pendukung produk dalam negeri!' },
    ],
    activityTitle: 'Latihan: Peran Pemerintah & Masyarakat',
    questions: [
      { text: 'Mengapa pemerintah menerbitkan Undang-Undang Perlindungan Data Pribadi (UU PDP) di era ekonomi digital?', opts: ['Melindungi data sensitif warga (NIK, rekening, nomor telepon) dari kebocoran, penyalahgunaan, dan penipuan digital', 'Melarang warga memakai internet', 'Menghapus semua e-commerce', 'Mengharuskan data disebar luas'], ans: 0, exp: 'Keamanan data pribadi membangun rasa aman bertransaksi digital.' },
      { text: 'Peran pemerintah dalam melindungi UMKM lokal di platform perdagangan digital antara lain...', opts: ['Mendorong pelatihan UMKM go-digital, mengatur arus barang impor ilegal/predatory pricing, dan mengampanyekan Bangga Buatan Indonesia', 'Melarang UMKM berjualan online', 'Menutup akses internet desa', 'Membebaskan barang ilegal masuk'], ans: 0, exp: 'Regulasi adil menciptakan iklim usaha sehat bagi UMKM nasional.' },
      { text: 'Peran konsumen Indonesia yang bijak dalam ekosistem e-commerce adalah...', opts: ['Memberi ulasan jujur, mengutamakan produk lokal bermutu, dan tidak melakukan pembatalan COD secara curang tanpa alasan jelas', 'Memesan COD fiktif untuk mengerjai kurir', 'Menyebar ulasan palsu', 'Membeli barang bajakan'], ans: 0, exp: 'Etika konsumen menjaga keberlanjutan ekonomi digital yang sehat.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-02', subSeq: 7,
    objectives: ['Siswa mampu mengevaluasi manfaat dan tantangan ekonomi digital (keamanan siber, belanja impulsif, persaingan ketat, perubahan jenis pekerjaan).'],
    materialTitle: 'Manfaat dan Tantangan Ekonomi Digital',
    blocks: [
      { type: 'table', title: 'Sisi Positif vs Tantangan Ekonomi Digital', headers: ['Manfaat', 'Tantangan & Cara Menghadapi'], rows: [
        ['Akses pasar luas 24 jam, biaya operasional efisien, inklusi keuangan', 'Penipuan siber/phishing → tingkatkan literasi keamanan digital!'],
        ['Muncul banyak profesi kreatif & teknologi baru', 'Belanja impulsif (FOMO promo/paylater) → tetap disiplin anggaran!'],
        ['Kemudahan membandingkan harga & kualitas', 'Sebagian pekerjaan rutin tergantikan otomasi → wajib terus belajar (upskilling)!'],
      ]},
    ],
    activityTitle: 'Latihan: Manfaat & Tantangan Ekonomi Digital',
    questions: [
      { text: 'Kemudahan promo tanggal kembar, flash sale, dan fitur paylater di aplikasi belanja online sering memicu tantangan perilaku berupa...', opts: ['Belanja impulsif (membeli barang tidak dibutuhkan demi diskon) dan risiko utang konsumtif', 'Tabungan otomatis naik', 'Tidak ada risiko apa pun', 'Barang menjadi gratis'], ans: 0, exp: 'Pengendalian diri dan cek daftar kebutuhan sangat penting saat melihat promo digital.' },
      { text: 'Ketika perkembangan otomasi dan AI mulai menggantikan beberapa pekerjaan administratif rutin, strategi terbaik pelajar SMP mempersiapkan masa depan adalah...', opts: ['Mengasah berpikir kritis, kreativitas, literasi teknologi, komunikasi, dan karakter belajar sepanjang hayat', 'Berhenti sekolah', 'Menolak belajar komputer', 'Hanya menghafal tanpa memahami'], ans: 0, exp: 'Keterampilan adaptif dan kreativitas manusia tetap paling dicari di era digital.' },
      { text: 'Manfaat ekonomi digital yang paling dirasakan oleh konsumen di daerah non-metropolitan adalah...', opts: ['Bisa membeli buku, alat belajar, atau kebutuhan khusus dari kota lain tanpa harus bepergian jauh', 'Harga ongkos selalu nol', 'Semua toko fisik dilarang buka', 'Tidak butuh internet'], ans: 0, exp: 'E-commerce membuka akses produk merata ke berbagai daerah.' },
    ],
  },

  // BAB 3: POTENSI INDONESIA MENJADI NEGARA MAJU (7 sub)
  {
    topicCode: 'IPS-SMP9-03', subSeq: 1,
    objectives: ['Siswa mampu menganalisis kekayaan SDA Indonesia (maritim, agraris, tambang, energi terbarukan) dan strategi hilirisasi bernilai tambah.'],
    materialTitle: 'Potensi Sumber Daya Alam Indonesia & Hilirisasi',
    blocks: [
      { type: 'text', text: 'Indonesia dianugerahi SDA luar biasa: negara kepulauan maritim raksasa (2/3 wilayah laut), tanah vulkanik subur, cadangan nikel-timah-tembaga-bauksit besar, dan potensi energi surya/geothermal melimpah. Kuncinya: JANGAN hanya menjual bahan mentah murah, melainkan kelola lewat HILIRISASI industri berkelanjutan!' },
    ],
    activityTitle: 'Latihan: Potensi SDA Indonesia',
    questions: [
      { text: 'Negara yang hanya mengandalkan ekspor bahan mentah (tanpa pengolahan industri) sulit menjadi negara maju karena...', opts: ['Harga bahan mentah mudah jatuh, nilai tambahnya kecil, dan keuntungan terbesar justru dinikmati negara pengolahnya', 'Bahan mentah harganya paling mahal di dunia', 'Industri tidak membuka lapangan kerja', 'Tidak ada alasannya'], ans: 0, exp: 'Hilirisasi mengubah nikel mentah menjadi baterai kendaraan listrik bernilai berkali lipat.' },
      { text: 'Potensi ekonomi kelautan Indonesia (ekonomi biru / blue economy) meliputi...', opts: ['Perikanan tangkap & budidaya berkelanjutan, bioteknologi laut, pelabuhan logistik, energi arus laut, dan wisata bahari', 'Hanya pertambangan batu bara darat', 'Hanya perkebunan pegunungan', 'Penangkapan ikan pakai bom'], ans: 0, exp: 'Sebagai negara maritim, ekonomi biru adalah kekuatan strategis Indonesia.' },
      { text: 'Pengelolaan SDA menuju negara maju harus dibarengi prinsip keberlanjutan, artinya...', opts: ['Mengolah SDA secara efisien sambil memulihkan lingkungan (reklamasi tambang, jaga hutan & laut) agar tak habis rusak', 'Mengeruk habis dalam 5 tahun', 'Membuang limbah ke sungai', 'Mengabaikan masyarakat lokal'], ans: 0, exp: 'Pertumbuhan ekonomi tanpa merusak lingkungan menjamin kemakmuran jangka panjang.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-03', subSeq: 2,
    objectives: ['Siswa mampu memahami konsep Bonus Demografi dan kunci peningkatan kualitas SDM (pendidikan, kesehatan, penguasaan IPTEK, karakter).'],
    materialTitle: 'Kualitas SDM dan Bonus Demografi Menuju Indonesia Emas 2045',
    blocks: [
      { type: 'formula', name: 'Bonus Demografi Indonesia (~2020–2040)', expression: 'Penduduk Usia Produktif (15–64 tahun) > 65–70% Total Penduduk!', note: 'Bonus demografi HANYA menjadi berkah jika generasi mudanya SEHAT (bebas stunting), BERPENDIDIKAN tinggi, TERAMPIL IPTEK, dan BERKARAKTER! Jika tidak terampil, justru berisiko menjadi beban pengangguran!' },
    ],
    activityTitle: 'Latihan: Kualitas SDM & Bonus Demografi',
    questions: [
      { text: 'Yang dimaksud dengan BONUS DEMOGRAFI yang sedang dialami Indonesia adalah kondisi ketika...', opts: ['Proporsi penduduk usia produktif (15–64 tahun) jauh lebih besar dibandingkan usia nonproduktif (anak & lansia)', 'Seluruh penduduk berusia di atas 70 tahun', 'Jumlah penduduk menjadi nol', 'Semua penduduk tinggal di satu kota'], ans: 0, exp: 'Rasio ketergantungan rendah memberi peluang emas percepatan ekonomi.' },
      { text: 'Indikator internasional utama yang mengukur kualitas SDM suatu negara dari 3 dimensi (kesehatan/usia harapan hidup, pendidikan, dan standar hidup layak) adalah...', opts: ['IPM (Indeks Pembangunan Manusia / HDI)', 'PDB saja', 'Jumlah kendaraan', 'Luas lautan'], ans: 0, exp: 'IPM mengukur kualitas hidup manusia, bukan sekadar total kekayaan uang.' },
      { text: 'Syarat mutlak agar Bonus Demografi benar-benar mengantarkan Indonesia menjadi negara maju pada tahun 2045 adalah...', opts: ['Investasi besar pada mutu pendidikan, gizi/kesehatan bebas stunting, penguasaan IPTEK, dan penciptaan lapangan kerja berkualitas', 'Membiarkan angka putus sekolah tinggi', 'Mengabaikan kesehatan anak', 'Mengandalkan upah buruh murah selamanya'], ans: 0, exp: 'SDM unggul dan inovatif adalah ciri utama negara maju.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-03', subSeq: 3,
    objectives: ['Siswa mampu memahami peran industrialisasi, riset inovasi, dan penguasaan teknologi (manufaktur, semikonduktor, energi hijau) bagi negara maju.'],
    materialTitle: 'Perkembangan Teknologi dan Industri',
    blocks: [
      { type: 'text', text: 'Negara maju (seperti Jepang, Korea Selatan, Jerman) memiliki sektor INDUSTRI MANUFAKTUR, RISET, dan JASA BERNILAI TINGGI yang kuat. Kawasan industri strategis di Indonesia (termasuk kawasan industri dan pelabuhan terintegrasi di Gresik dan Jawa Timur!) berperan mendorong penguasaan teknologi produksi dan ekspor bernilai tambah.' },
    ],
    activityTitle: 'Latihan: Teknologi & Industri',
    questions: [
      { text: 'Mengapa penguasaan riset dan inovasi teknologi menjadi pembeda tajam antara negara maju dan negara berkembang?', opts: ['Negara maju menciptakan dan memiliki paten teknologi/produk bernilai tinggi, bukan sekadar menjadi konsumen pasar negara lain', 'Negara maju tidak pernah melakukan riset', 'Negara berkembang tidak boleh punya pabrik', 'Teknologi tidak berpengaruh pada ekonomi'], ans: 0, exp: 'Inovasi menciptakan daya saing global dan pendapatan per kapita tinggi.' },
      { text: 'Keberadaan kawasan industri modern yang terhubung pelabuhan (seperti di wilayah pesisir Jawa Timur) berdampak positif bagi daerah berupa...', opts: ['Menarik investasi, membuka lapangan kerja terampil, mendorong alih teknologi, dan menggerakkan usaha penunjang lokal', 'Menghapus kebutuhan pendidikan', 'Membuat semua produk jadi gratis', 'Menutup akses jalan'], ans: 0, exp: 'Industrialisasi yang terkelola ramah lingkungan menjadi mesin pertumbuhan ekonomi.' },
      { text: 'Sektor industri yang mengolah bahan baku menjadi barang jadi/setengah jadi secara massal (misal otomotif, elektronik, pangan olahan, pupuk, smelter) disebut industri...', opts: ['Manufaktur', 'Ekstraktif murni', 'Agraris tradisional', 'Barter'], ans: 0, exp: 'Industri manufaktur menciptakan efek berganda (multiplier effect) besar.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-03', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan pentingnya infrastruktur dan konektivitas (jalan tol, rel kereta, tol laut, pelabuhan, bandara, jaringan internet) bagi pemerataan ekonomi.'],
    materialTitle: 'Infrastruktur dan Konektivitas Nusantara',
    blocks: [
      { type: 'text', text: 'Sebagai negara kepulauan 17.000+ pulau, KONEKTIVITAS adalah urat nadi ekonomi! Jalan tol, kereta api, bandara, pelabuhan, program Tol Laut (pelayaran logistik terjadwal antarpulau), serta jaringan internet cepat memangkas biaya logistik sehingga harga barang di Indonesia Timur tidak lagi jauh lebih mahal dari Jawa!' },
    ],
    activityTitle: 'Latihan: Infrastruktur & Konektivitas',
    questions: [
      { text: 'Tujuan utama program konektivitas maritim "Tol Laut" (kapal kargo terjadwal menghubungkan pelabuhan barat hingga timur Indonesia) adalah...', opts: ['Menurunkan biaya logistik antarpulau dan memperkecil kesenjangan harga barang kebutuhan pokok di wilayah 3T/timur Indonesia', 'Membangun jalan aspal di atas samudra', 'Melarang kapal nelayan', 'Menutup pelabuhan lokal'], ans: 0, exp: 'Tol Laut bukan jalan beton di laut, melainkan sistem pelayaran logistik reguler antarpulau.' },
      { text: 'Jika jalan penghubung sentra pertanian ke pasar kota rusak parah, dampak ekonominya adalah...', opts: ['Biaya angkut membengkak, hasil panen mudah busuk di perjalanan, dan pendapatan petani tertekan', 'Harga panen petani makin tinggi otomatis', 'Pengiriman makin cepat', 'Tidak ada dampak'], ans: 0, exp: 'Infrastruktur transportasi yang baik menekan biaya logistik dan menjaga kualitas barang.' },
      { text: 'Selain infrastruktur fisik (jalan & pelabuhan), infrastruktur nonfisik/digital yang sangat krusial di abad ke-21 adalah...', opts: ['Jaringan internet broadband merata dan pasokan listrik andal', 'Hanya papan reklame', 'Hanya pos surat manual', 'Tidak diperlukan'], ans: 0, exp: 'Konektivitas digital menghubungkan pendidikan, layanan publik, dan ekonomi seluruh pelosok.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-03', subSeq: 5,
    objectives: ['Siswa mampu membedakan pertumbuhan ekonomi (kuantitatif: kenaikan PDB) dan pembangunan ekonomi (kualitatif: pemerataan & kesejahteraan).'],
    materialTitle: 'Pertumbuhan Ekonomi vs Pembangunan Ekonomi',
    blocks: [
      { type: 'table', title: 'Pertumbuhan Ekonomi vs Pembangunan Ekonomi', headers: ['Aspek', 'Pertumbuhan Ekonomi', 'Pembangunan Ekonomi'], rows: [
        ['Fokus', 'KUANTITATIF — kenaikan output barang/jasa (PDB / GNP)', 'KUALITATIF + KUANTITATIF — pemerataan pendapatan, penurunan kemiskinan, pendidikan, kesehatan'],
        ['Cakupan', 'Bisa tumbuh tinggi meski kekayaan hanya terpusat pada segelintir orang', 'Memastikan hasil pertumbuhan dinikmati secara ADIL oleh seluruh rakyat!'],
      ]},
    ],
    activityTitle: 'Latihan: Pertumbuhan & Pembangunan Ekonomi',
    questions: [
      { text: 'Perbedaan mendasar antara PERTUMBUHAN ekonomi dan PEMBANGUNAN ekonomi adalah...', opts: ['Pertumbuhan fokus pada kenaikan angka output/PDB, sedangkan pembangunan juga mencakup pemerataan kesejahteraan, pendidikan, kesehatan, dan perubahan struktur ekonomi', 'Keduanya persis sama tanpa beda', 'Pembangunan tidak peduli kesejahteraan', 'Pertumbuhan hanya untuk desa'], ans: 0, exp: 'Pembangunan ekonomi menuntut kualitas dan pemerataan, bukan sekadar angka PDB.' },
      { text: 'Salah satu kriteria utama sebuah negara dikategorikan sebagai NEGARA MAJU oleh Bank Dunia adalah...', opts: ['Pendapatan per kapita tinggi, IPM sangat tinggi, penguasaan IPTEK kuat, dan tingkat kemiskinan sangat rendah', 'Jumlah penduduk paling banyak saja', 'Luas hutan paling luas saja', 'Banyaknya gedung tua'], ans: 0, exp: 'Negara maju unggul pada pendapatan per kapita, mutu SDM, dan teknologi.' },
      { text: 'Indikator untuk mengukur tingkat ketimpangan distribusi pendapatan di masyarakat (semakin mendekati 0 makin merata) disebut...', opts: ['Rasio Gini (Gini Ratio)', 'Hukum Ohm', 'Skala Richter', 'Indeks UV'], ans: 0, exp: 'Rasio Gini memantau apakah pembangunan berjalan merata atau timpang.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-03', subSeq: 6,
    objectives: ['Siswa mampu menganalisis tantangan Indonesia menuju negara maju (jebakan pendapatan menengah, korupsi, ketimpangan, literasi, krisis iklim).'],
    materialTitle: 'Tantangan Pembangunan Menuju Negara Maju',
    blocks: [
      { type: 'list', title: '5 Tantangan Utama Menuju Indonesia Emas 2045', items: ['1. Middle-Income Trap (jebakan negara berpendapatan menengah — sulit naik kelas jika produktivitas & inovasi mandek).', '2. Pemerataan kualitas pendidikan & kesehatan antardaerah.', '3. Pemberantasan korupsi dan penegakan hukum yang adil & transparan.', '4. Penguasaan sains-teknologi dan efisiensi logistik.', '5. Menghadapi perubahan iklim dan menjaga kelestarian lingkungan!'] },
    ],
    activityTitle: 'Latihan: Tantangan Pembangunan',
    questions: [
      { text: 'Kondisi ketika suatu negara berkembang berhasil mencapai pendapatan menengah namun kesulitan melompat naik menjadi negara maju berpendapatan tinggi disebut...', opts: ['Middle-Income Trap (jebakan pendapatan menengah)', 'Bonus demografi', 'Surplus neraca', 'Akulturasi'], ans: 0, exp: 'Keluar dari middle-income trap memerlukan lonjakan kualitas SDM, inovasi, dan hilirisasi.' },
      { text: 'Mengapa praktik KORUPSI menjadi penghambat besar bagi kemajuan suatu bangsa?', opts: ['Merampas anggaran pembangunan (sekolah, jalan, rumah sakit), merusak keadilan hukum, dan menurunkan kepercayaan investor', 'Mempercepat pembangunan jalan', 'Meningkatkan kejujuran', 'Tidak berdampak pada rakyat'], ans: 0, exp: 'Integritas dan tata kelola bersih adalah fondasi negara maju.' },
      { text: 'Tantangan mutu SDM Indonesia yang harus segera diatasi sejak dini di tingkat keluarga dan sekolah antara lain...', opts: ['Mencegah stunting gizi anak serta meningkatkan literasi membaca, numerasi, dan nalar kritis pelajar', 'Mengurangi jam membaca buku', 'Menghapus pelajaran sains', 'Membatasi kreativitas siswa'], ans: 0, exp: 'Gizi sehat + literasi-numerasi kuat mencetak generasi emas berdaya saing global.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-03', subSeq: 7,
    objectives: ['Siswa mampu merumuskan peran sinergis pemerintah dan kontribusi konkret pelajar SMP dalam pembangunan nasional.'],
    materialTitle: 'Peran Masyarakat & Pelajar dalam Pembangunan Nasional',
    blocks: [
      { type: 'tip', text: 'Pada tahun 2045 (100 tahun Kemerdekaan RI), kamu yang sekarang duduk di kelas 9 SMP akan berusia sekitar 33–34 tahun — tepat di puncak usia produktif pemimpin, insinyur, guru, dokter, dan wirausahawan Indonesia! Masa depan Indonesia 2045 dimulai dari disiplin belajarmu hari ini!' },
    ],
    activityTitle: 'Latihan: Peran Pembangunan Nasional',
    questions: [
      { text: 'Kewajiban warga negara dewasa yang berpenghasilan untuk membiayai pembangunan jalan, sekolah negeri, beasiswa, dan fasilitas kesehatan publik adalah...', opts: ['Membayar pajak secara jujur dan tepat waktu', 'Menghindari pajak', 'Merusak fasilitas umum', 'Menunggu bantuan asing'], ans: 0, exp: 'Pajak adalah sumber utama APBN untuk membiayai pelayanan dan pembangunan publik.' },
      { text: 'Kontribusi PALING NYATA yang dapat dilakukan siswa SMP sekarang untuk menyiapkan Indonesia menjadi negara maju 2045 adalah...', opts: ['Belajar tekun, melatih literasi & integritas antinyontek, menjaga kesehatan/lingkungan, dan mengasah kreativitas', 'Menunggu dewasa dulu baru mau belajar', 'Merusak fasilitas sekolah', 'Acuh pada masa depan bangsa'], ans: 0, exp: 'Generasi SMP hari ini adalah pemegang kendali Indonesia Emas 2045.' },
      { text: 'Mengapa kerja sama antara pemerintah yang bersih dan masyarakat yang aktif-kritis sangat menentukan keberhasilan pembangunan?', opts: ['Karena pemerintah butuh dukungan, partisipasi, serta pengawasan publik yang sehat agar kebijakan tepat sasaran', 'Karena masyarakat tidak perlu berpartisipasi', 'Karena pemerintah bisa bekerja sendirian tanpa rakyat', 'Agar tidak ada aturan'], ans: 0, exp: 'Partisipasi aktif warga menciptakan pembangunan inklusif dan akuntabel.' },
    ],
  },

  // BAB 4: INTEGRASI BANGSA DAN KEBINEKAAN (8 sub)
  {
    topicCode: 'IPS-SMP9-04', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian integrasi bangsa/nasional secara politis dan antropologis serta syarat terwujudnya.'],
    materialTitle: 'Pengertian Integrasi Bangsa',
    blocks: [
      { type: 'text', text: 'Integrasi bangsa (integrasi nasional) adalah proses penyatuan berbagai kelompok masyarakat yang berbeda latar belakang suku, agama, ras, bahasa daerah, dan wilayah menjadi satu kesatuan bangsa yang utuh dan harmonis dalam bingkai NKRI berdasarkan Pancasila dan UUD 1945.' },
    ],
    activityTitle: 'Latihan: Integrasi Bangsa',
    questions: [
      { text: 'Makna paling tepat dari INTEGRASI NASIONAL bagi Indonesia yang majemuk adalah...', opts: ['Penyatuan berbagai keragaman suku, budaya, agama, dan daerah menjadi satu bangsa yang rukun tanpa menghilangkan ciri khas positif masing-masing', 'Menghapus semua bahasa daerah agar jadi seragam', 'Memisahkan diri menurut suku', 'Menganggap satu daerah paling unggul'], ans: 0, exp: 'Bhinneka Tunggal Ika: bersatu dalam keberagaman, bukan menyeragamkan paksa.' },
      { text: 'Syarat utama keberhasilan integrasi sosial dalam masyarakat majemuk menurut sosiologi antara lain...', opts: ['Anggota masyarakat merasa saling membutuhkan, berhasil menyepakati norma/nilai bersama (Pancasila), dan menaatinya secara konsisten', 'Semua orang harus bersuku sama', 'Tidak boleh ada perbedaan pendapat', 'Memaksakan satu tradisi ke semua orang'], ans: 0, exp: 'Konsensus nilai bersama dan rasa saling membutuhkan merekatkan bangsa.' },
      { text: 'Kebalikan dari integrasi (proses perpecahan/retaknya persatuan sosial akibat konflik tak terkendali) disebut...', opts: ['Disintegrasi', 'Akulturasi', 'Toleransi', 'Gotong royong'], ans: 0, exp: 'Disintegrasi mengancam keutuhan masyarakat dan negara.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-04', subSeq: 2,
    objectives: ['Siswa mampu menghargai kekayaan keberagaman suku, agama, ras, dan budaya Indonesia sebagai anugerah sekaligus kekuatan bangsa.'],
    materialTitle: 'Keberagaman Suku, Agama, Ras, dan Budaya (SARA)',
    blocks: [
      { type: 'text', text: 'Menurut data BPS, Indonesia memiliki lebih dari 1.300 kelompok etnik/suku, ratusan bahasa daerah, serta 6 agama resmi (Islam, Kristen Protestan, Katolik, Hindu, Buddha, Khonghucu) dan penghayat kepercayaan. Keberagaman ini adalah realitas sejarah dan geografis kepulauan yang menjadi kekayaan peradaban Indonesia!' },
    ],
    activityTitle: 'Latihan: Keberagaman SARA',
    questions: [
      { text: 'Faktor geografis utama yang menyebabkan Indonesia memiliki keberagaman suku, bahasa daerah, dan budaya yang luar biasa kaya adalah...', opts: ['Bentuk negara kepulauan yang luas, perbedaan kondisi alam (pesisir-pegunungan), serta posisi silang jalur pelayaran dunia', 'Semua pulau menyatu datar', 'Tidak pernah berinteraksi dengan bangsa lain', 'Suhu sama di seluruh dunia'], ans: 0, exp: 'Isolasi geografis antarpulau + interaksi jalur maritim melahirkan ragam budaya Nusantara.' },
      { text: 'Semboyan negara "Bhinneka Tunggal Ika" yang terdapat pada lambang Garuda Pancasila berasal dari kitab Sutasoma karya...', opts: ['Mpu Tantular (masa Majapahit)', 'Mpu Gandring', 'Ki Hajar Dewantara', 'R.A. Kartini'], ans: 0, exp: 'Mpu Tantular menulis "Bhinneka Tunggal Ika, tan hana dharma mangrwa".' },
      { text: 'Keberagaman budaya daerah di Indonesia merupakan modal strategis di bidang ekonomi dan pariwisata karena...', opts: ['Menghadirkan daya tarik seni, kuliner, kain tradisional, dan kearifan lokal yang unik dan bernilai tinggi', 'Menghambat pembangunan', 'Tidak disukai wisatawan', 'Harus disembunyikan'], ans: 0, exp: 'Keragaman budaya memperkaya ekonomi kreatif dan diplomasi budaya Indonesia.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-04', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi faktor pendorong integrasi bangsa (senasib sepenanggungan, Pancasila, Sumpah Pemuda, Bahasa Indonesia, budaya gotong royong).'],
    materialTitle: 'Faktor Pendorong Integrasi Bangsa',
    blocks: [
      { type: 'visual_cards', title: '4 Perekat Utama Integrasi Bangsa Indonesia', cards: [
        { emoji: '🇮🇩', label: 'Pancasila & UUD 1945', sub: 'Dasar negara dan titik temu seluruh golongan bangsa' },
        { emoji: '🗣️', label: 'Bahasa Indonesia (1928)', sub: 'Bahasa persatuan penghubung seluruh suku dari Sabang sampai Merauke' },
        { emoji: '📜', label: 'Sejarah Senasib Sepenanggungan', sub: 'Perjuangan bersama merebut & mempertahankan kemerdekaan' },
        { emoji: '🤝', label: 'Gotong Royong & Toleransi', sub: 'Kearifan sosial bersama lintas agama dan daerah' },
      ]},
    ],
    activityTitle: 'Latihan: Faktor Pendorong Integrasi',
    questions: [
      { text: 'Peristiwa bersejarah 28 Oktober 1928 yang menjadi tonggak pemersatu pemuda lintas daerah dengan ikrar satu tanah air, satu bangsa, dan satu bahasa persatuan adalah...', opts: ['Sumpah Pemuda', 'Konferensi Meja Bundar', 'Perjanjian Linggarjati', 'Revolusi Industri'], ans: 0, exp: 'Sumpah Pemuda menyatukan gerakan pemuda kedaerahan menjadi visi kebangsaan Indonesia.' },
      { text: 'Peran strategis Bahasa Indonesia dalam menjaga integrasi bangsa adalah...', opts: ['Menjadi sarana komunikasi pemersatu lintas ratusan suku tanpa menghilangkan kelestarian bahasa daerah masing-masing', 'Menghapus semua bahasa daerah', 'Hanya dipakai di ibu kota', 'Hanya untuk dokumen asing'], ans: 0, exp: 'Bahasa Indonesia menjembatani komunikasi nasional secara setara.' },
      { text: 'Manakah yang termasuk faktor PENDORONG integrasi bangsa?', opts: ['Rasa senasib sepenanggungan, ideologi Pancasila, semangat gotong royong, dan pemerataan pembangunan', 'Sikap etnosentrisme berlebihan', 'Kesenjangan ekonomi parah', 'Penyebaran ujaran kebencian SARA'], ans: 0, exp: 'Persamaan nilai, rasa keadilan, dan solidaritas memperkokoh integrasi.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-04', subSeq: 4,
    objectives: ['Siswa mampu menganalisis faktor penghambat integrasi (etnosentrisme, primordialisme sempit, stereotip, hoaks SARA, ketimpangan wilayah).'],
    materialTitle: 'Faktor Penghambat Integrasi Bangsa',
    blocks: [
      { type: 'table', title: 'Sikap Penghambat Persatuan yang Harus Dihindari!', headers: ['Istilah', 'Pengertian Singkat'], rows: [
        ['Etnosentrisme', 'Menganggap suku/budaya sendiri paling unggul lalu merendahkan budaya lain'],
        ['Primordialisme Sempit', 'Kesetiaan berlebihan pada kelompok asal hingga menolak kerja sama dengan kelompok lain'],
        ['Stereotip & Prasangka', 'Melabeli seluruh anggota suatu suku/kelompok secara negatif tanpa bukti'],
        ['Ketimpangan Pembangunan', 'Rasa ketidakadilan ekonomi antarwilayah dapat memicu kecemburuan sosial'],
      ]},
    ],
    activityTitle: 'Latihan: Faktor Penghambat Integrasi',
    questions: [
      { text: 'Sikap menganggap kebudayaan suku sendiri paling tinggi dan memandang rendah kebiasaan suku lain disebut...', opts: ['Etnosentrisme', 'Toleransi', 'Nasionalisme', 'Pluralisme'], ans: 0, exp: 'Etnosentrisme memicu gesekan dan menghambat persatuan.' },
      { text: 'Di era media sosial, salah satu pemicu paling cepat retaknya kerukunan warga yang wajib dilawan dengan literasi digital adalah...', opts: ['Penyebaran hoaks provokatif dan ujaran kebencian bermuatan SARA', 'Konten edukasi budaya daerah', 'Promosi kuliner Nusantara', 'Kerja bakti kampung'], ans: 0, exp: 'Hoaks SARA sengaja memancing emosi dan adu domba antarkelompok.' },
      { text: 'Mengapa pemerataan pembangunan infrastruktur dan pendidikan hingga ke pelosok/perbatasan penting bagi integrasi bangsa?', opts: ['Mewujudkan rasa keadilan sosial sehingga seluruh warga merasa diperhatikan sebagai bagian utuh NKRI', 'Sekadar menghabiskan anggaran', 'Agar penduduk kota pindah semua', 'Tidak terkait persatuan'], ans: 0, exp: 'Keadilan pembangunan memperkuat ikatan kebangsaan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-04', subSeq: 5,
    objectives: ['Siswa mampu memahami penyebab konflik sosial serta 4 cara penyelesaian konflik damai (negosiasi, mediasi, konsiliasi, arbitrase).'],
    materialTitle: 'Konflik Sosial dan Upaya Penyelesaian Damai',
    blocks: [
      { type: 'table', title: '4 Jalur Penyelesaian Konflik (Akomodasi)', headers: ['Cara', 'Mekanisme'], rows: [
        ['Negosiasi / Kompromi', 'Kedua pihak berdialog langsung saling mengurangi tuntutan demi titik temu'],
        ['Mediasi', 'Dibantu pihak ketiga NETRAL (mediator) sebagai penasihat — keputusan tetap di tangan kedua pihak'],
        ['Arbitrase', 'Pihak ketiga berwenang (arbitrator) memberi KEPUTUSAN MENGIKAT yang wajib ditaati'],
        ['Ajudikasi', 'Penyelesaian resmi melalui jalur pengadilan/hukum'],
      ]},
    ],
    activityTitle: 'Latihan: Penyelesaian Konflik Sosial',
    questions: [
      { text: 'Dua regu piket berselisih jadwal lalu meminta guru BK bertindak sebagai penengah netral yang memberi saran damai tanpa memaksa, hingga akhirnya kedua regu bersepakat sendiri. Cara ini disebut...', opts: ['Mediasi', 'Arbitrase', 'Ajudikasi', 'Koersi'], ans: 0, exp: 'Mediator memfasilitasi dialog; keputusan akhir tetap kesepakatan pihak berkonflik.' },
      { text: 'Berbeda dengan mediasi, pada ARBITRASE pihak ketiga yang netral memiliki wewenang untuk...', opts: ['Memutuskan jalan keluar yang bersifat mengikat dan wajib dipatuhi kedua pihak', 'Hanya menonton diam', 'Memihak teman dekatnya', 'Menghindari pertemuan'], ans: 0, exp: 'Arbitrator (seperti wasit pertandingan) menjatuhkan keputusan final.' },
      { text: 'Penyelesaian konflik melalui kekerasan atau pemaksaan sepihak (koersi) tidak menyelesaikan akar masalah karena...', opts: ['Hanya menekan sementara dan menyisakan dendam yang rawan meledak kembali di kemudian hari', 'Selalu menghasilkan perdamaian abadi', 'Disukai semua pihak', 'Sesuai musyawarah'], ans: 0, exp: 'Dialog adil dan musyawarah menciptakan perdamaian berkelanjutan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-04', subSeq: 6,
    objectives: ['Siswa mampu mempraktikkan sikap toleransi sejati dalam kehidupan beragama, bermasyarakat, dan di lingkungan sekolah.'],
    materialTitle: 'Toleransi dalam Kehidupan Masyarakat Majemuk',
    blocks: [
      { type: 'text', text: 'Toleransi sejati berarti saling menghormati, memberi ruang aman bagi orang lain menjalankan ibadah/tradisinya, dan bekerja sama dalam urusan sosial-kemanusiaan TANPA mencampuradukkan atau mengorbankan keyakinan agama masing-masing!' },
    ],
    activityTitle: 'Latihan: Toleransi Masyarakat',
    questions: [
      { text: 'Contoh nyata perilaku TOLERANSI yang tepat di lingkungan sekolah SMP yang siswanya beragam agama adalah...', opts: ['Saling menghormati saat teman menjalankan ibadah sesuai agamanya, tidak mengejek, dan tetap kompak bekerja sama di kegiatan kelas/sosial', 'Memaksa teman mengikuti kebiasaan kita', 'Menghindari kerja kelompok dengan teman berbeda agama', 'Mengejek logat bahasa daerah teman'], ans: 0, exp: 'Toleransi menjaga kerukunan sosial tanpa mengganggu keyakinan masing-masing.' },
      { text: 'Ketika di lingkungan RT/kampung ada kegiatan kerja bakti membersihkan selokan atau membantu tetangga tertimpa musibah, semangat toleransi ditunjukkan dengan...', opts: ['Saling membantu tulus tanpa membeda-bedakan suku, agama, atau latar belakang ekonomi', 'Hanya menolong tetangga sesuku', 'Menutup pintu saat kerja bakti', 'Menunggu imbalan'], ans: 0, exp: 'Kemanusiaan dan gotong royong melampaui sekat perbedaan.' },
      { text: 'Sikap menghormati teman yang berpuasa atau yang sedang merayakan hari besar keagamaannya merupakan pengamalan Pancasila khususnya sila...', opts: ['Kesatu (Ketuhanan Yang Maha Esa) dan Ketiga (Persatuan Indonesia)', 'Tidak terkait Pancasila', 'Hanya aturan pribadi', 'Sekadar formalitas'], ans: 0, exp: 'Sila 1 menjamin kebebasan & kerukunan beragama; Sila 3 menjaga persatuan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-04', subSeq: 7,
    objectives: ['Siswa mampu memahami makna persatuan dan kesatuan bangsa serta menjaga keutuhan NKRI dari ancaman perpecahan.'],
    materialTitle: 'Persatuan dan Kesatuan Bangsa',
    blocks: [
      { type: 'text', text: 'Persatuan berarti bersatunya berbagai unsur yang beragam menjadi satu kebulatan utuh (NKRI). Prinsip persatuan Indonesia mencakup nasionalisme inklusif (cinta tanah air tanpa membenci bangsa lain), kebebasan yang bertanggung jawab, serta wawasan Nusantara (memandang seluruh daratan, lautan, dan udara Indonesia sebagai satu kesatuan utuh)!' },
    ],
    activityTitle: 'Latihan: Persatuan & Kesatuan',
    questions: [
      { text: 'Konsep cara pandang bangsa Indonesia yang melihat kepulauan, lautan di antara pulau-pulau, dan seluruh rakyatnya sebagai SATU KESATUAN politik, ekonomi, sosial-budaya, dan pertahanan keamanan disebut...', opts: ['Wawasan Nusantara', 'Chauvinisme', 'Etnosentrisme', 'Isolasionisme'], ans: 0, exp: 'Laut bagi Indonesia bukan pemisah, melainkan PENGHUBUNG antarpulau!' },
      { text: 'Perbedaan antara NASIONALISME sehat dan CHAUVINISME adalah...', opts: ['Nasionalisme mencintai tanah air sendiri sambil tetap menghormati bangsa lain; chauvinisme fanatik sempit dan merendahkan bangsa lain', 'Keduanya persis sama', 'Nasionalisme berarti membenci semua negara lain', 'Chauvinisme adalah sikap toleran'], ans: 0, exp: 'Nasionalisme Pancasila sejalan dengan sila ke-2 Kemanusiaan yang Adil dan Beradab.' },
      { text: 'Wujud persatuan dan kesatuan saat suatu daerah di Indonesia (misalnya Sumatra, Sulawesi, atau Jawa) tertimpa bencana alam ditunjukkan melalui...', opts: ['Solidaritas nasional penggalangan bantuan dan relawan dari berbagai daerah di seluruh Indonesia', 'Acuh karena bukan daerah sendiri', 'Menyebar hoaks bencana', 'Menyalahkan warga terdampak'], ans: 0, exp: 'Solidaritas lintas daerah membuktikan ikatan satu bangsa.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-04', subSeq: 8,
    objectives: ['Siswa mampu merancang peran konkret remaja SMP dalam merawat kebinekaan di dunia nyata maupun ruang digital.'],
    materialTitle: 'Peran Masyarakat & Pelajar Menjaga Kebinekaan',
    blocks: [
      { type: 'list', title: '4 Aksi Pelajar SMP Penjaga Kebinekaan', items: ['1. Berteman inklusif (tidak bikin geng eksklusif yang merundung teman berbeda latar belakang).', '2. Belajar dan bangga mengenal ragam budaya daerah sendiri maupun daerah lain di Indonesia.', '3. Berani meluruskan hoaks pemecah belah di media sosial dengan kepala dingin & bahasa santun.', '4. Mengutamakan musyawarah mufakat dalam kegiatan OSIS, Pramuka, dan kerja kelompok!'] },
    ],
    activityTitle: 'Latihan: Peran Menjaga Kebinekaan',
    questions: [
      { text: 'Di kelas baru ada siswa pindahan dari luar pulau yang memiliki logat bicara berbeda. Sikap terbaik penjaga kebinekaan adalah...', opts: ['Menyambut ramah, mengajaknya berkenalan, dan menghargai logatnya sebagai kekayaan budaya Nusantara', 'Menirukan logatnya untuk bahan tertawaan', 'Mengucilkannya dari kelompok', 'Menyuruhnya diam saja'], ans: 0, exp: 'Menghormati perbedaan dan menolak perundungan (bullying) membangun lingkungan inklusif.' },
      { text: 'Saat melihat unggahan media sosial yang sengaja memprovokasi kebencian antar-daerah atau antar-agama, tindakan paling bertanggung jawab adalah...', opts: ['Tidak ikut berkomentar kasar, tidak membagikan ulang, dan melaporkannya lewat fitur lapor (report) platform', 'Langsung membagikannya ke 5 grup', 'Ikut membalas dengan makian', 'Menyukai unggahan provokasi itu'], ans: 0, exp: 'Memutus sebaran konten kebencian menjaga ruang digital tetap damai.' },
      { text: 'Kegiatan pentas budaya Nusantara di sekolah (menampilkan tari, lagu daerah, busana adat, dan kuliner berbagai provinsi) bermanfaat untuk...', opts: ['Menumbuhkan rasa saling kenal, apresiasi, dan kebanggaan bersama atas kekayaan budaya Indonesia', 'Memicu persaingan tidak sehat', 'Menghapus budaya lokal', 'Sekadar buang waktu'], ans: 0, exp: 'Tak kenal maka tak sayang — mengenal budaya daerah lain memperkuat persatuan.' },
    ],
  },

  // BAB 5: PERISTIWA SEJARAH LOKAL, NASIONAL, DAN GLOBAL (7 sub)
  {
    topicCode: 'IPS-SMP9-05', subSeq: 1,
    objectives: ['Siswa mampu memahami konsep dasar sejarah (manusia, ruang, waktu) dan membedakan sumber sejarah primer, sekunder, tertulis, benda, serta lisan.'],
    materialTitle: 'Konsep Dasar Sejarah dan Sumber Sejarah',
    blocks: [
      { type: 'table', title: 'Jenis Sumber Sejarah', headers: ['Kategori', 'Penjelasan & Contoh'], rows: [
        ['Sumber Primer (Asli/Sezaman)', 'Kesaksian langsung pelaku/saksi atau benda/dokumen asli sezaman (naskah Proklamasi 1945, prasasti, arsip foto asli, wawancara pelaku)'],
        ['Sumber Sekunder', 'Karya sejarawan yang ditulis berdasarkan kajian sumber primer (buku sejarah sekolah, artikel riset)'],
        ['Bentuknya', 'Tertulis (prasasti, arsip, surat kabar lama), Benda/Artefak (candi, mata uang kuno, keramik), & Lisan (sejarah lisan saksi)'],
      ]},
    ],
    activityTitle: 'Latihan: Konsep & Sumber Sejarah',
    questions: [
      { text: 'Tiga unsur utama yang TIDAK PERNAH terpisahkan dalam setiap peristiwa sejarah adalah...', opts: ['Manusia (pelaku), ruang (tempat kejadian), dan waktu (kapan terjadi)', 'Dongeng, khayalan, dan sihir', 'Angka, rumus, dan grafik', 'Hanya raja saja'], ans: 0, exp: 'Sejarah mengkaji tindakan manusia dalam dimensi ruang dan waktu nyata.' },
      { text: 'Naskah asli teks Proklamasi Kemerdekaan yang ditulis tangan Soekarno pada 17 Agustus 1945 dan rekaman suara pembacaannya tergolong sumber sejarah...', opts: ['Primer (asli sezaman dengan peristiwa)', 'Sekunder', 'Fiksi', 'Tersier'], ans: 0, exp: 'Dokumen dan rekaman asli dari waktu kejadian adalah sumber primer.' },
      { text: 'Mengapa sejarawan harus melakukan verifikasi (kritik sumber) sebelum menyimpulkan suatu peristiwa masa lalu?', opts: ['Memastikan keaslian dan kebenaran fakta sejarah agar tidak tertipu dokumen palsu atau legenda yang tidak terbukti', 'Agar bisa mengarang bebas', 'Supaya buku makin tebal', 'Tidak perlu dicek'], ans: 0, exp: 'Metode sejarah ilmiah menuntut bukti terverifikasi, bukan cerita karangan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-05', subSeq: 2,
    objectives: ['Siswa mampu memahami konsep kronologi (urutan waktu), periodisasi (pembabakan), dan menghindari anakronisme.'],
    materialTitle: 'Kronologi dan Periodisasi Sejarah',
    blocks: [
      { type: 'text', text: 'KRONOLOGI adalah penyusunan peristiwa sejarah secara runtut menurut urutan waktu (dari awal ke akhir) agar hubungan sebab-akibatnya terlihat jernih dan terhindar dari ANAKRONISME (kerancuan waktu, misal mencampur peristiwa tahun 1945 sebelum 1928). PERIODISASI membagi sejarah ke dalam babakan zaman (Praaksara → Hindu-Buddha → Islam → Kolonial → Pergerakan Nasional → Kemerdekaan).' },
    ],
    activityTitle: 'Latihan: Kronologi Sejarah',
    questions: [
      { text: 'Urutan kronologis peristiwa penting perjuangan bangsa Indonesia yang BENAR adalah...', opts: ['Kebangkitan Nasional (1908) → Sumpah Pemuda (1928) → Proklamasi Kemerdekaan (1945) → Reformasi (1998)', 'Proklamasi (1945) → Sumpah Pemuda (1928) → Budi Utomo (1908)', 'Sumpah Pemuda (1928) → Budi Utomo (1908) → Proklamasi (1945)', 'Reformasi (1998) → Proklamasi (1945) → Sumpah Pemuda (1928)'], ans: 0, exp: '1908 → 1928 → 1945 → 1998.' },
      { text: 'Tujuan utama penyusunan KRONOLOGI dalam ilmu sejarah adalah...', opts: ['Memahami alur waktu dan keterkaitan sebab-akibat antarperistiwa secara akurat tanpa tertukar zaman', 'Menghafal tahun acak tanpa makna', 'Menghapus periode lama', 'Membuat cerita fiksi'], ans: 0, exp: 'Kronologi mencegah anakronisme dan memperjelas hubungan sebab-akibat.' },
      { text: 'Pengelompokan rangkaian panjang sejarah Indonesia menjadi beberapa zaman (seperti Zaman Hindu-Buddha, Zaman Kesultanan Islam, Zaman Pergerakan Nasional) disebut...', opts: ['Periodisasi', 'Anakronisme', 'Akulturasi', 'Migrasi'], ans: 0, exp: 'Periodisasi memudahkan kajian sejarah berdasarkan ciri khas tiap kurun waktu.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-05', subSeq: 3,
    objectives: ['Siswa mampu menganalisis konsep perubahan (change) dan kesinambungan/keberlanjutan (continuity) dalam sejarah.'],
    materialTitle: 'Perubahan dan Kesinambungan dalam Sejarah',
    blocks: [
      { type: 'tip', text: 'Sejarah selalu memuat dua sisi sekaligus: PERUBAHAN (hal yang berganti mengikuti zaman, mis. dari surat kertas menjadi email/chat, dari perahu layar menjadi kapal kontainer) dan KESINAMBUNGAN (hal yang terus diwariskan lintas generasi, mis. semangat gotong royong, fungsi pelabuhan niaga pesisir, dan tradisi silaturahmi)!' },
    ],
    activityTitle: 'Latihan: Perubahan & Kesinambungan',
    questions: [
      { text: 'Aktivitas perdagangan maritim di pesisir utara Jawa (seperti kawasan Gresik dan Surabaya) sudah berlangsung sejak berabad-abad lalu hingga kini tetap menjadi pusat pelabuhan dan niaga, meski kapalnya berubah dari perahu layar menjadi kapal kargo modern. Hal ini menunjukkan...', opts: ['Adanya kesinambungan (fungsi niaga maritim) sekaligus perubahan (teknologi transportasi & industri)', 'Tidak ada perubahan apa pun sejak abad ke-15', 'Sejarah masa lalu tidak ada kaitannya dengan masa kini', 'Pelabuhan sudah tidak dipakai'], ans: 0, exp: 'Fungsi strategis berlanjut (kesinambungan) sementara teknologi berubah.' },
      { text: 'Proklamasi Kemerdekaan 17 Agustus 1945 yang mengubah status bangsa Indonesia dari wilayah jajahan menjadi negara berdaulat penuh merupakan contoh...', opts: ['Perubahan sejarah yang sangat cepat dan mendasar (revolusioner)', 'Kesinambungan penjajahan', 'Stagnasi total', 'Anakronisme'], ans: 0, exp: 'Proklamasi membawa transformasi ketatanegaraan mendasar.' },
      { text: 'Kebiasaan bermusyawarah dan bergotong royong di desa-desa Indonesia yang terus hidup dari generasi nenek moyang hingga sekarang merupakan contoh konsep sejarah...', opts: ['Kesinambungan / keberlanjutan (continuity)', 'Anakronisme', 'Disintegrasi', 'Kepunahan'], ans: 0, exp: 'Nilai luhur budaya bertahan melintasi berbagai periode sejarah.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-05', subSeq: 4,
    objectives: ['Siswa mampu memahami peran sejarah lokal (termasuk bandar niaga pesisir utara Jawa dan jejak penyebaran Islam/perjuangan daerah) secara faktual berbasis sumber.'],
    materialTitle: 'Peristiwa Penting Sejarah Lokal & Metode Kajiannya',
    blocks: [
      { type: 'text', text: 'Sejarah lokal mengkaji peristiwa penting di tingkat daerah/kota sebagai bagian tak terpisahkan dari sejarah nasional! Misalnya di pesisir utara Jawa Timur, Gresik tercatat dalam sumber sejarah Nusantara (seperti catatan pelayaran abad ke-15 dan peninggalan makam bersejarah Sunan Maulana Malik Ibrahim serta Sunan Giri) sebagai salah satu bandar pelabuhan niaga dan pusat pendidikan/dakwah Islam penting di Jawa Timur — serta turut berperan dalam jaringan perjuangan mempertahankan kemerdekaan di sekitar Surabaya 1945!' },
      { type: 'tip', text: 'Dalam meneliti sejarah lokal, selalu bedakan FAKTA SEJARAH yang didukung arsip, prasasti, cagar budaya, atau catatan sejarawan dari cerita rakyat lisan yang belum terverifikasi!' },
    ],
    activityTitle: 'Latihan: Sejarah Lokal',
    questions: [
      { text: 'Berdasarkan bukti peninggalan sejarah dan catatan pelayaran Nusantara, peran historis penting wilayah pesisir utara Jawa Timur (termasuk Gresik) pada abad ke-15 hingga ke-16 adalah...', opts: ['Sebagai salah satu bandar pelabuhan perdagangan maritim dan pusat perkembangan dakwah serta pendidikan Islam di Jawa', 'Sebagai wilayah pegunungan salju terisolasi', 'Tidak pernah disinggahi kapal dagang', 'Baru muncul pada tahun 2000'], ans: 0, exp: 'Gresik dikenal dalam catatan sejarah maritim (seperti catatan Ma Huan) serta peninggalan situs sejarah Wali Songo (Maulana Malik Ibrahim & Sunan Giri).' },
      { text: 'Mengapa mempelajari sejarah lokal daerah tempat tinggal sendiri penting bagi siswa SMP?', opts: ['Menumbuhkan kepedulian melestarikan cagar budaya setempat dan memahami kontribusi daerahnya dalam sejarah bangsa Indonesia', 'Agar melupakan sejarah nasional', 'Agar merasa daerah sendiri paling hebat dari semua daerah lain', 'Tidak ada manfaatnya'], ans: 0, exp: 'Sejarah lokal adalah potongan puzzle berharga pembentuk sejarah nasional.' },
      { text: 'Sumber paling tepat untuk meneliti sejarah bangunan tua atau perkembangan pasar/pelabuhan di kabupaten kita adalah...', opts: ['Arsip pemerintah daerah, situs cagar budaya/prasasti, peta lama, dan kajian buku sejarawan/museum setempat', 'Rumor media sosial tanpa rujukan', 'Mengarang legenda sendiri', 'Menebak tanpa data'], ans: 0, exp: 'Kajian sejarah lokal wajib berpijak pada sumber kredibel.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-05', subSeq: 5,
    objectives: ['Siswa mampu menganalisis tonggak peristiwa penting sejarah nasional Indonesia (1908, 1928, 1945, Pertempuran 10 November 1945, KAA 1955, Deklarasi Djuanda 1957).'],
    materialTitle: 'Tonggak Peristiwa Penting Sejarah Nasional',
    blocks: [
      { type: 'table', title: '6 Tonggak Sejarah Nasional Indonesia', headers: ['Tahun', 'Peristiwa & Maknanya'], rows: [
        ['20 Mei 1908', 'Berdirinya Budi Utomo — awal Pergerakan Nasional modern (organisasi & pendidikan)'],
        ['28 Okt 1928', 'Sumpah Pemuda — ikrar satu tanah air, satu bangsa, satu bahasa persatuan'],
        ['17 Agt 1945', 'Proklamasi Kemerdekaan RI oleh Soekarno–Hatta atas nama bangsa Indonesia'],
        ['10 Nov 1945', 'Pertempuran Surabaya — simbol kepahlawanan rakyat mempertahankan kemerdekaan (Hari Pahlawan)'],
        ['April 1955', 'Konferensi Asia-Afrika (KAA) di Bandung — solidaritas bangsa Asia-Afrika melawan penjajahan'],
        ['13 Des 1957', 'Deklarasi Djuanda — menyatukan perairan antarpulau Indonesia sebagai satu negara kepulauan!'],
      ]},
    ],
    activityTitle: 'Latihan: Sejarah Nasional',
    questions: [
      { text: 'Deklarasi Djuanda tanggal 13 Desember 1957 memiliki arti luar biasa bagi kedaulatan geografis Indonesia karena...', opts: ['Menegaskan bahwa laut di antara pulau-pulau Indonesia bukan laut bebas pemisah, melainkan satu kesatuan wilayah negara kepulauan (Archipelagic State)', 'Menjual pulau-pulau terluar', 'Menghapus batas laut', 'Memisahkan Sumatra dan Jawa'], ans: 0, exp: 'Deklarasi Djuanda kemudian diakui dunia dalam Konvensi Hukum Laut PBB (UNCLOS 1982)!' },
      { text: 'Peristiwa heroik rakyat Jawa Timur mempertahankan kemerdekaan RI dari ancaman kembalinya penjajah yang diperingati setiap tahun sebagai Hari Pahlawan terjadi pada...', opts: ['10 November 1945 di Surabaya', '20 Mei 1908', '28 Oktober 1928', '17 Agustus 1955'], ans: 0, exp: 'Pertempuran 10 November 1945 di Surabaya memperlihatkan tekad "Merdeka atau Mati".' },
      { text: 'Perbedaan pola perjuangan bangsa Indonesia SETELAH tahun 1908 (Pergerakan Nasional) dibanding sebelumnya adalah...', opts: ['Bersifat nasional lintas daerah, terorganisasi modern lewat organisasi/pendidikan/diplomasi, tidak lagi bergantung pada satu tokoh lokal saja', 'Hanya memakai bambu runcing di 1 desa', 'Tidak terorganisasi', 'Tidak melibatkan pelajar'], ans: 0, exp: 'Organisasi modern dan persatuan nasional menjadi kekuatan baru menuju kemerdekaan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-05', subSeq: 6,
    objectives: ['Siswa mampu memahami peristiwa sejarah global berpengaruh besar terhadap dunia & Indonesia (Penjelajahan Samudra, Revolusi Industri, PD II, Revolusi Digital).'],
    materialTitle: 'Peristiwa Penting Sejarah Global & Dampaknya',
    blocks: [
      { type: 'list', title: 'Peristiwa Global yang Mengubah Sejarah Dunia & Indonesia', items: ['Penjelajahan Samudra (abad ke-15–16): pencarian jalur rempah memicu kedatangan bangsa Eropa ke Nusantara.', 'Revolusi Industri (abad ke-18 di Inggris): mesin uap → pabrik modern, kereta, kapal uap → mengubah ekonomi dunia.', 'Perang Dunia II (1939–1945): berakhirnya perang & menyerahnya Jepang membuka momentum emas Proklamasi Kemerdekaan RI 17 Agustus 1945!', 'Revolusi Digital & Internet (akhir abad ke-20–kini): menghubungkan seluruh manusia dalam ekonomi dan informasi global.'] },
    ],
    activityTitle: 'Latihan: Sejarah Global',
    questions: [
      { text: 'Kaitan langsung berakhirnya Perang Dunia II (menyerahnya Jepang kepada Sekutu pada pertengahan Agustus 1945) dengan sejarah Indonesia adalah...', opts: ['Terciptanya kekosongan kekuasaan (vacuum of power) yang dimanfaatkan secara cepat oleh golongan muda & tua memproklamasikan Kemerdekaan RI pada 17 Agustus 1945', 'Indonesia menjadi bagian Eropa', 'Jepang memperpanjang penjajahan 50 tahun', 'Tidak ada kaitannya'], ans: 0, exp: 'Kemerdekaan RI diraih dengan kecerdasan memanfaatkan momentum global sekaligus perjuangan sendiri.' },
      { text: 'Revolusi Industri pertama yang dimulai di Inggris pada abad ke-18 ditandai oleh...', opts: ['Peralihan dari tenaga otot/tangan menjadi mesin uap dan sistem produksi pabrik massal', 'Penemuan internet', 'Berakhirnya perdagangan laut', 'Penghapusan mesin'], ans: 0, exp: 'Mesin uap James Watt merevolusi industri tekstil, tambang, dan transportasi.' },
      { text: 'Berdirinya PBB (Perserikatan Bangsa-Bangsa) pada 24 Oktober 1945 pasca-Perang Dunia II bertujuan utama...', opts: ['Menjaga perdamaian dunia, mencegah perang global terulang, dan mendorong kerja sama kemanusiaan antarbangsa', 'Memicu perang dunia ketiga', 'Menghapus kedaulatan negara berkembang', 'Menguasai seluruh rempah'], ans: 0, exp: 'PBB juga berperan penting dalam diplomasi pengakuan kedaulatan RI (KMB 1949).' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-05', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan relevansi peristiwa masa lalu dengan kondisi masa kini (sejarah sebagai guru kehidupan / historia magistra vitae).'],
    materialTitle: 'Hubungan Masa Lalu dengan Masa Kini',
    blocks: [
      { type: 'tip', text: 'Ungkapan klasik Cicero: "Historia Magistra Vitae" (Sejarah adalah guru kehidupan) dan pesan Bung Karno "JASMERAH" (Jangan Sekali-kali Meninggalkan Sejarah!). Mempelajari masa lalu membuat kita paham akar masalah hari ini, menghargai jasa pendahulu, dan tidak mengulangi kesalahan yang sama!' },
    ],
    activityTitle: 'Latihan: Masa Lalu & Masa Kini',
    questions: [
      { text: 'Mengapa semboyan "Historia Magistra Vitae" (sejarah adalah guru kehidupan) tetap relevan bagi generasi muda abad ke-21?', opts: ['Karena pengalaman keberhasilan dan kegagalan masa lalu memberi pelajaran kebijaksanaan dalam mengambil keputusan hari ini dan masa depan', 'Karena masa lalu harus ditiru persis tanpa inovasi', 'Karena masa kini tidak penting', 'Karena sejarah hanya hafalan tanggal'], ans: 0, exp: 'Sejarah membekali kesadaran kritis dan kebijaksanaan sosial.' },
      { text: 'Pelajaran berharga dari sejarah perpecahan kerajaan-kerajaan Nusantara akibat politik adu domba (devide et impera) kolonial untuk kondisi Indonesia masa kini adalah...', opts: ['Kita harus selalu waspada terhadap upaya adu domba/hoaks pemecah belah dan terus merawat persatuan bangsa', 'Kita boleh mudah terpecah belah', 'Konflik antar-daerah hal biasa', 'Persatuan tidak lagi diperlukan'], ans: 0, exp: 'Sejarah mengajarkan betapa mahalnya harga perpecahan.' },
      { text: 'Kebebasan kita belajar di sekolah hari ini dengan kurikulum nasional dan Bahasa Indonesia merupakan buah langsung dari perjuangan sejarah berupa...', opts: ['Pergerakan pendidikan nasional, Sumpah Pemuda 1928, dan Kemerdekaan 1945', 'Kebetulan tanpa perjuangan', 'Pemberian gratis penjajah', 'Tanpa kaitan masa lalu'], ans: 0, exp: 'Menghargai masa kini dimulai dari memahami perjuangan masa lalu.' },
    ],
  },

  // BAB 6: ASAL-USUL NENEK MOYANG DAN JALUR REMPAH NUSANTARA (7 sub)
  {
    topicCode: 'IPS-SMP9-06', subSeq: 1,
    objectives: ['Siswa mampu mengenal teori utama migrasi nenek moyang bangsa Indonesia (Out of Africa, Out of Yunnan, Out of Taiwan, Nusantara) secara kritis dan ilmiah.'],
    materialTitle: 'Teori Migrasi Nenek Moyang Bangsa Indonesia',
    blocks: [
      { type: 'table', title: 'Ringkasan Teori Migrasi Nenek Moyang Nusantara', headers: ['Teori', 'Gagasan Utama & Bukti'], rows: [
        ['Out of Africa', 'Manusia modern (Homo sapiens) berasal dari Afrika lalu bermigrasi menyebar ke seluruh dunia ~100.000–60.000 tahun lalu (bukti genetika DNA)'],
        ['Out of Yunnan (Klasik)', 'Gelombang migrasi dari Yunnan (Tiongkok selatan) ke Nusantara dalam 2 tahap: Proto-Melayu (~1500 SM) & Deutero-Melayu (~500 SM)'],
        ['Out of Taiwan (Linguistik & Genetika Modern)', 'Penutur rumpun bahasa Austronesia bermigrasi dari Taiwan → Filipina → Nusantara → hingga Madagaskar & Polinesia (~4000–3000 tahun lalu)!'],
        ['Teori Nusantara', 'Mengemukakan perkembangan budaya lokal Nusantara yang mandiri & beragam'],
      ]},
    ],
    activityTitle: 'Latihan: Teori Migrasi Nenek Moyang',
    questions: [
      { text: 'Teori migrasi modern yang didukung kuat oleh kesamaan rumpun bahasa (linguistik) dan genetika DNA yang menyatakan penutur Austronesia menyebar dari Taiwan melalui Filipina ke Kepulauan Indonesia adalah...', opts: ['Teori Out of Taiwan', 'Teori Big Bang', 'Teori Heliosentris', 'Teori Kontinental'], ans: 0, exp: 'Rumpun bahasa Austronesia memiliki keragaman tertua di Taiwan lalu menyebar ke selatan.' },
      { text: 'Berdasarkan bukti arkeologi dan genetika modern, bangsa Indonesia masa kini terbentuk dari percampuran panjang berbagai gelombang migrasi dan populasi lokal yang menunjukkan bahwa kita adalah bangsa...', opts: ['Majemuk yang sejak awal sejarahnya terbiasa berinteraksi dan berbaur secara terbuka', 'Yang tertutup dari dunia sejak dulu', 'Hanya berasal dari 1 pulau kecil saja', 'Tidak punya keterkaitan dengan kawasan Asia-Pasifik'], ans: 0, exp: 'Keberagaman genetik dan budaya Indonesia berakar dari sejarah migrasi maritim yang kaya.' },
      { text: 'Dalam teori migrasi klasik Yunnan, gelombang pendatang yang membawa kebudayaan logam (perunggu seperti nekara dan kapak corong) adalah...', opts: ['Deutero-Melayu (Melayu Muda)', 'Proto-Melayu (batu baru/Neolitikum)', 'Manusia purba Meganthropus', 'Bangsa Eropa'], ans: 0, exp: 'Proto-Melayu terkait kapak persegi/lonjong (Neolitikum); Deutero-Melayu terkait budaya logam (Dongson).' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-06', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan kehebatan pelayaran maritim penutur Austronesia (perahu bercadik, navigasi bintang, persebaran hingga Madagaskar & Pasifik).'],
    materialTitle: 'Migrasi dan Kemahiran Maritim Austronesia',
    blocks: [
      { type: 'text', text: 'Nenek moyang penutur AUSTRONESIA adalah pelaut ulung terhebat di dunia kuno! Dengan teknologi PERAHU BERCADIK (outrigger canoe) yang stabil melawan ombak samudra serta membaca bintang, angin musim, dan arus laut, mereka berlayar dari Nusantara hingga ke barat (Madagaskar di Afrika!) dan ke timur (kepulauan Pasifik/Polinesia)! Kekerabatan kosakata dasar seperti "mata, lima, rumah/ruma, ikan" tersebar luas di wilayah ini.' },
    ],
    activityTitle: 'Latihan: Migrasi Austronesia',
    questions: [
      { text: 'Inovasi teknologi maritim khas penutur Austronesia yang membuat perahu mereka sangat stabil mengarungi samudra luas adalah...', opts: ['Perahu bercadik (penyeimbang kayu di sisi kiri/kanan perahu) dan layar tanja/segitiga', 'Kapal selam nuklir', 'Kereta uap', 'Pesawat terbang'], ans: 0, exp: 'Cadik menjaga keseimbangan perahu saat menghadapi gelombang samudra.' },
      { text: 'Bukti kuat luasnya jangkauan pelayaran leluhur Austronesia dari Nusantara hingga ke barat Samudra Hindia adalah...', opts: ['Bahasa Malagasi di Pulau Madagaskar (Afrika) memiliki kekerabatan erat dengan bahasa Ma’anyan di Kalimantan!', 'Tidak ada bahasa yang mirip di luar Jawa', 'Adanya salju di Kalimantan', 'Bangsa Austronesia tidak bisa berlayar'], ans: 0, exp: 'Pelaut Nusantara melintasi ribuan kilometer Samudra Hindia hingga bermukim di Madagaskar.' },
      { text: 'Keterampilan bahari nenek moyang Austronesia diabadikan hingga kini dalam ungkapan lagu kebangsaan maritim kita "Nenek moyangku orang pelaut" dan warisan perahu tradisional Nusantara seperti...', opts: ['Perahu Pinisi (diakui UNESCO sebagai Warisan Budaya Takbenda)', 'Kereta kuda Eropa', 'Bus tingkat', 'Sepeda motor'], ans: 0, exp: 'Keahlian pembuatan kapal Pinisi Sulawesi Selatan meneruskan tradisi maritim Nusantara.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-06', subSeq: 3,
    objectives: ['Siswa mampu mendeskripsikan perkembangan kehidupan masyarakat awal Nusantara (berburu-meramu → bercocok tanam menetap → perundagian/logam).'],
    materialTitle: 'Kehidupan Masyarakat Awal Nusantara',
    blocks: [
      { type: 'table', title: '3 Tahap Perkembangan Masyarakat Awal Nusantara', headers: ['Masa', 'Pola Hidup & Teknologi'], rows: [
        ['1. Berburu & Meramu (Food Gathering)', 'Nomaden (berpindah-pindah), gua/tepi sungai, alat batu kasar (Paleolitikum–Mesolitikum)'],
        ['2. Bercocok Tanam (Food Producing)', 'MENETAP (sedenter), bertani padi/umbi, beternak, gerabah, kapak persegi/lonjong (Neolitikum), & mulai gotong royong desa!'],
        ['3. Perundagian (Pertukangan Logam)', 'Keahlian khusus (undagi) menempa perunggu & besi (nekara, moko, kapak corong) + perdagangan antarpulau!'],
      ]},
    ],
    activityTitle: 'Latihan: Masyarakat Awal Nusantara',
    questions: [
      { text: 'Revolusi besar kehidupan masyarakat awal Nusantara pada masa Bercocok Tanam (Neolitikum) ditandai oleh perubahan dari...', opts: ['Hidup berpindah-pindah mencari makanan (food gathering) menjadi hidup MENETAP dan memproduksi makanan sendiri (food producing)', 'Memakai besi menjadi batu kasar', 'Tinggal di kota modern menjadi di gua', 'Memakai kapal mesin menjadi rakit'], ans: 0, exp: 'Hidup menetap menumbuhkan perkampungan awal, pertanian, dan budaya gotong royong.' },
      { text: 'Pada masa PERUNDAGIAN, masyarakat awal Nusantara mulai mengenal pembagian kerja berdasarkan keahlian khusus (undagi), terutama dalam mengolah...', opts: ['Logam (perunggu dan besi) serta pembuatan gerabah dan perahu', 'Plastik sintetis', 'Chip komputer', 'Kaca serat optik'], ans: 0, exp: 'Undagi = golongan pengrajin/tukang terampil.' },
      { text: 'Sistem kepercayaan awal masyarakat praaksara Nusantara yang menghormati roh nenek moyang dan percaya benda/alam memiliki kekuatan gaib dikenal sebagai...', opts: ['Animisme dan dinamisme', 'Kapitalisme', 'Globalisasi', 'Industrialisasi'], ans: 0, exp: 'Animisme (roh/arwah) dan dinamisme (kekuatan benda), tampak pada bangunan megalitik.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-06', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan pengertian Jalur Rempah Nusantara sebagai jaringan perdagangan maritim dunia yang menghubungkan timur hingga barat sejak ribuan tahun lalu.'],
    materialTitle: 'Jalur Perdagangan Rempah Nusantara',
    blocks: [
      { type: 'text', text: 'JALUR REMPAH adalah jalur budaya dan pelayaran niaga maritim yang menghubungkan pulau-pulau penghasil rempah Nusantara (Maluku, Banda, Sumatra, Jawa, Kalimantan, Sulawesi) dengan India, Tiongkok, Timur Tengah, Afrika, hingga Eropa — jauh SEBELUM kedatangan bangsa Eropa abad ke-16! Angin muson (barat & timur) secara teratur menggerakkan kapal layar pulang-pergi di jalur ini.' },
    ],
    activityTitle: 'Latihan: Jalur Rempah Nusantara',
    questions: [
      { text: 'Fakta sejarah penting tentang JALUR REMPAH NUSANTARA yang perlu dipahami secara akurat adalah...', opts: ['Jalur perdagangan rempah maritim sudah aktif ribuan tahun menghubungkan Nusantara dengan Asia, Timur Tengah, dan Eropa JAUH SEBELUM kedatangan bangsa Eropa abad ke-16', 'Jalur rempah baru dibuka oleh Eropa tahun 1900', 'Rempah hanya dijual lewat jalur darat gurun tanpa laut', 'Nusantara tidak ikut berdagang'], ans: 0, exp: 'Pelaut Nusantara, India, Arab, dan Tiongkok sudah lama mengarungi Jalur Rempah.' },
      { text: 'Faktor alam yang dimanfaatkan para pelaut Nusantara dan pedagang mancanegara pada era kapal layar untuk berlayar bolak-balik di Jalur Rempah adalah...', opts: ['Pola angin muson barat dan angin muson timur yang berganti arah tiap setengah tahun', 'Gelombang tsunami', 'Es kutub', 'Gempa tektonik'], ans: 0, exp: 'Bandar pelabuhan Nusantara tumbuh subur karena kapal menunggu pergantian angin muson!' },
      { text: 'Selain perdagangan barang, interaksi di pelabuhan-pelabuhan Jalur Rempah (termasuk pesisir utara Jawa seperti Gresik, Tuban, Demak, Banten, dan Makassar) juga menjadi jalur utama...', opts: ['Pertukaran budaya, bahasa, ilmu pengetahuan, kuliner, serta penyebaran agama Hindu-Buddha dan Islam secara damai', 'Penutupan seluruh kebudayaan', 'Penghapusan bahasa Melayu', 'Isolasi Nusantara'], ans: 0, exp: 'Jalur Rempah adalah jalur peradaban dan pertukaran budaya dunia.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-06', subSeq: 5,
    objectives: ['Siswa mampu mengenali komoditas rempah unggulan Nusantara beserta daerah asalnya (cengkih, pala, fuli, lada, kayu manis, kapur barus, cendana).'],
    materialTitle: 'Komoditas Rempah Unggulan Nusantara',
    blocks: [
      { type: 'table', title: 'Peta Komoditas Rempah Emas Nusantara', headers: ['Komoditas Rempah', 'Daerah Penghasil Utama Historis', 'Kegunaan Dunia'], rows: [
        ['Cengkih', 'Maluku Utara (Ternate, Tidore, Bacan, Makian)', 'Obat, pengawet, bumbu, aroma'],
        ['Pala & Fuli (Bunga Pala)', 'Kepulauan Banda (Maluku) — dulu satu-satunya di dunia!', 'Pengawet daging musim dingin, obat, rempah mewah'],
        ['Lada', 'Sumatra (Aceh, Lampung, Jambi), Banten, Kalimantan', 'Bumbu utama bernilai tinggi seharga emas'],
        ['Kapur Barus & Kemenyan', 'Barus (Sumatra Utara)', 'Bahan wewangian & pengawet sejak zaman Mesir Kuno'],
        ['Kayu Cendana & Kayu Manis', 'Nusa Tenggara (Timor/Sumba) & Sumatra (Kerinci)', 'Parfum, ukiran, obat, & bumbu'],
      ]},
    ],
    activityTitle: 'Latihan: Komoditas Rempah Nusantara',
    questions: [
      { text: 'Dua rempah asli endemik Kepulauan Maluku (termasuk Ternate, Tidore, dan Kepulauan Banda) yang pernah bernilai melebihi emas di pasar Eropa abad pertengahan adalah...', opts: ['Cengkih dan pala (beserta fulinya)', 'Gandum dan apel', 'Kopi dan kentang', 'Zaitun dan anggur'], ans: 0, exp: 'Cengkih dan pala Banda awalnya hanya tumbuh alami di Kepulauan Maluku!' },
      { text: 'Mengapa rempah-rempah Nusantara (pala, cengkih, lada) sangat diburu dan berharga super mahal di Eropa pada abad ke-15–16?', opts: ['Sangat dibutuhkan untuk mengawetkan dan menyedapkan daging menghadapi musim dingin panjang serta bahan obat dan wewangian', 'Karena Eropa beriklim tropis', 'Karena rempah mudah tumbuh di salju', 'Karena dijadikan bahan bangunan'], ans: 0, exp: 'Iklim dingin Eropa tidak memungkinkan rempah tropis tumbuh di sana.' },
      { text: 'Pelabuhan kuno Barus di pesisir barat Sumatra sejak berabad-abad lampau terkenal ke Timur Tengah dan Tiongkok karena komoditas aromatiknya yaitu...', opts: ['Kapur barus (kamper) dan kemenyan', 'Besi baja', 'Sutra', 'Batu bara'], ans: 0, exp: 'Kapur barus Nusantara bahkan ditemukan dalam proses pengawetan kuno di luar Nusantara.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-06', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan jaringan perdagangan antardaerah Nusantara dan antarbangsa (beras Jawa ditukar rempah Maluku, peran Bahasa Melayu sebagai lingua franca).'],
    materialTitle: 'Jaringan Perdagangan Antardaerah & Antarbangsa',
    blocks: [
      { type: 'text', text: 'Perdagangan Jalur Rempah bukan hanya ekspor ke luar negeri, melainkan juga jaringan SALING MELENGKAPI ANTARPULAU Nusantara: Jawa yang subur mengirim BERAS dan bahan pangan dari pelabuhan pesisir utara (Gresik, Tuban, Jepara) ke Maluku, lalu kapal pulang membawa CENGKIH dan PALA! Untuk memudahkan transaksi lintas suku dan bangsa, BAHASA MELAYU berkembang menjadi bahasa pergaulan niaga (lingua franca) — cikal bakal Bahasa Indonesia!' },
    ],
    activityTitle: 'Latihan: Perdagangan Antardaerah & Antarbangsa',
    questions: [
      { text: 'Pola perdagangan antarpulau yang saling melengkapi di Nusantara pada masa Jalur Rempah antara Jawa dan Maluku adalah...', opts: ['Pelabuhan Jawa memasok beras dan bahan pangan ke Maluku, sedangkan Maluku memasok cengkih dan pala ke Jawa dan pasar internasional', 'Maluku dan Jawa tidak pernah berdagang', 'Jawa hanya mengekspor es ke Maluku', 'Semua perdagangan dilakukan tanpa kapal'], ans: 0, exp: 'Interdependensi pangan-rempah mengikat pulau-pulau Nusantara dalam satu jaringan ekonomi.' },
      { text: 'Bahasa yang berkembang luas sebagai bahasa pergaulan perdagangan (lingua franca) di seluruh bandar pelabuhan Jalur Rempah Nusantara dan kelak menjadi akar Bahasa Indonesia adalah...', opts: ['Bahasa Melayu', 'Bahasa Latin', 'Bahasa Jerman', 'Bahasa Yunani'], ans: 0, exp: 'Kesederhanaan struktur dan keterbukaan Bahasa Melayu menjadikannya bahasa niaga Nusantara.' },
      { text: 'Kerajaan maritim besar Nusantara yang sejak abad ke-7 hingga ke-15 mengendalikan dan mengamankan jaringan perdagangan laut di Selat Malaka dan Laut Jawa antara lain...', opts: ['Sriwijaya dan Majapahit (dilanjutkan kesultanan-kesultanan maritim seperti Samudera Pasai, Malaka, Demak, Ternate, Gowa-Tallo)', 'Kerajaan Romawi', 'Kekaisaran Inca', 'Kerajaan Mesir'], ans: 0, exp: 'Sriwijaya, Majapahit, hingga kesultanan maritim menjaga vitalitas jalur laut Nusantara.' },
    ],
  },
  {
    topicCode: 'IPS-SMP9-06', subSeq: 7,
    objectives: ['Siswa mampu mengevaluasi pengaruh jangka panjang Jalur Rempah terhadap sejarah Indonesia (kemajuan budaya, kolonialisme VOC, hingga identitas maritim dan kuliner masa kini).'],
    materialTitle: 'Pengaruh Jalur Rempah terhadap Sejarah Indonesia',
    blocks: [
      { type: 'visual_cards', title: '4 Warisan Besar Jalur Rempah bagi Indonesia', cards: [
        { emoji: '🍲', label: 'Kuliner & Jamu Nusantara', sub: 'Rendang, soto, rawon, jamu tradisional kaya rempah mendunia!' },
        { emoji: '🕌', label: 'Akulturasi & Toleransi Budaya', sub: 'Kota pelabuhan kosmopolitan melahirkan seni, arsitektur, dan keberagaman rukun' },
        { emoji: '⚔️', label: 'Sejarah Kolonialisme & Perlawanan', sub: 'Perebutan monopoli rempah oleh Portugis & VOC memicu perlawanan heroik bangsa menuju NKRI!' },
        { emoji: '🚢', label: 'Identitas Poros Maritim', sub: 'Menjadi inspirasi diplomasi budaya & pengembangan kembali ekspor rempah olahan bermutu!' },
      ]},
    ],
    activityTitle: 'Latihan: Pengaruh Jalur Rempah',
    questions: [
      { text: 'Dampak POLITIK-SEJARAH yang berat akibat tingginya nilai rempah Nusantara pada abad ke-16 hingga ke-19 adalah...', opts: ['Bangsa Eropa (Portugis, Spanyol, Belanda/VOC, Inggris) datang memperebutkan monopoli rempah hingga memicu kolonialisme dan perjuangan perlawanan rakyat Nusantara', 'Eropa memberi kemerdekaan langsung', 'Rempah langsung tidak laku', 'Tidak ada bangsa asing yang datang'], ans: 0, exp: 'Daya tarik rempah memicu kolonialisme VOC sekaligus akhirnya menyatukan rasa senasib bangsa Indonesia.' },
      { text: 'Warisan Jalur Rempah yang masih hidup setiap hari di meja makan dan kesehatan masyarakat Indonesia saat ini adalah...', opts: ['Kekayaan kuliner berbumbu rempah (rawon, soto, rendang, nasi krawu) dan tradisi jamu herbal Nusantara', 'Hanya makanan tanpa bumbu', 'Penghapusan rempah lokal', 'Tidak ada warisan yang tersisa'], ans: 0, exp: 'Kuliner dan jamu Nusantara (diakui UNESCO) adalah warisan hidup Jalur Rempah.' },
      { text: 'Bagaimana generasi muda Indonesia masa kini dapat menghidupkan kembali kejayaan Jalur Rempah secara modern?', opts: ['Mengembangkan hilirisasi rempah (minyak atsiri, bumbu instan modern, kosmetik/herbal alami), promosi wisata sejarah maritim, dan menjaga mutu petani rempah', 'Hanya menjual rempah mentah tanpa kemasan', 'Melupakan nama rempah asli Indonesia', 'Mengimpor semua bumbu dari luar negeri'], ans: 0, exp: 'Inovasi produk olahan rempah dan diplomasi budaya membawa kejayaan rempah ke panggung global.' },
    ],
  },
];

upsertLessonsBatch('Kelas 9 SMP — IPS (6 Bab, 42 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

