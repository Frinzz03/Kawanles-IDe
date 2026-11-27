import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: MY FIRST ENGLISH WORDS (Pengayaan Kelas 1 SD)
  {
    topicCode: 'BIG-SD1-01', subSeq: 1,
    objectives: ['Students get familiar with English as a fun international language.', 'Students recognize everyday English words.'],
    materialTitle: 'Welcome to English! (Pengayaan Kelas 1 SD)',
    blocks: [
      { type: 'story_panel', lang: 'en-US', title: 'Hello, English!', lines: [
        { speaker: 'Teacher', avatar: '👩‍🏫', text: 'Hello kids! Let us learn fun English words today!' },
        { speaker: 'Alya', avatar: '👧', text: 'Hello Teacher! I know apple, book, and cat!' },
      ]},
      { type: 'visual_cards', lang: 'en-US', title: 'Tap to Hear English Words! (Klik untuk Suara Inggris)', items: [
        { visual: '🍎', label: 'Apple', caption: 'Apel', speech: 'Apple' },
        { visual: '📘', label: 'Book', caption: 'Buku', speech: 'Book' },
        { visual: '🐱', label: 'Cat', caption: 'Kucing', speech: 'Cat' },
        { visual: '⚽', label: 'Ball', caption: 'Bola', speech: 'Ball' },
        { visual: '✏️', label: 'Pencil', caption: 'Pensil', speech: 'Pencil' },
      ]},
      { type: 'teacher_note', text: 'Catatan kurikulum: Bahasa Inggris Kelas 1 SD adalah materi pengayaan/pengenalan (bukan CP wajib Fase A). Fokuskan pada keberanian mendengar & menirukan suara.' },
    ],
    activityTitle: 'Practice: My First English Words',
    questions: [
      { text: 'Apa arti kata "Book"?', opts: ['Pensil', 'Buku', 'Bola', 'Apel'], ans: 1, exp: '"Book" berarti buku.' },
      { text: 'Bahasa Inggris dari "Kucing" adalah...', opts: ['Dog', 'Cat', 'Fish', 'Bird'], ans: 1, exp: '"Cat" artinya kucing.' },
      { text: 'Kata bahasa Inggris untuk ⚽ adalah...', opts: ['Apple', 'Pencil', 'Ball', 'Book'], ans: 2, exp: '"Ball" artinya bola.' },
    ],
  },
  {
    topicCode: 'BIG-SD1-01', subSeq: 2,
    objectives: ['Students recognize English alphabet letters A–Z with fun examples.'],
    materialTitle: 'The English Alphabet (A – Z)',
    blocks: [
      { type: 'paragraph', text: 'Huruf A sampai Z dalam bahasa Inggris bentuknya sama dengan bahasa Indonesia, tapi cara membacanya berbeda! Yuk klik hurufnya untuk mendengar bunyi Inggrisnya.' },
      { type: 'visual_cards', lang: 'en-US', title: 'Tap Letters A–J to Listen!', items: [
        { visual: '🍎', label: 'A (ei)', caption: 'Apple', speech: 'A, Apple' },
        { visual: '⚽', label: 'B (bi)', caption: 'Ball', speech: 'B, Ball' },
        { visual: '🐱', label: 'C (si)', caption: 'Cat', speech: 'C, Cat' },
        { visual: '🐶', label: 'D (di)', caption: 'Dog', speech: 'D, Dog' },
        { visual: '🥚', label: 'E (i)', caption: 'Egg', speech: 'E, Egg' },
        { visual: '🐟', label: 'F (ef)', caption: 'Fish', speech: 'F, Fish' },
        { visual: '🍇', label: 'G (ji)', caption: 'Grapes', speech: 'G, Grapes' },
        { visual: '👒', label: 'H (eic)', caption: 'Hat', speech: 'H, Hat' },
        { visual: '🍦', label: 'I (ai)', caption: 'Ice cream', speech: 'I, Ice cream' },
        { visual: '🧃', label: 'J (jei)', caption: 'Juice', speech: 'J, Juice' },
      ]},
    ],
    activityTitle: 'Practice: English Alphabet',
    questions: [
      { text: 'Huruf pertama dari kata "Apple" adalah...', opts: ['A', 'B', 'C', 'D'], ans: 0, exp: 'Apple diawali huruf A (dibaca "ei").' },
      { text: 'Huruf "E" dalam bahasa Inggris dibaca...', opts: ['e', 'i', 'ai', 'ei'], ans: 1, exp: 'Dalam bahasa Inggris, huruf E dibaca "i", sedangkan A dibaca "ei" dan I dibaca "ai".' },
      { text: 'Kata yang diawali huruf "F" adalah...', opts: ['Cat', 'Fish', 'Ball', 'Hat'], ans: 1, exp: 'Fish (ikan) diawali huruf F.' },
    ],
  },
  {
    topicCode: 'BIG-SD1-01', subSeq: 3,
    objectives: ['Students practice pronouncing English letters K–Z clearly.'],
    materialTitle: 'Cara Mengucapkan Huruf (K – Z)',
    blocks: [
      { type: 'flashcards', lang: 'en-US', title: 'Klik Kartu untuk Dengar Lafal Inggrisnya!', cards: [
        { emoji: '🪁', front: 'K — Kite', back: 'K dibaca "kei"', backSpeech: 'K, Kite', frontSpeech: 'K, Kite' },
        { emoji: '🦁', front: 'L — Lion', back: 'L dibaca "el"', backSpeech: 'L, Lion', frontSpeech: 'L, Lion' },
        { emoji: '🌙', front: 'M — Moon', back: 'M dibaca "em"', backSpeech: 'M, Moon', frontSpeech: 'M, Moon' },
        { emoji: '☀️', front: 'S — Sun', back: 'S dibaca "es"', backSpeech: 'S, Sun', frontSpeech: 'S, Sun' },
        { emoji: '🌳', front: 'T — Tree', back: 'T dibaca "ti"', backSpeech: 'T, Tree', frontSpeech: 'T, Tree' },
        { emoji: '🦓', front: 'Z — Zebra', back: 'Z dibaca "zi"', backSpeech: 'Z, Zebra', frontSpeech: 'Z, Zebra' },
      ]},
    ],
    activityTitle: 'Practice: Pronouncing Letters',
    questions: [
      { text: 'Huruf "T" dalam bahasa Inggris diucapkan...', opts: ['te', 'ti', 'ta', 'tu'], ans: 1, exp: 'Huruf T dalam bahasa Inggris diucapkan "ti".' },
      { text: 'Kata "Sun" (☀️) artinya...', opts: ['Bulan', 'Matahari', 'Bintang', 'Awan'], ans: 1, exp: 'Sun artinya matahari.' },
      { text: 'Kata "Moon" (🌙) diawali huruf...', opts: ['N', 'M', 'W', 'L'], ans: 1, exp: 'Moon (bulan) diawali huruf M.' },
    ],
  },
  {
    topicCode: 'BIG-SD1-01', subSeq: 4,
    objectives: ['Students recognize simple everyday English vocabulary around them.'],
    materialTitle: 'Kosakata Sederhana Sehari-hari',
    blocks: [
      { type: 'flashcards', lang: 'en-US', title: 'Tebak Artinya, Lalu Klik Kartunya!', cards: [
        { emoji: '🎒', front: 'Bag', back: 'Tas', frontSpeech: 'Bag', backSpeech: 'Bag means tas' },
        { emoji: '🥛', front: 'Milk', back: 'Susu', frontSpeech: 'Milk', backSpeech: 'Milk means susu' },
        { emoji: '💧', front: 'Water', back: 'Air', frontSpeech: 'Water', backSpeech: 'Water means air' },
        { emoji: '🏠', front: 'House', back: 'Rumah', frontSpeech: 'House', backSpeech: 'House means rumah' },
        { emoji: '🚗', front: 'Car', back: 'Mobil', frontSpeech: 'Car', backSpeech: 'Car means mobil' },
        { emoji: '🌺', front: 'Flower', back: 'Bunga', frontSpeech: 'Flower', backSpeech: 'Flower means bunga' },
      ]},
    ],
    activityTitle: 'Practice: Simple Vocabulary',
    questions: [
      { text: 'Bahasa Inggris dari "Air" adalah...', opts: ['Milk', 'Water', 'Juice', 'Tea'], ans: 1, exp: 'Water artinya air.' },
      { text: 'Apa arti kata "House"?', opts: ['Sekolah', 'Rumah', 'Mobil', 'Bunga'], ans: 1, exp: 'House artinya rumah.' },
      { text: 'Bahasa Inggris dari "Tas" adalah...', opts: ['Bag', 'Book', 'Box', 'Ball'], ans: 0, exp: 'Bag artinya tas.' },
    ],
  },

  // BAB 2: GREETINGS
  {
    topicCode: 'BIG-SD1-02', subSeq: 1,
    objectives: ['Students can say "Hello!" to greet friends and teachers.'],
    materialTitle: 'Saying "Hello!"',
    blocks: [
      { type: 'story_panel', lang: 'en-US', title: 'Say Hello!', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Hello, Bima!' },
        { speaker: 'Bima', avatar: '👦', text: 'Hello, Alya! How are you?' },
      ]},
      { type: 'tip', text: '"Hello!" bisa dipakai kapan saja (pagi, siang, sore, malam) kepada siapa saja!' },
    ],
    activityTitle: 'Practice: Hello',
    questions: [
      { text: 'Arti kata "Hello" adalah...', opts: ['Halo', 'Sampai jumpa', 'Terima kasih', 'Maaf'], ans: 0, exp: '"Hello" artinya halo.' },
      { text: 'Jika teman menyapa "Hello, Alya!", balasan yang tepat adalah...', opts: ['Hello!', 'Pencil!', 'Cat!', 'Red!'], ans: 0, exp: 'Sapaan "Hello!" dibalas dengan "Hello!" atau "Hi!".' },
      { text: 'Kapan kita boleh mengucapkan "Hello!"?', opts: ['Hanya pagi hari', 'Kapan saja saat bertemu', 'Hanya saat tidur', 'Hanya hari Minggu'], ans: 1, exp: '"Hello" dapat digunakan kapan saja.' },
    ],
  },
  {
    topicCode: 'BIG-SD1-02', subSeq: 2,
    objectives: ['Students can use "Hi!" as a friendly greeting for friends.'],
    materialTitle: 'Saying "Hi!" to Friends',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap to Practice Friendly Greetings!', items: [
        { visual: '👋', label: 'Hi!', caption: 'Hai!', speech: 'Hi!' },
        { visual: '😊', label: 'Hi, friend!', caption: 'Hai, teman!', speech: 'Hi, friend!' },
        { visual: '🤝', label: 'Hello!', caption: 'Halo!', speech: 'Hello!' },
      ]},
    ],
    activityTitle: 'Practice: Hi',
    questions: [
      { text: 'Sapaan singkat dan akrab untuk teman sebaya adalah...', opts: ['Hi!', 'Goodbye!', 'Book!', 'Water!'], ans: 0, exp: '"Hi!" adalah sapaan singkat dan akrab untuk teman.' },
      { text: 'Apa arti "Hi, friend!"?', opts: ['Hai, guru!', 'Hai, teman!', 'Selamat pagi!', 'Sampai jumpa!'], ans: 1, exp: 'Friend artinya teman.' },
      { text: 'Balasan ramah untuk "Hi!" adalah...', opts: ['Hi!', 'No!', 'Blue!', 'Cat!'], ans: 0, exp: '"Hi!" dibalas dengan "Hi!" atau "Hello!".' },
    ],
  },
  {
    topicCode: 'BIG-SD1-02', subSeq: 3,
    objectives: ['Students can greet politely in the morning using "Good morning".'],
    materialTitle: 'Good Morning! (Selamat Pagi)',
    blocks: [
      { type: 'story_panel', lang: 'en-US', title: 'Morning Greeting', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Good morning, Mom!' },
        { speaker: 'Mom', avatar: '👩', text: 'Good morning, Bima! Have a nice day!' },
      ]},
      { type: 'visual_cards', lang: 'en-US', title: 'Tap & Repeat!', items: [
        { visual: '🌅', label: 'Good morning!', caption: 'Selamat pagi!', speech: 'Good morning!' },
        { visual: '👩‍🏫', label: 'Good morning, Teacher!', caption: 'Selamat pagi, Guru!', speech: 'Good morning, Teacher!' },
      ]},
    ],
    activityTitle: 'Practice: Good Morning',
    questions: [
      { text: 'Bahasa Inggris dari "Selamat pagi" adalah...', opts: ['Good night', 'Good morning', 'Goodbye', 'Good afternoon'], ans: 1, exp: 'Good morning = selamat pagi.' },
      { text: 'Saat masuk kelas jam 7 pagi, kita berkata kepada guru...', opts: ['Good morning, Teacher!', 'Good night, Teacher!', 'Goodbye!', 'Thank you!'], ans: 0, exp: 'Pukul 7 adalah pagi hari, jadi ucapkan "Good morning, Teacher!".' },
      { text: 'Jika guru berkata "Good morning!", kita menjawab...', opts: ['Good morning!', 'Goodbye!', 'Two!', 'Dog!'], ans: 0, exp: '"Good morning!" dibalas dengan "Good morning!".' },
    ],
  },
  {
    topicCode: 'BIG-SD1-02', subSeq: 4,
    objectives: ['Students can use "Good afternoon" to greet in the afternoon.'],
    materialTitle: 'Good Afternoon! (Selamat Siang/Sore)',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap to Listen!', items: [
        { visual: '☀️', label: 'Good afternoon!', caption: 'Selamat siang/sore!', speech: 'Good afternoon!' },
        { visual: '🏫', label: 'Good afternoon, friends!', caption: 'Selamat siang, teman-teman!', speech: 'Good afternoon, friends!' },
      ]},
    ],
    activityTitle: 'Practice: Good Afternoon',
    questions: [
      { text: 'Sapaan bahasa Inggris di waktu siang (jam 1 siang) adalah...', opts: ['Good morning', 'Good afternoon', 'Good night', 'Goodbye'], ans: 1, exp: 'Good afternoon digunakan untuk menyapa siang hingga sore.' },
      { text: 'Arti "Good afternoon" adalah...', opts: ['Selamat pagi', 'Selamat siang / sore', 'Selamat tidur', 'Halo'], ans: 1, exp: 'Good afternoon berarti selamat siang/sore.' },
      { text: 'Balasan untuk "Good afternoon!" adalah...', opts: ['Good morning!', 'Good afternoon!', 'Hello, cat!', 'Thank you!'], ans: 1, exp: 'Dibalas dengan "Good afternoon!".' },
    ],
  },
  {
    topicCode: 'BIG-SD1-02', subSeq: 5,
    objectives: ['Students can say "Goodbye" and "See you" when leaving.'],
    materialTitle: 'Saying "Goodbye!" (Sampai Jumpa)',
    blocks: [
      { type: 'story_panel', lang: 'en-US', title: 'Time to Go Home', lines: [
        { speaker: 'Teacher', avatar: '👩‍🏫', text: 'Class is over. Goodbye, kids!' },
        { speaker: 'Alya', avatar: '👧', text: 'Goodbye, Teacher! See you tomorrow!' },
      ]},
    ],
    activityTitle: 'Practice: Goodbye',
    questions: [
      { text: 'Ungkapan bahasa Inggris saat berpamitan pulang adalah...', opts: ['Good morning', 'Goodbye', 'Hello', 'Hi'], ans: 1, exp: '"Goodbye" artinya selamat tinggal / sampai jumpa.' },
      { text: 'Arti "See you!" adalah...', opts: ['Selamat pagi', 'Sampai jumpa!', 'Terima kasih', 'Maaf'], ans: 1, exp: '"See you!" berarti sampai jumpa.' },
      { text: 'Saat teman berkata "Goodbye!", kita menjawab...', opts: ['Goodbye!', 'Good morning!', 'Apple!', 'Red!'], ans: 0, exp: '"Goodbye!" dibalas dengan "Goodbye!" atau "Bye!".' },
    ],
  },

  // BAB 3: NUMBERS AND COLORS
  {
    topicCode: 'BIG-SD1-03', subSeq: 1,
    objectives: ['Students can count and say numbers 1 to 10 in English.'],
    materialTitle: 'Numbers 1 to 10 (One – Ten)',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap Numbers 1–10 to Hear English!', items: [
        { visual: '1️⃣', label: 'One', caption: '1 (Satu)', speech: 'One' },
        { visual: '2️⃣', label: 'Two', caption: '2 (Dua)', speech: 'Two' },
        { visual: '3️⃣', label: 'Three', caption: '3 (Tiga)', speech: 'Three' },
        { visual: '4️⃣', label: 'Four', caption: '4 (Empat)', speech: 'Four' },
        { visual: '5️⃣', label: 'Five', caption: '5 (Lima)', speech: 'Five' },
        { visual: '6️⃣', label: 'Six', caption: '6 (Enam)', speech: 'Six' },
        { visual: '7️⃣', label: 'Seven', caption: '7 (Tujuh)', speech: 'Seven' },
        { visual: '8️⃣', label: 'Eight', caption: '8 (Delapan)', speech: 'Eight' },
        { visual: '9️⃣', label: 'Nine', caption: '9 (Sembilan)', speech: 'Nine' },
        { visual: '🔟', label: 'Ten', caption: '10 (Sepuluh)', speech: 'Ten' },
      ]},
    ],
    activityTitle: 'Practice: Numbers 1–10',
    questions: [
      { text: 'Bahasa Inggris dari angka 5 adalah...', opts: ['Four', 'Five', 'Six', 'Seven'], ans: 1, exp: '5 = Five.' },
      { text: '"Eight" adalah bahasa Inggris untuk angka...', opts: ['6', '7', '8', '9'], ans: 2, exp: 'Eight = 8 (delapan).' },
      { text: 'One, two, three, ..., five. Angka yang hilang adalah...', opts: ['Four', 'Six', 'Ten', 'Nine'], ans: 0, exp: 'Urutan: one (1), two (2), three (3), four (4), five (5).' },
    ],
  },
  {
    topicCode: 'BIG-SD1-03', subSeq: 2,
    objectives: ['Students can identify basic colors in English.'],
    materialTitle: 'Basic Colors (Warna-Warna Dasar)',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap Each Color!', items: [
        { visual: '🔴', label: 'Red', caption: 'Merah', speech: 'Red' },
        { visual: '🔵', label: 'Blue', caption: 'Biru', speech: 'Blue' },
        { visual: '🟡', label: 'Yellow', caption: 'Kuning', speech: 'Yellow' },
        { visual: '🟢', label: 'Green', caption: 'Hijau', speech: 'Green' },
        { visual: '⚫', label: 'Black', caption: 'Hitam', speech: 'Black' },
        { visual: '⚪', label: 'White', caption: 'Putih', speech: 'White' },
      ]},
    ],
    activityTitle: 'Practice: Basic Colors',
    questions: [
      { text: 'Bahasa Inggris warna "Hijau" (🟢) adalah...', opts: ['Red', 'Blue', 'Green', 'Yellow'], ans: 2, exp: 'Green = hijau.' },
      { text: 'Bendera Indonesia berwarna...', opts: ['Red and White', 'Blue and Yellow', 'Green and Black', 'Yellow and White'], ans: 0, exp: 'Merah = Red, Putih = White.' },
      { text: 'Warna buah pisang matang (🍌) adalah...', opts: ['Blue', 'Yellow', 'Black', 'Purple'], ans: 1, exp: 'Yellow = kuning.' },
    ],
  },
  {
    topicCode: 'BIG-SD1-03', subSeq: 3,
    objectives: ['Students can combine number + color + object (e.g., "Two red apples").'],
    materialTitle: 'Counting & Naming Colors Together',
    blocks: [
      { type: 'flashcards', lang: 'en-US', title: 'Tap to Hear Number + Color + Object!', cards: [
        { emoji: '🍎🍎', front: 'Two red apples', back: '2 apel merah', frontSpeech: 'Two red apples' },
        { emoji: '🔵🔵🔵', front: 'Three blue balls', back: '3 bola biru', frontSpeech: 'Three blue balls' },
        { emoji: '🍌🍌🍌🍌', front: 'Four yellow bananas', back: '4 pisang kuning', frontSpeech: 'Four yellow bananas' },
      ]},
    ],
    activityTitle: 'Practice: Numbers and Colors',
    questions: [
      { text: 'Apa arti "Two red apples"?', opts: ['Dua apel hijau', 'Dua apel merah', 'Tiga apel merah', 'Satu apel kuning'], ans: 1, exp: 'Two = dua, red = merah, apples = apel.' },
      { text: 'Bahasa Inggris dari "Tiga buku biru" adalah...', opts: ['Three blue books', 'Two red books', 'Three green books', 'Four blue books'], ans: 0, exp: 'Three (tiga) + blue (biru) + books (buku).' },
      { text: '"One green frog" artinya...', opts: ['Satu katak hijau', 'Dua katak hijau', 'Satu katak merah', 'Tiga katak biru'], ans: 0, exp: 'One = satu, green = hijau, frog = katak.' },
    ],
  },

  // BAB 4: MY BODY
  {
    topicCode: 'BIG-SD1-04', subSeq: 1,
    objectives: ['Students recognize main parts of the body in English.'],
    materialTitle: 'My Body (Bagian Tubuhku)',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap Body Parts & Point to Yours!', items: [
        { visual: '🙂', label: 'Head', caption: 'Kepala', speech: 'Head' },
        { visual: '👀', label: 'Eyes', caption: 'Mata', speech: 'Eyes' },
        { visual: '👂', label: 'Ears', caption: 'Telinga', speech: 'Ears' },
        { visual: '👃', label: 'Nose', caption: 'Hidung', speech: 'Nose' },
        { visual: '👄', label: 'Mouth', caption: 'Mulut', speech: 'Mouth' },
      ]},
    ],
    activityTitle: 'Practice: My Body',
    questions: [
      { text: 'Bahasa Inggris dari "Mata" adalah...', opts: ['Ears', 'Eyes', 'Nose', 'Mouth'], ans: 1, exp: 'Eyes = mata.' },
      { text: 'Apa arti kata "Nose"?', opts: ['Hidung', 'Mulut', 'Kepala', 'Tangan'], ans: 0, exp: 'Nose = hidung.' },
      { text: 'Kita mendengar suara menggunakan...', opts: ['Eyes', 'Ears', 'Mouth', 'Feet'], ans: 1, exp: 'Ears = telinga.' },
    ],
  },
  {
    topicCode: 'BIG-SD1-04', subSeq: 2,
    objectives: ['Students name head, eyes, ears, nose, mouth, hands, and feet accurately.'],
    materialTitle: 'Head, Hands, and Feet',
    blocks: [
      { type: 'flashcards', lang: 'en-US', title: 'Flip & Say It Out Loud!', cards: [
        { emoji: '🙌', front: 'Hands', back: 'Tangan', frontSpeech: 'Hands' },
        { emoji: '🦶', front: 'Feet', back: 'Kaki', frontSpeech: 'Feet' },
        { emoji: '🙂', front: 'Head', back: 'Kepala', frontSpeech: 'Head' },
        { emoji: '👄', front: 'Mouth', back: 'Mulut', frontSpeech: 'Mouth' },
      ]},
    ],
    activityTitle: 'Practice: Body Vocabulary',
    questions: [
      { text: 'Bahasa Inggris dari "Tangan" adalah...', opts: ['Feet', 'Hands', 'Head', 'Ears'], ans: 1, exp: 'Hands = tangan.' },
      { text: 'Kita berjalan menggunakan...', opts: ['Hands', 'Feet', 'Nose', 'Ears'], ans: 1, exp: 'Feet = kaki.' },
      { text: 'I have two ... (Saya punya dua mata).', opts: ['nose', 'head', 'eyes', 'mouth'], ans: 2, exp: 'Kita punya dua mata (two eyes).' },
    ],
  },
  {
    topicCode: 'BIG-SD1-04', subSeq: 3,
    objectives: ['Students understand and respond to simple TPR instructions ("Touch your nose!", "Clap your hands!").'],
    materialTitle: 'Simple Instructions (Ayo Gerakkan Tubuhmu!)',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap & Do the Action!', items: [
        { visual: '👏', label: 'Clap your hands!', caption: 'Tepuk tangan!', speech: 'Clap your hands!' },
        { visual: '👃', label: 'Touch your nose!', caption: 'Pegang hidungmu!', speech: 'Touch your nose!' },
        { visual: '🙋', label: 'Raise your hand!', caption: 'Angkat tanganmu!', speech: 'Raise your hand!' },
        { visual: '🧍', label: 'Stand up!', caption: 'Berdiri!', speech: 'Stand up!' },
      ]},
    ],
    activityTitle: 'Practice: Simple Instructions',
    questions: [
      { text: 'Arti perintah "Clap your hands!" adalah...', opts: ['Berdiri!', 'Tepuk tangan!', 'Pegang hidung!', 'Duduk!'], ans: 1, exp: 'Clap your hands = tepuk tangan.' },
      { text: 'Jika guru berkata "Touch your head!", kita memegang...', opts: ['Kaki', 'Kepala', 'Telinga', 'Hidung'], ans: 1, exp: 'Head = kepala.' },
      { text: 'Arti "Stand up!" adalah...', opts: ['Berdiri!', 'Duduk!', 'Tidur!', 'Lari!'], ans: 0, exp: 'Stand up = berdiri.' },
    ],
  },

  // BAB 5: MY FAMILY
  {
    topicCode: 'BIG-SD1-05', subSeq: 1,
    objectives: ['Students name father, mother, brother, and sister in English.'],
    materialTitle: 'My Family: Father, Mother, Brother, Sister',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap Family Members!', items: [
        { visual: '👨', label: 'Father', caption: 'Ayah', speech: 'Father' },
        { visual: '👩', label: 'Mother', caption: 'Ibu', speech: 'Mother' },
        { visual: '👦', label: 'Brother', caption: 'Saudara laki-laki', speech: 'Brother' },
        { visual: '👧', label: 'Sister', caption: 'Saudara perempuan', speech: 'Sister' },
      ]},
    ],
    activityTitle: 'Practice: Family Words',
    questions: [
      { text: 'Bahasa Inggris dari "Ibu" adalah...', opts: ['Father', 'Mother', 'Sister', 'Brother'], ans: 1, exp: 'Mother = ibu.' },
      { text: 'Apa arti kata "Father"?', opts: ['Ayah', 'Kakak', 'Adik', 'Ibu'], ans: 0, exp: 'Father = ayah.' },
      { text: 'Saudara perempuan dalam bahasa Inggris disebut...', opts: ['Brother', 'Father', 'Sister', 'Uncle'], ans: 2, exp: 'Sister = saudara perempuan.' },
    ],
  },
  {
    topicCode: 'BIG-SD1-05', subSeq: 2,
    objectives: ['Students can introduce family members using "This is my...".'],
    materialTitle: 'Introducing My Family',
    blocks: [
      { type: 'story_panel', lang: 'en-US', title: 'Meet My Family!', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'This is my mother, and this is my father!' },
        { speaker: 'Bima', avatar: '👦', text: 'I love my family too!' },
      ]},
    ],
    activityTitle: 'Practice: Introducing Family',
    questions: [
      { text: '"This is my brother." Artinya adalah...', opts: ['Ini ibuku.', 'Ini saudara laki-lakiku.', 'Ini ayahku.', 'Ini guruku.'], ans: 1, exp: 'Brother = saudara laki-laki.' },
      { text: 'Arti "I love my family" adalah...', opts: ['Aku sayang keluargaku', 'Aku suka apel', 'Ini rumahku', 'Selamat pagi'], ans: 0, exp: 'I love my family = aku sayang keluargaku.' },
      { text: 'Untuk memperkenalkan Ibu, kita berkata...', opts: ['This is my mother.', 'This is my cat.', 'This is my book.', 'This is red.'], ans: 0, exp: 'Mother = ibu.' },
    ],
  },

  // BAB 6: ANIMALS AROUND ME
  {
    topicCode: 'BIG-SD1-06', subSeq: 1,
    objectives: ['Students can name common animals in English.'],
    materialTitle: 'Animals Around Me (Hewan di Sekitarku)',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap to Hear Animal Names!', items: [
        { visual: '🐱', label: 'Cat', caption: 'Kucing', speech: 'Cat' },
        { visual: '🐶', label: 'Dog', caption: 'Anjing', speech: 'Dog' },
        { visual: '🐦', label: 'Bird', caption: 'Burung', speech: 'Bird' },
        { visual: '🐟', label: 'Fish', caption: 'Ikan', speech: 'Fish' },
        { visual: '🦆', label: 'Duck', caption: 'Bebek', speech: 'Duck' },
        { visual: '🐄', label: 'Cow', caption: 'Sapi', speech: 'Cow' },
      ]},
    ],
    activityTitle: 'Practice: Animal Names',
    questions: [
      { text: 'Bahasa Inggris dari "Burung" adalah...', opts: ['Fish', 'Bird', 'Duck', 'Cow'], ans: 1, exp: 'Bird = burung.' },
      { text: 'Apa arti kata "Fish"?', opts: ['Bebek', 'Sapi', 'Ikan', 'Kucing'], ans: 2, exp: 'Fish = ikan.' },
      { text: 'Hewan 🦆 dalam bahasa Inggris disebut...', opts: ['Duck', 'Cat', 'Dog', 'Cow'], ans: 0, exp: 'Duck = bebek.' },
    ],
  },
  {
    topicCode: 'BIG-SD1-06', subSeq: 2,
    objectives: ['Students recognize animal sounds in English playfully.'],
    materialTitle: 'Animal Sounds (Suara Hewan)',
    blocks: [
      { type: 'flashcards', lang: 'en-US', title: 'Tap to Hear Animal Sounds!', cards: [
        { emoji: '🐱', front: 'Cat', back: 'Meow!', frontSpeech: 'The cat says meow!' },
        { emoji: '🐶', front: 'Dog', back: 'Woof!', frontSpeech: 'The dog says woof!' },
        { emoji: '🦆', front: 'Duck', back: 'Quack!', frontSpeech: 'The duck says quack!' },
        { emoji: '🐄', front: 'Cow', back: 'Moo!', frontSpeech: 'The cow says moo!' },
      ]},
    ],
    activityTitle: 'Practice: Animal Sounds',
    questions: [
      { text: 'Hewan yang bersuara "Moo!" adalah...', opts: ['Cat', 'Duck', 'Cow', 'Bird'], ans: 2, exp: 'Cow (sapi) bersuara "Moo!".' },
      { text: 'Hewan yang bersuara "Quack!" adalah...', opts: ['Duck', 'Dog', 'Fish', 'Cat'], ans: 0, exp: 'Duck (bebek) bersuara "Quack!".' },
      { text: 'Suara kucing (Cat) adalah...', opts: ['Moo', 'Meow', 'Quack', 'Woof'], ans: 1, exp: 'Kucing bersuara "Meow!".' },
    ],
  },
  {
    topicCode: 'BIG-SD1-06', subSeq: 3,
    objectives: ['Students can describe simple animal features (swim, fly, big, small).'],
    materialTitle: 'Simple Animal Features (Ciri Sederhana Hewan)',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'What Can Animals Do?', items: [
        { visual: '🐦', label: 'A bird can fly', caption: 'Burung bisa terbang', speech: 'A bird can fly.' },
        { visual: '🐟', label: 'A fish can swim', caption: 'Ikan bisa berenang', speech: 'A fish can swim.' },
        { visual: '🐘', label: 'Big elephant', caption: 'Gajah besar', speech: 'Big elephant.' },
        { visual: '🐜', label: 'Small ant', caption: 'Semut kecil', speech: 'Small ant.' },
      ]},
    ],
    activityTitle: 'Practice: Animal Features',
    questions: [
      { text: '"A bird can fly." Artinya burung bisa...', opts: ['Berenang', 'Terbang', 'Melompat', 'Tidur'], ans: 1, exp: 'Fly artinya terbang.' },
      { text: 'Hewan yang bisa berenang (can swim) di air adalah...', opts: ['Fish', 'Bird', 'Ant', 'Cat'], ans: 0, exp: 'Fish (ikan) hidup dan berenang di air.' },
      { text: 'Lawan kata dari "Big" (besar) adalah...', opts: ['Red', 'Small', 'Two', 'Fly'], ans: 1, exp: 'Small artinya kecil.' },
    ],
  },
];

upsertLessonsBatch('Kelas 1 SD — Bahasa Inggris (6 Bab, 20 Submateri)', LESSONS).catch((err) => {
  console.error(err);
  process.exit(1);
});

