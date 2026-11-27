import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: GREETINGS AND LEAVE-TAKING (CP Fase B)
  {
    topicCode: 'BIG-SD3-01', subSeq: 1,
    objectives: ['Siswa mampu membedakan sapaan formal (kepada guru/orang tua) dan informal (kepada teman) dalam Bahasa Inggris.'],
    materialTitle: 'Formal and Informal Greetings',
    blocks: [
      { type: 'story_panel', title: 'Sapaan Sopan vs Santai!', lines: [
        { speaker: 'Miss Dina', avatar: '👩‍🏫', text: 'Good morning, class! Mulai kelas 3, Bahasa Inggris masuk pelajaran wajib Fase B! Yuk kenali sapaan formal dan informal.' },
        { speaker: 'Bima', avatar: '👦', text: 'Good morning, Miss! Kalau ke teman boleh bilang "Hi!" atau "Hello!" ya Miss!' },
      ]},
      { type: 'visual_cards', title: 'Klik Kartu untuk Dengarkan Pengucapannya! 🔊', cards: [
        { emoji: '🌅', label: 'Good morning', sub: 'Selamat pagi (Formal)', speak: 'Good morning', lang: 'en-US' },
        { emoji: '☀️', label: 'Good afternoon', sub: 'Selamat siang/sore (Formal)', speak: 'Good afternoon', lang: 'en-US' },
        { emoji: '🌆', label: 'Good evening', sub: 'Selamat petang/malam (Formal)', speak: 'Good evening', lang: 'en-US' },
        { emoji: '👋', label: 'Hi! / Hello!', sub: 'Hai! / Halo! (Informal ke teman)', speak: 'Hi! Hello!', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Formal & Informal Greetings',
    questions: [
      { text: 'Sapaan yang paling sopan saat bertemu guru di pagi hari pukul 07.00 adalah...', opts: ['Good night, Sir!', 'Good morning, Sir!', 'See you!', 'Bye-bye!'], ans: 1, exp: '"Good morning" digunakan untuk menyapa di pagi hari.' },
      { text: 'Sapaan santai (informal) yang biasa digunakan kepada teman sebaya adalah...', opts: ['Hi, Raka!', 'Good evening, Sir!', 'Nice to meet you, Teacher', 'Good night'], ans: 0, exp: '"Hi!" dan "Hello!" adalah sapaan informal yang akrab.' },
      { text: 'Pukul 14.00 siang saat pulang sekolah, kita menyapa dengan...', opts: ['Good morning', 'Good afternoon', 'Good night', 'Good evening'], ans: 1, exp: '"Good afternoon" digunakan dari tengah hari hingga sore.' },
    ],
  },
  {
    topicCode: 'BIG-SD3-01', subSeq: 2,
    objectives: ['Siswa mampu merespons sapaan dan menanyakan kabar ("How are you?") dalam Bahasa Inggris.'],
    materialTitle: 'Greeting Responses (Menjawab Sapaan)',
    blocks: [
      { type: 'flashcards', title: 'Klik Kartu untuk Lihat & Dengar Jawabannya!', cards: [
        { emoji: '😊', front: 'How are you?', back: "I am fine, thank you. And you?", speak: 'I am fine, thank you. And you?', lang: 'en-US' },
        { emoji: '😄', front: 'Good morning, Alya!', back: 'Good morning, Miss!', speak: 'Good morning, Miss!', lang: 'en-US' },
        { emoji: '🤩', front: 'How are you today?', back: "I'm great! / I'm very well!", speak: 'I am great!', lang: 'en-US' },
        { emoji: '🤒', front: 'Kalau sedang kurang enak badan:', back: "I'm not feeling well.", speak: 'I am not feeling well.', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Greeting Responses',
    questions: [
      { text: 'Teacher: "How are you today, Salsa?" — Jawaban Salsa yang tepat adalah...', opts: ['My name is Salsa.', 'I am fine, thank you.', 'I am nine years old.', 'Good night.'], ans: 1, exp: '"How are you?" menanyakan kabar → dijawab "I am fine, thank you."' },
      { text: 'Bima: "Good afternoon, Nadia!" — Nadia menjawab...', opts: ['Good afternoon, Bima!', 'Good morning, Bima!', 'I am ten.', 'Thank you.'], ans: 0, exp: 'Sapaan "Good afternoon" dibalas dengan "Good afternoon".' },
      { text: 'Arti kalimat "I am very well, thank you" adalah...', opts: ['Saya sedang sakit', 'Saya sangat baik, terima kasih', 'Nama saya baik', 'Sampai jumpa'], ans: 1, exp: '"Very well" berarti sangat baik/sehat.' },
    ],
  },
  {
    topicCode: 'BIG-SD3-01', subSeq: 3,
    objectives: ['Siswa mampu mengucapkan salam perpisahan (leave-taking) yang tepat dalam Bahasa Inggris.'],
    materialTitle: 'Saying Goodbye (Berpamitan)',
    blocks: [
      { type: 'visual_cards', title: 'Ungkapan Berpamitan (Klik untuk Dengar 🔊)', cards: [
        { emoji: '👋', label: 'Goodbye! / Bye!', sub: 'Selamat tinggal / Dadah!', speak: 'Goodbye! Bye!', lang: 'en-US' },
        { emoji: '📅', label: 'See you tomorrow!', sub: 'Sampai jumpa besok!', speak: 'See you tomorrow!', lang: 'en-US' },
        { emoji: '🕒', label: 'See you later!', sub: 'Sampai jumpa nanti!', speak: 'See you later!', lang: 'en-US' },
        { emoji: '🌙', label: 'Good night!', sub: 'Selamat tidur! (hanya saat mau tidur/pisah malam)', speak: 'Good night!', lang: 'en-US' },
      ]},
      { type: 'misconception', wrong: 'Menggunakan "Good night" saat baru bertemu orang di jam 7 malam.', right: 'Baru bertemu malam hari gunakan "Good evening"! "Good night" hanya dipakai untuk berpamitan mau tidur.' },
    ],
    activityTitle: 'Practice: Saying Goodbye',
    questions: [
      { text: 'Ungkapan yang tepat saat berpamitan pulang sekolah dan akan bertemu lagi besok adalah...', opts: ['Good morning!', 'See you tomorrow!', 'How are you?', 'My name is Raka.'], ans: 1, exp: '"See you tomorrow!" berarti sampai jumpa besok.' },
      { text: 'Sebelum tidur malam, Alya berkata kepada ibunya...', opts: ['Good afternoon, Mom!', 'Good night, Mom!', 'Good morning, Mom!', 'Nice to meet you!'], ans: 1, exp: '"Good night" diucapkan saat hendak tidur.' },
      { text: 'Arti dari "See you later!" adalah...', opts: ['Sampai jumpa nanti!', 'Apa kabarmu?', 'Siapa namamu?', 'Selamat pagi!'], ans: 0, exp: '"Later" berarti nanti.' },
    ],
  },
  {
    topicCode: 'BIG-SD3-01', subSeq: 4,
    objectives: ['Siswa mampu memilih sapaan dan salam perpisahan yang tepat sesuai waktu dan lawan bicara.'],
    materialTitle: 'Using Greetings in Real Situations',
    blocks: [
      { type: 'table', title: 'Panduan Waktu Sapaan Bahasa Inggris', headers: ['Waktu', 'Sapaan (Bertemu)', 'Berpamitan'], rows: [
        ['Pagi (05.00–11.59)', 'Good morning', 'Goodbye / See you'],
        ['Siang–Sore (12.00–17.59)', 'Good afternoon', 'See you later / Bye'],
        ['Petang–Malam (18.00+)', 'Good evening', 'Good night (tidur / pisah malam)'],
      ]},
    ],
    activityTitle: 'Practice: Greetings by Situation',
    questions: [
      { text: 'Pukul 19.30 malam, paman datang berkunjung ke rumahmu. Kamu menyapanya dengan...', opts: ['Good night, Uncle!', 'Good evening, Uncle!', 'Good morning, Uncle!', 'See you!'], ans: 1, exp: 'Saat bertemu di malam hari gunakan "Good evening".' },
      { text: 'Pukul 07.30 pagi sebelum masuk kelas, kamu bertemu Miss Dina. Kamu berkata...', opts: ['Good morning, Miss Dina!', 'Good night, Miss Dina!', 'Bye, Miss!', 'Good evening!'], ans: 0, exp: 'Pukul 07.30 adalah pagi hari → Good morning.' },
      { text: 'Saat berpisah dengan teman setelah les sore, kamu mengucapkan...', opts: ['Good morning!', 'See you next week! Bye!', 'How are you?', 'Good evening!'], ans: 1, exp: 'Berpamitan menggunakan "See you..." / "Bye!".' },
    ],
  },

  // BAB 2: INTRODUCING YOURSELF
  {
    topicCode: 'BIG-SD3-02', subSeq: 1,
    objectives: ['Siswa mampu menyebutkan nama lengkap dan nama panggilan dalam Bahasa Inggris.'],
    materialTitle: 'Saying Your Name',
    blocks: [
      { type: 'visual_cards', title: 'Cara Menyebutkan Nama (Klik 🔊)', cards: [
        { emoji: '🏷️', label: 'My name is ...', sub: 'Nama saya adalah ...', speak: 'My name is Alya', lang: 'en-US' },
        { emoji: '🙋', label: 'I am ...', sub: 'Saya ...', speak: 'I am Bima', lang: 'en-US' },
        { emoji: '✨', label: 'You can call me ...', sub: 'Kamu bisa memanggilku ...', speak: 'You can call me Raka', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Saying Your Name',
    questions: [
      { text: 'Kalimat Bahasa Inggris untuk "Nama saya adalah Dina" adalah...', opts: ['Your name is Dina.', 'My name is Dina.', 'Her name is Dina.', 'His name is Dina.'], ans: 1, exp: '"My name is..." berarti nama saya adalah...' },
      { text: 'Arti kalimat "You can call me Bima" adalah...', opts: ['Kamu adalah Bima', 'Kamu bisa memanggilku Bima', 'Nama kamu Bima', 'Di mana Bima?'], ans: 1, exp: '"Call me..." digunakan untuk menyebutkan nama panggilan.' },
      { text: 'Lengkapi: "Hello! I ... Salsa."', opts: ['is', 'am', 'are', 'my'], ans: 1, exp: 'Pasangan "I" selalu "am" → I am Salsa.' },
    ],
  },
  {
    topicCode: 'BIG-SD3-02', subSeq: 2,
    objectives: ['Siswa mampu memperkenalkan diri secara lengkap dalam 3–4 kalimat sederhana.'],
    materialTitle: 'Introducing Yourself (Memperkenalkan Diri)',
    blocks: [
      { type: 'story_panel', title: 'Contoh Perkenalan Diri Keren!', lines: [
        { speaker: 'Raka', avatar: '👦', text: 'Hello, friends! My name is Raka Pratama. You can call me Raka. I am a third-grade student. Nice to meet you!' },
        { speaker: 'Friends', avatar: '👧', text: 'Hello, Raka! Nice to meet you too!' },
      ]},
      { type: 'tip', text: 'Tutup perkenalanmu dengan "Nice to meet you!" (Senang bertemu denganmu), dan balasannya adalah "Nice to meet you too!"' },
    ],
    activityTitle: 'Practice: Introducing Yourself',
    questions: [
      { text: 'Jika teman baru berkata "Nice to meet you!", balasan terbaikmu adalah...', opts: ['Good night!', 'Nice to meet you too!', 'I am nine.', 'See you!'], ans: 1, exp: '"Nice to meet you too!" artinya senang bertemu denganmu juga.' },
      { text: 'Arti "I am a student" adalah...', opts: ['Saya seorang guru', 'Saya seorang siswa', 'Saya seorang dokter', 'Saya di rumah'], ans: 1, exp: '"Student" artinya siswa/pelajar.' },
      { text: 'Urutan perkenalan diri yang paling sopan adalah...', opts: ['Salam → Sebutkan nama → Info singkat → Nice to meet you', 'Langsung pergi', 'Sebutkan angka saja', 'Good night dulu'], ans: 0, exp: 'Awali salam, sebutkan identitas, tutup dengan sapaan ramah.' },
    ],
  },
  {
    topicCode: 'BIG-SD3-02', subSeq: 3,
    objectives: ['Siswa mampu menanyakan nama dan ejaan nama teman dalam Bahasa Inggris.'],
    materialTitle: 'Asking Someone\'s Name',
    blocks: [
      { type: 'flashcards', title: 'Tanya Jawab Nama (Klik 🔊)', cards: [
        { emoji: '❓', front: "What is your name?", back: 'Siapa namamu? → My name is Nadia.', speak: 'What is your name?', lang: 'en-US' },
        { emoji: '🔤', front: 'How do you spell your name?', back: 'Bagaimana mengeja namamu? → N-A-D-I-A.', speak: 'How do you spell your name?', lang: 'en-US' },
        { emoji: '🤝', front: 'Are you Bima?', back: 'Yes, I am. / No, I am Raka.', speak: 'Are you Bima?', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Asking Names',
    questions: [
      { text: 'Pertanyaan yang tepat untuk menanyakan nama teman baru adalah...', opts: ['How old are you?', 'What is your name?', 'Where do you live?', 'How are you?'], ans: 1, exp: '"What is your name?" menanyakan nama.' },
      { text: 'Alya: "What is your name?" — Jawaban yang tepat adalah...', opts: ['I am fine.', 'My name is Dito.', 'I live in Gresik.', 'Good morning.'], ans: 1, exp: 'Menjawab pertanyaan nama dengan "My name is..."' },
      { text: 'Pertanyaan "How do you spell your name?" meminta kita untuk...', opts: ['Menyebutkan umur', 'Mengeja huruf demi huruf nama kita', 'Menyebutkan alamat', 'Menyanyi'], ans: 1, exp: '"Spell" artinya mengeja huruf.' },
    ],
  },
  {
    topicCode: 'BIG-SD3-02', subSeq: 4,
    objectives: ['Siswa mampu menyampaikan informasi sederhana tentang tempat tinggal, kelas, dan hobi.'],
    materialTitle: 'Sharing Simple Information About Yourself',
    blocks: [
      { type: 'visual_cards', title: 'Info Tambahan Tentang Dirimu (Klik 🔊)', cards: [
        { emoji: '📍', label: 'I live in Gresik.', sub: 'Saya tinggal di Gresik.', speak: 'I live in Gresik', lang: 'en-US' },
        { emoji: '🏫', label: 'I am in grade 3.', sub: 'Saya di kelas 3.', speak: 'I am in grade three', lang: 'en-US' },
        { emoji: '⚽', label: 'My hobby is reading.', sub: 'Hobi saya membaca.', speak: 'My hobby is reading', lang: 'en-US' },
        { emoji: '🥭', label: 'I like mangoes.', sub: 'Saya suka mangga.', speak: 'I like mangoes', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Personal Information',
    questions: [
      { text: 'Kalimat Bahasa Inggris untuk "Saya tinggal di Gresik" adalah...', opts: ['I go in Gresik.', 'I live in Gresik.', 'I am Gresik.', 'I like Gresik.'], ans: 1, exp: '"Live in..." berarti tinggal di...' },
      { text: '"My hobby is drawing." Hobi orang tersebut adalah...', opts: ['Berenang', 'Menggambar', 'Menyanyi', 'Berlari'], ans: 1, exp: '"Drawing" artinya menggambar.' },
      { text: 'Pertanyaan untuk menanyakan tempat tinggal adalah...', opts: ['Where do you live?', 'What is your name?', 'How are you?', 'What time is it?'], ans: 0, exp: '"Where do you live?" = Di mana kamu tinggal?' },
    ],
  },

  // BAB 3: INTRODUCING OTHERS
  {
    topicCode: 'BIG-SD3-03', subSeq: 1,
    objectives: ['Siswa mampu memperkenalkan teman atau anggota keluarga kepada orang lain.'],
    materialTitle: 'Introducing a Friend (Memperkenalkan Teman)',
    blocks: [
      { type: 'story_panel', title: 'Kenalkan Temanku!', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Mom, this is my friend, Salsa. She is in my class!' },
        { speaker: 'Mom', avatar: '👩', text: 'Hello, Salsa! Nice to meet you!' },
        { speaker: 'Salsa', avatar: '👧', text: 'Nice to meet you too, Auntie!' },
      ]},
      { type: 'tip', text: 'Gunakan pola "This is ..." (Ini adalah ...) untuk memperkenalkan satu orang yang dekat dengan kita!' },
    ],
    activityTitle: 'Practice: Introducing Friends',
    questions: [
      { text: 'Ungkapan yang tepat untuk memperkenalkan teman bernama Raka adalah...', opts: ['This is my friend, Raka.', 'I am Raka.', 'Goodbye, Raka.', 'How old is Raka?'], ans: 0, exp: '"This is..." digunakan untuk memperkenalkan seseorang.' },
      { text: '"This is my sister, Dina." Artinya Dina adalah ... saya.', opts: ['Ayah', 'Saudara perempuan', 'Guru', 'Paman'], ans: 1, exp: '"Sister" = saudara perempuan (kakak/adik perempuan).' },
      { text: 'Saat diperkenalkan dengan teman baru, kita sebaiknya menjawab...', opts: ['Nice to meet you!', 'See you tomorrow!', 'I am sorry!', 'Sit down!'], ans: 0, exp: '"Nice to meet you!" diucapkan saat pertama kali berkenalan.' },
    ],
  },
  {
    topicCode: 'BIG-SD3-03', subSeq: 2,
    objectives: ['Siswa mampu menanyakan identitas orang lain ("Who is he/she?", "What is his/her name?").'],
    materialTitle: 'Asking About Someone\'s Identity',
    blocks: [
      { type: 'flashcards', title: 'Menanyakan Siapa Seseorang (Klik 🔊)', cards: [
        { emoji: '👦', front: 'Who is he?', back: 'Siapa dia (laki-laki)? → He is my brother, Bima.', speak: 'Who is he? He is my brother.', lang: 'en-US' },
        { emoji: '👧', front: 'Who is she?', back: 'Siapa dia (perempuan)? → She is my teacher, Miss Ana.', speak: 'Who is she? She is my teacher.', lang: 'en-US' },
        { emoji: '🏷️', front: "What is his / her name?", back: 'His name is Raka (laki-laki) / Her name is Alya (perempuan).', speak: 'What is her name? Her name is Alya.', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Asking Identity',
    questions: [
      { text: 'Untuk menanyakan "Siapa dia (perempuan)?", kita bertanya...', opts: ['Who is he?', 'Who is she?', 'What is this?', 'Where is she?'], ans: 1, exp: '"Who" = siapa, "she" = dia perempuan.' },
      { text: 'A: "What is his name?" (menunjuk anak laki-laki). Jawaban yang benar adalah...', opts: ['Her name is Bima.', 'His name is Bima.', 'My name is Bima.', 'She is Bima.'], ans: 1, exp: 'Untuk laki-laki gunakan "His name is..."' },
      { text: 'A: "Who is she?" — B: "She is my mother." Arti "mother" adalah...', opts: ['Ayah', 'Ibu', 'Kakek', 'Kakak laki-laki'], ans: 1, exp: '"Mother" artinya ibu.' },
    ],
  },
  {
    topicCode: 'BIG-SD3-03', subSeq: 3,
    objectives: ['Siswa mampu menggunakan kata ganti I, you, he, she beserta pasangan to be (am, are, is).'],
    materialTitle: 'Using I, You, He, and She',
    blocks: [
      { type: 'table', title: 'Rumus Kata Ganti & Pasangannya (To Be)', headers: ['Kata Ganti', 'Arti', 'Pasangan', 'Contoh Kalimat'], rows: [
        ['I', 'Saya', 'am', 'I am a student.'],
        ['You', 'Kamu', 'are', 'You are my friend.'],
        ['He', 'Dia (laki-laki)', 'is', 'He is Raka.'],
        ['She', 'Dia (perempuan)', 'is', 'She is Salsa.'],
      ]},
      { type: 'misconception', wrong: 'Menulis "She are my friend" atau "He am Raka".', right: 'Ingat lagunya: I → am, You → are, He/She → is!' },
    ],
    activityTitle: 'Practice: I, You, He, She',
    questions: [
      { text: 'Salsa is a girl. ... is my classmate.', opts: ['He', 'She', 'I', 'You'], ans: 1, exp: 'Salsa perempuan → kata gantinya "She".' },
      { text: 'Bima is a boy. ... is nine years old.', opts: ['She', 'He', 'Are', 'Am'], ans: 1, exp: 'Bima laki-laki → kata gantinya "He".' },
      { text: 'Lengkapi: "You ... very kind!"', opts: ['am', 'is', 'are', 'he'], ans: 2, exp: 'Pasangan "You" selalu "are".' },
      { text: 'Lengkapi: "He ... my English teacher."', opts: ['am', 'is', 'are', 'you'], ans: 1, exp: 'Pasangan "He" selalu "is".' },
    ],
  },

  // BAB 4: NUMBERS, TIME, AND PERSONAL INFORMATION
  {
    topicCode: 'BIG-SD3-04', subSeq: 1,
    objectives: ['Siswa mampu menyebutkan dan menuliskan angka 1 sampai 50 dalam Bahasa Inggris.'],
    materialTitle: 'Numbers 1 to 50',
    blocks: [
      { type: 'visual_cards', title: 'Angka Penting (Klik 🔊)', cards: [
        { emoji: '1️⃣2️⃣', label: '11–15', sub: 'eleven, twelve, thirteen, fourteen, fifteen', speak: 'eleven, twelve, thirteen, fourteen, fifteen', lang: 'en-US' },
        { emoji: '2️⃣0️⃣', label: '20 = twenty', sub: '21 = twenty-one, 25 = twenty-five', speak: 'twenty, twenty-one, twenty-five', lang: 'en-US' },
        { emoji: '3️⃣0️⃣', label: '30 = thirty', sub: '34 = thirty-four', speak: 'thirty, thirty-four', lang: 'en-US' },
        { emoji: '4️⃣0️⃣', label: '40 = forty, 50 = fifty', sub: 'Hati-hati: forty tanpa huruf u!', speak: 'forty, fifty', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Numbers 1–50',
    questions: [
      { text: 'Angka 15 dalam Bahasa Inggris adalah...', opts: ['Fifty', 'Fifteen', 'Five', 'Fourteen'], ans: 1, exp: '15 = fifteen, sedangkan 50 = fifty.' },
      { text: 'Bahasa Inggris dari bilangan 28 adalah...', opts: ['Twenty-eight', 'Eighty-two', 'Twelve-eight', 'Thirty-eight'], ans: 0, exp: '20 (twenty) + 8 (eight) = twenty-eight.' },
      { text: 'Bilangan "thirty-five" adalah...', opts: ['25', '35', '53', '45'], ans: 1, exp: 'Thirty (30) + five (5) = 35.' },
    ],
  },
  {
    topicCode: 'BIG-SD3-04', subSeq: 2,
    objectives: ['Siswa mampu menyebutkan umur sendiri dan orang lain dalam Bahasa Inggris.'],
    materialTitle: 'Telling Age (Menyebutkan Umur)',
    blocks: [
      { type: 'flashcards', title: 'Cara Bilang Umur (Klik 🔊)', cards: [
        { emoji: '🎂', front: 'Saya berumur 9 tahun', back: 'I am nine years old.', speak: 'I am nine years old.', lang: 'en-US' },
        { emoji: '👦', front: 'Dia (laki-laki) berumur 10 tahun', back: 'He is ten years old.', speak: 'He is ten years old.', lang: 'en-US' },
        { emoji: '👧', front: 'Adik perempuanku berumur 6 tahun', back: 'She is six years old.', speak: 'She is six years old.', lang: 'en-US' },
      ]},
      { type: 'tip', text: 'Jangan lupa akhiran "s" pada kata "years" karena umurnya lebih dari 1 tahun! (nine years old).' },
    ],
    activityTitle: 'Practice: Telling Age',
    questions: [
      { text: '"I am nine years old." Artinya saya berumur ... tahun.', opts: ['7', '8', '9', '10'], ans: 2, exp: '"Nine" berarti sembilan (9).' },
      { text: 'Penulisan Bahasa Inggris yang BENAR untuk "Dia (perempuan) berumur 8 tahun" adalah...', opts: ['She is eight years old.', 'She are eight year old.', 'He is eight years old.', 'She have eight years.'], ans: 0, exp: 'Umur memakai to be "is/am/are" + angka + "years old".' },
      { text: 'Jika umurmu sekarang 9 tahun, tahun depan umurmu adalah ... years old.', opts: ['eight', 'ten', 'eleven', 'twelve'], ans: 1, exp: '9 + 1 = 10 (ten).' },
    ],
  },
  {
    topicCode: 'BIG-SD3-04', subSeq: 3,
    objectives: ['Siswa mampu membaca jam tepat (o\'clock) dan melengkapi kartu identitas diri sederhana.'],
    materialTitle: 'Telling Time (o\'clock) & Personal Card',
    blocks: [
      { type: 'visual_cards', title: 'Membaca Jam Tepat (Klik 🔊)', cards: [
        { emoji: '🕖', label: "It is seven o'clock", sub: 'Sekarang pukul 07.00', speak: "It is seven o'clock", lang: 'en-US' },
        { emoji: '🕛', label: "It is twelve o'clock", sub: 'Sekarang pukul 12.00', speak: "It is twelve o'clock", lang: 'en-US' },
        { emoji: '🕒', label: "It is three o'clock", sub: 'Sekarang pukul 03.00', speak: "It is three o'clock", lang: 'en-US' },
        { emoji: '🪪', label: 'ID Card Info', sub: 'Name, Age, Class, Address, Hobby', speak: 'Name, Age, Class, Address, Hobby', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Time & Personal Info',
    questions: [
      { text: 'What time is it? (08.00) — Jawaban yang tepat adalah...', opts: ["It is seven o'clock.", "It is eight o'clock.", "It is nine o'clock.", "It is ten o'clock."], ans: 1, exp: '08.00 = eight o\'clock.' },
      { text: 'Pada kartu identitas (ID Card), kata "Address" artinya...', opts: ['Umur', 'Alamat', 'Hobi', 'Nama'], ans: 1, exp: '"Address" berarti alamat tempat tinggal.' },
      { text: 'Pertanyaan untuk menanyakan waktu/jam adalah...', opts: ['What time is it?', 'What is your name?', 'How old are you?', 'Who is he?'], ans: 0, exp: '"What time is it?" = Jam berapa sekarang?' },
    ],
  },
  {
    topicCode: 'BIG-SD3-04', subSeq: 4,
    objectives: ['Siswa mampu menanyakan umur seseorang dengan "How old are you?" dan "How old is he/she?".'],
    materialTitle: 'Asking and Telling Age',
    blocks: [
      { type: 'story_panel', title: 'Berapa Umurmu?', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'How old are you, Bima?' },
        { speaker: 'Bima', avatar: '👦', text: 'I am nine years old. How about you?' },
        { speaker: 'Alya', avatar: '👧', text: 'I am nine years old too!' },
      ]},
    ],
    activityTitle: 'Practice: Asking Age',
    questions: [
      { text: 'Untuk menanyakan umur temanmu, kamu bertanya...', opts: ['How are you?', 'How old are you?', 'What is your name?', 'Where are you?'], ans: 1, exp: '"How old are you?" menanyakan umur.' },
      { text: 'A: "How old is your brother?" — Jawaban yang tepat adalah...', opts: ['He is twelve years old.', 'She is fine.', 'My name is Raka.', 'I am in grade 3.'], ans: 0, exp: 'Brother (laki-laki) dijawab dengan "He is ... years old."' },
      { text: 'Arti "How about you?" adalah...', opts: ['Siapa kamu?', 'Bagaimana dengan kamu?', 'Di mana rumahmu?', 'Terima kasih'], ans: 1, exp: '"How about you?" dipakai menanyakan balik hal yang sama.' },
    ],
  },

  // BAB 5: CLASSROOM EXPRESSIONS
  {
    topicCode: 'BIG-SD3-05', subSeq: 1,
    objectives: ['Siswa mampu memahami instruksi guru sehari-hari di dalam kelas dalam Bahasa Inggris.'],
    materialTitle: 'Understanding Teacher\'s Instructions',
    blocks: [
      { type: 'visual_cards', title: 'Perintah Guru di Kelas (Klik & Ikuti! 🔊)', cards: [
        { emoji: '📖', label: 'Open your book!', sub: 'Buka bukumu!', speak: 'Open your book!', lang: 'en-US' },
        { emoji: '📕', label: 'Close your book!', sub: 'Tutup bukumu!', speak: 'Close your book!', lang: 'en-US' },
        { emoji: '👂', label: 'Listen carefully!', sub: 'Dengarkan baik-baik!', speak: 'Listen carefully!', lang: 'en-US' },
        { emoji: '🙋', label: 'Raise your hand!', sub: 'Angkat tanganmu!', speak: 'Raise your hand!', lang: 'en-US' },
        { emoji: '🪑', label: 'Stand up! / Sit down!', sub: 'Berdiri! / Duduk!', speak: 'Stand up! Sit down!', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Classroom Instructions',
    questions: [
      { text: 'Saat guru berkata "Open your book, please!", kamu harus...', opts: ['Menutup buku', 'Membuka buku', 'Keluar kelas', 'Berdiri'], ans: 1, exp: '"Open" artinya buka.' },
      { text: 'Arti instruksi "Raise your hand!" adalah...', opts: ['Duduklah!', 'Angkat tanganmu!', 'Tulis di papan!', 'Diamlah!'], ans: 1, exp: '"Raise your hand" = angkat tanganmu.' },
      { text: 'Lawan dari instruksi "Stand up!" adalah...', opts: ['Listen!', 'Sit down!', 'Open the door!', 'Read aloud!'], ans: 1, exp: 'Stand up (berdiri) ↔ Sit down (duduk).' },
    ],
  },
  {
    topicCode: 'BIG-SD3-05', subSeq: 2,
    objectives: ['Siswa mampu meminta izin dengan sopan menggunakan "May I ...?" di kelas.'],
    materialTitle: 'Asking Permission (Meminta Izin)',
    blocks: [
      { type: 'flashcards', title: 'Kalimat Minta Izin Sopan (Klik 🔊)', cards: [
        { emoji: '🚻', front: 'Izin ke toilet', back: 'May I go to the toilet, please?', speak: 'May I go to the toilet, please?', lang: 'en-US' },
        { emoji: '💧', front: 'Izin minum air', back: 'May I drink water, please?', speak: 'May I drink water, please?', lang: 'en-US' },
        { emoji: '🚪', front: 'Izin masuk kelas', back: 'May I come in, please?', speak: 'May I come in, please?', lang: 'en-US' },
        { emoji: '✏️', front: 'Izin meminjam pensil', back: 'May I borrow your pencil?', speak: 'May I borrow your pencil?', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Asking Permission',
    questions: [
      { text: 'Kalimat sopan untuk meminta izin ke kamar kecil adalah...', opts: ['I go toilet!', 'May I go to the toilet, please?', 'Open the toilet!', 'Where is your book?'], ans: 1, exp: '"May I ... , please?" adalah ungkapan sopan meminta izin.' },
      { text: 'Arti "May I borrow your eraser?" adalah...', opts: ['Bolehkah aku meminjam penghapusmu?', 'Ini penghapusku.', 'Di mana bukuku?', 'Tutup pintunya!'], ans: 0, exp: '"Borrow" artinya meminjam.' },
      { text: 'Jika guru mengizinkan, guru biasanya menjawab...', opts: ['Yes, sure! / Yes, you may.', 'Goodbye!', 'My name is Ana.', 'Sit down!'], ans: 0, exp: '"Yes, sure" atau "Yes, you may" artinya ya, silakan.' },
    ],
  },
  {
    topicCode: 'BIG-SD3-05', subSeq: 3,
    objectives: ['Siswa mampu meminta bantuan dan mengucapkan terima kasih dalam Bahasa Inggris.'],
    materialTitle: 'Asking for Help (Meminta Bantuan)',
    blocks: [
      { type: 'story_panel', title: 'Saling Bantu di Kelas!', lines: [
        { speaker: 'Nadia', avatar: '👧', text: 'Can you help me, please? This box is heavy.' },
        { speaker: 'Raka', avatar: '👦', text: 'Of course! Let me help you.' },
        { speaker: 'Nadia', avatar: '👧', text: 'Thank you very much, Raka!' },
        { speaker: 'Raka', avatar: '👦', text: "You're welcome!" },
      ]},
    ],
    activityTitle: 'Practice: Asking for Help',
    questions: [
      { text: 'Ungkapan untuk meminta bantuan kepada teman adalah...', opts: ['Can you help me, please?', 'Good morning!', 'I am nine years old.', 'Close the window!'], ans: 0, exp: '"Can you help me, please?" = Bisakah kamu membantuku?' },
      { text: 'Jika teman mengucapkan "Thank you!", kita membalas dengan...', opts: ["You're welcome!", 'I am sorry!', 'Goodbye!', 'How are you?'], ans: 0, exp: '"You\'re welcome!" artinya sama-sama.' },
      { text: 'Jika kita siap membantu teman, kita bisa menjawab...', opts: ['Sure! / Of course!', 'No, goodbye!', 'What time is it?', 'My name is Bima.'], ans: 0, exp: '"Sure!" / "Of course!" berarti tentu saja!' },
    ],
  },
  {
    topicCode: 'BIG-SD3-05', subSeq: 4,
    objectives: ['Siswa mampu merespons perintah sederhana guru dengan tepat dan sopan.'],
    materialTitle: 'Responding to Simple Commands',
    blocks: [
      { type: 'visual_cards', title: 'Cara Menjawab Perintah Guru (Klik 🔊)', cards: [
        { emoji: '✅', label: 'Yes, Miss! / Yes, Sir!', sub: 'Baik Bu! / Baik Pak!', speak: 'Yes, Miss! Yes, Sir!', lang: 'en-US' },
        { emoji: '👍', label: 'Alright! / Okay!', sub: 'Baiklah! / Oke!', speak: 'Alright! Okay!', lang: 'en-US' },
        { emoji: '🙏', label: "I'm sorry, Miss.", sub: 'Maaf Bu (jika terlambat / lupa).', speak: 'I am sorry, Miss.', lang: 'en-US' },
        { emoji: '🔁', label: 'Can you repeat, please?', sub: 'Bisakah diulang Bu? (jika belum jelas)', speak: 'Can you repeat, please?', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Responding to Commands',
    questions: [
      { text: 'Teacher: "Clean the whiteboard, please!" — Jawaban sopan siswa adalah...', opts: ['Yes, Miss!', 'Good night!', 'I am ten.', 'No, you do it!'], ans: 0, exp: 'Merespons perintah guru dengan sopan: "Yes, Miss!" atau "Alright, Sir!"' },
      { text: 'Jika kamu tidak sengaja datang terlambat ke kelas, kamu mengucapkan...', opts: ['Thank you!', "I'm sorry, Miss.", "You're welcome!", 'See you!'], ans: 1, exp: '"I\'m sorry" artinya saya minta maaf.' },
      { text: 'Jika kamu belum jelas mendengar instruksi guru, kamu bertanya...', opts: ['Can you repeat, please?', 'Goodbye, Miss!', 'Open your book!', 'How old are you?'], ans: 0, exp: '"Repeat" artinya mengulang.' },
    ],
  },

  // BAB 6: SIMPLE EVERYDAY CONVERSATIONS
  {
    topicCode: 'BIG-SD3-06', subSeq: 1,
    objectives: ['Siswa mampu melakukan percakapan pendek sehari-hari tentang diri, teman, keluarga, dan lingkungan sekolah.'],
    materialTitle: 'Simple Everyday Conversations',
    blocks: [
      { type: 'story_panel', title: 'Mini Dialog di Halaman Sekolah', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Good morning, Raka! How are you?' },
        { speaker: 'Raka', avatar: '👦', text: 'Good morning, Alya! I am great, thank you. This is my cousin, Dito. He is nine years old.' },
        { speaker: 'Alya', avatar: '👧', text: 'Hi, Dito! Nice to meet you! Do you like our school?' },
        { speaker: 'Dito', avatar: '👦', text: 'Nice to meet you too, Alya! Yes, your school is big and clean!' },
      ]},
      { type: 'visual_cards', title: 'Kosakata Keluarga & Sekolah (Klik 🔊)', cards: [
        { emoji: '👨‍👩‍👧‍👦', label: 'Family', sub: 'Father, Mother, Brother, Sister', speak: 'Father, Mother, Brother, Sister', lang: 'en-US' },
        { emoji: '🏫', label: 'School', sub: 'Classroom, Library, Canteen, Schoolyard', speak: 'Classroom, Library, Canteen, Schoolyard', lang: 'en-US' },
        { emoji: '💬', label: 'Polite Words', sub: 'Please, Sorry, Thank you, Excuse me', speak: 'Please, Sorry, Thank you, Excuse me', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Everyday Conversations',
    questions: [
      { text: 'Pada dialog di atas, siapa nama sepupu (cousin) Raka?', opts: ['Alya', 'Dito', 'Bima', 'Miss Dina'], ans: 1, exp: 'Raka berkata: "This is my cousin, Dito."' },
      { text: 'Kata "Library" di lingkungan sekolah artinya...', opts: ['Kantin', 'Perpustakaan', 'Lapangan', 'Ruang kelas'], ans: 1, exp: '"Library" artinya perpustakaan.' },
      { text: 'Lengkapi dialog: A: "Excuse me, may I sit here?" — B: "..."', opts: ['Yes, please!', 'Good night!', 'My name is Salsa.', 'I am eight.'], ans: 0, exp: '"Yes, please!" berarti ya, silakan!' },
      { text: 'Kata Bahasa Inggris untuk "Ayah dan Ibu" adalah...', opts: ['Brother and Sister', 'Father and Mother', 'Uncle and Aunt', 'Teacher and Student'], ans: 1, exp: 'Father = ayah, Mother = ibu.' },
    ],
  },
];

upsertLessonsBatch('Kelas 3 SD — Bahasa Inggris CP Fase B (6 Bab, 20 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

