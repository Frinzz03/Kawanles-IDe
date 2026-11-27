import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: GETTING TO KNOW EACH OTHER
  {
    topicCode: 'BIG-SMP7-01', subSeq: 1,
    objectives: ['Students can introduce themselves politely in both formal and informal English contexts.'],
    materialTitle: 'Self-Introduction (Perkenalan Diri)',
    blocks: [
      { type: 'story_panel', title: 'First Day of Junior High School!', lines: [
        { speaker: 'Alya', avatar: '👧', text: 'Good morning, everyone! Let me introduce myself. My full name is Alya Putri, and you can call me Alya. I am twelve years old, and I live in Gresik. Nice to meet you all!' },
      ]},
      { type: 'visual_cards', title: 'Key Expressions (Klik 🔊)', cards: [
        { emoji: '👋', label: 'Let me introduce myself.', sub: 'Izinkan saya memperkenalkan diri.', speak: 'Let me introduce myself.', lang: 'en-US' },
        { emoji: '🏷️', label: 'You can call me ...', sub: 'Kamu bisa memanggilku ...', speak: 'You can call me Alya.', lang: 'en-US' },
        { emoji: '🤝', label: 'Pleased / Nice to meet you!', sub: 'Senang bertemu denganmu!', speak: 'Pleased to meet you!', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Self-Introduction',
    questions: [
      { text: 'Which expression is the most polite to start introducing yourself in front of a new class?', opts: ['"Hey, listen to me!"', '"Good morning, everyone. Let me introduce myself."', '"Goodbye, friends!"', '"What is your hobby?"'], ans: 1, exp: '"Let me introduce myself" sangat sopan dan lazim di kelas SMP.' },
      { text: 'Response to "Pleased to meet you!" is...', opts: ['Pleased to meet you too!', 'See you yesterday!', 'I am twelve.', 'Never mind.'], ans: 0, exp: 'Balasan sopannya adalah "Pleased/Nice to meet you too!"' },
      { text: 'Complete: "I ... from Gresik, East Java."', opts: ['am', 'is', 'are', 'live'], ans: 0, exp: '"I am from ..." (Saya berasal dari ...).' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-01', subSeq: 2,
    objectives: ['Students can ask about someone\'s identity (name, origin, address, age, school, hobbies) using WH-Questions.'],
    materialTitle: 'Asking Someone\'s Identity',
    blocks: [
      { type: 'table', title: 'Questions to Get to Know Someone', headers: ['Question', 'Meaning', 'Sample Answer'], rows: [
        ['Where are you from?', 'Kamu berasal dari mana?', 'I am from Gresik.'],
        ['Where do you live?', 'Di mana kamu tinggal?', 'I live on Jalan Kartini No. 12.'],
        ['What do you like doing in your free time?', 'Apa hobimu di waktu luang?', 'I like cycling and reading comics.'],
        ['What school do you go to?', 'Kamu bersekolah di mana?', 'I go to SMP Nusantara.'],
      ]},
    ],
    activityTitle: 'Practice: Asking Identity',
    questions: [
      { text: 'A: "Where ... you live?" — B: "I live in Kebomas, Gresik."', opts: ['are', 'do', 'does', 'is'], ans: 1, exp: 'Pertanyaan Simple Present dengan kata kerja "live" dan subjek "you" memakai "do".' },
      { text: 'A: "What is your favorite subject?" — Best answer:', opts: ['I live in Surabaya.', 'My favorite subject is Science.', 'I am 13 years old.', 'Nice to meet you.'], ans: 1, exp: '"Subject" = mata pelajaran.' },
      { text: 'Which preposition is used for a COMPLETE street address with a house number ("Jalan Pemuda No. 5")?', opts: ['in', 'on', 'at', 'under'], ans: 2, exp: 'Aturan alamat: IN + kota (in Gresik), ON + nama jalan (on Jl. Pemuda), AT + alamat lengkap bernomor (at Jl. Pemuda No. 5).' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-01', subSeq: 3,
    objectives: ['Students can fill out and understand personal information forms/ID cards accurately.'],
    materialTitle: 'Personal Information & Forms',
    blocks: [
      { type: 'flashcards', title: 'Form Vocabulary (Klik 🔊)', cards: [
        { emoji: '🪪', front: 'Full Name / Nickname', back: 'Nama lengkap / Nama panggilan', speak: 'full name, nickname', lang: 'en-US' },
        { emoji: '🎂', front: 'Place & Date of Birth', back: 'Tempat & Tanggal Lahir (e.g., Gresik, May 10th, 2013)', speak: 'place and date of birth', lang: 'en-US' },
        { emoji: '📍', front: 'Origin / Nationality', back: 'Asal daerah / Kewarganegaraan (Indonesian)', speak: 'origin, nationality', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Personal Information',
    questions: [
      { text: 'On a student registration form, "Nickname" asks for your...', opts: ['Nama panggilan', 'Alamat rumah', 'Tanggal lahir', 'Nama sekolah'], ans: 0, exp: 'Nickname = nama panggilan.' },
      { text: 'How do we say the birth date "17 Agustus" in English?', opts: ['August seventeen', 'August seventeenth (17th)', 'Seventeen of Augusts', 'August seven'], ans: 1, exp: 'Tanggal memakai ordinal numbers (1st, 2nd, 3rd, 17th).' },
      { text: 'People who are citizens of Indonesia have ... nationality.', opts: ['Indonesia', 'Indonesian', 'Indonesians', 'Indo'], ans: 1, exp: 'Nationality untuk warga Indonesia adalah "Indonesian".' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-01', subSeq: 4,
    objectives: ['Students can use social interaction expressions: thanking, apologizing, greeting, and leave-taking naturally.'],
    materialTitle: 'Social Interaction Expressions',
    blocks: [
      { type: 'table', title: '4 Key Social Expressions & Responses', headers: ['Function', 'Expression', 'Response'], rows: [
        ['Thanking', 'Thank you very much! / Thanks a lot!', "You're welcome! / Don't mention it! / My pleasure!"],
        ['Apologizing', "I'm really sorry for being late.", "That's okay. / Never mind. / Don't worry about it."],
        ['Greeting', 'How is it going? / How have you been?', "Pretty good, thanks! / I'm doing great!"],
        ['Leave-taking', 'Take care! / Catch you later!', 'You too! / See you!'],
      ]},
    ],
    activityTitle: 'Practice: Social Interaction',
    questions: [
      { text: 'Bima: "I\'m sorry I accidentally dropped your pen." — Raka: "..."', opts: ["That's okay, no problem!", 'You are welcome!', 'Good morning!', 'Nice to meet you!'], ans: 0, exp: 'Merespons permintaan maaf dengan "That\'s okay / Never mind / No problem."' },
      { text: 'Salsa: "Thanks a lot for helping me carry these books!" — Alya: "..."', opts: ['My pleasure! / Anytime!', 'I am sorry!', 'See you tomorrow!', 'How old are you?'], ans: 0, exp: '"My pleasure!" adalah balasan sopan dan alami untuk ucapan terima kasih.' },
      { text: 'Meaning of "Take care!" when saying goodbye to a friend is...', opts: ['Hati-hati di jalan / Jaga dirimu baik-baik!', 'Ambil kursinya!', 'Siapa namamu?', 'Maafkan saya!'], ans: 0, exp: '"Take care!" diucapkan dengan hangat saat berpisah.' },
    ],
  },

  // BAB 2: DESCRIBING PEOPLE
  {
    topicCode: 'BIG-SMP7-02', subSeq: 1,
    objectives: ['Students understand the generic structure (Identification & Description) and language features of a descriptive text about people.'],
    materialTitle: 'Descriptive Text About People',
    blocks: [
      { type: 'text', text: 'A descriptive text about a person aims to describe a SPECIFIC person (e.g., my mother, my idol, my best friend). It consists of: (1) IDENTIFICATION (who the person is) and (2) DESCRIPTION (appearance, personality, habits), using Simple Present Tense and adjectives.' },
    ],
    activityTitle: 'Practice: Descriptive Text',
    questions: [
      { text: 'What are the two generic structures of a descriptive text?', opts: ['Identification and Description', 'Orientation and Events', 'Goal and Steps', 'Prolog and Epilog'], ans: 0, exp: 'Descriptive text = Identification + Description.' },
      { text: 'Which tense is mainly used in descriptive texts?', opts: ['Simple Present Tense', 'Simple Past Tense', 'Past Continuous', 'Future Perfect'], ans: 0, exp: 'Fakta ciri fisik dan kebiasaan memakai Simple Present Tense.' },
      { text: 'Which sentence belongs to the DESCRIPTION part?', opts: ['Let me tell you about my older brother, Dimas.', 'He is tall, has short wavy hair, and loves playing badminton.', 'This is my father.', 'My best friend is Nadia.'], ans: 1, exp: 'Merinci ciri fisik dan hobi tokoh.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-02', subSeq: 2,
    objectives: ['Students can describe physical appearance accurately (height, build, hair, face, skin, eyes).'],
    materialTitle: 'Describing Physical Appearance',
    blocks: [
      { type: 'visual_cards', title: 'Appearance Vocabulary (Klik 🔊)', cards: [
        { emoji: '📏', label: 'Height & Build', sub: 'Tall, medium height, short; slim, athletic, well-built', speak: 'tall, medium height, slim, athletic', lang: 'en-US' },
        { emoji: '💇', label: 'Hair Style', sub: 'Short straight hair, long wavy hair, curly hair, bald', speak: 'straight hair, wavy hair, curly hair', lang: 'en-US' },
        { emoji: '😊', label: 'Face Features', sub: 'Oval face, pointed nose, dimples (lesung pipi), mustache', speak: 'oval face, pointed nose, dimples', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Physical Appearance',
    questions: [
      { text: 'Complete: "My aunt ... medium height and ... long wavy hair."', opts: ['is; has', 'has; is', 'are; have', 'is; have'], ans: 0, exp: 'Height/build pakai "is"; bagian tubuh/rambut pakai "has".' },
      { text: 'What does "dimples" mean in Indonesian?', opts: ['Lesung pipi', 'Kacamata', 'Kumis', 'Rambut keriting'], ans: 0, exp: 'Dimples = lesung pipi.' },
      { text: 'Correct adjective order: "She has ... hair."', opts: ['black long straight', 'long straight black', 'straight black long', 'black straight long'], ans: 1, exp: 'Urutan sifat rambut: panjang (long) → bentuk (straight) → warna (black).' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-02', subSeq: 3,
    objectives: ['Students can describe character and personality traits with supporting examples of behavior.'],
    materialTitle: 'Describing Personality Traits',
    blocks: [
      { type: 'flashcards', title: 'Personality Adjectives (Klik 🔊)', cards: [
        { emoji: '🤝', front: 'Generous (Dermawan)', back: 'Likes sharing with and helping others', speak: 'generous', lang: 'en-US' },
        { emoji: '🙏', front: 'Humble (Rendah hati)', back: 'Never boasts even when successful', speak: 'humble', lang: 'en-US' },
        { emoji: '🧠', front: 'Creative & Hardworking', back: 'Full of ideas & works diligently', speak: 'creative and hardworking', lang: 'en-US' },
        { emoji: '😊', front: 'Patient & Cheerful', back: 'Calm when teaching/waiting & always positive', speak: 'patient and cheerful', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Personality Traits',
    questions: [
      { text: 'Mr. Hasan never gets angry when students ask the same question twice. He is very...', opts: ['patient', 'rude', 'lazy', 'arrogant'], ans: 0, exp: '"Patient" = sabar.' },
      { text: 'Even though Alya won first place in Math, she never brags about it. She is...', opts: ['humble', 'selfish', 'arrogant', 'shy'], ans: 0, exp: '"Humble" = rendah hati (lawannya arrogant = sombong).' },
      { text: 'Someone who loves sharing food and helping friends in need is called...', opts: ['generous', 'greedy', 'careless', 'moody'], ans: 0, exp: '"Generous" = dermawan/murah hati.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-02', subSeq: 4,
    objectives: ['Students can identify extended family tree relationships in English (parents, siblings, uncle, aunt, cousin, nephew, niece).'],
    materialTitle: 'Family Members (Extended Family)',
    blocks: [
      { type: 'table', title: 'Extended Family Vocabulary', headers: ['English Term', 'Meaning'], rows: [
        ['Parents / Siblings', 'Orang tua / Saudara kandung (kakak & adik)'],
        ['Uncle / Aunt', 'Paman / Bibi'],
        ['Cousin', 'Sepupu (anak paman/bibi)'],
        ['Nephew / Niece', 'Keponakan laki-laki / Keponakan perempuan'],
        ['Grandparents / Grandchildren', 'Kakek-Nenek / Cucu-cucu'],
      ]},
    ],
    activityTitle: 'Practice: Family Members',
    questions: [
      { text: 'My sister\'s daughter (anak perempuan dari kakak perempuanku) is my...', opts: ['cousin', 'niece', 'nephew', 'aunt'], ans: 1, exp: 'Niece = keponakan perempuan; Nephew = keponakan laki-laki.' },
      { text: 'Brothers and sisters together are called...', opts: ['parents', 'siblings', 'cousins', 'neighbors'], ans: 1, exp: '"Siblings" = saudara kandung.' },
      { text: 'My father\'s brother is my...', opts: ['uncle', 'nephew', 'grandfather', 'cousin'], ans: 0, exp: 'Saudara laki-laki ayah/ibu adalah "uncle".' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-02', subSeq: 5,
    objectives: ['Students can mention various occupations/jobs and describe what people do using Simple Present Tense.'],
    materialTitle: 'Occupations and Workplaces',
    blocks: [
      { type: 'table', title: 'Common Occupations', headers: ['Occupation', 'What They Do'], rows: [
        ['Doctor / Nurse', 'Examines and treats sick people at a hospital or clinic'],
        ['Fish farmer / Fisherman', 'Raises fish in ponds (tambak) / catches fish in the sea'],
        ['Architect / Engineer', 'Designs buildings, bridges, or machines'],
        ['Chef / Baker', 'Cooks delicious meals or bakes bread and cakes'],
        ['Entrepreneur / Trader', 'Runs a business or sells goods at a market/shop'],
      ]},
    ],
    activityTitle: 'Practice: Occupations',
    questions: [
      { text: 'A person who designs buildings and houses is called an...', opts: ['architect', 'dentist', 'pilot', 'librarian'], ans: 0, exp: 'Architect = arsitek (pakai "an" karena diawali bunyi vokal).' },
      { text: 'My uncle repairs cars and motorcycles in a workshop. He is a...', opts: ['mechanic', 'chef', 'teacher', 'farmer'], ans: 0, exp: 'Mechanic = montir/mekanik.' },
      { text: 'Question to ask someone\'s job is...', opts: ['"What does your father do?"', '"How old is your father?"', '"Where is your father?"', '"Who is he?"'], ans: 0, exp: '"What do you do?" / "What does he do?" menanyakan pekerjaan.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-02', subSeq: 6,
    objectives: ['Students can use adjectives accurately in predicative ("She is kind") and attributive ("a kind teacher") positions.'],
    materialTitle: 'Using Adjectives Accurately',
    blocks: [
      { type: 'formula', name: '2 Posisi Kata Sifat (Adjective)', expression: '1. Sebelum kata benda: a SMART student  |  2. Setelah to be/linking verb: The student is SMART.', note: 'Adjective dalam Bahasa Inggris TIDAK pernah ditambah -s walaupun bendanya jamak ("two tall boys", BUKAN "two talls boys")!' },
    ],
    activityTitle: 'Practice: Adjectives',
    questions: [
      { text: 'Choose the grammatically CORRECT sentence:', opts: ['They are diligents students.', 'They are diligent students.', 'They are students diligent.', 'They is diligent students.'], ans: 1, exp: 'Adjective tidak diberi -s dan diletakkan sebelum noun: diligent students.' },
      { text: 'Opposite (antonym) of "hardworking" is...', opts: ['lazy', 'polite', 'smart', 'strong'], ans: 0, exp: 'Hardworking (pekerja keras) ↔ lazy (malas).' },
      { text: '"Miss Rina looks very cheerful today." The adjective in this sentence is...', opts: ['Miss Rina', 'looks', 'cheerful', 'today'], ans: 2, exp: 'Cheerful (ceria) adalah kata sifat setelah linking verb "looks".' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-02', subSeq: 7,
    objectives: ['Students can distinguish Possessive Adjectives (my, your, his, her, our, their) and Possessive Pronouns (mine, yours, his, hers, ours, theirs).'],
    materialTitle: 'Possessive Adjectives vs Possessive Pronouns',
    blocks: [
      { type: 'table', title: 'Perbandingan Kepemilikan (Wajib Kuasai!)', headers: ['Subject', 'Possessive Adjective (+ Noun)', 'Possessive Pronoun (Berdiri Sendiri)'], rows: [
        ['I', 'my bag', 'mine (This bag is mine.)'],
        ['You', 'your book', 'yours (Is that yours?)'],
        ['He', 'his bike', 'his (The blue bike is his.)'],
        ['She', 'her pen', 'hers (That pen is hers.)'],
        ['We / They', 'our class / their house', 'ours / theirs'],
      ]},
    ],
    activityTitle: 'Practice: Possessive Pronouns',
    questions: [
      { text: 'This backpack belongs to Alya. It is ...', opts: ['her', 'hers', 'she', 'she\'s'], ans: 1, exp: 'Berdiri sendiri tanpa kata benda di belakangnya → Possessive Pronoun: hers.' },
      { text: 'That is ... English dictionary, and the green one on the desk is ...', opts: ['my; yours', 'mine; your', 'me; you', 'I; yours'], ans: 0, exp: 'Diikuti benda ("dictionary") → my; berdiri sendiri di akhir → yours.' },
      { text: 'We bought these balls together. These balls are ...', opts: ['our', 'ours', 'us', 'we'], ans: 1, exp: 'Possessive pronoun dari "we" adalah "ours".' },
    ],
  },

  // BAB 3: DESCRIBING ANIMALS
  {
    topicCode: 'BIG-SMP7-03', subSeq: 1,
    objectives: ['Students can classify and describe animal characteristics (wild/tame, carnivore/herbivore/omnivore, mammal/reptile/bird).'],
    materialTitle: 'Animal Characteristics & Diets',
    blocks: [
      { type: 'visual_cards', title: 'Animal Categories (Klik 🔊)', cards: [
        { emoji: '🦁', label: 'Wild vs Tame / Domestic', sub: 'Hewan liar (tiger, komodo) vs jinak/peliharaan (cat, goat)', speak: 'wild animals, tame animals', lang: 'en-US' },
        { emoji: '🌿🥩', label: 'Herbivore / Carnivore / Omnivore', sub: 'Pemakan tumbuhan / daging / segala', speak: 'herbivore, carnivore, omnivore', lang: 'en-US' },
        { emoji: '🐾', label: 'Endangered Species', sub: 'Satwa langka terancam punah (orangutan, Javan rhino)', speak: 'endangered species', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Animal Characteristics',
    questions: [
      { text: 'A cow eats only grass and leaves. It is a...', opts: ['carnivore', 'herbivore', 'omnivore', 'reptile'], ans: 1, exp: 'Herbivore = pemakan tumbuhan.' },
      { text: 'The Javan rhino and Sumatran tiger are ... animals, so we must protect them.', opts: ['endangered', 'tame', 'pet', 'domestic'], ans: 0, exp: '"Endangered" = terancam punah.' },
      { text: 'Animals that stay awake and hunt at night (like owls and bats) are called...', opts: ['nocturnal', 'herbivores', 'pets', 'aquatic'], ans: 0, exp: 'Nocturnal = aktif di malam hari.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-03', subSeq: 2,
    objectives: ['Students can describe specific animal body parts and their functions (claws, mane, shell, pouch, horns, gills).'],
    materialTitle: 'Animal Body Parts & Functions',
    blocks: [
      { type: 'flashcards', title: 'More Animal Body Parts (Klik 🔊)', cards: [
        { emoji: '🐢', front: 'Shell (Cangkang/Tempurung)', back: 'A turtle hides inside its hard shell for protection.', speak: 'hard shell', lang: 'en-US' },
        { emoji: '🦅', front: 'Sharp Claws & Beak', back: 'An eagle catches prey with its sharp claws.', speak: 'sharp claws and beak', lang: 'en-US' },
        { emoji: '🦘', front: 'Pouch (Kantung)', back: 'A kangaroo carries its baby inside its pouch.', speak: 'pouch', lang: 'en-US' },
        { emoji: '🐃', front: 'Horns & Hooves', back: 'A buffalo has strong horns on its head.', speak: 'horns and hooves', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Animal Body Parts',
    questions: [
      { text: 'A turtle protects its soft body using its hard...', opts: ['shell', 'pouch', 'beak', 'mane'], ans: 0, exp: 'Shell = tempurung/cangkang keras.' },
      { text: 'A kangaroo carries its baby (joey) in its...', opts: ['wing', 'pouch', 'horn', 'fin'], ans: 1, exp: 'Pouch = kantung perut kanguru.' },
      { text: 'Lions have thick hair around their neck called a...', opts: ['mane', 'scale', 'beak', 'shell'], ans: 0, exp: 'Mane = surai singa jantan.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-03', subSeq: 3,
    objectives: ['Students can describe animal habitats (rainforest, ocean, desert, savanna, wetland/mangrove, polar region).'],
    materialTitle: 'Animal Habitats Around the World',
    blocks: [
      { type: 'table', title: 'Habitats & Their Animals', headers: ['Habitat', 'Meaning', 'Example Animals'], rows: [
        ['Rainforest / Jungle', 'Hutan hujan tropis', 'Orangutan, hornbill, tiger'],
        ['Ocean / Coral Reef', 'Lautan / Terumbu karang', 'Dolphin, sea turtle, clownfish'],
        ['Mangrove / Wetland', 'Hutan bakau / Rawa pesisir', 'Mud crab, heron, milkfish (bandeng)'],
        ['Savanna / Grassland', 'Padang rumput savana', 'Javan banteng (Baluran), zebra, giraffe'],
        ['Desert / Polar', 'Gurun / Kutub', 'Camel (desert); penguin & polar bear (polar)'],
      ]},
    ],
    activityTitle: 'Practice: Animal Habitats',
    questions: [
      { text: 'Orangutans live high up in the trees of tropical ... in Kalimantan and Sumatra.', opts: ['deserts', 'rainforests', 'polar regions', 'oceans'], ans: 1, exp: 'Habitat asli orangutan adalah hutan hujan tropis (rainforest).' },
      { text: 'Camels can survive in the hot and dry ... because they can store fat in their humps.', opts: ['desert', 'ocean', 'mangrove', 'river'], ans: 0, exp: 'Desert = gurun pasir.' },
      { text: 'Mangrove forests along the coast provide an important habitat for crabs and young...', opts: ['fish', 'camels', 'penguins', 'polar bears'], ans: 0, exp: 'Ekosistem mangrove menjadi tempat asuhan ikan dan kepiting.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-03', subSeq: 4,
    objectives: ['Students can express animal abilities using "can" and "cannot (can\'t)" accurately.'],
    materialTitle: 'Animal Abilities (Can / Can\'t)',
    blocks: [
      { type: 'formula', name: 'Modal "Can / Can\'t"', expression: 'Subject + can / can\'t + Verb 1 (tanpa -s!)', note: 'Contoh: "A penguin can swim very fast, but it can\'t fly!"' },
    ],
    activityTitle: 'Practice: Animal Abilities',
    questions: [
      { text: 'A dolphin ... swim fast and jump high, but it ... walk on land.', opts: ['can; can\'t', 'can\'t; can', 'cans; can\'t', 'is; isn\'t'], ans: 0, exp: 'Setelah modal "can/can\'t" selalu Verb 1 tanpa -s.' },
      { text: 'A cheetah can ... up to 100 km per hour.', opts: ['run', 'runs', 'running', 'ran'], ans: 0, exp: 'Can + Verb 1: can run.' },
      { text: 'Which bird CANNOT fly, even though it has wings?', opts: ['Eagle', 'Penguin and ostrich', 'Pigeon', 'Owl'], ans: 1, exp: 'Penguin dan burung unta (ostrich) tidak bisa terbang.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-03', subSeq: 5,
    objectives: ['Students can write a cohesive paragraph describing an animal using Simple Present Tense (singular vs plural verbs).'],
    materialTitle: 'Describing Animals in Simple Present Tense',
    blocks: [
      { type: 'story_panel', title: 'Sample Text: The Komodo Dragon', lines: [
        { speaker: 'Report', avatar: '🦎', text: 'The Komodo dragon is the largest lizard in the world. It lives on Komodo Island and nearby islands in East Nusa Tenggara, Indonesia. It has rough grey scales, strong legs, and a forked tongue. It is a carnivore and hunts deer and wild pigs. We must protect this amazing Indonesian wildlife!' },
      ]},
    ],
    activityTitle: 'Practice: Describing Animals',
    questions: [
      { text: 'Complete with correct Simple Present verbs: "A bandeng fish ... (live) in brackish water and ... (eat) algae."', opts: ['live; eat', 'lives; eats', 'living; eating', 'is live; is eat'], ans: 1, exp: 'Subjek tunggal ("A bandeng fish" = It) → Verb 1 + s: lives, eats.' },
      { text: 'Now make it PLURAL: "Bandeng fish ... in ponds and ... algae."', opts: ['live; eat', 'lives; eats', 'living; eat', 'is live; eats'], ans: 0, exp: 'Jamak (They) → Verb 1 tanpa -s: live, eat.' },
      { text: 'Based on the text above, what does the Komodo dragon use to smell and hunt?', opts: ['Its forked tongue (lidah bercabang)', 'Its wings', 'Its shell', 'Its pouch'], ans: 0, exp: 'Tertulis: "a forked tongue".' },
    ],
  },

  // BAB 4: DESCRIBING PLACES
  {
    topicCode: 'BIG-SMP7-04', subSeq: 1,
    objectives: ['Students can structure a descriptive paragraph about a place (location, atmosphere, main attractions).'],
    materialTitle: 'Describing Places Effectively',
    blocks: [
      { type: 'list', title: '4 Points to Describe Any Place Well', items: ['1. Name & Location: Where is it located? ("It is located in...")', '2. General Impression: What is it famous for? ("It is famous for...")', '3. Facilities / Features: What can we see there? ("There is / There are...")', '4. Activities & Feeling: What can visitors do there?'] },
    ],
    activityTitle: 'Practice: Describing Places',
    questions: [
      { text: '"Mount Bromo is ... in East Java, Indonesia." Best verb to complete is...', opts: ['located', 'eat', 'sleep', 'run'], ans: 0, exp: '"Is located in..." = terletak di...' },
      { text: '"Gresik is ... for its pudak cake and bandeng fish." Best adjective is...', opts: ['famous / well-known', 'hungry', 'sleepy', 'tall'], ans: 0, exp: '"Famous for..." = terkenal karena...' },
      { text: 'Which sentence describes the ATMOSPHERE of a place?', opts: ['The air in the morning is cool, fresh, and peaceful.', 'It has 5 doors.', 'It is 10 meters long.', 'Open at 8 a.m.'], ans: 0, exp: 'Cool, fresh, peaceful melukiskan suasana tempat.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-04', subSeq: 2,
    objectives: ['Students can describe geographic locations using compass points (north, south, east, west) and distance expressions.'],
    materialTitle: 'Describing Geographic Locations',
    blocks: [
      { type: 'visual_cards', title: 'Compass & Location Phrases (Klik 🔊)', cards: [
        { emoji: '🧭', label: 'In the north / south / east / west of ...', sub: 'Gresik is in the northern part of East Java.', speak: 'in the northern part of East Java', lang: 'en-US' },
        { emoji: '🚗', label: 'About 30 minutes from ...', sub: 'My school is about 10 minutes from my house.', speak: 'about ten minutes from my house', lang: 'en-US' },
        { emoji: '📍', label: 'In the center of town', sub: 'Di pusat kota', speak: 'in the center of town', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Locations',
    questions: [
      { text: 'Surabaya is located to the ... (timur) of Gresik.', opts: ['west', 'east', 'north', 'south'], ans: 1, exp: 'East = timur; West = barat; North = utara; South = selatan.' },
      { text: 'Lamongan is located to the ... (barat) of Gresik.', opts: ['west', 'east', 'north', 'south'], ans: 0, exp: 'West = barat.' },
      { text: '"My school is just 500 meters ... my house." Best preposition is...', opts: ['from', 'in', 'under', 'at'], ans: 0, exp: 'Jarak antar dua titik memakai "from" (dari).' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-04', subSeq: 3,
    objectives: ['Students can name school and public facilities (science lab, library, sports field, auditorium, infirmary/UKS, prayer room).'],
    materialTitle: 'School and Public Facilities',
    blocks: [
      { type: 'visual_cards', title: 'Junior High School Facilities (Klik 🔊)', cards: [
        { emoji: '🔬', label: 'Science Laboratory', sub: 'Laboratorium IPA untuk praktikum', speak: 'science laboratory', lang: 'en-US' },
        { emoji: '💻', label: 'Computer Lab & Library', sub: 'Lab Komputer & Perpustakaan', speak: 'computer lab and library', lang: 'en-US' },
        { emoji: '🏥', label: 'School Infirmary / Health Room', sub: 'Ruang UKS', speak: 'school infirmary', lang: 'en-US' },
        { emoji: '⚽', label: 'Sports Field & Prayer Room', sub: 'Lapangan olahraga & Musala', speak: 'sports field and prayer room', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Facilities',
    questions: [
      { text: 'Students do Physics and Biology experiments in the...', opts: ['science laboratory', 'canteen', 'parking lot', 'infirmary'], ans: 0, exp: 'Science laboratory = laboratorium IPA.' },
      { text: 'If a student feels dizzy or gets a small scratch at school, they rest in the...', opts: ['school infirmary (UKS)', 'computer lab', 'auditorium', 'garage'], ans: 0, exp: 'Infirmary / school health room = ruang UKS.' },
      { text: 'A large hall at school used for big meetings, graduations, or performances is called an...', opts: ['auditorium / hall', 'toilet', 'kitchen', 'corridor'], ans: 0, exp: 'Auditorium = aula pertemuan/pertunjukan.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-04', subSeq: 4,
    objectives: ['Students can use advanced prepositions of place (across from, next to, in the corner of, in the middle of, surrounded by).'],
    materialTitle: 'Prepositions of Place in School/Town Maps',
    blocks: [
      { type: 'flashcards', title: 'Useful Place Prepositions (Klik 🔊)', cards: [
        { emoji: '🎯', front: 'In the middle of ...', back: 'Di tengah-tengah (A flagpole is in the middle of the yard.)', speak: 'in the middle of', lang: 'en-US' },
        { emoji: '📐', front: 'In the corner of ...', back: 'Di pojok/sudut (The reading corner is in the corner of the room.)', speak: 'in the corner of', lang: 'en-US' },
        { emoji: '🌳', front: 'Surrounded by ...', back: 'Dikelilingi oleh (The park is surrounded by shady trees.)', speak: 'surrounded by', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Prepositions of Place',
    questions: [
      { text: 'The school flagpole (tiang bendera) stands ... the schoolyard.', opts: ['in the middle of', 'under', 'inside the roof', 'between one tree'], ans: 0, exp: '"In the middle of" = di tengah-tengah lapangan.' },
      { text: '"Our school is ... by green trees and neat flower gardens."', opts: ['surrounded', 'under', 'across', 'behind of'], ans: 0, exp: '"Surrounded by..." = dikelilingi oleh...' },
      { text: 'The computer lab is ... the library and the teachers\' room.', opts: ['between', 'in', 'on', 'under'], ans: 0, exp: 'Di antara dua lokasi memakai "between ... and ..."' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-04', subSeq: 5,
    objectives: ['Students can choose rich adjectives to describe places (spacious, cozy, crowded, peaceful, historic, modern, tidy).'],
    materialTitle: 'Rich Adjectives for Places',
    blocks: [
      { type: 'flashcards', title: 'Upgrade Your Place Adjectives! (Klik 🔊)', cards: [
        { emoji: '🏛️', front: 'Spacious (Luas & Lega)', back: 'Better than just "big"! (Our classroom is spacious.)', speak: 'spacious', lang: 'en-US' },
        { emoji: '🛋️', front: 'Cozy / Comfortable', back: 'Nyaman dan hangat', speak: 'cozy, comfortable', lang: 'en-US' },
        { emoji: '🌿', front: 'Peaceful ↔ Crowded', back: 'Tenang/damai ↔ Ramai penuh sesak', speak: 'peaceful and crowded', lang: 'en-US' },
        { emoji: '🏺', front: 'Historic ↔ Modern', back: 'Bersejarah ↔ Modern', speak: 'historic and modern', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Place Adjectives',
    questions: [
      { text: 'A classroom that has plenty of room to move comfortably is...', opts: ['spacious', 'narrow', 'crowded', 'tiny'], ans: 0, exp: 'Spacious = luas/lega.' },
      { text: 'On Sunday morning, the traditional market is very ... with buyers and sellers.', opts: ['crowded', 'empty', 'silent', 'dark'], ans: 0, exp: 'Crowded = ramai/padat pengunjung.' },
      { text: 'Opposite of "noisy and messy" for a library is...', opts: ['quiet and tidy', 'crowded and dirty', 'hot and small', 'old and broken'], ans: 0, exp: 'Quiet = tenang, tidy = rapi.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-04', subSeq: 6,
    objectives: ['Students can read and produce a complete descriptive text about a familiar place (school, bedroom, or town landmark).'],
    materialTitle: 'Describing Familiar Places',
    blocks: [
      { type: 'story_panel', title: 'Sample Description: My School Library', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'My favorite place at school is the library. It is located on the second floor, next to the computer lab. The room is spacious, bright, and air-conditioned. There are neat wooden bookshelves filled with science books, novels, and encyclopedias. In the corner, there is a cozy reading area with colorful cushions. I love spending my break time there because it is quiet and peaceful!' },
      ]},
    ],
    activityTitle: 'Practice: Familiar Places',
    questions: [
      { text: 'Where is Bima\'s school library located?', opts: ['On the first floor', 'On the second floor, next to the computer lab', 'Behind the canteen', 'Outside the gate'], ans: 1, exp: 'Tertulis: "on the second floor, next to the computer lab."' },
      { text: 'Why does Bima love spending his break time in the library?', opts: ['Because it is quiet and peaceful', 'Because he can play football there', 'Because he buys snacks there', 'Because it is noisy'], ans: 0, exp: 'Tertulis di kalimat terakhir.' },
      { text: 'The phrase "cozy reading area" means a reading area that feels...', opts: ['Comfortable and welcoming', 'Uncomfortable', 'Cold and dark', 'Dirty'], ans: 0, exp: 'Cozy = nyaman dan akrab.' },
    ],
  },

  // BAB 5: DAILY ACTIVITIES AND HABITS
  {
    topicCode: 'BIG-SMP7-05', subSeq: 1,
    objectives: ['Students can describe structured weekday vs weekend routines clearly in English.'],
    materialTitle: 'Daily Routines (Weekdays vs Weekends)',
    blocks: [
      { type: 'table', title: 'Useful Routine Expressions', headers: ['Time', 'Weekday Routine', 'Weekend Routine'], rows: [
        ['Morning', 'Wake up at 5 a.m., get ready for school', 'Jog at the park, help parents clean the house'],
        ['Afternoon', 'Attend classes, join extracurriculars', 'Visit grandparents, practice hobbies'],
        ['Evening', 'Review lessons, pack school bag, sleep at 9:30 p.m.', 'Watch a movie with family'],
      ]},
    ],
    activityTitle: 'Practice: Daily Routines',
    questions: [
      { text: 'Monday through Friday are called ..., while Saturday and Sunday are the ...', opts: ['weekdays; weekend', 'weekend; weekdays', 'holidays; mornings', 'nights; days'], ans: 0, exp: 'Weekdays = hari kerja/sekolah (Senin–Jumat); Weekend = akhir pekan.' },
      { text: 'Before going to bed, Alya always ... her school bag for tomorrow.', opts: ['packs', 'cooks', 'swims', 'drives'], ans: 0, exp: '"Pack the bag" = menyiapkan/mengemas tas.' },
      { text: '"I review my lessons at 7 p.m." The verb "review" means...', opts: ['Mengulang kembali pelajaran', 'Membuang buku', 'Tidur siang', 'Bermain game'], ans: 0, exp: 'Review lessons = mengulang pelajaran.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-05', subSeq: 2,
    objectives: ['Students can talk about hobbies using "like / love / enjoy + Verb-ing" accurately.'],
    materialTitle: 'Talking About Hobbies (Like/Enjoy + V-ing)',
    blocks: [
      { type: 'formula', name: 'Pola Menyatakan Hobi', expression: 'like / love / enjoy / be fond of  +  Verb-ing!', note: 'Contoh: "I enjoy playing badminton", "She loves drawing comics", "We like cycling together!"' },
    ],
    activityTitle: 'Practice: Hobbies',
    questions: [
      { text: 'Raka enjoys ... (bermain) chess with his father on Sunday afternoons.', opts: ['play', 'plays', 'playing', 'played'], ans: 2, exp: 'Kata kerja "enjoy" selalu diikuti Verb-ing (gerund): enjoys playing.' },
      { text: 'A: "What do you do in your spare time?" — Best answer:', opts: ['I am fond of gardening and photography.', 'I am in grade 7.', 'It is seven o\'clock.', 'Turn right!'], ans: 0, exp: '"Spare time / free time" = waktu luang.' },
      { text: 'My sister ... reading mystery novels every weekend.', opts: ['love', 'loves', 'loving', 'is love'], ans: 1, exp: 'Subjek tunggal "My sister" (She) → loves.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-05', subSeq: 3,
    objectives: ['Students can describe their school timetable, subjects, and extracurricular clubs in English.'],
    materialTitle: 'School Activities & Timetable',
    blocks: [
      { type: 'visual_cards', title: 'School Subjects & Clubs (Klik 🔊)', cards: [
        { emoji: '📐', label: 'Mathematics & Science', sub: 'Matematika & IPA', speak: 'Mathematics and Science', lang: 'en-US' },
        { emoji: '🌍', label: 'Social Studies & Civic Ed', sub: 'IPS & PPKn', speak: 'Social Studies', lang: 'en-US' },
        { emoji: '🏕️', label: 'Scout / Youth Red Cross (PMR)', sub: 'Pramuka / PMR', speak: 'Scout and Youth Red Cross', lang: 'en-US' },
        { emoji: '🗣️', label: 'English Club & Robotics', sub: 'Klub Bahasa Inggris & Robotika', speak: 'English Club and Robotics', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: School Activities',
    questions: [
      { text: 'We have a flag ceremony ... Monday morning at 7:00 a.m.', opts: ['in', 'on', 'at', 'under'], ans: 1, exp: 'Nama hari ("Monday") selalu menggunakan preposisi "on"!' },
      { text: 'The English name for "Pramuka" extracurricular is...', opts: ['Scout', 'Choir', 'Basketball', 'Drama'], ans: 0, exp: 'Scout = Pramuka; Choir = paduan suara.' },
      { text: 'Students learn about geography, economy, and history in ... class.', opts: ['Social Studies (IPS)', 'Physical Education', 'Art', 'Music'], ans: 0, exp: 'Social Studies = IPS.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-05', subSeq: 4,
    objectives: ['Students can form positive, negative (don\'t/doesn\'t), and interrogative (Do/Does...?) Simple Present Tense sentences accurately.'],
    materialTitle: 'Simple Present Tense: (+), (−), and (?)',
    blocks: [
      { type: 'table', title: 'Rumus Lengkap Simple Present Tense', headers: ['Form', 'I / You / We / They', 'He / She / It'], rows: [
        ['Positive (+)', 'They study English.', 'She studies English. (+s/es/ies)'],
        ['Negative (−)', "They don't study late.", "She doesn't study late. (kembali Verb 1!)"],
        ['Question (?)', 'Do they study here?', 'Does she study here? (kembali Verb 1!)'],
      ]},
      { type: 'misconception', wrong: 'Menulis "She doesn\'t goes" atau "Does he plays?".', right: 'Begitu ada DOES / DOESN\'T, huruf -s/-es pada kata kerjanya HILANG (kembali ke Verb 1): "She doesn\'t go", "Does he play?"!' },
    ],
    activityTitle: 'Practice: Simple Present Tense',
    questions: [
      { text: 'Bima ... (tidak suka) waking up late on school days.', opts: ["don't like", "doesn't like", "doesn't likes", "isn't like"], ans: 1, exp: 'Subjek tunggal Bima (He) → doesn\'t + Verb 1 (doesn\'t like).' },
      { text: '"... your brother join the futsal club?" — "Yes, he does."', opts: ['Do', 'Does', 'Is', 'Are'], ans: 1, exp: 'Your brother (He) + kata kerja "join" → Does.' },
      { text: 'Change into negative: "Salsa watches cartoons every afternoon."', opts: ["Salsa doesn't watch cartoons every afternoon.", "Salsa don't watch cartoons.", "Salsa doesn't watches cartoons.", "Salsa isn't watches cartoons."], ans: 0, exp: 'Doesn\'t + Verb 1 dasar ("watch").' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-05', subSeq: 5,
    objectives: ['Students can use Adverbs of Frequency (always, usually, often, sometimes, rarely, never) in the correct sentence position.'],
    materialTitle: 'Adverbs of Frequency',
    blocks: [
      { type: 'table', title: 'Skala Frekuensi (100% → 0%)', headers: ['Adverb', 'Persentase Kira-Kira', 'Arti'], rows: [
        ['Always', '100%', 'Selalu'],
        ['Usually', '80–90%', 'Biasanya'],
        ['Often', '60–70%', 'Sering'],
        ['Sometimes', '40–50%', 'Kadang-kadang'],
        ['Rarely / Seldom', '10–20%', 'Jarang'],
        ['Never', '0%', 'Tidak pernah'],
      ]},
      { type: 'formula', name: 'Posisi Adverb of Frequency', expression: 'SEBELUM kata kerja utama (I ALWAYS study)  |  SESUDAH to be (She is ALWAYS on time!)', note: 'Ingat bedanya! Sebelum Verb biasa, sesudah am/is/are!' },
    ],
    activityTitle: 'Practice: Adverbs of Frequency',
    questions: [
      { text: 'Choose the sentence with the CORRECT word order:', opts: ['Alya arrives always early at school.', 'Alya always arrives early at school.', 'Always Alya arrives early.', 'Alya arrives early always.'], ans: 1, exp: 'Adverb of frequency diletakkan SEBELUM kata kerja utama: always arrives.' },
      { text: 'Choose the CORRECT sentence with "to be (is)":', opts: ['He always is polite to teachers.', 'He is always polite to teachers.', 'He polite is always.', 'Always is he polite.'], ans: 1, exp: 'Dengan "to be", adverb diletakkan SESUDAH is/am/are: is always.' },
      { text: 'Raka comes to school on time 100% of the time. He is ... late.', opts: ['always', 'often', 'never', 'usually'], ans: 2, exp: 'Selalu tepat waktu berarti TIDAK PERNAH (never) terlambat.' },
    ],
  },

  // BAB 6: READING AND LISTENING FOR INFORMATION
  {
    topicCode: 'BIG-SMP7-06', subSeq: 1,
    objectives: ['Students can identify the main idea and communicative purpose of short functional texts (schedules, notices, short passages).'],
    materialTitle: 'Finding Main Ideas & Text Purpose',
    blocks: [
      { type: 'story_panel', title: 'Short Passage: Cycling to School', lines: [
        { speaker: 'Text', avatar: '🚲', text: 'Many students at SMP Harapan ride bicycles to school every day. Cycling keeps their bodies fit and strong. It also helps reduce air pollution around the school area. Besides, students can save money because bicycles do not need gasoline.' },
      ]},
    ],
    activityTitle: 'Practice: Main Idea & Purpose',
    questions: [
      { text: 'What is the main idea of the passage above?', opts: ['How to repair a bicycle', 'The benefits of riding bicycles to school', 'Prices of new bicycles', 'Traffic rules in cities'], ans: 1, exp: 'Seluruh kalimat menjelaskan manfaat bersepeda ke sekolah (sehat, bebas polusi, hemat).' },
      { text: 'The word "It" in "It also helps reduce air pollution" refers to...', opts: ['The school', 'Cycling (riding bicycles)', 'Gasoline', 'Money'], ans: 1, exp: 'Kata rujukan "It" merujuk kembali pada aktivitas cycling.' },
      { text: 'How many benefits of cycling are mentioned in the text?', opts: ['1', '2', '3 (healthy body, less air pollution, saves money)', '5'], ans: 2, exp: 'Tiga manfaat disebut jelas dalam teks.' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-06', subSeq: 2,
    objectives: ['Students can scan tables, school schedules, and announcements to extract exact specific details accurately.'],
    materialTitle: 'Scanning for Specific Information',
    blocks: [
      { type: 'table', title: 'SMP Nusantara Club Schedule', headers: ['Day', 'Club', 'Time', 'Room / Venue'], rows: [
        ['Tuesday', 'English Club', '14:30 – 16:00', 'Language Room'],
        ['Wednesday', 'Science Club', '14:30 – 16:00', 'Science Lab'],
        ['Friday', 'Scout (Pramuka)', '14:00 – 16:00', 'Schoolyard'],
      ]},
    ],
    activityTitle: 'Practice: Specific Details',
    questions: [
      { text: 'Based on the schedule above, where does the Science Club meet?', opts: ['In the Language Room', 'In the Science Lab', 'In the Schoolyard', 'In the Library'], ans: 1, exp: 'Baris Wednesday: Science Club → Science Lab.' },
      { text: 'Which club has the LONGEST duration (2 hours)?', opts: ['English Club', 'Science Club', 'Scout (14:00 – 16:00)', 'All are 1 hour'], ans: 2, exp: 'Scout berlangsung 2 jam (14.00–16.00), lainnya 1,5 jam.' },
      { text: 'If Alya wants to practice speaking English, on which day should she stay after school?', opts: ['Tuesday', 'Wednesday', 'Friday', 'Monday'], ans: 0, exp: 'English Club diadakan hari Selasa (Tuesday).' },
    ],
  },
  {
    topicCode: 'BIG-SMP7-06', subSeq: 3,
    objectives: ['Students can comprehend spoken/written instructions and everyday school conversations accurately.'],
    materialTitle: 'Understanding Instructions & Short Conversations',
    blocks: [
      { type: 'story_panel', title: 'Conversation at the School Library', lines: [
        { speaker: 'Librarian', avatar: '👩‍💼', text: 'Good afternoon! May I help you?' },
        { speaker: 'Raka', avatar: '👦', text: 'Good afternoon, Ma\'am. I would like to borrow this Geography atlas.' },
        { speaker: 'Librarian', avatar: '👩‍💼', text: 'Sure! Please show me your student card and return the book within seven days.' },
        { speaker: 'Raka', avatar: '👦', text: 'Okay, Ma\'am. Here is my card. Thank you!' },
      ]},
    ],
    activityTitle: 'Practice: Instructions & Conversations',
    questions: [
      { text: 'Based on the dialogue, what must Raka show to borrow the book?', opts: ['His student card', 'His homework', 'Money', 'His uniform'], ans: 0, exp: 'Pustakawan berkata: "Please show me your student card."' },
      { text: 'How long may Raka keep the Geography atlas?', opts: ['For 3 days', 'For 7 days (one week)', 'For 1 month', 'Forever'], ans: 1, exp: '"Within seven days" = maksimal 7 hari.' },
      { text: 'Where does the conversation most likely take place?', opts: ['At the school library', 'At the canteen', 'At a hospital', 'At a bus station'], ans: 0, exp: 'Meminjam buku atlas bersama pustakawan terjadi di perpustakaan.' },
    ],
  },
];

upsertLessonsBatch('Kelas 7 SMP — Bahasa Inggris (6 Bab, 30 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

