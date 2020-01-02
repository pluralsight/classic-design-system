import React from 'react'

import addons, { types } from '@storybook/addons'

import { ADDON_ID, PANEL_ID } from './constants.js'
import {FeatureFlagsPanel} from './featureflags-panel.js'

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Feature Flags',
    render: props => <FeatureFlagsPanel {...props} api={api} />
  })
})
