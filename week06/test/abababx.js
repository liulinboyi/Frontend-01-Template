const match = require('../abababx.js')

test('abcdef', () => {
  expect(match('abcdef', 'aabc')).toBe('aabc'.includes('abcdef'))
})

test('abcdef', () => {
  expect(match('abcdef', 'abcdef')).toBe('abcdef'.includes('abcdef'))
})

test('abcdef', () => {
  expect(match('abcdef', 'abcdea')).toBe('abcdea'.includes('abcdef'))
})

test('abcabx', () => {
  expect(match('abcabx', 'abcabcabx')).toBe('abcabcabx'.includes('abcabx'))
})

test('abcabx', () => {
  expect(match('abcabx', 'abcaabcabx')).toBe('abcaabcabx'.includes('abcabx'))
})

test('abcabce', () => {
  expect(match('abcabce', 'abcabcabce')).toBe('abcabcabce'.includes('abcabce'))
})
test('abababx', () => {
  expect(match('abababx', 'abababx')).toBe('abababx'.includes('abababx'))
})
test('abababx', () => {
  expect(match('abababx', 'abababa')).toBe('abababa'.includes('abababx'))
})

test('abababx', () => {
  expect(match('abababx', 'abababvabababx')).toBe(
    'abababvabababx'.includes('abababx')
  )
})
test('abababx', () => {
  expect(match('abababx', 'abababaabababx')).toBe(
    'abababaabababx'.includes('abababx')
  )
})
