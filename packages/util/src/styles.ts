/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { CSSProperties } from 'react'

export type PropsWithStylesFor<
  Selectors extends keyof any,
  P = Record<string, unknown>
> = {
  UNSAFE_stylesFor?: StylesForProp<Selectors>
} & P

export type StylesForProp<Selectors extends keyof any> = Partial<
  Record<Selectors, CSSProperties>
>

export const stylesFor = (
  selectorKey = '',
  props: PropsWithStylesFor<any, any> = {}
) => {
  const { UNSAFE_stylesFor } = props

  return (UNSAFE_stylesFor && UNSAFE_stylesFor[selectorKey]) || {}
}
