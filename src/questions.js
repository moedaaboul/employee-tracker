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

const updateEmployeeManagerQuestions = (employees, managers) => [
  {
    type: 'list',
    message: `Which employee do you want to update?`,
    name: 'employee',
    choices: employees,
  },
  {
    type: 'list',
    message: 'Which manager do you want to assign this employee?',
    name: 'manager',
    choices: managers,
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

const deleteRoleQuestion = (roles) => [
  {
    type: 'list',
    message: 'Which role do you want to delete?',
    name: 'role',
    choices: roles,
  },
];

const deleteEmployeeQuestion = (employees) => [
  {
    type: 'list',
    message: 'Which employee do you want to delete?',
    name: 'employee',
    choices: employees,
  },
];

const viewEmployeesbyManagerQuestion = (managers) => [
  {
    type: 'list',
    message: 'Select Manager to view employees by this Manager?',
    name: 'manager',
    choices: managers,
  },
];

const viewEmployeesbyDepartmentQuestion = (departments) => [
  {
    type: 'list',
    message: 'Select Department to view employees for?',
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
      'Update Employee Manager',
      'View All Roles',
      'Add Role',
      'View All Departments',
      'Add Department',
      'Quit',
      'View All Employees',
      'View Utilised Budget',
      'Delete Department',
      'Delete Employee',
      'Delete Role',
      'View employees by manager',
      'View employees by department',
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
  deleteRoleQuestion,
  deleteEmployeeQuestion,
  viewEmployeesbyManagerQuestion,
  viewEmployeesbyDepartmentQuestion,
  updateEmployeeManagerQuestions,
};
