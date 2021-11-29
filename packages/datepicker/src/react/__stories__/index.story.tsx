import Field from '@pluralsight/ps-design-system-field'
import { HomeIcon, CalendarIcon } from '@pluralsight/ps-design-system-icon'
import TextInput from '@pluralsight/ps-design-system-textinput'
import Button from '@pluralsight/ps-design-system-button'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { DateObj, useDayzed } from 'dayzed'
import { format } from 'date-fns'

import {
  Calendar,
  CalendarDay,
  CalendarDayProps,
  DatePicker,
  useIsInRange,
  onRangeDateSelected,
  onMultiDateSelected,
  handleDateSelectChange,
  handleRangeSelectChange
} from '../index'

export default {
  title: 'Components/DatePicker',
  component: DatePicker
} as Meta

export const Example = () => {
  const [date, setDate] = React.useState(new Date(1999, 11, 31))
  return (
    <div>
      <div>
        <label>
          test
          <TextInput name="test" placeholder="test" />
        </label>
      </div>
      <div>
        <Button onClick={() => setDate(new Date(2000, 0, 1))}>Go Y2K!</Button>
      </div>
      <div>
        <DatePicker
          label="Party time"
          onSelect={(evt, dateObj) => setDate(dateObj.date)}
          value={date}
        />
      </div>
    </div>
  )
}

export const SingleDateSelectedDate: Story = () => {
  const [selected, setSelected] = React.useState<Date | undefined>(
    new Date('05/13/2020')
  )
  const onDateSelected = (dateObj: DateObj, evt: React.SyntheticEvent) => {
    setSelected(dateObj.date)
  }
  return (
    <Calendar
      {...useDayzed({
        date: selected || new Date('05/30/2020'),
        selected,
        onDateSelected
      })}
    >
      {(props: CalendarDayProps) => <CalendarDay {...props} />}
    </Calendar>
  )
}

export const SingleDatePreviousMonth: Story = () => {
  const [selected, setSelected] = React.useState<Date | undefined>(
    new Date('05/13/2020')
  )
  const onDateSelected = (dateObj: DateObj, evt: React.SyntheticEvent) => {
    setSelected(dateObj.date)
  }
  return (
    <Calendar
      {...useDayzed({
        date: new Date('06/13/2020'),
        selected,
        onDateSelected
      })}
    >
      {(props: CalendarDayProps) => <CalendarDay {...props} />}
    </Calendar>
  )
}

export const CalendarSelectWithButton: Story = () => {
  const [selected, setSelected] = React.useState<Date | undefined>()
  const onDateSelected = (dateObj: DateObj, evt: React.SyntheticEvent) => {
    setSelected(dateObj.date)
  }

  const handleClick = () => {
    setSelected(new Date('05/13/2020'))
  }
  return (
    <>
      <button onClick={handleClick}>5/13/2020</button>
      <Calendar
        {...useDayzed({
          date: selected || new Date('05/30/2020'),
          selected,
          onDateSelected
        })}
      >
        {(props: CalendarDayProps) => <CalendarDay {...props} />}
      </Calendar>
    </>
  )
}

export const CalendarWithInput: Story = () => {
  const [selected, setSelected] = React.useState<Date | undefined>()
  const [open, setOpen] = React.useState<boolean>(false)
  const onDateSelected = (dateObj: DateObj, evt: React.SyntheticEvent) => {
    const nextSelected = dateObj.date
    setSelected(nextSelected)
    setValue(format(nextSelected, dateFormat))
    setOpen(false)
  }
  const dayzedData = useDayzed({
    date: selected || new Date('05/30/2020'),
    selected,
    onDateSelected
  })
  const handleIconClick: React.MouseEventHandler<HTMLDivElement> = evt => {
    setOpen(!open)
  }
  const [value, setValue] = React.useState<string>('')

  const dateFormat = 'MM/dd/yyyy'
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
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <TextInput
        onChange={handleChange}
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
          style={{ position: 'absolute', marginTop: 4 }}
          tabIndex={0}
        >
          {(props: CalendarDayProps) => <CalendarDay {...props} />}
        </Calendar>
      )}
    </div>
  )
}

