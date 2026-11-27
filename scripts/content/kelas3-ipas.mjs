import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: PANCAINDRA DAN FUNGSINYA
  {
    topicCode: 'IPAS-SD3-01', subSeq: 1,
    objectives: ['Siswa mampu menyebutkan lima alat indra manusia beserta fungsinya secara umum.'],
    materialTitle: 'Mengenal Lima Pancaindra',
    blocks: [
      { type: 'story_panel', title: 'Lima Penjaga Tubuh Kita!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Panca artinya LIMA! Tuhan memberi kita 5 alat indra supaya kita bisa merasakan dunia sekitar!' },
        { speaker: 'Alya', avatar: '👧', text: 'Mata, telinga, hidung, lidah, dan kulit ya Bu!' },
      ]},
      { type: 'visual_cards', title: '5 Pancaindra Manusia (Klik untuk Dengarkan)', cards: [
        { emoji: '👀', label: 'Mata', sub: 'Indra penglihatan', speak: 'Mata adalah indra penglihatan' },
        { emoji: '👂', label: 'Telinga', sub: 'Indra pendengaran', speak: 'Telinga adalah indra pendengaran' },
        { emoji: '👃', label: 'Hidung', sub: 'Indra penciuman', speak: 'Hidung adalah indra penciuman' },
        { emoji: '👅', label: 'Lidah', sub: 'Indra pengecap rasa', speak: 'Lidah adalah indra pengecap' },
        { emoji: '🤚', label: 'Kulit', sub: 'Indra peraba', speak: 'Kulit adalah indra peraba' },
      ]},
    ],
    activityTitle: 'Latihan: Lima Pancaindra',
    questions: [
      { text: 'Kata "panca" dalam pancaindra artinya...', opts: ['Empat', 'Lima', 'Enam', 'Tujuh'], ans: 1, exp: 'Panca berarti lima, jadi pancaindra adalah lima alat indra.' },
      { text: 'Alat indra yang berfungsi untuk mencium aroma masakan adalah...', opts: ['Mata', 'Hidung', 'Lidah', 'Kulit'], ans: 1, exp: 'Hidung adalah indra penciuman/pembau.' },
      { text: 'Yang BUKAN termasuk pancaindra adalah...', opts: ['Telinga', 'Kulit', 'Rambut', 'Lidah'], ans: 2, exp: 'Pancaindra terdiri dari mata, telinga, hidung, lidah, dan kulit.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-01', subSeq: 2,
    objectives: ['Siswa mampu menyebutkan bagian luar dan fungsi mata sebagai indra penglihatan.'],
    materialTitle: 'Fungsi Mata dan Bagian Pelindungnya',
    blocks: [
      { type: 'visual_cards', title: 'Pelindung Mata Kita', cards: [
        { emoji: '👁️', label: 'Alis Mata', sub: 'Menahan keringat dari dahi agar tidak masuk mata' },
        { emoji: '✨', label: 'Bulu Mata', sub: 'Menyaring debu dan cahaya terlalu terang' },
        { emoji: '😌', label: 'Kelopak Mata', sub: 'Menutup dan membasahi mata saat berkedip' },
        { emoji: '⚫', label: 'Pupil', sub: 'Lubang tempat masuknya cahaya ke mata' },
      ]},
      { type: 'tip', text: 'Mata membutuhkan CAHAYA agar dapat melihat benda dengan jelas.' },
    ],
    activityTitle: 'Latihan: Fungsi Mata',
    questions: [
      { text: 'Bagian mata yang menahan keringat dari dahi agar tidak masuk ke mata adalah...', opts: ['Pupil', 'Alis mata', 'Kelopak mata', 'Lensa'], ans: 1, exp: 'Alis mata berfungsi menahan tetesan keringat dari dahi.' },
      { text: 'Fungsi utama mata adalah untuk...', opts: ['Mendengar suara', 'Melihat benda, warna, dan bentuk', 'Mengecap rasa', 'Meraba permukaan'], ans: 1, exp: 'Mata adalah indra penglihatan.' },
      { text: 'Saat berada di tempat gelap gulita kita tidak bisa melihat karena tidak ada...', opts: ['Angin', 'Suara', 'Cahaya', 'Aroma'], ans: 2, exp: 'Mata memerlukan pantulan cahaya untuk melihat.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-01', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan fungsi telinga dan bagian dasarnya (luar, tengah, dalam).'],
    materialTitle: 'Fungsi Telinga sebagai Indra Pendengaran',
    blocks: [
      { type: 'table', title: '3 Bagian Telinga', headers: ['Bagian', 'Contoh Organ', 'Tugasnya'], rows: [
        ['Telinga Luar', 'Daun telinga & lubang telinga', 'Menangkap gelombang bunyi'],
        ['Telinga Tengah', 'Gendang telinga & tulang pendengaran', 'Bergetar meneruskan bunyi'],
        ['Telinga Dalam', 'Rumah siput (koklea)', 'Mengirim pesan suara ke otak & menjaga keseimbangan'],
      ]},
      { type: 'tip', text: 'Selain mendengar, telinga bagian dalam juga membantu tubuh kita menjaga keseimbangan saat berjalan!' },
    ],
    activityTitle: 'Latihan: Fungsi Telinga',
    questions: [
      { text: 'Bagian telinga yang berfungsi menangkap gelombang bunyi dari luar adalah...', opts: ['Daun telinga', 'Alis', 'Kelopak', 'Pori-pori'], ans: 0, exp: 'Daun telinga berbentuk corong untuk menangkap bunyi.' },
      { text: 'Selaput tipis yang bergetar saat terkena bunyi disebut...', opts: ['Gendang telinga', 'Bulu hidung', 'Papila', 'Pupil'], ans: 0, exp: 'Gendang telinga bergetar saat menerima gelombang bunyi.' },
      { text: 'Selain sebagai indra pendengaran, telinga juga berperan sebagai alat...', opts: ['Pengecap', 'Keseimbangan tubuh', 'Pencernaan', 'Pernapasan'], ans: 1, exp: 'Telinga dalam memiliki saluran keseimbangan.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-01', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan fungsi hidung sebagai indra penciuman dan saluran pernapasan.'],
    materialTitle: 'Fungsi Hidung',
    blocks: [
      { type: 'visual_cards', title: 'Tugas Hebat Hidung Kita', cards: [
        { emoji: '🌸', label: 'Mencium Bau', sub: 'Membedakan bau harum, sedap, atau busuk' },
        { emoji: '💨', label: 'Jalan Napas', sub: 'Tempat keluar masuknya udara saat bernapas' },
        { emoji: '🛡️', label: 'Bulu & Lendir Hidung', sub: 'Menyaring debu dan kotoran agar paru-paru bersih' },
      ]},
      { type: 'story_panel', title: 'Kenapa Saat Pilek Makanan Terasa Hambar?', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Bu, kenapa waktu aku pilek, pudak enak pun rasanya kurang sedap?' },
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Karena hidung dan lidah bekerja sama! Kalau hidung tersumbat, aroma makanan tidak tercium.' },
      ]},
    ],
    activityTitle: 'Latihan: Fungsi Hidung',
    questions: [
      { text: 'Fungsi bulu-bulu halus di dalam rongga hidung adalah...', opts: ['Mengecap rasa manis', 'Menyaring debu dan kotoran udara', 'Menangkap bunyi', 'Melihat warna'], ans: 1, exp: 'Bulu hidung menyaring debu agar udara yang masuk lebih bersih.' },
      { text: 'Hidung membantu kita mengenali bahaya dari bau...', opts: ['Asap kebakaran atau gas bocor', 'Warna merah', 'Suara sirine', 'Benda tajam'], ans: 0, exp: 'Bau asap atau gas terdeteksi oleh indra penciuman.' },
      { text: 'Selain mencium bau, hidung merupakan pintu masuk udara untuk...', opts: ['Makan', 'Bernapas', 'Berjalan', 'Melihat'], ans: 1, exp: 'Hidung adalah saluran pernapasan utama.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-01', subSeq: 5,
    objectives: ['Siswa mampu menjelaskan fungsi lidah sebagai indra pengecap rasa dan alat bantu bicara.'],
    materialTitle: 'Fungsi Lidah sebagai Indra Pengecap',
    blocks: [
      { type: 'visual_cards', title: '4 Rasa Utama yang Dikenali Lidah', cards: [
        { emoji: '🍬', label: 'Manis', sub: 'Gula, madu, kue pudak' },
        { emoji: '🧂', label: 'Asin', sub: 'Garam, ikan asin' },
        { emoji: '🍋', label: 'Asam', sub: 'Jeruk nipis, mangga muda' },
        { emoji: '☕', label: 'Pahit', sub: 'Kopi tanpa gula, pare, jamu' },
      ]},
      { type: 'list', title: 'Fungsi Lain Lidah', items: ['Bintil-bintil kecil di permukaan lidah disebut PAPILA (pengecap rasa).', 'Membantu mengaduk makanan saat mengunyah dan menelan.', 'Membantu kita berbicara dengan jelas.'] },
    ],
    activityTitle: 'Latihan: Fungsi Lidah',
    questions: [
      { text: 'Bintil-bintil halus pada permukaan lidah yang peka terhadap rasa disebut...', opts: ['Pupil', 'Papila', 'Pori-pori', 'Koklea'], ans: 1, exp: 'Papila mengandung saraf pengecap rasa.' },
      { text: 'Rasa jeruk nipis dan asam jawa yang dikecap lidah adalah...', opts: ['Manis', 'Asin', 'Asam', 'Pahit'], ans: 2, exp: 'Jeruk nipis berasa asam.' },
      { text: 'Selain mengecap rasa, lidah membantu kita saat...', opts: ['Mendengar musik', 'Berbicara dan menelan makanan', 'Mencium parfum', 'Melihat jauh'], ans: 1, exp: 'Lidah mengatur posisi makanan dan membantu pelafalan huruf saat bicara.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-01', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan fungsi kulit sebagai indra peraba dan pelindung tubuh.'],
    materialTitle: 'Fungsi Kulit sebagai Indra Peraba',
    blocks: [
      { type: 'visual_cards', title: 'Apa yang Bisa Dirasakan Kulit?', cards: [
        { emoji: '🧊', label: 'Panas & Dingin', sub: 'Es batu terasa dingin, teh hangat terasa panas' },
        { emoji: '🪨', label: 'Halus & Kasar', sub: 'Kapas terasa halus, amplas terasa kasar' },
        { emoji: '💧', label: 'Mengatur Suhu', sub: 'Mengeluarkan keringat lewat pori-pori saat gerah' },
        { emoji: '🛡️', label: 'Pelindung Tubuh', sub: 'Melindungi otot dan daging dari kuman dan benturan' },
      ]},
    ],
    activityTitle: 'Latihan: Fungsi Kulit',
    questions: [
      { text: 'Saat menyentuh permukaan batu yang kasar, indra yang bekerja adalah...', opts: ['Lidah', 'Hidung', 'Kulit', 'Telinga'], ans: 2, exp: 'Kulit adalah indra peraba tekstur halus/kasar.' },
      { text: 'Saat cuaca panas di Gresik, kulit mendinginkan tubuh dengan cara mengeluarkan...', opts: ['Air mata', 'Keringat', 'Suara', 'Cahaya'], ans: 1, exp: 'Kelenjar keringat pada kulit mengeluarkan keringat untuk menurunkan suhu tubuh.' },
      { text: 'Bagian kulit yang paling peka untuk meraba biasanya adalah...', opts: ['Ujung jari tangan', 'Tumit kaki', 'Siku', 'Lutut'], ans: 0, exp: 'Ujung jari memiliki sangat banyak ujung saraf peraba.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-01', subSeq: 7,
    objectives: ['Siswa mampu mempraktikkan cara merawat kesehatan kelima pancaindra sehari-hari.'],
    materialTitle: 'Cara Merawat Pancaindra',
    blocks: [
      { type: 'table', title: 'Kebiasaan Baik Merawat Pancaindra', headers: ['Indra', 'Cara Merawat yang Benar', 'Yang Harus Dihindari'], rows: [
        ['Mata', 'Membaca di tempat terang, makan wortel', 'Membaca sambil tiduran / terlalu dekat HP'],
        ['Telinga', 'Bersihkan daun telinga dengan kain lembut', 'Mengorek lubang telinga terlalu dalam / suara terlalu keras'],
        ['Hidung', 'Memakai masker saat berdebu, bersihkan lembut', 'Memasukkan benda kecil ke lubang hidung'],
        ['Lidah', 'Menyikat gigi dan lidah lembut, makan hangat', 'Makan/minum terlalu panas atau terlalu dingin'],
        ['Kulit', 'Mandi 2× sehari pakai sabun, minum cukup air', 'Membiarkan kulit kotor dan berkeringat lama'],
      ]},
    ],
    activityTitle: 'Latihan: Merawat Pancaindra',
    questions: [
      { text: 'Kebiasaan yang BAIK untuk menjaga kesehatan mata adalah...', opts: ['Membaca di tempat gelap', 'Membaca sambil tiduran', 'Membaca di tempat terang dengan jarak sekitar 30 cm', 'Menatap matahari langsung'], ans: 2, exp: 'Cahaya cukup dan jarak 30 cm mencegah mata cepat lelah.' },
      { text: 'Untuk menjaga kesehatan telinga, kita sebaiknya menghindari...', opts: ['Mendengarkan musik dengan volume terlalu keras', 'Membersihkan daun telinga', 'Beristirahat', 'Mandi teratur'], ans: 0, exp: 'Suara terlalu keras dapat merusak gendang telinga.' },
      { text: 'Vitamin yang sangat baik untuk kesehatan mata dan banyak terdapat pada wortel adalah...', opts: ['Vitamin A', 'Vitamin D', 'Vitamin K', 'Zat besi'], ans: 0, exp: 'Wortel kaya Vitamin A untuk kesehatan mata.' },
    ],
  },

  // BAB 2: SIKLUS HIDUP MAKHLUK HIDUP
  {
    topicCode: 'IPAS-SD3-02', subSeq: 1,
    objectives: ['Siswa mampu membedakan makhluk hidup dan benda tak hidup berdasarkan ciri-cirinya.'],
    materialTitle: 'Ciri-Ciri Makhluk Hidup',
    blocks: [
      { type: 'visual_cards', title: '6 Ciri Utama Makhluk Hidup', cards: [
        { emoji: '🌬️', label: 'Bernapas', sub: 'Menghirup oksigen (paru-paru, insang, stomata)' },
        { emoji: '🍽️', label: 'Makan & Minum', sub: 'Untuk memperoleh energi' },
        { emoji: '🏃', label: 'Bergerak', sub: 'Berjalan, terbang, berenang, tumbuh ke cahaya' },
        { emoji: '🌱', label: 'Tumbuh', sub: 'Bertambah besar dan tinggi' },
        { emoji: '🐣', label: 'Berkembang Biak', sub: 'Menghasilkan keturunan (bertelur/melahirkan/biji)' },
        { emoji: '⚡', label: 'Peka Rangsang', sub: 'Daun putri malu mengatup saat disentuh' },
      ]},
    ],
    activityTitle: 'Latihan: Ciri Makhluk Hidup',
    questions: [
      { text: 'Daun putri malu yang mengatup saat disentuh menunjukkan ciri makhluk hidup yaitu...', opts: ['Bernapas', 'Peka terhadap rangsang', 'Berkembang biak', 'Memerlukan makan'], ans: 1, exp: 'Respons terhadap sentuhan adalah peka terhadap rangsang (iritabilitas).' },
      { text: 'Mobil bisa bergerak, tetapi BUKAN makhluk hidup karena mobil tidak...', opts: ['Memiliki roda', 'Tumbuh dan berkembang biak', 'Memiliki lampu', 'Berwarna'], ans: 1, exp: 'Mobil digerakkan mesin dan tidak tumbuh, bernapas, atau berkembang biak.' },
      { text: 'Ikan bandeng di tambak Gresik bernapas menggunakan...', opts: ['Paru-paru', 'Insang', 'Kulit', 'Trakea'], ans: 1, exp: 'Ikan bernapas di dalam air menggunakan insang.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-02', subSeq: 2,
    objectives: ['Siswa mampu menyebutkan kebutuhan dasar manusia, hewan, dan tumbuhan agar dapat bertahan hidup.'],
    materialTitle: 'Kebutuhan Makhluk Hidup',
    blocks: [
      { type: 'visual_cards', title: 'Kebutuhan Utama Makhluk Hidup', cards: [
        { emoji: '💨', label: 'Udara Bersih', sub: 'Untuk bernapas setiap detik' },
        { emoji: '💧', label: 'Air', sub: 'Untuk minum dan menyiram tanaman' },
        { emoji: '🥗', label: 'Makanan / Nutrisi', sub: 'Sumber tenaga dan pertumbuhan' },
        { emoji: '☀️', label: 'Cahaya Matahari', sub: 'Membantu tumbuhan membuat makanan (fotosintesis)' },
        { emoji: '🏠', label: 'Tempat Tinggal', sub: 'Melindungi diri dari panas, hujan, dan bahaya' },
      ]},
    ],
    activityTitle: 'Latihan: Kebutuhan Makhluk Hidup',
    questions: [
      { text: 'Tumbuhan hijau membutuhkan cahaya matahari dan air untuk...', opts: ['Tidur', 'Membuat makanan sendiri (fotosintesis)', 'Berlari', 'Mengeluarkan suara'], ans: 1, exp: 'Tumbuhan berfotosintesis menggunakan cahaya matahari, air, dan karbon dioksida.' },
      { text: 'Jika tanaman pot diletakkan di lemari gelap dan tidak disiram, lama-kelamaan akan...', opts: ['Tumbuh subur', 'Layu dan mati', 'Berbuah lebat', 'Berubah jadi batu'], ans: 1, exp: 'Tanpa air dan cahaya matahari, tumbuhan tidak bisa membuat makanan.' },
      { text: 'Kebutuhan paling mendesak yang selalu dibutuhkan makhluk hidup setiap saat adalah...', opts: ['Mainan', 'Udara untuk bernapas', 'Televisi', 'Sepatu'], ans: 1, exp: 'Semua makhluk hidup butuh udara terus-menerus untuk bernapas.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-02', subSeq: 3,
    objectives: ['Siswa mampu mengurutkan tahapan siklus hidup manusia dari bayi hingga lanjut usia.'],
    materialTitle: 'Siklus Hidup Manusia',
    blocks: [
      { type: 'visual_cards', title: 'Tahapan Pertumbuhan Manusia', cards: [
        { emoji: '👶', label: '1. Bayi', sub: 'Baru lahir, minum ASI, belajar merangkak' },
        { emoji: '🧒', label: '2. Balita & Anak-Anak', sub: 'Belajar bicara, bermain, sekolah SD' },
        { emoji: '🧑', label: '3. Remaja', sub: 'Tubuh tumbuh cepat, sekolah SMP/SMA' },
        { emoji: '👨‍💼', label: '4. Dewasa', sub: 'Bekerja, berkeluarga, memiliki anak' },
        { emoji: '👴', label: '5. Lanjut Usia (Lansia)', sub: 'Rambut memutih, banyak pengalaman hidup' },
      ]},
      { type: 'tip', text: 'Pertumbuhan manusia berubah ukuran (makin tinggi & berat) dan kemampuan (dari merangkak hingga berjalan dan membaca).' },
    ],
    activityTitle: 'Latihan: Siklus Hidup Manusia',
    questions: [
      { text: 'Urutan tahapan pertumbuhan manusia yang BENAR adalah...', opts: ['Bayi → Anak-anak → Remaja → Dewasa → Lansia', 'Anak-anak → Bayi → Dewasa → Remaja', 'Remaja → Bayi → Lansia → Dewasa', 'Dewasa → Bayi → Anak-anak → Lansia'], ans: 0, exp: 'Manusia tumbuh berurutan dari bayi, anak-anak, remaja, dewasa, hingga lansia.' },
      { text: 'Siswa kelas 3 SD berada pada tahap pertumbuhan...', opts: ['Bayi', 'Anak-anak', 'Dewasa', 'Lansia'], ans: 1, exp: 'Usia SD (6–12 tahun) adalah masa anak-anak.' },
      { text: 'Contoh pertumbuhan pada manusia adalah...', opts: ['Tinggi badan bertambah', 'Berganti baju', 'Membeli sepatu baru', 'Pindah rumah'], ans: 0, exp: 'Pertumbuhan ditandai bertambahnya tinggi dan berat badan.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-02', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan siklus hidup hewan tanpa metamorfosis (ayam, kucing, ikan).'],
    materialTitle: 'Siklus Hidup Hewan (Tanpa Metamorfosis)',
    blocks: [
      { type: 'story_panel', title: 'Hewan yang Bentuk Anaknya Mirip Induk', lines: [
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Ada hewan yang saat lahir atau menetas bentuknya sudah mirip induknya, hanya ukurannya kecil!' },
        { speaker: 'Raka', avatar: '👦', text: 'Contohnya kucing dan ayam ya Pak! Anak ayam langsung punya paruh dan kaki dua.' },
      ]},
      { type: 'table', title: 'Contoh Siklus Hewan Tanpa Metamorfosis', headers: ['Hewan', 'Cara Berkembang Biak', 'Urutan Siklus Hidup'], rows: [
        ['Ayam', 'Bertelur (ovipar)', 'Telur → Anak ayam → Ayam dewasa'],
        ['Kucing', 'Melahirkan (vivipar)', 'Anak kucing → Kucing muda → Kucing dewasa'],
        ['Ikan', 'Bertelur', 'Telur → Anak ikan → Ikan dewasa'],
      ]},
    ],
    activityTitle: 'Latihan: Siklus Hidup Hewan',
    questions: [
      { text: 'Urutan siklus hidup ayam yang benar adalah...', opts: ['Telur → Ulat → Ayam', 'Telur → Anak ayam → Ayam dewasa', 'Anak ayam → Telur → Kepompong', 'Telur → Berudu → Ayam'], ans: 1, exp: 'Ayam tidak mengalami metamorfosis: Telur → Anak ayam → Ayam dewasa.' },
      { text: 'Hewan yang berkembang biak dengan cara melahirkan adalah...', opts: ['Ayam', 'Kucing', 'Ikan bandeng', 'Kupu-kupu'], ans: 1, exp: 'Kucing melahirkan anak kucing.' },
      { text: 'Ciri hewan tanpa metamorfosis adalah bentuk anaknya...', opts: ['Sangat berbeda dari induk', 'Sudah mirip dengan induknya', 'Berubah jadi kepompong', 'Selalu hidup di air'], ans: 1, exp: 'Anaknya hanya lebih kecil lalu tumbuh membesar.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-02', subSeq: 5,
    objectives: ['Siswa mampu mengurutkan siklus hidup tumbuhan berbiji (biji → kecambah → tumbuhan muda → dewasa).'],
    materialTitle: 'Siklus Hidup Tumbuhan',
    blocks: [
      { type: 'visual_cards', title: 'Perjalanan Tumbuhnya Tanaman Kacang', cards: [
        { emoji: '🫘', label: '1. Biji', sub: 'Ditanam di tanah yang lembap' },
        { emoji: '🌱', label: '2. Kecambah', sub: 'Akar dan tunas kecil mulai muncul' },
        { emoji: '🌿', label: '3. Tanaman Muda', sub: 'Batang meninggi dan daun bertambah banyak' },
        { emoji: '🌻', label: '4. Berbunga & Berbuah', sub: 'Menghasilkan buah dan biji baru lagi!' },
      ]},
    ],
    activityTitle: 'Latihan: Siklus Hidup Tumbuhan',
    questions: [
      { text: 'Urutan siklus hidup tumbuhan kacang hijau yang benar adalah...', opts: ['Biji → Kecambah → Tumbuhan muda → Tumbuhan berbunga/berbiji', 'Buah → Biji → Akar saja', 'Bunga → Biji → Kecambah → Daun jatuh', 'Kecambah → Biji → Pohon'], ans: 0, exp: 'Dimulai dari biji, berkecambah, tumbuh dewasa, lalu berbunga dan menghasilkan biji baru.' },
      { text: 'Bagian tumbuhan yang pertama kali muncul keluar dari biji saat berkecambah adalah...', opts: ['Bunga', 'Akar (calon akar)', 'Buah', 'Biji baru'], ans: 1, exp: 'Calon akar muncul lebih dulu untuk menyerap air.' },
      { text: 'Tumbuhan seperti pisang dan bambu berkembang biak secara alami dengan...', opts: ['Bertelur', 'Tunas', 'Kepompong', 'Melahirkan'], ans: 1, exp: 'Pisang dan bambu menumbuhkan tunas di samping induknya.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-02', subSeq: 6,
    objectives: ['Siswa mampu membedakan metamorfosis sempurna (kupu-kupu, katak, nyamuk) dan tidak sempurna (belalang, kecoak).'],
    materialTitle: 'Metamorfosis Sempurna dan Tidak Sempurna',
    blocks: [
      { type: 'table', title: 'Perbandingan 2 Jenis Metamorfosis', headers: ['Jenis', 'Ciri Utama', 'Tahapan & Contoh'], rows: [
        ['Metamorfosis Sempurna', 'Bentuk anak SANGAT BEDA dari induk, ada fase pupa/kepompong (pada serangga)', 'Telur → Larva (ulat) → Pupa (kepompong) → Dewasa (Kupu-kupu, nyamuk, lalat; Katak: telur→berudu→katak muda→dewasa)'],
        ['Metamorfosis Tidak Sempurna', 'Bentuk anak (nimfa) mirip induk tapi belum bersayap, TANPA pupa', 'Telur → Nimfa → Dewasa (Belalang, kecoak, capung)'],
      ]},
      { type: 'tip', text: 'Ingat cepat: Sempurna = ada 4 tahap (ada ulat & kepompong). Tidak sempurna = hanya 3 tahap (Telur → Nimfa → Dewasa).' },
    ],
    activityTitle: 'Latihan: Metamorfosis',
    questions: [
      { text: 'Urutan metamorfosis sempurna pada kupu-kupu adalah...', opts: ['Telur → Nimfa → Kupu-kupu', 'Telur → Ulat (larva) → Kepompong (pupa) → Kupu-kupu', 'Telur → Kepompong → Ulat → Kupu-kupu', 'Ulat → Telur → Kupu-kupu'], ans: 1, exp: 'Kupu-kupu mengalami 4 tahap: Telur → Larva → Pupa → Imago (dewasa).' },
      { text: 'Hewan yang mengalami metamorfosis TIDAK sempurna adalah...', opts: ['Kupu-kupu', 'Nyamuk', 'Belalang', 'Lalat'], ans: 2, exp: 'Belalang mengalami Telur → Nimfa → Belalang dewasa (tanpa pupa).' },
      { text: 'Tahap larva pada siklus hidup katak yang hidup di air dan berekor disebut...', opts: ['Ulat', 'Berudu (kecebong)', 'Nimfa', 'Kepompong'], ans: 1, exp: 'Telur katak menetas menjadi berudu/kecebong yang bernapas dengan insang.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-02', subSeq: 7,
    objectives: ['Siswa mampu menyebutkan cara sederhana melestarikan hewan dan tumbuhan di lingkungan sekitar.'],
    materialTitle: 'Pelestarian Makhluk Hidup',
    blocks: [
      { type: 'visual_cards', title: 'Aksi Kecil Menjaga Alam Sekitar', cards: [
        { emoji: '🌳', label: 'Menanam Pohon', sub: 'Menghijaukan halaman rumah dan sekolah' },
        { emoji: '♻️', label: 'Tidak Buang Sampah Sembarangan', sub: 'Menjaga sungai dan tambak tetap bersih untuk ikan' },
        { emoji: '🐾', label: 'Tidak Memburu Hewan Langka', sub: 'Melindungi satwa agar tidak punah' },
        { emoji: '💧', label: 'Menyiram & Merawat Tanaman', sub: 'Menyayangi tumbuhan dan hewan peliharaan' },
      ]},
    ],
    activityTitle: 'Latihan: Pelestarian Makhluk Hidup',
    questions: [
      { text: 'Sikap yang membantu melestarikan tumbuhan di sekolah adalah...', opts: ['Memetik bunga sembarangan', 'Menyiram dan merawat tanaman taman sekolah', 'Menginjak rumput baru', 'Membuang plastik di pot'], ans: 1, exp: 'Menyiram dan merawat tanaman membantu tumbuhan tetap hidup subur.' },
      { text: 'Membuang sampah ke sungai dapat membahayakan siklus hidup...', opts: ['Ikan dan makhluk air', 'Batu', 'Awan', 'Meja'], ans: 0, exp: 'Air tercemar merusak habitat ikan dan organisme air.' },
      { text: 'Jika suatu jenis hewan terus diburu tanpa dijaga, hewan tersebut dapat mengalami...', opts: ['Pertumbuhan pesat', 'Kepunahan', 'Metamorfosis', 'Fotosintesis'], ans: 1, exp: 'Perburuan liar menyebabkan populasi menurun hingga punah.' },
    ],
  },

  // BAB 3: LINGKUNGAN SOSIAL DI SEKITAR
  {
    topicCode: 'IPAS-SD3-03', subSeq: 1,
    objectives: ['Siswa mampu mengenal lingkungan sosial di rumah, sekolah, dan tetangga sekitar.'],
    materialTitle: 'Lingkungan Rumah dan Sekolah',
    blocks: [
      { type: 'story_panel', title: 'Kita Tidak Hidup Sendirian!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Manusia adalah makhluk sosial, artinya kita selalu membutuhkan bantuan orang lain.' },
        { speaker: 'Nadia', avatar: '👧', text: 'Di rumah ada keluarga, di sekitar rumah ada tetangga, dan di sekolah ada guru serta teman!' },
      ]},
      { type: 'visual_cards', title: '3 Lingkungan Sosial Terdekat', cards: [
        { emoji: '🏠', label: 'Keluarga (Rumah)', sub: 'Ayah, ibu, kakak, adik, kakek, nenek' },
        { emoji: '🏫', label: 'Sekolah', sub: 'Kepala sekolah, guru, teman, penjaga sekolah' },
        { emoji: '🏘️', label: 'Masyarakat / RT', sub: 'Tetangga, Pak RT, pedagang pasar' },
      ]},
    ],
    activityTitle: 'Latihan: Lingkungan Rumah & Sekolah',
    questions: [
      { text: 'Manusia disebut makhluk sosial karena...', opts: ['Bisa hidup sendiri tanpa bantuan siapa pun', 'Selalu saling membutuhkan dan berinteraksi dengan orang lain', 'Hanya tinggal di hutan', 'Tidak suka berbicara'], ans: 1, exp: 'Makhluk sosial berarti tidak bisa hidup sendiri dan saling membutuhkan.' },
      { text: 'Lingkungan sosial pertama yang dikenal seorang anak sejak lahir adalah...', opts: ['Kantor', 'Keluarga', 'Pasar', 'Terminal'], ans: 1, exp: 'Keluarga adalah lingkungan sosial pertama bagi anak.' },
      { text: 'Orang yang tinggal di sebelah atau dekat rumah kita disebut...', opts: ['Turis', 'Tetangga', 'Penonton', 'Wasit'], ans: 1, exp: 'Tetangga adalah warga yang tinggal berdekatan dengan rumah kita.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-03', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan peran masing-masing anggota keluarga inti.'],
    materialTitle: 'Peran Anggota Keluarga',
    blocks: [
      { type: 'table', title: 'Peran di Dalam Keluarga', headers: ['Anggota Keluarga', 'Peran Utama'], rows: [
        ['Ayah', 'Kepala keluarga, mencari nafkah, melindungi dan membimbing keluarga'],
        ['Ibu', 'Mengurus keluarga, mendidik anak, dapat pula membantu mencari nafkah'],
        ['Anak', 'Belajar dengan rajin, menghormati orang tua, membantu pekerjaan rumah sesuai usia'],
      ]},
      { type: 'tip', text: 'Semua anggota keluarga saling menyayangi dan bekerja sama agar rumah terasa nyaman dan rukun!' },
    ],
    activityTitle: 'Latihan: Peran Anggota Keluarga',
    questions: [
      { text: 'Peran utama seorang anak di dalam keluarga adalah...', opts: ['Belajar rajin, patuh, dan membantu orang tua', 'Menyuruh-nyuruh orang tua', 'Bermain terus tanpa belajar', 'Tidak merapikan mainan'], ans: 0, exp: 'Anak berperan belajar sungguh-sungguh, berbakti, dan membantu pekerjaan ringan.' },
      { text: 'Jika ibu sedang memasak dan adik menangis, sikap kakak yang baik adalah...', opts: ['Membiarkan saja', 'Membantu menjaga dan menghibur adik', 'Ikut marah', 'Pergi bermain jauh'], ans: 1, exp: 'Saling membantu meringankan tugas orang tua.' },
      { text: 'Semua anggota keluarga harus menjalankan perannya dengan...', opts: ['Terpaksa', 'Tanggung jawab dan kasih sayang', 'Marah-marah', 'Malas'], ans: 1, exp: 'Tanggung jawab menciptakan keluarga yang harmonis.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-03', subSeq: 3,
    objectives: ['Siswa mampu membedakan hak, kewajiban, tugas, dan tanggung jawab di rumah dan sekolah.'],
    materialTitle: 'Tugas dan Tanggung Jawab',
    blocks: [
      { type: 'visual_cards', title: 'Kewajiban & Hak Anak', cards: [
        { emoji: '✅', label: 'Kewajiban (Tugas)', sub: 'Sesuatu yang HARUS dikerjakan: belajar, piket kelas, merapikan kamar' },
        { emoji: '🎁', label: 'Hak', sub: 'Sesuatu yang kita TERIMA: kasih sayang, ilmu pelajaran, waktu bermain' },
        { emoji: '⚖️', label: 'Seimbang', sub: 'Kerjakan kewajiban dengan baik agar hak pun terpenuhi!' },
      ]},
    ],
    activityTitle: 'Latihan: Tugas & Tanggung Jawab',
    questions: [
      { text: 'Contoh kewajiban siswa di sekolah adalah...', opts: ['Mendapat nilai bagus tanpa belajar', 'Mengikuti pelajaran dan melaksanakan piket kelas', 'Mendapat uang saku', 'Bermain di jam pelajaran'], ans: 1, exp: 'Belajar dan menjaga kebersihan kelas adalah kewajiban siswa.' },
      { text: 'Sesuatu yang berhak kita terima setelah menjalankan kewajiban disebut...', opts: ['Tugas', 'Hak', 'Hukuman', 'Larangan'], ans: 1, exp: 'Hak adalah sesuatu yang layak diterima setiap orang.' },
      { text: 'Jika kamu tidak sengaja menjatuhkan buku teman, sikap bertanggung jawab adalah...', opts: ['Lari meninggalkan', 'Segera mengambilkan dan meminta maaf', 'Menyalahkan orang lain', 'Diam saja'], ans: 1, exp: 'Bertanggung jawab berarti berani mengakui kesalahan dan memperbaikinya.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-03', subSeq: 4,
    objectives: ['Siswa mampu memberi contoh interaksi sosial yang sopan dan positif di sekitar.'],
    materialTitle: 'Interaksi Sosial Sehari-Hari',
    blocks: [
      { type: 'story_panel', title: '3 Kata Ajaib dalam Pergaulan!', lines: [
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Interaksi sosial adalah hubungan timbal balik antarmanusia — seperti menyapa, berdiskusi, atau jual beli di pasar.' },
        { speaker: 'Salsa', avatar: '👧', text: 'Supaya interaksi selalu rukun, kita pakai 3 kata ajaib: Tolong, Terima kasih, dan Maaf!' },
      ]},
      { type: 'list', title: 'Contoh Interaksi Positif', items: ['Menyapa dan tersenyum saat bertemu guru atau tetangga.', 'Mendengarkan saat teman sedang berbicara.', 'Menjenguk teman yang sedang sakit.'] },
    ],
    activityTitle: 'Latihan: Interaksi Sosial',
    questions: [
      { text: 'Contoh interaksi sosial di sekolah adalah...', opts: ['Tidur sendirian di kamar', 'Berdiskusi kelompok bersama teman dan guru', 'Menonton TV sendiri', 'Membaca diam di gudang'], ans: 1, exp: 'Interaksi sosial melibatkan komunikasi dua arah antarmanusia.' },
      { text: 'Saat dibantu teman membawakan buku yang berat, kita sebaiknya mengucapkan...', opts: ['Permisi', 'Terima kasih', 'Awas', 'Diam saja'], ans: 1, exp: 'Mengucapkan terima kasih adalah bentuk sopan santun.' },
      { text: 'Jika ada teman yang berbeda suku atau asal daerah, sikap kita adalah...', opts: ['Menjauhinya', 'Mengejek logatnya', 'Tetap berteman baik dan saling menghargai', 'Tidak mau satu kelompok'], ans: 2, exp: 'Menghargai perbedaan menjaga kerukunan.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-03', subSeq: 5,
    objectives: ['Siswa memahami manfaat kerja sama dan gotong royong di rumah, sekolah, dan masyarakat.'],
    materialTitle: 'Kerja Sama dan Gotong Royong',
    blocks: [
      { type: 'visual_cards', title: 'Manfaat Gotong Royong', cards: [
        { emoji: '⚡', label: 'Pekerjaan Cepat Selesai', sub: 'Berat sama dipikul, ringan sama dijinjing' },
        { emoji: '🤝', label: 'Mempererat Persaudaraan', sub: 'Warga dan teman makin akrab dan kompak' },
        { emoji: '🏡', label: 'Lingkungan Nyaman', sub: 'Kerja bakti membersihkan selokan mencegah banjir' },
      ]},
      { type: 'misconception', wrong: 'Kerja sama boleh dilakukan saat ulangan (menyontek).', right: 'Menyontek BUKAN kerja sama yang baik! Ulangan harus dikerjakan jujur sendiri; kerja sama dilakukan saat piket, diskusi, atau kerja bakti.' },
    ],
    activityTitle: 'Latihan: Kerja Sama & Gotong Royong',
    questions: [
      { text: 'Contoh kerja sama yang BENAR di sekolah adalah...', opts: ['Menyontek jawaban saat ulangan', 'Membersihkan ruang kelas bersama saat piket', 'Mengerjakan PR teman dengan imbalan uang', 'Berisik bersama saat guru menerangkan'], ans: 1, exp: 'Piket kelas bersama membuat kelas bersih dan cepat selesai.' },
      { text: 'Manfaat utama gotong royong membersihkan lingkungan RT adalah...', opts: ['Pekerjaan terasa lebih berat', 'Lingkungan bersih dan warga makin rukun', 'Membuat warga bertengkar', 'Menghabiskan waktu sia-sia'], ans: 1, exp: 'Gotong royong meringankan pekerjaan dan mempererat kerukunan.' },
      { text: 'Kerja sama TIDAK boleh dilakukan dalam hal...', opts: ['Kerja bakti', 'Diskusi kelompok', 'Mengerjakan ujian/ulangan', 'Menyiapkan lomba kelas'], ans: 2, exp: 'Ulangan menilai kemampuan diri sendiri secara jujur.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-03', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan tujuan aturan dan akibat jika aturan dilanggar.'],
    materialTitle: 'Aturan dalam Kehidupan Bersama',
    blocks: [
      { type: 'table', title: 'Contoh Aturan di Sekitar Kita', headers: ['Tempat', 'Contoh Aturan', 'Tujuannya'], rows: [
        ['Rumah', 'Merapikan tempat tidur, izin sebelum pergi', 'Rumah rapi dan orang tua tidak cemas'],
        ['Sekolah', 'Datang tepat waktu, memakai seragam rapi', 'Belajar tertib dan disiplin'],
        ['Jalan Raya', 'Berhenti saat lampu merah, memakai helm', 'Keselamatan pengendara dan pejalan kaki'],
      ]},
    ],
    activityTitle: 'Latihan: Aturan Bersama',
    questions: [
      { text: 'Tujuan utama dibuatnya aturan di sekolah dan masyarakat adalah agar kehidupan menjadi...', opts: ['Kacau dan ribut', 'Tertib, aman, dan nyaman', 'Takut dan tegang', 'Sepi'], ans: 1, exp: 'Aturan menjaga ketertiban, keamanan, dan kenyamanan bersama.' },
      { text: 'Jika pengendara melanggar lampu merah di jalan raya, akibatnya bisa terjadi...', opts: ['Jalan makin lancar', 'Kecelakaan lalu lintas', 'Dapat hadiah', 'Kendaraan lebih cepat awet'], ans: 1, exp: 'Melanggar rambu lalu lintas membahayakan keselamatan.' },
      { text: 'Sebelum bermain ke rumah teman, aturan yang baik di rumah adalah...', opts: ['Langsung pergi diam-diam', 'Berpamitan dan meminta izin kepada orang tua', 'Mengunci pintu dari luar', 'Pulang tengah malam'], ans: 1, exp: 'Berpamitan membuat orang tua tahu keberadaan kita dan tenang.' },
    ],
  },

  // BAB 4: ENERGI DAN PERUBAHANNYA
  {
    topicCode: 'IPAS-SD3-04', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian energi sebagai kemampuan melakukan usaha/aktivitas.'],
    materialTitle: 'Apa Itu Energi?',
    blocks: [
      { type: 'story_panel', title: 'Kenapa Kita Bisa Berlari?', lines: [
        { speaker: 'Pak Guru', avatar: '👨‍🏫', text: 'Pernah merasa lemas kalau belum sarapan? Itu karena tubuhmu kehabisan ENERGI!' },
        { speaker: 'Bima', avatar: '👦', text: 'Berarti energi adalah tenaga yang membuat kita dan benda-benda bisa bergerak atau bekerja ya Pak!' },
      ]},
      { type: 'tip', text: 'Energi tidak bisa dilihat wujudnya secara langsung, tetapi bisa kita rasakan manfaatnya (panas, cahaya, gerak, bunyi).' },
    ],
    activityTitle: 'Latihan: Pengertian Energi',
    questions: [
      { text: 'Kemampuan untuk melakukan kerja atau aktivitas disebut...', opts: ['Benda', 'Energi', 'Bayangan', 'Warna'], ans: 1, exp: 'Energi adalah kemampuan untuk melakukan usaha/kegiatan.' },
      { text: 'Manusia memperoleh energi untuk belajar dan bermain dari...', opts: ['Makanan dan minuman bergizi', 'Batu dan pasir', 'Kertas', 'Plastik'], ans: 0, exp: 'Makanan diubah tubuh menjadi energi.' },
      { text: 'Kipas angin bisa berputar karena mendapat energi dari...', opts: ['Air hujan', 'Listrik', 'Tanah', 'Kayu'], ans: 1, exp: 'Kipas angin digerakkan energi listrik.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-04', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi berbagai sumber energi utama di bumi (matahari, air, angin, makanan, listrik, baterai).'],
    materialTitle: 'Sumber-Sumber Energi',
    blocks: [
      { type: 'visual_cards', title: 'Sumber Energi di Sekitar Kita', cards: [
        { emoji: '☀️', label: 'Matahari', sub: 'Sumber energi TERBESAR di bumi (panas & cahaya)' },
        { emoji: '🍚', label: 'Makanan', sub: 'Sumber energi kimia bagi manusia & hewan' },
        { emoji: '💨', label: 'Angin & Air', sub: 'Menggerakkan perahu layar, kincir, dan turbin listrik' },
        { emoji: '🔋', label: 'Baterai & Listrik', sub: 'Menyalakan senter, jam dinding, lampu, dan TV' },
      ]},
    ],
    activityTitle: 'Latihan: Sumber Energi',
    questions: [
      { text: 'Sumber energi panas dan cahaya TERBESAR bagi bumi adalah...', opts: ['Bulan', 'Matahari', 'Lilin', 'Senter'], ans: 1, exp: 'Matahari memancarkan energi panas dan cahaya terbesar ke bumi.' },
      { text: 'Sumber energi yang digunakan untuk menyalakan jam dinding dan senter adalah...', opts: ['Angin', 'Baterai', 'Air terjun', 'Kayu bakar'], ans: 1, exp: 'Jam dinding dan senter memakai energi kimia dari baterai.' },
      { text: 'Perahu layar nelayan dapat bergerak di laut memanfaatkan sumber energi...', opts: ['Angin', 'Baterai', 'Listrik', 'Bunyi'], ans: 0, exp: 'Angin mendorong layar sehingga perahu melaju.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-04', subSeq: 3,
    objectives: ['Siswa mampu menyebutkan berbagai bentuk energi (panas, cahaya, bunyi, gerak, listrik, kimia).'],
    materialTitle: 'Bentuk-Bentuk Energi',
    blocks: [
      { type: 'flashcards', title: 'Tebak Bentuk Energinya (Klik Kartunya!)', cards: [
        { emoji: '🔥', front: 'Api kompor & setrika menghasilkan energi...', back: 'Energi Panas (Kalor)' },
        { emoji: '💡', front: 'Lampu dan matahari menghasilkan energi...', back: 'Energi Cahaya' },
        { emoji: '🎸', front: 'Gitar dipetik & bel sekolah menghasilkan energi...', back: 'Energi Bunyi' },
        { emoji: '🚲', front: 'Sepeda melaju & kincir berputar memiliki energi...', back: 'Energi Gerak (Kinetik)' },
        { emoji: '🔋', front: 'Makanan, bensin, dan baterai menyimpan energi...', back: 'Energi Kimia' },
      ]},
    ],
    activityTitle: 'Latihan: Bentuk Energi',
    questions: [
      { text: 'Energi yang tersimpan di dalam makanan, bensin, dan baterai disebut energi...', opts: ['Bunyi', 'Kimia', 'Cahaya', 'Gerak'], ans: 1, exp: 'Makanan, bahan bakar, dan baterai menyimpan energi kimia.' },
      { text: 'Saat bel sekolah berbunyi, energi yang kita dengar adalah energi...', opts: ['Bunyi', 'Panas', 'Kimia', 'Cahaya'], ans: 0, exp: 'Getaran bel menghasilkan energi bunyi.' },
      { text: 'Air terjun yang mengalir deras memiliki energi...', opts: ['Cahaya', 'Gerak', 'Bunyi saja', 'Kimia'], ans: 1, exp: 'Air yang mengalir deras memiliki energi gerak.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-04', subSeq: 4,
    objectives: ['Siswa mampu memberi contoh nyata energi panas, cahaya, bunyi, dan gerak dalam kehidupan sehari-hari.'],
    materialTitle: 'Energi Panas, Cahaya, Bunyi, dan Gerak',
    blocks: [
      { type: 'table', title: '4 Energi yang Sering Kita Jumpai', headers: ['Bentuk Energi', 'Contoh Sumber', 'Manfaat Sehari-Hari'], rows: [
        ['Panas', 'Matahari, api, setrika', 'Mengeringkan pakaian & ikan asin, memasak'],
        ['Cahaya', 'Matahari, lampu, senter', 'Menerangi ruangan, fotosintesis tumbuhan'],
        ['Bunyi', 'Alat musik, speaker, lonceng', 'Berkomunikasi, mendengarkan musik, tanda bahaya'],
        ['Gerak', 'Angin, kipas, sepeda', 'Memutar kincir, menggerakkan kendaraan'],
      ]},
    ],
    activityTitle: 'Latihan: Panas, Cahaya, Bunyi, Gerak',
    questions: [
      { text: 'Nelayan menjemur ikan agar cepat kering memanfaatkan energi ... dari matahari.', opts: ['Bunyi', 'Panas', 'Listrik', 'Kimia'], ans: 1, exp: 'Energi panas matahari menguapkan air pada ikan.' },
      { text: 'Energi bunyi dihasilkan oleh benda yang...', opts: ['Diam saja', 'Bergetar', 'Membeku', 'Bercahaya'], ans: 1, exp: 'Semua sumber bunyi (senar gitar, gendang, pita suara) menghasilkan bunyi karena bergetar.' },
      { text: 'Lampu ruang belajar membantu kita membaca di malam hari karena menghasilkan energi...', opts: ['Gerak', 'Cahaya', 'Bunyi', 'Angin'], ans: 1, exp: 'Lampu memancarkan energi cahaya.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-04', subSeq: 5,
    objectives: ['Siswa mampu menjelaskan perubahan satu bentuk energi ke bentuk energi lain pada alat rumah tangga.'],
    materialTitle: 'Perubahan Bentuk Energi',
    blocks: [
      { type: 'story_panel', title: 'Energi Bisa Berubah Wujud!', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Energi tidak bisa hilang, tapi bisa BERUBAH bentuk! Misalnya setrika mengubah listrik jadi panas!' },
        { speaker: 'Alya', avatar: '👧', text: 'Kalau kipas angin berarti listrik berubah jadi gerak ya Bu!' },
      ]},
      { type: 'flashcards', title: 'Tebak Perubahan Energinya! (Klik untuk Cek)', cards: [
        { emoji: '🔌', front: 'Setrika & Rice Cooker', back: 'Listrik → Panas' },
        { emoji: '🌀', front: 'Kipas Angin & Blender', back: 'Listrik → Gerak' },
        { emoji: '💡', front: 'Lampu Kamar', back: 'Listrik → Cahaya (+ sedikit panas)' },
        { emoji: '📺', front: 'Televisi', back: 'Listrik → Cahaya + Bunyi' },
        { emoji: '🚲', front: 'Anak Mengayuh Sepeda', back: 'Kimia (makanan) → Gerak' },
      ]},
    ],
    activityTitle: 'Latihan: Perubahan Bentuk Energi',
    questions: [
      { text: 'Perubahan energi yang terjadi pada setrika listrik adalah...', opts: ['Listrik → Gerak', 'Listrik → Panas', 'Listrik → Bunyi', 'Panas → Listrik'], ans: 1, exp: 'Setrika mengubah energi listrik menjadi energi panas.' },
      { text: 'Pada kipas angin, energi listrik berubah menjadi energi...', opts: ['Cahaya', 'Gerak', 'Kimia', 'Panas'], ans: 1, exp: 'Baling-baling kipas berputar (energi gerak).' },
      { text: 'Saat kita menyalakan senter memakai baterai, perubahan energinya adalah...', opts: ['Kimia → Listrik → Cahaya', 'Gerak → Cahaya', 'Bunyi → Panas', 'Angin → Cahaya'], ans: 0, exp: 'Energi kimia baterai menghasilkan listrik lalu menyalakan cahaya lampu senter.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-04', subSeq: 6,
    objectives: ['Siswa mampu mempraktikkan cara memanfaatkan dan menghemat energi dalam kehidupan sehari-hari.'],
    materialTitle: 'Pemanfaatan dan Penghematan Energi',
    blocks: [
      { type: 'visual_cards', title: 'Ayo Jadi Pahlawan Hemat Energi!', cards: [
        { emoji: '💡', label: 'Matikan Lampu Siang Hari', sub: 'Buka jendela agar cahaya matahari masuk alami' },
        { emoji: '📺', label: 'Matikan TV Jika Tidak Ditonton', sub: 'Jangan biarkan listrik terbuang percuma' },
        { emoji: '🚰', label: 'Tutup Keran Air Rapat', sub: 'Menghemat air sekaligus menghemat listrik pompa' },
        { emoji: '🚶', label: 'Jalan Kaki / Bersepeda', sub: 'Untuk jarak dekat, hemat bensin dan tubuh sehat' },
      ]},
    ],
    activityTitle: 'Latihan: Hemat Energi',
    questions: [
      { text: 'Tindakan menghemat energi listrik di rumah adalah...', opts: ['Menyalakan semua lampu di siang hari', 'Mematikan kipas angin saat keluar kamar', 'Membiarkan TV menyala semalaman', 'Membuka kulkas terlalu lama'], ans: 1, exp: 'Mematikan alat listrik saat tidak dipakai menghemat energi.' },
      { text: 'Mengapa kita perlu menghemat energi listrik dan bahan bakar?', opts: ['Agar tidak cepat habis dan menghemat biaya', 'Agar lampu cepat rusak', 'Agar kamar selalu gelap', 'Karena listrik gratis'], ans: 0, exp: 'Sebagian besar pembangkit listrik masih memakai bahan bakar tak terbarukan.' },
      { text: 'Saat belajar di pagi hari yang cerah, sebaiknya kita...', opts: ['Menutup gorden dan menyalakan 3 lampu', 'Membuka jendela memanfaatkan cahaya matahari', 'Menyalakan senter', 'Belajar di ruangan gelap'], ans: 1, exp: 'Cahaya matahari pagi gratis, sehat, dan hemat listrik.' },
    ],
  },

  // BAB 5: SEJARAH LINGKUNGAN TEMPAT TINGGAL
  {
    topicCode: 'IPAS-SD3-05', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian sejarah sebagai peristiwa nyata yang terjadi di masa lampau.'],
    materialTitle: 'Mengenal Pengertian Sejarah',
    blocks: [
      { type: 'story_panel', title: 'Apa Itu Sejarah?', lines: [
        { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Sejarah adalah kisah peristiwa NYATA yang pernah terjadi di masa lalu — mulai dari masa kecilmu, keluargamu, hingga lingkungan tempat tinggalmu!' },
        { speaker: 'Raka', avatar: '👦', text: 'Jadi foto waktu aku masih bayi dan cerita kakek saat muda juga bagian dari sejarah ya Bu!' },
      ]},
      { type: 'tip', text: 'Sejarah berbeda dengan dongeng: sejarah benar-benar pernah terjadi dan punya bukti (foto, catatan, saksi).' },
    ],
    activityTitle: 'Latihan: Pengertian Sejarah',
    questions: [
      { text: 'Sejarah adalah peristiwa yang benar-benar terjadi pada masa...', opts: ['Akan datang', 'Lampau (masa lalu)', 'Khayalan', 'Mimpi'], ans: 1, exp: 'Sejarah mempelajari peristiwa nyata di masa lampau.' },
      { text: 'Perbedaan sejarah dengan dongeng fiksi adalah sejarah...', opts: ['Hanya karangan bebas', 'Berdasarkan kejadian nyata dan bukti', 'Selalu tentang hewan bisa bicara', 'Tidak punya waktu kejadian'], ans: 1, exp: 'Sejarah bersifat nyata dan dapat dibuktikan.' },
      { text: 'Manfaat mempelajari sejarah lingkungan kita adalah...', opts: ['Mengetahui perkembangan dan menghargai perjuangan orang terdahulu', 'Melupakan masa lalu', 'Agar bisa mengarang cerita palsu', 'Tidak ada manfaatnya'], ans: 0, exp: 'Belajar sejarah menumbuhkan rasa syukur dan bangga pada lingkungan sendiri.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-05', subSeq: 2,
    objectives: ['Siswa mampu membuat dan membaca bagan silsilah keluarga sederhana.'],
    materialTitle: 'Sejarah dan Silsilah Keluarga',
    blocks: [
      { type: 'visual_cards', title: 'Tingkatan Silsilah Keluarga', cards: [
        { emoji: '👴👵', label: 'Generasi 1', sub: 'Kakek & Nenek (orang tua dari ayah/ibu)' },
        { emoji: '👨👩', label: 'Generasi 2', sub: 'Ayah & Ibu (serta paman & bibi)' },
        { emoji: '🧒👧', label: 'Generasi 3', sub: 'Kamu, Kakak, Adik (serta sepupu)' },
      ]},
      { type: 'tip', text: 'Silsilah keluarga seperti pohon: akarnya dari kakek-nenek, lalu bercabang ke ayah-ibu, hingga ke kamu dan saudara!' },
    ],
    activityTitle: 'Latihan: Sejarah Keluarga',
    questions: [
      { text: 'Bagan yang menggambarkan asal-usul dan hubungan kekerabatan dalam keluarga disebut...', opts: ['Peta jalan', 'Silsilah keluarga', 'Resep masakan', 'Jadwal piket'], ans: 1, exp: 'Silsilah keluarga menunjukkan hubungan antar-generasi.' },
      { text: 'Adik laki-laki dari ayah atau ibu kita dipanggil...', opts: ['Kakek', 'Paman (Om)', 'Sepupu', 'Cucu'], ans: 1, exp: 'Saudara laki-laki ayah/ibu disebut paman.' },
      { text: 'Anak dari paman atau bibi disebut...', opts: ['Kakak kandung', 'Sepupu', 'Keponakan', 'Nenek'], ans: 1, exp: 'Anak paman/bibi adalah saudara sepupu.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-05', subSeq: 3,
    objectives: ['Siswa mampu menggali informasi asal-usul nama dan ciri lingkungan tempat tinggalnya secara faktual.'],
    materialTitle: 'Sejarah Lingkungan Tempat Tinggal',
    blocks: [
      { type: 'list', title: 'Hal yang Bisa Kita Cari Tahu Tentang Lingkungan Sendiri', items: ['Nama desa/kelurahan, kecamatan, dan kabupaten tempat tinggal kita.', 'Kenampakan alam khas di sekitar (misalnya dekat sawah, tambak, pesisir, atau perbukitan).', 'Bangunan lama yang masih ada (masjid tua, balai desa, pasar tradisional, atau sekolah lama).', 'Pekerjaan sebagian besar warga sejak dulu hingga sekarang.'] },
      { type: 'teacher_note', text: 'Ajak siswa menceritakan nama desa/kecamatan masing-masing di Gresik daratan tanpa mengarang legenda yang belum terverifikasi. Fokus pada fakta yang diketahui keluarga.' },
    ],
    activityTitle: 'Latihan: Sejarah Lingkungan Sekitar',
    questions: [
      { text: 'Cara paling tepat untuk mengetahui asal-usul lingkungan desa kita adalah...', opts: ['Mengarang cerita sendiri', 'Bertanya kepada orang tua, sesepuh, atau melihat arsip desa', 'Menebak dari nama jalan saja', 'Menyalin cerita kota lain'], ans: 1, exp: 'Informasi sejarah lokal diperoleh dari narasumber tepercaya dan arsip resmi.' },
      { text: 'Contoh bangunan bersejarah/lama yang sering menjadi penanda lingkungan adalah...', opts: ['Plastik bekas', 'Pasar lama, masjid tua, atau gedung sekolah lama', 'Awan di langit', 'Sepatu baru'], ans: 1, exp: 'Bangunan tua menjadi saksi perkembangan suatu daerah.' },
      { text: 'Mempelajari sejarah tempat tinggal membuat kita makin...', opts: ['Malas menjaga lingkungan', 'Mengenal dan mencintai daerah sendiri', 'Sombong', 'Lupa rumah'], ans: 1, exp: 'Mengenal daerah sendiri menumbuhkan kepedulian.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-05', subSeq: 4,
    objectives: ['Siswa mampu membandingkan perubahan lingkungan dari masa ke masa (jalan, rumah, transportasi, pekerjaan).'],
    materialTitle: 'Perubahan Lingkungan dari Masa ke Masa',
    blocks: [
      { type: 'table', title: 'Contoh Perubahan Lingkungan Dulu vs Sekarang', headers: ['Aspek', 'Masa Lalu (Dulu)', 'Masa Kini (Sekarang)'], rows: [
        ['Jalan', 'Banyak jalan tanah/batu', 'Banyak jalan sudah diaspal atau dipaving'],
        ['Transportasi', 'Jalan kaki, sepeda ontel, becak', 'Sepeda motor, mobil, bus'],
        ['Penerangan', 'Lampu minyak/petromaks', 'Lampu listrik terang'],
        ['Lahan', 'Banyak sawah dan kebun luas', 'Banyak berdiri perumahan, toko, dan sekolah baru'],
      ]},
    ],
    activityTitle: 'Latihan: Perubahan Lingkungan',
    questions: [
      { text: 'Contoh perubahan lingkungan di bidang jalan dari dulu ke sekarang adalah...', opts: ['Jalan aspal berubah jadi hutan', 'Jalan tanah banyak berubah menjadi jalan aspal/paving', 'Semua rumah hilang', 'Tidak ada perubahan apa pun'], ans: 1, exp: 'Pembangunan mengubah banyak jalan tanah menjadi aspal/paving.' },
      { text: 'Dampak perubahan banyaknya bangunan baru terhadap lahan hijau adalah...', opts: ['Pohon makin banyak sendiri', 'Lahan kebun/sawah berkurang sehingga kita perlu menanam pohon', 'Hujan berhenti total', 'Air sungai jadi manis'], ans: 1, exp: 'Pembangunan perlu diimbangi penghijauan agar lingkungan tetap sejuk.' },
      { text: 'Alat komunikasi yang dulu banyak dipakai mengirim kabar jarak jauh sebelum ada HP adalah...', opts: ['Surat pos', 'Video call', 'Pesan instan', 'Media sosial'], ans: 0, exp: 'Dulu masyarakat mengirim kabar tertulis lewat surat pos.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-05', subSeq: 5,
    objectives: ['Siswa mampu mengenali 3 jenis sumber informasi sejarah (lisan, tertulis, dan benda).'],
    materialTitle: 'Sumber Informasi Sejarah',
    blocks: [
      { type: 'visual_cards', title: '3 Jenis Sumber Sejarah', cards: [
        { emoji: '🗣️', label: 'Sumber Lisan', sub: 'Cerita langsung dari saksi sejarah (kakek, nenek, tokoh warga)' },
        { emoji: '📜', label: 'Sumber Tertulis', sub: 'Akta kelahiran, ijazah lama, buku harian, koran lama, arsip desa' },
        { emoji: '🏺', label: 'Sumber Benda', sub: 'Foto jadul, uang koin lama, alat tradisional, bangunan tua' },
      ]},
    ],
    activityTitle: 'Latihan: Sumber Informasi Sejarah',
    questions: [
      { text: 'Album foto lama dan uang logam kuno termasuk sumber sejarah berbentuk...', opts: ['Lisan', 'Benda', 'Suara', 'Khayalan'], ans: 1, exp: 'Foto dan uang koin adalah peninggalan berwujud benda.' },
      { text: 'Cerita nenek tentang suasana kampung saat beliau masih kecil adalah sumber sejarah...', opts: ['Lisan', 'Tertulis', 'Benda', 'Digital'], ans: 0, exp: 'Keterangan yang disampaikan secara langsung dengan ucapan adalah sumber lisan.' },
      { text: 'Akta kelahiran dan buku catatan keluarga termasuk sumber sejarah...', opts: ['Lisan', 'Tertulis', 'Benda hidup', 'Dongeng'], ans: 1, exp: 'Dokumen berhuruf/catatan adalah sumber tertulis.' },
    ],
  },
  {
    topicCode: 'IPAS-SD3-05', subSeq: 6,
    objectives: ['Siswa mampu menyusun pertanyaan wawancara sederhana dan bersikap sopan saat mewawancarai narasumber.'],
    materialTitle: 'Wawancara Keluarga atau Tokoh Masyarakat',
    blocks: [
      { type: 'list', title: 'Langkah Wawancara Sopan', items: ['1. Tentukan narasumber (orang tua, kakek-nenek, atau Pak RT) dan buat janji.', '2. Siapkan daftar pertanyaan memakai ADIKSIMBA (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana).', '3. Ucapkan salam, berbicara dengan sopan, dan dengarkan dengan baik.', '4. Catat jawaban penting dan ucapkan terima kasih setelah selesai.'] },
      { type: 'story_panel', title: 'Contoh Wawancara Singkat', lines: [
        { speaker: 'Salsa', avatar: '👧', text: 'Permisi Kakek, boleh Salsa bertanya? Bagaimana suasana jalan depan rumah kita waktu Kakek masih kecil?' },
        { speaker: 'Kakek', avatar: '👴', text: 'Boleh Nak! Dulu jalan ini masih tanah dan kanan-kirinya penuh kebun mangga.' },
      ]},
    ],
    activityTitle: 'Latihan: Wawancara Sejarah',
    questions: [
      { text: 'Orang yang kita tanya untuk mendapatkan informasi saat wawancara disebut...', opts: ['Penonton', 'Narasumber', 'Wasit', 'Pembeli'], ans: 1, exp: 'Narasumber adalah orang yang memberikan informasi/jawaban.' },
      { text: 'Kata tanya yang tepat untuk menanyakan WAKTU suatu peristiwa terjadi adalah...', opts: ['Siapa', 'Kapan', 'Di mana', 'Berapa'], ans: 1, exp: '"Kapan" digunakan untuk menanyakan waktu kejadian.' },
      { text: 'Sikap yang HARUS dilakukan setelah selesai mewawancarai narasumber adalah...', opts: ['Langsung pergi begitu saja', 'Mengucapkan terima kasih dan berpamitan dengan sopan', 'Memotong pembicaraan', 'Menertawakan jawaban'], ans: 1, exp: 'Mengucapkan terima kasih menunjukkan rasa hormat kepada narasumber.' },
    ],
  },
];

upsertLessonsBatch('Kelas 3 SD — IPAS (5 Bab, 32 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

