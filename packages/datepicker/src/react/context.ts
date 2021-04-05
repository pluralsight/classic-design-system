import React from 'react'
import type { Calendar } from 'dayzed'

const initialValue = {}
// @ts-ignore: really hate this part of context and typescript
export const DateContext = React.createContext<Calendar>(initialValue)
