import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'
import { useTheme, themeNames } from '../../theme'
import { ValueOf } from '../../util'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  divider: (themeName: ValueOf<typeof themeNames>) =>
    glamor.css(
      stylesheet['.psds-form-divider'],
      stylesheet[`.psds-form-divider.psds-theme--${themeName}`]
    )
}

const Divider: React.FC = () => {
  const themeName = useTheme()

  return <div {...styles.divider(themeName)} />
}
Divider.displayName = 'Divider'

export default Divider
