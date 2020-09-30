// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Employee";
    }
  nameInput() {
      return this.name;
    };
  idInput() {
      return this.id;
    };
  emailInput() {
      return this.email;
    };
   roleInput() {
      return this.role;
    };
  }
  
  module.exports = Employee;