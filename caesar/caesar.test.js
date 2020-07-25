const caesar = require('./caesar');

it('should move one letter in a string', () => {
  let newStr = caesar('dave', 1);
  expect(newStr).toBe('ebwf');
});

it('should work with negative keys', () => {
  let newStr = caesar('test', -1);
  expect(newStr).toBe('sdrs');
});

it('should work around the alphabet and return to a', () => {
  let newStr = caesar('zebra', 1);
  expect(newStr).toBe('afcsb');
});

it('should work for keys larger than 26', () => {
  let newStr = caesar('zebra', 27);
  expect(newStr).toBe('afcsb');
});

it('should work for sentences', () => {
  let newStr = caesar('my cat', 2);
  expect(newStr).toBe('oa ecv');
});

it('should work for capital letters', () => {
  let newStr = caesar('Test', 1);
  expect(newStr).toBe('Uftu');
});