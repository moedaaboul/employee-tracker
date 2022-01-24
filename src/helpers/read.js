const { connection } = require('../../db/connect');
const cTable = require('console.table');

// View all departments
const viewDepartments = () => {
  let str = 'SELECT * FROM department';
  connection.query(str, (err, results) => {
    if (err) throw err;
    console.table(results); // results contains rows returned by server
  });
};

// View all employees
const viewEmployees = () => {
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
const viewRoles = () => {
  let str = `SELECT role.id, role.title, department.name as department, role.salary  
    FROM role 
    JOIN department ON role.department_id = department.id;`;
  connection.query(str, (err, results) => {
    if (err) throw err;
    console.table(results); // results contains rows returned by server
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

module.exports = {
  viewDepartments,
  viewEmployees,
  viewRoles,
  viewBudget,
  viewEmployeesbyManager,
  viewEmployeesbyDepartment,
};
