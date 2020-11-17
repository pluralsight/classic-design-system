import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React, { forwardRef } from 'react'

import stylesheet from '../css'

const styles = () => css(stylesheet[`.psds-actionmenu__ellipsis`])

export const Ellipsis = forwardRef<HTMLSpanElement, HTMLPropsFor<'span'>>(
  (props, ref) => <span ref={ref} {...props} {...styles()} />
)

Ellipsis.displayName = 'ActionMenu.Ellipsis'
