import Halo from '@pluralsight/ps-design-system-halo'
import { CalendarIcon, WarningIcon } from '@pluralsight/ps-design-system-icon'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import {
  combineFns,
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React from 'react'

import Calendar from './calendar'
import stylesheet from '../css'
import {
  formatDate,
  forceValidDay,
  forceValidMonth,
  forceValidYear,
  parseDate
} from '../js'
import { DateParts, DatePartKey } from '../js/types'
import * as vars from '../vars'

const styles = {
  calendarContainer: () =>
    css(stylesheet['.psds-date-picker__calendar-container']),
  datePicker: (
    disabled: boolean | undefined,
    themeName: ValueOf<typeof themeNames>
  ) =>
    compose(
      css(stylesheet['.psds-date-picker']),
      css(stylesheet[`.psds-date-picker.psds-theme--${themeName}`]),
      disabled && css(stylesheet['.psds-date-picker--disabled'])
    ),
  error: () => compose(css(stylesheet['.psds-date-picker__error'])),
  field: () => compose(css(stylesheet['.psds-date-picker__field'])),
  fieldContainer: (
    appearance: ValueOf<typeof vars.appearances>,
    themeName: ValueOf<typeof themeNames>
  ) =>
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
  label: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-date-picker__label']),
      css(stylesheet[`.psds-date-picker__label.psds-theme--${themeName}`])
    ),
  icon: (appearance: ValueOf<typeof vars.appearances>) =>
    compose(
      css(stylesheet['.psds-date-picker__icon']),
      css(stylesheet[`.psds-date-picker__icon--appearance-${appearance}`])
    ),
  overlay: () => css(stylesheet['.psds-date-picker__overlay']),
  subField: (appearance: ValueOf<typeof vars.appearances>) =>
    compose(
      css(stylesheet['.psds-date-picker__sub-field']),
      css(stylesheet[`.psds-date-picker__sub-field--appearance-${appearance}`])
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
  subLabel: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-date-picker__sub-label']),
      css(stylesheet[`.psds-date-picker__sub-label.psds-theme--${themeName}`])
    )
}

