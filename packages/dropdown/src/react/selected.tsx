import React, {HTMLAttributes} from 'react'
import { compose, css } from 'glamor'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const styles = {
  buttonSizer: () => css(stylesheet['.psds-dropdown__button-sizer']),
  placeholder: ({ appearance, selectedLabel, size }) => {
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
      !selectedLabel && placeholderColor
    )
  }
}

interface DropdownSelectedProps extends HTMLAttributes<HTMLLabelElement> {
  appearance:ValueOf<typeof vars.appearances>,
  label: string,
  placeholder: string,
  selectedLabel: string,
  size: ValueOf<typeof vars.sizes>
}


export const Selected: React.FC<DropdownSelectedProps> = ({
  appearance,
  label,
  placeholder,
  selectedLabel,
  size
}) => {
  return (
    <>
      <span aria-hidden {...styles.buttonSizer()}>
        {label || placeholder}
      </span>
      <span {...styles.placeholder({ appearance, selectedLabel, size })}>
        {selectedLabel || placeholder}
      </span>
    </>
  )
}

Selected.displayName = 'Dropdown.Selected'
