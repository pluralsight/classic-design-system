import { compose, css } from 'glamor'
import React from 'react'

import { useTheme, names } from '@pluralsight/ps-design-system-theme'
import { ValueOf, HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'
import * as vars from '../vars'

const style = ({
  themeName,
  size,
  color
}: {
  themeName: ValueOf<typeof names>
  size: ValueOf<typeof vars.pSizes>
  color: ValueOf<typeof vars.textColors>
}) =>
  compose(
    css(stylesheet[`.psds-text__p`]),
    css(stylesheet[`.psds-text__p--size-${size}`]),
    css(stylesheet[`.psds-text__p--color-${color}.psds-theme--${themeName}`])
  )

interface PStatics {
  sizes: typeof vars.pSizes
  colors: typeof vars.textColors
}

interface PProps extends HTMLPropsFor<'p'> {
  size?: ValueOf<typeof vars.pSizes>
  color?: ValueOf<typeof vars.textColors>
}

const P: React.FC<PProps> & PStatics = ({
  size = vars.pSizes.medium,
  color = vars.textColors.primary,
  ...props
}) => {
  const themeName = useTheme()

  return (
    <p {...props} {...style({ themeName, size, color })}>
      {props.children}
    </p>
  )
}

P.sizes = vars.pSizes
P.colors = vars.textColors

export const sizes = vars.pSizes
export const colors = vars.textColors

export default P
