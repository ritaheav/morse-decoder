const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
const MORSE_SIGNALS = {
    10: ".",
    11: "-",
    "**********": " ",
  };
  
  function decode(expr) {
    const LETTER_LENGTH = 10;
    let decodedExpr = "";
    const encWords = expr.split("**********");
    encWords.forEach((v, i) => {
      v.length % LETTER_LENGTH
        ? (encWords[i] =
            v + "0".repeat(LETTER_LENGTH - (v.length % LETTER_LENGTH)))
        : "";
    });
    encWords.forEach((v, index) => {
      let decodedString = "";
      for (let i = 0; i < v.length; i += LETTER_LENGTH) {
      const encLetter = v.slice(i, i + LETTER_LENGTH);
        let morseLetter = "";
        for (let j = 0; j < LETTER_LENGTH; j += 2) {
            const encSign = encLetter.slice(j, j + 2);
            morseLetter += MORSE_SIGNALS[encSign] ? MORSE_SIGNALS[encSign] : "";
        }
        decodedString += MORSE_TABLE[morseLetter];
        decodedString +=
          i === v.length - LETTER_LENGTH && index + 1 !== encWords.length
            ? " "
            : "";
      }
      decodedExpr += decodedString;
    });
    return decodedExpr;
  }
  module.exports = {
    decode
  };