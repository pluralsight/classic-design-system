import { addDecorator, configure } from '@storybook/react'

import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

const requests = []

requests.push(require.context('../../avatar/src', true, /\.story\.js$/))
requests.push(require.context('../../button/src', true, /\.story\.js$/))

function loadStories() {
  requests.forEach(req => {
    req.keys().forEach(fname => req(fname))
  })
}

addDecorator(themeDecorator)
configure(loadStories, module)
