# Garbage collection

## Reachability

- Reachable values are guaranteed to be stored in memory.

- Reachability is the main component of garbage collection--it involves values that are currently running, or will run, e.g.

  - functions
  - nested functions
  - references to other objects
  - local variables
  - parameters
  - global variables

- ^^^ These values are called roots.

- Values are considered reachable if they are accessible by a root by means of reference or chain of references.

- Garbage collection is a background process in the JavaScript engine.

- Garbage collector junks data that becomes unreachable to save memory.

```js
/* An example of reachability:
If "user" is deleted, "accountOwner" still
references the object in memory. "user" will be 
scrapped, but not it's reference copy. */

let user = {
  name: "John",
  age: 34,
};

let accountOwner = user;
```

## Interlinking Objects

- Only "incoming references" make an object reachable, e.g. an object becomes unreachable when another object stops referencing it. All references to an object must be terminated for an object to be "collected". It's data must be unaccessible.

## Summary

- Garbage collection is performed automatically.

- Objects are retained in memory while reachable.

- Being referenced !== being reachable. Interlinked objects can become unreachable

\*\* In-depth knowledge of engines is good when you need low-level optimizations. It would be wise to plan that as the next step after you’re familiar with the language.
