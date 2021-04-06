import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import { ItemData } from '../js/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

const styles = {
  buttonSizer: () => glamor.css(stylesheet['.psds-dropdown__button-sizer']),
  placeholder: ({
    appearance,
    selectedItem,
    size
  }: Pick<DropdownSelectedProps, 'appearance' | 'selectedItem' | 'size'>) => {
    const label = 'psds-dropdown__placeholder'
    const isSmall = size === vars.sizes.small
    const placeholderColor =
      appearance === vars.appearances.subtle
        ? glamor.css(
            stylesheet[
              `.psds-dropdown__field--appearance-${vars.appearances.subtle}.psds-dropdown__placeholder--color`
            ]
          )
        : glamor.css(stylesheet['.psds-dropdown__placeholder--color'])
    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),
      isSmall && glamor.css(stylesheet[`.${label}.psds-dropdown--small`]),
      !selectedItem && placeholderColor
    )
  }
}

interface DropdownSelectedProps extends HTMLPropsFor<'label'> {
  appearance?: ValueOf<typeof vars.appearances>
  label?: string
  placeholder?: string
  selectedItem?: ItemData
  size?: ValueOf<typeof vars.sizes>
}

export const Selected: React.FC<DropdownSelectedProps> = ({
  appearance,
  label,
  placeholder,
  selectedItem,
  size
}) => {
  return (
    <>
      <span aria-hidden {...styles.buttonSizer()}>
        {label || placeholder}
      </span>
      <span {...styles.placeholder({ appearance, selectedItem, size })}>
        {selectedItem?.label || placeholder}
      </span>
    </>
  )
}

Selected.displayName = 'Dropdown.Selected'
