import * as assert from 'assert';
import { isScientficNotation } from './is-scientifc-notation';

describe('isScientficNotation', () => {
  it('matches scientific notation for 3.023e3', () => {
    assert.ok(isScientficNotation('3.023e3'));
  });

  it('matches scientific notation for 0.3e12', () => {
    assert.ok(isScientficNotation('0.3e12'));
  });

  it('matches scientific notation for .75e2', () => {
    assert.ok(isScientficNotation('.75e2'));
  });

  it('matches scientific notation for 3e-5', () => {
    assert.ok(isScientficNotation('.75e2'));
  });

  it('matches scientfic notation for 3e0, 3e+0 and 3e-0', () => {
    assert.ok(isScientficNotation('3e0'));
    assert.ok(isScientficNotation('3e+0'));
    assert.ok(isScientficNotation('3e-0'));
  });

  it('should not match scientific notation for e3', () => {
    assert.equal(isScientficNotation('e3'), false);
  });
});
