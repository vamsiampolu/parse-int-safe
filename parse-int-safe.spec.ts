import * as assert from 'assert';
import { parseIntSafe } from './parse-int-safe';

describe('parseIntSafe', () => {
  it('returns NaN for {}', () => {
    const result = parseIntSafe({});
    assert.ok(isNaN(result));
  });

  it('returns NaN for []', () => {
    const result = parseIntSafe([]);
    assert.ok(isNaN(result));
  });

  it('returns NaN for boolean values: true and false', () => {
    assert.ok(isNaN(parseIntSafe(true)));

    assert.ok(isNaN(parseIntSafe(false)));
  });

  it('returns NaN for null', () => {
    const result = parseIntSafe(null);
    assert.ok(isNaN(result));
  });

  it('returns NaN for undefined', () => {
    const result = parseIntSafe(undefined);
    assert.ok(isNaN(result));
  });

  it('returns integer for an exponential value', () => {
    const result = parseIntSafe('3.123456e4');
    assert.equal(isNaN(result), false);
    assert.equal(result, 31234);
  });

  it('returns NaN for a bad octal representation', () => {
    const result = parseIntSafe('0o89');
    assert.ok(isNaN(result));
  });

  it('returns NaN for a fractional or floating point octal representation', () => {
    const result = parseIntSafe('0o3.25');
    assert.ok(isNaN(result));
  });

  it('treats 03.25 as a decimal number', () => {
    const result = parseIntSafe('03.25');
    assert.equal(result, 3);
  });

  it('returns an integer value from a valid octal value', () => {
    const result = parseIntSafe('057');
    assert.equal(result, 47);
  });

  it('returns an integer for signed octal value', () => {
    assert.equal(parseIntSafe('+057'), 47);
    assert.equal(parseIntSafe(-0o24), -20);
  });

  it('returns NaN for invalid octal values', () => {
    assert.equal(isNaN(parseIntSafe('+0o97')), true);
    assert.equal(isNaN(parseIntSafe('+0o3.7')), true);
  });

  it('returns an integer value for a valid hexadecimal value', () => {
    assert.equal(parseIntSafe('0x38af'), 14511);
  });

  it('returns an integer value for a valid binary value', () => {
    assert.equal(parseIntSafe('0b1111'), 15);
    assert.equal(parseIntSafe('0b0000'), 0);
  });

  it('returns an integer value for a signed positive binary value', () => {
    assert.equal(parseIntSafe('0b101'), 5);
  });

  it('returns an integer value for a signed negative binary value', () => {
    assert.equal(parseIntSafe('-0b101'), -5);
  });
});

describe('Js behaviour', () => {
  it('is having trouble converting negative binary numbers', () => {
    assert.equal(-0b0101, -5);
    assert.ok(isNaN(+'-0b0101'));
    assert.equal(parseInt('-0b0101'), -0);
    assert.ok(isNaN(Number('-0b0101')));
  });
});
