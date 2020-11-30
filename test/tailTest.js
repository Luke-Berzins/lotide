const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, ["Lighthouse", "Labs"]); 
assertArraysEqual(result[0], "Lighthouse");

//ensuring the original array isnt modified by tail
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertArraysEqual(words.length, 3);