interface DatePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>,
    Record<string, unknown> {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  error?: boolean
  label?: React.ReactNode
  onKeyDown?: (evt: React.KeyboardEvent) => void
  onSelect?: (
    newDateString: string | undefined,
    newDateParts?: DateParts
  ) => void
  onSubBlur?: (date: string | undefined, evt: React.FocusEvent) => void
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
  const {
    appearance = vars.appearances.default,
    disabled,
    error,
    className,
    label,
    onSelect,
    onSubBlur,
    style,
    subLabel,
    ...rest
  } = props

  const themeName = useTheme()
  const value = React.useMemo(() => parseDate(props.value), [props.value])

  React.useEffect(
    function updateDateOnPropChange() {
      setDate(value)
    },
    [value]
  )

  const [date, setDate] = React.useState<DateParts>(value)

  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const toggleIsOpen = (nextIsOpen = !isOpen) => setIsOpen(nextIsOpen)

  function handleCalendarSelect(value: string | undefined) {
    const nextDate = parseDate(value)
    setDate(nextDate)
    setIsOpen(false)

    if (typeof props.onSelect === 'function') {
      props.onSelect(formatDate(nextDate), nextDate)
    }
  }

  function chooseValidationRule(key: DatePartKey) {
    switch (key) {
      case 'mm':
        return /^\d{0,2}$/
        break
      case 'dd':
        return /^\d{0,2}$/
        break
      case 'yyyy':
        return /^\d{0,4}$/
        break
      default:
        return /^IMPAWSIBLE$/
    }
  }

  function handleChange(evt: React.ChangeEvent) {
    const target = evt.target as HTMLInputElement
    const name = target.name as DatePartKey
    const value = target.value

    if (chooseValidationRule(name).test(value)) {
      const nextDate = { ...date, [name]: value }
      setDate(nextDate)
    }
  }

  function handleIconClick(evt: React.MouseEvent) {
    evt.preventDefault()
    toggleIsOpen()
  }

  const handleKeyDown = combineFns((evt: React.KeyboardEvent) => {
    if (!isEscape(evt)) return

    evt.stopPropagation()
    evt.preventDefault()

    setIsOpen(false)
  }, props.onKeyDown)

  function handleOverlayClick(evt: React.MouseEvent) {
    evt.preventDefault()
    setIsOpen(false)
  }

  function handleSubFieldBlur(evt: React.FocusEvent) {
    const target = evt.target as HTMLInputElement
    const name = target.name as DatePartKey
    const value = target.value
    const forceValidValueFor: {
      dd: (date?: DateParts | undefined) => string
      mm: (date?: Pick<DateParts, 'mm'> | undefined) => string
      yyyy: (date?: Pick<DateParts, 'yyyy'> | undefined) => string
    } = {
      dd: forceValidDay,
      mm: forceValidMonth,
      yyyy: forceValidYear
    }
    // TODO: maybe rework this to be less bug prone and make it typeable at the same time
    const currentDateOverwrittenByEventValue = {
      ...date,
      [name]: value
    }
    const alwaysReValidateDay = forceValidValueFor.dd(
      currentDateOverwrittenByEventValue
    )

    const nextDate = ({
      dd: alwaysReValidateDay,
      [name]: forceValidValueFor[name](currentDateOverwrittenByEventValue)
    } as unknown) as DateParts

    const onBlurDate = {
      ...currentDateOverwrittenByEventValue,
      ...nextDate
    }

    setDate(nextDate)

    if (typeof onSubBlur === 'function') {
      onSubBlur(formatDate(onBlurDate), evt)
    }
    if (isValidDate(nextDate) && typeof onSelect === 'function') {
      onSelect(formatDate(nextDate), nextDate)
    }
  }

  function handleSubFieldFocus() {
    setIsOpen(false)
  }

  return (
    <label
      {...styles.datePicker(disabled, themeName)}
      className={className}
      onKeyDown={handleKeyDown}
      style={style}
    >
      {label && <div {...styles.label(themeName)}>{label}</div>}

      <Halo error={error} gapSize={Halo.gapSizes.small}>
        <div {...styles.fieldContainer(appearance, themeName)}>
          <SubField
            appearance={appearance}
            onChange={handleChange}
            onFocus={handleSubFieldFocus}
            onBlur={handleSubFieldBlur}
            value={date.mm}
            name="mm"
            disabled={disabled}
            style={{ width: '32px' }}
          />

          <SubFieldDivider appearance={appearance} />

          <SubField
            appearance={appearance}
            onChange={handleChange}
            onFocus={handleSubFieldFocus}
            onBlur={handleSubFieldBlur}
            value={date.dd}
            name="dd"
            disabled={disabled}
            style={{ width: '24px' }}
          />

          <SubFieldDivider appearance={appearance} />

          <SubField
            appearance={appearance}
            onChange={handleChange}
            onFocus={handleSubFieldFocus}
            onBlur={handleSubFieldBlur}
            value={date.yyyy}
            name="yyyy"
            disabled={disabled}
            style={{ width: '48px' }}
          />

          <input
            {...styles.field()}
            {...rest}
            tabIndex={-1}
            readOnly
            disabled={disabled}
            ref={ref}
          />

          <button
            {...styles.icon(appearance)}
            disabled={disabled}
            onClick={handleIconClick}
          >
            <CalendarIcon />
          </button>

          {error && (
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

      {subLabel && <div {...styles.subLabel(themeName)}>{subLabel}</div>}
    </label>
  )
}) as DatePickerComponent

DatePicker.appearances = vars.appearances
export const appearances = DatePicker.appearances

export default DatePicker

interface OverlayProps {
  onClick: (evt: React.MouseEvent) => void
}
const Overlay: React.FC<OverlayProps> = props => {
  return <div {...styles.overlay()} onClick={props.onClick} />
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
  const {
    appearance,
    disabled,
    name,
    onBlur,
    onChange,
    onFocus,
    value,
    ...rest
  } = props
  const ref = React.useRef<HTMLInputElement>(null)
  const handleFocus = combineFns<[React.FocusEvent]>(() => {
    if (ref.current) ref.current.select()
  }, onFocus)

  return (
    <input
      {...styles.subField(appearance)}
      {...rest}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={handleFocus}
      placeholder={(value || name).toString()}
      ref={ref}
      value={value}
    />
  )
}

const SubFieldDivider: React.FC<{
  appearance: ValueOf<typeof vars.appearances>
}> = ({ appearance }) => <span {...styles.subFieldDivider(appearance)}>/</span>

function isEscape(evt: React.KeyboardEvent) {
  return evt.key === 'Escape'
}

function isValidDate({ mm, dd, yyyy }: DateParts) {
  const date = new Date(Number(yyyy), Number(mm) - 1, Number(dd))
  const someFields = mm || dd || yyyy
  const jsDateWorks = !!date && date.getMonth() + 1 === parseInt(mm, 10)
  return !someFields || (someFields && jsDateWorks)
}
