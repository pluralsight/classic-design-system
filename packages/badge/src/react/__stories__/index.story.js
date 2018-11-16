import React from 'react'
import { storiesOf } from '@storybook/react'

import Badge from '..'

const appearanceStory = storiesOf('appearance', module)
Object.values(Badge.appearances).forEach(app =>
  appearanceStory.add(app, _ => (
    <Badge appearance={app}>{`${app} Badge`}</Badge>
  ))
)

const colorStory = storiesOf('color', module)
Object.values(Badge.colors).forEach(color => {
  Object.values(Badge.appearances).forEach(app =>
    colorStory.add(`${color} ${app}`, _ => (
      <Badge appearance={app} color={color}>{`${color} ${app} Badge`}</Badge>
    ))
  )
})
