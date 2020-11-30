const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

/* RECURSION WORK -NOT WORKING YET
const tail = function(input){
  let newInput = input.slice(1);
  return newInput;
}
const eqArrays = function(arr1, arr2, recArr1, recArr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      //the reArr variables preserve the original array
      recArr1 = tail(arr1)
      recArr2 = tail(arr2)
      return eqArrays(arr1[i], arr2[i], recArr1, recArr2)
    }
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  if (arr1.length === 0) {
  return true;
  } else {
    //if recArr1 is undefined then it is a case where there were no arrays and it never got defined, but the code still executed without returning false, therefore its true
    return recArr1 === undefined ? true :
    eqArrays(recArr1, recArr2)
  }
};
console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false
*/
