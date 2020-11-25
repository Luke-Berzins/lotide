const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 🚗 💨 WE MOVIN NOW (correct): ${actual} === ${expected} 🚗 💨💚 `);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 STOP THAT CAR: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let secondKeys in object2) {
    if (object2[secondKeys] !== object1[secondKeys]) {
      if (Array.isArray(object2[secondKeys])) {
        if (eqArrays(object2[secondKeys], object1[secondKeys]) !== true) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`✨✨objects equalized (equal):  ${inspect(actual)} === ${inspect(expected)}✨✨`)
  } else console.log(`🍎🍊🍎🍊objects unequalized (not equal):  ${inspect(actual)} !== ${inspect(expected)}`);
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c:'13' };
const bac = { b: "2", a: "1" , c:"13"};
console.log(assertObjectsEqual(ab, ba))
console.log(assertObjectsEqual(ab, abc))
console.log(assertObjectsEqual(abc, bac))