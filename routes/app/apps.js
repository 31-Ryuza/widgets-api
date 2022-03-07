const express = require('express');
const app = require('../../services/app/apps');
const router = express.Router();

/* GET apps index */
router.get('/', async (req, res, next) => {
  res.json(await app.index(req.userId));
});

/* POST apps store */
router.post('/', async (req, res, next) => {
  const payload = { name, logo, type } = req.body;
  app.store(payload)
  res.sendStatus(200);
});

/* GET apps show */
router.get('/show', async (req, res, next) => {
  res.json(await app.show(req.appId))
});

/* Get apps datatable */
router.get('/datatable', async (req, res, next) => {
  const payload = {limit, offset, order} = req.query
  const data = await app.datatable({...payload, id: req.userId, filter: req.filter});
  res.json({
    widget_title: 'List Apps',
    widget_data: {
      t_head: {
        id: 'Id',
        name: 'Name',
        logo: 'Logo',
        type: 'Type',
      },
      t_body: data,
      order_col: ['id', 'name', 'logo', 'type'],
      total_data: (await app.totalData(req.userId, req.filter)).total_data,
      base_endpoint: `${process.env.BASE_URL}/apps/datatable`,
    }
  })
})

module.exports = router;
