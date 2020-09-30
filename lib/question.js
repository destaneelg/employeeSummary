// Establishing questions for Inquirer that will display to the user
const newOutput = [
    {
      type: "list",
      message: "Would you like to add a employee?",
      name: "role",
      choices: [
        "Yes!",
        "No.",
    ], },
];
  const baseEmployeeOutput = [
    {
      type: "input",
      message: "Input the employee's name. ",
      name: "name",
    },
    {
      type: "input",
      message: "Input the employee's id. ",
      name: "id",
    },
    {
      type: "input",
      message: "Input the employee's email. ",
      name: "email",
    },
    {
      type: "list",
      message: "Input the employee's role",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"],
    }, ];
   const engineerOutput = [
    {
      type: "input",
      message: "Input the employee's gitHub. ",
      name: "github",
    },];
  const internOutput = [
    {
      type: "input",
      message: "Input the employee's university. ",
      name: "university",
    }, ];
  const managerOutput = [
    {
      type: "input",
      message: "Input the employee's office. ",
      name: "officeNumber",
    },
  ];
  
  module.exports = {
    newOutput,
    baseEmployeeOutput,
    engineerOutput,
    internOutput,
    managerOutput,
  };