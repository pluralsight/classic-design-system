import React from 'react'

import addons, { types } from '@storybook/addons'

import { ADDON_ID, PANEL_ID } from './constants.js'
import ThemePanel from './theme-panel.js'

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Theme',
    render: props => <ThemePanel {...props} api={api} />
  })
})
