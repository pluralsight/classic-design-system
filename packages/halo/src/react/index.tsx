import { themeNames, useTheme } from '@pluralsight/ps-design-system-theme'
import {
  HTMLPropsFor,
  RefForwardingComponent,
  ValueOf,
  canUseDOM
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import polyfillFocusWithin from 'focus-within'
import React from 'react'

import stylesheet, { BASE_CLASSNAME, themeClasses } from '../css/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

if (canUseDOM()) polyfillFocusWithin(document)

export type StyleFn<P> = (
  themeName: ValueOf<typeof themeNames>,
  props: P
) => glamorExports.StyleAttribute

const styles: { [name: string]: StyleFn<InternalHaloProps> } = {
  halo: (themeName, props) => {
    const base = BASE_CLASSNAME
    const theme = base + themeClasses[themeName]
    const shape = `${BASE_CLASSNAME}--shape-${props.shape}`
    const gapSize = `${BASE_CLASSNAME}--gap-size-${props.gapSize}`

    const gapTheme = gapSize + themeClasses[themeName]

    const visible = `${BASE_CLASSNAME}--visible`
    const visibleOnFocus = `${BASE_CLASSNAME}--visible-on-focus`

    return glamor.compose(
      glamor.css(stylesheet[base]),
      glamor.css(stylesheet[theme]),
      glamor.css(stylesheet[shape]),
      glamor.css(stylesheet[gapSize]),
      glamor.css(stylesheet[gapTheme]),

      props.inline && glamor.css(stylesheet[`${BASE_CLASSNAME}--inline`]),
      props.error && glamor.css(stylesheet[`${BASE_CLASSNAME}--error`]),
      props.visible && glamor.css(stylesheet[visible]),
      props.visibleOnFocus && glamor.css(stylesheet[visibleOnFocus])
    )
  }
}

interface InternalHaloProps {
  error: boolean
  gapSize: ValueOf<typeof vars.gapSizes>
  inline: boolean
  shape: ValueOf<typeof vars.shapes>
  visible: boolean
  visibleOnFocus: boolean
}

type HaloProps = HTMLPropsFor<'div'> & Partial<InternalHaloProps>

interface HaloStatics {
  gapSizes: typeof vars.gapSizes
  shapes: typeof vars.shapes
}

type HaloComponent = RefForwardingComponent<
  HaloProps,
  HTMLDivElement,
  HaloStatics
>

export const Halo = React.forwardRef((props, ref) => {
  const themeName = useTheme()

  const {
    error = false,
    gapSize = vars.gapSizes.default,
    inline = false,
    shape = vars.shapes.default,
    visible = false,
    visibleOnFocus = true,
    ...rest
  } = props

  const style = styles.halo(themeName, {
    error,
    gapSize,
    inline,
    shape,
    visible,
    visibleOnFocus
  })
  return <div ref={ref} {...style} {...rest} />
}) as HaloComponent

Halo.gapSizes = vars.gapSizes
Halo.shapes = vars.shapes
