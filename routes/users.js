const express = require('express');
const user = require('../services/users');
const bcrypt = require('bcrypt');

const router = express.Router();

/* GET users */
router.get('/', async (req, res, next) => {
  console.log(`your cookie: ${JSON.stringify(req.cookies)}`)
  res.json(await user.index());
});

/* POST users */
router.post('/', async (req, res, next) => {
  const saltRounds = 10;
  const { identifier, password, email, is_active } = req.body;
  
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (err) res.sendStatus(500);
    const payload = {
      identifier: `${identifier}`,
      password: hash,
      email: `${email}`,
      is_active: is_active || 1,
    };

    try {
      await user.store(payload);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  });
});

module.exports = router;
