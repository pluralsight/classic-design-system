import { HTMLPropsFor } from '../../util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = glamor.css(stylesheet[`.psds-menu__ellipsis`])

export const Ellipsis = React.forwardRef<HTMLSpanElement, HTMLPropsFor<'span'>>(
  (props, ref) => <span ref={ref} {...props} {...styles} />
)

Ellipsis.displayName = 'Menu.Ellipsis'
