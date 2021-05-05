import { ValueOf } from '../../util'
import React from 'react'

import * as vars from '../vars/index'

export interface ContextValue {
  counter: boolean
  orientation: ValueOf<typeof vars.orientations>
  size: ValueOf<typeof vars.sizes>
}

export const initialContext: Required<ContextValue> = {
  counter: true,
  orientation: 'vertical',
  size: 'large'
}

const Context = React.createContext<ContextValue>(initialContext)

export default Context
