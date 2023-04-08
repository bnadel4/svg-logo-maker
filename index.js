const inquirer = require('inquirer');
const fs = require('fs');

const Square = require('./lib/square');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Svg = require('./lib/svg');
let shapeElement = '';


const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter your text up to 3 characters.'
  },
  {
    type: 'input',
    name: 'textColor',
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
    name: 'shapeColor',
    message: 'Enter a shape color.'
  },
];

function processAnswers(answers) {
  if (answers.shape === 'Circle') {
    shapeElement = new Circle(answers.shapeColor).render();
  } else if (answers.shape === 'Triangle') {
    shapeElement = new Triangle(answers.shapeColor).render();
  } else if (answers.shape === 'Square') {
    shapeElement = new Square(answers.shapeColor).render();
  } else {
    console.log('Not a valid shape.');
  }
}

inquirer.prompt(questions)
.then((answers) => {
  console.log(answers);
  // const svg = generateSVG(answers);
  // writeFile('./examples/logo.svg', svg, (err) => {
  //   if (err) throw err;
  //   console.log('Generated logo.svg');
  // });
});