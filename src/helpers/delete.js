const { connection } = require('../../db/connect');
const cTable = require('console.table');

const deleteDepartment = (name) => {
  let str = 'DELETE FROM department WHERE name = ?';
  connection.query(str, name, (err) => {
    if (err) throw err;
  });
};

const deleteEmployee = (employee) => {
  let str = `DELETE FROM employee WHERE CONCAT(first_name,' ', last_name) = ?`;
  connection.query(str, employee, (err) => {
    if (err) throw err;
  });
};

const deleteRole = (title) => {
  let str = 'DELETE FROM role WHERE title = ?';
  connection.query(str, title, (err) => {
    if (err) throw err;
  });
};

module.exports = {
  deleteDepartment,
  deleteEmployee,
  deleteRole,
};
