module.exports = capitalize = (str) => {
  const newStr = str.split('. ');
  return newStr.map(sentence => sentence[0].toUpperCase() + sentence.slice(1)).join('. ');
}