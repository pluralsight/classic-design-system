import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = () => glamor.css(stylesheet[`.psds-actionmenu__ellipsis`])

export const Ellipsis = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => <span ref={ref} {...props} {...styles()} />)

Ellipsis.displayName = 'ActionMenu.Ellipsis'
