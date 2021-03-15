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

  describe('#uniqueId', () => {
    const { uniqueId } = utils

    it('returns a string', () => {
      const output = uniqueId()
      expect(typeof output).toEqual('string')
    })

    it('should return unique ids', function () {
      const ids = new Array(5).fill(null).map(uniqueId)
      const uniqued = [...new Set(ids)]

      expect(ids).toHaveLength(5)
      expect(uniqued).toHaveLength(5)
    })

    it('supports an optional prefix', function () {
      expect(uniqueId('a-')).toContain('a-')
      expect(uniqueId('b-')).toContain('b-')
      expect(uniqueId('c:')).toContain('c:')
      expect(uniqueId('word_')).toContain('word_')
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

  describe('#toValues', () => {
    const { toValues } = utils

    it('returns an array', () => {
      const output = toValues({})
      expect(output).toBeInstanceOf(Array)
    })

    it('throws with invalid input', () => {
      expect(() => toValues(null)).toThrow(/must be an object/)
      expect(() => toValues(123)).toThrow(/must be an object/)
      expect(() => toValues([])).toThrow(/must be an object/)
    })

    it('returns the object values', () => {
      const input = { a: true, b: true, c: false }

      const output = toValues(input)

      expect(output).toEqual([true, true, false])
    })
  })
})
