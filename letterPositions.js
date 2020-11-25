const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🍔 🍔 🍔 delicious code br0 (equal arrays): ${arr1} === ${arr2}🍔 🍔 🍔 `);
  } else console.log(`👎👎👎 not equal br0: ${arr1} !== ${arr2} 👎👎👎`);
};
const letterPositions = function(positionalString) {
  const result = {};
  for (let i = 0; i < positionalString.length; i++) {
    if (positionalString[i] !== ' ' && result[positionalString[i]] === undefined) {
      result[positionalString[i]] = [];
    }
    if (positionalString[i] !== ' ') {
      result[positionalString[i]].push(i);
    }
  }
  return result;
};
