import Field from '@pluralsight/ps-design-system-field'
import { canUseDOM, generateId } from '@pluralsight/ps-design-system-util'
import { format } from 'date-fns'
import { useDayzed, DateObj } from 'dayzed'
import React from 'react'

import { Calendar } from './calendar'
import { CalendarDay, CalendarDayProps } from './calendar-day'
import { TextInputField } from './text-input-field'
import { handleDateSelectChange } from './utils'

interface DatePickerProps
  extends Omit<React.ComponentProps<typeof Field>, 'onSelect'> {
  onSelect?: (evt: React.SyntheticEvent, dateObj: DateObj) => void
  value?: Date
}

export const DatePicker: React.FC<DatePickerProps> = ({
  disabled,
  error,
  label,
  prefix,
  renderContainer,
  renderTag,
  size,
  subLabel,
  suffix,
  onSelect,
  value: valueFromProps,
  ...props
}) => {
  const [selected, setSelected] = React.useState<Date | undefined>(
    valueFromProps
  )

  const ref = React.useRef<HTMLDivElement | undefined>()
  React.useEffect(() => setSelected(valueFromProps), [valueFromProps])
  const [open, setOpen] = React.useState<boolean>(false)
  const [value, setValue] = React.useState<string>('')

  const focusInput = () => {
    const wrapper = ref.current
    wrapper && wrapper.querySelector('input')?.focus()
  }
  const dateFormat = 'MM/dd/yyyy'
  const onDateSelected = (dateObj: DateObj, evt: React.SyntheticEvent) => {
    focusInput()
    const nextSelected = dateObj.date
    onSelect && onSelect(evt, dateObj)
    setSelected(nextSelected)
    setValue(format(nextSelected, dateFormat))
    setOpen(false)
  }
  const handleIconClick: React.MouseEventHandler<HTMLDivElement> = evt => {
    open && focusInput()
    setOpen(!open)
  }
  const handleTextfieldKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    evt => {
      const key = evt.key.toLowerCase()
      ;[' ', 'enter'].includes(key) && setOpen(true)
    }

  const handleEscapeKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    evt => {
      const key = evt.key.toLowerCase()
      if (key === 'escape') {
        focusInput()
        setOpen(false)
      }
    }
  const handleFocus: React.FocusEventHandler<HTMLInputElement> = evt => {
    if (open) {
      focusInput()
      setOpen(false)
    }
  }

  React.useEffect(() => {
    if (!canUseDOM()) return () => {}

    const handleClickOutsideMenu = (evt: MouseEvent) => {
      if (evt.target instanceof HTMLElement) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        if ((ref.current as HTMLDivElement).contains(evt.target)) return
        setOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutsideMenu, {
      capture: true
    })

    return () =>
      document.removeEventListener('click', handleClickOutsideMenu, {
        capture: true
      })
  }, [setOpen])

  const labelId = generateId('psds-datepicker-text-input__label-')
  const inputId = generateId('psds-datepicker-text-input__input-')
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = evt => {
    const nextValue = evt.target.value
    setValue(nextValue)
    handleDateSelectChange({
      selected,
      setSelected,
      value: nextValue,
      dateFormat
    })
  }

  return (
    <div
      style={{ display: 'inline-block', position: 'relative' }}
      {...props}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <TextInputField
        disabled={disabled}
        error={error}
        label={label}
        onChange={handleChange}
        onClick={handleIconClick}
        onKeyDown={handleTextfieldKeyDown}
        onFocus={handleFocus}
        placeholder="mm/dd/yyyy"
        prefix={prefix}
        renderContainer={renderContainer}
        renderTag={renderTag}
        size={size}
        subLabel={subLabel}
        suffix={suffix}
        value={value}
        labelId={labelId}
        inputId={inputId}
      />
      <br />
      {open && (
        <CalendarWrapper
          selected={selected}
          onDateSelected={onDateSelected}
          labelId={labelId}
          handleEscapeKeyDown={handleEscapeKeyDown}
        />
      )}
    </div>
  )
}

interface CalendarWrapperProps {
  selected?: Date
  onDateSelected: (dateObj: DateObj, evt: React.SyntheticEvent) => void
  labelId: string
  handleEscapeKeyDown: React.KeyboardEventHandler<HTMLInputElement>
}

const CalendarWrapper: React.FC<CalendarWrapperProps> = ({
  selected = new Date(),
  onDateSelected,
  labelId,
  handleEscapeKeyDown
}) => {
  return (
    <Calendar
      {...useDayzed({
        date: selected,
        selected,
        onDateSelected
      })}
      autofocus={false}
      trapped={true}
      returnFocus={false}
      aria-modal="true"
      aria-labelledby={labelId}
      aria-live="polite"
      style={{ position: 'absolute', zIndex: 1, marginTop: 4 }}
      onKeyDown={handleEscapeKeyDown}
      selected={selected}
    >
      {(props: CalendarDayProps) => <CalendarDay {...props} />}
    </Calendar>
  )
}
