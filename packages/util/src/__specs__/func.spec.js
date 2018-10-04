import { debounce } from '../func'

describe('#debounce', () => {
  describe('with valid arguments', () => {
    beforeEach(() => {
      jest.useFakeTimers()
    })

    test('with func and delay arguments', () => {
      const spy = jest.fn()
      const result = debounce(spy, 100)
      expect(result).toBeInstanceOf(Function)
      result('foo')
      jest.runTimersToTime(100)
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('foo')
    })
  })

  test('empty', () => {
    expect(debounce).toThrow(/^debounce expects a function/)
  })

  test('with func and no delay', () => {
    expect(_ => debounce(Function.prototype)).toThrow(
      /^debounce expects a number/
    )
  })

  test('with no func and delay', () => {
    expect(_ => debounce(null, 100)).toThrow(/^debounce expects a function/)
  })

  test('non-func', () => {
    expect(_ => debounce(123)).toThrow(/^debounce expects a function/)
    expect(_ => debounce(true)).toThrow(/^debounce expects a function/)
    expect(_ => debounce(false)).toThrow(/^debounce expects a function/)
    expect(_ => debounce(['123', 'abc'])).toThrow(
      /^debounce expects a function/
    )
  })
})
