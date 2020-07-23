const reverseString = require('./reverseString');

it('should not return the same string', () => {
  const newStr = reverseString('dave');
  expect(newStr).not.toBe('dave');
});

it('should return the reverse string', () => {
  const newStr = reverseString('dave');
  expect(newStr).toBe('evad');
});

it('should work with numbers', () => {
  const newStr = reverseString('1231');
  expect(newStr).toBe('1321');
});

it('should work with all cases', () => {
  const newStr = reverseString('nEwsTrIng');
  expect(newStr).toBe('gnIrTswEn')
});

it('should reverse sentences', () => {
  const newStr = reverseString('dave rules');
  expect(newStr).toBe('selur evad');
});