const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {

  it("returns drama for {sci_fi: 'The Expanse',comedy: 'Brooklyn Nine-Nine',drama:  'The Wire', hello: 'goodbye' }, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue({
      sci_fi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama:  'The Wire',
      hello: 'goodbye'
    }, 'The Wire'), 'drama');
  });

  it("returns undefined for {sci_fi: 'The Expanse',comedy: 'Brooklyn Nine-Nine',drama:  'The Wire', hello: 'goodbye' }, '70s show')", () => {
    assert.strictEqual(findKeyByValue({
      sci_fi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama:  'The Wire',
      hello: 'goodbye'
    }, '70s show'), undefined);
  });

  it("returns hello for {sci_fi: 'The Expanse',comedy: 'Brooklyn Nine-Nine',drama:  'The Wire', hello: 'goodbye' }, 'goodbye')", () => {
    assert.strictEqual(findKeyByValue({
      sci_fi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama:  'The Wire',
      hello: 'goodbye'
    }, 'goodbye'), 'hello');
  });
});