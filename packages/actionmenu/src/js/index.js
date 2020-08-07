import * as vars from '../vars/index.js'

export function calcNestedMenuPosition(parent, menu, origin) {
  return {
    topLeft: {
      left: -parent.width,
      top: `calc(-1 * ${vars.style.menuPaddingVert})`
    },
    topRight: {
      right: parent.width,
      top: `calc(-1 * ${vars.style.menuPaddingVert})`
    },
    bottomRight: {
      right: parent.width,
      top: -Math.abs(parent.height - menu.height)
    },
    bottomLeft: {
      left: -parent.width,
      top: -Math.abs(parent.height - menu.height)
    }
  }[origin]
}
