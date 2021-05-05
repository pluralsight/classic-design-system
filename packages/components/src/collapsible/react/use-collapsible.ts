import React from 'react'

import {
  forceRepaint,
  setHeightToAuto,
  setTransitionEnabled,
  updateOverflowStyle,
  waitForHeightTransitionToEnd
} from '../js/index'

export const useCollapsible = (isOpen: boolean) => {
  const [mounted, setMount] = React.useState(false)

  React.useEffect(() => {
    setMount(true)
  }, [])

  const ref = React.useCallback<React.RefCallback<HTMLElement>>(
    async node => {
      if (node) isOpen ? await open(node) : await close(node, { mounted })
    },
    [isOpen, mounted]
  )

  return { 'aria-hidden': !isOpen, ref }
}

const open = async (el: HTMLElement) => {
  setHeightToAuto(el)
  updateOverflowStyle(el, { isOpen: true, isTransitioning: true })

  await waitForHeightTransitionToEnd(el)

  if (isClosed(el)) return

  updateOverflowStyle(el, { isOpen: true, isTransitioning: false })
  setTransitionEnabled(el, { enabled: false })
  el.style.height = 'auto'

  forceRepaint(el)
  setTransitionEnabled(el, { enabled: true })
}

const close = async (el: HTMLElement, opts: { mounted: boolean }) => {
  const { mounted } = opts

  setTransitionEnabled(el, { enabled: false })
  el.style.height = window.getComputedStyle(el).height

  forceRepaint(el)

  updateOverflowStyle(el, { isOpen: false, isTransitioning: true })
  mounted && setTransitionEnabled(el, { enabled: true })
  el.style.height = '0px'

  await waitForHeightTransitionToEnd(el)

  if (isOpen(el)) return
  updateOverflowStyle(el, { isOpen: false, isTransitioning: false })
}

const isClosed = (el: HTMLElement) => el.getBoundingClientRect().height === 0
const isOpen = (el: HTMLElement) => !isClosed(el)
