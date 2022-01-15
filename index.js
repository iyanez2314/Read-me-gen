// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile, generateMarkdown, generateFeatures } = require('./utils/generateMarkdown.js');

// Created an array of questions for the readme
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title to your project? (Required)',
            validate: projectTitleInput =>{
                if (projectTitleInput){
                    return true;
                } else {
                    console.log ("Please enter the title of your project")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a brief description about your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput){
                    return true;
                } else {
                    console.log("Please enter a description")
                    return false;
                }
            }
        },
        {
            // TODO: figure out how to make this optional correctly.
            type: 'confirm',
            name: 'tableOfContents',
            message: 'Would you like to add a table of contents?',
            default: false
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'   
        },
        {
            type: 'input',
            name: 'credit',
            message: 'List your collabrators, if any, with links to their GitHub profiles'
         }
    ])

}

// calling the functions needed to start/write the application
 questions()
 .then(genrateReadMe => {
     return writeFile(genrateReadMe)
 })
 .catch(err => {
     console.log(err);
 })