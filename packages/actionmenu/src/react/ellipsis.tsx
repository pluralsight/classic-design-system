import { css } from 'glamor'
import React, { HTMLAttributes, forwardRef } from 'react'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import stylesheet from '../css/index.js'

const styles = () => css(stylesheet[`.psds-actionmenu__ellipsis`])

export const Ellipsis:  React.FC<HTMLAttributes<HTMLSpanElement>> = forwardRef((props, ref) => (
  <span ref={ref} {...filterReactProps(props)} {...styles()} />
))

Ellipsis.displayName = 'ActionMenu.Ellipsis'
