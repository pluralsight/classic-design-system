import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React, { FC, ReactNode } from 'react'

import stylesheet from '../css'

const styles = {
  label: (themeName: ValueOf<typeof themeNames>) =>
    css(
      stylesheet['psds-dropdown__label'],
      stylesheet[`.psds-dropdown__label.psds-theme--${themeName}`]
    )
}

interface LabelProps {
  label?: ReactNode
  inputId: string
}

export const Label: FC<LabelProps> = props => {
  const themeName = useTheme()
  return (
    <label htmlFor={props.inputId}>
      {props.label ? (
        <span {...styles.label(themeName)}>{props.label}</span>
      ) : (
        <ScreenReaderOnly as="span">Dropdown</ScreenReaderOnly>
      )}
    </label>
  )
}

Label.displayName = 'Dropdown.Label'
