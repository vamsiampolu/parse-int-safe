/**
 * @description Is string a number represented in a scientfic notation
 * @param {string} value Any string
 * @returns {boolean} true if the string is a number in scientfic notation
 */
export function isScientficNotation(value: string): boolean {
  return /[0-9]*\.?[0-9]+e[+-]?[0-9]+/.test(value);
}
