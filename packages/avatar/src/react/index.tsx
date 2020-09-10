import { StyleAttribute, compose, css } from 'glamor'
import React, {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  useState
} from 'react'

import stylesheet from '../css'
import { sizes, widths } from '../vars'
import { getColorByName, getInitials, transformSrc } from '../js'

// TODO: move to core pkg
export type RefForwardingComponentWithStatics<
  P = Record<string, unknown>,
  E = Element,
  S = Record<string, unknown>
> = ForwardRefExoticComponent<P & RefAttributes<E>> & S

// TODO: move to core pkg
type ValueOf<T> = T[keyof T]

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  alt?: string
  name?: string
  size?: ValueOf<typeof sizes>
  src?: string
}

interface AvatarStatics {
  sizes: typeof sizes
  widths: typeof widths
}

interface AvatarComponent
  extends RefForwardingComponentWithStatics<
    AvatarProps,
    HTMLDivElement,
    AvatarStatics
  > {}

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

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { alt, name, size: _size, src, ...rest } = props
  const initials = getInitials(name)

  const [imageState, setImageState] = useState<ImageState>('loading')

  function handleImageLoadSuccess(evt) {
    const isFallbackPixel = evt.target.naturalWidth === 1
    setImageState(isFallbackPixel ? 'error' : 'success')
  }

  function handleImageLoadError() {
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
          {initials}
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
