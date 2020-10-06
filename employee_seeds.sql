
-- DEPARTMENT SEEDS -----
USE employee_db;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Jack', 'Black', 2, 1),
    ('Ashley', 'Rodriguez', 3, NULL),
    ('Geovany', 'Cardoza', 4, 3),
    ('Bruce', 'Lee', 5, NULL),
    ('Jim', 'Carrey', 6, 5),
    ('Will', 'Ferrel', 7, NULL),
    ('Jackie', 'Chan', 4, 3);
