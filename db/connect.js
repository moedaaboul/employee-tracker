require('dotenv').config();
const mysql = require('mysql2');
const { promisify } = require('util');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASS,
  database: 'department_db',
  multipleStatements: true,
});

const promiseQuery = promisify(connection.query).bind(connection);

module.exports = { connection, promiseQuery };
