import React from 'react'
import { useAddonState } from '@storybook/api'
import { Icons, IconButton } from '@storybook/components'

import { defaultName, names } from '@pluralsight/ps-design-system-theme'

import { ADDON_ID } from '../constants'

export const ThemeTool: React.FC = () => {
  const [themeName, setThemeName] = useAddonState<keyof typeof names>(
    `${ADDON_ID}/name`,
    defaultName
  )

  const isDark = themeName === names.dark

  const toggleTheme = () => {
    setThemeName(isDark ? names.light : names.dark)
  }

  return (
    <IconButton active={isDark} title="Toggle theme" onClick={toggleTheme}>
      <Icons icon="mirror" />
    </IconButton>
  )
}
