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

const FullStarIcon = (
  <Icon
    css={{ '> svg': { fill: '#AE8017' } }}
    id={Icon.ids.starFill}
    size={Icon.sizes.large}
  />
)
const EmptyStarIcon = (
  <Icon
    css={{ '> svg': { fill: '#666666' } }}
    id={Icon.ids.starFill}
    size={Icon.sizes.large}
  />
)
const HalfStarIcon = (
  <Icon
    css={{ '> svg': { fill: '#AE8017' } }}
    id={Icon.ids.caretRight}
    size={Icon.sizes.large}
  />
)

class StarRating extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  generateIcons() {
    const { value } = this.props

    const halfIntRoundedValue = Math.floor(value * 2) / 2

    let fullStars = Math.floor(halfIntRoundedValue)
    let halfStars = Math.floor(halfIntRoundedValue) !== halfIntRoundedValue

    return new Array(TOTAL_STARS).fill(undefined).map((_, index) => {
      if (index < fullStars) {
        return FullStarIcon
      } else if (index === fullStars && halfStars) {
        return HalfStarIcon
      } else {
        return EmptyStarIcon
      }
    })
  }

  wrapWithButtons(icons) {
    const { onClick } = this.props

    return icons.map((icon, index) => {
      const ratingValue = index + 1
      return (
        <Button
          onClick={() => onClick(ratingValue) || null}
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
