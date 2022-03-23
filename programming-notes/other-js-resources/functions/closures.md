# Closures

Local bindings/variables are recreated everytime a function is called, so what happens when a function call is no longer active?

Local variables are created for every new function call--different calls can't affect another's local variables, e.g.

```js
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1); // ---> 1
let wrap2 = wrapValue(2); // ---> 2
```

Closure - The ability to access a specific instance of a variable within an enclosed scope.

Functions that reference variables from local scopes are closures. This frees you from having to worry about lifetime of variables.

E.g.

```js
function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
twice(5); // ---> 10
```

Arguments are local variables, so value passed to `factor` argument is saved and the anonymous function value is saved in `twice`. Then, when `twice` is supplied with an argument, the product is returned because it remembers it's environment and variables.

Functions remember the environment and code in which they were created.
