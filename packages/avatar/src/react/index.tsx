import {
  HTMLPropsFor,
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { StyleAttribute, compose, css } from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import { sizes, widths } from '../vars/index'
import { getColorByName, getInitials, transformSrc } from '../js/index'

interface AvatarProps extends HTMLPropsFor<'div'> {
  alt?: string
  name?: string
  size?: ValueOf<typeof sizes>
  src?: string
}

interface AvatarStatics {
  sizes: typeof sizes
  widths: typeof widths
}

type AvatarComponent = RefForwardingComponent<
  AvatarProps,
  HTMLDivElement,
  AvatarStatics
>

type ImageState = 'loading' | 'error' | 'success'

type StyleFn = (props: AvatarProps) => StyleAttribute

const styles: { [key: string]: StyleFn } = {
  avatar: props =>
    compose(
      css(stylesheet['.psds-avatar']),
      css(stylesheet[`.psds-avatar--size-${props.size}`])
    ),
  image: () => css(stylesheet['.psds-avatar__image']),
  initials: () => css(stylesheet['.psds-avatar__initials'])
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { alt, name, size: _size, src, ...rest } = props

  const [imageState, setImageState] = React.useState<ImageState>('loading')

  const handleImageLoadSuccess: React.ReactEventHandler<HTMLImageElement> = evt => {
    const pixel = evt.target as HTMLImageElement
    const isFallbackPixel = pixel.naturalWidth === 1
    setImageState(isFallbackPixel ? 'error' : 'success')
  }

  const handleImageLoadError: React.ReactEventHandler<HTMLImageElement> = () => {
    setImageState('error')
  }

  const shouldShowImg = src && imageState !== 'error'
  const shouldShowInitials = imageState === 'error' || imageState === 'loading'

  const hideFromScreenReaders = shouldShowImg && !alt

  return (
    <div
      {...styles.avatar(props)}
      {...(hideFromScreenReaders && { 'aria-hidden': true })}
      {...rest}
      ref={ref}
    >
      {shouldShowImg && (
        <img
          {...styles.image(props)}
          alt={alt}
          onError={handleImageLoadError}
          onLoad={handleImageLoadSuccess}
          src={transformSrc(src)}
        />
      )}

      {shouldShowInitials && (
        <div
          {...styles.initials(props)}
          aria-label={name}
          style={{ backgroundColor: getColorByName(name) }}
        >
          {getInitials(name)}
        </div>
      )}
    </div>
  )
}) as AvatarComponent

Avatar.defaultProps = { size: sizes.medium }
Avatar.displayName = 'Avatar'

Avatar.sizes = sizes
Avatar.widths = widths

export default Avatar
