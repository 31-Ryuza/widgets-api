var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json([
    {
      title: 'line series',
      type: 'line_series',
      width: 12,
      link: `${process.env.BASE_URL}/testing/line-series`,
    },
    {
      title: 'pie',
      type: 'pie',
      width: 4,
      link: `${process.env.BASE_URL}/testing/pie`,
    },
    {
      title: 'pie',
      type: 'pie',
      width: 4,
      link: `${process.env.BASE_URL}/testing/pie`,
    },
    {
      title: 'column series',
      type: 'column_series',
      width: 4,
      link: `${process.env.BASE_URL}/testing/column-series`,
    },
    {
      title: 'bar series',
      type: 'bar_series',
      width: 4,
      link: `${process.env.BASE_URL}/testing/bar-series`,
    },
    {
      title: 'column series',
      type: 'column_series',
      width: 4,
      link: `${process.env.BASE_URL}/testing/column-series`,
    },
    {
      title: 'word cloud',
      type: 'word_cloud',
      width: 4,
      link: `${process.env.BASE_URL}/testing/word-cloud`,
    },
    {
      title: 'datatable',
      type: 'datatable_serverside',
      width: 12,
      link: `${process.env.BASE_URL}/testing/datatable/posts`,
    },
  ]);
});

router.get('/column-series', (req, res, next) => {
  res.json({
    widget_type: 'chart_column_series',
    widget_title: 'Post Sentiment',
    widget_subtitle: '',
    widget_data: {
      chart_categories: [
        'Pemerintahan',
        'Kesehatan',
        'Peternakan & Perikanan',
        'Produk Kesenian',
        'Makanan',
        'Tempat Wisata',
      ],
      chart_series: [
        {
          name: 'Neutral',
          color: '#c4c5d6',
          data: [13, 2, 5, 4, 11, 2],
        },
        {
          name: 'Negative',
          color: '#f4516c',
          data: [2, 4, 5, 4, 9, 2],
        },
        {
          name: 'Positive',
          color: '#34bfa3',
          data: [8, 3, 4, 5, 12, 4],
        },
      ],
      xAxis_title: '',
      yAxis_title: '',
    },
  });
});

router.get('/bar-series', (req, res, next) => {
  res.json({
    widget_type: 'chart_bar_series',
    widget_title: 'Post Sentiment',
    widget_subtitle: '',
    widget_data: {
      chart_categories: [
        'Pemerintahan',
        'Kesehatan',
        'Peternakan & Perikanan',
        'Produk Kesenian',
        'Makanan',
        'Tempat Wisata',
      ],
      chart_series: [
        {
          name: 'Neutral',
          color: '#c4c5d6',
          data: [13, 2, 5, 4, 11, 2],
        },
        {
          name: 'Negative',
          color: '#f4516c',
          data: [2, 4, 5, 4, 9, 2],
        },
        {
          name: 'Positive',
          color: '#34bfa3',
          data: [8, 3, 4, 5, 12, 4],
        },
      ],
      xAxis_title: '',
      yAxis_title: '',
    },
  });
});

router.get('/pie', (req, res, next) => {
  res.json({
    widget_type: 'chart_pie',
    widget_title: 'Posts',
    widget_subtitle: '',
    widget_data: {
      chart_data: [
        { name: 'Pemerintah', y: 2786360 },
        { name: 'Kesehatan', y: 2748112 },
        { name: 'Peternakan & Perikanan', y: 2748112 },
        { name: 'Produk Kesenian', y: 1186360 },
        { name: 'Makanan', y: 1748112 },
        { name: 'Tempat Wisata', y: 2048112 },
      ],
    },
  });
});

