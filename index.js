//=======================
//dotenv to hide password
//=======================

require("dotenv").config();

//===================
//Dependencies
//===================

var inquirer = require("inquirer");
var consoleTable = require("console.table");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "employee_db",
});

connection.connect(function (err) {
  if (err) throw err;
  askQ();
});

//=================================
// Inquirer prompt
//=================================

function askQ() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "View All Employees?",
          "View All Employee's By Roles?",
          "View all Employees By Departments",
          "Update Employee",
          "Add Employee?",
          "Add Role?",
          "Add Department?",
        ],
      },
    ])
    .then(function (val) {
      switch (val.choice) {
        case "View All Employees?":
          viewAllEmployees();
          break;

        case "View All Employee's By Roles?":
          viewAllRoles();
          break;

        case "View all Employees By Department":
          break;

        case "Add Employee?":
          break;

        case "Update Employee":
          break;

        case "Add Role?":
          break;

        case "Add Department?":
          break;
      }
    });
}

//============= View All Employees ==========================//

function viewAllEmployees() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      askQ();
    }
  );
}

//============= View All Roles ==========================//

function viewAllRoles() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      askQ();
    }
  );
}
