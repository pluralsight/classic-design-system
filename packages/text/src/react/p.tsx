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
  size?: ValueOf<typeof vars.pSizes>
}) =>
  compose(
    css(stylesheet[`.psds-text__p`]),
    css(stylesheet[`.psds-text__p.psds-theme--${themeName}`]),
    css(stylesheet[`.psds-text__p--size-${size}`]),
    css(
      stylesheet[`.psds-text__p--size-${size}.psds-theme--${themeName}`]
    )
  )

interface PStatics {
  sizes: typeof vars.pSizes
}

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ValueOf<typeof vars.pSizes>
}

const P: React.FC<PProps> & PStatics = ({
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

P.defaultProps = {
  size: vars.pSizes.normal
}

P.sizes = vars.pSizes

export const sizes = vars.pSizes

export default P
