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
  color,
  mono,
  strong,
  caps
}: {
  themeName: ValueOf<typeof names>
  size: ValueOf<typeof vars.labelSizes>
  color: ValueOf<typeof vars.textColors>
  mono: boolean
  strong: boolean
  caps: boolean
}) =>
  glamor.compose(
    glamor.css(stylesheet['.psds-text__label']),
    glamor.css(stylesheet[`.psds-text__label--size-${size}`]),
    glamor.css(
      stylesheet[`.psds-text__label--color-${color}.psds-theme--${themeName}`]
    ),
    strong && glamor.css(stylesheet[`.psds-text__label--strong`]),
    caps && glamor.css(stylesheet[`.psds-text__label--caps`]),
    mono && glamor.css(stylesheet[`.psds-text__label--mono`])
  )

interface LabelStatics {
  sizes: typeof vars.labelSizes
  colors: typeof vars.textColors
}

interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: ValueOf<typeof vars.labelSizes>
  color?: ValueOf<typeof vars.textColors>
  mono?: boolean
  strong?: boolean
  caps?: boolean
}

const Label: React.FC<LabelProps> & LabelStatics = ({
  size = vars.labelSizes.medium,
  color = vars.textColors.primary,
  mono = false,
  strong = false,
  caps = false,
  ...rest
}) => {
  const themeName = useTheme()

  return (
    <span
      {...rest}
      {...style({ themeName, mono, size, color, strong, caps })}
    />
  )
}

Label.sizes = vars.labelSizes
Label.colors = vars.textColors

export const sizes = vars.labelSizes
export const colors = vars.textColors

export default Label
