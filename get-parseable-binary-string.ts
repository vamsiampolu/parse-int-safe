/**
 * Parsing a binary number is difficult:
 *  '0b1010` can be parsed using the unary operator but not by parseInt (which returns 0)
 *  '+0b1010` or `-0b1010` cannot be parsed either by parseInt or the unary plus operator
 *
 *  However, parseInt will parse any unsigned, positive or negative number containing only containing 1s and 0s
 *  as a binary number if used with the radix 2.
 *
 *   parseInt('1010', 2) // => 10
 *   parseInt('-1010', 2) / => -10
 *
 *  This function removes the sign (if present) and `0b` from the string so that it can be provided to
 *  parseInt directly.
 *
 * @param {string} value A string representing a binary number
 * @returns {string} A binary number that removes the `<sign>0b` from the string
 */
export function getParseableBinaryString(value: string): string {
  if (value[0] === '-') return `-${value.slice(3)}`;

  if (value[0] === '+') return value.slice(3);

  return value.slice(2);
}
