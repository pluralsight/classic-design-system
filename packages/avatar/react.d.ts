import {
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import React from 'react'
import { sizes, widths } from './dist/esm/vars/index'
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  alt?: string
  name?: string
  size?: ValueOf<typeof sizes>
  src?: string
}
interface AvatarStatics {
  sizes: typeof sizes
  widths: typeof widths
}
declare type AvatarComponent = RefForwardingComponent<
  AvatarProps,
  HTMLDivElement,
  AvatarStatics
>
declare const Avatar: AvatarComponent
export default Avatar
