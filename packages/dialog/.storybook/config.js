import requireContext from 'require-context.macro'

import { addDecorator, configure } from '@storybook/react'
import React from 'react'

import * as core from '@pluralsight/ps-design-system-core'
import centerDecorator from '@pluralsight/ps-design-system-storybook-addon-center'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

const paddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingXLarge }}>{storyFn()}</div>
)

addDecorator(paddingDecorator)
addDecorator(centerDecorator)
addDecorator(themeDecorator)

const req = requireContext('../src', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
