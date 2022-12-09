const inquirer = require("inquirer");

require("console.table");

const db = require('./db');

function loadMainPrompts() {

  inquirer.prompt([
    // General questions
    {
    type: "list",
    name: "choices",
    message: "What would you like to do?",
    choices: [
      "View all employees",
      "Add employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "Update Employee manager",
      "View Employees by Manager",
      "View Employees by Department",
      "Delete Department",
      "Delete Role",
      "Delete Employee",
      "Quit",
    ],
  },
])
.then(res => {
  let choice = res.choice
  switch(choice){
    case "View all employees":
      viewEmployees();
      break;

      case "Add employee":
        addEmployee();
        break;

        case "Update Employee Role":
        updateEmployeeRole();
        break;

        case "View All Roles":
        viewRoles();
        break;

        case "Add Role":
        addRole();
        break;

        case "View All Departments":
        viewDepartments();
        break;

        case "Add Department":
        addDepartment();
        break;

        case "Update Employee manager":
          updateEmployeeManager();
          break;

          case "View Employees by Manager":
          viewEmployeesByManager();
          break;

          case "View Employees by Department":
          viewEmployeesByDepartment();
          break;

          case "Delete Department":
            deleteDepartment();
            break;

            case "Delete Role":
              deleteRole();
              break;

              case "Delete Employee":
                deleteEmployee();
                break;

                case "Quit":
                quit();
                break;
  }
})
}

function viewEmployees() {
  db.getAllEmployees()
  .then(([rows])=>{
    let employees = rows
    console.table(employees)
  })
  .then(()=>loadMainPrompts())
}

function addEmployee() {
  db.addEmployee()
  .then(([rows])=>{
    let employees = rows
    console.table(employees)
  })
  .then(()=>loadMainPrompts())
}

function updateEmployeeRole() {
  db.updateEmployee()
  .then(([rows])=>{
    let employees = rows
    console.table(employees)
  })
  .then(()=>loadMainPrompts())
}
