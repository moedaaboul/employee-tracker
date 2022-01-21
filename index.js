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
const { registerPrompt } = require('inquirer');

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
  getDepartmentsResults = await promiseQuery(getDepartmentsQuery); // use in async function
  // console.log(getDepartmentsResults);
  departments = getDepartmentsResults.map((e) => e.name);
  // console.log(departments);
  const getRolesQuery = `SELECT * FROM department_db.role;`;
  getRolesResults = await promiseQuery(getRolesQuery); // use in async function
  // console.log(getRolesResults);
  roles = getRolesResults.map((e) => e.title);
  // console.log(roles);
  const getEmployeesQuery = `SELECT id, CONCAT(first_name, ' ', last_name) AS full_name FROM department_db.employee;`;
  getEmployeesResults = await promiseQuery(getEmployeesQuery); // use in async function
  // console.log(getEmployeesResults);
  employees = getEmployeesResults.map((e) => e.full_name);
  // console.log(employees);

  const { action } = await inquirer.prompt(furtherActionQuestion);
  await generateAction(action);
  console.log('Successfully created your employee list!');
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
    init();
  } else if (action === 'Add Role') {
    const { name, department, salary } = await inquirer.prompt(
      addRoleQuestions(departments)
    );
    // console.log(getDepartmentsResults);
    // console.log(department);
    const [{ id }] = getDepartmentsResults.filter((e) => e.name === department);
    // console.log(id);
    // need to convert department to department_id
    addRole(name, id, salary);
    init();
  } else if (action === 'Add Employee') {
    const { firstName, lastName, role, manager } = await inquirer.prompt(
      addEmployeeQuestions(roles, employees)
    );
    // console.log(firstName, lastName, role, manager);
    const [{ id: role_id }] = getRolesResults.filter((e) => e.title === role);
    // console.log(role_id);
    const [{ id: manager_id }] = getEmployeesResults.filter(
      (e) => e.full_name === manager
    );
    // console.log(manager_id);
    // need to convert department to department_id
    addEmployee(firstName, lastName, role_id, manager_id);
    init();
  } else if (action === 'Quit') {
    process.exit(0);
  } else if (action === 'Update Employee Role') {
    const { fullName, assignTo } = await inquirer.prompt(
      updateEmployeeRoleQuestions(employees, roles)
    );
    // console.log(fullName, assignTo, getEmployeesResults);
    const [{ id: role_id }] = getRolesResults.filter(
      (e) => e.title === assignTo
    );
    const first_name = fullName.split(' ')[0];
    const last_name = fullName.split(' ')[1];
    // console.log(first_name, last_name);
    // need to convert department to department_id
    updateEmployeeRole(role_id, first_name, last_name);
    init();
  }
};

init();

// module.exports = { managers, departments, roles };
