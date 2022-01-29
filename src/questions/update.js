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

const updateEmployeeManagerFirstQuestion = (employees) => [
  {
    type: 'list',
    message: `Which employee do you want to update?`,
    name: 'employee',
    choices: employees,
  },
];

const updateEmployeeManagerSecondQuestion = (managers) => [
  {
    type: 'list',
    message: 'Which manager do you want to assign this employee?',
    name: 'manager',
    choices: managers,
  },
];

module.exports = {
  updateEmployeeRoleQuestions,
  updateEmployeeManagerFirstQuestion,
  updateEmployeeManagerSecondQuestion,
};
