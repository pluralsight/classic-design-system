import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamor from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const styles = () => glamor.css(stylesheet[`.psds-actionmenu__ellipsis`])

export const Ellipsis = React.forwardRef<HTMLSpanElement, HTMLPropsFor<'span'>>(
  (props, ref) => <span ref={ref} {...props} {...styles()} />
)

Ellipsis.displayName = 'ActionMenu.Ellipsis'
