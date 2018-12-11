import React from 'react'
import addons from '@storybook/addons'
import { addDecorator, configure } from '@storybook/react'

import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import core from '@pluralsight/ps-design-system-core'

addDecorator(fn => (
  <div
    style={{
      maxWidth: `calc(100vw - ${core.layout.spacingXXLarge})`,
      margin: `${core.layout.spacingLarge} auto`
    }}
  >
    {fn()}
  </div>
))
addDecorator(themeDecorator(addons))

function loadStory() {
  require('../src/react/__stories__/index.story.js')
}

configure(loadStory, module)
