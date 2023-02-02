const Employee = require('../lib/Intern');

const newEmployee = new Employee('Tamrat', '2345', 'tamrat@gmail.com');

test('if we can get the constractor values for the Employee object', () => {
    expect(newEmployee.name).toBe('Tamrat');
    expect(newEmployee.id).toBe('2345');
    expect(newEmployee.email).toBe('tamrat@gmail.com');
});

test('if we can get the name from the getName() method', () => {
    expect(newEmployee.getName()).toBe('Tamrat');
});

test('if we can get the id from the getId() method', () => {
    expect(newEmployee.getId()).toBe('2345');
});

test('if we can get the email from the getEmail() method', () => {
    expect(newEmployee.getEmail()).toBe('tamrat@gmail.com');
});

test('if we can get the role from the getRole() method', () => {
    expect(newEmployee.getRole()).toBe('Intern');
});
