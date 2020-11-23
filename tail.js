const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 🚗 💨 WE MOVIN NOW (correct): ${actual} === ${expected} 🚗 💨💚 `);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 STOP THAT CAR: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};

const tail = function(input){
  let newInput = input.slice(1);
  return newInput;
}
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); 
assertEqual(result[0], "Lighthouse");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const words1 = [];
console.log(tail(words1));