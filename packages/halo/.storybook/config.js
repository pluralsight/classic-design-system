import React from 'react'
import { css } from 'glamor'
import requireContext from 'require-context.macro'

import { addDecorator, configure } from '@storybook/react'

import centerDecorator from '@pluralsight/ps-design-system-storybook-addon-center'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

const ConstrainWidth = props => (
  <div
    {...css({ label: 'constrain-width-decorator', maxWidth: 500 })}
    {...props}
  />
)

addDecorator(storyFn => <ConstrainWidth>{storyFn()}</ConstrainWidth>)
addDecorator(centerDecorator)
addDecorator(themeDecorator)

const req = requireContext('../src', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
