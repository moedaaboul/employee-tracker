const isRequired = require('../validate');

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

const addDepartmentQuestion = [
  {
    type: 'input',
    message: 'What is the name of the department?',
    name: 'name',
    validate: isRequired,
  },
];

module.exports = {
  addEmployeeQuestions,
  addRoleQuestions,
  addDepartmentQuestion,
};
