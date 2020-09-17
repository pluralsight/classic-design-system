import { useCallback, createRef } from 'react'
import { useCombinedRefs } from '..'

export const searchListItem = (el, down = true) => {
  if (!el) return
  return el.tagName === 'LI' && !el.hasAttribute('disabled')
    ? el
    : searchListItem(
        down ? el.nextElementSibling : el.previousElementSibling,
        down
      )
}

const rightArrow = e => {
  const subMenu = e.target.querySelector('* > ul')
  if (!subMenu) return
  const firstChild = searchListItem(subMenu.firstElementChild)
  firstChild && firstChild.focus()
}

const leftArrow = e => {
  const rootMenu = e.target.parentNode === e.currentTarget
  if (rootMenu) return
  e.target.blur()
  e.target.parentNode.parentNode.focus()
}

const downArrow = e => {
  const nextSibling = searchListItem(e.target.nextElementSibling)
  const firstChild = searchListItem(e.target.parentNode.firstElementChild)
  nextSibling ? nextSibling.focus() : firstChild.focus()
}

const upArrow = e => {
  const prevSibling = searchListItem(e.target.previousElementSibling, false)
  const lastChild = searchListItem(e.target.parentNode.lastElementChild, false)
  prevSibling ? prevSibling.focus() : lastChild.focus()
}

const home = e => {
  const firstChild = searchListItem(e.target.parentNode.firstElementChild)
  firstChild.focus()
}

const end = e => {
  const lastChild = searchListItem(e.target.parentNode.lastElementChild, false)
  lastChild.focus()
}

const startsWith = (el, key) => {
  return (
    el.innerText.startsWith(key) || el.innerText.startsWith(key.toUpperCase())
  )
}

const character = e => {
  const target = e.target
  const char = e.key.length === 1 ? e.key : false
  if (!char) return
  const siblings = []
  let sibling =
    searchListItem(target.nextElementSibling) ||
    searchListItem(target.parentNode.firstElementChild)
  while (sibling) {
    if (sibling === target) break
    siblings.push(sibling)
    sibling =
      searchListItem(sibling.nextElementSibling) ||
      searchListItem(target.parentNode.firstElementChild)
  }
  for (const el of siblings) {
    if (startsWith(el, char)) {
      el.focus()
      break
    }
  }
}

export const handleMenuKeyUpEvents = e => {
  e.key === 'ArrowRight' && rightArrow(e)
  e.key === 'ArrowLeft' && leftArrow(e)
  e.preventDefault()
}

export const handleMenuKeyDownEvents = e => {
  e.key === 'ArrowDown'
    ? downArrow(e)
    : e.key === 'ArrowUp'
    ? upArrow(e)
    : e.key === 'Home'
    ? home(e)
    : e.key === 'End'
    ? end(e)
    : character(e)
  e.preventDefault()
}

export const useMenuRef = (focus = false) => {
  const outer = createRef()
  const inner = useCallback(
    node => {
      if (node && focus) {
        const firstMenuItem = searchListItem(node.firstElementChild)
        firstMenuItem && firstMenuItem.focus()
      }
    },
    [focus]
  )
  return useCombinedRefs(outer, inner)
}
