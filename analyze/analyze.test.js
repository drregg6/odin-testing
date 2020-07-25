const analyze = require('./analyze');

it('should return an object', () => {
  let ret = analyze();
  expect(ret).toBeInstanceOf(Object);
});