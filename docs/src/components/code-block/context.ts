import { names as themeNames } from '@pluralsight/ps-design-system-theme'
import React from 'react'
import { Language } from 'prism-react-renderer'

interface CodeBlockContextValue {
  language: Language
  noRender: boolean
  startExpanded: boolean
  themeNameOverride: ValueOf<typeof themeNames> | undefined
}
export const CodeBlockContext = React.createContext<CodeBlockContextValue>({
  language: 'typescript',
  noRender: false,
  startExpanded: false,
  themeNameOverride: undefined
})
