import {
  themeNames,
  themeDefaultName
} from '@pluralsight/ps-design-system-theme'
import * as storybookApi from '@storybook/api'
import React from 'react'

import { PARAM_KEY } from './constants'

export function useSelectedTheme(api: StorybookApi = storybookApi) {
  const storyTheme = api.useParameter<{ name?: ThemeName }>(PARAM_KEY)?.name
  const [globals, updateGlobals] = api.useGlobals()
  const userSelectedTheme = globals[PARAM_KEY]?.name

  const storyDefaultTheme = storyTheme ?? themeDefaultName
  const theme = userSelectedTheme ?? storyDefaultTheme

  const setTheme = React.useCallback(
    (value: ThemeName) => {
      updateGlobals({ [PARAM_KEY]: { ...globals[PARAM_KEY], name: value } })
    },
    [updateGlobals, globals]
  )

  return { theme, storyDefaultTheme, setTheme }
}

type ThemeName = keyof typeof themeNames

type StorybookApi = {
  useGlobals: typeof storybookApi.useGlobals
  useParameter: typeof storybookApi.useParameter
}
