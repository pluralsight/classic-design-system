import { css } from 'glamor'
import React, { HTMLAttributes } from 'react'

import stylesheet from '../css'

const styles = {
  divider: () => css(stylesheet['.psds-actionmenu__divider'])
}

export const Divider: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  return <div {...styles.divider()} {...props} />
}

Divider.displayName = 'ActionMenu.Divider'
