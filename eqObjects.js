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
  
  for (let firstK in object1) {
    if (typeof(object1[firstK]) === "object" || Array.isArray(object1[firstK]) !== true) {
      return eqObjects(object1[firstK], object2[firstK]);
    }
    if (Array.isArray(object1[firstK])) {
      if (eqArrays(object1[firstK], object2[firstK]) !== true) {
        return false;
      }
    }
    if (object1[firstK] !== object2[firstK]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { z: { t : 10, v : { s : 1, d : {u :6, h: 1}}} }, b: 2 }, { a: { z: { t : 10, v : { s : 1, d : {u :6, h: 1}}} }, b: 2 }), true);


