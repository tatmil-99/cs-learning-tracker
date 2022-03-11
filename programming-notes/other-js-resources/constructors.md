# Constructors, "new" operator

- Constructor functions and `new` operator can be used to create many objects.

## Constructor function

- Like normal functions, but with two conventions:

  - Function name must start with a capital.

  - Must call function with `new`.

E.g.

```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

- When a constructor is executed, a few things happen:

  - A new object is assigned to `this`.

  - The function body is ran.

  - The value of `this` is return.

E.g.

```js
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}
```

- The main purpose of constructors is to automate object creation.

- Any function can be used to make a constructor, aside from arrow functions because they don't have `this`.

### New function

- Can create immediately invoked constructors, but they aren't reusable.

- Typically for complex, single objects with a lot of code.

E.g.

```js
// create a function and immediately call it with new
let user = new (function () {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
})();
```

## Return from constructors

- Return values that are primitive are ignored.

- Unless otherwise stated, `this` is returned.

- The only other possible return value is a different object other than `this`.

E.g.

```js
function BigUser() {
  this.name = "John";

  return { name: "Godzilla" }; // <-- returns this object
}

alert(new BigUser().name); // Godzilla ("this" is overwritten)
```

- Typically constructors won't have return statements.

## Methods in constructor

- We can add not only properties to `this`, but methods as well, e.g.

```js
function User(name) {
  this.name = name;

  this.sayHi = function () {
    alert("My name is: " + this.name);
  };
}

let john = new User("John");

john.sayHi(); // My name is: John
```
