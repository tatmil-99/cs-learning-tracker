# Methods of primitives

JS allows us to work with primitives as if they were objects and provides methods to call.

Primitives vs. Objects:

Primitive

- Value of primitive type
- Has 7 types

Objects

- Capable of storing multiple values as properties.
- Can be created with `{}`. There are also multiple objects, functions,
  for example are objects.

There are many built-in objects that exist, like those that work with dates, html elements, errors, etc.

Objects are heavier than primitives, they require extra resources to support the additional "internals".

## Primitives as objects

The issue with primitives is that you sometimes want to perform actions, or methods on them, but still have them be lightweight.

The solution?

Primitives are still primitives (single values), but JS allows you to access methods and properties within them by using "wrapper objects" that get discarded after use.

E.g.

```js
let str = "hello";
str.toUpperCase(); // HELLO
```

Here's what's happening behind scenes:

- `str` is accessed and an object with methods and properties are created.
- The value of `str` is stored and methods are performed on it.
- The altered value is retured in primitive form, and the object deleted.

This process keeps primitives functional, but light.

### Constructors for primitives

This is possible, but not recommended. Things go crazy.

Can use `String`, `Number`, `Boolean` functions without `new`.

E.g. This is valid

```js
let strToNumber = Number("123");
```

### `null` and `undefined` have no methods
