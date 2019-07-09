import * as utils from '../utils.js'

describe('utils', () => {
  describe('#chunk', () => {
    const { chunk } = utils

    it('returns an array', () => {
      const output = chunk([], 0)
      expect(output).toBeInstanceOf(Array)
    })

    it('chunks an array by size of 2', () => {
      const input = [1, 2, 3, 4, 5]
      const output = chunk(input, 2)

      expect(output).toEqual([[1, 2], [3, 4], [5]])
    })

    it('chunks an array with size of 3', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      const output = chunk(input, 3)

      expect(output).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]])
    })

    it('defaults to size of 1', () => {
      const input = [1, 2, 3]
      const output = chunk(input)

      expect(output).toEqual([[1], [2], [3]])
    })

    it('ignores zero size (defaults to 1)', () => {
      const input = [1, 2, 3]
      const output = chunk(input, 0)

      expect(output).toEqual([[1], [2], [3]])
    })

    it('ignores negative size (defaults to 1)', () => {
      const input = [1, 2, 3]
      const output = chunk(input, -2)

      expect(output).toEqual([[1], [2], [3]])
    })

    it('throws with invalid input', () => {
      expect(() => chunk({ key: 'val' })).toThrow(/must be an array/)
    })

    it('properly handles a size larger than input array', () => {
      const input = [1, 2, 3]
      const output = chunk(input, 5)

      expect(output).toEqual([[1, 2, 3]])
    })
  })

  describe('#combineFns', () => {
    const { combineFns } = utils

    it('returns a function', () => {
      const combined = combineFns(jest.fn(), jest.fn())
      expect(combined).toBeInstanceOf(Function)
    })

    it('calls each function with args', () => {
      const first = jest.fn()
      const second = jest.fn()

      const args = ['string', { obj: true }, ['array']]
      const combined = combineFns(first, second)

      combined(...args)

      expect(first).toHaveBeenCalledWith(...args)
      expect(second).toHaveBeenCalledWith(...args)
    })

    it('handles falsy values', () => {
      const first = jest.fn()
      const second = null
      const third = undefined
      const forth = jest.fn()

      const args = ['string', { obj: true }, ['array']]
      const combined = combineFns(first, second, third, forth)

      combined(...args)

      expect(first).toHaveBeenCalledWith(...args)
      expect(forth).toHaveBeenCalledWith(...args)
    })
  })

  describe('#pick', () => {
    const { pick } = utils

    it('returns an object', () => {
      const output = pick({}, [])
      expect(output).toBeInstanceOf(Object)
    })

    it('picks fields from object', () => {
      const input = { a: true, b: true, c: false }
      const fields = ['a', 'b']

      const output = pick(input, fields)

      expect(output).toEqual({ a: true, b: true })
    })

    it('handles missing fields', () => {
      const input = { a: true, c: false }
      const fields = ['a', 'b']

      const output = pick(input, fields)

      expect(output).toEqual({ a: true })
    })

    it('throws with invalid input', () => {
      expect(() => pick(null)).toThrow(/must be an object/)
      expect(() => pick(undefined)).toThrow(/must be an object/)
      expect(() => pick([])).toThrow(/must be an object/)
    })
  })
})
