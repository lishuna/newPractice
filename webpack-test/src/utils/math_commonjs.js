
var counter = 3;
function incCounter() {
  counter++;
}
const person = {
  name: '小明',
  age: 18,
  addAge: function(){
    this.age++;
  }
};
module.exports = {
  counter: counter,
  incCounter: incCounter,
  person
};
