import type { DateObj, RenderProps } from 'dayzed'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { DateContext } from './context'
import stylesheet from '../css/index'
import { format, endOfWeek, startOfWeek, add, sub } from 'date-fns'

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
}

export const CalendarDates: React.FC<CalendarDatesProps> = ({
  getDateProps,
  children,
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
          const dayShift = (day: 1 | -1, shift: 1 | 7) =>
            day === 1
              ? add(date, {
                  days: shift
                })
              : sub(date, {
                  days: shift
                })
          const focusDate = (day: Date) => {
            document
              .querySelector<HTMLButtonElement>(
                `[aria-label="${format(day, 'EEE LLL dd yyyy')}"]`
              )
              ?.focus()
          }
          const handleWeekFocusMove = (week: 1 | -1) => {
            const nextDate = dayShift(week, 7)
            focusDate(nextDate)
          }
          const handleNeighborFocusMove = (week: 1 | -1) => {
            const nextDate = dayShift(week, 1)
            focusDate(nextDate)
          }
          const handleWeekEndStartFocus = (week: 1 | -1) => {
            const nextDate = week === 1 ? startOfWeek(date) : endOfWeek(date)
            focusDate(nextDate)
          }
          const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = evt => {
            const key = evt.key.toLowerCase()
            ;[' ', 'enter'].includes(key) && dateProps.onClick(evt)
            key === 'arrowup' && handleWeekFocusMove(1)
            key === 'arrowdown' && handleWeekFocusMove(-1)
            key === 'arrowleft' && handleNeighborFocusMove(1)
            key === 'arrowright' && handleNeighborFocusMove(-1)
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
