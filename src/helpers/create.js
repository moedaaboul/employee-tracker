const { connection } = require('../../db/connect');
const cTable = require('console.table');

const addDepartment = (name) => {
  let str = 'INSERT INTO department (name) VALUES (?)';
  connection.query(str, name, (err) => {
    if (err) throw err;
  });
};

const addRole = (title, department_id, salary) => {
  let str = 'INSERT INTO role (title, department_id, salary) VALUES (?, ?, ?)';
  connection.query(str, [title, department_id, salary], (err) => {
    if (err) throw err;
  });
};

const addEmployee = (first_name, last_name, role_id, manager_id) => {
  let str =
    'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
  connection.query(str, [first_name, last_name, role_id, manager_id], (err) => {
    if (err) throw err;
  });
};

module.exports = {
  addRole,
  addEmployee,
  addDepartment,
};
