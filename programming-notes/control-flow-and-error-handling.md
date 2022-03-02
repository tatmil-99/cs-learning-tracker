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
