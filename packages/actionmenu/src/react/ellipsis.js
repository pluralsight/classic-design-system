import { css } from 'glamor'
import React, { forwardRef } from 'react'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import stylesheet from '../css/index.js'

const styles = () => css(stylesheet[`.psds-actionmenu__ellipsis`])

export const Ellipsis = forwardRef((props, ref) => (
  <span ref={ref} {...filterReactProps(props)} {...styles()} />
))

Ellipsis.displayName = 'ActionMenu.Ellipsis'
