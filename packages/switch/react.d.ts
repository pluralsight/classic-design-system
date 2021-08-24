import {
  ValueOf,
  RefForwardingComponent
} from '@pluralsight/ps-design-system-util'
import React from 'react'
import * as vars from './dist/esm/vars/index'
interface SwitchStatics {
  colors: typeof vars.colors
  sizes: typeof vars.sizes
  labelAligns: typeof vars.labelAligns
}
interface SwitchProps
  extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onClick'> {
  checked?: boolean
  color?: ValueOf<typeof vars.colors>
  disabled?: boolean
  error?: boolean
  labelAlign?: ValueOf<typeof vars.labelAligns>
  name?: string
  onBlur?: React.FocusEventHandler
  onClick?: (checked: boolean) => void
  onFocus?: React.FocusEventHandler
  size?: ValueOf<typeof vars.sizes>
  tabIndex?: number
}
interface SwitchComponent
  extends RefForwardingComponent<
    SwitchProps,
    HTMLInputElement | HTMLLabelElement,
    SwitchStatics
  > {}
declare const Switch: SwitchComponent
export declare const colors: Readonly<
  import('@pluralsight/ps-design-system-util/dist/esm/key-mirror').KeyMirror<
    ['blue', 'green', 'orange']
  >
>
export declare const sizes: Readonly<
  import('@pluralsight/ps-design-system-util/dist/esm/key-mirror').KeyMirror<
    ['small', 'large']
  >
>
export declare const labelAligns: Readonly<
  import('@pluralsight/ps-design-system-util/dist/esm/key-mirror').KeyMirror<
    ['left', 'right']
  >
>
export default Switch
