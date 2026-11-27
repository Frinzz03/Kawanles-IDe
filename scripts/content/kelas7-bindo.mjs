import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: TEKS DESKRIPSI
  {
    topicCode: 'BIND-SMP7-01', subSeq: 1,
    objectives: ['Siswa memahami pengertian, tujuan, dan ciri-ciri teks deskripsi SMP (objek khusus, melibatkan pancaindra, kesan pribadi).'],
    materialTitle: 'Pengertian dan Tujuan Teks Deskripsi',
    blocks: [
      { type: 'text', text: 'Teks deskripsi menggambarkan suatu objek KHUSUS secara rinci dan subjektif-hidup melalui serapan pancaindra (penglihatan, pendengaran, penciuman, pengecapan, perabaan) agar pembaca seolah-olah melihat, mendengar, dan merasakannya sendiri.' },
    ],
    activityTitle: 'Latihan: Pengertian Teks Deskripsi',
    questions: [
      { text: 'Ciri khas teks deskripsi dibanding teks laporan hasil observasi (LHO) adalah teks deskripsi...', opts: ['Menggambarkan satu objek khusus secara rinci dan melibatkan kesan perasaan penulis', 'Membahas objek secara klasifikasi ilmiah umum saja', 'Selalu berisi angka statistik', 'Berisi langkah-langkah kerja'], ans: 0, exp: 'Deskripsi melukiskan satu objek spesifik (mis. "Kucingku Mochi") disertai kesan indrawi.' },
      { text: 'Kalimat "Debur ombak pesisir utara berirama lembut menyapu tepian tambak" dominan melibatkan citraan indra...', opts: ['Pendengaran dan penglihatan', 'Pengecapan', 'Penciuman', 'Perabaan saja'], ans: 0, exp: '"Debur ombak berirama lembut" (pendengaran) dan "menyapu tepian" (penglihatan).' },
      { text: 'Tujuan utama penulis menulis teks deskripsi tentang suatu tempat wisata adalah...', opts: ['Menggambarkan keindahan dan suasana tempat itu secara konkret hingga pembaca seolah berada di sana', 'Menyuruh orang membeli tiket', 'Menceritakan sejarah 100 tahun', 'Menghitung luas lahan'], ans: 0, exp: 'Teks deskripsi menghadirkan pengalaman indrawi lewat kata.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-01', subSeq: 2,
    objectives: ['Siswa mampu menganalisis struktur teks deskripsi: Identifikasi, Deskripsi Bagian, dan Simpulan/Kesan.'],
    materialTitle: 'Struktur Teks Deskripsi',
    blocks: [
      { type: 'table', title: '3 Struktur Teks Deskripsi SMP', headers: ['Bagian', 'Fungsinya'], rows: [
        ['1. Identifikasi', 'Memperkenalkan nama objek, lokasi, dan gambaran umum awal'],
        ['2. Deskripsi Bagian', 'Merinci bagian-bagian objek menurut ruang, anggota bagian, atau proses pengamatan'],
        ['3. Simpulan / Kesan', 'Penutup berupa kesan umum, kekaguman, atau ajakan merawat objek'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Teks Deskripsi',
    questions: [
      { text: 'Bagian teks deskripsi yang merinci sudut-sudut ruangan, warna dinding, tata lampu, dan aroma ruangan disebut...', opts: ['Identifikasi', 'Deskripsi bagian', 'Orientasi', 'Resolusi'], ans: 1, exp: 'Deskripsi bagian menjabarkan detail komponen objek.' },
      { text: 'Urutan struktur teks deskripsi yang tepat adalah...', opts: ['Identifikasi → Deskripsi bagian → Simpulan/kesan', 'Simpulan → Identifikasi → Deskripsi bagian', 'Tesis → Argumentasi → Penegasan', 'Orientation → Events'], ans: 0, exp: 'Struktur baku: Identifikasi → Deskripsi Bagian → Simpulan/Kesan.' },
      { text: 'Kalimat "Sungguh taman kota yang asri dan pantas kita jaga bersama kebersihannya" tepat diletakkan di bagian...', opts: ['Identifikasi', 'Simpulan / kesan penutup', 'Judul', 'Kramagung'], ans: 1, exp: 'Menyatakan kesan menyeluruh di akhir teks.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-01', subSeq: 3,
    objectives: ['Siswa mampu menulis paragraf identifikasi objek secara tajam dan menarik.'],
    materialTitle: 'Identifikasi Objek dalam Teks Deskripsi',
    blocks: [
      { type: 'tip', text: 'Identifikasi yang kuat langsung menjawab: Apa nama objeknya? Di mana letaknya? Apa hal paling unik yang langsung membedakannya dari objek lain?' },
    ],
    activityTitle: 'Latihan: Identifikasi Objek',
    questions: [
      { text: 'Manakah kalimat IDENTIFIKASI yang paling baik untuk teks deskripsi tentang "Alun-Alun Gresik"?', opts: ['Alun-Alun Gresik adalah ruang terbuka publik di pusat kota yang menjadi tempat favorit warga bersantai.', 'Kursinya berwarna cokelat tua.', 'Anak-anak berlarian di sore hari.', 'Mari kita jaga kebersihan taman!'], ans: 0, exp: 'Memperkenalkan nama objek, lokasi, dan fungsi umumnya.' },
      { text: 'Objek teks deskripsi selalu bersifat SPESIFIK (khusus), contohnya...', opts: ['"Ibuku, Sosok Penuh Kesabaran" atau "Perpustakaan SMP Harapan"', '"Jenis-Jenis Mamalia di Dunia"', '"Cara Menanak Nasi"', '"Dampak Perubahan Iklim"'], ans: 0, exp: 'Objek tunggal dan personal/spesifik adalah ciri teks deskripsi.' },
      { text: 'Penggunaan kata ganti atau sebutan khusus pada identifikasi membantu pembaca segera mengenali...', opts: ['Fokus objek tunggal yang dibahas seluruh teks', 'Semua topik di dunia', 'Konflik cerita', 'Daftar harga'], ans: 0, exp: 'Identifikasi mematok fokus objek sejak awal.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-01', subSeq: 4,
    objectives: ['Siswa mampu menggunakan kata konkret, kata sifat (adjektiva), kata khusus (hiponim), dan majas dalam teks deskripsi.'],
    materialTitle: 'Kata Konkret, Kata Sifat, dan Kata Khusus',
    blocks: [
      { type: 'table', title: 'Perkuat Deskripsi: Ganti Kata Umum → Kata Khusus!', headers: ['Kata Umum (Hipernim)', 'Kata Khusus (Hiponim — Lebih Hidup!)'], rows: [
        ['Melihat', 'Menatap, memandang, mengamati, melirik'],
        ['Indah / Bagus', 'Elok, memesona, asri, megah, menawan'],
        ['Warna merah', 'Merah menyala, merah marun, merah jambu'],
        ['Membawa', 'Menjinjing, memikul, menggendong, menenteng'],
      ]},
    ],
    activityTitle: 'Latihan: Kata Sifat & Kata Konkret',
    questions: [
      { text: 'Kata khusus (hiponim) dari kata umum "membawa" yang paling tepat untuk ember air di tangan adalah...', opts: ['Menjinjing', 'Menggendong', 'Memikul di pundak', 'Menyunggi di kepala'], ans: 0, exp: 'Menjinjing = membawa dengan tangan menggantung ke bawah.' },
      { text: 'Kata "elok, megah, bersih, harum" tergolong jenis kata...', opts: ['Kata sifat (adjektiva)', 'Kata kerja', 'Kata bilangan', 'Konjungsi'], ans: 0, exp: 'Adjektiva menerangkan sifat/keadaan benda.' },
      { text: 'Penulisan awalan meN- + kata dasar "pesona" (berawalan k, p, t, s + vokal LULUH!) yang BENAR adalah...', opts: ['Mempesona', 'Memesona', 'Menpesona', 'Mepesona'], ans: 1, exp: 'Aturan KPTS luluh: meN- + pesona → memesona (bukan mempesona!).' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-01', subSeq: 5,
    objectives: ['Siswa mampu mendeskripsikan tempat, benda, dan suasana dengan sudut pandang spasial yang runtut.'],
    materialTitle: 'Mendeskripsikan Tempat, Benda, dan Suasana',
    blocks: [
      { type: 'tip', text: 'Gunakan urutan SPASIAL (ruang) saat mendeskripsikan tempat: dari depan → tengah → belakang, atau dari luar → masuk ke dalam, agar pembaca seperti sedang "berjalan tur" di tempat tersebut!' },
    ],
    activityTitle: 'Latihan: Deskripsi Tempat & Suasana',
    questions: [
      { text: 'Urutan penggambaran ruangan dari pintu masuk → ruang tengah → jendela belakang menggunakan pola pengembangan...', opts: ['Spasial (keruangan)', 'Kronologis waktu', 'Sebab-akibat', 'Acak'], ans: 0, exp: 'Pola spasial menyusuri tata ruang secara teratur.' },
      { text: 'Kalimat "Aroma manis pandan dan santan menyeruak hangat begitu bungkus pelepah pinang dibuka" menggambarkan deskripsi melalui indra...', opts: ['Penciuman dan perabaan (suhu hangat)', 'Pendengaran', 'Penglihatan saja', 'Keseimbangan'], ans: 0, exp: 'Aroma (penciuman) + hangat (perabaan).' },
      { text: 'Kalimat yang menggunakan majas PERSONIFIKASI untuk menghidupkan suasana pantai adalah...', opts: ['Angin sore berbisik lembut sambil membelai daun kelapa.', 'Pantai itu terletak di utara kota.', 'Luas pantai sekitar 2 hektare.', 'Ada 10 perahu di tepi pantai.'], ans: 0, exp: 'Angin diberi tindakan manusia ("berbisik", "membelai").' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-01', subSeq: 6,
    objectives: ['Siswa mampu menyusun dan menyunting teks deskripsi 3–4 paragraf secara mandiri dengan ejaan tepat.'],
    materialTitle: 'Menulis dan Menyunting Teks Deskripsi',
    blocks: [
      { type: 'list', title: 'Langkah Menulis Teks Deskripsi Berkualitas', items: ['1. Tentukan 1 objek spesifik dan amati langsung semua detail indrawinya.', '2. Susun kerangka: Identifikasi → 2 paragraf Deskripsi Bagian → Kesan Penutup.', '3. Pakai kata khusus, majas wajar, dan cek ejaan kata depan di/ke serta aturan luluh KPTS!'] },
    ],
    activityTitle: 'Latihan: Menulis Teks Deskripsi',
    questions: [
      { text: 'Penulisan gabungan kata depan "di" dan awalan "di-" yang BENAR adalah...', opts: ['Rumah itu terletak di pinggir jalan dan dicat warna krem.', 'Rumah itu terletak dipinggir jalan dan di cat warna krem.', 'Rumah itu terletak di pinggir jalan dan di cat warna krem.', 'Rumah itu terletak dipinggir jalan dan dicat warna krem.'], ans: 0, exp: '"di pinggir" (tempat → pisah); "dicat" (kata kerja pasif → gabung).' },
      { text: 'Kalimat rincian yang paling baik untuk memperjelas kalimat "Kamar belajarku sangat nyaman" adalah...', opts: ['Meja belajarnya rapi di dekat jendela, pencahayaannya terang, dan sirkulasi udaranya sejuk.', 'Kamar itu bagus sekali.', 'Aku punya kamar.', 'Kamarnya ada di rumah.'], ans: 0, exp: 'Kalimat perincian memberi bukti konkret atas sifat "nyaman".' },
      { text: 'Hal terakhir sebelum memublikasikan teks deskripsi di mading SMP adalah...', opts: ['Menyunting ejaan, tanda baca, dan pilihan kata khusus', 'Menghapus paragraf 2', 'Mengganti objek di tengah teks', 'Menghilangkan judul'], ans: 0, exp: 'Penyuntingan menjaga ketepatan ejaan dan keindahan bahasa.' },
    ],
  },

  // BAB 2: TEKS PROSEDUR
  {
    topicCode: 'BIND-SMP7-02', subSeq: 1,
    objectives: ['Siswa mampu membedakan 3 jenis teks prosedur SMP (membuat, menggunakan/memainkan, melakukan kegiatan) beserta ciri bahasanya.'],
    materialTitle: 'Tujuan dan Ciri Teks Prosedur',
    blocks: [
      { type: 'text', text: 'Teks prosedur memandu pembaca melakukan aktivitas, menggunakan alat, atau membuat karya secara tepat dan aman. Ciri utamanya: memakai kalimat perintah (imperatif), kalimat saran/larangan, ukuran akurat, dan kata penghubung urutan.' },
    ],
    activityTitle: 'Latihan: Ciri Teks Prosedur',
    questions: [
      { text: 'Manakah judul yang termasuk teks prosedur CARA MEMAINKAN / MENGGUNAKAN ALAT?', opts: ['Cara Memainkan Angklung dengan Teknik Kurulung', 'Cara Membuat Otak-Otak Bandeng', 'Cara Mencuci Tangan 6 Langkah', 'Asal-Usul Angklung'], ans: 0, exp: 'Memandu teknik memainkan alat musik angklung.' },
      { text: 'Ciri kebahasaan yang PALING menonjol pada bagian langkah-langkah teks prosedur adalah...', opts: ['Kalimat perintah (imperatif), kata kerja aktif tindakan, dan ukuran/batasan jelas', 'Banyak dialog tokoh fiksi', 'Menggunakan kata sifat emosional saja', 'Bersajak a-b-a-b'], ans: 0, exp: 'Prosedur mengandalkan instruksi konkret dan terukur.' },
      { text: 'Teks prosedur harus disusun secara logis dan objektif agar...', opts: ['Siapa pun yang mengikutinya dapat memperoleh hasil tepat tanpa kebingungan atau bahaya', 'Hanya dimengerti penulisnya', 'Terasa seperti puisi', 'Menjadi dongeng'], ans: 0, exp: 'Objektivitas dan kejelasan menjamin keterlaksanaan prosedur.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-02', subSeq: 2,
    objectives: ['Siswa mampu menelaah kelengkapan 4 struktur teks prosedur (Tujuan, Alat & Bahan, Langkah-Langkah, Penutup).'],
    materialTitle: 'Struktur Langkah-Langkah Teks Prosedur',
    blocks: [
      { type: 'table', title: 'Analisis Struktur Teks Prosedur', headers: ['Bagian', 'Wajib / Opsional', 'Fungsinya'], rows: [
        ['1. Tujuan', 'Wajib', 'Menyatakan hasil akhir & motivasi singkat mengapa penting'],
        ['2. Alat dan Bahan', 'Wajib untuk "cara membuat"', 'Daftar rinci ukuran/takaran bahan & alat'],
        ['3. Langkah-Langkah', 'Wajib (Inti!)', 'Tahapan bernomor urut + peringatan keselamatan bila perlu'],
        ['4. Penutup', 'Opsional', 'Ucapan selamat mencoba & penekanan manfaat'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Teks Prosedur',
    questions: [
      { text: '"Mudah bukan? Dengan memanfaatkan kain perca, kamu ikut mengurangi limbah tekstil sekaligus memiliki tas cantik!" Kutipan ini adalah bagian...', opts: ['Tujuan', 'Alat dan bahan', 'Langkah', 'Penutup'], ans: 3, exp: 'Memberikan apresiasi dan penegasan manfaat di akhir teks.' },
      { text: 'Mengapa pada teks prosedur membuat makanan, bagian Alat dan Bahan harus memisahkan ukuran pasti (misal 250 g tepung, 150 mL air)?', opts: ['Agar takaran adonan pas dan resep tidak gagal', 'Agar terlihat seperti soal IPA', 'Biar susah dibuat', 'Tidak perlu takaran'], ans: 0, exp: 'Batasan kuantitatif menjamin akurasi hasil.' },
      { text: 'Pada teks prosedur yang tidak memerlukan bahan (misalnya "Cara Melakukan Senam Peregangan Pagi"), strukturnya terdiri atas...', opts: ['Tujuan → Langkah-langkah → Penutup', 'Bahan saja', 'Orientasi → Komplikasi', 'Tesis → Argumen'], ans: 0, exp: 'Prosedur aktivitas fisik cukup Tujuan, Langkah-langkah, dan Penutup.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-02', subSeq: 3,
    objectives: ['Siswa mampu mengubah kalimat berita/pasif menjadi kalimat perintah (imperatif) efektif dan kalimat saran/larangan.'],
    materialTitle: 'Kalimat Perintah, Saran, dan Larangan',
    blocks: [
      { type: 'worked_example', level: 'Ubah Jadi Imperatif', question: 'Ubah kalimat berita "Adonan sebaiknya kamu aduk perlahan sampai tidak menggumpal" menjadi kalimat perintah efektif!', steps: ['Hilangkan subjek "kamu" dan jadikan kata kerja perintah di awal:', '"Aduklah adonan secara perlahan hingga tidak menggumpal!"'], answer: 'Aduklah adonan secara perlahan hingga tidak menggumpal!' },
    ],
    activityTitle: 'Latihan: Kalimat Perintah',
    questions: [
      { text: 'Manakah yang merupakan kalimat SARAN (bukan larangan keras) dalam teks prosedur?', opts: ['Sebaiknya gunakan api kecil agar bagian luar kue tidak cepat gosong.', 'Dilarang menyentuh kompor menyala!', 'Matikan kompor sekarang!', 'Kompor sudah mati.'], ans: 0, exp: '"Sebaiknya..." memberi saran optimasi hasil.' },
      { text: 'Ubah kalimat "Air dimasukkan ke dalam panci sebanyak 500 mL" menjadi kalimat perintah aktif yang efektif:', opts: ['Masukkan 500 mL air ke dalam panci!', 'Panci masukkan air 500 mL!', '500 mL air dimasukkannya!', 'Apakah air sudah dimasukkan?'], ans: 0, exp: 'Kata kerja perintah aktif "Masukkan" di awal kalimat.' },
      { text: 'Tanda baca yang tepat mengakhiri kalimat perintah tegas atau peringatan bahaya dalam teks prosedur adalah...', opts: ['Tanda seru (!)', 'Tanda tanya (?)', 'Tanda koma (,)', 'Titik dua (:)'], ans: 0, exp: 'Kalimat imperatif/seruan diakhiri tanda seru (atau titik untuk instruksi lembut).' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-02', subSeq: 4,
    objectives: ['Siswa mampu membedakan kata kerja aktif (verba tindakan) dan kata kerja pasif yang tepat dalam teks prosedur.'],
    materialTitle: 'Kata Kerja Tindakan dan Keterangan Cara/Alat',
    blocks: [
      { type: 'table', title: '4 Jenis Keterangan Penguat Prosedur', headers: ['Jenis Keterangan', 'Contoh dalam Langkah'], rows: [
        ['Keterangan Cara', 'Aduk SECARA PERLAHAN / DENGAN MERATA'],
        ['Keterangan Alat', 'Potong wortel MENGGUNAKAN PISAU TAJAM'],
        ['Keterangan Tujuan', 'Tutup panci AGAR AIR CEPAT MENDIDIH'],
        ['Keterangan Derajat/Ukuran', 'Panggang SELAMA 20 MENIT pada suhu 180°C'],
      ]},
    ],
    activityTitle: 'Latihan: Kata Kerja & Keterangan Prosedur',
    questions: [
      { text: 'Pada kalimat "Kukus adonan selama 30 menit agar matang merata", frasa "agar matang merata" adalah keterangan...', opts: ['Alat', 'Cara', 'Tujuan', 'Kuantitas'], ans: 2, exp: 'Kata "agar/supaya" menandai keterangan tujuan.' },
      { text: 'Pada kalimat "Haluskan bumbu menggunakan ulekan batu", frasa "menggunakan ulekan batu" adalah keterangan...', opts: ['Alat', 'Waktu', 'Tujuan', 'Syarat'], ans: 0, exp: 'Menyebutkan alat yang dipakai melakukan tindakan.' },
      { text: 'Kata kerja yang tepat dipakai pada langkah prosedur adalah kata kerja tindakan (fisik), seperti...', opts: ['Rebus, saring, lipat, tekan, tempelkan', 'Berharap, menduga, merasa', 'Adalah, merupakan', 'Indah, cepat'], ans: 0, exp: 'Verba material merujuk gerakan fisik konkret.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-02', subSeq: 5,
    objectives: ['Siswa mampu menggunakan konjungsi temporal (urutan waktu) dan penomoran secara konsisten tanpa tumpang tindih.'],
    materialTitle: 'Konjungsi Urutan dalam Teks Prosedur',
    blocks: [
      { type: 'tip', text: 'Konjungsi urutan waktu: mula-mula, pertama, kemudian, selanjutnya, setelah itu, lalu, akhirnya. Jika sudah memakai nomor urut 1, 2, 3, hindari menulis "1. Pertama-tama..." secara berlebihan di tiap baris!' },
    ],
    activityTitle: 'Latihan: Konjungsi Urutan',
    questions: [
      { text: '"Diamkan adonan selama 15 menit, ... bentuk bulat kecil sesuai selera." Konjungsi urutan yang tepat adalah...', opts: ['kemudian / setelah itu', 'tetapi', 'walaupun', 'sebab'], ans: 0, exp: 'Menunjukkan langkah lanjutan sesudah mendiamkan adonan.' },
      { text: 'Fungsi utama konjungsi temporal (lalu, selanjutnya, akhirnya) dalam teks prosedur adalah...', opts: ['Menjaga keruntutan kronologis antarlangkah kerja', 'Membandingkan dua pendapat', 'Menyatakan pertentangan', 'Menutup dialog'], ans: 0, exp: 'Menghubungkan tahapan langkah secara berurutan.' },
      { text: 'Konjungsi syarat yang sering muncul pada teks prosedur (misalnya "Jika adonan masih terlalu kental, tambahkan sedikit air") adalah...', opts: ['Jika / Apabila', 'Dan', 'Atau', 'Padahal'], ans: 0, exp: 'Keterangan syarat memandu solusi bila kondisi tertentu terjadi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-02', subSeq: 6,
    objectives: ['Siswa mampu menulis teks prosedur kreatif (infografis atau teks utuh) untuk keterampilan nyata siswa SMP.'],
    materialTitle: 'Menulis Petunjuk / Teks Prosedur Utuh',
    blocks: [
      { type: 'list', title: 'Checklist Teks Prosedur SMP', items: ['Judul jelas ("Cara Membuat...", "Tips Aman Menggunakan...").', 'Struktur lengkap (Tujuan, Alat/Bahan berukur, Langkah urut, Penutup).', 'Ada minimal 1 kalimat peringatan keselamatan atau saran agar pembaca berhasil 100%!'] },
    ],
    activityTitle: 'Latihan: Menulis Petunjuk',
    questions: [
      { text: 'Urutan tepat "Cara Membuat Akun Email Sekolah yang Aman": (1) Buat kata sandi kuat kombinasi huruf-angka, (2) Buka halaman pendaftaran resmi, (3) Isi data diri dengan benar, (4) Simpan kata sandi di tempat aman dan jangan dibagikan.', opts: ['2-3-1-4', '1-2-3-4', '4-3-2-1', '2-1-4-3'], ans: 0, exp: 'Buka situs (2) → isi data (3) → buat sandi kuat (1) → jaga kerahasiaan (4).' },
      { text: 'Mengubah teks prosedur panjang menjadi INFOGRAFIS langkah bergambar bermanfaat agar...', opts: ['Pembaca cepat memindai urutan tahapan secara visual', 'Langkahnya hilang', 'Tidak perlu kata kerja', 'Lebih sulit dipahami'], ans: 0, exp: 'Visualisasi langkah mempercepat pemahaman praktis.' },
      { text: 'Sebelum memublikasikan teks prosedur, uji terbaik untuk memastikan teks kita sudah sempurna adalah...', opts: ['Meminta teman mencoba mempraktikkannya langsung mengikuti tulisan kita', 'Menyimpannya di laci', 'Menghapus bagian alat', 'Mengganti judulnya'], ans: 0, exp: 'Uji keterbacaan/praktik membuktikan tidak ada langkah yang terlewat.' },
    ],
  },

  // BAB 3: TEKS NARASI DAN CERITA PENDEK
  {
    topicCode: 'BIND-SMP7-03', subSeq: 1,
    objectives: ['Siswa mampu membedakan cerita fantasi dan cerpen realis serta mengidentifikasi seluruh unsur intrinsiknya.'],
    materialTitle: 'Unsur Intrinsik Teks Narasi & Cerpen',
    blocks: [
      { type: 'table', title: 'Peta Unsur Intrinsik Narasi / Cerpen', headers: ['Unsur', 'Fokus Analisis SMP'], rows: [
        ['Tema', 'Ide sentral yang menjiwai seluruh cerita'],
        ['Tokoh & Penokohan', 'Teknik analitik (langsung) vs dramatik (lewat dialog, tindakan, pikiran)'],
        ['Latar', 'Tempat, waktu, dan latar sosial-budaya'],
        ['Alur (Plot)', 'Maju, mundur (flashback), atau campuran (Orientasi → Komplikasi → Resolusi)'],
        ['Sudut Pandang', 'Orang pertama ("Aku") vs Orang ketiga serbatahu/pengamat ("Ia/Nama")'],
        ['Amanat & Gaya Bahasa', 'Pesan tersirat/tersurat serta majas yang dipakai pengarang'],
      ]},
    ],
    activityTitle: 'Latihan: Unsur Intrinsik Cerpen',
    questions: [
      { text: 'Ciri pembeda utama CERITA FANTASI dibandingkan cerpen realis adalah cerita fantasi...', opts: ['Mengandung keajaiban, dunia imajinatif, atau kekuatan supranatural yang tidak ada di dunia nyata', 'Selalu berdasarkan berita koran', 'Tidak memiliki alur', 'Tidak memiliki tokoh'], ans: 0, exp: 'Unsur magis/keajaiban lintas ruang-waktu menjadi ciri cerita fantasi.' },
      { text: 'Penggambaran watak tokoh secara TIDAK LANGSUNG melalui ucapan, tindakan, dan reaksi tokoh lain disebut teknik penokohan...', opts: ['Dramatik', 'Analitik', 'Statis', 'Formal'], ans: 0, exp: 'Analitik = pengarang langsung menyebut sifat; Dramatik = pembaca menyimpulkan dari perilaku/dialog.' },
      { text: 'Tiga struktur pokok teks narasi/cerita fantasi dan cerpen adalah...', opts: ['Orientasi → Komplikasi → Resolusi', 'Tesis → Argumen → Penegasan', 'Pernyataan umum → Deretan penjelas', 'Tujuan → Alat → Langkah'], ans: 0, exp: 'Orientasi (pengenalan), Komplikasi (konflik hingga klimaks), Resolusi (penyelesaian).' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-03', subSeq: 2,
    objectives: ['Siswa mampu menganalisis watak tokoh (protagonis, antagonis, tritagonis) dengan bukti kutipan teks.'],
    materialTitle: 'Analisis Tokoh dan Penokohan',
    blocks: [
      { type: 'worked_example', level: 'Bukti Tekstual Watak', question: '"Meski hujan mengguyur, Raka berbalik mengayuh sepedanya demi mengembalikan dompet pedagang yang terjatuh di tikungan." Bagaimana cara menjelaskan watak Raka secara analitis?', steps: ['Sebutkan wataknya: Jujur dan berintegritas tinggi.', 'Sertakan BUKTI kutipan: rela berbalik di tengah hujan demi mengembalikan dompet orang lain.'], answer: 'Analisis watak SMP selalu menyertakan bukti kalimat dari teks!' },
    ],
    activityTitle: 'Latihan: Tokoh & Penokohan',
    questions: [
      { text: '"Ia adalah anak yang sangat sabar dan rendah hati." Kutipan ini menggunakan teknik penggambaran watak secara...', opts: ['Analitik (disebutkan langsung oleh pengarang)', 'Dramatik', 'Dialog', 'Latar belakang'], ans: 0, exp: 'Pengarang langsung menyebutkan kata sifat "sabar dan rendah hati".' },
      { text: '"Tanpa diminta, Alya segera memunguti kertas tugas teman-temannya yang berserakan tertiup angin." Bukti watak Alya yang tepat adalah...', opts: ['Peduli dan sigap menolong (dibuktikan dari tindakannya langsung membantu tanpa diminta)', 'Pemalu', 'Sombong', 'Ceroboh'], ans: 0, exp: 'Tindakan spontan membantu membuktikan kepeduliannya (teknik dramatik).' },
      { text: 'Tokoh yang mengalami perubahan sikap/karakter dari awal hingga akhir cerita (misalnya dari egois menjadi peduli setelah suatu peristiwa) disebut tokoh...', opts: ['Dinamis (berkembang)', 'Statis', 'Figuran', 'Narator'], ans: 0, exp: 'Tokoh dinamis mengalami perkembangan batin/sikap sepanjang alur.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-03', subSeq: 3,
    objectives: ['Siswa mampu menganalisis latar tempat, waktu, suasana, dan latar sosial-budaya dalam cerpen.'],
    materialTitle: 'Latar Tempat, Waktu, dan Sosial-Budaya',
    blocks: [
      { type: 'text', text: 'Di jenjang SMP kita juga mengenal LATAR SOSIAL-BUDAYA, yaitu gambaran kebiasaan hidup, bahasa daerah, pekerjaan, dan adat istiadat masyarakat tempat cerita berlangsung (misalnya kehidupan keluarga petambak pesisir atau suasana pasar tradisional pagi hari).' },
    ],
    activityTitle: 'Latihan: Latar Cerpen',
    questions: [
      { text: '"Setiap menjelang subuh, deru perahu nelayan dan sapaan akrab berbahasa Jawa terdengar riuh di dermaga kecil itu." Kutipan ini kuat menggambarkan latar...', opts: ['Tempat, waktu, sekaligus sosial-budaya masyarakat pesisir', 'Ruang angkasa', 'Istana Eropa', 'Kantor modern'], ans: 0, exp: 'Dermaga (tempat), menjelang subuh (waktu), kebiasaan nelayan & bahasa Jawa (sosial-budaya).' },
      { text: 'Fungsi utama latar dalam sebuah cerpen adalah...', opts: ['Membangun imajinasi pembaca, memperkuat suasana emosi, dan memberi konteks nyata pada konflik', 'Hanya memanjangkan tulisan', 'Mengganti tokoh', 'Menghilangkan alur'], ans: 0, exp: 'Latar menghidupkan dunia cerita.' },
      { text: 'Latar suasana "mencekam dan penuh ketegangan" biasanya muncul pada tahap alur...', opts: ['Klimaks / puncak konflik', 'Koda penutup damai', 'Daftar isi', 'Biodata penulis'], ans: 0, exp: 'Ketegangan memuncak saat klimaks.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-03', subSeq: 4,
    objectives: ['Siswa mampu membedakan alur maju (progresif), alur mundur (regresif/flashback), dan alur campuran.'],
    materialTitle: 'Jenis Alur: Maju, Mundur, dan Campuran',
    blocks: [
      { type: 'table', title: '3 Jenis Alur Cerpen', headers: ['Alur', 'Ciri Pergerakan Waktu'], rows: [
        ['Alur Maju (Progresif)', 'Urut dari masa awal → tengah → akhir secara kronologis'],
        ['Alur Mundur (Regresif / Kilas Balik)', 'Dimulai dari masa kini/akhir lalu menengok kembali kejadian masa lalu (flashback)'],
        ['Alur Campuran', 'Memadukan masa kini, kilas balik masa lalu, lalu kembali maju menyelesaikan cerita'],
      ]},
    ],
    activityTitle: 'Latihan: Alur Cerpen',
    questions: [
      { text: 'Cerpen dibuka dengan adegan Bima berdiri di panggung menerima piala, lalu ia terkenang masa 2 tahun lalu saat pertama kali gagal lomba, dan akhirnya kembali ke panggung sambil tersenyum. Alur cerpen ini adalah...', opts: ['Alur campuran', 'Alur maju murni', 'Tanpa alur', 'Alur datar'], ans: 0, exp: 'Masa kini → kilas balik masa lalu → kembali ke masa kini = alur campuran.' },
      { text: 'Tanda kebahasaan yang sering menandai perpindahan ke kilas balik (flashback) adalah...', opts: ['"Tiga tahun silam...", "Tiba-tiba ingatannya melayang ke masa kecil..."', '"Besok pagi..."', '"Pertama-tama siapkan..."', '"Oleh karena itu..."'], ans: 0, exp: 'Penanda waktu lampau menarik alur mundur ke ingatan masa lalu.' },
      { text: 'Tahapan alur dari awal sampai akhir yang paling lengkap adalah...', opts: ['Pengenalan → Muncul konflik → Konflik memuncak (klimaks) → Peleraian → Penyelesaian', 'Klimaks → Pengenalan → Judul', 'Penyelesaian → Konflik', 'Konflik saja'], ans: 0, exp: 'Lima tahapan alur klasik (Piramida Freytag).' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-03', subSeq: 5,
    objectives: ['Siswa mampu membedakan konflik eksternal (antarpelaku/alam) dan konflik internal (batin diri sendiri).'],
    materialTitle: 'Konflik Internal dan Konflik Eksternal',
    blocks: [
      { type: 'table', title: '2 Jenis Konflik dalam Cerpen', headers: ['Jenis Konflik', 'Penjelasan', 'Contoh'], rows: [
        ['Konflik Internal (Batin)', 'Pertentangan di dalam HATI/PIKIRAN tokoh sendiri', 'Alya bimbang memilih ikut lomba atau menemani adiknya yang sakit'],
        ['Konflik Eksternal', 'Pertentangan tokoh dengan tokoh lain, masyarakat, atau alam', 'Perselisihan pendapat 2 ketua regu; nelayan menghadapi badai laut'],
      ]},
    ],
    activityTitle: 'Latihan: Konflik Cerpen',
    questions: [
      { text: 'Dito gelisah semalaman menimbang antara mengakui dirinya yang memecahkan vas kelas atau tetap diam karena takut dimarahi. Ini adalah contoh konflik...', opts: ['Internal (konflik batin)', 'Eksternal dengan alam', 'Eksternal antarnegara', 'Tanpa konflik'], ans: 0, exp: 'Pergulatan moral terjadi di dalam pikiran/hati Dito sendiri.' },
      { text: 'Dua tokoh beradu argumen keras mengenai pembagian tugas pentas seni merupakan contoh konflik...', opts: ['Eksternal (antartokoh)', 'Internal', 'Fisis alam', 'Statis'], ans: 0, exp: 'Pertentangan terjadi antara dua pihak berbeda.' },
      { text: 'Mengapa konflik dianggap sebagai "motor penggerak" sebuah cerita narasi?', opts: ['Karena konflik mendorong tokoh bertindak, berubah, dan membuat pembaca penasaran hingga penyelesaian', 'Karena cerita harus penuh perkelahian fisik', 'Agar tidak ada amanat', 'Supaya cepat selesai'], ans: 0, exp: 'Tanpa konflik/masalah, cerita menjadi datar tanpa ketegangan.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-03', subSeq: 6,
    objectives: ['Siswa mampu membedakan 4 variasi sudut pandang (orang pertama pelaku utama/sampingan; orang ketiga serbatahu/pengamat).'],
    materialTitle: 'Sudut Pandang Pencerita (Point of View)',
    blocks: [
      { type: 'table', title: 'Sudut Pandang dalam Cerpen', headers: ['Sudut Pandang', 'Kata Ganti', 'Ciri Khusus'], rows: [
        ['Orang Pertama Pelaku Utama', '"Aku / Saya"', 'Tokoh "Aku" menjadi pusat seluruh cerita'],
        ['Orang Pertama Pelaku Sampingan', '"Aku"', 'Tokoh "Aku" hanya menceritakan kisah hebat temannya'],
        ['Orang Ketiga Serbatahu', '"Ia / Dia / Nama"', 'Pengarang tahu sampai isi hati & pikiran SEMUA tokoh'],
        ['Orang Ketiga Pengamat', '"Ia / Dia / Nama"', 'Pengarang hanya menceritakan yang tampak dari luar saja'],
      ]},
    ],
    activityTitle: 'Latihan: Sudut Pandang',
    questions: [
      { text: '"Raka menatap jendela kelas. Di dalam hatinya berkecamuk rasa cemas, sementara di bangku seberang Salsa diam-diam merasa bersalah." Sudut pandang kutipan ini adalah...', opts: ['Orang ketiga serbatahu', 'Orang pertama pelaku utama', 'Orang kedua', 'Orang pertama sampingan'], ans: 0, exp: 'Memakai nama tokoh (Raka, Salsa) dan mengetahui isi hati keduanya sekaligus.' },
      { text: '"Pagi itu aku melangkah gugup memasuki gerbang SMP baruku." Kutipan ini memakai sudut pandang...', opts: ['Orang pertama', 'Orang ketiga serbatahu', 'Orang ketiga pengamat', 'Campuran'], ans: 0, exp: 'Kata ganti "aku" menunjukkan sudut pandang orang pertama.' },
      { text: 'Ciri pembeda utama sudut pandang orang ketiga SERBATAHU dibanding orang ketiga PENGAMAT adalah...', opts: ['Serbatahu mampu masuk mengetahui pikiran dan perasaan batin semua tokoh', 'Pengamat memakai kata "aku"', 'Serbatahu tidak boleh menyebut nama', 'Keduanya sama persis'], ans: 0, exp: 'Narator serbatahu (omniscient) mengetahui batin setiap karakter.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-03', subSeq: 7,
    objectives: ['Siswa mampu menyimpulkan pesan moral (amanat) cerpen secara mendalam dan relevan dengan kehidupan remaja SMP.'],
    materialTitle: 'Menyimpulkan Pesan Cerita (Amanat)',
    blocks: [
      { type: 'tip', text: 'Dalam cerpen SMP, amanat jarang ditulis blak-blakan di kalimat terakhir — sering kali TERSIRAT lewat pilihan keputusan tokoh saat mengatasi klimaks dan akibat dari pilihan tersebut!' },
    ],
    activityTitle: 'Latihan: Pesan Cerita',
    questions: [
      { text: 'Dalam sebuah cerpen, tokoh yang awalnya malu mengakui kesalahan akhirnya merasa sangat lega dan justru dihargai teman-temannya setelah berkata jujur. Amanat tersiratnya adalah...', opts: ['Kejujuran dan keberanian mengakui kesalahan membawa ketenangan serta kepercayaan orang lain', 'Lebih baik menyembunyikan kesalahan', 'Kesalahan tidak boleh dimaafkan', 'Teman tidak peduli'], ans: 0, exp: 'Akibat positif tindakan jujur tokoh menyiratkan pesan moral cerita.' },
      { text: 'Cara menyampaikan amanat cerpen secara TERSIRAT berarti...', opts: ['Pembaca menyimpulkan sendiri pesan moral dari alur, konflik, dan sikap tokoh', 'Pengarang menulis "Amanat cerita ini adalah..." di baris terakhir', 'Tidak ada pesan apa pun', 'Ditulis di sampul belakang'], ans: 0, exp: 'Amanat tersirat (implisit) terjalin halus dalam cerita.' },
      { text: 'Relevansi amanat sebuah cerpen dikatakan tinggi apabila pesan tersebut...', opts: ['Bermanfaat dan dapat diterapkan dalam persoalan nyata kehidupan pembaca', 'Hanya berlaku di planet lain', 'Bertentangan dengan norma', 'Mustahil dipahami'], ans: 0, exp: 'Karya sastra bermutu selalu menyentuh nilai kemanusiaan universal.' },
    ],
  },

  // BAB 4: TEKS BERITA
  {
    topicCode: 'BIND-SMP7-04', subSeq: 1,
    objectives: ['Siswa mampu menganalisis unsur 5W+1H (ADIKSIMBA) dalam teks berita cetak dan digital.'],
    materialTitle: 'Unsur 5W + 1H (ADIKSIMBA) Teks Berita',
    blocks: [
      { type: 'table', title: '6 Unsur Wajib Berita (5W + 1H)', headers: ['Unsur', 'Padanan ADIKSIMBA', 'Fokus Informasi'], rows: [
        ['What', 'Apa', 'Peristiwa penting yang terjadi'],
        ['Who', 'Siapa', 'Pihak/tokoh yang terlibat atau terdampak'],
        ['Where', 'Di mana', 'Lokasi kejadian'],
        ['When', 'Kapan', 'Hari, tanggal, dan jam peristiwa'],
        ['Why', 'Mengapa', 'Latar belakang atau penyebab terjadinya peristiwa'],
        ['How', 'Bagaimana', 'Proses kejadian dan penanganan/dampaknya'],
      ]},
    ],
    activityTitle: 'Latihan: Unsur 5W+1H Berita',
    questions: [
      { text: '"Pemerintah Kabupaten Gresik menggelar Festival Literasi Pelajar di halaman kantor pemda pada Sabtu pagi untuk menumbuhkan minat baca generasi muda." Unsur WHY (Mengapa) pada kutipan tersebut adalah...', opts: ['Untuk menumbuhkan minat baca generasi muda', 'Di halaman kantor pemda', 'Pada Sabtu pagi', 'Festival Literasi Pelajar'], ans: 0, exp: '"Untuk menumbuhkan minat baca..." menjawab tujuan/alasan (Why).' },
      { text: 'Syarat utama suatu peristiwa layak diangkat menjadi berita (nilai berita) antara lain...', opts: ['Faktual (nyata), aktual (terbaru), penting/bermanfaat, dan menarik perhatian publik', 'Karangan fiksi lucu saja', 'Kejadian 50 tahun lalu tanpa kaitan', 'Gosip tak jelas sumbernya'], ans: 0, exp: 'Faktual, aktual, penting, dan berdampak bagi publik.' },
      { text: 'Unsur HOW (Bagaimana) dalam berita banjir biasanya menjelaskan...', opts: ['Kronologi meluapnya air serta upaya evakuasi/penanganan oleh petugas', 'Nama kota saja', 'Tanggal saja', 'Judul koran'], ans: 0, exp: 'How menjelaskan proses berlangsungnya peristiwa dan penanganannya.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-04', subSeq: 2,
    objectives: ['Siswa mampu menganalisis struktur Piramida Terbalik teks berita (Judul, Teras/Lead, Tubuh Berita, Ekor Berita).'],
    materialTitle: 'Struktur Piramida Terbalik Teks Berita',
    blocks: [
      { type: 'table', title: '4 Bagian Struktur Piramida Terbalik Berita', headers: ['Bagian', 'Tingkat Kepentingan', 'Isinya'], rows: [
        ['1. Judul (Headline)', 'Paling menonjol', 'Ringkasan super padat pemikat pembaca'],
        ['2. Teras Berita (Lead)', 'PALING PENTING (paragraf 1!)', 'Memuat sari pati 4–5 unsur utama (What, Who, Where, When)'],
        ['3. Tubuh Berita (Body)', 'Penting (rincian)', 'Menjelaskan Why, How, kronologi, dan kutipan narasumber'],
        ['4. Ekor Berita (Tail)', 'Tambahan / latar', 'Info pelengkap kurang krusial (boleh dipotong jika ruang cetak sempit!)'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur Berita',
    questions: [
      { text: 'Mengapa teks berita ditulis dengan pola PIRAMIDA TERBALIK (bagian terpenting di paling atas)?', opts: ['Agar pembaca sibuk langsung menangkap inti berita di paragraf pertama dan editor mudah memotong bagian bawah bila ruang terbatas', 'Agar pembaca harus membaca sampai kalimat terakhir baru tahu peristiwanya', 'Hanya gaya lama tanpa alasan', 'Supaya mirip cerpen'], ans: 0, exp: 'Piramida terbalik memprioritaskan informasi paling penting di teras berita.' },
      { text: 'Paragraf pertama teks berita yang memuat rangkuman informasi pokok (apa, siapa, di mana, kapan) disebut...', opts: ['Teras berita (lead)', 'Ekor berita', 'Koda', 'Prolog'], ans: 0, exp: 'Lead/teras berita adalah jantung paragraf pembuka berita.' },
      { text: 'Kutipan wawancara langsung saksi atau pejabat biasanya diletakkan di bagian...', opts: ['Tubuh berita (body)', 'Judul berita', 'Nama koran', 'Ekor paling akhir saja'], ans: 0, exp: 'Tubuh berita merinci kronologi, data, dan kutipan narasumber.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-04', subSeq: 3,
    objectives: ['Siswa mampu membedakan fakta jurnalistik, opini narasumber, dan berita bohong (hoaks/disinformasi).'],
    materialTitle: 'Fakta, Opini, dan Cek Fakta Anti-Hoaks',
    blocks: [
      { type: 'visual_cards', title: '4 Langkah Cek Fakta Anti-Hoaks Sebelum Share!', cards: [
        { emoji: '🔍', label: '1. Waspadai Judul Provokatif', sub: 'Judul heboh penuh huruf kapital sering memancing emosi tanpa bukti' },
        { emoji: '🌐', label: '2. Cek Media & Alamat Situs', sub: 'Pastikan berasal dari media pers terverifikasi Dewan Pers atau situs resmi (.go.id / .ac.id)' },
        { emoji: '📅', label: '3. Cek Tanggal & Foto', sub: 'Sering kali berita/foto lama didaur ulang seolah baru terjadi hari ini!' },
        { emoji: '⚖️', label: '4. Bandingkan 2–3 Sumber', sub: 'Jika fakta benar, media tepercaya lain pasti turut memberitakannya!' },
      ]},
    ],
    activityTitle: 'Latihan: Fakta, Opini, & Anti-Hoaks',
    questions: [
      { text: 'Prinsip utama jurnalistik berita adalah "cover both sides" (berimbang) dan objektif, artinya wartawan...', opts: ['Menyajikan fakta apa adanya dari berbagai sudut narasumber tanpa memihak atau merekayasa', 'Menulis pendapat pribadinya sebagai fakta', 'Menyalin pesan berantai grup tanpa cek', 'Melebih-lebihkan judul'], ans: 0, exp: 'Keberimbangan dan akurasi fakta adalah kode etik pers.' },
      { text: 'Jika kamu menerima pesan berantai di grup WhatsApp bertuliskan "VIRAL!! SEBARKAN KE 10 GRUP SEKARANG!" tanpa sumber media resmi, tindakan paling cerdas adalah...', opts: ['Menahan diri tidak menyebarkan lalu memverifikasi kebenarannya ke situs resmi/cek fakta', 'Langsung meneruskan ke semua kontak', 'Langsung percaya 100%', 'Menambah bumbu cerita'], ans: 0, exp: 'Saring sebelum sharing memutus rantai hoaks.' },
      { text: 'Di dalam teks berita, opini hanya boleh muncul apabila...', opts: ['Berupa kutipan resmi pendapat narasumber kompeten yang dicantumkan jelas namanya', 'Berupa tebakan pribadi wartawan tanpa data', 'Ditulis tanpa nama narasumber', 'Menggantikan seluruh fakta'], ans: 0, exp: 'Wartawan mengutip pendapat ahli/narasumber sebagai fakta kutipan, bukan opini pribadi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-04', subSeq: 4,
    objectives: ['Siswa mampu merumuskan judul berita yang akurat (anti-clickbait) dan menyusun teras berita padat 5W+1H.'],
    materialTitle: 'Menulis Judul dan Teras Berita',
    blocks: [
      { type: 'table', title: 'Judul Clickbait (Hindari!) vs Judul Berita Baik', headers: ['Clickbait / Menyesatkan', 'Judul Jurnalistik Baik (Padat & Akurat)'], rows: [
        ['"Geger! Hal Tak Terduga Terjadi di Sekolah Ini, Nomor 3 Bikin Kaget!"', '"Siswa SMP Gresik Raih Medali Emas Olimpiade Sains Nasional 2026"'],
      ]},
    ],
    activityTitle: 'Latihan: Judul & Teras Berita',
    questions: [
      { text: 'Ciri judul berita yang baik dan bertanggung jawab adalah...', opts: ['Singkat, padat, menarik, dan jujur mencerminkan isi berita (bukan clickbait menipu)', 'Panjang sampai 30 kata', 'Sengaja menyembunyikan isi agar orang penasaran lalu kecewa', 'Memakai bahasa tidak baku'], ans: 0, exp: 'Judul jurnalistik harus akurat dan langsung merangkum pokok peristiwa.' },
      { text: 'Teras berita yang ideal umumnya terdiri dari 1–2 kalimat padat (sekitar 25–40 kata) yang menjawab minimal unsur...', opts: ['What, Who, Where, dan When', 'Hanya nama wartawan', 'Hanya opini', 'Hanya daftar angka'], ans: 0, exp: 'Lead padat langsung menjawab inti kejadian.' },
      { text: 'Kata kerja PEWARTA yang lazim dipakai untuk mengutip keterangan narasumber dalam berita adalah...', opts: ['mengatakan, menjelaskan, mengungkapkan, menegaskan', 'melamun, bermimpi', 'memasak, menyapu', 'melompat'], ans: 0, exp: 'Verba pewarta mengantar kutipan pernyataan narasumber.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-04', subSeq: 5,
    objectives: ['Siswa mampu meringkas dan menyimpulkan pokok isi teks berita secara objektif dan akurat.'],
    materialTitle: 'Menyimpulkan Isi Teks Berita',
    blocks: [
      { type: 'tip', text: 'Cara paling cepat menyimpulkan berita: gabungkan jawaban 5W+1H (terutama What–Who–Where–When–Why) menjadi 1–2 kalimat efektif!' },
    ],
    activityTitle: 'Latihan: Menyimpulkan Berita',
    questions: [
      { text: 'Tanggapan yang tepat terhadap isi sebuah berita tentang program penanaman 1.000 bibit mangrove oleh pelajar SMP adalah...', opts: ['"Kegiatan ini sangat positif karena melatih kepedulian pelajar sekaligus melindungi pesisir dari abrasi."', '"Mangrove itu berwarna hijau."', '"Kapan liburan sekolah?"', '"Berita ini terlalu pendek."'], ans: 0, exp: 'Tanggapan kritis memberi penilaian logis disertai alasan terhadap isi berita.' },
      { text: 'Simpulan berita yang tepat harus memuat...', opts: ['Inti seluruh unsur pokok berita (ADIKSIMBA) secara ringkas dan objektif', 'Hanya satu kutipan kecil yang tidak penting', 'Komentar pribadi yang mengubah fakta berita', 'Judul saja'], ans: 0, exp: 'Simpulan merangkum pokok 5W+1H secara akurat.' },
      { text: 'Jika berita memiliki 5 paragraf berpola piramida terbalik, inti berita untuk membuat simpulan paling banyak berada di...', opts: ['Paragraf 1 (teras) dan paragraf 2–3 (tubuh utama)', 'Hanya kalimat paling terakhir', 'Keterangan foto saja', 'Nama kota penerbit'], ans: 0, exp: 'Informasi paling esensial terkonsentrasi di bagian atas piramida terbalik.' },
    ],
  },

  // BAB 5: TEKS LAPORAN HASIL OBSERVASI
  {
    topicCode: 'BIND-SMP7-05', subSeq: 1,
    objectives: ['Siswa mampu memahami hakikat teks LHO tingkat SMP sebagai teks ilmiah objektif dan universal.'],
    materialTitle: 'Pengertian & Karakteristik Teks LHO SMP',
    blocks: [
      { type: 'text', text: 'Teks Laporan Hasil Observasi (LHO) menyajikan informasi faktual hasil pengamatan sistematis tentang suatu kelas objek (tumbuhan, hewan, ekosistem, fenomena sosial) secara OBJEKTIF, LENGKAP, dan UNIVERSAL (berlaku umum sebagai pengetahuan ilmiah).' },
    ],
    activityTitle: 'Latihan: Pengertian LHO SMP',
    questions: [
      { text: 'Manakah karakteristik yang MEMBEDAKAN teks LHO dengan teks deskripsi pribadi?', opts: ['LHO bersifat ilmiah, objektif, dan membahas objek secara umum/klasifikasi; deskripsi lebih personal/khusus', 'LHO memakai bahasa gaul', 'LHO tidak berdasarkan pengamatan', 'LHO selalu berupa puisi'], ans: 0, exp: 'LHO menjelaskan kategori umum secara objektif ilmiah.' },
      { text: 'Penulisan teks LHO tidak boleh memasukkan prasangka atau perasaan pribadi penulis karena harus bersifat...', opts: ['Objektif', 'Subjektif', 'Imajinatif', 'Fiktif'], ans: 0, exp: 'Objektif = sesuai kenyataan yang diamati, bebas bias pribadi.' },
      { text: 'Contoh objek yang tepat untuk teks LHO SMP adalah...', opts: ['Ekosistem Hutan Mangrove, Kupu-Kupu, atau Pasar Tradisional', 'Kisah Cinderella', 'Pengalaman Liburanku ke Rumah Paman', 'Cara Membuat Mi Goreng'], ans: 0, exp: 'LHO mengkaji objek alam, sosial, atau budaya secara umum-ilmiah.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-05', subSeq: 2,
    objectives: ['Siswa mampu menelaah 3 struktur baku teks LHO (Definisi Umum, Deskripsi Bagian, Simpulan/Manfaat).'],
    materialTitle: 'Struktur Teks LHO',
    blocks: [
      { type: 'table', title: 'Struktur Teks LHO SMP', headers: ['Bagian', 'Ciri Kalimat Khas'], rows: [
        ['1. Definisi Umum / Pembuka', 'Memakai verba definisi ("adalah", "merupakan", "ialah") + klasifikasi jenis'],
        ['2. Deskripsi Bagian / Isi', 'Merinci bagian fisik, ciri biologis, habitat, perilaku, atau komponen objek'],
        ['3. Simpulan / Deskripsi Manfaat', 'Merangkum manfaat/fungsi ekologis, ekonomis, atau sosial objek'],
      ]},
    ],
    activityTitle: 'Latihan: Struktur LHO SMP',
    questions: [
      { text: '"Ikan bandeng (Chanos chanos) adalah ikan pangan populer yang hidup di perairan laut dan air payau." Kalimat ini merupakan bagian...', opts: ['Definisi umum (pernyataan umum)', 'Deskripsi manfaat', 'Penutup', 'Argumen'], ans: 0, exp: 'Menggunakan kopula definisi "adalah" beserta nama ilmiah.' },
      { text: 'Bagian LHO yang menguraikan anatomi akar, batang, daun, dan buah tumbuhan bakau adalah...', opts: ['Deskripsi bagian', 'Definisi umum', 'Judul', 'Daftar isi'], ans: 0, exp: 'Deskripsi bagian menjabarkan detail komponen objek.' },
      { text: 'Dalam teks LHO, bagian Simpulan/Penutup bersifat...', opts: ['Merangkum gambaran umum dan manfaat objek tanpa mengubah fakta', 'Memasukkan cerita lucu baru', 'Membantah paragraf pertama', 'Mengajukan teka-teki'], ans: 0, exp: 'Simpulan menutup laporan secara utuh dan ringkas.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-05', subSeq: 3,
    objectives: ['Siswa mampu menyusun kalimat klasifikasi (pengelompokan jenis/kelas) dalam teks LHO.'],
    materialTitle: 'Klasifikasi Objek dalam LHO',
    blocks: [
      { type: 'formula', name: 'Pola Kalimat Klasifikasi LHO', expression: '[Objek] dibagi / dikelompokkan / terdiri atas [jumlah] jenis berdasarkan [dasar klasifikasi], yaitu ...', note: 'Contoh: "Berdasarkan sumbernya, sampah dikelompokkan menjadi tiga jenis, yaitu sampah organik, anorganik, dan B3."' },
    ],
    activityTitle: 'Latihan: Klasifikasi Objek',
    questions: [
      { text: 'Manakah kalimat KLASIFIKASI yang tepat dan baku?', opts: ['Berdasarkan jenis makanannya, hewan dikelompokkan menjadi herbivora, karnivora, dan omnivora.', 'Hewan itu sangat lucu dan banyak sekali.', 'Ayo kita pelihara hewan di rumah!', 'Hewan apa yang kamu sukai?'], ans: 0, exp: 'Mengelompokkan objek memakai dasar klasifikasi yang jelas.' },
      { text: 'Kata kerja yang lazim digunakan pada kalimat klasifikasi teks LHO adalah...', opts: ['dikelompokkan, terbagi atas, digolongkan, terdiri atas', 'aduklah, potonglah', 'menangis, tertawa', 'sebaiknya, marilah'], ans: 0, exp: 'Verba klasifikasi menandai pembagian kategori.' },
      { text: 'Manfaat membuat klasifikasi objek dalam teks LHO adalah...', opts: ['Membantu pembaca memahami pembagian jenis objek secara terstruktur dan ilmiah', 'Membuat teks jadi rumit', 'Menghilangkan fakta', 'Mengganti judul'], ans: 0, exp: 'Klasifikasi menata informasi secara sistematis.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-05', subSeq: 4,
    objectives: ['Siswa mampu memverifikasi kalimat fakta dan data kuantitatif dalam laporan observasi.'],
    materialTitle: 'Fakta dan Data Hasil Pengamatan',
    blocks: [
      { type: 'tip', text: 'Dalam teks LHO SMP, padukan data KUALITATIF (warna, bentuk, perilaku) dan data KUANTITATIF (angka ukuran, jumlah, persentase) hasil pengamatan atau rujukan buku sains terpercaya!' },
    ],
    activityTitle: 'Latihan: Fakta Pengamatan LHO',
    questions: [
      { text: 'Kalimat LHO yang menyajikan DATA KUANTITATIF (terukur) adalah...', opts: ['Sepeda ontel memiliki dua roda berdiameter sekitar 70 cm dan digerakkan dengan kayuhan pedal.', 'Sepeda ontel tampak sangat klasik dan keren.', 'Menurut saya sepeda ini paling nyaman.', 'Semua orang pasti suka bersepeda.'], ans: 0, exp: 'Memuat angka terukur (2 roda, diameter 70 cm).' },
      { text: 'Jika saat observasi ada fakta yang belum kita lihat langsung (misalnya nama ilmiah Latin spesies), cara paling tepat melengkapinya adalah...', opts: ['Merujuk buku pelajaran IPA, ensiklopedia, atau sumber ilmiah tepercaya', 'Mengarang nama Latin sendiri', 'Mengosongkan seluruh laporan', 'Menyalin komentar media sosial'], ans: 0, exp: 'Rujukan ilmiah melengkapi hasil pengamatan lapangan.' },
      { text: 'Kalimat "Bunga melati mengeluarkan aroma paling harum dibanding semua bunga di dunia" TIDAK layak dimasukkan ke LHO karena...', opts: ['Mengandung penilaian subjektif ("paling harum sedunia") yang bukan fakta universal', 'Membahas bunga', 'Terlalu pendek', 'Menggunakan huruf kapital'], ans: 0, exp: 'Kata superlatif subjektif melanggar objektivitas LHO.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-05', subSeq: 5,
    objectives: ['Siswa mampu menggunakan istilah teknis (ilmiah) dan membedakannya dengan kata populer serta menuliskannya sesuai EYD V.'],
    materialTitle: 'Penggunaan Istilah Teknis / Ilmiah',
    blocks: [
      { type: 'table', title: 'Contoh Istilah Ilmiah dalam Teks LHO', headers: ['Bidang', 'Istilah Teknis', 'Penjelasannya'], rows: [
        ['Biologi', 'Fotosintesis, habitat, endemik, nokturnal', 'Nokturnal = aktif di malam hari; Endemik = hanya hidup alami di daerah tertentu'],
        ['Lingkungan', 'Ekosistem, abrasi, biodegradabel', 'Biodegradabel = dapat terurai alami oleh mikroorganisme'],
        ['Penulisan Nama Latin', 'Oryza sativa, Chanos chanos', 'Kata asing/Latin ditulis MIRING (italic) sesuai EYD V!'],
      ]},
    ],
    activityTitle: 'Latihan: Penggunaan Istilah',
    questions: [
      { text: 'Dalam teks LHO tentang kelelawar tertulis "Kelelawar merupakan hewan nokturnal." Arti istilah teknis "nokturnal" adalah...', opts: ['Aktif mencari makan pada malam hari', 'Hidup di dalam air', 'Pemakan tumbuhan saja', 'Tidak bisa terbang'], ans: 0, exp: 'Nokturnal = aktif malam; Diurnal = aktif siang.' },
      { text: 'Sesuai kaidah EYD V, penulisan nama ilmiah Latin spesies (misalnya Chanos chanos) atau istilah asing yang belum diserap ke bahasa Indonesia harus dicetak...', opts: ['Miring (italic)', 'Tebal semua', 'Kapital semua', 'Di dalam tanda seru'], ans: 0, exp: 'Huruf miring digunakan untuk kata asing dan nama ilmiah.' },
      { text: 'Arti istilah "endemik" pada kalimat "Komodo adalah satwa endemik Nusa Tenggara Timur" adalah...', opts: ['Satwa yang secara alami hanya ditemukan di wilayah geografis tertentu tersebut', 'Satwa yang hidup di semua benua', 'Satwa peliharaan rumah', 'Satwa air tawar'], ans: 0, exp: 'Endemik = asli dan terbatas pada satu kawasan tertentu.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-05', subSeq: 6,
    objectives: ['Siswa mampu menyusun teks LHO lengkap 3–4 paragraf berdasarkan pengamatan lapangan dengan ejaan dan struktur baku.'],
    materialTitle: 'Menyusun Laporan Hasil Observasi SMP',
    blocks: [
      { type: 'list', title: '5 Langkah Menyusun LHO Lengkap', items: ['1. Tentukan objek pengamatan nyata di sekolah/lingkungan.', '2. Susun instrumen pengamatan & catat data kualitatif + kuantitatif.', '3. Buat kerangka: Definisi Umum/Klasifikasi → Deskripsi Bagian → Deskripsi Manfaat.', '4. Kembangkan memakai kalimat definisi, kalimat efektif, dan istilah ilmiah tepat.', '5. Sunting ejaan (huruf miring istilah asing, tanda baca, kata baku)!'] },
    ],
    activityTitle: 'Latihan: Menyusun LHO SMP',
    questions: [
      { text: 'Sebelum menulis paragraf LHO, langkah paling awal yang dilakukan setelah menentukan topik adalah...', opts: ['Melakukan observasi langsung dan mencatat fakta secara objektif', 'Langsung menulis kesimpulan', 'Membuat puisi', 'Menghias kertas'], ans: 0, exp: 'Data hasil observasi adalah bahan utama teks LHO.' },
      { text: 'Paragraf penutup LHO tentang "Tanaman Lidah Buaya" sebaiknya berisi...', opts: ['Manfaat lidah buaya bagi kesehatan kulit, rambut, dan minuman segar serta simpulan', 'Cerita dongeng lidah buaya', 'Alamat rumah penulis', 'Daftar nilai kelas'], ans: 0, exp: 'Deskripsi manfaat/simpulan menutup LHO dengan utuh.' },
      { text: 'Penggunaan tanda koma (,) sebelum kata "sedangkan" dan "melainkan" dalam kalimat LHO hukumnya...', opts: ['Wajib sesuai EYD V', 'Dilarang', 'Bebas saja', 'Diganti tanda tanya'], ans: 0, exp: 'EYD V mewajibkan koma sebelum konjungsi pertentangan intrakalimat (tetapi, sedangkan, melainkan).' },
    ],
  },

  // BAB 6: TEKS IKLAN, SLOGAN, DAN POSTER
  {
    topicCode: 'BIND-SMP7-06', subSeq: 1,
    objectives: ['Siswa mampu membedakan iklan komersial (produk/jasa) dan iklan nonkomersial (layanan masyarakat) beserta tujuannya.'],
    materialTitle: 'Tujuan dan Jenis Teks Iklan',
    blocks: [
      { type: 'table', title: 'Iklan Komersial vs Nonkomersial', headers: ['Jenis Iklan', 'Tujuan Utama', 'Contoh'], rows: [
        ['Iklan Komersial', 'Menawarkan/mempromosikan produk barang atau jasa untuk transaksi', 'Iklan pudak kemasan modern, iklan bimbingan belajar, iklan sepatu'],
        ['Iklan Nonkomersial (Layanan Masyarakat)', 'Mengajak perubahan perilaku sosial positif tanpa mencari laba', 'Iklan hemat listrik, anti-perundungan, imunisasi, tertib berlalu lintas'],
      ]},
    ],
    activityTitle: 'Latihan: Tujuan Iklan',
    questions: [
      { text: 'Iklan televisi atau media sosial yang mengajak masyarakat memilah sampah dan hemat air bersih termasuk jenis iklan...', opts: ['Nonkomersial (iklan layanan masyarakat)', 'Iklan komersial produk', 'Iklan lowongan kerja', 'Iklan baris'], ans: 0, exp: 'Iklan layanan masyarakat mengedukasi publik tanpa tujuan profit.' },
      { text: 'Perbedaan utama IKLAN dengan SLOGAN dan POSTER adalah iklan modern sering menggabungkan unsur...', opts: ['Gambar, kata-kata, gerak (video), dan suara (audio)', 'Hanya kata-kata saja', 'Hanya gambar tanpa teks', 'Hanya tabel angka'], ans: 0, exp: 'Iklan audiovisual (TV/digital) memadukan gambar, kata, gerak, dan suara.' },
      { text: 'Etika penting dalam membuat iklan komersial produk adalah...', opts: ['Jujur atas keunggulan produk dan tidak menipu konsumen atau menjelekkan pesaing', 'Melebih-lebihkan manfaat palsu', 'Menyembunyikan harga sebenarnya', 'Memaksa orang membeli'], ans: 0, exp: 'Iklan yang etis membangun kepercayaan jangka panjang.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-06', subSeq: 2,
    objectives: ['Siswa mampu menyusun slogan yang singkat, padat, bermakna kuat, dan mudah diingat sesuai temanya.'],
    materialTitle: 'Slogan (Motto Ringkas Pemantik Semangat)',
    blocks: [
      { type: 'visual_cards', title: 'Ciri & Contoh Slogan Berdaya Kuat', cards: [
        { emoji: '📚', label: 'Slogan Pendidikan', sub: '"Tiada Hari Tanpa Prestasi!" / "Membaca Membuka Jendela Dunia!"' },
        { emoji: '🌿', label: 'Slogan Lingkungan', sub: '"Satu Pohon Sejuta Kehidupan!" / "Bumi Bersih, Masa Depan Cerah!"' },
        { emoji: '❤️', label: 'Slogan Kesehatan', sub: '"Mencegah Lebih Baik daripada Mengobati!"' },
      ]},
    ],
    activityTitle: 'Latihan: Slogan',
    questions: [
      { text: 'Unsur utama yang paling ditonjolkan pada sebuah SLOGAN adalah...', opts: ['Kata-kata/kalimat pendek yang padat, ritmis, dan mudah diingat', 'Video berdurasi 5 menit', 'Paragraf sepanjang 1 halaman', 'Daftar harga rinci'], ans: 0, exp: 'Slogan mengutamakan kekuatan kata singkat.' },
      { text: 'Slogan yang paling tepat untuk kampanye ANTI-PERUNDUNGAN (anti-bullying) di sekolah SMP adalah...', opts: ['"Berhenti Mengejek, Mulai Merangkul: Sahabat Tanpa Perundungan!"', '"Belilah buku tulis murah di koperasi!"', '"Hemat air setiap hari!"', '"Jangan lupa membawa payung!"'], ans: 0, exp: 'Singkat, tegas, dan tepat menyasar tema anti-perundungan.' },
      { text: 'Persamaan antara iklan, slogan, dan poster adalah ketiganya sama-sama bersifat...', opts: ['Persuasif (memengaruhi/mengajak khalayak)', 'Naratif dongeng', 'Rahasia', 'Tidak baku'], ans: 0, exp: 'Ketiganya bertujuan membujuk/menggerakkan pembaca.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-06', subSeq: 3,
    objectives: ['Siswa mampu merancang poster (niaga, layanan masyarakat, kegiatan) dengan keseimbangan teks dan visual.'],
    materialTitle: 'Poster: Perpaduan Kata & Visual',
    blocks: [
      { type: 'list', title: '4 Prinsip Desain Poster yang Efektif', items: ['1. Fokus satu pesan utama — jangan terlalu penuh teks!', '2. Hierarki huruf: Judul paling besar, pesan ajakan sedang, info waktu/kontak rapi di bawah.', '3. Gambar/ilustrasi langsung relevan dengan pesan dan berwarna kontras.', '4. Dipasang di tempat strategis yang ramai dilalui target pembaca (mading, koridor, medsos).'] },
    ],
    activityTitle: 'Latihan: Poster',
    questions: [
      { text: 'Unsur yang menjadi daya tarik utama pada sebuah POSTER adalah perpaduan antara...', opts: ['Gambar/ilustrasi mencolok dan kata-kata singkat persuasif', 'Suara dan gerak video', 'Teks panjang 10 paragraf tanpa gambar', 'Angka tabel saja'], ans: 0, exp: 'Poster mengandalkan kekuatan visual statis + kalimat singkat.' },
      { text: 'Poster pengumuman "Pentas Seni SMP Nusantara" wajib mencantumkan informasi...', opts: ['Nama acara, hari/tanggal, waktu, tempat, dan kontak panitia', 'Hanya gambar panggung tanpa tanggal', 'Resep makanan', 'Biografi panjang seluruh panitia'], ans: 0, exp: 'Poster kegiatan harus lengkap info 5W agar audiens bisa hadir.' },
      { text: 'Ukuran huruf judul pada poster sebaiknya...', opts: ['Paling besar dan tegas agar terbaca jelas dari jarak beberapa meter', 'Paling kecil di pojok', 'Sama warna dengan latar belakang', 'Ditulis miring tipis'], ans: 0, exp: 'Keterbacaan jarak jauh adalah syarat utama poster.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-06', subSeq: 4,
    objectives: ['Siswa mampu menyusun kalimat persuasif dan kalimat imperatif yang menggugah untuk iklan, slogan, dan poster.'],
    materialTitle: 'Kalimat Persuasif dalam Iklan & Poster',
    blocks: [
      { type: 'table', title: 'Pola Bahasa Iklan yang Efektif', headers: ['Pola Bahasa', 'Contoh'], rows: [
        ['Kalimat Persuasif (Membujuk)', '"Jaga bumi kita mulai dari botol minummu sendiri!"'],
        ['Kalimat Imperatif (Ajakan)', '"Yuk, kunjungi bazar karya siswa SMP hari Sabtu ini!"'],
        ['Berima / Puitis Ringkas', '"Muda Berkarya, Bangsa Berjaya!"'],
      ]},
    ],
    activityTitle: 'Latihan: Kalimat Persuasif',
    questions: [
      { text: 'Manakah kalimat persuasif yang PALING cocok untuk iklan produk UMKM "Otak-Otak Bandeng Tanpa Duri"?', opts: ['"Gurih Alami, Lembut Tanpa Duri — Nikmati Otak-Otak Bandeng Gresik untuk Keluarga Tercinta!"', '"Ikan ini diambil dari tambak kemarin pagi."', '"Apakah kamu tahu ikan bandeng?"', '"Jangan makan terlalu cepat!"'], ans: 0, exp: 'Menonjolkan keunggulan produk (gurih, tanpa duri) + ajakan hangat.' },
      { text: 'Kalimat iklan yang menggunakan rima/irama seperti "Hemat Pangkal Kaya, Rajin Pangkal Pandai" memiliki kelebihan yaitu...', opts: ['Lebih mudah diingat dan melekat di benak audiens', 'Lebih panjang', 'Lebih mahal', 'Lebih sulit dibaca'], ans: 0, exp: 'Musikalitas kata meningkatkan daya ingat.' },
      { text: 'Dalam iklan, kata sapaan "Anda", "Kamu", atau "Sobat" sering dipakai untuk...', opts: ['Menciptakan kesan akrab seolah berbicara langsung kepada calon pembaca', 'Menjauhkan pembaca', 'Membuat teks kaku', 'Mengganti nama produk'], ans: 0, exp: 'Sapaan personal meningkatkan keterlibatan audiens.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-06', subSeq: 5,
    objectives: ['Siswa mampu menafsirkan pesan visual (warna, ikon, ekspresi, tata letak) pada iklan dan poster.'],
    materialTitle: 'Membaca Informasi Visual Iklan & Poster',
    blocks: [
      { type: 'visual_cards', title: 'Makna Psikologis Warna dalam Poster', cards: [
        { emoji: '🟩', label: 'Hijau', sub: 'Alam, kesegaran, ramah lingkungan, kesehatan' },
        { emoji: '🟦', label: 'Biru', sub: 'Kepercayaan, ketenangan, pendidikan, air bersih' },
        { emoji: '🟥', label: 'Merah / Oranye', sub: 'Semangat, perhatian cepat, peringatan bahaya, promo/diskon' },
      ]},
    ],
    activityTitle: 'Latihan: Informasi Visual',
    questions: [
      { text: 'Sebuah poster menampilkan ilustrasi bumi yang tersenyum dikelilingi pohon hijau dan tangan anak-anak saling bergandengan. Pesan visual utamanya adalah...', opts: ['Ajakan bersama menjaga kelestarian bumi lewat penghijauan', 'Iklan jual beli mobil', 'Peringatan gempa', 'Jadwal ujian'], ans: 0, exp: 'Simbol bumi tersenyum + pohon hijau melambangkan kelestarian alam.' },
      { text: 'Warna HIJAU paling banyak dipilih untuk poster bertema lingkungan dan produk organik karena melambangkan...', opts: ['Kesegaran, alam, dan kelestarian', 'Bahaya listrik', 'Kemarahan', 'Kegelapan'], ans: 0, exp: 'Hijau diasosiasikan kuat dengan alam dan kehidupan.' },
      { text: 'Ikon 🚯 (gambar orang membuang sampah dicoret merah) pada poster berfungsi menyampaikan pesan secara...', opts: ['Cepat dan universal bahkan tanpa banyak kata', 'Membingungkan', 'Hanya untuk orang dewasa', 'Rahasia'], ans: 0, exp: 'Simbol visual lintas bahasa langsung dipahami dalam hitungan detik.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-06', subSeq: 6,
    objectives: ['Siswa mampu menganalisis target audiens, keunggulan produk, fakta vs klaim opini, dan efektivitas pesan iklan.'],
    materialTitle: 'Menganalisis Pesan Iklan Secara Kritis',
    blocks: [
      { type: 'worked_example', level: 'Bedah Iklan Kritis', question: 'Iklan susu: "Mengandung Kalsium 250 mg & Vitamin D (FAKTA). Rasanya Paling Lezat Bikin Kamu Jadi Juara! (OPINI/KLAIM)." Bagaimana konsumen SMP menyikapinya?', steps: ['Cek informasi faktualnya (kandungan gizi pada label kemasan & izin BPOM).', 'Pahami bahwa "paling lezat" dan "bikin juara" adalah gaya bahasa promosi (opini) — juara tetap butuh belajar giat!'], answer: 'Konsumen kritis selalu membedakan fakta gizi dan klaim promosi iklan.' },
    ],
    activityTitle: 'Latihan: Menganalisis Pesan Iklan',
    questions: [
      { text: 'Dalam iklan "Sepatu Lari Aero: Sol Karet Anti-Selip, Berat 240 gram — Sepatu Paling Nyaman Sepanjang Masa!", yang merupakan FAKTA adalah...', opts: ['Sol karet anti-selip dan berat 240 gram', 'Sepatu paling nyaman sepanjang masa', 'Semua pelari wajib beli', 'Pasti menang lomba'], ans: 0, exp: 'Bahan sol dan berat 240 g dapat diuji/diukur; "paling nyaman" adalah klaim opini.' },
      { text: 'Menentukan SASARAN (target audiens) iklan — misalnya pelajar SMP vs ibu rumah tangga — penting agar...', opts: ['Pemilihan bahasa, visual, dan media pemasangan tepat sasaran', 'Iklan dilihat siapa saja tidak peduli cocok/tidak', 'Biaya makin boros', 'Teksnya makin panjang'], ans: 0, exp: 'Bahasa iklan untuk remaja tentu beda dengan iklan untuk lansia.' },
      { text: 'Sebuah iklan dikatakan EFEKTIF apabila setelah melihatnya, khalayak sasaran...', opts: ['Memahami pesan utamanya dan terdorong melakukan tindakan yang diharapkan', 'Langsung lupa isi iklannya', 'Merasa tersinggung', 'Bingung produk apa yang ditawarkan'], ans: 0, exp: 'Efektivitas diukur dari kejelasan pesan dan respons audiens.' },
    ],
  },

  // BAB 7: PUISI DAN PUISI RAKYAT
  {
    topicCode: 'BIND-SMP7-07', subSeq: 1,
    objectives: ['Siswa mampu membedakan unsur fisik (tipografi, diksi, imaji, rima, majas) dan unsur batin puisi (tema, rasa, nada, amanat).'],
    materialTitle: 'Unsur Fisik dan Unsur Batin Puisi',
    blocks: [
      { type: 'table', title: '2 Kelompok Unsur Pembangun Puisi', headers: ['Unsur Fisik (Tampak di Teks)', 'Unsur Batin (Makna di Dalam)'], rows: [
        ['Tipografi (tata wajah/bait)', 'Tema (gagasan pokok)'],
        ['Diksi (pilihan kata) & Majas', 'Rasa / Feeling (sikap/emosi penyair)'],
        ['Imaji / Citraan (penglihatan, pendengaran, perabaan)', 'Nada (sikap penyair ke pembaca: menasihati, syahdu, menyindir)'],
        ['Rima & Irama (persamaan bunyi)', 'Amanat (pesan moral)'],
      ]},
    ],
    activityTitle: 'Latihan: Unsur Puisi',
    questions: [
      { text: 'Tema, rasa, nada, dan amanat termasuk unsur pembangun puisi bagian...', opts: ['Unsur batin', 'Unsur fisik', 'Tipografi', 'Sampiran'], ans: 0, exp: 'Unsur batin berada di balik kata-kata (makna & emosi).' },
      { text: 'Tata letak bentuk baris, bait, serta penggunaan huruf kapital/tanda baca pada tampilan puisi disebut...', opts: ['Tipografi', 'Amanat', 'Nada', 'Tema'], ans: 0, exp: 'Tipografi adalah wujud visual/tata wajah puisi.' },
      { text: 'Penggunaan kata yang seolah membuat pembaca dapat melihat warna, mendengar suara, atau merasakan dingin dalam puisi disebut...', opts: ['Imaji / Citraan', 'Rima', 'Judul', 'Prolog'], ans: 0, exp: 'Citraan (visual, auditif, taktil) menghidupkan pengalaman indrawi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-07', subSeq: 2,
    objectives: ['Siswa mampu menelaah ketepatan diksi (kata bermakna konotatif & simbolis) untuk membangun efek rasa dalam puisi.'],
    materialTitle: 'Diksi (Pilihan Kata) dalam Puisi',
    blocks: [
      { type: 'tip', text: 'Penyair memilih kata bukan sekadar artinya benar, tetapi juga karena bunyinya merdu (efoni) dan daya sugesti emosinya kuat! Bandingkan: "Aku sangat sedih" vs "Langit hatiku mendung tanpa bintang."' },
    ],
    activityTitle: 'Latihan: Diksi Puisi',
    questions: [
      { text: 'Dalam puisi, kata "senja" dan "kelabu" sering dipilih penyair untuk membangun suasana...', opts: ['Syahdu, haru, atau menjelang perpisahan', 'Pesta meriah', 'Lomba lari', 'Lucu'], ans: 0, exp: 'Konotasi warna kelabu dan waktu senja mendukung nuansa haru/reflektif.' },
      { text: 'Diksi yang tepat dalam puisi mempertimbangkan ketepatan makna, keselarasan bunyi, serta...', opts: ['Keserasian dengan suasana emosi (rasa) yang ingin dibangun', 'Panjang maksimal 1 huruf', 'Harus berupa angka', 'Tidak boleh bermakna kias'], ans: 0, exp: 'Diksi menyatukan bunyi, makna, dan rasa.' },
      { text: 'Larik "Mentari menyapa embun di ujung dedaunan" menggunakan citraan (imaji)...', opts: ['Penglihatan (visual)', 'Pengecapan', 'Pendengaran saja', 'Penciuman'], ans: 0, exp: 'Pembaca membayangkan pemandangan embun terkena cahaya pagi.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-07', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi 4 majas utama di SMP kelas 7: Personifikasi, Metafora, Simile, dan Hiperbola.'],
    materialTitle: 'Majas Sederhana dalam Puisi',
    blocks: [
      { type: 'table', title: '4 Majas Wajib Kuasai di Kelas 7', headers: ['Majas', 'Ciri Utama', 'Contoh'], rows: [
        ['Simile (Perumpamaan)', 'Membandingkan pakai kata: seperti, bagai, laksana, bak', 'Semangatnya berkobar bagai api unggun.'],
        ['Metafora', 'Perbandingan LANGSUNG tanpa kata "seperti/bagai"', 'Buku adalah jendela dunia. / Ia adalah tulang punggung keluarga.'],
        ['Personifikasi', 'Benda mati/alam bertingkah seperti MANUSIA', 'Ombak menari-nari mengejar pasir pantai.'],
        ['Hiperbola', 'Melebih-lebihkan kenyataan secara drastis', 'Suaranya menggelegar membelah angkasa.'],
      ]},
    ],
    activityTitle: 'Latihan: Majas Sederhana',
    questions: [
      { text: '"Pena ini menari lincah di atas lembar putih." Larik tersebut mengandung majas...', opts: ['Personifikasi', 'Simile', 'Hiperbola', 'Litotes'], ans: 0, exp: 'Pena (benda mati) diberi sifat manusia "menari lincah".' },
      { text: '"Kasih ibu seluas samudra tak bertepi, membentang menembus langit." Larik ini menggunakan majas...', opts: ['Hiperbola', 'Simile', 'Ironi', 'Fakta'], ans: 0, exp: 'Melebih-lebihkan luasnya kasih ibu hingga menembus langit.' },
      { text: 'Perbedaan utama majas SIMILE dan METAFORA adalah...', opts: ['Simile memakai kata pembanding (seperti, bagai, laksana), sedangkan metafora membandingkan langsung tanpa kata pembanding', 'Metafora hanya untuk benda mati', 'Simile melebih-lebihkan', 'Keduanya sama persis'], ans: 0, exp: 'Simile eksplisit ("bagai"); metafora implisit langsung.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-07', subSeq: 4,
    objectives: ['Siswa mampu mengidentifikasi jenis rima (rima silang a-b-a-b, rima terus a-a-a-a, rima berpasangan a-a-b-b).'],
    materialTitle: 'Pola Rima dalam Puisi & Puisi Rakyat',
    blocks: [
      { type: 'table', title: '3 Pola Rima Akhir Populer', headers: ['Nama Pola Rima', 'Rumus', 'Sering Ditemukan di...'], rows: [
        ['Rima Silang', 'a – b – a – b', 'Pantun'],
        ['Rima Terus (Sama)', 'a – a – a – a', 'Syair'],
        ['Rima Kembar / Berpasangan', 'a – a (atau a – a – b – b)', 'Gurindam (2 baris a-a) & puisi modern'],
      ]},
    ],
    activityTitle: 'Latihan: Pola Rima',
    questions: [
      { text: 'Pola rima akhir a-a-a-a disebut rima...', opts: ['Rima terus (sama)', 'Rima silang', 'Rima peluk', 'Rima patah'], ans: 0, exp: 'Semua baris berakhiran bunyi sama = rima terus (ciri syair).' },
      { text: 'Pola rima silang a-b-a-b merupakan aturan wajib pada puisi rakyat berjenis...', opts: ['Pantun', 'Gurindam', 'Syair', 'Cerpen'], ans: 0, exp: 'Pantun wajib bersajak a-b-a-b.' },
      { text: 'Gurindam yang terdiri atas 2 baris per bait selalu memiliki pola rima...', opts: ['a – a', 'a – b', 'a – b – a – b', 'a – b – c – d'], ans: 0, exp: 'Kedua baris gurindam berima sama (a-a).' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-07', subSeq: 5,
    objectives: ['Siswa mampu menganalisis struktur, kebahasaan (kalimat saran/ajakan/larangan), dan pesan pantun.'],
    materialTitle: 'Puisi Rakyat: Pantun',
    blocks: [
      { type: 'text', text: 'Pantun adalah puisi rakyat asli Nusantara: 4 baris/bait, 8–12 suku kata, sajak a-b-a-b, baris 1–2 sampiran, baris 3–4 isi. Jenisnya meliputi pantun nasihat, jenaka, teka-teki, dan kiasan.' },
    ],
    activityTitle: 'Latihan: Pantun SMP',
    questions: [
      { text: '"Kalau puan puan cemara / Ambil gelas di dalam peti / Kalau tuan bijak laksana / Binatang apa tanduk di kaki?" Jenis pantun ini adalah...', opts: ['Pantun teka-teki (jawab: ayam jantan/jago!)', 'Pantun jenaka', 'Pantun duka', 'Syair'], ans: 0, exp: 'Baris 3–4 mengajukan pertanyaan tebakan.' },
      { text: 'Hubungan antara baris 1–2 (sampiran) dan baris 3–4 (isi) dalam pantun terutama terletak pada...', opts: ['Persamaan rima/bunyi dan pengantar irama', 'Sebab-akibat logis', 'Daftar alat dan bahan', 'Alur cerita'], ans: 0, exp: 'Sampiran mengantar rima dan suasana menuju isi.' },
      { text: 'Ciri kebahasaan isi pantun nasihat umumnya banyak menggunakan kalimat...', opts: ['Saran, ajakan, atau larangan ("janganlah", "hendaklah", "marilah")', 'Pertanyaan alamat', 'Daftar harga', 'Kalimat pasif ilmiah'], ans: 0, exp: 'Pantun nasihat mengarahkan perilaku pembaca.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-07', subSeq: 6,
    objectives: ['Siswa mampu membedakan ciri-ciri SYAIR dari pantun (4 baris, 8–14 suku kata, rima a-a-a-a, semua baris isi, bahasa kias).'],
    materialTitle: 'Puisi Rakyat: Syair',
    blocks: [
      { type: 'story_panel', title: 'Contoh Syair Pendidikan (Syair Perahu / Nasihat)', lines: [
        { speaker: 'Syair', avatar: '📜', text: 'Wahai ananda dengarlah pesan / Tuntutlah ilmu janganlah bosan / Ilmu itu bekal di masa depan / Penuntun langkah menuju kebaikan.' },
      ]},
      { type: 'tip', text: 'Beda cepat Syair vs Pantun: Syair bersajak a-a-a-a dan TIDAK punya sampiran (keempat barisnya sambung-menyambung sebagai isi!).' },
    ],
    activityTitle: 'Latihan: Syair',
    questions: [
      { text: 'Perbedaan utama SYAIR dibandingkan pantun adalah...', opts: ['Syair bersajak a-a-a-a dan seluruh 4 barisnya merupakan isi (tanpa sampiran)', 'Syair hanya 2 baris', 'Syair bersajak a-b-a-b', 'Syair tidak punya pesan'], ans: 0, exp: 'Ciri khas syair: 4 baris, rima a-a-a-a, semua baris adalah isi.' },
      { text: 'Pada syair, satu bait sering belum selesai ceritanya sehingga bersambung ke bait berikutnya. Hal ini karena syair biasa dipakai untuk...', opts: ['Menyampaikan kisah panjang, nasihat, atau ajaran agama/budi pekerti', 'Teka-teki 1 kalimat', 'Pengumuman singkat', 'Daftar belanja'], ans: 0, exp: 'Syair (seperti Syair Perahu karya Hamzah Fansuri) mengalir lintas bait.' },
      { text: 'Jumlah suku kata rata-rata tiap baris syair adalah...', opts: ['8–14 suku kata', '2–3 suku kata', '25–30 suku kata', '1 suku kata'], ans: 0, exp: 'Syair memiliki 8–14 suku kata per baris.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-07', subSeq: 7,
    objectives: ['Siswa mampu memahami ciri-ciri GURINDAM (2 baris/bait, rima a-a, hubungan syarat/sebab pada baris 1 dan akibat/jawaban pada baris 2).'],
    materialTitle: 'Puisi Rakyat: Gurindam',
    blocks: [
      { type: 'story_panel', title: 'Contoh Terkenal: Gurindam Dua Belas (Raja Ali Haji)', lines: [
        { speaker: 'Gurindam', avatar: '📜', text: 'Jika hendak mengenal orang berbangsa (baris 1: syarat/sebab) / Lihat kepada budi dan bahasa (baris 2: jawaban/akibat)! — Kurang pikir kurang siasat / Tentu dirimu kelak tersesat!' },
      ]},
      { type: 'table', title: 'Ringkasan 3 Puisi Rakyat SMP', headers: ['Jenis', 'Baris/Bait', 'Rima', 'Struktur Isi'], rows: [
        ['Pantun', '4 baris', 'a-b-a-b', 'Baris 1–2 sampiran, 3–4 isi'],
        ['Syair', '4 baris', 'a-a-a-a', 'Semua 4 baris adalah isi'],
        ['Gurindam', '2 baris', 'a-a', 'Baris 1 sebab/syarat, Baris 2 akibat/jawaban'],
      ]},
    ],
    activityTitle: 'Latihan: Gurindam',
    questions: [
      { text: 'Puisi rakyat yang terdiri atas DUA baris per bait, berima a-a, dengan baris pertama berisi sebab/syarat dan baris kedua berisi akibat/jawaban adalah...', opts: ['Pantun', 'Syair', 'Gurindam', 'Geguritan'], ans: 2, exp: 'Gurindam terkenal antara lain Gurindam Dua Belas karya Raja Ali Haji.' },
      { text: '"Barang siapa tiada memegang agama / Sekali-kali tiada boleh dibilangkan nama." Hubungan antara baris 1 dan baris 2 gurindam ini adalah...', opts: ['Sebab/syarat dan akibatnya', 'Sampiran dan isi', 'Pertentangan', 'Daftar barang'], ans: 0, exp: 'Baris 1 syarat ("barang siapa..."), baris 2 konsekuensi/akibatnya.' },
      { text: 'Makna gurindam "Kurang pikir kurang siasat / Tentu dirimu kelak tersesat" adalah...', opts: ['Orang yang bertindak tergesa-gesa tanpa berpikir matang akan mudah celaka/salah jalan', 'Jangan pernah berpikir', 'Siasat itu dilarang', 'Semua orang pasti tersesat'], ans: 0, exp: 'Mengajarkan sikap bijak dan penuh pertimbangan sebelum bertindak.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-07', subSeq: 8,
    objectives: ['Siswa mampu memaknai dan menafsirkan isi puisi rakyat maupun puisi modern secara mendalam.'],
    materialTitle: 'Memahami Makna Puisi Secara Utuh',
    blocks: [
      { type: 'list', title: '4 Langkah Menafsirkan Makna Puisi SMP', items: ['1. Baca puisi berulang dengan suara nyaring untuk merasakan iramanya.', '2. Cari arti kata sulit/arkais dan tafsirkan makna kias (majas) tiap larik.', '3. Hubungkan makna antar-larik menjadi satu kesatuan (parafrase).', '4. Simpulkan tema, perasaan penyair, dan amanat yang bisa diterapkan!'] },
    ],
    activityTitle: 'Latihan: Memahami Makna Puisi',
    questions: [
      { text: 'Pada gurindam "Apabila terpelihara lidah / Niscaya dapat daripadanya faedah", pesan moral yang paling tepat adalah...', opts: ['Menjaga ucapan agar selalu sopan dan benar akan membawa banyak kebaikan bagi diri kita', 'Jangan pernah berbicara seumur hidup', 'Lidah harus dicuci sabun', 'Berbicara keras selalu baik'], ans: 0, exp: '"Memelihara lidah" = menjaga tutur kata dari dusta dan ucapan menyakitkan.' },
      { text: 'Mengapa puisi rakyat (pantun, syair, gurindam) masih sangat relevan dipelajari pelajar SMP masa kini?', opts: ['Karena mengandung kearifan lokal, pendidikan karakter, dan kekayaan bahasa warisan Nusantara', 'Karena wajib dihafal tanpa paham artinya', 'Karena tidak ada karya sastra lain', 'Agar bisa menyindir teman'], ans: 0, exp: 'Puisi rakyat adalah cermin budi pekerti dan identitas budaya Indonesia.' },
      { text: 'Tindakan menguraikan makna padat sebuah puisi menjadi prosa bebas tanpa menghilangkan gagasan penyairnya disebut...', opts: ['Parafrase', 'Plagiasi', 'Klasifikasi', 'Toponimi'], ans: 0, exp: 'Parafrase membantu menguji pemahaman kita terhadap makna puisi.' },
    ],
  },

  // BAB 8: KEBAHASAAN DAN EJAAN
  {
    topicCode: 'BIND-SMP7-08', subSeq: 1,
    objectives: ['Siswa mampu membedakan kata baku (KBBI) dan tidak baku serta menerapkannya pada tulisan resmi.'],
    materialTitle: 'Kata Baku dan Tidak Baku (KBBI)',
    blocks: [
      { type: 'table', title: '10 Kata Baku SMP yang Paling Sering Salah Tulis!', headers: ['Tidak Baku (Salah)', 'Baku (KBBI — Benar!)'], rows: [
        ['analisa / hipotesa', 'analisis / hipotesis'],
        ['resiko / kwalitas', 'risiko / kualitas'],
        ['sistim / tehnik', 'sistem / teknik'],
        ['sekedar / nafas', 'sekadar / napas'],
        ['ijazah (benar!) vs ijasah (salah)', 'ijazah (pakai z!)'],
      ]},
    ],
    activityTitle: 'Latihan: Kata Baku & Tidak Baku',
    questions: [
      { text: 'Manakah deretan yang SEMUANYA adalah kata BAKU menurut KBBI?', opts: ['Analisis, risiko, sistem, kualitas', 'Analisa, resiko, sistim, kwalitas', 'Teknik, ijasah, nafas, apotik', 'Aktifitas, praktek, sekedar, hipotesa'], ans: 0, exp: 'Baku: analisis, risiko, sistem, kualitas, teknik, ijazah, napas, apotek, aktivitas, praktik, sekadar.' },
      { text: 'Penulisan kata baku dari "antri" dan "cinderamata" yang benar adalah...', opts: ['antre dan cenderamata', 'antri dan cendramata', 'antre dan cinderamata', 'antri dan cenderamata'], ans: 0, exp: 'KBBI: antre (bukan antri) dan cenderamata (bukan cinderamata).' },
      { text: 'Kata baku wajib digunakan pada jenis teks berikut, KECUALI...', opts: ['Laporan hasil observasi', 'Surat resmi sekolah', 'Dialog santai percakapan sehari-hari dalam cerpen', 'Teks berita resmi'], ans: 2, exp: 'Dialog akrab dalam cerpen boleh memakai ragam nonbaku agar karakter terasa alami.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-08', subSeq: 2,
    objectives: ['Siswa mampu memperbaiki kalimat tidak efektif akibat pleonasme, ketidakjelasan subjek, dan kontaminasi.'],
    materialTitle: 'Kalimat Efektif SMP',
    blocks: [
      { type: 'table', title: '3 Penyebab Kalimat Tidak Efektif & Perbaikannya', headers: ['Kesalahan', 'Contoh Salah', 'Perbaikan Efektif'], rows: [
        ['Subjek Hilang (pakai kata depan)', 'Dalam rapat itu membahas lomba.', 'Rapat itu membahas lomba. (atau: Dalam rapat itu, kami membahas lomba.)'],
        ['Pleonasme (Boros Makna Ganda)', 'Ia mundur ke belakang dan naik ke atas.', 'Ia mundur dan naik.'],
        ['Kesejajaran Bentuk (Paralelisme)', 'Tahapannya adalah menyaring, pencucian, dan dikeringkan.', 'Tahapannya adalah menyaring, mencuci, dan mengeringkan.'],
      ]},
    ],
    activityTitle: 'Latihan: Kalimat Efektif SMP',
    questions: [
      { text: 'Perbaikan kalimat tidak efektif "Bagi siswa kelas 7 diharapkan segera berkumpul di lapangan" agar subjeknya jelas adalah...', opts: ['Siswa kelas 7 diharapkan segera berkumpul di lapangan.', 'Bagi semua siswa kelas 7 segera kumpul.', 'Kepada siswa kelas 7 diharapkan berkumpul.', 'Untuk siswa kelas 7 harap berkumpul.'], ans: 0, exp: 'Menghilangkan preposisi "Bagi" mengembalikan "Siswa kelas 7" sebagai Subjek jelas.' },
      { text: 'Manakah kalimat yang memenuhi syarat KESEJAJARAN (paralelisme) bentuk kata kerja?', opts: ['Petani itu membajak sawah, menanam benih, dan memanen padi.', 'Petani itu membajak sawah, penanaman benih, dan dipanennya padi.', 'Petani itu dibajak sawah, menanam benih, panenan padi.', 'Membajak sawah petani, penanaman, dan memanen.'], ans: 0, exp: 'Ketiganya memakai bentuk kata kerja aktif meN- (membajak, menanam, memanen).' },
      { text: 'Frasa "agar supaya", "demi untuk", dan "saling bantu-membantu" termasuk kesalahan kalimat efektif berupa...', opts: ['Ketidakhematan / pleonasme (pemborosan kata)', 'Kurang tanda seru', 'Salah huruf kapital', 'Kurang panjang'], ans: 0, exp: 'Cukup pakai satu: "agar" saja, "untuk" saja, atau "saling membantu".' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-08', subSeq: 3,
    objectives: ['Siswa mampu menerapkan aturan huruf kapital EYD V secara presisi (geografi, jabatan diikuti nama, gelar, judul karangan).'],
    materialTitle: 'Penggunaan Huruf Kapital (EYD V)',
    blocks: [
      { type: 'table', title: 'Aturan Kapital EYD V yang Sering Jadi Jebakan Soal!', headers: ['Aturan', 'Kapital (Diikuti Nama)', 'Huruf Kecil (Tanpa Nama / Jenis)'], rows: [
        ['Unsur Geografi', 'Sungai Bengawan Solo, Laut Jawa, Selat Madura', 'berenang di sungai, menyeberangi selat'],
        ['Nama Geografi Jadi Jenis Produk', '—', 'gula jawa, jeruk bali, kacang bogor, kunci inggris (HURUF KECIL!)'],
        ['Jabatan / Sapaan', 'Bupati Gresik, Profesor Budi, "Terima kasih, Pak."', 'Ia bercita-cita menjadi bupati / gubernur.'],
      ]},
    ],
    activityTitle: 'Latihan: Huruf Kapital EYD V',
    questions: [
      { text: 'Penulisan huruf kapital yang BENAR sesuai EYD V adalah...', opts: ['Ibu membeli gula jawa dan jeruk bali di Pasar Gresik.', 'Ibu membeli Gula Jawa dan Jeruk Bali di pasar Gresik.', 'Ibu membeli gula Jawa dan jeruk Bali di Pasar gresik.', 'ibu membeli gula jawa di Pasar Gresik.'], ans: 0, exp: 'Nama geografi penunjuk jenis makanan (gula jawa, jeruk bali) ditulis kecil; nama tempat (Pasar Gresik) kapital.' },
      { text: 'Penulisan judul karangan yang BENAR sesuai EYD V adalah...', opts: ['Upaya Pelestarian Hutan Mangrove di Pesisir Utara Jawa', 'Upaya Pelestarian Hutan Mangrove Di Pesisir Utara Jawa', 'Upaya pelestarian hutan mangrove di pesisir utara Jawa', 'UPAYA pelestarian Hutan Mangrove di Pesisir Utara jawa'], ans: 0, exp: 'Kata tugas ("di", "ke", "dari", "dan", "yang") di tengah judul ditulis huruf kecil.' },
      { text: 'Manakah penulisan gelar dan jabatan yang BENAR?', opts: ['Ayah saya dilantik menjadi camat, sedangkan paman bertemu Bupati Gresik.', 'Ayah saya dilantik menjadi Camat, sedangkan paman bertemu bupati Gresik.', 'Ayah saya dilantik menjadi Camat.', 'Paman bertemu bupati gresik.'], ans: 0, exp: 'Jabatan tanpa diikuti nama orang/daerah ditulis kecil ("camat"); diikuti nama wilayah ditulis kapital ("Bupati Gresik").' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-08', subSeq: 4,
    objectives: ['Siswa mampu menggunakan tanda baca titik, koma, titik dua, tanda hubung (-), tanda pisah (—), dan tanda petik secara benar.'],
    materialTitle: 'Tanda Baca Sesuai EYD V',
    blocks: [
      { type: 'table', title: 'Tanda Baca Penting SMP', headers: ['Tanda Baca', 'Kegunaan Utama', 'Contoh'], rows: [
        ['Koma (,)', 'Perincian ≥3, sebelum tetapi/sedangkan/melainkan, setelah ungkapan penghubung antarkalimat', 'Oleh karena itu, kita harus siap.'],
        ['Titik Dua (:)', 'Akhir pernyataan lengkap yang diikuti perincian', 'Mereka membawa alat tulis: pensil, buku, dan penggaris.'],
        ['Tanda Hubung (-)', 'Kata ulang, merangkai se-/ke- dengan kapital/angka', 'anak-anak, se-Indonesia, ke-7, tahun 1990-an'],
      ]},
    ],
    activityTitle: 'Latihan: Tanda Baca EYD V',
    questions: [
      { text: 'Penulisan gabungan awalan dengan huruf kapital/angka yang BENAR adalah...', opts: ['juara ke-1 se-Jawa Timur', 'juara ke 1 se Jawa Timur', 'juara ke1 seJawa Timur', 'juara ke-1 se Jawa Timur'], ans: 0, exp: 'Tanda hubung (-) merangkai "ke-" dengan angka dan "se-" dengan huruf kapital.' },
      { text: 'Penggunaan tanda koma setelah konjungsi antarkalimat yang BENAR adalah...', opts: ['Hujan turun deras. Oleh karena itu, pertandingan ditunda.', 'Hujan turun deras. Oleh karena itu pertandingan ditunda.', 'Hujan turun deras, oleh karena itu pertandingan ditunda.', 'Hujan turun deras. Oleh, karena itu pertandingan ditunda.'], ans: 0, exp: '"Oleh karena itu," "Namun," dan "Selain itu," wajib diikuti tanda koma.' },
      { text: 'Penggunaan tanda titik dua (:) yang BENAR adalah...', opts: ['Kita memerlukan peralatan berikut: sapu, pengki, dan kain pel.', 'Kita memerlukan: sapu, pengki, dan kain pel.', 'Kita: memerlukan sapu, pengki, dan kain pel.', 'Kita memerlukan peralatan: berikut sapu.'], ans: 0, exp: 'Titik dua TIDAK dipakai langsung setelah predikat transitif ("memerlukan"), melainkan sesudah pernyataan lengkap ("peralatan berikut:").' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-08', subSeq: 5,
    objectives: ['Siswa mampu menerapkan aturan peluluhan awalan meN- (kaidah KPTS) dan membedakan awalan di- vs kata depan di.'],
    materialTitle: 'Imbuhan dan Kaidah Peluluhan KPTS',
    blocks: [
      { type: 'formula', name: 'Aturan Emas Peluluhan meN- (K-P-T-S)', expression: 'meN- + kata dasar diawali K, P, T, S + VOKAL → HURUF PERTAMA LULUH!', note: 'LULUH: meN+sapu=menyapu, meN+pesona=memesona, meN+tulis=menulis, meN+kurang=mengurangi. TIDAK LULUH jika gugus konsonan (kluster): meN+kritik=mengkritik, meN+proses=memproses, meN+transfer=mentransfer!' },
    ],
    activityTitle: 'Latihan: Imbuhan & KPTS',
    questions: [
      { text: 'Bentukan kata berimbuhan meN- yang BENAR sesuai kaidah KPTS adalah...', opts: ['Memengaruhi, memesona, mengkritik, memproses', 'Mempengaruhi, mempesona, mengeritik, memeroses', 'Memengaruhi, mempesona, mengkritik, memeroses', 'Mempengaruhi, memesona, mengeritik, memproses'], ans: 0, exp: 'Pengaruh (p+e)→memengaruhi; pesona (p+e)→memesona; kritik (kr kluster)→mengkritik; proses (pr kluster)→memproses!' },
      { text: 'Kata "mengubah" berasal dari imbuhan meN- + kata dasar...', opts: ['ubah (bukan "rubah" — rubah adalah nama hewan!)', 'rubah', 'gubah', 'tubah'], ans: 0, exp: 'Kata dasar yang baku adalah "ubah" → mengubah, perubahan.' },
      { text: 'Bentukan meN- + kata dasar "taat" + -i yang benar adalah...', opts: ['Menaati (t luluh!)', 'Mentaati', 'Menataati', 'Metaati'], ans: 0, exp: 't + vokal a → luluh menjadi menaati.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-08', subSeq: 6,
    objectives: ['Siswa mampu membedakan konjungsi intrakalimat (dalam 1 kalimat) dan konjungsi antarkalimat (menghubungkan 2 kalimat).'],
    materialTitle: 'Konjungsi Intrakalimat dan Antarkalimat',
    blocks: [
      { type: 'table', title: 'Jangan Tertukar: Intrakalimat vs Antarkalimat!', headers: ['Jenis', 'Contoh Konjungsi', 'Aturan Letaknya'], rows: [
        ['Intrakalimat', 'dan, tetapi, sedangkan, karena, sehingga, walaupun', 'Di TENGAH kalimat (JANGAN diletakkan di awal kalimat baru!)'],
        ['Antarkalimat', 'Namun, Akan tetapi, Oleh karena itu, Selain itu, Meskipun demikian', 'Di AWAL kalimat baru, diawali kapital, dan WAJIB diikuti koma (,)!'],
      ]},
    ],
    activityTitle: 'Latihan: Konjungsi',
    questions: [
      { text: 'Manakah penggunaan konjungsi pertentangan yang BENAR sesuai kaidah baku?', opts: ['Bima ingin ikut bermain. Namun, ia harus menyelesaikan tugas IPA dulu.', 'Bima ingin ikut bermain. Tetapi ia harus menyelesaikan tugas dulu.', 'Bima ingin ikut bermain, namun ia harus menyelesaikan tugas dulu.', 'Bima ingin ikut bermain. Namun ia harus menyelesaikan tugas dulu.'], ans: 0, exp: '"Namun," adalah konjungsi antarkalimat (di awal kalimat baru + koma); "tetapi" di tengah kalimat.' },
      { text: 'Konjungsi berikut yang merupakan konjungsi ANTARKALIMAT adalah...', opts: ['Oleh karena itu, Selain itu, Namun, Sebaliknya', 'Dan, atau, tetapi', 'Karena, sehingga, agar', 'Sedangkan, melainkan'], ans: 0, exp: 'Keempatnya menghubungkan kalimat sebelumnya dengan kalimat baru.' },
      { text: '"Ia bukan membeli tas baru, ... memperbaiki tas lamanya yang masih kuat." Konjungsi korelatif pasangan "bukan..." adalah...', opts: ['melainkan', 'tetapi', 'sedangkan', 'atau'], ans: 0, exp: 'Pasangan baku EYD: "bukan ..., melainkan ..." dan "tidak ..., tetapi ...".' },
    ],
  },

  // BAB 9: MENULIS DAN MEMPRESENTASIKAN
  {
    topicCode: 'BIND-SMP7-09', subSeq: 1,
    objectives: ['Siswa mampu menyusun teks informatif/deskriptif berdasarkan hasil pengamatan nyata secara sistematis.'],
    materialTitle: 'Menyusun Teks Berdasarkan Pengamatan',
    blocks: [
      { type: 'list', title: 'Alur Mengubah Observasi Menjadi Tulisan Bermutu', items: ['1. Tentukan jenis teks sesuai tujuan (LHO untuk info ilmiah umum; Deskripsi untuk kesan indrawi; Berita untuk peristiwa aktual).', '2. Kelompokkan catatan observasi ke dalam kerangka paragraf.', '3. Kembangkan memakai kalimat efektif, kata baku, dan data konkret!'] },
    ],
    activityTitle: 'Latihan: Menulis dari Pengamatan',
    questions: [
      { text: 'Jika hasil pengamatan tentang "Pengelolaan Sampah Sekolah" ingin dilaporkan sebagai pengetahuan objektif terklasifikasi, jenis teks paling tepat adalah...', opts: ['Teks Laporan Hasil Observasi (LHO)', 'Pantun jenaka', 'Cerita fantasi', 'Gurindam'], ans: 0, exp: 'LHO paling cocok untuk laporan pengamatan faktual terstruktur.' },
      { text: 'Pengamatan yang baik sebelum menulis sebaiknya mencatat...', opts: ['Fakta konkret, angka/ukuran, dan ciri spesifik objek', 'Asumsi pribadi tanpa melihat lokasi', 'Cerita fiksi', 'Hanya judul'], ans: 0, exp: 'Data konkret menjadi fondasi tulisan informatif.' },
      { text: 'Menyertakan sumber data atau tanggal pengamatan di dalam tulisan meningkatkan...', opts: ['Kredibilitas (tingkat kepercayaan) tulisan', 'Panjang teks tanpa guna', 'Kerumitan', 'Fiksi'], ans: 0, exp: 'Transparansi waktu dan sumber membuat tulisan dapat dipertanggungjawabkan.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-09', subSeq: 2,
    objectives: ['Siswa mampu mengembangkan gagasan utama menjadi paragraf kohesif dan koheren dengan pola penalaran induktif/deduktif.'],
    materialTitle: 'Mengembangkan Gagasan Paragraf',
    blocks: [
      { type: 'tip', text: 'Setiap paragraf yang kuat punya 1 kalimat topik + 2–3 kalimat pengembang (berisi penjelasan, bukti/contoh, atau sebab-akibat) yang tertaut rapi memakai kata rujukan dan konjungsi!' },
    ],
    activityTitle: 'Latihan: Mengembangkan Gagasan',
    questions: [
      { text: 'Pengembangan paragraf dengan memaparkan contoh-contoh khusus terlebih dahulu lalu diakhiri kalimat simpulan umum di akhir disebut pola...', opts: ['Induktif', 'Deduktif', 'Campuran', 'Acak'], ans: 0, exp: 'Khusus → Umum = Induktif; Umum → Khusus = Deduktif.' },
      { text: 'Kata ganti dan kata tunjuk ("hal itu", "upaya tersebut", "mereka") di dalam paragraf berfungsi menjaga...', opts: ['Kohesi (keterkaitan bentuk antarkalimat)', 'Rima akhir', 'Judul', 'Majas'], ans: 0, exp: 'Penanda kohesi menghubungkan kalimat satu dengan lainnya secara mulus.' },
      { text: 'Jika dalam 1 paragraf terdapat dua ide pokok berbeda yang sama sekali tidak berkaitan, solusi penyuntingan terbaik adalah...', opts: ['Memecahnya menjadi dua paragraf terpisah yang masing-masing fokus satu ide pokok', 'Menghapus semua titik', 'Membiarkannya campur', 'Menjadikannya 1 kalimat panjang'], ans: 0, exp: 'Prinsip kesatuan paragraf: satu paragraf = satu ide pokok.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-09', subSeq: 3,
    objectives: ['Siswa mampu menyampaikan pendapat, kritik membangun, dan sanggahan dalam diskusi kelas secara argumentatif dan santun.'],
    materialTitle: 'Menyampaikan Pendapat & Kritik Membangun',
    blocks: [
      { type: 'formula', name: 'Teknik Kritik Santun "Sandwich" (Apresiasi – Saran – Semangat)', expression: '1. Apresiasi kelebihan dulu  →  2. Sampaikan saran spesifik  →  3. Tutup dengan dorongan positif!', note: 'Contoh: "Postermu gambarnya menarik sekali! Akan makin mudah dibaca jika ukuran huruf isinya sedikit diperbesar. Keren, lanjutkan!"' },
    ],
    activityTitle: 'Latihan: Menyampaikan Pendapat',
    questions: [
      { text: 'Kritik yang membangun (konstruktif) dalam diskusi kelas memiliki ciri...', opts: ['Fokus memperbaiki karya/gagasan disertai solusi sopan, bukan menyerang pribadi', 'Mengejek pembuat karya', 'Hanya bilang "jelek" tanpa alasan', 'Berteriak keras'], ans: 0, exp: 'Kritik konstruktif membantu perbaikan dengan tetap menjaga perasaan.' },
      { text: 'Kalimat sanggahan yang paling santun dalam diskusi kelompok SMP adalah...', opts: ['"Saya menghargai pendapat Bima, namun menurut data hasil pengamatan kami, alternatif kedua lebih hemat biaya karena..."', '"Pendapat Bima salah total dan tidak masuk akal!"', '"Terserah deh, pasti gagal."', '"Jangan bicara lagi!"'], ans: 0, exp: 'Menghargai dulu lalu menyanggah berbasis data.' },
      { text: 'Sikap terbuka menerima saran dan kritik sopan dari teman menunjukkan sifat...', opts: ['Dewasa, rendah hati, dan mau terus belajar', 'Lemah', 'Kalah', 'Bingung'], ans: 0, exp: 'Keterbukaan pada masukan mempercepat peningkatan kualitas karya.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-09', subSeq: 4,
    objectives: ['Siswa mampu melaksanakan presentasi lisan berbasis bahan tayang dengan manajemen waktu, vokal, dan bahasa tubuh efektif.'],
    materialTitle: 'Teknik Presentasi Lisan SMP',
    blocks: [
      { type: 'visual_cards', title: '4 Pilar Presentasi Berkelas', cards: [
        { emoji: '⏱️', label: 'Manajemen Waktu', sub: 'Bagi durasi proporsional (pembuka singkat, isi utama fokus, sisakan waktu tanya jawab)' },
        { emoji: '🗣️', label: 'Vokal & Artikulasi', sub: 'Suara mantap, hindari gumaman "eee... anu..." dengan jeda tenang 1 detik!' },
        { emoji: '👀', label: 'Kontak Mata Merata', sub: 'Sapukan pandangan ke kiri, tengah, dan kanan ruangan' },
        { emoji: '📊', label: 'Penguasaan Materi', sub: 'Pahami alur slide sehingga kamu MENJELASKAN, bukan sekadar membaca layar!' },
      ]},
    ],
    activityTitle: 'Latihan: Presentasi Lisan',
    questions: [
      { text: 'Cara terbaik mengganti kebiasaan mengucapkan gumaman pengisi seperti "eee...", "anu...", atau "apa ya..." saat presentasi adalah...', opts: ['Diam berhenti sejenak (jeda tenang 1 detik) sambil menarik napas sebelum melanjutkan kalimat', 'Berbicara dua kali lebih cepat', 'Menunduk menatap lantai', 'Tertawa gugup'], ans: 0, exp: 'Jeda hening singkat justru terkesan tenang dan berwibawa.' },
      { text: 'Kesalahan presentasi kelompok yang harus dihindari adalah...', opts: ['Hanya 1 orang yang bekerja/bicara sementara anggota lain diam tak memahami materi', 'Membagi peran moderator, penyaji, dan penjawab pertanyaan secara adil', 'Berlatih bersama sebelum tampil', 'Menyiapkan poin ringkas'], ans: 0, exp: 'Presentasi kelompok menuntut kolaborasi dan pemahaman semua anggota.' },
      { text: 'Membuka presentasi dengan pertanyaan pemantik singkat (misal "Tahukah teman-teman berapa lama plastik terurai?") berguna untuk...', opts: ['Langsung menarik perhatian dan rasa ingin tahu audiens', 'Membuat audiens bingung', 'Menghabiskan waktu', 'Menutup acara'], ans: 0, exp: 'Hook pembuka langsung melibatkan pendengar secara aktif.' },
    ],
  },
  {
    topicCode: 'BIND-SMP7-09', subSeq: 5,
    objectives: ['Siswa mampu mengelola sesi tanya jawab presentasi secara tertib, tepat sasaran, dan profesional.'],
    materialTitle: 'Mengelola & Menanggapi Pertanyaan Presentasi',
    blocks: [
      { type: 'list', title: 'Protokol Sesi Tanya Jawab Kelas SMP', items: ['1. Moderator membuka termin pertanyaan (misal 2–3 penanya) dan mempersilakan penanya menyebut nama.', '2. Penyaji mencatat inti pertanyaan dan mengulang singkat bila perlu agar seluruh kelas mendengar.', '3. Jawab ringkas, objektif, dan berbasis data/fakta materi.', '4. Tutup sesi dengan ucapan terima kasih dan simpulan akhir presentasi!'] },
    ],
    activityTitle: 'Latihan: Menanggapi Pertanyaan',
    questions: [
      { text: 'Mengulang inti pertanyaan penanya dengan singkat ("Baik, jadi Alya menanyakan tentang...") sebelum menjawab bermanfaat untuk...', opts: ['Memastikan kita menangkap maksud pertanyaan dengan tepat dan seluruh audiens ikut mendengarnya', 'Mengulur waktu saja', 'Mengejek penanya', 'Mengubah pertanyaan'], ans: 0, exp: 'Parafrase pertanyaan mencegah jawaban melenceng dari maksud penanya.' },
      { text: 'Jika dua penanya menanyakan hal yang sangat mirip, langkah efisien penyaji adalah...', opts: ['Menjawabnya sekaligus secara terpadu sambil tetap menghargai kedua penanya', 'Mengabaikan penanya kedua', 'Memarahi penanya kedua', 'Tidak menjawab keduanya'], ans: 0, exp: 'Menggabungkan jawaban pertanyaan sejenis menghemat waktu dan tetap santun.' },
      { text: 'Setelah semua pertanyaan terjawab, tugas terakhir moderator/penyaji adalah...', opts: ['Menyampaikan kesimpulan penutup, permohonan maaf atas kekurangan, terima kasih, dan salam penutup', 'Langsung duduk tanpa berkata apa-apa', 'Mematikan lampu kelas', 'Menghapus papan tulis'], ans: 0, exp: 'Penutupan resmi memberi kesan rapi dan profesional.' },
    ],
  },
];

upsertLessonsBatch('Kelas 7 SMP — Bahasa Indonesia (9 Bab, 55 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });
