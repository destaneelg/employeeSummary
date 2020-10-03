const question = require("./lib/question");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Used in writeToFile function 
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Team Array, profiles get pushed to 
var team = [];

//Function to go through questions file 
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
         console.log(team);
  
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
//HTML calls the render function(line 12), with team as a parameter 
let html = render(team);

//Gives user the option to end and write file or to add another employee
function rerun() {
  inquirer.prompt(question.newOutput).then((answer) => {
    switch(answer.role) {
      case "Yes!":
        newEmployee();
        break;
        case "No.":
          htmlFile(html);
        break;
      default:
        htmlFile(html);
  }
 //Adding .catch to resolve unhandled promise error 
  }).catch(function(err) {
    console.log(err)})
};

//Function to write the file 
const htmlFile = () => {
  fs.writeFile(outputPath, render(team),"utf8", function(err){
    if(err)
      throw err;
      console.log("saved");

  });
  };

//Calling newEmployee to run function 
newEmployee();



