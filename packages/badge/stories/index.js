import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Badge from '../react'

const appearanceStory = storiesOf('appearance', module).addDecorator(
  themeDecorator(addons)
)
Object.keys(Badge.appearances).forEach(app =>
  appearanceStory.add(app, _ => (
    <Badge appearance={app}>{`${app} Badge`}</Badge>
  ))
)

const colorStory = storiesOf('color', module).addDecorator(
  themeDecorator(addons)
)
Object.keys(Badge.colors).forEach(color => {
  Object.keys(Badge.appearances).forEach(app =>
    colorStory.add(`${color} ${app}`, _ => (
      <Badge appearance={app} color={color}>{`${color} ${app} Badge`}</Badge>
    ))
  )
})
