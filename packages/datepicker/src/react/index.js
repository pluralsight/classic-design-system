import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'

import Calendar from './calendar'
import css from '../css'
import {
  parseDate,
  formatDate,
  forceValidDay,
  forceValidMonth,
  forceValidYear
} from '../js'
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
    glamor.css(css['.psds-date-picker__field']),
  fieldContainer: ({ appearance, error, themeName }, { isFocused }) =>
    glamor.css(
      css['.psds-date-picker__field-container'],
      css[`.psds-date-picker__field-container--appearance-${appearance}`],
      css[`.psds-date-picker__field-container.psds-theme--${themeName}`],
      error
        ? {
            ...css[
              `.psds-date-picker__field-container--error.psds-theme--${themeName}`
            ],
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
            ...css[
              `.psds-date-picker__field-container.psds-theme--${themeName}:focus`
            ],
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
      {
        ':focus': css['.psds-date-picker__sub-field:focus']
      },
      css[`.psds-date-picker__sub-field--appearance-${appearance}`]
    ),
  subFieldDivider: ({ appearance }) =>
    glamor.css(css['.psds-date-picker__sub-field-divider'], [
      `.psds-date-picker__sub-field-divider--appearance-${appearance}`
    ]),
  calendarContainer: _ =>
    glamor.css(css['.psds-date-picker__calendar-container'])
}

class SubField extends React.Component {
  constructor(props) {
    super(props)
    this.handleFocus = this.handleFocus.bind(this)
  }
  handleFocus(evt) {
    this.el.select()
    this.props.onFocus(evt)
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
        disabled={props.disabled}
        style={props.style}
      />
    )
  }
}

const SubFieldDivider = props => (
  <span {...styles.subFieldDivider(props)}>/</span>
)

const isValidDate = ({ mm, dd, yyyy }) => {
  const date = new Date(yyyy, mm - 1, dd)
  const someFields = mm || dd || yyyy
  const jsDateWorks = date && date.getMonth() + 1 == mm
  return !someFields || (someFields && jsDateWorks)
}

class DatePicker extends React.Component {
  constructor(props) {
    super(props)
    const { mm, dd, yyyy } = parseDate(props.value)
    this.state = {
      isFocused: false,
      isOpen: false,
      mm,
      dd,
      yyyy
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubFieldFocus = this.handleSubFieldFocus.bind(this)
    this.handleSubFieldBlur = this.handleSubFieldBlur.bind(this)
    this.handleCalendarSelect = this.handleCalendarSelect.bind(this)
    this.handleIconClick = this.handleIconClick.bind(this)
  }
  handleFocus() {
    this.setState({ isFocused: true })
  }
  handleBlur() {
    this.setState({ isFocused: false })
  }
  handleIconClick(evt) {
    evt.preventDefault()
    this.setState({ isOpen: !this.state.isOpen })
  }
  handleCalendarSelect(value) {
    const { mm, dd, yyyy } = parseDate(value)
    this.setState({ mm, dd, yyyy, isOpen: false }, _ => {
      if (typeof this.props.onSelect === 'function')
        this.props.onSelect(formatDate({ mm, dd, yyyy }), { mm, dd, yyyy })
    })
  }
  handleChange(evt) {
    const { name, value } = evt.target
    const updateRules = {
      mm: /^\d{0,2}$/,
      dd: /^\d{0,2}$/,
      yyyy: /^\d{0,4}$/
    }
    if (updateRules[name] && updateRules[name].test(value)) {
      const { mm, dd, yyyy } = this.state
      this.setState({
        [name]: value
      })
    }
  }
  handleSubFieldFocus() {
    this.setState({ isOpen: false })
  }
  handleSubFieldBlur(evt) {
    const { name, value } = evt.target
    const { mm, dd, yyyy } = this.state
    const forceValidValueFor = {
      mm: forceValidMonth,
      dd: forceValidDay,
      yyyy: forceValidYear
    }
    const currentDateOverwrittenByEventValue = {
      mm,
      dd,
      yyyy,
      [name]: value
    }
    const alwaysReValidateDay = forceValidValueFor['dd'](
      currentDateOverwrittenByEventValue
    )
    this.setState(
      {
        dd: alwaysReValidateDay,
        [name]: forceValidValueFor[name](currentDateOverwrittenByEventValue)
      },
      _ => {
        if (isValidDate(this.state)) {
          const { mm, dd, yyyy } = this.state
          if (typeof this.props.onSelect === 'function')
            this.props.onSelect(formatDate({ mm, dd, yyyy }), { mm, dd, yyyy })
        }
      }
    )
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
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
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
            onFocus={this.handleSubFieldFocus}
            onBlur={this.handleSubFieldBlur}
            value={state.mm}
            name="mm"
            disabled={props.disabled}
            style={{ width: '32px' }}
          />
          <SubFieldDivider appearance={props.appearance} />
          <SubField
            appearance={allProps.appearance}
            onChange={this.handleChange}
            onFocus={this.handleSubFieldFocus}
            onBlur={this.handleSubFieldBlur}
            value={state.dd}
            name="dd"
            disabled={props.disabled}
            style={{ width: '28px' }}
          />
          <SubFieldDivider appearance={props.appearance} />
          <SubField
            appearance={allProps.appearance}
            onChange={this.handleChange}
            onFocus={this.handleSubFieldFocus}
            onBlur={this.handleSubFieldBlur}
            value={state.yyyy}
            name="yyyy"
            disabled={props.disabled}
            style={{ width: '50px' }}
          />
          <input
            tabIndex="-1"
            readOnly
            {...styles.field(allProps)}
            {...propsUtil.whitelistProps(
              allProps,
              datePickerHtmlPropsWhitelist
            )}
            disabled={allProps.disabled}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            ref={allProps.innerRef}
            value={allProps.value}
          />
          <button
            disabled={props.disabled}
            {...styles.icon(allProps)}
            onClick={this.handleIconClick}
          >
            <Icon id={Icon.ids.calendar} />
          </button>
          {allProps.error && (
            <div {...styles.error(allProps)}>
              <Icon id={Icon.ids.warning} />
            </div>
          )}
        </div>
        {state.isOpen && (
          <div {...styles.calendarContainer(allProps)}>
            <Calendar
              mm={state.mm}
              dd={state.dd}
              yyyy={state.yyyy}
              onSelect={this.handleCalendarSelect}
            />
          </div>
        )}
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
  subLabel: PropTypes.node,
  value: PropTypes.string
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
