const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
  const html = [];

  html.push(...employees
    .filter(employee => employee.roleInput() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(...employees
    .filter(employee => employee.roleInput() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.roleInput() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.nameInput());
  template = replacePlaceholders(template, "role", manager.roleInput());
  template = replacePlaceholders(template, "email", manager.emailInput());
  template = replacePlaceholders(template, "id", manager.idInput());
  template = replacePlaceholders(template, "officeNumber", manager.officeNumberInput());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.nameInput());
  template = replacePlaceholders(template, "role", engineer.roleInput());
  template = replacePlaceholders(template, "email", engineer.emailInput());
  template = replacePlaceholders(template, "id", engineer.idInput());
  template = replacePlaceholders(template, "github", engineer.gitHubInput());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.nameInput());
  template = replacePlaceholders(template, "role", intern.roleInput());
  template = replacePlaceholders(template, "email", intern.emailInput());
  template = replacePlaceholders(template, "id", intern.idInput());
  template = replacePlaceholders(template, "school", intern.gitHubInput());
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;
