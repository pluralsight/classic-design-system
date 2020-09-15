import { makeDecorator } from '@storybook/addons'
import { useAddonState } from '@storybook/client-api'
import React from 'react'

import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import { ADDON_ID, PARAM_KEY } from './constants'
import { Themed } from './components/themed'

export const withTheme = makeDecorator({
  name: ADDON_ID,
  parameterName: PARAM_KEY,
  wrapper: (storyFn, context) => {
    const [themeName] = useAddonState<keyof typeof themeNames>(
      `${ADDON_ID}/name`
    )

    return <Themed themeName={themeName}>{storyFn(context)}</Themed>
  }
})

if (module && module.hot && module.hot.decline) module.hot.decline()
