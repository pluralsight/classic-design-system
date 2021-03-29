import { Button } from './button'
import { Selected } from './selected'
import * as vars from '../vars'

import React, { useMemo } from 'react'
import { css } from 'glamor'
import * as PositionComponents from '@pluralsight/ps-design-system-position'
import {
  ValueOf,
  forwardRefWithAs,
  forwardRefWithAsAndStatics
} from '@pluralsight/ps-design-system-util'
import Menu from '@pluralsight/ps-design-system-menu'
import { useListbox, UseListboxProps } from './useListbox'

import { positions } from '../vars'

import stylesheet from '../css'

const styles = css(stylesheet['.psds-select__menu'])

interface DefaultRenderOptionProps {
  id: React.ReactText
  name: React.ReactText
}

const defaultRenderOption = forwardRefWithAs<
  DefaultRenderOptionProps,
  'button'
>((props, ref) => {
  const { id, name } = props
  return (
    <Menu.Item value={{ id, name }} ref={ref}>
      {name}
      <Menu.Check />
    </Menu.Item>
  )
})

interface SelectProps extends UseListboxProps {
  items?: Array<{ id: React.ReactText; name: React.ReactText }>
  position?: ValueOf<typeof positions>
  renderOption?: React.FC
}

const Select = forwardRefWithAsAndStatics<SelectProps, 'button', SelectStatics>(
  (props, ref) => {
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

    const RenderOption = useMemo(() => renderOption, [renderOption])
    return (
      <PositionComponents.Position
        position={PositionComponents[position]}
        when={isOpen}
        show={
          <Menu origin={Menu.origins.topLeft} {...menuProps} {...styles}>
            {children || items.map(i => <RenderOption key={i.id} {...i} />)}
          </Menu>
        }
      >
        <Button {...buttonProps}>
          <Selected {...selectedProps} />
        </Button>
      </PositionComponents.Position>
    )
  }
)
interface SelectStatics {
  Button: typeof Button
  Selected: typeof Selected
  positions: typeof vars.positions
  sizes: typeof vars.sizes
}

export { useListbox } from './useListbox'
export type { UseListboxProps } from './useListbox'
export { useMenuRef } from './menuKeyEvents'

Select.Button = Button
Select.Selected = Selected
Select.sizes = vars.sizes
Select.positions = vars.positions

export default Select
