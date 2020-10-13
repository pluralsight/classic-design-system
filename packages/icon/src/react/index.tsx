import { css } from 'glamor'
import React, { HTMLAttributes } from 'react'

import {
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'
import * as vars from '../vars'

const style = {
  icon: ({ color, size }) =>
    css(
      stylesheet['.psds-icon'],
      stylesheet[`.psds-icon--size-${size}`],
      stylesheet[`.psds-icon--color-${color}`]
    )
}

interface IconStatics {
  sizes: typeof vars.sizes
  colors: typeof vars.colors
}

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  size?: ValueOf<typeof vars.sizes>
  color?: ValueOf<typeof vars.colors>
}

interface IconComponent
  extends RefForwardingComponent<IconProps, HTMLDivElement, IconStatics> {}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ children, color, size, ...props }, ref) => (
    <div {...style.icon({ color, size })} {...props} ref={ref}>
      {children}
    </div>
  )
) as IconComponent

Icon.displayName = 'Icon'

Icon.defaultProps = {
  size: vars.sizes.medium
}

Icon.colors = vars.colors
Icon.sizes = vars.sizes

export const sizes = vars.sizes
export const colors = vars.colors

export default Icon
