import { createContext } from 'react'
import { names as themes } from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'

import { sizes } from '../vars/index.js'

export interface ContextValue {
  size?: ValueOf<typeof sizes>
  themeName?: ValueOf<typeof themes>
}

export const initialValue: ContextValue = {
  size: undefined,
  themeName: undefined
}

const Context = createContext<ContextValue>(initialValue)

export default Context
