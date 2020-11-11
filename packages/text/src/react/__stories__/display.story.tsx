import * as core from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import * as glamor from 'glamor'
import React from 'react'

import Display from '../display'

const style = { color: core.colorsPink.base }
const className = glamor
  .css({ color: `${core.colorsBlue.base} !important` })
  .toString()

const PaddingDecorator = (storyFn: () => React.ReactNode) => (
  <div style={{ padding: core.layout.spacingXLarge }}>{storyFn()}</div>
)

const display = storiesOf('Display', module).addDecorator(PaddingDecorator)
Object.keys(Display.sizes).forEach(size =>
  display.add(`size: ${size}`, () => (
    <Display size={size as keyof typeof Display.sizes}>
      <h1>{size}</h1>
    </Display>
  ))
)
display.add('style override', () => (
  <Display style={style}>
    <h2>pink</h2>
  </Display>
))
display.add('className override', () => (
  <Display className={(className as unknown) as string}>
    <h2>blue</h2>
  </Display>
))
