import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'

import icons from './icons'

export const ids = Object.keys(icons).reduce((acc, id) => {
  acc[id] = `${id}`
  return acc
}, {})

export const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export const colors = Object.keys(core.colors)
  .filter(c => !/gradient/.test(c))
  .reduce((acc, c) => {
    acc[c] = c
    return acc
  }, {})

const styleSize = ({ size }) =>
  ({
    [sizes.small]: {
      height: '16px',
      width: '16px'
    },
    [sizes.medium]: {
      height: '24px',
      width: '24px'
    },
    [sizes.large]: {
      height: '48px',
      width: '48px'
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
  size: sizes.medium
}
Icon.colors = colors
Icon.ids = ids
Icon.sizes = sizes

export default Icon
