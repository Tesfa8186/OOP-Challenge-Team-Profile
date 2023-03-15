const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./New/generateHTML");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamMemberData = [];

const questions = async () => {
  const basicAns = await inquirer.prompt([
    {
      type: "input",
      message: "What is the employee name?",
      name: "name",
      validate: (name) => {
        if (name.length > 0 && isNaN(name)) {
          return true;
        } else {
          console.log("\nPlease enter a name to continue!");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is the employee ID number?",
      name: "id",
      validate: (id) => {
        if (!isNaN(id) && id > 0) {
          return true;
        } else {
          console.log("\nPlease enter an ID number to continue!");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is the employee email?",
      name: "email",
      validate: (email) => {
        if (email.includes("@")) {
          return true;
        } else {
          console.log("\nPlease enter an email to continue!");
          return false;
        }
      },
    },
    {
      type: "list",
      message: "What is the employee role?",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);
  // console.log(basicAns);
  if (basicAns.role === "Manager") {
    const managerAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
        validate: (officeNumber) => {
          if (!isNaN(officeNumber) && officeNumber > 0) {
            return true;
          } else {
            console.log("\nPlease enter a valid office number to continue!");
            return false;
          }
        },
      },
    ]);
    // console.log(managerAns);
    const newManager = new Manager(
      basicAns.name,
      basicAns.id,
      basicAns.email,
      managerAns.officeNumber
    );
    teamMemberData.push(newManager);
    console.log(teamMemberData);
  } else if (basicAns.role === "Engineer") {
    const engineerAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is the engineer's GitHub?",
        name: "github",
        validate: (github) => {
          valid = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(github);
          if (valid) {
            return true;
          } else {
            console.log("\nPlease enter a valid GitHub username to continue!");
            return false;
          }
        },
      },
    ]);
    const newEngineer = new Engineer(
      basicAns.name,
      basicAns.id,
      basicAns.email,
      engineerAns.github
    );
    teamMemberData.push(newEngineer);
    console.log(teamMemberData);
  } else if (basicAns.role === "Intern") {
    const internAns = await inquirer.prompt([
      {
        type: "input",
        message: "What the intern's school?",
        name: "school",
        validate: (school) => {
          if (school.length > 0 && isNaN(school)) {
            return true;
          } else {
            console.log("\nPlease enter a school name to continue!");
          }
        },
      },
    ]);

    const newIntern = new Intern(
      basicAns.name,
      basicAns.id,
      basicAns.email,
      internAns.school
    );
    teamMemberData.push(newIntern);
    console.log(teamMemberData);
  }
};

async function initQuestions() {
  await questions();
  const newTeamMember = await inquirer.prompt([
    {
      type: "list",
      message: "Would you like to add more team members?",
      name: "addMember",
      choices: ["Yes, add more members.", "No, my team is complete."],
    },
  ]);

  if (newTeamMember.addMember === "Yes, add more members.") {
    return initQuestions();
  }
  return createHTML();
}

function createHTML() {
  fs.writeFile("./dist/index.html", generateHTML(teamMemberData), (err) =>
    err
      ? console.error(err)
      : console.log("Your Team Profile HTML has created successfully!")
  );
}

initQuestions();
