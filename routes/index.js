var express = require('express');
var router = express.Router();

router.get('/',  function(req, res, next) {
  res.render('index', { title: 'Express' })
});

router.get('/lists-endpoint', (req, res, next) => {
  res.json([
    {
      "title": "Title A",
      "type": "chart_line_series",
      "width": 12,
      "link": "http://localhost:9999/chart_line_series",
    },
    {
      "title": "Title B",
      "type": "chart_bar_series",
      "width": 12,
      "link": "http://localhost:9999/chart_bar_series",
    },
    {
      "title": "Title C",
      "type": "chart_column_series",
      "width": 12,
      "link": "http://localhost:9999/chart_column_series",
    },
    {
      "title": "Title D",
      "type": "chart_bar_series",
      "width": 12,
      "link": "http://localhost:9999/chart_bar_series",
    },
    {
      "title": "Title E",
      "type": "chart_column_series",
      "width": 12,
      "link": "http://localhost:9999/chart_column_series",
    },
  ])
})

router.get('/chart_line_series', (req, res, next) => {
  res.json({
    "widget_type": "chart_line_series",
    "widget_title": "Trendline Chart",
    "widget_subtitle": "",
    "widget_data": {
      "chart_categories": [
        "6 Feb",
        "7 Feb",
        "8 Feb",
        "9 Feb",
        "10 Feb",
        "11 Feb"
      ],
      "chart_series": [
        {
          "name": "Pemerintahan",
          "data": [14, 2, 5, 4, 11, 2]
        },
        {
          "name": "Kesehatan",
          "data": [2, 4, 5, 4, 9, 2]
        },
        {
          "name": "Peternakan & Perikanan",
          "data": [8, 3, 4, 5, 12, 7]
        },
        {
          "name": "Produk Kesenian",
          "data": [18, 13, 4, 5, 12, 4]
        },
        {
          "name": "Makanan",
          "data": [8, 3, 4, 5, 12, 5]
        },
        {
          "name": "Tempat Wisata",
          "data": [4, 3, 5, 15, 12, 7]
        }
      ],
      "xAxis_title": "",
      "yAxis_title": ""
    }
  })
})

router.get('/chart_bar_series', (req, res, next) => {
  res.json({
    "widget_type": "chart_bar_series",
    "widget_title": "Sentiment",
    "widget_subtitle": "",
    "widget_data": {
      "chart_categories": [
        "Pemerintahan",
        "Kesehatan",
        "Peternakan & Perikanan",
        "Produk Kesenian",
        "Makanan",
        "Tempat Wisata"
      ],
      "chart_series": [
        {
          "name": "Neutral",          
          "color": "#c4c5d6",
          "data": [13]
        },
        {
          "name": "Negative",
          "color": "#f4516c",
          "data": [9]
        },
        {
          "name": "Positive",
          "color": "#34bfa3",
          "data": [11]
        },
        {
          "name": "Positif&Negatif",
          "color": "#34bfa3",
          "data": [12]
        }
      ],
      "xAxis_title": "Usia",
      "yAxis_title": "Jumlah Wisatawan"
    }
  })
})

router.get('/chart_column_series', (req, res, next) => {
  res.json({
    "widget_type": "chart_column_series",
    "widget_title": "Post Sentiment",
    "widget_subtitle": "",
    "widget_data": {
      "chart_categories": [
        "Pemerintahan",
        "Kesehatan",
        "Peternakan & Perikanan",
        "Produk Kesenian",
        "Makanan",
        "Tempat Wisata"
      ],
      "chart_series": [
        {
          "name": "Neutral",          
          "color": "#c4c5d6",
          "data": [14, 2, 5, 4, 11, 2]
        },
        {
          "name": "Negative",
          "color": "#f4516c",
          "data": [2, 4, 5, 4, 9, 2]
        },
        {
          "name": "Positive",
          "color": "#34bfa3",
          "data": [8, 3, 4, 5, 12, 4]
        }
      ],
      "xAxis_title": "",
      "yAxis_title": ""
    }
  });
})

router.get('/chart_column', (req, res, next) => {
  res.json({
    "widget_type": "chart_column",
    "widget_title": "Post Sentiment",
    "widget_subtitle": "",
    "widget_data": {
      "chart_categories": [
        "0-15",
        "15-25",
        "25-35",
        "35-45",
        ">45"
      ],
      "chart_data": [
        2693960,
        2710110,
        2786708,
        2831695,
        2894078,
      ],
      "xAxis_title": "Usia",
      "yAxis_title": "Jumlah Wisatawan"
    }
  });
})

router.get('/chart_kunjungan_manusia', (req, res, next) => {
  res.json({
    "widget_type": "chart_kunjungan_manusia",
    "widget_title": "Post Sentiment",
    "widget_subtitle": "",
    "widget_data": {
      "chart_categories": [
        "Kunjungan pertama",
        "1 bulan terakhir",
        "1-6 bulan terakhir",
        "6-12 bulan terakhir",
        ">12 bulan"
      ],
      "chart_data": [
        2695960,
        2714110,
        2783708,
        2832695,
        2891078,
      ],
      "xAxis_title": "Periode",
      "yAxis_title": "Jumlah Wisatawan"
    }
  });
})

router.get('/column_chart_nginap', (req, res, next) => {
  res.json({
    "widget_type": "column_chart_nginap",
    "widget_title": "Post Sentiment",
    "widget_subtitle": "",
    "widget_data": {
      "chart_categories": [
        "1 Hari",
        "2 Hari",
        "3 Hari",
        "5 Hari",
        "7 Hari",
        "10 Hari",
      ],
      "chart_data": [
        2695960,
        3014110,
        3483708,
        3832695,
        4891078,
        2891078,
      ],
      "xAxis_title": "Lama Menginap",
      "yAxis_title": "Jumlah Wisatawan"
    }
  });
})

router.get('/pie_chart', (req, res, next) => {
  res.json({
    "widget_type": "pie_chart",
    "widget_title": "Post Sentiment",
    "widget_subtitle": "",
    "widget_data": {
      "chart_data": [{
        name: "Pria",
        y: 18362143
      }, {
        name: "Wanita",
        y: 18153892
      }
      ],
      "xAxis_title": "Periode",
      "yAxis_title": "Jumlah Wisatawan"
    }
  });
})

router.get('/table_chart', (req, res, next) => {
  res.json({
    "widget_type": "Table",
    "widget_title": "Post Sentiment",
    "widget_subtitle": "",
    "widget_data": {
      "chart_data": {
        "name" : "Tujuan Pengunjung",
         "col" : [{
           "nama" : "Nama"
         }, {
           "total" : "Total"
         }],
         "value" : [{
           "nama" : "Berfoto"
         }, {
           "total" : 20000
          }]
      },
    }
  });
})
module.exports = router;
