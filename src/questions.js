const managerQuestions = [
  {
    type: 'input',
    message: 'Enter the team manager name',
    name: 'name',
    validate: isRequired,
  },
  {
    type: 'input',
    message: 'Enter the manager employee ID',
    name: 'id',
    validate: isRequired,
  },
  {
    type: 'input',
    message: 'Enter the manager email address',
    name: 'email',
    validate: isEmail,
  },
  {
    type: 'input',
    message: 'What the manager office number',
    name: 'officeNumber',
    validate: isRequired,
  },
];

const engineerQuestions = [
  {
    type: 'input',
    message: 'Enter the employee name',
    name: 'name',
    validate: isRequired,
  },
  {
    type: 'input',
    message: 'Enter the employee ID',
    name: 'id',
    validate: isRequired,
  },
  {
    type: 'input',
    message: 'Enter the employee email address',
    name: 'email',
    validate: isEmail,
  },
  {
    type: 'input',
    message: 'What is your github account name?',
    name: 'github',
    validate: isRequired,
  },
];

const internQuestions = [
  {
    type: 'input',
    message: 'Enter the employee name',
    name: 'name',
    validate: isRequired,
  },
  {
    type: 'input',
    message: 'Enter the employee ID',
    name: 'id',
    validate: isRequired,
  },
  {
    type: 'input',
    message: 'Enter the employee email address',
    name: 'email',
    validate: isEmail,
  },
  {
    type: 'input',
    message: 'What is your school name?',
    name: 'school',
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
  engineerQuestions,
  internQuestions,
  managerQuestions,
  furtherActionQuestion,
};
