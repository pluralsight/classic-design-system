import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import { bool, node, string } from 'prop-types'
import React from 'react'

const Container = glamorous.div({
  overflow: 'hidden',
  transition: `height ${core.motion.speedNormal}`,
})

export default class Collapsible extends React.Component {
  static propTypes = {
    isOpen: bool.isRequired,
    children: node
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
    if (isOpen)
      setTimeout(() => this.open(), 0)
    else
      this.close()
  }
  async open() {
    const element = this.containerElement
    this.setHeightToAuto(element)
    this.updateOverflowStyle(true, true)
    await this.waitForHeightTransitionToEnd(element)

    if (this.props.isOpen) {
      this.updateOverflowStyle(true, false)
      this.setTransitionEnabled(false, element)
      element.style.height = 'auto'
      this.forceRepaint(element)
      this.setTransitionEnabled(true, element)
    }
  }
  async close() {
    const element = this.containerElement
    this.setTransitionEnabled(false, element)
    element.style.height = window.getComputedStyle(element).height
    this.forceRepaint(element)
    this.updateOverflowStyle(false, true)
    this.setTransitionEnabled(true, element)
    element.style.height = '0px'
    await this.waitForHeightTransitionToEnd(element)

    if (!this.props.isOpen) {
      this.updateOverflowStyle(false, false)
    }
  }
  updateOverflowStyle(isOpen, isTransitioning = false) {
    this.containerElement.style.overflow = isTransitioning || !isOpen ? 'hidden' : 'visible'
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
  forceRepaint(element) {
    element.offsetHeight
  }
  async waitForHeightTransitionToEnd(element) {
    return new Promise(resolve => {
      element.addEventListener('transitionend', function transitionEnd(event) {
        if (event.propertyName === 'height') {
          element.removeEventListener('transitionend', transitionEnd, false)
          resolve()
        }
      }, false)
    })
  }
  setContainerElement = e => {
    this.containerElement = e
  }

  render() {
    return <Container innerRef={this.setContainerElement}>{this.props.children}</Container>
  }
}
