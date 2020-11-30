import { KeyboardEventHandler, useCallback, createRef } from 'react'
import { useCombinedRefs } from '../use-combined-refs'

export const searchListItem = <E extends Element>(
  el?: E,
  down = true
): E | undefined => {
  if (!el) return

  const isDisabled = el.hasAttribute('disabled')
  const isListItem = el.tagName === 'LI'
  if (isListItem && !isDisabled) return el

  const nextEl = down ? el.nextElementSibling : el.previousElementSibling

  return searchListItem(nextEl as E, down)
}

const rightArrow = (evt: KeyboardEvent) => {
  const target = <HTMLElement>evt.target

  const subMenu = target.querySelector<HTMLUListElement>('* > ul')
  if (!subMenu) return

  const firstElementChild = subMenu.firstElementChild as HTMLLIElement
  const firstChild = searchListItem<HTMLLIElement>(firstElementChild)
  if (!firstChild) return

  firstChild.focus()
}

const leftArrow = (evt: KeyboardEvent) => {
  const target = <HTMLElement>evt.target

  const atMenuRoot = target.parentNode === evt.currentTarget
  if (atMenuRoot) return

  target.blur()

  const parent = target.parentElement?.parentElement
  if (!parent) return

  parent.focus()
}

const downArrow = (evt: KeyboardEvent) => {
  const target = <HTMLElement>evt.target

  const nextEl = <HTMLElement>target.nextElementSibling
  const nextSibling = searchListItem(nextEl)

  const firstChildEl = <HTMLElement>target.parentNode?.firstElementChild
  const firstChild = searchListItem(firstChildEl)

  if (nextSibling) nextSibling.focus()
  else if (firstChild) firstChild.focus()
}

const upArrow = (evt: KeyboardEvent) => {
  const target = <HTMLElement>evt.target

  const prevEl = <HTMLElement>target.previousElementSibling
  const prevSibling = searchListItem(prevEl, false)

  const lastEl = <HTMLElement>target.parentNode?.lastElementChild
  const lastChild = searchListItem(lastEl, false)

  if (prevSibling) prevSibling.focus()
  else if (lastChild) lastChild.focus()
}

const home = (evt: KeyboardEvent) => {
  const target = <HTMLElement>evt.target

  const firstChildEl = <HTMLElement>target.parentNode?.firstElementChild
  const firstChild = searchListItem(firstChildEl)

  if (firstChild) firstChild.focus()
}

const end = (evt: KeyboardEvent) => {
  const target = <HTMLElement>evt.target

  const lastChildEl = <HTMLElement>target.parentNode?.lastElementChild
  const lastChild = searchListItem(lastChildEl, false)

  if (lastChild) lastChild.focus()
}

const startsWith = (el: HTMLElement, key: string) => {
  if (el && typeof el.innerText === 'string') {
    return (
      el.innerText.startsWith(key) || el.innerText.startsWith(key.toUpperCase())
    )
  }
  return false
}

const character = (evt: KeyboardEvent) => {
  const target = <HTMLElement>evt.target

  const char = evt.key.length === 1 ? evt.key : false
  if (!char) return

  const nextSiblingEl = <HTMLElement>target.nextElementSibling
  const firstParentChild = <HTMLElement>target.parentNode?.firstElementChild

  let sibling =
    searchListItem(nextSiblingEl) || searchListItem(firstParentChild)

  const siblings = []
  while (sibling) {
    if (sibling === target) break

    const nextSiblingsSiblingEl = <HTMLElement>sibling.nextElementSibling

    siblings.push(sibling)
    sibling =
      searchListItem(nextSiblingsSiblingEl) || searchListItem(firstParentChild)
  }

  for (const el of siblings) {
    if (startsWith(el, char)) {
      el.focus()
      break
    }
  }
}

export const handleMenuKeyDownEvents: KeyboardEventHandler<HTMLUListElement> = synthetic => {
  const evt = synthetic.nativeEvent

  evt.key === 'ArrowDown'
    ? downArrow(evt)
    : evt.key === 'ArrowUp'
    ? upArrow(evt)
    : evt.key === 'Home'
    ? home(evt)
    : evt.key === 'End'
    ? end(evt)
    : character(evt)

  evt.preventDefault()
}

export const handleMenuKeyUpEvents: KeyboardEventHandler<HTMLUListElement> = synthetic => {
  const evt = synthetic.nativeEvent

  evt.key === 'ArrowRight' && rightArrow(evt)
  evt.key === 'ArrowLeft' && leftArrow(evt)

  evt.preventDefault()
}

export const useMenuRef = <El extends HTMLElement>(focus = false) => {
  const outer = createRef<El>()
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
