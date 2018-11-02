import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'
import { transparentize } from 'polished'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import DarkHalfStar from './half-star-dark'
import LightHalfStar from './half-star-light'

import css from '../css'

const TOTAL_STARS = 5

const themeToIcons = themeName => {
  return {
    full: {
      fill: core.colors.yellow,
      id: Icon.ids.starFill
    },
    empty: {
      fill:
        themeName === themeDefaultName
          ? core.colors.gray03
          : transparentize(0.25, core.colors.gray01),
      id: Icon.ids.starFill
    },
    hover: {
      fill: core.colors.gray04,
      id: Icon.ids.star
    }
  }
}

class StarRating extends React.Component {
  constructor(props, context) {
    super(props)
    const themeName = context.themeName || themeDefaultName
    this.state = {
      hoverIndex: null,
      themedIcons: themeToIcons(themeName),
      themeName
    }
  }

  makeIcon({ id, fill, index }) {
    return (
      <Icon
        key={index}
        css={{ '> svg': { fill } }}
        id={id}
        size={Icon.sizes.xsmall}
        role="presentation"
      />
    )
  }

  getNonHoverStateIcon(index, shouldFillFullStar, shouldFillHalfStar) {
    const {
      themedIcons: { full, empty },
      themeName
    } = this.state
    if (shouldFillFullStar) {
      return this.makeIcon({ ...full, index })
    } else if (shouldFillHalfStar) {
      return themeName === themeDefaultName ? (
        <DarkHalfStar key={index} />
      ) : (
        <LightHalfStar key={index} />
      )
    } else {
      return this.makeIcon({ ...empty, index })
    }
  }

  getHoverStateIcon(index, shouldFillFullStar) {
    const {
      themedIcons: { hover, empty }
    } = this.state
    const fill = shouldFillFullStar ? hover.fill : empty.fill
    const id = shouldFillFullStar ? hover.id : empty.id
    return this.makeIcon({ id, fill, index })
  }

  generateIcons() {
    const { hoverIndex } = this.state
    const { value } = this.props

    const halfIntRoundedValue = Math.floor(value * 2) / 2

    let fullStars = Math.floor(halfIntRoundedValue)
    let halfStars = Math.floor(halfIntRoundedValue) !== halfIntRoundedValue

    const isHovering = hoverIndex !== null

    return new Array(TOTAL_STARS).fill(undefined).map((_, index) => {
      let icon

      if (isHovering) {
        const shouldFillFullStar = index <= hoverIndex
        icon = this.getHoverStateIcon(index, shouldFillFullStar)
      } else {
        const shouldFillFullStar = index < fullStars
        const shouldFillHalfStar = index === fullStars && halfStars
        icon = this.getNonHoverStateIcon(
          index,
          shouldFillFullStar,
          shouldFillHalfStar
        )
      }
      return icon
    })
  }

  makeClickable(icons) {
    const { onClick } = this.props

    return icons.map((icon, index) => {
      const ratingValue = index + 1
      const ratingString = `Rate ${ratingValue} star${
        ratingValue > 1 ? 's' : ''
      }`
      return (
        <button
          key={index}
          tabIndex={-1}
          style={css.button}
          onClick={() => onClick(ratingValue)}
          onMouseOver={() => this.setState({ hoverIndex: index })}
          onMouseLeave={() => this.setState({ hoverIndex: null })}
          aria-label={ratingString}
        >
          {icon}
        </button>
      )
    })
  }

  render() {
    const { onClick, value } = this.props

    let StarIcons = this.generateIcons()
    StarIcons = onClick ? this.makeClickable(StarIcons) : StarIcons
    return (
      <div>
        {onClick && (
          <label>
            <span style={css.screenReaderContent}>Rate</span>
            <input
              style={css.screenReaderContent}
              type="range"
              onChange={event => onClick(event.target.value)}
              min={1}
              max={5}
              step={1}
            />
          </label>
        )}
        <span style={css.screenReaderContent}>{`This is rated ${value}`}</span>
        {StarIcons}
      </div>
    )
  }
}

StarRating.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
}

StarRating.defaultProps = {
  value: null,
  onClick: null
}

StarRating.contextTypes = {
  themeName: PropTypes.string
}

export default StarRating
