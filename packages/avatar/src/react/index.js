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

class Avatar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { imageState: 'loading' }
    this.handleImageLoadSuccess = this.handleImageLoadSuccess.bind(this)
    this.handleImageLoadError = this.handleImageLoadError.bind(this)
  }
  handleImageLoadSuccess() {
    this.setState({ imageState: 'success' })
  }
  handleImageLoadError() {
    this.setState({ imageState: 'error' })
  }
  render() {
    const { className, name, size, src, style } = this.props
    const { imageState } = this.state
    const avatarProps = {
      ...styles.avatar({ size }),
      ...(className ? { className } : null),
      ...(style ? { style } : null)
    }
    const shouldShowImg = src && imageState !== 'error'
    const shouldShowInitials =
      name && (imageState === 'error' || imageState === 'loading')

    return (
      <div {...avatarProps}>
        {shouldShowImg && (
          <img
            onError={this.handleImageLoadError}
            onLoad={this.handleImageLoadSuccess}
            {...styles.image()}
            src={transformSrc(src)}
          />
        )}
        {shouldShowInitials && (
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
