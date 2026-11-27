import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: TEKS INFORMASI BASA JAWA (Gresik Daratan)
  {
    topicCode: 'BJ-SD6-01', subSeq: 1,
    objectives: ['Siswa mampu menemukan gagasan utama (ukara baku) dalam teks informasi berbahasa Jawa.'],
    materialTitle: 'Gagasan Utama Teks Informasi Basa Jawa',
    blocks: [
      { type: 'story_panel', title: 'Wacan Informasi: Tambak Bandeng ing Gresik', lines: [
        { speaker: 'Wacan', avatar: '🐟', text: 'Kabupaten Gresik kawentar minangka salah sawijining dhaerah penghasil iwak bandeng ing Jawa Timur. Akeh warga ing wilayah pesisir Gresik sing nyambut gawe dadi petani tambak. Iwak bandeng hasil panen diolah dadi maneka warna panganan enak kayata otak-otak bandeng lan bandeng presto.' },
      ]},
      { type: 'tip', text: 'Gagasan utama (ide pokok) paragraf ing dhuwur manggon ing ukara kapisan: Gresik kawentar minangka penghasil iwak bandeng ing Jawa Timur!' },
    ],
    activityTitle: 'Latihan: Gagasan Utama Jawa',
    questions: [
      { text: 'Tembung "kawentar" ing wacan dhuwur tegese...', opts: ['Terkenal / tersohor', 'Sepi', 'Jauh', 'Kecil'], ans: 0, exp: 'Kawentar = kondhang / misuwur / terkenal.' },
      { text: 'Gagasan utama wacan ing dhuwur yaiku...', opts: ['Gresik kawentar minangka dhaerah penghasil iwak bandeng ing Jawa Timur', 'Cara mancing ing kali', 'Rega iwak larang banget', 'Jenis-jenis kapal'], ans: 0, exp: 'Ukara kapisan mratelakake inti paragraf.' },
      { text: 'Gagasan utama ing teks informasi basa Jawa tansah manggon ing sajroning...', opts: ['Ukara baku (kalimat utama)', 'Tanda koma', 'Parikan', 'Sampiran'], ans: 0, exp: 'Ukara baku = kalimat utama.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-01', subSeq: 2,
    objectives: ['Siswa mampu menggali informasi rinci teks Bahasa Jawa menggunakan tembung pitakon 5W+1H (Apa, Sapa, Ing ngendi, Kapan, Geneya, Kepriye).'],
    materialTitle: 'Informasi Rinci nganggo Tembung Pitakon Jawa',
    blocks: [
      { type: 'table', title: '6 Tembung Pitakon Basa Jawa', headers: ['Ngoko', 'Krama', 'Kanggone Takon'], rows: [
        ['Apa', 'Punapa', 'Barang / bab sing dirembug'],
        ['Sapa', 'Sinten', 'Wong / paraga'],
        ['Ing ngendi', 'Wonten pundi', 'Panggonan'],
        ['Kapan', 'Benjang punapa', 'Wektu'],
        ['Geneya / Kenangapa', 'Kenging punapa', 'Sebab / alasan'],
        ['Kepriye', 'Kados pundi', 'Cara / kahanan'],
      ]},
    ],
    activityTitle: 'Latihan: Informasi Rinci Jawa',
    questions: [
      { text: 'Tembung pitakon basa Jawa "Geneya" utawa "Kenging punapa" kanggo takon...', opts: ['Sebab / alasan (Mengapa)', 'Panggonan', 'Wektu', 'Jumlah'], ans: 0, exp: 'Geneya / kenangapa = mengapa.' },
      { text: 'Basa krama saka tembung pitakon "kepriye" (bagaimana) yaiku...', opts: ['Kados pundi', 'Wonten pundi', 'Sinten', 'Pinten'], ans: 0, exp: 'Kepriye = kados pundi.' },
      { text: 'Ing wacan "Tambak Bandeng", pitakonan "Apa wae olahan iwak bandeng sing disebutake?" mangsuli informasi rinci yaiku...', opts: ['Otak-otak bandeng lan bandeng presto', 'Pudak lan krawu', 'Rawon lan soto', 'Gudeg lan sate'], ans: 0, exp: 'Tinulis cetha ing ukara pungkasan wacan.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-01', subSeq: 3,
    objectives: ['Siswa mampu membedakan kalimat fakta (kasunyatan) dan opini (panemu) dalam teks informasi Bahasa Jawa.'],
    materialTitle: 'Kasunyatan (Fakta) lan Panemu (Opini)',
    blocks: [
      { type: 'table', title: 'Beda Kasunyatan vs Panemu', headers: ['Jenis', 'Conto Ukara Basa Jawa'], rows: [
        ['Kasunyatan (Fakta)', 'Kabupaten Gresik mapan ing Provinsi Jawa Timur lan wewatesan karo Kutha Surabaya.'],
        ['Panemu (Opini)', 'Miturutku, sega krawu iku panganan paling enak ing sadonya.'],
      ]},
    ],
    activityTitle: 'Latihan: Fakta & Opini Jawa',
    questions: [
      { text: 'Tembung "kasunyatan" ing basa Indonesia tegese...', opts: ['Fakta / kenyataan', 'Khayalan', 'Dongeng', 'Candaan'], ans: 0, exp: 'Kasunyatan = kenyataan/fakta; panemu = pendapat/opini.' },
      { text: 'Manakah ukara sing kalebu PANEMU (opini)?', opts: ['Srengenge mlethek ing sisih wetan.', 'Miturutku, sinau basa Jawa iku luwih gampang tinimbang matematika.', 'Setunggal taun wonten kalih welas wulan.', 'Aksara legena cacahe ana rong puluh.'], ans: 1, exp: 'Tembung "miturutku" (menurutku) nuduhake panemu pribadi.' },
      { text: 'Teks pawarta (berita) lan teks informasi sing apik kudu ngutamakake...', opts: ['Kasunyatan sing bener lan bisa dibuktekake', 'Kabar ngapusi', 'Cangkriman', 'Pangira-ira wae'], ans: 0, exp: 'Pawarta kudu adhedhasar fakta nyata.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-01', subSeq: 4,
    objectives: ['Siswa mampu meringkas dan menyampaikan kembali isi teks informasi Bahasa Jawa dengan bahasanya sendiri.'],
    materialTitle: 'Nyritakake Maneh Isi Teks Informasi',
    blocks: [
      { type: 'list', title: 'Langkah Ngringkes lan Nyampake Isi Wacan', items: ['1. Wacanen teks kanthi premati saka wiwitan nganti pungkasan.', '2. Catheten gagasan utama saben paragraf lan fakta penting.', '3. Rangkai maneh nganggo ukara cendhak sing runtut lan sopan (krama yen matur marang guru)!'] },
    ],
    activityTitle: 'Latihan: Menyampaikan Kembali Isi',
    questions: [
      { text: 'Tembung "premati" ing ukara "Wacanen kanthi premati" tegese...', opts: ['Asal-asalan', 'Teliti lan saksama', 'Cepet banget', 'Sambil turu'], ans: 1, exp: 'Premati = teliti/cermat.' },
      { text: 'Nalika nyampake ringkesan teks informasi marang Bapak/Ibu Guru ing ngarep kelas, basa sing paling trep yaiku...', opts: ['Basa krama sing alus lan cetha', 'Ngoko kasar', 'Basa sing ora cetha', 'Meneng wae'], ans: 0, exp: 'Nganggo krama nuduhake unggah-ungguh marang guru.' },
      { text: 'Ringkesan teks informasi ora kena...', opts: ['Ngowahi fakta asli sing ana ing wacan', 'Luwih ringkes saka wacan asline', 'Ngemot gagasan utama', 'Runtut'], ans: 0, exp: 'Isi ringkesan kudu setya marang fakta teks asli.' },
    ],
  },

  // BAB 2: TEKS PIWULANG LAN PESEN MORAL
  {
    topicCode: 'BJ-SD6-02', subSeq: 1,
    objectives: ['Siswa mampu memahami isi teks piwulang (nasihat budi pekerti) berbahasa Jawa.'],
    materialTitle: 'Teks Piwulang (Nasihat Luhur)',
    blocks: [
      { type: 'story_panel', title: 'Piwulang Bapak marang Anak', lines: [
        { speaker: 'Bapak', avatar: '👨', text: 'Ngger, yen wis arep lulus SD lan mlebu SMP, kudu tambah sregep sinau lan ngati-ati milih kanca. Aja gampang umuk yen oleh biji apik, lan aja cilik ati yen nemu angel. Tansah ngabekti marang wong tuwa lan guru!' },
      ]},
      { type: 'tip', text: 'Tembung "ngger" iku celukan tresna wong tuwa marang anake; "cilik ati" tegese gampang nyerah/putus asa!' },
    ],
    activityTitle: 'Latihan: Teks Piwulang',
    questions: [
      { text: 'Tembung "piwulang" tegese...', opts: ['Pelajaran / nasihat kebaikan', 'Hukuman', 'Lomba', 'Makanan'], ans: 0, exp: 'Piwulang = ajaran/nasihat luhur.' },
      { text: 'Ing piwulang Bapak ing dhuwur, tegese "aja cilik ati" yaiku...', opts: ['Jangan mudah putus asa / berkecil hati', 'Jangan makan sedikit', 'Jangan sombong', 'Jangan tidur'], ans: 0, exp: 'Cilik ati = berkecil hati / mudah menyerah.' },
      { text: 'Piwulang Bapak marang anak sing arep mlebu SMP ngajak supaya...', opts: ['Sregep sinau, andhap asor, ngati-ati milih kanca, lan bekti marang wong tuwa/guru', 'Umuk yen oleh biji apik', 'Malas sinau', 'Lali karo guru'], ans: 0, exp: 'Kabeh nilai luhur kasebut dadi sangu urip bocah.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-02', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi nilai budi pekerti Jawa (tepa slira, andhap asor, gotong royong, jujur, nrima).'],
    materialTitle: 'Nilai Budi Pekerti Luhur Jawa',
    blocks: [
      { type: 'visual_cards', title: '4 Nilai Budi Pekerti Luhur', cards: [
        { emoji: '❤️', label: 'Tepa Slira', sub: 'Tenggang rasa — merasakan apa yang dirasakan orang lain agar tidak menyakiti' },
        { emoji: '🙇', label: 'Andhap Asor', sub: 'Rendah hati, sopan, dan tidak menyombongkan diri' },
        { emoji: '🤝', label: 'Gugur Gunung / Gotong Royong', sub: 'Kerja sama bahu-membahu demi kepentingan bersama' },
        { emoji: '✨', label: 'Jujur lan Tanggung Jawab', sub: 'Berkata sesuai kenyataan dan berani menanggung kewajiban' },
      ]},
    ],
    activityTitle: 'Latihan: Nilai Budi Pekerti',
    questions: [
      { text: 'Sikap tenggang rasa lan njaga supaya ora nglarani atine wong liya ing budaya Jawa diarani...', opts: ['Tepa slira', 'Umuk', 'Drengki', 'Kesed'], ans: 0, exp: 'Tepa slira = empati / tenggang rasa.' },
      { text: 'Conto tumindak "andhap asor" ing sekolah yaiku...', opts: ['Senajan juara kelas, tetep ramah lan gelem ngajari kanca sing durung paham', 'Mamerake bijine karo ngece kanca', 'Ora gelem kancanan', 'Nulak tugas piket'], ans: 0, exp: 'Rendah hati tidak merendahkan orang lain.' },
      { text: 'Nilai budi pekerti sing njalari kanca-kanca percaya marang omongan kita yaiku...', opts: ['Kejujuran', 'Kesombongan', 'Kemalasan', 'Keegoisan'], ans: 0, exp: 'Kejujuran membangun kepercayaan.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-02', subSeq: 3,
    objectives: ['Siswa mampu mengambil dan menerapkan pesan moral dari kisah keteladanan dalam kehidupan sehari-hari.'],
    materialTitle: 'Ngetrapake Pesen Moral ing Urip Padinan',
    blocks: [
      { type: 'worked_example', level: 'Refleksi Sikap', question: 'Kancamu ora sengaja nyenggol botol ngombemu nganti tumpah, banjur dheweke langsung njaluk ngapura lan ngrewangi ngelap. Kepriye sikapmu miturut tepa slira?', steps: ['Elinga yen kancamu ora sengaja lan wis tanggung jawab njaluk ngapura.', 'Sikap becik: ngapura kanthi legawa lan mesem supaya tetep rukun!'], answer: 'Ngapura kanthi ati jembar (legawa) njaga kekancan.' },
    ],
    activityTitle: 'Latihan: Penerapan Pesan Moral',
    questions: [
      { text: 'Tembung "legawa" nalika ngapura kaluputane kanca tegese...', opts: ['Ikhlas lan lapang dada', 'Nesu banget', 'Mbalas dendam', 'Nangis'], ans: 0, exp: 'Legawa = ikhlas / lapang dada.' },
      { text: 'Pesen moral sing diwaca saka crita utawa teks piwulang bakal migunani yen...', opts: ['Diterapake ing tumindak saben dina ing omah lan sekolah', 'Mung diapalke kanggo ujian banjur dilalekake', 'Ora tau ditindakake', 'Disingidake'], ans: 0, exp: 'Ilmu budi pekerti dibuktekake liwat laku nyata.' },
      { text: 'Yen weruh kanca kesusahan nggawa buku tumpukan akeh, tumindak becik kita yaiku...', opts: ['Langsung nawani lan mbantu nggawakake sebagian', 'Mung ndeleng karo ngguyu', 'Ngalangi dalane', 'Mlayu lunga'], ans: 0, exp: 'Seneng tetulung wujud nyata tepa slira.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-02', subSeq: 4,
    objectives: ['Siswa mampu memahami makna ungkapan dan paribasan Jawa populer yang terverifikasi.'],
    materialTitle: 'Paribasan lan Unen-Unen Jawa Terverifikasi',
    blocks: [
      { type: 'table', title: '5 Paribasan Jawa Populer & Tegese', headers: ['Paribasan Jawa', 'Tegese (Makna Budi Pekerti)'], rows: [
        ['Rukun agawe santosa, crah agawe bubrah', 'Kerukunan membawa kekuatan, pertengkaran membawa kehancuran'],
        ['Becik ketitik, ala ketara', 'Perbuatan baik pasti tampak, perbuatan buruk akhirnya ketahuan'],
        ['Jer basuki mawa beya', 'Setiap keberhasilan memerlukan pengorbanan dan usaha (semboyan Provinsi Jawa Timur!)'],
        ['Ajining dhiri dumunung ing lathi', 'Harga diri seseorang terletak pada tutur kata/ucapannya'],
        ['Sapa nandur bakal ngundhuh', 'Siapa menanam kebaikan (atau keburukan), ia sendiri yang akan memetik hasilnya'],
      ]},
    ],
    activityTitle: 'Latihan: Paribasan Jawa',
    questions: [
      { text: 'Semboyan Provinsi Jawa Timur "Jer basuki mawa beya" tegese...', opts: ['Setiap keberhasilan/keselamatan memerlukan usaha dan pengorbanan', 'Keberhasilan datang tanpa usaha', 'Hanya orang kaya yang berhasil', 'Jangan pernah bekerja'], ans: 0, exp: 'Basuki = selamat/sejahtera, beya = biaya/usaha/pengorbanan.' },
      { text: 'Paribasan "Ajining dhiri dumunung ing lathi" ngelingake kita supaya tansah njaga...', opts: ['Tutur kata / ucapan kita agar selalu jujur dan sopan', 'Sepatu anyar', 'Sepedha', 'Tas sekolah'], ans: 0, exp: 'Lathi = bibir / ucapan.' },
      { text: 'Anak yang rajin belajar sejak kelas 1 hingga kelas 6 akhirnya meraih prestasi gemilang. Paribasan sing cocog yaiku...', opts: ['Sapa nandur bakal ngundhuh', 'Crah agawe bubrah', 'Becik ketitik wae', 'Aja cilik ati'], ans: 0, exp: 'Menanam ketekunan, memetik keberhasilan.' },
    ],
  },

  // BAB 3: AKSARA JAWA: TEMBUNG LAN UKARA
  {
    topicCode: 'BJ-SD6-03', subSeq: 1,
    objectives: ['Siswa mampu menguatkan penguasaan 20 Aksara Legena, 20 Pasangan, dan seluruh Sandhangan (swara, panyigeg wanda, wyanjana).'],
    materialTitle: 'Penguatan Legena, Pasangan, lan Sandhangan',
    blocks: [
      { type: 'table', title: 'Ringkasan Cepat Aturan Tulis Aksara Jawa', headers: ['Unsur', 'Fungsi Utama', 'Contoh'], rows: [
        ['Aksara Legena (20)', 'Huruf dasar bervokal "a"', 'ꦲ ꦤ ꦕ ꦫ ꦏ ... ꦩ ꦒ ꦧ ꦛ ꦔ'],
        ['Sandhangan Swara (5)', 'Mengubah vokal a → i, u, é, ê, o', 'wulu (ꦶ), suku (ꦸ), taling (ꦺ), pepet (ꦼ), taling tarung (ꦺꦴ)'],
        ['Panyigeg Wanda (4)', 'Penutup suku kata mati (-h, -r, -ng, mati akhir)', 'wignyan (ꦃ), layar (ꦂ), cecak (ꦁ), pangkon (꧀)'],
        ['Pasangan (20)', 'Mematikan vokal aksara sebelumnya di tengah kalimat', 'HSP (ha, sa, pa) di samping kanan; 17 lainnya di bawah!'],
      ]},
      { type: 'tip', text: 'Aturan khusus yang sering keluar di ujian: "re" (pepet) tidak ditulis ꦫꦼ melainkan Pa Cerek (ꦉ); "le" (pepet) tidak ditulis ꦭꦼ melainkan Nga Lelet (ꦊ)!' },
    ],
    activityTitle: 'Latihan: Penguatan Aksara Jawa',
    questions: [
      { text: 'Sandhangan panyigeg wanda kanggo nulis akhiran "-h" (kayata "omah", "sawah") diarani...', opts: ['Wignyan (ꦃ)', 'Layar (ꦂ)', 'Cecak (ꦁ)', 'Wulu (ꦶ)'], ans: 0, exp: 'Wignyan = -h; Layar = -r; Cecak = -ng.' },
      { text: 'Sandhangan wyanjana "Cakra" (ꦿ) berfungsi menyisipkan bunyi "-r-" seperti pada kata "krama" (ꦏꦿꦩ). Sedangkan bunyi "-re-" (seperti pada "resik") ditulis khusus memakai...', opts: ['Pa Cerek (ꦉ)', 'Nga Lelet (ꦊ)', 'Wulu', 'Taling'], ans: 0, exp: 'Pa Cerek (ꦉ) menggantikan ꦫꦼ; Nga Lelet (ꦊ) menggantikan ꦭꦼ.' },
      { text: 'Pasangan aksara Jawa yang letaknya di SAMPING KANAN aksara sebelumnya adalah...', opts: ['ha, sa, pa', 'ka, da, ta', 'ma, ga, ba', 'na, ca, ra'], ans: 0, exp: 'Hanya 3 pasangan di kanan: ha, sa, pa.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-03', subSeq: 2,
    objectives: ['Siswa mampu membaca dan menuliskan kalimat pendek (ukara sederhana) dalam Aksara Jawa lengkap dengan tanda baca pada lingsa dan pada lungsi.'],
    materialTitle: 'Maca lan Nulis Ukara Aksara Jawa',
    blocks: [
      { type: 'table', title: 'Conto Ukara Aksara Jawa & Tanda Baca (Pada)', headers: ['Aksara Jawa', 'Wacane (Latin)', 'Cathetan'], rows: [
        ['꧋ꦲꦶꦧꦸꦠꦸꦏꦸꦱꦺꦴꦠꦺꦴ꧉', 'Ibu tuku soto.', '꧋ (adeg-adeg = awal kalimat), ꧉ (pada lungsi = titik akhir)'],
        ['꧋ꦧꦥꦏ꧀ꦩꦕꦧꦸꦏꦸ꧉', 'Bapak maca buku.', 'Huruf "k" ing bapak dipateni pasangan ma (꧀ꦩ)!'],
        ['꧋ꦱꦶꦠꦶꦱꦶꦤꦲꦸ ing omah → ꧋ꦱꦶꦠꦶꦱꦶꦤꦲꦸ꧉', 'Siti sinau.', 'sa+wulu, ta+wulu, sa+wulu, na, ha+suku'],
      ]},
      { type: 'tip', text: 'Tanda baca Aksara Jawa: Adeg-adeg (꧋) di awal kalimat, Pada Lingsa (꧈) untuk koma (,), dan Pada Lungsi (꧉) untuk titik (.)!' },
    ],
    activityTitle: 'Latihan: Membaca & Menulis Ukara Jawa',
    questions: [
      { text: 'Tanda baca Aksara Jawa "꧉" (Pada Lungsi) ing pungkasan ukara padha karo tanda baca...', opts: ['Koma (,)', 'Titik (.)', 'Tanda tanya (?)', 'Tanda seru (!)'], ans: 1, exp: 'Pada Lingsa (꧈) = koma; Pada Lungsi (꧉) = titik; Adeg-adeg (꧋) = pembuka kalimat.' },
      { text: 'Ukara Aksara Jawa "꧋ꦲꦶꦧꦸꦠꦸꦏꦸꦱꦺꦴꦠꦺꦴ꧉" diwaca...', opts: ['Ibu tuku soto.', 'Ibu tuku sate.', 'Bapak tuku soto.', 'Ibu maca buku.'], ans: 0, exp: 'ꦲꦶ(i) ꦧꦸ(bu) ꦠꦸ(tu) ꦏꦸ(ku) ꦱꦺꦴ(so) ꦠꦺꦴ(to).' },
      { text: 'Ing ukara "Bapak maca buku", huruf "k" ing tembung "Bapak" dipateni nganggo...', opts: ['Pasangan ma (amarga tembung sabanjure "maca")', 'Pangkon', 'Cecak', 'Layar'], ans: 0, exp: 'Ing tengah ukara kudu nganggo pasangan huruf sabanjure (pasangan ma).' },
    ],
  },

  // BAB 4: TEMBANG MACAPAT: ISI LAN PAUGERAN DASAR
  {
    topicCode: 'BJ-SD6-04', subSeq: 1,
    objectives: ['Siswa mampu mengenal contoh Tembang Macapat pilihan kelas 6 (Gambuh dan Kinanthi) beserta wataknya.'],
    materialTitle: 'Tembang Macapat Pilihan: Gambuh lan Kinanthi',
    blocks: [
      { type: 'story_panel', title: 'Conto Tembang Gambuh (Serat Wulangreh)', lines: [
        { speaker: 'Gambuh', avatar: '🎶', text: 'Sekar gambuh ping catur (7u) / Kang cinatur polah kang kalantur (10u) / Tanpa tutur katula-tula katali (12i) / Kadaluwarsa kapatuh (8u) / Kapatuh pan dadi awon (8o).' },
      ]},
      { type: 'tip', text: 'Gambuh nduweni watak grapyak, semanak, lan cocok kanggo menehi pitutur supaya nyingkiri pakulinan ala!' },
    ],
    activityTitle: 'Latihan: Tembang Macapat Pilihan',
    questions: [
      { text: 'Tembang Gambuh ing dhuwur kapethik saka karya sastra klasik Jawa terkenal yaiku...', opts: ['Serat Wulangreh (karya Sri Susuhunan Pakubuwana IV)', 'Novel modern', 'Koran harian', 'Kamus'], ans: 0, exp: 'Tembang Gambuh terkenal tersebut berasal dari Serat Wulangreh.' },
      { text: 'Watak Tembang Gambuh yaiku...', opts: ['Grapyak, semanak, lan cocog kanggo pitutur', 'Nesu lan perang', 'Sedhih banget', 'Bingung'], ans: 0, exp: 'Gambuh bersifat ramah/akrab untuk menasihati.' },
      { text: 'Cacahe gatra (baris) ing saben sak pada Tembang Gambuh yaiku...', opts: ['4 gatra', '5 gatra', '6 gatra', '7 gatra'], ans: 1, exp: 'Gambuh memiliki 5 gatra: 7u, 10u, 12i, 8u, 8o.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-04', subSeq: 2,
    objectives: ['Siswa mampu membandingkan pola dasar (guru gatra, guru wilangan, guru lagu) Pocung, Gambuh, dan Kinanthi.'],
    materialTitle: 'Pola Dasar Paugeran Macapat',
    blocks: [
      { type: 'table', title: 'Perbandingan Paugeran 3 Pupuh Macapat Populer', headers: ['Pupuh', 'Guru Gatra', 'Guru Wilangan & Guru Lagu'], rows: [
        ['Pocung', '4 gatra', '12u, 6a, 8i, 12a'],
        ['Gambuh', '5 gatra', '7u, 10u, 12i, 8u, 8o'],
        ['Kinanthi', '6 gatra', '8u, 8i, 8a, 8i, 8a, 8i'],
      ]},
    ],
    activityTitle: 'Latihan: Pola Dasar Macapat',
    questions: [
      { text: 'Paugeran Tembang Gambuh (5 gatra) sing BENER yaiku...', opts: ['7u, 10u, 12i, 8u, 8o', '12u, 6a, 8i, 12a', '8u, 8i, 8a, 8i, 8a, 8i', '8a, 11i, 8u, 7a'], ans: 0, exp: 'Gambuh: 7u, 10u, 12i, 8u, 8o.' },
      { text: 'Tembang Macapat sing nduweni 6 gatra lan kabeh guru wilangane 8 wanda (8u, 8i, 8a, 8i, 8a, 8i) yaiku...', opts: ['Pocung', 'Gambuh', 'Kinanthi', 'Mijil'], ans: 2, exp: 'Kinanthi sangat mudah dikenali karena 6 baris semuanya 8 suku kata!' },
      { text: 'Pada gatra "Ka-da-lu-war-sa ka-pa-tuh", guru wilangan lan guru lagune yaiku...', opts: ['7u', '8u', '8a', '9u'], ans: 1, exp: 'Ada 8 suku kata dengan vokal akhir "u" (tuh) → 8u.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-04', subSeq: 3,
    objectives: ['Siswa mampu mengartikan kosakata sastra (tembung angel/Kawi) yang muncul dalam Tembang Macapat.'],
    materialTitle: 'Kosakata ing Tembang Macapat',
    blocks: [
      { type: 'flashcards', title: 'Tegese Tembung Angel ing Gambuh (Klik!)', cards: [
        { emoji: '🌸', front: 'Sekar', back: 'Tembang / Kembang' },
        { emoji: '4️⃣', front: 'Catur', back: 'Papat (4) utawa omongan (cinatur = diomongake)' },
        { emoji: '🏃', front: 'Polah', back: 'Tingkah laku / tumindak' },
        { emoji: '📢', front: 'Tutur', back: 'Pitutur / nasihat' },
        { emoji: '⚠️', front: 'Awon', back: 'Ala (buruk/jelek)' },
      ]},
    ],
    activityTitle: 'Latihan: Kosakata Macapat',
    questions: [
      { text: 'Ing Tembang Gambuh, tembung "awon" tegese...', opts: ['Apik', 'Ala (buruk)', 'Enak', 'Dhuwur'], ans: 1, exp: 'Awon (krama) = ala (ngoko) = buruk.' },
      { text: 'Tembung "polah" tegese...', opts: ['Tingkah laku / perbuatan', 'Pakaian', 'Makanan', 'Rumah'], ans: 0, exp: 'Polah = perilaku/tingkah laku.' },
      { text: 'Tembung "tutur" ing "tanpa tutur" tegese...', opts: ['Nasihat / petunjuk baik', 'Sepatu', 'Uang', 'Buku'], ans: 0, exp: 'Tanpa tutur = tanpa nasihat/bimbingan.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-04', subSeq: 4,
    objectives: ['Siswa mampu memparafrasekan (nggancarake) isi bait Tembang Macapat menjadi paragraf bahasa sehari-hari.'],
    materialTitle: 'Parafrasa (Nggancarake) Isi Tembang Macapat',
    blocks: [
      { type: 'worked_example', level: 'Nggancarake Gambuh', question: 'Gancarna (parafrasekan) isi Tembang Gambuh "Sekar gambuh ping catur..." nganggo basa padinan!', steps: ['Larik 1–2: Tembang Gambuh iki ngrembug tingkah laku sing kebacut (melampaui batas).', 'Larik 3: Yen tanpa nasihat, wong bisa kesasar lan nemu kesusahan.', 'Larik 4–5: Yen wis kebacut dadi pakulinan, pakulinan kasebut bakal dadi ala (buruk).'], answer: 'Tingkah laku sing ora gelem nampa nasihat suwe-suwe dadi pakulinan ala sing angel diowahi.' },
    ],
    activityTitle: 'Latihan: Parafrasa Macapat',
    questions: [
      { text: 'Ngowahi wujude Tembang Macapat dadi karangan gancaran (prosa/paragraf biasa) supaya gampang dimangerteni diarani...', opts: ['Nggancarake (parafrase)', 'Nembang', 'Nyalin aksara', 'Nggawe parikan'], ans: 0, exp: 'Nggancarake = memparafrasekan tembang menjadi prosa.' },
      { text: 'Langkah kapisan sadurunge nggancarake Tembang Macapat yaiku...', opts: ['Goleki tegese tembung-tembung angel (kosakata sastra) ing tembang kasebut', 'Langsung ngarang crita liya', 'Mbusak separo gatra', 'Ngitung jumlah huruf'], ans: 0, exp: 'Ngerti tegese saben tembung nggawe parafrase pas karo maknane.' },
      { text: 'Inti parafrase Tembang Gambuh ing dhuwur ngelingake babagan bahaya...', opts: ['Pakulinan ala sing dibiarke nganti kebacut tanpa gelem ngrungokake nasihat', 'Kakehan maca buku', 'Tangi esuk', 'Sinau matematika'], ans: 0, exp: 'Kebiasaan buruk yang dibiarkan menjadi sulit diperbaiki.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-04', subSeq: 5,
    objectives: ['Siswa mampu menyimpulkan pesan moral (pitutur luhur) Tembang Macapat dan mengaitkannya dengan perilaku pelajar.'],
    materialTitle: 'Pesen Luhur Tembang Macapat',
    blocks: [
      { type: 'tip', text: 'Pitutur Tembang Gambuh kanggo siswa kelas 6: biasakna pakulinan BECIK wiwit saiki (disiplin, jujur, manut nasihat wong tuwa & guru) amarga pakulinan cilik bakal mbentuk watakmu nalika gedhe!' },
    ],
    activityTitle: 'Latihan: Pesan Tembang Macapat',
    questions: [
      { text: 'Pesen moral utama Tembang Gambuh "Sekar gambuh ping catur..." kanggo siswa kelas 6 yaiku...', opts: ['Gelem ngrungokake nasihat becik lan aja mbiasakake tumindak ala wiwit cilik', 'Ora usah manut wong tuwa', 'Niru pakulinan kesed', 'Gampang nesu'], ans: 0, exp: 'Nasihat sejak dini mencegah terbentuknya kebiasaan buruk.' },
      { text: 'Ing Tembang Kinanthi "Padha gulangen ing kalbu, ing sasmita amrih lantip", siswa diajak supaya...', opts: ['Nglatih ati lan pikiran supaya pinter/tanggap (lantip)', 'Turu saben awan', 'Dolanan terus', 'Ora sinau'], ans: 0, exp: 'Lantip = cerdas/tajam akalnya.' },
      { text: 'Tembang Macapat nganti saiki tetep diwulangake ing sekolah amarga...', opts: ['Sugihe pitutur budi pekerti lan dadi warisan budaya adi luhung', 'Wajib dihafal tanpa ngerti artine', 'Supaya angel', 'Ora ana mapel liya'], ans: 0, exp: 'Macapat mengandung nilai karakter sekaligus seni sastra Jawa.' },
    ],
  },

  // BAB 5: GEGURITAN: APRESIASI LAN KARYA SEDERHANA
  {
    topicCode: 'BJ-SD6-05', subSeq: 1,
    objectives: ['Siswa mampu menganalisis tema utama dalam geguritan bertema pendidikan, lingkungan, atau kasih sayang.'],
    materialTitle: 'Menganalisis Tema Geguritan',
    blocks: [
      { type: 'story_panel', title: 'Geguritan: Pamit Saka SD', lines: [
        { speaker: 'Geguritan', avatar: '🎓', text: 'Enem taun wis lumaku tanpa krasa / Ing latar iki kita sinau aksara lan angka / Bapak Ibu Guru tansah sabar nuntun lakuku / Matur nuwun, jasamu ora bakal luntur ing kalbuku.' },
      ]},
    ],
    activityTitle: 'Latihan: Tema Geguritan',
    questions: [
      { text: 'Tema utama geguritan "Pamit Saka SD" ing dhuwur yaiku...', opts: ['Rasa syukur lan panuwun marang guru nalika arep lulus SD', 'Liburan ing gunung', 'Lomba bal-balan', 'Cuaca mendhung'], ans: 0, exp: 'Nyebutake enem taun sinau lan rasa matur nuwun marang guru.' },
      { text: 'Tembung "kalbuku" ing baris pungkasan geguritan tegese...', opts: ['Bukuku', 'Atiku (hatiku)', 'Omahe', 'Tase'], ans: 1, exp: 'Kalbu = ati / hati.' },
      { text: 'Tembung "lumaku" tegese...', opts: ['Berjalan / berlalu', 'Berhenti', 'Jatuh', 'Tidur'], ans: 0, exp: 'Lumaku = mlaku / berjalan.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-05', subSeq: 2,
    objectives: ['Siswa mampu menelaah diksi (pilihan tembung) dan purwakanthi (persamaan bunyi) dalam geguritan.'],
    materialTitle: 'Diksi lan Purwakanthi ing Geguritan',
    blocks: [
      { type: 'table', title: '3 Jenis Purwakanthi (Rima/Pengulangan Bunyi Jawa)', headers: ['Jenis Purwakanthi', 'Sing Diulang', 'Conto'], rows: [
        ['Purwakanthi Guru Swara', 'Swara VOKAL', 'Adigang, adigung, adiguna (-a/-u) / Becik ketitik, ala ketara'],
        ['Purwakanthi Guru Sastra', 'Huruf KONSONAN', 'Sluman, slumun, slamet (s-l-m) / Tata, titi, tatag, tutug (t)'],
        ['Purwakanthi Lumaksita', 'Tembung/wanda pungkasan diulang wiwitan', 'Asung bekti, bektine kawula marang Gusti'],
      ]},
    ],
    activityTitle: 'Latihan: Diksi & Purwakanthi',
    questions: [
      { text: 'Ukara "Tata, titi, tatag, tutug" ngulang konsonan "t", mula diarani purwakanthi...', opts: ['Guru sastra', 'Guru swara', 'Lumaksita', 'Guru gatra'], ans: 0, exp: 'Pengulangan huruf konsonan (sastra) = purwakanthi guru sastra.' },
      { text: 'Ukara "Becik ketitik, ala ketara" ngulang swara vokal "-ik" lan "-a", mula kalebu purwakanthi...', opts: ['Guru swara', 'Guru sastra', 'Lumaksita', 'Wyanjana'], ans: 0, exp: 'Pengulangan bunyi vokal = purwakanthi guru swara.' },
      { text: 'Gunane purwakanthi ing geguritan yaiku...', opts: ['Nggawe geguritan luwih kepenak dirungokake lan nduweni irama endah', 'Nggawe angel diwaca', 'Ngganti tema', 'Mbusak makna'], ans: 0, exp: 'Purwakanthi menciptakan musikalitas/keindahan bunyi.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-05', subSeq: 3,
    objectives: ['Siswa mampu memahami susunan larik (baris) dan pada (bait) serta tipografi pada geguritan.'],
    materialTitle: 'Larik lan Pada ing Geguritan',
    blocks: [
      { type: 'text', text: 'Ing geguritan, baris diarani LARIK (gatra) lan kumpulan larik diarani PADA (bait). Panyair bebas nata dawane larik lan cacahe pada kanggo nguatake penekanan makna — beda karo Macapat sing kudu pas itungan wandane!' },
    ],
    activityTitle: 'Latihan: Larik & Pada Geguritan',
    questions: [
      { text: 'Istilah basa Jawa kanggo "bait" ing geguritan utawa tembang yaiku...', opts: ['Pada', 'Wanda', 'Paraga', 'Latar'], ans: 0, exp: 'Sak pada = satu bait; larik = baris.' },
      { text: 'Ing geguritan modern, cacahe larik ing saben sak pada sifate...', opts: ['Bebas miturut kreasi lan kabutuhan makna panyair', 'Wajib persis 4 larik kabeh', 'Wajib 12 wanda', 'Mung 1 kata'], ans: 0, exp: 'Geguritan bebas cacahe larik lan pada.' },
      { text: 'Pemenggalan larik sing pas nalika nulis geguritan mbantu pamaca nemtokake...', opts: ['Jeda ambegan lan tembung penting sing kudu ditekanake', 'Harga buku', 'Nama kelas', 'Tanggal'], ans: 0, exp: 'Tata larik mengatur ritme pembacaan.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-05', subSeq: 4,
    objectives: ['Siswa mampu menangkap suasana (rasa sedih, haru, gembira, semangat) yang dibangun penyair dalam geguritan.'],
    materialTitle: 'Nangkap Swasana Geguritan',
    blocks: [
      { type: 'visual_cards', title: 'Ragam Swasana ing Geguritan', cards: [
        { emoji: '😊', label: 'Bungah / Ceria', sub: 'Temane dolanan, esuk cerah, kaendahan alam' },
        { emoji: '🥹', label: 'Trenyuh / Haru', sub: 'Temane jasa ibu, jasa guru, perpisahan sekolah' },
        { emoji: '🔥', label: 'Makantar-kantar / Semangat', sub: 'Temane pahlawan, cinta tanah air, nggayuh cita-cita' },
      ]},
    ],
    activityTitle: 'Latihan: Swasana Geguritan',
    questions: [
      { text: 'Geguritan kanthi larik "Maju terus arek-arek mudha! Genggam semangat pahlawan!" nggambarake swasana...', opts: ['Semangat makantar-kantar', 'Ngantuk', 'Sedhih banget', 'Sepi'], ans: 0, exp: 'Pilihan tembung "maju terus, semangat pahlawan" mbangun swasana heroik.' },
      { text: 'Tembung "trenyuh" ing swasana geguritan tegese...', opts: ['Terharu', 'Marah besar', 'Tertawa keras', 'Bingung'], ans: 0, exp: 'Trenyuh = terharu/menyentuh hati.' },
      { text: 'Swasana geguritan kudu digatekake sadurunge maca ing panggung supaya...', opts: ['Ekspresi rai (wiraga) lan penghayatan (wirasa) cocok karo isine', 'Suarane selalu teriak', 'Cepat rampung', 'Ora usah jeda'], ans: 0, exp: 'Swasana nuntun wirasa lan wiraga pamaca.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-05', subSeq: 5,
    objectives: ['Siswa mampu menafsirkan makna tersirat dan amanat dari sebuah geguritan secara utuh.'],
    materialTitle: 'Nafsirake Makna lan Amanat Geguritan',
    blocks: [
      { type: 'worked_example', level: 'Nafsirake Geguritan', question: '"Aja mung nyawang segara saka pinggir, yen kepengin ngerti jerone ngelmu, wani nyemplung lan nglangi!" Apa makna tersirate?', steps: ['"Segara" = ilmu pengetahuan sing jembar.', '"Wani nyemplung lan nglangi" = kudu wani nyoba, tekun sinau, lan ora wedi gagal!'], answer: 'Yen kepengin pinter, kudu wani praktek lan sregep sinau tenanan, ora mung ndeleng saka kadohan.' },
    ],
    activityTitle: 'Latihan: Makna Geguritan',
    questions: [
      { text: 'Ing larik geguritan "Ibu iku srengenge ing omahku", tembung "srengenge" ngemu makna kias...', opts: ['Sumber katresnan, anget, lan pepadhang urip kulawarga', 'Benda panas ing langit wae', 'Lampu kamar', 'Kompor'], ans: 0, exp: 'Metafora srengenge nglambangake sumber kasih sayang lan bimbingan.' },
      { text: 'Supaya ora kliru nafsirake makna geguritan, pamaca kudu...', opts: ['Maca wutuh sak geguritan lan nggandhengake antarlarik', 'Mung maca judul wae', 'Mung maca 1 tembung', 'Ngarang dhewe tanpa teks'], ans: 0, exp: 'Konteks wutuh nggawe tafsiran akurat.' },
      { text: 'Amanat geguritan yaiku...', opts: ['Pesen becik sing pengin disampake panyair marang pamaca', 'Jeneng panyair', 'Cacahe huruf', 'Werna kertas'], ans: 0, exp: 'Amanat = pesan moral karya sastra.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-05', subSeq: 6,
    objectives: ['Siswa mampu membaca geguritan secara ekspresif dengan teknik 4W dan tanda jeda yang benar.'],
    materialTitle: 'Maca Geguritan kanthi Ekspresif',
    blocks: [
      { type: 'tip', text: 'Sadurunge tampil maca geguritan: wenehana tanda jeda (/ mandheg sedhela, // mandheg rada suwe, /// rampung) lan tandhai tembung kunci sing kudu diucapake luwih mantep!' },
    ],
    activityTitle: 'Latihan: Membaca Ekspresif',
    questions: [
      { text: 'Ing teknik 4W maca geguritan, kejelasan pengucapan huruf (umpamane bedane "d/dh" lan "t/th") kalebu unsur...', opts: ['Wicara', 'Wirama', 'Wirasa', 'Wiraga'], ans: 0, exp: 'Wicara = pelafalan/artikulasi.' },
      { text: 'Tanda jeda "///" ing pungkasan geguritan tegese pamaca...', opts: ['Mandheg total (rampung)', 'Maca luwih cepet', 'Bengok banter', 'Baleni maneh'], ans: 0, exp: '/ sebentar, // agak lama, /// selesai.' },
      { text: 'Menjaga kontak mata (nyawang penonton) sesekali nalika maca geguritan tujuane supaya...', opts: ['Rasa lan pesen geguritan tekan ing atine sing ngrungokake', 'Lali tekse', 'Katon kaku', 'Ora penting'], ans: 0, exp: 'Kontak mata mbangun sambung rasa karo audiens.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-05', subSeq: 7,
    objectives: ['Siswa mampu menulis karya geguritan sederhana 2–3 bait bertema lingkungan atau kenangan SD.'],
    materialTitle: 'Nulis Geguritan Sederhana',
    blocks: [
      { type: 'list', title: '4 Langkah Nulis Geguritanmu Dhewe', items: ['1. Pilih tema sing nabet ing ati (mis. Perpisahan SD, Pesisir Gresik, Ibuku, Sahabatku).', '2. Tulis 5–8 tembung kunci sing nggambarake rasa lan suasana.', '3. Rangkai dadi larik-larik cendhak endah (bisa ditambah purwakanthi!).', '4. Waca maneh kanthi swara lirih kanggo ngecek irama lan ejaan basa Jawa!'] },
    ],
    activityTitle: 'Latihan: Menulis Geguritan',
    questions: [
      { text: 'Supaya geguritan sing kita tulis krasa asli lan menyentuh, sumber inspirasi sing paling apik yaiku...', opts: ['Pengalaman nyata, perasaan dhewe, lan pengamatan lingkungan sekitar', 'Nyalin geguritan internet persis', 'Nulis tembung acak tanpa rasa', 'Nyalin daftar menu'], ans: 0, exp: 'Kejujuran rasa ndadekake geguritan urip.' },
      { text: 'Langkah pungkasan sawise rampung nulis draf geguritan yaiku...', opts: ['Nyunting pilihan tembung lan ejaan (d/dh, t/th, huruf kapital)', 'Langsung dibuwang', 'Ora tau diwaca maneh', 'Mbusak judule'], ans: 0, exp: 'Penyuntingan nyempurnakake irama lan ejaan.' },
      { text: 'Judul geguritan sing apik biasane...', opts: ['Cendhak, puitis, lan nggambarake inti tema', 'Dawa nganti 20 tembung', 'Ora nyambung isine', 'Berupa angka'], ans: 0, exp: 'Judul ringkas memikat pamaca.' },
    ],
  },

  // BAB 6: NULIS LAN NYRITAKAKE PENGALAMAN
  {
    topicCode: 'BJ-SD6-06', subSeq: 1,
    objectives: ['Siswa mampu merencanakan kerangka cerita pengalaman berkesan (perencanaan topik, tokoh, latar, urutan) dalam Bahasa Jawa.'],
    materialTitle: 'Perencanaan Crita Pengalaman',
    blocks: [
      { type: 'table', title: 'Cengkorongan (Kerangka) Crita Pengalaman', headers: ['Bagian', 'Pitakonan Panduan'], rows: [
        ['1. Judul', 'Apa jeneng pengalamanmu sing paling nyengsemake?'],
        ['2. Wiwitan', 'Kapan, ing ngendi, lan karo sapa kedadeyane?'],
        ['3. Isi / Prastawa Utama', 'Apa kedadeyan paling seru, lucu, utawa ngresepake ati?'],
        ['4. Pungkasan', 'Kepriye rampunge lan piwulang apa sing kokjupuk?'],
      ]},
    ],
    activityTitle: 'Latihan: Perencanaan Cerita',
    questions: [
      { text: 'Tembung "cengkorongan" nalika arep nulis karangan basa Jawa tegese...', opts: ['Kerangka karangan', 'Sampul buku', 'Tanda titik', 'Judul akhir'], ans: 0, exp: 'Cengkorongan = kerangka tulisan.' },
      { text: 'Gunane gawe cengkorongan sadurunge nulis crita pengalaman yaiku...', opts: ['Supaya alur crita runtut lan ora ana bagian penting sing keri', 'Supaya crita dadi ruwet', 'Nambah wektu tanpa guna', 'Mbusak tokoh'], ans: 0, exp: 'Cengkorongan dadi peta panuntun nulis.' },
      { text: 'Topik pengalaman sing paling cocok kanggo siswa kelas 6 yaiku...', opts: ['Pengalaman melu kemah Pramuka utawa lomba kelas 6', 'Sejarah dinosaurus', 'Cara nggawe roket', 'Daftar belanja'], ans: 0, exp: 'Pengalaman nyata siswa gampang dicritakake kanthi urip.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-06', subSeq: 2,
    objectives: ['Siswa mampu menjaga urutan kronologis peristiwa dan kelancaran transisi antarparagraf dalam Bahasa Jawa.'],
    materialTitle: 'Urutan Kedadeyan sing Runtut',
    blocks: [
      { type: 'tip', text: 'Gunakna tembung panggandheng wektu sing variasi supaya ora mung "banjur... banjur..." wae! Contone: "Wiwitane...", "Ora suwe...", "Sawise iku...", "Banjur...", "Pungkasane..."!' },
    ],
    activityTitle: 'Latihan: Urutan Cerita Jawa',
    questions: [
      { text: 'Tembung panggandheng "ora suwe" ing crita pengalaman tegese...', opts: ['Tidak lama kemudian', 'Tahun depan', 'Kemarin lusa', 'Selamanya'], ans: 0, exp: 'Ora suwe = tidak lama berselang.' },
      { text: 'Urutna: (1) Pungkasane klompokku oleh juara loro, (2) Esuk iku kita kumpul ing lapangan sekolah, (3) Sawise diwenehi aba-aba, lomba tarik tambang langsung diwiwiti. Urutan sing trep:', opts: ['2-3-1', '1-2-3', '3-2-1', '2-1-3'], ans: 0, exp: 'Kumpul (2) → lomba diwiwiti (3) → oleh juara (1).' },
      { text: 'Nganggo variasi tembung panggandheng wektu nggawe karangan...', opts: ['Luwih enak diwaca lan ora mboseni', 'Angel dimangerteni', 'Salah tata basa', 'Kaya daftar angka'], ans: 0, exp: 'Variasi konjungsi memperindah alur bacaan.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-06', subSeq: 3,
    objectives: ['Siswa mampu memilih ragam bahasa (Ngoko atau Krama) dan kosakata yang konsisten dalam satu karangan.'],
    materialTitle: 'Pilihan Kosakata lan Konsistensi Ragam Basa',
    blocks: [
      { type: 'misconception', wrong: 'Nyampuraduk ragam basa tanpa aturan ing sak ukara (mis. "Kula lagi mangan karo kowe wingi").', right: 'Konsisten! Yen nulis crita nganggo Ngoko ("Aku lagi mangan..."), kabeh narasi ngoko (kejaba ngurmati wong tuwa nganggo krama inggil kaya "Bapak dhahar"). Yen nganggo Krama ("Kula nembe nedha..."), kabeh konsisten Krama!' },
    ],
    activityTitle: 'Latihan: Pilihan Kosakata Jawa',
    questions: [
      { text: 'Ukara ngoko alus kanggo ngurmati wong tuwa sing BENER yaiku...', opts: ['Bapak lagi dhahar sega krawu, dene aku lagi mangan soto.', 'Bapak lagi mangan, dene aku lagi dhahar.', 'Bapak lagi nedha, aku lagi dhahar.', 'Kula lagi dhahar bareng kanca.'], ans: 0, exp: 'Kanggo Bapak nganggo krama inggil "dhahar"; kanggo awake dhewe "mangan" (ngoko) utawa "nedha" (krama).' },
      { text: 'Tembung sing trep kanggo nggambarake rasa seneng banget ing crita pengalaman yaiku...', opts: ['Bungah banget / seneng banget', 'Susah banget', 'Wedi banget', 'Kesel banget'], ans: 0, exp: 'Bungah = sangat senang/gembira.' },
      { text: 'Konsistensi ragam basa ing karangan basa Jawa artine...', opts: ['Ora nyampur ngoko lan krama kanthi acak tanpa paugeran', 'Nganggo basa Inggris separo', 'Nulis tanpa titik', 'Mung nganggo 1 kata'], ans: 0, exp: 'Konsistensi unggah-ungguh nuduhake penguasaan basa sing becik.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-06', subSeq: 4,
    objectives: ['Siswa mampu merevisi dan menyunting ejaan Bahasa Jawa (terutama d/dh, t/th, é/è/ê, kapital, tanda baca) pada karangannya.'],
    materialTitle: 'Revisi lan Nyunting Tulisan Basa Jawa',
    blocks: [
      { type: 'table', title: 'Ejaan Basa Jawa sing Kerep Kliru (Cek Maneh!)', headers: ['Kliru (Salah)', 'Bener (Ejaan Baku Basa Jawa)', 'Tegese'], rows: [
        ['dowo / ombo', 'dawa / amba', 'Panjang / lebar (tetep ditulis "a", diwaca o!)'],
        ['moco / sopo', 'maca / sapa', 'Membaca / siapa (ditulis "a" jejeg!)'],
        ['godong / gedang', 'godhong / gedhang', 'Daun / pisang (pakai dh!)'],
        ['kuthuk / bathik', 'kuthuk / bathik', 'Anak ayam / batik (pakai th!)'],
      ]},
    ],
    activityTitle: 'Latihan: Revisi Tulisan Jawa',
    questions: [
      { text: 'Penulisan tembung basa Jawa baku sing BENER (elenga aturan vokal "a" jejeg!) yaiku...', opts: ['Sopo sing moco buku ing omah?', 'Sapa sing maca buku ing omah?', 'Sopo sing maca buku ing omoh?', 'Sapa sing moco buku ing omoh?'], ans: 1, exp: 'Senajan diwaca "sopo" lan "moco", ing ejaan baku tetep ditulis "sapa" lan "maca"!' },
      { text: 'Penulisan pasangan tembung kanthi konsonan "dh" lan "th" sing BENER yaiku...', opts: ['dhahar, gedhang, bathik, pethak', 'dahar, gedang, batik, petak', 'dhahar, gedang, batik, pethak', 'dahar, gedhang, bathik, petak'], ans: 0, exp: 'Dhahar, gedhang, bathik, pethak nganggo dh/th.' },
      { text: 'Tahap nyunting karangan basa Jawa mriksa...', opts: ['Ejaan (a/o, d/dh, t/th), huruf kapital, tanda baca, lan unggah-ungguh basa', 'Werna pulpen', 'Rega buku', 'Jumlah kanca'], ans: 0, exp: 'Penyuntingan njamin tulisan baku lan rapi.' },
    ],
  },
  {
    topicCode: 'BJ-SD6-06', subSeq: 5,
    objectives: ['Siswa mampu mempresentasikan cerita pengalaman secara lisan di depan kelas dengan bahasa Jawa yang sopan, lancar, dan percaya diri.'],
    materialTitle: 'Presentasi Lisan Crita Pengalaman Basa Jawa',
    blocks: [
      { type: 'story_panel', title: 'Conto Pambuka & Panutup Presentasi Basa Jawa', lines: [
        { speaker: 'Pambuka', avatar: '👋', text: 'Sugeng enjang Bapak/Ibu Guru lan kanca-kanca sedaya. Tepangaken, nama kula Alya saking kelas 6. Dinten punika kula badhe nyritakaken pengalaman kula nalika melu lomba.' },
        { speaker: 'Panutup', avatar: '🙏', text: 'Cekap semanten crita pengalaman saking kula. Nyuwun pangapunten menawi wonten lepatipun tembung. Matur nuwun!' },
      ]},
    ],
    activityTitle: 'Latihan: Presentasi Lisan Jawa',
    questions: [
      { text: 'Ukara panutup presentasi basa Jawa krama sing paling sopan yaiku...', opts: ['"Wis rampung, aku lungguh ya!"', '"Cekap semanten saking kula. Nyuwun pangapunten menawi wonten lepat, matur nuwun."', '"Sugeng enjang kabeh!"', '"Kowe kabeh kudu tepuk tangan!"'], ans: 1, exp: 'Cekap semanten (cukup sekian) + nyuwun pangapunten + matur nuwun.' },
      { text: 'Tembung "tepangaken" ing pambuka presentasi tegese...', opts: ['Perkenalkan', 'Selamat tinggal', 'Terima kasih', 'Permisi'], ans: 0, exp: 'Tepangaken = perkenalkan.' },
      { text: 'Tembung "lepatipun" ing ukara "nyuwun pangapunten menawi wonten lepatipun" tegese...', opts: ['Kesalahannya / kekurangannya', 'Kelebihannya', 'Hadiahnya', 'Jadwalnya'], ans: 0, exp: 'Lepat (krama) = salah (ngoko).' },
    ],
  },
];

upsertLessonsBatch('Kelas 6 SD — Bahasa Jawa Gresik Daratan (6 Bab, 27 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

