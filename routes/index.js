var express = require('express');
var router = express.Router();

router.get('/',  function(req, res, next) {
  res.render('index', { title: 'Express' })
});

// router.get('/setcookie', (req, res, next) => {
//   const rand = Math.random();
//   res.cookie('test_cookie', rand, {
//     httpOnly: true,
//   });
//   console.log(`you set your cookie: ${rand}`)
//   res.send(`you set your cookie: ${rand}`)
// })

// router.get('/getcookie',  function (req, res, next) {
//   console.log(`your cookie before: ${JSON.stringify(req.cookies)}`)
//   res.send(`your cookie before: ${JSON.stringify(req.cookies)}`)
// })
module.exports = router;
