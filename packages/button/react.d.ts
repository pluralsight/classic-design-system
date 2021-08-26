import { ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'
import * as vars from './dist/esm/vars/index'
export interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'value'
  > {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  value?: React.ReactText
  layout?: ValueOf<typeof vars.layouts>
  icon?: React.ReactNode
  iconAlign?: ValueOf<typeof vars.iconAligns>
  loading?: boolean
  size?: ValueOf<typeof vars.sizes>
  href?: string
  target?: string
  rel?: string
}
interface ButtonStatics {
  appearances: typeof vars.appearances
  layouts: typeof vars.layouts
  iconAligns: typeof vars.iconAligns
  sizes: typeof vars.sizes
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps> &
  ButtonStatics
export declare const appearances: Readonly<
  import('@pluralsight/ps-design-system-util/dist/esm/key-mirror').KeyMirror<
    ['primary', 'secondary', 'stroke', 'flat']
  >
>
export declare const iconAligns: Readonly<
  import('@pluralsight/ps-design-system-util/dist/esm/key-mirror').KeyMirror<
    ['left', 'right']
  >
>
export declare const sizes: Readonly<
  import('@pluralsight/ps-design-system-util/dist/esm/key-mirror').KeyMirror<
    ['xSmall', 'small', 'medium', 'large']
  >
>
export default Button
