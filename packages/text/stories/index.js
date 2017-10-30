import React from 'react'

import { action } from '@storybook/addon-actions'
import backgrounds from '@storybook/addon-backgrounds'
import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import { linkTo } from '@storybook/addon-links'
import { storiesOf, addDecorator } from '@storybook/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import Text from '../react'

const bg = backgrounds([
  { name: 'product', value: core.colors.gray06, default: true }
])
const style = { color: core.colors.pink }
const className = glamor.css({ color: `${core.colors.orange} !important` })

const heading = storiesOf('Heading', module).addDecorator(bg)

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

const bgColors = ['black', 'white']
Object.keys(Theme.names)
  .map((name, i) => [name, bgColors[i]])
  .forEach(([name, backgroundColor]) =>
    heading.add(`theme ${name}`, _ => (
      <div style={{ height: '100%', width: '100%', backgroundColor }}>
        <Theme name={name}>
          <Text.Heading>
            <h2>wow</h2>
          </Text.Heading>
        </Theme>
      </div>
    ))
  )

const p = storiesOf('P', module).addDecorator(bg)

p.add('vanilla', _ => <Text.P>lorem ipsum</Text.P>)

p.add('style override', _ => <Text.P style={style}>pink</Text.P>)

p.add('className override', _ => <Text.P className={className}>orange</Text.P>)

const list = storiesOf('List', module).addDecorator(bg)

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
