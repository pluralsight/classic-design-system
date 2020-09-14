import { makeDecorator } from '@storybook/addons'
import React from 'react'

import { ADDON_ID, PARAM_KEY } from './constants'
import { Center } from './components/center'

export const withCenter = makeDecorator({
  name: ADDON_ID,
  parameterName: PARAM_KEY,
  wrapper: (storyFn, context, { parameters }) => {
    return <Center>{storyFn(context)}</Center>
  }
})

if (module && module.hot && module.hot.decline) module.hot.decline()
