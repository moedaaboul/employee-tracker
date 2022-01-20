const connection = require('./db/connect');
const cTable = require('console.table');
const inquirer = require('inquirer');
const {
  addEmployeeQuestions,
  addRoleQuestions,
  addDepartmentQuestion,
  furtherActionQuestion,
  updateEmployeeRoleQuestions,
} = require('./src/questions');

const {
  ViewDepartments,
  ViewEmployees,
  ViewRoles,
  addRole,
  addEmployee,
  addDepartment,
  updateEmployeeRole,
} = require('./src/helpers');

let managers = ['none'];
const departments = ['Engineering', 'Finance', 'Legal', 'Sales', 'Service'];
const roles = [
  'Sales Lead',
  'Salesperson',
  'Lead Engineer',
  'Software Engineer',
  'Account Manager',
  'Accountant',
  'Legal Team Lead',
  'Lawyer',
  'Customer Service',
];

ViewDepartments();
ViewEmployees();
ViewRoles();
addDepartment('Capital Markets');
addRole('Lawyer', 3, 80000);
addEmployee('John', 'Doe', 1, 1);
updateEmployeeRole(2, 'John', 'Doe');
ViewEmployees();

module.exports = { managers, departments, roles };
