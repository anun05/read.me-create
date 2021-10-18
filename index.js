// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What the Project Name?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'If your README is long, provide a Table of contents'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How do you use your project?'
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'If there are any collaborators who contributed, who are they?'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What Tests have you ran?'
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose a license, if applicable',
        choices: ['MIT', 'GNU', 'Boost Software']
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is yout GitHub?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'WHat is your email?'
    },

]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            console.log(err)
        }
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
