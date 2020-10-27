import { uniqueId } from '../unique-id'

describe('#uniqueId', () => {
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
