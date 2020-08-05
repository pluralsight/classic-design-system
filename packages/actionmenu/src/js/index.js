import * as vars from '../vars/index.js'

export const onOpen = (subMenu, setPosition) => {
  const coords = subMenu.getBoundingClientRect()
  const parentCoords = subMenu.parentNode.getBoundingClientRect()
  // the default position of the menu is rightOf it's parent list item
  // so We'll use a modified version of rightOf from position
}
