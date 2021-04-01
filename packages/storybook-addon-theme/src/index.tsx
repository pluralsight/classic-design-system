import { makeDecorator } from '@storybook/addons'
import * as api from '@storybook/client-api'
import React from 'react'

import { ADDON_ID, PARAM_KEY } from './constants'
import { Themed } from './components/themed'
import { useSelectedTheme } from './hooks'

export const withTheme = makeDecorator({
  name: ADDON_ID,
  parameterName: PARAM_KEY,
  wrapper: (storyFn, context) => {
    // eslint-disable-next-line
    const { theme } = useSelectedTheme(api)

    return <Themed themeName={theme}>{storyFn(context)}</Themed>
  }
})

if (module && module.hot && module.hot.decline) module.hot.decline()
