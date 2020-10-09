import { createContext } from 'react'
import { names as themes } from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'

import { sizes } from '../vars'

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
