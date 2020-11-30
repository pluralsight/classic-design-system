import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React, { forwardRef, ReactText } from 'react'

import { ItemData } from '../js'

interface DropdownInputProps extends HTMLPropsFor<'input'> {
  activeItemId?: string
  disabled?: boolean
  isOpen: boolean
  inputId: string
  menuId: string
  selectedItem?: ItemData
}

export const Input = forwardRef<HTMLInputElement, DropdownInputProps>(
  (
    { activeItemId, disabled, isOpen, inputId, menuId, selectedItem, ...rest },
    ref
  ) => {
    const value = selectedItem?.value || selectedItem?.label || ''
    return (
      <ScreenReaderOnly key={value}>
        <input
          id={inputId}
          defaultValue={value}
          disabled={disabled}
          ref={ref}
          tabIndex={-1}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-activedescendant={activeItemId}
          {...rest}
        />
      </ScreenReaderOnly>
    )
  }
)

Input.displayName = 'Dropdown.Input'
