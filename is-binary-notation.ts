/**
 * Es2015 allows for the definition of binary literals with the prefix `0b`.
 * Here we hold that any binary number must have the prefix `0b` preceeded by an optional sign
 * The prefix must be followed by the digits `1` or `0`.
 *
 * Examples: `-0b0101` , `+0b1010`, `0b0111`
 *
 * If a string meets the criteria above, it is considered to be a representation of a binary number.
 *
 * @param {string} value Any string
 * @returns {boolean} Returns true if the string represents a binary number.
 */
export function isBinaryNotation(value: string): boolean {
  let sign = null;
  if (value.includes('+')) sign = '+';
  else if (value.includes('-')) sign = '-';

  if (sign && value.indexOf(sign) !== 0) return false;

  return /\b[+-]?0b[01]+\b/.test(value);
}
