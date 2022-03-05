const pool = require('../database/db');

const login = async (identifier) => {
  return (
    await pool.query('SELECT id, identifier, password, name, email, app_id FROM users WHERE identifier = ? LIMIT 1', [
      identifier,
    ])
  )[0];
};

module.exports = {
  login,
};
