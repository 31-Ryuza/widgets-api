const pool = require('../database/db');

const index = async () => {
  return await pool.query('SELECT * FROM users');
}

const store = async (payload) => {
  return await pool.query('INSERT INTO users SET ?', payload);
};

module.exports = {
  index,
  store
}