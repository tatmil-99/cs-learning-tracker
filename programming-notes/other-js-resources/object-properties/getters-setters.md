# Property getters and setters

Two Kinds of properties:

- Data properties - Typical property represented in objects.

- Accessor properties - Looks like typical property, but are functions that seek to get and set new values.

## Getters and setters

Accessor properties are represented by "getter"/"setter" methods: `get`/`set`, e.g.

```js
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  },
};
```

The "getter" works when it is read, the "setter"--when it is assigned, e.g.

```js
let user = {
  name: "John",
  surname: "Smith",

  // Implements accessor to create "fullName" property
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

alert(user.fullName); // John Smith
```

The "getter" runs behind the scenes, so we don't call it outside the object, it gets read.

Attempting to assign a value to a "getter" won't work, e.g.

```js
let user = {
  get fullName() {
    return `...`;
  },
};

user.fullName = "Test"; // Error (property has only a getter)
```

You can assing a value to a "setter", e.g.

```js
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
```

## Accessor descriptors

Different from data properties--There is no `writable` or `value` "flags".

Instead, there are these descriptors:

- get - A function w/o arguments that is ran when a property is read.

- set - A function w/argument that is ran when a property is assigned a value.

- enumerable - Same as data properties.

- configurable - Same as data properties.

We can create an accessor "fullName" with `defineProperty`... we can pass a descriptor with `get` and `set`, e.g.

```js
let user = {
  name: "John",
  surname: "Smith",
};

Object.defineProperty(user, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

alert(user.fullName); // John Smith

for (let key in user) alert(key); // name, surname
```

A property can only be an accessor or a data property, not both.
