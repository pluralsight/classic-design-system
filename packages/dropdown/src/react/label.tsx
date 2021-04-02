import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { ValueOf, HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamor from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const styles = {
  label: (themeName: ValueOf<typeof themeNames>) =>
    glamor.css(
      stylesheet['psds-dropdown__label'],
      stylesheet[`.psds-dropdown__label.psds-theme--${themeName}`]
    )
}

interface LabelProps extends HTMLPropsFor<'label'> {
  label?: React.ReactNode
}

export const Label: React.FC<LabelProps> = props => {
  const themeName = useTheme()
  return (
    <label>
      {props.label ? (
        <span {...styles.label(themeName)}>{props.label}</span>
      ) : (
        <ScreenReaderOnly as="span">Dropdown</ScreenReaderOnly>
      )}
    </label>
  )
}

Label.displayName = 'Dropdown.Label'
