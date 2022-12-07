//index.html file path
const indexPath = "./dist/index.html";

//questions for inquirer prompt
const questions = (role) => [
    `Enter the ${role}'s name:`,
    `Enter the ${role}'s employee ID:`,
    `Enter the ${role}'s email address:`,
    `Enter the ${role}'s office number:`,
    `Enter the ${role}'s github username:`,
    `Enter the ${role}'s school name:`,
];

//first part of html template (top)
const htmlSkeleton1 = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <title>Team building</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-12 text-center">My team</h1>
  </div>
</div>
<div class="card-deck m-2 d-flex justify-content-around">
`;

//second part of html template (bottom)
const htmlSkeleton2 = 
`
</div>
</body>
</html>`

//helper to create HTML card for an employee
const cardTemplate = (role, employeeName, id, email, additionalInfo) =>{
    let additionalField = "";
    let iconSrc = "";
    let alt = "";
    switch (role) {
        case "Manager":
            additionalField = `Office number: ${additionalInfo}`;
            iconSrc = "../img/manager.png";
            alt = role;
            break;
        case "Engineer":
            additionalField = `Github: <a href="https://github.com/${additionalInfo}">${additionalInfo}</a>`;
            iconSrc = "../img/engineer.png";
            alt = role;
            break;
        case "Intern":
            additionalField = `School name: ${additionalInfo}`;
            iconSrc = "../img/intern.png";
            alt = role;
            break;   
        default:
            break;
    }

return `<div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 10rem;">
<img src="${iconSrc}" class="card-img-top" alt="${role}">
<div class="card-body">
  <h5 class="card-title text-center">${role}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${employeeName}</li>
  <li class="list-group-item">ID: ${id}</li>
  <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
  <li class="list-group-item">${additionalField}</li>
</ul>
</div>`};

module.exports = {
    questions,
    htmlSkeleton1,
    htmlSkeleton2,
    cardTemplate,
    indexPath
}

