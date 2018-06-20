import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'

import css from '../css'
import * as vars from '../vars'

const textInputHtmlPropsWhitelist = [
  'type',
  'name',
  'autocomplete',
  'autofocus',
  'role',
  'tabIndex',
  'value',
  'defaultValue',
  /^on/,
  /^aria-/,
  /^data-/,
  /^form/
]

const styles = {
  error: _ => glamor.css(css['.psds-text-input__error']),
  field: ({ appearance, error, icon, iconAlign, themeName }) =>
    glamor.css(
      css['.psds-text-input__field'],
      css[`.psds-text-input__field--appearance-${appearance}`],
      icon && css[`.psds-text-input__field--icon-align-${iconAlign}`],
      css[`.psds-text-input__field.psds-theme--${themeName}`],
      error && css[`.psds-text-input__field--error.psds-theme--${themeName}`],
      {
        ':focus': {
          ...css['.psds-text-input__field:focus'],
          ...css[`.psds-text-input__field.psds-theme--${themeName}:focus`]
        }
      }
    ),
  fieldContainer: ({ error, themeName }, { isFocused }) =>
    glamor.css(
      css['.psds-text-input__field-container'],
      error
        ? {
            ':before': {
              ...css['.psds-text-input__field-container--error:before'],
              ...css[
                `.psds-text-input__field-container--error.psds-theme--${themeName}:before`
              ]
            },
            ':after': {
              ...css['.psds-text-input__field-container--error:after'],
              ...css[
                `.psds-text-input__field-container--error.psds-theme--${themeName}:after`
              ]
            }
          }
        : null,
      isFocused
        ? {
            ':before': {
              ...css['.psds-text-input__field-container:focus:before'],
              ...css[
                `.psds-text-input__field-container.psds-theme--${themeName}:focus:before`
              ]
            },
            ':after': {
              ...css['.psds-text-input__field-container:focus:after'],
              ...css[
                `.psds-text-input__field-container.psds-theme--${themeName}:focus:after`
              ]
            }
          }
        : null
    ),
  icon: ({ appearance, icon, iconAlign, themeName }) =>
    glamor.css(
      css['.psds-text-input__icon'],
      icon && css[`.psds-text-input__icon--icon-align-${iconAlign}`],
      css[`.psds-text-input__icon--appearance-${appearance}`],
      css[`.psds-text-input__icon.psds-theme--${themeName}`]
    ),
  input: ({ disabled }) =>
    glamor.css(
      css['.psds-text-input'],
      disabled && css['.psds-text-input--disabled']
    ),
  label: ({ themeName }) =>
    glamor.css(
      css['.psds-text-input__label'],
      css[`.psds-text-input__label.psds-theme--${themeName}`]
    ),
  subLabel: ({ themeName }) =>
    glamor.css(
      css['.psds-text-input__sub-label'],
      css[`.psds-text-input__sub-label.psds-theme--${themeName}`]
    )
}

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isFocused: false }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }
  handleFocus(evt) {
    this.setState(_ => ({ isFocused: true }))
    if (typeof this.props.onFocus === 'function') this.props.onFocus(evt)
  }
  handleBlur(evt) {
    this.setState(_ => ({ isFocused: false }))
    if (typeof this.props.onBlur === 'function') this.props.onBlur(evt)
  }
  render() {
    const { context, props, state } = this
    const allProps = {
      ...props,
      themeName: context.themeName || themeDefaultName
    }
    return (
      <label
        {...styles.input(allProps)}
        {...(allProps.style ? { style: allProps.style } : null)}
        {...(allProps.className ? { className: allProps.className } : null)}
      >
        {allProps.label && (
          <div {...styles.label(allProps)}>{allProps.label}</div>
        )}
        <div {...styles.fieldContainer(allProps, state)}>
          <input
            {...propsUtil.whitelistProps(allProps, textInputHtmlPropsWhitelist)}
            {...styles.field(allProps)}
            disabled={allProps.disabled}
            placeholder={allProps.placeholder}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            ref={allProps.innerRef}
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
      </label>
    )
  }
}

TextInput.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.element,
  iconAlign: PropTypes.oneOf(Object.keys(vars.iconAligns)),
  label: PropTypes.node,
  placeholder: PropTypes.string,
  subLabel: PropTypes.node
}
TextInput.defaultProps = {
  appearance: vars.appearances.default,
  disabled: false,
  error: false,
  iconAlign: vars.iconAligns.left
}
TextInput.contextTypes = {
  themeName: PropTypes.string
}

TextInput.appearances = vars.appearances
TextInput.iconAligns = vars.iconAligns

export const appearances = vars.appearances
export const iconAligns = vars.iconAligns
export default TextInput
