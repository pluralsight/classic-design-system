import Button from '@pluralsight/ps-design-system-button/react'
import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import css from '../css'
import {
  formatDate,
  getDaysInMonth,
  getNextMonthYear,
  getPrevMonthYear,
  getMonthName,
  getFirstDayOfWeekForMonth,
  forceValidDay,
  forceValidMonth,
  forceValidYear
} from '../js'
import * as vars from '../vars'

const styles = {
  calendar: ({}) => glamor.css(css['.psds-date-picker__calendar']),
  days: ({}) => glamor.css(css['.psds-date-picker__calendar__days']),
  day: ({ isSelected }) =>
    glamor.css(
      css['.psds-date-picker__calendar__day'],
      {
        ':hover': css['.psds-date-picker__calendar__day:hover']
      },
      isSelected && {
        ...css['.psds-date-picker__calendar__day--selected'],
        ':hover': css['.psds-date-picker__calendar__day--selected:hover']
      }
    ),
  skippedDay: _ => glamor.css(css['.psds-date-picker__calendar__skipped-day']),
  weekHeading: ({}) =>
    glamor.css(css['.psds-date-picker__calendar__week-heading']),
  weekHeadingDay: ({}) =>
    glamor.css(css['.psds-date-picker__calendar__week-heading__day']),
  switcher: ({}) => glamor.css(css['.psds-date-picker__calendar__switcher']),
  switcherMonth: ({}) =>
    glamor.css(css['.psds-date-picker__calendar__switcher__month'])
}

const arrayOf = num => Array.apply(null, Array(num || 0))

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    const defaultDate = new Date()
    // const {
    //   mm = defaultDate.getMonth() + 1,
    //   dd = defaultDate.getDate(),
    //   yyyy = defaultDate.getFullYear()
    // } = props
    const { mm, dd, yyyy } = props
    console.log('cal constructor mm/dd/yyyy', mm, dd, yyyy)
    this.state = {
      displayed: {
        mm: mm || defaultDate.getMonth() + 1,
        yyyy: yyyy || defaultDate.getFullYear()
      },
      selected: {
        mm,
        dd,
        yyyy
      }
    }
    this.handlePrevClick = this.handlePrevClick.bind(this)
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handleDayClick = this.handleDayClick.bind(this)
  }
  componentDidMount() {
    this.el.focus()
  }
  handlePrevClick() {
    const { mm, yyyy } = this.state.displayed
    this.setState({
      displayed: getPrevMonthYear({ mm, yyyy })
    })
  }
  handleNextClick() {
    const { mm, yyyy } = this.state.displayed
    this.setState({
      displayed: getNextMonthYear({ mm, yyyy })
    })
  }
  handleDayClick(dd) {
    const { mm, yyyy } = this.state.displayed
    this.setState(
      {
        selected: { mm, dd, yyyy }
      },
      _ => {
        if (typeof this.props.onSelect === 'function')
          this.props.onSelect(formatDate({ mm, dd, yyyy }))
      }
    )
  }
  render() {
    const { props, state } = this
    const { mm, yyyy } = state.displayed
    console.log('selected', this.state.selected)
    return (
      <Theme name={Theme.names.light}>
        <div
          {...styles.calendar(props)}
          tabIndex="-1"
          ref={el => (this.el = el)}
        >
          <div {...styles.switcher(props)}>
            <Button
              onClick={this.handlePrevClick}
              icon={<Icon id={Icon.ids.caretLeft} />}
              size={Button.sizes.small}
              appearance={Button.appearances.flat}
            />
            <div {...styles.switcherMonth(props)}>
              {getMonthName(mm)} {yyyy}
            </div>
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
            {arrayOf(getFirstDayOfWeekForMonth({ mm, yyyy })).map((_, i) => (
              <div key={i} {...styles.skippedDay(props)} />
            ))}
            {arrayOf(getDaysInMonth({ mm, yyyy })).map((_, i) => (
              <button
                key={i}
                onClick={this.handleDayClick.bind(this, i + 1)}
                {...styles.day({
                  isSelected:
                    yyyy === state.selected.yyyy &&
                    mm === state.selected.mm &&
                    i + 1 === state.selected.dd
                })}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </Theme>
    )
  }
}

Calendar.propTypes = {
  dd: PropTypes.number,
  mm: PropTypes.number,
  yyyy: PropTypes.number,
  onSelect: PropTypes.func
}
Calendar.defaultProps = {}

export default Calendar
