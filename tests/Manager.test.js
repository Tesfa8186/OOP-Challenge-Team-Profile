const Manager = require("../lib/Manager");

const newManager = new Manager('John', '1234', 'john@gmail.com', '12345');

test('if we can get the constractor values for the Manager object', () => {
    expect(newManager.name).toBe('John');
    expect(newManager.id).toBe('1234');
    expect(newManager.email).toBe('john@gmail.com');
    expect(newManager.officeNumber).toBe('12345');
});

test('if we can get the role from the getRole() method', () => {
    expect(newManager.getRole()).toBe('Manager');
});