import {
  HTMLPropsFor,
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { StyleAttribute, css } from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import { colors, sizes } from '../vars/index'

type StyleFn = (props: IconProps) => StyleAttribute

const style: { [name: string]: StyleFn } = {
  icon: props =>
    css(
      stylesheet['.psds-icon'],
      stylesheet[`.psds-icon--size-${props.size}`],
      stylesheet[`.psds-icon--color-${props.color}`]
    )
}

export interface IconProps extends HTMLPropsFor<'div'> {
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
