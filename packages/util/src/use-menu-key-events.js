const isListItem = (el, down = true) => {
  return el.tagName === 'LI'
    ? el
    : el.tagName !== 'LI'
    ? isListItem(down ? el.nextElementSibling : el.previousElementSibling, down)
    : false
}

const rightArrow = e => {
  const subMenu = e.target.lastElementChild
  if (subMenu.tagName !== 'UL') return
  const firstChild = isListItem(subMenu.firstElementChild)
  firstChild.focus()
}

const leftArrow = e => {
  const rootMenu = e.target.parentNode === e.currentTarget
  if (rootMenu) return
  e.target.blur()
  e.target.parentNode.parentNode.focus()
}

const downArrow = e => {
  const nextSibling = isListItem(e.target.nextElementSibling)
  const firstChild = isListItem(e.target.parentNode.firstElementChild)
  nextSibling ? nextSibling.focus() : firstChild.focus()
}

const upArrow = e => {
  const prevSibling = isListItem(e.target.previousElementSibling, false)
  const lastChild = isListItem(e.target.parentNode.lastElementChild, false)
  prevSibling ? prevSibling.focus() : lastChild.focus()
}

const home = e => {
  const firstChild = isListItem(e.target.parentNode.firstElementChild, false)
  firstChild.focus()
}

const end = e => {
  const lastChild = isListItem(e.target.parentNode.lastElementChild, false)
  lastChild.focus()
}

const char = e => {
  const target = e.target
  const isChar = e.key.length === 1
  const alreadyFocused =
    target.innerText.startsWith(e.key) ||
    target.innerText.startsWith(e.key.toUpperCase())
  // eslint-disable-next-line no-useless-return
  if (!isChar || alreadyFocused) return
}

const keyEventsHandler = e => {
  e.key === 'ArrowRight'
    ? rightArrow(e)
    : e.key === 'ArrowLeft'
    ? leftArrow(e)
    : e.key === 'ArrowDown'
    ? downArrow(e)
    : e.key === 'ArrowUp'
    ? upArrow(e)
    : e.key === 'Home'
    ? home(e)
    : e.key === 'End'
    ? end(e)
    : char(e)
}

export const useMenuKeyEvents = root => {
  const firstMenuItem = isListItem(root.firstElementChild)
  firstMenuItem && firstMenuItem.focus()
  root.addEventListener('keyup', keyEventsHandler)
  return keyEventsHandler
}
