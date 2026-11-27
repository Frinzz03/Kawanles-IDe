import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: PEWARISAN SIFAT (8 sub)
  {
    topicCode: 'IPA-SMP9-01', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian materi genetik (DNA & RNA) sebagai pembawa informasi pewarisan sifat di dalam inti sel.'],
    materialTitle: 'Materi Genetik Makhluk Hidup',
    blocks: [
      { type: 'text', text: 'Setiap sifat fisik yang diwariskan dari orang tua ke anak (bentuk rambut, warna mata, golongan darah) tersimpan dalam kode kimia bernama MATERI GENETIK di dalam inti sel (nukleus), khususnya molekul DNA (Deoxyribonucleic Acid) yang berbentuk rantai ganda berpilin (double helix).' },
    ],
    activityTitle: 'Latihan: Materi Genetik',
    questions: [
      { text: 'Molekul utama pembawa informasi genetik pewarisan sifat berbentuk rantai ganda berpilin (double helix) di dalam inti sel adalah...', opts: ['DNA (Asam Deoksiribonukleat)', 'Glukosa', 'Hemoglobin', 'Asam lemak'], ans: 0, exp: 'DNA menyimpan cetak biru genetik seluruh makhluk hidup.' },
      { text: 'Di bagian sel manakah sebagian besar materi genetik (kromosom) pada sel eukariotik disimpan?', opts: ['Inti sel (nukleus)', 'Dinding sel', 'Vakuola', 'Membran luar'], ans: 0, exp: 'Nukleus melindungi dan mengendalikan pembacaan DNA.' },
      { text: 'Ilmuwan yang dikenal sebagai "Bapak Genetika" karena percobaan persilangan kacang ercis (Pisum sativum) adalah...', opts: ['Gregor Johann Mendel', 'Isaac Newton', 'Robert Hooke', 'Michael Faraday'], ans: 0, exp: 'Gregor Mendel merumuskan hukum dasar pewarisan sifat.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-01', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan hubungan antara DNA, gen, dan kromosom serta jumlah kromosom manusia (46 / 23 pasang).'],
    materialTitle: 'Hubungan DNA, Gen, dan Kromosom',
    blocks: [
      { type: 'formula', name: 'Urutan Ukuran Materi Genetik (Kecil → Besar)', expression: 'Nukleotida  →  GEN (sepenggal DNA)  →  Untai DNA  →  KROMOSOM (DNA terlilit protein histon)', note: 'Sel tubuh manusia (somatis) memiliki 46 kromosom (23 pasang = 2n diploid): 22 pasang autosom + 1 pasang gonosom (XX = perempuan, XY = laki-laki). Sel kelamin (sperma/ovum) hanya 23 kromosom (n haploid)!' },
    ],
    activityTitle: 'Latihan: DNA, Gen, & Kromosom',
    questions: [
      { text: 'Jumlah kromosom pada sel tubuh normal manusia dan pada sel kelamin (sperma/ovum) berturut-turut adalah...', opts: ['46 buah (23 pasang) dan 23 buah', '23 buah dan 46 buah', '44 buah dan 2 buah', '12 buah dan 6 buah'], ans: 0, exp: 'Sel tubuh diploid (2n = 46); sel gamet haploid (n = 23) agar zigot hasil fertilisasi kembali 46!' },
      { text: 'Segmen atau sepenggal untai DNA tertentu yang mengkodekan satu sifat spesifik (misalnya warna bunga atau bentuk cuping telinga) disebut...', opts: ['Gen', 'Ribosom', 'Kloroplas', 'Lisosom'], ans: 0, exp: 'Gen adalah unit fungsional terkecil pewarisan sifat.' },
      { text: 'Susunan kromosom kelamin (gonosom) pada manusia laki-laki dan perempuan berturut-turut adalah...', opts: ['XY (laki-laki) dan XX (perempuan)', 'XX (laki-laki) dan XY (perempuan)', 'YY dan XX', 'XO dan XY'], ans: 0, exp: 'Kromosom Y dari sperma ayah menentukan jenis kelamin laki-laki.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-01', subSeq: 3,
    objectives: ['Siswa mampu membedakan sifat yang diwariskan secara genetik (hereditas) dan sifat yang diperoleh dari lingkungan/latihan.'],
    materialTitle: 'Sifat yang Diwariskan vs Pengaruh Lingkungan',
    blocks: [
      { type: 'table', title: 'Diwariskan (Genetik) vs Tidak Diwariskan (Lingkungan)', headers: ['Diwariskan secara Genetik', 'Tidak Diwariskan (Lingkungan / Latihan)'], rows: [
        ['Golongan darah (A, B, AB, O)', 'Bekas luka jatuh / tato'],
        ['Jenis rambut (lurus/keriting), bentuk cuping telinga, lesung pipi', 'Keahlian bermain gitar, berbahasa Inggris, otot kekar hasil gym'],
      ]},
    ],
    activityTitle: 'Latihan: Sifat yang Diwariskan',
    questions: [
      { text: 'Manakah contoh sifat berikut yang DIWARISKAN secara genetik dari orang tua ke anaknya?', opts: ['Golongan darah, bentuk cuping telinga, dan warna iris mata', 'Bekas luka operasi di lutut', 'Keahlian berenang gaya bebas', 'Potongan rambut pendek'], ans: 0, exp: 'Sifat genetik dikodekan di dalam DNA sel gamet.' },
      { text: 'Mengapa seorang atlet angkat besi berotot sangat kekar TIDAK otomatis melahirkan bayi yang langsung berotot kekar?', opts: ['Karena otot kekar merupakan sifat hasil latihan lingkungan (modifikasi), bukan perubahan kode DNA gamet', 'Karena DNA tidak diwariskan', 'Karena gen otot hanya di ibu', 'Karena semua bayi sama'], ans: 0, exp: 'Sifat perolehan fisik tidak mengubah susunan DNA sel kelamin.' },
      { text: 'Sifat yang tampak dari luar dan dapat diamati oleh indra (seperti tinggi batang, rasa buah manis, rambut keriting) disebut...', opts: ['Fenotipe', 'Genotipe', 'Kromosom', 'Gamet'], ans: 0, exp: 'Fenotipe = sifat tampak; Genotipe = susunan kode gennya (misal TT, Tt).' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-01', subSeq: 4,
    objectives: ['Siswa mampu memahami konsep alel, genotipe homozigot (MM, mm), dan genotipe heterozigot (Mm).'],
    materialTitle: 'Pengenalan Alel, Homozigot, dan Heterozigot',
    blocks: [
      { type: 'table', title: 'Istilah Dasar Genetika Wajib Hafal', headers: ['Istilah', 'Arti & Contoh'], rows: [
        ['Alel', 'Variasi/pasangan bentuk alternatif suatu gen pada lokus sama (mis. M = merah, m = putih)'],
        ['Homozigot Dominan', 'Kedua alel sama-sama dominan (MM, TT)'],
        ['Homozigot Resesif', 'Kedua alel sama-sama resesif (mm, tt)'],
        ['Heterozigot', 'Kedua alel berbeda: satu dominan, satu resesif (Mm, Tt)'],
      ]},
    ],
    activityTitle: 'Latihan: Alel, Homozigot, & Heterozigot',
    questions: [
      { text: 'Pasangan gen "Bb" pada sifat bentuk biji (B = bulat, b = kisut) merupakan genotipe...', opts: ['Heterozigot', 'Homozigot dominan', 'Homozigot resesif', 'Fenotipe'], ans: 0, exp: 'Terdiri dari 2 alel berbeda (B besar dan b kecil).' },
      { text: 'Variasi bentuk alternatif dari satu gen yang mengatur sifat yang sama (misal gen warna bunga punya variasi ungu U dan putih u) disebut...', opts: ['Alel', 'Zigot', 'Organel', 'Jaringan'], ans: 0, exp: 'Alel menempati lokasi (lokus) yang sama pada kromosom homolog.' },
      { text: 'Manakah yang merupakan pasangan genotipe HOMOZIGOT RESESIF?', opts: ['tt dan mm', 'TT dan MM', 'Tt dan Mm', 'TM dan tm'], ans: 0, exp: 'Kedua huruf sama dan ditulis huruf kecil semua.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-01', subSeq: 5,
    objectives: ['Siswa mampu membedakan sifat dominan penuh, resesif, dan intermediet (dominansi tak penuh).'],
    materialTitle: 'Sifat Dominan, Resesif, dan Intermediet',
    blocks: [
      { type: 'text', text: 'DOMINAN (huruf kapital, mis. M) = sifat kuat yang menutupi sifat pasangannya (Mm tetap Merah!). RESESIF (huruf kecil, mis. m) = sifat yang baru muncul bila berpasangan sesama resesif (mm = putih). INTERMEDIET = keduanya sama kuat sehingga heterozigot Mm memunculkan warna campuran (Merah + Putih → Merah Muda!).' },
    ],
    activityTitle: 'Latihan: Dominan, Resesif, & Intermediet',
    questions: [
      { text: 'Jika gen T (batang tinggi) dominan penuh terhadap t (batang pendek), maka tanaman bergenotipe Tt akan memiliki fenotipe...', opts: ['Batang tinggi', 'Batang pendek', 'Batang sedang', 'Tidak bertumbuh'], ans: 0, exp: 'Pada dominansi penuh, alel dominan T menutupi alel resesif t.' },
      { text: 'Bunga pukul empat merah (MM) disilangkan dengan putih (mm) menghasilkan keturunan F1 (Mm) berwarna MERAH MUDA. Sifat ini menunjukkan pola...', opts: ['Intermediet (dominansi tak penuh)', 'Dominan penuh', 'Resesif penuh', 'Mutasi'], ans: 0, exp: 'Heterozigot memunculkan sifat antara kedua induknya.' },
      { text: 'Sifat resesif (misal putih mm atau albino aa) HANYA akan tampak pada fenotipe individu apabila bergenotipe...', opts: ['Homozigot resesif (mm / aa)', 'Heterozigot (Mm)', 'Homozigot dominan (MM)', 'Semua genotipe'], ans: 0, exp: 'Sifat resesif tertutupi jika ada satu saja alel dominan.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-01', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan pewarisan sifat dari kedua orang tua melalui peleburan gamet (Hukum Segregasi Mendel I).'],
    materialTitle: 'Pewarisan Sifat dari Orang Tua',
    blocks: [
      { type: 'text', text: 'Anak mewarisi 50% kromosom dari ibu (ovum) dan 50% dari ayah (sperma). Saat pembentukan gamet (meiosis), pasangan alel memisah secara bebas (Hukum I Mendel / Segregasi) — misalnya individu bergenotipe Tt membentuk 2 macam gamet: T dan t!' },
    ],
    activityTitle: 'Latihan: Pewarisan Sifat Orang Tua',
    questions: [
      { text: 'Macam gamet yang dihasilkan oleh induk bergenotipe AaBb adalah...', opts: ['4 macam: AB, Ab, aB, ab', '2 macam: Aa, Bb', '1 macam: AB', '3 macam: A, B, ab'], ans: 0, exp: 'Rumus banyak macam gamet = 2^n (n = jumlah pasangan heterozigot) = 2² = 4.' },
      { text: 'Dua orang tua sama-sama bergolongan darah atau sifat normal pembawa (heterozigot Aa × Aa) dapat memiliki anak bersifat resesif (aa) karena...', opts: ['Masing-masing orang tua dapat mewariskan gamet alel resesif "a" yang bertemu saat fertilisasi menjadi aa', 'Sifat resesif selalu hilang', 'Anak hanya mewarisi sifat ayah', 'Tidak mungkin terjadi'], ans: 0, exp: 'Gamet "a" dari ayah + gamet "a" dari ibu membentuk aa (25% peluang).' },
      { text: 'Proses pembelahan sel pembentuk sel kelamin (gamet) yang mengurangi jumlah kromosom menjadi separuhnya (2n → n) adalah...', opts: ['Meiosis', 'Mitosis', 'Fotosintesis', 'Osmosis'], ans: 0, exp: 'Meiosis menghasilkan sel gamet haploid (n).' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-01', subSeq: 7,
    objectives: ['Siswa mampu membuat diagram Punnett untuk persilangan monohibrid (1 sifat beda) dan mengenal persilangan dihibrid (2 sifat beda).'],
    materialTitle: 'Diagram Punnett & Persilangan Mendel',
    blocks: [
      { type: 'worked_example', level: 'Persilangan Monohibrid F2 (Mm × Mm)', question: 'Mangga manis (MM) × masam (mm) → F1 semuanya Mm (manis). Jika F1 disilangkan sesamanya (Mm × Mm), bagaimana rasio F2?', steps: ['Gamet masing-masing: M dan m.', 'Kotak Punnett: MM (manis), Mm (manis), Mm (manis), mm (masam).', 'Rasio Genotipe F2 = MM : Mm : mm = 1 : 2 : 1.', 'Rasio Fenotipe F2 = Manis : Masam = 3 : 1 (75% : 25%)!'], answer: 'Genotipe 1:2:1 | Fenotipe 3:1' },
    ],
    activityTitle: 'Latihan: Persilangan Sederhana',
    questions: [
      { text: 'Persilangan sesama heterozigot monohibrid dominan penuh (Tt × Tt) menghasilkan perbandingan FENOTIPE F2 (Tinggi : Pendek) sebesar...', opts: ['3 : 1', '1 : 2 : 1', '1 : 1', '9 : 3 : 3 : 1'], ans: 0, exp: 'TT, Tt, Tt (3 tinggi) : tt (1 pendek) = 3 : 1.' },
      { text: 'Jika tanaman heterozigot (Bb = bulat) disilangkan dengan tanaman homozigot resesif (bb = kisut), perbandingan fenotipe keturunannya (Bulat : Kisut) adalah...', opts: ['1 : 1 (50% : 50%)', '3 : 1', '100% bulat', '100% kisut'], ans: 0, exp: 'Gamet B, b × gamet b → Bb (50% bulat) dan bb (50% kisut) = 1 : 1.' },
      { text: 'Persilangan dihibrid (2 sifat beda) sesama heterozigot dominan penuh (BbMm × BbMm) secara teoretis menghasilkan perbandingan fenotipe F2 klasik sebesar...', opts: ['9 : 3 : 3 : 1', '3 : 1', '1 : 2 : 1', '1 : 1 : 1 : 1'], ans: 0, exp: 'Hukum II Mendel menghasilkan 16 kombinasi dengan rasio fenotipe 9:3:3:1.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-01', subSeq: 8,
    objectives: ['Siswa mampu menafsirkan peluang/persentase hasil persilangan dan pemanfaatannya dalam pemuliaan bibit unggul pertanian/peternakan.'],
    materialTitle: 'Interpretasi Peluang Hasil Persilangan',
    blocks: [
      { type: 'tip', text: 'Aplikasi nyata genetika: petani menyilangkan padi tahan hama (tapi bulir sedikit) × padi bulir lebat (tapi rentan hama) untuk memperoleh varietas HIBRIDA unggul (bulir lebat + tahan hama)!' },
    ],
    activityTitle: 'Latihan: Interpretasi Hasil Persilangan',
    questions: [
      { text: 'Dari persilangan Mm × Mm (M = buah manis dominan, m = masam) diperoleh 400 bibit mangga. Perkiraan jumlah bibit yang kelak berbuah MANIS (75%) adalah...', opts: ['300 bibit', '100 bibit', '200 bibit', '400 bibit'], ans: 0, exp: '(3/4) × 400 = 300 bibit manis (dan 100 masam).' },
      { text: 'Dari soal di atas (Mm × Mm, 400 bibit), perkiraan jumlah bibit yang bergenotipe HOMOZIGOT DOMINAN (MM = ¼ bagian) adalah...', opts: ['100 bibit', '300 bibit', '200 bibit', '50 bibit'], ans: 0, exp: 'MM = 1/4 × 400 = 100 bibit (Mm = 200, mm = 100).' },
      { text: 'Tujuan utama pemuliaan tanaman dengan teknik persilangan terkontrol (hibridisasi) adalah...', opts: ['Menggabungkan sifat-sifat unggul dari dua induk menjadi varietas baru yang produktif dan tahan penyakit', 'Memusnahkan semua tanaman lokal', 'Membuat buah menjadi beracun', 'Mengurangi hasil panen'], ans: 0, exp: 'Hibridisasi meningkatkan ketahanan pangan.' },
    ],
  },

  // BAB 2: INTERAKSI MAKHLUK HIDUP DAN LINGKUNGAN (8 sub)
  {
    topicCode: 'IPA-SMP9-02', subSeq: 1,
    objectives: ['Siswa mampu membedakan komponen biotik (produsen, konsumen, dekomposer) dan komponen abiotik serta saling ketergantungannya.'],
    materialTitle: 'Komponen Biotik dan Abiotik Ekosistem',
    blocks: [
      { type: 'table', title: 'Peran Komponen Biotik', headers: ['Peran', 'Fungsi & Contoh'], rows: [
        ['Produsen (Autotrof)', 'Membuat makanan sendiri lewat fotosintesis (tumbuhan hijau, fitoplankton, alga)'],
        ['Konsumen (Heterotrof)', 'Memakan organisme lain (herbivora, karnivora, omnivora)'],
        ['Dekomposer (Pengurai)', 'Menguraikan bangkai/sampah organik jadi unsur hara tanah (bakteri pengurai, jamur)'],
      ]},
    ],
    activityTitle: 'Latihan: Biotik & Abiotik',
    questions: [
      { text: 'Di ekosistem tambak bandeng Gresik, manakah yang termasuk komponen ABIOTIK?', opts: ['Salinitas (kadar garam) air, suhu, oksigen terlarut, cahaya matahari, dan lumpur dasar', 'Ikan bandeng, udang, dan fitoplankton', 'Bangau dan kepiting', 'Bakteri pengurai'], ans: 0, exp: 'Abiotik adalah faktor tak hidup fisik-kimia lingkungan.' },
      { text: 'Jika seluruh DEKOMPOSER (bakteri dan jamur pengurai) di muka Bumi musnah, dampak ekologis yang terjadi adalah...', opts: ['Bangkai dan seresah menumpuk tak terurai serta siklus unsur hara tanah berhenti sehingga tumbuhan mati', 'Tumbuhan tumbuh makin subur', 'Tidak ada pengaruh sama sekali', 'Hewan berubah jadi produsen'], ans: 0, exp: 'Dekomposer mendaur ulang materi organik kembali menjadi mineral bagi produsen.' },
      { text: 'Organisme yang mampu menyusun zat makanan organik sendiri dari air dan CO2 dengan bantuan cahaya matahari disebut...', opts: ['Autotrof (produsen)', 'Heterotrof', 'Parasit', 'Detritivor'], ans: 0, exp: 'Auto = sendiri, trof = makan.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-02', subSeq: 2,
    objectives: ['Siswa mampu mengurutkan satuan ekosistem dari individu, populasi, komunitas, ekosistem, bioma, hingga biosfer.'],
    materialTitle: 'Individu, Populasi, Komunitas, dan Ekosistem',
    blocks: [
      { type: 'formula', name: 'Hierarki Satuan Ekologi', expression: 'Individu (1 ekor) → Populasi (sejenis) → Komunitas (semua biotik) → Ekosistem (biotik + abiotik) → Biosfer', note: 'Populasi = kumpulan individu SATU SPESIES di tempat dan waktu sama (mis. 500 ekor ikan bandeng di 1 petak tambak).' },
    ],
    activityTitle: 'Latihan: Satuan Ekosistem',
    questions: [
      { text: 'Kumpulan 30 batang pohon bakau (Rhizophora) yang hidup di tepi pantai yang sama pada waktu yang sama disebut...', opts: ['Populasi', 'Individu', 'Komunitas', 'Biosfer'], ans: 0, exp: 'Sekelompok individu satu spesies di habitat sama = populasi.' },
      { text: 'Keseluruhan populasi ikan, udang, kepiting, fitoplankton, dan tanaman mangrove di suatu area pesisir (tanpa menghitung air & tanahnya) membentuk...', opts: ['Komunitas', 'Populasi', 'Individu', 'Abiotik'], ans: 0, exp: 'Komunitas = kumpulan berbagai populasi biotik yang berinteraksi.' },
      { text: 'Komunitas makhluk hidup yang berinteraksi timbal balik dengan lingkungan abiotiknya (air, cahaya, tanah, udara) membentuk...', opts: ['Ekosistem', 'Populasi', 'Jaringan', 'Sel'], ans: 0, exp: 'Ekosistem = komunitas biotik + komponen abiotik.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-02', subSeq: 3,
    objectives: ['Siswa mampu membedakan simbiosis (mutualisme, komensalisme, parasitisme), predasi, kompetisi, dan antibiosis.'],
    materialTitle: 'Bentuk Interaksi Antarmakhluk Hidup',
    blocks: [
      { type: 'table', title: 'Pola Interaksi Biotik (+ untung, − rugi, 0 netral)', headers: ['Interaksi', 'Pola', 'Contoh'], rows: [
        ['Mutualisme', '(+ / +)', 'Lebah & bunga; kerbau & burung jalak; Rhizobium & akar kacang'],
        ['Komensalisme', '(+ / 0)', 'Anggrek menempel di pohon besar; ikan remora & hiu'],
        ['Parasitisme', '(+ / −)', 'Benalu di pohon mangga; nyamuk & manusia; cacing pita'],
        ['Predasi', 'Pemangsa & mangsa', 'Burung hantu memangsa tikus sawah'],
        ['Kompetisi', '(− / −) berebut sumber sama', 'Sapi dan kambing berebut rumput di padang sama'],
      ]},
    ],
    activityTitle: 'Latihan: Interaksi Makhluk Hidup',
    questions: [
      { text: 'Hubungan antara tanaman anggrek yang menempel pada batang pohon mangga untuk mendapat cahaya matahari tanpa menyerap sari makanan inangnya adalah...', opts: ['Simbiosis komensalisme (+ / 0)', 'Parasitisme', 'Mutualisme', 'Predasi'], ans: 0, exp: 'Anggrek untung (+), pohon mangga tidak dirugikan maupun diuntungkan (0).' },
      { text: 'Berbeda dengan anggrek, tali putri dan benalu menancapkan akar pengisap (haustoria) ke floem pohon inang untuk mencuri nutrisi. Interaksi ini adalah...', opts: ['Parasitisme (+ / −)', 'Komensalisme', 'Mutualisme', 'Netralisme'], ans: 0, exp: 'Benalu untung (+), pohon inang merugi (−).' },
      { text: 'Petani memelihara burung hantu (Tyto alba) di sekitar sawah untuk menekan populasi tikus perusak padi. Interaksi burung hantu dan tikus adalah...', opts: ['Predasi (pengendalian hayati alami)', 'Komensalisme', 'Mutualisme', 'Antibiosis'], ans: 0, exp: 'Burung hantu adalah predator alami tikus sawah.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-02', subSeq: 4,
    objectives: ['Siswa mampu menyusun dan menganalisis rantai makanan serta memprediksi dampak perubahan satu tingkat trofik.'],
    materialTitle: 'Rantai Makanan dan Tingkat Trofik',
    blocks: [
      { type: 'text', text: 'Rantai makanan adalah jalur tunggal perpindahan energi makanan dari Produsen (Trofik I) → Konsumen I/herbivora (Trofik II) → Konsumen II (Trofik III) → Konsumen puncak → Pengurai. Tanda panah (→) berarti "dimakan oleh"!' },
    ],
    activityTitle: 'Latihan: Rantai Makanan',
    questions: [
      { text: 'Pada rantai makanan sawah: Padi → Belalang → Katak → Ular → Elang. Jika populasi Ular menurun drastis akibat perburuan liar, dampak jangka pendeknya adalah...', opts: ['Populasi katak meningkat dan populasi elang menurun karena kekurangan mangsa', 'Populasi katak langsung punah', 'Populasi elang meledak', 'Padi tidak butuh matahari'], ans: 0, exp: 'Pemangsa katak berkurang → katak naik; makanan elang berkurang → elang turun.' },
      { text: 'Pada rantai makanan perairan: Fitoplankton → Zooplankton → Ikan kecil → Ikan kakap. Organisme pada tingkat trofik I (produsen) adalah...', opts: ['Fitoplankton', 'Zooplankton', 'Ikan kecil', 'Ikan kakap'], ans: 0, exp: 'Fitoplankton adalah produsen mikroskopis fotosintetik di perairan.' },
      { text: 'Arah tanda panah pada diagram rantai makanan (misal Rumput → Kelinci) menunjukkan arah...', opts: ['Aliran energi makanan (dari yang dimakan menuju pemakannya)', 'Arah lari kelinci', 'Arah angin', 'Urutan ukuran besar ke kecil'], ans: 0, exp: 'Energi mengalir dari produsen ke konsumen.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-02', subSeq: 5,
    objectives: ['Siswa mampu menjelaskan jaring-jaring makanan dan alasan jaring makanan kompleks membuat ekosistem lebih stabil.'],
    materialTitle: 'Jaring-Jaring Makanan',
    blocks: [
      { type: 'tip', text: 'Jaring-jaring makanan adalah gabungan beberapa rantai makanan yang saling berhubungan. Semakin KOMPLEKS jaring-jaring makanan (tinggi keanekaragaman hayati), ekosistem makin STABIL karena pemangsa punya sumber makanan alternatif jika satu spesies berkurang!' },
    ],
    activityTitle: 'Latihan: Jaring-Jaring Makanan',
    questions: [
      { text: 'Mengapa ekosistem hutan tropis yang memiliki jaring-jaring makanan sangat kompleks jauh lebih STABIL dibandingkan lahan pertanian monokultur (satu jenis tanaman saja)?', opts: ['Karena setiap konsumen memiliki banyak alternatif mangsa sehingga tidak mudah runtuh bila satu spesies terganggu', 'Karena tidak ada pemangsa di hutan', 'Karena monokultur terlalu banyak spesies', 'Tidak ada bedanya'], ans: 0, exp: 'Keanekaragaman hayati meningkatkan daya lenting ekosistem.' },
      { text: 'Dalam satu jaring-jaring makanan, seekor burung pemakan biji sekaligus pemakan ulat dapat berperan ganda sebagai...', opts: ['Konsumen I (saat makan biji) sekaligus Konsumen II (saat makan ulat)', 'Produsen saja', 'Dekomposer saja', 'Abiotik'], ans: 0, exp: 'Omnivora sering menempati lebih dari satu tingkat trofik.' },
      { text: 'Gabungan berbagai rantai makanan yang saling tumpang tindih di dalam satu ekosistem disebut...', opts: ['Jaring-jaring makanan', 'Piramida batu', 'Simbiosis', 'Populasi'], ans: 0, exp: 'Jaring makanan menggambarkan realitas makan-dimakan di alam.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-02', subSeq: 6,
    objectives: ['Siswa mampu menjelaskan aliran energi satu arah dan aturan 10% pada piramida energi.'],
    materialTitle: 'Aliran Energi dan Piramida Energi (Aturan 10%)',
    blocks: [
      { type: 'formula', name: 'Aturan 10% Piramida Energi', expression: 'Hanya ~10% energi yang diteruskan ke tingkat trofik berikutnya (~90% terpakai respirasi & lepas sebagai panas)!', note: 'Energi mengalir SATU ARAH (Matahari → Produsen → Konsumen → hilang sebagai panas), sedangkan MATERI (air, karbon, nitrogen) BERSIKLUS!' },
    ],
    activityTitle: 'Latihan: Aliran Energi',
    questions: [
      { text: 'Jika produsen (tumbuhan) menangkap energi sebesar 10.000 kkal, maka energi yang kira-kira tersedia bagi Konsumen II (aturan 10%) adalah...', opts: ['100 kkal', '1.000 kkal', '10 kkal', '5.000 kkal'], ans: 0, exp: 'Produsen 10.000 → Konsumen I = 1.000 → Konsumen II = 100 kkal.' },
      { text: 'Mengapa jumlah populasi konsumen puncak (seperti elang atau harimau) di alam jauh lebih SEDIKIT dibandingkan produsen (tumbuhan)?', opts: ['Karena energi yang tersisa di puncak piramida energi sangat sedikit akibat kehilangan ~90% energi di tiap tingkat', 'Karena elang tidak mau berkembang biak', 'Karena tumbuhan tidak butuh energi', 'Karena predator tidak makan'], ans: 0, exp: 'Keterbatasan energi di tingkat atas membatasi biomassa predator puncak.' },
      { text: 'Sumber energi utama hampir seluruh ekosistem di permukaan Bumi berasal dari...', opts: ['Cahaya Matahari', 'Angin malam', 'Batu bara', 'Bulan'], ans: 0, exp: 'Produsen mengubah energi surya menjadi energi kimia makanan.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-02', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan konsep keseimbangan ekosistem dinamis dan daya dukung lingkungan (carrying capacity).'],
    materialTitle: 'Keseimbangan Ekosistem',
    blocks: [
      { type: 'text', text: 'Ekosistem seimbang bukan berarti jumlah populasinya diam membeku, melainkan DINAMIS (fluktuasi alami terkendali sesuai daya dukung lingkungan/carrying capacity). Keseimbangan terganggu apabila salah satu komponen rusak drastis akibat polusi, penebangan hutan, atau spesies invasif!' },
    ],
    activityTitle: 'Latihan: Keseimbangan Ekosistem',
    questions: [
      { text: 'Pelepasan ikan predator asing invasif (seperti ikan aligator/arapaima) secara sembarangan ke sungai lokal sangat merusak keseimbangan ekosistem karena...', opts: ['Memangsa habis ikan-ikan asli lokal yang tidak memiliki pertahanan alami terhadap predator asing tersebut', 'Membersihkan plastik sungai', 'Menambah ikan lokal', 'Menyuburkan sungai'], ans: 0, exp: 'Spesies invasif merusak rantai makanan asli perairan.' },
      { text: 'Batas maksimum jumlah populasi suatu spesies yang dapat ditopang oleh sumber daya suatu habitat tanpa merusak lingkungan disebut...', opts: ['Daya dukung lingkungan (carrying capacity)', 'Mutasi genetik', 'Fermentasi', 'Induksi'], ans: 0, exp: 'Melebihi daya dukung memicu kelangkaan makanan dan kerusakan habitat.' },
      { text: 'Tanda sebuah ekosistem perairan sungai berada dalam kondisi seimbang dan sehat antara lain...', opts: ['Air jernih tak berbau busuk, kadar oksigen cukup, dan ditemukan beragam biota air alami', 'Air hitam pekat penuh busa deterjen', 'Hanya ditumbuhi eceng gondok menutupi 100% permukaan', 'Semua ikan mengapung mati'], ans: 0, exp: 'Keanekaragaman biota menjadi bioindikator kesehatan perairan.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-02', subSeq: 8,
    objectives: ['Siswa mampu menganalisis perubahan ekosistem (alami & antropogenik) seperti eutrofikasi, biomagnifikasi pestisida, dan suksesi.'],
    materialTitle: 'Perubahan Ekosistem (Eutrofikasi & Biomagnifikasi)',
    blocks: [
      { type: 'table', title: '2 Fenomena Pencemaran Ekosistem Wajib Paham', headers: ['Fenomena', 'Mekanisme Singkat'], rows: [
        ['Eutrofikasi (Blooming Alga)', 'Limbah pupuk/deterjen kaya fosfat-nitrat → alga/eceng gondok meledak → tutupi cahaya → oksigen air anjlok → ikan mati!'],
        ['Biomagnifikasi', 'Racun tak terurai (merkuri/DDT) makin pekat konsentrasinya di tubuh KONSUMEN PUNCAK (termasuk manusia!)'],
      ]},
    ],
    activityTitle: 'Latihan: Perubahan Ekosistem',
    questions: [
      { text: 'Meledaknya pertumbuhan eceng gondok atau alga hijau di danau akibat aliran limbah pupuk pertanian dan deterjen berlebih disebut...', opts: ['Eutrofikasi', 'Fotosintesis normal', 'Mutualisme', 'Fermentasi'], ans: 0, exp: 'Eutrofikasi menurunkan oksigen terlarut dan mematikan ikan.' },
      { text: 'Jika perairan tercemar logam berat merkuri yang tidak dapat diuraikan tubuh, organisme pada rantai makanan yang menimbun racun dengan konsentrasi PALING TINGGI adalah...', opts: ['Konsumen puncak (ikan besar/burung pemakan ikan/manusia)', 'Fitoplankton', 'Air laut', 'Batu dasar'], ans: 0, exp: 'Fenomena biomagnifikasi melipatgandakan akumulasi racun di puncak rantai makanan.' },
      { text: 'Proses pemulihan alami suatu kawasan ekosistem yang rusak (misal lahan bekas letusan gunungapi) secara bertahap dari lumut → rumput → semak → hutan kembali disebut...', opts: ['Suksesi ekologis', 'Eutrofikasi', 'Erosi', 'Abrasi'], ans: 0, exp: 'Suksesi membangun ulang komunitas ekosistem dalam jangka panjang.' },
    ],
  },

  // BAB 3: PERUBAHAN IKLIM DAN PELESTARIAN LINGKUNGAN (9 sub)
  {
    topicCode: 'IPA-SMP9-03', subSeq: 1,
    objectives: ['Siswa mampu membedakan cuaca (jangka pendek, wilayah sempit) dan iklim (rata-rata cuaca jangka panjang ≥30 tahun, wilayah luas).'],
    materialTitle: 'Perbedaan Cuaca dan Iklim',
    blocks: [
      { type: 'table', title: 'Cuaca vs Iklim', headers: ['Aspek', 'Cuaca (Weather)', 'Iklim (Climate)'], rows: [
        ['Rentang Waktu', 'Sesaat / harian (jam ke jam)', 'Jangka panjang (rata-rata 30 tahun atau lebih!)'],
        ['Cakupan Wilayah', 'Sempit (kecamatan / kota)', 'Luas (kawasan / negara / zona lintang)'],
        ['Contoh', '"Sore ini di Gresik hujan deras 30 menit"', '"Indonesia beriklim tropis lembap dengan dua musim"'],
      ]},
    ],
    activityTitle: 'Latihan: Cuaca & Iklim',
    questions: [
      { text: 'Manakah pernyataan yang menggambarkan IKLIM (bukan sekadar cuaca sesaat)?', opts: ['Rata-rata curah hujan tahunan di Pulau Jawa selama 30 tahun terakhir menunjukkan pola musim hujan Oktober–Maret', 'Pagi ini langit di atas sekolah mendung berangin', 'Kemarin siang suhu udara mencapai 35°C', 'Malam nanti diperkirakan hujan ringan'], ans: 0, exp: 'Iklim adalah pola statistik rata-rata cuaca dalam periode panjang (~30 tahun).' },
      { text: 'Ilmu yang mempelajari cuaca disebut meteorologi, sedangkan ilmu yang mempelajari iklim disebut...', opts: ['Klimatologi', 'Biologi', 'Geologi', 'Astronomi'], ans: 0, exp: 'Klimatologi mengkaji pola iklim jangka panjang.' },
      { text: 'Jika suatu hari di musim panas turun hujan dingin lebat, apakah hal itu membantah adanya perubahan iklim global?', opts: ['Tidak — itu hanya variasi cuaca 1 hari, sedangkan perubahan iklim diukur dari tren rata-rata suhu global puluhan tahun', 'Ya, pemanasan global langsung selesai', 'Cuaca dan iklim sama persis', 'Suhu bumi pasti membeku'], ans: 0, exp: 'Jangan menyamakan 1 hari cuaca dingin dengan tren iklim dekadean.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-03', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan mekanisme Efek Rumah Kaca alami vs peningkatan Efek Rumah Kaca pemicu pemanasan global.'],
    materialTitle: 'Mekanisme Efek Rumah Kaca',
    blocks: [
      { type: 'text', text: 'Efek Rumah Kaca ALAMI sebenarnya BERMANFAAT menjaga suhu Bumi tetap hangat layak huni (~15°C, bukan −18°C beku!). Masalahnya muncul saat konsentrasi Gas Rumah Kaca (CO2, CH4, N2O, gas berfluorin) meningkat berlebih sehingga radiasi inframerah panas yang dipantulkan Bumi terlalu banyak terperangkap di atmosfer → PEMANASAN GLOBAL!' },
    ],
    activityTitle: 'Latihan: Efek Rumah Kaca',
    questions: [
      { text: 'Gas rumah kaca utama hasil pembakaran bahan bakar fosil (batu bara, bensin, solar) yang paling besar menyumbang pemanasan global adalah...', opts: ['Karbon dioksida (CO2)', 'Oksigen (O2)', 'Nitrogen murni (N2)', 'Helium (He)'], ans: 0, exp: 'Emisi CO2 dari energi fosil adalah pendorong terbesar pemanasan global.' },
      { text: 'Mekanisme fisik efek rumah kaca di atmosfer terjadi ketika gas rumah kaca...', opts: ['Meneruskan cahaya tampak Matahari masuk ke Bumi, namun menyerap & memerangkap kembali sebagian radiasi panas (inframerah) yang dipancarkan Bumi', 'Menghalangi semua sinar Matahari masuk', 'Menghasilkan api di langit', 'Memantulkan oksigen ke luar angkasa'], ans: 0, exp: 'Radiasi inframerah terperangkap seperti panas di dalam mobil parkir tertutup.' },
      { text: 'Mengapa efek rumah kaca dalam kadar ALAMI sebenarnya dibutuhkan kehidupan di Bumi?', opts: ['Menjaga suhu rata-rata permukaan Bumi tetap hangat (~15°C) agar air tetap cair dan makhluk hidup bisa bertahan', 'Membuat Bumi bersuhu 100°C', 'Menghilangkan atmosfer', 'Menciptakan banjir'], ans: 0, exp: 'Tanpa efek rumah kaca alami, Bumi akan membeku di sekitar −18°C.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-03', subSeq: 3,
    objectives: ['Siswa mampu menganalisis faktor alami dan faktor antropogenik (manusia) penyebab perubahan iklim.'],
    materialTitle: 'Faktor Penyebab Perubahan Iklim',
    blocks: [
      { type: 'text', text: 'Secara alami iklim Bumi berubah sangat lambat selama ribuan tahun (aktivitas Matahari, orbit Bumi, letusan gunungapi super). Namun pemanasan cepat sejak Revolusi Industri abad ke-19 hingga kini didominasi faktor ANTROPOGENIK (aktivitas manusia) yang melepas miliaran ton CO2 dan metana setiap tahun!' },
    ],
    activityTitle: 'Latihan: Penyebab Perubahan Iklim',
    questions: [
      { text: 'Penyebab dominan percepatan kenaikan suhu rata-rata global selama 150 tahun terakhir berdasarkan konsensus ilmuwan iklim dunia adalah...', opts: ['Emisi gas rumah kaca dari aktivitas manusia (pembakaran fosil, deforestasi, industri)', 'Perubahan fase Bulan', 'Pasang surut harian', 'Rotasi Bumi 24 jam'], ans: 0, exp: 'Aktivitas antropogenik menaikkan konsentrasi CO2 atmosfer secara drastis.' },
      { text: 'Mengapa penggundulan hutan (deforestasi) mempercepat pemanasan global?', opts: ['Berkurangnya pohon berarti penyerap alami CO2 menyusut, dan pembakaran hutan melepaskan karbon tersimpan ke udara', 'Pohon menghasilkan CO2 panas', 'Hutan menghalangi hujan', 'Pohon membuat udara panas'], ans: 0, exp: 'Hutan adalah penyerap karbon (carbon sink) utama daratan.' },
      { text: 'Gas metana (CH4) yang daya perangkap panasnya sangat kuat banyak dihasilkan dari...', opts: ['Pembusukan sampah organik di TPA terbuka dan sektor peternakan/sawah tergenang', 'Panel surya', 'Kincir angin', 'Sepeda kayuh'], ans: 0, exp: 'Pengomposan aerob dan pengurangan food waste menekan emisi metana.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-03', subSeq: 4,
    objectives: ['Siswa mampu mengidentifikasi aktivitas harian manusia yang menyumbang jejak karbon (energi fosil, transportasi, sampah, pola konsumsi).'],
    materialTitle: 'Aktivitas Manusia dan Jejak Karbon',
    blocks: [
      { type: 'tip', text: 'JEJAK KARBON (carbon footprint) adalah total emisi gas rumah kaca yang dihasilkan secara langsung maupun tak langsung dari aktivitas kita (listrik rumah, kendaraan bermotor, barang sekali pakai, hingga sisa makanan).' },
    ],
    activityTitle: 'Latihan: Aktivitas & Jejak Karbon',
    questions: [
      { text: 'Manakah kegiatan berikut yang menyumbang JEJAK KARBON PALING BESAR per orang per kilometer perjalanan?', opts: ['Mengendarai mobil pribadi berbahan bakar bensin sendirian', 'Bersepeda atau berjalan kaki', 'Naik bus umum/kereta listrik bersama banyak penumpang', 'Naik sepeda listrik jarak dekat'], ans: 0, exp: 'Emisi per penumpang paling tinggi pada kendaraan pribadi berpenumpang tunggal.' },
      { text: 'Membiarkan lampu, TV, dan AC menyala di ruangan kosong memperbesar perubahan iklim karena...', opts: ['Sebagian besar pembangkit listrik masih menggunakan batu bara/gas fosil yang menghasilkan CO2', 'Listrik terbuat dari air saja', 'AC menyerap CO2', 'Tidak ada kaitannya'], ans: 0, exp: 'Hemat listrik = hemat bahan bakar fosil = tekan emisi CO2.' },
      { text: 'Kebiasaan "fast fashion" (membeli baju terus-menerus lalu cepat dibuang) dan boros plastik turut memicu krisis iklim karena...', opts: ['Proses produksi, pewarnaan, pengiriman, dan pembuangan limbahnya menghabiskan banyak energi fosil dan air', 'Pakaian menyerap matahari', 'Plastik berubah jadi pohon', 'Tidak butuh energi produksi'], ans: 0, exp: 'Konsumsi bijak menurunkan jejak karbon industri.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-03', subSeq: 5,
    objectives: ['Siswa mampu menganalisis dampak perubahan iklim pada es kutub, muka laut, terumbu karang (coral bleaching), dan cuaca ekstrem.'],
    materialTitle: 'Dampak Perubahan Iklim terhadap Bumi & Ekosistem',
    blocks: [
      { type: 'visual_cards', title: '4 Dampak Nyata Krisis Iklim', cards: [
        { emoji: '🧊', label: 'Es Kutub & Gletser Mencair', sub: 'Permukaan air laut naik mengancam pulau kecil & kota pesisir' },
        { emoji: '🪸', label: 'Pemutihan Karang & Asidifikasi Laut', sub: 'Air laut makin hangat & asam (serap CO2) memutihkan terumbu karang' },
        { emoji: '🌪️', label: 'Cuaca Ekstrem', sub: 'Gelombang panas, hujan ekstrem, banjir bandang, & kekeringan panjang' },
        { emoji: '🌾', label: 'Ketahanan Pangan Terancam', sub: 'Pergeseran musim mengganggu panen padi & tangkapan ikan' },
      ]},
    ],
    activityTitle: 'Latihan: Dampak Perubahan Iklim',
    questions: [
      { text: 'Pemanasan suhu air laut menyebabkan alga simbiotik keluar dari jaringan karang sehingga karang memutih dan rentan mati. Fenomena ini disebut...', opts: ['Pemutihan terumbu karang (coral bleaching)', 'Eutrofikasi', 'Fotosintesis', 'Abrasi'], ans: 0, exp: 'Coral bleaching merusak habitat ribuan spesies ikan karang.' },
      { text: 'Dua mekanisme fisika utama yang menyebabkan naiknya muka air laut saat Bumi memanas adalah...', opts: ['Mencairnya es daratan kutub/gletser DAN pemuaian termal volume air laut yang menghangat', 'Bertambahnya ikan paus', 'Hujan meteor', 'Pasang surut harian saja'], ans: 0, exp: 'Air memuai saat suhunya naik ditambah lelehan es daratan Greenland/Antarktika.' },
      { text: 'Penyerapan CO2 berlebih oleh lautan membentuk asam karbonat yang menurunkan pH laut (pengasaman laut / ocean acidification) sehingga mengganggu hewan bercangkang (kerang, karang) karena...', opts: ['Air lebih asam menyulitkan pembentukan dan mengikis cangkang kalsium karbonat (CaCO3)', 'Air menjadi manis', 'Cangkang tumbuh terlalu cepat', 'Suhu laut membeku'], ans: 0, exp: 'Asam melarutkan/menghambat pembentukan kalsium karbonat.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-03', subSeq: 6,
    objectives: ['Siswa mampu menganalisis keterkaitan pencemaran udara, air, dan tanah (termasuk mikroplastik & hujan asam) dengan kerusakan lingkungan.'],
    materialTitle: 'Pencemaran Udara, Air, dan Tanah',
    blocks: [
      { type: 'table', title: '3 Jenis Pencemaran & Polutan Utama', headers: ['Pencemaran', 'Polutan Kunci & Dampak'], rows: [
        ['Udara', 'SO2 & NOx (pemicu hujan asam pH < 5,6), PM2.5 (gangguan paru), CO, CFC (penipisan lapisan ozon O3!)'],
        ['Air', 'Limbah domestik, logam berat industri, deterjen, & mikroplastik (<5 mm masuk rantai makanan)'],
        ['Tanah', 'Sampah plastik non-biodegradable, pestisida berlebih, limbah B3 (baterai/aki bekas)'],
      ]},
    ],
    activityTitle: 'Latihan: Pencemaran Lingkungan',
    questions: [
      { text: 'Gas polutan dari pembakaran batu bara dan kendaraan yang bereaksi dengan uap air di atmosfer membentuk HUJAN ASAM adalah...', opts: ['Sulfur dioksida (SO2) dan nitrogen oksida (NOx)', 'Oksigen dan helium', 'Uap air murni', 'Argon'], ans: 0, exp: 'SO2 + H2O dan NOx + H2O menghasilkan asam sulfat & asam nitrat.' },
      { text: 'Penipisan lapisan OZON (O3) di stratosfer yang melindungi Bumi dari radiasi UV berbahaya terutama disebabkan oleh senyawa...', opts: ['CFC (Klorofluorokarbon, bekas kulkas/AC/aerosol lama)', 'Uap air', 'Oksigen', 'Kalsium'], ans: 0, exp: 'Protokol Montreal melarang CFC sehingga lubang ozon kini perlahan pulih!' },
      { text: 'Potongan plastik berukuran sangat kecil (< 5 mm) hasil pelapukan sampah plastik yang mencemari laut dan dapat tertelan ikan disebut...', opts: ['Mikroplastik', 'Fitoplankton', 'Humus', 'Kompos'], ans: 0, exp: 'Mengurangi plastik sekali pakai memutus sumber mikroplastik.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-03', subSeq: 7,
    objectives: ['Siswa mampu merancang tindakan mitigasi perubahan iklim secara ilmiah di sektor energi, transportasi, sampah, dan kehutanan.'],
    materialTitle: 'Mitigasi Perubahan Iklim',
    blocks: [
      { type: 'text', text: 'MITIGASI berfokus menyerang AKAR MASALAH dengan menurunkan emisi gas rumah kaca dan memperbesar serapan karbon: transisi energi terbarukan (PLTS/PLTB), efisiensi listrik, kompos sampah organik, serta rehabilitasi hutan darat dan mangrove (karbon biru / blue carbon — mangrove menyerap karbon 3–5 kali lebih tinggi per hektare dibanding hutan darat!).' },
    ],
    activityTitle: 'Latihan: Mitigasi Iklim',
    questions: [
      { text: 'Ekosistem pesisir seperti hutan MANGROVE dan padang lamun dijuluki penyerap "Blue Carbon" (karbon biru) yang sangat hebat dalam mitigasi iklim karena...', opts: ['Mampu menyerap dan menyimpan cadangan karbon dalam jumlah sangat besar di biomassa dan sedimen lumpurnya', 'Berwarna biru di malam hari', 'Menghasilkan bensin', 'Meniupkan angin dingin'], ans: 0, exp: 'Rehabilitasi mangrove di pesisir sangat strategis untuk mitigasi sekaligus adaptasi abrasi.' },
      { text: 'Pengolahan sampah organik rumah tangga menjadi kompos atau eco-enzyme membantu mitigasi iklim karena...', opts: ['Mencegah penumpukan sampah organik anaerob di TPA yang melepaskan gas metana (CH4)', 'Menghasilkan batu bara', 'Menghilangkan air hujan', 'Menaikkan suhu tanah'], ans: 0, exp: 'Pengomposan terkontrol menekan emisi metana.' },
      { text: 'Target global "Net Zero Emission" berarti...', opts: ['Jumlah emisi gas rumah kaca yang dilepaskan manusia seimbang dengan jumlah yang diserap kembali oleh alam/teknologi', 'Tidak boleh ada oksigen', 'Listrik dilarang total', 'Semua kendaraan hilang besok'], ans: 0, exp: 'Emisi bersih nol dicapai lewat pengurangan emisi drastis + penyerapan karbon.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-03', subSeq: 8,
    objectives: ['Siswa mampu merancang upaya adaptasi ekologis dan teknis terhadap dampak perubahan iklim di lingkungan lokal.'],
    materialTitle: 'Adaptasi terhadap Perubahan Iklim',
    blocks: [
      { type: 'list', title: 'Contoh Adaptasi Berbasis Sains di Lingkungan Kita', items: ['Pembuatan sumur resapan & lubang biopori untuk menampung hujan deras dan cadangan air tanah musim kemarau.', 'Penanaman pohon peneduh kota (urban forestry) untuk meredam efek pulau panas perkotaan (urban heat island).', 'Sistem peringatan dini banjir/cuaca ekstrem & budidaya tanaman/ikan toleran perubahan suhu dan salinitas.'] },
    ],
    activityTitle: 'Latihan: Adaptasi Iklim',
    questions: [
      { text: 'Mengapa pusat kota padat beton dan aspal terasa jauh lebih panas dibanding desa berpepohonan (fenomena Urban Heat Island)?', opts: ['Beton dan aspal gelap menyerap lalu memancarkan panas sementara minim vegetasi peneduh dan penguapan daun', 'Kota lebih dekat ke Matahari', 'Desa tidak kena sinar Matahari', 'Aspal menghasilkan es'], ans: 0, exp: 'Ruang terbuka hijau dan taman atap mendinginkan suhu mikro perkotaan.' },
      { text: 'Fungsi lubang resapan BIOPORI yang diisi sampah daun organik di halaman sekolah adalah...', opts: ['Mempercepat resapan air hujan mengurangi genangan sekaligus menghasilkan kompos alami', 'Menampung sampah plastik', 'Membakar sampah', 'Menghambat pertumbuhan akar'], ans: 0, exp: 'Cacing dan akar membuka pori tanah sehingga daya serap air melonjak.' },
      { text: 'Mengembangkan varietas padi tahan genangan banjir dan tahan kekeringan merupakan contoh adaptasi di bidang...', opts: ['Pertanian dan ketahanan pangan', 'Industri tekstil', 'Pertambangan', 'Penerbangan'], ans: 0, exp: 'Varietas adaptif melindungi produksi pangan dari anomali cuaca.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-03', subSeq: 9,
    objectives: ['Siswa mampu mempraktikkan prinsip pelestarian lingkungan (5R: Refuse, Reduce, Reuse, Recycle, Rot) dan konservasi insitu/eksitu.'],
    materialTitle: 'Tindakan Pelestarian Lingkungan & Konservasi',
    blocks: [
      { type: 'table', title: 'Konservasi In Situ vs Ex Situ & Prinsip 5R', headers: ['Konsep', 'Penjelasan & Contoh'], rows: [
        ['In Situ (Di Habitat Asli)', 'Taman Nasional (Baluran, Bromo Tengger Semeru, Komodo), Cagar Alam, Suaka Margasatwa'],
        ['Ex Situ (Di Luar Habitat Asli)', 'Kebun Raya (Purwodadi, Bogor), Kebun Binatang, penangkaran khusus'],
        ['5R Sampah', 'Refuse (tolak plastik sekali pakai), Reduce (kurangi), Reuse (pakai ulang), Recycle (daur ulang), Rot (komposkan!)'],
      ]},
    ],
    activityTitle: 'Latihan: Pelestarian Lingkungan',
    questions: [
      { text: 'Pelestarian satwa langka seperti badak jawa di Taman Nasional Ujung Kulon (langsung di habitat alaminya) disebut konservasi...', opts: ['In situ', 'Ex situ', 'Komersial', 'Eksploitasi'], ans: 0, exp: 'In situ = di habitat asli; Ex situ = di luar habitat asli (Kebun Raya/penangkaran).' },
      { text: 'Dalam piramida pengelolaan sampah 5R, langkah PALING UTAMA yang paling efektif sebelum mendaur ulang adalah...', opts: ['Refuse & Reduce (menolak dan mengurangi timbulan sampah sejak awal, mis. bawa tumbler & tas kain)', 'Membakar semua sampah', 'Membuang ke sungai', 'Menimbun plastik'], ans: 0, exp: 'Mencegah sampah tercipta jauh lebih efisien daripada mengolahnya belakangan.' },
      { text: 'Kebun Raya Purwodadi di Pasuruan (Jawa Timur) yang mengoleksi dan melestarikan ribuan jenis tumbuhan dataran rendah kering merupakan contoh pelestarian...', opts: ['Ex situ', 'In situ', 'Monokultur', 'Deforestasi'], ans: 0, exp: 'Kebun Raya melestarikan koleksi tumbuhan di luar habitat aslinya.' },
    ],
  },

  // BAB 4: BIOTEKNOLOGI KONVENSIONAL (7 sub)
  {
    topicCode: 'IPA-SMP9-04', subSeq: 1,
    objectives: ['Siswa mampu memahami pengertian bioteknologi serta membedakan bioteknologi konvensional dan modern secara umum.'],
    materialTitle: 'Pengertian Bioteknologi',
    blocks: [
      { type: 'table', title: 'Bioteknologi Konvensional vs Modern', headers: ['Aspek', 'Konvensional (Tradisional)', 'Modern'], rows: [
        ['Prinsip', 'Memanfaatkan mikroorganisme utuh secara langsung (fermentasi)', 'Rekayasa genetika / manipulasi DNA & kultur jaringan'],
        ['Alat & Biaya', 'Sederhana, murah, skala rumah tangga/UMKM', 'Canggih, steril ketat, laboratorium tinggi'],
        ['Contoh', 'Tempe, tape, yoghurt, kecap, roti, nata de coco', 'Insulin rekombinan, vaksin mRNA, tanaman transgenik'],
      ]},
    ],
    activityTitle: 'Latihan: Pengertian Bioteknologi',
    questions: [
      { text: 'Bioteknologi didefinisikan sebagai pemanfaatan prinsip ilmiah menggunakan makhluk hidup (terutama mikroorganisme) atau bagiannya untuk...', opts: ['Menghasilkan barang dan jasa yang bermanfaat bagi manusia', 'Membuat mesin besi', 'Membangkitkan listrik dari angin', 'Membuat plastik'], ans: 0, exp: 'Bio = hidup, teknologi = penerapan ilmu untuk produk/jasa bermanfaat.' },
      { text: 'Ciri khas BIOTEKNOLOGI KONVENSIONAL adalah...', opts: ['Memanfaatkan mikroorganisme secara langsung melalui fermentasi dengan peralatan sederhana', 'Memotong dan menyambung DNA secara langsung', 'Hanya bisa dilakukan di stasiun luar angkasa', 'Tidak melibatkan makhluk hidup'], ans: 0, exp: 'Bioteknologi konvensional mengandalkan kerja alami jamur/bakteri fermentasi.' },
      { text: 'Manakah yang termasuk produk bioteknologi KONVENSIONAL?', opts: ['Tempe, tape singkong, yoghurt, dan kecap', 'Kloning domba Dolly', 'Insulin dari bakteri hasil rekayasa DNA', 'Tanaman jagung Bt transgenik'], ans: 0, exp: 'Keempatnya dihasilkan lewat fermentasi mikroorganisme tradisional.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-04', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan peran jamur (kapang, khamir/ragi) dan bakteri baik dalam mengubah bahan mentah menjadi pangan bergizi.'],
    materialTitle: 'Pemanfaatan Mikroorganisme dalam Pangan',
    blocks: [
      { type: 'text', text: 'Tidak semua mikroorganisme menyebabkan penyakit! Banyak kapang (jamur berbenang hifa), khamir/ragi (jamur bersel satu), dan bakteri asam laktat yang justru BERSAHABAT: memecah protein/pati kompleks menjadi zat gizi lebih mudah dicerna, memperkaya rasa/aroma, dan mengawetkan pangan secara alami!' },
    ],
    activityTitle: 'Latihan: Mikroorganisme Pangan',
    questions: [
      { text: 'Benang-benang putih halus (miselium) yang mengikat biji-biji kedelai menjadi padat dan kompak pada tempe adalah hasil pertumbuhan...', opts: ['Kapang Rhizopus oligosporus', 'Bakteri E. coli', 'Virus', 'Alga biru'], ans: 0, exp: 'Hifa jamur Rhizopus menyatukan kedelai dan menghasilkan enzim pemecah protein.' },
      { text: 'Mengapa ragi roti (Saccharomyces cerevisiae) mampu membuat adonan roti mengembang empuk?', opts: ['Fermentasi khamir menghasilkan gelembung gas karbon dioksida (CO2) yang terperangkap di adonan', 'Ragi menghasilkan oksigen cair', 'Ragi mencairkan tepung', 'Ragi membuat adonan membeku'], ans: 0, exp: 'Gas CO2 yang terperangkap gluten membuat tekstur roti berongga empuk.' },
      { text: 'Bakteri asam laktat (seperti Lactobacillus) dalam yoghurt bermanfaat bagi pencernaan manusia karena berperan sebagai...', opts: ['Probiotik (bakteri baik penjaga kesehatan usus)', 'Patogen penyebab diare', 'Racun makanan', 'Pewarna sintetis'], ans: 0, exp: 'Probiotik menjaga keseimbangan mikrobiota usus.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-04', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan prinsip kimiawi fermentasi anaerob (fermentasi alkohol dan fermentasi asam laktat).'],
    materialTitle: 'Prinsip Fermentasi',
    blocks: [
      { type: 'formula', name: '2 Reaksi Utama Fermentasi Pangan (Anaerob)', expression: '1) Fermentasi Alkohol (Ragi): Glukosa → Etanol + CO2 + Energi   |   2) Fermentasi Asam Laktat: Laktosa → Asam Laktat', note: 'Fermentasi berlangsung tanpa oksigen bebas (anaerob), menghasilkan rasa khas manis-asam/harum dan menurunkan pH sehingga menghambat bakteri pembusuk!' },
    ],
    activityTitle: 'Latihan: Prinsip Fermentasi',
    questions: [
      { text: 'Pada pembuatan tape singkong, singkong yang dibungkus rapat dalam kondisi minim oksigen menjadi lunak, manis, dan beraroma khas karena proses...', opts: ['Fermentasi anaerob yang mengubah pati → glukosa → sedikit alkohol & CO2', 'Fotosintesis', 'Penggorengan', 'Pembekuan'], ans: 0, exp: 'Enzim amilase dan zimase ragi memecah pati singkong.' },
      { text: 'Rasa asam segar dan tekstur mengental pada YOGHURT berasal dari perubahan gula susu (laktosa) menjadi...', opts: ['Asam laktat (yang menggumpalkan protein susu kasein)', 'Garam dapur', 'Minyak goreng', 'Gas oksigen'], ans: 0, exp: 'Penurunan pH oleh asam laktat mengkoagulasi protein susu menjadi kental.' },
      { text: 'Mengapa wadah fermentasi tape harus ditutup rapat selama 2–3 hari?', opts: ['Menciptakan kondisi anaerob (minim oksigen) dan mencegah kontaminasi mikroba pembusuk dari udara', 'Agar terkena sinar matahari langsung', 'Supaya cepat kering jadi keripik', 'Agar semut bisa masuk'], ans: 0, exp: 'Ragi melakukan fermentasi alkohol secara optimal dalam kondisi anaerob.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-04', subSeq: 4,
    objectives: ['Siswa mampu memasangkan 6 produk bioteknologi konvensional dengan bahan baku dan nama mikroorganismenya secara tepat.'],
    materialTitle: 'Contoh Produk Fermentasi & Mikroorganismenya',
    blocks: [
      { type: 'table', title: 'Tabel Wajib Hafal Ujian Bioteknologi SMP!', headers: ['Produk', 'Bahan Baku', 'Mikroorganisme Utama'], rows: [
        ['Tempe', 'Kedelai', 'Rhizopus oligosporus / Rhizopus oryzae (kapang)'],
        ['Tape / Roti', 'Singkong atau ketan / Tepung', 'Saccharomyces cerevisiae (khamir/ragi)'],
        ['Yoghurt', 'Susu segar', 'Lactobacillus bulgaricus & Streptococcus thermophilus'],
        ['Kecap / Tauco', 'Kedelai hitam', 'Aspergillus wentii (kapang)'],
        ['Nata de Coco', 'Air kelapa', 'Acetobacter xylinum (bakteri pembentuk selulosa)'],
        ['Oncom', 'Bungkil kacang tanah', 'Neurospora crassa / sitophila'],
      ]},
    ],
    activityTitle: 'Latihan: Produk Fermentasi',
    questions: [
      { text: 'Pasangan produk bioteknologi konvensional dan mikroorganismenya yang BENAR adalah...', opts: ['Kecap — Aspergillus wentii; Nata de coco — Acetobacter xylinum', 'Tempe — Acetobacter xylinum; Yoghurt — Rhizopus', 'Tape — Lactobacillus; Tempe — Saccharomyces', 'Yoghurt — Neurospora; Roti — Aspergillus'], ans: 0, exp: 'Aspergillus wentii untuk kecap; Acetobacter xylinum menyintesis selulosa nata de coco.' },
      { text: 'Bakteri yang mengubah air kelapa menjadi lembaran kenyal berserat selulosa tinggi (Nata de Coco) adalah...', opts: ['Acetobacter xylinum', 'Rhizopus oryzae', 'Saccharomyces cerevisiae', 'Aspergillus wentii'], ans: 0, exp: 'Acetobacter xylinum membentuk jalinan benang selulosa dari gula dalam air kelapa.' },
      { text: 'Dua bakteri yang bersimbiosis mengubah susu menjadi yoghurt adalah...', opts: ['Lactobacillus bulgaricus dan Streptococcus thermophilus', 'Rhizopus dan Neurospora', 'E. coli dan Salmonella', 'Saccharomyces dan Aspergillus'], ans: 0, exp: 'Keduanya bekerja sama menghasilkan asam laktat dan aroma khas yoghurt.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-04', subSeq: 5,
    objectives: ['Siswa mampu menjelaskan tahapan umum proses pembuatan produk fermentasi (sterilisasi/perebusan, pendinginan, inokulasi ragi, inkubasi).'],
    materialTitle: 'Tahapan Umum Proses Fermentasi',
    blocks: [
      { type: 'list', title: '4 Tahap Kunci Fermentasi (Contoh: Tape / Yoghurt)', items: ['1. Pembersihan & Pemanasan (kukus/pasteurisasi): melunakkan bahan sekaligus mematikan kuman pengganggu!', '2. Pendinginan hingga suhu ruang/hangat kuku: WAJIB! Jika ragi/bibit ditabur saat masih panas mendidih, mikroorganismenya MATI!', '3. Inokulasi: menaburkan ragi/starter secara merata.', '4. Inkubasi: menyimpan pada suhu dan waktu tepat (mis. 24–72 jam) hingga fermentasi sempurna!'] },
    ],
    activityTitle: 'Latihan: Tahapan Fermentasi',
    questions: [
      { text: 'Mengapa singkong kukus atau susu pasteurisasi HARUS didinginkan dulu hingga suhu ruang/hangat kuku sebelum diberi ragi tape atau bibit yoghurt?', opts: ['Karena suhu terlalu panas akan membunuh mikroorganisme ragi/bakteri sehingga fermentasi gagal total', 'Agar tidak enak', 'Supaya cepat basi', 'Karena ragi hanya bekerja pada 100°C'], ans: 0, exp: 'Mikroorganisme fermentasi hidup optimal di suhu sekitar 25–43°C.' },
      { text: 'Tahap pemberian/penaburan bibit mikroorganisme (ragi/starter) ke dalam media bahan baku disebut...', opts: ['Inokulasi', 'Pasteurisasi', 'Filtrasi', 'Distilasi'], ans: 0, exp: 'Inokulasi adalah penanaman bibit mikroba.' },
      { text: 'Pada pembuatan tempe, perebusan dan perendaman kedelai sebelum dikupas kulit arinya berfungsi untuk...', opts: ['Melunakkan biji, mempermudah pelepasan kulit ari agar hifa jamur bisa menembus, dan menurunkan pH sehingga bakteri pembusuk terhambat', 'Menghilangkan protein kedelai', 'Mengubah kedelai jadi tepung', 'Membuat kedelai pahit'], ans: 0, exp: 'Kulit ari harus lepas agar miselium Rhizopus mudah menembus keping kedelai.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-04', subSeq: 6,
    objectives: ['Siswa mampu mengevaluasi manfaat (nilai gizi, cita rasa, ekonomi UMKM) sekaligus keterbatasan bioteknologi konvensional.'],
    materialTitle: 'Manfaat dan Keterbatasan Bioteknologi Konvensional',
    blocks: [
      { type: 'table', title: 'Kelebihan vs Keterbatasan Bioteknologi Konvensional', headers: ['Manfaat / Kelebihan', 'Keterbatasan'], rows: [
        ['Meningkatkan daya cerna & nilai gizi (tempe mudah dicerna daripada kedelai rebus!)', 'Skala produksi & kestabilan mutu sangat dipengaruhi suhu/kelembapan cuaca'],
        ['Biaya rendah, alat sederhana, menggerakkan ekonomi UMKM lokal', 'Tidak mampu mengubah sifat genetik secara terarah untuk masalah medis kompleks (seperti membuat insulin manusia)'],
      ]},
    ],
    activityTitle: 'Latihan: Manfaat & Keterbatasan',
    questions: [
      { text: 'Salah satu keunggulan gizi TEMPE dibandingkan kedelai rebus biasa adalah...', opts: ['Protein kompleks kedelai sudah dipecah sebagian oleh enzim kapang menjadi asam amino yang jauh lebih mudah diserap tubuh', 'Tempe tidak mengandung protein', 'Tempe hanya berisi air', 'Tempe tidak mudah dicerna'], ans: 0, exp: 'Fermentasi meningkatkan bioavailabilitas nutrisi dan menghasilkan vitamin B12.' },
      { text: 'Keterbatasan utama bioteknologi konvensional dibandingkan bioteknologi modern adalah...', opts: ['Tidak dapat memodifikasi sifat genetik secara spesifik dan mutu hasilnya lebih rentan dipengaruhi kondisi lingkungan', 'Biayanya selalu triliunan rupiah', 'Tidak bisa membuat makanan', 'Harus menggunakan komputer super'], ans: 0, exp: 'Bioteknologi konvensional bergantung pada sifat alami mikroba.' },
      { text: 'Peran ekonomi bioteknologi konvensional bagi masyarakat Indonesia (termasuk sentra UMKM kuliner daerah) adalah...', opts: ['Menciptakan nilai tambah bahan lokal (kedelai, singkong, air kelapa) dengan modal terjangkau', 'Menghapus petani lokal', 'Menggantungkan impor 100%', 'Tidak bernilai jual'], ans: 0, exp: 'Tempe, tape, kecap, dan nata de coco menjadi tulang punggung ribuan UMKM pangan.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-04', subSeq: 7,
    objectives: ['Siswa mampu menerapkan standar higiene, sanitasi, dan keamanan pangan saat praktik fermentasi sederhana di sekolah/rumah.'],
    materialTitle: 'Kebersihan dan Keamanan Praktik Fermentasi',
    blocks: [
      { type: 'tip', text: 'Kontaminasi bakteri liar bisa membuat produk gagal (berlendir, bau busuk, atau tumbuh jamur hitam/hijau beracun)! Selalu cuci tangan pakai sabun, sterilkan sendok/wadah dengan air panas, pakai ragi bermutu baik, dan JANGAN pernah mencicipi hasil fermentasi yang berbau busuk atau berjamur aneh!' },
    ],
    activityTitle: 'Latihan: Keamanan Praktik Fermentasi',
    questions: [
      { text: 'Jika saat membuka hasil praktik pembuatan tape atau tempe terlihat tumbuh jamur berwarna HITAM/HIJAU berbau busuk menyengat, tindakan paling aman adalah...', opts: ['Membuangnya dan TIDAK mencicipinya karena telah terkontaminasi mikroba pembusuk/beracun', 'Mencucinya lalu tetap dimakan', 'Menambah gula banyak-banyak', 'Membagikan ke teman'], ans: 0, exp: 'Jamur kontaminan dapat menghasilkan mikotoksin berbahaya bagi kesehatan.' },
      { text: 'Tindakan sanitasi paling penting sebelum memulai praktik pembuatan yoghurt di laboratorium IPA sekolah adalah...', opts: ['Mencuci tangan bersih dan mensterilkan wadah serta sendok pengaduk dengan air panas/mendidih', 'Memakai wadah kotor bekas minyak', 'Membiarkan wadah terbuka di dekat tempat sampah', 'Menyentuh bibit langsung dengan tangan kotor'], ans: 0, exp: 'Sterilitas alat mencegah bakteri asing mengalahkan bakteri baik.' },
      { text: 'Mengapa ragi tape yang sudah kedaluwarsa atau disimpan di tempat lembap terbuka sering membuat tape gagal manis?', opts: ['Sebagian besar sel khamirnya sudah mati atau tercemar mikroba lain sehingga fermentasi tidak berjalan optimal', 'Karena raginya terlalu kuat', 'Karena singkong tidak punya pati', 'Tidak ada pengaruhnya'], ans: 0, exp: 'Kualitas dan viabilitas starter sangat menentukan keberhasilan fermentasi.' },
    ],
  },

  // BAB 5: KEMAGNETAN (9 sub)
  {
    topicCode: 'IPA-SMP9-05', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan sifat-sifat dasar magnet serta 3 cara membuat magnet (gosokan, induksi, elektromagnet) dan cara menghilangkannya.'],
    materialTitle: 'Sifat Magnet dan Cara Membuat/Menghilangkan Magnet',
    blocks: [
      { type: 'list', title: 'Sifat & Cara Membuat Magnet', items: ['Menarik benda feromagnetik (besi, baja, nikel, kobalt), gaya terkuat di KUTUB-KUTUBNYA, menembus penghalang tipis nonmagnetik.', '3 Cara Membuat Magnet: (1) Menggosok SEARAH dengan magnet tetap, (2) Induksi (mendekatkan), (3) Elektromagnet (mengaliri arus DC di kumparan).', '3 Cara Menghilangkan Kemagnetan: dipukul/dibanting keras, dipanaskan/dibakar, atau dialiri arus bolak-balik (AC)!'] },
    ],
    activityTitle: 'Latihan: Sifat Magnet',
    questions: [
      { text: 'Sebatang besi digosok berulang kali SEARAH dari ujung A ke ujung B menggunakan kutub UTARA magnet tetap. Maka ujung A dan ujung B besi menjadi kutub...', opts: ['A = Utara, B = Selatan (ujung terakhir yang ditinggalkan berlawanan kutub penggosok!)', 'A = Selatan, B = Utara', 'Keduanya Utara', 'Tidak jadi magnet'], ans: 0, exp: 'Aturan gosokan searah: ujung awal (A) sejenis kutub penggosok (U), ujung akhir (B) berlawanan (S)!' },
      { text: 'Tiga cara yang dapat MENGHILANGKAN sifat kemagnetan suatu magnet karena mengacaukan arah magnet elementernya adalah...', opts: ['Dipanaskan hingga berpijar, dipukul/dibanting keras, dan dialiri arus bolak-balik (AC)', 'Didinginkan, direndam air, dan dijemur', 'Digosok searah, diinduksi, dan dialiri arus DC', 'Disimpan berpasangan dengan angker besi'], ans: 0, exp: 'Panas, getaran benturan, dan arus AC mengacak domain magnet.' },
      { text: 'Jika sebuah magnet batang dipotong tepat di tengah menjadi dua bagian, hasil yang terjadi adalah...', opts: ['Terbentuk dua magnet baru yang masing-masing tetap memiliki kutub Utara dan Selatan', 'Satu potongan hanya Utara dan satu lagi hanya Selatan', 'Sifat magnet hilang total', 'Keduanya menolak besi'], ans: 0, exp: 'Magnet selalu dwikutub (dipol) sampai ke tingkat magnet elementer.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-05', subSeq: 2,
    objectives: ['Siswa mampu memahami konsep kutub magnet Utara-Selatan dan alasan jarum kompas selalu menunjuk arah utara-selatan geografis Bumi.'],
    materialTitle: 'Kutub Magnet dan Kemagnetan Bumi',
    blocks: [
      { type: 'misconception', wrong: 'Kutub Utara magnet Bumi terletak persis di Kutub Utara Geografis Bumi.', right: 'TERBALIK! Karena kutub Utara jarum kompas ditarik menuju arah Utara Geografis, maka di dekat Kutub Utara Geografis sebenarnya terdapat KUTUB SELATAN MAGNET BUMI! (Penyimpangan sudutnya disebut sudut deklinasi).' },
    ],
    activityTitle: 'Latihan: Kutub Magnet & Bumi',
    questions: [
      { text: 'Bagian magnet batang yang memiliki daya tarik paling kuat terhadap serbuk besi adalah...', opts: ['Kedua ujung kutubnya (Utara dan Selatan)', 'Tepat di bagian tengah batang', 'Hanya kutub Utara', 'Hanya di sisi samping tengah'], ans: 0, exp: 'Kerapatan garis gaya magnet tertinggi ada di kedua kutub.' },
      { text: 'Mengapa kutub Utara jarum kompas selalu menunjuk ke arah Utara Geografis Bumi?', opts: ['Karena ditarik oleh Kutub Selatan Magnet Bumi yang letaknya berada di sekitar Kutub Utara Geografis', 'Karena di utara ada kutub Utara magnet Bumi', 'Karena pengaruh angin utara', 'Karena gravitasi kutub'], ans: 0, exp: 'Kutub berlawanan saling tarik-menarik.' },
      { text: 'Sudut penyimpangan antara arah Utara jarum kompas dengan arah Utara Geografis Bumi yang sesungguhnya disebut sudut...', opts: ['Deklinasi', 'Inklinasi', 'Refleksi', 'Elevasi'], ans: 0, exp: 'Deklinasi = penyimpangan horizontal; Inklinasi = kemiringan jarum terhadap bidang datar.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-05', subSeq: 3,
    objectives: ['Siswa mampu memprediksi interaksi antarkutub magnet (tolak-menolak vs tarik-menarik) dan menentukan kutub benda tak dikenal.'],
    materialTitle: 'Interaksi Antarkutub Magnet',
    blocks: [
      { type: 'formula', name: 'Hukum Interaksi Kutub Magnet', expression: 'Sejenis (U↔U atau S↔S) → TOLAK-MENOLAK    |    Tak Sejenis (U↔S) → TARIK-MENARIK', note: 'Uji pasti sebuah logam adalah MAGNET (bukan sekadar besi biasa): dekatkan ke kutub magnet — jika ada posisi yang TOLAK-MENOLAK, ia PASTI magnet!' },
    ],
    activityTitle: 'Latihan: Interaksi Antarkutub',
    questions: [
      { text: 'Diketahui 3 magnet batang A-B, C-D, dan E-F. Kutub A adalah Utara. Jika B menarik C, dan D menolak E, maka kutub F adalah...', opts: ['Utara', 'Selatan', 'Netral', 'Tidak dapat ditentukan'], ans: 0, exp: 'A=U → B=S. B(S) tarik C → C=U → D=S. D(S) tolak E → E=S → F=U!' },
      { text: 'Kamu diberi dua batang besi identik: satu adalah magnet, satu lagi besi biasa nonmagnet. Bukti PALING PASTI untuk memastikan sebuah batang adalah magnet saat diuji dengan magnet acuan adalah terjadinya gaya...', opts: ['Tolak-menolak', 'Tarik-menarik saja', 'Panas', 'Berbunyi'], ans: 0, exp: 'Besi biasa selalu ditarik oleh kedua kutub, sedangkan magnet bisa tolak-menolak!' },
      { text: 'Ketika dua kutub Utara magnet batang didekatkan berhadapan, garis gaya magnet di antara keduanya akan...', opts: ['Saling menjauh/melengkung keluar (tolak-menolak)', 'Saling menyatu lurus', 'Hilang lenyap', 'Berubah jadi listrik'], ans: 0, exp: 'Kutub sejenis saling menolak.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-05', subSeq: 4,
    objectives: ['Siswa mampu mengelompokkan bahan feromagnetik, paramagnetik, dan diamagnetik beserta contohnya.'],
    materialTitle: 'Bahan Feromagnetik, Paramagnetik, dan Diamagnetik',
    blocks: [
      { type: 'table', title: '3 Kelompok Bahan Berdasarkan Sifat Kemagnetan', headers: ['Kelompok', 'Respon terhadap Magnet', 'Contoh'], rows: [
        ['Feromagnetik', 'Ditarik SANGAT KUAT oleh magnet', 'Besi, baja, nikel, kobalt'],
        ['Paramagnetik', 'Ditarik LEMAH oleh magnet', 'Aluminium, platina, magnesium'],
        ['Diamagnetik', 'Ditolak lemah / tidak ditarik magnet', 'Tembaga, emas, perak, seng, bismut, plastik, kayu'],
      ]},
    ],
    activityTitle: 'Latihan: Bahan Magnetik',
    questions: [
      { text: 'Kelompok logam yang seluruhnya merupakan bahan FEROMAGNETIK (ditarik sangat kuat oleh magnet) adalah...', opts: ['Besi, baja, nikel, dan kobalt', 'Aluminium, emas, dan tembaga', 'Plastik, kayu, dan kaca', 'Perak, seng, dan timah'], ans: 0, exp: 'Besi, baja, nikel, kobalt = 4 bahan feromagnetik klasik.' },
      { text: 'Perbedaan antara besi lunak dan baja saat dijadikan magnet adalah...', opts: ['Besi mudah dijadikan magnet tetapi sifat magnetnya sementara (cocok untuk elektromagnet); baja lebih sulit dijadikan magnet tetapi menjadi magnet permanen', 'Besi selalu permanen, baja selalu sementara', 'Keduanya tidak bisa jadi magnet', 'Sama persis'], ans: 0, exp: 'Besi lunak → magnet sementara/elektromagnet; baja → magnet tetap.' },
      { text: 'Kabel tembaga dan perhiasan emas murni tidak tertarik kuat oleh magnet karena tergolong bahan...', opts: ['Diamagnetik', 'Feromagnetik', 'Elektromagnetik', 'Supermagnet'], ans: 0, exp: 'Emas, tembaga, perak, bismut tergolong diamagnetik.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-05', subSeq: 5,
    objectives: ['Siswa mampu memahami konsep medan magnet sebagai ruang di sekitar magnet yang masih dipengaruhi gaya magnet.'],
    materialTitle: 'Konsep Medan Magnet',
    blocks: [
      { type: 'text', text: 'Medan magnet adalah daerah di sekitar magnet di mana benda feromagnetik atau magnet lain masih merasakan gaya magnet. Medan magnet bersifat gaya tak sentuh — makin dekat ke kutub magnet, makin KUAT medan magnetnya!' },
    ],
    activityTitle: 'Latihan: Medan Magnet',
    questions: [
      { text: 'Percobaan Oersted (1820) menunjukkan jarum kompas menyimpang ketika didekatkan pada kawat berarus listrik. Penemuan besar ini membuktikan bahwa...', opts: ['Di sekitar kawat berarus listrik timbul medan magnet', 'Kompas terbuat dari kayu', 'Listrik memutus magnet', 'Arus listrik hanya menghasilkan panas'], ans: 0, exp: 'Hans Christian Oersted menemukan hubungan listrik dan magnet (elektromagnetisme).' },
      { text: 'Semakin jauh jarak sebuah paku besi dari kutub sebuah magnet batang, kuat medan magnet yang dirasakan paku akan...', opts: ['Semakin melemah', 'Semakin menguat', 'Tetap sama persis', 'Berubah jadi arus listrik'], ans: 0, exp: 'Kekuatan medan magnet menurun seiring bertambahnya jarak.' },
      { text: 'Medan magnet Bumi (magnetosfer) sangat vital melindungi kehidupan di Bumi dari...', opts: ['Radiasi partikel bermuatan berbahaya dari angin Matahari (memicu aurora indah di kutub!)', 'Hujan air', 'Angin darat', 'Gempa bumi'], ans: 0, exp: 'Magnetosfer membelokkan partikel angin surya.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-05', subSeq: 6,
    objectives: ['Siswa mampu menggambarkan dan menafsirkan pola garis gaya magnet (keluar Utara → masuk Selatan, tidak pernah berpotongan).'],
    materialTitle: 'Pola Garis Gaya Medan Magnet',
    blocks: [
      { type: 'list', title: '3 Aturan Pola Garis Gaya Magnet', items: ['1. Di luar magnet, garis gaya SELALU KELUAR dari Kutub UTARA (N) menuju masuk ke Kutub SELATAN (S).', '2. Garis gaya magnet TIDAK PERNAH saling berpotongan.', '3. Semakin RAPAT garis gaya magnet di suatu area, semakin KUAT medan magnet di area tersebut!'] },
    ],
    activityTitle: 'Latihan: Pola Medan Magnet',
    questions: [
      { text: 'Arah panah garis gaya magnet di LUAR batang magnet selalu mengarah dari...', opts: ['Kutub Utara menuju Kutub Selatan', 'Kutub Selatan menuju Kutub Utara', 'Tengah ke samping', 'Acak ke segala arah'], ans: 0, exp: 'Konvensi fisika: keluar Utara (N) → masuk Selatan (S).' },
      { text: 'Saat serbuk besi ditaburkan di atas kertas yang menutupi magnet batang, serbuk besi paling padat menumpuk di kedua ujung kutub. Hal ini menunjukkan...', opts: ['Garis gaya magnet paling rapat dan medan magnet paling kuat di daerah kutub', 'Tidak ada medan di kutub', 'Tengah magnet paling kuat', 'Serbuk besi menolak kutub'], ans: 0, exp: 'Kerapatan serbuk besi memvisualisasikan kuat medan magnet.' },
      { text: 'Apakah dua garis gaya magnet dapat saling berpotongan?', opts: ['Tidak pernah berpotongan', 'Selalu berpotongan di tengah', 'Berpotongan di kutub', 'Kadang-kadang'], ans: 0, exp: 'Setiap titik ruang hanya memiliki satu arah resultan medan magnet.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-05', subSeq: 7,
    objectives: ['Siswa mampu memahami prinsip kerja elektromagnet (kumparan berarus DC dengan inti besi) dan menentukan kutubnya dengan kaidah tangan kanan.'],
    materialTitle: 'Elektromagnet',
    blocks: [
      { type: 'text', text: 'ELEKTROMAGNET adalah magnet sementara yang dibuat dengan melilitkan kawat berisolasi pada inti besi lunak lalu mengaliri arus listrik searah (DC). Keunggulan luar biasa elektromagnet: bisa DINYALAKAN & DIMATIKAN lewat sakelar, kekuatannya bisa diatur, dan kutubnya bisa dibalik dengan membalik kutub baterai!' },
      { type: 'tip', text: 'Kaidah Tangan Kanan Solenoida: genggam kumparan dengan 4 jari mengikuti arah arus listrik → IBU JARI menunjuk ke KUTUB UTARA elektromagnet!' },
    ],
    activityTitle: 'Latihan: Elektromagnet',
    questions: [
      { text: 'Keunggulan utama elektromagnet dibandingkan magnet permanen pada derek pengangkat besi tua di pelabuhan/pabrik baja adalah...', opts: ['Sifat magnetnya dapat dinyalakan untuk mengangkat besi lalu dimatikan untuk menjatuhkan besi di tempat tujuan', 'Tidak memerlukan listrik', 'Lebih berat dari besi tua', 'Tidak bisa dimatikan'], ans: 0, exp: 'Sakelar ON menarik berton-ton besi, sakelar OFF langsung melepaskannya.' },
      { text: 'Mengapa inti elektromagnet sebaiknya menggunakan BESI LUNAK, bukan baja?', opts: ['Besi lunak cepat menjadi magnet kuat saat arus mengalir dan segera hilang kemagnetannya saat arus diputus', 'Baja tidak bisa ditarik magnet', 'Besi lunak lebih mahal', 'Baja meleleh oleh baterai'], ans: 0, exp: 'Sifat sementara besi lunak penting agar elektromagnet responsif terhadap sakelar.' },
      { text: 'Jika arah arus listrik (kutub + dan − baterai) pada sebuah elektromagnet dibalik, yang terjadi adalah...', opts: ['Letak kutub Utara dan Selatan elektromagnet ikut tertukar balik', 'Elektromagnet langsung mati', 'Kawat putus', 'Tidak berubah sama sekali'], ans: 0, exp: 'Arah arus menentukan arah kutub elektromagnet.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-05', subSeq: 8,
    objectives: ['Siswa mampu menganalisis 3 faktor yang memperbesar kuat medan elektromagnet (jumlah lilitan, kuat arus, dan inti besi).'],
    materialTitle: 'Faktor yang Memengaruhi Kekuatan Elektromagnet',
    blocks: [
      { type: 'visual_cards', title: '3 Cara Memperkuat Elektromagnet', cards: [
        { emoji: '🌀', label: '1. Perbanyak Jumlah Lilitan', sub: 'Makin rapat & banyak lilitan kumparan → medan makin kuat' },
        { emoji: '🔋', label: '2. Perbesar Kuat Arus (I)', sub: 'Tambah baterai seri / tegangan → arus besar → tarikan makin kuat' },
        { emoji: '🔩', label: '3. Sisipkan Inti Besi Lunak', sub: 'Inti feromagnetik melipatgandakan kerapatan medan magnet ratusan kali!' },
      ]},
    ],
    activityTitle: 'Latihan: Faktor Elektromagnet',
    questions: [
      { text: 'Sebuah elektromagnet paku terlilit 20 lilitan dengan 1 baterai hanya mampu mengangkat 4 klip kertas. Agar mampu mengangkat lebih banyak klip kertas, cara paling efektif adalah...', opts: ['Menambah jumlah lilitan menjadi 60 lilitan dan menambah baterai (memperbesar arus)', 'Mengganti paku besi dengan pensil kayu', 'Mengurangi jumlah lilitan jadi 5', 'Melepas baterainya'], ans: 0, exp: 'Jumlah lilitan, kuat arus, dan inti besi memperbesar kuat medan elektromagnet.' },
      { text: 'Jika inti besi di dalam kumparan berarus dicabut dan diganti batang plastik, kekuatan tarik elektromagnet akan...', opts: ['Menurun drastis karena plastik bukan bahan feromagnetik', 'Meningkat 10 kali lipat', 'Tetap sama', 'Berubah jadi permanen'], ans: 0, exp: 'Inti feromagnetik memperkuat garis gaya magnet kumparan.' },
      { text: 'Selain 3 faktor di atas, mengapa pada elektromagnet sering digunakan kawat tembaga beremail (berlapis isolasi tipis)?', opts: ['Agar arus benar-benar mengalir memutari tiap lilitan dan tidak terjadi korsleting (hubungan singkat) antarlilitan', 'Supaya tidak menghantarkan listrik', 'Agar paku berkarat', 'Hanya pewarnaan'], ans: 0, exp: 'Lapisan email menjaga tiap lilitan terisolasi listrik satu sama lain.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-05', subSeq: 9,
    objectives: ['Siswa mampu menjelaskan penerapan magnet & elektromagnet dalam teknologi modern (bel listrik, motor listrik, generator, MRI, kereta Maglev, navigasi hewan).'],
    materialTitle: 'Penerapan Magnet dalam Teknologi dan Alam',
    blocks: [
      { type: 'table', title: 'Teknologi Berbasis Magnet & Elektromagnet', headers: ['Teknologi / Fenomena', 'Prinsip Kerja Singkat'], rows: [
        ['Bel Listrik & Relai', 'Elektromagnet menarik pemukul berulang kali (interuptor)'],
        ['Motor Listrik (Kipas, Blender, Mobil Listrik)', 'Gaya Lorentz: Listrik + Magnet → GERAK!'],
        ['Generator / Dinamo (PLTA/PLTB)', 'Induksi Elektromagnetik (Faraday): GERAK + Magnet → LISTRIK!'],
        ['Kereta Maglev & MRI Medis', 'Maglev = levitasi magnet tanpa gesekan rel; MRI = citra organ dalam tubuh tanpa sinar-X'],
        ['Migrasi Hewan (Penyu, Burung, Salmon)', 'Memanfaatkan medan magnet Bumi sebagai kompas biologis!'],
      ]},
    ],
    activityTitle: 'Latihan: Penerapan Magnet',
    questions: [
      { text: 'Perbedaan fungsi utama MOTOR LISTRIK dan GENERATOR (DINAMO) adalah...', opts: ['Motor listrik mengubah energi listrik → gerak; Generator mengubah energi gerak → listrik', 'Keduanya mengubah panas jadi es', 'Motor menghasilkan listrik dari angin', 'Keduanya sama persis'], ans: 0, exp: 'Kipas angin memakai motor; pembangkit listrik memakai generator.' },
      { text: 'Kereta supercepat Maglev (Magnetic Levitation) mampu melaju >400 km/jam dengan sangat halus karena...', opts: ['Melayang di atas lintasan oleh gaya tolak/tarik elektromagnet sehingga hampir tidak ada gesekan roda dengan rel', 'Memakai ban karet raksasa', 'Ditarik kuda', 'Tidak memakai listrik'], ans: 0, exp: 'Levitasi magnet menghilangkan hambatan gesekan mekanik rel.' },
      { text: 'Alat pencitraan medis canggih yang memanfaatkan medan magnet super kuat dan gelombang radio (tanpa radiasi sinar-X) untuk melihat jaringan lunak otak dan organ dalam adalah...', opts: ['MRI (Magnetic Resonance Imaging)', 'Termometer', 'Stetoskop', 'Kompas biasa'], ans: 0, exp: 'MRI memanfaatkan sifat magnetik inti atom hidrogen di tubuh manusia.' },
    ],
  },

  // BAB 6: KELISTRIKAN (10 sub)
  {
    topicCode: 'IPA-SMP9-06', subSeq: 1,
    objectives: ['Siswa mampu memahami struktur atom (proton +, elektron −, neutron 0) dan penyebab benda bermuatan positif/negatif.'],
    materialTitle: 'Muatan Listrik dalam Atom',
    blocks: [
      { type: 'text', text: 'Atom tersusun dari inti (PROTON bermuatan + dan NEUTRON netral) serta ELEKTRON bermuatan − yang mengelilingi inti. Yang bisa berpindah antar benda HANYA ELEKTRON! Benda bermuatan POSITIF = kekurangan elektron (elektron lepas); bermuatan NEGATIF = kelebihan elektron (menerima elektron).' },
    ],
    activityTitle: 'Latihan: Muatan Listrik',
    questions: [
      { text: 'Suatu benda yang awalnya netral menjadi bermuatan listrik POSITIF apabila benda tersebut...', opts: ['Melepaskan / kehilangan sebagian elektronnya', 'Menerima tambahan elektron', 'Menerima tambahan proton', 'Melepaskan neutron'], ans: 0, exp: 'Proton terikat kuat di inti; benda positif terjadi karena elektronnya berpindah keluar.' },
      { text: 'Partikel subatom yang bermuatan negatif dan mudah berpindah saat dua benda digosokkan adalah...', opts: ['Elektron', 'Proton', 'Neutron', 'Nukleus'], ans: 0, exp: 'Perpindahan elektron menimbulkan muatan listrik statis.' },
      { text: 'Benda disebut NETRAL secara kelistrikan apabila di dalam atom-atomnya...', opts: ['Jumlah proton sama dengan jumlah elektron', 'Tidak ada elektron sama sekali', 'Jumlah proton lebih banyak', 'Hanya ada neutron'], ans: 0, exp: 'Muatan positif dan negatif saling meniadakan (total nol).' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-06', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan gejala listrik statis melalui penggosokan (penggaris plastik + wol; kaca + sutra) dan prinsip penangkal petir.'],
    materialTitle: 'Listrik Statis dan Penggosokan Benda',
    blocks: [
      { type: 'table', title: '2 Percobaan Listrik Statis Wajib Hafal!', headers: ['Pasangan Gosokan', 'Arah Pindah Elektron', 'Hasil Muatan'], rows: [
        ['Penggaris Plastik / Ebonit + Kain Wol', 'Wol → Plastik', 'Plastik NEGATIF (−), Wol POSITIF (+)'],
        ['Batang Kaca + Kain Sutra', 'Kaca → Sutra', 'Kaca POSITIF (+), Sutra NEGATIF (−)'],
      ]},
    ],
    activityTitle: 'Latihan: Listrik Statis',
    questions: [
      { text: 'Penggaris plastik digosokkan pada rambut kering atau kain wol lalu didekatkan ke potongan kertas kecil hingga kertas tertarik. Hal ini terjadi karena...', opts: ['Elektron berpindah dari wol/rambut ke plastik sehingga plastik bermuatan negatif dan menginduksi kertas', 'Proton berpindah dari plastik ke wol', 'Plastik menjadi magnet permanen', 'Kertas berubah jadi logam'], ans: 0, exp: 'Plastik menerima elektron (jadi negatif) lalu menarik muatan lawan di kertas.' },
      { text: 'Batang kaca yang digosok kain sutra menjadi bermuatan POSITIF karena...', opts: ['Sebagian elektron dari batang kaca berpindah ke kain sutra', 'Proton dari sutra pindah ke kaca', 'Elektron dari sutra pindah ke kaca', 'Kaca kehilangan proton'], ans: 0, exp: 'Kaca melepas elektron → kelebihan muatan positif.' },
      { text: 'Penangkal petir di puncak gedung tinggi bekerja dengan cara...', opts: ['Menangkap loncatan muatan listrik petir dan mengalirkannya secara aman ke dalam tanah (grounding)', 'Memantulkan petir ke rumah tetangga', 'Menyimpan petir di baterai HP', 'Menghilangkan awan hujan'], ans: 0, exp: 'Bumi adalah penyerap muatan listrik raksasa (netral).' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-06', subSeq: 3,
    objectives: ['Siswa mampu memahami interaksi muatan (sejenis tolak, tak sejenis tarik), elektroskop, dan konsep Hukum Coulomb F = k(q1·q2)/r².'],
    materialTitle: 'Gejala Interaksi Muatan & Hukum Coulomb',
    blocks: [
      { type: 'formula', name: 'Hukum Coulomb', expression: 'F = k · (q1 · q2) / r²', note: 'Muatan sejenis (+/+ atau −/−) TOLAK-MENOLAK; tak sejenis (+/−) TARIK-MENARIK! Jika jarak r dijauhkan jadi 2× semula, gaya F mengecil jadi 1/(2²) = ¼ kali semula!' },
    ],
    activityTitle: 'Latihan: Interaksi Muatan & Coulomb',
    questions: [
      { text: 'Dua muatan listrik saling tarik-menarik dengan gaya 20 N. Jika jarak kedua muatan diperbesar menjadi 2 kali semula (muatan tetap), gaya tarik keduanya menjadi...', opts: ['5 N', '10 N', '40 N', '80 N'], ans: 0, exp: 'F berbanding terbalik r² → 20 ÷ 2² = 20 ÷ 4 = 5 N.' },
      { text: 'Empat bola bermuatan A, B, C, D: A bermuatan negatif (−). Jika A menarik B, B menolak C, dan C menarik D, maka muatan D adalah...', opts: ['Negatif (−)', 'Positif (+)', 'Netral', 'Tak bermuatan'], ans: 0, exp: 'A(−) tarik B(+) → B(+) tolak C(+) → C(+) tarik D(−)!' },
      { text: 'Alat laboratorium sederhana dengan dua daun logam tipis yang membuka bila didekati benda bermuatan listrik untuk mendeteksi muatan statis disebut...', opts: ['Elektroskop', 'Termometer', 'Barometer', 'Amperemeter'], ans: 0, exp: 'Elektroskop mendeteksi keberadaan dan jenis muatan statis.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-06', subSeq: 4,
    objectives: ['Siswa mampu memahami konsep arus listrik (I = Q / t), arah arus konvensional vs aliran elektron, dan Hukum I Kirchhoff.'],
    materialTitle: 'Arus Listrik dan Hukum I Kirchhoff',
    blocks: [
      { type: 'formula', name: 'Kuat Arus Listrik & Hukum I Kirchhoff', expression: 'I = Q / t  (Ampere = Coulomb/detik)    |    Σ I_masuk = Σ I_keluar', note: 'Arus konvensional mengalir dari kutub POSITIF (+) → NEGATIF (−); elektron mengalir sebaliknya (− → +). Diukur pakai AMPEREMETER dipasang SERI!' },
    ],
    activityTitle: 'Latihan: Arus Listrik',
    questions: [
      { text: 'Muatan listrik sebesar 120 Coulomb mengalir melalui kawat penghantar selama 1 menit (60 detik). Kuat arus listriknya adalah...', opts: ['2 Ampere', '120 Ampere', '0,5 Ampere', '60 Ampere'], ans: 0, exp: 'I = Q / t = 120 / 60 = 2 A.' },
      { text: 'Sesuai Hukum I Kirchhoff, pada suatu titik percabangan kawat masuk arus 8 A lalu terpecah ke 2 cabang: cabang pertama 3 A, maka arus di cabang kedua adalah...', opts: ['5 A', '11 A', '24 A', '4 A'], ans: 0, exp: 'I_masuk = I_keluar → 8 = 3 + I2 → I2 = 5 A.' },
      { text: 'Alat ukur kuat arus listrik dan cara pemasangannya yang benar pada rangkaian adalah...', opts: ['Amperemeter dipasang secara SERI', 'Voltmeter dipasang secara seri', 'Amperemeter dipasang paralel', 'Ohmmeter saat menyala'], ans: 0, exp: 'Amperemeter seri (arus melewati alat); Voltmeter paralel.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-06', subSeq: 5,
    objectives: ['Siswa mampu memahami beda potensial / tegangan listrik (V = W / Q) sebagai pendorong mengalirnya arus listrik.'],
    materialTitle: 'Beda Potensial (Tegangan Listrik)',
    blocks: [
      { type: 'formula', name: 'Beda Potensial Listrik (Volt)', expression: 'V = W / Q   (1 Volt = 1 Joule / Coulomb)', note: 'Analogi air: Beda potensial seperti beda KETINGGIAN air yang mendorong air mengalir! Tanpa beda potensial (V = 0), tidak ada arus mengalir! Diukur pakai VOLTMETER dipasang PARALEL.' },
    ],
    activityTitle: 'Latihan: Beda Potensial',
    questions: [
      { text: 'Untuk memindahkan muatan 5 Coulomb dari titik A ke B diperlukan energi listrik 60 Joule. Beda potensial antara A dan B adalah...', opts: ['12 Volt', '300 Volt', '65 Volt', '55 Volt'], ans: 0, exp: 'V = W / Q = 60 / 5 = 12 Volt.' },
      { text: 'Dua buah baterai 1,5 Volt dipasang secara SERI pada sebuah senter. Tegangan total yang dihasilkan adalah...', opts: ['3 Volt', '1,5 Volt', '0,75 Volt', '4,5 Volt'], ans: 0, exp: 'Baterai seri menjumlahkan tegangan: 1,5 + 1,5 = 3 V.' },
      { text: 'Alat untuk mengukur beda potensial (tegangan) listrik dan cara pemasangannya adalah...', opts: ['Voltmeter dipasang PARALEL terhadap komponen yang diukur', 'Voltmeter dipasang seri', 'Amperemeter paralel', 'Dinamometer'], ans: 0, exp: 'Voltmeter mengukur beda potensial di antara dua ujung komponen secara paralel.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-06', subSeq: 6,
    objectives: ['Siswa mampu memahami hambatan listrik (R), membedakan konduktor vs isolator, dan faktor penentu hambatan kawat (R = ρ·L/A).'],
    materialTitle: 'Hambatan Listrik, Konduktor, dan Isolator',
    blocks: [
      { type: 'formula', name: 'Faktor Penentu Hambatan Kawat (Satuan: Ohm / Ω)', expression: 'R = ρ · (L / A)', note: 'Hambatan R makin BESAR jika kawat makin PANJANG (L↑) atau makin TIPIS/sempit (A↓)! Tembaga punya hambatan jenis ρ sangat kecil → konduktor kabel terbaik & ekonomis!' },
    ],
    activityTitle: 'Latihan: Hambatan Listrik',
    questions: [
      { text: 'Sebuah kawat penghantar akan memiliki hambatan listrik (R) paling KECIL apabila kawat tersebut...', opts: ['Pendek, berpenampang tebal/luas, dan terbuat dari bahan konduktor baik seperti tembaga', 'Sangat panjang dan sangat tipis', 'Terbuat dari karet atau plastik', 'Sangat tipis dan berkarat'], ans: 0, exp: 'R = ρL/A kecil jika ρ kecil, L pendek, dan A besar.' },
      { text: 'Mengapa kabel listrik rumah tangga menggunakan kawat tembaga di bagian dalam dan dibungkus plastik PVC di bagian luar?', opts: ['Tembaga adalah konduktor penghantar arus yang baik, sedangkan plastik PVC adalah isolator pelindung agar manusia tidak tersetrum', 'Plastik lebih menghantarkan arus daripada tembaga', 'Tembaga adalah isolator', 'Hanya agar berwarna-warni'], ans: 0, exp: 'Konduktor mengalirkan arus, isolator melindungi pengguna.' },
      { text: 'Manakah kelompok bahan yang seluruhnya merupakan ISOLATOR listrik?', opts: ['Karet kering, plastik, kaca, dan kayu kering', 'Tembaga, besi, aluminium', 'Perak, emas, air garam', 'Grafit pensil, besi, kuningan'], ans: 0, exp: 'Isolator tidak memiliki elektron bebas untuk menghantarkan arus.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-06', subSeq: 7,
    objectives: ['Siswa mampu menghitung hambatan pengganti rangkaian seri dan paralel serta menjelaskan keunggulannya di instalasi rumah.'],
    materialTitle: 'Rangkaian Seri dan Rangkaian Paralel',
    blocks: [
      { type: 'table', title: 'Rangkaian Seri vs Paralel', headers: ['Aspek', 'Seri (1 Jalur)', 'Paralel (Bercabang)'], rows: [
        ['Hambatan Total', 'Rs = R1 + R2 + R3 (makin besar)', '1/Rp = 1/R1 + 1/R2 (makin kecil!)'],
        ['Jika 1 lampu putus', 'SEMUA lampu ikut padam!', 'Lampu di cabang lain TETAP MENYALA!'],
        ['Tegangan tiap lampu', 'Terbagi (nyala lebih redup)', 'SAMA dengan tegangan sumber (nyala terang penuh!)'],
      ]},
    ],
    activityTitle: 'Latihan: Rangkaian Seri & Paralel',
    questions: [
      { text: 'Tiga hambatan masing-masing 4 Ω, 6 Ω, dan 10 Ω dirangkai SERI. Hambatan penggantinya adalah...', opts: ['20 Ω', '2 Ω', '10 Ω', '240 Ω'], ans: 0, exp: 'Rs = 4 + 6 + 10 = 20 Ω.' },
      { text: 'Dua hambatan 6 Ω dan 3 Ω dirangkai PARALEL. Hambatan penggantinya (Rp) adalah...', opts: ['2 Ω', '9 Ω', '4,5 Ω', '18 Ω'], ans: 0, exp: '1/Rp = 1/6 + 1/3 = 3/6 → Rp = 6/3 = 2 Ω (atau rumus cepat 2 resistor: (6×3)/(6+3) = 18/9 = 2 Ω!).' },
      { text: 'Mengapa lampu dan stopkontak di kamar, ruang tamu, dan dapur rumah dipasang secara PARALEL?', opts: ['Agar setiap lampu dapat dinyalakan/dimatikan secara independen dan mendapat tegangan penuh 220 V yang sama', 'Agar saat 1 lampu dimatikan seluruh rumah gelap', 'Agar semua lampu redup', 'Supaya hambatan jadi tak hingga'], ans: 0, exp: 'Paralel menjamin kemandirian tiap cabang dan kestabilan tegangan.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-06', subSeq: 8,
    objectives: ['Siswa mampu menerapkan Hukum Ohm (V = I · R) untuk menghitung tegangan, kuat arus, atau hambatan rangkaian.'],
    materialTitle: 'Hukum Ohm (V = I · R)',
    blocks: [
      { type: 'formula', name: 'Segitiga Hukum Ohm', expression: 'V = I · R    |    I = V / R    |    R = V / I', note: 'Pada hambatan tetap R, kuat arus I berbanding lurus dengan tegangan V!' },
    ],
    activityTitle: 'Latihan: Hukum Ohm',
    questions: [
      { text: 'Sebuah resistor 15 Ω dihubungkan pada sumber tegangan 30 Volt. Kuat arus yang mengalir melaluinya adalah...', opts: ['2 A', '0,5 A', '450 A', '15 A'], ans: 0, exp: 'I = V / R = 30 / 15 = 2 Ampere.' },
      { text: 'Dua resistor 4 Ω dan 8 Ω dirangkai SERI pada baterai 24 Volt. Kuat arus total rangkaian tersebut adalah...', opts: ['2 A', '6 A', '3 A', '12 A'], ans: 0, exp: 'R_total = 4 + 8 = 12 Ω → I = 24 / 12 = 2 A.' },
      { text: 'Pada soal di atas (R1 = 4 Ω, R2 = 8 Ω seri, I = 2 A), tegangan di ujung-ujung resistor R2 (8 Ω) adalah...', opts: ['16 Volt', '8 Volt', '24 Volt', '4 Volt'], ans: 0, exp: 'V2 = I × R2 = 2 × 8 = 16 Volt (dan V1 = 8 V → 8 + 16 = 24 V!).' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-06', subSeq: 9,
    objectives: ['Siswa mampu menghitung daya listrik (P = V·I), energi listrik (W = P·t), dan rekening listrik dalam satuan kWh.'],
    materialTitle: 'Energi, Daya Listrik, dan Perhitungan Tarif kWh',
    blocks: [
      { type: 'formula', name: 'Rumus Daya, Energi, & Tarif PLN', expression: 'P = V · I = I²R = V²/R  (Watt)   |   W = P · t  (Joule atau kWh)', note: '1 kWh = 1.000 Watt × 1 jam! Untuk menghitung biaya listrik bulanan: kalikan (Total Watt × jam/hari × 30 hari) ÷ 1.000 = total kWh, lalu kalikan tarif per kWh!' },
      { type: 'worked_example', level: 'Menghitung Rekening Listrik', question: '4 lampu LED masing-masing 10 W menyala 10 jam/hari selama 30 hari. Jika tarif Rp1.500/kWh, berapa biayanya?', steps: ['Energi harian = 4 × 10 W × 10 jam = 400 Wh = 0,4 kWh/hari.', 'Sebulan (30 hari) = 0,4 × 30 = 12 kWh.', 'Biaya = 12 × Rp1.500 = Rp18.000!'], answer: 'Rp18.000' },
    ],
    activityTitle: 'Latihan: Energi & Daya Listrik',
    questions: [
      { text: 'Setrika listrik berdaya 300 Watt dipasang pada tegangan 220 V selama 2 jam. Energi listrik yang dipakai dalam satuan kWh adalah...', opts: ['0,6 kWh', '600 kWh', '6 kWh', '1,5 kWh'], ans: 0, exp: '300 W × 2 jam = 600 Wh = 0,6 kWh.' },
      { text: 'Sebuah alat elektronik bekerja pada tegangan 220 V dengan kuat arus 0,5 A. Daya listrik alat tersebut adalah...', opts: ['110 Watt', '440 Watt', '220 Watt', '55 Watt'], ans: 0, exp: 'P = V × I = 220 × 0,5 = 110 Watt.' },
      { text: 'Satu kipas angin 50 W menyala 8 jam setiap hari selama 30 hari. Jika tarif Rp1.500/kWh, biaya listrik kipas angin sebulan adalah...', opts: ['Rp18.000', 'Rp12.000', 'Rp24.000', 'Rp6.000'], ans: 0, exp: '(50 × 8 × 30) / 1.000 = 12 kWh → 12 × 1.500 = Rp18.000.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-06', subSeq: 10,
    objectives: ['Siswa mampu menerapkan aturan keselamatan penggunaan listrik rumah tangga (mencegah korsleting, beban berlebih, dan sengatan listrik).'],
    materialTitle: 'Keselamatan Penggunaan Listrik',
    blocks: [
      { type: 'visual_cards', title: '4 Aturan Emas Keselamatan Listrik!', cards: [
        { emoji: '💧', label: 'Tangan Harus Kering!', sub: 'Air keran/keringat mengandung mineral penghantar listrik — JANGAN sentuh colokan dengan tangan basah!' },
        { emoji: '🔌', label: 'Jangan Tumpuk Steker Berlebih', sub: 'Colokan bertumpuk memicu panas berlebih & kebakaran listrik!' },
        { emoji: '🛡️', label: 'Fungsi Sekring & MCB', sub: 'Memutus arus otomatis saat korsleting (hubungan singkat) atau beban lebih' },
        { emoji: '🔧', label: 'Ganti Kabel Terkelupas', sub: 'Kabel berisolasi rusak sangat rawan menyetrum dan memercikkan api' },
      ]},
    ],
    activityTitle: 'Latihan: Keselamatan Listrik',
    questions: [
      { text: 'Fungsi utama MCB (Miniature Circuit Breaker) atau sekring pada instalasi listrik rumah adalah...', opts: ['Memutus aliran listrik secara otomatis ketika terjadi korsleting atau kelebihan beban agar tidak terjadi kebakaran', 'Menambah tegangan listrik', 'Menyimpan listrik saat mati lampu', 'Membuat lampu lebih terang'], ans: 0, exp: 'MCB/sekring adalah pengaman utama instalasi listrik rumah.' },
      { text: 'Kebiasaan berbahaya di rumah yang paling sering memicu kebakaran akibat listrik adalah...', opts: ['Menumpuk terlalu banyak steker berdaya besar pada satu stopkontak cabang dan memakai kabel rusak/terkelupas', 'Mencabut charger setelah penuh', 'Memakai kabel berstandar SNI', 'Mematikan lampu saat tidur'], ans: 0, exp: 'Beban berlebih (overload) menimbulkan panas berlebih pada kabel/stopkontak.' },
      { text: 'Jika terjadi percikan api kebakaran pada panel listrik yang masih berarus, tindakan yang DILARANG KERAS adalah...', opts: ['Menyiramnya dengan air biasa (karena air menghantarkan listrik dan berisiko menyetrum penyiram!)', 'Mematikan sakelar MCB utama terlebih dahulu', 'Memakai APAR jenis CO2 / serbuk kering', 'Menjauh dan memanggil bantuan dewasa/damkar'], ans: 0, exp: 'Jangan pernah menyiram peralatan listrik beraliran dengan air!' },
    ],
  },

  // BAB 7: ENERGI LISTRIK RAMAH LINGKUNGAN (6 sub)
  {
    topicCode: 'IPA-SMP9-07', subSeq: 1,
    objectives: ['Siswa mampu membedakan sumber energi pembangkitan listrik tak terbarukan (fosil) dan terbarukan.'],
    materialTitle: 'Sumber Energi Pembangkitan Listrik',
    blocks: [
      { type: 'text', text: 'Sebagian besar pembangkit listrik dunia selama ini memakai sumber TAK TERBARUKAN (batu bara pada PLTU, minyak bumi pada PLTD, gas alam pada PLTG) yang cadangannya terbatas dan melepas emisi CO2. Transisi energi mendorong peralihan ke energi TERBARUKAN yang bersih dan tak habis dipakai!' },
    ],
    activityTitle: 'Latihan: Sumber Pembangkitan Listrik',
    questions: [
      { text: 'Manakah pasangan pembangkit listrik yang seluruhnya menggunakan sumber energi TAK TERBARUKAN (bahan bakar fosil)?', opts: ['PLTU batu bara, PLTD solar, dan PLTG gas alam', 'PLTS surya, PLTB angin, dan PLTA air', 'PLTP panas bumi dan PLTS', 'PLTA dan PLTB'], ans: 0, exp: 'Batu bara, minyak, dan gas alam berasal dari fosil jutaan tahun yang terbatas.' },
      { text: 'Komponen utama di hampir semua pembangkit listrik (PLTA, PLTB, PLTU, PLTP) yang mengubah putaran turbin menjadi energi listrik adalah...', opts: ['Generator', 'Panel surya', 'Baterai kering', 'Sekring'], ans: 0, exp: 'Putaran turbin memutar rotor generator (induksi Faraday) menghasilkan listrik.' },
      { text: 'Mengapa dunia perlu secara bertahap mengurangi ketergantungan pada PLTU batu bara?', opts: ['Karena cadangan batu bara terbatas dan pembakarannya menghasilkan emisi CO2 serta polutan udara tinggi', 'Karena batu bara terlalu ramah lingkungan', 'Karena batu bara tidak menghasilkan listrik', 'Karena air di bumi habis'], ans: 0, exp: 'Transisi energi menekan emisi karbon dan polusi udara.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-07', subSeq: 2,
    objectives: ['Siswa mampu mengidentifikasi ragam sumber energi terbarukan di Indonesia (surya, air, angin, panas bumi/geothermal, biomassa, arus laut).'],
    materialTitle: 'Potensi Sumber Energi Terbarukan di Indonesia',
    blocks: [
      { type: 'visual_cards', title: 'Kekayaan Energi Terbarukan Nusantara', cards: [
        { emoji: '☀️', label: 'Energi Surya (PLTS)', sub: 'Indonesia di khatulistiwa mendapat sinar Matahari melimpah sepanjang tahun!' },
        { emoji: '🌋', label: 'Panas Bumi (PLTP)', sub: 'Indonesia di Ring of Fire menyimpan salah satu cadangan geothermal terbesar dunia!' },
        { emoji: '💧', label: 'Air & Mikrohidro (PLTA)', sub: 'Sungai & bendungan mengalir deras memutar turbin bersih' },
        { emoji: '🌿', label: 'Biomassa & Biogas', sub: 'Limbah pertanian/kotoran ternak diolah jadi gas metana & bahan bakar bio (biodiesel)' },
      ]},
    ],
    activityTitle: 'Latihan: Sumber Energi Terbarukan',
    questions: [
      { text: 'Indonesia memiliki potensi energi PANAS BUMI (geothermal / PLTP) yang sangat besar karena kondisi geologis Indonesia...', opts: ['Berada pada jalur gunung api aktif (Ring of Fire)', 'Tertutup salju sepanjang tahun', 'Tidak memiliki sungai', 'Berada di kutub selatan'], ans: 0, exp: 'Aktivitas vulkanik menghasilkan panas bumi tinggi di bawah permukaan.' },
      { text: 'Pengolahan kotoran ternak sapi di pedesaan secara anaerob di dalam digester untuk menghasilkan gas memasak dan listrik disebut...', opts: ['Biogas (energi biomassa)', 'Batu bara', 'Nuklir', 'Energi pasang surut'], ans: 0, exp: 'Biogas memanfaatkan metana terbarukan sekaligus mengatasi limbah ternak.' },
      { text: 'Ciri utama sumber energi TERBARUKAN adalah...', opts: ['Dapat diperbarui alam secara terus-menerus dalam waktu singkat dan umumnya jauh lebih rendah emisi karbon', 'Sekali pakai langsung habis jutaan tahun', 'Selalu menghasilkan asap hitam pekat', 'Hanya ada di satu negara'], ans: 0, exp: 'Berkelanjutan dan lebih ramah lingkungan.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-07', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan prinsip kerja PLTS (efek fotovoltaik tanpa turbin), PLTB (turbin angin), dan PLTA (turbin air).'],
    materialTitle: 'Prinsip Kerja PLTS, PLTB, dan PLTA',
    blocks: [
      { type: 'table', title: 'Perbandingan Prinsip Kerja PLTS, PLTB, PLTA', headers: ['Pembangkit', 'Memakai Turbin & Generator?', 'Transformasi Energi'], rows: [
        ['PLTS (Surya)', 'TIDAK! Pakai sel fotovoltaik silikon langsung + inverter', 'Energi Cahaya → Listrik DC → (Inverter) → AC'],
        ['PLTB (Angin)', 'YA (baling-baling memutar generator)', 'Energi Kinetik Angin → Mekanik → Listrik'],
        ['PLTA (Air)', 'YA (air bendungan memutar turbin → generator)', 'Energi Potensial Air → Kinetik → Listrik'],
      ]},
    ],
    activityTitle: 'Latihan: Prinsip PLTS, PLTB, & PLTA',
    questions: [
      { text: 'Pembangkit listrik terbarukan yang langsung mengubah energi cahaya Matahari menjadi arus listrik searah (DC) tanpa memerlukan turbin berputar adalah...', opts: ['PLTS (Panel Surya / sel fotovoltaik)', 'PLTA', 'PLTB', 'PLTP'], ans: 0, exp: 'Sel surya silikon memanfaatkan efek fotovoltaik secara diam tanpa komponen bergerak.' },
      { text: 'Alat elektronik pada sistem PLTS rumah tangga yang mengubah listrik arus searah (DC) dari panel surya/baterai menjadi arus bolak-balik (AC) agar bisa menyalakan kulkas/TV disebut...', opts: ['Inverter', 'Turbin', 'Kompas', 'Termometer'], ans: 0, exp: 'Inverter mengonversi DC menjadi AC 220 V standar rumah.' },
      { text: 'Urutan perubahan energi pada PLTA (bendungan air) adalah...', opts: ['Energi potensial air → energi kinetik air & turbin → energi listrik', 'Energi kimia → cahaya', 'Energi angin → panas', 'Energi bunyi → listrik'], ans: 0, exp: 'Ketinggian air di waduk menyediakan energi potensial untuk memutar turbin.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-07', subSeq: 4,
    objectives: ['Siswa mampu membandingkan kelebihan dan keterbatasan (seperti sifat intermiten surya/angin dan kebutuhan baterai) berbagai sumber energi.'],
    materialTitle: 'Kelebihan dan Keterbatasan Sumber Energi',
    blocks: [
      { type: 'tip', text: 'Tantangan PLTS dan PLTB adalah sifat INTERMITEN (bergantung cuaca: tidak ada sinar Matahari saat malam/mendung; angin kadang lemah). Solusinya: memadukan beberapa sumber (bauran energi: surya + panas bumi/air yang stabil 24 jam) dan memakai teknologi baterai penyimpan energi!' },
    ],
    activityTitle: 'Latihan: Kelebihan & Keterbatasan Energi',
    questions: [
      { text: 'Keterbatasan utama PLTS (surya) dan PLTB (angin) yang dikenal sebagai sifat INTERMITEN berarti...', opts: ['Pasokan listriknya naik-turun bergantung cuaca (malam hari/mendung/angin tenang) sehingga butuh penyimpanan baterai atau cadangan stabil', 'Menghasilkan asap batu bara', 'Hanya bisa menyala 1 detik', 'Merusak lapisan ozon'], ans: 0, exp: 'Intermitensi diatasi lewat sistem baterai dan kombinasi pembangkit baseload seperti PLTP/PLTA.' },
      { text: 'Kelebihan PLTP (Panas Bumi) dibanding PLTS dan PLTB adalah...', opts: ['Dapat menghasilkan listrik secara stabil 24 jam nonstop tanpa terpengaruh cuaca mendung atau malam hari', 'Bisa dipasang di atap semua rumah', 'Tidak memerlukan pengeboran', 'Bisa dibawa di saku'], ans: 0, exp: 'Panas bumi menjadi sumber energi bersih baseload yang sangat andal.' },
      { text: 'Salah satu pertimbangan lingkungan saat membangun bendungan PLTA berukuran raksasa adalah...', opts: ['Membutuhkan lahan genangan luas dan perlu memperhatikan dampak perubahan ekosistem sungai serta permukiman warga', 'Mengeluarkan asap hitam tebal', 'Menghabiskan sinar Matahari', 'Menghasilkan limbah nuklir'], ans: 0, exp: 'Setiap teknologi perlu dikaji kelebihan serta dampak sosial-lingkungannya secara objektif.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-07', subSeq: 5,
    objectives: ['Siswa mampu menerapkan prinsip efisiensi dan penghematan energi listrik sehari-hari (lampu LED, desain ventilasi alami, label hemat energi).'],
    materialTitle: 'Efisiensi dan Penghematan Energi Listrik',
    blocks: [
      { type: 'text', text: 'Energi paling bersih dan paling murah adalah energi yang TIDAK kita boroskan! Langkah efisiensi: pakai lampu LED (lebih hemat ~75–80% dari pijar), atur suhu AC di 25–26°C, manfaatkan cahaya Matahari & ventilasi silang di siang hari, serta cabut perangkat standby!' },
    ],
    activityTitle: 'Latihan: Efisiensi & Hemat Energi',
    questions: [
      { text: 'Mengapa lampu LED jauh lebih efisien dibanding lampu pijar konvensional untuk tingkat terang yang sama?', opts: ['Lampu LED mengubah sebagian besar energi listrik menjadi cahaya dan sangat sedikit terbuang sebagai panas', 'Lampu LED tidak memakai listrik sama sekali', 'Lampu pijar tidak menghasilkan panas', 'Lampu LED lebih panas'], ans: 0, exp: 'Pada lampu pijar >80% energi justru terbuang menjadi panas.' },
      { text: 'Desain ruang kelas dengan jendela lebar berventilasi silang (cross ventilation) mendukung penghematan energi karena...', opts: ['Memaksimalkan pencahayaan alami dan sirkulasi udara sejuk sehingga mengurangi pemakaian lampu dan kipas/AC di siang hari', 'Membuat kelas gelap', 'Mengharuskan AC menyala 24 jam', 'Memperbesar tagihan listrik'], ans: 0, exp: 'Arsitektur hijau (green building) menekan kebutuhan listrik gedung.' },
      { text: 'Tanda bintang (1 hingga 5 bintang) pada label stiker warna kuning di kulkas atau AC baru di toko elektronik menunjukkan...', opts: ['Tingkat efisiensi hemat energi (makin banyak bintang, makin hemat listrik!)', 'Harga paling mahal', 'Warna cat bodi', 'Berat barang'], ans: 0, exp: 'Label Tanda Hemat Energi (LTHE) membantu konsumen memilih alat hemat listrik.' },
    ],
  },
  {
    topicCode: 'IPA-SMP9-07', subSeq: 6,
    objectives: ['Siswa mampu merancang gagasan pemanfaatan energi ramah lingkungan di sekolah dan rumah (lampu taman surya, mobil/motor listrik, gaya hidup hijau).'],
    materialTitle: 'Pemanfaatan Energi Ramah Lingkungan di Sekitar Kita',
    blocks: [
      { type: 'text', text: 'Energi ramah lingkungan kini makin dekat dengan kehidupan kita: lampu penerangan jalan & taman bertenaga surya, powerbank surya, panel surya atap sekolah/rumah, sepeda & kendaraan listrik bebas asap knalpot, serta pemanfaatan limbah organik untuk kompos/biogas!' },
    ],
    activityTitle: 'Latihan: Energi Ramah Lingkungan',
    questions: [
      { text: 'Contoh penerapan sederhana energi terbarukan yang paling mudah dipasang untuk menerangi halaman sekolah atau jalan desa di malam hari adalah...', opts: ['Lampu penerangan jalan tenaga surya (PJU-TS) lengkap dengan panel surya kecil dan baterai penyimpan', 'PLTU batu bara mini di halaman kelas', 'Generator diesel berisik di setiap tiang', 'Obor minyak tanah'], ans: 0, exp: 'PJU-TS menyerap sinar siang hari dan otomatis menyala malam hari tanpa kabel panjang.' },
      { text: 'Keunggulan kendaraan listrik (sepeda listrik, motor/mobil listrik) bagi kualitas udara perkotaan adalah...', opts: ['Tidak menghasilkan emisi gas buang knalpot (CO, NOx, asap) di jalan raya dan jauh lebih senyap', 'Membutuhkan bensin dua kali lipat', 'Menghasilkan asap lebih tebal', 'Tidak membutuhkan baterai'], ans: 0, exp: 'Nol emisi knalpot langsung memperbaiki kualitas udara kota — makin bersih bila listriknya dari energi terbarukan!' },
      { text: 'Peran nyata pelajar SMP dalam mendukung masa depan energi ramah lingkungan adalah...', opts: ['Membudayakan perilaku hemat energi sehari-hari, berinovasi di proyek sains energi bersih, dan mengedukasi lingkungan sekitar', 'Menyalakan semua alat listrik agar cepat habis', 'Menolak belajar IPA', 'Acuh tak acuh terhadap tagihan dan polusi'], ans: 0, exp: 'Gaya hidup hemat energi dimulai dari diri sendiri.' },
    ],
  },
];

upsertLessonsBatch('Kelas 9 SMP — IPA (7 Bab, 57 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

