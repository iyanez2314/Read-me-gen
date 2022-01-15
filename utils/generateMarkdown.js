const fs = require('fs');
const { resolve } = require('path');
const { features } = require('process');


// Created a function to store all the data from the questions
function generateMarkdown(data) {
  return `
  # Project Title
  ## ${data.projectTitle}

  # Description
  ## ${data.description}

  # Table of Contents
  *[Project Title](#projectTitle)
  *[Description](#Description)
  *[Usage](#Usage)
  *[Credit](#Credit)

  # Usage
  ## ${data.usage}

  # Credit
  ## ${data.credit}

`;
};

// Writing all the data from the function made above
const writeFile = data => {
  return new Promise ((resolve, reject) => {
      fs.writeFile('./README.md', generateMarkdown(data),err => {
        // if there is an error, reject the promise and send the error to the promise's catch method
          if (err){
              reject (err)
              return;
          }
          // if everything went well, resolved the promise and send the succesful data to the then method
          resolve({
              ok: true,
              message: 'file created!'
          })
      })
  })
};

// Conditional questions

// table of contents 



// exporting both functions
module.exports = {
  writeFile: writeFile,
  generateMarkdown: generateMarkdown
}