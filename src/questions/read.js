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

module.exports = {
  viewEmployeesbyManagerQuestion,
  viewEmployeesbyDepartmentQuestion,
};
