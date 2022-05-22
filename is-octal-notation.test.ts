import * as assert from 'assert';
import { isOctalNotation } from './is-octal-notation';

describe('isOctalNotation', () => {
  it('returns true for octal value 057', () => {
    assert.ok(isOctalNotation('057'));
  });

  it('returns true for octal values 00 and 007', () => {
    assert.ok(isOctalNotation('00'));
    assert.ok(isOctalNotation('007'));
  });

  it('returns true for octal values 0o57', () => {
    assert.ok(isOctalNotation('0o57'));
  });

  it('returns true for positive value: +0o24 and negative value: -0o24', () => {
    assert.ok(isOctalNotation('+0o24'));
    assert.ok(isOctalNotation('-0o24'));
  });

  it('returns false for fractional octal notations', () => {
    assert.equal(isOctalNotation('03.25'), false);
  });

  it('returns false for values that use the digits 8 or 9', () => {
    assert.equal(isOctalNotation('0o78'), false);
    assert.equal(isOctalNotation('0o396'), false);
  });
});
