import { ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'

import { origins } from '../vars/index'

interface ContextValue {
  onClickContext?: (evt: React.MouseEvent, value?: React.ReactText) => void
  onClose?: (evt: React.MouseEvent, value?: React.ReactText) => void
  originContext?: ValueOf<typeof origins>
}

const initialValue = {}

export const ActionMenuContext = React.createContext<ContextValue>(initialValue)
