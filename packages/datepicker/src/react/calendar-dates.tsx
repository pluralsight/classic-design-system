import type { DateObj, RenderProps } from 'dayzed'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { DateContext } from './context'
import stylesheet from '../css/index'

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
  return (
    <>
      {calendar.weeks.map((week, weekIndex) => {
        return week.map((dateObj, index) => {
          const key = `${calendar.month}${calendar.year}${weekIndex}${index}`
          if (!dateObj) {
            return <div key={key} {...styles.dateFiller()} />
          }
          const { date, selected, selectable, today } = dateObj
          return children(
            {
              key,
              children: date.getDate(),
              disabled: !selectable,
              ...styles.calendarDate(selected, today),
              ...getDateProps({ dateObj }),
              ...rest
            },
            dateObj
          )
        })
      })}
    </>
  )
}
