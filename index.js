const connection = require('./db/connect');
const cTable = require('console.table');

// View all departments
let allDepartmentsSql = 'SELECT * FROM `department`';

connection.query(allDepartmentsSql, (err, results) => {
  if (err) throw err;
  console.table(results); // results contains rows returned by server
});

// View all employees
let allEmployeesSql = 'SELECT * FROM `employee`';

connection.query(allEmployeesSql, (err, results) => {
  if (err) throw err;
  console.table(results); // results contains rows returned by server
});

// View all roles
let allRolesSql = 'SELECT * FROM `role`';

connection.query(allRolesSql, (err, results) => {
  if (err) throw err;
  console.table(results); // results contains rows returned by server
});
