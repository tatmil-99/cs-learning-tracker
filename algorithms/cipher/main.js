/*
Algorithm:
Create an alphabet reference to update chars
For each char in str
If the char is a member of alphabet, and
If the char is greater than M (index 12)
Subtract 13 from from alphabet indexing 
Else add 13 to recieve the rot13
Add char to updated version of str
If the char is not a member of alph 
Add to updated version of str
*/

function makeAlphabet() {
  const alphabet = [];
  let count = 65; 

  while (count <= 90) {
    alphabet.push(String.fromCharCode(count));
    count++;
  }

  return alphabet;
}

function rot13(str) {
  const alphabet = makeAlphabet();
  let rotStr = '';
  
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i]) && 
      alphabet.indexOf(str[i]) > 12) 
    {
      rotStr += alphabet[alphabet.indexOf(str[i]) - 13];
    } else if (/[A-Z]/.test(str[i]) && 
      alphabet.indexOf(str[i]) <= 12) 
    {
      rotStr += alphabet[alphabet.indexOf(str[i]) + 13];  
    } else rotStr += str[i];
  }

  return rotStr;
}

rot13("SERR PBQR PNZC");