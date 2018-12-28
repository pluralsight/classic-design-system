import addons from '@storybook/addons'
import { configure } from '@storybook/react'

function loadStory() {
  require('../src/react/__stories__/index.story.js')
}

configure(loadStory, module)
