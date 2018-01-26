import React from 'react'
import { sizes } from '../vars'
import PropTypes from 'prop-types'
import styles from './styles'
import { getInitials, transformSrc } from './utils'

const Avatar = ({ name, src, size, className }) => (
  <div {...styles.body({ size })} className={className}>
    {src && <img {...styles.img} src={transformSrc(src)} />}
    {name && <div {...styles.initials({ name })}>{getInitials(name)}</div>}
  </div>
)

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
