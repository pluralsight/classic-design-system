import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
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
    display: 'inline-block',
    // TODO: make more general
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
      {props.children || icons[props.id](React)}
    </IconContainer>
  )
}

import PropTypes from 'prop-types'
Icon.propTypes = {
  id: PropTypes.oneOf(Object.keys(ids)),
  size: PropTypes.oneOf(Object.keys(sizes))
}
Icon.defaultProps = {
  size: sizes.small
}
Icon.ids = ids
Icon.sizes = sizes

export default Icon
