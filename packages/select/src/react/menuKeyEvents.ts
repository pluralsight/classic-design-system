import { useCombinedRefs } from '@pluralsight/ps-design-system-util'
import React from 'react'

export const searchListItem = (
  el?: HTMLLIElement,
  down = true
): HTMLLIElement | undefined => {
  if (!el) return

  const isDisabled = el.hasAttribute('[data-disabled]')
  const isListItem = el.tagName === 'LI'
  if (isListItem && !isDisabled) return el

  const nextEl = down ? el.nextElementSibling : el.previousElementSibling

  return searchListItem(nextEl as HTMLLIElement, down)
}

const downArrow = (evt: KeyboardEvent) => {
  const target = <HTMLLIElement>evt.target

  const nextEl = <HTMLLIElement>target.nextElementSibling
  const nextSibling = searchListItem(nextEl)

  const firstChildEl = <HTMLLIElement>target.parentNode?.firstElementChild
  const firstChild = searchListItem(firstChildEl)

  if (nextSibling) nextSibling.focus()
  else if (firstChild) firstChild.focus()
}

const upArrow = (evt: KeyboardEvent) => {
  const target = <HTMLLIElement>evt.target

  const prevEl = <HTMLLIElement>target.previousElementSibling
  const prevSibling = searchListItem(prevEl, false)

  const lastEl = <HTMLLIElement>target.parentNode?.lastElementChild
  const lastChild = searchListItem(lastEl, false)

  if (prevSibling) prevSibling.focus()
  else if (lastChild) lastChild.focus()
}

const home = (evt: KeyboardEvent) => {
  const target = <HTMLLIElement>evt.target

  const firstChildEl = <HTMLLIElement>target.parentNode?.firstElementChild
  const firstChild = searchListItem(firstChildEl)

  if (firstChild) firstChild.focus()
}

const end = (evt: KeyboardEvent) => {
  const target = <HTMLLIElement>evt.target

  const lastChildEl = <HTMLLIElement>target.parentNode?.lastElementChild
  const lastChild = searchListItem(lastChildEl, false)

  if (lastChild) lastChild.focus()
}

const startsWith = (el: HTMLLIElement, key: string) => {
  if (el && typeof el.innerText === 'string') {
    return (
      el.innerText.startsWith(key) || el.innerText.startsWith(key.toUpperCase())
    )
  }
  return false
}

const character = (evt: KeyboardEvent) => {
  const target = <HTMLLIElement>evt.target

  const char = evt.key.length === 1 ? evt.key : false
  if (!char) return
  const nextSiblingEl = <HTMLLIElement>target.nextElementSibling
  const firstParentChild = <HTMLLIElement>target.parentNode?.firstElementChild

  let sibling =
    searchListItem(nextSiblingEl) || searchListItem(firstParentChild)

  const siblings = []
  while (sibling) {
    if (sibling === target) break

    const nextSiblingsSiblingEl = <HTMLLIElement>sibling.nextElementSibling

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

export const handleMenuKeyDownEvents: React.KeyboardEventHandler = synthetic => {
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

export const useMenuRef = () => {
  const [, setFocus] = React.useState<boolean | undefined>()
  const inner = React.useCallback(
    node => {
      if (node) {
        const firstMenuItem =
          node.querySelector('[aria-selected="true"]') ||
          searchListItem(node.firstElementChild)
        const requestId = requestAnimationFrame(() => {
          firstMenuItem.focus()
          setFocus(true)
        })
        return () => cancelAnimationFrame(requestId)
      }
    },
    [setFocus]
  )
  return useCombinedRefs(inner)
}
