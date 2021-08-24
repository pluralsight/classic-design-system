import { ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'
import * as vars from './dist/esm/vars/index'
export interface TagProps
  extends React.HTMLAttributes<HTMLAnchorElement | HTMLDivElement> {
  error?: boolean
  icon?: React.ReactElement
  isPressed?: boolean
  size?: ValueOf<typeof vars.sizes>
  href?: string
  target?: string
  rel?: string
}
export interface TagStatics {
  sizes: typeof vars.sizes
}
declare const Tag: React.ForwardRefExoticComponent<TagProps> & TagStatics
export declare const sizes: Readonly<
  import('@pluralsight/ps-design-system-util/dist/esm/key-mirror').KeyMirror<
    ['small', 'medium']
  >
>
export default Tag
