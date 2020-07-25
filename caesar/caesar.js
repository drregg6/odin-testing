const caesar = (str, k) => {
  if (str.includes(' ')) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split('').map(letter => {
        let charCode;
        if (letter.toUpperCase() === letter) {
          charCode = getNewCharCode(letter, k, false);
        } else {
          charCode = getNewCharCode(letter, k);
        }
        return String.fromCharCode(charCode);
      }).join('');
    }
    return words.join(' ');
  } else {
    return str.split('').map(letter => {
      let charCode;
      if (letter.toUpperCase() === letter) {
        charCode = getNewCharCode(letter, k, false);
      } else {
        charCode = getNewCharCode(letter, k);
      }
      return String.fromCharCode(charCode);
    }).join('');
  }
}

const getNewCharCode = (letter, k, lower=true) => {
  let base = lower ? 97 : 65;
  return ((letter.charCodeAt() + k - base) % 26) + base
}

module.exports = caesar;