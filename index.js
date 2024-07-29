// const inquirer = require('inquirer');
// const fs = require('fs');

// Importing using ES Modules syntax
import fs from 'fs';
import inquirer from 'inquirer';

// Prompt questions
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a short description of the project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// // Function to generate README content
const generateREADME = (answers) => {
  let licenseBadge = '';
  let licenseNotice = '';


// // Generate License Badge and Notice
// const generateLicense = (license) => {
//     let licenseBadge = '';
//     let licenseNotice = '';

  // Determine the license badge and notice
  switch (answers.license) {
    case 'MIT':
      licenseBadge = '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
      licenseNotice = 'This project is licensed under the MIT License.';
      break;
    case 'Apache 2.0':
      licenseBadge = '![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      licenseNotice = 'This project is licensed under the Apache 2.0 License.';
      break;
    case 'GPL 3.0':
      licenseBadge = '![GPL 3.0 License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)';
      licenseNotice = 'This project is licensed under the GPL 3.0 License.';
      break;
    case 'BSD 3-Clause':
      licenseBadge = '![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
      licenseNotice = 'This project is licensed under the BSD 3-Clause License.';
      break;
    case 'None':
      licenseBadge = '';
      licenseNotice = 'This project is not licensed.';
      break;
  }

//   //-------> ADDED
//   return { badge, notice };
// };

// //  Generate README Content
// const generateREADME = (answers) => {
//   const { badge, notice } = generateLicense(answers.license);

//   //------> ADDED

  return `
# ${answers.title}
${licenseBadge ? licenseBadge + '\n' : ''}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
${licenseNotice}

## Questions
If you have any questions about this project, please contact me:

- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
  `;
};

// Function to write README file
const writeFile = (content) => {
  fs.writeFile('README.md', content, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('README.md has been generated!');
    }
  });
};

// Main function
const init = async () => {
  try {
    // Check if README.md already exists
    if (fs.existsSync('README.md')) {
      console.log('README.md already exists. Please remove it before generating a new one.');
      return;
    }

// Prompt user for answers
const answers = await inquirer.prompt(questions);

 // Generate README content
 const content = generateREADME(answers);

// // Generate license notice
// const licenseNotice = generateLicenseNotice(answers.license);

// // Generate README content
// const content = generateContent(answers, licenseNotice);

// Write README file
writeFile(content);
} catch (err) {
    console.error('Error:', err);
    }
    };
    // Call main function
    init();