/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let maxLength = 0
  let start = 0
  let charMap = new Map()

  for (let end = 0; end < s.length; end++) {
    // If we find a repeating character, move start pointer to position after the first occurrence
    if (charMap.has(s[end])) {
      start = Math.max(start, charMap.get(s[end]) + 1)
    }

    // Add/update current character's position in map
    charMap.set(s[end], end)

    // Update maxLength if current window is larger
    maxLength = Math.max(maxLength, end - start + 1)
  }

  return maxLength
}

module.exports = lengthOfLongestSubstring
