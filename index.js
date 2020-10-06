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
// Inquirer prompt and promise
//=================================

function askQ() {
  //=================================
  // Prompt user to choose an option
  //=================================

  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "MAIN MENU",
      choices: [
        "View all employees",
        "View all employees by role",
        "View all employees by department",
        "View all employees by manager",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role",
        "Update employee manager",
        "Delete employee",
        "Delete role",
        "Delete department",
        "View department budgets",
      ],
    })
    .then((answer) => {
      //=======================================
      // Switch case depending on user option
      //=======================================

      switch (answer.action) {
        case "View all employees":
          break;

        case "View all employees by department":
          break;

        case "View all employees by role":
          break;

        case "Add employee":
          break;

        case "Add department":
          break;
        case "Add role":
          break;
        case "Update employee role":
          break;
        case "Update employee manager":
          break;
        case "View all employees by manager":
          break;
        case "Delete employee":
          break;
        case "View department budgets":
          break;
        case "Delete role":
          break;
        case "Delete department":
          break;
      }
    });
}
