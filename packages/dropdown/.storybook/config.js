import requireContext from 'require-context.macro'

import { addDecorator, configure } from '@storybook/react'
import React from 'react'

import * as core from '@pluralsight/ps-design-system-core'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

addDecorator(PaddingDecorator)
addDecorator(themeDecorator)

const req = requireContext('../src', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
