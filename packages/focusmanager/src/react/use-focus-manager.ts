/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { canUseDOM, RefFor } from '@pluralsight/ps-design-system-util'
import React from 'react'

const FOCUSABLE_SELECTORS = [
  '[contenteditable]:not([contenteditable="false"])',
  '[tabindex]',
  'a[href]',
  'audio[controls]',
  'button',
  'iframe',
  'input',
  'select',
  'textarea',
  'video[controls]'
]

export default function useFocusManager(
  ref: RefFor<'div'>,
  {
    autofocus,
    returnFocus,
    trapped
  }: {
    autofocus: boolean
    returnFocus: boolean
    trapped: boolean
  }
) {
  const prevActiveElRef = React.useRef<HTMLElement>(null)
  React.useEffect(() => {
    // @ts-ignore: read-only prop
    prevActiveElRef.current = document.activeElement
  }, [])

  const [node, setNode] = React.useState<HTMLDivElement | null>(null)
  React.useEffect(() => {
    setNode(ref.current)
  }, [ref])

  const [focusableNodes, setFocusableEls] = React.useState<HTMLElement[]>([])
  const firstNode = React.useMemo(() => focusableNodes[0], [focusableNodes])
  const lastNode = React.useMemo(
    () => focusableNodes[focusableNodes.length - 1],
    [focusableNodes]
  )

  React.useEffect(() => {
    if (focusableNodes.length === 0)
      (ref.current as HTMLDivElement).setAttribute('tabindex', '0')
    else (ref.current as HTMLDivElement).removeAttribute('tabindex')
  }, [focusableNodes, ref])

  React.useEffect(() => {
    let observer: MutationObserver | undefined
    if (canUseDOM() && node instanceof Node) {
      observer = new MutationObserver(mutationList => {
        mutationList.forEach(mutation => {
          if (mutation.type === 'childList') {
            const nextEls = getFocusableChildNodes(node)
            setFocusableEls(nextEls)
          }
        })
      })
      observer.observe(node, { childList: true })
    }

    const nextEls = getFocusableChildNodes(node)
    setFocusableEls(nextEls)

    return () => {
      observer?.disconnect()
    }
  }, [node])

  React.useEffect(() => {
    if (!autofocus) return

    const toFocus = firstNode || ref.current
    toFocus.focus()
  }, [firstNode, autofocus, ref])

  const handleKeyDown = React.useCallback(
    evt => {
      if (!isTab(evt)) return

      const { activeElement: curActive } = document

      const reverse = withShift(evt)
      if (curActive === firstNode && reverse) {
        lastNode.focus()
        evt.preventDefault()
        evt.stopPropagation()
      } else if (curActive === lastNode && !reverse) {
        firstNode.focus()
        evt.preventDefault()
        evt.stopPropagation()
      }
    },
    [firstNode, lastNode]
  )
  React.useEffect(
    function bind() {
      if (!trapped) return

      window.addEventListener('keydown', handleKeyDown)

      return function unbind() {
        window.removeEventListener('keydown', handleKeyDown)
      }
    },
    [handleKeyDown, autofocus, returnFocus, trapped]
  )

  React.useEffect(() => {
    if (!returnFocus) return

    return function returnFocusWhenUnmounted() {
      if (prevActiveElRef.current) prevActiveElRef.current.focus()
    }
  }, [returnFocus])
}

function hasNegativeTabIndex(el: Element) {
  return el.getAttribute('tabindex') && Number(el.getAttribute('tabindex')) < 0
}

function withShift(evt: React.KeyboardEvent) {
  return evt.shiftKey
}

function isTab(evt: React.KeyboardEvent) {
  return evt.key === 'Tab'
}

function getFocusableChildNodes(el?: Element | null) {
  if (!el) return []

  const selectAll = FOCUSABLE_SELECTORS.join(',')
  const nodelist = el.querySelectorAll(selectAll)

  return Array.from(nodelist || []).filter(
    node => !hasNegativeTabIndex(node)
  ) as HTMLElement[]
}
