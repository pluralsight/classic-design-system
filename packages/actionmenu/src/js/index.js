import * as vars from '../vars/index.js'

export const handleMenuMouseover = e => {
  const subMenu = e.target.querySelector('* > ul')
  if (!subMenu) return
  subMenu.setAttribute('aria-expanded', 'true')
}

export const handleMenuMouseout = e => {
  const subMenu = e.target.querySelector('* > ul')
  if (!subMenu) return
  e.target.parentNode.setAttribute('aria-expanded', 'false')
}

export const handleMenuBlur = e => {
  const subMenu = e.target.querySelector('* > ul')
  if (subMenu.tagName !== 'UL') return
  e.target.parentNode.setAttribute('aria-expanded', 'false')
}

export const handleClick = e => {
  const firstMenuItem = searchListItem(e.currentTarget.firstElementChild)
  firstMenuItem && firstMenuItem.focus()
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
