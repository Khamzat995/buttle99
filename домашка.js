// нужно закодировать каждое слово в предложении;
// если длина слова меньше трёх символов, то оставляем слово без изменения;
// если слово начинается с гласной буквы, то добавляем к нему приставку "код";
// если слово начинается с согласной буквы, то добавляем к нему приставку "инту".


function cryptText(text) {
  //const glas = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
  const words = text.split(' ');

  for (let i = 0; i < words.length; i++) {
    if(words[i] == Number(words[i])) {
      words[i] = replaceNumber(words[i])
    } else if(words[i].length < 3) {
      words[i] = `${words[i]}${'ик'}`;
    } else {
      words[i] = replaceByRules(words[i]);
    }
    return words.join(' ');
  }
}

// for (let i = 0; i < soglas.length; i++) {

// console.log('lorem ipsum'.split(' '));
      function replaceNumber(word) {
        if(word.length < 3) {
          return word.reverse();
        } else {
          return `${word[0]}${word}${word[word.length-1]}`;
        }
      }

      function replaceByRules(word) {
        const vowels = ['а', 'и', 'у', 'о', 'е', 'ы', 'э', 'ю', 'я', 'ё']
        if(vowels.indexOf(word[0]) !== -1) {
          return 'код' + word
        } else {
          return 'инту' + word
        }
      }

console.log(cryptText('я вас обязан известить'))