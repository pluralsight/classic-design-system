import * as PositionComponents from '@pluralsight/ps-design-system-position'
import {
  ValueOf,
  ForwardRefComponent
} from '@pluralsight/ps-design-system-util'
import Menu from '@pluralsight/ps-design-system-menu'
import React from 'react'

import { Button } from './button'
import { Selected } from './selected'
import { useListbox, UseListboxProps } from './useListbox'
import * as vars from '../vars/index'
export { useListbox } from './useListbox'

export type { UseListboxProps } from './useListbox'

interface DefaultRenderOptionProps {
  id: React.ReactText
  name: React.ReactText
}

const defaultRenderOption = React.forwardRef((props, ref) => {
  const { id, name } = props
  return (
    <Menu.Item value={{ id, name }} ref={ref}>
      {name}
      <Menu.Check />
    </Menu.Item>
  )
}) as ForwardRefComponent<'button', DefaultRenderOptionProps>

interface SelectProps extends UseListboxProps {
  items?: Array<{ id: React.ReactText; name: React.ReactText }>
  position?: ValueOf<typeof vars.positions>
  renderOption?: React.FC
}

const Select = React.forwardRef((props, ref) => {
  const {
    items = [],
    position = 'belowLeft',
    renderOption = defaultRenderOption,
    children,
    ...rest
  } = props
  const { buttonProps, selectedProps, menuProps, isOpen } = useListbox(
    rest,
    ref
  )

  const RenderOption = React.useMemo(() => renderOption, [renderOption])
  return (
    <PositionComponents.Position
      position={PositionComponents[position]}
      when={isOpen}
      show={
        <Menu origin={Menu.origins.topLeft} {...menuProps}>
          {children || items.map(i => <RenderOption key={i.id} {...i} />)}
        </Menu>
      }
    >
      <Button {...buttonProps}>
        <Selected {...selectedProps} />
      </Button>
    </PositionComponents.Position>
  )
}) as ForwardRefComponent<'button', SelectProps> & SelectStatics
interface SelectStatics {
  Button: typeof Button
  Selected: typeof Selected
  positions: typeof vars.positions
  sizes: typeof vars.sizes
}

export { useMenuRef } from './menuKeyEvents'

Select.Button = Button
Select.Selected = Selected
Select.sizes = vars.sizes
Select.positions = vars.positions

export default Select
