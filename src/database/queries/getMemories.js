const db = require('../db_connection');

const getMemoriesQuery = name => {
  return db
    .query('SELECT * FROM diary WHERE (name)=$1', [name])
    .then(dbRes => dbRes.rows)
    .catch(err => console.log('Error: ', err));
};

module.exports = getMemoriesQuery;
