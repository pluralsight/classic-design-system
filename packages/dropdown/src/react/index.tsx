import React, { forwardRef, HTMLAttributes } from 'react'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { RefForwardingComponent, ValueOf } from '@pluralsight/ps-design-system-util'
import { Item } from './item.js'
import { useDropdown, DropdownContext } from '../js/index.js'
import { Label } from './label.js'
import { Layout } from './layout.js'
import { Menu } from './menu.js'
import { SubLabel } from './sub-label.js'
import { Button } from './button.js'
import { Selected } from './selected.js'
import * as vars from '../vars/index.js'


interface DropdownStatics {
  context: typeof DropdownContext
  Item: typeof Item
  Divider: typeof ActionMenu.Divider
  appearances: typeof vars.appearances
  sizes: typeof vars.sizes
  Label: typeof Label
  Layout: typeof Layout
  Menu: typeof Menu
  SubLabel: typeof SubLabel
  Button: typeof Button
  Selected: typeof Selected
}

interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  appearance?:  ValueOf<typeof vars.appearances>
  disabled?: boolean
  className: string
  error: boolean
  label: React.ReactNode
  menu: React.ReactNode
  onChange: (e:React.MouseEvent, v: React.ReactText) => void
  onClick: (e: React.MouseEvent) => void
  placeholder: string
  size: ValueOf<typeof vars.sizes>
  subLabel: React.ReactNode
  value: React.ReactText
}
interface DropdownComponent
  extends RefForwardingComponent<DropdownProps, HTMLDivElement, DropdownStatics> {}


const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, forwardedRef) => {
  const allProps = useDropdown(props, forwardedRef)
  return (
    <Layout
      {...allProps.layout}
      label={<Label {...allProps.label} />}
      menu={
        <DropdownContext.Provider {...allProps.value}>
          <Menu {...allProps.menu} />
        </DropdownContext.Provider>
      }
      subLabel={<SubLabel {...allProps.subLabel} />}
      button={
        <Button {...allProps.button}>
          <Selected {...allProps.selected} />
        </Button>
      }
    />
  )
}) as DropdownComponent

Dropdown.displayName = 'Dropdown'
Dropdown.defaultProps = {
  appearance: vars.appearances.default,
  disabled: false,
  error: false,
  size: vars.sizes.medium,
  menu: <span />
}
Dropdown.context = DropdownContext
Dropdown.Item = Item
Dropdown.Divider = ActionMenu.Divider
Dropdown.appearances = vars.appearances
Dropdown.sizes = vars.sizes
Dropdown.Label = Label
Dropdown.Layout = Layout
Dropdown.Menu = Menu
Dropdown.SubLabel = SubLabel
Dropdown.Button = Button
Dropdown.Selected = Selected
export default Dropdown
