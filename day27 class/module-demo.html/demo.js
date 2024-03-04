// it is having module.exp and require so it is common js module system
function add(a, b){
console.log(`Addition of ${a} and ${b} is ${a + b}`);
}

var x = 100;
var y = 200;

module.exports = { add, y }; // it vl export only y-value we can't see x value