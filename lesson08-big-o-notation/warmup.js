// Please use array methods such as .map(), .filter(), .reduce(), .every(), .some(), and .find() to solve the following prompts.

// Prompt 1: Write a function that takes an array of numbers as input and returns a new array with only the even numbers.
function evenNumbers(arr) {
  return arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.push(num)
    }
    return acc
  }, [])
}
// Time Complexity: O(n)
// Space Complexity: O(n)

// Prompt 2: Write a function that takes an array of strings as input and returns a new array with the lengths of each string.
function stringLengths(arr) {
  return arr.map((str) => str.length)
}
// Time Complexity: O(n)
// Space Complexity: O(n)

// Prompt 3: Write a function that takes an array of objects representing students, where each object has a "name" and "age" property. Return a new array with only the names of the students who are above 18 years old.
function studentsAbove18(arr) {
  return arr.filter((student) => student.age > 18).map((student) => student.name)
}
// Time Complexity: O(n)
// Space Complexity: O(n)
