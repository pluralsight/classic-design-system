import { parseToRgb } from '..'

describe('#parseToRgb', () => {
  test('happy path', () => {
    expect(parseToRgb('#000000')).toEqual('0,0,0')
    expect(parseToRgb('#ff0000')).toEqual('255,0,0')
    expect(parseToRgb('#ffffff')).toEqual('255,255,255')
  })
})
