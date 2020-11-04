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
  size?: ValueOf<typeof vars.monospaceSizes>
}) =>
  compose(
    css(stylesheet[`.psds-text__monospace`]),
    css(stylesheet[`.psds-text__monospace.psds-theme--${themeName}`]),
    css(stylesheet[`.psds-text__monospace--size-${size}`]),
    css(
      stylesheet[`.psds-text__monospace--size-${size}.psds-theme--${themeName}`]
    )
  )

interface MonospaceStatics {
  sizes: typeof vars.monospaceSizes
}

interface MonospaceProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ValueOf<typeof vars.monospaceSizes>
}

const Monospace: React.FC<MonospaceProps> & MonospaceStatics = ({
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

Monospace.defaultProps = {
  size: vars.monospaceSizes.normal
}

Monospace.sizes = vars.monospaceSizes

export const sizes = vars.monospaceSizes

export default Monospace
