import { compose, css } from 'glamor'
import React, { HTMLAttributes } from 'react'
import { useTheme, names } from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'
import * as vars from '../vars'

const style = ({
  themeName,
  size
}: {
  themeName?: ValueOf<typeof names>
  size?: ValueOf<typeof vars.smallCapsSizes>
}) =>
  compose(
    css(stylesheet['.psds-text__smallcaps']),
    css(stylesheet[`.psds-text__smallcaps.psds-theme--${themeName}`]),
    css(stylesheet[`.psds-text__smallcaps--size-${size}`]),
    css(
      stylesheet[`.psds-text__smallcaps--size-${size}.psds-theme--${themeName}`]
    )
  )

interface SmallCapsStatics {
  sizes: typeof vars.smallCapsSizes
}

interface SmallCapsProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ValueOf<typeof vars.smallCapsSizes>
}

const SmallCaps: React.FC<SmallCapsProps> & SmallCapsStatics = ({
  children,
  size,
  ...props
}) => {
  const themeName = useTheme()
  if (!React.isValidElement(children)) return null

  return React.cloneElement(React.Children.only(children), {
    ...props,
    ...style({
      size,
      themeName
    }),
    className: props.className
  })
}

SmallCaps.defaultProps = {
  size: vars.smallCapsSizes.large
}

SmallCaps.sizes = vars.smallCapsSizes

export const sizes = vars.smallCapsSizes

export default SmallCaps
