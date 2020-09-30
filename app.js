const question = require("./lib/question");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var team = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function newEmployee() {
inquirer
.prompt(question.baseEmployeeOutput)
.then((answer) => {
 switch (answer.role) {
     case "Engineer":
     inquirer.prompt(question.engineerOutput).then((engineerInput => {
     const engineerProfile = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        engineerInput.github
         );
         team.push(engineerProfile);
  
        rerun();
    }));
    break;
     case "Manager":
    inquirer.prompt(question.managerOutput).then((managerInput) => {
     const managerProfile = new Manager(
        answer.name,
        answer.id,
        answer.email,
        managerInput.officeNumber
      );
        team.push(managerProfile);
    rerun();
    });
    break;
      case "Intern":
    inquirer.prompt(question.internOutput).then((internInput) => {
     const internProfile = new Intern(
        answer.name,
        answer.id,
        answer.email,
         internInput.university,
    );
        team.push(internProfile);
    rerun();
  })}
});
}
function rerun() {
  inquirer.prompt(question.newOutput).then((answer) => {
    switch (answer.role) {
      case "Yes":
        function restart(event) {
          event.preventDefault
        }
        newEmployee();
  
      case "No":
        let html = render(team);
        htmlFile(html);

    }
  });
}
const htmlFile = (html) => {
  fs.writeFileSync(outputPath, html);
  };
newEmployee();
var PORT = process.env.PORT ||3001