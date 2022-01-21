const { connection, promiseQuery } = require('./db/connect');
const cTable = require('console.table');
const inquirer = require('inquirer');
const {
  addEmployeeQuestions,
  addRoleQuestions,
  addDepartmentQuestion,
  furtherActionQuestion,
  updateEmployeeRoleQuestions,
} = require('./src/questions');

const {
  ViewDepartments,
  ViewEmployees,
  ViewRoles,
  addRole,
  addEmployee,
  addDepartment,
  updateEmployeeRole,
} = require('./src/helpers');

// ViewDepartments();
// ViewEmployees();
// ViewRoles();
// addDepartment('Capital Markets');
// addRole('Lawyer', 3, 80000);
// addEmployee('John', 'Doe', 1, 1);
// updateEmployeeRole(2, 'John', 'Doe');
// ViewEmployees();

let departments = [];
let getDepartmentsResults;
let roles = [];
let getRolesResults;
let employees = [];
let getEmployeesResults;

const init = async () => {
  const getDepartmentsQuery = `SELECT * FROM department_db.department;`;
  getDepartmentsResults = await promiseQuery(getDepartmentsQuery);
  departments = getDepartmentsResults.map((e) => e.name);
  const getRolesQuery = `SELECT * FROM department_db.role;`;
  getRolesResults = await promiseQuery(getRolesQuery);
  roles = getRolesResults.map((e) => e.title);
  const getEmployeesQuery = `SELECT id, CONCAT(first_name, ' ', last_name) AS full_name FROM department_db.employee;`;
  getEmployeesResults = await promiseQuery(getEmployeesQuery);
  employees = getEmployeesResults.map((e) => e.full_name);
  const { action } = await inquirer.prompt(furtherActionQuestion);
  await generateAction(action);
};

const generateAction = async (action) => {
  if (action === 'View All Departments') {
    ViewDepartments();
    init();
  } else if (action === 'View All Roles') {
    ViewRoles();
    init();
  } else if (action === 'View All Employees') {
    ViewEmployees();
    init();
  } else if (action === 'Add Department') {
    const { name } = await inquirer.prompt(addDepartmentQuestion);
    addDepartment(name);
    console.log(`Added ${name} to the database`);
    init();
  } else if (action === 'Add Role') {
    const { name, department, salary } = await inquirer.prompt(
      addRoleQuestions(departments)
    );
    const [{ id }] = getDepartmentsResults.filter((e) => e.name === department);
    addRole(name, id, salary);
    console.log(`Added ${name} to the database`);
    init();
  } else if (action === 'Add Employee') {
    const { firstName, lastName, role, manager } = await inquirer.prompt(
      addEmployeeQuestions(roles, employees)
    );
    const [{ id: role_id }] = getRolesResults.filter((e) => e.title === role);
    const [{ id: manager_id }] = getEmployeesResults.filter(
      (e) => e.full_name === manager
    );
    addEmployee(firstName, lastName, role_id, manager_id);
    console.log(`Added ${firstName} ${lastName} to the database`);
    init();
  } else if (action === 'Quit') {
    process.exit(0);
  } else if (action === 'Update Employee Role') {
    const { fullName, assignTo } = await inquirer.prompt(
      updateEmployeeRoleQuestions(employees, roles)
    );
    const [{ id: role_id }] = getRolesResults.filter(
      (e) => e.title === assignTo
    );
    const first_name = fullName.split(' ')[0];
    const last_name = fullName.split(' ')[1];
    updateEmployeeRole(role_id, first_name, last_name);
    console.log(`Updated employee's role`);
    init();
  }
};

init();
