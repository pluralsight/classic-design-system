import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'

import icons from './icons'

const ids = Object.keys(icons).reduce((acc, id) => {
  acc[id] = `${id}`
  return acc
}, {})

const sizes = {
  xSmall: 'xSmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xLarge: 'xLarge'
}
const colors = Object.keys(core.colors)
  .filter(c => !/gradient/.test(c))
  .reduce((acc, c) => {
    acc[c] = c
    return acc
  }, {})

const styleSize = ({ size }) =>
  ({
    [sizes.xSmall]: {
      height: '16px',
      width: '16px'
    },
    [sizes.small]: {
      height: '24px',
      width: '24px'
    },
    [sizes.medium]: {
      height: '48px',
      width: '48px'
    },
    [sizes.large]: {
      height: '96px',
      width: '96px'
    },
    [sizes.xLarge]: {
      height: '160px',
      width: '160px'
    }
  }[size])

const IconContainer = glamorous.div(
  {
    display: 'inline-block'
  },
  styleSize,
  ({ color }) =>
    color
      ? {
          '> svg': {
            fill: core.colors[color]
          }
        }
      : {
          '> svg': {
            fill: 'currentColor'
          }
        }
)

const rmNonHtmlProps = props => {
  const { id, ...rest } = props
  return rest
}

const Icon = props => {
  return (
    <IconContainer {...rmNonHtmlProps(props)}>
      {props.children || icons[props.id](React)}
    </IconContainer>
  )
}

Icon.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors)),
  id: PropTypes.oneOf(Object.keys(ids)),
  size: PropTypes.oneOf(Object.keys(sizes))
}
Icon.defaultProps = {
  size: sizes.small
}
Icon.colors = colors
Icon.ids = ids
Icon.sizes = sizes

export default Icon
