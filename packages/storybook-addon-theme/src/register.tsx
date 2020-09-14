import React from 'react'
import addons, { types } from '@storybook/addons'

import { ADDON_ID } from './constants'

import { ThemeTool } from './components/tool'

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'themes',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <ThemeTool />
  })
})
