const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }
schoolInput() {
    return this.university;
  };
  roleInput() {
    return this.role;
  };
}

module.exports = Intern;