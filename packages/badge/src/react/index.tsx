import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import { select } from '../js/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

type StyleFn = (
  props: InternalBadgeProps,
  themeName: ValueOf<typeof Theme.names>
) => glamorExports.StyleAttribute

const styles: { [key: string]: StyleFn } = {
  badge: (props, themeName) =>
    glamor.css(
      stylesheet['.psds-badge'],
      stylesheet[select(themeName, props.appearance, props.color)]
    )
}

interface InternalBadgeProps {
  appearance: ValueOf<typeof vars.appearances>
  color: ValueOf<typeof vars.colors>
}

type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  Partial<InternalBadgeProps>

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
      color = vars.colors.neutral,
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
