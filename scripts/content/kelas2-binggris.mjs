import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: MY SCHOOL (Pengayaan Kelas 2 SD)
  {
    topicCode: 'BIG-SD2-01', subSeq: 1,
    objectives: ['Students name common objects inside the classroom in English.'],
    materialTitle: 'Things in My Classroom',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap Classroom Objects to Listen!', items: [
        { visual: '🪑', label: 'Chair', caption: 'Kursi', speech: 'Chair' },
        { visual: '🪵', label: 'Table / Desk', caption: 'Meja', speech: 'Table, Desk' },
        { visual: '📋', label: 'Whiteboard', caption: 'Papan tulis putih', speech: 'Whiteboard' },
        { visual: '🚪', label: 'Door', caption: 'Pintu', speech: 'Door' },
        { visual: '🪟', label: 'Window', caption: 'Jendela', speech: 'Window' },
      ]},
    ],
    activityTitle: 'Practice: Classroom Objects',
    questions: [
      { text: 'Bahasa Inggris dari "Kursi" adalah...', opts: ['Table', 'Chair', 'Door', 'Window'], ans: 1, exp: 'Chair = kursi.' },
      { text: 'Apa arti kata "Window"?', opts: ['Pintu', 'Jendela', 'Meja', 'Papan tulis'], ans: 1, exp: 'Window = jendela.' },
      { text: 'Guru menulis pelajaran di atas...', opts: ['Whiteboard', 'Chair', 'Shoe', 'Bag'], ans: 0, exp: 'Whiteboard = papan tulis putih.' },
    ],
  },
  {
    topicCode: 'BIG-SD2-01', subSeq: 2,
    objectives: ['Students name school supplies in their bag.'],
    materialTitle: 'School Objects in My Bag',
    blocks: [
      { type: 'flashcards', lang: 'en-US', title: 'Tap to Hear & Flip!', cards: [
        { emoji: '✏️', front: 'Pencil', back: 'Pensil', frontSpeech: 'Pencil' },
        { emoji: '🧽', front: 'Eraser', back: 'Penghapus', frontSpeech: 'Eraser' },
        { emoji: '📏', front: 'Ruler', back: 'Penggaris', frontSpeech: 'Ruler' },
        { emoji: '🎒', front: 'Bag', back: 'Tas', frontSpeech: 'Bag' },
        { emoji: '📓', front: 'Notebook', back: 'Buku tulis', frontSpeech: 'Notebook' },
        { emoji: '🖍️', front: 'Crayon', back: 'Krayon', frontSpeech: 'Crayon' },
      ]},
    ],
    activityTitle: 'Practice: School Objects',
    questions: [
      { text: 'Bahasa Inggris dari "Penghapus" adalah...', opts: ['Ruler', 'Eraser', 'Crayon', 'Bag'], ans: 1, exp: 'Eraser = penghapus.' },
      { text: 'Benda untuk menggaris lurus adalah...', opts: ['Ruler', 'Eraser', 'Notebook', 'Bag'], ans: 0, exp: 'Ruler = penggaris.' },
      { text: 'Apa arti "Notebook"?', opts: ['Tas', 'Buku tulis', 'Pensil', 'Meja'], ans: 1, exp: 'Notebook = buku tulis.' },
    ],
  },
  {
    topicCode: 'BIG-SD2-01', subSeq: 3,
    objectives: ['Students recognize people and places in school.'],
    materialTitle: 'Classroom & School Vocabulary',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'People & Places at School!', items: [
        { visual: '👩‍🏫', label: 'Teacher', caption: 'Guru', speech: 'Teacher' },
        { visual: '🧒', label: 'Student', caption: 'Siswa', speech: 'Student' },
        { visual: '📚', label: 'Library', caption: 'Perpustakaan', speech: 'Library' },
        { visual: '🏫', label: 'Classroom', caption: 'Ruang kelas', speech: 'Classroom' },
      ]},
    ],
    activityTitle: 'Practice: School Vocabulary',
    questions: [
      { text: 'Bahasa Inggris dari "Perpustakaan" adalah...', opts: ['Classroom', 'Library', 'Kitchen', 'Garden'], ans: 1, exp: 'Library = perpustakaan.' },
      { text: 'Apa arti kata "Student"?', opts: ['Guru', 'Siswa / murid', 'Ayah', 'Ibu'], ans: 1, exp: 'Student = siswa.' },
      { text: 'Ruang tempat kita belajar di sekolah disebut...', opts: ['Classroom', 'Bedroom', 'Bathroom', 'Market'], ans: 0, exp: 'Classroom = ruang kelas.' },
    ],
  },
  {
    topicCode: 'BIG-SD2-01', subSeq: 4,
    objectives: ['Students understand simple classroom instructions in English.'],
    materialTitle: 'Classroom Instructions',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap & Act Out!', items: [
        { visual: '📖', label: 'Open your book!', caption: 'Buka bukumu!', speech: 'Open your book!' },
        { visual: '📕', label: 'Close your book!', caption: 'Tutup bukumu!', speech: 'Close your book!' },
        { visual: '🪑', label: 'Sit down, please!', caption: 'Silakan duduk!', speech: 'Sit down, please!' },
        { visual: '👂', label: 'Listen carefully!', caption: 'Dengarkan baik-baik!', speech: 'Listen carefully!' },
      ]},
    ],
    activityTitle: 'Practice: Classroom Instructions',
    questions: [
      { text: 'Arti perintah "Open your book!" adalah...', opts: ['Tutup bukumu!', 'Buka bukumu!', 'Berdiri!', 'Duduk!'], ans: 1, exp: 'Open = buka.' },
      { text: 'Jika guru berkata "Sit down, please!", kita harus...', opts: ['Berdiri', 'Duduk dengan rapi', 'Lari', 'Keluar kelas'], ans: 1, exp: 'Sit down = duduk.' },
      { text: 'Lawan kata dari "Open" (buka) adalah...', opts: ['Close', 'Listen', 'Stand', 'Read'], ans: 0, exp: 'Close = tutup.' },
    ],
  },

  // BAB 2: MY DAILY ACTIVITIES
  {
    topicCode: 'BIG-SD2-02', subSeq: 1,
    objectives: ['Students name daily activities: wake up, take a bath, eat, study, play, sleep.'],
    materialTitle: 'My Daily Activities',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap Each Activity!', items: [
        { visual: '⏰', label: 'Wake up', caption: 'Bangun tidur', speech: 'Wake up' },
        { visual: '🚿', label: 'Take a bath', caption: 'Mandi', speech: 'Take a bath' },
        { visual: '🍽️', label: 'Eat', caption: 'Makan', speech: 'Eat' },
        { visual: '📚', label: 'Study', caption: 'Belajar', speech: 'Study' },
        { visual: '⚽', label: 'Play', caption: 'Bermain', speech: 'Play' },
        { visual: '😴', label: 'Sleep', caption: 'Tidur', speech: 'Sleep' },
      ]},
    ],
    activityTitle: 'Practice: Daily Activities',
    questions: [
      { text: 'Bahasa Inggris dari "Belajar" adalah...', opts: ['Play', 'Study', 'Sleep', 'Eat'], ans: 1, exp: 'Study = belajar.' },
      { text: 'Apa arti "Take a bath"?', opts: ['Bangun tidur', 'Mandi', 'Makan', 'Tidur'], ans: 1, exp: 'Take a bath = mandi.' },
      { text: 'Kegiatan di malam hari ("Sleep") artinya...', opts: ['Bermain', 'Tidur', 'Mandi', 'Belajar'], ans: 1, exp: 'Sleep = tidur.' },
    ],
  },
  {
    topicCode: 'BIG-SD2-02', subSeq: 2,
    objectives: ['Students order daily routines from morning to night in simple English.'],
    materialTitle: 'Order of My Daily Activities',
    blocks: [
      { type: 'story_panel', lang: 'en-US', title: 'Bima’s Day', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'In the morning, I wake up and take a bath. Then I eat breakfast and go to school!' },
        { speaker: 'Alya', avatar: '👧', text: 'In the afternoon I play and study. At night I sleep!' },
      ]},
    ],
    activityTitle: 'Practice: Order of Activities',
    questions: [
      { text: 'Urutan kegiatan pagi hari yang benar adalah...', opts: ['Sleep → Wake up', 'Wake up → Take a bath → Eat', 'Eat → Sleep → Wake up', 'Play → Sleep → Wake up'], ans: 1, exp: 'Bangun tidur (wake up), mandi (take a bath), lalu makan (eat).' },
      { text: 'We sleep at ... (Kita tidur pada ...).', opts: ['morning', 'afternoon', 'night', 'breakfast'], ans: 2, exp: 'Night = malam.' },
      { text: '"I eat breakfast in the morning." Breakfast artinya...', opts: ['Sarapan pagi', 'Makan malam', 'Tidur siang', 'Bermain'], ans: 0, exp: 'Breakfast = sarapan.' },
    ],
  },

  // BAB 3: FOOD AND DRINKS
  {
    topicCode: 'BIG-SD2-03', subSeq: 1,
    objectives: ['Students name common foods and drinks in English.'],
    materialTitle: 'Food and Drinks (Makanan & Minuman)',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap Food & Drinks!', items: [
        { visual: '🍚', label: 'Rice', caption: 'Nasi', speech: 'Rice' },
        { visual: '🍞', label: 'Bread', caption: 'Roti', speech: 'Bread' },
        { visual: '🍳', label: 'Egg', caption: 'Telur', speech: 'Egg' },
        { visual: '🍗', label: 'Chicken', caption: 'Ayam', speech: 'Chicken' },
        { visual: '💧', label: 'Water', caption: 'Air putih', speech: 'Water' },
        { visual: '🥛', label: 'Milk', caption: 'Susu', speech: 'Milk' },
      ]},
    ],
    activityTitle: 'Practice: Food and Drinks',
    questions: [
      { text: 'Bahasa Inggris dari "Nasi" adalah...', opts: ['Bread', 'Rice', 'Milk', 'Egg'], ans: 1, exp: 'Rice = nasi.' },
      { text: 'Apa arti kata "Bread"?', opts: ['Telur', 'Roti', 'Ayam', 'Susu'], ans: 1, exp: 'Bread = roti.' },
      { text: 'Manakah yang termasuk minuman (Drink)?', opts: ['Milk', 'Rice', 'Bread', 'Chicken'], ans: 0, exp: 'Milk (susu) adalah minuman.' },
    ],
  },
  {
    topicCode: 'BIG-SD2-03', subSeq: 2,
    objectives: ['Students express likes and dislikes ("I like...", "I do not like...").'],
    materialTitle: 'Likes and Dislikes',
    blocks: [
      { type: 'flashcards', lang: 'en-US', title: 'Tap to Hear Likes & Dislikes!', cards: [
        { emoji: '😋', front: 'I like milk.', back: 'Aku suka susu.', frontSpeech: 'I like milk.' },
        { emoji: '😋', front: 'I like fried rice.', back: 'Aku suka nasi goreng.', frontSpeech: 'I like fried rice.' },
        { emoji: '🙅', front: 'I do not like coffee.', back: 'Aku tidak suka kopi.', frontSpeech: 'I do not like coffee.' },
      ]},
    ],
    activityTitle: 'Practice: Likes & Dislikes',
    questions: [
      { text: 'Bahasa Inggris dari "Aku suka apel" adalah...', opts: ['I like apple.', 'I do not like apple.', 'This is apple.', 'Good morning apple.'], ans: 0, exp: '"I like..." artinya aku suka.' },
      { text: '"I do not like spicy food." Artinya...', opts: ['Aku suka makanan pedas', 'Aku tidak suka makanan pedas', 'Aku makan nasi', 'Aku minum susu'], ans: 1, exp: '"Do not like" berarti tidak suka.' },
      { text: 'Untuk menjawab "Do you like milk?" jika kamu suka, jawablah...', opts: ['Yes, I do!', 'No, it is red.', 'Goodbye!', 'Thank you!'], ans: 0, exp: 'Jawaban setuju adalah "Yes, I do!".' },
    ],
  },
  {
    topicCode: 'BIG-SD2-03', subSeq: 3,
    objectives: ['Students ask and answer about favorite food politely.'],
    materialTitle: 'Talking About Favorite Food',
    blocks: [
      { type: 'story_panel', lang: 'en-US', title: 'What Food Do You Like?', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'What food do you like, Bima?' },
        { speaker: 'Bima', avatar: '👦', text: 'I like fried chicken and orange juice!' },
      ]},
    ],
    activityTitle: 'Practice: Favorite Food',
    questions: [
      { text: 'Pertanyaan "What food do you like?" artinya...', opts: ['Apa makanan yang kamu suka?', 'Di mana rumahmu?', 'Siapa namamu?', 'Apa warnanya?'], ans: 0, exp: 'What food do you like = makanan apa yang kamu suka.' },
      { text: 'Arti "Orange juice" adalah...', opts: ['Jus apel', 'Jus jeruk', 'Susu cokelat', 'Air putih'], ans: 1, exp: 'Orange = jeruk, juice = jus.' },
      { text: '"Fried chicken" artinya...', opts: ['Ayam goreng', 'Nasi goreng', 'Telur rebus', 'Roti bakar'], ans: 0, exp: 'Fried chicken = ayam goreng.' },
    ],
  },

  // BAB 4: MY CLOTHES
  {
    topicCode: 'BIG-SD2-04', subSeq: 1,
    objectives: ['Students name common clothes in English.'],
    materialTitle: 'My Clothes (Pakaianku)',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap Clothes Vocabulary!', items: [
        { visual: '👕', label: 'T-shirt', caption: 'Kaos', speech: 'T-shirt' },
        { visual: '👔', label: 'Shirt', caption: 'Kemeja', speech: 'Shirt' },
        { visual: '👖', label: 'Pants / Trousers', caption: 'Celana panjang', speech: 'Pants' },
        { visual: '👗', label: 'Dress', caption: 'Gaun', speech: 'Dress' },
        { visual: '👒', label: 'Hat', caption: 'Topi', speech: 'Hat' },
        { visual: '👟', label: 'Shoes', caption: 'Sepatu', speech: 'Shoes' },
      ]},
    ],
    activityTitle: 'Practice: Clothes Names',
    questions: [
      { text: 'Bahasa Inggris dari "Sepatu" adalah...', opts: ['Hat', 'Shoes', 'Shirt', 'Dress'], ans: 1, exp: 'Shoes = sepatu.' },
      { text: 'Apa arti kata "Hat"?', opts: ['Celana', 'Topi', 'Kaos', 'Sepatu'], ans: 1, exp: 'Hat = topi.' },
      { text: 'Pakaian seragam kemeja disebut...', opts: ['Shirt', 'Shoes', 'Socks', 'Cap'], ans: 0, exp: 'Shirt = kemeja.' },
    ],
  },
  {
    topicCode: 'BIG-SD2-04', subSeq: 2,
    objectives: ['Students combine colors with clothes (e.g., white shirt, red skirt).'],
    materialTitle: 'Colors of My Clothes',
    blocks: [
      { type: 'flashcards', lang: 'en-US', title: 'Tap to Hear Color + Clothes!', cards: [
        { emoji: '⬜👔', front: 'White shirt', back: 'Kemeja putih', frontSpeech: 'White shirt' },
        { emoji: '🔴🩳', front: 'Red shorts', back: 'Celana pendek merah', frontSpeech: 'Red shorts' },
        { emoji: '⚫👟', front: 'Black shoes', back: 'Sepatu hitam', frontSpeech: 'Black shoes' },
      ]},
    ],
    activityTitle: 'Practice: Clothes Colors',
    questions: [
      { text: 'Seragam SD di Indonesia terdiri dari "White shirt" dan "Red skirt/shorts". "White shirt" artinya...', opts: ['Kemeja merah', 'Kemeja putih', 'Sepatu putih', 'Topi merah'], ans: 1, exp: 'White = putih, shirt = kemeja.' },
      { text: 'Bahasa Inggris dari "Sepatu hitam" adalah...', opts: ['Black shoes', 'White shoes', 'Blue hat', 'Red shirt'], ans: 0, exp: 'Black = hitam, shoes = sepatu.' },
      { text: '"Blue pants" artinya...', opts: ['Celana biru', 'Baju biru', 'Topi biru', 'Sepatu biru'], ans: 0, exp: 'Blue = biru, pants = celana.' },
    ],
  },
  {
    topicCode: 'BIG-SD2-04', subSeq: 3,
    objectives: ['Students say what they are wearing using "I am wearing...".'],
    materialTitle: 'What Are You Wearing?',
    blocks: [
      { type: 'story_panel', lang: 'en-US', title: 'Ready for School!', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'I am wearing a white shirt and black shoes!' },
        { speaker: 'Bima', avatar: '👦', text: 'I am wearing a red hat!' },
      ]},
    ],
    activityTitle: 'Practice: Wearing Clothes',
    questions: [
      { text: '"I am wearing a blue t-shirt." Artinya...', opts: ['Saya sedang memakai kaos biru.', 'Saya membeli buku biru.', 'Ini bola biru.', 'Saya suka biru.'], ans: 0, exp: '"I am wearing..." artinya saya sedang memakai.' },
      { text: 'Saat cuaca dingin atau hujan, kita memakai...', opts: ['Jacket', 'Ice cream', 'Pencil', 'Ball'], ans: 0, exp: 'Jacket = jaket.' },
      { text: 'Kita memakai sepatu (shoes) di bagian tubuh...', opts: ['Head', 'Hands', 'Feet', 'Ears'], ans: 2, exp: 'Shoes dipakai di feet (kaki).' },
    ],
  },

  // BAB 5: DAYS AND WEATHER
  {
    topicCode: 'BIG-SD2-05', subSeq: 1,
    objectives: ['Students name the 7 days of the week in English.'],
    materialTitle: 'Days of the Week (Nama-Nama Hari)',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap 7 Days of the Week!', items: [
        { visual: '1️⃣', label: 'Monday', caption: 'Senin', speech: 'Monday' },
        { visual: '2️⃣', label: 'Tuesday', caption: 'Selasa', speech: 'Tuesday' },
        { visual: '3️⃣', label: 'Wednesday', caption: 'Rabu', speech: 'Wednesday' },
        { visual: '4️⃣', label: 'Thursday', caption: 'Kamis', speech: 'Thursday' },
        { visual: '5️⃣', label: 'Friday', caption: 'Jumat', speech: 'Friday' },
        { visual: '6️⃣', label: 'Saturday', caption: 'Sabtu', speech: 'Saturday' },
        { visual: '7️⃣', label: 'Sunday', caption: 'Minggu', speech: 'Sunday' },
      ]},
    ],
    activityTitle: 'Practice: Days of the Week',
    questions: [
      { text: 'Bahasa Inggris dari hari "Minggu" adalah...', opts: ['Monday', 'Friday', 'Sunday', 'Saturday'], ans: 2, exp: 'Sunday = Minggu.' },
      { text: 'Hari setelah Monday (Senin) adalah...', opts: ['Tuesday', 'Friday', 'Sunday', 'Wednesday'], ans: 0, exp: 'Tuesday = Selasa.' },
      { text: 'Apa arti "Friday"?', opts: ['Kamis', 'Jumat', 'Sabtu', 'Rabu'], ans: 1, exp: 'Friday = Jumat.' },
    ],
  },
  {
    topicCode: 'BIG-SD2-05', subSeq: 2,
    objectives: ['Students recognize weather words: sunny, rainy, cloudy, windy.'],
    materialTitle: 'Weather: Sunny, Rainy, Cloudy, Windy',
    blocks: [
      { type: 'visual_cards', lang: 'en-US', title: 'Tap to Hear the Weather!', items: [
        { visual: '☀️', label: 'Sunny', caption: 'Cerah / panas', speech: 'Sunny' },
        { visual: '🌧️', label: 'Rainy', caption: 'Hujan', speech: 'Rainy' },
        { visual: '☁️', label: 'Cloudy', caption: 'Berawan / mendung', speech: 'Cloudy' },
        { visual: '💨', label: 'Windy', caption: 'Berangin', speech: 'Windy' },
      ]},
    ],
    activityTitle: 'Practice: Weather Words',
    questions: [
      { text: 'Cuaca hujan (🌧️) dalam bahasa Inggris disebut...', opts: ['Sunny', 'Rainy', 'Cloudy', 'Windy'], ans: 1, exp: 'Rainy = hujan.' },
      { text: 'Apa arti "Sunny"?', opts: ['Cerah / terik matahari', 'Hujan', 'Mendung', 'Berangin'], ans: 0, exp: 'Sunny berasal dari Sun (matahari), artinya cerah.' },
      { text: 'Cuaca yang cocok untuk bermain layang-layang adalah...', opts: ['Windy', 'Rainy', 'Dark', 'Sleepy'], ans: 0, exp: 'Windy (berangin) cocok untuk menerbangkan layangan.' },
    ],
  },
  {
    topicCode: 'BIG-SD2-05', subSeq: 3,
    objectives: ['Students use simple weather expressions ("It is sunny today").'],
    materialTitle: 'Talking About Today’s Weather',
    blocks: [
      { type: 'story_panel', lang: 'en-US', title: 'How Is the Weather?', lines: [
        { speaker: 'Teacher', avatar: '👩‍🏫', text: 'How is the weather today?' },
        { speaker: 'Alya', avatar: '👧', text: 'It is sunny today! Let us play outside!' },
      ]},
    ],
    activityTitle: 'Practice: Weather Expressions',
    questions: [
      { text: '"It is rainy today." Artinya...', opts: ['Hari ini cerah.', 'Hari ini hujan.', 'Hari ini berangin.', 'Hari ini Senin.'], ans: 1, exp: 'Rainy = hujan, today = hari ini.' },
      { text: 'Saat "It is rainy", kita membawa...', opts: ['Umbrella (payung)', 'Ball', 'Kite', 'Ruler'], ans: 0, exp: 'Umbrella = payung.' },
      { text: 'Pertanyaan "How is the weather today?" menanyakan tentang...', opts: ['Cuaca hari ini', 'Nama teman', 'Makanan favorit', 'Warna tas'], ans: 0, exp: 'Weather = cuaca.' },
    ],
  },

  // BAB 6: SIMPLE QUESTIONS AND RESPONSES
  {
    topicCode: 'BIG-SD2-06', subSeq: 1,
    objectives: ['Students ask and answer "What is this?" with "It is a...".'],
    materialTitle: 'Asking "What Is This?"',
    blocks: [
      { type: 'story_panel', lang: 'en-US', title: 'Point & Ask!', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'What is this?' },
        { speaker: 'Alya', avatar: '👧', text: 'It is a pencil!' },
      ]},
    ],
    activityTitle: 'Practice: What Is This?',
    questions: [
      { text: 'Arti pertanyaan "What is this?" adalah...', opts: ['Siapa ini?', 'Apa ini?', 'Di mana ini?', 'Berapa ini?'], ans: 1, exp: 'What is this = apa ini.' },
      { text: 'Jawaban yang benar untuk "What is this?" (📘) adalah...', opts: ['It is a book.', 'I am fine.', 'Good morning.', 'Yes, it is red.'], ans: 0, exp: 'Dijawab dengan "It is a book.".' },
      { text: '"It is an apple." Artinya...', opts: ['Ini sebuah apel.', 'Ini sebuah bola.', 'Ini sebuah kursi.', 'Ini sebuah buku.'], ans: 0, exp: 'Apple = apel.' },
    ],
  },
  {
    topicCode: 'BIG-SD2-06', subSeq: 2,
    objectives: ['Students ask and answer "What color is it?" correctly.'],
    materialTitle: 'Asking "What Color Is It?"',
    blocks: [
      { type: 'flashcards', lang: 'en-US', title: 'Practice Asking Color!', cards: [
        { emoji: '🍎', front: 'What color is the apple?', back: 'It is red.', frontSpeech: 'What color is the apple? It is red.' },
        { emoji: '🍌', front: 'What color is the banana?', back: 'It is yellow.', frontSpeech: 'What color is the banana? It is yellow.' },
        { emoji: '🌿', front: 'What color is the leaf?', back: 'It is green.', frontSpeech: 'What color is the leaf? It is green.' },
      ]},
    ],
    activityTitle: 'Practice: What Color Is It?',
    questions: [
      { text: '"What color is it?" menanyakan tentang...', opts: ['Jumlah', 'Warna', 'Nama', 'Hari'], ans: 1, exp: 'Color = warna.' },
      { text: 'What color is the sky (langit cerah)?', opts: ['It is blue.', 'It is black.', 'It is purple.', 'It is brown.'], ans: 0, exp: 'Langit cerah berwarna biru (blue).' },
      { text: 'What color is milk (susu)?', opts: ['It is green.', 'It is white.', 'It is red.', 'It is orange.'], ans: 1, exp: 'Susu berwarna putih (white).' },
    ],
  },
  {
    topicCode: 'BIG-SD2-06', subSeq: 3,
    objectives: ['Students ask "How are you?" and respond politely ("I am fine, thank you").'],
    materialTitle: 'Asking "How Are You?"',
    blocks: [
      { type: 'story_panel', lang: 'en-US', title: 'Greeting Politely', lines: [
        { speaker: 'Teacher', avatar: '👩‍🏫', text: 'Good morning, Alya! How are you?' },
        { speaker: 'Alya', avatar: '👧', text: 'I am fine, thank you! And you?' },
      ]},
    ],
    activityTitle: 'Practice: How Are You?',
    questions: [
      { text: 'Pertanyaan "How are you?" artinya...', opts: ['Siapa namamu?', 'Apa kabarmu?', 'Di mana rumahmu?', 'Apa hobimu?'], ans: 1, exp: 'How are you = apa kabarmu.' },
      { text: 'Jawaban yang sopan untuk "How are you?" adalah...', opts: ['I am fine, thank you.', 'It is a cat.', 'Good night.', 'It is blue.'], ans: 0, exp: 'I am fine, thank you = saya baik, terima kasih.' },
      { text: 'Arti "Thank you" adalah...', opts: ['Maaf', 'Terima kasih', 'Permisi', 'Halo'], ans: 1, exp: 'Thank you = terima kasih.' },
    ],
  },
  {
    topicCode: 'BIG-SD2-06', subSeq: 4,
    objectives: ['Students give short Yes/No responses ("Yes, it is" / "No, it is not").'],
    materialTitle: 'Yes / No Responses',
    blocks: [
      { type: 'flashcards', lang: 'en-US', title: 'Tap to See Yes/No Answers!', cards: [
        { emoji: '🍎', front: 'Is this an apple? (🍎)', back: 'Yes, it is!', frontSpeech: 'Is this an apple? Yes, it is!' },
        { emoji: '⚽', front: 'Is this a book? (⚽)', back: 'No, it is not. It is a ball.', frontSpeech: 'Is this a book? No, it is not.' },
      ]},
    ],
    activityTitle: 'Practice: Yes / No Responses',
    questions: [
      { text: 'Is this a cat? (🐱)', opts: ['Yes, it is.', 'No, it is not.', 'It is blue.', 'Goodbye.'], ans: 0, exp: 'Gambar adalah kucing, jadi jawab "Yes, it is.".' },
      { text: 'Is this a banana? (🍎)', opts: ['Yes, it is.', 'No, it is not.', 'Good morning.', 'I am fine.'], ans: 1, exp: 'Gambar adalah apel bukan pisang, jadi jawab "No, it is not.".' },
      { text: 'Arti kata "Yes" dan "No" adalah...', opts: ['Ya dan Tidak', 'Besar dan Kecil', 'Pagi dan Malam', 'Satu dan Dua'], ans: 0, exp: 'Yes = ya, No = tidak.' },
    ],
  },
];

upsertLessonsBatch('Kelas 2 SD — Bahasa Inggris (6 Bab, 19 Submateri)', LESSONS).catch((err) => {
  console.error(err);
  process.exit(1);
});

