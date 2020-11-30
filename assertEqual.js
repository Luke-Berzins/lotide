const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 🚗 💨 WE MOVIN' NOW (correct): ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 STOP THAT CAR: ${actual} !== ${expected}`);
  }
};
module.exports = assertEqual;