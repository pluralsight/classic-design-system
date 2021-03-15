import { ConstraintSet } from '../vars/index.js'

export function calcItemsPerPage(
  constraints: ConstraintSet,
  width: number
): number {
  const minItemSize = constraints.minWidth + constraints.gutter
  const perPage = Math.floor(width / (minItemSize - constraints.gutter))

  return perPage <= 0 ? 1 : perPage
}

export const isLeftArrow = (evt: React.KeyboardEvent) => evt.keyCode === 37

export const isRightArrow = (evt: React.KeyboardEvent) => evt.keyCode === 39
