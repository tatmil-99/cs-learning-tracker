# Property flags and descriptors

## Property flags

Aside from values, properties have 3 attributes (AKA flags):

- Writable - If `true`, the value can change, otherwise it's read-only.

- Enumerable - If `true`, then property can be listed in loops.

- Configurable - If `true`, then property can be deleted or modified.

The method `Object.getOwnPropertyDescriptor` allows you to get full information on property flags.

The syntax is:

```js
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
```

Returned is a "property descriptor" object, which contains the properties and their flags.

E.g.

```js
let user = {
  name: "John",
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

alert(JSON.stringify(descriptor, null, 2));
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
```

We can change flags with `Object.defineProperty`.

The syntax is:

```js
Object.defineProperty(obj, propertyName, descriptor);
```

descriptor - takes the "property descriptor" object.

If the property exists, `defineProperty` updates its flags. Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed `false`.

E.g. A property name is created with all falsy flags:

```js
let user = {};

Object.defineProperty(user, "name", {
  value: "John",
});

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

alert(JSON.stringify(descriptor, null, 2));
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */
```

If we wanted `true` flags, we would have to specify that in the "descriptor" in the format of the "property descriptor" object.

## Non-writable

Can change a property's flag with `defineProperty` and make it so it's not able to be reassigned.

E.g.

```js
let user = {
  name: "John",
};

Object.defineProperty(user, "name", {
  writable: false,
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'
```

\*\* Errors only appear in strict mode. For example, trying to reassign `user.name` would not show an error. The operation still would NOT succeed.

## Non-enumerable

Typically the "toString" built-in method is non-enumerable, but if we make our own it is able to be seen in a `for...in`, e.g.

```js
let user = {
  name: "John",
  toString() {
    return this.name;
  },
};

// By default, both our properties are listed:
for (let key in user) alert(key); // name, toString
```

If we don't want it to be iterable, then we can set `"enumerable": false`, e.g.

```js
let user = {
  name: "John",
  toString() {
    return this.name;
  },
};

Object.defineProperty(user, toString, { enumerable: false });

// By default, both our properties are listed:
for (let key in user) alert(key); // name
```

Non-enumerable properties are also excluded from `Object.keys()`.

## Non-configurable

A non-configurable property can't be updated or deleted. Sometimes built-in methods are non-configurable, e.g.

```js
let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

alert(JSON.stringify(descriptor, null, 2));
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/
```

Theres nothing that can be done about `Math.PI`, it's value or properties can't be changed.

\*\* `configurable: false` still allows values to be changed, as it still may be "writable". However, the properties flags can't be changed (configured) or deleted.

```js
// A forever sealed property
Object.defineProperty(object, "property", {
  configurable: false,
  writable: false,
});
```

\*\* We can still modify `writable: true` even when `configurable: false` if we are changing `writable: true` to `writable: false`.

P.S. There are more methods to handle changes to multiple property/descriptor(s).
