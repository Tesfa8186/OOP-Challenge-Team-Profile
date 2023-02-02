
const Employee = require('../lib/Employee');

const newEmployee = new Employee('Alec', '4321', 'alec@gmail.com');

test('if we can get the constractor values for the Employee object', () => {
    expect(newEmployee.name).toBe('Alec');
    expect(newEmployee.id).toBe('4321');
    expect(newEmployee.email).toBe('alec@gmail.com');
});

test('if we can get the name from the getName() method', () => {
    expect(newEmployee.getName()).toBe('Alec');
});

test('if we can get the id from the getId() method', () => {
    expect(newEmployee.getId()).toBe('4321');
});

test('if we can get the email from the getEmail() method', () => {
    expect(newEmployee.getEmail()).toBe('alec@gmail.com');
});

test('if we can get the role from the getRole() method', () => {
    expect(newEmployee.getRole()).toBe('Employee');
});