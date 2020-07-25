module.exports = analyze = (arr) => {
  arr = arr.sort((a,b) => a - b);
  let sum = arr.reduce((a,b) => a + b, 0);
  let average = Math.floor(sum / arr.length);
  return {
    arr: [...arr],
    min: arr[0],
    max: arr[arr.length-1],
    average,
    length: arr.length
  };
}