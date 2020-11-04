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
  themeName: ValueOf<typeof names> 
  size?: ValueOf<typeof vars.labelSizes>
}) =>
  compose(
    css(stylesheet[`.psds-text__label`]),
    css(stylesheet[`.psds-text__label.psds-theme--${themeName}`]),
    css(stylesheet[`.psds-text__label--size-${size}`]),
    css(
      stylesheet[`.psds-text__label--size-${size}.psds-theme--${themeName}`]
    )
  )

interface LabelStatics {
  sizes: typeof vars.labelSizes
}

interface LabelProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ValueOf<typeof vars.labelSizes>
}

const Label: React.FC<LabelProps> & LabelStatics = ({
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

Label.defaultProps = {
  size: vars.labelSizes.normal
}

Label.sizes = vars.labelSizes

export const sizes = vars.labelSizes

export default Label
