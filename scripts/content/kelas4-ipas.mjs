import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: UANG DAN PENGELOLAAN KEUANGAN
  {
    topicCode: 'IPAS-SD4-01', subSeq: 1,
    objectives: ['Siswa mampu mengenali pecahan uang kertas dan uang logam Rupiah yang berlaku di Indonesia.'],
    materialTitle: 'Mengenal Nilai Mata Uang Rupiah',
    blocks: [
      { type: 'visual_cards', title: 'Mata Uang Resmi Indonesia: Rupiah (Rp)', cards: [
        { emoji: '🪙', label: 'Uang Logam (Koin)', sub: 'Rp100, Rp200, Rp500, Rp1.000' },
        { emoji: '💵', label: 'Uang Kertas Kecil', sub: 'Rp1.000, Rp2.000, Rp5.000, Rp10.000' },
        { emoji: '💴', label: 'Uang Kertas Besar', sub: 'Rp20.000, Rp50.000, Rp100.000' },
      ]},
      { type: 'tip', text: 'Cara cek keaslian uang kertas dengan 3D: Dilihat (warna & benang pengaman), Diraba (terasa kasar pada angka nominal), Diterawang (ada gambar pahlawan/watermark).' },
    ],
    activityTitle: 'Latihan: Mata Uang Rupiah',
    questions: [
      { text: 'Mata uang resmi negara Indonesia adalah...', opts: ['Ringgit', 'Rupiah', 'Dolar', 'Yen'], ans: 1, exp: 'Mata uang Indonesia adalah Rupiah (Rp), dicetak/diedarkan Bank Indonesia.' },
      { text: 'Cara sederhana memeriksa keaslian uang kertas Rupiah dikenal dengan istilah 3D, yaitu...', opts: ['Dilipat, Dicuci, Disimpan', 'Dilihat, Diraba, Diterawang', 'Dibeli, Dijual, Ditukar', 'Ditulis, Dibaca, Dihitung'], ans: 1, exp: '3D Bank Indonesia = Dilihat, Diraba, Diterawang.' },
      { text: 'Satu lembar uang Rp10.000 nilainya sama dengan ... lembar uang Rp2.000.', opts: ['2', '4', '5', '10'], ans: 2, exp: '10.000 ÷ 2.000 = 5 lembar.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-01', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan fungsi utama uang sebagai alat tukar, satuan hitung, dan penyimpan nilai.'],
    materialTitle: 'Fungsi Uang dalam Kehidupan',
    blocks: [
      { type: 'visual_cards', title: '3 Fungsi Penting Uang', cards: [
        { emoji: '🤝', label: 'Alat Tukar', sub: 'Memudahkan membeli barang tanpa harus barter (tukar barang)' },
        { emoji: '🏷️', label: 'Alat Satuan Hitung', sub: 'Menentukan harga barang (buku Rp5.000, pensil Rp2.000)' },
        { emoji: '🏦', label: 'Alat Penyimpan Nilai', sub: 'Bisa ditabung untuk kebutuhan di masa depan' },
      ]},
      { type: 'tip', text: 'Sebelum ada uang, manusia melakukan BARTER (tukar barang dengan barang), misalnya menukar beras dengan ikan — tetapi sulit jika kebutuhannya tidak cocok!' },
    ],
    activityTitle: 'Latihan: Fungsi Uang',
    questions: [
      { text: 'Kegiatan menukar barang dengan barang lain sebelum dikenalnya uang disebut...', opts: ['Barter', 'Kredit', 'Diskon', 'Tabungan'], ans: 0, exp: 'Barter adalah tukar-menukar barang secara langsung.' },
      { text: 'Saat kamu membayar Rp5.000 untuk mendapatkan buku tulis di koperasi, uang berfungsi sebagai...', opts: ['Mainan', 'Alat tukar', 'Hiasan', 'Alat ukur panjang'], ans: 1, exp: 'Uang menukar nilai guna barang secara sah.' },
      { text: 'Menyisihkan sebagian uang jajan ke celengan menunjukkan fungsi uang sebagai...', opts: ['Alat penyimpan nilai', 'Alat barter', 'Alat tulis', 'Alat ukur berat'], ans: 0, exp: 'Nilai uang dapat disimpan dan digunakan di kemudian hari.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-01', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan peran penjual, pembeli, pasar tradisional/modern, dan cara bertransaksi jujur.'],
    materialTitle: 'Kegiatan Jual Beli',
    blocks: [
      { type: 'table', title: 'Unsur Kegiatan Jual Beli', headers: ['Unsur', 'Perannya'], rows: [
        ['Penjual', 'Menawarkan barang atau jasa secara jujur dan ramah'],
        ['Pembeli', 'Memilih barang yang dibutuhkan dan membayar sesuai kesepakatan'],
        ['Barang / Jasa', 'Sesuatu yang diperjualbelikan (sayur, buku, jasa potong rambut)'],
        ['Alat Pembayaran', 'Uang tunai atau pembayaran nontunai (QRIS/kartu)'],
      ]},
    ],
    activityTitle: 'Latihan: Kegiatan Jual Beli',
    questions: [
      { text: 'Orang yang menawarkan dan menyediakan barang dagangan di pasar disebut...', opts: ['Pembeli', 'Penjual', 'Penonton', 'Kurir'], ans: 1, exp: 'Penjual menawarkan barang/jasa kepada pembeli.' },
      { text: 'Contoh transaksi JASA (bukan barang) adalah...', opts: ['Membeli pensil', 'Membeli bandeng', 'Memotong rambut di tukang cukur', 'Membeli tas'], ans: 2, exp: 'Potong rambut memberikan layanan/jasa, bukan benda fisik.' },
      { text: 'Jika penjual keliru memberi uang kembalian berlebih, sikap pembeli yang jujur adalah...', opts: ['Langsung menyimpannya', 'Mengembalikan kelebihannya kepada penjual', 'Cepat-cepat lari', 'Membelanjakannya lagi'], ans: 1, exp: 'Kejujuran membangun kepercayaan dalam jual beli.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-01', subSeq: 4,
    objectives: ['Siswa mampu membedakan kebutuhan (primer, sekunder, tersier) dan keinginan secara bijak.'],
    materialTitle: 'Kebutuhan dan Keinginan',
    blocks: [
      { type: 'table', title: 'Beda Kebutuhan vs Keinginan', headers: ['Jenis', 'Penjelasan', 'Contoh untuk Siswa'], rows: [
        ['Kebutuhan Primer (Pokok)', 'WAJIB dipenuhi agar hidup sehat & layak', 'Makanan bergizi, pakaian/seragam, rumah'],
        ['Kebutuhan Sekunder', 'Pendukung agar belajar/hidup lebih baik', 'Buku pelajaran, tas sekolah, sepatu, sepeda'],
        ['Keinginan (Tersier)', 'Diinginkan untuk kesenangan, boleh ditunda', 'Mainan mahal keluaran terbaru, jajanan berlebihan'],
      ]},
      { type: 'tip', text: 'Aturan cerdas mengatur uang: dahulukan KEBUTUHAN, baru KEINGINAN jika dana masih cukup!' },
    ],
    activityTitle: 'Latihan: Kebutuhan vs Keinginan',
    questions: [
      { text: 'Manakah yang termasuk KEBUTUHAN PRIMER (pokok) manusia?', opts: ['Makanan, pakaian, dan tempat tinggal', 'Mainan robot mahal', 'Sepatu bermerek mewah', 'Game terbaru'], ans: 0, exp: 'Pangan, sandang, papan adalah kebutuhan primer.' },
      { text: 'Pensilmu habis saat mau ulangan, sementara di toko ada stiker lucu yang sedang tren. Mana yang harus didahulukan?', opts: ['Membeli stiker lucu', 'Membeli pensil karena itu kebutuhan belajar', 'Tidak membeli keduanya', 'Membeli permen semua'], ans: 1, exp: 'Alat tulis adalah kebutuhan utama siswa.' },
      { text: 'Keinginan berbeda dari kebutuhan karena keinginan bersifat...', opts: ['Wajib saat itu juga', 'Tidak mendesak dan dapat ditunda', 'Sama untuk semua orang', 'Menentukan hidup mati'], ans: 1, exp: 'Keinginan boleh ditunda atau tidak dibeli tanpa mengganggu kehidupan.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-01', subSeq: 5,
    objectives: ['Siswa mampu menyusun anggaran sederhana dari uang saku mingguan/bulanan.'],
    materialTitle: 'Membuat Anggaran Sederhana',
    blocks: [
      { type: 'worked_example', level: 'Contoh Anggaran', question: 'Raka mendapat uang saku Rp10.000 per hari. Bagaimana anggaran cerdasnya?', steps: ['Kebutuhan makan/minum sehat di kantin: Rp5.000.', 'Ditabung ke celengan: Rp3.000.', 'Dana cadangan/sosial (infak/alat tulis): Rp2.000.', 'Total: 5.000 + 3.000 + 2.000 = Rp10.000 (pas!).'], answer: 'Pengeluaran terencana, tidak boros, dan tetap menabung setiap hari!' },
    ],
    activityTitle: 'Latihan: Anggaran Sederhana',
    questions: [
      { text: 'Rencana pembagian pemasukan dan pengeluaran uang disebut...', opts: ['Anggaran', 'Barter', 'Kuitansi', 'Katalog'], ans: 0, exp: 'Anggaran membantu mengatur agar pengeluaran tidak melebihi pemasukan.' },
      { text: 'Prinsip anggaran yang sehat adalah jumlah pengeluaran harus...', opts: ['Lebih besar dari pemasukan', 'Tidak melebihi pemasukan dan menyisakan tabungan', 'Dihabiskan seluruhnya untuk mainan', 'Dipinjam dari teman'], ans: 1, exp: 'Besar pasak daripada tiang membuat uang cepat habis dan berutang.' },
      { text: 'Manfaat membuat daftar belanja sebelum ke toko adalah...', opts: ['Membeli barang yang tidak perlu', 'Mencegah belanja boros dan tidak ada yang terlupa', 'Menghabiskan lebih banyak uang', 'Membuat bingung'], ans: 1, exp: 'Daftar belanja menjaga pengeluaran tetap sesuai anggaran.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-01', subSeq: 6,
    objectives: ['Siswa mampu menerapkan kebiasaan hemat dan bijak dalam mengelola uang saku sehari-hari.'],
    materialTitle: 'Mengelola Uang Saku dengan Bijak',
    blocks: [
      { type: 'visual_cards', title: '4 Tips Hemat Uang Saku', cards: [
        { emoji: '🍱', label: 'Bawa Bekal dari Rumah', sub: 'Lebih sehat, higienis, dan uang saku lebih awet' },
        { emoji: '📝', label: 'Catat Pengeluaran', sub: 'Tahu uangmu dipakai beli apa saja minggu ini' },
        { emoji: '⏸️', label: 'Tanya Sebelum Beli', sub: '"Aku benar-benar butuh ini atau cuma pengin?"' },
        { emoji: '🐷', label: 'Sisihkan di Awal', sub: 'Tabung dulu saat terima uang, baru belanjakan sisanya!' },
      ]},
    ],
    activityTitle: 'Latihan: Mengelola Uang Saku',
    questions: [
      { text: 'Waktu paling efektif menyisihkan uang untuk ditabung adalah...', opts: ['Di awal saat menerima uang saku', 'Kalau masih ada sisa saja', 'Saat uang sudah habis', 'Setahun sekali saja'], ans: 0, exp: 'Menyisihkan di awal memastikan tabungan selalu terisi rutin.' },
      { text: 'Membawa bekal makan dan botol minum dari rumah bermanfaat untuk...', opts: ['Menjaga kesehatan sekaligus menghemat uang saku', 'Membuat tas berat tanpa guna', 'Memboroskan uang', 'Tidak punya teman'], ans: 0, exp: 'Bekal rumah lebih terjamin gizinya dan mengurangi jajan berlebihan.' },
      { text: 'Perilaku membeli banyak barang yang tidak dibutuhkan disebut sikap...', opts: ['Hemat', 'Boros (konsumtif)', 'Cermat', 'Mandiri'], ans: 1, exp: 'Boros artinya menggunakan uang secara berlebihan tanpa perhitungan.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-01', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan manfaat menabung di celengan, sekolah, maupun bank.'],
    materialTitle: 'Kebiasaan Menabung',
    blocks: [
      { type: 'visual_cards', title: 'Tempat Aman untuk Menabung', cards: [
        { emoji: '🐷', label: 'Celengan di Rumah', sub: 'Praktis untuk koin dan uang saku harian' },
        { emoji: '🏫', label: 'Tabungan Sekolah', sub: 'Dicatat rutin oleh guru/koperasi sekolah' },
        { emoji: '🏦', label: 'Bank (Tabungan Simpanan Pelajar)', sub: 'Sangat aman, tercatat resmi, cocok untuk jumlah besar' },
      ]},
      { type: 'tip', text: 'Pepatah bijak: "Sedikit demi sedikit, lama-lama menjadi bukit." Menabung Rp2.000/hari selama 30 hari sudah jadi Rp60.000!' },
    ],
    activityTitle: 'Latihan: Kebiasaan Menabung',
    questions: [
      { text: 'Jika Alya menabung Rp2.500 setiap hari selama 10 hari, jumlah tabungannya adalah...', opts: ['Rp15.000', 'Rp20.000', 'Rp25.000', 'Rp30.000'], ans: 2, exp: '2.500 × 10 = Rp25.000.' },
      { text: 'Salah satu manfaat utama menabung adalah...', opts: ['Memiliki dana cadangan saat ada kebutuhan mendadak atau cita-cita tertentu', 'Membuat uang hilang', 'Melatih sifat boros', 'Supaya tidak bisa jajan sama sekali'], ans: 0, exp: 'Tabungan melatih disiplin dan membantu memenuhi kebutuhan di masa depan.' },
      { text: 'Lembaga keuangan resmi tempat menyimpan tabungan dalam jumlah besar dengan aman adalah...', opts: ['Pasar', 'Bank', 'Terminal', 'Gudang'], ans: 1, exp: 'Bank adalah lembaga resmi yang aman untuk menabung.' },
    ],
  },

  // BAB 2: MENGENAL WILAYAH TEMPAT TINGGAL
  {
    topicCode: 'IPAS-SD4-02', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian peta dan fungsi peta dalam kehidupan sehari-hari.'],
    materialTitle: 'Pengertian dan Fungsi Peta',
    blocks: [
      { type: 'text', text: 'Peta adalah gambaran permukaan bumi (atau sebagian wilayah seperti kabupaten, provinsi, negara) pada bidang datar yang diperkecil menggunakan SKALA tertentu.' },
      { type: 'list', title: 'Manfaat Peta bagi Kita', items: ['Menunjukkan letak suatu daerah, jalan, sungai, atau tempat penting.', 'Mengetahui jarak dan arah menuju suatu lokasi.', 'Menggambarkan kondisi bentang alam (gunung, laut, dataran rendah).'] },
    ],
    activityTitle: 'Latihan: Pengertian Peta',
    questions: [
      { text: 'Gambaran permukaan bumi pada bidang datar yang diperkecil dengan skala disebut...', opts: ['Peta', 'Lukisan abstrak', 'Grafik', 'Kalender'], ans: 0, exp: 'Peta menyajikan wilayah permukaan bumi secara berskala di bidang datar.' },
      { text: 'Kumpulan beberapa peta yang dibukukan disebut...', opts: ['Kamus', 'Atlas', 'Majalah', 'Novel'], ans: 1, exp: 'Atlas adalah buku kumpulan peta; sedangkan tiruan bumi berbentuk bola disebut globe.' },
      { text: 'Perbandingan jarak pada peta dengan jarak sebenarnya di lapangan disebut...', opts: ['Judul', 'Skala', 'Garis tepi', 'Warna'], ans: 1, exp: 'Skala menentukan seberapa besar pengecilan peta (misal 1 : 100.000).' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-02', subSeq: 2,
    objectives: ['Siswa mampu membaca simbol warna, simbol titik/garis/area, dan legenda pada peta.'],
    materialTitle: 'Simbol dan Legenda Peta',
    blocks: [
      { type: 'table', title: 'Arti Warna & Simbol Umum pada Peta', headers: ['Simbol / Warna', 'Artinya di Peta'], rows: [
        ['Hijau', 'Dataran rendah'],
        ['Kuning / Cokelat', 'Dataran tinggi / Pegunungan'],
        ['Biru', 'Perairan (laut, sungai, danau)'],
        ['Segitiga hitam / merah', 'Gunung tidak aktif (hitam) / gunung berapi aktif (merah)'],
        ['Kotak merah / bintang', 'Ibu kota negara atau provinsi'],
        ['Garis biru berkelok', 'Sungai'],
      ]},
      { type: 'tip', text: 'LEGENDA adalah kotak keterangan yang menjelaskan arti setiap simbol dan warna yang dipakai pada peta!' },
    ],
    activityTitle: 'Latihan: Simbol & Legenda Peta',
    questions: [
      { text: 'Kotak keterangan yang menjelaskan arti simbol-simbol pada peta disebut...', opts: ['Skala', 'Legenda', 'Inset', 'Judul'], ans: 1, exp: 'Legenda memuat daftar simbol beserta artinya.' },
      { text: 'Warna HIJAU pada peta rupa bumi umumnya melambangkan wilayah...', opts: ['Laut dalam', 'Dataran rendah', 'Puncak gunung es', 'Gurun pasir'], ans: 1, exp: 'Hijau = dataran rendah; cokelat = pegunungan; biru = perairan.' },
      { text: 'Simbol garis biru berkelok-kelok pada peta menggambarkan...', opts: ['Jalan tol', 'Sungai', 'Rel kereta api', 'Batas negara'], ans: 1, exp: 'Sungai dilambangkan dengan garis biru berkelok.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-02', subSeq: 3,
    objectives: ['Siswa mampu menggunakan 8 arah mata angin (Utara, Timur, Selatan, Barat beserta arah antaranya).'],
    materialTitle: 'Delapan Arah Mata Angin',
    blocks: [
      { type: 'visual_cards', title: '4 Arah Utama & 4 Arah Antara', cards: [
        { emoji: '⬆️', label: 'Utara (U)', sub: 'Pada peta selalu menunjuk ke ATAS!' },
        { emoji: '➡️', label: 'Timur (T)', sub: 'Arah matahari terbit (kanan pada peta)' },
        { emoji: '⬇️', label: 'Selatan (S)', sub: 'Berlawanan dengan Utara (bawah pada peta)' },
        { emoji: '⬅️', label: 'Barat (B)', sub: 'Arah matahari terbenam (kiri pada peta)' },
        { emoji: '🧭', label: '4 Arah Antara', sub: 'Timur Laut (U–T), Tenggara (T–S), Barat Daya (S–B), Barat Laut (B–U)' },
      ]},
    ],
    activityTitle: 'Latihan: Arah Mata Angin',
    questions: [
      { text: 'Jika kamu menghadap ke arah UTARA, maka arah di sebelah KANANMU adalah...', opts: ['Barat', 'Timur', 'Selatan', 'Barat Laut'], ans: 1, exp: 'Menghadap Utara: kanan = Timur, kiri = Barat, belakang = Selatan.' },
      { text: 'Arah mata angin yang terletak di antara Selatan dan Timur adalah...', opts: ['Timur Laut', 'Tenggara', 'Barat Daya', 'Barat Laut'], ans: 1, exp: 'Antara Timur dan Selatan = Tenggara.' },
      { text: 'Alat yang digunakan untuk menentukan arah mata angin (selalu menunjuk utara-selatan) adalah...', opts: ['Termometer', 'Kompas', 'Barometer', 'Timbangan'], ans: 1, exp: 'Jarum magnet kompas selalu menunjuk arah utara–selatan.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-02', subSeq: 4,
    objectives: ['Siswa mampu membaca informasi dasar pada peta wilayah kabupaten/kota (batas wilayah, kecamatan, jalan utama).'],
    materialTitle: 'Membaca Peta Kabupaten/Kota',
    blocks: [
      { type: 'list', title: 'Yang Bisa Kita Baca di Peta Kabupaten/Kota', items: ['Letak ibu kota kabupaten dan pembagian wilayah kecamatan.', 'Batas wilayah di sebelah utara, timur, selatan, dan barat.', 'Jalan raya utama, jalur kereta api, sungai besar, dan garis pantai.', 'Simbol fasilitas penting seperti pelabuhan atau kawasan industri.'] },
    ],
    activityTitle: 'Latihan: Peta Kabupaten/Kota',
    questions: [
      { text: 'Wilayah administratif yang berada tepat satu tingkat di bawah kabupaten/kota adalah...', opts: ['Provinsi', 'Kecamatan', 'Negara', 'Benua'], ans: 1, exp: 'Urutan: Provinsi → Kabupaten/Kota → Kecamatan → Desa/Kelurahan.' },
      { text: 'Bagian peta yang pertama kali dibaca untuk mengetahui wilayah apa yang digambarkan adalah...', opts: ['Judul peta', 'Garis tepi', 'Tahun cetak', 'Inset saja'], ans: 0, exp: 'Judul peta langsung menyatakan nama wilayah dan tema peta.' },
      { text: 'Untuk mengetahui kabupaten apa yang berbatasan di sebelah barat wilayah kita, kita melihat ke arah ... pada peta.', opts: ['Atas', 'Bawah', 'Kiri', 'Kanan'], ans: 2, exp: 'Pada peta standar, kiri adalah arah Barat.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-02', subSeq: 5,
    objectives: ['Siswa mampu mengenal letak geografis, ibu kota, dan ciri umum Provinsi Jawa Timur.'],
    materialTitle: 'Mengenal Provinsi Jawa Timur',
    blocks: [
      { type: 'visual_cards', title: 'Fakta Singkat Provinsi Jawa Timur', cards: [
        { emoji: '🏙️', label: 'Ibu Kota: Surabaya', sub: 'Terletak di bagian timur Pulau Jawa' },
        { emoji: '🌊', label: 'Batas Perairan', sub: 'Utara: Laut Jawa, Timur: Selat Bali, Selatan: Samudra Hindia' },
        { emoji: '🗺️', label: 'Batas Daratan', sub: 'Sebelah Barat berbatasan dengan Provinsi Jawa Tengah' },
        { emoji: '⛰️', label: 'Bentang Alam Beragam', sub: 'Punya dataran rendah, pantai, sungai besar (Bengawan Solo & Brantas), serta pegunungan' },
      ]},
    ],
    activityTitle: 'Latihan: Provinsi Jawa Timur',
    questions: [
      { text: 'Ibu kota Provinsi Jawa Timur adalah...', opts: ['Malang', 'Surabaya', 'Semarang', 'Bandung'], ans: 1, exp: 'Surabaya adalah ibu kota Provinsi Jawa Timur.' },
      { text: 'Di sebelah BARAT, Provinsi Jawa Timur berbatasan daratan dengan Provinsi...', opts: ['Bali', 'Jawa Tengah', 'Jawa Barat', 'Banten'], ans: 1, exp: 'Sebelah barat Jawa Timur adalah Jawa Tengah.' },
      { text: 'Laut yang terletak di sebelah UTARA Provinsi Jawa Timur adalah...', opts: ['Samudra Hindia', 'Laut Jawa', 'Laut Banda', 'Selat Sunda'], ans: 1, exp: 'Pesisir utara Jawa Timur menghadap ke Laut Jawa.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-02', subSeq: 6,
    objectives: ['Siswa mampu mengenali letak geografis, batas wilayah, dan karakteristik umum Kabupaten Gresik (wilayah daratan).'],
    materialTitle: 'Mengenal Letak Kabupaten Gresik',
    blocks: [
      { type: 'table', title: 'Batas Wilayah Kabupaten Gresik', headers: ['Arah', 'Berbatasan Dengan'], rows: [
        ['Utara', 'Laut Jawa'],
        ['Timur', 'Selat Madura dan Kota Surabaya'],
        ['Selatan', 'Kabupaten Sidoarjo dan Kabupaten Mojokerto'],
        ['Barat', 'Kabupaten Lamongan'],
      ]},
      { type: 'tip', text: 'Wilayah daratan Kabupaten Gresik banyak berupa dataran rendah dan pesisir, dikenal dengan perikanan tambak (seperti bandeng), pertanian, perdagangan, dan kawasan industri.' },
    ],
    activityTitle: 'Latihan: Letak Kabupaten Gresik',
    questions: [
      { text: 'Kabupaten Gresik terletak di Provinsi...', opts: ['Jawa Tengah', 'Jawa Timur', 'Jawa Barat', 'DI Yogyakarta'], ans: 1, exp: 'Gresik adalah salah satu kabupaten di Provinsi Jawa Timur.' },
      { text: 'Di sebelah BARAT, Kabupaten Gresik berbatasan dengan Kabupaten...', opts: ['Lamongan', 'Banyuwangi', 'Malang', 'Kediri'], ans: 0, exp: 'Sebelah barat Gresik adalah Kabupaten Lamongan.' },
      { text: 'Kota besar yang berbatasan langsung di sebelah timur/tenggara Kabupaten Gresik adalah...', opts: ['Kota Surabaya', 'Kota Semarang', 'Kota Denpasar', 'Kota Bandung'], ans: 0, exp: 'Gresik bertetangga langsung dengan Kota Surabaya.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-02', subSeq: 7,
    objectives: ['Siswa mampu membedakan kelebihan dan penggunaan peta konvensional (kertas) dan peta digital (aplikasi peta).'],
    materialTitle: 'Peta Digital dan Peta Konvensional',
    blocks: [
      { type: 'table', title: 'Perbandingan Peta Kertas vs Peta Digital', headers: ['Aspek', 'Peta Konvensional (Kertas/Atlas)', 'Peta Digital (HP / GPS)'], rows: [
        ['Bentuk', 'Dicetak di kertas/dinding', 'Ditampilkan di layar ponsel/komputer'],
        ['Kelebihan', 'Tidak butuh baterai & sinyal internet', 'Bisa diperbesar (zoom), tunjukkan rute & posisi langsung (GPS)'],
        ['Keterbatasan', 'Informasi tidak langsung terbarui', 'Membutuhkan baterai dan biasanya koneksi internet'],
      ]},
    ],
    activityTitle: 'Latihan: Peta Digital & Konvensional',
    questions: [
      { text: 'Kelebihan utama peta digital (seperti aplikasi peta di ponsel) dibandingkan peta kertas adalah...', opts: ['Tidak perlu baterai', 'Dapat diperbesar dan memberi petunjuk rute perjalanan secara langsung', 'Tidak bisa rusak', 'Hanya menunjukkan satu kota'], ans: 1, exp: 'Peta digital interaktif dilengkapi fitur zoom dan navigasi GPS.' },
      { text: 'Kelebihan peta konvensional (kertas) saat berada di tempat tanpa sinyal dan listrik adalah...', opts: ['Bisa dipakai tanpa baterai dan sinyal internet', 'Bisa berbicara sendiri', 'Berubah otomatis', 'Menyala dalam gelap'], ans: 0, exp: 'Peta kertas tidak bergantung pada listrik maupun jaringan internet.' },
      { text: 'Fitur pada peta digital untuk memperbesar tampilan agar nama jalan terlihat jelas disebut...', opts: ['Zoom in', 'Mute', 'Delete', 'Sleep'], ans: 0, exp: 'Zoom in memperbesar tampilan peta.' },
    ],
  },

  // BAB 3: ZAT DAN PERUBAHAN WUJUDNYA
  {
    topicCode: 'IPAS-SD4-03', subSeq: 1,
    objectives: ['Siswa mampu mengelompokkan benda-benda di sekitar ke dalam wujud padat, cair, dan gas.'],
    materialTitle: 'Mengenal Wujud Zat: Padat, Cair, dan Gas',
    blocks: [
      { type: 'visual_cards', title: '3 Wujud Zat di Sekitar Kita', cards: [
        { emoji: '🧱', label: 'Zat Padat', sub: 'Batu, kayu, buku, es batu, besi' },
        { emoji: '💧', label: 'Zat Cair', sub: 'Air minum, minyak goreng, susu, kecap' },
        { emoji: '🎈', label: 'Zat Gas', sub: 'Udara di dalam balon, oksigen, uap air, angin' },
      ]},
      { type: 'tip', text: 'Semua benda yang memiliki massa (berat) dan menempati ruang disebut MATERI atau ZAT!' },
    ],
    activityTitle: 'Latihan: Padat, Cair, Gas',
    questions: [
      { text: 'Segala sesuatu yang memiliki massa dan menempati ruang disebut...', opts: ['Materi / Zat', 'Bayangan', 'Bunyi', 'Cahaya'], ans: 0, exp: 'Materi/zat memiliki massa dan volume (menempati ruang).' },
      { text: 'Contoh benda berwujud GAS adalah...', opts: ['Minyak goreng', 'Udara di dalam ban sepeda', 'Es batu', 'Gula pasir'], ans: 1, exp: 'Udara dalam ban berwujud gas.' },
      { text: 'Madu, sirup, dan air laut termasuk benda berwujud...', opts: ['Padat', 'Cair', 'Gas', 'Uap'], ans: 1, exp: 'Ketiganya dapat mengalir dan berwujud cair.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-03', subSeq: 2,
    objectives: ['Siswa mampu membandingkan sifat bentuk dan volume zat padat, cair, dan gas.'],
    materialTitle: 'Sifat Zat Padat, Cair, dan Gas',
    blocks: [
      { type: 'table', title: 'Perbandingan Sifat 3 Wujud Zat', headers: ['Wujud Zat', 'Bentuk', 'Volume', 'Ciri Khas Lain'], rows: [
        ['Padat', 'TETAP', 'TETAP', 'Dapat dipegang langsung, tidak mengalir'],
        ['Cair', 'BERUBAH mengikuti wadah', 'TETAP', 'Mengalir dari tempat tinggi ke rendah, permukaan tenang selalu datar'],
        ['Gas', 'BERUBAH memenuhi wadah', 'BERUBAH (mengembang)', 'Menekan ke segala arah, umumnya tak tampak mata'],
      ]},
    ],
    activityTitle: 'Latihan: Sifat Zat',
    questions: [
      { text: 'Jika sebuah pensil dipindahkan dari gelas ke atas piring, bentuk dan volumenya...', opts: ['Berubah jadi bulat', 'Tetap seperti semula', 'Menguap hilang', 'Mengalir'], ans: 1, exp: 'Zat padat memiliki bentuk dan volume tetap.' },
      { text: 'Air yang dituang dari botol ke mangkuk bentuknya berubah menyerupai mangkuk, sedangkan volumenya...', opts: ['Tetap', 'Hilang', 'Berubah jadi dua kali lipat', 'Membeku'], ans: 0, exp: 'Zat cair bentuknya mengikuti wadah, volumenya tetap.' },
      { text: 'Zat yang bentuk DAN volumenya selalu berubah memenuhi seluruh ruang wadahnya adalah...', opts: ['Padat', 'Cair', 'Gas', 'Logam'], ans: 2, exp: 'Gas mengisi seluruh ruangan yang tersedia.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-03', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan proses mencair (padat → cair) beserta penyebab dan contohnya.'],
    materialTitle: 'Perubahan Wujud: Mencair (Meleleh)',
    blocks: [
      { type: 'formula', name: 'Proses Mencair', expression: 'Padat  +  Panas (Kalor)  →  Cair', note: 'Mencair terjadi ketika benda padat MENERIMA / MENYERAP panas.' },
      { type: 'visual_cards', title: 'Contoh Mencair Sehari-Hari', cards: [
        { emoji: '🧊', label: 'Es Batu di Udara Terbuka', sub: 'Lama-kelamaan berubah menjadi air' },
        { emoji: '🧈', label: 'Mentega di Wajan Panas', sub: 'Meleleh menjadi cairan kuning' },
        { emoji: '🕯️', label: 'Lilin Dinyalakan', sub: 'Batang lilin meleleh karena panas api' },
      ]},
    ],
    activityTitle: 'Latihan: Mencair',
    questions: [
      { text: 'Perubahan wujud benda dari PADAT menjadi CAIR disebut...', opts: ['Membeku', 'Mencair', 'Menguap', 'Mengembun'], ans: 1, exp: 'Padat → cair = mencair (meleleh).' },
      { text: 'Es krim yang dibiarkan di luar kulkas mencair karena...', opts: ['Melepaskan panas', 'Menyerap panas dari udara sekitar', 'Ditiup angin dingin', 'Berubah jadi gas'], ans: 1, exp: 'Mencair memerlukan penyerapan kalor (panas).' },
      { text: 'Contoh peristiwa mencair di dapur adalah...', opts: ['Air jadi es di freezer', 'Mentega dipanaskan di atas penggorengan', 'Air mendidih jadi uap', 'Kapur barus mengecil'], ans: 1, exp: 'Mentega padat berubah cair saat dipanaskan.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-03', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan proses membeku (cair → padat) karena pelepasan panas.'],
    materialTitle: 'Perubahan Wujud: Membeku',
    blocks: [
      { type: 'formula', name: 'Proses Membeku', expression: 'Cair  −  Panas (Didinginkan)  →  Padat', note: 'Membeku adalah kebalikan mencair: benda cair MELEPASKAN panas (suhunya turun).' },
      { type: 'visual_cards', title: 'Contoh Membeku', cards: [
        { emoji: '❄️', label: 'Air di Freezer', sub: 'Air cair menjadi es batu padat pada suhu 0°C' },
        { emoji: '🍮', label: 'Agar-Agar Mendingin', sub: 'Cairan agar-agar panas menjadi kenyal padat saat dingin' },
        { emoji: '🕯️', label: 'Tetesan Lilin Dingin', sub: 'Lilin cair mengeras kembali begitu jauh dari api' },
      ]},
    ],
    activityTitle: 'Latihan: Membeku',
    questions: [
      { text: 'Perubahan wujud benda dari CAIR menjadi PADAT disebut...', opts: ['Mencair', 'Membeku', 'Menguap', 'Menyublim'], ans: 1, exp: 'Cair → padat = membeku.' },
      { text: 'Agar-agar yang baru dimasak masih cair, lalu setelah didinginkan menjadi padat. Peristiwa ini disebut...', opts: ['Membeku', 'Mengembun', 'Mencair', 'Menguap'], ans: 0, exp: 'Pelepasan panas membuat cairan agar-agar memadat (membeku).' },
      { text: 'Peristiwa membeku terjadi karena benda cair ... kalor (panas).', opts: ['Menerima', 'Melepaskan', 'Menciptakan', 'Membakar'], ans: 1, exp: 'Didinginkan artinya kalor dilepaskan ke lingkungan.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-03', subSeq: 5,
    objectives: ['Siswa mampu menjelaskan proses menguap (cair → gas) dan faktor yang mempercepat penguapan.'],
    materialTitle: 'Perubahan Wujud: Menguap',
    blocks: [
      { type: 'formula', name: 'Proses Menguap', expression: 'Cair  +  Panas (Kalor)  →  Gas', note: 'Penguapan makin cepat jika dipanaskan, permukaan diperluas, atau ditiup angin!' },
      { type: 'visual_cards', title: 'Contoh Menguap Sehari-Hari', cards: [
        { emoji: '👕', label: 'Menjemur Baju Basah', sub: 'Air pada baju menguap jadi uap air terkena panas matahari' },
        { emoji: '🫖', label: 'Air Mendidih di Ceret', sub: 'Keluar uap panas dari mulut ceret' },
        { emoji: '🧂', label: 'Pembuatan Garam di Pesisir', sub: 'Air laut diuapkan matahari hingga tersisa kristal garam' },
      ]},
    ],
    activityTitle: 'Latihan: Menguap',
    questions: [
      { text: 'Perubahan wujud dari CAIR menjadi GAS disebut...', opts: ['Mengembun', 'Menguap', 'Membeku', 'Menyublim'], ans: 1, exp: 'Cair → gas = menguap.' },
      { text: 'Pakaian basah yang dijemur di bawah terik matahari menjadi kering karena airnya...', opts: ['Membeku', 'Menguap', 'Menyublim', 'Mencair'], ans: 1, exp: 'Panas matahari mengubah air cair menjadi uap gas.' },
      { text: 'Minyak kayu putih yang dibiarkan terbuka tutupnya lama-lama berkurang volumenya karena mengalami...', opts: ['Penguapan', 'Pembekuan', 'Pengembunan', 'Pelelehan'], ans: 0, exp: 'Minyak kayu putih mudah menguap menjadi gas.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-03', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan proses mengembun (gas → cair) karena pendinginan.'],
    materialTitle: 'Perubahan Wujud: Mengembun',
    blocks: [
      { type: 'formula', name: 'Proses Mengembun', expression: 'Gas  −  Panas (Didinginkan)  →  Cair', note: 'Kebalikan dari menguap! Terjadi ketika uap air (gas) menyentuh permukaan dingin.' },
      { type: 'visual_cards', title: 'Contoh Mengembun yang Sering Kita Lihat', cards: [
        { emoji: '🥤', label: 'Gelas Berisi Es', sub: 'Dinding luar gelas basah oleh titik air (bukan bocor!)' },
        { emoji: '🌿', label: 'Embun Pagi di Daun', sub: 'Uap air udara malam mendingin menjadi titik air di pagi hari' },
        { emoji: '🍲', label: 'Tutup Panci Air Panas', sub: 'Bagian dalam tutup panci penuh tetesan air' },
      ]},
      { type: 'misconception', wrong: 'Mengira air di luar gelas es merembes keluar menembus kaca gelas.', right: 'Gelas kaca tidak bocor! Air itu berasal dari UAP AIR DI UDARA sekitar yang mendingin lalu mengembun di dinding luar gelas.' },
    ],
    activityTitle: 'Latihan: Mengembun',
    questions: [
      { text: 'Perubahan wujud benda dari GAS menjadi CAIR disebut...', opts: ['Menguap', 'Mengembun', 'Mencair', 'Menyublim'], ans: 1, exp: 'Gas → cair = mengembun.' },
      { text: 'Titik-titik air yang muncul di bagian LUAR gelas berisi es teh berasal dari...', opts: ['Air teh yang bocor lewat kaca', 'Uap air di udara yang mengembun karena dingin', 'Es batu yang melompat', 'Gula yang mencair'], ans: 1, exp: 'Uap air udara melepaskan panas saat menyentuh gelas dingin lalu mengembun.' },
      { text: 'Munculnya titik air di kaca mobil bagian dalam saat hujan dingin adalah contoh peristiwa...', opts: ['Mengembun', 'Membeku', 'Menyublim', 'Mencair'], ans: 0, exp: 'Uap air udara di dalam mobil mengembun pada kaca yang dingin.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-03', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan proses menyublim (padat → gas) dan mengkristal/deposisi (gas → padat).'],
    materialTitle: 'Perubahan Wujud: Menyublim (dan Mengkristal)',
    blocks: [
      { type: 'formula', name: 'Menyublim vs Mengkristal', expression: 'Menyublim: Padat → Gas  |  Mengkristal: Gas → Padat', note: 'Langsung melompati fase cair!' },
      { type: 'visual_cards', title: 'Contoh Nyata Menyublim & Mengkristal', cards: [
        { emoji: '🫧', label: 'Kapur Barus (Kamper)', sub: 'Ditaruh di lemari, makin lama makin kecil dan lemari jadi harum (menyublim)' },
        { emoji: '💨', label: 'Es Kering (Dry Ice)', sub: 'Langsung berubah jadi asap putih tanpa basah (menyublim)' },
        { emoji: '❄️', label: 'Bunga Es di Freezer', sub: 'Uap air berubah langsung jadi kristal es (mengkristal)' },
      ]},
    ],
    activityTitle: 'Latihan: Menyublim',
    questions: [
      { text: 'Perubahan wujud langsung dari PADAT menjadi GAS tanpa mencair dulu disebut...', opts: ['Mengembun', 'Menyublim', 'Membeku', 'Menguap'], ans: 1, exp: 'Padat → gas = menyublim.' },
      { text: 'Kapur barus (kamper) yang diletakkan di lemari pakaian lama-lama mengecil dan habis karena...', opts: ['Dimakan semut', 'Mencair', 'Menyublim menjadi gas harum', 'Membeku'], ans: 2, exp: 'Kapur barus menyublim dari padat langsung menjadi gas.' },
      { text: 'Kebalikan dari menyublim (perubahan dari GAS menjadi PADAT) disebut...', opts: ['Mengkristal (deposisi)', 'Mencair', 'Menguap', 'Mengembun'], ans: 0, exp: 'Gas → padat disebut mengkristal/deposisi.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-03', subSeq: 8,
    objectives: ['Siswa mampu memetakan seluruh 6 perubahan wujud zat beserta apakah menyerap atau melepaskan kalor.'],
    materialTitle: 'Rangkuman Perubahan Wujud Sehari-Hari',
    blocks: [
      { type: 'table', title: 'Peta Lengkap 6 Perubahan Wujud Zat', headers: ['Perubahan', 'Wujud', 'Kalor (Panas)', 'Contoh'], rows: [
        ['Mencair', 'Padat → Cair', 'Menyerap panas', 'Es batu meleleh'],
        ['Menguap', 'Cair → Gas', 'Menyerap panas', 'Menjemur baju basah'],
        ['Menyublim', 'Padat → Gas', 'Menyerap panas', 'Kamper mengecil'],
        ['Membeku', 'Cair → Padat', 'Melepas panas', 'Air jadi es batu'],
        ['Mengembun', 'Gas → Cair', 'Melepas panas', 'Embun pagi di daun'],
        ['Mengkristal', 'Gas → Padat', 'Melepas panas', 'Bunga es di freezer'],
      ]},
    ],
    activityTitle: 'Latihan: Peta Perubahan Wujud',
    questions: [
      { text: 'Tiga perubahan wujud yang MENYERAP panas (kalor) adalah...', opts: ['Mencair, menguap, menyublim', 'Membeku, mengembun, mengkristal', 'Mencair, membeku, mengembun', 'Menguap, membeku, mengkristal'], ans: 0, exp: 'Mencair, menguap, dan menyublim semuanya butuh pemanasan.' },
      { text: 'Dalam proses terjadinya hujan, air laut terkena panas matahari menjadi uap air (1), lalu di langit dingin membentuk awan/titik air (2). Proses (1) dan (2) berturut-turut adalah...', opts: ['Membeku dan mencair', 'Menguap dan mengembun', 'Menyublim dan membeku', 'Mencair dan menguap'], ans: 1, exp: 'Air laut menguap ke langit, lalu mengembun membentuk awan dan hujan.' },
      { text: 'Pembuatan garam tradisional oleh petani tambak memanfaatkan peristiwa...', opts: ['Penguapan air laut', 'Pembekuan air', 'Penyubliman', 'Pelelehan'], ans: 0, exp: 'Panas matahari menguapkan air laut hingga tertinggal kristal garam.' },
    ],
  },

  // BAB 4: GAYA DAN PENGARUHNYA
  {
    topicCode: 'IPAS-SD4-04', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian gaya sebagai tarikan atau dorongan pada suatu benda.'],
    materialTitle: 'Pengertian Gaya',
    blocks: [
      { type: 'story_panel', title: 'Dorong dan Tarik!', lines: [
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Setiap kali kamu mendorong meja, menarik pintu, atau menendang bola, kamu sedang memberikan GAYA!' },
        { speaker: 'Bima', avatar: '👦', text: 'Jadi gaya adalah tarikan atau dorongan yang bekerja pada suatu benda ya Pak!' },
      ]},
      { type: 'tip', text: 'Satuan gaya adalah Newton (N), dan alat untuk mengukur besar gaya disebut DINAMOMETER (neraca pegas).' },
    ],
    activityTitle: 'Latihan: Pengertian Gaya',
    questions: [
      { text: 'Gaya dalam ilmu IPA diartikan sebagai...', opts: ['Model pakaian', 'Tarikan atau dorongan pada suatu benda', 'Warna benda', 'Suhu udara'], ans: 1, exp: 'Gaya adalah tarikan atau dorongan yang dapat memengaruhi gerak atau bentuk benda.' },
      { text: 'Kegiatan membuka laci meja termasuk pemberian gaya berupa...', opts: ['Tarikan', 'Dorongan', 'Cahaya', 'Panas'], ans: 0, exp: 'Membuka laci dilakukan dengan menarik gagangnya.' },
      { text: 'Alat yang digunakan untuk mengukur besar kecilnya gaya adalah...', opts: ['Penggaris', 'Dinamometer', 'Termometer', 'Kompas'], ans: 1, exp: 'Dinamometer (neraca pegas) mengukur gaya dalam satuan Newton.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-04', subSeq: 2,
    objectives: ['Siswa mampu memberi contoh penerapan gaya otot manusia dan hewan dalam aktivitas sehari-hari.'],
    materialTitle: 'Gaya Otot',
    blocks: [
      { type: 'visual_cards', title: 'Contoh Gaya Otot Sehari-Hari', cards: [
        { emoji: '🚲', label: 'Mengayuh Sepeda', sub: 'Otot kaki mendorong pedal sepeda' },
        { emoji: '🎒', label: 'Mengangkat Tas & Menulis', sub: 'Otot tangan bekerja memegang pensil dan mengangkat barang' },
        { emoji: '🐂', label: 'Sapi Membajak Sawah / Kuda Menarik Delman', sub: 'Gaya otot dari hewan membantu pekerjaan manusia' },
      ]},
    ],
    activityTitle: 'Latihan: Gaya Otot',
    questions: [
      { text: 'Gaya yang dihasilkan oleh tenaga otot manusia atau hewan disebut...', opts: ['Gaya magnet', 'Gaya otot', 'Gaya gravitasi', 'Gaya listrik'], ans: 1, exp: 'Gaya otot bersumber dari kontraksi otot makhluk hidup.' },
      { text: 'Contoh pemanfaatan gaya otot dalam olahraga adalah...', opts: ['Bola jatuh dari meja', 'Menendang bola dan menarik tambang', 'Kompas menunjuk utara', 'Kipas berputar karena listrik'], ans: 1, exp: 'Menendang bola dan tarik tambang mengandalkan tenaga otot.' },
      { text: 'Supaya otot tetap kuat menghasilkan gaya, kita perlu...', opts: ['Makan makanan bergizi dan rutin berolahraga', 'Tidur terus sepanjang hari', 'Tidak pernah bergerak', 'Hanya makan permen'], ans: 0, exp: 'Nutrisi dan olahraga menjaga kekuatan otot.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-04', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan gaya gesek, pengaruh tekstur permukaan, serta manfaat dan kerugiannya.'],
    materialTitle: 'Gaya Gesek',
    blocks: [
      { type: 'text', text: 'Gaya gesek muncul saat DUA permukaan benda saling bersentuhan. Arah gaya gesek selalu BERLAWANAN dengan arah gerak benda sehingga menghambat gerak.' },
      { type: 'table', title: 'Memperbesar vs Memperkecil Gaya Gesek', headers: ['Tujuan', 'Cara', 'Contoh'], rows: [
        ['Memperbesar (biar tidak licin)', 'Membuat permukaan KASAR/beralur', 'Alur pada ban sepeda/motor, sol sepatu beralur, rem sepeda'],
        ['Memperkecil (biar licin/lancar)', 'Membuat permukaan HALUS/diberi pelumas/roda', 'Rantai sepeda diberi oli, memasang roda pada koper/lemari'],
      ]},
    ],
    activityTitle: 'Latihan: Gaya Gesek',
    questions: [
      { text: 'Arah gaya gesek selalu ... dengan arah gerak benda.', opts: ['Searah', 'Berlawanan', 'Tegak lurus ke atas', 'Acak'], ans: 1, exp: 'Gaya gesek menghambat gerak sehingga arahnya berlawanan.' },
      { text: 'Mengapa ban sepeda dan sol sepatu dibuat beralur kasar?', opts: ['Agar lebih berat', 'Memperbesar gaya gesek supaya tidak mudah tergelincir', 'Supaya cepat licin', 'Hanya untuk hiasan'], ans: 1, exp: 'Permukaan kasar memperbesar gaya gesek untuk keamanan.' },
      { text: 'Memberi minyak pelumas (oli) pada rantai sepeda bertujuan untuk...', opts: ['Memperbesar gesekan', 'Memperkecil gaya gesek agar kayuhan ringan dan rantai awet', 'Menghentikan sepeda', 'Membuat berkarat'], ans: 1, exp: 'Pelumas melicinkan permukaan sehingga gesekan dan keausan berkurang.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-04', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan sifat-sifat magnet (kutub U–S, benda magnetis/nonmagnetis) dan kegunaannya.'],
    materialTitle: 'Gaya Magnet',
    blocks: [
      { type: 'visual_cards', title: 'Sifat Ajaib Magnet', cards: [
        { emoji: '🧲', label: 'Menarik Benda Magnetis', sub: 'Besi, baja, nikel, kobalt (TIDAK menarik kayu, plastik, kertas, kaca)' },
        { emoji: '↔️', label: 'Kutub Sama = TOLAK-MENOLAK', sub: 'Utara ↔ Utara atau Selatan ↔ Selatan saling mendorong' },
        { emoji: '🤝', label: 'Kutub Beda = TARIK-MENARIK', sub: 'Utara ↔ Selatan langsung menempel erat!' },
        { emoji: '🧭', label: 'Kegunaan Magnet', sub: 'Jarum kompas, pintu kulkas, kotak pensil magnet, speaker' },
      ]},
    ],
    activityTitle: 'Latihan: Gaya Magnet',
    questions: [
      { text: 'Benda yang DAPAT ditarik kuat oleh magnet adalah...', opts: ['Penghapus karet dan kayu', 'Paku besi dan klip kertas baja', 'Kertas dan plastik', 'Kaca dan kain'], ans: 1, exp: 'Besi dan baja bersifat magnetis (feromagnetik).' },
      { text: 'Jika kutub Utara magnet didekatkan dengan kutub Utara magnet lain, yang terjadi adalah...', opts: ['Tarik-menarik', 'Tolak-menolak', 'Menempel kuat', 'Mencair'], ans: 1, exp: 'Kutub senama (sama) saling tolak-menolak.' },
      { text: 'Alat rumah tangga yang memanfaatkan magnet agar pintunya menutup rapat adalah...', opts: ['Lemari es (kulkas)', 'Kompor gas', 'Sapu lidi', 'Gelas kaca'], ans: 0, exp: 'Karet pintu kulkas berisi strip magnet agar udara dingin tidak keluar.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-04', subSeq: 5,
    objectives: ['Siswa mampu menjelaskan gaya gravitasi bumi sebagai gaya tarik bumi ke arah pusatnya.'],
    materialTitle: 'Gaya Gravitasi Bumi',
    blocks: [
      { type: 'story_panel', title: 'Kenapa Buah Mangga Jatuh ke Bawah?', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Bu, kenapa bola yang kulempar ke atas selalu jatuh kembali ke tanah?' },
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Karena bumi memiliki GAYA GRAVITASI yang selalu menarik semua benda menuju pusat bumi!' },
      ]},
      { type: 'tip', text: 'Berkat gravitasi bumi, kita bisa berdiri mantap di tanah, air mengalir ke bawah, dan atmosfer (udara) tetap menyelimuti bumi!' },
    ],
    activityTitle: 'Latihan: Gaya Gravitasi',
    questions: [
      { text: 'Gaya tarik bumi yang menyebabkan semua benda selalu jatuh ke bawah disebut...', opts: ['Gaya gesek', 'Gaya gravitasi', 'Gaya magnet', 'Gaya pegas'], ans: 1, exp: 'Gravitasi bumi menarik benda menuju pusat bumi.' },
      { text: 'Contoh peristiwa yang dipengaruhi gaya gravitasi adalah...', opts: ['Buah kelapa jatuh dari pohonnya ke tanah', 'Paku menempel di magnet', 'Tangan menarik pintu', 'Lampu menyala'], ans: 0, exp: 'Jatuhnya buah dari pohon disebabkan gaya gravitasi bumi.' },
      { text: 'Mengapa lembar kertas datar jatuh lebih lambat daripada batu yang dijatuhkan dari ketinggian sama?', opts: ['Kertas tidak kena gravitasi', 'Permukaan lebar kertas lebih banyak tertahan hambatan udara', 'Batu ditarik magnet', 'Kertas lebih berat'], ans: 1, exp: 'Hambatan udara menahan permukaan lebar kertas sehingga jatuhnya lebih lambat.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-04', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan pengaruh gaya terhadap benda diam, benda bergerak, dan perubahan arah gerak.'],
    materialTitle: 'Pengaruh Gaya terhadap Arah Gerak',
    blocks: [
      { type: 'visual_cards', title: 'Apa yang Gaya Lakukan pada Gerak Benda?', cards: [
        { emoji: '⚽', label: 'Diam → Bergerak', sub: 'Bola diam meluncur setelah ditendang' },
        { emoji: '🧤', label: 'Bergerak → Diam', sub: 'Kiper menangkap bola yang melaju kencang hingga berhenti' },
        { emoji: '🏸', label: 'Mengubah Arah Gerak', sub: 'Kok bulu tangkis berbalik arah saat dipukul raket; setir sepeda dibelokkan' },
      ]},
    ],
    activityTitle: 'Latihan: Gaya & Arah Gerak',
    questions: [
      { text: 'Pemain bulu tangkis memukul kok yang datang ke arahnya sehingga kok memantul balik. Ini membuktikan gaya dapat...', opts: ['Mengubah arah gerak benda', 'Mengubah warna benda', 'Mencairkan benda', 'Membuat benda menghilang'], ans: 0, exp: 'Pukulan raket mengubah arah gerak kok.' },
      { text: 'Kiper menangkap bola tendangan lawan hingga bola berhenti di tangannya. Ini membuktikan gaya dapat...', opts: ['Membuat benda diam bergerak', 'Menghentikan benda yang sedang bergerak', 'Mempercepat bola', 'Mengubah wujud bola'], ans: 1, exp: 'Gaya tangkapan menghentikan gerak bola.' },
      { text: 'Saat membelokkan setang sepeda ke kanan, pengaruh gaya yang terjadi adalah...', opts: ['Mengubah arah gerak sepeda', 'Mengubah bentuk besi', 'Membuat sepeda melayang', 'Menghilangkan gesekan'], ans: 0, exp: 'Gaya otot pada setang membelokkan arah laju sepeda.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-04', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan pengaruh gaya terhadap kecepatan gerak dan perubahan bentuk benda.'],
    materialTitle: 'Pengaruh Gaya terhadap Kecepatan & Bentuk Benda',
    blocks: [
      { type: 'visual_cards', title: 'Pengaruh Gaya pada Kecepatan & Bentuk', cards: [
        { emoji: '💨', label: 'Mempercepat Gerak', sub: 'Mengayuh sepeda makin kencang → sepeda melaju lebih cepat' },
        { emoji: '🛑', label: 'Memperlambat Gerak', sub: 'Menarik tuas rem → gaya gesek memperlambat laju sepeda' },
        { emoji: '🏺', label: 'Mengubah Bentuk Benda', sub: 'Tanah liat/plastisin ditekan menjadi vas; kaleng bekas diremas penyok' },
      ]},
    ],
    activityTitle: 'Latihan: Kecepatan & Bentuk Benda',
    questions: [
      { text: 'Pengrajin menekan tanah liat hingga berubah menjadi bentuk kendi. Hal ini membuktikan gaya dapat...', opts: ['Mengubah bentuk benda', 'Mengubah arah angin', 'Membuat benda melayang', 'Mengubah rasa'], ans: 0, exp: 'Tekanan gaya otot mengubah bentuk plastis tanah liat.' },
      { text: 'Saat mobil direm menjelang lampu merah, gaya gesek rem mengakibatkan kecepatan mobil...', opts: ['Bertambah kencang', 'Melambat hingga berhenti', 'Berubah bentuk', 'Melompat ke atas'], ans: 1, exp: 'Rem memperlambat laju kendaraan.' },
      { text: 'Semakin kuat kamu mendorong mobil-mobilan di lantai licin, maka geraknya akan semakin...', opts: ['Lambat', 'Cepat dan jauh', 'Diam di tempat', 'Mundur'], ans: 1, exp: 'Besar gaya dorong sebanding dengan percepatan gerak benda.' },
    ],
  },

  // BAB 5: BENTANG ALAM DAN KEHIDUPAN MASYARAKAT
  {
    topicCode: 'IPAS-SD4-05', subSeq: 1,
    objectives: ['Siswa mampu membedakan karakteristik bentang alam dataran rendah dan dataran tinggi beserta pemanfaatannya.'],
    materialTitle: 'Dataran Rendah dan Dataran Tinggi',
    blocks: [
      { type: 'table', title: 'Dataran Rendah vs Dataran Tinggi', headers: ['Aspek', 'Dataran Rendah', 'Dataran Tinggi'], rows: [
        ['Ketinggian', '0 – 200 m di atas permukaan laut (mdpl)', 'Lebih dari 500 mdpl (daerah pegunungan)'],
        ['Suhu Udara', 'Cenderung hangat / panas', 'Sejuk / dingin'],
        ['Contoh Pemanfaatan', 'Permukiman, sawah padi, industri, perdagangan (seperti banyak wilayah Gresik daratan)', 'Perkebunan teh, kopi, sayur-sayuran, buah apel, wisata sejuk'],
      ]},
    ],
    activityTitle: 'Latihan: Dataran Rendah & Tinggi',
    questions: [
      { text: 'Wilayah datar dengan ketinggian 0–200 meter di atas permukaan laut disebut...', opts: ['Dataran tinggi', 'Dataran rendah', 'Puncak gunung', 'Palung laut'], ans: 1, exp: 'Dataran rendah berada pada ketinggian 0–200 mdpl.' },
      { text: 'Tanaman yang sangat cocok ditanam di daerah dataran tinggi yang berudara sejuk adalah...', opts: ['Pohon bakau', 'Teh, kol, wortel, dan stroberi', 'Terumbu karang', 'Rumput laut'], ans: 1, exp: 'Teh dan sayuran pegunungan tumbuh optimal di suhu sejuk dataran tinggi.' },
      { text: 'Sebagian besar wilayah daratan Kabupaten Gresik yang bersuhu hangat dan banyak sawah/industri termasuk...', opts: ['Dataran rendah dan pesisir', 'Pegunungan salju', 'Gurun pasir', 'Dataran tinggi 2.000 m'], ans: 0, exp: 'Gresik daratan didominasi dataran rendah dan pesisir.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-05', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan karakteristik serta manfaat bentang alam sungai dan pantai bagi masyarakat.'],
    materialTitle: 'Sungai dan Pantai',
    blocks: [
      { type: 'visual_cards', title: 'Manfaat Sungai & Pantai', cards: [
        { emoji: '🏞️', label: 'Sungai (seperti Bengawan Solo)', sub: 'Irigasi sawah, sumber air baku, budidaya ikan air tawar, transportasi air' },
        { emoji: '🏖️', label: 'Pantai & Pesisir', sub: 'Nelayan menangkap ikan, tambak ikan/udang (seperti tambak bandeng Gresik), garam, pelabuhan, wisata' },
      ]},
    ],
    activityTitle: 'Latihan: Sungai & Pantai',
    questions: [
      { text: 'Bagian pertemuan antara daratan dan lautan disebut...', opts: ['Lembah', 'Pantai', 'Bukit', 'Danau'], ans: 1, exp: 'Pantai adalah wilayah perbatasan daratan dan laut.' },
      { text: 'Manfaat utama sungai bagi petani di dataran rendah adalah...', opts: ['Tempat membuang sampah', 'Sumber air pengairan (irigasi) sawah', 'Tempat menambang batu bara', 'Membuat banjir'], ans: 1, exp: 'Air sungai dialirkan untuk mengairi lahan pertanian.' },
      { text: 'Usaha budidaya perikanan air payau yang banyak dijumpai di pesisir Gresik adalah...', opts: ['Tambak bandeng dan udang', 'Kebun teh', 'Perkebunan apel', 'Peternakan unta'], ans: 0, exp: 'Pesisir Gresik terkenal dengan budidaya tambak bandeng.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-05', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi sumber daya alam hayati dan nonhayati yang dihasilkan berbagai bentang alam.'],
    materialTitle: 'Sumber Daya Alam di Sekitar Kita',
    blocks: [
      { type: 'table', title: '2 Kelompok Sumber Daya Alam (SDA)', headers: ['Jenis SDA', 'Asalnya', 'Contoh'], rows: [
        ['SDA Hayati (Biotik)', 'Dari makhluk hidup (hewan & tumbuhan)', 'Padi, ikan bandeng, kayu, susu sapi, sayur, buah'],
        ['SDA Nonhayati (Abiotik)', 'Dari benda tak hidup / alam', 'Air, tanah, sinar matahari, angin, batu kapur, minyak bumi'],
      ]},
    ],
    activityTitle: 'Latihan: Sumber Daya Alam',
    questions: [
      { text: 'Sumber daya alam yang berasal dari makhluk hidup disebut SDA...', opts: ['Hayati', 'Nonhayati', 'Buatan', 'Sintetis'], ans: 0, exp: 'Hayati berasal dari tumbuhan dan hewan.' },
      { text: 'Manakah yang termasuk contoh SDA NONHAYATI?', opts: ['Ikan dan udang', 'Padi dan jagung', 'Air, sinar matahari, dan batu kapur', 'Sapi dan ayam'], ans: 2, exp: 'Air, matahari, dan mineral batuan adalah benda tak hidup (nonhayati).' },
      { text: 'Segala kekayaan alam yang dapat dimanfaatkan untuk memenuhi kebutuhan hidup manusia disebut...', opts: ['Sumber Daya Alam (SDA)', 'Peta', 'Gaya', 'Anggaran'], ans: 0, exp: 'Definisi Sumber Daya Alam.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-05', subSeq: 4,
    objectives: ['Siswa mampu menghubungkan jenis mata pencaharian (pekerjaan) masyarakat dengan kondisi bentang alamnya.'],
    materialTitle: 'Pekerjaan Masyarakat Sesuai Kondisi Wilayah',
    blocks: [
      { type: 'visual_cards', title: 'Kondisi Alam Memengaruhi Pekerjaan Warga', cards: [
        { emoji: '🏖️', label: 'Wilayah Pantai & Pesisir', sub: 'Nelayan, petambak ikan/udang, petani garam, pekerja pelabuhan' },
        { emoji: '🌾', label: 'Dataran Rendah & Perkotaan', sub: 'Petani padi, pedagang, karyawan pabrik/industri, guru, dokter' },
        { emoji: '⛰️', label: 'Dataran Tinggi / Pegunungan', sub: 'Petani sayur & teh, peternak sapi perah, pemandu wisata alam' },
      ]},
    ],
    activityTitle: 'Latihan: Pekerjaan & Wilayah',
    questions: [
      { text: 'Mata pencaharian yang paling banyak dijumpai di wilayah pesisir pantai adalah...', opts: ['Pemetik teh', 'Nelayan dan petambak ikan', 'Penebang kayu hutan pinus', 'Petani apel'], ans: 1, exp: 'Potensi laut dan air payau dimanfaatkan nelayan dan petambak.' },
      { text: 'Di kota industri dan perdagangan di dataran rendah, banyak warga bekerja sebagai...', opts: ['Karyawan pabrik, pedagang, dan penyedia jasa', 'Nelayan laut dalam saja', 'Pemetik kopi pegunungan', 'Pemburu salju'], ans: 0, exp: 'Akses jalan datar mendukung perkembangan industri, pasar, dan jasa.' },
      { text: 'Mengapa jenis pekerjaan warga di pegunungan berbeda dengan warga di pesisir?', opts: ['Karena kondisi alam dan sumber daya alamnya berbeda', 'Karena tidak mau bekerja', 'Karena aturan sekolah', 'Karena warna bajunya beda'], ans: 0, exp: 'Masyarakat beradaptasi memanfaatkan potensi alam wilayahnya.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-05', subSeq: 5,
    objectives: ['Siswa mampu menjelaskan bagaimana lingkungan alam memengaruhi makanan khas, pakaian, dan rumah masyarakat.'],
    materialTitle: 'Hubungan Lingkungan dengan Budaya Masyarakat',
    blocks: [
      { type: 'table', title: 'Adaptasi Budaya terhadap Alam', headers: ['Aspek Budaya', 'Di Daerah Pesisir / Panas', 'Di Daerah Pegunungan / Dingin'], rows: [
        ['Pakaian', 'Bahan tipis, menyerap keringat (katun)', 'Bahan tebal dan hangat (jaket, kain tenun tebal)'],
        ['Makanan Khas', 'Banyak olahan ikan & hasil laut (mis. otak-otak bandeng Gresik)', 'Banyak hidangan berkuah hangat & hasil kebun sayur'],
        ['Rumah', 'Banyak jendela/ventilasi agar sejuk', 'Ventilasi lebih rapat agar hangat di malam hari'],
      ]},
    ],
    activityTitle: 'Latihan: Lingkungan & Budaya',
    questions: [
      { text: 'Banyaknya kuliner berbahan ikan bandeng di Gresik menunjukkan hubungan erat antara budaya kuliner dengan...', opts: ['Potensi alam tambak dan pesisir setempat', 'Salju pegunungan', 'Gurun pasir', 'Hutan hujan tropis saja'], ans: 0, exp: 'Ketersediaan bahan lokal melimpah melahirkan kuliner khas daerah.' },
      { text: 'Penduduk di dataran tinggi pegunungan umumnya mengenakan pakaian tebal untuk...', opts: ['Bergaya saja', 'Menjaga tubuh tetap hangat dari udara dingin', 'Menahan panas terik', 'Berenang'], ans: 1, exp: 'Pakaian menyesuaikan suhu lingkungan.' },
      { text: 'Rumah di daerah beriklim panas biasanya dibuat berventilasi banyak agar...', opts: ['Udara segar mudah mengalir dan rumah tidak pengap', 'Hujan masuk rumah', 'Suara bising masuk', 'Gelap di siang hari'], ans: 0, exp: 'Sirkulasi udara membantu menurunkan rasa panas.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-05', subSeq: 6,
    objectives: ['Siswa mampu menyebutkan upaya menjaga kelestarian bentang alam (sungai, pantai, gunung, lahan hijau).'],
    materialTitle: 'Pelestarian Bentang Alam',
    blocks: [
      { type: 'visual_cards', title: 'Cara Menjaga Bentang Alam Kita', cards: [
        { emoji: '🌱', label: 'Tanam Mangrove di Pesisir', sub: 'Mencegah abrasi (pengikisan pantai oleh ombak)' },
        { emoji: '🌳', label: 'Reboisasi di Hutan & Bukit', sub: 'Mencegah banjir dan tanah longsor' },
        { emoji: '🌊', label: 'Jaga Kebersihan Sungai', sub: 'Tidak membuang sampah & limbah rumah tangga ke sungai' },
      ]},
    ],
    activityTitle: 'Latihan: Pelestarian Bentang Alam',
    questions: [
      { text: 'Penanaman pohon bakau (mangrove) di tepi pantai bertujuan mencegah...', opts: ['Abrasi (pengikisan daratan pantai oleh ombak)', 'Gempa bumi', 'Gunung meletus', 'Kekeringan gunung'], ans: 0, exp: 'Akar bakau menahan hantaman ombak dan melindungi garis pantai.' },
      { text: 'Penanaman kembali hutan yang gundul disebut...', opts: ['Abrasi', 'Reboisasi', 'Erosi', 'Polusi'], ans: 1, exp: 'Reboisasi = penghijauan kembali hutan gundul.' },
      { text: 'Akibat membuang sampah plastik ke sungai dan selokan secara terus-menerus adalah...', opts: ['Air makin jernih', 'Aliran tersumbat sehingga rawan banjir dan air tercemar', 'Ikan makin gemuk', 'Pohon tumbuh cepat'], ans: 1, exp: 'Sampah menyumbat aliran air dan mencemari ekosistem.' },
    ],
  },

  // BAB 6: PELESTARIAN SUMBER DAYA ALAM
  {
    topicCode: 'IPAS-SD4-06', subSeq: 1,
    objectives: ['Siswa mampu mengelompokkan jenis sumber daya alam berdasarkan pemanfaatannya (pangan, energi, bahan bangunan).'],
    materialTitle: 'Jenis dan Manfaat Sumber Daya Alam',
    blocks: [
      { type: 'table', title: 'Pemanfaatan SDA Sehari-Hari', headers: ['Kebutuhan', 'Contoh SDA yang Dipakai'], rows: [
        ['Bahan Pangan', 'Padi, jagung, kedelai, ikan, daging, sayur, buah'],
        ['Bahan Bangunan', 'Batu kapur (bahan semen), pasir, kayu, tanah liat (bata/genteng)'],
        ['Bahan Pakaian', 'Kapas (katun), ulat sutera, bulu domba (wol)'],
        ['Sumber Energi', 'Sinar matahari, air, angin, minyak bumi, batu bara, gas alam'],
      ]},
    ],
    activityTitle: 'Latihan: Jenis SDA',
    questions: [
      { text: 'Batu kapur dan tanah liat dimanfaatkan manusia terutama sebagai bahan...', opts: ['Makanan', 'Bangunan (semen, batu bata, genteng)', 'Pakaian', 'Minuman'], ans: 1, exp: 'Batu kapur adalah bahan utama semen dan tanah liat untuk bata/genteng.' },
      { text: 'Bahan pakaian kain katun yang nyaman dan menyerap keringat berasal dari tumbuhan...', opts: ['Kapas', 'Padi', 'Bakau', 'Bambu'], ans: 0, exp: 'Serat buah kapas dipintal menjadi benang dan kain katun.' },
      { text: 'Manakah yang merupakan SDA penghasil energi?', opts: ['Matahari, angin, air, dan minyak bumi', 'Batu bata dan genteng', 'Kapas dan wol', 'Kaca dan plastik'], ans: 0, exp: 'Keempatnya dimanfaatkan untuk menghasilkan tenaga/listrik.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-06', subSeq: 2,
    objectives: ['Siswa mampu membedakan SDA yang dapat diperbarui (terbarukan) dan tidak dapat diperbarui (tak terbarukan).'],
    materialTitle: 'SDA Terbarukan dan Tidak Terbarukan',
    blocks: [
      { type: 'table', title: 'Perbandingan SDA Terbarukan vs Tak Terbarukan', headers: ['Jenis', 'Sifat', 'Contoh'], rows: [
        ['Dapat Diperbarui (Terbarukan)', 'Dapat pulih/terbentuk kembali secara alami dalam waktu relatif cepat', 'Air, udara, sinar matahari, tumbuhan, hewan ternak, ikan'],
        ['Tidak Dapat Diperbarui', 'Jumlahnya terbatas, pembentukannya butuh jutaan tahun — bisa HABIS!', 'Minyak bumi (bensin/solar), batu bara, gas alam, emas, besi'],
      ]},
    ],
    activityTitle: 'Latihan: Terbarukan vs Tak Terbarukan',
    questions: [
      { text: 'Manakah yang termasuk SDA TIDAK DAPAT DIPERBARUI?', opts: ['Air dan angin', 'Minyak bumi dan batu bara', 'Padi dan jagung', 'Ayam dan ikan'], ans: 1, exp: 'Minyak bumi dan batu bara adalah bahan bakar fosil yang butuh jutaan tahun terbentuk.' },
      { text: 'Sinar matahari, angin, dan tumbuhan termasuk SDA...', opts: ['Dapat diperbarui (terbarukan)', 'Tidak dapat diperbarui', 'Buatan pabrik', 'Langka di luar angkasa'], ans: 0, exp: 'Ketiganya terus tersedia atau dapat ditanam/dibudidayakan kembali.' },
      { text: 'Meskipun air termasuk SDA terbarukan, kita tetap harus menghemat air bersih karena...', opts: ['Air bersih siap minum terbatas dan bisa tercemar', 'Air laut rasanya manis', 'Hujan turun setiap menit', 'Air tidak dibutuhkan tumbuhan'], ans: 0, exp: 'Air bersih layak konsumsi terbatas jumlahnya.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-06', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi penyebab kerusakan lingkungan akibat ulah manusia dan bencana alam.'],
    materialTitle: 'Kerusakan Lingkungan dan Penyebabnya',
    blocks: [
      { type: 'visual_cards', title: 'Perilaku yang Merusak Alam (Harus Dihindari!)', cards: [
        { emoji: '🪓', label: 'Penebangan Hutan Liar', sub: 'Menyebabkan hutan gundul, banjir bandang, dan tanah longsor' },
        { emoji: '🧨', label: 'Menangkap Ikan Pakai Bom/Racun', sub: 'Merusak terumbu karang dan membunuh ikan-ikan kecil' },
        { emoji: '🔥', label: 'Membakar Sampah & Lahan', sub: 'Menimbulkan kabut asap berbahaya bagi pernapasan' },
      ]},
    ],
    activityTitle: 'Latihan: Kerusakan Lingkungan',
    questions: [
      { text: 'Penebangan pohon di lereng bukit secara liar dan besar-besaran dapat menyebabkan bencana...', opts: ['Tanah longsor dan banjir', 'Hujan es', 'Gempa tektonik', 'Gerhana'], ans: 0, exp: 'Tanpa akar pohon penahan tanah dan air, lereng mudah longsor.' },
      { text: 'Cara menangkap ikan yang MERUSAK ekosistem laut dan dilarang adalah...', opts: ['Memakai pancing', 'Memakai jaring bermata lebar', 'Memakai bahan peledak (bom ikan) atau racun', 'Memakai bubu tradisional'], ans: 2, exp: 'Bom ikan menghancurkan terumbu karang tempat tinggal ikan.' },
      { text: 'Jika hutan tempat tinggal hewan liar dirusak, akibatnya bagi hewan adalah...', opts: ['Kehilangan habitat dan terancam punah', 'Makin betah', 'Pindah ke kelas', 'Tidak terpengaruh'], ans: 0, exp: 'Hilangnya habitat mengancam kelangsungan hidup satwa.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-06', subSeq: 4,
    objectives: ['Siswa mampu membedakan pencemaran air, udara, dan tanah beserta dampaknya.'],
    materialTitle: 'Pencemaran Air, Udara, dan Tanah',
    blocks: [
      { type: 'table', title: '3 Jenis Pencemaran (Polusi)', headers: ['Jenis Polusi', 'Penyebab Utama', 'Dampaknya'], rows: [
        ['Pencemaran Air', 'Sampah, detergen, limbah pabrik dibuang ke sungai tanpa diolah', 'Air bau/keruh, ikan mati, gatal/diare'],
        ['Pencemaran Udara', 'Asap knalpot kendaraan, asap pabrik, pembakaran sampah', 'Sesak napas (ISPA), mata perih, udara panas'],
        ['Pencemaran Tanah', 'Sampah plastik, baterai bekas, pestisida kimia berlebihan', 'Tanah tidak subur, tanaman sulit tumbuh'],
      ]},
    ],
    activityTitle: 'Latihan: Pencemaran Lingkungan',
    questions: [
      { text: 'Asap kendaraan bermotor dan pembakaran sampah menyebabkan pencemaran...', opts: ['Air', 'Udara', 'Suara saja', 'Cahaya'], ans: 1, exp: 'Asap mengandung gas beracun dan debu halus yang mengotori udara.' },
      { text: 'Sampah plastik yang tertimbun di tanah berbahaya karena plastik...', opts: ['Sangat cepat membusuk dalam 1 hari', 'Sangat sulit terurai (butuh ratusan tahun) dan menurunkan kesuburan tanah', 'Menjadi pupuk alami', 'Berubah jadi air'], ans: 1, exp: 'Plastik tidak mudah diurai mikroorganisme tanah.' },
      { text: 'Ciri air sungai yang mengalami pencemaran adalah...', opts: ['Jernih, tidak berbau, banyak ikan hidup', 'Keruh, berbau menyengat, banyak busa atau sampah', 'Mengalir tenang', 'Bening dan dingin'], ans: 1, exp: 'Air tercemar berubah warna, bau, dan rasa.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-06', subSeq: 5,
    objectives: ['Siswa mampu memahami pengertian sederhana perubahan iklim dan cara anak-anak ikut mencegahnya.'],
    materialTitle: 'Mengenal Perubahan Iklim',
    blocks: [
      { type: 'story_panel', title: 'Kenapa Bumi Terasa Makin Panas?', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Asap kendaraan, pabrik, dan berkurangnya pohon membuat gas rumah kaca menumpuk dan menahan panas di bumi. Suhu bumi pun perlahan naik!' },
        { speaker: 'Raka', avatar: '👦', text: 'Itu yang bikin cuaca jadi ekstrem — kadang panas banget, kadang hujan deras sekali ya Bu!' },
      ]},
      { type: 'tip', text: 'Pohon adalah penyerap karbon dioksida terbaik! Menanam pohon dan hemat listrik adalah aksi nyata melawan perubahan iklim.' },
    ],
    activityTitle: 'Latihan: Perubahan Iklim',
    questions: [
      { text: 'Salah satu tanda terjadinya perubahan iklim di bumi adalah...', opts: ['Suhu bumi meningkat dan cuaca makin tidak menentu/ekstrem', 'Matahari berubah warna biru', 'Gravitasi hilang', 'Air laut jadi tawar'], ans: 0, exp: 'Pemanasan global memicu kenaikan suhu rata-rata dan cuaca ekstrem.' },
      { text: 'Tumbuhan hijau membantu mengurangi pemanasan global karena menyerap gas...', opts: ['Karbon dioksida (CO₂)', 'Pasir', 'Plastik', 'Besi'], ans: 0, exp: 'Saat fotosintesis, tumbuhan menyerap CO₂ dan melepas oksigen.' },
      { text: 'Aksi sederhana siswa untuk ikut mengurangi perubahan iklim adalah...', opts: ['Menyalakan AC seharian saat kamar kosong', 'Menghemat listrik, bersepeda/jalan kaki jarak dekat, dan menanam pohon', 'Membakar sampah plastik', 'Membuang makanan'], ans: 1, exp: 'Hemat energi dan penghijauan menekan emisi gas rumah kaca.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-06', subSeq: 6,
    objectives: ['Siswa mampu menerapkan penghematan sumber daya (air, listrik, kertas, bahan bakar) di rumah dan sekolah.'],
    materialTitle: 'Penghematan Sumber Daya',
    blocks: [
      { type: 'visual_cards', title: '4 Kebiasaan Hemat Sumber Daya', cards: [
        { emoji: '📄', label: 'Hemat Kertas', sub: 'Kertas dibuat dari kayu pohon! Gunakan kedua sisi kertas.' },
        { emoji: '🚰', label: 'Hemat Air', sub: 'Matikan keran saat menyabuni tangan/menggosok gigi.' },
        { emoji: '💡', label: 'Hemat Listrik', sub: 'Cabut charger dan matikan lampu saat ruangan kosong.' },
        { emoji: '🍽️', label: 'Habiskan Makanan', sub: 'Ambil makan secukupnya agar tidak membuang sumber daya pangan.' },
      ]},
    ],
    activityTitle: 'Latihan: Penghematan Sumber Daya',
    questions: [
      { text: 'Menghemat pemakaian kertas buku tulis ikut melestarikan hutan karena bahan baku kertas adalah...', opts: ['Batu kapur', 'Serat kayu pohon', 'Minyak goreng', 'Pasir pantai'], ans: 1, exp: 'Kertas dibuat dari pulp (bubur serat kayu).' },
      { text: 'Cara menghemat air saat mencuci tangan adalah...', opts: ['Membiarkan keran mengalir deras selama menyabuni tangan', 'Mematikan keran saat menggosok sabun lalu menyalakan lagi saat membilas', 'Tidak mencuci tangan', 'Mandi 5 kali sehari'], ans: 1, exp: 'Menutup keran saat menyabuni menghemat banyak liter air.' },
      { text: 'Tidak menyisakan makanan di piring merupakan bentuk menghargai petani dan menghemat...', opts: ['Sumber daya pangan', 'Minyak tanah', 'Batu bara', 'Besi'], ans: 0, exp: 'Mengurangi food waste menghemat pangan dan energi produksinya.' },
    ],
  },
  {
    topicCode: 'IPAS-SD4-06', subSeq: 7,
    objectives: ['Siswa mampu mempraktikkan prinsip 3R (Reduce, Reuse, Recycle) sebagai aksi pelestarian lingkungan.'],
    materialTitle: 'Aksi Pelestarian Lingkungan (Prinsip 3R)',
    blocks: [
      { type: 'visual_cards', title: 'Gerakan 3R Peduli Bumi!', cards: [
        { emoji: '🛍️', label: 'Reduce (Mengurangi)', sub: 'Bawa tas kain & botol minum sendiri agar sampah plastik berkurang' },
        { emoji: '🫙', label: 'Reuse (Menggunakan Kembali)', sub: 'Memakai toples kaca bekas selai untuk wadah pensil atau bumbu' },
        { emoji: '♻️', label: 'Recycle (Mendaur Ulang)', sub: 'Mengolah kertas bekas jadi kertas daur ulang / sampah organik jadi kompos' },
      ]},
      { type: 'tip', text: 'Pilah sampah di rumah/sekolah: Sampah Organik (sisa sayur/daun → kompos) dan Anorganik (plastik/kertas/kaleng → bank sampah/daur ulang)!' },
    ],
    activityTitle: 'Latihan: Aksi 3R Pelestarian Lingkungan',
    questions: [
      { text: 'Membawa botol minum (tumbler) dan tas belanja kain sendiri untuk mengurangi plastik sekali pakai adalah contoh...', opts: ['Reduce (mengurangi)', 'Polusi', 'Abrasi', 'Barter'], ans: 0, exp: 'Reduce = mengurangi timbulnya sampah sejak awal.' },
      { text: 'Mengubah sisa daun kering dan kulit buah menjadi pupuk kompos adalah contoh...', opts: ['Recycle (mendaur ulang)', 'Membuang sembarangan', 'Membakar lahan', 'Pencemaran'], ans: 0, exp: 'Recycle mengolah sampah menjadi produk baru yang berguna.' },
      { text: 'Menggunakan kembali botol atau toples bekas secara langsung untuk tempat pensil disebut...', opts: ['Reduce', 'Reuse', 'Recycle', 'Replace'], ans: 1, exp: 'Reuse = menggunakan ulang benda bekas tanpa proses pabrik.' },
    ],
  },
];

upsertLessonsBatch('Kelas 4 SD — IPAS (6 Bab, 42 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

