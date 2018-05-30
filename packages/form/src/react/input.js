import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'

import { Input as css } from '../css'
import { Input as vars } from '../vars'

const styles = {
  error: _ => glamor.css(css['.psds-form-input__error']),
  errorContainer: _ => glamor.css(css['.psds-form-input__error-container']),
  field: ({ appearance, iconAlign }) =>
    glamor.css(
      css['.psds-form-input__field'],
      css[`.psds-form-input__field--appearance-${appearance}`],
      css[`.psds-form-input__field--icon-align-${iconAlign}`],
      { ':focus': css['.psds-form-input__field:focus'] }
    ),
  fieldContainer: ({ error }, { isFocused }) =>
    glamor.css(
      css['.psds-form-input__field-container'],
      error
        ? {
            ':before': css['.psds-form-input__field-container--error:before'],
            ':after': css['.psds-form-input__field-container--error:after']
          }
        : null,
      isFocused
        ? {
            ':before': css['.psds-form-input__field-container:focus:before'],
            ':after': css['.psds-form-input__field-container:focus:after']
          }
        : null
    ),
  icon: ({ appearance, iconAlign }) =>
    glamor.css(
      css['.psds-form-input__icon'],
      css[`.psds-form-input__icon--icon-align-${iconAlign}`],
      css[`.psds-form-input__icon--appearance-${appearance}`]
    ),
  input: _ => glamor.css(css['.psds-form-input']),
  label: _ => glamor.css(css['.psds-form-input__label']),
  subLabel: _ => glamor.css(css['.psds-form-input__sub-label'])
}

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isFocused: false }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }
  handleFocus() {
    this.setState(_ => ({ isFocused: true }))
  }
  handleBlur() {
    this.setState(_ => ({ isFocused: false }))
  }
  render() {
    const { props, state } = this
    return (
      <div
        {...styles.input(props)}
        {...(props.style ? { style: props.style } : null)}
      >
        <div {...styles.label(props)}>{props.label}</div>
        <div {...styles.errorContainer(props)}>
          <div {...styles.fieldContainer(props, state)}>
            <input
              placeholder={props.placeholder}
              {...styles.field(props)}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            {props.icon && <div {...styles.icon(props)}>{props.icon}</div>}
          </div>
          {props.error && (
            <div {...styles.error(props)}>
              <Icon id={Icon.ids.warning} />
            </div>
          )}
        </div>
        <div {...styles.subLabel(props)}>{props.subLabel}</div>
      </div>
    )
  }
}

Input.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  error: PropTypes.bool,
  icon: PropTypes.element,
  iconAlign: PropTypes.oneOf(Object.keys(vars.iconAligns)),
  label: PropTypes.node,
  placeholder: PropTypes.string,
  subLabel: PropTypes.node
}
Input.defaultProps = {
  error: false
}

Input.appearances = vars.appearances
Input.iconAligns = vars.iconAligns

export const appearances = vars.appearances
export const iconAligns = vars.iconAligns
export default Input
