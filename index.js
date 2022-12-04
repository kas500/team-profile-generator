const inquirer = require('inquirer');
const fs = require("fs");
const {questions} = require('./src/Helper');
const {htmlSkeleton1} = require('./src/Helper');
const {htmlSkeleton2} = require('./src/Helper');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

let employees = [];

function createCards(employees) {
    
}

function addToEmployeesArray(role, name, id, email, additionalField) {
    switch (role) {
        case "manager":
            employees.unshift(new Manager(name,id,email,additionalField));
            break;
        case "Engineer":
            employees.unshift(new Engineer(name,id,email,additionalField));
            break;
         case "Intern":
            employees.unshift(new Intern(name,id,email,additionalField));
            break;    
        default:
            break;
    }
}

async function createEmployee(role) {
    let additionalQuestionIndex = 3;
    if(role==="Engineer"){
        additionalQuestionIndex = 4;
    }
    else
    if (role==="Intern") {
        additionalQuestionIndex = 5;
    }
    else
    if (!role) {
        role = "Manager";
    }
    await inquirer.prompt(
        [
            {
                type: 'input',
                message: questions(role)[0],
                name: 'employeeName'
            },
            {
                type: 'input',
                message: questions(role)[1],
                name: 'employeeId'
            },
            {
                type: 'input',
                message: questions(role)[2],
                name: 'employeeEmail'
            },
            {
                type: 'input',
                message: questions(role)[additionalQuestionIndex],
                name: 'additionaField'
            },
            {
                type: 'list',
                message: "Who do you want to add/finish?",
                name: 'option',
                choices: ["Engineer","Intern","Finish building my team"]
            },
        ]

    ).then(async (answers)=>{
        if (answers.option !=="Finish building my team") {
            await createEmployee(answers.option);
        } 
        addToEmployeesArray(role, answers.employeeName, answers.employeeId, answers.employeeEmail, answers.additionaField);  
    });
}


async function init() {
    await createEmployee();
    createCards(employees);
}

init();