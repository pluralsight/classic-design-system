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

const Avatar = React.forwardRef((props, ref) => {
  const [imageState, setImageState] = React.useState('loading')

  function handleImageLoadSuccess(evt) {
    const isFallbackPixel = evt.target.naturalWidth === 1
    setImageState(isFallbackPixel ? 'error' : 'success')
  }

  function handleImageLoadError() {
    setImageState('error')
  }

  const { alt, name, size, src } = props

  const shouldShowImg = src && imageState !== 'error'
  const shouldShowInitials =
    name && (imageState === 'error' || imageState === 'loading')

  const hideFromScreenReaders = shouldShowImg && !alt

  const avatarProps = {
    ...filterReactProps(props),
    ...styles.avatar({ size }),
    ...(hideFromScreenReaders ? { 'aria-hidden': true } : null)
  }

  return (
    <div {...avatarProps} ref={ref}>
      {shouldShowImg && (
        <img
          alt={alt}
          onError={handleImageLoadError}
          onLoad={handleImageLoadSuccess}
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
})

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
