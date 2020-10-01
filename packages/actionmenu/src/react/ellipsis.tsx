import { css } from 'glamor'
import React, { HTMLAttributes, forwardRef } from 'react'
import stylesheet from '../css/index'
import { RefForwardingComponent } from '@pluralsight/ps-design-system-util'

const styles = () => css(stylesheet[`.psds-actionmenu__ellipsis`])

interface Props extends HTMLAttributes<HTMLSpanElement> {}
interface EllipsisComponent
  extends RefForwardingComponent<Props, HTMLSpanElement> {}

export const Ellipsis = forwardRef<HTMLSpanElement, Props>((props, ref) => (
  <span ref={ref} {...props} {...styles()} />
)) as EllipsisComponent

Ellipsis.displayName = 'ActionMenu.Ellipsis'
