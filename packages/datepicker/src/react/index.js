import * as glamor from 'glamor'
import Halo from '@pluralsight/ps-design-system-halo/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import { withTheme } from '@pluralsight/ps-design-system-theme/react'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'

import Calendar from './calendar.js'
import css from '../css/index.js'
import {
  parseDate,
  formatDate,
  forceValidDay,
  forceValidMonth,
  forceValidYear
} from '../js'
import * as vars from '../vars/index.js'

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
      css[`.psds-date-picker__field-container.psds-theme--${themeName}`]
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
  overlay: _ => glamor.css(css['.psds-date-picker__overlay']),
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

const Overlay = props => (
  <div {...styles.overlay(props)} onClick={props.onClick} />
)
Overlay.propTypes = {
  onClick: PropTypes.func.isRequired
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
SubField.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

const SubFieldDivider = props => (
  <span {...styles.subFieldDivider(props)}>/</span>
)

const isValidDate = ({ mm, dd, yyyy }) => {
  const date = new Date(yyyy, mm - 1, dd)
  const someFields = mm || dd || yyyy
  const jsDateWorks = date && date.getMonth() + 1 === mm
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
    this.handleOverlayClick = this.handleOverlayClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.value === nextProps.value &&
      this.props.themeName === nextProps.themeName
    ) {
      return
    }

    const { mm, dd, yyyy } = parseDate(nextProps.value)
    this.setState({ mm, dd, yyyy })
  }
  handleKeyDown(evt) {
    if (evt.key === 'Escape') {
      evt.stopPropagation()
      evt.preventDefault()
      this.setState({ isOpen: false })
    }
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
  handleOverlayClick(evt) {
    evt.preventDefault()
    this.setState({ isOpen: false })
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
      this.setState({ [name]: value })
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
    const { props, state } = this

    return (
      <label
        {...styles.input(props)}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        {...(props.style ? { style: props.style } : null)}
        {...(props.className ? { className: props.className } : null)}
      >
        {props.label && <div {...styles.label(props)}>{props.label}</div>}
        <Halo error={props.error} gapSize={Halo.gapSizes.small}>
          <div {...styles.fieldContainer(props, state)}>
            <SubField
              appearance={props.appearance}
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
              appearance={props.appearance}
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
              appearance={props.appearance}
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
              {...styles.field(props)}
              {...propsUtil.whitelistProps(props, datePickerHtmlPropsWhitelist)}
              disabled={props.disabled}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              ref={props.innerRef}
              value={props.value}
            />
            <button
              disabled={props.disabled}
              {...styles.icon(props)}
              onClick={this.handleIconClick}
            >
              <Icon id={Icon.ids.calendar} />
            </button>
            {props.error && (
              <div {...styles.error(props)}>
                <Icon id={Icon.ids.warning} />
              </div>
            )}
          </div>
        </Halo>
        {state.isOpen && [
          <Overlay onClick={this.handleOverlayClick} key="dialog-overlay" />,
          <div {...styles.calendarContainer(props)} key="dialog-calender">
            <Calendar
              mm={state.mm}
              dd={state.dd}
              yyyy={state.yyyy}
              onSelect={this.handleCalendarSelect}
            />
          </div>
        ]}
        {props.subLabel && (
          <div {...styles.subLabel(props)}>{props.subLabel}</div>
        )}
      </label>
    )
  }
}

DatePicker.propTypes = {
  appearance: PropTypes.oneOf(Object.values(vars.appearances)),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.node,
  onSelect: PropTypes.func,
  subLabel: PropTypes.node,
  themeName: PropTypes.string,
  value: PropTypes.string
}
DatePicker.defaultProps = {
  appearance: vars.appearances.default,
  disabled: false,
  error: false
}

DatePicker.appearances = vars.appearances

export const appearances = vars.appearances
export default withTheme(DatePicker)
