import * as vars from '../vars/index.js'

export function calcNextIndex(childrenProps, direction, currentIndex) {
  const count = childrenProps.length
  const next = currentIndex + direction

  if (next < 0) return 0
  if (next > count - 1) return count - 1

  const isDisabled = childrenProps[next].disabled
  if (isDisabled) {
    return direction === 1
      ? find(
          i => ++i,
          i => i >= childrenProps.length - 1,
          childrenProps,
          currentIndex,
          currentIndex
        )
      : find(i => --i, i => i < 0, childrenProps, currentIndex, currentIndex)
  } else {
    return next
  }
}

function find(iterate, base, props, start, from) {
  const i = iterate(from)
  if (base(i)) {
    return start
  } else if (props[i].disabled) {
    return find(iterate, base, props, start, i)
  } else {
    return i
  }
}

export function calcNestedMenuPosition(menuWidth, origin) {
  return {
    topLeft: {
      left: menuWidth + vars.style.nestedMenuHorzOverlap,
      top: `calc(-1 * ${vars.style.menuPaddingVert})`
    },
    topRight: {
      right: menuWidth + vars.style.nestedMenuHorzOverlap,
      top: `calc(-1 * ${vars.style.menuPaddingVert})`
    },
    bottomRight: {
      right: menuWidth + vars.style.nestedMenuHorzOverlap,
      bottom: `calc(-1 * ${vars.style.menuPaddingVert})`
    },
    bottomLeft: {
      left: menuWidth + vars.style.nestedMenuHorzOverlap,
      bottom: `calc(-1 * ${vars.style.menuPaddingVert})`
    }
  }[origin]
}
