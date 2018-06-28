import Button from '@pluralsight/ps-design-system-button/react'
import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import css from '../css'
import {
  getDaysInMonth,
  firstDayOfWeekForMonth,
  forceValidDay,
  forceValidMonth,
  forceValidYear
} from '../js'
import * as vars from '../vars'

const styles = {
  calendar: ({}) => glamor.css(css['.psds-date-picker__calendar']),
  days: ({}) => glamor.css(css['.psds-date-picker__calendar__days']),
  day: ({ isActive }) =>
    glamor.css(css['.psds-date-picker__calendar__day'], {
      ':hover': css['.psds-date-picker__calendar__day:hover']
    }),
  weekHeading: ({}) =>
    glamor.css(css['.psds-date-picker__calendar__week-heading']),
  weekHeadingDay: ({}) =>
    glamor.css(css['.psds-date-picker__calendar__week-heading__day']),
  switcher: ({}) => glamor.css(css['.psds-date-picker__calendar__switcher']),
  switcherMonth: ({}) =>
    glamor.css(css['.psds-date-picker__calendar__switcher__month'])
}

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mm: props.mm,
      dd: props.dd,
      yyyy: props.yyyy
    }
    this.handlePrevClick = this.handlePrevClick.bind(this)
    this.handleNextClick = this.handleNextClick.bind(this)
  }
  handlePrevClick() {}
  handleNextClick() {}
  render() {
    const { props, state } = this
    const defaultDate = new Date()
    const {
      mm = defaultDate.getMonth() + 1,
      dd = defaultDate.getDate(),
      yyyy = defaultDate.getFullYear()
    } = props
    return (
      <Theme name={Theme.names.light}>
        <div {...styles.calendar(props)}>
          <div {...styles.switcher(props)}>
            <Button
              onClick={this.handlePrevClick}
              icon={<Icon id={Icon.ids.caretLeft} />}
              size={Button.sizes.small}
              appearance={Button.appearances.flat}
            />
            <div {...styles.switcherMonth(props)}>January</div>
            <Button
              onClick={this.handleNextClick}
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
            {Array.apply(null, Array(getDaysInMonth({ mm, dd, yyyy }))).map(
              (_, i) => (
                <button key={i} {...styles.day(props)}>
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </Theme>
    )
  }
}

Calendar.propTypes = {
  dd: PropTypes.number,
  mm: PropTypes.number,
  yyyy: PropTypes.number
}
Calendar.defaultProps = {}

export default Calendar
