import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: MENGENAL HURUF DAN BUNYI
  {
    topicCode: 'BIND-SD1-01', subSeq: 1,
    objectives: ['Siswa mampu menyebutkan 5 huruf vokal (a, i, u, e, o).', 'Siswa mampu menemukan huruf vokal pada kata sederhana.'],
    materialTitle: 'Yuk Kenal 5 Huruf Vokal (A, I, U, E, O)!',
    blocks: [
      { type: 'story_panel', title: 'Kenalan dengan Huruf Hidup!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Huruf vokal itu huruf hidup! Bunyinya keluar lancar dari mulut kita.' },
        { speaker: 'Alya', avatar: '👧', text: 'Ada lima ya Bu: A, I, U, E, O! Yuk kita klik kartunya!' },
      ]},
      { type: 'visual_cards', title: 'Klik Setiap Huruf Vokal untuk Mendengar!', items: [
        { visual: '🍎', label: 'A / a', caption: 'Apel, Ayam', speech: 'A. Seperti pada kata apel dan ayam.' },
        { visual: '🐟', label: 'I / i', caption: 'Ikan, Ibu', speech: 'I. Seperti pada kata ikan dan ibu.' },
        { visual: '🐍', label: 'U / u', caption: 'Ular, Uang', speech: 'U. Seperti pada kata ular dan uang.' },
        { visual: '🪣', label: 'E / e', caption: 'Ember, Elang', speech: 'E. Seperti pada kata ember dan elang.' },
        { visual: '💊', label: 'O / o', caption: 'Obat, Obor', speech: 'O. Seperti pada kata obat dan obor.' },
      ]},
      { type: 'teacher_note', text: 'Minta anak menirukan bentuk mulut terbuka saat mengucapkan A-I-U-E-O berulang sambil menunjuk kartu.' },
    ],
    activityTitle: 'Latihan: Huruf Vokal',
    questions: [
      { text: 'Kelima huruf vokal adalah...', opts: ['a, b, c, d, e', 'a, i, u, e, o', 'b, c, d, f, g', 'a, i, k, l, o'], ans: 1, exp: 'Lima huruf vokal bahasa Indonesia adalah a, i, u, e, dan o.' },
      { text: 'Huruf vokal pada kata "BUKU" adalah...', opts: ['B dan K', 'U dan U', 'B dan U', 'K dan U'], ans: 1, exp: 'Pada B-U-K-U, huruf vokalnya adalah U.' },
      { text: 'Kata yang diawali huruf vokal "I" adalah...', opts: ['Ikan', 'Bola', 'Meja', 'Tas'], ans: 0, exp: '"Ikan" diawali huruf vokal I.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-01', subSeq: 2,
    objectives: ['Siswa mengenal huruf konsonan (selain a, i, u, e, o).', 'Siswa mampu membedakan huruf vokal dan konsonan.'],
    materialTitle: 'Mengenal Huruf Konsonan (Huruf Mati)',
    blocks: [
      { type: 'paragraph', text: 'Selain A, I, U, E, O, semua huruf lainnya disebut huruf konsonan! Jumlahnya ada 21 huruf, seperti B, C, D, F, G, H, K, L, M, N, P, R, S, T.' },
      { type: 'visual_cards', title: 'Contoh Huruf Konsonan Sehari-hari (Klik!)', items: [
        { visual: '⚽', label: 'B / b', caption: 'Bola', speech: 'B untuk bola.' },
        { visual: '🪑', label: 'K / k', caption: 'Kursi', speech: 'K untuk kursi.' },
        { visual: '🐱', label: 'M / m', caption: 'Meong / Meja', speech: 'M untuk meja.' },
        { visual: '✏️', label: 'P / p', caption: 'Pensil', speech: 'P untuk pensil.' },
        { visual: '👟', label: 'S / s', caption: 'Sepatu', speech: 'S untuk sepatu.' },
      ]},
      { type: 'tip', text: 'Ingat mudah: Jika BUKAN a, i, u, e, o, berarti itu huruf KONSONAN!' },
    ],
    activityTitle: 'Latihan: Huruf Konsonan',
    questions: [
      { text: 'Manakah yang merupakan huruf KONSONAN?', opts: ['a', 'i', 'b', 'o'], ans: 2, exp: 'b adalah konsonan, sedangkan a, i, o adalah huruf vokal.' },
      { text: 'Kata "TOPI" diawali huruf konsonan...', opts: ['T', 'O', 'P', 'I'], ans: 0, exp: 'Huruf pertama kata TOPI adalah T.' },
      { text: 'Huruf konsonan pada kata "IBU" adalah...', opts: ['I', 'B', 'U', 'I dan U'], ans: 1, exp: 'I dan U adalah vokal, sedangkan B adalah konsonan.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-01', subSeq: 3,
    objectives: ['Siswa mampu membedakan bunyi huruf yang mirip seperti b–d, p–b, dan m–n.'],
    materialTitle: 'Membedakan Bunyi Huruf yang Mirip',
    blocks: [
      { type: 'paragraph', text: 'Ada beberapa huruf yang bunyinya atau bentuknya mirip, seperti B dan D, atau M dan N. Ayo dengarkan bedanya!' },
      { type: 'flashcards', title: 'Klik Kartu untuk Bandingkan Bunyinya!', cards: [
        { emoji: '⚽', front: 'B vs D', back: 'B = Bola | D = Dadu', hint: 'B perut di kanan, D perut di kiri' },
        { emoji: '✏️', front: 'P vs B', back: 'P = Paku | B = Baku', hint: 'P diucapkan lebih ringan' },
        { emoji: '🍽️', front: 'M vs N', back: 'M = Makan | N = Nasi', hint: 'M punya 3 kaki, N punya 2 kaki' },
      ]},
      { type: 'teacher_note', text: 'Latih pelafalan pasangan minimal (baku-paku, mata-nata, bola-dola) secara lisan bersama siswa.' },
    ],
    activityTitle: 'Latihan: Membedakan Bunyi Huruf',
    questions: [
      { text: 'Kata "Bola" diawali huruf...', opts: ['d', 'b', 'p', 'q'], ans: 1, exp: 'Bola diawali huruf b.' },
      { text: 'Kata "Nasi" diawali huruf...', opts: ['m', 'n', 'w', 'u'], ans: 1, exp: 'Nasi diawali huruf n.' },
      { text: 'Pasangan kata yang huruf awalnya SAMA adalah...', opts: ['Buku dan Dadu', 'Paku dan Pensil', 'Meja dan Nanas', 'Bola dan Topi'], ans: 1, exp: 'Paku dan Pensil sama-sama diawali huruf P.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-01', subSeq: 4,
    objectives: ['Siswa mampu menghubungkan lambang huruf dengan bunyi awal gambar benda.'],
    materialTitle: 'Menghubungkan Huruf dengan Bunyinya',
    blocks: [
      { type: 'visual_cards', title: 'Dengarkan Bunyi Awal Setiap Benda!', items: [
        { visual: '🦆', label: 'B', caption: 'Bebek', speech: 'Beh, bebek.' },
        { visual: '🐘', label: 'G', caption: 'Gajah', speech: 'Geh, gajah.' },
        { visual: '🍊', label: 'J', caption: 'Jeruk', speech: 'Jeh, jeruk.' },
        { visual: '🐇', label: 'K', caption: 'Kelinci', speech: 'Kah, kelinci.' },
        { visual: '🏠', label: 'R', caption: 'Rumah', speech: 'Er, rumah.' },
      ]},
      { type: 'worked_example', level: 'Dasar', question: 'Gambar 🐘 (Gajah) bunyi huruf pertamanya adalah...', steps: ['Ucapkan pelan: Ga-jah.', 'Bunyi paling depan adalah huruf G.'], answer: 'Huruf G' },
    ],
    activityTitle: 'Latihan: Huruf & Bunyinya',
    questions: [
      { text: 'Huruf awal dari kata 🍊 "Jeruk" adalah...', opts: ['G', 'J', 'C', 'D'], ans: 1, exp: 'Jeruk diawali huruf J.' },
      { text: 'Benda yang diawali bunyi huruf "R" adalah...', opts: ['Rumah', 'Meja', 'Buku', 'Sapu'], ans: 0, exp: 'Rumah diawali huruf R.' },
      { text: 'Huruf awal dari 🐇 "Kelinci" adalah...', opts: ['C', 'G', 'K', 'T'], ans: 2, exp: 'Kelinci diawali huruf K.' },
    ],
  },

  // BAB 2: MEMBACA SUKU KATA DAN KATA
  {
    topicCode: 'BIND-SD1-02', subSeq: 1,
    objectives: ['Siswa mengenal suku kata gabungan konsonan + vokal (ba, bi, bu, be, bo).'],
    materialTitle: 'Mengenal Suku Kata (Ba–Bi–Bu–Be–Bo)',
    blocks: [
      { type: 'paragraph', text: 'Kalau huruf konsonan digabung dengan huruf vokal, jadilah SUKU KATA! Misalnya B + A = BA.' },
      { type: 'visual_cards', title: 'Klik & Tirukan Suku Kata!', items: [
        { visual: '👕', label: 'ba', caption: 'ba-ju', speech: 'ba. ba-ju.' },
        { visual: '🔵', label: 'bi', caption: 'bi-ru', speech: 'bi. bi-ru.' },
        { visual: '📘', label: 'bu', caption: 'bu-ku', speech: 'bu. bu-ku.' },
        { visual: '🦆', label: 'be', caption: 'be-bek', speech: 'be. be-bek.' },
        { visual: '⚽', label: 'bo', caption: 'bo-la', speech: 'bo. bo-la.' },
      ]},
      { type: 'teacher_note', text: 'Gunakan tepuk tangan satu kali untuk setiap suku kata: ba (tepuk) - ju (tepuk)!' },
    ],
    activityTitle: 'Latihan: Mengenal Suku Kata',
    questions: [
      { text: 'Huruf "m" digabung huruf "a" dibaca...', opts: ['mi', 'ma', 'mu', 'me'], ans: 1, exp: 'm + a dibaca "ma".' },
      { text: 'Suku kata pertama dari kata "buku" adalah...', opts: ['ba', 'bi', 'bu', 'bo'], ans: 2, exp: 'bu-ku diawali suku kata "bu".' },
      { text: 'Kata "bola" terdiri dari suku kata...', opts: ['bo - la', 'b - ola', 'bol - a', 'ba - la'], ans: 0, exp: 'Penggalan suku kata bola adalah bo-la.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-02', subSeq: 2,
    objectives: ['Siswa mampu membaca kata dua suku kata sederhana dengan lancar.'],
    materialTitle: 'Membaca Kata Sederhana',
    blocks: [
      { type: 'flashcards', title: 'Baca Dulu, Lalu Klik untuk Mendengar!', cards: [
        { emoji: '👩', front: 'i - bu', back: 'IBU', hint: 'Ibu tercinta' },
        { emoji: '⚽', front: 'bo - la', back: 'BOLA', hint: 'Main bola' },
        { emoji: '👁️', front: 'ma - ta', back: 'MATA', hint: 'Untuk melihat' },
        { emoji: '👒', front: 'to - pi', back: 'TOPI', hint: 'Dipakai di kepala' },
        { emoji: '🥛', front: 'su - su', back: 'SUSU', hint: 'Minuman sehat' },
        { emoji: '🪑', front: 'me - ja', back: 'MEJA', hint: 'Tempat menulis' },
      ]},
      { type: 'tip', text: 'Baca per suku kata dulu (bo - la), lalu gabungkan cepat: BOLA!' },
    ],
    activityTitle: 'Latihan: Membaca Kata Sederhana',
    questions: [
      { text: 'Suku kata "to - pi" jika digabung dibaca...', opts: ['tapi', 'topi', 'tipi', 'tupi'], ans: 1, exp: 'to + pi = topi.' },
      { text: 'Suku kata "me - ja" dibaca...', opts: ['maja', 'meja', 'moja', 'mija'], ans: 1, exp: 'me + ja = meja.' },
      { text: 'Kata yang berarti minuman sehat berwarna putih adalah...', opts: ['susu', 'sapu', 'siku', 'satu'], ans: 0, exp: 'su-su dibaca susu.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-02', subSeq: 3,
    objectives: ['Siswa mampu menggabungkan dua suku kata menjadi kata bermakna.'],
    materialTitle: 'Ayo Menggabungkan Suku Kata!',
    blocks: [
      { type: 'story_panel', title: 'Main Sambung Suku Kata!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Kalau suku kata "ka" disambung "ki", jadi kata apa ya?' },
        { speaker: 'Bima', avatar: '👦', text: 'KA-KI! Kaki untuk berjalan dan menendang bola!' },
      ]},
      { type: 'flashcards', title: 'Sambungkan Suku Katanya!', cards: [
        { emoji: '🦶', front: 'ka + ki = ...', back: 'kaki' },
        { emoji: '🧹', front: 'sa + pu = ...', back: 'sapu' },
        { emoji: '🍞', front: 'ro + ti = ...', back: 'roti' },
        { emoji: '🦷', front: 'gi + gi = ...', back: 'gigi' },
      ]},
    ],
    activityTitle: 'Latihan: Menggabungkan Suku Kata',
    questions: [
      { text: 'Suku kata "sa" + "pu" menjadi kata...', opts: ['sapi', 'sapu', 'sapa', 'supa'], ans: 1, exp: 'sa + pu = sapu.' },
      { text: 'Suku kata "ro" + "ti" menjadi kata...', opts: ['roti', 'rata', 'rapi', 'rugi'], ans: 0, exp: 'ro + ti = roti.' },
      { text: 'Agar menjadi kata "gigi", suku kata "gi" harus digabung dengan...', opts: ['ga', 'gu', 'gi', 'go'], ans: 2, exp: 'gi + gi = gigi.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-02', subSeq: 4,
    objectives: ['Siswa mampu membaca nama benda di rumah dan di ruang kelas.'],
    materialTitle: 'Membaca Nama Benda di Sekitar Kita',
    blocks: [
      { type: 'visual_cards', title: 'Klik Nama Benda di Kelas & Rumah!', items: [
        { visual: '✏️', label: 'pen-sil', caption: 'pensil', speech: 'pen-sil. pensil.' },
        { visual: '🎒', label: 'tas', caption: 'tas', speech: 'tas.' },
        { visual: '🚪', label: 'pin-tu', caption: 'pintu', speech: 'pin-tu. pintu.' },
        { visual: '🕰️', label: 'jam', caption: 'jam', speech: 'jam.' },
        { visual: '🍽️', label: 'pi-ring', caption: 'piring', speech: 'pi-ring. piring.' },
      ]},
    ],
    activityTitle: 'Latihan: Kata Benda Sekitar',
    questions: [
      { text: 'Benda yang dipakai untuk menulis di buku adalah...', opts: ['pintu', 'pensil', 'piring', 'kursi'], ans: 1, exp: 'Pensil dipakai untuk menulis.' },
      { text: 'Penggalan suku kata untuk "pintu" adalah...', opts: ['pin - tu', 'pi - ntu', 'p - intu', 'pint - u'], ans: 0, exp: 'pintu dipenggal menjadi pin-tu.' },
      { text: 'Benda tempat menaruh nasi saat makan adalah...', opts: ['buku', 'tas', 'piring', 'bola'], ans: 2, exp: 'Piring digunakan sebagai wadah makanan.' },
    ],
  },

  // BAB 3: MEMBACA KALIMAT SEDERHANA
  {
    topicCode: 'BIND-SD1-03', subSeq: 1,
    objectives: ['Siswa mengenal kalimat sebagai gabungan beberapa kata yang memiliki makna utuh.'],
    materialTitle: 'Mengenal Kalimat Sederhana',
    blocks: [
      { type: 'paragraph', text: 'Kalimat adalah gabungan beberapa kata yang punya arti lengkap. Kalimat diawali huruf besar dan diakhiri tanda titik (.)!' },
      { type: 'worked_example', level: 'Dasar', question: 'Gabungkan kata "Ibu" + "beli" + "roti" menjadi satu kalimat!', steps: ['Susun urut dari siapa (Ibu), melakukan apa (beli), benda apa (roti).', 'Tambahkan tanda titik (.) di akhir kalimat.'], answer: 'Ibu beli roti.' },
    ],
    activityTitle: 'Latihan: Mengenal Kalimat',
    questions: [
      { text: 'Di akhir kalimat berita diberi tanda...', opts: ['titik (.)', 'tambah (+)', 'kurang (−)', 'kali (×)'], ans: 0, exp: 'Kalimat berita diakhiri tanda titik (.).' },
      { text: 'Manakah yang merupakan kalimat utuh?', opts: ['Meja', 'Budi membaca buku.', 'Bola', 'Merah'], ans: 1, exp: '"Budi membaca buku." memiliki pelaku, kegiatan, dan objek.' },
      { text: 'Huruf pertama di awal kalimat harus ditulis dengan...', opts: ['huruf besar (kapital)', 'angka', 'tanda tanya', 'spasi'], ans: 0, exp: 'Awal kalimat selalu menggunakan huruf kapital.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-03', subSeq: 2,
    objectives: ['Siswa mampu membaca kalimat pendek dengan lafal dan jeda yang jelas.'],
    materialTitle: 'Membaca Kalimat Pendek dengan Lancar',
    blocks: [
      { type: 'visual_cards', title: 'Baca Kalimatnya, Lalu Klik untuk Cek Lafal!', items: [
        { visual: '📖', label: 'Alya baca buku.', caption: '3 kata', speech: 'Alya baca buku.' },
        { visual: '⚽', label: 'Bima main bola.', caption: '3 kata', speech: 'Bima main bola.' },
        { visual: '🥛', label: 'Adik minum susu.', caption: '3 kata', speech: 'Adik minum susu.' },
      ]},
      { type: 'tip', text: 'Berhenti sebentar saat melihat tanda titik (.) agar bacaan terdengar enak dan jelas.' },
    ],
    activityTitle: 'Latihan: Membaca Kalimat Pendek',
    questions: [
      { text: '"Adik minum susu." Siapa yang minum susu?', opts: ['Ibu', 'Ayah', 'Adik', 'Kakak'], ans: 2, exp: 'Pelaku dalam kalimat tersebut adalah Adik.' },
      { text: '"Bima main bola." Apa yang dilakukan Bima?', opts: ['Tidur', 'Main bola', 'Makan nasi', 'Mandi'], ans: 1, exp: 'Kalimat menyatakan Bima main bola.' },
      { text: 'Kalimat "Siti menyiram bunga." terdiri dari berapa kata?', opts: ['2 kata', '3 kata', '4 kata', '5 kata'], ans: 1, exp: 'Siti (1) menyiram (2) bunga (3).' },
    ],
  },
  {
    topicCode: 'BIND-SD1-03', subSeq: 3,
    objectives: ['Siswa mampu memahami isi dan informasi dari kalimat sederhana.'],
    materialTitle: 'Memahami Makna Kalimat',
    blocks: [
      { type: 'story_panel', title: 'Pahami Isi Kalimatnya!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Bacalah: "Kucing itu tidur di atas sofa." Di mana kucing tidur?' },
        { speaker: 'Alya', avatar: '👧', text: 'Di atas sofa, Bu!' },
      ]},
      { type: 'worked_example', level: 'Dasar', question: '"Ayah mencuci sepeda di halaman." Apa yang dicuci Ayah?', steps: ['Cari kata setelah "mencuci".', 'Kata setelah mencuci adalah "sepeda".'], answer: 'Sepeda.' },
    ],
    activityTitle: 'Latihan: Memahami Makna Kalimat',
    questions: [
      { text: '"Ibu memasak sayur di dapur." Di mana Ibu memasak?', opts: ['Di kamar', 'Di dapur', 'Di taman', 'Di kelas'], ans: 1, exp: 'Kalimat menyebutkan tempatnya "di dapur".' },
      { text: '"Rani memakai payung karena hujan." Mengapa Rani memakai payung?', opts: ['Karena panas', 'Karena hujan', 'Karena malam', 'Karena angin'], ans: 1, exp: 'Alasannya adalah karena hujan.' },
      { text: '"Paman membawa keranjang mangga." Buah apa yang dibawa Paman?', opts: ['Apel', 'Jeruk', 'Mangga', 'Pisang'], ans: 2, exp: 'Paman membawa buah mangga.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-03', subSeq: 4,
    objectives: ['Siswa mampu mencocokkan kalimat sederhana dengan gambar yang tepat.'],
    materialTitle: 'Mencocokkan Kalimat dengan Gambar',
    blocks: [
      { type: 'flashcards', title: 'Lihat Gambar, Tebak Kalimatnya!', cards: [
        { emoji: '🧒📖', front: 'Gambar anak memegang buku', back: 'Anak sedang membaca buku.' },
        { emoji: '🌧️☂️', front: 'Gambar hujan dan payung', back: 'Hari ini turun hujan.' },
        { emoji: '👧🪥', front: 'Gambar sikat gigi', back: 'Alya menggosok gigi.' },
      ]},
    ],
    activityTitle: 'Latihan: Kalimat dan Gambar',
    questions: [
      { text: 'Kalimat yang cocok untuk gambar 👦⚽ adalah...', opts: ['Budi tidur siang.', 'Budi bermain bola.', 'Budi makan roti.', 'Budi menyapu lantai.'], ans: 1, exp: 'Emoji anak laki-laki dan bola cocok dengan "Budi bermain bola.".' },
      { text: 'Kalimat yang cocok untuk gambar 👧🪴 adalah...', opts: ['Siti merawat tanaman.', 'Siti naik sepeda.', 'Siti menulis surat.', 'Siti berenang.'], ans: 0, exp: 'Gambar anak dan pot tanaman cocok dengan merawat tanaman.' },
      { text: 'Gambar yang cocok untuk kalimat "Kucing minum susu" adalah...', opts: ['🐶🦴', '🐱🥛', '🐦🌳', '🐟🌊'], ans: 1, exp: '🐱 adalah kucing dan 🥛 adalah susu.' },
    ],
  },

  // BAB 4: MENGENAL DIRI DAN LINGKUNGAN
  {
    topicCode: 'BIND-SD1-04', subSeq: 1,
    objectives: ['Siswa berani memperkenalkan nama, umur, dan alamat sederhana secara lisan.'],
    materialTitle: 'Ayo Memperkenalkan Diri dengan Percaya Diri!',
    blocks: [
      { type: 'story_panel', title: 'Contoh Perkenalan Diri', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Halo teman-teman! Namaku Alya. Umurku 7 tahun. Aku tinggal di Gresik. Salam kenal ya!' },
        { speaker: 'Bima', avatar: '👦', text: 'Halo Alya! Namaku Bima. Senang berkenalan denganmu!' },
      ]},
      { type: 'list', title: '3 Hal Saat Berkenalan', items: ['Ucapkan salam (Halo / Selamat pagi).', 'Sebutkan nama panggilanmu dengan suara jelas.', 'Tersenyum ramah kepada teman atau guru.'] },
    ],
    activityTitle: 'Latihan: Memperkenalkan Diri',
    questions: [
      { text: 'Saat memperkenalkan diri kepada teman baru, sikap kita sebaiknya...', opts: ['Cemberut', 'Tersenyum dan berbicara ramah', 'Berteriak keras', 'Diam saja'], ans: 1, exp: 'Tersenyum dan berbicara ramah membuat teman merasa senang.' },
      { text: 'Kalimat perkenalan diri yang benar adalah...', opts: ['Namaku Bima, umurku 7 tahun.', 'Siapa namamu?', 'Di mana rumahmu?', 'Tolong ambilkan buku.'], ans: 0, exp: 'Kalimat tersebut menyebutkan identitas diri.' },
      { text: 'Ketika teman berkata "Salam kenal!", kita menjawab...', opts: ['Selamat tidur', 'Salam kenal juga!', 'Terima kasih', 'Permisi'], ans: 1, exp: 'Balasan yang ramah adalah "Salam kenal juga!".' },
    ],
  },
  {
    topicCode: 'BIND-SD1-04', subSeq: 2,
    objectives: ['Siswa mampu menyebutkan anggota keluarga inti dan perannya di rumah.'],
    materialTitle: 'Mengenal Anggota Keluarga',
    blocks: [
      { type: 'visual_cards', title: 'Klik Anggota Keluarga di Rumah!', items: [
        { visual: '👨', label: 'Ayah', caption: 'Kepala keluarga', speech: 'Ayah.' },
        { visual: '👩', label: 'Ibu', caption: 'Merawat keluarga', speech: 'Ibu.' },
        { visual: '👦', label: 'Kakak', caption: 'Saudara lebih tua', speech: 'Kakak.' },
        { visual: '👶', label: 'Adik', caption: 'Saudara lebih muda', speech: 'Adik.' },
        { visual: '👴👵', label: 'Kakek & Nenek', caption: 'Orang tua Ayah/Ibu', speech: 'Kakek dan nenek.' },
      ]},
    ],
    activityTitle: 'Latihan: Anggota Keluarga',
    questions: [
      { text: 'Saudara kandung yang umurnya lebih muda dari kita disebut...', opts: ['Kakak', 'Adik', 'Paman', 'Kakek'], ans: 1, exp: 'Saudara yang lebih muda disebut adik.' },
      { text: 'Orang tua dari Ayah atau Ibu kita disebut...', opts: ['Adik dan Kakak', 'Kakek dan Nenek', 'Teman', 'Guru'], ans: 1, exp: 'Orang tua dari ayah/ibu adalah kakek dan nenek.' },
      { text: 'Sikap yang baik kepada anggota keluarga di rumah adalah...', opts: ['Saling menyayangi dan membantu', 'Bertengkar terus', 'Tidak mau berbagi', 'Bermalas-malasan'], ans: 0, exp: 'Keluarga rukun jika saling menyayangi dan membantu.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-04', subSeq: 3,
    objectives: ['Siswa mampu mendeskripsikan ciri benda sekitar (warna, bentuk, kegunaan).'],
    materialTitle: 'Mendeskripsikan Benda di Sekitar',
    blocks: [
      { type: 'flashcards', title: 'Tebak Benda dari Ciri-Cirinya!', cards: [
        { emoji: '✏️', front: 'Panjang, terbuat dari kayu, untuk menulis', back: 'Pensil' },
        { emoji: '⚽', front: 'Bundar, hitam putih, untuk ditendang', back: 'Bola Sepak' },
        { emoji: '☂️', front: 'Bisa dibuka, melindungi dari hujan', back: 'Payung' },
      ]},
    ],
    activityTitle: 'Latihan: Mendeskripsikan Benda',
    questions: [
      { text: 'Benda yang bentuknya bundar dan digunakan untuk melihat waktu adalah...', opts: ['Penggaris', 'Jam dinding', 'Penghapus', 'Buku'], ans: 1, exp: 'Jam dinding berfungsi menunjukkan waktu.' },
      { text: 'Benda lunak yang digunakan untuk menghapus tulisan pensil adalah...', opts: ['Penghapus', 'Rautan', 'Spidol', 'Tas'], ans: 0, exp: 'Penghapus digunakan untuk menghapus tulisan pensil.' },
      { text: 'Ciri buah pisang yang sudah matang adalah...', opts: ['Berwarna kuning dan rasanya manis', 'Berbentuk kotak', 'Sangat keras seperti batu', 'Berwarna biru'], ans: 0, exp: 'Pisang matang berwarna kuning dan manis.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-04', subSeq: 4,
    objectives: ['Siswa mampu menyebutkan kegiatan sehari-hari dari pagi hingga malam secara runtut.'],
    materialTitle: 'Kegiatan Sehari-hari di Rumah & Sekolah',
    blocks: [
      { type: 'visual_cards', title: 'Urutan Kegiatanku Setiap Hari!', items: [
        { visual: '🌅', label: 'Pagi', caption: 'Bangun, mandi, sarapan', speech: 'Pagi hari: bangun tidur, mandi, dan sarapan.' },
        { visual: '🏫', label: 'Siang', caption: 'Belajar di sekolah', speech: 'Siang hari: belajar di sekolah dan makan siang.' },
        { visual: '🚲', label: 'Sore', caption: 'Bermain & belajar les', speech: 'Sore hari: bermain bersama teman dan belajar.' },
        { visual: '🌙', label: 'Malam', caption: 'Makan malam & tidur', speech: 'Malam hari: makan malam, gosok gigi, lalu tidur.' },
      ]},
    ],
    activityTitle: 'Latihan: Kegiatan Sehari-hari',
    questions: [
      { text: 'Kegiatan yang biasa dilakukan di PAGI hari sebelum berangkat sekolah adalah...', opts: ['Tidur malam', 'Sarapan', 'Melihat bintang', 'Makan malam'], ans: 1, exp: 'Sarapan dilakukan di pagi hari.' },
      { text: 'Sebelum tidur malam, sebaiknya kita...', opts: ['Menggosok gigi dan berdoa', 'Main bola di luar', 'Menonton sampai larut', 'Makan permen banyak'], ans: 0, exp: 'Menggosok gigi menjaga kesehatan gigi saat tidur.' },
      { text: 'Merapikan tempat tidur setelah bangun adalah kebiasaan yang...', opts: ['Buruk', 'Baik dan mandiri', 'Melelahkan', 'Tidak perlu'], ans: 1, exp: 'Merapikan tempat tidur melatih kemandirian.' },
    ],
  },

  // BAB 5: PERCAKAPAN DAN KESANTUNAN
  {
    topicCode: 'BIND-SD1-05', subSeq: 1,
    objectives: ['Siswa mampu mengucapkan salam sesuai waktu (pagi, siang, sore, malam).'],
    materialTitle: 'Mengucapkan Salam dengan Ramah',
    blocks: [
      { type: 'visual_cards', title: 'Klik Salam Sesuai Waktunya!', items: [
        { visual: '🌅', label: 'Selamat Pagi', caption: 'Saat matahari terbit', speech: 'Selamat pagi, Bu Guru!' },
        { visual: '☀️', label: 'Selamat Siang', caption: 'Saat matahari terik', speech: 'Selamat siang, teman-teman!' },
        { visual: '🌇', label: 'Selamat Sore', caption: 'Menjelang petang', speech: 'Selamat sore, Paman!' },
        { visual: '🌙', label: 'Selamat Malam', caption: 'Saat hari gelap', speech: 'Selamat malam, Ayah dan Ibu!' },
      ]},
    ],
    activityTitle: 'Latihan: Mengucapkan Salam',
    questions: [
      { text: 'Saat bertemu guru di pagi hari, kita mengucapkan...', opts: ['Selamat malam', 'Selamat pagi', 'Selamat tidur', 'Sampai nanti'], ans: 1, exp: 'Pagi hari menyapa dengan "Selamat pagi".' },
      { text: 'Jika seseorang mengucapkan salam kepada kita, sebaiknya kita...', opts: ['Diam saja', 'Menjawab salam dengan ramah', 'Berlari pergi', 'Menutup telinga'], ans: 1, exp: 'Salam wajib dijawab dengan ramah.' },
      { text: 'Salam yang diucapkan saat pulang sekolah jam 12 adalah...', opts: ['Selamat pagi', 'Selamat siang', 'Selamat malam', 'Selamat subuh'], ans: 1, exp: 'Pukul 12 adalah waktu siang hari.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-05', subSeq: 2,
    objectives: ['Siswa mampu bertanya dan menjawab pertanyaan sederhana dengan sopan.'],
    materialTitle: 'Bertanya dan Menjawab dengan Sopan',
    blocks: [
      { type: 'story_panel', title: 'Cara Bertanya yang Sopan', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Permisi Bu, apa arti kata "fabel" itu?' },
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Pertanyaan bagus, Bima! Fabel adalah cerita tentang hewan yang bisa berbicara.' },
      ]},
      { type: 'list', title: 'Kata Tanya Sederhana', items: ['Apa → menanyakan benda/hal', 'Siapa → menanyakan orang', 'Di mana → menanyakan tempat', 'Berapa → menanyakan jumlah'] },
    ],
    activityTitle: 'Latihan: Bertanya & Menjawab',
    questions: [
      { text: 'Kata tanya untuk menanyakan NAMA ORANG adalah...', opts: ['Apa', 'Siapa', 'Di mana', 'Berapa'], ans: 1, exp: '"Siapa" digunakan untuk menanyakan orang.' },
      { text: 'Kata tanya untuk menanyakan TEMPAT tinggal adalah...', opts: ['Di mana', 'Siapa', 'Berapa', 'Apa'], ans: 0, exp: '"Di mana" menanyakan lokasi/tempat.' },
      { text: 'Di akhir kalimat tanya selalu diberi tanda...', opts: ['Titik (.)', 'Tanya (?)', 'Koma (,)', 'Tambah (+)'], ans: 1, exp: 'Kalimat tanya diakhiri tanda tanya (?).' },
    ],
  },
  {
    topicCode: 'BIND-SD1-05', subSeq: 3,
    objectives: ['Siswa berani menyampaikan pendapat dan kesukaan secara sederhana dan santun.'],
    materialTitle: 'Menyampaikan Pendapat Sederhana',
    blocks: [
      { type: 'story_panel', title: 'Saling Menghargai Pendapat', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Menurutku, cerita kancil itu seru karena kancilnya pintar!' },
        { speaker: 'Bima', avatar: '👦', text: 'Kalau aku suka cerita kelinci dan kura-kura karena kura-kuranya rajin!' },
      ]},
      { type: 'tip', text: 'Kita boleh punya pendapat berbeda dari teman. Yang penting tetap berbicara sopan dan mau mendengarkan!' },
    ],
    activityTitle: 'Latihan: Menyampaikan Pendapat',
    questions: [
      { text: 'Saat teman sedang menyampaikan pendapatnya, kita sebaiknya...', opts: ['Memotong pembicaraannya', 'Mendengarkan dengan baik', 'Menertawakannya', 'Pergi bermain'], ans: 1, exp: 'Mendengarkan teman berbicara adalah wujud sikap menghargai.' },
      { text: 'Kalimat menyampaikan pendapat yang sopan adalah...', opts: ['Menurutku, gambar ini sangat bagus.', 'Gambarmu jelek sekali!', 'Aku tidak mau dengar!', 'Semua harus ikut aku!'], ans: 0, exp: 'Diawali "Menurutku..." dan disampaikan dengan kata yang baik.' },
      { text: 'Jika pendapat kita berbeda dengan teman, kita harus...', opts: ['Marah', 'Tetap rukun dan saling menghargai', 'Tidak mau berteman', 'Bertengkar'], ans: 1, exp: 'Perbedaan pendapat adalah hal biasa dan harus tetap dihargai.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-05', subSeq: 4,
    objectives: ['Siswa membiasakan penggunaan 3 kata ajaib: Tolong, Maaf, dan Terima Kasih.'],
    materialTitle: 'Tiga Kata Ajaib: Tolong, Maaf, dan Terima Kasih',
    blocks: [
      { type: 'visual_cards', title: 'Klik 3 Kata Ajaib!', items: [
        { visual: '🙏', label: 'Tolong', caption: 'Saat minta bantuan', speech: 'Tolong. Ucapkan tolong saat meminta bantuan.' },
        { visual: '😔', label: 'Maaf', caption: 'Saat berbuat salah', speech: 'Maaf. Ucapkan maaf jika tidak sengaja berbuat salah.' },
        { visual: '😊', label: 'Terima Kasih', caption: 'Saat dibantu/diberi', speech: 'Terima kasih. Ucapkan terima kasih setelah dibantu.' },
      ]},
    ],
    activityTitle: 'Latihan: Tiga Kata Ajaib',
    questions: [
      { text: 'Jika tidak sengaja menyenggol buku teman hingga jatuh, kita mengucapkan...', opts: ['Terima kasih', 'Maaf', 'Selamat pagi', 'Tolong'], ans: 1, exp: 'Saat melakukan kesalahan, kita segera meminta maaf.' },
      { text: 'Saat ingin meminta bantuan Ibu mengambilkan buku di rak tinggi, kita berkata...', opts: ['Ambilkan sekarang!', 'Ibu, tolong ambilkan buku itu.', 'Maaf, Bu.', 'Selamat siang, Bu.'], ans: 1, exp: 'Gunakan kata "tolong" saat meminta bantuan.' },
      { text: 'Setelah diberi hadiah oleh Kakak, kita mengucapkan...', opts: ['Maaf', 'Terima kasih', 'Permisi', 'Tolong'], ans: 1, exp: 'Ucapkan "terima kasih" sebagai tanda syukur dan sopan.' },
    ],
  },

  // BAB 6: CERITA ANAK DAN FABEL
  {
    topicCode: 'BIND-SD1-06', subSeq: 1,
    objectives: ['Siswa mampu menyimak cerita anak pendek dan menjawab isi cerita.'],
    materialTitle: 'Mendengarkan Cerita Fabel: Kura-Kura dan Kelinci',
    blocks: [
      { type: 'story_panel', title: 'Cerita Mini: Kura-Kura yang Rajin', lines: [
        { speaker: 'Kelinci', avatar: '🐇', text: 'Hahaha, aku pasti menang lomba lari! Aku tidur siang dulu ah di bawah pohon.' },
        { speaker: 'Kura-Kura', avatar: '🐢', text: 'Walau jalanku pelan, aku tidak berhenti. Pelan-pelan akhirnya aku sampai garis finis!' },
      ]},
      { type: 'tip', text: 'Fabel adalah cerita tentang hewan yang bisa berbicara dan bertingkah seperti manusia.' },
    ],
    activityTitle: 'Latihan: Mendengarkan Cerita',
    questions: [
      { text: 'Cerita tentang hewan yang bisa berbicara seperti manusia disebut...', opts: ['Berita', 'Fabel', 'Resep', 'Pengumuman'], ans: 1, exp: 'Fabel adalah dongeng dengan tokoh hewan.' },
      { text: 'Dalam cerita tadi, mengapa Kelinci kalah lomba lari?', opts: ['Kakinya sakit', 'Ia sombong dan tertidur di jalan', 'Jalannya pelan', 'Hujan deras'], ans: 1, exp: 'Kelinci meremehkan Kura-kura lalu tertidur.' },
      { text: 'Siapa yang berhasil sampai garis finis lebih dulu?', opts: ['Kelinci', 'Kura-kura', 'Kucing', 'Burung'], ans: 1, exp: 'Kura-kura terus berjalan gigih hingga menang.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-06', subSeq: 2,
    objectives: ['Siswa mampu mengenali tokoh dan sifat tokoh dalam cerita anak.'],
    materialTitle: 'Mengenal Tokoh dan Sifatnya dalam Cerita',
    blocks: [
      { type: 'paragraph', text: 'Tokoh adalah pelaku yang ada di dalam cerita. Ada tokoh yang baik hati, rajin, dan jujur; ada juga tokoh yang sombong atau malas.' },
      { type: 'flashcards', title: 'Kenali Sifat Tokoh! (Klik Kartunya)', cards: [
        { emoji: '🐢', front: 'Kura-Kura', back: 'Sabar & Gigih', hint: 'Tidak mudah menyerah' },
        { emoji: '🐇', front: 'Kelinci', back: 'Sombong', hint: 'Meremehkan teman' },
        { emoji: '🐜', front: 'Semut', back: 'Rajin & Suka Bekerja Sama', hint: 'Mengumpulkan makanan bersama' },
      ]},
    ],
    activityTitle: 'Latihan: Mengenal Tokoh',
    questions: [
      { text: 'Pelaku yang berperan di dalam sebuah cerita disebut...', opts: ['Judul', 'Tokoh', 'Halaman', 'Sampul'], ans: 1, exp: 'Tokoh adalah pelaku dalam cerita.' },
      { text: 'Tokoh Semut yang rajin bekerja mengumpulkan makanan memiliki sifat...', opts: ['Pemalas', 'Rajin', 'Pemarah', 'Sombong'], ans: 1, exp: 'Semut mencontohkan sifat rajin dan bekerja sama.' },
      { text: 'Sifat tokoh yang PATUT kita tiru adalah...', opts: ['Sombong', 'Jujur dan suka menolong', 'Suka mengejek', 'Malas belajar'], ans: 1, exp: 'Jujur dan suka menolong adalah sifat terpuji.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-06', subSeq: 3,
    objectives: ['Siswa mampu mengurutkan peristiwa awal, tengah, dan akhir cerita.'],
    materialTitle: 'Memahami Urutan Peristiwa Cerita',
    blocks: [
      { type: 'list', title: '3 Bagian Urutan Cerita', items: ['Awal: pengenalan tokoh dan suasana.', 'Tengah: kejadian atau masalah yang dialami tokoh.', 'Akhir: penyelesaian cerita.'] },
      { type: 'worked_example', level: 'Dasar', question: 'Urutkan peristiwa: (1) Kura-kura menang, (2) Lomba dimulai, (3) Kelinci tertidur.', steps: ['Awal: Lomba dimulai (2).', 'Tengah: Kelinci tertidur di jalan (3).', 'Akhir: Kura-kura menang (1).'], answer: '2 → 3 → 1' },
    ],
    activityTitle: 'Latihan: Peristiwa Cerita',
    questions: [
      { text: 'Bagian yang menceritakan penyelesaian cerita ada di bagian...', opts: ['Awal', 'Tengah', 'Akhir', 'Judul'], ans: 2, exp: 'Penyelesaian selalu berada di akhir cerita.' },
      { text: 'Sebelum makan siang, peristiwa yang dilakukan lebih dulu adalah...', opts: ['Mencuci tangan', 'Mencuci piring kotor', 'Tidur malam', 'Berangkat sekolah pagi'], ans: 0, exp: 'Mencuci tangan dilakukan sebelum makan.' },
      { text: 'Pengenalan nama tokoh biasanya ada di bagian ... cerita.', opts: ['Awal', 'Akhir', 'Belakang sampul', 'Nomor halaman'], ans: 0, exp: 'Tokoh diperkenalkan di bagian awal cerita.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-06', subSeq: 4,
    objectives: ['Siswa mampu menyebutkan pesan moral (amanat) sederhana dari cerita anak.'],
    materialTitle: 'Menemukan Pesan Baik dari Cerita',
    blocks: [
      { type: 'paragraph', text: 'Setiap cerita anak punya pesan kebaikan (amanat) yang bisa kita lakukan di kehidupan sehari-hari!' },
      { type: 'flashcards', title: 'Apa Pesan dari Cerita Ini?', cards: [
        { emoji: '🐢🐇', front: 'Kura-Kura & Kelinci', back: 'Jangan sombong, terus berusaha!' },
        { emoji: '🐜🕊️', front: 'Semut & Burung Merpati', back: 'Saling menolong sesama teman!' },
      ]},
    ],
    activityTitle: 'Latihan: Pesan Cerita',
    questions: [
      { text: 'Pesan baik dari cerita Kura-kura dan Kelinci adalah...', opts: ['Boleh tidur saat lomba', 'Jangan sombong dan tetap tekun berusaha', 'Harus mengejek teman yang lambat', 'Jangan ikut lomba'], ans: 1, exp: 'Ketekunan mengalahkan kesombongan.' },
      { text: 'Cerita Semut dan Burung Merpati mengajarkan kita untuk...', opts: ['Saling tolong-menolong', 'Bermusuhan', 'Tidak peduli teman', 'Berbohong'], ans: 0, exp: 'Merpati menolong semut, lalu semut membalas menolong merpati.' },
      { text: 'Pesan kebaikan yang disampaikan penulis melalui cerita disebut...', opts: ['Judul', 'Amanat', 'Halaman', 'Gambar'], ans: 1, exp: 'Amanat adalah pesan moral cerita.' },
    ],
  },

  // BAB 7: MENULIS PERMULAAN
  {
    topicCode: 'BIND-SD1-07', subSeq: 1,
    objectives: ['Siswa mengenal sikap duduk, cara memegang pensil, dan bentuk huruf lepas yang rapi.'],
    materialTitle: 'Sikap Duduk & Cara Menulis Huruf yang Rapi',
    blocks: [
      { type: 'visual_cards', title: 'Aturan Menulis Sehat (Klik!)', items: [
        { visual: '🪑', label: 'Duduk Tegak', caption: 'Punggung lurus', speech: 'Duduk tegak agar punggung sehat.' },
        { visual: '💡', label: 'Tempat Terang', caption: 'Cahaya cukup', speech: 'Menulis di tempat terang supaya mata sehat.' },
        { visual: '✏️', label: 'Pegang Pensil', caption: 'Jempol & telunjuk', speech: 'Pegang pensil dengan jempol dan jari telunjuk.' },
        { visual: '👀', label: 'Jarak Mata', caption: 'Tidak terlalu dekat', speech: 'Jaga jarak mata sekitar 30 sentimeter dari buku.' },
      ]},
    ],
    activityTitle: 'Latihan: Menulis Huruf',
    questions: [
      { text: 'Agar mata tetap sehat, kita sebaiknya menulis di tempat yang...', opts: ['Gelap', 'Terang', 'Sambil tiduran', 'Sangat redup'], ans: 1, exp: 'Cahaya terang menjaga kesehatan mata.' },
      { text: 'Sikap duduk yang benar saat menulis adalah...', opts: ['Membungkuk sekali', 'Tegak dan santai', 'Tiduran di lantai', 'Kaki di atas meja'], ans: 1, exp: 'Duduk tegak menjaga kesehatan tulang punggung.' },
      { text: 'Pensil dipegang menggunakan jari...', opts: ['Kelingking saja', 'Ibu jari, telunjuk, dan jari tengah', 'Kaki', 'Semua jari mengepal'], ans: 1, exp: 'Posisi tripod (ibu jari, telunjuk, jari tengah) membuat tulisan rapi.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-07', subSeq: 2,
    objectives: ['Siswa mampu menyalin kata sederhana dengan ejaan dan spasi yang benar.'],
    materialTitle: 'Menyalin Kata dengan Teliti',
    blocks: [
      { type: 'paragraph', text: 'Saat menyalin kata dari papan tulis atau buku, perhatikan huruf satu per satu dan beri jarak (spasi) antar kata agar mudah dibaca!' },
      { type: 'worked_example', level: 'Dasar', question: 'Perbaiki penulisan yang menempel ini: "akubacabuku"', steps: ['Pisahkan setiap kata: "aku", "baca", "buku".', 'Beri spasi di antara tiap kata.'], answer: 'aku baca buku' },
    ],
    activityTitle: 'Latihan: Menyalin Kata',
    questions: [
      { text: 'Penulisan dengan jarak (spasi) yang BENAR adalah...', opts: ['ibumasaknasi', 'ibu masak nasi', 'ib umas aknasi', 'i bu ma sak'], ans: 1, exp: 'Spasi diletakkan di antara setiap kata utuh.' },
      { text: 'Salinan yang tepat untuk kata "sekolah" adalah...', opts: ['seklah', 'sekolah', 'sekola', 'sekoah'], ans: 1, exp: 'Setiap huruf s-e-k-o-l-a-h harus lengkap.' },
      { text: 'Mengapa kita harus memberi spasi antar kata?', opts: ['Agar buku cepat habis', 'Agar tulisan rapi dan mudah dibaca', 'Agar huruf hilang', 'Tidak ada gunanya'], ans: 1, exp: 'Spasi memisahkan kata supaya jelas dibaca.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-07', subSeq: 3,
    objectives: ['Siswa mampu melengkapi huruf yang hilang pada kata sederhana.'],
    materialTitle: 'Melengkapi Huruf yang Hilang',
    blocks: [
      { type: 'flashcards', title: 'Tebak Huruf yang Hilang! (Klik Kartunya)', cards: [
        { emoji: '⚽', front: 'b _ l a', back: 'o → bola' },
        { emoji: '📘', front: 'b u _ u', back: 'k → buku' },
        { emoji: '🍎', front: 'a _ e l', back: 'p → apel' },
        { emoji: '🏠', front: 'r u m _ h', back: 'a → rumah' },
      ]},
    ],
    activityTitle: 'Latihan: Melengkapi Kata',
    questions: [
      { text: 'Huruf yang tepat untuk melengkapi "m _ j a" (🪑) adalah...', opts: ['a', 'e', 'i', 'u'], ans: 1, exp: 'm-e-j-a menjadi kata "meja".' },
      { text: 'Huruf yang hilang pada "t o _ i" (👒) adalah...', opts: ['b', 'd', 'p', 'k'], ans: 2, exp: 't-o-p-i menjadi kata "topi".' },
      { text: 'Lengkapi kata "i k _ n" (🐟): huruf yang hilang adalah...', opts: ['a', 'e', 'o', 'u'], ans: 0, exp: 'i-k-a-n menjadi kata "ikan".' },
    ],
  },
  {
    topicCode: 'BIND-SD1-07', subSeq: 4,
    objectives: ['Siswa mampu menulis kalimat pendek 3–4 kata berdasarkan gambar.'],
    materialTitle: 'Menulis Kalimat Sederhana dari Gambar',
    blocks: [
      { type: 'worked_example', level: 'Dasar', question: 'Lihat gambar 👧🚲. Buatlah 1 kalimat pendek!', steps: ['Siapa orangnya? Alya.', 'Sedang apa? Naik sepeda.', 'Gabungkan + tanda titik.'], answer: 'Alya naik sepeda.' },
      { type: 'teacher_note', text: 'Minta siswa menulis di buku tulis lalu membacakan kembali kalimat hasil buatannya sendiri.' },
    ],
    activityTitle: 'Latihan: Menulis Kalimat dari Gambar',
    questions: [
      { text: 'Kalimat tepat untuk gambar 👦🍽️ adalah...', opts: ['Bima makan nasi.', 'Bima naik mobil.', 'Bima mencuci baju.', 'Bima tidur malam.'], ans: 0, exp: 'Gambar piring dan sendok menunjukkan kegiatan makan.' },
      { text: 'Susun kata acak "buku - membaca - Ibu" menjadi kalimat benar:', opts: ['Buku Ibu membaca.', 'Ibu membaca buku.', 'Membaca buku Ibu.', 'Ibu buku membaca.'], ans: 1, exp: 'Susunan Subjek-Predikat-Objek: Ibu membaca buku.' },
      { text: 'Susun kata "susu - Adik - minum":', opts: ['Susu minum Adik.', 'Adik minum susu.', 'Minum Adik susu.', 'Adik susu minum.'], ans: 1, exp: 'Kalimat yang benar adalah "Adik minum susu.".' },
    ],
  },

  // BAB 8: PUISI DAN EKSPRESI BAHASA
  {
    topicCode: 'BIND-SD1-08', subSeq: 1,
    objectives: ['Siswa mengenal puisi anak sebagai rangkaian baris indah yang mengungkapkan perasaan.'],
    materialTitle: 'Mengenal Puisi Anak',
    blocks: [
      { type: 'story_panel', title: 'Puisi Pendek: Pelangi', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Pelangi indah di langit biru / Merah kuning hijau warnamu / Hatiku riang melihatmu!' },
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Indah sekali! Puisi ditulis per baris dan bunyinya merdu seperti lagu.' },
      ]},
    ],
    activityTitle: 'Latihan: Mengenal Puisi Anak',
    questions: [
      { text: 'Puisi anak ditulis dalam bentuk...', opts: ['Baris-baris pendek yang indah', 'Angka berhitung', 'Daftar harga', 'Tabel jadwal'], ans: 0, exp: 'Puisi tersusun dari baris dan bait dengan kata-kata indah.' },
      { text: 'Pada puisi "Pelangi" di atas, di mana pelangi terlihat?', opts: ['Di dalam kamar', 'Di langit biru', 'Di bawah meja', 'Di tas sekolah'], ans: 1, exp: 'Baris pertama menyebut "di langit biru".' },
      { text: 'Perasaan Alya saat melihat pelangi adalah...', opts: ['Sedih', 'Riang (senang)', 'Takut', 'Marah'], ans: 1, exp: 'Kata "riang" artinya senang/gembira.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-08', subSeq: 2,
    objectives: ['Siswa mampu membaca puisi pendek dengan suara nyaring dan ekspresi yang sesuai.'],
    materialTitle: 'Membaca Puisi Pendek dengan Ekspresi',
    blocks: [
      { type: 'list', title: '3 Cara Keren Membaca Puisi', items: ['Suara terdengar jelas dan tidak terlalu cepat.', 'Wajah sesuai isi puisi (tersenyum jika puisi gembira).', 'Berhenti sejenak di akhir setiap baris.'] },
      { type: 'visual_cards', title: 'Klik untuk Mendengar Contoh Pembacaan!', items: [
        { visual: '👩‍👧', label: 'Ibu Tercinta', caption: 'Kasihmu tak terhingga...', speech: 'Ibu tercinta. Kasihmu hangat bagai mentari. Terima kasih ibu, aku sayang padamu.' },
        { visual: '🌳', label: 'Pohon Rindang', caption: 'Daunmu hijau sejuk...', speech: 'Pohon rindang di halaman. Daunmu hijau meneduhkan. Tempat burung bernyanyi riang.' },
      ]},
    ],
    activityTitle: 'Latihan: Membaca Puisi',
    questions: [
      { text: 'Jika isi puisi tentang kegembiraan, ekspresi wajah kita saat membaca adalah...', opts: ['Menangis', 'Tersenyum ceria', 'Cemberut', 'Menutup wajah'], ans: 1, exp: 'Ekspresi wajah harus sesuai perasaan isi puisi.' },
      { text: 'Saat membaca puisi di depan kelas, suara kita sebaiknya...', opts: ['Sangat pelan sampai tidak terdengar', 'Jelas dan tidak terburu-buru', 'Sangat cepat sekali', 'Berbisik'], ans: 1, exp: 'Suara jelas dengan tempo tepat membuat puisi indah didengar.' },
      { text: 'Puisi "Ibu Tercinta" mengungkapkan rasa...', opts: ['Marah', 'Sayang dan terima kasih kepada Ibu', 'Takut', 'Bosan'], ans: 1, exp: 'Puisi tersebut mengungkapkan kasih sayang kepada Ibu.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-08', subSeq: 3,
    objectives: ['Siswa mampu mengenali persamaan bunyi akhir (rima) dan irama dalam puisi anak.'],
    materialTitle: 'Mengenal Bunyi dan Irama (Rima)',
    blocks: [
      { type: 'paragraph', text: 'Puisi terdengar merdu karena bunyi akhir barisnya sering mirip! Contoh: "biru – warnamu – melihatmu" sama-sama berbunyi "-u" di belakang.' },
      { type: 'flashcards', title: 'Cari Pasangan Kata yang Bunyinya Mirip!', cards: [
        { emoji: '🌤️', front: 'Pagi', back: 'Mentari / Lari', hint: 'Sama-sama berakhiran -i' },
        { emoji: '🌊', front: 'Biru', back: 'Baru / Rindu', hint: 'Sama-sama berakhiran -u' },
        { emoji: '🌺', front: 'Bunga', back: 'Ceria / Gembira', hint: 'Sama-sama berakhiran -a' },
      ]},
    ],
    activityTitle: 'Latihan: Bunyi & Irama',
    questions: [
      { text: 'Kata yang bunyi akhirnya sama dengan "biru" adalah...', opts: ['merah', 'baru', 'hijau', 'putih'], ans: 1, exp: 'biru dan baru sama-sama berakhir bunyi -ru.' },
      { text: 'Kata yang bunyi akhirnya mirip dengan "pagi" adalah...', opts: ['malam', 'lari', 'siang', 'sore'], ans: 1, exp: 'pagi dan lari sama-sama berakhir bunyi -i.' },
      { text: 'Persamaan bunyi akhir baris dalam puisi membuat puisi terdengar...', opts: ['Berisik', 'Indah dan berirama', 'Aneh', 'Salah'], ans: 1, exp: 'Rima membuat puisi terdengar indah dan mudah diingat.' },
    ],
  },
  {
    topicCode: 'BIND-SD1-08', subSeq: 4,
    objectives: ['Siswa mampu mengungkapkan perasaan (senang, sedih, bangga, terima kasih) dengan kalimat sederhana.'],
    materialTitle: 'Mengungkapkan Perasaan dengan Baik',
    blocks: [
      { type: 'visual_cards', title: 'Klik Emoji Perasaan!', items: [
        { visual: '😄', label: 'Senang', caption: 'Aku senang bermain bersama!', speech: 'Senang. Aku senang sekali hari ini.' },
        { visual: '😢', label: 'Sedih', caption: 'Aku sedih mainanku rusak.', speech: 'Sedih. Kalau sedih, ceritakan kepada ayah atau ibu.' },
        { visual: '😮', label: 'Kagum', caption: 'Wah, indahnya pelangi!', speech: 'Kagum. Wah, indahnya pelangi di langit!' },
        { visual: '🥰', label: 'Sayang', caption: 'Aku sayang keluargaku.', speech: 'Sayang. Aku sangat sayang kepada ibu dan ayah.' },
      ]},
    ],
    activityTitle: 'Latihan: Mengungkapkan Perasaan',
    questions: [
      { text: 'Kalimat yang mengungkapkan rasa SENANG adalah...', opts: ['Aku senang sekali mendapat nilai bagus!', 'Aku takut gelap.', 'Kepalaku pusing.', 'Aku sedih pensilku hilang.'], ans: 0, exp: 'Kalimat pertama jelas menyatakan perasaan senang.' },
      { text: 'Saat melihat pemandangan indah, kita mengungkapkan rasa kagum dengan berkata...', opts: ['Wah, indah sekali!', 'Aduh, sakit!', 'Hore, aku lapar!', 'Permisi.'], ans: 0, exp: '"Wah, indah sekali!" adalah ungkapan kagum.' },
      { text: 'Jika merasa sedih atau bingung saat belajar, sebaiknya kita...', opts: ['Menyembunyikannya saja', 'Bercerita sopan kepada guru atau orang tua', 'Marah-marah', 'Merobek buku'], ans: 1, exp: 'Bercerita kepada guru/orang tua membantu kita mendapatkan bantuan.' },
    ],
  },
];

upsertLessonsBatch('Kelas 1 SD — Bahasa Indonesia (8 Bab, 32 Submateri)', LESSONS).catch((err) => {
  console.error(err);
  process.exit(1);
});

