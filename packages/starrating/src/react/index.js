import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import Star from './star.js'
import stylesheet from '../css/index.js'

const styles = {
  screenReaderInput: () =>
    css(stylesheet[`.psds-starrating__screen-reader-input`]),
  screenReaderText: () =>
    css(stylesheet[`.psds-starrating__screen-reader-text`])
}

function ScreenReaderInput(props) {
  return <input {...styles.screenReaderInput(props)} tabIndex={-1} {...props} />
}

function ScreenReaderText(props) {
  return <span {...styles.screenReaderText(props)} {...props} />
}

const StarRating = React.forwardRef((props, ref) => {
  const [hoverIndex, setHoverIndex] = React.useState(null)
  const isInteractive = !!props.onChange
  const { starCount, value } = props

  const { onChange, ...filteredProps } = filterReactProps(props)

  function handleInputChanged(evt) {
    if (!isInteractive) return
    props.onChange(evt.target.value, evt)
  }

  function handleStarClicked(index, evt) {
    if (!isInteractive) return
    props.onChange(index + 1, evt)
  }

  function handleStarEnter(index) {
    if (!isInteractive) return
    setHoverIndex(index)
  }

  function handleStarLeave() {
    if (!isInteractive) return
    setHoverIndex(null)
  }

  const stars = (() => {
    const hasValidRating = !Number.isNaN(parseFloat(value))
    const isHovering = hoverIndex !== null

    const valueRounded = Math.round(value * 2) / 2
    const fullStars = Math.floor(valueRounded)
    const halfStars = Math.floor(valueRounded) !== valueRounded

    return [...Array(starCount)].map((_, index) => {
      let active = false
      let bright = false
      let appearance

      if (isHovering) {
        if (index <= hoverIndex) {
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
    <div {...filteredProps} ref={ref}>
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
})

StarRating.propTypes = {
  onChange: PropTypes.func,
  starCount: PropTypes.number,
  value: PropTypes.number
}
StarRating.defaultProps = {
  starCount: 5
}

export default StarRating
