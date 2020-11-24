const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `💚 🚗 💨 WE MOVIN NOW (correct): ${actual} === ${expected} 🚗 💨💚 `;
  } else if (actual !== expected) {
    return `🛑🛑🛑 STOP THAT CAR: ${actual} !== ${expected} 🛑🛑🛑`;
  }
};

const eqArrays = function(arr1, arr2) {
  result = false;
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));