// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

function printNumberOfStars(n) {
  let count = 0
  let stars = ''
  if (n < 3 || n > 100) return 'Invalid integer'
  else {
    while (count < n) {
      stars += '*'
      count++
    }
  }
  return stars
}

// 5 => '*****'
// 12 => '************'
// 3 => "***"
console.log(printNumberOfStars(5))
console.log(printNumberOfStars(12))
console.log(printNumberOfStars(3))

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

function printStarsAndSpaces(n) {
  let str = ''
  if (n < 3 || n > 100) return 'invalid'
  else {
    for (let i = 1; i <= n; i++) {
      if (i === 1 || i === n) {
        str += '*'
      } else {
        str += ' '
      }
    }
  }
  return str
}

// 5 => '*   *'
// 12 => '*          *'
console.log(printStarsAndSpaces(5))
console.log(printStarsAndSpaces(12))

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle
function printSquare(n, m) {
  let result = ''
  for (let i = 1; i <= n; i++) {
    // First or last line
    if (i === 1 || i === n) {
      result += '*'.repeat(m)
    }
    // Middle lines
    else {
      result += '*' + ' '.repeat(m - 2) + '*'
    }
    // Add newline if not the last line
    if (i !== n) {
      result += '\n'
    }
  }
  return result
}

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****
console.log(printSquare(5, 5))

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
