import { css } from 'glamor'
import React, { HTMLAttributes, forwardRef } from 'react'

import stylesheet from '../css'

const styles = () => css(stylesheet[`.psds-actionmenu__ellipsis`])

interface Props extends HTMLAttributes<HTMLSpanElement> {}
export const Ellipsis = forwardRef<HTMLSpanElement, Props>((props, ref) => (
  <span ref={ref} {...props} {...styles()} />
))

Ellipsis.displayName = 'ActionMenu.Ellipsis'
