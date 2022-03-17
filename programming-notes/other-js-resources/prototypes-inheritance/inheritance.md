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
