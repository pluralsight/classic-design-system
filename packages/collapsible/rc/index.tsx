import { useCallback, useState, useEffect } from 'react'

// NOTE: see https://stackoverflow.com/a/3485654
const forceRepaint = element => {
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight
}

const setHeightToAuto = element => {
  const prevHeight = element.style.height
  element.style.height = 'auto'
  const autoHeight = window.getComputedStyle(element).height
  element.style.height = prevHeight
  forceRepaint(element)
  element.style.height = autoHeight
}

const setTransitionEnabled = (enabled, element) => {
  element.style.transition = enabled ? '' : 'none'
}

const waitForHeightTransitionToEnd = element => {
  const isAlreadyAtTargetHeight =
    element.style.height === `${element.getBoundingClientRect().height}px`
  if (isAlreadyAtTargetHeight) return Promise.resolve()

  const transitionEndEventPromise = new Promise(resolve => {
    element.addEventListener(
      'transitionend',
      function transitionEnd(event) {
        if (event.propertyName === 'height') {
          element.removeEventListener('transitionend', transitionEnd, false)
          resolve()
        }
      },
      false
    )
  })

  const transitionDuration = window.getComputedStyle(element).transitionDuration
  const transitionDurationSeconds = parseFloat(transitionDuration)
  const transitionDurationPassedPromise = new Promise(resolve => {
    setTimeout(resolve, transitionDurationSeconds * 1000)
  })

  return Promise.race([
    transitionEndEventPromise,
    transitionDurationPassedPromise
  ])
}
const updateOverflowStyle = ({ element, open, isTransitioning = false }) => {
  if (element) {
    element.style.overflow = isTransitioning || !open ? 'hidden' : 'auto'
    element.style.visibility = isTransitioning || open ? 'visible' : 'hidden'
  }
}

const isClosed = element => element.getBoundingClientRect().height === 0

const openContainer = element => {
  setHeightToAuto(element)
  updateOverflowStyle({ element, open: true, isTransitioning: true })

  waitForHeightTransitionToEnd(element).then(() => {
    if (!isClosed(element)) {
      updateOverflowStyle({ element, open: true, isTransitioning: false })
      setTransitionEnabled(false, element)
      element.style.height = 'auto'
      forceRepaint(element)
      setTransitionEnabled(true, element)
    }
  })
}

const closeContainer = (element, mounted) => {
  setTransitionEnabled(false, element)
  element.style.height = window.getComputedStyle(element).height
  forceRepaint(element)
  updateOverflowStyle({ element, open: false, isTransitioning: true })
  mounted && setTransitionEnabled(true, element)
  element.style.height = '0px'

  waitForHeightTransitionToEnd(element).then(() => {
    if (isClosed(element))
      updateOverflowStyle({ element, open: false, isTransitioning: false })
  })
}

export const useCollapsible = open => {
  const [mounted, setMount] = useState(false)
  const containerRef = useCallback(
    node => {
      if (node) open ? openContainer(node) : closeContainer(node, mounted)
    },
    [open, mounted]
  )
  useEffect(() => {
    setMount(true)
  }, [])

  return { 'aria-hidden': !open, ref: containerRef }
}
