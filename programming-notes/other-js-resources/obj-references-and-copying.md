# Object references and copying

- Copying variables that hold primitive types directly affects the value.

- Ccopying objects does not affect the value.

- Objects declared with `const` are able to reassign property values because the variable's value is simply a reference--that doesn't change.

- Variables that store objects only reference an address in memory, therefore copying a variable in hopes of accessing a different object won't work, e.g.

```js
// Both point to one object
let user = { name: "John" };

let admin = user; // copy the reference
```

## Comparison by reference

- Objects only equal each other when they are the same object (think two different variables referencing the same object).

- For comparisons against primitives or `<` or `>`, objects are converted to primitives.

## Cloning and merging

- In order to truly replicate, or clone an object, you need to iterate over its properties and copying them, e.g.

```js
let user = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}
```

- You can also use `Object.assign()` to merge objects, or clone them. The spread operator (`...`) also clones.

## Nested cloning aka 'deep cloning'

- In order to clone nested objects, you iterate over all properties and check if properties are objects--if so, then you have to replicate its structure. Otherwise, storing the object as a property value creates a copied reference to the object, not a clone, e.g.

```js
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = Object.assign({}, user);

alert(user.sizes === clone.sizes); // true, same object

// user and clone share sizes
user.sizes.width++; // change a property from one place
alert(clone.sizes.width); // 51, see the result from the other one
```
