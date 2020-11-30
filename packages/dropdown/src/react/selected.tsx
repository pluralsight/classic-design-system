import React from 'react'
import { compose, css } from 'glamor'
import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import stylesheet from '../css'
import * as vars from '../vars'

import { ItemData } from '../js'

const styles = {
  buttonSizer: () => css(stylesheet['.psds-dropdown__button-sizer']),
  placeholder: ({ appearance, selectedItem, size }) => {
    const label = 'psds-dropdown__placeholder'
    const isSmall = size === vars.sizes.small
    const placeholderColor =
      appearance === vars.appearances.subtle
        ? css(
            stylesheet[
              `.psds-dropdown__field--appearance-${vars.appearances.subtle}.psds-dropdown__placeholder--color`
            ]
          )
        : css(stylesheet['.psds-dropdown__placeholder--color'])
    return compose(
      css(stylesheet[`.${label}`]),
      isSmall && css(stylesheet[`.${label}.psds-dropdown--small`]),
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
