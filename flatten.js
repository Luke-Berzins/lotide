const flatten = function(input) {
  let flattenedArr = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i]) === false) {
      flattenedArr.push(input[i]);
    } else {
      flattenedArr = flattenedArr.concat(input[i]);
    }
  }
  return flattenedArr;
};

module.exports = flatten;