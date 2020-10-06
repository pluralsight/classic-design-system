import { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React from 'react'

import stylesheet from '../css'
import { select } from '../js'
import * as vars from '../vars'

const styles = {
  badge: props =>
    css(
      stylesheet['.psds-badge'],
      stylesheet[select(props.themeName, props.appearance, props.color)]
    )
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: ValueOf<typeof vars.appearances>
  color?: ValueOf<typeof vars.colors>
}

interface BadgeStatics {
  appearances: typeof vars.appearances
  colors: typeof vars.colors
}

interface BadgeComponent
  extends RefForwardingComponent<BadgeProps, HTMLDivElement, BadgeStatics> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const themeName = useTheme()
  const allProps = { themeName, ...props }
  return (
    <div {...styles.badge(allProps)} ref={ref}>
      {props.children}
    </div>
  )
}) as BadgeComponent

Badge.defaultProps = {
  appearance: vars.appearances.default,
  color: vars.colors.gray
}

Badge.appearances = vars.appearances
Badge.colors = vars.colors

export const appearances = vars.appearances
export const colors = vars.colors

export default Badge
