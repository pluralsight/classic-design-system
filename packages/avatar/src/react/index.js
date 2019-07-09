import { css } from 'glamor'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'
import { sizes, widths } from '../vars/index.js'
import { getColorByName, getInitials, transformSrc } from '../js/index.js'

const styles = {
  avatar: ({ size }) =>
    css({
      ...stylesheet['.psds-avatar'],
      ...stylesheet[`.psds-avatar--size-${size}`]
    }),
  image: _ => css(stylesheet['.psds-avatar__image']),
  initials: ({ name }) => css(stylesheet['.psds-avatar__initials'])
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
    const { alt, name, size, src } = this.props
    const { imageState } = this.state

    const shouldShowImg = src && imageState !== 'error'
    const shouldShowInitials =
      name && (imageState === 'error' || imageState === 'loading')

    const hideFromScreenReaders = shouldShowImg && !alt

    const avatarProps = {
      ...filterReactProps(this.props),
      ...styles.avatar({ size }),
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
  name: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes).map(key => sizes[key])),
  src: PropTypes.string
}

Avatar.sizes = sizes
Avatar.widths = widths

export default Avatar
