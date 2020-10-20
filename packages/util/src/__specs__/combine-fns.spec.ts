import { combineFns } from '..'

test('combineFns()', () => {
  const expected = 'string'
  const first = jest.fn()
  const second = undefined
  const third = null
  const fourth = jest.fn()

  combineFns(first, second, third, fourth)(expected)

  expect(first).toHaveBeenCalledWith(expected)
  expect(fourth).toHaveBeenCalledWith(expected)
})
