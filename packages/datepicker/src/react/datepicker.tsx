import { sizes } from '@pluralsight/ps-design-system-field'
import { CalendarIcon } from '@pluralsight/ps-design-system-icon'
import {
  ValueOf,
  HTMLPropsFor,
  useUniqueId
} from '@pluralsight/ps-design-system-util'
import { useDayzed, DateObj } from 'dayzed'
import React, {
  RefAttributes,
  ForwardRefExoticComponent,
  ReactNode,
  ComponentProps
} from 'react'

import { Calendar } from './calendar'
import { CalendarDates } from './calendar-dates'
import { TextInputField } from './text-input-field'
import { useDateSelectChange } from './utils'
import { slides } from '../vars'

// TODO: extend FieldProps?
interface DatePickerProps extends Omit<HTMLPropsFor<'div'>, 'onSelect'> {
  disabled?: boolean
  error?: boolean
  label?: ReactNode
  onSelect?: (evt: React.SyntheticEvent, dateObj: DateObj) => void
  prefix?: ReactNode
  renderContainer?: ForwardRefExoticComponent<RefAttributes<any>>
  renderTag?: FC
  size?: ValueOf<typeof sizes>
  subLabel?: ReactNode
  suffix?: ReactNode
}

export const DatePicker: FC<DatePickerProps> = ({
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
      <TextInputField
        disabled={disabled}
        error={error}
        label={label}
        onChange={onChange}
        onClick={handleIconClick}
        placeholder="mm/dd/yyyy"
        prefix={prefix}
        renderContainer={renderContainer}
        renderTag={renderTag}
        size={size}
        subLabel={subLabel}
        suffix={suffix}
        value={value}
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
