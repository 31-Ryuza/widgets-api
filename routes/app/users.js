const express = require('express');
const user = require('../../services/app/users');
const bcrypt = require('bcrypt');
const router = express.Router();

/* GET users index */
router.get('/', async (req, res, next) => {
  res.json(await user.index());
});

/* POST users store */
router.post('/', async (req, res, next) => {
  const saltRounds = 10;
  const { identifier, password, name, email, is_active } = req.body;
  
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (err) res.sendStatus(500);
    const payload = {
      identifier,
      name,
      email,
      password: hash,
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

/* GET users show */
router.get('/show', async (req, res, next) => {
  res.json(await user.show(req.userId))
});

/* Get users datatable */
router.get('/datatable', async (req, res, next) => {
  const data = await user.datatable(req.query);
  res.json({
    widget_title: 'List Users',
    widget_data: {
      t_head: {
        id: 'id',
        identifier: 'Username',
        name: 'Name',
        email: 'Email',
        is_active: 'Status',      
      },
      t_body: data,
      order_col: ['id', 'identifier', 'name', 'email', 'is_active'],
      total_data: (await user.totalData()).total_data,
      base_endpoint: `${process.env.BASE_URL}/users/datatable`,
    }
  })
})
module.exports = router;
