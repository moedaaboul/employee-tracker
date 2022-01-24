const {
  addEmployeeQuestions,
  addRoleQuestions,
  addDepartmentQuestion,
} = require('./create');
const {
  viewEmployeesbyManagerQuestion,
  viewEmployeesbyDepartmentQuestion,
} = require('./read');
const {
  updateEmployeeRoleQuestions,
  updateEmployeeManagerQuestions,
} = require('./update');
const {
  deleteDepartmentQuestion,
  deleteRoleQuestion,
  deleteEmployeeQuestion,
} = require('./delete');

const furtherActionQuestion = [
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'action',
    choices: [
      'Add Department',
      'Add Role',
      'Add Employee',
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'View Utilised Budget',
      'View employees by manager',
      'View employees by department',
      'Update Employee Role',
      'Update Employee Manager',
      'Delete Department',
      'Delete Employee',
      'Delete Role',
      'Quit',
    ],
  },
];

module.exports = {
  addDepartmentQuestion,
  addRoleQuestions,
  addEmployeeQuestions,
  viewEmployeesbyManagerQuestion,
  viewEmployeesbyDepartmentQuestion,
  updateEmployeeRoleQuestions,
  updateEmployeeManagerQuestions,
  deleteDepartmentQuestion,
  deleteRoleQuestion,
  deleteEmployeeQuestion,
  furtherActionQuestion,
};
