import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css'
import { sizes } from '../vars'
import { getColorByName, getInitials, transformSrc } from './utils'

const styles = {
  avatar: ({ size }) =>
    glamor.css({
      ...css['.psds-avatar'],
      ...css[`.psds-avatar--size-${size}`]
    }),
  image: _ => glamor.css(css['.psds-avatar__image']),
  initials: ({ name }) => glamor.css(css['.psds-avatar__initials'])
}

const Avatar = ({ className, name, size, src, style }) => {
  const avatarProps = {
    ...styles.avatar({ size }),
    ...(className ? { className } : null),
    ...(style ? { style } : null)
  }
  return (
    <div {...avatarProps}>
      {src && <img {...styles.image()} src={transformSrc(src)} />}
      {name && (
        <div
          {...styles.initials({ name })}
          style={{ backgroundColor: getColorByName(name) }}
        >
          {getInitials(name)}
        </div>
      )}
    </div>
  )
}

Avatar.defaultProps = {
  size: sizes.medium
}

Avatar.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  src: PropTypes.string
}

Avatar.sizes = sizes

export default Avatar
