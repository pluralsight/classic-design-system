import React from 'react'
import { useDayzed, DateObj } from 'dayzed'
import { useDateSelectChange } from './utils'
import { ValueOf, HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { slides } from '../vars'
import { Calendar } from './calendar'
import { CalendarDates } from './calendar-dates'
import TextInput from '@pluralsight/ps-design-system-textinput'
import { CalendarIcon } from '@pluralsight/ps-design-system-icon'

interface DatePickerProps extends Omit<HTMLPropsFor<'div'>, 'onSelect'> {
  onSelect?: (evt: React.SyntheticEvent, dateObj: DateObj) => void
}

export const DatePicker: React.FC<DatePickerProps> = ({
  onSelect,
  ...props
}) => {
  const [selected, setSelected] = React.useState<Date | undefined>()
  const [open, setOpen] = React.useState<boolean>(false)
  const onDateSelected = (dateObj: DateObj, evt: React.SyntheticEvent) => {
    onSelect && onSelect(evt, dateObj)
    setSelected(dateObj.date)
    setOpen(false)
  }
  const { getDateProps, ...dayzedData } = useDayzed({
    date: selected || new Date('05/30/2020'),
    selected,
    onDateSelected
  })
  const handleIconClick: React.MouseEventHandler<HTMLDivElement> = evt => {
    setOpen(!open)
  }
  const [slide, setSlide] = React.useState<ValueOf<typeof slides>>()
  const [value, onChange] = useDateSelectChange({
    selected,
    setSlide,
    setSelected
  })
  return (
    <div style={{ display: 'inline-block', position: 'relative' }} {...props}>
      <TextInput
        onChange={onChange}
        value={value}
        placeholder="mm/dd/yyyy"
        icon={
          <CalendarIcon
            onClick={handleIconClick}
            style={{ cursor: 'pointer' }}
          />
        }
      />
      <br />
      {open && (
        <Calendar
          {...dayzedData}
          style={{ position: 'absolute', zIndex: 1, marginTop: 4 }}
          slide={slide}
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
