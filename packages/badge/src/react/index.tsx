import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  HTMLPropsFor,
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { css, StyleAttribute } from 'glamor'
import React from 'react'

import stylesheet from '../css'
import { select } from '../js'
import * as vars from '../vars'

type StyleFn = (
  props: InternalBadgeProps,
  themeName: ValueOf<typeof Theme.names>
) => StyleAttribute

const styles: { [key: string]: StyleFn } = {
  badge: (props, themeName) =>
    css(
      stylesheet['.psds-badge'],
      stylesheet[select(themeName, props.appearance, props.color)]
    )
}

interface InternalBadgeProps {
  appearance: ValueOf<typeof vars.appearances>
  color: ValueOf<typeof vars.colors>
}

type BadgeProps = HTMLPropsFor<'div'> & Partial<InternalBadgeProps>

interface BadgeStatics {
  appearances: typeof vars.appearances
  colors: typeof vars.colors
}

interface BadgeComponent
  extends RefForwardingComponent<BadgeProps, HTMLDivElement, BadgeStatics> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      appearance = vars.appearances.default,
      color = vars.colors.gray,
      ...rest
    },
    forwardedRef
  ) => {
    const ref = React.useRef<HTMLDivElement>(null)
    // TODO: consider replacing with useCombinedRefs
    React.useImperativeHandle(
      forwardedRef,
      () => (ref.current as unknown) as HTMLDivElement
    )
    const themeName = useTheme()

    return (
      <div
        {...styles.badge({ appearance, color }, themeName)}
        ref={ref}
        {...rest}
      />
    )
  }
) as BadgeComponent

Badge.appearances = vars.appearances
Badge.colors = vars.colors

export const appearances = vars.appearances
export const colors = vars.colors

export default Badge
