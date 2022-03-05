const pool = require('../../database/db');
const fields = ['id', 'name', 'logo', 'type', 'created_at', 'updated_at'];

const index = async () => {
  return await pool.query(`SELECT ${fields} FROM apps WHERE deleted_at IS NULL`);
}

const show = async (id) => (await pool.query(`SELECT ${fields} FROM apps WHERE deleted_at IS NULL AND id = ?`, [id]))[0];

const store = async ({ name, logo, type }) => {
  const payload = { name, logo, type };
  return await pool.query('INSERT INTO apps SET ?', [payload]);
};

const datatable = async ({limit, offset, order}) => {
  const queryLimit = limit ? 'LIMIT ?' : '';
  const queryOffset = offset ? 'OFFSET ?' : '';
  const queryOrder = order ? `ORDER BY ${order}` : '';
  return await pool.query(`SELECT ${fields} FROM apps WHERE deleted_at IS NULL ${queryOrder} ${queryLimit} ${queryOffset}`, [Number(limit) , Number(offset)]);
}

const totalData = async () => (await pool.query(`SELECT COUNT(*) AS total_data FROM apps WHERE deleted_at IS NULL`))[0]
module.exports = {
  index,
  store,
  show,
  datatable,
  totalData,
}