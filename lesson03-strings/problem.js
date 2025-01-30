/*
Problem:

- You are given a text string and a pattern string. Your task is to implement a string matching algorithm 
that finds all occurrences of the pattern in the text.
Write a function `stringMatching(text, pattern)` that takes in two strings as arguments and returns an array of indices 
where the pattern is found in the text. If the pattern is not found, return an empty array.

Example:

Input:
text = "ababcababcabc"
pattern = "abc"

Output:
[2, 7, 10]

Input:
text = "hello world"
pattern = "xyz"

Output:
[]

Note:
- The matching should be case-sensitive.
- The indices should be 0-based.

*/

function stringMatching(text, pattern) {
  // Handle edge cases
  if (!text || !pattern || pattern.length > text.length) {
    return []
  }

  const indices = []

  // Iterate through all possible positions in text
  for (let i = 0; i <= text.length - pattern.length; i++) {
    let isMatch = true

    // Check if pattern matches at current position
    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] !== pattern[j]) {
        isMatch = false
        break
      }
    }

    if (isMatch) {
      indices.push(i)
    }
  }

  return indices
}

module.exports = stringMatching
