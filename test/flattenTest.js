const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1] for [1]", () => {
    assert.deepEqual(flatten([1]), [1]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(flatten([]), []); 
  });

  it("returns [1,  2,  3,  4, 5, 6, 10, 11, 10, 9, 1] for [1, 2, [3, 4], 5, [6], 10, [11, 10, 9], 1]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6], 10, [11, 10, 9], 1]), [1,  2,  3,  4, 5, 6, 10, 11, 10, 9, 1]); 
  });

  it("returns [1, 2, 3, 'h', 'el', 'lo', 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(flatten([1, 2, 3, ["h", "el", "lo"], 4]), [1, 2, 3, "h", "el", "lo", 4]); 
  });

  it("returns [1, 2, true, false, true, 4, 5, 6, 7] for [1, 2, [true, false, true], 4, 5, 6, 7]", () => {
    assert.deepEqual(flatten([1, 2, [true, false, true], 4, 5, 6, 7]), [1, 2, true, false, true, 4, 5, 6, 7]); 
  });

});