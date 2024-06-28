const questions = [
    {
        name: 'shape',
        message: 'What shape would you like for your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        name: 'shapeColorOption',
        message: 'What is the color you would like? Choose a format',
        type: 'list',
        choices: [ 'hexadecimal']
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a hexadecimal number for the shape (e.g., #CCCCCC)",
        when: (answers) => answers.shapeColorChoice === 'hexadecimal',
        validate: (answer) => validateHexColor(answer)
    },
    {
        name: 'text',
        message: 'What text would like in your shape?',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return "Text must be three or less characters";
            }
            return true;
        }
    },
    {
        name: 'textColorChoice',
        message: 'Choose the color format: ',
        type: 'list',
        choices: ['hexadecimal']
    },  
    {
        type: "input",
        name: "textColor",
        message: "Please enter a hexadecimal number (e.g., #CCCCCC)",
        when: (answers) => answers.textColorChoice === 'hexadecimal',
        validate: (answer) => validateHexColor(answer)
    },
];

function validateHexColor(answer) {
    const hexRegex = /^#[0-9A-F]{6}$/i;
    if (!hexRegex.test(answer)) {
        return "Please enter a valid hexadecimal color (e.g., #CCCCCC)";
    }
    return true;
}

module.exports = questions;