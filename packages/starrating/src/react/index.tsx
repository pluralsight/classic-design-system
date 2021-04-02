import { ValueOf, HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamor from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import Star from './star'

const styles = {
  screenReaderInput: () =>
    glamor.css(stylesheet[`.psds-starrating__screen-reader-input`]),
  screenReaderText: () =>
    glamor.css(stylesheet[`.psds-starrating__screen-reader-text`])
}

interface ScreenReaderInputProps extends HTMLPropsFor<'input'> {
  type: string
  min: number
  max: number
  step: number
  value: React.ReactText
}

const ScreenReaderInput: React.FC<ScreenReaderInputProps> = props => (
  <input {...styles.screenReaderInput()} tabIndex={-1} {...props} />
)

const ScreenReaderText: React.FC<HTMLPropsFor<'span'>> = props => (
  <span {...styles.screenReaderText()} {...props} />
)

export interface StarRatingProps extends Omit<HTMLPropsFor<'div'>, 'onChange'> {
  onChange?: (
    val: React.ReactText,
    evt: React.ChangeEvent | React.MouseEvent
  ) => void
  starCount?: number
  value?: React.ReactText | null
}

const StarRating = React.forwardRef<HTMLDivElement, StarRatingProps>(
  ({ starCount = 5, value, onChange, ...props }, ref) => {
    const [hoverIndex, setHoverIndex] = React.useState<null | number>(null)
    const isInteractive = !!onChange

    const handleInputChanged = (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (!isInteractive) return
      onChange && onChange((evt.target as HTMLInputElement).value, evt)
    }

    const handleStarClicked = (index: number, evt: React.MouseEvent) => {
      if (!isInteractive) return
      onChange && onChange(index + 1, evt)
    }

    const handleStarEnter = (index: number) => {
      if (!isInteractive) return
      setHoverIndex(index)
    }

    const handleStarLeave = () => {
      if (!isInteractive) return
      setHoverIndex(null)
    }

    const stars = (() => {
      const hasValidRating = !Number.isNaN(
        parseFloat((value as unknown) as string)
      )
      const isHovering = hoverIndex !== null

      const valueRounded = Math.round((value as number) * 2) / 2
      const fullStars = Math.floor(valueRounded)
      const halfStars = Math.floor(valueRounded) !== valueRounded

      return [...Array(starCount)].map((_, index) => {
        let active = false
        let bright = false
        let appearance: ValueOf<typeof Star.appearances>

        if (isHovering) {
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
          if (index <= (hoverIndex as number)) {
            active = true
            appearance = Star.appearances.full
          } else {
            appearance = Star.appearances.empty
          }
        } else {
          if (isInteractive && !hasValidRating) {
            appearance = Star.appearances.empty
            bright = true
          } else if (index < fullStars) {
            active = true
            appearance = Star.appearances.full
          } else if (index === fullStars && halfStars) {
            active = true
            appearance = Star.appearances.half
          } else {
            appearance = Star.appearances.full
          }
        }

        return (
          <Star
            active={active}
            appearance={appearance}
            bright={bright}
            index={index}
            interactive={isInteractive}
            key={index}
            onClick={handleStarClicked}
            onEnter={handleStarEnter}
            onLeave={handleStarLeave}
          />
        )
      })
    })()

    return (
      <div {...props} ref={ref}>
        {isInteractive && (
          <label>
            <ScreenReaderText>Rate</ScreenReaderText>
            <ScreenReaderInput
              type="range"
              onChange={handleInputChanged}
              min={1}
              max={starCount}
              step={1}
              value={value || 0}
            />
          </label>
        )}

        {stars}

        <ScreenReaderText>This is rated {value}</ScreenReaderText>
      </div>
    )
  }
)

export default StarRating
