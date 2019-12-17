/* eslint-disable react/prop-types */

import React from 'react'

import { addons, types } from '@storybook/addons'
import { AddonPanel } from '@storybook/components'

import { ADDON_ID, PARAM_KEY, PANEL_ID } from './constants.js'
import Panel from './components/Panel.js'

addons.register(ADDON_ID, () => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <Panel />
    </AddonPanel>
  )

  addons.add(PANEL_ID, {
    paramKey: PARAM_KEY,
    render,
    title: 'Chaos',
    type: types.PANEL
  })
})
