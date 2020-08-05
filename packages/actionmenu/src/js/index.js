import * as vars from '../vars/index.js'

export function calcNestedMenuPosition({ width, height }, origin) {
  return {
    topLeft: {
      left: -(width + vars.style.nestedMenuHorzOverlap),
      top: `calc(-1 * ${vars.style.menuPaddingVert})`
    },
    topRight: {
      right: width + vars.style.nestedMenuHorzOverlap,
      top: `calc(-1 * ${vars.style.menuPaddingVert})`
    },
    bottomRight: {
      right: width + vars.style.nestedMenuHorzOverlap,
      bottom: `calc(-1 * ${vars.style.menuPaddingVert})`
    },
    bottomLeft: {
      left: -(width + vars.style.nestedMenuHorzOverlap),
      bottom: `calc(-1 * ${vars.style.menuPaddingVert})`
    }
  }[origin]
}
