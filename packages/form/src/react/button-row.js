import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css/index.js'
import * as vars from '../vars/index.js'

const styles = {
  buttonRow: props =>
    glamor.compose(
      glamor.css(css['.psds-form-button-row']),
      glamor.css(css[`.psds-form-button-row--align-${props.align}`])
    ),
  button: _ =>
    glamor.css(css['.psds-form-button-row__button'], {
      ':last-child': css['.psds-form-button-row__button:last-child']
    })
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
  children: PropTypes.arrayOf(PropTypes.element)
}
ButtonRow.defaultProps = {
  align: vars.aligns.left
}

ButtonRow.aligns = vars.aligns

export const aligns = vars.aligns

export default ButtonRow
