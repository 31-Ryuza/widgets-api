const pool = require('../../database/db');
const fields = ['id', 'identifier', 'name', 'email', 'is_active', 'created_at', 'updated_at'];

const index = async () => {
  return await pool.query(`SELECT ${fields} FROM users WHERE deleted_at IS NULL`);
}

const show = async (id) => (await pool.query(`SELECT ${fields} FROM users WHERE deleted_at IS NULL AND id = ?`, [id]))[0];

const store = async (payload) => {
  return await pool.query('INSERT INTO users SET ?', payload);
};


const datatable = async ({limit, offset, order}) => {
  const queryLimit = limit ? 'LIMIT ?' : '';
  const queryOffset = offset ? 'OFFSET ?' : '';
  const queryOrder = order ? `ORDER BY ${order}` : '';
  return await pool.query(`SELECT ${fields} FROM users WHERE deleted_at IS NULL ${queryOrder} ${queryLimit} ${queryOffset}`, [Number(limit) , Number(offset)]);
}

const totalData = async () => (await pool.query(`SELECT COUNT(*) AS total_data FROM users WHERE deleted_at IS NULL`))[0]
module.exports = {
  index,
  store,
  show,
  datatable,
  totalData,
}