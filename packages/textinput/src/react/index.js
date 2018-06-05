import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'

import css from '../css'
import * as vars from '../vars'

const styles = {
  error: _ => glamor.css(css['.psds-form-input__error']),
  field: ({ appearance, icon, iconAlign, themeName }) =>
    glamor.css(
      css['.psds-form-input__field'],
      css[`.psds-form-input__field--appearance-${appearance}`],
      icon && css[`.psds-form-input__field--icon-align-${iconAlign}`],
      css[`.psds-form-input__field.psds-theme--${themeName}`],
      { ':focus': css['.psds-form-input__field:focus'] }
    ),
  fieldContainer: ({ error, themeName }, { isFocused }) =>
    glamor.css(
      css['.psds-form-input__field-container'],
      error
        ? {
            ':before': {
              ...css['.psds-form-input__field-container--error:before'],
              ...css[
                `.psds-form-input__field-container--error.psds-theme--${themeName}:before`
              ]
            },
            ':after': css['.psds-form-input__field-container--error:after']
          }
        : null,
      isFocused
        ? {
            ':before': {
              ...css['.psds-form-input__field-container:focus:before'],
              ...css[
                `.psds-form-input__field-container.psds-theme--${themeName}:focus:before`
              ]
            },
            ':after': css['.psds-form-input__field-container:focus:after']
          }
        : null
    ),
  icon: ({ appearance, icon, iconAlign, themeName }) =>
    glamor.css(
      css['.psds-form-input__icon'],
      icon && css[`.psds-form-input__icon--icon-align-${iconAlign}`],
      css[`.psds-form-input__icon--appearance-${appearance}`],
      css[`.psds-form-input__icon.psds-theme--${themeName}`]
    ),
  input: ({ disabled }) =>
    glamor.css(
      css['.psds-form-input'],
      disabled && css['.psds-form-input--disabled']
    ),
  label: ({ themeName }) =>
    glamor.css(
      css['.psds-form-input__label'],
      css[`.psds-form-input__label.psds-theme--${themeName}`]
    ),
  subLabel: ({ themeName }) =>
    glamor.css(
      css['.psds-form-input__sub-label'],
      css[`.psds-form-input__sub-label.psds-theme--${themeName}`]
    )
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
    const { context, props, state } = this
    const allProps = {
      ...props,
      themeName: context.themeName || themeDefaultName
    }
    return (
      <div
        {...styles.input(allProps)}
        {...(allProps.style ? { style: allProps.style } : null)}
      >
        {allProps.label && (
          <div {...styles.label(allProps)}>{allProps.label}</div>
        )}
        <div {...styles.fieldContainer(allProps, state)}>
          <input
            disabled={allProps.disabled}
            placeholder={allProps.placeholder}
            {...styles.field(allProps)}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          {allProps.icon && (
            <div {...styles.icon(allProps)}>{allProps.icon}</div>
          )}
          {allProps.error && (
            <div {...styles.error(allProps)}>
              <Icon id={Icon.ids.warning} />
            </div>
          )}
        </div>
        {allProps.subLabel && (
          <div {...styles.subLabel(allProps)}>{allProps.subLabel}</div>
        )}
      </div>
    )
  }
}

Input.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.element,
  iconAlign: PropTypes.oneOf(Object.keys(vars.iconAligns)),
  label: PropTypes.node,
  placeholder: PropTypes.string,
  subLabel: PropTypes.node
}
Input.defaultProps = {
  disabled: false,
  error: false,
  iconAlign: vars.iconAligns.left
}
Input.contextTypes = {
  themeName: PropTypes.string
}

Input.appearances = vars.appearances
Input.iconAligns = vars.iconAligns

export const appearances = vars.appearances
export const iconAligns = vars.iconAligns
export default Input
