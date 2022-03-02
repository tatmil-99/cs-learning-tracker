# Grammar and Types

## Basics

- Statements = Instructions ending in a semi-colon.

- Programs consist of sequences of statements.

- Uses Unicode characters.

- Case sensitive.

## Declarations

- `var` = Function scoped variable, optionally initialized w/value.

- `let` = Block-scoped variable, optionally initialized w/value.

- `const` = Read-only block-scoped variable.

### Variables

- Identifier = Name of variable.

- Variable = Used to label and hold values.

- Must start with `_`, `$`, or `a-zA-Z`.

- Numbers can be used if NOT first character.

### Declaring Variables

- `var` can be used to declare local and global variables.

- `let` and `const` are used for block-level, local variables.

- Can also use destructuring to declare variables, for example:

```js
let { bar } = foo;
```

- ^This allows the value from property 'bar' in 'foo' object to be stored in 'bar' variable.

- Destructuring = The ability to unpack values from object literals (`{}, []`) into variables.

### Evaluating Variables

- Variables declared with `var` or `let` are initialized with `undefined` IF not assigned a value.

- `undefined` behaves as `false` in `boolean` context in `NaN` in numerical context.

- `null` behaves as `false` in `bool` contexts and `0` in numerical contexts.

### Variable Scope

- Variables declared outside of functions are global and accessible by all functions.

- Variables declared inside functions are local and only accessible within that function.

### Variable Hoisting

- Variables are hoisted to the top of functions or statements and can be accessed before they are declared.

- Hoisted variables will return `undefined`.

- `let` or `const` variables are hoisted but not initialized. Accessing those variables before they are declared results in `ReferenceError`.

### Function Hoisting

- Only function declarations are hoisted--not function expressions. For example:

```js
/* Function declaration */

foo(); // "bar"

function foo() {
  console.log("bar");
}

/* Function expression */

baz(); // TypeError: baz is not a function

var baz = function () {
  console.log("bar2");
};
```

### Global Variables

- Global variable are property of the global object--`window`.

- You can access global variables with `window.variable` syntax.

### Constants

- `const` cannot change value through assignment or be re-declared while the script is running. It must be initialized to a value.

- Object and array properties can be re-assigned, for example:

```js
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
//-------------------------------
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
```

## Data Structures and Types

### Data Types

There are 8:

- 7 are primitive:

- `null` - Posseses no value--non-existent.

- `undefined` - Possesses a value not defined.

- `String` - Sequence of text characters.

- `Number` - An integer or floating point number.

- `BigInt` - A number of arbitrary size.

- `Boolean` - `true` or `false` value.

- `Symbol` - An anonymous, unique value.

- Non-primitive:

- `Object` - A container for collections of properties which exist in key/value format.

### Data Type Conversion

- JS is dynamically typed - Variables don't require type declaration.

- Data types can be automatically converted.

### Numbers and the '+' Operator

- In a statement, a string converts the number to a string. For example:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
```

- Other operators don't convert numbers to strings.

### Converting Strings to Numbers

- `parseInt()` - Turns values stored as strings in memory to whole number.

- `parseFloat()` - Used for non-whole numbers.

## Literals
