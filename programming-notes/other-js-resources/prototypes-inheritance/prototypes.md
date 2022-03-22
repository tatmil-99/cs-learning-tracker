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

`Object.getPrototypeOf` return an objects prototype.

`Object.create` method creates a new object from an existing object used as the prototype.

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