export const DatePickerDisabled: Story = () => (
  <DatePicker disabled label="Disabled" />
)

export const DatePickerError: Story = () => <DatePicker error label="Errored" />

export const DatePickerStringLabel: Story = () => (
  <DatePicker label="String label" />
)

export const DatePickerFieldLabel: Story = () => (
  <DatePicker label={<Field.Label>Field.Label label</Field.Label>} />
)

export const DatePickerPrefix: Story = () => (
  <DatePicker prefix={<HomeIcon />} label="Prefix" />
)

export const DatePickerRenderContainer: Story = () => (
  <DatePicker
    label="renderContainer"
    renderContainer={React.forwardRef((props, ref) => (
      <div ref={ref} {...props} style={{ outline: '2px dashed orange' }} />
    ))}
  />
)

export const DatePickerRenderTag: Story = () => (
  <DatePicker
    prefix={<HomeIcon />}
    label="renderTag"
    renderTag={props => (
      <div {...props} style={{ outline: '2px dashed orange' }} />
    )}
  />
)

export const DatePickerSmallSize: Story = () => (
  <DatePicker label="Small size" size="small" />
)

export const DatePickerSubLabelString: Story = () => (
  <DatePicker subLabel="String subLabel" />
)

export const DatePickerSubLabelField: Story = () => (
  <DatePicker
    subLabel={<Field.SubLabel>Field.SubLabel subLabel</Field.SubLabel>}
  />
)

export const DatePickerSuffix: Story = () => (
  <DatePicker suffix={<HomeIcon />} label="Suffix" />
)

export const DatePickerInitialValue: Story = () => {
  const value = new Date(1999, 11, 31)
  return (
    <DatePicker
      label="Controlled component, set to 31 Dec 1999"
      value={value}
    />
  )
}

export const DatePickerChangeValue: Story = () => {
  const [date, setDate] = React.useState(new Date(1999, 11, 31))
  return (
    <div>
      <button onClick={() => setDate(new Date(2000, 0, 1))}>Go Y2K!</button>
      <DatePicker
        label="Controlled component, set to 31 Dec 1999"
        value={date}
      />
    </div>
  )
}

export const RangeDateCalendar: Story = () => {
  const [selected, setSelected] = React.useState<Date[] | undefined>()
  const { onMouseLeave, onMouseEnter, isInRange } = useIsInRange(selected)
  return (
    <Calendar
      {...useDayzed({
        selected,
        onDateSelected: onRangeDateSelected({ selected, setSelected }),
        date: new Date('05/30/2020')
      })}
      onMouseLeave={onMouseLeave}
    >
      {(props: CalendarDayProps) => {
        const { dateObj } = props
        return (
          <CalendarDay
            {...props}
            className={isInRange(dateObj.date)}
            onMouseEnter={() => onMouseEnter(dateObj.date)}
          />
        )
      }}
    </Calendar>
  )
}

export const RangeDateCalendarWithButton: Story = () => {
  const [selected, setSelected] = React.useState<Date[]>([])
  const { onMouseLeave, onMouseEnter, isInRange } = useIsInRange(selected)

  const handleClick = () => {
    setSelected([new Date('05/13/2020'), new Date('05/30/2020')])
  }
  return (
    <>
      <button onClick={handleClick}>5/13/2020 - 05/30/2020</button>
      <Calendar
        {...useDayzed({
          selected,
          onDateSelected: onRangeDateSelected({ selected, setSelected }),
          date: new Date('05/30/2020')
        })}
        onMouseLeave={onMouseLeave}
      >
        {(props: CalendarDayProps) => {
          const { dateObj } = props
          return (
            <CalendarDay
              {...props}
              className={isInRange(dateObj.date)}
              onMouseEnter={() => onMouseEnter(dateObj.date)}
            />
          )
        }}
      </Calendar>
    </>
  )
}

