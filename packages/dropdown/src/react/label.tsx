import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { compose, css } from 'glamor'
import React, { FC, ReactNode } from 'react'

import stylesheet from '../css'

const styles = themeName =>
  compose(
    css(stylesheet['psds-dropdown__label']),
    css(stylesheet[`.psds-dropdown__label.psds-theme--${themeName}`])
  )

interface LabelProps {
  label?: ReactNode
  inputId: string
}
export const Label: FC<LabelProps> = props => {
  const themeName = useTheme()
  return (
    <label htmlFor={props.inputId}>
      {props.label ? (
        <span {...styles(themeName)}>{props.label}</span>
      ) : (
        <ScreenReaderOnly as="span">Dropdown</ScreenReaderOnly>
      )}
    </label>
  )
}

Label.displayName = 'Dropdown.Label'
