import {
  ValueOf,
  RefForwardingComponent
} from '@pluralsight/ps-design-system-util'
import React from 'react'
import * as vars from './dist/esm/vars/index'
export interface TextAreaStatics {
  appearances: typeof vars.appearances
}
export interface TextAreaProps
  extends Omit<
    React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    'rows'
  > {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  error?: boolean
  label?: React.ReactNode
  placeholder?: string
  rows?: React.ReactText
  subLabel?: React.ReactNode
  value?: React.ReactText
  name?: string
}
export interface TextAreaComponent
  extends RefForwardingComponent<
    TextAreaProps,
    HTMLTextAreaElement,
    TextAreaStatics
  > {}
declare const TextArea: TextAreaComponent
export declare const appearances: Readonly<
  import('@pluralsight/ps-design-system-util/dist/esm/key-mirror').KeyMirror<
    ['default', 'subtle']
  >
>
export default TextArea
