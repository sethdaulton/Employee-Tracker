const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection
    }
    getAllEmployees() {
        // Query database
        return this.connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN departments on role.department_id = department.id LEFT JOIN employee manager on manger.id = employee.manager_id;');
        }
                
        
        addEmployee(employee) {
            // Query database
            return this.connection.promise().query('INSERT INTO employee SET ?', employee);
            }
                
        
        updateEmployee(employeeId, roleId) {
            // Query database
            return this.connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?',[roleId, employeeId]);
                }
        
        
        getAllRoles() {
            // Query database
            return this.connection.promise().query('SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id');
                }
                
        addRole(role) {
            // Query database
            return this.connection.promise().query('INSERT INTO role SET ?', role );
                }
        
        getAllDepartments() {
            // Query database
            return this.connection.promise().query('SELECT department.id, department.name FROM department');
                }
        
        
        addDepartment(department) {
            // Query database
            return this.connection.promise().query('INSERT INTO department SET ?', department);
                }
        
        
        deleteDepartment(departmentId) {
            // Query database
            return this.connection.promise().query('DELETE FROM department WHERE id = ?', departmentId);
                }
        
        
        deleteRole(roleId) {
            // Query database
            return this.connection.promise().query('DELETE FROM role WHERE id = ?', roleId);
                }
        
        
        deleteEmployee(employeeId) {
            // Query database
            return this.connection.promise().query('DELETE FROM employee WHERE id = ?', employeeId);
                }
        

}

    module.exports = new DB(connection);
    
    