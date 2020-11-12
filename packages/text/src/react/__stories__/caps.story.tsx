import * as core from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import * as glamor from 'glamor'
import React from 'react'

import Caps from '../caps'

const style = { color: core.colorsPink.base }
const className = glamor
  .css({ color: `${core.colorsBlue.base} !important` })
  .toString()

const PaddingDecorator = (storyFn: () => React.ReactNode) => (
  <div style={{ padding: core.layout.spacingXLarge }}>{storyFn()}</div>
)

const stories = storiesOf('Caps', module).addDecorator(PaddingDecorator)

Object.keys(Caps.sizes).forEach(size =>
  stories.add(`size: ${size}`, () => (
    <Caps size={size as keyof typeof Caps.sizes}>{size}</Caps>
  ))
)

stories.add('color: primary', () => <Caps color="primary">Primary</Caps>)
stories.add('color: secondary', () => (
  <Caps color="secondary">Secondary</Caps>
))

stories.add('strong: true', () => <Caps strong>Strong</Caps>)

stories.add('style override', () => <Caps style={style}>pink</Caps>)

stories.add('className override', () => <Caps className={className}>blue</Caps>)
