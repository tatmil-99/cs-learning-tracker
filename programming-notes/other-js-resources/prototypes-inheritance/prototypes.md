# Prototypes

Prototype - Another object that is used as a fallback source for properties and allows objects to inherit properties from it.

When an object doesn't have a requested property, the property is looked for in the prototype.

The root of all prototypes is `Object.prototype`. It provides methods and properties to all objects, e.g. `toString`.

`Object.prototype` isn't the prototype for all objects. Functions inherit from `Function.prototype` and arrays from `Array.prototype`, e.g.

```js
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// ---> true

console.log(Object.getPrototypeOf([]) == Array.prototype);
// ---> true

console.log(Object.getPrototypeOf({}) == Object.prototype);
// ---> true
```

## Modern methods instead of _proto_

`Object.getPrototypeOf` return an objects prototype ([[Prototype]]).

`Object.setPrototypeOf` sets [[Prototype]] of object.

`Object.create` method creates a new object from an existing object, which is used as the prototype ([[Prototype]]).

^^^ These should be used instead of `__proto__`

Can use `Object.create` to make an object with a specific prototype, e.g.

```js
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};

// New object with 'protoRabbit' as prototype
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('SKREEE!`);
// ---> The killer rabbit says 'SKREEE!'
```

`protoRabbit` acts as a container of properties to share to all rabbit objects. Individual objects contain properties that are only contained within itself, like `type` in `killerRabbit` does not equal 'killer' in `protoRabbit`.

`Object.create` has a second possible argument--property descriptors, e.g.

```js
let animal = {
  eats: true,
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true,
  },
});

console.log(rabbit.jumps); // ---> true
```

Can also use `Object.create` to create a more powerful cloning than `for...in`, e.g.

```js
let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
```

^^^ This makes an exact copy of obj--data properties, properties and descriptors, everything.

## Class-based vs. prototype based languages

Class based languages like C++ and Java are founded on two entities:

- Classes - Define properties that characterize a set of objects.

- Instances - Shares the exact same properties of its parent class, but represents a new "entity".

Prototype-based languages don't make this distinction, they use an object as a template in which other objects can inherit. Any object can also change their properties and have other objects reference them as prototypes.

TBC...
