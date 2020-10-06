import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import Halo from '@pluralsight/ps-design-system-halo'
import { CalendarIcon, WarningIcon } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'
import {
  combineFns,
  formatDate,
  forceValidDay,
  forceValidMonth,
  forceValidYear,
  isFunction,
  parseDate
} from '../js/index.js'
import * as vars from '../vars/index.js'

import Calendar from './calendar.js'

const styles = {
  calendarContainer: _ =>
    css(stylesheet['.psds-date-picker__calendar-container']),
  datePicker: (themeName, { disabled }) =>
    compose(
      css(stylesheet['.psds-date-picker']),
      css(stylesheet[`.psds-date-picker.psds-theme--${themeName}`]),
      disabled && css(stylesheet['.psds-date-picker--disabled'])
    ),
  error: _ => compose(css(stylesheet['.psds-date-picker__error'])),
  field: _ => compose(css(stylesheet['.psds-date-picker__field'])),
  fieldContainer: (themeName, { appearance }) =>
    compose(
      css(stylesheet['.psds-date-picker__field-container']),
      css(
        stylesheet[
          `.psds-date-picker__field-container--appearance-${appearance}`
        ]
      ),
      css(
        stylesheet[
          `.psds-date-picker__field-container.psds-theme--${themeName}`
        ]
      )
    ),
  label: themeName =>
    compose(
      css(stylesheet['.psds-date-picker__label']),
      css(stylesheet[`.psds-date-picker__label.psds-theme--${themeName}`])
    ),
  icon: (themeName, { appearance }) =>
    compose(
      css(stylesheet['.psds-date-picker__icon']),
      css(stylesheet[`.psds-date-picker__icon--appearance-${appearance}`])
    ),
  overlay: _ => css(stylesheet['.psds-date-picker__overlay']),
  subField: ({ appearance }) =>
    compose(
      css(stylesheet['.psds-date-picker__sub-field']),
      css(stylesheet[`.psds-date-picker__sub-field--appearance-${appearance}`])
    ),
  subFieldDivider: ({ appearance }) =>
    compose(
      css(stylesheet['.psds-date-picker__sub-field-divider']),
      css(
        stylesheet[
          `.psds-date-picker__sub-field-divider--appearance-${appearance}`
        ]
      )
    ),
  subLabel: themeName =>
    compose(
      css(stylesheet['.psds-date-picker__sub-label']),
      css(stylesheet[`.psds-date-picker__sub-label.psds-theme--${themeName}`])
    )
}