router.get('/line-series', (req, res, next) => {
  res.json({
    widget_type: 'chart_line_series',
    widget_title: 'Trendline Chart',
    widget_subtitle: '',
    widget_data: {
      chart_categories: [
        '6 Feb',
        '7 Feb',
        '8 Feb',
        '9 Feb',
        '10 Feb',
        '11 Feb',
      ],
      chart_series: [
        {
          name: 'Pemerintahan',
          data: [14, 2, 5, 4, 11, 2],
        },
        {
          name: 'Kesehatan',
          data: [2, 4, 5, 4, 9, 2],
        },
        {
          name: 'Peternakan & Perikanan',
          data: [8, 3, 4, 5, 12, 7],
        },
        {
          name: 'Produk Kesenian',
          data: [18, 13, 4, 5, 12, 4],
        },
        {
          name: 'Makanan',
          data: [8, 3, 4, 5, 12, 5],
        },
        {
          name: 'Tempat Wisata',
          data: [4, 3, 5, 15, 12, 7],
        },
      ],
      xAxis_title: '',
      yAxis_title: '',
    },
  });
});

router.get('/word-cloud', (req, res, next) => {
  const words = [
    { name: 'kota', weight: 179, color: '#eaeaea' },
    { name: 'dari', weight: 168, color: '#eaeaea' },
    { name: 'padang', weight: 112, color: '#eaeaea' },
    { name: 'indonesia', weight: 95, color: '#eaeaea' },
    { name: 'bulgaria', weight: 89, color: '#eaeaea' },
    { name: 'pabrik', weight: 80, color: '#eaeaea' },
    { name: 'bisa', weight: 72, color: '#eaeaea' },
    { name: 'pada', weight: 65, color: '#eaeaea' },
    { name: 'ada', weight: 65, color: '#eaeaea' },
    { name: 'lebih', weight: 62, color: '#eaeaea' },
    { name: 'barat', weight: 62, color: '#eaeaea' },
    { name: 'saat', weight: 61, color: '#eaeaea' },
    { name: 'pembangunan', weight: 61, color: '#eaeaea' },
    { name: 'dapat', weight: 58, color: '#eaeaea' },
    { name: 'produksi', weight: 58, color: '#eaeaea' },
    { name: 'tersebut', weight: 57, color: '#eaeaea' },
    { name: 'menjadi', weight: 56, color: '#eaeaea' },
    { name: 'masyarakat', weight: 54, color: '#eaeaea' },
    { name: 'baca', weight: 54, color: '#eaeaea' },
    { name: 'produk', weight: 53, color: '#eaeaea' },
    { name: 'vaksin', weight: 53, color: '#eaeaea' },
    { name: 'hingga', weight: 53, color: '#eaeaea' },
    { name: 'iwan', weight: 50, color: '#eaeaea' },
    { name: 'makanan', weight: 50, color: '#eaeaea' },
    { name: 'merupakan', weight: 49, color: '#eaeaea' },
    { name: 'daging', weight: 47, color: '#eaeaea' },
    { name: 'nantinya', weight: 47, color: '#eaeaea' },
    { name: 'retort', weight: 47, color: '#eaeaea' },
    { name: 'booster', weight: 46, color: '#eaeaea' },
    { name: 'pasar', weight: 44, color: '#eaeaea' },
    { name: 'tahan', weight: 43, color: '#eaeaea' },
    { name: 'orang', weight: 41, color: '#eaeaea' },
    { name: 'pemerintah', weight: 41, color: '#eaeaea' },
    { name: 'sentra', weight: 41, color: '#eaeaea' },
    { name: 'hari', weight: 40, color: '#eaeaea' },
    { name: 'anak', weight: 40, color: '#eaeaea' },
    { name: 'sangat', weight: 40, color: '#eaeaea' },
    { name: 'mengatakan', weight: 40, color: '#eaeaea' },
    { name: 'dibangun', weight: 40, color: '#eaeaea' },
    { name: 'baru', weight: 39, color: '#eaeaea' },
    { name: 'dua', weight: 39, color: '#eaeaea' },
    { name: 'kecamatan', weight: 39, color: '#eaeaea' },
    { name: 'kepada', weight: 38, color: '#eaeaea' },
    { name: 'sumbar', weight: 38, color: '#eaeaea' },
    { name: 'memiliki', weight: 38, color: '#eaeaea' },
    { name: 'kuliner', weight: 36, color: '#eaeaea' },
    { name: 'kata', weight: 34, color: '#eaeaea' },
    { name: 'kegiatan', weight: 34, color: '#eaeaea' },
    { name: 'bella', weight: 34, color: '#eaeaea' },
    { name: 'ltd', weight: 33, color: '#eaeaea' },
    { name: 'lama', weight: 33, color: '#eaeaea' },
    { name: 'kuda', weight: 33, color: '#eaeaea' },
    { name: 'vaksinasi', weight: 32, color: '#eaeaea' },
    { name: 'para', weight: 32, color: '#eaeaea' },
    { name: 'bumbu', weight: 31, color: '#eaeaea' },
    { name: 'eropa', weight: 31, color: '#eaeaea' },
    { name: 'berita', weight: 31, color: '#eaeaea' },
    { name: 'mesin', weight: 31, color: '#eaeaea' },
    { name: 'khas', weight: 31, color: '#eaeaea' },
    { name: 'harus', weight: 31, color: '#eaeaea' },
    { name: 'sebagai', weight: 30, color: '#eaeaea' },
    { name: 'wali', weight: 30, color: '#eaeaea' },
    { name: 'adalah', weight: 29, color: '#eaeaea' },
    { name: 'melalui', weight: 29, color: '#eaeaea' },
    { name: 'kerja', weight: 29, color: '#eaeaea' },
    { name: 'dian', weight: 29, color: '#eaeaea' },
    { name: 'com', weight: 29, color: '#eaeaea' },
    { name: 'kepala', weight: 28, color: '#eaeaea' },
    { name: 'bakal', weight: 28, color: '#eaeaea' },
    { name: 'beberapa', weight: 28, color: '#eaeaea' },
    { name: 'baik', weight: 28, color: '#eaeaea' },
    { name: 'tidak', weight: 28, color: '#eaeaea' },
    { name: 'lainnya', weight: 28, color: '#eaeaea' },
    { name: 'melakukan', weight: 28, color: '#eaeaea' },
    { name: 'selama', weight: 27, color: '#eaeaea' },
    { name: 'alat', weight: 27, color: '#eaeaea' },
    { name: 'daerah', weight: 27, color: '#eaeaea' },
    { name: 'seperti', weight: 27, color: '#eaeaea' },
    { name: 'ekspor', weight: 27, color: '#eaeaea' },
    { name: 'covid', weight: 26, color: '#eaeaea' },
    { name: 'program', weight: 26, color: '#eaeaea' },
    { name: 'waktu', weight: 26, color: '#eaeaea' },
    { name: 'khusus', weight: 26, color: '#eaeaea' },
    { name: 'tak', weight: 26, color: '#eaeaea' },
    { name: 'membuat', weight: 26, color: '#eaeaea' },
    { name: 'mulai', weight: 26, color: '#eaeaea' },
    { name: 'ikm', weight: 25, color: '#eaeaea' },
    { name: 'secara', weight: 25, color: '#eaeaea' },
    { name: 'data', weight: 25, color: '#eaeaea' },
    { name: 'memberikan', weight: 25, color: '#eaeaea' },
    { name: 'serta', weight: 25, color: '#eaeaea' },
    { name: 'hanya', weight: 25, color: '#eaeaea' },
    { name: 'besar', weight: 25, color: '#eaeaea' },
    { name: 'bagi', weight: 25, color: '#eaeaea' },
    { name: 'meter', weight: 24, color: '#eaeaea' },
    { name: 'timur', weight: 24, color: '#eaeaea' },
    { name: 'rempah', weight: 24, color: '#eaeaea' },
    { name: 'gedung', weight: 24, color: '#eaeaea' },
    { name: 'sumatera', weight: 24, color: '#eaeaea' },
    { name: 'dunia', weight: 24, color: '#eaeaea' },
  ];
  res.json({
    widget_type: 'word_cloud',
    widget_title: 'Common Themes',
    widget_subtitle: '',
    widget_data: {
      words,
    },
  });
});

