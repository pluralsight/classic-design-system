import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = glamor.css(stylesheet['.psds-menu__divider'])

export const Divider: React.FC<React.HTMLAttributes<HTMLDivElement>> =
  props => {
    return <div {...styles} {...props} />
  }

Divider.displayName = 'Menu.Divider'
