import React, { ReactText } from 'react'
import { compose, css } from 'glamor'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import stylesheet from '../css'

const styles = (placeholder: boolean, themeName: ValueOf<typeof themeNames>) =>
  compose(
    css(stylesheet['.psds-select__selected']),
    placeholder &&
      css(stylesheet[`.psds-select__placeholder.psds-theme--${themeName}`])
  )

interface SelectSelectedProps extends HTMLPropsFor<'label'> {
  label?: string
  placeholder: string
  selectedItem?: {
    id?: ReactText
    name?: ReactText
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
