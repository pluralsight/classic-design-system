import React from 'react'
import { GetBackForwardPropsOptions, Calendar } from 'dayzed'
import { format, endOfWeek, startOfWeek, add, sub, getMonth } from 'date-fns'
import { useDebounceCallback } from '@pluralsight/ps-design-system-util'

interface UseKeyEvents {
  selected: Date
  calendars: Calendar[]
  getBackProps: (data: GetBackForwardPropsOptions) => Record<string, any>
  getForwardProps: (data: GetBackForwardPropsOptions) => Record<string, any>
}
export const useKeyEvents = ({
  selected,
  calendars,
  getBackProps,
  getForwardProps
}: UseKeyEvents) => {
  const [focusedDate, setFocusedDate] = React.useState<Date | undefined>(
    selected
  )
  const updateFocused = () => {
    focusedDate &&
      document
        .querySelector<HTMLButtonElement>(
          `[aria-label="${format(focusedDate, 'EEE LLL dd yyyy')}"]`
        )
        ?.focus()
  }

  const focusNext = useDebounceCallback(updateFocused, 100)

  React.useEffect(() => {
    focusNext()
  }, [focusedDate, focusNext])
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
      setFocusedDate(nextDate)
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
    }
    const handleWeekEndStartFocus = (dir: 1 | -1) => {
      const nextDate = dir === -1 ? startOfWeek(date) : endOfWeek(date)
      setFocusedDate(nextDate)
    }
    const handleMonthYearShift = (
      dir: 1 | -1,
      shiftKey: boolean,
      evt: React.KeyboardEvent<HTMLButtonElement>
    ) => {
      const _evt = evt as unknown as React.MouseEvent<HTMLButtonElement>
      const args = shiftKey ? { years: 1 } : { months: 1 }
      const nextDate = dir === 1 ? add(date, args) : sub(date, args)
      setFocusedDate(nextDate)
      if (dir === 1) {
        shiftKey ? moveYearForward(_evt) : moveMonthForward(_evt)
      }
      if (dir === -1) {
        shiftKey ? moveYearBackward(_evt) : moveMonthBackward(_evt)
      }
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

  return dayKeyHandlers
}
