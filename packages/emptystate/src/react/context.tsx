import { createContext } from 'react'
import { name as themes } from '@pluralsight/ps-design-system-theme'

import { sizes } from '../vars'

// TODO: move to core pkg
type ValueOf<T> = T[keyof T]

export interface ContextValue {
  size?: ValueOf<typeof sizes>
  themeName?: ValueOf<typeof themes>
}

export const initialValue: ContextValue = {
  size: null,
  themeName: null
}

const Context = createContext<ContextValue>(initialValue)

export default Context
