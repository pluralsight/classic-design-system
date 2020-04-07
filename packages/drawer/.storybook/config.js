import requireContext from 'require-context.macro'

import { addDecorator, configure } from '@storybook/react'

import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

addDecorator(themeDecorator)

const req = requireContext('../src', true, /\.story\.js$/)
const rc = requireContext('../rc', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
  rc.keys().forEach(filename => rc(filename))
}

configure(loadStories, module)
