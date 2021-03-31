import React from 'react'
import { Icons, IconButton } from '@storybook/components'
import { names } from '@pluralsight/ps-design-system-theme'

import { useSelectedTheme } from '../hooks'

export const ThemeTool: React.FC = () => {
  const { theme, setTheme } = useSelectedTheme()

  const isDark = theme === names.dark

  const toggleTheme = () => setTheme(isDark ? names.light : names.dark)

  return (
    <IconButton active={isDark} title="Toggle theme" onClick={toggleTheme}>
      <Icons icon="mirror" />
    </IconButton>
  )
}
