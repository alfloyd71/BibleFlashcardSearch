/**
 * Returns the ordinal string for a given number (e.g. 1 -> "1st", 2 -> "2nd").
 * @param {string} _word - Unused legacy parameter kept for backwards compatibility.
 * @param {number} number - The integer to convert to an ordinal.
 * @returns {string} The ordinal string.
 */
function pluralize(_word, number) {
  var suffixes = { 1: 'st', 2: 'nd', 3: 'rd' };
  return number + (suffixes[number] || 'th');
}
