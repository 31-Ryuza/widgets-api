const pool = require('../../database/db');
const fields = [
  'u.id',
  'u.identifier',
  'u.name',
  'u.email',
  'u.is_active',
  'u.created_at',
  'u.updated_at',
];

const index = async (appId) => {
  return await pool.query(
    `SELECT ${fields} FROM users u INNER JOIN app_user au ON u.id = au.user_id WHERE u.deleted_at IS NULL AND au.app_id IN (?)`,
    [appId]
  );
};

const show = async (id) =>
  (
    await pool.query(
      `SELECT ${fields} FROM users u WHERE u.deleted_at IS NULL AND u.id = ?`,
      [id]
    )
  )[0];

const store = async ({ identifier, name, email, password, is_active }) => {
  const payload = { identifier, name, email, password, is_active };
  return await pool.query('INSERT INTO users SET ?', [payload]);
};

const datatable = async ({ limit, offset, order, appId, filter }) => {
  const queryLimit = limit ? 'LIMIT ?' : '';
  const queryOffset = offset ? 'OFFSET ?' : '';
  const queryOrder = order ? `ORDER BY u.${order}` : '';

  let paramsSelect = [' AND au.app_id IN (?)'];
  let paramsValue = [appId];
  if (filter.app_list_selected?.id) {
    paramsSelect = [...paramsSelect, ' AND au.app_id = ?'];
    paramsValue = [...paramsValue, filter.app_list_selected.id];
  }
  paramsSelect = paramsSelect.toString().replaceAll(',', '');

  return await pool.query(
    `SELECT ${fields} FROM users u INNER JOIN app_user au ON u.id = au.user_id WHERE u.deleted_at IS NULL ${paramsSelect} ${queryOrder} ${queryLimit} ${queryOffset}`,
    [...paramsValue, Number(limit), Number(offset)]
  );
};

const totalData = async (appId, filter) => {
  let paramsSelect = [' AND au.app_id IN (?)'];
  let paramsValue = [appId];
  if (filter.app_list_selected?.id) {
    paramsSelect = [...paramsSelect, ' AND au.app_id = ?'];
    paramsValue = [...paramsValue, filter.app_list_selected.id];
  }
  paramsSelect = paramsSelect.toString().replaceAll(',', '');

  return (
    await pool.query(
      `SELECT COUNT(*) AS total_data FROM users u INNER JOIN app_user au ON u.id = au.user_id WHERE u.deleted_at IS NULL ${paramsSelect}`,
      [...paramsValue]
    )
  )[0];
}

module.exports = {
  index,
  store,
  show,
  datatable,
  totalData,
};
