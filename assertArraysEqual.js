const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 🚗 💨 WE MOVIN NOW (correct): ${actual} === ${expected} 🚗 💨💚 `);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 STOP THAT CAR: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2) && arr1.length === arr2.length) {
      console.log(`🍔 🍔 🍔 nice code br0 (equal arrays): ${arr1} === ${arr2}`)
    } else console.log(`👎👎👎 not equal br0: ${arr1} !== ${arr2} `);
};

