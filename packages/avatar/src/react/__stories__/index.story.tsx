import React from 'react'
import { storiesOf } from '@storybook/react'

import Avatar from '../index.js'

const storySizes = storiesOf('Default', module)

Object.values(Avatar.sizes).forEach(size =>
  storySizes.add(size, () => (
    <Avatar
      alt={`${size} avatar`}
      size={size}
      src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=400"
    />
  ))
)
storySizes.add('light image', () => (
  <Avatar
    alt="light image avatar"
    src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
    name="Jake Trent"
  />
))
storySizes.add('style override', () => (
  <Avatar
    style={{ border: '3px solid red' }}
    src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
    name="Jake Trent"
  />
))
storySizes.add('className override', () => (
  <Avatar
    className="fakeClassName"
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
  .add('empty name, no src', () => <Avatar name="" />)
  .add('undefined name, no src', () => <Avatar name={undefined} />)
  .add('single string name, no src', () => <Avatar name="x" />)
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

storiesOf('Image cases', module)
  .add('tall, thin', () => (
    <Avatar
      name="Will Ferrill"
      src="https://akns-images.eonline.com/eol_images/Entire_Site/2010330/293.WillFerrell.tg.043010.jpg"
    />
  ))
  .add('flat, long', () => (
    <Avatar
      name="Chris Rock"
      src="https://cdn1.thr.com/sites/default/files/2019/03/chrisrocknaacp.jpg"
    />
  ))
  .add('square', () => (
    <Avatar
      name="Jake Trentsky"
      src="https://gravatar.com/avatar/63a1fa126f541c0f0ecf1d74f7a40640?s=320&r=g"
    />
  ))
