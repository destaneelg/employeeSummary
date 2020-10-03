const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, university) {
    super(name, id, email);
    this.university = this.university;
    this.role = "Intern";
  }
universityInput() {
    return this.university;
  };
  roleInput() {
    return this.role;
  };
}

module.exports = Intern;