const Shape = require('./shape');

class Square extends Shape {
  render() {
    return `<rect x="50" height="200" 
    width="200" fill="${this.shapeColor}"></rect>`;
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

module.exports = Square;