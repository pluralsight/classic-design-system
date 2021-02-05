import { createContext } from 'react'
import { Calendar } from 'dayzed'

const initialValue = {}
// @ts-ignore: really hate this part of context and typescript
export const DateContext = createContext<Calendar>(initialValue)
