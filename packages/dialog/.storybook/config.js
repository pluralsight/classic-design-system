import React from 'react'

import addons from '@storybook/addons'
import { addDecorator, configure } from '@storybook/react'

import core from '@pluralsight/ps-design-system-core'
import centerDecorator from '@pluralsight/ps-design-system-storybook-addon-center'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

const paddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingXLarge }}>{storyFn()}</div>
)

addDecorator(paddingDecorator)
// addDecorator(centerDecorator)
addDecorator(themeDecorator(addons))

function loadStory() {
  require('../src/react/__stories__/index.story.js')
}

configure(loadStory, module)
