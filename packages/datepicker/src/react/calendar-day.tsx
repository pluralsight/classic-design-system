import React from 'react'
import type { DateObj, Calendar, GetBackForwardPropsOptions } from 'dayzed'
import { classNames, ValueOf } from '@pluralsight/ps-design-system-util'
import { endOfWeek, startOfWeek, add, sub, getMonth, isSameDay } from 'date-fns'
import { slides } from '../vars/index'

export interface CalendarDayProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  key?: string
  dateObj: DateObj
  dateProps: Record<string, any>
  'aria-labelledby': string
  calendars: Calendar[]
  getBackProps: (data: GetBackForwardPropsOptions) => Record<string, any>
  getForwardProps: (data: GetBackForwardPropsOptions) => Record<string, any>
  setSlide: React.Dispatch<React.SetStateAction<ValueOf<typeof slides>>>
  focusable: Date | number
  setFocusable: React.Dispatch<React.SetStateAction<Date>>
  monthButtonClicked: boolean
  setMonthButtonClicked: React.Dispatch<React.SetStateAction<boolean>>
}
export const CalendarDay: React.FC<CalendarDayProps> = ({
  dateObj,
  className,
  onKeyDown,
  dateProps,
  getBackProps,
  getForwardProps,
  setSlide,
  setFocusable,
  focusable,
  calendars,
  onClick,
  monthButtonClicked,
  setMonthButtonClicked,
  ...rest
}) => {
  const { date, selected, selectable, today } = dateObj
  const moveMonthForward = getForwardProps({ calendars }).onClick
  const moveMonthBackward = getBackProps({ calendars }).onClick
  const moveYearForward = getForwardProps({ calendars, offset: 12 }).onClick
  const moveYearBackward = getBackProps({ calendars, offset: 12 }).onClick

  const handleWeekEndStartFocus = (dir: 1 | -1) => {
    const nextDate = dir === -1 ? startOfWeek(date) : endOfWeek(date)
    setFocusable(nextDate)
  }
  const handleMonthYearShift = (
    dir: 1 | -1,
    shiftKey: boolean,
    evt: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    const _evt = evt as unknown as React.MouseEvent<HTMLButtonElement>
    const args = shiftKey ? { years: 1 } : { months: 1 }
    const nextDate = dir === 1 ? add(date, args) : sub(date, args)
    setFocusable(nextDate)
    if (dir === 1) {
      shiftKey ? moveYearForward(_evt) : moveMonthForward(_evt)
      setSlide(slides.forward)
    }
    if (dir === -1) {
      shiftKey ? moveYearBackward(_evt) : moveMonthBackward(_evt)
      setSlide(slides.backward)
    }
  }
  const handleDayShift = (
    dir: 1 | -1,
    shift: 1 | 7,
    evt: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    const nextDate =
      dir === 1
        ? add(date, {
            days: shift
          })
        : sub(date, {
            days: shift
          })
    setFocusable(nextDate)
    const months = calendars?.map(calendar => calendar.month) as number[]

    if (!months.includes(getMonth(nextDate))) {
      if (dir === 1) {
        moveMonthForward(evt as unknown as React.MouseEvent<HTMLButtonElement>)
        setSlide(slides.forward)
      }
      if (dir === -1) {
        moveMonthBackward(evt as unknown as React.MouseEvent<HTMLButtonElement>)
        setSlide(slides.backward)
      }
    }
  }
  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = evt => {
    const { key, shiftKey } = evt
    key === 'ArrowUp' && handleDayShift(-1, 7, evt)
    key === 'ArrowDown' && handleDayShift(1, 7, evt)
    key === 'ArrowLeft' && handleDayShift(-1, 1, evt)
    key === 'ArrowRight' && handleDayShift(1, 1, evt)
    key === 'Home' && handleWeekEndStartFocus(-1)
    key === 'End' && handleWeekEndStartFocus(1)
    key === 'PageUp' && handleMonthYearShift(-1, shiftKey, evt)
    key === 'PageDown' && handleMonthYearShift(1, shiftKey, evt)
    key === 'Enter' && dateProps.onClick(evt)
    key === ' ' && dateProps.onClick(evt)
    onKeyDown && onKeyDown(evt)
    if (monthButtonClicked) {
      setMonthButtonClicked(false)
    }
  }
  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    const button = ref.current
    if (button) {
      const canFocus = !monthButtonClicked && isSameDay(focusable, date)
      canFocus && button.focus()
    }
  }, [focusable])
  React.useEffect(() => {
    const button = ref.current
    if (button) {
      selected && button.focus()
    }
  }, [])
  return (
    <button
      {...rest}
      {...dateProps}
      ref={ref}
      disabled={!selectable}
      tabIndex={selected || isSameDay(focusable, date) ? undefined : -1}
      className={classNames(
        'psds-calendar__date',
        selected && 'psds-calendar__date--selected',
        today && 'psds-calendar__date--today',
        className
      )}
      onKeyDown={handleKeyDown}
    >
      {date.getDate()}
    </button>
  )
}
