import { useTheme } from '@pluralsight/ps-design-system-theme'
import { classNames } from '@pluralsight/ps-design-system-util'
import React from 'react'

import '../css/index.css'

const Divider: React.FC = () => {
  const themeName = useTheme()

  return (
    <hr
      className={classNames(
        'psds-verticaltabs__divider',
        `psds-theme--${themeName}`
      )}
    />
  )
}

Divider.displayName = 'VerticalTabs.Divider'

export default Divider
