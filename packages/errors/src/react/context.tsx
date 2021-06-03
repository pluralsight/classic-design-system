import { themeNames } from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'

import { sizes } from '../vars/index'

export interface ContextValue {
  size?: ValueOf<typeof sizes>
  themeName?: ValueOf<typeof themeNames>
}

export const initialValue: ContextValue = {
  size: undefined,
  themeName: undefined
}

const Context = React.createContext<ContextValue>(initialValue)

export default Context
