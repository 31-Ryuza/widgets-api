const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../services/auth');

router.post('/logout', (req, res, next) => {
  res.clearCookie('_token');
  res.sendStatus(200);
})

router.post('/login', async (req, res, next) => {
  let user = null;
  
  try {
    user = await auth.login(req.body.identifier);
    if (!user?.password) return res.status(403).json('No user found');
  } catch (error) {
    return res.sendStatus(500);
  }

  if(!await bcrypt.compare(req.body.password, user.password)) return res.status(403).json('Cred fail');

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

  delete user.password;

  res.cookie('_token', token, {
    maxAge: 1000 * 60 * 12,
    httpOnly: true,
  }).json(user);

});

module.exports = router;
