import React from 'react'
import { GetBackForwardPropsOptions, Calendar } from 'dayzed'
import { endOfWeek, startOfWeek, add, sub, getMonth } from 'date-fns'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import { slides } from '../vars/index'

interface UseKeyEvents {
  calendars: Calendar[]
  getBackProps: (data: GetBackForwardPropsOptions) => Record<string, any>
  getForwardProps: (data: GetBackForwardPropsOptions) => Record<string, any>
  setSlide: React.Dispatch<React.SetStateAction<ValueOf<typeof slides>>>
  setFocusable: React.Dispatch<React.SetStateAction<Date | undefined>>
  focusable?: Date
  focusNext: (this: void, ...args: any[]) => void
}
export const useKeyEvents = ({
  focusNext,
  calendars,
  getBackProps,
  getForwardProps,
  setSlide,
  setFocusable,
  focusable
}: UseKeyEvents) => {
  const moveMonthForward = getForwardProps({ calendars }).onClick
  const moveMonthBackward = getBackProps({ calendars }).onClick
  const moveYearForward = getForwardProps({ calendars, offset: 12 }).onClick
  const moveYearBackward = getBackProps({ calendars, offset: 12 }).onClick
  const dayKeyHandlers = (date: Date) => {
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
        dir === 1
          ? moveMonthForward(
              evt as unknown as React.MouseEvent<HTMLButtonElement>
            )
          : moveMonthBackward(
              evt as unknown as React.MouseEvent<HTMLButtonElement>
            )
      }
      focusNext()
    }
    const handleWeekEndStartFocus = (dir: 1 | -1) => {
      const nextDate = dir === -1 ? startOfWeek(date) : endOfWeek(date)
      setFocusable(nextDate)
      focusNext()
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
      focusNext()
    }
    const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> =
      evt => {
        const { key, shiftKey } = evt
        key === 'ArrowUp' && handleDayShift(-1, 7, evt)
        key === 'ArrowDown' && handleDayShift(1, 7, evt)
        key === 'ArrowLeft' && handleDayShift(-1, 1, evt)
        key === 'ArrowRight' && handleDayShift(1, 1, evt)
        key === 'Home' && handleWeekEndStartFocus(-1)
        key === 'End' && handleWeekEndStartFocus(1)
        key === 'PageUp' && handleMonthYearShift(-1, shiftKey, evt)
        key === 'PageDown' && handleMonthYearShift(1, shiftKey, evt)
      }
    return handleKeyDown
  }
  const headerButtonCallback = (
    evt: React.MouseEvent<HTMLButtonElement>,
    dir: 1 | -1
  ) => {
    if (focusable) {
      const nextDate =
        dir === 1
          ? add(focusable, { months: 1 })
          : sub(focusable, { months: 1 })
      setFocusable(nextDate)
      if (dir === 1) {
        moveMonthForward(evt)
        setSlide(slides.forward)
      }
      if (dir === -1) {
        moveMonthBackward(evt)
        setSlide(slides.backward)
      }
    }
  }
  return {
    dayKeyHandlers,
    headerButtonCallback,
    focusNext
  }
}
