import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: RECOUNT TEXT (3 sub)
  {
    topicCode: 'BIG-SMP8-01', subSeq: 1,
    objectives: ['Students understand the social function/purpose of Recount Text (retelling past events/experiences chronologically).'],
    materialTitle: 'Purpose of Recount Text',
    blocks: [
      { type: 'text', text: 'A Recount Text retells past events or experiences in chronological order (time order). Its social function is to retell past experiences to inform or entertain the readers — such as a holiday trip, a school competition, or a memorable day!' },
      { type: 'flashcards', title: 'Types of Recount Text (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'Personal Recount', back: 'Retelling your own personal experience (diary, holiday story)' },
        { front: 'Factual Recount', back: 'Reporting a real event objectively (science report, news event)' },
        { front: 'Biographical Recount', back: 'Retelling the life journey of a notable person' },
      ]},
    ],
    activityTitle: 'Quiz: Purpose of Recount Text',
    questions: [
      { text: 'What is the main social function (purpose) of a Personal Recount Text?', opts: ['To retell past personal experiences in chronological order', 'To explain how to make something step by step', 'To describe the general parts of an animal', 'To predict the future'], ans: 0, exp: 'Recount texts retell past events sequentially.' },
      { text: 'Which title is MOST likely a Recount Text?', opts: ['My Unforgettable Trip to Malang Last Holiday', 'How to Make Fried Rice', 'The Legend of Toba Lake', 'My Cute Cat'], ans: 0, exp: 'Retelling a past holiday trip is a classic personal recount.' },
      { text: 'How is a Recount Text different from a Narrative Text (fairy tale/story)?', opts: ['Recount focuses on real past events in sequence without requiring a fictional climax/conflict, while Narrative has a complication/conflict', 'Recount always uses future tense', 'Narrative never uses past tense', 'Both are identical'], ans: 0, exp: 'Recount retells real experiences chronologically; Narrative centers on complication and resolution.' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-01', subSeq: 2,
    objectives: ['Students identify the 3 generic structures of Recount Text: Orientation, Series of Events, and Reorientation.'],
    materialTitle: 'Generic Structure: Orientation, Events, Reorientation',
    blocks: [
      { type: 'table', title: '3 Parts of Recount Text', headers: ['Part', 'What It Contains'], rows: [
        ['1. Orientation', 'Introduces WHO was involved, WHERE it happened, and WHEN it happened'],
        ['2. Events (Series of Events)', 'Tells what happened step by step in chronological order (First..., Then..., After that...)'],
        ['3. Reorientation (Optional)', 'Closing statement: personal feeling, impression, or reflection ("It was the best day ever!")'],
      ]},
    ],
    activityTitle: 'Quiz: Structure of Recount Text',
    questions: [
      { text: '"Last Sunday, my family and I went to a mangrove park near the coast." Which part of a Recount Text is this?', opts: ['Orientation', 'Events', 'Reorientation', 'Goal'], ans: 0, exp: 'Orientation sets the scene: when (Last Sunday), who (my family and I), where (mangrove park).' },
      { text: '"Although we were very tired, we felt so happy and wanted to visit again someday." This closing sentence belongs to...', opts: ['Reorientation', 'Orientation', 'Materials', 'Complication'], ans: 0, exp: 'Reorientation gives the writer’s personal comment/feeling at the end.' },
      { text: 'What is the correct order of a Recount Text?', opts: ['Orientation → Events → Reorientation', 'Reorientation → Orientation → Events', 'Goal → Materials → Steps', 'Identification → Description'], ans: 0, exp: 'Orientation introduces the background, Events retell the sequence, Reorientation closes.' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-01', subSeq: 3,
    objectives: ['Students recognize key language features of Recount Text (Simple Past Tense, action verbs, time connectors, specific participants).'],
    materialTitle: 'Language Features of Recount Text',
    blocks: [
      { type: 'list', title: '4 Key Language Features of Recount', items: ['1. Simple Past Tense (went, saw, visited, played, was/were).', '2. Specific participants (I, my family, my classmates).', '3. Time connectives / conjunctions (first, then, next, after that, finally).', '4. Action verbs & adverbs of time/place (yesterday, last week, at the beach).'] },
    ],
    activityTitle: 'Quiz: Language Features of Recount',
    questions: [
      { text: 'Which tense is predominantly used in a Recount Text?', opts: ['Simple Past Tense (V2 / was-were)', 'Simple Present Tense', 'Simple Future Tense', 'Present Continuous Tense'], ans: 0, exp: 'Because the events already happened in the past.' },
      { text: 'Which group of words are TIME CONNECTORS commonly used in the Events section of a Recount Text?', opts: ['First, then, after that, finally', 'Although, because, however', 'Big, small, tall, green', 'Always, never, usually'], ans: 0, exp: 'Time connectors show the chronological sequence of past activities.' },
      { text: 'Choose the correct Recount sentence:', opts: ['We arrived at the museum at 9 a.m. and took many photos.', 'We arrive at the museum tomorrow and take photos.', 'We are arriving at the museum every day.', 'We will arrive yesterday.'], ans: 0, exp: 'Uses past verbs "arrived" and "took".' },
    ],
  },

  // BAB 2: PERSONAL EXPERIENCES (3 sub)
  {
    topicCode: 'BIG-SMP8-02', subSeq: 1,
    objectives: ['Students express and narrate memorable personal experiences with feelings and vivid details.'],
    materialTitle: 'Telling Personal Experiences',
    blocks: [
      { type: 'flashcards', title: 'Useful Expressions for Sharing Experiences', lang: 'en-US', cards: [
        { front: 'Last weekend, I had an unforgettable experience.', back: 'Akhir pekan lalu, saya punya pengalaman tak terlupakan.' },
        { front: 'I felt nervous at first, but then I enjoyed it.', back: 'Awalnya saya gugup, lalu saya menikmatinya.' },
        { front: 'It taught me a valuable lesson.', back: 'Hal itu memberiku pelajaran berharga.' },
      ]},
    ],
    activityTitle: 'Quiz: Telling Personal Experiences',
    questions: [
      { text: '"I joined a school speech contest last month. At first, I ___ very nervous, but my friends supported me." Complete with the right past "to be":', opts: ['was', 'were', 'am', 'is'], ans: 0, exp: 'Subject "I" in Simple Past uses "was".' },
      { text: 'Which adjective best describes an amazing experience you will never forget?', opts: ['Unforgettable / memorable', 'Boring', 'Terrible', 'Awful'], ans: 0, exp: 'Unforgettable/memorable means deeply remembered positively.' },
      { text: '"My classmates and I ___ excited when our team won the match."', opts: ['were', 'was', 'are', 'be'], ans: 0, exp: 'Plural subject ("My classmates and I" = we) takes "were" in Simple Past.' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-02', subSeq: 2,
    objectives: ['Students arrange jumbled past events into a logical chronological sequence using connectors.'],
    materialTitle: 'Sequencing Past Events Chronologically',
    blocks: [
      { type: 'worked_example', level: 'Arrange the Story', question: 'Put in order: (1) Finally, we went home happily. (2) First, we bought tickets at the gate. (3) Last Sunday, we visited the zoo. (4) After that, we watched the bird show.', steps: ['Orientation first (3) → First event (2) → Next event (4) → Closing (1).'], answer: '3 – 2 – 4 – 1' },
    ],
    activityTitle: 'Quiz: Sequencing Events',
    questions: [
      { text: 'Arrange these sentences into a logical Recount paragraph: (1) Next, we pitched our tents together. (2) Last Saturday, our scout group went camping. (3) Finally, we sang songs around the campfire at night. (4) First, we arrived at the campsite at 2 p.m.', opts: ['2 – 4 – 1 – 3', '4 – 2 – 1 – 3', '2 – 1 – 4 – 3', '3 – 2 – 4 – 1'], ans: 0, exp: 'Orientation (2) → First (4) → Next (1) → Finally (3).' },
      { text: '"We had lunch at a small restaurant. ___, we walked along the beach to see the sunset." Best connector:', opts: ['After that', 'Before', 'Unless', 'Although'], ans: 0, exp: '"After that" connects the next chronological action.' },
      { text: 'Why are sequence connectors (First, Then, Later, Finally) helpful in personal experience stories?', opts: ['They help the listener/reader easily follow the timeline of events', 'They replace all verbs', 'They make the story future tense', 'They shorten the story to one word'], ans: 0, exp: 'Clear chronological transitions make stories coherent.' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-02', subSeq: 3,
    objectives: ['Students share personal experiences both in speaking (storytelling with intonation) and writing (short recount paragraph).'],
    materialTitle: 'Sharing Experiences in Speaking and Writing',
    blocks: [
      { type: 'tip', text: 'When telling a personal story aloud: (1) Start with a hook ("Have you ever got lost on a trip?"), (2) Keep all main verbs in Past Tense, (3) Show emotion with your voice and facial expression, and (4) End with what you felt or learned!' },
    ],
    activityTitle: 'Quiz: Speaking & Writing Experiences',
    questions: [
      { text: 'Alya: "How was your school camp last weekend, Bima?" What is the BEST response?', opts: ['"It was awesome! We cooked our own food and played fun team games."', '"I go to camp tomorrow."', '"Yes, I am a student."', '"It is on Monday."'], ans: 0, exp: 'Answers the past question with Past Tense ("was", "cooked", "played") and details.' },
      { text: 'When your friend finishes sharing a fun holiday story, what is a polite follow-up question?', opts: ['"That sounds great! What was your favorite part of the trip?"', '"I don’t care."', '"Where do you live?"', '"Stop talking."'], ans: 0, exp: 'Active listening shows interest with a relevant past-tense question.' },
      { text: 'Before submitting your written recount paragraph, what should you check first?', opts: ['Make sure all past actions use Verb 2 (Past Tense) and events are in clear chronological order', 'Change all verbs to Verb-ing', 'Remove the Orientation', 'Delete all punctuation'], ans: 0, exp: 'Consistent Past Tense and logical sequence are key to Recount writing.' },
    ],
  },

  // BAB 3: TIME EXPRESSIONS AND PAST VERBS (3 sub)
  {
    topicCode: 'BIG-SMP8-03', subSeq: 1,
    objectives: ['Students use accurate past time expressions (yesterday, last week, two days ago, in 2022, when I was a child).'],
    materialTitle: 'Past Time Expressions',
    blocks: [
      { type: 'flashcards', title: 'Common Past Time Expressions (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'yesterday / yesterday morning', back: 'kemarin / kemarin pagi' },
        { front: 'last night / last week / last year', back: 'tadi malam / minggu lalu / tahun lalu' },
        { front: 'three days ago / two months ago', back: 'tiga hari yang lalu / dua bulan yang lalu' },
        { front: 'in 2023 / when I was ten', back: 'pada tahun 2023 / ketika aku berumur sepuluh tahun' },
      ]},
    ],
    activityTitle: 'Quiz: Past Time Expressions',
    questions: [
      { text: 'Which time expression CANNOT be used with Simple Past Tense?', opts: ['tomorrow afternoon', 'two weeks ago', 'last night', 'yesterday morning'], ans: 0, exp: '"Tomorrow" refers to the future, not the past.' },
      { text: '"My uncle moved to Surabaya five years ___."', opts: ['ago', 'last', 'yesterday', 'next'], ans: 0, exp: 'Duration + "ago" (five years ago = lima tahun yang lalu).' },
      { text: '"We had a great English quiz ___ Monday." (referring to the previous Monday)', opts: ['last', 'ago', 'tomorrow', 'every'], ans: 0, exp: '"last Monday" = hari Senin yang lalu.' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-03', subSeq: 2,
    objectives: ['Students master regular verbs (-ed) and high-frequency irregular verbs (V1 → V2) accurately.'],
    materialTitle: 'Regular and Irregular Past Verbs (V1 → V2)',
    blocks: [
      { type: 'table', title: 'Regular (-ed) vs Irregular Verbs (Must Know!)', headers: ['Regular (V1 → V2)', 'Irregular (V1 → V2)'], rows: [
        ['visit → visited', 'go → went'],
        ['play → played', 'see → saw'],
        ['study → studied (y → ied)', 'buy → bought'],
        ['stop → stopped (double p)', 'take → took'],
        ['enjoy → enjoyed', 'eat → ate  |  write → wrote  |  swim → swam'],
      ]},
    ],
    activityTitle: 'Quiz: Regular & Irregular Verbs',
    questions: [
      { text: 'What is the correct Past Tense (V2) of the irregular verbs: go, buy, eat, see?', opts: ['went, bought, ate, saw', 'goed, buyed, eated, seed', 'gone, bought, eaten, seen', 'went, brought, ate, saw'], ans: 0, exp: 'go→went, buy→bought, eat→ate, see→saw.' },
      { text: '"Rina ___ hard for the Math test last night." (study)', opts: ['studied', 'studyed', 'studying', 'studies'], ans: 0, exp: 'Consonant + y changes to -ied: study → studied.' },
      { text: 'Which pair of V1 → V2 is INCORRECT?', opts: ['bring → brang', 'take → took', 'swim → swam', 'make → made'], ans: 0, exp: 'The past form of "bring" is "brought" (not brang!).' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-03', subSeq: 3,
    objectives: ['Students form affirmative, negative (did not + V1), and interrogative (Did + S + V1?) Simple Past sentences accurately.'],
    materialTitle: 'Simple Past Tense in Recount (+, –, ?)',
    blocks: [
      { type: 'formula', name: 'Simple Past Tense Rules — Watch Out for "did"!', expression: '(+) S + V2   |   (–) S + did not (didn’t) + V1   |   (?) Did + S + V1?', note: 'TRAP ALERT! After "did" or "didn’t", ALWAYS return the verb to V1 (base form)! Example: "She didn’t go" (NOT "didn’t went"!) and "Did you see?" (NOT "Did you saw?"!).' },
    ],
    activityTitle: 'Quiz: Simple Past Tense in Recount',
    questions: [
      { text: 'Choose the grammatically CORRECT negative Simple Past sentence:', opts: ['Bima did not go to school yesterday because he was sick.', 'Bima did not went to school yesterday.', 'Bima was not go to school yesterday.', 'Bima does not went yesterday.'], ans: 0, exp: 'After "did not", ALWAYS use V1 ("go"), never V2 ("went")!' },
      { text: '"___ you ___ the football match on TV last night?"', opts: ['Did / watch', 'Did / watched', 'Do / watched', 'Were / watch'], ans: 0, exp: 'Question pattern: Did + Subject + V1 (watch).' },
      { text: 'Change to negative: "They bought some souvenirs at the market."', opts: ['They did not buy any souvenirs at the market.', 'They did not bought some souvenirs.', 'They were not buy souvenirs.', 'They do not buy souvenirs.'], ans: 0, exp: 'bought (V2) returns to buy (V1) after "did not".' },
    ],
  },

  // BAB 4: PROCEDURE TEXT (4 sub)
  {
    topicCode: 'BIG-SMP8-04', subSeq: 1,
    objectives: ['Students understand the social function and types of Procedure Text (recipes, manuals, DIY crafts, tips).'],
    materialTitle: 'Purpose of Procedure Text',
    blocks: [
      { type: 'text', text: 'A Procedure Text explains how to make something (recipe, craft), how to operate/use something (manual, app guide), or how to do an activity safely and properly through a sequence of clear steps.' },
    ],
    activityTitle: 'Quiz: Purpose of Procedure Text',
    questions: [
      { text: 'What is the main purpose of a Procedure Text titled "How to Make Iced Lemon Tea"?', opts: ['To tell the readers step by step how to make iced lemon tea', 'To retell a memory of drinking tea yesterday', 'To describe a tea plantation', 'To persuade people to buy a cafe'], ans: 0, exp: 'Procedure text guides the reader to achieve a goal through ordered steps.' },
      { text: 'Which of the following is an example of a Procedure Text (manual)?', opts: ['How to Connect Your Smartphone to Wi-Fi', 'My Best Friend', 'A Trip to Mount Bromo', 'Why We Need Sleep'], ans: 0, exp: 'Step-by-step device instructions are procedure texts.' },
      { text: 'Procedure texts are written in Simple Present Tense and imperative mood because...', opts: ['The instructions are timeless facts/commands that apply whenever anyone follows them', 'They happened 100 years ago', 'They are fairy tales', 'They are poems'], ans: 0, exp: 'Instructions use base-form commands (imperatives) and present tense.' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-04', subSeq: 2,
    objectives: ['Students identify the generic structure of Procedure Text: Goal/Aim, Materials/Ingredients & Tools, and Steps/Methods.'],
    materialTitle: 'Structure: Goal, Materials, and Steps',
    blocks: [
      { type: 'table', title: '3 Parts of Procedure Text', headers: ['Part', 'Example ("How to Make Mango Juice")'], rows: [
        ['1. Goal / Aim (Title)', 'How to Make Fresh Mango Juice'],
        ['2. Materials / Ingredients & Tools', '1 ripe mango, 200 ml cold water, 1 tbsp honey, ice cubes; blender, knife, glass'],
        ['3. Steps / Methods', '1. Peel and cut the mango. 2. Put all ingredients into the blender. 3. Blend until smooth. 4. Pour and serve!'],
      ]},
    ],
    activityTitle: 'Quiz: Structure of Procedure Text',
    questions: [
      { text: 'In a recipe Procedure Text, "2 eggs, a pinch of salt, 1 tablespoon of oil, frying pan, spatula" belong to the ___ section.', opts: ['Materials (Ingredients and Tools)', 'Goal', 'Steps', 'Reorientation'], ans: 0, exp: 'Lists the needed ingredients and utensils before the steps.' },
      { text: 'Which part of a Procedure Text is OPTIONAL when explaining a simple physical activity like "How to Wash Your Hands Properly"?', opts: ['Tools/Ingredients list (or very minimal like soap & water)', 'Steps', 'Goal', 'Action verbs'], ans: 0, exp: 'Some how-to guides need no long list of materials, whereas Goal and Steps are always essential.' },
      { text: 'What is the correct generic structure of a Procedure Text?', opts: ['Goal → Materials/Ingredients → Steps', 'Orientation → Events → Reorientation', 'Thesis → Arguments → Reiteration', 'Identification → Description'], ans: 0, exp: 'Goal (aim), Materials (needed items), Steps (ordered instructions).' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-04', subSeq: 3,
    objectives: ['Students use positive and negative imperative sentences with action verbs (chop, stir, boil, press, fold, do not touch).'],
    materialTitle: 'Imperative Sentences in Procedure Text',
    blocks: [
      { type: 'flashcards', title: 'Common Cooking & DIY Imperative Verbs (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'Peel and slice the bananas.', back: 'Kupas dan iris pisangnya.' },
        { front: 'Stir the mixture slowly.', back: 'Aduk campurannya perlahan.' },
        { front: 'Pour the hot water carefully.', back: 'Tuangkan air panas dengan hati-hati.' },
        { front: 'Do not touch the hot pan!', back: 'Jangan sentuh wajan yang panas!' },
      ]},
    ],
    activityTitle: 'Quiz: Imperative Sentences',
    questions: [
      { text: 'An IMPERATIVE SENTENCE (positive command) always begins with...', opts: ['Base verb (V1) without a subject — e.g., "Boil the water for 5 minutes."', 'Verb 2 (Boiled...)', 'Verb-ing (Boiling...)', 'Subject "He/She"'], ans: 0, exp: 'Imperatives use bare infinitive (V1): Stir, Cut, Mix, Press.' },
      { text: 'How do you write a NEGATIVE imperative (warning/prohibition) in English?', opts: ['Do not (Don’t) + V1 — e.g., "Do not use too much salt."', 'Not using too much salt.', 'Did not use too much salt.', 'No use salt.'], ans: 0, exp: 'Negative commands start with "Do not / Don’t + V1".' },
      { text: 'Choose the right action verb: "___ the sugar and coffee powder in a cup, then add hot water."', opts: ['Mix', 'Sleep', 'Jump', 'Drive'], ans: 0, exp: '"Mix" is the fitting action verb for combining ingredients.' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-04', subSeq: 4,
    objectives: ['Students connect procedure steps smoothly using sequence connectors (First, Second, Next, Then, After that, Finally).'],
    materialTitle: 'Sequence Connectors in Procedure Text',
    blocks: [
      { type: 'formula', name: 'Sequence Connectors Ladder', expression: 'First, ...  →  Second / Next, ...  →  Then / After that, ...  →  Finally / Lastly, ...', note: 'Always put a comma (,) right after a sequence connector at the start of a sentence!' },
    ],
    activityTitle: 'Quiz: Sequence Connectors',
    questions: [
      { text: '"___, plug in the rice cooker. Next, press the Cook button. ___, wait until the light turns to Warm."', opts: ['First / Finally', 'Finally / First', 'Yesterday / Tomorrow', 'Because / Although'], ans: 0, exp: '"First" begins the sequence and "Finally" marks the last step.' },
      { text: 'Which sentence is punctuated and written CORRECTLY?', opts: ['Then, fold the paper in half carefully.', 'Then fold the paper in half yesterday.', 'Finally, folding the paper.', 'Next, folded the paper.'], ans: 0, exp: 'Connector + comma + V1 imperative ("fold").' },
      { text: 'Why are adverbs like "slowly, gently, carefully, for 10 minutes" important in Procedure steps?', opts: ['They tell HOW or HOW LONG to do the step accurately and safely', 'They change the tense to past', 'They replace the goal', 'They are just decoration'], ans: 0, exp: 'Adverbs of manner and duration ensure precise results.' },
    ],
  },

  // BAB 5: GIVING INSTRUCTIONS AND DIRECTIONS (3 sub)
  {
    topicCode: 'BIG-SMP8-05', subSeq: 1,
    objectives: ['Students give polite, clear classroom and everyday instructions using imperatives and "Please / Could you...".'],
    materialTitle: 'Giving Polite Instructions',
    blocks: [
      { type: 'flashcards', title: 'Polite Instructions (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'Please open your book to page 42.', back: 'Tolong buka bukumu halaman 42.' },
        { front: 'Could you pass me the ruler, please?', back: 'Bisakah kamu ambilkan penggarisnya?' },
        { front: 'Be careful! The floor is wet.', back: 'Hati-hati! Lantainya basah.' },
        { front: 'Don’t forget to turn off the lights.', back: 'Jangan lupa matikan lampu.' },
      ]},
    ],
    activityTitle: 'Quiz: Giving Instructions',
    questions: [
      { text: 'Which instruction is the MOST POLITE way to ask a classmate to close the window?', opts: ['"Could you close the window, please?"', '"Close it now!"', '"You must close immediately!"', '"Window close!"'], ans: 0, exp: '"Could you ... please?" softens a command into a polite request.' },
      { text: 'Teacher: "Class, ___ quiet, please. We are about to start the listening test."', opts: ['be', 'is', 'are', 'was'], ans: 0, exp: 'Imperative with an adjective ("quiet", "careful") always uses base verb "Be"!' },
      { text: 'How do you politely warn a friend not to run near the stairs?', opts: ['"Please don’t run near the stairs. You might slip!"', '"Run faster!"', '"No running yesterday!"', '"Did you run?"'], ans: 0, exp: 'Polite negative imperative + clear reason.' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-05', subSeq: 2,
    objectives: ['Students use directional vocabulary and prepositions of place (go straight, turn left/right, T-junction, crossroads, next to, opposite, between).'],
    materialTitle: 'Vocabulary for Giving Directions',
    blocks: [
      { type: 'flashcards', title: 'Essential Direction Phrases (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'Go straight ahead along Jalan Pahlawan.', back: 'Jalan lurus terus sepanjang Jalan Pahlawan.' },
        { front: 'Turn left at the traffic light.', back: 'Belok kiri di lampu lalu lintas.' },
        { front: 'Turn right at the crossroads / T-junction.', back: 'Belok kanan di perempatan / pertigaan.' },
        { front: 'It is across from / opposite the bank.', back: 'Lokasinya di seberang bank.' },
        { front: 'It is between the library and the canteen.', back: 'Lokasinya di antara perpustakaan dan kantin.' },
      ]},
    ],
    activityTitle: 'Quiz: Directions Vocabulary',
    questions: [
      { text: 'If the bookstore is directly on the other side of the street facing the post office, we say: "The bookstore is ___ the post office."', opts: ['opposite / across from', 'under', 'inside', 'above'], ans: 0, exp: '"Opposite / across from" = di seberang.' },
      { text: 'What does "Go past the hospital and take the second turning on your right" mean?', opts: ['Walk beyond the hospital, then turn right at the second street', 'Stop inside the hospital', 'Turn left immediately', 'Go back home'], ans: 0, exp: '"Go past" = lewati; "take the second turning on your right" = belok kanan di belokan kedua.' },
      { text: 'A road intersection shaped like the letter "T" (pertigaan) is called a...', opts: ['T-junction', 'Crossroads', 'Roundabout', 'Bridge'], ans: 0, exp: 'T-junction = pertigaan; crossroads = perempatan; roundabout = bundaran.' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-05', subSeq: 3,
    objectives: ['Students ask for and give clear directions politely in real-life dialogues.'],
    materialTitle: 'Asking for and Giving Directions in Dialogue',
    blocks: [
      { type: 'worked_example', level: 'Street Dialogue', question: 'Tourist: "Excuse me, could you tell me the way to the town square (alun-alun)?"', steps: ['Local Student: "Sure! Go straight down this street for two blocks."', '"Then, turn left at the traffic light. The town square is on your right, opposite the mosque."', 'Tourist: "Thank you very much!" — Student: "You’re welcome!"'], answer: 'Polite opening + clear step-by-step directions + landmark!' },
    ],
    activityTitle: 'Quiz: Asking & Giving Directions',
    questions: [
      { text: 'What is the MOST POLITE way to ask a stranger for directions to the nearest library?', opts: ['"Excuse me, could you tell me how to get to the public library?"', '"Hey, where library?"', '"Tell me the library now."', '"I want library."'], ans: 0, exp: 'Start with "Excuse me" and a polite question ("Could you tell me...?").' },
      { text: 'Stranger: "Is the train station far from here?" — You: "No, it’s quite close. It’s only about a five-minute ___."', opts: ['walk', 'walks', 'walked', 'walking'], ans: 0, exp: '"a five-minute walk" = 5 menit berjalan kaki.' },
      { text: 'If you genuinely DO NOT know the way someone asks about, the most polite response is...', opts: ['"I’m sorry, I’m not sure where it is. Maybe you can ask the security guard over there."', 'Give random wrong directions', 'Walk away silently', '"That’s not my problem."'], ans: 0, exp: 'Be honest and helpful rather than giving misleading directions.' },
    ],
  },

  // BAB 6: EXPRESSING IDEAS AND EXPERIENCES (4 sub)
  {
    topicCode: 'BIG-SMP8-06', subSeq: 1,
    objectives: ['Students express opinions and ideas clearly using expressions like "In my opinion...", "I think...", "From my point of view...".'],
    materialTitle: 'Expressing Ideas and Opinions',
    blocks: [
      { type: 'flashcards', title: 'Asking & Giving Opinions (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'What do you think about our new school garden?', back: 'Bagaimana pendapatmu tentang taman sekolah kita yang baru?' },
        { front: 'In my opinion, it makes the school cooler and greener.', back: 'Menurut pendapatku, itu membuat sekolah lebih sejuk dan hijau.' },
        { front: 'I think we should also add recycling bins.', back: 'Menurutku kita juga sebaiknya menambah tempat sampah daur ulang.' },
      ]},
    ],
    activityTitle: 'Quiz: Expressing Ideas',
    questions: [
      { text: 'Which expression is used to ASK for someone’s opinion?', opts: ['"What do you think about using reusable bottles at school?"', '"In my opinion, it is great."', '"I totally agree."', '"Excuse me, turn left."'], ans: 0, exp: '"What do you think about...?" invites the other person’s idea.' },
      { text: '"___, reading for 15 minutes every day improves our vocabulary."', opts: ['In my opinion', 'Yesterday', 'Turn right', 'Do not'], ans: 0, exp: '"In my opinion," introduces a personal viewpoint.' },
      { text: 'Why is it good to add "because..." after giving an idea ("I think we should..., because...")?', opts: ['It gives a logical reason that makes your idea more convincing', 'It changes the topic', 'It makes your idea weaker', 'It is only for past tense'], ans: 0, exp: 'Supporting ideas with reasons strengthens communication.' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-06', subSeq: 2,
    objectives: ['Students connect personal experiences to their ideas to make explanations relatable and persuasive.'],
    materialTitle: 'Linking Personal Experiences with Ideas',
    blocks: [
      { type: 'text', text: 'Combining your IDEA (Present Tense) with a brief PERSONAL EXPERIENCE (Past Tense) makes your speaking much stronger! Example: "I think group study is very helpful. Last week, my friends and I studied Math together, and I finally understood Pythagoras!"' },
    ],
    activityTitle: 'Quiz: Ideas & Experiences',
    questions: [
      { text: 'Read: "I believe planting trees matters. Last year, our class planted 20 trees, and now our schoolyard feels much shadier." Which tenses are combined here?', opts: ['Simple Present (for the idea/present result) and Simple Past (for the experience last year)', 'Only Future Tense', 'Only Past Continuous', 'No verbs at all'], ans: 0, exp: '"believe/feels" = Present; "planted" = Past.' },
      { text: 'Complete naturally: "I think cooking at home is fun. Yesterday, I ___ fried noodles with my sister and it tasted great!"', opts: ['made', 'make', 'making', 'will make'], ans: 0, exp: '"Yesterday" requires Past Tense V2 ("made").' },
      { text: 'Why do speakers often share a short real experience when explaining an idea?', opts: ['Real examples make the idea concrete, believable, and engaging for listeners', 'To distract the audience', 'To avoid giving any opinion', 'To speak without order'], ans: 0, exp: 'Personal stories bring abstract ideas to life.' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-06', subSeq: 3,
    objectives: ['Students respond politely by agreeing, partly agreeing, or disagreeing respectfully in English discussions.'],
    materialTitle: 'Agreeing and Politely Disagreeing',
    blocks: [
      { type: 'table', title: 'Polite Responses in Discussion', headers: ['Attitude', 'Natural English Expressions'], rows: [
        ['Agreeing', '"I totally agree with you." / "That’s a great point!" / "You’re right."'],
        ['Partly Agreeing', '"I see your point, but..." / "That’s true, however..."'],
        ['Politely Disagreeing', '"I’m afraid I disagree because..." / "I have a different opinion..."'],
      ]},
    ],
    activityTitle: 'Quiz: Responding & Agreeing/Disagreeing',
    questions: [
      { text: 'Bima: "I think having a class reading corner will help us love books." Alya agrees strongly. She says:', opts: ['"I totally agree! That’s a wonderful idea."', '"I’m afraid I disagree."', '"You are totally wrong."', '"What time is it?"'], ans: 0, exp: 'Expresses clear agreement and enthusiasm.' },
      { text: 'Which is the MOST POLITE way to disagree with a classmate’s idea?', opts: ['"I see your point, but I think a shorter schedule might work better."', '"Your idea is terrible!"', '"No! Shut up!"', '"That makes zero sense."'], ans: 0, exp: 'Acknowledges the friend’s point first before offering an alternative.' },
      { text: 'Dito: "I won second place in the English storytelling contest yesterday!" Best response:', opts: ['"Congratulations, Dito! That’s awesome — I’m proud of you!"', '"Never mind."', '"I disagree."', '"Turn right."'], ans: 0, exp: 'Congratulates and shares positive feedback.' },
    ],
  },
  {
    topicCode: 'BIG-SMP8-06', subSeq: 4,
    objectives: ['Students deliver a short structured English mini-presentation (opening, main points, closing & Q&A).'],
    materialTitle: 'Simple Conversation and Mini-Presentation',
    blocks: [
      { type: 'flashcards', title: 'Mini-Presentation Phrases (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'Good morning, everyone. Today I’d like to share my experience about...', back: 'Selamat pagi semuanya. Hari ini saya ingin berbagi pengalaman tentang...' },
        { front: 'First of all, ... / Next, ... / In addition, ...', back: 'Pertama-tama, ... / Berikutnya, ... / Selain itu, ...' },
        { front: 'To conclude, ... Thank you for listening! Any questions?', back: 'Sebagai kesimpulan, ... Terima kasih telah menyimak! Ada pertanyaan?' },
      ]},
    ],
    activityTitle: 'Quiz: Mini-Presentation',
    questions: [
      { text: 'Which phrase is BEST for OPENING a class presentation in English?', opts: ['"Good morning, everyone. Today, our group would like to present..."', '"Thank you for listening, bye!"', '"To conclude..."', '"Do you have any questions?"'], ans: 0, exp: 'Greets the audience and states the topic clearly.' },
      { text: 'Which phrase is BEST for CLOSING a presentation and inviting questions?', opts: ['"That’s all from me. Thank you for your attention. Are there any questions?"', '"Hello, my name is..."', '"First of all..."', '"Let’s begin."'], ans: 0, exp: 'Signals the end politely and opens Q&A.' },
      { text: 'Besides clear grammar, what makes a short English presentation effective?', opts: ['Clear voice, friendly eye contact, natural pace, and short visual cue cards instead of reading every word', 'Looking down at the paper the entire time', 'Speaking as fast as possible in a whisper', 'Skipping the greeting'], ans: 0, exp: 'Confident delivery and eye contact engage listeners.' },
    ],
  },
];

upsertLessonsBatch('Kelas 8 SMP — Bahasa Inggris (6 Bab, 20 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

