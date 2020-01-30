export function calcItemsPerPage(constraints, width) {
  const minItemSize = constraints.minWidth + constraints.gutter
  const perPage = Math.floor(width / (minItemSize - constraints.gutter))

  return perPage <= 0 ? 1 : perPage
}

export const isLeftArrow = evt => evt.keyCode === 37

export const isRightArrow = evt => evt.keyCode === 39
