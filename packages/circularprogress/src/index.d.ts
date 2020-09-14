import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react'

declare const CircularProgress: RefForwardingComponent<
  CircularProgressProps,
  HTMLDivElement,
  CircularProgressStatics
>

export default CircularProgress

export interface CircularProgressProps {
  size?: keyof typeof sizes
  value?: number
}

export interface CircularProgressStatics {
  sizes: typeof sizes
}

export const sizes: {
  small: 'small'
  medium: 'medium'
}

// TODO: relocate to a global typings file
export type RefForwardingComponent<
  Props = {},
  El = Element,
  Statics = {}
> = ForwardRefExoticComponent<Props & HTMLAttributes<El> & RefAttributes<El>> &
  Statics
