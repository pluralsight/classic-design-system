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
  size?: ValueOf<typeof vars.displaySizes>
}) =>
  compose(
    css(stylesheet['.psds-text__display']),
    css(stylesheet[`.psds-text__display.psds-theme--${themeName}`]),
    css(stylesheet[`.psds-text__display--size-${size}`]),
    css(
      stylesheet[`.psds-text__display--size-${size}.psds-theme--${themeName}`]
    )
  )

interface DisplayStatics {
  sizes: typeof vars.displaySizes
}

interface DisplayProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: ValueOf<typeof vars.displaySizes>
}

const Display: React.FC<DisplayProps> & DisplayStatics = ({
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

Display.defaultProps = {
  size: vars.displaySizes.large
}

Display.sizes = vars.displaySizes

export const sizes = vars.displaySizes

export default Display
