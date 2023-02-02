const Employee = require('../lib/Engineer');

const newEmployee = new Employee('Tom', '5678', 'tom@gmail.com');

test('if we can get the constractor values for the Employee object', () => {
    expect(newEmployee.name).toBe('Tom');
    expect(newEmployee.id).toBe('5678');
    expect(newEmployee.email).toBe('tom@gmail.com');
});

test('if we can get the name from the getName() method', () => {
    expect(newEmployee.getName()).toBe('Tom');
});

test('if we can get the id from the getId() method', () => {
    expect(newEmployee.getId()).toBe('5678');
});

test('if we can get the email from the getEmail() method', () => {
    expect(newEmployee.getEmail()).toBe('tom@gmail.com');
});

test('if we can get the role from the getRole() method', () => {
    expect(newEmployee.getRole()).toBe('Engineer');
});
