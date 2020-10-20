USE employees_DB;

----- Department Seeds -----

INSERT INTO departments(department_name)
VALUES 
('Management'),
('Sales'),
('Warehouse'),
('Human Resources'),
('Quality Control'),
('Office Management'),
('Accounting');

INSERT INTO roles(title, salary, department_id)
VALUES
('Regional Manager', 100000, 1),
('Sales Rep', 67000, 2),
('HR Rep', 72000, 4),
('Warehouse Worker', 45000, 3),
('Receptionist', 47000, 6),
('Accountant', 89000, 7);

INSERT INTO employees(first_name, last_name, role_id) 
VALUES
('Jack', 'Black', 1),
('John', 'Cena', 5),
('Jim', 'Carrey', 2),
('Tony', 'Hawk', 3),
('Sonic', 'Hedgehog', 6),
('Crash', 'Bandicot', 3);

UPDATE `employees_DB`.`employees` SET `manager_id` = '1' WHERE (`id` > '1');
