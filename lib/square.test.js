const Square = require('./square');

describe('Square Class', () => {
  it('should render a white square shape', () => {
    const shape = new Square();
    shape.setColor('white');
    expect(shape.render()).toEqual(`<rect x="50" height="200" 
    width="200" fill="white"></rect>`);
  });
});