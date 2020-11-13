import { pick } from '..'

describe('#pick', () => {
  it('returns an object', () => {
    const obj = { name: 'David Bowie' }
    const result = pick(obj, [])
    expect(result).toBeInstanceOf(Object)
  })

  it('picks fields from object', () => {
    const obj = {
      alias: 'Goblin King',
      job: 'singer/songwriter',
      name: 'David Bowie'
    }
    const result = pick(obj, ['name', 'job'])

    expect(result).toEqual({ job: obj.job, name: obj.name })
  })

  it('handles missing fields', () => {
    const obj: { alias: string; job?: string; name: string } = {
      alias: 'Goblin King',
      name: 'David Bowie'
    }
    const result = pick(obj, ['name', 'job'])

    expect(result).toEqual({ name: obj.name })
  })
})
