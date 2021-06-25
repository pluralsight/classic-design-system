import { useTheme, names } from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

const style = ({
  themeName,
  size,
  color
}: {
  themeName: ValueOf<typeof names>
  size: ValueOf<typeof vars.pSizes>
  color: ValueOf<typeof vars.textColors>
}) =>
  glamor.compose(
    glamor.css(stylesheet[`.psds-text__p`]),
    glamor.css(stylesheet[`.psds-text__p--size-${size}`]),
    glamor.css(
      stylesheet[`.psds-text__p--color-${color}.psds-theme--${themeName}`]
    )
  )

interface PStatics {
  sizes: typeof vars.pSizes
  colors: typeof vars.textColors
}

interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
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
