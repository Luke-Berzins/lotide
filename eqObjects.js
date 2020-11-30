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
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let secondKeys in object2) {
    if (object2[secondKeys] !== object1[secondKeys]) {
      if (Array.isArray(object2[secondKeys])) {
        if (eqArrays(object2[secondKeys], object1[secondKeys]) !== true) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
const abb = { a: "1", b: "2", c: "4", d: 5 };
const bba = { b: "2", a: "1", c: "4", d: 5 };
assertEqual(eqObjects(abb, bba), true);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

/* recursion still not working - not initializing recursion if second key in object is object, only if first is
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  for (let j = 0; j < keys1.length; j++) {
    if (typeof(object1[keys1[j]]) !== "object") {
      if (object1[keys1[j]] !== object2[keys1[j]]) {
        return false;
      }
    }
  }
  for (let firstK in object1) {
    if (typeof(object1[firstK]) === "object" || Array.isArray(object1[firstK]) !== true) {
      return eqObjects(object1[firstK], object2[firstK]);
    }
    if (Array.isArray(object1[firstK])) {
      if (eqArrays(object1[firstK], object2[firstK]) === false) {
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

*/
