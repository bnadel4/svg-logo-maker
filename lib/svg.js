class Svg {
  constructor(text, shape) {
    this.text  = text;
    this.shape = shape;

  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${this.shape}
    ${this.text}
    </svg>`;
  }
}

module.exports = Svg;