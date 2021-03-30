import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const styles = css(stylesheet[`.psds-menu__ellipsis`])

export const Ellipsis = React.forwardRef<HTMLSpanElement, HTMLPropsFor<'span'>>(
  (props, ref) => <span ref={ref} {...props} {...styles} />
)

Ellipsis.displayName = 'Menu.Ellipsis'
