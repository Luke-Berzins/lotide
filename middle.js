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

const middle = function(middleArr) {
  let collecter = [];
  if (middleArr.length <= 2) {
    return collecter;
  } else if ((middleArr.length - 1) % 2 === 0) {
    collecter.push(middleArr[(middleArr.length - 1) / 2]);

  } else if (middleArr.length - 1 % 2 !== 0) {
    collecter.push(middleArr[(middleArr.length / 2) - 1]);
    collecter.push(middleArr[middleArr.length / 2]);
    
  }
  return collecter;
};
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
