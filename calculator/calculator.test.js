const calculator = require('./calculator');

it('is a function', () => {
  expect(calculator).toBeInstanceOf(Function);
});

it('returns a number', () => {
  const ret = calculator(1, 2, 'add');
  expect(ret).toEqual(expect.any(Number));
});

describe('only accepts five functions', () => {
  const add = calculator(1, 2, 'add');
  const sub = calculator(1, 2, 'subtract');
  const divide = calculator(1, 2, 'divide');
  const multiply = calculator(1, 2, 'multiply');
  const mod = calculator(1, 2, 'mod');
  const random = calculator(1, 2, 'randomstring');

  it('accepts add', () => {
    expect(add).not.toBe(`Function must equal: "add", "subtract", "divide", or "multiply"`);
  });
  it('accepts subtract', () => {
    expect(sub).not.toBe(`Function must equal: "add", "subtract", "divide", or "multiply"`);
  });
  it('accepts multiply', () => {
    expect(divide).not.toBe(`Function must equal: "add", "subtract", "divide", or "multiply"`);
  });
  it('accepts divide', () => {
    expect(multiply).not.toBe(`Function must equal: "add", "subtract", "divide", or "multiply"`);
  });
  it('accepts mod', () => {
    expect(mod).not.toBe(`Function must equal: "add", "subtract", "divide", or "multiply"`);
  })
  it('returns a string when anything else is sent', () => {
    expect(random).toBe(`Function must equal: "add", "subtract", "divide", or "multiply"`);
  });
});

it('is not case sensitive', () => {
  const addUpper = calculator(1, 2, 'ADD');
  expect(addUpper).not.toBe(`Function must equal: "add", "subtract", "divide", or "multiply"`);
});

describe('adds two numbers together', () => {
  it('should answer 2 + 2', () => {
    expect(calculator(2, 2, 'add')).toBe(4);
  });
  it('should answer 58 + 72', () => {
    expect(calculator(58, 72, 'add')).toBe(130);
  });
  it('should answer 12 + 22', () => {
    expect(calculator(12, 22, 'add')).toBe(34);
  });
  it('should answer 50 + 52', () => {
    expect(calculator(50, 52, 'add')).toBe(102);
  });
  it('should answer 97 + 123', () => {
    expect(calculator(97, 123, 'add')).toBe(97+123);
  });
});

describe('subtracts two numbers', () => {
  it('should answer 10 - 6', () => {
    expect(calculator(10, 6, 'subtract')).toBe(4);
  });
  it('should subtract the second number from the first', () => {
    expect(calculator(20, 6, 'subtract')).not.toBe(-14);
  });
  it('should answer 100 - 14', () => {
    expect(calculator(100, 14, 'subtract')).toBe(86);
  })
});

describe('multiply two numbers', () => {
  it('should answer 3 * 10', () => {
    expect(calculator(3, 10, 'multiply')).toBe(30);
  });
  it('should multiply two negative numbers', () => {
    expect(calculator(-4, -11, 'multiply')).toBe(44);
  });
  it('should multiply one negative and one positive', () => {
    expect(calculator(-4, 11, 'multiply')).toBe(-44);
  });
});

describe('divide two numbers', () => {
  it('should be able to divide 40 and 4', () => {
    expect(calculator(40, 4, 'divide')).toBe(10);
  });
  it('should divide the second number from the first number', () => {
    expect(calculator(4, 12, 'divide')).not.toBe(3);
  });
  it('should handle negative numbers', () => {
    expect(calculator(90, -10, 'divide')).toBe(-9);
  });
});

describe('should perform mod arithmatic', () => {
  it('should be able to perform 10 % 5', () => {
    expect(calculator(10, 5, 'mod')).toBe(0);
  });
  it('should be able to perform 12 % 5', () => {
    expect(calculator(12, 5, 'mod')).toBe(2);
  });
});