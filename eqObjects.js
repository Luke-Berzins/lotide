
const eqArrays = require('./eqArrays');

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
    if (typeof(object1[firstK]) === "object") {
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



module.exports = eqObjects;