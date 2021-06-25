import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'
import glamorDefault, * as glamorExports from 'glamor'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = (placeholder: boolean, themeName: ValueOf<typeof themeNames>) =>
  glamor.compose(
    glamor.css(stylesheet['.psds-select__selected']),
    placeholder &&
      glamor.css(
        stylesheet[`.psds-select__placeholder.psds-theme--${themeName}`]
      )
  )

interface SelectSelectedProps extends React.HTMLAttributes<HTMLLabelElement> {
  label?: string
  placeholder: string
  selectedItem?: {
    value?: React.ReactText
    label?: React.ReactText
  }
}

export const Selected: React.FC<SelectSelectedProps> = ({
  placeholder,
  selectedItem
}) => {
  const themeName = useTheme()
  return (
    <>
      <span {...styles(placeholder === selectedItem?.label, themeName)}>
        {selectedItem?.label}
      </span>
    </>
  )
}

Selected.displayName = 'Select.Selected'
