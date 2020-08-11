import { css } from 'glamor'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  divider: () => css(stylesheet['.psds-actionmenu__divider'])
}

export const Divider = props => {
  return <div {...styles.divider(props)} {...filterReactProps(props)} />
}

Divider.displayName = 'ActionMenu.Divider'
