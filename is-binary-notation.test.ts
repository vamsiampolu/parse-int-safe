import * as assert from 'assert';
import { isBinaryNotation } from './is-binary-notation';

describe('isBinaryNotation', () => {
  it('returns true if value is a valid binary number', () => {
    assert.ok(isBinaryNotation('0b101010'));
  });

  it('returns false if a value does not start with 0b', () => {
    assert.equal(isBinaryNotation('10b1111'), false);
  });

  it('returns false if a value has non binary characters', () => {
    assert.equal(isBinaryNotation('0b13001'), false);
  });

  it('returns true given a signed binary number', () => {
    assert.ok(isBinaryNotation('-0b1010101010'));
    assert.ok(isBinaryNotation('+0b1010101010'));
    assert.ok(isBinaryNotation('-0b0101'));
  });

  it('returns false if the sign is not the first character in the binary number string', () => {
    assert.equal(isBinaryNotation('1-0b+111'), false);
  });
});
