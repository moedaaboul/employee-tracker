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

module.exports = {
  deleteDepartmentQuestion,
  deleteRoleQuestion,
  deleteEmployeeQuestion,
};
