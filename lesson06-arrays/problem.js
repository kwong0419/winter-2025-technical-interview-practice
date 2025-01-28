// Prompt: Determine whether the largest element in the array is at least twice as much
// as every other number in the array.
// If it is, return the largest element, or return -1 otherwise.

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The index of the largest element if it meets the condition, otherwise -1.
 */
function checkLargestElement(nums) {
  let largest = Math.max(...nums)
  for (num of nums) {
    if (num !== largest && largest < num * 2) {
      return -1
    }
  }
  return largest
}

module.exports = checkLargestElement
