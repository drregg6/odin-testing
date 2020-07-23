const calculator = (num1, num2, func='add') => {
  func = func.toLowerCase();
  switch(func) {
    case 'add':
      return num1 + num2;
      break;
    case 'subtract':
      return num1 - num2;
      break;
    case 'multiply':
      return num1 * num2;
      break;
    case 'divide':
      return num1 / num2;
      break;
    case 'mod':
      return num1 % num2;
    default:
      return 'Function must equal: "add", "subtract", "divide", or "multiply"';
  }
};

module.exports = calculator;