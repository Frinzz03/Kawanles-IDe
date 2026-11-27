import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // =========================================================================
  // BAB 1: MENGENAL BILANGAN (MAT-SD1-01)
  // =========================================================================
  {
    topicCode: 'MAT-SD1-01',
    subSeq: 1,
    objectives: [
      'Siswa mengenal lambang dan bunyi angka 1 sampai 10 dengan gembira.',
      'Siswa mampu mencocokkan angka 1 sampai 10 dengan banyak benda konkret.',
    ],
    materialTitle: 'Yuk Kenalan dengan Angka 1 sampai 10!',
    blocks: [
      {
        type: 'story_panel',
        title: 'Ayo Mulai Menghitung!',
        lines: [
          { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Halo! Hari ini kita mau kenalan dengan angka 1 sampai 10 pakai jari dan buah.' },
          { speaker: 'Alya', avatar: '👧', text: 'Asyik! Aku punya 10 jari tangan, ayo kita klik kartunya satu per satu!' },
        ],
      },
      {
        type: 'visual_cards',
        title: 'Klik Setiap Angka untuk Mendengar Namanya!',
        items: [
          { visual: '🍎', label: '1', caption: 'Satu', speech: 'Angka satu. Ada satu apel.' },
          { visual: '🍒', label: '2', caption: 'Dua', speech: 'Angka dua. Ada dua buah ceri.' },
          { visual: '🎈', label: '3', caption: 'Tiga', speech: 'Angka tiga.' },
          { visual: '🍀', label: '4', caption: 'Empat', speech: 'Angka empat.' },
          { visual: '🖐️', label: '5', caption: 'Lima', speech: 'Angka lima. Satu tangan punya lima jari.' },
          { visual: '⭐', label: '6', caption: 'Enam', speech: 'Angka enam.' },
          { visual: '🌈', label: '7', caption: 'Tujuh', speech: 'Angka tujuh. Pelangi punya tujuh warna.' },
          { visual: '🐙', label: '8', caption: 'Delapan', speech: 'Angka delapan. Gurita punya delapan lengan.' },
          { visual: '🌻', label: '9', caption: 'Sembilan', speech: 'Angka sembilan.' },
          { visual: '🙌', label: '10', caption: 'Sepuluh', speech: 'Angka sepuluh. Dua tangan punya sepuluh jari.' },
        ],
      },
      {
        type: 'interactive_counter',
        mode: 'count',
        emoji: '🍎',
        initialA: 4,
        max: 10,
        title: 'Coba Tekan + dan Hitung Apelnya!',
      },
      {
        type: 'teacher_note',
        text: 'Minta siswa menunjuk jari tangannya bersamaan saat mengklik kartu angka 1–10 agar memori motorik dan visual bekerja bersama.',
      },
    ],
    activityTitle: 'Latihan Seru: Angka 1–10',
    questions: [
      { text: 'Angka yang bunyinya "tujuh" adalah...', opts: ['5', '6', '7', '8'], ans: 2, exp: 'Lambang angka 7 dibaca tujuh.' },
      { text: 'Setelah angka 8, angka berikutnya adalah...', opts: ['7', '9', '10', '6'], ans: 1, exp: 'Urutan berhitung: 6, 7, 8, 9, 10. Jadi setelah 8 adalah 9.' },
      { text: 'Banyak jari pada kedua tangan kita seluruhnya ada...', opts: ['5', '8', '9', '10'], ans: 3, exp: 'Tangan kanan 5 jari dan tangan kiri 5 jari, semuanya ada 10 jari.' },
      { text: 'Angka yang berada tepat sebelum angka 4 adalah...', opts: ['2', '3', '5', '6'], ans: 1, exp: 'Urutan: 1, 2, 3, 4. Sebelum 4 adalah 3.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-01',
    subSeq: 2,
    objectives: [
      'Siswa mampu menghitung banyak benda satu per satu tanpa terlewat.',
      'Siswa memahami bahwa angka terakhir yang disebut adalah jumlah seluruh benda.',
    ],
    materialTitle: 'Menghitung Benda di Sekitar Kita',
    blocks: [
      {
        type: 'paragraph',
        text: 'Saat menghitung benda, tunjuk satu per satu sambil bersuara: satu, dua, tiga, dan seterusnya. Angka terakhir yang kita sebut adalah jumlah semuanya!',
      },
      {
        type: 'interactive_counter',
        mode: 'count',
        emoji: '⭐',
        initialA: 6,
        max: 10,
        title: 'Tunjuk & Hitung Bintang di Layar!',
      },
      {
        type: 'worked_example',
        level: 'Dasar',
        question: 'Di meja ada bintang seperti ini: ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐. Berapa jumlah seluruh bintang?',
        steps: [
          'Tunjuk bintang paling kiri sambil sebut: 1, 2, 3.',
          'Lanjutkan ke kanan: 4, 5, 6, 7.',
          'Angka terakhir yang disebut adalah 7.',
        ],
        answer: 'Ada 7 bintang.',
      },
      {
        type: 'teacher_note',
        text: 'Jika siswa sering menghitung dobel benda yang sama, latih menandai atau menggeser benda nyata (kelereng/pensil) dari kiri ke kanan.',
      },
    ],
    activityTitle: 'Latihan: Menghitung Benda',
    questions: [
      { text: 'Hitung banyak apel: 🍎 🍎 🍎 🍎 🍎. Jumlahnya ada...', opts: ['4', '5', '6', '7'], ans: 1, exp: 'Jika dihitung satu per satu: 1, 2, 3, 4, 5 apel.' },
      { text: 'Hitung banyak bola: ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽. Jumlahnya ada...', opts: ['6', '7', '8', '9'], ans: 2, exp: 'Total gambar bola ada 8 buah.' },
      { text: 'Bima melihat 🐥 🐥 🐥. Banyak anak ayam ada...', opts: ['2', '3', '4', '5'], ans: 1, exp: 'Ada 3 ekor anak ayam.' },
      { text: 'Agar tidak salah hitung saat menghitung 9 pensil, sebaiknya kita...', opts: ['Menebak saja', 'Menunjuk satu per satu dari kiri ke kanan', 'Menghitung dari tengah bolak-balik', 'Melewati dua pensil'], ans: 1, exp: 'Menunjuk satu per satu secara teratur mencegah ada benda yang terlewat atau dihitung dua kali.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-01',
    subSeq: 3,
    objectives: [
      'Siswa mampu membaca nama bilangan 1 sampai 10 dengan lancar.',
      'Siswa mampu mencocokkan nama bilangan dengan lambang angkanya.',
    ],
    materialTitle: 'Membaca dan Menulis Nama Angka 1–10',
    blocks: [
      {
        type: 'paragraph',
        text: 'Setiap angka punya lambang (seperti 5) dan nama tulisan (seperti "lima"). Ayo main kartu bolak-balik untuk menghafalnya!',
      },
      {
        type: 'flashcards',
        title: 'Tebak Nama Angkanya, Lalu Klik Kartunya!',
        cards: [
          { emoji: '1️⃣', front: '1', back: 'satu' },
          { emoji: '2️⃣', front: '2', back: 'dua' },
          { emoji: '3️⃣', front: '3', back: 'tiga' },
          { emoji: '4️⃣', front: '4', back: 'empat' },
          { emoji: '5️⃣', front: '5', back: 'lima' },
          { emoji: '6️⃣', front: '6', back: 'enam' },
          { emoji: '7️⃣', front: '7', back: 'tujuh' },
          { emoji: '8️⃣', front: '8', back: 'delapan' },
          { emoji: '9️⃣', front: '9', back: 'sembilan' },
        ],
      },
      {
        type: 'tip',
        text: 'Ingat bentuknya: 6 perutnya di bawah, 9 kepalanya di atas! Jangan sampai tertukar ya.',
      },
      {
        type: 'teacher_note',
        text: 'Latih siswa menulis angka 1–10 di buku kotak-kotak dari arah atas ke bawah. Perhatikan angka yang sering terbalik: 2, 3, 5, 6, dan 9.',
      },
    ],
    activityTitle: 'Latihan: Membaca & Menulis Angka',
    questions: [
      { text: 'Tulisan nama bilangan untuk angka 8 adalah...', opts: ['enam', 'tujuh', 'delapan', 'sembilan'], ans: 2, exp: 'Angka 8 dibaca dan ditulis "delapan".' },
      { text: 'Lambang bilangan dari kata "sembilan" adalah...', opts: ['6', '7', '8', '9'], ans: 3, exp: 'Sembilan ditulis dengan angka 9.' },
      { text: 'Kata "empat" adalah nama bilangan untuk angka...', opts: ['3', '4', '5', '6'], ans: 1, exp: 'Empat adalah nama bilangan untuk angka 4.' },
      { text: 'Angka 10 dibaca...', opts: ['satu nol', 'sebelas', 'sepuluh', 'sembilan'], ans: 2, exp: 'Angka 10 dibaca "sepuluh".' },
    ],
  },
  {
    topicCode: 'MAT-SD1-01',
    subSeq: 4,
    objectives: [
      'Siswa mampu membandingkan dua kelompok benda menggunakan kata "lebih banyak", "lebih sedikit", dan "sama banyak".',
    ],
    materialTitle: 'Membandingkan Banyak dan Sedikit',
    blocks: [
      {
        type: 'story_panel',
        title: 'Siapa yang Punya Lebih Banyak?',
        lines: [
          { speaker: 'Alya', avatar: '👧', text: 'Aku punya 6 jeruk! Kamu punya berapa, Bima?' },
          { speaker: 'Bima', avatar: '👦', text: 'Aku punya 4 apel. Wah, jeruk Alya lebih banyak daripada apelku!' },
        ],
      },
      {
        type: 'interactive_counter',
        mode: 'compare',
        emoji: '🍊',
        emoji2: '🍎',
        initialA: 6,
        initialB: 4,
        max: 10,
        title: 'Coba Bandingkan Kelompok Kiri dan Kanan!',
      },
      {
        type: 'worked_example',
        level: 'Dasar',
        question: 'Di piring A ada 3 kue pudak. Di piring B ada 7 kue pudak. Piring mana yang isinya lebih sedikit?',
        steps: [
          'Bandingkan 3 dan 7.',
          'Karena 3 kurang dari 7, maka piring A lebih sedikit.',
        ],
        answer: 'Piring A lebih sedikit daripada piring B.',
      },
      {
        type: 'teacher_note',
        text: 'Ajak siswa memasangkan benda kiri dan kanan satu-satu. Kelompok yang punya sisa berarti lebih banyak.',
      },
    ],
    activityTitle: 'Latihan: Lebih Banyak & Lebih Sedikit',
    questions: [
      { text: '5 pensil ... daripada 8 pensil.', opts: ['lebih banyak', 'lebih sedikit', 'sama banyak', 'lebih besar'], ans: 1, exp: '5 kurang dari 8, sehingga 5 pensil lebih sedikit daripada 8 pensil.' },
      { text: '9 bola ... daripada 4 bola.', opts: ['lebih banyak', 'lebih sedikit', 'sama banyak', 'lebih kecil'], ans: 0, exp: '9 lebih besar dari 4, sehingga 9 bola lebih banyak.' },
      { text: 'Alya punya 6 buku, Bima punya 6 buku. Jumlah buku mereka...', opts: ['lebih banyak Alya', 'lebih sedikit Bima', 'sama banyak', 'berbeda'], ans: 2, exp: 'Karena sama-sama 6, jumlah buku mereka sama banyak.' },
      { text: 'Manakah kelompok buah yang PALING BANYAK?', opts: ['3 apel', '7 jeruk', '5 mangga', '2 pisang'], ans: 1, exp: 'Di antara 3, 7, 5, dan 2, bilangan terbesar adalah 7.' },
    ],
  },

  // =========================================================================
  // BAB 2: BILANGAN SAMPAI 20 (MAT-SD1-02)
  // =========================================================================
  {
    topicCode: 'MAT-SD1-02',
    subSeq: 1,
    objectives: [
      'Siswa mengenal lambang dan nama bilangan 11 sampai 20.',
      'Siswa memahami bahwa bilangan belasan terdiri dari 10 dan satuannya.',
    ],
    materialTitle: 'Mengenal Bilangan Belasan (11 sampai 20)',
    blocks: [
      {
        type: 'paragraph',
        text: 'Sesudah angka 10, kita mengenal bilangan belasan! Bilangan 11 sampai 19 selalu diawali angka 1 di depan (artinya 10), lalu diikuti satuannya.',
      },
      {
        type: 'visual_cards',
        title: 'Klik Kartu Bilangan 11–20 untuk Mendengar!',
        items: [
          { visual: '🔟➕1️⃣', label: '11', caption: 'Sebelas', speech: 'Sebelas. Sepuluh dan satu.' },
          { visual: '🔟➕2️⃣', label: '12', caption: 'Dua belas', speech: 'Dua belas.' },
          { visual: '🔟➕3️⃣', label: '13', caption: 'Tiga belas', speech: 'Tiga belas.' },
          { visual: '🔟➕4️⃣', label: '14', caption: 'Empat belas', speech: 'Empat belas.' },
          { visual: '🔟➕5️⃣', label: '15', caption: 'Lima belas', speech: 'Lima belas.' },
          { visual: '🔟➕6️⃣', label: '16', caption: 'Enam belas', speech: 'Enam belas.' },
          { visual: '🔟➕7️⃣', label: '17', caption: 'Tujuh belas', speech: 'Tujuh belas.' },
          { visual: '🔟➕8️⃣', label: '18', caption: 'Delapan belas', speech: 'Delapan belas.' },
          { visual: '🔟➕9️⃣', label: '19', caption: 'Sembilan belas', speech: 'Sembilan belas.' },
          { visual: '🔟➕🔟', label: '20', caption: 'Dua puluh', speech: 'Dua puluh. Sepuluh dan sepuluh.' },
        ],
      },
      {
        type: 'interactive_counter',
        mode: 'count',
        emoji: '🍓',
        initialA: 12,
        max: 20,
        title: 'Hitung Stroberi sampai 20!',
      },
      {
        type: 'teacher_note',
        text: 'Tekankan pelafalan 11 = "sebelas" (bukan "satu belas") dan 20 = "dua puluh".',
      },
    ],
    activityTitle: 'Latihan: Bilangan 11–20',
    questions: [
      { text: 'Bilangan 11 dibaca...', opts: ['Satu belas', 'Sebelas', 'Sepuluh satu', 'Dua belas'], ans: 1, exp: 'Bilangan 11 dibaca "sebelas".' },
      { text: 'Lambang bilangan dari "enam belas" adalah...', opts: ['61', '16', '60', '106'], ans: 1, exp: 'Enam belas ditulis 16 (1 puluhan dan 6 satuan).' },
      { text: 'Bilangan tepat sesudah 18 adalah...', opts: ['17', '19', '20', '16'], ans: 1, exp: 'Urutan: 17, 18, 19, 20.' },
      { text: '10 buah apel ditambah 4 buah apel menjadi...', opts: ['12', '13', '14', '15'], ans: 2, exp: '10 dan 4 membentuk bilangan 14 (empat belas).' },
    ],
  },
  {
    topicCode: 'MAT-SD1-02',
    subSeq: 2,
    objectives: [
      'Siswa mampu mengurutkan bilangan 1 sampai 20 dari yang terkecil ke terbesar dan sebaliknya.',
    ],
    materialTitle: 'Mengurutkan Bilangan Maju dan Mundur',
    blocks: [
      {
        type: 'story_panel',
        title: 'Naik Tangga & Turun Tangga Angka',
        lines: [
          { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Mengurutkan dari terkecil itu seperti NAIK tangga: 11, 12, 13, 14, 15!' },
          { speaker: 'Bima', avatar: '👦', text: 'Kalau dari terbesar berarti TURUN tangga ya Bu: 15, 14, 13, 12, 11!' },
        ],
      },
      {
        type: 'flashcards',
        title: 'Tebak Angka yang Hilang!',
        cards: [
          { emoji: '🪜', front: '11, 12, ..., 14', back: '13', hint: 'Sesudah 12 adalah 13' },
          { emoji: '🪜', front: '15, ..., 17, 18', back: '16', hint: 'Di antara 15 dan 17 adalah 16' },
          { emoji: '⬇️', front: '20, 19, ..., 17', back: '18', hint: 'Hitung mundur dari 19' },
        ],
      },
      {
        type: 'worked_example',
        level: 'Dasar',
        question: 'Urutkan bilangan ini dari yang TERKECIL: 15, 11, 18, 13',
        steps: [
          'Cari yang paling kecil dulu: 11.',
          'Dari sisa (15, 18, 13), yang paling kecil adalah 13.',
          'Berikutnya 15, lalu yang paling besar 18.',
        ],
        answer: '11, 13, 15, 18',
      },
      {
        type: 'teacher_note',
        text: 'Gunakan kartu angka acak di meja dan minta siswa menyusunnya seperti gerbong kereta api.',
      },
    ],
    activityTitle: 'Latihan: Mengurutkan Bilangan',
    questions: [
      { text: 'Urutan bilangan dari TERKECIL yang benar adalah...', opts: ['12, 15, 13, 16', '12, 13, 15, 16', '16, 15, 13, 12', '13, 12, 16, 15'], ans: 1, exp: 'Dari terkecil ke terbesar: 12, 13, 15, 16.' },
      { text: 'Urutan hitung mundur dari 20 adalah: 20, 19, 18, ...', opts: ['16', '17', '21', '15'], ans: 1, exp: 'Mundur 1 langkah dari 18 adalah 17.' },
      { text: 'Bilangan yang tepat di antara 14 dan 16 adalah...', opts: ['13', '15', '17', '12'], ans: 1, exp: 'Urutannya adalah 14, 15, 16.' },
      { text: 'Urutan dari TERBESAR untuk angka 11, 19, 14 adalah...', opts: ['11, 14, 19', '19, 14, 11', '14, 19, 11', '19, 11, 14'], ans: 1, exp: 'Paling besar 19, lalu 14, lalu paling kecil 11.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-02',
    subSeq: 3,
    objectives: [
      'Siswa mampu membandingkan dua bilangan sampai 20 (lebih besar, lebih kecil, sama dengan).',
    ],
    materialTitle: 'Membandingkan Bilangan sampai 20',
    blocks: [
      {
        type: 'paragraph',
        text: 'Jika dua bilangan sama-sama belasan (depannya 1), kita cukup lihat angka belakangnya! Angka belakang lebih besar berarti bilangannya lebih besar.',
      },
      {
        type: 'interactive_counter',
        mode: 'compare',
        emoji: '⭐',
        emoji2: '🌟',
        initialA: 14,
        initialB: 17,
        max: 20,
        title: 'Bandingkan Bilangan Kiri dan Kanan!',
      },
      {
        type: 'worked_example',
        level: 'Dasar',
        question: 'Mana yang lebih besar: 13 atau 18?',
        steps: [
          'Keduanya sama-sama belasan (diawali 1).',
          'Lihat angka satuannya: 3 dan 8.',
          'Karena 8 lebih besar dari 3, maka 18 lebih besar dari 13.',
        ],
        answer: '18 lebih besar daripada 13.',
      },
      {
        type: 'teacher_note',
        text: 'Di kelas 1 SD fokuskan dulu pada kata "lebih besar / lebih kecil / sama dengan" sebelum simbol < dan >.',
      },
    ],
    activityTitle: 'Latihan: Membandingkan Bilangan sampai 20',
    questions: [
      { text: '17 ... daripada 12.', opts: ['lebih besar', 'lebih kecil', 'sama dengan', 'lebih sedikit'], ans: 0, exp: '17 lebih besar daripada 12.' },
      { text: 'Bilangan yang PALING KECIL adalah...', opts: ['19', '14', '11', '16'], ans: 2, exp: '11 adalah bilangan paling kecil di antara pilihan tersebut.' },
      { text: 'Bilangan yang PALING BESAR adalah...', opts: ['15', '20', '18', '13'], ans: 1, exp: '20 adalah bilangan terbesar.' },
      { text: '15 ... daripada 19.', opts: ['lebih besar', 'lebih kecil', 'sama dengan', 'lebih banyak'], ans: 1, exp: 'Karena 5 < 9, maka 15 lebih kecil daripada 19.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-02',
    subSeq: 4,
    objectives: [
      'Siswa mampu menyusun dan mengurai bilangan sampai 20 menjadi pasangan bilangan sederhana (terutama 10 + satuan).',
    ],
    materialTitle: 'Menyusun dan Mengurai Bilangan',
    blocks: [
      {
        type: 'paragraph',
        text: 'Satu bilangan bisa dipecah (diurai) menjadi dua kelompok! Misalnya 15 bisa diurai menjadi 10 dan 5. Angka 8 bisa diurai menjadi 5 dan 3.',
      },
      {
        type: 'interactive_counter',
        mode: 'add',
        emoji: '🟦',
        emoji2: '🟨',
        initialA: 10,
        initialB: 5,
        max: 10,
        title: 'Susun 10 Balok Biru + Balok Kuning!',
      },
      {
        type: 'flashcards',
        title: 'Latihan Urai Bilangan (Klik untuk Cek!)',
        cards: [
          { emoji: '🧩', front: '13 = 10 + ...', back: '3', hint: '10 dan 3 jadi 13' },
          { emoji: '🧩', front: '17 = 10 + ...', back: '7', hint: '10 dan 7 jadi 17' },
          { emoji: '🧩', front: '10 = 6 + ...', back: '4', hint: 'Pasangan 10: 6 dan 4' },
        ],
      },
      {
        type: 'teacher_note',
        text: 'Penguasaan "sahabat 10" (1+9, 2+8, 3+7, 4+6, 5+5) sangat membantu anak cepat berhitung di kelas 2 nanti.',
      },
    ],
    activityTitle: 'Latihan: Menyusun & Mengurai Bilangan',
    questions: [
      { text: 'Bilangan 16 jika diurai menjadi 10 dan ...', opts: ['4', '5', '6', '7'], ans: 2, exp: '10 + 6 = 16.' },
      { text: '10 dan 9 jika disusun bersama menjadi bilangan...', opts: ['18', '19', '20', '109'], ans: 1, exp: '10 + 9 = 19.' },
      { text: 'Pasangan bilangan yang jumlahnya 10 adalah...', opts: ['6 dan 3', '7 dan 3', '5 dan 4', '8 dan 1'], ans: 1, exp: '7 + 3 = 10.' },
      { text: 'Angka 8 bisa diurai menjadi 5 dan ...', opts: ['2', '3', '4', '5'], ans: 1, exp: '5 + 3 = 8.' },
    ],
  },

  // =========================================================================
  // BAB 3: PENJUMLAHAN DAN PENGURANGAN (MAT-SD1-03)
  // =========================================================================
  {
    topicCode: 'MAT-SD1-03',
    subSeq: 1,
    objectives: [
      'Siswa memahami penjumlahan sebagai penggabungan dua kelompok benda.',
      'Siswa mampu menjumlahkan bilangan sampai 20 menggunakan benda konkret.',
    ],
    materialTitle: 'Penjumlahan Benda Konkret (+)',
    blocks: [
      {
        type: 'story_panel',
        title: 'Digabung Jadi Tambah Banyak!',
        lines: [
          { speaker: 'Alya', avatar: '👧', text: 'Aku punya 4 permen stroberi, lalu Ibu memberiku 3 permen jeruk!' },
          { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Karena digabung, kita pakai tanda tambah (+). Yuk hitung semua permen Alya!' },
        ],
      },
      {
        type: 'interactive_counter',
        mode: 'add',
        emoji: '🍬',
        emoji2: '🍭',
        initialA: 4,
        initialB: 3,
        max: 10,
        title: 'Coba Gabungkan Permennya!',
      },
      {
        type: 'worked_example',
        level: 'Dasar',
        question: 'Berapa hasil dari 5 + 4?',
        steps: [
          'Simpan angka 5 di kepala.',
          'Angkat 4 jari tangan.',
          'Hitung maju setelah 5: 6, 7, 8, 9!',
        ],
        answer: '5 + 4 = 9',
      },
      {
        type: 'tip',
        text: 'Trik cepat "Simpan di Kepala": Simpan angka yang lebih besar di kepala, lalu hitung maju dengan jari!',
      },
    ],
    activityTitle: 'Latihan: Penjumlahan Sederhana',
    questions: [
      { text: '3 + 4 = ...', opts: ['6', '7', '8', '9'], ans: 1, exp: 'Hitung maju 3 langkah setelah 4: 5, 6, 7.' },
      { text: '6 + 5 = ...', opts: ['10', '11', '12', '13'], ans: 1, exp: '6 + 5 = 11.' },
      { text: '8 + 2 = ...', opts: ['9', '10', '11', '12'], ans: 1, exp: '8 + 2 = 10.' },
      { text: '9 + 6 = ...', opts: ['14', '15', '16', '17'], ans: 1, exp: 'Simpan 9 di kepala, hitung maju 6 jari: 10, 11, 12, 13, 14, 15.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-03',
    subSeq: 2,
    objectives: [
      'Siswa memahami pengurangan sebagai pengambilan sebagian benda sehingga sisanya berkurang.',
      'Siswa mampu menyelesaikan pengurangan sampai 20 dengan benda konkret.',
    ],
    materialTitle: 'Pengurangan Benda Konkret (−)',
    blocks: [
      {
        type: 'story_panel',
        title: 'Diambil Jadi Berkurang!',
        lines: [
          { speaker: 'Bima', avatar: '👦', text: 'Di piring ada 7 donat. Aku makan 2 donat. Tinggal berapa ya?' },
          { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Kalau dimakan atau diambil, jumlahnya berkurang (−). Ayo coba lihat donat yang dicoret!' },
        ],
      },
      {
        type: 'interactive_counter',
        mode: 'subtract',
        emoji: '🍩',
        initialA: 7,
        initialB: 2,
        max: 20,
        title: 'Coba Kurangi Donat di Piring!',
      },
      {
        type: 'worked_example',
        level: 'Dasar',
        question: 'Berapa hasil dari 9 − 3?',
        steps: [
          'Buka 9 jari tangan.',
          'Lipat 3 jari (karena dikurangi 3).',
          'Hitung jari yang masih terbuka: 1, 2, 3, 4, 5, 6.',
        ],
        answer: '9 − 3 = 6',
      },
      {
        type: 'teacher_note',
        text: 'Pastikan siswa tidak terbalik mengurangi angka kecil dengan angka besar (mis. 7 − 2, bukan 2 − 7).',
      },
    ],
    activityTitle: 'Latihan: Pengurangan Sederhana',
    questions: [
      { text: '8 − 3 = ...', opts: ['4', '5', '6', '7'], ans: 1, exp: 'Dari 8 benda diambil 3, tersisa 5.' },
      { text: '10 − 4 = ...', opts: ['5', '6', '7', '8'], ans: 1, exp: '10 dikurangi 4 sama dengan 6.' },
      { text: '12 − 5 = ...', opts: ['6', '7', '8', '9'], ans: 1, exp: 'Hitung mundur 5 langkah dari 12: 11, 10, 9, 8, 7.' },
      { text: '7 − 7 = ...', opts: ['0', '1', '7', '14'], ans: 0, exp: 'Jika semua 7 benda diambil, sisanya habis atau 0.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-03',
    subSeq: 3,
    objectives: [
      'Siswa mampu membedakan kata kunci soal cerita penjumlahan dan pengurangan.',
      'Siswa mampu menyelesaikan soal cerita sehari-hari sederhana.',
    ],
    materialTitle: 'Menyelesaikan Soal Cerita Sehari-hari',
    blocks: [
      {
        type: 'flashcards',
        title: 'Kenali Kata Kunci Soal Cerita! (Klik Kartunya)',
        cards: [
          { emoji: '➕', front: 'diberi lagi / membeli lagi', back: 'PENJUMLAHAN (+)', hint: 'Jumlahnya bertambah' },
          { emoji: '➖', front: 'dimakan / diberikan / pecah', back: 'PENGURANGAN (−)', hint: 'Jumlahnya berkurang' },
          { emoji: '🎯', front: 'berapa semuanya?', back: 'PENJUMLAHAN (+)', hint: 'Digabungkan semua' },
          { emoji: '🎯', front: 'berapa sisanya?', back: 'PENGURANGAN (−)', hint: 'Cari yang tersisa' },
        ],
      },
      {
        type: 'worked_example',
        level: 'Soal Cerita 1',
        question: 'Ibu membeli 5 kue pudak di Pasar Gresik. Ayah membeli lagi 4 kue pudak. Berapa jumlah kue pudak semuanya?',
        steps: [
          'Kata kuncinya "membeli lagi" dan "semuanya" → Penjumlahan (+).',
          'Hitung: 5 + 4 = 9.',
        ],
        answer: 'Ada 9 kue pudak semuanya.',
      },
      {
        type: 'worked_example',
        level: 'Soal Cerita 2',
        question: 'Bima punya 10 kelereng. Ia memberikan 3 kelereng kepada adiknya. Berapa sisa kelereng Bima?',
        steps: [
          'Kata kuncinya "memberikan" dan "sisa" → Pengurangan (−).',
          'Hitung: 10 − 3 = 7.',
        ],
        answer: 'Sisa kelereng Bima ada 7 butir.',
      },
      {
        type: 'teacher_note',
        text: 'Bacakan soal cerita perlahan dan minta anak menggambar bulatan sederhana di kertas untuk memvisualisasikan ceritanya.',
      },
    ],
    activityTitle: 'Latihan: Soal Cerita Kelas 1',
    questions: [
      { text: 'Di pohon ada 6 burung. Datang lagi 3 burung. Banyak burung sekarang ada...', opts: ['3', '8', '9', '10'], ans: 2, exp: '"Datang lagi" berarti bertambah: 6 + 3 = 9 burung.' },
      { text: 'Siti punya 9 pensil. 2 pensil dipinjam temannya. Sisa pensil Siti ada...', opts: ['6', '7', '8', '11'], ans: 1, exp: '"Dipinjam" dan "sisa" berarti berkurang: 9 − 2 = 7 pensil.' },
      { text: 'Di keranjang ada 5 apel merah dan 6 apel hijau. Jumlah semua apel ada...', opts: ['10', '11', '12', '1'], ans: 1, exp: 'Jumlah semua apel = 5 + 6 = 11 apel.' },
      { text: 'Alya membawa 8 balon. Ternyata 3 balon meletus. Balon yang masih utuh ada...', opts: ['4', '5', '6', '11'], ans: 1, exp: 'Balon meletus berkurang: 8 − 3 = 5 balon.' },
    ],
  },

  // =========================================================================
  // BAB 4: MENGENAL BENTUK DAN POSISI (MAT-SD1-04)
  // =========================================================================
  {
    topicCode: 'MAT-SD1-04',
    subSeq: 1,
    objectives: [
      'Siswa mampu mengenali bentuk segitiga, segiempat (persegi & persegi panjang), dan lingkaran.',
      'Siswa mampu menyebutkan benda di sekitar yang berbentuk bangun datar tersebut.',
    ],
    materialTitle: 'Mengenal Bangun Datar: Segitiga, Segiempat, dan Lingkaran',
    blocks: [
      {
        type: 'paragraph',
        text: 'Lihat sekeliling rumah dan kelasmu! Banyak benda permukaannya berbentuk segitiga, segiempat, atau lingkaran. Yuk klik gambar bangun di bawah!',
      },
      {
        type: 'shape_gallery',
        title: 'Klik Bangun Datar untuk Mendengar Ciri-Cirinya!',
        shapes: [
          { shape: 'triangle', name: 'Segitiga', desc: 'Punya 3 sisi lurus dan 3 sudut lancip.', example: 'Penggaris segitiga, potongan pizza, gantungan baju' },
          { shape: 'square', name: 'Persegi (Segiempat)', desc: 'Punya 4 sisi sama panjang dan 4 sudut.', example: 'Keramik lantai, papan catur, sapu tangan' },
          { shape: 'rectangle', name: 'Persegi Panjang (Segiempat)', desc: 'Punya 4 sisi (2 panjang, 2 pendek) dan 4 sudut.', example: 'Papan tulis, pintu kelas, buku tulis' },
          { shape: 'circle', name: 'Lingkaran', desc: 'Bentuknya bundar melengkung, tidak punya sudut lancip.', example: 'Jam dinding bundar, uang koin, roda sepeda' },
        ],
      },
      {
        type: 'teacher_note',
        text: 'Ajak siswa bermain "Cari Benda": sebutkan "Lingkaran!" lalu minta siswa menunjuk 1 benda lingkaran di ruangan.',
      },
    ],
    activityTitle: 'Latihan: Bangun Datar',
    questions: [
      { text: 'Bangun datar yang memiliki 3 sisi disebut...', opts: ['Lingkaran', 'Segitiga', 'Persegi', 'Persegi panjang'], ans: 1, exp: 'Segitiga mempunyai 3 sisi dan 3 sudut.' },
      { text: 'Uang koin dan roda sepeda berbentuk...', opts: ['Segitiga', 'Persegi', 'Lingkaran', 'Segiempat'], ans: 2, exp: 'Uang koin dan roda sepeda berbentuk bundar (lingkaran).' },
      { text: 'Permukaan buku tulis dan pintu kelas berbentuk...', opts: ['Lingkaran', 'Segitiga', 'Segiempat (persegi panjang)', 'Bola'], ans: 2, exp: 'Buku tulis dan pintu memiliki 4 sisi (termasuk segiempat / persegi panjang).' },
      { text: 'Bangun datar yang TIDAK memiliki sudut lancip adalah...', opts: ['Segitiga', 'Persegi', 'Persegi panjang', 'Lingkaran'], ans: 3, exp: 'Lingkaran hanya memiliki 1 sisi lengkung tanpa sudut.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-04',
    subSeq: 2,
    objectives: [
      'Siswa mampu mengenali bangun ruang sederhana: kubus, balok, kerucut, dan bola.',
      'Siswa mampu mencocokkan benda nyata dengan bangun ruangnya.',
    ],
    materialTitle: 'Mengenal Bangun Ruang: Kubus, Balok, Kerucut, dan Bola',
    blocks: [
      {
        type: 'paragraph',
        text: 'Bangun ruang adalah bangun yang punya isi (bisa dipegang tebalnya, seperti kotak dan bola). Yuk klik setiap bangun ruang di bawah!',
      },
      {
        type: 'shape_gallery',
        title: 'Klik Bangun Ruang 3D di Bawah!',
        shapes: [
          { shape: 'cube', name: 'Kubus', desc: 'Semua 6 sisinya berbentuk persegi sama besar.', example: 'Dadu, rubik, kotak kado persegi' },
          { shape: 'cuboid', name: 'Balok', desc: 'Berbentuk kotak memanjang, sisinya persegi panjang.', example: 'Kotak pensil, penghapus, lemari, kardus sepatu' },
          { shape: 'cone', name: 'Kerucut', desc: 'Bawahnya lingkaran, atasnya runcing seperti topi!', example: 'Topi ulang tahun, nasi tumpeng, contong es krim' },
          { shape: 'sphere', name: 'Bola', desc: 'Bulat penuh di semua sisi dan bisa menggelinding.', example: 'Bola sepak, kelereng, buah jeruk' },
        ],
      },
      {
        type: 'teacher_note',
        text: 'Tunjukkan benda nyata di meja (penghapus = balok, kelereng = bola, dadu = kubus) agar anak langsung membedakan bangun datar vs bangun ruang.',
      },
    ],
    activityTitle: 'Latihan: Bangun Ruang',
    questions: [
      { text: 'Topi ulang tahun dan nasi tumpeng berbentuk...', opts: ['Kubus', 'Balok', 'Kerucut', 'Bola'], ans: 2, exp: 'Topi ulang tahun memiliki alas bundar dan ujung runcing seperti kerucut.' },
      { text: 'Dadu permainan ular tangga berbentuk...', opts: ['Kubus', 'Kerucut', 'Bola', 'Lingkaran'], ans: 0, exp: 'Dadu memiliki 6 sisi persegi sama besar sehingga berbentuk kubus.' },
      { text: 'Kelereng dan bola sepak termasuk bangun ruang berbentuk...', opts: ['Balok', 'Kubus', 'Bola', 'Kerucut'], ans: 2, exp: 'Kelereng dan bola sepak berbentuk bola.' },
      { text: 'Kardus sepatu dan kotak tisu berbentuk...', opts: ['Kerucut', 'Balok', 'Bola', 'Segitiga'], ans: 1, exp: 'Kardus sepatu yang memanjang berbentuk balok.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-04',
    subSeq: 3,
    objectives: [
      'Siswa mampu menentukan posisi benda: kanan, kiri, atas, bawah, depan, dan belakang.',
    ],
    materialTitle: 'Mengenal Posisi: Kanan, Kiri, Atas, Bawah, Depan, Belakang',
    blocks: [
      {
        type: 'visual_cards',
        title: 'Klik Kartu Arah Posisi!',
        items: [
          { visual: '⬆️', label: 'Atas', caption: 'Di atas meja', speech: 'Atas. Contohnya lampu ada di atas meja.' },
          { visual: '⬇️', label: 'Bawah', caption: 'Di bawah kursi', speech: 'Bawah. Contohnya sandal ada di bawah kursi.' },
          { visual: '➡️', label: 'Kanan', caption: 'Tangan kanan', speech: 'Kanan. Kita makan dengan tangan kanan.' },
          { visual: '⬅️', label: 'Kiri', caption: 'Tangan kiri', speech: 'Kiri.' },
          { visual: '🚶', label: 'Depan / Belakang', caption: 'Baris berurutan', speech: 'Depan dan belakang. Papan tulis ada di depan kelas.' },
        ],
      },
      {
        type: 'story_panel',
        title: 'Ayo Cek Posisi di Kelas!',
        lines: [
          { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Di manakah letak papan tulis di kelas kita?' },
          { speaker: 'Alya', avatar: '👧', text: 'Di DEPAN kelas, Bu! Kalau tas aku diletakkan di ATAS meja!' },
        ],
      },
      {
        type: 'teacher_note',
        text: 'Mainkan game "Instruksi Cepat": "Angkat tangan kanan! Pegang telinga kiri! Taruh pensil di atas buku!"',
      },
    ],
    activityTitle: 'Latihan: Posisi Benda',
    questions: [
      { text: 'Lampu dan kipas angin biasanya dipasang di ... ruangan.', opts: ['bawah', 'atas', 'belakang', 'kiri'], ans: 1, exp: 'Lampu dipasang di bagian atas (langit-langit) ruangan.' },
      { text: 'Sepatu diletakkan di ... meja belajar.', opts: ['atas', 'bawah', 'dalam buku', 'langit'], ans: 1, exp: 'Sepatu diletakkan di lantai, yaitu di bawah meja.' },
      { text: 'Tangan yang biasa digunakan untuk makan dan bersalaman adalah tangan...', opts: ['kiri', 'kanan', 'belakang', 'atas'], ans: 1, exp: 'Secara umum kita menggunakan tangan kanan.' },
      { text: 'Saat berbaris upacara, teman yang berdiri menghadap punggungmu ada di sebelah...', opts: ['depanmu', 'belakangmu', 'atasmu', 'bawahmu'], ans: 1, exp: 'Teman yang melihat punggungmu berdiri di belakangmu.' },
    ],
  },

  // =========================================================================
  // BAB 5: PENGUKURAN SEDERHANA (MAT-SD1-05)
  // =========================================================================
  {
    topicCode: 'MAT-SD1-05',
    subSeq: 1,
    objectives: [
      'Siswa mampu membandingkan benda mana yang lebih panjang, lebih pendek, lebih tinggi, dan lebih rendah.',
    ],
    materialTitle: 'Membandingkan Panjang dan Pendek',
    blocks: [
      {
        type: 'visual_cards',
        title: 'Klik untuk Membandingkan Ukuran!',
        items: [
          { visual: '📏', label: 'Lebih Panjang', caption: 'Penggaris panjang', speech: 'Penggaris lebih panjang daripada penghapus.' },
          { visual: '🧽', label: 'Lebih Pendek', caption: 'Penghapus kecil', speech: 'Penghapus lebih pendek daripada pensil.' },
          { visual: '🦒', label: 'Lebih Tinggi', caption: 'Jerapah tinggi', speech: 'Jerapah lebih tinggi daripada kelinci.' },
          { visual: '🐇', label: 'Lebih Rendah', caption: 'Kelinci pendek', speech: 'Kelinci lebih rendah daripada jerapah.' },
        ],
      },
      {
        type: 'worked_example',
        level: 'Dasar',
        question: 'Mana yang lebih panjang: sapu lidi atau sendok makan?',
        steps: [
          'Bayangkan atau sejajarkan ujung bawah sapu lidi dan sendok makan.',
          'Ujung sapu lidi jauh lebih melebihi sendok makan.',
        ],
        answer: 'Sapu lidi lebih panjang daripada sendok makan.',
      },
      {
        type: 'tip',
        text: 'Saat membandingkan panjang 2 pensil, sejajarkan dulu ujung bawahnya supaya adil!',
      },
    ],
    activityTitle: 'Latihan: Panjang dan Pendek',
    questions: [
      { text: 'Penggaris kayu di kelas ... daripada penghapus karet.', opts: ['lebih pendek', 'lebih panjang', 'sama panjang', 'lebih rendah'], ans: 1, exp: 'Ukuran penggaris jauh lebih panjang daripada penghapus.' },
      { text: 'Hewan yang lehernya PALING TINGGI adalah...', opts: ['Kucing', 'Ayam', 'Jerapah', 'Kelinci'], ans: 2, exp: 'Jerapah adalah hewan paling tinggi di antara pilihan tersebut.' },
      { text: 'Tali merah panjangnya 3 jengkal, tali biru 6 jengkal. Tali yang lebih pendek adalah...', opts: ['Tali merah', 'Tali biru', 'Sama panjang', 'Tidak tahu'], ans: 0, exp: '3 lebih sedikit dari 6, jadi tali merah lebih pendek.' },
      { text: 'Pohon kelapa ... daripada tanaman rumput.', opts: ['lebih pendek', 'lebih rendah', 'lebih tinggi', 'sama tinggi'], ans: 2, exp: 'Pohon kelapa jauh lebih tinggi daripada rumput.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-05',
    subSeq: 2,
    objectives: [
      'Siswa mampu membandingkan berat dua benda menggunakan kata "lebih berat", "lebih ringan", dan "sama berat".',
    ],
    materialTitle: 'Membandingkan Berat dan Ringan',
    blocks: [
      {
        type: 'visual_cards',
        title: 'Mana yang Lebih Berat? Klik Kartunya!',
        items: [
          { visual: '🍉', label: 'Semangka', caption: 'Lebih berat', speech: 'Semangka lebih berat daripada apel.' },
          { visual: '🪶', label: 'Bulu Ayam', caption: 'Sangat ringan', speech: 'Bulu ayam sangat ringan.' },
          { visual: '🎒', label: 'Tas Penuh Buku', caption: 'Lebih berat', speech: 'Tas penuh buku lebih berat daripada selembar kertas.' },
          { visual: '📄', label: 'Selembar Kertas', caption: 'Lebih ringan', speech: 'Selembar kertas lebih ringan daripada tas.' },
        ],
      },
      {
        type: 'tip',
        text: 'Pada timbangan jungkat-jungkit, sisi yang TURUN ke bawah adalah benda yang LEBIH BERAT!',
      },
      {
        type: 'teacher_note',
        text: 'Minta siswa memegang 1 buku tebal di tangan kanan dan 1 pensil di tangan kiri untuk merasakan langsung arti berat dan ringan.',
      },
    ],
    activityTitle: 'Latihan: Berat dan Ringan',
    questions: [
      { text: 'Buah semangka ... daripada buah anggur.', opts: ['lebih ringan', 'lebih berat', 'sama berat', 'lebih tipis'], ans: 1, exp: 'Semangka jauh lebih berat daripada anggur.' },
      { text: 'Di antara benda berikut, yang PALING RINGAN adalah...', opts: ['Batu bata', 'Tas sekolah', 'Kapas', 'Meja kayu'], ans: 2, exp: 'Kapas adalah benda yang paling ringan.' },
      { text: 'Jika di jungkat-jungkit sisi kanan turun ke bawah, berarti benda di sisi kanan...', opts: ['lebih ringan', 'lebih berat', 'sama berat', 'kosong'], ans: 1, exp: 'Benda yang lebih berat akan menarik sisi timbangan turun ke bawah.' },
      { text: '1 pensil ... daripada 10 buku paket.', opts: ['lebih berat', 'lebih ringan', 'sama berat', 'lebih besar'], ans: 1, exp: 'Satu pensil jauh lebih ringan daripada 10 buku paket.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-05',
    subSeq: 3,
    objectives: [
      'Siswa mampu membedakan kegiatan yang memerlukan waktu sebentar dan waktu lama.',
    ],
    materialTitle: 'Membandingkan Waktu: Sebentar dan Lama',
    blocks: [
      {
        type: 'visual_cards',
        title: 'Sebentar atau Lama? Klik Kartunya!',
        items: [
          { visual: '🚰', label: 'Cuci Tangan', caption: 'Sebentar', speech: 'Mencuci tangan hanya butuh waktu sebentar.' },
          { visual: '😴', label: 'Tidur Malam', caption: 'Lama', speech: 'Tidur malam membutuhkan waktu yang lama.' },
          { visual: '🥤', label: 'Minum Air', caption: 'Sebentar', speech: 'Minum segelas air waktunya sebentar.' },
          { visual: '🏫', label: 'Belajar di Sekolah', caption: 'Lama', speech: 'Belajar di sekolah dari pagi sampai siang waktunya lama.' },
        ],
      },
      {
        type: 'story_panel',
        title: 'Mana yang Lebih Cepat Selesai?',
        lines: [
          { speaker: 'Bima', avatar: '👦', text: 'Antara memakai sepatu dan tidur malam, mana yang lebih sebentar?' },
          { speaker: 'Alya', avatar: '👧', text: 'Tentu memakai sepatu! Kalau tidur malam itu sangat lama.' },
        ],
      },
    ],
    activityTitle: 'Latihan: Durasi Waktu',
    questions: [
      { text: 'Kegiatan yang memerlukan waktu SEBENTAR adalah...', opts: ['Tidur malam', 'Belajar di sekolah seharian', 'Minum segelas air', 'Perjalanan jauh ke luar kota'], ans: 2, exp: 'Minum segelas air selesai dalam beberapa detik (sebentar).' },
      { text: 'Kegiatan yang memerlukan waktu LAMA adalah...', opts: ['Mengedipkan mata', 'Tidur malam', 'Memakai topi', 'Menyapa teman'], ans: 1, exp: 'Tidur malam berlangsung berjam-jam (lama).' },
      { text: 'Mencuci tangan ... daripada mandi.', opts: ['lebih lama', 'lebih sebentar', 'sama lama', 'berhari-hari'], ans: 1, exp: 'Mencuci tangan lebih cepat (lebih sebentar) daripada mandi.' },
      { text: 'Memasak nasi sampai matang memerlukan waktu yang ... daripada membuka pintu.', opts: ['lebih sebentar', 'lebih cepat', 'lebih lama', 'sama saja'], ans: 2, exp: 'Memasak nasi jauh lebih lama daripada sekadar membuka pintu.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-05',
    subSeq: 4,
    objectives: [
      'Siswa mengenal alat ukur tidak baku seperti jengkal, depa, langkah, dan benda sekitar (pensil/klip).',
    ],
    materialTitle: 'Mengukur Panjang dengan Satuan Tidak Baku',
    blocks: [
      {
        type: 'paragraph',
        text: 'Kalau belum ada penggaris, kita tetap bisa mengukur panjang meja atau ruangan memakai anggota tubuh atau benda di sekitar. Ini disebut satuan tidak baku!',
      },
      {
        type: 'visual_cards',
        title: 'Macam-Macam Satuan Tidak Baku (Klik!)',
        items: [
          { visual: '🖐️', label: 'Jengkal', caption: 'Ujung jempol ke kelingking', speech: 'Jengkal adalah jarak ujung ibu jari ke ujung jari kelingking.' },
          { visual: '🙆', label: 'Depa', caption: 'Rentangan kedua tangan', speech: 'Depa adalah panjang rentangan kedua tangan kanan dan kiri.' },
          { visual: '👣', label: 'Langkah', caption: 'Jarak melangkah kaki', speech: 'Langkah digunakan untuk mengukur panjang lantai atau lapangan.' },
          { visual: '✏️', label: 'Pensil / Klip', caption: 'Benda sama panjang', speech: 'Kita juga bisa mengukur buku memakai panjang pensil atau klip kertas.' },
        ],
      },
      {
        type: 'teacher_note',
        text: 'Coba ukur panjang meja les memakai jengkal guru dan jengkal siswa, lalu diskusikan kenapa hasilnya berbeda (karena ukuran tangan berbeda — itulah mengapa disebut tidak baku!).',
      },
    ],
    activityTitle: 'Latihan: Satuan Tidak Baku',
    questions: [
      { text: 'Ukuran dari ujung ibu jari sampai ujung jari kelingking yang direntangkan disebut...', opts: ['Depa', 'Jengkal', 'Langkah', 'Meter'], ans: 1, exp: 'Jarak ujung jempol ke kelingking disebut 1 jengkal.' },
      { text: 'Untuk mengukur panjang ruang kelas tanpa penggaris, paling mudah menggunakan...', opts: ['Klip kertas', 'Langkah kaki', 'Penghapus', 'Kancing'], ans: 1, exp: 'Ruangan yang lebar paling praktis diukur menggunakan langkah kaki.' },
      { text: 'Panjang buku tulis adalah 5 klip kertas. Panjang kotak pensil adalah 4 klip kertas. Yang lebih panjang adalah...', opts: ['Kotak pensil', 'Buku tulis', 'Sama panjang', 'Klip kertas'], ans: 1, exp: '5 klip lebih panjang daripada 4 klip, jadi buku tulis lebih panjang.' },
      { text: 'Rentangan kedua tangan dari ujung jari kanan sampai ujung jari kiri disebut...', opts: ['Jengkal', 'Depa', 'Langkah', 'Hasta'], ans: 1, exp: 'Rentangan kedua lengan disebut 1 depa.' },
    ],
  },

  // =========================================================================
  // BAB 6: POLA DAN DATA SEDERHANA (MAT-SD1-06)
  // =========================================================================
  {
    topicCode: 'MAT-SD1-06',
    subSeq: 1,
    objectives: [
      'Siswa mampu mengenali keteraturan pada pola gambar dan pola warna sederhana.',
    ],
    materialTitle: 'Mengenal Pola Gambar dan Warna',
    blocks: [
      {
        type: 'paragraph',
        text: 'Pola adalah susunan gambar atau warna yang berulang secara teratur! Seperti merah–biru–merah–biru, atau apel–jeruk–apel–jeruk.',
      },
      {
        type: 'visual_cards',
        title: 'Lihat Pola yang Berulang!',
        items: [
          { visual: '🔴🔵🔴🔵', label: 'Pola AB-AB', caption: 'Merah - Biru berulang', speech: 'Pola warna: merah, biru, merah, biru.' },
          { visual: '🍎🍌🍎🍌', label: 'Pola Buah', caption: 'Apel - Pisang berulang', speech: 'Pola buah: apel, pisang, apel, pisang.' },
          { visual: '⭐🌙☀️⭐🌙☀️', label: 'Pola ABC', caption: '3 gambar berulang', speech: 'Pola tiga gambar: bintang, bulan, matahari, lalu berulang lagi.' },
        ],
      },
      {
        type: 'tip',
        text: 'Ucapkan polanya dengan irama seperti bernyanyi: "Merah, biru... merah, biru..." supaya langsung ketahuan urutannya!',
      },
    ],
    activityTitle: 'Latihan: Mengenal Pola',
    questions: [
      { text: 'Susunan warna 🔴 🟡 🔴 🟡 🔴 🟡 menunjukkan...', opts: ['Acak tidak teratur', 'Pola berulang merah-kuning', 'Semua merah', 'Pola angka'], ans: 1, exp: 'Warna merah dan kuning bergantian secara teratur.' },
      { text: 'Pola buah 🍎 🍊 🍎 🍊 terdiri dari berapa jenis buah yang berulang?', opts: ['1 jenis', '2 jenis', '3 jenis', '4 jenis'], ans: 1, exp: 'Ada 2 jenis buah yang bergantian: apel dan jeruk.' },
      { text: 'Manakah yang merupakan susunan BERPOLA teratur?', opts: ['⭐ ⭐ 🌙 ☀️ ⭐', '⭐ 🌙 ⭐ 🌙 ⭐ 🌙', '🌙 ☀️ ☀️ ⭐ 🌙', '⭐ ☀️ 🌙 🌙 ⭐'], ans: 1, exp: '⭐ 🌙 ⭐ 🌙 ⭐ 🌙 berulang teratur bergantian.' },
      { text: 'Pada pola 🔺 🟦 🔺 🟦, setelah segitiga selalu muncul...', opts: ['Segitiga lagi', 'Persegi biru', 'Lingkaran', 'Bintang'], ans: 1, exp: 'Segitiga dan persegi biru selalu bergantian.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-06',
    subSeq: 2,
    objectives: [
      'Siswa mampu menebak dan melanjutkan gambar atau warna berikutnya dalam sebuah pola.',
    ],
    materialTitle: 'Ayo Melanjutkan Pola!',
    blocks: [
      {
        type: 'flashcards',
        title: 'Tebak Gambar Berikutnya! (Klik untuk Cek Jawaban)',
        cards: [
          { emoji: '🎨', front: '🔴 🟢 🔴 🟢 🔴 ...', back: '🟢 Hijau!', hint: 'Merah dan hijau bergantian' },
          { emoji: '🐾', front: '🐱 🐶 🐱 🐶 ...', back: '🐱 Kucing!', hint: 'Setelah anjing kembali ke kucing' },
          { emoji: '✨', front: '⭐ ⭐ 🌙 ⭐ ⭐ ...', back: '🌙 Bulan!', hint: 'Polanya 2 bintang lalu 1 bulan' },
        ],
      },
      {
        type: 'worked_example',
        level: 'Dasar',
        question: 'Lanjutkan pola berikut: 🍎 🍌 🍇 🍎 🍌 ...',
        steps: [
          'Cari kelompok yang berulang: (Apel – Pisang – Anggur).',
          'Setelah Apel dan Pisang, urutan ketiganya adalah Anggur.',
        ],
        answer: '🍇 Anggur',
      },
    ],
    activityTitle: 'Latihan: Melanjutkan Pola',
    questions: [
      { text: 'Lanjutkan pola: 🔵 🟡 🔵 🟡 🔵 ...', opts: ['🔵 Biru', '🟡 Kuning', '🔴 Merah', '🟢 Hijau'], ans: 1, exp: 'Setelah biru selalu kuning.' },
      { text: 'Lanjutkan pola: 🍎 🍎 🍊 🍎 🍎 ...', opts: ['🍎 Apel', '🍊 Jeruk', '🍌 Pisang', '🍇 Anggur'], ans: 1, exp: 'Polanya dua apel lalu satu jeruk, jadi selanjutnya jeruk.' },
      { text: 'Lanjutkan pola: 🔺 🔵 🟩 🔺 🔵 ...', opts: ['🔺 Segitiga', '🔵 Lingkaran', '🟩 Persegi hijau', '⭐ Bintang'], ans: 2, exp: 'Urutan berulang: segitiga, lingkaran, persegi hijau.' },
      { text: 'Gambar yang hilang di tengah: 🐱 🐥 🐱 ... 🐱 🐥', opts: ['🐱 Kucing', '🐥 Anak ayam', '🐶 Anjing', '🐟 Ikan'], ans: 1, exp: 'Kucing dan anak ayam selalu bergantian.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-06',
    subSeq: 3,
    objectives: [
      'Siswa mampu mengelompokkan benda berdasarkan kesamaan warna, bentuk, atau jenisnya.',
    ],
    materialTitle: 'Mengelompokkan Benda Berdasarkan Ciri yang Sama',
    blocks: [
      {
        type: 'story_panel',
        title: 'Merapikan Benda Sesuai Kelompoknya',
        lines: [
          { speaker: 'Bu Guru', avatar: '👩‍🏫', text: 'Kalau pensil, penghapus, apel, dan jeruk tercampur, bagaimana cara merapikannya?' },
          { speaker: 'Alya', avatar: '👧', text: 'Pisahkan jadi 2 kelompok, Bu! Kelompok Alat Tulis dan Kelompok Buah!' },
        ],
      },
      {
        type: 'visual_cards',
        title: 'Contoh 3 Kelompok Benda',
        items: [
          { visual: '✏️📏📚', label: 'Alat Tulis', caption: 'Pensil, penggaris, buku', speech: 'Kelompok alat tulis: pensil, penggaris, dan buku.' },
          { visual: '🍎🍌🍊', label: 'Buah-Buahan', caption: 'Apel, pisang, jeruk', speech: 'Kelompok buah-buahan: apel, pisang, dan jeruk.' },
          { visual: '🐱🐶🐟', label: 'Hewan', caption: 'Kucing, anjing, ikan', speech: 'Kelompok hewan: kucing, anjing, dan ikan.' },
        ],
      },
    ],
    activityTitle: 'Latihan: Mengelompokkan Benda',
    questions: [
      { text: 'Pensil, penghapus, dan penggaris termasuk kelompok...', opts: ['Buah-buahan', 'Alat tulis', 'Hewan', 'Pakaian'], ans: 1, exp: 'Ketiganya digunakan untuk menulis dan belajar (alat tulis).' },
      { text: 'Manakah benda yang TIDAK masuk kelompok buah-buahan?', opts: ['Apel', 'Mangga', 'Sepatu', 'Jeruk'], ans: 2, exp: 'Sepatu adalah alas kaki, bukan buah-buahan.' },
      { text: 'Bola merah, apel merah, dan topi merah dikelompokkan berdasarkan kesamaan...', opts: ['Bentuk', 'Warna', 'Rasa', 'Ukuran'], ans: 1, exp: 'Ketiganya memiliki kesamaan warna merah.' },
      { text: 'Kucing, kelinci, dan burung masuk dalam kelompok...', opts: ['Tumbuhan', 'Alat masak', 'Hewan', 'Kendaraan'], ans: 2, exp: 'Kucing, kelinci, dan burung adalah hewan.' },
    ],
  },
  {
    topicCode: 'MAT-SD1-06',
    subSeq: 4,
    objectives: [
      'Siswa mampu membaca dan menghitung data sederhana dari piktogram (diagram gambar) dan turus.',
    ],
    materialTitle: 'Membaca Data Sederhana dengan Gambar (Piktogram)',
    blocks: [
      {
        type: 'paragraph',
        text: 'Piktogram adalah tabel yang memakai gambar untuk menunjukkan jumlah benda. Kita tinggal menghitung gambarnya di setiap baris!',
      },
      {
        type: 'table',
        title: 'Contoh Piktogram: Buah Kesukaan Teman Les',
        headers: ['Buah', 'Gambar (1 gambar = 1 anak)', 'Jumlah'],
        rows: [
          ['Apel', '🍎 🍎 🍎 🍎', '4 anak'],
          ['Pisang', '🍌 🍌', '2 anak'],
          ['Jeruk', '🍊 🍊 🍊 🍊 🍊', '5 anak'],
        ],
      },
      {
        type: 'worked_example',
        level: 'Dasar',
        question: 'Dari tabel buah kesukaan di atas, buah apa yang PALING BANYAK disukai?',
        steps: [
          'Hitung setiap baris: Apel = 4, Pisang = 2, Jeruk = 5.',
          'Angka paling besar adalah 5, yaitu Jeruk.',
        ],
        answer: 'Jeruk paling banyak disukai (5 anak).',
      },
      {
        type: 'teacher_note',
        text: 'Coba buat survei mini di tempat les (warna favorit atau makanan favorit siswa) lalu gambar turus / emoji bersama di papan tulis!',
      },
    ],
    activityTitle: 'Latihan: Membaca Piktogram Sederhana',
    questions: [
      { text: 'Jika baris Kucing punya gambar 🐱 🐱 🐱 🐱 (1 gambar = 1 anak), berapa anak yang suka kucing?', opts: ['3 anak', '4 anak', '5 anak', '6 anak'], ans: 1, exp: 'Ada 4 gambar kucing, artinya 4 anak suka kucing.' },
      { text: 'Data mainan: Mobil = 6, Boneka = 3, Bola = 5. Mainan yang PALING SEDIKIT adalah...', opts: ['Mobil', 'Boneka', 'Bola', 'Sama semua'], ans: 1, exp: '3 adalah jumlah paling sedikit, yaitu Boneka.' },
      { text: 'Data buah: Apel = 4, Jeruk = 5. Jumlah seluruh anak yang menyukai apel dan jeruk adalah...', opts: ['8 anak', '9 anak', '10 anak', '1 anak'], ans: 1, exp: '4 + 5 = 9 anak.' },
      { text: 'Tanda garis lurus untuk menghitung data (seperti ||||) disebut...', opts: ['Pola', 'Turus', 'Bangun datar', 'Jengkal'], ans: 1, exp: 'Garis-garis penghitung data disebut turus.' },
    ],
  },
];

upsertLessonsBatch('Kelas 1 SD — Matematika (6 Bab, 22 Submateri)', LESSONS).catch((err) => {
  console.error(err);
  process.exit(1);
});

