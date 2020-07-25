module.exports = caesar = (str, k) => {
  const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
  if (str.includes(' ')) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split('').map(letter => {
        let temp = (LETTERS.indexOf(letter) + k) % 26;
        return LETTERS[temp];
      }).join('');
    }
    return words.join(' ');
  } else {
    return str.split('').map(letter => {
      let tempIdx = (LETTERS.indexOf(letter) + k) % 26;
      return LETTERS[tempIdx];
    }).join('');
  }
}