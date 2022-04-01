const numerals = {
  1	: 'I',
  4	: 'IV',
  5	: 'V',
  9	: 'IX',
  10 : 'X',
  40 : 'XL',
  50 : 'L',
  90 : 'XC',
  100	: 'C',
  400	: 'CD',
  500	: 'D',
  900	: 'CM',
  1000 : 'M',
};

function convertToRoman(num) {
  let romanNum = '';

  while (num > 0) {
    let operand;
    const objKey = Object.keys(numerals);

    for (let i = objKey.length - 1; i >= 0; i--) {
      if (objKey[i] <= num) {
        operand = objKey[i];
        romanNum += numerals[objKey[i]];
        break;
      }
    }
    num -= operand;
  }
  return romanNum;
}

convertToRoman(36); // XXXVI
