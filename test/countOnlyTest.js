const assert = require('chai').assert;
const countOnly   = require('../countOnly');

describe("#countOnly", () => {
  
  it("returns { Fang: 2, Jason: 1 } for [Karl, Salima, Agouhanna, Fang, Kavith, Jason, Salima, Fang, Joe], { Jason: true, Karima: true, Fang: true, Agouhanna: false }", () => {
    assert.deepEqual(countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 2, Jason: 1 });
  });

  it("returns { Fang: 2, Jason: 1 } for [Karl, Salima, Agouhanna, Fang, Kavith, Jason, Salima, Fang, Joe], { Jason: true, Karima: true, Fang: true, Agouhanna: false }", () => {
    assert.deepEqual(countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Fang"
    ], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 3, Jason: 1 }); 
  });

  it("returns { Fang: 2, Jason: 1 } for [Karl, Salima, Agouhanna, Fang, Kavith, Jason, Salima, Fang, Joe], { Jason: true, Karima: true, Fang: true, Agouhanna: false }", () => {
    assert.deepEqual(countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ], { "Jason": false, "Karima": false, "Fang": false, "Agouhanna": true }), { Agouhanna: 1}); 
  });

});