const inquirer = require("inquirer");

require("console.table");

const db = require('./db');

loadMainPrompts()

function loadMainPrompts() {

  inquirer.prompt([
    // General questions
    {
    type: "list",
    name: "choices",
    message: "What would you like to do?",
    choices: [
      {
        name: "View all employees",
        value: "VIEW_EMPLOYEES"
      },
      {
        name: "Add employee",
        value: "ADD_EMPLOYEE"
      },
      {
        name: "Update employee role",
        value: "UPDATE_EMPLOYEE"
      },
      {
        name: "View all roles",
        value: "VIEW_ROLES"
      },
      {
        name: "Add role",
        value: "ADD_ROLE"
      },
      {
        name: "View All Departments",
        value: "VIEW_DEPARTMENTS"
      },
      {
        name: "Add Department",
        value: "ADD_DEPARTMENT"
      },
      {
        name: "Delete Employee",
        value: "DELETE_EMPLOYEE"
      },
      {
        name: "Quit",
        value: "QUIT"
      },
      
      // "Update Employee manager",
      // "View Employees by Manager",
      // "View Employees by Department",
      // "Delete Department",
      // "Delete Role",
      
    ],
  },
])
.then(res => {
  let choice = res.choices
  console.log(res)
  switch(choice){
    case "VIEW_EMPLOYEES":
      console.log("Outside of view employee")
      viewEmployees();
      break;

      case "ADD_EMPLOYEE":
        addEmployee();
        break;

        case "UPDATE_EMPLOYEE":
        updateEmployeeRole();
        break;

        // case "View All Roles":
        // viewRoles();
        // break;

        // case "Add Role":
        // addRole();
        // break;

        // case "View All Departments":
        // viewDepartments();
        // break;

        // case "Add Department":
        // addDepartment();
        // break;

        // case "Update Employee manager":
        //   updateEmployeeManager();
        //   break;

        //   case "View Employees by Manager":
        //   viewEmployeesByManager();
        //   break;

        //   case "View Employees by Department":
        //   viewEmployeesByDepartment();
        //   break;

        //   case "Delete Department":
        //     deleteDepartment();
        //     break;

        //     case "Delete Role":
        //       deleteRole();
        //       break;

              // case "Delete Employee":
              //   deleteEmployee();
              //   break;

                default:
                quit();
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
  // prompt data goes here
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

function quit() {
  console.log("Thanks for using the Employee Tracker!")
  process.exit()
}