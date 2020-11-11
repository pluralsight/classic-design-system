import React, { CSSProperties, ReactNode, createContext } from 'react'
import { ValueOf } from '@pluralsight/ps-design-system-util'

import { alignments } from '../vars'

export type AllowedSelectors = 'navitem__bar' | 'navitem__bar--selected'

interface ContentProps {
  children: ReactNode
}

export interface ContextValue {
  alignment: ValueOf<typeof alignments>
  bar?: ReactNode
  icon?: ReactNode
  menu: boolean
  renderContent: (props: ContentProps) => JSX.Element
  selected: boolean
  // eslint-disable-next-line camelcase
  UNSAFE_stylesFor?: Partial<Record<AllowedSelectors, CSSProperties>>
}

export const initialValue: ContextValue = {
  alignment: alignments.horizontal,
  menu: false,
  selected: false,
  renderContent: injected => <button {...injected} />
}

const Context = createContext<ContextValue>(initialValue)

export default Context
