import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'

import css from '../css'

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
  return new Promise(resolve => {
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
}
const updateOverflowStyle = ({ element, isOpen, isTransitioning = false }) => {
  if (element) {
    element.style.overflow = isTransitioning || !isOpen ? 'hidden' : 'visible'
    element.style.visibility = isTransitioning || isOpen ? 'visible' : 'hidden'
  }
}

const open = (element, isOpen) => {
  setHeightToAuto(element)
  updateOverflowStyle({ element, isOpen: true, isTransitioning: true })
  return waitForHeightTransitionToEnd(element).then(() => {
    if (isOpen) {
      updateOverflowStyle(true, false)
      setTransitionEnabled(false, element)
      element.style.height = 'auto'
      forceRepaint(element)
      setTransitionEnabled(true, element)
    }
  })
}

const close = (element, isOpen) => {
  setTransitionEnabled(false, element)
  element.style.height = window.getComputedStyle(element).height
  forceRepaint(element)
  updateOverflowStyle({ element, isOpen: false, isTransitioning: true })
  setTransitionEnabled(true, element)
  element.style.height = '0px'

  return waitForHeightTransitionToEnd(element).then(() => {
    if (!isOpen) {
      updateOverflowStyle(false, false)
    }
  })
}

const Collapsible = ({ isOpen, children }) => {
  const containerElement = useRef()

  useEffect(() => {
    if (isOpen)
      setTimeout(
        () =>
          containerElement.current && open(containerElement.current, isOpen),
        0
      )
    else {
      containerElement.current.style.height = 0
      containerElement.current && close(containerElement.current, isOpen)
    }
  }, [isOpen])

  return (
    <div
      aria-hidden={!isOpen}
      {...glamor.css(css['.psds-drawer__collapsible'])}
      children={children}
      ref={containerElement}
    />
  )
}

Collapsible.displayName = 'Collapsible'

Collapsible.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node
}
Collapsible.defaultProps = {
  isOpen: false
}
export default Collapsible
