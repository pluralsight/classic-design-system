import { transparentize } from '..'

describe('#transparentize', () => {
  test('happy path', () => {
    expect(transparentize(0, '#000000')).toEqual('rgba(0,0,0,1)')
    expect(transparentize(0.5, '#ff0000')).toEqual('rgba(255,0,0,0.5)')
    expect(transparentize(0.2, '#ffffff')).toEqual('rgba(255,255,255,0.8)')
  })
})
