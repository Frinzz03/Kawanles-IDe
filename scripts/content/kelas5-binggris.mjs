import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: DESCRIBING THINGS
  {
    topicCode: 'BIG-SD5-01', subSeq: 1,
    objectives: ['Siswa mampu mendeskripsikan benda di sekitar secara umum menggunakan "It is a ..." dan "It has ...".'],
    materialTitle: 'Describing Everyday Things',
    blocks: [
      { type: 'story_panel', title: 'Guess What Object This Is!', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'It is a small rectangle. It is made of rubber. We use it to erase pencil marks. What is it?' },
        { speaker: 'Bima', avatar: '👦', text: 'Easy! It is an eraser!' },
      ]},
      { type: 'tip', text: 'Pola mudah mendeskripsikan benda: It is a [benda]. It is [warna/ukuran/bentuk]. It is made of [bahan]. We use it to [fungsi].' },
    ],
    activityTitle: 'Practice: Describing Things',
    questions: [
      { text: '"It is long and thin. We use it to write on paper." Benda yang dideskripsikan adalah...', opts: ['A pillow', 'A pencil', 'A shoe', 'A plate'], ans: 1, exp: 'Alat panjang tipis untuk menulis di kertas adalah pencil.' },
      { text: 'Lengkapi: "This is my water bottle. ... is blue and clean."', opts: ['He', 'She', 'It', 'They'], ans: 2, exp: 'Kata ganti 1 benda mati adalah "It".' },
      { text: 'Lengkapi untuk benda jamak: "These are my shoes. ... are black."', opts: ['It', 'They', 'He', 'She'], ans: 1, exp: 'Kata ganti benda jamak (>1) adalah "They".' },
    ],
  },
  {
    topicCode: 'BIG-SD5-01', subSeq: 2,
    objectives: ['Siswa mampu menggunakan kosakata warna dasar dan kombinasi (light/dark) untuk mendeskripsikan benda.'],
    materialTitle: 'Colors (Warna Benda)',
    blocks: [
      { type: 'visual_cards', title: 'Colors Vocabulary (Klik 🔊)', cards: [
        { emoji: '🟦', label: 'Light blue / Dark blue', sub: 'Biru muda / Biru tua', speak: 'light blue, dark blue', lang: 'en-US' },
        { emoji: '🟩', label: 'Green / Yellow / Orange', sub: 'Hijau / Kuning / Oranye', speak: 'green, yellow, orange', lang: 'en-US' },
        { emoji: '🟪', label: 'Purple / Pink / Brown', sub: 'Ungu / Merah muda / Cokelat', speak: 'purple, pink, brown', lang: 'en-US' },
        { emoji: '⬜', label: 'White / Black / Grey', sub: 'Putih / Hitam / Abu-abu', speak: 'white, black, grey', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Colors',
    questions: [
      { text: 'Bahasa Inggris dari "hijau tua" adalah...', opts: ['Light green', 'Dark green', 'Green light', 'Small green'], ans: 1, exp: '"Dark" = tua/gelap; "Light" = muda/terang.' },
      { text: '"What color is your school uniform shirt?" — "It is ... (putih)."', opts: ['black', 'white', 'grey', 'brown'], ans: 1, exp: 'White = putih.' },
      { text: 'Terjemahan "sebuah tas merah muda" adalah...', opts: ['a bag pink', 'a pink bag', 'pink a bag', 'bags pink'], ans: 1, exp: 'Kata sifat warna diletakkan sebelum kata benda.' },
    ],
  },
  {
    topicCode: 'BIG-SD5-01', subSeq: 3,
    objectives: ['Siswa mampu menggunakan kata sifat ukuran (big, small, long, short, tall, wide, heavy, light).'],
    materialTitle: 'Size and Weight (Ukuran Benda)',
    blocks: [
      { type: 'flashcards', title: 'Pasangan Ukuran Berlawanan (Klik 🔊)', cards: [
        { emoji: '🐘', front: 'Big ↔ ...', back: 'Small (besar ↔ kecil)', speak: 'big and small', lang: 'en-US' },
        { emoji: '📏', front: 'Long ↔ ...', back: 'Short (panjang ↔ pendek)', speak: 'long and short', lang: 'en-US' },
        { emoji: '🏋️', front: 'Heavy ↔ ...', back: 'Light (berat ↔ ringan)', speak: 'heavy and light', lang: 'en-US' },
        { emoji: '🛣️', front: 'Wide ↔ ...', back: 'Narrow (lebar ↔ sempit)', speak: 'wide and narrow', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Size of Things',
    questions: [
      { text: 'A feather (bulu) is light, but a big stone is...', opts: ['short', 'heavy', 'narrow', 'thin'], ans: 1, exp: 'Lawan "light" (ringan) adalah "heavy" (berat).' },
      { text: 'My ruler is 30 cm. It is ... (panjang).', opts: ['long', 'short', 'wide', 'small'], ans: 0, exp: 'Long = panjang.' },
      { text: 'Lawan kata sifat "wide" (lebar) adalah...', opts: ['big', 'tall', 'narrow', 'heavy'], ans: 2, exp: 'Wide ↔ narrow (sempit).' },
    ],
  },
  {
    topicCode: 'BIG-SD5-01', subSeq: 4,
    objectives: ['Siswa mampu menyebutkan bentuk benda (round/circle, square, rectangle, triangle, oval, cube) dalam Bahasa Inggris.'],
    materialTitle: 'Shapes (Bentuk Benda)',
    blocks: [
      { type: 'visual_cards', title: 'Shapes Around Us (Klik 🔊)', cards: [
        { emoji: '⭕', label: 'Round / Circle', sub: 'Bulat / Lingkaran (a round clock)', speak: 'round, circle', lang: 'en-US' },
        { emoji: '⬜', label: 'Square', sub: 'Persegi (a square tile)', speak: 'square', lang: 'en-US' },
        { emoji: '▬', label: 'Rectangle / Rectangular', sub: 'Persegi panjang (a rectangular door)', speak: 'rectangle, rectangular', lang: 'en-US' },
        { emoji: '🔺', label: 'Triangle / Triangular', sub: 'Segitiga (a triangular roof)', speak: 'triangle, triangular', lang: 'en-US' },
        { emoji: '🥚', label: 'Oval', sub: 'Lonjong (an oval egg)', speak: 'oval', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Shapes',
    questions: [
      { text: 'A coin and a bicycle wheel have a ... shape.', opts: ['square', 'triangle', 'round', 'rectangle'], ans: 2, exp: 'Koin dan roda berbentuk bulat (round/circle).' },
      { text: 'A whiteboard and a door usually have a ... shape.', opts: ['rectangular', 'oval', 'round', 'triangular'], ans: 0, exp: 'Papan tulis dan pintu berbentuk persegi panjang (rectangular).' },
      { text: 'Bahasa Inggris dari "segitiga" adalah...', opts: ['Square', 'Triangle', 'Circle', 'Oval'], ans: 1, exp: 'Triangle = segitiga.' },
    ],
  },
  {
    topicCode: 'BIG-SD5-01', subSeq: 5,
    objectives: ['Siswa mampu menyebutkan bahan pembuat benda menggunakan "It is made of ..." (wood, plastic, metal, glass, paper, cloth).'],
    materialTitle: 'Materials (Bahan Pembuat Benda)',
    blocks: [
      { type: 'visual_cards', title: 'It is made of ... (Klik 🔊)', cards: [
        { emoji: '🪵', label: 'Wood (Kayu)', sub: 'The desk is made of wood.', speak: 'The desk is made of wood.', lang: 'en-US' },
        { emoji: '🥤', label: 'Plastic & Glass', sub: 'Bottle (plastic), window (glass)', speak: 'plastic and glass', lang: 'en-US' },
        { emoji: '🔩', label: 'Metal / Iron (Logam)', sub: 'The spoon is made of metal.', speak: 'The spoon is made of metal.', lang: 'en-US' },
        { emoji: '📄', label: 'Paper & Cloth (Kertas & Kain)', sub: 'Book (paper), uniform (cloth)', speak: 'paper and cloth', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Materials',
    questions: [
      { text: 'Our notebook is made of...', opts: ['glass', 'paper', 'metal', 'rubber'], ans: 1, exp: 'Buku tulis terbuat dari kertas (paper).' },
      { text: 'A window pane (kaca jendela) is made of...', opts: ['wood', 'cloth', 'glass', 'paper'], ans: 2, exp: 'Glass = kaca.' },
      { text: 'Lengkapi: "This chair is ... of wood."', opts: ['make', 'made', 'making', 'makes'], ans: 1, exp: 'Pola baku: "is made of..." (terbuat dari...).' },
    ],
  },
  {
    topicCode: 'BIG-SD5-01', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan kegunaan/fungsi benda dengan pola "We use it to ..." atau "It is used for ...".'],
    materialTitle: 'Functions of Things (Fungsi Benda)',
    blocks: [
      { type: 'flashcards', title: 'What Do We Use It For? (Klik 🔊)', cards: [
        { emoji: '✂️', front: 'Scissors (gunting)', back: 'We use scissors to cut paper.', speak: 'We use scissors to cut paper.', lang: 'en-US' },
        { emoji: '📏', front: 'Ruler (penggaris)', back: 'We use a ruler to measure length and draw straight lines.', speak: 'We use a ruler to measure length.', lang: 'en-US' },
        { emoji: '☂️', front: 'Umbrella (payung)', back: 'We use an umbrella to protect ourselves from rain or sun.', speak: 'We use an umbrella for rain.', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Functions of Things',
    questions: [
      { text: 'We use a broom (sapu) to...', opts: ['cut paper', 'sweep the floor', 'drink water', 'tell time'], ans: 1, exp: '"Sweep the floor" = menyapu lantai.' },
      { text: 'We use a thermometer to...', opts: ['measure temperature', 'write a story', 'open the door', 'boil rice'], ans: 0, exp: '"Measure temperature" = mengukur suhu.' },
      { text: 'Arti kalimat "We use a knife to cut vegetables" adalah...', opts: ['Kita memakai pisau untuk memotong sayuran', 'Kita mencuci pisau', 'Sayuran ada di meja', 'Pisau itu terbuat dari kertas'], ans: 0, exp: '"Use ... to ..." = menggunakan ... untuk ...' },
    ],
  },
  {
    topicCode: 'BIG-SD5-01', subSeq: 7,
    objectives: ['Siswa mampu menyusun urutan kata sifat (ukuran → bentuk → warna → benda) dengan benar dalam Bahasa Inggris.'],
    materialTitle: 'Using Adjectives in Order',
    blocks: [
      { type: 'formula', name: 'Urutan Kata Sifat Sederhana', expression: 'a/an  +  Ukuran (Size)  +  Warna (Color)  +  Benda (Noun)', note: 'Contoh: "a big red ball" (bukan "a red big ball"), "a small blue bag"!' },
    ],
    activityTitle: 'Practice: Adjectives Order',
    questions: [
      { text: 'Susunan frasa yang BENAR untuk "sebuah kotak hitam kecil" adalah...', opts: ['a box black small', 'a small black box', 'a black small box', 'small black a box'], ans: 1, exp: 'Urutan: a + ukuran (small) + warna (black) + benda (box).' },
      { text: 'Susunan frasa yang BENAR untuk "sebuah papan tulis putih besar" adalah...', opts: ['a big white board', 'a white big board', 'a board white big', 'big a white board'], ans: 0, exp: 'Size (big) mendahului color (white).' },
      { text: 'Manakah yang merupakan KATA SIFAT (adjective)?', opts: ['Soft, shiny, sharp', 'Table, chair, lamp', 'Eat, run, sleep', 'In, on, under'], ans: 0, exp: 'Soft (lembut), shiny (mengilap), sharp (tajam) adalah kata sifat.' },
    ],
  },

  // BAB 2: DESCRIBING PEOPLE AND ANIMALS
  {
    topicCode: 'BIG-SD5-02', subSeq: 1,
    objectives: ['Siswa mampu mendeskripsikan ciri fisik seseorang (tinggi, rambut, mata, kacamata) menggunakan "is" dan "has".'],
    materialTitle: 'Describing People\'s Appearance',
    blocks: [
      { type: 'formula', name: 'Beda "is" vs "has" Saat Mendeskripsikan Orang', expression: 'He/She IS + sifat (tall, short, young)  |  He/She HAS + bagian tubuh (long hair, round eyes, glasses)', note: 'Ingat! "She has long black hair", BUKAN "She is long hair"!' },
      { type: 'visual_cards', title: 'Physical Appearance (Klik 🔊)', cards: [
        { emoji: '📏', label: 'Tall / Short / Slim', sub: 'Tinggi / Pendek / Langsing', speak: 'tall, short, slim', lang: 'en-US' },
        { emoji: '💇', label: 'Straight / Curly hair', sub: 'Rambut lurus / Rambut keriting', speak: 'straight hair, curly hair', lang: 'en-US' },
        { emoji: '👓', label: 'Wears glasses', sub: 'Memakai kacamata', speak: 'wears glasses', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Describing People',
    questions: [
      { text: 'Lengkapi: "My sister ... curly black hair."', opts: ['is', 'are', 'has', 'am'], ans: 2, exp: 'Menyatakan kepemilikan ciri bagian tubuh pakai "has" (untuk he/she).' },
      { text: 'Lengkapi: "Raka ... tall and strong."', opts: ['has', 'is', 'have', 'are'], ans: 1, exp: 'Menyatakan kata sifat langsung pakai "is" (he is tall).' },
      { text: 'Arti kalimat "My grandfather wears glasses" adalah...', opts: ['Kakek saya memakai kacamata', 'Kakek saya mencuci gelas', 'Kakek saya tinggi', 'Kakek saya punya kucing'], ans: 0, exp: '"Glasses" = kacamata.' },
    ],
  },
  {
    topicCode: 'BIG-SD5-02', subSeq: 2,
    objectives: ['Siswa mampu menyebutkan sifat/kepribadian seseorang (kind, friendly, smart, diligent, funny, polite).'],
    materialTitle: 'Describing Personality (Sifat Seseorang)',
    blocks: [
      { type: 'visual_cards', title: 'Good Personalities (Klik 🔊)', cards: [
        { emoji: '😇', label: 'Kind & Helpful', sub: 'Baik hati & suka menolong', speak: 'kind and helpful', lang: 'en-US' },
        { emoji: '📚', label: 'Diligent & Smart', sub: 'Rajin & pintar', speak: 'diligent and smart', lang: 'en-US' },
        { emoji: '😊', label: 'Friendly & Polite', sub: 'Ramah & sopan', speak: 'friendly and polite', lang: 'en-US' },
        { emoji: '😄', label: 'Funny & Cheerful', sub: 'Lucu & ceria', speak: 'funny and cheerful', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Personality',
    questions: [
      { text: 'Alya always studies hard and finishes her homework on time. She is very...', opts: ['lazy', 'diligent', 'angry', 'rude'], ans: 1, exp: '"Diligent" = rajin/tekun.' },
      { text: 'Bima always says "please", "thank you", and "excuse me". He is a ... boy.', opts: ['polite', 'noisy', 'selfish', 'lazy'], ans: 0, exp: '"Polite" = sopan.' },
      { text: 'Arti kata sifat "friendly" dan "helpful" adalah...', opts: ['Galak dan malas', 'Ramah dan suka menolong', 'Tinggi dan besar', 'Sedih dan marah'], ans: 1, exp: 'Friendly = ramah, helpful = suka menolong.' },
    ],
  },
  {
    topicCode: 'BIG-SD5-02', subSeq: 3,
    objectives: ['Siswa mampu menyebutkan bagian tubuh hewan (wings, beak, tail, fur, scales, fins, trunk, claws).'],
    materialTitle: 'Animal Body Parts',
    blocks: [
      { type: 'visual_cards', title: 'Bagian Tubuh Hewan (Klik 🔊)', cards: [
        { emoji: '🐦', label: 'Wings, Feathers & Beak', sub: 'Sayap, bulu unggas & paruh (burung)', speak: 'wings, feathers, beak', lang: 'en-US' },
        { emoji: '🐟', label: 'Fins, Gills & Scales', sub: 'Sirip, insang & sisik (ikan bandeng)', speak: 'fins, gills, scales', lang: 'en-US' },
        { emoji: '🐱', label: 'Fur, Whiskers & Tail', sub: 'Bulu mamalia, kumis & ekor (kucing)', speak: 'fur, whiskers, tail', lang: 'en-US' },
        { emoji: '🐘', label: 'Trunk & Tusks', sub: 'Belalai & gading (gajah)', speak: 'trunk and tusks', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Animal Body Parts',
    questions: [
      { text: 'A bird flies with its ... and eats with its ...', opts: ['fins, gills', 'wings, beak', 'trunk, tusks', 'scales, tail'], ans: 1, exp: 'Burung terbang pakai wings (sayap) dan makan pakai beak (paruh).' },
      { text: 'Bandeng fish has shiny ... and swims using its ...', opts: ['scales, fins', 'fur, wings', 'beak, claws', 'trunk, ears'], ans: 0, exp: 'Ikan memiliki sisik (scales) dan sirip (fins).' },
      { text: 'An elephant has a long ... (belalai).', opts: ['beak', 'trunk', 'wing', 'fin'], ans: 1, exp: '"Trunk" = belalai gajah.' },
    ],
  },
  {
    topicCode: 'BIG-SD5-02', subSeq: 4,
    objectives: ['Siswa mampu mendeskripsikan karakteristik hewan (habitat, makanan, kemampuan gerak) dalam paragraf pendek.'],
    materialTitle: 'Describing Animal Characteristics',
    blocks: [
      { type: 'story_panel', title: 'My Favorite Animal: The Rabbit', lines: [
        { speaker: 'Salsa', avatar: '👧', text: 'A rabbit is a cute mammal. It has soft white fur, two long ears, and a short tail. It can hop very fast! It eats carrots and green vegetables.' },
      ]},
    ],
    activityTitle: 'Practice: Animal Characteristics',
    questions: [
      { text: '"It is a wild animal. It has black and orange stripes, sharp teeth, and runs very fast." Hewan tersebut adalah...', opts: ['A giraffe', 'A tiger', 'A turtle', 'A duck'], ans: 1, exp: 'Belang hitam-oranye, gigi tajam, lari cepat = tiger (harimau).' },
      { text: 'Berdasarkan teks Salsa, apa makanan kelinci?', opts: ['Meat and fish', 'Carrots and green vegetables', 'Stones', 'Milk only'], ans: 1, exp: 'Tertulis: "It eats carrots and green vegetables."' },
      { text: 'A giraffe is very ... and has a long neck to eat leaves from high trees.', opts: ['short', 'tall', 'tiny', 'round'], ans: 1, exp: 'Jerapah sangat tinggi (tall).' },
    ],
  },

  // BAB 3: MY DAILY ACTIVITIES
  {
    topicCode: 'BIG-SD5-03', subSeq: 1,
    objectives: ['Siswa mampu menyebutkan kosakata aktivitas sehari-hari dari bangun tidur hingga tidur malam.'],
    materialTitle: 'Daily Activities Vocabulary',
    blocks: [
      { type: 'visual_cards', title: 'Aktivitas Sehari-Hari (Klik 🔊)', cards: [
        { emoji: '⏰', label: 'Wake up / Get up', sub: 'Bangun tidur', speak: 'wake up, get up', lang: 'en-US' },
        { emoji: '🚿', label: 'Take a bath / Brush teeth', sub: 'Mandi / Gosok gigi', speak: 'take a bath, brush teeth', lang: 'en-US' },
        { emoji: '🍳', label: 'Have breakfast / lunch / dinner', sub: 'Sarapan / makan siang / makan malam', speak: 'have breakfast, have lunch, have dinner', lang: 'en-US' },
        { emoji: '📚', label: 'Go to school / Do homework', sub: 'Berangkat sekolah / Mengerjakan PR', speak: 'go to school, do homework', lang: 'en-US' },
        { emoji: '🛌', label: 'Go to bed', sub: 'Pergi tidur', speak: 'go to bed', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Daily Activities',
    questions: [
      { text: 'Before going to school in the morning, I always ... (sarapan).', opts: ['have dinner', 'have breakfast', 'go to bed', 'have lunch'], ans: 1, exp: 'Breakfast = sarapan pagi; lunch = makan siang; dinner = makan malam.' },
      { text: 'Bahasa Inggris dari "mengerjakan PR" adalah...', opts: ['Do homework', 'Take a bath', 'Wake up', 'Watch TV'], ans: 0, exp: 'Do homework = mengerjakan PR.' },
      { text: 'At 9 p.m., I brush my teeth and ... (pergi tidur).', opts: ['wake up', 'go to school', 'go to bed', 'have breakfast'], ans: 2, exp: 'Go to bed = pergi tidur.' },
    ],
  },
  {
    topicCode: 'BIG-SD5-03', subSeq: 2,
    objectives: ['Siswa mampu mengurutkan aktivitas harian memakai kata penghubung urutan (First, Then, Next, After that, Finally).'],
    materialTitle: 'Sequencing Daily Activities',
    blocks: [
      { type: 'story_panel', title: 'My Morning Routine', lines: [
        { speaker: 'Raka', avatar: '👦', text: 'First, I wake up at 5 o\'clock. Next, I take a bath and wear my uniform. Then, I have breakfast with my family. Finally, I go to school by bicycle!' },
      ]},
      { type: 'tip', text: 'Kata urutan keren: First (Pertama) → Next / Then (Berikutnya / Lalu) → After that (Setelah itu) → Finally (Akhirnya).' },
    ],
    activityTitle: 'Practice: Sequencing Activities',
    questions: [
      { text: 'Kata penghubung urutan yang paling tepat untuk aktivitas PALING PERTAMA adalah...', opts: ['Finally', 'First', 'Because', 'Never'], ans: 1, exp: '"First" = pertama-tama.' },
      { text: 'Kata penghubung urutan untuk aktivitas TERAKHIR dalam rangkaian adalah...', opts: ['First', 'Finally', 'Next', 'Before'], ans: 1, exp: '"Finally" = akhirnya.' },
      { text: 'Urutan pagi yang logis: (1) Go to school, (2) Wake up, (3) Have breakfast.', opts: ['1-2-3', '2-3-1', '3-2-1', '2-1-3'], ans: 1, exp: 'Wake up (2) → Have breakfast (3) → Go to school (1).' },
    ],
  },
  {
    topicCode: 'BIG-SD5-03', subSeq: 3,
    objectives: ['Siswa mampu menyatakan waktu kegiatan memakai "at + jam" (o\'clock, half past, a quarter past) dan bagian hari (in the morning/afternoon/evening).'],
    materialTitle: 'Telling Time for Daily Activities',
    blocks: [
      { type: 'table', title: 'Membaca Jam & Preposisi Waktu', headers: ['Waktu', 'Bahasa Inggris', 'Keterangan'], rows: [
        ['06.00', "at six o'clock", 'Jam tepat pakai "o\'clock"'],
        ['06.30', 'at half past six (six thirty)', 'Lewat 30 menit = half past'],
        ['07.15', 'at a quarter past seven', 'Lewat 15 menit = a quarter past'],
        ['Pagi / Siang / Malam', 'in the morning / in the afternoon / at night', 'Jam selalu pakai "at"!'],
      ]},
    ],
    activityTitle: 'Practice: Time of Activities',
    questions: [
      { text: 'I wake up ... half past five in the morning.', opts: ['in', 'on', 'at', 'under'], ans: 2, exp: 'Menyebut jam selalu menggunakan preposisi "at".' },
      { text: '"Half past seven" menunjukkan pukul...', opts: ['07.00', '07.15', '07.30', '07.45'], ans: 2, exp: 'Half past = lewat 30 menit → 07.30.' },
      { text: 'I sleep at nine o\'clock ... night.', opts: ['at', 'in', 'on', 'to'], ans: 0, exp: 'Khusus "night" menggunakan "at night" (sedangkan morning/afternoon/evening memakai "in the...").' },
    ],
  },
  {
    topicCode: 'BIG-SD5-03', subSeq: 4,
    objectives: ['Siswa mampu menggunakan Simple Present Tense (Verb 1 vs Verb 1 + s/es) dan adverb of frequency (always, usually, sometimes, never).'],
    materialTitle: 'Simple Present Tense for Routines',
    blocks: [
      { type: 'formula', name: 'Aturan Emas Simple Present Tense', expression: 'I / You / We / They + Verb 1 (go, study)  |  He / She / It + Verb 1 + s/es (goes, studies)', note: 'Kata penanda kebiasaan: every day, always (selalu), usually (biasanya), sometimes (kadang-kadang), never (tidak pernah).' },
      { type: 'misconception', wrong: 'Menulis "She go to school" atau "I goes to school".', right: 'Ingat: He/She/It SUKA huruf -s/-es (She goes, He plays, Alya reads). I/You/We/They TANPA -s (I go, They play)!' },
    ],
    activityTitle: 'Practice: Simple Present Tense',
    questions: [
      { text: 'Alya ... (membaca) a book every evening.', opts: ['read', 'reads', 'reading', 'to read'], ans: 1, exp: 'Subjek Alya (She) → kata kerja ditambah -s: reads.' },
      { text: 'Bima and Raka ... (bermain) football on Sunday.', opts: ['plays', 'play', 'playing', 'is play'], ans: 1, exp: 'Subjek jamak (They) → kata kerja dasar tanpa -s: play.' },
      { text: 'My father ... (pergi) to work at seven o\'clock.', opts: ['go', 'goes', 'going', 'are go'], ans: 1, exp: 'My father (He) → go + es = goes.' },
    ],
  },

  // BAB 4: GIVING AND FOLLOWING INSTRUCTIONS
  {
    topicCode: 'BIG-SD5-04', subSeq: 1,
    objectives: ['Siswa mampu memberikan instruksi sopan di sekolah dan rumah menggunakan kata "Please".'],
    materialTitle: 'Giving Polite Instructions',
    blocks: [
      { type: 'visual_cards', title: 'Polite Instructions (Klik 🔊)', cards: [
        { emoji: '🧼', label: 'Wash your hands, please!', sub: 'Tolong cuci tanganmu!', speak: 'Wash your hands, please!', lang: 'en-US' },
        { emoji: '💡', label: 'Please turn off the light.', sub: 'Tolong matikan lampunya.', speak: 'Please turn off the light.', lang: 'en-US' },
        { emoji: '🗑️', label: 'Put the trash in the bin, please.', sub: 'Tolong buang sampah ke tempatnya.', speak: 'Put the trash in the bin, please.', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Giving Instructions',
    questions: [
      { text: 'Agar kalimat perintah terdengar sopan dalam Bahasa Inggris, kita tambahkan kata...', opts: ['Please', 'Never', 'Angry', 'Fast'], ans: 0, exp: '"Please" di awal atau akhir kalimat membuat instruksi santun.' },
      { text: 'Instruksi untuk meminta teman mematikan kipas angin adalah...', opts: ['Turn on the fan, please!', 'Turn off the fan, please!', 'Open the fan!', 'Eat the fan!'], ans: 1, exp: 'Turn off = matikan; Turn on = nyalakan.' },
      { text: 'Kalimat larangan sopan "Tolong jangan berlari di kelas!" adalah...', opts: ['Please run in class!', "Please don't run in the classroom!", 'Run fast please!', 'Sit on the table!'], ans: 1, exp: 'Larangan memakai "Don\'t + Verb 1".' },
    ],
  },
  {
    topicCode: 'BIG-SD5-04', subSeq: 2,
    objectives: ['Siswa mampu memahami dan mematuhi instruksi maupun rambu larangan sederhana dalam Bahasa Inggris.'],
    materialTitle: 'Understanding Commands and Signs',
    blocks: [
      { type: 'flashcards', title: 'Rambu & Tanda Umum (Klik 🔊)', cards: [
        { emoji: '🤫', front: 'Keep quiet! / Be quiet!', back: 'Harap tenang! (biasa di perpustakaan)', speak: 'Keep quiet!', lang: 'en-US' },
        { emoji: '🚯', front: "Don't litter!", back: 'Jangan membuang sampah sembarangan!', speak: "Don't litter!", lang: 'en-US' },
        { emoji: '🚶', front: 'Line up neatly!', back: 'Berbarislah dengan rapi!', speak: 'Line up neatly!', lang: 'en-US' },
        { emoji: '🚫', front: 'Keep off the grass!', back: 'Jangan menginjak rumput!', speak: 'Keep off the grass!', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Understanding Commands',
    questions: [
      { text: 'Kamu melihat tanda "KEEP QUIET!" di perpustakaan. Artinya kamu harus...', opts: ['Berbicara keras', 'Tenang dan tidak berisik', 'Makan siang', 'Berlari'], ans: 1, exp: '"Keep quiet" = harap tenang.' },
      { text: 'Arti rambu "Don\'t litter!" di taman adalah...', opts: ['Jangan membuang sampah sembarangan', 'Silakan petik bunga', 'Jangan duduk', 'Masuk gratis'], ans: 0, exp: '"Litter" = membuang sampah sembarangan.' },
      { text: 'Saat guru berkata "Line up in front of the class!", siswa harus...', opts: ['Berbaris rapi di depan kelas', 'Tidur di bangku', 'Keluar gerbang', 'Menutup jendela'], ans: 0, exp: '"Line up" = berbaris.' },
    ],
  },
  {
    topicCode: 'BIG-SD5-04', subSeq: 3,
    objectives: ['Siswa mampu menggunakan Imperative Verbs (kata kerja bentuk dasar Verb 1 di awal kalimat).'],
    materialTitle: 'Imperative Verbs (Kata Kerja Perintah)',
    blocks: [
      { type: 'formula', name: 'Pola Kalimat Imperatif', expression: 'Positif: Verb 1 + Objek (Cut the paper!)  |  Negatif: Don\'t + Verb 1 (Don\'t touch it!)', note: 'Kata kerja imperatif SELALU bentuk dasar (Verb 1), tanpa -s, tanpa -ing, tanpa "to"!' },
      { type: 'visual_cards', title: 'Imperative Verbs Populer (Klik 🔊)', cards: [
        { emoji: '✂️', label: 'Cut / Fold / Glue', sub: 'Potong / Lipat / Lem', speak: 'cut, fold, glue', lang: 'en-US' },
        { emoji: '🥣', label: 'Pour / Stir / Mix', sub: 'Tuang / Aduk / Campur', speak: 'pour, stir, mix', lang: 'en-US' },
        { emoji: '💧', label: 'Wash / Boil / Dry', sub: 'Cuci / Rebus / Keringkan', speak: 'wash, boil, dry', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Imperative Verbs',
    questions: [
      { text: 'Lengkapi kalimat perintah: "... the hot water into the glass carefully!"', opts: ['Pouring', 'Pour', 'Pours', 'To pour'], ans: 1, exp: 'Kalimat perintah selalu memakai kata kerja dasar (Verb 1): Pour.' },
      { text: 'Arti kata kerja "Fold the paper in half!" adalah...', opts: ['Lipat kertas menjadi dua bagian!', 'Bakar kertasnya!', 'Buang kertasnya!', 'Warnai kertasnya!'], ans: 0, exp: '"Fold" = lipat.' },
      { text: 'Kata kerja "Stir" dalam resep minuman artinya...', opts: ['Potong', 'Aduk', 'Goreng', 'Kupas'], ans: 1, exp: '"Stir" = aduk (stir well = aduk rata).' },
    ],
  },
  {
    topicCode: 'BIG-SD5-04', subSeq: 4,
    objectives: ['Siswa mampu menyusun langkah-langkah kegiatan sederhana (seperti membuat teh hangat atau mencuci tangan) dalam Bahasa Inggris.'],
    materialTitle: 'Simple Step-by-Step Instructions',
    blocks: [
      { type: 'worked_example', level: 'How to Make Warm Tea', question: 'Susun 4 langkah membuat teh manis hangat dalam Bahasa Inggris!', steps: ['1. First, put a teabag and two spoons of sugar into a cup.', '2. Next, pour hot water into the cup carefully.', '3. Then, stir it well until the sugar dissolves.', '4. Finally, remove the teabag and enjoy your warm tea!'], answer: 'Gunakan urutan First → Next → Then → Finally + Verb 1!' },
    ],
    activityTitle: 'Practice: Step-by-Step Instructions',
    questions: [
      { text: 'How to wash hands: (1) Rinse with clean water, (2) Wet your hands, (3) Rub with soap for 20 seconds. Urutan yang benar:', opts: ['2-3-1', '1-2-3', '3-1-2', '2-1-3'], ans: 0, exp: 'Wet (basahi) → Rub with soap (gosok sabun) → Rinse (bilas).' },
      { text: 'Pada langkah "Put a teabag into a cup", arti kata "into" adalah...', opts: ['Ke dalam', 'Di bawah', 'Di belakang', 'Di luar'], ans: 0, exp: '"Into" menunjukkan gerakan masuk ke dalam wadah.' },
      { text: 'Arti instruksi "Dry your hands with a clean towel" adalah...', opts: ['Basahi tanganmu', 'Keringkan tanganmu dengan handuk bersih', 'Cuci handukmu', 'Lipat handukmu'], ans: 1, exp: '"Dry" = keringkan, "clean towel" = handuk bersih.' },
    ],
  },

  // BAB 5: HEALTHY HABITS
  {
    topicCode: 'BIG-SD5-05', subSeq: 1,
    objectives: ['Siswa mampu menyebutkan kebiasaan hidup sehat sehari-hari dalam Bahasa Inggris.'],
    materialTitle: 'Healthy Habits (Kebiasaan Hidup Sehat)',
    blocks: [
      { type: 'visual_cards', title: 'Healthy Habits Every Day (Klik 🔊)', cards: [
        { emoji: '💧', label: 'Drink enough water', sub: 'Minum cukup air putih', speak: 'Drink enough water', lang: 'en-US' },
        { emoji: '😴', label: 'Get enough sleep', sub: 'Tidur yang cukup', speak: 'Get enough sleep', lang: 'en-US' },
        { emoji: '🧼', label: 'Wash hands before eating', sub: 'Cuci tangan sebelum makan', speak: 'Wash hands before eating', lang: 'en-US' },
        { emoji: '🪥', label: 'Brush teeth twice a day', sub: 'Sikat gigi dua kali sehari', speak: 'Brush teeth twice a day', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Healthy Habits',
    questions: [
      { text: 'Manakah yang merupakan HEALTHY HABIT (kebiasaan sehat)?', opts: ['Sleeping at 1 a.m. every night', 'Drinking enough clean water every day', 'Never brushing teeth', 'Eating too much candy'], ans: 1, exp: 'Minum cukup air putih adalah kebiasaan hidup sehat.' },
      { text: 'Arti "Brush your teeth twice a day" adalah sikat gigi ... sehari.', opts: ['Sekali', 'Dua kali', 'Lima kali', 'Tidak pernah'], ans: 1, exp: '"Twice" = dua kali; "Once" = sekali.' },
      { text: 'Opposite (lawan kata) of "healthy" is...', opts: ['strong', 'unhealthy / sick', 'happy', 'clean'], ans: 1, exp: 'Healthy (sehat) ↔ unhealthy (tidak sehat).' },
    ],
  },
  {
    topicCode: 'BIG-SD5-05', subSeq: 2,
    objectives: ['Siswa mampu membedakan makanan sehat (healthy food) dan jajanan kurang sehat (junk food) dalam Bahasa Inggris.'],
    materialTitle: 'Healthy Food vs Junk Food',
    blocks: [
      { type: 'table', title: 'Healthy Food vs Unhealthy Food', headers: ['Healthy Food (Makanan Sehat)', 'Limit These (Batasi!)'], rows: [
        ['Fruits (banana, mango, orange, papaya)', 'Too much candy & sugary soda'],
        ['Vegetables (spinach, carrot, broccoli)', 'Too many salty instant chips'],
        ['Protein (fish, eggs, tempeh, tofu, milk)', 'Oily street snacks without cover'],
      ]},
    ],
    activityTitle: 'Practice: Healthy Food',
    questions: [
      { text: 'Spinach (bayam), carrots (wortel), and broccoli are kinds of...', opts: ['fruits', 'vegetables', 'drinks', 'toys'], ans: 1, exp: 'Vegetables = sayur-sayuran.' },
      { text: 'Bandeng fish, eggs, and tofu are healthy because they are rich in...', opts: ['protein', 'plastic', 'sugar only', 'salt only'], ans: 0, exp: 'Ikan, telur, dan tahu kaya protein.' },
      { text: 'We should eat more fruits and vegetables, and eat LESS (lebih sedikit)...', opts: ['clean water', 'candy and sugary soda', 'rice', 'milk'], ans: 1, exp: 'Permen dan minuman tinggi gula harus dibatasi.' },
    ],
  },
  {
    topicCode: 'BIG-SD5-05', subSeq: 3,
    objectives: ['Siswa mampu menyebutkan berbagai aktivitas fisik/olahraga yang menyehatkan dalam Bahasa Inggris.'],
    materialTitle: 'Physical Activities and Exercise',
    blocks: [
      { type: 'visual_cards', title: 'Let\'s Stay Active! (Klik 🔊)', cards: [
        { emoji: '🏃', label: 'Jogging / Running', sub: 'Lari santai / Berlari', speak: 'jogging, running', lang: 'en-US' },
        { emoji: '🚴', label: 'Cycling / Riding a bike', sub: 'Bersepeda', speak: 'cycling, riding a bike', lang: 'en-US' },
        { emoji: '🏊', label: 'Swimming', sub: 'Berenang', speak: 'swimming', lang: 'en-US' },
        { emoji: '🤸', label: 'Stretching & Exercise', sub: 'Peregangan & Senam', speak: 'stretching and exercise', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Physical Activities',
    questions: [
      { text: 'Bima rides his bicycle every Sunday morning. His favorite exercise is...', opts: ['swimming', 'cycling', 'sleeping', 'reading'], ans: 1, exp: '"Cycling" = bersepeda.' },
      { text: 'Regular exercise makes our body...', opts: ['weak and tired', 'strong and fit', 'sick', 'sleepy always'], ans: 1, exp: 'Strong and fit = kuat dan bugar.' },
      { text: 'Before playing football, we should do ... (peregangan/pemanasan).', opts: ['stretching / warm-up', 'sleeping', 'eating heavy meals', 'crying'], ans: 0, exp: 'Stretching/warm-up mencegah cedera otot.' },
    ],
  },
  {
    topicCode: 'BIG-SD5-05', subSeq: 4,
    objectives: ['Siswa mampu membuat saran dan instruksi menjaga kesehatan menggunakan "should" dan kalimat imperatif.'],
    materialTitle: 'Giving Health Advice (Should / Imperatives)',
    blocks: [
      { type: 'formula', name: 'Memberi Saran Kesehatan', expression: 'You SHOULD + Verb 1 (sebaiknya...)  |  You SHOULDN\'T + Verb 1 (sebaiknya jangan...)', note: 'Contoh: "You should eat vegetables!" / "You shouldn\'t sleep too late!"' },
    ],
    activityTitle: 'Practice: Health Advice',
    questions: [
      { text: 'Raka has a toothache (sakit gigi). What is the best advice?', opts: ['You should eat more candy.', 'You should brush your teeth and see a dentist.', 'You shouldn\'t drink water.', 'You should play in the rain.'], ans: 1, exp: '"See a dentist" = periksa ke dokter gigi.' },
      { text: 'Lengkapi: "You ... watch TV too late at night."', opts: ['should', "shouldn't", 'is', 'are'], ans: 1, exp: '"Shouldn\'t" = sebaiknya tidak.' },
      { text: '"Eat healthy food and exercise regularly!" Kalimat ini bertujuan...', opts: ['Mengajak menjaga kesehatan tubuh', 'Melarang makan', 'Menanyakan alamat', 'Berpamitan'], ans: 0, exp: 'Ajakan hidup sehat dengan makan bergizi dan olahraga teratur.' },
    ],
  },

  // BAB 6: TALKING ABOUT MY EXPERIENCES
  {
    topicCode: 'BIG-SD5-06', subSeq: 1,
    objectives: ['Siswa mampu menceritakan pengalaman singkat di masa lalu menggunakan kalimat sederhana (Simple Past Tense).'],
    materialTitle: 'Talking About Simple Past Experiences',
    blocks: [
      { type: 'story_panel', title: 'My Fun Sunday!', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Last Sunday, I visited my grandmother in the village. I helped her water the flowers and ate delicious pudak. I was very happy!' },
      ]},
      { type: 'tip', text: 'Penanda waktu masa lalu (Past Time): yesterday (kemarin), last Sunday (Minggu lalu), last week (minggu lalu), two days ago (dua hari lalu).' },
    ],
    activityTitle: 'Practice: Talking About Experiences',
    questions: [
      { text: 'Penanda waktu yang menunjukkan kejadian SUDAH BERLALU (masa lalu) adalah...', opts: ['Tomorrow', 'Yesterday and last week', 'Next year', 'Every day'], ans: 1, exp: 'Yesterday (kemarin) dan last week (pekan lalu) adalah past time signals.' },
      { text: 'Berdasarkan cerita Alya, kapan ia mengunjungi neneknya?', opts: ['Last Sunday', 'Tomorrow', 'Next Friday', 'Every Monday'], ans: 0, exp: 'Tertulis: "Last Sunday, I visited my grandmother."' },
      { text: 'Untuk menyatakan perasaan di masa lalu ("Saya sangat senang kemarin"), kita menggunakan...', opts: ['I am happy yesterday.', 'I was very happy yesterday.', 'I were happy.', 'I is happy.'], ans: 1, exp: 'Bentuk lampau dari "am/is" adalah "was" (I was happy).' },
    ],
  },
  {
    topicCode: 'BIG-SD5-06', subSeq: 2,
    objectives: ['Siswa mampu mengenal kata kerja bentuk lampau beraturan (Regular Verbs: +ed) seperti visited, played, studied, watched.'],
    materialTitle: 'Regular Past Verbs (+ed)',
    blocks: [
      { type: 'table', title: 'Regular Verbs (Tinggal Tambah -ed / -d!)', headers: ['Sekarang (Verb 1)', 'Lampau (Verb 2)', 'Arti'], rows: [
        ['play', 'played', 'bermain'],
        ['visit', 'visited', 'mengunjungi'],
        ['watch', 'watched', 'menonton'],
        ['clean / help', 'cleaned / helped', 'membersihkan / membantu'],
        ['study', 'studied (y → ied)', 'belajar'],
      ]},
    ],
    activityTitle: 'Practice: Regular Past Verbs',
    questions: [
      { text: 'Yesterday, Bima ... (bermain) football with his friends.', opts: ['play', 'played', 'playing', 'plays'], ans: 1, exp: 'Yesterday (lampau) → play + ed = played.' },
      { text: 'Last night, Salsa ... (belajar) English for one hour.', opts: ['study', 'studied', 'studys', 'studying'], ans: 1, exp: 'Study berakhiran konsonan+y → studied.' },
      { text: 'We ... (membersihkan) our classroom together yesterday.', opts: ['cleaned', 'clean', 'cleans', 'cleaning'], ans: 0, exp: 'Clean → cleaned.' },
    ],
  },
  {
    topicCode: 'BIG-SD5-06', subSeq: 3,
    objectives: ['Siswa mampu mengenal kata kerja lampau tidak beraturan (Irregular Verbs) yang paling sering dipakai: went, ate, saw, bought, had.'],
    materialTitle: 'Common Irregular Past Verbs',
    blocks: [
      { type: 'flashcards', title: '5 Irregular Verbs Wajib Hafal! (Klik 🔊)', cards: [
        { emoji: '🚗', front: 'go (pergi) → ...', back: 'went (I went to the park yesterday.)', speak: 'go, went', lang: 'en-US' },
        { emoji: '🍽️', front: 'eat (makan) → ...', back: 'ate (We ate grilled bandeng.)', speak: 'eat, ate', lang: 'en-US' },
        { emoji: '👀', front: 'see (melihat) → ...', back: 'saw (I saw a big butterfly.)', speak: 'see, saw', lang: 'en-US' },
        { emoji: '🛍️', front: 'buy (membeli) → ...', back: 'bought (Mom bought fresh fruits.)', speak: 'buy, bought', lang: 'en-US' },
        { emoji: '🎉', front: 'have (memiliki/mengalami) → ...', back: 'had (We had a great time!)', speak: 'have, had', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Irregular Past Verbs',
    questions: [
      { text: 'Last holiday, my family ... (pergi) to the zoo.', opts: ['goed', 'went', 'goes', 'going'], ans: 1, exp: 'Bentuk lampau dari "go" adalah "went" (irregular verb).' },
      { text: 'Yesterday, I ... (makan) nasi krawu for lunch.', opts: ['eated', 'ate', 'eat', 'eats'], ans: 1, exp: 'Bentuk lampau "eat" adalah "ate".' },
      { text: 'My mother ... (membeli) a new backpack for me last week.', opts: ['buyed', 'bought', 'buys', 'buying'], ans: 1, exp: 'Bentuk lampau "buy" adalah "bought".' },
    ],
  },
];

upsertLessonsBatch('Kelas 5 SD — Bahasa Inggris (6 Bab, 26 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

