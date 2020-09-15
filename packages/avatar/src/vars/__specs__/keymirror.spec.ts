import keyMirror from '../key-mirror'

describe('#keyMirror', () => {
  it('return a object of mirrored string values', () => {
    expect(keyMirror('a', 'b', 'c')).toMatchInlineSnapshot(`
      Object {
        "a": "a",
        "b": "b",
        "c": "c",
      }
    `)
  })
})
