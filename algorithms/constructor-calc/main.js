// Creates calculator with constructor
// Makes new properties with read() method

function Calculator() {
  this.read = function() {
    this.a = parseInt(prompt('a?', 0));
    this.b = parseInt(prompt('b?', 0));
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
};

let calculator = new Calculator;

calculator.read();
alert("Sum= " + calculator.sum());
alert("Mul= " + calculator.mul());