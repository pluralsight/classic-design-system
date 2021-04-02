import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamor from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const styles = glamor.css(stylesheet['.psds-menu__divider'])

export const Divider: React.FC<HTMLPropsFor<'div'>> = props => {
  return <div {...styles} {...props} />
}

Divider.displayName = 'Menu.Divider'
