const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const Square = require('./square.js');

const shapeClasses = {
    Circle: Circle,
    Square: Square,
    Triangle: Triangle
};

function setShape(response) {
    if (!response || !response.shape || !shapeClasses[response.shape]) {
        throw new Error(`Invalid shape: ${response && response.shape}`);
    }
    const ShapeClass = shapeClasses[response.shape];
    const userShape = new ShapeClass(response.shapeColor, response.text, response.textColor);
    return userShape.render();
}

module.exports = setShape;
