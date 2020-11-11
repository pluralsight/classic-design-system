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
  size?: ValueOf<typeof vars.capsSizes>
}) =>
  compose(
    css(stylesheet['.psds-text__caps']),
    css(stylesheet[`.psds-text__caps.psds-theme--${themeName}`]),
    css(stylesheet[`.psds-text__caps--size-${size}`]),
    css(stylesheet[`.psds-text__caps--size-${size}.psds-theme--${themeName}`])
  )

interface CapsStatics {
  sizes: typeof vars.capsSizes
}

interface CapsProps extends HTMLAttributes<HTMLSpanElement> {
  size?: ValueOf<typeof vars.capsSizes>
}

const Caps: React.FC<CapsProps> & CapsStatics = ({
  size = vars.capsSizes.medium,
  ...rest
}) => {
  const themeName = useTheme()

  return <span {...rest} {...style({ themeName, size })} />
}

Caps.sizes = vars.capsSizes

export const sizes = vars.capsSizes

export default Caps
