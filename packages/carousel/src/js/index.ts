import { ValueOf } from '@pluralsight/ps-design-system-util'

import { sizes } from '../vars/index'
import * as vars from '../vars'

const cardCountsPerWidth = {
  narrow: [
    { min: 1401, max: 9999, count: 8 },
    { min: 1201, max: 1400, count: 7 },
    { min: 901, max: 1200, count: 6 },
    { min: 701, max: 900, count: 5 },
    { min: 401, max: 700, count: 4 },
    { min: 321, max: 400, count: 2 },
    { min: 0, max: 320, count: 1 }
  ],
  wide: [
    { min: 1401, max: 9999, count: 6 },
    { min: 1201, max: 1400, count: 5 },
    { min: 901, max: 1200, count: 4 },
    { min: 701, max: 900, count: 3 },
    { min: 401, max: 700, count: 2 },
    { min: 0, max: 400, count: 1 }
  ]
}

export function calcItemsPerPage(
  itemSize: ValueOf<typeof sizes>,
  containerWidth: number
): number {
  const level = cardCountsPerWidth[itemSize].find(level => {
    return containerWidth >= level.min && containerWidth <= level.max
  })
  return level ? level.count : 1
}

export function calcItemWidth(
  itemSize: ValueOf<typeof vars.sizes>,
  containerWidth: number
) {
  const perPage = calcItemsPerPage(itemSize, containerWidth)
  const numMid = perPage - 2 > 0 ? perPage - 2 : 0
  const numEnd = perPage > 1 ? perPage - numMid : 0
  const itemWidth =
    containerWidth / perPage - (numMid * 16 + numEnd * 8) / perPage
  return itemWidth
}

export function calcStageOffsetBackward(itemWidth: number, index: number) {
  return index * (itemWidth + 16)
}

export function calcStageOffsetForward(
  perPage: number,
  itemWidth: number,
  index: number
) {
  return (index - perPage + 1) * (itemWidth + 16)
}

export function calcStageOffsetForPageAt(itemWidth: number, index: number) {
  return calcStageOffsetBackward(itemWidth, index)
}

export function calculateLeftMostVisibleIndex(
  itemWidth: number,
  stageOffset: number
) {
  return Math.ceil(stageOffset / (itemWidth + 16))
}

export const isLeftArrow = (evt: React.KeyboardEvent) => evt.keyCode === 37

export const isRightArrow = (evt: React.KeyboardEvent) => evt.keyCode === 39
