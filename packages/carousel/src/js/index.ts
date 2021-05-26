import { ValueOf } from '@pluralsight/ps-design-system-util'

import { sizes } from '../vars/index'
import * as vars from '../vars'

const cardCountsPerWidth = {
  small: [
    { min: 1551, max: 9999, count: 8 },
    { min: 1201, max: 1550, count: 7 },
    { min: 901, max: 1200, count: 6 },
    { min: 651, max: 900, count: 5 },
    { min: 451, max: 650, count: 4 },
    { min: 301, max: 450, count: 3 },
    { min: 201, max: 300, count: 2 },
    { min: 0, max: 200, count: 1 }
  ],
  medium: [
    { min: 1501, max: 9999, count: 6 },
    { min: 1151, max: 1500, count: 5 },
    { min: 851, max: 1150, count: 4 },
    { min: 601, max: 850, count: 3 },
    { min: 301, max: 600, count: 2 },
    { min: 0, max: 300, count: 1 }
  ],
  large: [
    { min: 1301, max: 9999, count: 4 },
    { min: 901, max: 1300, count: 3 },
    { min: 501, max: 900, count: 2 },
    { min: 0, max: 500, count: 1 }
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
