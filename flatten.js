const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `💚 🚗 💨 WE MOVIN NOW (correct): ${actual} === ${expected} 🚗 💨💚 `;
  } else if (actual !== expected) {
    return `🛑🛑🛑 STOP THAT CAR: ${actual} !== ${expected} 🛑🛑🛑`;
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
const assertArraysEqual = function(arr1, arr2) {
  let counter = 0;
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`👎👎👎 not equal br0: ${arr1} !== ${arr2} 👎👎👎`);
      break;
    } else {
      counter += 1;
    }
  }
  if (counter === arr1.length) {
    console.log(`🍔 🍔 🍔 delicious code br0 (equal arrays): ${arr1} === ${arr2}🍔 🍔 🍔 `);
  }
};
const flatten = function(input) {
  let flattenedArr = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i]) === false) {
      flattenedArr.push(input[i]);
    } else {
      flattenedArr = flattenedArr.concat(input[i]);
    }
  }
  return flattenedArr;
};
console.log(flatten([1, 2, [3, 4], 5, [6], 10, [11, 10, 9], 1]));
