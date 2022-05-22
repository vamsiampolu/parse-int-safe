import * as assert from 'assert';
import { getParseableBinaryString } from './get-parseable-binary-string';
import { isBinaryNotation } from './is-binary-notation';

describe('getParseableBinaryString', () => {
  it('takes a normal binary number and returns it as is', () => {
    const value = '0b101';
    assert.ok(isBinaryNotation(value));
    assert.equal(getParseableBinaryString(value), '101');
  });

  it('takes a signed positive binary number and returns it without the sign', () => {
    const value = '+0b101';
    assert.ok(isBinaryNotation(value));
    assert.equal(getParseableBinaryString(value), '101');
  });

  it('takes a signed negative binary number and removes 0b from it', () => {
    const value = '-0b101';
    assert.ok(isBinaryNotation(value));
    assert.equal(getParseableBinaryString(value), '-101');
  });
});
