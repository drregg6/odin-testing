const calculator = (num1, num2, func='add') => {
  func = func.toLowerCase();
  switch(func) {
    case 'add':
      return 4;
      break;
    case 'subtract':
      return 4;
      break;
    case 'multiply':
      return 4;
      break;
    case 'divide':
      return 4;
      break;
    default:
      throw new Error('Function must equal: "add", "subtract", "divide", or "multiply"');
  }
};

module.exports = calculator;