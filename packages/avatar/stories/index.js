import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Avatar from '../src/react'

const storySizes = storiesOf('Default', module).addDecorator(
  themeDecorator(addons)
)

Object.keys(Avatar.sizes).forEach(size =>
  storySizes.add(size, () => (
    <Avatar
      size={size}
      src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=400"
    />
  ))
)

const names = [
  '% Special Characters',
  'Anakin Skywalker',
  'Budapest Skywalker',
  'Carlos Organa',
  'Dennis Pimenta',
  'Peia Organa',
  'Obi-Wan Kenobi',
  'Uy Marley',
  'Harry Potter',
  'Diz Blau',
  'Single'
]

const storyInitials = storiesOf('Using Initials', module)
  .addDecorator(themeDecorator(addons))
  .add('empty', () => <Avatar name={''} />)
  .add('null', () => <Avatar name={null} />)

names.forEach(name => {
  storyInitials.add(name, () => <Avatar name={name} />)
})
