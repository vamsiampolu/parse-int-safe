/**
 * @description ES6 introduced the representation `0o<number>`
 * for an octal number. The function checks if a string matches
 * this format.
 * @param {string} value any string
 * @returns {boolean} returns true if a string represents an octal number.
 */
export function isOctalNotation(value: string): boolean {
  // there are no octal fractions
  if (value.includes('.')) return false;

  return /[+-]?0o?[0-7]+\b/.test(value);
}
