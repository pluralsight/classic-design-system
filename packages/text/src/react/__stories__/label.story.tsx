import * as core from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import * as glamor from 'glamor'
import React from 'react'

import Label from '../label'

const style = { color: core.colorsPink.base }
const className = glamor
  .css({ color: `${core.colorsBlue.base} !important` })
  .toString()

const PaddingDecorator = (storyFn: () => React.ReactNode) => (
  <div style={{ padding: core.layout.spacingXLarge }}>{storyFn()}</div>
)

const stories = storiesOf('Label', module).addDecorator(PaddingDecorator)

Object.keys(Label.sizes).forEach(size =>
  stories.add(`size: ${size}`, () => (
    <Label size={size as keyof typeof Label.sizes}>{size}</Label>
  ))
)

stories.add('color: primary', () => <Label color="primary">Primary</Label>)
stories.add('color: secondary', () => (
  <Label color="secondary">Secondary</Label>
))

stories.add('strong: true', () => <Label strong>Strong</Label>)

stories.add('style override', () => <Label style={style}>pink</Label>)

stories.add('className override', () => (
  <Label className={className}>blue</Label>
))
