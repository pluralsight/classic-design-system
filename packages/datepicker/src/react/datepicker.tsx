import Field from '@pluralsight/ps-design-system-field'
import { ValueOf, canUseDOM, RefFor } from '@pluralsight/ps-design-system-util'
import { useDayzed, DateObj } from 'dayzed'
import { format } from 'date-fns'
import React from 'react'

import { Calendar } from './calendar'
import { CalendarDates } from './calendar-dates'
import { TextInputField } from './text-input-field'
import { useDateSelectChange } from './utils'
import { slides } from '../vars/index'

interface DatePickerProps
  extends Omit<React.ComponentProps<typeof Field>, 'onSelect'> {
  onSelect?: (evt: React.SyntheticEvent, dateObj: DateObj) => void
  value?: Date
  _uniqueId?: (prefix: string) => string
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
  _uniqueId,
  ...props
}) => {
  const [selected, setSelected] = React.useState<Date | undefined>(
    valueFromProps
  )
  React.useEffect(() => setSelected(valueFromProps), [valueFromProps])
  const [open, setOpen] = React.useState<boolean>(false)
  const onDateSelected = (dateObj: DateObj, evt: React.SyntheticEvent) => {
    onSelect && onSelect(evt, dateObj)
    setSelected(dateObj.date)
    setOpen(false)
  }
  const { getDateProps, ...dayzedData } = useDayzed({
    date: selected,
    selected,
    onDateSelected
  })
  const focusDate = () => {
    !selected && setSelected(new Date())
    const today = format(selected || new Date(), 'EEE LLL dd yyyy')
    document
      .querySelector<HTMLButtonElement>(`[aria-label="${today}"]`)
      ?.focus()
  }
  const handleIconClick: React.MouseEventHandler<HTMLDivElement> = evt => {
    if (!open) {
      setOpen(true)
      focusDate()
    }
  }
  const handleTextfieldKeyDown: React.KeyboardEventHandler<HTMLInputElement> = evt => {
    const key = evt.key.toLowerCase()
    ;[' ', 'enter'].includes(key) && setOpen(true)
    focusDate()
  }

  const handleEscapeKeyDown: React.KeyboardEventHandler<HTMLInputElement> = evt => {
    const key = evt.key.toLowerCase()
    key === 'escape' && setOpen(false)
  }
  const [slide, setSlide] = React.useState<ValueOf<typeof slides>>()
  const [value, onChange] = useDateSelectChange({
    selected,
    setSlide,
    setSelected
  })
  const ref = React.useRef<HTMLDivElement | undefined>()
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
  return (
    <div
      style={{ display: 'inline-block', position: 'relative' }}
      {...props}
      ref={ref as RefFor<'div'>}
    >
      <TextInputField
        disabled={disabled}
        error={error}
        label={label}
        onChange={onChange}
        onClick={handleIconClick}
        onKeyDown={handleTextfieldKeyDown}
        placeholder="mm/dd/yyyy"
        prefix={prefix}
        renderContainer={renderContainer}
        renderTag={renderTag}
        size={size}
        subLabel={subLabel}
        suffix={suffix}
        value={value}
        _uniqueId={_uniqueId}
      />
      <br />
      {open && (
        <Calendar
          {...dayzedData}
          style={{ position: 'absolute', zIndex: 1, marginTop: 4 }}
          slide={slide}
          onKeyDown={handleEscapeKeyDown}
        >
          <CalendarDates getDateProps={getDateProps}>
            {renderProps => {
              return <button {...renderProps} />
            }}
          </CalendarDates>
        </Calendar>
      )}
    </div>
  )
}
