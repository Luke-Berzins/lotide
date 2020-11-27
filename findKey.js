const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 🚗 💨 WE MOVIN NOW (correct): ${actual} === ${expected} 🚗 💨💚 `);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 STOP THAT CAR: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};
const findKey = function(objectKey, callback) {
  for (let items in objectKey)
    if (callback(objectKey[items])) {
      return items;
    }
};

//test code
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
assertEqual(findKey({
  "Brad Pitt":       { fans: 1 },
  "Angelena":        { fans: 3 },
  "Tom Cruise":      { fans: 2 },
  "George":          { fans: 3 },
  "Clint":           { fans: 2 },
  "Curious George":  { fans: 5 }
}, x => x.fans === 5), "Curious George");
assertEqual(findKey({
  "Single Fan":     { cycle: "good" },
  "Second Fan":     { cycle: "tremendous" },
  "Third Fan":      { cycle: "meh" },
}, x => x.cycle === "tremendous"), "Second Fan");



