const connection = require('../db/connect');
const cTable = require('console.table');

// View all departments
const ViewDepartments = () => {
  let str = 'SELECT * FROM department';
  return connection.query(str, (err, results) => {
    if (err) throw err;
    console.table(results); // results contains rows returned by server
  });
};

// View all employees
const ViewEmployees = () => {
  let str = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name as department, role.salary, CONCAT(e2.first_name, ' ', e2.last_name) AS Manager
  FROM employee 
  JOIN role ON employee.role_id = role.id
  JOIN department ON department.id = role.department_id
  LEFT JOIN employee e2 ON employee.manager_id = e2.id`;
  return connection.query(str, (err, results) => {
    if (err) throw err;
    console.table(results); // results contains rows returned by server
  });
};

// View all roles
const ViewRoles = () => {
  let str = `SELECT role.id, role.title, department.name as department, role.salary  
    FROM role 
    JOIN department ON role.department_id = department.id;`;
  return connection.query(str, (err, results) => {
    if (err) throw err;
    console.table(results); // results contains rows returned by server
  });
};

const addDepartment = (name) => {
  let str = 'INSERT INTO department (name) VALUES (?)';
  return connection.query(str, name, (err) => {
    if (err) throw err;
  });
};

const addRole = (title, department_id, salary) => {
  let str = 'INSERT INTO role (title, department_id, salary) VALUES (?, ?, ?)';
  return connection.query(str, [title, department_id, salary], (err) => {
    if (err) throw err;
  });
};

const addEmployee = (first_name, last_name, role_id, manager_id) => {
  let str =
    'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
  return connection.query(
    str,
    [first_name, last_name, role_id, manager_id],
    (err) => {
      if (err) throw err;
    }
  );
};

const updateEmployeeRole = (role_id, first_name, last_name) => {
  let str =
    'UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?';
  return connection.query(str, [role_id, first_name, last_name], (err) => {
    if (err) throw err;
  });
};

module.exports = {
  ViewDepartments,
  ViewEmployees,
  ViewRoles,
  addRole,
  addEmployee,
  addDepartment,
  updateEmployeeRole,
};
