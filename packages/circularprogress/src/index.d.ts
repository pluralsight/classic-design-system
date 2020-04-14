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

export const sizes = keyMirror('small', 'medium')

// TODO: relocate to a global typings file
export type RefForwardingComponent<
  Props = {},
  El = Element,
  Statics = {}
> = ForwardRefExoticComponent<Props & HTMLAttributes<El> & RefAttributes<El>> &
  Statics

// TODO: move to global utils
type KeyMirror<Keys extends string[]> = { readonly [K in Keys[number]]: K }

declare function keyMirror<Keys extends string[]>(...inputs: Keys) {
  const mirrored = inputs.reduce(
    (acc, key) => ({ ...acc, [key]: key }),
    {} as KeyMirror<Keys>
  )

  return Object.freeze(mirrored)
}
