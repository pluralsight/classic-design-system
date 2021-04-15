import {
  layout,
  colorsPink,
  colorsBlue
} from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import Label from '../label'

const glamor = glamorDefault || glamorExports

const className = glamor
  .css({ color: `${colorsBlue[6]} !important` })
  .toString()

const PaddingDecorator = (storyFn: () => React.ReactNode) => (
  <div style={{ padding: layout.spacingXLarge }}>{storyFn()}</div>
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

stories.add('caps: true', () => <Label caps>Caps</Label>)

stories.add('mono: true', () => (
  <div>
    <div>
      <Label mono>Monospace font</Label>
    </div>
    <div>
      <Label mono strong>
        Monospace strong
      </Label>
    </div>
    <div>
      <Label mono caps>
        Monospace caps
      </Label>
    </div>
  </div>
))

stories.add('caps & strong: true', () => (
  <Label caps strong>
    Caps
  </Label>
))

stories.add('style override', () => (
  <Label style={{ color: colorsPink[6] }}>pink</Label>
))

stories.add('className override', () => (
  <Label className={className}>blue</Label>
))
