// should require managers
// const { managers, departments, roles } = require('../index');
const isRequired = require('./validate');

const addEmployeeQuestions = (roles, managers) => [
  {
    type: 'input',
    message: `What is the employee's first name?`,
    name: 'firstName',
    validate: isRequired,
  },
  {
    type: 'input',
    message: `What is the employee's last name?`,
    name: 'lastName',
    validate: isRequired,
  },
  {
    type: 'list',
    message: `What is the employee's role?`,
    name: 'role',
    choices: roles,
  },
  {
    type: 'list',
    message: `Who is the employee's manager?`,
    name: 'manager',
    choices: managers,
  },
];

const addRoleQuestions = (departments) => [
  {
    type: 'input',
    message: 'What is the name of the role?',
    name: 'name',
    validate: isRequired,
  },
  {
    type: 'input',
    message: 'What is the salary of the role?',
    name: 'salary',
    validate: isRequired,
  },
  {
    type: 'list',
    message: 'Which department does the role belong to?',
    name: 'department',
    choices: departments,
  },
];

const updateEmployeeRoleQuestions = (employees, roles) => [
  {
    type: 'list',
    message: `Which employee's role do you want to update?`,
    name: 'fullName',
    choices: employees,
  },
  {
    type: 'list',
    message: 'Which role do you want to assign the selected employee?',
    name: 'assignTo',
    choices: roles,
  },
];

const addDepartmentQuestion = [
  {
    type: 'input',
    message: 'What is the name of the department?',
    name: 'name',
    validate: isRequired,
  },
];

const deleteDepartmentQuestion = (departments) => [
  {
    type: 'list',
    message: 'Which department do you want to delete?',
    name: 'department',
    choices: departments,
  },
];

const furtherActionQuestion = [
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'action',
    choices: [
      'Add Employee',
      'Update Employee Role',
      'View All Roles',
      'Add Role',
      'View All Departments',
      'Add Department',
      'Quit',
      'View All Employees',
      'View Utilised Budget',
      'Delete Department',
    ],
  },
];

module.exports = {
  addEmployeeQuestions,
  addRoleQuestions,
  addDepartmentQuestion,
  furtherActionQuestion,
  updateEmployeeRoleQuestions,
  deleteDepartmentQuestion,
};
