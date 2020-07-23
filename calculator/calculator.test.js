const calculator = require('./calculator');

it('is a function', () => {
  expect(calculator).toBeInstanceOf(Function);
});

it('returns a number', () => {
  const ret = calculator(1, 2, 'add');
  expect(ret).toEqual(expect.any(Number));
});

describe('only accepts four functions', () => {
  const add = calculator(1, 2, 'add');
  const sub = calculator(1, 2, 'sub');
  const divide = calculator(1, 2, 'divide');
  const multiply = calculator(1, 2, 'multiply');
  const random = calculator(1, 2, 'randomstring');

  it('accepts add', () => {
    expect(add).toBeTruthy();
  });
  it('accepts subtract', () => {
    expect(sub).toBeTruthy();
  });
  it('accepts multiply', () => {
    expect(multiply).toBeTruthy();
  });
  it('accepts divide', () => {
    expect(divide).toBeTruthy();
  });
  // it('throws error with randomstring', () => {
  //   expect(random).toThrow('Function must equal: "add", "subtract", "divide", or "multiply"');
  // });
});

describe('is not case sensitive', () => {
  const addUpper = calculator(1, 2, 'ADD');
  expect(addUpper).toBeTruthy();
});