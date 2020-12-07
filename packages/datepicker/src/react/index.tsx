/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import Halo from '@pluralsight/ps-design-system-halo'
import { CalendarIcon, WarningIcon } from '@pluralsight/ps-design-system-icon'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import {
  HTMLPropsFor,
  RefForwardingComponent,
  ValueOf,
  combineFns
} from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React, { ReactNode, forwardRef, useEffect, useState } from 'react'

import { Calendar, Overlay } from './calendar'
import stylesheet from '../css'
import { convertPartsToDate, formatISO8601, areValidParts } from '../js'
import { SubField, SubFieldDivider } from './sub-field'
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
  subLabel: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-date-picker__sub-label']),
      css(stylesheet[`.psds-date-picker__sub-label.psds-theme--${themeName}`])
    )
}

interface DatePickerProps
  extends Omit<HTMLPropsFor<'input'>, 'value' | 'onChange'> {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  error?: boolean
  label?: ReactNode
  onKeyDown?: React.KeyboardEventHandler
  onChange?: (evt: React.ChangeEvent | React.MouseEvent, newDate: Date) => void
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
      onChange,
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

    function handleCalendarChange(evt: React.MouseEvent, date: Date) {
      setValue(date)
      setIsOpen(false)

      if (typeof props.onChange === 'function') {
        props.onChange(evt, date)
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

    function handleSubFieldChange(evt: React.ChangeEvent) {
      const target = evt.target as HTMLInputElement
      const name = target.name

      if (name === 'yyyy') {
        const yyyy = parseInt(target.value, 10)
        setYYYY(yyyy)
      } else if (name === 'mm') {
        const mm = parseInt(target.value, 10)
        setMM(mm)
      } else if (name === 'dd') {
        const dd = parseInt(target.value, 10)
        setDD(dd)
      }
    }

    function handleSubFieldBlur(evt: React.FocusEvent) {
      const newDate = areValidParts(yyyy, mm, dd)
        ? convertPartsToDate(yyyy!, mm!, dd!)
        : undefined
      const isValidDate = newDate && !isNaN(newDate.getTime())
      if (newDate && isValidDate) {
        setValue(newDate)
        if (typeof onChange === 'function') {
          onChange(evt, newDate)
        }
      }
    }

    function handleSubFieldFocus() {
      setIsOpen(false)
    }

    return (
      <div
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
              onFocus={handleSubFieldFocus}
              onChange={handleSubFieldChange}
              onBlur={handleSubFieldBlur}
              value={mm || ''}
              name="mm"
              aria-label="month"
              disabled={disabled}
              style={{ width: '32px' }}
            />

            <SubFieldDivider appearance={appearance} />

            <SubField
              appearance={appearance}
              onFocus={handleSubFieldFocus}
              onChange={handleSubFieldChange}
              onBlur={handleSubFieldBlur}
              value={dd || ''}
              name="dd"
              aria-label="day"
              disabled={disabled}
              style={{ width: '24px' }}
            />

            <SubFieldDivider appearance={appearance} />

            <SubField
              appearance={appearance}
              onFocus={handleSubFieldFocus}
              onChange={handleSubFieldChange}
              onBlur={handleSubFieldBlur}
              value={yyyy || ''}
              name="yyyy"
              aria-label="year"
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
              value={value ? formatISO8601(value) : ''}
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
              <Calendar value={value} onChange={handleCalendarChange} />
            </div>
          </>
        )}

        {subLabel && <div {...styles.subLabel(themeName)}>{subLabel}</div>}
      </div>
    )
  }
) as DatePickerComponent

DatePicker.appearances = vars.appearances
export const appearances = vars.appearances

export default DatePicker
