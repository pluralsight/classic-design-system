import React from 'react'
import { Icons, IconButton } from '@storybook/components'
import { themeNames } from '@pluralsight/ps-design-system-theme'

import { useSelectedTheme } from '../hooks'

export const ThemeTool: React.FC = () => {
  const { theme, storyDefaultTheme, setTheme } = useSelectedTheme()

  const isDark = theme === themeNames.dark

  const toggleTheme = () =>
    setTheme(isDark ? themeNames.light : themeNames.dark)

  return (
    <IconButton
      active={theme !== storyDefaultTheme}
      title="Toggle theme"
      onClick={toggleTheme}
    >
      <Icons icon={isDark ? 'circle' : 'circlehollow'} />
    </IconButton>
  )
}
