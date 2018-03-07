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
storySizes.add('light image', () => (
  <Avatar
    src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
    name="Jake Trent"
  />
))

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
  .add('empty name, no src', () => <Avatar name={''} />)
  .add('null name, no src', () => <Avatar name={null} />)
  .add('error-out image src, with name', () => (
    <Avatar name="Bill Dill" src="https://jaketrent.com/fake.jpg" />
  ))
  .add('with invalid gravatar image', () => (
    <Avatar
      name="Alan Turing"
      src="https://secure.gravatar.com/avatar/invalidhash?d=tmp"
    />
  ))
  .add('with invalid gravatar image, no name', () => (
    <Avatar src="https://secure.gravatar.com/avatar/invalidhash?d=tmp" />
  ))

names.forEach(name => {
  storyInitials.add(name, () => <Avatar name={name} />)
})

storyInitials.add('alpha-order names w/ varied colors', () => (
  <div>
    <Avatar name="Alan Turing" src="https://example.com/image.jpg" />
    <Avatar name="Alan Sleuse" src="https://example.com/image.jpg" />
    <Avatar name="Alan Alanosphere" src="https://example.com/image.jpg" />
    <Avatar name="Allen Alarm" src="https://example.com/image.jpg" />
    <Avatar name="Allen Allen" src="https://example.com/image.jpg" />
    <Avatar name="Allen Stewart" src="https://example.com/image.jpg" />
    <Avatar name="Brian Can Stand Here" src="https://example.com/image.jpg" />
    <Avatar name="Brian Can't Stand Here" src="https://example.com/image.jpg" />
    <Avatar name="Brian Life Of" src="https://example.com/image.jpg" />
    <Avatar name="Brian O'Mally" src="https://example.com/image.jpg" />
  </div>
))
