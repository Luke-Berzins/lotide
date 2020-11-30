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
  let keys1 = Object.keys(object1)
  for (let j = 0; j < keys1.length; j++) {
    if (typeof(object1[keys1[j]]) !== "object") {
      if (object1[keys1[j]] !== object2[keys1[j]]) {
        return false;
      }
    }
  }
  for (firstK in object1) {
    if (typeof(object1[firstK]) === "object") {
      return eqObjects(object1[firstK], object2[firstK]);
    }
    if (object1[firstK] !== object2[firstK]) {
      return false
    }
  }
  return true
};

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
assertEqual(eqObjects({ a: { z: { t : 10, v : { s : 1, d : {u :6, h: 1}}} }, b: 2 }, { a: { z: { t : 10, v : { s : 1, d : {u :6, h: 1}}} }, b: 2 }), true)


