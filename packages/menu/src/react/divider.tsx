import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React from 'react'

import stylesheet from '../css'

const styles = css(stylesheet['.psds-menu__divider'])

export const Divider: React.FC<HTMLPropsFor<'div'>> = props => {
  return <div {...styles} {...props} />
}

Divider.displayName = 'Menu.Divider'
