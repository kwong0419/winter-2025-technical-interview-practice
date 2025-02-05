const areAnagrams = require('./problem.js')

describe('areAnagrams', () => {
  it('should return true for "listen" and "silent"', () => {
    expect(areAnagrams('listen', 'silent')).toBe(true)
  })

  it('should return false for "hello" and "world"', () => {
    expect(areAnagrams('hello', 'world')).toBe(false)
  })

  it('should return true for "rail safety" and "fairy tales"', () => {
    expect(areAnagrams('rail safety', 'fairy tales')).toBe(true)
  })

  it('should return true for "restful" and "fluster"', () => {
    expect(areAnagrams('restful', 'fluster')).toBe(true)
  })

  it('should return false for "programming" and "coding"', () => {
    expect(areAnagrams('programming', 'coding')).toBe(false)
  })
})
