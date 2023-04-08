const Circle = require('./circle');

describe('Circle Class', () => {
  it('should render a red circle shape', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" 
    width="100%" fill="red"></circle>`);
  });
});