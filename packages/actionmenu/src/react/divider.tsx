import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamor from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const styles = {
  divider: () => glamor.css(stylesheet['.psds-actionmenu__divider'])
}

export const Divider: React.FC<HTMLPropsFor<'div'>> = props => {
  return <div {...styles.divider()} {...props} />
}

Divider.displayName = 'ActionMenu.Divider'
