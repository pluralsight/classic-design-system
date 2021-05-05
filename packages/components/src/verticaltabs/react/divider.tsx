import { Theme, useTheme } from '../../theme'
import { ValueOf } from '../../util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  divider: (themeName: ValueOf<typeof Theme.names>) =>
    glamor.css(
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
