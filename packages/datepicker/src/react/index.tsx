// TODO: don't forget strict
import Halo from '@pluralsight/ps-design-system-halo'
import { CalendarIcon, WarningIcon } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
// TODO: rm
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { compose, css } from 'glamor'
// TODO: rm
import PropTypes from 'prop-types'
import React from 'react'

import Calendar from './calendar'
import stylesheet from '../css'
import {
  combineFns,
  formatDate,
  forceValidDay,
  forceValidMonth,
  forceValidYear,
  isFunction,
  parseDate
} from '../js'
import * as vars from '../vars'

const styles = {
  calendarContainer: () =>
    css(stylesheet['.psds-date-picker__calendar-container']),
  datePicker: (props, themeName) =>
    compose(
      css(stylesheet['.psds-date-picker']),
      css(stylesheet[`.psds-date-picker.psds-theme--${themeName}`]),
      props.disabled && css(stylesheet['.psds-date-picker--disabled'])
    ),
  error: () => compose(css(stylesheet['.psds-date-picker__error'])),
  field: () => compose(css(stylesheet['.psds-date-picker__field'])),
  fieldContainer: (props, themeName) =>
    compose(
      css(stylesheet['.psds-date-picker__field-container']),
      css(
        stylesheet[
          `.psds-date-picker__field-container--appearance-${props.appearance}`
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
  icon: (props, themeName) =>
    compose(
      css(stylesheet['.psds-date-picker__icon']),
      css(stylesheet[`.psds-date-picker__icon--appearance-${props.appearance}`])
    ),
  overlay: () => css(stylesheet['.psds-date-picker__overlay']),
  subField: props =>
    compose(
      css(stylesheet['.psds-date-picker__sub-field']),
      css(
        stylesheet[
          `.psds-date-picker__sub-field--appearance-${props.appearance}`
        ]
      )
    ),
  subFieldDivider: (appearance: ValueOf<typeof vars.appearances>) =>
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

interface DatePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>,
    Record<string, unknown> {
  appearance?: ValueOf<typeof vars.appearances>
  className?: string
  disabled?: boolean
  error?: boolean
  label?: React.ReactNode
  onKeyDown?: (evt: React.KeyboardEvent) => void
  onSelect?: (newDateString: string, newDateParts: DateParts) => void
  onSubBlur?: (date: string, evt: React.FocusEvent) => void
  subLabel?: React.ReactNode
  value?: string
}

interface DatePickerStatics {
  appearances: typeof vars.appearances
}

interface DatePickerComponent
  extends RefForwardingComponent<
    DatePickerProps,
    HTMLInputElement,
    DatePickerStatics
  > {}

const DatePicker = React.forwardRef((props, ref) => {
  const themeName = useTheme()
  const value = React.useMemo(() => parseDate(props.value), [props.value])

  React.useEffect(
    function updateDateOnPropChange() {
      setDate(value)
    },
    [value]
  )

  const [date, setDate] = React.useState<DateParts>(value)

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
    } as DateParts

    const onBlurDate = {
      ...currentDateOverwrittenByEventValue,
      ...nextDate
    }

    setDate(nextDate)

    isFunction(props.onSubBlur) && props.onSubBlur(formatDate(onBlurDate), evt)
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
      {...styles.datePicker(props, themeName)}
      className={className}
      onKeyDown={handleKeyDown}
      style={style}
    >
      {props.label && <div {...styles.label(themeName)}>{props.label}</div>}

      <Halo error={props.error} gapSize={Halo.gapSizes.small}>
        <div {...styles.fieldContainer(props, themeName)}>
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
            {...styles.field()}
            {...filterReactProps(rest, { tagName: 'input' })}
            tabIndex="-1"
            readOnly
            disabled={props.disabled}
            ref={ref}
          />

          <button
            {...styles.icon(props, themeName)}
            disabled={props.disabled}
            onClick={handleIconClick}
          >
            <CalendarIcon />
          </button>

          {props.error && (
            <div {...styles.error()}>
              <WarningIcon />
            </div>
          )}
        </div>
      </Halo>

      {isOpen && (
        <>
          <Overlay onClick={handleOverlayClick} />

          <div {...styles.calendarContainer()}>
            <Calendar date={date} onSelect={handleCalendarSelect} />
          </div>
        </>
      )}

      {props.subLabel && (
        <div {...styles.subLabel(themeName)}>{props.subLabel}</div>
      )}
    </label>
  )
}) as DatePickerComponent

DatePicker.appearances = vars.appearances
export const appearances = DatePicker.appearances

// TODO: replace
DatePicker.defaultProps = {
  appearance: DatePicker.appearances.default,
  disabled: false,
  error: false
}

export default DatePicker

function Overlay(props) {
  return <div {...styles.overlay()} {...props} />
}

interface SubFieldProps
  extends Omit<
    React.HTMLAttributes<HTMLInputElement>,
    'onBlur' | 'onChange' | 'onFocus'
  > {
  appearance: ValueOf<typeof vars.appearances>
  disabled?: boolean
  name: string
  onBlur: (evt: React.FocusEvent) => void
  onChange: (evt: React.ChangeEvent) => void
  onFocus: (evt: React.FocusEvent) => void
  value?: string | number
}
const SubField: React.FC<SubFieldProps> = props => {
  const ref = React.useRef<HTMLInputElement>()
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

const SubFieldDivider: React.FC<{
  appearance: ValueOf<typeof vars.appearances>
}> = ({ appearance }) => <span {...styles.subFieldDivider(appearance)}>/</span>

function isEscape(evt: React.KeyboardEvent) {
  return evt.key === 'Escape'
}

export interface DateParts {
  mm: string
  dd: string
  yyyy: string
}
function isValidDate({ mm, dd, yyyy }: DateParts) {
  const date = new Date(Number(yyyy), Number(mm) - 1, Number(dd))
  const someFields = mm || dd || yyyy
  const jsDateWorks = !!date && date.getMonth() + 1 === parseInt(mm, 10)
  return !someFields || (someFields && jsDateWorks)
}
