/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { classNames } from '@pluralsight/ps-design-system-util'
import { parse, isMatch, format } from 'date-fns'
import type { DateObj } from 'dayzed'
import React from 'react'

import '../css/index.css'

export const useIsInRange = (selected: Date[] = []) => {
  const [hoveredDate, setHoveredDate] = React.useState<Date | undefined>()
  // Calendar level
  const onMouseLeave = () => {
    setHoveredDate(undefined)
  }

  // Date level
  const onMouseEnter = (date: Date) => {
    if (!selected.length) {
      return
    }
    setHoveredDate(date)
  }

  const isInRange = (date: Date): string => {
    if (selected.length) {
      const firstSelected = selected[0].getTime()
      if (selected.length === 2) {
        const secondSelected = selected[1].getTime()
        return classNames(
          firstSelected < date.getTime() &&
            secondSelected > date.getTime() &&
            'psds-calendar__date--in-range',
          firstSelected === date.getTime() &&
            'psds-calendar__date--selected-start',
          secondSelected === date.getTime() &&
            'psds-calendar__date--selected-end'
        )
      } else {
        return classNames(
          hoveredDate &&
            ((firstSelected < date.getTime() &&
              hoveredDate.getTime() >= date.getTime()) ||
              (date.getTime() < firstSelected &&
                date.getTime() >= hoveredDate.getTime())) &&
            'psds-calendar__date--in-range',
          firstSelected === date.getTime() &&
            'psds-calendar__date--selected-start'
        )
      }
    }
    return ''
  }
  return { onMouseLeave, onMouseEnter, isInRange }
}

interface OnRangeDateSelected {
  dateFormat?: string
  setSelected: (arr: Date[]) => void
  selected?: Date[]
  onSelect?: (evt: React.SyntheticEvent, selectedDate: DateObj) => void
  setEndValue?: React.Dispatch<React.SetStateAction<string>>
  setStartValue?: React.Dispatch<React.SetStateAction<string>>
}

export const onRangeDateSelected =
  ({
    selected = [],
    setSelected,
    onSelect,
    dateFormat = 'MM/dd/yyyy',
    setEndValue,
    setStartValue
  }: OnRangeDateSelected) =>
  (dateObj: DateObj, evt: React.SyntheticEvent) => {
    const { selectable, date } = dateObj
    if (!selectable) {
      return
    }
    const dateTime = date.getTime()
    const newDates = [...selected]
    if (selected.length) {
      if (selected.length === 1) {
        const firstTime = selected[0].getTime()
        if (firstTime < dateTime) {
          newDates.push(date)
        } else {
          newDates.unshift(date)
        }
        setSelected(newDates)
        setStartValue && setStartValue(format(newDates[0], dateFormat))
        setEndValue && setEndValue(format(newDates[1], dateFormat))
      } else if (newDates.length === 2) {
        setSelected([date])
        setStartValue && setStartValue(format(date, dateFormat))
        setEndValue && setEndValue('')
      }
    } else {
      newDates.push(date)
      setSelected(newDates)
      setStartValue && setStartValue(format(newDates[0], dateFormat))
      setEndValue && setEndValue(format(newDates[1], dateFormat))
    }
    onSelect && onSelect(evt, dateObj)
  }

const getDateIndex = (
  selected: Date[],
  condition: (time: number) => boolean
) => {
  let index
  selected.some((date, i) => {
    index = i
    if (condition(date.getTime())) {
      return true
    }
    // If we loop through all the selected dates and still didn't find
    // one, make sure to add it to the end of the array.
    index++
    return false
  })
  return index as unknown as number
}

export const onMultiDateSelected =
  ({
    selected = [],
    setSelected,
    onSelect
  }: Omit<OnRangeDateSelected, 'setEndValue' | 'setStartValue'>) =>
  (dateObj: DateObj, evt: React.SyntheticEvent) => {
    const { selected: isSelected, selectable, date } = dateObj
    if (!selectable) {
      return
    }
    const newSelectedDates = selected.slice()
    const selectedTime = date.getTime()
    if (isSelected) {
      const index = getDateIndex(selected, time => selectedTime === time)
      newSelectedDates.splice(index, 1)
    } else {
      // Add
      const index = getDateIndex(selected, time => selectedTime < time)
      newSelectedDates.splice(index, 0, date)
    }
    setSelected(newSelectedDates)
    onSelect && onSelect(evt, dateObj)
  }

interface HandleChange<T> {
  dateFormat?: string
  selected?: T
  setSelected: React.Dispatch<React.SetStateAction<T | undefined>>
  value: string
}

export const handleDateSelectChange = ({
  selected,
  setSelected,
  value,
  dateFormat = 'MM/dd/yyyy'
}: HandleChange<Date>): void => {
  let fulldate = false
  try {
    fulldate = isMatch(value, dateFormat)
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err
    }
  }
  const nextSelected = fulldate
    ? parse(value, dateFormat, new Date())
    : selected
  setSelected(nextSelected)
}

interface HandleRangeChange extends HandleChange<Date[]> {
  start: boolean
}

export const handleRangeSelectChange = ({
  start,
  selected = [],
  value,
  setSelected,
  dateFormat = 'MM/dd/yyyy'
}: HandleRangeChange): void => {
  let fulldate = false
  try {
    fulldate = isMatch(value, dateFormat)
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err
    }
  }
  const nextSelected = fulldate
    ? parse(value, dateFormat, new Date())
    : selected

  if (
    nextSelected instanceof Date &&
    !isNaN(nextSelected as unknown as number)
  ) {
    if (selected) {
      !selected[0] && setSelected([])
      start && setSelected([nextSelected, selected[1]].filter(Boolean))
      selected[0] && !start && setSelected([selected[0], nextSelected])
    }
  }
}
