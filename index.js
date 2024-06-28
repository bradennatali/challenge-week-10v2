const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./info/prmopt.js');
const generate = require('./info/generate.js');
const newFile = "./examples/logo.svg";

function createSVG(response) {
    if (!response || !response.shape) {
        throw new Error('missing shape');
    }
    const svg = generate(response);
    fs.writeFile(newFile, svg, () => console.log('logo was made'));
};

function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createSVG(response);
    })
    .catch(err => {
        console.log(err)
    });
};
init();