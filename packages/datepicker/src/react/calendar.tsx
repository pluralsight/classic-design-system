import Button from '@pluralsight/ps-design-system-button'
import {
  CaretLeftIcon,
  CaretRightIcon
} from '@pluralsight/ps-design-system-icon'
import Theme from '@pluralsight/ps-design-system-theme'
import { compose, css, keyframes } from 'glamor'
import React, { useRef, useState, useEffect, FC } from 'react'

import stylesheet from '../css'
import {
  arrayOf,
  getDaysInMonth,
  getNextMonthYear,
  getPrevMonthYear,
  getMonthName,
  getFirstDayOfWeekForMonth
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
  overlay: () => css(stylesheet['.psds-date-picker__overlay']),
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
  value: Date | undefined
  onChange: (evt: React.MouseEvent, date: Date) => void
}
export const Calendar: FC<CalendarProps> = props => {
  const { value = new Date(), onChange, ...rest } = props
  const ref = useRef<HTMLDivElement>(null)
  const selectedDayRef = useRef<HTMLButtonElement>(null)

  const [displayed, setDisplayed] = useState<Date>(value)
  const [selected, setSelected] = useState<Date>(value)

  useEffect(
    function updateSelectedOnPropChange() {
      setSelected(value)
    },
    [value]
  )

  useEffect(function focusCurrentOnMount() {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const selectedDayNode = selectedDayRef.current as HTMLButtonElement
    if (selectedDayNode) selectedDayNode.focus()
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

  function handleDayClick(evt: React.MouseEvent, selectedDate: Date) {
    evt.preventDefault()
    setSelected(selectedDate)

    if (typeof onChange === 'function') {
      onChange(evt, selectedDate)
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
            {getMonthName(displayed)} {displayed.getFullYear()}
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
            const dateForCalendarDayNoTime = new Date(displayed)
            dateForCalendarDayNoTime.setDate(i + 1)
            dateForCalendarDayNoTime.setHours(0, 0, 0, 0)
            const selectedDateNoTime = new Date(selected)
            selectedDateNoTime.setHours(0, 0, 0, 0)
            const isSelected =
              dateForCalendarDayNoTime.getTime() ===
              selectedDateNoTime.getTime()

            return (
              <button
                key={i}
                onClick={evt => handleDayClick(evt, dateForCalendarDayNoTime)}
                {...styles.day(isSelected)}
                {...(isSelected && { ref: selectedDayRef })}
              >
                {dateForCalendarDayNoTime.getDate()}
              </button>
            )
          })}
        </div>
      </div>
    </Theme>
  )
}

interface OverlayProps {
  onClick: (evt: React.MouseEvent) => void
}

export const Overlay: FC<OverlayProps> = props => {
  return <div {...styles.overlay()} onClick={props.onClick} />
}
