import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css'
import { sizes, widths } from '../vars'
import { getColorByName, getInitials, transformSrc } from '../js'

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

  handleImageLoadSuccess(event) {
    const isFallbackPixel = event.target.naturalWidth === 1
    this.setState({ imageState: isFallbackPixel ? 'error' : 'success' })
  }

  handleImageLoadError() {
    this.setState({ imageState: 'error' })
  }

  render() {
    const { alt, className, name, size, src, style } = this.props
    const { imageState } = this.state

    const shouldShowImg = src && imageState !== 'error'
    const shouldShowInitials =
      name && (imageState === 'error' || imageState === 'loading')

    const hideFromScreenReaders = shouldShowImg && !alt

    const avatarProps = {
      ...styles.avatar({ size }),
      ...(className ? { className } : null),
      ...(style ? { style } : null),
      ...(hideFromScreenReaders ? { 'aria-hidden': true } : null)
    }

    return (
      <div {...avatarProps}>
        {shouldShowImg && (
          <img
            alt={alt}
            onError={this.handleImageLoadError}
            onLoad={this.handleImageLoadSuccess}
            {...styles.image()}
            src={transformSrc(src)}
          />
        )}
        {shouldShowInitials && (
          <div
            {...styles.initials({ name })}
            aria-label={name}
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
  alt: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  src: PropTypes.string
}

Avatar.sizes = sizes
Avatar.widths = widths

export default Avatar
