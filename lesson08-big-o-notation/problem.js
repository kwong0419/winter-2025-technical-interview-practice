// Write a function that takes in a positive integer n and returns the sum of all consecutive numbers from 1 to n. Think carefully about time complexity for this problem. How would you do it in linear time? Is there a way to do it in constant time? Try to come up with both solutions. Start with the most straightforward solution and then try to optimize it. You may want to do some research. ;)

/**
 * Calculates the sum of consecutive numbers from 1 to n.
 * @param {number} n - The positive integer.
 * @returns {number} The sum of consecutive numbers from 1 to n.
 */
function sumConsecutiveNumbers(n) {
  // Your code here
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}
// Time Complexity: O(n)
/* 
The function uses a single loop that iterates from 1 to n
Each iteration performs constant time operations (addition and increment)
The number of operations grows linearly with the input n
*/
// Space Complexity: O(1)
/* 
The function only uses two variables regardless of input size:
sum - a single number
i - loop counter
The space used remains constant no matter how large n becomes
*/

function sumConsecutiveNumbersOptimized(n) {
  return (n * (n + 1)) / 2
}
// Time Complexity: O(1)
// Space Complexity: O(1)

module.exports = sumConsecutiveNumbers
module.exports = sumConsecutiveNumbersOptimized
