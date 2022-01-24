const { connection, promiseQuery } = require('./db/connect');
const cTable = require('console.table');
const inquirer = require('inquirer');
const {
  addRoleQuestions,
  addEmployeeQuestions,
  addDepartmentQuestion,
  viewEmployeesbyManagerQuestion,
  viewEmployeesbyDepartmentQuestion,
  updateEmployeeRoleQuestions,
  updateEmployeeManagerQuestions,
  deleteRoleQuestion,
  deleteEmployeeQuestion,
  deleteDepartmentQuestion,
  furtherActionQuestion,
} = require('./src/questions');

const {
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
  const getRolesQuery = `SELECT * FROM department_db.role;`;
  const getEmployeesQuery = `SELECT id, CONCAT(first_name, ' ', last_name) AS full_name FROM department_db.employee;`;
  getDepartmentsResults = await promiseQuery(getDepartmentsQuery);
  getRolesResults = await promiseQuery(getRolesQuery);
  getEmployeesResults = await promiseQuery(getEmployeesQuery);
  departments = getDepartmentsResults.map((e) => e.name);
  roles = getRolesResults.map((e) => e.title);
  employees = getEmployeesResults.map((e) => e.full_name);
  const { action } = await inquirer.prompt(furtherActionQuestion);
  await generateAction(action);
};

const generateAction = async (action) => {
  if (action === 'View All Departments') {
    viewDepartments();
    init();
  } else if (action === 'View All Roles') {
    viewRoles();
    init();
  } else if (action === 'View All Employees') {
    viewEmployees();
    init();
  } else if (action === 'View Utilised Budget') {
    viewBudget();
    init();
  } else if (action === 'View employees by manager') {
    const { manager } = await inquirer.prompt(
      viewEmployeesbyManagerQuestion(employees)
    );
    viewEmployeesbyManager(manager);
    init();
  } else if (action === 'View employees by department') {
    const { department } = await inquirer.prompt(
      viewEmployeesbyDepartmentQuestion(departments)
    );
    viewEmployeesbyDepartment(department);
    init();
  } else if (action === 'Add Department') {
    const { name } = await inquirer.prompt(addDepartmentQuestion);
    addDepartment(name);
    console.log(`Added ${name} to the database`);
    init();
  } else if (action === 'Delete Department') {
    const { department } = await inquirer.prompt(
      deleteDepartmentQuestion(departments)
    );
    deleteDepartment(department);
    console.log(`Deleted ${department} from the database`);
    init();
  } else if (action === 'Delete Employee') {
    const { employee } = await inquirer.prompt(
      deleteEmployeeQuestion(employees)
    );
    deleteEmployee(employee);
    console.log(`Deleted ${employee} from the database`);
    init();
  } else if (action === 'Delete Role') {
    const { role } = await inquirer.prompt(deleteRoleQuestion(roles));
    deleteRole(role);
    console.log(`Deleted ${role} from the database`);
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
  } else if (action === 'Update Employee Manager') {
    // need to split this prompt to filter employee from manager list
    // or validator
    // moves schema and seeds to db folder
    // create CREATE READ UPDATE DELETE folders to modularise file
    // CHALK
    // ADD TEST
    const { employee, manager } = await inquirer.prompt(
      updateEmployeeManagerQuestions(employees, employees)
    );
    const [{ id: manager_id }] = getEmployeesResults.filter(
      (e) => e.full_name === manager
    );
    updateEmployeeManager(manager_id, employee);
    console.log(`Updated manager`);
    init();
  }
};

init();