router.get('/datatable/posts', (req, res, next) => {
  res.json({
    "widget_type": "datatable_server",
    "widget_title": "Posts",
    "widget_subtitle": "",
    "widget_data" : {
      "per_page": 10,
      "total_data": 52,
      "base_endpoint": "http://localhost:9999/testing/datatable/posts",
      "order_col": ["media", "posts", "sentiment"],
      "t_head": {
        "media": "Media",
        "posts": "Posts",
        "sentiment": "Sentiment"
      },
      "t_body": [
        {      
          "media": "antara",      
          "posts": "  ANTARA - Dinas Tenaga Kerja dan Perindustrian Kota Padang membangun Gedung Sentra Rendang untuk memudahkan para pengusaha rendang mendapatkan standar izin edar yang berlaku. Di tempat ini, Sabtu (12/2) dilakukan kegiatan memasak aneka jenis rendang sekaligus uji coba pemanfaatan peralatan modern di gedung baru tersebut, sebelum diresmikan pada Agustus mendatang. (Melani Friati/Satrio Giri Marwanto/Rinto A Navis)  ",      
          "sentiment": "Positive"
        },
        {      
          "media": "padangkita",      
          "posts": "  Padang, Padangkita.com \u2013 Sentra Rendang di Koto Tangah, Kota Padang tidak saja menjadi \u201cdapur\u201d rendang bagi Industri Kecil Menengah (IKM).Namun, fasilitas ini juga dapat menjadi tempat memasak rendang bagi warga untuk kegiatan \u201cbaralek\u201d atau pesta pernikahan.  \u201cBagi warga yang baralek dan ingin memasak rendang, bisa dilakukan di sini (Sentra Rendang),\u201d ujar Kepala Dinas Tenaga Kerja dan Perindustrian (Disnakerin) Kota Padang Dian Fakhri, Sabtu (12/2/2022).Warga yang baralek dan menggunakan Sentra Rendang untuk memasak rendang tidak dikenai biaya sepersen pun. Disnakerin menyiapkan tungku, kuali, dan alat untuk memasak rendang lainnya bagi warga.\u201cAkan tetapi warga mesti membawa sendiri gas dari rumah, serta menyiapkan baskom sebagai wadah rendangnya,\u201d sebut Dian Fakhri.  Dian Fakhri mengatakan, Sentra Rendang dibangun melalui anggaran APBN. Saat ini, Sentra Rendang tengah berbenah. Terutama melengkapi peralatan pendukung agar sentra ini sesuai standar internasional.Baca juga:\u00a0Sentra Rendang Kota Padang Bakal Diresmikan Agustus, Ini Fasilitas yang Bisa Dimanfaatkan IKM\u201cKita harapkan Sentra Rendang milik kita ini sempurna dan mampu menjadi dapur utama bagi IKM kita,\u201d tutur Kadisnakerin Kota Padang. [*/pkt]   Kota Padang Sentra Rendang                 ",      
          "sentiment": "Neutral"
        },
        {      
          "media": "humas.polri.go.id",      
          "posts": " Kamis/10/2 /2022, Pawas AKP I Made Sudihartama ,S.H., dengan tiga anggota melakukan pembagian masker secara gratis kepada warga masyarakat guna mengantisipasi penyebaran Covid 19 dan mewujudkan Commander Wish Kapolri Menuju Transformasi Nasional. Dan berbagai usaha dan langkah \u2013 Langkah telah banyak di lakukan utamanya dari pihak pemerintah untuk memutus mata rantai penyebaran Covid 19 agar penyebarannya bisa diminimalisir. Di samping itu juga memberikan himbauan Prokes secara rutin baik kepada warga masyarakat perkampungan, pelaku obyek wisata, para siswa di Pasar dan yang lainnya. Pembagian masker diberikan sebanyak 50 pcs kepada warga yang tidak mengenakan masker maupun yang maskernya sudah usang. Dalam rangka mencegah dan memutus mata rantai penyebaran Covid 19,utamanya di tempat \u2013 tempat yang beresiko tinggi, \u201d Tegasnya. Dan diharapkan kepada Warga masyarakat selalu mengikuti anjuran Satgas Covid 19 untuk menggunakan masker dengan baik, menjaga jarak dan mencuci tangan dengan sabun pada air mengalir, sehingga terhindar dari terinveksi Covid 19,\u201d Imbuhnya. ",      
          "sentiment": "Neutral"
        },
        {
          "media": "padang.harianhaluan",      
          "posts": " HALUAN PADANG - Waspadai hujan dengan intensitas sedang hingga lebat dapat disertai petir/kilat dan angin kencang pada siang hingga sore hari di wilayah Pasaman, Limapuluh Kota, Payakumbuh, Agam, Bukittinggi dan sekitarnya. Peringatan dini tersebut berdasarkan prakiraan cuaca Sumatera Barat di situs BMKG, bmkg.go.id yang berlaku pada Minggu (13/2/2022) pagi hingga Senin (14/2/2022) dini hari. Pada pagi hari, cuaca di sebagian besar wilayah Sumbar diperkirakan berawan. Sementara itu, cuaca berkabut pada dini hari akan meliputi Bukittinggi dan Padangpanjang. Baca Juga: Pilkades Serentak Pariaman Rampung, Kades Diharapkan Dapat Ilmu Pemerintahan dari Kemendagri Kemudian pada siang hari, diperkirakan hujan lebat di Bukittinggi, Lubuk Basung, Payakumbuh, dan Sarilamak.        Sementara itu, hujan ringan pada siang hari diperkirakan terjadi di Muaro Sijunjung, Pariaman, Parit Malintang, Pulau Punjung, Simpang Empat, dan Tuapejat. Kemudian pada malam hari dan dini hari, diperkirakan cuaca di sebagian besar wilayah Sumbar berawan.(*) ",      
          "sentiment": "Neutral"
        },
        {      
          "media": "indopublik",      
          "posts": " Sentra Rendang Kota Padang Akan Diresmikan Saat APEKSI  Minggu, 13 Februari 2022 | 04:29 WIB \u00a0|\u00a0Penulis :\u00a0 MC KOTA PADANG , Redaktur :\u00a0Tobari        Padang, InfoPublik - Sentra Rendang Kota Padang sudah selesai dibangun. Tak sampai setahun, gedung pusat rendang itu dapat dimanfaatkan. Jika tak ada aral melintang, Sentra Rendang tersebut diresmikan saat pelaksanaan Rapat Kerja Nasional Asosiasi Pemerintah Kota Seluruh Indonesia (Rakernas APEKSI) di Padang, Agustus mendatang. \u201cKita rencanakan Sentra Rendang diresmikan saat pelaksanaan APEKSI nanti,\u201d ungkap Kepala Dinas Tenaga Kerja dan Perindustrian (Disnakerin) Kota Padang Dian Fakhri, Sabtu (12/2/2022). Disebutkan Dian Fakhri, Sentra Rendang merupakan \u201cdapur\u201d memasak rendang bagi Industri Kecil Menengah (IKM) di Padang. Di sini, alat memasak terbilang lengkap. Bahkan di Sentra Rendang terdapat mesin \u201cRetort\u201d. \u201cMesin (Retort) ini mampu mengawetkan rendang hingga dua tahun, ini dapat digunakan nantinya oleh para IKM yang ingin mengekspor rendangnya,\u201d tutur Dian. Sentra Rendang terletak di belakang Kantor Camat Koto Tangah. Di sentra ini terdapat sejumlah gedung. Gedung itu tidak saja sebagai tempat untuk memasak rendang. Akan tetapi juga terdapat gedung pelatihan, dan lainnya. \u201cDi sini cukup lengkap, ada gedung tempat pelatihan bagi IKM dan lainnya, serta gedung milik Dekranasda Kota Padang,\u201d sebut Kadisnakerin Kota Padang. Seperti diketahui, Kota Padang menjadi tuan rumah Rakernas APEKSI di tahun ini. Diprediksi, sebanyak 98 wali kota se-Indonesia hadir di Padang untuk melakukan rapat kerja. Mulai tanggal 3-6 Agustus 2022, seluruh wali kota berada di Padang.(MC Padang/ Chl/ Marajo/toeb)   13 Kali      \u00a0 Anda dapat menyiarkan ulang, menulis ulang, dan atau menyalin konten ini dengan mencantumkan sumber InfoPublik.id              ",      
          "sentiment": "Positive"
        },
        {
          "media": "indopublik",      
          "posts": " Warga yang Hendak Adakan Pesta Bisa Memasak di Sentra Rendang Kota Padang   Minggu, 13 Februari 2022 | 04:28 WIB \u00a0|\u00a0Penulis :\u00a0 MC KOTA PADANG , Redaktur :\u00a0Tobari        Padang, InfoPublik - Tidak saja menjadi dapur rendang bagi Industri Kecil Menengah (IKM), Sentra Rendang Kota Padang bisa juga dipakai oleh warga untuk yang ingin memasak rendang untuk kegiatan pesta atau hajatan lainnya. \u201cBagi warga yang hendak adakan pesta dan ingin memasak rendang, bisa dilakukan di sini (Sentra Rendang),\u201d ujar Kepala Dinas Tenaga Kerja dan Perindustrian (Disnakerin) Kota Padang Dian Fakhri, Sabtu (12/2/2022). Dian Fakhri mengatakan, warga yang dan menggunakan Sentra Rendang untuk memasak rendang tidak dikenai biaya sepersen pun. Disnakerin menyiapkan tungku, kuali, dan alat untuk memasak rendang lainnya bagi warga. \u201cAkan tetapi warga mesti membawa sendiri gas dari rumah, serta menyiapkan baskom sebagai wadah rendangnya,\u201d jelas Dian Fakhri. Dian Fakhri mengatakan, Sentra Rendang dibangun melalui anggaran APBN. Saat ini, Sentra Rendang tengah berbenah. Terutama melengkapi peralatan pendukung dan izin BPOM sendiri agar sentra ini sesuai standar internasional. \u201cKita harapkan Sentra Rendang milik kita ini sempurna dan mampu menjadi dapur utama bagi IKM kita,\u201d kata dia. (MC Padang/ Chl/ Marajo/toeb)   13 Kali      \u00a0 Anda dapat menyiarkan ulang, menulis ulang, dan atau menyalin konten ini dengan mencantumkan sumber InfoPublik.id              ",      
          "sentiment": "Negative"
        },
        {      
          "media": "riau1.com",      
          "posts": "   RIAU1.COM -Pejabat Pemko Pekanbaru dan Pemko Payakumbuh bergowes ria bersama menuju kawasan wisata pada 12 Februari 2022. Salah satu lokasi yang dikunjungi adalah Rumah Singgah Tuan Kadi.\u00a0 \"Gowes bersama ini menjadi ajang bertukar informasi sekaligus memperkenalkan pariwisata,\" kata Asisten I Bidang Pemerintahan dan Kesejahteraan (Kesra) Sekretariat Daerah Kota (Setdako) Pekanbaru Syoffaizal, Sabtu. Baca Juga: Tak Perlu Antre, Wajib Pajak Bisa Gunakan Smart Tax Pekanbaru Kegiatan bersepeda bersama menuju ke Masjid Raya Senapelan dan Rumah Singgah Tuan Kadi. Pejabat Pemko Payakumbuh mendapat penjelasan tentang seputar keberadaan Rumah Tuan Kadi dari Kepala Dinas Kebudayaan dan Pariwisata (Disbudpar) Masriah. Baca Juga: Lansia Tak Mau Divaksin Jadi Kendala Dinkes Pekanbaru Percepat Vaksinasi  \"Dengan kegiatan gowes ini, saya harap bisa memotivasi warga untuk menyenangi olahraga ramah lingkungan yang bisa memberikan manfaat kesehatan. Apalagi di tengah pandemi Covid-19 saat ini, bersepeda bisa meningkatkan imun tubuh,\" ucap Syoffaizal.\u00a0  ",      
          "sentiment": "Neutral"
        },
        {
          "media": "siagaonline",      
          "posts": "  SiagaOnline.com, Padang \u2013 Sentra Rendang di Koto Tangah Kota Padang Provinsi Sumatera Barat tidak saja menjadi dapur rendang bagi Industri Kecil Menengah (IKM). Akan tetapi juga menjadi tempat bagi warga yang ingin memasak rendang untuk kegiatan \u201cbaralek\u201d (hajatan pernikahan). \u00a0\u00a0\u201cBagi warga yang baralek dan ingin memasak rendang, bisa dilakukan disini (Sentra Rendang),\u201d ujar Kepala Dinas Tenaga Kerja dan Perindustrian (Disnakerin) kota Padang, Dian Fakhri, Sabtu (12/2). \u00a0\u00a0Warga yang baralek dan menggunakan Sentra Rendang untuk memasak rendang tidak dikenai biaya sepersen pun. Disnakerin menyiapkan tungku, kuali dan alat untuk memasak rendang lainnya bagi warga. \u00a0\u00a0\u201cAkan tetapi warga mesti membawa sendiri gas dari rumah, serta menyiapkan baskom sebagai wadah rendangnya,\u201d sebut Dian Fakhri. \u00a0\u00a0Dian Fakhri mengatakan, Sentra Rendang dibangun melalui anggaran APBN. Saat ini, Sentra Rendang tengah berbenah. Terutama melengkapi peralatan pendukung agar sentra ini sesuai standar internasional. \u00a0\u00a0\u201cKita harapkan Sentra Rendang milik kita ini sempurna dan mampu menjadi dapur utama bagi IKM kita,\u201d tutur Kadisnakerin kota Padang. (Y)  Jika Anda punya informasi kejadian/peristiwa korupsi dan lain-lainnya/rilis atau ingin pasang Iklan dan berbagi foto?  Silakan SMS/WatsApp ke:  0852-6599-9456  Via E-mail:  red_siagaonlinepku@yahoo.com / redaksisiagaonline@gmail.com (Mohon Dilampirkan Data Diri Anda)     Loading...    \u00a0 Berita Lainnya :  Koto Tangah Menjadi Sentra Rendang Bagi Warga Yang Baralek di Padang  \u00a0      Komentar Anda :  ",      
          "sentiment": "Positive"
        },
        {      
          "media": "indozoneid",      
          "posts": "  INDOZONE.ID - Sentra Rendang Kota Padang, yang berada di Lubuk Buaya, Kecamatan Koto Tangah Kota, Kota Padang, akan dilengkapi dengan teknologi sterilisasi kemasan yang membuat rendang tahan lebih lama hingga dua tahun. Dalam waktu dekat, sentra rendang tersebut akan dioperasikan oleh pemerintah kota Padang. Kepala Dinas Tenaga Kerja dan Perindustrian Kota Padang Dian Fakri mengatakan, selama ini, rendang khas Minang hanya mampu tahan selama lebih kurang dua bulan saja.\u00a0\"Lebih dari itu, rasanya sudah berubah dan tak enak lagi dikonsumsi. Karena itu kami menyiapkan teknologi sterilisasi kemasan retort,\" kata Dian di Padang, Jumat (11/2/2022), dilansir Antara.Dian menjelaskan, teknologi retort merupakan pengemasan produk pangan dalam kaleng atau kantong yang kedap udara dan melalui proses pemanasan untuk mendukung kualitas keamanan produk pangan.    Baca Juga:  Resep Mudah Membuat Rendang Kentang Mantap! Rendang Payakumbuh Akan Ambil Bagian di Indonesia Spice Of The World Dikira Gembel, Wanita Ini Dapat Rendang Gratis dari Pemilik Rumah Makan Padang    Sterilisasi dengan teknologi retort dilakukan dengan memanaskan produk kemasan dalam bejana tahan panas dengan suhu 121,1 derajat Celsius selama 30 menit.\"Dengan sistem pemanasan dapat membuat produk pangan bisa awet hingga dua tahun,\" ujarnya.Menurut Dian, hingga saat ini belum ada satupun industri kecil menengah (IKM) di Padang yang memiliki mesin retort.  \"Kehadiran mesin tersebut membuat produk yang dihasilkan dapat tahan lama,\" katanya.Bangunan Sentra Rendang Kota Padang yang merupakan pusat produksi dan pemasaran masakan rendang dibangun di lahan seluas 5.112 meter per segi bersumber dari Dana Alokasi Khusus (DAK) Fisik Kementerian Perindustrian.   Gedung Sentra Rendang Padang (Antara/Iggoy el Fitra)Bangunan terdiri atas gedung promosi, gedung produksi, gedung kantor/UPTD dan gedung utilitas.Pembangunan Sentra Rendang Kota Padang, kata Dian, merupakan upaya memfasilitasi masyarakat terutama para pelaku IKM rendang Kota Padang untuk melakukan kegiatan di tempat produksi khusus dan memenuhi prinsip cara produksi pangan olahan yang baik.Masing-masing IKM rendang diharapkan dapat mempergunakan ruang produksi sendiri dengan tata letak yang sebelumnya sudah mengaplikasikan prinsip-prinsip Good Manufacturing Practise (GMP) sesuai dengan petunjuk dari Tim Teknis Tenaga Ahli dari BPOM yang sudah dilibatkan sejak awal penyusunan DED (Detail Enggineering Design).\"Sentra rendang juga akan menyediakan peralatan penunjang produksi yang bisa digunakan oleh IKM rendang,\" imbuh Dian.Rendang yang dihasilkan sesuai dengan prinsip cara produksi olahan pangan yang baik, memiliki sertifikat Hazard Analisis Critical Control Point (HACCP), serta izin Edar MD serta bersertifikat halal dan memiliki kemasan yang baik.Artikel Menarik Lainnya:Fina Tiza Minta Maaf Usai Sebut 'Orang Miskin Kurang Ajar' ke Driver Ojol Bintang Crash Landing On You, Son Ye-jin dan Hyun Bin Umumkan Hubungan Secara Resmi Fakta Kerajaan Majapahit, Sebuah Negara Besar yang Pada Akhirnya Runtuh    TAG rendang padang sentra rendang ekspor rendang padang rendang padang       ",
          "sentiment": "Neutral"
        },
        {      
          "media": "langgam",      
          "posts": "   Berita Payakumbuh \u2013 berita Sumbar terbaru dan terkini hari ini: Tim Opsnal Sat Narkoba Polres Payakumbuh menangkap pelaku penjual narkoba.Langgam.id \u2013 Diduga jual narkoba, seorang pria berinsial EA (56) ditangkap Tim Opsnal Sat Narkoba Polres Payakumbuh, Jumat (11/2/2022) sekitar pukul 21.00 WIB.  Tersangka EA ditangkap dikediamannya di Balai Batimah, Kecamatan Payakumbuh Timur. Saat penangkapan itu,\u00a0polisi menemukan barang bukti di kamarnya berupa 13 paket ganja.Baca Juga 400 Kasus Baru Covid-19 Bertambah di Sumbar, Tersebar di 18 Kabupaten/Kota DPRD Padang Ajak Pejabat Publikasikan Anaknya yang Sudah Vaksin  Kemudian, juga diamankan uang senilai Rp100 ribu dan satu unit handphone.Kasat Narkoba Polres Payakumbuh AKP Desneri mengatakan, tersangka EA ditangkap berdasarkan pengembangan yang dilakukan oleh penyidik Sat Narkoba Polres Payakumbuh.  Sebelumnya terang Desneri, polisi sudah menangkap tersangka EF pada Jumat (11/2/2022) sekitar pukul 17.00 WIB.\u201cSaat tersangka EF menjelaskan asal dari narkoba yang ditemui di rumahnya itu berasal dari EA. Kami langsung melakukan penyelidikan dan melakukan penangkapan terhadap tersangka EA,\u201d ujarnya dilansir dari Instagram\u00a0 @polres.payakumbuh, Sabtu (12/2/2022).Tersangka EA beserta barang bukti terangnya, sudah diamankan di Mapolres Payakumbuh untuk penyidikan lebih lanjut.  Sebelumnya, saat penangkapan tersangka EF di kediamannya di Balai Batimah, polisi menemukan satu paket sabu dan tiga paket ganja di dalam tas pinggang.Baca juga: ASN Pemko Payakumbuh Terima Vaksin Booster  Penangkapan EF ini berdasarkan laporan masyarakat yang diterima polisi. Kepada polisi, EF mengaku bahwa barang haram itu diperolehnya dari tersangka EA seharga Rp150 ribu.\u2014Dapatkan update berita Payakumbuh \u2013 berita Sumbar terbaru dan terkini hari ini dari Langgam.id. Mari bergabung di Grup Telegram Langgam.id News Update, caranya klik\u00a0https://t.me/langgamid, kemudian join. Anda harus instal aplikasi Telegram terlebih dulu di ponsel.   Editor: Wista YukiTags: NarkobaPayakumbuhPolres PayakumbuhSumatra Barat",      
          "sentiment": "Negative"
        }
      ]
    }
  });
});

module.exports = router;
