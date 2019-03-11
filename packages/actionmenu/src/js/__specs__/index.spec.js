import { calcNextIndex } from '../index.js'

describe('#calcNextIndex', () => {
  it('finds next', () => {
    const children = [{}, {}]
    const direction = 1
    const currentIndex = 0
    expect(calcNextIndex(children, direction, currentIndex)).toEqual(
      currentIndex + direction
    )
  })
  it('finds prev', () => {
    const children = [{}, {}]
    const direction = -1
    const currentIndex = 1
    expect(calcNextIndex(children, direction, currentIndex)).toEqual(
      currentIndex + direction
    )
  })
  it('stops next at end', () => {
    const children = [{}, {}]
    const direction = 1
    const currentIndex = children.length - 1
    expect(calcNextIndex(children, direction, currentIndex)).toEqual(
      children.length - 1
    )
  })
  it('stops prev at 0', () => {
    const children = [{}, {}]
    const direction = -1
    const currentIndex = 0
    expect(calcNextIndex(children, direction, currentIndex)).toEqual(0)
  })
  it('stops next if all disabled', () => {
    const children = [{}, { disabled: true }]
    const direction = 1
    const currentIndex = 0
    expect(calcNextIndex(children, direction, currentIndex)).toEqual(0)
  })
  it('stops prev if all disabled', () => {
    const children = [{ disabled: true }, {}]
    const direction = -1
    const currentIndex = 1
    expect(calcNextIndex(children, direction, currentIndex)).toEqual(
      currentIndex
    )
  })
  it('skips to next enabled', () => {
    const children = [{}, { disabled: true }, {}, {}]
    const direction = 1
    const currentIndex = 0
    expect(calcNextIndex(children, direction, currentIndex)).toEqual(2)
  })
  it('skips to prev enabled', () => {
    const children = [{}, {}, { disabled: true }, {}]
    const direction = -1
    const currentIndex = 3
    expect(calcNextIndex(children, direction, currentIndex)).toEqual(1)
  })
  it('advances to min', () => {
    const children = [{}, { disabled: true }, {}]
    const direction = -1
    const currentIndex = 2
    expect(calcNextIndex(children, direction, currentIndex)).toEqual(0)
  })
})
