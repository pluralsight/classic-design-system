import { css } from 'glamor'
import React from 'react'
import { useTheme, names as themNames } from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

const styles = {
  divider: (themeName: ValueOf<typeof themNames>) =>
    css(
      stylesheet['.psds-form-divider'],
      stylesheet[`.psds-form-divider.psds-theme--${themeName}`]
    )
}

const Divider: React.FC = () => {
  const themeName = useTheme()

  return (
    <div{...styles.divider(themeName)} />
  )
}
Divider.displayName = 'Divider'

export default Divider
