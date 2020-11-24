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
const without = function(source, itemsToRemove) {
  let withoutArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        break;
      }
      if (j === itemsToRemove.length - 1) {
        withoutArray.push(source[i]);
      }
    }
  }
  return withoutArray;
};
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));