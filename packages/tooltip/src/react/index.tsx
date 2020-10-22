import { compose, css, keyframes } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css'
import * as vars from '../vars'

const fade = keyframes(stylesheet[`@keyframes psds-tooltip__keyframes__fade`])
const styles = {
  tail: ({ appearance, onClose, tailPosition }) => {
    const label = 'psds-tooltip__tail'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--appearance-${appearance}`]),
      css(stylesheet[`.${label}--tailPosition-${tailPosition}`])
    )
  },
  tooltip: ({ appearance, onClose }) => {
    const label = 'psds-tooltip'
    const closeable = typeof onClose === 'function'

    return compose(
      css(stylesheet[`.${label}`]({ fade })),
      css(stylesheet[`.${label}--appearance-${appearance}`]),
      closeable && css(stylesheet[`.${label}--closeable`])
    )
  },
  close: ({ appearance }) => {
    const label = 'psds-tooltip__close'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--appearance-${appearance}`])
    )
  }
}

const CloseButton = props => (
  <button
    {...styles.close(props)}
    onClick={props.onClose}
    aria-label="Close tooltip"
  >
    <svg
      role="img"
      aria-label="close icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 7.41L16.59 6 12 10.59 7.41 6 6 7.41 10.59 12 6 16.59 7.41 18 12 13.41 16.59 18 18 16.59 13.41 12" />
    </svg>
  </button>
)
CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired
}

const Tooltip = React.forwardRef((props, ref) => {
  return (
    <div {...styles.tooltip(props)} {...filterReactProps(props)} ref={ref}>
      {typeof props.onClose === 'function' && (
        <CloseButton appearance={props.appearance} onClose={props.onClose} />
      )}
      {props.children}
      {props.tailPosition && <div {...styles.tail(props)} aria-hidden />}
    </div>
  )
})

Tooltip.displayName = 'Tooltip'
Tooltip.defaultProps = {
  appearance: vars.appearances.basic
}
Tooltip.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  tailPosition: PropTypes.oneOf(Object.keys(vars.tailPositions))
}

Tooltip.appearances = vars.appearances
Tooltip.tailPositions = vars.tailPositions

export const appearances = vars.appearances
export const tailPositions = vars.tailPositions

export default Tooltip
