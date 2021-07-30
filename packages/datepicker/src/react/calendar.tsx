/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import Button from '@pluralsight/ps-design-system-button'
import {
  CaretLeftIcon,
  CaretRightIcon
} from '@pluralsight/ps-design-system-icon'
import {
  RefFor,
  ValueOf,
  uniqueId as defaultUniqueId,
  classNames
} from '@pluralsight/ps-design-system-util'
import FocusManager from '@pluralsight/ps-design-system-focusmanager'
import Theme from '@pluralsight/ps-design-system-theme'
import type { RenderProps } from 'dayzed'
import { format } from 'date-fns'
import React from 'react'

import '../css/index.css'
import { DateContext } from './context'
import { slides } from '../vars/index'
import { useKeyEvents } from './use-key-events'

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
    Pick<RenderProps, 'calendars' | 'getBackProps' | 'getForwardProps'> {
  uniqueId?: (prefix: string) => string
  selected?: Date
  autofocus?: boolean
  trapped?: boolean
  returnFocus?: boolean
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      calendars,
      className,
      getBackProps,
      getForwardProps,
      children,
      uniqueId = defaultUniqueId,
      selected = new Date(),
      autofocus = false,
      trapped = false,
      returnFocus = false,
      ...rest
    },
    ref
  ) => {
    const [slide, setSlide] = React.useState<ValueOf<typeof slides>>()
    const [height, setHeight] = React.useState<number | undefined>()
    const [focusable, setFocusable] = React.useState<Date | undefined>(selected)
    const { onClick: onBackClick, ...backRest } = getBackProps({ calendars })
    const { onClick: onForwardClick, ...forwardRest } = getForwardProps({
      calendars
    })
    const focusNext = () => {
      focusable &&
        document
          .querySelector<HTMLButtonElement>(
            `[aria-label="${format(focusable, 'EEE LLL dd yyyy')}"]`
          )
          ?.focus()
    }
    React.useEffect(() => {
      focusNext()
    })
    const { dayKeyHandlers, headerButtonCallback } = useKeyEvents({
      focusNext,
      calendars,
      getBackProps,
      getForwardProps,
      setSlide,
      setFocusable,
      focusable
    })
    const handleForwardClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onForwardClick(e)
      headerButtonCallback(e, 1)
      e.currentTarget.focus()
    }
    const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onBackClick(e)
      headerButtonCallback(e, -1)
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
      uniqueId(`${calendar.month}_${calendar.year}`)
    )

    if (calendars.length) {
      return (
        <FocusManager
          autofocus={autofocus}
          trapped={trapped}
          returnFocus={returnFocus}
          {...rest}
          className={classNames('psds-calendar', className)}
          ref={ref}
        >
          <div className="psds-calendar__header-wrapper">
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
                        onClick={handleBackClick}
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
                        className="psds-calendar__header-button"
                        onClick={handleForwardClick}
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
              ref={animationRef as RefFor<'div'>}
            >
              {calendars.map((calendar, i) => (
                <div
                  className="psds-calendar__date-grid"
                  key={`${calendar.month}${calendar.year}`}
                >
                  <DateContext.Provider
                    value={{
                      ...calendar,
                      'aria-labelledby': gridLabels[i],
                      dayKeyHandlers,
                      focusable
                    }}
                  >
                    {children}
                  </DateContext.Provider>
                </div>
              ))}
            </div>
          </div>
        </FocusManager>
      )
    }
    return null
  }
)
