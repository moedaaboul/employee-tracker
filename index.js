const connection = require('./db/connect');
const cTable = require('console.table');

// simple query
let sql = 'SELECT * FROM `department`';

connection.query(sql, (err, results) => {
  if (err) throw err;
  console.table(results); // results contains rows returned by server
});
