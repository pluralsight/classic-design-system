import {parseToRgb} from '../'
test('parseToRgb(): rgb', () => {
  expect(parseToRgb('#8A99A8')).toBe('rgb(138,153,168)')
})
test('parseToRgb(): rgba', () => {
  expect(parseToRgb('#8A99A8', 0.1)).toBe('rgba(138,153,168,0.1)')
})