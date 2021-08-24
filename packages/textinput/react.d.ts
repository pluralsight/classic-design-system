import { ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'
import * as vars from './dist/esm/vars/index'
export interface TextInputStatics {
  appearances: typeof vars.appearances
  iconAligns: typeof vars.iconAligns
  sizes: typeof vars.sizes
}
export interface TextInputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'size'
  > {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  error?: boolean
  fieldAfter?: React.ReactNode
  icon?: React.ReactNode
  iconAlign?: ValueOf<typeof vars.iconAligns>
  label?: React.ReactNode
  placeholder?: string
  type?: string
  name?: string
  size?: ValueOf<typeof vars.sizes>
  subLabel?: React.ReactNode
  value?: React.ReactText
}
declare const TextInput: React.ForwardRefExoticComponent<TextInputProps> &
  TextInputStatics
export default TextInput
