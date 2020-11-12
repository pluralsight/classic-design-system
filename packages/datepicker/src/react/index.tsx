// TODO: break up file
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
import React, {
  FC,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState
} from 'react'

import Calendar from './calendar'
import stylesheet from '../css'
import { convertPartsToDate, areValidParts } from '../js'
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

// TODO: refactor util to match this
export type HTMLPropsFor<
  Tag extends keyof JSX.IntrinsicElements
> = JSX.IntrinsicElements[Tag]

interface DatePickerProps
  extends Omit<HTMLPropsFor<'input'>, 'value' | 'onSelect'> {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  error?: boolean
  label?: ReactNode
  onKeyDown?: (evt: React.KeyboardEvent) => void
  onSelect?: (evt: React.FocusEvent | React.MouseEvent, newDate: Date) => void
  onSubBlur?: (evt: React.FocusEvent, date: Date | undefined) => void
  subLabel?: ReactNode
  value: Date | undefined
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

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (props, ref) => {
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
      value: valueFromProps,
      ...rest
    } = props

    const themeName = useTheme()
    const [value, setValue] = useState<Date | undefined>(valueFromProps)
    const [yyyy, setYYYY] = useState(value?.getFullYear())
    const [mm, setMM] = useState(value ? value.getMonth() + 1 : undefined)
    const [dd, setDD] = useState(value?.getDate())
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(
      function updateDateOnPropChange() {
        setValue(valueFromProps)
        setYYYY(valueFromProps?.getFullYear())
        setMM(valueFromProps ? valueFromProps.getMonth() + 1 : undefined)
        setDD(valueFromProps?.getDate())
      },
      [valueFromProps]
    )

    function handleCalendarSelect(evt: React.MouseEvent, date: Date) {
      setValue(date)
      setIsOpen(false)

      if (typeof props.onSelect === 'function') {
        props.onSelect(evt, date)
      }
    }

    function handleIconClick(evt: React.MouseEvent) {
      evt.preventDefault()
      setIsOpen(!isOpen)
    }

    const handleKeyDown = combineFns((evt: React.KeyboardEvent) => {
      if (evt.key !== 'Escape') return

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
      const name = target.name

      let year = yyyy
      let month = mm
      let day = dd

      if (name === 'yyyy') {
        let yyyy = parseInt(target.value, 10)
        setYYYY(yyyy)
        year = yyyy
      } else if (name === 'mm') {
        let mm = parseInt(target.value, 10)
        setMM(parseInt(target.value, 10))
        month = mm
      } else if (name === 'dd') {
        let dd = parseInt(target.value, 10)
        setDD(parseInt(target.value, 10))
        day = dd
      }

      const newValidDate = areValidParts(year, month, day)
        ? convertPartsToDate(year!, month!, day!)
        : undefined
      if (typeof onSubBlur === 'function') {
        onSubBlur(evt, newValidDate)
      }
      if (newValidDate) {
        setValue(newValidDate)
        if (typeof onSelect === 'function') {
          onSelect(evt, newValidDate)
        }
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
          <div
            {...styles.fieldContainer(appearance, themeName)}
            key={value?.getTime()}
          >
            <SubField
              appearance={appearance}
              onFocus={handleSubFieldFocus}
              onBlur={handleSubFieldBlur}
              value={value ? value.getMonth() + 1 : undefined}
              name="mm"
              disabled={disabled}
              style={{ width: '32px' }}
            />

            <SubFieldDivider appearance={appearance} />

            <SubField
              appearance={appearance}
              onFocus={handleSubFieldFocus}
              onBlur={handleSubFieldBlur}
              value={value ? value.getDate() : undefined}
              name="dd"
              disabled={disabled}
              style={{ width: '24px' }}
            />

            <SubFieldDivider appearance={appearance} />

            <SubField
              appearance={appearance}
              onFocus={handleSubFieldFocus}
              onBlur={handleSubFieldBlur}
              value={value ? value.getFullYear() : undefined}
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
              value={value ? value.toUTCString() : undefined}
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
              <Calendar value={value} onSelect={handleCalendarSelect} />
            </div>
          </>
        )}

        {subLabel && <div {...styles.subLabel(themeName)}>{subLabel}</div>}
      </label>
    )
  }
) as DatePickerComponent

DatePicker.appearances = vars.appearances
export const appearances = vars.appearances

export default DatePicker

interface OverlayProps {
  onClick: (evt: React.MouseEvent) => void
}
const Overlay: FC<OverlayProps> = props => {
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
  onFocus: (evt: React.FocusEvent) => void
  value: number | undefined
}
const SubField: FC<SubFieldProps> = props => {
  const { appearance, disabled, name, onBlur, onFocus, value, ...rest } = props
  const ref = useRef<HTMLInputElement>(null)

  // TODO: verify what this is for
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
      onFocus={handleFocus}
      placeholder={name}
      ref={ref}
      defaultValue={value}
    />
  )
}

const SubFieldDivider: FC<{
  appearance: ValueOf<typeof vars.appearances>
}> = ({ appearance }) => <span {...styles.subFieldDivider(appearance)}>/</span>
