import { keyMirror } from '..'

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
