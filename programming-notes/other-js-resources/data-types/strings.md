# Strings

- [ ] https://javascript.info/string

## Tasks

### 1. Uppercase first character

```js
/* Write a function ucFirst(str) that returns the string str with
 * the uppercased first character, for instance:
 * ucFirst("john") == "John";
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
/* Write a function checkSpam(str) that returns true if str
 * contains ‘viagra’ or ‘XXX’, otherwise false.

 * The function must be case-insensitive:
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

```
