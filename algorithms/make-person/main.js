const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  // getters
  this.getFirstName = function() {
    return fullName.slice(0, fullName.indexOf(' '));
  };
  this.getLastName = function() {
    return fullName.slice(fullName.indexOf(' ') + 1);
  };
  this.getFullName = function() {
    return fullName;
  };
  
  // setters
  this.setFirstName = function(first) {
    fullName = `${first} ${fullName.slice(fullName.indexOf(' ') + 1)}`;
  };
  this.setLastName = function(last) {
    fullName = `${fullName.slice(0, fullName.indexOf(' '))} ${last}`;
  };
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  };
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());