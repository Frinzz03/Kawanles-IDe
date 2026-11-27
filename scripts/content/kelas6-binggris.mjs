import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: UNDERSTANDING SHORT TEXTS
  {
    topicCode: 'BIG-SD6-01', subSeq: 1,
    objectives: ['Siswa mampu membaca dan memahami makna umum teks pendek Bahasa Inggris (short notices, messages, and short paragraphs).'],
    materialTitle: 'Reading and Understanding Short Texts',
    blocks: [
      { type: 'story_panel', title: 'Short Notice at School', lines: [
        { speaker: 'Notice', avatar: '📌', text: 'ATTENTION! School Clean-Up Day will be held on Saturday at 7:00 a.m. Please wear your sports uniform and bring a small cloth or broom. Let\'s keep our school clean and green!' },
      ]},
      { type: 'tip', text: 'Saat membaca teks pendek Bahasa Inggris, jangan panik jika ada 1–2 kata belum tahu! Tangkap dulu kata kunci (who, what, when, where) dari konteks kalimatnya!' },
    ],
    activityTitle: 'Practice: Understanding Short Texts',
    questions: [
      { text: 'What is the notice above mainly about?', opts: ['A football match', 'School Clean-Up Day', 'A singing contest', 'Holiday trip'], ans: 1, exp: 'Tertulis jelas: "School Clean-Up Day will be held on Saturday..."' },
      { text: 'When will the event take place?', opts: ['On Sunday at 8 a.m.', 'On Saturday at 7:00 a.m.', 'On Friday afternoon', 'Every Monday'], ans: 1, exp: 'Tertulis: "on Saturday at 7:00 a.m."' },
      { text: 'What should students wear on that day?', opts: ['Pajamas', 'Sports uniform', 'Party dress', 'Raincoat'], ans: 1, exp: 'Tertulis: "Please wear your sports uniform."' },
    ],
  },
  {
    topicCode: 'BIG-SD6-01', subSeq: 2,
    objectives: ['Siswa mampu menemukan informasi utama (main idea / topic) dari sebuah paragraf pendek Bahasa Inggris.'],
    materialTitle: 'Finding the Main Idea',
    blocks: [
      { type: 'worked_example', level: 'Finding Main Idea', question: '"Gresik is famous for its delicious traditional food. Pudak is a sweet cake wrapped in palm leaf sheaths. Nasi Krawu is served with tender beef and spicy sambal. Many visitors also love otak-otak bandeng." What is the main idea?', steps: ['Lihat kalimat pertama (topic sentence): "Gresik is famous for its delicious traditional food."', 'Kalimat 2–4 memberi 3 contoh makanannya (Pudak, Nasi Krawu, Otak-otak).'], answer: 'Main idea: Traditional foods of Gresik.' },
    ],
    activityTitle: 'Practice: Main Idea',
    questions: [
      { text: 'What is the main idea of the paragraph about Gresik above?', opts: ['How to catch fish in the sea', 'Famous traditional foods from Gresik', 'Schools in Gresik', 'Weather in East Java'], ans: 1, exp: 'Seluruh kalimat menjelaskan makanan tradisional terkenal khas Gresik.' },
      { text: 'Where is the main idea (topic sentence) MOST OFTEN found in a short English paragraph?', opts: ['In the first sentence', 'Only in the title of another book', 'In the page number', 'Nowhere'], ans: 0, exp: 'Di teks pendek SD/SMP, kalimat pertama paling sering memuat main idea.' },
      { text: 'The word "delicious" in the text means...', opts: ['Very bad', 'Very tasty / yummy', 'Very expensive', 'Very cold'], ans: 1, exp: 'Delicious = lezat / enak sekali.' },
    ],
  },
  {
    topicCode: 'BIG-SD6-01', subSeq: 3,
    objectives: ['Siswa mampu menemukan informasi rinci (specific details) menggunakan kata tanya 5W+1H dalam Bahasa Inggris.'],
    materialTitle: 'Identifying Specific Details (5W + 1H)',
    blocks: [
      { type: 'table', title: 'Question Words (5W + 1H)', headers: ['Question Word', 'Meaning', 'Asks About'], rows: [
        ['What', 'Apa', 'Thing / event / activity'],
        ['Who', 'Siapa', 'Person / character'],
        ['Where', 'Di mana', 'Place / location'],
        ['When', 'Kapan', 'Time / day / date'],
        ['Why', 'Mengapa', 'Reason (dijawab "Because...")'],
        ['How', 'Bagaimana', 'Way / process / condition'],
      ]},
    ],
    activityTitle: 'Practice: Specific Details',
    questions: [
      { text: 'Text: "Bima goes to the library every Wednesday because he loves reading science comics." — WHY does Bima go to the library?', opts: ['Because he wants to eat', 'Because he loves reading science comics', 'On Wednesday', 'In the library'], ans: 1, exp: '"Why" menanyakan alasan → "because he loves reading science comics."' },
      { text: 'From the same sentence, WHEN does Bima go to the library?', opts: ['Every Wednesday', 'Every Sunday', 'At night', 'Yesterday'], ans: 0, exp: '"When" menanyakan waktu → every Wednesday.' },
      { text: 'Question word to ask about a PERSON is...', opts: ['Where', 'Who', 'When', 'Why'], ans: 1, exp: 'Who = siapa.' },
    ],
  },

  // BAB 2: DESCRIBING PEOPLE, ANIMALS, AND PLACES
  {
    topicCode: 'BIG-SD6-02', subSeq: 1,
    objectives: ['Siswa mampu mengembangkan teks deskriptif sederhana dengan struktur Identification dan Description.'],
    materialTitle: 'Developing a Short Descriptive Text',
    blocks: [
      { type: 'table', title: '2 Parts of a Simple Descriptive Text', headers: ['Part', 'Function', 'Example'], rows: [
        ['1. Identification', 'Memperkenalkan siapa/apa yang dideskripsikan', 'I have a best friend named Raka.'],
        ['2. Description', 'Merinci penampilan fisik, sifat, kebiasaan, atau ciri khas', 'He is tall and wears glasses. He is smart, funny, and always helps his friends.'],
      ]},
    ],
    activityTitle: 'Practice: Developing Descriptions',
    questions: [
      { text: 'The tense mostly used to describe people, animals, or places (general facts) is...', opts: ['Simple Present Tense (is/are/has/verb-s)', 'Future Tense only', 'Past Continuous', 'Imperative'], ans: 0, exp: 'Teks deskripsi menggunakan Simple Present Tense.' },
      { text: 'Which sentence is the best IDENTIFICATION sentence for a text about a pet cat?', opts: ['It eats fish every day.', 'I have a cute Persian cat named Milo.', 'It likes sleeping on the sofa.', 'Its fur is soft.'], ans: 1, exp: 'Identification mengenalkan objek (nama & jenisnya) di awal teks.' },
      { text: 'Lengkapi: "My school ... a large library and twelve clean classrooms."', opts: ['is', 'are', 'has', 'have'], ans: 2, exp: 'My school (It) + has (memiliki).' },
    ],
  },
  {
    topicCode: 'BIG-SD6-02', subSeq: 2,
    objectives: ['Siswa mampu membandingkan ciri fisik dan karakteristik orang/hewan memakai Comparative (-er / more) dan Superlative (-est / most) dasar.'],
    materialTitle: 'Physical Traits & Simple Comparisons',
    blocks: [
      { type: 'formula', name: 'Perbandingan Sederhana (Comparative & Superlative)', expression: 'Lebih (-er): taller, faster, bigger  |  Paling (-est): the tallest, the fastest, the biggest', note: 'Kata panjang (≥2–3 suku kata): more beautiful / the most beautiful!' },
      { type: 'visual_cards', title: 'Contoh Perbandingan Hewan (Klik 🔊)', cards: [
        { emoji: '🦒', label: 'A giraffe is taller than a deer.', sub: 'Jerapah lebih tinggi dari rusa.', speak: 'A giraffe is taller than a deer.', lang: 'en-US' },
        { emoji: '🐆', label: 'The cheetah is the fastest land animal.', sub: 'Citah adalah hewan darat tercepat.', speak: 'The cheetah is the fastest land animal.', lang: 'en-US' },
        { emoji: '🐋', label: 'The blue whale is the biggest animal.', sub: 'Paus biru adalah hewan terbesar.', speak: 'The blue whale is the biggest animal.', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Traits & Comparisons',
    questions: [
      { text: 'An elephant is ... than a rabbit.', opts: ['big', 'bigger', 'biggest', 'more big'], ans: 1, exp: 'Membandingkan 2 hal ("than") menggunakan comparative: bigger.' },
      { text: 'Mount Semeru is the ... mountain in Java.', opts: ['high', 'higher', 'highest', 'more high'], ans: 2, exp: 'Kata "the" menandai superlative (paling): the highest.' },
      { text: 'A turtle is slow, but a cheetah is very...', opts: ['fast', 'heavy', 'tall', 'old'], ans: 0, exp: 'Lawan "slow" adalah "fast".' },
    ],
  },
  {
    topicCode: 'BIG-SD6-02', subSeq: 3,
    objectives: ['Siswa mampu mendeskripsikan suatu tempat (sekolah, alun-alun, pantai, rumah) dalam paragraf 4–5 kalimat lengkap.'],
    materialTitle: 'Describing Places in Detail',
    blocks: [
      { type: 'story_panel', title: 'My Favorite Place: The Town Square', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Alun-Alun Gresik is a lively and comfortable public park in the center of town. There are shady trees, neat walking paths, and benches for families. In the afternoon, many children play while parents relax and enjoy the cool breeze. It is a great place to spend the weekend!' },
      ]},
    ],
    activityTitle: 'Practice: Describing Places',
    questions: [
      { text: 'In Alya\'s text, the word "shady" (shady trees) means...', opts: ['Rindang / teduh', 'Kering', 'Sempit', 'Kotor'], ans: 0, exp: 'Shady trees = pepohonan rindang yang meneduhkan.' },
      { text: 'When do many children play in the park according to the text?', opts: ['At midnight', 'In the afternoon', 'At 2 a.m.', 'Never'], ans: 1, exp: 'Tertulis: "In the afternoon, many children play..."' },
      { text: 'Which adjectives best describe a nice school library?', opts: ['Quiet, clean, bright, and comfortable', 'Noisy, dirty, and dark', 'Hot and messy', 'Broken and empty'], ans: 0, exp: 'Perpustakaan yang baik tenang, bersih, terang, dan nyaman.' },
    ],
  },

  // BAB 3: RECOUNTING PAST EXPERIENCES
  {
    topicCode: 'BIG-SD6-03', subSeq: 1,
    objectives: ['Siswa mampu menceritakan pengalaman masa lalu memakai Simple Past Tense (kalimat positif, negatif didn\'t, dan tanya Did...?).'],
    materialTitle: 'Talking About Past Experiences (Positive, Negative, Question)',
    blocks: [
      { type: 'formula', name: 'Pola Lengkap Simple Past Tense', expression: '(+) S + Verb 2 (I went)  |  (−) S + didn\'t + Verb 1 (I didn\'t go)  |  (?) Did + S + Verb 1? (Did you go?)', note: 'Hati-hati! Begitu ada "did / didn\'t", kata kerjanya KEMBALI ke Verb 1!' },
    ],
    activityTitle: 'Practice: Simple Past Sentences',
    questions: [
      { text: 'Yesterday, Bima ... (tidak pergi) to the park because it rained.', opts: ["didn't went", "didn't go", "don't go", "wasn't go"], ans: 1, exp: 'Setelah "didn\'t" kata kerja kembali ke Verb 1: didn\'t go.' },
      { text: '"... you watch the football match last night?" — "Yes, I did!"', opts: ['Do', 'Does', 'Did', 'Are'], ans: 2, exp: 'Pertanyaan waktu lampau ("last night") diawali "Did".' },
      { text: 'My sister and I ... (sangat senang) at the zoo last Sunday.', opts: ['was happy', 'were happy', 'are happy', 'is happy'], ans: 1, exp: 'Subjek jamak ("My sister and I" = We) dalam bentuk lampau memakai "were".' },
    ],
  },
  {
    topicCode: 'BIG-SD6-03', subSeq: 2,
    objectives: ['Siswa mampu menyusun urutan kejadian pengalaman masa lalu secara kronologis menggunakan time connectors.'],
    materialTitle: 'Sequencing Past Events',
    blocks: [
      { type: 'visual_cards', title: 'Past Time Connectors (Klik 🔊)', cards: [
        { emoji: '1️⃣', label: 'First / In the morning', sub: 'Pertama / Di pagi hari', speak: 'First, in the morning', lang: 'en-US' },
        { emoji: '2️⃣', label: 'After that / Then / Next', sub: 'Setelah itu / Lalu / Berikutnya', speak: 'After that, then, next', lang: 'en-US' },
        { emoji: '3️⃣', label: 'Finally / At last', sub: 'Akhirnya', speak: 'Finally, at last', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Sequencing Events',
    questions: [
      { text: 'Order the trip: (1) Finally, we went home happily. (2) First, we boarded the school bus at 7 a.m. (3) After that, we visited the museum and took photos.', opts: ['2-3-1', '1-2-3', '3-2-1', '2-1-3'], ans: 0, exp: 'First (2) → After that (3) → Finally (1).' },
      { text: 'The connector "After that" means...', opts: ['Sebelum itu', 'Setelah itu', 'Karena itu', 'Meskipun'], ans: 1, exp: 'After that = setelah itu.' },
      { text: 'Which time expression CANNOT be used for Simple Past Tense?', opts: ['Yesterday', 'Last month', 'Two days ago', 'Tomorrow'], ans: 3, exp: '"Tomorrow" (besok) untuk masa depan (Future Tense), bukan lampau.' },
    ],
  },
  {
    topicCode: 'BIG-SD6-03', subSeq: 3,
    objectives: ['Siswa mampu menggunakan beragam kata kerja lampau (regular & irregular verbs) secara tepat dalam konteks cerita.'],
    materialTitle: 'Past Verbs in Context',
    blocks: [
      { type: 'flashcards', title: 'Irregular Verbs Tambahan Kelas 6! (Klik 🔊)', cards: [
        { emoji: '📸', front: 'take → ...', back: 'took (We took many pictures.)', speak: 'take, took', lang: 'en-US' },
        { emoji: '🥤', front: 'drink → ...', back: 'drank (I drank fresh coconut water.)', speak: 'drink, drank', lang: 'en-US' },
        { emoji: '✍️', front: 'write → ...', back: 'wrote (She wrote a diary.)', speak: 'write, wrote', lang: 'en-US' },
        { emoji: '🎁', front: 'give → ...', back: 'gave (Grandma gave me a gift.)', speak: 'give, gave', lang: 'en-US' },
        { emoji: '🤝', front: 'meet → ...', back: 'met (I met my old friend.)', speak: 'meet, met', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Past Verbs in Context',
    questions: [
      { text: 'Last week, we ... (mengambil) many beautiful photos at the park.', opts: ['take', 'took', 'taked', 'taking'], ans: 1, exp: 'Verb 2 dari "take" adalah "took".' },
      { text: 'My uncle ... (memberi) me a new dictionary on my birthday.', opts: ['give', 'gived', 'gave', 'gives'], ans: 2, exp: 'Verb 2 dari "give" adalah "gave".' },
      { text: 'Yesterday afternoon, Raka ... (bertemu) his cousin at the bookstore.', opts: ['meet', 'met', 'meeted', 'meeting'], ans: 1, exp: 'Verb 2 dari "meet" adalah "met".' },
    ],
  },

  // BAB 4: SIMPLE RECOUNT TEXT
  {
    topicCode: 'BIG-SD6-04', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan tujuan (retell past events) dan 3 struktur utama Recount Text (Orientation, Events, Reorientation).'],
    materialTitle: 'Purpose and Structure of Simple Recount Text',
    blocks: [
      { type: 'table', title: '3 Parts of a Recount Text', headers: ['Structure', 'Purpose', 'Example'], rows: [
        ['1. Orientation', 'Who, where, when (pengenalan latar)', 'Last Sunday, my family and I went to a mangrove park.'],
        ['2. Events', 'Urutan kejadian secara kronologis (Verb 2)', 'First, we walked along the wooden bridge. Then, we planted two mangrove seedlings and saw small crabs.'],
        ['3. Reorientation', 'Penutup & perasaan/kesan pribadi', 'We felt tired but very proud because we helped nature!'],
      ]},
    ],
    activityTitle: 'Practice: Structure of Recount Text',
    questions: [
      { text: 'The main purpose of a RECOUNT text is to...', opts: ['Retell past experiences or events in chronological order', 'Give steps to cook soup', 'Describe a table', 'Sell a product'], ans: 0, exp: 'Recount text menceritakan kembali pengalaman/peristiwa yang telah terjadi.' },
      { text: 'The closing part of a recount text that expresses the writer\'s personal feeling or comment is called...', opts: ['Orientation', 'Events', 'Reorientation', 'Ingredients'], ans: 2, exp: 'Reorientation menutup teks dengan kesan/perasaan penulis.' },
      { text: 'The main tense used in a recount text is...', opts: ['Simple Past Tense', 'Simple Present Tense only', 'Future Tense', 'Imperative'], ans: 0, exp: 'Karena menceritakan masa lalu, recount memakai Simple Past Tense.' },
    ],
  },
  {
    topicCode: 'BIG-SD6-04', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi Orientation (who, when, where) dan rangkaian Events dari sebuah teks Recount pendek.'],
    materialTitle: 'Analyzing Orientation and Events',
    blocks: [
      { type: 'story_panel', title: 'Recount Text: School Independence Day Games', lines: [
        { speaker: 'Raka', avatar: '👦', text: 'On August 17th last year, my school held fun Independence Day games in the schoolyard. First, I joined the sack race and laughed a lot when I fell softly on the grass. Next, my class team won the tug-of-war competition! After that, we drank iced tea together. It was the most unforgettable day in grade 6!' },
      ]},
    ],
    activityTitle: 'Practice: Orientation & Events',
    questions: [
      { text: 'Based on Raka\'s recount text, WHERE did the games take place?', opts: ['At the beach', 'In the schoolyard', 'In the library', 'At home'], ans: 1, exp: 'Orientation: "in the schoolyard".' },
      { text: 'Which competition did Raka\'s class team WIN?', opts: ['Sack race', 'Tug-of-war (tarik tambang)', 'Singing contest', 'Chess'], ans: 1, exp: 'Tertulis: "my class team won the tug-of-war competition!"' },
      { text: 'The sentence "It was the most unforgettable day in grade 6!" is the ... part of the text.', opts: ['Orientation', 'Reorientation', 'Title', 'Materials'], ans: 1, exp: 'Menyatakan kesan penutup → Reorientation.' },
    ],
  },
  {
    topicCode: 'BIG-SD6-04', subSeq: 3,
    objectives: ['Siswa mampu menyusun teks Recount sederhana 1–2 paragraf berdasarkan pengalaman pribadi.'],
    materialTitle: 'Writing Your Own Simple Recount Text',
    blocks: [
      { type: 'list', title: '4-Step Recount Writing Guide', items: ['1. Orientation: Write WHEN, WHO, and WHERE (Last holiday, I went to ... with ...).', '2. Event 1 & Event 2: Write 2–3 activities using Verb 2 (visited, ate, saw, played, took photos).', '3. Reorientation: End with your feeling (I was very happy / It was a wonderful experience!).', '4. Check all verbs — make sure they are in Past Tense (Verb 2)!'] },
    ],
    activityTitle: 'Practice: Writing Recount Text',
    questions: [
      { text: 'Which sentence is the best ORIENTATION for a recount text?', opts: ['Last Saturday, Salsa and her mother went to the traditional market in Gresik.', 'Mix the flour and sugar well!', 'Cats have four legs.', 'Turn left at the crossroads!'], ans: 0, exp: 'Memuat kapan (Last Saturday), siapa (Salsa and her mother), dan di mana (traditional market).' },
      { text: 'Find and fix the mistake: "Yesterday, I go to my friend\'s house and we play chess."', opts: ['Yesterday, I went to my friend\'s house and we played chess.', 'Yesterday, I goes and plays chess.', 'Yesterday, I going and playing chess.', 'No mistake.'], ans: 0, exp: 'Yesterday → go berubah jadi went, play berubah jadi played.' },
      { text: 'A good REORIENTATION sentence for a happy trip is...', opts: ['We had a wonderful time and hoped to visit again someday.', 'First, we woke up at 5 a.m.', 'Bring your own bottle!', 'What time is it?'], ans: 0, exp: 'Menutup cerita dengan kesan dan harapan positif.' },
    ],
  },

  // BAB 5: PROCEDURE AND INSTRUCTIONS
  {
    topicCode: 'BIG-SD6-05', subSeq: 1,
    objectives: ['Siswa mampu memahami struktur Procedure Text (Goal/Title, Ingredients/Materials, Steps) dan urutan langkahnya.'],
    materialTitle: 'Understanding Procedure Text Structure',
    blocks: [
      { type: 'table', title: '3 Parts of a Procedure Text', headers: ['Part', 'Meaning', 'Example: How to Make Iced Orange Juice'], rows: [
        ['1. Goal (Title)', 'Tujuan / hasil yang ingin dibuat', 'How to Make Fresh Iced Orange Juice'],
        ['2. Materials / Ingredients', 'Alat dan bahan', '2 sweet oranges, 1 glass of water, 1 spoon of honey, ice cubes, a glass'],
        ['3. Steps', 'Urutan langkah memakai Imperative Verbs', '1. Cut the oranges. 2. Squeeze the juice. 3. Add water, honey, and ice. 4. Stir well and serve!'],
      ]},
    ],
    activityTitle: 'Practice: Procedure Text Structure',
    questions: [
      { text: 'What is the purpose of a PROCEDURE text?', opts: ['To tell how to make or do something step by step', 'To tell a past holiday', 'To describe a mountain', 'To sing a song'], ans: 0, exp: 'Procedure text memandu langkah membuat/melakukan sesuatu.' },
      { text: 'In a recipe, the list of food items like "2 oranges, honey, water, ice cubes" is called...', opts: ['Ingredients', 'Orientation', 'Reorientation', 'Characters'], ans: 0, exp: 'Ingredients = bahan makanan/minuman; Tools = peralatan.' },
      { text: 'The verb "Squeeze the oranges" means...', opts: ['Goreng jeruknya', 'Peras jeruknya', 'Bakar jeruknya', 'Buang jeruknya'], ans: 1, exp: '"Squeeze" = peras.' },
    ],
  },
  {
    topicCode: 'BIG-SD6-05', subSeq: 2,
    objectives: ['Siswa mampu memilih Imperative Verbs (action verbs) dan adverbs (carefully, slowly, well, neatly) yang tepat dalam prosedur.'],
    materialTitle: 'Imperative Verbs and Adverbs in Procedures',
    blocks: [
      { type: 'visual_cards', title: 'Action Verbs + Adverbs (Klik 🔊)', cards: [
        { emoji: '🔪', label: 'Slice carefully', sub: 'Iris dengan hati-hati', speak: 'Slice carefully', lang: 'en-US' },
        { emoji: '🥣', label: 'Stir well / Mix evenly', sub: 'Aduk rata / Campur merata', speak: 'Stir well, mix evenly', lang: 'en-US' },
        { emoji: '✂️', label: 'Cut neatly', sub: 'Gunting dengan rapi', speak: 'Cut neatly', lang: 'en-US' },
        { emoji: '🔥', label: 'Boil for 5 minutes', sub: 'Rebus selama 5 menit', speak: 'Boil for five minutes', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Imperative Verbs',
    questions: [
      { text: 'Lengkapi langkah resep: "... the banana into thin slices carefully!"', opts: ['Slice / Cut', 'Slicing', 'Sliced', 'Slices'], ans: 0, exp: 'Imperative selalu menggunakan Verb 1 dasar.' },
      { text: 'Arti keterangan cara "carefully" dan "neatly" berturut-turut adalah...', opts: ['Dengan cepat dan kasar', 'Dengan hati-hati dan rapi', 'Dengan keras dan pelan', 'Dengan dingin dan panas'], ans: 1, exp: 'Carefully = hati-hati; neatly = rapi.' },
      { text: '"Turn off the stove after the water boils." Arti "boils" adalah...', opts: ['Membeku', 'Mendidih', 'Hilang', 'Menjadi manis'], ans: 1, exp: '"Boil" = mendidih/rebus.' },
    ],
  },
  {
    topicCode: 'BIG-SD6-05', subSeq: 3,
    objectives: ['Siswa mampu menyusun petunjuk kegiatan sederhana (how to make a bookmark, sandwich, or plant a seed) dalam Bahasa Inggris.'],
    materialTitle: 'Writing Simple Step-by-Step Procedures',
    blocks: [
      { type: 'worked_example', level: 'How to Plant a Bean Seed', question: 'Susun 4 langkah menanam biji kacang hijau di gelas plastik!', steps: ['1. First, put some damp cotton into a clean plastic cup.', '2. Next, place three mung bean seeds on the cotton.', '3. Then, put the cup near a bright window and add a little water every day.', '4. Finally, watch the green sprouts grow in a few days!'], answer: 'Gunakan urutan First–Next–Then–Finally + Verb 1!' },
    ],
    activityTitle: 'Practice: Writing Procedures',
    questions: [
      { text: 'Order how to make a cheese sandwich: (1) Put the second slice of bread on top. (2) Spread butter on a slice of bread. (3) Add cheese and lettuce.', opts: ['2-3-1', '1-2-3', '3-2-1', '2-1-3'], ans: 0, exp: 'Oles mentega (2) → taruh keju & selada (3) → tutup roti kedua (1).' },
      { text: 'In "How to Plant a Bean Seed", the word "sprouts" means...', opts: ['Kecambah / tunas muda', 'Batu', 'Kapas kering', 'Gelas'], ans: 0, exp: '"Sprout" = kecambah/tunas.' },
      { text: 'Which title is best for a procedure text?', opts: ['How to Make a Paper Airplane', 'My Trip to Surabaya', 'My Cute Rabbit', 'A Sunny Morning'], ans: 0, exp: 'Judul teks prosedur biasanya diawali "How to ..."' },
    ],
  },

  // BAB 6: WRITING AND PRESENTING SIMPLE TEXTS
  {
    topicCode: 'BIG-SD6-06', subSeq: 1,
    objectives: ['Siswa mampu menulis teks pendek (descriptive, recount, atau procedure) 5–6 kalimat secara mandiri dan terstruktur.'],
    materialTitle: 'Writing a Short Complete Text',
    blocks: [
      { type: 'table', title: 'Pilih Format Teks yang Tepat!', headers: ['If you want to...', 'Text Type', 'Main Grammar'], rows: [
        ['Describe a person, pet, or place', 'Descriptive Text', 'Simple Present (is/are, has/have, Verb-s)'],
        ['Retell a past holiday/experience', 'Recount Text', 'Simple Past (was/were, Verb 2)'],
        ['Explain how to make/do something', 'Procedure Text', 'Imperative Verbs (Verb 1) + First, Next, Finally'],
      ]},
    ],
    activityTitle: 'Practice: Writing Short Texts',
    questions: [
      { text: 'If Alya wants to write about her unforgettable graduation camp last month, she should write a ... text using ...', opts: ['Recount; Simple Past Tense', 'Procedure; Imperatives', 'Descriptive; Future Tense', 'Notice; numbers only'], ans: 0, exp: 'Menceritakan pengalaman masa lalu = Recount Text (Simple Past).' },
      { text: 'A well-written short paragraph starts with a topic sentence and ends with a ...', opts: ['Closing / concluding sentence', 'Question mark only', 'Blank title', 'List of random words'], ans: 0, exp: 'Kalimat penutup merangkum kesan atau gagasan paragraf.' },
      { text: 'Which sentence correctly uses a connector to combine two ideas?', opts: ['I like reading books because they give me new knowledge.', 'I like reading books give me knowledge because.', 'Because I like reading.', 'Books reading like I.'], ans: 0, exp: '"Because" menghubungkan gagasan utama dengan alasannya secara tepat.' },
    ],
  },
  {
    topicCode: 'BIG-SD6-06', subSeq: 2,
    objectives: ['Siswa mampu menyunting kesalahan dasar penulisan Bahasa Inggris (capitalization, punctuation, spelling, verb tense).'],
    materialTitle: 'Editing Simple English Sentences',
    blocks: [
      { type: 'list', title: 'C-P-S-T Editing Checklist!', items: ['C — Capitalization: Awal kalimat, kata "I", nama orang, hari (Monday), bulan (August), kota (Gresik) WAJIB huruf kapital!', 'P — Punctuation: Titik (.) di akhir pernyataan, tanda tanya (?) di pertanyaan.', 'S — Spelling: Cek ejaan kata (friend bukan freind; because bukan becouse).', 'T — Tense: Past (Verb 2) untuk masa lalu, Present (Verb 1/s) untuk kebiasaan/fakta!'] },
    ],
    activityTitle: 'Practice: Editing Sentences',
    questions: [
      { text: 'Choose the sentence with NO capitalization or punctuation mistakes:', opts: ['on sunday, i went to gresik with bima', 'On Sunday, I went to Gresik with Bima.', 'On sunday, I went to Gresik with bima.', 'on Sunday, I went to gresik with Bima?'], ans: 1, exp: 'Awal kalimat, Sunday, I, Gresik, Bima kapital, dan diakhiri titik.' },
      { text: 'Fix the tense error: "Last Sunday, my sister buy a new bag."', opts: ['Last Sunday, my sister bought a new bag.', 'Last Sunday, my sister buys a new bag.', 'Last Sunday, my sister buying a new bag.', 'Last Sunday, my sister is buy a new bag.'], ans: 0, exp: 'Last Sunday (lampau) → buy berubah menjadi bought.' },
      { text: 'Fix the spelling error: "Bima is my best freind."', opts: ['Bima is my best friend.', 'Bima is my best frend.', 'Bima is my best friand.', 'Bima is my bast friend.'], ans: 0, exp: 'Ejaan benar: f-r-i-e-n-d (friend).' },
    ],
  },
  {
    topicCode: 'BIG-SD6-06', subSeq: 3,
    objectives: ['Siswa mampu mempresentasikan hasil tulisannya di depan kelas menggunakan ungkapan pembuka, isi, dan penutup Bahasa Inggris.'],
    materialTitle: 'Presenting Your Writing in English',
    blocks: [
      { type: 'story_panel', title: 'Simple English Presentation Script! 🔊', lines: [
        { speaker: 'Opening', avatar: '👋', text: 'Good morning, teachers and friends! Today, I would like to tell you about my favorite place in Gresik.' },
        { speaker: 'Body', avatar: '🗣️', text: '(Tell your 4–5 sentences clearly with a smile and eye contact!)' },
        { speaker: 'Closing', avatar: '🙏', text: 'That is all from me. Thank you very much for listening! Do you have any questions?' },
      ]},
    ],
    activityTitle: 'Practice: Presenting in English',
    questions: [
      { text: 'The most polite way to open an English presentation in the morning is...', opts: ['"Hey, listen now!"', '"Good morning, everyone! Today I would like to present about..."', '"Goodbye, friends!"', '"That is all, thank you."'], ans: 1, exp: 'Salam + sapaan ramah + menyebutkan topik presentasi.' },
      { text: 'The best expression to close your presentation is...', opts: ['"Thank you for your attention!" / "Thank you for listening!"', '"Good morning!"', '"May I go to the toilet?"', '"Turn left!"'], ans: 0, exp: 'Mengucapkan terima kasih atas perhatian pendengar.' },
      { text: 'If you feel nervous when speaking English in front of the class, what helps most?', opts: ['Take a deep breath, smile, and speak slowly and clearly', 'Run out of the room', 'Speak super fast while hiding your face', 'Stop talking'], ans: 0, exp: 'Tarik napas, tersenyum, dan berbicara tenang menjaga pelafalan jelas.' },
    ],
  },
];

upsertLessonsBatch('Kelas 6 SD — Bahasa Inggris (6 Bab, 18 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

