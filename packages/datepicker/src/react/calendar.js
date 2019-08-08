import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import Button from '@pluralsight/ps-design-system-button/react.js'
import Icon from '@pluralsight/ps-design-system-icon/react.js'
import Theme from '@pluralsight/ps-design-system-theme/react.js'

import stylesheet from '../css/index.js'

import {
  arrayOf,
  formatDate,
  getDaysInMonth,
  getNextMonthYear,
  getPrevMonthYear,
  getMonthName,
  getFirstDayOfWeekForMonth,
  isFunction,
  shallowEqual
} from '../js/index.js'

const slide = css.keyframes(
  stylesheet['@keyframes psds-date-picker__calendar__keyframes__slide']
)

const styles = {
  calendar: () => css(stylesheet['.psds-date-picker__calendar']({ slide })),
  days: () => css(stylesheet['.psds-date-picker__calendar__days']),
  day: ({ isSelected }) =>
    compose(
      css({
        ...stylesheet['.psds-date-picker__calendar__day'],
        ':hover': stylesheet['.psds-date-picker__calendar__day:hover']
      }),
      isSelected &&
        css({
          ...stylesheet['.psds-date-picker__calendar__day--selected'],
          ':hover':
            stylesheet['.psds-date-picker__calendar__day--selected:hover']
        })
    ),
  skippedDay: () => css(stylesheet['.psds-date-picker__calendar__skipped-day']),
  switcher: () => css(stylesheet['.psds-date-picker__calendar__switcher']),
  switcherMonth: () =>
    css(stylesheet['.psds-date-picker__calendar__switcher__month']),
  weekHeading: _ =>
    css(stylesheet['.psds-date-picker__calendar__week-heading']),
  weekHeadingDay: _ =>
    css(stylesheet['.psds-date-picker__calendar__week-heading__day'])
}

function Calendar({ date, ...props }) {
  const ref = React.useRef()
  const selectedDayRef = React.useRef()

  const initialDisplayed = React.useMemo(() => {
    const today = new Date()

    return {
      dd: date.dd,
      mm: date.mm || today.getMonth() + 1,
      yyyy: date.yyyy || today.getFullYear()
    }
  }, [date])

  console.log(initialDisplayed)

  const [displayed, setDisplayed] = React.useState(initialDisplayed)
  const [selected, setSelected] = React.useState(date)

  React.useEffect(() => {
    setSelected(date)
  }, [date])

  React.useEffect(() => {
    if (selectedDayRef.current) selectedDayRef.current.focus()
    else ref.current.focus()
  }, [])

  const handlePrevClick = evt => {
    evt.preventDefault()

    const nextDisplayed = getPrevMonthYear(displayed)
    setDisplayed(nextDisplayed)
  }

  const handleNextClick = evt => {
    evt.preventDefault()

    const nextDisplayed = getNextMonthYear(displayed)
    setDisplayed(nextDisplayed)
  }

  const handleDayClick = (evt, dd) => {
    evt.preventDefault()

    const nextSelected = { ...displayed, dd }
    setSelected(nextSelected)

    if (isFunction(props.onSelect)) {
      props.onSelect(formatDate(nextSelected), nextSelected)
    }
  }

  return (
    <Theme name={Theme.names.light}>
      <div {...styles.calendar(props)} {...props} ref={ref} tabIndex={-1}>
        <div {...styles.switcher(props)}>
          <Button
            onClick={handlePrevClick}
            icon={<Icon id={Icon.ids.caretLeft} />}
            size={Button.sizes.small}
            appearance={Button.appearances.flat}
          />

          <div {...styles.switcherMonth(props)}>
            {getMonthName(displayed.mm)} {displayed.yyyy}
          </div>

          <Button
            onClick={handleNextClick}
            icon={<Icon id={Icon.ids.caretRight} />}
            size={Button.sizes.small}
            appearance={Button.appearances.flat}
          />
        </div>

        <div {...styles.weekHeading(props)}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div {...styles.weekHeadingDay(props)} key={day}>
              {day}
            </div>
          ))}
        </div>

        <div {...styles.days(props)}>
          {arrayOf(getFirstDayOfWeekForMonth(displayed)).map((_, i) => (
            <div key={i} {...styles.skippedDay(props)} />
          ))}

          {arrayOf(getDaysInMonth(displayed)).map((_, i) => {
            const currentDate = { ...displayed, dd: i + 1 }
            const isSelected = shallowEqual(currentDate, selected)

            return (
              <button
                key={i}
                onClick={evt => handleDayClick(evt, currentDate.dd)}
                {...styles.day({ isSelected })}
                {...(isSelected && { ref: selectedDayRef })}
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

Calendar.propTypes = {
  date: PropTypes.shape({
    dd: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    yyyy: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }).isRequired,
  onSelect: PropTypes.func
}

export default Calendar
