import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: DEVELOPING DESCRIPTIVE AND RECOUNT TEXTS (4 sub)
  {
    topicCode: 'BIG-SMP9-01', subSeq: 1,
    objectives: ['Students distinguish and develop both Descriptive Texts (Simple Present) and Recount Texts (Simple Past) with richer detail.'],
    materialTitle: 'Developing Descriptive and Recount Texts',
    blocks: [
      { type: 'table', title: 'Descriptive vs Recount at Grade 9 Level', headers: ['Feature', 'Descriptive Text', 'Recount Text'], rows: [
        ['Purpose', 'Describe a specific person, place, or thing vividly', 'Retell past events/experiences chronologically'],
        ['Structure', 'Identification → Description', 'Orientation → Series of Events → Reorientation'],
        ['Main Tense', 'Simple Present Tense (is/are, has, V1/Vs)', 'Simple Past Tense (was/were, V2)'],
      ]},
    ],
    activityTitle: 'Quiz: Descriptive & Recount Texts',
    questions: [
      { text: 'Which sentence belongs to a DESCRIPTIVE text (not a Recount text)?', opts: ['The old harbor has colorful wooden boats and offers a breezy view every afternoon.', 'Last Sunday, we visited the harbor and took many pictures.', 'First, we walked along the pier and bought fresh fish.', 'It was the most memorable trip of my life.'], ans: 0, exp: 'Uses Simple Present ("has", "offers") to describe permanent features of a place.' },
      { text: 'Which sentence belongs to a RECOUNT text?', opts: ['Two weeks ago, our school held a coastal cleanup and planted 200 mangrove seedlings.', 'Mangrove trees protect the coastline from erosion.', 'The park is spacious and clean.', 'It has tall shady trees.'], ans: 0, exp: 'Uses past time marker ("Two weeks ago") and past verbs ("held", "planted").' },
      { text: 'How can you make a Grade 9 Descriptive paragraph much stronger than a basic Grade 7 one?', opts: ['Add sensory details (sight, sound, smell), specific adjectives, and clear spatial organization', 'Repeat "It is very good" five times', 'Write only one short sentence', 'Switch randomly to future tense'], ans: 0, exp: 'Sensory imagery and precise adjectives make descriptions come alive.' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-01', subSeq: 2,
    objectives: ['Students enrich texts by replacing weak words ("good, big, nice, went") with vivid adjectives, precise action verbs, and adverbs.'],
    materialTitle: 'Enriching Vocabulary (Vivid Adjectives & Verbs)',
    blocks: [
      { type: 'flashcards', title: 'Upgrade Your English Vocabulary! (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'very big → massive / spacious / breathtaking', back: 'sangat besar → sangat luas / menakjubkan' },
        { front: 'very good → remarkable / outstanding / memorable', back: 'sangat bagus → luar biasa / berkesan' },
        { front: 'walked slowly → strolled / wandered', back: 'berjalan santai / menyusuri' },
        { front: 'very tired → exhausted', back: 'sangat kelelahan' },
      ]},
    ],
    activityTitle: 'Quiz: Enriching Vocabulary',
    questions: [
      { text: 'Replace "very tired" with ONE stronger, more precise adjective: "After hiking for four hours, we were completely ___."', opts: ['exhausted', 'excited', 'ancient', 'delicious'], ans: 0, exp: '"Exhausted" = extremely tired.' },
      { text: 'Which upgraded sentence sounds MOST vivid in a travel description?', opts: ['The bustling traditional market was filled with the fragrant aroma of fresh spices.', 'The market was big and nice.', 'The market has things and smells.', 'There is a market there.'], ans: 0, exp: 'Uses vivid adjectives ("bustling", "fragrant", "fresh").' },
      { text: 'What is a stronger synonym for "very old" when describing a historic building?', opts: ['ancient / historic', 'brand-new', 'tiny', 'modern'], ans: 0, exp: '"Ancient" or "historic" enriches historical/place descriptions.' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-01', subSeq: 3,
    objectives: ['Students organize coherent paragraphs with a clear topic sentence, supporting details, and linking transitions.'],
    materialTitle: 'Organizing Coherent Paragraphs',
    blocks: [
      { type: 'formula', name: 'Strong Paragraph Blueprint', expression: 'Topic Sentence (Main Idea)  +  2–3 Supporting Details (Facts/Examples/Sensory)  +  Concluding / Transition Sentence', note: 'Use transitions like "Furthermore", "In addition", "Meanwhile", "As a result", and "Finally" to connect ideas smoothly!' },
    ],
    activityTitle: 'Quiz: Organizing Paragraphs',
    questions: [
      { text: 'What is the main role of a TOPIC SENTENCE at the beginning of a paragraph?', opts: ['To state the central idea that all other sentences in the paragraph will support', 'To end the essay', 'To introduce a completely unrelated topic', 'To list random numbers'], ans: 0, exp: 'A clear topic sentence gives focus and unity to the paragraph.' },
      { text: 'Find the IRRELEVANT sentence that breaks paragraph unity: (1) Our school library is my favorite spot. (2) It is cool, quiet, and neatly organized. (3) Yesterday I ate meatballs for dinner. (4) Students can read both printed books and e-books there.', opts: ['Sentence (3)', 'Sentence (1)', 'Sentence (2)', 'Sentence (4)'], ans: 0, exp: 'Eating meatballs yesterday has nothing to do with describing the school library.' },
      { text: '"We visited the science museum in the morning. ___, we had lunch at a nearby local cafe." Best transition:', opts: ['Afterwards / Next', 'Because', 'Although', 'Unless'], ans: 0, exp: '"Afterwards" links the following event cleanly in time order.' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-01', subSeq: 4,
    objectives: ['Students proofread and edit English texts for tense consistency, subject-verb agreement, spelling, and punctuation.'],
    materialTitle: 'Editing and Proofreading English Texts',
    blocks: [
      { type: 'worked_example', level: 'Spot & Fix 3 Errors!', question: 'Edit this Recount sentence: "Yesterday, my sister and I go to the park and we was very happy."', steps: ['1. "Yesterday" → past tense: "go" → "went".', '2. Plural subject "we" → "was" → "were".', 'Result: "Yesterday, my sister and I went to the park, and we were very happy."'], answer: 'Always check Tense + Subject-Verb Agreement + Punctuation!' },
    ],
    activityTitle: 'Quiz: Editing Texts',
    questions: [
      { text: 'Choose the CORRECTED version of: "My friend don’t likes spicy food, so he eat sweet snacks every day."', opts: ['My friend doesn’t like spicy food, so he eats sweet snacks every day.', 'My friend don’t like spicy food, so he eat sweet snacks.', 'My friend doesn’t likes spicy food, so he eats sweet snacks.', 'My friend didn’t liked spicy food every day.'], ans: 0, exp: 'Singular "My friend" uses "doesn’t + V1 (like)" and "he eats".' },
      { text: 'Spot and fix the error: "Last week, we didn’t saw the sunrise because the sky is cloudy."', opts: ['Last week, we didn’t see the sunrise because the sky was cloudy.', 'Last week, we didn’t saw the sunrise because the sky was cloudy.', 'Last week, we don’t see the sunrise because the sky is cloudy.', 'Last week, we didn’t seen the sunrise.'], ans: 0, exp: '"didn’t + V1 (see)" and past tense "was" for consistency.' },
      { text: 'Which checklist item is MOST useful when proofreading a Descriptive Text?', opts: ['Check Simple Present subject-verb agreement (he/she/it + V-s/es), spelling, and capitalization', 'Change every verb to Past Tense', 'Delete all adjectives', 'Remove all full stops'], ans: 0, exp: 'Descriptive texts rely on accurate Simple Present grammar.' },
    ],
  },

  // BAB 2: DEVELOPING PROCEDURE TEXTS (3 sub)
  {
    topicCode: 'BIG-SMP9-02', subSeq: 1,
    objectives: ['Students develop detailed Procedure Texts for modern/practical tasks (DIY eco-crafts, digital tutorials, science experiments, healthy recipes).'],
    materialTitle: 'Developing Practical & Modern Procedure Texts',
    blocks: [
      { type: 'text', text: 'In Grade 9, Procedure Texts go beyond simple recipes! You can write clear digital guides ("How to Create a Strong Password"), eco-DIY guides ("How to Make Organic Compost at Home"), or school science guides — always specifying safety tips, exact measurements, and clear troubleshooting tips!' },
    ],
    activityTitle: 'Quiz: Developing Procedure Texts',
    questions: [
      { text: 'Which addition makes a Grade 9 Procedure Text ("How to Charge Your Laptop Safely") more complete and helpful?', opts: ['Safety warnings/tips (e.g., "Do not cover the charger with a pillow to prevent overheating")', 'A fictional story about a dragon', 'Past tense verbs about last year', 'No steps at all'], ans: 0, exp: 'Safety notes and tips raise the practical quality of a manual.' },
      { text: 'In "How to Make Compost from Kitchen Waste", what does "Avoid putting oily food or plastic into the compost bin" function as?', opts: ['A negative imperative / precaution to ensure success', 'The goal', 'An orientation', 'A past event'], ans: 0, exp: 'Precautions prevent common mistakes.' },
      { text: 'Choose the clearest instruction step:', opts: ['Press and hold the power button for three seconds until the green light flashes.', 'Do the button thing.', 'Button pressed yesterday.', 'You maybe want to press.'], ans: 0, exp: 'Precise imperative verb + duration + visual confirmation.' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-02', subSeq: 2,
    objectives: ['Students sequence complex multi-step procedures logically using time connectors, conditionals ("If..."), and purpose clauses ("in order to / so that").'],
    materialTitle: 'Sequencing Steps with Conditionals & Purpose',
    blocks: [
      { type: 'flashcards', title: 'Pro-Level Step Connectors (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'Before starting, make sure the device is turned off.', back: 'Sebelum mulai, pastikan perangkat dalam keadaan mati.' },
        { front: 'Stir continuously so that the milk does not burn.', back: 'Aduk terus-menerus agar susunya tidak gosong.' },
        { front: 'If the dough feels too dry, add one tablespoon of water.', back: 'Jika adonan terasa terlalu kering, tambahkan satu sendok makan air.' },
      ]},
    ],
    activityTitle: 'Quiz: Sequencing Complex Steps',
    questions: [
      { text: '"Cover the pot tightly ___ the water boils faster." Best purpose connector:', opts: ['so that', 'because of', 'yesterday', 'although'], ans: 0, exp: '"so that" introduces the purpose/result of the step.' },
      { text: '"___ the battery indicator turns red, plug in the charger immediately." Best conditional word:', opts: ['If / When', 'However', 'Finally', 'Because'], ans: 0, exp: 'Conditionals tell the user what to do in a specific situation.' },
      { text: 'Arrange logically ("How to Plant a Seed"): (1) Water the soil gently. (2) Fill a small pot with fertile soil. (3) Place the pot in a spot with gentle sunlight. (4) Put the seed 2 cm deep and cover it lightly.', opts: ['2 – 4 – 1 – 3', '1 – 2 – 3 – 4', '4 – 2 – 1 – 3', '3 – 1 – 4 – 2'], ans: 0, exp: 'Fill soil (2) → plant seed (4) → water gently (1) → place in sunlight (3).' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-02', subSeq: 3,
    objectives: ['Students integrate diagrams, icons, numbered visual panels, and captions to make Procedure Texts clearer and more accessible.'],
    materialTitle: 'Using Images and Diagrams in Procedure Texts',
    blocks: [
      { type: 'tip', text: 'A great illustrated Procedure Text matches EVERY key step with a clear icon/photo, arrows showing motion (fold, turn, press), and a short caption — just like origami guides, emergency posters, and assembly manuals!' },
    ],
    activityTitle: 'Quiz: Visuals in Procedure Texts',
    questions: [
      { text: 'Why are numbered diagrams with directional arrows especially valuable in an origami or first-aid Procedure Text?', opts: ['Complex physical folds or hand positions are much faster and clearer to understand visually than through long text alone', 'So you can delete all written instructions', 'To make the page heavier', 'Only for decoration'], ans: 0, exp: 'Combining concise text with visual diagrams minimizes user error.' },
      { text: 'What makes a good CAPTION underneath a procedure step photo?', opts: ['Short, numbered to match the step, and highlighting the exact action shown (e.g., "Step 3: Fold both corners inward")', 'A 10-line unrelated story', 'No step number', 'Tiny unreadable text'], ans: 0, exp: 'Clear captions link the visual directly to the verbal step.' },
      { text: 'When designing a school poster "How to Evacuate Safely During an Earthquake", which visual cue helps readers most?', opts: ['High-contrast icons (Drop, Cover, Hold On) with large bold numbered steps readable from a distance', 'Tiny gray text with no pictures', 'Dark text on a black background', 'Random unrelated clipart'], ans: 0, exp: 'Readability and clear visual hierarchy save time in emergencies.' },
    ],
  },

  // BAB 3: EXPRESSING OPINIONS (4 sub)
  {
    topicCode: 'BIG-SMP9-03', subSeq: 1,
    objectives: ['Students state personal and general opinions naturally in English using varied expressions.'],
    materialTitle: 'Stating Opinions Clearly',
    blocks: [
      { type: 'flashcards', title: 'Natural Opinion Starters (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'In my opinion, ... / In my view, ...', back: 'Menurut pendapatku, ...' },
        { front: 'From my point of view, ...', back: 'Dari sudut pandangku, ...' },
        { front: 'I strongly believe that ...', back: 'Saya sangat meyakini bahwa ...' },
        { front: 'As far as I’m concerned, ...', back: 'Sejauh yang saya pandang, ...' },
      ]},
    ],
    activityTitle: 'Quiz: Stating Opinions',
    questions: [
      { text: 'Which sentence is a well-formed opinion statement?', opts: ['From my point of view, learning coding at school prepares students for future careers.', 'In my opinion, that school is.', 'I think is good.', 'Opinion my is yes.'], ans: 0, exp: '"From my point of view," + complete clause.' },
      { text: 'How do you politely ask a group for their opinion during a class discussion?', opts: ['"What are your thoughts on reducing plastic use in our canteen?"', '"Agree with me now!"', '"Did you eat lunch?"', '"Be quiet!"'], ans: 0, exp: '"What are your thoughts on...?" warmly invites perspectives.' },
      { text: 'Which expression shows a STRONGER conviction than "I guess..."?', opts: ['"I strongly believe that..."', '"Maybe..."', '"I’m not sure..."', '"Whatever..."'], ans: 0, exp: '"I strongly believe" expresses confident stance.' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-03', subSeq: 2,
    objectives: ['Students express strong agreement, partial agreement, and polite disagreement accurately.'],
    materialTitle: 'Agreeing and Politely Disagreeing',
    blocks: [
      { type: 'table', title: 'Spectrum of Agreement in English Discussions', headers: ['Level', 'Polite Expressions'], rows: [
        ['Strong Agreement', '"I couldn’t agree more!" / "Absolutely! You’re spot on."'],
        ['Partial Agreement', '"I agree up to a point, but..." / "That’s true, although..."'],
        ['Polite Disagreement', '"I respect your opinion, however I think..." / "I’m afraid I see it differently."'],
      ]},
    ],
    activityTitle: 'Quiz: Agree & Disagree',
    questions: [
      { text: 'What does the idiom "I couldn’t agree more!" actually mean?', opts: ['I completely / 100% agree with you!', 'I totally disagree with you.', 'I do not understand.', 'I refuse to agree.'], ans: 0, exp: 'Tricky English idiom! "Couldn’t agree more" = agreement is already at maximum (100%)!' },
      { text: 'Choose the MOST POLITE partial agreement:', opts: ['"You make a good point, though we should also consider the cost."', '"You are completely wrong!"', '"That’s ridiculous!"', '"No way!"'], ans: 0, exp: 'Validates the speaker’s point before adding another consideration.' },
      { text: 'Raka: "I think homework should be banned completely." Salsa disagrees politely:', opts: ['"I’m afraid I see it differently. A small amount of homework helps us review lessons at home."', '"You’re lazy!"', '"Shut up!"', '"I couldn’t agree more, ban it!"'], ans: 0, exp: 'Polite disagreement + clear constructive reason.' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-03', subSeq: 3,
    objectives: ['Students support opinions with logical reasons using conjunctions (because, since, as, therefore, due to).'],
    materialTitle: 'Supporting Opinions with Reasons',
    blocks: [
      { type: 'formula', name: 'Grammar Watch: "because" vs "because of / due to"', expression: 'because / since + CLAUSE (S + V)    |    because of / due to + NOUN PHRASE', note: 'Correct: "because it rained" (S+V) vs "because of the heavy rain" (noun phrase)!' },
    ],
    activityTitle: 'Quiz: Giving Reasons',
    questions: [
      { text: '"I support cycling to school ___ it keeps us healthy and reduces air pollution."', opts: ['because / since', 'because of', 'due to', 'despite'], ans: 0, exp: 'Followed by a full clause ("it keeps us healthy"), so use "because" or "since".' },
      { text: '"Many flights were delayed ___ the severe storm." (noun phrase)', opts: ['because of / due to', 'because', 'since', 'although'], ans: 0, exp: '"the severe storm" is a noun phrase → use "because of / due to".' },
      { text: '"Reading regularly expands our vocabulary; ___, it helps us write better essays."', opts: ['therefore / as a result', 'however', 'although', 'unless'], ans: 0, exp: '"Therefore" introduces a logical result/benefit.' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-03', subSeq: 4,
    objectives: ['Students apply opinion expressions appropriately in short opinion paragraphs and interactive dialogues.'],
    materialTitle: 'Using Opinion Expressions in Context',
    blocks: [
      { type: 'worked_example', level: 'OREO Opinion Paragraph', question: 'How do you write a solid 4-sentence English opinion paragraph?', steps: ['O — Opinion: "In my opinion, every classroom should have a mini reading corner."', 'R — Reason: "First, easy access to books encourages students to read during breaks."', 'E — Example: "For example, my class read 30 books last semester after setting up a bookshelf."', 'O — Opinion restated: "Therefore, a reading corner is a simple yet powerful way to build literacy."'], answer: 'Remember O-R-E-O: Opinion, Reason, Example, Opinion restated!' },
    ],
    activityTitle: 'Quiz: Opinion Expressions in Context',
    questions: [
      { text: 'In the OREO method for writing English opinion paragraphs, what does the letter "E" stand for?', opts: ['Example / Evidence that proves your reason', 'Ending', 'Emotion', 'Error'], ans: 0, exp: 'Opinion → Reason → Example → Opinion restated.' },
      { text: 'Which phrase introduces an EXAMPLE to strengthen your opinion?', opts: ['"For instance, ..." / "For example, ..."', '"In conclusion, ..."', '"On the other hand, ..."', '"Excuse me, ..."'], ans: 0, exp: '"For instance" and "For example" signal concrete evidence.' },
      { text: 'Choose the best concluding sentence for an opinion paragraph about saving electricity:', opts: ['"To sum up, small daily habits like turning off unused lights can make a big difference for our planet."', '"First of all, electricity is used at home."', '"Yesterday I bought a lamp."', '"What do you think?"'], ans: 0, exp: '"To sum up," cleanly restates the core opinion.' },
    ],
  },

  // BAB 4: PRESENTING IDEAS AND EXPERIENCES (4 sub)
  {
    topicCode: 'BIG-SMP9-04', subSeq: 1,
    objectives: ['Students structure a clear English presentation (Introduction, Signposting Body Points, Conclusion) with effective slides.'],
    materialTitle: 'Structuring an Effective English Presentation',
    blocks: [
      { type: 'flashcards', title: 'Presentation Signposting Phrases (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'Today, we are going to talk about three main points.', back: 'Hari ini, kami akan membahas tiga poin utama.' },
        { front: 'Let’s move on to the next slide.', back: 'Mari kita lanjut ke slide berikutnya.' },
        { front: 'As you can see in this chart...', back: 'Seperti yang dapat kalian lihat pada grafik ini...' },
        { front: 'In conclusion, I’d like to highlight...', back: 'Sebagai kesimpulan, saya ingin menekankan...' },
      ]},
    ],
    activityTitle: 'Quiz: Structuring Presentations',
    questions: [
      { text: 'What is "signposting" in an English presentation (e.g., "First of all...", "Moving on to my second point...", "To wrap up...")?', opts: ['Clear verbal cues that guide the audience through the structure of your talk', 'Putting street signs in the classroom', 'Reading every word from a paragraph', 'Skipping the conclusion'], ans: 0, exp: 'Signposting keeps listeners oriented from start to finish.' },
      { text: 'Which phrase smoothly introduces a visual chart or photo on your slide?', opts: ['"As you can see from this graph, our recycling rate doubled this semester."', '"Ignore this picture."', '"Thank you, goodbye."', '"Yesterday I made a slide."'], ans: 0, exp: 'Directs audience attention directly to the visual evidence.' },
      { text: 'A strong presentation introduction normally includes...', opts: ['Greeting, self-introduction, topic statement, and a brief outline/hook', 'Only saying "Bye!"', 'Reading the references first', 'Apologizing for not preparing'], ans: 0, exp: 'A confident opening builds credibility immediately.' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-04', subSeq: 2,
    objectives: ['Students share personal learning or project experiences engagingly during a presentation using Past Tense + reflections.'],
    materialTitle: 'Sharing Experiences in Presentations',
    blocks: [
      { type: 'text', text: 'Adding a brief real story ("Last month, our team tried making compost at school. At first it smelled bad, so we added dry leaves — and it worked!") makes any presentation 10× more memorable! Use Past Tense for what happened, and Present Tense for the lesson learned.' },
    ],
    activityTitle: 'Quiz: Sharing Experiences',
    questions: [
      { text: 'Complete the presentation reflection: "During our science fair project, we ___ several challenges, but we learned how to solve them together."', opts: ['faced', 'face', 'facing', 'will face'], ans: 0, exp: 'Past experience uses Past Tense ("faced" + "learned").' },
      { text: 'Which sentence shares the LESSON LEARNED (reflection) at the end of a project experience?', opts: ['"This experience taught me that teamwork and patience are the keys to success."', '"We started on Monday morning."', '"We bought two scissors and glue."', '"First, we cut the cardboard."'], ans: 0, exp: 'Highlights the meaningful takeaway for the audience.' },
      { text: 'Why is sharing a real mistake you fixed during a project actually GOOD in a student presentation?', opts: ['It shows honesty, problem-solving skills, and authentic learning', 'It proves you failed completely', 'It makes the teacher angry', 'You should hide all challenges'], ans: 0, exp: 'Explaining how you overcame an obstacle demonstrates real mastery.' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-04', subSeq: 3,
    objectives: ['Students explain main ideas clearly with definitions, cause-effect links, and concrete examples.'],
    materialTitle: 'Explaining Ideas Clearly to an Audience',
    blocks: [
      { type: 'tip', text: 'If you use a new term in English, immediately explain it simply: "This is called *upcycling* — which means turning old waste into something even more valuable!" Always check your audience’s faces to make sure they follow along.' },
    ],
    activityTitle: 'Quiz: Explaining Ideas',
    questions: [
      { text: 'Which phrase is best for clarifying a technical term during your talk?', opts: ['"In other words, it means..." / "Simply put, ..."', '"Look it up yourself."', '"I don’t know what it means either."', '"Never mind."'], ans: 0, exp: 'Paraphrasing clarifies complex ideas for listeners.' },
      { text: 'To keep your explanation easy to follow, how should you pace your English speech?', opts: ['Speak at a steady, moderate pace with brief pauses between key ideas', 'Rush as fast as possible to finish early', 'Whisper without opening your mouth', 'Pause for 1 minute after every word'], ans: 0, exp: 'Moderate pace + clear articulation makes English easy to understand.' },
      { text: '"Not only does cycling save money, ___ it also keeps our lungs strong." Complete this emphatic structure:', opts: ['but', 'or', 'because', 'so'], ans: 0, exp: 'Correlative pair: "Not only ... but also ...".' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-04', subSeq: 4,
    objectives: ['Students handle Q&A sessions politely — thanking questioners, answering concisely, asking for clarification, or admitting honestly when unsure.'],
    materialTitle: 'Responding to Questions (Q&A Session)',
    blocks: [
      { type: 'flashcards', title: 'Pro Q&A Responses (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'Thank you for that great question!', back: 'Terima kasih atas pertanyaan yang bagus itu!' },
        { front: 'Could you please repeat your question?', back: 'Bisakah kamu mengulang pertanyaanmu?' },
        { front: 'That’s an interesting point. Let me explain...', back: 'Itu poin yang menarik. Izinkan saya menjelaskan...' },
        { front: 'I’m not 100% sure about that exact number, but I will check and let you know.', back: 'Saya belum 100% yakin angka pastinya, namun akan saya cek dan kabari.' },
      ]},
    ],
    activityTitle: 'Quiz: Responding to Questions',
    questions: [
      { text: 'During Q&A, you did not hear a classmate’s question clearly because of noise. What should you say?', opts: ['"I’m sorry, could you please repeat your question a little louder?"', '"What?! Speak properly!"', 'Ignore the classmate and sit down', 'Make up an unrelated answer'], ans: 0, exp: 'Polite clarification shows respect and professionalism.' },
      { text: 'If someone asks a tough detail you genuinely do NOT know during Q&A, the BEST response is...', opts: ['"That’s a great question! I’m not sure about that detail right now, but I’ll look it up after class."', 'Invent fake statistics on the spot', 'Get angry at the questioner', 'Run out of the room'], ans: 0, exp: 'Honesty builds much more trust than guessing fake facts.' },
      { text: 'After answering a question, a polite way to check if the questioner is satisfied is:', opts: ['"Does that answer your question?"', '"Are you done now?"', '"Next!"', '"You should already know that."'], ans: 0, exp: 'Confirms clear communication warmly.' },
    ],
  },

  // BAB 5: UNDERSTANDING MULTIMODAL TEXTS (2 sub)
  {
    topicCode: 'BIG-SMP9-05', subSeq: 1,
    objectives: ['Students comprehend multimodal texts (posters, infographics, school announcements, digital banners, and social media posts).'],
    materialTitle: 'Understanding Posters, Infographics, & Digital Texts',
    blocks: [
      { type: 'text', text: 'A MULTIMODAL TEXT combines two or more modes of communication — such as written text, images/icons, colors, layout, charts, or audio/video — to deliver a message fast! Examples: event posters, health infographics, safety signs, school announcements, and educational web cards.' },
    ],
    activityTitle: 'Quiz: Multimodal Texts',
    questions: [
      { text: 'What makes an infographic or event poster a "MULTIMODAL" text?', opts: ['It combines written words with visual elements (images, icons, charts, color, layout) to convey meaning together', 'It only has plain black text with no layout', 'It is always 500 pages long', 'It has no words or pictures'], ans: 0, exp: 'Multi = many, modes = ways of communicating (verbal + visual + spatial).' },
      { text: 'A school poster reads: "GREEN CAMPUS DAY — Saturday, Oct 18, 07:30 AM at School Yard. Bring your own tumbler & 1 plant seedling! Contact OSIS." What MUST students bring?', opts: ['A reusable drinking bottle (tumbler) and one plant seedling', 'Plastic bottles', 'A laptop and charger', 'No items required'], ans: 0, exp: 'Scanning key details (date, time, venue, requirements) is essential for announcements/posters.' },
      { text: 'Who is the most likely target audience of an infographic titled "5 Smart Ways to Manage Study Time Before Final Exams"?', opts: ['Students (especially junior/senior high school students)', 'Toddlers', 'Pilots', 'Chefs'], ans: 0, exp: 'Topic, vocabulary, and imagery reveal the target audience.' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-05', subSeq: 2,
    objectives: ['Students analyze how verbal text and visual elements (color, typography, icons, graphs) reinforce each other to create meaning.'],
    materialTitle: 'Connecting Verbal and Visual Information',
    blocks: [
      { type: 'visual_cards', title: 'How Visuals Speak Alongside Words', cards: [
        { emoji: '🔴', label: 'Colors & Mood', sub: 'Red/yellow = warning/urgency; Green/blue = eco-friendly, health, calm' },
        { emoji: '🔠', label: 'Typography & Size', sub: 'Largest bold font = main headline/key takeaway first seen by the eye!' },
        { emoji: '📈', label: 'Charts & Icons', sub: 'Turn raw statistics into instant visual comparisons!' },
      ]},
    ],
    activityTitle: 'Quiz: Verbal & Visual Connection',
    questions: [
      { text: 'On a health poster about drinking enough water, a blue water-drop icon and a picture of an energized student appear beside the text "Stay Hydrated, Stay Focused!". How do the visuals support the text?', opts: ['The cool blue color and happy student image reinforce the message that water brings freshness and study focus', 'They contradict the message', 'They distract from water', 'They suggest avoiding water'], ans: 0, exp: 'Color psychology and imagery amplify the verbal slogan.' },
      { text: 'Why is the main event name or warning slogan usually printed in the LARGEST, BOLDEST font on a poster?', opts: ['To create visual hierarchy so readers immediately grasp the core message from afar', 'Because the designer ran out of small fonts', 'To hide the date', 'By pure accident'], ans: 0, exp: 'Visual hierarchy guides the reader’s eye from headline → key details → contact info.' },
      { text: 'If a digital news graphic shows a dramatic upward arrow next to "Sales rose from 98 to 100 units", a critical reader should...', opts: ['Check the actual numbers carefully, because the exaggerated arrow makes a tiny 2% rise look huge!', 'Believe sales tripled without reading the numbers', 'Share it immediately', 'Ignore all text'], ans: 0, exp: 'Critical multimodal literacy compares visual impression against actual verbal/numerical data.' },
    ],
  },

  // BAB 6: DISCUSSION AND COMMUNICATION (4 sub)
  {
    topicCode: 'BIG-SMP9-06', subSeq: 1,
    objectives: ['Students participate actively in simple English group discussions (opening, inviting others, turn-taking).'],
    materialTitle: 'Starting and Managing a Simple Group Discussion',
    blocks: [
      { type: 'flashcards', title: 'Group Discussion Starters (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'Shall we begin our discussion?', back: 'Bagaimana kalau kita mulai diskusinya?' },
        { front: 'Let’s hear from Alya first. What do you think?', back: 'Mari dengar dari Alya dulu. Bagaimana menurutmu?' },
        { front: 'Excuse me, may I add something?', back: 'Permisi, boleh saya menambahkan sesuatu?' },
      ]},
    ],
    activityTitle: 'Quiz: Simple Group Discussion',
    questions: [
      { text: 'If a quiet member in your English group hasn’t spoken yet, how can you politely include them?', opts: ['"Dito, we’d love to hear your idea too. What do you think?"', '"Why are you so silent?!"', 'Ignore Dito completely', '"You don’t need to talk."'], ans: 0, exp: 'Inclusive turn-taking encourages every group member to contribute.' },
      { text: 'How do you politely jump in to add an idea without rudely interrupting a speaker?', opts: ['Wait for a brief pause, then say: "Excuse me, may I add a quick point to that?"', 'Shout louder over their voice', 'Tap the desk loudly', 'Cut them off mid-word'], ans: 0, exp: 'Polite turn-taking keeps discussions respectful and productive.' },
      { text: 'Which phrase helps bring a group back on track when friends start chatting off-topic?', opts: ['"That’s fun, guys, but let’s get back to our main topic so we finish on time!"', '"Let’s forget the assignment."', '"Stop being my friends."', '"Goodbye."'], ans: 0, exp: 'Friendly redirection keeps group work focused.' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-06', subSeq: 2,
    objectives: ['Students exchange contrasting perspectives and weigh pros and cons naturally in English.'],
    materialTitle: 'Exchanging Perspectives (Pros and Cons)',
    blocks: [
      { type: 'table', title: 'Weighing Two Sides in English', headers: ['Function', 'Useful Phrases'], rows: [
        ['Showing One Side (Pro)', '"On the one hand, ..." / "One major advantage is..."'],
        ['Showing Other Side (Con)', '"On the other hand, ..." / "However, a possible drawback is..."'],
        ['Asking for Clarification', '"What do you mean by...?" / "Could you give an example?"'],
      ]},
    ],
    activityTitle: 'Quiz: Exchanging Perspectives',
    questions: [
      { text: '"On the one hand, online classes save travel time. ___, some students struggle with unstable internet."', opts: ['On the other hand', 'Therefore', 'For example', 'First of all'], ans: 0, exp: '"On the one hand ... On the other hand ..." balances pros and cons cleanly.' },
      { text: 'What does the word "drawback" mean in "One drawback of studying late at night is feeling sleepy in class"?', opts: ['A disadvantage / negative side', 'A huge benefit', 'A drawing book', 'A reward'], ans: 0, exp: 'Drawback = disadvantage / weakness.' },
      { text: 'When you do not fully understand a classmate’s argument in English, the best phrase to ask for clarity is:', opts: ['"Sorry, could you explain what you mean by that?"', '"Your English makes no sense!"', '"Whatever."', '"I’m leaving."'], ans: 0, exp: 'Asking for clarification prevents misunderstanding.' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-06', subSeq: 3,
    objectives: ['Students give constructive, encouraging feedback and thoughtful responses to peers’ ideas.'],
    materialTitle: 'Giving Constructive Responses and Feedback',
    blocks: [
      { type: 'tip', text: 'Give balanced feedback using the Praise + Suggestion pattern: "I really like your creative poster layout! Maybe we could make the date slightly bigger so everyone can see it easily."' },
    ],
    activityTitle: 'Quiz: Giving Responses',
    questions: [
      { text: 'Which peer feedback is MOST CONSTRUCTIVE for a friend’s draft presentation?', opts: ['"Your examples are super clear! To make it even better, try speaking a bit slower on slide 3."', '"It’s boring and messy."', '"Just give up."', '"Nothing to say."'], ans: 0, exp: 'Specific praise + one actionable improvement tip.' },
      { text: 'Alya: "Maybe we could collect used books to donate to a village library." Best supportive response:', opts: ['"That’s a fantastic idea! I can help design the announcement poster."', '"I don’t care."', '"No, books are heavy."', '"What’s for dinner?"'], ans: 0, exp: 'Builds positively on a teammate’s suggestion with an offer to help.' },
      { text: 'Active listening in English communication involves...', opts: ['Making eye contact, nodding, paraphrasing key points, and responding relevantly', 'Looking at your phone while others speak', 'Planning to interrupt', 'Ignoring questions'], ans: 0, exp: 'Good communication starts with attentive listening.' },
    ],
  },
  {
    topicCode: 'BIG-SMP9-06', subSeq: 4,
    objectives: ['Students summarize group discussion results and state clear agreed conclusions in English.'],
    materialTitle: 'Summarizing and Concluding a Discussion',
    blocks: [
      { type: 'flashcards', title: 'Closing & Conclusion Phrases (Tap to Listen!)', lang: 'en-US', cards: [
        { front: 'So, to summarize our discussion, we all agree that...', back: 'Jadi, untuk merangkum diskusi kita, kita semua sepakat bahwa...' },
        { front: 'In short, we have decided to...', back: 'Singkatnya, kita telah memutuskan untuk...' },
        { front: 'Let’s review who is responsible for each task.', back: 'Mari kita cek ulang siapa yang bertanggung jawab atas tiap tugas.' },
      ]},
    ],
    activityTitle: 'Quiz: Concluding a Discussion',
    questions: [
      { text: 'Which sentence is BEST for summarizing the final decision of a group discussion?', opts: ['"To conclude, our group agrees to create an eco-friendly poster and present it next Tuesday."', '"Let’s start talking now."', '"What do you think?"', '"On the other hand..."'], ans: 0, exp: 'Captures the shared agreement and clear next action.' },
      { text: 'Why is it important to briefly repeat the agreed conclusion at the end of a group meeting?', opts: ['To make sure every member shares the exact same understanding of the decision and next steps', 'To start a new argument', 'To erase the notes', 'To confuse the group'], ans: 0, exp: 'Confirming consensus avoids miscommunication later.' },
      { text: '"All in all, both sides have valid points, so we should find a balanced solution." What does "All in all" mean?', opts: ['Considering everything / In conclusion', 'Nobody agrees', 'First of all', 'In the past'], ans: 0, exp: '"All in all" = secara keseluruhan / sebagai simpulan.' },
    ],
  },
];

upsertLessonsBatch('Kelas 9 SMP — Bahasa Inggris (6 Bab, 21 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

