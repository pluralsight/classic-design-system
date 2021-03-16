import React, { ReactText, ReactElement, ReactNode, forwardRef } from 'react'
import {
  HTMLPropsFor,
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'

import { Divider } from './divider.js'
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
  Divider: typeof Divider
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
  label?: ReactNode
  menu?: ReactElement | ReactElement[]
  onChange?: (
    evt: React.MouseEvent | React.KeyboardEvent,
    value?: ReactText
  ) => void
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void
  placeholder?: string
  size?: ValueOf<typeof vars.sizes>
  subLabel?: ReactNode
  uniqueId?: (prefix: string) => string
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
// TODO: replace
Dropdown.defaultProps = {
  appearance: vars.appearances.default,
  disabled: false,
  error: false,
  size: vars.sizes.medium
}
Dropdown.context = DropdownContext
Dropdown.Item = Item
Dropdown.Divider = Divider
Dropdown.appearances = vars.appearances
Dropdown.sizes = vars.sizes
Dropdown.Label = Label
Dropdown.Layout = Layout
Dropdown.Menu = Menu
Dropdown.SubLabel = SubLabel
Dropdown.Button = Button
Dropdown.Selected = Selected
export default Dropdown
