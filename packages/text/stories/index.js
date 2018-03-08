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

const code = storiesOf('Code', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('empty', () => (
    <Text.P>
      before|<Text.Code />|after
    </Text.P>
  ))
  .add('standalone', () => <Text.Code>inline code</Text.Code>)
  .add('lead single line', () => (
    <Text.P>
      <Text.Code>inline code</Text.Code> that is here
    </Text.P>
  ))
  .add('ends single line', () => (
    <Text.P>
      This is where we see <Text.Code>inline code</Text.Code>
    </Text.P>
  ))
  .add('middle of paragraph', () => (
    <Text.P>
      Please advise soonest streamline data-point, and execute , price point.
      This is not the hill i want to die on going forward. Diversify kpis not
      the long pole in my tent. Synergize productive mindfulness can you send me
      an invite? nor high-level so back of the net vertical integration.
      Deliverables <Text.Code>inline code</Text.Code> granularity minimize
      backwards overflow. Baseline locked and loaded, and locked and loaded. Get
      buy-in programmatically, or out of the loop. I'll book a meeting so we can
      solution this before the sprint is over get buy-in, and closing these
      latest prospects is like putting socks on an octopus. Knowledge is power
      bake it in but take five, punch the tree, and come back in here with a
      clear head.
    </Text.P>
  ))
  .add('maintains whitespace', () => (
    <Text.Code>{`                in the middle                `}</Text.Code>
  ))
  .add('line wrap', () => (
    <Text.P>
      text at the start
      <Text.Code>
        buy-in programmatically, or out of the loop. I'll book a meeting so we
        can solution this before the sprint is over get buy-in, and closing
        these latest prospects is like putting socks on an octopus. Knowledge is
        power
      </Text.Code>
      text on the end
    </Text.P>
  ))
