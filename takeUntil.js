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


//take until

const takeUntil = function(arr, callback) {
  let result = [];
  for (let item of arr) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
}

//original test cases
/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
*/


// my tests

const data3 = [1, 2, -1];
const data5 = [true, false, false, false, true]
const results1 = takeUntil(data3, x => x < 0); 
const data4 = [2, 4, 5, 6]; 
assertArraysEqual(takeUntil(data4, x => x ===4), [2]);
assertArraysEqual(takeUntil(data5, x => x ===false), [true]);
 assertArraysEqual(takeUntil(data5, x => x ===true), []);
assertArraysEqual(results1, [1, 2]);
assertArraysEqual(takeUntil(data4, x => x ===5), [2, 4]);
assertArraysEqual(takeUntil(data4, x => x === 6), [2, 4, 5])

