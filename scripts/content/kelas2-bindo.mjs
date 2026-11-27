import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: MEMBACA DAN MEMAHAMI KATA
  {
    topicCode: 'BIND-SD2-01', subSeq: 1,
    objectives: ['Siswa mampu membaca kata baru bersuku kata 3–4 dengan teknik penggalan suku kata.'],
    materialTitle: 'Cara Mudah Membaca Kata Baru',
    blocks: [
      { type: 'paragraph', text: 'Bertemu kata panjang jangan takut! Penggal dulu menjadi suku kata pendek lalu baca menyambung dengan lancar.' },
      { type: 'flashcards', title: 'Coba Baca Penggalannya, Lalu Klik!', cards: [
        { emoji: '🏫', front: 'se-ko-lah', back: 'SEKOLAH (3 suku kata)' },
        { emoji: '📚', front: 'per-pus-ta-ka-an', back: 'PERPUSTAKAAN (5 suku kata)' },
        { emoji: '🧹', front: 'ke-ber-sih-an', back: 'KEBERSIHAN (4 suku kata)' },
        { emoji: '🤝', front: 'ber-sa-ha-bat', back: 'BERSAHABAT (4 suku kata)' },
      ]},
    ],
    activityTitle: 'Latihan: Membaca Kata Baru',
    questions: [
      { text: 'Penggalan suku kata yang tepat untuk "sekolah" adalah...', opts: ['sek-ol-ah', 'se-ko-lah', 's-ekolah', 'seko-lah'], ans: 1, exp: 'se-ko-lah terdiri dari 3 suku kata.' },
      { text: 'Kata "kebersihan" terdiri dari berapa suku kata?', opts: ['2', '3', '4', '5'], ans: 2, exp: 'ke-ber-sih-an = 4 suku kata.' },
      { text: 'Penggalan suku kata "menanam" adalah...', opts: ['me-na-nam', 'men-a-nam', 'mena-nam', 'm-enanam'], ans: 0, exp: 'me-na-nam = 3 suku kata.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-01', subSeq: 2,
    objectives: ['Siswa mengenal kelompok kata (kata benda, kata kerja, kata sifat sederhana).'],
    materialTitle: 'Mengenal Kelompok Kata (Benda, Kerja, Sifat)',
    blocks: [
      { type: 'visual_cards', title: 'Klik 3 Kelompok Kata Penting!', items: [
        { visual: '📘', label: 'Kata Benda', caption: 'Buku, meja, kucing', speech: 'Kata benda adalah nama benda, orang, hewan, atau tempat.' },
        { visual: '🏃', label: 'Kata Kerja', caption: 'Lari, baca, makan', speech: 'Kata kerja menunjukkan kegiatan atau perbuatan.' },
        { visual: '✨', label: 'Kata Sifat', caption: 'Bersih, tinggi, manis', speech: 'Kata sifat menjelaskan keadaan atau ciri benda.' },
      ]},
    ],
    activityTitle: 'Latihan: Kelompok Kata',
    questions: [
      { text: 'Kata "membaca" dan "menulis" termasuk kelompok...', opts: ['Kata benda', 'Kata kerja', 'Kata sifat', 'Kata tanya'], ans: 1, exp: 'Membaca dan menulis adalah kegiatan (kata kerja).' },
      { text: 'Kata "manis, bersih, rajin" termasuk kelompok...', opts: ['Kata sifat', 'Kata benda', 'Kata kerja', 'Kata bilangan'], ans: 0, exp: 'Manis, bersih, dan rajin menjelaskan sifat/keadaan.' },
      { text: 'Manakah yang merupakan kata benda?', opts: ['Lari', 'Pensil', 'Cantik', 'Tidur'], ans: 1, exp: 'Pensil adalah nama benda.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-01', subSeq: 3,
    objectives: ['Siswa mampu menebak arti kata baru dari konteks kalimat di sekitarnya.'],
    materialTitle: 'Memahami Arti Kata dari Kalimat',
    blocks: [
      { type: 'worked_example', level: 'Dasar', question: '"Setelah berlari jauh, Bima merasa dahaga lalu segera minum air." Apa arti kata "dahaga"?', steps: ['Lihat petunjuk di kalimat: Bima segera minum air.', 'Orang minum air karena merasa haus.'], answer: 'Dahaga artinya haus.' },
    ],
    activityTitle: 'Latihan: Arti Kata Kontekstual',
    questions: [
      { text: '"Rina meminjam buku cerita di perpustakaan." Perpustakaan adalah tempat untuk...', opts: ['Membeli sayur', 'Membaca dan meminjam buku', 'Bermain bola', 'Memasak'], ans: 1, exp: 'Petunjuk "meminjam buku cerita" menunjukkan fungsi perpustakaan.' },
      { text: '"Udara pagi ini sangat sejuk, tidak terasa panas." Arti kata "sejuk" adalah...', opts: ['Panas terik', 'Segar dan agak dingin', 'Gelap gulita', 'Kotor'], ans: 1, exp: 'Sejuk artinya terasa segar dan agak dingin.' },
      { text: '"Ayah menyantap nasi goreng buatan Ibu." Kata "menyantap" sama artinya dengan...', opts: ['Membuang', 'Memakan', 'Mencuci', 'Membeli'], ans: 1, exp: 'Menyantap artinya memakan.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-01', subSeq: 4,
    objectives: ['Siswa mampu menyusun kata acak menjadi kalimat berpola S-P-O sederhana.'],
    materialTitle: 'Menyusun Kata Acak Menjadi Kalimat',
    blocks: [
      { type: 'tip', text: 'Rumus susun kalimat mudah: SIAPA (Subjek) + NGAPAIN (Predikat) + APA/DI MANA (Objek/Keterangan)!' },
      { type: 'worked_example', level: 'Dasar', question: 'Susun kata: "halaman - menyapu - Ibu - di"', steps: ['Siapa? Ibu.', 'Ngapain? menyapu.', 'Di mana? di halaman.'], answer: 'Ibu menyapu di halaman.' },
    ],
    activityTitle: 'Latihan: Menyusun Kata Jadi Kalimat',
    questions: [
      { text: 'Susunan benar dari "kucing - memberi makan - Alya":', opts: ['Kucing Alya memberi makan.', 'Alya memberi makan kucing.', 'Memberi makan kucing Alya.', 'Alya kucing memberi makan.'], ans: 1, exp: 'Subjek (Alya) + Predikat (memberi makan) + Objek (kucing).' },
      { text: 'Susunan benar dari "di taman - bermain - Bima":', opts: ['Bima bermain di taman.', 'Di taman Bima bermain.', 'Bermain di taman Bima.', 'Taman bermain di Bima.'], ans: 0, exp: 'Bima (S) + bermain (P) + di taman (K).' },
      { text: 'Susunan benar dari "sepeda - mencuci - Ayah":', opts: ['Sepeda mencuci Ayah.', 'Ayah mencuci sepeda.', 'Mencuci Ayah sepeda.', 'Ayah sepeda mencuci.'], ans: 1, exp: 'Ayah mencuci sepeda.' },
    ],
  },

  // BAB 2: KALIMAT DAN PARAGRAF SEDERHANA
  {
    topicCode: 'BIND-SD2-02', subSeq: 1,
    objectives: ['Siswa mampu membedakan kalimat berita (.) dan kalimat tanya (?).'],
    materialTitle: 'Kalimat Berita dan Kalimat Tanya',
    blocks: [
      { type: 'visual_cards', title: 'Bedakan Dua Jenis Kalimat Ini!', items: [
        { visual: '📰', label: 'Kalimat Berita (.)', caption: 'Memberi tahu info', speech: 'Kalimat berita diakhiri tanda titik. Contoh: Hari ini cuaca cerah.' },
        { visual: '❓', label: 'Kalimat Tanya (?)', caption: 'Menanyakan sesuatu', speech: 'Kalimat tanya memakai kata tanya dan diakhiri tanda tanya. Contoh: Di mana rumahmu?' },
      ]},
    ],
    activityTitle: 'Latihan: Kalimat Berita & Tanya',
    questions: [
      { text: 'Manakah yang merupakan KALIMAT TANYA?', opts: ['Alya pergi ke sekolah.', 'Kapan kita pergi ke perpustakaan?', 'Bunga mawar itu merah.', 'Ayah membaca koran.'], ans: 1, exp: 'Memakai kata tanya "Kapan" dan diakhiri tanda tanya (?).' },
      { text: 'Tanda baca di akhir kalimat "Ibu membeli jeruk di pasar..." adalah...', opts: ['?', '.', '!', ','], ans: 1, exp: 'Kalimat berita diakhiri tanda titik (.).' },
      { text: 'Kata tanya untuk menanyakan WAKTU adalah...', opts: ['Siapa', 'Di mana', 'Kapan', 'Berapa'], ans: 2, exp: '"Kapan" menanyakan waktu kejadian.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-02', subSeq: 2,
    objectives: ['Siswa mampu menyusun kalimat dengan huruf kapital dan tanda baca yang tepat.'],
    materialTitle: 'Menyusun Kalimat dengan Huruf Kapital',
    blocks: [
      { type: 'list', title: 'Kapan Huruf Kapital (Besar) Dipakai?', items: ['Huruf pertama di awal kalimat.', 'Huruf pertama nama orang (Alya, Bima).', 'Huruf pertama nama hari dan kota (Senin, Gresik).'] },
    ],
    activityTitle: 'Latihan: Huruf Kapital & Kalimat',
    questions: [
      { text: 'Penulisan huruf kapital yang BENAR adalah...', opts: ['bima tinggal di gresik.', 'Bima tinggal di Gresik.', 'Bima Tinggal Di gresik.', 'bima Tinggal di Gresik.'], ans: 1, exp: 'Awal kalimat, nama orang (Bima), dan nama kota (Gresik) diawali huruf kapital.' },
      { text: 'Hari "senin" seharusnya ditulis...', opts: ['senin', 'Senin', 'SENin', 'seNin'], ans: 1, exp: 'Nama hari diawali huruf kapital: Senin.' },
      { text: 'Penulisan nama orang yang benar adalah...', opts: ['siti rahma', 'Siti Rahma', 'siti Rahma', 'SITI rahma'], ans: 1, exp: 'Setiap awal kata nama orang memakai huruf kapital.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-02', subSeq: 3,
    objectives: ['Siswa mengenal paragraf sebagai kumpulan beberapa kalimat yang membahas satu topik.'],
    materialTitle: 'Mengenal Paragraf Sederhana',
    blocks: [
      { type: 'paragraph', text: 'Paragraf adalah gabungan beberapa kalimat yang saling berhubungan dan membahas satu topik yang sama. Baris pertama paragraf biasanya ditulis agak menjorok ke kanan.' },
      { type: 'example', title: 'Contoh 1 Paragraf (3 Kalimat)', text: 'Kelinci milik Alya bernama Milo. Bulunya putih bersih dan sangat lembut. Setiap pagi Alya memberinya makan wortel segar.' },
    ],
    activityTitle: 'Latihan: Mengenal Paragraf',
    questions: [
      { text: 'Paragraf di atas membahas topik tentang...', opts: ['Sepeda Alya', 'Kelinci peliharaan Alya bernama Milo', 'Sekolah Alya', 'Makanan kesukaan Ibu'], ans: 1, exp: 'Semua kalimat menjelaskan tentang kelinci bernama Milo.' },
      { text: 'Berapa jumlah kalimat dalam contoh paragraf Milo di atas?', opts: ['1 kalimat', '2 kalimat', '3 kalimat', '5 kalimat'], ans: 2, exp: 'Ada 3 tanda titik, berarti 3 kalimat.' },
      { text: 'Ciri kalimat-kalimat dalam satu paragraf yang baik adalah...', opts: ['Membahas satu topik yang saling nyambung', 'Topiknya acak-acakan', 'Tidak ada tanda titik', 'Hanya berisi satu huruf'], ans: 0, exp: 'Kalimat dalam satu paragraf harus padu membahas satu ide.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-02', subSeq: 4,
    objectives: ['Siswa mampu melengkapi bagian rumpang pada paragraf pendek.'],
    materialTitle: 'Melengkapi Paragraf Rumpang',
    blocks: [
      { type: 'worked_example', level: 'Dasar', question: 'Lengkapi: "Setiap hari Minggu keluarga kami kerja bakti. Ayah memotong rumput. Ibu menyapu halaman. Aku membantu ... sampah ke tempatnya."', steps: ['Cari kata kerja yang cocok dengan "sampah ke tempatnya".', 'Kata yang paling tepat adalah "membuang".'], answer: 'membuang' },
    ],
    activityTitle: 'Latihan: Melengkapi Paragraf',
    questions: [
      { text: '"Hari ini langit mendung. Tak lama kemudian turun ... deras." Kata yang tepat adalah...', opts: ['matahari', 'hujan', 'bintang', 'pelangi'], ans: 1, exp: 'Langit mendung diikuti turunnya hujan.' },
      { text: '"Kelas kami sangat rapi. Lantai bersih karena petugas piket rajin ..."', opts: ['menyapu', 'mengotori', 'mencoret', 'tidur'], ans: 0, exp: 'Lantai bersih karena rajin menyapu.' },
      { text: '"Budi rajin belajar setiap malam. Saat ulangan, ia mendapat nilai yang ..."', opts: ['buruk', 'bagus', 'kecil', 'kosong'], ans: 1, exp: 'Rajin belajar menghasilkan nilai bagus.' },
    ],
  },

  // BAB 3: TEKS DESKRIPSI SEDERHANA
  {
    topicCode: 'BIND-SD2-03', subSeq: 1,
    objectives: ['Siswa memahami teks deskripsi sebagai gambaran ciri-ciri suatu objek.'],
    materialTitle: 'Apa itu Teks Deskripsi?',
    blocks: [
      { type: 'paragraph', text: 'Deskripsi artinya menggambarkan! Teks deskripsi menjelaskan ciri-ciri orang, hewan, benda, atau tempat (bentuk, warna, sifat) sehingga pendengar bisa membayangkannya.' },
    ],
    activityTitle: 'Latihan: Pengertian Deskripsi',
    questions: [
      { text: 'Teks yang menggambarkan ciri-ciri suatu benda atau hewan disebut teks...', opts: ['Deskripsi', 'Instruksi', 'Berita', 'Pantun'], ans: 0, exp: 'Teks deskripsi menggambarkan ciri objek.' },
      { text: 'Hal yang biasa diceritakan saat mendeskripsikan benda adalah...', opts: ['Warna, bentuk, dan kegunaannya', 'Harga tiket pesawat', 'Jadwal upacara', 'Nama tetangga'], ans: 0, exp: 'Warna, bentuk, ukuran, dan fungsi adalah ciri objek.' },
      { text: 'Tujuan mendeskripsikan benda dengan jelas adalah agar pembaca...', opts: ['Bingung', 'Dapat membayangkan benda tersebut', 'Lupa', 'Tidak mau membaca'], ans: 1, exp: 'Deskripsi yang baik membuat pembaca mudah membayangkan objek.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-03', subSeq: 2,
    objectives: ['Siswa mampu mendeskripsikan ciri fisik dan sifat baik seseorang secara sopan.'],
    materialTitle: 'Mendeskripsikan Orang dengan Sopan',
    blocks: [
      { type: 'example', title: 'Contoh Deskripsi Teman', text: 'Sahabatku bernama Raka. Rambutnya pendek dan rapi. Ia memakai kacamata. Raka anak yang ramah dan suka berbagi bekal.' },
      { type: 'tip', text: 'Saat mendeskripsikan orang, gunakan kata-kata yang sopan dan tidak mengejek!' },
    ],
    activityTitle: 'Latihan: Mendeskripsikan Orang',
    questions: [
      { text: 'Berdasarkan contoh di atas, sifat baik Raka adalah...', opts: ['Pemarah', 'Ramah dan suka berbagi', 'Malas', 'Sombong'], ans: 1, exp: 'Teks menyebutkan Raka ramah dan suka berbagi.' },
      { text: 'Ciri fisik yang diceritakan tentang Raka adalah...', opts: ['Suka bermain bola', 'Rambut pendek rapi dan berkacamata', 'Tinggal di desa', 'Suka nasi goreng'], ans: 1, exp: 'Rambut dan kacamata adalah ciri fisik yang tampak.' },
      { text: 'Saat mendeskripsikan teman, kita TIDAK BOLEH menggunakan kata yang...', opts: ['Sopan', 'Mengejek atau menyakiti hati', 'Jelas', 'Ramah'], ans: 1, exp: 'Deskripsi orang harus tetap santun.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-03', subSeq: 3,
    objectives: ['Siswa mampu mendeskripsikan ciri fisik, makanan, dan cara bergerak hewan.'],
    materialTitle: 'Mendeskripsikan Hewan',
    blocks: [
      { type: 'flashcards', title: 'Tebak Hewannya dari Deskripsi Ini!', cards: [
        { emoji: '🐇', front: 'Telinga panjang, bulu lembut, suka wortel, jalannya melompat', back: 'Kelinci!' },
        { emoji: '🐟', front: 'Hidup di air, punya sirip dan sisik, bergerak berenang', back: 'Ikan!' },
        { emoji: '🦒', front: 'Leher sangat panjang, bertotol cokelat, makan daun tinggi', back: 'Jerapah!' },
      ]},
    ],
    activityTitle: 'Latihan: Mendeskripsikan Hewan',
    questions: [
      { text: 'Hewan bertelinga panjang, berbulu lembut, dan suka melompat adalah...', opts: ['Ikan', 'Kelinci', 'Ular', 'Burung'], ans: 1, exp: 'Ciri-ciri tersebut adalah milik kelinci.' },
      { text: 'Bagian tubuh ikan yang digunakan untuk berenang adalah...', opts: ['Sayap', 'Sirip', 'Kaki empat', 'Tanduk'], ans: 1, exp: 'Ikan berenang menggunakan sirip.' },
      { text: 'Hewan yang memiliki sayap dan bisa terbang di udara adalah...', opts: ['Burung', 'Kucing', 'Sapi', 'Kambing'], ans: 0, exp: 'Burung bersayap dan terbang.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-03', subSeq: 4,
    objectives: ['Siswa mampu mendeskripsikan benda kesayangan dan tempat (rumah/kelas).'],
    materialTitle: 'Mendeskripsikan Benda dan Tempat',
    blocks: [
      { type: 'example', title: 'Contoh Deskripsi Kelas', text: 'Ruang kelasku luas dan bersih. Dindingnya dicat warna krem cerah. Di depan ada papan tulis putih, dan di pojok ada rak buku cerita.' },
    ],
    activityTitle: 'Latihan: Deskripsi Benda & Tempat',
    questions: [
      { text: 'Menurut contoh di atas, apa yang ada di pojok ruang kelas?', opts: ['Tempat tidur', 'Rak buku cerita', 'Kompor gas', 'Sepeda motor'], ans: 1, exp: 'Teks menyebut di pojok ada rak buku cerita.' },
      { text: 'Kata sifat yang menggambarkan ruang kelas pada teks adalah...', opts: ['Sempit dan kotor', 'Luas dan bersih', 'Gelap dan bau', 'Kecil dan rusak'], ans: 1, exp: 'Kalimat pertama menyebut "luas dan bersih".' },
      { text: 'Kalimat yang tepat untuk mendeskripsikan tas sekolah adalah...', opts: ['Tasku berwarna biru, punya dua kantong, dan kuat membawa buku.', 'Aku pergi ke pasar besok.', 'Siapa nama gurumu?', 'Tolong buka pintu.'], ans: 0, exp: 'Kalimat tersebut merinci warna, bagian, dan fungsi tas.' },
    ],
  },

  // BAB 4: CERITA PENGALAMAN
  {
    topicCode: 'BIND-SD2-04', subSeq: 1,
    objectives: ['Siswa memahami cerita pengalaman sebagai kisah nyata yang pernah dialami sendiri.'],
    materialTitle: 'Mengenal Cerita Pengalaman',
    blocks: [
      { type: 'story_panel', title: 'Pengalaman Menyenangkan!', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Hari Minggu kemarin aku pertama kali bisa naik sepeda roda dua tanpa jatuh!' },
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Hebat! Kisah nyata yang pernah kamu alami sendiri itulah yang disebut Cerita Pengalaman.' },
      ]},
    ],
    activityTitle: 'Latihan: Cerita Pengalaman',
    questions: [
      { text: 'Cerita pengalaman berisi kisah yang...', opts: ['Benar-benar pernah kita alami sendiri', 'Hanya khayalan dongeng hewan', 'Daftar belanja', 'Rumus berhitung'], ans: 0, exp: 'Cerita pengalaman adalah kisah nyata yang dialami.' },
      { text: 'Contoh pengalaman menyenangkan adalah...', opts: ['Berhasil naik sepeda sendiri bersama Ayah', 'Buku tulis hilang', 'Terjatuh di jalan', 'Sakit gigi'], ans: 0, exp: 'Berhasil belajar sepeda adalah pengalaman menyenangkan.' },
      { text: 'Pengalaman yang tidak menyenangkan (misalnya terjatuh) bisa memberi kita...', opts: ['Pelajaran agar lebih berhati-hati', 'Alasan berhenti bermain selamanya', 'Kemarahan', 'Tidak ada artinya'], ans: 0, exp: 'Setiap pengalaman memberi pelajaran berharga.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-04', subSeq: 2,
    objectives: ['Siswa mampu mengurutkan kejadian dengan kata penghubung waktu (mula-mula, kemudian, akhirnya).'],
    materialTitle: 'Menentukan Urutan Kejadian',
    blocks: [
      { type: 'visual_cards', title: 'Kata Penanda Urutan Cerita!', items: [
        { visual: '1️⃣', label: 'Mula-mula / Awalnya', caption: 'Kejadian pertama', speech: 'Mula-mula atau awalnya.' },
        { visual: '2️⃣', label: 'Kemudian / Lalu', caption: 'Kejadian berikutnya', speech: 'Kemudian atau lalu.' },
        { visual: '3️⃣', label: 'Akhirnya', caption: 'Penutup kejadian', speech: 'Akhirnya.' },
      ]},
    ],
    activityTitle: 'Latihan: Urutan Kejadian',
    questions: [
      { text: 'Kata yang tepat untuk membuka kejadian pertama dalam cerita adalah...', opts: ['Akhirnya', 'Mula-mula', 'Selesai', 'Karena'], ans: 1, exp: '"Mula-mula" menandai awal kejadian.' },
      { text: 'Kata yang digunakan untuk menutup hasil akhir kejadian adalah...', opts: ['Mula-mula', 'Akhirnya', 'Awalnya', 'Sebelum'], ans: 1, exp: '"Akhirnya" menandai akhir rangkaian peristiwa.' },
      { text: 'Urutan menanam bunga: (1) Siram air, (2) Masukkan tanah ke pot, (3) Tanam bibit.', opts: ['1 - 2 - 3', '2 - 3 - 1', '3 - 2 - 1', '2 - 1 - 3'], ans: 1, exp: 'Masukkan tanah dulu (2), tanam bibit (3), lalu siram (1).' },
    ],
  },
  {
    topicCode: 'BIND-SD2-04', subSeq: 3,
    objectives: ['Siswa mampu menceritakan pengalaman pribadi secara lisan dengan runtut.'],
    materialTitle: 'Menceritakan Pengalaman Pribadi',
    blocks: [
      { type: 'list', title: 'Tips Bercerita di Depan Teman', items: ['Sebutkan kapan dan di mana kejadiannya.', 'Ceritakan siapa saja yang bersamamu.', 'Ceritakan urutannya dengan suara jelas dan wajah ceria!'] },
    ],
    activityTitle: 'Latihan: Menceritakan Pengalaman',
    questions: [
      { text: 'Saat menceritakan pengalaman di depan teman, sebaiknya kita bercerita secara...', opts: ['Runtut dari awal sampai akhir', 'Melompat-lompat tidak jelas', 'Sangat pelan', 'Sambil menutup muka'], ans: 0, exp: 'Cerita yang runtut mudah dipahami pendengar.' },
      { text: '"Hari Minggu aku ikut Ibu ke pasar." Kalimat itu menjelaskan...', opts: ['Waktu, orang, dan tempat kejadian', 'Harga barang', 'Warna baju', 'Berat belanjaan'], ans: 0, exp: 'Hari Minggu (waktu), Ibu (orang), pasar (tempat).' },
      { text: 'Jika teman selesai menceritakan pengalamannya, kita bisa memberi...', opts: ['Tepuk tangan dan tanggapan ramah', 'Ejekan', 'Diam lalu pergi', 'Tertawa mengejek'], ans: 0, exp: 'Tepuk tangan menghargai keberanian teman bercerita.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-04', subSeq: 4,
    objectives: ['Siswa mampu menulis cerita pengalaman pendek 3–4 kalimat.'],
    materialTitle: 'Menulis Pengalaman Sederhana',
    blocks: [
      { type: 'example', title: 'Contoh Tulisan Pengalaman 4 Kalimat', text: 'Hari Minggu lalu aku berkunjung ke rumah Nenek. Di sana aku membantu Nenek menyiram tanaman. Setelah itu Nenek membuatkan pisang goreng hangat. Aku senang sekali bisa berlibur di rumah Nenek.' },
    ],
    activityTitle: 'Latihan: Menulis Pengalaman',
    questions: [
      { text: 'Dalam contoh tulisan di atas, apa yang dilakukan penulis di rumah Nenek?', opts: ['Membantu menyiram tanaman', 'Memancing ikan', 'Main layangan', 'Mencuci mobil'], ans: 0, exp: 'Kalimat kedua menyebut membantu Nenek menyiram tanaman.' },
      { text: 'Makanan yang dibuatkan Nenek adalah...', opts: ['Bakso', 'Pisang goreng hangat', 'Nasi kuning', 'Es krim'], ans: 1, exp: 'Kalimat ketiga menyebut pisang goreng hangat.' },
      { text: 'Saat menulis cerita pengalaman, hal yang perlu diperhatikan adalah...', opts: ['Huruf kapital, spasi, dan tanda titik', 'Menulis tanpa spasi', 'Hanya menulis 1 kata', 'Tidak memakai huruf besar'], ans: 0, exp: 'Ejaan rapi membuat tulisan enak dibaca.' },
    ],
  },

  // BAB 5: CERITA ANAK DAN FABEL
  {
    topicCode: 'BIND-SD2-05', subSeq: 1,
    objectives: ['Siswa mampu mengidentifikasi karakter/watak tokoh dalam fabel.'],
    materialTitle: 'Memahami Tokoh dan Karakter (Watak)',
    blocks: [
      { type: 'flashcards', title: 'Kenali Watak Tokoh Fabel!', cards: [
        { emoji: '🦊', front: 'Kancil', back: 'Cerdik & banyak akal' },
        { emoji: '🐜', front: 'Semut', back: 'Rajin & gotong royong' },
        { emoji: '🦗', front: 'Belalang (dalam kisah Semut & Belalang)', back: 'Suka menunda / kurang persiapan' },
      ]},
    ],
    activityTitle: 'Latihan: Tokoh & Karakter',
    questions: [
      { text: 'Sifat atau tabiat yang dimiliki tokoh dalam cerita disebut...', opts: ['Latar', 'Watak / karakter', 'Judul', 'Sampul'], ans: 1, exp: 'Watak atau karakter adalah sifat tokoh.' },
      { text: 'Dalam kisah Semut dan Belalang, Semut mengumpulkan makanan sebelum musim hujan karena ia bersifat...', opts: ['Malas', 'Rajin dan mau bersiap', 'Sombong', 'Pelupa'], ans: 1, exp: 'Semut rajin mempersiapkan persediaan makanan.' },
      { text: 'Tokoh yang suka membantu teman yang kesusahan memiliki watak...', opts: ['Sombong', 'Baik hati / penolong', 'Kikir', 'Pemarah'], ans: 1, exp: 'Suka membantu adalah watak baik hati/penolong.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-05', subSeq: 2,
    objectives: ['Siswa mampu mengenali latar tempat dan latar waktu dalam cerita.'],
    materialTitle: 'Mengenali Latar Tempat dan Waktu',
    blocks: [
      { type: 'visual_cards', title: 'Dua Jenis Latar Cerita!', items: [
        { visual: '🌲', label: 'Latar Tempat', caption: 'Di hutan, di tepi sungai, di sekolah', speech: 'Latar tempat menjawab pertanyaan di mana cerita terjadi.' },
        { visual: '🌅', label: 'Latar Waktu', caption: 'Pagi hari, sore hari, malam hari', speech: 'Latar waktu menjawab pertanyaan kapan cerita terjadi.' },
      ]},
    ],
    activityTitle: 'Latihan: Latar Cerita',
    questions: [
      { text: '"Pada suatu pagi yang cerah, Kancil berjalan di tepi sungai." Latar TEMPAT cerita tersebut adalah...', opts: ['Pagi yang cerah', 'Di tepi sungai', 'Kancil', 'Berjalan'], ans: 1, exp: 'Di tepi sungai menunjukkan tempat kejadian.' },
      { text: 'Latar WAKTU pada kalimat di atas adalah...', opts: ['Di tepi sungai', 'Pagi yang cerah', 'Kancil', 'Sungai'], ans: 1, exp: 'Pagi yang cerah menunjukkan waktu.' },
      { text: 'Latar tempat menjawab pertanyaan...', opts: ['Siapa?', 'Di mana?', 'Berapa?', 'Mengapa?'], ans: 1, exp: 'Tempat selalu menjawab "Di mana?".' },
    ],
  },
  {
    topicCode: 'BIND-SD2-05', subSeq: 3,
    objectives: ['Siswa mampu memahami hubungan sebab-akibat urutan peristiwa dalam cerita.'],
    materialTitle: 'Memahami Urutan Peristiwa Cerita',
    blocks: [
      { type: 'worked_example', level: 'Dasar', question: 'Dalam cerita Semut & Belalang: Belalang hanya bernyanyi sepanjang musim kemarau. Akibatnya saat musim hujan tiba, apa yang terjadi?', steps: ['Sebab: Belalang tidak menyimpan makanan.', 'Akibat: Belalang kelaparan saat musim hujan.'], answer: 'Belalang tidak punya makanan dan kelaparan.' },
    ],
    activityTitle: 'Latihan: Urutan Peristiwa Fabel',
    questions: [
      { text: 'Mengapa Belalang kelaparan di musim hujan?', opts: ['Karena ia tidak menyiapkan makanan saat kemarau', 'Karena makanannya terlalu banyak', 'Karena ia membantu semut', 'Karena hari cerah'], ans: 0, exp: 'Belalang bermain terus dan tidak menabung makanan.' },
      { text: 'Apa yang dilakukan Semut saat Belalang datang meminta bantuan?', opts: ['Berbagi makanan dan menasihati agar rajin bekerja', 'Mengejeknya', 'Mengusirnya jauh-jauh', 'Ikut malas'], ans: 0, exp: 'Semut menunjukkan kebaikan hati sekaligus memberi nasihat.' },
      { text: 'Peristiwa yang terjadi paling awal dalam cerita Semut dan Belalang adalah...', opts: ['Musim hujan turun', 'Semut rajin mengumpulkan makanan di musim kemarau', 'Belalang meminta maaf', 'Semut tidur'], ans: 1, exp: 'Cerita dimulai saat musim kemarau.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-05', subSeq: 4,
    objectives: ['Siswa mampu menyimpulkan pesan moral (amanat) dari fabel dan menerapkannya.'],
    materialTitle: 'Menemukan Pesan Cerita (Amanat)',
    blocks: [
      { type: 'tip', text: 'Cara mudah cari amanat: tanyakan pada dirimu, "Kebaikan apa yang bisa aku tiru dari cerita ini?"' },
    ],
    activityTitle: 'Latihan: Pesan Cerita',
    questions: [
      { text: 'Pesan moral dari cerita Semut dan Belalang adalah...', opts: ['Kita harus rajin berusaha dan menabung sebelum kesulitan datang', 'Lebih baik bermain terus tanpa belajar', 'Jangan mau berteman dengan semut', 'Hujan itu menakutkan'], ans: 0, exp: 'Cerita mengajarkan kerja keras dan persiapan.' },
      { text: 'Jika ada cerita tentang anak yang selalu berkata jujur meski takut dimarahi, pesannya adalah...', opts: ['Berani berkata jujur itu perbuatan mulia', 'Lebih baik berbohong', 'Jangan bicara dengan orang tua', 'Menyembunyikan kesalahan'], ans: 0, exp: 'Amanatnya adalah keberanian untuk jujur.' },
      { text: 'Pesan kebaikan dalam cerita disebut juga...', opts: ['Amanat', 'Latar', 'Tokoh', 'Paragraf'], ans: 0, exp: 'Amanat = pesan moral.' },
    ],
  },

  // BAB 6: TEKS INSTRUKSI
  {
    topicCode: 'BIND-SD2-06', subSeq: 1,
    objectives: ['Siswa mengenal teks petunjuk (instruksi) untuk melakukan sesuatu dengan benar.'],
    materialTitle: 'Mengenal Petunjuk Sederhana',
    blocks: [
      { type: 'paragraph', text: 'Teks petunjuk (instruksi) memberi tahu cara melakukan sesuatu langkah demi langkah agar hasilnya benar dan aman! Contohnya: cara mencuci tangan atau cara menyeduh susu.' },
    ],
    activityTitle: 'Latihan: Petunjuk Sederhana',
    questions: [
      { text: 'Teks yang berisi langkah-langkah melakukan suatu kegiatan disebut teks...', opts: ['Petunjuk / instruksi', 'Fabel', 'Puisi', 'Biodata'], ans: 0, exp: 'Teks instruksi berisi panduan langkah kegiatan.' },
      { text: 'Contoh teks petunjuk di rumah adalah...', opts: ['Cara mencuci tangan pakai sabun', 'Dongeng Kancil', 'Puisi Pelangi', 'Daftar nama teman'], ans: 0, exp: 'Cara mencuci tangan berisi langkah-langkah.' },
      { text: 'Mengapa kita perlu membaca petunjuk dengan teliti?', opts: ['Agar kegiatan berhasil dan aman', 'Agar lama selesai', 'Agar salah langkah', 'Tidak perlu dibaca'], ans: 0, exp: 'Mengikuti petunjuk memastikan hasil benar dan aman.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-06', subSeq: 2,
    objectives: ['Siswa memahami pentingnya urutan langkah (1, 2, 3...) dalam petunjuk.'],
    materialTitle: 'Memahami Urutan Langkah Petunjuk',
    blocks: [
      { type: 'list', title: 'Cara Mencuci Tangan yang Benar', items: ['1. Basahi tangan dengan air mengalir.', '2. Gosok telapak, punggung tangan, dan sela jari dengan sabun.', '3. Bilas sampai bersih dengan air mengalir.', '4. Keringkan tangan dengan handuk bersih.'] },
    ],
    activityTitle: 'Latihan: Urutan Langkah',
    questions: [
      { text: 'Langkah PERTAMA saat mencuci tangan adalah...', opts: ['Mengeringkan dengan handuk', 'Membasahi tangan dengan air mengalir', 'Membilas sabun', 'Langsung makan'], ans: 1, exp: 'Tangan dibasahi air dulu sebelum diberi sabun.' },
      { text: 'Setelah menggosok tangan dengan sabun, langkah berikutnya adalah...', opts: ['Membilas dengan air mengalir sampai bersih', 'Memakai sarung tangan', 'Menyentuh tanah', 'Menambah sabun terus'], ans: 0, exp: 'Busa sabun harus dibilas sampai bersih.' },
      { text: 'Dalam teks petunjuk, langkah-langkah sebaiknya diberi...', opts: ['Nomor urut (1, 2, 3...)', 'Tanda tanya semua', 'Nama hewan', 'Acak tanpa urutan'], ans: 0, exp: 'Nomor urut memudahkan pembaca mengikuti urutan.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-06', subSeq: 3,
    objectives: ['Siswa mampu membaca dan mempraktikkan petunjuk kegiatan sederhana.'],
    materialTitle: 'Membaca Petunjuk Kegiatan',
    blocks: [
      { type: 'list', title: 'Petunjuk Membuat Teh Manis Hangat (Bersama Orang Tua)', items: ['1. Siapkan gelas, sendok, teh celup, dan gula.', '2. Masukkan 1 kantong teh dan 1 sendok gula ke gelas.', '3. Minta bantuan orang tua menuangkan air hangat.', '4. Aduk perlahan hingga gula larut.'] },
      { type: 'tip', text: 'Kata kerja dalam petunjuk biasanya berbentuk perintah halus: Siapkan, Masukkan, Aduk, Bilas!' },
    ],
    activityTitle: 'Latihan: Membaca Petunjuk Kegiatan',
    questions: [
      { text: 'Alat untuk mengaduk gula agar larut adalah...', opts: ['Garpu', 'Sendok', 'Piring', 'Pisau'], ans: 1, exp: 'Sendok dipakai untuk mengaduk minuman.' },
      { text: 'Mengapa menuang air panas sebaiknya dibantu orang tua?', opts: ['Agar aman dan tidak terkena air panas', 'Karena gelas terlalu berat', 'Agar teh tidak manis', 'Supaya cepat dingin'], ans: 0, exp: 'Air panas berbahaya jika tumpah pada anak.' },
      { text: 'Kata "Masukkan" dan "Aduk" termasuk kata...', opts: ['Perintah / petunjuk', 'Tanya', 'Sifat', 'Sapaan'], ans: 0, exp: 'Teks instruksi menggunakan kata kerja perintah.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-06', subSeq: 4,
    objectives: ['Siswa mampu menyusun petunjuk sederhana 3–4 langkah secara runtut.'],
    materialTitle: 'Menulis Petunjuk Sederhana',
    blocks: [
      { type: 'worked_example', level: 'Dasar', question: 'Susun petunjuk menggosok gigi: (A) Kumur dengan air bersih, (B) Oleskan pasta gigi ke sikat, (C) Sikat semua bagian gigi pelan-pelan.', steps: ['Langkah 1: Oleskan pasta gigi (B).', 'Langkah 2: Sikat semua bagian gigi (C).', 'Langkah 3: Kumur dengan air bersih (A).'], answer: 'B → C → A' },
    ],
    activityTitle: 'Latihan: Menulis Petunjuk',
    questions: [
      { text: 'Kalimat petunjuk yang JELAS dan SINGKAT adalah...', opts: ['Lipat kertas menjadi dua bagian sama besar.', 'Kertasnya mungkin bisa dilipat kalau mau ya.', 'Siapa yang punya kertas?', 'Kertas itu berwarna merah.'], ans: 0, exp: 'Petunjuk harus singkat, jelas, dan langsung pada tindakan.' },
      { text: 'Langkah terakhir setelah meraut pensil adalah...', opts: ['Membuang sampah serutan ke tempat sampah', 'Membuang sampah ke kolong meja', 'Mematahkan pensil', 'Menyembunyikan rautan'], ans: 0, exp: 'Menjaga kebersihan adalah penutup kegiatan yang baik.' },
      { text: 'Saat menulis petunjuk, kalimat sebaiknya diawali kata...', opts: ['Kata kerja perintah (Siapkan, Potong, Tempel)', 'Kata tanya (Siapa, Kapan)', 'Nama hewan', 'Angka acak'], ans: 0, exp: 'Petunjuk diawali kata kerja tindakan.' },
    ],
  },

  // BAB 7: PERCAKAPAN DAN MENCERITAKAN KEMBALI
  {
    topicCode: 'BIND-SD2-07', subSeq: 1,
    objectives: ['Siswa mampu melakukan tanya jawab dalam percakapan secara bergantian dan sopan.'],
    materialTitle: 'Bertanya dan Menjawab dalam Percakapan',
    blocks: [
      { type: 'story_panel', title: 'Percakapan Sopan', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Bima, buku cerita apa yang sedang kamu baca?' },
        { speaker: 'Bima', avatar: '👦', text: 'Aku sedang membaca cerita tentang nelayan di pesisir. Seru lho!' },
      ]},
    ],
    activityTitle: 'Latihan: Bertanya & Menjawab',
    questions: [
      { text: 'Dalam percakapan yang baik, kita berbicara secara...', opts: ['Bergantian dan saling mendengarkan', 'Bersamaan saling berebut', 'Sambil berteriak', 'Tidak menjawab'], ans: 0, exp: 'Berbicara bergantian membuat percakapan jelas dan sopan.' },
      { text: 'Jawaban yang nyambung untuk pertanyaan "Kapan kamu les matematika?" adalah...', opts: ['Setiap hari Selasa dan Kamis sore.', 'Di rumah Bu Guru.', 'Aku suka apel.', 'Namaku Bima.'], ans: 0, exp: '"Kapan" menanyakan waktu, dijawab dengan hari/jam.' },
      { text: 'Saat orang lain bertanya kepada kita, sebaiknya kita menatapnya dengan...', opts: ['Ramah', 'Cemberut', 'Membuang muka', 'Marah'], ans: 0, exp: 'Kontak mata ramah menunjukkan rasa hormat.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-07', subSeq: 2,
    objectives: ['Siswa mampu menanggapi pendapat teman dengan santun (setuju maupun berbeda pendapat).'],
    materialTitle: 'Menanggapi Pendapat Teman dengan Santun',
    blocks: [
      { type: 'flashcards', title: 'Cara Menanggapi yang Baik!', cards: [
        { emoji: '👍', front: 'Jika SETUJU', back: '"Aku setuju dengan pendapatmu karena..."' },
        { emoji: '🤝', front: 'Jika BERBEDA pendapat', back: '"Pendapatmu bagus, tapi menurutku lebih baik..."' },
      ]},
    ],
    activityTitle: 'Latihan: Menanggapi Pendapat',
    questions: [
      { text: 'Cara menolak usul teman secara SOPAN adalah...', opts: ['Usulmu jelek!', 'Usulmu bagus, tetapi bagaimana kalau kita coba cara ini juga?', 'Tidak mau!', 'Diam kamu!'], ans: 1, exp: 'Menghargai dulu lalu memberi saran adalah cara paling santun.' },
      { text: 'Tanggapan setuju yang baik adalah...', opts: ['Aku setuju, ide itu sangat membantu kelas kita.', 'Terserah deh.', 'Bosan ah.', 'Tidak peduli.'], ans: 0, exp: 'Menyampaikan persetujuan disertai alasan menunjukkan perhatian.' },
      { text: 'Mengapa kita harus sopan saat berbeda pendapat?', opts: ['Agar pertemanan tetap rukun', 'Agar menang sendiri', 'Agar teman takut', 'Tidak perlu sopan'], ans: 0, exp: 'Kesantunan menjaga kerukunan.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-07', subSeq: 3,
    objectives: ['Siswa mampu menceritakan kembali isi bacaan menggunakan bahasa sendiri.'],
    materialTitle: 'Menceritakan Kembali Isi Cerita',
    blocks: [
      { type: 'list', title: '3 Kunci Menceritakan Kembali', items: ['Ingat siapa tokohnya dan di mana tempatnya.', 'Ceritakan kejadian utamanya dari awal sampai akhir.', 'Gunakan kalimatmu sendiri, tidak harus menghafal kata per kata!'] },
    ],
    activityTitle: 'Latihan: Menceritakan Kembali',
    questions: [
      { text: 'Saat menceritakan kembali isi cerita yang sudah dibaca, kita boleh menggunakan...', opts: ['Kalimat sendiri yang mudah dipahami', 'Cerita lain yang berbeda', 'Bahasa yang tidak jelas', 'Hanya judulnya saja'], ans: 0, exp: 'Menceritakan kembali berarti memahami isi lalu menyampaikan dengan bahasa sendiri.' },
      { text: 'Hal penting yang HARUS ada saat menceritakan kembali cerita adalah...', opts: ['Tokoh dan peristiwa pentingnya', 'Harga bukunya', 'Jumlah halamannya', 'Warna sampulnya'], ans: 0, exp: 'Tokoh dan alur peristiwa adalah inti cerita.' },
      { text: 'Agar bisa menceritakan kembali dengan baik, saat membaca kita harus...', opts: ['Membaca dengan sungguh-sungguh dan memahami isinya', 'Membaca sambil bermain', 'Melompati halaman', 'Hanya melihat gambar'], ans: 0, exp: 'Memahami bacaan adalah syarat utama.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-07', subSeq: 4,
    objectives: ['Siswa mampu mengungkapkan perasaan dan alasan perasaannya dalam kalimat utuh.'],
    materialTitle: 'Mengungkapkan Perasaan Beserta Alasannya',
    blocks: [
      { type: 'example', title: 'Gunakan Kata "karena"', text: '• "Aku bangga karena berhasil menyelesaikan soal matematika sendiri."\n• "Aku terharu karena teman-teman menjengukku saat sakit."' },
    ],
    activityTitle: 'Latihan: Mengungkapkan Perasaan',
    questions: [
      { text: 'Kata penghubung untuk menjelaskan alasan perasaan kita adalah...', opts: ['karena', 'atau', 'dan', 'di'], ans: 0, exp: '"karena" menghubungkan perasaan dengan sebabnya.' },
      { text: 'Perasaan yang muncul saat berhasil membantu orang tua adalah...', opts: ['Bangga dan senang', 'Takut', 'Marah', 'Malas'], ans: 0, exp: 'Membantu orang tua menimbulkan rasa senang dan bangga.' },
      { text: '"Aku merasa cemas karena belum belajar untuk ulangan." Arti "cemas" adalah...', opts: ['Sangat senang', 'Khawatir / gelisah', 'Mengantuk', 'Kenyang'], ans: 1, exp: 'Cemas artinya khawatir atau gelisah.' },
    ],
  },

  // BAB 8: MENULIS TEKS SEDERHANA
  {
    topicCode: 'BIND-SD2-08', subSeq: 1,
    objectives: ['Siswa mampu menulis 2–3 kalimat utuh berdasarkan gambar seri sederhana.'],
    materialTitle: 'Menulis Kalimat Berdasarkan Gambar',
    blocks: [
      { type: 'worked_example', level: 'Dasar', question: 'Gambar: 👧🪴💧 (Alya membawa gembor menyiram bunga di taman). Tulis 2 kalimat!', steps: ['Kalimat 1: Ceritakan siapa dan apa yang dilakukan.', 'Kalimat 2: Ceritakan hasilnya.'], answer: 'Alya menyiram bunga di taman setiap sore. Bunga-bunga itu tumbuh subur dan indah.' },
    ],
    activityTitle: 'Latihan: Menulis dari Gambar',
    questions: [
      { text: 'Kalimat yang sesuai dengan gambar 👦🧹🏫 adalah...', opts: ['Bima menyapu lantai kelas bersama petugas piket.', 'Bima berenang di laut.', 'Bima membeli es krim.', 'Bima tidur di kamar.'], ans: 0, exp: 'Sapu dan sekolah menunjukkan kegiatan piket menyapu kelas.' },
      { text: 'Sebelum menulis kalimat dari gambar, kita perlu...', opts: ['Mengamati tokoh, tempat, dan kegiatan pada gambar', 'Menutup gambar', 'Langsung menggambar ulang', 'Menghitung warna'], ans: 0, exp: 'Mengamati detail gambar membantu membuat kalimat tepat.' },
      { text: 'Setiap kalimat yang kita tulis harus diakhiri tanda baca...', opts: ['Titik (.), tanya (?), atau seru (!)', 'Tidak perlu tanda baca', 'Tanda sama dengan (=)', 'Tanda kali (×)'], ans: 0, exp: 'Tanda baca akhir memperjelas maksud kalimat.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-08', subSeq: 2,
    objectives: ['Siswa mampu menyusun cerita pendek sederhana 4–5 kalimat.'],
    materialTitle: 'Menyusun Cerita Pendek',
    blocks: [
      { type: 'list', title: 'Kerangka Cerita Pendek Kelas 2', items: ['Judul cerita yang menarik.', 'Awal: kenalkan tokoh dan tempat.', 'Tengah: ceritakan kejadian seru.', 'Akhir: tuliskan penutup dan perasaan tokoh.'] },
    ],
    activityTitle: 'Latihan: Menyusun Cerita Pendek',
    questions: [
      { text: 'Bagian paling atas dari sebuah cerita pendek disebut...', opts: ['Judul', 'Penutup', 'Halaman', 'Koma'], ans: 0, exp: 'Judul diletakkan di bagian atas cerita.' },
      { text: 'Judul cerita yang menarik untuk pengalaman berkebun adalah...', opts: ['Serunya Menanam Tomat di Halaman', 'Meja Kursi', 'Satu Dua Tiga', 'Hari'], ans: 0, exp: 'Judul tersebut menggambarkan isi cerita secara menarik.' },
      { text: 'Cerita pendek sebaiknya disusun secara...', opts: ['Runtut dari awal, tengah, hingga akhir', 'Terbalik-balik', 'Tanpa tokoh', 'Tanpa tanda titik'], ans: 0, exp: 'Alur runtut membuat cerita enak dibaca.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-08', subSeq: 3,
    objectives: ['Siswa mampu menulis paragraf deskripsi sederhana tentang benda atau hewan favorit.'],
    materialTitle: 'Menulis Deskripsi Benda/Hewan Favorit',
    blocks: [
      { type: 'example', title: 'Contoh Menulis Deskripsi', text: 'Aku mempunyai seekor kucing bernama Oren. Bulunya berwarna jingga dengan garis putih. Matanya bulat dan ekornya panjang. Oren suka bermain bola benang di teras.' },
    ],
    activityTitle: 'Latihan: Menulis Deskripsi',
    questions: [
      { text: 'Kalimat yang paling tepat untuk melengkapi deskripsi "Sepedaku berwarna merah..." adalah...', opts: ['Rodanya ada dua dan belnya berbunyi nyaring.', 'Kemarin aku makan soto.', 'Siapa nama guruku?', 'Jangan lupa cuci tangan.'], ans: 0, exp: 'Kalimat tersebut melanjutkan rincian ciri sepeda.' },
      { text: 'Saat menulis deskripsi hewan, kita bisa menceritakan...', opts: ['Warna bulu, bentuk tubuh, makanan, dan kebiasaannya', 'Jadwal pelajaran', 'Rumus penjumlahan', 'Nama presiden'], ans: 0, exp: 'Ciri fisik dan kebiasaan adalah unsur deskripsi hewan.' },
      { text: 'Kata "bulat", "panjang", dan "lembut" dalam teks deskripsi berfungsi sebagai...', opts: ['Kata sifat untuk merinci objek', 'Kata tanya', 'Kata perintah', 'Angka'], ans: 0, exp: 'Kata sifat membuat gambaran objek semakin jelas.' },
    ],
  },
  {
    topicCode: 'BIND-SD2-08', subSeq: 4,
    objectives: ['Siswa mampu menulis puisi anak sederhana 1 bait (4 baris).'],
    materialTitle: 'Menulis Puisi Anak Sederhana',
    blocks: [
      { type: 'story_panel', title: 'Contoh Puisi 4 Baris: Sahabatku', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Sahabatku yang baik hati / Selalu menemani setiap hari / Belajar bersama penuh tawa / Semoga kita rukun selamanya.' },
      ]},
      { type: 'tip', text: 'Pilih 1 tema yang kamu sukai (Ibu, Sekolah, Kucing, Pelangi), lalu tulis 4 baris pendek yang indah!' },
    ],
    activityTitle: 'Latihan: Menulis Puisi Anak',
    questions: [
      { text: 'Puisi "Sahabatku" di atas terdiri dari berapa baris?', opts: ['2 baris', '3 baris', '4 baris', '6 baris'], ans: 2, exp: 'Terdapat 4 baris dalam satu bait.' },
      { text: 'Baris "Selalu menemani setiap hari" berima (bunyi akhir sama) dengan baris...', opts: ['Sahabatku yang baik hati', 'Belajar bersama penuh tawa', 'Semoga kita rukun selamanya', 'Semua salah'], ans: 0, exp: '"hati" dan "hari" sama-sama berakhir bunyi -i.' },
      { text: 'Langkah pertama sebelum menulis puisi anak adalah menentukan...', opts: ['Tema / topik puisi', 'Harga kertas', 'Jumlah pensil', 'Nama toko buku'], ans: 0, exp: 'Menentukan tema mempermudah memilih kata-kata indah.' },
    ],
  },
];

upsertLessonsBatch('Kelas 2 SD — Bahasa Indonesia (8 Bab, 32 Submateri)', LESSONS).catch((err) => {
  console.error(err);
  process.exit(1);
});

