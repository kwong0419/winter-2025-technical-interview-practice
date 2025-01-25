// 1. given a string with three characters, return the second character
function getSecondCharacter(string) {
  if (string.length !== 3) {
    throw new Error('String must be exactly 3 characters long')
  }
  return string[1]
}

// 2. get the second and third char from a string. the string will always have atleast three characters
function getSecondAndThirdCharacter(string) {
  if (string.length < 3) {
    throw new Error('String must be at least 3 characters long')
  }
  return string.slice(1, 3)
}
// 'cat' => 'at'
// 'robbed' => 'ob'
console.log(getSecondAndThirdCharacter('cat'))
console.log(getSecondAndThirdCharacter('robbed'))

// 3. Given a word with 5 letters, return the second through 5th letter
function getSecondThroughFifthLetter(word) {
  if (word.length !== 5) {
    throw new Error('String must be exactly 5 characters long')
  }
  return word.slice(1)
}
// 'funny' => 'unny'
// 'truck' => 'ruck'
console.log(getSecondThroughFifthLetter('funny'))
console.log(getSecondThroughFifthLetter('truck'))

// 4. given a string and a number called N, return the second through the Nth character
function getSecondThroughNthCharacter(string, n) {
  if (string.length < n) {
    throw new Error('String must be at least n characters long')
  }
  return string.slice(1, n)
}
// 'schoolbus', 5 => 'choo'
// 'telephone', 6 => 'eleph'
console.log(getSecondThroughNthCharacter('schoolbus', 5))
console.log(getSecondThroughNthCharacter('telephone', 6))

// slice is a ?? method: array and also a string method
// splice is a array method

// 5. Given an array of booleans, return an arrray of only false elements
function getFalseElements(arr) {
  return arr.filter((element) => !element)
}
// [true, true, false, true , false] => [false, false]
console.log(getFalseElements([true, true, false, true, false]))

// 6. given a string with two words, put ' the ' between the words and return the string
function addTheBetweenWords(string) {
  const words = string.split(' ')
  return words.join(' the ')
}
// 'to beach' => 'to the beach'
// 'for real' => 'for the real'
// 'jim john' => 'jim the john'
// 'to house' => 'to the house'
console.log(addTheBetweenWords('to beach'))
console.log(addTheBetweenWords('for real'))
console.log(addTheBetweenWords('jim john'))
console.log(addTheBetweenWords('to house'))

// 7.  given two numbers, price and discount, return the price after the discount is applied
function applyDiscount(price, discount) {
  return price - (price * discount) / 100
}
// price is 100 and discount is 15
// 100, 15 => 85
console.log(applyDiscount(100, 15))

// 70, 3 => 67.9
console.log(applyDiscount(70, 3))

// Console.log each of your answers with the test cases provided. Attempt to write each one with TDD.
