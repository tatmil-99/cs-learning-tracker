# Control Flow and Error Handling

- (`;`) is used to separate statements.

## Block Statement

- A collection of statements within (`{}`).

- Used in control flow statments (`for`, `if`, `while`).

## Conditional Statments

- Demands that run if a condition passes.

- JS support two conditional statements (`if...else` and `switch`).

### `if...else` Statements

- Conditions can be any expression that evaluates to `true` or `false`.

E.g.

```js
if (expression is true) {
  //run statements
} else {
  //run statements
}
```

- Can test multiple cases using chained `else if` statements. Only the first condition to equal `true` runs.

Best practices:

- Always use block statements.

- use `while` if you need to test a condition like ` x = y`

### Falsy Values

The following evaluate to `false`:

- `false`

- `null`

- `undefined`

- `0`

- `''`

- `NaN`

^ The `Boolean()` object can be used as a function to test for falsy values.

### `switch` Statement

- Seeks to match a `case` clause value with the expression result.

- If a `case` matches the expression value, statements inside `case` execute.

- If `break` is omitted after statments are executed, the next `case` will be evaluated.

- Typically `default` is the last case to run if none others have.

E.g.

```js
switch (expression) {
  case label_1:
    statements_1;
    break;
  case label_2:
    statements_2;
    break;
    …
  default:
    statements_default;
}
```

## Exception Handling Statements

### Exception Types:

- It's common to throw strings or numbers as errors, but it's more effective to use one of the exception types.

### `throw` Statements

- You can throw an expression of any type.

- It specifies the value to be thrown.

E.g.

```js
throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString: function () {
    return "I'm an object!";
  },
};
```

### `try...catch` Statement

- Tries a series of statements and catches when exceptions are thrown.

- If an exception is thrown in the `try` block, the `catch` block handles what to do next.

- If an exception isn't thrown, the `catch` block is skipped.

- `catch` holds information passed from `throw` exception so you can get information about the error.

- When using `console` function to log errors from `catch`, use `console.error()`.

E.g.

```js
function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; // throw keyword is used here
  }
}

try {
  // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}
```

### Using Error Objects

- You can use `name` or `message` properties to get more succinct information about errors.

E.g.

```js
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
⋮
try {
  doSomethingErrorProne();
} catch (e) {               // NOW, we actually use `console.error()`
  console.error(e.name);    // logs 'Error'
  console.error(e.message); // logs 'The message', or a JavaScript error message
}
```

!!! I think to take advantage of those error properties, you have to use the `Error` constructor???
