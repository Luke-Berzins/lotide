const findKeyByValue = function(scannedObject, desiredValue) {
  for (let myKey in scannedObject) {
    if (desiredValue === scannedObject[myKey]) {
      return myKey;
    }
  }
};
module.exports = findKeyByValue;

