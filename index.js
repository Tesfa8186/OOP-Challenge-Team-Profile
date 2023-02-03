// node and lib modules
 const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
const fs = require("fs");

// Array for answers to questions
const myEmployees = [];

// Array object questions asked in CLI to users
function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's id?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the team manager's office number?"
        }
    ])
    .then((answers) => {
        const newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)

        myEmployees.push(newManager);

        mainMenu()
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the team engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the team engineer's id?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the team engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the team engineer's github?"
        }
    ])
    .then((answers) => {
        const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);

        myEmployees.push(newEngineer)

        mainMenu()
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the team intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the team intern's id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the team intern's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the team intern's school?"
        }
    ])
    .then((answers) => {
        const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);

        myEmployees.push(newIntern)

        mainMenu()
    })
}


function mainMenu () {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What do you want to do next?",
            choices: [
                "Add an engineer",
                "Add an intern",
                "Finish building"
            ]
        }
    ])
    .then(answers => {
        if(answers.choice == "Add an engineer") {
            createEngineer();
        } else if(answers.choice == "Add an intern") {
            createIntern();
        } else {
            console.log("finish building!")
            // console.log(myEmployees)
            generateHTML();
        }
    })
}

function generateHTML() {
    const template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    <body>
        <div>
            <h1>My Team</h1>
        </div>
    
        <div class="container">
            ${
                myEmployees.map(employee => {
                    return `<div class="card" style="width: 18rem;">
                    <div class="card-header">
                      ${employee.name} - ${employee.getRole()}
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${employee.id}</li>
                      <li class="list-group-item">Email: ${employee.email}</li>
                      <li class="list-group-item">GitHub: ${employee.github}</li>
                    </ul>
                  </div>`
                })
            }
        </div>
        
    </body>
    </html>`

    fs.writeFile("./dist/index.html", template, function() {
        console.log("Generated the HTML!")
    })
}

createManager();