USE employee_db;

INSERT INTO department (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Joe", "Peters", 1, NULL),
("Sam", "Fox", 2, 1),
("Julie", "Allen", 3, NULL),
("Rick", "Martinez", 4, 3),
("Greg", "Burak", 5, NULL),
("Holden", "Chase", 6, 5),
("Jack", "Nance", 7, NULL),
("David", "Lynch", 8, 7);



