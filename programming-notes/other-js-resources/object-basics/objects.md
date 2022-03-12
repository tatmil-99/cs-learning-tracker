# Objects

- Objects are non-primitive data types.

- Objects are stores in key/value pairs, known as properties.

- Property name is another name for key.

- Keys are string values, but a key's value can store anything.

- Objects can be created using using either below approaches.

E.g.

```js
let user = new Object(); // object constructor

let user = {}; // object literal is preferred
```

## Literals and properties

```js
// an object named "user"
// key "name" stores value "John"
// key "age" stores value 30
let user = {
  name: "John",
  age: 30,
};
```

- Values are accesible by dot notation, `user.name`, for example.

- Values can be added to objects, e.g.

```js
user.alive = true; // a new property would exist in "user"
```

- Values can be deleted with keyword `delete` before property.

- Property names with a space must be quoted.

- Trailing commas are good practice so items can easily be added/deleted--peep the "user" object^^^.

## Square brackets

- Muli-word properties must use `[]` instead of dot notation.

- `[]` must be used for properties that exist as variables.

- You can also use `[]` to unpack values to store as property name, e.g.

```js
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.apple); // 5 if fruit="apple"
```

- The above works the same as `bag[apple] = 5`, but it's much nicer.

## Property value shorthand

- If property key and value are the same name, you can exempt the value name, e.g.

```js
function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}
```

## Property name limitations

- Reserved words like `let`, `return`, `for` aren't an issue.

## Property existence

- A non-existing property just returns `undefined`.

- You can test if properties exist in an object with `in`, e.g.

```js
let user = { name: "John", age: 30 };

alert("age" in user); // user.age exists
alert("blabla" in user); // user.blabla doesn't exist
```

- You can use `===` to test if a property exists by seeing if it equals `undefined`, EXCEPT when a properties value is `undefined`.

- Shouldn't use `undefined` in objects--should use `null` is you have empty value.

## for...in loop

- `for...in` walks over all keys in an objects, e.g.

```js
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  alert(key); // name, age, isAdmin

  alert(user[key]); // John, 30, true
}
```

### Ordered like an object

- integer property names are "sorted", whereas string names are output in the order of creation, e.g.

```js
// integer property names
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

// string property names
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes) {
  alert(+code); // 49, 41, 44, 1
}
```
