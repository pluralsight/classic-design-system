import backgrounds from '@storybook/addon-backgrounds'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'

import Badge from '../react'

const bg = backgrounds([
  { name: 'product', value: core.colors.gray06, default: true }
])

const appearanceStory = storiesOf('appearance', module).addDecorator(bg)
Object.keys(Badge.appearances).forEach(app =>
  appearanceStory.add(app, _ => (
    <Badge appearance={app}>{`${app} Badge`}</Badge>
  ))
)

const colorStory = storiesOf('color', module).addDecorator(bg)
Object.keys(Badge.colors).forEach(color => {
  Object.keys(Badge.appearances).forEach(app =>
    colorStory.add(`${color} ${app}`, _ => (
      <Badge appearance={app} color={color}>{`${color} ${app} Badge`}</Badge>
    ))
  )
})
