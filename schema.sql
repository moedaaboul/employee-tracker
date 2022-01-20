DROP DATABASE IF EXISTS department_db;

CREATE DATABASE department_db;

USE department_db;

CREATE TABLE department (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL
);

ALTER TABLE role
ADD FOREIGN KEY (department_id)
REFERENCES department (id);

CREATE TABLE employee (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT
);