const connection = require('./db/connect');

// simple query
let sqlQuery = 'CREATE DATABASE notedatabase';

connection.query(sqlQuery, (err, results) => {
  if (err) throw err;
  console.log('Database created'); // results contains rows returned by server
});
