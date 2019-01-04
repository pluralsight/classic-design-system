import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import css from '../css'

export default class Collapsible extends React.Component {
  constructor() {
    super(...arguments)
    this.setContainerElement = this.setContainerElement.bind(this)
  }

  componentDidMount() {
    this.updateOverflowStyle(this.props.isOpen)
    if (!this.props.isOpen) {
      this.containerElement.style.height = 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.toggle(nextProps.isOpen)
    }
  }

  toggle(isOpen) {
    if (isOpen) setTimeout(() => this.open(), 0)
    else this.close()
  }

  open() {
    const element = this.containerElement
    this.setHeightToAuto(element)
    this.updateOverflowStyle(true, true)
    return this.waitForHeightTransitionToEnd(element).then(() => {
      if (this.props.isOpen) {
        this.updateOverflowStyle(true, false)
        this.setTransitionEnabled(false, element)
        element.style.height = 'auto'
        this.forceRepaint(element)
        this.setTransitionEnabled(true, element)
      }
    })
  }

  close() {
    const element = this.containerElement
    this.setTransitionEnabled(false, element)
    element.style.height = window.getComputedStyle(element).height
    this.forceRepaint(element)
    this.updateOverflowStyle(false, true)
    this.setTransitionEnabled(true, element)
    element.style.height = '0px'

    return this.waitForHeightTransitionToEnd(element).then(() => {
      if (!this.props.isOpen) {
        this.updateOverflowStyle(false, false)
      }
    })
  }

  updateOverflowStyle(isOpen, isTransitioning = false) {
    this.containerElement.style.overflow =
      isTransitioning || !isOpen ? 'hidden' : 'visible'
    this.containerElement.style.visibility =
      isTransitioning || isOpen ? 'visible' : 'hidden'
  }

  setHeightToAuto(element) {
    const prevHeight = element.style.height
    element.style.height = 'auto'
    const autoHeight = window.getComputedStyle(element).height
    element.style.height = prevHeight
    this.forceRepaint(element)
    element.style.height = autoHeight
  }

  setTransitionEnabled(enabled, element) {
    element.style.transition = enabled ? '' : 'none'
  }

  // NOTE: see https://stackoverflow.com/a/3485654
  forceRepaint(element) {
    // eslint-disable-next-line no-unused-expressions
    element.offsetHeight
  }

  waitForHeightTransitionToEnd(element) {
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

  setContainerElement(el) {
    this.containerElement = el
  }

  render() {
    return (
      <div
        {...glamor.css(css['.psds-drawer__collapsible'])}
        {...filterReactProps(this.props)}
        ref={this.setContainerElement}
      />
    )
  }
}

Collapsible.displayName = 'Collapsible'

Collapsible.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node
}
