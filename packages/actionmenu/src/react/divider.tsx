import { css } from 'glamor'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import React, {HTMLAttributes} from 'react'

import stylesheet from '../css/index.js'

const styles = {
  divider: () => css(stylesheet['.psds-actionmenu__divider'])
}

export const Divider: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  return <div {...styles.divider()} {...filterReactProps(props)} />
}

Divider.displayName = 'ActionMenu.Divider'
