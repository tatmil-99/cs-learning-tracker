# Object methods, .this

Object-oriented programming - Using objects to represent entities

- Objects in JavaScript represent real world things

- Real world things have the ability to act

- Function in properties allow actions

- Functions that are properties in objects are _methods_

E.g.

```js
// Function expression method
let user = {
  name: "John",
  age: 32,
};

user.sayHi = function () {
  alert("Hello");
};

user.sayHi(); // Hello

// Function declaraton, then assign
let user = {
  name: "John",
  age: 32,
};

function sayHi() {
  alert("Hello");
}

user.sayHi = sayHi;

user.sayHi(); // Hello
```

### Method shorthand

E.g.

```js
let user = {
  sayHi() {
    alert("Hello");
  },
};
```

## "this" in methods

- Object methods need to access information within the object--it can do this using `this`.

- `this` refers to the current object, e.g.

```js
let user = {
  name: "John",

  sayHi() {
    alert(`My name is ${this.name}`);
  },
};

// The value of 'this' will be 'user'
user.sayHi(); // My name is John
```

- Properties in 'user' can be accessed without `this` and can use that actual objects name, but it's unreliable.

## "this" is not bound

- Can use `this` outside of object methods, but `this` will refer to the window object. If in strict mode, `this` will return undefined.

- The value of `this` is determined during runtime and is contextual.

## Arrow function have no "this"

- Arrow functions don't have their own `this`, they are able reference `this` from outer functions.
