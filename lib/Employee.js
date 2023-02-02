// Creating Employee Class and Constructor function for the Employee class
// with value name, id & email.  
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
// The get methods of name, id, email & role for the Employee class.
    getName()  {return this.name};
    getId()    {return this.id}; 
    getEmail() {return this.email};
    getRole()  {return "Employee"}; 


}

module.exports = Employee;

