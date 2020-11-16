import { compose, css } from 'glamor'
import React, { HTMLAttributes } from 'react'
import { useTheme, names } from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'
import * as vars from '../vars'

const style = ({
  themeName,
  size,
  color,
  strong,
  caps
}: {
  themeName: ValueOf<typeof names>
  size: ValueOf<typeof vars.labelSizes>
  color: ValueOf<typeof vars.textColors>
  strong: boolean
  caps: boolean
}) =>
  compose(
    css(stylesheet['.psds-text__label']),
    css(stylesheet[`.psds-text__label--size-${size}`]),
    css(
      stylesheet[`.psds-text__label--color-${color}.psds-theme--${themeName}`]
    ),
    strong && css(stylesheet[`.psds-text__label--strong`]),
    caps && css(stylesheet[`.psds-text__label--caps`])
  )

interface LabelStatics {
  sizes: typeof vars.labelSizes
  colors: typeof vars.textColors
}

interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  size?: ValueOf<typeof vars.labelSizes>
  color?: ValueOf<typeof vars.textColors>
  strong?: boolean
  caps?: boolean
}

const Label: React.FC<LabelProps> & LabelStatics = ({
  size = vars.labelSizes.normal,
  color = vars.textColors.primary,
  strong = false,
  caps = false,
  ...rest
}) => {
  const themeName = useTheme()

  return <span {...rest} {...style({ themeName, size, color, strong, caps })} />
}

Label.sizes = vars.labelSizes
Label.colors = vars.textColors

export const sizes = vars.labelSizes
export const colors = vars.textColors

export default Label
