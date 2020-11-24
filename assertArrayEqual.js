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

