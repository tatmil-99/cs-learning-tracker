function palindrome(str) {
  const alphaNum = str
    .toLowerCase()
    .split('')
    .filter(char => {
      if (/[a-z0-9]/.test(char)) {
        return char
      }
    })
    .join('');

  return alphaNum !== alphaNum.split('').reverse().join('') ? 
    false : true;
}

palindrome("eye");
palindrome("_eye")
palindrome("race car")
palindrome("A man, a plan, a canal. Panama")
palindrome("My age is 0, 0 si ega ym.")
palindrome("0_0 (: /-\ :) 0-0")
palindrome("five|\_/|four")