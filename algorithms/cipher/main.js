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

function rot13(str) {
  const alphabet = [];
  let count = 65; 

  while (count <= 90) {
    alphabet.push(String.fromCharCode(count));
    count++;
  }

  let shiftedCiph = '';
  
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i]) && 
      alphabet.indexOf(str[i]) > 12) 
    {
      shiftedCiph += alphabet[alphabet.indexOf(str[i]) - 13];
    } else if (/[A-Z]/.test(str[i]) && 
        alphabet.indexOf(str[i]) <= 12) 
    {
      shiftedCiph += alphabet[alphabet.indexOf(str[i]) + 13];  
    } else {
      shiftedCiph += str[i];
    }
  }
  return shiftedCiph;
}

rot13("SERR PBQR PNZC");