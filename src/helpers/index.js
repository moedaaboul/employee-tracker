const { addRole, addEmployee, addDepartment } = require('./create');
const {
  viewDepartments,
  viewEmployees,
  viewRoles,
  viewBudget,
  viewEmployeesbyManager,
  viewEmployeesbyDepartment,
} = require('./read');
const { updateEmployeeRole, updateEmployeeManager } = require('./update');
const { deleteDepartment, deleteEmployee, deleteRole } = require('./delete');

module.exports = {
  addRole,
  addEmployee,
  addDepartment,
  viewDepartments,
  viewEmployees,
  viewRoles,
  viewBudget,
  viewEmployeesbyManager,
  viewEmployeesbyDepartment,
  updateEmployeeRole,
  updateEmployeeManager,
  deleteDepartment,
  deleteEmployee,
  deleteRole,
};
