import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import DarkHalfStar from './half-star-dark'

import css from '../css'
import * as vars from '../vars'

const TOTAL_STARS = 5

const ICONS = {
  full: {
    fill: core.colors.yellow,
    id: Icon.ids.starFill
  },
  empty: {
    fill: core.colors.gray03,
    id: Icon.ids.starFill
  },
  hover: {
    fill: core.colors.gray04,
    id: Icon.ids.star
  }
}

const styles = {
  button: {
    border: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 0,
    margin: 0
  },
  screenReaderContent: {
    clip: 'rect(1px, 1px, 1px, 1px)',
    position: 'absolute',
    clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)',
    whiteSpace: 'nowrap',
    height: '1px',
    width: '1px',
    overflow: 'hidden'
  }
}

class StarRating extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hoverIndex: null
    }
  }
  generateIcons() {
    const { hoverIndex } = this.state
    const { value } = this.props

    const halfIntRoundedValue = Math.floor(value * 2) / 2

    let fullStars = Math.floor(halfIntRoundedValue)
    let halfStars = Math.floor(halfIntRoundedValue) !== halfIntRoundedValue

    return new Array(TOTAL_STARS).fill(undefined).map((_, index) => {
      let fill, id
      if (hoverIndex !== null) {
        if (index <= hoverIndex) {
          ;({ fill, id } = ICONS.hover)
        } else {
          ;({ fill, id } = ICONS.empty)
        }
      } else {
        if (index < fullStars) {
          ;({ fill, id } = ICONS.full)
        } else if (index === fullStars && halfStars) {
          return <DarkHalfStar />
        } else {
          ;({ fill, id } = ICONS.empty)
        }
      }

      return (
        <Icon
          key={index}
          css={{ '> svg': { fill } }}
          id={id}
          size={Icon.sizes.xsmall}
          role="presentation"
        />
      )
    })
  }

  wrapWithButtons(icons) {
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
          style={styles.button}
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
    StarIcons = onClick ? this.wrapWithButtons(StarIcons) : StarIcons
    return (
      <div>
        {onClick && (
          <label>
            <span style={styles.screenReaderContent}>Rate</span>
            <input
              style={styles.screenReaderContent}
              type="range"
              onChange={event => onClick(event.target.value)}
              min={1}
              max={5}
              step={1}
            />
          </label>
        )}
        <span
          style={styles.screenReaderContent}
        >{`This is rated ${value}`}</span>
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

export default StarRating
