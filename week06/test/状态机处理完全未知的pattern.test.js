const match = require('../状态机处理完全未知的pattern.js')

test('abcdef', () => {
  expect(match('abcdef', 'aabc')).toBe(false)
})

test('abcdef', () => {
  expect(match('abcdef', 'abcdef')).toBe(true)
})

test('abcabx', () => {
  expect(match('abcabx', 'abcabcabx')).toBe(true)
})

test('abcabx', () => {
  expect(match('abcabx', 'abcaabcabx')).toBe(true)
})

test('abcabce', () => {
  expect(match('abcabce', 'abcabcabce')).toBe(true)
})
