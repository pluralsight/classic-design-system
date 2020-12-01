import * as core from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import * as glamor from 'glamor'
import React from 'react'

import Heading from '../heading'

const style = { color: core.colorsPink.base }
const className = glamor
  .css({ color: `${core.colorsBlue.base} !important` })
  .toString()

const PaddingDecorator = (storyFn: () => React.ReactNode) => (
  <div style={{ padding: core.layout.spacingXLarge }}>{storyFn()}</div>
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
  <Heading style={style}>
    <h2>pink</h2>
  </Heading>
))

stories.add('className override', () => (
  <Heading className={(className as unknown) as string}>
    <h2>orange</h2>
  </Heading>
))
