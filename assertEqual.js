const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('💚 🚗 💨 STEP ON IT WE MOVIN NOW (correct): ' + [actual] + ' === ' + [expected] + '🚗 💨💚 ');
  } else if (actual !== expected) {
    console.log('🛑🛑🛑 STOP THAT CAR: ' + [actual] + ' !== ' + [expected] + '🛑🛑🛑');
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(2, 5);