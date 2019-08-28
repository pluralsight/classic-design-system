import requireContext from 'require-context.macro'

import { addDecorator, configure } from '@storybook/react'
import React from 'react'

import core from '@pluralsight/ps-design-system-core'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

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
addDecorator(themeDecorator)

const req = requireContext('../src', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
