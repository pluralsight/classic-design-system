import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Text from '../react'

const style = { color: core.colors.pink }
const className = glamor.css({ color: `${core.colors.orange} !important` })

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingXLarge }}>{storyFn()}</div>
)

const heading = storiesOf('Heading', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))

Object.keys(Text.Heading.sizes).forEach(size =>
  heading.add(`size: ${size}`, _ => (
    <Text.Heading size={size}>
      <h1>{size}</h1>
    </Text.Heading>
  ))
)

heading.add('style override', _ => (
  <Text.Heading style={style}>
    <h2>pink</h2>
  </Text.Heading>
))

heading.add('className override', _ => (
  <Text.Heading className={className}>
    <h2>orange</h2>
  </Text.Heading>
))

const p = storiesOf('P', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))

p.add('vanilla', _ => <Text.P>lorem ipsum</Text.P>)

p.add('style override', _ => <Text.P style={style}>pink</Text.P>)

p.add('className override', _ => <Text.P className={className}>orange</Text.P>)

const list = storiesOf('List', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))

Object.keys(Text.List.types).forEach(typeProp =>
  list.add(`type: ${typeProp}`, _ => (
    <Text.List type={typeProp}>
      <Text.List.Item>one</Text.List.Item>
      <Text.List.Item>two</Text.List.Item>
      <Text.List.Item>three</Text.List.Item>
      <Text.List.Item>four</Text.List.Item>
      <Text.List.Item>five</Text.List.Item>
    </Text.List>
  ))
)
