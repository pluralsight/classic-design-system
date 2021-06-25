import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  divider: () => glamor.css(stylesheet['.psds-dropdown__divider'])
}

export const Divider: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = props => {
  return <div {...styles.divider()} {...props} />
}

Divider.displayName = 'Dropdown.Divider'
