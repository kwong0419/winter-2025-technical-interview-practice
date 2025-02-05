/*
Problem Prompt:
Write a function that takes in two strings and returns true if they are valid anagrams of each other, and false otherwise. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

Function Signature:
function areAnagrams(str1, str2) {
    // Your code here
}

Test Cases:
console.log(areAnagrams("listen", "silent")); // Expected output: true
console.log(areAnagrams("hello", "world")); // Expected output: false
console.log(areAnagrams("rail safety", "fairy tales")); // Expected output: true
console.log(areAnagrams("restful", "fluster")); // Expected output: true
console.log(areAnagrams("programming", "coding")); // Expected output: false
*/

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false
  // Create a frequency hash map for str1
  const charMap = {}

  // Count frequency of characters in str1
  for (let char of str1) {
    charMap[char] = (charMap[char] || 0) + 1
  }

  // Check frequency of characters in str2
  for (let char of str2) {
    if (!charMap[char]) return false
    charMap[char] -= 1
  }
  return true
}

module.exports = areAnagrams
