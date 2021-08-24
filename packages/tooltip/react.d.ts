import React from 'react'
import {
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import * as vars from './dist/esm/vars/index'
interface TooltipStatics {
  appearances: typeof vars.appearances
  tailPositions: typeof vars.tailPositions
}
interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: ValueOf<typeof vars.appearances>
  children: React.ReactNode
  onClose?: (evt?: React.MouseEvent) => void
  tailPosition?: ValueOf<typeof vars.tailPositions>
}
interface TooltipComponent
  extends RefForwardingComponent<
    TooltipProps,
    HTMLDivElement,
    TooltipStatics
  > {}
declare const Tooltip: TooltipComponent
export declare const appearances: Readonly<
  import('@pluralsight/ps-design-system-util/dist/esm/key-mirror').KeyMirror<
    ['basic', 'accent']
  >
>
export declare const tailPositions: {
  readonly bottomCenter: 'bottom-center'
  readonly bottomLeft: 'bottom-left'
  readonly bottomRight: 'bottom-right'
  readonly leftCenter: 'left-center'
  readonly rightCenter: 'right-center'
  readonly topCenter: 'top-center'
  readonly topLeft: 'top-left'
  readonly topRight: 'top-right'
}
export default Tooltip
