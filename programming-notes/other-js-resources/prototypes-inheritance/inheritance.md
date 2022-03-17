# Prototypal inheritance

Prototypal inheritance allows us to reuse objects and build on top of them for customizability.

## [[Prototype]]

Objects have a special hidden `[[Prototype]]` property that allows us to access other objects--if the value isn't `null`. Those other objects are the "prototype".

If a property is missing from an object, JavaScript attempts to find tha value in the prototype. This is "prototypal inheritance".

Although the prototype property is hidden, there are ways to set its value:

One way is to use `_proto_`.

E.g.

```js
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
```

Now if a property isn't found in `rabbit`, JavaScript searches for the missing property in `animal` by following the `[[Prototype]]`--searching from the bottom up.

In this case, `rabbit` inherits from `animal`; `animal` is the prototype of `rabbit`. This means "what's yours is mine"--Properties and methods in `animal` are automatically available in `rabbit`.

E.g.

```js
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk
```

The "prototype chain" can be quite long

E.g.

```js
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)
```

Now if we read something from `longEar` and it doesn't exist it searches up the "chain" until a value is found.

\*\* The value of `__proto__` can be either `null` or another object, no other type(s).

\*\* There can only be one `[[Prototype]]`--an object can't inherit from more than one.

### The difference between `__proto__` and `[[Prototype]]`

`__proto__` is the "getter/setter" for the hidden property `[[Prototype]]`.

`__proto__` is more dated, but using it now for simplicity. Modern JS suggests `Object.getPrototypeOf`/`Object.setPrototypeOf`.

## Writing doesn't use prototype

The prototype is only used for reading properties.

Write/delete operations occur within the object.

E.g.

```js
let animal = {
  eats: true,
  walk() {
    /* this method won't be used by rabbit */
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.walk = function () {
  alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!
```

The prototype isn't used when `walk` is called, the method is found and called in `rabbit`.

Accessor properties are an exception when writing new values.

E.g.

```js
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

alert(admin.fullName); // John Smith

// setter triggers!
admin.fullName = "Alice Cooper";

alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected
```

## The value of "this"

`this` is not affected by prototypes!

Inheriting objects running inherited methods update their own state, not the prototype.

E.g.

```js
// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal,
};

// modifies rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)
```

## for...in loop

`for...in` iterates over inherited properties.

`Object.keys()` only returns its own property names, not inherited ones.

`Object.hasOwnProperty(key)` also returns non-inherited values when used in `for...in` loop.

`Object.hasOwnProperty` is not enumerable, just like all properties of `Object.prototype`. This means `for...in` skips over it since it only lists enumerable entities.

\*\* Most built-in key/value-getting methods ignore inherited properties.
