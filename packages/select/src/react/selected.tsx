import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
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

interface SelectSelectedProps extends HTMLPropsFor<'label'> {
  label?: string
  placeholder: string
  selectedItem?: {
    id?: React.ReactText
    name?: React.ReactText
  }
}

export const Selected: React.FC<SelectSelectedProps> = ({
  placeholder,
  selectedItem
}) => {
  const themeName = useTheme()
  return (
    <>
      <span {...styles(placeholder === selectedItem?.name, themeName)}>
        {selectedItem?.name}
      </span>
    </>
  )
}

Selected.displayName = 'Select.Selected'
