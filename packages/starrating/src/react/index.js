import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import Button from '@pluralsight/ps-design-system-button/react'

import css from '../css'
import * as vars from '../vars'

const TOTAL_STARS = 5

const ICONS = {
  full: {
    fill: '#AE8017',
    id: Icon.ids.starFill
  },
  empty: {
    fill: '#666666',
    id: Icon.ids.starFill
  },
  half: {
    fill: '##427fbb', // TODO Change this.
    id: Icon.ids.starFill
  },
  hover: {
    fill: '#AE8017',
    id: Icon.ids.star
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
      if (hoverIndex) {
        if (index <= hoverIndex) {
          ;({ fill, id } = ICONS.hover)
        } else {
          ;({ fill, id } = ICONS.empty)
        }
      } else {
        if (index < fullStars) {
          ;({ fill, id } = ICONS.full)
        } else if (index === fullStars && halfStars) {
          ;({ fill, id } = ICONS.half)
        } else {
          ;({ fill, id } = ICONS.empty)
        }
      }

      return (
        <Icon css={{ '> svg': { fill } }} id={id} size={Icon.sizes.large} />
      )
    })
  }

  wrapWithButtons(icons) {
    const { onClick } = this.props

    return icons.map((icon, index) => {
      const ratingValue = index + 1
      return (
        <Button
          onClick={() => onClick(ratingValue)}
          onMouseOver={() => this.setState({ hoverIndex: index })}
          onMouseLeave={() => this.setState({ hoverIndex: null })}
          icon={icon}
          appearance={Button.appearances.flat}
          size={Button.sizes.large}
        />
      )
    })
  }

  render() {
    const { onClick } = this.props

    let StarIcons = this.generateIcons()
    StarIcons = onClick ? this.wrapWithButtons(StarIcons) : StarIcons

    return StarIcons
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
