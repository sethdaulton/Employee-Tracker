const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection
    }
    getAllEmployees() {
        // Query database
        return this.connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN departments on role.department_id = department.id LEFT JOIN employee manager on manger.id = employee.manager_id;');
        }
                
        
        addEmployee() {
            // Query database
            return this.connection.promise().query('INSERT INTO employee', function (err, results) {
              });
            }
                
        
        updateEmployee() {
            // Query database
            return this.connection.promise().query('UPDATE employee', function (err, results) {
                  });
                }
        
        
        getAllRoles() {
            // Query database
            return this.connection.promise().query('SELECT * FROM role', function (err, results) {
                  });
                }
                
        addRole() {
            // Query database
            return this.connection.promise().query('INSERT INTO role', function (err, results) {
                  });
                }
        
        getAllDepartments() {
            // Query database
            return this.connection.promise().query('SELECT * FROM department', function (err, results) {
                  });
                }
        
        
        addDepartment() {
            // Query database
            return this.connection.promise().query('INSERT INTO department', function (err, results) {
                  });
                }
        
        
        deleteDepartment() {
            // Query database
            return this.connection.promise().query('DELETE department', function (err, results) {
                
                  });
                }
        
        
        deleteRole() {
            // Query database
            return this.connection.promise().query('DELETE role', function (err, results) {
                  });
                }
        
        
        deleteEmployee() {
            // Query database
            return this.connection.promise().query('DELETE employee', function (err, results) {
                  });
                }
        

}



    module.exports = new DB(connection);
    
    