import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import React, {
  CSSProperties,
  MutableRefObject,
  ReactNode,
  createContext,
  forwardRef
} from 'react'

import { alignments } from '../vars'

export type AllowedSelectors = 'navitem__bar' | 'navitem__bar--selected'

export interface ContextValue {
  alignment: ValueOf<typeof alignments>
  bar?: ReactNode
  icon?: ReactNode
  menu: boolean
  ref:
    | ((instance: HTMLButtonElement | null) => void)
    | MutableRefObject<HTMLButtonElement | null>
    | null
  renderContainer: typeof defaultRenderContainer
  selected: boolean
  // eslint-disable-next-line camelcase
  UNSAFE_stylesFor?: Partial<Record<AllowedSelectors, CSSProperties>>
  rest?: Record<string, unknown>
}

const defaultRenderContainer = forwardRef<
  HTMLButtonElement,
  HTMLPropsFor<'button'>
>((props, ref) => <button ref={ref} {...props} />)

export const initialValue: ContextValue = {
  alignment: alignments.horizontal,
  menu: false,
  ref: null,
  selected: false,
  renderContainer: defaultRenderContainer
}

const Context = createContext<ContextValue>(initialValue)

export default Context
