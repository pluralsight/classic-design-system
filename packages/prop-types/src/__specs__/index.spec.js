import * as checkers from '..'
import * as stubs from '../stubs'

test('should export type checkers', () => {
  expect(checkers).toMatchInlineSnapshot(`
Object {
  "arrayOfMaxLength": [Function],
  "elementOfType": [Function],
}
`)
})

test.each(Object.keys(checkers))(`"%s" should have a production stub`, name => {
  expect(stubs).toHaveProperty(name)
})
