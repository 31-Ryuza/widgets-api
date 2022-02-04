const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const auth = require('../services/auth');
require('dotenv').config();

router.post('/login', async (req, res, next) => {
  let user = null;
  
  try {
    user = await auth.login(req.body.identifier);
    if (!user?.password) return res.json('No user found');
  } catch (error) {
    return res.sendStatus(500);
  }

  if(!await bcrypt.compare(req.body.password, user.password)) return res.status(503).json('Cred fail');

  const token = jwt.sign(
    {
      // iat: 'value setted by default libs',
      exp: Math.floor(Date.now() / 1000) + 60 * 10,
      nbf: Math.floor(Date.now() / 1000),
      id: user.id,
      // iss: '',
      // aud: '',
    },
    process.env.JWT_SECRET
  );

  res.cookie('_token', token, {
    httpOnly: true,
  }).sendStatus(200);

});

module.exports = router;
