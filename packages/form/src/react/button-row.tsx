import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css'
import * as vars from '../vars'

const styles = {
  buttonRow: props =>
    css(
      stylesheet['.psds-form-button-row'],
      stylesheet[`.psds-form-button-row--align-${props.align}`]
    ),
  button: _ => css(stylesheet['.psds-form-button-row__button'])
}

const ButtonRow = (props, context) => (
  <div {...styles.buttonRow(props)}>
    {React.Children.map(props.children, (button, i) => (
      <div {...styles.button(props)}>{button}</div>
    ))}
  </div>
)
ButtonRow.displayName = 'ButtonRow'
ButtonRow.propTypes = {
  align: PropTypes.oneOf(Object.keys(vars.aligns).map(k => vars.aligns[k])),
  children: PropTypes.node
}
ButtonRow.defaultProps = {
  align: vars.aligns.left
}

ButtonRow.aligns = vars.aligns

export const aligns = vars.aligns

export default ButtonRow
