const pool = require('../../database/db');
const fields = [
  'a.id',
  'a.name',
  'a.logo',
  'a.type',
  'a.created_at',
  'a.updated_at',
];

const index = async (id) => {
  return await pool.query(
    `SELECT ${fields} FROM apps a INNER JOIN app_user au ON a.id = au.app_id WHERE a.deleted_at IS NULL AND au.user_id = ?`,
    [id]
  );
};

const show = async (id) =>
  (
    await pool.query(
      `SELECT ${fields} FROM apps a WHERE a.deleted_at IS NULL AND a.id IN (?)`,
      [id]
    )
  )[0];

const store = async ({ name, logo, type }) => {
  const payload = { name, logo, type };
  return await pool.query('INSERT INTO apps SET ?', [payload]);
};

const datatable = async ({ limit, offset, order, id, filter }) => {
  const queryLimit = limit ? 'LIMIT ?' : '';
  const queryOffset = offset ? 'OFFSET ?' : '';
  const queryOrder = order ? `ORDER BY a.${order}` : '';
  
  
  let paramsSelect = [' AND au.user_id = ?'];
  let paramsValue = [id];
  if (filter.app_list_selected?.id) {
    paramsSelect = [...paramsSelect, ' AND a.id = ?'];
    paramsValue = [...paramsValue, filter.app_list_selected.id];
  }
  paramsSelect = paramsSelect.toString().replaceAll(',', '');

  return await pool.query(
    `SELECT ${fields} FROM apps a INNER JOIN app_user au ON a.id = au.app_id WHERE a.deleted_at IS NULL ${paramsSelect} ${queryOrder} ${queryLimit} ${queryOffset}`,
    [...paramsValue, Number(limit), Number(offset)]
  );
};

const totalData = async (id, filter) => {  
  let paramsSelect = [' AND au.user_id = ?'];
  let paramsValue = [id];
  if (filter.app_list_selected?.id) {
    paramsSelect = [...paramsSelect, ' AND a.id = ?'];
    paramsValue = [...paramsValue, filter.app_list_selected.id];
  }
  paramsSelect = paramsSelect.toString().replaceAll(',', '');
  
  return (
    await pool.query(
      `SELECT COUNT(*) AS total_data FROM apps a INNER JOIN app_user au ON a.id = au.app_id WHERE a.deleted_at IS NULL ${paramsSelect}`,
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
