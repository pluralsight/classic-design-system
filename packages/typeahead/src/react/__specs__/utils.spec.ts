import * as utils from '../utils.js'

describe('utils', () => {
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

  describe('#omit', () => {
    const { omit } = utils

    it('returns an object', () => {
      const output = omit({}, [])
      expect(output).toBeInstanceOf(Object)
    })

    it('omits fields from object', () => {
      const input = { a: true, b: true, c: false, d: true }
      const fields = ['a', 'b']

      const output = omit(input, fields)

      expect(output).toEqual({ c: false, d: true })
    })

    it('handles missing fields', () => {
      const input = { a: true, c: false }
      const fields = ['a', 'b']

      const output = omit(input, fields)

      expect(output).toEqual({ c: false })
    })

    it('throws with invalid input', () => {
      expect(() => omit(null)).toThrow(/must be an object/)
      expect(() => omit(undefined)).toThrow(/must be an object/)
      expect(() => omit([])).toThrow(/must be an object/)
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
