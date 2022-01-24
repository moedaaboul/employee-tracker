const { connection } = require('../../db/connect');
const cTable = require('console.table');

const updateEmployeeRole = (role_id, first_name, last_name) => {
  let str =
    'UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?';
  connection.query(str, [role_id, first_name, last_name], (err) => {
    if (err) throw err;
  });
};

const updateEmployeeManager = (manager_id, employee) => {
  let str = `UPDATE employee SET manager_id = ? WHERE CONCAT(first_name,' ',last_name) = ?`;
  connection.query(str, [manager_id, employee], (err) => {
    if (err) throw err;
  });
};

module.exports = {
  updateEmployeeRole,
  updateEmployeeManager,
};
