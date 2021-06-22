import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'

import { alignments } from '../vars/index'

export type AllowedSelectors = 'navitem__bar' | 'navitem__bar--selected'

export interface ContextValue {
  alignment: ValueOf<typeof alignments>
  bar?: React.ReactNode
  icon?: React.ReactNode
  menu: boolean
  ref:
    | ((instance: HTMLButtonElement | null) => void)
    | React.MutableRefObject<HTMLButtonElement | null>
    | null
  renderContainer: typeof defaultRenderContainer
  selected: boolean
  // eslint-disable-next-line camelcase
  UNSAFE_stylesFor?: Partial<Record<AllowedSelectors, React.CSSProperties>>
  rest?: Record<string, unknown>
}

const defaultRenderContainer = React.forwardRef<
  HTMLButtonElement,
  HTMLPropsFor<HTMLButtonElement>
>((props, ref) => <button ref={ref} {...props} />)

export const initialValue: ContextValue = {
  alignment: alignments.horizontal,
  menu: false,
  ref: null,
  selected: false,
  renderContainer: defaultRenderContainer
}

const Context = React.createContext<ContextValue>(initialValue)

export default Context
