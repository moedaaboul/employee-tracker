const connection = require('./db/connect');
const cTable = require('console.table');
const {
  ViewDepartments,
  ViewEmployees,
  ViewRoles,
  addRole,
  addEmployee,
  addDepartment,
  updateEmployeeRole,
} = require('./src/helpers');

ViewDepartments();
ViewEmployees();
ViewRoles();
addDepartment('Capital Markets');
addRole('Lawyer', 3, 80000);
addEmployee('John', 'Doe', 1, 1);
updateEmployeeRole(2, 'John', 'Doe');
ViewEmployees();
