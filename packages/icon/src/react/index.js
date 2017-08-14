import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import React from 'react'

import icons from './icons'

const ids = Object.keys(icons)

const sizes = {
  // TODO: rename xSmall
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

const Icon = props => {
  return (
    <IconContainer {...rmNonHtmlProps(props)}>
      {icons[props.id](React)}
    </IconContainer>
  )
}

import PropTypes from 'prop-types'
Icon.propTypes = {
  id: PropTypes.oneOf(ids).isRequired,
  size: PropTypes.oneOf(Object.keys(sizes))
}
Icon.defaultProps = {
  size: 'small'
}
Icon.ids = ids
Icon.sizes = sizes

export default Icon
