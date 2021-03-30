import { parseToRgb } from '../'
test('parseToRgb(): rgb', () => {
  expect(parseToRgb('#8A99A8')).toBe('138,153,168')
})
