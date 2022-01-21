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

// let managers = ['none', 'Json'];
// const departments = ['Engineering', 'Finance', 'Legal', 'Sales', 'Service'];
// const roles = [
//   'Sales Lead',
//   'Salesperson',
//   'Lead Engineer',
//   'Software Engineer',
//   'Account Manager',
//   'Accountant',
//   'Legal Team Lead',
//   'Lawyer',
//   'Customer Service',
// ];

// ViewDepartments();
// ViewEmployees();
// ViewRoles();
// addDepartment('Capital Markets');
// addRole('Lawyer', 3, 80000);
// addEmployee('John', 'Doe', 1, 1);
// updateEmployeeRole(2, 'John', 'Doe');
// ViewEmployees();

const init = async () => {
  const query = `SELECT * FROM department_db.department;`;
  const result = await promiseQuery(query); // use in async function
  const departments = result.map((e) => e.name);
  console.log(departments);
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
      addRoleQuestions
    );
    // need to convert department to department_id
    addRole(name, 2, salary);
    init();
  } else if (action === 'Add Employee') {
    const { firstName, lastName, role, manager } = await inquirer.prompt(
      addEmployeeQuestions
    );
    // need to convert department to department_id
    addEmployee(firstName, lastName, 1, 1);
    init();
  } else if (action === 'Quit') {
    process.exit(0);
  } else if (action === 'Update Employee Role') {
    const { fullName, assignTo } = await inquirer.prompt(
      updateEmployeeRoleQuestions
    );

    const first_name = fullName.split(' ')[0];
    const last_name = fullName.split(' ')[1];
    console.log(first_name, last_name);
    // need to convert department to department_id
    updateEmployeeRole(3, first_name, last_name);
    init();
  }
};

init();

// module.exports = { managers, departments, roles };
