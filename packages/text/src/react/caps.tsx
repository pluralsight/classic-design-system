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
  size?: ValueOf<typeof vars.capsSizes>
  color: ValueOf<typeof vars.textColors>
}) =>
  compose(
    css(stylesheet['.psds-text__caps']),
    css(stylesheet[`.psds-text__caps.psds-theme--${themeName}`]),
    css(stylesheet[`.psds-text__caps--size-${size}`]),
    css(stylesheet[`.psds-text__caps--size-${size}.psds-theme--${themeName}`]),
    css(stylesheet[`.psds-text__caps--color-${color}`]),
    css(stylesheet[`.psds-text__caps--color-${color}.psds-theme--${themeName}`])
  )

interface CapsStatics {
  sizes: typeof vars.capsSizes
  colors: typeof vars.textColors
}

interface CapsProps extends HTMLAttributes<HTMLSpanElement> {
  size?: ValueOf<typeof vars.capsSizes>
  color?: ValueOf<typeof vars.textColors>
}

const Caps: React.FC<CapsProps> & CapsStatics = ({
  size = vars.capsSizes.medium,
  color = vars.textColors.primary,
  ...rest
}) => {
  const themeName = useTheme()

  return <span {...rest} {...style({ themeName, size, color })} />
}

Caps.sizes = vars.capsSizes
Caps.colors = vars.textColors

export const sizes = vars.capsSizes
export const colors = vars.textColors

export default Caps
