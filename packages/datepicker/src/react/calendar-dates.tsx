import type { DateObj, RenderProps } from 'dayzed'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { DateContext } from './context'
import stylesheet from '../css/index'
import { isSameMonth, endOfWeek, startOfWeek, add, sub } from 'date-fns'

const glamor = glamorDefault || glamorExports

const styles = {
  calendarDate: (selected: boolean, today: boolean) =>
    glamor.css(
      stylesheet['.psds-calendar__date'],
      selected && stylesheet['.psds-calendar__date--selected'],
      today && stylesheet['.psds-calendar__date--today']
    ),
  dateFiller: () => glamor.css(stylesheet['.psds-calendar__filler'])
}

interface ChildrenRenderProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

interface CalendarDatesProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    Pick<RenderProps, 'getDateProps'> {
  children: (props: ChildrenRenderProps, dateObj: DateObj) => React.ReactNode
  setOffset?: React.Dispatch<React.SetStateAction<number>>
  setFocusedDate?: React.Dispatch<React.SetStateAction<Date | undefined>>
}

export const CalendarDates: React.FC<CalendarDatesProps> = ({
  getDateProps,
  children,
  setFocusedDate,
  setOffset,
  ...rest
}) => {
  const calendar = React.useContext(DateContext)
  // const today = format(selected || new Date(), 'EEE LLL dd yyyy')
  return (
    <>
      {calendar.weeks.map((week, weekIndex) => {
        return week.map((dateObj, index) => {
          const key = `${calendar.month}${calendar.year}${weekIndex}${index}`
          if (!dateObj) {
            return <div key={key} {...styles.dateFiller()} />
          }
          const { date, selected, selectable, today } = dateObj
          const { 'aria-pressed': ariaSelected, ...dateProps } = getDateProps({
            dateObj
          })
          const handleDayShift = (dir: 1 | -1, shift: 1 | 7) => {
            const nextDate =
              dir === 1
                ? add(date, {
                    days: shift
                  })
                : sub(date, {
                    days: shift
                  })
            if (setFocusedDate) setFocusedDate(nextDate)
            if (isSameMonth(date, nextDate) && setOffset) setOffset(dir)
          }
          const handleWeekEndStartFocus = (dir: 1 | -1) => {
            const nextDate = dir === 1 ? startOfWeek(date) : endOfWeek(date)
            if (setFocusedDate) setFocusedDate(nextDate)
            if (isSameMonth(date, nextDate) && setOffset) setOffset(dir)
          }
          const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> =
            evt => {
              const key = evt.key.toLowerCase()
              ;[' ', 'enter'].includes(key) && dateProps.onClick(evt)
              key === 'arrowup' && handleDayShift(1, 7)
              key === 'arrowdown' && handleDayShift(-1, 7)
              key === 'arrowleft' && handleDayShift(1, 1)
              key === 'arrowright' && handleDayShift(-1, 1)
              key === 'home' && handleWeekEndStartFocus(1)
              key === 'end' && handleWeekEndStartFocus(-1)
            }
          return children(
            {
              key,
              'aria-selected': ariaSelected,
              'aria-labelledby': calendar['aria-labelledby'],
              children: date.getDate(),
              disabled: !selectable,
              onKeyDown: handleKeyDown,
              tabIndex: selected ? 0 : -1,
              ...styles.calendarDate(selected, today),
              ...dateProps,
              ...rest
            },
            dateObj
          )
        })
      })}
    </>
  )
}
