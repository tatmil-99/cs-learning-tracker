/* Performs arithmetic and then returns
"this" so the next method can be called 
with "this" evaluated at runtime and in place 
of the prior method. */

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { 
    alert( this.step );
    return this;
  } 
};

ladder.up().up().down().showStep().down().showStep();