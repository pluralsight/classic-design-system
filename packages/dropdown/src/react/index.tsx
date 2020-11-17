import React, { forwardRef } from 'react'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import {
  HTMLPropsFor,
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { Item } from './item'
import { useDropdown, DropdownContext } from '../js'
import { Label } from './label'
import { Layout } from './layout'
import { Menu } from './menu'
import { SubLabel } from './sub-label'
import { Button } from './button'
import { Selected } from './selected'
import * as vars from '../vars'

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

interface DropdownProps extends Omit<HTMLPropsFor<'button'>, 'onChange'> {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  className?: string
  error?: boolean
  label?: React.ReactNode
  menu?: React.ReactNode
  onChange?: (e: React.MouseEvent, v: React.ReactText) => void
  onClick?: (e: React.MouseEvent) => void
  placeholder?: string
  size?: ValueOf<typeof vars.sizes>
  subLabel?: React.ReactNode
  value?: React.ReactText
}
interface DropdownComponent
  extends RefForwardingComponent<
    DropdownProps,
    HTMLButtonElement,
    DropdownStatics
  > {}

const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>(
  ({ children, ...props }, forwardedRef) => {
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
  }
) as DropdownComponent

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
