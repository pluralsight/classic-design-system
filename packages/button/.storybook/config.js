/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import addons from '@storybook/addons'
import { addDecorator, configure } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import centerDecorator from './center-decorator'

addDecorator(centerDecorator)
addDecorator(themeDecorator(addons))

function loadStories() {
  require('../stories')
}

configure(loadStories, module)
