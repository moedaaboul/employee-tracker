const { connection, promiseQuery } = require('../db/connect');
const cTable = require('console.table');

// View all departments
const ViewDepartments = () => {
  let str = 'SELECT * FROM department';
  connection.query(str, (err, results) => {
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
  connection.query(str, (err, results) => {
    if (err) throw err;
    console.table(results); // results contains rows returned by server
  });
};

const viewEmployeesbyManager = (name) => {
  let str = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name as department, role.salary, CONCAT(e2.first_name, ' ', e2.last_name) AS Manager
  FROM employee 
  JOIN role ON employee.role_id = role.id
  JOIN department ON department.id = role.department_id
  LEFT JOIN employee e2 ON employee.manager_id = e2.id
  WHERE CONCAT(e2.first_name, ' ', e2.last_name)  = ?;`;
  connection.query(str, name, (err, results) => {
    if (err) throw err;
    if (results.length) {
      console.table(results); // results contains rows returned by server
    }
    console.log(`There are ${results.length} employees reporting to ${name}`);
  });
};

const viewEmployeesbyDepartment = (department) => {
  let str = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name as department, role.salary, CONCAT(e2.first_name, ' ', e2.last_name) AS Manager
  FROM employee 
  JOIN role ON employee.role_id = role.id
  JOIN department ON department.id = role.department_id
  LEFT JOIN employee e2 ON employee.manager_id = e2.id
  WHERE department.name  = ?;`;
  connection.query(str, department, (err, results) => {
    if (err) throw err;
    if (results.length) {
      console.table(results); // results contains rows returned by server
    }
    console.log(`There are ${results.length} employees in ${department}`);
  });
};

// View all roles
const ViewRoles = () => {
  let str = `SELECT role.id, role.title, department.name as department, role.salary  
    FROM role 
    JOIN department ON role.department_id = department.id;`;
  connection.query(str, (err, results) => {
    if (err) throw err;
    console.table(results); // results contains rows returned by server
  });
};

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

const updateEmployeeRole = (role_id, first_name, last_name) => {
  let str =
    'UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?';
  connection.query(str, [role_id, first_name, last_name], (err) => {
    if (err) throw err;
  });
};

const updateEmployeeManager = (manager_id, employee) => {
  let str = `UPDATE employee SET manager_id = ? WHERE CONCAT(first_name,' ',last_name) = ?`;
  connection.query(str, [manager_id, employee], (err) => {
    if (err) throw err;
  });
};

// view utilised budget
const viewBudget = () => {
  let str = `SELECT d.name as department, SUM(r.salary) as utitlized_budget
  FROM employee as e
  JOIN role as r ON e.role_id = r.id
  JOIN department as d ON d.id = r.department_id
  LEFT JOIN employee as e2 ON e.manager_id = e2.id
  GROUP BY department;`;
  connection.query(str, (err, results) => {
    if (err) throw err;
    console.table(results); // results contains rows returned by server
  });
};

const deleteDepartment = (name) => {
  let str = 'DELETE FROM department WHERE name = ?';
  connection.query(str, name, (err) => {
    if (err) throw err;
  });
};

const deleteEmployee = (employee) => {
  let str = `DELETE FROM employee WHERE CONCAT(first_name, ' ', last_name) = ?`;
  connection.query(str, employee, (err) => {
    if (err) throw err;
  });
};

const deleteRole = (title) => {
  let str = 'DELETE FROM role WHERE title = ?';
  connection.query(str, title, (err) => {
    if (err) throw err;
  });
};

module.exports = {
  ViewDepartments,
  ViewEmployees,
  ViewRoles,
  viewBudget,
  addRole,
  addEmployee,
  addDepartment,
  updateEmployeeRole,
  updateEmployeeManager,
  deleteDepartment,
  deleteEmployee,
  deleteRole,
  viewEmployeesbyManager,
  viewEmployeesbyDepartment,
};
