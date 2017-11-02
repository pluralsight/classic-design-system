import React from 'react'

import ThemePanel from './theme-panel'

const ADDON_ID = 'ps-design-system-storybook-addon-theme'
const PANEL_ID = `${ADDON_ID}/theme-panel`

// NOTE: unconventional need to pass addons here.  dealt with this for a day
// https://storybook.js.org/basics/faq/#why-is-there-no-addons-channel
// this is the way I solved it, finally
export default addons =>
  addons.register(ADDON_ID, api => {
    addons.addPanel(PANEL_ID, {
      title: 'Theme',
      render: _ => <ThemePanel channel={addons.getChannel()} api={api} />
    })
  })
