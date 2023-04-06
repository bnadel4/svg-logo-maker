const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter your text up to 3 characters.'
  },
  {
    type: 'input',
    name: 'textcolor',
    message: 'Enter a text color.'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select your shape.',
    choices: [
      'Circle',
      'Triangle',
      'Square',
    ],
  },
  {
    type: 'input',
    name: 'shapecolor',
    message: 'Enter a shape color.'
  },
];

inquirer.prompt(questions)
.then((answers) => {
  console.log(answers);
  // const svg = generateSVG(answers);
  // writeFile('./examples/logo.svg', svg, (err) => {
  //   if (err) throw err;
  //   console.log('Generated logo.svg');
  // });
});