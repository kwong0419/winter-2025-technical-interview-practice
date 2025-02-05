const twoSum = require('./problem.js')

test('Returns indices of two numbers that add up to target', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test('Returns indices of two numbers that add up to target with negative numbers', () => {
  expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4])
})

test('Returns indices of two numbers when they are not at the start', () => {
  expect(twoSum([1, 3, 4, 2], 6)).toEqual([2, 3])
})

test('Returns indices when the same number appears multiple times', () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1])
})

test('Returns empty array when no solution exists', () => {
  expect(twoSum([1, 2, 3, 4], 10)).toEqual([])
})
