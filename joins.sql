SELECT role.id, role.title, role.salary, department.name
FROM role
JOIN department ON role.department_id = department.id;