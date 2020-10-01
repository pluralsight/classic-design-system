import { css } from 'glamor'
import React from 'react'

import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css'

const styles = {
  divider: themeName =>
    css(
      stylesheet['.psds-verticaltabs__divider'],
      stylesheet[`.psds-verticaltabs__divider.psds-theme--${themeName}`]
    )
}

const Divider = () => {
  const themeName = useTheme()
  return <hr {...styles.divider(themeName)} />
}

Divider.displayName = 'VerticalTabs.Divider'

export default Divider
