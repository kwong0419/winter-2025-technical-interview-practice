// 1. Given two strings, return true if the strings are anagrams and false if not. Ignore spaces.
function isAnagram(str1, str2) {
  // remove spaces and special characters
  str1 = str1.replace(/\s/g, '').replace(/[^\w]/g, '')
  str2 = str2.replace(/\s/g, '').replace(/[^\w]/g, '')

  // check if the strings are the same length
  if (str1.length !== str2.length) {
    return false
  }

  // sort the strings
  str1 = str1.split('').sort().join('')
  str2 = str2.split('').sort().join('')

  // check if the strings are the same
  return str1 === str2
}
// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true
console.log('isAnagram: ')
console.log(isAnagram('aba', 'baa'))
console.log(isAnagram('hub', 'huc'))
console.log(isAnagram('aa bb', 'a b a b'))
console.log(isAnagram('ABA', 'aba'))
console.log(isAnagram('aabbb', 'baabb'))
console.log(isAnagram('a&!#bb', 'aaabbbb'))
console.log(isAnagram('a&!#bb', 'abb'))

// 2. Solve the same problem as above but do not sort the strings. What is the difference in time complexity when we don't sort the strings?
function isAnagram2(str1, str2) {
  // remove spaces and special characters
  str1 = str1.replace(/\s/g, '').replace(/[^\w]/g, '')
  str2 = str2.replace(/\s/g, '').replace(/[^\w]/g, '')

  // check if the strings are the same length
  if (str1.length !== str2.length) {
    return false
  }

  // map the frequency of each character
  const freq1 = {}
  const freq2 = {}

  for (let i = 0; i < str1.length; i++) {
    freq1[str1[i]] = (freq1[str1[i]] || 0) + 1
    freq2[str2[i]] = (freq2[str2[i]] || 0) + 1
  }

  // check if the frequency of each character is the same
  for (const char in freq1) {
    if (freq1[char] !== freq2[char]) {
      return false
    }
  }

  return true
}

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true
console.log('isAnagram2: ')
console.log(isAnagram2('aba', 'baa'))
console.log(isAnagram2('hub', 'huc'))
console.log(isAnagram2('aa bb', 'a b a b'))
console.log(isAnagram2('ABA', 'aba'))
console.log(isAnagram2('aabbb', 'baabb'))
console.log(isAnagram2('a&!#bb', 'aaabbbb'))
console.log(isAnagram2('a&!#bb', 'abb'))

// 3. Given two strings, how many characters would need to be added or replacedin order to make them anagrams

function charsNeededToMakeAnagrams(str1, str2) {
  // remove spaces and special characters
  str1 = str1.replace(/\s/g, '').replace(/[^\w]/g, '')
  str2 = str2.replace(/\s/g, '').replace(/[^\w]/g, '')

  // create a single frequency map
  const freq = {}

  // increment count for characters in first string
  for (let char of str1) {
    freq[char] = (freq[char] || 0) + 1
  }

  // decrement count for characters in second string
  for (let char of str2) {
    freq[char] = (freq[char] || 0) - 1
  }

  // sum up the absolute values of all frequencies
  return Object.values(freq).reduce((sum, count) => sum + Math.abs(count), 0) / 2
}
// "abad", "abcd" => 1
//  "aabb", "baba" => 0
// "aaaazzzz", "bbbbwwww" => 8
console.log('charsNeededToMakeAnagrams: ')
console.log(charsNeededToMakeAnagrams('abad', 'abcd'))
console.log(charsNeededToMakeAnagrams('aabb', 'baba'))
console.log(charsNeededToMakeAnagrams('aaaazzzz', 'bbbbwwww'))
