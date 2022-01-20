// should require managers
let managers = [];
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

const addEmployeeQuestions = [
  {
    type: 'input',
    message: `What is the employee's first name?`,
    name: 'firstName',
    validate: isRequired,
  },
  {
    type: 'input',
    message: 'What is the salary of the role?',
    name: 'lastName',
    validate: isRequired,
  },
  {
    type: 'input',
    message: `What is the employee's role?`,
    name: 'role',
    choices: roles,
  },
  {
    type: 'input',
    message: `Who is the employee's manager?`,
    name: 'manager',
    choices: ['None', ...managers],
  },
];

const addRoleQuestions = [
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
    type: 'input',
    message: 'Which department does the role belong to?',
    name: 'department',
    choices: departments,
  },
];

const updateEmployeeRoleQuestions = [
  {
    type: 'list',
    message: `Which employee's role do you want to update`,
    name: 'role',
    choices: managers,
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
    ],
  },
];

module.exports = {
  addEmployeeQuestions,
  addRoleQuestions,
  addDepartmentQuestion,
  furtherActionQuestion,
  updateEmployeeRoleQuestions,
};
