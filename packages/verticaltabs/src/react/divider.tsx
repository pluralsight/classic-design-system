import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React from 'react'

import stylesheet from '../css'

const styles = {
  divider: (themeName: ValueOf<typeof Theme.names>) =>
    css(
      stylesheet['.psds-verticaltabs__divider'],
      stylesheet[`.psds-verticaltabs__divider.psds-theme--${themeName}`]
    )
}

const Divider: React.FC = () => {
  const themeName = useTheme()

  return <hr {...styles.divider(themeName)} />
}

Divider.displayName = 'VerticalTabs.Divider'

export default Divider
