const Shape = require('./shape');

class Circle extends Shape {
  render() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" 
    width="100%" fill="${this.shapeColor}"></circle>`;
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

module.exports = Circle;