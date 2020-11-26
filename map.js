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

//map below

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};



//test cases

const words = ["floating", "in", "a", "most", "peculiar", "string"];
const numberz = [ 1, 2, 3, 4];
const booleans = [ true, false, true, false];
const results1 = map(words, word => word[0]);
const results2 = map(numberz, num => num + 1);
const results3 = map(booleans, booling => booling = true);
console.log(assertArraysEqual(results1, ["f", "i", "a", "m", "p", "s"]));
console.log(assertArraysEqual(results2, [2, 3, 4, 5]));
console.log(assertArraysEqual(results3, [true, true, true, true]));
