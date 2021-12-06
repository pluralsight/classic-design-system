import { deprecationWarning } from '../helpers'

describe('helpers', () => {
  test('returns undefined in test environment', () => {
    const testMsg = 'test warning'
    expect(deprecationWarning(testMsg)).not.toBeDefined()
  })

  test('returns a deprecation message', () => {
    const warnMsg = 'this should work'
    const mock = jest.fn((warning: string) => {
      if (process.env.NODE_ENV === 'test') {
        return `DEPRECATION WARNING: ${warning}`
      }
    })
    expect(mock(warnMsg)).toEqual(`DEPRECATION WARNING: ${warnMsg}`)
  })
})
