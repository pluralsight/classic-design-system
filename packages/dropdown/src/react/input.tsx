import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React, { forwardRef, ReactText } from 'react'

interface DropdownInputProps extends HTMLPropsFor<'input'> {
  disabled?: boolean
  isOpen: boolean
  labelId: string
  menuId: string
  selectedItemId?: string
  selectedLabel?: string
  selectedValue?: ReactText
}

export const Input = forwardRef<HTMLInputElement, DropdownInputProps>(
  (
    // TODO: rename labelId to inputId
    {
      disabled,
      isOpen,
      labelId,
      menuId,
      selectedItemId,
      selectedLabel,
      selectedValue,
      ...rest
    },
    ref
  ) => {
    const value = selectedValue || selectedLabel || ''
    return (
      <ScreenReaderOnly key={value}>
        <input
          id={labelId}
          defaultValue={value}
          disabled={disabled}
          ref={ref}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-activedescendant={selectedItemId}
          {...rest}
        />
      </ScreenReaderOnly>
    )
  }
)

Input.displayName = 'Dropdown.Input'
