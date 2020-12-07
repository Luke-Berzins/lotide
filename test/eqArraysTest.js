const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns false for [], [null])", () => {
    assert.deepEqual(eqArrays([], [null]), false);
  });

  it("returns true for [], [])", () => {
    assert.deepEqual(eqArrays([], []), true);
  });

  it("returns true for [1, 2, '4'], [1, 2, '4'])", () => {
    assert.deepEqual(eqArrays([], []), true);
  });

  it("returns true for [1, 2, [1, [2, [3, 4]]]], [1, 2, [1, [2, [3, 4]]]])", () => {
    assert.deepEqual(eqArrays([[1, 2, [1, [2, [3, 4]]]]], [[1, 2, [1, [2, [3, 4]]]]]), true);
  });

  it("returns false for [1, 2, [1, [2, [3, 'bill']]]], [1, 2, [1, [2, [3, 4]]]])", () => {
    assert.deepEqual(eqArrays([[1, 2, [1, [2, [3, 'bill']]]]], [[1, 2, [1, [2, [3, 4]]]]]), false);
  });

});
