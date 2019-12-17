import React from 'react'
import { makeDecorator } from '@storybook/addons'

import { PARAM_KEY } from '../src/constants.js'

export default makeDecorator({
  name: 'withChaos',
  parameterName: PARAM_KEY,
  wrapper: (getStory, context) => <>{getStory(context)}</>
})
