// Manager Card
const generateManagerHTML = function (manager) {
    return `
<div class="col">
    <article class="card m-2 border border-dark">
        <div class="card-header bg-primary text-light">
            <h2 class="card-title">${manager.name}</h2>
            <h4 class="card-title">Manager</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </article>
</div> 
    `
}

// Engingeer Card
const generateEngineerHTML = function (engineer) {
    return `
<div class="col">
    <article class="card m-2 border border-dark">
        <div class="card-header bg-success text-light">
            <h2 class="card-title">${engineer.name}</h2>
            <h4 class="card-title">Engineer</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}"
                    target="_blank">${engineer.github}</a></li>
            </ul>
        </div>
    </article>
</div> 
    `
}

// Intern Card
const generateInternHTML = function (intern) {
    return `
<div class="col">
    <article class="card m-2 border border-dark">
        <div class="card-header bg-info text-light">
            <h2 class="card-title">${intern.name}</h2>
            <h4 class="card-title">Intern</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </article>
</div> 
    `
}

function generateHTMLPage(team) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team Profile</title>
    <link rel="stylesheet" href="./style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<body>
    <header class="container-fluid bg-danger text-light mb-4">
        <div class="row">
            <nav class="col-12 jumbotron my-4">
                <h1 class="text-center">My Team Profile</h1>
            </nav>
        </div>
    </header>

    <main>
        <section class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
            ${team}
            </div>
        </section>
    </main>

</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
    crossorigin="anonymous"></script>

</html>
`
}

generateHTML = (data) => {
    teamArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            teamArray.push(generateManagerHTML(employee));
        }
        if (role === 'Engineer') {
            teamArray.push(generateEngineerHTML(employee));
        }
        if (role === 'Intern') {
            teamArray.push(generateInternHTML(employee));
        }
    }
    // console.log(teamArray);
    const employeeCards = teamArray.join('')
    // console.log(employeeCards);
    return generateHTMLPage(employeeCards);
}

module.exports = generateHTML;