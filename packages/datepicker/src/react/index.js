import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'

import css from '../css'
import * as vars from '../vars'

const datePickerHtmlPropsWhitelist = [
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
  error: _ => glamor.css(css['.psds-date-picker__error']),
  field: ({ appearance, error, themeName }) =>
    glamor.css(
      css['.psds-date-picker__field'],
      css[`.psds-date-picker__field--appearance-${appearance}`],
      css[`.psds-date-picker__field.psds-theme--${themeName}`],
      error && css[`.psds-date-picker__field--error.psds-theme--${themeName}`],
      {
        ':focus': {
          ...css['.psds-date-picker__field:focus'],
          ...css[`.psds-date-picker__field.psds-theme--${themeName}:focus`]
        }
      }
    ),
  fieldContainer: ({ error, themeName }, { isFocused }) =>
    glamor.css(
      css['.psds-date-picker__field-container'],
      error
        ? {
            ':before': {
              ...css['.psds-date-picker__field-container--error:before'],
              ...css[
                `.psds-date-picker__field-container--error.psds-theme--${themeName}:before`
              ]
            },
            ':after': {
              ...css['.psds-date-picker__field-container--error:after'],
              ...css[
                `.psds-date-picker__field-container--error.psds-theme--${themeName}:after`
              ]
            }
          }
        : null,
      isFocused
        ? {
            ':before': {
              ...css['.psds-date-picker__field-container:focus:before'],
              ...css[
                `.psds-date-picker__field-container.psds-theme--${themeName}:focus:before`
              ]
            },
            ':after': {
              ...css['.psds-date-picker__field-container:focus:after'],
              ...css[
                `.psds-date-picker__field-container.psds-theme--${themeName}:focus:after`
              ]
            }
          }
        : null
    ),
  icon: ({ appearance, themeName }) =>
    glamor.css(
      css['.psds-date-picker__icon'],
      css[`.psds-date-picker__icon--appearance-${appearance}`],
      css[`.psds-date-picker__icon.psds-theme--${themeName}`]
    ),
  input: ({ disabled }) =>
    glamor.css(
      css['.psds-date-picker'],
      disabled && css['.psds-date-picker--disabled']
    ),
  label: ({ themeName }) =>
    glamor.css(
      css['.psds-date-picker__label'],
      css[`.psds-date-picker__label.psds-theme--${themeName}`]
    ),
  subLabel: ({ themeName }) =>
    glamor.css(
      css['.psds-date-picker__sub-label'],
      css[`.psds-date-picker__sub-label.psds-theme--${themeName}`]
    )
}

class DatePicker extends React.Component {
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
            {...propsUtil.whitelistProps(
              allProps,
              datePickerHtmlPropsWhitelist
            )}
            {...styles.field(allProps)}
            disabled={allProps.disabled}
            placeholder={allProps.placeholder}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            ref={allProps.innerRef}
          />
          <div {...styles.icon(allProps)}>
            <Icon id={Icon.ids.calendar} />
          </div>
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

DatePicker.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  subLabel: PropTypes.node
}
DatePicker.defaultProps = {
  appearance: vars.appearances.default,
  disabled: false,
  error: false
}
DatePicker.contextTypes = {
  themeName: PropTypes.string
}

DatePicker.appearances = vars.appearances

export const appearances = vars.appearances
export default DatePicker
