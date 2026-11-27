import { upsertLessonsBatch } from './upsert-lessons.mjs';

const LESSONS = [
  // BAB 1: KONDISI GEOGRAFIS INDONESIA
  {
    topicCode: 'IPS-SMP7-01', subSeq: 1,
    objectives: ['Siswa mampu membedakan letak geografis, letak astronomis, dan letak geologis Indonesia secara tepat.'],
    materialTitle: 'Letak Geografis, Astronomis, dan Geologis Indonesia',
    blocks: [
      { type: 'table', title: '3 Sudut Pandang Letak Wilayah Indonesia', headers: ['Jenis Letak', 'Posisi Indonesia', 'Pengaruh Utamanya'], rows: [
        ['Letak Geografis', 'Antara Benua Asia & Australia; Samudra Hindia & Pasifik', 'Jalur perdagangan dunia strategis & akulturasi budaya'],
        ['Letak Astronomis', '6° LU – 11° LS dan 95° BT – 141° BT', 'Iklim tropis (2 musim) & 3 zona waktu (WIB, WITA, WIT)'],
        ['Letak Geologis', 'Pertemuan 3 lempeng tektonik (Eurasia, Indo-Australia, Pasifik) & 2 jalur pegunungan api', 'Tanah vulkanik sangat subur, kaya mineral, namun rawan gempa & gunung meletus'],
      ]},
    ],
    activityTitle: 'Latihan: Letak Geografis & Astronomis',
    questions: [
      { text: 'Letak suatu wilayah dilihat dari kenyataan posisinya di permukaan bumi terhadap benua dan samudra disebut letak...', opts: ['Astronomis', 'Geografis', 'Geologis', 'Ekonomis'], ans: 1, exp: 'Letak geografis merujuk posisi nyata terhadap wilayah sekitar.' },
      { text: 'Pertemuan tiga lempeng tektonik besar (Eurasia, Indo-Australia, Pasifik) di Indonesia menyebabkan...', opts: ['Banyak gunung berapi aktif, tanah subur, namun rawan gempa bumi', 'Indonesia bebas gempa', 'Musim dingin bersalju', 'Tidak ada pulau'], ans: 0, exp: 'Posisi geologis di Ring of Fire membawa kesuburan tanah sekaligus potensi bencana geologis.' },
      { text: 'Perbedaan waktu 2 jam antara Surabaya/Gresik (WIB) dan Jayapura (WIT) disebabkan oleh letak...', opts: ['Garis bujur (astronomis)', 'Garis lintang saja', 'Letak geologis', 'Ketinggian gunung'], ans: 0, exp: 'Rentang garis bujur 95° BT – 141° BT (±46°) dibagi 15°/jam menghasilkan 3 zona waktu.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-01', subSeq: 2,
    objectives: ['Siswa memahami luas daratan dan lautan Indonesia, batas wilayah darat/laut, serta konsep ZEE (200 mil laut).'],
    materialTitle: 'Letak, Luas, dan Batas Wilayah Indonesia',
    blocks: [
      { type: 'visual_cards', title: 'Fakta Luas & Batas NKRI', cards: [
        { emoji: '🌊', label: 'Negara Kepulauan & Maritim', sub: 'Luas lautan lebih besar (~2/3 wilayah) dengan >17.000 pulau' },
        { emoji: '🗺️', label: 'Batas Daratan Langsung', sub: 'Malaysia (Kalimantan), Papua Nugini (Papua), Timor Leste (NTT)' },
        { emoji: '⚓', label: 'ZEE (Zona Ekonomi Eksklusif)', sub: 'Batas 200 mil laut dari garis pangkal — hak pemanfaatan SDA laut Indonesia!' },
      ]},
    ],
    activityTitle: 'Latihan: Luas & Batas Wilayah',
    questions: [
      { text: 'Tiga negara yang berbatasan DARATAN langsung dengan wilayah Indonesia adalah...', opts: ['Malaysia, Papua Nugini, dan Timor Leste', 'Singapura, Brunei, dan Australia', 'Filipina, Vietnam, dan Thailand', 'Jepang, Korea, dan India'], ans: 0, exp: 'Ketiganya berbagi perbatasan darat di Pulau Kalimantan, Papua, dan Timor.' },
      { text: 'Zona laut selebar 200 mil laut dari garis pangkal pantai di mana Indonesia berhak memanfaatkan sumber daya lautnya disebut...', opts: ['ZEE (Zona Ekonomi Eksklusif)', 'Zona waktu', 'Zona merah', 'Batas darat'], ans: 0, exp: 'ZEE diatur dalam konvensi hukum laut PBB (UNCLOS 1982).' },
      { text: 'Di sebelah selatan, wilayah perairan Indonesia berbatasan langsung dengan...', opts: ['Samudra Hindia dan Benua Australia', 'Laut Cina Selatan', 'Samudra Arktik', 'Benua Eropa'], ans: 0, exp: 'Sebelah selatan Indonesia adalah Samudra Hindia dan Australia.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-01', subSeq: 3,
    objectives: ['Siswa mampu menganalisis karakteristik wilayah Indonesia (iklim muson tropis, flora-fauna Asiatis, Peralihan, Australis).'],
    materialTitle: 'Karakteristik Wilayah & Pembagian Flora-Fauna Indonesia',
    blocks: [
      { type: 'table', title: '3 Zona Fauna Indonesia (Garis Wallace & Weber)', headers: ['Zona Fauna', 'Wilayah', 'Contoh Satwa Khas'], rows: [
        ['Asiatis (Barat)', 'Sumatra, Jawa, Kalimantan, Bali', 'Harimau sumatra, badak bercula satu, orangutan, gajah'],
        ['Peralihan (Tengah)', 'Sulawesi, Maluku, Nusa Tenggara', 'Komodo, anoa, babirusa, burung maleo (endemik unik!)'],
        ['Australis (Timur)', 'Papua dan sekitarnya', 'Burung cenderawasih, kasuari, kanguru pohon'],
      ]},
    ],
    activityTitle: 'Latihan: Karakteristik Wilayah Indonesia',
    questions: [
      { text: 'Garis khayal yang memisahkan persebaran fauna Indonesia bagian Barat (Asiatis) dan bagian Tengah (Peralihan) adalah garis...', opts: ['Wallace', 'Khatulistiwa', 'Bujur 0°', 'Balik Utara'], ans: 0, exp: 'Garis Wallace memisahkan Barat–Tengah; Garis Weber memisahkan Tengah–Timur.' },
      { text: 'Komodo, anoa, dan babirusa merupakan satwa khas wilayah fauna Indonesia bagian...', opts: ['Barat (Asiatis)', 'Tengah (Peralihan)', 'Timur (Australis)', 'Kutub'], ans: 1, exp: 'Ketiganya adalah fauna endemik zona Peralihan.' },
      { text: 'Burung Cenderawasih dan Kanguru Pohon merupakan fauna khas Indonesia bagian...', opts: ['Timur (Australis)', 'Barat (Asiatis)', 'Tengah', 'Jawa'], ans: 0, exp: 'Papua memiliki kemiripan fauna dengan Benua Australia.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-01', subSeq: 4,
    objectives: ['Siswa mampu mengidentifikasi keragaman bentang alam Indonesia (pegunungan, dataran, karst, pantai, sungai) dan proses pembentukannya.'],
    materialTitle: 'Keragaman Bentang Alam Indonesia',
    blocks: [
      { type: 'visual_cards', title: 'Bentang Alam Utama Indonesia', cards: [
        { emoji: '⛰️', label: 'Pegunungan & Gunung Api', sub: 'Bukit Barisan (Sumatra), Semeru & Bromo (Jatim), Jayawijaya (Papua)' },
        { emoji: '🌾', label: 'Dataran Rendah & Aluvial', sub: 'Lembah Bengawan Solo & Brantas, Pantura Jawa (subur untuk pertanian & industri)' },
        { emoji: '🪨', label: 'Perbukitan Kapur (Karst)', sub: 'Jalur kapur utara Jawa (termasuk sebagian perbukitan kapur Gresik–Lamongan–Tuban)' },
      ]},
    ],
    activityTitle: 'Latihan: Keragaman Bentang Alam',
    questions: [
      { text: 'Tenaga pembentuk muka bumi yang berasal dari DALAM bumi (seperti tektonisme, vulkanisme, gempa) disebut tenaga...', opts: ['Endogen', 'Eksogen', 'Otot', 'Angin'], ans: 0, exp: 'Endogen = dari dalam bumi; Eksogen = dari luar (pelapukan, erosi, sedimentasi).' },
      { text: 'Pelapukan, pengikisan oleh air/angin (erosi), dan pengendapan lumpur sungai (sedimentasi) termasuk tenaga...', opts: ['Endogen', 'Eksogen', 'Vulkanik', 'Tektonik'], ans: 1, exp: 'Tenaga eksogen berasal dari permukaan/luar bumi.' },
      { text: 'Dataran rendah di sepanjang hilir sungai besar (seperti Bengawan Solo) umumnya sangat subur karena terbentuk dari...', opts: ['Endapan lumpur sungai (tanah aluvial)', 'Salju abadi', 'Pasir gurun', 'Batu es'], ans: 0, exp: 'Tanah aluvial berasal dari endapan mineral subur aliran sungai.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-01', subSeq: 5,
    objectives: ['Siswa mampu menganalisis pengaruh kondisi geografis Indonesia terhadap pola permukiman, transportasi, dan ekonomi masyarakat.'],
    materialTitle: 'Pengaruh Kondisi Geografis terhadap Masyarakat',
    blocks: [
      { type: 'table', title: 'Pola Adaptasi Permukiman & Ekonomi', headers: ['Wilayah', 'Pola Permukiman Umum', 'Aktivitas Utama'], rows: [
        ['Sepanjang Sungai / Jalan / Pantai', 'Memanjang (linier)', 'Nelayan, tambak, perdagangan, pelabuhan'],
        ['Dataran Rendah Subur / Perkotaan', 'Memusat / menyebar merata', 'Pertanian padi, industri, jasa, perkantoran'],
        ['Pegunungan / Perbukitan', 'Mengelompok di lembah atau dekat mata air', 'Perkebunan sayur/teh/kopi, peternakan'],
      ]},
    ],
    activityTitle: 'Latihan: Pengaruh Geografis',
    questions: [
      { text: 'Permukiman penduduk di sepanjang tepi sungai besar atau jalur jalan raya utama umumnya membentuk pola...', opts: ['Memanjang (linier)', 'Melingkar acak', 'Bintang', 'Terpisah di puncak'], ans: 0, exp: 'Warga membangun rumah mengikuti akses air dan transportasi jalan/sungai.' },
      { text: 'Keberadaan jalur Pantura (Pantai Utara Jawa) dan pelabuhan di Gresik–Surabaya mendorong pertumbuhan pesat sektor...', opts: ['Industri, logistik, perdagangan, dan perikanan', 'Perkebunan teh pegunungan', 'Wisata salju', 'Pertambangan emas hutan'], ans: 0, exp: 'Akses darat dan laut strategis mendukung industri dan niaga.' },
      { text: 'Karena berada di zona rawan gempa dan banjir musiman, masyarakat Indonesia perlu membangun budaya...', opts: ['Mitigasi dan kesiapsiagaan bencana sejak dini', 'Mengabaikan peringatan BMKG', 'Membangun rumah di bantaran sungai sempit', 'Menebang hutan hulu'], ans: 0, exp: 'Edukasi mitigasi bencana mengurangi risiko korban jiwa dan kerugian.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-01', subSeq: 6,
    objectives: ['Siswa mampu membaca seluruh komponen peta (judul, skala angka/garis, orientasi, simbol, legenda, inset, garis astronomis, sumber).'],
    materialTitle: 'Komponen Lengkap Peta dan Penggunaannya',
    blocks: [
      { type: 'list', title: '8 Komponen Wajib Peta yang Baik', items: ['1. Judul Peta, 2. Skala Peta (angka 1:100.000 & skala garis/grafis), 3. Orientasi (arah mata angin).', '4. Simbol (titik, garis, area, warna), 5. Legenda (keterangan simbol), 6. Garis Koordinat (lintang & bujur).', '7. Inset (peta kecil penunjuk posisi pada wilayah lebih luas), 8. Sumber & Tahun Pembuatan Peta!'] },
    ],
    activityTitle: 'Latihan: Komponen Peta',
    questions: [
      { text: 'Peta kecil yang disisipkan di dalam peta utama untuk menunjukkan lokasi daerah yang dipetakan terhadap wilayah lebih luas disebut...', opts: ['Inset', 'Legenda', 'Skala garis', 'Garis tepi'], ans: 0, exp: 'Inset membantu pembaca tahu di mana letak daerah tersebut secara makro.' },
      { text: 'Peta yang menggambarkan tema khusus tertentu saja — seperti Peta Persebaran Tambak di Gresik atau Peta Curah Hujan — disebut peta...', opts: ['Peta Tematik (Khusus)', 'Peta Umum', 'Globe', 'Atlas dunia'], ans: 0, exp: 'Peta umum menampilkan kenampakan umum; peta tematik fokus 1 tema khusus.' },
      { text: 'Mengapa pencantuman SUMBER dan TAHUN PEMBUATAN peta sangat penting?', opts: ['Menjamin keabsahan data dan mengetahui apakah informasi peta masih mutakhir', 'Sebagai hiasan pojok saja', 'Mengganti skala', 'Menentukan warna laut'], ans: 0, exp: 'Wilayah berkembang terus sehingga tahun peta penting untuk validitas.' },
    ],
  },

  // BAB 2: KONEKTIVITAS ANTARRUANG DAN SUMBER DAYA ALAM
  {
    topicCode: 'IPS-SMP7-02', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian ruang dan 3 kondisi terjadinya interaksi/konektivitas antarruang (saling melengkapi, kesempatan antara, kemudahan transfer).'],
    materialTitle: 'Ruang dan Konektivitas Antarruang',
    blocks: [
      { type: 'table', title: '3 Kondisi Pemicu Interaksi Antarruang', headers: ['Kondisi', 'Penjelasan', 'Contoh'], rows: [
        ['1. Saling Melengkapi (Complementarity)', 'Wilayah A surplus barang X, Wilayah B surplus barang Y', 'Pesisir Gresik surplus ikan bandeng ↔ Pegunungan Batu/Malang surplus sayur!'],
        ['2. Kesempatan Antara (Intervening Opportunity)', 'Muncul lokasi alternatif yang lebih dekat/murah', 'Pembeli beralih ke pasar baru yang jaraknya lebih dekat & ongkos murah'],
        ['3. Kemudahan Transfer (Transferability)', 'Kelancaran jalan, tol, pelabuhan, internet', 'Jalan aspal/tol lancar memudahkan distribusi hasil tambak & pabrik'],
      ]},
    ],
    activityTitle: 'Latihan: Konektivitas Antarruang',
    questions: [
      { text: 'Wilayah pesisir Gresik menghasilkan banyak ikan bandeng tetapi sedikit sayuran dataran tinggi; sementara wilayah pegunungan Malang menghasilkan banyak sayuran tetapi sedikit ikan laut. Interaksi perdagangan keduanya terjadi karena kondisi...', opts: ['Saling melengkapi (regional complementarity)', 'Konflik ruang', 'Isolasi wilayah', 'Kemacetan'], ans: 0, exp: 'Perbedaan surplus sumber daya mendorong pertukaran saling melengkapi.' },
      { text: 'Jika suatu jembatan utama penghubung dua kabupaten terputus, maka interaksi antarruang terhambat karena menurunnya faktor...', opts: ['Kemudahan transfer (transferability)', 'Saling melengkapi', 'Jumlah penduduk', 'Suhu udara'], ans: 0, exp: 'Transferability bergantung pada kelancaran infrastruktur dan biaya angkut.' },
      { text: 'Ruang dalam kajian IPS mencakup...', opts: ['Seluruh permukaan bumi (daratan, perairan, dan lapisan udara/tanah) tempat makhluk hidup beraktivitas', 'Hanya ruang kelas', 'Hanya daratan tanpa laut', 'Ruang hampa angkasa'], ans: 0, exp: 'Ruang adalah tempat terjadinya kehidupan dan interaksi manusia.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-02', subSeq: 2,
    objectives: ['Siswa mampu menganalisis hubungan ketergantungan antara desa dan kota serta antarprovinsi.'],
    materialTitle: 'Ketergantungan Antarwilayah (Desa–Kota)',
    blocks: [
      { type: 'visual_cards', title: 'Desa dan Kota Saling Membutuhkan!', cards: [
        { emoji: '🌾', label: 'Peran Desa bagi Kota', sub: 'Pemasok pangan (beras, sayur, ikan), bahan baku industri, tenaga kerja, dan paru-paru hijau' },
        { emoji: '🏙️', label: 'Peran Kota bagi Desa', sub: 'Penyedia barang industri (pupuk, alat tani, obat, elektronik), layanan RS/universitas, dan pasar hasil bumi' },
      ]},
    ],
    activityTitle: 'Latihan: Ketergantungan Antarwilayah',
    questions: [
      { text: 'Hubungan antara wilayah desa dan kota yang paling tepat adalah...', opts: ['Saling bergantung dan saling menguntungkan secara ekonomi maupun sosial', 'Kota tidak butuh desa sama sekali', 'Desa tidak butuh produk kota', 'Saling bermusuhan'], ans: 0, exp: 'Desa memasok pangan/bahan baku; kota menyediakan jasa, teknologi, dan pasar.' },
      { text: 'Perpindahan penduduk dari desa ke kota untuk mencari pekerjaan atau pendidikan disebut...', opts: ['Urbanisasi', 'Imigrasi', 'Reboisasi', 'Erosi'], ans: 0, exp: 'Urbanisasi = perpindahan penduduk dari desa menuju kota.' },
      { text: 'Konektivitas digital (internet dan toko daring) membantu UMKM desa karena...', opts: ['Produk desa bisa dipasarkan langsung ke pembeli di kota lain dengan cepat', 'Menutup pasar tradisional', 'Menghilangkan kebutuhan jalan raya', 'Membuat harga tak terjangkau'], ans: 0, exp: 'Teknologi memperluas jangkauan konektivitas ekonomi.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-02', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan persebaran potensi SDA Indonesia (hutan, tambang, kemaritiman).'],
    materialTitle: 'Persebaran Sumber Daya Alam Indonesia',
    blocks: [
      { type: 'table', title: '3 Potensi Besar SDA Indonesia', headers: ['Sektor SDA', 'Contoh Persebaran Utama'], rows: [
        ['Hutan', 'Hutan hujan tropis luas di Kalimantan, Sumatra, Papua; hutan jati di Jawa; mangrove di pesisir'],
        ['Tambang & Energi', 'Minyak/gas (Riau, Kaltim, Jatim/Cepu-Madura), batu bara (Kaltim, Sumsel), nikel (Sulawesi, Maluku), tembaga/emas (Papua), batu kapur (Jatim)'],
        ['Kemaritiman', 'Perikanan tangkap, tambak pesisir, terumbu karang, rumput laut, garam, pelayaran'],
      ]},
    ],
    activityTitle: 'Latihan: Persebaran SDA',
    questions: [
      { text: 'Pulau Sulawesi dan Maluku Utara sangat terkenal sebagai penghasil tambang ... yang penting untuk bahan baterai kendaraan listrik.', opts: ['Nikel', 'Salju', 'Kapur tulis saja', 'Es batu'], ans: 0, exp: 'Indonesia merupakan salah satu produsen nikel terbesar dunia (Sulawesi & Maluku Utara).' },
      { text: 'Hutan mangrove di pesisir pantai Indonesia memiliki 2 fungsi penting sekaligus, yaitu fungsi ekologis (mencegah abrasi & tempat hidup ikan) dan fungsi...', opts: ['Ekonomis (ekowisata, kayu terjaga, mendukung tambak alami)', 'Pencemaran', 'Polusi udara', 'Penggundulan'], ans: 0, exp: 'Mangrove bernilai ekologis sekaligus ekonomis bagi warga pesisir.' },
      { text: 'Mengapa persebaran sumber daya alam di Indonesia tidak sama di setiap daerah?', opts: ['Karena perbedaan kondisi geologis, jenis tanah, bentang alam, dan iklim setempat', 'Karena kebetulan semata', 'Karena jumlah sekolah', 'Karena zona waktu'], ans: 0, exp: 'Faktor geologi dan geografis menentukan potensi SDA tiap wilayah.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-02', subSeq: 4,
    objectives: ['Siswa mampu mengelompokkan SDA berdasarkan pemulihan (terbarukan/tak terbarukan) dan jenis (hayati/nonhayati) serta pengolahannya.'],
    materialTitle: 'Jenis dan Pemanfaatan Sumber Daya Alam',
    blocks: [
      { type: 'tip', text: 'Nilai tambah (hilirisasi) SDA: menjual bahan mentah (misal ikan segar atau biji nikel mentah) nilainya jauh lebih rendah daripada mengolahnya dulu menjadi produk jadi (otak-otak bandeng kemasan atau komponen baterai)!' },
    ],
    activityTitle: 'Latihan: Jenis & Pemanfaatan SDA',
    questions: [
      { text: 'Mengolah bahan mentah SDA di dalam negeri menjadi produk setengah jadi atau barang jadi sebelum dijual disebut...', opts: ['Hilirisasi (peningkatan nilai tambah)', 'Barter', 'Eksploitasi liar', 'Abrasi'], ans: 0, exp: 'Hilirisasi menciptakan lapangan kerja dan meningkatkan nilai jual SDA.' },
      { text: 'Batu bara, minyak bumi, dan gas alam termasuk SDA...', opts: ['Nonhayati tak terbarukan', 'Hayati terbarukan', 'Buatan', 'Bebas polusi'], ans: 0, exp: 'Bahan bakar fosil jumlahnya terbatas dan tidak dapat diperbarui dalam waktu singkat.' },
      { text: 'Manfaat terumbu karang sehat bagi perairan Indonesia adalah...', opts: ['Tempat memijah, berlindung, dan mencari makan bagi ribuan spesies ikan serta wisata bahari', 'Menghalangi perahu nelayan saja', 'Membuat air keruh', 'Mengurangi oksigen'], ans: 0, exp: 'Terumbu karang adalah "hutan hujan" di lautan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-02', subSeq: 5,
    objectives: ['Siswa mampu menganalisis hubungan ketersediaan SDA dengan profesi, industri, dan pertumbuhan wilayah.'],
    materialTitle: 'Hubungan SDA dengan Aktivitas Manusia',
    blocks: [
      { type: 'worked_example', level: 'Contoh Gresik Daratan', question: 'Bagaimana potensi alam Gresik (pesisir, tambak, akses pelabuhan, dan perbukitan kapur) membentuk aktivitas warganya?', steps: ['Pesisir & air payau → usaha tambak bandeng/udang & kuliner olahan ikan.', 'Akses pelabuhan & daratan datar dekat Surabaya → berkembang kawasan industri besar, logistik, dan perdagangan.'], answer: 'Potensi SDA & lokasi geografis membentuk struktur ekonomi dan lapangan kerja daerah!' },
    ],
    activityTitle: 'Latihan: SDA & Aktivitas Manusia',
    questions: [
      { text: 'Daerah yang kaya sumber daya batu kapur dan akses pelabuhan strategis cenderung berkembang pada sektor...', opts: ['Industri bahan bangunan (semen), logistik, dan perdagangan', 'Perkebunan teh', 'Peternakan rusa kutub', 'Wisata salju'], ans: 0, exp: 'Ketersediaan bahan baku + akses angkut mendorong pertumbuhan industri.' },
      { text: 'Jika suatu daerah terlalu bergantung pada 1 jenis SDA tak terbarukan tanpa mengembangkan SDM dan sektor lain, risikonya adalah...', opts: ['Ekonomi daerah terancam turun ketika SDA tersebut habis', 'Daerah makin kaya selamanya', 'Tidak ada risiko', 'SDM tidak perlu sekolah'], ans: 0, exp: 'Diversifikasi ekonomi dan kualitas SDM menjamin keberlanjutan daerah.' },
      { text: 'Peran ilmu pengetahuan dan teknologi (IPTEK) terhadap pemanfaatan SDA adalah...', opts: ['Mengolah SDA lebih efisien, bernilai tinggi, dan lebih ramah lingkungan', 'Membuat SDA cepat habis', 'Menghapus pekerjaan manusia', 'Merusak ekosistem'], ans: 0, exp: 'IPTEK tepat guna mendukung pemanfaatan SDA berkelanjutan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-02', subSeq: 6,
    objectives: ['Siswa mampu merumuskan prinsip pelestarian SDA (ekoefisiensi, konservasi, reklamasi pascatambang).'],
    materialTitle: 'Pelestarian Sumber Daya Alam (Ekoefisiensi)',
    blocks: [
      { type: 'text', text: 'EKOEFISIENSI adalah pemanfaatan SDA secara hemat/efisien dengan dampak kerusakan lingkungan seminimal mungkin — contohnya: reklamasi (penghijauan ulang) lahan bekas tambang, tebang pilih, dan pengolahan limbah industri (IPAL).' },
    ],
    activityTitle: 'Latihan: Pelestarian SDA',
    questions: [
      { text: 'Kegiatan menata, memperbaiki, dan menghijaukan kembali lahan bekas penambangan agar kembali bermanfaat disebut...', opts: ['Reklamasi pascatambang', 'Deforestasi', 'Polusi', 'Urbanisasi'], ans: 0, exp: 'Reklamasi memulihkan fungsi ekologis lahan bekas tambang.' },
      { text: 'Prinsip pemanfaatan SDA secara efisien dengan meminimalkan limbah dan kerusakan lingkungan disebut...', opts: ['Ekoefisiensi', 'Eksploitasi total', 'Monopoli', 'Konsumerisme'], ans: 0, exp: 'Ekoefisiensi menyeimbangkan efisiensi ekonomi dan ekologi.' },
      { text: 'Hutan lindung berperan sangat vital bagi wilayah di bawahnya terutama sebagai...', opts: ['Daerah resapan air, pencegah banjir/longsor, dan penghasil oksigen', 'Lahan parkir', 'Tambang batu', 'Tempat sampah'], ans: 0, exp: 'Hutan lindung menjaga tata air (hidrologi) dan kestabilan tanah.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-02', subSeq: 7,
    objectives: ['Siswa mampu menganalisis peran transportasi darat, laut, udara, dan perdagangan antarruang dalam pemerataan ekonomi.'],
    materialTitle: 'Transportasi, Distribusi, dan Perdagangan Antarruang',
    blocks: [
      { type: 'visual_cards', title: 'Peran Transportasi & Perdagangan Antarwilayah', cards: [
        { emoji: '🚢', label: 'Tol Laut & Pelabuhan', sub: 'Menurunkan biaya angkut logistik dari Jawa ke Indonesia Timur sehingga harga barang lebih terjangkau!' },
        { emoji: '🚚', label: 'Jalan Tol & Kereta Logistik', sub: 'Mempercepat pengiriman hasil pertanian, tambak, dan pabrik antarkota' },
        { emoji: '🛒', label: 'Perdagangan Antardaerah', sub: 'Memperluas pasar produk lokal dan memperkaya pilihan barang konsumen' },
      ]},
    ],
    activityTitle: 'Latihan: Transportasi & Perdagangan',
    questions: [
      { text: 'Tujuan utama program konektivitas pelayaran antarpulau (seperti Tol Laut) di Indonesia adalah...', opts: ['Memperlancar distribusi barang dan menekan kesenjangan harga antarwilayah Indonesia', 'Melarang kapal nelayan', 'Mengganti semua jalan darat', 'Membuat harga makin mahal'], ans: 0, exp: 'Logistik laut terjadwal menekan disparitas harga di wilayah terpencil.' },
      { text: 'Dampak positif perdagangan antarwilayah bagi produsen lokal di Gresik adalah...', opts: ['Pasar produk (seperti songkok, makanan olahan, hasil industri) meluas ke luar daerah bahkan ekspor', 'Produk tidak laku', 'Usaha tutup', 'Persaingan hilang'], ans: 0, exp: 'Akses pasar luas meningkatkan produksi dan pendapatan warga.' },
      { text: 'Jenis transportasi yang paling efisien untuk mengangkut barang bervolume sangat besar (semen, pupuk, peti kemas) antarpulau adalah...', opts: ['Kapal laut (angkutan maritim)', 'Sepeda motor', 'Becak', 'Helikopter'], ans: 0, exp: 'Kapal laut berkapasitas besar dengan biaya per ton paling rendah.' },
    ],
  },

  // BAB 3: AKTIVITAS MANUSIA DAN PERUBAHAN IKLIM
  {
    topicCode: 'IPS-SMP7-03', subSeq: 1,
    objectives: ['Siswa mampu membedakan cuaca (jangka pendek, area sempit) dan iklim (rata-rata jangka panjang ±30 tahun, area luas) beserta unsurnya.'],
    materialTitle: 'Perbedaan Cuaca dan Iklim',
    blocks: [
      { type: 'table', title: 'Cuaca vs Iklim', headers: ['Aspek', 'Cuaca', 'Iklim'], rows: [
        ['Waktu', 'Singkat (jam/hari), cepat berubah', 'Jangka panjang (rata-rata ±30 tahun), relatif stabil'],
        ['Wilayah', 'Sempit (kecamatan/kota)', 'Luas (negara/kawasan/benua)'],
        ['Unsur Utama', 'Suhu, curah hujan, angin, kelembapan, tekanan udara, penyinaran matahari', 'Sama (dihitung pola jangka panjangnya)'],
      ]},
      { type: 'tip', text: 'Lembaga resmi pemerintah Indonesia yang memantau cuaca, iklim, dan gempa bumi adalah BMKG!' },
    ],
    activityTitle: 'Latihan: Cuaca dan Iklim',
    questions: [
      { text: '"Hari ini pukul 14.00 di Kecamatan Kebomas Gresik turun hujan deras disertai angin." Pernyataan ini menggambarkan kondisi...', opts: ['Cuaca', 'Iklim', 'Geologi', 'Sejarah'], ans: 0, exp: 'Kondisi sesaat pada wilayah sempit disebut cuaca.' },
      { text: 'Perbedaan mendasar antara iklim dan cuaca terletak pada...', opts: ['Skala waktu (jangka panjang vs singkat) dan luas wilayah pengamatannya', 'Hanya suhu saja', 'Jenis awannya', 'Tidak ada perbedaan'], ans: 0, exp: 'Iklim = rata-rata pola cuaca dalam puluhan tahun di wilayah luas.' },
      { text: 'Lembaga resmi di Indonesia yang mengeluarkan prakiraan cuaca dan peringatan dini cuaca ekstrem adalah...', opts: ['BMKG', 'BPS', 'BPOM', 'KPU'], ans: 0, exp: 'BMKG = Badan Meteorologi, Klimatologi, dan Geofisika.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-03', subSeq: 2,
    objectives: ['Siswa mampu menjelaskan pengertian perubahan iklim global dan mekanisme efek rumah kaca.'],
    materialTitle: 'Pengenalan Perubahan Iklim & Efek Rumah Kaca',
    blocks: [
      { type: 'text', text: 'Efek rumah kaca ALAMI sebenarnya berguna menjaga Bumi hangat agar layak huni. Namun akibat lonjakan gas rumah kaca (CO₂, metana CH₄, N₂O) dari aktivitas manusia, panas matahari TERPERANGKAP BERLEBIHAN → memicu Pemanasan Global dan Perubahan Iklim jangka panjang!' },
    ],
    activityTitle: 'Latihan: Perubahan Iklim',
    questions: [
      { text: 'Peningkatan suhu rata-rata permukaan bumi secara global akibat penumpukan gas rumah kaca disebut...', opts: ['Pemanasan global (global warming)', 'Pendinginan global', 'Gerhana', 'Rotasi'], ans: 0, exp: 'Pemanasan global adalah pemicu utama perubahan iklim modern.' },
      { text: 'Gas rumah kaca utama yang meningkat pesat sejak Revolusi Industri akibat pembakaran bahan bakar fosil adalah...', opts: ['Karbon dioksida (CO₂)', 'Oksigen (O₂)', 'Argon', 'Neon'], ans: 0, exp: 'Emisi CO₂ dari batu bara, bensin, dan deforestasi mendominasi efek rumah kaca.' },
      { text: 'Apakah efek rumah kaca alami sebenarnya berbahaya bagi bumi?', opts: ['Tidak — efek rumah kaca alami justru menjaga bumi hangat (~15°C); yang berbahaya adalah PENINGKATAN berlebihan akibat ulah manusia', 'Ya, tanpa efek rumah kaca bumi akan sangat panas', 'Efek rumah kaca berasal dari gedung kaca saja', 'Tidak ada hubungannya dengan suhu'], ans: 0, exp: 'Tanpa efek rumah kaca alami, bumi akan beku (~−18°C).' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-03', subSeq: 3,
    objectives: ['Siswa mampu mengidentifikasi aktivitas manusia penyumbang emisi karbon terbesar (energi fosil, transportasi, deforestasi, sampah).'],
    materialTitle: 'Aktivitas Manusia Pemicu Perubahan Iklim',
    blocks: [
      { type: 'visual_cards', title: '4 Penyumbang Utama Emisi Gas Rumah Kaca', cards: [
        { emoji: '🏭', label: 'Pembangkit & Industri Fosil', sub: 'Pembakaran batu bara dan minyak melepas CO₂ dalam jumlah besar' },
        { emoji: '🚗', label: 'Transportasi Bermotor Padat', sub: 'Knapot jutaan kendaraan berbahan bakar bensin/solar' },
        { emoji: '🪓', label: 'Deforestasi (Alih Fungsi Hutan)', sub: 'Hilangnya pohon penyerap CO₂ dan pembakaran lahan' },
        { emoji: '🗑️', label: 'Tumpukan Sampah Organik di TPA', sub: 'Pembusukan tanpa oksigen menghasilkan gas METANA (CH₄) yang kuat menahan panas!' },
      ]},
    ],
    activityTitle: 'Latihan: Aktivitas Pemicu Perubahan Iklim',
    questions: [
      { text: 'Penebangan dan pembakaran hutan besar-besaran (deforestasi) memperparah perubahan iklim karena...', opts: ['Melepas karbon tersimpan sekaligus menghilangkan pohon penyerap CO₂', 'Menambah oksigen', 'Membuat hujan es', 'Menurunkan suhu bumi'], ans: 0, exp: 'Hutan adalah penyerap karbon (carbon sink) utama daratan.' },
      { text: 'Tumpukan sampah sisa makanan yang membusuk di TPA menghasilkan gas rumah kaca berupa...', opts: ['Metana (CH₄)', 'Oksigen', 'Helium', 'Ozon'], ans: 0, exp: 'Gas metana memiliki daya perangkap panas sangat tinggi.' },
      { text: 'Istilah "jejak karbon" (carbon footprint) menggambarkan...', opts: ['Total emisi gas rumah kaca yang dihasilkan dari aktivitas sehari-hari seseorang/produk', 'Bekas telapak sepatu di tanah', 'Jumlah pohon di hutan', 'Berat batu bara'], ans: 0, exp: 'Memahami jejak karbon membantu kita memilih gaya hidup rendah emisi.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-03', subSeq: 4,
    objectives: ['Siswa mampu mengamati dampak nyata perubahan iklim (gelombang panas, curah hujan ekstrem, kenaikan muka laut, kekeringan).'],
    materialTitle: 'Dampak Perubahan Iklim yang Dapat Diamati',
    blocks: [
      { type: 'list', title: 'Dampak Nyata Perubahan Iklim di Indonesia & Dunia', items: ['Suhu siang hari terasa makin terik dan gelombang panas lebih sering muncul.', 'Pergeseran jadwal musim hujan & kemarau membuat pola tanam petani sulit diprediksi.', 'Curah hujan ekstrem memicu banjir bandang; musim kemarau panjang (El Niño) memicu kekeringan.', 'Es kutub mencair → permukaan air laut naik → ancaman banjir ROB di wilayah pesisir rendah!'] },
    ],
    activityTitle: 'Latihan: Dampak Perubahan Iklim',
    questions: [
      { text: 'Banjir yang melanda pemukiman pesisir akibat meluapnya air laut saat pasang tinggi (diperparah kenaikan muka air laut) disebut banjir...', opts: ['Rob', 'Bandang gunung', 'Lahar', 'Salju'], ans: 0, exp: 'Banjir rob mengancam kawasan pesisir rendah termasuk pesisir utara Jawa.' },
      { text: 'Fenomena pemanasan suhu muka laut Samudra Pasifik yang sering memicu kemarau panjang dan kekeringan di Indonesia dikenal sebagai...', opts: ['El Niño', 'Rotasi', 'Gerhana', 'Pasang surut'], ans: 0, exp: 'El Niño memicu kemarau kering; La Niña memicu curah hujan berlebih.' },
      { text: 'Dampak perubahan iklim terhadap ekosistem terumbu karang di laut akibat air laut menghangat adalah...', opts: ['Pemutihan karang (coral bleaching)', 'Karang berubah jadi emas', 'Karang tumbuh di darat', 'Ikan tidak butuh air'], ans: 0, exp: 'Suhu laut terlalu hangat membuat karang memutih dan mati.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-03', subSeq: 5,
    objectives: ['Siswa mampu menganalisis pengaruh perubahan iklim terhadap petani, nelayan, kesehatan, dan ekonomi masyarakat.'],
    materialTitle: 'Pengaruh Perubahan Iklim pada Kehidupan Masyarakat',
    blocks: [
      { type: 'table', title: 'Dampak Sosial-Ekonomi Perubahan Iklim', headers: ['Sektor', 'Pengaruh Nyata'], rows: [
        ['Pertanian', 'Gagal panen akibat banjir/kekeringan → harga pangan naik'],
        ['Perikanan & Tambak', 'Gelombang tinggi menghambat nelayan melaut; suhu/salinitas ekstrem memengaruhi tambak ikan'],
        ['Kesehatan', 'Meningkatnya penyakit DBD (nyamuk cepat berkembang di suhu hangat), ISPA, dan dehidrasi'],
      ]},
    ],
    activityTitle: 'Latihan: Pengaruh pada Masyarakat',
    questions: [
      { text: 'Jika musim kemarau ekstrem menyebabkan banyak sawah gagal panen, dampak ekonomi langsung yang dirasakan masyarakat adalah...', opts: ['Pasokan pangan berkurang dan harga beras/sayur meningkat', 'Harga makanan jadi gratis', 'Tidak ada dampaknya', 'Semua orang jadi nelayan'], ans: 0, exp: 'Penurunan pasokan memicu kenaikan harga kebutuhan pokok.' },
      { text: 'Penyesuaian cara hidup masyarakat agar mampu bertahan menghadapi dampak perubahan iklim (misal menanam padi tahan kekeringan, meninggikan tanggul tambak) disebut...', opts: ['Adaptasi perubahan iklim', 'Polusi', 'Deforestasi', 'Barter'], ans: 0, exp: 'Mitigasi = mengurangi penyebab/emisi; Adaptasi = menyesuaikan diri terhadap dampak.' },
      { text: 'Gelombang tinggi dan angin kencang yang makin sering terjadi berdampak langsung pada keselamatan dan penghasilan...', opts: ['Nelayan tradisional', 'Penambang gunung', 'Pustakawan', 'Montir'], ans: 0, exp: 'Cuaca ekstrem laut memaksa nelayan menunda melaut.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-03', subSeq: 6,
    objectives: ['Siswa mampu mempraktikkan gaya hidup ramah lingkungan (rendah karbon) di sekolah dan rumah.'],
    materialTitle: 'Perilaku Ramah Lingkungan Sehari-Hari',
    blocks: [
      { type: 'visual_cards', title: '5 Aksi Pelajar SMP Peduli Iklim', cards: [
        { emoji: '🚲', label: 'Mobilitas Rendah Emisi', sub: 'Bersepeda, jalan kaki, atau angkutan umum' },
        { emoji: '🥗', label: 'Zero Food Waste', sub: 'Habiskan makanan — sisa makanan membusuk jadi gas metana!' },
        { emoji: '💡', label: 'Disiplin Hemat Energi', sub: 'Matikan lampu, AC, dan perangkat elektronik saat selesai dipakai' },
        { emoji: '🌳', label: 'Menanam & Merawat Pohon', sub: 'Ikut program Adiwiyata / penghijauan sekolah' },
        { emoji: '♻️', label: 'Pilah Sampah & 3R', sub: 'Kurangi plastik sekali pakai, dukung bank sampah' },
      ]},
    ],
    activityTitle: 'Latihan: Perilaku Ramah Lingkungan',
    questions: [
      { text: 'Mengapa menghabiskan makanan (tidak membuang sisa makanan) termasuk aksi nyata melawan perubahan iklim?', opts: ['Mengurangi timbunan sampah organik penghasil gas metana sekaligus menghemat energi produksi pangan', 'Supaya piring berat', 'Tidak ada hubungannya dengan iklim', 'Agar kantin tutup'], ans: 0, exp: 'Food waste adalah salah satu penyumbang emisi metana terbesar dunia.' },
      { text: 'Program Kementerian LHK yang mendorong sekolah berbudaya peduli dan berwawasan lingkungan disebut Sekolah...', opts: ['Adiwiyata', 'Komersial', 'Industri', 'Virtual'], ans: 0, exp: 'Sekolah Adiwiyata menanamkan perilaku ramah lingkungan warga sekolah.' },
      { text: 'Pilihan belanja yang paling rendah jejak karbon adalah...', opts: ['Membeli produk pangan lokal segar tanpa kemasan plastik berlapis', 'Membeli barang impor jauh sekali pakai', 'Membuang tas setiap hari', 'Membakar kemasan'], ans: 0, exp: 'Produk lokal memangkas emisi transportasi jarak jauh.' },
    ],
  },

  // BAB 4: KEGIATAN EKONOMI DAN PEMENUHAN KEBUTUHAN
  {
    topicCode: 'IPS-SMP7-04', subSeq: 1,
    objectives: ['Siswa mampu membedakan kebutuhan dan keinginan serta faktor yang memengaruhi perbedaan kebutuhan tiap orang.'],
    materialTitle: 'Kebutuhan, Keinginan, & Faktor Pembedanya',
    blocks: [
      { type: 'list', title: 'Faktor yang Memengaruhi Perbedaan Kebutuhan Manusia', items: ['Jenis kelamin & usia (kebutuhan bayi ≠ siswa SMP ≠ lansia).', 'Tingkat pendidikan & profesi (kebutuhan petani ≠ dokter ≠ programmer).', 'Lingkungan tempat tinggal (daerah dingin butuh jaket tebal; pesisir butuh pakaian katun).', 'Pendapatan, adat istiadat, dan kemajuan teknologi!'] },
    ],
    activityTitle: 'Latihan: Kebutuhan & Keinginan',
    questions: [
      { text: 'Seorang dokter membutuhkan stetoskop, sedangkan petani membutuhkan cangkul/traktor. Perbedaan kebutuhan ini dipengaruhi oleh faktor...', opts: ['Profesi / pekerjaan', 'Usia', 'Agama', 'Hobi saja'], ans: 0, exp: 'Jenis pekerjaan menentukan alat kebutuhan yang berbeda.' },
      { text: 'Jika kebutuhan primer tidak terpenuhi (misalnya pangan atau tempat tinggal), akibatnya adalah...', opts: ['Kelangsungan hidup manusia terganggu', 'Hidup makin mewah', 'Tidak berpengaruh', 'Mendapat hadiah'], ans: 0, exp: 'Kebutuhan primer bersifat mutlak bagi kelangsungan hidup.' },
      { text: 'Sifat kebutuhan manusia pada umumnya adalah...', opts: ['Sangat beragam dan terus berkembang (tidak terbatas)', 'Selalu sama seumur hidup', 'Hanya satu macam', 'Berhenti saat dewasa'], ans: 0, exp: 'Seiring kemajuan zaman, kebutuhan manusia terus bertambah.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-04', subSeq: 2,
    objectives: ['Siswa mampu mengklasifikasikan kebutuhan menurut intensitas, sifat, waktu, dan subjek, serta jenis alat pemuas (substitusi & komplementer).'],
    materialTitle: 'Klasifikasi Kebutuhan & Alat Pemuas',
    blocks: [
      { type: 'table', title: 'Jenis Barang Pemuas Kebutuhan (Sering Keluar di Ujian!)', headers: ['Jenis Barang', 'Penjelasan', 'Contoh'], rows: [
        ['Barang Substitusi', 'Saling MENGGANTIKAN', 'Nasi ↔ jagung/roti; pulpen ↔ pensil; gula pasir ↔ gula aren'],
        ['Barang Komplementer', 'Saling MELENGKAPI (dipakai bersama)', 'Motor & bensin; HP & charger; kompor & gas elpiji'],
        ['Barang Ekonomi vs Bebas', 'Ekonomi = butuh pengorbanan/uang; Bebas = melimpah gratis', 'Beras/air kemasan (ekonomi) vs sinar matahari/udara terbuka (bebas)'],
      ]},
    ],
    activityTitle: 'Latihan: Jenis Kebutuhan & Barang',
    questions: [
      { text: 'Sepeda motor dengan bensin, serta sikat gigi dengan pasta gigi, merupakan contoh barang...', opts: ['Komplementer (saling melengkapi)', 'Substitusi (saling menggantikan)', 'Barang bebas', 'Barang mewah'], ans: 0, exp: 'Keduanya digunakan bersama agar berfungsi optimal.' },
      { text: 'Ketika harga beras naik, sebagian warga menggantinya dengan jagung atau ubi. Beras dan jagung adalah barang...', opts: ['Substitusi', 'Komplementer', 'Mewah', 'Ilith'], ans: 0, exp: 'Substitusi = barang pengganti dengan fungsi sejenis.' },
      { text: 'Tabungan pendidikan untuk kuliah nanti atau payung yang disiapkan sebelum hujan termasuk kebutuhan menurut WAKTU berjenis...', opts: ['Kebutuhan masa yang akan datang', 'Kebutuhan sekarang/mendesak', 'Kebutuhan rohani', 'Kebutuhan kolektif'], ans: 0, exp: 'Disiapkan hari ini untuk dimanfaatkan di masa depan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-04', subSeq: 3,
    objectives: ['Siswa mampu menjelaskan konsep KELANGKAAN (scarcity) sebagai inti masalah ekonomi beserta penyebab dan solusinya.'],
    materialTitle: 'Kelangkaan Sumber Daya (Inti Masalah Ekonomi)',
    blocks: [
      { type: 'formula', name: 'Inti Masalah Ekonomi: KELANGKAAN', expression: 'Kebutuhan Manusia (Tidak Terbatas)  >  Alat Pemuas / Sumber Daya (Terbatas)', note: 'Penyebab kelangkaan: keterbatasan SDA, kerusakan alam ulah manusia, pertumbuhan penduduk cepat, keterbatasan teknologi/modal, bencana.' },
    ],
    activityTitle: 'Latihan: Kelangkaan Sumber Daya',
    questions: [
      { text: 'Kondisi ketidakseimbangan antara kebutuhan manusia yang tidak terbatas dengan alat pemuas kebutuhan yang terbatas disebut...', opts: ['Kelangkaan (scarcity)', 'Produksi', 'Inflasi', 'Surplus'], ans: 0, exp: 'Kelangkaan adalah pokok persoalan ilmu ekonomi.' },
      { text: 'Cara paling tepat mengatasi kelangkaan energi minyak bumi di masa depan adalah...', opts: ['Menghemat energi dan mengembangkan energi alternatif terbarukan', 'Membakar bensin sebanyak mungkin', 'Menghentikan seluruh sekolah', 'Menimbun BBM'], ans: 0, exp: 'Efisiensi dan inovasi substitusi energi mengatasi kelangkaan.' },
      { text: 'Tindakan menimbun bahan pokok saat pasokan tipis dilarang karena...', opts: ['Memperparah kelangkaan buatan dan melambungkan harga bagi masyarakat', 'Membuat harga turun', 'Membantu warga miskin', 'Meningkatkan produksi'], ans: 0, exp: 'Penimbunan merugikan konsumen dan melanggar hukum.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-04', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan prinsip ekonomi, motif ekonomi, dan menyusun skala prioritas serta biaya peluang (opportunity cost) sederhana.'],
    materialTitle: 'Skala Prioritas, Prinsip Ekonomi, & Biaya Peluang',
    blocks: [
      { type: 'text', text: 'PRINSIP EKONOMI adalah berusaha memperoleh hasil tertentu dengan pengorbanan seminimal mungkin, atau dengan pengorbanan tertentu memperoleh hasil maksimal. Saat kamu memilih satu pilihan terbaik dan mengorbankan pilihan terbaik lainnya, nilai pilihan yang dikorbankan disebut BIAYA PELUANG (Opportunity Cost)!' },
    ],
    activityTitle: 'Latihan: Skala Prioritas & Biaya Peluang',
    questions: [
      { text: 'Alya punya uang Rp50.000: bisa untuk beli kamus (pilihan 1) atau beli tas mainan (pilihan 2). Jika Alya memilih beli kamus, maka kesempatan memiliki tas mainan yang tidak jadi dibeli disebut...', opts: ['Biaya peluang (opportunity cost)', 'Keuntungan', 'Pajak', 'Subsidi'], ans: 0, exp: 'Biaya peluang adalah nilai alternatif terbaik yang dikorbankan saat menentukan pilihan.' },
      { text: 'Contoh penerapan PRINSIP EKONOMI bagi seorang pelajar adalah...', opts: ['Membandingkan kualitas & harga buku di beberapa toko lalu membeli yang terbaik sesuai anggaran', 'Membeli barang termahal tanpa mengecek kualitas', 'Jajan melebihi uang saku', 'Tidak pernah menabung'], ans: 0, exp: 'Cermat memilih kualitas terbaik sesuai pengorbanan wajar.' },
      { text: 'Dorongan atau alasan yang menggerakkan seseorang melakukan kegiatan ekonomi (misal mencari laba, memenuhi kebutuhan, atau membantu sesama/motif sosial) disebut...', opts: ['Motif ekonomi', 'Kelangkaan', 'Distribusi', 'Konsumerisme'], ans: 0, exp: 'Motif ekonomi melatarbelakangi tindakan ekonomi.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-04', subSeq: 5,
    objectives: ['Siswa mampu menganalisis keterkaitan produksi (nilai guna bentuk, tempat, waktu, milik), distribusi (langsung/tak langsung), dan konsumsi.'],
    materialTitle: 'Produksi, Distribusi, dan Konsumsi',
    blocks: [
      { type: 'table', title: '4 Nilai Guna Barang dalam Produksi & Distribusi', headers: ['Nilai Guna (Utility)', 'Artinya', 'Contoh'], rows: [
        ['Nilai Guna Bentuk (Form)', 'Berubah bentuk jadi lebih berguna', 'Bandeng segar → otak-otak bandeng; kayu → meja'],
        ['Nilai Guna Tempat (Place)', 'Dipindah ke tempat yang membutuhkan', 'Pasir sungai diangkut ke proyek bangunan'],
        ['Nilai Guna Waktu (Time)', 'Dipakai tepat pada waktunya', 'Payung saat musim hujan; tabungan saat butuh'],
        ['Nilai Guna Kepemilikan (Ownership)', 'Berpindah ke pemilik yang tepat', 'Buku di toko dibeli oleh siswa untuk belajar'],
      ]},
    ],
    activityTitle: 'Latihan: Produksi, Distribusi, Konsumsi',
    questions: [
      { text: 'Kayu gelondongan diolah tukang kayu menjadi meja dan kursi belajar. Kegiatan ini meningkatkan nilai guna...', opts: ['Bentuk (form utility)', 'Tempat', 'Waktu', 'Cuaca'], ans: 0, exp: 'Perubahan bentuk bahan mentah menjadi perabot menaikkan form utility.' },
      { text: 'Petani sayur menjual langsung hasil panennya di kebun kepada pembeli tanpa perantara disebut distribusi...', opts: ['Langsung', 'Semi langsung', 'Tidak langsung', 'Ekspor'], ans: 0, exp: 'Produsen → Konsumen tanpa perantara = distribusi langsung.' },
      { text: 'Faktor utama yang memengaruhi besar kecilnya tingkat konsumsi rumah tangga adalah...', opts: ['Tingkat pendapatan, harga barang, dan jumlah anggota keluarga', 'Warna rumah', 'Nama jalan', 'Arah angin'], ans: 0, exp: 'Pendapatan menentukan daya beli konsumen.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-04', subSeq: 6,
    objectives: ['Siswa mampu mengidentifikasi 4 pelaku kegiatan ekonomi (RTK, RTP, Pemerintah, Masyarakat Luar Negeri).'],
    materialTitle: 'Empat Pelaku Kegiatan Ekonomi',
    blocks: [
      { type: 'visual_cards', title: '4 Pelaku Ekonomi Utama', cards: [
        { emoji: '🏠', label: 'Rumah Tangga Konsumen (RTK)', sub: 'Pemakai barang/jasa sekaligus pemilik faktor produksi (tenaga kerja, tanah, modal)' },
        { emoji: '🏭', label: 'Rumah Tangga Produsen (RTP)', sub: 'Perusahaan/UMKM penghasil barang & jasa yang membayar upah/sewa ke RTK' },
        { emoji: '🏛️', label: 'Pemerintah (RTN)', sub: 'Regulator (pembuat aturan), produsen (BUMN), dan konsumen (belanja negara)' },
        { emoji: '🌐', label: 'Masyarakat Luar Negeri', sub: 'Mitra kegiatan ekspor, impor, dan kerja sama investasi internasional' },
      ]},
    ],
    activityTitle: 'Latihan: Pelaku Ekonomi',
    questions: [
      { text: 'Kegiatan menjual barang produksi dalam negeri (seperti udang, kopi, kerajinan) ke luar negeri disebut...', opts: ['Ekspor', 'Impor', 'Barter', 'Konsumsi'], ans: 0, exp: 'Ekspor = menjual ke luar negeri; Impor = membeli dari luar negeri.' },
      { text: 'Rumah Tangga Konsumen (RTK) memperoleh pendapatan berupa upah/gaji, sewa, bunga, dan laba karena berperan sebagai...', opts: ['Pemilik faktor produksi (tenaga kerja, lahan, modal)', 'Pembuat undang-undang', 'Penarik pajak', 'Pencetak uang'], ans: 0, exp: 'RTK menyediakan faktor produksi yang disewa/dibayar oleh perusahaan (RTP).' },
      { text: 'BUMN seperti PLN dan PT Kereta Api Indonesia menunjukkan peran pemerintah sebagai...', opts: ['Produsen penyedia layanan publik strategis', 'Konsumen saja', 'Pihak luar negeri', 'Makelar'], ans: 0, exp: 'Pemerintah mengelola cabang produksi penting bagi hajat hidup orang banyak.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-04', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan peran pajak, subsidi, dan regulasi pemerintah dalam menjaga kestabilan ekonomi bersama rumah tangga dan perusahaan.'],
    materialTitle: 'Peran Rumah Tangga, Perusahaan, dan Pemerintah',
    blocks: [
      { type: 'tip', text: 'Pemerintah memungut PAJAK dari masyarakat & perusahaan sesuai undang-undang, lalu mengembalikannya dalam bentuk FASILITAS PUBLIK (sekolah negeri, jalan raya, puskesmas, subsidi pupuk/listrik, dan bantuan sosial)!' },
    ],
    activityTitle: 'Latihan: Peran RTK, RTP, & Pemerintah',
    questions: [
      { text: 'Sumber penerimaan utama negara yang digunakan untuk membangun sekolah, jalan raya, dan rumah sakit umum adalah...', opts: ['Pajak', 'Barter', 'Hadiah lomba', 'Utang teman'], ans: 0, exp: 'Pajak adalah tulang punggung pembiayaan APBN dan fasilitas publik.' },
      { text: 'Ketika pemerintah menetapkan aturan upah minimum dan melarang penimbunan sembako, pemerintah menjalankan peran sebagai...', opts: ['Regulator (pengatur dan pengawas perekonomian)', 'Konsumen biasa', 'Importir', 'Pedagang eceran'], ans: 0, exp: 'Regulasi melindungi konsumen, pekerja, dan iklim usaha yang adil.' },
      { text: 'Hubungan saling menguntungkan antara perusahaan (RTP) dan rumah tangga (RTK) terlihat dari...', opts: ['RTP membayar gaji pekerja (RTK), lalu RTK membelanjakan uangnya membeli produk RTP', 'Keduanya tidak saling berhubungan', 'RTP bekerja tanpa pekerja', 'RTK tidak butuh barang'], ans: 0, exp: 'Arus melingkar kegiatan ekonomi (circular flow) menggerakkan perekonomian.' },
    ],
  },

  // BAB 5: INTERAKSI SOSIAL DAN LEMBAGA SOSIAL
  {
    topicCode: 'IPS-SMP7-05', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian dan ciri-ciri interaksi sosial (individu–individu, individu–kelompok, kelompok–kelompok).'],
    materialTitle: 'Pengertian dan Ciri Interaksi Sosial',
    blocks: [
      { type: 'text', text: 'Interaksi sosial adalah hubungan timbal balik (aksi dan reaksi) antarindividu, antara individu dengan kelompok, maupun antarkelompok. Ciri utamanya: pelaku ≥ 2 orang, ada komunikasi pakai simbol/bahasa, ada dimensi waktu, dan ada tujuan tertentu.' },
    ],
    activityTitle: 'Latihan: Pengertian Interaksi Sosial',
    questions: [
      { text: 'Guru mengajar di depan kelas yang berisi 32 siswa merupakan contoh interaksi sosial antara...', opts: ['Individu dengan individu', 'Individu dengan kelompok', 'Kelompok dengan kelompok', 'Benda dengan benda'], ans: 1, exp: 'Satu guru (individu) berinteraksi dengan sekelas siswa (kelompok).' },
      { text: 'Pertandingan persahabatan futsal antara tim SMP A dan tim SMP B merupakan interaksi...', opts: ['Individu dengan individu', 'Individu dengan kelompok', 'Kelompok dengan kelompok', 'Searah'], ans: 2, exp: 'Dua tim (dua kelompok) saling berinteraksi.' },
      { text: 'Seseorang membaca buku sendirian di kamar tanpa berkomunikasi dengan orang lain BUKAN termasuk interaksi sosial karena...', opts: ['Tidak terjadi hubungan timbal balik antarmanusia (pelakunya hanya 1 orang)', 'Membaca itu membosankan', 'Buku tidak punya kata', 'Di dalam kamar'], ans: 0, exp: 'Interaksi sosial mensyaratkan minimal 2 pihak yang saling merespons.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-05', subSeq: 2,
    objectives: ['Siswa mampu membedakan 2 syarat mutlak terjadinya interaksi sosial: kontak sosial (primer/sekunder) dan komunikasi.'],
    materialTitle: 'Syarat Terjadinya Interaksi Sosial',
    blocks: [
      { type: 'table', title: '2 Syarat Mutlak Interaksi Sosial', headers: ['Syarat', 'Penjelasan', 'Contoh'], rows: [
        ['1. Kontak Sosial', 'Hubungan langsung tatap muka (PRIMER) atau lewat perantara HP/surat (SEKUNDER)', 'Bersalaman/bertemu langsung (primer); chat/video call (sekunder)'],
        ['2. Komunikasi', 'Proses penyampaian pesan dan pemberian MAKNA serta respons timbal balik', 'Pertanyaan dijawab sehingga kedua pihak saling paham'],
      ]},
    ],
    activityTitle: 'Latihan: Syarat Interaksi Sosial',
    questions: [
      { text: 'Dua syarat MUTLAK terjadinya interaksi sosial adalah...', opts: ['Kontak sosial dan komunikasi', 'Uang dan pasar', 'Kerja sama dan konflik', 'Sekolah dan rumah'], ans: 0, exp: 'Tanpa kontak sosial dan komunikasi, interaksi sosial belum terjadi.' },
      { text: 'Alya menelepon neneknya yang tinggal di luar kota menggunakan ponsel. Ini merupakan contoh kontak sosial...', opts: ['Sekunder (melalui media perantara)', 'Primer (tatap muka langsung)', 'Negatif', 'Fisik langsung'], ans: 0, exp: 'Kontak lewat media komunikasi (telepon/chat/surat) adalah kontak sekunder.' },
      { text: 'Jika seseorang menyapa orang asing dengan bahasa yang sama sekali tidak dimengerti dan orang asing itu tidak merespons, maka interaksi belum sempurna karena belum terjadi...', opts: ['Komunikasi (pemahaman makna pesan)', 'Kontak mata', 'Jarak fisik', 'Pertemuan'], ans: 0, exp: 'Komunikasi menuntut adanya pemahaman pesan dan tanggapan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-05', subSeq: 3,
    objectives: ['Siswa mampu membedakan bentuk interaksi sosial asosiatif (mengarah persatuan) dan disosiatif (mengarah perpecahan/persaingan).'],
    materialTitle: 'Bentuk Interaksi: Asosiatif dan Disosiatif',
    blocks: [
      { type: 'table', title: 'Asosiatif (Persatuan) vs Disosiatif (Persaingan/Konflik)', headers: ['Kelompok', 'Bentuknya', 'Contoh'], rows: [
        ['Asosiatif (Positif)', 'Kerja sama, Akomodasi (penyelesaian konflik/mediasi), Asimilasi & Akulturasi budaya', 'Gotong royong; guru memediasi 2 siswa berselisih; arsitektur masjid berpadu budaya lokal'],
        ['Disosiatif', 'Kompetisi (persaingan), Kontravensi (sikap tidak suka tersembunyi), Konflik (pertentangan terbuka)', 'Lomba cerdas cermat (kompetisi sehat); menyebar gosip (kontravensi); tawuran (konflik)'],
      ]},
    ],
    activityTitle: 'Latihan: Asosiatif & Disosiatif',
    questions: [
      { text: 'Upaya meredakan dan menyelesaikan pertentangan antara dua pihak melalui pihak ketiga yang netral (mediasi/arbitrase) termasuk proses asosiatif berjenis...', opts: ['Akomodasi', 'Kompetisi', 'Kontravensi', 'Konflik'], ans: 0, exp: 'Akomodasi adalah cara menyelesaikan konflik agar kembali rukun.' },
      { text: 'Perpaduan dua unsur budaya berbeda yang menghasilkan budaya baru TANPA menghilangkan ciri khas budaya aslinya (mis. bangunan masjid beratap tumpang Jawa) disebut...', opts: ['Akulturasi', 'Konflik', 'Kontravensi', 'Kompetisi'], ans: 0, exp: 'Akulturasi memadukan budaya tanpa menghapus jati diri lama; Asimilasi melebur total jadi baru.' },
      { text: 'Persaingan meraih juara olimpiade IPA secara jujur dan sportif termasuk interaksi disosiatif yang bersifat positif yaitu...', opts: ['Kompetisi', 'Kontravensi', 'Konflik kekerasan', 'Akomodasi'], ans: 0, exp: 'Kompetisi sehat memicu prestasi tanpa merugikan pihak lain.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-05', subSeq: 4,
    objectives: ['Siswa mampu menjelaskan proses sosialisasi (belajar nilai & norma) dan 4 agen sosialisasi utama (keluarga, sekolah, teman sebaya, media).'],
    materialTitle: 'Sosialisasi dan Agen Sosialisasi',
    blocks: [
      { type: 'visual_cards', title: '4 Agen Sosialisasi Pembentuk Kepribadian', cards: [
        { emoji: '🏠', label: '1. Keluarga (Primer)', sub: 'Agen PERTAMA tempat anak belajar bahasa, sopan santun, kasih sayang, dan agama' },
        { emoji: '🏫', label: '2. Sekolah', sub: 'Melatih disiplin, ilmu pengetahuan, kemandirian, dan kerja sama' },
        { emoji: '👫', label: '3. Teman Sebaya (Peer Group)', sub: 'Belajar kesetaraan, solidaritas — pilih pergaulan yang positif!' },
        { emoji: '📱', label: '4. Media Massa & Internet', sub: 'Sumber informasi luas — perlu literasi digital agar tidak meniru hal negatif!' },
      ]},
    ],
    activityTitle: 'Latihan: Sosialisasi',
    questions: [
      { text: 'Proses seumur hidup di mana individu mempelajari nilai, norma, budaya, dan peran sosial di masyarakat disebut...', opts: ['Sosialisasi', 'Urbanisasi', 'Kompetisi', 'Produksi'], ans: 0, exp: 'Sosialisasi menanamkan tata nilai masyarakat ke dalam diri individu.' },
      { text: 'Agen sosialisasi PRIMER (yang pertama dan paling mendasar) bagi seorang anak adalah...', opts: ['Keluarga', 'Media sosial', 'Pasar', 'Kantor'], ans: 0, exp: 'Keluarga menanamkan fondasi kepribadian sejak lahir.' },
      { text: 'Peran penting orang tua dan siswa sendiri terhadap agen sosialisasi MEDIA DIGITAL (internet/media sosial) adalah...', opts: ['Memilih konten edukatif dan menyaring informasi secara kritis', 'Meniru semua tren viral tanpa berpikir', 'Bermain gawai 15 jam sehari', 'Menyebar ujaran kebencian'], ans: 0, exp: 'Literasi digital memaksimalkan sisi positif media.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-05', subSeq: 5,
    objectives: ['Siswa mampu membedakan nilai sosial dan 4 jenis norma (agama, kesusilaan, kesopanan, hukum) beserta tingkat sanksinya.'],
    materialTitle: 'Nilai dan 4 Jenis Norma Sosial',
    blocks: [
      { type: 'table', title: '4 Jenis Norma & Sanksinya', headers: ['Norma', 'Sumbernya', 'Contoh Sanksi Pelanggaran'], rows: [
        ['Norma Agama', 'Wahyu / ajaran Tuhan Yang Maha Esa', 'Dosa / sanksi moral-spiritual di akhirat'],
        ['Norma Kesusilaan', 'Hati nurani manusia (jujur, tidak bohong)', 'Rasa bersalah, menyesal, gelisah'],
        ['Norma Kesopanan', 'Pergaulan/adat masyarakat (salim, bahasa santun)', 'Teguran, cibiran, dikucilkan'],
        ['Norma Hukum', 'Lembaga negara (UU, aturan lalu lintas)', 'TEGAS & MEMAKSA: tilang, denda, penjara!'],
      ]},
    ],
    activityTitle: 'Latihan: Nilai dan Norma',
    questions: [
      { text: 'Norma yang dibuat secara tertulis oleh lembaga negara yang berwenang dan memiliki sanksi paling TEGAS serta MEMAKSA (denda/penjara) adalah...', opts: ['Norma kesopanan', 'Norma kesusilaan', 'Norma hukum', 'Kebiasaan'], ans: 2, exp: 'Norma hukum bersifat mengikat tegas bagi seluruh warga negara.' },
      { text: 'Menyapa guru dengan ramah dan makan menggunakan tangan kanan termasuk penerapan norma...', opts: ['Kesopanan', 'Hukum pidana', 'Ekonomi', 'Politik'], ans: 0, exp: 'Tata krama pergaulan masyarakat adalah norma kesopanan.' },
      { text: 'Sanksi pelanggaran norma KESUSILAAN (seperti berbohong atau tidak jujur saat ulangan) terutama dirasakan dari dalam diri berupa...', opts: ['Penyesalan dan kegelisahan hati nurani', 'Tilang polisi', 'Denda pajak', 'Penjara 10 tahun'], ans: 0, exp: 'Norma kesusilaan bersumber dari hati nurani manusia.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-05', subSeq: 6,
    objectives: ['Siswa mampu mengenal jenis kelompok sosial (primer vs sekunder; formal vs informal) dan manfaatnya.'],
    materialTitle: 'Kelompok Sosial di Masyarakat',
    blocks: [
      { type: 'table', title: 'Kelompok Primer vs Kelompok Sekunder', headers: ['Jenis Kelompok', 'Ciri Hubungan', 'Contoh'], rows: [
        ['Kelompok Primer', 'Kecil, sangat akrab, tatap muka langsung, ikatan emosional erat', 'Keluarga, sahabat dekat, regu belajar akrab'],
        ['Kelompok Sekunder', 'Besar, lebih formal/profesional, didasarkan tujuan tertentu', 'OSIS, koperasi, serikat pekerja, asosiasi profesi'],
      ]},
    ],
    activityTitle: 'Latihan: Kelompok Sosial',
    questions: [
      { text: 'Keluarga dan kelompok sahabat karib yang berinteraksi akrab dan penuh kasih sayang termasuk kelompok sosial...', opts: ['Primer', 'Sekunder', 'Kerumunan sesaat', 'Massa acak'], ans: 0, exp: 'Kelompok primer ditandai hubungan erat, personal, dan mendalam.' },
      { text: 'Organisasi Siswa Intra Sekolah (OSIS) dan Pramuka yang memiliki struktur pengurus, aturan tertulis, dan program kerja resmi termasuk kelompok...', opts: ['Formal / sekunder', 'Kerumunan', 'Acak', 'Ilegal'], ans: 0, exp: 'Memiliki AD/ART, tujuan jelas, dan kepengurusan resmi.' },
      { text: 'Sekumpulan orang yang kebetulan bersama-sama mengantre di halte bus tanpa saling mengenal belum disebut kelompok sosial sejati melainkan...', opts: ['Kerumunan (agregat sementara)', 'Lembaga formal', 'Keluarga besar', 'Organisasi'], ans: 0, exp: 'Kelompok sosial memiliki kesadaran keanggotaan dan interaksi berkesinambungan.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-05', subSeq: 7,
    objectives: ['Siswa mampu menjelaskan fungsi 5 lembaga sosial utama: keluarga, pendidikan, agama, ekonomi, dan politik.'],
    materialTitle: 'Lima Lembaga Sosial Utama',
    blocks: [
      { type: 'table', title: '5 Lembaga Sosial & Fungsi Utamanya', headers: ['Lembaga Sosial', 'Fungsi Utama', 'Contoh Wujud'], rows: [
        ['1. Keluarga', 'Reproduksi, kasih sayang (afeksi), sosialisasi awal, perlindungan', 'Ayah, ibu, anak'],
        ['2. Pendidikan', 'Mewariskan ilmu, keterampilan, karakter, dan membuka mobilitas sosial', 'SD, SMP, SMA, Perguruan Tinggi, kursus/les'],
        ['3. Agama', 'Pedoman keimanan, ibadah, moral, dan ketenangan batin', 'Masjid, gereja, pura, vihara, MUI/lembaga keagamaan'],
        ['4. Ekonomi', 'Mengatur produksi, distribusi, konsumsi & kesejahteraan warga', 'Pasar, bank, koperasi, perusahaan'],
        ['5. Politik', 'Membuat & menegakkan hukum, menjaga keamanan, dan menyelenggarakan pemerintahan', 'Presiden, DPR, DPRD, Bupati, KPU, Kepolisian'],
      ]},
    ],
    activityTitle: 'Latihan: 5 Lembaga Sosial',
    questions: [
      { text: 'Koperasi, bank, dan pasar tradisional merupakan wujud dari lembaga sosial...', opts: ['Ekonomi', 'Politik', 'Agama', 'Keluarga'], ans: 0, exp: 'Lembaga ekonomi mengatur pemenuhan kebutuhan materi masyarakat.' },
      { text: 'Fungsi AFEKSI (memberikan kasih sayang, kehangatan, dan rasa aman emosional) merupakan fungsi khas lembaga...', opts: ['Keluarga', 'Politik', 'Pasar', 'Pengadilan'], ans: 0, exp: 'Keluarga adalah sumber kasih sayang utama anak.' },
      { text: 'DPR, Pemerintah Daerah (Bupati/Walikota), dan KPU merupakan bagian dari lembaga sosial...', opts: ['Politik', 'Pendidikan', 'Ekonomi saja', 'Keluarga'], ans: 0, exp: 'Lembaga politik mengatur kekuasaan, kebijakan publik, dan ketertiban umum.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-05', subSeq: 8,
    objectives: ['Siswa mampu menganalisis hubungan keterkaitan antara nilai, norma, lembaga sosial, dan keteraturan perilaku masyarakat.'],
    materialTitle: 'Hubungan Nilai, Norma, Lembaga, & Perilaku Masyarakat',
    blocks: [
      { type: 'formula', name: 'Rantai Keteraturan Sosial', expression: 'Nilai (apa yang dianggap baik)  →  Norma (aturan konkret)  →  Lembaga Sosial (wadah pelaksana)  →  Tertib Sosial!', note: 'Contoh: Nilai "kejujuran & kepintaran" → Norma "dilarang menyontek, wajib belajar" → Lembaga "Sekolah" → Perilaku pelajar berintegritas!' },
    ],
    activityTitle: 'Latihan: Nilai, Norma, & Lembaga',
    questions: [
      { text: 'Lembaga sosial terbentuk di masyarakat bermula dari kebutuhan bersama yang diatur oleh...', opts: ['Nilai dan norma sosial yang disepakati masyarakat', 'Keinginan satu orang saja', 'Kebetulan tanpa aturan', 'Bencana alam'], ans: 0, exp: 'Sistem nilai dan norma yang melembaga melahirkan lembaga sosial.' },
      { text: 'Jika suatu masyarakat mematuhi norma lalu lintas dan lembaga kepolisian menegakkan aturan secara adil, yang terwujud adalah...', opts: ['Keteraturan dan ketertiban sosial (tertib sosial)', 'Kekacauan', 'Konflik berkepanjangan', 'Kelangkaan'], ans: 0, exp: 'Kepatuhan norma + lembaga berfungsi baik = tertib sosial.' },
      { text: 'Pengendalian sosial (social control) seperti teguran guru atau nasihat orang tua bertujuan untuk...', opts: ['Mencegah dan meluruskan perilaku menyimpang agar kembali sesuai norma', 'Mempermalukan siswa terus-menerus', 'Menghapus aturan', 'Membuat siswa takut sekolah'], ans: 0, exp: 'Pengendalian sosial bersifat preventif (mencegah) dan represif (memperbaiki).' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-05', subSeq: 9,
    objectives: ['Siswa mampu memahami dinamika/perubahan sosial sederhana (pengaruh teknologi, pendidikan, dan globalisasi) beserta sikap adaptifnya.'],
    materialTitle: 'Dinamika Sosial Sederhana',
    blocks: [
      { type: 'text', text: 'Masyarakat tidak pernah diam — selalu mengalami DINAMIKA (perubahan sosial)! Contoh nyata: cara belanja (dari pasar tunai ke QRIS/toko daring), cara belajar (papan kapur → modul digital interaktif), dan cara berkomunikasi (surat pos → pesan instan).' },
    ],
    activityTitle: 'Latihan: Dinamika Sosial',
    questions: [
      { text: 'Salah satu pendorong PALING CEPAT terjadinya dinamika (perubahan) sosial masyarakat saat ini adalah...', opts: ['Perkembangan ilmu pengetahuan, pendidikan, dan teknologi digital (IPTEK)', 'Bumi berhenti berputar', 'Tidak adanya interaksi', 'Isolasi total'], ans: 0, exp: 'Inovasi IPTEK mengubah cara komunikasi, bekerja, dan belajar secara pesat.' },
      { text: 'Dampak POSITIF dinamika teknologi pembayaran digital (seperti QRIS) bagi UMKM dan konsumen adalah...', opts: ['Transaksi lebih cepat, praktis, tercatat rapi, dan higienis', 'Pasar tutup semua', 'Uang hilang maknanya', 'Menghambat jual beli'], ans: 0, exp: 'Digitalisasi meningkatkan efisiensi dan transparansi UMKM.' },
      { text: 'Sikap cerdas pelajar SMP menghadapi perubahan sosial yang cepat adalah...', opts: ['Adaptif menguasai teknologi baru sambil tetap berpegang pada nilai Pancasila dan sopan santun', 'Menolak semua kemajuan teknologi', 'Mengikuti semua tren negatif tanpa filter', 'Individualis tidak peduli tetangga'], ans: 0, exp: 'Adaptif + berkarakter kuat menghadapi era modern.' },
    ],
  },

  // BAB 6: KONSEP DASAR SEJARAH DAN SEJARAH LOKAL
  {
    topicCode: 'IPS-SMP7-06', subSeq: 1,
    objectives: ['Siswa mampu menjelaskan pengertian sejarah (sebagai peristiwa, kisah, ilmu, dan seni) serta manfaat mempelajarinya.'],
    materialTitle: 'Pengertian dan Ruang Lingkup Sejarah',
    blocks: [
      { type: 'text', text: 'Kata "sejarah" berasal dari bahasa Arab "syajaratun" (pohon — melambangkan akar, pertumbuhan, dan kesinambungan!). Sejarah adalah ilmu yang mengkaji peristiwa NYATA kehidupan manusia di masa lampau secara objektif berdasarkan bukti!' },
      { type: 'visual_cards', title: '3 Manfaat Besar Belajar Sejarah', cards: [
        { emoji: '🎓', label: 'Edukatif', sub: 'Belajar dari keberhasilan dan kesalahan masa lalu agar tidak mengulangi kesalahan sama' },
        { emoji: '🔥', label: 'Inspiratif', sub: 'Meneladani semangat perjuangan dan ketangguhan tokoh terdahulu' },
        { emoji: '🧭', label: 'Jati Diri Bangsa', sub: 'Mengenal asal-usul, budaya, dan menghargai persatuan Indonesia' },
      ]},
    ],
    activityTitle: 'Latihan: Pengertian Sejarah',
    questions: [
      { text: 'Secara etimologis, kata "sejarah" berasal dari kata bahasa Arab "syajaratun" yang artinya...', opts: ['Pohon (menggambarkan asal-usul dan pertumbuhan)', 'Batu', 'Sungai', 'Bintang'], ans: 0, exp: 'Syajaratun = pohon (silsilah/akar pertumbuhan).' },
      { text: 'Sejarah dikatakan bersifat UNIK (einmalig) karena peristiwa sejarah...', opts: ['Hanya terjadi SATU kali di tempat dan waktu itu, tidak dapat diulang persis sama', 'Bisa diulang tiap hari', 'Hanya karangan fiksi', 'Sama di semua negara'], ans: 0, exp: 'Proklamasi 17 Agustus 1945 hanya terjadi sekali dalam sejarah.' },
      { text: 'Mempelajari kegagalan perjuangan kedaerahan sebelum 1908 mengajarkan pentingnya persatuan nasional. Hal ini menunjukkan guna sejarah yang bersifat...', opts: ['Edukatif (memberi pelajaran berharga)', 'Rekreatif saja', 'Khayalan', 'Komersial'], ans: 0, exp: 'Sejarah sebagai guru kehidupan (Historia Magistra Vitae).' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-06', subSeq: 2,
    objectives: ['Siswa mampu menganalisis 3 unsur mutlak peristiwa sejarah: Manusia (subjek), Ruang (tempat), dan Waktu (kapan).'],
    materialTitle: 'Unsur Sejarah: Manusia, Ruang, dan Waktu',
    blocks: [
      { type: 'table', title: '3 Unsur Mutlak Sejarah (Contoh: Proklamasi RI)', headers: ['Unsur', 'Peran dalam Sejarah', 'Contoh pada Proklamasi RI'], rows: [
        ['1. Manusia', 'Pelaku sekaligus penulis sejarah (subjek utama)', 'Ir. Soekarno, Drs. Moh. Hatta, golongan muda, rakyat Indonesia'],
        ['2. Ruang (Dimensi Spasial)', 'Tempat terjadinya peristiwa', 'Jl. Pegangsaan Timur No. 56, Jakarta'],
        ['3. Waktu (Dimensi Temporal)', 'Kapan peristiwa terjadi (masa lalu–kini–depan)', 'Jumat, 17 Agustus 1945 pukul 10.00 WIB'],
      ]},
    ],
    activityTitle: 'Latihan: Manusia, Ruang, Waktu',
    questions: [
      { text: 'Tiga unsur utama yang TIDAK dapat dipisahkan dalam setiap peristiwa sejarah adalah...', opts: ['Manusia, ruang, dan waktu', 'Hewan, gunung, dan laut', 'Uang, pasar, dan pabrik', 'Puisi, pantun, dan lagu'], ans: 0, exp: 'Sejarah adalah aktivitas manusia dalam ruang dan waktu.' },
      { text: 'Dalam peristiwa "Pertempuran Surabaya pada 10 November 1945 oleh arek-arek Surabaya", unsur RUANG adalah...', opts: ['Kota Surabaya', '10 November 1945', 'Arek-arek Surabaya', 'Senjata bambu runcing'], ans: 0, exp: 'Ruang = lokasi geografis kejadian (Surabaya).' },
      { text: 'Mengapa peristiwa alam tanpa keterlibatan manusia (misal letusan gunung purba sebelum ada manusia) lebih dikaji geologi daripada sejarah manusia?', opts: ['Karena objek utama ilmu sejarah adalah tindakan dan pengalaman MANUSIA', 'Karena gunung terlalu tinggi', 'Karena tidak ada waktu', 'Karena tidak ada batu'], ans: 0, exp: 'Manusia adalah pusat/penggerak sejarah.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-06', subSeq: 3,
    objectives: ['Siswa mampu memahami konsep kronologi, diakronik, sinkronik, dan periodisasi sejarah Indonesia.'],
    materialTitle: 'Kronologi, Diakronik, dan Periodisasi Sejarah',
    blocks: [
      { type: 'table', title: 'Istilah Konsep Waktu dalam Sejarah', headers: ['Konsep', 'Artinya'], rows: [
        ['Kronologi', 'Penyusunan peristiwa urut dari paling awal ke paling akhir (mencegah kerancuan/anakronisme!)'],
        ['Diakronik', 'Memanjang dalam WAKTU, terbatas dalam ruang (mis. Sejarah Indonesia 1908–1945)'],
        ['Sinkronik', 'Melebar dalam RUANG pada 1 titik waktu tertentu (mis. Kondisi ekonomi-sosial Jawa tahun 1945)'],
        ['Periodisasi', 'Pembabakan zaman: Praaksara → Hindu-Buddha → Islam → Kolonial → Kemerdekaan/Reformasi'],
      ]},
    ],
    activityTitle: 'Latihan: Kronologi & Periodisasi',
    questions: [
      { text: 'Urutan periodisasi besar sejarah Indonesia dari yang PALING AWAL adalah...', opts: ['Praaksara → Hindu-Buddha → Islam → Kolonial → Kemerdekaan', 'Islam → Praaksara → Hindu-Buddha → Kemerdekaan', 'Kolonial → Praaksara → Islam → Hindu-Buddha', 'Kemerdekaan → Kolonial → Hindu-Buddha'], ans: 0, exp: 'Masa belum mengenal tulisan (praaksara) adalah periode paling awal.' },
      { text: 'Menyusun peristiwa sejarah secara berurutan berdasarkan waktu terjadinya disebut...', opts: ['Kronologi', 'Sinkronik', 'Toponimi', 'Urbanisasi'], ans: 0, exp: 'Kronologi menjaga alur sebab-akibat waktu tidak terbalik.' },
      { text: 'Kajian sejarah yang memanjang dalam dimensi WAKTU (misalnya perkembangan pelabuhan pesisir utara Jawa dari abad ke-15 hingga abad ke-20) menggunakan cara berpikir...', opts: ['Diakronik', 'Sinkronik', 'Geometris', 'Statis'], ans: 0, exp: 'Diakronik = melintasi waktu (dia = melintas, chronos = waktu).' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-06', subSeq: 4,
    objectives: ['Siswa mampu menganalisis unsur PERUBAHAN (change) dan KESINAMBUNGAN (continuity) dalam perkembangan masyarakat.'],
    materialTitle: 'Perubahan dan Kesinambungan dalam Sejarah',
    blocks: [
      { type: 'worked_example', level: 'Contoh Nyata di Sekitar Kita', question: 'Bandingkan sekolah tahun 1980-an dengan sekolah sekarang: mana yang BERUBAH dan mana yang BERKESINAMBUNGAN?', steps: ['PERUBAHAN (Change): Dulu memakai papan kapur & buku cetak saja; kini ada proyektor, internet, dan modul belajar digital.', 'KESINAMBUNGAN (Continuity): Peran mulia guru membimbing siswa, semangat belajar, upacara bendera, dan nilai sopan santun tetap terus bertahan!'], answer: 'Sejarah selalu memadukan hal yang berubah dan hal yang tetap berlanjut.' },
    ],
    activityTitle: 'Latihan: Perubahan & Kesinambungan',
    questions: [
      { text: 'Tradisi gotong royong dan musyawarah yang sudah ada sejak masa leluhur Nusantara hingga era modern saat ini menunjukkan konsep sejarah...', opts: ['Kesinambungan (continuity)', 'Kepunahan', 'Anakronisme', 'Isolasi'], ans: 0, exp: 'Nilai/tradisi yang terus diwariskan lintas zaman adalah kesinambungan.' },
      { text: 'Beralihnya alat transportasi dari delman ke kereta api, mobil listrik, dan pesawat terbang merupakan contoh...', opts: ['Perubahan (change) di bidang teknologi transportasi', 'Kesinambungan kaku', 'Kemunduran', 'Mitologi'], ans: 0, exp: 'Perkembangan alat transportasi menunjukkan perubahan cepat.' },
      { text: 'Perubahan sejarah yang berlangsung sangat CEPAT dan mendasar (seperti Proklamasi Kemerdekaan 1945) disebut...', opts: ['Revolusi', 'Evolusi', 'Stagnasi', 'Tradisi'], ans: 0, exp: 'Revolusi = perubahan cepat; Evolusi = perubahan lambat bertahap.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-06', subSeq: 5,
    objectives: ['Siswa mampu membedakan sumber sejarah PRIMER (saksi langsung/sezaman) dan SEKUNDER (karya/tulisan setelahnya).'],
    materialTitle: 'Sumber Sejarah Primer dan Sekunder',
    blocks: [
      { type: 'table', title: 'Sumber Primer vs Sumber Sekunder', headers: ['Jenis Sumber', 'Pengertian', 'Contoh'], rows: [
        ['Sumber Primer', 'Kesaksian LANGSUNG atau peninggalan ASLI dari zaman peristiwa terjadi', 'Naskah asli Proklamasi, foto/rekaman asli 1945, wawancara langsung saksi hidup, prasasti/candi asli'],
        ['Sumber Sekunder', 'Karya yang ditulis/dibuat OLEH PIHAK KEDUA yang bukan saksi langsung (mengolah sumber primer)', 'Buku paket IPS SMP, ensiklopedia sejarah, artikel koran masa kini tentang peristiwa 1945'],
      ]},
    ],
    activityTitle: 'Latihan: Sumber Primer & Sekunder',
    questions: [
      { text: 'Naskah asli Proklamasi tulisan tangan Ir. Soekarno, prasasti kuno asli, dan kesaksian langsung veteran pejuang termasuk sumber sejarah...', opts: ['Primer', 'Sekunder', 'Fiksi', 'Tersier'], ans: 0, exp: 'Sumber primer berasal langsung dari waktu peristiwa atau saksi mata.' },
      { text: 'Buku pelajaran IPS kelas 7 yang membahas Kerajaan Majapahit dan Proklamasi 1945 termasuk sumber sejarah...', opts: ['Primer', 'Sekunder', 'Lisan langsung', 'Fosil'], ans: 1, exp: 'Buku pelajaran ditulis oleh penulis modern berdasarkan hasil kajian sumber primer.' },
      { text: 'Mengapa sejarawan wajib melakukan KRITIK SUMBER (verifikasi) terhadap bukti sejarah sebelum menulis sejarah?', opts: ['Untuk memastikan keaslian dan kebenaran fakta agar objektif serta bebas rekayasa', 'Agar buku lebih tebal', 'Supaya bisa mengarang bebas', 'Untuk membuang arsip'], ans: 0, exp: 'Verifikasi sumber membedakan fakta sejarah dari berita palsu/mitos.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-06', subSeq: 6,
    objectives: ['Siswa mampu menerapkan langkah penelitian sejarah sederhana (heuristik, kritik, interpretasi, historiografi) untuk sejarah keluarga & lingkungan sekitar.'],
    materialTitle: 'Sejarah Keluarga & Metode Penelitian Sejarah Lokal',
    blocks: [
      { type: 'table', title: '4 Langkah Kerja Sejarawan (Bisa Dipraktikkan untuk Sejarah Keluarga!)', headers: ['Langkah', 'Artinya', 'Contoh untuk Sejarah Keluarga/Desa'], rows: [
        ['1. Heuristik', 'Mengumpulkan sumber sejarah', 'Kumpulkan album foto lama, akta, wawancara kakek-nenek'],
        ['2. Kritik / Verifikasi', 'Mengecek keaslian & kebenaran data', 'Cocokkan cerita lisan dengan tahun di foto/dokumen resmi'],
        ['3. Interpretasi', 'Menafsirkan keterkaitan antarperistiwa', 'Hubungkan perpindahan pekerjaan keluarga dengan berkembangnya industri sekitar'],
        ['4. Historiografi', 'Menuliskan kisah sejarah secara runtut', 'Tulis laporan kronologis sejarah keluargamu dengan rapi!'],
      ]},
    ],
    activityTitle: 'Latihan: Sejarah Keluarga & Metode Sejarah',
    questions: [
      { text: 'Tahap PERTAMA dalam penelitian sejarah berupa kegiatan mencari dan mengumpulkan berbagai sumber sejarah disebut...', opts: ['Heuristik', 'Historiografi', 'Interpretasi', 'Kronologi'], ans: 0, exp: 'Urutan 4 tahap: Heuristik → Verifikasi (Kritik) → Interpretasi → Historiografi.' },
      { text: 'Tahap TERAKHIR penelitian sejarah berupa penulisan kisah sejarah secara sistematis disebut...', opts: ['Heuristik', 'Verifikasi', 'Historiografi', 'Observasi'], ans: 2, exp: 'Historiografi = penulisan sejarah.' },
      { text: 'Dalam meneliti sejarah perkembangan kampung/desa sendiri, kita dapat memadukan sumber tertulis (arsip desa/foto lama) dengan sumber lisan (wawancara sesepuh) untuk...', opts: ['Saling mencocokkan kebenaran informasi (triangulasi sumber)', 'Mengarang cerita lebih seru', 'Menghapus fakta', 'Membuat dongeng'], ans: 0, exp: 'Membandingkan beberapa sumber meningkatkan akurasi sejarah lokal.' },
    ],
  },
  {
    topicCode: 'IPS-SMP7-06', subSeq: 7,
    objectives: ['Siswa memahami konsep TOPONIMI (ilmu asal-usul nama tempat/geografis) dan cara menelusurinya melalui sumber terverifikasi.'],
    materialTitle: 'Pengenalan Toponimi (Asal-Usul Nama Tempat)',
    blocks: [
      { type: 'text', text: 'TOPONIMI adalah kajian ilmiah tentang asal-usul, makna, dan sejarah penamaan suatu tempat geografis (desa, kecamatan, kota, sungai, pasar). Nama tempat sering merekam jejak alam (pohon, sungai, rawa), aktivitas ekonomi lama (pasar, pelabuhan), atau tokoh sejarah!' },
      { type: 'list', title: 'Cara Ilmiah Menelusuri Toponimi Daerah', items: ['1. Cek arsip resmi pemerintah daerah, peta kuno, atau catatan sejarah/prasasti yang terverifikasi.', '2. Bedakan dengan jelas antara FAKTA ARSIP/SEJARAH dan CERITA RAKYAT/TRADISI LISAN yang berkembang di masyarakat!', '3. Misalnya di banyak wilayah Jawa: nama berawalan "Kali-" (sungai), "Karang-" (pekarangan/batu karang), "Kebon-" (kebun), "Pangkalan/Pelabuhan" mencerminkan kondisi geografis masa lalu!'] },
      { type: 'teacher_note', text: 'Ajak siswa mendiskusikan makna nama desa/kecamatan sekitar di Gresik daratan secara ilmiah (mis. unsur geografis atau catatan arsip resmi) tanpa mengarang legenda yang belum terverifikasi.' },
    ],
    activityTitle: 'Latihan: Pengenalan Toponimi',
    questions: [
      { text: 'Ilmu atau kajian tentang asal-usul dan makna penamaan suatu tempat geografis (desa, kota, jalan, sungai) disebut...', opts: ['Toponimi', 'Biologi', 'Astronomi', 'Ekonomi'], ans: 0, exp: 'Topos = tempat, onoma = nama → toponimi.' },
      { text: 'Jika menemukan dua versi cerita tentang asal-usul nama sebuah desa — satu dari cerita rakyat turun-temurun dan satu dari arsip peta kuno — sikap peneliti sejarah yang tepat adalah...', opts: ['Menyebutkan sumber masing-masing dengan jujur serta membedakan antara tradisi lisan dan bukti arsip', 'Mengarang versi ketiga sendiri', 'Menghapus arsip resmi', 'Menganggap semua dongeng pasti fakta 100%'], ans: 0, exp: 'Kejujuran metodologis membedakan bukti arsip dan folklor.' },
      { text: 'Nama-nama tempat di Jawa yang mengandung kata "Kali", "Rawa", "Tanjung", atau "Gunung" umumnya terinspirasi oleh aspek...', opts: ['Kondisi bentang alam/geografis wilayah setempat', 'Nama planet', 'Rumus matematika', 'Merek dagang modern'], ans: 0, exp: 'Banyak toponimi Nusantara berakar dari kenampakan alam atau tumbuhan khas setempat.' },
    ],
  },
];

upsertLessonsBatch('Kelas 7 SMP — IPS (6 Bab, 42 Submateri)', LESSONS)
  .catch((err) => { console.error(err); process.exit(1); });

