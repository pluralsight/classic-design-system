import { ValueOf } from '@pluralsight/ps-design-system-util'
import { createContext } from 'react'

import { sizes } from '../vars'

export interface FieldContextValue {
  size: ValueOf<typeof sizes>
}

export const FieldContext = createContext<FieldContextValue>({
  size: sizes.medium
})
