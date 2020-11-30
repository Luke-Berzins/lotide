const eqArrays = require('../eqArrays');


console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
console.log(eqArrays([], []));// => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false
console.log(eqArrays([], [1]));// => false