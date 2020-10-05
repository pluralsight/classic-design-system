import { css } from 'glamor'
import React, { HTMLAttributes } from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { RefForwardingComponent } from '@pluralsight/ps-design-system-util'

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
  size?: string
  color?: string
}

interface IconComponent
  extends RefForwardingComponent<IconProps, HTMLDivElement, IconStatics> {}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ children, color, size, ...props }, ref) => (
    <div
      {...style.icon({ color, size })}
      {...filterReactProps(props)}
      ref={ref}
    >
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
