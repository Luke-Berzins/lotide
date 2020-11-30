const letterPositions = function(positionalString) {
  const result = {};
  for (let i = 0; i < positionalString.length; i++) {
    if (positionalString[i] !== ' ' && result[positionalString[i]] === undefined) {
      result[positionalString[i]] = [];
    }
    if (positionalString[i] !== ' ') {
      result[positionalString[i]].push(i);
    }
  }
  return result;
};

module.exports = letterPositions;