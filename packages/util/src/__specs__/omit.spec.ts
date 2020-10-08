import { omit } from '..'

describe('#omit', () => {
  it('should create a copy', () => {
    const obj = { name: 'David Bowie' }
    const result = omit(obj, [])
    expect(result).toEqual(obj)
    expect(result).not.toBe(obj)
  })

  it('should remove fields', () => {
    const obj = {
      name: 'David Bowie',
      job: 'singer/songwrite',
      alias: 'Goblin King'
    }

    const result = omit(obj, ['name', 'job'])

    expect(result).toEqual({ alias: obj.alias })
  })
})
