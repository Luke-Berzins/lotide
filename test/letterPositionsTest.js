const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns {p: [ 0 ], l: [ 1, 9, 10 ], e: [ 2, 5, 8, 13 ], a: [ 3 ], s: [ 4 ], t: [ 7 ], m: [ 12 ]} for 'please tell me'", () => {
    assert.deepEqual(letterPositions("please tell me"), {
      p: [ 0 ],
      l: [ 1, 9, 10 ],
      e: [ 2, 5, 8, 13 ],
      a: [ 3 ],
      s: [ 4 ],
      t: [ 7 ],
      m: [ 12 ]
    });
  });

  it("returns {} for ' ", () => {
    assert.deepEqual(letterPositions(' '), {}); 
  });

  it("returns {t : [0], o : [2, 5], m: [7], a : [8], n : [9], y : [10], s : [12]} for 't o  o  many   s'", () => {
    assert.deepEqual(letterPositions('t o  o many   s'), {t : [0], o : [2, 5], m: [7], a : [8], n : [9], y : [10], s : [14]}); 
  });

});