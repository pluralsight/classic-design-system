import * as PositionComponents from '@pluralsight/ps-design-system-position'
import {
  classNames,
  ValueOf,
  forwardRefWithAs,
  forwardRefWithStatics
} from '@pluralsight/ps-design-system-util'
import Menu, { MenuItemProps } from '@pluralsight/ps-design-system-menu'
import React from 'react'

import { Button } from './button'
import { Selected } from './selected'
import { useSelect } from 'downshift'
import * as vars from '../vars/index'

import '../css/index.css'

const defaultRenderOption = forwardRefWithAs<MenuItemProps, 'button'>(
  (props, ref) => {
    const { label } = props
    return (
      <Menu.Item {...props} ref={ref}>
        {label && label}
        <Menu.Check style={{ marginLeft: 'auto' }} />
      </Menu.Item>
    )
  }
)

interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'placeholder'> {
  options?: Array<{ value: React.ReactText; label: React.ReactText }>
  position?: ValueOf<typeof vars.positions>
  renderOption?: React.FC
  initialSelectedItem?: { value: React.ReactText; label: React.ReactText }
  placeholder?: string
  onSelectedItemChange?: (changes: Record<string, any>) => void
}

const Select = forwardRefWithStatics<
  SelectProps,
  HTMLButtonElement,
  SelectStatics
>((props, ref) => {
  const {
    options = [],
    position = 'belowLeft',
    renderOption = defaultRenderOption,
    children,
    initialSelectedItem,
    onSelectedItemChange,
    placeholder = '',
    ...rest
  } = props

  const RenderOption = React.useMemo(() => renderOption, [renderOption])
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps, // To-DO: refactor to use field component
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({ items: options, initialSelectedItem, onSelectedItemChange })
  return (
    <PositionComponents.Position
      position={PositionComponents[position]}
      show={
        <div
          className={classNames(
            'psds-select__menu-wrapper',
            isOpen && 'psds-select__menu-wrapper--open'
          )}
        >
          <Menu
            origin={Menu.origins.topLeft}
            selectedItem={selectedItem}
            className={'psds-select__menu'}
            {...getMenuProps({}, { suppressRefError: true })}
          >
            {children ||
              options.map((item, index) => (
                <RenderOption
                  {...item}
                  key={item.value}
                  active={highlightedIndex === index}
                  {...getItemProps({ item, index })}
                />
              ))}
          </Menu>
        </div>
      }
    >
      <Button type="button" {...rest} {...getToggleButtonProps({ ref })}>
        <Selected {...selectedItem} placeholder={placeholder} />
      </Button>
    </PositionComponents.Position>
  )
})

interface SelectStatics {
  Button: typeof Button
  Selected: typeof Selected
  positions: typeof vars.positions
  sizes: typeof vars.sizes
}

Select.Button = Button
Select.Selected = Selected
Select.sizes = vars.sizes
Select.positions = vars.positions

export default Select
