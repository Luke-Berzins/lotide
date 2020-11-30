const middle = function(middleArr) {
  let collecter = [];
  if (middleArr.length <= 2) {
    return [];
  } else if ((middleArr.length - 1) % 2 === 0) {
    collecter.push(middleArr[(middleArr.length - 1) / 2]);

  } else if (middleArr.length - 1 % 2 !== 0) {
    collecter.push(middleArr[(middleArr.length / 2) - 1]);
    collecter.push(middleArr[middleArr.length / 2]);
    
  }
  return collecter;
};

module.exports = middle;