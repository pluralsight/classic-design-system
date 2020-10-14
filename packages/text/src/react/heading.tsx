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
  size?: ValueOf<typeof vars.headingSizes>
}) =>
  compose(
    css(stylesheet['.psds-text__heading']),
    css(stylesheet[`.psds-text__heading.psds-theme--${themeName}`]),
    css(stylesheet[`.psds-text__heading--size-${size}`]),
    css(
      stylesheet[`.psds-text__heading--size-${size}.psds-theme--${themeName}`]
    )
  )

interface HeadingStatics {
  sizes: typeof vars.headingSizes
}

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: ValueOf<typeof vars.headingSizes>
}

const Heading: React.FC<HeadingProps> & HeadingStatics = ({
  children,
  size,
  ...props
}) => {
  const themeName = useTheme()
  if (!React.isValidElement(children)) return

  return React.cloneElement(React.Children.only(children), {
    ...props,
    ...style({
      size,
      themeName
    }),
    className: props.className
  })
}

Heading.defaultProps = {
  size: vars.headingSizes.large
}

Heading.sizes = vars.headingSizes

export const sizes = vars.headingSizes

export default Heading
