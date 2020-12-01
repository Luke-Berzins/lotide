const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe("#eqObjects", () => {
  it("returns true for { a: { z: { t : 10, v : { s : 1, d : {u :6, h: 1}}} }, b: 2 }, { a: { z: { t : 10, v : { s : 1, d : {u :6, h: 1}}} }, b: 2 } TWO EQUAL OBJECTS", () => {
    assert.deepEqual(eqObjects({ a: { z: { t : 10, v : { s : 1, d : {u :6, h: 1}}} }, b: 2 }, { a: { z: { t : 10, v : { s : 1, d : {u :6, h: 1}}} }, b: 2 }), true);
  });

  it("returns false for { a: { z: { t : 10, v : { s : 1, d : {u :6, h: 666}}} }, b: 2 }, { a: { z: { t : 10, v : { s : 1, d : {u :6, h: 1}}} }, b: 2 } H VALUE NOT EQUAL", () => {
    assert.deepEqual(eqObjects({ a: { z: { t : 10, v : { s : 1, d : {u :6, h: 666}}} }, b: 2 }, { a: { z: { t : 10, v : { s : 1, d : {u :6, h: 1}}} }, b: 2 }), false); 
  });

  it("returns true for { a: { z: { t : 10, v : { s : 1, d : {u :6, h: [1,2,3]}}} }, b: 2 }, { a: { z: { t : 10, v : { s : 1, d : {u :6, h: [1,2,3]}}} }, b: 2 } NESTED ARRAYS EQUAL", () => {
    assert.deepEqual(eqObjects({ a: { z: { t : 10, v : { s : 1, d : {u :6, h: [1,2,3]}}} }, b: 2 }, { a: { z: { t : 10, v : { s : 1, d : {u :6, h: [1,2,3]}}} }, b: 2 }), true);
  });

  it("returns false for { a: { z: { t : 10, v : { s : 1, d : {u :6, h: [1,2,3]}}} }, b: 2 }, { a: { z: { t : 10, v : { s : 1, d : {u :6, h: [1,2,0]}}} }, b: 2 } ARRAY IN NESTED NOT EQUAL", () => {
    assert.deepEqual(eqObjects({ a: { z: { t : 10, v : { s : 1, d : {u :6, h: [1,2,3]}}} }, b: 2 }, { a: { z: { t : 10, v : { s : 1, d : {u :6, h: [1,2,0]}}} }, b: 2 }), false); 
  });

  it("returns true for {}, {} EMPTY OBJ", () => {
    assert.deepEqual(eqObjects({}), true); 
  });

});