import addons from '@storybook/addons'
import { addDecorator, configure } from '@storybook/react'

import React from 'react'

import core from '@pluralsight/ps-design-system-core'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

addDecorator(PaddingDecorator)
addDecorator(themeDecorator(addons))

function loadStory() {
  require('../src/react/__stories__/index.story.js')
}

configure(loadStory, module)
