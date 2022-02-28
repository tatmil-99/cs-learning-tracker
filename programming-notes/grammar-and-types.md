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

- `null` behaves as `false` in `bool` contexts and `0` in numerical contexts

### Variable Scope
