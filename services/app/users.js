const pool = require('../../database/db');
const fields = ['id', 'identifier', 'name', 'email', 'is_active', 'created_at', 'updated_at'];

const index = async (appId) => {
  return await pool.query(`SELECT ${fields} FROM users WHERE deleted_at IS NULL AND app_id = ?`, [appId]);
}

const show = async (id) => (await pool.query(`SELECT ${fields} FROM users WHERE deleted_at IS NULL AND id = ?`, [id]))[0];

const store = async ({identifier, name, email, password, is_active, app_id}) => {
  const payload = {identifier, name, email, password, is_active, app_id};
  return await pool.query('INSERT INTO users SET ?', [payload]);
};


const datatable = async ({limit, offset, order, appId}) => {
  const queryLimit = limit ? 'LIMIT ?' : '';
  const queryOffset = offset ? 'OFFSET ?' : '';
  const queryOrder = order ? `ORDER BY ${order}` : '';
  return await pool.query(`SELECT ${fields} FROM users WHERE deleted_at IS NULL AND app_id = ? ${queryOrder} ${queryLimit} ${queryOffset}`, [appId, Number(limit) , Number(offset)]);
}

const totalData = async (appId) => (await pool.query(`SELECT COUNT(*) AS total_data FROM users WHERE app_id = ? AND deleted_at IS NULL`, [appId]))[0]
module.exports = {
  index,
  store,
  show,
  datatable,
  totalData,
}