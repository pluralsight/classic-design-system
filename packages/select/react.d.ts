import { ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'
import { Button } from './dist/esm/react/button'
import { Selected } from './dist/esm/react/selected'
import { UseListboxProps } from './dist/esm/react/useListbox'
import * as vars from './dist/esm/vars/index'
interface SelectProps extends UseListboxProps {
  options?: Array<{
    value: React.ReactText
    label: React.ReactText
  }>
  position?: ValueOf<typeof vars.positions>
  renderOption?: React.FC
}
declare const Select: React.ForwardRefExoticComponent<SelectProps> &
  SelectStatics
interface SelectStatics {
  Button: typeof Button
  Selected: typeof Selected
  positions: typeof vars.positions
  sizes: typeof vars.sizes
}
export { useListbox } from './dist/esm/react/useListbox'
export type { UseListboxProps } from './dist/esm/react/useListbox'
export { useMenuRef } from './dist/esm/react/menuKeyEvents'
export default Select
