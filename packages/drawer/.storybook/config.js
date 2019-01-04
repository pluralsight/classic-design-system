import addons from '@storybook/addons'
import { addDecorator, configure } from '@storybook/react'

import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

addDecorator(themeDecorator(addons))

function loadStory() {
  require('../src/react/__stories__/index.story.js')
}

configure(loadStory, module)
