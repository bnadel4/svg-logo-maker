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
    message: 'To choose a text color, enter a color keyword (OR a hexadecimal number).'
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
    message: 'To choose a shape color, enter a color keyword (OR a hexadecimal number).'
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

function renderTextElement(textColor, text) {
  return `<text x="150" y="125" font-size="60" 
  text-anchor="middle" fill="${textColor}">${text}</text>`
}

inquirer.prompt(questions)
.then((answers) => {
  processAnswers(answers);
  const svg = new Svg(renderTextElement(answers.textColor, answers.text), shapeElement).render();
  fs.writeFile('./examples/logo.svg', svg, (err) => {
  if (err) throw err;
  console.log('Generated logo.svg');
  });
});