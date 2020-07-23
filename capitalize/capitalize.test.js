const capitalize = require('./capitalize');

it('should return a capitalized string', () => {
  const newStr = capitalize('peanut');
  expect(newStr).toBe('Peanut');
});

it('should not return every string as a capital letter', () => {
  const newStr = capitalize('peanut butter');
  expect(newStr).not.toBe('Peanut Butter');
});

it('should capitalize every new sentence', () => {
  const newStr = capitalize('go. go now.');
  expect(newStr).toBe('Go. Go now.');
});