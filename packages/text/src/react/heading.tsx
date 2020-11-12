import { compose, css } from 'glamor'
import React, { HTMLAttributes } from 'react'
import { useTheme, names } from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'
import * as vars from '../vars'

const style = ({
  themeName,
  size,
  color
}: {
  themeName?: ValueOf<typeof names>
  size?: ValueOf<typeof vars.headingSizes>
  color: ValueOf<typeof vars.textColors>
}) =>
  compose(
    css(stylesheet['.psds-text__heading']),
    css(stylesheet[`.psds-text__heading--size-${size}`]),
    css(
      stylesheet[`.psds-text__heading--color-${color}.psds-theme--${themeName}`]
    )
  )

interface HeadingStatics {
  sizes: typeof vars.headingSizes
  colors: typeof vars.textColors
}

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: ValueOf<typeof vars.headingSizes>
  color?: ValueOf<typeof vars.textColors>
}

const Heading: React.FC<HeadingProps> & HeadingStatics = ({
  children,
  size = vars.labelSizes.large,
  color = vars.textColors.primary,
  ...props
}) => {
  const themeName = useTheme()
  if (!React.isValidElement(children)) return null

  return React.cloneElement(React.Children.only(children), {
    ...props,
    ...style({
      size,
      color,
      themeName
    }),
    className: props.className
  })
}

Heading.sizes = vars.headingSizes
Heading.colors = vars.textColors

export const sizes = vars.headingSizes
export const colors = vars.textColors

export default Heading
