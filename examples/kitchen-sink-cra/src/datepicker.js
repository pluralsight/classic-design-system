import type { DateObj } from 'dayzed'
import * as Dayzed from 'dayzed'
import { CalendarIcon } from '@pluralsight/ps-design-system-icon'
import TextInput from '@pluralsight/ps-design-system-textinput'
import {
  Calendar,
  CalendarDates,
  useDateSelectChange,
} from '@pluralsight/ps-design-system-datepicker'
import React from 'react'

const Example = () => {
  const [selected, setSelected] = React.useState()
  const [open, setOpen] = React.useState(false)
  const onDateSelected = (dateObj: DateObj, evt: React.SyntheticEvent) => {
    setSelected(dateObj.date)
    setOpen(false)
  }
  const { getDateProps, ...dayzedData } = Dayzed.useDayzed({
    date: selected || new Date('05/30/2020'),
    selected,
    onDateSelected,
  })
  const handleIconClick: React.MouseEventHandler<HTMLDivElement> = (evt) => {
    setOpen(!open)
  }
  const [slide, setSlide] = React.useState()
  const [value, onChange] = useDateSelectChange({
    selected,
    setSlide,
    setSelected,
  })
  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
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
            {(renderProps) => {
              return <button {...renderProps} />
            }}
          </CalendarDates>
        </Calendar>
      )}
    </div>
  )
}

export default Example
