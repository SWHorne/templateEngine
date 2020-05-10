// TODO: Write code to define and export the Employee class
// const Employee = require('./Employee');
class Employee extends Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  get role() {
      return "Employee";
  }
}

module.exports = Employee;
