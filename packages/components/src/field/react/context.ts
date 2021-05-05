import { ValueOf } from '../../util'
import React from 'react'

import { sizes } from '../vars/index'

export interface FieldContextValue {
  size: ValueOf<typeof sizes>
}

export const FieldContext = React.createContext<FieldContextValue>({
  size: sizes.medium
})
