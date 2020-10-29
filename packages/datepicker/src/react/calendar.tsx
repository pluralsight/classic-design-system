import { compose, css, keyframes } from 'glamor'
import React from 'react'

import Button from '@pluralsight/ps-design-system-button'
import {
  CaretLeftIcon,
  CaretRightIcon
} from '@pluralsight/ps-design-system-icon'
import Theme from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css'
import { DateParts, MonthDateParts } from '../js/types'

import {
  arrayOf,
  formatDate,
  getDaysInMonth,
  getNextMonthYear,
  getPrevMonthYear,
  getMonthName,
  getFirstDayOfWeekForMonth,
  shallowEqual
} from '../js'

const slide = keyframes(
  stylesheet['@keyframes psds-date-picker__calendar__keyframes__slide']
)

const styles = {
  calendar: () => css(stylesheet['.psds-date-picker__calendar']({ slide })),
  days: () => css(stylesheet['.psds-date-picker__calendar__days']),
  day: (isSelected: boolean) =>
    compose(
      css(stylesheet['.psds-date-picker__calendar__day']),
      isSelected &&
        css(stylesheet['.psds-date-picker__calendar__day--selected'])
    ),
  skippedDay: () => css(stylesheet['.psds-date-picker__calendar__skipped-day']),
  switcher: () => css(stylesheet['.psds-date-picker__calendar__switcher']),
  switcherMonth: () =>
    css(stylesheet['.psds-date-picker__calendar__switcher__month']),
  weekHeading: () =>
    css(stylesheet['.psds-date-picker__calendar__week-heading']),
  weekHeadingDay: () =>
    css(stylesheet['.psds-date-picker__calendar__week-heading__day'])
}

interface CalendarProps {
  date: DateParts
  onSelect: (value: string | undefined) => void
}
const Calendar: React.FC<CalendarProps> = props => {
  const { date, onSelect, ...rest } = props
  const ref = React.useRef<HTMLDivElement>(null)
  const selectedDayRef = React.useRef<HTMLButtonElement>(null)

  const initialDisplayed = React.useMemo<DateParts>(
    function getDerivedDisplayedDate() {
      const today = new Date()

      return {
        dd: date.dd,
        mm: date.mm || (today.getMonth() + 1).toString(),
        yyyy: date.yyyy || today.getFullYear().toString()
      }
    },
    [date]
  )

  const [displayed, setDisplayed] = React.useState<MonthDateParts>(
    initialDisplayed
  )
  const [selected, setSelected] = React.useState<DateParts>(date)

  React.useEffect(
    function updateSelectedOnPropChange() {
      setSelected(date)
    },
    [date]
  )

  React.useEffect(function focusCurrentOnMount() {
    const current = selectedDayRef.current as HTMLButtonElement
    if (current) current.focus()
    else if (ref.current) ref.current.focus()
  }, [])

  function handlePrevClick(evt: React.MouseEvent) {
    evt.preventDefault()

    const nextDisplayed = getPrevMonthYear(displayed)
    setDisplayed(nextDisplayed)
  }

  function handleNextClick(evt: React.MouseEvent) {
    evt.preventDefault()

    const nextDisplayed = getNextMonthYear(displayed)
    setDisplayed(nextDisplayed)
  }

  function handleDayClick(evt: React.MouseEvent, dd: string) {
    evt.preventDefault()

    const nextSelected = { ...displayed, dd }
    setSelected(nextSelected)

    if (typeof onSelect === 'function') {
      onSelect(formatDate(nextSelected))
    }
  }

  return (
    <Theme name={Theme.names.light}>
      <div {...styles.calendar()} {...rest} ref={ref} tabIndex={-1}>
        <div {...styles.switcher()}>
          <Button
            onClick={handlePrevClick}
            icon={<CaretLeftIcon />}
            size={Button.sizes.small}
            appearance={Button.appearances.flat}
          />

          <div {...styles.switcherMonth()}>
            {getMonthName(displayed.mm)} {displayed.yyyy}
          </div>

          <Button
            onClick={handleNextClick}
            icon={<CaretRightIcon />}
            size={Button.sizes.small}
            appearance={Button.appearances.flat}
          />
        </div>

        <div {...styles.weekHeading()}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div {...styles.weekHeadingDay()} key={day}>
              {day}
            </div>
          ))}
        </div>

        <div {...styles.days()}>
          {arrayOf(getFirstDayOfWeekForMonth(displayed)).map((_, i) => (
            <div key={i} {...styles.skippedDay()} />
          ))}

          {arrayOf(getDaysInMonth(displayed)).map((_, i) => {
            const currentDate = { ...displayed, dd: i + 1 }
            const isSelected = shallowEqual(currentDate, selected)

            return (
              <button
                key={i}
                onClick={evt => handleDayClick(evt, currentDate.dd.toString())}
                {...styles.day(isSelected)}
                {...(isSelected && { ref: selectedDayRef })}
                ref={selectedDayRef}
              >
                {currentDate.dd}
              </button>
            )
          })}
        </div>
      </div>
    </Theme>
  )
}

export default Calendar
