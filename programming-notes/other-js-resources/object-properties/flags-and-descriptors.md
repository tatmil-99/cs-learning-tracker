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
