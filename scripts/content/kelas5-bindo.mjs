import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: MEMBACA DAN MENGANALISIS INFORMASI
  {
    topicCode: 'BIND-SD5-01', subSeq: 1,
    objectives: ['Siswa mampu membaca teks panjang dengan strategi memindai (scanning) dan membaca cepat (skimming).'],
    materialTitle: 'Membaca Teks Panjang dengan Strategi Tepat',
    blocks: [
      { type: 'table', title: '2 Teknik Membaca Cerdas', headers: ['Teknik', 'Tujuannya', 'Cara Melakukannya'], rows: [
        ['Skimming (Membaca Layap)', 'Menangkap gambaran umum & ide pokok tiap paragraf', 'Baca judul, subjudul, dan kalimat awal/akhir setiap paragraf'],
        ['Scanning (Membaca Memindai)', 'Mencari 1 info spesifik (angka, tanggal, nama)', 'Gerakkan mata cepat langsung mencari kata kunci yang dibutuhkan'],
      ]},
    ],
    activityTitle: 'Latihan: Membaca Teks Panjang',
    questions: [
      { text: 'Teknik membaca cepat untuk mencari satu data tertentu seperti tahun atau nama tokoh di teks panjang disebut...', opts: ['Scanning (memindai)', 'Menghafal', 'Deklamasi', 'Menyalin'], ans: 0, exp: 'Scanning memindai teks langsung menuju kata kunci.' },
      { text: 'Untuk mengetahui gambaran umum isi sebuah artikel panjang secara cepat, kita menggunakan teknik...', opts: ['Skimming (membaca layap)', 'Mengeja per huruf', 'Membaca mundur', 'Menutup judul'], ans: 0, exp: 'Skimming menangkap gagasan pokok secara menyeluruh.' },
      { text: 'Saat membaca teks panjang, menandai kata kunci penting di setiap paragraf membantu kita...', opts: ['Memahami struktur informasi dan mudah meringkasnya', 'Membuat buku kotor tanpa manfaat', 'Lupa judul', 'Membaca lebih lambat terus'], ans: 0, exp: 'Penandaan kata kunci memetakan isi bacaan.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-01', subSeq: 2,
    objectives: ['Siswa mampu menemukan dan mengelompokkan informasi penting dari teks multi-paragraf memakai peta pikiran.'],
    materialTitle: 'Menemukan Informasi Penting (Peta Pikiran)',
    blocks: [
      { type: 'visual_cards', title: 'Peta Pikiran (Mind Map) ADIKSIMBA', cards: [
        { emoji: '🎯', label: 'Pusat', sub: 'Tulis topik utama bacaan di tengah kertas' },
        { emoji: '🌿', label: '6 Cabang', sub: 'Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana' },
        { emoji: '📌', label: 'Kata Kunci', sub: 'Isi setiap cabang dengan frase singkat padat fakta dari teks!' },
      ]},
    ],
    activityTitle: 'Latihan: Informasi Penting',
    questions: [
      { text: 'Cara visual mencatat informasi penting dari bacaan panjang menggunakan cabang-cabang kata kunci disebut...', opts: ['Peta pikiran (mind map)', 'Pantun', 'Dialog drama', 'Resep'], ans: 0, exp: 'Peta pikiran memudahkan otak mengingat struktur informasi.' },
      { text: 'Pertanyaan "Mengapa mangrove penting bagi pesisir?" mencari informasi berupa...', opts: ['Sebab atau alasan manfaatnya', 'Waktu kejadian', 'Nama tokoh', 'Jumlah huruf'], ans: 0, exp: '"Mengapa" menggali hubungan sebab-alibat atau alasan.' },
      { text: 'Informasi penting dalam teks nonfiksi selalu berkaitan erat dengan...', opts: ['Ide pokok setiap paragraf', 'Nomor halaman', 'Nama percetakan', 'Warna sampul'], ans: 0, exp: 'Ide pokok dan fakta kunci adalah inti informasi.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-01', subSeq: 3,
    objectives: ['Siswa mampu membedakan kalimat fakta dan kalimat opini dalam artikel berita atau bacaan informatif.'],
    materialTitle: 'Membedakan Fakta dan Opini',
    blocks: [
      { type: 'table', title: 'Ciri Pembeda Fakta vs Opini di Artikel', headers: ['Fakta', 'Opini'], rows: [
        ['Dapat dibuktikan kebenarannya (data, angka, peristiwa nyata)', 'Berupa penilaian, saran, perkiraan, atau perasaan'],
        ['Kata kunci: tercatat, pada tanggal, berdasarkan data, sebanyak', 'Kata kunci: menurut, diperkirakan, sebaiknya, paling, sangat bagus'],
      ]},
    ],
    activityTitle: 'Latihan: Fakta vs Opini',
    questions: [
      { text: 'Manakah kalimat FAKTA yang tepat?', opts: ['Pantai itu adalah tempat wisata paling indah di dunia.', 'Berdasarkan data sekolah, jumlah siswa kelas 5 tahun ini adalah 56 anak.', 'Sebaiknya upacara dimulai lebih siang.', 'Menurutku pudak gula merah lebih lezat daripada pudak pandan.'], ans: 1, exp: 'Jumlah 56 anak berdasarkan data adalah fakta terukur.' },
      { text: 'Manakah kalimat OPINI?', opts: ['Indonesia memiliki 3 zona waktu: WIB, WITA, dan WIT.', 'Suhu didih air 100°C.', 'Menurut saya, kerja bakti sebaiknya diadakan setiap dua minggu sekali.', 'Jantung manusia memiliki empat ruang.'], ans: 2, exp: 'Memuat penilaian/saran pribadi ("menurut saya", "sebaiknya").' },
      { text: 'Kemampuan membedakan fakta dan opini sangat berguna agar kita tidak mudah tertipu oleh...', opts: ['Berita bohong (hoaks) dan iklan berlebihan', 'Buku kamus', 'Jadwal pelajaran', 'Peta'], ans: 0, exp: 'Pembaca kritis selalu mengecek fakta sebelum percaya.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-01', subSeq: 4,
    objectives: ['Siswa mampu menyimpulkan isi bacaan panjang secara ringkas, padat, dan objektif.'],
    materialTitle: 'Menyimpulkan Isi Bacaan',
    blocks: [
      { type: 'list', title: '3 Langkah Jitu Menyimpulkan Bacaan', items: ['1. Temukan gagasan pokok dari tiap paragraf.', '2. Hubungkan gagasan pokok tersebut dengan kalimat penghubung yang logis.', '3. Pastikan simpulan singkat, mencakup seluruh isi teks, dan tidak menambah opini di luar teks!'] },
    ],
    activityTitle: 'Latihan: Menyimpulkan Bacaan',
    questions: [
      { text: 'Simpulan yang baik dari sebuah teks bacaan harus memenuhi syarat...', opts: ['Mencakup inti seluruh paragraf secara singkat dan sesuai isi teks', 'Lebih panjang daripada teks aslinya', 'Hanya menyalin kalimat terakhir yang acak', 'Berisi pendapat baru di luar topik'], ans: 0, exp: 'Simpulan merangkum intisari keseluruhan teks secara akurat.' },
      { text: 'Paragraf 1 membahas bahaya sampah plastik di laut. Paragraf 2 membahas cara mengurangi plastik dengan tumbler dan tas kain. Simpulan yang paling tepat adalah...', opts: ['Sampah plastik berbahaya bagi laut sehingga kita perlu menguranginya dengan membawa tumbler dan tas kain.', 'Tumbler harganya mahal.', 'Laut memiliki banyak ikan.', 'Tas kain berwarna-warni.'], ans: 0, exp: 'Menggabungkan inti paragraf 1 dan 2 secara utuh.' },
      { text: 'Kata penanda simpulan yang lazim digunakan adalah...', opts: ['Jadi, dengan demikian, dapat disimpulkan bahwa', 'Sedangkan, melainkan', 'Apakah, di mana', 'Aduhai, wahai'], ans: 0, exp: 'Konjungsi penyimpul menandai ikhtisar akhir.' },
    ],
  },

  // BAB 2: TEKS PROSEDUR
  {
    topicCode: 'BIND-SD5-02', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian, tujuan, dan jenis teks prosedur (cara membuat, cara menggunakan, cara melakukan).'],
    materialTitle: 'Pengertian dan Tujuan Teks Prosedur',
    blocks: [
      { type: 'visual_cards', title: '3 Jenis Teks Prosedur', cards: [
        { emoji: '🍳', label: 'Cara Membuat Sesuatu', sub: 'Resep makanan, cara membuat kerajinan daur ulang' },
        { emoji: '📱', label: 'Cara Menggunakan Alat', sub: 'Cara menyalakan proyektor, cara memakai mikroskop' },
        { emoji: '🏃', label: 'Cara Melakukan Kegiatan', sub: 'Cara mencuci tangan 6 langkah, aturan bermain gobak sodor' },
      ]},
    ],
    activityTitle: 'Latihan: Pengertian Teks Prosedur',
    questions: [
      { text: 'Teks yang berisi langkah-langkah sistematis untuk membuat, menggunakan, atau melakukan sesuatu disebut teks...', opts: ['Prosedur', 'Eksplanasi', 'Narasi', 'Puisi'], ans: 0, exp: 'Teks prosedur memandu proses secara runtut hingga berhasil.' },
      { text: 'Manakah judul yang merupakan teks prosedur CARA MENGGUNAKAN ALAT?', opts: ['Cara Membuat Nasi Goreng', 'Petunjuk Pengoperasian Blender dengan Aman', 'Kisah Timun Mas', 'Mengapa Terjadi Pelangi?'], ans: 1, exp: 'Memandu cara mengoperasikan alat blender.' },
      { text: 'Tujuan utama teks prosedur adalah...', opts: ['Membantu pembaca mencapai hasil yang diinginkan melalui tahapan yang tepat', 'Menceritakan sejarah daerah', 'Menghibur dengan lelucon', 'Mengumumkan lomba'], ans: 0, exp: 'Prosedur memberi panduan praktis dan akurat.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-02', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi 4 bagian struktur teks prosedur (judul/tujuan, alat & bahan, langkah-langkah, penutup).'],
    materialTitle: 'Struktur Teks Prosedur',
    blocks: [
      { type: 'table', title: 'Struktur Lengkap Teks Prosedur', headers: ['Struktur', 'Isinya'], rows: [
        ['1. Tujuan', 'Judul dan pengantar singkat mengenai hasil yang akan dicapai'],
        ['2. Alat & Bahan', 'Daftar perlengkapan beserta takaran/ukurannya (jika perlu)'],
        ['3. Langkah-Langkah', 'Urutan tahapan kerja bernomor secara kronologis'],
        ['4. Penutup (Opsional)', 'Ucapan selamat mencoba atau tips penyajian/perawatan'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Teks Prosedur',
    questions: [
      { text: '"200 gram tepung beras, 100 ml santan, dan 2 lembar daun pandan." Kutipan ini termasuk bagian...', opts: ['Tujuan', 'Alat dan bahan', 'Langkah-langkah', 'Penutup'], ans: 1, exp: 'Memuat daftar bahan beserta takarannya.' },
      { text: 'Bagian terpenting teks prosedur yang harus disusun secara urut dan tidak boleh dibolak-balik adalah...', opts: ['Langkah-langkah', 'Penutup', 'Nama penulis', 'Warna kertas'], ans: 0, exp: 'Urutan langkah menentukan keberhasilan hasil akhir.' },
      { text: 'Pada teks prosedur "Cara Melakukan Pemanasan Olahraga", bagian yang boleh tidak dicantumkan karena tidak membuat benda adalah...', opts: ['Judul', 'Bahan-bahan', 'Langkah-langkah', 'Tujuan'], ans: 1, exp: 'Prosedur melakukan aktivitas fisik biasanya tidak memerlukan bahan.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-02', subSeq: 3,
    objectives: ['Siswa mampu menyusun kalimat perintah (imperatif), kalimat saran, dan kalimat larangan dalam teks prosedur.'],
    materialTitle: 'Kalimat Perintah dalam Teks Prosedur',
    blocks: [
      { type: 'flashcards', title: '3 Jenis Kalimat di Teks Prosedur (Klik!)', cards: [
        { emoji: '👉', front: 'Kalimat Perintah (Imperatif)', back: '"Aduklah adonan hingga rata!" / "Masukkan air hangat!"' },
        { emoji: '💡', front: 'Kalimat Saran', back: '"Sebaiknya gunakan api kecil agar tidak gosong."' },
        { emoji: '⚠️', front: 'Kalimat Larangan (Keselamatan)', back: '"Jangan menyentuh panci panas tanpa alas tangan!"' },
      ]},
    ],
    activityTitle: 'Latihan: Kalimat Perintah',
    questions: [
      { text: 'Manakah yang merupakan kalimat PERINTAH (imperatif) yang efektif untuk teks prosedur?', opts: ['Guntinglah botol plastik mengikuti garis yang telah digambar!', 'Alya sedang menggunting botol plastik.', 'Apakah botol plastik bisa digunting?', 'Botol plastik itu sangat bersih.'], ans: 0, exp: 'Memakai kata kerja perintah "Guntinglah" secara langsung dan jelas.' },
      { text: 'Kalimat "Jangan mencolokkan kabel saat tangan masih basah!" berfungsi sebagai kalimat...', opts: ['Larangan demi keselamatan', 'Pertanyaan', 'Penutup', 'Judul'], ans: 0, exp: 'Kata "jangan" menandai larangan agar pengguna aman.' },
      { text: 'Ciri partikel yang sering melekat pada kata kerja perintah sopan adalah...', opts: ['-lah dan -kan', '-nya saja', 'ke- dan di-', 'ter-'], ans: 0, exp: 'Contoh: potonglah, tuangkan, diamkan.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-02', subSeq: 4,
    objectives: ['Siswa mampu menggunakan kata kerja tindakan (verba material) dan keterangan cara/alat/ukuran secara tepat.'],
    materialTitle: 'Kata Kerja Tindakan dan Keterangan Akurat',
    blocks: [
      { type: 'table', title: 'Kaidah Kebahasaan Teks Prosedur', headers: ['Unsur', 'Contoh'], rows: [
        ['Kata Kerja Tindakan (Fisik)', 'Potong, aduk, rebus, lipat, tekan, tempel, saring'],
        ['Keterangan Ukuran / Waktu', 'Selama 10 menit, sepanjang 5 cm, sebanyak 2 sendok makan'],
        ['Keterangan Cara / Alat', 'Dengan gunting, secara perlahan, hingga mendidih'],
      ]},
    ],
    activityTitle: 'Latihan: Kata Kerja Tindakan',
    questions: [
      { text: 'Manakah yang termasuk KATA KERJA TINDAKAN fisik (verba material)?', opts: ['Mengiris, menumbuk, melipat', 'Merasa, mengira, berharap', 'Meja, kursi, pisau', 'Indah, harum, manis'], ans: 0, exp: 'Mengiris, menumbuk, dan melipat adalah tindakan nyata yang tampak.' },
      { text: '"Rebus air selama 15 menit hingga mendidih." Frasa "selama 15 menit" adalah keterangan...', opts: ['Alat', 'Waktu/durasi', 'Tujuan', 'Tempat'], ans: 1, exp: 'Menunjukkan batasan waktu agar prosedur akurat.' },
      { text: 'Mengapa takaran dan ukuran (misal 200 mL, 5 menit) penting dalam teks prosedur?', opts: ['Agar hasil yang dibuat tepat dan tidak gagal', 'Supaya terlihat rumit', 'Agar lebih panjang saja', 'Tidak ada fungsinya'], ans: 0, exp: 'Batasan ukuran yang jelas menjamin konsistensi hasil.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-02', subSeq: 5,
    objectives: ['Siswa mampu menyusun teks prosedur lengkap dan jelas untuk suatu kegiatan atau kerajinan sederhana.'],
    materialTitle: 'Menyusun Teks Prosedur Lengkap',
    blocks: [
      { type: 'worked_example', level: 'Contoh Prosedur', question: 'Susun teks prosedur singkat "Cara Membuat Tempat Pensil dari Botol Bekas"!', steps: ['Tujuan: Memanfaatkan botol plastik bekas menjadi tempat pensil unik.', 'Alat & Bahan: 1 botol plastik bersih, gunting, kertas warna/pita, lem.', 'Langkah: (1) Potong bagian atas botol setinggi 12 cm. (2) Rapikan pinggiran agar tidak tajam. (3) Lapisi badan botol dengan kertas warna memakai lem. (4) Hias sesuai kreasi!', 'Penutup: Tempat pensil ramah lingkungan siap digunakan!'], answer: 'Lengkap 4 struktur dengan kalimat perintah jelas.' },
    ],
    activityTitle: 'Latihan: Menyusun Teks Prosedur',
    questions: [
      { text: 'Urutan pembuatan pupuk kompos mini: (1) Aduk dan jaga kelembapan selama beberapa minggu, (2) Masukkan potongan daun kering dan sisa sayur ke wadah, (3) Taburkan tanah/aktivator di atasnya. Urutan yang benar:', opts: ['2-3-1', '1-2-3', '3-2-1', '2-1-3'], ans: 0, exp: 'Masukkan bahan organik (2) → tambah tanah/aktivator (3) → aduk & fermentasi (1).' },
      { text: 'Sebelum menulis langkah-langkah teks prosedur, hal yang sebaiknya kita pastikan adalah...', opts: ['Kita benar-benar memahami urutan prosesnya agar tidak menyesatkan pembaca', 'Menulis angka acak', 'Tidak perlu alat dan bahan', 'Menghindari kata kerja'], ans: 0, exp: 'Akurasi urutan langkah adalah syarat utama teks prosedur.' },
      { text: 'Bahasa yang digunakan saat menyusun teks prosedur harus...', opts: ['Singkat, lugas, jelas, dan mudah dipraktikkan', 'Penuh kiasan puitis yang membingungkan', 'Sangat panjang tanpa nomor', 'Tidak baku sama sekali'], ans: 0, exp: 'Bahasa lugas mencegah salah tafsir saat mempraktikkan.' },
    ],
  },

  // BAB 3: TEKS PENGUMUMAN
  {
    topicCode: 'BIND-SD5-03', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian, fungsi, dan media penyampaian teks pengumuman.'],
    materialTitle: 'Tujuan dan Jenis Teks Pengumuman',
    blocks: [
      { type: 'text', text: 'Pengumuman adalah pesan resmi atau tidak resmi yang ditujukan kepada BANYAK ORANG (khalayak ramai) agar mereka mengetahui suatu informasi, jadwal, atau ajakan kegiatan.' },
      { type: 'visual_cards', title: 'Media Penyampaian Pengumuman', cards: [
        { emoji: '📌', label: 'Tertulis (Cetak)', sub: 'Papan mading sekolah, surat edaran, spanduk, koran' },
        { emoji: '📢', label: 'Lisan', sub: 'Pengeras suara sekolah, pengumuman upacara, radio' },
        { emoji: '📱', label: 'Digital', sub: 'Grup pesan kelas, situs web sekolah' },
      ]},
    ],
    activityTitle: 'Latihan: Tujuan Pengumuman',
    questions: [
      { text: 'Tujuan utama dibuatnya teks pengumuman di sekolah adalah...', opts: ['Menyampaikan informasi penting kepada seluruh warga sekolah secara cepat dan jelas', 'Menyimpan rahasia pribadi', 'Menghibur dengan dongeng', 'Menilai ulangan'], ans: 0, exp: 'Pengumuman bersifat terbuka untuk khalayak sasaran.' },
      { text: 'Pengumuman tentang jadwal kerja bakti RT yang dibacakan melalui pengeras suara masjid termasuk pengumuman...', opts: ['Lisan', 'Tertulis', 'Pribadi', 'Rahasia'], ans: 0, exp: 'Disampaikan secara langsung melalui suara adalah pengumuman lisan.' },
      { text: 'Perbedaan pengumuman dengan surat pribadi adalah pengumuman ditujukan untuk...', opts: ['Orang banyak (umum/kelompok tertentu)', 'Satu sahabat saja', 'Diri sendiri', 'Tidak ada pembaca'], ans: 0, exp: 'Pengumuman menyasar publik/kelompok luas.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-03', subSeq: 2,
    objectives: ['Siswa mampu menyebutkan unsur wajib dalam teks pengumuman (judul, sasaran, isi/waktu/tempat, pembuat pengumuman).'],
    materialTitle: 'Unsur-Unsur Informasi Pengumuman',
    blocks: [
      { type: 'table', title: '5 Unsur Wajib Teks Pengumuman', headers: ['Unsur', 'Contohnya'], rows: [
        ['1. Judul / Kepala', 'PENGUMUMAN (Lomba Kebersihan Kelas)'],
        ['2. Sasaran (Kepada siapa)', 'Ditujukan kepada seluruh siswa kelas 1–6 SD Negeri ...'],
        ['3. Isi Pokok (Apa, Kapan, Di mana)', 'Hari/tanggal, pukul, tempat, perlengkapan yang dibawa'],
        ['4. Penutup', 'Atas perhatian dan kerja sama siswa, kami ucapkan terima kasih.'],
        ['5. Tanggal & Pembuat', 'Gresik, 10 Agustus 2026 — Kepala Sekolah / Ketua Panitia'],
      ]},
    ],
    activityTitle: 'Latihan: Unsur Pengumuman',
    questions: [
      { text: 'Bagian pengumuman yang menjawab pertanyaan "Siapa yang bertanggung jawab mengeluarkan pengumuman tersebut?" adalah...', opts: ['Nama dan tanda tangan pembuat pengumuman', 'Judul', 'Hari pelaksanaan', 'Perlengkapan'], ans: 0, exp: 'Identitas pembuat (Kepala Sekolah/Panitia) menjamin keabsahan pengumuman.' },
      { text: 'Jika sebuah pengumuman lomba lupa mencantumkan HARI, TANGGAL, dan TEMPAT, maka akibatnya...', opts: ['Peserta kebingungan kapan dan di mana harus hadir', 'Lomba makin meriah', 'Tidak ada masalah', 'Lebih hemat kertas'], ans: 0, exp: 'Waktu dan tempat adalah inti informasi pelaksanaan kegiatan.' },
      { text: 'Bahasa dalam pengumuman resmi sekolah sebaiknya bersifat...', opts: ['Singkat, padat, jelas, dan menggunakan bahasa baku', 'Sangat panjang berhalaman-halaman', 'Penuh bahasa gaul', 'Berisi teka-teki'], ans: 0, exp: 'Bahasa lugas dan baku memudahkan semua orang segera paham.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-03', subSeq: 3,
    objectives: ['Siswa mampu memahami dan menarik informasi detail dari contoh teks pengumuman.'],
    materialTitle: 'Memahami Isi Teks Pengumuman',
    blocks: [
      { type: 'story_panel', title: 'PENGUMUMAN: Kerja Bakti Sekolah', lines: [
        { speaker: 'Pengumuman', avatar: '📌', text: 'Diberitahukan kepada seluruh siswa kelas 4–6 bahwa pada hari Sabtu, 15 Agustus 2026 pukul 07.00–09.00 WIB akan diadakan Kerja Bakti Penghijauan di halaman sekolah. Setiap kelas harap membawa 2 bibit tanaman dan memakai pakaian olahraga. — Panitia Adiwiyata Sekolah.' },
      ]},
    ],
    activityTitle: 'Latihan: Memahami Pengumuman',
    questions: [
      { text: 'Berdasarkan pengumuman di atas, siapa sasaran kegiatan kerja bakti tersebut?', opts: ['Seluruh siswa kelas 1–3', 'Seluruh siswa kelas 4–6', 'Hanya guru olahraga', 'Warga luar sekolah'], ans: 1, exp: 'Tertulis: "kepada seluruh siswa kelas 4–6".' },
      { text: 'Apa yang harus dibawa oleh setiap kelas menurut pengumuman tersebut?', opts: ['2 bibit tanaman', 'Buku paket', 'Makanan ringan', 'Bola futsal'], ans: 0, exp: 'Tertulis: "membawa 2 bibit tanaman".' },
      { text: 'Berapa lama kegiatan kerja bakti tersebut direncanakan berlangsung?', opts: ['1 jam', '2 jam (07.00–09.00 WIB)', '3 jam', '30 menit'], ans: 1, exp: '09.00 − 07.00 = 2 jam.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-03', subSeq: 4,
    objectives: ['Siswa mampu menulis teks pengumuman sederhana yang lengkap, rapi, dan sesuai EYD.'],
    materialTitle: 'Menulis Teks Pengumuman',
    blocks: [
      { type: 'list', title: 'Tips Menulis Pengumuman yang Rapi', items: ['Tulis kata "PENGUMUMAN" dengan huruf kapital di bagian paling atas tengah.', 'Cantumkan sasaran, acara, hari/tanggal, waktu, tempat, dan hal yang perlu disiapkan.', 'Periksa ejaan nama hari, bulan, dan huruf kapital pada tempat serta jabatan pembuat.'] },
    ],
    activityTitle: 'Latihan: Menulis Pengumuman',
    questions: [
      { text: 'Penulisan tempat dan tanggal pembuatan pengumuman yang BENAR sesuai EYD adalah...', opts: ['gresik 12 agustus 2026', 'Gresik, 12 Agustus 2026', 'Gresik. 12 agustus 2026', 'Gresik, 12-08-2026.'], ans: 1, exp: 'Nama kota kapital diikuti koma, tanggal angka, bulan kapital, tanpa titik di akhir.' },
      { text: 'Kalimat pembuka pengumuman resmi yang tepat adalah...', opts: ['"Eh teman-teman, dengerin dong!"', '"Diberitahukan kepada seluruh anggota Pramuka SD Harapan bahwa..."', '"Hai semuanya, lagi ngapain?"', '"Pada suatu hari yang cerah..."'], ans: 1, exp: 'Kalimat resmi lugas langsung menyampaikan maksud.' },
      { text: 'Setelah selesai menulis pengumuman untuk mading kelas, kita harus mengecek...', opts: ['Kelengkapan unsur (apa, siapa, kapan, di mana, pembuat) dan ejaannya', 'Apakah kertasnya disobek', 'Menghapus tanggalnya', 'Membuat tulisannya sangat kecil'], ans: 0, exp: 'Kelengkapan informasi mencegah kesalahpahaman pembaca.' },
    ],
  },

  // BAB 4: TEKS LAPORAN HASIL OBSERVASI
  {
    topicCode: 'BIND-SD5-04', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian observasi dan tujuan teks Laporan Hasil Observasi (LHO).'],
    materialTitle: 'Pengertian Observasi dan Teks LHO',
    blocks: [
      { type: 'text', text: 'Observasi adalah kegiatan MENGAMATI suatu objek (tumbuhan, hewan, tempat, atau kegiatan) secara langsung dan teliti. Hasil pengamatan tersebut ditulis secara objektif dan sistematis menjadi Teks Laporan Hasil Observasi (LHO).' },
      { type: 'tip', text: 'LHO bersifat OBJEKTIF — artinya ditulis apa adanya sesuai fakta hasil pengamatan, bukan mengarang!' },
    ],
    activityTitle: 'Latihan: Pengertian Observasi',
    questions: [
      { text: 'Kegiatan mengamati suatu objek secara langsung dan teliti untuk mengumpulkan fakta disebut...', opts: ['Observasi', 'Imajinasi', 'Deklamasi', 'Barter'], ans: 0, exp: 'Observasi = pengamatan langsung.' },
      { text: 'Sifat utama teks Laporan Hasil Observasi (LHO) adalah...', opts: ['Fiktif dan penuh khayalan', 'Objektif, faktual, dan sistematis', 'Rahasia', 'Berbentuk pantun'], ans: 1, exp: 'LHO melaporkan kenyataan hasil pengamatan secara terstruktur.' },
      { text: 'Manakah contoh judul teks Laporan Hasil Observasi?', opts: ['Pohon Bakau di Pesisir Pantai', 'Kisah Putri dan Naga', 'Pengumuman Libur Sekolah', 'Cara Memasak Sup'], ans: 0, exp: 'Membahas objek pengamatan nyata (pohon bakau) secara ilmiah populer.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-04', subSeq: 2,
    objectives: ['Siswa mampu menentukan objek pengamatan dan aspek-aspek yang diamati sebelum melakukan observasi.'],
    materialTitle: 'Menentukan Objek Pengamatan',
    blocks: [
      { type: 'visual_cards', title: 'Contoh Objek Observasi di Sekitar Kita', cards: [
        { emoji: '🌱', label: 'Tumbuhan', sub: 'Tanaman lidah buaya, pohon mangga, pohon bakau (akar, batang, daun, manfaat)' },
        { emoji: '🐟', label: 'Hewan', sub: 'Ikan bandeng, kupu-kupu, kucing (ciri tubuh, habitat, makanan)' },
        { emoji: '🏫', label: 'Tempat / Lingkungan', sub: 'Perpustakaan sekolah, taman kelas, pasar tradisional' },
      ]},
    ],
    activityTitle: 'Latihan: Objek Pengamatan',
    questions: [
      { text: 'Jika objek pengamatanmu adalah "Tanaman Lidah Buaya", aspek yang tepat diamati adalah...', opts: ['Bentuk daun berdaging tebal, tepi bergerigi, gel bening di dalam, dan manfaatnya', 'Harga tiket pesawat', 'Kisah peri hutan', 'Jadwal upacara'], ans: 0, exp: 'Pengamatan fokus pada ciri fisik, bagian, dan kegunaan objek.' },
      { text: 'Sebelum turun melakukan observasi lapangan, sebaiknya kita menyiapkan...', opts: ['Lembar panduan/daftar aspek yang akan diamati dan alat tulis', 'Cerita dongeng', 'Bantal tidur', 'Jawaban karangan dulu'], ans: 0, exp: 'Panduan pengamatan membuat pencatatan fakta terarah.' },
      { text: 'Objek pengamatan teks LHO haruslah sesuatu yang...', opts: ['Nyata dan dapat diamati secara langsung', 'Hanya ada di negeri dongeng', 'Tidak pernah ada', 'Mustahil dilihat'], ans: 0, exp: 'Observasi membutuhkan objek faktual yang bisa diamati.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-04', subSeq: 3,
    objectives: ['Siswa mampu mencatat fakta objektif (terukur dan nyata) serta menghindari opini subjektif saat observasi.'],
    materialTitle: 'Mencatat Fakta Hasil Pengamatan',
    blocks: [
      { type: 'table', title: 'Catatan Fakta vs Opini Saat Mengamati Ikan Bandeng', headers: ['Catatan FAKTA (Benar untuk LHO)', 'Catatan OPINI (Hindari di LHO)'], rows: [
        ['Sisik ikan bandeng berwarna putih keperakan dan ekornya bercabang.', 'Menurutku ikan bandeng adalah ikan paling cantik di dunia.'],
        ['Bandeng banyak dibudidayakan di tambak air payau pesisir Gresik.', 'Tambak di sana kelihatannya sangat membosankan.'],
      ]},
    ],
    activityTitle: 'Latihan: Mencatat Fakta Observasi',
    questions: [
      { text: 'Manakah kalimat catatan observasi yang bersifat OBJEKTIF (fakta)?', opts: ['Daun mangga berbentuk lonjong meruncing, berwarna hijau tua, dan bertulang menyirip.', 'Pohon mangga itu menurutku kurang bagus bentuknya.', 'Buah mangga pasti disukai semua orang di dunia.', 'Daunnya terlihat sedih saat siang hari.'], ans: 0, exp: 'Menggambarkan ciri fisik daun apa adanya tanpa penilaian pribadi.' },
      { text: 'Mengapa catatan observasi sebaiknya ditulis segera saat sedang mengamati?', opts: ['Agar data dan rincian fakta akurat tidak terlupa', 'Agar cepat pulang', 'Supaya tidak perlu melihat objek', 'Biar bisa menyontek'], ans: 0, exp: 'Pencatatan langsung menjaga ketepatan fakta.' },
      { text: 'Alat yang dapat membantu pencatatan fakta observasi selain buku catatan adalah...', opts: ['Penggaris/meteran untuk mengukur dan kamera (jika diizinkan) untuk dokumentasi', 'Komik', 'Mainan', 'Bantal'], ans: 0, exp: 'Alat ukur dan dokumentasi foto menguatkan keakuratan data.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-04', subSeq: 4,
    objectives: ['Siswa mampu mengidentifikasi 3 bagian struktur teks LHO (pernyataan umum, deskripsi bagian, deskripsi manfaat/simpulan).'],
    materialTitle: 'Struktur Teks Laporan Hasil Observasi',
    blocks: [
      { type: 'table', title: '3 Bagian Struktur Teks LHO', headers: ['Bagian Struktur', 'Isinya (Contoh: Pohon Kelapa)'], rows: [
        ['1. Pernyataan Umum (Definisi)', 'Pengenalan objek secara umum (Pohon kelapa adalah tumbuhan palma yang banyak tumbuh di pesisir...)'],
        ['2. Deskripsi Bagian', 'Rincian bagian-bagian objek (akar serabut, batang tinggi tak bercabang, daun menyirip, buah bersabut)'],
        ['3. Deskripsi Manfaat / Simpulan', 'Kegunaan objek bagi manusia/alam (air diminum, daging untuk santan, lidi untuk sapu)'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Teks LHO',
    questions: [
      { text: 'Bagian awal teks LHO yang berisi definisi atau gambaran umum mengenai objek yang diamati disebut...', opts: ['Pernyataan umum', 'Deskripsi manfaat', 'Konflik', 'Penutup surat'], ans: 0, exp: 'Pernyataan umum memperkenalkan objek secara menyeluruh.' },
      { text: '"Air kelapa segar bermanfaat melepas dahaga, sedangkan lidinya dibuat sapu." Kutipan ini merupakan bagian...', opts: ['Pernyataan umum', 'Deskripsi manfaat', 'Judul', 'Orientasi dongeng'], ans: 1, exp: 'Menjelaskan kegunaan/manfaat bagian-bagian kelapa.' },
      { text: 'Urutan struktur teks LHO yang tepat adalah...', opts: ['Pernyataan umum → Deskripsi bagian → Deskripsi manfaat/simpulan', 'Deskripsi manfaat → Judul → Pernyataan umum', 'Langkah-langkah → Alat & bahan', 'Sampiran → Isi'], ans: 0, exp: 'Urutan baku LHO: Definisi/Umum → Bagian → Manfaat.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-04', subSeq: 5,
    objectives: ['Siswa mampu menyusun teks Laporan Hasil Observasi sederhana 3 paragraf berdasarkan hasil pengamatan.'],
    materialTitle: 'Menyusun Laporan Hasil Observasi Sederhana',
    blocks: [
      { type: 'worked_example', level: 'Kerangka 3 Paragraf', question: 'Susun LHO singkat tentang "Kucing"!', steps: ['Paragraf 1 (Umum): Kucing adalah hewan mamalia berkaki empat yang banyak dipelihara manusia.', 'Paragraf 2 (Bagian): Tubuhnya ditutupi bulu halus, memiliki kumis peraba, cakar tajam yang dapat disembunyikan, dan mata tajam di tempat redup.', 'Paragraf 3 (Manfaat): Kucing membantu mengendalikan hama tikus di sekitar rumah dan menjadi hewan peliharaan yang ramah.'], answer: 'Tersusun lengkap: Pernyataan Umum, Deskripsi Bagian, dan Manfaat.' },
    ],
    activityTitle: 'Latihan: Menyusun Teks LHO',
    questions: [
      { text: 'Kata kerja definisi yang sering dipakai pada paragraf Pernyataan Umum LHO adalah...', opts: ['adalah, merupakan, ialah', 'jangan, ayo, marilah', 'aduhai, wah', 'mengapa, kapan'], ans: 0, exp: 'Verba definisi ("adalah", "merupakan") menjelaskan pengertian objek.' },
      { text: 'Saat menyusun laporan observasi, semua informasi yang ditulis harus bersumber dari...', opts: ['Hasil pengamatan nyata dan sumber ilmiah terpercaya', 'Khayalan bebas', 'Gosip', 'Tebakan'], ans: 0, exp: 'Keobjektifan adalah roh teks LHO.' },
      { text: 'Paragraf 2 pada LHO tentang "Taman Sekolah" sebaiknya merinci...', opts: ['Bagian-bagian taman seperti jenis tanaman, jalan setapak, bangku, dan kolam', 'Cara membeli tiket bus', 'Sejarah kemerdekaan', 'Lirik lagu daerah'], ans: 0, exp: 'Deskripsi bagian menguraikan rincian komponen objek.' },
    ],
  },

  // BAB 5: TEKS EKSPLANASI SEDERHANA
  {
    topicCode: 'BIND-SD5-05', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian dan ciri khas teks eksplanasi (menjelaskan proses "mengapa" dan "bagaimana").'],
    materialTitle: 'Pengertian Teks Eksplanasi',
    blocks: [
      { type: 'text', text: 'Teks eksplanasi adalah teks ilmiah populer yang menjelaskan PROSES TERJADINYA (bagaimana dan mengapa) suatu fenomena alam, sosial, atau budaya berdasarkan sebab-akibat yang nyata!' },
      { type: 'visual_cards', title: 'Contoh Topik Teks Eksplanasi', cards: [
        { emoji: '🌧️', label: 'Fenomena Alam', sub: 'Proses terjadinya hujan, pelangi, gerhana, banjir, tanah longsor' },
        { emoji: '🏘️', label: 'Fenomena Sosial', sub: 'Mengapa terjadi kemacetan, mengapa gotong royong menguatkan warga' },
      ]},
    ],
    activityTitle: 'Latihan: Pengertian Eksplanasi',
    questions: [
      { text: 'Teks yang menjelaskan proses terjadinya suatu fenomena alam atau sosial berdasarkan hubungan sebab-akibat disebut teks...', opts: ['Eksplanasi', 'Prosedur', 'Pengumuman', 'Pantun'], ans: 0, exp: 'Eksplanasi (explain) menjelaskan mengapa dan bagaimana suatu peristiwa terjadi.' },
      { text: 'Manakah judul yang merupakan teks EKSPLANASI?', opts: ['Proses Terjadinya Pelangi Setelah Hujan', 'Cara Membuat Layang-Layang', 'Pengumuman Lomba 17 Agustus', 'Kisah Malin Kundang'], ans: 0, exp: 'Menjelaskan proses alam terjadinya pelangi.' },
      { text: 'Dua kata tanya utama yang dijawab oleh teks eksplanasi adalah...', opts: ['Mengapa dan Bagaimana', 'Siapa dan Berapa harga', 'Di mana toko dan Kapan buka', 'Apakah boleh'], ans: 0, exp: 'Eksplanasi menjawab sebab (mengapa) dan proses (bagaimana).' },
    ],
  },
  {
    topicCode: 'BIND-SD5-05', subSeq: 2,
    objectives: ['Siswa mampu mengenali konjungsi sebab-akibat (kausalitas) dalam teks eksplanasi.'],
    materialTitle: 'Hubungan Sebab-Akibat dalam Eksplanasi',
    blocks: [
      { type: 'flashcards', title: 'Konjungsi Sebab-Akibat (Kausalitas) (Klik!)', cards: [
        { emoji: '➡️', front: 'Karena / Sebab', back: 'Menunjukkan SEBAB ("Banjir terjadi KARENA selokan tersumbat sampah.")' },
        { emoji: '⚡', front: 'Sehingga / Akibatnya', back: 'Menunjukkan AKIBAT ("Hutan digunduli, AKIBATNYA tanah mudah longsor.")' },
        { emoji: '🔄', front: 'Oleh karena itu', back: 'Menyimpulkan dampak atau ajakan pencegahan' },
      ]},
    ],
    activityTitle: 'Latihan: Hubungan Sebab-Akibat',
    questions: [
      { text: '"Panas matahari menyinari laut ... air laut menguap menjadi uap air." Konjungsi akibat yang tepat adalah...', opts: ['sehingga', 'tetapi', 'atau', 'padahal'], ans: 0, exp: '"Sehingga" menghubungkan sebab (panas matahari) dengan akibatnya (air menguap).' },
      { text: 'Dalam kalimat "Sungai meluap karena hujan deras dan tumpukan sampah", bagian yang merupakan SEBAB adalah...', opts: ['Sungai meluap', 'Hujan deras dan tumpukan sampah', 'Air berwarna cokelat', 'Warga mengungsi'], ans: 1, exp: 'Kalimat setelah kata "karena" menyatakan sebab.' },
      { text: 'Manakah yang merupakan konjungsi sebab-akibat (kausalitas)?', opts: ['Karena, sebab, sehingga, akibatnya', 'Dan, serta, atau', 'Sedangkan, melainkan', 'Pertama, kedua'], ans: 0, exp: 'Keempat kata itu menyatakan relasi sebab dan akibat.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-05', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi urutan proses (kronologis) dan 3 struktur teks eksplanasi.'],
    materialTitle: 'Struktur & Urutan Proses Eksplanasi',
    blocks: [
      { type: 'table', title: '3 Bagian Struktur Teks Eksplanasi', headers: ['Bagian', 'Isinya (Contoh: Siklus Hujan)'], rows: [
        ['1. Pernyataan Umum', 'Pengenalan fenomena (Hujan adalah titik air yang jatuh dari awan ke bumi...)'],
        ['2. Deretan Penjelas (Urutan Proses)', 'Urutan sebab-akibat: penguapan (evaporasi) → pengembunan jadi awan (kondensasi) → hujan turun (presipitasi)'],
        ['3. Interpretasi (Penutup)', 'Kesimpulan / pesan penting fenomena tersebut bagi kehidupan'],
      ]},
    ],
    activityTitle: 'Latihan: Urutan Proses Eksplanasi',
    questions: [
      { text: 'Bagian teks eksplanasi yang menjelaskan urutan proses sebab-akibat terjadinya fenomena disebut...', opts: ['Deretan penjelas', 'Judul', 'Orientasi', 'Daftar pustaka'], ans: 0, exp: 'Deretan penjelas menguraikan tahapan terjadinya peristiwa.' },
      { text: 'Urutan proses terjadinya hujan yang benar adalah...', opts: ['Hujan turun → air menguap → jadi awan', 'Air menguap → uap mengembun jadi awan → awan jenuh lalu turun hujan', 'Awan jadi es → laut kering', 'Hujan → pelangi → evaporasi'], ans: 1, exp: 'Evaporasi → Kondensasi → Presipitasi.' },
      { text: 'Bagian penutup teks eksplanasi yang berisi simpulan atau pandangan penulis disebut...', opts: ['Interpretasi', 'Konflik', 'Alat dan bahan', 'Sampiran'], ans: 0, exp: 'Interpretasi menutup dan menyimpulkan makna fenomena.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-05', subSeq: 4,
    objectives: ['Siswa mampu menganalisis teks eksplanasi tentang fenomena alam dan fenomena sosial di sekitar.'],
    materialTitle: 'Memahami Fenomena Alam dan Sosial',
    blocks: [
      { type: 'story_panel', title: 'Eksplanasi Singkat: Mengapa Banjir Terjadi di Perkotaan?', lines: [
        { speaker: 'Teks', avatar: '🌊', text: 'Banjir adalah meluapnya air hingga menggenangi daratan. Di kawasan padat penduduk, banjir sering terjadi akibat hujan deras yang tidak terserap tanah karena minimnya daerah resapan dan tersumbatnya saluran air oleh sampah. Oleh sebab itu, menjaga kebersihan selokan dan menanam pohon sangat penting untuk mencegah banjir.' },
      ]},
    ],
    activityTitle: 'Latihan: Fenomena Alam & Sosial',
    questions: [
      { text: 'Berdasarkan teks eksplanasi di atas, dua penyebab utama banjir di kawasan padat penduduk adalah...', opts: ['Minimnya daerah resapan dan tersumbatnya selokan oleh sampah', 'Banyaknya taman kota', 'Banyaknya sumur resapan', 'Cuaca kemarau panjang'], ans: 0, exp: 'Tertulis jelas pada deretan penjelas teks.' },
      { text: 'Banjir yang dipicu perilaku membuang sampah sembarangan menunjukkan keterkaitan antara fenomena alam dan perilaku...', opts: ['Sosial (manusia)', 'Luar angkasa', 'Magnet', 'Dongeng'], ans: 0, exp: 'Perilaku masyarakat memengaruhi terjadinya bencana.' },
      { text: 'Bagian interpretasi (simpulan) pada teks di atas mengajak kita untuk...', opts: ['Menjaga kebersihan selokan dan menanam pohon', 'Menutup semua saluran air', 'Membiarkan sampah menumpuk', 'Pindah planet'], ans: 0, exp: 'Kalimat terakhir berisi simpulan dan solusi pencegahan.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-05', subSeq: 5,
    objectives: ['Siswa mampu menulis teks eksplanasi sederhana 3 paragraf dengan data faktual dan bahasa baku.'],
    materialTitle: 'Menulis Teks Eksplanasi Sederhana',
    blocks: [
      { type: 'list', title: 'Langkah Menulis Eksplanasi Ilmiah Populer', items: ['1. Pilih 1 fenomena yang kamu pahami prosesnya (mis. Terjadinya Pelangi, Terjadinya Embun, atau Mengapa Sampah Menumpuk).', '2. Cari fakta ilmiah yang benar (dari buku IPAS/ensiklopedia).', '3. Tulis sesuai 3 struktur: Pernyataan Umum → Deretan Penjelas (pakai kata "karena", "sehingga", "kemudian") → Interpretasi.'] },
    ],
    activityTitle: 'Latihan: Menulis Eksplanasi',
    questions: [
      { text: 'Informasi yang ditulis di dalam teks eksplanasi harus didasarkan pada...', opts: ['Fakta ilmiah dan sebab-akibat yang logis', 'Mitos tanpa bukti', 'Tebakan acak', 'Cerita lucu'], ans: 0, exp: 'Eksplanasi bersifat ilmiah faktual.' },
      { text: 'Manakah kalimat pembuka (pernyataan umum) yang baik untuk teks eksplanasi "Proses Terjadinya Pelangi"?', opts: ['Pelangi adalah fenomena optik alam berupa busur warna-warni di langit yang muncul setelah hujan.', 'Suatu hari peri melukis langit dengan kuas ajaib.', 'Ayo kita lihat pelangi bersama!', 'Siapkan cat air 7 warna!'], ans: 0, exp: 'Mendefinisikan fenomena pelangi secara ilmiah dan baku.' },
      { text: 'Istilah ilmiah sederhana (seperti penguapan, pembiasan, erosi) dalam teks eksplanasi sebaiknya...', opts: ['Digunakan tepat sesuai maknanya dan dijelaskan dengan bahasa mudah dipahami', 'Dihindari seluruhnya walau perlu', 'Ditulis asal-asalan', 'Diubah artinya sendiri'], ans: 0, exp: 'Istilah teknis membuat eksplanasi akurat dan edukatif.' },
    ],
  },

  // BAB 6: TEKS LAPORAN WAWANCARA
  {
    topicCode: 'BIND-SD5-06', subSeq: 1,
    objectives: ['Siswa mampu menentukan topik wawancara dan narasumber yang paling tepat sesuai keahliannya.'],
    materialTitle: 'Menentukan Topik dan Narasumber Wawancara',
    blocks: [
      { type: 'table', title: 'Cocokkan Topik dengan Narasumber Tepat!', headers: ['Topik Wawancara', 'Narasumber yang Paling Tepat'], rows: [
        ['Cara budidaya ikan bandeng di tambak Gresik', 'Petani tambak / penyuluh perikanan'],
        ['Cara menjaga kesehatan gigi anak', 'Dokter gigi / perawat Puskesmas'],
        ['Cara membuat jajanan pudak tradisional', 'Perajin / pembuat kue pudak'],
        ['Program kebersihan lingkungan sekolah', 'Kepala sekolah / petugas kebersihan / guru pembina'],
      ]},
    ],
    activityTitle: 'Latihan: Topik & Narasumber',
    questions: [
      { text: 'Jika topik wawancaramu adalah "Cara Merawat Tanaman Sayur di Kebun Sekolah", narasumber yang paling tepat adalah...', opts: ['Petani sayur atau guru pembina kebun sekolah', 'Masinis kereta api', 'Pilot pesawat', 'Montir mobil'], ans: 0, exp: 'Narasumber harus menguasai langsung bidang topiknya.' },
      { text: 'Orang yang mengajukan pertanyaan saat kegiatan wawancara disebut...', opts: ['Pewawancara', 'Narasumber', 'Penonton', 'Notulis saja'], ans: 0, exp: 'Pewawancara bertanya; narasumber menjawab.' },
      { text: 'Sebelum menentukan daftar pertanyaan wawancara, langkah PERTAMA yang harus ditetapkan adalah...', opts: ['Menentukan topik/tujuan dan memilih narasumber yang tepat', 'Langsung menulis kesimpulan', 'Membeli hadiah mahal', 'Mencetak koran'], ans: 0, exp: 'Topik menentukan siapa narasumber dan apa pertanyaannya.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-06', subSeq: 2,
    objectives: ['Siswa mampu menyusun daftar pertanyaan wawancara yang baik menggunakan ADIKSIMBA dan pertanyaan terbuka.'],
    materialTitle: 'Menyusun Pertanyaan Wawancara',
    blocks: [
      { type: 'list', title: 'Ciri Pertanyaan Wawancara yang Baik', items: ['1. Sesuai dengan topik wawancara.', '2. Menggunakan kata tanya ADIKSIMBA (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana).', '3. Diutamakan pertanyaan TERBUKA (memancing penjelasan panjang, bukan cuma jawaban "Ya/Tidak").', '4. Bahasa sopan, jelas, dan satu pertanyaan menanyakan satu hal saja.'] },
    ],
    activityTitle: 'Latihan: Menyusun Pertanyaan',
    questions: [
      { text: 'Manakah pertanyaan wawancara yang PALING BAIK karena memancing penjelasan rinci dari narasumber (petani tambak)?', opts: ['Apakah Bapak suka ikan?', 'Bagaimana cara Bapak merawat kualitas air tambak agar ikan bandeng tumbuh sehat?', 'Ikan itu hidup di air ya Pak?', 'Warna baju Bapak biru ya?'], ans: 1, exp: 'Pertanyaan "Bagaimana..." menggali informasi proses yang kaya.' },
      { text: 'Kata tanya yang digunakan untuk menanyakan JUMLAH atau BIAYA dalam wawancara adalah...', opts: ['Siapa', 'Berapa', 'Di mana', 'Mengapa'], ans: 1, exp: '"Berapa" menanyakan jumlah, harga, atau ukuran.' },
      { text: 'Daftar pertanyaan sebaiknya disiapkan sebelum wawancara berlangsung agar...', opts: ['Wawancara berjalan lancar, terarah, dan tidak ada info penting yang terlewat', 'Narasumber bingung', 'Wawancara berlangsung 5 jam', 'Kita tidak perlu mendengarkan jawaban'], ans: 0, exp: 'Persiapan pertanyaan membuat wawancara efektif.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-06', subSeq: 3,
    objectives: ['Siswa mampu mempraktikkan etika saat melakukan wawancara (sebelum, selama, dan sesudah).'],
    materialTitle: 'Etika Melakukan Wawancara',
    blocks: [
      { type: 'visual_cards', title: '3 Tahap Etika Wawancara Sopan', cards: [
        { emoji: '📅', label: 'Sebelum', sub: 'Buat janji dulu, datang tepat waktu, berpakaian rapi dan sopan' },
        { emoji: '🎙️', label: 'Selama', sub: 'Ucapkan salam, perkenalkan diri, dengarkan saksama, JANGAN memotong pembicaraan!' },
        { emoji: '🙏', label: 'Sesudah', sub: 'Ucapkan terima kasih, mohon maaf jika ada kekurangan, dan berpamitan sopan' },
      ]},
    ],
    activityTitle: 'Latihan: Etika Wawancara',
    questions: [
      { text: 'Sikap yang HARUS dihindari pewawancara saat narasumber sedang menjawab pertanyaan adalah...', opts: ['Mencatat poin penting', 'Memotong pembicaraan narasumber secara tidak sopan', 'Mengangguk menyimak', 'Tersenyum ramah'], ans: 1, exp: 'Memotong pembicaraan melanggar kesopanan wawancara.' },
      { text: 'Hal pertama yang dilakukan pewawancara ketika bertemu narasumber adalah...', opts: ['Langsung memberi 10 pertanyaan cepat', 'Mengucapkan salam, memperkenalkan diri, dan menyampaikan maksud wawancara', 'Meminta foto lalu pulang', 'Membuka ponsel'], ans: 1, exp: 'Salam dan perkenalan membangun suasana akrab dan hormat.' },
      { text: 'Jika ingin merekam suara narasumber pakai ponsel, etika yang benar adalah...', opts: ['Merekam diam-diam', 'Meminta izin terlebih dahulu kepada narasumber', 'Tidak usah memberi tahu', 'Memaksa narasumber'], ans: 1, exp: 'Meminta izin menghormati privasi narasumber.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-06', subSeq: 4,
    objectives: ['Siswa mampu mencatat pokok-pokok jawaban narasumber secara akurat tanpa mengubah maknanya.'],
    materialTitle: 'Mencatat Informasi Hasil Wawancara',
    blocks: [
      { type: 'tip', text: 'Jangan berusaha menulis setiap kata saat narasumber berbicara cepat! Catat KATA KUNCI (angka, nama, langkah penting, alasan), lalu segera lengkapi kalimatnya segera setelah wawancara selesai selagi masih ingat!' },
    ],
    activityTitle: 'Latihan: Mencatat Info Wawancara',
    questions: [
      { text: 'Cara efektif mencatat jawaban narasumber yang berbicara cukup cepat adalah...', opts: ['Mencatat kata kunci dan poin pentingnya lalu merapikannya setelah selesai', 'Menyuruh narasumber mengeja tiap huruf', 'Tidak mencatat sama sekali', 'Mengarang sendiri jawabannya'], ans: 0, exp: 'Mencatat poin kunci menjaga alur wawancara tetap alami dan akurat.' },
      { text: 'Dalam mencatat hasil wawancara, kita TIDAK boleh...', opts: ['Mengubah atau memelintir fakta yang disampaikan narasumber', 'Menulis tanggal wawancara', 'Menulis nama lengkap narasumber', 'Merapikan ejaan'], ans: 0, exp: 'Kejujuran dan akurasi kutipan adalah etika jurnalistik/wawancara.' },
      { text: 'Jika ada istilah asing dari narasumber yang belum kita pahami, sebaiknya kita...', opts: ['Menanyakannya dengan sopan agar tidak salah tulis', 'Diam saja lalu menebak asal', 'Menghapusnya', 'Tertawa'], ans: 0, exp: 'Konfirmasi langsung mencegah kesalahan informasi.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-06', subSeq: 5,
    objectives: ['Siswa mampu menyusun teks laporan hasil wawancara secara lengkap sesuai format baku.'],
    materialTitle: 'Menyusun Laporan Hasil Wawancara',
    blocks: [
      { type: 'table', title: 'Format Baku Laporan Hasil Wawancara', headers: ['Bagian Laporan', 'Isinya'], rows: [
        ['1. Latar Belakang & Tujuan', 'Alasan dan tujuan melakukan wawancara'],
        ['2. Topik & Identitas', 'Topik, Nama Narasumber, Nama Pewawancara, Hari/Tanggal, Tempat'],
        ['3. Hasil Wawancara', 'Ringkasan jawaban narasumber (dalam bentuk paragraf narasi atau tanya-jawab rapi)'],
        ['4. Kesimpulan', 'Intisari pelajaran penting yang diperoleh dari narasumber'],
      ]},
    ],
    activityTitle: 'Latihan: Laporan Wawancara',
    questions: [
      { text: 'Bagian laporan wawancara yang mencantumkan nama narasumber, pewawancara, waktu, dan tempat adalah...', opts: ['Identitas / Waktu dan tempat pelaksanaan', 'Kesimpulan', 'Lampiran foto saja', 'Sampul'], ans: 0, exp: 'Identitas dan waktu pelaksanaan memastikan kejelasan data wawancara.' },
      { text: 'Bagian akhir laporan wawancara yang merangkum inti seluruh jawaban narasumber adalah...', opts: ['Latar belakang', 'Kesimpulan', 'Daftar pertanyaan kosong', 'Judul'], ans: 1, exp: 'Kesimpulan menyajikan sari pati hasil wawancara.' },
      { text: 'Mengubah catatan hasil wawancara dari bentuk tanya-jawab menjadi paragraf utuh menggunakan kalimat...', opts: ['Baku dan efektif sesuai EYD', 'Sangat acak', 'Tanda seru semua', 'Singkatan tidak jelas'], ans: 0, exp: 'Laporan tertulis selalu memakai bahasa Indonesia baku.' },
    ],
  },

  // BAB 7: PANTUN DAN PUISI
  {
    topicCode: 'BIND-SD5-07', subSeq: 1,
    objectives: ['Siswa mampu menyebutkan 4 ciri utama pantun (4 baris/bait, 8–12 suku kata, sajak a-b-a-b, sampiran & isi).'],
    materialTitle: 'Ciri-Ciri Pantun',
    blocks: [
      { type: 'visual_cards', title: '4 Syarat Wajib Pantun Asli Nusantara', cards: [
        { emoji: '4️⃣', label: '4 Baris per Bait', sub: 'Satu bait selalu terdiri atas tepat 4 baris' },
        { emoji: '🔢', label: '8–12 Suku Kata/Baris', sub: 'Enak dilafalkan dalam satu napas' },
        { emoji: '🎵', label: 'Bersajak a-b-a-b', sub: 'Bunyi akhir baris 1 = baris 3; baris 2 = baris 4!' },
        { emoji: '⚖️', label: 'Baris 1–2 Sampiran, 3–4 Isi', sub: 'Pesan utama pantun SELALU di baris ke-3 dan ke-4!' },
      ]},
    ],
    activityTitle: 'Latihan: Ciri Pantun',
    questions: [
      { text: 'Pola persajakan (rima) akhir baris pada pantun yang benar adalah...', opts: ['a-a-a-a', 'a-b-a-b', 'a-b-c-d', 'a-a-b-b'], ans: 1, exp: 'Pantun bersajak silang a-b-a-b (baris 1 sama bunyi dengan 3; baris 2 dengan 4).' },
      { text: 'Jumlah suku kata ideal pada setiap baris pantun adalah...', opts: ['2–4 suku kata', '8–12 suku kata', '20–30 suku kata', '1 suku kata'], ans: 1, exp: 'Setiap baris pantun terdiri dari 8–12 suku kata.' },
      { text: 'Berdasarkan isinya, pantun yang berisi pesan moral dan ajakan berbuat baik disebut pantun...', opts: ['Jenaka', 'Nasihat', 'Teka-teki', 'Kiasan'], ans: 1, exp: 'Pantun nasihat menyampaikan petuah kebaikan.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-07', subSeq: 2,
    objectives: ['Siswa mampu membedakan sampiran (baris 1–2) dan isi/amanat (baris 3–4) pada berbagai jenis pantun.'],
    materialTitle: 'Sampiran dan Isi Pantun',
    blocks: [
      { type: 'worked_example', level: 'Bedah Pantun', question: 'Pergi ke pasar membeli pudak (1) / Pulangnya mampir melihat taman (2) / Rajin belajar sejak kanak-kanak (3) / Kelak berguna bagi masa depan (4). Mana sampiran dan isinya?', steps: ['Baris 1 & 2 = SAMPIRAN (mengantar irama -ak dan -an).', 'Baris 3 & 4 = ISI (nasihat agar rajin belajar sejak kecil untuk masa depan).'], answer: 'Amanat: Rajin belajar sejak kecil demi masa depan gemilang!' },
    ],
    activityTitle: 'Latihan: Sampiran & Isi Pantun',
    questions: [
      { text: 'Pada sebuah pantun 4 baris, bagian SAMPIRAN terletak pada baris...', opts: ['1 dan 2', '3 dan 4', '1 dan 3', '2 dan 4'], ans: 0, exp: 'Baris 1–2 sampiran; baris 3–4 isi.' },
      { text: 'Untuk mengetahui pesan atau amanat sebuah pantun, kita cukup memahami makna baris...', opts: ['1 dan 2', '3 dan 4', '1 saja', '2 saja'], ans: 1, exp: 'Isi dan amanat pantun berada di baris 3 dan 4.' },
      { text: '"Ada udang di balik batu / Ada kepiting di tepi pantai / Jangan suka berkata palsu / Jadilah anak jujur dan pandai." Jenis pantun ini adalah...', opts: ['Pantun nasihat', 'Pantun teka-teki', 'Pantun jenaka', 'Berita'], ans: 0, exp: 'Mengajak untuk jujur dan rajin belajar → pantun nasihat.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-07', subSeq: 3,
    objectives: ['Siswa mampu menentukan pola rima akhir suku kata pada pantun maupun puisi bebas.'],
    materialTitle: 'Rima dalam Pantun dan Puisi',
    blocks: [
      { type: 'table', title: 'Perbedaan Pola Rima Pantun vs Puisi Bebas', headers: ['Karya', 'Aturan Rima & Baris'], rows: [
        ['Pantun (Puisi Lama)', 'TERIKAT aturan ketat: 4 baris, rima a-b-a-b, 8–12 suku kata'],
        ['Syair (Puisi Lama)', '4 baris, rima a-a-a-a, semua baris adalah ISI'],
        ['Puisi Bebas (Modern)', 'TIDAK terikat jumlah baris, suku kata, maupun pola rima'],
      ]},
    ],
    activityTitle: 'Latihan: Rima Pantun & Puisi',
    questions: [
      { text: 'Baris 1 pantun berakhiran kata "hati" (-ti), baris 2 berakhiran "karang" (-rang). Maka baris 3 dan 4 berturut-turut sebaiknya berakhiran...', opts: ['-ti dan -rang', '-rang dan -ti', '-ka dan -mu', '-an dan -an'], ans: 0, exp: 'Pola a-b-a-b → baris 3 mengikuti baris 1 (-ti), baris 4 mengikuti baris 2 (-rang).' },
      { text: 'Puisi lama yang terdiri atas 4 baris per bait, semuanya berupa isi, dan bersajak a-a-a-a adalah...', opts: ['Syair', 'Pantun', 'Cerpen', 'Prosedur'], ans: 0, exp: 'Syair bersajak a-a-a-a dan tanpa sampiran.' },
      { text: 'Perbedaan utama puisi bebas (modern) dibandingkan pantun adalah puisi bebas...', opts: ['Tidak terikat jumlah baris, suku kata, dan pola sajak tertentu', 'Wajib memakai sampiran', 'Selalu 4 baris', 'Tidak boleh punya makna'], ans: 0, exp: 'Puisi modern bebas mengekspresikan bentuk bait dan rima.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-07', subSeq: 4,
    objectives: ['Siswa mampu menafsirkan makna kiasan (metafora, personifikasi) dan pesan dalam puisi.'],
    materialTitle: 'Memahami Makna Puisi',
    blocks: [
      { type: 'flashcards', title: 'Tafsir Kata Kias dalam Puisi (Klik!)', cards: [
        { emoji: '🕯️', front: 'Pahlawan adalah "lilin yang rela meleleh menerangi gelap"', back: 'Rela berkorban demi kebaikan dan kemajuan orang banyak' },
        { emoji: '🌊', front: '"Ilmu adalah lautan tak bertepi"', back: 'Ilmu pengetahuan sangat luas dan tidak ada habisnya dipelajari' },
        { emoji: '🌅', front: '"Fajar harapan telah tiba"', back: 'Datangnya semangat dan kesempatan baru yang cerah' },
      ]},
    ],
    activityTitle: 'Latihan: Makna Puisi',
    questions: [
      { text: 'Makna ungkapan "Buku adalah gudang ilmu" adalah...', opts: ['Buku disimpan di gudang tua', 'Di dalam buku tersimpan sangat banyak pengetahuan bermanfaat', 'Buku sangat berat', 'Gudang penuh kertas'], ans: 1, exp: 'Kiasan metafora yang menyamakan kekayaan ilmu dalam buku dengan gudang.' },
      { text: 'Untuk memparafrasekan (mengubah puisi menjadi prosa) agar mudah dipahami, kita dapat...', opts: ['Menambahkan kata penghubung dan menjelaskan kata kiasnya dalam kalimat biasa', 'Menghapus separuh bait', 'Mengubah topiknya total', 'Menghitung jumlah huruf'], ans: 0, exp: 'Parafrase menguraikan makna padat puisi ke kalimat lugas.' },
      { text: 'Larik puisi "Mentari tersenyum hangat menyapa pagi" menggunakan majas...', opts: ['Personifikasi', 'Hiperbola', 'Fakta', 'Prosedur'], ans: 0, exp: 'Matahari diberi sifat manusia ("tersenyum", "menyapa").' },
    ],
  },
  {
    topicCode: 'BIND-SD5-07', subSeq: 5,
    objectives: ['Siswa mampu melengkapi dan menciptakan pantun nasihat/jenaka serta puisi singkat bertema lingkungan atau pendidikan.'],
    materialTitle: 'Membuat Pantun dan Puisi Sendiri',
    blocks: [
      { type: 'list', title: 'Trik Cepat Membuat Pantun dalam 1 Menit!', items: ['1. Tulis ISINYA dulu (baris 3 & 4) — tentukan pesan yang mau kamu sampaikan!', '2. Lihat akhiran bunyi baris 3 & 4.', '3. Baru ciptakan SAMPIRAN (baris 1 & 2) yang bunyi akhirnya cocok dengan baris 3 & 4!', '4. Hitung suku katanya: pastikan antara 8–12 suku kata per baris.'] },
    ],
    activityTitle: 'Latihan: Membuat Pantun & Puisi',
    questions: [
      { text: 'Langkah PALING MUDAH saat ingin membuat pantun sendiri adalah menentukan ... terlebih dahulu.', opts: ['Isi/pesan (baris 3 dan 4)', 'Sampiran acak', 'Nomor halaman', 'Hiasan pinggir'], ans: 0, exp: 'Menentukan isi dulu membuat pesan pantun kuat, lalu sampiran tinggal menyesuaikan rima.' },
      { text: 'Lengkapi isi pantun berikut: "Jalan-jalan ke tepi pantai / Melihat perahu layar menari / ... / ..."', opts: ['Jika ingin menjadi pandai / Rajinlah belajar setiap hari', 'Pantai sangat panas siang hari / Aku pulang makan nasi', 'Ayo kita beli ikan segar / Lalu dimasak di dapur', 'Perahu berlayar sangat jauh / Menuju pulau di seberang'], ans: 0, exp: 'Rima "pantai–pandai" (-ai) dan "menari–hari" (-ri) cocok sempurna (a-b-a-b)!' },
      { text: 'Hitung jumlah suku kata baris "Ra-jin-lah be-la-jar se-ti-ap ha-ri":', opts: ['8 suku kata', '11 suku kata', '15 suku kata', '6 suku kata'], ans: 1, exp: 'Ra-jin-lah (3) + be-la-jar (3) + se-ti-ap (3) + ha-ri (2) = 11 suku kata (pas 8–12!).' },
    ],
  },

  // BAB 8: DRAMA ANAK DAN CERITA RAKYAT
  {
    topicCode: 'BIND-SD5-08', subSeq: 1,
    objectives: ['Siswa mampu mengenal unsur-unsur drama anak (naskah, tokoh, dialog, kramagung/petunjuk laku, prolog, epilog).'],
    materialTitle: 'Mengenal Unsur-Unsur Drama Anak',
    blocks: [
      { type: 'table', title: 'Istilah Penting dalam Naskah Drama', headers: ['Istilah', 'Artinya'], rows: [
        ['Prolog', 'Kata pengantar pembuka sebelum drama dimulai'],
        ['Dialog', 'Percakapan antar-tokoh yang diucapkan di panggung'],
        ['Kramagung (Petunjuk Laku)', 'Petunjuk gerakan/ekspresi di dalam tanda kurung, mis. (sambil tersenyum) — TIDAK dibaca keras!'],
        ['Epilog', 'Kata penutup / simpulan amanat di akhir pementasan'],
      ]},
    ],
    activityTitle: 'Latihan: Unsur Drama Anak',
    questions: [
      { text: 'Petunjuk gerakan atau ekspresi tokoh dalam naskah drama yang ditulis di dalam tanda kurung, misalnya "(berlari kecil sambil tertawa)", disebut...', opts: ['Kramagung (petunjuk laku)', 'Prolog', 'Epilog', 'Sampiran'], ans: 0, exp: 'Kramagung memandu akting pemeran dan tidak ikut diucapkan.' },
      { text: 'Kata pengantar pembuka cerita di awal pementasan drama disebut...', opts: ['Epilog', 'Prolog', 'Monolog', 'Klimaks'], ans: 1, exp: 'Prolog = pembuka; Epilog = penutup.' },
      { text: 'Bentuk utama penyajian cerita dalam naskah drama adalah...', opts: ['Dialog (percakapan) dan gerak peran', 'Tabel angka', 'Grafik batang', 'Pantun'], ans: 0, exp: 'Drama dipentaskan lewat dialog dan tindakan pemeran.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-08', subSeq: 2,
    objectives: ['Siswa mampu membaca dan memerankan dialog drama sesuai karakter tokoh dengan ekspresi yang tepat.'],
    materialTitle: 'Dialog dan Tokoh dalam Drama',
    blocks: [
      { type: 'story_panel', title: 'Cuplikan Naskah Drama: Piket Pagi', lines: [
        { speaker: 'Alya (ramah)', avatar: '👧', text: 'Bima, mari kita sapu bagian belakang dulu ya biar kelas cepat bersih!' },
        { speaker: 'Bima (semangat)', avatar: '👦', text: 'Siap, Al! Aku ambil sapu dan pengki sekarang.' },
        { speaker: 'Raka (tersipu malu)', avatar: '👦', text: 'Maaf teman-teman, aku agak telat. Sini, aku bantu rapikan bangku ya!' },
      ]},
    ],
    activityTitle: 'Latihan: Dialog & Tokoh Drama',
    questions: [
      { text: 'Tanda baca yang memisahkan nama tokoh dengan kalimat ucapannya pada penulisan naskah drama adalah...', opts: ['Titik dua (:)', 'Tanda tanya (?)', 'Garis miring (/)', 'Tanda sama dengan (=)'], ans: 0, exp: 'Format baku naskah drama: Alya : "Mari kita mulai!"' },
      { text: 'Berdasarkan cuplikan drama di atas, sifat Raka yang berani meminta maaf dan langsung membantu menunjukkan watak...', opts: ['Bertanggung jawab dan jujur', 'Pemalas', 'Sombong', 'Egois'], ans: 0, exp: 'Mengakui keterlambatan lalu ikut membantu adalah sikap bertanggung jawab.' },
      { text: 'Saat memerankan tokoh drama di depan kelas, pelafalan dialog harus...', opts: ['Jelas, lantang, dan sesuai emosi tokohnya', 'Berbisik pelan ke lantai', 'Membaca tanpa jeda', 'Membelakangi penonton'], ans: 0, exp: 'Vokal jelas dan ekspresi menghidupkan karakter.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-08', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi tahapan alur dalam drama dan cerita rakyat.'],
    materialTitle: 'Alur Drama dan Cerita Rakyat',
    blocks: [
      { type: 'visual_cards', title: '4 Tahap Alur Cerita & Drama', cards: [
        { emoji: '1️⃣', label: 'Pengenalan (Orientasi)', sub: 'Memperkenalkan tokoh, latar tempat, dan awal situasi' },
        { emoji: '2️⃣', label: 'Muncul Masalah (Komplikasi)', sub: 'Persoalan mulai timbul dan makin seru' },
        { emoji: '3️⃣', label: 'Puncak Masalah (Klimaks)', sub: 'Bagian paling menegangkan atau menentukan nasib tokoh' },
        { emoji: '4️⃣', label: 'Penyelesaian (Resolusi)', sub: 'Masalah selesai dan muncul pesan moral' },
      ]},
    ],
    activityTitle: 'Latihan: Alur Drama & Cerita Rakyat',
    questions: [
      { text: 'Bagian paling menegangkan yang menjadi puncak persoalan dalam sebuah drama atau cerita rakyat disebut...', opts: ['Orientasi', 'Klimaks', 'Prolog', 'Judul'], ans: 1, exp: 'Klimaks adalah puncak konflik sebelum penyelesaian.' },
      { text: 'Alur cerita yang menceritakan peristiwa secara berurutan dari awal hingga akhir disebut alur...', opts: ['Maju', 'Mundur', 'Acak', 'Buntu'], ans: 0, exp: 'Alur maju bergerak kronologis dari awal ke akhir.' },
      { text: 'Tahap akhir ketika konflik mereda dan menemukan jalan keluar disebut...', opts: ['Resolusi (penyelesaian)', 'Komplikasi', 'Prolog', 'Kramagung'], ans: 0, exp: 'Resolusi menutup konflik cerita.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-08', subSeq: 4,
    objectives: ['Siswa mampu menganalisis karakter tokoh dalam cerita rakyat Nusantara (seperti Timun Mas, Bawang Putih, Malin Kundang).'],
    materialTitle: 'Karakter Tokoh Cerita Rakyat Nusantara',
    blocks: [
      { type: 'table', title: 'Contoh Tokoh & Nilai dalam Cerita Rakyat Terkenal', headers: ['Cerita Rakyat', 'Asal Daerah', 'Karakter & Nilai Pelajaran'], rows: [
        ['Timun Mas', 'Jawa Tengah', 'Berani, cerdik, dan pantang menyerah menghadapi raksasa'],
        ['Bawang Merah & Bawang Putih', 'Riau / Nusantara', 'Bawang Putih sabar & jujur; ketamakan justru merugikan diri sendiri'],
        ['Malin Kundang', 'Sumatra Barat', 'Peringatan keras agar selalu berbakti dan tidak durhaka pada orang tua'],
      ]},
    ],
    activityTitle: 'Latihan: Karakter Cerita Rakyat',
    questions: [
      { text: 'Cerita rakyat Nusantara seperti Malin Kundang mengajarkan nilai moral terpenting berupa...', opts: ['Berbakti dan menghormati orang tua dalam keadaan apa pun', 'Menjadi sombong saat kaya', 'Melupakan kampung halaman', 'Berbohong pada ibu'], ans: 0, exp: 'Kisah Malin Kundang menjadi pengingat agar selalu berbakti kepada orang tua.' },
      { text: 'Tokoh Timun Mas dapat selamat dari kejaran raksasa karena sifatnya yang...', opts: ['Berani, tenang, dan cerdik memanfaatkan bekal yang ada', 'Putus asa dan menangis saja', 'Malas berlari', 'Sombong'], ans: 0, exp: 'Kecerdikan dan keberanian membantu mengatasi kesulitan.' },
      { text: 'Cerita rakyat biasanya diwariskan secara turun-temurun dari mulut ke mulut sehingga sering bersifat...', opts: ['Anonim (tidak diketahui pasti siapa pengarang pertamanya)', 'Selalu ditulis oleh 1 wartawan modern', 'Berupa laporan keuangan', 'Hanya 1 kalimat'], ans: 0, exp: 'Ciri cerita rakyat: lisan, turun-temurun, anonim, kaya nilai moral.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-08', subSeq: 5,
    objectives: ['Siswa mampu menyampaikan kembali isi dan pesan moral cerita rakyat/drama secara komunikatif.'],
    materialTitle: 'Menyampaikan Pesan Cerita Rakyat',
    blocks: [
      { type: 'tip', text: 'Saat menyampaikan pesan cerita rakyat di depan kelas, hubungkan amanat cerita dengan contoh nyata di sekolah atau rumah! Misalnya: "Seperti Bawang Putih yang jujur dan sabar, kita juga harus jujur saat menemukan barang teman yang terjatuh."' },
    ],
    activityTitle: 'Latihan: Menyampaikan Pesan Cerita',
    questions: [
      { text: 'Mengaitkan amanat cerita rakyat dengan kehidupan sehari-hari siswa membantu pendengar untuk...', opts: ['Memahami cara mempraktikkan nilai kebaikan tersebut secara nyata', 'Melupakan ceritanya', 'Mengubah judul cerita', 'Bingung'], ans: 0, exp: 'Contoh konkret menjadikan pesan moral hidup dan aplikatif.' },
      { text: 'Dalam kisah "Keong Mas", kesabaran Dewi Sekartaji dan kebaikan Nenek Dadapan mengajarkan kita untuk...', opts: ['Suka menolong sesama tanpa pamrih dan tetap sabar saat diuji', 'Iri hati terhadap saudara', 'Suka membalas dendam', 'Serakah'], ans: 0, exp: 'Kebaikan hati Nenek Dadapan berbuah kebahagiaan.' },
      { text: 'Sikap yang baik saat menyimak teman tampil memerankan drama di kelas adalah...', opts: ['Menyimak tenang dan memberi apresiasi tepuk tangan di akhir', 'Mengganggu dan menertawakan', 'Berbicara sendiri keras-keras', 'Keluar kelas'], ans: 0, exp: 'Menghargai penampilan teman membangun rasa percaya diri bersama.' },
    ],
  },

  // BAB 9: MENULIS KREATIF DAN PRESENTASI
  {
    topicCode: 'BIND-SD5-09', subSeq: 1,
    objectives: ['Siswa mampu mengembangkan hasil pengamatan nyata menjadi tulisan deskriptif atau narasi yang hidup.'],
    materialTitle: 'Menulis Berdasarkan Pengamatan',
    blocks: [
      { type: 'visual_cards', title: 'Ubah Pengamatan Jadi Tulisan Keren!', cards: [
        { emoji: '👀', label: 'Amati Detail Kecil', sub: 'Warna langit sore, suara ombak, aroma pudak hangat' },
        { emoji: '✍️', label: 'Tulis Secara Konkret', sub: 'Alih-alih "Pasarnya ramai", tulis "Pedagang bandeng dan pembeli saling tawar-menawar riuh sejak pagi."' },
      ]},
    ],
    activityTitle: 'Latihan: Menulis dari Pengamatan',
    questions: [
      { text: 'Kalimat hasil pengamatan yang PALING konkret dan hidup adalah...', opts: ['Tamannya bagus.', 'Taman itu dipenuhi bunga melati putih beraroma wangi dan kupu-kupu kuning yang beterbangan.', 'Ada taman di sana.', 'Aku lihat taman.'], ans: 1, exp: 'Detail warna, aroma, dan gerak membuat tulisan jauh lebih hidup.' },
      { text: 'Sumber ide tulisan kreatif paling dekat dan kaya bagi siswa adalah...', opts: ['Pengamatan lingkungan sekitar dan pengalaman sehari-hari', 'Menyalin karangan internet mentah-mentah', 'Kertas kosong tanpa ide', 'Menunggu kebetulan'], ans: 0, exp: 'Lingkungan sekitar menyediakan tak terhitung bahan cerita asli.' },
      { text: 'Menyalin tulisan orang lain persis lalu mengakuinya sebagai karya sendiri adalah perbuatan yang tidak jujur dan disebut...', opts: ['Plagiarisme (menjiplak)', 'Observasi', 'Presentasi', 'Parafrase'], ans: 0, exp: 'Kita harus jujur berkarya dengan bahasa sendiri atau mencantumkan sumber.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-09', subSeq: 2,
    objectives: ['Siswa mampu menyusun teks kreatif sederhana (cerita pendek, puisi, atau artikel mading) dengan alur menarik.'],
    materialTitle: 'Menyusun Teks Kreatif',
    blocks: [
      { type: 'list', title: '4 Tahap Proses Menulis Kreatif', items: ['1. Pramenulis: pilih tema dan buat kerangka ide.', '2. Menulis Draf: tuangkan ide bebas tanpa takut salah dulu.', '3. Revisi & Sunting: perbaiki kalimat agar mengalir lancar, cek ejaan EYD V.', '4. Publikasi: tempel di mading kelas atau bacakan di depan teman!'] },
    ],
    activityTitle: 'Latihan: Menyusun Teks Kreatif',
    questions: [
      { text: 'Urutan proses menulis kreatif yang baik adalah...', opts: ['Pramenulis → Menulis draf → Revisi & sunting → Publikasi', 'Publikasi → Baru berpikir ide', 'Sunting → Menulis judul saja', 'Menghapus → Publikasi'], ans: 0, exp: 'Empat tahap menulis memastikan karya matang dan rapi.' },
      { text: 'Judul karangan kreatif yang menarik sebaiknya...', opts: ['Singkat, menggugah rasa ingin tahu, dan sesuai isi tulisan', 'Terdiri dari 40 kata', 'Tidak nyambung dengan isi', 'Sama persis dengan isi paragraf 1'], ans: 0, exp: 'Judul ringkas dan menarik memikat pembaca.' },
      { text: 'Tahap memperbaiki ejaan, huruf kapital, tanda baca, dan pilihan kata disebut...', opts: ['Menyunting (revisi/editing)', 'Pramenulis', 'Presentasi', 'Wawancara'], ans: 0, exp: 'Penyuntingan menyempurnakan draf menjadi karya akhir.' },
    ],
  },
  {
    topicCode: 'BIND-SD5-09', subSeq: 3,
    objectives: ['Siswa mampu memperkaya tulisan dengan sinonim, antonim, imbuhan tepat, dan kosakata baku.'],
    materialTitle: 'Mengembangkan Kosakata dan Kata Baku',
    blocks: [
      { type: 'table', title: 'Kata Tidak Baku vs Kata Baku (KBBI)', headers: ['Tidak Baku (Hindari di Teks Resmi)', 'Baku (Gunakan!)'], rows: [
        ['aktifitas', 'aktivitas'],
        ['apotik', 'apotek'],
        ['nasehat', 'nasihat'],
        ['praktek', 'praktik'],
        ['atlit', 'atlet'],
        ['ijin', 'izin'],
      ]},
    ],
    activityTitle: 'Latihan: Kosakata & Kata Baku',
    questions: [
      { text: 'Penulisan kata BAKU yang benar menurut KBBI adalah...', opts: ['Apotik dan nasehat', 'Apotek dan nasihat', 'Aktifitas dan praktek', 'Ijin dan atlit'], ans: 1, exp: 'Bentuk baku: apotek, nasihat, aktivitas, praktik, izin, atlet.' },
      { text: 'Sinonim (persamaan makna) dari kata "rajin" agar tulisan tidak mengulang kata sama terus adalah...', opts: ['Tekun / giat', 'Malas', 'Cepat marah', 'Lambat'], ans: 0, exp: 'Sinonim memperkaya variasi bahasa dalam karangan.' },
      { text: 'Antonim (lawan kata) dari kata "optimis" adalah...', opts: ['Semangat', 'Pesimis', 'Ceria', 'Berani'], ans: 1, exp: 'Optimis (penuh harapan) ↔ pesimis (mudah putus asa).' },
    ],
  },
  {
    topicCode: 'BIND-SD5-09', subSeq: 4,
    objectives: ['Siswa mampu mempresentasikan hasil karya tulisnya di depan kelas secara sistematis, percaya diri, dan interaktif.'],
    materialTitle: 'Mempresentasikan Hasil Karya',
    blocks: [
      { type: 'visual_cards', title: 'Checklist Presentasi Hebat Kelas 5', cards: [
        { emoji: '🎙️', label: 'Pembukaan Menarik', sub: 'Salam, perkenalan, dan sebutkan judul karya dengan antusias' },
        { emoji: '🖼️', label: 'Visual Pendukung', sub: 'Tunjukkan poster, gambar, atau tabel ringkas agar teman fokus' },
        { emoji: '💬', label: 'Sesi Tanya Jawab', sub: 'Buka kesempatan teman bertanya & jawab dengan sopan' },
        { emoji: '🙏', label: 'Penutup Berkesan', sub: 'Simpulkan pesan utama karya lalu ucapkan terima kasih' },
      ]},
    ],
    activityTitle: 'Latihan: Presentasi Karya',
    questions: [
      { text: 'Saat mempresentasikan poster hasil observasi, sebaiknya kita...', opts: ['Menjelaskan poin-poin penting dengan kata sendiri sambil menatap audiens', 'Membaca seluruh teks di kertas sambil menunduk tanpa menatap teman', 'Berbicara sangat cepat agar cepat selesai', 'Membelakangi teman'], ans: 0, exp: 'Menjelaskan dengan kontak mata membuat presentasi komunikatif.' },
      { text: 'Jika saat sesi tanya jawab ada pertanyaan teman yang belum kita ketahui jawabannya, sikap jujur dan bijak adalah...', opts: ['Mengarang jawaban bohong', 'Mengakui dengan sopan bahwa kita akan mencari tahu infonya lebih lanjut', 'Memarahi penanya', 'Langsung kabur duduk'], ans: 1, exp: 'Kejujuran dan kemauan belajar lebih dihargai daripada mengarang.' },
      { text: 'Manfaat berlatih presentasi 1–2 kali sebelum tampil di depan kelas adalah...', opts: ['Mengurangi rasa gugup dan melancarkan pengucapan', 'Membuat suara habis', 'Menghabiskan waktu', 'Menghapus materi'], ans: 0, exp: 'Latihan membangun kepercayaan diri dan ketepatan waktu.' },
    ],
  },
];

upsertLessonsBatch('Kelas 5 SD — Bahasa Indonesia (9 Bab, 42 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

