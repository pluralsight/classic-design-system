import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React from 'react'

import stylesheet from '../css'

const styles = {
  divider: () => css(stylesheet['.psds-dropdown__divider'])
}

export const Divider: React.FC<HTMLPropsFor<'div'>> = props => {
  return <div {...styles.divider()} {...props} />
}

Divider.displayName = 'Dropdown.Divider'
