/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react'

function loadStories() {
  // TODO: make this dynamic; readdir
  require('../stories/input')
}

configure(loadStories, module)
