import addons from '@storybook/addons'
import React from 'react'

import ThemePanel from './theme-panel'

const ADDON_ID = 'ps-design-system-storybook-addon-theme'
const PANEL_ID = `${ADDON_ID}/theme-panel`

addons.register(ADDON_ID, api => {
  addons.addPanel(PANEL_ID, {
    title: 'Theme',
    render: _ => <ThemePanel channel={addons.getChannel()} api={api} />
  })
})
