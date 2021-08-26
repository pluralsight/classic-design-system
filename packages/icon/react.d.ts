import {
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import React from 'react'
import { colors, sizes } from './dist/esm/vars'
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
declare const Icon: IconComponent
export { colors, sizes }
export default Icon
export * from './dist/esm/react/icons'
export * as icons from './dist/esm/react/icons'
