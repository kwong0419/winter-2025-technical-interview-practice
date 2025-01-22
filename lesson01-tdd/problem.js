/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  // your code here
  // convert to lowercase and remove non-alphanumeric characters
  const strippedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  // compare the string with its reverse
  return strippedStr === strippedStr.split('').reverse().join('')
}

module.exports = isPalindrome
