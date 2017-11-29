import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import { AsideLayout, EqualColumnLayout, PageHeadingLayout } from '../react'

const pageHeadingLayoutStory = storiesOf('PageHeadingLayout', module)
  .addDecorator(themeDecorator(addons))
  .add('default', _ => (
    <PageHeadingLayout heading={<h2>My Page</h2>}>My content</PageHeadingLayout>
  ))

const asideLayoutStory = storiesOf('AsideLayout', module).addDecorator(
  themeDecorator(addons)
)

Object.keys(AsideLayout.asidePositions).map(pos =>
  asideLayoutStory.add(`asidePosition: ${pos}`, _ => (
    <div style={{ color: 'white' }}>
      <AsideLayout
        asidePosition={pos}
        aside={
          <AsideLayout.Aside>
            This is aside stuff that goes here. This is aside stuff that goes
            here. This is aside stuff that goes here. This is aside stuff that
            goes here.
          </AsideLayout.Aside>
        }
        main={
          <AsideLayout.Main>
            This is main stuff that goes here. This is main stuff that goes
            here. This is main stuff that goes here. This is main stuff that
            goes here.
          </AsideLayout.Main>
        }
      />
    </div>
  ))
)
asideLayoutStory.add('short main content', _ => (
  <div style={{ color: 'white' }}>
    <AsideLayout
      aside={
        <AsideLayout.Aside>
          This is aside stuff that goes here. This is aside stuff that goes
          here. This is aside stuff that goes here. This is aside stuff that
          goes here.
        </AsideLayout.Aside>
      }
      main={<AsideLayout.Main>Very little</AsideLayout.Main>}
    />
  </div>
))
asideLayoutStory.add('short aside content', _ => (
  <div style={{ color: 'white' }}>
    <AsideLayout
      aside={<AsideLayout.Aside>Very short</AsideLayout.Aside>}
      main={
        <AsideLayout.Main>
          This is main stuff that goes here. This is main stuff that goes here.
          This is main stuff that goes here. This is main stuff that goes here.
        </AsideLayout.Main>
      }
    />
  </div>
))
asideLayoutStory.add('wide, fixed aside content', _ => (
  <div style={{ color: 'white' }}>
    <AsideLayout
      aside={
        <AsideLayout.Aside>
          <div style={{ width: '700px', height: '50px', background: 'red' }}>
            Fixed width thing
          </div>
        </AsideLayout.Aside>
      }
      main={
        <AsideLayout.Main>
          This is main stuff that goes here. This is main stuff that goes here.
          This is main stuff that goes here. This is main stuff that goes here.
        </AsideLayout.Main>
      }
    />
  </div>
))

asideLayoutStory.add('aside style overrides', _ => (
  <div style={{ color: 'white' }}>
    <AsideLayout
      aside={
        <AsideLayout.Aside style={{ overflow: 'hidden' }}>
          <div style={{ width: '700px', height: '50px', background: 'red' }}>
            Fixed width thing
          </div>
        </AsideLayout.Aside>
      }
      main={
        <AsideLayout.Main>
          This is main stuff that goes here. This is main stuff that goes here.
          This is main stuff that goes here. This is main stuff that goes here.
        </AsideLayout.Main>
      }
    />
  </div>
))

const equalColumnLayoutStory = storiesOf(
  'EqualColumnLayout',
  module
).addDecorator(themeDecorator(addons))

const Box = props => (
  <div style={{ height: '100%', width: '100%', background: core.colors.pink }}>
    {props.children}
  </div>
)

Object.keys(EqualColumnLayout.counts).forEach(key =>
  equalColumnLayoutStory.add(key, _ => (
    <div style={{ color: 'white' }}>
      <EqualColumnLayout count={EqualColumnLayout.counts[key]}>
        <Box>First child</Box>
        <Box>Second child</Box>
        <Box>Third child</Box>
        <Box>Fourth child</Box>
        <Box>Fifth child</Box>
        <Box>Sixth child</Box>
      </EqualColumnLayout>
    </div>
  ))
)
