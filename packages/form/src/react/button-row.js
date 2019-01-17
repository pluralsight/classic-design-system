import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css/index.js'

const styles = {
  buttonRow: _ => glamor.css(css['.psds-form-button-row']),
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
  children: PropTypes.arrayOf(PropTypes.element)
}

export default ButtonRow
