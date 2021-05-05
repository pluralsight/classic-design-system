import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'
import { useTheme, themeNames } from '../../theme'
import { ValueOf, HTMLPropsFor } from '../../util'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

const style = ({
  themeName,
  size,
  color
}: {
  themeName?: ValueOf<typeof themeNames>
  size?: ValueOf<typeof vars.headingSizes>
  color: ValueOf<typeof vars.textColors>
}) =>
  glamor.compose(
    glamor.css(stylesheet['.psds-text__heading']),
    glamor.css(stylesheet[`.psds-text__heading--size-${size}`]),
    glamor.css(
      stylesheet[`.psds-text__heading--color-${color}.psds-theme--${themeName}`]
    )
  )

interface HeadingStatics {
  sizes: typeof vars.headingSizes
  colors: typeof vars.textColors
}

interface HeadingProps
  extends HTMLPropsFor<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> {
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
