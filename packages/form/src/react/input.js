import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { Input as css } from '../css'
import { Input as vars } from '../vars'

const styles = {
  input: ({ appearance }) =>
    glamor.css(
      css['.psds-form-input'],
      css[`.psds-form-input--appearance-${appearance}`]
    ),
  label: _ => glamor.css(css['.psds-form-input__label']),
  subLabel: _ => glamor.css(css['.psds-form-input__sub-label'])
}

class Input extends React.Component {
  render() {
    const { props } = this
    return (
      <div>
        <div {...styles.label(props)}>{props.label}</div>
        <input placeholder={props.placeholder} {...styles.input(props)} />
        <div {...styles.subLabel(props)}>{props.subLabel}</div>
      </div>
    )
  }
}

Input.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  label: PropTypes.node,
  placeholder: PropTypes.string,
  subLabel: PropTypes.node
}

Input.appearances = vars.appearances

export const appearances = vars.appearances
export default Input
