import { useCallback, createRef } from 'react'
import { useCombinedRefs } from './use-combined-refs.js'

const searchListItem = (el, down = true) => {
  if (!el) return
  return el.tagName === 'LI'
    ? el
    : searchListItem(
        down ? el.nextElementSibling : el.previousElementSibling,
        down
      )
}

const rightArrow = e => {
  const subMenu = e.target.querySelector('* > ul')
  if (subMenu.tagName !== 'UL') return
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

const menuKeydownEventsHandler = e => {
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
    : character(e)
  e.preventDefault()
}

export const menuKeydownListener = root => {
  const firstMenuItem = searchListItem(root.firstElementChild)
  firstMenuItem && firstMenuItem.focus()
  firstMenuItem && root.addEventListener('keydown', menuKeydownEventsHandler)
  return menuKeydownEventsHandler
}

export const useMenuKeyEvents = () => {
  const outer = createRef()
  const inner = useCallback(node => {
    if (node !== null) {
      menuKeydownListener(node)
    }
  }, [])
  const ref = useCombinedRefs(outer, inner)
  return [
    ref,
    () => ref.current.removeEventListener('keydown', menuKeydownEventsHandler)
  ]
}
