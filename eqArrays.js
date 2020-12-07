const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] && Array.isArray(arr1[i]) === false) {
      return false;
    }
  }
  let newArr1 = [];
  let newArr2 = [];
  for (let j = 0; j < arr1.length; j++) {
    if (Array.isArray(arr1[j]) === true) {
      newArr1 = newArr1.concat(arr1[j])
    }
  }
  for (let k = 0; k < arr2.length; k++) {
    if (Array.isArray(arr2[k]) === true) {
      newArr2 = newArr2.concat(arr2[k])
    }
  }
  if (newArr1.length !== 0) {
    return eqArrays(newArr1, newArr2);
  } else {
    return true;
  }
}
module.exports = eqArrays;

