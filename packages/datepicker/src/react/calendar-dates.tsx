import { classNames } from '@pluralsight/ps-design-system-util'
import type { DateObj, RenderProps } from 'dayzed'
import { isSameDay } from 'date-fns'
import React from 'react'

import '../css/index.css'
import { DateContext } from './context'

interface ChildrenRenderProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

interface CalendarDatesProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    Pick<RenderProps, 'getDateProps'> {
  children: (props: ChildrenRenderProps, dateObj: DateObj) => React.ReactNode
  dayKeyHandlers?: (
    date: Date,
    dateObj: {
      [x: string]: any
    }
  ) => React.KeyboardEventHandler<HTMLButtonElement>
}

export const CalendarDates: React.FC<CalendarDatesProps> = ({
  getDateProps,
  children,
  className,
  ...rest
}) => {
  const calendar = React.useContext(DateContext)
  return (
    <>
      {calendar.weeks.map((week, weekIndex) => {
        return week.map((dateObj, index) => {
          const key = `${calendar.month}${calendar.year}${weekIndex}${index}`
          if (!dateObj) {
            return (
              <div
                key={key}
                className={classNames('psds-calendar__filler', className)}
              />
            )
          }
          const { date, selected, selectable, today } = dateObj
          const dateProps = getDateProps({
            dateObj
          })
          const handleKeyDown = calendar.dayKeyHandlers(date, dateObj)
          const focusable =
            calendar.focusable && isSameDay(calendar.focusable, date)
          return children(
            {
              key,
              'aria-labelledby': calendar['aria-labelledby'],
              children: date.getDate(),
              disabled: !selectable,
              onKeyDown: handleKeyDown,
              tabIndex: selected || focusable ? 0 : -1,
              className: classNames(
                'psds-calendar__date',
                selected && 'psds-calendar__date--selected',
                today && 'psds-calendar__date--today',
                className
              ),
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
