import {
  layout,
  colorsBlue,
  colorsPink
} from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import Heading from '../heading'

const glamor = glamorDefault || glamorExports

const className = glamor
  .css({ color: `${colorsBlue[6]} !important` })
  .toString()

const PaddingDecorator = (storyFn: () => React.ReactNode) => (
  <div style={{ padding: layout.spacingXLarge }}>{storyFn()}</div>
)

const stories = storiesOf('Heading', module).addDecorator(PaddingDecorator)

Object.keys(Heading.sizes).forEach(size =>
  stories.add(`size: ${size}`, () => (
    <Heading size={size as keyof typeof Heading.sizes}>
      <h1>{size}</h1>
    </Heading>
  ))
)

stories.add('color: primary', () => (
  <Heading color="primary">
    <h1>Primary</h1>
  </Heading>
))
stories.add('color: secondary', () => (
  <Heading color="secondary">
    <h1>Secondary</h1>
  </Heading>
))

stories.add('style override', () => (
  <Heading style={{ color: colorsPink[6] }}>
    <h2>pink</h2>
  </Heading>
))

stories.add('className override', () => (
  <Heading className={(className as unknown) as string}>
    <h2>blue</h2>
  </Heading>
))
