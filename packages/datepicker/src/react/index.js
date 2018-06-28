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
      css['.psds-date-picker__field']
      // css[`.psds-date-picker__field--appearance-${appearance}`],
      // css[`.psds-date-picker__field.psds-theme--${themeName}`],

      // TODO: move to field-container?
      // error && css[`.psds-date-picker__field--error.psds-theme--${themeName}`],
      // {
      //   ':focus': {
      //     ...css['.psds-date-picker__field:focus'],
      //     ...css[`.psds-date-picker__field.psds-theme--${themeName}:focus`]
      //   }
      // }
    ),
  fieldContainer: ({ appearance, error, themeName }, { isFocused }) =>
    glamor.css(
      css['.psds-date-picker__field-container'],
      css[`.psds-date-picker__field-container--appearance-${appearance}`],
      css[`.psds-date-picker__field-container.psds-theme--${themeName}`],
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
    ),
  subField: ({ appearance }) =>
    glamor.css(
      css['.psds-date-picker__sub-field'],
      css[`.psds-date-picker__sub-field--appearance-${appearance}`]
    ),
  subFieldDivider: _ => glamor.css(css['.psds-date-picker__sub-field-divider'])
}

class SubField extends React.Component {
  constructor(props) {
    super(props)
    this.handleFocus = this.handleFocus.bind(this)
  }
  handleFocus(evt) {
    // TODO: test x-browser compat
    this.el.select()
  }
  render() {
    const { props } = this
    return (
      <input
        {...styles.subField(props)}
        onFocus={this.handleFocus}
        onBlur={props.onBlur}
        ref={el => (this.el = el)}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        placeholder={props.value || props.name}
        style={props.style}
      />
    )
  }
}

const SubFieldDivider = _ => <span {...styles.subFieldDivider()}>/</span>

const isValidDate = ({ mm, dd, yyyy }) => {
  const date = new Date(yyyy, mm - 1, dd)
  return mm && dd && yyyy && date && date.getMonth() + 1 == mm
}

const formatDate = ({ mm, dd, yyyy }) => mm + '/' + dd + '/' + yyyy

class DatePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mm: '',
      dd: '',
      yyyy: '' // TODO: parse props.value and assign parts
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubFieldBlur = this.handleSubFieldBlur.bind(this)
  }
  handleChange(evt) {
    const { name, value } = evt.target
    const updateRules = {
      mm: /^\d{0,2}$/,
      dd: /^\d{0,2}$/,
      yyyy: /^\d{0,4}$/
    }
    // TODO: update rule checking to only allow real dates
    if (updateRules[name] && updateRules[name].test(value)) {
      this.setState({ [name]: value })
    }
  }
  handleSubFieldBlur() {
    if (isValidDate(this.state)) {
      const { mm, dd, yyyy } = this.state
      if (typeof this.props.onSelect === 'function')
        this.props.onSelect(formatDate({ mm, dd, yyyy }), { mm, dd, yyyy })
    }
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
          <SubField
            appearance={allProps.appearance}
            onChange={this.handleChange}
            onBlur={this.handleSubFieldBlur}
            value={state.mm}
            name="mm"
            style={{ width: '32px' }}
          />
          <SubFieldDivider />
          <SubField
            appearance={allProps.appearance}
            onChange={this.handleChange}
            onBlur={this.handleSubFieldBlur}
            value={state.dd}
            name="dd"
            style={{ width: '28px' }}
          />
          <SubFieldDivider />
          <SubField
            appearance={allProps.appearance}
            onChange={this.handleChange}
            onBlur={this.handleSubFieldBlur}
            value={state.yyyy}
            name="yyyy"
            style={{ width: '50px' }}
          />
          <input
            aria-hidden={true || 'TODO: figure out what Switch does here'}
            readOnly
            {...styles.field(allProps)}
            {...propsUtil.whitelistProps(
              allProps,
              datePickerHtmlPropsWhitelist
            )}
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
  onSelect: PropTypes.func,
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
