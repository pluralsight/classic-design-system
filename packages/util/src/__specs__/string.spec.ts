import { capitalize } from '..'

describe('#capitalize', () => {
  test('empty', () => {
    expect(capitalize()).toEqual()
    expect(capitalize('')).toEqual('')
  })

  test('lowercase', () => {
    expect(capitalize('lower')).toEqual('Lower')
    expect(capitalize('lOwer')).toEqual('LOwer')
  })

  test('uppercase', () => {
    expect(capitalize('UPPER')).toEqual('UPPER')
  })

  test('capitalized', () => {
    expect(capitalize('Capital, bully!')).toEqual('Capital, bully!')
  })

  test('numbers', () => {
    expect(capitalize('123')).toEqual('123')
  })

  test('punctuation', () => {
    expect(capitalize(',!@#')).toEqual(',!@#')
  })

  test('non-string', () => {
    expect(capitalize(123)).toEqual(123)
    expect(capitalize(true)).toEqual(true)
    expect(capitalize(false)).toEqual(false)
    expect(capitalize(['123', 'abc'])).toEqual(['123', 'abc'])
  })
})
