const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
    {
    type:'checkbox',
    name: 'role',
    choices: ['Manager', 'Engineer', 'Intern', 'no more team members'],
    message: 'What is the team members role?',
    }
    ])
    .then ((data) => {
    switch (data.role) {
    case 'Manager':
    createManager(data.role);
    break;
    case  'Engineer':
    createEngineer(data.role);
    break;
    case  'Intern':
    createIntern(data.role);
    break;
    case 'no more team members':
    createTeam (data.role);
    Defualt :
    return text = "you must enter something"
    }})
};

const createManager = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the managers name?',  
        }
        ,
        {
        type: 'input',
        name: 'employee ID',
        message: 'What the their ID?',
        },
        {
        type: 'input',
        name: 'location',
        message: 'What the their office location?',
        },
        {
        type: 'input',
        name: 'email',
        message: 'What the their email address?',
        }
    ]);
    promptUser()
}
const createEngineer = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the their name?',  
        },
        {
        type: 'input',
        name: 'id',
        message: 'What the their ID?',
        },
        {
        type: 'input',
        name: 'github',
        message: 'What the their github?',
        },
        {
        type: 'input',
        name: 'email',
        message: 'What the their email address?',
        }
    ]);
}
const createIntern = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the their name?',  
        },
        {
        type: 'input',
        name: 'employee ID',
        message: 'What the their ID?',
        },
        {
        type: 'input',
        name: 'email',
        message: 'What the their email address?',
        },
        {
        type: 'input',
        name: 'school',
        message: 'What school do they/did they attend?',
        }
    ]);
}
//const createTeam = () => {
    //for (let i = 0; i < data.length; index++) {
     //   const employee = data[i];
    //    generateHTML (data[i])
  //  }
//}

const generateHTML = (data) => {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Manager Name: ${data.name}</h1>
        <h3>Example heading <span class="badge badge-secondary"></span></h3>
        <ul class="list-group">
          <li class="list-group-item">My GitHub username is ${data.github}</li>
          <li class="list-group-item"> ID# ${data.id}</li>
          <li class="list-group-item"> office location: ${data.location}</li>
          <li class="list-group-item"> Email address: ${data.email}</li>
        </ul>
      </div>
    </div>
    </body>
    </html>`;
}

const init = () => {
    promptUser()
      //.then((data) => writeFileAsync('index.html', generateHTML(data)))
      //.then(() => console.log('Successfully wrote to index.html'))
      //.catch((err) => console.error(err));
  };

  init();