export const RangeDateCalendarWithInput: Story = () => {
  const [selected, setSelected] = React.useState<Date[] | undefined>()
  const [startValue, setStartValue] = React.useState<string>('')
  const [endValue, setEndValue] = React.useState<string>('')
  const { onMouseLeave, onMouseEnter, isInRange } = useIsInRange(selected)
  const dateFormat = 'MM/dd/yyyy'
  const onStartChange: React.ChangeEventHandler<HTMLInputElement> = evt => {
    const nextValue = evt.target.value
    setStartValue(nextValue)
    handleRangeSelectChange({
      dateFormat,
      selected,
      setSelected,
      start: true,
      value: nextValue
    })
  }

  const onEndChange: React.ChangeEventHandler<HTMLInputElement> = evt => {
    const nextValue = evt.target.value
    setEndValue(nextValue)
    handleRangeSelectChange({
      dateFormat,
      selected,
      setSelected,
      start: false,
      value: nextValue
    })
  }
  return (
    <div>
      <TextInput label="Start" onChange={onStartChange} value={startValue} />
      <TextInput label="End" onChange={onEndChange} value={endValue} />
      <Calendar
        {...useDayzed({
          selected,
          onDateSelected: onRangeDateSelected({
            selected,
            setSelected,
            setStartValue,
            setEndValue
          }),
          date: new Date('05/30/2020')
        })}
        onMouseLeave={onMouseLeave}
      >
        {(props: CalendarDayProps) => {
          const { dateObj } = props
          return (
            <CalendarDay
              {...props}
              className={isInRange(dateObj.date)}
              onMouseEnter={() => onMouseEnter(dateObj.date)}
            />
          )
        }}
      </Calendar>
    </div>
  )
}

export const RangeDateCalendarWithInputTwoMonths: Story = () => {
  const [selected, setSelected] = React.useState<Date[] | undefined>()
  const [startValue, setStartValue] = React.useState<string>('')
  const [endValue, setEndValue] = React.useState<string>('')
  const { onMouseLeave, onMouseEnter, isInRange } = useIsInRange(selected)
  const dateFormat = 'MM/dd/yyyy'
  const onStartChange: React.ChangeEventHandler<HTMLInputElement> = evt => {
    const nextValue = evt.target.value
    setStartValue(nextValue)
    handleRangeSelectChange({
      dateFormat,
      selected,
      setSelected,
      start: true,
      value: nextValue
    })
  }

  const onEndChange: React.ChangeEventHandler<HTMLInputElement> = evt => {
    const nextValue = evt.target.value
    setEndValue(nextValue)
    handleRangeSelectChange({
      dateFormat,
      selected,
      setSelected,
      start: false,
      value: nextValue
    })
  }
  return (
    <>
      <TextInput label="Start" onChange={onStartChange} value={startValue} />
      <TextInput label="End" onChange={onEndChange} value={endValue} />
      <Calendar
        {...useDayzed({
          monthsToDisplay: 2,
          selected,
          onDateSelected: onRangeDateSelected({
            selected,
            setSelected,
            setStartValue,
            setEndValue
          }),
          date: new Date('05/30/2020')
        })}
        onMouseLeave={onMouseLeave}
      >
        {(props: CalendarDayProps) => {
          const { dateObj } = props
          return (
            <CalendarDay
              {...props}
              className={isInRange(dateObj.date)}
              onMouseEnter={() => onMouseEnter(dateObj.date)}
            />
          )
        }}
      </Calendar>
    </>
  )
}

export const MultiDate: Story = () => {
  const initialDate = new Date(2021, 0, 1)
  const initialDate2 = new Date(2021, 0, 5)
  const [selected, setSelected] = React.useState<Date[]>([
    initialDate,
    initialDate2
  ])
  return (
    <Calendar
      {...useDayzed({
        selected,
        onDateSelected: onMultiDateSelected({ selected, setSelected }),
        date: initialDate
      })}
    >
      {(props: CalendarDayProps) => <CalendarDay {...props} />}
    </Calendar>
  )
}
