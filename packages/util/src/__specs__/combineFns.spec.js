import { combineFns } from '../combineFns.js'

test('combineFns()', () => {
  const expected = 'string'
  const firstSpy = jest.fn()
  const secondSpy = jest.fn()
  combineFns(firstSpy, secondSpy)(expected)
  expect(firstSpy).toHaveBeenCalledWith(expected)
  expect(secondSpy).toHaveBeenCalledWith(expected)
})
