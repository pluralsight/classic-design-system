import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import React from 'react'

import icons from './icons'

export const ids = Object.keys(icons)

export const sizes = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xLarge: 'xLarge'
}

const styleSize = ({ size }) =>
  ({
    tiny: {
      height: '16px',
      width: '16px'
    },
    small: {
      height: '24px',
      width: '24px'
    },
    medium: {
      height: '48px',
      width: '48px'
    },
    large: {
      height: '96px',
      width: '96px'
    },
    xLarge: {
      height: '160px',
      width: '160px'
    }
  }[size])

const IconContainer = glamorous.div(
  {
    display: 'inline-block',
    height: '24px',
    width: '24px',
    '> svg': {
      fill: 'currentColor'
    }
  },
  styleSize
)

const rmNonHtmlProps = props => {
  const { id, ...rest } = props
  return rest
}

const Icon = props =>
  <IconContainer {...rmNonHtmlProps(props)}>
    {eval(icons[props.id])}
  </IconContainer>

import PropTypes from 'prop-types'
Icon.propTypes = {
  id: PropTypes.oneOf(ids).isRequired,
  size: PropTypes.oneOf(Object.keys(sizes))
}
Icon.defaultProps = {
  size: 'small'
}
export default Icon
