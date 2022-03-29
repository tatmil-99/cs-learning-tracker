# Strings

- [ ] https://javascript.info/string

## Tasks

### 1. Uppercase first character

```js
/* 
Instructions:
Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
ucFirst("john") == "John";
*/

function ucFirst(str) {
  // CONDITIONAL METHOD
  let newStr = "";
  if (str !== "") {
    let capitalize = str[0].toUpperCase();
    newStr = capitalize + str.slice(1);
  }
  return newStr;

  // TERNARY METHOD
  return str !== "" ? str[0].toUpperCase() + str.slice(1) : str;
}

console.log(ucFirst("john"));
```

### 2. Check for spam

```js
/* 
Instructions:
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:
*/

function checkSpam(str) {
  // CONDITIONAL SOLUTION
  let lwrCaseStr = str.toLowerCase();
  if (lwrCaseStr.includes("viagra") || lwrCaseStr.includes("xxx")) {
    return true;
  }
  return false;

  // LOGICAL OPERATOR SOLUTION
  let lwrCaseStr = str.toLowerCase();
  return lwrCaseStr.includes("viagra") || lwrCaseStr.includes("xxx");
}

console.log(checkSpam(str));
```

### 3. Truncate text

```js
/*
Instructions:
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.
/*

/*
Algorithm:
Find the length of str
If greater than maxLength, get substr that is 19 chars long 
And append ellipses to the substr, then return substr
Else return str
*/

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
}
```

### 4. Extract the money

```js
/*
Instructions:
We have a cost in the form "$120". That is: the dollar sign goes 
first, and then the number.

Create a function extractCurrencyValue(str) that would extract the
numeric value from such string and return it.
*/

function extractCurrencyValue(str) {
  return Number(str.slice(1));
}
```
