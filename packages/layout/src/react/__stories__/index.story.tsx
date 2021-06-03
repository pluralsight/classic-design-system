import { storiesOf } from '@storybook/react'

import React from 'react'

import { Button } from '@pluralsight/ps-design-system-button'
import * as core from '@pluralsight/ps-design-system-core'
import { Link } from '@pluralsight/ps-design-system-link'

import {
  AsideLayout,
  EqualColumnLayout,
  PageHeadingLayout,
  PageWidthLayout
} from '..'

const mockActions = [
  <Button key="action-1">Wow, an action</Button>,
  <Link key="action-2">
    <a href="https://duckduckgo.com">A link</a>
  </Link>
]

const mockManyActions = [
  <Button key="action-1">Wow, an action</Button>,
  <Link key="action-2">
    <a href="https://duckduckgo.com">A link</a>
  </Link>,
  <Button key="action-3">Wow, an action</Button>,
  <Link key="action-4">
    <a href="https://duckduckgo.com">A link</a>
  </Link>,
  <Button key="action-5">Wow, an action</Button>,
  <Link key="action-6">
    <a href="https://duckduckgo.com">A link</a>
  </Link>,
  <Button key="action-7">Wow, an action</Button>,
  <Link key="action-8">
    <a href="https://duckduckgo.com">A link</a>
  </Link>
]

storiesOf('Layout / PageWidthLayout', module)
  .add('default', () => (
    <PageWidthLayout style={{ color: 'white', outline: '1px solid red' }}>
      My content
    </PageWidthLayout>
  ))
  .add('full-bleed', () => (
    <div style={{ background: 'rebeccapurple' }}>
      <PageWidthLayout style={{ color: 'white', outline: '1px solid red' }}>
        My content
      </PageWidthLayout>
    </div>
  ))

storiesOf('Layout / PageHeadingLayout', module)
  .add('default', () => (
    <PageHeadingLayout heading={<h2>My Page</h2>}>My content</PageHeadingLayout>
  ))
  .add('long title', () => (
    <PageHeadingLayout
      heading={
        <h2>
          My page is here and it's long. My page is here and it's long. My page
          is here and it's long. My page is here and it's long.
        </h2>
      }
    >
      My content
    </PageHeadingLayout>
  ))
  .add('w/ actions', () => (
    <PageHeadingLayout heading={<h2>My Page</h2>} actions={mockActions}>
      My content
    </PageHeadingLayout>
  ))
  .add('long title w/ actions', () => (
    <PageHeadingLayout
      actions={mockActions}
      heading={
        <h2>
          My page is here and it's long. My page is here and it's long. My page
          is here and it's long. My page is here and it's long.
        </h2>
      }
    >
      My content
    </PageHeadingLayout>
  ))
  .add('long titlew/ lots of actions', () => (
    <PageHeadingLayout
      heading={
        <h2>
          My page is here and it's long. My page is here and it's long. My page
          is here and it's long. My page is here and it's long.
        </h2>
      }
      actions={mockManyActions}
    >
      My content
    </PageHeadingLayout>
  ))
  .add('w/ lots of actions', () => (
    <PageHeadingLayout heading={<h2>My Page</h2>} actions={mockManyActions}>
      My content
    </PageHeadingLayout>
  ))

const asideLayoutStory = storiesOf('Layout / AsideLayout', module)
Object.keys(AsideLayout.asidePositions).map(pos =>
  asideLayoutStory.add(`asidePosition: ${pos}`, () => (
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
asideLayoutStory.add('short main content', () => (
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
asideLayoutStory.add('short aside content', () => (
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
asideLayoutStory.add('wide, fixed aside content', () => (
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

asideLayoutStory.add('aside style overrides', () => (
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

const equalColumnLayoutStory = storiesOf('Layout / EqualColumnLayout', module)

const Box: React.FC = props => (
  <div style={{ background: core.colorsPink[6] }} {...props}>
    {props.children}
  </div>
)

Object.keys(EqualColumnLayout.counts).forEach(key =>
  equalColumnLayoutStory.add(key, () => (
    <div style={{ color: 'white' }}>
      <EqualColumnLayout
        count={
          EqualColumnLayout.counts[key as keyof typeof EqualColumnLayout.counts]
        }
      >
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
equalColumnLayoutStory.add('custom markup', () => (
  <div style={{ color: 'white' }}>
    <EqualColumnLayout count={EqualColumnLayout.counts.four}>
      <ul style={{ listStyle: 'none' }}>
        <li>First child</li>
        <li>Second child</li>
        <li>Third child</li>
        <li>Fourth child</li>
        <li>Fifth child</li>
        <li>Sixth child</li>
      </ul>
    </EqualColumnLayout>
  </div>
))
