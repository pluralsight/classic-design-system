import addons from '@storybook/addons'
import Button from '@pluralsight/ps-design-system-button/react'
import core from '@pluralsight/ps-design-system-core'
import Link from '@pluralsight/ps-design-system-link/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import { AsideLayout, EqualColumnLayout, PageHeadingLayout } from '../react'

storiesOf('PageHeadingLayout', module)
  .addDecorator(themeDecorator(addons))
  .add('default', _ => (
    <PageHeadingLayout heading={<h2>My Page</h2>}>My content</PageHeadingLayout>
  ))
  .add('long title', _ => (
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
  .add('w/ actions', _ => (
    <PageHeadingLayout
      heading={<h2>My Page</h2>}
      actions={[
        <Button>Wow, an action</Button>,
        <Link>
          <a href="https://duckduckgo.com">A link</a>
        </Link>
      ]}
    >
      My content
    </PageHeadingLayout>
  ))
  .add('long title w/ actions', _ => (
    <PageHeadingLayout
      actions={[
        <Button>Wow, an action</Button>,
        <Link>
          <a href="https://duckduckgo.com">A link</a>
        </Link>
      ]}
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
  .add('long titlew/ lots of actions', _ => (
    <PageHeadingLayout
      heading={
        <h2>
          My page is here and it's long. My page is here and it's long. My page
          is here and it's long. My page is here and it's long.
        </h2>
      }
      actions={[
        <Button>Wow, an action</Button>,
        <Link>
          <a href="https://duckduckgo.com">A link</a>
        </Link>,
        <Button>Wow, an action</Button>,
        <Link>
          <a href="https://duckduckgo.com">A link</a>
        </Link>,
        <Button>Wow, an action</Button>,
        <Link>
          <a href="https://duckduckgo.com">A link</a>
        </Link>,
        <Button>Wow, an action</Button>,
        <Link>
          <a href="https://duckduckgo.com">A link</a>
        </Link>
      ]}
    >
      My content
    </PageHeadingLayout>
  ))
  .add('w/ lots of actions', _ => (
    <PageHeadingLayout
      heading={<h2>My Page</h2>}
      actions={[
        <Button>Wow, an action</Button>,
        <Link>
          <a href="https://duckduckgo.com">A link</a>
        </Link>,
        <Button>Wow, an action</Button>,
        <Link>
          <a href="https://duckduckgo.com">A link</a>
        </Link>,
        <Button>Wow, an action</Button>,
        <Link>
          <a href="https://duckduckgo.com">A link</a>
        </Link>,
        <Button>Wow, an action</Button>,
        <Link>
          <a href="https://duckduckgo.com">A link</a>
        </Link>
      ]}
    >
      My content
    </PageHeadingLayout>
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
  <div style={{ background: core.colors.pink }} {...props}>
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
equalColumnLayoutStory.add('custom markup', _ => (
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
