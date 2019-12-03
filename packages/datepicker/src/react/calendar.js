import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import Button from '@pluralsight/ps-design-system-button'
import {
  CaretLeftIcon,
  CaretRightIcon
} from '@pluralsight/ps-design-system-icon'
import Theme from '@pluralsight/ps-design-system-theme'

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
  calendar: _ => css(stylesheet['.psds-date-picker__calendar']({ slide })),
  days: _ => css(stylesheet['.psds-date-picker__calendar__days']),
  day: ({ isSelected }) =>
    compose(
      css(stylesheet['.psds-date-picker__calendar__day']),
      isSelected &&
        css(stylesheet['.psds-date-picker__calendar__day--selected'])
    ),
  skippedDay: _ => css(stylesheet['.psds-date-picker__calendar__skipped-day']),
  switcher: _ => css(stylesheet['.psds-date-picker__calendar__switcher']),
  switcherMonth: _ =>
    css(stylesheet['.psds-date-picker__calendar__switcher__month']),
  weekHeading: _ =>
    css(stylesheet['.psds-date-picker__calendar__week-heading']),
  weekHeadingDay: _ =>
    css(stylesheet['.psds-date-picker__calendar__week-heading__day'])
}

function Calendar(props) {
  const ref = React.useRef()
  const selectedDayRef = React.useRef()

  const { date } = props

  const initialDisplayed = React.useMemo(
    function getDerivedDisplayedDate() {
      const today = new Date()

      return {
        dd: date.dd,
        mm: date.mm || today.getMonth() + 1,
        yyyy: date.yyyy || today.getFullYear()
      }
    },
    [date]
  )

  const [displayed, setDisplayed] = React.useState(initialDisplayed)
  const [selected, setSelected] = React.useState(date)

  React.useEffect(
    function updateSelectedOnPropChange() {
      setSelected(date)
    },
    [date]
  )

  React.useEffect(function focusCurrentOnMount() {
    if (selectedDayRef.current) selectedDayRef.current.focus()
    else ref.current.focus()
  }, [])

  function handlePrevClick(evt) {
    evt.preventDefault()

    const nextDisplayed = getPrevMonthYear(displayed)
    setDisplayed(nextDisplayed)
  }

  function handleNextClick(evt) {
    evt.preventDefault()

    const nextDisplayed = getNextMonthYear(displayed)
    setDisplayed(nextDisplayed)
  }

  function handleDayClick(evt, dd) {
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
            icon={<CaretLeftIcon />}
            size={Button.sizes.small}
            appearance={Button.appearances.flat}
          />

          <div {...styles.switcherMonth(props)}>
            {getMonthName(displayed.mm)} {displayed.yyyy}
          </div>

          <Button
            onClick={handleNextClick}
            icon={<CaretRightIcon />}
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