const DatePicker = React.forwardRef((props, ref) => {
  const themeName = useTheme()
  const value = React.useMemo(() => parseDate(props.value), [props.value])

  React.useEffect(
    function updateDateOnPropChange() {
      setDate(value)
    },
    [value]
  )

  const [date, setDate] = React.useState(value)

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleIsOpen = (nextIsOpen = !isOpen) => setIsOpen(nextIsOpen)

  function handleCalendarSelect(value) {
    const nextDate = parseDate(value)
    setDate(nextDate)
    setIsOpen(false)

    if (isFunction(props.onSelect)) {
      props.onSelect(formatDate(nextDate), nextDate)
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target
    const updateRules = {
      mm: /^\d{0,2}$/,
      dd: /^\d{0,2}$/,
      yyyy: /^\d{0,4}$/
    }

    if (updateRules[name] && updateRules[name].test(value)) {
      const nextDate = { ...date, [name]: value }
      setDate(nextDate)
    }
  }

  function handleIconClick(evt) {
    evt.preventDefault()
    toggleIsOpen()
  }

  const handleKeyDown = combineFns(evt => {
    if (!isEscape(evt)) return

    evt.stopPropagation()
    evt.preventDefault()

    setIsOpen(false)
  }, props.onKeyDown)

  function handleOverlayClick(evt) {
    evt.preventDefault()
    setIsOpen(false)
  }

  function handleSubFieldBlur(evt) {
    const { name, value } = evt.target
    const forceValidValueFor = {
      dd: forceValidDay,
      mm: forceValidMonth,
      yyyy: forceValidYear
    }
    const currentDateOverwrittenByEventValue = {
      ...date,
      [name]: value
    }
    const alwaysReValidateDay = forceValidValueFor.dd(
      currentDateOverwrittenByEventValue
    )

    const nextDate = {
      dd: alwaysReValidateDay,
      [name]: forceValidValueFor[name](currentDateOverwrittenByEventValue)
    }

    const onBlurDate = {
      ...currentDateOverwrittenByEventValue,
      ...nextDate
    }

    setDate(nextDate)

    isFunction(props.onSubBlur) && props.onSubBlur(formatDate(onBlurDate))
    if (isValidDate(nextDate) && isFunction(props.onSelect)) {
      props.onSelect(formatDate(nextDate), nextDate)
    }
  }

  function handleSubFieldFocus() {
    setIsOpen(false)
  }

  const { className, style, ...rest } = props

  return (
    <label
      {...styles.datePicker(themeName, props)}
      className={className}
      onKeyDown={handleKeyDown}
      style={style}
    >
      {props.label && (
        <div {...styles.label(themeName, props)}>{props.label}</div>
      )}

      <Halo error={props.error} gapSize={Halo.gapSizes.small}>
        <div {...styles.fieldContainer(themeName, props)}>
          <SubField
            appearance={props.appearance}
            onChange={handleChange}
            onFocus={handleSubFieldFocus}
            onBlur={handleSubFieldBlur}
            value={date.mm}
            name="mm"
            disabled={props.disabled}
            style={{ width: '32px' }}
          />

          <SubFieldDivider appearance={props.appearance} />

          <SubField
            appearance={props.appearance}
            onChange={handleChange}
            onFocus={handleSubFieldFocus}
            onBlur={handleSubFieldBlur}
            value={date.dd}
            name="dd"
            disabled={props.disabled}
            style={{ width: '24px' }}
          />

          <SubFieldDivider appearance={props.appearance} />

          <SubField
            appearance={props.appearance}
            onChange={handleChange}
            onFocus={handleSubFieldFocus}
            onBlur={handleSubFieldBlur}
            value={date.yyyy}
            name="yyyy"
            disabled={props.disabled}
            style={{ width: '48px' }}
          />

          <input
            {...styles.field(props)}
            {...filterReactProps(rest, { tagName: 'input' })}
            tabIndex="-1"
            readOnly
            disabled={props.disabled}
            ref={ref}
          />

          <button
            {...styles.icon(themeName, props)}
            disabled={props.disabled}
            onClick={handleIconClick}
          >
            <CalendarIcon />
          </button>

          {props.error && (
            <div {...styles.error(themeName, props)}>
              <WarningIcon />
            </div>
          )}
        </div>
      </Halo>

      {isOpen && (
        <>
          <Overlay onClick={handleOverlayClick} />

          <div {...styles.calendarContainer(themeName, props)}>
            <Calendar date={date} onSelect={handleCalendarSelect} />
          </div>
        </>
      )}

      {props.subLabel && (
        <div {...styles.subLabel(themeName, props)}>{props.subLabel}</div>
      )}
    </label>
  )
})

DatePicker.appearances = vars.appearances
export const appearances = DatePicker.appearances

DatePicker.propTypes = {
  appearance: PropTypes.oneOf(Object.values(vars.appearances)),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.node,
  onKeyDown: PropTypes.func,
  onSelect: PropTypes.func,
  onSubBlur: PropTypes.func,
  style: PropTypes.object,
  subLabel: PropTypes.node,
  value: PropTypes.string
}

DatePicker.defaultProps = {
  appearance: DatePicker.appearances.default,
  disabled: false,
  error: false
}

export default DatePicker

function Overlay(props) {
  return <div {...styles.overlay()} {...props} />
}

function SubField(props) {
  const ref = React.useRef()
  const handleFocus = combineFns(() => {
    ref.current.select()
  }, props.onFocus)

  return (
    <input
      {...styles.subField(props)}
      {...filterReactProps(props, { tagName: 'input' })}
      onFocus={handleFocus}
      placeholder={props.value || props.name}
      ref={ref}
    />
  )
}

SubField.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

function SubFieldDivider(props) {
  return <span {...styles.subFieldDivider(props)}>/</span>
}

function isEscape(evt) {
  return evt.key === 'Escape'
}

function isValidDate({ mm, dd, yyyy }) {
  const date = new Date(yyyy, mm - 1, dd)
  const someFields = mm || dd || yyyy
  const jsDateWorks = date && date.getMonth() + 1 === mm
  return !someFields || (someFields && jsDateWorks)
}
