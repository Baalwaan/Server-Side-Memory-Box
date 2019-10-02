const db = require('../db_connection');

const postQuery = (name, log_type, message) => {
  return db
    .query(
      'INSERT INTO diary (name, log_type, message, time_stamp) VALUES ($1, $2, $3, now()) RETURNING *',
      [name, log_type, message]
    )
    .then(dbRes => dbRes.rows)
    .catch(err => console.log('Error: ', err));
};

module.exports = postQuery;
