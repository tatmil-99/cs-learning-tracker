# Arrays

- [x] https://javascript.info/array

## Tasks

### 1. Is array copied?

What is this code going to show?

```js
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert(fruits.length); // --> 4
```

### 2. Calling in an array context

What is the result? Why?

```js
let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // --> a, b, function() {...}

/*
Explanation:
A method is added to the array, which references itself "this". When called, it outputs its contents.
It works because "this" is inside a function/method and arrays are technically objects.
*/
```
