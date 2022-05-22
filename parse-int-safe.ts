import { isScientficNotation } from './is-scientifc-notation';
import { isOctalNotation } from './is-octal-notation';
import { isBinaryNotation } from './is-binary-notation';
import { getParseableBinaryString } from './get-parseable-binary-string';

/**
 * @description Safely parse a string to integer with minimum ambiguity.
 * @param {any} value Any value.
 * @returns {number} NaN if the value cannot be parsed or the parsed integer.
 */
export function parseIntSafe(value: any) {
  if (typeof value === 'boolean' || Array.isArray(value) || value === null) return NaN;

  if (typeof value === 'string' && isBinaryNotation(value)) {
    const parseableValue = getParseableBinaryString(value);
    return parseInt(parseableValue, 2);
  }

  if (typeof value === 'string' && isScientficNotation(value)) return parseInt((+value).toString());

  if (typeof value === 'string' && isOctalNotation(value)) return parseInt(value, 8);

  return isNaN(value as number) ? NaN : parseInt((value as object).toString());
}
