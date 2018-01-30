import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { transparentize } from 'polished'

import css from '../css'
import * as vars from '../vars'

const styles = {
  tooltip: ({ appearance, onClose, tailPosition }) =>
    glamor.css({
      ...css[`.psds-tooltip`],
      ...css[`.psds-tooltip--appearance-${appearance}`],
      ...(typeof onClose === 'function'
        ? css[`.psds-tooltip--closeable`]
        : null),
      ':after': tailPosition
        ? {
            ...css[`.psds-tooltip:after`],
            ...css[`.psds-tooltip--appearance-${appearance}:after`],
            ...css[`.psds-tooltip--tailPosition-${tailPosition}:after`]
          }
        : null
    }),
  close: ({ appearance }) =>
    glamor.css({
      ...css[`.psds-tooltip__close`],
      ...css[`.psds-tooltip__close--appearance-${appearance}`],
      '> svg': {
        ...css[`.psds-tooltip__close > svg`],
        ...css[`.psds-tooltip__close--appearance-${appearance} > svg`]
      }
    })
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

const Tooltip = props => {
  const tooltipProps = {
    ...styles.tooltip(props),
    ...(props.style ? { style: props.style } : null),
    ...(props.className ? { className: props.className } : null)
  }
  return (
    <div {...tooltipProps}>
      {typeof props.onClose === 'function' && (
        <CloseButton appearance={props.appearance} onClose={props.onClose} />
      )}
      {props.children}
    </div>
  )
}

Tooltip.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  children: PropTypes.string.isRequired,
  tailPosition: PropTypes.oneOf(Object.keys(vars.tailPositions)),
  onClose: PropTypes.func
}
Tooltip.defaultProps = {
  appearance: vars.appearances.basic
}

Tooltip.appearances = vars.appearances
Tooltip.tailPositions = vars.tailPositions

export const appearances = vars.appearances
export const tailPositions = vars.tailPositions

export default Tooltip
