import { RefForwardingComponent } from '@pluralsight/ps-design-system-util'
import React from 'react'
interface ViewToggleProps
  extends Omit<React.ComponentProps<typeof List>, 'onSelect'> {
  onSelect?: (evt: React.MouseEvent<HTMLButtonElement>, index: number) => void
}
interface ViewToggleStatics {
  Option: typeof Option
}
interface ViewToggleComponent
  extends RefForwardingComponent<
    ViewToggleProps,
    HTMLDivElement,
    ViewToggleStatics
  > {}
declare const ViewToggle: ViewToggleComponent
declare const List: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>
interface OptionButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  active: boolean
}
interface OptionProps
  extends Omit<OptionButtonProps, '_i' | '_onselect' | 'active'> {
  _i?: number
  _onSelect?: (evt: React.MouseEvent<HTMLButtonElement>, index?: number) => void
  active?: boolean
}
declare const Option: React.ForwardRefExoticComponent<
  OptionProps & React.RefAttributes<HTMLButtonElement>
>
export default ViewToggle
