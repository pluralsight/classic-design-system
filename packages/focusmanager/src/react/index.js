import PropTypes from 'prop-types'
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

const hasNegativeTabIndex = el =>
  el.getAttribute('tabindex') && el.getAttribute('tabindex') < 0

const getFocusableChildNodes = el => {
  const selectAll = FOCUSABLE_SELECTORS.join(',')
  const nodelist = el.querySelectorAll(selectAll)

  return Array.from(nodelist || []).filter(node => !hasNegativeTabIndex(node))
}

class FocusManager extends React.Component {
  constructor(props) {
    super(props)

    this.prevFocusedElement = document.activeElement

    this.bindElement = this.bindElement.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  bindElement(el) {
    this.el = el
  }

  componentDidMount() {
    this.focusableNodes = getFocusableChildNodes(this.el)

    const firstNode = this.focusableNodes[0]
    if (this.props.autofocus && firstNode) firstNode.focus()
  }

  componentDidUpdate() {
    this.focusableNodes = getFocusableChildNodes(this.el)
  }

  componentWillUnmount() {
    const { prevFocusedElement: prev } = this
    if (this.props.returnFocus && prev && prev.focus) prev.focus()
  }

  handleKeyDown(event) {
    const isTab = event.key === 'Tab'
    const withShiftKey = event.shiftKey

    if (!isTab || !this.props.trapped) return

    const { activeElement } = document

    const firstNode = this.focusableNodes[0]
    const lastNode = this.focusableNodes[this.focusableNodes.length - 1]

    if (activeElement === firstNode && withShiftKey) {
      lastNode.focus()
      event.preventDefault()
    } else if (activeElement === lastNode && !withShiftKey) {
      firstNode.focus()
      event.preventDefault()
    }
  }

  render() {
    const { autofocus, returnFocus, trapped, ...filteredProps } = this.props

    return (
      <div
        ref={this.bindElement}
        onKeyDown={this.handleKeyDown}
        {...filteredProps}
      />
    )
  }
}

FocusManager.propTypes = {
  autofocus: PropTypes.bool,
  children: PropTypes.node.isRequired,
  returnFocus: PropTypes.bool,
  trapped: PropTypes.bool
}

FocusManager.defaultProps = {
  autofocus: true,
  returnFocus: true,
  trapped: true
}

export default FocusManager
