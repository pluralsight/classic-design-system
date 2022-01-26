/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from 'react'
import Button from '@pluralsight/ps-design-system-button'
import {
  CaretLeftIcon,
  CaretRightIcon
} from '@pluralsight/ps-design-system-icon'
import {
  ValueOf,
  classNames,
  debounce,
  generateId
} from '@pluralsight/ps-design-system-util'
import FocusManager from '@pluralsight/ps-design-system-focusmanager'
import Theme from '@pluralsight/ps-design-system-theme'
import type { RenderProps } from 'dayzed'
import { add, sub } from 'date-fns'

import '../css/index.css'
import { slides } from '../vars/index'
import { CalendarDayProps } from './calendar-day'

const monthNamesShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
const weekdayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

interface CalendarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    RenderProps {
  selected?: Date
  autofocus?: boolean
  trapped?: boolean
  returnFocus?: boolean
  children: (props: CalendarDayProps) => React.ReactNode
}

const focusForwardMonthButton = (context: HTMLDivElement) => {
  context.querySelector<HTMLButtonElement>('#forward-month')?.focus()
}
const focusBackwardMonthButton = (context: HTMLDivElement) => {
  context.querySelector<HTMLButtonElement>('#backward-month')?.focus()
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      calendars,
      className,
      getBackProps,
      getForwardProps,
      children,
      selected = new Date(),
      autofocus = false,
      trapped = false,
      returnFocus = false,
      getDateProps,
      ...rest
    },
    forwarededRef
  ) => {
    const [slide, setSlide] = React.useState<ValueOf<typeof slides>>()
    const [height, setHeight] = React.useState<number | undefined>()
    const [focusable, setFocusable] = React.useState<Date>(selected)
    const [monthButtonClicked, setMonthButtonClicked] =
      React.useState<boolean>(false)
    const { onClick: onBackClick, ...backRest } = getBackProps({ calendars })
    const { onClick: onForwardClick, ...forwardRest } = getForwardProps({
      calendars
    })
    const headerRef = React.useRef<HTMLDivElement>(null)
    const handleForwardClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onForwardClick(e)
      const nextDate = add(focusable, { months: 1 })
      setFocusable(nextDate)
      setSlide(slides.forward)
      setMonthButtonClicked(true)
      const header = headerRef.current
      header && debounce(100, focusForwardMonthButton)(header)
    }
    const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onBackClick(e)
      const nextDate = sub(focusable, { months: 1 })
      setFocusable(nextDate)
      setSlide(slides.backward)
      setMonthButtonClicked(true)
      const header = headerRef.current
      header && debounce(100, focusBackwardMonthButton)(header)
    }
    const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> =
      evt => {
        const { key } = evt
        if (key === 'Enter' || key === ' ') {
          evt.currentTarget.id === 'backward-month'
            ? handleBackClick(
                evt as unknown as React.MouseEvent<HTMLButtonElement>
              )
            : handleForwardClick(
                evt as unknown as React.MouseEvent<HTMLButtonElement>
              )
          evt.preventDefault()
        }
      }
    const animationRef = React.useRef<HTMLDivElement>()
    React.useEffect(() => {
      const el = animationRef.current
      if (el) {
        const { height } = el.getBoundingClientRect()
        setHeight(height)
      }
    }, [slide])
    React.useEffect(() => {
      const el = animationRef.current
      if (el) {
        const { height } = el.getBoundingClientRect()
        setHeight(height)
        const updateOffset = () => setSlide(undefined)
        el.addEventListener('animationend', updateOffset)
        return () => el.removeEventListener('animationend', updateOffset)
      }
    }, [])
    const gridLabels = calendars.map((calendar, i) =>
      generateId(`psds-datepicker-grid--${calendar.month}/${calendar.year}-`)
    )

    const ref = React.useRef<HTMLDivElement>(null)
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    React.useImperativeHandle(
      forwarededRef,
      () => ref.current as HTMLDivElement
    )

    return calendars.length ? (
      <FocusManager
        {...rest}
        className={classNames('psds-calendar', className)}
        ref={forwarededRef}
        autofocus={autofocus}
        trapped={trapped}
        returnFocus={returnFocus}
      >
        <div className="psds-calendar__header-wrapper" ref={headerRef}>
          {calendars.map((calendar, i) => (
            <div
              key={`${calendar.month}${calendar.year}`}
              className="psds-calendar__header"
            >
              <Theme name={Theme.names.light}>
                <div className="psds-calendar__month">
                  {i === 0 ? (
                    <Button
                      {...backRest}
                      className="psds-calendar__header-button"
                      id="backward-month"
                      onClick={handleBackClick}
                      onKeyDown={handleKeyDown}
                      icon={<CaretLeftIcon />}
                      appearance={Button.appearances.flat}
                    />
                  ) : (
                    <div className="psds-calendar__header-button" />
                  )}
                  <h2
                    key={`${calendar.month}${calendar.year}`}
                    id={gridLabels[i]}
                    className="psds-calendar__header-month"
                  >
                    {monthNamesShort[calendar.month]} {calendar.year}
                  </h2>
                  {calendars.length - 1 === i ? (
                    <Button
                      {...forwardRest}
                      id="forward-month"
                      className="psds-calendar__header-button"
                      onClick={handleForwardClick}
                      onKeyDown={handleKeyDown}
                      icon={<CaretRightIcon />}
                      appearance={Button.appearances.flat}
                    />
                  ) : (
                    <div className="psds-calendar__header-button" />
                  )}
                </div>
              </Theme>
              {weekdayNamesShort.map(weekday => (
                <div
                  key={`${calendar.month}${calendar.year}${weekday}`}
                  className="psds-calendar__weekday-header"
                >
                  {weekday}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ height }} className="psds-calendar__date-grid">
          <div
            className={classNames(
              'psds-calendar__grid-slide',
              slide === 'forward' && 'psds-calendar__grid-slide--forward',
              slide === 'backward' && 'psds-calendar__grid-slide--backward'
            )}
            ref={animationRef as React.RefObject<HTMLDivElement>}
          >
            {calendars.map((calendar, i) => (
              <div
                className="psds-calendar__date-grid"
                key={`${calendar.month}${calendar.year}`}
              >
                {calendar.weeks.map((week, weekIndex) => {
                  return week.map((dateObj, index) => {
                    const key = `${calendar.month}${calendar.year}${weekIndex}${index}`
                    if (!dateObj) {
                      return (
                        <div
                          key={key}
                          className={classNames(
                            'psds-calendar__filler',
                            className
                          )}
                        />
                      )
                    }
                    const dateProps = getDateProps({
                      dateObj
                    })
                    return children({
                      key,
                      dateObj,
                      dateProps,
                      'aria-labelledby': gridLabels[i],
                      calendars,
                      focusable,
                      getBackProps,
                      getForwardProps,
                      monthButtonClicked,
                      setFocusable,
                      setMonthButtonClicked,
                      setSlide
                    })
                  })
                })}
              </div>
            ))}
          </div>
        </div>
      </FocusManager>
    ) : null
  }
)
