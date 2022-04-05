function makeAlphabet() {
  const alphabet = [];
  let count = 65; 
  // Used fromCharCode() to get 26 uppercase letters of alphabet
  while (count <= 90) {
    alphabet.push(String.fromCharCode(count));
    count++;
  }

  return alphabet;
}

function rotate13(str) {
  const alphabet = makeAlphabet();
  let subStr = '';
  // Replace "str[i]" with 13th letter after it in "alphabet"
  for (let i = 0; i < str.length; i++) {
    // Check direction to rotate letter in "alphabet" to avoid undefined
    if (/[A-Z]/.test(str[i]) && 
      alphabet.indexOf(str[i]) > 12) 
    { 
      subStr += alphabet[alphabet.indexOf(str[i]) - 13]; 
    } else if (/[A-Z]/.test(str[i]) && 
      alphabet.indexOf(str[i]) <= 12) 
    {
      subStr += alphabet[alphabet.indexOf(str[i]) + 13];  
    } else subStr += str[i]; // Keep non-alphanumeric characters 
  }

  return subStr;
}

rotate13("SERR PBQR PNZC");