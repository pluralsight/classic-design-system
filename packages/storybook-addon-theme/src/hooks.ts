import { useCallback } from 'react'
import {
  names,
  defaultName as defaultTheme
} from '@pluralsight/ps-design-system-theme'
import * as storybookApi from '@storybook/api'

import { PARAM_KEY } from './constants'

export function useSelectedTheme(api: StorybookApi = storybookApi) {
  const storyTheme = api.useParameter<{ name?: ThemeName }>(PARAM_KEY)?.name
  const [globals, updateGlobals] = api.useGlobals()
  const userSelectedTheme = globals[PARAM_KEY]?.name

  const storyDefaultTheme = storyTheme ?? defaultTheme
  const theme = userSelectedTheme ?? storyDefaultTheme

  const setTheme = useCallback(
    (value: ThemeName) => {
      updateGlobals({ [PARAM_KEY]: { ...globals[PARAM_KEY], name: value } })
    },
    [updateGlobals, globals]
  )

  return { theme, storyDefaultTheme, setTheme }
}

type ThemeName = keyof typeof names

type StorybookApi = {
  useGlobals: typeof storybookApi.useGlobals
  useParameter: typeof storybookApi.useParameter
}
