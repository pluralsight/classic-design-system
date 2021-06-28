import {
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css'
import { colors, sizes } from '../vars'

const glamor = glamorDefault || glamorExports

type StyleFn = (props: IconProps) => glamorExports.StyleAttribute

const style: { [name: string]: StyleFn } = {
  icon: props =>
    glamor.css(
      stylesheet['.psds-icon'],
      stylesheet[`.psds-icon--size-${props.size}`],
      stylesheet[`.psds-icon--color-${props.color}`]
    )
}

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: ValueOf<typeof colors>
  size?: ValueOf<typeof sizes>
}

export interface IconStatics {
  colors: typeof colors
  sizes: typeof sizes
}

export interface IconComponent
  extends RefForwardingComponent<IconProps, HTMLDivElement, IconStatics> {}

const Icon = React.forwardRef((props, ref) => {
  const { size = sizes.medium, color, ...rest } = props

  return <div {...style.icon({ color, size })} {...rest} ref={ref} />
}) as IconComponent

Icon.displayName = 'Icon'

Icon.colors = colors
Icon.sizes = sizes

export { colors, sizes }
export default Icon
