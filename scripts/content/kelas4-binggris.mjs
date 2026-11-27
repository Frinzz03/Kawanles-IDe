import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: DESCRIBING LOCATION
  {
    topicCode: 'BIG-SD4-01', subSeq: 1,
    objectives: ['Siswa mampu menanyakan lokasi benda menggunakan "Where is ...?" (tunggal) dan "Where are ...?" (jamak).'],
    materialTitle: 'Asking About Location (Where is / Where are)',
    blocks: [
      { type: 'story_panel', title: 'Mencari Barang yang Hilang!', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Where is my ruler, Alya?' },
        { speaker: 'Alya', avatar: '👧', text: 'It is under your book! And where are your colored pencils?' },
        { speaker: 'Bima', avatar: '👦', text: 'Oh, they are in my pencil case!' },
      ]},
      { type: 'formula', name: 'Tunggal vs Jamak', expression: '1 benda: Where IS the ...? → It IS ...  |  >1 benda: Where ARE the ...? → They ARE ...', note: 'Perhatikan akhiran -s pada benda jamak (books, pencils)!' },
    ],
    activityTitle: 'Practice: Asking Location',
    questions: [
      { text: 'Lengkapi pertanyaan untuk 1 tas: "Where ... my bag?"', opts: ['am', 'is', 'are', 'in'], ans: 1, exp: '"My bag" tunggal (1 benda) → menggunakan "is".' },
      { text: 'Lengkapi pertanyaan untuk beberapa buku: "Where ... the books?"', opts: ['is', 'am', 'are', 'on'], ans: 2, exp: '"Books" jamak (>1) → menggunakan "are".' },
      { text: 'A: "Where is the cat?" — Jawaban yang tepat adalah...', opts: ['They are on the sofa.', 'It is on the sofa.', 'I am nine.', 'Good morning.'], ans: 1, exp: '1 ekor kucing (tunggal) diganti dengan "It is...".' },
    ],
  },
  {
    topicCode: 'BIG-SD4-01', subSeq: 2,
    objectives: ['Siswa mampu menunjukkan letak benda di sekitar menggunakan kalimat lengkap Bahasa Inggris.'],
    materialTitle: 'Showing Where Things Are',
    blocks: [
      { type: 'flashcards', title: 'Baca & Dengarkan Kalimat Lokasi (Klik 🔊)', cards: [
        { emoji: '📘', front: 'Buku ada di atas meja', back: 'The book is on the table.', speak: 'The book is on the table.', lang: 'en-US' },
        { emoji: '✏️', front: 'Pensil ada di dalam kotak pensil', back: 'The pencil is in the pencil case.', speak: 'The pencil is in the pencil case.', lang: 'en-US' },
        { emoji: '⚽', front: 'Bola ada di bawah kursi', back: 'The ball is under the chair.', speak: 'The ball is under the chair.', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Showing Location',
    questions: [
      { text: 'Susunan kalimat yang benar dari "on – the – is – lamp – the – desk" adalah...', opts: ['The lamp is on the desk.', 'The desk on is the lamp.', 'Is the lamp on desk the.', 'On the desk the lamp is.'], ans: 0, exp: 'Subjek (The lamp) + is + preposisi (on) + lokasi (the desk).' },
      { text: '"The shoes are under the bed." Artinya sepatu-sepatu itu berada ... tempat tidur.', opts: ['Di atas', 'Di bawah', 'Di dalam', 'Di belakang'], ans: 1, exp: '"Under" = di bawah.' },
      { text: 'Jika ada 2 apel di dalam keranjang, kalimat yang tepat adalah...', opts: ['The apples is in the basket.', 'The apples are in the basket.', 'The apple are on the basket.', 'It is in the basket.'], ans: 1, exp: 'Jamak ("apples") memakai "are" dan "in" (di dalam).' },
    ],
  },
  {
    topicCode: 'BIG-SD4-01', subSeq: 3,
    objectives: ['Siswa mampu menggunakan 6 preposisi tempat: in, on, under, beside, behind, dan in front of.'],
    materialTitle: 'Prepositions: In, On, Under, Beside, Behind, In Front Of',
    blocks: [
      { type: 'visual_cards', title: '6 Kata Depan Lokasi Wajib Hafal! (Klik 🔊)', cards: [
        { emoji: '📦', label: 'In', sub: 'Di dalam (in the box)', speak: 'in, in the box', lang: 'en-US' },
        { emoji: '⬆️', label: 'On', sub: 'Di atas menempel (on the table)', speak: 'on, on the table', lang: 'en-US' },
        { emoji: '⬇️', label: 'Under', sub: 'Di bawah (under the chair)', speak: 'under, under the chair', lang: 'en-US' },
        { emoji: '↔️', label: 'Beside / Next to', sub: 'Di samping / sebelah (beside the bag)', speak: 'beside, next to', lang: 'en-US' },
        { emoji: '🔙', label: 'Behind', sub: 'Di belakang (behind the door)', speak: 'behind, behind the door', lang: 'en-US' },
        { emoji: '🔜', label: 'In front of', sub: 'Di depan (in front of the class)', speak: 'in front of, in front of the class', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Prepositions of Place',
    questions: [
      { text: 'Papan tulis berada DI DEPAN kelas. Dalam Bahasa Inggris: "The whiteboard is ... the classroom."', opts: ['behind', 'under', 'in front of', 'in'], ans: 2, exp: '"In front of" artinya di depan.' },
      { text: 'Raka duduk DI SAMPING Bima. Kata preposisi yang tepat adalah...', opts: ['under', 'beside', 'on', 'in'], ans: 1, exp: '"Beside" artinya di samping.' },
      { text: 'Kucing bersembunyi DI BELAKANG pintu: "The cat is ... the door."', opts: ['on', 'in front of', 'behind', 'under'], ans: 2, exp: '"Behind" artinya di belakang.' },
    ],
  },

  // BAB 2: THINGS AROUND THE CLASSROOM
  {
    topicCode: 'BIG-SD4-02', subSeq: 1,
    objectives: ['Siswa mampu menyebutkan kosakata benda-benda di dalam ruang kelas dalam Bahasa Inggris.'],
    materialTitle: 'Classroom Objects (Benda di Kelas)',
    blocks: [
      { type: 'visual_cards', title: 'Benda-Benda di Ruang Kelas (Klik 🔊)', cards: [
        { emoji: '🧑‍🏫', label: 'Whiteboard & Marker', sub: 'Papan tulis putih & spidol', speak: 'whiteboard and marker', lang: 'en-US' },
        { emoji: '🪑', label: 'Desk & Chair', sub: 'Meja belajar & kursi', speak: 'desk and chair', lang: 'en-US' },
        { emoji: '🗺️', label: 'Map & Globe', sub: 'Peta & bola dunia', speak: 'map and globe', lang: 'en-US' },
        { emoji: '🕒', label: 'Clock & Calendar', sub: 'Jam dinding & kalender', speak: 'clock and calendar', lang: 'en-US' },
        { emoji: '🗑️', label: 'Trash bin & Broom', sub: 'Tempat sampah & sapu', speak: 'trash bin and broom', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Classroom Objects',
    questions: [
      { text: 'Bahasa Inggris dari "penghapus papan tulis" atau "penghapus pensil" adalah...', opts: ['Ruler', 'Eraser', 'Clock', 'Window'], ans: 1, exp: '"Eraser" = penghapus; "Ruler" = penggaris.' },
      { text: 'Benda di dinding kelas yang menunjukkan waktu adalah...', opts: ['Map', 'Clock', 'Broom', 'Desk'], ans: 1, exp: '"Clock" adalah jam dinding.' },
      { text: 'Arti dari "trash bin" adalah...', opts: ['Lemari buku', 'Tempat sampah', 'Pintu kelas', 'Peta dinding'], ans: 1, exp: '"Trash bin" = tempat sampah.' },
    ],
  },
  {
    topicCode: 'BIG-SD4-02', subSeq: 2,
    objectives: ['Siswa mampu menyebutkan warna dan jumlah benda di kelas menggunakan "There is" dan "There are".'],
    materialTitle: 'Colors, Numbers, There is / There are',
    blocks: [
      { type: 'formula', name: 'Aturan "Ada..." dalam Bahasa Inggris', expression: 'There IS + 1 benda (a/an)  |  There ARE + >1 benda (...s)', note: 'Warna diletakkan SEBELUM kata benda: "a blue bag" (bukan "a bag blue")!' },
      { type: 'flashcards', title: 'Cek Kalimat Warna & Jumlah (Klik 🔊)', cards: [
        { emoji: '🎒', front: 'Ada 1 tas biru', back: 'There is a blue bag.', speak: 'There is a blue bag.', lang: 'en-US' },
        { emoji: '🪑', front: 'Ada 20 kursi cokelat', back: 'There are twenty brown chairs.', speak: 'There are twenty brown chairs.', lang: 'en-US' },
        { emoji: '📚', front: 'Ada 5 buku merah', back: 'There are five red books.', speak: 'There are five red books.', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Colors & Numbers',
    questions: [
      { text: 'Lengkapi: "... twenty-five desks in my classroom."', opts: ['There is', 'There are', 'It is', 'She is'], ans: 1, exp: '25 meja adalah jamak (>1) → "There are".' },
      { text: 'Terjemahan yang BENAR untuk "sebuah penggaris kuning" adalah...', opts: ['a ruler yellow', 'a yellow ruler', 'yellow a ruler', 'two yellow ruler'], ans: 1, exp: 'Dalam Bahasa Inggris, kata sifat (warna) mendahului kata benda: a yellow ruler.' },
      { text: 'Lengkapi: "There ... a globe on the teacher\'s desk."', opts: ['is', 'are', 'am', 'under'], ans: 0, exp: '"A globe" = satu globe → There is.' },
    ],
  },
  {
    topicCode: 'BIG-SD4-02', subSeq: 3,
    objectives: ['Siswa mampu mendeskripsikan lokasi benda-benda di dalam ruang kelas dengan kalimat utuh.'],
    materialTitle: 'Describing Classroom Objects & Locations',
    blocks: [
      { type: 'story_panel', title: 'My Clean Classroom!', lines: [
        { speaker: 'Salsa', avatar: '👧', text: 'Look at my classroom! There is a big whiteboard in front of the class. A clock is on the wall above the whiteboard. My blue bag is beside my desk, and the trash bin is behind the door.' },
      ]},
    ],
    activityTitle: 'Practice: Classroom Locations',
    questions: [
      { text: 'Berdasarkan teks Salsa, di mana letak tempat sampah (trash bin)?', opts: ['On the desk', 'Behind the door', 'In front of the class', 'On the wall'], ans: 1, exp: 'Tertulis: "the trash bin is behind the door."' },
      { text: 'Apa warna tas Salsa?', opts: ['Red', 'Blue', 'Green', 'Yellow'], ans: 1, exp: 'Tertulis: "My blue bag".' },
      { text: '"The map is on the wall." Artinya peta itu berada...', opts: ['Di lantai', 'Di dinding', 'Di bawah meja', 'Di dalam tas'], ans: 1, exp: '"On the wall" = menempel di dinding.' },
    ],
  },

  // BAB 3: PLACES AROUND ME
  {
    topicCode: 'BIG-SD4-03', subSeq: 1,
    objectives: ['Siswa mampu menyebutkan nama ruangan/tempat penting di sekolah dan lingkungan sekitar.'],
    materialTitle: 'Places at School and Around Us',
    blocks: [
      { type: 'visual_cards', title: 'Tempat di Sekolah & Sekitar Kita (Klik 🔊)', cards: [
        { emoji: '📚', label: 'Library', sub: 'Perpustakaan', speak: 'library', lang: 'en-US' },
        { emoji: '🍱', label: 'Canteen', sub: 'Kantin sekolah', speak: 'canteen', lang: 'en-US' },
        { emoji: '🏥', label: 'Hospital / Clinic', sub: 'Rumah sakit / Klinik', speak: 'hospital, clinic', lang: 'en-US' },
        { emoji: '🕌', label: 'Mosque', sub: 'Masjid', speak: 'mosque', lang: 'en-US' },
        { emoji: '🏦', label: 'Bank & Post Office', sub: 'Bank & Kantor Pos', speak: 'bank and post office', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Places Around Us',
    questions: [
      { text: 'Tempat di sekolah untuk meminjam dan membaca banyak buku adalah...', opts: ['Canteen', 'Library', 'Parking lot', 'Toilet'], ans: 1, exp: '"Library" = perpustakaan.' },
      { text: 'Jika seseorang sedang sakit dan perlu diperiksa dokter, ia pergi ke...', opts: ['Hospital', 'Market', 'Park', 'Bank'], ans: 0, exp: '"Hospital" = rumah sakit.' },
      { text: 'Bahasa Inggris dari "kantin" adalah...', opts: ['Canteen', 'Classroom', 'Schoolyard', 'Office'], ans: 0, exp: '"Canteen" = kantin.' },
    ],
  },
  {
    topicCode: 'BIG-SD4-03', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan fungsi tempat umum utama: school, library, market, dan park.'],
    materialTitle: 'School, Library, Market, and Park',
    blocks: [
      { type: 'table', title: '4 Tempat Umum & Kegiatannya', headers: ['Place', 'Meaning', 'What do we do there?'], rows: [
        ['School', 'Sekolah', 'We study and meet teachers and friends.'],
        ['Library', 'Perpustakaan', 'We read and borrow books quietly.'],
        ['Market', 'Pasar', 'People buy and sell vegetables, fruits, and fish.'],
        ['Park', 'Taman', 'Children play, walk, and relax under the trees.'],
      ]},
    ],
    activityTitle: 'Practice: School, Library, Market, Park',
    questions: [
      { text: 'My mother buys fresh bandeng fish and vegetables at the...', opts: ['Library', 'Market', 'Classroom', 'Bedroom'], ans: 1, exp: 'Tempat jual beli sayur dan ikan adalah "market" (pasar).' },
      { text: 'We play and jog on Sunday morning in the...', opts: ['Park', 'Hospital', 'Bank', 'Post office'], ans: 0, exp: '"Park" = taman.' },
      { text: 'What do students do in the library?', opts: ['They cook soup.', 'They read and borrow books.', 'They sell fish.', 'They wash cars.'], ans: 1, exp: 'Di perpustakaan siswa membaca dan meminjam buku.' },
    ],
  },
  {
    topicCode: 'BIG-SD4-03', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan letak suatu tempat umum terhadap tempat lainnya ("between", "across from", "near").'],
    materialTitle: 'Explaining Simple Locations of Places',
    blocks: [
      { type: 'visual_cards', title: 'Kata Lokasi Antarbangunan (Klik 🔊)', cards: [
        { emoji: '🏘️', label: 'Between', sub: 'Di antara dua tempat (between the school and the park)', speak: 'between', lang: 'en-US' },
        { emoji: '🛣️', label: 'Across from / Opposite', sub: 'Di seberang jalan (across from the market)', speak: 'across from, opposite', lang: 'en-US' },
        { emoji: '📍', label: 'Near', sub: 'Dekat (near my house)', speak: 'near my house', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Location of Places',
    questions: [
      { text: '"The canteen is BETWEEN the library and the classroom." Artinya kantin terletak...', opts: ['Di seberang kelas', 'Di antara perpustakaan dan ruang kelas', 'Di belakang sekolah', 'Jauh dari sekolah'], ans: 1, exp: '"Between ... and ..." = di antara ... dan ...' },
      { text: 'Arti kalimat "The park is across from my school" adalah taman berada ... sekolahku.', opts: ['Di dalam', 'Di seberang', 'Di atas', 'Di bawah'], ans: 1, exp: '"Across from" = di seberang.' },
      { text: 'Bahasa Inggris dari "dekat rumah saya" adalah...', opts: ['Far from my house', 'Near my house', 'Under my house', 'In my house'], ans: 1, exp: '"Near" = dekat; "Far" = jauh.' },
    ],
  },

  // BAB 4: MY HOUSE AND ROOMS
  {
    topicCode: 'BIG-SD4-04', subSeq: 1,
    objectives: ['Siswa mampu menyebutkan bagian luar rumah (roof, wall, door, window, yard, garage).'],
    materialTitle: 'Parts of a House',
    blocks: [
      { type: 'visual_cards', title: 'Bagian-Bagian Rumah (Klik 🔊)', cards: [
        { emoji: '🏠', label: 'Roof & Wall', sub: 'Atap & Dinding', speak: 'roof and wall', lang: 'en-US' },
        { emoji: '🚪', label: 'Door & Window', sub: 'Pintu & Jendela', speak: 'door and window', lang: 'en-US' },
        { emoji: '🌿', label: 'Yard / Garden', sub: 'Halaman / Kebun rumah', speak: 'yard, garden', lang: 'en-US' },
        { emoji: '🚗', label: 'Garage & Fence', sub: 'Garasi & Pagar', speak: 'garage and fence', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Parts of a House',
    questions: [
      { text: 'Bagian paling atas rumah yang melindungi dari panas dan hujan disebut...', opts: ['Floor', 'Roof', 'Door', 'Window'], ans: 1, exp: '"Roof" = atap.' },
      { text: 'Tempat memarkir sepeda motor atau mobil di rumah disebut...', opts: ['Garage', 'Bedroom', 'Kitchen', 'Roof'], ans: 0, exp: '"Garage" = garasi.' },
      { text: 'Arti kata "window" dan "door" berturut-turut adalah...', opts: ['Atap dan lantai', 'Jendela dan pintu', 'Pagar dan taman', 'Dinding dan garasi'], ans: 1, exp: 'Window = jendela, door = pintu.' },
    ],
  },
  {
    topicCode: 'BIG-SD4-04', subSeq: 2,
    objectives: ['Siswa mampu menyebutkan nama ruangan di dalam rumah beserta kegiatannya.'],
    materialTitle: 'Rooms in the House',
    blocks: [
      { type: 'table', title: 'Ruangan di Dalam Rumah', headers: ['Room', 'Arti', 'Activity'], rows: [
        ['Living room', 'Ruang tamu / keluarga', 'Watch TV, welcome guests'],
        ['Bedroom', 'Kamar tidur', 'Sleep, rest, study'],
        ['Kitchen', 'Dapur', 'Cook food'],
        ['Dining room', 'Ruang makan', 'Have breakfast / dinner together'],
        ['Bathroom', 'Kamar mandi', 'Take a bath, brush teeth'],
      ]},
    ],
    activityTitle: 'Practice: Rooms in the House',
    questions: [
      { text: 'My mother cooks soup and fried fish in the...', opts: ['Bedroom', 'Kitchen', 'Bathroom', 'Garage'], ans: 1, exp: 'Memasak dilakukan di "kitchen" (dapur).' },
      { text: 'We sleep every night in the...', opts: ['Living room', 'Bedroom', 'Dining room', 'Kitchen'], ans: 1, exp: '"Bedroom" = kamar tidur.' },
      { text: 'Ruang tamu dalam Bahasa Inggris disebut...', opts: ['Living room', 'Dining room', 'Bathroom', 'Garden'], ans: 0, exp: '"Living room" = ruang tamu/ruang keluarga.' },
    ],
  },
  {
    topicCode: 'BIG-SD4-04', subSeq: 3,
    objectives: ['Siswa mampu menyebutkan nama perabotan/benda di dalam rumah (sofa, bed, pillow, stove, refrigerator, soap).'],
    materialTitle: 'Things Inside the House',
    blocks: [
      { type: 'flashcards', title: 'Perabot Rumah Tangga (Klik 🔊)', cards: [
        { emoji: '🛋️', front: 'Living room objects', back: 'Sofa, television, carpet, table', speak: 'sofa, television, carpet, table', lang: 'en-US' },
        { emoji: '🛏️', front: 'Bedroom objects', back: 'Bed, pillow, blanket, wardrobe', speak: 'bed, pillow, blanket, wardrobe', lang: 'en-US' },
        { emoji: '🍳', front: 'Kitchen objects', back: 'Stove, pan, plate, spoon, refrigerator', speak: 'stove, pan, plate, spoon, refrigerator', lang: 'en-US' },
        { emoji: '🚿', front: 'Bathroom objects', back: 'Soap, towel, toothbrush, bucket', speak: 'soap, towel, toothbrush, bucket', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Things in the House',
    questions: [
      { text: 'Pillow (bantal) and blanket (selimut) are usually in the...', opts: ['Kitchen', 'Bedroom', 'Bathroom', 'Garage'], ans: 1, exp: 'Bantal dan selimut berada di kamar tidur (bedroom).' },
      { text: 'Bahasa Inggris dari "kompor" dan "kulkas" adalah...', opts: ['Stove and refrigerator', 'Bed and sofa', 'Soap and towel', 'Chair and desk'], ans: 0, exp: 'Stove = kompor, refrigerator/fridge = kulkas.' },
      { text: 'Towel (handuk) and soap (sabun) are in the...', opts: ['Living room', 'Bathroom', 'Dining room', 'Garden'], ans: 1, exp: 'Handuk dan sabun berada di kamar mandi (bathroom).' },
    ],
  },
  {
    topicCode: 'BIG-SD4-04', subSeq: 4,
    objectives: ['Siswa mampu mendeskripsikan letak perabotan di dalam rumah menggunakan preposisi tempat.'],
    materialTitle: 'Describing Where Things Are at Home',
    blocks: [
      { type: 'story_panel', title: 'Inside My Bedroom', lines: [
        { speaker: 'Raka', avatar: '👦', text: 'This is my bedroom. My bed is beside the window. Two pillows are on the bed. My study desk is in front of the wardrobe, and my backpack is under the desk.' },
      ]},
    ],
    activityTitle: 'Practice: Locations at Home',
    questions: [
      { text: 'Berdasarkan teks Raka, di mana letak dua bantal (two pillows)?', opts: ['Under the desk', 'On the bed', 'Behind the door', 'In the kitchen'], ans: 1, exp: 'Tertulis: "Two pillows are on the bed."' },
      { text: 'Di mana letak meja belajar (study desk) Raka?', opts: ['In front of the wardrobe', 'On the roof', 'In the bathroom', 'Behind the bed'], ans: 0, exp: 'Tertulis: "My study desk is in front of the wardrobe."' },
      { text: '"The television is in the living room, on the table." Di mana TV berada?', opts: ['Di dapur di bawah kursi', 'Di ruang tamu di atas meja', 'Di kamar mandi', 'Di garasi'], ans: 1, exp: 'Living room = ruang tamu, on the table = di atas meja.' },
    ],
  },

  // BAB 5: SIMPLE DIRECTIONS
  {
    topicCode: 'BIG-SD4-05', subSeq: 1,
    objectives: ['Siswa mampu mengenal kosakata arah dan persimpangan jalan dalam Bahasa Inggris.'],
    materialTitle: 'Direction Vocabulary',
    blocks: [
      { type: 'visual_cards', title: 'Kosakata Petunjuk Jalan (Klik 🔊)', cards: [
        { emoji: '⬆️', label: 'Go straight', sub: 'Jalan lurus terus', speak: 'Go straight', lang: 'en-US' },
        { emoji: '⬅️', label: 'Turn left', sub: 'Belok kiri', speak: 'Turn left', lang: 'en-US' },
        { emoji: '➡️', label: 'Turn right', sub: 'Belok kanan', speak: 'Turn right', lang: 'en-US' },
        { emoji: '➕', label: 'Crossroads / T-junction', sub: 'Perempatan / Pertigaan', speak: 'crossroads, T junction', lang: 'en-US' },
        { emoji: '🔄', label: 'Turn around', sub: 'Putar balik', speak: 'Turn around', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Direction Vocabulary',
    questions: [
      { text: 'Arti dari ungkapan "Go straight" adalah...', opts: ['Belok kanan', 'Jalan lurus', 'Berhenti', 'Putar balik'], ans: 1, exp: '"Go straight" = jalan lurus.' },
      { text: 'Bahasa Inggris dari "perempatan jalan" adalah...', opts: ['Crossroads', 'Library', 'Bedroom', 'Bridge'], ans: 0, exp: '"Crossroads" / "intersection" = perempatan.' },
      { text: '"Stop!" artinya...', opts: ['Jalan terus', 'Berhenti', 'Belok kiri', 'Lari'], ans: 1, exp: '"Stop" = berhenti.' },
    ],
  },
  {
    topicCode: 'BIG-SD4-05', subSeq: 2,
    objectives: ['Siswa mampu membedakan dan mempraktikkan instruksi left, right, dan straight dengan cepat dan tepat.'],
    materialTitle: 'Left, Right, and Straight',
    blocks: [
      { type: 'flashcards', title: 'Uji Cepat Arah! (Klik 🔊)', cards: [
        { emoji: '⬅️', front: 'Belok kiri di pertigaan', back: 'Turn left at the T-junction.', speak: 'Turn left at the T-junction.', lang: 'en-US' },
        { emoji: '➡️', front: 'Belok kanan di perempatan', back: 'Turn right at the crossroads.', speak: 'Turn right at the crossroads.', lang: 'en-US' },
        { emoji: '⬆️', front: 'Lurus terus di Jalan Melati', back: 'Go straight on Jalan Melati.', speak: 'Go straight on Jalan Melati.', lang: 'en-US' },
      ]},
    ],
    activityTitle: 'Practice: Left, Right, Straight',
    questions: [
      { text: 'Tanda panah ⬅️ berarti...', opts: ['Turn right', 'Turn left', 'Go straight', 'Turn around'], ans: 1, exp: 'Panah ke kiri = Turn left.' },
      { text: 'Tanda panah ➡️ berarti...', opts: ['Turn left', 'Turn right', 'Go straight', 'Stop'], ans: 1, exp: 'Panah ke kanan = Turn right.' },
      { text: 'Jika tempat tujuan ada di sebelah kananmu, kalimatnya: "It is on your..."', opts: ['left', 'right', 'straight', 'under'], ans: 1, exp: '"On your right" = di sebelah kananmu.' },
    ],
  },
  {
    topicCode: 'BIG-SD4-05', subSeq: 3,
    objectives: ['Siswa mampu bertanya dan memberikan petunjuk arah sederhana dalam Bahasa Inggris.'],
    materialTitle: 'Giving Simple Directions',
    blocks: [
      { type: 'story_panel', title: 'Asking the Way Politely', lines: [
        { speaker: 'Visitor', avatar: '🧑', text: 'Excuse me, how do I get to the library?' },
        { speaker: 'Alya', avatar: '👧', text: 'Go straight from here, then turn right at the canteen. The library is on your left!' },
        { speaker: 'Visitor', avatar: '🧑', text: 'Thank you very much!' },
        { speaker: 'Alya', avatar: '👧', text: "You're welcome!" },
      ]},
    ],
    activityTitle: 'Practice: Giving Directions',
    questions: [
      { text: 'Ungkapan sopan untuk bertanya arah menuju taman adalah...', opts: ['Excuse me, how do I get to the park?', 'Give me the park!', 'I am nine years old.', 'Close the park!'], ans: 0, exp: '"Excuse me, how do I get to ...?" sangat sopan untuk menanyakan rute.' },
      { text: 'Berdasarkan dialog Alya, di sebelah mana perpustakaan setelah belok kanan di kantin?', opts: ['On your right', 'On your left', 'Behind the gate', 'Under the canteen'], ans: 1, exp: 'Alya berkata: "The library is on your left!"' },
      { text: 'Kata penghubung urutan yang baik saat memberi 2 langkah arah adalah...', opts: ['then (kemudian)', 'because', 'sorry', 'hello'], ans: 0, exp: '"Go straight, then turn left" = lurus, kemudian belok kiri.' },
    ],
  },

  // BAB 6: DESCRIBING MY ENVIRONMENT
  {
    topicCode: 'BIG-SD4-06', subSeq: 1,
    objectives: ['Siswa mampu mendeskripsikan ruang kelas, rumah, dan lingkungan sekitar dalam 4–5 kalimat Bahasa Inggris sederhana.'],
    materialTitle: 'Describing My Classroom, House, and Environment',
    blocks: [
      { type: 'story_panel', title: 'My Lovely Neighborhood in Gresik', lines: [
        { speaker: 'Bima', avatar: '👦', text: 'Hello! I live in a clean and friendly neighborhood in Gresik. My house has a small garden in front of it. Near my house, there is a mosque and a small park. My school is not far; I just go straight and turn left. I love my environment because the people are kind and helpful!' },
      ]},
      { type: 'list', title: 'Pola Mudah Mendeskripsikan Lingkunganmu', items: ['1. Sebutkan tempatnya: "This is my house / classroom / neighborhood."', '2. Sebutkan benda/tempat yang ada: "There is a ... / There are ..."', '3. Jelaskan letaknya: "in, on, beside, in front of, near, between."', '4. Tutup dengan kesanmu: "It is clean and comfortable. I love it!"'] },
    ],
    activityTitle: 'Practice: Describing My Environment',
    questions: [
      { text: 'Berdasarkan teks Bima, apa yang ada di depan rumah Bima?', opts: ['A big hospital', 'A small garden', 'A market', 'A library'], ans: 1, exp: 'Tertulis: "My house has a small garden in front of it."' },
      { text: 'Bagaimana rute menuju sekolah Bima dari rumahnya?', opts: ['Go straight and turn left', 'Turn right and stop', 'Turn around', 'Very far by plane'], ans: 0, exp: 'Tertulis: "I just go straight and turn left."' },
      { text: 'Kata sifat yang tepat untuk menggambarkan kelas yang bersih dan rapi adalah...', opts: ['Dirty and messy', 'Clean and tidy', 'Dark and sad', 'Hot and noisy'], ans: 1, exp: '"Clean" = bersih, "tidy" = rapi.' },
      { text: 'Kalimat penutup yang baik untuk deskripsi rumah kita adalah...', opts: ['I love my house because it is comfortable.', 'Goodbye, table!', 'Where is your pencil?', 'Turn left!'], ans: 0, exp: 'Menyatakan perasaan dan alasan menyukai lingkungan sendiri.' },
    ],
  },
];

upsertLessonsBatch('Kelas 4 SD — Bahasa Inggris (6 Bab, 17 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

