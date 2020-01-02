import requireContext from 'require-context.macro'

import { addDecorator, configure } from '@storybook/react'

import centerDecorator from '@pluralsight/ps-design-system-storybook-addon-center'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'
import featureFlagsDecorator from '@pluralsight/ps-design-system-storybook-addon-featureflags'

addDecorator(centerDecorator)
addDecorator(themeDecorator)
addDecorator(featureFlagsDecorator)

const req = requireContext('../src', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
