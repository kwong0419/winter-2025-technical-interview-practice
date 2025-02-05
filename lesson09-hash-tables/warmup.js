// Prompt 1: Find if an item is repeated in an array. Given an array of integers, find if an integer appears more than once in the array.
const hasDuplicate = (nums) => {
  const hashTable = {}
  for (let i = 0; i < nums.length; i++) {
    if (!hashTable.hasOwnProperty(nums[i])) {
      hashTable[nums[i]] += 1
    } else {
      return true
    }
  }
  return false
}
console.log(hasDuplicate([1, 2, 3, 4, 5]))
console.log(hasDuplicate([1, 2, 3, 4, 5, 1]))
// Time complexity: O(n)
// Space complexity: O(n)

// Prompt 2: Count occurrences of a letter from one string in another string. Given two strings, find the number of times a letter from the first string appears in the second string.
const countLetterOccurrences = (str1, str2) => {
  // Create a frequency hash map for str1
  const charMap = {}
  let count = 0

  // Store frequency of each character from str1
  for (let i = 0; i < str1.length; i++) {
    if (!charMap.hasOwnProperty(str1[i])) {
      charMap[str1[i]] = 1
    }
  }

  // Check each char in str2
  for (let char of str2) {
    if (charMap.hasOwnProperty(char)) {
      count += 1
    }
  }
  return count
}
console.log(countLetterOccurrences('a', 'abracadabra'))
console.log(countLetterOccurrences('abc', 'abracadabra'))
// Time complexity: O(n + m)
// Space complexity: O(k)

// Prompt 3: Find the maximum difference between two elements in an array. Given an array of integers, find the maximum difference between any two elements in the array.
const maxDifference = (nums) => {
  let min = nums[0]
  let max = nums[0]

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i]
    }
    if (nums[i] > max) {
      max = nums[i]
    }
  }
  return max - min
}
console.log(maxDifference([1, 2, 3, 4, 5]))
console.log(maxDifference([10, 4, 3, 2, 1]))
// Time complexity: O(n)
// Space complexity: O(1)
